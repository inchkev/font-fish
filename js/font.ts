/*
 * By Kevin Chen
 * partially ported from https://github.com/evanw/theta/blob/c077923138be0f7aedc28cc0cd82d1066b1fe8fb/src/core/font.sk
 */

import { Float32BufferAttribute } from 'three';

import { DataArray } from "./dataarray";
import { AABB, AABBBuilder } from "./aabb";

enum Command {
  MOVE_TO = 0,
  LINE_TO = 1,
  CURVE_TO = 2,
  CLOSE = 3,
}

enum TriangleKind {
  SOLID,
  QUADRATIC_CURVE,
}


export class Character {
  readonly _data: DataArray;
  readonly codepoint: number;
  readonly count: number;
  readonly glyphCompiler: GlyphCompiler;
  ascender: number = 0.0;
  descender: number = 0.0;
  private _scale: number = 0.0;
  private _glyphs: Array<Glyph> = [];

  constructor(data: DataArray, codepoint: number) {
    this._data = data;
    this.codepoint = codepoint;
    this._scale = 1.0 / data.readShort();
    this.glyphCompiler = new GlyphCompiler();

    this.count = data.readShort();
    console.log("count: " + this.count);
    for (let i = 0; i < this.count; i++) {
      let glyph = new Glyph();
      glyph.advanceWidth = data.readShort() * this._scale;
      glyph.ascender = data.readShort() * this._scale;
      glyph.descender = data.readShort() * this._scale;
      glyph.byteOffset = data.readInt();
      glyph.byteLength = data.readShort();
      this._glyphs.push(glyph);
    }
  }

  glyph(fontIndex: number): Glyph {
    if (fontIndex < 0 || fontIndex >= this.count) {
      throw new Error("Font index out of bounds");
    }

    let glyph = this._glyphs[fontIndex];
    // assert(glyph != null);

    if (!glyph.area) {
      let end = glyph.byteOffset + glyph.byteLength;
      let scale = this._scale;
      scale *= 2;

      this._data.seekTo(glyph.byteOffset);
      this.glyphCompiler.begin(glyph);

      while (this._data.readOffset() < end) {
        switch (this._data.readByte()) {
          case Command.MOVE_TO: {
            let x = this._data.readShort() * scale;
            let y = this._data.readShort() * scale + glyph.ascender;
            this.glyphCompiler.moveTo(x, y);
            break;
          }

          case Command.LINE_TO: {
            let x = this._data.readShort() * scale;
            let y = this._data.readShort() * scale + glyph.ascender;
            this.glyphCompiler.lineTo(x, y);
            break;
          }

          case Command.CURVE_TO: {
            var cx = this._data.readShort() * scale;
            var cy = this._data.readShort() * scale + glyph.ascender;
            var x = this._data.readShort() * scale;
            var y = this._data.readShort() * scale + glyph.ascender;
            this.glyphCompiler.curveTo(cx, cy, x, y);
            break;
          }

          case Command.CLOSE: {
            this.glyphCompiler.close();
            break;
          }

          default: {
            throw new Error("Invalid command");
          }
        }
      }

      this.glyphCompiler.end();
    }

    return glyph;
  }
}


export class Glyph {
  advanceWidth: number = 0.0;
  ascender: number = 0;
  descender: number = 0;
  byteOffset: number = 0;
  byteLength: number = 0;
  area: Float32BufferAttribute;
  bounds: AABB;
}


class GlyphCompiler {
  private _vertices: DataArray = new DataArray();
  private _firstX: number = 0.0;
  private _firstY: number = 0.0;
  private _currentX: number = 0.0;
  private _currentY: number = 0.0;
  private _contourCount: number = 0;
  private _glyph: Glyph;
  private _aabbBuilder: AABBBuilder = new AABBBuilder();

  constructor() {
  }

  begin(glyph: Glyph) {
    if (glyph.area != null) {
      throw new Error("Glyph already compiled");
    }
    this._glyph = glyph;
    this._vertices.clear();
    this._aabbBuilder.reset();
  }

  moveTo(x: number, y: number) {
    this._firstX = this._currentX = x;
    this._firstY = this._currentY = y;
    this._contourCount = 0;
  }

  lineTo(x: number, y: number) {
    if (++this._contourCount > 2) {
      this._appendTriangle(
        this._firstX, this._firstY, this._currentX, this._currentY, x, y, TriangleKind.SOLID);
    }
    this._currentX = x;
    this._currentY = y;
  }

  curveTo(cx: number, cy: number, x: number, y: number) {
    if (++this._contourCount > 2) {
      this._appendTriangle(
        this._firstX, this._firstY, this._currentX, this._currentY, cx, cy, TriangleKind.SOLID);
    }
    this._appendTriangle(this._currentX, this._currentY, cx, cy, x, y, TriangleKind.QUADRATIC_CURVE);
    this._currentX = x;
    this._currentY = y;
  }

  close() {
    this._currentX = this._firstX;
    this._currentY = this._firstY;
    this._contourCount = 0;
  }

  end() {
    const bytes = this._vertices.bytes();
    const vertices = new Float32Array(bytes.buffer.slice(0, bytes.byteLength));
    this._glyph.area = new Float32BufferAttribute(vertices, 4);
    this._glyph.bounds = this._aabbBuilder.build();
  }

  _appendTriangle(ax: number, ay: number, bx: number, by: number, cx: number, cy: number, kind: TriangleKind) {
    switch (kind) {
      case TriangleKind.SOLID: {
        for (let i = 0; i < 1; i++) {
          this._appendVertex(ax+i/2, ay, 0, 0);
          this._appendVertex(bx+i/2, by, 0, 0);
          this._appendVertex(cx+i/2, cy, 0, 0);
        }
        // this._appendVertex(ax, ay, 0, 1);
        // this._appendVertex(bx, by, 0, 1);
        // this._appendVertex(cx, cy, 0, 1);
        break;
      }
      case TriangleKind.QUADRATIC_CURVE: {
        for (let i = 0; i < 1; i++) {
          this._appendVertex(ax+i/2, ay, 0, 0);
          this._appendVertex(bx+i/2, by, 0.5, 0);
          this._appendVertex(cx+i/2, cy, 1, 1);
        }
        // this._appendVertex(ax, ay, 0, 0);
        // this._appendVertex(bx, by, 0.5, 0);
        // this._appendVertex(cx, cy, 1, 1);
        break;
      }
    }
  }

  _appendVertex(x: number, y: number, s: number, t: number) {
    this._aabbBuilder.include(x, y);
    this._vertices.appendFloat(x).appendFloat(y).appendFloat(s).appendFloat(t);
  }
}


