var Ch="170";var Mm=0,ud=1,bm=2;var Uf=1,Em=2,Mi=3,Ln=0,Xt=1,Dt=2,ri=0,nr=1,Yn=2,dd=3,fd=4,Sm=5,ms=100,Tm=101,wm=102,Am=103,Rm=104,Cm=200,Im=201,Pm=202,Lm=203,cc=204,hc=205,Dm=206,Um=207,Nm=208,Fm=209,Om=210,Bm=211,km=212,Hm=213,zm=214,uc=0,dc=1,fc=2,or=3,pc=4,mc=5,gc=6,xc=7,Nf=0,Vm=1,Gm=2,Gi=0,Ih=1,Ph=2,Lh=3,br=4,Wm=5,Dh=6,Uh=7,pd="attached",Xm="detached",Ff=300,ar=301,lr=302,_c=303,vc=304,al=306,Kn=1e3,bi=1001,co=1002,qt=1003,Nh=1004;var js=1005;var tn=1006,io=1007;var si=1008;var Ti=1009,Of=1010,Bf=1011,ho=1012,Fh=1013,_s=1014,qn=1015,un=1016,Oh=1017,Bh=1018,cr=1020,kf=35902,Hf=1021,zf=1022,In=1023,Vf=1024,Gf=1025,ir=1026,hr=1027,kh=1028,Hh=1029,Wf=1030,zh=1031;var Vh=1033,Sa=33776,Ta=33777,wa=33778,Aa=33779,yc=35840,Mc=35841,bc=35842,Ec=35843,Sc=36196,Tc=37492,wc=37496,Ac=37808,Rc=37809,Cc=37810,Ic=37811,Pc=37812,Lc=37813,Dc=37814,Uc=37815,Nc=37816,Fc=37817,Oc=37818,Bc=37819,kc=37820,Hc=37821,Ra=36492,zc=36494,Vc=36495,Xf=36283,Gc=36284,Wc=36285,Xc=36286,qm=2200,Ym=2201,Km=2202,ur=2300,dr=2301,Rl=2302,Js=2400,Qs=2401,Ca=2402,Gh=2500,$m=2501,qf=0,ll=1,Po=2,Zm=3200,jm=3201;var Yf=0,Jm=1,zi="",vt="srgb",sn="srgb-linear",cl="linear",mt="srgb";var Fs=7680;var md=519,Qm=512,e0=513,t0=514,Kf=515,n0=516,i0=517,s0=518,r0=519,qc=35044;var gd="300 es",Ei=2e3,Ia=2001,wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xd=1234567,so=Math.PI/180,fr=180/Math.PI;function Pn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function Wh(i,e){return(i%e+e)%e}function o0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function a0(i,e,t){return i!==e?(t-i)/(e-i):0}function ro(i,e,t){return(1-t)*i+t*e}function l0(i,e,t,n){return ro(i,e,1-Math.exp(-t*n))}function c0(i,e=1){return e-Math.abs(Wh(i,e*2)-e)}function h0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function u0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function d0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function f0(i,e){return i+Math.random()*(e-i)}function p0(i){return i*(.5-Math.random())}function m0(i){i!==void 0&&(xd=i);let e=xd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function g0(i){return i*so}function x0(i){return i*fr}function _0(i){return(i&i-1)===0&&i!==0}function v0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function y0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function M0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var hl={DEG2RAD:so,RAD2DEG:fr,generateUUID:Pn,clamp:Ht,euclideanModulo:Wh,mapLinear:o0,inverseLerp:a0,lerp:ro,damp:l0,pingpong:c0,smoothstep:h0,smootherstep:u0,randInt:d0,randFloat:f0,randFloatSpread:p0,seededRandom:m0,degToRad:g0,radToDeg:x0,isPowerOfTwo:_0,ceilPowerOfTwo:v0,floorPowerOfTwo:y0,setQuaternionFromProperEuler:M0,normalize:_t,denormalize:Xn},ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],v=s[4],_=s[7],P=s[2],b=s[5],R=s[8];return r[0]=o*x+a*y+l*P,r[3]=o*m+a*v+l*b,r[6]=o*p+a*_+l*R,r[1]=c*x+u*y+h*P,r[4]=c*m+u*v+h*b,r[7]=c*p+u*_+h*R,r[2]=d*x+f*y+g*P,r[5]=d*m+f*v+g*b,r[8]=d*p+f*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cl=new Qe;function $f(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function b0(){let i=uo("canvas");return i.style.display="block",i}var _d={};function to(i){i in _d||(_d[i]=!0,console.warn(i))}function E0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function S0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function T0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var it={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(i.r=sr(i.r),i.g=sr(i.g),i.b=sr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zi?cl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vd=[.64,.33,.3,.6,.15,.06],yd=[.2126,.7152,.0722],Md=[.3127,.329],bd=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ed=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[sn]:{primaries:vd,whitePoint:Md,transfer:cl,toXYZ:bd,fromXYZ:Ed,luminanceCoefficients:yd,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:vd,whitePoint:Md,transfer:mt,toXYZ:bd,fromXYZ:Ed,luminanceCoefficients:yd,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}});var Os,Yc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=uo("canvas")),Os.width=e.width,Os.height=e.height;let n=Os.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=uo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},w0=0,Pa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Il(s[o].image)):r.push(Il(s[o]))}else r=Il(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var A0=0,Kt=class i extends wi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bi,s=bi,r=tn,o=si,a=In,l=Ti,c=i.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Pn(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Ff;Kt.DEFAULT_ANISOTROPY=1;var at=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(f+1)/2,P=(p+1)/2,b=(u+d)/4,R=(h+x)/4,I=(g+m)/4;return v>_&&v>P?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=R/n):_>P?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=R/r,s=I/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kc=class extends wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Kt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Pa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends Kc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},La=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $c=class extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*x,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let P=Math.sqrt(v),b=Math.atan2(P,p*y);m=Math.sin(m*b)/P,a=Math.sin(a*b)/P}let _=a*y;if(l=l*m+d*_,c=c*m+f*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pl=new C,Sd=new Yt,nn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),$o.subVectors(this.max,Yr),Bs.subVectors(e.a,Yr),ks.subVectors(e.b,Yr),Hs.subVectors(e.c,Yr),Ni.subVectors(ks,Bs),Fi.subVectors(Hs,ks),ls.subVectors(Bs,Hs);let t=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-ls.z,ls.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,ls.z,0,-ls.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-ls.y,ls.x,0];return!Ll(t,Bs,ks,Hs,$o)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,Bs,ks,Hs,$o))?!1:(Zo.crossVectors(Ni,Fi),t=[Zo.x,Zo.y,Zo.z],Ll(t,Bs,ks,Hs,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},mi=[new C,new C,new C,new C,new C,new C,new C,new C],zn=new C,Ko=new nn,Bs=new C,ks=new C,Hs=new C,Ni=new C,Fi=new C,ls=new C,Yr=new C,$o=new C,Zo=new C,cs=new C;function Ll(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){cs.fromArray(i,r);let a=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),u=n.dot(cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var R0=new nn,Kr=new C,Dl=new C,bn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):R0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);let t=Kr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Kr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(Dl)),this.expandByPoint(Kr.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},gi=new C,Ul=new C,jo=new C,Oi=new C,Nl=new C,Jo=new C,Fl=new C,vs=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ul.copy(e).add(t).multiplyScalar(.5),jo.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Ul);let r=e.distanceTo(t)*.5,o=-this.direction.dot(jo),a=Oi.dot(this.direction),l=-Oi.dot(jo),c=Oi.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ul).addScaledVector(jo,d),f}intersectSphere(e,t){gi.subVectors(e.center,this.origin);let n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,r){Nl.subVectors(t,e),Jo.subVectors(n,e),Fl.crossVectors(Nl,Jo);let o=this.direction.dot(Fl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);let l=a*this.direction.dot(Jo.crossVectors(Oi,Jo));if(l<0)return null;let c=a*this.direction.dot(Nl.cross(Oi));if(c<0||l+c>o)return null;let u=-a*Oi.dot(Fl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),r=1/zs.setFromMatrixColumn(e,1).length(),o=1/zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C0,e,I0)}lookAt(e,t,n){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Bi.crossVectors(n,yn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Bi.crossVectors(n,yn)),Bi.normalize(),Qo.crossVectors(yn,Bi),s[0]=Bi.x,s[4]=Qo.x,s[8]=yn.x,s[1]=Bi.y,s[5]=Qo.y,s[9]=yn.y,s[2]=Bi.z,s[6]=Qo.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],v=n[7],_=n[11],P=n[15],b=s[0],R=s[4],I=s[8],S=s[12],E=s[1],L=s[5],V=s[9],N=s[13],W=s[2],Z=s[6],G=s[10],ae=s[14],X=s[3],me=s[7],xe=s[11],re=s[15];return r[0]=o*b+a*E+l*W+c*X,r[4]=o*R+a*L+l*Z+c*me,r[8]=o*I+a*V+l*G+c*xe,r[12]=o*S+a*N+l*ae+c*re,r[1]=u*b+h*E+d*W+f*X,r[5]=u*R+h*L+d*Z+f*me,r[9]=u*I+h*V+d*G+f*xe,r[13]=u*S+h*N+d*ae+f*re,r[2]=g*b+x*E+m*W+p*X,r[6]=g*R+x*L+m*Z+p*me,r[10]=g*I+x*V+m*G+p*xe,r[14]=g*S+x*N+m*ae+p*re,r[3]=y*b+v*E+_*W+P*X,r[7]=y*R+v*L+_*Z+P*me,r[11]=y*I+v*V+_*G+P*xe,r[15]=y*S+v*N+_*ae+P*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=h*m*c-x*d*c+x*l*f-a*m*f-h*l*p+a*d*p,v=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,_=u*x*c-g*h*c+g*a*f-o*x*f-u*a*p+o*h*p,P=g*h*l-u*x*l-g*a*d+o*x*d+u*a*m-o*h*m,b=t*y+n*v+s*_+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/b;return e[0]=y*R,e[1]=(x*d*r-h*m*r-x*s*f+n*m*f+h*s*p-n*d*p)*R,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*R,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*R,e[4]=v*R,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=_*R,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*R,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*R,e[12]=P*R,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*m+t*h*m)*R,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,y=l*c,v=l*u,_=l*h,P=n.x,b=n.y,R=n.z;return s[0]=(1-(x+p))*P,s[1]=(f+_)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(d+p))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(g+v)*R,s[9]=(m-y)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=zs.set(s[0],s[1],s[2]).length(),o=zs.set(s[4],s[5],s[6]).length(),a=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vn.copy(this);let c=1/r,u=1/o,h=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=u,Vn.elements[5]*=u,Vn.elements[6]*=u,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,t.setFromRotationMatrix(Vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ei){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===Ei)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ia)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ei){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u,g,x;if(a===Ei)g=(o+r)*h,x=-2*h;else if(a===Ia)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zs=new C,Vn=new Ye,C0=new C(0,0,0),I0=new C(1,1,1),Bi=new C,Qo=new C,yn=new C,Td=new Ye,wd=new Yt,Dn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Td.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Td,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wd.setFromEuler(this),this.setFromQuaternion(wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var fo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},P0=0,Ad=new C,Vs=new Yt,xi=new Ye,ea=new C,$r=new C,L0=new C,D0=new Yt,Rd=new C(1,0,0),Cd=new C(0,1,0),Id=new C(0,0,1),Pd={type:"added"},U0={type:"removed"},Gs={type:"childadded",child:null},Ol={type:"childremoved",child:null},It=class i extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Dn,n=new Yt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new Qe}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Rd,e)}rotateY(e){return this.rotateOnAxis(Cd,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,t){return Ad.copy(e).applyQuaternion(this.quaternion),this.position.add(Ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rd,e)}translateY(e){return this.translateOnAxis(Cd,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ea.copy(e):ea.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt($r,ea,this.up):xi.lookAt(ea,$r,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(xi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(U0),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,L0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,D0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};It.DEFAULT_UP=new C(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=new C,_i=new C,Bl=new C,vi=new C,Ws=new C,Xs=new C,Ld=new C,kl=new C,Hl=new C,zl=new C,Vl=new at,Gl=new at,Wl=new at,gs=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gn.subVectors(e,t),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gn.subVectors(s,t),_i.subVectors(n,t),Bl.subVectors(e,t);let o=Gn.dot(Gn),a=Gn.dot(_i),l=Gn.dot(Bl),c=_i.dot(_i),u=_i.dot(Bl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Vl.setScalar(0),Gl.setScalar(0),Wl.setScalar(0),Vl.fromBufferAttribute(e,t),Gl.fromBufferAttribute(e,n),Wl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vl,r.x),o.addScaledVector(Gl,r.y),o.addScaledVector(Wl,r.z),o}static isFrontFacing(e,t,n,s){return Gn.subVectors(n,t),_i.subVectors(e,t),Gn.cross(_i).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Gn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ws.subVectors(s,n),Xs.subVectors(r,n),kl.subVectors(e,n);let l=Ws.dot(kl),c=Xs.dot(kl);if(l<=0&&c<=0)return t.copy(n);Hl.subVectors(e,s);let u=Ws.dot(Hl),h=Xs.dot(Hl);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ws,o);zl.subVectors(e,r);let f=Ws.dot(zl),g=Xs.dot(zl);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Xs,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Ld.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Ld,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},ta={h:0,s:0,l:0};function Xl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=Wh(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xl(o,r,e+1/3),this.g=Xl(o,r,e),this.b=Xl(o,r,e-1/3)}return it.toWorkingColorSpace(this,s),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let n=Zf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return it.fromWorkingColorSpace(en.copy(this),e),Math.round(Ht(en.r*255,0,255))*65536+Math.round(Ht(en.g*255,0,255))*256+Math.round(Ht(en.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(en.copy(this),t);let n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=vt){it.fromWorkingColorSpace(en.copy(this),e);let t=en.r,n=en.g,s=en.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(ta);let n=ro(ki.h,ta.h,t),s=ro(ki.s,ta.s,t),r=ro(ki.l,ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Ce;Ce.NAMES=Zf;var N0=0,En=class extends wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Pn(),this.name="",this.blending=nr,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=hc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cc&&(n.blendSrc=this.blendSrc),this.blendDst!==hc&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==md&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Le=class extends En{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new C,na=new ce,Ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}};var Da=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ua=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},F0=0,Cn=new Ye,ql=new It,qs=new C,Mn=new nn,Zr=new nn,Wt=new C,At=class i extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($f(e)?Ua:Da)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Mn.min,Zr.min),Mn.expandByPoint(Wt),Wt.addVectors(Mn.max,Zr.max),Mn.expandByPoint(Wt)):(Mn.expandByPoint(Zr.min),Mn.expandByPoint(Zr.max))}Mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&(qs.fromBufferAttribute(e,c),Wt.add(qs)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new C,l[I]=new C;let c=new C,u=new C,h=new C,d=new ce,f=new ce,g=new ce,x=new C,m=new C;function p(I,S,E){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[I].add(x),a[S].add(x),a[E].add(x),l[I].add(m),l[S].add(m),l[E].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,S=y.length;I<S;++I){let E=y[I],L=E.start,V=E.count;for(let N=L,W=L+V;N<W;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let v=new C,_=new C,P=new C,b=new C;function R(I){P.fromBufferAttribute(s,I),b.copy(P);let S=a[I];v.copy(S),v.sub(P.multiplyScalar(P.dot(S))).normalize(),_.crossVectors(b,S);let L=_.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,L)}for(let I=0,S=y.length;I<S;++I){let E=y[I],L=E.start,V=E.count;for(let N=L,W=L+V;N<W;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Ut(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dd=new Ye,hs=new vs,ia=new bn,Ud=new C,sa=new C,ra=new C,oa=new C,Yl=new C,aa=new C,Nd=new C,la=new C,ee=class extends It{constructor(e=new At,t=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Yl.fromBufferAttribute(h,e),o?aa.addScaledVector(Yl,u):aa.addScaledVector(Yl.sub(t),u))}t.add(aa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(ia.containsPoint(hs.origin)===!1&&(hs.intersectSphere(ia,Ud)===null||hs.origin.distanceToSquared(Ud)>(e.far-e.near)**2))&&(Dd.copy(r).invert(),hs.copy(e.ray).applyMatrix4(Dd),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,P=v;_<P;_+=3){let b=a.getX(_),R=a.getX(_+1),I=a.getX(_+2);s=ca(this,p,e,n,c,u,h,b,R,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=ca(this,o,e,n,c,u,h,y,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,P=v;_<P;_+=3){let b=_,R=_+1,I=_+2;s=ca(this,p,e,n,c,u,h,b,R,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,_=m+2;s=ca(this,o,e,n,c,u,h,y,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function O0(i,e,t,n,s,r,o,a){let l;if(e.side===Xt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ln,a),l===null)return null;la.copy(a),la.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(la);return c<t.near||c>t.far?null:{distance:c,point:la.clone(),object:i}}function ca(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,sa),i.getVertexPosition(l,ra),i.getVertexPosition(c,oa);let u=O0(i,e,t,n,sa,ra,oa,Nd);if(u){let h=new C;gs.getBarycoord(Nd,sa,ra,oa,h),s&&(u.uv=gs.getInterpolatedAttribute(s,a,l,c,h,new ce)),r&&(u.uv1=gs.getInterpolatedAttribute(r,a,l,c,h,new ce)),o&&(u.normal=gs.getInterpolatedAttribute(o,a,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};gs.getNormal(sa,ra,oa,d.normal),u.face=d,u.barycoord=h}return u}var Ke=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(h,2));function g(x,m,p,y,v,_,P,b,R,I,S){let E=_/R,L=P/I,V=_/2,N=P/2,W=b/2,Z=R+1,G=I+1,ae=0,X=0,me=new C;for(let xe=0;xe<G;xe++){let re=xe*L-N;for(let Pe=0;Pe<Z;Pe++){let Xe=Pe*E-V;me[x]=Xe*y,me[m]=re*v,me[p]=W,c.push(me.x,me.y,me.z),me[x]=0,me[m]=0,me[p]=b>0?1:-1,u.push(me.x,me.y,me.z),h.push(Pe/R),h.push(1-xe/I),ae+=1}}for(let xe=0;xe<I;xe++)for(let re=0;re<R;re++){let Pe=d+re+Z*xe,Xe=d+re+Z*(xe+1),ne=d+(re+1)+Z*(xe+1),fe=d+(re+1)+Z*xe;l.push(Pe,Xe,fe),l.push(Xe,ne,fe),X+=6}a.addGroup(f,X,S),f+=X,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function pr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function hn(i){let e={};for(let t=0;t<i.length;t++){let n=pr(i[t]);for(let s in n)e[s]=n[s]}return e}function B0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var ai={clone:pr,merge:hn},k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,St=class extends En{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=B0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Na=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hi=new C,Fd=new ce,Od=new ce,Lt=class extends Na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Fd,Od),t.subVectors(Od,Fd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(so*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ys=-90,Ks=1,Zc=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Lt(Ys,Ks,e,t);s.layers=this.layers,this.add(s);let r=new Lt(Ys,Ks,e,t);r.layers=this.layers,this.add(r);let o=new Lt(Ys,Ks,e,t);o.layers=this.layers,this.add(o);let a=new Lt(Ys,Ks,e,t);a.layers=this.layers,this.add(a);let l=new Lt(Ys,Ks,e,t);l.layers=this.layers,this.add(l);let c=new Lt(Ys,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fa=class extends Kt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ar,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jc=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ke(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:ri});r.uniforms.tEquirect.value=t;let o=new ee(s,r),a=t.minFilter;return t.minFilter===si&&(t.minFilter=tn),new Zc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Kl=new C,z0=new C,V0=new Qe,Wn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Kl.subVectors(n,t).cross(z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Kl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||V0.getNormalMatrix(e),s=this.coplanarPoint(Kl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},us=new bn,ha=new C,po=class{constructor(e=new Wn,t=new Wn,n=new Wn,s=new Wn,r=new Wn,o=new Wn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],v=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,m-f,_-p).normalize(),n[1].setComponents(l+r,d+c,m+f,_+p).normalize(),n[2].setComponents(l+o,d+u,m+g,_+y).normalize(),n[3].setComponents(l-o,d-u,m-g,_-y).normalize(),n[4].setComponents(l-a,d-h,m-x,_-v).normalize(),t===Ei)n[5].setComponents(l+a,d+h,m+x,_+v).normalize();else if(t===Ia)n[5].setComponents(a,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ha.x=s.normal.x>0?e.max.x:e.min.x,ha.y=s.normal.y>0?e.max.y:e.min.y,ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function G0(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var yt=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let y=p*d-o;for(let v=0;v<c;v++){let _=v*h-r;g.push(_,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let v=y+c*p,_=y+c*(p+1),P=y+1+c*(p+1),b=y+1+c*p;f.push(v,_,b),f.push(_,P,b)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ng=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ig=`#ifdef USE_IRIDESCENCE
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
#endif`,sg=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fg=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,pg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,mg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
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
}`,Lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ng=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Fg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Gg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qg=`#if defined( USE_POINTS_UV )
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
#endif`,ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,fx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ix=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ox=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bx=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,Vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Zx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Jx=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i_=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,s_=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,o_=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,l_=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,h_=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,d_=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,p_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,g_=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,y_=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,M_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:W0,alphahash_pars_fragment:X0,alphamap_fragment:q0,alphamap_pars_fragment:Y0,alphatest_fragment:K0,alphatest_pars_fragment:$0,aomap_fragment:Z0,aomap_pars_fragment:j0,batching_pars_vertex:J0,batching_vertex:Q0,begin_vertex:eg,beginnormal_vertex:tg,bsdfs:ng,iridescence_fragment:ig,bumpmap_pars_fragment:sg,clipping_planes_fragment:rg,clipping_planes_pars_fragment:og,clipping_planes_pars_vertex:ag,clipping_planes_vertex:lg,color_fragment:cg,color_pars_fragment:hg,color_pars_vertex:ug,color_vertex:dg,common:fg,cube_uv_reflection_fragment:pg,defaultnormal_vertex:mg,displacementmap_pars_vertex:gg,displacementmap_vertex:xg,emissivemap_fragment:_g,emissivemap_pars_fragment:vg,colorspace_fragment:yg,colorspace_pars_fragment:Mg,envmap_fragment:bg,envmap_common_pars_fragment:Eg,envmap_pars_fragment:Sg,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Fg,envmap_vertex:wg,fog_vertex:Ag,fog_pars_vertex:Rg,fog_fragment:Cg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Pg,lightmap_pars_fragment:Lg,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Ug,lights_pars_begin:Ng,lights_toon_fragment:Og,lights_toon_pars_fragment:Bg,lights_phong_fragment:kg,lights_phong_pars_fragment:Hg,lights_physical_fragment:zg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Gg,lights_fragment_maps:Wg,lights_fragment_end:Xg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:$g,map_fragment:Zg,map_pars_fragment:jg,map_particle_fragment:Jg,map_particle_pars_fragment:Qg,metalnessmap_fragment:ex,metalnessmap_pars_fragment:tx,morphinstance_vertex:nx,morphcolor_vertex:ix,morphnormal_vertex:sx,morphtarget_pars_vertex:rx,morphtarget_vertex:ox,normal_fragment_begin:ax,normal_fragment_maps:lx,normal_pars_fragment:cx,normal_pars_vertex:hx,normal_vertex:ux,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:fx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:gx,opaque_fragment:xx,packing:_x,premultiplied_alpha_fragment:vx,project_vertex:yx,dithering_fragment:Mx,dithering_pars_fragment:bx,roughnessmap_fragment:Ex,roughnessmap_pars_fragment:Sx,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:wx,shadowmap_vertex:Ax,shadowmask_pars_fragment:Rx,skinbase_vertex:Cx,skinning_pars_vertex:Ix,skinning_vertex:Px,skinnormal_vertex:Lx,specularmap_fragment:Dx,specularmap_pars_fragment:Ux,tonemapping_fragment:Nx,tonemapping_pars_fragment:Fx,transmission_fragment:Ox,transmission_pars_fragment:Bx,uv_pars_fragment:kx,uv_pars_vertex:Hx,uv_vertex:zx,worldpos_vertex:Vx,background_vert:Gx,background_frag:Wx,backgroundCube_vert:Xx,backgroundCube_frag:qx,cube_vert:Yx,cube_frag:Kx,depth_vert:$x,depth_frag:Zx,distanceRGBA_vert:jx,distanceRGBA_frag:Jx,equirect_vert:Qx,equirect_frag:e_,linedashed_vert:t_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:s_,meshlambert_vert:r_,meshlambert_frag:o_,meshmatcap_vert:a_,meshmatcap_frag:l_,meshnormal_vert:c_,meshnormal_frag:h_,meshphong_vert:u_,meshphong_frag:d_,meshphysical_vert:f_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:g_,points_vert:x_,points_frag:__,shadow_vert:v_,shadow_frag:y_,sprite_vert:M_,sprite_frag:b_},Ee={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},ii={basic:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ce(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:hn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:hn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:hn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ce(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:hn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:hn([Ee.points,Ee.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:hn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:hn([Ee.common,Ee.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:hn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:hn([Ee.sprite,Ee.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:hn([Ee.common,Ee.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:hn([Ee.lights,Ee.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ii.physical={uniforms:hn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var ua={r:0,b:0,g:0},ds=new Dn,E_=new Ye;function S_(i,e,t,n,s,r,o){let a=new Ce(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function x(y){let v=!1,_=g(y);_===null?p(a,l):_&&_.isColor&&(p(_,1),v=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===al)?(u===void 0&&(u=new ee(new Ke(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:pr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ds.copy(v.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(E_.makeRotationFromEuler(ds)),u.material.toneMapped=it.getTransfer(_.colorSpace)!==mt,(h!==_||d!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ee(new yt(2,2),new St({name:"BackgroundMaterial",uniforms:pr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=it.getTransfer(_.colorSpace)!==mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(ua,jf(i)),n.buffers.color.setClear(ua.r,ua.g,ua.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:m}}function T_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(E,L,V,N,W){let Z=!1,G=h(N,V,L);r!==G&&(r=G,c(r.object)),Z=f(E,N,V,W),Z&&g(E,N,V,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,_(E,L,V,N),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,L,V){let N=V.wireframe===!0,W=n[E.id];W===void 0&&(W={},n[E.id]=W);let Z=W[L.id];Z===void 0&&(Z={},W[L.id]=Z);let G=Z[N];return G===void 0&&(G=d(l()),Z[N]=G),G}function d(E){let L=[],V=[],N=[];for(let W=0;W<t;W++)L[W]=0,V[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:N,object:E,attributes:{},index:null}}function f(E,L,V,N){let W=r.attributes,Z=L.attributes,G=0,ae=V.getAttributes();for(let X in ae)if(ae[X].location>=0){let xe=W[X],re=Z[X];if(re===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(re=E.instanceColor)),xe===void 0||xe.attribute!==re||re&&xe.data!==re.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function g(E,L,V,N){let W={},Z=L.attributes,G=0,ae=V.getAttributes();for(let X in ae)if(ae[X].location>=0){let xe=Z[X];xe===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(xe=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(xe=E.instanceColor));let re={};re.attribute=xe,xe&&xe.data&&(re.data=xe.data),W[X]=re,G++}r.attributes=W,r.attributesNum=G,r.index=N}function x(){let E=r.newAttributes;for(let L=0,V=E.length;L<V;L++)E[L]=0}function m(E){p(E,0)}function p(E,L){let V=r.newAttributes,N=r.enabledAttributes,W=r.attributeDivisors;V[E]=1,N[E]===0&&(i.enableVertexAttribArray(E),N[E]=1),W[E]!==L&&(i.vertexAttribDivisor(E,L),W[E]=L)}function y(){let E=r.newAttributes,L=r.enabledAttributes;for(let V=0,N=L.length;V<N;V++)L[V]!==E[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function v(E,L,V,N,W,Z,G){G===!0?i.vertexAttribIPointer(E,L,V,W,Z):i.vertexAttribPointer(E,L,V,N,W,Z)}function _(E,L,V,N){x();let W=N.attributes,Z=V.getAttributes(),G=L.defaultAttributeValues;for(let ae in Z){let X=Z[ae];if(X.location>=0){let me=W[ae];if(me===void 0&&(ae==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),ae==="instanceColor"&&E.instanceColor&&(me=E.instanceColor)),me!==void 0){let xe=me.normalized,re=me.itemSize,Pe=e.get(me);if(Pe===void 0)continue;let Xe=Pe.buffer,ne=Pe.type,fe=Pe.bytesPerElement,q=ne===i.INT||ne===i.UNSIGNED_INT||me.gpuType===Fh;if(me.isInterleavedBufferAttribute){let se=me.data,ge=se.stride,Te=me.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<X.locationSize;be++)p(X.location+be,se.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<X.locationSize;be++)m(X.location+be);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let be=0;be<X.locationSize;be++)v(X.location+be,re/X.locationSize,ne,xe,ge*fe,(Te+re/X.locationSize*be)*fe,q)}else{if(me.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)p(X.location+se,me.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let se=0;se<X.locationSize;se++)m(X.location+se);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let se=0;se<X.locationSize;se++)v(X.location+se,re/X.locationSize,ne,xe,re*fe,re/X.locationSize*se*fe,q)}}else if(G!==void 0){let xe=G[ae];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(X.location,xe);break;case 3:i.vertexAttrib3fv(X.location,xe);break;case 4:i.vertexAttrib4fv(X.location,xe);break;default:i.vertexAttrib1fv(X.location,xe)}}}}y()}function P(){I();for(let E in n){let L=n[E];for(let V in L){let N=L[V];for(let W in N)u(N[W].object),delete N[W];delete L[V]}delete n[E]}}function b(E){if(n[E.id]===void 0)return;let L=n[E.id];for(let V in L){let N=L[V];for(let W in N)u(N[W].object),delete N[W];delete L[V]}delete n[E.id]}function R(E){for(let L in n){let V=n[L];if(V[E.id]===void 0)continue;let N=V[E.id];for(let W in N)u(N[W].object),delete N[W];delete V[E.id]}}function I(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function w_(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function A_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==In&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let I=R===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ti&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==qn&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:P,maxSamples:b}}function R_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Wn,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let y=r?0:n,v=y*4,_=p.clippingState||null;l.value=_,_=u(g,d,v,f);for(let P=0;P!==v;++P)_[P]=t[P];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==x;++v,_+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function C_(i){let e=new WeakMap;function t(o,a){return a===_c?o.mapping=ar:a===vc&&(o.mapping=lr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===_c||a===vc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new jc(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Xi=class extends Na{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},er=4,Bd=[.125,.215,.35,.446,.526,.582],xs=20,$l=new Xi,kd=new Ce,Zl=null,jl=0,Jl=0,Ql=!1,ps=(1+Math.sqrt(5))/2,$s=1/ps,Hd=[new C(-ps,$s,0),new C(ps,$s,0),new C(-$s,0,ps),new C($s,0,ps),new C(0,ps,-$s),new C(0,ps,$s),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Oa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Zl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zl,jl,Jl),this._renderer.xr.enabled=Ql,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:un,format:In,colorSpace:sn,depthBuffer:!1},s=zd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I_(r)),this._blurMaterial=P_(r,e,t)}return s}_compileMaterial(e){let t=new ee(this._lodPlanes[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,n,s){let a=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(kd),u.toneMapping=Gi,u.autoClear=!1;let f=new Le({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new ee(new Ke,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(kd),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;da(s,y*v,p>2?v:0,v,v),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ar||e.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;da(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$l)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hd[(s-r-1)%Hd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ee(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):xs;m>xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xs}`);let p=[],y=0;for(let R=0;R<xs;++R){let I=R/x,S=Math.exp(-I*I/2);p.push(S),R===0?y+=S:R<m&&(y+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let _=this._sizeLods[s],P=3*_*(s>v-er?s-v+er:0),b=4*(this._cubeSize-_);da(t,P,b,3*_,2*_),l.setRenderTarget(t),l.render(h,$l)}};function I_(i){let e=[],t=[],n=[],s=i,r=i-er+1+Bd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-er?l=Bd[o-i+er-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let b=0;b<f;b++){let R=b%3*2/3-1,I=b>2?0:-1,S=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(S,x*g*b),v.set(d,m*g*b);let E=[b,b,b,b,b,b];_.set(E,p*g*b)}let P=new At;P.setAttribute("position",new Ut(y,x)),P.setAttribute("uv",new Ut(v,m)),P.setAttribute("faceIndex",new Ut(_,p)),e.push(P),s>er&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zd(i,e,t){let n=new Ot(i,e,t);return n.texture.mapping=al,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function P_(i,e,t){let n=new Float32Array(xs),s=new C(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Vd(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Gd(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Xh(){return`

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
	`}function L_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===_c||l===vc,u=l===ar||l===lr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Oa(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Oa(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function D_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&to("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function U_(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let v=0,_=y.length;v<_;v+=3){let P=y[v+0],b=y[v+1],R=y[v+2];d.push(P,b,b,R,R,P)}}else if(g!==void 0){let y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let P=v+0,b=v+1,R=v+2;d.push(P,b,b,R,R,P)}}else return;let m=new($f(d)?Ua:Da)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function N_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function F_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function O_(i,e,t){let n=new WeakMap,s=new at;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,P=1;_>e.maxTextureSize&&(P=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let b=new Float32Array(_*P*4*h),R=new La(b,_,P,h);R.type=qn,R.needsUpdate=!0;let I=v*4;for(let E=0;E<h;E++){let L=m[E],V=p[E],N=y[E],W=_*P*4*E;for(let Z=0;Z<L.count;Z++){let G=Z*I;f===!0&&(s.fromBufferAttribute(L,Z),b[W+G+0]=s.x,b[W+G+1]=s.y,b[W+G+2]=s.z,b[W+G+3]=0),g===!0&&(s.fromBufferAttribute(V,Z),b[W+G+4]=s.x,b[W+G+5]=s.y,b[W+G+6]=s.z,b[W+G+7]=0),x===!0&&(s.fromBufferAttribute(N,Z),b[W+G+8]=s.x,b[W+G+9]=s.y,b[W+G+10]=s.z,b[W+G+11]=N.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new ce(_,P)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function B_(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ba=class extends Kt{constructor(e,t,n,s,r,o,a,l,c,u=ir){if(u!==ir&&u!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ir&&(n=_s),n===void 0&&u===hr&&(n=cr),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Qf=new Kt,Wd=new Ba(1,1),ep=new La,tp=new $c,np=new Fa,Xd=[],qd=[],Yd=new Float32Array(16),Kd=new Float32Array(9),$d=new Float32Array(4);function Er(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Xd[s];if(r===void 0&&(r=new Float32Array(s),Xd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ul(i,e){let t=qd[e];t===void 0&&(t=new Int32Array(e),qd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function k_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function G_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;$d.set(n),i.uniformMatrix2fv(this.addr,!1,$d),Vt(t,n)}}function W_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;Kd.set(n),i.uniformMatrix3fv(this.addr,!1,Kd),Vt(t,n)}}function X_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(zt(t,n))return;Yd.set(n),i.uniformMatrix4fv(this.addr,!1,Yd),Vt(t,n)}}function q_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function K_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function Z_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function ev(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wd.compareFunction=Kf,r=Wd):r=Qf,t.setTexture2D(e||r,s)}function tv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tp,s)}function nv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||np,s)}function iv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ep,s)}function sv(i){switch(i){case 5126:return k_;case 35664:return H_;case 35665:return z_;case 35666:return V_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return K_;case 35669:case 35673:return $_;case 5125:return Z_;case 36294:return j_;case 36295:return J_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}function rv(i,e){i.uniform1fv(this.addr,e)}function ov(i,e){let t=Er(e,this.size,2);i.uniform2fv(this.addr,t)}function av(i,e){let t=Er(e,this.size,3);i.uniform3fv(this.addr,t)}function lv(i,e){let t=Er(e,this.size,4);i.uniform4fv(this.addr,t)}function cv(i,e){let t=Er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hv(i,e){let t=Er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function uv(i,e){let t=Er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dv(i,e){i.uniform1iv(this.addr,e)}function fv(i,e){i.uniform2iv(this.addr,e)}function pv(i,e){i.uniform3iv(this.addr,e)}function mv(i,e){i.uniform4iv(this.addr,e)}function gv(i,e){i.uniform1uiv(this.addr,e)}function xv(i,e){i.uniform2uiv(this.addr,e)}function _v(i,e){i.uniform3uiv(this.addr,e)}function vv(i,e){i.uniform4uiv(this.addr,e)}function yv(i,e,t){let n=this.cache,s=e.length,r=ul(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Qf,r[o])}function Mv(i,e,t){let n=this.cache,s=e.length,r=ul(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||tp,r[o])}function bv(i,e,t){let n=this.cache,s=e.length,r=ul(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||np,r[o])}function Ev(i,e,t){let n=this.cache,s=e.length,r=ul(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ep,r[o])}function Sv(i){switch(i){case 5126:return rv;case 35664:return ov;case 35665:return av;case 35666:return lv;case 35674:return cv;case 35675:return hv;case 35676:return uv;case 5124:case 35670:return dv;case 35667:case 35671:return fv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return xv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return Ev}}var Jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sv(t.type)}},Qc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sv(t.type)}},eh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ec=/(\w+)(\])?(\[|\.)?/g;function Zd(i,e){i.seq.push(e),i.map[e.id]=e}function Tv(i,e,t){let n=i.name,s=n.length;for(ec.lastIndex=0;;){let r=ec.exec(n),o=ec.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zd(t,c===void 0?new Jc(a,i,e):new Qc(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new eh(a),Zd(t,h)),t=h}}}var rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Tv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function jd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var wv=37297,Av=0;function Rv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Jd=new Qe;function Cv(i){it._getMatrix(Jd,it.workingColorSpace,i);let e=`mat3( ${Jd.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case cl:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Rv(i.getShaderSource(e),o)}else return s}function Iv(i,e){let t=Cv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pv(i,e){let t;switch(e){case Ih:t="Linear";break;case Ph:t="Reinhard";break;case Lh:t="Cineon";break;case br:t="ACESFilmic";break;case Dh:t="AgX";break;case Uh:t="Neutral";break;case Wm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fa=new C;function Lv(){it.getLuminanceCoefficients(fa);let i=fa.x.toFixed(4),e=fa.y.toFixed(4),t=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function Uv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function no(i){return i!==""}function ef(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(i){return i.replace(Fv,Bv)}var Ov=new Map;function Bv(i,e){let t=nt[e];if(t===void 0){let n=Ov.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return th(t)}var kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(i){return i.replace(kv,Hv)}function Hv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Em?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Vv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ar:case lr:e="ENVMAP_TYPE_CUBE";break;case al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function Wv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nf:e="ENVMAP_BLENDING_MULTIPLY";break;case Vm:e="ENVMAP_BLENDING_MIX";break;case Gm:e="ENVMAP_BLENDING_ADD";break}return e}function Xv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=zv(t),c=Vv(t),u=Gv(t),h=Wv(t),d=Xv(t),f=Dv(t),g=Uv(r),x=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(no).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(no).join(`
`),p.length>0&&(p+=`
`)):(m=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),p=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?nt.tonemapping_pars_fragment:"",t.toneMapping!==Gi?Pv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Iv("linearToOutputTexel",t.outputColorSpace),Lv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),o=th(o),o=ef(o,t),o=tf(o,t),a=th(a),a=ef(a,t),a=tf(a,t),o=nf(o),a=nf(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+m+o,_=y+p+a,P=jd(s,s.VERTEX_SHADER,v),b=jd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,P),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(P).trim(),W=s.getShaderInfoLog(b).trim(),Z=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,b);else{let ae=Qd(s,P,"vertex"),X=Qd(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+ae+`
`+X)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(N===""||W==="")&&(G=!1);G&&(L.diagnostics={runnable:Z,programLog:V,vertexShader:{log:N,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(P),s.deleteShader(b),I=new rr(s,x),S=Nv(s,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,wv)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Av++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=b,this}var Yv=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ih(e),t.set(e,n)),n}},ih=class{constructor(e){this.id=Yv++,this.code=e,this.usedTimes=0}};function Kv(i,e,t,n,s,r,o){let a=new fo,l=new nh,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,E,L,V,N){let W=V.fog,Z=N.geometry,G=S.isMeshStandardMaterial?V.environment:null,ae=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),X=ae&&ae.mapping===al?ae.image.height:null,me=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let xe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,re=xe!==void 0?xe.length:0,Pe=0;Z.morphAttributes.position!==void 0&&(Pe=1),Z.morphAttributes.normal!==void 0&&(Pe=2),Z.morphAttributes.color!==void 0&&(Pe=3);let Xe,ne,fe,q;if(me){let xt=ii[me];Xe=xt.vertexShader,ne=xt.fragmentShader}else Xe=S.vertexShader,ne=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),q=l.getFragmentShaderID(S);let se=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Te=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,qe=!!S.map,F=!!S.matcap,B=!!ae,T=!!S.aoMap,pe=!!S.lightMap,K=!!S.bumpMap,ue=!!S.normalMap,D=!!S.displacementMap,Y=!!S.emissiveMap,z=!!S.metalnessMap,w=!!S.roughnessMap,M=S.anisotropy>0,U=S.clearcoat>0,$=S.dispersion>0,te=S.iridescence>0,Q=S.sheen>0,ye=S.transmission>0,he=M&&!!S.anisotropyMap,Me=U&&!!S.clearcoatMap,We=U&&!!S.clearcoatNormalMap,de=U&&!!S.clearcoatRoughnessMap,we=te&&!!S.iridescenceMap,Ve=te&&!!S.iridescenceThicknessMap,Ge=Q&&!!S.sheenColorMap,Ne=Q&&!!S.sheenRoughnessMap,ot=!!S.specularMap,tt=!!S.specularColorMap,bt=!!S.specularIntensityMap,O=ye&&!!S.transmissionMap,Se=ye&&!!S.thicknessMap,ie=!!S.gradientMap,le=!!S.alphaMap,Ie=S.alphaTest>0,Ae=!!S.alphaHash,je=!!S.extensions,Pt=Gi;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Pt=i.toneMapping);let Jt={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:ne,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:be,batchingColor:be&&N._colorsTexture!==null,instancing:Te,instancingColor:Te&&N.instanceColor!==null,instancingMorph:Te&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:sn,alphaToCoverage:!!S.alphaToCoverage,map:qe,matcap:F,envMap:B,envMapMode:B&&ae.mapping,envMapCubeUVHeight:X,aoMap:T,lightMap:pe,bumpMap:K,normalMap:ue,displacementMap:d&&D,emissiveMap:Y,normalMapObjectSpace:ue&&S.normalMapType===Jm,normalMapTangentSpace:ue&&S.normalMapType===Yf,metalnessMap:z,roughnessMap:w,anisotropy:M,anisotropyMap:he,clearcoat:U,clearcoatMap:Me,clearcoatNormalMap:We,clearcoatRoughnessMap:de,dispersion:$,iridescence:te,iridescenceMap:we,iridescenceThicknessMap:Ve,sheen:Q,sheenColorMap:Ge,sheenRoughnessMap:Ne,specularMap:ot,specularColorMap:tt,specularIntensityMap:bt,transmission:ye,transmissionMap:O,thicknessMap:Se,gradientMap:ie,opaque:S.transparent===!1&&S.blending===nr&&S.alphaToCoverage===!1,alphaMap:le,alphaTest:Ie,alphaHash:Ae,combine:S.combine,mapUv:qe&&x(S.map.channel),aoMapUv:T&&x(S.aoMap.channel),lightMapUv:pe&&x(S.lightMap.channel),bumpMapUv:K&&x(S.bumpMap.channel),normalMapUv:ue&&x(S.normalMap.channel),displacementMapUv:D&&x(S.displacementMap.channel),emissiveMapUv:Y&&x(S.emissiveMap.channel),metalnessMapUv:z&&x(S.metalnessMap.channel),roughnessMapUv:w&&x(S.roughnessMap.channel),anisotropyMapUv:he&&x(S.anisotropyMap.channel),clearcoatMapUv:Me&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:We&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&x(S.sheenRoughnessMap.channel),specularMapUv:ot&&x(S.specularMap.channel),specularColorMapUv:tt&&x(S.specularColorMap.channel),specularIntensityMapUv:bt&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:Se&&x(S.thicknessMap.channel),alphaMapUv:le&&x(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ue||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Z.attributes.uv&&(qe||le),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ge,skinning:N.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Pe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:qe&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===mt,decodeVideoTextureEmissive:Y&&S.emissiveMap.isVideoTexture===!0&&it.getTransfer(S.emissiveMap.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Dt,flipSided:S.side===Xt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:je&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&S.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)E.push(L),E.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(y(E,S),v(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function y(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let E=g[S.type],L;if(E){let V=ii[E];L=ai.clone(V.uniforms)}else L=S.uniforms;return L}function P(S,E){let L;for(let V=0,N=u.length;V<N;V++){let W=u[V];if(W.cacheKey===E){L=W,++L.usedTimes;break}}return L===void 0&&(L=new qv(i,E,S,r),u.push(L)),L}function b(S){if(--S.usedTimes===0){let E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:b,releaseShaderCache:R,programs:u,dispose:I}}function $v(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Zv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function of(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Zv),n.length>1&&n.sort(d||rf),s.length>1&&s.sort(d||rf)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function jv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new of,i.set(n,[o])):s>=r.length?(o=new of,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ce};break;case"SpotLight":t={position:new C,direction:new C,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Qv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ey=0;function ty(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ny(i){let e=new Jv,t=Qv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Ye,o=new Ye;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,v=0,_=0,P=0,b=0,R=0;c.sort(ty);for(let S=0,E=c.length;S<E;S++){let L=c[S],V=L.color,N=L.intensity,W=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=V.r*N,h+=V.g*N,d+=V.b*N;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],N);R++}else if(L.isDirectionalLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ae=L.shadow,X=t.get(L);X.shadowIntensity=ae.intensity,X.shadowBias=ae.bias,X.shadowNormalBias=ae.normalBias,X.shadowRadius=ae.radius,X.shadowMapSize=ae.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=G,f++}else if(L.isSpotLight){let G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(V).multiplyScalar(N),G.distance=W,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[x]=G;let ae=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,ae.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[x]=ae.matrix,L.castShadow){let X=t.get(L);X.shadowIntensity=ae.intensity,X.shadowBias=ae.bias,X.shadowNormalBias=ae.normalBias,X.shadowRadius=ae.radius,X.shadowMapSize=ae.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=Z,_++}x++}else if(L.isRectAreaLight){let G=e.get(L);G.color.copy(V).multiplyScalar(N),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=G,m++}else if(L.isPointLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let ae=L.shadow,X=t.get(L);X.shadowIntensity=ae.intensity,X.shadowBias=ae.bias,X.shadowNormalBias=ae.normalBias,X.shadowRadius=ae.radius,X.shadowMapSize=ae.mapSize,X.shadowCameraNear=ae.camera.near,X.shadowCameraFar=ae.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=L.shadow.matrix,v++}n.point[g]=G,g++}else if(L.isHemisphereLight){let G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(N),G.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==v||I.numSpotShadows!==_||I.numSpotMaps!==P||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=v,I.numSpotShadows=_,I.numSpotMaps=P,I.numLightProbes=R,n.version=ey++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let v=c[p];if(v.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function af(i){let e=new ny(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function iy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new af(i),e.set(s,[a])):r>=o.length?(a=new af(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var sh=class extends En{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rh=class extends En{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ry=`uniform sampler2D shadow_pass;
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
}`;function oy(i,e,t){let n=new po,s=new ce,r=new ce,o=new at,a=new sh({depthPacking:jm}),l=new rh,c={},u=t.maxTextureSize,h={[Ln]:Xt,[Xt]:Ln,[Dt]:Dt},d=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:sy,fragmentShader:ry}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let p=this.type;this.render=function(b,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ri),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let N=p!==Mi&&this.type===Mi,W=p===Mi&&this.type!==Mi;for(let Z=0,G=b.length;Z<G;Z++){let ae=b[Z],X=ae.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let me=X.getFrameExtents();if(s.multiply(me),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,X.mapSize.y=r.y)),X.map===null||N===!0||W===!0){let re=this.type!==Mi?{minFilter:qt,magFilter:qt}:{};X.map!==null&&X.map.dispose(),X.map=new Ot(s.x,s.y,re),X.map.texture.name=ae.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let xe=X.getViewportCount();for(let re=0;re<xe;re++){let Pe=X.getViewport(re);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),V.viewport(o),X.updateMatrices(ae,re),n=X.getFrustum(),_(R,I,X.camera,ae,this.type)}X.isPointLightShadow!==!0&&this.type===Mi&&y(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,E,L)};function y(b,R){let I=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ot(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,I,f,x,null)}function v(b,R,I,S){let E=null,L=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)E=L;else if(E=I.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let V=E.uuid,N=R.uuid,W=c[V];W===void 0&&(W={},c[V]=W);let Z=W[N];Z===void 0&&(Z=E.clone(),W[N]=Z,R.addEventListener("dispose",P)),E=Z}if(E.visible=R.visible,E.wireframe=R.wireframe,S===Mi?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:h[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let V=i.properties.get(E);V.light=I}return E}function _(b,R,I,S,E){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Mi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);let N=e.update(b),W=b.material;if(Array.isArray(W)){let Z=N.groups;for(let G=0,ae=Z.length;G<ae;G++){let X=Z[G],me=W[X.materialIndex];if(me&&me.visible){let xe=v(b,me,S,E);b.onBeforeShadow(i,b,R,I,N,xe,X),i.renderBufferDirect(I,null,N,xe,b,X),b.onAfterShadow(i,b,R,I,N,xe,X)}}}else if(W.visible){let Z=v(b,W,S,E);b.onBeforeShadow(i,b,R,I,N,Z,null),i.renderBufferDirect(I,null,N,Z,b,null),b.onAfterShadow(i,b,R,I,N,Z,null)}}let V=b.children;for(let N=0,W=V.length;N<W;N++)_(V[N],R,I,S,E)}function P(b){b.target.removeEventListener("dispose",P);for(let I in c){let S=c[I],E=b.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var ay={[uc]:dc,[fc]:gc,[pc]:xc,[or]:mc,[dc]:uc,[gc]:fc,[xc]:pc,[mc]:or};function ly(i,e){function t(){let O=!1,Se=new at,ie=null,le=new at(0,0,0,0);return{setMask:function(Ie){ie!==Ie&&!O&&(i.colorMask(Ie,Ie,Ie,Ie),ie=Ie)},setLocked:function(Ie){O=Ie},setClear:function(Ie,Ae,je,Pt,Jt){Jt===!0&&(Ie*=Pt,Ae*=Pt,je*=Pt),Se.set(Ie,Ae,je,Pt),le.equals(Se)===!1&&(i.clearColor(Ie,Ae,je,Pt),le.copy(Se))},reset:function(){O=!1,ie=null,le.set(-1,0,0,0)}}}function n(){let O=!1,Se=!1,ie=null,le=null,Ie=null;return{setReversed:function(Ae){if(Se!==Ae){let je=e.get("EXT_clip_control");Se?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);let Pt=Ie;Ie=null,this.setClear(Pt)}Se=Ae},getReversed:function(){return Se},setTest:function(Ae){Ae?se(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(Ae){ie!==Ae&&!O&&(i.depthMask(Ae),ie=Ae)},setFunc:function(Ae){if(Se&&(Ae=ay[Ae]),le!==Ae){switch(Ae){case uc:i.depthFunc(i.NEVER);break;case dc:i.depthFunc(i.ALWAYS);break;case fc:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case pc:i.depthFunc(i.EQUAL);break;case mc:i.depthFunc(i.GEQUAL);break;case gc:i.depthFunc(i.GREATER);break;case xc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Ae}},setLocked:function(Ae){O=Ae},setClear:function(Ae){Ie!==Ae&&(Se&&(Ae=1-Ae),i.clearDepth(Ae),Ie=Ae)},reset:function(){O=!1,ie=null,le=null,Ie=null,Se=!1}}}function s(){let O=!1,Se=null,ie=null,le=null,Ie=null,Ae=null,je=null,Pt=null,Jt=null;return{setTest:function(xt){O||(xt?se(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(xt){Se!==xt&&!O&&(i.stencilMask(xt),Se=xt)},setFunc:function(xt,kn,fi){(ie!==xt||le!==kn||Ie!==fi)&&(i.stencilFunc(xt,kn,fi),ie=xt,le=kn,Ie=fi)},setOp:function(xt,kn,fi){(Ae!==xt||je!==kn||Pt!==fi)&&(i.stencilOp(xt,kn,fi),Ae=xt,je=kn,Pt=fi)},setLocked:function(xt){O=xt},setClear:function(xt){Jt!==xt&&(i.clearStencil(xt),Jt=xt)},reset:function(){O=!1,Se=null,ie=null,le=null,Ie=null,Ae=null,je=null,Pt=null,Jt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,P=null,b=null,R=new Ce(0,0,0),I=0,S=!1,E=null,L=null,V=null,N=null,W=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ae=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=ae>=1):X.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=ae>=2);let me=null,xe={},re=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),Xe=new at().fromArray(re),ne=new at().fromArray(Pe);function fe(O,Se,ie,le){let Ie=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(O,Ae),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<ie;je++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(Se+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return Ae}let q={};q[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(or),K(!1),ue(ud),se(i.CULL_FACE),T(ri);function se(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function ge(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Te(O,Se){return h[O]!==Se?(i.bindFramebuffer(O,Se),h[O]=Se,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Se),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function be(O,Se){let ie=f,le=!1;if(O){ie=d.get(Se),ie===void 0&&(ie=[],d.set(Se,ie));let Ie=O.textures;if(ie.length!==Ie.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,je=Ie.length;Ae<je;Ae++)ie[Ae]=i.COLOR_ATTACHMENT0+Ae;ie.length=Ie.length,le=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,le=!0);le&&i.drawBuffers(ie)}function qe(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let F={[ms]:i.FUNC_ADD,[Tm]:i.FUNC_SUBTRACT,[wm]:i.FUNC_REVERSE_SUBTRACT};F[Am]=i.MIN,F[Rm]=i.MAX;let B={[Cm]:i.ZERO,[Im]:i.ONE,[Pm]:i.SRC_COLOR,[cc]:i.SRC_ALPHA,[Om]:i.SRC_ALPHA_SATURATE,[Nm]:i.DST_COLOR,[Dm]:i.DST_ALPHA,[Lm]:i.ONE_MINUS_SRC_COLOR,[hc]:i.ONE_MINUS_SRC_ALPHA,[Fm]:i.ONE_MINUS_DST_COLOR,[Um]:i.ONE_MINUS_DST_ALPHA,[Bm]:i.CONSTANT_COLOR,[km]:i.ONE_MINUS_CONSTANT_COLOR,[Hm]:i.CONSTANT_ALPHA,[zm]:i.ONE_MINUS_CONSTANT_ALPHA};function T(O,Se,ie,le,Ie,Ae,je,Pt,Jt,xt){if(O===ri){x===!0&&(ge(i.BLEND),x=!1);return}if(x===!1&&(se(i.BLEND),x=!0),O!==Sm){if(O!==m||xt!==S){if((p!==ms||_!==ms)&&(i.blendEquation(i.FUNC_ADD),p=ms,_=ms),xt)switch(O){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yn:i.blendFunc(i.ONE,i.ONE);break;case dd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,v=null,P=null,b=null,R.set(0,0,0),I=0,m=O,S=xt}return}Ie=Ie||Se,Ae=Ae||ie,je=je||le,(Se!==p||Ie!==_)&&(i.blendEquationSeparate(F[Se],F[Ie]),p=Se,_=Ie),(ie!==y||le!==v||Ae!==P||je!==b)&&(i.blendFuncSeparate(B[ie],B[le],B[Ae],B[je]),y=ie,v=le,P=Ae,b=je),(Pt.equals(R)===!1||Jt!==I)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Jt),R.copy(Pt),I=Jt),m=O,S=!1}function pe(O,Se){O.side===Dt?ge(i.CULL_FACE):se(i.CULL_FACE);let ie=O.side===Xt;Se&&(ie=!ie),K(ie),O.blending===nr&&O.transparent===!1?T(ri):T(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let le=O.stencilWrite;a.setTest(le),le&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Y(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(O){E!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),E=O)}function ue(O){O!==Mm?(se(i.CULL_FACE),O!==L&&(O===ud?i.cullFace(i.BACK):O===bm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),L=O}function D(O){O!==V&&(G&&i.lineWidth(O),V=O)}function Y(O,Se,ie){O?(se(i.POLYGON_OFFSET_FILL),(N!==Se||W!==ie)&&(i.polygonOffset(Se,ie),N=Se,W=ie)):ge(i.POLYGON_OFFSET_FILL)}function z(O){O?se(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function w(O){O===void 0&&(O=i.TEXTURE0+Z-1),me!==O&&(i.activeTexture(O),me=O)}function M(O,Se,ie){ie===void 0&&(me===null?ie=i.TEXTURE0+Z-1:ie=me);let le=xe[ie];le===void 0&&(le={type:void 0,texture:void 0},xe[ie]=le),(le.type!==O||le.texture!==Se)&&(me!==ie&&(i.activeTexture(ie),me=ie),i.bindTexture(O,Se||q[O]),le.type=O,le.texture=Se)}function U(){let O=xe[me];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ve(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ge(O){Xe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Xe.copy(O))}function Ne(O){ne.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ne.copy(O))}function ot(O,Se){let ie=c.get(Se);ie===void 0&&(ie=new WeakMap,c.set(Se,ie));let le=ie.get(O);le===void 0&&(le=i.getUniformBlockIndex(Se,O.name),ie.set(O,le))}function tt(O,Se){let le=c.get(Se).get(O);l.get(Se)!==le&&(i.uniformBlockBinding(Se,le,O.__bindingPointIndex),l.set(Se,le))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},me=null,xe={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,v=null,_=null,P=null,b=null,R=new Ce(0,0,0),I=0,S=!1,E=null,L=null,V=null,N=null,W=null,Xe.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:ge,bindFramebuffer:Te,drawBuffers:be,useProgram:qe,setBlending:T,setMaterial:pe,setFlipSided:K,setCullFace:ue,setLineWidth:D,setPolygonOffset:Y,setScissorTest:z,activeTexture:w,bindTexture:M,unbindTexture:U,compressedTexImage2D:$,compressedTexImage3D:te,texImage2D:we,texImage3D:Ve,updateUBOMapping:ot,uniformBlockBinding:tt,texStorage2D:We,texStorage3D:de,texSubImage2D:Q,texSubImage3D:ye,compressedTexSubImage2D:he,compressedTexSubImage3D:Me,scissor:Ge,viewport:Ne,reset:bt}}function lf(i,e,t,n){let s=cy(n);switch(t){case Hf:return i*e;case Vf:return i*e;case Gf:return i*e*2;case kh:return i*e/s.components*s.byteLength;case Hh:return i*e/s.components*s.byteLength;case Wf:return i*e*2/s.components*s.byteLength;case zh:return i*e*2/s.components*s.byteLength;case zf:return i*e*3/s.components*s.byteLength;case In:return i*e*4/s.components*s.byteLength;case Vh:return i*e*4/s.components*s.byteLength;case Sa:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wa:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mc:case Ec:return Math.max(i,16)*Math.max(e,8)/4;case yc:case bc:return Math.max(i,8)*Math.max(e,8)/2;case Sc:case Tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case kc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ra:case zc:case Vc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xf:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cy(i){switch(i){case Ti:case Of:return{byteLength:1,components:1};case ho:case Bf:case un:return{byteLength:2,components:1};case Oh:case Bh:return{byteLength:2,components:4};case _s:case Fh:case qn:return{byteLength:4,components:1};case kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function hy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return f?new OffscreenCanvas(w,M):uo("canvas")}function x(w,M,U){let $=1,te=z(w);if((te.width>U||te.height>U)&&($=U/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Q=Math.floor($*te.width),ye=Math.floor($*te.height);h===void 0&&(h=g(Q,ye));let he=M?g(Q,ye):h;return he.width=Q,he.height=ye,he.getContext("2d").drawImage(w,0,0,Q,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Q+"x"+ye+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(w,M,U,$,te=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Q=M;if(M===i.RED&&(U===i.FLOAT&&(Q=i.R32F),U===i.HALF_FLOAT&&(Q=i.R16F),U===i.UNSIGNED_BYTE&&(Q=i.R8)),M===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Q=i.R8UI),U===i.UNSIGNED_SHORT&&(Q=i.R16UI),U===i.UNSIGNED_INT&&(Q=i.R32UI),U===i.BYTE&&(Q=i.R8I),U===i.SHORT&&(Q=i.R16I),U===i.INT&&(Q=i.R32I)),M===i.RG&&(U===i.FLOAT&&(Q=i.RG32F),U===i.HALF_FLOAT&&(Q=i.RG16F),U===i.UNSIGNED_BYTE&&(Q=i.RG8)),M===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(Q=i.RG8UI),U===i.UNSIGNED_SHORT&&(Q=i.RG16UI),U===i.UNSIGNED_INT&&(Q=i.RG32UI),U===i.BYTE&&(Q=i.RG8I),U===i.SHORT&&(Q=i.RG16I),U===i.INT&&(Q=i.RG32I)),M===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),U===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),U===i.UNSIGNED_INT&&(Q=i.RGB32UI),U===i.BYTE&&(Q=i.RGB8I),U===i.SHORT&&(Q=i.RGB16I),U===i.INT&&(Q=i.RGB32I)),M===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),U===i.UNSIGNED_INT&&(Q=i.RGBA32UI),U===i.BYTE&&(Q=i.RGBA8I),U===i.SHORT&&(Q=i.RGBA16I),U===i.INT&&(Q=i.RGBA32I)),M===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),M===i.RGBA){let ye=te?cl:it.getTransfer($);U===i.FLOAT&&(Q=i.RGBA32F),U===i.HALF_FLOAT&&(Q=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Q=ye===mt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(w,M){let U;return w?M===null||M===_s||M===cr?U=i.DEPTH24_STENCIL8:M===qn?U=i.DEPTH32F_STENCIL8:M===ho&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===_s||M===cr?U=i.DEPTH_COMPONENT24:M===qn?U=i.DEPTH_COMPONENT32F:M===ho&&(U=i.DEPTH_COMPONENT16),U}function P(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==qt&&w.minFilter!==tn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function b(w){let M=w.target;M.removeEventListener("dispose",b),I(M),M.isVideoTexture&&u.delete(M)}function R(w){let M=w.target;M.removeEventListener("dispose",R),E(M)}function I(w){let M=n.get(w);if(M.__webglInit===void 0)return;let U=w.source,$=d.get(U);if($){let te=$[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(w),Object.keys($).length===0&&d.delete(U)}n.remove(w)}function S(w){let M=n.get(w);i.deleteTexture(M.__webglTexture);let U=w.source,$=d.get(U);delete $[M.__cacheKey],o.memory.textures--}function E(w){let M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let te=0;te<M.__webglFramebuffer[$].length;te++)i.deleteFramebuffer(M.__webglFramebuffer[$][te]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let U=w.textures;for(let $=0,te=U.length;$<te;$++){let Q=n.get(U[$]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(U[$])}n.remove(w)}let L=0;function V(){L=0}function N(){let w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function W(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function Z(w,M){let U=n.get(w);if(w.isVideoTexture&&D(w),w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){let $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(U,w,M);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+M)}function G(w,M){let U=n.get(w);if(w.version>0&&U.__version!==w.version){ne(U,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+M)}function ae(w,M){let U=n.get(w);if(w.version>0&&U.__version!==w.version){ne(U,w,M);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+M)}function X(w,M){let U=n.get(w);if(w.version>0&&U.__version!==w.version){fe(U,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+M)}let me={[Kn]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[co]:i.MIRRORED_REPEAT},xe={[qt]:i.NEAREST,[Nh]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[io]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},re={[Qm]:i.NEVER,[r0]:i.ALWAYS,[e0]:i.LESS,[Kf]:i.LEQUAL,[t0]:i.EQUAL,[s0]:i.GEQUAL,[n0]:i.GREATER,[i0]:i.NOTEQUAL};function Pe(w,M){if(M.type===qn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===tn||M.magFilter===io||M.magFilter===js||M.magFilter===si||M.minFilter===tn||M.minFilter===io||M.minFilter===js||M.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,me[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,me[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,me[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,xe[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qt||M.minFilter!==js&&M.minFilter!==si||M.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Xe(w,M){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",b));let $=M.source,te=d.get($);te===void 0&&(te={},d.set($,te));let Q=W(M);if(Q!==w.__cacheKey){te[Q]===void 0&&(te[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),te[Q].usedTimes++;let ye=te[w.__cacheKey];ye!==void 0&&(te[w.__cacheKey].usedTimes--,ye.usedTimes===0&&S(M)),w.__cacheKey=Q,w.__webglTexture=te[Q].texture}return U}function ne(w,M,U){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);let te=Xe(w,M),Q=M.source;t.bindTexture($,w.__webglTexture,i.TEXTURE0+U);let ye=n.get(Q);if(Q.version!==ye.__version||te===!0){t.activeTexture(i.TEXTURE0+U);let he=it.getPrimaries(it.workingColorSpace),Me=M.colorSpace===zi?null:it.getPrimaries(M.colorSpace),We=M.colorSpace===zi||he===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let de=x(M.image,!1,s.maxTextureSize);de=Y(M,de);let we=r.convert(M.format,M.colorSpace),Ve=r.convert(M.type),Ge=v(M.internalFormat,we,Ve,M.colorSpace,M.isVideoTexture);Pe($,M);let Ne,ot=M.mipmaps,tt=M.isVideoTexture!==!0,bt=ye.__version===void 0||te===!0,O=Q.dataReady,Se=P(M,de);if(M.isDepthTexture)Ge=_(M.format===hr,M.type),bt&&(tt?t.texStorage2D(i.TEXTURE_2D,1,Ge,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Ge,de.width,de.height,0,we,Ve,null));else if(M.isDataTexture)if(ot.length>0){tt&&bt&&t.texStorage2D(i.TEXTURE_2D,Se,Ge,ot[0].width,ot[0].height);for(let ie=0,le=ot.length;ie<le;ie++)Ne=ot[ie],tt?O&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ne.width,Ne.height,we,Ve,Ne.data):t.texImage2D(i.TEXTURE_2D,ie,Ge,Ne.width,Ne.height,0,we,Ve,Ne.data);M.generateMipmaps=!1}else tt?(bt&&t.texStorage2D(i.TEXTURE_2D,Se,Ge,de.width,de.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,we,Ve,de.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,de.width,de.height,0,we,Ve,de.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){tt&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ge,ot[0].width,ot[0].height,de.depth);for(let ie=0,le=ot.length;ie<le;ie++)if(Ne=ot[ie],M.format!==In)if(we!==null)if(tt){if(O)if(M.layerUpdates.size>0){let Ie=lf(Ne.width,Ne.height,M.format,M.type);for(let Ae of M.layerUpdates){let je=Ne.data.subarray(Ae*Ie/Ne.data.BYTES_PER_ELEMENT,(Ae+1)*Ie/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Ae,Ne.width,Ne.height,1,we,je)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Ne.width,Ne.height,de.depth,we,Ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Ge,Ne.width,Ne.height,de.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Ne.width,Ne.height,de.depth,we,Ve,Ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Ge,Ne.width,Ne.height,de.depth,0,we,Ve,Ne.data)}else{tt&&bt&&t.texStorage2D(i.TEXTURE_2D,Se,Ge,ot[0].width,ot[0].height);for(let ie=0,le=ot.length;ie<le;ie++)Ne=ot[ie],M.format!==In?we!==null?tt?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Ne.width,Ne.height,we,Ne.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Ge,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?O&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ne.width,Ne.height,we,Ve,Ne.data):t.texImage2D(i.TEXTURE_2D,ie,Ge,Ne.width,Ne.height,0,we,Ve,Ne.data)}else if(M.isDataArrayTexture)if(tt){if(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,Ge,de.width,de.height,de.depth),O)if(M.layerUpdates.size>0){let ie=lf(de.width,de.height,M.format,M.type);for(let le of M.layerUpdates){let Ie=de.data.subarray(le*ie/de.data.BYTES_PER_ELEMENT,(le+1)*ie/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,de.width,de.height,1,we,Ve,Ie)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,we,Ve,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,de.width,de.height,de.depth,0,we,Ve,de.data);else if(M.isData3DTexture)tt?(bt&&t.texStorage3D(i.TEXTURE_3D,Se,Ge,de.width,de.height,de.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,we,Ve,de.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,de.width,de.height,de.depth,0,we,Ve,de.data);else if(M.isFramebufferTexture){if(bt)if(tt)t.texStorage2D(i.TEXTURE_2D,Se,Ge,de.width,de.height);else{let ie=de.width,le=de.height;for(let Ie=0;Ie<Se;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Ge,ie,le,0,we,Ve,null),ie>>=1,le>>=1}}else if(ot.length>0){if(tt&&bt){let ie=z(ot[0]);t.texStorage2D(i.TEXTURE_2D,Se,Ge,ie.width,ie.height)}for(let ie=0,le=ot.length;ie<le;ie++)Ne=ot[ie],tt?O&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,we,Ve,Ne):t.texImage2D(i.TEXTURE_2D,ie,Ge,we,Ve,Ne);M.generateMipmaps=!1}else if(tt){if(bt){let ie=z(de);t.texStorage2D(i.TEXTURE_2D,Se,Ge,ie.width,ie.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Ve,de)}else t.texImage2D(i.TEXTURE_2D,0,Ge,we,Ve,de);m(M)&&p($),ye.__version=Q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function fe(w,M,U){if(M.image.length!==6)return;let $=Xe(w,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+U);let Q=n.get(te);if(te.version!==Q.__version||$===!0){t.activeTexture(i.TEXTURE0+U);let ye=it.getPrimaries(it.workingColorSpace),he=M.colorSpace===zi?null:it.getPrimaries(M.colorSpace),Me=M.colorSpace===zi||ye===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let We=M.isCompressedTexture||M.image[0].isCompressedTexture,de=M.image[0]&&M.image[0].isDataTexture,we=[];for(let le=0;le<6;le++)!We&&!de?we[le]=x(M.image[le],!0,s.maxCubemapSize):we[le]=de?M.image[le].image:M.image[le],we[le]=Y(M,we[le]);let Ve=we[0],Ge=r.convert(M.format,M.colorSpace),Ne=r.convert(M.type),ot=v(M.internalFormat,Ge,Ne,M.colorSpace),tt=M.isVideoTexture!==!0,bt=Q.__version===void 0||$===!0,O=te.dataReady,Se=P(M,Ve);Pe(i.TEXTURE_CUBE_MAP,M);let ie;if(We){tt&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,ot,Ve.width,Ve.height);for(let le=0;le<6;le++){ie=we[le].mipmaps;for(let Ie=0;Ie<ie.length;Ie++){let Ae=ie[Ie];M.format!==In?Ge!==null?tt?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie,0,0,Ae.width,Ae.height,Ge,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie,ot,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie,0,0,Ae.width,Ae.height,Ge,Ne,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie,ot,Ae.width,Ae.height,0,Ge,Ne,Ae.data)}}}else{if(ie=M.mipmaps,tt&&bt){ie.length>0&&Se++;let le=z(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,ot,le.width,le.height)}for(let le=0;le<6;le++)if(de){tt?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,we[le].width,we[le].height,Ge,Ne,we[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ot,we[le].width,we[le].height,0,Ge,Ne,we[le].data);for(let Ie=0;Ie<ie.length;Ie++){let je=ie[Ie].image[le].image;tt?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie+1,0,0,je.width,je.height,Ge,Ne,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie+1,ot,je.width,je.height,0,Ge,Ne,je.data)}}else{tt?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ge,Ne,we[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ot,Ge,Ne,we[le]);for(let Ie=0;Ie<ie.length;Ie++){let Ae=ie[Ie];tt?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie+1,0,0,Ge,Ne,Ae.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie+1,ot,Ge,Ne,Ae.image[le])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),Q.__version=te.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function q(w,M,U,$,te,Q){let ye=r.convert(U.format,U.colorSpace),he=r.convert(U.type),Me=v(U.internalFormat,ye,he,U.colorSpace),We=n.get(M),de=n.get(U);if(de.__renderTarget=M,!We.__hasExternalTextures){let we=Math.max(1,M.width>>Q),Ve=Math.max(1,M.height>>Q);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Q,Me,we,Ve,M.depth,0,ye,he,null):t.texImage2D(te,Q,Me,we,Ve,0,ye,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ue(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,te,de.__webglTexture,0,K(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,te,de.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(w,M,U){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){let $=M.depthTexture,te=$&&$.isDepthTexture?$.type:null,Q=_(M.stencilBuffer,te),ye=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=K(M);ue(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,Q,M.width,M.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,Q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,w)}else{let $=M.textures;for(let te=0;te<$.length;te++){let Q=$[te],ye=r.convert(Q.format,Q.colorSpace),he=r.convert(Q.type),Me=v(Q.internalFormat,ye,he,Q.colorSpace),We=K(M);U&&ue(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Me,M.width,M.height):ue(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,Me,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Me,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);let te=$.__webglTexture,Q=K(M);if(M.depthTexture.format===ir)ue(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(M.depthTexture.format===hr)ue(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Te(w){let M=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let $=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=$}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ge(M.__webglFramebuffer,w)}else if(U){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),se(M.__webglDepthbuffer[$],w,!1);else{let te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),se(M.__webglDepthbuffer,w,!1);else{let $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(w,M,U){let $=n.get(w);M!==void 0&&q($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Te(w)}function qe(w){let M=w.texture,U=n.get(w),$=n.get(M);w.addEventListener("dispose",R);let te=w.textures,Q=w.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,o.memory.textures++),Q){U.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[he]=[];for(let Me=0;Me<M.mipmaps.length;Me++)U.__webglFramebuffer[he][Me]=i.createFramebuffer()}else U.__webglFramebuffer[he]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)U.__webglFramebuffer[he]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(ye)for(let he=0,Me=te.length;he<Me;he++){let We=n.get(te[he]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ue(w)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){let Me=te[he];U.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[he]);let We=r.convert(Me.format,Me.colorSpace),de=r.convert(Me.type),we=v(Me.internalFormat,We,de,Me.colorSpace,w.isXRRenderTarget===!0),Ve=K(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,we,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,U.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),se(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)q(U.__webglFramebuffer[he][Me],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me);else q(U.__webglFramebuffer[he],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let he=0,Me=te.length;he<Me;he++){let We=te[he],de=n.get(We);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),Pe(i.TEXTURE_2D,We),q(U.__webglFramebuffer,w,We,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),m(We)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,$.__webglTexture),Pe(he,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)q(U.__webglFramebuffer[Me],w,M,i.COLOR_ATTACHMENT0,he,Me);else q(U.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,he,0);m(M)&&p(he),t.unbindTexture()}w.depthBuffer&&Te(w)}function F(w){let M=w.textures;for(let U=0,$=M.length;U<$;U++){let te=M[U];if(m(te)){let Q=y(w),ye=n.get(te).__webglTexture;t.bindTexture(Q,ye),p(Q),t.unbindTexture()}}}let B=[],T=[];function pe(w){if(w.samples>0){if(ue(w)===!1){let M=w.textures,U=w.width,$=w.height,te=i.COLOR_BUFFER_BIT,Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(w),he=M.length>1;if(he)for(let Me=0;Me<M.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Me]);let We=n.get(M[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,U,$,0,0,U,$,te,i.NEAREST),l===!0&&(B.length=0,T.length=0,B.push(i.COLOR_ATTACHMENT0+Me),w.depthBuffer&&w.resolveDepthBuffer===!1&&(B.push(Q),T.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Me=0;Me<M.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Me]);let We=n.get(M[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function K(w){return Math.min(s.maxSamples,w.samples)}function ue(w){let M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function D(w){let M=o.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function Y(w,M){let U=w.colorSpace,$=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==sn&&U!==zi&&(it.getTransfer(U)===mt?($!==In||te!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),M}function z(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=ae,this.setTextureCube=X,this.rebindTextures=be,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=q,this.useMultisampledRTT=ue}function uy(i,e){function t(n,s=zi){let r,o=it.getTransfer(s);if(n===Ti)return i.UNSIGNED_BYTE;if(n===Oh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Of)return i.BYTE;if(n===Bf)return i.SHORT;if(n===ho)return i.UNSIGNED_SHORT;if(n===Fh)return i.INT;if(n===_s)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===Hf)return i.ALPHA;if(n===zf)return i.RGB;if(n===In)return i.RGBA;if(n===Vf)return i.LUMINANCE;if(n===Gf)return i.LUMINANCE_ALPHA;if(n===ir)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===kh)return i.RED;if(n===Hh)return i.RED_INTEGER;if(n===Wf)return i.RG;if(n===zh)return i.RG_INTEGER;if(n===Vh)return i.RGBA_INTEGER;if(n===Sa||n===Ta||n===wa||n===Aa)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yc||n===Mc||n===bc||n===Ec)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sc||n===Tc||n===wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sc||n===Tc)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===kc||n===Hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ic)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ra||n===zc||n===Vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ra)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xf||n===Gc||n===Wc||n===Xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var oh=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ze=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},dy={type:"move"},oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,py=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Kt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new St({vertexShader:fy,fragmentShader:py,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ee(new yt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lh=class extends wi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,x=new ah,m=t.getContextAttributes(),p=null,y=null,v=[],_=[],P=new ce,b=null,R=new Lt;R.viewport=new at;let I=new Lt;I.viewport=new at;let S=[R,I],E=new oh,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=v[ne];return fe===void 0&&(fe=new oo,v[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=v[ne];return fe===void 0&&(fe=new oo,v[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=v[ne];return fe===void 0&&(fe=new oo,v[ne]=fe),fe.getHandSpace()};function N(ne){let fe=_.indexOf(ne.inputSource);if(fe===-1)return;let q=v[fe];q!==void 0&&(q.update(ne.inputSource,ne.frame,c||o),q.dispatchEvent({type:ne.type,data:ne.inputSource}))}function W(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Z);for(let ne=0;ne<v.length;ne++){let fe=_[ne];fe!==null&&(_[ne]=null,v[ne].disconnect(fe))}L=null,V=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,y=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){let fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ot(f.framebufferWidth,f.framebufferHeight,{format:In,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,q=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?hr:ir,q=m.stencil?cr:_s);let ge={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ot(d.textureWidth,d.textureHeight,{format:In,type:Ti,depthTexture:new Ba(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(ne){for(let fe=0;fe<ne.removed.length;fe++){let q=ne.removed[fe],se=_.indexOf(q);se>=0&&(_[se]=null,v[se].disconnect(q))}for(let fe=0;fe<ne.added.length;fe++){let q=ne.added[fe],se=_.indexOf(q);if(se===-1){for(let Te=0;Te<v.length;Te++)if(Te>=_.length){_.push(q),se=Te;break}else if(_[Te]===null){_[Te]=q,se=Te;break}if(se===-1)break}let ge=v[se];ge&&ge.connect(q)}}let G=new C,ae=new C;function X(ne,fe,q){G.setFromMatrixPosition(fe.matrixWorld),ae.setFromMatrixPosition(q.matrixWorld);let se=G.distanceTo(ae),ge=fe.projectionMatrix.elements,Te=q.projectionMatrix.elements,be=ge[14]/(ge[10]-1),qe=ge[14]/(ge[10]+1),F=(ge[9]+1)/ge[5],B=(ge[9]-1)/ge[5],T=(ge[8]-1)/ge[0],pe=(Te[8]+1)/Te[0],K=be*T,ue=be*pe,D=se/(-T+pe),Y=D*-T;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Y),ne.translateZ(D),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ge[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let z=be+D,w=qe+D,M=K-Y,U=ue+(se-Y),$=F*qe/w*z,te=B*qe/w*z;ne.projectionMatrix.makePerspective(M,U,$,te,z,w),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function me(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let fe=ne.near,q=ne.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(q=x.depthFar)),E.near=I.near=R.near=fe,E.far=I.far=R.far=q,(L!==E.near||V!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,V=E.far),R.layers.mask=ne.layers.mask|2,I.layers.mask=ne.layers.mask|4,E.layers.mask=R.layers.mask|I.layers.mask;let se=ne.parent,ge=E.cameras;me(E,se);for(let Te=0;Te<ge.length;Te++)me(ge[Te],se);ge.length===2?X(E,R,I):E.projectionMatrix.copy(R.projectionMatrix),xe(ne,E,se)};function xe(ne,fe,q){q===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(q.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=fr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let re=null;function Pe(ne,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){let q=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let se=!1;q.length!==E.cameras.length&&(E.cameras.length=0,se=!0);for(let Te=0;Te<q.length;Te++){let be=q[Te],qe=null;if(f!==null)qe=f.getViewport(be);else{let B=h.getViewSubImage(d,be);qe=B.viewport,Te===0&&(e.setRenderTargetTextures(y,B.colorTexture,d.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(y))}let F=S[Te];F===void 0&&(F=new Lt,F.layers.enable(Te),F.viewport=new at,S[Te]=F),F.matrix.fromArray(be.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(be.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(qe.x,qe.y,qe.width,qe.height),Te===0&&(E.matrix.copy(F.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),se===!0&&E.cameras.push(F)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")){let Te=h.getDepthInformation(q[0]);Te&&Te.isValid&&Te.texture&&x.init(e,Te,s.renderState)}}for(let q=0;q<v.length;q++){let se=_[q],ge=v[q];se!==null&&ge!==void 0&&ge.update(se,fe,c||o)}re&&re(ne,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}let Xe=new Jf;Xe.setAnimationLoop(Pe),this.setAnimationLoop=function(ne){re=ne},this.dispose=function(){}}},fs=new Dn,my=new Ye;function gy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,jf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,fs.copy(_),fs.x*=-1,fs.y*=-1,fs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.envMapRotation.value.setFromMatrix4(my.makeRotationFromEuler(fs)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let _=v.program;n.uniformBlockBinding(y,_)}function c(y,v){let _=s[y.id];_===void 0&&(g(y),_=u(y),s[y.id]=_,y.addEventListener("dispose",m));let P=v.program;n.updateUBOMapping(y,P);let b=e.render.frame;r[y.id]!==b&&(d(y),r[y.id]=b)}function u(y){let v=h();y.__bindingPointIndex=v;let _=i.createBuffer(),P=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=s[y.id],_=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,R=_.length;b<R;b++){let I=Array.isArray(_[b])?_[b]:[_[b]];for(let S=0,E=I.length;S<E;S++){let L=I[S];if(f(L,b,S,P)===!0){let V=L.__offset,N=Array.isArray(L.value)?L.value:[L.value],W=0;for(let Z=0;Z<N.length;Z++){let G=N[Z],ae=x(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,V+W,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,W),W+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,v,_,P){let b=y.value,R=v+"_"+_;if(P[R]===void 0)return typeof b=="number"||typeof b=="boolean"?P[R]=b:P[R]=b.clone(),!0;{let I=P[R];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return P[R]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(y){let v=y.uniforms,_=0,P=16;for(let R=0,I=v.length;R<I;R++){let S=Array.isArray(v[R])?v[R]:[v[R]];for(let E=0,L=S.length;E<L;E++){let V=S[E],N=Array.isArray(V.value)?V.value:[V.value];for(let W=0,Z=N.length;W<Z;W++){let G=N[W],ae=x(G),X=_%P,me=X%ae.boundary,xe=X+me;_+=me,xe!==0&&P-xe<ae.storage&&(_+=P-xe),V.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=ae.storage}}}let b=_%P;return b>0&&(_+=P-b),y.__size=_,y.__cache={},this}function x(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var mo=class{constructor(e={}){let{canvas:t=b0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this.toneMapping=Gi,this.toneMappingExposure=1;let _=this,P=!1,b=0,R=0,I=null,S=-1,E=null,L=new at,V=new at,N=null,W=new Ce(0),Z=0,G=t.width,ae=t.height,X=1,me=null,xe=null,re=new at(0,0,G,ae),Pe=new at(0,0,G,ae),Xe=!1,ne=new po,fe=!1,q=!1,se=new Ye,ge=new Ye,Te=new C,be=new at,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},F=!1;function B(){return I===null?X:1}let T=n;function pe(A,k){return t.getContext(A,k)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ch}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),T===null){let k="webgl2";if(T=pe(k,A),T===null)throw pe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let K,ue,D,Y,z,w,M,U,$,te,Q,ye,he,Me,We,de,we,Ve,Ge,Ne,ot,tt,bt,O;function Se(){K=new D_(T),K.init(),tt=new uy(T,K),ue=new A_(T,K,e,tt),D=new ly(T,K),ue.reverseDepthBuffer&&d&&D.buffers.depth.setReversed(!0),Y=new F_(T),z=new $v,w=new hy(T,K,D,z,ue,tt,Y),M=new C_(_),U=new L_(_),$=new G0(T),bt=new T_(T,$),te=new U_(T,$,Y,bt),Q=new B_(T,te,$,Y),Ge=new O_(T,ue,w),de=new R_(z),ye=new Kv(_,M,U,K,ue,bt,de),he=new gy(_,z),Me=new jv,We=new iy(K),Ve=new S_(_,M,U,D,Q,f,l),we=new oy(_,Q,ue),O=new xy(T,Y,ue,D),Ne=new w_(T,K,Y),ot=new N_(T,K,Y),Y.programs=ye.programs,_.capabilities=ue,_.extensions=K,_.properties=z,_.renderLists=Me,_.shadowMap=we,_.state=D,_.info=Y}Se();let ie=new lh(_,T);this.xr=ie,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(G,ae,!1))},this.getSize=function(A){return A.set(G,ae)},this.setSize=function(A,k,j=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,ae=k,t.width=Math.floor(A*X),t.height=Math.floor(k*X),j===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(G*X,ae*X).floor()},this.setDrawingBufferSize=function(A,k,j){G=A,ae=k,X=j,t.width=Math.floor(A*j),t.height=Math.floor(k*j),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,k,j,J){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,k,j,J),D.viewport(L.copy(re).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Pe)},this.setScissor=function(A,k,j,J){A.isVector4?Pe.set(A.x,A.y,A.z,A.w):Pe.set(A,k,j,J),D.scissor(V.copy(Pe).multiplyScalar(X).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(A){D.setScissorTest(Xe=A)},this.setOpaqueSort=function(A){me=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(A=!0,k=!0,j=!0){let J=0;if(A){let H=!1;if(I!==null){let ve=I.texture.format;H=ve===Vh||ve===zh||ve===Hh}if(H){let ve=I.texture.type,Re=ve===Ti||ve===_s||ve===ho||ve===cr||ve===Oh||ve===Bh,Oe=Ve.getClearColor(),Be=Ve.getClearAlpha(),$e=Oe.r,Je=Oe.g,ke=Oe.b;Re?(g[0]=$e,g[1]=Je,g[2]=ke,g[3]=Be,T.clearBufferuiv(T.COLOR,0,g)):(x[0]=$e,x[1]=Je,x[2]=ke,x[3]=Be,T.clearBufferiv(T.COLOR,0,x))}else J|=T.COLOR_BUFFER_BIT}k&&(J|=T.DEPTH_BUFFER_BIT),j&&(J|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Me.dispose(),We.dispose(),z.dispose(),M.dispose(),U.dispose(),Q.dispose(),bt.dispose(),O.dispose(),ye.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",id),ie.removeEventListener("sessionend",sd),as.stop()};function le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let A=Y.autoReset,k=we.enabled,j=we.autoUpdate,J=we.needsUpdate,H=we.type;Se(),Y.autoReset=A,we.enabled=k,we.autoUpdate=j,we.needsUpdate=J,we.type=H}function Ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function je(A){let k=A.target;k.removeEventListener("dispose",je),Pt(k)}function Pt(A){Jt(A),z.remove(A)}function Jt(A){let k=z.get(A).programs;k!==void 0&&(k.forEach(function(j){ye.releaseProgram(j)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,j,J,H,ve){k===null&&(k=qe);let Re=H.isMesh&&H.matrixWorld.determinant()<0,Oe=_m(A,k,j,J,H);D.setMaterial(J,Re);let Be=j.index,$e=1;if(J.wireframe===!0){if(Be=te.getWireframeAttribute(j),Be===void 0)return;$e=2}let Je=j.drawRange,ke=j.attributes.position,ut=Je.start*$e,Et=(Je.start+Je.count)*$e;ve!==null&&(ut=Math.max(ut,ve.start*$e),Et=Math.min(Et,(ve.start+ve.count)*$e)),Be!==null?(ut=Math.max(ut,0),Et=Math.min(Et,Be.count)):ke!=null&&(ut=Math.max(ut,0),Et=Math.min(Et,ke.count));let Tt=Et-ut;if(Tt<0||Tt===1/0)return;bt.setup(H,J,Oe,j,Be);let gn,ft=Ne;if(Be!==null&&(gn=$.get(Be),ft=ot,ft.setIndex(gn)),H.isMesh)J.wireframe===!0?(D.setLineWidth(J.wireframeLinewidth*B()),ft.setMode(T.LINES)):ft.setMode(T.TRIANGLES);else if(H.isLine){let He=J.linewidth;He===void 0&&(He=1),D.setLineWidth(He*B()),H.isLineSegments?ft.setMode(T.LINES):H.isLineLoop?ft.setMode(T.LINE_LOOP):ft.setMode(T.LINE_STRIP)}else H.isPoints?ft.setMode(T.POINTS):H.isSprite&&ft.setMode(T.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ft.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let He=H._multiDrawStarts,pi=H._multiDrawCounts,pt=H._multiDrawCount,Hn=Be?$.get(Be).bytesPerElement:1,Ns=z.get(J).currentProgram.getUniforms();for(let vn=0;vn<pt;vn++)Ns.setValue(T,"_gl_DrawID",vn),ft.render(He[vn]/Hn,pi[vn])}else if(H.isInstancedMesh)ft.renderInstances(ut,Tt,H.count);else if(j.isInstancedBufferGeometry){let He=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,pi=Math.min(j.instanceCount,He);ft.renderInstances(ut,Tt,pi)}else ft.render(ut,Tt)};function xt(A,k,j){A.transparent===!0&&A.side===Dt&&A.forceSinglePass===!1?(A.side=Xt,A.needsUpdate=!0,Yo(A,k,j),A.side=Ln,A.needsUpdate=!0,Yo(A,k,j),A.side=Dt):Yo(A,k,j)}this.compile=function(A,k,j=null){j===null&&(j=A),p=We.get(j),p.init(k),v.push(p),j.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),A!==j&&A.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let J=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ve=H.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){let Oe=ve[Re];xt(Oe,j,H),J.add(Oe)}else xt(ve,j,H),J.add(ve)}),v.pop(),p=null,J},this.compileAsync=function(A,k,j=null){let J=this.compile(A,k,j);return new Promise(H=>{function ve(){if(J.forEach(function(Re){z.get(Re).currentProgram.isReady()&&J.delete(Re)}),J.size===0){H(A);return}setTimeout(ve,10)}K.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let kn=null;function fi(A){kn&&kn(A)}function id(){as.stop()}function sd(){as.start()}let as=new Jf;as.setAnimationLoop(fi),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(A){kn=A,ie.setAnimationLoop(A),A===null?as.stop():as.start()},ie.addEventListener("sessionstart",id),ie.addEventListener("sessionend",sd),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(k),k=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,k,I),p=We.get(A,v.length),p.init(k),v.push(p),ge.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ne.setFromProjectionMatrix(ge),q=this.localClippingEnabled,fe=de.init(this.clippingPlanes,q),m=Me.get(A,y.length),m.init(),y.push(m),ie.enabled===!0&&ie.isPresenting===!0){let ve=_.xr.getDepthSensingMesh();ve!==null&&Al(ve,k,-1/0,_.sortObjects)}Al(A,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(me,xe),F=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,F&&Ve.addToRenderList(m,A),this.info.render.frame++,fe===!0&&de.beginShadows();let j=p.state.shadowsArray;we.render(j,A,k),fe===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){let ve=k.cameras;if(H.length>0)for(let Re=0,Oe=ve.length;Re<Oe;Re++){let Be=ve[Re];od(J,H,A,Be)}F&&Ve.render(A);for(let Re=0,Oe=ve.length;Re<Oe;Re++){let Be=ve[Re];rd(m,A,Be,Be.viewport)}}else H.length>0&&od(J,H,A,k),F&&Ve.render(A),rd(m,A,k);I!==null&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(_,A,k),bt.resetDefaultState(),S=-1,E=null,v.pop(),v.length>0?(p=v[v.length-1],fe===!0&&de.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Al(A,k,j,J){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){J&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);let Re=Q.update(A),Oe=A.material;Oe.visible&&m.push(A,Re,Oe,j,be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ne.intersectsObject(A))){let Re=Q.update(A),Oe=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),be.copy(Re.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(Oe)){let Be=Re.groups;for(let $e=0,Je=Be.length;$e<Je;$e++){let ke=Be[$e],ut=Oe[ke.materialIndex];ut&&ut.visible&&m.push(A,Re,ut,j,be.z,ke)}}else Oe.visible&&m.push(A,Re,Oe,j,be.z,null)}}let ve=A.children;for(let Re=0,Oe=ve.length;Re<Oe;Re++)Al(ve[Re],k,j,J)}function rd(A,k,j,J){let H=A.opaque,ve=A.transmissive,Re=A.transparent;p.setupLightsView(j),fe===!0&&de.setGlobalState(_.clippingPlanes,j),J&&D.viewport(L.copy(J)),H.length>0&&qo(H,k,j),ve.length>0&&qo(ve,k,j),Re.length>0&&qo(Re,k,j),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function od(A,k,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Ot(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?un:Ti,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));let ve=p.state.transmissionRenderTarget[J.id],Re=J.viewport||L;ve.setSize(Re.z,Re.w);let Oe=_.getRenderTarget();_.setRenderTarget(ve),_.getClearColor(W),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),F&&Ve.render(j);let Be=_.toneMapping;_.toneMapping=Gi;let $e=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),fe===!0&&de.setGlobalState(_.clippingPlanes,J),qo(A,j,J),w.updateMultisampleRenderTarget(ve),w.updateRenderTargetMipmap(ve),K.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ke=0,ut=k.length;ke<ut;ke++){let Et=k[ke],Tt=Et.object,gn=Et.geometry,ft=Et.material,He=Et.group;if(ft.side===Dt&&Tt.layers.test(J.layers)){let pi=ft.side;ft.side=Xt,ft.needsUpdate=!0,ad(Tt,j,J,gn,ft,He),ft.side=pi,ft.needsUpdate=!0,Je=!0}}Je===!0&&(w.updateMultisampleRenderTarget(ve),w.updateRenderTargetMipmap(ve))}_.setRenderTarget(Oe),_.setClearColor(W,Z),$e!==void 0&&(J.viewport=$e),_.toneMapping=Be}function qo(A,k,j){let J=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ve=A.length;H<ve;H++){let Re=A[H],Oe=Re.object,Be=Re.geometry,$e=J===null?Re.material:J,Je=Re.group;Oe.layers.test(j.layers)&&ad(Oe,k,j,Be,$e,Je)}}function ad(A,k,j,J,H,ve){A.onBeforeRender(_,k,j,J,H,ve),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(_,k,j,J,A,ve),H.transparent===!0&&H.side===Dt&&H.forceSinglePass===!1?(H.side=Xt,H.needsUpdate=!0,_.renderBufferDirect(j,k,J,H,A,ve),H.side=Ln,H.needsUpdate=!0,_.renderBufferDirect(j,k,J,H,A,ve),H.side=Dt):_.renderBufferDirect(j,k,J,H,A,ve),A.onAfterRender(_,k,j,J,H,ve)}function Yo(A,k,j){k.isScene!==!0&&(k=qe);let J=z.get(A),H=p.state.lights,ve=p.state.shadowsArray,Re=H.state.version,Oe=ye.getParameters(A,H.state,ve,k,j),Be=ye.getProgramCacheKey(Oe),$e=J.programs;J.environment=A.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(A.isMeshStandardMaterial?U:M).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,$e===void 0&&(A.addEventListener("dispose",je),$e=new Map,J.programs=$e);let Je=$e.get(Be);if(Je!==void 0){if(J.currentProgram===Je&&J.lightsStateVersion===Re)return cd(A,Oe),Je}else Oe.uniforms=ye.getUniforms(A),A.onBeforeCompile(Oe,_),Je=ye.acquireProgram(Oe,Be),$e.set(Be,Je),J.uniforms=Oe.uniforms;let ke=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=de.uniform),cd(A,Oe),J.needsLights=ym(A),J.lightsStateVersion=Re,J.needsLights&&(ke.ambientLightColor.value=H.state.ambient,ke.lightProbe.value=H.state.probe,ke.directionalLights.value=H.state.directional,ke.directionalLightShadows.value=H.state.directionalShadow,ke.spotLights.value=H.state.spot,ke.spotLightShadows.value=H.state.spotShadow,ke.rectAreaLights.value=H.state.rectArea,ke.ltc_1.value=H.state.rectAreaLTC1,ke.ltc_2.value=H.state.rectAreaLTC2,ke.pointLights.value=H.state.point,ke.pointLightShadows.value=H.state.pointShadow,ke.hemisphereLights.value=H.state.hemi,ke.directionalShadowMap.value=H.state.directionalShadowMap,ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ke.spotShadowMap.value=H.state.spotShadowMap,ke.spotLightMatrix.value=H.state.spotLightMatrix,ke.spotLightMap.value=H.state.spotLightMap,ke.pointShadowMap.value=H.state.pointShadowMap,ke.pointShadowMatrix.value=H.state.pointShadowMatrix),J.currentProgram=Je,J.uniformsList=null,Je}function ld(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=rr.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function cd(A,k){let j=z.get(A);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function _m(A,k,j,J,H){k.isScene!==!0&&(k=qe),w.resetTextureUnits();let ve=k.fog,Re=J.isMeshStandardMaterial?k.environment:null,Oe=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:sn,Be=(J.isMeshStandardMaterial?U:M).get(J.envMap||Re),$e=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Je=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ke=!!j.morphAttributes.position,ut=!!j.morphAttributes.normal,Et=!!j.morphAttributes.color,Tt=Gi;J.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Tt=_.toneMapping);let gn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ft=gn!==void 0?gn.length:0,He=z.get(J),pi=p.state.lights;if(fe===!0&&(q===!0||A!==E)){let Rn=A===E&&J.id===S;de.setState(J,A,Rn)}let pt=!1;J.version===He.__version?(He.needsLights&&He.lightsStateVersion!==pi.state.version||He.outputColorSpace!==Oe||H.isBatchedMesh&&He.batching===!1||!H.isBatchedMesh&&He.batching===!0||H.isBatchedMesh&&He.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&He.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&He.instancing===!1||!H.isInstancedMesh&&He.instancing===!0||H.isSkinnedMesh&&He.skinning===!1||!H.isSkinnedMesh&&He.skinning===!0||H.isInstancedMesh&&He.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&He.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&He.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&He.instancingMorph===!1&&H.morphTexture!==null||He.envMap!==Be||J.fog===!0&&He.fog!==ve||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==de.numPlanes||He.numIntersection!==de.numIntersection)||He.vertexAlphas!==$e||He.vertexTangents!==Je||He.morphTargets!==ke||He.morphNormals!==ut||He.morphColors!==Et||He.toneMapping!==Tt||He.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,He.__version=J.version);let Hn=He.currentProgram;pt===!0&&(Hn=Yo(J,k,H));let Ns=!1,vn=!1,Xr=!1,wt=Hn.getUniforms(),ni=He.uniforms;if(D.useProgram(Hn.program)&&(Ns=!0,vn=!0,Xr=!0),J.id!==S&&(S=J.id,vn=!0),Ns||E!==A){D.buffers.depth.getReversed()?(se.copy(A.projectionMatrix),S0(se),T0(se),wt.setValue(T,"projectionMatrix",se)):wt.setValue(T,"projectionMatrix",A.projectionMatrix),wt.setValue(T,"viewMatrix",A.matrixWorldInverse);let Di=wt.map.cameraPosition;Di!==void 0&&Di.setValue(T,Te.setFromMatrixPosition(A.matrixWorld)),ue.logarithmicDepthBuffer&&wt.setValue(T,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&wt.setValue(T,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,vn=!0,Xr=!0)}if(H.isSkinnedMesh){wt.setOptional(T,H,"bindMatrix"),wt.setOptional(T,H,"bindMatrixInverse");let Rn=H.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),wt.setValue(T,"boneTexture",Rn.boneTexture,w))}H.isBatchedMesh&&(wt.setOptional(T,H,"batchingTexture"),wt.setValue(T,"batchingTexture",H._matricesTexture,w),wt.setOptional(T,H,"batchingIdTexture"),wt.setValue(T,"batchingIdTexture",H._indirectTexture,w),wt.setOptional(T,H,"batchingColorTexture"),H._colorsTexture!==null&&wt.setValue(T,"batchingColorTexture",H._colorsTexture,w));let qr=j.morphAttributes;if((qr.position!==void 0||qr.normal!==void 0||qr.color!==void 0)&&Ge.update(H,j,Hn),(vn||He.receiveShadow!==H.receiveShadow)&&(He.receiveShadow=H.receiveShadow,wt.setValue(T,"receiveShadow",H.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ni.envMap.value=Be,ni.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(ni.envMapIntensity.value=k.environmentIntensity),vn&&(wt.setValue(T,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&vm(ni,Xr),ve&&J.fog===!0&&he.refreshFogUniforms(ni,ve),he.refreshMaterialUniforms(ni,J,X,ae,p.state.transmissionRenderTarget[A.id]),rr.upload(T,ld(He),ni,w)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(rr.upload(T,ld(He),ni,w),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&wt.setValue(T,"center",H.center),wt.setValue(T,"modelViewMatrix",H.modelViewMatrix),wt.setValue(T,"normalMatrix",H.normalMatrix),wt.setValue(T,"modelMatrix",H.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Rn=J.uniformsGroups;for(let Di=0,Ui=Rn.length;Di<Ui;Di++){let hd=Rn[Di];O.update(hd,Hn),O.bind(hd,Hn)}}return Hn}function vm(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function ym(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,k,j){z.get(A.texture).__webglTexture=k,z.get(A.depthTexture).__webglTexture=j;let J=z.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){let j=z.get(A);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,j=0){I=A,b=k,R=j;let J=!0,H=null,ve=!1,Re=!1;if(A){let Be=z.get(A);if(Be.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(T.FRAMEBUFFER,null),J=!1;else if(Be.__webglFramebuffer===void 0)w.setupRenderTarget(A);else if(Be.__hasExternalTextures)w.rebindTextures(A,z.get(A.texture).__webglTexture,z.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ke=A.depthTexture;if(Be.__boundDepthTexture!==ke){if(ke!==null&&z.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(A)}}let $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Re=!0);let Je=z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[k])?H=Je[k][j]:H=Je[k],ve=!0):A.samples>0&&w.useMultisampledRTT(A)===!1?H=z.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?H=Je[j]:H=Je,L.copy(A.viewport),V.copy(A.scissor),N=A.scissorTest}else L.copy(re).multiplyScalar(X).floor(),V.copy(Pe).multiplyScalar(X).floor(),N=Xe;if(D.bindFramebuffer(T.FRAMEBUFFER,H)&&J&&D.drawBuffers(A,H),D.viewport(L),D.scissor(V),D.setScissorTest(N),ve){let Be=z.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+k,Be.__webglTexture,j)}else if(Re){let Be=z.get(A.texture),$e=k||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Be.__webglTexture,j||0,$e)}S=-1},this.readRenderTargetPixels=function(A,k,j,J,H,ve,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Oe=Oe[Re]),Oe){D.bindFramebuffer(T.FRAMEBUFFER,Oe);try{let Be=A.texture,$e=Be.format,Je=Be.type;if(!ue.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-J&&j>=0&&j<=A.height-H&&T.readPixels(k,j,J,H,tt.convert($e),tt.convert(Je),ve)}finally{let Be=I!==null?z.get(I).__webglFramebuffer:null;D.bindFramebuffer(T.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,k,j,J,H,ve,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Oe=Oe[Re]),Oe){let Be=A.texture,$e=Be.format,Je=Be.type;if(!ue.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-J&&j>=0&&j<=A.height-H){D.bindFramebuffer(T.FRAMEBUFFER,Oe);let ke=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ke),T.bufferData(T.PIXEL_PACK_BUFFER,ve.byteLength,T.STREAM_READ),T.readPixels(k,j,J,H,tt.convert($e),tt.convert(Je),0);let ut=I!==null?z.get(I).__webglFramebuffer:null;D.bindFramebuffer(T.FRAMEBUFFER,ut);let Et=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await E0(T,Et,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,ke),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ve),T.deleteBuffer(ke),T.deleteSync(Et),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,j=0){A.isTexture!==!0&&(to("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);let J=Math.pow(2,-j),H=Math.floor(A.image.width*J),ve=Math.floor(A.image.height*J),Re=k!==null?k.x:0,Oe=k!==null?k.y:0;w.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,j,0,0,Re,Oe,H,ve),D.unbindTexture()},this.copyTextureToTexture=function(A,k,j=null,J=null,H=0){A.isTexture!==!0&&(to("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1],k=arguments[2],H=arguments[3]||0,j=null);let ve,Re,Oe,Be,$e,Je,ke,ut,Et,Tt=A.isCompressedTexture?A.mipmaps[H]:A.image;j!==null?(ve=j.max.x-j.min.x,Re=j.max.y-j.min.y,Oe=j.isBox3?j.max.z-j.min.z:1,Be=j.min.x,$e=j.min.y,Je=j.isBox3?j.min.z:0):(ve=Tt.width,Re=Tt.height,Oe=Tt.depth||1,Be=0,$e=0,Je=0),J!==null?(ke=J.x,ut=J.y,Et=J.z):(ke=0,ut=0,Et=0);let gn=tt.convert(k.format),ft=tt.convert(k.type),He;k.isData3DTexture?(w.setTexture3D(k,0),He=T.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(w.setTexture2DArray(k,0),He=T.TEXTURE_2D_ARRAY):(w.setTexture2D(k,0),He=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,k.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,k.unpackAlignment);let pi=T.getParameter(T.UNPACK_ROW_LENGTH),pt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Hn=T.getParameter(T.UNPACK_SKIP_PIXELS),Ns=T.getParameter(T.UNPACK_SKIP_ROWS),vn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Tt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Tt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Be),T.pixelStorei(T.UNPACK_SKIP_ROWS,$e),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Je);let Xr=A.isDataArrayTexture||A.isData3DTexture,wt=k.isDataArrayTexture||k.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let ni=z.get(A),qr=z.get(k),Rn=z.get(ni.__renderTarget),Di=z.get(qr.__renderTarget);D.bindFramebuffer(T.READ_FRAMEBUFFER,Rn.__webglFramebuffer),D.bindFramebuffer(T.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Ui=0;Ui<Oe;Ui++)Xr&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,z.get(A).__webglTexture,H,Je+Ui),A.isDepthTexture?(wt&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,z.get(k).__webglTexture,H,Et+Ui),T.blitFramebuffer(Be,$e,ve,Re,ke,ut,ve,Re,T.DEPTH_BUFFER_BIT,T.NEAREST)):wt?T.copyTexSubImage3D(He,H,ke,ut,Et+Ui,Be,$e,ve,Re):T.copyTexSubImage2D(He,H,ke,ut,Et+Ui,Be,$e,ve,Re);D.bindFramebuffer(T.READ_FRAMEBUFFER,null),D.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else wt?A.isDataTexture||A.isData3DTexture?T.texSubImage3D(He,H,ke,ut,Et,ve,Re,Oe,gn,ft,Tt.data):k.isCompressedArrayTexture?T.compressedTexSubImage3D(He,H,ke,ut,Et,ve,Re,Oe,gn,Tt.data):T.texSubImage3D(He,H,ke,ut,Et,ve,Re,Oe,gn,ft,Tt):A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,H,ke,ut,ve,Re,gn,ft,Tt.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,H,ke,ut,Tt.width,Tt.height,gn,Tt.data):T.texSubImage2D(T.TEXTURE_2D,H,ke,ut,ve,Re,gn,ft,Tt);T.pixelStorei(T.UNPACK_ROW_LENGTH,pi),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,pt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Hn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ns),T.pixelStorei(T.UNPACK_SKIP_IMAGES,vn),H===0&&k.generateMipmaps&&T.generateMipmap(He),D.unbindTexture()},this.copyTextureToTexture3D=function(A,k,j=null,J=null,H=0){return A.isTexture!==!0&&(to("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,J=arguments[1]||null,A=arguments[2],k=arguments[3],H=arguments[4]||0),to('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,k,j,J,H)},this.initRenderTarget=function(A){z.get(A).__webglFramebuffer===void 0&&w.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),D.unbindTexture()},this.resetState=function(){b=0,R=0,I=null,D.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}},ka=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var go=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},xo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qc,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},cn=new C,_o=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var cf=new C,hf=new at,uf=new at,_y=new C,df=new Ye,pa=new C,tc=new bn,ff=new Ye,nc=new vs,mr=class extends ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pd,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingBox.expandByPoint(pa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingSphere.expandByPoint(pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tc.copy(this.boundingSphere),tc.applyMatrix4(s),e.ray.intersectsSphere(tc)!==!1&&(ff.copy(s).invert(),nc.copy(e.ray).applyMatrix4(ff),!(this.boundingBox!==null&&nc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===pd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;hf.fromBufferAttribute(s.attributes.skinIndex,e),uf.fromBufferAttribute(s.attributes.skinWeight,e),cf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=uf.getComponent(r);if(o!==0){let a=hf.getComponent(r);df.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_y.copy(cf).applyMatrix4(df),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},vo=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ha=class extends Kt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=qt,u=qt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pf=new Ye,vy=new Ye,gr=class i{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:vy;pf.multiplyMatrices(a,t[r]),pf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ha(t,e,e,In,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new vo),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ys=class extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zs=new Ye,mf=new Ye,ma=[],gf=new nn,yy=new Ye,jr=new ee,Jr=new bn,za=class extends ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),gf.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(gf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),Jr.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(n),e.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),mf.multiplyMatrices(n,Zs),jr.matrixWorld=mf,jr.raycast(e,ma);for(let o=0,a=ma.length;o<a;o++){let l=ma[o];l.instanceId=r,l.object=this,t.push(l)}ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ha(new Float32Array(s*this.count),s,this.count,kh,qn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var yo=class extends En{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Va=new C,Ga=new C,xf=new Ye,Qr=new vs,ga=new bn,ic=new C,_f=new C,xr=class extends It{constructor(e=new At,t=new yo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Va.fromBufferAttribute(t,s-1),Ga.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Va.distanceTo(Ga);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;xf.copy(s).invert(),Qr.copy(e.ray).applyMatrix4(xf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=u.getX(x),y=u.getX(x+1),v=xa(this,e,Qr,l,p,y);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=xa(this,e,Qr,l,x,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=xa(this,e,Qr,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=xa(this,e,Qr,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xa(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Va.fromBufferAttribute(o,s),Ga.fromBufferAttribute(o,r),t.distanceSqToSegment(Va,Ga,ic,_f)>n)return;ic.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ic);if(!(l<e.near||l>e.far))return{distance:l,point:_f.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var vf=new C,yf=new C,Wa=class extends xr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)vf.fromBufferAttribute(t,s),yf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vf.distanceTo(yf);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Xa=class extends xr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ms=class extends En{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mf=new Ye,ch=new vs,_a=new bn,va=new C,_r=class extends It{constructor(e=new At,t=new Ms){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;Mf.copy(s).invert(),ch.copy(e.ray).applyMatrix4(Mf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);va.fromBufferAttribute(h,m),bf(va,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)va.fromBufferAttribute(h,g),bf(va,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bf(i,e,t,n,s,r,o){let a=ch.distanceSqToPoint(i);if(a<t){let l=new C;ch.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var $n=class extends Kt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,s=[],r=[],o=[],a=new C,l=new Ye;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ht(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ht(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Mo=class extends Un{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hh=class extends Mo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function qh(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ya=new C,sc=new qh,rc=new qh,oc=new qh,bo=class extends Un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ya.subVectors(s[0],s[1]).add(s[0]),c=ya);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ya.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ya),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),sc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,m),rc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,m),oc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(sc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),rc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),oc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(sc.calc(l),rc.calc(l),oc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ef(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function My(i,e){let t=1-i;return t*t*e}function by(i,e){return 2*(1-i)*i*e}function Ey(i,e){return i*i*e}function ao(i,e,t,n){return My(i,e)+by(i,t)+Ey(i,n)}function Sy(i,e){let t=1-i;return t*t*t*e}function Ty(i,e){let t=1-i;return 3*t*t*i*e}function wy(i,e){return 3*(1-i)*i*i*e}function Ay(i,e){return i*i*i*e}function lo(i,e,t,n,s){return Sy(i,e)+Ty(i,t)+wy(i,n)+Ay(i,s)}var qa=class extends Un{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lo(e,s.x,r.x,o.x,a.x),lo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},uh=class extends Un{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lo(e,s.x,r.x,o.x,a.x),lo(e,s.y,r.y,o.y,a.y),lo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ya=class extends Un{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dh=class extends Un{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends Un{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ao(e,s.x,r.x,o.x),ao(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends Un{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ao(e,s.x,r.x,o.x),ao(e,s.y,r.y,o.y),ao(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Ef(a,l.x,c.x,u.x,h.x),Ef(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},ja=Object.freeze({__proto__:null,ArcCurve:hh,CatmullRomCurve3:bo,CubicBezierCurve:qa,CubicBezierCurve3:uh,EllipseCurve:Mo,LineCurve:Ya,LineCurve3:dh,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:$a,SplineCurve:Za}),fh=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ja[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ja[s.type]().fromJSON(s))}return this}},bs=class extends fh{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ya(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ka(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new qa(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Za(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Mo(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Eo=class i extends At{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ht(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new C,d=new ce,f=new C,g=new C,x=new C,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=t;y++){let v=n+y*u*s,_=Math.sin(v),P=Math.cos(v);for(let b=0;b<=e.length-1;b++){h.x=e[b].x*_,h.y=e[b].y,h.z=e[b].x*P,o.push(h.x,h.y,h.z),d.x=y/t,d.y=b/(e.length-1),a.push(d.x,d.y);let R=l[3*b+0]*_,I=l[3*b+1],S=l[3*b+0]*P;c.push(R,I,S)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){let _=v+y*e.length,P=_,b=_+e.length,R=_+e.length+1,I=_+1;r.push(P,b,I),r.push(R,I,b)}this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("uv",new et(a,2)),this.setAttribute("normal",new et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Ja=class i extends Eo{constructor(e=1,t=1,n=4,s=8){let r=new bs;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Zn=class i extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,u=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ct=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function y(){let _=new C,P=new C,b=0,R=(t-e)/n;for(let I=0;I<=r;I++){let S=[],E=I/r,L=E*(t-e)+e;for(let V=0;V<=s;V++){let N=V/s,W=N*l+a,Z=Math.sin(W),G=Math.cos(W);P.x=L*Z,P.y=-E*n+m,P.z=L*G,h.push(P.x,P.y,P.z),_.set(Z,R,G).normalize(),d.push(_.x,_.y,_.z),f.push(N,1-E),S.push(g++)}x.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let E=x[S][I],L=x[S+1][I],V=x[S+1][I+1],N=x[S][I+1];(e>0||S!==0)&&(u.push(E,L,N),b+=3),(t>0||S!==r-1)&&(u.push(L,V,N),b+=3)}c.addGroup(p,b,0),p+=b}function v(_){let P=g,b=new ce,R=new C,I=0,S=_===!0?e:t,E=_===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let L=g;for(let V=0;V<=s;V++){let W=V/s*l+a,Z=Math.cos(W),G=Math.sin(W);R.x=S*G,R.y=m*E,R.z=S*Z,h.push(R.x,R.y,R.z),d.push(0,E,0),b.x=Z*.5+.5,b.y=G*.5*E+.5,f.push(b.x,b.y),g++}for(let V=0;V<s;V++){let N=P+V,W=L+V;_===!0?u.push(W,W+1,N):u.push(W+1,W,N),I+=3}c.addGroup(p,I,_===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var qi=class extends bs{constructor(e){super(e),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new bs().fromJSON(s))}return this}},Ry={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ip(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=Dy(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return So(r,o,t,a,l,f,0),o}};function ip(i,e,t,n,s){let r,o;if(s===Wy(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Sf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Sf(r,i[r],i[r+1],o);return o&&dl(o,o.next)&&(wo(o),o=o.next),o}function Es(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(dl(t,t.next)||Ct(t.prev,t,t.next)===0)){if(wo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function So(i,e,t,n,s,r,o){if(!i)return;!o&&r&&By(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Iy(i,n,s,r):Cy(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),wo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Py(Es(i),e,t),So(i,e,t,n,s,r,2)):o===2&&Ly(i,e,t,n,s,r):So(Es(i),e,t,n,s,r,1);break}}}function Cy(i){let e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&tr(s,a,r,l,o,c,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Iy(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ct(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=ph(f,g,e,t,n),y=ph(x,m,e,t,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=p&&_&&_.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&tr(a,u,l,h,c,d,v.x,v.y)&&Ct(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&tr(a,u,l,h,c,d,_.x,_.y)&&Ct(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&tr(a,u,l,h,c,d,v.x,v.y)&&Ct(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&tr(a,u,l,h,c,d,_.x,_.y)&&Ct(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Py(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!dl(s,r)&&sp(s,n,n.next,r)&&To(s,r)&&To(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),wo(n),wo(n.next),n=i=r),n=n.next}while(n!==i);return Es(n)}function Ly(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zy(o,a)){let l=rp(o,a);o=Es(o,o.next),l=Es(l,l.next),So(o,e,t,n,s,r,0),So(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Dy(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=ip(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Hy(c));for(s.sort(Uy),r=0;r<s.length;r++)t=Ny(s[r],t);return t}function Uy(i,e){return i.x-e.x}function Ny(i,e){let t=Fy(i,e);if(!t)return e;let n=rp(t,i);return Es(n,n.next),Es(t,t.next)}function Fy(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&tr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),To(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Oy(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function Oy(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function By(i,e,t,n){let s=i;do s.z===0&&(s.z=ph(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ky(s)}function ky(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function ph(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Hy(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function tr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function zy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Vy(i,e)&&(To(i,e)&&To(e,i)&&Gy(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||dl(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function dl(i,e){return i.x===e.x&&i.y===e.y}function sp(i,e,t,n){let s=ba(Ct(i,e,t)),r=ba(Ct(i,e,n)),o=ba(Ct(t,n,i)),a=ba(Ct(t,n,e));return!!(s!==r&&o!==a||s===0&&Ma(i,t,e)||r===0&&Ma(i,n,e)||o===0&&Ma(t,i,n)||a===0&&Ma(t,e,n))}function Ma(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ba(i){return i>0?1:i<0?-1:0}function Vy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&sp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function To(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function Gy(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function rp(i,e){let t=new mh(i.i,i.x,i.y),n=new mh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Sf(i,e,t,n){let s=new mh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wy(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Wi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Tf(e),wf(n,e);let o=e.length;t.forEach(Tf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,wf(n,t[l]);let a=Ry.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Tf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var vr=class i extends At{constructor(e=new qi([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Xy,v,_=!1,P,b,R,I;p&&(v=p.getSpacedPoints(u),_=!0,d=!1,P=p.computeFrenetFrames(u,!1),b=new C,R=new C,I=new C),d||(m=0,f=0,g=0,x=0);let S=a.extractPoints(c),E=S.shape,L=S.holes;if(!Wi.isClockWise(E)){E=E.reverse();for(let F=0,B=L.length;F<B;F++){let T=L[F];Wi.isClockWise(T)&&(L[F]=T.reverse())}}let N=Wi.triangulateShape(E,L),W=E;for(let F=0,B=L.length;F<B;F++){let T=L[F];E=E.concat(T)}function Z(F,B,T){return B||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(B,T)}let G=E.length,ae=N.length;function X(F,B,T){let pe,K,ue,D=F.x-B.x,Y=F.y-B.y,z=T.x-F.x,w=T.y-F.y,M=D*D+Y*Y,U=D*w-Y*z;if(Math.abs(U)>Number.EPSILON){let $=Math.sqrt(M),te=Math.sqrt(z*z+w*w),Q=B.x-Y/$,ye=B.y+D/$,he=T.x-w/te,Me=T.y+z/te,We=((he-Q)*w-(Me-ye)*z)/(D*w-Y*z);pe=Q+D*We-F.x,K=ye+Y*We-F.y;let de=pe*pe+K*K;if(de<=2)return new ce(pe,K);ue=Math.sqrt(de/2)}else{let $=!1;D>Number.EPSILON?z>Number.EPSILON&&($=!0):D<-Number.EPSILON?z<-Number.EPSILON&&($=!0):Math.sign(Y)===Math.sign(w)&&($=!0),$?(pe=-Y,K=D,ue=Math.sqrt(M)):(pe=D,K=Y,ue=Math.sqrt(M/2))}return new ce(pe/ue,K/ue)}let me=[];for(let F=0,B=W.length,T=B-1,pe=F+1;F<B;F++,T++,pe++)T===B&&(T=0),pe===B&&(pe=0),me[F]=X(W[F],W[T],W[pe]);let xe=[],re,Pe=me.concat();for(let F=0,B=L.length;F<B;F++){let T=L[F];re=[];for(let pe=0,K=T.length,ue=K-1,D=pe+1;pe<K;pe++,ue++,D++)ue===K&&(ue=0),D===K&&(D=0),re[pe]=X(T[pe],T[ue],T[D]);xe.push(re),Pe=Pe.concat(re)}for(let F=0;F<m;F++){let B=F/m,T=f*Math.cos(B*Math.PI/2),pe=g*Math.sin(B*Math.PI/2)+x;for(let K=0,ue=W.length;K<ue;K++){let D=Z(W[K],me[K],pe);se(D.x,D.y,-T)}for(let K=0,ue=L.length;K<ue;K++){let D=L[K];re=xe[K];for(let Y=0,z=D.length;Y<z;Y++){let w=Z(D[Y],re[Y],pe);se(w.x,w.y,-T)}}}let Xe=g+x;for(let F=0;F<G;F++){let B=d?Z(E[F],Pe[F],Xe):E[F];_?(R.copy(P.normals[0]).multiplyScalar(B.x),b.copy(P.binormals[0]).multiplyScalar(B.y),I.copy(v[0]).add(R).add(b),se(I.x,I.y,I.z)):se(B.x,B.y,0)}for(let F=1;F<=u;F++)for(let B=0;B<G;B++){let T=d?Z(E[B],Pe[B],Xe):E[B];_?(R.copy(P.normals[F]).multiplyScalar(T.x),b.copy(P.binormals[F]).multiplyScalar(T.y),I.copy(v[F]).add(R).add(b),se(I.x,I.y,I.z)):se(T.x,T.y,h/u*F)}for(let F=m-1;F>=0;F--){let B=F/m,T=f*Math.cos(B*Math.PI/2),pe=g*Math.sin(B*Math.PI/2)+x;for(let K=0,ue=W.length;K<ue;K++){let D=Z(W[K],me[K],pe);se(D.x,D.y,h+T)}for(let K=0,ue=L.length;K<ue;K++){let D=L[K];re=xe[K];for(let Y=0,z=D.length;Y<z;Y++){let w=Z(D[Y],re[Y],pe);_?se(w.x,w.y+v[u-1].y,v[u-1].x+T):se(w.x,w.y,h+T)}}}ne(),fe();function ne(){let F=s.length/3;if(d){let B=0,T=G*B;for(let pe=0;pe<ae;pe++){let K=N[pe];ge(K[2]+T,K[1]+T,K[0]+T)}B=u+m*2,T=G*B;for(let pe=0;pe<ae;pe++){let K=N[pe];ge(K[0]+T,K[1]+T,K[2]+T)}}else{for(let B=0;B<ae;B++){let T=N[B];ge(T[2],T[1],T[0])}for(let B=0;B<ae;B++){let T=N[B];ge(T[0]+G*u,T[1]+G*u,T[2]+G*u)}}n.addGroup(F,s.length/3-F,0)}function fe(){let F=s.length/3,B=0;q(W,B),B+=W.length;for(let T=0,pe=L.length;T<pe;T++){let K=L[T];q(K,B),B+=K.length}n.addGroup(F,s.length/3-F,1)}function q(F,B){let T=F.length;for(;--T>=0;){let pe=T,K=T-1;K<0&&(K=F.length-1);for(let ue=0,D=u+m*2;ue<D;ue++){let Y=G*ue,z=G*(ue+1),w=B+pe+Y,M=B+K+Y,U=B+K+z,$=B+pe+z;Te(w,M,U,$)}}}function se(F,B,T){l.push(F),l.push(B),l.push(T)}function ge(F,B,T){be(F),be(B),be(T);let pe=s.length/3,K=y.generateTopUV(n,s,pe-3,pe-2,pe-1);qe(K[0]),qe(K[1]),qe(K[2])}function Te(F,B,T,pe){be(F),be(B),be(pe),be(B),be(T),be(pe);let K=s.length/3,ue=y.generateSideWallUV(n,s,K-6,K-3,K-2,K-1);qe(ue[0]),qe(ue[1]),qe(ue[3]),qe(ue[1]),qe(ue[2]),qe(ue[3])}function be(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function qe(F){r.push(F.x),r.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qy(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ja[s.type]().fromJSON(s)),new i(n,e.options)}},Xy={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ce(r,o),new ce(a,l),new ce(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-h),new ce(d,1-g),new ce(x,1-p)]:[new ce(a,1-l),new ce(u,1-h),new ce(f,1-g),new ce(m,1-p)]}};function qy(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ao=class i extends At{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new C,g=new ce;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,v=y,_=y+n+1,P=y+n+2,b=y+1;a.push(v,_,b),a.push(_,P,b)}}this.setIndex(a),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Qa=class i extends At{constructor(e=new qi([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(r,3)),this.setAttribute("uv",new et(o,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;Wi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];Wi.isClockWise(y)===!0&&(g[m]=y.reverse())}let x=Wi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){let y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){let y=x[m],v=y[0]+h,_=y[1]+h,P=y[2]+h;n.push(v,_,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Yy(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Yy(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Nt=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],v=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let P=0;P<=t;P++){let b=P/t;h.x=-e*Math.cos(s+b*r)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(s+b*r)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(b+_,1-v),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let v=u[p][y+1],_=u[p][y],P=u[p+1][y],b=u[p+1][y+1];(p!==0||o>0)&&f.push(v,_,b),(p!==n-1||l<Math.PI)&&f.push(_,P,b)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var oi=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new C,h=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var el=class i extends At{constructor(e=new $a(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new ce,u=new C,h=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function x(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),y(),p()}function m(v){u=e.getPointAt(v/t,u);let _=o.normals[v],P=o.binormals[v];for(let b=0;b<=s;b++){let R=b/s*Math.PI*2,I=Math.sin(R),S=-Math.cos(R);l.x=S*_.x+I*P.x,l.y=S*_.y+I*P.y,l.z=S*_.z+I*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let _=1;_<=s;_++){let P=(s+1)*(v-1)+(_-1),b=(s+1)*v+(_-1),R=(s+1)*v+_,I=(s+1)*(v-1)+_;g.push(P,b,I),g.push(b,R,I)}}function y(){for(let v=0;v<=t;v++)for(let _=0;_<=s;_++)c.x=v/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ja[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var tl=class extends St{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Fe=class extends En{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yf,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends Fe{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ea(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ky(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $y(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Af(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function op(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Yi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gh=class extends Yi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Js,endingEnd:Js}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qs:r=e,a=2*t-n;break;case Ca:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qs:o=e,l=2*n-t;break;case Ca:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let P=0;P!==a;++P)r[P]=p*o[u+P]+y*o[c+P]+v*o[l+P]+_*o[h+P];return r}},nl=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},xh=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ea(t,this.TimeBufferType),this.values=Ea(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ea(e.times,Array),values:Ea(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case dr:t=this.InterpolantFactoryMethodLinear;break;case Rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return dr;case this.InterpolantFactoryMethodSmooth:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ky(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Rl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=dr;var Ki=class extends Nn{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=ur;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var il=class extends Nn{};il.prototype.ValueTypeName="color";var Ai=class extends Nn{};Ai.prototype.ValueTypeName="number";var _h=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Yt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ri=class extends Nn{InterpolantFactoryMethodLinear(e){return new _h(this.times,this.values,this.getValueSize(),e)}};Ri.prototype.ValueTypeName="quaternion";Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends Nn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=ur;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends Nn{};Ci.prototype.ValueTypeName="vector";var jn=class{constructor(e="",t=-1,n=[],s=Gh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(jy(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Nn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=$y(l);l=Af(l,1,u),c=Af(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ai(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,x){if(f.length!==0){let m=[],p=[];op(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let v=d[g];m.push(v.time),p.push(v.morphTarget===x?1:0)}s.push(new Ai(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(Ci,f+".position",d,"pos",s),n(Ri,f+".quaternion",d,"rot",s),n(Ci,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Zy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ai;case"vector":case"vector2":case"vector3":case"vector4":return Ci;case"color":return il;case"quaternion":return Ri;case"bool":case"boolean":return Ki;case"string":return $i}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function jy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Zy(i.type);if(i.times===void 0){let t=[],n=[];op(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},vh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},Jy=new vh,Ii=class{constructor(e){this.manager=e!==void 0?e:Jy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var yi={},yh=class extends Error{constructor(e,t){super(e),this.response=t}},Ro=class extends Ii{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Vi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:n,onError:s});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=yi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){y();function y(){h.read().then(({done:v,value:_})=>{if(v)p.close();else{x+=_.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let b=0,R=u.length;b<R;b++){let I=u[b];I.onProgress&&I.onProgress(P)}p.enqueue(_),y()}},v=>{p.error(v)})}}});return new Response(m)}else throw new yh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Vi.add(e,c);let u=yi[e];delete yi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=yi[e];if(u===void 0)throw this.manager.itemError(e),c;delete yi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Mh=class extends Ii{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Vi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=uo("img");function l(){u(),Vi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var sl=class extends Ii{constructor(e){super(e)}load(e,t,n,s){let r=new Kt,o=new Mh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},yr=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Co=class extends yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ac=new Ye,Rf=new C,Cf=new C,Io=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rf),Cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cf),t.updateMatrixWorld(),ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bh=class extends Io{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=fr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Zi=class extends yr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},If=new Ye,eo=new C,lc=new C,Eh=class extends Io{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),eo.setFromMatrixPosition(e.matrixWorld),n.position.copy(eo),lc.copy(n.position),lc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(lc),n.updateMatrixWorld(),s.makeTranslation(-eo.x,-eo.y,-eo.z),If.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(If)}},Tn=class extends yr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Eh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Sh=class extends Io{constructor(){super(new Xi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ss=class extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Sh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ji=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var rl=class extends Ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Vi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Vi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Vi.add(e,l),r.manager.itemStart(e)}};var Mr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Pf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Pf(){return performance.now()}var Th=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Yt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Yt.multiplyQuaternionsFlat(e,o,e,t,e,n),Yt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Yh="\\[\\]\\.:\\/",Qy=new RegExp("["+Yh+"]","g"),Kh="[^"+Yh+"]",eM="[^"+Yh.replace("\\.","")+"]",tM=/((?:WC+[\/:])*)/.source.replace("WC",Kh),nM=/(WCOD+)?/.source.replace("WCOD",eM),iM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kh),sM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kh),rM=new RegExp("^"+tM+nM+iM+sM+"$"),oM=["material","materials","bones","map"],wh=class{constructor(e,t,n){let s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qy,"")}static parseTrackName(e){let t=rM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);oM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=wh;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ah=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Js,endingEnd:Js};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ym,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case $m:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Gh:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Km;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===qm){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Qs,s.endingEnd=Qs):(e?s.endingStart=this.zeroSlopeAtStart?Qs:Js:s.endingStart=Ca,t?s.endingEnd=this.zeroSlopeAtEnd?Qs:Js:s.endingEnd=Ca)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},aM=new Float32Array(1),wn=class extends wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;g=new Th(Mt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new nl(new Float32Array(2),new Float32Array(2),1,aM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?jn.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Gh),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Ah(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?jn.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Lf=new Ye,ol=class{constructor(e,t,n=0,s=1/0){this.ray=new vs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lf),this}intersectObject(e,t=!0,n=[]){return Rh(e,this,n,t),n.sort(Df),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Rh(e[s],this,n,t);return n.sort(Df),n}};function Df(i,e){return i.distance-e.distance}function Rh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Rh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ch);function $h(i,e){if(e===qf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Po||e===ll){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Po)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Tr=class extends Ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ji.extractUrlBase(e);o=ji.resolveURL(c,this.path)}else o=ji.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ro(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===up){try{o[rt.KHR_BINARY_GLTF]=new xu(e)}catch(h){s&&s(h);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Su(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case rt.KHR_MATERIALS_UNLIT:o[h]=new eu;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[h]=new _u(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[h]=new vu;break;case rt.KHR_MESH_QUANTIZATION:o[h]=new yu;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function lM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qh=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ce(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],sn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ss(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Tn(u),c.distance=h;break;case"spot":c=new Zi(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},eu=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return Le}extendParams(e,t,n){let s=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(s)}},tu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},nu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(a,a)}return Promise.all(r)}},iu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},su=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},ru=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,vt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},ou=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(a[0],a[1],a[2],sn),Promise.all(r)}},lu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},cu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,vt)),Promise.all(r)}},hu=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},uu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},du=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},fu=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},pu=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},mu=class{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},gu=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Fn.TRIANGLES&&c.mode!==Fn.TRIANGLE_STRIP&&c.mode!==Fn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let x=new Ye,m=new C,p=new Yt,y=new C(1,1,1),v=new za(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),v.setMatrixAt(_,x.compose(m,p,y));for(let _ in l)if(_==="_COLOR_0"){let P=l[_];v.instanceColor=new ys(P.array,P.itemSize,P.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);It.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},up="glTF",Do=12,ap={JSON:1313821514,BIN:5130562},xu=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Do),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==up)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Do,r=new DataView(e,Do),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===ap.JSON){let c=new Uint8Array(e,Do+o,a);this.content=n.decode(c)}else if(l===ap.BIN){let c=Do+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_u=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=bu[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=bu[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Sr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(f)},a,c,sn,d)})})}},vu=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},yu=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},fl=class extends Yi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,y=1-m,v=p-d+h;for(let _=0;_!==a;_++){let P=o[x+_+a],b=o[x+_+l]*u,R=o[g+_+a],I=o[g+_]*u;r[_]=y*P+v*b+m*R+p*I}return r}},cM=new Yt,Mu=class extends fl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return cM.fromArray(r).normalize().toArray(r),r}},Fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lp={9728:qt,9729:tn,9984:Nh,9985:io,9986:js,9987:si},cp={33071:bi,33648:co,10497:Kn},Zh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hM={CUBICSPLINE:void 0,LINEAR:dr,STEP:ur},jh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Fe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ln})),i.DefaultMaterial}function Ts(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function fM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pM(i){let e,t=i.extensions&&i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jh(t.attributes):e=i.indices+":"+Jh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Jh(i.targets[n]);return e}function Jh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Eu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var gM=new Ye,Su=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new sl(this.options.manager):this.textureLoader=new rl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ro(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ts(r,a,s),Pi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ji.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Zh[s.type],a=Sr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ut(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Zh[s.type],c=Sr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==h){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(y);v||(x=new c(a,p*f,s.count*f/u),v=new xo(x,f/u),t.cache.add(y,v)),m=new _o(v,l,d%f/u,g)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new Ut(x,l,g);if(s.sparse!==void 0){let p=Zh.SCALAR,y=Sr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,P=new y(o[1],v,s.sparse.count*p),b=new c(o[2],_,s.sparse.count*l);a!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,I=P.length;R<I;R++){let S=P[R];if(m.setX(S,b[R*l]),l>=2&&m.setY(S,b[R*l+1]),l>=3&&m.setZ(S,b[R*l+2]),l>=4&&m.setW(S,b[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=lp[d.magFilter]||tn,u.minFilter=lp[d.minFilter]||si,u.wrapS=cp[d.wrapS]||Kn,u.wrapT=cp[d.wrapT]||Kn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==qt&&u.minFilter!==tn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Kt(x);m.needsUpdate=!0,d(m)}),t.load(ji.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Pi(h,o),h.userData.mimeType=o.mimeType||mM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ms,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new yo,En.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Fe}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){let h=s[rt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],sn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,vt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Dt);let u=r.alphaMode||jh.OPAQUE;if(u===jh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===jh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Le&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Le&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Le){let h=r.emissiveFactor;a.emissive=new Ce().setRGB(h[0],h[1],h[2],sn)}return r.emissiveTexture!==void 0&&o!==Le&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,vt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Pi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ts(s,h,r),h})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return hp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=pM(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=hp(new At,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?uM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],m=o[f],p,y=c[f];if(m.mode===Fn.TRIANGLES||m.mode===Fn.TRIANGLE_STRIP||m.mode===Fn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new mr(x,y):new ee(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Fn.TRIANGLE_STRIP?p.geometry=$h(p.geometry,ll):m.mode===Fn.TRIANGLE_FAN&&(p.geometry=$h(p.geometry,Po));else if(m.mode===Fn.LINES)p=new Wa(x,y);else if(m.mode===Fn.LINE_STRIP)p=new xr(x,y);else if(m.mode===Fn.LINE_LOOP)p=new Xa(x,y);else if(m.mode===Fn.POINTS)p=new _r(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&fM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Pi(p,r),m.extensions&&Ts(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ts(s,h[0],r),h[0];let d=new Ze;r.extensions&&Ts(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(hl.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Xi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Ye;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new gr(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let y=0,v=d.length;y<v;y++){let _=d[y],P=f[y],b=g[y],R=x[y],I=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let S=n._createAnimationTracks(_,P,b,R,I);if(S)for(let E=0;E<S.length;E++)p.push(S[E])}return new jn(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,gM)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new vo:c.length>1?u=new Ze:c.length===1?u=c[0]:u=new It,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Pi(u,r),r.extensions&&Ts(n,u,r),r.matrix!==void 0){let h=new Ye;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ze;n.name&&(r.name=s.createUniqueName(n.name)),Pi(r,n),n.extensions&&Ts(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof En||d instanceof Kt)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Ji[r.path]===Ji.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ji[r.path]){case Ji.weights:c=Ai;break;case Ji.rotation:c=Ri;break;case Ji.position:case Ji.scale:c=Ci;break;default:switch(n.itemSize){case 1:c=Ai;break;case 2:case 3:default:c=Ci;break}break}let u=s.interpolation!==void 0?hM[s.interpolation]:dr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Ji[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Eu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ri?Mu:fl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function xM(i,e,t){let n=e.attributes,s=new nn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let u=Eu(Sr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,l=new C;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Eu(Sr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new bn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function hp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=bu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return it.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),Pi(i,e),xM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?dM(i,e.targets,t):i})}function Uo(i){let e=new Map,t=new Map,n=i.clone();return dp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function dp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)dp(i.children[n],e.children[n],t)}var pl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},_M=new Xi(-1,1,1,-1,0,1),Tu=class extends At{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}},vM=new Tu,Jn=class{constructor(e){this._mesh=new ee(vM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_M)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ml=class extends dn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ai.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Jn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var No=class extends dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},gl=class extends dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var wr=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ml(pl),this.copyPass.material.blending=ri,this.clock=new Mr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}No!==void 0&&(o instanceof No?n=!0:o instanceof gl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ar=class extends dn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var pp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Rr=class i extends dn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ot(r,o,{type:un});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ot(r,o,{type:un});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=pp;this.highPassUniforms=ai.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=pl;this.copyUniforms=ai.clone(u.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Yn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ce,this.oldClearAlpha=1,this.basic=new Le,this.fsQuad=new Jn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new St({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new St({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Rr.BlurDirectionX=new ce(1,0);Rr.BlurDirectionY=new ce(0,1);var mp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Cr=class extends dn{constructor(){super();let e=mp;this.uniforms=ai.clone(e.uniforms),this.material=new tl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Jn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ih?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ph?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Lh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===br?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Dh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Uh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Fo=class i extends ee{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Lt;let n=this,s=t.color!==void 0?new Ce(t.color):new Ce(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Wn,h=new C,d=new C,f=new C,g=new Ye,x=new C(0,0,-1),m=new at,p=new C,y=new C,v=new at,_=new Ye,P=this.camera,b=new Ot(r,o,{samples:c,type:un}),R=new St({name:l.name!==void 0?l.name:"unspecified",uniforms:ai.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});R.uniforms.tDiffuse.value=b.texture,R.uniforms.color.value=s,R.uniforms.textureMatrix.value=_,this.material=R,this.onBeforeRender=function(I,S,E){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(E.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(d,f),p.dot(h)>0)return;p.reflect(h).negate(),p.add(d),g.extractRotation(E.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(f),y.subVectors(d,x),y.reflect(h).negate(),y.add(d),P.position.copy(p),P.up.set(0,1,0),P.up.applyMatrix4(g),P.up.reflect(h),P.lookAt(y),P.far=E.far,P.updateMatrixWorld(),P.projectionMatrix.copy(E.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(P.projectionMatrix),_.multiply(P.matrixWorldInverse),_.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(P.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let L=P.projectionMatrix;v.x=(Math.sign(m.x)+L.elements[8])/L.elements[0],v.y=(Math.sign(m.y)+L.elements[9])/L.elements[5],v.z=-1,v.w=(1+L.elements[10])/L.elements[14],m.multiplyScalar(2/m.dot(v)),L.elements[2]=m.x,L.elements[6]=m.y,L.elements[10]=m.z+1-a,L.elements[14]=m.w,n.visible=!1;let V=I.getRenderTarget(),N=I.xr.enabled,W=I.shadowMap.autoUpdate;I.xr.enabled=!1,I.shadowMap.autoUpdate=!1,I.setRenderTarget(b),I.state.buffers.depth.setMask(!0),I.autoClear===!1&&I.clear(),I.render(S,P),I.xr.enabled=N,I.shadowMap.autoUpdate=W,I.setRenderTarget(V);let Z=E.viewport;Z!==void 0&&I.state.viewport(Z),n.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}};Fo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Ir=[{id:"lsd",name:"LSD",col:"#ff2fb0",verb:"nehmen",kind:"tab",msg:"\u{1F308} LSD \u2013 die Welt f\xE4ngt an zu flie\xDFen \u2026"},{id:"spd",name:"SPEED",col:"#ffe22f",verb:"ziehen",kind:"line",msg:"\u26A1 SPEED \u2013 Puls auf 180!"},{id:"coke",name:"KOKAIN",col:"#bfe9ff",verb:"ziehen",kind:"line",msg:"\u2744\uFE0F KOKAIN \u2013 alles glitzert und ist superhell"},{id:"ket",name:"KETAMIN",col:"#9a7dff",verb:"ziehen",kind:"line",msg:"\u{1F300} KETAMIN \u2013 ab ins K-Hole \u2026"},{id:"beer",name:"BIER",col:"#ffb02f",verb:"trinken",kind:"beer",msg:"\u{1F37A} BIER \u2013 Prost! Alles schwankt ein bisschen"}],Oo=240,gp=8,wu=120,yM=.4,MM=3.2,bM=300,xl=10,xp="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",EM=`
uniform sampler2D tDiffuse, tPrev; uniform float t, lsd, spd, coke, ket, beer; uniform vec2 res; varying vec2 vUv;
vec3 hue(vec3 c, float a){ const vec3 k = vec3(0.57735); float ca = cos(a); return c * ca + cross(k, c) * sin(a) + k * dot(k, c) * (1.0 - ca); }
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
vec2 rot(vec2 p, float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c) * p; }
vec3 samp(vec2 u){ return texture2D(tDiffuse, clamp(u, 0.001, 0.999)).rgb; }
void main(){
  vec2 asp = vec2(res.x / res.y, 1.0);
  vec2 p = (vUv - 0.5) * asp; float r0 = length(p);
  // Bier: Schwanken und Wabern
  p += beer * vec2(sin(t * 0.9) * 0.035 + sin(p.y * 6.0 + t * 2.0) * 0.01, cos(t * 0.7) * 0.025);
  // Ketamin: Tunnel-Strudel und Atmen
  p = rot(p, ket * 1.1 * sin(t * 0.21) * smoothstep(1.0, 0.0, r0));
  p *= 1.0 + ket * 0.14 * sin(t * 0.55);
  // LSD: Wellen und Kaleidoskop
  p += lsd * 0.03 * vec2(sin(p.y * 17.0 + t * 2.3), sin(p.x * 15.0 + t * 1.9));
  float kal = smoothstep(0.25, 1.0, lsd) * 0.6;
  if (kal > 0.0) { float a = atan(p.y, p.x) + t * 0.12; float seg = 6.28318 / 8.0; float ka = abs(mod(a, seg) - seg * 0.5); vec2 kp = vec2(cos(ka), sin(ka)) * length(p); p = mix(p, kp, kal); }
  // Speed / Koks: Herzschlag-Zoom
  float beat = pow(abs(sin(t * (5.0 + spd * 3.5))), 10.0);
  p *= 1.0 - spd * 0.05 * beat - coke * 0.015 * beat;
  vec2 uv = p / asp + 0.5;
  vec2 dir = uv - 0.5;
  float ca = 0.004 * spd + 0.009 * lsd + 0.003 * coke + 0.005 * beer + 0.007 * ket;
  vec3 col = vec3(samp(uv + dir * ca * 4.0).r, samp(uv).g, samp(uv - dir * ca * 4.0).b);
  // Doppelbild (Bier, Ketamin) und Unsch\xE4rfe
  float dv = min(1.0, beer * 0.7 + ket * 0.45);
  if (dv > 0.0) {
    vec2 off = vec2(0.03 + 0.012 * sin(t * 1.3), 0.008 * sin(t * 0.9)) * (beer + ket * 0.8);
    vec3 c2 = samp(uv + off), c3 = samp(uv - off * 0.6);
    vec3 bl = (samp(uv + vec2(0.004, 0.0)) + samp(uv - vec2(0.004, 0.0)) + samp(uv + vec2(0.0, 0.004)) + samp(uv - vec2(0.0, 0.004))) * 0.25;
    col = mix(col, (bl + c2 + c3 * 0.5) / 2.5, dv);
  }
  // Speed: radiale Streifen (Tunnelblick nach vorne)
  if (spd > 0.0) { vec3 st = vec3(0.0); for (int i = 1; i < 6; i++) st += samp(0.5 + dir * (1.0 - float(i) * 0.012 * spd)); col = mix(col, st / 5.0, spd * 0.45 * smoothstep(0.1, 0.6, length(dir))); }
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  // LSD: Regenbogen-Farben die wandern
  if (lsd > 0.0) {
    vec3 rb = 0.5 + 0.5 * cos(6.28318 * (lum * 1.7 + r0 * 0.9 - t * 0.3 + vec3(0.0, 0.33, 0.67)));
    col = mix(col, hue(col, t * 0.9 + r0 * 4.0) * 1.3, min(1.0, lsd * 0.8));
    col = mix(col, rb * (lum * 1.8 + 0.12), min(1.0, lsd) * 0.5);
  }
  // Speed: S\xE4ttigung, Kontrast, rotes Pulsieren
  col = mix(col, (col - lum) * 2.0 + lum, min(1.0, spd) * 0.8);
  col = mix(col, (col - 0.2) * 1.45 + 0.2, min(1.0, spd) * 0.55);
  col += vec3(0.45, 0.02, 0.08) * beat * spd * 0.4;
  // Kokain: kalt, superhell, Glitzer
  col = mix(col, col * vec3(0.85, 1.0, 1.3) * 1.5 + 0.05, min(1.0, coke) * 0.75);
  float sp = step(0.9975, hash(floor(vUv * res / 3.0) + floor(t * 14.0)));
  col += sp * coke * vec3(2.0, 2.0, 2.4);
  // Ketamin: ents\xE4ttigt, lila-t\xFCrkis
  col = mix(col, vec3(lum) * vec3(0.7, 0.62, 1.35) + vec3(0.0, 0.04, 0.06), min(1.0, ket) * 0.75 * (1.0 - 0.65 * min(1.0, lsd)));
  // Bier: warm, golden
  col = mix(col, col * vec3(1.3, 1.02, 0.55) + vec3(0.03, 0.015, 0.0), min(1.0, beer) * 0.6 * (1.0 - 0.5 * min(1.0, lsd)));
  // Vignette / Tunnel
  float vig = smoothstep(0.25 + 0.55 * (1.0 - min(1.0, ket)), 1.15, r0);
  col *= 1.0 - vig * min(0.95, ket * 0.95 + beer * 0.35 + spd * 0.45);
  // Sehr viel genommen: man sieht fast nichts mehr, nur noch Farben und Muster
  float tot = lsd + spd + coke + ket + beer;
  float blind = smoothstep(1.4, 3.0, tot);
  if (blind > 0.0) {
    vec3 field = 0.5 + 0.5 * cos(6.28318 * (r0 * 2.2 - t * 0.45 + lum * 3.0 + vec3(0.0, 0.33, 0.67)));
    field = mix(field, vec3(lum) * vec3(0.7, 0.6, 1.3), ket / (tot + 0.01));
    field = mix(field, vec3(1.6, 1.7, 1.9), coke / (tot + 0.01) * 0.6);
    field *= 0.55 + 0.6 * sin(t * 2.7 + r0 * 9.0);
    col = mix(col, field, blind * 0.92);
  }
  // Nachzieh-Spuren (Feedback vom letzten Bild)
  vec2 fp = rot((vUv - 0.5) * asp, 0.012 * lsd * sin(t * 0.4) + 0.02 * ket) * (0.985 - 0.012 * ket - 0.006 * lsd);
  vec3 prev = texture2D(tPrev, clamp(fp / asp + 0.5, 0.001, 0.999)).rgb;
  float fb = clamp(lsd * 0.75 + ket * 0.85 + beer * 0.25 + spd * 0.15, 0.0, 0.9);
  col = mix(col, max(col, prev * 0.97), fb * 0.55);
  col = mix(col, prev, fb * 0.45);
  gl_FragColor = vec4(max(col, 0.0), 1.0);
}`,Au=class extends dn{constructor(){super(),this.u={tDiffuse:{value:null},tPrev:{value:null},t:{value:0},res:{value:new ce(1,1)},lsd:{value:0},spd:{value:0},coke:{value:0},ket:{value:0},beer:{value:0}},this.q=new Jn(new St({uniforms:this.u,vertexShader:xp,fragmentShader:EM,depthTest:!1,depthWrite:!1})),this.cu={tDiffuse:{value:null}},this.cq=new Jn(new St({uniforms:this.cu,vertexShader:xp,fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ gl_FragColor = texture2D(tDiffuse, vUv); }",depthTest:!1,depthWrite:!1}));let e={type:un};this.a=new Ot(1,1,e),this.b=new Ot(1,1,e),this.fresh=!0}setSize(e,t){this.a.setSize(e,t),this.b.setSize(e,t),this.u.res.value.set(e,t),this.fresh=!0}render(e,t,n){this.u.tDiffuse.value=n.texture,this.u.tPrev.value=this.fresh?n.texture:this.b.texture,this.fresh=!1,e.setRenderTarget(this.a),this.q.render(e),this.cu.tDiffuse.value=this.a.texture,e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(),this.cq.render(e);let s=this.a;this.a=this.b,this.b=s}};function _p(i){let{scene:e,camera:t,renderer:n,portals:s,me:r,textPlane:o,toast:a,net:l}=i,c=i.R_WALL,u=i.ARC,h=s.length,d=i.PR,f=[],g=new Le({color:16054015}),x=(()=>{let F=document.createElement("canvas");F.width=F.height=64;let B=F.getContext("2d");for(let pe=0;pe<64;pe+=8)for(let K=0;K<64;K+=8)B.fillStyle=`hsl(${(K*5+pe*7)%360},100%,55%)`,B.fillRect(K,pe,8,8);B.fillStyle="#fff",B.font="bold 40px Arial",B.textAlign="center",B.fillText("\u263A",32,46);let T=new $n(F);return T.colorSpace=vt,T})(),m=new Le({map:x}),p=new Fe({color:5910021,roughness:.15,metalness:.3,emissive:2757120,transparent:!0,opacity:.92}),y=new Le({color:16765802}),v=new Fe({color:1381660,roughness:.25,metalness:.7}),_=new Fe({color:11187400,roughness:.05,metalness:1,emissive:1711914});s.forEach((F,B)=>{let T=Ir[B%Ir.length],pe=new Ce(T.col),K=new Ze;K.position.copy(F.pos),K.lookAt(0,0,0),e.add(K);let ue=-1.98,D=.95,Y=(te,Q,ye,he,Me,We,de)=>{let we=new ee(new Ke(te,Q,ye),de);return we.position.set(he,Me,We),K.add(we),we};Y(1.6,.05,.55,0,D,ue,new Fe({color:1381660,roughness:.25,metalness:.7,emissive:pe.clone().multiplyScalar(.22)}));let z=new ee(new Nt(.035,10,8),new Le({color:pe,toneMapped:!1}));z.position.set(-.7,1.55,ue-.2),K.add(z);for(let te of[-.72,.72])for(let Q of[-.22,.22])Y(.05,D,.05,te,D/2,ue+Q,v);Y(1.6,.025,.025,0,D-.03,ue+.28,new Le({color:pe,toneMapped:!1}));let w=o([{t:T.name,size:120,c:T.col,font:'Impact, "Arial Black", sans-serif',weight:400,glow:T.col}],{w:768,h:170,pw:1.3});w.position.set(0,1.85,ue-.24),K.add(w),T.kind!=="beer"&&Y(.95,.012,.36,0,D+.031,ue,_);let M=[];for(let te=0;te<xl;te++){let Q=T.kind==="line"?-.36+te*.08:-.32+te%5*.16,ye=T.kind==="line"?0:te<5?-.08:.08,he;if(T.kind==="line")he=new ee(new Ke(.016,.007,.24),T.id==="spd"?new Le({color:16773576}):T.id==="ket"?new Le({color:15131391}):g),he.position.set(Q,D+.041,ue);else if(T.kind==="tab")he=new ee(new Ke(.07,.003,.07),m),he.position.set(Q,D+.039,ue+ye),he.rotation.y=(te%5-2)*.2;else{he=new Ze;let Me=new ee(new ct(.032,.032,.17,14),p);Me.position.y=.085,he.add(Me);let We=new ee(new ct(.012,.03,.08,12),p);We.position.y=.21,he.add(We);let de=new ee(new ct(.0325,.0325,.06,14,1,!0),y);de.position.y=.08,he.add(de),he.position.set(Q+(te<5?0:.05),D+.025,ue+ye*1.2)}K.add(he),M.push(he)}if(T.kind==="line"){let te=new ee(new ct(.008,.008,.13,10),new Le({color:9421962}));te.rotation.z=Math.PI/2,te.position.set(.38,D+.045,ue+.1),K.add(te)}let U=new ee(new Ke(.95,.35,.5),new Le({transparent:!0,opacity:0,depthWrite:!1}));U.position.set(-.05,D+.15,ue),K.add(U);let $={i:B,P:F,D:T,units:M,left:new Array(xl).fill(!0),takenAt:new Array(xl).fill(0),hit:U,aim:{secret:!0,table:B}};if(U.userData.aim=$.aim,B===h-1){let te=new Ze;te.position.set(.6,D+.03,ue),K.add(te);let Q=new ee(new Ke(.3,.01,.16),new Le({color:16777215}));te.add(Q);let ye=new Le({color:14688288}),he=new ee(new Ke(.05,.002,.016),ye);he.position.set(-.11,.006,.05),te.add(he);let Me=he.clone();Me.rotation.y=Math.PI/2,te.add(Me);let We=new ee(new ct(.017,.017,.15,14),new Le({color:3800968,toneMapped:!1,transparent:!0,opacity:.85}));We.rotation.z=Math.PI/2,We.position.set(.02,.025,0),te.add(We);let de=new ee(new ct(.002,.002,.07,6),new Le({color:14540253}));de.rotation.z=Math.PI/2,de.position.set(.13,.025,0),te.add(de);let we=new ee(new ct(.012,.012,.06,10),new Le({color:15658734}));we.rotation.z=Math.PI/2,we.position.set(-.08,.025,0),te.add(we);let Ve=o([{t:"GEGENMITTEL",size:90,c:"#39ff88",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"#39ff88"}],{w:768,h:140,pw:.7});Ve.position.set(.6,1.33,ue-.24),K.add(Ve);let Ge=new ee(new Ke(.34,.25,.3),U.material);Ge.position.set(.6,D+.1,ue),K.add(Ge),$.antiHit=Ge,Ge.userData.aim={secret:!0,anti:!0,table:B}}f.push($)});let P=[];for(let F=-1;F<h;F++){let B=(F+.5-(h-1)/2)*u;P.push(new C(Math.sin(B)*(c-.6),0,-Math.cos(B)*(c-.6)))}function b(F){for(let B of P){let T=F.x-B.x,pe=F.z-B.z,K=Math.hypot(T,pe),ue=.62+d;K<ue&&K>1e-4&&(F.x=B.x+T/K*ue,F.z=B.z+pe/K*ue)}for(let B of f){let T=B.P,pe=F.x-T.pos.x,K=F.z-T.pos.z,ue=pe*T.n.x+K*T.n.z,D=pe*T.t.x+K*T.t.z,Y=-1.7+d;if(Math.abs(D)<.8+d&&ue<Y&&ue>-2.6){let z=Y-ue;F.x+=T.n.x*z,F.z+=T.n.z*z}}}let R=F=>{let B=F.P;return(r.pos.x-B.pos.x)*B.n.x+(r.pos.z-B.pos.z)*B.n.z<-.35},I=Ir.map(()=>({doses:[],end:0})),S={lsd:0,spd:0,coke:0,ket:0,beer:0},E=0,L=()=>performance.now()/1e3,V=F=>{if(F<0||F>=Oo)return 0;if(F<gp){let T=F/gp;return T*T*(3-2*T)}if(F<wu)return 1;let B=(F-wu)/(Oo-wu);return 1-B*B*(3-2*B)};function N(F,B){let T=I[F];T.doses=T.doses.filter(K=>B-K<Oo);let pe=0;for(let K of T.doses)pe+=yM*V(B-K);return Math.min(MM,pe)}function W(F){let B=L(),T=I[F];T.doses.push(B),T.end=B+Oo;let pe=T.doses.filter(K=>B-K<Oo).length;a(Ir[F].msg+(pe>1?` (${pe}. Dosis \u2013 st\xE4rker!)`:" (ca. 4 Minuten)"))}function Z(){let F=L(),B=!1;for(let T of I)T.end>F&&(B=!0),T.end=0,T.doses=[];E=L(),a(B?"\u{1F489} Gegenmittel \u2013 alles wieder klar im Kopf":"\u{1F489} Gegenmittel \u2013 du warst eh n\xFCchtern \u{1F604}")}let G=()=>f.map(F=>F.left.reduce((B,T,pe)=>B|(T?1<<pe:0),0));function ae(F){f.forEach((B,T)=>{let pe=F[T]|0;B.left=B.units.map((K,ue)=>!!(pe&1<<ue)),B.units.forEach((K,ue)=>K.visible=B.left[ue])})}function X(){if(l.role!=="host")return;let F={t:"dg",s:G()};for(let B of l.conns.values())try{B.conn.send(F)}catch{}}function me(F,B){let T=f[F];return!T||!T.left[B]?!1:(T.left[B]=!1,T.takenAt[B]=L(),T.units[B].visible=!1,!0)}function xe(F){let B=f[F.table];if(!B||!R(B))return;if(F.anti){Z();return}let T=B.left.indexOf(!0);if(T<0){a(B.D.name+" ist leer \u2013 kommt in ein paar Minuten wieder");return}if(me(F.table,T),W(F.table%Ir.length),l.role==="client"&&l.conn)try{l.conn.send({t:"dg1",i:F.table,k:T})}catch{}else X()}let re=0;function Pe(F){if(l.role==="client"||(re+=F)<2)return;re=0;let B=L(),T=!1;for(let pe of f)pe.left.forEach((K,ue)=>{!K&&B-pe.takenAt[ue]>bM&&(pe.left[ue]=!0,pe.units[ue].visible=!0,T=!0)});T&&X()}let Xe=new Au;Xe.enabled=!1;let ne=null;if(i.composer){let F=i.composer.passes;i.composer.insertPass(Xe,Math.max(1,F.length-1))}function fe(){if(ne)return ne;ne=new wr(n),ne.addPass(new Ar(e,t)),ne.addPass(Xe),ne.addPass(new Cr);let F=()=>ne.setSize(window.innerWidth,window.innerHeight);return window.addEventListener("resize",F),F(),ne}let q=document.createElement("div");q.id="tripHud",q.style.cssText='position:fixed;left:16px;bottom:64px;z-index:20;font:600 14px "Segoe UI",system-ui,sans-serif;color:#fff;text-shadow:0 1px 4px #000;pointer-events:none;display:flex;flex-direction:column;gap:4px',document.body.appendChild(q);let se=0,ge=document.createElement("div");ge.style.cssText="position:fixed;inset:0;background:#e8fff0;opacity:0;pointer-events:none;z-index:19",document.body.appendChild(ge);let Te=t.fov,be=!1;function qe(F,B){Pe(F);let T=L();S.lsd=N(0,T),S.spd=N(1,T),S.coke=N(2,T),S.ket=N(3,T),S.beer=N(4,T),be=S.lsd+S.spd+S.coke+S.ket+S.beer>.002,Xe.enabled=be;for(let D in S)Xe.u[D].value=S[D];Xe.u.t.value=B,be||(Xe.fresh=!0);let K={};for(let D in S)K[D]=Math.min(1.6,S[D]);let ue=Te+K.coke*14+K.spd*10-K.ket*12+K.lsd*8*Math.sin(B*.5)+K.beer*3*Math.sin(B*.7);if(Math.abs(t.fov-ue)>.01&&(t.fov=ue,t.updateProjectionMatrix()),be&&(t.rotation.z+=K.beer*.09*Math.sin(B*.8)+K.ket*.22*Math.sin(B*.23)+K.lsd*.06*Math.sin(B*.6),t.rotation.x+=K.beer*.035*Math.sin(B*1.1)+K.ket*.05*Math.sin(B*.31),t.rotation.y+=K.beer*.045*Math.sin(B*.55),t.position.y+=K.spd*.02*Math.sin(B*40)+K.coke*.008*Math.sin(B*33)),i.bloom&&(i.bloom.strength=.42+Math.min(1.2,K.coke*.7+K.lsd*.5+K.spd*.25)),E>0){let D=Math.max(0,1-(T-E)/1.3);ge.style.opacity=String(D*.85),D<=0&&(E=0)}if((se+=F)>.5){se=0;let D=Ir.map((Y,z)=>I[z].end>T?`<span><span style="color:${Y.col}">\u25CF</span> ${Y.name}${I[z].doses.length>1?" \xD7"+I[z].doses.length:""} ${Math.floor((I[z].end-T)/60)}:${String(Math.floor((I[z].end-T)%60)).padStart(2,"0")}</span>`:"").filter(Boolean);q.innerHTML=D.join("")}}return{collide:b,tick:qe,use:xe,targets:()=>{let F=[];for(let B of f)F.push(B.hit),B.antiHit&&F.push(B.antiHit);return F},prompt(F,B){let T=f[F.table],pe=B?"Tippe auf <kbd>E</kbd>":"<kbd>E</kbd>";if(F.anti)return`<b style="color:#39ff88">\u{1F489} Gegenmittel</b><br><small>${pe} = spritzen (hebt alle Drogen auf)</small>`;let K=T.left.filter(Boolean).length;return`<b style="color:${T.D.col}">${T.D.name}</b> <small>\xB7 ${K} von ${xl} \xFCbrig</small><br><small>${K?pe+" = "+T.D.verb:"leer \u2013 kommt bald wieder"}</small>`},canAim:F=>{let B=f[F.table];return!!B&&R(B)},speedMul:()=>Math.max(.35,1+Math.min(1.6,S.spd)*.7+Math.min(1.6,S.coke)*.35-Math.min(1.6,S.ket)*.55-Math.min(1.6,S.beer)*.15),jumpMul:()=>1+Math.min(1.6,S.spd)*.3+Math.min(1.6,S.coke)*.15-Math.min(1.6,S.ket)*.2,drift:(F,B)=>{let T=Math.min(1.6,S.beer)*1.6*Math.sin(B*.9)+Math.min(1.6,S.ket)*1.2*Math.sin(B*.37);Math.abs(T)>.001&&F.lengthSq()>0&&(F.x+=Math.cos(B*.3)*T,F.z+=Math.sin(B*.3)*T)},render(F){return be?(F?F.render():fe().render(),!0):!1},state:G,setState:ae,hostTake(F,B){me(F,B),X()}}}var Iu=[{id:"",name:"Glatze"},{id:"hair_buzzed",name:"Kurz"},{id:"hair_simpleparted",name:"Scheitel"},{id:"hair_long",name:"Lang"},{id:"hair_buns",name:"Dutt"},{id:"hair_buzzedfemale",name:"Kurz (Frau)"}],Ep=["Kein Oberteil","T-Shirt","Langarm","Tanktop"],Sp=["Keine Hose","Shorts","Lange Hose"],Tp=["Barfu\xDF","Schuhe"],On=["#ff2fb0","#20e0ff","#ffe22f","#39ff88","#8a2fff","#ff6a1a","#f2f2f2","#1b1c22","#d81c1c","#2f5dff","#6b4a2e","#7a7f88"],Pu=["#2a1d15","#5a3b22","#a8743c","#e8c46a","#0d0d0d","#b8452a","#ff2fb0","#e8e8e8"],ws=[{id:"",name:"Klassisch",kind:"Eigene Frisur & Kleidung"},{id:"remy",name:"Remy",kind:"Realistisch",parts:[["Oberteil",/^Tops/],["Hose",/^Bottoms/],["Schuhe",/^Shoes/],["Haare",/^Hair/]]},{id:"ch31",name:"Leo",kind:"Realistisch",parts:[["Pullover",/Sweater|Collar/],["Hose",/Pants/],["Schuhe",/Shoes/],["Haare",/Hair/]]},{id:"ch37",name:"Jody",kind:"Realistisch",parts:[["Shirt",/Shirt|Zipper/],["Hose",/Pants/],["Schuhe",/Sneakers/],["Haare",/Hair/]]},{id:"ch03",name:"Michelle",kind:"Realistisch"},{id:"soldier",name:"Soldat",kind:"Realistisch"},{id:"swat",name:"SWAT",kind:"Realistisch"},{id:"ch46",name:"Amy",kind:"Comic"},{id:"claire",name:"Claire",kind:"Comic"},{id:"kaya",name:"Rasta",kind:"Comic"},{id:"vegas",name:"Elvis",kind:"Comic"},{id:"ch43",name:"Wrestler",kind:"Comic"},{id:"ch14",name:"Fuchs",kind:"Comic"},{id:"xbot",name:"Roboter",kind:"Comic",parts:[["K\xF6rper",/Beta_Surface|Surface/],["Gelenke",/Joints/]]}],Lu=["Keine","Basecap","M\xFCtze","Hut"],Du=["Keine","Sonnenbrille","Party-Brille"],Pr={b:"m",s:0,h:"hair_simpleparted",hc:"#2a1d15",beard:0,top:0,tc:"#ff2fb0",bot:0,bc:"#1b1c22",sh:0,shc:"#f2f2f2",ch:"",p:["","","",""],cap:0,capc:"#1b1c22",gl:0,chain:0,bag:0,bagc:"#ff2fb0"},wp=[[],[1,2],[1,2,3],[1]],Ap=[[],[4,5],[4,5,6]],Rp=[[],[7]];function xn(i){let e=Object.assign({},Pr,i||{});e.b=e.b==="f"?"f":"m",e.s=e.s?1:0,Iu.some(t=>t.id===e.h)||(e.h=Pr.h);for(let t of["top","bot","sh"])e[t]=Math.max(0,Math.min(t==="top"?3:t==="bot"?2:1,e[t]|0));for(let t of["hc","tc","bc","shc"])/^#[0-9a-f]{6}$/i.test(e[t]||"")||(e[t]=Pr[t]);e.beard=e.beard&&e.b==="m"?1:0,ws.some(t=>t.id===e.ch)||(e.ch=""),e.p=[0,1,2,3].map(t=>Array.isArray(e.p)&&/^#[0-9a-f]{6}$/i.test(e.p[t]||"")?e.p[t]:""),e.cap=Math.max(0,Math.min(Lu.length-1,e.cap|0)),e.gl=Math.max(0,Math.min(Du.length-1,e.gl|0)),e.chain=e.chain?1:0,e.bag=e.bag?1:0;for(let t of["capc","bagc"])/^#[0-9a-f]{6}$/i.test(e[t]||"")||(e[t]=Pr[t]);return e}function Cp(i=Math.random,e=!0,t=!0){let n=i()<.5?"m":"f",s=a=>a[Math.floor(i()*a.length)],r=n==="m"?["hair_buzzed","hair_simpleparted","hair_long","","hair_buzzed"]:["hair_long","hair_buns","hair_buzzedfemale","hair_long","hair_simpleparted"],o={b:n,s:i()<.4?1:0,h:s(r),hc:s(Pu),beard:n==="m"&&i()<.35?1:0,top:e?1+Math.floor(i()*3):0,tc:s(On),bot:e?1+Math.floor(i()*2):0,bc:s(["#1b1c22","#23314f","#3a2e22","#4a4f58","#111111","#6b4a2e"]),sh:e?1:0,shc:s(["#f2f2f2","#111111","#ff2fb0","#20e0ff"])};return e&&(i()<.18&&(o.cap=1+Math.floor(i()*3),o.capc=s(On)),i()<.15&&(o.gl=1+Math.floor(i()*2)),i()<.12&&(o.chain=1)),e&&t&&i()<.35&&(o.ch=s(["remy","ch31","ch37","ch03","ch46","claire","kaya","vegas","ch43","ch14"])),o}async function Ip(i="/System/figuren/"){let e=new Tr,t=p=>new Promise((y,v)=>{let _=new Image;_.onload=()=>y(_),_.onerror=v,_.src=i+p}),[n,s,...r]=await Promise.all([e.loadAsync(i+"mann.gltf"),e.loadAsync(i+"frau.gltf"),...["hair_buzzed","hair_simpleparted","hair_long","hair_buns","hair_buzzedfemale","hair_beard"].map(p=>e.loadAsync(i+p+".gltf"))]),[o,a,l,c,u,h]=await Promise.all(["m_skin0.jpg","m_skin1.jpg","f_skin0.jpg","f_skin1.jpg","m_mask.png","f_mask.png"].map(t)),d=p=>{let y=document.createElement("canvas");y.width=p.width,y.height=p.height;let v=y.getContext("2d");return v.drawImage(p,0,0),v.getImageData(0,0,y.width,y.height)},f={};["hair_buzzed","hair_simpleparted","hair_long","hair_buns","hair_buzzedfemale","hair_beard"].forEach((p,y)=>f[p]=r[y]);let g=new nn().setFromObject(n.scene),x=1.8/(g.max.y-g.min.y),m={body:{m:n,f:s},hair:f,skins:{m:[d(o),d(a)],f:[d(l),d(c)]},masks:{m:d(u),f:d(h)},scale:x,tex:new Map,mats:new Map};try{let p=i+"mx/",y=await e.loadAsync(p+"anims.glb"),v=y.scene.getObjectByName("mixamorigHips"),_=m.mx={base:p,L:e,clips:{},xHip:v?v.position.length():1,chars:{xbot:y},wait:{},cache:new Map};for(let b of y.animations)_.clips[b.name]=b;let P=(()=>{try{return(JSON.parse(localStorage.getItem("operation-hias")||"{}").look||{}).ch||""}catch{return""}})();for(let b of ws)b.id&&b.id!=="xbot"&&Bo(m,b.id);P&&_.wait[P]&&await Promise.race([_.wait[P],new Promise(b=>setTimeout(b,9e3))])}catch(p){console.warn("Neue Figuren fehlen",p)}return m}function Bo(i,e){let t=i&&i.mx;return!t||!e?Promise.resolve(null):t.chars[e]?Promise.resolve(t.chars[e]):(t.wait[e]||(t.wait[e]=t.L.loadAsync(t.base+e+".glb").then(n=>t.chars[e]=n).catch(n=>(console.warn("Figur fehlt",e,n),null))),t.wait[e])}var Lr=(i,e)=>!e||!!(i&&i.mx&&i.mx.chars[e]);function SM(i,e){let t=[e.b,e.s,e.top,e.tc,e.bot,e.bc,e.sh,e.shc].join("|");if(i.tex.has(t))return i.tex.get(t);let n=i.skins[e.b][e.s],s=i.masks[e.b],r=n.width,o=n.height,a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c=l.createImageData(r,o),u=c.data,h=n.data,d=s.data,f=new Array(8).fill(null),g=p=>[parseInt(p.slice(1,3),16),parseInt(p.slice(3,5),16),parseInt(p.slice(5,7),16)];for(let p of wp[e.top])f[p]=g(e.tc);for(let p of Ap[e.bot])f[p]=g(e.bc);for(let p of Rp[e.sh])f[p]=g(e.shc);let x=s.width/r;for(let p=0;p<o;p++)for(let y=0;y<r;y++){let v=(p*r+y)*4,_=(Math.floor(p*x)*s.width+Math.floor(y*x))*4,P=Math.round(d[_]/30),b=f[P];if(b){let R=(h[v]+h[v+1]+h[v+2])/765,I=.62+R*.55;u[v]=Math.min(255,b[0]*I),u[v+1]=Math.min(255,b[1]*I),u[v+2]=Math.min(255,b[2]*I)}else if(Math.abs(h[v]-h[v+1])<14&&Math.abs(h[v+1]-h[v+2])<14&&h[v]>80){let R=18+(h[v]-80)*.18;u[v]=R,u[v+1]=R,u[v+2]=R+3}else u[v]=h[v],u[v+1]=h[v+1],u[v+2]=h[v+2];u[v+3]=255}l.putImageData(c,0,0);let m=new $n(a);return m.flipY=!1,m.colorSpace=vt,m.anisotropy=4,i.tex.set(t,m),m}function vp(i,e,t,n,s){for(let r of e.scene.getObjectsByProperty("isSkinnedMesh",!0)){let o=new Fe({map:r.material.map,color:new Ce(s).multiplyScalar(2.2),roughness:.75,side:Dt}),a=new mr(r.geometry,o),l=r.skeleton.bones.map(c=>t[c.name]||t.Head);a.bind(new gr(l,r.skeleton.boneInverses),r.bindMatrix),a.frustumCulled=!1,a.castShadow=!0,n.add(a)}}function _l(i,e,t=!1){let n=xn(e);if(n.ch&&i.mx&&i.mx.chars[n.ch]){let r=AM(i,n,t);return yp(r,n,!0),r}let s=TM(i,n,t);return yp(s,n,!1),s}function TM(i,e,t){let n=Uo(i.body[e.b].scene);n.scale.setScalar(i.scale);let s={};n.traverse(l=>{l.isBone&&(s[l.name]=l)});let r=[],o=null,a=new Ce(e.hc).multiplyScalar(2.2);return n.traverse(l=>{if(!(l.isSkinnedMesh||l.isMesh))return;l.frustumCulled=!1,l.castShadow=!0;let c=l.material&&l.material.name||"";if(/Superhero/i.test(c)){o=l.parent;let u="body|"+[e.b,e.s,e.top,e.tc,e.bot,e.bc,e.sh,e.shc].join("|"),h=t&&i.mats.get(u);h||(h=l.material.clone(),h.map=SM(i,e),h.roughness=.62,h.metalness=0,h.needsUpdate=!0,t&&i.mats.set(u,h)),l.material=h,r.push(h)}else/Hair/i.test(c)&&(l.material=l.material.clone(),l.material.color=a.clone())}),o=o||n,e.h&&i.hair[e.h]&&vp(i,i.hair[e.h],s,o,e.hc),e.beard&&i.hair.hair_beard&&vp(i,i.hair.hair_beard,s,o,e.hc),{m:n,bones:s,mats:r,look:e}}var Ru={Head:"mixamorigHead",neck_01:"mixamorigNeck",spine_03:"mixamorigSpine2",spine_02:"mixamorigSpine1",spine_01:"mixamorigSpine",pelvis:"mixamorigHips",hand_r:"mixamorigRightHand",hand_l:"mixamorigLeftHand",foot_r:"mixamorigRightFoot",foot_l:"mixamorigLeftFoot"};function wM(i,e){let t=i.clone();return t.color=new Ce(e),t.userData.tint=1,t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
 vec4 sampledDiffuseColor = texture2D( map, vMapUv );
 float lumT = dot( sampledDiffuseColor.rgb, vec3( 0.299, 0.587, 0.114 ) );
 diffuseColor.rgb *= vec3( 0.18 + lumT * 1.5 );
 diffuseColor.a *= sampledDiffuseColor.a;
#endif`)},t.customProgramCacheKey=()=>"tint",t}function AM(i,e,t){let n=i.mx,s=n.chars[e.ch],r=ws.find(h=>h.id===e.ch)||{},o=Uo(s.scene),a={};o.traverse(h=>{h.isBone&&(a[h.name]=h)});for(let h in Ru)a[Ru[h]]&&(a[h]=a[Ru[h]]);let l=[];o.traverse(h=>{if(!(h.isSkinnedMesh||h.isMesh))return;h.frustumCulled=!1,h.castShadow=!0;let d=(r.parts||[]).findIndex(([,f])=>f.test(h.name)||f.test(h.material&&h.material.name||""));if(d>=0&&e.p[d]){let f=e.ch+"|"+h.name+"|"+e.p[d],g=t&&i.mats.get(f);g||(g=wM(h.material,e.p[d]),t&&i.mats.set(f,g)),h.material=g}h.material&&h.material.map&&(h.material.map.anisotropy=4),l.push(h.material)});let c=a.mixamorigHips;o.userData.mxRig={id:e.ch,ratio:c?c.position.length()/n.xHip:1,mx:n},o.scale.setScalar(1),o.updateMatrixWorld(!0);let u=(a.Head||c||o).getWorldScale(new C).x||1;return{m:o,bones:a,mats:l,look:e,mx:!0,inv:1/u}}var RM=[[/Death/i,"die"],[/Hit/i,"hit"],[/Sprint/i,"sprint"],[/Jog|Run/i,"run"],[/Crouch_Fwd/i,"sneak"],[/Crouch|Fixing|Kneel/i,"crouch"],[/Walk/i,"walk"],[/Jump/i,"jump"],[/Dance/i,"dance"],[/Driv/i,"drive"],[/Sit/i,"sit"],[/Wave/i,"wave"],[/Interact|Push|Punch|PickUp|Spell|Sword/i,"use"]];function CM(i,e){let t=i.id+"|"+e.uuid,n=i.mx.cache.get(t);if(n)return n;let s=i.mx.clips[e.name]?e.name:"idle";if(!i.mx.clips[e.name]){for(let[o,a]of RM)if(o.test(e.name)){s=a;break}}let r=i.mx.clips[s]||i.mx.clips.idle;return n=new jn(e.name+"@mx",r.duration,r.tracks.filter(o=>o.name.endsWith(".quaternion")||o.name==="mixamorigHips.position").map(o=>{if(o.name!=="mixamorigHips.position")return o;let a=o.clone();for(let l=0;l<a.values.length;l++)a.values[l]*=i.ratio;return a})),n.userData={mx:1},i.mx.cache.set(t,n),n}if(!wn.prototype.__mxPatch){let i=wn.prototype.clipAction;wn.prototype.clipAction=function(e,t,n){let s=t||this._root,r=s&&s.userData&&s.userData.mxRig;return r&&e&&!(e.userData&&e.userData.mx)&&(e=CM(r,typeof e=="string"?jn.findByName(s,e)||{name:e,uuid:e}:e)),i.call(this,e,t,n)},wn.prototype.__mxPatch=1}var Cu=new Map,Zt=(i,e={})=>{let t=i+JSON.stringify(e);return Cu.has(t)||Cu.set(t,new Fe(Object.assign({color:i,roughness:.6},e))),Cu.get(t)};function yp(i,e,t){if(!e.cap&&!e.gl&&!e.chain&&!e.bag)return;let n=i.bones,s=n.Head;i.m.updateMatrixWorld(!0);let o=d=>d.getWorldPosition(new C),a=.24;t&&n.mixamorigHeadTop_End&&s&&(a=o(n.mixamorigHeadTop_End).distanceTo(o(s))||.24);let l=(d,f,g)=>{if(!d)return;let x=d.getWorldQuaternion(new Yt),m=d.getWorldScale(new C);f.position.copy(d.worldToLocal(g.clone())),f.quaternion.copy(x.invert().multiply(f.quaternion)),f.scale.divide(m),f.castShadow=!0,d.add(f)},c=()=>{let d=a*.62;return t||(d=.118),d};if(s){let d=o(s),f=c(),g=d.clone().add(new C(0,t?a*.72:.12,t?0:.005));if(e.cap===1){let x=new Ze,m=new ee(new Nt(f*1.05,18,10,0,Math.PI*2,0,Math.PI/2),Zt(e.capc));m.scale.y=.72,x.add(m);let p=new ee(new ct(f*.9,f*.9,f*.06,18,1,!1,-Math.PI/2,Math.PI),Zt(e.capc));p.scale.set(1,1,.75),p.position.set(0,0,f*.55),x.add(p);let y=new ee(new Nt(f*.08,8,6),Zt(e.capc));y.position.y=f*.74,x.add(y),l(s,x,g.clone().add(new C(0,-f*.18,0)))}if(e.cap===2){let x=new Ze,m=new ee(new Nt(f*1.07,18,12,0,Math.PI*2,0,Math.PI*.55),Zt(e.capc,{roughness:.95}));m.scale.y=.95,x.add(m);let p=new ee(new oi(f*1.02,f*.12,8,24),Zt(e.capc,{roughness:.95}));p.rotation.x=Math.PI/2,p.position.y=f*.12,x.add(p);let y=new ee(new Nt(f*.25,10,8),Zt("#f2f2f2",{roughness:1}));y.position.y=f*1.05,x.add(y),l(s,x,g.clone().add(new C(0,-f*.32,0)))}if(e.cap===3){let x=new Ze,m=new ee(new ct(f*.82,f*.98,f*.85,18),Zt(e.capc));m.position.y=f*.42,x.add(m);let p=new ee(new ct(f*1.75,f*1.75,f*.06,24),Zt(e.capc));x.add(p);let y=new ee(new ct(f*.99,f*.99,f*.18,18,1,!0),Zt("#111111"));y.position.y=f*.12,x.add(y),l(s,x,g.clone().add(new C(0,-f*.08,0)))}if(e.gl){let x=new Ze,m=e.gl===1?Zt("#050508",{roughness:.05,metalness:.8}):new Le({color:[16723888,2154751,3800968][(e.capc||"").length%3],toneMapped:!1});for(let y of[-1,1]){let v=new ee(e.gl===1?new Nt(f*.34,14,10):new ct(f*.33,f*.33,f*.06,5),m);e.gl===1?v.scale.set(1.15,.8,.35):v.rotation.x=Math.PI/2,v.position.set(y*f*.42,0,0),x.add(v)}let p=new ee(new Ke(f*1.6,f*.06,f*.05),Zt("#111111"));p.position.y=f*.1,x.add(p);for(let y of[-1,1]){let v=new ee(new Ke(f*.05,f*.05,f*.95),Zt("#111111"));v.position.set(y*f*.82,f*.08,-f*.48),x.add(v)}l(s,x,d.clone().add(new C(0,t?a*.36:.075,t?f*.98:.105)))}}let u=n.neck_01||s,h=n.spine_03;if(e.chain&&u){let d=o(u),f=t?a*.5:.11,g=new ee(new oi(f,f*.07,6,28),Zt("#e8c45a",{metalness:1,roughness:.25}));g.rotation.x=Math.PI/2-.5;let x=new ee(new ct(f*.22,f*.22,f*.06,12),Zt("#e8c45a",{metalness:1,roughness:.2}));x.rotation.x=Math.PI/2,x.position.set(0,-f*.95,f*.15);let m=new Ze;m.add(g,x),l(u,m,d.clone().add(new C(0,-f*.55,f*.35)))}if(e.bag&&h){let d=o(h),f=t?a*1.1:.24,g=new Ze,x=new ee(new Ke(f*1.3,f*1.6,f*.6),Zt(e.bagc));g.add(x);let m=new ee(new Ke(f*1,f*.6,f*.25),Zt(e.bagc));m.position.set(0,-f*.35,-f*.4),g.add(m);for(let p of[-1,1]){let y=new ee(new Ke(f*.12,f*1.7,f*.05),Zt("#151515"));y.position.set(p*f*.42,0,f*.32),g.add(y)}l(h,g,d.clone().add(new C(0,-f*.1,-f*.62)))}}var Mp=[[196,204,216],[130,96,210],[214,182,92],[232,234,240],[70,160,205]];function IM(i,e,t){let n="alien|"+e.getHexString()+"|"+t.join(",");if(i.tex.has(n))return i.tex.get(n);let s=i.skins.m[0],r=i.masks.m,o=s.width,a=s.height,l=document.createElement("canvas");l.width=o,l.height=a;let c=l.getContext("2d"),u=c.createImageData(o,a),h=u.data,d=s.data,f=r.data,g=r.width/o,x=new Array(8).fill(!1);for(let _ of[...wp[2],...Ap[2],...Rp[1]])x[_]=!0;let m=Math.round(e.r*255),p=Math.round(e.g*255),y=Math.round(e.b*255);for(let _=0;_<a;_++)for(let P=0;P<o;P++){let b=(_*o+P)*4,R=(Math.floor(_*g)*r.width+Math.floor(P*g))*4,I=Math.round(f[R]/30),S=(d[b]+d[b+1]+d[b+2])/765;if(x[I]){let E=.55+S*.6,L=_%64<3?.75:1;h[b]=Math.min(255,t[0]*E*L),h[b+1]=Math.min(255,t[1]*E*L),h[b+2]=Math.min(255,t[2]*E*L)}else{let E=.45+S*.85;h[b]=Math.min(255,m*E),h[b+1]=Math.min(255,p*E),h[b+2]=Math.min(255,y*E)}h[b+3]=255}c.putImageData(u,0,0);let v=new $n(l);return v.flipY=!1,v.colorSpace=vt,v.anisotropy=4,i.tex.set(n,v),v}var bp=[8377946,5887648,10933834,4901064,10124799,7001706,14075978,5944575,14052020,4904570];function Pp(i,e=0){let t=_l(i,{b:"m",s:0,h:"",top:0,bot:0,sh:0},!1),n=new Ce(bp[e%bp.length]),s=new Fe({map:IM(i,n,Mp[e%Mp.length]),roughness:.42,metalness:.2,emissive:n,emissiveIntensity:.08});t.m.traverse(o=>{if(!(o.isSkinnedMesh||o.isMesh))return;let a=o.material&&o.material.name||"";/Superhero/i.test(a)?o.material=s:o.visible=!1});let r=t.bones.Head;if(r){t.m.updateMatrixWorld(!0);let o=new C,a=new Yt,l=new C;r.matrixWorld.decompose(o,a,l);let c=t.m.scale.x,u=a.clone().invert(),h=(x,m,p=0)=>{let y=o.clone().add(m.clone().multiplyScalar(1));x.position.copy(r.worldToLocal(y));let v=new Yt().setFromEuler(new Dn(0,0,p));x.quaternion.copy(u.clone().multiply(v)),x.scale.divideScalar(l.x),r.add(x)},d=new Fe({color:328968,roughness:.05,metalness:.7});for(let x of[-1,1]){let m=new ee(new Nt(.035,16,12),d);m.scale.set(1.15,.62,.5),h(m,new C(x*.042,.075,.095),x*.45)}let f=new Fe({color:n,roughness:.4}),g=new Le({color:11992970,toneMapped:!1});for(let x of[-1,1]){let m=new ee(new ct(.006,.008,.16,6),f);h(m,new C(x*.04,.25,0),-x*.3);let p=new ee(new Nt(.022,10,8),g);h(p,new C(x*.065,.33,0))}r.scale.multiplyScalar(1.45)}return t}var Uu=["Waldrave Acid","Blaulicht Hardtechno","Sonnenaufgang","Schranz Attacke","Hardtekk SPK","Acid Nacht","Minimal im Unterholz","Industrial Wald"],PM=i=>encodeURI("/SPK - Fuck the Police/spiel/musik/tekkno"+(i+1)+".mp3"),Lp=5;function Dp(i){let{scene:e,camera:t,me:n,djFrames:s,net:r,toast:o,canvasTex:a,$:l}=i,c=i.CL,u=i.FIG,h=new C(0,0,8.6),d={waves:0,rad:{s:0,p:!0,v:.7,o:0,at:0},jumped:new Set,anims:[],aliens:[],built:!1},f=new Ze;f.visible=!1,e.add(f);{let D=[[0,-.5],[1.8,-.38],[3,-.04],[3.15,.04],[2.8,.25],[1.6,.46],[0,.5]].map(M=>new ce(M[0],M[1])),Y=new ee(new Eo(D,48),new Fe({color:13687012,roughness:.3,metalness:.55,emissive:3819104,emissiveIntensity:.7}));f.add(Y);let z=new ee(new Nt(1.25,32,16,0,Math.PI*2,0,Math.PI/2),new Fe({color:8388560,roughness:.05,transparent:!0,opacity:.55,emissive:2792048,emissiveIntensity:.9}));z.position.y=.42,f.add(z),f.rim=[];for(let M=0;M<16;M++){let U=M/16*Math.PI*2,$=new ee(new Nt(.12,10,8),new Le({color:16777215,toneMapped:!1}));$.position.set(Math.cos(U)*2.95,.04,Math.sin(U)*2.95),f.add($),f.rim.push($)}let w=new ee(new Zn(1,32),new Le({color:11992986,toneMapped:!1}));w.rotation.x=Math.PI/2,w.position.y=-.51,f.add(w)}let g=a(64,256,D=>{let Y=D.createLinearGradient(0,0,0,256);Y.addColorStop(0,"rgba(255,255,255,0.95)"),Y.addColorStop(1,"rgba(255,255,255,0.3)"),D.fillStyle=Y,D.fillRect(0,0,64,256);for(let z=0;z<40;z++)D.fillStyle="rgba(255,255,255,0.25)",D.fillRect(Math.random()*64,Math.random()*256,2,30)});g.wrapS=g.wrapT=Kn;let x=new Le({map:g,color:11992986,transparent:!0,opacity:0,blending:Yn,depthWrite:!1,side:Dt,toneMapped:!1,fog:!1}),m=new ee(new ct(1,2.4,1,32,1,!0),x);m.visible=!1,e.add(m);let p=new Tn(10223482,0,14,1.6);e.add(p);let y=new Ze;y.position.copy(h),y.visible=!1,e.add(y);let v=a(256,64,()=>{});{let D=new Ze;D.scale.setScalar(1.35),D.position.y=0,y.add(D),y.R=D;let Y=new Fe({color:1447452,roughness:.5,metalness:.4}),z=new Fe({color:13685980,roughness:.2,metalness:.95}),w=new ee(new Ke(1.3,.72,.38),Y);w.position.y=.42,D.add(w);let M=new ee(new yt(1.26,.68),new Fe({color:2368556,roughness:.7}));M.position.set(0,.42,.191),D.add(M),y.cones=[];for(let ye of[-.38,.38]){let he=new ee(new oi(.22,.025,8,32),z);he.position.set(ye,.4,.2),D.add(he);let Me=new ee(new Zn(.2,32),new Fe({color:657932,roughness:.9}));Me.position.set(ye,.4,.195),D.add(Me);let We=new ee(new Zn(.06,16),new Fe({color:3158074,metalness:.6}));We.position.set(ye,.4,.2),D.add(We),y.cones.push(Me,We)}let U=new ee(new yt(.42,.11),new Le({map:v,toneMapped:!1}));U.position.set(0,.68,.195),D.add(U);for(let ye=0;ye<5;ye++){let he=new ee(new Ke(.06,.03,.05),z);he.position.set(-.12+ye*.06,.8,.12),D.add(he)}let $=new ee(new oi(.42,.03,8,24,Math.PI),z);$.position.set(0,.78,0),D.add($);let te=new ee(new ct(.008,.008,.9,6),z);te.position.set(.55,1.15,-.1),te.rotation.z=-.35,D.add(te);for(let ye of[-.55,.55]){let he=new ee(new Ke(.1,.06,.3),Y);he.position.set(ye,.03,0),D.add(he)}let Q=new ee(new yt(1.26,.03),new Le({color:16723888,toneMapped:!1}));Q.position.set(0,.07,.195),D.add(Q),y.glow=Q}y.lookAt(0,0,0);let _=new ee(new Ke(2,1.4,1),new Le({transparent:!0,opacity:0,depthWrite:!1}));_.position.y=.6,y.add(_),_.userData.aim={radio:!0};let P=new Ze;P.position.copy(h).add(new C(1.7,0,-.6)),P.visible=!1,e.add(P);{let D=new ee(new Ke(.35,.22,.3),new Fe({color:1118486,metalness:.5,roughness:.4}));D.position.y=.11,P.add(D);let Y=new ee(new Zn(.06,16),new Le({color:3800968,toneMapped:!1}));Y.position.set(0,.16,.151),P.add(Y),P.lens=Y,P.beams=[];let z=[16723888,3800968,2154751,16724016,11566079,16769583];for(let w=0;w<9;w++){let M=new Ze;M.position.y=.18;let U=new ee(new ct(.012,.012,22,4,1,!0),new Le({color:z[w%z.length],transparent:!0,opacity:.8,blending:Yn,depthWrite:!1,toneMapped:!1}));U.position.y=11,M.add(U),P.add(M),P.beams.push(M)}P.light=new Tn(3800968,0,12,1.5),P.light.position.y=1.5,P.add(P.light)}function b(D){let Y=Pp(u,D);Y.m.rotation.y=Math.PI;let z=new Ze;z.add(Y.m),e.add(z);let w=new wn(Y.m),M={};for(let Q of["dance","idle","use","walk"])c[Q]&&(M[Q]=w.clipAction(c[Q]),M[Q].play(),M[Q].setEffectiveWeight(Q==="idle"?1:0));M.dance&&(M.dance.time=Math.random()*M.dance.getClip().duration);let U=Math.PI+D/10*Math.PI*2+D%2*.3,$=2.4+(D>=4?1:0)+(D>=8?.9:0),te=h.clone().add(new C(Math.sin(U)*$,0,Math.cos(U)*$));return{root:z,mixer:w,acts:M,cur:"idle",spot:te,i:D,w:{idle:1}}}function R(D,Y){!D.acts[Y]||D.cur===Y||(D.cur=Y)}function I(D,Y){for(let z in D.acts){let w=z===D.cur?1:0;D.w[z]=(D.w[z]||0)+(w-(D.w[z]||0))*Math.min(1,Y*6),D.acts[z].setEffectiveWeight(D.w[z])}D.mixer.update(Y)}let S={t:-1,wave:0,list:[]};function E(D,Y){for(;d.aliens.length<D*2;)d.aliens.push(b(d.aliens.length));if(d.waves=Math.max(d.waves,D),Y){for(let z of d.aliens)z.root.position.copy(z.spot),L(z),R(z,"dance");y.visible=P.visible=!0;return}S.t=0,S.wave=D,S.list=d.aliens.slice((D-1)*2,D*2);for(let z of S.list)z.root.visible=!1;me(),xe(!0),o(D===1?"\u{1F47D} Was ist DAS?! Ein UFO landet im Portal!":"\u{1F47D} Noch mehr Aliens kommen zur Party! ("+D*2+" Aliens)")}function L(D){let Y=h.clone().sub(D.root.position);D.root.rotation.y=Math.atan2(-Y.x,-Y.z)}let V=new C(0,34,8.6),N=new C(h.x,8.2,h.z);function W(D,Y){if(S.t<0)return;S.t+=D;let z=S.t,w=U=>U<0?0:U>1?1:U*U*(3-2*U);f.visible=z<15,z<4?f.position.lerpVectors(V,N,w(z/4)):z<12?(f.position.copy(N),f.position.y+=Math.sin(z*1.6)*.2):f.position.lerpVectors(N,V,w((z-12)/3)),f.rotation.y+=D*1.5,f.rim.forEach((U,$)=>U.material.color.setHSL(($/16+z*.5)%1,1,.6));let M=z>4.5&&z<11.5?Math.min(1,(z-4.5)*2,(11.5-z)*2):0;if(m.visible=M>.01,m.visible){let U=f.position.y-.5;m.position.set(f.position.x,U/2,f.position.z),m.scale.set(1,U,1),x.opacity=.4*M,g.offset.y-=D*.6}p.position.set(h.x,2.5,h.z),p.intensity=25*M,S.list.forEach((U,$)=>{let te=$*.4;if(z<5+te){U.root.visible=!1;return}if(U.root.visible=!0,z<8+te){let Q=w((z-5-te)/3);U.root.position.set(h.x+($?.8:-.8),hl.lerp(N.y-1.2,0,Q),h.z),U.root.rotation.y=z*2+$,R(U,"idle")}else if(z<10+te){let Q=w((z-8-te)/2),ye=new C(h.x+($?.8:-.8),0,h.z);U.root.position.lerpVectors(ye,U.spot,Q);let he=U.spot.clone().sub(ye);U.root.rotation.y=Math.atan2(-he.x,-he.z),R(U,"walk")}else S.wave===1&&z<12.5?(U.root.position.copy(U.spot),L(U),R(U,"use")):(U.root.position.copy(U.spot),L(U),R(U,"dance"))}),S.wave===1&&z>10.3&&!y.visible&&(y.visible=P.visible=!0,y.R.scale.setScalar(.01)),y.visible&&y.R.scale.x<1.35&&y.R.scale.setScalar(Math.min(1.35,y.R.scale.x+D*1.6)),S.wave===1&&z>12.5&&!d.started&&Pe()&&(d.started=!0,d.rad={s:Math.floor(Math.random()*8),p:!0,v:.7,o:0,at:re()},fe(),ne()),z>15&&(S.t=-1,f.visible=!1,m.visible=!1,p.intensity=0,xe(!1))}let Z=null,G=null,ae=null,X=null;function me(){let D=i.audio();if(!(!D||Z)){Z=new Audio,Z.crossOrigin="anonymous",Z.loop=!1,Z.preload="auto",Z.addEventListener("ended",()=>{Pe()&&(d.rad.s=(d.rad.s+1)%8,d.rad.o=0,d.rad.at=re(),fe(),ne())});try{let Y=D.AC.createMediaElementSource(Z);G=D.AC.createPanner(),G.panningModel="HRTF",G.distanceModel="inverse",G.refDistance=5,G.rolloffFactor=1.1,G.maxDistance=60,X=D.AC.createGain(),X.gain.value=.7,Y.connect(X),X.connect(G),G.connect(D.master);let z=y.position;G.positionX?(G.positionX.value=z.x,G.positionY.value=1,G.positionZ.value=z.z):G.setPosition(z.x,1,z.z)}catch(Y){console.warn("Radio-Ton",Y)}}}function xe(D){let Y=i.audio();if(Y){if(!ae){ae=Y.AC.createGain(),ae.gain.value=0,ae.connect(Y.master);let z=Y.AC.createOscillator();z.type="sawtooth",z.frequency.value=62;let w=Y.AC.createOscillator();w.frequency.value=5;let M=Y.AC.createGain();M.gain.value=9,w.connect(M),M.connect(z.frequency);let U=Y.AC.createBiquadFilter();U.type="lowpass",U.frequency.value=700,z.connect(U),U.connect(ae),z.start(),w.start()}ae.gain.setTargetAtTime(D?.12:0,Y.AC.currentTime,.4)}}let re=()=>Date.now()/1e3,Pe=()=>r.role==="host"||r.role==="none"||!r.role;function Xe(){return d.rad.o+(d.rad.p?Math.max(0,re()-d.rad.at):0)}function ne(){if(me(),!Z)return;let D=PM(d.rad.s);Z.src.endsWith(D.split("/").pop())||(Z.src=D),X?X.gain.value=d.rad.v:Z.volume=d.rad.v;let Y=Xe(),z=()=>{try{Math.abs(Z.currentTime-Y)>1.5&&isFinite(Z.duration)&&Y<Z.duration&&(Z.currentTime=Y)}catch{}};if(Z.readyState>=1?z():Z.addEventListener("loadedmetadata",z,{once:!0}),d.rad.p){let w=Z.play();w&&w.catch&&w.catch(()=>{})}else Z.pause();ge()}function fe(){if(r.role!=="host")return;let D={t:"rad",s:Object.assign({},d.rad,{o:Xe()}),n:d.waves};for(let Y of r.conns.values())try{Y.conn.send(D)}catch{}}function q(D){let Y=d.rad,z=Xe();D==="next"?(Y.s=(Y.s+1)%8,Y.o=0,Y.p=!0):D==="prev"?(Y.s=(Y.s+7)%8,Y.o=0,Y.p=!0):D==="toggle"?(Y.o=z,Y.p=!Y.p):D==="up"?(Y.v=Math.min(1,Math.round((Y.v+.1)*10)/10),Y.o=z):D==="down"&&(Y.v=Math.max(0,Math.round((Y.v-.1)*10)/10),Y.o=z),D!=="up"&&D!=="down"&&D!=="toggle"&&(Y.o=0),Y.at=re(),fe(),ne(),Te()}function se(D){if(r.role==="client"&&r.conn)try{r.conn.send({t:"radc",c:D})}catch{}else q(D)}function ge(){let D=v.image.getContext("2d");D.fillStyle="#05140a",D.fillRect(0,0,256,64),D.fillStyle="#39ff88",D.font="700 22px Consolas, monospace",D.fillText((d.rad.p?"\u25B6 ":"\u275A\u275A ")+Uu[d.rad.s],8,28),D.font="16px Consolas, monospace",D.fillText("VOL "+"\u2588".repeat(Math.round(d.rad.v*10))+"\u2591".repeat(10-Math.round(d.rad.v*10)),8,52),v.needsUpdate=!0}document.body.insertAdjacentHTML("beforeend",`<div id="radBox" class="hidden" style="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;background:rgba(14,12,22,.96);border:1px solid rgba(255,255,255,.18);border-radius:18px;padding:18px 20px;width:min(420px,92vw);text-align:center;color:#fff;font-family:'Segoe UI',sans-serif">
   <div style="font:400 32px Impact,'Arial Black',sans-serif;color:#39ff88;letter-spacing:.05em">\u{1F47D} ALIEN-RADIO</div><div id="radSong" style="margin:8px 0 14px;font-size:16px;color:#d8d0e6"></div>
   <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">${[["prev","\u23EE"],["toggle","\u23EF"],["next","\u23ED"],["down","\u{1F509}"],["up","\u{1F50A}"]].map(([D,Y])=>`<button data-rc="${D}" style="width:62px;height:54px;border-radius:12px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;font-size:24px;cursor:pointer">${Y}</button>`).join("")}</div>
   <div id="radVol" style="margin-top:12px;font:14px Consolas,monospace;color:#39ff88"></div><p style="font-size:12px;color:#8e869f;margin-top:10px">Alle im Raum h\xF6ren das Radio \xB7 je n\xE4her, desto lauter</p>
   <button id="radClose" style="margin-top:8px;padding:10px 26px;border-radius:12px;border:0;background:linear-gradient(135deg,#ff2fb0,#b81cff);color:#fff;font:800 15px 'Segoe UI';cursor:pointer">Fertig</button></div>`);for(let D of document.querySelectorAll("[data-rc]"))D.onclick=Y=>{Y.stopPropagation(),se(D.dataset.rc)};function Te(){l("radSong").textContent=(d.rad.p?"\u25B6 ":"\u275A\u275A ")+Uu[d.rad.s],l("radVol").textContent="Lautst\xE4rke "+Math.round(d.rad.v*100)+"%"}function be(){Te(),l("radBox").classList.remove("hidden"),i.unlock()}l("radClose").onclick=()=>{l("radBox").classList.add("hidden"),i.relock()};function qe(){for(let D of s){let Y=D.g.position;if(Math.hypot(n.pos.x-Y.x,n.pos.z-Y.z)<3.6&&!d.jumped.has(D.i)){d.jumped.add(D.i),D.edge.material.color.setHex(3800968),setTimeout(()=>D.edge.material.color.setHex(16723888),900);let w=i.audio();if(w){let M=w.AC.createOscillator(),U=w.AC.createGain();M.type="triangle",M.frequency.value=440*Math.pow(2,d.jumped.size/8),U.gain.setValueAtTime(.12,w.AC.currentTime),U.gain.exponentialRampToValueAtTime(1e-4,w.AC.currentTime+.4),M.connect(U),U.connect(w.master),M.start(),M.stop(w.AC.currentTime+.45)}s.length&&d.jumped.size>=s.length&&(d.jumped.clear(),F())}}}function F(){if(d.waves>=Lp){o("\u{1F47D} Die Tanzfl\xE4che ist voll \u2013 mehr Aliens passen nicht ins Portal!");return}if(r.role==="client"&&r.conn){try{r.conn.send({t:"ufo"})}catch{}return}B()}function B(){if(d.waves>=Lp||S.t>=0)return;let D=d.waves+1;if(d.waves=D,r.role==="host")for(let Y of r.conns.values())try{Y.conn.send({t:"ufo",n:D})}catch{}E(D,!1)}let T=new C,pe=new C;function K(D,Y){W(D,Y);for(let z of d.aliens)I(z,z.cur==="dance"?D*1.05:D);if(d.started||y.visible){let z=i.audio(),w=i.bass?i.bass():.5+.5*Math.sin(Y*8),M=d.rad.p;y.cones.forEach((U,$)=>U.scale.setScalar(1+(M&&Math.sin(Y*15.7)>.6?.08:0))),y.glow.material.color.setHSL(Y*.15%1,1,.55),P.beams.forEach((U,$)=>{U.visible=M&&y.visible,U.rotation.z=Math.sin(Y*(.7+$*.11)+$)*.9,U.rotation.x=Math.cos(Y*(.5+$*.07)+$*2)*.6}),P.light.intensity=M&&y.visible?8+Math.sin(Y*9)*4:0,P.light.color.setHSL(Y*.2%1,1,.5),P.lens.material.color.setHSL(Y*.3%1,1,.55);for(let U of d.aliens)U.cur==="dance"&&(U.root.position.y=0);if(z&&z.AC&&z.AC.listener){let U=z.AC.listener;t.getWorldDirection(T),pe.set(0,1,0),U.positionX?(U.positionX.value=t.position.x,U.positionY.value=t.position.y,U.positionZ.value=t.position.z,U.forwardX.value=T.x,U.forwardY.value=T.y,U.forwardZ.value=T.z,U.upX.value=0,U.upY.value=1,U.upZ.value=0):(U.setPosition(t.position.x,t.position.y,t.position.z),U.setOrientation(T.x,T.y,T.z,0,1,0))}}r.role==="host"&&d.started&&(d.syncT=(d.syncT||0)+D)>6&&(d.syncT=0,d.rad.o=Xe(),d.rad.at=re(),fe())}function ue(D){if(!y.visible)return;let Y=[{x:y.position.x,z:y.position.z,r:1},{x:P.position.x,z:P.position.z,r:.4},...d.aliens.filter(z=>z.root.visible).map(z=>({x:z.root.position.x,z:z.root.position.z,r:.35}))];for(let z of Y){let w=D.x-z.x,M=D.z-z.z,U=Math.hypot(w,M),$=z.r+.35;U<$&&U>1e-4&&(D.x=z.x+w/U*$,D.z=z.z+M/U*$)}}return{tick:K,jump:qe,collide:ue,openRadio:be,targets:()=>y.visible?[_]:[],prompt:D=>`<b style="color:#39ff88">\u{1F47D} Alien-Radio</b> \xB7 ${Uu[d.rad.s]}<br><small>${D?"Tippe auf <kbd>E</kbd>":"<kbd>E</kbd>"} = bedienen (Song, Lautst\xE4rke)</small>`,state:()=>({n:d.waves,rad:Object.assign({},d.rad,{o:Xe(),at:re()})}),setState(D){D.n>0&&(E(D.n,!0),d.started=!0,d.rad=Object.assign({},D.rad,{at:re()}),ne())},remoteWave(D){D>d.waves&&E(D,!1)},setRad(D,Y){Y>d.waves&&S.t<0&&E(Y,!0),d.rad=Object.assign({},D,{at:re()}),d.started=!0,ne(),Te()},hostRequest:()=>B(),control:q}}function Up(i){let e=new Ze,t=.8,n=new qi,s=[[-.42,0],[.4,0],[.4,.86],[.52,.93],[.5,1],[.24,1.06],[.13,1.5],[.24,1.52],[.24,1.75],[-.42,1.75]];n.moveTo(s[0][0],s[0][1]);for(let q of s.slice(1))n.lineTo(q[0],q[1]);n.closePath();let r=new vr(n,{depth:t,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2});r.rotateY(-Math.PI/2),r.translate(t/2,0,0);let o=new Fe({color:1379366,roughness:.35,metalness:.3}),a=new ee(r,o);a.castShadow=!0,a.receiveShadow=!0,e.add(a);let l=i(512,1024,(q,se,ge)=>{q.clearRect(0,0,se,ge),["#ff2fb0","#b81cff","#20e0ff"].forEach((be,qe)=>{q.strokeStyle=be,q.lineWidth=26,q.shadowColor=be,q.shadowBlur=30,q.beginPath(),q.moveTo(-40,980-qe*60),q.bezierCurveTo(160,760-qe*60,300,520-qe*60,560,380-qe*60),q.stroke()}),q.shadowBlur=0,q.save(),q.translate(250,560),q.rotate(-Math.PI/2),q.font='900 150px Impact, "Arial Black"',q.textAlign="center",q.textBaseline="middle",q.lineWidth=10,q.strokeStyle="#000",q.strokeText("ARCADE",0,0),q.fillStyle="#ffd23f",q.fillText("ARCADE",0,0),q.restore();for(let be=0;be<40;be++)q.fillStyle="rgba(255,255,255,"+(.3+Math.random()*.5)+")",q.fillRect(Math.random()*se,Math.random()*ge*.5,4,4)}),c=new Fe({map:l,transparent:!0,emissive:16777215,emissiveMap:l,emissiveIntensity:.6,roughness:.5});for(let q of[-1,1]){let se=new ee(new yt(.88,1.72),c);se.position.set(q*(t/2+.014),.87,-.04),se.rotation.y=q*Math.PI/2,e.add(se)}let u=new Le({color:16723888,toneMapped:!1});for(let q of[-1,1]){let se=new ee(new Ke(.02,.86,.02),u);se.position.set(q*(t/2+.01),.43,.405),e.add(se)}let h=document.createElement("canvas");h.width=320,h.height=240;let d=h.getContext("2d"),f=new $n(h);f.colorSpace=vt,f.magFilter=qt,f.minFilter=tn;let g=new ee(new yt(.7,.47),new Fe({color:328456,roughness:.3})),x=Math.atan2(.11,.44);g.position.set(0,1.28,.185+.02),g.rotation.x=-x,e.add(g);let m=new ee(new yt(.58,.4),new Le({map:f,toneMapped:!1}));m.position.set(0,1.28,.21),m.rotation.x=-x,e.add(m);let p=new ee(new yt(.58,.4),new Fe({color:16777215,transparent:!0,opacity:.06,roughness:.05,metalness:.9,depthWrite:!1}));p.position.set(0,1.28,.214),p.rotation.x=-x,e.add(p);let y=i(512,128,(q,se,ge)=>{let Te=q.createLinearGradient(0,0,se,0);Te.addColorStop(0,"#2a0050"),Te.addColorStop(.5,"#5a0a6a"),Te.addColorStop(1,"#2a0050"),q.fillStyle=Te,q.fillRect(0,0,se,ge),q.font='900 76px Impact, "Arial Black"',q.textAlign="center",q.textBaseline="middle",q.shadowColor="#ff2fb0",q.shadowBlur=24,q.fillStyle="#ff7fd8",q.fillText("SPK ARCADE",se/2,ge/2+4),q.shadowBlur=0,q.fillStyle="#ffd23f";for(let be=0;be<18;be++)q.beginPath(),q.arc(16+be*28.5,8,4,0,7),q.fill(),q.beginPath(),q.arc(16+be*28.5,ge-8,4,0,7),q.fill()}),v=new Le({map:y,toneMapped:!1}),_=new ee(new yt(.76,.2),v);_.position.set(0,1.635,.252+.002),e.add(_);let P=Math.atan2(.06,.26),b=new Ze;b.position.set(0,1.03,.37),b.rotation.x=P,e.add(b);let R=i(256,96,(q,se,ge)=>{q.fillStyle="#1a1030",q.fillRect(0,0,se,ge),q.strokeStyle="#20e0ff",q.lineWidth=3,q.strokeRect(4,4,se-8,ge-8),q.fillStyle="#ff2fb0",q.font="700 14px Arial",q.fillText("1 PLAYER",14,22)}),I=new ee(new yt(.78,.27),new Fe({map:R,roughness:.6}));I.rotation.x=-Math.PI/2,I.position.y=.016,b.add(I);let S=new ee(new ct(.012,.012,.09,8),new Fe({color:2236962,metalness:.8,roughness:.3}));S.position.set(-.22,.05,.02),b.add(S);let E=new ee(new Nt(.03,16,12),new Fe({color:14688288,roughness:.25}));E.position.set(-.22,.1,.02),b.add(E);let V=[16723888,2154751,16765503,3800968].map((q,se)=>{let ge=new ee(new ct(.022,.022,.025,16),new Fe({color:q,emissive:q,emissiveIntensity:.5,roughness:.3}));return ge.position.set(.02+se%2*.07+Math.floor(se/2)*.14,.014,se%2*.05-.02),b.add(ge),ge}),N=new ee(new yt(.34,.3),new Fe({color:2763312,metalness:.7,roughness:.35}));N.position.set(0,.5,.418),e.add(N);for(let q of[-.07,.07]){let se=new ee(new yt(.05,.08),new Le({color:16747050,toneMapped:!1}));se.position.set(q,.55,.42),e.add(se)}let W=new Tn(8023551,2.2,4,1.6);W.position.set(0,1.3,.7),e.add(W);let Z=i(128,128,q=>{let se=q.createRadialGradient(64,64,0,64,64,64);se.addColorStop(0,"rgba(255,47,176,0.6)"),se.addColorStop(1,"rgba(255,47,176,0)"),q.fillStyle=se,q.fillRect(0,0,128,128)}),G=new ee(new yt(2.2,2.2),new Le({map:Z,transparent:!0,depthWrite:!1,blending:Yn}));G.rotation.x=-Math.PI/2,G.position.set(0,.015,.35),e.add(G);let ae=new ee(new Ke(t+.3,1.9,1.1),new Le({transparent:!0,opacity:0,depthWrite:!1}));ae.position.set(0,.95,0),e.add(ae);let X=[[10,8],[9,8],[8,8],[7,8]],me=[1,0],xe=[20,10],re=0,Pe=0,Xe=["#ff2fb0","#20e0ff","#ffd23f","#39ff88"];function ne(q){d.fillStyle="#05030c",d.fillRect(0,0,320,240);for(let ge=0;ge<30;ge++)d.fillStyle=ge%3?"#2a2448":"#4a4478",d.fillRect((ge*97+q*20)%320,ge*53%240,2,2);let se=10;d.fillStyle="#ff3a3a",d.fillRect(xe[0]*se+2,xe[1]*se+2,6,6),X.forEach(([ge,Te],be)=>{d.fillStyle=be?"#39ff88":"#9dffb8",d.fillRect(ge*se+1,Te*se+1,8,8)}),d.font='bold 34px "Courier New", monospace',d.textAlign="center",d.fillStyle="#000",d.fillText("SPK ARCADE",162,62),d.fillStyle=Xe[Math.floor(q*2)%4],d.fillText("SPK ARCADE",160,60),d.font='bold 13px "Courier New", monospace',d.fillStyle="#f4f0ff",["SNAKE","PARTY-JAGD","PING-PONG","B\xD6LLER-BATTLE"].forEach((ge,Te)=>d.fillText(ge,160,120+Te*18)),Math.floor(q*2)%2&&(d.font='bold 16px "Courier New", monospace',d.fillStyle="#ffd23f",d.fillText("KLICK ODER E ZUM SPIELEN",160,220)),d.fillStyle="rgba(0,0,0,0.25)";for(let ge=0;ge<240;ge+=3)d.fillRect(0,ge,320,1);f.needsUpdate=!0}function fe(){let q=X[0],se=[[1,0],[-1,0],[0,1],[0,-1]].filter(Te=>!(Te[0]===-me[0]&&Te[1]===-me[1])).filter(Te=>{let be=q[0]+Te[0],qe=q[1]+Te[1];return be>=0&&qe>=0&&be<32&&qe<24&&!X.some(F=>F[0]===be&&F[1]===qe)});if(!se.length){X.length=4,X[0]=[10,8];return}se.sort((Te,be)=>Math.abs(q[0]+Te[0]-xe[0])+Math.abs(q[1]+Te[1]-xe[1])-(Math.abs(q[0]+be[0]-xe[0])+Math.abs(q[1]+be[1]-xe[1]))),me=se[0];let ge=[q[0]+me[0],q[1]+me[1]];X.unshift(ge),ge[0]===xe[0]&&ge[1]===xe[1]?(xe=[2+Math.floor(Math.random()*28),2+Math.floor(Math.random()*20)],X.length>22&&(X.length=6)):X.pop()}return ne(0),{g:e,hit:ae,tick(q,se){!se||q-Pe<.1||(Pe=q,re++,fe(),ne(q),V.forEach((ge,Te)=>{ge.material.emissiveIntensity=.3+.7*(Math.sin(q*4+Te)>.6?1:0)}),u.color.setHSL(q*.08%1,1,.55))}}}var Qi={A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,BACK:8,START:9,L3:10,R3:11,UP:12,DOWN:13,LEFT:14,RIGHT:15},Np={A:"Space",B:"KeyC",X:"KeyE",Y:"KeyF",LB:"KeyQ",RB:"KeyR",LT:"mouse2",RT:"mouse0",BACK:"Tab",R3:"KeyM",UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight"},LM={Space:" ",Tab:"Tab",Escape:"Escape",Enter:"Enter",ShiftLeft:"Shift",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight"},ko=null;function Fp(i){if(ko)return ko.set(i),ko;let e=Object.assign({},Np,i.map||{}),t={},n=[],s=!1,r=!1,o=null,a=0,l="",c=performance.now(),u=document.createElement("style");u.textContent='.padFocus{outline:3px solid #ffd23f!important;outline-offset:3px;box-shadow:0 0 18px rgba(255,210,63,.7)!important}#padBadge{position:fixed;left:50%;bottom:8px;transform:translateX(-50%);z-index:9999;background:rgba(10,8,16,.85);border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:5px 12px;font:600 12px "Segoe UI",sans-serif;color:#d8d0e6;pointer-events:none;transition:opacity .4s;white-space:nowrap}#padBadge b{color:#39ff88}',document.head.appendChild(u);let h=document.createElement("div");h.id="padBadge",h.style.opacity="0",document.body.appendChild(h);let d=0;function f(b,R=4e3){h.innerHTML=b,h.style.opacity="1",clearTimeout(d),d=setTimeout(()=>h.style.opacity="0",R)}addEventListener("gamepadconnected",b=>f("\u{1F3AE} <b>Controller verbunden</b> \u2013 A = ausw\xE4hlen \xB7 B = zur\xFCck \xB7 Start = Pause/Weiter")),addEventListener("gamepaddisconnected",()=>{x(),f("\u{1F3AE} Controller getrennt")});let g=(b,R)=>{if(b){if(b.startsWith("mouse")){let I=+b.slice(5),S=i.canvas||document.body;S.dispatchEvent(new MouseEvent(R?"mousedown":"mouseup",{button:I,buttons:R?I===0?1:2:0,bubbles:!0,cancelable:!0})),!R&&I===0&&S.dispatchEvent(new MouseEvent("click",{button:0,bubbles:!0,cancelable:!0}));return}if(b==="wheel"){R&&(i.canvas||document).dispatchEvent(new WheelEvent("wheel",{deltaY:100,bubbles:!0}));return}t[b]!==R&&(t[b]=R,document.dispatchEvent(new KeyboardEvent(R?"keydown":"keyup",{code:b,key:LM[b]||(b.startsWith("Key")?b.slice(3).toLowerCase():b.startsWith("Digit")?b.slice(5):b),bubbles:!0,cancelable:!0})))}};function x(){for(let b in t)t[b]&&g(b,!1)}function m(){return[...document.querySelectorAll("button, select, input:not([type=hidden]), a[href], [data-pad]")].filter(R=>{if(R.disabled||R.closest(".hidden"))return!1;let I=R.getBoundingClientRect();if(I.width<4||I.height<4)return!1;let S=getComputedStyle(R);if(S.visibility==="hidden"||S.display==="none"||+S.opacity==0||S.pointerEvents==="none")return!1;if(I.bottom<0||I.top>innerHeight||I.right<0||I.left>innerWidth)return!0;let E=Math.min(innerWidth-1,Math.max(0,I.left+I.width/2)),L=Math.min(innerHeight-1,Math.max(0,I.top+I.height/2)),V=document.elementFromPoint(E,L);return V&&(V===R||R.contains(V)||V.contains(R)||V.closest("label")===R.closest("label"))})}function p(b){if(o&&o.classList.remove("padFocus"),o=b,b){b.classList.add("padFocus");try{b.scrollIntoView({block:"nearest",inline:"nearest"})}catch{}if(b.tagName!=="INPUT"||b.type==="range"||b.type==="checkbox")try{b.focus({preventScroll:!0})}catch{}}}function y(b){let R=m();if(!R.length)return;if(!o||!R.includes(o)){p(i.first&&R.find(N=>i.first.includes(N.id))||R.find(N=>/\b(btn|primary)\b/.test(N.className)&&!/ghost/.test(N.className))||R.find(N=>N.tagName==="BUTTON")||R[0]);return}let I=o.getBoundingClientRect(),S=I.left+I.width/2,E=I.top+I.height/2,L=null,V=1e9;for(let N of R){if(N===o)continue;let W=N.getBoundingClientRect(),Z=W.left+W.width/2,G=W.top+W.height/2,ae=Z-S,X=G-E,me=b==="up"?-X:b==="down"?X:b==="left"?-ae:ae,xe=Math.abs(b==="up"||b==="down"?ae:X);if(me<4)continue;let re=me+xe*2.2;re<V&&(V=re,L=N)}L&&p(L)}function v(b,R){if(b.tagName==="SELECT"){let I=b.options.length;if(!I)return!1;let S=b.selectedIndex;for(let E=0;E<I&&(S=(S+R+I)%I,!!b.options[S].disabled);E++);return b.selectedIndex=S,b.dispatchEvent(new Event("input",{bubbles:!0})),b.dispatchEvent(new Event("change",{bubbles:!0})),!0}if(b.tagName==="INPUT"&&b.type==="range"){let I=+b.step||(+b.max-+b.min)/20||1;return b.value=String(Math.min(+b.max,Math.max(+b.min,+b.value+R*I))),b.dispatchEvent(new Event("input",{bubbles:!0})),b.dispatchEvent(new Event("change",{bubbles:!0})),!0}return!1}function _(b){if(b){if(b.tagName==="SELECT"){v(b,1);return}if(b.tagName==="INPUT"&&(b.type==="checkbox"||b.type==="radio")){b.click();return}if(b.tagName==="INPUT"){try{b.focus(),b.select()}catch{}f("\u2328\uFE0F Mit der Tastatur tippen, dann B dr\xFCcken",3e3);return}b.click()}}function P(){requestAnimationFrame(P);let b=performance.now(),R=Math.min(.05,(b-c)/1e3);c=b;let I=navigator.getGamepads?navigator.getGamepads():[],S=null;for(let re of I)if(re&&re.connected&&re.buttons.length>=16){S=re;break}if(!S){s&&(x(),s=!1);return}let E=S.buttons.map(re=>re.value>.5),L=S.axes,V=re=>Math.abs(re)<.18?0:(re-Math.sign(re)*.18)/.82,N=V(L[0]||0),W=V(L[1]||0),Z=V(L[2]||0),G=V(L[3]||0);if((E.some(re=>re)||Math.abs(N)+Math.abs(W)+Math.abs(Z)+Math.abs(G)>.3)&&!s&&(s=!0,i.onActive&&i.onActive()),!s){n=E;return}let X=re=>E[Qi[re]]&&!n[Qi[re]],me=re=>!E[Qi[re]]&&n[Qi[re]],xe=i.isPlaying();if(xe&&!i._helped&&(i._helped=!0,f(i.help||"\u{1F3AE} Linker Stick = laufen \xB7 Rechter Stick = umschauen \xB7 A = springen \xB7 B = ducken \xB7 X = benutzen \xB7 Start = Pause",7e3)),xe){o&&p(null);for(let re of["A","B","X","Y","LB","RB","LT","RT","BACK","R3","UP","DOWN","LEFT","RIGHT"]){let Pe=e[re];Pe&&(X(re)&&g(Pe,!0),me(re)&&g(Pe,!1))}if(i.stick==="steer"?(g(e.STEER_L||"KeyA",N<-.3),g(e.STEER_R||"KeyD",N>.3)):(g("KeyW",W<-.35),g("KeyS",W>.35),g("KeyA",N<-.35),g("KeyD",N>.35)),X("L3")&&(r=!r),Math.hypot(N,W)<.25&&(r=!1),i.stick!=="steer"&&g("ShiftLeft",r||Math.hypot(N,W)>.97),!i.noLook&&(Z||G)){let re=(i.lookSpeed||900)*R,Pe=Math.sign(Z)*Math.pow(Math.abs(Z),1.6)*re,Xe=Math.sign(G)*Math.pow(Math.abs(G),1.6)*re*.75;document.dispatchEvent(new MouseEvent("mousemove",{movementX:Pe,movementY:Xe,bubbles:!0}))}X("START")&&(x(),r=!1,i.pause())}else{x(),r=!1;let re="";if(E[Qi.UP]||W<-.6?re="up":E[Qi.DOWN]||W>.6?re="down":E[Qi.LEFT]||N<-.6?re="left":(E[Qi.RIGHT]||N>.6)&&(re="right"),re&&(re!==l||b>a)&&(a=b+(re!==l?450:160),l=re,(re==="left"||re==="right")&&o&&v(o,re==="left"?-1:1)||y(re)),re||(l=""),o&&!document.body.contains(o)&&p(null),!o&&(re||X("A"))?y("down"):X("A")&&_(o),X("B")&&(document.activeElement&&document.activeElement.tagName==="INPUT"?document.activeElement.blur():i.back&&i.back()),(X("START")||X("X")&&i.startOnX)&&(i.canPlay&&i.canPlay()?(document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),p(null),i.padLock()):o&&_(o)),G){let Pe=o;for(;Pe&&Pe!==document.body&&!(Pe.scrollHeight>Pe.clientHeight+4&&/auto|scroll/.test(getComputedStyle(Pe).overflowY));)Pe=Pe.parentElement;Pe&&Pe!==document.body&&(Pe.scrollTop+=G*900*R)}}n=E}return requestAnimationFrame(P),ko={isActive:()=>s,badge:f,set:b=>{x(),i=b,e=Object.assign({},Np,b.map||{}),s&&i.onActive&&i.onActive()}},ko}var oe=i=>document.getElementById(i),on=new URLSearchParams(location.search),rn=(()=>{try{return matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&"ontouchstart"in window||on.has("touch")}catch{return!1}})();rn&&document.body.classList.add("touch");var Wu=3*(Math.PI*2/11.4),Wp=Math.PI*2-Wu,Hr=6,Sl=Math.PI*2/11.4,Hu=17.2,fn=19.5,DM=1.65,Xp=.35,Op=[16723888,2154751,10181887,4054148,16731501,16765503,58836,16739286,8191823,11584767],Vo=["#ff2fb0","#20e0ff","#3ddc84","#ff4d6d","#ffd23f","#9b5cff","#00e5d4","#ff6bd6","#7cff4f","#e0e0e0","#c08040","#5080ff","#ff9090","#90ffd0"],ze={name:"Neue Pussy1",sens:1,vol:.8,gfx:"hoch",invert:!1};try{let i=JSON.parse(localStorage.getItem("operation-hias")||"null");i&&(ze=Object.assign({},ze,i))}catch{}(!ze.name||ze.name==="HiAS"||ze.name==="Georg")&&(ze.name="Neue Pussy1");ze.look=xn(ze.look);function Xu(){try{let i=JSON.parse(localStorage.getItem("operation-hias")||"{}")||{};i.name=ze.name,i.vol=ze.vol,i.look=ze.look,localStorage.setItem("operation-hias",JSON.stringify(i))}catch{}}var Bp="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",qp=()=>{let i="";for(let e=0;e<5;e++)i+=Bp[Math.floor(Math.random()*Bp.length)];return i},Yp=!1;try{Yp=!!sessionStorage.getItem("gbgc-zurueck")}catch{}var Nu=null;function Kp(){if(Nu)return Nu;let i=null;if(Yp)try{i=sessionStorage.getItem("gbgc-raum")}catch{}(!i||!/^[A-Z0-9]{5}$/.test(i))&&(i=qp());try{sessionStorage.setItem("gbgc-raum",i)}catch{}return Nu=i}var ns=oe("c"),ss=new mo({canvas:ns,antialias:!0,powerPreference:"high-performance"});ss.setPixelRatio(Math.min(window.devicePixelRatio||1,rn?1.25:1.5));ss.toneMapping=br;ss.toneMappingExposure=1.05;ss.outputColorSpace=vt;var dt=new go;dt.background=new Ce(329227);dt.fog=new ka(329227,.018);var An=new Lt(75,1,.05,200);An.rotation.order="YXZ";dt.add(An);var vl=ze.gfx==="niedrig"||on.has("low")||rn,hi=null,zu=null;vl||(hi=new wr(ss),hi.addPass(new Ar(dt,An)),zu=new Rr(new ce(512,512),.42,.4,.82),hi.addPass(zu),hi.addPass(new Cr));function $p(){let i=window.innerWidth,e=window.innerHeight;ss.setSize(i,e,!1),An.aspect=i/e,An.updateProjectionMatrix(),hi&&hi.setSize(i,e)}window.addEventListener("resize",$p);$p();function mn(i,e,t,n){let s=document.createElement("canvas");s.width=i,s.height=e;let r=s.getContext("2d");t(r,i,e);let o=new $n(s);return o.colorSpace=vt,o.anisotropy=8,n&&(o.wrapS=o.wrapT=Kn,o.repeat.set(n[0],n[1])),o}function zr(i,e={}){let t=e.w||1024,n=e.h||256,s=mn(t,n,o=>{o.clearRect(0,0,t,n),e.bg&&(o.fillStyle=e.bg,UM(o,6,6,t-12,n-12,26),o.fill(),o.strokeStyle=e.border||"rgba(255,255,255,0.25)",o.lineWidth=6,o.stroke()),o.textAlign="center",o.textBaseline="middle";let a=i.length;i.forEach((l,c)=>{let u=l.size||90;o.font=`${l.weight||400} ${u}px ${l.font||'Impact, "Arial Black", sans-serif'}`;let h=u;for(;o.measureText(l.t).width>t-60&&h>20;)h-=4,o.font=`${l.weight||400} ${h}px ${l.font||'Impact, "Arial Black", sans-serif'}`;o.shadowColor=l.glow||"transparent",o.shadowBlur=l.glow?8:0,o.fillStyle=l.c||"#fff",o.fillText(l.t,t/2,n*(c+.5)/a+(l.dy||0))})});return new ee(new yt(e.pw||4,(e.pw||4)*n/t),new Le({map:s,transparent:!0,depthWrite:!1,toneMapped:!1,side:Dt,color:14211288}))}function UM(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function NM(){let i=mn(1024,1024,(h,d,f)=>{h.fillStyle="#101219",h.fillRect(0,0,d,f);for(let g=0;g<8;g++)for(let x=0;x<8;x++){let m=16+Math.floor(Math.random()*8);h.fillStyle=`rgb(${m},${m+2},${m+8})`,h.fillRect(x*128+3,g*128+3,122,122);for(let p=0;p<40;p++)h.fillStyle=`rgba(255,255,255,${Math.random()*.025})`,h.fillRect(x*128+Math.random()*120,g*128+Math.random()*120,2+Math.random()*10,1)}h.strokeStyle="rgba(80,160,255,0.10)",h.lineWidth=2;for(let g=0;g<=8;g++)h.beginPath(),h.moveTo(g*128,0),h.lineTo(g*128,f),h.stroke(),h.beginPath(),h.moveTo(0,g*128),h.lineTo(d,g*128),h.stroke()},[6,6]),e=new ee(new Zn(fn+.5,96),new Fe({map:i,roughness:.32,metalness:.55,color:16777215}));e.rotation.x=-Math.PI/2,dt.add(e);let t=(h,d)=>new Le({color:h,transparent:!0,opacity:d,toneMapped:!1,side:Dt});for(let[h,d,f,g]of[[3.2,.06,16723888,.9],[3.45,.02,16723888,.6],[9.6,.04,2154751,.45],[15.4,.05,2154751,.5]]){let x=new ee(new Ao(h,h+d,128),t(f,g));x.rotation.x=-Math.PI/2,x.position.y=.012,dt.add(x)}let n=mn(1024,1024,(h,d,f)=>{h.translate(d/2,f/2),h.strokeStyle="rgba(255,47,176,0.85)",h.lineWidth=10,h.beginPath(),h.arc(0,0,440,0,Math.PI*2),h.stroke(),h.lineWidth=4,h.beginPath(),h.arc(0,0,400,0,Math.PI*2),h.stroke();for(let g=0;g<10;g++)h.save(),h.rotate(g*Math.PI/5),h.fillStyle="rgba(255,47,176,0.8)",h.fillRect(-6,-440,12,60),h.restore();h.font='400 210px Impact, "Arial Black", sans-serif',h.textAlign="center",h.textBaseline="middle",h.fillStyle="rgba(255,90,200,0.95)",h.fillText("SPK",0,-10),h.font='400 64px Impact, "Arial Black", sans-serif',h.fillStyle="rgba(255,255,255,0.75)",h.fillText("PORTAL",0,150)}),s=new ee(new Zn(3.1,64),new Le({map:n,transparent:!0,toneMapped:!1,opacity:.85,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.015,dt.add(s);{let h=new Image;h.onload=()=>{let d=n.image,f=d.getContext("2d"),g=d.width,x=d.height;f.setTransform(1,0,0,1,0,0),f.clearRect(0,0,g,x);let m=f.createRadialGradient(g/2,x/2,g*.2,g/2,x/2,g/2);m.addColorStop(0,"rgba(255,226,47,0.28)"),m.addColorStop(.75,"rgba(255,47,176,0.18)"),m.addColorStop(1,"rgba(255,47,176,0)"),f.fillStyle=m,f.beginPath(),f.arc(g/2,x/2,g/2,0,Math.PI*2),f.fill(),f.drawImage(h,g*.02,x*.02,g*.96,x*.96),n.needsUpdate=!0,s.material.opacity=1},h.src="/System/assets/logo4.png"}let r=mn(1024,512,(h,d,f)=>{h.fillStyle="#14161e",h.fillRect(0,0,d,f);for(let g=0;g<8;g++)for(let x=0;x<4;x++){let m=22+Math.floor(Math.random()*10);h.fillStyle=`rgb(${m},${m+2},${m+10})`,h.fillRect(g*128+4,x*128+4,120,120),h.fillStyle="rgba(0,0,0,0.35)",h.fillRect(g*128+4,x*128+118,120,6)}h.fillStyle="rgba(32,224,255,0.55)",h.fillRect(0,250,d,5)},[10,2]),o=new ee(new ct(fn,fn,10,96,1,!0),new Fe({map:r,side:Xt,roughness:.6,metalness:.4}));o.position.y=5,dt.add(o);for(let[h,d]of[[.25,2154751],[9.6,16723888]]){let f=new ee(new ct(fn-.05,fn-.05,.08,96,1,!0),new Le({color:d,side:Xt,toneMapped:!1}));f.position.y=h,dt.add(f)}let a=mn(2048,1024,(h,d,f)=>{let g=h.createLinearGradient(0,0,0,f);g.addColorStop(0,"#0a0c1c"),g.addColorStop(1,"#03040a"),h.fillStyle=g,h.fillRect(0,0,d,f);for(let x=0;x<1600;x++){let m=Math.random();h.fillStyle=`rgba(255,255,255,${m*m})`;let p=Math.random()<.03?3:1.4;h.fillRect(Math.random()*d,Math.random()*f*.9,p,p)}for(let x=0;x<4;x++){let m=Math.random()*d,p=Math.random()*f*.6,y=h.createRadialGradient(m,p,0,m,p,260);y.addColorStop(0,x%2?"rgba(120,60,255,0.18)":"rgba(255,120,40,0.13)"),y.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=y,h.fillRect(0,0,d,f)}}),l=new ee(new Nt(fn,64,24,0,Math.PI*2,0,Math.PI/2),new Le({map:a,side:Xt,fog:!1}));l.position.y=10,l.scale.y=.55,dt.add(l);let c=new Fe({color:2237743,roughness:.35,metalness:.8});for(let h=-1;h<Hr;h++){let d=(h+.5-(Hr-1)/2)*Sl,f=Math.sin(d)*(fn-.6),g=-Math.cos(d)*(fn-.6),x=new ee(new Ke(1,10,.9),c);x.position.set(f,5,g),x.rotation.y=-d,dt.add(x);let m=new ee(new Ke(.08,9,.08),new Le({color:h%2?2154751:16723888,toneMapped:!1}));m.position.set(Math.sin(d)*(fn-1.08),5,-Math.cos(d)*(fn-1.08)),dt.add(m)}dt.add(new Co(8425664,3154968,1));let u=new Tn(16769728,60,30,1.6);u.position.set(0,9,0),dt.add(u)}var es=null;function FM(){es=new Ze,es.position.set(0,6.2,0),dt.add(es);let i=mn(2048,256,(t,n,s)=>{t.clearRect(0,0,n,s),t.textAlign="center",t.textBaseline="middle",t.font='400 150px Impact, "Arial Black", sans-serif';for(let[r,o,a]of[[n*.25,"SPK","#ff7fd8"],[n*.75,"PORTAL","#9ff3ff"]])t.shadowColor=a,t.shadowBlur=8,t.fillStyle=a,t.fillText(o,r,s/2)}),e=new ee(new ct(3.6,3.6,.9,96,1,!0),new Le({map:i,transparent:!0,side:Ln,toneMapped:!1,depthWrite:!1,opacity:.85,color:13684944}));es.add(e);for(let t of[-.62,.62]){let n=new ee(new oi(3.6,.025,6,128),new Le({color:16723888,toneMapped:!1}));n.rotation.x=Math.PI/2,n.position.y=t,es.add(n)}}var OM="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",BM=`
uniform float t; uniform vec3 c1; uniform vec3 c2; uniform float on; uniform float hot; varying vec2 vUv;
float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
void main(){
  vec2 p = (vUv - vec2(0.5, 0.42)) * vec2(1.0, 1.35);
  float r = length(p), a = atan(p.y, p.x);
  float sw = a + 3.0 / (r + 0.25) + t * 0.9;
  float f = n(vec2(sw * 1.6, r * 6.0 - t * 1.5)) * 0.65 + n(vec2(sw * 4.0, r * 14.0 - t * 3.0)) * 0.35;
  vec3 col = mix(c2, c1, smoothstep(0.25, 0.85, f));
  col += c1 * 0.9 * smoothstep(0.32, 0.0, r);
  float edge = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x) * smoothstep(0.0, 0.08, vUv.y);
  col *= (0.55 + 0.75 * f) * (1.0 + hot * 0.6);
  vec3 off = vec3(0.10, 0.11, 0.14) * (0.6 + 0.4 * n(vUv * 20.0 + t * 0.2));
  gl_FragColor = vec4(mix(off, col * 1.6, on), mix(0.55, 0.96, on) * edge);
}`,di=[];function Fu(i,e,t){let n=new qi,s=i/2-t,r=e-i/2;return n.moveTo(-s,t),n.lineTo(s,t),n.lineTo(s,r),n.absarc(0,r,s,0,Math.PI,!1),n.lineTo(-s,t),n}function kM(i,e){let t=(i-(Hr-1)/2)*Sl,n=new C(Math.sin(t)*Hu,0,-Math.cos(t)*Hu),s=new Ze;s.position.copy(n),s.lookAt(0,0,0),dt.add(s);let r=new Ce(Op[i%Op.length]),o=!!e,a=3.4,l=4.7,c=Fu(a+.7,l+.35,0),u=Fu(a,l,0);c.holes.push(new bs(u.getPoints(48)));let h=new vr(c,{depth:.5,bevelEnabled:!0,bevelThickness:.06,bevelSize:.05,bevelSegments:2,curveSegments:48});h.translate(0,0,-.25);let d=new ee(h,new Fe({color:5593964,roughness:.35,metalness:.75}));s.add(d);let f=u.getPoints(64).map(V=>new C(V.x,V.y,.27)),g=new ee(new el(new bo(f,!1),128,.045,6,!1),new Le({color:o?r:new Ce(4475477),toneMapped:!1}));s.add(g);let x=new St({vertexShader:OM,fragmentShader:BM,transparent:!0,depthWrite:!1,side:Dt,uniforms:{t:{value:Math.random()*10},c1:{value:r.clone().multiplyScalar(1)},c2:{value:r.clone().multiplyScalar(.18)},on:{value:o?1:0},hot:{value:0}}}),m=new Qa(Fu(a,l,0),48),p=m.attributes.uv,y=m.attributes.position;for(let V=0;V<p.count;V++)p.setXY(V,(y.getX(V)+a/2)/a,y.getY(V)/l);let v=new ee(m,x);s.add(v);let _=new ee(new ct(2.6,2.8,.12,48,1,!1,-Math.PI/2,Math.PI),new Fe({color:1776933,roughness:.4,metalness:.7}));_.position.set(0,.06,.05),s.add(_);let P=new ee(new Ao(2.55,2.62,48,1,Math.PI,Math.PI),new Le({color:o?r:3357252,toneMapped:!1,side:Dt}));P.rotation.x=-Math.PI/2,P.position.set(0,.125,.05),s.add(P);let b="#"+r.getHexString(),R=zr(o?[{t:String(i+1),size:64,c:b,glow:b},{t:(e.name||e.ordner).toUpperCase(),size:92,c:"#ffffff",glow:b}]:[{t:String(i+1),size:64,c:"#667"},{t:"BALD VERF\xDCGBAR",size:80,c:"#8a8f9c"}],{w:1024,h:300,pw:4.4});if(R.position.set(0,l+1.85,.1),s.add(R),o&&(e.genre||e.spieler)){let V=zr([{t:[e.genre,e.spieler].filter(Boolean).join("  \xB7  "),size:54,c:"#d8d2c6",font:'"Segoe UI", Arial, sans-serif',weight:600}],{w:1400,h:110,pw:3.8});V.position.set(0,l+.82,.3),s.add(V)}let I=null;o&&(I=new Tn(r,14,9,1.8),I.position.set(0,2.2,1.6),s.add(I));let S=null;if(o){let N=new At,W=new Float32Array(70*3),Z=new Float32Array(70);for(let G=0;G<70;G++)W[G*3]=(Math.random()-.5)*3,W[G*3+1]=Math.random()*4.5,W[G*3+2]=.2+Math.random()*1.2,Z[G]=.3+Math.random()*.9;N.setAttribute("position",new Ut(W,3)),S=new _r(N,new Ms({color:r,size:.06,transparent:!0,opacity:.9,toneMapped:!1,depthWrite:!1,blending:Yn})),S.userData.sp=Z,s.add(S)}let E=new C(0,0,1).applyQuaternion(s.quaternion),L=new C(1,0,0).applyQuaternion(s.quaternion);di.push({i,game:e,on:o,g:s,mat:x,light:I,parts:S,pos:n,n:E,t:L,col:b})}var ts=null,ui=null,Gt=null;function Fr(i,e,t){let n=new Ze,s=null,r=null;if(ts&&Gt){let a=_l(Gt,t||Pr).m;a.rotation.y=Math.PI,n.add(a),s=new wn(a),r={};for(let l of["idle","walk","run","jump"])ui[l]&&(r[l]=s.clipAction(ui[l]),r[l].play(),r[l].setEffectiveWeight(l==="idle"?1:0))}else if(ts){let a=Uo(ts.scene);if(!Fr.sc){let c=new nn().setFromObject(ts.scene);Fr.sc=1.8/(c.max.y-c.min.y)}a.scale.setScalar(Fr.sc),a.rotation.y=Math.PI;let l=new Ce(e);a.traverse(c=>{if(c.isMesh||c.isSkinnedMesh){c.frustumCulled=!1;let u=c.material&&/Joint/i.test(c.material.name);c.material=new Fe({color:u?1711138:l,roughness:.55,metalness:.15,emissive:u?0:l,emissiveIntensity:u?0:.08})}}),n.add(a),s=new wn(a),r={};for(let c of["idle","walk","run","jump"])ui[c]&&(r[c]=s.clipAction(ui[c]),r[c].play(),r[c].setEffectiveWeight(c==="idle"?1:0))}else{let a=new ee(new Ja(.3,1.1,4,12),new Fe({color:e}));a.position.y=.9,n.add(a)}let o=zr([{t:i,size:80,c:e,font:'"Segoe UI", Arial, sans-serif',weight:700,glow:"rgba(0,0,0,0.9)"}],{w:768,h:128,pw:1.6});return o.position.y=2.15,n.add(o),dt.add(n),{root:n,mixer:s,act:r,tag:o,w:{idle:1,walk:0,run:0,jump:0}}}function kp(i,e,t,n){if(!i.mixer)return;let s={idle:0,walk:0,run:0,jump:0};t?s.jump=1:e>4.2?s.run=1:e>.4?s.walk=1:s.idle=1;for(let r in i.w)i.w[r]+=(s[r]-i.w[r])*Math.min(1,n*8),i.act[r]&&i.act[r].setEffectiveWeight(i.w[r]);i.mixer.update(n)}var lt=null,ti=null;function qu(){if(lt){lt.state==="suspended"&&lt.resume();return}try{lt=new(window.AudioContext||window.webkitAudioContext),ti=lt.createGain(),ti.gain.value=.9*(ze.vol==null?.8:ze.vol),ti.connect(lt.destination);let i=lt.createGain();i.gain.value=.035;let e=lt.createBiquadFilter();e.type="lowpass",e.frequency.value=600,e.connect(i),i.connect(ti);for(let s of[55,82.4,110.2,164.8]){let r=lt.createOscillator();r.type="sawtooth",r.frequency.value=s,r.detune.value=(Math.random()-.5)*12;let o=lt.createGain();o.gain.value=.25,r.connect(o),o.connect(e),r.start()}let t=lt.createOscillator();t.frequency.value=.07;let n=lt.createGain();n.gain.value=250,t.connect(n),n.connect(e.frequency),t.start()}catch{lt=null}}function HM(i){let e=lt.createBuffer(1,lt.sampleRate*i,lt.sampleRate),t=e.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;return e}function Yu(){if(!lt)return;let i=lt.currentTime,e=lt.createBufferSource();e.buffer=HM(2.2);let t=lt.createBiquadFilter();t.type="bandpass",t.Q.value=2,t.frequency.setValueAtTime(200,i),t.frequency.exponentialRampToValueAtTime(4e3,i+1.6);let n=lt.createGain();n.gain.setValueAtTime(1e-4,i),n.gain.exponentialRampToValueAtTime(.9,i+.5),n.gain.exponentialRampToValueAtTime(1e-4,i+2.1),e.connect(t),t.connect(n),n.connect(ti),e.start(i);let s=lt.createOscillator();s.type="sine",s.frequency.setValueAtTime(90,i),s.frequency.exponentialRampToValueAtTime(900,i+1.5);let r=lt.createGain();r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(.35,i+.4),r.gain.exponentialRampToValueAtTime(1e-4,i+1.8),s.connect(r),r.connect(ti),s.start(i),s.stop(i+2)}function Zp(i){if(!lt)return;let e=lt.currentTime,t=lt.createOscillator();t.type="triangle",t.frequency.value=i?880:520;let n=lt.createGain();n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.25),t.connect(n),n.connect(ti),t.start(e),t.stop(e+.3)}var As=null;function zM(i){if(lt){if(!As){As=lt.createGain(),As.gain.value=0,As.connect(ti);let e=lt.createOscillator();e.type="sine",e.frequency.value=72;let t=lt.createOscillator();t.type="sine",t.frequency.value=108.5,e.connect(As),t.connect(As),e.start(),t.start()}As.gain.setTargetAtTime(i*.12,lt.currentTime,.2)}}var De={pos:new C(0,0,0),vel:new C,yaw:0,pitch:0,ground:!0},st={},$t=!1,jt=!1,gt=!1;function jp(i){let e=Math.hypot(i.x,i.z),t=Math.atan2(i.x,-i.z),n=Math.abs(t)<Hr/2*Sl-.02?fn-.45:Hu+.25;if(e>n&&(i.x*=n/e,i.z*=n/e),pn.collide(i),_n.collide(i),ei.pos){let s=i.x-ei.pos.x,r=i.z-ei.pos.z,o=Math.hypot(s,r),a=.7;o<a&&o>1e-4&&(i.x=ei.pos.x+s/o*a,i.z=ei.pos.z+r/o*a)}if(Bt){let s=i.x-Bt.pos.x,r=i.z-Bt.pos.z,o=Math.hypot(s,r),a=1.05;o<a&&o>1e-4&&(i.x=Bt.pos.x+s/o*a,i.z=Bt.pos.z+r/o*a)}if(Bn.pos){let s=i.x-Bn.pos.x,r=i.z-Bn.pos.z,o=Math.hypot(s,r),a=1.35;o<a&&o>1e-4&&(i.x=Bn.pos.x+s/o*a,i.z=Bn.pos.z+r/o*a)}for(let s of di){let r=i.x-s.pos.x,o=i.z-s.pos.z,a=r*s.n.x+o*s.n.z,l=r*s.t.x+o*s.t.z;for(let c of[-1,1]){let u=s.pos.x+s.t.x*c*2.05,h=s.pos.z+s.t.z*c*2.05,d=i.x-u,f=i.z-h,g=Math.hypot(d,f),x=.45+Xp;g<x&&g>1e-4&&(i.x=u+d/g*x,i.z=h+f/g*x)}if(s.side==null&&(s.side=1),Math.abs(l)>=2.4?s.side=a>=.02?1:-1:a>=.55?s.side=1:a<=-.5&&(s.side=-1),Math.abs(l)<2.4&&a<.55&&a>-.5&&!(s.on&&Math.abs(l)<1.55&&!gt&&s.side>0)){let u=(s.side>0?.55:-.5)-a;i.x+=s.n.x*u,i.z+=s.n.z*u}}}function VM(){if(!gt)for(let i of di){if(!i.on)continue;let e=De.pos.x-i.pos.x,t=De.pos.z-i.pos.z,n=e*i.n.x+t*i.n.z,s=e*i.t.x+t*i.t.z;if(i.side>0&&n<.3&&n>-2&&Math.abs(s)<1.5&&De.pos.y<3){sm(i.i);return}}}var Jp="gbgc-raum-v1-",Cs={debug:1,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}};on.get("peerhost")&&(Cs.host=on.get("peerhost"),Cs.port=+(on.get("peerport")||9e3),Cs.path=on.get("peerpath")||"/",Cs.secure=!1,Cs.config={iceServers:[]});var _e={role:"none",code:null,peer:null,conns:new Map,conn:null,myId:0,nextId:1,status:""},kt=new Map,GM=0;function Dr(i,e){_e.status=i,oe("netStatus").textContent=i,oe("netStatus").className=e?"warn":"",rs()}function Tl(){try{_e.conn&&_e.conn.close()}catch{}try{_e.peer&&_e.peer.destroy()}catch{}_e.peer=null,_e.conn=null,_e.conns.clear();for(let i of kt.values())dt.remove(i.av.root);kt.clear(),clearInterval(_e.joinRetry),_e.joinRetry=null}function Ps(i=0){if(Tl(),_e.role="host",_e.code=Kp(),_e.myId=0,_e.nextId=1,_e.names=new Map,Dr("Raum wird ge\xF6ffnet\u2026"),!window.Peer){Dr("Offline \u2013 Freunde k\xF6nnen gerade nicht beitreten.",!0);return}let e=new window.Peer(Jp+_e.code,Cs);_e.peer=e,nm(e),e.on("open",()=>{_e.peer===e&&Dr("Raum ist offen \u2013 Freunde k\xF6nnen beitreten.")}),e.on("error",t=>{if(_e.peer===e){if(t.type==="unavailable-id"&&i<12){Dr("Raum wird ge\xF6ffnet\u2026 ("+(i+1)+")");try{e.destroy()}catch{}setTimeout(()=>{_e.role==="host"&&_e.peer===e&&Ps(i+1)},2500);return}(t.type==="network"||t.type==="server-error"||t.type==="socket-error"||t.type==="socket-closed")&&Dr("Keine Internet-Verbindung \u2013 Freunde k\xF6nnen gerade nicht beitreten.",!0)}}),e.on("disconnected",()=>{setTimeout(()=>{try{_e.peer===e&&e.disconnected&&!e.destroyed&&e.reconnect()}catch{}},3e3)}),e.on("connection",t=>{t.on("data",s=>{if(_e.peer!==e||!s)return;let r=_e.conns.get(t.peer);if(s.t==="hello"){if(r)return;let o=_e.nextId++;r={conn:t,id:o},_e.conns.set(t.peer,r);let a=String(s.name||"Spieler").slice(0,16),l=$u(o,a,null,s.lk);l.pid=t.peer;try{t.send({t:"welcome",id:o,code:_e.code}),t.send({t:"dg",s:pn.state()}),t.send(Object.assign({t:"ufoS"},_n.state()))}catch{}an(a+" ist dem Raum beigetreten"),Zp(!0);return}if(r)if(s.t==="s"){let o=kt.get(r.id);o&&(o.tp.fromArray(s.p),o.ty=s.y,o.sp=s.v||0,o.air=!!s.a,o.tk!==!!s.tk&&(o.tk=!!s.tk,rs()))}else if(s.t==="look"){let o=kt.get(r.id);o&&Ku(o,s.lk)}else if(s.t==="portal"){let o=di[s.i];o&&o.on&&rm(s.i,kt.get(r.id)?.name)}else s.t==="dg1"?pn.hostTake(s.i|0,s.k|0):s.t==="ufo"?_n.hostRequest():s.t==="radc"&&_n.control(String(s.c))});let n=()=>{let s=_e.conns.get(t.peer);if(s){_e.conns.delete(t.peer);let r=kt.get(s.id);r&&(an(r.name+" hat den Raum verlassen"),tm(s.id))}};t.on("close",n),t.on("error",n)})}function yl(i,e={}){if(i=i.toUpperCase().replace(/[^A-Z0-9]/g,""),i.length!==5){oe("joinInfo").textContent="Der Code hat 5 Zeichen.";return}if(i===Kp()&&!e.silent){oe("joinInfo").textContent="Das ist dein eigener Raum-Code.";return}if(!window.Peer){oe("joinInfo").textContent="Keine Verbindung m\xF6glich (Internet?).";return}let t=()=>new Promise(s=>{let r=new window.Peer(Cs);nm(r);let o=!1,a=c=>{if(!o){if(o=!0,clearTimeout(l),!c)try{r.destroy()}catch{}s(c?r:null)}},l=setTimeout(()=>a(!1),15e3);r.on("error",()=>a(!1)),r.on("open",()=>{let c=r.connect(Jp+i,{reliable:!0,serialization:"json"});c.on("open",()=>{c.send({t:"hello",name:ze.name,lk:ze.look})}),c.on("data",u=>{if(u&&u.t==="welcome"&&!o){r._conn=c,r._id=u.id,a(!0);return}r===_e.peer&&WM(u)}),c.on("close",()=>{r===_e.peer&&!gt&&Hp(i)}),c.on("error",()=>{r===_e.peer&&!gt&&Hp(i)})})});return e.silent||(oe("joinInfo").textContent="Verbinde mit "+i+"\u2026"),(async()=>{for(let s=0;s<3;s++){let r=await t();if(r)return r;if(_e.role==="client"&&_e.code===i)return null}return null})().then(s=>{if(!s)return e.silent||(oe("joinInfo").textContent="Kein Raum mit diesem Code gefunden. Ist dein Freund in seinem Portal?"),!1;Tl(),_e.role="client",_e.code=i,_e.peer=s,_e.conn=s._conn,_e.myId=s._id,Dr("Verbunden mit dem Raum von deinem Freund."),oe("joinInfo").textContent="",an("Du bist im Raum "+i),Zp(!0);try{sessionStorage.setItem("gbgc-letzter-raum",i)}catch{}return e.then&&e.then(),!0})}function Hp(i){an("Verbindung zum Raum verloren \u2013 du bist jetzt in deinem eigenen Raum."),Ps(),Qp(i)}function Qp(i){let e=0;clearInterval(_e.joinRetry);let t=()=>{if(_e.role==="client"||gt){clearInterval(_e.joinRetry);return}if(++e>60){clearInterval(_e.joinRetry);return}yl(i,{silent:!0})};_e.joinRetry=setInterval(t,5e3),setTimeout(t,800)}function WM(i){if(i)if(i.t==="w"){let e=new Set;for(let t of i.pl){if(t.id===_e.myId)continue;e.add(t.id);let n=kt.get(t.id);n?t.lk&&Ku(n,t.lk):n=$u(t.id,t.n,t.c,t.lk),n.tp.fromArray(t.p),n.ty=t.y,n.sp=t.v||0,n.air=!!t.a,n.pid=t.pid,n.tk!==!!t.tk&&(n.tk=!!t.tk,rs())}for(let t of[...kt.keys()])e.has(t)||tm(t)}else i.t==="go"?om(i.i,i.code,"join",i.who):i.t==="msg"?an(i.s):i.t==="dg"&&Array.isArray(i.s)?pn.setState(i.s):i.t==="ufo"?_n.remoteWave(i.n|0):i.t==="ufoS"?_n.setState(i):i.t==="rad"&&i.s&&_n.setRad(i.s,i.n|0)}function Ku(i,e){let t=xn(e),n=JSON.stringify(t);if(i.lkStr===n||(i.lkStr=n,i.look=t,!Gt))return;let s=i.av;i.av=Fr(i.name,i.color,t),i.av.root.position.copy(s.root.position),i.av.root.rotation.copy(s.root.rotation),dt.remove(s.root),em(i,t)}function em(i,e){Gt&&e.ch&&!Lr(Gt,e.ch)&&Bo(Gt,e.ch).then(()=>{Lr(Gt,e.ch)&&i.look===e&&(i.lkStr="",Ku(i,e))})}function $u(i,e,t,n){let s=t||Vo[(1+GM++)%Vo.length],r=xn(n),o={id:i,name:e,color:s,av:Fr(e,s,r),look:r,lkStr:JSON.stringify(r),p:new C(0,0,0),tp:new C(0,0,0),y:0,ty:0,sp:0,air:!1,fresh:!0};return kt.set(i,o),em(o,r),rs(),o}function tm(i){let e=kt.get(i);e&&(dt.remove(e.av.root),kt.delete(i),rs())}var Ou=0,Bu=0,ht={stream:null,calls:new Map,talking:!1,audios:new Map,asking:!1};function nm(i){i.on("call",e=>{try{e.answer()}catch{return}e.on("stream",n=>{let s=ht.audios.get(e.peer);s||(s=new Audio,s.autoplay=!0,s.playsInline=!0,ht.audios.set(e.peer,s),document.body.appendChild(s)),s.srcObject=n,s.volume=ze.vol==null?.8:ze.vol,s.muted=ze.vol===0;let r=s.play();r&&r.catch&&r.catch(()=>{})});let t=()=>{let n=ht.audios.get(e.peer);n&&(n.srcObject=null,n.remove(),ht.audios.delete(e.peer))};e.on("close",t),e.on("error",t)})}async function XM(){if(ht.stream)return!0;if(ht.asking)return!1;if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return an("Sprechen geht in diesem Browser leider nicht."),!1;ht.asking=!0;try{ht.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch{return an("Mikrofon nicht erlaubt \u2013 bitte im Browser das Mikrofon erlauben."),ht.asking=!1,!1}ht.asking=!1;for(let i of ht.stream.getAudioTracks())i.enabled=!1;return Zu(),!0}function Zu(){if(!(!ht.stream||!_e.peer||_e.peer.destroyed)){for(let[i,e]of ht.calls)if(e._peer!==_e.peer||![...kt.values()].some(t=>t.pid===i)){try{e.close()}catch{}ht.calls.delete(i)}for(let i of kt.values())if(!(!i.pid||ht.calls.has(i.pid)))try{let e=_e.peer.call(i.pid,ht.stream);if(!e)continue;e._peer=_e.peer,ht.calls.set(i.pid,e);let t=()=>{ht.calls.get(i.pid)===e&&ht.calls.delete(i.pid)};e.on("close",()=>{console.log("[voice] call closed",i.pid),t()}),e.on("error",n=>{console.log("[voice] call error",n&&n.type,n&&n.message),t()})}catch(e){console.log("[voice] call failed",e&&e.message)}}}async function qM(i){if(i&&!ht.stream){if(!await XM()){Ho=!1;return}if(!Ho)return}if(ht.talking=i&&!!ht.stream,ht.stream)for(let e of ht.stream.getAudioTracks())e.enabled=ht.talking;oe("talkInd").textContent=rn?"\u{1F3A4} Mikro AN \u2013 nochmal \u{1F3A4} dr\xFCcken zum Ausschalten":"\u{1F3A4} Mikro AN \u2013 nochmal V dr\xFCcken zum Ausschalten",oe("talkInd").classList.toggle("hidden",!ht.talking),ht.talking&&!kt.size&&an("Mikro ist an \u2013 aber gerade ist niemand im Raum."),rs()}var Ho=!1;setInterval(()=>{_e.role!=="none"&&Zu()},1500);function im(){Ho=!Ho,qM(Ho)}function YM(i){if(Bu+=i,Bu>1&&(Bu=0,Zu()),Ou+=i,Ou<1/15)return;Ou=0;let e=Math.hypot(De.vel.x,De.vel.z);if(_e.role==="client"&&_e.conn&&_e.conn.open)try{_e.conn.send({t:"s",p:[+De.pos.x.toFixed(2),+De.pos.y.toFixed(2),+De.pos.z.toFixed(2)],y:+De.yaw.toFixed(3),v:+e.toFixed(1),a:!De.ground,tk:ht.talking})}catch{}else if(_e.role==="host"&&_e.conns.size){let t=[{id:0,n:ze.name,c:Vo[0],lk:ze.look,p:[+De.pos.x.toFixed(2),+De.pos.y.toFixed(2),+De.pos.z.toFixed(2)],y:+De.yaw.toFixed(3),v:+e.toFixed(1),a:!De.ground,pid:_e.peer&&_e.peer.id,tk:ht.talking}];for(let n of kt.values())t.push({id:n.id,n:n.name,c:n.color,lk:n.look,p:[+n.tp.x.toFixed(2),+n.tp.y.toFixed(2),+n.tp.z.toFixed(2)],y:+n.ty.toFixed(3),v:n.sp,a:n.air,pid:n.pid,tk:!!n.tk});for(let n of _e.conns.values())try{n.conn.open&&n.conn.send({t:"w",pl:t})}catch{}}}function sm(i){if(!gt){if(_e.role==="client"&&_e.conn&&_e.conn.open){try{_e.conn.send({t:"portal",i})}catch{}gt=!0,am(di[i],"Warte auf den Raum\u2026"),Yu(),setTimeout(()=>{gt&&!Ml&&(gt=!1,oe("flash").classList.remove("on"),De.pos.addScaledVector(di[i].n,2.5))},5e3);return}rm(i,ze.name)}}var Ml=!1;function rm(i,e){if(Ml)return;let t=qp();for(let n of _e.conns.values())try{n.conn.open&&n.conn.send({t:"go",i,code:t,who:e})}catch{}om(i,t,"host",e)}function om(i,e,t,n){let s=di[i];if(!s||!s.on||Ml)return;Ml=!0,gt=!0;let r=s.game;am(s,(n&&n!==ze.name?n+" hat das Portal betreten \u2013 ":"")+(r.name||r.ordner)+" startet\u2026"),Yu();try{sessionStorage.setItem("gbgc-zurueck",JSON.stringify({role:_e.role==="client"?"client":"host",code:_e.code,t:Date.now()}))}catch{}let o=r.pfad+(r.start||"spiel/")+"?konsole="+t+"&code="+e+"&name="+encodeURIComponent(ze.name)+(on.get("peerhost")?"&peerhost="+on.get("peerhost")+"&peerport="+(on.get("peerport")||9e3)+"&ice=none&gfx=niedrig&noshadow":"");setTimeout(()=>{Tl(),location.href=o},t==="host"?1400:2600)}function am(i,e){let t=oe("flash");t.style.background=`radial-gradient(circle at 50% 50%, #fff 0%, ${i.col} 45%, #000 100%)`,t.classList.add("on"),oe("flashText").textContent=e,document.pointerLockElement&&document.exitPointerLock()}function an(i){let e=document.createElement("div");e.className="toast",e.textContent=i,oe("toasts").appendChild(e),setTimeout(()=>e.classList.add("out"),4200),setTimeout(()=>e.remove(),5e3)}function rs(){let i=[{n:ze.name+" (du)",c:_e.role==="client"?"#fff":Vo[0],tk:ht.talking}];for(let t of kt.values())i.push({n:t.name,c:t.color,tk:t.tk});let e="";_e.role==="host"?e=`<div class="lbl">Dein Raum-Code</div><div class="code">${_e.code}</div><div class="hint">Freunde: Portal starten \u2192 \u201EFreund beitreten" \u2192 diesen Code eingeben</div>`:_e.role==="client"&&(e=`<div class="lbl">Im Raum von deinem Freund</div><div class="code">${_e.code}</div>`),oe("room").innerHTML=e+`<div class="lbl" style="margin-top:10px">Im Raum (${i.length})</div>`+i.map(t=>`<div class="pl"><i style="background:${t.c}"></i>${Li(t.n)}${t.tk?' <b class="tk">\u{1F3A4} spricht</b>':""}</div>`).join("")+`<div class="st ${oe("netStatus").className}">${Li(_e.status)}</div>`,oe("mCode").textContent=_e.role==="host"?_e.code:_e.code||"\u2014",oe("mCodeLbl").textContent=_e.role==="client"?"Du bist im Raum":"Dein Raum-Code"}var Li=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function is(i){oe("menu").classList.toggle("hidden",!i),oe("hud").classList.toggle("dim",i)}function Us(){if(Ls&&!rn){$t=!0,oe("clickHint").classList.add("hidden"),is(!1);return}if(rn){$t=!0,oe("clickHint").classList.add("hidden"),is(!1);try{let i=document.documentElement;!document.fullscreenElement&&i.requestFullscreen&&i.requestFullscreen({navigationUI:"hide"}).then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}catch{}return}try{let i=ns.requestPointerLock({unadjustedMovement:!0});i&&i.catch&&i.catch(()=>{try{ns.requestPointerLock()}catch{}})}catch{try{ns.requestPointerLock()}catch{}}}var Ls=!1;ns.addEventListener("mousedown",i=>{i.isTrusted&&(Ls=!1)});Fp({canvas:ns,first:["bEnter","bResume"],isPlaying:()=>jt&&$t&&!ln&&!gt,canPlay:()=>jt&&!$t&&!ln&&!gt,padLock:()=>{Ls=!0,Us()},pause:()=>{$t=!1,is(!0)},back:()=>{ln?os():jt&&!gt&&(Ls=!0,Us())},onActive:()=>{if(Ls=!0,document.pointerLockElement)try{document.exitPointerLock()}catch{}}});function ju(){qu(),jt=!0,is(!1),Us()}oe("name").value=ze.name;var lm=()=>{for(let[i,e]of[["vol","vVol"],["wVol","wvVol"]])oe(i).value=ze.vol,oe(e).textContent=Math.round(ze.vol*100)+"%";oe("muteAll").classList.toggle("on",ze.vol===0),oe("muteAll").textContent=ze.vol===0?"\u{1F50A} Ton an":"\u{1F507} Ton aus",oe("volBtn").textContent=ze.vol===0?"\u{1F507}":"\u{1F50A}",oe("volBtn").classList.toggle("off",ze.vol===0)},Vu=i=>{ze.vol=Math.max(0,Math.min(1,i)),lm(),ti&&(ti.gain.value=.9*ze.vol);for(let e of ht.audios.values())e.volume=ze.vol,e.muted=ze.vol===0;Xu()};lm();var zp=ze.vol||.8;oe("vol").oninput=oe("wVol").oninput=i=>Vu(+i.target.value);oe("muteAll").onclick=()=>{ze.vol>0?(zp=ze.vol,Vu(0)):Vu(zp||.8)};oe("volBtn").onclick=()=>oe("volPop").classList.toggle("hidden");for(let i of["mousedown","pointerdown","touchstart","click"])oe("volW").addEventListener(i,e=>e.stopPropagation());for(let i of["mousedown","touchstart"])document.addEventListener(i,e=>{oe("volW").contains(e.target)||oe("volPop").classList.add("hidden")},{capture:!0,passive:!0});oe("name").oninput=()=>{ze.name=oe("name").value.trim().slice(0,16)||"Neue Pussy1",Xu(),rs()};oe("bEnter").onclick=()=>{_e.role==="none"&&Ps(),ju()};oe("bJoin").onclick=()=>{qu();let i=oe("code").value;yl(i).then(e=>{e&&ju()})};oe("code").addEventListener("keydown",i=>{i.key==="Enter"&&oe("bJoin").click()});oe("bOwn").onclick=()=>{Ps(),an("Du bist wieder in deinem eigenen Raum."),ju()};ns.addEventListener("click",()=>{jt&&!$t&&!gt&&!ln?Us():$t&&Rt&&Ju(Rt)});document.addEventListener("pointerlockchange",()=>{Ls||($t=document.pointerLockElement===ns,oe("clickHint").classList.toggle("hidden",$t||!jt||gt||ln),!$t&&jt&&!gt&&!ln&&is(!0))});document.addEventListener("mousemove",i=>{if(!$t)return;let e=.0022*(ze.sens||1);De.yaw-=i.movementX*e,De.pitch-=i.movementY*e*(ze.invert?-1:1),De.pitch=Math.max(-1.45,Math.min(1.45,De.pitch))});document.addEventListener("keydown",i=>{if(i.code==="F11"){i.preventDefault();try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>{jt&&!oe("menu").classList.contains("hidden")||jt&&Us()}).catch(()=>{})}catch{}return}document.activeElement&&/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)||(st[i.code]=!0,(i.code==="KeyV"||i.code==="KeyM")&&jt&&!i.repeat&&im(),i.code==="KeyE"&&$t&&Rt&&Ju(Rt),i.code==="Space"&&i.preventDefault())},!0);document.addEventListener("keyup",i=>{st[i.code]=!1});window.addEventListener("blur",()=>{for(let i in st)st[i]=!1});function KM(){if(!rn)return;let i=document.createElement("div");i.id="touch",i.className="hidden",i.innerHTML='<div id="tLook"></div><div id="tJoy"><div id="tJoyBase"></div><div id="tKnob"></div></div><div id="tBtns"><button class="tb" id="tTalk">\u{1F3A4}</button><button class="tb big" id="tUse">E</button><button class="tb" id="tJump">SPRING</button></div><button id="tPause" aria-label="Men\xFC">\u2630</button>',document.body.appendChild(i);let e=oe("tLook"),t=oe("tJoy"),n=oe("tKnob"),s=new Map;e.addEventListener("touchstart",g=>{g.preventDefault();for(let x of g.changedTouches)s.set(x.identifier,[x.clientX,x.clientY])},{passive:!1}),e.addEventListener("touchmove",g=>{g.preventDefault();for(let x of g.changedTouches){let m=s.get(x.identifier);if(!m)continue;let p=.0055*(ze.sens||1);De.yaw-=(x.clientX-m[0])*p,De.pitch=Math.max(-1.45,Math.min(1.45,De.pitch-(x.clientY-m[1])*p*.8)),m[0]=x.clientX,m[1]=x.clientY}},{passive:!1});let r=g=>{for(let x of g.changedTouches)s.delete(x.identifier)};e.addEventListener("touchend",r),e.addEventListener("touchcancel",r);let o=null,a=0,l=0,c=56,u=(g,x)=>{let m=g-a,p=x-l,y=Math.hypot(m,p);y>c&&(m*=c/y,p*=c/y),n.style.transform=`translate(${m}px,${p}px)`;let v=m/c,_=p/c,P=.3;st.KeyW=_<-P,st.KeyS=_>P,st.KeyA=v<-P,st.KeyD=v>P},h=()=>{o=null,n.style.transform="",st.KeyW=st.KeyS=st.KeyA=st.KeyD=!1};t.addEventListener("touchstart",g=>{if(g.preventDefault(),o!==null)return;let x=g.changedTouches[0];o=x.identifier;let m=t.getBoundingClientRect();a=m.left+m.width/2,l=m.top+m.height/2,u(x.clientX,x.clientY)},{passive:!1}),t.addEventListener("touchmove",g=>{g.preventDefault();for(let x of g.changedTouches)x.identifier===o&&u(x.clientX,x.clientY)},{passive:!1});let d=g=>{for(let x of g.changedTouches)x.identifier===o&&h()};t.addEventListener("touchend",d),t.addEventListener("touchcancel",d);let f=(g,x,m)=>{let p=oe(g);p.addEventListener("touchstart",y=>{y.preventDefault(),y.stopPropagation(),p.classList.add("on"),x()},{passive:!1}),p.addEventListener("touchend",y=>{y.preventDefault(),p.classList.remove("on"),m&&m()},{passive:!1})};f("tJump",()=>{st.Space=!0},()=>{st.Space=!1}),f("tUse",()=>{Rt&&Ju(Rt)}),f("tTalk",()=>im()),oe("tPause").addEventListener("click",()=>{$t=!1,h(),is(!0)}),setInterval(()=>{i.classList.toggle("hidden",!(jt&&$t&&!gt&&!ln)),oe("tUse").classList.toggle("hot",!!Rt),oe("tTalk").classList.toggle("mic",ht.talking),$t||h()},150)}KM();var Vp=new Mr,Rs=null;function cm(){requestAnimationFrame(cm);let i=Math.min(Vp.getDelta(),.05),e=Vp.elapsedTime,t=(st.KeyW||st.ArrowUp?1:0)-(st.KeyS||st.ArrowDown?1:0),n=(st.KeyD||st.ArrowRight?1:0)-(st.KeyA||st.ArrowLeft?1:0),s=$t&&!gt,r=(st.ShiftLeft||st.ShiftRight?3:6.5)*pn.speedMul(),o=new C;s&&(o.set(n,0,-t),o.lengthSq()>0&&o.normalize().multiplyScalar(r).applyAxisAngle(new C(0,1,0),De.yaw),pn.drift(o,e));let a=De.ground?12:3;De.vel.x+=(o.x-De.vel.x)*Math.min(1,a*i),De.vel.z+=(o.z-De.vel.z)*Math.min(1,a*i),s&&st.Space&&De.ground&&(De.vel.y=6.2*pn.jumpMul(),De.ground=!1,_n.jump()),De.vel.y-=18*i,De.pos.addScaledVector(De.vel,i),De.pos.y<=0&&(De.pos.y=0,De.vel.y=0,De.ground=!0),jp(De.pos),VM(),An.position.set(De.pos.x,De.pos.y+DM+(De.ground?Math.sin(e*9)*.025*Math.min(1,Math.hypot(De.vel.x,De.vel.z)/6):0),De.pos.z),An.rotation.set(De.pitch,De.yaw,0),Rs=null;let l=1e9;for(let u of di){u.mat.uniforms.t.value=e+u.i;let h=Math.hypot(De.pos.x-u.pos.x,De.pos.z-u.pos.z),d=u.on?Math.max(0,1-h/7):0;if(u.mat.uniforms.hot.value=d,u.light&&(u.light.intensity=12+Math.sin(e*2+u.i)*2+d*10),u.parts){let f=u.parts.geometry.attributes.position,g=u.parts.userData.sp;for(let x=0;x<f.count;x++){let m=f.getY(x)+g[x]*i;m>4.6&&(m=0),f.setY(x,m)}f.needsUpdate=!0}u.on&&h<l&&(l=h,h<6.5&&(Rs=u))}zM(Rs?Math.max(0,1-l/6.5):0);let c=oe("prompt");QM(),Rt===Qu&&!gt?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ff7fd8">\u{1F579}\uFE0F SPK Arcade</b><br><small>${rn?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Retro-Spiele spielen</small>`):Rt===ed&&!gt?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ffd23f">Umkleide</b><br><small>${rn?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = umziehen</small>`):Rt===td&&!gt?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#9fe8b0">G\xE4stebuch</b><br><small>${rn?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = lesen & reinschreiben</small>`):Rt===bl&&!gt?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#e3b27a">N\xE4chste Party</b><br><small>${rn?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Flyer gro\xDF ansehen</small>`):Rt&&Rt.radio&&!gt?(c.classList.remove("hidden"),c.innerHTML=_n.prompt(rn)):Rt&&Rt.secret&&!gt?(c.classList.remove("hidden"),c.innerHTML=pn.prompt(Rt,rn)):Rt&&!gt?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ff7fd8">${Li(Rt.dj.name||"DJ")}</b><br><small>${rn?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Instagram, SoundCloud & Co.</small>`):Rs&&!gt?(c.classList.remove("hidden"),c.innerHTML=`${rn?"Geh ins Portal":"Lauf ins Portal"}: <b style="color:${Rs.col}">${Li(Rs.game.name||Rs.game.ordner)}</b> startet sofort`+(kt.size?"<br><small>Alle im Raum kommen mit</small>":"")):c.classList.add("hidden"),cb(i),es&&(es.rotation.y=e*.25,es.position.y=6.2+Math.sin(e*.8)*.15);for(let u of kt.values()){u.fresh&&(u.p.copy(u.tp),u.y=u.ty,u.fresh=!1),u.p.lerp(u.tp,Math.min(1,i*12));let h=u.ty-u.y;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;u.y+=h*Math.min(1,i*12),u.av.root.position.copy(u.p),u.av.root.rotation.y=u.y,u.av.tag.lookAt(An.position.x,u.p.y+2.15,An.position.z),kp(u.av,u.sp,u.air,i)}if(ci){let u=ei.pos&&Math.hypot(De.pos.x-ei.pos.x,De.pos.z-ei.pos.z)<12;ci.root.visible=!!u,Nr&&(Nr.visible=!!u||!0),u&&(ci.root.position.copy(De.pos),ci.root.rotation.y=De.yaw,kp(ci,Math.hypot(De.vel.x,De.vel.z),!De.ground,i))}_e.role!=="none"&&YM(i),pn.tick(i,e),_n.tick(i,e),Bt&&Bt.tick(e,De.pos.distanceTo(Bt.pos)<14),pn.render(hi)||(hi?hi.render():ss.render(dt,An))}var wE=new C,$M=[["instagram","Instagram","#e1306c"],["facebook","Facebook","#1877f2"],["soundcloud","SoundCloud","#ff5500"],["tiktok","TikTok","#25f4ee"],["youtube","YouTube","#ff0000"],["spotify","Spotify","#1db954"],["mixcloud","Mixcloud","#5000ff"],["beatport","Beatport","#01ff95"],["website","Webseite","#ffffff"]],Or=[],Rt=null,ln=!1;async function ZM(){try{let e=await(await fetch("/System/djs.json",{cache:"no-store"})).json();return Array.isArray(e)?e:e.djs||[]}catch{return[]}}function jM(i,e){let s=mn(512,640,r=>{let o=r.createLinearGradient(0,0,0,640);o.addColorStop(0,"#1a0f24"),o.addColorStop(1,"#07060c"),r.fillStyle=o,r.fillRect(0,0,512,640),r.fillStyle="#2b2236",r.beginPath(),r.arc(256,250,92,0,Math.PI*2),r.fill(),r.beginPath(),r.ellipse(256,520,170,150,0,Math.PI,0),r.fill(),r.strokeStyle="#ff2fb0",r.lineWidth=16,r.beginPath(),r.arc(256,250,112,Math.PI*1.08,Math.PI*1.92),r.stroke(),r.fillStyle="#ff2fb0",r.fillRect(128,240,30,62),r.fillRect(354,240,30,62),r.fillStyle="rgba(255,255,255,0.35)",r.font="600 26px system-ui, sans-serif",r.textAlign="center",r.fillText("Foto folgt",256,90)});if(i.foto){let r=new Image;r.onload=()=>{let o=s.image,a=o.getContext("2d"),l=Math.max(o.width/r.width,o.height/r.height),c=r.width*l,u=r.height*l;a.drawImage(r,(o.width-c)/2,(o.height-u)/2,c,u),s.needsUpdate=!0},r.src=/^(https?:)?\//.test(i.foto)?i.foto:"/System/dj-fotos/"+i.foto}return s}async function JM(){let i=await ZM(),e=Math.max(1,i.length),t=Wu+.45,n=Wp-.62,s=.25,r=.06,o=.25,a=Math.min((n-t-s-o-2*r)/e,.32),l=e*a+2*r+s+o,c=(t+n)/2-l/2+a/2,u=c+a*(e-1)/2,h=fn-.12,d=1.7,f=2.15,g=2.75,x=c+(e-1)*a+a/2+r+s/2;if(ib(x,h),ub(x+s/2+r+o/2,h),!i.length)return;let m=mn(1024,128,(v,_,P)=>{v.clearRect(0,0,_,P),v.textAlign="center",v.textBaseline="middle",v.font='400 120px Impact, "Arial Black", sans-serif',v.shadowColor="#ff2fb0",v.shadowBlur=6,v.fillStyle="#ff7fd8",v.fillText("SPK DJs",_/2,P/2)}),p=new ee(new yt(6,.75),new Le({map:m,transparent:!0,toneMapped:!1,depthWrite:!1,color:13684944}));p.position.set(Math.sin(u)*(h-.05),g+f/2+.85,-Math.cos(u)*(h-.05)),p.lookAt(0,g+f/2+.85,0),dt.add(p);let y=new Fe({color:1776418,roughness:.35,metalness:.8});i.forEach((v,_)=>{let P=c+_*a,b=new Ze;b.position.set(Math.sin(P)*h,g,-Math.cos(P)*h),b.lookAt(0,g,0),dt.add(b);let R=new ee(new Ke(d+.22,f+.22+.42,.08),y);R.position.y=-.21,b.add(R);let I=new ee(new yt(d,f),new Le({map:jM(v,_),toneMapped:!1}));I.position.z=.05,b.add(I);let S=mn(512,96,(N,W,Z)=>{N.fillStyle="#0b0910",N.fillRect(0,0,W,Z),N.textAlign="center",N.textBaseline="middle",N.font='400 58px Impact, "Arial Black", sans-serif',N.fillStyle="#fff",N.fillText(String(v.name||"DJ "+(_+1)).toUpperCase(),W/2,Z/2+2)}),E=new ee(new yt(d,.34),new Le({map:S,toneMapped:!1}));E.position.set(0,-f/2-.22,.05),b.add(E);let L=new ee(new Ke(d+.3,.03,.03),new Le({color:16723888,toneMapped:!1}));L.position.set(0,f/2+.13,.06),b.add(L);let V=new Zi(16769268,18,7,.5,.6,1.5);V.position.set(0,f/2+1.2,1.4),V.target=I,b.add(V),Or.push({dj:v,g:b,pic:I,edge:L,i:_})})}var ku=new ol;function QM(){if(Rt=null,!$t||gt)return;ku.setFromCamera({x:0,y:0},An),ku.far=9;let i=Or.map(n=>n.pic);li&&i.push(li),Is&&i.push(Is),Br&&i.push(Br),Bt&&i.push(Bt.hit);let e=pn.targets();for(let n of e)i.push(n);for(let n of _n.targets())i.push(n);let t=ku.intersectObjects(i,!1);if(t.length&&t[0].object.userData.aim&&t[0].object.userData.aim.radio)Rt=t[0].distance<4.5?t[0].object.userData.aim:null;else if(t.length&&t[0].object.userData.aim){let n=t[0].object.userData.aim;Rt=t[0].distance<2.8&&pn.canAim(n)?n:null}else t.length&&Bt&&t[0].object===Bt.hit?Rt=t[0].distance<4.2?Qu:null:t.length&&(Rt=t[0].object===Br?ed:t[0].object===li?bl:t[0].object===Is?td:Or.find(n=>n.pic===t[0].object)||null);for(let n of Or)n.edge.scale.y=n===Rt?3:1;li&&li.scale.setScalar(Rt===bl?1.02:1)}function Ju(i){if(i&&i.secret){pn.use(i);return}if(i&&i.radio){_n.openRadio();return}if(i===bl){sb();return}if(i===td){db();return}if(i===ed){um();return}if(i===Qu){ob();return}let e=i.dj;ln=!0;for(let s in st)st[s]=!1;try{document.exitPointerLock()}catch{}let t=$M.filter(([s])=>e[s]).map(([s,r,o])=>`<a class="djl" href="${Li(e[s])}" target="_blank" rel="noopener" style="--c:${o}">${r}</a>`).join("");oe("djName").textContent=e.name||"DJ",oe("djInfo").textContent=e.info||"",oe("djLinks").innerHTML=t||'<p class="djnone">F\xFCr diesen DJ sind noch keine Links eingetragen.</p>',oe("djPhoto").classList.remove("big");let n=oe("djPhoto");e.foto?(n.src=/^(https?:)?\//.test(e.foto)?e.foto:"/System/dj-fotos/"+e.foto,n.classList.remove("hidden")):n.classList.add("hidden"),oe("djBox").classList.remove("hidden")}function os(){oe("radBox")&&oe("radBox").classList.add("hidden"),oe("djBox").classList.add("hidden"),oe("gbBox").classList.add("hidden"),oe("wrBox").classList.add("hidden"),Ue.open=!1,ln=!1,jt&&Us()}oe("djClose").onclick=os;oe("djBox").addEventListener("click",i=>{i.target.id==="djBox"&&os()});var bl={flyer:!0},li=null,Qn={};async function eb(){try{return await(await fetch("/System/party.json",{cache:"no-store"})).json()}catch{return{}}}function hm(i){return/^(https?:)?\/\//.test(i)?i:"/System/flyer/"+i}function tb(){return mn(1024,1280,(i,e,t)=>{let s=t/6;for(let r=0;r<6;r++){let o=[120,78,44].map(a=>a+Math.floor((Math.random()-.5)*22));i.fillStyle=`rgb(${o})`,i.fillRect(0,r*s,e,s);for(let a=0;a<70;a++){let l=r*s+Math.random()*s;i.strokeStyle=`rgba(${Math.random()<.5?"60,35,15":"170,120,75"},${.08+Math.random()*.12})`,i.lineWidth=1+Math.random()*3,i.beginPath(),i.moveTo(0,l);for(let c=0;c<=e;c+=64)i.lineTo(c,l+Math.sin(c/90+a)*4);i.stroke()}if(Math.random()<.7){let a=Math.random()*e,l=r*s+s/2,c=i.createRadialGradient(a,l,2,a,l,26);c.addColorStop(0,"rgba(50,28,10,0.7)"),c.addColorStop(1,"rgba(50,28,10,0)"),i.fillStyle=c,i.beginPath(),i.ellipse(a,l,40,18,0,0,Math.PI*2),i.fill()}i.fillStyle="rgba(25,14,6,0.85)",i.fillRect(0,r*s,e,5);for(let a of[60,e-60])i.fillStyle="#3a3a3a",i.beginPath(),i.arc(a,r*s+s/2,9,0,Math.PI*2),i.fill()}})}function nb(i){return mn(768,1086,(e,t,n)=>{e.fillStyle="#f2ece0",e.fillRect(0,0,t,n),e.fillStyle="#ff2fb0",e.fillRect(0,0,t,150),e.textAlign="center",e.textBaseline="middle",e.font='400 96px Impact, "Arial Black", sans-serif',e.fillStyle="#fff",e.fillText("SPK",t/2,80),e.font='400 84px Impact, "Arial Black", sans-serif',e.fillStyle="#18101c",e.fillText("N\xC4CHSTE",t/2,330),e.fillText("PARTY",t/2,430),e.font='600 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="#5a5060";let s=String(i||"Flyer folgt \u2013 bald steht hier, wann und wo die n\xE4chste SPK Party steigt!").split(" "),r="",o=600;for(let a of s){let l=r?r+" "+a:a;e.measureText(l).width>t-120?(e.fillText(r,t/2,o),o+=56,r=a):r=l}r&&e.fillText(r,t/2,o)})}async function ib(i,e){Qn=await eb();let t=2.75,n=3,s=3.7,r=new Ze;r.position.set(Math.sin(i)*(e-.02),t,-Math.cos(i)*(e-.02)),r.lookAt(0,t,0),dt.add(r);let o=new ee(new Ke(n,s,.12),new Fe({map:tb(),roughness:.85,metalness:0}));r.add(o);let a=new Fe({color:3875858,roughness:.8});for(let[d,f,g,x]of[[0,s/2,n+.16,.14],[0,-s/2,n+.16,.14],[n/2,0,.14,s],[-n/2,0,.14,s]]){let m=new ee(new Ke(g,x,.18),a);m.position.set(d,f,.02),r.add(m)}for(let d of[-n/2+.25,n/2-.25]){let f=new ee(new Ke(.14,t-s/2+.3,.14),a);f.position.set(d,-s/2-(t-s/2)/2+.15,-.05),r.add(f)}let l=2.1,c=l*1.414,u=nb(Qn.text);if(li=new ee(new yt(l,c),new Fe({map:u,roughness:.9})),li.position.set(0,.05,.075),li.rotation.z=-.015,r.add(li),Qn.flyer){let d=new Image;d.onload=()=>{let f=u.image,g=f.getContext("2d");g.fillStyle="#111",g.fillRect(0,0,f.width,f.height);let x=Math.min(f.width/d.width,f.height/d.height),m=d.width*x,p=d.height*x;g.drawImage(d,(f.width-m)/2,(f.height-p)/2,m,p),u.needsUpdate=!0},d.src=hm(Qn.flyer)}for(let[d,f]of[[-l/2+.12,c/2-.12],[l/2-.12,c/2-.12]]){let g=new ee(new Nt(.05,12,8),new Fe({color:16723888,roughness:.3}));g.position.set(d,f+.05,.11),r.add(g)}let h=new Zi(16773340,9,8,.6,.7,1.4);h.position.set(0,s/2+1,1.8),h.target=li,r.add(h)}function sb(){ln=!0;for(let e in st)st[e]=!1;try{document.exitPointerLock()}catch{}oe("djName").textContent="N\xC4CHSTE PARTY",oe("djInfo").textContent=Qn.flyer?Qn.text||"":Qn.text||"Flyer folgt \u2013 bald steht hier, wann die n\xE4chste SPK Party steigt!";let i=oe("djPhoto");Qn.flyer?(i.src=hm(Qn.flyer),i.classList.remove("hidden"),i.classList.add("big")):i.classList.add("hidden"),oe("djLinks").innerHTML=Qn.link?`<a class="djl" href="${Li(Qn.link)}" target="_blank" rel="noopener" style="--c:#e3b27a">Mehr Infos</a>`:"",oe("djBox").classList.remove("hidden")}var Qu={arcade:!0},Bt=null;function rb(){let i=Wu+.24,e=fn-1.25;Bt=Up(mn),Bt.g.scale.setScalar(2.2/1.75),Bt.g.position.set(Math.sin(i)*e,0,-Math.cos(i)*e),Bt.g.lookAt(0,0,0),dt.add(Bt.g),Bt.pos=Bt.g.position.clone()}function ob(){if(gt)return;gt=!0;for(let r in st)st[r]=!1;document.pointerLockElement&&document.exitPointerLock(),kt.size&&_e.role==="host"&&an("Du gehst kurz in die Arcade \u2013 deine Freunde warten im Portal-Raum auf dich.");let i=document.createElement("div");i.id="arcLoad",i.style.cssText='position:fixed;inset:0;z-index:99;background:#05030c;display:flex;flex-direction:column;align-items:center;justify-content:center;font:900 46px "Courier New",monospace;color:#ff2fb0;letter-spacing:.1em;text-shadow:0 0 18px #ff2fb0',i.innerHTML='<div>SPK ARCADE</div><div style="margin-top:28px;width:min(420px,80vw);height:34px;border:4px solid #fff;padding:4px;box-sizing:border-box;display:flex;gap:4px" id="arcBar"></div><div style="margin-top:14px;font-size:16px;color:#20e0ff;text-shadow:none">LADE ...</div>',document.body.appendChild(i),Yu();let e=0,t=i.querySelector("#arcBar"),n=setInterval(()=>{e++;let r=document.createElement("i");r.style.cssText="flex:0 0 calc((100% - 44px)/12);background:"+(e<5?"#39ff88":e<9?"#ffd23f":"#ff2fb0"),t.appendChild(r),e>=12&&clearInterval(n)},100);try{sessionStorage.setItem("gbgc-zurueck",JSON.stringify({role:_e.role==="client"?"client":"host",code:_e.code,t:Date.now()}))}catch{}let s="/Arcade/spiel/index.html?name="+encodeURIComponent(ze.name)+(on.get("peerhost")?"&peerhost="+on.get("peerhost")+"&peerport="+(on.get("peerport")||9e3):"");setTimeout(()=>{Tl(),location.href=s},1400)}var ed={cab:!0},Bn={ang:Wp-.3,r:fn-1.15,pos:null},Br=null;function ab(){let i=Bn.ang,e=Math.sin(i)*Bn.r,t=-Math.cos(i)*Bn.r;Bn.pos=new C(e,0,t);let n=new Ze;n.position.set(e,0,t),n.lookAt(0,0,0),dt.add(n);let s=1.9,r=2.6,o=1.6,a=new Fe({color:2761264,roughness:.6,metalness:.3}),l=(x,m,p,y,v,_,P=a)=>{let b=new ee(new Ke(x,m,p),P);return b.position.set(y,v,_),n.add(b),b};l(s,r,.08,0,r/2,-o/2),l(.08,r,o,-s/2,r/2,0),l(.08,r,o,s/2,r/2,0),l(s+.1,.1,o+.1,0,r,0),l(s,.06,o,0,.03,0,new Fe({color:3812922,roughness:.9})),l(.9,1.7,.03,0,1.25,-o/2+.06,new Fe({color:13621480,roughness:.05,metalness:1}));let c=new Fe({color:13112687,roughness:.85,side:Dt});for(let x of[-1,1]){let m=new yt(.55,r-.25,12,1),p=m.attributes.position;for(let v=0;v<p.count;v++)p.setZ(v,Math.sin(p.getX(v)*22)*.04);m.computeVertexNormals();let y=new ee(m,c);y.position.set(x*(s/2-.3),(r-.25)/2+.05,o/2),n.add(y)}l(s,.04,.04,0,r-.12,o/2,new Fe({color:12566463,metalness:1,roughness:.3}));let u=zr([{t:"UMKLEIDE",size:120,c:"#ffd23f",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"rgba(255,170,0,0.6)"}],{w:1024,h:180,pw:1.9});u.position.set(0,r+.35,o/2),n.add(u);let h=new Tn(16773328,6,4,1.6);h.position.set(0,r-.3,.2),n.add(h),Br=new ee(new Ke(s+.4,r+.6,o+.4),new Le({transparent:!0,opacity:0,depthWrite:!1})),Br.position.set(0,r/2,0),n.add(Br);let d=new Ze;d.position.set(s/2+.7,0,.3),n.add(d);let f=new Fe({color:12566463,metalness:1,roughness:.3});for(let x of[-.45,.45]){let m=new ee(new ct(.02,.02,1.6,8),f);m.position.set(x,.8,0),d.add(m)}let g=new ee(new ct(.02,.02,.95,8),f);g.rotation.z=Math.PI/2,g.position.y=1.55,d.add(g),On.slice(0,7).forEach((x,m)=>{let p=new ee(new Ke(.06,.62,.42),new Fe({color:x,roughness:.9}));p.position.set(-.36+m*.12,1.2,0),d.add(p)})}var Ue={open:!1,look:null,r:null,scene:null,cam:null,fig:null,mixer:null,rot:0,t:0,drag:null};function lb(){if(Ue.r)return;let i=oe("wrCanvas");Ue.r=new mo({canvas:i,antialias:!0,alpha:!0}),Ue.r.outputColorSpace=vt,Ue.r.toneMapping=br,Ue.scene=new go,Ue.cam=new Lt(30,1,.1,50),Ue.cam.position.set(0,1.05,4.6),Ue.cam.lookAt(0,.95,0),Ue.scene.add(new Co(16777215,4206656,1.5));let e=new Ss(16777215,2.2);e.position.set(2,4,4),Ue.scene.add(e);let t=new Ss(16723888,1.4);t.position.set(-3,2,-3),Ue.scene.add(t);let n=new ee(new Zn(.8,40),new Le({color:16723888,transparent:!0,opacity:.25}));n.rotation.x=-Math.PI/2,Ue.scene.add(n),i.addEventListener("pointerdown",s=>{Ue.drag=s.clientX,i.setPointerCapture(s.pointerId)}),i.addEventListener("pointermove",s=>{Ue.drag!=null&&(Ue.rot+=(s.clientX-Ue.drag)*.012,Ue.drag=s.clientX)}),i.addEventListener("pointerup",()=>{Ue.drag=null})}function Wr(){if(Ue.look.ch&&!Lr(Gt,Ue.look.ch)){let e=Ue.look.ch;oe("wrOpts").insertAdjacentHTML("afterbegin",'<div class="wrow" id="wrLoad"><span>\u23F3</span><div>Figur wird geladen \u2026</div></div>'),Bo(Gt,e).then(()=>{let t=oe("wrLoad");t&&t.remove(),Ue.look.ch===e&&Wr()})}Ue.fig&&Ue.scene.remove(Ue.fig);let i=_l(Gt,Ue.look);Ue.fig=i.m,Ue.scene.add(i.m),Ue.mixer=new wn(i.m),ui&&ui.idle&&Ue.mixer.clipAction(ui.idle).play()}function Xo(){let i=Ue.look,e=oe("wrOpts"),t=(o,a,l,c)=>`<div class="wrow"><span>${o}</span><div>`+a.map((u,h)=>`<button class="wo${u.v===l?" on":""}" data-set="${c}" data-v="${Li(String(u.v))}">${Li(u.t)}</button>`).join("")+"</div></div>",n=(o,a,l,c)=>`<div class="wrow"><span>${o}</span><div>`+a.map(u=>`<button class="wc${u===l?" on":""}" style="background:${u}" data-set="${c}" data-v="${u}" aria-label="${u}"></button>`).join("")+"</div></div>",s=t("Figur",ws.map(o=>({t:o.name+(o.kind&&o.id&&o.kind==="Comic"?" \u270F\uFE0F":""),v:o.id})),i.ch,"ch"),r=ws.find(o=>o.id===i.ch)||ws[0];i.ch?((r.parts||[]).forEach(([o],a)=>{s+=`<div class="wrow"><span>${Li(o)}</span><div><button class="wo${i.p[a]?"":" on"}" data-set="p${a}" data-v="">Original</button>`+On.map(l=>`<button class="wc${l===i.p[a]?" on":""}" style="background:${l}" data-set="p${a}" data-v="${l}" aria-label="${l}"></button>`).join("")+"</div></div>"}),r.parts||(s+='<div class="wrow"><span>Kleidung</span><div style="opacity:.75">Diese Figur hat ihr festes Outfit \u2013 du kannst sie mit Kappe, Brille, Kette und Rucksack aufpeppen.</div></div>')):(s+=t("K\xF6rper",[{t:"Mann",v:"m"},{t:"Frau",v:"f"}],i.b,"b")+t("Hautfarbe",[{t:"Hell",v:0},{t:"Dunkel",v:1}],i.s,"s"),s+=t("Frisur",Iu.map(o=>({t:o.name,v:o.id})),i.h,"h"),i.b==="m"&&(s+=t("Bart",[{t:"Ohne",v:0},{t:"Mit Bart",v:1}],i.beard,"beard")),s+=n("Haarfarbe",Pu,i.hc,"hc"),s+=t("Oberteil",Ep.map((o,a)=>({t:o,v:a})),i.top,"top"),i.top&&(s+=n("Farbe",On,i.tc,"tc")),s+=t("Hose",Sp.map((o,a)=>({t:o,v:a})),i.bot,"bot"),i.bot&&(s+=n("Farbe",On,i.bc,"bc")),s+=t("Schuhe",Tp.map((o,a)=>({t:o,v:a})),i.sh,"sh"),i.sh&&(s+=n("Farbe",On,i.shc,"shc"))),s+=t("Kopf",Lu.map((o,a)=>({t:o,v:a})),i.cap,"cap"),i.cap&&(s+=n("Farbe",On,i.capc,"capc")),s+=t("Brille",Du.map((o,a)=>({t:o,v:a})),i.gl,"gl"),s+=t("Goldkette",[{t:"Ohne",v:0},{t:"Mit Kette",v:1}],i.chain,"chain"),s+=t("Rucksack",[{t:"Ohne",v:0},{t:"Mit Rucksack",v:1}],i.bag,"bag"),i.bag&&(s+=n("Farbe",On,i.bagc,"bagc")),e.innerHTML=s,e.querySelectorAll("button[data-set]").forEach(o=>o.onclick=()=>{let a=o.dataset.set,l=o.dataset.v;if(["s","beard","top","bot","sh","cap","gl","chain","bag"].includes(a)&&(l=+l),/^p\d$/.test(a)){let c=Ue.look.p.slice();c[+a[1]]=l,Ue.look=xn(Object.assign({},Ue.look,{p:c}))}else a==="ch"?Ue.look=xn(Object.assign({},Ue.look,{ch:l,p:["","","",""]})):Ue.look=xn(Object.assign({},Ue.look,{[a]:l}));Xo(),Wr()})}function um(){if(!Gt){an("Die Figuren werden noch geladen \u2026");return}ln=!0,Ue.open=!0;for(let t in st)st[t]=!1;try{document.exitPointerLock()}catch{}Ue.look=xn(ze.look),lb(),Xo(),Wr(),Ue.rot=0,oe("wrBox").classList.remove("hidden");let i=oe("wrCanvas"),e=i.getBoundingClientRect();Ue.r.setPixelRatio(Math.min(2,devicePixelRatio||1)),Ue.r.setSize(e.width||300,e.height||420,!1),Ue.cam.aspect=(e.width||300)/(e.height||420),Ue.cam.updateProjectionMatrix()}function cb(i){!Ue.open||!Ue.r||(Ue.drag==null&&(Ue.rot+=i*.35),Ue.fig&&(Ue.fig.rotation.y=Ue.rot),Ue.mixer&&Ue.mixer.update(i),Ue.r.render(Ue.scene,Ue.cam))}function dm(){if(ze.look=xn(Ue.look),Xu(),nd(),_e.role==="client"&&_e.conn)try{_e.conn.send({t:"look",lk:ze.look})}catch{}an("Neuer Look gespeichert \u2013 alle im Raum sehen dich jetzt so."),os()}oe("wrDone").onclick=dm;oe("wrCancel").onclick=os;oe("wrRandom").onclick=()=>{let i=Cp(Math.random,!0,!0);Math.random()<.5&&(i.ch=""),i.p=["","","",""].map(()=>Math.random()<.5?On[Math.floor(Math.random()*On.length)]:""),Ue.look=xn(i),Xo(),Wr()};oe("wrUndress").onclick=()=>{Ue.look=xn(Object.assign({},Ue.look,{top:0,bot:0,sh:0,cap:0,gl:0,chain:0,bag:0,p:["","","",""]})),Xo(),Wr()};oe("wrBox").addEventListener("click",i=>{i.target.id==="wrBox"&&os()});var td={gb:!0},Is=null,kr=null,Ds="",Vr=[];async function El(i){if(!Ds)return null;try{let t=await(await fetch(Ds+(i?(Ds.includes("?")?"&":"?")+i:""),{cache:"no-store"})).json();if(Array.isArray(t.eintraege))return Vr=t.eintraege,fm(),Vr}catch{}return null}function hb(i,e,t){let n=String(e).split(" "),s=[],r="";for(let o of n){let a=r?r+" "+o:o;i.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function fm(){if(!kr)return;let i=kr.image,e=i.getContext("2d"),t=i.width,n=i.height,s=e.createLinearGradient(0,0,0,n);s.addColorStop(0,"#1f3a2c"),s.addColorStop(1,"#16291f"),e.fillStyle=s,e.fillRect(0,0,t,n);for(let o=0;o<400;o++)e.fillStyle=`rgba(255,255,255,${Math.random()*.03})`,e.fillRect(Math.random()*t,Math.random()*n,3,1);e.textAlign="center",e.font='400 120px Impact, "Arial Black", sans-serif',e.fillStyle="#eef3e8",e.fillText("G\xC4STEBUCH",t/2,130),e.fillStyle="rgba(238,243,232,0.35)",e.fillRect(80,160,t-160,4),e.textAlign="left";let r=230;if(!Ds)e.textAlign="center",e.font='italic 64px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#dfe8d6",e.fillText("kommt bald \u2026",t/2,400);else if(!Vr.length)e.textAlign="center",e.font='italic 60px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#dfe8d6",e.fillText("Sei der Erste \u2013",t/2,420),e.fillText("schreib was rein!",t/2,500);else for(let o of Vr.slice(0,7)){if(r>n-90)break;e.font='700 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="#9fe8b0",e.fillText(o.n,70,r),e.font='46px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#eef3e8";for(let a of hb(e,o.x,t-140).slice(0,3))r+=54,e.fillText(a,70,r);r+=66}e.textAlign="center",e.font='600 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="rgba(238,243,232,0.7)",e.fillText(rn?"Tippe auf E zum Reinschreiben":"Klicken zum Reinschreiben",t/2,n-40),kr.needsUpdate=!0}async function ub(i,e){try{Ds=((await(await fetch("/System/gaestebuch.json",{cache:"no-store"})).json()).url||"").trim()}catch{}let t=2.75,n=3,s=3.7,r=new Ze;r.position.set(Math.sin(i)*(e-.02),t,-Math.cos(i)*(e-.02)),r.lookAt(0,t,0),dt.add(r);let o=new Fe({color:3875858,roughness:.8}),a=new ee(new Ke(n,s,.12),o);r.add(a);for(let[c,u,h,d]of[[0,s/2,n+.16,.14],[0,-s/2,n+.16,.14],[n/2,0,.14,s],[-n/2,0,.14,s]]){let f=new ee(new Ke(h,d,.18),o);f.position.set(c,u,.02),r.add(f)}for(let c of[-n/2+.25,n/2-.25]){let u=new ee(new Ke(.14,t-s/2+.3,.14),o);u.position.set(c,-s/2-(t-s/2)/2+.15,-.05),r.add(u)}kr=mn(1024,1260,()=>{}),Is=new ee(new yt(n-.2,s-.2),new Fe({map:kr,roughness:.95,emissive:16777215,emissiveMap:kr,emissiveIntensity:.35})),Is.position.z=.07,r.add(Is);let l=new Zi(16773340,9,8,.6,.7,1.4);l.position.set(0,s/2+1,1.8),l.target=Is,r.add(l),fm(),El(),setInterval(()=>{ln||El()},6e4)}function Gu(){let i=oe("gbList");if(i.innerHTML="",!Ds){i.innerHTML='<p class="djnone">Das G\xE4stebuch wird gerade eingerichtet \u2013 bald kannst du hier reinschreiben.</p>';return}if(!Vr.length){i.innerHTML='<p class="djnone">Noch keine Eintr\xE4ge \u2013 sei der Erste!</p>';return}for(let e of Vr){let t=document.createElement("div");t.className="gbe";let n=new Date(e.t);t.innerHTML="<b></b><span></span><p></p>",t.querySelector("b").textContent=e.n,t.querySelector("span").textContent=isNaN(n)?"":n.toLocaleDateString("de-AT")+" "+n.toLocaleTimeString("de-AT",{hour:"2-digit",minute:"2-digit"}),t.querySelector("p").textContent=e.x,i.appendChild(t)}}function db(){ln=!0;for(let i in st)st[i]=!1;try{document.exitPointerLock()}catch{}oe("gbName").value=ze.name||"",oe("gbText").value="",oe("gbCount").textContent="0 / 100",oe("gbMsg").textContent="",oe("gbForm").classList.toggle("hidden",!Ds),Gu(),oe("gbBox").classList.remove("hidden"),El().then(()=>Gu())}oe("gbText").addEventListener("input",()=>{oe("gbCount").textContent=oe("gbText").value.length+" / 100"});oe("gbClose").onclick=os;oe("gbBox").addEventListener("click",i=>{i.target.id==="gbBox"&&os()});oe("gbForm").addEventListener("submit",async i=>{i.preventDefault();let e=oe("gbText").value.replace(/\s+/g," ").trim().slice(0,100),t=(oe("gbName").value.trim()||ze.name||"Gast").slice(0,20);if(!e){oe("gbMsg").textContent="Schreib zuerst etwas rein.";return}let n=0;try{n=+localStorage.getItem("spk-gb-last")||0}catch{}if(Date.now()-n<3e4){oe("gbMsg").textContent="Bitte kurz warten, bevor du nochmal schreibst.";return}oe("gbSend").disabled=!0,oe("gbMsg").textContent="Wird gespeichert\u2026";let s=await El("name="+encodeURIComponent(t)+"&text="+encodeURIComponent(e));if(oe("gbSend").disabled=!1,s){try{localStorage.setItem("spk-gb-last",String(Date.now()))}catch{}oe("gbText").value="",oe("gbCount").textContent="0 / 100",oe("gbMsg").textContent="Danke! Dein Eintrag steht jetzt im G\xE4stebuch.",Gu()}else oe("gbMsg").textContent="Hat nicht geklappt \u2013 ist das Internet an?"});var fb="https://abacus.jasoncameron.dev/hit/spk-portal-hiasus/besucher",pb="https://abacus.jasoncameron.dev/get/spk-portal-hiasus/besucher",pm="https://countapi.mileshilliard.com/api/v1/",Gr=null,Go=null,wl="",Wo=()=>{try{return new Date().toLocaleDateString("sv-SE",{timeZone:"Europe/Vienna"})}catch{return new Date().toISOString().slice(0,10)}};async function mm(i){let e="besucher-"+Wo();for(let t of[`https://abacus.jasoncameron.dev/${i?"hit":"get"}/spk-portal-hiasus/${e}`,pm+(i?"hit":"get")+"/spk-portal-hiasus-"+e])try{let n=await fetch(t,{cache:"no-store"});if(n.status===404&&!i)return 0;if(n.ok){let s=await n.json(),r=parseInt(s.value,10);if(!isNaN(r))return r}}catch{}return wl===Wo()?Go:null}async function gm(){let i=Wo(),e=!1;try{e=!localStorage.getItem("spk-tag-"+i),localStorage.setItem("spk-tag-"+i,"1")}catch{}let t=await mm(e);t!=null&&(Go=t,wl=i,Ur(!0))}async function mb(){let i=!1;try{i=!sessionStorage.getItem("spk-gezaehlt"),sessionStorage.setItem("spk-gezaehlt","1")}catch{}Gr=await xm(i),Ur(!0),gm()}var zo=null,Gp="",gb=null;async function xm(i){try{let e=await fetch(i?fb:pb,{cache:"no-store"});if(e.ok){let t=await e.json(),n=parseInt(t.value,10);if(!isNaN(n))return n}}catch{}try{let e=await fetch(pm+(i?"hit":"get")+"/spk-portal-hiasus-besucher",{cache:"no-store"});if(e.ok){let t=await e.json(),n=parseInt(t.value,10);if(!isNaN(n))return n}}catch{}return Gr}function xb(){let i=new Date;return{time:i.toLocaleTimeString("de-AT",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),date:i.toLocaleDateString("de-AT",{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"}),vis:Gr==null?"\u2014":Gr.toLocaleString("de-AT"),day:Go==null||wl!==Wo()?"\u2014":Go.toLocaleString("de-AT")}}function Ur(i){let e=xb(),t=e.time+e.vis+e.day;if(!i&&t===Gp||(Gp=t,oe("hudClock")&&(oe("hudClock").innerHTML=`<b>${e.time.slice(0,5)}</b><span>${Gr==null?"":"Besucher: "+e.vis+" \xB7 Heute: "+e.day}</span>`),!zo))return;let n=zo.image,s=n.getContext("2d"),r=n.width,o=n.height;s.fillStyle="#0b0910",s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,47,176,0.6)",s.lineWidth=6,s.strokeRect(10,10,r-20,o-20),s.textAlign="center",s.textBaseline="middle",s.font='700 150px Consolas, "Courier New", monospace',s.fillStyle="#e8f7ff",s.fillText(e.time,r/2,130),s.font='500 40px "Segoe UI", system-ui, sans-serif',s.fillStyle="#9d97ab",s.fillText(e.date,r/2,232),s.fillStyle="rgba(255,255,255,0.12)",s.fillRect(60,280,r-120,3),s.fillStyle="rgba(255,255,255,0.12)",s.fillRect(r/2-2,300,4,190),s.font='400 50px Impact, "Arial Black", sans-serif',s.fillStyle="#ff7fd8",s.fillText("BESUCHER GESAMT",r/4,340),s.fillStyle="#7fe9ff",s.fillText("HEUTE",r*3/4,340),s.font='700 96px Consolas, "Courier New", monospace',s.fillStyle="#e8f7ff",s.fillText(e.vis,r/4,440),s.fillText(e.day,r*3/4,440),zo.needsUpdate=!0}function _b(){zo=mn(1024,512,()=>{});let i=new Ze;i.position.set(0,3.9,0),dt.add(i);let e=3,t=1.5,n=e/2+.11,s=new ee(new Ke(e+.16,t+.16,e+.16),new Fe({color:1381659,roughness:.4,metalness:.8}));i.add(s);let r=new Le({map:zo,toneMapped:!1,color:14211288});for(let o=0;o<4;o++){let a=new ee(new yt(e,t),r),l=o*Math.PI/2;a.position.set(Math.sin(l)*n,0,Math.cos(l)*n),a.rotation.y=l,i.add(a)}for(let o of[-1,1])for(let a of[-1,1]){let l=new ee(new ct(.02,.02,2.6,6),new Fe({color:5593964,metalness:.9,roughness:.3}));l.position.set(o*e/2.2,t/2+1.3,a*e/2.2),i.add(l)}gb=i,Ur(!0),setInterval(()=>Ur(!1),1e3),mb(),setInterval(async()=>{let o=await xm(!1);if(o!=null&&(Gr=o,Ur(!0)),wl!==Wo())gm();else{let a=await mm(!1);a!=null&&(Go=a,Ur(!0))}},6e4)}async function vb(){let i=[];try{let s=await fetch("/__spiele",{cache:"no-store"});if(!s.ok)throw 0;i=await s.json()}catch{try{i=await(await fetch("/spiele.json",{cache:"no-store"})).json()}catch{}}Array.isArray(i)||(i=i?[i]:[]);let e=s=>{let r=/(\d{1,2})\.(\d{1,2})\.(\d{4})/.exec(s||"");return r?new Date(+r[3],+r[2]-1,+r[1]).getTime():0},t=new Array(Hr).fill(null),n=[];for(let s of i){let r=parseInt(s.portal,10);r>=1&&r<=Hr&&!t[r-1]?t[r-1]=s:n.push(s)}n.sort((s,r)=>e(s.datum)-e(r.datum));for(let s of n){let r=t.indexOf(null);r>=0&&(t[r]=s)}return t}async function yb(){try{ts=await new Tr().loadAsync("/System/assets/figur.glb");let i={};for(let t of ts.animations)i[t.name]=t;let e=t=>t?new jn(t.name,t.duration,t.tracks.filter(n=>!n.name.startsWith("root."))):null;ui={idle:e(i.Idle_Loop),walk:e(i.Walk_Loop),run:e(i.Jog_Fwd_Loop),jump:e(i.Jump_Loop),dance:e(i.Dance_Loop),use:e(i.Interact)}}catch(i){console.warn("Figur fehlt",i),ts=null}try{Gt=await Ip("/System/figuren/")}catch(i){console.warn("Figuren fehlen",i),Gt=null}try{ab(),Mb()}catch(i){console.warn("Umkleide",i)}try{rb()}catch(i){console.warn("Arcade",i)}try{Gt&&ui&&(_n=Dp({scene:dt,camera:An,me:De,djFrames:Or,net:_e,toast:an,canvasTex:mn,$:oe,CL:ui,FIG:Gt,audio:()=>(qu(),lt?{AC:lt,master:ti}:null),unlock:()=>{ln=!0;for(let i in st)st[i]=!1;try{document.exitPointerLock()}catch{}},relock:()=>{ln=!1,jt&&Us()}}))}catch(i){console.warn("UFO",i)}}var ci=null,Nr=null;function nd(){ci&&dt.remove(ci.root),!(!Gt||!ts)&&(ze.look&&ze.look.ch&&!Lr(Gt,ze.look.ch)&&Bo(Gt,ze.look.ch).then(()=>{Lr(Gt,ze.look.ch)&&nd()}),ci=Fr(ze.name,Vo[0],ze.look),ci.tag.visible=!1,ci.root.traverse(i=>i.layers.set(1)))}function Mb(){let i=Bn.ang,e=new Ze;e.position.set(Math.sin(i)*Bn.r,0,-Math.cos(i)*Bn.r),e.lookAt(0,0,0),dt.add(e);let t=new Ze;t.position.set(-1.9,0,.35),t.rotation.y=.35,e.add(t);let n=1.15,s=2.15,r=new Fe({color:13938487,roughness:.3,metalness:.9}),o=(u,h,d,f)=>{let g=new ee(new Ke(u,h,.08),r);g.position.set(d,f,0),t.add(g)};o(n+.16,.08,0,.25),o(n+.16,.08,0,.25+s+.08),o(.08,s+.16,-n/2-.04,.29+s/2),o(.08,s+.16,n/2+.04,.29+s/2);for(let u of[-1,1]){let h=new ee(new Ke(.06,.06,.6),r);h.position.set(u*n/2,.03,-.1),t.add(h)}let a=new ee(new Ke(n,s,.02),new Fe({color:1118481}));a.position.set(0,.29+s/2,-.03),t.add(a),Nr=new Fo(new yt(n,s),{textureWidth:vl?384:768,textureHeight:vl?720:1440,color:13159636,multisample:vl?0:4}),Nr.position.set(0,.29+s/2,.02),t.add(Nr),Nr.camera.layers.enable(1);let l=new ee(new Nt(.05,10,8),new Le({color:16773840,toneMapped:!1}));l.position.set(0,.29+s+.16,.06),t.add(l);let c=zr([{t:"SPIEGEL",size:90,c:"#ffd23f",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"rgba(255,170,0,0.5)"}],{w:768,h:140,pw:1});c.position.set(0,.29+s+.4,.02),t.add(c),ei.pos=new C,t.getWorldPosition(ei.pos),nd()}var ei={pos:null},_n={tick(){},jump(){},collide(){},targets:()=>[],prompt:()=>"",state:()=>({n:0}),setState(){},remoteWave(){},setRad(){},hostRequest(){},control(){},openRadio(){}},pn={tick(){},render(){return!1},collide(){},targets:()=>[],speedMul:()=>1,jumpMul:()=>1,drift(){},canAim:()=>!1,use(){},prompt:()=>"",state:()=>[],setState(){},hostTake(){}};(async()=>{NM(),FM(),oe("loadInfo").textContent="Lade Spiele\u2026";let[i]=await Promise.all([vb(),yb()]);i.forEach((n,s)=>kM(s,n));try{pn=_p({scene:dt,camera:An,renderer:ss,portals:di,me:De,textPlane:zr,toast:an,net:_e,composer:hi,bloom:zu,R_WALL:fn,ARC:Sl,PR:Xp})}catch(n){console.warn("Geheimnis",n)}JM(),_b();let e=i.filter(Boolean).length;oe("loadInfo").textContent=e===1?"1 Spiel im Raum":e+" Spiele im Raum",oe("bEnter").disabled=!1,oe("bJoin").disabled=!1,cm(),window.konsole={_wardrobe:n=>{um(),n&&(Ue.look=xn(n),Xo(),Wr())},_arcade:()=>Bt,_pad:()=>({locked:$t,started:jt,djOpen:ln,leaving:gt,padMode:Ls}),_ufo:()=>_n,_dj:Or,_addOther:$u,_secret:()=>pn,_collide:jp,MIR:ei,setMyLook:n=>{Ue.look=xn(n),dm()},me:De,portals:di,net:_e,others:kt,enterPortal:sm,joinRoom:yl,openRoom:Ps,keys:st,voice:ht,started:()=>jt};let t=null;try{t=JSON.parse(sessionStorage.getItem("gbgc-zurueck")||"null"),sessionStorage.removeItem("gbgc-zurueck")}catch{}De.pos.set(0,0,0),De.yaw=0,t&&Date.now()-t.t<6*36e5?(De.pos.set(0,0,-6),De.yaw=Math.PI,Ps(),t.role==="client"&&t.code?(Qp(t.code),an("Zur\xFCck im Portal \u2013 du kommst gleich wieder in den Raum von deinem Freund.")):an("Zur\xFCck im Portal. Deine Freunde kommen gleich nach."),oe("menuTitle").textContent="Willkommen zur\xFCck!"):on.get("autojoin")||Ps(),on.has("autotest")&&(jt=!0,is(!1)),on.get("autojoin")&&yl(on.get("autojoin")).then(()=>{jt=!0,is(!1)}),rs()})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
