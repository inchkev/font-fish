export const GLSLX_SOURCE_SMOOTH_VERTEX = "precision highp float;uniform mat4 modelViewMatrix,projectionMatrix;attribute vec4 position,coord4;uniform vec2 offset;varying vec2 a;varying vec4 h;void main(){a=position.zw,h=coord4,gl_Position=projectionMatrix*modelViewMatrix*vec4((position.xy+offset),0,1);}"
export const GLSLX_SOURCE_SMOOTH_FRAGMENT = "precision highp float;varying vec2 a;varying vec4 h;void main(){gl_FragColor=h*min(1.,min(a.x,a.y));}"
export const GLSLX_SOURCE_GLYPH_VERTEX = "precision highp float;uniform mat4 modelViewMatrix,projectionMatrix;attribute vec4 position;uniform vec2 offset;varying vec2 a;void main(){a=position.zw,gl_Position=projectionMatrix*modelViewMatrix*vec4((position.xy+offset),0,1);}"
export const GLSLX_SOURCE_GLYPH_FRAGMENT = "precision highp float;uniform vec4 color;varying vec2 a;void main(){if(a.x*a.x-a.y>0.)discard;gl_FragColor=color*(gl_FrontFacing?0.062745:0.003922);}"
export const GLSLX_SOURCE_TEXT_VERTEX = "#version 300 es\nprecision highp float;uniform vec4 rect;in vec3 position;uniform mat4 modelViewMatrix, projectionMatrix;out vec2 a;void main(){a=mix(rect.xy,rect.zw,vec2(position)*.5+.5),gl_Position=projectionMatrix * modelViewMatrix * vec4(a*2.-1.,0,1);}"
export const GLSLX_SOURCE_TEXT_FRAGMENT = "#version 300 es\nprecision highp float;uniform sampler2D texturee;uniform vec4 color;in vec2 a;out vec4 fragcolor;void main(){vec2 d=texture(texturee,vec2(a.x+dFdx(a.x),a.y)).yz*255.,e=mod(d,16.),i=(d-e)/16.,c=min(abs(i-e),2.);vec3 f=texture(texturee,a).xyz*255.,g=mod(f,16.),j=(f-g)/16.,b=min(abs(j-g),2.);vec4 k=vec4((b.x+b.y+b.z)/6.,(c.y+b.x+b.y)/6.,(c.x+c.y+b.x)/6.,0);fragcolor=color.a==0.?1.-k:color*k;}"
// export const GLSLX_SOURCE_TEXT_FRAGMENT = "#extension GL_OES_standard_derivatives:enable\nprecision highp float;uniform sampler2D texture;uniform vec4 color;varying vec2 a;void main(){vec2 d=texture2D(texture,vec2(a.x+dFdx(a.x),a.y)).yz*255.,e=mod(d,16.),i=(d-e)/16.,c=min(abs(i-e),2.);vec3 f=texture2D(texture,a).xyz*255.,g=mod(f,16.),j=(f-g)/16.,b=min(abs(j-g),2.);vec4 k=vec4((b.x+b.y+b.z)/6.,(c.y+b.x+b.y)/6.,(c.x+c.y+b.x)/6.,0);gl_FragColor=color.a==0.?1.-k:color*k;}"

export const GLSLX_NAME_POSITION4 = "position" // if you change this THREE will curse you
export const GLSLX_NAME_COLOR = "color"
export const GLSLX_NAME_TEXTURE = "texturee"
export const GLSLX_NAME_OFFSET = "offset"
export const GLSLX_NAME_MODEL_VIEW_MATRIX = "modelViewMatrix"
export const GLSLX_NAME_PROJECTION_MATRIX = "projectionMatrix"
export const GLSLX_NAME_RECT = "rect"
export const GLSLX_NAME_COORD4 = "coord4"
export const GLSLX_NAME_POSITION2 = "position" // if you change this THREE will curse you

