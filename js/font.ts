import { DataArray } from "./dataarray";

enum Command {
  MOVE_TO = 0,
  LINE_TO = 1,
  CURVE_TO = 2,
  CLOSE = 3,
};

export class Character {
  readonly _data: DataArray;
  readonly _codepoint: number;
  readonly _count: number;
  ascender: number = 0.0;
  descender: number = 0.0;
  private _scale: number = 0.0;
  private _glyphs: Array<Glyph> = [];

  constructor(data: DataArray, codepoint: number) {
    this._data = data;
    this._codepoint = codepoint;
    this._scale = 1.0 / data.readShort();
    this._count = data.readShort();

    for (let i = 0; i < this._count; i++) {
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
    if (fontIndex < 0 || fontIndex >= this._glyphs.length) {
      throw new Error("Invalid font index");
    }

    let glyph = this._glyphs[fontIndex];
    // assert(glyph != null);

    if (glyph.area == null) {
      let end = glyph.byteOffset + glyph.byteLength;
      let scale = this._scale;

      this._data.seekTo(glyph.byteOffset);
      // glyphCompiler.begin(glyph);

      while (this._data.readOffset() < end) {
        switch (this._data.readByte()) {
          case Command.MOVE_TO: {
            let x = this._data.readShort() * scale;
            let y = this._data.readShort() * scale + glyph.ascender;
            // glyphCompiler.moveTo(x, y);
            break;
          }

          case Command.LINE_TO: {
            let x = this._data.readShort() * scale;
            let y = this._data.readShort() * scale + glyph.ascender;
            // glyphCompiler.lineTo(x, y);
            break;
          }

          case Command.CURVE_TO: {
            var cx = this._data.readShort() * scale;
            var cy = this._data.readShort() * scale + glyph.ascender;
            var x = this._data.readShort() * scale;
            var y = this._data.readShort() * scale + glyph.ascender;
            // glyphCompiler.curveTo(cx, cy, x, y);
            break;
          }

          case Command.CLOSE: {
            // glyphCompiler.close();
            break;
          }

          default: {
            throw new Error("Invalid command");
          }
        }
      }

      // glyphCompiler.end();
    }

    return glyph;
  }
}

class Glyph {
  advanceWidth: number = 0.0;
  ascender: number = 0;
  descender: number = 0;
  byteOffset: number = 0;
  byteLength: number = 0;
  area: any;
}

