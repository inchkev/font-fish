(()=>{var df=Object.create;var rc=Object.defineProperty;var pf=Object.getOwnPropertyDescriptor;var mf=Object.getOwnPropertyNames;var gf=Object.getPrototypeOf,_f=Object.prototype.hasOwnProperty;var xf=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var vf=(o,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of mf(t))!_f.call(o,i)&&i!==e&&rc(o,i,{get:()=>t[i],enumerable:!(n=pf(t,i))||n.enumerable});return o};var yf=(o,t,e)=>(e=o!=null?df(gf(o)):{},vf(t||!o||!o.__esModule?rc(e,"default",{value:o,enumerable:!0}):e,o));var nf=xf((Dv,Kl)=>{(function(){function o(_,g){document.addEventListener?_.addEventListener("scroll",g,!1):_.attachEvent("scroll",g)}function t(_){document.body?_():document.addEventListener?document.addEventListener("DOMContentLoaded",function g(){document.removeEventListener("DOMContentLoaded",g),_()}):document.attachEvent("onreadystatechange",function g(){(document.readyState=="interactive"||document.readyState=="complete")&&(document.detachEvent("onreadystatechange",g),_())})}function e(_){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(_)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function n(_,g){_.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+g+";"}function i(_){var g=_.g.offsetWidth,m=g+100;return _.j.style.width=m+"px",_.i.scrollLeft=m,_.h.scrollLeft=_.h.scrollWidth+100,_.l!==g?(_.l=g,!0):!1}function s(_,g){function m(){var M=d;i(M)&&M.g.parentNode!==null&&g(M.l)}var d=_;o(_.h,m),o(_.i,m),i(_)}function r(_,g,m){g=g||{},m=m||window,this.family=_,this.style=g.style||"normal",this.weight=g.weight||"normal",this.stretch=g.stretch||"normal",this.context=m}var a=null,c=null,l=null,h=null;function u(_){return c===null&&(f(_)&&/Apple/.test(window.navigator.vendor)?(_=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!_&&603>parseInt(_[1],10)):c=!1),c}function f(_){return h===null&&(h=!!_.document.fonts),h}function p(_,g){var m=_.style,d=_.weight;if(l===null){var M=document.createElement("div");try{M.style.font="condensed 100px sans-serif"}catch{}l=M.style.font!==""}return[m,d,l?_.stretch:"","100px",g].join(" ")}r.prototype.load=function(_,g){var m=this,d=_||"BESbswy",M=0,x=g||3e3,b=new Date().getTime();return new Promise(function(y,A){if(f(m.context)&&!u(m.context)){var R=new Promise(function(v,T){function z(){new Date().getTime()-b>=x?T(Error(""+x+"ms timeout exceeded")):m.context.document.fonts.load(p(m,'"'+m.family+'"'),d).then(function(k){1<=k.length?v():setTimeout(z,25)},T)}z()}),P=new Promise(function(v,T){M=setTimeout(function(){T(Error(""+x+"ms timeout exceeded"))},x)});Promise.race([P,R]).then(function(){clearTimeout(M),y(m)},A)}else t(function(){function v(){var rt;(rt=O!=-1&&N!=-1||O!=-1&&Z!=-1||N!=-1&&Z!=-1)&&((rt=O!=N&&O!=Z&&N!=Z)||(a===null&&(rt=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),a=!!rt&&(536>parseInt(rt[1],10)||parseInt(rt[1],10)===536&&11>=parseInt(rt[2],10))),rt=a&&(O==X&&N==X&&Z==X||O==B&&N==B&&Z==B||O==j&&N==j&&Z==j)),rt=!rt),rt&&(K.parentNode!==null&&K.parentNode.removeChild(K),clearTimeout(M),y(m))}function T(){if(new Date().getTime()-b>=x)K.parentNode!==null&&K.parentNode.removeChild(K),A(Error(""+x+"ms timeout exceeded"));else{var rt=m.context.document.hidden;(rt===!0||rt===void 0)&&(O=z.g.offsetWidth,N=k.g.offsetWidth,Z=I.g.offsetWidth,v()),M=setTimeout(T,50)}}var z=new e(d),k=new e(d),I=new e(d),O=-1,N=-1,Z=-1,X=-1,B=-1,j=-1,K=document.createElement("div");K.dir="ltr",n(z,p(m,"sans-serif")),n(k,p(m,"serif")),n(I,p(m,"monospace")),K.appendChild(z.g),K.appendChild(k.g),K.appendChild(I.g),m.context.document.body.appendChild(K),X=z.g.offsetWidth,B=k.g.offsetWidth,j=I.g.offsetWidth,T(),s(z,function(rt){O=rt,v()}),n(z,p(m,'"'+m.family+'",sans-serif')),s(k,function(rt){N=rt,v()}),n(k,p(m,'"'+m.family+'",serif')),s(I,function(rt){Z=rt,v()}),n(I,p(m,'"'+m.family+'",monospace'))})})},typeof Kl=="object"?Kl.exports=r:(window.FontFaceObserver=r,window.FontFaceObserver.prototype.load=r.prototype.load)})()});var Jo="151",ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2};var Mf=0,ac=1,bf=2;var Ih=1,Sf=2,ks=3,Kn=0,ze=1,Nn=2;var jn=0,rs=1,oc=2,lc=3,cc=4,wf=5,ns=100,Tf=101,Ef=102,hc=103,uc=104,Af=200,Cf=201,Pf=202,Rf=203,Dh=204,Oh=205,Lf=206,If=207,Df=208,Of=209,Uf=210,Nf=0,zf=1,Ff=2,lo=3,kf=4,Bf=5,Vf=6,Hf=7,$o=0,Gf=1,Wf=2,zn=0,Xf=1,qf=2,Yf=3,Zf=4,Jf=5,Uh=300,cs=301,hs=302,co=303,ho=304,sa=306,uo=1e3,fn=1001,fo=1002,Re=1003,fc=1004;var La=1005;var je=1006,$f=1007;var Xs=1008;var Si=1009,jf=1010,Kf=1011,Nh=1012,Qf=1013,yi=1014,Mi=1015,qs=1016,td=1017,ed=1018,as=1020,nd=1021,dn=1023,id=1024,sd=1025,bi=1026,us=1027,rd=1028,ad=1029,od=1030,ld=1031,cd=1033,Ia=33776,Da=33777,Oa=33778,Ua=33779,dc=35840,pc=35841,mc=35842,gc=35843,hd=36196,_c=37492,xc=37496,vc=37808,yc=37809,Mc=37810,bc=37811,Sc=37812,wc=37813,Tc=37814,Ec=37815,Ac=37816,Cc=37817,Pc=37818,Rc=37819,Lc=37820,Ic=37821,Na=36492,ud=36283,Dc=36284,Oc=36285,Uc=36286;var Fr=2300,kr=2301,za=2302,Nc=2400,zc=2401,Fc=2402;var wi=3e3,qt=3001,fd=3200,dd=3201,zh=0,pd=1;var vn="srgb",Ys="srgb-linear",Fh="display-p3";var Fa=7680;var md=519,kc=35044;var Bc="300 es",po=1035,Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}},ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vc=1234567,Hs=Math.PI/180,Zs=180/Math.PI;function gs(){let o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[o&255]+ve[o>>8&255]+ve[o>>16&255]+ve[o>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function Le(o,t,e){return Math.max(t,Math.min(e,o))}function jo(o,t){return(o%t+t)%t}function gd(o,t,e,n,i){return n+(o-t)*(i-n)/(e-t)}function _d(o,t,e){return o!==t?(e-o)/(t-o):0}function Gs(o,t,e){return(1-e)*o+e*t}function xd(o,t,e,n){return Gs(o,t,1-Math.exp(-e*n))}function vd(o,t=1){return t-Math.abs(jo(o,t*2)-t)}function yd(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*(3-2*o))}function Md(o,t,e){return o<=t?0:o>=e?1:(o=(o-t)/(e-t),o*o*o*(o*(o*6-15)+10))}function bd(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Sd(o,t){return o+Math.random()*(t-o)}function wd(o){return o*(.5-Math.random())}function Td(o){o!==void 0&&(Vc=o);let t=Vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ed(o){return o*Hs}function Ad(o){return o*Zs}function mo(o){return(o&o-1)===0&&o!==0}function Cd(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function kh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Pd(o,t,e,n,i){let s=Math.cos,r=Math.sin,a=s(e/2),c=r(e/2),l=s((t+n)/2),h=r((t+n)/2),u=s((t-n)/2),f=r((t-n)/2),p=s((n-t)/2),_=r((n-t)/2);switch(i){case"XYX":o.set(a*h,c*u,c*f,a*l);break;case"YZY":o.set(c*f,a*h,c*u,a*l);break;case"ZXZ":o.set(c*u,c*f,a*h,a*l);break;case"XZX":o.set(a*h,c*_,c*p,a*l);break;case"YXY":o.set(c*p,a*h,c*_,a*l);break;case"ZYZ":o.set(c*_,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bs(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ne(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Ko={DEG2RAD:Hs,RAD2DEG:Zs,generateUUID:gs,clamp:Le,euclideanModulo:jo,mapLinear:gd,inverseLerp:_d,lerp:Gs,damp:xd,pingpong:vd,smoothstep:yd,smootherstep:Md,randInt:bd,randFloat:Sd,randFloatSpread:wd,seededRandom:Td,degToRad:Ed,radToDeg:Ad,isPowerOfTwo:mo,ceilPowerOfTwo:Cd,floorPowerOfTwo:kh,setQuaternionFromProperEuler:Pd,normalize:Ne,denormalize:Bs},Tt=class{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},It=class{constructor(){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],_=n[8],g=i[0],m=i[3],d=i[6],M=i[1],x=i[4],b=i[7],y=i[2],A=i[5],R=i[8];return s[0]=r*g+a*M+c*y,s[3]=r*m+a*x+c*A,s[6]=r*d+a*b+c*R,s[1]=l*g+h*M+u*y,s[4]=l*m+h*x+u*A,s[7]=l*d+h*b+u*R,s[2]=f*g+p*M+_*y,s[5]=f*m+p*x+_*A,s[8]=f*d+p*b+_*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*s*h+n*a*c+i*s*l-i*r*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,f=a*c-h*s,p=l*s-r*c,_=e*u+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*l-h*n)*g,t[2]=(a*n-i*r)*g,t[3]=f*g,t[4]=(h*e-i*c)*g,t[5]=(i*s-a*e)*g,t[6]=p*g,t[7]=(n*c-l*e)*g,t[8]=(r*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ka.makeScale(t,e)),this}rotate(t){return this.premultiply(ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(ka.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ka=new It;function Bh(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Js(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function os(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ba(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}var Rd=new It().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ld=new It().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Id(o){return o.convertSRGBToLinear().applyMatrix3(Ld)}function Dd(o){return o.applyMatrix3(Rd).convertLinearToSRGB()}var Od={[Ys]:o=>o,[vn]:o=>o.convertSRGBToLinear(),[Fh]:Id},Ud={[Ys]:o=>o,[vn]:o=>o.convertLinearToSRGB(),[Fh]:Dd},Ge={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Ys},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.enabled===!1||t===e||!t||!e)return o;let n=Od[t],i=Ud[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},Bi,Br=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=Js("canvas")),Bi.width=t.width,Bi.height=t.height;let n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Js("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=os(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(os(e[n]/255)*255):e[n]=os(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vr=class{constructor(t=null){this.isSource=!0,this.uuid=gs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(Va(i[r].image)):s.push(Va(i[r]))}else s=Va(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Va(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Br.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nd=0,be=class extends Mn{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=fn,i=fn,s=je,r=Xs,a=dn,c=Si,l=be.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=gs(),this.name="",this.source=new Vr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uo:t.x=t.x-Math.floor(t.x);break;case fn:t.x=t.x<0?0:1;break;case fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uo:t.y=t.y-Math.floor(t.y);break;case fn:t.y=t.y<0?0:1;break;case fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=Uh;be.DEFAULT_ANISOTROPY=1;var Wt=class{constructor(t=0,e=0,n=0,i=1){Wt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],_=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,b=(p+1)/2,y=(d+1)/2,A=(h+f)/4,R=(u+g)/4,P=(_+m)/4;return x>b&&x>y?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=R/n):b>y?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=A/i,s=P/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=R/s,i=P/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(u-g)/M,this.z=(f-h)/M,this.w=Math.acos((l+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fn=class extends Mn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Wt(0,0,t,e),this.scissorTest=!1,this.viewport=new Wt(0,0,t,e);let i={width:t,height:e,depth:1};this.texture=new be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:je,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Vr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hr=class extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var go=class extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[r+0],p=s[r+1],_=s[r+2],g=s[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==f||l!==p||h!==_){let m=1-a,d=c*f+l*p+h*_+u*g,M=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let y=Math.sqrt(x),A=Math.atan2(y,d*M);m=Math.sin(m*A)/y,a=Math.sin(a*A)/y}let b=a*M;if(c=c*m+f*b,l=l*m+p*b,h=h*m+_*b,u=u*m+g*b,m===1-a){let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r],f=s[r+1],p=s[r+2],_=s[r+3];return t[e]=a*_+h*u+c*p-l*f,t[e+1]=c*_+h*f+l*u-a*p,t[e+2]=l*_+h*p+a*f-c*u,t[e+3]=h*_-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){let n=t._x,i=t._y,s=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),f=c(n/2),p=c(i/2),_=c(s/2);switch(r){case"XYZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"YZX":this._x=f*h*u+l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u-f*p*_;break;case"XZY":this._x=f*h*u-l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(r-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(s-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(r-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-s*c,this._y=i*h+r*c+s*a-n*l,this._z=s*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,r=this._w,a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,a=t.z,c=t.w,l=c*e+r*i-a*n,h=c*n+a*e-s*i,u=c*i+s*n-r*e,f=-s*e-r*n-a*i;return this.x=l*c+f*-s+h*-a-u*-r,this.y=h*c+f*-r+u*-s-l*-a,this.z=u*c+f*-a+l*-r-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ha.copy(this).projectOnVector(t),this.sub(Ha)}reflect(t){return this.sub(Ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ha=new D,Hc=new bn,Ti=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Vi.copy(t.boundingBox),Vi.applyMatrix4(t.matrixWorld),this.union(Vi);else{let i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){let s=i.attributes.position;for(let r=0,a=s.count;r<a;r++)Pn.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(Pn)}else i.boundingBox===null&&i.computeBoundingBox(),Vi.copy(i.boundingBox),Vi.applyMatrix4(t.matrixWorld),this.union(Vi)}let n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),gr.subVectors(this.max,Os),Hi.subVectors(t.a,Os),Gi.subVectors(t.b,Os),Wi.subVectors(t.c,Os),qn.subVectors(Gi,Hi),Yn.subVectors(Wi,Gi),mi.subVectors(Hi,Wi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-mi.z,mi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,mi.z,0,-mi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-mi.y,mi.x,0];return!Ga(e,Hi,Gi,Wi,gr)||(e=[1,0,0,0,1,0,0,0,1],!Ga(e,Hi,Gi,Wi,gr))?!1:(_r.crossVectors(qn,Yn),e=[_r.x,_r.y,_r.z],Ga(e,Hi,Gi,Wi,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Cn=[new D,new D,new D,new D,new D,new D,new D,new D],Pn=new D,Vi=new Ti,Hi=new D,Gi=new D,Wi=new D,qn=new D,Yn=new D,mi=new D,Os=new D,gr=new D,_r=new D,gi=new D;function Ga(o,t,e,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){gi.fromArray(o,s);let a=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var zd=new Ti,Us=new D,Wa=new D,fs=class{constructor(t=new D,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);let e=Us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Us,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(Wa)),this.expandByPoint(Us.copy(t.center).sub(Wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rn=new D,Xa=new D,xr=new D,Zn=new D,qa=new D,vr=new D,Ya=new D,$s=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xa.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Xa);let s=t.distanceTo(e)*.5,r=-this.direction.dot(xr),a=Zn.dot(this.direction),c=-Zn.dot(xr),l=Zn.lengthSq(),h=Math.abs(1-r*r),u,f,p,_;if(h>0)if(u=r*c-a,f=r*a-c,_=s*h,u>=0)if(f>=-_)if(f<=_){let g=1/h;u*=g,f*=g,p=u*(u+r*f+2*a)+f*(r*u+f+2*c)+l}else f=s,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-r*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(u=Math.max(0,-(r*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l);else f=r>0?-s:s,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xa).addScaledVector(xr,f),p}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);let n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,i,s){qa.subVectors(e,t),vr.subVectors(n,t),Ya.crossVectors(qa,vr);let r=this.direction.dot(Ya),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Zn.subVectors(this.origin,t);let c=a*this.direction.dot(vr.crossVectors(Zn,vr));if(c<0)return null;let l=a*this.direction.dot(qa.cross(Zn));if(l<0||c+l>r)return null;let h=-a*Zn.dot(Ya);return h<0?null:this.at(h/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class{constructor(){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,a,c,l,h,u,f,p,_,g,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=r,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Xi.setFromMatrixColumn(t,0).length(),s=1/Xi.setFromMatrixColumn(t,1).length(),r=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=r*h,p=r*u,_=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+_*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=_+p*l,e[10]=r*c}else if(t.order==="YXZ"){let f=c*h,p=c*u,_=l*h,g=l*u;e[0]=f+g*a,e[4]=_*a-p,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-_,e[6]=g+f*a,e[10]=r*c}else if(t.order==="ZXY"){let f=c*h,p=c*u,_=l*h,g=l*u;e[0]=f-g*a,e[4]=-r*u,e[8]=_+p*a,e[1]=p+_*a,e[5]=r*h,e[9]=g-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){let f=r*h,p=r*u,_=a*h,g=a*u;e[0]=c*h,e[4]=_*l-p,e[8]=f*l+g,e[1]=c*u,e[5]=g*l+f,e[9]=p*l-_,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){let f=r*c,p=r*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-f*u,e[8]=_*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+_,e[10]=f-g*u}else if(t.order==="XZY"){let f=r*c,p=r*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+g,e[5]=r*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fd,t,kd)}lookAt(t,e,n){let i=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Jn.crossVectors(n,We),Jn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Jn.crossVectors(n,We)),Jn.normalize(),yr.crossVectors(We,Jn),i[0]=Jn.x,i[4]=yr.x,i[8]=We.x,i[1]=Jn.y,i[5]=yr.y,i[9]=We.y,i[2]=Jn.z,i[6]=yr.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],_=n[2],g=n[6],m=n[10],d=n[14],M=n[3],x=n[7],b=n[11],y=n[15],A=i[0],R=i[4],P=i[8],v=i[12],T=i[1],z=i[5],k=i[9],I=i[13],O=i[2],N=i[6],Z=i[10],X=i[14],B=i[3],j=i[7],K=i[11],rt=i[15];return s[0]=r*A+a*T+c*O+l*B,s[4]=r*R+a*z+c*N+l*j,s[8]=r*P+a*k+c*Z+l*K,s[12]=r*v+a*I+c*X+l*rt,s[1]=h*A+u*T+f*O+p*B,s[5]=h*R+u*z+f*N+p*j,s[9]=h*P+u*k+f*Z+p*K,s[13]=h*v+u*I+f*X+p*rt,s[2]=_*A+g*T+m*O+d*B,s[6]=_*R+g*z+m*N+d*j,s[10]=_*P+g*k+m*Z+d*K,s[14]=_*v+g*I+m*X+d*rt,s[3]=M*A+x*T+b*O+y*B,s[7]=M*R+x*z+b*N+y*j,s[11]=M*P+x*k+b*Z+y*K,s[15]=M*v+x*I+b*X+y*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],_=t[3],g=t[7],m=t[11],d=t[15];return _*(+s*c*u-i*l*u-s*a*f+n*l*f+i*a*p-n*c*p)+g*(+e*c*p-e*l*f+s*r*f-i*r*p+i*l*h-s*c*h)+m*(+e*l*u-e*a*p-s*r*u+n*r*p+s*a*h-n*l*h)+d*(-i*a*h-e*c*u+e*a*f+i*r*u-n*r*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],_=t[12],g=t[13],m=t[14],d=t[15],M=u*m*l-g*f*l+g*c*p-a*m*p-u*c*d+a*f*d,x=_*f*l-h*m*l-_*c*p+r*m*p+h*c*d-r*f*d,b=h*g*l-_*u*l+_*a*p-r*g*p-h*a*d+r*u*d,y=_*u*c-h*g*c-_*a*f+r*g*f+h*a*m-r*u*m,A=e*M+n*x+i*b+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=M*R,t[1]=(g*f*s-u*m*s-g*i*p+n*m*p+u*i*d-n*f*d)*R,t[2]=(a*m*s-g*c*s+g*i*l-n*m*l-a*i*d+n*c*d)*R,t[3]=(u*c*s-a*f*s-u*i*l+n*f*l+a*i*p-n*c*p)*R,t[4]=x*R,t[5]=(h*m*s-_*f*s+_*i*p-e*m*p-h*i*d+e*f*d)*R,t[6]=(_*c*s-r*m*s-_*i*l+e*m*l+r*i*d-e*c*d)*R,t[7]=(r*f*s-h*c*s+h*i*l-e*f*l-r*i*p+e*c*p)*R,t[8]=b*R,t[9]=(_*u*s-h*g*s-_*n*p+e*g*p+h*n*d-e*u*d)*R,t[10]=(r*g*s-_*a*s+_*n*l-e*g*l-r*n*d+e*a*d)*R,t[11]=(h*a*s-r*u*s-h*n*l+e*u*l+r*n*p-e*a*p)*R,t[12]=y*R,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*m+e*u*m)*R,t[14]=(_*a*i-r*g*i-_*n*c+e*g*c+r*n*m-e*a*m)*R,t[15]=(r*u*i-h*a*i+h*n*c-e*u*c-r*n*f+e*a*f)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,a=t.y,c=t.z,l=s*r,h=s*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,r=e._y,a=e._z,c=e._w,l=s+s,h=r+r,u=a+a,f=s*l,p=s*h,_=s*u,g=r*h,m=r*u,d=a*u,M=c*l,x=c*h,b=c*u,y=n.x,A=n.y,R=n.z;return i[0]=(1-(g+d))*y,i[1]=(p+b)*y,i[2]=(_-x)*y,i[3]=0,i[4]=(p-b)*A,i[5]=(1-(f+d))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(_+x)*R,i[9]=(m-M)*R,i[10]=(1-(f+g))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Xi.set(i[0],i[1],i[2]).length(),r=Xi.set(i[4],i[5],i[6]).length(),a=Xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],cn.copy(this);let l=1/s,h=1/r,u=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,e.setFromRotationMatrix(cn),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r){let a=this.elements,c=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),f=-(r+s)/(r-s),p=-2*r*s/(r-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,r){let a=this.elements,c=1/(e-t),l=1/(n-i),h=1/(r-s),u=(e+t)*c,f=(n+i)*l,p=(r+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xi=new D,cn=new Zt,Fd=new D(0,0,0),kd=new D(1,1,1),Jn=new D,yr=new D,We=new D,Gc=new Zt,Wc=new bn,ds=class{constructor(t=0,e=0,n=0,i=ds.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Le(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ds.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bd=0,Xc=new D,qi=new bn,Ln=new Zt,Mr=new D,Ns=new D,Vd=new D,Hd=new bn,qc=new D(1,0,0),Yc=new D(0,1,0),Zc=new D(0,0,1),Gd={type:"added"},Jc={type:"removed"},me=class extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();let t=new D,e=new ds,n=new bn,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new It}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(qc,t)}rotateY(t){return this.rotateOnAxis(Yc,t)}rotateZ(t){return this.rotateOnAxis(Zc,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qc,t)}translateY(t){return this.translateOnAxis(Yc,t)}translateZ(t){return this.translateOnAxis(Zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Ns,Mr,this.up):Ln.lookAt(Mr,Ns,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),qi.setFromRotationMatrix(Ln),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Gd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jc)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(Jc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++){let a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){let a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),p=r(t.animations),_=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};me.DEFAULT_UP=new D(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new D,In=new D,Za=new D,Dn=new D,Yi=new D,Zi=new D,$c=new D,Ja=new D,$a=new D,ja=new D,br=!1,qe=class{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hn.subVectors(t,e),i.cross(hn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){hn.subVectors(i,e),In.subVectors(n,e),Za.subVectors(t,e);let r=hn.dot(hn),a=hn.dot(In),c=hn.dot(Za),l=In.dot(In),h=In.dot(Za),u=r*l-a*a;if(u===0)return s.set(-2,-1,-1);let f=1/u,p=(l*c-a*h)*f,_=(r*h-a*c)*f;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(t,e,n,i,s,r,a,c){return br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),br=!0),this.getInterpolation(t,e,n,i,s,r,a,c)}static getInterpolation(t,e,n,i,s,r,a,c){return this.getBarycoord(t,e,n,i,Dn),c.setScalar(0),c.addScaledVector(s,Dn.x),c.addScaledVector(r,Dn.y),c.addScaledVector(a,Dn.z),c}static isFrontFacing(t,e,n,i){return hn.subVectors(n,e),In.subVectors(t,e),hn.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),hn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),br=!0),qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;Yi.subVectors(i,n),Zi.subVectors(s,n),Ja.subVectors(t,n);let c=Yi.dot(Ja),l=Zi.dot(Ja);if(c<=0&&l<=0)return e.copy(n);$a.subVectors(t,i);let h=Yi.dot($a),u=Zi.dot($a);if(h>=0&&u<=h)return e.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Yi,r);ja.subVectors(t,s);let p=Yi.dot(ja),_=Zi.dot(ja);if(_>=0&&p<=_)return e.copy(s);let g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Zi,a);let m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return $c.subVectors(s,i),a=(u-h)/(u-h+(p-_)),e.copy(i).addScaledVector($c,a);let d=1/(m+g+f);return r=g*d,a=f*d,e.copy(n).addScaledVector(Yi,r).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wd=0,Qn=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=rs,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Dh,this.blendDst=Oh,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fa,this.stencilZFail=Fa,this.stencilZPass=Fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let a in s){let c=s[a];delete c.metadata,r.push(c)}return r}if(e){let s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ka(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ge.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ge.workingColorSpace){if(t=jo(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Ka(r,s,t+1/3),this.g=Ka(r,s,t),this.b=Ka(r,s,t-1/3)}return Ge.toWorkingColorSpace(this,i),this}setStyle(t,e=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ge.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ge.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){let n=Vh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return Ge.fromWorkingColorSpace(ye.copy(this),t),Le(ye.r*255,0,255)<<16^Le(ye.g*255,0,255)<<8^Le(ye.b*255,0,255)<<0}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ge.workingColorSpace){Ge.fromWorkingColorSpace(ye.copy(this),e);let n=ye.r,i=ye.g,s=ye.b,r=Math.max(n,i,s),a=Math.min(n,i,s),c,l,h=(a+r)/2;if(a===r)c=0,l=0;else{let u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=vn){Ge.fromWorkingColorSpace(ye.copy(this),t);let e=ye.r,n=ye.g,i=ye.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(un),un.h+=t,un.s+=e,un.l+=n,this.setHSL(un.h,un.s,un.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(Sr);let n=Gs(un.h,Sr.h,e),i=Gs(un.s,Sr.s,e),s=Gs(un.l,Sr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ye=new zt;zt.NAMES=Vh;var Gr=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ie=new D,wr=new Tt,Qe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix3(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix4(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyNormalMatrix(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.transformDirection(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var Wr=class extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xr=class extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ye=class extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Xd=0,$e=new Zt,Qa=new me,Ji=new D,Xe=new Ti,zs=new Ti,de=new D,pn=class extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bh(t)?Xr:Wr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new It().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return Qa.lookAt(t),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Xe.setFromBufferAttribute(s),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(de.addVectors(Xe.min,zs.min),Xe.expandByPoint(de),de.addVectors(Xe.max,zs.max),Xe.expandByPoint(de)):(Xe.expandByPoint(zs.min),Xe.expandByPoint(zs.max))}Xe.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)de.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(de));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)de.fromBufferAttribute(a,l),c&&(Ji.fromBufferAttribute(t,l),de.add(Ji)),i=Math.max(i,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new D,h[T]=new D;let u=new D,f=new D,p=new D,_=new Tt,g=new Tt,m=new Tt,d=new D,M=new D;function x(T,z,k){u.fromArray(i,T*3),f.fromArray(i,z*3),p.fromArray(i,k*3),_.fromArray(r,T*2),g.fromArray(r,z*2),m.fromArray(r,k*2),f.sub(u),p.sub(u),g.sub(_),m.sub(_);let I=1/(g.x*m.y-m.x*g.y);isFinite(I)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(I),M.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(I),l[T].add(d),l[z].add(d),l[k].add(d),h[T].add(M),h[z].add(M),h[k].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let T=0,z=b.length;T<z;++T){let k=b[T],I=k.start,O=k.count;for(let N=I,Z=I+O;N<Z;N+=3)x(n[N+0],n[N+1],n[N+2])}let y=new D,A=new D,R=new D,P=new D;function v(T){R.fromArray(s,T*3),P.copy(R);let z=l[T];y.copy(z),y.sub(R.multiplyScalar(R.dot(z))).normalize(),A.crossVectors(P,z);let I=A.dot(h[T])<0?-1:1;c[T*4]=y.x,c[T*4+1]=y.y,c[T*4+2]=y.z,c[T*4+3]=I}for(let T=0,z=b.length;T<z;++T){let k=b[T],I=k.start,O=k.count;for(let N=I,Z=I+O;N<Z;N+=3)v(n[N+0]),v(n[N+1]),v(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new D,s=new D,r=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let d=0;d<h;d++)f[_++]=l[p++]}return new Qe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new pn,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,c=r.length;a<c;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,h=r.length;l<h;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jc=new Zt,xn=new $s,Tr=new fs,Kc=new D,$i=new D,ji=new D,Ki=new D,to=new D,Er=new D,Ar=new Tt,Cr=new Tt,Pr=new Tt,Qc=new D,th=new D,eh=new D,Rr=new D,Lr=new D,Ke=class extends me{constructor(t=new pn,e=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Er.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(to.fromBufferAttribute(u,t),r?Er.addScaledVector(to,h):Er.addScaledVector(to.sub(e),h))}e.add(Er)}return this.isSkinnedMesh&&this.applyBoneTransform(t,e),e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),xn.copy(t.ray).recast(t.near),Tr.containsPoint(xn.origin)===!1&&(xn.intersectSphere(Tr,Kc)===null||xn.origin.distanceToSquared(Kc)>(t.far-t.near)**2))||(jc.copy(s).invert(),xn.copy(t.ray).applyMatrix4(jc),n.boundingBox!==null&&xn.intersectsBox(n.boundingBox)===!1))return;let r,a=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.attributes.normal,f=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){let m=f[_],d=i[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,y=x;b<y;b+=3){let A=a.getX(b),R=a.getX(b+1),P=a.getX(b+2);r=Ir(this,d,t,xn,l,h,u,A,R,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){let M=a.getX(m),x=a.getX(m+1),b=a.getX(m+2);r=Ir(this,i,t,xn,l,h,u,M,x,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){let m=f[_],d=i[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=M,y=x;b<y;b+=3){let A=b,R=b+1,P=b+2;r=Ir(this,d,t,xn,l,h,u,A,R,P),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){let M=m,x=m+1,b=m+2;r=Ir(this,i,t,xn,l,h,u,M,x,b),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function qd(o,t,e,n,i,s,r,a){let c;if(t.side===ze?c=n.intersectTriangle(r,s,i,!0,a):c=n.intersectTriangle(i,s,r,t.side===Kn,a),c===null)return null;Lr.copy(a),Lr.applyMatrix4(o.matrixWorld);let l=e.ray.origin.distanceTo(Lr);return l<e.near||l>e.far?null:{distance:l,point:Lr.clone(),object:o}}function Ir(o,t,e,n,i,s,r,a,c,l){o.getVertexPosition(a,$i),o.getVertexPosition(c,ji),o.getVertexPosition(l,Ki);let h=qd(o,t,e,n,$i,ji,Ki,Rr);if(h){i&&(Ar.fromBufferAttribute(i,a),Cr.fromBufferAttribute(i,c),Pr.fromBufferAttribute(i,l),h.uv=qe.getInterpolation(Rr,$i,ji,Ki,Ar,Cr,Pr,new Tt)),s&&(Ar.fromBufferAttribute(s,a),Cr.fromBufferAttribute(s,c),Pr.fromBufferAttribute(s,l),h.uv2=qe.getInterpolation(Rr,$i,ji,Ki,Ar,Cr,Pr,new Tt)),r&&(Qc.fromBufferAttribute(r,a),th.fromBufferAttribute(r,c),eh.fromBufferAttribute(r,l),h.normal=qe.getInterpolation(Rr,$i,ji,Ki,Qc,th,eh,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new D,materialIndex:0};qe.getNormal($i,ji,Ki,u.normal),h.face=u}return h}var Ei=class extends pn{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let c=[],l=[],h=[],u=[],f=0,p=0;_("z","y","x",-1,-1,n,e,t,r,s,0),_("z","y","x",1,-1,n,e,-t,r,s,1),_("x","z","y",1,1,t,n,e,i,r,2),_("x","z","y",1,-1,t,n,-e,i,r,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(u,2));function _(g,m,d,M,x,b,y,A,R,P,v){let T=b/R,z=y/P,k=b/2,I=y/2,O=A/2,N=R+1,Z=P+1,X=0,B=0,j=new D;for(let K=0;K<Z;K++){let rt=K*z-I;for(let at=0;at<N;at++){let V=at*T-k;j[g]=V*M,j[m]=rt*x,j[d]=O,l.push(j.x,j.y,j.z),j[g]=0,j[m]=0,j[d]=A>0?1:-1,h.push(j.x,j.y,j.z),u.push(at/R),u.push(1-K/P),X+=1}}for(let K=0;K<P;K++)for(let rt=0;rt<R;rt++){let at=f+rt+N*K,V=f+rt+N*(K+1),J=f+(rt+1)+N*(K+1),st=f+(rt+1)+N*K;c.push(at,V,st),c.push(V,J,st),B+=6}a.addGroup(p,B,v),p+=B,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ps(o){let t={};for(let e in o){t[e]={};for(let n in o[e]){let i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pe(o){let t={};for(let e=0;e<o.length;e++){let n=ps(o[e]);for(let i in n)t[i]=n[i]}return t}function Yd(o){let t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Hh(o){return o.getRenderTarget()===null&&o.outputEncoding===qt?vn:Ys}var Zd={clone:ps,merge:Pe},Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=Yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},qr=class extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Me=class extends qr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Qi=-90,ts=1,_o=class extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new Me(Qi,ts,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);let s=new Me(Qi,ts,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let r=new Me(Qi,ts,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);let a=new Me(Qi,ts,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);let c=new Me(Qi,ts,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);let l=new Me(Qi,ts,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,r,a,c,l]=this.children,h=t.getRenderTarget(),u=t.toneMapping,f=t.xr.enabled;t.toneMapping=zn,t.xr.enabled=!1;let p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Yr=class extends be{constructor(t,e,n,i,s,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,n,i,s,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xo=class extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Yr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ei(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:jn});s.uniforms.tEquirect.value=e;let r=new Ke(i,s),a=e.minFilter;return e.minFilter===Xs&&(e.minFilter=je),new _o(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}},eo=new D,jd=new D,Kd=new It,Un=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=eo.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(eo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kd.getNormalMatrix(t),i=this.coplanarPoint(eo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new fs,Dr=new D,Ks=class{constructor(t=new Un,e=new Un,n=new Un,i=new Un,s=new Un,r=new Un){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){let e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],f=n[8],p=n[9],_=n[10],g=n[11],m=n[12],d=n[13],M=n[14],x=n[15];return e[0].setComponents(a-i,u-c,g-f,x-m).normalize(),e[1].setComponents(a+i,u+c,g+f,x+m).normalize(),e[2].setComponents(a+s,u+l,g+p,x+d).normalize(),e[3].setComponents(a-s,u-l,g-p,x-d).normalize(),e[4].setComponents(a-r,u-h,g-_,x-M).normalize(),e[5].setComponents(a+r,u+h,g+_,x+M).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Dr.x=i.normal.x>0?t.max.x:t.min.x,Dr.y=i.normal.y>0?t.max.y:t.min.y,Dr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gh(){let o=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function Qd(o,t){let e=t.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,f=l.usage,p=o.createBuffer();o.bindBuffer(h,p),o.bufferData(h,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(u instanceof Int16Array)_=5122;else if(u instanceof Uint32Array)_=5125;else if(u instanceof Int32Array)_=5124;else if(u instanceof Int8Array)_=5120;else if(u instanceof Uint8Array)_=5121;else if(u instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){let f=h.array,p=h.updateRange;o.bindBuffer(u,l),p.count===-1?o.bufferSubData(u,0,f):(e?o.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):o.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(o.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:r,remove:a,update:c}}var Ai=class extends pn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,p=[],_=[],g=[],m=[];for(let d=0;d<h;d++){let M=d*f-r;for(let x=0;x<l;x++){let b=x*u-s;_.push(b,-M,0),g.push(0,0,1),m.push(x/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<a;M++){let x=M+l*d,b=M+l*(d+1),y=M+1+l*(d+1),A=M+1+l*d;p.push(x,b,A),p.push(b,y,A)}this.setIndex(p),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.widthSegments,t.heightSegments)}},tp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap="vec3 transformed = vec3( position );",op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vp=`#define PI 3.141592653589793
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
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Op=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zp=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
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
#endif`,Gp=`#if defined( USE_ENVMAP )
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zp=`PhysicalMaterial material;
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
#endif`,Jp=`struct PhysicalMaterial {
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
}`,$p=`
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,am=`#if defined( USE_POINTS_UV )
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
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Om=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#ifdef USE_UV
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
#endif`,qm=`#ifdef USE_UV
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
#endif`,Ym=`#ifdef USE_UV
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
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eg=`#include <common>
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
}`,ng=`#if DEPTH_PACKING == 3200
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
}`,ig=`#define DISTANCE
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
}`,sg=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,og=`uniform float scale;
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,hg=`uniform vec3 diffuse;
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
}`,ug=`#define LAMBERT
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
}`,fg=`#define LAMBERT
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
}`,dg=`#define MATCAP
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
}`,pg=`#define MATCAP
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
}`,mg=`#define NORMAL
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
}`,gg=`#define NORMAL
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
}`,_g=`#define PHONG
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
}`,xg=`#define PHONG
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
}`,vg=`#define STANDARD
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
}`,yg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,bg=`#define TOON
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
}`,Sg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Eg=`uniform vec3 color;
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
}`,Ag=`uniform float rotation;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Ct={alphamap_fragment:tp,alphamap_pars_fragment:ep,alphatest_fragment:np,alphatest_pars_fragment:ip,aomap_fragment:sp,aomap_pars_fragment:rp,begin_vertex:ap,beginnormal_vertex:op,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:dp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:_p,color_vertex:xp,common:vp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:bp,displacementmap_vertex:Sp,emissivemap_fragment:wp,emissivemap_pars_fragment:Tp,encodings_fragment:Ep,encodings_pars_fragment:Ap,envmap_fragment:Cp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Rp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Gp,envmap_vertex:Ip,fog_vertex:Dp,fog_pars_vertex:Op,fog_fragment:Up,fog_pars_fragment:Np,gradientmap_pars_fragment:zp,lightmap_fragment:Fp,lightmap_pars_fragment:kp,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:Vp,lights_pars_begin:Hp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:qp,lights_phong_pars_fragment:Yp,lights_physical_fragment:Zp,lights_physical_pars_fragment:Jp,lights_fragment_begin:$p,lights_fragment_maps:jp,lights_fragment_end:Kp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:am,metalnessmap_fragment:om,metalnessmap_pars_fragment:lm,morphcolor_vertex:cm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:fm,normal_fragment_begin:dm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:_m,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:bm,output_fragment:Sm,packing:wm,premultiplied_alpha_fragment:Tm,project_vertex:Em,dithering_fragment:Am,dithering_pars_fragment:Cm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Im,shadowmap_vertex:Dm,shadowmask_pars_fragment:Om,skinbase_vertex:Um,skinning_pars_vertex:Nm,skinning_vertex:zm,skinnormal_vertex:Fm,specularmap_fragment:km,specularmap_pars_fragment:Bm,tonemapping_fragment:Vm,tonemapping_pars_fragment:Hm,transmission_fragment:Gm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:qm,uv_vertex:Ym,worldpos_vertex:Zm,background_vert:Jm,background_frag:$m,backgroundCube_vert:jm,backgroundCube_frag:Km,cube_vert:Qm,cube_frag:tg,depth_vert:eg,depth_frag:ng,distanceRGBA_vert:ig,distanceRGBA_frag:sg,equirect_vert:rg,equirect_frag:ag,linedashed_vert:og,linedashed_frag:lg,meshbasic_vert:cg,meshbasic_frag:hg,meshlambert_vert:ug,meshlambert_frag:fg,meshmatcap_vert:dg,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:_g,meshphong_frag:xg,meshphysical_vert:vg,meshphysical_frag:yg,meshtoon_vert:Mg,meshtoon_frag:bg,points_vert:Sg,points_frag:wg,shadow_vert:Tg,shadow_frag:Eg,sprite_vert:Ag,sprite_frag:Cg},ot={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaTest:{value:0}}},yn={basic:{uniforms:Pe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Pe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Pe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Pe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Pe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Pe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Pe([ot.points,ot.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Pe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Pe([ot.common,ot.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Pe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Pe([ot.sprite,ot.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:Pe([ot.common,ot.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:Pe([ot.lights,ot.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};yn.physical={uniforms:Pe([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};var Or={r:0,b:0,g:0};function Pg(o,t,e,n,i,s,r){let a=new zt(0),c=s===!0?0:1,l,h,u=null,f=0,p=null;function _(m,d){let M=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x));let b=o.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?g(a,c):x&&x.isColor&&(g(x,1),M=!0),(o.autoClear||M)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===sa)?(h===void 0&&(h=new Ke(new Ei(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:ps(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=x.encoding!==qt,(u!==x||f!==x.version||p!==o.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=o.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ke(new Ai(2,2),new kn({name:"BackgroundMaterial",uniforms:ps(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=x.encoding!==qt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==o.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,p=o.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){m.getRGB(Or,Hh(o)),n.buffers.color.setClear(Or.r,Or.g,Or.b,d,r)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function Rg(o,t,e,n){let i=o.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},c=m(null),l=c,h=!1;function u(O,N,Z,X,B){let j=!1;if(r){let K=g(X,Z,N);l!==K&&(l=K,p(l.object)),j=d(O,X,Z,B),j&&M(O,X,Z,B)}else{let K=N.wireframe===!0;(l.geometry!==X.id||l.program!==Z.id||l.wireframe!==K)&&(l.geometry=X.id,l.program=Z.id,l.wireframe=K,j=!0)}B!==null&&e.update(B,34963),(j||h)&&(h=!1,P(O,N,Z,X),B!==null&&o.bindBuffer(34963,e.get(B).buffer))}function f(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function p(O){return n.isWebGL2?o.bindVertexArray(O):s.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?o.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function g(O,N,Z){let X=Z.wireframe===!0,B=a[O.id];B===void 0&&(B={},a[O.id]=B);let j=B[N.id];j===void 0&&(j={},B[N.id]=j);let K=j[X];return K===void 0&&(K=m(f()),j[X]=K),K}function m(O){let N=[],Z=[],X=[];for(let B=0;B<i;B++)N[B]=0,Z[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Z,attributeDivisors:X,object:O,attributes:{},index:null}}function d(O,N,Z,X){let B=l.attributes,j=N.attributes,K=0,rt=Z.getAttributes();for(let at in rt)if(rt[at].location>=0){let J=B[at],st=j[at];if(st===void 0&&(at==="instanceMatrix"&&O.instanceMatrix&&(st=O.instanceMatrix),at==="instanceColor"&&O.instanceColor&&(st=O.instanceColor)),J===void 0||J.attribute!==st||st&&J.data!==st.data)return!0;K++}return l.attributesNum!==K||l.index!==X}function M(O,N,Z,X){let B={},j=N.attributes,K=0,rt=Z.getAttributes();for(let at in rt)if(rt[at].location>=0){let J=j[at];J===void 0&&(at==="instanceMatrix"&&O.instanceMatrix&&(J=O.instanceMatrix),at==="instanceColor"&&O.instanceColor&&(J=O.instanceColor));let st={};st.attribute=J,J&&J.data&&(st.data=J.data),B[at]=st,K++}l.attributes=B,l.attributesNum=K,l.index=X}function x(){let O=l.newAttributes;for(let N=0,Z=O.length;N<Z;N++)O[N]=0}function b(O){y(O,0)}function y(O,N){let Z=l.newAttributes,X=l.enabledAttributes,B=l.attributeDivisors;Z[O]=1,X[O]===0&&(o.enableVertexAttribArray(O),X[O]=1),B[O]!==N&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,N),B[O]=N)}function A(){let O=l.newAttributes,N=l.enabledAttributes;for(let Z=0,X=N.length;Z<X;Z++)N[Z]!==O[Z]&&(o.disableVertexAttribArray(Z),N[Z]=0)}function R(O,N,Z,X,B,j){n.isWebGL2===!0&&(Z===5124||Z===5125)?o.vertexAttribIPointer(O,N,Z,B,j):o.vertexAttribPointer(O,N,Z,X,B,j)}function P(O,N,Z,X){if(n.isWebGL2===!1&&(O.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let B=X.attributes,j=Z.getAttributes(),K=N.defaultAttributeValues;for(let rt in j){let at=j[rt];if(at.location>=0){let V=B[rt];if(V===void 0&&(rt==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),rt==="instanceColor"&&O.instanceColor&&(V=O.instanceColor)),V!==void 0){let J=V.normalized,st=V.itemSize,ct=e.get(V);if(ct===void 0)continue;let C=ct.buffer,nt=ct.type,ut=ct.bytesPerElement;if(V.isInterleavedBufferAttribute){let et=V.data,pt=et.stride,Pt=V.offset;if(et.isInstancedInterleavedBuffer){for(let xt=0;xt<at.locationSize;xt++)y(at.location+xt,et.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let xt=0;xt<at.locationSize;xt++)b(at.location+xt);o.bindBuffer(34962,C);for(let xt=0;xt<at.locationSize;xt++)R(at.location+xt,st/at.locationSize,nt,J,pt*ut,(Pt+st/at.locationSize*xt)*ut)}else{if(V.isInstancedBufferAttribute){for(let et=0;et<at.locationSize;et++)y(at.location+et,V.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let et=0;et<at.locationSize;et++)b(at.location+et);o.bindBuffer(34962,C);for(let et=0;et<at.locationSize;et++)R(at.location+et,st/at.locationSize,nt,J,st*ut,st/at.locationSize*et*ut)}}else if(K!==void 0){let J=K[rt];if(J!==void 0)switch(J.length){case 2:o.vertexAttrib2fv(at.location,J);break;case 3:o.vertexAttrib3fv(at.location,J);break;case 4:o.vertexAttrib4fv(at.location,J);break;default:o.vertexAttrib1fv(at.location,J)}}}}A()}function v(){k();for(let O in a){let N=a[O];for(let Z in N){let X=N[Z];for(let B in X)_(X[B].object),delete X[B];delete N[Z]}delete a[O]}}function T(O){if(a[O.id]===void 0)return;let N=a[O.id];for(let Z in N){let X=N[Z];for(let B in X)_(X[B].object),delete X[B];delete N[Z]}delete a[O.id]}function z(O){for(let N in a){let Z=a[N];if(Z[O.id]===void 0)continue;let X=Z[O.id];for(let B in X)_(X[B].object),delete X[B];delete Z[O.id]}}function k(){I(),h=!0,l!==c&&(l=c,p(l.object))}function I(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:k,resetDefaultState:I,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:b,disableUnusedAttributes:A}}function Lg(o,t,e,n){let i=n.isWebGL2,s;function r(l){s=l}function a(l,h){o.drawArrays(s,l,h),e.update(h,s,1)}function c(l,h,u){if(u===0)return;let f,p;if(i)f=o,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,l,h,u),e.update(h,s,u)}this.setMode=r,this.render=a,this.renderInstances=c}function Ig(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=r||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=o.getParameter(34930),f=o.getParameter(35660),p=o.getParameter(3379),_=o.getParameter(34076),g=o.getParameter(34921),m=o.getParameter(36347),d=o.getParameter(36348),M=o.getParameter(36349),x=f>0,b=r||t.has("OES_texture_float"),y=x&&b,A=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:A}}function Dg(o){let t=this,e=null,n=0,i=!1,s=!1,r=new Un,a=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=o.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):l();else{let M=s?0:n,x=M*4,b=d.clippingState||null;c.value=b,b=h(_,f,x,p);for(let y=0;y!==x;++y)b[y]=e[y];d.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=c.value,_!==!0||m===null){let d=p+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,b=p;x!==g;++x,b+=4)r.copy(u[x]).applyMatrix4(M,a),r.normal.toArray(m,b),m[b+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Og(o){let t=new WeakMap;function e(r,a){return a===co?r.mapping=cs:a===ho&&(r.mapping=hs),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){let a=r.mapping;if(a===co||a===ho)if(t.has(r)){let c=t.get(r).texture;return e(c,r.mapping)}else{let c=r.image;if(c&&c.height>0){let l=new xo(c.height/2);return l.fromEquirectangularTexture(o,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){let a=r.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var vo=class extends qr{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},is=4,nh=[.125,.215,.35,.446,.526,.582],vi=20,no=new vo,ih=new zt,io=null,xi=(1+Math.sqrt(5))/2,es=1/xi,sh=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,xi,es),new D(0,xi,-es),new D(es,0,xi),new D(-es,0,xi),new D(xi,es,0),new D(-xi,es,0)],Zr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){io=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(io),t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),io=this._renderer.getRenderTarget();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:qs,format:dn,encoding:wi,depthBuffer:!1},i=rh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ug(s)),this._blurMaterial=Ng(s,t,e)}return i}_compileMaterial(t){let e=new Ke(this._lodPlanes[0],t);this._renderer.compile(e,no)}_sceneToCubeUV(t,e,n,i){let a=new Me(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ih),h.toneMapping=zn,h.autoClear=!1;let p=new Gr({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),_=new Ke(new Ei,p),g=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(ih),g=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):M===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let x=this._cubeSize;Ur(i,M*x,d>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===cs||t.mapping===hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());let s=i?this._cubemapMaterial:this._equirectMaterial,r=new Ke(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Ur(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,no)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=sh[(i-1)%sh.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){let c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ke(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vi-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):vi;m>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);let d=[],M=0;for(let R=0;R<vi;++R){let P=R/g,v=Math.exp(-P*P/2);d.push(v),R===0?M+=v:R<m&&(M+=2*v)}for(let R=0;R<d.length;R++)d[R]=d[R]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;let b=this._sizeLods[i],y=3*b*(i>x-is?i-x+is:0),A=4*(this._cubeSize-b);Ur(e,y,A,3*b,2*b),c.setRenderTarget(e),c.render(u,no)}};function Ug(o){let t=[],e=[],n=[],i=o,s=o-is+1+nh.length;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let c=1/a;r>o-is?c=nh[r-o+is-1]:r===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,d=1,M=new Float32Array(g*_*p),x=new Float32Array(m*_*p),b=new Float32Array(d*_*p);for(let A=0;A<p;A++){let R=A%3*2/3-1,P=A>2?0:-1,v=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];M.set(v,g*_*A),x.set(f,m*_*A);let T=[A,A,A,A,A,A];b.set(T,d*_*A)}let y=new pn;y.setAttribute("position",new Qe(M,g)),y.setAttribute("uv",new Qe(x,m)),y.setAttribute("faceIndex",new Qe(b,d)),t.push(y),i>is&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rh(o,t,e){let n=new Fn(o,t,e);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Ng(o,t,e){let n=new Float32Array(vi),i=new D(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ah(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function oh(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}function zg(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===co||c===ho,h=c===cs||c===hs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Zr(o)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Zr(o));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Fg(o){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kg(o,t,e,n){let i={},s=new WeakMap;function r(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",r),delete i[f.id];let p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",r),i[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let _ in f)t.update(f[_],34962);let p=u.morphAttributes;for(let _ in p){let g=p[_];for(let m=0,d=g.length;m<d;m++)t.update(g[m],34962)}}function l(u){let f=[],p=u.index,_=u.attributes.position,g=0;if(p!==null){let M=p.array;g=p.version;for(let x=0,b=M.length;x<b;x+=3){let y=M[x+0],A=M[x+1],R=M[x+2];f.push(y,A,A,R,R,y)}}else{let M=_.array;g=_.version;for(let x=0,b=M.length/3-1;x<b;x+=3){let y=x+0,A=x+1,R=x+2;f.push(y,A,A,R,R,y)}}let m=new(Bh(f)?Xr:Wr)(f,1);m.version=g;let d=s.get(u);d&&t.remove(d),s.set(u,m)}function h(u){let f=s.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Bg(o,t,e,n){let i=n.isWebGL2,s;function r(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,p){o.drawElements(s,p,a,f*c),e.update(p,s,1)}function u(f,p,_){if(_===0)return;let g,m;if(i)g=o,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,f*c,_),e.update(p,s,_)}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=u}function Vg(o){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(e.calls++,r){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Hg(o,t){return o[0]-t[0]}function Gg(o,t){return Math.abs(t[1])-Math.abs(o[1])}function Wg(o,t,e){let n={},i=new Float32Array(8),s=new WeakMap,r=new Wt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0,g=s.get(h);if(g===void 0||g.count!==_){let O=function(){k.dispose(),s.delete(h),h.removeEventListener("dispose",O)};g!==void 0&&g.texture.dispose();let M=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],P=0;M===!0&&(P=1),x===!0&&(P=2),b===!0&&(P=3);let v=h.attributes.position.count*P,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let z=new Float32Array(v*T*4*_),k=new Hr(z,v,T,_);k.type=Mi,k.needsUpdate=!0;let I=P*4;for(let N=0;N<_;N++){let Z=y[N],X=A[N],B=R[N],j=v*T*4*N;for(let K=0;K<Z.count;K++){let rt=K*I;M===!0&&(r.fromBufferAttribute(Z,K),z[j+rt+0]=r.x,z[j+rt+1]=r.y,z[j+rt+2]=r.z,z[j+rt+3]=0),x===!0&&(r.fromBufferAttribute(X,K),z[j+rt+4]=r.x,z[j+rt+5]=r.y,z[j+rt+6]=r.z,z[j+rt+7]=0),b===!0&&(r.fromBufferAttribute(B,K),z[j+rt+8]=r.x,z[j+rt+9]=r.y,z[j+rt+10]=r.z,z[j+rt+11]=B.itemSize===4?r.w:1)}}g={count:_,texture:k,size:new Tt(v,T)},s.set(h,g),h.addEventListener("dispose",O)}let m=0;for(let M=0;M<f.length;M++)m+=f[M];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(o,"morphTargetBaseInfluence",d),u.getUniforms().setValue(o,"morphTargetInfluences",f),u.getUniforms().setValue(o,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}else{let p=f===void 0?0:f.length,_=n[h.id];if(_===void 0||_.length!==p){_=[];for(let x=0;x<p;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<p;x++){let b=_[x];b[0]=x,b[1]=f[x]}_.sort(Gg);for(let x=0;x<8;x++)x<p&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Hg);let g=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let b=a[x],y=b[0],A=b[1];y!==Number.MAX_SAFE_INTEGER&&A?(g&&h.getAttribute("morphTarget"+x)!==g[y]&&h.setAttribute("morphTarget"+x,g[y]),m&&h.getAttribute("morphNormal"+x)!==m[y]&&h.setAttribute("morphNormal"+x,m[y]),i[x]=A,d+=A):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}let M=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(o,"morphTargetBaseInfluence",M),u.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function Xg(o,t,e,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);return i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),u}function r(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:r}}var Wh=new be,Xh=new Hr,qh=new go,Yh=new Yr,lh=[],ch=[],hh=new Float32Array(16),uh=new Float32Array(9),fh=new Float32Array(4);function _s(o,t,e){let n=o[0];if(n<=0||n>0)return o;let i=t*e,s=lh[i];if(s===void 0&&(s=new Float32Array(i),lh[i]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=e,o[r].toArray(s,a)}return s}function oe(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function le(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function ra(o,t){let e=ch[t];e===void 0&&(e=new Int32Array(t),ch[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function qg(o,t){let e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function Yg(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;o.uniform2fv(this.addr,t),le(e,t)}}function Zg(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(oe(e,t))return;o.uniform3fv(this.addr,t),le(e,t)}}function Jg(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;o.uniform4fv(this.addr,t),le(e,t)}}function $g(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;fh.set(n),o.uniformMatrix2fv(this.addr,!1,fh),le(e,n)}}function jg(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;uh.set(n),o.uniformMatrix3fv(this.addr,!1,uh),le(e,n)}}function Kg(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;hh.set(n),o.uniformMatrix4fv(this.addr,!1,hh),le(e,n)}}function Qg(o,t){let e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function t_(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;o.uniform2iv(this.addr,t),le(e,t)}}function e_(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;o.uniform3iv(this.addr,t),le(e,t)}}function n_(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;o.uniform4iv(this.addr,t),le(e,t)}}function i_(o,t){let e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function s_(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;o.uniform2uiv(this.addr,t),le(e,t)}}function r_(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;o.uniform3uiv(this.addr,t),le(e,t)}}function a_(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;o.uniform4uiv(this.addr,t),le(e,t)}}function o_(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Wh,i)}function l_(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||qh,i)}function c_(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Yh,i)}function h_(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Xh,i)}function u_(o){switch(o){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return Jg;case 35674:return $g;case 35675:return jg;case 35676:return Kg;case 5124:case 35670:return Qg;case 35667:case 35671:return t_;case 35668:case 35672:return e_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return s_;case 36295:return r_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return c_;case 36289:case 36303:case 36311:case 36292:return h_}}function f_(o,t){o.uniform1fv(this.addr,t)}function d_(o,t){let e=_s(t,this.size,2);o.uniform2fv(this.addr,e)}function p_(o,t){let e=_s(t,this.size,3);o.uniform3fv(this.addr,e)}function m_(o,t){let e=_s(t,this.size,4);o.uniform4fv(this.addr,e)}function g_(o,t){let e=_s(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function __(o,t){let e=_s(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function x_(o,t){let e=_s(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function v_(o,t){o.uniform1iv(this.addr,t)}function y_(o,t){o.uniform2iv(this.addr,t)}function M_(o,t){o.uniform3iv(this.addr,t)}function b_(o,t){o.uniform4iv(this.addr,t)}function S_(o,t){o.uniform1uiv(this.addr,t)}function w_(o,t){o.uniform2uiv(this.addr,t)}function T_(o,t){o.uniform3uiv(this.addr,t)}function E_(o,t){o.uniform4uiv(this.addr,t)}function A_(o,t,e){let n=this.cache,i=t.length,s=ra(e,i);oe(n,s)||(o.uniform1iv(this.addr,s),le(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Wh,s[r])}function C_(o,t,e){let n=this.cache,i=t.length,s=ra(e,i);oe(n,s)||(o.uniform1iv(this.addr,s),le(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||qh,s[r])}function P_(o,t,e){let n=this.cache,i=t.length,s=ra(e,i);oe(n,s)||(o.uniform1iv(this.addr,s),le(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Yh,s[r])}function R_(o,t,e){let n=this.cache,i=t.length,s=ra(e,i);oe(n,s)||(o.uniform1iv(this.addr,s),le(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Xh,s[r])}function L_(o){switch(o){case 5126:return f_;case 35664:return d_;case 35665:return p_;case 35666:return m_;case 35674:return g_;case 35675:return __;case 35676:return x_;case 5124:case 35670:return v_;case 35667:case 35671:return y_;case 35668:case 35672:return M_;case 35669:case 35673:return b_;case 5125:return S_;case 36294:return w_;case 36295:return T_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return R_}}var yo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=u_(e.type)}},Mo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=L_(e.type)}},bo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},so=/(\w+)(\])?(\[|\.)?/g;function dh(o,t){o.seq.push(t),o.map[t.id]=t}function I_(o,t,e){let n=o.name,i=n.length;for(so.lastIndex=0;;){let s=so.exec(n),r=so.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){dh(e,l===void 0?new yo(a,o,t):new Mo(a,o,t));break}else{let u=e.map[a];u===void 0&&(u=new bo(a),dh(e,u)),e=u}}}var ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);I_(s,r,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.id in e&&n.push(r)}return n}};function ph(o,t,e){let n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}var D_=0;function O_(o,t){let e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){let a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function U_(o){switch(o){case wi:return["Linear","( value )"];case qt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function mh(o,t,e){let n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+O_(o.getShaderSource(t),r)}else return i}function N_(o,t){let e=U_(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function z_(o,t){let e;switch(t){case Xf:e="Linear";break;case qf:e="Reinhard";break;case Yf:e="OptimizedCineon";break;case Zf:e="ACESFilmic";break;case Jf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function F_(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vs).join(`
`)}function k_(o){let t=[];for(let e in o){let n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function B_(o,t){let e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){let s=o.getActiveAttrib(t,i),r=s.name,a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[r]={type:s.type,location:o.getAttribLocation(t,r),locationSize:a}}return e}function Vs(o){return o!==""}function gh(o,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _h(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(o){return o.replace(V_,H_)}function H_(o,t){let e=Ct[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return So(e)}var G_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(o){return o.replace(G_,W_)}function W_(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function vh(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function X_(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Sf?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ks&&(t="SHADOWMAP_TYPE_VSM"),t}function q_(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y_(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function Z_(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $o:t="ENVMAP_BLENDING_MULTIPLY";break;case Gf:t="ENVMAP_BLENDING_MIX";break;case Wf:t="ENVMAP_BLENDING_ADD";break}return t}function J_(o){let t=o.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $_(o,t,e,n){let i=o.getContext(),s=e.defines,r=e.vertexShader,a=e.fragmentShader,c=X_(e),l=q_(e),h=Y_(e),u=Z_(e),f=J_(e),p=e.isWebGL2?"":F_(e),_=k_(s),g=i.createProgram(),m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[_].filter(Vs).join(`
`),m.length>0&&(m+=`
`),d=[p,_].filter(Vs).join(`
`),d.length>0&&(d+=`
`)):(m=[vh(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),d=[p,vh(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Ct.tonemapping_pars_fragment:"",e.toneMapping!==zn?z_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ct.encodings_pars_fragment,N_("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),r=So(r),r=gh(r,e),r=_h(r,e),a=So(a),a=gh(a,e),a=_h(a,e),r=xh(r),a=xh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let x=M+m+r,b=M+d+a,y=ph(i,35633,x),A=ph(i,35632,b);if(i.attachShader(g,y),i.attachShader(g,A),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),o.debug.checkShaderErrors){let v=i.getProgramInfoLog(g).trim(),T=i.getShaderInfoLog(y).trim(),z=i.getShaderInfoLog(A).trim(),k=!0,I=!0;if(i.getProgramParameter(g,35714)===!1)if(k=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,g,y,A);else{let O=mh(i,y,"vertex"),N=mh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+v+`
`+O+`
`+N)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(T===""||z==="")&&(I=!1);I&&(this.diagnostics={runnable:k,programLog:v,vertexShader:{log:T,prefix:m},fragmentShader:{log:z,prefix:d}})}i.deleteShader(y),i.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new ls(i,g)),R};let P;return this.getAttributes=function(){return P===void 0&&(P=B_(i,g)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=e.shaderName,this.id=D_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=A,this}var j_=0,wo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new To(t),e.set(t,n)),n}},To=class{constructor(t){this.id=j_++,this.code=t,this.usedTimes=0}};function K_(o,t,e,n,i,s,r){let a=new js,c=new wo,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===1?"uv2":"uv"}function m(v,T,z,k,I){let O=k.fog,N=I.geometry,Z=v.isMeshStandardMaterial?k.environment:null,X=(v.isMeshStandardMaterial?e:t).get(v.envMap||Z),B=X&&X.mapping===sa?X.image.height:null,j=_[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,rt=K!==void 0?K.length:0,at=0;N.morphAttributes.position!==void 0&&(at=1),N.morphAttributes.normal!==void 0&&(at=2),N.morphAttributes.color!==void 0&&(at=3);let V,J,st,ct;if(j){let ht=yn[j];V=ht.vertexShader,J=ht.fragmentShader}else V=v.vertexShader,J=v.fragmentShader,c.update(v),st=c.getVertexShaderID(v),ct=c.getFragmentShaderID(v);let C=o.getRenderTarget(),nt=I.isInstancedMesh===!0,ut=!!v.map,et=!!v.matcap,pt=!!X,Pt=!!v.aoMap,xt=!!v.lightMap,Et=!!v.bumpMap,he=!!v.normalMap,pe=!!v.displacementMap,ue=!!v.emissiveMap,ae=!!v.metalnessMap,kt=!!v.roughnessMap,jt=v.clearcoat>0,Ue=v.iridescence>0,E=v.sheen>0,S=v.transmission>0,H=jt&&!!v.clearcoatMap,tt=jt&&!!v.clearcoatNormalMap,it=jt&&!!v.clearcoatRoughnessMap,lt=Ue&&!!v.iridescenceMap,bt=Ue&&!!v.iridescenceThicknessMap,dt=E&&!!v.sheenColorMap,q=E&&!!v.sheenRoughnessMap,mt=!!v.specularMap,vt=!!v.specularColorMap,Mt=!!v.specularIntensityMap,ft=S&&!!v.transmissionMap,gt=S&&!!v.thicknessMap,Ut=!!v.gradientMap,Bt=!!v.alphaMap,te=v.alphaTest>0,L=!!v.extensions,W=!!N.attributes.uv2;return{isWebGL2:h,shaderID:j,shaderName:v.type,vertexShader:V,fragmentShader:J,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:nt,instancingColor:nt&&I.instanceColor!==null,supportsVertexTextures:f,outputEncoding:C===null?o.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:wi,map:ut,matcap:et,envMap:pt,envMapMode:pt&&X.mapping,envMapCubeUVHeight:B,aoMap:Pt,lightMap:xt,bumpMap:Et,normalMap:he,displacementMap:f&&pe,emissiveMap:ue,normalMapObjectSpace:he&&v.normalMapType===pd,normalMapTangentSpace:he&&v.normalMapType===zh,decodeVideoTexture:ut&&v.map.isVideoTexture===!0&&v.map.encoding===qt,metalnessMap:ae,roughnessMap:kt,clearcoat:jt,clearcoatMap:H,clearcoatNormalMap:tt,clearcoatRoughnessMap:it,iridescence:Ue,iridescenceMap:lt,iridescenceThicknessMap:bt,sheen:E,sheenColorMap:dt,sheenRoughnessMap:q,specularMap:mt,specularColorMap:vt,specularIntensityMap:Mt,transmission:S,transmissionMap:ft,thicknessMap:gt,gradientMap:Ut,opaque:v.transparent===!1&&v.blending===rs,alphaMap:Bt,alphaTest:te,combine:v.combine,mapUv:ut&&g(v.map.channel),aoMapUv:Pt&&g(v.aoMap.channel),lightMapUv:xt&&g(v.lightMap.channel),bumpMapUv:Et&&g(v.bumpMap.channel),normalMapUv:he&&g(v.normalMap.channel),displacementMapUv:pe&&g(v.displacementMap.channel),emissiveMapUv:ue&&g(v.emissiveMap.channel),metalnessMapUv:ae&&g(v.metalnessMap.channel),roughnessMapUv:kt&&g(v.roughnessMap.channel),clearcoatMapUv:H&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:tt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:q&&g(v.sheenRoughnessMap.channel),specularMapUv:mt&&g(v.specularMap.channel),specularColorMapUv:vt&&g(v.specularColorMap.channel),specularIntensityMapUv:Mt&&g(v.specularIntensityMap.channel),transmissionMapUv:ft&&g(v.transmissionMap.channel),thicknessMapUv:gt&&g(v.thicknessMap.channel),alphaMapUv:Bt&&g(v.alphaMap.channel),vertexTangents:he&&!!N.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs2:W,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(ut||Bt),fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:at,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:v.toneMapped?o.toneMapping:zn,useLegacyLights:o.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Nn,flipSided:v.side===ze,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:L&&v.extensions.derivatives===!0,extensionFragDepth:L&&v.extensions.fragDepth===!0,extensionDrawBuffers:L&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let z in v.defines)T.push(z),T.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(M(T,v),x(T,v),T.push(o.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function M(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function x(v,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUvs2&&a.enable(13),T.vertexTangents&&a.enable(14),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.decodeVideoTexture&&a.enable(17),T.opaque&&a.enable(18),T.pointsUvs&&a.enable(19),v.push(a.mask)}function b(v){let T=_[v.type],z;if(T){let k=yn[T];z=Zd.clone(k.uniforms)}else z=v.uniforms;return z}function y(v,T){let z;for(let k=0,I=l.length;k<I;k++){let O=l[k];if(O.cacheKey===T){z=O,++z.usedTimes;break}}return z===void 0&&(z=new $_(o,T,v,s),l.push(z)),z}function A(v){if(--v.usedTimes===0){let T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),v.destroy()}}function R(v){c.remove(v)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:y,releaseProgram:A,releaseShaderCache:R,programs:l,dispose:P}}function Q_(){let o=new WeakMap;function t(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function e(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function t0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function yh(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Mh(){let o=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(u,f,p,_,g,m){let d=o[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},o[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=m),t++,d}function a(u,f,p,_,g,m){let d=r(u,f,p,_,g,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,_,g,m){let d=r(u,f,p,_,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||t0),n.length>1&&n.sort(f||yh),i.length>1&&i.sort(f||yh)}function h(){for(let u=t,f=o.length;u<f;u++){let p=o[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function e0(){let o=new WeakMap;function t(n,i){let s=o.get(n),r;return s===void 0?(r=new Mh,o.set(n,[r])):i>=s.length?(r=new Mh,s.push(r)):r=s[i],r}function e(){o=new WeakMap}return{get:t,dispose:e}}function n0(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new zt};break;case"SpotLight":e={position:new D,direction:new D,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new D,halfWidth:new D,halfHeight:new D};break}return o[t.id]=e,e}}}function i0(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}var s0=0;function r0(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function a0(o,t){let e=new n0,n=i0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new D);let s=new D,r=new Zt,a=new Zt;function c(h,u){let f=0,p=0,_=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,m=0,d=0,M=0,x=0,b=0,y=0,A=0,R=0,P=0;h.sort(r0);let v=u===!0?Math.PI:1;for(let z=0,k=h.length;z<k;z++){let I=h[z],O=I.color,N=I.intensity,Z=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=O.r*N*v,p+=O.g*N*v,_+=O.b*N*v;else if(I.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(I.sh.coefficients[B],N);else if(I.isDirectionalLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*v),I.castShadow){let j=I.shadow,K=n.get(I);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=X,i.directionalShadowMatrix[g]=I.shadow.matrix,b++}i.directional[g]=B,g++}else if(I.isSpotLight){let B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(O).multiplyScalar(N*v),B.distance=Z,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,i.spot[d]=B;let j=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,j.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[d]=j.matrix,I.castShadow){let K=n.get(I);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,i.spotShadow[d]=K,i.spotShadowMap[d]=X,A++}d++}else if(I.isRectAreaLight){let B=e.get(I);B.color.copy(O).multiplyScalar(N),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=B,M++}else if(I.isPointLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*v),B.distance=I.distance,B.decay=I.decay,I.castShadow){let j=I.shadow,K=n.get(I);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=I.shadow.matrix,y++}i.point[m]=B,m++}else if(I.isHemisphereLight){let B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(N*v),B.groundColor.copy(I.groundColor).multiplyScalar(N*v),i.hemi[x]=B,x++}}M>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=_;let T=i.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==d||T.rectAreaLength!==M||T.hemiLength!==x||T.numDirectionalShadows!==b||T.numPointShadows!==y||T.numSpotShadows!==A||T.numSpotMaps!==R)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=M,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=A+R-P,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=P,T.directionalLength=g,T.pointLength=m,T.spotLength=d,T.rectAreaLength=M,T.hemiLength=x,T.numDirectionalShadows=b,T.numPointShadows=y,T.numSpotShadows=A,T.numSpotMaps=R,i.version=s0++)}function l(h,u){let f=0,p=0,_=0,g=0,m=0,d=u.matrixWorldInverse;for(let M=0,x=h.length;M<x;M++){let b=h[M];if(b.isDirectionalLight){let y=i.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),f++}else if(b.isSpotLight){let y=i.spot[_];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),_++}else if(b.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let y=i.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){let y=i.hemi[m];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:i}}function bh(o,t){let e=new a0(o,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:a}}function o0(o,t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),c;return a===void 0?(c=new bh(o,t),e.set(s,[c])):r>=a.length?(c=new bh(o,t),a.push(c)):c=a[r],c}function i(){e=new WeakMap}return{get:n,dispose:i}}var Eo=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ao=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c0=`uniform sampler2D shadow_pass;
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
}`;function h0(o,t,e){let n=new Ks,i=new Tt,s=new Tt,r=new Wt,a=new Eo({depthPacking:dd}),c=new Ao,l={},h=e.maxTextureSize,u={[Kn]:ze,[ze]:Kn,[Nn]:Nn},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:l0,fragmentShader:c0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new pn;_.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ke(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ih,this.render=function(b,y,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let R=o.getRenderTarget(),P=o.getActiveCubeFace(),v=o.getActiveMipmapLevel(),T=o.state;T.setBlending(jn),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let z=0,k=b.length;z<k;z++){let I=b[z],O=I.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let N=O.getFrameExtents();if(i.multiply(N),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/N.x),i.x=s.x*N.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/N.y),i.y=s.y*N.y,O.mapSize.y=s.y)),O.map===null){let X=this.type!==ks?{minFilter:Re,magFilter:Re}:{};O.map=new Fn(i.x,i.y,X),O.map.texture.name=I.name+".shadowMap",O.camera.updateProjectionMatrix()}o.setRenderTarget(O.map),o.clear();let Z=O.getViewportCount();for(let X=0;X<Z;X++){let B=O.getViewport(X);r.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),T.viewport(r),O.updateMatrices(I,X),n=O.getFrustum(),x(y,A,O.camera,I,this.type)}O.isPointLightShadow!==!0&&this.type===ks&&d(O,A),O.needsUpdate=!1}m.needsUpdate=!1,o.setRenderTarget(R,P,v)};function d(b,y){let A=t.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Fn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(y,null,A,f,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(y,null,A,p,g,null)}function M(b,y,A,R){let P=null,v=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(v!==void 0)P=v;else if(P=A.isPointLight===!0?c:a,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){let T=P.uuid,z=y.uuid,k=l[T];k===void 0&&(k={},l[T]=k);let I=k[z];I===void 0&&(I=P.clone(),k[z]=I),P=I}if(P.visible=y.visible,P.wireframe=y.wireframe,R===ks?P.side=y.shadowSide!==null?y.shadowSide:y.side:P.side=y.shadowSide!==null?y.shadowSide:u[y.side],P.alphaMap=y.alphaMap,P.alphaTest=y.alphaTest,P.map=y.map,P.clipShadows=y.clipShadows,P.clippingPlanes=y.clippingPlanes,P.clipIntersection=y.clipIntersection,P.displacementMap=y.displacementMap,P.displacementScale=y.displacementScale,P.displacementBias=y.displacementBias,P.wireframeLinewidth=y.wireframeLinewidth,P.linewidth=y.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let T=o.properties.get(P);T.light=A}return P}function x(b,y,A,R,P){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===ks)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);let z=t.update(b),k=b.material;if(Array.isArray(k)){let I=z.groups;for(let O=0,N=I.length;O<N;O++){let Z=I[O],X=k[Z.materialIndex];if(X&&X.visible){let B=M(b,X,R,P);o.renderBufferDirect(A,null,z,B,b,Z)}}}else if(k.visible){let I=M(b,k,R,P);o.renderBufferDirect(A,null,z,I,b,null)}}let T=b.children;for(let z=0,k=T.length;z<k;z++)x(T[z],y,A,R,P)}}function u0(o,t,e){let n=e.isWebGL2;function i(){let L=!1,W=new Wt,Q=null,ht=new Wt(0,0,0,0);return{setMask:function(_t){Q!==_t&&!L&&(o.colorMask(_t,_t,_t,_t),Q=_t)},setLocked:function(_t){L=_t},setClear:function(_t,Xt,Yt,xe,Xn){Xn===!0&&(_t*=xe,Xt*=xe,Yt*=xe),W.set(_t,Xt,Yt,xe),ht.equals(W)===!1&&(o.clearColor(_t,Xt,Yt,xe),ht.copy(W))},reset:function(){L=!1,Q=null,ht.set(-1,0,0,0)}}}function s(){let L=!1,W=null,Q=null,ht=null;return{setTest:function(_t){_t?C(2929):nt(2929)},setMask:function(_t){W!==_t&&!L&&(o.depthMask(_t),W=_t)},setFunc:function(_t){if(Q!==_t){switch(_t){case Nf:o.depthFunc(512);break;case zf:o.depthFunc(519);break;case Ff:o.depthFunc(513);break;case lo:o.depthFunc(515);break;case kf:o.depthFunc(514);break;case Bf:o.depthFunc(518);break;case Vf:o.depthFunc(516);break;case Hf:o.depthFunc(517);break;default:o.depthFunc(515)}Q=_t}},setLocked:function(_t){L=_t},setClear:function(_t){ht!==_t&&(o.clearDepth(_t),ht=_t)},reset:function(){L=!1,W=null,Q=null,ht=null}}}function r(){let L=!1,W=null,Q=null,ht=null,_t=null,Xt=null,Yt=null,xe=null,Xn=null;return{setTest:function(ee){L||(ee?C(2960):nt(2960))},setMask:function(ee){W!==ee&&!L&&(o.stencilMask(ee),W=ee)},setFunc:function(ee,Je,_n){(Q!==ee||ht!==Je||_t!==_n)&&(o.stencilFunc(ee,Je,_n),Q=ee,ht=Je,_t=_n)},setOp:function(ee,Je,_n){(Xt!==ee||Yt!==Je||xe!==_n)&&(o.stencilOp(ee,Je,_n),Xt=ee,Yt=Je,xe=_n)},setLocked:function(ee){L=ee},setClear:function(ee){Xn!==ee&&(o.clearStencil(ee),Xn=ee)},reset:function(){L=!1,W=null,Q=null,ht=null,_t=null,Xt=null,Yt=null,xe=null,Xn=null}}}let a=new i,c=new s,l=new r,h=new WeakMap,u=new WeakMap,f={},p={},_=new WeakMap,g=[],m=null,d=!1,M=null,x=null,b=null,y=null,A=null,R=null,P=null,v=!1,T=null,z=null,k=null,I=null,O=null,N=o.getParameter(35661),Z=!1,X=0,B=o.getParameter(7938);B.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(B)[1]),Z=X>=1):B.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Z=X>=2);let j=null,K={},rt=o.getParameter(3088),at=o.getParameter(2978),V=new Wt().fromArray(rt),J=new Wt().fromArray(at);function st(L,W,Q){let ht=new Uint8Array(4),_t=o.createTexture();o.bindTexture(L,_t),o.texParameteri(L,10241,9728),o.texParameteri(L,10240,9728);for(let Xt=0;Xt<Q;Xt++)o.texImage2D(W+Xt,0,6408,1,1,0,6408,5121,ht);return _t}let ct={};ct[3553]=st(3553,3553,1),ct[34067]=st(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),C(2929),c.setFunc(lo),pe(!1),ue(ac),C(2884),Et(jn);function C(L){f[L]!==!0&&(o.enable(L),f[L]=!0)}function nt(L){f[L]!==!1&&(o.disable(L),f[L]=!1)}function ut(L,W){return p[L]!==W?(o.bindFramebuffer(L,W),p[L]=W,n&&(L===36009&&(p[36160]=W),L===36160&&(p[36009]=W)),!0):!1}function et(L,W){let Q=g,ht=!1;if(L)if(Q=_.get(W),Q===void 0&&(Q=[],_.set(W,Q)),L.isWebGLMultipleRenderTargets){let _t=L.texture;if(Q.length!==_t.length||Q[0]!==36064){for(let Xt=0,Yt=_t.length;Xt<Yt;Xt++)Q[Xt]=36064+Xt;Q.length=_t.length,ht=!0}}else Q[0]!==36064&&(Q[0]=36064,ht=!0);else Q[0]!==1029&&(Q[0]=1029,ht=!0);ht&&(e.isWebGL2?o.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function pt(L){return m!==L?(o.useProgram(L),m=L,!0):!1}let Pt={[ns]:32774,[Tf]:32778,[Ef]:32779};if(n)Pt[hc]=32775,Pt[uc]=32776;else{let L=t.get("EXT_blend_minmax");L!==null&&(Pt[hc]=L.MIN_EXT,Pt[uc]=L.MAX_EXT)}let xt={[Af]:0,[Cf]:1,[Pf]:768,[Dh]:770,[Uf]:776,[Df]:774,[Lf]:772,[Rf]:769,[Oh]:771,[Of]:775,[If]:773};function Et(L,W,Q,ht,_t,Xt,Yt,xe){if(L===jn){d===!0&&(nt(3042),d=!1);return}if(d===!1&&(C(3042),d=!0),L!==wf){if(L!==M||xe!==v){if((x!==ns||A!==ns)&&(o.blendEquation(32774),x=ns,A=ns),xe)switch(L){case rs:o.blendFuncSeparate(1,771,1,771);break;case oc:o.blendFunc(1,1);break;case lc:o.blendFuncSeparate(0,769,0,1);break;case cc:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case rs:o.blendFuncSeparate(770,771,1,771);break;case oc:o.blendFunc(770,1);break;case lc:o.blendFuncSeparate(0,769,0,1);break;case cc:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,y=null,R=null,P=null,M=L,v=xe}return}_t=_t||W,Xt=Xt||Q,Yt=Yt||ht,(W!==x||_t!==A)&&(o.blendEquationSeparate(Pt[W],Pt[_t]),x=W,A=_t),(Q!==b||ht!==y||Xt!==R||Yt!==P)&&(o.blendFuncSeparate(xt[Q],xt[ht],xt[Xt],xt[Yt]),b=Q,y=ht,R=Xt,P=Yt),M=L,v=!1}function he(L,W){L.side===Nn?nt(2884):C(2884);let Q=L.side===ze;W&&(Q=!Q),pe(Q),L.blending===rs&&L.transparent===!1?Et(jn):Et(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let ht=L.stencilWrite;l.setTest(ht),ht&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),kt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?C(32926):nt(32926)}function pe(L){T!==L&&(L?o.frontFace(2304):o.frontFace(2305),T=L)}function ue(L){L!==Mf?(C(2884),L!==z&&(L===ac?o.cullFace(1029):L===bf?o.cullFace(1028):o.cullFace(1032))):nt(2884),z=L}function ae(L){L!==k&&(Z&&o.lineWidth(L),k=L)}function kt(L,W,Q){L?(C(32823),(I!==W||O!==Q)&&(o.polygonOffset(W,Q),I=W,O=Q)):nt(32823)}function jt(L){L?C(3089):nt(3089)}function Ue(L){L===void 0&&(L=33984+N-1),j!==L&&(o.activeTexture(L),j=L)}function E(L,W,Q){Q===void 0&&(j===null?Q=33984+N-1:Q=j);let ht=K[Q];ht===void 0&&(ht={type:void 0,texture:void 0},K[Q]=ht),(ht.type!==L||ht.texture!==W)&&(j!==Q&&(o.activeTexture(Q),j=Q),o.bindTexture(L,W||ct[L]),ht.type=L,ht.texture=W)}function S(){let L=K[j];L!==void 0&&L.type!==void 0&&(o.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function H(){try{o.compressedTexImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{o.texSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{o.texSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{o.texStorage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{o.texStorage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{o.texImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{o.texImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(L){V.equals(L)===!1&&(o.scissor(L.x,L.y,L.z,L.w),V.copy(L))}function gt(L){J.equals(L)===!1&&(o.viewport(L.x,L.y,L.z,L.w),J.copy(L))}function Ut(L,W){let Q=u.get(W);Q===void 0&&(Q=new WeakMap,u.set(W,Q));let ht=Q.get(L);ht===void 0&&(ht=o.getUniformBlockIndex(W,L.name),Q.set(L,ht))}function Bt(L,W){let ht=u.get(W).get(L);h.get(W)!==ht&&(o.uniformBlockBinding(W,ht,L.__bindingPointIndex),h.set(W,ht))}function te(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},j=null,K={},p={},_=new WeakMap,g=[],m=null,d=!1,M=null,x=null,b=null,y=null,A=null,R=null,P=null,v=!1,T=null,z=null,k=null,I=null,O=null,V.set(0,0,o.canvas.width,o.canvas.height),J.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:C,disable:nt,bindFramebuffer:ut,drawBuffers:et,useProgram:pt,setBlending:Et,setMaterial:he,setFlipSided:pe,setCullFace:ue,setLineWidth:ae,setPolygonOffset:kt,setScissorTest:jt,activeTexture:Ue,bindTexture:E,unbindTexture:S,compressedTexImage2D:H,compressedTexImage3D:tt,texImage2D:vt,texImage3D:Mt,updateUBOMapping:Ut,uniformBlockBinding:Bt,texStorage2D:q,texStorage3D:mt,texSubImage2D:it,texSubImage3D:lt,compressedTexSubImage2D:bt,compressedTexSubImage3D:dt,scissor:ft,viewport:gt,reset:te}}function f0(o,t,e,n,i,s,r){let a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap,g,m=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,S){return d?new OffscreenCanvas(E,S):Js("canvas")}function x(E,S,H,tt){let it=1;if((E.width>tt||E.height>tt)&&(it=tt/Math.max(E.width,E.height)),it<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let lt=S?kh:Math.floor,bt=lt(it*E.width),dt=lt(it*E.height);g===void 0&&(g=M(bt,dt));let q=H?M(bt,dt):g;return q.width=bt,q.height=dt,q.getContext("2d").drawImage(E,0,0,bt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+bt+"x"+dt+")."),q}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function b(E){return mo(E.width)&&mo(E.height)}function y(E){return a?!1:E.wrapS!==fn||E.wrapT!==fn||E.minFilter!==Re&&E.minFilter!==je}function A(E,S){return E.generateMipmaps&&S&&E.minFilter!==Re&&E.minFilter!==je}function R(E){o.generateMipmap(E)}function P(E,S,H,tt,it=!1){if(a===!1)return S;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let lt=S;return S===6403&&(H===5126&&(lt=33326),H===5131&&(lt=33325),H===5121&&(lt=33321)),S===33319&&(H===5126&&(lt=33328),H===5131&&(lt=33327),H===5121&&(lt=33323)),S===6408&&(H===5126&&(lt=34836),H===5131&&(lt=34842),H===5121&&(lt=tt===qt&&it===!1?35907:32856),H===32819&&(lt=32854),H===32820&&(lt=32855)),(lt===33325||lt===33326||lt===33327||lt===33328||lt===34842||lt===34836)&&t.get("EXT_color_buffer_float"),lt}function v(E,S,H){return A(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==Re&&E.minFilter!==je?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function T(E){return E===Re||E===fc||E===La?9728:9729}function z(E){let S=E.target;S.removeEventListener("dispose",z),I(S),S.isVideoTexture&&_.delete(S)}function k(E){let S=E.target;S.removeEventListener("dispose",k),N(S)}function I(E){let S=n.get(E);if(S.__webglInit===void 0)return;let H=E.source,tt=m.get(H);if(tt){let it=tt[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&O(E),Object.keys(tt).length===0&&m.delete(H)}n.remove(E)}function O(E){let S=n.get(E);o.deleteTexture(S.__webglTexture);let H=E.source,tt=m.get(H);delete tt[S.__cacheKey],r.memory.textures--}function N(E){let S=E.texture,H=n.get(E),tt=n.get(S);if(tt.__webglTexture!==void 0&&(o.deleteTexture(tt.__webglTexture),r.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let it=0;it<6;it++)o.deleteFramebuffer(H.__webglFramebuffer[it]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[it]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let it=0;it<H.__webglColorRenderbuffer.length;it++)H.__webglColorRenderbuffer[it]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[it]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let it=0,lt=S.length;it<lt;it++){let bt=n.get(S[it]);bt.__webglTexture&&(o.deleteTexture(bt.__webglTexture),r.memory.textures--),n.remove(S[it])}n.remove(S),n.remove(E)}let Z=0;function X(){Z=0}function B(){let E=Z;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),Z+=1,E}function j(E){let S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.encoding),S.join()}function K(E,S){let H=n.get(E);if(E.isVideoTexture&&jt(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){let tt=E.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(H,E,S);return}}e.bindTexture(3553,H.__webglTexture,33984+S)}function rt(E,S){let H=n.get(E);if(E.version>0&&H.__version!==E.version){nt(H,E,S);return}e.bindTexture(35866,H.__webglTexture,33984+S)}function at(E,S){let H=n.get(E);if(E.version>0&&H.__version!==E.version){nt(H,E,S);return}e.bindTexture(32879,H.__webglTexture,33984+S)}function V(E,S){let H=n.get(E);if(E.version>0&&H.__version!==E.version){ut(H,E,S);return}e.bindTexture(34067,H.__webglTexture,33984+S)}let J={[uo]:10497,[fn]:33071,[fo]:33648},st={[Re]:9728,[fc]:9984,[La]:9986,[je]:9729,[$f]:9985,[Xs]:9987};function ct(E,S,H){if(H?(o.texParameteri(E,10242,J[S.wrapS]),o.texParameteri(E,10243,J[S.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,J[S.wrapR]),o.texParameteri(E,10240,st[S.magFilter]),o.texParameteri(E,10241,st[S.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(S.wrapS!==fn||S.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,T(S.magFilter)),o.texParameteri(E,10241,T(S.minFilter)),S.minFilter!==Re&&S.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){let tt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Re||S.minFilter!==La&&S.minFilter!==Xs||S.type===Mi&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===qs&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(E,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function C(E,S){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",z));let tt=S.source,it=m.get(tt);it===void 0&&(it={},m.set(tt,it));let lt=j(S);if(lt!==E.__cacheKey){it[lt]===void 0&&(it[lt]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,H=!0),it[lt].usedTimes++;let bt=it[E.__cacheKey];bt!==void 0&&(it[E.__cacheKey].usedTimes--,bt.usedTimes===0&&O(S)),E.__cacheKey=lt,E.__webglTexture=it[lt].texture}return H}function nt(E,S,H){let tt=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=35866),S.isData3DTexture&&(tt=32879);let it=C(E,S),lt=S.source;e.bindTexture(tt,E.__webglTexture,33984+H);let bt=n.get(lt);if(lt.version!==bt.__version||it===!0){e.activeTexture(33984+H),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);let dt=y(S)&&b(S.image)===!1,q=x(S.image,dt,!1,h);q=Ue(S,q);let mt=b(q)||a,vt=s.convert(S.format,S.encoding),Mt=s.convert(S.type),ft=P(S.internalFormat,vt,Mt,S.encoding,S.isVideoTexture);ct(tt,S,mt);let gt,Ut=S.mipmaps,Bt=a&&S.isVideoTexture!==!0,te=bt.__version===void 0||it===!0,L=v(S,q,mt);if(S.isDepthTexture)ft=6402,a?S.type===Mi?ft=36012:S.type===yi?ft=33190:S.type===as?ft=35056:ft=33189:S.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===bi&&ft===6402&&S.type!==Nh&&S.type!==yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=yi,Mt=s.convert(S.type)),S.format===us&&ft===6402&&(ft=34041,S.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=as,Mt=s.convert(S.type))),te&&(Bt?e.texStorage2D(3553,1,ft,q.width,q.height):e.texImage2D(3553,0,ft,q.width,q.height,0,vt,Mt,null));else if(S.isDataTexture)if(Ut.length>0&&mt){Bt&&te&&e.texStorage2D(3553,L,ft,Ut[0].width,Ut[0].height);for(let W=0,Q=Ut.length;W<Q;W++)gt=Ut[W],Bt?e.texSubImage2D(3553,W,0,0,gt.width,gt.height,vt,Mt,gt.data):e.texImage2D(3553,W,ft,gt.width,gt.height,0,vt,Mt,gt.data);S.generateMipmaps=!1}else Bt?(te&&e.texStorage2D(3553,L,ft,q.width,q.height),e.texSubImage2D(3553,0,0,0,q.width,q.height,vt,Mt,q.data)):e.texImage2D(3553,0,ft,q.width,q.height,0,vt,Mt,q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Bt&&te&&e.texStorage3D(35866,L,ft,Ut[0].width,Ut[0].height,q.depth);for(let W=0,Q=Ut.length;W<Q;W++)gt=Ut[W],S.format!==dn?vt!==null?Bt?e.compressedTexSubImage3D(35866,W,0,0,0,gt.width,gt.height,q.depth,vt,gt.data,0,0):e.compressedTexImage3D(35866,W,ft,gt.width,gt.height,q.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?e.texSubImage3D(35866,W,0,0,0,gt.width,gt.height,q.depth,vt,Mt,gt.data):e.texImage3D(35866,W,ft,gt.width,gt.height,q.depth,0,vt,Mt,gt.data)}else{Bt&&te&&e.texStorage2D(3553,L,ft,Ut[0].width,Ut[0].height);for(let W=0,Q=Ut.length;W<Q;W++)gt=Ut[W],S.format!==dn?vt!==null?Bt?e.compressedTexSubImage2D(3553,W,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(3553,W,ft,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?e.texSubImage2D(3553,W,0,0,gt.width,gt.height,vt,Mt,gt.data):e.texImage2D(3553,W,ft,gt.width,gt.height,0,vt,Mt,gt.data)}else if(S.isDataArrayTexture)Bt?(te&&e.texStorage3D(35866,L,ft,q.width,q.height,q.depth),e.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,vt,Mt,q.data)):e.texImage3D(35866,0,ft,q.width,q.height,q.depth,0,vt,Mt,q.data);else if(S.isData3DTexture)Bt?(te&&e.texStorage3D(32879,L,ft,q.width,q.height,q.depth),e.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,vt,Mt,q.data)):e.texImage3D(32879,0,ft,q.width,q.height,q.depth,0,vt,Mt,q.data);else if(S.isFramebufferTexture){if(te)if(Bt)e.texStorage2D(3553,L,ft,q.width,q.height);else{let W=q.width,Q=q.height;for(let ht=0;ht<L;ht++)e.texImage2D(3553,ht,ft,W,Q,0,vt,Mt,null),W>>=1,Q>>=1}}else if(Ut.length>0&&mt){Bt&&te&&e.texStorage2D(3553,L,ft,Ut[0].width,Ut[0].height);for(let W=0,Q=Ut.length;W<Q;W++)gt=Ut[W],Bt?e.texSubImage2D(3553,W,0,0,vt,Mt,gt):e.texImage2D(3553,W,ft,vt,Mt,gt);S.generateMipmaps=!1}else Bt?(te&&e.texStorage2D(3553,L,ft,q.width,q.height),e.texSubImage2D(3553,0,0,0,vt,Mt,q)):e.texImage2D(3553,0,ft,vt,Mt,q);A(S,mt)&&R(tt),bt.__version=lt.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ut(E,S,H){if(S.image.length!==6)return;let tt=C(E,S),it=S.source;e.bindTexture(34067,E.__webglTexture,33984+H);let lt=n.get(it);if(it.version!==lt.__version||tt===!0){e.activeTexture(33984+H),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);let bt=S.isCompressedTexture||S.image[0].isCompressedTexture,dt=S.image[0]&&S.image[0].isDataTexture,q=[];for(let W=0;W<6;W++)!bt&&!dt?q[W]=x(S.image[W],!1,!0,l):q[W]=dt?S.image[W].image:S.image[W],q[W]=Ue(S,q[W]);let mt=q[0],vt=b(mt)||a,Mt=s.convert(S.format,S.encoding),ft=s.convert(S.type),gt=P(S.internalFormat,Mt,ft,S.encoding),Ut=a&&S.isVideoTexture!==!0,Bt=lt.__version===void 0||tt===!0,te=v(S,mt,vt);ct(34067,S,vt);let L;if(bt){Ut&&Bt&&e.texStorage2D(34067,te,gt,mt.width,mt.height);for(let W=0;W<6;W++){L=q[W].mipmaps;for(let Q=0;Q<L.length;Q++){let ht=L[Q];S.format!==dn?Mt!==null?Ut?e.compressedTexSubImage2D(34069+W,Q,0,0,ht.width,ht.height,Mt,ht.data):e.compressedTexImage2D(34069+W,Q,gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?e.texSubImage2D(34069+W,Q,0,0,ht.width,ht.height,Mt,ft,ht.data):e.texImage2D(34069+W,Q,gt,ht.width,ht.height,0,Mt,ft,ht.data)}}}else{L=S.mipmaps,Ut&&Bt&&(L.length>0&&te++,e.texStorage2D(34067,te,gt,q[0].width,q[0].height));for(let W=0;W<6;W++)if(dt){Ut?e.texSubImage2D(34069+W,0,0,0,q[W].width,q[W].height,Mt,ft,q[W].data):e.texImage2D(34069+W,0,gt,q[W].width,q[W].height,0,Mt,ft,q[W].data);for(let Q=0;Q<L.length;Q++){let _t=L[Q].image[W].image;Ut?e.texSubImage2D(34069+W,Q+1,0,0,_t.width,_t.height,Mt,ft,_t.data):e.texImage2D(34069+W,Q+1,gt,_t.width,_t.height,0,Mt,ft,_t.data)}}else{Ut?e.texSubImage2D(34069+W,0,0,0,Mt,ft,q[W]):e.texImage2D(34069+W,0,gt,Mt,ft,q[W]);for(let Q=0;Q<L.length;Q++){let ht=L[Q];Ut?e.texSubImage2D(34069+W,Q+1,0,0,Mt,ft,ht.image[W]):e.texImage2D(34069+W,Q+1,gt,Mt,ft,ht.image[W])}}}A(S,vt)&&R(34067),lt.__version=it.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function et(E,S,H,tt,it){let lt=s.convert(H.format,H.encoding),bt=s.convert(H.type),dt=P(H.internalFormat,lt,bt,H.encoding);n.get(S).__hasExternalTextures||(it===32879||it===35866?e.texImage3D(it,0,dt,S.width,S.height,S.depth,0,lt,bt,null):e.texImage2D(it,0,dt,S.width,S.height,0,lt,bt,null)),e.bindFramebuffer(36160,E),kt(S)?f.framebufferTexture2DMultisampleEXT(36160,tt,it,n.get(H).__webglTexture,0,ae(S)):(it===3553||it>=34069&&it<=34074)&&o.framebufferTexture2D(36160,tt,it,n.get(H).__webglTexture,0),e.bindFramebuffer(36160,null)}function pt(E,S,H){if(o.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let tt=33189;if(H||kt(S)){let it=S.depthTexture;it&&it.isDepthTexture&&(it.type===Mi?tt=36012:it.type===yi&&(tt=33190));let lt=ae(S);kt(S)?f.renderbufferStorageMultisampleEXT(36161,lt,tt,S.width,S.height):o.renderbufferStorageMultisample(36161,lt,tt,S.width,S.height)}else o.renderbufferStorage(36161,tt,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){let tt=ae(S);H&&kt(S)===!1?o.renderbufferStorageMultisample(36161,tt,35056,S.width,S.height):kt(S)?f.renderbufferStorageMultisampleEXT(36161,tt,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{let tt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let it=0;it<tt.length;it++){let lt=tt[it],bt=s.convert(lt.format,lt.encoding),dt=s.convert(lt.type),q=P(lt.internalFormat,bt,dt,lt.encoding),mt=ae(S);H&&kt(S)===!1?o.renderbufferStorageMultisample(36161,mt,q,S.width,S.height):kt(S)?f.renderbufferStorageMultisampleEXT(36161,mt,q,S.width,S.height):o.renderbufferStorage(36161,q,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function Pt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);let tt=n.get(S.depthTexture).__webglTexture,it=ae(S);if(S.depthTexture.format===bi)kt(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,it):o.framebufferTexture2D(36160,36096,3553,tt,0);else if(S.depthTexture.format===us)kt(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,it):o.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function xt(E){let S=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Pt(S.__webglFramebuffer,E)}else if(H){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]=o.createRenderbuffer(),pt(S.__webglDepthbuffer[tt],E,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),pt(S.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function Et(E,S,H){let tt=n.get(E);S!==void 0&&et(tt.__webglFramebuffer,E,E.texture,36064,3553),H!==void 0&&xt(E)}function he(E){let S=E.texture,H=n.get(E),tt=n.get(S);E.addEventListener("dispose",k),E.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture()),tt.__version=S.version,r.memory.textures++);let it=E.isWebGLCubeRenderTarget===!0,lt=E.isWebGLMultipleRenderTargets===!0,bt=b(E)||a;if(it){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)H.__webglFramebuffer[dt]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),lt)if(i.drawBuffers){let dt=E.texture;for(let q=0,mt=dt.length;q<mt;q++){let vt=n.get(dt[q]);vt.__webglTexture===void 0&&(vt.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&kt(E)===!1){let dt=lt?S:[S];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let q=0;q<dt.length;q++){let mt=dt[q];H.__webglColorRenderbuffer[q]=o.createRenderbuffer(),o.bindRenderbuffer(36161,H.__webglColorRenderbuffer[q]);let vt=s.convert(mt.format,mt.encoding),Mt=s.convert(mt.type),ft=P(mt.internalFormat,vt,Mt,mt.encoding,E.isXRRenderTarget===!0),gt=ae(E);o.renderbufferStorageMultisample(36161,gt,ft,E.width,E.height),o.framebufferRenderbuffer(36160,36064+q,36161,H.__webglColorRenderbuffer[q])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),pt(H.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(it){e.bindTexture(34067,tt.__webglTexture),ct(34067,S,bt);for(let dt=0;dt<6;dt++)et(H.__webglFramebuffer[dt],E,S,36064,34069+dt);A(S,bt)&&R(34067),e.unbindTexture()}else if(lt){let dt=E.texture;for(let q=0,mt=dt.length;q<mt;q++){let vt=dt[q],Mt=n.get(vt);e.bindTexture(3553,Mt.__webglTexture),ct(3553,vt,bt),et(H.__webglFramebuffer,E,vt,36064+q,3553),A(vt,bt)&&R(3553)}e.unbindTexture()}else{let dt=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?dt=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,tt.__webglTexture),ct(dt,S,bt),et(H.__webglFramebuffer,E,S,36064,dt),A(S,bt)&&R(dt),e.unbindTexture()}E.depthBuffer&&xt(E)}function pe(E){let S=b(E)||a,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0,it=H.length;tt<it;tt++){let lt=H[tt];if(A(lt,S)){let bt=E.isWebGLCubeRenderTarget?34067:3553,dt=n.get(lt).__webglTexture;e.bindTexture(bt,dt),R(bt),e.unbindTexture()}}}function ue(E){if(a&&E.samples>0&&kt(E)===!1){let S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,tt=E.height,it=16384,lt=[],bt=E.stencilBuffer?33306:36096,dt=n.get(E),q=E.isWebGLMultipleRenderTargets===!0;if(q)for(let mt=0;mt<S.length;mt++)e.bindFramebuffer(36160,dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+mt,36161,null),e.bindFramebuffer(36160,dt.__webglFramebuffer),o.framebufferTexture2D(36009,36064+mt,3553,null,0);e.bindFramebuffer(36008,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,dt.__webglFramebuffer);for(let mt=0;mt<S.length;mt++){lt.push(36064+mt),E.depthBuffer&&lt.push(bt);let vt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(vt===!1&&(E.depthBuffer&&(it|=256),E.stencilBuffer&&(it|=1024)),q&&o.framebufferRenderbuffer(36008,36064,36161,dt.__webglColorRenderbuffer[mt]),vt===!0&&(o.invalidateFramebuffer(36008,[bt]),o.invalidateFramebuffer(36009,[bt])),q){let Mt=n.get(S[mt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,Mt,0)}o.blitFramebuffer(0,0,H,tt,0,0,H,tt,it,9728),p&&o.invalidateFramebuffer(36008,lt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),q)for(let mt=0;mt<S.length;mt++){e.bindFramebuffer(36160,dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+mt,36161,dt.__webglColorRenderbuffer[mt]);let vt=n.get(S[mt]).__webglTexture;e.bindFramebuffer(36160,dt.__webglFramebuffer),o.framebufferTexture2D(36009,36064+mt,3553,vt,0)}e.bindFramebuffer(36009,dt.__webglMultisampledFramebuffer)}}function ae(E){return Math.min(u,E.samples)}function kt(E){let S=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function jt(E){let S=r.render.frame;_.get(E)!==S&&(_.set(E,S),E.update())}function Ue(E,S){let H=E.encoding,tt=E.format,it=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===po||H!==wi&&(H===qt?a===!1?t.has("EXT_sRGB")===!0&&tt===dn?(E.format=po,E.minFilter=je,E.generateMipmaps=!1):S=Br.sRGBToLinear(S):(tt!==dn||it!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),S}this.allocateTextureUnit=B,this.resetTextureUnits=X,this.setTexture2D=K,this.setTexture2DArray=rt,this.setTexture3D=at,this.setTextureCube=V,this.rebindTextures=Et,this.setupRenderTarget=he,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=kt}function d0(o,t,e){let n=e.isWebGL2;function i(s,r=null){let a;if(s===Si)return 5121;if(s===td)return 32819;if(s===ed)return 32820;if(s===jf)return 5120;if(s===Kf)return 5122;if(s===Nh)return 5123;if(s===Qf)return 5124;if(s===yi)return 5125;if(s===Mi)return 5126;if(s===qs)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===nd)return 6406;if(s===dn)return 6408;if(s===id)return 6409;if(s===sd)return 6410;if(s===bi)return 6402;if(s===us)return 34041;if(s===po)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===rd)return 6403;if(s===ad)return 36244;if(s===od)return 33319;if(s===ld)return 33320;if(s===cd)return 36249;if(s===Ia||s===Da||s===Oa||s===Ua)if(r===qt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ia)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ia)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Da)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ua)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dc||s===pc||s===mc||s===gc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===dc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_c||s===xc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===_c)return r===qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===xc)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===vc||s===yc||s===Mc||s===bc||s===Sc||s===wc||s===Tc||s===Ec||s===Ac||s===Cc||s===Pc||s===Rc||s===Lc||s===Ic)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===vc)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yc)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mc)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bc)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sc)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wc)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tc)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ec)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ac)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cc)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pc)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rc)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lc)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ic)return r===qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Na)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Na)return r===qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ud||s===Dc||s===Oc||s===Uc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Na)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Dc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Oc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Uc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===as?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}var Co=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ss=class extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}},p0={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),d=this._getHandJoint(l,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ss;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Po=class extends be{constructor(t,e,n,i,s,r,a,c,l,h){if(h=h!==void 0?h:bi,h!==bi&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bi&&(n=yi),n===void 0&&h===us&&(n=as),super(null,i,s,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Re,this.minFilter=c!==void 0?c:Re,this.flipY=!1,this.generateMipmaps=!1}},Ro=class extends Mn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,_=null,g=e.getContextAttributes(),m=null,d=null,M=[],x=[],b=new Set,y=new Map,A=new Me;A.layers.enable(1),A.viewport=new Wt;let R=new Me;R.layers.enable(2),R.viewport=new Wt;let P=[A,R],v=new Co;v.layers.enable(1),v.layers.enable(2);let T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=M[V];return J===void 0&&(J=new Ws,M[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=M[V];return J===void 0&&(J=new Ws,M[V]=J),J.getGripSpace()},this.getHand=function(V){let J=M[V];return J===void 0&&(J=new Ws,M[V]=J),J.getHandSpace()};function k(V){let J=x.indexOf(V.inputSource);if(J===-1)return;let st=M[J];st!==void 0&&st.dispatchEvent({type:V.type,data:V.inputSource})}function I(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",O);for(let V=0;V<M.length;V++){let J=x[V];J!==null&&(x[V]=null,M[V].disconnect(J))}T=null,z=null,t.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,at.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",I),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let J={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:p}),d=new Fn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Si,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let J=null,st=null,ct=null;g.depth&&(ct=g.stencil?35056:33190,J=g.stencil?us:bi,st=g.stencil?as:yi);let C={colorFormat:32856,depthFormat:ct,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(C),i.updateRenderState({layers:[f]}),d=new Fn(f.textureWidth,f.textureHeight,{format:dn,type:Si,depthTexture:new Po(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});let nt=t.properties.get(d);nt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(V){for(let J=0;J<V.removed.length;J++){let st=V.removed[J],ct=x.indexOf(st);ct>=0&&(x[ct]=null,M[ct].disconnect(st))}for(let J=0;J<V.added.length;J++){let st=V.added[J],ct=x.indexOf(st);if(ct===-1){for(let nt=0;nt<M.length;nt++)if(nt>=x.length){x.push(st),ct=nt;break}else if(x[nt]===null){x[nt]=st,ct=nt;break}if(ct===-1)break}let C=M[ct];C&&C.connect(st)}}let N=new D,Z=new D;function X(V,J,st){N.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(st.matrixWorld);let ct=N.distanceTo(Z),C=J.projectionMatrix.elements,nt=st.projectionMatrix.elements,ut=C[14]/(C[10]-1),et=C[14]/(C[10]+1),pt=(C[9]+1)/C[5],Pt=(C[9]-1)/C[5],xt=(C[8]-1)/C[0],Et=(nt[8]+1)/nt[0],he=ut*xt,pe=ut*Et,ue=ct/(-xt+Et),ae=ue*-xt;J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ae),V.translateZ(ue),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let kt=ut+ue,jt=et+ue,Ue=he-ae,E=pe+(ct-ae),S=pt*et/jt*kt,H=Pt*et/jt*kt;V.projectionMatrix.makePerspective(Ue,E,S,H,kt,jt),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function B(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;v.near=R.near=A.near=V.near,v.far=R.far=A.far=V.far,(T!==v.near||z!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,z=v.far);let J=V.parent,st=v.cameras;B(v,J);for(let ct=0;ct<st.length;ct++)B(st[ct],J);st.length===2?X(v,A,R):v.projectionMatrix.copy(A.projectionMatrix),j(V,v,J)};function j(V,J,st){st===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(st.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);let ct=V.children;for(let C=0,nt=ct.length;C<nt;C++)ct[C].updateMatrixWorld(!0);V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Zs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.getPlanes=function(){return b};let K=null;function rt(V,J){if(h=J.getViewerPose(l||r),_=J,h!==null){let st=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let ct=!1;st.length!==v.cameras.length&&(v.cameras.length=0,ct=!0);for(let C=0;C<st.length;C++){let nt=st[C],ut=null;if(p!==null)ut=p.getViewport(nt);else{let pt=u.getViewSubImage(f,nt);ut=pt.viewport,C===0&&(t.setRenderTargetTextures(d,pt.colorTexture,f.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(d))}let et=P[C];et===void 0&&(et=new Me,et.layers.enable(C),et.viewport=new Wt,P[C]=et),et.matrix.fromArray(nt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(nt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ut.x,ut.y,ut.width,ut.height),C===0&&(v.matrix.copy(et.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ct===!0&&v.cameras.push(et)}}for(let st=0;st<M.length;st++){let ct=x[st],C=M[st];ct!==null&&C!==void 0&&C.update(ct,J,l||r)}if(K&&K(V,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let st=null;for(let ct of b)J.detectedPlanes.has(ct)||(st===null&&(st=[]),st.push(ct));if(st!==null)for(let ct of st)b.delete(ct),y.delete(ct),n.dispatchEvent({type:"planeremoved",data:ct});for(let ct of J.detectedPlanes)if(!b.has(ct))b.add(ct),y.set(ct,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ct});else{let C=y.get(ct);ct.lastChangedTime>C&&(y.set(ct,ct.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ct}))}}_=null}let at=new Gh;at.setAnimationLoop(rt),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}};function m0(o,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Hh(o)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,M,x,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,M,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ze&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ze&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=t.get(d).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let x=o.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ze&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){let M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function g0(o,t,e,n){let i={},s={},r=[],a=e.isWebGL2?o.getParameter(35375):0;function c(M,x){let b=x.program;n.uniformBlockBinding(M,b)}function l(M,x){let b=i[M.id];b===void 0&&(_(M),b=h(M),i[M.id]=b,M.addEventListener("dispose",m));let y=x.program;n.updateUBOMapping(M,y);let A=t.render.frame;s[M.id]!==A&&(f(M),s[M.id]=A)}function h(M){let x=u();M.__bindingPointIndex=x;let b=o.createBuffer(),y=M.__size,A=M.usage;return o.bindBuffer(35345,b),o.bufferData(35345,y,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,x,b),b}function u(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let x=i[M.id],b=M.uniforms,y=M.__cache;o.bindBuffer(35345,x);for(let A=0,R=b.length;A<R;A++){let P=b[A];if(p(P,A,y)===!0){let v=P.__offset,T=Array.isArray(P.value)?P.value:[P.value],z=0;for(let k=0;k<T.length;k++){let I=T[k],O=g(I);typeof I=="number"?(P.__data[0]=I,o.bufferSubData(35345,v+z,P.__data)):I.isMatrix3?(P.__data[0]=I.elements[0],P.__data[1]=I.elements[1],P.__data[2]=I.elements[2],P.__data[3]=I.elements[0],P.__data[4]=I.elements[3],P.__data[5]=I.elements[4],P.__data[6]=I.elements[5],P.__data[7]=I.elements[0],P.__data[8]=I.elements[6],P.__data[9]=I.elements[7],P.__data[10]=I.elements[8],P.__data[11]=I.elements[0]):(I.toArray(P.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,v,P.__data)}}o.bindBuffer(35345,null)}function p(M,x,b){let y=M.value;if(b[x]===void 0){if(typeof y=="number")b[x]=y;else{let A=Array.isArray(y)?y:[y],R=[];for(let P=0;P<A.length;P++)R.push(A[P].clone());b[x]=R}return!0}else if(typeof y=="number"){if(b[x]!==y)return b[x]=y,!0}else{let A=Array.isArray(b[x])?b[x]:[b[x]],R=Array.isArray(y)?y:[y];for(let P=0;P<A.length;P++){let v=A[P];if(v.equals(R[P])===!1)return v.copy(R[P]),!0}}return!1}function _(M){let x=M.uniforms,b=0,y=16,A=0;for(let R=0,P=x.length;R<P;R++){let v=x[R],T={boundary:0,storage:0},z=Array.isArray(v.value)?v.value:[v.value];for(let k=0,I=z.length;k<I;k++){let O=z[k],N=g(O);T.boundary+=N.boundary,T.storage+=N.storage}if(v.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=b,R>0){A=b%y;let k=y-A;A!==0&&k-T.boundary<0&&(b+=y-A,v.__offset=b)}b+=T.storage}return A=b%y,A>0&&(b+=y-A),M.__size=b,M.__cache={},this}function g(M){let x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){let x=M.target;x.removeEventListener("dispose",m);let b=r.indexOf(x.__bindingPointIndex);r.splice(b,1),o.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(let M in i)o.deleteBuffer(i[M]);r=[],i={},s={}}return{bind:c,update:l,dispose:d}}function _0(){let o=Js("canvas");return o.style.display="block",o}var Qs=class{constructor(t={}){let{canvas:e=_0(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=r;let p=null,_=null,g=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=wi,this.useLegacyLights=!0,this.toneMapping=zn,this.toneMappingExposure=1;let d=this,M=!1,x=0,b=0,y=null,A=-1,R=null,P=new Wt,v=new Wt,T=null,z=e.width,k=e.height,I=1,O=null,N=null,Z=new Wt(0,0,z,k),X=new Wt(0,0,z,k),B=!1,j=new Ks,K=!1,rt=!1,at=null,V=new Zt,J=new D,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return y===null?I:1}let C=n;function nt(w,F){for(let G=0;G<w.length;G++){let U=w[G],Y=e.getContext(U,F);if(Y!==null)return Y}return null}try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jo}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",Bt,!1),C===null){let F=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&F.shift(),C=nt(F,w),C===null)throw nt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ut,et,pt,Pt,xt,Et,he,pe,ue,ae,kt,jt,Ue,E,S,H,tt,it,lt,bt,dt,q,mt,vt;function Mt(){ut=new Fg(C),et=new Ig(C,ut,t),ut.init(et),q=new d0(C,ut,et),pt=new u0(C,ut,et),Pt=new Vg,xt=new Q_,Et=new f0(C,ut,pt,xt,et,q,Pt),he=new Og(d),pe=new zg(d),ue=new Qd(C,et),mt=new Rg(C,ut,ue,et),ae=new kg(C,ue,Pt,mt),kt=new Xg(C,ae,ue,Pt),lt=new Wg(C,et,Et),H=new Dg(xt),jt=new K_(d,he,pe,ut,et,mt,H),Ue=new m0(d,xt),E=new e0,S=new o0(ut,et),it=new Pg(d,he,pe,pt,kt,f,c),tt=new h0(d,kt,et),vt=new g0(C,Pt,et,pt),bt=new Lg(C,ut,Pt,et),dt=new Bg(C,ut,Pt,et),Pt.programs=jt.programs,d.capabilities=et,d.extensions=ut,d.properties=xt,d.renderLists=E,d.shadowMap=tt,d.state=pt,d.info=Pt}Mt();let ft=new Ro(d,C);this.xr=ft,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=ut.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ut.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(w){w!==void 0&&(I=w,this.setSize(z,k,!1))},this.getSize=function(w){return w.set(z,k)},this.setSize=function(w,F,G=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,k=F,e.width=Math.floor(w*I),e.height=Math.floor(F*I),G===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(z*I,k*I).floor()},this.setDrawingBufferSize=function(w,F,G){z=w,k=F,I=G,e.width=Math.floor(w*G),e.height=Math.floor(F*G),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,F,G,U){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,F,G,U),pt.viewport(P.copy(Z).multiplyScalar(I).floor())},this.getScissor=function(w){return w.copy(X)},this.setScissor=function(w,F,G,U){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,F,G,U),pt.scissor(v.copy(X).multiplyScalar(I).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(w){pt.setScissorTest(B=w)},this.setOpaqueSort=function(w){O=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(w=!0,F=!0,G=!0){let U=0;w&&(U|=16384),F&&(U|=256),G&&(U|=1024),C.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Bt,!1),E.dispose(),S.dispose(),xt.dispose(),he.dispose(),pe.dispose(),kt.dispose(),mt.dispose(),vt.dispose(),jt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",_t),ft.removeEventListener("sessionend",Xt),at&&(at.dispose(),at=null),Yt.stop()};function gt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let w=Pt.autoReset,F=tt.enabled,G=tt.autoUpdate,U=tt.needsUpdate,Y=tt.type;Mt(),Pt.autoReset=w,tt.enabled=F,tt.autoUpdate=G,tt.needsUpdate=U,tt.type=Y}function Bt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function te(w){let F=w.target;F.removeEventListener("dispose",te),L(F)}function L(w){W(w),xt.remove(w)}function W(w){let F=xt.get(w).programs;F!==void 0&&(F.forEach(function(G){jt.releaseProgram(G)}),w.isShaderMaterial&&jt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,G,U,Y,yt){F===null&&(F=st);let St=Y.isMesh&&Y.matrixWorld.determinant()<0,wt=cf(w,F,G,U,Y);pt.setMaterial(U,St);let At=G.index,Rt=1;U.wireframe===!0&&(At=ae.getWireframeAttribute(G),Rt=2);let Lt=G.drawRange,Dt=G.attributes.position,Vt=Lt.start*Rt,Ae=(Lt.start+Lt.count)*Rt;yt!==null&&(Vt=Math.max(Vt,yt.start*Rt),Ae=Math.min(Ae,(yt.start+yt.count)*Rt)),At!==null?(Vt=Math.max(Vt,0),Ae=Math.min(Ae,At.count)):Dt!=null&&(Vt=Math.max(Vt,0),Ae=Math.min(Ae,Dt.count));let ln=Ae-Vt;if(ln<0||ln===1/0)return;mt.setup(Y,U,wt,G,At);let fi,ne=bt;if(At!==null&&(fi=ue.get(At),ne=dt,ne.setIndex(fi)),Y.isMesh)U.wireframe===!0?(pt.setLineWidth(U.wireframeLinewidth*ct()),ne.setMode(1)):ne.setMode(4);else if(Y.isLine){let Nt=U.linewidth;Nt===void 0&&(Nt=1),pt.setLineWidth(Nt*ct()),Y.isLineSegments?ne.setMode(1):Y.isLineLoop?ne.setMode(2):ne.setMode(3)}else Y.isPoints?ne.setMode(0):Y.isSprite&&ne.setMode(4);if(Y.isInstancedMesh)ne.renderInstances(Vt,ln,Y.count);else if(G.isInstancedBufferGeometry){let Nt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Aa=Math.min(G.instanceCount,Nt);ne.renderInstances(Vt,ln,Aa)}else ne.render(Vt,ln)},this.compile=function(w,F){function G(U,Y,yt){U.transparent===!0&&U.side===Nn&&U.forceSinglePass===!1?(U.side=ze,U.needsUpdate=!0,mr(U,Y,yt),U.side=Kn,U.needsUpdate=!0,mr(U,Y,yt),U.side=Nn):mr(U,Y,yt)}_=S.get(w),_.init(),m.push(_),w.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(_.pushLight(U),U.castShadow&&_.pushShadow(U))}),_.setupLights(d.useLegacyLights),w.traverse(function(U){let Y=U.material;if(Y)if(Array.isArray(Y))for(let yt=0;yt<Y.length;yt++){let St=Y[yt];G(St,w,U)}else G(Y,w,U)}),m.pop(),_=null};let Q=null;function ht(w){Q&&Q(w)}function _t(){Yt.stop()}function Xt(){Yt.start()}let Yt=new Gh;Yt.setAnimationLoop(ht),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(w){Q=w,ft.setAnimationLoop(w),w===null?Yt.stop():Yt.start()},ft.addEventListener("sessionstart",_t),ft.addEventListener("sessionend",Xt),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(F),F=ft.getCamera()),w.isScene===!0&&w.onBeforeRender(d,w,F,y),_=S.get(w,m.length),_.init(),m.push(_),V.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(V),rt=this.localClippingEnabled,K=H.init(this.clippingPlanes,rt),p=E.get(w,g.length),p.init(),g.push(p),xe(w,F,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(O,N),K===!0&&H.beginShadows();let G=_.state.shadowsArray;if(tt.render(G,w,F),K===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(p,w),_.setupLights(d.useLegacyLights),F.isArrayCamera){let U=F.cameras;for(let Y=0,yt=U.length;Y<yt;Y++){let St=U[Y];Xn(p,w,St,St.viewport)}}else Xn(p,w,F);y!==null&&(Et.updateMultisampleRenderTarget(y),Et.updateRenderTargetMipmap(y)),w.isScene===!0&&w.onAfterRender(d,w,F),mt.resetDefaultState(),A=-1,R=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function xe(w,F,G,U){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){U&&J.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);let St=kt.update(w),wt=w.material;wt.visible&&p.push(w,St,wt,G,J.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Pt.render.frame&&(w.skeleton.update(),w.skeleton.frame=Pt.render.frame),!w.frustumCulled||j.intersectsObject(w))){U&&J.setFromMatrixPosition(w.matrixWorld).applyMatrix4(V);let St=kt.update(w),wt=w.material;if(Array.isArray(wt)){let At=St.groups;for(let Rt=0,Lt=At.length;Rt<Lt;Rt++){let Dt=At[Rt],Vt=wt[Dt.materialIndex];Vt&&Vt.visible&&p.push(w,St,Vt,G,J.z,Dt)}}else wt.visible&&p.push(w,St,wt,G,J.z,null)}}let yt=w.children;for(let St=0,wt=yt.length;St<wt;St++)xe(yt[St],F,G,U)}function Xn(w,F,G,U){let Y=w.opaque,yt=w.transmissive,St=w.transparent;_.setupLightsView(G),K===!0&&H.setGlobalState(d.clippingPlanes,G),yt.length>0&&ee(Y,yt,F,G),U&&pt.viewport(P.copy(U)),Y.length>0&&Je(Y,F,G),yt.length>0&&Je(yt,F,G),St.length>0&&Je(St,F,G),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function ee(w,F,G,U){if(at===null){let wt=et.isWebGL2;at=new Fn(1024,1024,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")?qs:Si,minFilter:Xs,samples:wt&&a===!0?4:0})}let Y=d.getRenderTarget();d.setRenderTarget(at),d.clear();let yt=d.toneMapping;d.toneMapping=zn,Je(w,G,U),Et.updateMultisampleRenderTarget(at),Et.updateRenderTargetMipmap(at);let St=!1;for(let wt=0,At=F.length;wt<At;wt++){let Rt=F[wt],Lt=Rt.object,Dt=Rt.geometry,Vt=Rt.material,Ae=Rt.group;if(Vt.side===Nn&&Lt.layers.test(U.layers)){let ln=Vt.side;Vt.side=ze,Vt.needsUpdate=!0,_n(Lt,G,U,Dt,Vt,Ae),Vt.side=ln,Vt.needsUpdate=!0,St=!0}}St===!0&&(Et.updateMultisampleRenderTarget(at),Et.updateRenderTargetMipmap(at)),d.setRenderTarget(Y),d.toneMapping=yt}function Je(w,F,G){let U=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,yt=w.length;Y<yt;Y++){let St=w[Y],wt=St.object,At=St.geometry,Rt=U===null?St.material:U,Lt=St.group;wt.layers.test(G.layers)&&_n(wt,F,G,At,Rt,Lt)}}function _n(w,F,G,U,Y,yt){w.onBeforeRender(d,F,G,U,Y,yt),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(d,F,G,U,w,yt),Y.transparent===!0&&Y.side===Nn&&Y.forceSinglePass===!1?(Y.side=ze,Y.needsUpdate=!0,d.renderBufferDirect(G,F,U,Y,w,yt),Y.side=Kn,Y.needsUpdate=!0,d.renderBufferDirect(G,F,U,Y,w,yt),Y.side=Nn):d.renderBufferDirect(G,F,U,Y,w,yt),w.onAfterRender(d,F,G,U,Y,yt)}function mr(w,F,G){F.isScene!==!0&&(F=st);let U=xt.get(w),Y=_.state.lights,yt=_.state.shadowsArray,St=Y.state.version,wt=jt.getParameters(w,Y.state,yt,F,G),At=jt.getProgramCacheKey(wt),Rt=U.programs;U.environment=w.isMeshStandardMaterial?F.environment:null,U.fog=F.fog,U.envMap=(w.isMeshStandardMaterial?pe:he).get(w.envMap||U.environment),Rt===void 0&&(w.addEventListener("dispose",te),Rt=new Map,U.programs=Rt);let Lt=Rt.get(At);if(Lt!==void 0){if(U.currentProgram===Lt&&U.lightsStateVersion===St)return nc(w,wt),Lt}else wt.uniforms=jt.getUniforms(w),w.onBuild(G,wt,d),w.onBeforeCompile(wt,d),Lt=jt.acquireProgram(wt,At),Rt.set(At,Lt),U.uniforms=wt.uniforms;let Dt=U.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Dt.clippingPlanes=H.uniform),nc(w,wt),U.needsLights=uf(w),U.lightsStateVersion=St,U.needsLights&&(Dt.ambientLightColor.value=Y.state.ambient,Dt.lightProbe.value=Y.state.probe,Dt.directionalLights.value=Y.state.directional,Dt.directionalLightShadows.value=Y.state.directionalShadow,Dt.spotLights.value=Y.state.spot,Dt.spotLightShadows.value=Y.state.spotShadow,Dt.rectAreaLights.value=Y.state.rectArea,Dt.ltc_1.value=Y.state.rectAreaLTC1,Dt.ltc_2.value=Y.state.rectAreaLTC2,Dt.pointLights.value=Y.state.point,Dt.pointLightShadows.value=Y.state.pointShadow,Dt.hemisphereLights.value=Y.state.hemi,Dt.directionalShadowMap.value=Y.state.directionalShadowMap,Dt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Dt.spotShadowMap.value=Y.state.spotShadowMap,Dt.spotLightMatrix.value=Y.state.spotLightMatrix,Dt.spotLightMap.value=Y.state.spotLightMap,Dt.pointShadowMap.value=Y.state.pointShadowMap,Dt.pointShadowMatrix.value=Y.state.pointShadowMatrix);let Vt=Lt.getUniforms(),Ae=ls.seqWithValue(Vt.seq,Dt);return U.currentProgram=Lt,U.uniformsList=Ae,Lt}function nc(w,F){let G=xt.get(w);G.outputEncoding=F.outputEncoding,G.instancing=F.instancing,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function cf(w,F,G,U,Y){F.isScene!==!0&&(F=st),Et.resetTextureUnits();let yt=F.fog,St=U.isMeshStandardMaterial?F.environment:null,wt=y===null?d.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:wi,At=(U.isMeshStandardMaterial?pe:he).get(U.envMap||St),Rt=U.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Lt=!!U.normalMap&&!!G.attributes.tangent,Dt=!!G.morphAttributes.position,Vt=!!G.morphAttributes.normal,Ae=!!G.morphAttributes.color,ln=U.toneMapped?d.toneMapping:zn,fi=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ne=fi!==void 0?fi.length:0,Nt=xt.get(U),Aa=_.state.lights;if(K===!0&&(rt===!0||w!==R)){let He=w===R&&U.id===A;H.setState(U,w,He)}let fe=!1;U.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Aa.state.version||Nt.outputEncoding!==wt||Y.isInstancedMesh&&Nt.instancing===!1||!Y.isInstancedMesh&&Nt.instancing===!0||Y.isSkinnedMesh&&Nt.skinning===!1||!Y.isSkinnedMesh&&Nt.skinning===!0||Nt.envMap!==At||U.fog===!0&&Nt.fog!==yt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==H.numPlanes||Nt.numIntersection!==H.numIntersection)||Nt.vertexAlphas!==Rt||Nt.vertexTangents!==Lt||Nt.morphTargets!==Dt||Nt.morphNormals!==Vt||Nt.morphColors!==Ae||Nt.toneMapping!==ln||et.isWebGL2===!0&&Nt.morphTargetsCount!==ne)&&(fe=!0):(fe=!0,Nt.__version=U.version);let di=Nt.currentProgram;fe===!0&&(di=mr(U,F,Y));let ic=!1,Ds=!1,Ca=!1,Ce=di.getUniforms(),pi=Nt.uniforms;if(pt.useProgram(di.program)&&(ic=!0,Ds=!0,Ca=!0),U.id!==A&&(A=U.id,Ds=!0),ic||R!==w){if(Ce.setValue(C,"projectionMatrix",w.projectionMatrix),et.logarithmicDepthBuffer&&Ce.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),R!==w&&(R=w,Ds=!0,Ca=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){let He=Ce.map.cameraPosition;He!==void 0&&He.setValue(C,J.setFromMatrixPosition(w.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ce.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Y.isSkinnedMesh)&&Ce.setValue(C,"viewMatrix",w.matrixWorldInverse)}if(Y.isSkinnedMesh){Ce.setOptional(C,Y,"bindMatrix"),Ce.setOptional(C,Y,"bindMatrixInverse");let He=Y.skeleton;He&&(et.floatVertexTextures?(He.boneTexture===null&&He.computeBoneTexture(),Ce.setValue(C,"boneTexture",He.boneTexture,Et),Ce.setValue(C,"boneTextureSize",He.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let Pa=G.morphAttributes;if((Pa.position!==void 0||Pa.normal!==void 0||Pa.color!==void 0&&et.isWebGL2===!0)&&lt.update(Y,G,di),(Ds||Nt.receiveShadow!==Y.receiveShadow)&&(Nt.receiveShadow=Y.receiveShadow,Ce.setValue(C,"receiveShadow",Y.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(pi.envMap.value=At,pi.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Ds&&(Ce.setValue(C,"toneMappingExposure",d.toneMappingExposure),Nt.needsLights&&hf(pi,Ca),yt&&U.fog===!0&&Ue.refreshFogUniforms(pi,yt),Ue.refreshMaterialUniforms(pi,U,I,k,at),ls.upload(C,Nt.uniformsList,pi,Et)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ls.upload(C,Nt.uniformsList,pi,Et),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ce.setValue(C,"center",Y.center),Ce.setValue(C,"modelViewMatrix",Y.modelViewMatrix),Ce.setValue(C,"normalMatrix",Y.normalMatrix),Ce.setValue(C,"modelMatrix",Y.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let He=U.uniformsGroups;for(let Ra=0,ff=He.length;Ra<ff;Ra++)if(et.isWebGL2){let sc=He[Ra];vt.update(sc,di),vt.bind(sc,di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return di}function hf(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function uf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(w,F,G){xt.get(w.texture).__webglTexture=F,xt.get(w.depthTexture).__webglTexture=G;let U=xt.get(w);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=G===void 0,U.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){let G=xt.get(w);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,G=0){y=w,x=F,b=G;let U=!0,Y=null,yt=!1,St=!1;if(w){let At=xt.get(w);At.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(36160,null),U=!1):At.__webglFramebuffer===void 0?Et.setupRenderTarget(w):At.__hasExternalTextures&&Et.rebindTextures(w,xt.get(w.texture).__webglTexture,xt.get(w.depthTexture).__webglTexture);let Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(St=!0);let Lt=xt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Y=Lt[F],yt=!0):et.isWebGL2&&w.samples>0&&Et.useMultisampledRTT(w)===!1?Y=xt.get(w).__webglMultisampledFramebuffer:Y=Lt,P.copy(w.viewport),v.copy(w.scissor),T=w.scissorTest}else P.copy(Z).multiplyScalar(I).floor(),v.copy(X).multiplyScalar(I).floor(),T=B;if(pt.bindFramebuffer(36160,Y)&&et.drawBuffers&&U&&pt.drawBuffers(w,Y),pt.viewport(P),pt.scissor(v),pt.setScissorTest(T),yt){let At=xt.get(w.texture);C.framebufferTexture2D(36160,36064,34069+F,At.__webglTexture,G)}else if(St){let At=xt.get(w.texture),Rt=F||0;C.framebufferTextureLayer(36160,36064,At.__webglTexture,G||0,Rt)}A=-1},this.readRenderTargetPixels=function(w,F,G,U,Y,yt,St){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt){pt.bindFramebuffer(36160,wt);try{let At=w.texture,Rt=At.format,Lt=At.type;if(Rt!==dn&&q.convert(Rt)!==C.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Dt=Lt===qs&&(ut.has("EXT_color_buffer_half_float")||et.isWebGL2&&ut.has("EXT_color_buffer_float"));if(Lt!==Si&&q.convert(Lt)!==C.getParameter(35738)&&!(Lt===Mi&&(et.isWebGL2||ut.has("OES_texture_float")||ut.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-U&&G>=0&&G<=w.height-Y&&C.readPixels(F,G,U,Y,q.convert(Rt),q.convert(Lt),yt)}finally{let At=y!==null?xt.get(y).__webglFramebuffer:null;pt.bindFramebuffer(36160,At)}}},this.copyFramebufferToTexture=function(w,F,G=0){let U=Math.pow(2,-G),Y=Math.floor(F.image.width*U),yt=Math.floor(F.image.height*U);Et.setTexture2D(F,0),C.copyTexSubImage2D(3553,G,0,0,w.x,w.y,Y,yt),pt.unbindTexture()},this.copyTextureToTexture=function(w,F,G,U=0){let Y=F.image.width,yt=F.image.height,St=q.convert(G.format),wt=q.convert(G.type);Et.setTexture2D(G,0),C.pixelStorei(37440,G.flipY),C.pixelStorei(37441,G.premultiplyAlpha),C.pixelStorei(3317,G.unpackAlignment),F.isDataTexture?C.texSubImage2D(3553,U,w.x,w.y,Y,yt,St,wt,F.image.data):F.isCompressedTexture?C.compressedTexSubImage2D(3553,U,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,St,F.mipmaps[0].data):C.texSubImage2D(3553,U,w.x,w.y,St,wt,F.image),U===0&&G.generateMipmaps&&C.generateMipmap(3553),pt.unbindTexture()},this.copyTextureToTexture3D=function(w,F,G,U,Y=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let yt=w.max.x-w.min.x+1,St=w.max.y-w.min.y+1,wt=w.max.z-w.min.z+1,At=q.convert(U.format),Rt=q.convert(U.type),Lt;if(U.isData3DTexture)Et.setTexture3D(U,0),Lt=32879;else if(U.isDataArrayTexture)Et.setTexture2DArray(U,0),Lt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(37440,U.flipY),C.pixelStorei(37441,U.premultiplyAlpha),C.pixelStorei(3317,U.unpackAlignment);let Dt=C.getParameter(3314),Vt=C.getParameter(32878),Ae=C.getParameter(3316),ln=C.getParameter(3315),fi=C.getParameter(32877),ne=G.isCompressedTexture?G.mipmaps[0]:G.image;C.pixelStorei(3314,ne.width),C.pixelStorei(32878,ne.height),C.pixelStorei(3316,w.min.x),C.pixelStorei(3315,w.min.y),C.pixelStorei(32877,w.min.z),G.isDataTexture||G.isData3DTexture?C.texSubImage3D(Lt,Y,F.x,F.y,F.z,yt,St,wt,At,Rt,ne.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Lt,Y,F.x,F.y,F.z,yt,St,wt,At,ne.data)):C.texSubImage3D(Lt,Y,F.x,F.y,F.z,yt,St,wt,At,Rt,ne),C.pixelStorei(3314,Dt),C.pixelStorei(32878,Vt),C.pixelStorei(3316,Ae),C.pixelStorei(3315,ln),C.pixelStorei(32877,fi),Y===0&&U.generateMipmaps&&C.generateMipmap(Lt),pt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Et.setTextureCube(w,0):w.isData3DTexture?Et.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Et.setTexture2DArray(w,0):Et.setTexture2D(w,0),pt.unbindTexture()},this.resetState=function(){x=0,b=0,y=null,pt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}},Lo=class extends Qs{};Lo.prototype.isWebGL1Renderer=!0;var Jr=class extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}};var $r=class extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Sh=new D,wh=new D,Th=new Zt,ro=new $s,Nr=new fs,Io=class extends me{constructor(t=new pn,e=new $r){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Sh.fromBufferAttribute(e,i-1),wh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Sh.distanceTo(wh);t.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Nr.radius+=s,t.ray.intersectsSphere(Nr)===!1)return;Th.copy(i).invert(),ro.copy(t.ray).applyMatrix4(Th);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new D,h=new D,u=new D,f=new D,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){let d=Math.max(0,r.start),M=Math.min(_.count,r.start+r.count);for(let x=d,b=M-1;x<b;x+=p){let y=_.getX(x),A=_.getX(x+1);if(l.fromBufferAttribute(m,y),h.fromBufferAttribute(m,A),ro.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let P=t.ray.origin.distanceTo(f);P<t.near||P>t.far||e.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,r.start),M=Math.min(m.count,r.start+r.count);for(let x=d,b=M-1;x<b;x+=p){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),ro.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},Eh=new D,Ah=new D,Do=class extends Io{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Eh.fromBufferAttribute(e,i),Ah.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Eh.distanceTo(Ah);t.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var jr=class extends Qn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function $n(o,t,e){return Zh(o)?new o.constructor(o.subarray(t,e!==void 0?e:o.length)):o.slice(t,e)}function zr(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function Zh(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}var ms=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}for(;n<r;){let a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oo=class extends ms{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],c=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case zc:s=t,a=2*e-n;break;case Fc:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zc:r=t,c=2*n-e;break;case Fc:r=1,c=n+i[1]-i[0];break;default:r=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,d=-f*m+2*f*g-f*_,M=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,x=(-1-p)*m+(1.5+p)*g+.5*_,b=p*m-p*g;for(let y=0;y!==a;++y)s[y]=d*r[h+y]+M*r[l+y]+x*r[c+y]+b*r[u+y];return s}},Uo=class extends ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=r[l+f]*u+r[c+f]*h;return s}},No=class extends ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},mn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zr(e,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zr(t.times,Array),values:zr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new No(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fr:e=this.InterpolantFactoryMethodDiscrete;break;case kr:e=this.InterpolantFactoryMethodLinear;break;case za:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<t;)++s;for(;r!==-1&&n[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let a=this.getValueSize();this.times=$n(n,s,r),this.values=$n(this.values,s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,r),t=!1;break}r=c}if(i!==void 0&&Zh(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=$n(this.times),e=$n(this.values),n=this.getValueSize(),i=this.getInterpolation()===za,s=t.length-1,r=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,f=u-n,p=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[f+_]||g!==e[p+_]){c=!0;break}}}if(c){if(a!==r){t[r]=t[a];let u=a*n,f=r*n;for(let p=0;p!==n;++p)e[f+p]=e[u+p]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,c=r*n,l=0;l!==n;++l)e[c+l]=e[a+l];++r}return r!==t.length?(this.times=$n(t,0,r),this.values=$n(e,0,r*n)):(this.times=t,this.values=e),this}clone(){let t=$n(this.times,0),e=$n(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=kr;var Ci=class extends mn{};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Fr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends mn{};zo.prototype.ValueTypeName="color";var Fo=class extends mn{};Fo.prototype.ValueTypeName="number";var ko=class extends ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)bn.slerpFlat(s,0,r,l-a,r,l,c);return s}},tr=class extends mn{InterpolantFactoryMethodLinear(t){return new ko(this.times,this.values,this.getValueSize(),t)}};tr.prototype.ValueTypeName="quaternion";tr.prototype.DefaultInterpolation=kr;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends mn{};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Fr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends mn{};Bo.prototype.ValueTypeName="vector";var Kr={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}},Vo=class{constructor(t,e,n){let i=this,s=!1,r=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},x0=new Vo,er=class{constructor(t){this.manager=t!==void 0?t:x0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}},On={},Ho=class extends Error{constructor(t,e){super(t),this.response=e}},Qr=class extends er{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=Kr.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(On[t]!==void 0){On[t].push({onLoad:e,onProgress:n,onError:i});return}On[t]=[],On[t].push({onLoad:e,onProgress:n,onError:i});let r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=On[t],u=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,_=p!==0,g=0,m=new ReadableStream({start(d){M();function M(){u.read().then(({done:x,value:b})=>{if(x)d.close();else{g+=b.byteLength;let y=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let A=0,R=h.length;A<R;A++){let P=h[A];P.onProgress&&P.onProgress(y)}d.enqueue(b),M()}})}}});return new Response(m)}else throw new Ho(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{Kr.add(t,l);let h=On[t];delete On[t];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=On[t];if(h===void 0)throw this.manager.itemError(t),l;delete On[t];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Go=class extends er{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,r=Kr.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;let a=Js("img");function c(){h(),Kr.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}};var ta=class extends er{constructor(t){super(t)}load(t,e,n,i){let s=new be,r=new Go(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},Wo=class extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var ao=new Zt,Ch=new D,Ph=new D,Xo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ch),Ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ph),e.updateMatrixWorld(),ao.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ao),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Rh=new Zt,Fs=new D,oo=new D,qo=class extends Xo{constructor(){super(new Me(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Fs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fs),oo.copy(n.position),oo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(oo),n.updateMatrixWorld(),i.makeTranslation(-Fs.x,-Fs.y,-Fs.z),Rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh)}},ea=class extends Wo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var tl="\\[\\]\\.:\\/",v0=new RegExp("["+tl+"]","g"),el="[^"+tl+"]",y0="[^"+tl.replace("\\.","")+"]",M0=/((?:WC+[\/:])*)/.source.replace("WC",el),b0=/(WCOD+)?/.source.replace("WCOD",y0),S0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",el),w0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",el),T0=new RegExp("^"+M0+b0+S0+w0+"$"),E0=["material","materials","bones","map"],Yo=class{constructor(t,e,n){let i=n||Ft.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ft=class{constructor(t,e,n){this.path=e,this.parsedPath=n||Ft.parseTrackName(e),this.node=Ft.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Ft.Composite(t,e,n):new Ft(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(v0,"")}static parseTrackName(t){let e=T0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);E0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=Ft.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Yo;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yv=new Float32Array(1);var na=class{constructor(t,e,n=0,i=1/0){this.ray=new $s(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Zo(t,this,n,e),n.sort(Lh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Zo(t[i],this,n,e);return n.sort(Lh),n}};function Lh(o,t){return o.distance-t.distance}function Zo(o,t,e,n){if(o.layers.test(t.layers)&&o.raycast(t,e),n===!0){let i=o.children;for(let s=0,r=i.length;s<r;s++)Zo(i[s],t,e,!0)}}var ia=class extends Do{constructor(t=10,e=10,n=4473924,i=8947848){n=new zt(n),i=new zt(i);let s=e/2,r=t/e,a=t/2,c=[],l=[];for(let f=0,p=0,_=-a;f<=e;f++,_+=r){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);let g=f===s?n:i;g.toArray(l,p),p+=3,g.toArray(l,p),p+=3,g.toArray(l,p),p+=3,g.toArray(l,p),p+=3}let h=new pn;h.setAttribute("position",new Ye(c,3)),h.setAttribute("color",new Ye(l,3));let u=new $r({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);var nl={type:"change"},il={type:"start"},sl={type:"end"},aa=class extends Mn{constructor(t,e){super();let n=this,i={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:ti.ROTATE,MIDDLE:ti.DOLLY,RIGHT:ti.PAN},this.target=new D;let s=1e-6,r=new D,a=1,c=i.NONE,l=i.NONE,h=0,u=0,f=0,p=new D,_=new Tt,g=new Tt,m=new D,d=new Tt,M=new Tt,x=new Tt,b=new Tt,y=[],A={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){let C=n.domElement.getBoundingClientRect(),nt=n.domElement.ownerDocument.documentElement;n.screen.left=C.left+window.pageXOffset-nt.clientLeft,n.screen.top=C.top+window.pageYOffset-nt.clientTop,n.screen.width=C.width,n.screen.height=C.height};let R=function(){let C=new Tt;return function(ut,et){return C.set((ut-n.screen.left)/n.screen.width,(et-n.screen.top)/n.screen.height),C}}(),P=function(){let C=new Tt;return function(ut,et){return C.set((ut-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-et))/n.screen.width),C}}();this.rotateCamera=function(){let C=new D,nt=new bn,ut=new D,et=new D,pt=new D,Pt=new D;return function(){Pt.set(g.x-_.x,g.y-_.y,0);let Et=Pt.length();Et?(p.copy(n.object.position).sub(n.target),ut.copy(p).normalize(),et.copy(n.object.up).normalize(),pt.crossVectors(et,ut).normalize(),et.setLength(g.y-_.y),pt.setLength(g.x-_.x),Pt.copy(et.add(pt)),C.crossVectors(Pt,p).normalize(),Et*=n.rotateSpeed,nt.setFromAxisAngle(C,Et),p.applyQuaternion(nt),n.object.up.applyQuaternion(nt),m.copy(C),f=Et):!n.staticMoving&&f&&(f*=Math.sqrt(1-n.dynamicDampingFactor),p.copy(n.object.position).sub(n.target),nt.setFromAxisAngle(m,f),p.applyQuaternion(nt),n.object.up.applyQuaternion(nt)),_.copy(g)}}(),this.zoomCamera=function(){let C;c===i.TOUCH_ZOOM_PAN?(C=h/u,h=u,n.object.isPerspectiveCamera?p.multiplyScalar(C):n.object.isOrthographicCamera?(n.object.zoom=Ko.clamp(n.object.zoom/C,n.minZoom,n.maxZoom),a!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(C=1+(M.y-d.y)*n.zoomSpeed,C!==1&&C>0&&(n.object.isPerspectiveCamera?p.multiplyScalar(C):n.object.isOrthographicCamera?(n.object.zoom=Ko.clamp(n.object.zoom/C,n.minZoom,n.maxZoom),a!==n.object.zoom&&n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?d.copy(M):d.y+=(M.y-d.y)*this.dynamicDampingFactor)},this.panCamera=function(){let C=new Tt,nt=new D,ut=new D;return function(){if(C.copy(b).sub(x),C.lengthSq()){if(n.object.isOrthographicCamera){let pt=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,Pt=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;C.x*=pt,C.y*=Pt}C.multiplyScalar(p.length()*n.panSpeed),ut.copy(p).cross(n.object.up).setLength(C.x),ut.add(nt.copy(n.object.up).setLength(C.y)),n.object.position.add(ut),n.target.add(ut),n.staticMoving?x.copy(b):x.add(C.subVectors(b,x).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(p.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,p.setLength(n.maxDistance)),d.copy(M)),p.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,p.setLength(n.minDistance)),d.copy(M)))},this.update=function(){p.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,p),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),r.distanceToSquared(n.object.position)>s&&(n.dispatchEvent(nl),r.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(r.distanceToSquared(n.object.position)>s||a!==n.object.zoom)&&(n.dispatchEvent(nl),r.copy(n.object.position),a=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=i.NONE,l=i.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),p.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(nl),r.copy(n.object.position),a=n.object.zoom};function v(C){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",z)),V(C),C.pointerType==="touch"?j(C):N(C))}function T(C){n.enabled!==!1&&(C.pointerType==="touch"?K(C):Z(C))}function z(C){n.enabled!==!1&&(C.pointerType==="touch"?rt(C):X(),J(C),y.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",z)))}function k(C){J(C)}function I(C){n.enabled!==!1&&(window.removeEventListener("keydown",I),l===i.NONE&&(C.code===n.keys[i.ROTATE]&&!n.noRotate?l=i.ROTATE:C.code===n.keys[i.ZOOM]&&!n.noZoom?l=i.ZOOM:C.code===n.keys[i.PAN]&&!n.noPan&&(l=i.PAN)))}function O(){n.enabled!==!1&&(l=i.NONE,window.addEventListener("keydown",I))}function N(C){if(c===i.NONE)switch(C.button){case n.mouseButtons.LEFT:c=i.ROTATE;break;case n.mouseButtons.MIDDLE:c=i.ZOOM;break;case n.mouseButtons.RIGHT:c=i.PAN;break}let nt=l!==i.NONE?l:c;nt===i.ROTATE&&!n.noRotate?(g.copy(P(C.pageX,C.pageY)),_.copy(g)):nt===i.ZOOM&&!n.noZoom?(d.copy(R(C.pageX,C.pageY)),M.copy(d)):nt===i.PAN&&!n.noPan&&(x.copy(R(C.pageX,C.pageY)),b.copy(x)),n.dispatchEvent(il)}function Z(C){let nt=l!==i.NONE?l:c;nt===i.ROTATE&&!n.noRotate?(_.copy(g),g.copy(P(C.pageX,C.pageY))):nt===i.ZOOM&&!n.noZoom?M.copy(R(C.pageX,C.pageY)):nt===i.PAN&&!n.noPan&&b.copy(R(C.pageX,C.pageY))}function X(){c=i.NONE,n.dispatchEvent(sl)}function B(C){if(n.enabled!==!1&&n.noZoom!==!0){switch(C.preventDefault(),C.deltaMode){case 2:d.y-=C.deltaY*.025;break;case 1:d.y-=C.deltaY*.01;break;default:d.y-=C.deltaY*25e-5;break}n.dispatchEvent(il),n.dispatchEvent(sl)}}function j(C){switch(st(C),y.length){case 1:c=i.TOUCH_ROTATE,g.copy(P(y[0].pageX,y[0].pageY)),_.copy(g);break;default:c=i.TOUCH_ZOOM_PAN;let nt=y[0].pageX-y[1].pageX,ut=y[0].pageY-y[1].pageY;u=h=Math.sqrt(nt*nt+ut*ut);let et=(y[0].pageX+y[1].pageX)/2,pt=(y[0].pageY+y[1].pageY)/2;x.copy(R(et,pt)),b.copy(x);break}n.dispatchEvent(il)}function K(C){switch(st(C),y.length){case 1:_.copy(g),g.copy(P(C.pageX,C.pageY));break;default:let nt=ct(C),ut=C.pageX-nt.x,et=C.pageY-nt.y;u=Math.sqrt(ut*ut+et*et);let pt=(C.pageX+nt.x)/2,Pt=(C.pageY+nt.y)/2;b.copy(R(pt,Pt));break}}function rt(C){switch(y.length){case 0:c=i.NONE;break;case 1:c=i.TOUCH_ROTATE,g.copy(P(C.pageX,C.pageY)),_.copy(g);break;case 2:c=i.TOUCH_ZOOM_PAN;for(let nt=0;nt<y.length;nt++)if(y[nt].pointerId!==C.pointerId){let ut=A[y[nt].pointerId];g.copy(P(ut.x,ut.y)),_.copy(g);break}break}n.dispatchEvent(sl)}function at(C){n.enabled!==!1&&C.preventDefault()}function V(C){y.push(C)}function J(C){delete A[C.pointerId];for(let nt=0;nt<y.length;nt++)if(y[nt].pointerId==C.pointerId){y.splice(nt,1);return}}function st(C){let nt=A[C.pointerId];nt===void 0&&(nt=new Tt,A[C.pointerId]=nt),nt.set(C.pageX,C.pageY)}function ct(C){let nt=C.pointerId===y[0].pointerId?y[1]:y[0];return A[nt.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",at),n.domElement.removeEventListener("pointerdown",v),n.domElement.removeEventListener("pointercancel",k),n.domElement.removeEventListener("wheel",B),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",z),window.removeEventListener("keydown",I),window.removeEventListener("keyup",O)},this.domElement.addEventListener("contextmenu",at),this.domElement.addEventListener("pointerdown",v),this.domElement.addEventListener("pointercancel",k),this.domElement.addEventListener("wheel",B,{passive:!1}),window.addEventListener("keydown",I),window.addEventListener("keyup",O),this.handleResize(),this.update()}};function Bn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function nu(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var Ve={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vs={duration:.5,overwrite:!1,delay:0},Sl,we,re,nn=1e8,Gt=1/nn,fl=Math.PI*2,C0=fl/4,P0=0,iu=Math.sqrt,R0=Math.cos,L0=Math.sin,ce=function(t){return typeof t=="string"},Kt=function(t){return typeof t=="function"},Hn=function(t){return typeof t=="number"},_a=function(t){return typeof t>"u"},wn=function(t){return typeof t=="object"},Be=function(t){return t!==!1},wl=function(){return typeof window<"u"},oa=function(t){return Kt(t)||ce(t)},su=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Te=Array.isArray,dl=/(?:-?\.?\d|\.)+/gi,Tl=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Di=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,rl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,El=/[+-]=-?[.\d]+/,ru=/[^,'"\[\]\s]+/gi,I0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jt,en,pl,Al,Ze={},ua={},au,ou=function(t){return(ua=Ii(t,Ze))&&Ee},xa=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},fa=function(t,e){return!e&&console.warn(t)},lu=function(t,e){return t&&(Ze[t]=e)&&ua&&(ua[t]=e)||Ze},or=function(){return 0},D0={suppressEvents:!0,isStart:!0,kill:!1},la={suppressEvents:!0,kill:!1},O0={suppressEvents:!0},Cl={},ni=[],ml={},cu,Fe={},al={},Jh=30,ca=[],Pl="",Rl=function(t){var e=t[0],n,i;if(wn(e)||Kt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ca.length;i--&&!ca[i].targetTest(e););n=ca[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Dl(t[i],n)))||t.splice(i,1);return t},ii=function(t){return t._gsap||Rl(sn(t))[0]._gsap},Ll=function(t,e,n){return(n=t[e])&&Kt(n)?t[e]():_a(n)&&t.getAttribute&&t.getAttribute(e)||n},Ie=function(t,e){return(t=t.split(",")).forEach(e)||t},Qt=function(t){return Math.round(t*1e5)/1e5||0},ge=function(t){return Math.round(t*1e7)/1e7||0},Oi=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},U0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},da=function(){var t=ni.length,e=ni.slice(0),n,i;for(ml={},ni.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},hu=function(t,e,n,i){ni.length&&!we&&da(),t.render(e,n,i||we&&e<0&&(t._initted||t._startAt)),ni.length&&!we&&da()},uu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ru).length<2?e:ce(t)?t.trim():t},fu=function(t){return t},an=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},N0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ii=function(t,e){for(var n in e)t[n]=e[n];return t},$h=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=wn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},pa=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},sr=function(t){var e=t.parent||Jt,n=t.keyframes?N0(Te(t.keyframes)):an;if(Be(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},z0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},du=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t[i],a;if(s)for(a=e[s];r&&r[s]>a;)r=r._prev;return r?(e._next=r._next,r._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=r,e.parent=e._dp=t,e},va=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,r=e._next;s?s._next=r:t[n]===e&&(t[n]=r),r?r._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},si=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Ri=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},F0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},gl=function(t,e,n,i){return t._startAt&&(we?t._startAt.revert(la):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},k0=function o(t){return!t||t._ts&&o(t.parent)},jh=function(t){return t._repeat?ys(t._tTime,t=t.duration()+t._rDelay)*t:0},ys=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ma=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ya=function(t){return t._end=ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||Gt)||0))},Ma=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ya(t),n._dirty||Ri(n,t)),t},pu=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=ma(t.rawTime(),e),(!e._dur||cr(0,e.totalDuration(),n)-e._tTime>Gt)&&e.render(n,!0)),Ri(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Gt}},Sn=function(t,e,n,i){return e.parent&&si(e),e._start=ge((Hn(n)?n:n||t!==Jt?tn(t,n,e):t._time)+e._delay),e._end=ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),du(t,e,"_first","_last",t._sort?"_start":0),_l(e)||(t._recent=e),i||pu(t,e),t._ts<0&&Ma(t,t._tTime),t},mu=function(t,e){return(Ze.ScrollTrigger||xa("scrollTrigger",e))&&Ze.ScrollTrigger.create(e,t)},gu=function(t,e,n,i,s){if(Nl(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!we&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&cu!==ke.frame)return ni.push(t),t._lazy=[s,i],1},B0=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},_l=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},V0=function(t,e,n,i){var s=t.ratio,r=e<0||!e&&(!t._start&&B0(t)&&!(!t._initted&&_l(t))||(t._ts<0||t._dp._ts<0)&&!_l(t))?0:1,a=t._rDelay,c=0,l,h,u;if(a&&t._repeat&&(c=cr(0,t._tDur,e),h=ys(c,a),t._yoyo&&h&1&&(r=1-r),h!==ys(t._tTime,a)&&(s=1-r,t.vars.repeatRefresh&&t._initted&&t.invalidate())),r!==s||we||i||t._zTime===Gt||!e&&t._zTime){if(!t._initted&&gu(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?Gt:0),n||(n=e&&!u),t.ratio=r,t._from&&(r=1-r),t._time=0,t._tTime=c,l=t._pt;l;)l.r(r,l.d),l=l._next;e<0&&gl(t,e,n,!0),t._onUpdate&&!n&&rn(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&rn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===r&&(r&&si(t,1),!n&&!we&&(rn(t,r?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},H0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ms=function(t,e,n,i){var s=t._repeat,r=ge(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=r/t._dur),t._dur=r,t._tDur=s?s<0?1e10:ge(r*(s+1)+t._rDelay*s):r,a>0&&!i&&Ma(t,t._tTime=t._tDur*a),t.parent&&ya(t),n||Ri(t.parent,t),t},Kh=function(t){return t instanceof Se?Ri(t):Ms(t,t._dur)},G0={_start:0,endTime:or,totalDuration:or},tn=function o(t,e,n){var i=t.labels,s=t._recent||G0,r=t.duration()>=nn?s.endTime(!1):t._dur,a,c,l;return ce(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",a=e.indexOf("="),c==="<"||c===">"?(a>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=r),i[e]):(c=parseFloat(e.charAt(a-1)+e.substr(a+1)),l&&n&&(c=c/100*(Te(n)?n[0]:n).totalDuration()),a>1?o(t,e.substr(0,a-1),n)+c:r+c)):e==null?r:+e},rr=function(t,e,n){var i=Hn(e[1]),s=(i?2:1)+(t<2?0:1),r=e[s],a,c;if(i&&(r.duration=e[1]),r.parent=n,t){for(a=r,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=Be(c.vars.inherit)&&c.parent;r.immediateRender=Be(a.immediateRender),t<2?r.runBackwards=1:r.startAt=e[s-1]}return new se(e[0],r,e[s+1])},ri=function(t,e){return t||t===0?e(t):e},cr=function(t,e,n){return n<t?t:n>e?e:n},_e=function(t,e){return!ce(t)||!(e=I0.exec(t))?"":e[1]},W0=function(t,e,n){return ri(n,function(i){return cr(t,e,i)})},xl=[].slice,_u=function(t,e){return t&&wn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&wn(t[0]))&&!t.nodeType&&t!==en},X0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return ce(i)&&!e||_u(i,1)?(s=n).push.apply(s,sn(i)):n.push(i)})||n},sn=function(t,e,n){return re&&!e&&re.selector?re.selector(t):ce(t)&&!n&&(pl||!bs())?xl.call((e||Al).querySelectorAll(t),0):Te(t)?X0(t,n):_u(t)?xl.call(t,0):t?[t]:[]},vl=function(t){return t=sn(t)[0]||fa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return sn(e,n.querySelectorAll?n:n===t?fa("Invalid scope")||Al.createElement("div"):t)}},xu=function(t){return t.sort(function(){return .5-Math.random()})},vu=function(t){if(Kt(t))return t;var e=wn(t)?t:{each:t},n=Li(e.ease),i=e.from||0,s=parseFloat(e.base)||0,r={},a=i>0&&i<1,c=isNaN(i)||a,l=e.axis,h=i,u=i;return ce(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&c&&(h=i[0],u=i[1]),function(f,p,_){var g=(_||e).length,m=r[g],d,M,x,b,y,A,R,P,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,nn])[1],!v){for(R=-nn;R<(R=_[v++].getBoundingClientRect().left)&&v<g;);v--}for(m=r[g]=[],d=c?Math.min(v,g)*h-.5:i%v,M=v===nn?0:c?g*u/v-.5:i/v|0,R=0,P=nn,A=0;A<g;A++)x=A%v-d,b=M-(A/v|0),m[A]=y=l?Math.abs(l==="y"?b:x):iu(x*x+b*b),y>R&&(R=y),y<P&&(P=y);i==="random"&&xu(m),m.max=R-P,m.min=P,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:l?l==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=_e(e.amount||e.each)||0,n=n&&g<0?Cu(n):n}return g=(m[f]-m.min)/m.max||0,ge(m.b+(n?n(g):g)*m.v)+m.u}},yl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ge(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Hn(n)?0:_e(n))}},yu=function(t,e){var n=Te(t),i,s;return!n&&wn(t)&&(i=n=t.radius||nn,t.values?(t=sn(t.values),(s=!Hn(t[0]))&&(i*=i)):t=yl(t.increment)),ri(e,n?Kt(t)?function(r){return s=t(r),Math.abs(s-r)<=i?s:r}:function(r){for(var a=parseFloat(s?r.x:r),c=parseFloat(s?r.y:0),l=nn,h=0,u=t.length,f,p;u--;)s?(f=t[u].x-a,p=t[u].y-c,f=f*f+p*p):f=Math.abs(t[u]-a),f<l&&(l=f,h=u);return h=!i||l<=i?t[h]:r,s||h===r||Hn(r)?h:h+_e(r)}:yl(t))},Mu=function(t,e,n,i){return ri(Te(t)?!e:n===!0?!!(n=0):!i,function(){return Te(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},q0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,r){return r(s)},i)}},Y0=function(t,e){return function(n){return t(parseFloat(n))+(e||_e(n))}},Z0=function(t,e,n){return Su(t,e,0,1,n)},bu=function(t,e,n){return ri(n,function(i){return t[~~e(i)]})},J0=function o(t,e,n){var i=e-t;return Te(t)?bu(t,o(0,t.length),e):ri(n,function(s){return(i+(s-t)%i)%i+t})},$0=function o(t,e,n){var i=e-t,s=i*2;return Te(t)?bu(t,o(0,t.length-1),e):ri(n,function(r){return r=(s+(r-t)%s)%s||0,t+(r>i?s-r:r)})},Ts=function(t){for(var e=0,n="",i,s,r,a;~(i=t.indexOf("random(",e));)r=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,r-i-7).match(a?ru:dl),n+=t.substr(e,i-e)+Mu(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=r+1;return n+t.substr(e,t.length-e)},Su=function(t,e,n,i,s){var r=e-t,a=i-n;return ri(s,function(c){return n+((c-t)/r*a||0)})},j0=function o(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var r=ce(t),a={},c,l,h,u,f;if(n===!0&&(i=1)&&(n=null),r)t={p:t},e={p:e};else if(Te(t)&&!Te(e)){for(h=[],u=t.length,f=u-2,l=1;l<u;l++)h.push(o(t[l-1],t[l]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=Ii(Te(t)?[]:{},t));if(!h){for(c in e)Ol.call(a,t,c,"get",e[c]);s=function(_){return kl(_,a)||(r?t.p:t)}}}return ri(n,s)},Qh=function(t,e,n){var i=t.labels,s=nn,r,a,c;for(r in i)a=i[r]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=r,s=a);return c},rn=function(t,e,n){var i=t.vars,s=i[e],r=re,a=t._ctx,c,l,h;if(s)return c=i[e+"Params"],l=i.callbackScope||t,n&&ni.length&&da(),a&&(re=a),h=c?s.apply(l,c):s.call(l),re=r,h},nr=function(t){return si(t),t.scrollTrigger&&t.scrollTrigger.kill(!!we),t.progress()<1&&rn(t,"onInterrupt"),t},xs,wu=[],Tu=function(t){if(!wl()){wu.push(t);return}t=!t.name&&t.default||t;var e=t.name,n=Kt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:or,render:kl,add:Ol,kill:dx,modifier:fx,rawVars:0},r={targetTest:0,get:0,getSetter:ba,aliases:{},register:0};if(bs(),t!==i){if(Fe[e])return;an(i,an(pa(t,s),r)),Ii(i.prototype,Ii(s,pa(t,r))),Fe[i.prop=e]=i,t.targetTest&&(ca.push(i),Cl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}lu(e,i),t.register&&t.register(Ee,i,De)},Ht=255,ir={aqua:[0,Ht,Ht],lime:[0,Ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ht],navy:[0,0,128],white:[Ht,Ht,Ht],olive:[128,128,0],yellow:[Ht,Ht,0],orange:[Ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ht,0,0],pink:[Ht,192,203],cyan:[0,Ht,Ht],transparent:[Ht,Ht,Ht,0]},ol=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ht+.5|0},Eu=function(t,e,n){var i=t?Hn(t)?[t>>16,t>>8&Ht,t&Ht]:0:ir.black,s,r,a,c,l,h,u,f,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ir[t])i=ir[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),r=t.charAt(2),a=t.charAt(3),t="#"+s+s+r+r+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ht,i&Ht,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ht,t&Ht]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(dl),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,r=h<=.5?h*(l+1):h+l-h*l,s=h*2-r,i.length>3&&(i[3]*=1),i[0]=ol(c+1/3,s,r),i[1]=ol(c,s,r),i[2]=ol(c-1/3,s,r);else if(~t.indexOf("="))return i=t.match(Tl),n&&i.length<4&&(i[3]=1),i}else i=t.match(dl)||ir.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Ht,r=i[1]/Ht,a=i[2]/Ht,u=Math.max(s,r,a),f=Math.min(s,r,a),h=(u+f)/2,u===f?c=l=0:(p=u-f,l=h>.5?p/(2-u-f):p/(u+f),c=u===s?(r-a)/p+(r<a?6:0):u===r?(a-s)/p+2:(s-r)/p+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Au=function(t){var e=[],n=[],i=-1;return t.split(Vn).forEach(function(s){var r=s.match(Di)||[];e.push.apply(e,r),n.push(i+=r.length+1)}),e.c=n,e},tu=function(t,e,n){var i="",s=(t+i).match(Vn),r=e?"hsla(":"rgba(",a=0,c,l,h,u;if(!s)return t;if(s=s.map(function(f){return(f=Eu(f,e,1))&&r+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Au(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(Vn,"1").split(Di),u=l.length-1;a<u;a++)i+=l[a]+(~c.indexOf(a)?s.shift()||r+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=t.split(Vn),u=l.length-1;a<u;a++)i+=l[a]+s[a];return i+l[u]},Vn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ir)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),K0=/hsl[a]?\(/,Il=function(t){var e=t.join(" "),n;if(Vn.lastIndex=0,Vn.test(e))return n=K0.test(e),t[1]=tu(t[1],n),t[0]=tu(t[0],n,Au(t[1])),!0},lr,ke=function(){var o=Date.now,t=500,e=33,n=o(),i=n,s=1e3/240,r=s,a=[],c,l,h,u,f,p,_=function g(m){var d=o()-i,M=m===!0,x,b,y,A;if(d>t&&(n+=d-e),i+=d,y=i-n,x=y-r,(x>0||M)&&(A=++u.frame,f=y-u.time*1e3,u.time=y=y/1e3,r+=x+(x>=s?4:s-x),b=1),M||(c=l(g)),b)for(p=0;p<a.length;p++)a[p](y,f,A,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){au&&(!pl&&wl()&&(en=pl=window,Al=en.document||{},Ze.gsap=Ee,(en.gsapVersions||(en.gsapVersions=[])).push(Ee.version),ou(ua||en.GreenSockGlobals||!en.gsap&&en||{}),h=en.requestAnimationFrame,wu.forEach(Tu)),c&&u.sleep(),l=h||function(m){return setTimeout(m,r-u.time*1e3+1|0)},lr=1,_(2))},sleep:function(){(h?en.cancelAnimationFrame:clearTimeout)(c),lr=0,l=or},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),r=u.time*1e3+s},add:function(m,d,M){var x=d?function(b,y,A,R){m(b,y,A,R),u.remove(x)}:m;return u.remove(m),a[M?"unshift":"push"](x),bs(),x},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},u}(),bs=function(){return!lr&&ke.wake()},Ot={},Q0=/^[\d.\-M][\d.\-,\s]/,tx=/["']/g,ex=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,r=n.length,a,c,l;s<r;s++)c=n[s],a=s!==r-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),e[i]=isNaN(l)?l.replace(tx,"").trim():+l,i=c.substr(a+1).trim();return e},nx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},ix=function(t){var e=(t+"").split("("),n=Ot[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ex(e[1])]:nx(t).split(",").map(uu)):Ot._CE&&Q0.test(t)?Ot._CE("",t):n},Cu=function(t){return function(e){return 1-t(1-e)}},Pu=function o(t,e){for(var n=t._first,i;n;)n instanceof Se?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Li=function(t,e){return t&&(Kt(t)?t:Ot[t]||ix(t))||e},Ui=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},r;return Ie(t,function(a){Ot[a]=Ze[a]=s,Ot[r=a.toLowerCase()]=n;for(var c in s)Ot[r+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Ot[a+"."+c]=s[c]}),s},Ru=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ll=function o(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),r=s/fl*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*L0((h-r)*s)+1},c=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Ru(a);return s=fl/s,c.config=function(l,h){return o(t,l,h)},c},cl=function o(t,e){e===void 0&&(e=1.70158);var n=function(r){return r?--r*r*((e+1)*r+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Ru(n);return i.config=function(s){return o(t,s)},i};Ie("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Ui(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ot.Linear.easeNone=Ot.none=Ot.Linear.easeIn;Ui("Elastic",ll("in"),ll("out"),ll());(function(o,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?o*a*a:a<n?o*Math.pow(a-1.5/t,2)+.75:a<i?o*(a-=2.25/t)*a+.9375:o*Math.pow(a-2.625/t,2)+.984375};Ui("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);Ui("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Ui("Circ",function(o){return-(iu(1-o*o)-1)});Ui("Sine",function(o){return o===1?1:-R0(o*C0)+1});Ui("Back",cl("in"),cl("out"),cl());Ot.SteppedEase=Ot.steps=Ze.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,r=1-Gt;return function(a){return((i*cr(0,r,a)|0)+s)*n}}};vs.ease=Ot["quad.out"];Ie("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Pl+=o+","+o+"Params,"});var Dl=function(t,e){this.id=P0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ll,this.set=e?e.getSetter:ba},Ss=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ms(this,+e.duration,1,1),this.data=e.data,re&&(this._ctx=re,re.data.push(this)),lr||ke.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ms(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(bs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ma(this,n),!s._dp||s.parent||pu(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Sn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Gt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ys(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Gt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ma(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Gt?0:this._rts,this.totalTime(cr(-Math.abs(this._delay),this._tDur,i),!0),ya(this),F0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(bs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Gt&&(this._tTime-=Gt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Sn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Be(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ma(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=O0);var i=we;return we=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),we=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Kh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Kh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(tn(this,n),Be(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Be(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Gt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Gt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Gt)},t.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},t.then=function(n){var i=this;return new Promise(function(s){var r=Kt(n)?n:fu,a=function(){var l=i.then;i.then=null,Kt(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=l),s(r),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){nr(this)},o}();an(Ss.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Gt,_prom:0,_ps:!1,_rts:1});var Se=function(o){nu(t,o);function t(n,i){var s;return n===void 0&&(n={}),s=o.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Be(n.sortChildren),Jt&&Sn(n.parent||Jt,Bn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&mu(Bn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,r){return rr(0,arguments,this),this},e.from=function(i,s,r){return rr(1,arguments,this),this},e.fromTo=function(i,s,r,a){return rr(2,arguments,this),this},e.set=function(i,s,r){return s.duration=0,s.parent=this,sr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new se(i,s,tn(this,r),1),this},e.call=function(i,s,r){return Sn(this,se.delayedCall(0,i,s),r)},e.staggerTo=function(i,s,r,a,c,l,h){return r.duration=s,r.stagger=r.stagger||a,r.onComplete=l,r.onCompleteParams=h,r.parent=this,new se(i,r,tn(this,c)),this},e.staggerFrom=function(i,s,r,a,c,l,h){return r.runBackwards=1,sr(r).immediateRender=Be(r.immediateRender),this.staggerTo(i,s,r,a,c,l,h)},e.staggerFromTo=function(i,s,r,a,c,l,h,u){return a.startAt=r,sr(a).immediateRender=Be(a.immediateRender),this.staggerTo(i,s,a,c,l,h,u)},e.render=function(i,s,r){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:ge(i),u=this._zTime<0!=i<0&&(this._initted||!l),f,p,_,g,m,d,M,x,b,y,A,R;if(this!==Jt&&h>c&&i>=0&&(h=c),h!==this._tTime||r||u){if(a!==this._time&&l&&(h+=this._time-a,i+=this._time-a),f=h,b=this._start,x=this._ts,d=!x,u&&(l||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,r);if(f=ge(h%m),h===c?(g=this._repeat,f=l):(g=~~(h/m),g&&g===h/m&&(f=l,g--),f>l&&(f=l)),y=ys(this._tTime,m),!a&&this._tTime&&y!==g&&this._tTime-y*m-this._dur<=0&&(y=g),A&&g&1&&(f=l-f,R=1),g!==y&&!this._lock){var P=A&&y&1,v=P===(A&&g&1);if(g<y&&(P=!P),a=P?0:l,this._lock=1,this.render(a||(R?0:ge(g*m)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,v&&(this._lock=2,a=P?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Pu(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=H0(this,ge(a),ge(f)),M&&(h-=f-(f=M._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!s&&!g&&(rn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,r);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,r),f!==this._time||!this._ts&&!d){M=0,_&&(h+=this._zTime=-Gt);break}}p=_}else{p=this._last;for(var T=i<0?i:f;p;){if(_=p._prev,(p._act||T<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,r);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,r||we&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){M=0,_&&(h+=this._zTime=T?-Gt:Gt);break}}p=_}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-Gt)._zTime=f>=a?1:-1,this._ts))return this._start=b,ya(this),this.render(i,s,r);this._onUpdate&&!s&&rn(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&a)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&si(this,1),!s&&!(i<0&&!a)&&(h||a||!c)&&(rn(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var r=this;if(Hn(s)||(s=tn(this,s,i)),!(i instanceof Ss)){if(Te(i))return i.forEach(function(a){return r.add(a,s)}),this;if(ce(i))return this.addLabel(i,s);if(Kt(i))i=se.delayedCall(0,i);else return this}return this!==i?Sn(this,i,s):this},e.getChildren=function(i,s,r,a){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=-nn);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof se?s&&c.push(l):(r&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,r)))),l=l._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},e.remove=function(i){return ce(i)?this.removeLabel(i):Kt(i)?this.killTweensOf(i):(va(this,i),i===this._recent&&(this._recent=this._last),Ri(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ge(ke.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=tn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,r){var a=se.delayedCall(0,s||or,r);return a.data="isPause",this._hasPause=1,Sn(this,a,tn(this,i))},e.removePause=function(i){var s=this._first;for(i=tn(this,i);s;)s._start===i&&s.data==="isPause"&&si(s),s=s._next},e.killTweensOf=function(i,s,r){for(var a=this.getTweensOf(i,r),c=a.length;c--;)ei!==a[c]&&a[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var r=[],a=sn(i),c=this._first,l=Hn(s),h;c;)c instanceof se?U0(c._targets,a)&&(l?(!ei||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&r.push(c):(h=c.getTweensOf(a,s)).length&&r.push.apply(r,h),c=c._next;return r},e.tweenTo=function(i,s){s=s||{};var r=this,a=tn(r,i),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,f=c.immediateRender,p,_=se.to(r,an({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:r._time))/r.timeScale())||Gt,onStart:function(){if(r.pause(),!p){var m=s.duration||Math.abs((a-(l&&"time"in l?l.time:r._time))/r.timeScale());_._dur!==m&&Ms(_,m,0,1).render(_._time,!0,!0),p=1}h&&h.apply(_,u||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,r){return this.tweenTo(s,an({startAt:{time:tn(this,i)}},r))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Qh(this,tn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Qh(this,tn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Gt)},e.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var a=this._first,c=this.labels,l;a;)a._start>=r&&(a._start+=i,a._end+=i),a=a._next;if(s)for(l in c)c[l]>=r&&(c[l]+=i);return Ri(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ri(this)},e.totalDuration=function(i){var s=0,r=this,a=r._last,c=nn,l,h,u;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(u=r.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>c&&r._sort&&a._ts&&!r._lock?(r._lock=1,Sn(r,a,h-a._delay,1)._lock=0):c=h,h<0&&a._ts&&(s-=h,(!u&&!r._dp||u&&u.smoothChildTiming)&&(r._start+=h/r._ts,r._time-=h,r._tTime-=h),r.shiftChildren(-h,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;Ms(r,r===Jt&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},t.updateRoot=function(i){if(Jt._ts&&(hu(Jt,ma(i,Jt)),cu=ke.frame),ke.frame>=Jh){Jh+=Ve.autoSleep||120;var s=Jt._first;if((!s||!s._ts)&&Ve.autoSleep&&ke._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ke.sleep()}}},t}(Ss);an(Se.prototype,{_lock:0,_hasPause:0,_forcing:0});var sx=function(t,e,n,i,s,r,a){var c=new De(this._pt,t,e,0,1,Fl,null,s),l=0,h=0,u,f,p,_,g,m,d,M;for(c.b=n,c.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Ts(i)),r&&(M=[n,i],r(M,t,e),n=M[0],i=M[1]),f=n.match(rl)||[];u=rl.exec(i);)_=u[0],g=i.substring(l,u.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Oi(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},l=rl.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=a,(El.test(i)||d)&&(c.e=0),this._pt=c,c},Ol=function(t,e,n,i,s,r,a,c,l,h){Kt(i)&&(i=i(s||0,t,r));var u=t[e],f=n!=="get"?n:Kt(u)?l?t[e.indexOf("set")||!Kt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,p=Kt(u)?l?cx:Du:zl,_;if(ce(i)&&(~i.indexOf("random(")&&(i=Ts(i)),i.charAt(1)==="="&&(_=Oi(f,i)+(_e(f)||0),(_||_===0)&&(i=_))),!h||f!==i||Ml)return!isNaN(f*i)&&i!==""?(_=new De(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?ux:Ou,0,p),l&&(_.fp=l),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&xa(e,i),sx.call(this,t,e,f,i,p,c||Ve.stringFilter,l))},rx=function(t,e,n,i,s){if(Kt(t)&&(t=ar(t,s,e,n,i)),!wn(t)||t.style&&t.nodeType||Te(t)||su(t))return ce(t)?ar(t,s,e,n,i):t;var r={},a;for(a in t)r[a]=ar(t[a],s,e,n,i);return r},Ul=function(t,e,n,i,s,r){var a,c,l,h;if(Fe[t]&&(a=new Fe[t]).init(s,a.rawVars?e[t]:rx(e[t],i,s,r,n),n,i,r)!==!1&&(n._pt=c=new De(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==xs))for(l=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)l[a._props[h]]=c;return a},ei,Ml,Nl=function o(t,e,n){var i=t.vars,s=i.ease,r=i.startAt,a=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.onUpdateParams,u=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=t._dur,d=t._startAt,M=t._targets,x=t.parent,b=x&&x.data==="nested"?x.vars.targets:M,y=t._overwrite==="auto"&&!Sl,A=t.timeline,R,P,v,T,z,k,I,O,N,Z,X,B,j;if(A&&(!_||!s)&&(s="none"),t._ease=Li(s,vs.ease),t._yEase=p?Cu(Li(p===!0?s:p,vs.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!A&&!!i.runBackwards,!A||_&&!i.stagger){if(O=M[0]?ii(M[0]).harness:0,B=O&&i[O.prop],R=pa(i,Cl),d&&(d._zTime<0&&d.progress(1),e<0&&f&&a&&!g?d.render(-1,!0):d.revert(f&&m?la:D0),d._lazy=0),r){if(si(t._startAt=se.set(M,an({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!d&&Be(c),startAt:null,delay:0,onUpdate:l,onUpdateParams:h,callbackScope:u,stagger:0},r))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(we||!a&&!g)&&t._startAt.revert(la),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&m&&!d){if(e&&(a=!1),v=an({overwrite:!1,data:"isFromStart",lazy:a&&!d&&Be(c),immediateRender:a,stagger:0,parent:x},R),B&&(v[O.prop]=B),si(t._startAt=se.set(M,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(we?t._startAt.revert(la):t._startAt.render(-1,!0)),t._zTime=e,!a)o(t._startAt,Gt,Gt);else if(!e)return}for(t._pt=t._ptCache=0,c=m&&Be(c)||c&&!m,P=0;P<M.length;P++){if(z=M[P],I=z._gsap||Rl(M)[P]._gsap,t._ptLookup[P]=Z={},ml[I.id]&&ni.length&&da(),X=b===M?P:b.indexOf(z),O&&(N=new O).init(z,B||R,t,X,b)!==!1&&(t._pt=T=new De(t._pt,z,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(K){Z[K]=T}),N.priority&&(k=1)),!O||B)for(v in R)Fe[v]&&(N=Ul(v,R,t,X,z,b))?N.priority&&(k=1):Z[v]=T=Ol.call(t,z,v,"get",R[v],X,b,0,i.stringFilter);t._op&&t._op[P]&&t.kill(z,t._op[P]),y&&t._pt&&(ei=t,Jt.killTweensOf(z,Z,t.globalTime(e)),j=!t.parent,ei=0),t._pt&&c&&(ml[I.id]=1)}k&&Bl(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!j,_&&e<=0&&A.render(nn,!0,!0)},ax=function(t,e,n,i,s,r,a){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,h,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(l=u[f][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e&&l.fp!==e;)l=l._next;if(!l)return Ml=1,t.vars[e]="+=0",Nl(t,a),Ml=0,1;c.push(l)}for(f=c.length;f--;)h=c[f],l=h._pt||h,l.s=(i||i===0)&&!s?i:l.s+(i||0)+r*l.c,l.c=n-l.s,h.e&&(h.e=Qt(n)+_e(h.e)),h.b&&(h.b=l.s+_e(h.b))},ox=function(t,e){var n=t[0]?ii(t[0]).harness:0,i=n&&n.aliases,s,r,a,c;if(!i)return e;s=Ii({},e);for(r in i)if(r in s)for(c=i[r].split(","),a=c.length;a--;)s[c[a]]=s[r];return s},lx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",r,a;if(Te(e))a=n[t]||(n[t]=[]),e.forEach(function(c,l){return a.push({t:l/(e.length-1)*100,v:c,e:s})});else for(r in e)a=n[r]||(n[r]=[]),r==="ease"||a.push({t:parseFloat(t),v:e[r],e:s})},ar=function(t,e,n,i,s){return Kt(t)?t.call(e,n,i,s):ce(t)&&~t.indexOf("random(")?Ts(t):t},Lu=Pl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Iu={};Ie(Lu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Iu[o]=1});var se=function(o){nu(t,o);function t(n,i,s,r){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=o.call(this,r?i:sr(i))||this;var c=a.vars,l=c.duration,h=c.delay,u=c.immediateRender,f=c.stagger,p=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,d=c.yoyoEase,M=i.parent||Jt,x=(Te(n)||su(n)?Hn(n[0]):"length"in i)?[n]:sn(n),b,y,A,R,P,v,T,z;if(a._targets=x.length?Rl(x):fa("GSAP target "+n+" not found. https://greensock.com",!Ve.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||oa(l)||oa(h)){if(i=a.vars,b=a.timeline=new Se({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:x}),b.kill(),b.parent=b._dp=Bn(a),b._start=0,f||oa(l)||oa(h)){if(R=x.length,T=f&&vu(f),wn(f))for(P in f)~Lu.indexOf(P)&&(z||(z={}),z[P]=f[P]);for(y=0;y<R;y++)A=pa(i,Iu),A.stagger=0,d&&(A.yoyoEase=d),z&&Ii(A,z),v=x[y],A.duration=+ar(l,Bn(a),y,v,x),A.delay=(+ar(h,Bn(a),y,v,x)||0)-a._delay,!f&&R===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),b.to(v,A,T?T(y,v,x):0),b._ease=Ot.none;b.duration()?l=h=0:a.timeline=0}else if(_){sr(an(b.vars.defaults,{ease:"none"})),b._ease=Li(_.ease||i.ease||"none");var k=0,I,O,N;if(Te(_))_.forEach(function(Z){return b.to(x,Z,">")}),b.duration();else{A={};for(P in _)P==="ease"||P==="easeEach"||lx(P,_[P],A,_.easeEach);for(P in A)for(I=A[P].sort(function(Z,X){return Z.t-X.t}),k=0,y=0;y<I.length;y++)O=I[y],N={ease:O.e,duration:(O.t-(y?I[y-1].t:0))/100*l},N[P]=O.v,b.to(x,N,k),k+=N.duration;b.duration()<l&&b.to({},{duration:l-b.duration()})}}l||a.duration(l=b.duration())}else a.timeline=0;return p===!0&&!Sl&&(ei=Bn(a),Jt.killTweensOf(x),ei=0),Sn(M,Bn(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!l&&!_&&a._start===ge(M._time)&&Be(u)&&k0(Bn(a))&&M.data!=="nested")&&(a._tTime=-Gt,a.render(Math.max(0,-h)||0)),m&&mu(Bn(a),m),a}var e=t.prototype;return e.render=function(i,s,r){var a=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-Gt&&!h?c:i<Gt?0:i,f,p,_,g,m,d,M,x,b;if(!l)V0(this,i,s,r);else if(u!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=u,x=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,r);if(f=ge(u%g),u===c?(_=this._repeat,f=l):(_=~~(u/g),_&&_===u/g&&(f=l,_--),f>l&&(f=l)),d=this._yoyo&&_&1,d&&(b=this._yEase,f=l-f),m=ys(this._tTime,g),f===a&&!r&&this._initted)return this._tTime=u,this;_!==m&&(x&&this._yEase&&Pu(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=r=1,this.render(ge(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(gu(this,h?i:f,r,s,u))return this._tTime=0,this;if(a!==this._time)return this;if(l!==this._dur)return this.render(i,s,r)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(b||this._ease)(f/l),this._from&&(this.ratio=M=1-M),f&&!a&&!s&&!_&&(rn(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;x&&x.render(i<0?i:!f&&d?-Gt:x._dur*x._ease(f/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&gl(this,i,s,r),rn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&rn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&gl(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&si(this,1),!s&&!(h&&!a)&&(u||a||d)&&(rn(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,r,a){lr||ke.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||Nl(this,c),l=this._ease(c/this._dur),ax(this,i,s,r,a,l,c)?this.resetTo(i,s,r,a):(Ma(this,0),this.parent||du(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?nr(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ei&&ei.vars.overwrite!==!0)._first||nr(this),this.parent&&r!==this.timeline.totalDuration()&&Ms(this,this._dur*this.timeline._tDur/r,0,1),this}var a=this._targets,c=i?sn(i):a,l=this._ptLookup,h=this._pt,u,f,p,_,g,m,d;if((!s||s==="all")&&z0(a,c))return s==="all"&&(this._pt=0),nr(this);for(u=this._op=this._op||[],s!=="all"&&(ce(s)&&(g={},Ie(s,function(M){return g[M]=1}),s=g),s=ox(a,s)),d=a.length;d--;)if(~c.indexOf(a[d])){f=l[d],s==="all"?(u[d]=s,_=f,p={}):(p=u[d]=u[d]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&va(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&nr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return rr(1,arguments)},t.delayedCall=function(i,s,r,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:a})},t.fromTo=function(i,s,r){return rr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,r){return Jt.killTweensOf(i,s,r)},t}(Ss);an(se.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ie("staggerTo,staggerFrom,staggerFromTo",function(o){se[o]=function(){var t=new Se,e=xl.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var zl=function(t,e,n){return t[e]=n},Du=function(t,e,n){return t[e](n)},cx=function(t,e,n,i){return t[e](i.fp,n)},hx=function(t,e,n){return t.setAttribute(e,n)},ba=function(t,e){return Kt(t[e])?Du:_a(t[e])&&t.setAttribute?hx:zl},Ou=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ux=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Fl=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},kl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},fx=function(t,e,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(t,e,n),s=r},dx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?va(this,e,"_pt"):e.dep||(n=1),e=i;return!n},px=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Bl=function(t){for(var e=t._pt,n,i,s,r;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:r)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:r=e,e=n}t._pt=s},De=function(){function o(e,n,i,s,r,a,c,l,h){this.t=n,this.s=s,this.c=r,this.p=i,this.r=a||Ou,this.d=c||this,this.set=l||zl,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=px,this.m=n,this.mt=s,this.tween=i},o}();Ie(Pl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Cl[o]=1});Ze.TweenMax=Ze.TweenLite=se;Ze.TimelineLite=Ze.TimelineMax=Se;Jt=new Se({sortChildren:!1,defaults:vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ve.stringFilter=Il;var ws=[],ha={},mx=[],eu=0,hl=function(t){return(ha[t]||mx).map(function(e){return e()})},bl=function(){var t=Date.now(),e=[];t-eu>2&&(hl("matchMediaInit"),ws.forEach(function(n){var i=n.queries,s=n.conditions,r,a,c,l;for(a in i)r=en.matchMedia(i[a]).matches,r&&(c=1),r!==s[a]&&(s[a]=r,l=1);l&&(n.revert(),c&&e.push(n))}),hl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),eu=t,hl("matchMedia"))},Uu=function(){function o(e,n){this.selector=n&&vl(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,s){Kt(n)&&(s=i,i=n,n=Kt);var r=this,a=function(){var l=re,h=r.selector,u;return l&&l!==r&&l.data.push(r),s&&(r.selector=vl(s)),re=r,u=i.apply(r,arguments),Kt(u)&&r._r.push(u),re=l,r.selector=h,r.isReverted=!1,u};return r.last=a,n===Kt?a(r):n?r[n]=a:a},t.ignore=function(n){var i=re;re=null,n(this),re=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof se&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var r=this.getTweens();this.data.forEach(function(c){c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return r.splice(r.indexOf(l),1)}))}),r.map(function(c){return{g:c.globalTime(0),t:c}}).sort(function(c,l){return l.g-c.g||-1}).forEach(function(c){return c.t.revert(n)}),this.data.forEach(function(c){return!(c instanceof Ss)&&c.revert&&c.revert(n)}),this._r.forEach(function(c){return c(n,s)}),this.isReverted=!0}else this.data.forEach(function(c){return c.kill&&c.kill()});if(this.clear(),i){var a=ws.indexOf(this);~a&&ws.splice(a,1)}},t.revert=function(n){this.kill(n||{})},o}(),gx=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,s){wn(n)||(n={matches:n});var r=new Uu(0,s||this.scope),a=r.conditions={},c,l,h;this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(l in n)l==="all"?h=1:(c=en.matchMedia(n[l]),c&&(ws.indexOf(r)<0&&ws.push(r),(a[l]=c.matches)&&(h=1),c.addListener?c.addListener(bl):c.addEventListener("change",bl)));return h&&i(r),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),ga={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Tu(i)})},timeline:function(t){return new Se(t)},getTweensOf:function(t,e){return Jt.getTweensOf(t,e)},getProperty:function(t,e,n,i){ce(t)&&(t=sn(t)[0]);var s=ii(t||{}).get,r=n?fu:uu;return n==="native"&&(n=""),t&&(e?r((Fe[e]&&Fe[e].get||s)(t,e,n,i)):function(a,c,l){return r((Fe[a]&&Fe[a].get||s)(t,a,c,l))})},quickSetter:function(t,e,n){if(t=sn(t),t.length>1){var i=t.map(function(h){return Ee.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var r=Fe[e],a=ii(t),c=a.harness&&(a.harness.aliases||{})[e]||e,l=r?function(h){var u=new r;xs._pt=0,u.init(t,n?h+n:h,xs,0,[t]),u.render(1,u),xs._pt&&kl(1,xs)}:a.set(t,c);return r?l:function(h){return l(t,c,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Ee.to(t,Ii((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),r=function(c,l,h){return s.resetTo(e,c,l,h)};return r.tween=s,r},isTweening:function(t){return Jt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Li(t.ease,vs.ease)),$h(vs,t||{})},config:function(t){return $h(Ve,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,r=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Fe[a]&&!Ze[a]&&fa(e+" effect requires "+a+" plugin.")}),al[e]=function(a,c,l){return n(sn(a),an(c||{},s),l)},r&&(Se.prototype[e]=function(a,c,l){return this.add(al[e](a,wn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Ot[t]=Li(e)},parseEase:function(t,e){return arguments.length?Li(t,e):Ot},getById:function(t){return Jt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Se(t),i,s;for(n.smoothChildTiming=Be(t.smoothChildTiming),Jt.remove(n),n._dp=0,n._time=n._tTime=Jt._time,i=Jt._first;i;)s=i._next,(e||!(!i._dur&&i instanceof se&&i.vars.onComplete===i._targets[0]))&&Sn(n,i,i._start-i._delay),i=s;return Sn(Jt,n,0),n},context:function(t,e){return t?new Uu(t,e):re},matchMedia:function(t){return new gx(t)},matchMediaRefresh:function(){return ws.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||bl()},addEventListener:function(t,e){var n=ha[t]||(ha[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ha[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:J0,wrapYoyo:$0,distribute:vu,random:Mu,snap:yu,normalize:Z0,getUnit:_e,clamp:W0,splitColor:Eu,toArray:sn,selector:vl,mapRange:Su,pipe:q0,unitize:Y0,interpolate:j0,shuffle:xu},install:ou,effects:al,ticker:ke,updateRoot:Se.updateRoot,plugins:Fe,globalTimeline:Jt,core:{PropTween:De,globals:lu,Tween:se,Timeline:Se,Animation:Ss,getCache:ii,_removeLinkedListItem:va,reverting:function(){return we},context:function(t){return t&&re&&(re.data.push(t),t._ctx=re),re},suppressOverwrites:function(t){return Sl=t}}};Ie("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ga[o]=se[o]});ke.add(Se.updateRoot);xs=ga.to({},{duration:0});var _x=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},xx=function(t,e){var n=t._targets,i,s,r;for(i in e)for(s=n.length;s--;)r=t._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=_x(r,i)),r&&r.modifier&&r.modifier(e[i],t,n[s],i))},ul=function(t,e){return{name:t,rawVars:1,init:function(i,s,r){r._onInit=function(a){var c,l;if(ce(s)&&(c={},Ie(s,function(h){return c[h]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}xx(a,s)}}}},Ee=ga.registerPlugin({name:"attr",init:function(t,e,n,i,s){var r,a,c;this.tween=n;for(r in e)c=t.getAttribute(r)||"",a=this.add(t,"setAttribute",(c||0)+"",e[r],i,s,0,0,r),a.op=r,a.b=c,this._props.push(r)},render:function(t,e){for(var n=e._pt;n;)we?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ul("roundProps",yl),ul("modifiers"),ul("snap",yu))||ga;se.version=Se.version=Ee.version="3.11.5";au=1;wl()&&bs();var vx=Ot.Power0,yx=Ot.Power1,Mx=Ot.Power2,bx=Ot.Power3,Sx=Ot.Power4,wx=Ot.Linear,Tx=Ot.Quad,Ex=Ot.Cubic,Ax=Ot.Quart,Cx=Ot.Quint,Px=Ot.Strong,Rx=Ot.Elastic,Lx=Ot.Back,Ix=Ot.SteppedEase,Dx=Ot.Bounce,Ox=Ot.Sine,Ux=Ot.Expo,Nx=Ot.Circ;var Nu,ai,As,Yl,ki,zx,zu,Zl,Fx=function(){return typeof window<"u"},Wn={},Fi=180/Math.PI,Cs=Math.PI/180,Es=Math.atan2,Fu=1e8,Jl=/([A-Z])/g,kx=/(left|right|width|margin|padding|x)/i,Bx=/[\s,\(]\S/,Tn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Gl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Vx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Hx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Gx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Xu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},qu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Wx=function(t,e,n){return t.style[e]=n},Xx=function(t,e,n){return t.style.setProperty(e,n)},qx=function(t,e,n){return t._gsap[e]=n},Yx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Zx=function(t,e,n,i,s){var r=t._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},Jx=function(t,e,n,i,s){var r=t._gsap;r[e]=n,r.renderTransform(s,r)},$t="transform",gn=$t+"Origin",$x=function o(t,e){var n=this,i=this.target,s=i.style;if(t in Wn){if(this.tfm=this.tfm||{},t!=="transform")t=Tn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(r){return n.tfm[r]=Gn(i,r)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Gn(i,t);else return Tn.transform.split(",").forEach(function(r){return o.call(n,r,e)});if(this.props.indexOf($t)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(gn,e,"")),t=$t}(s||e)&&this.props.push(t,e,s[t])},Yu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},jx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,r;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Jl,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Zl(),(!s||!s.isStart)&&!n[$t]&&(Yu(n),i.uncache=1)}},Zu=function(t,e){var n={target:t,props:[],revert:jx,save:$x};return t._gsap||Ee.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Ju,Wl=function(t,e){var n=ai.createElementNS?ai.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ai.createElement(t);return n.style?n:ai.createElement(t)},En=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Jl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,Ps(e)||e,1)||""},ku="O,Moz,ms,Ms,Webkit".split(","),Ps=function(t,e,n){var i=e||ki,s=i.style,r=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);r--&&!(ku[r]+t in s););return r<0?null:(r===3?"ms":r>=0?ku[r]:"")+t},Xl=function(){Fx()&&window.document&&(Nu=window,ai=Nu.document,As=ai.documentElement,ki=Wl("div")||{style:{}},zx=Wl("div"),$t=Ps($t),gn=$t+"Origin",ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ju=!!Ps("perspective"),Zl=Ee.core.reverting,Yl=1)},Vl=function o(t){var e=Wl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(As.appendChild(e),e.appendChild(this),this.style.display="block",t)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),As.removeChild(e),this.style.cssText=s,r},Bu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},$u=function(t){var e;try{e=t.getBBox()}catch{e=Vl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Vl||(e=Vl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Bu(t,["x","cx","x1"])||0,y:+Bu(t,["y","cy","y1"])||0,width:0,height:0}:e},ju=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&$u(t))},ur=function(t,e){if(e){var n=t.style;e in Wn&&e!==gn&&(e=$t),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Jl,"-$1").toLowerCase())):n.removeAttribute(e)}},oi=function(t,e,n,i,s,r){var a=new De(t._pt,e,n,0,1,r?qu:Xu);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Vu={deg:1,rad:1,turn:1},Kx={grid:1,flex:1},li=function o(t,e,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",a=ki.style,c=kx.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=i==="px",p=i==="%",_,g,m,d;return i===r||!s||Vu[i]||Vu[r]?s:(r!=="px"&&!f&&(s=o(t,e,n,"px")),d=t.getCTM&&ju(t),(p||r==="%")&&(Wn[e]||~e.indexOf("adius"))?(_=d?t.getBBox()[c?"width":"height"]:t[h],Qt(p?s/_*u:s/100*_)):(a[c?"width":"height"]=u+(f?r:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,d&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===ai||!g.appendChild)&&(g=ai.body),m=g._gsap,m&&p&&m.width&&c&&m.time===ke.time&&!m.uncache?Qt(s/m.width*u):((p||r==="%")&&!Kx[En(g,"display")]&&(a.position=En(t,"position")),g===t&&(a.position="static"),g.appendChild(ki),_=ki[h],g.removeChild(ki),a.position="absolute",c&&p&&(m=ii(g),m.time=ke.time,m.width=g[h]),Qt(f?_*s/u:_&&s?u/_*s:0))))},Gn=function(t,e,n,i){var s;return Yl||Xl(),e in Tn&&e!=="transform"&&(e=Tn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Wn[e]&&e!=="transform"?(s=dr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:wa(En(t,gn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Sa[e]&&Sa[e](t,e,n)||En(t,e)||Ll(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?li(t,e,s,n)+n:s},Qx=function(t,e,n,i){if(!n||n==="none"){var s=Ps(e,t,1),r=s&&En(t,s,1);r&&r!==n?(e=s,n=r):e==="borderColor"&&(n=En(t,"borderTopColor"))}var a=new De(this._pt,t.style,e,0,1,Fl),c=0,l=0,h,u,f,p,_,g,m,d,M,x,b,y;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=En(t,e)||i,t.style[e]=n),h=[n,i],Il(h),n=h[0],i=h[1],f=n.match(Di)||[],y=i.match(Di)||[],y.length){for(;u=Di.exec(i);)m=u[0],M=i.substring(c,u.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=f[l++]||"")&&(p=parseFloat(g)||0,b=g.substr((p+"").length),m.charAt(1)==="="&&(m=Oi(p,m)+b),d=parseFloat(m),x=m.substr((d+"").length),c=Di.lastIndex-x.length,x||(x=x||Ve.units[e]||b,c===i.length&&(i+=x,a.e+=x)),b!==x&&(p=li(t,e,g,x)||0),a._pt={_next:a._pt,p:M||l===1?M:",",s:p,c:d-p,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=c<i.length?i.substring(c,i.length):""}else a.r=e==="display"&&i==="none"?qu:Xu;return El.test(i)&&(a.e=0),this._pt=a,a},Hu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Hu[n]||n,e[1]=Hu[i]||i,e.join(" ")},ev=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,r=n._gsap,a,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],Wn[a]&&(c=1,a=a==="transformOrigin"?gn:$t),ur(n,a);c&&(ur(n,$t),r&&(r.svg&&n.removeAttribute("transform"),dr(n,1),r.uncache=1,Yu(i)))}},Sa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var r=t._pt=new De(t._pt,e,n,0,0,ev);return r.u=i,r.pr=-10,r.tween=s,t._props.push(n),1}}},fr=[1,0,0,1,0,0],Ku={},Qu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Gu=function(t){var e=En(t,$t);return Qu(e)?fr:e.substr(7).match(Tl).map(Qt)},$l=function(t,e){var n=t._gsap||ii(t),i=t.style,s=Gu(t),r,a,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?fr:s):(s===fr&&!t.offsetParent&&t!==As&&!n.svg&&(c=i.display,i.display="block",r=t.parentNode,(!r||!t.offsetParent)&&(l=1,a=t.nextElementSibling,As.appendChild(t)),s=Gu(t),c?i.display=c:ur(t,"display"),l&&(a?r.insertBefore(t,a):r?r.appendChild(t):As.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ql=function(t,e,n,i,s,r){var a=t._gsap,c=s||$l(t,!0),l=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,p=c[0],_=c[1],g=c[2],m=c[3],d=c[4],M=c[5],x=e.split(" "),b=parseFloat(x[0])||0,y=parseFloat(x[1])||0,A,R,P,v;n?c!==fr&&(R=p*m-_*g)&&(P=b*(m/R)+y*(-g/R)+(g*M-m*d)/R,v=b*(-_/R)+y*(p/R)-(p*M-_*d)/R,b=P,y=v):(A=$u(t),b=A.x+(~x[0].indexOf("%")?b/100*A.width:b),y=A.y+(~(x[1]||x[0]).indexOf("%")?y/100*A.height:y)),i||i!==!1&&a.smooth?(d=b-l,M=y-h,a.xOffset=u+(d*p+M*g)-d,a.yOffset=f+(d*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=y,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[gn]="0px 0px",r&&(oi(r,a,"xOrigin",l,b),oi(r,a,"yOrigin",h,y),oi(r,a,"xOffset",u,a.xOffset),oi(r,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",b+" "+y)},dr=function(t,e){var n=t._gsap||new Dl(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,r="px",a="deg",c=getComputedStyle(t),l=En(t,gn)||"0",h,u,f,p,_,g,m,d,M,x,b,y,A,R,P,v,T,z,k,I,O,N,Z,X,B,j,K,rt,at,V,J,st;return h=u=f=g=m=d=M=x=b=0,p=_=1,n.svg=!!(t.getCTM&&ju(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[$t]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[$t]!=="none"?c[$t]:"")),i.scale=i.rotate=i.translate="none"),R=$l(t,n.svg),n.svg&&(n.uncache?(B=t.getBBox(),l=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),ql(t,X||l,!!X||n.originIsAbsolute,n.smooth!==!1,R)),y=n.xOrigin||0,A=n.yOrigin||0,R!==fr&&(z=R[0],k=R[1],I=R[2],O=R[3],h=N=R[4],u=Z=R[5],R.length===6?(p=Math.sqrt(z*z+k*k),_=Math.sqrt(O*O+I*I),g=z||k?Es(k,z)*Fi:0,M=I||O?Es(I,O)*Fi+g:0,M&&(_*=Math.abs(Math.cos(M*Cs))),n.svg&&(h-=y-(y*z+A*I),u-=A-(y*k+A*O))):(st=R[6],V=R[7],K=R[8],rt=R[9],at=R[10],J=R[11],h=R[12],u=R[13],f=R[14],P=Es(st,at),m=P*Fi,P&&(v=Math.cos(-P),T=Math.sin(-P),X=N*v+K*T,B=Z*v+rt*T,j=st*v+at*T,K=N*-T+K*v,rt=Z*-T+rt*v,at=st*-T+at*v,J=V*-T+J*v,N=X,Z=B,st=j),P=Es(-I,at),d=P*Fi,P&&(v=Math.cos(-P),T=Math.sin(-P),X=z*v-K*T,B=k*v-rt*T,j=I*v-at*T,J=O*T+J*v,z=X,k=B,I=j),P=Es(k,z),g=P*Fi,P&&(v=Math.cos(P),T=Math.sin(P),X=z*v+k*T,B=N*v+Z*T,k=k*v-z*T,Z=Z*v-N*T,z=X,N=B),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),p=Qt(Math.sqrt(z*z+k*k+I*I)),_=Qt(Math.sqrt(Z*Z+st*st)),P=Es(N,Z),M=Math.abs(P)>2e-4?P*Fi:0,b=J?1/(J<0?-J:J):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Qu(En(t,$t)),X&&t.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(p*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+r,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+r,n.z=f+r,n.scaleX=Qt(p),n.scaleY=Qt(_),n.rotation=Qt(g)+a,n.rotationX=Qt(m)+a,n.rotationY=Qt(d)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=b+r,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[gn]=wa(l)),n.xOffset=n.yOffset=0,n.force3D=Ve.force3D,n.renderTransform=n.svg?iv:Ju?tf:nv,n.uncache=0,n},wa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Hl=function(t,e,n){var i=_e(e);return Qt(parseFloat(e)+parseFloat(li(t,"x",n+"px",i)))+i},nv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tf(t,e)},Ni="0deg",hr="0px",zi=") ",tf=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,d=n.force3D,M=n.target,x=n.zOrigin,b="",y=d==="auto"&&t&&t!==1||d===!0;if(x&&(u!==Ni||h!==Ni)){var A=parseFloat(h)*Cs,R=Math.sin(A),P=Math.cos(A),v;A=parseFloat(u)*Cs,v=Math.cos(A),r=Hl(M,r,R*v*-x),a=Hl(M,a,-Math.sin(A)*-x),c=Hl(M,c,P*v*-x+x)}m!==hr&&(b+="perspective("+m+zi),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(y||r!==hr||a!==hr||c!==hr)&&(b+=c!==hr||y?"translate3d("+r+", "+a+", "+c+") ":"translate("+r+", "+a+zi),l!==Ni&&(b+="rotate("+l+zi),h!==Ni&&(b+="rotateY("+h+zi),u!==Ni&&(b+="rotateX("+u+zi),(f!==Ni||p!==Ni)&&(b+="skew("+f+", "+p+zi),(_!==1||g!==1)&&(b+="scale("+_+", "+g+zi),M.style[$t]=b||"translate(0, 0)"},iv=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,a=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,d=n.yOffset,M=n.forceCSS,x=parseFloat(r),b=parseFloat(a),y,A,R,P,v;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Cs,l*=Cs,y=Math.cos(c)*u,A=Math.sin(c)*u,R=Math.sin(c-l)*-f,P=Math.cos(c-l)*f,l&&(h*=Cs,v=Math.tan(l-h),v=Math.sqrt(1+v*v),R*=v,P*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),y*=v,A*=v)),y=Qt(y),A=Qt(A),R=Qt(R),P=Qt(P)):(y=u,P=f,A=R=0),(x&&!~(r+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(x=li(p,"x",r,"px"),b=li(p,"y",a,"px")),(_||g||m||d)&&(x=Qt(x+_-(_*y+g*R)+m),b=Qt(b+g-(_*A+g*P)+d)),(i||s)&&(v=p.getBBox(),x=Qt(x+i/100*v.width),b=Qt(b+s/100*v.height)),v="matrix("+y+","+A+","+R+","+P+","+x+","+b+")",p.setAttribute("transform",v),M&&(p.style[$t]=v)},sv=function(t,e,n,i,s){var r=360,a=ce(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?Fi:1),l=c-i,h=i+l+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(l%=r,l!==l%(r/2)&&(l+=l<0?r:-r)),u==="cw"&&l<0?l=(l+r*Fu)%r-~~(l/r)*r:u==="ccw"&&l>0&&(l=(l-r*Fu)%r-~~(l/r)*r)),t._pt=f=new De(t._pt,e,n,i,l,Vx),f.e=h,f.u="deg",t._props.push(n),f},Wu=function(t,e){for(var n in e)t[n]=e[n];return t},rv=function(t,e,n){var i=Wu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,a,c,l,h,u,f,p,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),r[$t]=e,a=dr(n,1),ur(n,$t),n.setAttribute("transform",l)):(l=getComputedStyle(n)[$t],r[$t]=e,a=dr(n,1),r[$t]=l);for(c in Wn)l=i[c],h=a[c],l!==h&&s.indexOf(c)<0&&(p=_e(l),_=_e(h),u=p!==_?li(n,c,l,_):parseFloat(l),f=parseFloat(h),t._pt=new De(t._pt,a,c,u,f-u,Gl),t._pt.u=_||0,t._props.push(c));Wu(a,i)};Ie("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",s="Left",r=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?o+a:"border"+a+o});Sa[t>1?"border"+o:o]=function(a,c,l,h,u){var f,p;if(arguments.length<4)return f=r.map(function(_){return Gn(a,_,l)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},r.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(c,p,u)}});var jl={name:"css",register:Xl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var r=this._props,a=t.style,c=n.vars.startAt,l,h,u,f,p,_,g,m,d,M,x,b,y,A,R,P;Yl||Xl(),this.styles=this.styles||Zu(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Fe[g]&&Ul(g,e,n,i,t,s)))){if(p=typeof h,_=Sa[g],p==="function"&&(h=h.call(n,i,t,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Ts(h)),_)_(this,t,g,h,n)&&(R=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Vn.lastIndex=0,Vn.test(l)||(m=_e(l),d=_e(h)),d?m!==d&&(l=li(t,g,l,d)+d):m&&(h+=m),this.add(a,"setProperty",l,h,i,s,0,0,g),r.push(g),P.push(g,0,a[g]);else if(p!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,t,s):c[g],ce(l)&&~l.indexOf("random(")&&(l=Ts(l)),_e(l+"")||(l+=Ve.units[g]||_e(Gn(t,g))||""),(l+"").charAt(1)==="="&&(l=Gn(t,g))):l=Gn(t,g),f=parseFloat(l),M=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),g in Tn&&(g==="autoAlpha"&&(f===1&&Gn(t,"visibility")==="hidden"&&u&&(f=0),P.push("visibility",0,a.visibility),oi(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Tn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Wn,x){if(this.styles.save(g),b||(y=t._gsap,y.renderTransform&&!e.parseTransform||dr(t,e.parseTransform),A=e.smoothOrigin!==!1&&y.smooth,b=this._pt=new De(this._pt,a,$t,0,1,y.renderTransform,y,0,-1),b.dep=1),g==="scale")this._pt=new De(this._pt,y,"scaleY",y.scaleY,(M?Oi(y.scaleY,M+u):u)-y.scaleY||0,Gl),this._pt.u=0,r.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(gn,0,a[gn]),h=tv(h),y.svg?ql(t,h,0,A,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==y.zOrigin&&oi(this,y,"zOrigin",y.zOrigin,d),oi(this,a,g,wa(l),wa(h)));continue}else if(g==="svgOrigin"){ql(t,h,1,A,0,this);continue}else if(g in Ku){sv(this,y,g,f,M?Oi(f,M+h):h);continue}else if(g==="smoothOrigin"){oi(this,y,"smooth",y.smooth,h);continue}else if(g==="force3D"){y[g]=h;continue}else if(g==="transform"){rv(this,h,t);continue}}else g in a||(g=Ps(g)||g);if(x||(u||u===0)&&(f||f===0)&&!Bx.test(h)&&g in a)m=(l+"").substr((f+"").length),u||(u=0),d=_e(h)||(g in Ve.units?Ve.units[g]:m),m!==d&&(f=li(t,g,l,d)),this._pt=new De(this._pt,x?y:a,g,f,(M?Oi(f,M+u):u)-f,!x&&(d==="px"||g==="zIndex")&&e.autoRound!==!1?Gx:Gl),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=l,this._pt.r=Hx);else if(g in a)Qx.call(this,t,g,l,M?M+h:h);else if(g in t)this.add(t,g,l||t[g],M?M+h:h,i,s);else if(g!=="parseTransform"){xa(g,h);continue}x||(g in a?P.push(g,0,a[g]):P.push(g,1,l||t[g])),r.push(g)}}R&&Bl(this)},render:function(t,e){if(e.tween._time||!Zl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Gn,aliases:Tn,getSetter:function(t,e,n){var i=Tn[e];return i&&i.indexOf(",")<0&&(e=i),e in Wn&&e!==gn&&(t._gsap.x||Gn(t,"x"))?n&&zu===n?e==="scale"?Yx:qx:(zu=n||{})&&(e==="scale"?Zx:Jx):t.style&&!_a(t.style[e])?Wx:~e.indexOf("-")?Xx:ba(t,e)},core:{_removeProperty:ur,_getMatrix:$l}};Ee.utils.checkPrefix=Ps;Ee.core.getStyleSaver=Zu;(function(o,t,e,n){var i=Ie(o+","+t+","+e,function(s){Wn[s]=1});Ie(t,function(s){Ve.units[s]="deg",Ku[s]=1}),Tn[i[13]]=o+","+t,Ie(n,function(s){var r=s.split(":");Tn[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ie("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ve.units[o]="px"});Ee.registerPlugin(jl);var ci=Ee.registerPlugin(jl)||Ee,Rv=ci.core.Tween;var pr=function(){var o=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(h){h.preventDefault(),n(++o%t.children.length)},!1);function e(h){return t.appendChild(h.dom),h}function n(h){for(var u=0;u<t.children.length;u++)t.children[u].style.display=u===h?"block":"none";o=h}var i=(performance||Date).now(),s=i,r=0,a=e(new pr.Panel("FPS","#0ff","#002")),c=e(new pr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new pr.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){r++;var h=(performance||Date).now();if(c.update(h-i,200),h>=s+1e3&&(a.update(r*1e3/(h-s),100),s=h,r=0,l)){var u=performance.memory;l.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){i=this.end()},domElement:t,setMode:n}};pr.Panel=function(o,t,e){var n=1/0,i=0,s=Math.round,r=s(window.devicePixelRatio||1),a=80*r,c=48*r,l=3*r,h=2*r,u=3*r,f=15*r,p=74*r,_=30*r,g=document.createElement("canvas");g.width=a,g.height=c,g.style.cssText="width:80px;height:48px";var m=g.getContext("2d");return m.font="bold "+9*r+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=e,m.fillRect(0,0,a,c),m.fillStyle=t,m.fillText(o,l,h),m.fillRect(u,f,p,_),m.fillStyle=e,m.globalAlpha=.9,m.fillRect(u,f,p,_),{dom:g,update:function(d,M){n=Math.min(n,d),i=Math.max(i,d),m.fillStyle=e,m.globalAlpha=1,m.fillRect(0,0,a,f),m.fillStyle=t,m.fillText(s(d)+" "+o+" ("+s(n)+"-"+s(i)+")",l,h),m.drawImage(g,u+r,f,p-r,_,u,f,p-r,_),m.fillRect(u+p-r,f,r,_),m.fillStyle=e,m.globalAlpha=.9,m.fillRect(u+p-r,f,r,s((1-d/M)*_))}}};var ef=pr;var sf=yf(nf()),av=!0,Ls=[],Ta,Ql,ui,Rs,tc,hi,An,rf,Is,Oe,on;var ec=new Tt;var af=new Map,Ea=!1;function ov(){Is.load("font-coordinates-v4u.json",function(o){let t=JSON.parse(o),e=Object.keys(t);for(let s=0;s<e.length;s++){var[n,i]=t[e[s]];ci.to(Ls[s].position,{duration:1.5,ease:"expo.out",x:(n-14)*17,y:(i-7)*14,z:s%5*.5})}})}function of(){Is.load("font-coordinates-v4t.json",function(o){let t=JSON.parse(o),e=Object.keys(t);for(let s=0;s<e.length;s++){var[n,i]=t[e[s]];ci.to(Ls[s].position,{duration:1.5,ease:"expo.out",x:n*1.6,y:i*2,z:s%5*.5})}})}function lv(){Is.load("font-coordinates-v4lu.json",function(o){let t=JSON.parse(o),e=Object.keys(t);for(let s=0;s<e.length;s++){var[n,i]=t[e[s]];ci.to(Ls[s].position,{duration:1.5,ease:"expo.out",x:(n-.5)*200,y:(i-.5)*80,z:0})}})}function cv(){Is.load("font-coordinates-v4lt.json",function(o){let t=JSON.parse(o),e=Object.keys(t);for(let s=0;s<e.length;s++){var[n,i]=t[e[s]];ci.to(Ls[s].position,{duration:1.5,ease:"expo.out",x:(n-.5)*200,y:(i-.5)*80,z:0})}})}$(document).ready(function(){$(".view-selector__option").click(function(){if($(this).hasClass("selected"))return;switch($(".view-selector__option").removeClass("selected"),$(this).addClass("selected"),$(this).data("value")){case"umap":ov();break;case"umap-grid":lv();break;case"tsne":of();break;case"tsne-grid":cv();break;default:break}})});hv();lf();function hv(){Ta=document.createElement("div"),document.body.appendChild(Ta),ui=new Me(70,window.innerWidth/window.innerHeight,1,1e4),ui.position.z=75,Rs=new Jr,Rs.background=new zt(16185077);let o=new ea(16777215,1,0);Rs.add(o),hi=new Qs,hi.setPixelRatio(window.devicePixelRatio),hi.setSize(window.innerWidth,window.innerHeight),Ta.appendChild(hi.domElement),An=new aa(ui,hi.domElement),An.noRotate=!0,An.mouseButtons={LEFT:ti.PAN,MIDDLE:ti.ZOOM,RIGHT:ti.ROTATE},An.panSpeed=1.5,An.zoomSpeed=2,An.staticMoving=!0,Ea&&An.addEventListener("change",function(){console.log(ui.position)}),An.handleResize(),tc=new na,rf=new ta,Is=new Qr,fv(),Ea&&(Ql=new ef,Ta.appendChild(Ql.dom)),document.addEventListener("mousemove",gv),document.addEventListener("dblclick",_v),window.addEventListener("resize",mv)}function lf(){requestAnimationFrame(lf),uv(),An.update(),Ea&&Ql.update()}function uv(){tc.setFromCamera(ec,ui);let o=tc.intersectObjects(Ls,!1);o.length>0?Oe!=o[0].object&&(Oe&&Oe.material.emissive.setHex(Oe.currentHex),Oe=o[0].object,Oe.currentHex=Oe.material.emissive.getHex(),Oe.material.emissive.setHex(10066329)):(Oe&&Oe.material.emissive.setHex(Oe.currentHex),Oe=null),hi.render(Rs,ui)}function fv(){pv(),Ea&&dv()}function dv(){let e=new ia(500,50,5940748,11529075);e.rotation.x=Math.PI/2,Rs.add(e)}function pv(){Is.load("font-coordinates-v4t.json",function(o){let t=JSON.parse(o),e=Object.keys(t);for(let r=0;r<e.length;r++){var n=new jr({map:rf.load("previews/"+e[r]+".png")}),i=new Ai(5,5*.356);n.transparent=!0;var s=new Ke(i,n);Rs.add(s),Ls.push(s),af.set(s.uuid,e[r])}av=!1,of()})}function mv(){ui.aspect=window.innerWidth/window.innerHeight,ui.updateProjectionMatrix(),hi.setSize(window.innerWidth,window.innerHeight),An.handleResize()}function gv(o){let t=hi.domElement.getBoundingClientRect();ec.x=(o.clientX-t.left)/(t.width-t.left)*2-1,ec.y=-((o.clientY-t.top)/(t.bottom-t.top))*2+1}function _v(o){if(on!=Oe)if(on&&(on.material.transparent=!0,ci.to(on.position,{duration:.5,ease:"expo.out",z:on.previous_z}),on=null),Oe){on=Oe;let t=af.get(on.uuid);on.material.transparent=!1,on.previous_z=on.position.z,ci.to(on.position,{duration:.5,ease:"expo.out",z:4}),xv(t,function(){$("#info-container").show()})}else $("#info-container").hide()}function xv(o,t){let e=o.split(" "),n=e.pop(),i=e.join(" "),s={400:"Normal",700:"Bold"},r=document.createElement("link");r.rel="stylesheet",r.href=`https://fonts.googleapis.com/css?family=${i.replace(" ","+")}:${n}`,document.head.appendChild(r);let a=new sf.default(i);return console.log(`trying to load ${o}...`),a.load(n).then(function(){console.log(`loaded ${o}`);let c=$("<a>").attr("href",`https://fonts.google.com/specimen/${i.replace(" ","+")}`).attr("target","_blank").html(i);$("#info h2").html(c),$(".font-info .style").text(`${s[n]} ${n}`),$(".font-sample-sentence, .font-sample-alphabet, .font-custom-input").css("font-family",i).css("font-weight",n),t&&t()})}})();
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
