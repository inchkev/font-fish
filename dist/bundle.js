(()=>{var uf=Object.create;var nc=Object.defineProperty;var ff=Object.getOwnPropertyDescriptor;var df=Object.getOwnPropertyNames;var pf=Object.getPrototypeOf,mf=Object.prototype.hasOwnProperty;var gf=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var _f=(o,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of df(t))!mf.call(o,i)&&i!==e&&nc(o,i,{get:()=>t[i],enumerable:!(n=ff(t,i))||n.enumerable});return o};var xf=(o,t,e)=>(e=o!=null?uf(pf(o)):{},_f(t||!o||!o.__esModule?nc(e,"default",{value:o,enumerable:!0}):e,o));var tf=gf((vv,Jl)=>{(function(){function o(_,g){document.addEventListener?_.addEventListener("scroll",g,!1):_.attachEvent("scroll",g)}function t(_){document.body?_():document.addEventListener?document.addEventListener("DOMContentLoaded",function g(){document.removeEventListener("DOMContentLoaded",g),_()}):document.attachEvent("onreadystatechange",function g(){(document.readyState=="interactive"||document.readyState=="complete")&&(document.detachEvent("onreadystatechange",g),_())})}function e(_){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(_)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function n(_,g){_.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+g+";"}function i(_){var g=_.g.offsetWidth,m=g+100;return _.j.style.width=m+"px",_.i.scrollLeft=m,_.h.scrollLeft=_.h.scrollWidth+100,_.l!==g?(_.l=g,!0):!1}function s(_,g){function m(){var M=d;i(M)&&M.g.parentNode!==null&&g(M.l)}var d=_;o(_.h,m),o(_.i,m),i(_)}function r(_,g,m){g=g||{},m=m||window,this.family=_,this.style=g.style||"normal",this.weight=g.weight||"normal",this.stretch=g.stretch||"normal",this.context=m}var a=null,c=null,l=null,h=null;function u(_){return c===null&&(f(_)&&/Apple/.test(window.navigator.vendor)?(_=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!_&&603>parseInt(_[1],10)):c=!1),c}function f(_){return h===null&&(h=!!_.document.fonts),h}function p(_,g){var m=_.style,d=_.weight;if(l===null){var M=document.createElement("div");try{M.style.font="condensed 100px sans-serif"}catch{}l=M.style.font!==""}return[m,d,l?_.stretch:"","100px",g].join(" ")}r.prototype.load=function(_,g){var m=this,d=_||"BESbswy",M=0,v=g||3e3,b=new Date().getTime();return new Promise(function(y,A){if(f(m.context)&&!u(m.context)){var P=new Promise(function(x,T){function F(){new Date().getTime()-b>=v?T(Error(""+v+"ms timeout exceeded")):m.context.document.fonts.load(p(m,'"'+m.family+'"'),d).then(function(V){1<=V.length?x():setTimeout(F,25)},T)}F()}),C=new Promise(function(x,T){M=setTimeout(function(){T(Error(""+v+"ms timeout exceeded"))},v)});Promise.race([C,P]).then(function(){clearTimeout(M),y(m)},A)}else t(function(){function x(){var rt;(rt=O!=-1&&N!=-1||O!=-1&&Y!=-1||N!=-1&&Y!=-1)&&((rt=O!=N&&O!=Y&&N!=Y)||(a===null&&(rt=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),a=!!rt&&(536>parseInt(rt[1],10)||parseInt(rt[1],10)===536&&11>=parseInt(rt[2],10))),rt=a&&(O==Z&&N==Z&&Y==Z||O==H&&N==H&&Y==H||O==Q&&N==Q&&Y==Q)),rt=!rt),rt&&(tt.parentNode!==null&&tt.parentNode.removeChild(tt),clearTimeout(M),y(m))}function T(){if(new Date().getTime()-b>=v)tt.parentNode!==null&&tt.parentNode.removeChild(tt),A(Error(""+v+"ms timeout exceeded"));else{var rt=m.context.document.hidden;(rt===!0||rt===void 0)&&(O=F.g.offsetWidth,N=V.g.offsetWidth,Y=I.g.offsetWidth,x()),M=setTimeout(T,50)}}var F=new e(d),V=new e(d),I=new e(d),O=-1,N=-1,Y=-1,Z=-1,H=-1,Q=-1,tt=document.createElement("div");tt.dir="ltr",n(F,p(m,"sans-serif")),n(V,p(m,"serif")),n(I,p(m,"monospace")),tt.appendChild(F.g),tt.appendChild(V.g),tt.appendChild(I.g),m.context.document.body.appendChild(tt),Z=F.g.offsetWidth,H=V.g.offsetWidth,Q=I.g.offsetWidth,T(),s(F,function(rt){O=rt,x()}),n(F,p(m,'"'+m.family+'",sans-serif')),s(V,function(rt){N=rt,x()}),n(V,p(m,'"'+m.family+'",serif')),s(I,function(rt){Y=rt,x()}),n(I,p(m,'"'+m.family+'",monospace'))})})},typeof Jl=="object"?Jl.exports=r:(window.FontFaceObserver=r,window.FontFaceObserver.prototype.load=r.prototype.load)})()});var $o="151",_n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vf=0,ic=1,yf=2;var Ph=1,Mf=2,Bs=3,ti=0,Ne=1,zn=2;var Qn=0,ls=1,sc=2,rc=3,ac=4,bf=5,rs=100,Sf=101,wf=102,oc=103,lc=104,Tf=200,Ef=201,Af=202,Cf=203,Rh=204,Lh=205,Pf=206,Rf=207,Lf=208,If=209,Df=210,Of=0,Uf=1,Nf=2,co=3,zf=4,Ff=5,kf=6,Bf=7,Ko=0,Vf=1,Hf=2,Fn=0,Gf=1,Wf=2,Xf=3,qf=4,Yf=5,Ih=300,fs=301,ds=302,ho=303,uo=304,sa=306,fo=1e3,fn=1001,po=1002,Le=1003,cc=1004;var Ra=1005;var Ke=1006,Zf=1007;var Gs=1008;var Si=1009,Jf=1010,$f=1011,Dh=1012,Kf=1013,yi=1014,Mi=1015,Ws=1016,jf=1017,Qf=1018,cs=1020,td=1021,dn=1023,ed=1024,nd=1025,bi=1026,ps=1027,id=1028,sd=1029,rd=1030,ad=1031,od=1033,La=33776,Ia=33777,Da=33778,Oa=33779,hc=35840,uc=35841,fc=35842,dc=35843,ld=36196,pc=37492,mc=37496,gc=37808,_c=37809,xc=37810,vc=37811,yc=37812,Mc=37813,bc=37814,Sc=37815,wc=37816,Tc=37817,Ec=37818,Ac=37819,Cc=37820,Pc=37821,Ua=36492,cd=36283,Rc=36284,Lc=36285,Ic=36286;var Fr=2300,kr=2301,Na=2302,Dc=2400,Oc=2401,Uc=2402;var wi=3e3,Yt=3001,hd=3200,ud=3201,Oh=0,fd=1;var Mn="srgb",Xs="srgb-linear",Uh="display-p3";var za=7680;var dd=519,Nc=35044;var zc="300 es",mo=1035,Sn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}},ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fa=Math.PI/180,go=180/Math.PI;function tr(){let o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[o&255]+ye[o>>8&255]+ye[o>>16&255]+ye[o>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Ie(o,t,e){return Math.max(t,Math.min(e,o))}function pd(o,t){return(o%t+t)%t}function ka(o,t,e){return(1-e)*o+e*t}function Fc(o){return(o&o-1)===0&&o!==0}function md(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function mr(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function He(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Et=class{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class{constructor(){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],_=n[8],g=i[0],m=i[3],d=i[6],M=i[1],v=i[4],b=i[7],y=i[2],A=i[5],P=i[8];return s[0]=r*g+a*M+c*y,s[3]=r*m+a*v+c*A,s[6]=r*d+a*b+c*P,s[1]=l*g+h*M+u*y,s[4]=l*m+h*v+u*A,s[7]=l*d+h*b+u*P,s[2]=f*g+p*M+_*y,s[5]=f*m+p*v+_*A,s[8]=f*d+p*b+_*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*s*h+n*a*c+i*s*l-i*r*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,f=a*c-h*s,p=l*s-r*c,_=e*u+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*l-h*n)*g,t[2]=(a*n-i*r)*g,t[3]=f*g,t[4]=(h*e-i*c)*g,t[5]=(i*s-a*e)*g,t[6]=p*g,t[7]=(n*c-l*e)*g,t[8]=(r*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ba=new Dt;function Nh(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function qs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Va(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}var gd=new Dt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),_d=new Dt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function xd(o){return o.convertSRGBToLinear().applyMatrix3(_d)}function vd(o){return o.applyMatrix3(gd).convertLinearToSRGB()}var yd={[Xs]:o=>o,[Mn]:o=>o.convertSRGBToLinear(),[Uh]:xd},Md={[Xs]:o=>o,[Mn]:o=>o.convertLinearToSRGB(),[Uh]:vd},Ge={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Xs},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;let n=yd[t],i=Md[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},Gi,Br=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=qs("canvas")),Gi.width=t.width,Gi.height=t.height;let n=Gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=hs(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hs(e[n]/255)*255):e[n]=hs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vr=class{constructor(t=null){this.isSource=!0,this.uuid=tr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Ha(i[r].image)):s.push(Ha(i[r]))}else s=Ha(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ha(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Br.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bd=0,Se=class extends Sn{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=fn,i=fn,s=Ke,r=Gs,a=dn,c=Si,l=Se.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=tr(),this.name="",this.source=new Vr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fo:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fo:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=Ih;Se.DEFAULT_ANISOTROPY=1;var Xt=class{constructor(t=0,e=0,n=0,i=1){Xt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],_=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,b=(p+1)/2,y=(d+1)/2,A=(h+f)/4,P=(u+g)/4,C=(_+m)/4;return v>b&&v>y?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=P/n):b>y?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=A/i,s=C/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=P/s,i=C/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(u-g)/M,this.z=(f-h)/M,this.w=Math.acos((l+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kn=class extends Sn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Xt(0,0,t,e),this.scissorTest=!1,this.viewport=new Xt(0,0,t,e);let i={width:t,height:e,depth:1};this.texture=new Se(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ke,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Vr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hr=class extends Se{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _o=class extends Se{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[r+0],p=s[r+1],_=s[r+2],g=s[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==f||l!==p||h!==_){let m=1-a,d=c*f+l*p+h*_+u*g,M=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let y=Math.sqrt(v),A=Math.atan2(y,d*M);m=Math.sin(m*A)/y,a=Math.sin(a*A)/y}let b=a*M;if(c=c*m+f*b,l=l*m+p*b,h=h*m+_*b,u=u*m+g*b,m===1-a){let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r],f=s[r+1],p=s[r+2],_=s[r+3];return t[e]=a*_+h*u+c*p-l*f,t[e+1]=c*_+h*f+l*u-a*p,t[e+2]=l*_+h*p+a*f-c*u,t[e+3]=h*_-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){let n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),f=c(n/2),p=c(i/2),_=c(s/2);switch(r){case"XYZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"YZX":this._x=f*h*u+l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u-f*p*_;break;case"XZY":this._x=f*h*u-l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(r-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(s-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(r-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-s*c,this._y=i*h+r*c+s*a-n*l,this._z=s*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,r=this._w,a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,c=t.w,l=c*e+r*i-a*n,h=c*n+a*e-s*i,u=c*i+s*n-r*e,f=-s*e-r*n-a*i;return this.x=l*c+f*-s+h*-a-u*-r,this.y=h*c+f*-r+u*-s-l*-a,this.z=u*c+f*-a+l*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ga=new D,kc=new pn,Ti=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Wi.copy(t.boundingBox),Wi.applyMatrix4(t.matrixWorld),this.union(Wi);else{let i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){let s=i.attributes.position;for(let r=0,a=s.count;r<a;r++)Rn.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(Rn)}else i.boundingBox===null&&i.computeBoundingBox(),Wi.copy(i.boundingBox),Wi.applyMatrix4(t.matrixWorld),this.union(Wi)}let n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),gr.subVectors(this.max,Us),Xi.subVectors(t.a,Us),qi.subVectors(t.b,Us),Yi.subVectors(t.c,Us),Zn.subVectors(qi,Xi),Jn.subVectors(Yi,qi),mi.subVectors(Xi,Yi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-mi.z,mi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,mi.z,0,-mi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-mi.y,mi.x,0];return!Wa(e,Xi,qi,Yi,gr)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,Xi,qi,Yi,gr))?!1:(_r.crossVectors(Zn,Jn),e=[_r.x,_r.y,_r.z],Wa(e,Xi,qi,Yi,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Pn=[new D,new D,new D,new D,new D,new D,new D,new D],Rn=new D,Wi=new Ti,Xi=new D,qi=new D,Yi=new D,Zn=new D,Jn=new D,mi=new D,Us=new D,gr=new D,_r=new D,gi=new D;function Wa(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){gi.fromArray(o,s);let a=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Sd=new Ti,Ns=new D,Xa=new D,ms=class{constructor(t=new D,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Sd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let e=Ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ns,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(Xa)),this.expandByPoint(Ns.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new D,qa=new D,xr=new D,$n=new D,Ya=new D,vr=new D,Za=new D,Ys=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qa.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(qa);let s=t.distanceTo(e)*.5,r=-this.direction.dot(xr),a=$n.dot(this.direction),c=-$n.dot(xr),l=$n.lengthSq(),h=Math.abs(1-r*r),u,f,p,_;if(h>0)if(u=r*c-a,f=r*a-c,_=s*h,u>=0)if(f>=-_)if(f<=_){let g=1/h;u*=g,f*=g,p=u*(u+r*f+2*a)+f*(r*u+f+2*c)+l}else f=s,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-r*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(u=Math.max(0,-(r*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l);else f=r>0?-s:s,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(qa).addScaledVector(xr,f),p}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);let n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,i,s){Ya.subVectors(e,t),vr.subVectors(n,t),Za.crossVectors(Ya,vr);let r=this.direction.dot(Za),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;$n.subVectors(this.origin,t);let c=a*this.direction.dot(vr.crossVectors($n,vr));if(c<0)return null;let l=a*this.direction.dot(Ya.cross($n));if(l<0||c+l>r)return null;let h=-a*$n.dot(Za);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class{constructor(){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,a,c,l,h,u,f,p,_,g,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=r,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Zi.setFromMatrixColumn(t,0).length(),s=1/Zi.setFromMatrixColumn(t,1).length(),r=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=r*h,p=r*u,_=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+_*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=_+p*l,e[10]=r*c}else if(t.order==="YXZ"){let f=c*h,p=c*u,_=l*h,g=l*u;e[0]=f+g*a,e[4]=_*a-p,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-_,e[6]=g+f*a,e[10]=r*c}else if(t.order==="ZXY"){let f=c*h,p=c*u,_=l*h,g=l*u;e[0]=f-g*a,e[4]=-r*u,e[8]=_+p*a,e[1]=p+_*a,e[5]=r*h,e[9]=g-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){let f=r*h,p=r*u,_=a*h,g=a*u;e[0]=c*h,e[4]=_*l-p,e[8]=f*l+g,e[1]=c*u,e[5]=g*l+f,e[9]=p*l-_,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){let f=r*c,p=r*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-f*u,e[8]=_*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+_,e[10]=f-g*u}else if(t.order==="XZY"){let f=r*c,p=r*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+g,e[5]=r*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wd,t,Td)}lookAt(t,e,n){let i=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Kn.crossVectors(n,We),Kn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Kn.crossVectors(n,We)),Kn.normalize(),yr.crossVectors(We,Kn),i[0]=Kn.x,i[4]=yr.x,i[8]=We.x,i[1]=Kn.y,i[5]=yr.y,i[9]=We.y,i[2]=Kn.z,i[6]=yr.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],_=n[2],g=n[6],m=n[10],d=n[14],M=n[3],v=n[7],b=n[11],y=n[15],A=i[0],P=i[4],C=i[8],x=i[12],T=i[1],F=i[5],V=i[9],I=i[13],O=i[2],N=i[6],Y=i[10],Z=i[14],H=i[3],Q=i[7],tt=i[11],rt=i[15];return s[0]=r*A+a*T+c*O+l*H,s[4]=r*P+a*F+c*N+l*Q,s[8]=r*C+a*V+c*Y+l*tt,s[12]=r*x+a*I+c*Z+l*rt,s[1]=h*A+u*T+f*O+p*H,s[5]=h*P+u*F+f*N+p*Q,s[9]=h*C+u*V+f*Y+p*tt,s[13]=h*x+u*I+f*Z+p*rt,s[2]=_*A+g*T+m*O+d*H,s[6]=_*P+g*F+m*N+d*Q,s[10]=_*C+g*V+m*Y+d*tt,s[14]=_*x+g*I+m*Z+d*rt,s[3]=M*A+v*T+b*O+y*H,s[7]=M*P+v*F+b*N+y*Q,s[11]=M*C+v*V+b*Y+y*tt,s[15]=M*x+v*I+b*Z+y*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],_=t[3],g=t[7],m=t[11],d=t[15];return _*(+s*c*u-i*l*u-s*a*f+n*l*f+i*a*p-n*c*p)+g*(+e*c*p-e*l*f+s*r*f-i*r*p+i*l*h-s*c*h)+m*(+e*l*u-e*a*p-s*r*u+n*r*p+s*a*h-n*l*h)+d*(-i*a*h-e*c*u+e*a*f+i*r*u-n*r*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],_=t[12],g=t[13],m=t[14],d=t[15],M=u*m*l-g*f*l+g*c*p-a*m*p-u*c*d+a*f*d,v=_*f*l-h*m*l-_*c*p+r*m*p+h*c*d-r*f*d,b=h*g*l-_*u*l+_*a*p-r*g*p-h*a*d+r*u*d,y=_*u*c-h*g*c-_*a*f+r*g*f+h*a*m-r*u*m,A=e*M+n*v+i*b+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return t[0]=M*P,t[1]=(g*f*s-u*m*s-g*i*p+n*m*p+u*i*d-n*f*d)*P,t[2]=(a*m*s-g*c*s+g*i*l-n*m*l-a*i*d+n*c*d)*P,t[3]=(u*c*s-a*f*s-u*i*l+n*f*l+a*i*p-n*c*p)*P,t[4]=v*P,t[5]=(h*m*s-_*f*s+_*i*p-e*m*p-h*i*d+e*f*d)*P,t[6]=(_*c*s-r*m*s-_*i*l+e*m*l+r*i*d-e*c*d)*P,t[7]=(r*f*s-h*c*s+h*i*l-e*f*l-r*i*p+e*c*p)*P,t[8]=b*P,t[9]=(_*u*s-h*g*s-_*n*p+e*g*p+h*n*d-e*u*d)*P,t[10]=(r*g*s-_*a*s+_*n*l-e*g*l-r*n*d+e*a*d)*P,t[11]=(h*a*s-r*u*s-h*n*l+e*u*l+r*n*p-e*a*p)*P,t[12]=y*P,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*m+e*u*m)*P,t[14]=(_*a*i-r*g*i-_*n*c+e*g*c+r*n*m-e*a*m)*P,t[15]=(r*u*i-h*a*i+h*n*c-e*u*c-r*n*f+e*a*f)*P,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,c=t.z,l=s*r,h=s*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,r=e._y,a=e._z,c=e._w,l=s+s,h=r+r,u=a+a,f=s*l,p=s*h,_=s*u,g=r*h,m=r*u,d=a*u,M=c*l,v=c*h,b=c*u,y=n.x,A=n.y,P=n.z;return i[0]=(1-(g+d))*y,i[1]=(p+b)*y,i[2]=(_-v)*y,i[3]=0,i[4]=(p-b)*A,i[5]=(1-(f+d))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(_+v)*P,i[9]=(m-M)*P,i[10]=(1-(f+g))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Zi.set(i[0],i[1],i[2]).length(),r=Zi.set(i[4],i[5],i[6]).length(),a=Zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],cn.copy(this);let l=1/s,h=1/r,u=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r){let a=this.elements,c=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),f=-(r+s)/(r-s),p=-2*r*s/(r-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,r){let a=this.elements,c=1/(e-t),l=1/(n-i),h=1/(r-s),u=(e+t)*c,f=(n+i)*l,p=(r+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Zi=new D,cn=new $t,wd=new D(0,0,0),Td=new D(1,1,1),Kn=new D,yr=new D,We=new D,Bc=new $t,Vc=new pn,gs=class{constructor(t=0,e=0,n=0,i=gs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ie(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gs.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ed=0,Hc=new D,Ji=new pn,In=new $t,Mr=new D,zs=new D,Ad=new D,Cd=new pn,Gc=new D(1,0,0),Wc=new D(0,1,0),Xc=new D(0,0,1),Pd={type:"added"},qc={type:"removed"},me=class extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();let t=new D,e=new gs,n=new pn,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new Dt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(Gc,t)}rotateY(t){return this.rotateOnAxis(Wc,t)}rotateZ(t){return this.rotateOnAxis(Xc,t)}translateOnAxis(t,e){return Hc.copy(t).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gc,t)}translateY(t){return this.translateOnAxis(Wc,t)}translateZ(t){return this.translateOnAxis(Xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(zs,Mr,this.up):In.lookAt(Mr,zs,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(In),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Pd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qc)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(qc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,Ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++){let a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){let a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),p=r(t.animations),_=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};me.DEFAULT_UP=new D(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new D,Dn=new D,Ja=new D,On=new D,$i=new D,Ki=new D,Yc=new D,$a=new D,Ka=new D,ja=new D,br=!1,qe=class{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hn.subVectors(t,e),i.cross(hn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){hn.subVectors(i,e),Dn.subVectors(n,e),Ja.subVectors(t,e);let r=hn.dot(hn),a=hn.dot(Dn),c=hn.dot(Ja),l=Dn.dot(Dn),h=Dn.dot(Ja),u=r*l-a*a;if(u===0)return s.set(-2,-1,-1);let f=1/u,p=(l*c-a*h)*f,_=(r*h-a*c)*f;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,On),On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(t,e,n,i,s,r,a,c){return br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),br=!0),this.getInterpolation(t,e,n,i,s,r,a,c)}static getInterpolation(t,e,n,i,s,r,a,c){return this.getBarycoord(t,e,n,i,On),c.setScalar(0),c.addScaledVector(s,On.x),c.addScaledVector(r,On.y),c.addScaledVector(a,On.z),c}static isFrontFacing(t,e,n,i){return hn.subVectors(n,e),Dn.subVectors(t,e),hn.cross(Dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),hn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),br=!0),qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;$i.subVectors(i,n),Ki.subVectors(s,n),$a.subVectors(t,n);let c=$i.dot($a),l=Ki.dot($a);if(c<=0&&l<=0)return e.copy(n);Ka.subVectors(t,i);let h=$i.dot(Ka),u=Ki.dot(Ka);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector($i,r);ja.subVectors(t,s);let p=$i.dot(ja),_=Ki.dot(ja);if(_>=0&&p<=_)return e.copy(s);let g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Ki,a);let m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Yc.subVectors(s,i),a=(u-h)/(u-h+(p-_)),e.copy(i).addScaledVector(Yc,a);let d=1/(m+g+f);return r=g*d,a=f*d,e.copy(n).addScaledVector($i,r).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Rd=0,ei=class extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=ls,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Rh,this.blendDst=Lh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let a in s){let c=s[a];delete c.metadata,r.push(c)}return r}if(e){let s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Qa(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ge.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ge.workingColorSpace){if(t=pd(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Qa(r,s,t+1/3),this.g=Qa(r,s,t),this.b=Qa(r,s,t-1/3)}return Ge.toWorkingColorSpace(this,i),this}setStyle(t,e=Mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ge.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ge.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){let n=zh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}copyLinearToSRGB(t){return this.r=Va(t.r),this.g=Va(t.g),this.b=Va(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return Ge.fromWorkingColorSpace(Me.copy(this),t),Ie(Me.r*255,0,255)<<16^Ie(Me.g*255,0,255)<<8^Ie(Me.b*255,0,255)<<0}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ge.workingColorSpace){Ge.fromWorkingColorSpace(Me.copy(this),e);let n=Me.r,i=Me.g,s=Me.b,r=Math.max(n,i,s),a=Math.min(n,i,s),c,l,h=(a+r)/2;if(a===r)c=0,l=0;else{let u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Mn){Ge.fromWorkingColorSpace(Me.copy(this),t);let e=Me.r,n=Me.g,i=Me.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(un),un.h+=t,un.s+=e,un.l+=n,this.setHSL(un.h,un.s,un.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(Sr);let n=ka(un.h,Sr.h,e),i=ka(un.s,Sr.s,e),s=ka(un.l,Sr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Me=new zt;zt.NAMES=zh;var Gr=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var oe=new D,wr=new Et,Qe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var Wr=class extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xr=class extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ye=class extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Ld=0,$e=new $t,to=new me,ji=new D,Xe=new Ti,Fs=new Ti,pe=new D,mn=class extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nh(t)?Xr:Wr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Dt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return to.lookAt(t),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Xe.setFromBufferAttribute(s),this.morphTargetsRelative?(pe.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(pe),pe.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(pe)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(pe.addVectors(Xe.min,Fs.min),Xe.expandByPoint(pe),pe.addVectors(Xe.max,Fs.max),Xe.expandByPoint(pe)):(Xe.expandByPoint(Fs.min),Xe.expandByPoint(Fs.max))}Xe.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)pe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(pe));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)pe.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(t,l),pe.add(ji)),i=Math.max(i,n.distanceToSquared(pe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new D,h[T]=new D;let u=new D,f=new D,p=new D,_=new Et,g=new Et,m=new Et,d=new D,M=new D;function v(T,F,V){u.fromArray(i,T*3),f.fromArray(i,F*3),p.fromArray(i,V*3),_.fromArray(r,T*2),g.fromArray(r,F*2),m.fromArray(r,V*2),f.sub(u),p.sub(u),g.sub(_),m.sub(_);let I=1/(g.x*m.y-m.x*g.y);isFinite(I)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(I),M.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(I),l[T].add(d),l[F].add(d),l[V].add(d),h[T].add(M),h[F].add(M),h[V].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let T=0,F=b.length;T<F;++T){let V=b[T],I=V.start,O=V.count;for(let N=I,Y=I+O;N<Y;N+=3)v(n[N+0],n[N+1],n[N+2])}let y=new D,A=new D,P=new D,C=new D;function x(T){P.fromArray(s,T*3),C.copy(P);let F=l[T];y.copy(F),y.sub(P.multiplyScalar(P.dot(F))).normalize(),A.crossVectors(C,F);let I=A.dot(h[T])<0?-1:1;c[T*4]=y.x,c[T*4+1]=y.y,c[T*4+2]=y.z,c[T*4+3]=I}for(let T=0,F=b.length;T<F;++T){let V=b[T],I=V.start,O=V.count;for(let N=I,Y=I+O;N<Y;N+=3)x(n[N+0]),x(n[N+1]),x(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new D,s=new D,r=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pe.fromBufferAttribute(t,e),pe.normalize(),t.setXYZ(e,pe.x,pe.y,pe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let d=0;d<h;d++)f[_++]=l[p++]}return new Qe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new mn,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,c=r.length;a<c;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,h=r.length;l<h;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zc=new $t,yn=new Ys,Tr=new ms,Jc=new D,Qi=new D,ts=new D,es=new D,eo=new D,Er=new D,Ar=new Et,Cr=new Et,Pr=new Et,$c=new D,Kc=new D,jc=new D,Rr=new D,Lr=new D,je=class extends me{constructor(t=new mn,e=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Er.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(eo.fromBufferAttribute(u,t),r?Er.addScaledVector(eo,h):Er.addScaledVector(eo.sub(e),h))}e.add(Er)}return this.isSkinnedMesh&&this.applyBoneTransform(t,e),e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),yn.copy(t.ray).recast(t.near),Tr.containsPoint(yn.origin)===!1&&(yn.intersectSphere(Tr,Jc)===null||yn.origin.distanceToSquared(Jc)>(t.far-t.near)**2))||(Zc.copy(s).invert(),yn.copy(t.ray).applyMatrix4(Zc),n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1))return;let r,a=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.attributes.normal,f=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){let m=f[_],d=i[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,y=v;b<y;b+=3){let A=a.getX(b),P=a.getX(b+1),C=a.getX(b+2);r=Ir(this,d,t,yn,l,h,u,A,P,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){let M=a.getX(m),v=a.getX(m+1),b=a.getX(m+2);r=Ir(this,i,t,yn,l,h,u,M,v,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){let m=f[_],d=i[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,y=v;b<y;b+=3){let A=b,P=b+1,C=b+2;r=Ir(this,d,t,yn,l,h,u,A,P,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){let M=m,v=m+1,b=m+2;r=Ir(this,i,t,yn,l,h,u,M,v,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function Id(o,t,e,n,i,s,r,a){let c;if(t.side===Ne?c=n.intersectTriangle(r,s,i,!0,a):c=n.intersectTriangle(i,s,r,t.side===ti,a),c===null)return null;Lr.copy(a),Lr.applyMatrix4(o.matrixWorld);let l=e.ray.origin.distanceTo(Lr);return l<e.near||l>e.far?null:{distance:l,point:Lr.clone(),object:o}}function Ir(o,t,e,n,i,s,r,a,c,l){o.getVertexPosition(a,Qi),o.getVertexPosition(c,ts),o.getVertexPosition(l,es);let h=Id(o,t,e,n,Qi,ts,es,Rr);if(h){i&&(Ar.fromBufferAttribute(i,a),Cr.fromBufferAttribute(i,c),Pr.fromBufferAttribute(i,l),h.uv=qe.getInterpolation(Rr,Qi,ts,es,Ar,Cr,Pr,new Et)),s&&(Ar.fromBufferAttribute(s,a),Cr.fromBufferAttribute(s,c),Pr.fromBufferAttribute(s,l),h.uv2=qe.getInterpolation(Rr,Qi,ts,es,Ar,Cr,Pr,new Et)),r&&($c.fromBufferAttribute(r,a),Kc.fromBufferAttribute(r,c),jc.fromBufferAttribute(r,l),h.normal=qe.getInterpolation(Rr,Qi,ts,es,$c,Kc,jc,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};qe.getNormal(Qi,ts,es,u.normal),h.face=u}return h}var Ei=class extends mn{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let c=[],l=[],h=[],u=[],f=0,p=0;_("z","y","x",-1,-1,n,e,t,r,s,0),_("z","y","x",1,-1,n,e,-t,r,s,1),_("x","z","y",1,1,t,n,e,i,r,2),_("x","z","y",1,-1,t,n,-e,i,r,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function _(g,m,d,M,v,b,y,A,P,C,x){let T=b/P,F=y/C,V=b/2,I=y/2,O=A/2,N=P+1,Y=C+1,Z=0,H=0,Q=new D;for(let tt=0;tt<Y;tt++){let rt=tt*F-I;for(let lt=0;lt<N;lt++){let G=lt*T-V;Q[g]=G*M,Q[m]=rt*v,Q[d]=O,l.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[d]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(lt/P),u.push(1-tt/C),Z+=1}}for(let tt=0;tt<C;tt++)for(let rt=0;rt<P;rt++){let lt=f+rt+N*tt,G=f+rt+N*(tt+1),K=f+(rt+1)+N*(tt+1),st=f+(rt+1)+N*tt;c.push(lt,G,st),c.push(G,K,st),H+=6}a.addGroup(p,H,x),p+=H,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function _s(o){let t={};for(let e in o){t[e]={};for(let n in o[e]){let i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Re(o){let t={};for(let e=0;e<o.length;e++){let n=_s(o[e]);for(let i in n)t[i]=n[i]}return t}function Dd(o){let t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Fh(o){return o.getRenderTarget()===null&&o.outputEncoding===Yt?Mn:Xs}var Od={clone:_s,merge:Re},Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},qr=class extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},be=class extends qr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=go*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return go*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ns=-90,is=1,xo=class extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new be(ns,is,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);let s=new be(ns,is,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let r=new be(ns,is,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);let a=new be(ns,is,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);let c=new be(ns,is,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);let l=new be(ns,is,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,r,a,c,l]=this.children,h=t.getRenderTarget(),u=t.toneMapping,f=t.xr.enabled;t.toneMapping=Fn,t.xr.enabled=!1;let p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Yr=class extends Se{constructor(t,e,n,i,s,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:fs,super(t,e,n,i,s,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vo=class extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Yr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ei(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Qn});s.uniforms.tEquirect.value=e;let r=new je(i,s),a=e.minFilter;return e.minFilter===Gs&&(e.minFilter=Ke),new xo(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}},no=new D,zd=new D,Fd=new Dt,Nn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=no.subVectors(n,e).cross(zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(no),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fd.getNormalMatrix(t),i=this.coplanarPoint(no).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new ms,Dr=new D,Js=class{constructor(t=new Nn,e=new Nn,n=new Nn,i=new Nn,s=new Nn,r=new Nn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){let e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],f=n[8],p=n[9],_=n[10],g=n[11],m=n[12],d=n[13],M=n[14],v=n[15];return e[0].setComponents(a-i,u-c,g-f,v-m).normalize(),e[1].setComponents(a+i,u+c,g+f,v+m).normalize(),e[2].setComponents(a+s,u+l,g+p,v+d).normalize(),e[3].setComponents(a-s,u-l,g-p,v-d).normalize(),e[4].setComponents(a-r,u-h,g-_,v-M).normalize(),e[5].setComponents(a+r,u+h,g+_,v+M).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Dr.x=i.normal.x>0?t.max.x:t.min.x,Dr.y=i.normal.y>0?t.max.y:t.min.y,Dr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function kh(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function kd(o,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,p=o.createBuffer();o.bindBuffer(h,p),o.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(u instanceof Int16Array)_=5122;else if(u instanceof Uint32Array)_=5125;else if(u instanceof Int32Array)_=5124;else if(u instanceof Int8Array)_=5120;else if(u instanceof Uint8Array)_=5121;else if(u instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){let f=h.array,p=h.updateRange;o.bindBuffer(u,l),p.count===-1?o.bufferSubData(u,0,f):(e?o.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):o.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(o.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:r,remove:a,update:c}}var Ai=class extends mn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,p=[],_=[],g=[],m=[];for(let d=0;d<h;d++){let M=d*f-r;for(let v=0;v<l;v++){let b=v*u-s;_.push(b,-M,0),g.push(0,0,1),m.push(v/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<a;M++){let v=M+l*d,b=M+l*(d+1),y=M+1+l*(d+1),A=M+1+l*d;p.push(v,b,A),p.push(b,y,A)}this.setIndex(p),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.widthSegments,t.heightSegments)}},Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd="vec3 transformed = vec3( position );",Yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ap=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,op=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",dp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Op=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Up=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Np=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,kp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Kp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Rm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Lm=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dm=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ym=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jm=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ng=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ig=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ag=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ug=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,dg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pt={alphamap_fragment:Bd,alphamap_pars_fragment:Vd,alphatest_fragment:Hd,alphatest_pars_fragment:Gd,aomap_fragment:Wd,aomap_pars_fragment:Xd,begin_vertex:qd,beginnormal_vertex:Yd,bsdfs:Zd,iridescence_fragment:Jd,bumpmap_pars_fragment:$d,clipping_planes_fragment:Kd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:tp,color_fragment:ep,color_pars_fragment:np,color_pars_vertex:ip,color_vertex:sp,common:rp,cube_uv_reflection_fragment:ap,defaultnormal_vertex:op,displacementmap_pars_vertex:lp,displacementmap_vertex:cp,emissivemap_fragment:hp,emissivemap_pars_fragment:up,encodings_fragment:fp,encodings_pars_fragment:dp,envmap_fragment:pp,envmap_common_pars_fragment:mp,envmap_pars_fragment:gp,envmap_pars_vertex:_p,envmap_physical_pars_fragment:Pp,envmap_vertex:xp,fog_vertex:vp,fog_pars_vertex:yp,fog_fragment:Mp,fog_pars_fragment:bp,gradientmap_pars_fragment:Sp,lightmap_fragment:wp,lightmap_pars_fragment:Tp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:Ap,lights_pars_begin:Cp,lights_toon_fragment:Rp,lights_toon_pars_fragment:Lp,lights_phong_fragment:Ip,lights_phong_pars_fragment:Dp,lights_physical_fragment:Op,lights_physical_pars_fragment:Up,lights_fragment_begin:Np,lights_fragment_maps:zp,lights_fragment_end:Fp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Hp,map_fragment:Gp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:qp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:Zp,morphcolor_vertex:Jp,morphnormal_vertex:$p,morphtarget_pars_vertex:Kp,morphtarget_vertex:jp,normal_fragment_begin:Qp,normal_fragment_maps:tm,normal_pars_fragment:em,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:sm,clearcoat_normal_fragment_begin:rm,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:om,iridescence_pars_fragment:lm,output_fragment:cm,packing:hm,premultiplied_alpha_fragment:um,project_vertex:fm,dithering_fragment:dm,dithering_pars_fragment:pm,roughnessmap_fragment:mm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:_m,shadowmap_pars_vertex:xm,shadowmap_vertex:vm,shadowmask_pars_fragment:ym,skinbase_vertex:Mm,skinning_pars_vertex:bm,skinning_vertex:Sm,skinnormal_vertex:wm,specularmap_fragment:Tm,specularmap_pars_fragment:Em,tonemapping_fragment:Am,tonemapping_pars_fragment:Cm,transmission_fragment:Pm,transmission_pars_fragment:Rm,uv_pars_fragment:Lm,uv_pars_vertex:Im,uv_vertex:Dm,worldpos_vertex:Om,background_vert:Um,background_frag:Nm,backgroundCube_vert:zm,backgroundCube_frag:Fm,cube_vert:km,cube_frag:Bm,depth_vert:Vm,depth_frag:Hm,distanceRGBA_vert:Gm,distanceRGBA_frag:Wm,equirect_vert:Xm,equirect_frag:qm,linedashed_vert:Ym,linedashed_frag:Zm,meshbasic_vert:Jm,meshbasic_frag:$m,meshlambert_vert:Km,meshlambert_frag:jm,meshmatcap_vert:Qm,meshmatcap_frag:tg,meshnormal_vert:eg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:sg,meshphysical_vert:rg,meshphysical_frag:ag,meshtoon_vert:og,meshtoon_frag:lg,points_vert:cg,points_frag:hg,shadow_vert:ug,shadow_frag:fg,sprite_vert:dg,sprite_frag:pg},ot={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaTest:{value:0}}},bn={basic:{uniforms:Re([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:Re([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new zt(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:Re([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:Re([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:Re([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new zt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:Re([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:Re([ot.points,ot.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:Re([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:Re([ot.common,ot.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:Re([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:Re([ot.sprite,ot.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:Re([ot.common,ot.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:Re([ot.lights,ot.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};bn.physical={uniforms:Re([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};var Or={r:0,b:0,g:0};function mg(o,t,e,n,i,s,r){let a=new zt(0),c=s===!0?0:1,l,h,u=null,f=0,p=null;function _(m,d){let M=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v));let b=o.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(v=null),v===null?g(a,c):v&&v.isColor&&(g(v,1),M=!0),(o.autoClear||M)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===sa)?(h===void 0&&(h=new je(new Ei(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:_s(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=v.encoding!==Yt,(u!==v||f!==v.version||p!==o.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=o.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new je(new Ai(2,2),new Bn({name:"BackgroundMaterial",uniforms:_s(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=v.encoding!==Yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==o.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=o.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){m.getRGB(Or,Fh(o)),n.buffers.color.setClear(Or.r,Or.g,Or.b,d,r)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function gg(o,t,e,n){let i=o.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},c=m(null),l=c,h=!1;function u(O,N,Y,Z,H){let Q=!1;if(r){let tt=g(Z,Y,N);l!==tt&&(l=tt,p(l.object)),Q=d(O,Z,Y,H),Q&&M(O,Z,Y,H)}else{let tt=N.wireframe===!0;(l.geometry!==Z.id||l.program!==Y.id||l.wireframe!==tt)&&(l.geometry=Z.id,l.program=Y.id,l.wireframe=tt,Q=!0)}H!==null&&e.update(H,34963),(Q||h)&&(h=!1,C(O,N,Y,Z),H!==null&&o.bindBuffer(34963,e.get(H).buffer))}function f(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function p(O){return n.isWebGL2?o.bindVertexArray(O):s.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?o.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function g(O,N,Y){let Z=Y.wireframe===!0,H=a[O.id];H===void 0&&(H={},a[O.id]=H);let Q=H[N.id];Q===void 0&&(Q={},H[N.id]=Q);let tt=Q[Z];return tt===void 0&&(tt=m(f()),Q[Z]=tt),tt}function m(O){let N=[],Y=[],Z=[];for(let H=0;H<i;H++)N[H]=0,Y[H]=0,Z[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Y,attributeDivisors:Z,object:O,attributes:{},index:null}}function d(O,N,Y,Z){let H=l.attributes,Q=N.attributes,tt=0,rt=Y.getAttributes();for(let lt in rt)if(rt[lt].location>=0){let K=H[lt],st=Q[lt];if(st===void 0&&(lt==="instanceMatrix"&&O.instanceMatrix&&(st=O.instanceMatrix),lt==="instanceColor"&&O.instanceColor&&(st=O.instanceColor)),K===void 0||K.attribute!==st||st&&K.data!==st.data)return!0;tt++}return l.attributesNum!==tt||l.index!==Z}function M(O,N,Y,Z){let H={},Q=N.attributes,tt=0,rt=Y.getAttributes();for(let lt in rt)if(rt[lt].location>=0){let K=Q[lt];K===void 0&&(lt==="instanceMatrix"&&O.instanceMatrix&&(K=O.instanceMatrix),lt==="instanceColor"&&O.instanceColor&&(K=O.instanceColor));let st={};st.attribute=K,K&&K.data&&(st.data=K.data),H[lt]=st,tt++}l.attributes=H,l.attributesNum=tt,l.index=Z}function v(){let O=l.newAttributes;for(let N=0,Y=O.length;N<Y;N++)O[N]=0}function b(O){y(O,0)}function y(O,N){let Y=l.newAttributes,Z=l.enabledAttributes,H=l.attributeDivisors;Y[O]=1,Z[O]===0&&(o.enableVertexAttribArray(O),Z[O]=1),H[O]!==N&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,N),H[O]=N)}function A(){let O=l.newAttributes,N=l.enabledAttributes;for(let Y=0,Z=N.length;Y<Z;Y++)N[Y]!==O[Y]&&(o.disableVertexAttribArray(Y),N[Y]=0)}function P(O,N,Y,Z,H,Q){n.isWebGL2===!0&&(Y===5124||Y===5125)?o.vertexAttribIPointer(O,N,Y,H,Q):o.vertexAttribPointer(O,N,Y,Z,H,Q)}function C(O,N,Y,Z){if(n.isWebGL2===!1&&(O.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let H=Z.attributes,Q=Y.getAttributes(),tt=N.defaultAttributeValues;for(let rt in Q){let lt=Q[rt];if(lt.location>=0){let G=H[rt];if(G===void 0&&(rt==="instanceMatrix"&&O.instanceMatrix&&(G=O.instanceMatrix),rt==="instanceColor"&&O.instanceColor&&(G=O.instanceColor)),G!==void 0){let K=G.normalized,st=G.itemSize,ut=e.get(G);if(ut===void 0)continue;let B=ut.buffer,St=ut.type,Mt=ut.bytesPerElement;if(G.isInterleavedBufferAttribute){let at=G.data,yt=at.stride,kt=G.offset;if(at.isInstancedInterleavedBuffer){for(let _t=0;_t<lt.locationSize;_t++)y(lt.location+_t,at.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let _t=0;_t<lt.locationSize;_t++)b(lt.location+_t);o.bindBuffer(34962,B);for(let _t=0;_t<lt.locationSize;_t++)P(lt.location+_t,st/lt.locationSize,St,K,yt*Mt,(kt+st/lt.locationSize*_t)*Mt)}else{if(G.isInstancedBufferAttribute){for(let at=0;at<lt.locationSize;at++)y(lt.location+at,G.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let at=0;at<lt.locationSize;at++)b(lt.location+at);o.bindBuffer(34962,B);for(let at=0;at<lt.locationSize;at++)P(lt.location+at,st/lt.locationSize,St,K,st*Mt,st/lt.locationSize*at*Mt)}}else if(tt!==void 0){let K=tt[rt];if(K!==void 0)switch(K.length){case 2:o.vertexAttrib2fv(lt.location,K);break;case 3:o.vertexAttrib3fv(lt.location,K);break;case 4:o.vertexAttrib4fv(lt.location,K);break;default:o.vertexAttrib1fv(lt.location,K)}}}}A()}function x(){V();for(let O in a){let N=a[O];for(let Y in N){let Z=N[Y];for(let H in Z)_(Z[H].object),delete Z[H];delete N[Y]}delete a[O]}}function T(O){if(a[O.id]===void 0)return;let N=a[O.id];for(let Y in N){let Z=N[Y];for(let H in Z)_(Z[H].object),delete Z[H];delete N[Y]}delete a[O.id]}function F(O){for(let N in a){let Y=a[N];if(Y[O.id]===void 0)continue;let Z=Y[O.id];for(let H in Z)_(Z[H].object),delete Z[H];delete Y[O.id]}}function V(){I(),h=!0,l!==c&&(l=c,p(l.object))}function I(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:V,resetDefaultState:I,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:b,disableUnusedAttributes:A}}function _g(o,t,e,n){let i=n.isWebGL2,s;function r(l){s=l}function a(l,h){o.drawArrays(s,l,h),e.update(h,s,1)}function c(l,h,u){if(u===0)return;let f,p;if(i)f=o,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,l,h,u),e.update(h,s,u)}this.setMode=r,this.render=a,this.renderInstances=c}function xg(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=o.getParameter(34930),f=o.getParameter(35660),p=o.getParameter(3379),_=o.getParameter(34076),g=o.getParameter(34921),m=o.getParameter(36347),d=o.getParameter(36348),M=o.getParameter(36349),v=f>0,b=r||t.has("OES_texture_float"),y=v&&b,A=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:A}}function vg(o){let t=this,e=null,n=0,i=!1,s=!1,r=new Nn,a=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=o.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):l();else{let M=s?0:n,v=M*4,b=d.clippingState||null;c.value=b,b=h(_,f,v,p);for(let y=0;y!==v;++y)b[y]=e[y];d.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=c.value,_!==!0||m===null){let d=p+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,b=p;v!==g;++v,b+=4)r.copy(u[v]).applyMatrix4(M,a),r.normal.toArray(m,b),m[b+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function yg(o){let t=new WeakMap;function e(r,a){return a===ho?r.mapping=fs:a===uo&&(r.mapping=ds),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){let a=r.mapping;if(a===ho||a===uo)if(t.has(r)){let c=t.get(r).texture;return e(c,r.mapping)}else{let c=r.image;if(c&&c.height>0){let l=new vo(c.height/2);return l.fromEquirectangularTexture(o,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){let a=r.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var yo=class extends qr{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},as=4,Qc=[.125,.215,.35,.446,.526,.582],vi=20,io=new yo,th=new zt,so=null,xi=(1+Math.sqrt(5))/2,ss=1/xi,eh=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,xi,ss),new D(0,xi,-ss),new D(ss,0,xi),new D(-ss,0,xi),new D(xi,ss,0),new D(-xi,ss,0)],Zr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){so=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(so),t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),so=this._renderer.getRenderTarget();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Ws,format:dn,encoding:wi,depthBuffer:!1},i=nh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(s)),this._blurMaterial=bg(s,t,e)}return i}_compileMaterial(t){let e=new je(this._lodPlanes[0],t);this._renderer.compile(e,io)}_sceneToCubeUV(t,e,n,i){let a=new be(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(th),h.toneMapping=Fn,h.autoClear=!1;let p=new Gr({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),_=new je(new Ei,p),g=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(th),g=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):M===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let v=this._cubeSize;Ur(i,M*v,d>2?v:0,v,v),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===fs||t.mapping===ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());let s=i?this._cubemapMaterial:this._equirectMaterial,r=new je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Ur(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,io)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=eh[(i-1)%eh.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){let c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new je(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vi-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):vi;m>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);let d=[],M=0;for(let P=0;P<vi;++P){let C=P/g,x=Math.exp(-C*C/2);d.push(x),P===0?M+=x:P<m&&(M+=2*x)}for(let P=0;P<d.length;P++)d[P]=d[P]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-n;let b=this._sizeLods[i],y=3*b*(i>v-as?i-v+as:0),A=4*(this._cubeSize-b);Ur(e,y,A,3*b,2*b),c.setRenderTarget(e),c.render(u,io)}};function Mg(o){let t=[],e=[],n=[],i=o,s=o-as+1+Qc.length;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let c=1/a;r>o-as?c=Qc[r-o+as-1]:r===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,d=1,M=new Float32Array(g*_*p),v=new Float32Array(m*_*p),b=new Float32Array(d*_*p);for(let A=0;A<p;A++){let P=A%3*2/3-1,C=A>2?0:-1,x=[P,C,0,P+2/3,C,0,P+2/3,C+1,0,P,C,0,P+2/3,C+1,0,P,C+1,0];M.set(x,g*_*A),v.set(f,m*_*A);let T=[A,A,A,A,A,A];b.set(T,d*_*A)}let y=new mn;y.setAttribute("position",new Qe(M,g)),y.setAttribute("uv",new Qe(v,m)),y.setAttribute("faceIndex",new Qe(b,d)),t.push(y),i>as&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nh(o,t,e){let n=new kn(o,t,e);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function bg(o,t,e){let n=new Float32Array(vi),i=new D(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ih(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function sh(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sg(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ho||c===uo,h=c===fs||c===ds;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Zr(o)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Zr(o));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function wg(o){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tg(o,t,e,n){let i={},s=new WeakMap;function r(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",r),delete i[f.id];let p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let _ in f)t.update(f[_],34962);let p=u.morphAttributes;for(let _ in p){let g=p[_];for(let m=0,d=g.length;m<d;m++)t.update(g[m],34962)}}function l(u){let f=[],p=u.index,_=u.attributes.position,g=0;if(p!==null){let M=p.array;g=p.version;for(let v=0,b=M.length;v<b;v+=3){let y=M[v+0],A=M[v+1],P=M[v+2];f.push(y,A,A,P,P,y)}}else{let M=_.array;g=_.version;for(let v=0,b=M.length/3-1;v<b;v+=3){let y=v+0,A=v+1,P=v+2;f.push(y,A,A,P,P,y)}}let m=new(Nh(f)?Xr:Wr)(f,1);m.version=g;let d=s.get(u);d&&t.remove(d),s.set(u,m)}function h(u){let f=s.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Eg(o,t,e,n){let i=n.isWebGL2,s;function r(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,p){o.drawElements(s,p,a,f*c),e.update(p,s,1)}function u(f,p,_){if(_===0)return;let g,m;if(i)g=o,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,f*c,_),e.update(p,s,_)}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=u}function Ag(o){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Cg(o,t){return o[0]-t[0]}function Pg(o,t){return Math.abs(t[1])-Math.abs(o[1])}function Rg(o,t,e){let n={},i=new Float32Array(8),s=new WeakMap,r=new Xt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0,g=s.get(h);if(g===void 0||g.count!==_){let O=function(){V.dispose(),s.delete(h),h.removeEventListener("dispose",O)};g!==void 0&&g.texture.dispose();let M=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],P=h.morphAttributes.color||[],C=0;M===!0&&(C=1),v===!0&&(C=2),b===!0&&(C=3);let x=h.attributes.position.count*C,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let F=new Float32Array(x*T*4*_),V=new Hr(F,x,T,_);V.type=Mi,V.needsUpdate=!0;let I=C*4;for(let N=0;N<_;N++){let Y=y[N],Z=A[N],H=P[N],Q=x*T*4*N;for(let tt=0;tt<Y.count;tt++){let rt=tt*I;M===!0&&(r.fromBufferAttribute(Y,tt),F[Q+rt+0]=r.x,F[Q+rt+1]=r.y,F[Q+rt+2]=r.z,F[Q+rt+3]=0),v===!0&&(r.fromBufferAttribute(Z,tt),F[Q+rt+4]=r.x,F[Q+rt+5]=r.y,F[Q+rt+6]=r.z,F[Q+rt+7]=0),b===!0&&(r.fromBufferAttribute(H,tt),F[Q+rt+8]=r.x,F[Q+rt+9]=r.y,F[Q+rt+10]=r.z,F[Q+rt+11]=H.itemSize===4?r.w:1)}}g={count:_,texture:V,size:new Et(x,T)},s.set(h,g),h.addEventListener("dispose",O)}let m=0;for(let M=0;M<f.length;M++)m+=f[M];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(o,"morphTargetBaseInfluence",d),u.getUniforms().setValue(o,"morphTargetInfluences",f),u.getUniforms().setValue(o,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}else{let p=f===void 0?0:f.length,_=n[h.id];if(_===void 0||_.length!==p){_=[];for(let v=0;v<p;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<p;v++){let b=_[v];b[0]=v,b[1]=f[v]}_.sort(Pg);for(let v=0;v<8;v++)v<p&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Cg);let g=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let v=0;v<8;v++){let b=a[v],y=b[0],A=b[1];y!==Number.MAX_SAFE_INTEGER&&A?(g&&h.getAttribute("morphTarget"+v)!==g[y]&&h.setAttribute("morphTarget"+v,g[y]),m&&h.getAttribute("morphNormal"+v)!==m[y]&&h.setAttribute("morphNormal"+v,m[y]),i[v]=A,d+=A):(g&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let M=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(o,"morphTargetBaseInfluence",M),u.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function Lg(o,t,e,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);return i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),u}function r(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:r}}var Bh=new Se,Vh=new Hr,Hh=new _o,Gh=new Yr,rh=[],ah=[],oh=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function vs(o,t,e){let n=o[0];if(n<=0||n>0)return o;let i=t*e,s=rh[i];if(s===void 0&&(s=new Float32Array(i),rh[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function he(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function ue(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function ra(o,t){let e=ah[t];e===void 0&&(e=new Int32Array(t),ah[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function Ig(o,t){let e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Dg(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;o.uniform2fv(this.addr,t),ue(e,t)}}function Og(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;o.uniform3fv(this.addr,t),ue(e,t)}}function Ug(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;o.uniform4fv(this.addr,t),ue(e,t)}}function Ng(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;ch.set(n),o.uniformMatrix2fv(this.addr,!1,ch),ue(e,n)}}function zg(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;lh.set(n),o.uniformMatrix3fv(this.addr,!1,lh),ue(e,n)}}function Fg(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;oh.set(n),o.uniformMatrix4fv(this.addr,!1,oh),ue(e,n)}}function kg(o,t){let e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function Bg(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;o.uniform2iv(this.addr,t),ue(e,t)}}function Vg(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;o.uniform3iv(this.addr,t),ue(e,t)}}function Hg(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;o.uniform4iv(this.addr,t),ue(e,t)}}function Gg(o,t){let e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function Wg(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;o.uniform2uiv(this.addr,t),ue(e,t)}}function Xg(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;o.uniform3uiv(this.addr,t),ue(e,t)}}function qg(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;o.uniform4uiv(this.addr,t),ue(e,t)}}function Yg(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Bh,i)}function Zg(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hh,i)}function Jg(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Gh,i)}function $g(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vh,i)}function Kg(o){switch(o){case 5126:return Ig;case 35664:return Dg;case 35665:return Og;case 35666:return Ug;case 35674:return Ng;case 35675:return zg;case 35676:return Fg;case 5124:case 35670:return kg;case 35667:case 35671:return Bg;case 35668:case 35672:return Vg;case 35669:case 35673:return Hg;case 5125:return Gg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return $g}}function jg(o,t){o.uniform1fv(this.addr,t)}function Qg(o,t){let e=vs(t,this.size,2);o.uniform2fv(this.addr,e)}function t_(o,t){let e=vs(t,this.size,3);o.uniform3fv(this.addr,e)}function e_(o,t){let e=vs(t,this.size,4);o.uniform4fv(this.addr,e)}function n_(o,t){let e=vs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function i_(o,t){let e=vs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function s_(o,t){let e=vs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function r_(o,t){o.uniform1iv(this.addr,t)}function a_(o,t){o.uniform2iv(this.addr,t)}function o_(o,t){o.uniform3iv(this.addr,t)}function l_(o,t){o.uniform4iv(this.addr,t)}function c_(o,t){o.uniform1uiv(this.addr,t)}function h_(o,t){o.uniform2uiv(this.addr,t)}function u_(o,t){o.uniform3uiv(this.addr,t)}function f_(o,t){o.uniform4uiv(this.addr,t)}function d_(o,t,e){let n=this.cache,i=t.length,s=ra(e,i);he(n,s)||(o.uniform1iv(this.addr,s),ue(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Bh,s[r])}function p_(o,t,e){let n=this.cache,i=t.length,s=ra(e,i);he(n,s)||(o.uniform1iv(this.addr,s),ue(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Hh,s[r])}function m_(o,t,e){let n=this.cache,i=t.length,s=ra(e,i);he(n,s)||(o.uniform1iv(this.addr,s),ue(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Gh,s[r])}function g_(o,t,e){let n=this.cache,i=t.length,s=ra(e,i);he(n,s)||(o.uniform1iv(this.addr,s),ue(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Vh,s[r])}function __(o){switch(o){case 5126:return jg;case 35664:return Qg;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}var Mo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Kg(e.type)}},bo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=__(e.type)}},So=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},ro=/(\w+)(\])?(\[|\.)?/g;function hh(o,t){o.seq.push(t),o.map[t.id]=t}function x_(o,t,e){let n=o.name,i=n.length;for(ro.lastIndex=0;;){let s=ro.exec(n),r=ro.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){hh(e,l===void 0?new Mo(a,o,t):new bo(a,o,t));break}else{let u=e.map[a];u===void 0&&(u=new So(a),hh(e,u)),e=u}}}var us=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);x_(s,r,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.id in e&&n.push(r)}return n}};function uh(o,t,e){let n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}var v_=0;function y_(o,t){let e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){let a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function M_(o){switch(o){case wi:return["Linear","( value )"];case Yt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function fh(o,t,e){let n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+y_(o.getShaderSource(t),r)}else return i}function b_(o,t){let e=M_(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function S_(o,t){let e;switch(t){case Gf:e="Linear";break;case Wf:e="Reinhard";break;case Xf:e="OptimizedCineon";break;case qf:e="ACESFilmic";break;case Yf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function w_(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vs).join(`
`)}function T_(o){let t=[];for(let e in o){let n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function E_(o,t){let e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){let s=o.getActiveAttrib(t,i),r=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function Vs(o){return o!==""}function dh(o,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ph(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var A_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(o){return o.replace(A_,C_)}function C_(o,t){let e=Pt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return wo(e)}var P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(o){return o.replace(P_,R_)}function R_(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gh(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function L_(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ph?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Mf?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Bs&&(t="SHADOWMAP_TYPE_VSM"),t}function I_(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case fs:case ds:t="ENVMAP_TYPE_CUBE";break;case sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function D_(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ds:t="ENVMAP_MODE_REFRACTION";break}return t}function O_(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ko:t="ENVMAP_BLENDING_MULTIPLY";break;case Vf:t="ENVMAP_BLENDING_MIX";break;case Hf:t="ENVMAP_BLENDING_ADD";break}return t}function U_(o){let t=o.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function N_(o,t,e,n){let i=o.getContext(),s=e.defines,r=e.vertexShader,a=e.fragmentShader,c=L_(e),l=I_(e),h=D_(e),u=O_(e),f=U_(e),p=e.isWebGL2?"":w_(e),_=T_(s),g=i.createProgram(),m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[_].filter(Vs).join(`
`),m.length>0&&(m+=`
`),d=[p,_].filter(Vs).join(`
`),d.length>0&&(d+=`
`)):(m=[gh(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),d=[p,gh(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?S_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.encodings_pars_fragment,b_("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),r=wo(r),r=dh(r,e),r=ph(r,e),a=wo(a),a=dh(a,e),a=ph(a,e),r=mh(r),a=mh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=M+m+r,b=M+d+a,y=uh(i,35633,v),A=uh(i,35632,b);if(i.attachShader(g,y),i.attachShader(g,A),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),o.debug.checkShaderErrors){let x=i.getProgramInfoLog(g).trim(),T=i.getShaderInfoLog(y).trim(),F=i.getShaderInfoLog(A).trim(),V=!0,I=!0;if(i.getProgramParameter(g,35714)===!1)if(V=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,g,y,A);else{let O=fh(i,y,"vertex"),N=fh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+x+`
`+O+`
`+N)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(T===""||F==="")&&(I=!1);I&&(this.diagnostics={runnable:V,programLog:x,vertexShader:{log:T,prefix:m},fragmentShader:{log:F,prefix:d}})}i.deleteShader(y),i.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new us(i,g)),P};let C;return this.getAttributes=function(){return C===void 0&&(C=E_(i,g)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=e.shaderName,this.id=v_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=A,this}var z_=0,To=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Eo(t),e.set(t,n)),n}},Eo=class{constructor(t){this.id=z_++,this.code=t,this.usedTimes=0}};function F_(o,t,e,n,i,s,r){let a=new Zs,c=new To,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===1?"uv2":"uv"}function m(x,T,F,V,I){let O=V.fog,N=I.geometry,Y=x.isMeshStandardMaterial?V.environment:null,Z=(x.isMeshStandardMaterial?e:t).get(x.envMap||Y),H=Z&&Z.mapping===sa?Z.image.height:null,Q=_[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let tt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,rt=tt!==void 0?tt.length:0,lt=0;N.morphAttributes.position!==void 0&&(lt=1),N.morphAttributes.normal!==void 0&&(lt=2),N.morphAttributes.color!==void 0&&(lt=3);let G,K,st,ut;if(Q){let dt=bn[Q];G=dt.vertexShader,K=dt.fragmentShader}else G=x.vertexShader,K=x.fragmentShader,c.update(x),st=c.getVertexShaderID(x),ut=c.getFragmentShaderID(x);let B=o.getRenderTarget(),St=I.isInstancedMesh===!0,Mt=!!x.map,at=!!x.matcap,yt=!!Z,kt=!!x.aoMap,_t=!!x.lightMap,At=!!x.bumpMap,Qt=!!x.normalMap,Zt=!!x.displacementMap,re=!!x.emissiveMap,ne=!!x.metalnessMap,Ft=!!x.roughnessMap,Wt=x.clearcoat>0,xe=x.iridescence>0,E=x.sheen>0,S=x.transmission>0,W=Wt&&!!x.clearcoatMap,et=Wt&&!!x.clearcoatNormalMap,it=Wt&&!!x.clearcoatRoughnessMap,ct=xe&&!!x.iridescenceMap,R=xe&&!!x.iridescenceThicknessMap,j=E&&!!x.sheenColorMap,k=E&&!!x.sheenRoughnessMap,ht=!!x.specularMap,pt=!!x.specularColorMap,gt=!!x.specularIntensityMap,ft=S&&!!x.transmissionMap,mt=S&&!!x.thicknessMap,wt=!!x.gradientMap,Rt=!!x.alphaMap,ie=x.alphaTest>0,L=!!x.extensions,q=!!N.attributes.uv2;return{isWebGL2:h,shaderID:Q,shaderName:x.type,vertexShader:G,fragmentShader:K,defines:x.defines,customVertexShaderID:st,customFragmentShaderID:ut,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:St,instancingColor:St&&I.instanceColor!==null,supportsVertexTextures:f,outputEncoding:B===null?o.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:wi,map:Mt,matcap:at,envMap:yt,envMapMode:yt&&Z.mapping,envMapCubeUVHeight:H,aoMap:kt,lightMap:_t,bumpMap:At,normalMap:Qt,displacementMap:f&&Zt,emissiveMap:re,normalMapObjectSpace:Qt&&x.normalMapType===fd,normalMapTangentSpace:Qt&&x.normalMapType===Oh,decodeVideoTexture:Mt&&x.map.isVideoTexture===!0&&x.map.encoding===Yt,metalnessMap:ne,roughnessMap:Ft,clearcoat:Wt,clearcoatMap:W,clearcoatNormalMap:et,clearcoatRoughnessMap:it,iridescence:xe,iridescenceMap:ct,iridescenceThicknessMap:R,sheen:E,sheenColorMap:j,sheenRoughnessMap:k,specularMap:ht,specularColorMap:pt,specularIntensityMap:gt,transmission:S,transmissionMap:ft,thicknessMap:mt,gradientMap:wt,opaque:x.transparent===!1&&x.blending===ls,alphaMap:Rt,alphaTest:ie,combine:x.combine,mapUv:Mt&&g(x.map.channel),aoMapUv:kt&&g(x.aoMap.channel),lightMapUv:_t&&g(x.lightMap.channel),bumpMapUv:At&&g(x.bumpMap.channel),normalMapUv:Qt&&g(x.normalMap.channel),displacementMapUv:Zt&&g(x.displacementMap.channel),emissiveMapUv:re&&g(x.emissiveMap.channel),metalnessMapUv:ne&&g(x.metalnessMap.channel),roughnessMapUv:Ft&&g(x.roughnessMap.channel),clearcoatMapUv:W&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:et&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:R&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:j&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:k&&g(x.sheenRoughnessMap.channel),specularMapUv:ht&&g(x.specularMap.channel),specularColorMapUv:pt&&g(x.specularColorMap.channel),specularIntensityMapUv:gt&&g(x.specularIntensityMap.channel),transmissionMapUv:ft&&g(x.transmissionMap.channel),thicknessMapUv:mt&&g(x.thicknessMap.channel),alphaMapUv:Rt&&g(x.alphaMap.channel),vertexTangents:Qt&&!!N.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs2:q,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(Mt||Rt),fog:!!O,useFog:x.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:lt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:Fn,useLegacyLights:o.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zn,flipSided:x.side===Ne,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:L&&x.extensions.derivatives===!0,extensionFragDepth:L&&x.extensions.fragDepth===!0,extensionDrawBuffers:L&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let F in x.defines)T.push(F),T.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(M(T,x),v(T,x),T.push(o.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function M(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUvs2&&a.enable(13),T.vertexTangents&&a.enable(14),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.decodeVideoTexture&&a.enable(17),T.opaque&&a.enable(18),T.pointsUvs&&a.enable(19),x.push(a.mask)}function b(x){let T=_[x.type],F;if(T){let V=bn[T];F=Od.clone(V.uniforms)}else F=x.uniforms;return F}function y(x,T){let F;for(let V=0,I=l.length;V<I;V++){let O=l[V];if(O.cacheKey===T){F=O,++F.usedTimes;break}}return F===void 0&&(F=new N_(o,T,x,s),l.push(F)),F}function A(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),x.destroy()}}function P(x){c.remove(x)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:y,releaseProgram:A,releaseShaderCache:P,programs:l,dispose:C}}function k_(){let o=new WeakMap;function t(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function e(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function B_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function _h(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function xh(){let o=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(u,f,p,_,g,m){let d=o[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},o[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=m),t++,d}function a(u,f,p,_,g,m){let d=r(u,f,p,_,g,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,_,g,m){let d=r(u,f,p,_,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||B_),n.length>1&&n.sort(f||_h),i.length>1&&i.sort(f||_h)}function h(){for(let u=t,f=o.length;u<f;u++){let p=o[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function V_(){let o=new WeakMap;function t(n,i){let s=o.get(n),r;return s===void 0?(r=new xh,o.set(n,[r])):i>=s.length?(r=new xh,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function H_(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new zt};break;case"SpotLight":e={position:new D,direction:new D,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new D,halfWidth:new D,halfHeight:new D};break}return o[t.id]=e,e}}}function G_(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}var W_=0;function X_(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function q_(o,t){let e=new H_,n=G_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new D);let s=new D,r=new $t,a=new $t;function c(h,u){let f=0,p=0,_=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let g=0,m=0,d=0,M=0,v=0,b=0,y=0,A=0,P=0,C=0;h.sort(X_);let x=u===!0?Math.PI:1;for(let F=0,V=h.length;F<V;F++){let I=h[F],O=I.color,N=I.intensity,Y=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=O.r*N*x,p+=O.g*N*x,_+=O.b*N*x;else if(I.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(I.sh.coefficients[H],N);else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity*x),I.castShadow){let Q=I.shadow,tt=n.get(I);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,i.directionalShadow[g]=tt,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=I.shadow.matrix,b++}i.directional[g]=H,g++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(O).multiplyScalar(N*x),H.distance=Y,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,i.spot[d]=H;let Q=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,Q.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[d]=Q.matrix,I.castShadow){let tt=n.get(I);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,i.spotShadow[d]=tt,i.spotShadowMap[d]=Z,A++}d++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(O).multiplyScalar(N),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=H,M++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity*x),H.distance=I.distance,H.decay=I.decay,I.castShadow){let Q=I.shadow,tt=n.get(I);tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,i.pointShadow[m]=tt,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=I.shadow.matrix,y++}i.point[m]=H,m++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(N*x),H.groundColor.copy(I.groundColor).multiplyScalar(N*x),i.hemi[v]=H,v++}}M>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=_;let T=i.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==d||T.rectAreaLength!==M||T.hemiLength!==v||T.numDirectionalShadows!==b||T.numPointShadows!==y||T.numSpotShadows!==A||T.numSpotMaps!==P)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=M,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=A+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,T.directionalLength=g,T.pointLength=m,T.spotLength=d,T.rectAreaLength=M,T.hemiLength=v,T.numDirectionalShadows=b,T.numPointShadows=y,T.numSpotShadows=A,T.numSpotMaps=P,i.version=W_++)}function l(h,u){let f=0,p=0,_=0,g=0,m=0,d=u.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){let b=h[M];if(b.isDirectionalLight){let y=i.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),f++}else if(b.isSpotLight){let y=i.spot[_];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),_++}else if(b.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let y=i.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){let y=i.hemi[m];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:i}}function vh(o,t){let e=new q_(o,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:a}}function Y_(o,t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),c;return a===void 0?(c=new vh(o,t),e.set(s,[c])):r>=a.length?(c=new vh(o,t),a.push(c)):c=a[r],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var Ao=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Co=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $_(o,t,e){let n=new Js,i=new Et,s=new Et,r=new Xt,a=new Ao({depthPacking:ud}),c=new Co,l={},h=e.maxTextureSize,u={[ti]:Ne,[Ne]:ti,[zn]:zn},f=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Z_,fragmentShader:J_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new mn;_.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new je(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ph,this.render=function(b,y,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let P=o.getRenderTarget(),C=o.getActiveCubeFace(),x=o.getActiveMipmapLevel(),T=o.state;T.setBlending(Qn),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let F=0,V=b.length;F<V;F++){let I=b[F],O=I.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let N=O.getFrameExtents();if(i.multiply(N),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/N.x),i.x=s.x*N.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/N.y),i.y=s.y*N.y,O.mapSize.y=s.y)),O.map===null){let Z=this.type!==Bs?{minFilter:Le,magFilter:Le}:{};O.map=new kn(i.x,i.y,Z),O.map.texture.name=I.name+".shadowMap",O.camera.updateProjectionMatrix()}o.setRenderTarget(O.map),o.clear();let Y=O.getViewportCount();for(let Z=0;Z<Y;Z++){let H=O.getViewport(Z);r.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),T.viewport(r),O.updateMatrices(I,Z),n=O.getFrustum(),v(y,A,O.camera,I,this.type)}O.isPointLightShadow!==!0&&this.type===Bs&&d(O,A),O.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(P,C,x)};function d(b,y){let A=t.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new kn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(y,null,A,f,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(y,null,A,p,g,null)}function M(b,y,A,P){let C=null,x=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(x!==void 0)C=x;else if(C=A.isPointLight===!0?c:a,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){let T=C.uuid,F=y.uuid,V=l[T];V===void 0&&(V={},l[T]=V);let I=V[F];I===void 0&&(I=C.clone(),V[F]=I),C=I}if(C.visible=y.visible,C.wireframe=y.wireframe,P===Bs?C.side=y.shadowSide!==null?y.shadowSide:y.side:C.side=y.shadowSide!==null?y.shadowSide:u[y.side],C.alphaMap=y.alphaMap,C.alphaTest=y.alphaTest,C.map=y.map,C.clipShadows=y.clipShadows,C.clippingPlanes=y.clippingPlanes,C.clipIntersection=y.clipIntersection,C.displacementMap=y.displacementMap,C.displacementScale=y.displacementScale,C.displacementBias=y.displacementBias,C.wireframeLinewidth=y.wireframeLinewidth,C.linewidth=y.linewidth,A.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let T=o.properties.get(C);T.light=A}return C}function v(b,y,A,P,C){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Bs)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);let F=t.update(b),V=b.material;if(Array.isArray(V)){let I=F.groups;for(let O=0,N=I.length;O<N;O++){let Y=I[O],Z=V[Y.materialIndex];if(Z&&Z.visible){let H=M(b,Z,P,C);o.renderBufferDirect(A,null,F,H,b,Y)}}}else if(V.visible){let I=M(b,V,P,C);o.renderBufferDirect(A,null,F,I,b,null)}}let T=b.children;for(let F=0,V=T.length;F<V;F++)v(T[F],y,A,P,C)}}function K_(o,t,e){let n=e.isWebGL2;function i(){let L=!1,q=new Xt,nt=null,dt=new Xt(0,0,0,0);return{setMask:function(xt){nt!==xt&&!L&&(o.colorMask(xt,xt,xt,xt),nt=xt)},setLocked:function(xt){L=xt},setClear:function(xt,qt,Jt,ve,Yn){Yn===!0&&(xt*=ve,qt*=ve,Jt*=ve),q.set(xt,qt,Jt,ve),dt.equals(q)===!1&&(o.clearColor(xt,qt,Jt,ve),dt.copy(q))},reset:function(){L=!1,nt=null,dt.set(-1,0,0,0)}}}function s(){let L=!1,q=null,nt=null,dt=null;return{setTest:function(xt){xt?B(2929):St(2929)},setMask:function(xt){q!==xt&&!L&&(o.depthMask(xt),q=xt)},setFunc:function(xt){if(nt!==xt){switch(xt){case Of:o.depthFunc(512);break;case Uf:o.depthFunc(519);break;case Nf:o.depthFunc(513);break;case co:o.depthFunc(515);break;case zf:o.depthFunc(514);break;case Ff:o.depthFunc(518);break;case kf:o.depthFunc(516);break;case Bf:o.depthFunc(517);break;default:o.depthFunc(515)}nt=xt}},setLocked:function(xt){L=xt},setClear:function(xt){dt!==xt&&(o.clearDepth(xt),dt=xt)},reset:function(){L=!1,q=null,nt=null,dt=null}}}function r(){let L=!1,q=null,nt=null,dt=null,xt=null,qt=null,Jt=null,ve=null,Yn=null;return{setTest:function(se){L||(se?B(2960):St(2960))},setMask:function(se){q!==se&&!L&&(o.stencilMask(se),q=se)},setFunc:function(se,Je,vn){(nt!==se||dt!==Je||xt!==vn)&&(o.stencilFunc(se,Je,vn),nt=se,dt=Je,xt=vn)},setOp:function(se,Je,vn){(qt!==se||Jt!==Je||ve!==vn)&&(o.stencilOp(se,Je,vn),qt=se,Jt=Je,ve=vn)},setLocked:function(se){L=se},setClear:function(se){Yn!==se&&(o.clearStencil(se),Yn=se)},reset:function(){L=!1,q=null,nt=null,dt=null,xt=null,qt=null,Jt=null,ve=null,Yn=null}}}let a=new i,c=new s,l=new r,h=new WeakMap,u=new WeakMap,f={},p={},_=new WeakMap,g=[],m=null,d=!1,M=null,v=null,b=null,y=null,A=null,P=null,C=null,x=!1,T=null,F=null,V=null,I=null,O=null,N=o.getParameter(35661),Y=!1,Z=0,H=o.getParameter(7938);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=Z>=2);let Q=null,tt={},rt=o.getParameter(3088),lt=o.getParameter(2978),G=new Xt().fromArray(rt),K=new Xt().fromArray(lt);function st(L,q,nt){let dt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(L,xt),o.texParameteri(L,10241,9728),o.texParameteri(L,10240,9728);for(let qt=0;qt<nt;qt++)o.texImage2D(q+qt,0,6408,1,1,0,6408,5121,dt);return xt}let ut={};ut[3553]=st(3553,3553,1),ut[34067]=st(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),B(2929),c.setFunc(co),Zt(!1),re(ic),B(2884),At(Qn);function B(L){f[L]!==!0&&(o.enable(L),f[L]=!0)}function St(L){f[L]!==!1&&(o.disable(L),f[L]=!1)}function Mt(L,q){return p[L]!==q?(o.bindFramebuffer(L,q),p[L]=q,n&&(L===36009&&(p[36160]=q),L===36160&&(p[36009]=q)),!0):!1}function at(L,q){let nt=g,dt=!1;if(L)if(nt=_.get(q),nt===void 0&&(nt=[],_.set(q,nt)),L.isWebGLMultipleRenderTargets){let xt=L.texture;if(nt.length!==xt.length||nt[0]!==36064){for(let qt=0,Jt=xt.length;qt<Jt;qt++)nt[qt]=36064+qt;nt.length=xt.length,dt=!0}}else nt[0]!==36064&&(nt[0]=36064,dt=!0);else nt[0]!==1029&&(nt[0]=1029,dt=!0);dt&&(e.isWebGL2?o.drawBuffers(nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(nt))}function yt(L){return m!==L?(o.useProgram(L),m=L,!0):!1}let kt={[rs]:32774,[Sf]:32778,[wf]:32779};if(n)kt[oc]=32775,kt[lc]=32776;else{let L=t.get("EXT_blend_minmax");L!==null&&(kt[oc]=L.MIN_EXT,kt[lc]=L.MAX_EXT)}let _t={[Tf]:0,[Ef]:1,[Af]:768,[Rh]:770,[Df]:776,[Lf]:774,[Pf]:772,[Cf]:769,[Lh]:771,[If]:775,[Rf]:773};function At(L,q,nt,dt,xt,qt,Jt,ve){if(L===Qn){d===!0&&(St(3042),d=!1);return}if(d===!1&&(B(3042),d=!0),L!==bf){if(L!==M||ve!==x){if((v!==rs||A!==rs)&&(o.blendEquation(32774),v=rs,A=rs),ve)switch(L){case ls:o.blendFuncSeparate(1,771,1,771);break;case sc:o.blendFunc(1,1);break;case rc:o.blendFuncSeparate(0,769,0,1);break;case ac:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ls:o.blendFuncSeparate(770,771,1,771);break;case sc:o.blendFunc(770,1);break;case rc:o.blendFuncSeparate(0,769,0,1);break;case ac:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,y=null,P=null,C=null,M=L,x=ve}return}xt=xt||q,qt=qt||nt,Jt=Jt||dt,(q!==v||xt!==A)&&(o.blendEquationSeparate(kt[q],kt[xt]),v=q,A=xt),(nt!==b||dt!==y||qt!==P||Jt!==C)&&(o.blendFuncSeparate(_t[nt],_t[dt],_t[qt],_t[Jt]),b=nt,y=dt,P=qt,C=Jt),M=L,x=!1}function Qt(L,q){L.side===zn?St(2884):B(2884);let nt=L.side===Ne;q&&(nt=!nt),Zt(nt),L.blending===ls&&L.transparent===!1?At(Qn):At(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let dt=L.stencilWrite;l.setTest(dt),dt&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ft(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?B(32926):St(32926)}function Zt(L){T!==L&&(L?o.frontFace(2304):o.frontFace(2305),T=L)}function re(L){L!==vf?(B(2884),L!==F&&(L===ic?o.cullFace(1029):L===yf?o.cullFace(1028):o.cullFace(1032))):St(2884),F=L}function ne(L){L!==V&&(Y&&o.lineWidth(L),V=L)}function Ft(L,q,nt){L?(B(32823),(I!==q||O!==nt)&&(o.polygonOffset(q,nt),I=q,O=nt)):St(32823)}function Wt(L){L?B(3089):St(3089)}function xe(L){L===void 0&&(L=33984+N-1),Q!==L&&(o.activeTexture(L),Q=L)}function E(L,q,nt){nt===void 0&&(Q===null?nt=33984+N-1:nt=Q);let dt=tt[nt];dt===void 0&&(dt={type:void 0,texture:void 0},tt[nt]=dt),(dt.type!==L||dt.texture!==q)&&(Q!==nt&&(o.activeTexture(nt),Q=nt),o.bindTexture(L,q||ut[L]),dt.type=L,dt.texture=q)}function S(){let L=tt[Q];L!==void 0&&L.type!==void 0&&(o.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function W(){try{o.compressedTexImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{o.compressedTexImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{o.texSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{o.texSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function R(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{o.texStorage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{o.texStorage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{o.texImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{o.texImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(L){G.equals(L)===!1&&(o.scissor(L.x,L.y,L.z,L.w),G.copy(L))}function mt(L){K.equals(L)===!1&&(o.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function wt(L,q){let nt=u.get(q);nt===void 0&&(nt=new WeakMap,u.set(q,nt));let dt=nt.get(L);dt===void 0&&(dt=o.getUniformBlockIndex(q,L.name),nt.set(L,dt))}function Rt(L,q){let dt=u.get(q).get(L);h.get(q)!==dt&&(o.uniformBlockBinding(q,dt,L.__bindingPointIndex),h.set(q,dt))}function ie(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},Q=null,tt={},p={},_=new WeakMap,g=[],m=null,d=!1,M=null,v=null,b=null,y=null,A=null,P=null,C=null,x=!1,T=null,F=null,V=null,I=null,O=null,G.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:B,disable:St,bindFramebuffer:Mt,drawBuffers:at,useProgram:yt,setBlending:At,setMaterial:Qt,setFlipSided:Zt,setCullFace:re,setLineWidth:ne,setPolygonOffset:Ft,setScissorTest:Wt,activeTexture:xe,bindTexture:E,unbindTexture:S,compressedTexImage2D:W,compressedTexImage3D:et,texImage2D:pt,texImage3D:gt,updateUBOMapping:wt,uniformBlockBinding:Rt,texStorage2D:k,texStorage3D:ht,texSubImage2D:it,texSubImage3D:ct,compressedTexSubImage2D:R,compressedTexSubImage3D:j,scissor:ft,viewport:mt,reset:ie}}function j_(o,t,e,n,i,s,r){let a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap,g,m=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,S){return d?new OffscreenCanvas(E,S):qs("canvas")}function v(E,S,W,et){let it=1;if((E.width>et||E.height>et)&&(it=et/Math.max(E.width,E.height)),it<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let ct=S?md:Math.floor,R=ct(it*E.width),j=ct(it*E.height);g===void 0&&(g=M(R,j));let k=W?M(R,j):g;return k.width=R,k.height=j,k.getContext("2d").drawImage(E,0,0,R,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+R+"x"+j+")."),k}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function b(E){return Fc(E.width)&&Fc(E.height)}function y(E){return a?!1:E.wrapS!==fn||E.wrapT!==fn||E.minFilter!==Le&&E.minFilter!==Ke}function A(E,S){return E.generateMipmaps&&S&&E.minFilter!==Le&&E.minFilter!==Ke}function P(E){o.generateMipmap(E)}function C(E,S,W,et,it=!1){if(a===!1)return S;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ct=S;return S===6403&&(W===5126&&(ct=33326),W===5131&&(ct=33325),W===5121&&(ct=33321)),S===33319&&(W===5126&&(ct=33328),W===5131&&(ct=33327),W===5121&&(ct=33323)),S===6408&&(W===5126&&(ct=34836),W===5131&&(ct=34842),W===5121&&(ct=et===Yt&&it===!1?35907:32856),W===32819&&(ct=32854),W===32820&&(ct=32855)),(ct===33325||ct===33326||ct===33327||ct===33328||ct===34842||ct===34836)&&t.get("EXT_color_buffer_float"),ct}function x(E,S,W){return A(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==Le&&E.minFilter!==Ke?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function T(E){return E===Le||E===cc||E===Ra?9728:9729}function F(E){let S=E.target;S.removeEventListener("dispose",F),I(S),S.isVideoTexture&&_.delete(S)}function V(E){let S=E.target;S.removeEventListener("dispose",V),N(S)}function I(E){let S=n.get(E);if(S.__webglInit===void 0)return;let W=E.source,et=m.get(W);if(et){let it=et[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&O(E),Object.keys(et).length===0&&m.delete(W)}n.remove(E)}function O(E){let S=n.get(E);o.deleteTexture(S.__webglTexture);let W=E.source,et=m.get(W);delete et[S.__cacheKey],r.memory.textures--}function N(E){let S=E.texture,W=n.get(E),et=n.get(S);if(et.__webglTexture!==void 0&&(o.deleteTexture(et.__webglTexture),r.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let it=0;it<6;it++)o.deleteFramebuffer(W.__webglFramebuffer[it]),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer[it]);else{if(o.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&o.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let it=0;it<W.__webglColorRenderbuffer.length;it++)W.__webglColorRenderbuffer[it]&&o.deleteRenderbuffer(W.__webglColorRenderbuffer[it]);W.__webglDepthRenderbuffer&&o.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let it=0,ct=S.length;it<ct;it++){let R=n.get(S[it]);R.__webglTexture&&(o.deleteTexture(R.__webglTexture),r.memory.textures--),n.remove(S[it])}n.remove(S),n.remove(E)}let Y=0;function Z(){Y=0}function H(){let E=Y;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),Y+=1,E}function Q(E){let S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.encoding),S.join()}function tt(E,S){let W=n.get(E);if(E.isVideoTexture&&Wt(E),E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){let et=E.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(W,E,S);return}}e.bindTexture(3553,W.__webglTexture,33984+S)}function rt(E,S){let W=n.get(E);if(E.version>0&&W.__version!==E.version){St(W,E,S);return}e.bindTexture(35866,W.__webglTexture,33984+S)}function lt(E,S){let W=n.get(E);if(E.version>0&&W.__version!==E.version){St(W,E,S);return}e.bindTexture(32879,W.__webglTexture,33984+S)}function G(E,S){let W=n.get(E);if(E.version>0&&W.__version!==E.version){Mt(W,E,S);return}e.bindTexture(34067,W.__webglTexture,33984+S)}let K={[fo]:10497,[fn]:33071,[po]:33648},st={[Le]:9728,[cc]:9984,[Ra]:9986,[Ke]:9729,[Zf]:9985,[Gs]:9987};function ut(E,S,W){if(W?(o.texParameteri(E,10242,K[S.wrapS]),o.texParameteri(E,10243,K[S.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,K[S.wrapR]),o.texParameteri(E,10240,st[S.magFilter]),o.texParameteri(E,10241,st[S.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(S.wrapS!==fn||S.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,T(S.magFilter)),o.texParameteri(E,10241,T(S.minFilter)),S.minFilter!==Le&&S.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){let et=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Le||S.minFilter!==Ra&&S.minFilter!==Gs||S.type===Mi&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ws&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(E,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function B(E,S){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",F));let et=S.source,it=m.get(et);it===void 0&&(it={},m.set(et,it));let ct=Q(S);if(ct!==E.__cacheKey){it[ct]===void 0&&(it[ct]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,W=!0),it[ct].usedTimes++;let R=it[E.__cacheKey];R!==void 0&&(it[E.__cacheKey].usedTimes--,R.usedTimes===0&&O(S)),E.__cacheKey=ct,E.__webglTexture=it[ct].texture}return W}function St(E,S,W){let et=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(et=35866),S.isData3DTexture&&(et=32879);let it=B(E,S),ct=S.source;e.bindTexture(et,E.__webglTexture,33984+W);let R=n.get(ct);if(ct.version!==R.__version||it===!0){e.activeTexture(33984+W),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);let j=y(S)&&b(S.image)===!1,k=v(S.image,j,!1,h);k=xe(S,k);let ht=b(k)||a,pt=s.convert(S.format,S.encoding),gt=s.convert(S.type),ft=C(S.internalFormat,pt,gt,S.encoding,S.isVideoTexture);ut(et,S,ht);let mt,wt=S.mipmaps,Rt=a&&S.isVideoTexture!==!0,ie=R.__version===void 0||it===!0,L=x(S,k,ht);if(S.isDepthTexture)ft=6402,a?S.type===Mi?ft=36012:S.type===yi?ft=33190:S.type===cs?ft=35056:ft=33189:S.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===bi&&ft===6402&&S.type!==Dh&&S.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=yi,gt=s.convert(S.type)),S.format===ps&&ft===6402&&(ft=34041,S.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=cs,gt=s.convert(S.type))),ie&&(Rt?e.texStorage2D(3553,1,ft,k.width,k.height):e.texImage2D(3553,0,ft,k.width,k.height,0,pt,gt,null));else if(S.isDataTexture)if(wt.length>0&&ht){Rt&&ie&&e.texStorage2D(3553,L,ft,wt[0].width,wt[0].height);for(let q=0,nt=wt.length;q<nt;q++)mt=wt[q],Rt?e.texSubImage2D(3553,q,0,0,mt.width,mt.height,pt,gt,mt.data):e.texImage2D(3553,q,ft,mt.width,mt.height,0,pt,gt,mt.data);S.generateMipmaps=!1}else Rt?(ie&&e.texStorage2D(3553,L,ft,k.width,k.height),e.texSubImage2D(3553,0,0,0,k.width,k.height,pt,gt,k.data)):e.texImage2D(3553,0,ft,k.width,k.height,0,pt,gt,k.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Rt&&ie&&e.texStorage3D(35866,L,ft,wt[0].width,wt[0].height,k.depth);for(let q=0,nt=wt.length;q<nt;q++)mt=wt[q],S.format!==dn?pt!==null?Rt?e.compressedTexSubImage3D(35866,q,0,0,0,mt.width,mt.height,k.depth,pt,mt.data,0,0):e.compressedTexImage3D(35866,q,ft,mt.width,mt.height,k.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?e.texSubImage3D(35866,q,0,0,0,mt.width,mt.height,k.depth,pt,gt,mt.data):e.texImage3D(35866,q,ft,mt.width,mt.height,k.depth,0,pt,gt,mt.data)}else{Rt&&ie&&e.texStorage2D(3553,L,ft,wt[0].width,wt[0].height);for(let q=0,nt=wt.length;q<nt;q++)mt=wt[q],S.format!==dn?pt!==null?Rt?e.compressedTexSubImage2D(3553,q,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(3553,q,ft,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?e.texSubImage2D(3553,q,0,0,mt.width,mt.height,pt,gt,mt.data):e.texImage2D(3553,q,ft,mt.width,mt.height,0,pt,gt,mt.data)}else if(S.isDataArrayTexture)Rt?(ie&&e.texStorage3D(35866,L,ft,k.width,k.height,k.depth),e.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,pt,gt,k.data)):e.texImage3D(35866,0,ft,k.width,k.height,k.depth,0,pt,gt,k.data);else if(S.isData3DTexture)Rt?(ie&&e.texStorage3D(32879,L,ft,k.width,k.height,k.depth),e.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,pt,gt,k.data)):e.texImage3D(32879,0,ft,k.width,k.height,k.depth,0,pt,gt,k.data);else if(S.isFramebufferTexture){if(ie)if(Rt)e.texStorage2D(3553,L,ft,k.width,k.height);else{let q=k.width,nt=k.height;for(let dt=0;dt<L;dt++)e.texImage2D(3553,dt,ft,q,nt,0,pt,gt,null),q>>=1,nt>>=1}}else if(wt.length>0&&ht){Rt&&ie&&e.texStorage2D(3553,L,ft,wt[0].width,wt[0].height);for(let q=0,nt=wt.length;q<nt;q++)mt=wt[q],Rt?e.texSubImage2D(3553,q,0,0,pt,gt,mt):e.texImage2D(3553,q,ft,pt,gt,mt);S.generateMipmaps=!1}else Rt?(ie&&e.texStorage2D(3553,L,ft,k.width,k.height),e.texSubImage2D(3553,0,0,0,pt,gt,k)):e.texImage2D(3553,0,ft,pt,gt,k);A(S,ht)&&P(et),R.__version=ct.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function Mt(E,S,W){if(S.image.length!==6)return;let et=B(E,S),it=S.source;e.bindTexture(34067,E.__webglTexture,33984+W);let ct=n.get(it);if(it.version!==ct.__version||et===!0){e.activeTexture(33984+W),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);let R=S.isCompressedTexture||S.image[0].isCompressedTexture,j=S.image[0]&&S.image[0].isDataTexture,k=[];for(let q=0;q<6;q++)!R&&!j?k[q]=v(S.image[q],!1,!0,l):k[q]=j?S.image[q].image:S.image[q],k[q]=xe(S,k[q]);let ht=k[0],pt=b(ht)||a,gt=s.convert(S.format,S.encoding),ft=s.convert(S.type),mt=C(S.internalFormat,gt,ft,S.encoding),wt=a&&S.isVideoTexture!==!0,Rt=ct.__version===void 0||et===!0,ie=x(S,ht,pt);ut(34067,S,pt);let L;if(R){wt&&Rt&&e.texStorage2D(34067,ie,mt,ht.width,ht.height);for(let q=0;q<6;q++){L=k[q].mipmaps;for(let nt=0;nt<L.length;nt++){let dt=L[nt];S.format!==dn?gt!==null?wt?e.compressedTexSubImage2D(34069+q,nt,0,0,dt.width,dt.height,gt,dt.data):e.compressedTexImage2D(34069+q,nt,mt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?e.texSubImage2D(34069+q,nt,0,0,dt.width,dt.height,gt,ft,dt.data):e.texImage2D(34069+q,nt,mt,dt.width,dt.height,0,gt,ft,dt.data)}}}else{L=S.mipmaps,wt&&Rt&&(L.length>0&&ie++,e.texStorage2D(34067,ie,mt,k[0].width,k[0].height));for(let q=0;q<6;q++)if(j){wt?e.texSubImage2D(34069+q,0,0,0,k[q].width,k[q].height,gt,ft,k[q].data):e.texImage2D(34069+q,0,mt,k[q].width,k[q].height,0,gt,ft,k[q].data);for(let nt=0;nt<L.length;nt++){let xt=L[nt].image[q].image;wt?e.texSubImage2D(34069+q,nt+1,0,0,xt.width,xt.height,gt,ft,xt.data):e.texImage2D(34069+q,nt+1,mt,xt.width,xt.height,0,gt,ft,xt.data)}}else{wt?e.texSubImage2D(34069+q,0,0,0,gt,ft,k[q]):e.texImage2D(34069+q,0,mt,gt,ft,k[q]);for(let nt=0;nt<L.length;nt++){let dt=L[nt];wt?e.texSubImage2D(34069+q,nt+1,0,0,gt,ft,dt.image[q]):e.texImage2D(34069+q,nt+1,mt,gt,ft,dt.image[q])}}}A(S,pt)&&P(34067),ct.__version=it.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function at(E,S,W,et,it){let ct=s.convert(W.format,W.encoding),R=s.convert(W.type),j=C(W.internalFormat,ct,R,W.encoding);n.get(S).__hasExternalTextures||(it===32879||it===35866?e.texImage3D(it,0,j,S.width,S.height,S.depth,0,ct,R,null):e.texImage2D(it,0,j,S.width,S.height,0,ct,R,null)),e.bindFramebuffer(36160,E),Ft(S)?f.framebufferTexture2DMultisampleEXT(36160,et,it,n.get(W).__webglTexture,0,ne(S)):(it===3553||it>=34069&&it<=34074)&&o.framebufferTexture2D(36160,et,it,n.get(W).__webglTexture,0),e.bindFramebuffer(36160,null)}function yt(E,S,W){if(o.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let et=33189;if(W||Ft(S)){let it=S.depthTexture;it&&it.isDepthTexture&&(it.type===Mi?et=36012:it.type===yi&&(et=33190));let ct=ne(S);Ft(S)?f.renderbufferStorageMultisampleEXT(36161,ct,et,S.width,S.height):o.renderbufferStorageMultisample(36161,ct,et,S.width,S.height)}else o.renderbufferStorage(36161,et,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){let et=ne(S);W&&Ft(S)===!1?o.renderbufferStorageMultisample(36161,et,35056,S.width,S.height):Ft(S)?f.renderbufferStorageMultisampleEXT(36161,et,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{let et=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let it=0;it<et.length;it++){let ct=et[it],R=s.convert(ct.format,ct.encoding),j=s.convert(ct.type),k=C(ct.internalFormat,R,j,ct.encoding),ht=ne(S);W&&Ft(S)===!1?o.renderbufferStorageMultisample(36161,ht,k,S.width,S.height):Ft(S)?f.renderbufferStorageMultisampleEXT(36161,ht,k,S.width,S.height):o.renderbufferStorage(36161,k,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function kt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),tt(S.depthTexture,0);let et=n.get(S.depthTexture).__webglTexture,it=ne(S);if(S.depthTexture.format===bi)Ft(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,et,0,it):o.framebufferTexture2D(36160,36096,3553,et,0);else if(S.depthTexture.format===ps)Ft(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,et,0,it):o.framebufferTexture2D(36160,33306,3553,et,0);else throw new Error("Unknown depthTexture format")}function _t(E){let S=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");kt(S.__webglFramebuffer,E)}else if(W){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(36160,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]=o.createRenderbuffer(),yt(S.__webglDepthbuffer[et],E,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),yt(S.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function At(E,S,W){let et=n.get(E);S!==void 0&&at(et.__webglFramebuffer,E,E.texture,36064,3553),W!==void 0&&_t(E)}function Qt(E){let S=E.texture,W=n.get(E),et=n.get(S);E.addEventListener("dispose",V),E.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=o.createTexture()),et.__version=S.version,r.memory.textures++);let it=E.isWebGLCubeRenderTarget===!0,ct=E.isWebGLMultipleRenderTargets===!0,R=b(E)||a;if(it){W.__webglFramebuffer=[];for(let j=0;j<6;j++)W.__webglFramebuffer[j]=o.createFramebuffer()}else{if(W.__webglFramebuffer=o.createFramebuffer(),ct)if(i.drawBuffers){let j=E.texture;for(let k=0,ht=j.length;k<ht;k++){let pt=n.get(j[k]);pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Ft(E)===!1){let j=ct?S:[S];W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let k=0;k<j.length;k++){let ht=j[k];W.__webglColorRenderbuffer[k]=o.createRenderbuffer(),o.bindRenderbuffer(36161,W.__webglColorRenderbuffer[k]);let pt=s.convert(ht.format,ht.encoding),gt=s.convert(ht.type),ft=C(ht.internalFormat,pt,gt,ht.encoding,E.isXRRenderTarget===!0),mt=ne(E);o.renderbufferStorageMultisample(36161,mt,ft,E.width,E.height),o.framebufferRenderbuffer(36160,36064+k,36161,W.__webglColorRenderbuffer[k])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),yt(W.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(it){e.bindTexture(34067,et.__webglTexture),ut(34067,S,R);for(let j=0;j<6;j++)at(W.__webglFramebuffer[j],E,S,36064,34069+j);A(S,R)&&P(34067),e.unbindTexture()}else if(ct){let j=E.texture;for(let k=0,ht=j.length;k<ht;k++){let pt=j[k],gt=n.get(pt);e.bindTexture(3553,gt.__webglTexture),ut(3553,pt,R),at(W.__webglFramebuffer,E,pt,36064+k,3553),A(pt,R)&&P(3553)}e.unbindTexture()}else{let j=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?j=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(j,et.__webglTexture),ut(j,S,R),at(W.__webglFramebuffer,E,S,36064,j),A(S,R)&&P(j),e.unbindTexture()}E.depthBuffer&&_t(E)}function Zt(E){let S=b(E)||a,W=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let et=0,it=W.length;et<it;et++){let ct=W[et];if(A(ct,S)){let R=E.isWebGLCubeRenderTarget?34067:3553,j=n.get(ct).__webglTexture;e.bindTexture(R,j),P(R),e.unbindTexture()}}}function re(E){if(a&&E.samples>0&&Ft(E)===!1){let S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],W=E.width,et=E.height,it=16384,ct=[],R=E.stencilBuffer?33306:36096,j=n.get(E),k=E.isWebGLMultipleRenderTargets===!0;if(k)for(let ht=0;ht<S.length;ht++)e.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ht,36161,null),e.bindFramebuffer(36160,j.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ht,3553,null,0);e.bindFramebuffer(36008,j.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,j.__webglFramebuffer);for(let ht=0;ht<S.length;ht++){ct.push(36064+ht),E.depthBuffer&&ct.push(R);let pt=j.__ignoreDepthValues!==void 0?j.__ignoreDepthValues:!1;if(pt===!1&&(E.depthBuffer&&(it|=256),E.stencilBuffer&&(it|=1024)),k&&o.framebufferRenderbuffer(36008,36064,36161,j.__webglColorRenderbuffer[ht]),pt===!0&&(o.invalidateFramebuffer(36008,[R]),o.invalidateFramebuffer(36009,[R])),k){let gt=n.get(S[ht]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,gt,0)}o.blitFramebuffer(0,0,W,et,0,0,W,et,it,9728),p&&o.invalidateFramebuffer(36008,ct)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),k)for(let ht=0;ht<S.length;ht++){e.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+ht,36161,j.__webglColorRenderbuffer[ht]);let pt=n.get(S[ht]).__webglTexture;e.bindFramebuffer(36160,j.__webglFramebuffer),o.framebufferTexture2D(36009,36064+ht,3553,pt,0)}e.bindFramebuffer(36009,j.__webglMultisampledFramebuffer)}}function ne(E){return Math.min(u,E.samples)}function Ft(E){let S=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Wt(E){let S=r.render.frame;_.get(E)!==S&&(_.set(E,S),E.update())}function xe(E,S){let W=E.encoding,et=E.format,it=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===mo||W!==wi&&(W===Yt?a===!1?t.has("EXT_sRGB")===!0&&et===dn?(E.format=mo,E.minFilter=Ke,E.generateMipmaps=!1):S=Br.sRGBToLinear(S):(et!==dn||it!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),S}this.allocateTextureUnit=H,this.resetTextureUnits=Z,this.setTexture2D=tt,this.setTexture2DArray=rt,this.setTexture3D=lt,this.setTextureCube=G,this.rebindTextures=At,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Ft}function Q_(o,t,e){let n=e.isWebGL2;function i(s,r=null){let a;if(s===Si)return 5121;if(s===jf)return 32819;if(s===Qf)return 32820;if(s===Jf)return 5120;if(s===$f)return 5122;if(s===Dh)return 5123;if(s===Kf)return 5124;if(s===yi)return 5125;if(s===Mi)return 5126;if(s===Ws)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===td)return 6406;if(s===dn)return 6408;if(s===ed)return 6409;if(s===nd)return 6410;if(s===bi)return 6402;if(s===ps)return 34041;if(s===mo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===id)return 6403;if(s===sd)return 36244;if(s===rd)return 33319;if(s===ad)return 33320;if(s===od)return 36249;if(s===La||s===Ia||s===Da||s===Oa)if(r===Yt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===La)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===La)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ia)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Da)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Oa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hc||s===uc||s===fc||s===dc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===hc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ld)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===pc||s===mc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===pc)return r===Yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===mc)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===gc||s===_c||s===xc||s===vc||s===yc||s===Mc||s===bc||s===Sc||s===wc||s===Tc||s===Ec||s===Ac||s===Cc||s===Pc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===gc)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_c)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xc)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vc)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yc)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Mc)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bc)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sc)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wc)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Tc)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ec)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ac)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cc)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Pc)return r===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ua)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ua)return r===Yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===cd||s===Rc||s===Lc||s===Ic)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ua)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Rc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ic)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cs?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}var Po=class extends be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},os=class extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}},t0={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),d=this._getHandJoint(l,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new os;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ro=class extends Se{constructor(t,e,n,i,s,r,a,c,l,h){if(h=h!==void 0?h:bi,h!==bi&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bi&&(n=yi),n===void 0&&h===ps&&(n=cs),super(null,i,s,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Le,this.minFilter=c!==void 0?c:Le,this.flipY=!1,this.generateMipmaps=!1}},Lo=class extends Sn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,_=null,g=e.getContextAttributes(),m=null,d=null,M=[],v=[],b=new Set,y=new Map,A=new be;A.layers.enable(1),A.viewport=new Xt;let P=new be;P.layers.enable(2),P.viewport=new Xt;let C=[A,P],x=new Po;x.layers.enable(1),x.layers.enable(2);let T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=M[G];return K===void 0&&(K=new Hs,M[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=M[G];return K===void 0&&(K=new Hs,M[G]=K),K.getGripSpace()},this.getHand=function(G){let K=M[G];return K===void 0&&(K=new Hs,M[G]=K),K.getHandSpace()};function V(G){let K=v.indexOf(G.inputSource);if(K===-1)return;let st=M[K];st!==void 0&&st.dispatchEvent({type:G.type,data:G.inputSource})}function I(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",O);for(let G=0;G<M.length;G++){let K=v[G];K!==null&&(v[G]=null,M[G].disconnect(K))}T=null,F=null,t.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,lt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",I),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let K={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:p}),d=new kn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Si,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let K=null,st=null,ut=null;g.depth&&(ut=g.stencil?35056:33190,K=g.stencil?ps:bi,st=g.stencil?cs:yi);let B={colorFormat:32856,depthFormat:ut,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(B),i.updateRenderState({layers:[f]}),d=new kn(f.textureWidth,f.textureHeight,{format:dn,type:Si,depthTexture:new Ro(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});let St=t.properties.get(d);St.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(G){for(let K=0;K<G.removed.length;K++){let st=G.removed[K],ut=v.indexOf(st);ut>=0&&(v[ut]=null,M[ut].disconnect(st))}for(let K=0;K<G.added.length;K++){let st=G.added[K],ut=v.indexOf(st);if(ut===-1){for(let St=0;St<M.length;St++)if(St>=v.length){v.push(st),ut=St;break}else if(v[St]===null){v[St]=st,ut=St;break}if(ut===-1)break}let B=M[ut];B&&B.connect(st)}}let N=new D,Y=new D;function Z(G,K,st){N.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(st.matrixWorld);let ut=N.distanceTo(Y),B=K.projectionMatrix.elements,St=st.projectionMatrix.elements,Mt=B[14]/(B[10]-1),at=B[14]/(B[10]+1),yt=(B[9]+1)/B[5],kt=(B[9]-1)/B[5],_t=(B[8]-1)/B[0],At=(St[8]+1)/St[0],Qt=Mt*_t,Zt=Mt*At,re=ut/(-_t+At),ne=re*-_t;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ne),G.translateZ(re),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let Ft=Mt+re,Wt=at+re,xe=Qt-ne,E=Zt+(ut-ne),S=yt*at/Wt*Ft,W=kt*at/Wt*Ft;G.projectionMatrix.makePerspective(xe,E,S,W,Ft,Wt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function H(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;x.near=P.near=A.near=G.near,x.far=P.far=A.far=G.far,(T!==x.near||F!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,F=x.far);let K=G.parent,st=x.cameras;H(x,K);for(let ut=0;ut<st.length;ut++)H(st[ut],K);st.length===2?Z(x,A,P):x.projectionMatrix.copy(A.projectionMatrix),Q(G,x,K)};function Q(G,K,st){st===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(st.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);let ut=G.children;for(let B=0,St=ut.length;B<St;B++)ut[B].updateMatrixWorld(!0);G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=go*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.getPlanes=function(){return b};let tt=null;function rt(G,K){if(h=K.getViewerPose(l||r),_=K,h!==null){let st=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let ut=!1;st.length!==x.cameras.length&&(x.cameras.length=0,ut=!0);for(let B=0;B<st.length;B++){let St=st[B],Mt=null;if(p!==null)Mt=p.getViewport(St);else{let yt=u.getViewSubImage(f,St);Mt=yt.viewport,B===0&&(t.setRenderTargetTextures(d,yt.colorTexture,f.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(d))}let at=C[B];at===void 0&&(at=new be,at.layers.enable(B),at.viewport=new Xt,C[B]=at),at.matrix.fromArray(St.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(St.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),B===0&&(x.matrix.copy(at.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ut===!0&&x.cameras.push(at)}}for(let st=0;st<M.length;st++){let ut=v[st],B=M[st];ut!==null&&B!==void 0&&B.update(ut,K,l||r)}if(tt&&tt(G,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let st=null;for(let ut of b)K.detectedPlanes.has(ut)||(st===null&&(st=[]),st.push(ut));if(st!==null)for(let ut of st)b.delete(ut),y.delete(ut),n.dispatchEvent({type:"planeremoved",data:ut});for(let ut of K.detectedPlanes)if(!b.has(ut))b.add(ut),y.set(ut,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ut});else{let B=y.get(ut);ut.lastChangedTime>B&&(y.set(ut,ut.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ut}))}}_=null}let lt=new kh;lt.setAnimationLoop(rt),this.setAnimationLoop=function(G){tt=G},this.dispose=function(){}}};function e0(o,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Fh(o)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,M,v,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,M,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ne&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ne&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=t.get(d).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let v=o.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ne&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){let M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function n0(o,t,e,n){let i={},s={},r=[],a=e.isWebGL2?o.getParameter(35375):0;function c(M,v){let b=v.program;n.uniformBlockBinding(M,b)}function l(M,v){let b=i[M.id];b===void 0&&(_(M),b=h(M),i[M.id]=b,M.addEventListener("dispose",m));let y=v.program;n.updateUBOMapping(M,y);let A=t.render.frame;s[M.id]!==A&&(f(M),s[M.id]=A)}function h(M){let v=u();M.__bindingPointIndex=v;let b=o.createBuffer(),y=M.__size,A=M.usage;return o.bindBuffer(35345,b),o.bufferData(35345,y,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,v,b),b}function u(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let v=i[M.id],b=M.uniforms,y=M.__cache;o.bindBuffer(35345,v);for(let A=0,P=b.length;A<P;A++){let C=b[A];if(p(C,A,y)===!0){let x=C.__offset,T=Array.isArray(C.value)?C.value:[C.value],F=0;for(let V=0;V<T.length;V++){let I=T[V],O=g(I);typeof I=="number"?(C.__data[0]=I,o.bufferSubData(35345,x+F,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=I.elements[0],C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=I.elements[0],C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=I.elements[0]):(I.toArray(C.__data,F),F+=O.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,x,C.__data)}}o.bindBuffer(35345,null)}function p(M,v,b){let y=M.value;if(b[v]===void 0){if(typeof y=="number")b[v]=y;else{let A=Array.isArray(y)?y:[y],P=[];for(let C=0;C<A.length;C++)P.push(A[C].clone());b[v]=P}return!0}else if(typeof y=="number"){if(b[v]!==y)return b[v]=y,!0}else{let A=Array.isArray(b[v])?b[v]:[b[v]],P=Array.isArray(y)?y:[y];for(let C=0;C<A.length;C++){let x=A[C];if(x.equals(P[C])===!1)return x.copy(P[C]),!0}}return!1}function _(M){let v=M.uniforms,b=0,y=16,A=0;for(let P=0,C=v.length;P<C;P++){let x=v[P],T={boundary:0,storage:0},F=Array.isArray(x.value)?x.value:[x.value];for(let V=0,I=F.length;V<I;V++){let O=F[V],N=g(O);T.boundary+=N.boundary,T.storage+=N.storage}if(x.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=b,P>0){A=b%y;let V=y-A;A!==0&&V-T.boundary<0&&(b+=y-A,x.__offset=b)}b+=T.storage}return A=b%y,A>0&&(b+=y-A),M.__size=b,M.__cache={},this}function g(M){let v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){let v=M.target;v.removeEventListener("dispose",m);let b=r.indexOf(v.__bindingPointIndex);r.splice(b,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function d(){for(let M in i)o.deleteBuffer(i[M]);r=[],i={},s={}}return{bind:c,update:l,dispose:d}}function i0(){let o=qs("canvas");return o.style.display="block",o}var $s=class{constructor(t={}){let{canvas:e=i0(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=r;let p=null,_=null,g=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=wi,this.useLegacyLights=!0,this.toneMapping=Fn,this.toneMappingExposure=1;let d=this,M=!1,v=0,b=0,y=null,A=-1,P=null,C=new Xt,x=new Xt,T=null,F=e.width,V=e.height,I=1,O=null,N=null,Y=new Xt(0,0,F,V),Z=new Xt(0,0,F,V),H=!1,Q=new Js,tt=!1,rt=!1,lt=null,G=new $t,K=new D,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ut(){return y===null?I:1}let B=n;function St(w,z){for(let X=0;X<w.length;X++){let U=w[X],J=e.getContext(U,z);if(J!==null)return J}return null}try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$o}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),B===null){let z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&z.shift(),B=St(z,w),B===null)throw St(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Mt,at,yt,kt,_t,At,Qt,Zt,re,ne,Ft,Wt,xe,E,S,W,et,it,ct,R,j,k,ht,pt;function gt(){Mt=new wg(B),at=new xg(B,Mt,t),Mt.init(at),k=new Q_(B,Mt,at),yt=new K_(B,Mt,at),kt=new Ag,_t=new k_,At=new j_(B,Mt,yt,_t,at,k,kt),Qt=new yg(d),Zt=new Sg(d),re=new kd(B,at),ht=new gg(B,Mt,re,at),ne=new Tg(B,re,kt,ht),Ft=new Lg(B,ne,re,kt),ct=new Rg(B,at,At),W=new vg(_t),Wt=new F_(d,Qt,Zt,Mt,at,ht,W),xe=new e0(d,_t),E=new V_,S=new Y_(Mt,at),it=new mg(d,Qt,Zt,yt,Ft,f,c),et=new $_(d,Ft,at),pt=new n0(B,kt,at,yt),R=new _g(B,Mt,kt,at),j=new Eg(B,Mt,kt,at),kt.programs=Wt.programs,d.capabilities=at,d.extensions=Mt,d.properties=_t,d.renderLists=E,d.shadowMap=et,d.state=yt,d.info=kt}gt();let ft=new Lo(d,B);this.xr=ft,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let w=Mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(w){w!==void 0&&(I=w,this.setSize(F,V,!1))},this.getSize=function(w){return w.set(F,V)},this.setSize=function(w,z,X=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,V=z,e.width=Math.floor(w*I),e.height=Math.floor(z*I),X===!0&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(F*I,V*I).floor()},this.setDrawingBufferSize=function(w,z,X){F=w,V=z,I=X,e.width=Math.floor(w*X),e.height=Math.floor(z*X),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,z,X,U){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,z,X,U),yt.viewport(C.copy(Y).multiplyScalar(I).floor())},this.getScissor=function(w){return w.copy(Z)},this.setScissor=function(w,z,X,U){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,z,X,U),yt.scissor(x.copy(Z).multiplyScalar(I).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(w){yt.setScissorTest(H=w)},this.setOpaqueSort=function(w){O=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(w=!0,z=!0,X=!0){let U=0;w&&(U|=16384),z&&(U|=256),X&&(U|=1024),B.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),E.dispose(),S.dispose(),_t.dispose(),Qt.dispose(),Zt.dispose(),Ft.dispose(),ht.dispose(),pt.dispose(),Wt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",xt),ft.removeEventListener("sessionend",qt),lt&&(lt.dispose(),lt=null),Jt.stop()};function mt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let w=kt.autoReset,z=et.enabled,X=et.autoUpdate,U=et.needsUpdate,J=et.type;gt(),kt.autoReset=w,et.enabled=z,et.autoUpdate=X,et.needsUpdate=U,et.type=J}function Rt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ie(w){let z=w.target;z.removeEventListener("dispose",ie),L(z)}function L(w){q(w),_t.remove(w)}function q(w){let z=_t.get(w).programs;z!==void 0&&(z.forEach(function(X){Wt.releaseProgram(X)}),w.isShaderMaterial&&Wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,X,U,J,vt){z===null&&(z=st);let bt=J.isMesh&&J.matrixWorld.determinant()<0,Tt=of(w,z,X,U,J);yt.setMaterial(U,bt);let Ct=X.index,Lt=1;U.wireframe===!0&&(Ct=ne.getWireframeAttribute(X),Lt=2);let It=X.drawRange,Ot=X.attributes.position,Vt=It.start*Lt,Ce=(It.start+It.count)*Lt;vt!==null&&(Vt=Math.max(Vt,vt.start*Lt),Ce=Math.min(Ce,(vt.start+vt.count)*Lt)),Ct!==null?(Vt=Math.max(Vt,0),Ce=Math.min(Ce,Ct.count)):Ot!=null&&(Vt=Math.max(Vt,0),Ce=Math.min(Ce,Ot.count));let ln=Ce-Vt;if(ln<0||ln===1/0)return;ht.setup(J,U,Tt,X,Ct);let fi,ae=R;if(Ct!==null&&(fi=re.get(Ct),ae=j,ae.setIndex(fi)),J.isMesh)U.wireframe===!0?(yt.setLineWidth(U.wireframeLinewidth*ut()),ae.setMode(1)):ae.setMode(4);else if(J.isLine){let Nt=U.linewidth;Nt===void 0&&(Nt=1),yt.setLineWidth(Nt*ut()),J.isLineSegments?ae.setMode(1):J.isLineLoop?ae.setMode(2):ae.setMode(3)}else J.isPoints?ae.setMode(0):J.isSprite&&ae.setMode(4);if(J.isInstancedMesh)ae.renderInstances(Vt,ln,J.count);else if(X.isInstancedBufferGeometry){let Nt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ea=Math.min(X.instanceCount,Nt);ae.renderInstances(Vt,ln,Ea)}else ae.render(Vt,ln)},this.compile=function(w,z){function X(U,J,vt){U.transparent===!0&&U.side===zn&&U.forceSinglePass===!1?(U.side=Ne,U.needsUpdate=!0,pr(U,J,vt),U.side=ti,U.needsUpdate=!0,pr(U,J,vt),U.side=zn):pr(U,J,vt)}_=S.get(w),_.init(),m.push(_),w.traverseVisible(function(U){U.isLight&&U.layers.test(z.layers)&&(_.pushLight(U),U.castShadow&&_.pushShadow(U))}),_.setupLights(d.useLegacyLights),w.traverse(function(U){let J=U.material;if(J)if(Array.isArray(J))for(let vt=0;vt<J.length;vt++){let bt=J[vt];X(bt,w,U)}else X(J,w,U)}),m.pop(),_=null};let nt=null;function dt(w){nt&&nt(w)}function xt(){Jt.stop()}function qt(){Jt.start()}let Jt=new kh;Jt.setAnimationLoop(dt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(w){nt=w,ft.setAnimationLoop(w),w===null?Jt.stop():Jt.start()},ft.addEventListener("sessionstart",xt),ft.addEventListener("sessionend",qt),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(z),z=ft.getCamera()),w.isScene===!0&&w.onBeforeRender(d,w,z,y),_=S.get(w,m.length),_.init(),m.push(_),G.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(G),rt=this.localClippingEnabled,tt=W.init(this.clippingPlanes,rt),p=E.get(w,g.length),p.init(),g.push(p),ve(w,z,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(O,N),tt===!0&&W.beginShadows();let X=_.state.shadowsArray;if(et.render(X,w,z),tt===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(p,w),_.setupLights(d.useLegacyLights),z.isArrayCamera){let U=z.cameras;for(let J=0,vt=U.length;J<vt;J++){let bt=U[J];Yn(p,w,bt,bt.viewport)}}else Yn(p,w,z);y!==null&&(At.updateMultisampleRenderTarget(y),At.updateRenderTargetMipmap(y)),w.isScene===!0&&w.onAfterRender(d,w,z),ht.resetDefaultState(),A=-1,P=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function ve(w,z,X,U){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){U&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(G);let bt=Ft.update(w),Tt=w.material;Tt.visible&&p.push(w,bt,Tt,X,K.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==kt.render.frame&&(w.skeleton.update(),w.skeleton.frame=kt.render.frame),!w.frustumCulled||Q.intersectsObject(w))){U&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(G);let bt=Ft.update(w),Tt=w.material;if(Array.isArray(Tt)){let Ct=bt.groups;for(let Lt=0,It=Ct.length;Lt<It;Lt++){let Ot=Ct[Lt],Vt=Tt[Ot.materialIndex];Vt&&Vt.visible&&p.push(w,bt,Vt,X,K.z,Ot)}}else Tt.visible&&p.push(w,bt,Tt,X,K.z,null)}}let vt=w.children;for(let bt=0,Tt=vt.length;bt<Tt;bt++)ve(vt[bt],z,X,U)}function Yn(w,z,X,U){let J=w.opaque,vt=w.transmissive,bt=w.transparent;_.setupLightsView(X),tt===!0&&W.setGlobalState(d.clippingPlanes,X),vt.length>0&&se(J,vt,z,X),U&&yt.viewport(C.copy(U)),J.length>0&&Je(J,z,X),vt.length>0&&Je(vt,z,X),bt.length>0&&Je(bt,z,X),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function se(w,z,X,U){if(lt===null){let Tt=at.isWebGL2;lt=new kn(1024,1024,{generateMipmaps:!0,type:Mt.has("EXT_color_buffer_half_float")?Ws:Si,minFilter:Gs,samples:Tt&&a===!0?4:0})}let J=d.getRenderTarget();d.setRenderTarget(lt),d.clear();let vt=d.toneMapping;d.toneMapping=Fn,Je(w,X,U),At.updateMultisampleRenderTarget(lt),At.updateRenderTargetMipmap(lt);let bt=!1;for(let Tt=0,Ct=z.length;Tt<Ct;Tt++){let Lt=z[Tt],It=Lt.object,Ot=Lt.geometry,Vt=Lt.material,Ce=Lt.group;if(Vt.side===zn&&It.layers.test(U.layers)){let ln=Vt.side;Vt.side=Ne,Vt.needsUpdate=!0,vn(It,X,U,Ot,Vt,Ce),Vt.side=ln,Vt.needsUpdate=!0,bt=!0}}bt===!0&&(At.updateMultisampleRenderTarget(lt),At.updateRenderTargetMipmap(lt)),d.setRenderTarget(J),d.toneMapping=vt}function Je(w,z,X){let U=z.isScene===!0?z.overrideMaterial:null;for(let J=0,vt=w.length;J<vt;J++){let bt=w[J],Tt=bt.object,Ct=bt.geometry,Lt=U===null?bt.material:U,It=bt.group;Tt.layers.test(X.layers)&&vn(Tt,z,X,Ct,Lt,It)}}function vn(w,z,X,U,J,vt){w.onBeforeRender(d,z,X,U,J,vt),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(d,z,X,U,w,vt),J.transparent===!0&&J.side===zn&&J.forceSinglePass===!1?(J.side=Ne,J.needsUpdate=!0,d.renderBufferDirect(X,z,U,J,w,vt),J.side=ti,J.needsUpdate=!0,d.renderBufferDirect(X,z,U,J,w,vt),J.side=zn):d.renderBufferDirect(X,z,U,J,w,vt),w.onAfterRender(d,z,X,U,J,vt)}function pr(w,z,X){z.isScene!==!0&&(z=st);let U=_t.get(w),J=_.state.lights,vt=_.state.shadowsArray,bt=J.state.version,Tt=Wt.getParameters(w,J.state,vt,z,X),Ct=Wt.getProgramCacheKey(Tt),Lt=U.programs;U.environment=w.isMeshStandardMaterial?z.environment:null,U.fog=z.fog,U.envMap=(w.isMeshStandardMaterial?Zt:Qt).get(w.envMap||U.environment),Lt===void 0&&(w.addEventListener("dispose",ie),Lt=new Map,U.programs=Lt);let It=Lt.get(Ct);if(It!==void 0){if(U.currentProgram===It&&U.lightsStateVersion===bt)return Ql(w,Tt),It}else Tt.uniforms=Wt.getUniforms(w),w.onBuild(X,Tt,d),w.onBeforeCompile(Tt,d),It=Wt.acquireProgram(Tt,Ct),Lt.set(Ct,It),U.uniforms=Tt.uniforms;let Ot=U.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ot.clippingPlanes=W.uniform),Ql(w,Tt),U.needsLights=cf(w),U.lightsStateVersion=bt,U.needsLights&&(Ot.ambientLightColor.value=J.state.ambient,Ot.lightProbe.value=J.state.probe,Ot.directionalLights.value=J.state.directional,Ot.directionalLightShadows.value=J.state.directionalShadow,Ot.spotLights.value=J.state.spot,Ot.spotLightShadows.value=J.state.spotShadow,Ot.rectAreaLights.value=J.state.rectArea,Ot.ltc_1.value=J.state.rectAreaLTC1,Ot.ltc_2.value=J.state.rectAreaLTC2,Ot.pointLights.value=J.state.point,Ot.pointLightShadows.value=J.state.pointShadow,Ot.hemisphereLights.value=J.state.hemi,Ot.directionalShadowMap.value=J.state.directionalShadowMap,Ot.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ot.spotShadowMap.value=J.state.spotShadowMap,Ot.spotLightMatrix.value=J.state.spotLightMatrix,Ot.spotLightMap.value=J.state.spotLightMap,Ot.pointShadowMap.value=J.state.pointShadowMap,Ot.pointShadowMatrix.value=J.state.pointShadowMatrix);let Vt=It.getUniforms(),Ce=us.seqWithValue(Vt.seq,Ot);return U.currentProgram=It,U.uniformsList=Ce,It}function Ql(w,z){let X=_t.get(w);X.outputEncoding=z.outputEncoding,X.instancing=z.instancing,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function of(w,z,X,U,J){z.isScene!==!0&&(z=st),At.resetTextureUnits();let vt=z.fog,bt=U.isMeshStandardMaterial?z.environment:null,Tt=y===null?d.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:wi,Ct=(U.isMeshStandardMaterial?Zt:Qt).get(U.envMap||bt),Lt=U.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,It=!!U.normalMap&&!!X.attributes.tangent,Ot=!!X.morphAttributes.position,Vt=!!X.morphAttributes.normal,Ce=!!X.morphAttributes.color,ln=U.toneMapped?d.toneMapping:Fn,fi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ae=fi!==void 0?fi.length:0,Nt=_t.get(U),Ea=_.state.lights;if(tt===!0&&(rt===!0||w!==P)){let Ve=w===P&&U.id===A;W.setState(U,w,Ve)}let de=!1;U.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ea.state.version||Nt.outputEncoding!==Tt||J.isInstancedMesh&&Nt.instancing===!1||!J.isInstancedMesh&&Nt.instancing===!0||J.isSkinnedMesh&&Nt.skinning===!1||!J.isSkinnedMesh&&Nt.skinning===!0||Nt.envMap!==Ct||U.fog===!0&&Nt.fog!==vt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==W.numPlanes||Nt.numIntersection!==W.numIntersection)||Nt.vertexAlphas!==Lt||Nt.vertexTangents!==It||Nt.morphTargets!==Ot||Nt.morphNormals!==Vt||Nt.morphColors!==Ce||Nt.toneMapping!==ln||at.isWebGL2===!0&&Nt.morphTargetsCount!==ae)&&(de=!0):(de=!0,Nt.__version=U.version);let di=Nt.currentProgram;de===!0&&(di=pr(U,z,J));let tc=!1,Os=!1,Aa=!1,Pe=di.getUniforms(),pi=Nt.uniforms;if(yt.useProgram(di.program)&&(tc=!0,Os=!0,Aa=!0),U.id!==A&&(A=U.id,Os=!0),tc||P!==w){if(Pe.setValue(B,"projectionMatrix",w.projectionMatrix),at.logarithmicDepthBuffer&&Pe.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),P!==w&&(P=w,Os=!0,Aa=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){let Ve=Pe.map.cameraPosition;Ve!==void 0&&Ve.setValue(B,K.setFromMatrixPosition(w.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Pe.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||J.isSkinnedMesh)&&Pe.setValue(B,"viewMatrix",w.matrixWorldInverse)}if(J.isSkinnedMesh){Pe.setOptional(B,J,"bindMatrix"),Pe.setOptional(B,J,"bindMatrixInverse");let Ve=J.skeleton;Ve&&(at.floatVertexTextures?(Ve.boneTexture===null&&Ve.computeBoneTexture(),Pe.setValue(B,"boneTexture",Ve.boneTexture,At),Pe.setValue(B,"boneTextureSize",Ve.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let Ca=X.morphAttributes;if((Ca.position!==void 0||Ca.normal!==void 0||Ca.color!==void 0&&at.isWebGL2===!0)&&ct.update(J,X,di),(Os||Nt.receiveShadow!==J.receiveShadow)&&(Nt.receiveShadow=J.receiveShadow,Pe.setValue(B,"receiveShadow",J.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(pi.envMap.value=Ct,pi.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Os&&(Pe.setValue(B,"toneMappingExposure",d.toneMappingExposure),Nt.needsLights&&lf(pi,Aa),vt&&U.fog===!0&&xe.refreshFogUniforms(pi,vt),xe.refreshMaterialUniforms(pi,U,I,V,lt),us.upload(B,Nt.uniformsList,pi,At)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(us.upload(B,Nt.uniformsList,pi,At),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Pe.setValue(B,"center",J.center),Pe.setValue(B,"modelViewMatrix",J.modelViewMatrix),Pe.setValue(B,"normalMatrix",J.normalMatrix),Pe.setValue(B,"modelMatrix",J.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let Ve=U.uniformsGroups;for(let Pa=0,hf=Ve.length;Pa<hf;Pa++)if(at.isWebGL2){let ec=Ve[Pa];pt.update(ec,di),pt.bind(ec,di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return di}function lf(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function cf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(w,z,X){_t.get(w.texture).__webglTexture=z,_t.get(w.depthTexture).__webglTexture=X;let U=_t.get(w);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=X===void 0,U.__autoAllocateDepthBuffer||Mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,z){let X=_t.get(w);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,X=0){y=w,v=z,b=X;let U=!0,J=null,vt=!1,bt=!1;if(w){let Ct=_t.get(w);Ct.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(36160,null),U=!1):Ct.__webglFramebuffer===void 0?At.setupRenderTarget(w):Ct.__hasExternalTextures&&At.rebindTextures(w,_t.get(w.texture).__webglTexture,_t.get(w.depthTexture).__webglTexture);let Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(bt=!0);let It=_t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(J=It[z],vt=!0):at.isWebGL2&&w.samples>0&&At.useMultisampledRTT(w)===!1?J=_t.get(w).__webglMultisampledFramebuffer:J=It,C.copy(w.viewport),x.copy(w.scissor),T=w.scissorTest}else C.copy(Y).multiplyScalar(I).floor(),x.copy(Z).multiplyScalar(I).floor(),T=H;if(yt.bindFramebuffer(36160,J)&&at.drawBuffers&&U&&yt.drawBuffers(w,J),yt.viewport(C),yt.scissor(x),yt.setScissorTest(T),vt){let Ct=_t.get(w.texture);B.framebufferTexture2D(36160,36064,34069+z,Ct.__webglTexture,X)}else if(bt){let Ct=_t.get(w.texture),Lt=z||0;B.framebufferTextureLayer(36160,36064,Ct.__webglTexture,X||0,Lt)}A=-1},this.readRenderTargetPixels=function(w,z,X,U,J,vt,bt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt){yt.bindFramebuffer(36160,Tt);try{let Ct=w.texture,Lt=Ct.format,It=Ct.type;if(Lt!==dn&&k.convert(Lt)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ot=It===Ws&&(Mt.has("EXT_color_buffer_half_float")||at.isWebGL2&&Mt.has("EXT_color_buffer_float"));if(It!==Si&&k.convert(It)!==B.getParameter(35738)&&!(It===Mi&&(at.isWebGL2||Mt.has("OES_texture_float")||Mt.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-U&&X>=0&&X<=w.height-J&&B.readPixels(z,X,U,J,k.convert(Lt),k.convert(It),vt)}finally{let Ct=y!==null?_t.get(y).__webglFramebuffer:null;yt.bindFramebuffer(36160,Ct)}}},this.copyFramebufferToTexture=function(w,z,X=0){let U=Math.pow(2,-X),J=Math.floor(z.image.width*U),vt=Math.floor(z.image.height*U);At.setTexture2D(z,0),B.copyTexSubImage2D(3553,X,0,0,w.x,w.y,J,vt),yt.unbindTexture()},this.copyTextureToTexture=function(w,z,X,U=0){let J=z.image.width,vt=z.image.height,bt=k.convert(X.format),Tt=k.convert(X.type);At.setTexture2D(X,0),B.pixelStorei(37440,X.flipY),B.pixelStorei(37441,X.premultiplyAlpha),B.pixelStorei(3317,X.unpackAlignment),z.isDataTexture?B.texSubImage2D(3553,U,w.x,w.y,J,vt,bt,Tt,z.image.data):z.isCompressedTexture?B.compressedTexSubImage2D(3553,U,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,bt,z.mipmaps[0].data):B.texSubImage2D(3553,U,w.x,w.y,bt,Tt,z.image),U===0&&X.generateMipmaps&&B.generateMipmap(3553),yt.unbindTexture()},this.copyTextureToTexture3D=function(w,z,X,U,J=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let vt=w.max.x-w.min.x+1,bt=w.max.y-w.min.y+1,Tt=w.max.z-w.min.z+1,Ct=k.convert(U.format),Lt=k.convert(U.type),It;if(U.isData3DTexture)At.setTexture3D(U,0),It=32879;else if(U.isDataArrayTexture)At.setTexture2DArray(U,0),It=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,U.flipY),B.pixelStorei(37441,U.premultiplyAlpha),B.pixelStorei(3317,U.unpackAlignment);let Ot=B.getParameter(3314),Vt=B.getParameter(32878),Ce=B.getParameter(3316),ln=B.getParameter(3315),fi=B.getParameter(32877),ae=X.isCompressedTexture?X.mipmaps[0]:X.image;B.pixelStorei(3314,ae.width),B.pixelStorei(32878,ae.height),B.pixelStorei(3316,w.min.x),B.pixelStorei(3315,w.min.y),B.pixelStorei(32877,w.min.z),X.isDataTexture||X.isData3DTexture?B.texSubImage3D(It,J,z.x,z.y,z.z,vt,bt,Tt,Ct,Lt,ae.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(It,J,z.x,z.y,z.z,vt,bt,Tt,Ct,ae.data)):B.texSubImage3D(It,J,z.x,z.y,z.z,vt,bt,Tt,Ct,Lt,ae),B.pixelStorei(3314,Ot),B.pixelStorei(32878,Vt),B.pixelStorei(3316,Ce),B.pixelStorei(3315,ln),B.pixelStorei(32877,fi),J===0&&U.generateMipmaps&&B.generateMipmap(It),yt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?At.setTextureCube(w,0):w.isData3DTexture?At.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?At.setTexture2DArray(w,0):At.setTexture2D(w,0),yt.unbindTexture()},this.resetState=function(){v=0,b=0,y=null,yt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}},Io=class extends $s{};Io.prototype.isWebGL1Renderer=!0;var Jr=class extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}};var $r=class extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},yh=new D,Mh=new D,bh=new $t,ao=new Ys,Nr=new ms,Do=class extends me{constructor(t=new mn,e=new $r){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)yh.fromBufferAttribute(e,i-1),Mh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=yh.distanceTo(Mh);t.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Nr.radius+=s,t.ray.intersectsSphere(Nr)===!1)return;bh.copy(i).invert(),ao.copy(t.ray).applyMatrix4(bh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new D,h=new D,u=new D,f=new D,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){let d=Math.max(0,r.start),M=Math.min(_.count,r.start+r.count);for(let v=d,b=M-1;v<b;v+=p){let y=_.getX(v),A=_.getX(v+1);if(l.fromBufferAttribute(m,y),h.fromBufferAttribute(m,A),ao.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let C=t.ray.origin.distanceTo(f);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,r.start),M=Math.min(m.count,r.start+r.count);for(let v=d,b=M-1;v<b;v+=p){if(l.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),ao.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},Sh=new D,wh=new D,Oo=class extends Do{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Sh.fromBufferAttribute(e,i),wh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Sh.distanceTo(wh);t.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Kr=class extends ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oh,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function jn(o,t,e){return Wh(o)?new o.constructor(o.subarray(t,e!==void 0?e:o.length)):o.slice(t,e)}function zr(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function Wh(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}var xs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}for(;n<r;){let a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uo=class extends xs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dc,endingEnd:Dc}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],c=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case Oc:s=t,a=2*e-n;break;case Uc:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Oc:r=t,c=2*n-e;break;case Uc:r=1,c=n+i[1]-i[0];break;default:r=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,d=-f*m+2*f*g-f*_,M=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-p)*m+(1.5+p)*g+.5*_,b=p*m-p*g;for(let y=0;y!==a;++y)s[y]=d*r[h+y]+M*r[l+y]+v*r[c+y]+b*r[u+y];return s}},No=class extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=r[l+f]*u+r[c+f]*h;return s}},zo=class extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},gn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zr(e,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zr(t.times,Array),values:zr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new No(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Uo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fr:e=this.InterpolantFactoryMethodDiscrete;break;case kr:e=this.InterpolantFactoryMethodLinear;break;case Na:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return Na}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<t;)++s;for(;r!==-1&&n[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let a=this.getValueSize();this.times=jn(n,s,r),this.values=jn(this.values,s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,r),t=!1;break}r=c}if(i!==void 0&&Wh(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=jn(this.times),e=jn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Na,s=t.length-1,r=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[f+_]||g!==e[p+_]){c=!0;break}}}if(c){if(a!==r){t[r]=t[a];let u=a*n,f=r*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,c=r*n,l=0;l!==n;++l)e[c+l]=e[a+l];++r}return r!==t.length?(this.times=jn(t,0,r),this.values=jn(e,0,r*n)):(this.times=t,this.values=e),this}clone(){let t=jn(this.times,0),e=jn(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=kr;var Ci=class extends gn{};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Fr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends gn{};Fo.prototype.ValueTypeName="color";var ko=class extends gn{};ko.prototype.ValueTypeName="number";var Bo=class extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)pn.slerpFlat(s,0,r,l-a,r,l,c);return s}},Ks=class extends gn{InterpolantFactoryMethodLinear(t){return new Bo(this.times,this.values,this.getValueSize(),t)}};Ks.prototype.ValueTypeName="quaternion";Ks.prototype.DefaultInterpolation=kr;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends gn{};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Fr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends gn{};Vo.prototype.ValueTypeName="vector";var jr={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}},Ho=class{constructor(t,e,n){let i=this,s=!1,r=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},s0=new Ho,js=class{constructor(t){this.manager=t!==void 0?t:s0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}},Un={},Go=class extends Error{constructor(t,e){super(t),this.response=e}},Qr=class extends js{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=jr.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Un[t]!==void 0){Un[t].push({onLoad:e,onProgress:n,onError:i});return}Un[t]=[],Un[t].push({onLoad:e,onProgress:n,onError:i});let r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Un[t],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,_=p!==0,g=0,m=new ReadableStream({start(d){M();function M(){u.read().then(({done:v,value:b})=>{if(v)d.close();else{g+=b.byteLength;let y=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let A=0,P=h.length;A<P;A++){let C=h[A];C.onProgress&&C.onProgress(y)}d.enqueue(b),M()}})}}});return new Response(m)}else throw new Go(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{jr.add(t,l);let h=Un[t];delete Un[t];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Un[t];if(h===void 0)throw this.manager.itemError(t),l;delete Un[t];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Wo=class extends js{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,r=jr.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;let a=qs("img");function c(){h(),jr.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}};var ta=class extends js{constructor(t){super(t)}load(t,e,n,i){let s=new Se,r=new Wo(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},Xo=class extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var oo=new $t,Th=new D,Eh=new D,qo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Th.setFromMatrixPosition(t.matrixWorld),e.position.copy(Th),Eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eh),e.updateMatrixWorld(),oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ah=new $t,ks=new D,lo=new D,Yo=class extends qo{constructor(){super(new be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new Xt(2,1,1,1),new Xt(0,1,1,1),new Xt(3,1,1,1),new Xt(1,1,1,1),new Xt(3,0,1,1),new Xt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ks.setFromMatrixPosition(t.matrixWorld),n.position.copy(ks),lo.copy(n.position),lo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(lo),n.updateMatrixWorld(),i.makeTranslation(-ks.x,-ks.y,-ks.z),Ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah)}},ea=class extends Xo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var Qo="\\[\\]\\.:\\/",r0=new RegExp("["+Qo+"]","g"),tl="[^"+Qo+"]",a0="[^"+Qo.replace("\\.","")+"]",o0=/((?:WC+[\/:])*)/.source.replace("WC",tl),l0=/(WCOD+)?/.source.replace("WCOD",a0),c0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tl),h0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tl),u0=new RegExp("^"+o0+l0+c0+h0+"$"),f0=["material","materials","bones","map"],Zo=class{constructor(t,e,n){let i=n||Bt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Bt=class{constructor(t,e,n){this.path=e,this.parsedPath=n||Bt.parseTrackName(e),this.node=Bt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Bt.Composite(t,e,n):new Bt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(r0,"")}static parseTrackName(t){let e=u0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);f0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=Bt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=Zo;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var av=new Float32Array(1);var na=class{constructor(t,e,n=0,i=1/0){this.ray=new Ys(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Jo(t,this,n,e),n.sort(Ch),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Jo(t[i],this,n,e);return n.sort(Ch),n}};function Ch(o,t){return o.distance-t.distance}function Jo(o,t,e,n){if(o.layers.test(t.layers)&&o.raycast(t,e),n===!0){let i=o.children;for(let s=0,r=i.length;s<r;s++)Jo(i[s],t,e,!0)}}var Qs=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ia=class extends Oo{constructor(t=10,e=10,n=4473924,i=8947848){n=new zt(n),i=new zt(i);let s=e/2,r=t/e,a=t/2,c=[],l=[];for(let f=0,p=0,_=-a;f<=e;f++,_+=r){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);let g=f===s?n:i;g.toArray(l,p),p+=3,g.toArray(l,p),p+=3,g.toArray(l,p),p+=3,g.toArray(l,p),p+=3}let h=new mn;h.setAttribute("position",new Ye(c,3)),h.setAttribute("color",new Ye(l,3));let u=new $r({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);var Xh={type:"change"},el={type:"start"},qh={type:"end"},aa=class extends Sn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_n.ROTATE,MIDDLE:_n.DOLLY,RIGHT:_n.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Wt),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Wt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xh),n.update(),s=i.NONE},this.update=function(){let R=new D,j=new pn().setFromUnitVectors(t.up,new D(0,1,0)),k=j.clone().invert(),ht=new D,pt=new pn,gt=2*Math.PI;return function(){let mt=n.object.position;R.copy(mt).sub(n.target),R.applyQuaternion(j),a.setFromVector3(R),n.autoRotate&&s===i.NONE&&x(P()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let wt=n.minAzimuthAngle,Rt=n.maxAzimuthAngle;return isFinite(wt)&&isFinite(Rt)&&(wt<-Math.PI?wt+=gt:wt>Math.PI&&(wt-=gt),Rt<-Math.PI?Rt+=gt:Rt>Math.PI&&(Rt-=gt),wt<=Rt?a.theta=Math.max(wt,Math.min(Rt,a.theta)):a.theta=a.theta>(wt+Rt)/2?Math.max(wt,a.theta):Math.min(Rt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),R.setFromSpherical(a),R.applyQuaternion(k),mt.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||ht.distanceToSquared(n.object.position)>r||8*(1-pt.dot(n.object.quaternion))>r?(n.dispatchEvent(Xh),ht.copy(n.object.position),pt.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",S),n.domElement.removeEventListener("pointerdown",At),n.domElement.removeEventListener("pointercancel",Zt),n.domElement.removeEventListener("wheel",Ft),n.domElement.removeEventListener("pointermove",Qt),n.domElement.removeEventListener("pointerup",Zt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Wt),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,r=1e-6,a=new Qs,c=new Qs,l=1,h=new D,u=!1,f=new Et,p=new Et,_=new Et,g=new Et,m=new Et,d=new Et,M=new Et,v=new Et,b=new Et,y=[],A={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function x(R){c.theta-=R}function T(R){c.phi-=R}let F=function(){let R=new D;return function(k,ht){R.setFromMatrixColumn(ht,0),R.multiplyScalar(-k),h.add(R)}}(),V=function(){let R=new D;return function(k,ht){n.screenSpacePanning===!0?R.setFromMatrixColumn(ht,1):(R.setFromMatrixColumn(ht,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(k),h.add(R)}}(),I=function(){let R=new D;return function(k,ht){let pt=n.domElement;if(n.object.isPerspectiveCamera){let gt=n.object.position;R.copy(gt).sub(n.target);let ft=R.length();ft*=Math.tan(n.object.fov/2*Math.PI/180),F(2*k*ft/pt.clientHeight,n.object.matrix),V(2*ht*ft/pt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(k*(n.object.right-n.object.left)/n.object.zoom/pt.clientWidth,n.object.matrix),V(ht*(n.object.top-n.object.bottom)/n.object.zoom/pt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(R){n.object.isPerspectiveCamera?l/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(R){n.object.isPerspectiveCamera?l*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(R){f.set(R.clientX,R.clientY)}function Z(R){M.set(R.clientX,R.clientY)}function H(R){g.set(R.clientX,R.clientY)}function Q(R){p.set(R.clientX,R.clientY),_.subVectors(p,f).multiplyScalar(n.rotateSpeed);let j=n.domElement;x(2*Math.PI*_.x/j.clientHeight),T(2*Math.PI*_.y/j.clientHeight),f.copy(p),n.update()}function tt(R){v.set(R.clientX,R.clientY),b.subVectors(v,M),b.y>0?O(C()):b.y<0&&N(C()),M.copy(v),n.update()}function rt(R){m.set(R.clientX,R.clientY),d.subVectors(m,g).multiplyScalar(n.panSpeed),I(d.x,d.y),g.copy(m),n.update()}function lt(R){R.deltaY<0?N(C()):R.deltaY>0&&O(C()),n.update()}function G(R){let j=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),j=!0;break}j&&(R.preventDefault(),n.update())}function K(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{let R=.5*(y[0].pageX+y[1].pageX),j=.5*(y[0].pageY+y[1].pageY);f.set(R,j)}}function st(){if(y.length===1)g.set(y[0].pageX,y[0].pageY);else{let R=.5*(y[0].pageX+y[1].pageX),j=.5*(y[0].pageY+y[1].pageY);g.set(R,j)}}function ut(){let R=y[0].pageX-y[1].pageX,j=y[0].pageY-y[1].pageY,k=Math.sqrt(R*R+j*j);M.set(0,k)}function B(){n.enableZoom&&ut(),n.enablePan&&st()}function St(){n.enableZoom&&ut(),n.enableRotate&&K()}function Mt(R){if(y.length==1)p.set(R.pageX,R.pageY);else{let k=ct(R),ht=.5*(R.pageX+k.x),pt=.5*(R.pageY+k.y);p.set(ht,pt)}_.subVectors(p,f).multiplyScalar(n.rotateSpeed);let j=n.domElement;x(2*Math.PI*_.x/j.clientHeight),T(2*Math.PI*_.y/j.clientHeight),f.copy(p)}function at(R){if(y.length===1)m.set(R.pageX,R.pageY);else{let j=ct(R),k=.5*(R.pageX+j.x),ht=.5*(R.pageY+j.y);m.set(k,ht)}d.subVectors(m,g).multiplyScalar(n.panSpeed),I(d.x,d.y),g.copy(m)}function yt(R){let j=ct(R),k=R.pageX-j.x,ht=R.pageY-j.y,pt=Math.sqrt(k*k+ht*ht);v.set(0,pt),b.set(0,Math.pow(v.y/M.y,n.zoomSpeed)),O(b.y),M.copy(v)}function kt(R){n.enableZoom&&yt(R),n.enablePan&&at(R)}function _t(R){n.enableZoom&&yt(R),n.enableRotate&&Mt(R)}function At(R){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",Qt),n.domElement.addEventListener("pointerup",Zt)),W(R),R.pointerType==="touch"?xe(R):re(R))}function Qt(R){n.enabled!==!1&&(R.pointerType==="touch"?E(R):ne(R))}function Zt(R){et(R),y.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",Qt),n.domElement.removeEventListener("pointerup",Zt)),n.dispatchEvent(qh),s=i.NONE}function re(R){let j;switch(R.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case _n.DOLLY:if(n.enableZoom===!1)return;Z(R),s=i.DOLLY;break;case _n.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;H(R),s=i.PAN}else{if(n.enableRotate===!1)return;Y(R),s=i.ROTATE}break;case _n.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;Y(R),s=i.ROTATE}else{if(n.enablePan===!1)return;H(R),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(el)}function ne(R){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Q(R);break;case i.DOLLY:if(n.enableZoom===!1)return;tt(R);break;case i.PAN:if(n.enablePan===!1)return;rt(R);break}}function Ft(R){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(R.preventDefault(),n.dispatchEvent(el),lt(R),n.dispatchEvent(qh))}function Wt(R){n.enabled===!1||n.enablePan===!1||G(R)}function xe(R){switch(it(R),y.length){case 1:switch(n.touches.ONE){case Ri.ROTATE:if(n.enableRotate===!1)return;K(),s=i.TOUCH_ROTATE;break;case Ri.PAN:if(n.enablePan===!1)return;st(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ri.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;B(),s=i.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;St(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(el)}function E(R){switch(it(R),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Mt(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;at(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;kt(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_t(R),n.update();break;default:s=i.NONE}}function S(R){n.enabled!==!1&&R.preventDefault()}function W(R){y.push(R)}function et(R){delete A[R.pointerId];for(let j=0;j<y.length;j++)if(y[j].pointerId==R.pointerId){y.splice(j,1);return}}function it(R){let j=A[R.pointerId];j===void 0&&(j=new Et,A[R.pointerId]=j),j.set(R.pageX,R.pageY)}function ct(R){let j=R.pointerId===y[0].pointerId?y[1]:y[0];return A[j.pointerId]}n.domElement.addEventListener("contextmenu",S),n.domElement.addEventListener("pointerdown",At),n.domElement.addEventListener("pointercancel",Zt),n.domElement.addEventListener("wheel",Ft,{passive:!1}),this.update()}};function Vn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function tu(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var Be={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ms={duration:.5,overwrite:!1,delay:0},yl,Te,ce,nn=1e8,Gt=1/nn,cl=Math.PI*2,p0=cl/4,m0=0,eu=Math.sqrt,g0=Math.cos,_0=Math.sin,fe=function(t){return typeof t=="string"},te=function(t){return typeof t=="function"},Gn=function(t){return typeof t=="number"},_a=function(t){return typeof t>"u"},Tn=function(t){return typeof t=="object"},ke=function(t){return t!==!1},Ml=function(){return typeof window<"u"},oa=function(t){return te(t)||fe(t)},nu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ee=Array.isArray,hl=/(?:-?\.?\d|\.)+/gi,bl=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Oi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sl=/[+-]=-?[.\d]+/,iu=/[^,'"\[\]\s]+/gi,x0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Kt,en,ul,wl,Ze={},ua={},su,ru=function(t){return(ua=Di(t,Ze))&&Ae},xa=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},fa=function(t,e){return!e&&console.warn(t)},au=function(t,e){return t&&(Ze[t]=e)&&ua&&(ua[t]=e)||Ze},ar=function(){return 0},v0={suppressEvents:!0,isStart:!0,kill:!1},la={suppressEvents:!0,kill:!1},y0={suppressEvents:!0},Tl={},ii=[],fl={},ou,ze={},il={},Yh=30,ca=[],El="",Al=function(t){var e=t[0],n,i;if(Tn(e)||te(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ca.length;i--&&!ca[i].targetTest(e););n=ca[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Rl(t[i],n)))||t.splice(i,1);return t},si=function(t){return t._gsap||Al(sn(t))[0]._gsap},Cl=function(t,e,n){return(n=t[e])&&te(n)?t[e]():_a(n)&&t.getAttribute&&t.getAttribute(e)||n},De=function(t,e){return(t=t.split(",")).forEach(e)||t},ee=function(t){return Math.round(t*1e5)/1e5||0},ge=function(t){return Math.round(t*1e7)/1e7||0},Ui=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},M0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},da=function(){var t=ii.length,e=ii.slice(0),n,i;for(fl={},ii.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},lu=function(t,e,n,i){ii.length&&!Te&&da(),t.render(e,n,i||Te&&e<0&&(t._initted||t._startAt)),ii.length&&!Te&&da()},cu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(iu).length<2?e:fe(t)?t.trim():t},hu=function(t){return t},an=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},b0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Di=function(t,e){for(var n in e)t[n]=e[n];return t},Zh=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Tn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},pa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ir=function(t){var e=t.parent||Kt,n=t.keyframes?b0(Ee(t.keyframes)):an;if(ke(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},S0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},uu=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t[i],a;if(s)for(a=e[s];r&&r[s]>a;)r=r._prev;return r?(e._next=r._next,r._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=r,e.parent=e._dp=t,e},va=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,r=e._next;s?s._next=r:t[n]===e&&(t[n]=r),r?r._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},ri=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Li=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},w0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},dl=function(t,e,n,i){return t._startAt&&(Te?t._startAt.revert(la):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},T0=function o(t){return!t||t._ts&&o(t.parent)},Jh=function(t){return t._repeat?bs(t._tTime,t=t.duration()+t._rDelay)*t:0},bs=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ma=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ya=function(t){return t._end=ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||Gt)||0))},Ma=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ya(t),n._dirty||Li(n,t)),t},fu=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=ma(t.rawTime(),e),(!e._dur||lr(0,e.totalDuration(),n)-e._tTime>Gt)&&e.render(n,!0)),Li(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Gt}},wn=function(t,e,n,i){return e.parent&&ri(e),e._start=ge((Gn(n)?n:n||t!==Kt?tn(t,n,e):t._time)+e._delay),e._end=ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),uu(t,e,"_first","_last",t._sort?"_start":0),pl(e)||(t._recent=e),i||fu(t,e),t._ts<0&&Ma(t,t._tTime),t},du=function(t,e){return(Ze.ScrollTrigger||xa("scrollTrigger",e))&&Ze.ScrollTrigger.create(e,t)},pu=function(t,e,n,i,s){if(Dl(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Te&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ou!==Fe.frame)return ii.push(t),t._lazy=[s,i],1},E0=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},pl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},A0=function(t,e,n,i){var s=t.ratio,r=e<0||!e&&(!t._start&&E0(t)&&!(!t._initted&&pl(t))||(t._ts<0||t._dp._ts<0)&&!pl(t))?0:1,a=t._rDelay,c=0,l,h,u;if(a&&t._repeat&&(c=lr(0,t._tDur,e),h=bs(c,a),t._yoyo&&h&1&&(r=1-r),h!==bs(t._tTime,a)&&(s=1-r,t.vars.repeatRefresh&&t._initted&&t.invalidate())),r!==s||Te||i||t._zTime===Gt||!e&&t._zTime){if(!t._initted&&pu(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?Gt:0),n||(n=e&&!u),t.ratio=r,t._from&&(r=1-r),t._time=0,t._tTime=c,l=t._pt;l;)l.r(r,l.d),l=l._next;e<0&&dl(t,e,n,!0),t._onUpdate&&!n&&rn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&rn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===r&&(r&&ri(t,1),!n&&!Te&&(rn(t,r?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},C0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ss=function(t,e,n,i){var s=t._repeat,r=ge(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=r/t._dur),t._dur=r,t._tDur=s?s<0?1e10:ge(r*(s+1)+t._rDelay*s):r,a>0&&!i&&Ma(t,t._tTime=t._tDur*a),t.parent&&ya(t),n||Li(t.parent,t),t},$h=function(t){return t instanceof we?Li(t):Ss(t,t._dur)},P0={_start:0,endTime:ar,totalDuration:ar},tn=function o(t,e,n){var i=t.labels,s=t._recent||P0,r=t.duration()>=nn?s.endTime(!1):t._dur,a,c,l;return fe(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=r),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(Ee(n)?n[0]:n).totalDuration()),a>1?o(t,e.substr(0,a-1),n)+c:r+c)):e==null?r:+e},sr=function(t,e,n){var i=Gn(e[1]),s=(i?2:1)+(t<2?0:1),r=e[s],a,c;if(i&&(r.duration=e[1]),r.parent=n,t){for(a=r,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=ke(c.vars.inherit)&&c.parent;r.immediateRender=ke(a.immediateRender),t<2?r.runBackwards=1:r.startAt=e[s-1]}return new le(e[0],r,e[s+1])},ai=function(t,e){return t||t===0?e(t):e},lr=function(t,e,n){return n<t?t:n>e?e:n},_e=function(t,e){return!fe(t)||!(e=x0.exec(t))?"":e[1]},R0=function(t,e,n){return ai(n,function(i){return lr(t,e,i)})},ml=[].slice,mu=function(t,e){return t&&Tn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Tn(t[0]))&&!t.nodeType&&t!==en},L0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return fe(i)&&!e||mu(i,1)?(s=n).push.apply(s,sn(i)):n.push(i)})||n},sn=function(t,e,n){return ce&&!e&&ce.selector?ce.selector(t):fe(t)&&!n&&(ul||!ws())?ml.call((e||wl).querySelectorAll(t),0):Ee(t)?L0(t,n):mu(t)?ml.call(t,0):t?[t]:[]},gl=function(t){return t=sn(t)[0]||fa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return sn(e,n.querySelectorAll?n:n===t?fa("Invalid scope")||wl.createElement("div"):t)}},gu=function(t){return t.sort(function(){return .5-Math.random()})},_u=function(t){if(te(t))return t;var e=Tn(t)?t:{each:t},n=Ii(e.ease),i=e.from||0,s=parseFloat(e.base)||0,r={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,u=i;return fe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(f,p,_){var g=(_||e).length,m=r[g],d,M,v,b,y,A,P,C,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,nn])[1],!x){for(P=-nn;P<(P=_[x++].getBoundingClientRect().left)&&x<g;);x--}for(m=r[g]=[],d=c?Math.min(x,g)*h-.5:i%x,M=x===nn?0:c?g*u/x-.5:i/x|0,P=0,C=nn,A=0;A<g;A++)v=A%x-d,b=M-(A/x|0),m[A]=y=l?Math.abs(l==="y"?b:v):eu(v*v+b*b),y>P&&(P=y),y<C&&(C=y);i==="random"&&gu(m),m.max=P-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:l?l==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=_e(e.amount||e.each)||0,n=n&&g<0?Eu(n):n}return g=(m[f]-m.min)/m.max||0,ge(m.b+(n?n(g):g)*m.v)+m.u}},_l=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ge(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Gn(n)?0:_e(n))}},xu=function(t,e){var n=Ee(t),i,s;return!n&&Tn(t)&&(i=n=t.radius||nn,t.values?(t=sn(t.values),(s=!Gn(t[0]))&&(i*=i)):t=_l(t.increment)),ai(e,n?te(t)?function(r){return s=t(r),Math.abs(s-r)<=i?s:r}:function(r){for(var a=parseFloat(s?r.x:r),c=parseFloat(s?r.y:0),l=nn,h=0,u=t.length,f,p;u--;)s?(f=t[u].x-a,p=t[u].y-c,f=f*f+p*p):f=Math.abs(t[u]-a),f<l&&(l=f,h=u);return h=!i||l<=i?t[h]:r,s||h===r||Gn(r)?h:h+_e(r)}:_l(t))},vu=function(t,e,n,i){return ai(Ee(t)?!e:n===!0?!!(n=0):!i,function(){return Ee(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},I0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,r){return r(s)},i)}},D0=function(t,e){return function(n){return t(parseFloat(n))+(e||_e(n))}},O0=function(t,e,n){return Mu(t,e,0,1,n)},yu=function(t,e,n){return ai(n,function(i){return t[~~e(i)]})},U0=function o(t,e,n){var i=e-t;return Ee(t)?yu(t,o(0,t.length),e):ai(n,function(s){return(i+(s-t)%i)%i+t})},N0=function o(t,e,n){var i=e-t,s=i*2;return Ee(t)?yu(t,o(0,t.length-1),e):ai(n,function(r){return r=(s+(r-t)%s)%s||0,t+(r>i?s-r:r)})},As=function(t){for(var e=0,n="",i,s,r,a;~(i=t.indexOf("random(",e));)r=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,r-i-7).match(a?iu:hl),n+=t.substr(e,i-e)+vu(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=r+1;return n+t.substr(e,t.length-e)},Mu=function(t,e,n,i,s){var r=e-t,a=i-n;return ai(s,function(c){return n+((c-t)/r*a||0)})},z0=function o(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var r=fe(t),a={},c,l,h,u,f;if(n===!0&&(i=1)&&(n=null),r)t={p:t},e={p:e};else if(Ee(t)&&!Ee(e)){for(h=[],u=t.length,f=u-2,l=1;l<u;l++)h.push(o(t[l-1],t[l]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=Di(Ee(t)?[]:{},t));if(!h){for(c in e)Ll.call(a,t,c,"get",e[c]);s=function(_){return Nl(_,a)||(r?t.p:t)}}}return ai(n,s)},Kh=function(t,e,n){var i=t.labels,s=nn,r,a,c;for(r in i)a=i[r]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=r,s=a);return c},rn=function(t,e,n){var i=t.vars,s=i[e],r=ce,a=t._ctx,c,l,h;if(s)return c=i[e+"Params"],l=i.callbackScope||t,n&&ii.length&&da(),a&&(ce=a),h=c?s.apply(l,c):s.call(l),ce=r,h},er=function(t){return ri(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Te),t.progress()<1&&rn(t,"onInterrupt"),t},ys,bu=[],Su=function(t){if(!Ml()){bu.push(t);return}t=!t.name&&t.default||t;var e=t.name,n=te(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ar,render:Nl,add:Ll,kill:Q0,modifier:j0,rawVars:0},r={targetTest:0,get:0,getSetter:ba,aliases:{},register:0};if(ws(),t!==i){if(ze[e])return;an(i,an(pa(t,s),r)),Di(i.prototype,Di(s,pa(t,r))),ze[i.prop=e]=i,t.targetTest&&(ca.push(i),Tl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}au(e,i),t.register&&t.register(Ae,i,Oe)},Ht=255,nr={aqua:[0,Ht,Ht],lime:[0,Ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ht],navy:[0,0,128],white:[Ht,Ht,Ht],olive:[128,128,0],yellow:[Ht,Ht,0],orange:[Ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ht,0,0],pink:[Ht,192,203],cyan:[0,Ht,Ht],transparent:[Ht,Ht,Ht,0]},sl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ht+.5|0},wu=function(t,e,n){var i=t?Gn(t)?[t>>16,t>>8&Ht,t&Ht]:0:nr.black,s,r,a,c,l,h,u,f,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),nr[t])i=nr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),r=t.charAt(2),a=t.charAt(3),t="#"+s+s+r+r+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ht,i&Ht,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ht,t&Ht]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(hl),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,r=h<=.5?h*(l+1):h+l-h*l,s=h*2-r,i.length>3&&(i[3]*=1),i[0]=sl(c+1/3,s,r),i[1]=sl(c,s,r),i[2]=sl(c-1/3,s,r);else if(~t.indexOf("="))return i=t.match(bl),n&&i.length<4&&(i[3]=1),i}else i=t.match(hl)||nr.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Ht,r=i[1]/Ht,a=i[2]/Ht,u=Math.max(s,r,a),f=Math.min(s,r,a),h=(u+f)/2,u===f?c=l=0:(p=u-f,l=h>.5?p/(2-u-f):p/(u+f),c=u===s?(r-a)/p+(r<a?6:0):u===r?(a-s)/p+2:(s-r)/p+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Tu=function(t){var e=[],n=[],i=-1;return t.split(Hn).forEach(function(s){var r=s.match(Oi)||[];e.push.apply(e,r),n.push(i+=r.length+1)}),e.c=n,e},jh=function(t,e,n){var i="",s=(t+i).match(Hn),r=e?"hsla(":"rgba(",a=0,c,l,h,u;if(!s)return t;if(s=s.map(function(f){return(f=wu(f,e,1))&&r+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Tu(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(Hn,"1").split(Oi),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||r+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=t.split(Hn),u=l.length-1;a<u;a++)i+=l[a]+s[a];return i+l[u]},Hn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in nr)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),F0=/hsl[a]?\(/,Pl=function(t){var e=t.join(" "),n;if(Hn.lastIndex=0,Hn.test(e))return n=F0.test(e),t[1]=jh(t[1],n),t[0]=jh(t[0],n,Tu(t[1])),!0},or,Fe=function(){var o=Date.now,t=500,e=33,n=o(),i=n,s=1e3/240,r=s,a=[],c,l,h,u,f,p,_=function g(m){var d=o()-i,M=m===!0,v,b,y,A;if(d>t&&(n+=d-e),i+=d,y=i-n,v=y-r,(v>0||M)&&(A=++u.frame,f=y-u.time*1e3,u.time=y=y/1e3,r+=v+(v>=s?4:s-v),b=1),M||(c=l(g)),b)for(p=0;p<a.length;p++)a[p](y,f,A,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){su&&(!ul&&Ml()&&(en=ul=window,wl=en.document||{},Ze.gsap=Ae,(en.gsapVersions||(en.gsapVersions=[])).push(Ae.version),ru(ua||en.GreenSockGlobals||!en.gsap&&en||{}),h=en.requestAnimationFrame,bu.forEach(Su)),c&&u.sleep(),l=h||function(m){return setTimeout(m,r-u.time*1e3+1|0)},or=1,_(2))},sleep:function(){(h?en.cancelAnimationFrame:clearTimeout)(c),or=0,l=ar},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),r=u.time*1e3+s},add:function(m,d,M){var v=d?function(b,y,A,P){m(b,y,A,P),u.remove(v)}:m;return u.remove(m),a[M?"unshift":"push"](v),ws(),v},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},u}(),ws=function(){return!or&&Fe.wake()},Ut={},k0=/^[\d.\-M][\d.\-,\s]/,B0=/["']/g,V0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,r=n.length,a,c,l;s<r;s++)c=n[s],a=s!==r-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(B0,"").trim():+l,i=c.substr(a+1).trim();return e},H0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},G0=function(t){var e=(t+"").split("("),n=Ut[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[V0(e[1])]:H0(t).split(",").map(cu)):Ut._CE&&k0.test(t)?Ut._CE("",t):n},Eu=function(t){return function(e){return 1-t(1-e)}},Au=function o(t,e){for(var n=t._first,i;n;)n instanceof we?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ii=function(t,e){return t&&(te(t)?t:Ut[t]||G0(t))||e},Ni=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},r;return De(t,function(a){Ut[a]=Ze[a]=s,Ut[r=a.toLowerCase()]=n;for(var c in s)Ut[r+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ut[a+"."+c]=s[c]}),s},Cu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},rl=function o(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),r=s/cl*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*_0((h-r)*s)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Cu(a);return s=cl/s,c.config=function(l,h){return o(t,l,h)},c},al=function o(t,e){e===void 0&&(e=1.70158);var n=function(r){return r?--r*r*((e+1)*r+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Cu(n);return i.config=function(s){return o(t,s)},i};De("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Ni(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ut.Linear.easeNone=Ut.none=Ut.Linear.easeIn;Ni("Elastic",rl("in"),rl("out"),rl());(function(o,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?o*a*a:a<n?o*Math.pow(a-1.5/t,2)+.75:a<i?o*(a-=2.25/t)*a+.9375:o*Math.pow(a-2.625/t,2)+.984375};Ni("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);Ni("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Ni("Circ",function(o){return-(eu(1-o*o)-1)});Ni("Sine",function(o){return o===1?1:-g0(o*p0)+1});Ni("Back",al("in"),al("out"),al());Ut.SteppedEase=Ut.steps=Ze.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,r=1-Gt;return function(a){return((i*lr(0,r,a)|0)+s)*n}}};Ms.ease=Ut["quad.out"];De("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return El+=o+","+o+"Params,"});var Rl=function(t,e){this.id=m0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Cl,this.set=e?e.getSetter:ba},Ts=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ss(this,+e.duration,1,1),this.data=e.data,ce&&(this._ctx=ce,ce.data.push(this)),or||Fe.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ss(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ma(this,n),!s._dp||s.parent||fu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Gt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),lu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?bs(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Gt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ma(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Gt?0:this._rts,this.totalTime(lr(-Math.abs(this._delay),this._tDur,i),!0),ya(this),w0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ws(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Gt&&(this._tTime-=Gt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ke(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ma(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=y0);var i=Te;return Te=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Te=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,$h(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,$h(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(tn(this,n),ke(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ke(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Gt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Gt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Gt)},t.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},t.then=function(n){var i=this;return new Promise(function(s){var r=te(n)?n:hu,a=function(){var l=i.then;i.then=null,te(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=l),s(r),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){er(this)},o}();an(Ts.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Gt,_prom:0,_ps:!1,_rts:1});var we=function(o){tu(t,o);function t(n,i){var s;return n===void 0&&(n={}),s=o.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ke(n.sortChildren),Kt&&wn(n.parent||Kt,Vn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&du(Vn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,r){return sr(0,arguments,this),this},e.from=function(i,s,r){return sr(1,arguments,this),this},e.fromTo=function(i,s,r,a){return sr(2,arguments,this),this},e.set=function(i,s,r){return s.duration=0,s.parent=this,ir(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new le(i,s,tn(this,r),1),this},e.call=function(i,s,r){return wn(this,le.delayedCall(0,i,s),r)},e.staggerTo=function(i,s,r,a,c,l,h){return r.duration=s,r.stagger=r.stagger||a,r.onComplete=l,r.onCompleteParams=h,r.parent=this,new le(i,r,tn(this,c)),this},e.staggerFrom=function(i,s,r,a,c,l,h){return r.runBackwards=1,ir(r).immediateRender=ke(r.immediateRender),this.staggerTo(i,s,r,a,c,l,h)},e.staggerFromTo=function(i,s,r,a,c,l,h,u){return a.startAt=r,ir(a).immediateRender=ke(a.immediateRender),this.staggerTo(i,s,a,c,l,h,u)},e.render=function(i,s,r){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:ge(i),u=this._zTime<0!=i<0&&(this._initted||!l),f,p,_,g,m,d,M,v,b,y,A,P;if(this!==Kt&&h>c&&i>=0&&(h=c),h!==this._tTime||r||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),f=h,b=this._start,v=this._ts,d=!v,u&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,r);if(f=ge(h%m),h===c?(g=this._repeat,f=l):(g=~~(h/m),g&&g===h/m&&(f=l,g--),f>l&&(f=l)),y=bs(this._tTime,m),!a&&this._tTime&&y!==g&&this._tTime-y*m-this._dur<=0&&(y=g),A&&g&1&&(f=l-f,P=1),g!==y&&!this._lock){var C=A&&y&1,x=C===(A&&g&1);if(g<y&&(C=!C),a=C?0:l,this._lock=1,this.render(a||(P?0:ge(g*m)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,x&&(this._lock=2,a=C?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Au(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=C0(this,ge(a),ge(f)),M&&(h-=f-(f=M._start))),this._tTime=h,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!g&&(rn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,r);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,r),f!==this._time||!this._ts&&!d){M=0,_&&(h+=this._zTime=-Gt);break}}p=_}else{p=this._last;for(var T=i<0?i:f;p;){if(_=p._prev,(p._act||T<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,r);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,r||Te&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){M=0,_&&(h+=this._zTime=T?-Gt:Gt);break}}p=_}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-Gt)._zTime=f>=a?1:-1,this._ts))return this._start=b,ya(this),this.render(i,s,r);this._onUpdate&&!s&&rn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(b===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&ri(this,1),!s&&!(i<0&&!a)&&(h||a||!c)&&(rn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var r=this;if(Gn(s)||(s=tn(this,s,i)),!(i instanceof Ts)){if(Ee(i))return i.forEach(function(a){return r.add(a,s)}),this;if(fe(i))return this.addLabel(i,s);if(te(i))i=le.delayedCall(0,i);else return this}return this!==i?wn(this,i,s):this},e.getChildren=function(i,s,r,a){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=-nn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof le?s&&c.push(l):(r&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,r)))),l=l._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},e.remove=function(i){return fe(i)?this.removeLabel(i):te(i)?this.killTweensOf(i):(va(this,i),i===this._recent&&(this._recent=this._last),Li(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ge(Fe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=tn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,r){var a=le.delayedCall(0,s||ar,r);return a.data="isPause",this._hasPause=1,wn(this,a,tn(this,i))},e.removePause=function(i){var s=this._first;for(i=tn(this,i);s;)s._start===i&&s.data==="isPause"&&ri(s),s=s._next},e.killTweensOf=function(i,s,r){for(var a=this.getTweensOf(i,r),c=a.length;c--;)ni!==a[c]&&a[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var r=[],a=sn(i),c=this._first,l=Gn(s),h;c;)c instanceof le?M0(c._targets,a)&&(l?(!ni||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&r.push(c):(h=c.getTweensOf(a,s)).length&&r.push.apply(r,h),c=c._next;return r},e.tweenTo=function(i,s){s=s||{};var r=this,a=tn(r,i),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,f=c.immediateRender,p,_=le.to(r,an({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:r._time))/r.timeScale())||Gt,onStart:function(){if(r.pause(),!p){var m=s.duration||Math.abs((a-(l&&"time"in l?l.time:r._time))/r.timeScale());_._dur!==m&&Ss(_,m,0,1).render(_._time,!0,!0),p=1}h&&h.apply(_,u||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,r){return this.tweenTo(s,an({startAt:{time:tn(this,i)}},r))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Kh(this,tn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Kh(this,tn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Gt)},e.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var a=this._first,c=this.labels,l;a;)a._start>=r&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=r&&(c[l]+=i);return Li(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Li(this)},e.totalDuration=function(i){var s=0,r=this,a=r._last,c=nn,l,h,u;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(u=r.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&r._sort&&a._ts&&!r._lock?(r._lock=1,wn(r,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(s-=h,(!u&&!r._dp||u&&u.smoothChildTiming)&&(r._start+=h/r._ts,r._time-=h,r._tTime-=h),r.shiftChildren(-h,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;Ss(r,r===Kt&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},t.updateRoot=function(i){if(Kt._ts&&(lu(Kt,ma(i,Kt)),ou=Fe.frame),Fe.frame>=Yh){Yh+=Be.autoSleep||120;var s=Kt._first;if((!s||!s._ts)&&Be.autoSleep&&Fe._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Fe.sleep()}}},t}(Ts);an(we.prototype,{_lock:0,_hasPause:0,_forcing:0});var W0=function(t,e,n,i,s,r,a){var c=new Oe(this._pt,t,e,0,1,Ul,null,s),l=0,h=0,u,f,p,_,g,m,d,M;for(c.b=n,c.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=As(i)),r&&(M=[n,i],r(M,t,e),n=M[0],i=M[1]),f=n.match(nl)||[];u=nl.exec(i);)_=u[0],g=i.substring(l,u.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Ui(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},l=nl.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(Sl.test(i)||d)&&(c.e=0),this._pt=c,c},Ll=function(t,e,n,i,s,r,a,c,l,h){te(i)&&(i=i(s||0,t,r));var u=t[e],f=n!=="get"?n:te(u)?l?t[e.indexOf("set")||!te(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,p=te(u)?l?J0:Lu:Ol,_;if(fe(i)&&(~i.indexOf("random(")&&(i=As(i)),i.charAt(1)==="="&&(_=Ui(f,i)+(_e(f)||0),(_||_===0)&&(i=_))),!h||f!==i||xl)return!isNaN(f*i)&&i!==""?(_=new Oe(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?K0:Iu,0,p),l&&(_.fp=l),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&xa(e,i),W0.call(this,t,e,f,i,p,c||Be.stringFilter,l))},X0=function(t,e,n,i,s){if(te(t)&&(t=rr(t,s,e,n,i)),!Tn(t)||t.style&&t.nodeType||Ee(t)||nu(t))return fe(t)?rr(t,s,e,n,i):t;var r={},a;for(a in t)r[a]=rr(t[a],s,e,n,i);return r},Il=function(t,e,n,i,s,r){var a,c,l,h;if(ze[t]&&(a=new ze[t]).init(s,a.rawVars?e[t]:X0(e[t],i,s,r,n),n,i,r)!==!1&&(n._pt=c=new Oe(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==ys))for(l=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)l[a._props[h]]=c;return a},ni,xl,Dl=function o(t,e,n){var i=t.vars,s=i.ease,r=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.onUpdateParams,u=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=t._dur,d=t._startAt,M=t._targets,v=t.parent,b=v&&v.data==="nested"?v.vars.targets:M,y=t._overwrite==="auto"&&!yl,A=t.timeline,P,C,x,T,F,V,I,O,N,Y,Z,H,Q;if(A&&(!_||!s)&&(s="none"),t._ease=Ii(s,Ms.ease),t._yEase=p?Eu(Ii(p===!0?s:p,Ms.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!A&&!!i.runBackwards,!A||_&&!i.stagger){if(O=M[0]?si(M[0]).harness:0,H=O&&i[O.prop],P=pa(i,Tl),d&&(d._zTime<0&&d.progress(1),e<0&&f&&a&&!g?d.render(-1,!0):d.revert(f&&m?la:v0),d._lazy=0),r){if(ri(t._startAt=le.set(M,an({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!d&&ke(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:h,callbackScope:u,stagger:0},r))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Te||!a&&!g)&&t._startAt.revert(la),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&m&&!d){if(e&&(a=!1),x=an({overwrite:!1,data:"isFromStart",lazy:a&&!d&&ke(c),immediateRender:a,stagger:0,parent:v},P),H&&(x[O.prop]=H),ri(t._startAt=le.set(M,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Te?t._startAt.revert(la):t._startAt.render(-1,!0)),t._zTime=e,!a)o(t._startAt,Gt,Gt);else if(!e)return}for(t._pt=t._ptCache=0,c=m&&ke(c)||c&&!m,C=0;C<M.length;C++){if(F=M[C],I=F._gsap||Al(M)[C]._gsap,t._ptLookup[C]=Y={},fl[I.id]&&ii.length&&da(),Z=b===M?C:b.indexOf(F),O&&(N=new O).init(F,H||P,t,Z,b)!==!1&&(t._pt=T=new Oe(t._pt,F,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(tt){Y[tt]=T}),N.priority&&(V=1)),!O||H)for(x in P)ze[x]&&(N=Il(x,P,t,Z,F,b))?N.priority&&(V=1):Y[x]=T=Ll.call(t,F,x,"get",P[x],Z,b,0,i.stringFilter);t._op&&t._op[C]&&t.kill(F,t._op[C]),y&&t._pt&&(ni=t,Kt.killTweensOf(F,Y,t.globalTime(e)),Q=!t.parent,ni=0),t._pt&&c&&(fl[I.id]=1)}V&&zl(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!Q,_&&e<=0&&A.render(nn,!0,!0)},q0=function(t,e,n,i,s,r,a){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,h,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(l=u[f][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e&&l.fp!==e;)l=l._next;if(!l)return xl=1,t.vars[e]="+=0",Dl(t,a),xl=0,1;c.push(l)}for(f=c.length;f--;)h=c[f],l=h._pt||h,l.s=(i||i===0)&&!s?i:l.s+(i||0)+r*l.c,l.c=n-l.s,h.e&&(h.e=ee(n)+_e(h.e)),h.b&&(h.b=l.s+_e(h.b))},Y0=function(t,e){var n=t[0]?si(t[0]).harness:0,i=n&&n.aliases,s,r,a,c;if(!i)return e;s=Di({},e);for(r in i)if(r in s)for(c=i[r].split(","),a=c.length;a--;)s[c[a]]=s[r];return s},Z0=function(t,e,n,i){var s=e.ease||i||"power1.inOut",r,a;if(Ee(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:s})});else for(r in e)a=n[r]||(n[r]=[]),r==="ease"||a.push({t:parseFloat(t),v:e[r],e:s})},rr=function(t,e,n,i,s){return te(t)?t.call(e,n,i,s):fe(t)&&~t.indexOf("random(")?As(t):t},Pu=El+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ru={};De(Pu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Ru[o]=1});var le=function(o){tu(t,o);function t(n,i,s,r){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=o.call(this,r?i:ir(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,f=c.stagger,p=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,d=c.yoyoEase,M=i.parent||Kt,v=(Ee(n)||nu(n)?Gn(n[0]):"length"in i)?[n]:sn(n),b,y,A,P,C,x,T,F;if(a._targets=v.length?Al(v):fa("GSAP target "+n+" not found. https://greensock.com",!Be.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||oa(l)||oa(h)){if(i=a.vars,b=a.timeline=new we({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:v}),b.kill(),b.parent=b._dp=Vn(a),b._start=0,f||oa(l)||oa(h)){if(P=v.length,T=f&&_u(f),Tn(f))for(C in f)~Pu.indexOf(C)&&(F||(F={}),F[C]=f[C]);for(y=0;y<P;y++)A=pa(i,Ru),A.stagger=0,d&&(A.yoyoEase=d),F&&Di(A,F),x=v[y],A.duration=+rr(l,Vn(a),y,x,v),A.delay=(+rr(h,Vn(a),y,x,v)||0)-a._delay,!f&&P===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),b.to(x,A,T?T(y,x,v):0),b._ease=Ut.none;b.duration()?l=h=0:a.timeline=0}else if(_){ir(an(b.vars.defaults,{ease:"none"})),b._ease=Ii(_.ease||i.ease||"none");var V=0,I,O,N;if(Ee(_))_.forEach(function(Y){return b.to(v,Y,">")}),b.duration();else{A={};for(C in _)C==="ease"||C==="easeEach"||Z0(C,_[C],A,_.easeEach);for(C in A)for(I=A[C].sort(function(Y,Z){return Y.t-Z.t}),V=0,y=0;y<I.length;y++)O=I[y],N={ease:O.e,duration:(O.t-(y?I[y-1].t:0))/100*l},N[C]=O.v,b.to(v,N,V),V+=N.duration;b.duration()<l&&b.to({},{duration:l-b.duration()})}}l||a.duration(l=b.duration())}else a.timeline=0;return p===!0&&!yl&&(ni=Vn(a),Kt.killTweensOf(v),ni=0),wn(M,Vn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!_&&a._start===ge(M._time)&&ke(u)&&T0(Vn(a))&&M.data!=="nested")&&(a._tTime=-Gt,a.render(Math.max(0,-h)||0)),m&&du(Vn(a),m),a}var e=t.prototype;return e.render=function(i,s,r){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-Gt&&!h?c:i<Gt?0:i,f,p,_,g,m,d,M,v,b;if(!l)A0(this,i,s,r);else if(u!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,v=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,r);if(f=ge(u%g),u===c?(_=this._repeat,f=l):(_=~~(u/g),_&&_===u/g&&(f=l,_--),f>l&&(f=l)),d=this._yoyo&&_&1,d&&(b=this._yEase,f=l-f),m=bs(this._tTime,g),f===a&&!r&&this._initted)return this._tTime=u,this;_!==m&&(v&&this._yEase&&Au(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=r=1,this.render(ge(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(pu(this,h?i:f,r,s,u))return this._tTime=0,this;if(a!==this._time)return this;if(l!==this._dur)return this.render(i,s,r)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(b||this._ease)(f/l),this._from&&(this.ratio=M=1-M),f&&!a&&!s&&!_&&(rn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;v&&v.render(i<0?i:!f&&d?-Gt:v._dur*v._ease(f/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&dl(this,i,s,r),rn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&rn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&dl(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ri(this,1),!s&&!(h&&!a)&&(u||a||d)&&(rn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,r,a){or||Fe.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||Dl(this,c),l=this._ease(c/this._dur),q0(this,i,s,r,a,l,c)?this.resetTo(i,s,r,a):(Ma(this,0),this.parent||uu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?er(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ni&&ni.vars.overwrite!==!0)._first||er(this),this.parent&&r!==this.timeline.totalDuration()&&Ss(this,this._dur*this.timeline._tDur/r,0,1),this}var a=this._targets,c=i?sn(i):a,l=this._ptLookup,h=this._pt,u,f,p,_,g,m,d;if((!s||s==="all")&&S0(a,c))return s==="all"&&(this._pt=0),er(this);for(u=this._op=this._op||[],s!=="all"&&(fe(s)&&(g={},De(s,function(M){return g[M]=1}),s=g),s=Y0(a,s)),d=a.length;d--;)if(~c.indexOf(a[d])){f=l[d],s==="all"?(u[d]=s,_=f,p={}):(p=u[d]=u[d]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&va(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&er(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return sr(1,arguments)},t.delayedCall=function(i,s,r,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:a})},t.fromTo=function(i,s,r){return sr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,r){return Kt.killTweensOf(i,s,r)},t}(Ts);an(le.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});De("staggerTo,staggerFrom,staggerFromTo",function(o){le[o]=function(){var t=new we,e=ml.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var Ol=function(t,e,n){return t[e]=n},Lu=function(t,e,n){return t[e](n)},J0=function(t,e,n,i){return t[e](i.fp,n)},$0=function(t,e,n){return t.setAttribute(e,n)},ba=function(t,e){return te(t[e])?Lu:_a(t[e])&&t.setAttribute?$0:Ol},Iu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},K0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ul=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Nl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},j0=function(t,e,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(t,e,n),s=r},Q0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?va(this,e,"_pt"):e.dep||(n=1),e=i;return!n},tx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},zl=function(t){for(var e=t._pt,n,i,s,r;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:r)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:r=e,e=n}t._pt=s},Oe=function(){function o(e,n,i,s,r,a,c,l,h){this.t=n,this.s=s,this.c=r,this.p=i,this.r=a||Iu,this.d=c||this,this.set=l||Ol,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=tx,this.m=n,this.mt=s,this.tween=i},o}();De(El+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Tl[o]=1});Ze.TweenMax=Ze.TweenLite=le;Ze.TimelineLite=Ze.TimelineMax=we;Kt=new we({sortChildren:!1,defaults:Ms,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Be.stringFilter=Pl;var Es=[],ha={},ex=[],Qh=0,ol=function(t){return(ha[t]||ex).map(function(e){return e()})},vl=function(){var t=Date.now(),e=[];t-Qh>2&&(ol("matchMediaInit"),Es.forEach(function(n){var i=n.queries,s=n.conditions,r,a,c,l;for(a in i)r=en.matchMedia(i[a]).matches,r&&(c=1),r!==s[a]&&(s[a]=r,l=1);l&&(n.revert(),c&&e.push(n))}),ol("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Qh=t,ol("matchMedia"))},Du=function(){function o(e,n){this.selector=n&&gl(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,s){te(n)&&(s=i,i=n,n=te);var r=this,a=function(){var l=ce,h=r.selector,u;return l&&l!==r&&l.data.push(r),s&&(r.selector=gl(s)),ce=r,u=i.apply(r,arguments),te(u)&&r._r.push(u),ce=l,r.selector=h,r.isReverted=!1,u};return r.last=a,n===te?a(r):n?r[n]=a:a},t.ignore=function(n){var i=ce;ce=null,n(this),ce=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof le&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var r=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return r.splice(r.indexOf(l),1)}))}),r.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof Ts)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,s)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i){var a=Es.indexOf(this);~a&&Es.splice(a,1)}},t.revert=function(n){this.kill(n||{})},o}(),nx=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,s){Tn(n)||(n={matches:n});var r=new Du(0,s||this.scope),a=r.conditions={},c,l,h;this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(l in n)l==="all"?h=1:(c=en.matchMedia(n[l]),c&&(Es.indexOf(r)<0&&Es.push(r),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(vl):c.addEventListener("change",vl)));return h&&i(r),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),ga={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Su(i)})},timeline:function(t){return new we(t)},getTweensOf:function(t,e){return Kt.getTweensOf(t,e)},getProperty:function(t,e,n,i){fe(t)&&(t=sn(t)[0]);var s=si(t||{}).get,r=n?hu:cu;return n==="native"&&(n=""),t&&(e?r((ze[e]&&ze[e].get||s)(t,e,n,i)):function(a,c,l){return r((ze[a]&&ze[a].get||s)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=sn(t),t.length>1){var i=t.map(function(h){return Ae.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var r=ze[e],a=si(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=r?function(h){var u=new r;ys._pt=0,u.init(t,n?h+n:h,ys,0,[t]),u.render(1,u),ys._pt&&Nl(1,ys)}:a.set(t,c);return r?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Ae.to(t,Di((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),r=function(c,l,h){return s.resetTo(e,c,l,h)};return r.tween=s,r},isTweening:function(t){return Kt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ii(t.ease,Ms.ease)),Zh(Ms,t||{})},config:function(t){return Zh(Be,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,r=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ze[a]&&!Ze[a]&&fa(e+" effect requires "+a+" plugin.")}),il[e]=function(a,c,l){return n(sn(a),an(c||{},s),l)},r&&(we.prototype[e]=function(a,c,l){return this.add(il[e](a,Tn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Ut[t]=Ii(e)},parseEase:function(t,e){return arguments.length?Ii(t,e):Ut},getById:function(t){return Kt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new we(t),i,s;for(n.smoothChildTiming=ke(t.smoothChildTiming),Kt.remove(n),n._dp=0,n._time=n._tTime=Kt._time,i=Kt._first;i;)s=i._next,(e||!(!i._dur&&i instanceof le&&i.vars.onComplete===i._targets[0]))&&wn(n,i,i._start-i._delay),i=s;return wn(Kt,n,0),n},context:function(t,e){return t?new Du(t,e):ce},matchMedia:function(t){return new nx(t)},matchMediaRefresh:function(){return Es.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||vl()},addEventListener:function(t,e){var n=ha[t]||(ha[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ha[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:U0,wrapYoyo:N0,distribute:_u,random:vu,snap:xu,normalize:O0,getUnit:_e,clamp:R0,splitColor:wu,toArray:sn,selector:gl,mapRange:Mu,pipe:I0,unitize:D0,interpolate:z0,shuffle:gu},install:ru,effects:il,ticker:Fe,updateRoot:we.updateRoot,plugins:ze,globalTimeline:Kt,core:{PropTween:Oe,globals:au,Tween:le,Timeline:we,Animation:Ts,getCache:si,_removeLinkedListItem:va,reverting:function(){return Te},context:function(t){return t&&ce&&(ce.data.push(t),t._ctx=ce),ce},suppressOverwrites:function(t){return yl=t}}};De("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ga[o]=le[o]});Fe.add(we.updateRoot);ys=ga.to({},{duration:0});var ix=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},sx=function(t,e){var n=t._targets,i,s,r;for(i in e)for(s=n.length;s--;)r=t._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=ix(r,i)),r&&r.modifier&&r.modifier(e[i],t,n[s],i))},ll=function(t,e){return{name:t,rawVars:1,init:function(i,s,r){r._onInit=function(a){var c,l;if(fe(s)&&(c={},De(s,function(h){return c[h]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}sx(a,s)}}}},Ae=ga.registerPlugin({name:"attr",init:function(t,e,n,i,s){var r,a,c;this.tween=n;for(r in e)c=t.getAttribute(r)||"",a=this.add(t,"setAttribute",(c||0)+"",e[r],i,s,0,0,r),a.op=r,a.b=c,this._props.push(r)},render:function(t,e){for(var n=e._pt;n;)Te?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ll("roundProps",_l),ll("modifiers"),ll("snap",xu))||ga;le.version=we.version=Ae.version="3.11.5";su=1;Ml()&&ws();var rx=Ut.Power0,ax=Ut.Power1,ox=Ut.Power2,lx=Ut.Power3,cx=Ut.Power4,hx=Ut.Linear,ux=Ut.Quad,fx=Ut.Cubic,dx=Ut.Quart,px=Ut.Quint,mx=Ut.Strong,gx=Ut.Elastic,_x=Ut.Back,xx=Ut.SteppedEase,vx=Ut.Bounce,yx=Ut.Sine,Mx=Ut.Expo,bx=Ut.Circ;var Ou,oi,Ps,Wl,Bi,Sx,Uu,Xl,wx=function(){return typeof window<"u"},Xn={},ki=180/Math.PI,Rs=Math.PI/180,Cs=Math.atan2,Nu=1e8,ql=/([A-Z])/g,Tx=/(left|right|width|margin|padding|x)/i,Ex=/[\s,\(]\S/,En={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Bl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ax=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Px=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Gu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Wu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Rx=function(t,e,n){return t.style[e]=n},Lx=function(t,e,n){return t.style.setProperty(e,n)},Ix=function(t,e,n){return t._gsap[e]=n},Dx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ox=function(t,e,n,i,s){var r=t._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},Ux=function(t,e,n,i,s){var r=t._gsap;r[e]=n,r.renderTransform(s,r)},jt="transform",xn=jt+"Origin",Nx=function o(t,e){var n=this,i=this.target,s=i.style;if(t in Xn){if(this.tfm=this.tfm||{},t!=="transform")t=En[t]||t,~t.indexOf(",")?t.split(",").forEach(function(r){return n.tfm[r]=Wn(i,r)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Wn(i,t);else return En.transform.split(",").forEach(function(r){return o.call(n,r,e)});if(this.props.indexOf(jt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(xn,e,"")),t=jt}(s||e)&&this.props.push(t,e,s[t])},Xu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},zx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,r;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(ql,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Xl(),(!s||!s.isStart)&&!n[jt]&&(Xu(n),i.uncache=1)}},qu=function(t,e){var n={target:t,props:[],revert:zx,save:Nx};return t._gsap||Ae.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Yu,Vl=function(t,e){var n=oi.createElementNS?oi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):oi.createElement(t);return n.style?n:oi.createElement(t)},An=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ql,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,Ls(e)||e,1)||""},zu="O,Moz,ms,Ms,Webkit".split(","),Ls=function(t,e,n){var i=e||Bi,s=i.style,r=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);r--&&!(zu[r]+t in s););return r<0?null:(r===3?"ms":r>=0?zu[r]:"")+t},Hl=function(){wx()&&window.document&&(Ou=window,oi=Ou.document,Ps=oi.documentElement,Bi=Vl("div")||{style:{}},Sx=Vl("div"),jt=Ls(jt),xn=jt+"Origin",Bi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Yu=!!Ls("perspective"),Xl=Ae.core.reverting,Wl=1)},Fl=function o(t){var e=Vl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(Ps.appendChild(e),e.appendChild(this),this.style.display="block",t)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ps.removeChild(e),this.style.cssText=s,r},Fu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Zu=function(t){var e;try{e=t.getBBox()}catch{e=Fl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Fl||(e=Fl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Fu(t,["x","cx","x1"])||0,y:+Fu(t,["y","cy","y1"])||0,width:0,height:0}:e},Ju=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Zu(t))},hr=function(t,e){if(e){var n=t.style;e in Xn&&e!==xn&&(e=jt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(ql,"-$1").toLowerCase())):n.removeAttribute(e)}},li=function(t,e,n,i,s,r){var a=new Oe(t._pt,e,n,0,1,r?Wu:Gu);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},ku={deg:1,rad:1,turn:1},Fx={grid:1,flex:1},ci=function o(t,e,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",a=Bi.style,c=Tx.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=i==="px",p=i==="%",_,g,m,d;return i===r||!s||ku[i]||ku[r]?s:(r!=="px"&&!f&&(s=o(t,e,n,"px")),d=t.getCTM&&Ju(t),(p||r==="%")&&(Xn[e]||~e.indexOf("adius"))?(_=d?t.getBBox()[c?"width":"height"]:t[h],ee(p?s/_*u:s/100*_)):(a[c?"width":"height"]=u+(f?r:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,d&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===oi||!g.appendChild)&&(g=oi.body),m=g._gsap,m&&p&&m.width&&c&&m.time===Fe.time&&!m.uncache?ee(s/m.width*u):((p||r==="%")&&!Fx[An(g,"display")]&&(a.position=An(t,"position")),g===t&&(a.position="static"),g.appendChild(Bi),_=Bi[h],g.removeChild(Bi),a.position="absolute",c&&p&&(m=si(g),m.time=Fe.time,m.width=g[h]),ee(f?_*s/u:_&&s?u/_*s:0))))},Wn=function(t,e,n,i){var s;return Wl||Hl(),e in En&&e!=="transform"&&(e=En[e],~e.indexOf(",")&&(e=e.split(",")[0])),Xn[e]&&e!=="transform"?(s=fr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:wa(An(t,xn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Sa[e]&&Sa[e](t,e,n)||An(t,e)||Cl(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ci(t,e,s,n)+n:s},kx=function(t,e,n,i){if(!n||n==="none"){var s=Ls(e,t,1),r=s&&An(t,s,1);r&&r!==n?(e=s,n=r):e==="borderColor"&&(n=An(t,"borderTopColor"))}var a=new Oe(this._pt,t.style,e,0,1,Ul),c=0,l=0,h,u,f,p,_,g,m,d,M,v,b,y;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=An(t,e)||i,t.style[e]=n),h=[n,i],Pl(h),n=h[0],i=h[1],f=n.match(Oi)||[],y=i.match(Oi)||[],y.length){for(;u=Oi.exec(i);)m=u[0],M=i.substring(c,u.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=f[l++]||"")&&(p=parseFloat(g)||0,b=g.substr((p+"").length),m.charAt(1)==="="&&(m=Ui(p,m)+b),d=parseFloat(m),v=m.substr((d+"").length),c=Oi.lastIndex-v.length,v||(v=v||Be.units[e]||b,c===i.length&&(i+=v,a.e+=v)),b!==v&&(p=ci(t,e,g,v)||0),a._pt={_next:a._pt,p:M||l===1?M:",",s:p,c:d-p,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?Wu:Gu;return Sl.test(i)&&(a.e=0),this._pt=a,a},Bu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Bx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Bu[n]||n,e[1]=Bu[i]||i,e.join(" ")},Vx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,r=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],Xn[a]&&(c=1,a=a==="transformOrigin"?xn:jt),hr(n,a);c&&(hr(n,jt),r&&(r.svg&&n.removeAttribute("transform"),fr(n,1),r.uncache=1,Xu(i)))}},Sa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var r=t._pt=new Oe(t._pt,e,n,0,0,Vx);return r.u=i,r.pr=-10,r.tween=s,t._props.push(n),1}}},ur=[1,0,0,1,0,0],$u={},Ku=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Vu=function(t){var e=An(t,jt);return Ku(e)?ur:e.substr(7).match(bl).map(ee)},Yl=function(t,e){var n=t._gsap||si(t),i=t.style,s=Vu(t),r,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?ur:s):(s===ur&&!t.offsetParent&&t!==Ps&&!n.svg&&(c=i.display,i.display="block",r=t.parentNode,(!r||!t.offsetParent)&&(l=1,a=t.nextElementSibling,Ps.appendChild(t)),s=Vu(t),c?i.display=c:hr(t,"display"),l&&(a?r.insertBefore(t,a):r?r.appendChild(t):Ps.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Gl=function(t,e,n,i,s,r){var a=t._gsap,c=s||Yl(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,p=c[0],_=c[1],g=c[2],m=c[3],d=c[4],M=c[5],v=e.split(" "),b=parseFloat(v[0])||0,y=parseFloat(v[1])||0,A,P,C,x;n?c!==ur&&(P=p*m-_*g)&&(C=b*(m/P)+y*(-g/P)+(g*M-m*d)/P,x=b*(-_/P)+y*(p/P)-(p*M-_*d)/P,b=C,y=x):(A=Zu(t),b=A.x+(~v[0].indexOf("%")?b/100*A.width:b),y=A.y+(~(v[1]||v[0]).indexOf("%")?y/100*A.height:y)),i||i!==!1&&a.smooth?(d=b-l,M=y-h,a.xOffset=u+(d*p+M*g)-d,a.yOffset=f+(d*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=y,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[xn]="0px 0px",r&&(li(r,a,"xOrigin",l,b),li(r,a,"yOrigin",h,y),li(r,a,"xOffset",u,a.xOffset),li(r,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",b+" "+y)},fr=function(t,e){var n=t._gsap||new Rl(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,r="px",a="deg",c=getComputedStyle(t),l=An(t,xn)||"0",h,u,f,p,_,g,m,d,M,v,b,y,A,P,C,x,T,F,V,I,O,N,Y,Z,H,Q,tt,rt,lt,G,K,st;return h=u=f=g=m=d=M=v=b=0,p=_=1,n.svg=!!(t.getCTM&&Ju(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[jt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[jt]!=="none"?c[jt]:"")),i.scale=i.rotate=i.translate="none"),P=Yl(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),l=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),Gl(t,Z||l,!!Z||n.originIsAbsolute,n.smooth!==!1,P)),y=n.xOrigin||0,A=n.yOrigin||0,P!==ur&&(F=P[0],V=P[1],I=P[2],O=P[3],h=N=P[4],u=Y=P[5],P.length===6?(p=Math.sqrt(F*F+V*V),_=Math.sqrt(O*O+I*I),g=F||V?Cs(V,F)*ki:0,M=I||O?Cs(I,O)*ki+g:0,M&&(_*=Math.abs(Math.cos(M*Rs))),n.svg&&(h-=y-(y*F+A*I),u-=A-(y*V+A*O))):(st=P[6],G=P[7],tt=P[8],rt=P[9],lt=P[10],K=P[11],h=P[12],u=P[13],f=P[14],C=Cs(st,lt),m=C*ki,C&&(x=Math.cos(-C),T=Math.sin(-C),Z=N*x+tt*T,H=Y*x+rt*T,Q=st*x+lt*T,tt=N*-T+tt*x,rt=Y*-T+rt*x,lt=st*-T+lt*x,K=G*-T+K*x,N=Z,Y=H,st=Q),C=Cs(-I,lt),d=C*ki,C&&(x=Math.cos(-C),T=Math.sin(-C),Z=F*x-tt*T,H=V*x-rt*T,Q=I*x-lt*T,K=O*T+K*x,F=Z,V=H,I=Q),C=Cs(V,F),g=C*ki,C&&(x=Math.cos(C),T=Math.sin(C),Z=F*x+V*T,H=N*x+Y*T,V=V*x-F*T,Y=Y*x-N*T,F=Z,N=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),p=ee(Math.sqrt(F*F+V*V+I*I)),_=ee(Math.sqrt(Y*Y+st*st)),C=Cs(N,Y),M=Math.abs(C)>2e-4?C*ki:0,b=K?1/(K<0?-K:K):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Ku(An(t,jt)),Z&&t.setAttribute("transform",Z))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(p*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+r,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+r,n.z=f+r,n.scaleX=ee(p),n.scaleY=ee(_),n.rotation=ee(g)+a,n.rotationX=ee(m)+a,n.rotationY=ee(d)+a,n.skewX=M+a,n.skewY=v+a,n.transformPerspective=b+r,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[xn]=wa(l)),n.xOffset=n.yOffset=0,n.force3D=Be.force3D,n.renderTransform=n.svg?Gx:Yu?ju:Hx,n.uncache=0,n},wa=function(t){return(t=t.split(" "))[0]+" "+t[1]},kl=function(t,e,n){var i=_e(e);return ee(parseFloat(e)+parseFloat(ci(t,"x",n+"px",i)))+i},Hx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ju(t,e)},zi="0deg",cr="0px",Fi=") ",ju=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,d=n.force3D,M=n.target,v=n.zOrigin,b="",y=d==="auto"&&t&&t!==1||d===!0;if(v&&(u!==zi||h!==zi)){var A=parseFloat(h)*Rs,P=Math.sin(A),C=Math.cos(A),x;A=parseFloat(u)*Rs,x=Math.cos(A),r=kl(M,r,P*x*-v),a=kl(M,a,-Math.sin(A)*-v),c=kl(M,c,C*x*-v+v)}m!==cr&&(b+="perspective("+m+Fi),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(y||r!==cr||a!==cr||c!==cr)&&(b+=c!==cr||y?"translate3d("+r+", "+a+", "+c+") ":"translate("+r+", "+a+Fi),l!==zi&&(b+="rotate("+l+Fi),h!==zi&&(b+="rotateY("+h+Fi),u!==zi&&(b+="rotateX("+u+Fi),(f!==zi||p!==zi)&&(b+="skew("+f+", "+p+Fi),(_!==1||g!==1)&&(b+="scale("+_+", "+g+Fi),M.style[jt]=b||"translate(0, 0)"},Gx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,d=n.yOffset,M=n.forceCSS,v=parseFloat(r),b=parseFloat(a),y,A,P,C,x;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Rs,l*=Rs,y=Math.cos(c)*u,A=Math.sin(c)*u,P=Math.sin(c-l)*-f,C=Math.cos(c-l)*f,l&&(h*=Rs,x=Math.tan(l-h),x=Math.sqrt(1+x*x),P*=x,C*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),y*=x,A*=x)),y=ee(y),A=ee(A),P=ee(P),C=ee(C)):(y=u,C=f,A=P=0),(v&&!~(r+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(v=ci(p,"x",r,"px"),b=ci(p,"y",a,"px")),(_||g||m||d)&&(v=ee(v+_-(_*y+g*P)+m),b=ee(b+g-(_*A+g*C)+d)),(i||s)&&(x=p.getBBox(),v=ee(v+i/100*x.width),b=ee(b+s/100*x.height)),x="matrix("+y+","+A+","+P+","+C+","+v+","+b+")",p.setAttribute("transform",x),M&&(p.style[jt]=x)},Wx=function(t,e,n,i,s){var r=360,a=fe(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?ki:1),l=c-i,h=i+l+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(l%=r,l!==l%(r/2)&&(l+=l<0?r:-r)),u==="cw"&&l<0?l=(l+r*Nu)%r-~~(l/r)*r:u==="ccw"&&l>0&&(l=(l-r*Nu)%r-~~(l/r)*r)),t._pt=f=new Oe(t._pt,e,n,i,l,Ax),f.e=h,f.u="deg",t._props.push(n),f},Hu=function(t,e){for(var n in e)t[n]=e[n];return t},Xx=function(t,e,n){var i=Hu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,a,c,l,h,u,f,p,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),r[jt]=e,a=fr(n,1),hr(n,jt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[jt],r[jt]=e,a=fr(n,1),r[jt]=l);for(c in Xn)l=i[c],h=a[c],l!==h&&s.indexOf(c)<0&&(p=_e(l),_=_e(h),u=p!==_?ci(n,c,l,_):parseFloat(l),f=parseFloat(h),t._pt=new Oe(t._pt,a,c,u,f-u,Bl),t._pt.u=_||0,t._props.push(c));Hu(a,i)};De("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",s="Left",r=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?o+a:"border"+a+o});Sa[t>1?"border"+o:o]=function(a,c,l,h,u){var f,p;if(arguments.length<4)return f=r.map(function(_){return Wn(a,_,l)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},r.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(c,p,u)}});var Zl={name:"css",register:Hl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var r=this._props,a=t.style,c=n.vars.startAt,l,h,u,f,p,_,g,m,d,M,v,b,y,A,P,C;Wl||Hl(),this.styles=this.styles||qu(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(ze[g]&&Il(g,e,n,i,t,s)))){if(p=typeof h,_=Sa[g],p==="function"&&(h=h.call(n,i,t,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=As(h)),_)_(this,t,g,h,n)&&(P=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Hn.lastIndex=0,Hn.test(l)||(m=_e(l),d=_e(h)),d?m!==d&&(l=ci(t,g,l,d)+d):m&&(h+=m),this.add(a,"setProperty",l,h,i,s,0,0,g),r.push(g),C.push(g,0,a[g]);else if(p!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,t,s):c[g],fe(l)&&~l.indexOf("random(")&&(l=As(l)),_e(l+"")||(l+=Be.units[g]||_e(Wn(t,g))||""),(l+"").charAt(1)==="="&&(l=Wn(t,g))):l=Wn(t,g),f=parseFloat(l),M=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),g in En&&(g==="autoAlpha"&&(f===1&&Wn(t,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,a.visibility),li(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=En[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Xn,v){if(this.styles.save(g),b||(y=t._gsap,y.renderTransform&&!e.parseTransform||fr(t,e.parseTransform),A=e.smoothOrigin!==!1&&y.smooth,b=this._pt=new Oe(this._pt,a,jt,0,1,y.renderTransform,y,0,-1),b.dep=1),g==="scale")this._pt=new Oe(this._pt,y,"scaleY",y.scaleY,(M?Ui(y.scaleY,M+u):u)-y.scaleY||0,Bl),this._pt.u=0,r.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(xn,0,a[xn]),h=Bx(h),y.svg?Gl(t,h,0,A,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==y.zOrigin&&li(this,y,"zOrigin",y.zOrigin,d),li(this,a,g,wa(l),wa(h)));continue}else if(g==="svgOrigin"){Gl(t,h,1,A,0,this);continue}else if(g in $u){Wx(this,y,g,f,M?Ui(f,M+h):h);continue}else if(g==="smoothOrigin"){li(this,y,"smooth",y.smooth,h);continue}else if(g==="force3D"){y[g]=h;continue}else if(g==="transform"){Xx(this,h,t);continue}}else g in a||(g=Ls(g)||g);if(v||(u||u===0)&&(f||f===0)&&!Ex.test(h)&&g in a)m=(l+"").substr((f+"").length),u||(u=0),d=_e(h)||(g in Be.units?Be.units[g]:m),m!==d&&(f=ci(t,g,l,d)),this._pt=new Oe(this._pt,v?y:a,g,f,(M?Ui(f,M+u):u)-f,!v&&(d==="px"||g==="zIndex")&&e.autoRound!==!1?Px:Bl),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=l,this._pt.r=Cx);else if(g in a)kx.call(this,t,g,l,M?M+h:h);else if(g in t)this.add(t,g,l||t[g],M?M+h:h,i,s);else if(g!=="parseTransform"){xa(g,h);continue}v||(g in a?C.push(g,0,a[g]):C.push(g,1,l||t[g])),r.push(g)}}P&&zl(this)},render:function(t,e){if(e.tween._time||!Xl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Wn,aliases:En,getSetter:function(t,e,n){var i=En[e];return i&&i.indexOf(",")<0&&(e=i),e in Xn&&e!==xn&&(t._gsap.x||Wn(t,"x"))?n&&Uu===n?e==="scale"?Dx:Ix:(Uu=n||{})&&(e==="scale"?Ox:Ux):t.style&&!_a(t.style[e])?Rx:~e.indexOf("-")?Lx:ba(t,e)},core:{_removeProperty:hr,_getMatrix:Yl}};Ae.utils.checkPrefix=Ls;Ae.core.getStyleSaver=qu;(function(o,t,e,n){var i=De(o+","+t+","+e,function(s){Xn[s]=1});De(t,function(s){Be.units[s]="deg",$u[s]=1}),En[i[13]]=o+","+t,De(n,function(s){var r=s.split(":");En[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");De("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Be.units[o]="px"});Ae.registerPlugin(Zl);var hi=Ae.registerPlugin(Zl)||Ae,gv=hi.core.Tween;var dr=function(){var o=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(h){h.preventDefault(),n(++o%t.children.length)},!1);function e(h){return t.appendChild(h.dom),h}function n(h){for(var u=0;u<t.children.length;u++)t.children[u].style.display=u===h?"block":"none";o=h}var i=(performance||Date).now(),s=i,r=0,a=e(new dr.Panel("FPS","#0ff","#002")),c=e(new dr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new dr.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){r++;var h=(performance||Date).now();if(c.update(h-i,200),h>=s+1e3&&(a.update(r*1e3/(h-s),100),s=h,r=0,l)){var u=performance.memory;l.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){i=this.end()},domElement:t,setMode:n}};dr.Panel=function(o,t,e){var n=1/0,i=0,s=Math.round,r=s(window.devicePixelRatio||1),a=80*r,c=48*r,l=3*r,h=2*r,u=3*r,f=15*r,p=74*r,_=30*r,g=document.createElement("canvas");g.width=a,g.height=c,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*r+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=e,m.fillRect(0,0,a,c),m.fillStyle=t,m.fillText(o,l,h),m.fillRect(u,f,p,_),m.fillStyle=e,m.globalAlpha=.9,m.fillRect(u,f,p,_),{dom:g,update:function(d,M){n=Math.min(n,d),i=Math.max(i,d),m.fillStyle=e,m.globalAlpha=1,m.fillRect(0,0,a,f),m.fillStyle=t,m.fillText(s(d)+" "+o+" ("+s(n)+"-"+s(i)+")",l,h),m.drawImage(g,u+r,f,p-r,_,u,f,p-r,_),m.fillRect(u+p-r,f,r,_),m.fillStyle=e,m.globalAlpha=.9,m.fillRect(u+p-r,f,r,s((1-d/M)*_))}}};var Qu=dr;var ef=xf(tf()),Cn=[],qn,$l,Hi,Is,Kl,ui,Vi,nf,Ds,Ue,on,jl=new Et;var sf=new Map,Ta=!1;function qx(){Ds.load("font-coordinates-v4u.json",function(o){let t=JSON.parse(o),e=Object.keys(t);for(let s=0;s<Math.min(e.length,Cn.length);s++){var[n,i]=t[e[s]];hi.to(Cn[s].position,{duration:1.5,ease:"expo.out",x:(n-14)*17,y:(i-7)*14,z:s%5*.5})}})}function rf(){Ds.load("font-coordinates-v4t.json",function(o){let t=JSON.parse(o),e=Object.keys(t);for(let s=0;s<Math.min(e.length,Cn.length);s++){var[n,i]=t[e[s]];hi.to(Cn[s].position,{duration:1.5,ease:"expo.out",x:n*1.6,y:i*2,z:s%5*.5})}})}function Yx(){Ds.load("font-coordinates-v4lu.json",function(o){let t=JSON.parse(o),e=Object.keys(t);for(let s=0;s<Math.min(e.length,Cn.length);s++){var[n,i]=t[e[s]];hi.to(Cn[s].position,{duration:1.5,ease:"expo.out",x:(n-.5)*200,y:(i-.5)*80,z:0})}})}function Zx(){Ds.load("font-coordinates-v4lt.json",function(o){let t=JSON.parse(o),e=Object.keys(t);for(let s=0;s<Math.min(e.length,Cn.length);s++){var[n,i]=t[e[s]];hi.to(Cn[s].position,{duration:1.5,ease:"expo.out",x:(n-.5)*200,y:(i-.5)*80,z:0})}})}$(document).ready(function(){$(".view-selector__option").click(function(){if($(this).hasClass("selected"))return;switch($(".view-selector__option").removeClass("selected"),$(this).addClass("selected"),$(this).data("value")){case"umap":qx();break;case"umap-grid":Yx();break;case"tsne":rf();break;case"tsne-grid":Zx();break;default:break}})});Jx();af();function Jx(){qn=document.getElementById("three"),document.body.appendChild(qn),qn.classList.add("three__move"),Hi=new be(70,window.innerWidth/window.innerHeight,1,1e4),Hi.position.z=75,Is=new Jr,Is.background=new zt(16185077);let o=new ea(16777215,1,0);Is.add(o),ui=new $s,ui.setPixelRatio(window.devicePixelRatio),ui.setSize(window.innerWidth,window.innerHeight),qn.appendChild(ui.domElement),Vi=new aa(Hi,ui.domElement),Vi.enableRotate=!1,Vi.enableDamping=!1,Vi.mouseButtons={LEFT:_n.PAN,MIDDLE:_n.ZOOM,RIGHT:_n.ROTATE},Vi.zoomSpeed=2,Vi.update(),Kl=new na,nf=new ta,Ds=new Qr,Kx(),Ta&&($l=new Qu,qn.appendChild($l.dom)),document.addEventListener("mousemove",nv),document.addEventListener("dblclick",iv),window.addEventListener("resize",ev)}function af(){requestAnimationFrame(af),$x(),Ta&&$l.update()}function $x(){Kl.setFromCamera(jl,Hi);let o=Kl.intersectObjects(Cn,!1);o.length>0?Ue!=o[0].object&&(Ue&&Ue.material.emissive.setHex(Ue.currentHex),qn.classList.remove("three__move"),qn.classList.add("three__intersected"),Ue=o[0].object,Ue.currentHex=Ue.material.emissive.getHex(),Ue.material.emissive.setHex(10066329)):(Ue&&Ue.material.emissive.setHex(Ue.currentHex),qn.classList.remove("three__intersected"),qn.classList.add("three__move"),Ue=null),ui.render(Is,Hi)}function Kx(){tv(),Ta&&(jx(),Qx())}async function jx(){let o="x".charCodeAt(0);console.log(o);var e=await(await fetch(`./fonts/${o.toString().padStart(4,"0")}.bin.gz`)).arrayBuffer();let n=await pako.ungzip(e),i=new Character(new DataArray(n),o);console.log(i)}function Qx(){let e=new ia(500,50,5940748,11529075);e.rotation.x=Math.PI/2,Is.add(e)}function tv(){Ds.load("font-coordinates-v4t.json",function(o){let t=JSON.parse(o),e=Object.keys(t);Ta&&console.log(e);for(let r=0;r<e.length;r++){var n=new Kr({map:nf.load("previews/"+e[r]+".png")}),i=new Ai(5,5*.356);n.transparent=!0;var s=new je(i,n);Is.add(s),Cn.push(s),sf.set(s.uuid,e[r])}rf()})}function ev(){Hi.aspect=window.innerWidth/window.innerHeight,Hi.updateProjectionMatrix(),ui.setSize(window.innerWidth,window.innerHeight),Vi.update()}function nv(o){let t=ui.domElement.getBoundingClientRect();jl.x=(o.clientX-t.left)/(t.width-t.left)*2-1,jl.y=-((o.clientY-t.top)/(t.bottom-t.top))*2+1}function iv(o){if(on!=Ue)if(on&&(on.material.transparent=!0,hi.to(on.position,{duration:.5,ease:"expo.out",z:on.previous_z}),on=null),Ue){on=Ue;let t=sf.get(on.uuid);on.material.transparent=!1,on.previous_z=on.position.z,hi.to(on.position,{duration:.5,ease:"expo.out",z:4}),sv(t,function(){$("#info-container").show()})}else $("#info-container").hide()}function sv(o,t){let e=o.split(" "),n=e.pop(),i=e.join(" "),s={400:"Normal",700:"Bold"},r=document.createElement("link");r.rel="stylesheet",r.href=`https://fonts.googleapis.com/css?family=${i.replace(" ","+")}:${n}`,document.head.appendChild(r);let a=new ef.default(i);return console.log(`trying to load ${o}...`),a.load(n).then(function(){console.log(`loaded ${o}`);let c=$("<a>").attr("href",`https://fonts.google.com/specimen/${i.replace(" ","+")}`).attr("target","_blank").html(i);$("#info h2").html(c),$(".font-info .style").text(`${s[n]} ${n}`),$(".font-sample-sentence, .font-sample-alphabet, .font-custom-input").css("font-family",i).css("font-weight",n),t&&t()})}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.11.5
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.11.5
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
