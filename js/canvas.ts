import * as THREE from 'three';

import { AABBBuilder } from './aabb';
import { Character, Glyph } from './font';
import * as shaders from './shaders';

export class Canvas {
  private _characters = new Map<number, Character>();
  private _textMaterial: THREE.RawShaderMaterial;
  private _glyphMaterial: THREE.RawShaderMaterial;
  private _textureTarget: THREE.WebGLRenderTarget;
  private _instanceBounds: AABBBuilder = new AABBBuilder();

  _screenQuad: THREE.BufferAttribute;
  _color: THREE.DataTexture;

  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.Camera;
  bufferScene: THREE.Scene;


  constructor(scene: THREE.Scene, renderer: THREE.WebGLRenderer, camera: THREE.Camera) {
    this._textMaterial = new THREE.RawShaderMaterial({
      uniforms: {},
      vertexShader: shaders.GLSLX_SOURCE_TEXT_VERTEX,
      fragmentShader: shaders.GLSLX_SOURCE_TEXT_FRAGMENT,
      extensions: { derivatives: true },
    });
    this._textMaterial.uniforms[shaders.GLSLX_NAME_COLOR] = new THREE.Uniform(new THREE.Vector4(0.0, 0.0, 0.0, 0.0));
    this._glyphMaterial = new THREE.RawShaderMaterial({
      uniforms: {},
      vertexShader: shaders.GLSLX_SOURCE_GLYPH_VERTEX,
      fragmentShader: shaders.GLSLX_SOURCE_GLYPH_FRAGMENT,
    });
    this._glyphMaterial.uniforms[shaders.GLSLX_NAME_COLOR] = new THREE.Uniform(new THREE.Vector4(0.0, 0.0, 0.0, 1.0));
    this._glyphMaterial.uniforms[shaders.GLSLX_NAME_OFFSET] = new THREE.Uniform(new THREE.Vector2(0.0, 0.0));
    this._textureTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);

    // this._screenQuad = new THREE.Float32BufferAttribute([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1], 2);
    this._screenQuad = new THREE.Float32BufferAttribute([-1,-1,0, 1,-1,0, -1,1,0, -1,1,0, 1,-1,0, 1,1,0], 3);

    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.bufferScene = new THREE.Scene();
  }

  addCharacter(character: Character) {
    this._characters.set(character.codepoint, character);
  }

  glyph(codepoint: number, fontIndex: number): Glyph {
    if (!(codepoint in this._characters)) {
      throw new Error(`Character ${codepoint} not loaded`);
    }

    return this._characters[codepoint].glyph(fontIndex);
  }

  addGlyph(glyph: Glyph, x: number, y: number, scale: number) {
    if (glyph.area == null) {
      return;
    }

    console.log(glyph);
  }

  changeText(text: string, x: number, y: number, scale: number) {
    for (let i = 0; i < text.length; i++) {
      let codepoint = text.charCodeAt(i);
      if (!(codepoint in this._characters)) {
        console.warn(`Character ${codepoint} not loaded!`);
        continue;
      }
      let glyph = this._characters[codepoint].glyph(0);
      this.addGlyph(glyph, x, y, scale);
      // TODO: take kerning into account
      x += glyph.advanceWidth * scale;
    }
  }

  flushText(x, y) {
    console.log("flushText()");
    this._glyphMaterial.uniforms[shaders.GLSLX_NAME_OFFSET].value.x = x;
    this._glyphMaterial.uniforms[shaders.GLSLX_NAME_OFFSET].value.y = y;
    this.bufferScene.remove.apply(this.bufferScene, this.bufferScene.children);

    this.renderer.setRenderTarget(this._textureTarget);
    this.renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0), 0);
    this.renderer.clearColor();
    const context = this.renderer.getContext();
    // context.blendFunc(WebGLRenderingContext.ONE, WebGLRenderingContext.ONE);

    let xOffset = 0;
    for (const [codepoint, character] of this._characters) {
      console.log("loop:", codepoint, character);
      let glyph = character.glyph(10);
      if (glyph.area == null) {
        continue;
      }
      console.log("bounds", glyph.bounds);

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', glyph.area);
      console.log(glyph.area);
      const glyphMaterial = this._glyphMaterial.clone();
      glyphMaterial.uniforms[shaders.GLSLX_NAME_OFFSET].value.x += xOffset;
      const mesh = new THREE.Mesh(geometry, glyphMaterial);
      this.scene.add(mesh);

      let bounds = glyph.bounds;
      const left = x + xOffset + bounds.x;
      const top = y + bounds.y;
      const right = left + bounds.width;
      const bottom = top + bounds.height;
      this._instanceBounds.include(left, top);
      this._instanceBounds.include(right, top);
      this._instanceBounds.include(left, bottom);
      this._instanceBounds.include(right, bottom);
      console.log(this._instanceBounds);

      xOffset += glyph.advanceWidth;
    }

    this.renderer.render(this.scene, this.camera);

    this.renderer.setRenderTarget(null);
    this.renderer.getContext().blendFunc(WebGLRenderingContext.ZERO, WebGLRenderingContext.SRC_COLOR);

    const textMaterial = this._textMaterial.clone();
    textMaterial.uniforms[shaders.GLSLX_NAME_TEXTURE] = new THREE.Uniform(this._textureTarget.texture);
    console.log(textMaterial.uniforms[shaders.GLSLX_NAME_TEXTURE]);
    textMaterial.uniforms[shaders.GLSLX_NAME_RECT] = new THREE.Uniform(new THREE.Vector4(
      Math.floor(this._instanceBounds.minX) / window.innerWidth,
      1 - Math.ceil(this._instanceBounds.maxY) / window.innerHeight,
      Math.ceil(this._instanceBounds.maxX) / window.innerWidth,
      1 - Math.floor(this._instanceBounds.minY) / window.innerHeight
    ));
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', this._screenQuad);
    const mesh = new THREE.Mesh(geometry, textMaterial);
    this.scene.add(mesh);
    this.renderer.render(this.scene, this.camera);
    console.log("hi");
    // context.draw(WebGLRenderingContext.TRIANGLE_STRIP, textMaterial, this._screenQuad);

    // _context.draw(.TRIANGLE_STRIP, this._textMaterial, this._screenQuad);
    //
    this._instanceBounds.reset();
  }
}
