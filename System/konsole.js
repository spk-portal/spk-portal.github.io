var kh="170";var Xm=0,Cd=1,qm=2;var Jf=1,Ym=2,Ei=3,Fn=0,Kt=1,It=2,oi=0,sr=1,jn=2,Id=3,Pd=4,Km=5,xs=100,jm=101,$m=102,Zm=103,Jm=104,Qm=200,e0=201,t0=202,n0=203,vc=204,yc=205,i0=206,s0=207,r0=208,o0=209,a0=210,l0=211,c0=212,h0=213,u0=214,Mc=0,Ec=1,bc=2,lr=3,Sc=4,Tc=5,wc=6,Ac=7,Qf=0,d0=1,f0=2,Xi=0,Hh=1,zh=2,Gh=3,Sr=4,p0=5,Vh=6,Wh=7,Ld="attached",m0="detached",ep=300,cr=301,hr=302,Rc=303,Cc=304,ul=306,$n=1e3,bi=1001,uo=1002,jt=1003,Xh=1004;var Qs=1005;var on=1006,ro=1007;var ri=1008;var wi=1009,tp=1010,np=1011,fo=1012,qh=1013,ys=1014,Kn=1015,fn=1016,Yh=1017,Kh=1018,ur=1020,ip=35902,sp=1021,rp=1022,Un=1023,op=1024,ap=1025,rr=1026,dr=1027,jh=1028,$h=1029,lp=1030,Zh=1031;var Jh=1033,Ra=33776,Ca=33777,Ia=33778,Pa=33779,Ic=35840,Pc=35841,Lc=35842,Dc=35843,Uc=36196,Nc=37492,Fc=37496,Oc=37808,Bc=37809,kc=37810,Hc=37811,zc=37812,Gc=37813,Vc=37814,Wc=37815,Xc=37816,qc=37817,Yc=37818,Kc=37819,jc=37820,$c=37821,La=36492,Zc=36494,Jc=36495,cp=36283,Qc=36284,eh=36285,th=36286,g0=2200,x0=2201,_0=2202,fr=2300,pr=2301,Bl=2302,er=2400,tr=2401,Da=2402,Qh=2500,v0=2501,hp=0,dl=1,Uo=2,y0=3200,M0=3201;var up=0,E0=1,Vi="",mt="srgb",ln="srgb-linear",fl="linear",_t="srgb";var Bs=7680;var Dd=519,b0=512,S0=513,T0=514,dp=515,w0=516,A0=517,R0=518,C0=519,nh=35044;var Ud="300 es",Si=2e3,Ua=2001,Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nd=1234567,oo=Math.PI/180,mr=180/Math.PI;function Nn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function eu(i,e){return(i%e+e)%e}function I0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function P0(i,e,t){return i!==e?(t-i)/(e-i):0}function ao(i,e,t){return(1-t)*i+t*e}function L0(i,e,t,n){return ao(i,e,1-Math.exp(-t*n))}function D0(i,e=1){return e-Math.abs(eu(i,e*2)-e)}function U0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function N0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function F0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function O0(i,e){return i+Math.random()*(e-i)}function B0(i){return i*(.5-Math.random())}function k0(i){i!==void 0&&(Nd=i);let e=Nd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function H0(i){return i*oo}function z0(i){return i*mr}function G0(i){return(i&i-1)===0&&i!==0}function V0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function W0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function X0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var pl={DEG2RAD:oo,RAD2DEG:mr,generateUUID:Nn,clamp:Gt,euclideanModulo:eu,mapLinear:I0,inverseLerp:P0,lerp:ao,damp:L0,pingpong:D0,smoothstep:U0,smootherstep:N0,randInt:F0,randFloat:O0,randFloatSpread:B0,seededRandom:k0,degToRad:H0,radToDeg:z0,isPowerOfTwo:G0,ceilPowerOfTwo:V0,floorPowerOfTwo:W0,setQuaternionFromProperEuler:X0,normalize:Mt,denormalize:Yn},de=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],y=s[4],_=s[7],I=s[2],b=s[5],R=s[8];return r[0]=o*x+a*v+l*I,r[3]=o*m+a*y+l*b,r[6]=o*p+a*_+l*R,r[1]=c*x+u*v+h*I,r[4]=c*m+u*y+h*b,r[7]=c*p+u*_+h*R,r[2]=d*x+f*v+g*I,r[5]=d*m+f*y+g*b,r[8]=d*p+f*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kl.makeScale(e,t)),this}rotate(e){return this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kl=new nt;function fp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function q0(){let i=po("canvas");return i.style.display="block",i}var Fd={};function io(i){i in Fd||(Fd[i]=!0,console.warn(i))}function Y0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function K0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function j0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ot={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===_t&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===_t&&(i.r=or(i.r),i.g=or(i.g),i.b=or(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vi?fl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Od=[.64,.33,.3,.6,.15,.06],Bd=[.2126,.7152,.0722],kd=[.3127,.329],Hd=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zd=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[ln]:{primaries:Od,whitePoint:kd,transfer:fl,toXYZ:Hd,fromXYZ:zd,luminanceCoefficients:Bd,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:Od,whitePoint:kd,transfer:_t,toXYZ:Hd,fromXYZ:zd,luminanceCoefficients:Bd,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}});var ks,ih=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=po("canvas")),ks.width=e.width,ks.height=e.height;let n=ks.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=po("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ti(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$0=0,Na=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Hl(s[o].image)):r.push(Hl(s[o]))}else r=Hl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ih.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Z0=0,$t=class i extends Ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bi,s=bi,r=on,o=ri,a=Un,l=wi,c=i.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Nn(),this.name="",this.source=new Na(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=ep;$t.DEFAULT_ANISOTROPY=1;var ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(f+1)/2,I=(p+1)/2,b=(u+d)/4,R=(h+x)/4,P=(g+m)/4;return y>_&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=R/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=P/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=P/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sh=class extends Ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new $t(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Na(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends sh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fa=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rh=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let I=Math.sqrt(y),b=Math.atan2(I,p*v);m=Math.sin(m*b)/I,a=Math.sin(a*b)/I}let _=a*v;if(l=l*m+d*_,c=c*m+f*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zl=new C,Gd=new Nt,an=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Qo.subVectors(this.max,jr),Hs.subVectors(e.a,jr),zs.subVectors(e.b,jr),Gs.subVectors(e.c,jr),Oi.subVectors(zs,Hs),Bi.subVectors(Gs,zs),hs.subVectors(Hs,Gs);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-hs.z,hs.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,hs.z,0,-hs.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-hs.y,hs.x,0];return!Gl(t,Hs,zs,Gs,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Gl(t,Hs,zs,Gs,Qo))?!1:(ea.crossVectors(Oi,Bi),t=[ea.x,ea.y,ea.z],Gl(t,Hs,zs,Gs,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gi=[new C,new C,new C,new C,new C,new C,new C,new C],Vn=new C,Jo=new an,Hs=new C,zs=new C,Gs=new C,Oi=new C,Bi=new C,hs=new C,jr=new C,Qo=new C,ea=new C,us=new C;function Gl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){us.fromArray(i,r);let a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),u=n.dot(us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var J0=new an,$r=new C,Vl=new C,wn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):J0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);let t=$r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($r,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(Vl)),this.expandByPoint($r.copy(e.center).sub(Vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new C,Wl=new C,ta=new C,ki=new C,Xl=new C,na=new C,ql=new C,Ms=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wl.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Wl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ta),a=ki.dot(this.direction),l=-ki.dot(ta),c=ki.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Wl).addScaledVector(ta,d),f}intersectSphere(e,t){xi.subVectors(e.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,s,r){Xl.subVectors(t,e),na.subVectors(n,e),ql.crossVectors(Xl,na);let o=this.direction.dot(ql),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);let l=a*this.direction.dot(na.crossVectors(ki,na));if(l<0)return null;let c=a*this.direction.dot(Xl.cross(ki));if(c<0||l+c>o)return null;let u=-a*ki.dot(ql);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},je=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Q0,e,eg)}lookAt(e,t,n){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Hi.crossVectors(n,Sn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Hi.crossVectors(n,Sn)),Hi.normalize(),ia.crossVectors(Sn,Hi),s[0]=Hi.x,s[4]=ia.x,s[8]=Sn.x,s[1]=Hi.y,s[5]=ia.y,s[9]=Sn.y,s[2]=Hi.z,s[6]=ia.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],y=n[7],_=n[11],I=n[15],b=s[0],R=s[4],P=s[8],S=s[12],E=s[1],L=s[5],G=s[9],U=s[13],O=s[2],k=s[6],F=s[10],ne=s[14],X=s[3],pe=s[7],me=s[11],oe=s[15];return r[0]=o*b+a*E+l*O+c*X,r[4]=o*R+a*L+l*k+c*pe,r[8]=o*P+a*G+l*F+c*me,r[12]=o*S+a*U+l*ne+c*oe,r[1]=u*b+h*E+d*O+f*X,r[5]=u*R+h*L+d*k+f*pe,r[9]=u*P+h*G+d*F+f*me,r[13]=u*S+h*U+d*ne+f*oe,r[2]=g*b+x*E+m*O+p*X,r[6]=g*R+x*L+m*k+p*pe,r[10]=g*P+x*G+m*F+p*me,r[14]=g*S+x*U+m*ne+p*oe,r[3]=v*b+y*E+_*O+I*X,r[7]=v*R+y*L+_*k+I*pe,r[11]=v*P+y*G+_*F+I*me,r[15]=v*S+y*U+_*ne+I*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=h*m*c-x*d*c+x*l*f-a*m*f-h*l*p+a*d*p,y=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,_=u*x*c-g*h*c+g*a*f-o*x*f-u*a*p+o*h*p,I=g*h*l-u*x*l-g*a*d+o*x*d+u*a*m-o*h*m,b=t*v+n*y+s*_+r*I;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/b;return e[0]=v*R,e[1]=(x*d*r-h*m*r-x*s*f+n*m*f+h*s*p-n*d*p)*R,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*R,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*R,e[4]=y*R,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=_*R,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*R,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*R,e[12]=I*R,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*m+t*h*m)*R,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,v=l*c,y=l*u,_=l*h,I=n.x,b=n.y,R=n.z;return s[0]=(1-(x+p))*I,s[1]=(f+_)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(d+p))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Vs.set(s[0],s[1],s[2]).length(),o=Vs.set(s[4],s[5],s[6]).length(),a=Vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wn.copy(this);let c=1/r,u=1/o,h=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,t.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Si){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===Si)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ua)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Si){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u,g,x;if(a===Si)g=(o+r)*h,x=-2*h;else if(a===Ua)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Vs=new C,Wn=new je,Q0=new C(0,0,0),eg=new C(1,1,1),Hi=new C,ia=new C,Sn=new C,Vd=new je,Wd=new Nt,An=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},tg=0,Xd=new C,Ws=new Nt,_i=new je,sa=new C,Zr=new C,ng=new C,ig=new Nt,qd=new C(1,0,0),Yd=new C(0,1,0),Kd=new C(0,0,1),jd={type:"added"},sg={type:"removed"},Xs={type:"childadded",child:null},Yl={type:"childremoved",child:null},Rt=class i extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new An,n=new Nt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new nt}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(qd,e)}rotateY(e){return this.rotateOnAxis(Yd,e)}rotateZ(e){return this.rotateOnAxis(Kd,e)}translateOnAxis(e,t){return Xd.copy(e).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qd,e)}translateY(e){return this.translateOnAxis(Yd,e)}translateZ(e){return this.translateOnAxis(Kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sa.copy(e):sa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Zr,sa,this.up):_i.lookAt(sa,Zr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(_i),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sg),Yl.child=e,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,ng),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new C(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xn=new C,vi=new C,Kl=new C,yi=new C,qs=new C,Ys=new C,$d=new C,jl=new C,$l=new C,Zl=new C,Jl=new ct,Ql=new ct,ec=new ct,_s=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Xn.subVectors(e,t),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Xn.subVectors(s,t),vi.subVectors(n,t),Kl.subVectors(e,t);let o=Xn.dot(Xn),a=Xn.dot(vi),l=Xn.dot(Kl),c=vi.dot(vi),u=vi.dot(Kl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Jl.setScalar(0),Ql.setScalar(0),ec.setScalar(0),Jl.fromBufferAttribute(e,t),Ql.fromBufferAttribute(e,n),ec.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jl,r.x),o.addScaledVector(Ql,r.y),o.addScaledVector(ec,r.z),o}static isFrontFacing(e,t,n,s){return Xn.subVectors(n,t),vi.subVectors(e,t),Xn.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Xn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;qs.subVectors(s,n),Ys.subVectors(r,n),jl.subVectors(e,n);let l=qs.dot(jl),c=Ys.dot(jl);if(l<=0&&c<=0)return t.copy(n);$l.subVectors(e,s);let u=qs.dot($l),h=Ys.dot($l);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(qs,o);Zl.subVectors(e,r);let f=qs.dot(Zl),g=Ys.dot(Zl);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ys,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return $d.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector($d,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(qs,o).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function tc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=eu(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tc(o,r,e+1/3),this.g=tc(o,r,e),this.b=tc(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return ot.fromWorkingColorSpace(rn.copy(this),e),Math.round(Gt(rn.r*255,0,255))*65536+Math.round(Gt(rn.g*255,0,255))*256+Math.round(Gt(rn.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(rn.copy(this),t);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=mt){ot.fromWorkingColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,s=rn.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(ra);let n=ao(zi.h,ra.h,t),s=ao(zi.s,ra.s,t),r=ao(zi.l,ra.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Ce;Ce.NAMES=pp;var rg=0,Rn=class extends Ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Nn(),this.name="",this.blending=sr,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=yc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vc&&(n.blendSrc=this.blendSrc),this.blendDst!==yc&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Le=class extends Rn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new C,oa=new de,Ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nh,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nh&&(e.usage=this.usage),e}};var Oa=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ba=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},og=0,Dn=new je,nc=new Rt,Ks=new C,Tn=new an,Jr=new an,Yt=new C,Ct=class i extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fp(e)?Ba:Oa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Tn.min,Jr.min),Tn.expandByPoint(Yt),Yt.addVectors(Tn.max,Jr.max),Tn.expandByPoint(Yt)):(Tn.expandByPoint(Jr.min),Tn.expandByPoint(Jr.max))}Tn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(e,c),Yt.add(Ks)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new C,l[P]=new C;let c=new C,u=new C,h=new C,d=new de,f=new de,g=new de,x=new C,m=new C;function p(P,S,E){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[P].add(x),a[S].add(x),a[E].add(x),l[P].add(m),l[S].add(m),l[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,S=v.length;P<S;++P){let E=v[P],L=E.start,G=E.count;for(let U=L,O=L+G;U<O;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let y=new C,_=new C,I=new C,b=new C;function R(P){I.fromBufferAttribute(s,P),b.copy(I);let S=a[P];y.copy(S),y.sub(I.multiplyScalar(I.dot(S))).normalize(),_.crossVectors(b,S);let L=_.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,S=v.length;P<S;++P){let E=v[P],L=E.start,G=E.count;for(let U=L,O=L+G;U<O;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Ft(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zd=new je,ds=new Ms,aa=new wn,Jd=new C,la=new C,ca=new C,ha=new C,ic=new C,ua=new C,Qd=new C,da=new C,Y=class extends Rt{constructor(e=new Ct,t=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(ic.fromBufferAttribute(h,e),o?ua.addScaledVector(ic,u):ua.addScaledVector(ic.sub(t),u))}t.add(ua)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(aa.containsPoint(ds.origin)===!1&&(ds.intersectSphere(aa,Jd)===null||ds.origin.distanceToSquared(Jd)>(e.far-e.near)**2))&&(Zd.copy(r).invert(),ds.copy(e.ray).applyMatrix4(Zd),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,I=y;_<I;_+=3){let b=a.getX(_),R=a.getX(_+1),P=a.getX(_+2);s=fa(this,p,e,n,c,u,h,b,R,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=fa(this,o,e,n,c,u,h,v,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,I=y;_<I;_+=3){let b=_,R=_+1,P=_+2;s=fa(this,p,e,n,c,u,h,b,R,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=m,y=m+1,_=m+2;s=fa(this,o,e,n,c,u,h,v,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ag(i,e,t,n,s,r,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Fn,a),l===null)return null;da.copy(a),da.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(da);return c<t.near||c>t.far?null:{distance:c,point:da.clone(),object:i}}function fa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,la),i.getVertexPosition(l,ca),i.getVertexPosition(c,ha);let u=ag(i,e,t,n,la,ca,ha,Qd);if(u){let h=new C;_s.getBarycoord(Qd,la,ca,ha,h),s&&(u.uv=_s.getInterpolatedAttribute(s,a,l,c,h,new de)),r&&(u.uv1=_s.getInterpolatedAttribute(r,a,l,c,h,new de)),o&&(u.normal=_s.getInterpolatedAttribute(o,a,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};_s.getNormal(la,ca,ha,d.normal),u.face=d,u.barycoord=h}return u}var Xe=class i extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(h,2));function g(x,m,p,v,y,_,I,b,R,P,S){let E=_/R,L=I/P,G=_/2,U=I/2,O=b/2,k=R+1,F=P+1,ne=0,X=0,pe=new C;for(let me=0;me<F;me++){let oe=me*L-U;for(let Ue=0;Ue<k;Ue++){let Ze=Ue*E-G;pe[x]=Ze*v,pe[m]=oe*y,pe[p]=O,c.push(pe.x,pe.y,pe.z),pe[x]=0,pe[m]=0,pe[p]=b>0?1:-1,u.push(pe.x,pe.y,pe.z),h.push(Ue/R),h.push(1-me/P),ne+=1}}for(let me=0;me<P;me++)for(let oe=0;oe<R;oe++){let Ue=d+oe+k*me,Ze=d+oe+k*(me+1),ie=d+(oe+1)+k*(me+1),fe=d+(oe+1)+k*me;l.push(Ue,Ze,fe),l.push(Ze,ie,fe),X+=6}a.addGroup(f,X,S),f+=X,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function gr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function dn(i){let e={};for(let t=0;t<i.length;t++){let n=gr(i[t]);for(let s in n)e[s]=n[s]}return e}function lg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var ai={clone:gr,merge:dn},cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tt=class extends Rn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cg,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=lg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ka=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gi=new C,ef=new de,tf=new de,Ut=class extends ka{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,ef,tf),t.subVectors(tf,ef)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(oo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},js=-90,$s=1,oh=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut(js,$s,e,t);s.layers=this.layers,this.add(s);let r=new Ut(js,$s,e,t);r.layers=this.layers,this.add(r);let o=new Ut(js,$s,e,t);o.layers=this.layers,this.add(o);let a=new Ut(js,$s,e,t);a.layers=this.layers,this.add(a);let l=new Ut(js,$s,e,t);l.layers=this.layers,this.add(l);let c=new Ut(js,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ha=class extends $t{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:cr,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ah=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ha(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xe(5,5,5),r=new Tt({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:oi});r.uniforms.tEquirect.value=t;let o=new Y(s,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=on),new oh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},sc=new C,ug=new C,dg=new nt,qn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=sc.subVectors(n,t).cross(ug.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(sc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dg.getNormalMatrix(e),s=this.coplanarPoint(sc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new wn,pa=new C,go=class{constructor(e=new qn,t=new qn,n=new qn,s=new qn,r=new qn,o=new qn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,m-f,_-p).normalize(),n[1].setComponents(l+r,d+c,m+f,_+p).normalize(),n[2].setComponents(l+o,d+u,m+g,_+v).normalize(),n[3].setComponents(l-o,d-u,m-g,_-v).normalize(),n[4].setComponents(l-a,d-h,m-x,_-y).normalize(),t===Si)n[5].setComponents(l+a,d+h,m+x,_+y).normalize();else if(t===Ua)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(pa.x=s.normal.x>0?e.max.x:e.min.x,pa.y=s.normal.y>0?e.max.y:e.min.y,pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function fg(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var lt=class i extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let v=p*d-o;for(let y=0;y<c;y++){let _=y*h-r;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let y=v+c*p,_=v+c*(p+1),I=v+1+c*(p+1),b=v+1+c*p;f.push(y,_,b),f.push(_,I,b)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mg=`#ifdef USE_ALPHAHASH
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
#endif`,gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yg=`#ifdef USE_AOMAP
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
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eg=`#ifdef USE_BATCHING
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
#endif`,bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ag=`#ifdef USE_IRIDESCENCE
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
#endif`,Rg=`#ifdef USE_BUMPMAP
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
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Og=`#define PI 3.141592653589793
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
} // validated`,Bg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kg=`vec3 transformedNormal = objectNormal;
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
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ex=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tx=`#ifdef USE_GRADIENTMAP
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
}`,nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
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
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ux=`PhysicalMaterial material;
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
#endif`,dx=`struct PhysicalMaterial {
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
}`,fx=`
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
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
#endif`,mx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ex=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bx=`#if defined( USE_POINTS_UV )
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
#endif`,Sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ax=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
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
#endif`,Ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jx=`float getShadowMask() {
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
}`,Qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,t_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n_=`#ifdef USE_SKINNING
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
#endif`,i_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a_=`#ifdef USE_TRANSMISSION
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
#endif`,l_=`#ifdef USE_TRANSMISSION
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p_=`uniform sampler2D t2D;
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`#include <common>
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
}`,y_=`#if DEPTH_PACKING == 3200
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
}`,M_=`#define DISTANCE
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
}`,E_=`#define DISTANCE
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
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`uniform float scale;
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
}`,w_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,R_=`uniform vec3 diffuse;
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
}`,C_=`#define LAMBERT
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
}`,I_=`#define LAMBERT
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
}`,P_=`#define MATCAP
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
}`,L_=`#define MATCAP
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
}`,D_=`#define NORMAL
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
}`,U_=`#define NORMAL
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
}`,N_=`#define PHONG
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
}`,F_=`#define PHONG
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
}`,O_=`#define STANDARD
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
}`,B_=`#define STANDARD
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
}`,k_=`#define TOON
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
}`,H_=`#define TOON
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
}`,z_=`uniform float size;
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
}`,G_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,W_=`uniform vec3 color;
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
}`,X_=`uniform float rotation;
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
}`,q_=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:pg,alphahash_pars_fragment:mg,alphamap_fragment:gg,alphamap_pars_fragment:xg,alphatest_fragment:_g,alphatest_pars_fragment:vg,aomap_fragment:yg,aomap_pars_fragment:Mg,batching_pars_vertex:Eg,batching_vertex:bg,begin_vertex:Sg,beginnormal_vertex:Tg,bsdfs:wg,iridescence_fragment:Ag,bumpmap_pars_fragment:Rg,clipping_planes_fragment:Cg,clipping_planes_pars_fragment:Ig,clipping_planes_pars_vertex:Pg,clipping_planes_vertex:Lg,color_fragment:Dg,color_pars_fragment:Ug,color_pars_vertex:Ng,color_vertex:Fg,common:Og,cube_uv_reflection_fragment:Bg,defaultnormal_vertex:kg,displacementmap_pars_vertex:Hg,displacementmap_vertex:zg,emissivemap_fragment:Gg,emissivemap_pars_fragment:Vg,colorspace_fragment:Wg,colorspace_pars_fragment:Xg,envmap_fragment:qg,envmap_common_pars_fragment:Yg,envmap_pars_fragment:Kg,envmap_pars_vertex:jg,envmap_physical_pars_fragment:ox,envmap_vertex:$g,fog_vertex:Zg,fog_pars_vertex:Jg,fog_fragment:Qg,fog_pars_fragment:ex,gradientmap_pars_fragment:tx,lightmap_pars_fragment:nx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:sx,lights_pars_begin:rx,lights_toon_fragment:ax,lights_toon_pars_fragment:lx,lights_phong_fragment:cx,lights_phong_pars_fragment:hx,lights_physical_fragment:ux,lights_physical_pars_fragment:dx,lights_fragment_begin:fx,lights_fragment_maps:px,lights_fragment_end:mx,logdepthbuf_fragment:gx,logdepthbuf_pars_fragment:xx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:vx,map_fragment:yx,map_pars_fragment:Mx,map_particle_fragment:Ex,map_particle_pars_fragment:bx,metalnessmap_fragment:Sx,metalnessmap_pars_fragment:Tx,morphinstance_vertex:wx,morphcolor_vertex:Ax,morphnormal_vertex:Rx,morphtarget_pars_vertex:Cx,morphtarget_vertex:Ix,normal_fragment_begin:Px,normal_fragment_maps:Lx,normal_pars_fragment:Dx,normal_pars_vertex:Ux,normal_vertex:Nx,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:Bx,clearcoat_pars_fragment:kx,iridescence_pars_fragment:Hx,opaque_fragment:zx,packing:Gx,premultiplied_alpha_fragment:Vx,project_vertex:Wx,dithering_fragment:Xx,dithering_pars_fragment:qx,roughnessmap_fragment:Yx,roughnessmap_pars_fragment:Kx,shadowmap_pars_fragment:jx,shadowmap_pars_vertex:$x,shadowmap_vertex:Zx,shadowmask_pars_fragment:Jx,skinbase_vertex:Qx,skinning_pars_vertex:e_,skinning_vertex:t_,skinnormal_vertex:n_,specularmap_fragment:i_,specularmap_pars_fragment:s_,tonemapping_fragment:r_,tonemapping_pars_fragment:o_,transmission_fragment:a_,transmission_pars_fragment:l_,uv_pars_fragment:c_,uv_pars_vertex:h_,uv_vertex:u_,worldpos_vertex:d_,background_vert:f_,background_frag:p_,backgroundCube_vert:m_,backgroundCube_frag:g_,cube_vert:x_,cube_frag:__,depth_vert:v_,depth_frag:y_,distanceRGBA_vert:M_,distanceRGBA_frag:E_,equirect_vert:b_,equirect_frag:S_,linedashed_vert:T_,linedashed_frag:w_,meshbasic_vert:A_,meshbasic_frag:R_,meshlambert_vert:C_,meshlambert_frag:I_,meshmatcap_vert:P_,meshmatcap_frag:L_,meshnormal_vert:D_,meshnormal_frag:U_,meshphong_vert:N_,meshphong_frag:F_,meshphysical_vert:O_,meshphysical_frag:B_,meshtoon_vert:k_,meshtoon_frag:H_,points_vert:z_,points_frag:G_,shadow_vert:V_,shadow_frag:W_,sprite_vert:X_,sprite_frag:q_},Te={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},si={basic:{uniforms:dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ce(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:dn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:dn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ce(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:dn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:dn([Te.points,Te.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:dn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:dn([Te.common,Te.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:dn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:dn([Te.sprite,Te.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:dn([Te.common,Te.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:dn([Te.lights,Te.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};si.physical={uniforms:dn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var ma={r:0,b:0,g:0},ps=new An,Y_=new je;function K_(i,e,t,n,s,r,o){let a=new Ce(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function x(v){let y=!1,_=g(v);_===null?p(a,l):_&&_.isColor&&(p(_,1),y=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){let _=g(y);_&&(_.isCubeTexture||_.mapping===ul)?(u===void 0&&(u=new Y(new Xe(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:gr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ps.copy(y.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Y_.makeRotationFromEuler(ps)),u.material.toneMapped=ot.getTransfer(_.colorSpace)!==_t,(h!==_||d!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Y(new lt(2,2),new Tt({name:"BackgroundMaterial",uniforms:gr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ot.getTransfer(_.colorSpace)!==_t,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(ma,mp(i)),n.buffers.color.setClear(ma.r,ma.g,ma.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:x,addToRenderList:m}}function j_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(E,L,G,U,O){let k=!1,F=h(U,G,L);r!==F&&(r=F,c(r.object)),k=f(E,U,G,O),k&&g(E,U,G,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(E,L,G,U),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,L,G){let U=G.wireframe===!0,O=n[E.id];O===void 0&&(O={},n[E.id]=O);let k=O[L.id];k===void 0&&(k={},O[L.id]=k);let F=k[U];return F===void 0&&(F=d(l()),k[U]=F),F}function d(E){let L=[],G=[],U=[];for(let O=0;O<t;O++)L[O]=0,G[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:U,object:E,attributes:{},index:null}}function f(E,L,G,U){let O=r.attributes,k=L.attributes,F=0,ne=G.getAttributes();for(let X in ne)if(ne[X].location>=0){let me=O[X],oe=k[X];if(oe===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),me===void 0||me.attribute!==oe||oe&&me.data!==oe.data)return!0;F++}return r.attributesNum!==F||r.index!==U}function g(E,L,G,U){let O={},k=L.attributes,F=0,ne=G.getAttributes();for(let X in ne)if(ne[X].location>=0){let me=k[X];me===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(me=E.instanceColor));let oe={};oe.attribute=me,me&&me.data&&(oe.data=me.data),O[X]=oe,F++}r.attributes=O,r.attributesNum=F,r.index=U}function x(){let E=r.newAttributes;for(let L=0,G=E.length;L<G;L++)E[L]=0}function m(E){p(E,0)}function p(E,L){let G=r.newAttributes,U=r.enabledAttributes,O=r.attributeDivisors;G[E]=1,U[E]===0&&(i.enableVertexAttribArray(E),U[E]=1),O[E]!==L&&(i.vertexAttribDivisor(E,L),O[E]=L)}function v(){let E=r.newAttributes,L=r.enabledAttributes;for(let G=0,U=L.length;G<U;G++)L[G]!==E[G]&&(i.disableVertexAttribArray(G),L[G]=0)}function y(E,L,G,U,O,k,F){F===!0?i.vertexAttribIPointer(E,L,G,O,k):i.vertexAttribPointer(E,L,G,U,O,k)}function _(E,L,G,U){x();let O=U.attributes,k=G.getAttributes(),F=L.defaultAttributeValues;for(let ne in k){let X=k[ne];if(X.location>=0){let pe=O[ne];if(pe===void 0&&(ne==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),ne==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),pe!==void 0){let me=pe.normalized,oe=pe.itemSize,Ue=e.get(pe);if(Ue===void 0)continue;let Ze=Ue.buffer,ie=Ue.type,fe=Ue.bytesPerElement,K=ie===i.INT||ie===i.UNSIGNED_INT||pe.gpuType===qh;if(pe.isInterleavedBufferAttribute){let se=pe.data,xe=se.stride,Ae=pe.offset;if(se.isInstancedInterleavedBuffer){for(let we=0;we<X.locationSize;we++)p(X.location+we,se.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<X.locationSize;we++)m(X.location+we);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let we=0;we<X.locationSize;we++)y(X.location+we,oe/X.locationSize,ie,me,xe*fe,(Ae+oe/X.locationSize*we)*fe,K)}else{if(pe.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)p(X.location+se,pe.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let se=0;se<X.locationSize;se++)m(X.location+se);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let se=0;se<X.locationSize;se++)y(X.location+se,oe/X.locationSize,ie,me,oe*fe,oe/X.locationSize*se*fe,K)}}else if(F!==void 0){let me=F[ne];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(X.location,me);break;case 3:i.vertexAttrib3fv(X.location,me);break;case 4:i.vertexAttrib4fv(X.location,me);break;default:i.vertexAttrib1fv(X.location,me)}}}}v()}function I(){P();for(let E in n){let L=n[E];for(let G in L){let U=L[G];for(let O in U)u(U[O].object),delete U[O];delete L[G]}delete n[E]}}function b(E){if(n[E.id]===void 0)return;let L=n[E.id];for(let G in L){let U=L[G];for(let O in U)u(U[O].object),delete U[O];delete L[G]}delete n[E.id]}function R(E){for(let L in n){let G=n[L];if(G[E.id]===void 0)continue;let U=G[E.id];for(let O in U)u(U[O].object),delete U[O];delete G[E.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function $_(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Z_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==wi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Kn&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:I,maxSamples:b}}function J_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new qn,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let v=r?0:n,y=v*4,_=p.clippingState||null;l.value=_,_=u(g,d,y,f);for(let I=0;I!==y;++I)_[I]=t[I];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Q_(i){let e=new WeakMap;function t(o,a){return a===Rc?o.mapping=cr:a===Cc&&(o.mapping=hr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Rc||a===Cc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ah(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Yi=class extends ka{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nr=4,nf=[.125,.215,.35,.446,.526,.582],vs=20,rc=new Yi,sf=new Ce,oc=null,ac=0,lc=0,cc=!1,gs=(1+Math.sqrt(5))/2,Zs=1/gs,rf=[new C(-gs,Zs,0),new C(gs,Zs,0),new C(-Zs,0,gs),new C(Zs,0,gs),new C(0,gs,-Zs),new C(0,gs,Zs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],za=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,ac,lc),this._renderer.xr.enabled=cc,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),ac=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:fn,format:Un,colorSpace:ln,depthBuffer:!1},s=of(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ev(r)),this._blurMaterial=tv(r,e,t)}return s}_compileMaterial(e){let t=new Y(this._lodPlanes[0],e);this._renderer.compile(t,rc)}_sceneToCubeUV(e,t,n,s){let a=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(sf),u.toneMapping=Xi,u.autoClear=!1;let f=new Le({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new Y(new Xe,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(sf),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;ga(s,v*y,p>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===cr||e.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Y(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ga(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,rc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rf[(s-r-1)%rf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Y(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):vs;m>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);let p=[],v=0;for(let R=0;R<vs;++R){let P=R/x,S=Math.exp(-P*P/2);p.push(S),R===0?v+=S:R<m&&(v+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let _=this._sizeLods[s],I=3*_*(s>y-nr?s-y+nr:0),b=4*(this._cubeSize-_);ga(t,I,b,3*_,2*_),l.setRenderTarget(t),l.render(h,rc)}};function ev(i){let e=[],t=[],n=[],s=i,r=i-nr+1+nf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-nr?l=nf[o-i+nr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let b=0;b<f;b++){let R=b%3*2/3-1,P=b>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(S,x*g*b),y.set(d,m*g*b);let E=[b,b,b,b,b,b];_.set(E,p*g*b)}let I=new Ct;I.setAttribute("position",new Ft(v,x)),I.setAttribute("uv",new Ft(y,m)),I.setAttribute("faceIndex",new Ft(_,p)),e.push(I),s>nr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function of(i,e,t){let n=new Ht(i,e,t);return n.texture.mapping=ul,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tv(i,e,t){let n=new Float32Array(vs),s=new C(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tu(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function af(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function lf(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function tu(){return`

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
	`}function nv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Rc||l===Cc,u=l===cr||l===hr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new za(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new za(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function iv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&io("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sv(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let y=0,_=v.length;y<_;y+=3){let I=v[y+0],b=v[y+1],R=v[y+2];d.push(I,b,b,R,R,I)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let I=y+0,b=y+1,R=y+2;d.push(I,b,b,R,R,I)}}else return;let m=new(fp(d)?Ba:Oa)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function rv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*x[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ov(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function av(i,e,t){let n=new WeakMap,s=new ct;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,I=1;_>e.maxTextureSize&&(I=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let b=new Float32Array(_*I*4*h),R=new Fa(b,_,I,h);R.type=Kn,R.needsUpdate=!0;let P=y*4;for(let E=0;E<h;E++){let L=m[E],G=p[E],U=v[E],O=_*I*4*E;for(let k=0;k<L.count;k++){let F=k*P;f===!0&&(s.fromBufferAttribute(L,k),b[O+F+0]=s.x,b[O+F+1]=s.y,b[O+F+2]=s.z,b[O+F+3]=0),g===!0&&(s.fromBufferAttribute(G,k),b[O+F+4]=s.x,b[O+F+5]=s.y,b[O+F+6]=s.z,b[O+F+7]=0),x===!0&&(s.fromBufferAttribute(U,k),b[O+F+8]=s.x,b[O+F+9]=s.y,b[O+F+10]=s.z,b[O+F+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new de(_,I)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function lv(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ga=class extends $t{constructor(e,t,n,s,r,o,a,l,c,u=rr){if(u!==rr&&u!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===rr&&(n=ys),n===void 0&&u===dr&&(n=ur),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xp=new $t,cf=new Ga(1,1),_p=new Fa,vp=new rh,yp=new Ha,hf=[],uf=[],df=new Float32Array(16),ff=new Float32Array(9),pf=new Float32Array(4);function Tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=hf[s];if(r===void 0&&(r=new Float32Array(s),hf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ml(i,e){let t=uf[e];t===void 0&&(t=new Int32Array(e),uf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function cv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function fv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;pf.set(n),i.uniformMatrix2fv(this.addr,!1,pf),Wt(t,n)}}function pv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;ff.set(n),i.uniformMatrix3fv(this.addr,!1,ff),Wt(t,n)}}function mv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;df.set(n),i.uniformMatrix4fv(this.addr,!1,df),Wt(t,n)}}function gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function yv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function Ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function Sv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cf.compareFunction=dp,r=cf):r=xp,t.setTexture2D(e||r,s)}function Tv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vp,s)}function wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yp,s)}function Av(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_p,s)}function Rv(i){switch(i){case 5126:return cv;case 35664:return hv;case 35665:return uv;case 35666:return dv;case 35674:return fv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return gv;case 35667:case 35671:return xv;case 35668:case 35672:return _v;case 35669:case 35673:return vv;case 5125:return yv;case 36294:return Mv;case 36295:return Ev;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return Av}}function Cv(i,e){i.uniform1fv(this.addr,e)}function Iv(i,e){let t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Pv(i,e){let t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function Lv(i,e){let t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function Dv(i,e){let t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Uv(i,e){let t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Nv(i,e){let t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fv(i,e){i.uniform1iv(this.addr,e)}function Ov(i,e){i.uniform2iv(this.addr,e)}function Bv(i,e){i.uniform3iv(this.addr,e)}function kv(i,e){i.uniform4iv(this.addr,e)}function Hv(i,e){i.uniform1uiv(this.addr,e)}function zv(i,e){i.uniform2uiv(this.addr,e)}function Gv(i,e){i.uniform3uiv(this.addr,e)}function Vv(i,e){i.uniform4uiv(this.addr,e)}function Wv(i,e,t){let n=this.cache,s=e.length,r=ml(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||xp,r[o])}function Xv(i,e,t){let n=this.cache,s=e.length,r=ml(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||vp,r[o])}function qv(i,e,t){let n=this.cache,s=e.length,r=ml(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yp,r[o])}function Yv(i,e,t){let n=this.cache,s=e.length,r=ml(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_p,r[o])}function Kv(i){switch(i){case 5126:return Cv;case 35664:return Iv;case 35665:return Pv;case 35666:return Lv;case 35674:return Dv;case 35675:return Uv;case 35676:return Nv;case 5124:case 35670:return Fv;case 35667:case 35671:return Ov;case 35668:case 35672:return Bv;case 35669:case 35673:return kv;case 5125:return Hv;case 36294:return zv;case 36295:return Gv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Yv}}var lh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rv(t.type)}},ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kv(t.type)}},hh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},hc=/(\w+)(\])?(\[|\.)?/g;function mf(i,e){i.seq.push(e),i.map[e.id]=e}function jv(i,e,t){let n=i.name,s=n.length;for(hc.lastIndex=0;;){let r=hc.exec(n),o=hc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mf(t,c===void 0?new lh(a,i,e):new ch(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new hh(a),mf(t,h)),t=h}}}var ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);jv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function gf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $v=37297,Zv=0;function Jv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var xf=new nt;function Qv(i){ot._getMatrix(xf,ot.workingColorSpace,i);let e=`mat3( ${xf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case fl:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _f(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Jv(i.getShaderSource(e),o)}else return s}function ey(i,e){let t=Qv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ty(i,e){let t;switch(e){case Hh:t="Linear";break;case zh:t="Reinhard";break;case Gh:t="Cineon";break;case Sr:t="ACESFilmic";break;case Vh:t="AgX";break;case Wh:t="Neutral";break;case p0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xa=new C;function ny(){ot.getLuminanceCoefficients(xa);let i=xa.x.toFixed(4),e=xa.y.toFixed(4),t=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function sy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ry(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function so(i){return i!==""}function vf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(i){return i.replace(oy,ly)}var ay=new Map;function ly(i,e){let t=st[e];if(t===void 0){let n=ay.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uh(t)}var cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mf(i){return i.replace(cy,hy)}function hy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ef(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function uy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ym?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function dy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cr:case hr:e="ENVMAP_TYPE_CUBE";break;case ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function py(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qf:e="ENVMAP_BLENDING_MULTIPLY";break;case d0:e="ENVMAP_BLENDING_MIX";break;case f0:e="ENVMAP_BLENDING_ADD";break}return e}function my(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function gy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=uy(t),c=dy(t),u=fy(t),h=py(t),d=my(t),f=iy(t),g=sy(r),x=s.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),p.length>0&&(p+=`
`)):(m=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[Ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?st.tonemapping_pars_fragment:"",t.toneMapping!==Xi?ty("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,ey("linearToOutputTexel",t.outputColorSpace),ny(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),o=uh(o),o=vf(o,t),o=yf(o,t),a=uh(a),a=vf(a,t),a=yf(a,t),o=Mf(o),a=Mf(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+m+o,_=v+p+a,I=gf(s,s.VERTEX_SHADER,y),b=gf(s,s.FRAGMENT_SHADER,_);s.attachShader(x,I),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(I).trim(),O=s.getShaderInfoLog(b).trim(),k=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,b);else{let ne=_f(s,I,"vertex"),X=_f(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+ne+`
`+X)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(U===""||O==="")&&(F=!1);F&&(L.diagnostics={runnable:k,programLog:G,vertexShader:{log:U,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(I),s.deleteShader(b),P=new ar(s,x),S=ry(s,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,$v)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=b,this}var xy=0,dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fh(e),t.set(e,n)),n}},fh=class{constructor(e){this.id=xy++,this.code=e,this.usedTimes=0}};function _y(i,e,t,n,s,r,o){let a=new mo,l=new dh,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,E,L,G,U){let O=G.fog,k=U.geometry,F=S.isMeshStandardMaterial?G.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),X=ne&&ne.mapping===ul?ne.image.height:null,pe=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let me=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,oe=me!==void 0?me.length:0,Ue=0;k.morphAttributes.position!==void 0&&(Ue=1),k.morphAttributes.normal!==void 0&&(Ue=2),k.morphAttributes.color!==void 0&&(Ue=3);let Ze,ie,fe,K;if(pe){let yt=si[pe];Ze=yt.vertexShader,ie=yt.fragmentShader}else Ze=S.vertexShader,ie=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),K=l.getFragmentShaderID(S);let se=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ae=U.isInstancedMesh===!0,we=U.isBatchedMesh===!0,Ye=!!S.map,ce=!!S.matcap,_e=!!ne,w=!!S.aoMap,j=!!S.lightMap,q=!!S.bumpMap,he=!!S.normalMap,D=!!S.displacementMap,V=!!S.emissiveMap,B=!!S.metalnessMap,T=!!S.roughnessMap,M=S.anisotropy>0,N=S.clearcoat>0,$=S.dispersion>0,le=S.iridescence>0,Q=S.sheen>0,be=S.transmission>0,ee=M&&!!S.anisotropyMap,ve=N&&!!S.clearcoatMap,We=N&&!!S.clearcoatNormalMap,ae=N&&!!S.clearcoatRoughnessMap,Ee=le&&!!S.iridescenceMap,Oe=le&&!!S.iridescenceThicknessMap,ke=Q&&!!S.sheenColorMap,Se=Q&&!!S.sheenRoughnessMap,Qe=!!S.specularMap,qe=!!S.specularColorMap,vt=!!S.specularIntensityMap,H=be&&!!S.transmissionMap,Re=be&&!!S.thicknessMap,te=!!S.gradientMap,ue=!!S.alphaMap,De=S.alphaTest>0,Ie=!!S.alphaHash,et=!!S.extensions,Dt=Xi;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Dt=i.toneMapping);let nn={shaderID:pe,shaderType:S.type,shaderName:S.name,vertexShader:Ze,fragmentShader:ie,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:we,batchingColor:we&&U._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&U.instanceColor!==null,instancingMorph:Ae&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ln,alphaToCoverage:!!S.alphaToCoverage,map:Ye,matcap:ce,envMap:_e,envMapMode:_e&&ne.mapping,envMapCubeUVHeight:X,aoMap:w,lightMap:j,bumpMap:q,normalMap:he,displacementMap:d&&D,emissiveMap:V,normalMapObjectSpace:he&&S.normalMapType===E0,normalMapTangentSpace:he&&S.normalMapType===up,metalnessMap:B,roughnessMap:T,anisotropy:M,anisotropyMap:ee,clearcoat:N,clearcoatMap:ve,clearcoatNormalMap:We,clearcoatRoughnessMap:ae,dispersion:$,iridescence:le,iridescenceMap:Ee,iridescenceThicknessMap:Oe,sheen:Q,sheenColorMap:ke,sheenRoughnessMap:Se,specularMap:Qe,specularColorMap:qe,specularIntensityMap:vt,transmission:be,transmissionMap:H,thicknessMap:Re,gradientMap:te,opaque:S.transparent===!1&&S.blending===sr&&S.alphaToCoverage===!1,alphaMap:ue,alphaTest:De,alphaHash:Ie,combine:S.combine,mapUv:Ye&&x(S.map.channel),aoMapUv:w&&x(S.aoMap.channel),lightMapUv:j&&x(S.lightMap.channel),bumpMapUv:q&&x(S.bumpMap.channel),normalMapUv:he&&x(S.normalMap.channel),displacementMapUv:D&&x(S.displacementMap.channel),emissiveMapUv:V&&x(S.emissiveMap.channel),metalnessMapUv:B&&x(S.metalnessMap.channel),roughnessMapUv:T&&x(S.roughnessMap.channel),anisotropyMapUv:ee&&x(S.anisotropyMap.channel),clearcoatMapUv:ve&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:We&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(S.sheenRoughnessMap.channel),specularMapUv:Qe&&x(S.specularMap.channel),specularColorMapUv:qe&&x(S.specularColorMap.channel),specularIntensityMapUv:vt&&x(S.specularIntensityMap.channel),transmissionMapUv:H&&x(S.transmissionMap.channel),thicknessMapUv:Re&&x(S.thicknessMap.channel),alphaMapUv:ue&&x(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(he||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(Ye||ue),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xe,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ue,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ye&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:V&&S.emissiveMap.isVideoTexture===!0&&ot.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===It,flipSided:S.side===Kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:et&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&S.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return nn.vertexUv1s=c.has(1),nn.vertexUv2s=c.has(2),nn.vertexUv3s=c.has(3),c.clear(),nn}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)E.push(L),E.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(v(E,S),y(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function y(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let E=g[S.type],L;if(E){let G=si[E];L=ai.clone(G.uniforms)}else L=S.uniforms;return L}function I(S,E){let L;for(let G=0,U=u.length;G<U;G++){let O=u[G];if(O.cacheKey===E){L=O,++L.usedTimes;break}}return L===void 0&&(L=new gy(i,E,S,r),u.push(L)),L}function b(S){if(--S.usedTimes===0){let E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:b,releaseShaderCache:R,programs:u,dispose:P}}function vy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function yy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||yy),n.length>1&&n.sort(d||bf),s.length>1&&s.sort(d||bf)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function My(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Sf,i.set(n,[o])):s>=r.length?(o=new Sf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ey(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ce};break;case"SpotLight":t={position:new C,direction:new C,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function by(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Sy=0;function Ty(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wy(i){let e=new Ey,t=by(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new je,o=new je;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,y=0,_=0,I=0,b=0,R=0;c.sort(Ty);for(let S=0,E=c.length;S<E;S++){let L=c[S],G=L.color,U=L.intensity,O=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=G.r*U,h+=G.g*U,d+=G.b*U;else if(L.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(L.sh.coefficients[F],U);R++}else if(L.isDirectionalLight){let F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ne=L.shadow,X=t.get(L);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=F,f++}else if(L.isSpotLight){let F=e.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(G).multiplyScalar(U),F.distance=O,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,n.spot[x]=F;let ne=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,ne.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[x]=ne.matrix,L.castShadow){let X=t.get(L);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=k,_++}x++}else if(L.isRectAreaLight){let F=e.get(L);F.color.copy(G).multiplyScalar(U),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=F,m++}else if(L.isPointLight){let F=e.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity),F.distance=L.distance,F.decay=L.decay,L.castShadow){let ne=L.shadow,X=t.get(L);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,X.shadowCameraNear=ne.camera.near,X.shadowCameraFar=ne.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=F,g++}else if(L.isHemisphereLight){let F=e.get(L);F.skyColor.copy(L.color).multiplyScalar(U),F.groundColor.copy(L.groundColor).multiplyScalar(U),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==_||P.numSpotMaps!==I||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+I-b,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=_,P.numSpotMaps=I,P.numLightProbes=R,n.version=Sy++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let y=c[p];if(y.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Tf(i){let e=new wy(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ay(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Tf(i),e.set(s,[a])):r>=o.length?(a=new Tf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ph=class extends Rn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mh=class extends Rn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cy=`uniform sampler2D shadow_pass;
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
}`;function Iy(i,e,t){let n=new go,s=new de,r=new de,o=new ct,a=new ph({depthPacking:M0}),l=new mh,c={},u=t.maxTextureSize,h={[Fn]:Kt,[Kt]:Fn,[It]:It},d=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Ry,fragmentShader:Cy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ct;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Y(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jf;let p=this.type;this.render=function(b,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),G=i.state;G.setBlending(oi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let U=p!==Ei&&this.type===Ei,O=p===Ei&&this.type!==Ei;for(let k=0,F=b.length;k<F;k++){let ne=b[k],X=ne.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let pe=X.getFrameExtents();if(s.multiply(pe),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,X.mapSize.y=r.y)),X.map===null||U===!0||O===!0){let oe=this.type!==Ei?{minFilter:jt,magFilter:jt}:{};X.map!==null&&X.map.dispose(),X.map=new Ht(s.x,s.y,oe),X.map.texture.name=ne.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let me=X.getViewportCount();for(let oe=0;oe<me;oe++){let Ue=X.getViewport(oe);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),G.viewport(o),X.updateMatrices(ne,oe),n=X.getFrustum(),_(R,P,X.camera,ne,this.type)}X.isPointLightShadow!==!0&&this.type===Ei&&v(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,E,L)};function v(b,R){let P=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ht(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,P,f,x,null)}function y(b,R,P,S){let E=null,L=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)E=L;else if(E=P.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=E.uuid,U=R.uuid,O=c[G];O===void 0&&(O={},c[G]=O);let k=O[U];k===void 0&&(k=E.clone(),O[U]=k,R.addEventListener("dispose",I)),E=k}if(E.visible=R.visible,E.wireframe=R.wireframe,S===Ei?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:h[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=i.properties.get(E);G.light=P}return E}function _(b,R,P,S,E){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Ei)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);let U=e.update(b),O=b.material;if(Array.isArray(O)){let k=U.groups;for(let F=0,ne=k.length;F<ne;F++){let X=k[F],pe=O[X.materialIndex];if(pe&&pe.visible){let me=y(b,pe,S,E);b.onBeforeShadow(i,b,R,P,U,me,X),i.renderBufferDirect(P,null,U,me,b,X),b.onAfterShadow(i,b,R,P,U,me,X)}}}else if(O.visible){let k=y(b,O,S,E);b.onBeforeShadow(i,b,R,P,U,k,null),i.renderBufferDirect(P,null,U,k,b,null),b.onAfterShadow(i,b,R,P,U,k,null)}}let G=b.children;for(let U=0,O=G.length;U<O;U++)_(G[U],R,P,S,E)}function I(b){b.target.removeEventListener("dispose",I);for(let P in c){let S=c[P],E=b.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var Py={[Mc]:Ec,[bc]:wc,[Sc]:Ac,[lr]:Tc,[Ec]:Mc,[wc]:bc,[Ac]:Sc,[Tc]:lr};function Ly(i,e){function t(){let H=!1,Re=new ct,te=null,ue=new ct(0,0,0,0);return{setMask:function(De){te!==De&&!H&&(i.colorMask(De,De,De,De),te=De)},setLocked:function(De){H=De},setClear:function(De,Ie,et,Dt,nn){nn===!0&&(De*=Dt,Ie*=Dt,et*=Dt),Re.set(De,Ie,et,Dt),ue.equals(Re)===!1&&(i.clearColor(De,Ie,et,Dt),ue.copy(Re))},reset:function(){H=!1,te=null,ue.set(-1,0,0,0)}}}function n(){let H=!1,Re=!1,te=null,ue=null,De=null;return{setReversed:function(Ie){if(Re!==Ie){let et=e.get("EXT_clip_control");Re?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);let Dt=De;De=null,this.setClear(Dt)}Re=Ie},getReversed:function(){return Re},setTest:function(Ie){Ie?se(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Ie){te!==Ie&&!H&&(i.depthMask(Ie),te=Ie)},setFunc:function(Ie){if(Re&&(Ie=Py[Ie]),ue!==Ie){switch(Ie){case Mc:i.depthFunc(i.NEVER);break;case Ec:i.depthFunc(i.ALWAYS);break;case bc:i.depthFunc(i.LESS);break;case lr:i.depthFunc(i.LEQUAL);break;case Sc:i.depthFunc(i.EQUAL);break;case Tc:i.depthFunc(i.GEQUAL);break;case wc:i.depthFunc(i.GREATER);break;case Ac:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Ie}},setLocked:function(Ie){H=Ie},setClear:function(Ie){De!==Ie&&(Re&&(Ie=1-Ie),i.clearDepth(Ie),De=Ie)},reset:function(){H=!1,te=null,ue=null,De=null,Re=!1}}}function s(){let H=!1,Re=null,te=null,ue=null,De=null,Ie=null,et=null,Dt=null,nn=null;return{setTest:function(yt){H||(yt?se(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(yt){Re!==yt&&!H&&(i.stencilMask(yt),Re=yt)},setFunc:function(yt,zn,pi){(te!==yt||ue!==zn||De!==pi)&&(i.stencilFunc(yt,zn,pi),te=yt,ue=zn,De=pi)},setOp:function(yt,zn,pi){(Ie!==yt||et!==zn||Dt!==pi)&&(i.stencilOp(yt,zn,pi),Ie=yt,et=zn,Dt=pi)},setLocked:function(yt){H=yt},setClear:function(yt){nn!==yt&&(i.clearStencil(yt),nn=yt)},reset:function(){H=!1,Re=null,te=null,ue=null,De=null,Ie=null,et=null,Dt=null,nn=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,I=null,b=null,R=new Ce(0,0,0),P=0,S=!1,E=null,L=null,G=null,U=null,O=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,ne=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=ne>=2);let pe=null,me={},oe=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Ze=new ct().fromArray(oe),ie=new ct().fromArray(Ue);function fe(H,Re,te,ue){let De=new Uint8Array(4),Ie=i.createTexture();i.bindTexture(H,Ie),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<te;et++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Re+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Ie}let K={};K[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(lr),q(!1),he(Cd),se(i.CULL_FACE),w(oi);function se(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function xe(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function Ae(H,Re){return h[H]!==Re?(i.bindFramebuffer(H,Re),h[H]=Re,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Re),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function we(H,Re){let te=f,ue=!1;if(H){te=d.get(Re),te===void 0&&(te=[],d.set(Re,te));let De=H.textures;if(te.length!==De.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Ie=0,et=De.length;Ie<et;Ie++)te[Ie]=i.COLOR_ATTACHMENT0+Ie;te.length=De.length,ue=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,ue=!0);ue&&i.drawBuffers(te)}function Ye(H){return g!==H?(i.useProgram(H),g=H,!0):!1}let ce={[xs]:i.FUNC_ADD,[jm]:i.FUNC_SUBTRACT,[$m]:i.FUNC_REVERSE_SUBTRACT};ce[Zm]=i.MIN,ce[Jm]=i.MAX;let _e={[Qm]:i.ZERO,[e0]:i.ONE,[t0]:i.SRC_COLOR,[vc]:i.SRC_ALPHA,[a0]:i.SRC_ALPHA_SATURATE,[r0]:i.DST_COLOR,[i0]:i.DST_ALPHA,[n0]:i.ONE_MINUS_SRC_COLOR,[yc]:i.ONE_MINUS_SRC_ALPHA,[o0]:i.ONE_MINUS_DST_COLOR,[s0]:i.ONE_MINUS_DST_ALPHA,[l0]:i.CONSTANT_COLOR,[c0]:i.ONE_MINUS_CONSTANT_COLOR,[h0]:i.CONSTANT_ALPHA,[u0]:i.ONE_MINUS_CONSTANT_ALPHA};function w(H,Re,te,ue,De,Ie,et,Dt,nn,yt){if(H===oi){x===!0&&(xe(i.BLEND),x=!1);return}if(x===!1&&(se(i.BLEND),x=!0),H!==Km){if(H!==m||yt!==S){if((p!==xs||_!==xs)&&(i.blendEquation(i.FUNC_ADD),p=xs,_=xs),yt)switch(H){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jn:i.blendFunc(i.ONE,i.ONE);break;case Id:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Id:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,y=null,I=null,b=null,R.set(0,0,0),P=0,m=H,S=yt}return}De=De||Re,Ie=Ie||te,et=et||ue,(Re!==p||De!==_)&&(i.blendEquationSeparate(ce[Re],ce[De]),p=Re,_=De),(te!==v||ue!==y||Ie!==I||et!==b)&&(i.blendFuncSeparate(_e[te],_e[ue],_e[Ie],_e[et]),v=te,y=ue,I=Ie,b=et),(Dt.equals(R)===!1||nn!==P)&&(i.blendColor(Dt.r,Dt.g,Dt.b,nn),R.copy(Dt),P=nn),m=H,S=!1}function j(H,Re){H.side===It?xe(i.CULL_FACE):se(i.CULL_FACE);let te=H.side===Kt;Re&&(te=!te),q(te),H.blending===sr&&H.transparent===!1?w(oi):w(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let ue=H.stencilWrite;a.setTest(ue),ue&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),V(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function q(H){E!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),E=H)}function he(H){H!==Xm?(se(i.CULL_FACE),H!==L&&(H===Cd?i.cullFace(i.BACK):H===qm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),L=H}function D(H){H!==G&&(F&&i.lineWidth(H),G=H)}function V(H,Re,te){H?(se(i.POLYGON_OFFSET_FILL),(U!==Re||O!==te)&&(i.polygonOffset(Re,te),U=Re,O=te)):xe(i.POLYGON_OFFSET_FILL)}function B(H){H?se(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function T(H){H===void 0&&(H=i.TEXTURE0+k-1),pe!==H&&(i.activeTexture(H),pe=H)}function M(H,Re,te){te===void 0&&(pe===null?te=i.TEXTURE0+k-1:te=pe);let ue=me[te];ue===void 0&&(ue={type:void 0,texture:void 0},me[te]=ue),(ue.type!==H||ue.texture!==Re)&&(pe!==te&&(i.activeTexture(te),pe=te),i.bindTexture(H,Re||K[H]),ue.type=H,ue.texture=Re)}function N(){let H=me[pe];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(H){Ze.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Ze.copy(H))}function Se(H){ie.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),ie.copy(H))}function Qe(H,Re){let te=c.get(Re);te===void 0&&(te=new WeakMap,c.set(Re,te));let ue=te.get(H);ue===void 0&&(ue=i.getUniformBlockIndex(Re,H.name),te.set(H,ue))}function qe(H,Re){let ue=c.get(Re).get(H);l.get(Re)!==ue&&(i.uniformBlockBinding(Re,ue,H.__bindingPointIndex),l.set(Re,ue))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},pe=null,me={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,I=null,b=null,R=new Ce(0,0,0),P=0,S=!1,E=null,L=null,G=null,U=null,O=null,Ze.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:xe,bindFramebuffer:Ae,drawBuffers:we,useProgram:Ye,setBlending:w,setMaterial:j,setFlipSided:q,setCullFace:he,setLineWidth:D,setPolygonOffset:V,setScissorTest:B,activeTexture:T,bindTexture:M,unbindTexture:N,compressedTexImage2D:$,compressedTexImage3D:le,texImage2D:Ee,texImage3D:Oe,updateUBOMapping:Qe,uniformBlockBinding:qe,texStorage2D:We,texStorage3D:ae,texSubImage2D:Q,texSubImage3D:be,compressedTexSubImage2D:ee,compressedTexSubImage3D:ve,scissor:ke,viewport:Se,reset:vt}}function wf(i,e,t,n){let s=Dy(n);switch(t){case sp:return i*e;case op:return i*e;case ap:return i*e*2;case jh:return i*e/s.components*s.byteLength;case $h:return i*e/s.components*s.byteLength;case lp:return i*e*2/s.components*s.byteLength;case Zh:return i*e*2/s.components*s.byteLength;case rp:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case Jh:return i*e*4/s.components*s.byteLength;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Dc:return Math.max(i,16)*Math.max(e,8)/4;case Ic:case Lc:return Math.max(i,8)*Math.max(e,8)/2;case Uc:case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case La:case Zc:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cp:case Qc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case eh:case th:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dy(i){switch(i){case wi:case tp:return{byteLength:1,components:1};case fo:case np:case fn:return{byteLength:2,components:1};case Yh:case Kh:return{byteLength:2,components:4};case ys:case qh:case Kn:return{byteLength:4,components:1};case ip:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Uy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):po("canvas")}function x(T,M,N){let $=1,le=B(T);if((le.width>N||le.height>N)&&($=N/Math.max(le.width,le.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Q=Math.floor($*le.width),be=Math.floor($*le.height);h===void 0&&(h=g(Q,be));let ee=M?g(Q,be):h;return ee.width=Q,ee.height=be,ee.getContext("2d").drawImage(T,0,0,Q,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Q+"x"+be+")."),ee}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,M,N,$,le=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=M;if(M===i.RED&&(N===i.FLOAT&&(Q=i.R32F),N===i.HALF_FLOAT&&(Q=i.R16F),N===i.UNSIGNED_BYTE&&(Q=i.R8)),M===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.R8UI),N===i.UNSIGNED_SHORT&&(Q=i.R16UI),N===i.UNSIGNED_INT&&(Q=i.R32UI),N===i.BYTE&&(Q=i.R8I),N===i.SHORT&&(Q=i.R16I),N===i.INT&&(Q=i.R32I)),M===i.RG&&(N===i.FLOAT&&(Q=i.RG32F),N===i.HALF_FLOAT&&(Q=i.RG16F),N===i.UNSIGNED_BYTE&&(Q=i.RG8)),M===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RG8UI),N===i.UNSIGNED_SHORT&&(Q=i.RG16UI),N===i.UNSIGNED_INT&&(Q=i.RG32UI),N===i.BYTE&&(Q=i.RG8I),N===i.SHORT&&(Q=i.RG16I),N===i.INT&&(Q=i.RG32I)),M===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),N===i.UNSIGNED_INT&&(Q=i.RGB32UI),N===i.BYTE&&(Q=i.RGB8I),N===i.SHORT&&(Q=i.RGB16I),N===i.INT&&(Q=i.RGB32I)),M===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),N===i.UNSIGNED_INT&&(Q=i.RGBA32UI),N===i.BYTE&&(Q=i.RGBA8I),N===i.SHORT&&(Q=i.RGBA16I),N===i.INT&&(Q=i.RGBA32I)),M===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),M===i.RGBA){let be=le?fl:ot.getTransfer($);N===i.FLOAT&&(Q=i.RGBA32F),N===i.HALF_FLOAT&&(Q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Q=be===_t?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(T,M){let N;return T?M===null||M===ys||M===ur?N=i.DEPTH24_STENCIL8:M===Kn?N=i.DEPTH32F_STENCIL8:M===fo&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ys||M===ur?N=i.DEPTH_COMPONENT24:M===Kn?N=i.DEPTH_COMPONENT32F:M===fo&&(N=i.DEPTH_COMPONENT16),N}function I(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==jt&&T.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function b(T){let M=T.target;M.removeEventListener("dispose",b),P(M),M.isVideoTexture&&u.delete(M)}function R(T){let M=T.target;M.removeEventListener("dispose",R),E(M)}function P(T){let M=n.get(T);if(M.__webglInit===void 0)return;let N=T.source,$=d.get(N);if($){let le=$[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&S(T),Object.keys($).length===0&&d.delete(N)}n.remove(T)}function S(T){let M=n.get(T);i.deleteTexture(M.__webglTexture);let N=T.source,$=d.get(N);delete $[M.__cacheKey],o.memory.textures--}function E(T){let M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let le=0;le<M.__webglFramebuffer[$].length;le++)i.deleteFramebuffer(M.__webglFramebuffer[$][le]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let N=T.textures;for(let $=0,le=N.length;$<le;$++){let Q=n.get(N[$]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(N[$])}n.remove(T)}let L=0;function G(){L=0}function U(){let T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function O(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function k(T,M){let N=n.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){let $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(N,T,M);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+M)}function F(T,M){let N=n.get(T);if(T.version>0&&N.__version!==T.version){ie(N,T,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+M)}function ne(T,M){let N=n.get(T);if(T.version>0&&N.__version!==T.version){ie(N,T,M);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+M)}function X(T,M){let N=n.get(T);if(T.version>0&&N.__version!==T.version){fe(N,T,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+M)}let pe={[$n]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[uo]:i.MIRRORED_REPEAT},me={[jt]:i.NEAREST,[Xh]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},oe={[b0]:i.NEVER,[C0]:i.ALWAYS,[S0]:i.LESS,[dp]:i.LEQUAL,[T0]:i.EQUAL,[R0]:i.GEQUAL,[w0]:i.GREATER,[A0]:i.NOTEQUAL};function Ue(T,M){if(M.type===Kn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===on||M.magFilter===ro||M.magFilter===Qs||M.magFilter===ri||M.minFilter===on||M.minFilter===ro||M.minFilter===Qs||M.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,pe[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,pe[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,pe[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,me[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jt||M.minFilter!==Qs&&M.minFilter!==ri||M.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ze(T,M){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",b));let $=M.source,le=d.get($);le===void 0&&(le={},d.set($,le));let Q=O(M);if(Q!==T.__cacheKey){le[Q]===void 0&&(le[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),le[Q].usedTimes++;let be=le[T.__cacheKey];be!==void 0&&(le[T.__cacheKey].usedTimes--,be.usedTimes===0&&S(M)),T.__cacheKey=Q,T.__webglTexture=le[Q].texture}return N}function ie(T,M,N){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);let le=Ze(T,M),Q=M.source;t.bindTexture($,T.__webglTexture,i.TEXTURE0+N);let be=n.get(Q);if(Q.version!==be.__version||le===!0){t.activeTexture(i.TEXTURE0+N);let ee=ot.getPrimaries(ot.workingColorSpace),ve=M.colorSpace===Vi?null:ot.getPrimaries(M.colorSpace),We=M.colorSpace===Vi||ee===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ae=x(M.image,!1,s.maxTextureSize);ae=V(M,ae);let Ee=r.convert(M.format,M.colorSpace),Oe=r.convert(M.type),ke=y(M.internalFormat,Ee,Oe,M.colorSpace,M.isVideoTexture);Ue($,M);let Se,Qe=M.mipmaps,qe=M.isVideoTexture!==!0,vt=be.__version===void 0||le===!0,H=Q.dataReady,Re=I(M,ae);if(M.isDepthTexture)ke=_(M.format===dr,M.type),vt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,ke,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,ke,ae.width,ae.height,0,Ee,Oe,null));else if(M.isDataTexture)if(Qe.length>0){qe&&vt&&t.texStorage2D(i.TEXTURE_2D,Re,ke,Qe[0].width,Qe[0].height);for(let te=0,ue=Qe.length;te<ue;te++)Se=Qe[te],qe?H&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Se.width,Se.height,Ee,Oe,Se.data):t.texImage2D(i.TEXTURE_2D,te,ke,Se.width,Se.height,0,Ee,Oe,Se.data);M.generateMipmaps=!1}else qe?(vt&&t.texStorage2D(i.TEXTURE_2D,Re,ke,ae.width,ae.height),H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,Ee,Oe,ae.data)):t.texImage2D(i.TEXTURE_2D,0,ke,ae.width,ae.height,0,Ee,Oe,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,ke,Qe[0].width,Qe[0].height,ae.depth);for(let te=0,ue=Qe.length;te<ue;te++)if(Se=Qe[te],M.format!==Un)if(Ee!==null)if(qe){if(H)if(M.layerUpdates.size>0){let De=wf(Se.width,Se.height,M.format,M.type);for(let Ie of M.layerUpdates){let et=Se.data.subarray(Ie*De/Se.data.BYTES_PER_ELEMENT,(Ie+1)*De/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Ie,Se.width,Se.height,1,Ee,et)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,Se.width,Se.height,ae.depth,Ee,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,ke,Se.width,Se.height,ae.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,Se.width,Se.height,ae.depth,Ee,Oe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,ke,Se.width,Se.height,ae.depth,0,Ee,Oe,Se.data)}else{qe&&vt&&t.texStorage2D(i.TEXTURE_2D,Re,ke,Qe[0].width,Qe[0].height);for(let te=0,ue=Qe.length;te<ue;te++)Se=Qe[te],M.format!==Un?Ee!==null?qe?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,te,ke,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?H&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Se.width,Se.height,Ee,Oe,Se.data):t.texImage2D(i.TEXTURE_2D,te,ke,Se.width,Se.height,0,Ee,Oe,Se.data)}else if(M.isDataArrayTexture)if(qe){if(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,ke,ae.width,ae.height,ae.depth),H)if(M.layerUpdates.size>0){let te=wf(ae.width,ae.height,M.format,M.type);for(let ue of M.layerUpdates){let De=ae.data.subarray(ue*te/ae.data.BYTES_PER_ELEMENT,(ue+1)*te/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,ae.width,ae.height,1,Ee,Oe,De)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ee,Oe,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,ae.width,ae.height,ae.depth,0,Ee,Oe,ae.data);else if(M.isData3DTexture)qe?(vt&&t.texStorage3D(i.TEXTURE_3D,Re,ke,ae.width,ae.height,ae.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ee,Oe,ae.data)):t.texImage3D(i.TEXTURE_3D,0,ke,ae.width,ae.height,ae.depth,0,Ee,Oe,ae.data);else if(M.isFramebufferTexture){if(vt)if(qe)t.texStorage2D(i.TEXTURE_2D,Re,ke,ae.width,ae.height);else{let te=ae.width,ue=ae.height;for(let De=0;De<Re;De++)t.texImage2D(i.TEXTURE_2D,De,ke,te,ue,0,Ee,Oe,null),te>>=1,ue>>=1}}else if(Qe.length>0){if(qe&&vt){let te=B(Qe[0]);t.texStorage2D(i.TEXTURE_2D,Re,ke,te.width,te.height)}for(let te=0,ue=Qe.length;te<ue;te++)Se=Qe[te],qe?H&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,Ee,Oe,Se):t.texImage2D(i.TEXTURE_2D,te,ke,Ee,Oe,Se);M.generateMipmaps=!1}else if(qe){if(vt){let te=B(ae);t.texStorage2D(i.TEXTURE_2D,Re,ke,te.width,te.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Oe,ae)}else t.texImage2D(i.TEXTURE_2D,0,ke,Ee,Oe,ae);m(M)&&p($),be.__version=Q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function fe(T,M,N){if(M.image.length!==6)return;let $=Ze(T,M),le=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);let Q=n.get(le);if(le.version!==Q.__version||$===!0){t.activeTexture(i.TEXTURE0+N);let be=ot.getPrimaries(ot.workingColorSpace),ee=M.colorSpace===Vi?null:ot.getPrimaries(M.colorSpace),ve=M.colorSpace===Vi||be===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let We=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let ue=0;ue<6;ue++)!We&&!ae?Ee[ue]=x(M.image[ue],!0,s.maxCubemapSize):Ee[ue]=ae?M.image[ue].image:M.image[ue],Ee[ue]=V(M,Ee[ue]);let Oe=Ee[0],ke=r.convert(M.format,M.colorSpace),Se=r.convert(M.type),Qe=y(M.internalFormat,ke,Se,M.colorSpace),qe=M.isVideoTexture!==!0,vt=Q.__version===void 0||$===!0,H=le.dataReady,Re=I(M,Oe);Ue(i.TEXTURE_CUBE_MAP,M);let te;if(We){qe&&vt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Qe,Oe.width,Oe.height);for(let ue=0;ue<6;ue++){te=Ee[ue].mipmaps;for(let De=0;De<te.length;De++){let Ie=te[De];M.format!==Un?ke!==null?qe?H&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,0,0,Ie.width,Ie.height,ke,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,Qe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,0,0,Ie.width,Ie.height,ke,Se,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De,Qe,Ie.width,Ie.height,0,ke,Se,Ie.data)}}}else{if(te=M.mipmaps,qe&&vt){te.length>0&&Re++;let ue=B(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Qe,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ae){qe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ee[ue].width,Ee[ue].height,ke,Se,Ee[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Qe,Ee[ue].width,Ee[ue].height,0,ke,Se,Ee[ue].data);for(let De=0;De<te.length;De++){let et=te[De].image[ue].image;qe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,0,0,et.width,et.height,ke,Se,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,Qe,et.width,et.height,0,ke,Se,et.data)}}else{qe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ke,Se,Ee[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Qe,ke,Se,Ee[ue]);for(let De=0;De<te.length;De++){let Ie=te[De];qe?H&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,0,0,ke,Se,Ie.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,De+1,Qe,ke,Se,Ie.image[ue])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),Q.__version=le.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function K(T,M,N,$,le,Q){let be=r.convert(N.format,N.colorSpace),ee=r.convert(N.type),ve=y(N.internalFormat,be,ee,N.colorSpace),We=n.get(M),ae=n.get(N);if(ae.__renderTarget=M,!We.__hasExternalTextures){let Ee=Math.max(1,M.width>>Q),Oe=Math.max(1,M.height>>Q);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,Q,ve,Ee,Oe,M.depth,0,be,ee,null):t.texImage2D(le,Q,ve,Ee,Oe,0,be,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),he(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,le,ae.__webglTexture,0,q(M)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,le,ae.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(T,M,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){let $=M.depthTexture,le=$&&$.isDepthTexture?$.type:null,Q=_(M.stencilBuffer,le),be=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=q(M);he(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,Q,M.width,M.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,T)}else{let $=M.textures;for(let le=0;le<$.length;le++){let Q=$[le],be=r.convert(Q.format,Q.colorSpace),ee=r.convert(Q.type),ve=y(Q.internalFormat,be,ee,Q.colorSpace),We=q(M);N&&he(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,ve,M.width,M.height):he(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,ve,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ve,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);let le=$.__webglTexture,Q=q(M);if(M.depthTexture.format===rr)he(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(M.depthTexture.format===dr)he(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ae(T){let M=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let $=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let le=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",le)};$.addEventListener("dispose",le),M.__depthDisposeCallback=le}M.__boundDepthTexture=$}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");xe(M.__webglFramebuffer,T)}else if(N){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),se(M.__webglDepthbuffer[$],T,!1);else{let le=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),se(M.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(T,M,N){let $=n.get(T);M!==void 0&&K($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ae(T)}function Ye(T){let M=T.texture,N=n.get(T),$=n.get(M);T.addEventListener("dispose",R);let le=T.textures,Q=T.isWebGLCubeRenderTarget===!0,be=le.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,o.memory.textures++),Q){N.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[ee]=[];for(let ve=0;ve<M.mipmaps.length;ve++)N.__webglFramebuffer[ee][ve]=i.createFramebuffer()}else N.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let ee=0;ee<M.mipmaps.length;ee++)N.__webglFramebuffer[ee]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(be)for(let ee=0,ve=le.length;ee<ve;ee++){let We=n.get(le[ee]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&he(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ee=0;ee<le.length;ee++){let ve=le[ee];N.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ee]);let We=r.convert(ve.format,ve.colorSpace),ae=r.convert(ve.type),Ee=y(ve.internalFormat,We,ae,ve.colorSpace,T.isXRRenderTarget===!0),Oe=q(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Ee,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,N.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),se(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,M);for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)K(N.__webglFramebuffer[ee][ve],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve);else K(N.__webglFramebuffer[ee],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ee=0,ve=le.length;ee<ve;ee++){let We=le[ee],ae=n.get(We);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),Ue(i.TEXTURE_2D,We),K(N.__webglFramebuffer,T,We,i.COLOR_ATTACHMENT0+ee,i.TEXTURE_2D,0),m(We)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,$.__webglTexture),Ue(ee,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)K(N.__webglFramebuffer[ve],T,M,i.COLOR_ATTACHMENT0,ee,ve);else K(N.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ee,0);m(M)&&p(ee),t.unbindTexture()}T.depthBuffer&&Ae(T)}function ce(T){let M=T.textures;for(let N=0,$=M.length;N<$;N++){let le=M[N];if(m(le)){let Q=v(T),be=n.get(le).__webglTexture;t.bindTexture(Q,be),p(Q),t.unbindTexture()}}}let _e=[],w=[];function j(T){if(T.samples>0){if(he(T)===!1){let M=T.textures,N=T.width,$=T.height,le=i.COLOR_BUFFER_BIT,Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(T),ee=M.length>1;if(ee)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);let We=n.get(M[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,le,i.NEAREST),l===!0&&(_e.length=0,w.length=0,_e.push(i.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.resolveDepthBuffer===!1&&(_e.push(Q),w.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);let We=n.get(M[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function q(T){return Math.min(s.maxSamples,T.samples)}function he(T){let M=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function D(T){let M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function V(T,M){let N=T.colorSpace,$=T.format,le=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==ln&&N!==Vi&&(ot.getTransfer(N)===_t?($!==Un||le!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}function B(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=G,this.setTexture2D=k,this.setTexture2DArray=F,this.setTexture3D=ne,this.setTextureCube=X,this.rebindTextures=we,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=K,this.useMultisampledRTT=he}function Ny(i,e){function t(n,s=Vi){let r,o=ot.getTransfer(s);if(n===wi)return i.UNSIGNED_BYTE;if(n===Yh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ip)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tp)return i.BYTE;if(n===np)return i.SHORT;if(n===fo)return i.UNSIGNED_SHORT;if(n===qh)return i.INT;if(n===ys)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===sp)return i.ALPHA;if(n===rp)return i.RGB;if(n===Un)return i.RGBA;if(n===op)return i.LUMINANCE;if(n===ap)return i.LUMINANCE_ALPHA;if(n===rr)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===jh)return i.RED;if(n===$h)return i.RED_INTEGER;if(n===lp)return i.RG;if(n===Zh)return i.RG_INTEGER;if(n===Jh)return i.RGBA_INTEGER;if(n===Ra||n===Ca||n===Ia||n===Pa)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ic||n===Pc||n===Lc||n===Dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uc||n===Nc||n===Fc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uc||n===Nc)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oc||n===Bc||n===kc||n===Hc||n===zc||n===Gc||n===Vc||n===Wc||n===Xc||n===qc||n===Yc||n===Kc||n===jc||n===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===Zc||n===Jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===La)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cp||n===Qc||n===eh||n===th)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===La)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===th)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var gh=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ke=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fy={type:"move"},lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,By=`
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

}`,xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new $t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tt({vertexShader:Oy,fragmentShader:By,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Y(new lt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_h=class extends Ai{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,x=new xh,m=t.getContextAttributes(),p=null,v=null,y=[],_=[],I=new de,b=null,R=new Ut;R.viewport=new ct;let P=new Ut;P.viewport=new ct;let S=[R,P],E=new gh,L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let fe=y[ie];return fe===void 0&&(fe=new lo,y[ie]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ie){let fe=y[ie];return fe===void 0&&(fe=new lo,y[ie]=fe),fe.getGripSpace()},this.getHand=function(ie){let fe=y[ie];return fe===void 0&&(fe=new lo,y[ie]=fe),fe.getHandSpace()};function U(ie){let fe=_.indexOf(ie.inputSource);if(fe===-1)return;let K=y[fe];K!==void 0&&(K.update(ie.inputSource,ie.frame,c||o),K.dispatchEvent({type:ie.type,data:ie.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",k);for(let ie=0;ie<y.length;ie++){let fe=_[ie];fe!==null&&(_[ie]=null,y[ie].disconnect(fe))}L=null,G=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,v=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ht(f.framebufferWidth,f.framebufferHeight,{format:Un,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,K=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?dr:rr,K=m.stencil?ur:ys);let xe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ht(d.textureWidth,d.textureHeight,{format:Un,type:wi,depthTexture:new Ga(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(ie){for(let fe=0;fe<ie.removed.length;fe++){let K=ie.removed[fe],se=_.indexOf(K);se>=0&&(_[se]=null,y[se].disconnect(K))}for(let fe=0;fe<ie.added.length;fe++){let K=ie.added[fe],se=_.indexOf(K);if(se===-1){for(let Ae=0;Ae<y.length;Ae++)if(Ae>=_.length){_.push(K),se=Ae;break}else if(_[Ae]===null){_[Ae]=K,se=Ae;break}if(se===-1)break}let xe=y[se];xe&&xe.connect(K)}}let F=new C,ne=new C;function X(ie,fe,K){F.setFromMatrixPosition(fe.matrixWorld),ne.setFromMatrixPosition(K.matrixWorld);let se=F.distanceTo(ne),xe=fe.projectionMatrix.elements,Ae=K.projectionMatrix.elements,we=xe[14]/(xe[10]-1),Ye=xe[14]/(xe[10]+1),ce=(xe[9]+1)/xe[5],_e=(xe[9]-1)/xe[5],w=(xe[8]-1)/xe[0],j=(Ae[8]+1)/Ae[0],q=we*w,he=we*j,D=se/(-w+j),V=D*-w;if(fe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(V),ie.translateZ(D),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),xe[10]===-1)ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let B=we+D,T=Ye+D,M=q-V,N=he+(se-V),$=ce*Ye/T*B,le=_e*Ye/T*B;ie.projectionMatrix.makePerspective(M,N,$,le,B,T),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function pe(ie,fe){fe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(fe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let fe=ie.near,K=ie.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(K=x.depthFar)),E.near=P.near=R.near=fe,E.far=P.far=R.far=K,(L!==E.near||G!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,G=E.far),R.layers.mask=ie.layers.mask|2,P.layers.mask=ie.layers.mask|4,E.layers.mask=R.layers.mask|P.layers.mask;let se=ie.parent,xe=E.cameras;pe(E,se);for(let Ae=0;Ae<xe.length;Ae++)pe(xe[Ae],se);xe.length===2?X(E,R,P):E.projectionMatrix.copy(R.projectionMatrix),me(ie,E,se)};function me(ie,fe,K){K===null?ie.matrix.copy(fe.matrixWorld):(ie.matrix.copy(K.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(fe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=mr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let oe=null;function Ue(ie,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){let K=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let se=!1;K.length!==E.cameras.length&&(E.cameras.length=0,se=!0);for(let Ae=0;Ae<K.length;Ae++){let we=K[Ae],Ye=null;if(f!==null)Ye=f.getViewport(we);else{let _e=h.getViewSubImage(d,we);Ye=_e.viewport,Ae===0&&(e.setRenderTargetTextures(v,_e.colorTexture,d.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(v))}let ce=S[Ae];ce===void 0&&(ce=new Ut,ce.layers.enable(Ae),ce.viewport=new ct,S[Ae]=ce),ce.matrix.fromArray(we.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(we.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ae===0&&(E.matrix.copy(ce.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),se===!0&&E.cameras.push(ce)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")){let Ae=h.getDepthInformation(K[0]);Ae&&Ae.isValid&&Ae.texture&&x.init(e,Ae,s.renderState)}}for(let K=0;K<y.length;K++){let se=_[K],xe=y[K];se!==null&&xe!==void 0&&xe.update(se,fe,c||o)}oe&&oe(ie,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}let Ze=new gp;Ze.setAnimationLoop(Ue),this.setAnimationLoop=function(ie){oe=ie},this.dispose=function(){}}},ms=new An,ky=new je;function Hy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,ms.copy(_),ms.x*=-1,ms.y*=-1,ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.envMapRotation.value.setFromMatrix4(ky.makeRotationFromEuler(ms)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let _=y.program;n.uniformBlockBinding(v,_)}function c(v,y){let _=s[v.id];_===void 0&&(g(v),_=u(v),s[v.id]=_,v.addEventListener("dispose",m));let I=y.program;n.updateUBOMapping(v,I);let b=e.render.frame;r[v.id]!==b&&(d(v),r[v.id]=b)}function u(v){let y=h();v.__bindingPointIndex=y;let _=i.createBuffer(),I=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=s[v.id],_=v.uniforms,I=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,R=_.length;b<R;b++){let P=Array.isArray(_[b])?_[b]:[_[b]];for(let S=0,E=P.length;S<E;S++){let L=P[S];if(f(L,b,S,I)===!0){let G=L.__offset,U=Array.isArray(L.value)?L.value:[L.value],O=0;for(let k=0;k<U.length;k++){let F=U[k],ne=x(F);typeof F=="number"||typeof F=="boolean"?(L.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,G+O,L.__data)):F.isMatrix3?(L.__data[0]=F.elements[0],L.__data[1]=F.elements[1],L.__data[2]=F.elements[2],L.__data[3]=0,L.__data[4]=F.elements[3],L.__data[5]=F.elements[4],L.__data[6]=F.elements[5],L.__data[7]=0,L.__data[8]=F.elements[6],L.__data[9]=F.elements[7],L.__data[10]=F.elements[8],L.__data[11]=0):(F.toArray(L.__data,O),O+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,_,I){let b=v.value,R=y+"_"+_;if(I[R]===void 0)return typeof b=="number"||typeof b=="boolean"?I[R]=b:I[R]=b.clone(),!0;{let P=I[R];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return I[R]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(v){let y=v.uniforms,_=0,I=16;for(let R=0,P=y.length;R<P;R++){let S=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,L=S.length;E<L;E++){let G=S[E],U=Array.isArray(G.value)?G.value:[G.value];for(let O=0,k=U.length;O<k;O++){let F=U[O],ne=x(F),X=_%I,pe=X%ne.boundary,me=X+pe;_+=pe,me!==0&&I-me<ne.storage&&(_+=I-me),G.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=ne.storage}}}let b=_%I;return b>0&&(_+=I-b),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var xo=class{constructor(e={}){let{canvas:t=q0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this.toneMapping=Xi,this.toneMappingExposure=1;let _=this,I=!1,b=0,R=0,P=null,S=-1,E=null,L=new ct,G=new ct,U=null,O=new Ce(0),k=0,F=t.width,ne=t.height,X=1,pe=null,me=null,oe=new ct(0,0,F,ne),Ue=new ct(0,0,F,ne),Ze=!1,ie=new go,fe=!1,K=!1,se=new je,xe=new je,Ae=new C,we=new ct,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function _e(){return P===null?X:1}let w=n;function j(A,z){return t.getContext(A,z)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kh}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),w===null){let z="webgl2";if(w=j(z,A),w===null)throw j(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let q,he,D,V,B,T,M,N,$,le,Q,be,ee,ve,We,ae,Ee,Oe,ke,Se,Qe,qe,vt,H;function Re(){q=new iv(w),q.init(),qe=new Ny(w,q),he=new Z_(w,q,e,qe),D=new Ly(w,q),he.reverseDepthBuffer&&d&&D.buffers.depth.setReversed(!0),V=new ov(w),B=new vy,T=new Uy(w,q,D,B,he,qe,V),M=new Q_(_),N=new nv(_),$=new fg(w),vt=new j_(w,$),le=new sv(w,$,V,vt),Q=new lv(w,le,$,V),ke=new av(w,he,T),ae=new J_(B),be=new _y(_,M,N,q,he,vt,ae),ee=new Hy(_,B),ve=new My,We=new Ay(q),Oe=new K_(_,M,N,D,Q,f,l),Ee=new Iy(_,Q,he),H=new zy(w,V,he,D),Se=new $_(w,q,V),Qe=new rv(w,q,V),V.programs=be.programs,_.capabilities=he,_.extensions=q,_.properties=B,_.renderLists=ve,_.shadowMap=Ee,_.state=D,_.info=V}Re();let te=new _h(_,w);this.xr=te,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let A=q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(F,ne,!1))},this.getSize=function(A){return A.set(F,ne)},this.setSize=function(A,z,Z=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,ne=z,t.width=Math.floor(A*X),t.height=Math.floor(z*X),Z===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(F*X,ne*X).floor()},this.setDrawingBufferSize=function(A,z,Z){F=A,ne=z,X=Z,t.width=Math.floor(A*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,z,Z,J){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,z,Z,J),D.viewport(L.copy(oe).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Ue)},this.setScissor=function(A,z,Z,J){A.isVector4?Ue.set(A.x,A.y,A.z,A.w):Ue.set(A,z,Z,J),D.scissor(G.copy(Ue).multiplyScalar(X).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(A){D.setScissorTest(Ze=A)},this.setOpaqueSort=function(A){pe=A},this.setTransparentSort=function(A){me=A},this.getClearColor=function(A){return A.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(A=!0,z=!0,Z=!0){let J=0;if(A){let W=!1;if(P!==null){let ye=P.texture.format;W=ye===Jh||ye===Zh||ye===$h}if(W){let ye=P.texture.type,Pe=ye===wi||ye===ys||ye===fo||ye===ur||ye===Yh||ye===Kh,He=Oe.getClearColor(),ze=Oe.getClearAlpha(),$e=He.r,tt=He.g,Ge=He.b;Pe?(g[0]=$e,g[1]=tt,g[2]=Ge,g[3]=ze,w.clearBufferuiv(w.COLOR,0,g)):(x[0]=$e,x[1]=tt,x[2]=Ge,x[3]=ze,w.clearBufferiv(w.COLOR,0,x))}else J|=w.COLOR_BUFFER_BIT}z&&(J|=w.DEPTH_BUFFER_BIT),Z&&(J|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),ve.dispose(),We.dispose(),B.dispose(),M.dispose(),N.dispose(),Q.dispose(),vt.dispose(),H.dispose(),be.dispose(),te.dispose(),te.removeEventListener("sessionstart",Md),te.removeEventListener("sessionend",Ed),cs.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let A=V.autoReset,z=Ee.enabled,Z=Ee.autoUpdate,J=Ee.needsUpdate,W=Ee.type;Re(),V.autoReset=A,Ee.enabled=z,Ee.autoUpdate=Z,Ee.needsUpdate=J,Ee.type=W}function Ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function et(A){let z=A.target;z.removeEventListener("dispose",et),Dt(z)}function Dt(A){nn(A),B.remove(A)}function nn(A){let z=B.get(A).programs;z!==void 0&&(z.forEach(function(Z){be.releaseProgram(Z)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Z,J,W,ye){z===null&&(z=Ye);let Pe=W.isMesh&&W.matrixWorld.determinant()<0,He=Gm(A,z,Z,J,W);D.setMaterial(J,Pe);let ze=Z.index,$e=1;if(J.wireframe===!0){if(ze=le.getWireframeAttribute(Z),ze===void 0)return;$e=2}let tt=Z.drawRange,Ge=Z.attributes.position,pt=tt.start*$e,St=(tt.start+tt.count)*$e;ye!==null&&(pt=Math.max(pt,ye.start*$e),St=Math.min(St,(ye.start+ye.count)*$e)),ze!==null?(pt=Math.max(pt,0),St=Math.min(St,ze.count)):Ge!=null&&(pt=Math.max(pt,0),St=Math.min(St,Ge.count));let wt=St-pt;if(wt<0||wt===1/0)return;vt.setup(W,J,He,Z,ze);let _n,gt=Se;if(ze!==null&&(_n=$.get(ze),gt=Qe,gt.setIndex(_n)),W.isMesh)J.wireframe===!0?(D.setLineWidth(J.wireframeLinewidth*_e()),gt.setMode(w.LINES)):gt.setMode(w.TRIANGLES);else if(W.isLine){let Ve=J.linewidth;Ve===void 0&&(Ve=1),D.setLineWidth(Ve*_e()),W.isLineSegments?gt.setMode(w.LINES):W.isLineLoop?gt.setMode(w.LINE_LOOP):gt.setMode(w.LINE_STRIP)}else W.isPoints?gt.setMode(w.POINTS):W.isSprite&&gt.setMode(w.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)gt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))gt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ve=W._multiDrawStarts,mi=W._multiDrawCounts,xt=W._multiDrawCount,Gn=ze?$.get(ze).bytesPerElement:1,Os=B.get(J).currentProgram.getUniforms();for(let bn=0;bn<xt;bn++)Os.setValue(w,"_gl_DrawID",bn),gt.render(Ve[bn]/Gn,mi[bn])}else if(W.isInstancedMesh)gt.renderInstances(pt,wt,W.count);else if(Z.isInstancedBufferGeometry){let Ve=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,mi=Math.min(Z.instanceCount,Ve);gt.renderInstances(pt,wt,mi)}else gt.render(pt,wt)};function yt(A,z,Z){A.transparent===!0&&A.side===It&&A.forceSinglePass===!1?(A.side=Kt,A.needsUpdate=!0,Zo(A,z,Z),A.side=Fn,A.needsUpdate=!0,Zo(A,z,Z),A.side=It):Zo(A,z,Z)}this.compile=function(A,z,Z=null){Z===null&&(Z=A),p=We.get(Z),p.init(z),y.push(p),Z.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),A!==Z&&A.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();let J=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ye=W.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){let He=ye[Pe];yt(He,Z,W),J.add(He)}else yt(ye,Z,W),J.add(ye)}),y.pop(),p=null,J},this.compileAsync=function(A,z,Z=null){let J=this.compile(A,z,Z);return new Promise(W=>{function ye(){if(J.forEach(function(Pe){B.get(Pe).currentProgram.isReady()&&J.delete(Pe)}),J.size===0){W(A);return}setTimeout(ye,10)}q.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let zn=null;function pi(A){zn&&zn(A)}function Md(){cs.stop()}function Ed(){cs.start()}let cs=new gp;cs.setAnimationLoop(pi),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(A){zn=A,te.setAnimationLoop(A),A===null?cs.stop():cs.start()},te.addEventListener("sessionstart",Md),te.addEventListener("sessionend",Ed),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(z),z=te.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,z,P),p=We.get(A,y.length),p.init(z),y.push(p),xe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ie.setFromProjectionMatrix(xe),K=this.localClippingEnabled,fe=ae.init(this.clippingPlanes,K),m=ve.get(A,v.length),m.init(),v.push(m),te.enabled===!0&&te.isPresenting===!0){let ye=_.xr.getDepthSensingMesh();ye!==null&&Ol(ye,z,-1/0,_.sortObjects)}Ol(A,z,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(pe,me),ce=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,ce&&Oe.addToRenderList(m,A),this.info.render.frame++,fe===!0&&ae.beginShadows();let Z=p.state.shadowsArray;Ee.render(Z,A,z),fe===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,W=m.transmissive;if(p.setupLights(),z.isArrayCamera){let ye=z.cameras;if(W.length>0)for(let Pe=0,He=ye.length;Pe<He;Pe++){let ze=ye[Pe];Sd(J,W,A,ze)}ce&&Oe.render(A);for(let Pe=0,He=ye.length;Pe<He;Pe++){let ze=ye[Pe];bd(m,A,ze,ze.viewport)}}else W.length>0&&Sd(J,W,A,z),ce&&Oe.render(A),bd(m,A,z);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(_,A,z),vt.resetDefaultState(),S=-1,E=null,y.pop(),y.length>0?(p=y[y.length-1],fe===!0&&ae.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ol(A,z,Z,J){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ie.intersectsSprite(A)){J&&we.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);let Pe=Q.update(A),He=A.material;He.visible&&m.push(A,Pe,He,Z,we.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ie.intersectsObject(A))){let Pe=Q.update(A),He=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),we.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),we.copy(Pe.boundingSphere.center)),we.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(He)){let ze=Pe.groups;for(let $e=0,tt=ze.length;$e<tt;$e++){let Ge=ze[$e],pt=He[Ge.materialIndex];pt&&pt.visible&&m.push(A,Pe,pt,Z,we.z,Ge)}}else He.visible&&m.push(A,Pe,He,Z,we.z,null)}}let ye=A.children;for(let Pe=0,He=ye.length;Pe<He;Pe++)Ol(ye[Pe],z,Z,J)}function bd(A,z,Z,J){let W=A.opaque,ye=A.transmissive,Pe=A.transparent;p.setupLightsView(Z),fe===!0&&ae.setGlobalState(_.clippingPlanes,Z),J&&D.viewport(L.copy(J)),W.length>0&&$o(W,z,Z),ye.length>0&&$o(ye,z,Z),Pe.length>0&&$o(Pe,z,Z),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Sd(A,z,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Ht(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?fn:wi,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let ye=p.state.transmissionRenderTarget[J.id],Pe=J.viewport||L;ye.setSize(Pe.z,Pe.w);let He=_.getRenderTarget();_.setRenderTarget(ye),_.getClearColor(O),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),ce&&Oe.render(Z);let ze=_.toneMapping;_.toneMapping=Xi;let $e=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),fe===!0&&ae.setGlobalState(_.clippingPlanes,J),$o(A,Z,J),T.updateMultisampleRenderTarget(ye),T.updateRenderTargetMipmap(ye),q.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ge=0,pt=z.length;Ge<pt;Ge++){let St=z[Ge],wt=St.object,_n=St.geometry,gt=St.material,Ve=St.group;if(gt.side===It&&wt.layers.test(J.layers)){let mi=gt.side;gt.side=Kt,gt.needsUpdate=!0,Td(wt,Z,J,_n,gt,Ve),gt.side=mi,gt.needsUpdate=!0,tt=!0}}tt===!0&&(T.updateMultisampleRenderTarget(ye),T.updateRenderTargetMipmap(ye))}_.setRenderTarget(He),_.setClearColor(O,k),$e!==void 0&&(J.viewport=$e),_.toneMapping=ze}function $o(A,z,Z){let J=z.isScene===!0?z.overrideMaterial:null;for(let W=0,ye=A.length;W<ye;W++){let Pe=A[W],He=Pe.object,ze=Pe.geometry,$e=J===null?Pe.material:J,tt=Pe.group;He.layers.test(Z.layers)&&Td(He,z,Z,ze,$e,tt)}}function Td(A,z,Z,J,W,ye){A.onBeforeRender(_,z,Z,J,W,ye),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(_,z,Z,J,A,ye),W.transparent===!0&&W.side===It&&W.forceSinglePass===!1?(W.side=Kt,W.needsUpdate=!0,_.renderBufferDirect(Z,z,J,W,A,ye),W.side=Fn,W.needsUpdate=!0,_.renderBufferDirect(Z,z,J,W,A,ye),W.side=It):_.renderBufferDirect(Z,z,J,W,A,ye),A.onAfterRender(_,z,Z,J,W,ye)}function Zo(A,z,Z){z.isScene!==!0&&(z=Ye);let J=B.get(A),W=p.state.lights,ye=p.state.shadowsArray,Pe=W.state.version,He=be.getParameters(A,W.state,ye,z,Z),ze=be.getProgramCacheKey(He),$e=J.programs;J.environment=A.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(A.isMeshStandardMaterial?N:M).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,$e===void 0&&(A.addEventListener("dispose",et),$e=new Map,J.programs=$e);let tt=$e.get(ze);if(tt!==void 0){if(J.currentProgram===tt&&J.lightsStateVersion===Pe)return Ad(A,He),tt}else He.uniforms=be.getUniforms(A),A.onBeforeCompile(He,_),tt=be.acquireProgram(He,ze),$e.set(ze,tt),J.uniforms=He.uniforms;let Ge=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=ae.uniform),Ad(A,He),J.needsLights=Wm(A),J.lightsStateVersion=Pe,J.needsLights&&(Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.directionalShadowMap.value=W.state.directionalShadowMap,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotShadowMap.value=W.state.spotShadowMap,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMap.value=W.state.pointShadowMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=tt,J.uniformsList=null,tt}function wd(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=ar.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Ad(A,z){let Z=B.get(A);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Gm(A,z,Z,J,W){z.isScene!==!0&&(z=Ye),T.resetTextureUnits();let ye=z.fog,Pe=J.isMeshStandardMaterial?z.environment:null,He=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ln,ze=(J.isMeshStandardMaterial?N:M).get(J.envMap||Pe),$e=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,tt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ge=!!Z.morphAttributes.position,pt=!!Z.morphAttributes.normal,St=!!Z.morphAttributes.color,wt=Xi;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(wt=_.toneMapping);let _n=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,gt=_n!==void 0?_n.length:0,Ve=B.get(J),mi=p.state.lights;if(fe===!0&&(K===!0||A!==E)){let Ln=A===E&&J.id===S;ae.setState(J,A,Ln)}let xt=!1;J.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==mi.state.version||Ve.outputColorSpace!==He||W.isBatchedMesh&&Ve.batching===!1||!W.isBatchedMesh&&Ve.batching===!0||W.isBatchedMesh&&Ve.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ve.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ve.instancing===!1||!W.isInstancedMesh&&Ve.instancing===!0||W.isSkinnedMesh&&Ve.skinning===!1||!W.isSkinnedMesh&&Ve.skinning===!0||W.isInstancedMesh&&Ve.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ve.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ve.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ve.instancingMorph===!1&&W.morphTexture!==null||Ve.envMap!==ze||J.fog===!0&&Ve.fog!==ye||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ae.numPlanes||Ve.numIntersection!==ae.numIntersection)||Ve.vertexAlphas!==$e||Ve.vertexTangents!==tt||Ve.morphTargets!==Ge||Ve.morphNormals!==pt||Ve.morphColors!==St||Ve.toneMapping!==wt||Ve.morphTargetsCount!==gt)&&(xt=!0):(xt=!0,Ve.__version=J.version);let Gn=Ve.currentProgram;xt===!0&&(Gn=Zo(J,z,W));let Os=!1,bn=!1,Yr=!1,At=Gn.getUniforms(),ii=Ve.uniforms;if(D.useProgram(Gn.program)&&(Os=!0,bn=!0,Yr=!0),J.id!==S&&(S=J.id,bn=!0),Os||E!==A){D.buffers.depth.getReversed()?(se.copy(A.projectionMatrix),K0(se),j0(se),At.setValue(w,"projectionMatrix",se)):At.setValue(w,"projectionMatrix",A.projectionMatrix),At.setValue(w,"viewMatrix",A.matrixWorldInverse);let Ni=At.map.cameraPosition;Ni!==void 0&&Ni.setValue(w,Ae.setFromMatrixPosition(A.matrixWorld)),he.logarithmicDepthBuffer&&At.setValue(w,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&At.setValue(w,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,bn=!0,Yr=!0)}if(W.isSkinnedMesh){At.setOptional(w,W,"bindMatrix"),At.setOptional(w,W,"bindMatrixInverse");let Ln=W.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),At.setValue(w,"boneTexture",Ln.boneTexture,T))}W.isBatchedMesh&&(At.setOptional(w,W,"batchingTexture"),At.setValue(w,"batchingTexture",W._matricesTexture,T),At.setOptional(w,W,"batchingIdTexture"),At.setValue(w,"batchingIdTexture",W._indirectTexture,T),At.setOptional(w,W,"batchingColorTexture"),W._colorsTexture!==null&&At.setValue(w,"batchingColorTexture",W._colorsTexture,T));let Kr=Z.morphAttributes;if((Kr.position!==void 0||Kr.normal!==void 0||Kr.color!==void 0)&&ke.update(W,Z,Gn),(bn||Ve.receiveShadow!==W.receiveShadow)&&(Ve.receiveShadow=W.receiveShadow,At.setValue(w,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ii.envMap.value=ze,ii.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(ii.envMapIntensity.value=z.environmentIntensity),bn&&(At.setValue(w,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&Vm(ii,Yr),ye&&J.fog===!0&&ee.refreshFogUniforms(ii,ye),ee.refreshMaterialUniforms(ii,J,X,ne,p.state.transmissionRenderTarget[A.id]),ar.upload(w,wd(Ve),ii,T)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ar.upload(w,wd(Ve),ii,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&At.setValue(w,"center",W.center),At.setValue(w,"modelViewMatrix",W.modelViewMatrix),At.setValue(w,"normalMatrix",W.normalMatrix),At.setValue(w,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Ln=J.uniformsGroups;for(let Ni=0,Fi=Ln.length;Ni<Fi;Ni++){let Rd=Ln[Ni];H.update(Rd,Gn),H.bind(Rd,Gn)}}return Gn}function Vm(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Wm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,z,Z){B.get(A.texture).__webglTexture=z,B.get(A.depthTexture).__webglTexture=Z;let J=B.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){let Z=B.get(A);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Z=0){P=A,b=z,R=Z;let J=!0,W=null,ye=!1,Pe=!1;if(A){let ze=B.get(A);if(ze.__useDefaultFramebuffer!==void 0)D.bindFramebuffer(w.FRAMEBUFFER,null),J=!1;else if(ze.__webglFramebuffer===void 0)T.setupRenderTarget(A);else if(ze.__hasExternalTextures)T.rebindTextures(A,B.get(A.texture).__webglTexture,B.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ge=A.depthTexture;if(ze.__boundDepthTexture!==Ge){if(Ge!==null&&B.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(A)}}let $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Pe=!0);let tt=B.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[z])?W=tt[z][Z]:W=tt[z],ye=!0):A.samples>0&&T.useMultisampledRTT(A)===!1?W=B.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?W=tt[Z]:W=tt,L.copy(A.viewport),G.copy(A.scissor),U=A.scissorTest}else L.copy(oe).multiplyScalar(X).floor(),G.copy(Ue).multiplyScalar(X).floor(),U=Ze;if(D.bindFramebuffer(w.FRAMEBUFFER,W)&&J&&D.drawBuffers(A,W),D.viewport(L),D.scissor(G),D.setScissorTest(U),ye){let ze=B.get(A.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+z,ze.__webglTexture,Z)}else if(Pe){let ze=B.get(A.texture),$e=z||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,ze.__webglTexture,Z||0,$e)}S=-1},this.readRenderTargetPixels=function(A,z,Z,J,W,ye,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=B.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(He=He[Pe]),He){D.bindFramebuffer(w.FRAMEBUFFER,He);try{let ze=A.texture,$e=ze.format,tt=ze.type;if(!he.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-J&&Z>=0&&Z<=A.height-W&&w.readPixels(z,Z,J,W,qe.convert($e),qe.convert(tt),ye)}finally{let ze=P!==null?B.get(P).__webglFramebuffer:null;D.bindFramebuffer(w.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,z,Z,J,W,ye,Pe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=B.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(He=He[Pe]),He){let ze=A.texture,$e=ze.format,tt=ze.type;if(!he.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-J&&Z>=0&&Z<=A.height-W){D.bindFramebuffer(w.FRAMEBUFFER,He);let Ge=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ge),w.bufferData(w.PIXEL_PACK_BUFFER,ye.byteLength,w.STREAM_READ),w.readPixels(z,Z,J,W,qe.convert($e),qe.convert(tt),0);let pt=P!==null?B.get(P).__webglFramebuffer:null;D.bindFramebuffer(w.FRAMEBUFFER,pt);let St=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Y0(w,St,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ge),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ye),w.deleteBuffer(Ge),w.deleteSync(St),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,Z=0){A.isTexture!==!0&&(io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);let J=Math.pow(2,-Z),W=Math.floor(A.image.width*J),ye=Math.floor(A.image.height*J),Pe=z!==null?z.x:0,He=z!==null?z.y:0;T.setTexture2D(A,0),w.copyTexSubImage2D(w.TEXTURE_2D,Z,0,0,Pe,He,W,ye),D.unbindTexture()},this.copyTextureToTexture=function(A,z,Z=null,J=null,W=0){A.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1],z=arguments[2],W=arguments[3]||0,Z=null);let ye,Pe,He,ze,$e,tt,Ge,pt,St,wt=A.isCompressedTexture?A.mipmaps[W]:A.image;Z!==null?(ye=Z.max.x-Z.min.x,Pe=Z.max.y-Z.min.y,He=Z.isBox3?Z.max.z-Z.min.z:1,ze=Z.min.x,$e=Z.min.y,tt=Z.isBox3?Z.min.z:0):(ye=wt.width,Pe=wt.height,He=wt.depth||1,ze=0,$e=0,tt=0),J!==null?(Ge=J.x,pt=J.y,St=J.z):(Ge=0,pt=0,St=0);let _n=qe.convert(z.format),gt=qe.convert(z.type),Ve;z.isData3DTexture?(T.setTexture3D(z,0),Ve=w.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(T.setTexture2DArray(z,0),Ve=w.TEXTURE_2D_ARRAY):(T.setTexture2D(z,0),Ve=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,z.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,z.unpackAlignment);let mi=w.getParameter(w.UNPACK_ROW_LENGTH),xt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Gn=w.getParameter(w.UNPACK_SKIP_PIXELS),Os=w.getParameter(w.UNPACK_SKIP_ROWS),bn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,wt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,wt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ze),w.pixelStorei(w.UNPACK_SKIP_ROWS,$e),w.pixelStorei(w.UNPACK_SKIP_IMAGES,tt);let Yr=A.isDataArrayTexture||A.isData3DTexture,At=z.isDataArrayTexture||z.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let ii=B.get(A),Kr=B.get(z),Ln=B.get(ii.__renderTarget),Ni=B.get(Kr.__renderTarget);D.bindFramebuffer(w.READ_FRAMEBUFFER,Ln.__webglFramebuffer),D.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Fi=0;Fi<He;Fi++)Yr&&w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,B.get(A).__webglTexture,W,tt+Fi),A.isDepthTexture?(At&&w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,B.get(z).__webglTexture,W,St+Fi),w.blitFramebuffer(ze,$e,ye,Pe,Ge,pt,ye,Pe,w.DEPTH_BUFFER_BIT,w.NEAREST)):At?w.copyTexSubImage3D(Ve,W,Ge,pt,St+Fi,ze,$e,ye,Pe):w.copyTexSubImage2D(Ve,W,Ge,pt,St+Fi,ze,$e,ye,Pe);D.bindFramebuffer(w.READ_FRAMEBUFFER,null),D.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?w.texSubImage3D(Ve,W,Ge,pt,St,ye,Pe,He,_n,gt,wt.data):z.isCompressedArrayTexture?w.compressedTexSubImage3D(Ve,W,Ge,pt,St,ye,Pe,He,_n,wt.data):w.texSubImage3D(Ve,W,Ge,pt,St,ye,Pe,He,_n,gt,wt):A.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,W,Ge,pt,ye,Pe,_n,gt,wt.data):A.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,W,Ge,pt,wt.width,wt.height,_n,wt.data):w.texSubImage2D(w.TEXTURE_2D,W,Ge,pt,ye,Pe,_n,gt,wt);w.pixelStorei(w.UNPACK_ROW_LENGTH,mi),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,xt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Gn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Os),w.pixelStorei(w.UNPACK_SKIP_IMAGES,bn),W===0&&z.generateMipmaps&&w.generateMipmap(Ve),D.unbindTexture()},this.copyTextureToTexture3D=function(A,z,Z=null,J=null,W=0){return A.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,A=arguments[2],z=arguments[3],W=arguments[4]||0),io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,Z,J,W)},this.initRenderTarget=function(A){B.get(A).__webglFramebuffer===void 0&&T.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),D.unbindTexture()},this.resetState=function(){b=0,R=0,P=null,D.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}},Va=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var _o=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},vo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nh,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new C,yo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Af=new C,Rf=new ct,Cf=new ct,Gy=new C,If=new je,_a=new C,uc=new wn,Pf=new je,dc=new Ms,xr=class extends Y{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ld,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_a),this.boundingBox.expandByPoint(_a)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_a),this.boundingSphere.expandByPoint(_a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uc.copy(this.boundingSphere),uc.applyMatrix4(s),e.ray.intersectsSphere(uc)!==!1&&(Pf.copy(s).invert(),dc.copy(e.ray).applyMatrix4(Pf),!(this.boundingBox!==null&&dc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ld?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===m0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Rf.fromBufferAttribute(s.attributes.skinIndex,e),Cf.fromBufferAttribute(s.attributes.skinWeight,e),Af.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Cf.getComponent(r);if(o!==0){let a=Rf.getComponent(r);If.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Gy.copy(Af).applyMatrix4(If),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Mo=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wa=class extends $t{constructor(e=null,t=1,n=1,s,r,o,a,l,c=jt,u=jt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lf=new je,Vy=new je,_r=class i{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Vy;Lf.multiplyMatrices(a,t[r]),Lf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Wa(t,e,e,Un,Kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Mo),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Es=class extends Ft{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new je,Df=new je,va=[],Uf=new an,Wy=new je,Qr=new Y,eo=new wn,Xa=class extends Y{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Es(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Uf.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(Uf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),eo.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eo.copy(this.boundingSphere),eo.applyMatrix4(n),e.ray.intersectsSphere(eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),Df.multiplyMatrices(n,Js),Qr.matrixWorld=Df,Qr.raycast(e,va);for(let o=0,a=va.length;o<a;o++){let l=va[o];l.instanceId=r,l.object=this,t.push(l)}va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wa(new Float32Array(s*this.count),s,this.count,jh,Kn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Eo=class extends Rn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},qa=new C,Ya=new C,Nf=new je,to=new Ms,ya=new wn,fc=new C,Ff=new C,vr=class extends Rt{constructor(e=new Ct,t=new Eo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)qa.fromBufferAttribute(t,s-1),Ya.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=qa.distanceTo(Ya);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;Nf.copy(s).invert(),to.copy(e.ray).applyMatrix4(Nf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=u.getX(x),v=u.getX(x+1),y=Ma(this,e,to,l,p,v);y&&t.push(y)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=Ma(this,e,to,l,x,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=Ma(this,e,to,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=Ma(this,e,to,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ma(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(qa.fromBufferAttribute(o,s),Ya.fromBufferAttribute(o,r),t.distanceSqToSegment(qa,Ya,fc,Ff)>n)return;fc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(fc);if(!(l<e.near||l>e.far))return{distance:l,point:Ff.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Of=new C,Bf=new C,Ka=class extends vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Of.fromBufferAttribute(t,s),Bf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Of.distanceTo(Bf);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ja=class extends vr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},bs=class extends Rn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kf=new je,vh=new Ms,Ea=new wn,ba=new C,yr=class extends Rt{constructor(e=new Ct,t=new bs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;kf.copy(s).invert(),vh.copy(e.ray).applyMatrix4(kf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);ba.fromBufferAttribute(h,m),Hf(ba,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)ba.fromBufferAttribute(h,g),Hf(ba,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hf(i,e,t,n,s,r,o){let a=vh.distanceSqToPoint(i);if(a<t){let l=new C;vh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var vn=class extends $t{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new de:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,s=[],r=[],o=[],a=new C,l=new je;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Gt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Gt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},bo=class extends On{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new de){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yh=class extends bo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Sa=new C,pc=new nu,mc=new nu,gc=new nu,So=class extends On{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Sa.subVectors(s[0],s[1]).add(s[0]),c=Sa);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Sa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Sa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),pc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,m),mc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,m),gc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(pc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),mc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),gc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(pc.calc(l),mc.calc(l),gc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Xy(i,e){let t=1-i;return t*t*e}function qy(i,e){return 2*(1-i)*i*e}function Yy(i,e){return i*i*e}function co(i,e,t,n){return Xy(i,e)+qy(i,t)+Yy(i,n)}function Ky(i,e){let t=1-i;return t*t*t*e}function jy(i,e){let t=1-i;return 3*t*t*i*e}function $y(i,e){return 3*(1-i)*i*i*e}function Zy(i,e){return i*i*i*e}function ho(i,e,t,n,s){return Ky(i,e)+jy(i,t)+$y(i,n)+Zy(i,s)}var $a=class extends On{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ho(e,s.x,r.x,o.x,a.x),ho(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mh=class extends On{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ho(e,s.x,r.x,o.x,a.x),ho(e,s.y,r.y,o.y,a.y),ho(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Za=class extends On{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eh=class extends On{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends On{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(co(e,s.x,r.x,o.x),co(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends On{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(co(e,s.x,r.x,o.x),co(e,s.y,r.y,o.y),co(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},el=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(zf(a,l.x,c.x,u.x,h.x),zf(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},tl=Object.freeze({__proto__:null,ArcCurve:yh,CatmullRomCurve3:So,CubicBezierCurve:$a,CubicBezierCurve3:Mh,EllipseCurve:bo,LineCurve:Za,LineCurve3:Eh,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:Qa,SplineCurve:el}),bh=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new tl[s.type]().fromJSON(s))}return this}},Ss=class extends bh{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Za(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ja(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new $a(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new el(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new bo(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},To=class i extends Ct{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Gt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new C,d=new de,f=new C,g=new C,x=new C,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=t;v++){let y=n+v*u*s,_=Math.sin(y),I=Math.cos(y);for(let b=0;b<=e.length-1;b++){h.x=e[b].x*_,h.y=e[b].y,h.z=e[b].x*I,o.push(h.x,h.y,h.z),d.x=v/t,d.y=b/(e.length-1),a.push(d.x,d.y);let R=l[3*b+0]*_,P=l[3*b+1],S=l[3*b+0]*I;c.push(R,P,S)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let _=y+v*e.length,I=_,b=_+e.length,R=_+e.length+1,P=_+1;r.push(I,b,P),r.push(R,P,b)}this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("uv",new it(a,2)),this.setAttribute("normal",new it(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},nl=class i extends To{constructor(e=1,t=1,n=4,s=8){let r=new Ss;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Zn=class i extends Ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,u=new de;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(a,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Je=class i extends Ct{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],m=n/2,p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function v(){let _=new C,I=new C,b=0,R=(t-e)/n;for(let P=0;P<=r;P++){let S=[],E=P/r,L=E*(t-e)+e;for(let G=0;G<=s;G++){let U=G/s,O=U*l+a,k=Math.sin(O),F=Math.cos(O);I.x=L*k,I.y=-E*n+m,I.z=L*F,h.push(I.x,I.y,I.z),_.set(k,R,F).normalize(),d.push(_.x,_.y,_.z),f.push(U,1-E),S.push(g++)}x.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let E=x[S][P],L=x[S+1][P],G=x[S+1][P+1],U=x[S][P+1];(e>0||S!==0)&&(u.push(E,L,U),b+=3),(t>0||S!==r-1)&&(u.push(L,G,U),b+=3)}c.addGroup(p,b,0),p+=b}function y(_){let I=g,b=new de,R=new C,P=0,S=_===!0?e:t,E=_===!0?1:-1;for(let G=1;G<=s;G++)h.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let L=g;for(let G=0;G<=s;G++){let O=G/s*l+a,k=Math.cos(O),F=Math.sin(O);R.x=S*F,R.y=m*E,R.z=S*k,h.push(R.x,R.y,R.z),d.push(0,E,0),b.x=k*.5+.5,b.y=F*.5*E+.5,f.push(b.x,b.y),g++}for(let G=0;G<s;G++){let U=I+G,O=L+G;_===!0?u.push(O,O+1,U):u.push(O+1,O,U),P+=3}c.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},il=class i extends Je{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ri=class extends Ss{constructor(e){super(e),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ss().fromJSON(s))}return this}},Jy={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Mp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=iM(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return wo(r,o,t,a,l,f,0),o}};function Mp(i,e,t,n,s){let r,o;if(s===pM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Gf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Gf(r,i[r],i[r+1],o);return o&&gl(o,o.next)&&(Ro(o),o=o.next),o}function Ts(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(gl(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&lM(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?eM(i,n,s,r):Qy(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ro(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=tM(Ts(i),e,t),wo(i,e,t,n,s,r,2)):o===2&&nM(i,e,t,n,s,r):wo(Ts(i),e,t,n,s,r,1);break}}}function Qy(i){let e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&ir(s,a,r,l,o,c,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function eM(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Pt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=Sh(f,g,e,t,n),v=Sh(x,m,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ir(a,u,l,h,c,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ir(a,u,l,h,c,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ir(a,u,l,h,c,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ir(a,u,l,h,c,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function tM(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!gl(s,r)&&Ep(s,n,n.next,r)&&Ao(s,r)&&Ao(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ro(n),Ro(n.next),n=i=r),n=n.next}while(n!==i);return Ts(n)}function nM(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&uM(o,a)){let l=bp(o,a);o=Ts(o,o.next),l=Ts(l,l.next),wo(o,e,t,n,s,r,0),wo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function iM(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Mp(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(hM(c));for(s.sort(sM),r=0;r<s.length;r++)t=rM(s[r],t);return t}function sM(i,e){return i.x-e.x}function rM(i,e){let t=oM(i,e);if(!t)return e;let n=bp(t,i);return Ts(n,n.next),Ts(t,t.next)}function oM(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ir(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Ao(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&aM(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function aM(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function lM(i,e,t,n){let s=i;do s.z===0&&(s.z=Sh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cM(s)}function cM(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Sh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function hM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ir(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function uM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!dM(i,e)&&(Ao(i,e)&&Ao(e,i)&&fM(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||gl(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function gl(i,e){return i.x===e.x&&i.y===e.y}function Ep(i,e,t,n){let s=wa(Pt(i,e,t)),r=wa(Pt(i,e,n)),o=wa(Pt(t,n,i)),a=wa(Pt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ta(i,t,e)||r===0&&Ta(i,n,e)||o===0&&Ta(t,i,n)||a===0&&Ta(t,e,n))}function Ta(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function wa(i){return i>0?1:i<0?-1:0}function dM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ep(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ao(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function fM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function bp(i,e){let t=new Th(i.i,i.x,i.y),n=new Th(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Gf(i,e,t,n){let s=new Th(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Th(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var qi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Vf(e),Wf(n,e);let o=e.length;t.forEach(Vf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Wf(n,t[l]);let a=Jy.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Vf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Mr=class i extends Ct{constructor(e=new Ri([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new it(s,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:mM,y,_=!1,I,b,R,P;p&&(y=p.getSpacedPoints(u),_=!0,d=!1,I=p.computeFrenetFrames(u,!1),b=new C,R=new C,P=new C),d||(m=0,f=0,g=0,x=0);let S=a.extractPoints(c),E=S.shape,L=S.holes;if(!qi.isClockWise(E)){E=E.reverse();for(let ce=0,_e=L.length;ce<_e;ce++){let w=L[ce];qi.isClockWise(w)&&(L[ce]=w.reverse())}}let U=qi.triangulateShape(E,L),O=E;for(let ce=0,_e=L.length;ce<_e;ce++){let w=L[ce];E=E.concat(w)}function k(ce,_e,w){return _e||console.error("THREE.ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(_e,w)}let F=E.length,ne=U.length;function X(ce,_e,w){let j,q,he,D=ce.x-_e.x,V=ce.y-_e.y,B=w.x-ce.x,T=w.y-ce.y,M=D*D+V*V,N=D*T-V*B;if(Math.abs(N)>Number.EPSILON){let $=Math.sqrt(M),le=Math.sqrt(B*B+T*T),Q=_e.x-V/$,be=_e.y+D/$,ee=w.x-T/le,ve=w.y+B/le,We=((ee-Q)*T-(ve-be)*B)/(D*T-V*B);j=Q+D*We-ce.x,q=be+V*We-ce.y;let ae=j*j+q*q;if(ae<=2)return new de(j,q);he=Math.sqrt(ae/2)}else{let $=!1;D>Number.EPSILON?B>Number.EPSILON&&($=!0):D<-Number.EPSILON?B<-Number.EPSILON&&($=!0):Math.sign(V)===Math.sign(T)&&($=!0),$?(j=-V,q=D,he=Math.sqrt(M)):(j=D,q=V,he=Math.sqrt(M/2))}return new de(j/he,q/he)}let pe=[];for(let ce=0,_e=O.length,w=_e-1,j=ce+1;ce<_e;ce++,w++,j++)w===_e&&(w=0),j===_e&&(j=0),pe[ce]=X(O[ce],O[w],O[j]);let me=[],oe,Ue=pe.concat();for(let ce=0,_e=L.length;ce<_e;ce++){let w=L[ce];oe=[];for(let j=0,q=w.length,he=q-1,D=j+1;j<q;j++,he++,D++)he===q&&(he=0),D===q&&(D=0),oe[j]=X(w[j],w[he],w[D]);me.push(oe),Ue=Ue.concat(oe)}for(let ce=0;ce<m;ce++){let _e=ce/m,w=f*Math.cos(_e*Math.PI/2),j=g*Math.sin(_e*Math.PI/2)+x;for(let q=0,he=O.length;q<he;q++){let D=k(O[q],pe[q],j);se(D.x,D.y,-w)}for(let q=0,he=L.length;q<he;q++){let D=L[q];oe=me[q];for(let V=0,B=D.length;V<B;V++){let T=k(D[V],oe[V],j);se(T.x,T.y,-w)}}}let Ze=g+x;for(let ce=0;ce<F;ce++){let _e=d?k(E[ce],Ue[ce],Ze):E[ce];_?(R.copy(I.normals[0]).multiplyScalar(_e.x),b.copy(I.binormals[0]).multiplyScalar(_e.y),P.copy(y[0]).add(R).add(b),se(P.x,P.y,P.z)):se(_e.x,_e.y,0)}for(let ce=1;ce<=u;ce++)for(let _e=0;_e<F;_e++){let w=d?k(E[_e],Ue[_e],Ze):E[_e];_?(R.copy(I.normals[ce]).multiplyScalar(w.x),b.copy(I.binormals[ce]).multiplyScalar(w.y),P.copy(y[ce]).add(R).add(b),se(P.x,P.y,P.z)):se(w.x,w.y,h/u*ce)}for(let ce=m-1;ce>=0;ce--){let _e=ce/m,w=f*Math.cos(_e*Math.PI/2),j=g*Math.sin(_e*Math.PI/2)+x;for(let q=0,he=O.length;q<he;q++){let D=k(O[q],pe[q],j);se(D.x,D.y,h+w)}for(let q=0,he=L.length;q<he;q++){let D=L[q];oe=me[q];for(let V=0,B=D.length;V<B;V++){let T=k(D[V],oe[V],j);_?se(T.x,T.y+y[u-1].y,y[u-1].x+w):se(T.x,T.y,h+w)}}}ie(),fe();function ie(){let ce=s.length/3;if(d){let _e=0,w=F*_e;for(let j=0;j<ne;j++){let q=U[j];xe(q[2]+w,q[1]+w,q[0]+w)}_e=u+m*2,w=F*_e;for(let j=0;j<ne;j++){let q=U[j];xe(q[0]+w,q[1]+w,q[2]+w)}}else{for(let _e=0;_e<ne;_e++){let w=U[_e];xe(w[2],w[1],w[0])}for(let _e=0;_e<ne;_e++){let w=U[_e];xe(w[0]+F*u,w[1]+F*u,w[2]+F*u)}}n.addGroup(ce,s.length/3-ce,0)}function fe(){let ce=s.length/3,_e=0;K(O,_e),_e+=O.length;for(let w=0,j=L.length;w<j;w++){let q=L[w];K(q,_e),_e+=q.length}n.addGroup(ce,s.length/3-ce,1)}function K(ce,_e){let w=ce.length;for(;--w>=0;){let j=w,q=w-1;q<0&&(q=ce.length-1);for(let he=0,D=u+m*2;he<D;he++){let V=F*he,B=F*(he+1),T=_e+j+V,M=_e+q+V,N=_e+q+B,$=_e+j+B;Ae(T,M,N,$)}}}function se(ce,_e,w){l.push(ce),l.push(_e),l.push(w)}function xe(ce,_e,w){we(ce),we(_e),we(w);let j=s.length/3,q=v.generateTopUV(n,s,j-3,j-2,j-1);Ye(q[0]),Ye(q[1]),Ye(q[2])}function Ae(ce,_e,w,j){we(ce),we(_e),we(j),we(_e),we(w),we(j);let q=s.length/3,he=v.generateSideWallUV(n,s,q-6,q-3,q-2,q-1);Ye(he[0]),Ye(he[1]),Ye(he[3]),Ye(he[1]),Ye(he[2]),Ye(he[3])}function we(ce){s.push(l[ce*3+0]),s.push(l[ce*3+1]),s.push(l[ce*3+2])}function Ye(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new tl[s.type]().fromJSON(s)),new i(n,e.options)}},mM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new de(r,o),new de(a,l),new de(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-h),new de(d,1-g),new de(x,1-p)]:[new de(a,1-l),new de(u,1-h),new de(f,1-g),new de(m,1-p)]}};function gM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Co=class i extends Ct{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new C,g=new de;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let v=p+m,y=v,_=v+n+1,I=v+n+2,b=v+1;a.push(y,_,b),a.push(_,I,b)}}this.setIndex(a),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Io=class i extends Ct{constructor(e=new Ri([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(r,3)),this.setAttribute("uv",new it(o,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;qi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];qi.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=qi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){let v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){let v=x[m],y=v[0]+h,_=v[1]+h,I=v[2]+h;n.push(y,_,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return xM(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function xM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Lt=class i extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],y=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let I=0;I<=t;I++){let b=I/t;h.x=-e*Math.cos(s+b*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+b*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(b+_,1-y),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let y=u[p][v+1],_=u[p][v],I=u[p+1][v],b=u[p+1][v+1];(p!==0||o>0)&&f.push(y,_,b),(p!==n-1||l<Math.PI)&&f.push(_,I,b)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(x,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yn=class i extends Ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new C,h=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var sl=class i extends Ct{constructor(e=new Qa(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new de,u=new C,h=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),v(),p()}function m(y){u=e.getPointAt(y/t,u);let _=o.normals[y],I=o.binormals[y];for(let b=0;b<=s;b++){let R=b/s*Math.PI*2,P=Math.sin(R),S=-Math.cos(R);l.x=S*_.x+P*I.x,l.y=S*_.y+P*I.y,l.z=S*_.z+P*I.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){let I=(s+1)*(y-1)+(_-1),b=(s+1)*y+(_-1),R=(s+1)*y+_,P=(s+1)*(y-1)+_;g.push(I,b,P),g.push(b,R,P)}}function v(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)c.x=y/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new tl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var rl=class extends Tt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Me=class extends Rn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=up,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cn=class extends Me{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Aa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function _M(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Xf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Sp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ki=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wh=class extends Ki{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:er,endingEnd:er}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case tr:r=e,a=2*t-n;break;case Da:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tr:o=e,l=2*n-t;break;case Da:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+v*o[c+I]+y*o[l+I]+_*o[h+I];return r}},ol=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Ah=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fr:t=this.InterpolantFactoryMethodDiscrete;break;case pr:t=this.InterpolantFactoryMethodLinear;break;case Bl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&_M(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Bl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=pr;var ji=class extends Bn{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=fr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var al=class extends Bn{};al.prototype.ValueTypeName="color";var Ci=class extends Bn{};Ci.prototype.ValueTypeName="number";var Rh=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Nt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ii=class extends Bn{InterpolantFactoryMethodLinear(e){return new Rh(this.times,this.values,this.getValueSize(),e)}};Ii.prototype.ValueTypeName="quaternion";Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends Bn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=fr;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends Bn{};Pi.prototype.ValueTypeName="vector";var Jn=class{constructor(e="",t=-1,n=[],s=Qh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Nn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(MM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=vM(l);l=Xf(l,1,u),c=Xf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ci(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,x){if(f.length!==0){let m=[],p=[];Sp(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){let y=d[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}s.push(new Ci(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(Pi,f+".position",d,"pos",s),n(Ii,f+".quaternion",d,"rot",s),n(Pi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function yM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ci;case"vector":case"vector2":case"vector3":case"vector4":return Pi;case"color":return al;case"quaternion":return Ii;case"bool":case"boolean":return ji;case"string":return $i}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function MM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=yM(i.type);if(i.times===void 0){let t=[],n=[];Sp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Wi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ch=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},EM=new Ch,Li=class{constructor(e){this.manager=e!==void 0?e:EM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Li.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mi={},Ih=class extends Error{constructor(e,t){super(e),this.response=t}},Po=class extends Li{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:s});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Mi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){v();function v(){h.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let b=0,R=u.length;b<R;b++){let P=u[b];P.onProgress&&P.onProgress(I)}p.enqueue(_),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Ih(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Wi.add(e,c);let u=Mi[e];delete Mi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ph=class extends Li{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=po("img");function l(){u(),Wi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ll=class extends Li{constructor(e){super(e)}load(e,t,n,s){let r=new $t,o=new Ph(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Er=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Lo=class extends Er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xc=new je,qf=new C,Yf=new C,Do=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;qf.setFromMatrixPosition(e.matrixWorld),t.position.copy(qf),Yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yf),t.updateMatrixWorld(),xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lh=class extends Do{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Di=class extends Er{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Lh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Kf=new je,no=new C,_c=new C,Dh=class extends Do{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),n.position.copy(no),_c.copy(n.position),_c.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_c),n.updateMatrixWorld(),s.makeTranslation(-no.x,-no.y,-no.z),Kf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kf)}},Mn=class extends Er{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Dh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Uh=class extends Do{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends Er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Uh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Zi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var cl=class extends Li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Wi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(e,l),r.manager.itemStart(e)}};var br=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=jf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function jf(){return performance.now()}var Nh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Nt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Nt.multiplyQuaternionsFlat(e,o,e,t,e,n),Nt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},iu="\\[\\]\\.:\\/",bM=new RegExp("["+iu+"]","g"),su="[^"+iu+"]",SM="[^"+iu.replace("\\.","")+"]",TM=/((?:WC+[\/:])*)/.source.replace("WC",su),wM=/(WCOD+)?/.source.replace("WCOD",SM),AM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",su),RM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",su),CM=new RegExp("^"+TM+wM+AM+RM+"$"),IM=["material","materials","bones","map"],Fh=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bM,"")}static parseTrackName(e){let t=CM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);IM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Fh;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Oh=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:er,endingEnd:er};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=x0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case v0:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Qh:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===_0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===g0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=tr,s.endingEnd=tr):(e?s.endingStart=this.zeroSlopeAtStart?tr:er:s.endingStart=Da,t?s.endingEnd=this.zeroSlopeAtEnd?tr:er:s.endingEnd=Da)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},PM=new Float32Array(1),In=class extends Ai{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;g=new Nh(Et.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ol(new Float32Array(2),new Float32Array(2),1,PM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Jn.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Qh),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Oh(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Jn.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var $f=new je,hl=class{constructor(e,t,n=0,s=1/0){this.ray=new Ms(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $f.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($f),this}intersectObject(e,t=!0,n=[]){return Bh(e,this,n,t),n.sort(Zf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Bh(e[s],this,n,t);return n.sort(Zf),n}};function Zf(i,e){return i.distance-e.distance}function Bh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Bh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);function ru(i,e){if(e===hp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Uo||e===dl){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Uo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ar=class extends Li{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new du(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new wu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Zi.extractUrlBase(e);o=Zi.resolveURL(c,this.path)}else o=Zi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Po(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Cp){try{o[at.KHR_BINARY_GLTF]=new Au(e)}catch(h){s&&s(h);return}r=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Uu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case at.KHR_MATERIALS_UNLIT:o[h]=new hu;break;case at.KHR_DRACO_MESH_COMPRESSION:o[h]=new Ru(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[h]=new Cu;break;case at.KHR_MESH_QUANTIZATION:o[h]=new Iu;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function LM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},cu=class{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ce(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ln);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ws(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Mn(u),c.distance=h;break;case"spot":c=new Di(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ui(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},hu=class{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return Le}extendParams(e,t,n){let s=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ln),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(s)}},uu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},du=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(a,a)}return Promise.all(r)}},fu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},pu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},mu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ln)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,mt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},gu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},xu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(a[0],a[1],a[2],ln),Promise.all(r)}},_u=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},vu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(a[0],a[1],a[2],ln),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,mt)),Promise.all(r)}},yu=class{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Mu=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Eu=class{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},bu=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Su=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Tu=class{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},wu=class{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==kn.TRIANGLES&&c.mode!==kn.TRIANGLE_STRIP&&c.mode!==kn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let x=new je,m=new C,p=new Nt,v=new C(1,1,1),y=new Xa(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&v.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,x.compose(m,p,v));for(let _ in l)if(_==="_COLOR_0"){let I=l[_];y.instanceColor=new Es(I.array,I.itemSize,I.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);Rt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Cp="glTF",Fo=12,Tp={JSON:1313821514,BIN:5130562},Au=class{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Fo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Fo,r=new DataView(e,Fo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Tp.JSON){let c=new Uint8Array(e,Fo+o,a);this.content=n.decode(c)}else if(l===Tp.BIN){let c=Fo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ru=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Lu[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Lu[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=wr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(f)},a,c,ln,d)})})}},Cu=class{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Iu=class{constructor(){this.name=at.KHR_MESH_QUANTIZATION}},xl=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,v=1-m,y=p-d+h;for(let _=0;_!==a;_++){let I=o[x+_+a],b=o[x+_+l]*u,R=o[g+_+a],P=o[g+_]*u;r[_]=v*I+y*b+m*R+p*P}return r}},DM=new Nt,Pu=class extends xl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return DM.fromArray(r).normalize().toArray(r),r}},kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wp={9728:jt,9729:on,9984:Xh,9985:ro,9986:Qs,9987:ri},Ap={33071:bi,33648:uo,10497:$n},ou={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},UM={CUBICSPLINE:void 0,LINEAR:pr,STEP:fr},au={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function NM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Me({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),i.DefaultMaterial}function As(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ui(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function FM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function OM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function BM(i){let e,t=i.extensions&&i.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+lu(t.attributes):e=i.indices+":"+lu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+lu(i.targets[n]);return e}function lu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Du(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var HM=new je,Uu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new LM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ll(this.options.manager):this.textureLoader=new cl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Po(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return As(r,a,s),Ui(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Zi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=ou[s.type],a=wr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ft(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=ou[s.type],c=wr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==h){let p=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,y=t.cache.get(v);y||(x=new c(a,p*f,s.count*f/u),y=new vo(x,f/u),t.cache.add(v,y)),m=new yo(y,l,d%f/u,g)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new Ft(x,l,g);if(s.sparse!==void 0){let p=ou.SCALAR,v=wr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,I=new v(o[1],y,s.sparse.count*p),b=new c(o[2],_,s.sparse.count*l);a!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,P=I.length;R<P;R++){let S=I[R];if(m.setX(S,b[R*l]),l>=2&&m.setY(S,b[R*l+1]),l>=3&&m.setZ(S,b[R*l+2]),l>=4&&m.setW(S,b[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=wp[d.magFilter]||on,u.minFilter=wp[d.minFilter]||ri,u.wrapS=Ap[d.wrapS]||$n,u.wrapT=Ap[d.wrapT]||$n,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==jt&&u.minFilter!==on,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new $t(x);m.needsUpdate=!0,d(m)}),t.load(Zi.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ui(h,o),h.userData.mimeType=o.mimeType||kM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new bs,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Eo,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Me}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[at.KHR_MATERIALS_UNLIT]){let h=s[at.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ce(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ln),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,mt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=It);let u=r.alphaMode||au.OPAQUE;if(u===au.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===au.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Le&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Le&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Le){let h=r.emissiveFactor;a.emissive=new Ce().setRGB(h[0],h[1],h[2],ln)}return r.emissiveTexture!==void 0&&o!==Le&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,mt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Ui(h,r),t.associations.set(h,{materials:e}),r.extensions&&As(s,h,r),h})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Rp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=BM(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[at.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Rp(new Ct,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?NM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],m=o[f],p,v=c[f];if(m.mode===kn.TRIANGLES||m.mode===kn.TRIANGLE_STRIP||m.mode===kn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new xr(x,v):new Y(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===kn.TRIANGLE_STRIP?p.geometry=ru(p.geometry,dl):m.mode===kn.TRIANGLE_FAN&&(p.geometry=ru(p.geometry,Uo));else if(m.mode===kn.LINES)p=new Ka(x,v);else if(m.mode===kn.LINE_STRIP)p=new vr(x,v);else if(m.mode===kn.LINE_LOOP)p=new ja(x,v);else if(m.mode===kn.POINTS)p=new yr(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&OM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ui(p,r),m.extensions&&As(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&As(s,h[0],r),h[0];let d=new Ke;r.extensions&&As(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(pl.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Yi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ui(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new _r(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let v=0,y=d.length;v<y;v++){let _=d[v],I=f[v],b=g[v],R=x[v],P=m[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let S=n._createAnimationTracks(_,I,b,R,P);if(S)for(let E=0;E<S.length;E++)p.push(S[E])}return new Jn(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,HM)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Mo:c.length>1?u=new Ke:c.length===1?u=c[0]:u=new Rt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ui(u,r),r.extensions&&As(n,u,r),r.matrix!==void 0){let h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ke;n.name&&(r.name=s.createUniqueName(n.name)),Ui(r,n),n.extensions&&As(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof Rn||d instanceof $t)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Ji[r.path]===Ji.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ji[r.path]){case Ji.weights:c=Ci;break;case Ji.rotation:c=Ii;break;case Ji.position:case Ji.scale:c=Pi;break;default:switch(n.itemSize){case 1:c=Ci;break;case 2:case 3:default:c=Pi;break}break}let u=s.interpolation!==void 0?UM[s.interpolation]:pr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Ji[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Du(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ii?Pu:xl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function zM(i,e,t){let n=e.attributes,s=new an;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let u=Du(wr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,l=new C;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Du(wr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new wn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Rp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Lu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ot.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Ui(i,e),zM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?FM(i,e.targets,t):i})}function Oo(i){let e=new Map,t=new Map,n=i.clone();return Ip(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ip(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Ip(i.children[n],e.children[n],t)}var _l={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},GM=new Yi(-1,1,1,-1,0,1),Nu=class extends Ct{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},VM=new Nu,Qn=class{constructor(e){this._mesh=new Y(VM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,GM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var vl=class extends pn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ai.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Qn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Bo=class extends pn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},yl=class extends pn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Rr=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new de);this._width=n.width,this._height=n.height,t=new Ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vl(_l),this.copyPass.material.blending=oi,this.clock=new br}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bo!==void 0&&(o instanceof Bo?n=!0:o instanceof yl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Cr=class extends pn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Lp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ir=class i extends pn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new Ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ht(r,o,{type:fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ht(r,o,{type:fn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ht(r,o,{type:fn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Lp;this.highPassUniforms=ai.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new de(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=_l;this.copyUniforms=ai.clone(u.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:jn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ce,this.oldClearAlpha=1,this.basic=new Le,this.fsQuad=new Qn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new de(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Tt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ir.BlurDirectionX=new de(1,0);Ir.BlurDirectionY=new de(0,1);var Dp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Pr=class extends pn{constructor(){super();let e=Dp;this.uniforms=ai.clone(e.uniforms),this.material=new rl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Qn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Hh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ko=class i extends Y{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Ut;let n=this,s=t.color!==void 0?new Ce(t.color):new Ce(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new qn,h=new C,d=new C,f=new C,g=new je,x=new C(0,0,-1),m=new ct,p=new C,v=new C,y=new ct,_=new je,I=this.camera,b=new Ht(r,o,{samples:c,type:fn}),R=new Tt({name:l.name!==void 0?l.name:"unspecified",uniforms:ai.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});R.uniforms.tDiffuse.value=b.texture,R.uniforms.color.value=s,R.uniforms.textureMatrix.value=_,this.material=R,this.onBeforeRender=function(P,S,E){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(E.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(d,f),p.dot(h)>0)return;p.reflect(h).negate(),p.add(d),g.extractRotation(E.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(f),v.subVectors(d,x),v.reflect(h).negate(),v.add(d),I.position.copy(p),I.up.set(0,1,0),I.up.applyMatrix4(g),I.up.reflect(h),I.lookAt(v),I.far=E.far,I.updateMatrixWorld(),I.projectionMatrix.copy(E.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(I.projectionMatrix),_.multiply(I.matrixWorldInverse),_.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(I.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let L=I.projectionMatrix;y.x=(Math.sign(m.x)+L.elements[8])/L.elements[0],y.y=(Math.sign(m.y)+L.elements[9])/L.elements[5],y.z=-1,y.w=(1+L.elements[10])/L.elements[14],m.multiplyScalar(2/m.dot(y)),L.elements[2]=m.x,L.elements[6]=m.y,L.elements[10]=m.z+1-a,L.elements[14]=m.w,n.visible=!1;let G=P.getRenderTarget(),U=P.xr.enabled,O=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(b),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(S,I),P.xr.enabled=U,P.shadowMap.autoUpdate=O,P.setRenderTarget(G);let k=E.viewport;k!==void 0&&P.state.viewport(k),n.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}};ko.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Ml=[{id:"lsd",name:"LSD",col:"#ff2fb0",verb:"nehmen",kind:"tab",msg:"\u{1F308} LSD \u2013 die Welt f\xE4ngt an zu flie\xDFen \u2026"},{id:"spd",name:"SPEED",col:"#ffe22f",verb:"ziehen",kind:"line",msg:"\u26A1 SPEED \u2013 Puls auf 180!"},{id:"coke",name:"KOKAIN",col:"#bfe9ff",verb:"ziehen",kind:"line",msg:"\u2744\uFE0F KOKAIN \u2013 alles glitzert und ist superhell"},{id:"ket",name:"KETAMIN",col:"#9a7dff",verb:"ziehen",kind:"line",msg:"\u{1F300} KETAMIN \u2013 ab ins K-Hole \u2026"},{id:"beer",name:"BIER",col:"#ffb02f",verb:"trinken",kind:"beer",msg:"\u{1F37A} BIER \u2013 Prost! Alles schwankt ein bisschen"},{id:"weed",name:"JOINTS",col:"#7ddc4a",verb:"rauchen",kind:"joint",msg:"\u{1F33F} JOINT \u2013 alles wird langsam, weich und gem\xFCtlich \u2026"}],Ho=240,Up=8,Fu=120,WM=.4,XM=3.2,qM=300,El=10,Np="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",YM=`
uniform sampler2D tDiffuse, tPrev; uniform float t, lsd, spd, coke, ket, beer, weed; uniform vec2 res; varying vec2 vUv;
vec3 hue(vec3 c, float a){ const vec3 k = vec3(0.57735); float ca = cos(a); return c * ca + cross(k, c) * sin(a) + k * dot(k, c) * (1.0 - ca); }
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
vec2 rot(vec2 p, float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c) * p; }
vec3 samp(vec2 u){ return texture2D(tDiffuse, clamp(u, 0.001, 0.999)).rgb; }
void main(){
  vec2 asp = vec2(res.x / res.y, 1.0);
  vec2 p = (vUv - 0.5) * asp; float r0 = length(p);
  // Gras: langsames, weiches Atmen
  p *= 1.0 + weed * 0.03 * sin(t * 0.35);
  p += weed * 0.006 * vec2(sin(p.y * 4.0 + t * 0.6), cos(p.x * 3.0 + t * 0.5));
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
  float dv = min(1.0, beer * 0.7 + ket * 0.45 + weed * 0.3);
  if (dv > 0.0) {
    vec2 off = vec2(0.03 + 0.012 * sin(t * 1.3), 0.008 * sin(t * 0.9)) * (beer + ket * 0.8 + weed * 0.25);
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
  // Gras: warm-gr\xFCn, satte Farben, leichter Dunst
  col = mix(col, ((col - lum) * 1.35 + lum) * vec3(0.95, 1.12, 0.85) + vec3(0.03, 0.05, 0.02), min(1.0, weed) * 0.65);
  col = mix(col, col + vec3(0.06, 0.08, 0.05) * (1.0 - r0), min(1.0, weed) * 0.5);
  // Vignette / Tunnel
  float vig = smoothstep(0.25 + 0.55 * (1.0 - min(1.0, ket)), 1.15, r0);
  col *= 1.0 - vig * min(0.95, ket * 0.95 + beer * 0.35 + spd * 0.45 + weed * 0.3);
  // Sehr viel genommen: man sieht fast nichts mehr, nur noch Farben und Muster
  float tot = lsd + spd + coke + ket + beer + weed;
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
  float fb = clamp(lsd * 0.75 + ket * 0.85 + beer * 0.25 + spd * 0.15 + weed * 0.35, 0.0, 0.9);
  col = mix(col, max(col, prev * 0.97), fb * 0.55);
  col = mix(col, prev, fb * 0.45);
  gl_FragColor = vec4(max(col, 0.0), 1.0);
}`,Ou=class extends pn{constructor(){super(),this.u={tDiffuse:{value:null},tPrev:{value:null},t:{value:0},res:{value:new de(1,1)},lsd:{value:0},spd:{value:0},coke:{value:0},ket:{value:0},beer:{value:0},weed:{value:0}},this.q=new Qn(new Tt({uniforms:this.u,vertexShader:Np,fragmentShader:YM,depthTest:!1,depthWrite:!1})),this.cu={tDiffuse:{value:null}},this.cq=new Qn(new Tt({uniforms:this.cu,vertexShader:Np,fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ gl_FragColor = texture2D(tDiffuse, vUv); }",depthTest:!1,depthWrite:!1}));let e={type:fn};this.a=new Ht(1,1,e),this.b=new Ht(1,1,e),this.fresh=!0}setSize(e,t){this.a.setSize(e,t),this.b.setSize(e,t),this.u.res.value.set(e,t),this.fresh=!0}render(e,t,n){this.u.tDiffuse.value=n.texture,this.u.tPrev.value=this.fresh?n.texture:this.b.texture,this.fresh=!1,e.setRenderTarget(this.a),this.q.render(e),this.cu.tDiffuse.value=this.a.texture,e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(),this.cq.render(e);let s=this.a;this.a=this.b,this.b=s}};function Fp(i){let{scene:e,camera:t,renderer:n,portals:s,me:r,textPlane:o,toast:a,net:l}=i,c=i.R_WALL,u=i.ARC,h=s.length,d=i.PR,f=[],g=new Le({color:16054015}),x=(()=>{let w=document.createElement("canvas");w.width=w.height=64;let j=w.getContext("2d");for(let he=0;he<64;he+=8)for(let D=0;D<64;D+=8)j.fillStyle=`hsl(${(D*5+he*7)%360},100%,55%)`,j.fillRect(D,he,8,8);j.fillStyle="#fff",j.font="bold 40px Arial",j.textAlign="center",j.fillText("\u263A",32,46);let q=new vn(w);return q.colorSpace=mt,q})(),m=new Le({map:x}),p=new Me({color:16052194,roughness:.9}),v=new Me({color:14205082,roughness:.9}),y=new Me({color:5910021,roughness:.15,metalness:.3,emissive:2757120,transparent:!0,opacity:.92}),_=new Le({color:16765802}),I=new Me({color:1381660,roughness:.25,metalness:.7}),b=new Me({color:11187400,roughness:.05,metalness:1,emissive:1711914});s.forEach((w,j)=>{let q=j===h-1?5:j%5,he=Ml[q],D=new Ce(he.col),V=new Ke;V.position.copy(w.pos),V.lookAt(0,0,0),e.add(V);let B=-1.98,T=.95,M=(ee,ve,We,ae,Ee,Oe,ke)=>{let Se=new Y(new Xe(ee,ve,We),ke);return Se.position.set(ae,Ee,Oe),V.add(Se),Se};M(1.6,.05,.55,0,T,B,new Me({color:1381660,roughness:.25,metalness:.7,emissive:D.clone().multiplyScalar(.22)}));let N=new Y(new Lt(.035,10,8),new Le({color:D,toneMapped:!1}));N.position.set(-.7,1.55,B-.2),V.add(N);for(let ee of[-.72,.72])for(let ve of[-.22,.22])M(.05,T,.05,ee,T/2,B+ve,I);M(1.6,.025,.025,0,T-.03,B+.28,new Le({color:D,toneMapped:!1}));let $=o([{t:he.name,size:120,c:he.col,font:'Impact, "Arial Black", sans-serif',weight:400,glow:he.col}],{w:768,h:170,pw:1.3});if($.position.set(0,1.85,B-.24),V.add($),he.kind!=="beer"&&he.kind!=="joint"&&M(.95,.012,.36,0,T+.031,B,b),he.kind==="joint"){M(.95,.02,.36,0,T+.035,B,new Me({color:6964260,roughness:.8}));let ee=new Ke;ee.position.set(-.56,T+.025,B-.15),ee.scale.setScalar(1.35),V.add(ee);let ve=new Me({color:8248394,roughness:.05,metalness:.1,transparent:!0,opacity:.55,emissive:1718800}),We=new Y(new Lt(.085,20,14,0,Math.PI*2,0,Math.PI*.62),ve);We.rotation.x=Math.PI,We.position.y=.07,ee.add(We);let ae=new Y(new Je(.066,.066,.006,20),ve);ae.position.y=.004,ee.add(ae);let Ee=new Y(new Je(.06,.068,.04,20),new Le({color:4894880,transparent:!0,opacity:.6}));Ee.position.y=.03,ee.add(Ee);let Oe=new Y(new Je(.03,.034,.42,18,1,!0),ve);Oe.position.y=.33,ee.add(Oe);let ke=new Y(new yn(.031,.006,8,20),ve);ke.rotation.x=Math.PI/2,ke.position.y=.54,ee.add(ke);let Se=new Y(new yn(.031,.004,6,3),ve);Se.rotation.x=Math.PI/2,Se.position.y=.3,ee.add(Se);let Qe=new Y(new Je(.008,.008,.13,8),ve);Qe.position.set(.055,.08,0),Qe.rotation.z=-.8,ee.add(Qe);let qe=new Y(new Je(.022,.01,.03,12),new Me({color:11581118,metalness:.9,roughness:.25}));qe.position.set(.1,.12,0),ee.add(qe);let vt=new Y(new lt(.05,.05),new Le({color:8248394,toneMapped:!1,transparent:!0,opacity:.9}));vt.position.set(0,.25,.034),ee.add(vt)}let le=[];for(let ee=0;ee<El;ee++){let ve=he.kind==="line"?-.36+ee*.08:-.32+ee%5*.16,We=he.kind==="line"?0:ee<5?-.08:.08,ae;if(he.kind==="line")ae=new Y(new Xe(.016,.007,.24),he.id==="spd"?new Le({color:16773576}):he.id==="ket"?new Le({color:15131391}):g),ae.position.set(ve,T+.041,B);else if(he.kind==="joint"){ae=new Ke;let Ee=new Y(new Je(.009,.005,.12,10),p);Ee.rotation.z=Math.PI/2,ae.add(Ee);let Oe=new Y(new Je(.0052,.0052,.018,8),v);Oe.rotation.z=Math.PI/2,Oe.position.x=-.068,ae.add(Oe);let ke=new Y(new il(.0095,.016,8),p);ke.rotation.z=-Math.PI/2,ke.position.x=.068,ae.add(ke),ae.position.set(-.3+ee%5*.15,T+.055,B+(ee<5?-.08:.08)),ae.rotation.y=(ee%5-2)*.12+(ee<5?.1:-.1)}else if(he.kind==="tab")ae=new Y(new Xe(.07,.003,.07),m),ae.position.set(ve,T+.039,B+We),ae.rotation.y=(ee%5-2)*.2;else{ae=new Ke;let Ee=new Y(new Je(.032,.032,.17,14),y);Ee.position.y=.085,ae.add(Ee);let Oe=new Y(new Je(.012,.03,.08,12),y);Oe.position.y=.21,ae.add(Oe);let ke=new Y(new Je(.0325,.0325,.06,14,1,!0),_);ke.position.y=.08,ae.add(ke),ae.position.set(ve+(ee<5?0:.05),T+.025,B+We*1.2)}V.add(ae),le.push(ae)}if(he.kind==="line"){let ee=new Y(new Je(.008,.008,.13,10),new Le({color:9421962}));ee.rotation.z=Math.PI/2,ee.position.set(.38,T+.045,B+.1),V.add(ee)}let Q=new Y(new Xe(.95,.35,.5),new Le({transparent:!0,opacity:0,depthWrite:!1}));Q.position.set(-.05,T+.15,B),V.add(Q);let be={i:j,di:q,P:w,D:he,units:le,left:new Array(El).fill(!0),takenAt:new Array(El).fill(0),hit:Q,aim:{secret:!0,table:j}};if(Q.userData.aim=be.aim,j===h-1){let ee=new Ke;ee.position.set(.6,T+.03,B),V.add(ee);let ve=new Y(new Xe(.3,.01,.16),new Le({color:16777215}));ee.add(ve);let We=new Le({color:14688288}),ae=new Y(new Xe(.05,.002,.016),We);ae.position.set(-.11,.006,.05),ee.add(ae);let Ee=ae.clone();Ee.rotation.y=Math.PI/2,ee.add(Ee);let Oe=new Y(new Je(.017,.017,.15,14),new Le({color:3800968,toneMapped:!1,transparent:!0,opacity:.85}));Oe.rotation.z=Math.PI/2,Oe.position.set(.02,.025,0),ee.add(Oe);let ke=new Y(new Je(.002,.002,.07,6),new Le({color:14540253}));ke.rotation.z=Math.PI/2,ke.position.set(.13,.025,0),ee.add(ke);let Se=new Y(new Je(.012,.012,.06,10),new Le({color:15658734}));Se.rotation.z=Math.PI/2,Se.position.set(-.08,.025,0),ee.add(Se);let Qe=o([{t:"GEGENMITTEL",size:90,c:"#39ff88",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"#39ff88"}],{w:768,h:140,pw:.7});Qe.position.set(.6,1.33,B-.24),V.add(Qe);let qe=new Y(new Xe(.34,.25,.3),Q.material);qe.position.set(.6,T+.1,B),V.add(qe),be.antiHit=qe,qe.userData.aim={secret:!0,anti:!0,table:j}}f.push(be)});let R=[];for(let w=-1;w<h;w++){let j=(w+.5-(h-1)/2)*u;R.push(new C(Math.sin(j)*(c-.6),0,-Math.cos(j)*(c-.6)))}function P(w){for(let j of R){let q=w.x-j.x,he=w.z-j.z,D=Math.hypot(q,he),V=.62+d;D<V&&D>1e-4&&(w.x=j.x+q/D*V,w.z=j.z+he/D*V)}for(let j of f){let q=j.P,he=w.x-q.pos.x,D=w.z-q.pos.z,V=he*q.n.x+D*q.n.z,B=he*q.t.x+D*q.t.z,T=-1.7+d;if(Math.abs(B)<.8+d&&V<T&&V>-2.6){let M=T-V;w.x+=q.n.x*M,w.z+=q.n.z*M}}}let S=w=>{let j=w.P;return(r.pos.x-j.pos.x)*j.n.x+(r.pos.z-j.pos.z)*j.n.z<-.35},E=Ml.map(()=>({doses:[],end:0})),L={lsd:0,spd:0,coke:0,ket:0,beer:0,weed:0},G=0,U=()=>performance.now()/1e3,O=w=>{if(w<0||w>=Ho)return 0;if(w<Up){let q=w/Up;return q*q*(3-2*q)}if(w<Fu)return 1;let j=(w-Fu)/(Ho-Fu);return 1-j*j*(3-2*j)};function k(w,j){let q=E[w];q.doses=q.doses.filter(D=>j-D<Ho);let he=0;for(let D of q.doses)he+=WM*O(j-D);return Math.min(XM,he)}function F(w){let j=U(),q=E[w];q.doses.push(j),q.end=j+Ho;let he=q.doses.filter(D=>j-D<Ho).length;a(Ml[w].msg+(he>1?` (${he}. Dosis \u2013 st\xE4rker!)`:" (ca. 4 Minuten)"))}function ne(){let w=U(),j=!1;for(let q of E)q.end>w&&(j=!0),q.end=0,q.doses=[];G=U(),a(j?"\u{1F489} Gegenmittel \u2013 alles wieder klar im Kopf":"\u{1F489} Gegenmittel \u2013 du warst eh n\xFCchtern \u{1F604}")}let X=()=>f.map(w=>w.left.reduce((j,q,he)=>j|(q?1<<he:0),0));function pe(w){f.forEach((j,q)=>{let he=w[q]|0;j.left=j.units.map((D,V)=>!!(he&1<<V)),j.units.forEach((D,V)=>D.visible=j.left[V])})}function me(){if(l.role!=="host")return;let w={t:"dg",s:X()};for(let j of l.conns.values())try{j.conn.send(w)}catch{}}function oe(w,j){let q=f[w];return!q||!q.left[j]?!1:(q.left[j]=!1,q.takenAt[j]=U(),q.units[j].visible=!1,!0)}function Ue(w){let j=f[w.table];if(!j||!S(j))return;if(w.anti){ne();return}let q=j.left.indexOf(!0);if(q<0){a(j.D.name+" ist leer \u2013 kommt in ein paar Minuten wieder");return}if(oe(w.table,q),F(j.di),l.role==="client"&&l.conn)try{l.conn.send({t:"dg1",i:w.table,k:q})}catch{}else me()}let Ze=0;function ie(w){if(l.role==="client"||(Ze+=w)<2)return;Ze=0;let j=U(),q=!1;for(let he of f)he.left.forEach((D,V)=>{!D&&j-he.takenAt[V]>qM&&(he.left[V]=!0,he.units[V].visible=!0,q=!0)});q&&me()}let fe=new Ou;fe.enabled=!1;let K=null;if(i.composer){let w=i.composer.passes;i.composer.insertPass(fe,Math.max(1,w.length-1))}function se(){if(K)return K;K=new Rr(n),K.addPass(new Cr(e,t)),K.addPass(fe),K.addPass(new Pr);let w=()=>K.setSize(window.innerWidth,window.innerHeight);return window.addEventListener("resize",w),w(),K}let xe=document.createElement("div");xe.id="tripHud",xe.style.cssText='position:fixed;left:16px;bottom:64px;z-index:20;font:600 14px "Segoe UI",system-ui,sans-serif;color:#fff;text-shadow:0 1px 4px #000;pointer-events:none;display:flex;flex-direction:column;gap:4px',document.body.appendChild(xe);let Ae=0,we=document.createElement("div");we.style.cssText="position:fixed;inset:0;background:#e8fff0;opacity:0;pointer-events:none;z-index:19",document.body.appendChild(we);let Ye=t.fov,ce=!1;function _e(w,j){ie(w);let q=U();L.lsd=k(0,q),L.spd=k(1,q),L.coke=k(2,q),L.ket=k(3,q),L.beer=k(4,q),L.weed=k(5,q),ce=L.lsd+L.spd+L.coke+L.ket+L.beer+L.weed>.002,fe.enabled=ce;for(let B in L)fe.u[B].value=L[B];fe.u.t.value=j,ce||(fe.fresh=!0);let D={};for(let B in L)D[B]=Math.min(1.6,L[B]);let V=Ye+D.coke*14+D.spd*10-D.ket*12+D.lsd*8*Math.sin(j*.5)+D.beer*3*Math.sin(j*.7)+D.weed*4;if(Math.abs(t.fov-V)>.01&&(t.fov=V,t.updateProjectionMatrix()),ce&&(t.rotation.z+=D.beer*.09*Math.sin(j*.8)+D.ket*.22*Math.sin(j*.23)+D.lsd*.06*Math.sin(j*.6),t.rotation.x+=D.beer*.035*Math.sin(j*1.1)+D.ket*.05*Math.sin(j*.31),t.rotation.y+=D.beer*.045*Math.sin(j*.55),t.rotation.z+=D.weed*.03*Math.sin(j*.4),t.position.y+=D.weed*.03*Math.sin(j*.5),t.position.y+=D.spd*.02*Math.sin(j*40)+D.coke*.008*Math.sin(j*33)),i.bloom&&(i.bloom.strength=.42+Math.min(1.2,D.coke*.7+D.lsd*.5+D.spd*.25)),G>0){let B=Math.max(0,1-(q-G)/1.3);we.style.opacity=String(B*.85),B<=0&&(G=0)}if((Ae+=w)>.5){Ae=0;let B=Ml.map((T,M)=>E[M].end>q?`<span><span style="color:${T.col}">\u25CF</span> ${T.name}${E[M].doses.length>1?" \xD7"+E[M].doses.length:""} ${Math.floor((E[M].end-q)/60)}:${String(Math.floor((E[M].end-q)%60)).padStart(2,"0")}</span>`:"").filter(Boolean);xe.innerHTML=B.join("")}}return{collide:P,tick:_e,use:Ue,targets:()=>{let w=[];for(let j of f)w.push(j.hit),j.antiHit&&w.push(j.antiHit);return w},prompt(w,j){let q=f[w.table],he=j?"Tippe auf <kbd>E</kbd>":"<kbd>E</kbd>";if(w.anti)return`<b style="color:#39ff88">\u{1F489} Gegenmittel</b><br><small>${he} = spritzen (hebt alle Drogen auf)</small>`;let D=q.left.filter(Boolean).length;return`<b style="color:${q.D.col}">${q.D.name}</b> <small>\xB7 ${D} von ${El} \xFCbrig</small><br><small>${D?he+" = "+q.D.verb:"leer \u2013 kommt bald wieder"}</small>`},canAim:w=>{let j=f[w.table];return!!j&&S(j)},speedMul:()=>Math.max(.35,1+Math.min(1.6,L.spd)*.7+Math.min(1.6,L.coke)*.35-Math.min(1.6,L.ket)*.55-Math.min(1.6,L.beer)*.15-Math.min(1.6,L.weed)*.3),jumpMul:()=>1+Math.min(1.6,L.spd)*.3+Math.min(1.6,L.coke)*.15-Math.min(1.6,L.ket)*.2,drift:(w,j)=>{let q=Math.min(1.6,L.beer)*1.6*Math.sin(j*.9)+Math.min(1.6,L.ket)*1.2*Math.sin(j*.37);Math.abs(q)>.001&&w.lengthSq()>0&&(w.x+=Math.cos(j*.3)*q,w.z+=Math.sin(j*.3)*q)},render(w){return ce?(w?w.render():se().render(),!0):!1},state:X,setState:pe,hostTake(w,j){oe(w,j),me()}}}var Hu=[{id:"",name:"Glatze"},{id:"hair_buzzed",name:"Kurz"},{id:"hair_simpleparted",name:"Scheitel"},{id:"hair_long",name:"Lang"},{id:"hair_buns",name:"Dutt"},{id:"hair_buzzedfemale",name:"Kurz (Frau)"}],zu=["Kein Oberteil","T-Shirt","Langarm","Tanktop"],Gu=["Keine Hose","Shorts","Lange Hose"],Vu=["Barfu\xDF","Schuhe"],mn=["#ff2fb0","#20e0ff","#ffe22f","#39ff88","#8a2fff","#ff6a1a","#f2f2f2","#1b1c22","#d81c1c","#2f5dff","#6b4a2e","#7a7f88"],Wu=["#2a1d15","#5a3b22","#a8743c","#e8c46a","#0d0d0d","#b8452a","#ff2fb0","#e8e8e8"],Qi=[{id:"",name:"Klassisch",kind:"Eigene Frisur & Kleidung"},{id:"remy",name:"Remy",kind:"Realistisch",top:1,parts:[["Oberteil",/^Tops/],["Hose",/^Bottoms/],["Schuhe",/^Shoes/],["Haare",/^Hair/]]},{id:"ch31",name:"Leo",kind:"Realistisch",top:1,parts:[["Pullover",/Sweater|Collar/],["Hose",/Pants/],["Schuhe",/Shoes/],["Haare",/Hair/]]},{id:"ch37",name:"Jody",kind:"Realistisch",top:1,parts:[["Shirt",/Shirt|Zipper/],["Hose",/Pants/],["Schuhe",/Sneakers/],["Haare",/Hair/]]},{id:"ch03",name:"Michelle",kind:"Realistisch"},{id:"soldier",name:"Soldat",kind:"Realistisch"},{id:"swat",name:"SWAT",kind:"Realistisch"},{id:"ch46",name:"Amy",kind:"Comic"},{id:"claire",name:"Claire",kind:"Comic"},{id:"kaya",name:"Rasta",kind:"Comic"},{id:"vegas",name:"Elvis",kind:"Comic"},{id:"ch43",name:"Wrestler",kind:"Comic"},{id:"ch14",name:"Fuchs",kind:"Comic"},{id:"tekmek",name:"TekMek",kind:"Realistisch",classic:1},{id:"hias",name:"HiAS",kind:"Realistisch",classic:1},{id:"ty",name:"Ty",kind:"Comic",top:1,parts:[["Pullover",/UpperBody/],["Hose",/LowerBody/],["Schuhe",/Shoes/],["Haare",/Hair/]]},{id:"granny",name:"Fitness-Oma",kind:"Comic"},{id:"mremireh",name:"Schuhkopf",kind:"Comic"},{id:"ch34",name:"Kobold",kind:"Comic"},{id:"pirate",name:"Pirat",kind:"Comic"},{id:"ch35",name:"Gasmaske",kind:"Realistisch"},{id:"xbot",name:"Roboter",kind:"Comic",parts:[["K\xF6rper",/Beta_Surface|Surface/],["Gelenke",/Joints/]]}],Xu=["Keine","Basecap","M\xFCtze","Hut"],qu=["Keine","Sonnenbrille","Party-Brille"],Dr={b:"m",s:0,h:"hair_simpleparted",hc:"#2a1d15",beard:0,top:0,tc:"#ff2fb0",bot:0,bc:"#1b1c22",sh:0,shc:"#f2f2f2",ch:"",p:["","","",""],cap:0,capc:"#1b1c22",gl:0,chain:0,bag:0,bagc:"#ff2fb0",spk:0},Xp=[[],[1,2],[1,2,3],[1]],qp=[[],[4,5],[4,5,6]],Yp=[[],[7]];function gn(i){let e=Object.assign({},Dr,i||{});e.b=e.b==="f"?"f":"m",e.s=e.s?1:0,Hu.some(t=>t.id===e.h)||(e.h=Dr.h);for(let t of["top","bot","sh"])e[t]=Math.max(0,Math.min(t==="top"?3:t==="bot"?2:1,e[t]|0));for(let t of["hc","tc","bc","shc"])/^#[0-9a-f]{6}$/i.test(e[t]||"")||(e[t]=Dr[t]);e.beard=e.beard&&e.b==="m"?1:0,Qi.some(t=>t.id===e.ch)||(e.ch=""),e.p=[0,1,2,3].map(t=>Array.isArray(e.p)&&/^#[0-9a-f]{6}$/i.test(e.p[t]||"")?e.p[t]:""),e.cap=Math.max(0,Math.min(Xu.length-1,e.cap|0)),e.gl=Math.max(0,Math.min(qu.length-1,e.gl|0)),e.chain=e.chain?1:0,e.bag=e.bag?1:0,e.spk=e.spk?1:0;for(let t of["capc","bagc"])/^#[0-9a-f]{6}$/i.test(e[t]||"")||(e[t]=Dr[t]);return e}function Kp(i=Math.random,e=!0,t=!0){let n=i()<.5?"m":"f",s=a=>a[Math.floor(i()*a.length)],r=n==="m"?["hair_buzzed","hair_simpleparted","hair_long","","hair_buzzed"]:["hair_long","hair_buns","hair_buzzedfemale","hair_long","hair_simpleparted"],o={b:n,s:i()<.4?1:0,h:s(r),hc:s(Wu),beard:n==="m"&&i()<.35?1:0,top:e?1+Math.floor(i()*3):0,tc:s(mn),bot:e?1+Math.floor(i()*2):0,bc:s(["#1b1c22","#23314f","#3a2e22","#4a4f58","#111111","#6b4a2e"]),sh:e?1:0,shc:s(["#f2f2f2","#111111","#ff2fb0","#20e0ff"])};return e&&(i()<.18&&(o.cap=1+Math.floor(i()*3),o.capc=s(mn)),i()<.15&&(o.gl=1+Math.floor(i()*2)),i()<.12&&(o.chain=1)),e&&t&&i()<.35&&(o.ch=s(["remy","ch31","ch37","ch03","ch46","claire","kaya","vegas","ch43","ch14","ty","granny","mremireh","ch34","pirate","ch35","tekmek","hias"])),o}async function jp(i="/System/figuren/"){let e=new Ar,t=p=>new Promise((v,y)=>{let _=new Image;_.onload=()=>v(_),_.onerror=y,_.src=i+p}),[n,s,...r]=await Promise.all([e.loadAsync(i+"mann.gltf"),e.loadAsync(i+"frau.gltf"),...["hair_buzzed","hair_simpleparted","hair_long","hair_buns","hair_buzzedfemale","hair_beard"].map(p=>e.loadAsync(i+p+".gltf"))]),[o,a,l,c,u,h]=await Promise.all(["m_skin0.jpg","m_skin1.jpg","f_skin0.jpg","f_skin1.jpg","m_mask.png","f_mask.png"].map(t)),d=p=>{let v=document.createElement("canvas");v.width=p.width,v.height=p.height;let y=v.getContext("2d");return y.drawImage(p,0,0),y.getImageData(0,0,v.width,v.height)},f={};["hair_buzzed","hair_simpleparted","hair_long","hair_buns","hair_buzzedfemale","hair_beard"].forEach((p,v)=>f[p]=r[v]);let g=new an().setFromObject(n.scene),x=1.8/(g.max.y-g.min.y),m={body:{m:n,f:s},hair:f,skins:{m:[d(o),d(a)],f:[d(l),d(c)]},masks:{m:d(u),f:d(h)},scale:x,tex:new Map,mats:new Map};try{let p=i+"mx/",v=await e.loadAsync(p+"anims.glb"),y=v.scene.getObjectByName("mixamorigHips"),_=m.mx={base:p,L:e,clips:{},xHip:y?y.position.length():1,chars:{xbot:v},wait:{},cache:new Map};for(let b of v.animations)_.clips[b.name]=b;let I=(()=>{try{return(JSON.parse(localStorage.getItem("operation-hias")||"{}").look||{}).ch||""}catch{return""}})();for(let b of Qi)b.id&&b.id!=="xbot"&&!b.classic&&zo(m,b.id);I&&_.wait[I]&&await Promise.race([_.wait[I],new Promise(b=>setTimeout(b,9e3))])}catch(p){console.warn("Neue Figuren fehlen",p)}return m}var $p=new Set(["tekmek","hias"]);var KM={b:"m",h:"hair_long",hc:"#2b1d12",beard:1,dreads:1},jM={b:"m",h:"hair_buzzed",hc:"#2a1e16",beard:1,dreads:0},Zp={tekmek:{top:1,tc:"#efefea",bot:2,bc:"#141414",sh:1,shc:"#1a1a1a",print:"",s:0},hias:{top:1,tc:"#121212",bot:1,bc:"#141414",sh:1,shc:"#1a1a1a",print:"blocks",s:0}};function zo(i,e){if($p.has(e))return Promise.resolve(null);let t=i&&i.mx;return!t||!e?Promise.resolve(null):t.chars[e]?Promise.resolve(t.chars[e]):(t.wait[e]||(t.wait[e]=t.L.loadAsync(t.base+e+".glb").then(n=>(n.scene.traverse(s=>{let r=s.material?Array.isArray(s.material)?s.material:[s.material]:[];for(let o of r)o.metalness>.15&&(o.metalness=.15,o.needsUpdate=!0)}),t.chars[e]=n)).catch(n=>(console.warn("Figur fehlt",e,n),null))),t.wait[e])}var Ur=(i,e)=>!e||$p.has(e)||!!(i&&i.mx&&i.mx.chars[e]);function $M(i,e){let t=[e.b,e.s,e.top,e.tc,e.bot,e.bc,e.sh,e.shc].join("|");if(i.tex.has(t))return i.tex.get(t);let n=i.skins[e.b][e.s],s=i.masks[e.b],r=n.width,o=n.height,a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c=l.createImageData(r,o),u=c.data,h=n.data,d=s.data,f=new Array(8).fill(null),g=p=>[parseInt(p.slice(1,3),16),parseInt(p.slice(3,5),16),parseInt(p.slice(5,7),16)];for(let p of Xp[e.top])f[p]=g(e.tc);for(let p of qp[e.bot])f[p]=g(e.bc);for(let p of Yp[e.sh])f[p]=g(e.shc);let x=s.width/r;for(let p=0;p<o;p++)for(let v=0;v<r;v++){let y=(p*r+v)*4,_=(Math.floor(p*x)*s.width+Math.floor(v*x))*4,I=Math.round(d[_]/30),b=f[I];if(b){let R=(h[y]+h[y+1]+h[y+2])/765,P=.62+R*.55;u[y]=Math.min(255,b[0]*P),u[y+1]=Math.min(255,b[1]*P),u[y+2]=Math.min(255,b[2]*P)}else if(Math.abs(h[y]-h[y+1])<14&&Math.abs(h[y+1]-h[y+2])<14&&h[y]>80){let R=18+(h[y]-80)*.18;u[y]=R,u[y+1]=R,u[y+2]=R+3}else u[y]=h[y],u[y+1]=h[y+1],u[y+2]=h[y+2];u[y+3]=255}l.putImageData(c,0,0);let m=new vn(a);return m.flipY=!1,m.colorSpace=mt,m.anisotropy=4,i.tex.set(t,m),m}function Op(i,e,t,n,s){for(let r of e.scene.getObjectsByProperty("isSkinnedMesh",!0)){let o=new Me({map:r.material.map,color:new Ce(s).multiplyScalar(2.2),roughness:.75,side:It}),a=new xr(r.geometry,o),l=r.skeleton.bones.map(c=>t[c.name]||t.Head);a.bind(new _r(l,r.skeleton.boneInverses),r.bindMatrix),a.frustumCulled=!1,a.castShadow=!0,n.add(a)}}function Al(i,e,t=!1){let n=gn(e);if(n.ch==="tekmek"?n=Object.assign({},n,KM,{ch:""}):n.ch==="hias"&&(n=Object.assign({},n,jM,{ch:""})),n.ch&&i.mx&&i.mx.chars[n.ch]){n.spk&&(Qi.find(o=>o.id===n.ch)||{}).top&&(n=Object.assign({},n,{p:n.p.slice()}),n.p[0]="#151515");let r=QM(i,n,t);return Bp(r,n,!0),n.spk?Lr(r,n.ch):n.print==="burger"?Lr(r,n.ch,Hp()):n.print==="blocks"&&Lr(r,n.ch,zp()),n.dreads&&Gp(r,n,!0),r}n.spk&&(n=Object.assign({},n,{top:1,tc:"#151515"}));let s=ZM(i,n,t);return Bp(s,n,!1),n.spk?Lr(s,"c"+n.b):n.print==="burger"?Lr(s,"c"+n.b,Hp()):n.print==="blocks"&&Lr(s,"c"+n.b,zp()),n.dreads&&Gp(s,n,!1),s}function ZM(i,e,t){let n=Oo(i.body[e.b].scene);n.scale.setScalar(i.scale);let s={};n.traverse(l=>{l.isBone&&(s[l.name]=l)});let r=[],o=null,a=new Ce(e.hc).multiplyScalar(2.2);return n.traverse(l=>{if(!(l.isSkinnedMesh||l.isMesh))return;l.frustumCulled=!1,l.castShadow=!0;let c=l.material&&l.material.name||"";if(/Superhero/i.test(c)){o=l.parent;let u="body|"+[e.b,e.s,e.top,e.tc,e.bot,e.bc,e.sh,e.shc].join("|"),h=t&&i.mats.get(u);h||(h=l.material.clone(),h.map=$M(i,e),h.roughness=.62,h.metalness=0,h.needsUpdate=!0,t&&i.mats.set(u,h)),l.material=h,r.push(h)}else/Hair/i.test(c)&&(l.material=l.material.clone(),l.material.color=a.clone())}),o=o||n,e.h&&i.hair[e.h]&&Op(i,i.hair[e.h],s,o,e.hc),e.beard&&i.hair.hair_beard&&Op(i,i.hair.hair_beard,s,o,e.hc),{m:n,bones:s,mats:r,look:e}}var Bu={Head:"mixamorigHead",neck_01:"mixamorigNeck",spine_03:"mixamorigSpine2",spine_02:"mixamorigSpine1",spine_01:"mixamorigSpine",pelvis:"mixamorigHips",hand_r:"mixamorigRightHand",hand_l:"mixamorigLeftHand",foot_r:"mixamorigRightFoot",foot_l:"mixamorigLeftFoot"};function JM(i,e){let t=i.clone();return t.color=new Ce(e),t.userData.tint=1,t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
 vec4 sampledDiffuseColor = texture2D( map, vMapUv );
 float lumT = dot( sampledDiffuseColor.rgb, vec3( 0.299, 0.587, 0.114 ) );
 diffuseColor.rgb *= vec3( 0.18 + lumT * 1.5 );
 diffuseColor.a *= sampledDiffuseColor.a;
#endif`)},t.customProgramCacheKey=()=>"tint",t}function QM(i,e,t){let n=i.mx,s=n.chars[e.ch],r=Qi.find(h=>h.id===e.ch)||{},o=Oo(s.scene),a={};o.traverse(h=>{h.isBone&&(a[h.name]=h)});for(let h in Bu)a[Bu[h]]&&(a[h]=a[Bu[h]]);let l=[];o.traverse(h=>{if(!(h.isSkinnedMesh||h.isMesh))return;h.frustumCulled=!1,h.castShadow=!0;let d=(r.parts||[]).findIndex(([,f])=>f.test(h.name)||f.test(h.material&&h.material.name||""));if(d>=0&&e.p[d]){let f=e.ch+"|"+h.name+"|"+e.p[d],g=t&&i.mats.get(f);g||(g=JM(h.material,e.p[d]),t&&i.mats.set(f,g)),h.material=g}h.material&&h.material.map&&(h.material.map.anisotropy=4),l.push(h.material)});let c=a.mixamorigHips;o.userData.mxRig={id:e.ch,ratio:c?c.position.length()/n.xHip:1,mx:n},o.scale.setScalar(1),o.updateMatrixWorld(!0);let u=(a.Head||c||o).getWorldScale(new C).x||1;return{m:o,bones:a,mats:l,look:e,mx:!0,inv:1/u}}var eE=[[/Death/i,"die"],[/Hit/i,"hit"],[/Sprint/i,"sprint"],[/Jog|Run/i,"run"],[/Crouch_Fwd/i,"sneak"],[/Crouch|Fixing|Kneel/i,"crouch"],[/Walk/i,"walk"],[/Jump/i,"jump"],[/Dance/i,"dance"],[/Driv/i,"drive"],[/Sit/i,"sit"],[/Wave/i,"wave"],[/Interact|Push|Punch|PickUp|Spell|Sword/i,"use"]];function tE(i,e){let t=i.id+"|"+e.uuid,n=i.mx.cache.get(t);if(n)return n;let s=i.mx.clips[e.name]?e.name:"idle";if(!i.mx.clips[e.name]){for(let[o,a]of eE)if(o.test(e.name)){s=a;break}}let r=i.mx.clips[s]||i.mx.clips.idle;return n=new Jn(e.name+"@mx",r.duration,r.tracks.filter(o=>o.name.endsWith(".quaternion")||o.name==="mixamorigHips.position").map(o=>{if(o.name!=="mixamorigHips.position")return o;let a=o.clone();for(let l=0;l<a.values.length;l++)a.values[l]*=i.ratio;return a})),n.userData={mx:1},i.mx.cache.set(t,n),n}if(!In.prototype.__mxPatch){let i=In.prototype.clipAction;In.prototype.clipAction=function(e,t,n){let s=t||this._root,r=s&&s.userData&&s.userData.mxRig;return r&&e&&!(e.userData&&e.userData.mx)&&(e=tE(r,typeof e=="string"?Jn.findByName(s,e)||{name:e,uuid:e}:e)),i.call(this,e,t,n)},In.prototype.__mxPatch=1}var ku=new Map,Jt=(i,e={})=>{let t=i+JSON.stringify(e);return ku.has(t)||ku.set(t,new Me(Object.assign({color:i,roughness:.6},e))),ku.get(t)};function Bp(i,e,t){if(!e.cap&&!e.gl&&!e.chain&&!e.bag)return;let n=i.bones,s=n.Head;i.m.updateMatrixWorld(!0);let o=d=>d.getWorldPosition(new C),a=.24;t&&n.mixamorigHeadTop_End&&s&&(a=o(n.mixamorigHeadTop_End).distanceTo(o(s))||.24);let l=(d,f,g)=>{if(!d)return;let x=d.getWorldQuaternion(new Nt),m=d.getWorldScale(new C);f.position.copy(d.worldToLocal(g.clone())),f.quaternion.copy(x.invert().multiply(f.quaternion)),f.scale.divide(m),f.castShadow=!0,d.add(f)},c=()=>{let d=a*.62;return t||(d=.118),d};if(s){let d=o(s),f=c(),g=d.clone().add(new C(0,t?a*.72:.12,t?0:.005));if(e.cap===1){let x=new Ke,m=new Y(new Lt(f*1.05,18,10,0,Math.PI*2,0,Math.PI/2),Jt(e.capc));m.scale.y=.72,x.add(m);let p=new Y(new Je(f*.9,f*.9,f*.06,18,1,!1,-Math.PI/2,Math.PI),Jt(e.capc));p.scale.set(1,1,.75),p.position.set(0,0,f*.55),x.add(p);let v=new Y(new Lt(f*.08,8,6),Jt(e.capc));v.position.y=f*.74,x.add(v),l(s,x,g.clone().add(new C(0,-f*.18,0)))}if(e.cap===2){let x=new Ke,m=new Y(new Lt(f*1.07,18,12,0,Math.PI*2,0,Math.PI*.55),Jt(e.capc,{roughness:.95}));m.scale.y=.95,x.add(m);let p=new Y(new yn(f*1.02,f*.12,8,24),Jt(e.capc,{roughness:.95}));p.rotation.x=Math.PI/2,p.position.y=f*.12,x.add(p);let v=new Y(new Lt(f*.25,10,8),Jt("#f2f2f2",{roughness:1}));v.position.y=f*1.05,x.add(v),l(s,x,g.clone().add(new C(0,-f*.32,0)))}if(e.cap===3){let x=new Ke,m=new Y(new Je(f*.82,f*.98,f*.85,18),Jt(e.capc));m.position.y=f*.42,x.add(m);let p=new Y(new Je(f*1.75,f*1.75,f*.06,24),Jt(e.capc));x.add(p);let v=new Y(new Je(f*.99,f*.99,f*.18,18,1,!0),Jt("#111111"));v.position.y=f*.12,x.add(v),l(s,x,g.clone().add(new C(0,-f*.08,0)))}if(e.gl){let x=new Ke,m=e.gl===1?Jt("#050508",{roughness:.05,metalness:.8}):new Le({color:[16723888,2154751,3800968][(e.capc||"").length%3],toneMapped:!1});for(let v of[-1,1]){let y=new Y(e.gl===1?new Lt(f*.34,14,10):new Je(f*.33,f*.33,f*.06,5),m);e.gl===1?y.scale.set(1.15,.8,.35):y.rotation.x=Math.PI/2,y.position.set(v*f*.42,0,0),x.add(y)}let p=new Y(new Xe(f*1.6,f*.06,f*.05),Jt("#111111"));p.position.y=f*.1,x.add(p);for(let v of[-1,1]){let y=new Y(new Xe(f*.05,f*.05,f*.95),Jt("#111111"));y.position.set(v*f*.82,f*.08,-f*.48),x.add(y)}l(s,x,d.clone().add(new C(0,t?a*.36:.075,t?f*.98:.105)))}}let u=n.neck_01||s,h=n.spine_03;if(e.chain&&u){let d=o(u),f=t?a*.5:.11,g=new Y(new yn(f,f*.07,6,28),Jt("#e8c45a",{metalness:1,roughness:.25}));g.rotation.x=Math.PI/2-.5;let x=new Y(new Je(f*.22,f*.22,f*.06,12),Jt("#e8c45a",{metalness:1,roughness:.2}));x.rotation.x=Math.PI/2,x.position.set(0,-f*.95,f*.15);let m=new Ke;m.add(g,x),l(u,m,d.clone().add(new C(0,-f*.55,f*.35)))}if(e.bag&&h){let d=o(h),f=t?a*1.1:.24,g=new Ke,x=new Y(new Xe(f*1.3,f*1.6,f*.6),Jt(e.bagc));g.add(x);let m=new Y(new Xe(f*1,f*.6,f*.25),Jt(e.bagc));m.position.set(0,-f*.35,-f*.4),g.add(m);for(let p of[-1,1]){let v=new Y(new Xe(f*.12,f*1.7,f*.05),Jt("#151515"));v.position.set(p*f*.42,0,f*.32),g.add(v)}l(h,g,d.clone().add(new C(0,-f*.1,-f*.62)))}}var bl=null,Sl=null,kp=new Map,nE="/SPK%20-%20Fuck%20the%20Police/spiel/assets/spk_logo.png";function iE(){if(Sl)return Sl;let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");(()=>{e.clearRect(0,0,256,256),e.fillStyle="#f2f2f2",e.font="900 78px Arial Black, Arial, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("S.P.K",128,128)})(),bl=new vn(i),bl.colorSpace=mt;try{let n=new Image;n.onload=()=>{e.clearRect(0,0,256,256);let s=Math.min(240/n.width,240/n.height),r=n.width*s,o=n.height*s;e.drawImage(n,128-r/2,128-o/2,r,o),bl.needsUpdate=!0},n.src=nE}catch{}return Sl=new Me({map:bl,transparent:!0,alphaTest:.05,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),Sl}function Lr(i,e,t){let n=i.m,s=i.bones.spine_03||i.bones.spine_02;if(!s)return;n.updateMatrixWorld(!0);let r=s.getWorldPosition(new C),o=n.getWorldPosition(new C),a=kp.get(e);if(!a){let d=r.y-o.y,f=-1e9,g=1e9,x=-1e9,m=new C;n.traverse(v=>{if(!v.isMesh||!v.geometry||!v.geometry.attributes.position)return;let y=v.geometry.attributes.position,_=Math.max(1,Math.floor(y.count/6e3));for(let I=0;I<y.count;I+=_)m.fromBufferAttribute(y,I).applyMatrix4(v.matrixWorld).sub(o),Math.abs(m.y-d)<.07&&Math.abs(m.x)<.25&&(Math.abs(m.x)<.05&&(f=Math.max(f,m.z)),m.z>0&&(g=Math.min(g,m.x),x=Math.max(x,m.x)))}),f<-1e8&&(f=.12);let p=x>g?x-g:.34;a={z:f,s:Math.max(.1,Math.min(.2,p*.55))},kp.set(e,a)}let l=a.s*(t?1.45:1),c=new Y(new lt(l,l),t||iE());c.renderOrder=2;let u=s.getWorldQuaternion(new Nt),h=s.getWorldScale(new C);c.position.copy(s.worldToLocal(new C(o.x,r.y-a.s*(t?.02:.15),o.z+a.z+.018))),c.quaternion.copy(u.invert()),c.scale.divide(h),s.add(c)}var Tl=null;function Hp(){if(Tl)return Tl;let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d"),t=(s,r,o,a=30)=>{e.fillStyle=o,e.beginPath(),e.roundRect(28,s,200,r,a),e.fill()};t(52,46,"#b98a5a",[60,60,12,12]),t(98,12,"#6fae3c",6),t(110,12,"#c8443a",6),t(122,28,"#4a2c1c",10),t(150,10,"#e8c84a",4),t(160,34,"#b98a5a",[8,8,30,30]),e.fillStyle="#f6e8c8";for(let s=0;s<9;s++)e.beginPath(),e.ellipse(60+s*18,66+s%2*8,4,2,.4,0,7),e.fill();e.fillStyle="#c8302a",e.font="bold 22px Arial",e.textAlign="center",e.fillText("DJ TEKMEK",128,228);let n=new vn(i);return n.colorSpace=mt,Tl=new Me({map:n,transparent:!0,alphaTest:.05,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),Tl}var wl=null;function zp(){if(wl)return wl;let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d"),t=7,n=()=>(t=t*16807%2147483647)/2147483647;e.fillStyle="#ecece6",e.fillRect(34,8,188,240),e.fillStyle="#121212";for(let r=0;r<9;r++){let o=16+r*26+n()*6,a=7+n()*13;e.fillRect(40+n()*24,o,120+n()*56,a)}for(let r=0;r<260;r++)e.fillStyle=n()<.5?"rgba(18,18,18,0.8)":"rgba(236,236,230,0.9)",e.fillRect(34+n()*188,8+n()*240,2+n()*16,1+n()*3);let s=new vn(i);return s.colorSpace=mt,wl=new Me({map:s,transparent:!0,alphaTest:.05,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),wl}function Gp(i,e,t){let n=i.bones.Head;if(!n)return;i.m.updateMatrixWorld(!0);let s=n.getWorldPosition(new C),r=.24;t&&i.bones.mixamorigHeadTop_End&&(r=i.bones.mixamorigHeadTop_End.getWorldPosition(new C).distanceTo(s)||.24);let o=t?r*.5:.1,a=s.y+(t?r*.45:.07),l=new Me({color:new Ce(e.hc||"#2b1d12").multiplyScalar(1.6),roughness:.95}),c=n.getWorldQuaternion(new Nt).invert(),u=n.getWorldScale(new C);for(let h=0;h<16;h++){let d=Math.PI*(.45+h/15*1.1)+Math.sin(h*7.3)*.08,f=h===1||h===14,g=(f?.42:.3)+h*37%10/40,x=new Je(.016,.011,g,5);x.translate(0,-g/2,0);let m=new Y(x,l);m.castShadow=!0;let p=new C(s.x+Math.sin(d)*o*1.05,a-Math.abs(Math.cos(d))*.02,s.z+Math.cos(d)*o*1.05);m.position.copy(n.worldToLocal(p.clone()));let v=new Nt().setFromEuler(new An(f?-.45:-Math.cos(d)*.25,0,Math.sin(d)*(f?.1:.25)));m.quaternion.copy(c.clone().multiply(v)),m.scale.set(1/u.x,1/u.y,1/u.z),n.add(m)}}var Vp=[[196,204,216],[130,96,210],[214,182,92],[232,234,240],[70,160,205]];function sE(i,e,t){let n="alien|"+e.getHexString()+"|"+t.join(",");if(i.tex.has(n))return i.tex.get(n);let s=i.skins.m[0],r=i.masks.m,o=s.width,a=s.height,l=document.createElement("canvas");l.width=o,l.height=a;let c=l.getContext("2d"),u=c.createImageData(o,a),h=u.data,d=s.data,f=r.data,g=r.width/o,x=new Array(8).fill(!1);for(let _ of[...Xp[2],...qp[2],...Yp[1]])x[_]=!0;let m=Math.round(e.r*255),p=Math.round(e.g*255),v=Math.round(e.b*255);for(let _=0;_<a;_++)for(let I=0;I<o;I++){let b=(_*o+I)*4,R=(Math.floor(_*g)*r.width+Math.floor(I*g))*4,P=Math.round(f[R]/30),S=(d[b]+d[b+1]+d[b+2])/765;if(x[P]){let E=.55+S*.6,L=_%64<3?.75:1;h[b]=Math.min(255,t[0]*E*L),h[b+1]=Math.min(255,t[1]*E*L),h[b+2]=Math.min(255,t[2]*E*L)}else{let E=.45+S*.85;h[b]=Math.min(255,m*E),h[b+1]=Math.min(255,p*E),h[b+2]=Math.min(255,v*E)}h[b+3]=255}c.putImageData(u,0,0);let y=new vn(l);return y.flipY=!1,y.colorSpace=mt,y.anisotropy=4,i.tex.set(n,y),y}var Wp=[8377946,5887648,10933834,4901064,10124799,7001706,14075978,5944575,14052020,4904570];function Jp(i,e=0){let t=Al(i,{b:"m",s:0,h:"",top:0,bot:0,sh:0},!1),n=new Ce(Wp[e%Wp.length]),s=new Me({map:sE(i,n,Vp[e%Vp.length]),roughness:.42,metalness:.2,emissive:n,emissiveIntensity:.08});t.m.traverse(o=>{if(!(o.isSkinnedMesh||o.isMesh))return;let a=o.material&&o.material.name||"";/Superhero/i.test(a)?o.material=s:o.visible=!1});let r=t.bones.Head;if(r){t.m.updateMatrixWorld(!0);let o=new C,a=new Nt,l=new C;r.matrixWorld.decompose(o,a,l);let c=t.m.scale.x,u=a.clone().invert(),h=(x,m,p=0)=>{let v=o.clone().add(m.clone().multiplyScalar(1));x.position.copy(r.worldToLocal(v));let y=new Nt().setFromEuler(new An(0,0,p));x.quaternion.copy(u.clone().multiply(y)),x.scale.divideScalar(l.x),r.add(x)},d=new Me({color:328968,roughness:.05,metalness:.7});for(let x of[-1,1]){let m=new Y(new Lt(.035,16,12),d);m.scale.set(1.15,.62,.5),h(m,new C(x*.042,.075,.095),x*.45)}let f=new Me({color:n,roughness:.4}),g=new Le({color:11992970,toneMapped:!1});for(let x of[-1,1]){let m=new Y(new Je(.006,.008,.16,6),f);h(m,new C(x*.04,.25,0),-x*.3);let p=new Y(new Lt(.022,10,8),g);h(p,new C(x*.065,.33,0))}r.scale.multiplyScalar(1.45)}return t}var Yu=["Waldrave Acid","Blaulicht Hardtechno","Sonnenaufgang","Schranz Attacke","Hardtekk SPK","Acid Nacht","Minimal im Unterholz","Industrial Wald"],rE=i=>encodeURI("/SPK - Fuck the Police/spiel/musik/tekkno"+(i+1)+".mp3"),Qp=5;function em(i){let{scene:e,camera:t,me:n,djFrames:s,net:r,toast:o,canvasTex:a,$:l}=i,c=i.CL,u=i.FIG,h=new C(0,0,8.6),d={waves:0,rad:{s:0,p:!0,v:.7,o:0,at:0},jumped:new Set,anims:[],aliens:[],built:!1},f=new Ke;f.visible=!1,e.add(f);{let D=[[0,-.5],[1.8,-.38],[3,-.04],[3.15,.04],[2.8,.25],[1.6,.46],[0,.5]].map(M=>new de(M[0],M[1])),V=new Y(new To(D,48),new Me({color:13687012,roughness:.3,metalness:.55,emissive:3819104,emissiveIntensity:.7}));f.add(V);let B=new Y(new Lt(1.25,32,16,0,Math.PI*2,0,Math.PI/2),new Me({color:8388560,roughness:.05,transparent:!0,opacity:.55,emissive:2792048,emissiveIntensity:.9}));B.position.y=.42,f.add(B),f.rim=[];for(let M=0;M<16;M++){let N=M/16*Math.PI*2,$=new Y(new Lt(.12,10,8),new Le({color:16777215,toneMapped:!1}));$.position.set(Math.cos(N)*2.95,.04,Math.sin(N)*2.95),f.add($),f.rim.push($)}let T=new Y(new Zn(1,32),new Le({color:11992986,toneMapped:!1}));T.rotation.x=Math.PI/2,T.position.y=-.51,f.add(T)}let g=a(64,256,D=>{let V=D.createLinearGradient(0,0,0,256);V.addColorStop(0,"rgba(255,255,255,0.95)"),V.addColorStop(1,"rgba(255,255,255,0.3)"),D.fillStyle=V,D.fillRect(0,0,64,256);for(let B=0;B<40;B++)D.fillStyle="rgba(255,255,255,0.25)",D.fillRect(Math.random()*64,Math.random()*256,2,30)});g.wrapS=g.wrapT=$n;let x=new Le({map:g,color:11992986,transparent:!0,opacity:0,blending:jn,depthWrite:!1,side:It,toneMapped:!1,fog:!1}),m=new Y(new Je(1,2.4,1,32,1,!0),x);m.visible=!1,e.add(m);let p=new Mn(10223482,0,14,1.6);e.add(p);let v=new Ke;v.position.copy(h),v.visible=!1,e.add(v);let y=a(256,64,()=>{});{let D=new Ke;D.scale.setScalar(1.35),D.position.y=0,v.add(D),v.R=D;let V=new Me({color:1447452,roughness:.5,metalness:.4}),B=new Me({color:13685980,roughness:.2,metalness:.95}),T=new Y(new Xe(1.3,.72,.38),V);T.position.y=.42,D.add(T);let M=new Y(new lt(1.26,.68),new Me({color:2368556,roughness:.7}));M.position.set(0,.42,.191),D.add(M),v.cones=[];for(let be of[-.38,.38]){let ee=new Y(new yn(.22,.025,8,32),B);ee.position.set(be,.4,.2),D.add(ee);let ve=new Y(new Zn(.2,32),new Me({color:657932,roughness:.9}));ve.position.set(be,.4,.195),D.add(ve);let We=new Y(new Zn(.06,16),new Me({color:3158074,metalness:.6}));We.position.set(be,.4,.2),D.add(We),v.cones.push(ve,We)}let N=new Y(new lt(.42,.11),new Le({map:y,toneMapped:!1}));N.position.set(0,.68,.195),D.add(N);for(let be=0;be<5;be++){let ee=new Y(new Xe(.06,.03,.05),B);ee.position.set(-.12+be*.06,.8,.12),D.add(ee)}let $=new Y(new yn(.42,.03,8,24,Math.PI),B);$.position.set(0,.78,0),D.add($);let le=new Y(new Je(.008,.008,.9,6),B);le.position.set(.55,1.15,-.1),le.rotation.z=-.35,D.add(le);for(let be of[-.55,.55]){let ee=new Y(new Xe(.1,.06,.3),V);ee.position.set(be,.03,0),D.add(ee)}let Q=new Y(new lt(1.26,.03),new Le({color:16723888,toneMapped:!1}));Q.position.set(0,.07,.195),D.add(Q),v.glow=Q}v.lookAt(0,0,0);let _=new Y(new Xe(2,1.4,1),new Le({transparent:!0,opacity:0,depthWrite:!1}));_.position.y=.6,v.add(_),_.userData.aim={radio:!0};let I=new Ke;I.position.copy(h).add(new C(1.7,0,-.6)),I.visible=!1,e.add(I);{let D=new Y(new Xe(.35,.22,.3),new Me({color:1118486,metalness:.5,roughness:.4}));D.position.y=.11,I.add(D);let V=new Y(new Zn(.06,16),new Le({color:3800968,toneMapped:!1}));V.position.set(0,.16,.151),I.add(V),I.lens=V,I.beams=[];let B=[16723888,3800968,2154751,16724016,11566079,16769583];for(let T=0;T<9;T++){let M=new Ke;M.position.y=.18;let N=new Y(new Je(.012,.012,22,4,1,!0),new Le({color:B[T%B.length],transparent:!0,opacity:.8,blending:jn,depthWrite:!1,toneMapped:!1}));N.position.y=11,M.add(N),I.add(M),I.beams.push(M)}I.light=new Mn(3800968,0,12,1.5),I.light.position.y=1.5,I.add(I.light)}function b(D){let V=Jp(u,D);V.m.rotation.y=Math.PI;let B=new Ke;B.add(V.m),e.add(B);let T=new In(V.m),M={};for(let Q of["dance","idle","use","walk"])c[Q]&&(M[Q]=T.clipAction(c[Q]),M[Q].play(),M[Q].setEffectiveWeight(Q==="idle"?1:0));M.dance&&(M.dance.time=Math.random()*M.dance.getClip().duration);let N=Math.PI+D/10*Math.PI*2+D%2*.3,$=2.4+(D>=4?1:0)+(D>=8?.9:0),le=h.clone().add(new C(Math.sin(N)*$,0,Math.cos(N)*$));return{root:B,mixer:T,acts:M,cur:"idle",spot:le,i:D,w:{idle:1}}}function R(D,V){!D.acts[V]||D.cur===V||(D.cur=V)}function P(D,V){for(let B in D.acts){let T=B===D.cur?1:0;D.w[B]=(D.w[B]||0)+(T-(D.w[B]||0))*Math.min(1,V*6),D.acts[B].setEffectiveWeight(D.w[B])}D.mixer.update(V)}let S={t:-1,wave:0,list:[]};function E(D,V){for(;d.aliens.length<D*2;)d.aliens.push(b(d.aliens.length));if(d.waves=Math.max(d.waves,D),V){for(let B of d.aliens)B.root.position.copy(B.spot),L(B),R(B,"dance");v.visible=I.visible=!0;return}S.t=0,S.wave=D,S.list=d.aliens.slice((D-1)*2,D*2);for(let B of S.list)B.root.visible=!1;pe(),me(!0),o(D===1?"\u{1F47D} Was ist DAS?! Ein UFO landet im Portal!":"\u{1F47D} Noch mehr Aliens kommen zur Party! ("+D*2+" Aliens)")}function L(D){let V=h.clone().sub(D.root.position);D.root.rotation.y=Math.atan2(-V.x,-V.z)}let G=new C(0,34,8.6),U=new C(h.x,8.2,h.z);function O(D,V){if(S.t<0)return;S.t+=D;let B=S.t,T=N=>N<0?0:N>1?1:N*N*(3-2*N);f.visible=B<15,B<4?f.position.lerpVectors(G,U,T(B/4)):B<12?(f.position.copy(U),f.position.y+=Math.sin(B*1.6)*.2):f.position.lerpVectors(U,G,T((B-12)/3)),f.rotation.y+=D*1.5,f.rim.forEach((N,$)=>N.material.color.setHSL(($/16+B*.5)%1,1,.6));let M=B>4.5&&B<11.5?Math.min(1,(B-4.5)*2,(11.5-B)*2):0;if(m.visible=M>.01,m.visible){let N=f.position.y-.5;m.position.set(f.position.x,N/2,f.position.z),m.scale.set(1,N,1),x.opacity=.4*M,g.offset.y-=D*.6}p.position.set(h.x,2.5,h.z),p.intensity=25*M,S.list.forEach((N,$)=>{let le=$*.4;if(B<5+le){N.root.visible=!1;return}if(N.root.visible=!0,B<8+le){let Q=T((B-5-le)/3);N.root.position.set(h.x+($?.8:-.8),pl.lerp(U.y-1.2,0,Q),h.z),N.root.rotation.y=B*2+$,R(N,"idle")}else if(B<10+le){let Q=T((B-8-le)/2),be=new C(h.x+($?.8:-.8),0,h.z);N.root.position.lerpVectors(be,N.spot,Q);let ee=N.spot.clone().sub(be);N.root.rotation.y=Math.atan2(-ee.x,-ee.z),R(N,"walk")}else S.wave===1&&B<12.5?(N.root.position.copy(N.spot),L(N),R(N,"use")):(N.root.position.copy(N.spot),L(N),R(N,"dance"))}),S.wave===1&&B>10.3&&!v.visible&&(v.visible=I.visible=!0,v.R.scale.setScalar(.01)),v.visible&&v.R.scale.x<1.35&&v.R.scale.setScalar(Math.min(1.35,v.R.scale.x+D*1.6)),S.wave===1&&B>12.5&&!d.started&&Ue()&&(d.started=!0,d.rad={s:Math.floor(Math.random()*8),p:!0,v:.7,o:0,at:oe()},fe(),ie()),B>15&&(S.t=-1,f.visible=!1,m.visible=!1,p.intensity=0,me(!1))}let k=null,F=null,ne=null,X=null;function pe(){let D=i.audio();if(!(!D||k)){k=new Audio,k.crossOrigin="anonymous",k.loop=!1,k.preload="auto",k.addEventListener("ended",()=>{Ue()&&(d.rad.s=(d.rad.s+1)%8,d.rad.o=0,d.rad.at=oe(),fe(),ie())});try{let V=D.AC.createMediaElementSource(k);F=D.AC.createPanner(),F.panningModel="HRTF",F.distanceModel="inverse",F.refDistance=5,F.rolloffFactor=1.1,F.maxDistance=60,X=D.AC.createGain(),X.gain.value=.7,V.connect(X),X.connect(F),F.connect(D.master);let B=v.position;F.positionX?(F.positionX.value=B.x,F.positionY.value=1,F.positionZ.value=B.z):F.setPosition(B.x,1,B.z)}catch(V){console.warn("Radio-Ton",V)}}}function me(D){let V=i.audio();if(V){if(!ne){ne=V.AC.createGain(),ne.gain.value=0,ne.connect(V.master);let B=V.AC.createOscillator();B.type="sawtooth",B.frequency.value=62;let T=V.AC.createOscillator();T.frequency.value=5;let M=V.AC.createGain();M.gain.value=9,T.connect(M),M.connect(B.frequency);let N=V.AC.createBiquadFilter();N.type="lowpass",N.frequency.value=700,B.connect(N),N.connect(ne),B.start(),T.start()}ne.gain.setTargetAtTime(D?.12:0,V.AC.currentTime,.4)}}let oe=()=>Date.now()/1e3,Ue=()=>r.role==="host"||r.role==="none"||!r.role;function Ze(){return d.rad.o+(d.rad.p?Math.max(0,oe()-d.rad.at):0)}function ie(){if(pe(),!k)return;let D=rE(d.rad.s);k.src.endsWith(D.split("/").pop())||(k.src=D),X?X.gain.value=d.rad.v:k.volume=d.rad.v;let V=Ze(),B=()=>{try{Math.abs(k.currentTime-V)>1.5&&isFinite(k.duration)&&V<k.duration&&(k.currentTime=V)}catch{}};if(k.readyState>=1?B():k.addEventListener("loadedmetadata",B,{once:!0}),d.rad.p){let T=k.play();T&&T.catch&&T.catch(()=>{})}else k.pause();xe()}function fe(){if(r.role!=="host")return;let D={t:"rad",s:Object.assign({},d.rad,{o:Ze()}),n:d.waves};for(let V of r.conns.values())try{V.conn.send(D)}catch{}}function K(D){let V=d.rad,B=Ze();D==="next"?(V.s=(V.s+1)%8,V.o=0,V.p=!0):D==="prev"?(V.s=(V.s+7)%8,V.o=0,V.p=!0):D==="toggle"?(V.o=B,V.p=!V.p):D==="up"?(V.v=Math.min(1,Math.round((V.v+.1)*10)/10),V.o=B):D==="down"&&(V.v=Math.max(0,Math.round((V.v-.1)*10)/10),V.o=B),D!=="up"&&D!=="down"&&D!=="toggle"&&(V.o=0),V.at=oe(),fe(),ie(),Ae()}function se(D){if(r.role==="client"&&r.conn)try{r.conn.send({t:"radc",c:D})}catch{}else K(D)}function xe(){let D=y.image.getContext("2d");D.fillStyle="#05140a",D.fillRect(0,0,256,64),D.fillStyle="#39ff88",D.font="700 22px Consolas, monospace",D.fillText((d.rad.p?"\u25B6 ":"\u275A\u275A ")+Yu[d.rad.s],8,28),D.font="16px Consolas, monospace",D.fillText("VOL "+"\u2588".repeat(Math.round(d.rad.v*10))+"\u2591".repeat(10-Math.round(d.rad.v*10)),8,52),y.needsUpdate=!0}document.body.insertAdjacentHTML("beforeend",`<div id="radBox" class="hidden" style="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;background:rgba(14,12,22,.96);border:1px solid rgba(255,255,255,.18);border-radius:18px;padding:18px 20px;width:min(420px,92vw);text-align:center;color:#fff;font-family:'Segoe UI',sans-serif">
   <div style="font:400 32px Impact,'Arial Black',sans-serif;color:#39ff88;letter-spacing:.05em">\u{1F47D} ALIEN-RADIO</div><div id="radSong" style="margin:8px 0 14px;font-size:16px;color:#d8d0e6"></div>
   <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">${[["prev","\u23EE"],["toggle","\u23EF"],["next","\u23ED"],["down","\u{1F509}"],["up","\u{1F50A}"]].map(([D,V])=>`<button data-rc="${D}" style="width:62px;height:54px;border-radius:12px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;font-size:24px;cursor:pointer">${V}</button>`).join("")}</div>
   <div id="radVol" style="margin-top:12px;font:14px Consolas,monospace;color:#39ff88"></div><p style="font-size:12px;color:#8e869f;margin-top:10px">Alle im Raum h\xF6ren das Radio \xB7 je n\xE4her, desto lauter</p>
   <button id="radClose" style="margin-top:8px;padding:10px 26px;border-radius:12px;border:0;background:linear-gradient(135deg,#ff2fb0,#b81cff);color:#fff;font:800 15px 'Segoe UI';cursor:pointer">Fertig</button></div>`);for(let D of document.querySelectorAll("[data-rc]"))D.onclick=V=>{V.stopPropagation(),se(D.dataset.rc)};function Ae(){l("radSong").textContent=(d.rad.p?"\u25B6 ":"\u275A\u275A ")+Yu[d.rad.s],l("radVol").textContent="Lautst\xE4rke "+Math.round(d.rad.v*100)+"%"}function we(){Ae(),l("radBox").classList.remove("hidden"),i.unlock()}l("radClose").onclick=()=>{l("radBox").classList.add("hidden"),i.relock()};function Ye(){for(let D of s){let V=D.g.position;if(Math.hypot(n.pos.x-V.x,n.pos.z-V.z)<3.6&&!d.jumped.has(D.i)){d.jumped.add(D.i),D.edge.material.color.setHex(3800968),setTimeout(()=>D.edge.material.color.setHex(16723888),900);let T=i.audio();if(T){let M=T.AC.createOscillator(),N=T.AC.createGain();M.type="triangle",M.frequency.value=440*Math.pow(2,d.jumped.size/8),N.gain.setValueAtTime(.12,T.AC.currentTime),N.gain.exponentialRampToValueAtTime(1e-4,T.AC.currentTime+.4),M.connect(N),N.connect(T.master),M.start(),M.stop(T.AC.currentTime+.45)}s.length&&d.jumped.size>=s.length&&(d.jumped.clear(),ce())}}}function ce(){if(d.waves>=Qp){o("\u{1F47D} Die Tanzfl\xE4che ist voll \u2013 mehr Aliens passen nicht ins Portal!");return}if(r.role==="client"&&r.conn){try{r.conn.send({t:"ufo"})}catch{}return}_e()}function _e(){if(d.waves>=Qp||S.t>=0)return;let D=d.waves+1;if(d.waves=D,r.role==="host")for(let V of r.conns.values())try{V.conn.send({t:"ufo",n:D})}catch{}E(D,!1)}let w=new C,j=new C;function q(D,V){O(D,V);for(let B of d.aliens)P(B,B.cur==="dance"?D*1.05:D);if(d.started||v.visible){let B=i.audio(),T=i.bass?i.bass():.5+.5*Math.sin(V*8),M=d.rad.p;v.cones.forEach((N,$)=>N.scale.setScalar(1+(M&&Math.sin(V*15.7)>.6?.08:0))),v.glow.material.color.setHSL(V*.15%1,1,.55),I.beams.forEach((N,$)=>{N.visible=M&&v.visible,N.rotation.z=Math.sin(V*(.7+$*.11)+$)*.9,N.rotation.x=Math.cos(V*(.5+$*.07)+$*2)*.6}),I.light.intensity=M&&v.visible?8+Math.sin(V*9)*4:0,I.light.color.setHSL(V*.2%1,1,.5),I.lens.material.color.setHSL(V*.3%1,1,.55);for(let N of d.aliens)N.cur==="dance"&&(N.root.position.y=0);if(B&&B.AC&&B.AC.listener){let N=B.AC.listener;t.getWorldDirection(w),j.set(0,1,0),N.positionX?(N.positionX.value=t.position.x,N.positionY.value=t.position.y,N.positionZ.value=t.position.z,N.forwardX.value=w.x,N.forwardY.value=w.y,N.forwardZ.value=w.z,N.upX.value=0,N.upY.value=1,N.upZ.value=0):(N.setPosition(t.position.x,t.position.y,t.position.z),N.setOrientation(w.x,w.y,w.z,0,1,0))}}r.role==="host"&&d.started&&(d.syncT=(d.syncT||0)+D)>6&&(d.syncT=0,d.rad.o=Ze(),d.rad.at=oe(),fe())}function he(D){if(!v.visible)return;let V=[{x:v.position.x,z:v.position.z,r:1},{x:I.position.x,z:I.position.z,r:.4},...d.aliens.filter(B=>B.root.visible).map(B=>({x:B.root.position.x,z:B.root.position.z,r:.35}))];for(let B of V){let T=D.x-B.x,M=D.z-B.z,N=Math.hypot(T,M),$=B.r+.35;N<$&&N>1e-4&&(D.x=B.x+T/N*$,D.z=B.z+M/N*$)}}return{tick:q,jump:Ye,collide:he,openRadio:we,targets:()=>v.visible?[_]:[],prompt:D=>`<b style="color:#39ff88">\u{1F47D} Alien-Radio</b> \xB7 ${Yu[d.rad.s]}<br><small>${D?"Tippe auf <kbd>E</kbd>":"<kbd>E</kbd>"} = bedienen (Song, Lautst\xE4rke)</small>`,state:()=>({n:d.waves,rad:Object.assign({},d.rad,{o:Ze(),at:oe()})}),setState(D){D.n>0&&(E(D.n,!0),d.started=!0,d.rad=Object.assign({},D.rad,{at:oe()}),ie())},remoteWave(D){D>d.waves&&E(D,!1)},setRad(D,V){V>d.waves&&S.t<0&&E(V,!0),d.rad=Object.assign({},D,{at:oe()}),d.started=!0,ie(),Ae()},hostRequest:()=>_e(),control:K}}function tm(i){let e=new Ke,t=.8,n=new Ri,s=[[-.42,0],[.4,0],[.4,.86],[.52,.93],[.5,1],[.24,1.06],[.13,1.5],[.24,1.52],[.24,1.75],[-.42,1.75]];n.moveTo(s[0][0],s[0][1]);for(let K of s.slice(1))n.lineTo(K[0],K[1]);n.closePath();let r=new Mr(n,{depth:t,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2});r.rotateY(-Math.PI/2),r.translate(t/2,0,0);let o=new Me({color:1379366,roughness:.35,metalness:.3}),a=new Y(r,o);a.castShadow=!0,a.receiveShadow=!0,e.add(a);let l=i(512,1024,(K,se,xe)=>{K.clearRect(0,0,se,xe),["#ff2fb0","#b81cff","#20e0ff"].forEach((we,Ye)=>{K.strokeStyle=we,K.lineWidth=26,K.shadowColor=we,K.shadowBlur=30,K.beginPath(),K.moveTo(-40,980-Ye*60),K.bezierCurveTo(160,760-Ye*60,300,520-Ye*60,560,380-Ye*60),K.stroke()}),K.shadowBlur=0,K.save(),K.translate(250,560),K.rotate(-Math.PI/2),K.font='900 150px Impact, "Arial Black"',K.textAlign="center",K.textBaseline="middle",K.lineWidth=10,K.strokeStyle="#000",K.strokeText("ARCADE",0,0),K.fillStyle="#ffd23f",K.fillText("ARCADE",0,0),K.restore();for(let we=0;we<40;we++)K.fillStyle="rgba(255,255,255,"+(.3+Math.random()*.5)+")",K.fillRect(Math.random()*se,Math.random()*xe*.5,4,4)}),c=new Me({map:l,transparent:!0,emissive:16777215,emissiveMap:l,emissiveIntensity:.6,roughness:.5});for(let K of[-1,1]){let se=new Y(new lt(.88,1.72),c);se.position.set(K*(t/2+.014),.87,-.04),se.rotation.y=K*Math.PI/2,e.add(se)}let u=new Le({color:16723888,toneMapped:!1});for(let K of[-1,1]){let se=new Y(new Xe(.02,.86,.02),u);se.position.set(K*(t/2+.01),.43,.405),e.add(se)}let h=document.createElement("canvas");h.width=320,h.height=240;let d=h.getContext("2d"),f=new vn(h);f.colorSpace=mt,f.magFilter=jt,f.minFilter=on;let g=new Y(new lt(.7,.47),new Me({color:328456,roughness:.3})),x=Math.atan2(.11,.44);g.position.set(0,1.28,.185+.02),g.rotation.x=-x,e.add(g);let m=new Y(new lt(.58,.4),new Le({map:f,toneMapped:!1}));m.position.set(0,1.28,.21),m.rotation.x=-x,e.add(m);let p=new Y(new lt(.58,.4),new Me({color:16777215,transparent:!0,opacity:.06,roughness:.05,metalness:.9,depthWrite:!1}));p.position.set(0,1.28,.214),p.rotation.x=-x,e.add(p);let v=i(512,128,(K,se,xe)=>{let Ae=K.createLinearGradient(0,0,se,0);Ae.addColorStop(0,"#2a0050"),Ae.addColorStop(.5,"#5a0a6a"),Ae.addColorStop(1,"#2a0050"),K.fillStyle=Ae,K.fillRect(0,0,se,xe),K.font='900 76px Impact, "Arial Black"',K.textAlign="center",K.textBaseline="middle",K.shadowColor="#ff2fb0",K.shadowBlur=24,K.fillStyle="#ff7fd8",K.fillText("SPK ARCADE",se/2,xe/2+4),K.shadowBlur=0,K.fillStyle="#ffd23f";for(let we=0;we<18;we++)K.beginPath(),K.arc(16+we*28.5,8,4,0,7),K.fill(),K.beginPath(),K.arc(16+we*28.5,xe-8,4,0,7),K.fill()}),y=new Le({map:v,toneMapped:!1}),_=new Y(new lt(.76,.2),y);_.position.set(0,1.635,.252+.002),e.add(_);let I=Math.atan2(.06,.26),b=new Ke;b.position.set(0,1.03,.37),b.rotation.x=I,e.add(b);let R=i(256,96,(K,se,xe)=>{K.fillStyle="#1a1030",K.fillRect(0,0,se,xe),K.strokeStyle="#20e0ff",K.lineWidth=3,K.strokeRect(4,4,se-8,xe-8),K.fillStyle="#ff2fb0",K.font="700 14px Arial",K.fillText("1 PLAYER",14,22)}),P=new Y(new lt(.78,.27),new Me({map:R,roughness:.6}));P.rotation.x=-Math.PI/2,P.position.y=.016,b.add(P);let S=new Y(new Je(.012,.012,.09,8),new Me({color:2236962,metalness:.8,roughness:.3}));S.position.set(-.22,.05,.02),b.add(S);let E=new Y(new Lt(.03,16,12),new Me({color:14688288,roughness:.25}));E.position.set(-.22,.1,.02),b.add(E);let G=[16723888,2154751,16765503,3800968].map((K,se)=>{let xe=new Y(new Je(.022,.022,.025,16),new Me({color:K,emissive:K,emissiveIntensity:.5,roughness:.3}));return xe.position.set(.02+se%2*.07+Math.floor(se/2)*.14,.014,se%2*.05-.02),b.add(xe),xe}),U=new Y(new lt(.34,.3),new Me({color:2763312,metalness:.7,roughness:.35}));U.position.set(0,.5,.418),e.add(U);for(let K of[-.07,.07]){let se=new Y(new lt(.05,.08),new Le({color:16747050,toneMapped:!1}));se.position.set(K,.55,.42),e.add(se)}let O=new Mn(8023551,2.2,4,1.6);O.position.set(0,1.3,.7),e.add(O);let k=i(128,128,K=>{let se=K.createRadialGradient(64,64,0,64,64,64);se.addColorStop(0,"rgba(255,47,176,0.6)"),se.addColorStop(1,"rgba(255,47,176,0)"),K.fillStyle=se,K.fillRect(0,0,128,128)}),F=new Y(new lt(2.2,2.2),new Le({map:k,transparent:!0,depthWrite:!1,blending:jn}));F.rotation.x=-Math.PI/2,F.position.set(0,.015,.35),e.add(F);let ne=new Y(new Xe(t+.3,1.9,1.1),new Le({transparent:!0,opacity:0,depthWrite:!1}));ne.position.set(0,.95,0),e.add(ne);let X=[[10,8],[9,8],[8,8],[7,8]],pe=[1,0],me=[20,10],oe=0,Ue=0,Ze=["#ff2fb0","#20e0ff","#ffd23f","#39ff88"];function ie(K){d.fillStyle="#05030c",d.fillRect(0,0,320,240);for(let xe=0;xe<30;xe++)d.fillStyle=xe%3?"#2a2448":"#4a4478",d.fillRect((xe*97+K*20)%320,xe*53%240,2,2);let se=10;d.fillStyle="#ff3a3a",d.fillRect(me[0]*se+2,me[1]*se+2,6,6),X.forEach(([xe,Ae],we)=>{d.fillStyle=we?"#39ff88":"#9dffb8",d.fillRect(xe*se+1,Ae*se+1,8,8)}),d.font='bold 34px "Courier New", monospace',d.textAlign="center",d.fillStyle="#000",d.fillText("SPK ARCADE",162,62),d.fillStyle=Ze[Math.floor(K*2)%4],d.fillText("SPK ARCADE",160,60),d.font='bold 13px "Courier New", monospace',d.fillStyle="#f4f0ff",["SNAKE","PARTY-JAGD","PING-PONG","B\xD6LLER-BATTLE"].forEach((xe,Ae)=>d.fillText(xe,160,120+Ae*18)),Math.floor(K*2)%2&&(d.font='bold 16px "Courier New", monospace',d.fillStyle="#ffd23f",d.fillText("KLICK ODER E ZUM SPIELEN",160,220)),d.fillStyle="rgba(0,0,0,0.25)";for(let xe=0;xe<240;xe+=3)d.fillRect(0,xe,320,1);f.needsUpdate=!0}function fe(){let K=X[0],se=[[1,0],[-1,0],[0,1],[0,-1]].filter(Ae=>!(Ae[0]===-pe[0]&&Ae[1]===-pe[1])).filter(Ae=>{let we=K[0]+Ae[0],Ye=K[1]+Ae[1];return we>=0&&Ye>=0&&we<32&&Ye<24&&!X.some(ce=>ce[0]===we&&ce[1]===Ye)});if(!se.length){X.length=4,X[0]=[10,8];return}se.sort((Ae,we)=>Math.abs(K[0]+Ae[0]-me[0])+Math.abs(K[1]+Ae[1]-me[1])-(Math.abs(K[0]+we[0]-me[0])+Math.abs(K[1]+we[1]-me[1]))),pe=se[0];let xe=[K[0]+pe[0],K[1]+pe[1]];X.unshift(xe),xe[0]===me[0]&&xe[1]===me[1]?(me=[2+Math.floor(Math.random()*28),2+Math.floor(Math.random()*20)],X.length>22&&(X.length=6)):X.pop()}return ie(0),{g:e,hit:ne,tick(K,se){!se||K-Ue<.1||(Ue=K,oe++,fe(),ie(K),G.forEach((xe,Ae)=>{xe.material.emissiveIntensity=.3+.7*(Math.sin(K*4+Ae)>.6?1:0)}),u.color.setHSL(K*.08%1,1,.55))}}}var es={A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,BACK:8,START:9,L3:10,R3:11,UP:12,DOWN:13,LEFT:14,RIGHT:15},nm={A:"Space",B:"KeyC",X:"KeyE",Y:"KeyF",LB:"KeyQ",RB:"KeyR",LT:"mouse2",RT:"mouse0",BACK:"Tab",R3:"KeyM",UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight"},oE={Space:" ",Tab:"Tab",Escape:"Escape",Enter:"Enter",ShiftLeft:"Shift",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight"};if(typeof window<"u"&&!window.__ctrlGuard){window.__ctrlGuard=1;let i=0;addEventListener("keydown",e=>{(e.key==="Control"||e.key==="Meta")&&(i=performance.now());let t=e.target&&/^(INPUT|TEXTAREA)$/.test(e.target.tagName);(e.ctrlKey||e.metaKey)&&!t&&!/^Key[CVXAZ]$/.test(e.code)&&e.preventDefault(),(e.ctrlKey&&e.code==="KeyW"||e.code==="F5"||e.code==="BrowserBack"||e.altKey&&e.code==="ArrowLeft")&&e.preventDefault()},!0),addEventListener("keyup",e=>{(e.key==="Control"||e.key==="Meta")&&(i=0)},!0),addEventListener("blur",()=>{i=0}),addEventListener("beforeunload",e=>{if(i&&performance.now()-i<8e3)return e.preventDefault(),e.returnValue="",""})}var Go=null;function im(i){if(Go)return Go.set(i),Go;let e=Object.assign({},nm,i.map||{}),t={},n=[],s=!1,r=!1,o=null,a=0,l="",c=performance.now(),u=document.createElement("style");u.textContent='.padFocus{outline:3px solid #ffd23f!important;outline-offset:3px;box-shadow:0 0 18px rgba(255,210,63,.7)!important}#padBadge{position:fixed;left:50%;bottom:8px;transform:translateX(-50%);z-index:9999;background:rgba(10,8,16,.85);border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:5px 12px;font:600 12px "Segoe UI",sans-serif;color:#d8d0e6;pointer-events:none;transition:opacity .4s;white-space:nowrap}#padBadge b{color:#39ff88}',document.head.appendChild(u);let h=document.createElement("div");h.id="padBadge",h.style.opacity="0",document.body.appendChild(h);let d=0;function f(b,R=4e3){h.innerHTML=b,h.style.opacity="1",clearTimeout(d),d=setTimeout(()=>h.style.opacity="0",R)}addEventListener("gamepadconnected",b=>f("\u{1F3AE} <b>Controller verbunden</b> \u2013 A = ausw\xE4hlen \xB7 B = zur\xFCck \xB7 Start = Pause/Weiter")),addEventListener("gamepaddisconnected",()=>{x(),f("\u{1F3AE} Controller getrennt")});let g=(b,R)=>{if(b){if(b.startsWith("mouse")){let P=+b.slice(5),S=i.canvas||document.body;S.dispatchEvent(new MouseEvent(R?"mousedown":"mouseup",{button:P,buttons:R?P===0?1:2:0,bubbles:!0,cancelable:!0})),!R&&P===0&&S.dispatchEvent(new MouseEvent("click",{button:0,bubbles:!0,cancelable:!0}));return}if(b==="wheel"){R&&(i.canvas||document).dispatchEvent(new WheelEvent("wheel",{deltaY:100,bubbles:!0}));return}t[b]!==R&&(t[b]=R,document.dispatchEvent(new KeyboardEvent(R?"keydown":"keyup",{code:b,key:oE[b]||(b.startsWith("Key")?b.slice(3).toLowerCase():b.startsWith("Digit")?b.slice(5):b),bubbles:!0,cancelable:!0})))}};function x(){for(let b in t)t[b]&&g(b,!1)}function m(){return[...document.querySelectorAll("button, select, input:not([type=hidden]), a[href], [data-pad]")].filter(R=>{if(R.disabled||R.closest(".hidden"))return!1;let P=R.getBoundingClientRect();if(P.width<4||P.height<4)return!1;let S=getComputedStyle(R);if(S.visibility==="hidden"||S.display==="none"||+S.opacity==0||S.pointerEvents==="none")return!1;if(P.bottom<0||P.top>innerHeight||P.right<0||P.left>innerWidth)return!0;let E=Math.min(innerWidth-1,Math.max(0,P.left+P.width/2)),L=Math.min(innerHeight-1,Math.max(0,P.top+P.height/2)),G=document.elementFromPoint(E,L);return G&&(G===R||R.contains(G)||G.contains(R)||G.closest("label")===R.closest("label"))})}function p(b){if(o&&o.classList.remove("padFocus"),o=b,b){b.classList.add("padFocus");try{b.scrollIntoView({block:"nearest",inline:"nearest"})}catch{}if(b.tagName!=="INPUT"||b.type==="range"||b.type==="checkbox")try{b.focus({preventScroll:!0})}catch{}}}function v(b){let R=m();if(!R.length)return;if(!o||!R.includes(o)){p(i.first&&R.find(U=>i.first.includes(U.id))||R.find(U=>/\b(btn|primary)\b/.test(U.className)&&!/ghost/.test(U.className))||R.find(U=>U.tagName==="BUTTON")||R[0]);return}let P=o.getBoundingClientRect(),S=P.left+P.width/2,E=P.top+P.height/2,L=null,G=1e9;for(let U of R){if(U===o)continue;let O=U.getBoundingClientRect(),k=O.left+O.width/2,F=O.top+O.height/2,ne=k-S,X=F-E,pe=b==="up"?-X:b==="down"?X:b==="left"?-ne:ne,me=Math.abs(b==="up"||b==="down"?ne:X);if(pe<4)continue;let oe=pe+me*2.2;oe<G&&(G=oe,L=U)}L&&p(L)}function y(b,R){if(b.tagName==="SELECT"){let P=b.options.length;if(!P)return!1;let S=b.selectedIndex;for(let E=0;E<P&&(S=(S+R+P)%P,!!b.options[S].disabled);E++);return b.selectedIndex=S,b.dispatchEvent(new Event("input",{bubbles:!0})),b.dispatchEvent(new Event("change",{bubbles:!0})),!0}if(b.tagName==="INPUT"&&b.type==="range"){let P=+b.step||(+b.max-+b.min)/20||1;return b.value=String(Math.min(+b.max,Math.max(+b.min,+b.value+R*P))),b.dispatchEvent(new Event("input",{bubbles:!0})),b.dispatchEvent(new Event("change",{bubbles:!0})),!0}return!1}function _(b){if(b){if(b.tagName==="SELECT"){y(b,1);return}if(b.tagName==="INPUT"&&(b.type==="checkbox"||b.type==="radio")){b.click();return}if(b.tagName==="INPUT"){try{b.focus(),b.select()}catch{}f("\u2328\uFE0F Mit der Tastatur tippen, dann B dr\xFCcken",3e3);return}b.click()}}function I(){requestAnimationFrame(I);let b=performance.now(),R=Math.min(.05,(b-c)/1e3);c=b;let P=navigator.getGamepads?navigator.getGamepads():[],S=null;for(let oe of P)if(oe&&oe.connected&&oe.buttons.length>=16){S=oe;break}if(!S){s&&(x(),s=!1);return}let E=S.buttons.map(oe=>oe.value>.5),L=S.axes,G=oe=>Math.abs(oe)<.18?0:(oe-Math.sign(oe)*.18)/.82,U=G(L[0]||0),O=G(L[1]||0),k=G(L[2]||0),F=G(L[3]||0);if((E.some(oe=>oe)||Math.abs(U)+Math.abs(O)+Math.abs(k)+Math.abs(F)>.3)&&!s&&(s=!0,i.onActive&&i.onActive()),!s){n=E;return}let X=oe=>E[es[oe]]&&!n[es[oe]],pe=oe=>!E[es[oe]]&&n[es[oe]],me=i.isPlaying();if(me&&!i._helped&&(i._helped=!0,f(i.help||"\u{1F3AE} Linker Stick = laufen \xB7 Rechter Stick = umschauen \xB7 A = springen \xB7 B = ducken \xB7 X = benutzen \xB7 Start = Pause",7e3)),me){o&&p(null);for(let oe of["A","B","X","Y","LB","RB","LT","RT","BACK","R3","UP","DOWN","LEFT","RIGHT"]){let Ue=e[oe];Ue&&(X(oe)&&g(Ue,!0),pe(oe)&&g(Ue,!1))}if(i.stick==="steer"?(g(e.STEER_L||"KeyA",U<-.3),g(e.STEER_R||"KeyD",U>.3)):(g("KeyW",O<-.35),g("KeyS",O>.35),g("KeyA",U<-.35),g("KeyD",U>.35)),X("L3")&&(r=!r),Math.hypot(U,O)<.25&&(r=!1),i.stick!=="steer"&&g("ShiftLeft",r||Math.hypot(U,O)>.97),!i.noLook&&(k||F)){let oe=(i.lookSpeed||900)*R,Ue=Math.sign(k)*Math.pow(Math.abs(k),1.6)*oe,Ze=Math.sign(F)*Math.pow(Math.abs(F),1.6)*oe*.75;document.dispatchEvent(new MouseEvent("mousemove",{movementX:Ue,movementY:Ze,bubbles:!0}))}X("START")&&(x(),r=!1,i.pause())}else{x(),r=!1;let oe="";if(E[es.UP]||O<-.6?oe="up":E[es.DOWN]||O>.6?oe="down":E[es.LEFT]||U<-.6?oe="left":(E[es.RIGHT]||U>.6)&&(oe="right"),oe&&(oe!==l||b>a)&&(a=b+(oe!==l?450:160),l=oe,(oe==="left"||oe==="right")&&o&&y(o,oe==="left"?-1:1)||v(oe)),oe||(l=""),o&&!document.body.contains(o)&&p(null),!o&&(oe||X("A"))?v("down"):X("A")&&_(o),X("B")&&(document.activeElement&&document.activeElement.tagName==="INPUT"?document.activeElement.blur():i.back&&i.back()),(X("START")||X("X")&&i.startOnX)&&(i.canPlay&&i.canPlay()?(document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),p(null),i.padLock()):o&&_(o)),F){let Ue=o;for(;Ue&&Ue!==document.body&&!(Ue.scrollHeight>Ue.clientHeight+4&&/auto|scroll/.test(getComputedStyle(Ue).overflowY));)Ue=Ue.parentElement;Ue&&Ue!==document.body&&(Ue.scrollTop+=F*900*R)}}n=E}return requestAnimationFrame(I),Go={isActive:()=>s,badge:f,set:b=>{x(),i=b,e=Object.assign({},nm,b.map||{}),s&&i.onActive&&i.onActive()}},Go}var re=i=>document.getElementById(i),hn=new URLSearchParams(location.search),Qt=(()=>{try{return matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&"ontouchstart"in window||hn.has("touch")}catch{return!1}})();Qt&&document.body.classList.add("touch");var od=3*(Math.PI*2/12.7),dm=Math.PI*2-od,Vr=6,Ll=Math.PI*2/12.7,ed=19.2,cn=21.5,aE=1.65,fm=.35,sm=[16723888,2154751,10181887,4054148,16731501,16765503,58836,16739286,8191823,11584767],Xo=["#ff2fb0","#20e0ff","#3ddc84","#ff4d6d","#ffd23f","#9b5cff","#00e5d4","#ff6bd6","#7cff4f","#e0e0e0","#c08040","#5080ff","#ff9090","#90ffd0"],Fe={name:"Neue Pussy1",sens:1,vol:.8,gfx:"hoch",invert:!1};try{let i=JSON.parse(localStorage.getItem("operation-hias")||"null");i&&(Fe=Object.assign({},Fe,i))}catch{}(!Fe.name||Fe.name==="HiAS"||Fe.name==="Georg")&&(Fe.name="Neue Pussy1");Fe.look=gn(Fe.look);function Dl(){try{let i=JSON.parse(localStorage.getItem("operation-hias")||"{}")||{};i.name=Fe.name,i.vol=Fe.vol,i.look=Fe.look,localStorage.setItem("operation-hias",JSON.stringify(i))}catch{}}var rm="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",ad=()=>{let i="";for(let e=0;e<5;e++)i+=rm[Math.floor(Math.random()*rm.length)];return i},pm=!1;try{pm=!!sessionStorage.getItem("gbgc-zurueck")}catch{}var Ku=null;function mm(){if(Ku)return Ku;let i=null;if(pm)try{i=sessionStorage.getItem("gbgc-raum")}catch{}(!i||!/^[A-Z0-9]{5}$/.test(i))&&(i=ad());try{sessionStorage.setItem("gbgc-raum",i)}catch{}return Ku=i}var is=re("c"),os=new xo({canvas:is,antialias:!0,powerPreference:"high-performance"});os.setPixelRatio(Math.min(window.devicePixelRatio||1,Qt?1.25:1.5));os.toneMapping=Sr;os.toneMappingExposure=1.05;os.outputColorSpace=mt;var dt=new _o;dt.background=new Ce(329227);dt.fog=new Va(329227,.018);var Pn=new Ut(75,1,.05,200);Pn.rotation.order="YXZ";dt.add(Pn);var Rl=Fe.gfx==="niedrig"||hn.has("low")||Qt,hi=null,td=null;Rl||(hi=new Rr(os),hi.addPass(new Cr(dt,Pn)),td=new Ir(new de(512,512),.42,.4,.82),hi.addPass(td),hi.addPass(new Pr));function gm(){let i=window.innerWidth,e=window.innerHeight;os.setSize(i,e,!1),Pn.aspect=i/e,Pn.updateProjectionMatrix(),hi&&hi.setSize(i,e)}window.addEventListener("resize",gm);gm();function Ot(i,e,t,n){let s=document.createElement("canvas");s.width=i,s.height=e;let r=s.getContext("2d");t(r,i,e);let o=new vn(s);return o.colorSpace=mt,o.anisotropy=8,n&&(o.wrapS=o.wrapT=$n,o.repeat.set(n[0],n[1])),o}function Ns(i,e={}){let t=e.w||1024,n=e.h||256,s=Ot(t,n,o=>{o.clearRect(0,0,t,n),e.bg&&(o.fillStyle=e.bg,lE(o,6,6,t-12,n-12,26),o.fill(),o.strokeStyle=e.border||"rgba(255,255,255,0.25)",o.lineWidth=6,o.stroke()),o.textAlign="center",o.textBaseline="middle";let a=i.length;i.forEach((l,c)=>{let u=l.size||90;o.font=`${l.weight||400} ${u}px ${l.font||'Impact, "Arial Black", sans-serif'}`;let h=u;for(;o.measureText(l.t).width>t-60&&h>20;)h-=4,o.font=`${l.weight||400} ${h}px ${l.font||'Impact, "Arial Black", sans-serif'}`;o.shadowColor=l.glow||"transparent",o.shadowBlur=l.glow?8:0,o.fillStyle=l.c||"#fff",o.fillText(l.t,t/2,n*(c+.5)/a+(l.dy||0))})});return new Y(new lt(e.pw||4,(e.pw||4)*n/t),new Le({map:s,transparent:!0,depthWrite:!1,toneMapped:!1,side:It,color:14211288}))}function lE(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function cE(){let i=Ot(1024,1024,(h,d,f)=>{h.fillStyle="#101219",h.fillRect(0,0,d,f);for(let g=0;g<8;g++)for(let x=0;x<8;x++){let m=16+Math.floor(Math.random()*8);h.fillStyle=`rgb(${m},${m+2},${m+8})`,h.fillRect(x*128+3,g*128+3,122,122);for(let p=0;p<40;p++)h.fillStyle=`rgba(255,255,255,${Math.random()*.025})`,h.fillRect(x*128+Math.random()*120,g*128+Math.random()*120,2+Math.random()*10,1)}h.strokeStyle="rgba(80,160,255,0.10)",h.lineWidth=2;for(let g=0;g<=8;g++)h.beginPath(),h.moveTo(g*128,0),h.lineTo(g*128,f),h.stroke(),h.beginPath(),h.moveTo(0,g*128),h.lineTo(d,g*128),h.stroke()},[6,6]),e=new Y(new Zn(cn+.5,96),new Me({map:i,roughness:.32,metalness:.55,color:16777215}));e.rotation.x=-Math.PI/2,dt.add(e);let t=(h,d)=>new Le({color:h,transparent:!0,opacity:d,toneMapped:!1,side:It});for(let[h,d,f,g]of[[3.2,.06,16723888,.9],[3.45,.02,16723888,.6],[10.6,.04,2154751,.45],[17.4,.05,2154751,.5]]){let x=new Y(new Co(h,h+d,128),t(f,g));x.rotation.x=-Math.PI/2,x.position.y=.012,dt.add(x)}let n=Ot(1024,1024,(h,d,f)=>{h.translate(d/2,f/2),h.strokeStyle="rgba(255,47,176,0.85)",h.lineWidth=10,h.beginPath(),h.arc(0,0,440,0,Math.PI*2),h.stroke(),h.lineWidth=4,h.beginPath(),h.arc(0,0,400,0,Math.PI*2),h.stroke();for(let g=0;g<10;g++)h.save(),h.rotate(g*Math.PI/5),h.fillStyle="rgba(255,47,176,0.8)",h.fillRect(-6,-440,12,60),h.restore();h.font='400 210px Impact, "Arial Black", sans-serif',h.textAlign="center",h.textBaseline="middle",h.fillStyle="rgba(255,90,200,0.95)",h.fillText("SPK",0,-10),h.font='400 64px Impact, "Arial Black", sans-serif',h.fillStyle="rgba(255,255,255,0.75)",h.fillText("PORTAL",0,150)}),s=new Y(new Zn(3.1,64),new Le({map:n,transparent:!0,toneMapped:!1,opacity:.85,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.015,dt.add(s);{let h=new Image;h.onload=()=>{let d=n.image,f=d.getContext("2d"),g=d.width,x=d.height;f.setTransform(1,0,0,1,0,0),f.clearRect(0,0,g,x);let m=f.createRadialGradient(g/2,x/2,g*.2,g/2,x/2,g/2);m.addColorStop(0,"rgba(255,226,47,0.28)"),m.addColorStop(.75,"rgba(255,47,176,0.18)"),m.addColorStop(1,"rgba(255,47,176,0)"),f.fillStyle=m,f.beginPath(),f.arc(g/2,x/2,g/2,0,Math.PI*2),f.fill(),f.drawImage(h,g*.02,x*.02,g*.96,x*.96),n.needsUpdate=!0,s.material.opacity=1},h.src="/System/assets/logo4.png"}let r=Ot(1024,512,(h,d,f)=>{h.fillStyle="#14161e",h.fillRect(0,0,d,f);for(let g=0;g<8;g++)for(let x=0;x<4;x++){let m=22+Math.floor(Math.random()*10);h.fillStyle=`rgb(${m},${m+2},${m+10})`,h.fillRect(g*128+4,x*128+4,120,120),h.fillStyle="rgba(0,0,0,0.35)",h.fillRect(g*128+4,x*128+118,120,6)}h.fillStyle="rgba(32,224,255,0.55)",h.fillRect(0,250,d,5)},[10,2]),o=new Y(new Je(cn,cn,10,96,1,!0),new Me({map:r,side:Kt,roughness:.6,metalness:.4}));o.position.y=5,dt.add(o);for(let[h,d]of[[.25,2154751],[9.6,16723888]]){let f=new Y(new Je(cn-.05,cn-.05,.08,96,1,!0),new Le({color:d,side:Kt,toneMapped:!1}));f.position.y=h,dt.add(f)}let a=Ot(2048,1024,(h,d,f)=>{let g=h.createLinearGradient(0,0,0,f);g.addColorStop(0,"#0a0c1c"),g.addColorStop(1,"#03040a"),h.fillStyle=g,h.fillRect(0,0,d,f);for(let x=0;x<1600;x++){let m=Math.random();h.fillStyle=`rgba(255,255,255,${m*m})`;let p=Math.random()<.03?3:1.4;h.fillRect(Math.random()*d,Math.random()*f*.9,p,p)}for(let x=0;x<4;x++){let m=Math.random()*d,p=Math.random()*f*.6,v=h.createRadialGradient(m,p,0,m,p,260);v.addColorStop(0,x%2?"rgba(120,60,255,0.18)":"rgba(255,120,40,0.13)"),v.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=v,h.fillRect(0,0,d,f)}}),l=new Y(new Lt(cn,64,24,0,Math.PI*2,0,Math.PI/2),new Le({map:a,side:Kt,fog:!1}));l.position.y=10,l.scale.y=.55,dt.add(l);let c=new Me({color:2237743,roughness:.35,metalness:.8});for(let h=-1;h<Vr;h++){let d=(h+.5-(Vr-1)/2)*Ll,f=Math.sin(d)*(cn-.6),g=-Math.cos(d)*(cn-.6),x=new Y(new Xe(1,10,.9),c);x.position.set(f,5,g),x.rotation.y=-d,dt.add(x);let m=new Y(new Xe(.08,9,.08),new Le({color:h%2?2154751:16723888,toneMapped:!1}));m.position.set(Math.sin(d)*(cn-1.08),5,-Math.cos(d)*(cn-1.08)),dt.add(m)}dt.add(new Lo(8425664,3154968,1));let u=new Mn(16769728,60,30,1.6);u.position.set(0,9,0),dt.add(u)}var ts=null;function hE(){ts=new Ke,ts.position.set(0,6.2,0),dt.add(ts);let i=Ot(2048,256,(t,n,s)=>{t.clearRect(0,0,n,s),t.textAlign="center",t.textBaseline="middle",t.font='400 150px Impact, "Arial Black", sans-serif';for(let[r,o,a]of[[n*.25,"SPK","#ff7fd8"],[n*.75,"PORTAL","#9ff3ff"]])t.shadowColor=a,t.shadowBlur=8,t.fillStyle=a,t.fillText(o,r,s/2)}),e=new Y(new Je(3.6,3.6,.9,96,1,!0),new Le({map:i,transparent:!0,side:Fn,toneMapped:!1,depthWrite:!1,opacity:.85,color:13684944}));ts.add(e);for(let t of[-.62,.62]){let n=new Y(new yn(3.6,.025,6,128),new Le({color:16723888,toneMapped:!1}));n.rotation.x=Math.PI/2,n.position.y=t,ts.add(n)}}var uE="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",dE=`
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
}`,fi=[];function ju(i,e,t){let n=new Ri,s=i/2-t,r=e-i/2;return n.moveTo(-s,t),n.lineTo(s,t),n.lineTo(s,r),n.absarc(0,r,s,0,Math.PI,!1),n.lineTo(-s,t),n}function fE(i,e){let t=(i-(Vr-1)/2)*Ll,n=new C(Math.sin(t)*ed,0,-Math.cos(t)*ed),s=new Ke;s.position.copy(n),s.lookAt(0,0,0),dt.add(s);let r=new Ce(sm[i%sm.length]),o=!!e,a=3.4,l=4.7,c=ju(a+.7,l+.35,0),u=ju(a,l,0);c.holes.push(new Ss(u.getPoints(48)));let h=new Mr(c,{depth:.5,bevelEnabled:!0,bevelThickness:.06,bevelSize:.05,bevelSegments:2,curveSegments:48});h.translate(0,0,-.25);let d=new Y(h,new Me({color:5593964,roughness:.35,metalness:.75}));s.add(d);let f=u.getPoints(64).map(G=>new C(G.x,G.y,.27)),g=new Y(new sl(new So(f,!1),128,.045,6,!1),new Le({color:o?r:new Ce(4475477),toneMapped:!1}));s.add(g);let x=new Tt({vertexShader:uE,fragmentShader:dE,transparent:!0,depthWrite:!1,side:It,uniforms:{t:{value:Math.random()*10},c1:{value:r.clone().multiplyScalar(1)},c2:{value:r.clone().multiplyScalar(.18)},on:{value:o?1:0},hot:{value:0}}}),m=new Io(ju(a,l,0),48),p=m.attributes.uv,v=m.attributes.position;for(let G=0;G<p.count;G++)p.setXY(G,(v.getX(G)+a/2)/a,v.getY(G)/l);let y=new Y(m,x);s.add(y);let _=new Y(new Je(2.6,2.8,.12,48,1,!1,-Math.PI/2,Math.PI),new Me({color:1776933,roughness:.4,metalness:.7}));_.position.set(0,.06,.05),s.add(_);let I=new Y(new Co(2.55,2.62,48,1,Math.PI,Math.PI),new Le({color:o?r:3357252,toneMapped:!1,side:It}));I.rotation.x=-Math.PI/2,I.position.set(0,.125,.05),s.add(I);let b="#"+r.getHexString(),R=Ns(o?[{t:String(i+1),size:64,c:b,glow:b},{t:(e.name||e.ordner).toUpperCase(),size:92,c:"#ffffff",glow:b}]:[{t:String(i+1),size:64,c:"#667"},{t:"BALD VERF\xDCGBAR",size:80,c:"#8a8f9c"}],{w:1024,h:300,pw:4.4});if(R.position.set(0,l+1.85,.1),s.add(R),o&&(e.genre||e.spieler)){let G=Ns([{t:[e.genre,e.spieler].filter(Boolean).join("  \xB7  "),size:54,c:"#d8d2c6",font:'"Segoe UI", Arial, sans-serif',weight:600}],{w:1400,h:110,pw:3.8});G.position.set(0,l+.82,.3),s.add(G)}let P=null;o&&(P=new Mn(r,14,9,1.8),P.position.set(0,2.2,1.6),s.add(P));let S=null;if(o){let U=new Ct,O=new Float32Array(70*3),k=new Float32Array(70);for(let F=0;F<70;F++)O[F*3]=(Math.random()-.5)*3,O[F*3+1]=Math.random()*4.5,O[F*3+2]=.2+Math.random()*1.2,k[F]=.3+Math.random()*.9;U.setAttribute("position",new Ft(O,3)),S=new yr(U,new bs({color:r,size:.06,transparent:!0,opacity:.9,toneMapped:!1,depthWrite:!1,blending:jn})),S.userData.sp=k,s.add(S)}let E=new C(0,0,1).applyQuaternion(s.quaternion),L=new C(1,0,0).applyQuaternion(s.quaternion);fi.push({i,game:e,on:o,g:s,mat:x,light:P,parts:S,pos:n,n:E,t:L,col:b})}var ns=null,ui=null,Xt=null;function Br(i,e,t){let n=new Ke,s=null,r=null;if(ns&&Xt){let a=Al(Xt,t||Dr).m;a.rotation.y=Math.PI,n.add(a),s=new In(a),r={};for(let l of["idle","walk","run","jump"])ui[l]&&(r[l]=s.clipAction(ui[l]),r[l].play(),r[l].setEffectiveWeight(l==="idle"?1:0))}else if(ns){let a=Oo(ns.scene);if(!Br.sc){let c=new an().setFromObject(ns.scene);Br.sc=1.8/(c.max.y-c.min.y)}a.scale.setScalar(Br.sc),a.rotation.y=Math.PI;let l=new Ce(e);a.traverse(c=>{if(c.isMesh||c.isSkinnedMesh){c.frustumCulled=!1;let u=c.material&&/Joint/i.test(c.material.name);c.material=new Me({color:u?1711138:l,roughness:.55,metalness:.15,emissive:u?0:l,emissiveIntensity:u?0:.08})}}),n.add(a),s=new In(a),r={};for(let c of["idle","walk","run","jump"])ui[c]&&(r[c]=s.clipAction(ui[c]),r[c].play(),r[c].setEffectiveWeight(c==="idle"?1:0))}else{let a=new Y(new nl(.3,1.1,4,12),new Me({color:e}));a.position.y=.9,n.add(a)}let o=Ns([{t:i,size:80,c:e,font:'"Segoe UI", Arial, sans-serif',weight:700,glow:"rgba(0,0,0,0.9)"}],{w:768,h:128,pw:1.6});return o.position.y=2.15,n.add(o),dt.add(n),{root:n,mixer:s,act:r,tag:o,w:{idle:1,walk:0,run:0,jump:0}}}function om(i,e,t,n){if(!i.mixer)return;let s={idle:0,walk:0,run:0,jump:0};t?s.jump=1:e>4.2?s.run=1:e>.4?s.walk=1:s.idle=1;for(let r in i.w)i.w[r]+=(s[r]-i.w[r])*Math.min(1,n*8),i.act[r]&&i.act[r].setEffectiveWeight(i.w[r]);i.mixer.update(n)}var ht=null,ni=null;function ld(){if(ht){ht.state==="suspended"&&ht.resume();return}try{ht=new(window.AudioContext||window.webkitAudioContext),ni=ht.createGain(),ni.gain.value=.9*(Fe.vol==null?.8:Fe.vol),ni.connect(ht.destination);let i=ht.createGain();i.gain.value=.035;let e=ht.createBiquadFilter();e.type="lowpass",e.frequency.value=600,e.connect(i),i.connect(ni);for(let s of[55,82.4,110.2,164.8]){let r=ht.createOscillator();r.type="sawtooth",r.frequency.value=s,r.detune.value=(Math.random()-.5)*12;let o=ht.createGain();o.gain.value=.25,r.connect(o),o.connect(e),r.start()}let t=ht.createOscillator();t.frequency.value=.07;let n=ht.createGain();n.gain.value=250,t.connect(n),n.connect(e.frequency),t.start()}catch{ht=null}}function pE(i){let e=ht.createBuffer(1,ht.sampleRate*i,ht.sampleRate),t=e.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;return e}function cd(){if(!ht)return;let i=ht.currentTime,e=ht.createBufferSource();e.buffer=pE(2.2);let t=ht.createBiquadFilter();t.type="bandpass",t.Q.value=2,t.frequency.setValueAtTime(200,i),t.frequency.exponentialRampToValueAtTime(4e3,i+1.6);let n=ht.createGain();n.gain.setValueAtTime(1e-4,i),n.gain.exponentialRampToValueAtTime(.9,i+.5),n.gain.exponentialRampToValueAtTime(1e-4,i+2.1),e.connect(t),t.connect(n),n.connect(ni),e.start(i);let s=ht.createOscillator();s.type="sine",s.frequency.setValueAtTime(90,i),s.frequency.exponentialRampToValueAtTime(900,i+1.5);let r=ht.createGain();r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(.35,i+.4),r.gain.exponentialRampToValueAtTime(1e-4,i+1.8),s.connect(r),r.connect(ni),s.start(i),s.stop(i+2)}function hd(i){if(!ht)return;let e=ht.currentTime,t=ht.createOscillator();t.type="triangle",t.frequency.value=i?880:520;let n=ht.createGain();n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.25),t.connect(n),n.connect(ni),t.start(e),t.stop(e+.3)}var Rs=null;function mE(i){if(ht){if(!Rs){Rs=ht.createGain(),Rs.gain.value=0,Rs.connect(ni);let e=ht.createOscillator();e.type="sine",e.frequency.value=72;let t=ht.createOscillator();t.type="sine",t.frequency.value=108.5,e.connect(Rs),t.connect(Rs),e.start(),t.start()}Rs.gain.setTargetAtTime(i*.12,ht.currentTime,.2)}}var Ne={pos:new C(0,0,0),vel:new C,yaw:0,pitch:0,ground:!0},rt={},Zt=!1,en=!1,ut=!1;function xm(i){let e=Math.hypot(i.x,i.z),t=Math.atan2(i.x,-i.z),n=Math.abs(t)<Vr/2*Ll-.02?cn-.45:ed+.25;if(e>n&&(i.x*=n/e,i.z*=n/e),xn.collide(i),En.collide(i),ti.pos){let s=i.x-ti.pos.x,r=i.z-ti.pos.z,o=Math.hypot(s,r),a=.7;o<a&&o>1e-4&&(i.x=ti.pos.x+s/o*a,i.z=ti.pos.z+r/o*a)}if(zt){let s=i.x-zt.pos.x,r=i.z-zt.pos.z,o=Math.hypot(s,r),a=1.05;o<a&&o>1e-4&&(i.x=zt.pos.x+s/o*a,i.z=zt.pos.z+r/o*a)}if(Hn.pos){let s=i.x-Hn.pos.x,r=i.z-Hn.pos.z,o=Math.hypot(s,r),a=1.35;o<a&&o>1e-4&&(i.x=Hn.pos.x+s/o*a,i.z=Hn.pos.z+r/o*a)}for(let s of fi){let r=i.x-s.pos.x,o=i.z-s.pos.z,a=r*s.n.x+o*s.n.z,l=r*s.t.x+o*s.t.z;for(let c of[-1,1]){let u=s.pos.x+s.t.x*c*2.05,h=s.pos.z+s.t.z*c*2.05,d=i.x-u,f=i.z-h,g=Math.hypot(d,f),x=.45+fm;g<x&&g>1e-4&&(i.x=u+d/g*x,i.z=h+f/g*x)}if(s.side==null&&(s.side=1),Math.abs(l)>=2.4?s.side=a>=.02?1:-1:a>=.55?s.side=1:a<=-.5&&(s.side=-1),Math.abs(l)<2.4&&a<.55&&a>-.5&&!(s.on&&Math.abs(l)<1.55&&!ut&&s.side>0)){let u=(s.side>0?.55:-.5)-a;i.x+=s.n.x*u,i.z+=s.n.z*u}}}function gE(){if(!ut)for(let i of fi){if(!i.on)continue;let e=Ne.pos.x-i.pos.x,t=Ne.pos.z-i.pos.z,n=e*i.n.x+t*i.n.z,s=e*i.t.x+t*i.t.z;if(i.side>0&&n<.3&&n>-2&&Math.abs(s)<1.5&&Ne.pos.y<3){Sm(i.i);return}}}var _m="gbgc-raum-v1-",Is={debug:1,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}};hn.get("peerhost")&&(Is.host=hn.get("peerhost"),Is.port=+(hn.get("peerport")||9e3),Is.path=hn.get("peerpath")||"/",Is.secure=!1,Is.config={iceServers:[]});var ge={role:"none",code:null,peer:null,conns:new Map,conn:null,myId:0,nextId:1,status:""},Bt=new Map,xE=0;function Nr(i,e){ge.status=i,re("netStatus").textContent=i,re("netStatus").className=e?"warn":"",as()}function Ul(){try{ge.conn&&ge.conn.close()}catch{}try{ge.peer&&ge.peer.destroy()}catch{}ge.peer=null,ge.conn=null,ge.conns.clear();for(let i of Bt.values())dt.remove(i.av.root);Bt.clear(),clearInterval(ge.joinRetry),ge.joinRetry=null}function Ls(i=0){if(Ul(),ge.role="host",ge.code=mm(),ge.myId=0,ge.nextId=1,ge.names=new Map,Nr("Raum wird ge\xF6ffnet\u2026"),!window.Peer){Nr("Offline \u2013 Freunde k\xF6nnen gerade nicht beitreten.",!0);return}let e=new window.Peer(_m+ge.code,Is);ge.peer=e,Em(e),e.on("open",()=>{ge.peer===e&&Nr("Raum ist offen \u2013 Freunde k\xF6nnen beitreten.")}),e.on("error",t=>{if(ge.peer===e){if(t.type==="unavailable-id"&&i<12){Nr("Raum wird ge\xF6ffnet\u2026 ("+(i+1)+")");try{e.destroy()}catch{}setTimeout(()=>{ge.role==="host"&&ge.peer===e&&Ls(i+1)},2500);return}(t.type==="network"||t.type==="server-error"||t.type==="socket-error"||t.type==="socket-closed")&&Nr("Keine Internet-Verbindung \u2013 Freunde k\xF6nnen gerade nicht beitreten.",!0)}}),e.on("disconnected",()=>{setTimeout(()=>{try{ge.peer===e&&e.disconnected&&!e.destroyed&&e.reconnect()}catch{}},3e3)}),e.on("connection",t=>{t.on("data",s=>{if(ge.peer!==e||!s)return;let r=ge.conns.get(t.peer);if(s.t==="hello"){if(r)return;let o=ge.nextId++;r={conn:t,id:o},ge.conns.set(t.peer,r);let a=String(s.name||"Spieler").slice(0,16),l=dd(o,a,null,s.lk);l.pid=t.peer;try{t.send({t:"welcome",id:o,code:ge.code}),t.send({t:"dg",s:xn.state()}),t.send(Object.assign({t:"ufoS"},En.state()))}catch{}qt(a+" ist dem Raum beigetreten"),hd(!0);return}if(r)if(s.t==="s"){let o=Bt.get(r.id);o&&(o.tp.fromArray(s.p),o.ty=s.y,o.sp=s.v||0,o.air=!!s.a,o.tk!==!!s.tk&&(o.tk=!!s.tk,as()))}else if(s.t==="look"){let o=Bt.get(r.id);o&&ud(o,s.lk)}else if(s.t==="portal"){let o=fi[s.i];o&&o.on&&Tm(s.i,Bt.get(r.id)?.name)}else s.t==="arc"?Um(Bt.get(r.id)?.name):s.t==="dg1"?xn.hostTake(s.i|0,s.k|0):s.t==="ufo"?En.hostRequest():s.t==="radc"&&En.control(String(s.c))});let n=()=>{let s=ge.conns.get(t.peer);if(s){ge.conns.delete(t.peer);let r=Bt.get(s.id);r&&(qt(r.name+" hat den Raum verlassen"),Mm(s.id))}};t.on("close",n),t.on("error",n)})}function Cl(i,e={}){if(i=i.toUpperCase().replace(/[^A-Z0-9]/g,""),i.length!==5){re("joinInfo").textContent="Der Code hat 5 Zeichen.";return}if(i===mm()&&!e.silent){re("joinInfo").textContent="Das ist dein eigener Raum-Code.";return}if(!window.Peer){re("joinInfo").textContent="Keine Verbindung m\xF6glich (Internet?).";return}let t=()=>new Promise(s=>{let r=new window.Peer(Is);Em(r);let o=!1,a=c=>{if(!o){if(o=!0,clearTimeout(l),!c)try{r.destroy()}catch{}s(c?r:null)}},l=setTimeout(()=>a(!1),15e3);r.on("error",()=>a(!1)),r.on("open",()=>{let c=r.connect(_m+i,{reliable:!0,serialization:"json"});c.on("open",()=>{c.send({t:"hello",name:Fe.name,lk:Fe.look})}),c.on("data",u=>{if(u&&u.t==="welcome"&&!o){r._conn=c,r._id=u.id,a(!0);return}r===ge.peer&&_E(u)}),c.on("close",()=>{r===ge.peer&&!ut&&am(i)}),c.on("error",()=>{r===ge.peer&&!ut&&am(i)})})});return e.silent||(re("joinInfo").textContent="Verbinde mit "+i+"\u2026"),(async()=>{for(let s=0;s<3;s++){let r=await t();if(r)return r;if(ge.role==="client"&&ge.code===i)return null}return null})().then(s=>{if(!s)return e.silent||(re("joinInfo").textContent="Kein Raum mit diesem Code gefunden. Ist dein Freund in seinem Portal?"),!1;Ul(),ge.role="client",ge.code=i,ge.peer=s,ge.conn=s._conn,ge.myId=s._id,Nr("Verbunden mit dem Raum von deinem Freund."),re("joinInfo").textContent="",qt("Du bist im Raum "+i),hd(!0);try{sessionStorage.setItem("gbgc-letzter-raum",i)}catch{}return e.then&&e.then(),!0})}function am(i){qt("Verbindung zum Raum verloren \u2013 du bist jetzt in deinem eigenen Raum."),Ls(),vm(i)}function vm(i){let e=0;clearInterval(ge.joinRetry);let t=()=>{if(ge.role==="client"||ut){clearInterval(ge.joinRetry);return}if(++e>60){clearInterval(ge.joinRetry);return}Cl(i,{silent:!0})};ge.joinRetry=setInterval(t,5e3),setTimeout(t,800)}function _E(i){if(i)if(i.t==="w"){let e=new Set;for(let t of i.pl){if(t.id===ge.myId)continue;e.add(t.id);let n=Bt.get(t.id);n?t.lk&&ud(n,t.lk):n=dd(t.id,t.n,t.c,t.lk),n.tp.fromArray(t.p),n.ty=t.y,n.sp=t.v||0,n.air=!!t.a,n.pid=t.pid,n.tk!==!!t.tk&&(n.tk=!!t.tk,as())}for(let t of[...Bt.keys()])e.has(t)||Mm(t)}else i.t==="go"?wm(i.i,i.code,"join",i.who):i.t==="arcgo"?_d(i.code,"join",i.who):i.t==="msg"?qt(i.s):i.t==="dg"&&Array.isArray(i.s)?xn.setState(i.s):i.t==="ufo"?En.remoteWave(i.n|0):i.t==="ufoS"?En.setState(i):i.t==="rad"&&i.s&&En.setRad(i.s,i.n|0)}function ud(i,e){let t=gn(e),n=JSON.stringify(t);if(i.lkStr===n||(i.lkStr=n,i.look=t,!Xt))return;let s=i.av;i.av=Br(i.name,i.color,t),i.av.root.position.copy(s.root.position),i.av.root.rotation.copy(s.root.rotation),dt.remove(s.root),ym(i,t)}function ym(i,e){Xt&&e.ch&&!Ur(Xt,e.ch)&&zo(Xt,e.ch).then(()=>{Ur(Xt,e.ch)&&i.look===e&&(i.lkStr="",ud(i,e))})}function dd(i,e,t,n){let s=t||Xo[(1+xE++)%Xo.length],r=gn(n),o={id:i,name:e,color:s,av:Br(e,s,r),look:r,lkStr:JSON.stringify(r),p:new C(0,0,0),tp:new C(0,0,0),y:0,ty:0,sp:0,air:!1,fresh:!0};return Bt.set(i,o),ym(o,r),as(),o}function Mm(i){let e=Bt.get(i);e&&(dt.remove(e.av.root),Bt.delete(i),as())}var $u=0,Zu=0,ft={stream:null,calls:new Map,talking:!1,audios:new Map,asking:!1};function Em(i){i.on("call",e=>{try{e.answer()}catch{return}e.on("stream",n=>{let s=ft.audios.get(e.peer);s||(s=new Audio,s.autoplay=!0,s.playsInline=!0,ft.audios.set(e.peer,s),document.body.appendChild(s)),s.srcObject=n,s.volume=Fe.vol==null?.8:Fe.vol,s.muted=Fe.vol===0;let r=s.play();r&&r.catch&&r.catch(()=>{})});let t=()=>{let n=ft.audios.get(e.peer);n&&(n.srcObject=null,n.remove(),ft.audios.delete(e.peer))};e.on("close",t),e.on("error",t)})}async function vE(){if(ft.stream)return!0;if(ft.asking)return!1;if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return qt("Sprechen geht in diesem Browser leider nicht."),!1;ft.asking=!0;try{ft.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch{return qt("Mikrofon nicht erlaubt \u2013 bitte im Browser das Mikrofon erlauben."),ft.asking=!1,!1}ft.asking=!1;for(let i of ft.stream.getAudioTracks())i.enabled=!1;return fd(),!0}function fd(){if(!(!ft.stream||!ge.peer||ge.peer.destroyed)){for(let[i,e]of ft.calls)if(e._peer!==ge.peer||![...Bt.values()].some(t=>t.pid===i)){try{e.close()}catch{}ft.calls.delete(i)}for(let i of Bt.values())if(!(!i.pid||ft.calls.has(i.pid)))try{let e=ge.peer.call(i.pid,ft.stream);if(!e)continue;e._peer=ge.peer,ft.calls.set(i.pid,e);let t=()=>{ft.calls.get(i.pid)===e&&ft.calls.delete(i.pid)};e.on("close",()=>{console.log("[voice] call closed",i.pid),t()}),e.on("error",n=>{console.log("[voice] call error",n&&n.type,n&&n.message),t()})}catch(e){console.log("[voice] call failed",e&&e.message)}}}async function yE(i){if(i&&!ft.stream){if(!await vE()){Vo=!1;return}if(!Vo)return}if(ft.talking=i&&!!ft.stream,ft.stream)for(let e of ft.stream.getAudioTracks())e.enabled=ft.talking;re("talkInd").textContent=Qt?"\u{1F3A4} Mikro AN \u2013 nochmal \u{1F3A4} dr\xFCcken zum Ausschalten":"\u{1F3A4} Mikro AN \u2013 nochmal V dr\xFCcken zum Ausschalten",re("talkInd").classList.toggle("hidden",!ft.talking),ft.talking&&!Bt.size&&qt("Mikro ist an \u2013 aber gerade ist niemand im Raum."),as()}var Vo=!1;setInterval(()=>{ge.role!=="none"&&fd()},1500);function bm(){Vo=!Vo,yE(Vo)}function ME(i){if(Zu+=i,Zu>1&&(Zu=0,fd()),$u+=i,$u<1/15)return;$u=0;let e=Math.hypot(Ne.vel.x,Ne.vel.z);if(ge.role==="client"&&ge.conn&&ge.conn.open)try{ge.conn.send({t:"s",p:[+Ne.pos.x.toFixed(2),+Ne.pos.y.toFixed(2),+Ne.pos.z.toFixed(2)],y:+Ne.yaw.toFixed(3),v:+e.toFixed(1),a:!Ne.ground,tk:ft.talking})}catch{}else if(ge.role==="host"&&ge.conns.size){let t=[{id:0,n:Fe.name,c:Xo[0],lk:Fe.look,p:[+Ne.pos.x.toFixed(2),+Ne.pos.y.toFixed(2),+Ne.pos.z.toFixed(2)],y:+Ne.yaw.toFixed(3),v:+e.toFixed(1),a:!Ne.ground,pid:ge.peer&&ge.peer.id,tk:ft.talking}];for(let n of Bt.values())t.push({id:n.id,n:n.name,c:n.color,lk:n.look,p:[+n.tp.x.toFixed(2),+n.tp.y.toFixed(2),+n.tp.z.toFixed(2)],y:+n.ty.toFixed(3),v:n.sp,a:n.air,pid:n.pid,tk:!!n.tk});for(let n of ge.conns.values())try{n.conn.open&&n.conn.send({t:"w",pl:t})}catch{}}}function Sm(i){if(!ut){if(ge.role==="client"&&ge.conn&&ge.conn.open){try{ge.conn.send({t:"portal",i})}catch{}ut=!0,Am(fi[i],"Warte auf den Raum\u2026"),cd(),setTimeout(()=>{ut&&!ss&&(ut=!1,re("flash").classList.remove("on"),Ne.pos.addScaledVector(fi[i].n,2.5))},5e3);return}Tm(i,Fe.name)}}var ss=!1;function Tm(i,e){if(ss)return;let t=ad();for(let n of ge.conns.values())try{n.conn.open&&n.conn.send({t:"go",i,code:t,who:e})}catch{}wm(i,t,"host",e)}function wm(i,e,t,n){let s=fi[i];if(!s||!s.on||ss)return;ss=!0,ut=!0;let r=s.game;Am(s,(n&&n!==Fe.name?n+" hat das Portal betreten \u2013 ":"")+(r.name||r.ordner)+" startet\u2026"),cd();try{sessionStorage.setItem("gbgc-zurueck",JSON.stringify({role:ge.role==="client"?"client":"host",code:ge.code,t:Date.now()}))}catch{}let o=r.pfad+(r.start||"spiel/")+"?konsole="+t+"&code="+e+"&name="+encodeURIComponent(Fe.name)+(hn.get("peerhost")?"&peerhost="+hn.get("peerhost")+"&peerport="+(hn.get("peerport")||9e3)+"&ice=none&gfx=niedrig&noshadow":"");setTimeout(()=>{Ul(),location.href=o},t==="host"?1400:2600)}function Am(i,e){let t=re("flash");t.style.background=`radial-gradient(circle at 50% 50%, #fff 0%, ${i.col} 45%, #000 100%)`,t.classList.add("on"),re("flashText").textContent=e,document.pointerLockElement&&document.exitPointerLock()}function qt(i){let e=document.createElement("div");e.className="toast",e.textContent=i,re("toasts").appendChild(e),setTimeout(()=>e.classList.add("out"),4200),setTimeout(()=>e.remove(),5e3)}function as(){let i=[{n:Fe.name+" (du)",c:ge.role==="client"?"#fff":Xo[0],tk:ft.talking}];for(let t of Bt.values())i.push({n:t.name,c:t.color,tk:t.tk});let e="";ge.role==="host"?e=`<div class="lbl">Dein Raum-Code</div><div class="code">${ge.code}</div><div class="hint">Freunde: Portal starten \u2192 \u201EFreund beitreten" \u2192 diesen Code eingeben</div>`:ge.role==="client"&&(e=`<div class="lbl">Im Raum von deinem Freund</div><div class="code">${ge.code}</div>`),re("room").innerHTML=e+`<div class="lbl" style="margin-top:10px">Im Raum (${i.length})</div>`+i.map(t=>`<div class="pl"><i style="background:${t.c}"></i>${di(t.n)}${t.tk?' <b class="tk">\u{1F3A4} spricht</b>':""}</div>`).join("")+`<div class="st ${re("netStatus").className}">${di(ge.status)}</div>`,re("mCode").textContent=ge.role==="host"?ge.code:ge.code||"\u2014",re("mCodeLbl").textContent=ge.role==="client"?"Du bist im Raum":"Dein Raum-Code"}var di=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function rs(i){re("menu").classList.toggle("hidden",!i),re("hud").classList.toggle("dim",i)}function Fs(){if(Ds&&!Qt){Zt=!0,re("clickHint").classList.add("hidden"),rs(!1);return}if(Qt){Zt=!0,re("clickHint").classList.add("hidden"),rs(!1);try{let i=document.documentElement;!document.fullscreenElement&&i.requestFullscreen&&i.requestFullscreen({navigationUI:"hide"}).then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}catch{}return}try{let i=is.requestPointerLock({unadjustedMovement:!0});i&&i.catch&&i.catch(()=>{try{is.requestPointerLock()}catch{}})}catch{try{is.requestPointerLock()}catch{}}}var Ds=!1;is.addEventListener("mousedown",i=>{i.isTrusted&&(Ds=!1)});im({canvas:is,first:["bEnter","bResume"],isPlaying:()=>en&&Zt&&!tn&&!ut,canPlay:()=>en&&!Zt&&!tn&&!ut,padLock:()=>{Ds=!0,Fs()},pause:()=>{Zt=!1,rs(!0)},back:()=>{tn?ls():en&&!ut&&(Ds=!0,Fs())},onActive:()=>{if(Ds=!0,document.pointerLockElement)try{document.exitPointerLock()}catch{}}});function pd(){ld(),en=!0,rs(!1),Fs()}re("name").value=Fe.name;var Rm=()=>{for(let[i,e]of[["vol","vVol"],["wVol","wvVol"]])re(i).value=Fe.vol,re(e).textContent=Math.round(Fe.vol*100)+"%";re("muteAll").classList.toggle("on",Fe.vol===0),re("muteAll").textContent=Fe.vol===0?"\u{1F50A} Ton an":"\u{1F507} Ton aus",re("volBtn").textContent=Fe.vol===0?"\u{1F507}":"\u{1F50A}",re("volBtn").classList.toggle("off",Fe.vol===0)},nd=i=>{Fe.vol=Math.max(0,Math.min(1,i)),Rm(),ni&&(ni.gain.value=.9*Fe.vol);for(let e of ft.audios.values())e.volume=Fe.vol,e.muted=Fe.vol===0;Dl()};Rm();var lm=Fe.vol||.8;re("vol").oninput=re("wVol").oninput=i=>nd(+i.target.value);re("muteAll").onclick=()=>{Fe.vol>0?(lm=Fe.vol,nd(0)):nd(lm||.8)};re("volBtn").onclick=()=>re("volPop").classList.toggle("hidden");for(let i of["mousedown","pointerdown","touchstart","click"])re("volW").addEventListener(i,e=>e.stopPropagation());for(let i of["mousedown","touchstart"])document.addEventListener(i,e=>{re("volW").contains(e.target)||re("volPop").classList.add("hidden")},{capture:!0,passive:!0});re("name").oninput=()=>{Fe.name=re("name").value.trim().slice(0,16)||"Neue Pussy1",Dl(),as()};re("bEnter").onclick=()=>{ge.role==="none"&&Ls(),pd()};re("bJoin").onclick=()=>{ld();let i=re("code").value;Cl(i).then(e=>{e&&pd()})};re("code").addEventListener("keydown",i=>{i.key==="Enter"&&re("bJoin").click()});re("bOwn").onclick=()=>{Ls(),qt("Du bist wieder in deinem eigenen Raum."),pd()};is.addEventListener("click",()=>{en&&!Zt&&!ut&&!tn?Fs():Zt&&bt&&gd(bt)});document.addEventListener("pointerlockchange",()=>{Ds||(Zt=document.pointerLockElement===is,re("clickHint").classList.toggle("hidden",Zt||!en||ut||tn),!Zt&&en&&!ut&&!tn&&rs(!0))});document.addEventListener("mousemove",i=>{if(!Zt)return;let e=.0022*(Fe.sens||1);Ne.yaw-=i.movementX*e,Ne.pitch-=i.movementY*e*(Fe.invert?-1:1),Ne.pitch=Math.max(-1.45,Math.min(1.45,Ne.pitch))});document.addEventListener("keydown",i=>{if(i.code==="F11"){i.preventDefault();try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>{en&&!re("menu").classList.contains("hidden")||en&&Fs()}).catch(()=>{})}catch{}return}document.activeElement&&/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)||(rt[i.code]=!0,(i.code==="KeyV"||i.code==="KeyM")&&en&&!i.repeat&&bm(),i.code==="KeyE"&&Zt&&bt&&gd(bt),i.code==="Space"&&i.preventDefault())},!0);document.addEventListener("keyup",i=>{rt[i.code]=!1});window.addEventListener("blur",()=>{for(let i in rt)rt[i]=!1});function EE(){if(!Qt)return;let i=document.createElement("div");i.id="touch",i.className="hidden",i.innerHTML='<div id="tLook"></div><div id="tJoy"><div id="tJoyBase"></div><div id="tKnob"></div></div><div id="tBtns"><button class="tb" id="tTalk">\u{1F3A4}</button><button class="tb big" id="tUse">E</button><button class="tb" id="tJump">SPRING</button></div><button id="tPause" aria-label="Men\xFC">\u2630</button>',document.body.appendChild(i);let e=re("tLook"),t=re("tJoy"),n=re("tKnob"),s=new Map;e.addEventListener("touchstart",g=>{g.preventDefault();for(let x of g.changedTouches)s.set(x.identifier,[x.clientX,x.clientY])},{passive:!1}),e.addEventListener("touchmove",g=>{g.preventDefault();for(let x of g.changedTouches){let m=s.get(x.identifier);if(!m)continue;let p=.0055*(Fe.sens||1);Ne.yaw-=(x.clientX-m[0])*p,Ne.pitch=Math.max(-1.45,Math.min(1.45,Ne.pitch-(x.clientY-m[1])*p*.8)),m[0]=x.clientX,m[1]=x.clientY}},{passive:!1});let r=g=>{for(let x of g.changedTouches)s.delete(x.identifier)};e.addEventListener("touchend",r),e.addEventListener("touchcancel",r);let o=null,a=0,l=0,c=56,u=(g,x)=>{let m=g-a,p=x-l,v=Math.hypot(m,p);v>c&&(m*=c/v,p*=c/v),n.style.transform=`translate(${m}px,${p}px)`;let y=m/c,_=p/c,I=.3;rt.KeyW=_<-I,rt.KeyS=_>I,rt.KeyA=y<-I,rt.KeyD=y>I},h=()=>{o=null,n.style.transform="",rt.KeyW=rt.KeyS=rt.KeyA=rt.KeyD=!1};t.addEventListener("touchstart",g=>{if(g.preventDefault(),o!==null)return;let x=g.changedTouches[0];o=x.identifier;let m=t.getBoundingClientRect();a=m.left+m.width/2,l=m.top+m.height/2,u(x.clientX,x.clientY)},{passive:!1}),t.addEventListener("touchmove",g=>{g.preventDefault();for(let x of g.changedTouches)x.identifier===o&&u(x.clientX,x.clientY)},{passive:!1});let d=g=>{for(let x of g.changedTouches)x.identifier===o&&h()};t.addEventListener("touchend",d),t.addEventListener("touchcancel",d);let f=(g,x,m)=>{let p=re(g);p.addEventListener("touchstart",v=>{v.preventDefault(),v.stopPropagation(),p.classList.add("on"),x()},{passive:!1}),p.addEventListener("touchend",v=>{v.preventDefault(),p.classList.remove("on"),m&&m()},{passive:!1})};f("tJump",()=>{rt.Space=!0},()=>{rt.Space=!1}),f("tUse",()=>{bt&&gd(bt)}),f("tTalk",()=>bm()),re("tPause").addEventListener("click",()=>{Zt=!1,h(),rs(!0)}),setInterval(()=>{i.classList.toggle("hidden",!(en&&Zt&&!ut&&!tn)),re("tUse").classList.toggle("hot",!!bt),re("tTalk").classList.toggle("mic",ft.talking),Zt||h()},150)}EE();var cm=new br,Cs=null;function Cm(){requestAnimationFrame(Cm);let i=Math.min(cm.getDelta(),.05),e=cm.elapsedTime,t=(rt.KeyW||rt.ArrowUp?1:0)-(rt.KeyS||rt.ArrowDown?1:0),n=(rt.KeyD||rt.ArrowRight?1:0)-(rt.KeyA||rt.ArrowLeft?1:0),s=Zt&&!ut,r=(rt.ShiftLeft||rt.ShiftRight?10.5:6.5)*xn.speedMul(),o=new C;s&&(o.set(n,0,-t),o.lengthSq()>0&&o.normalize().multiplyScalar(r).applyAxisAngle(new C(0,1,0),Ne.yaw),xn.drift(o,e));let a=Ne.ground?12:3;Ne.vel.x+=(o.x-Ne.vel.x)*Math.min(1,a*i),Ne.vel.z+=(o.z-Ne.vel.z)*Math.min(1,a*i),s&&rt.Space&&Ne.ground&&(Ne.vel.y=6.2*xn.jumpMul(),Ne.ground=!1,En.jump()),Ne.vel.y-=18*i,Ne.pos.addScaledVector(Ne.vel,i),Ne.pos.y<=0&&(Ne.pos.y=0,Ne.vel.y=0,Ne.ground=!0),xm(Ne.pos),gE(),Pn.position.set(Ne.pos.x,Ne.pos.y+aE+(Ne.ground?Math.sin(e*9)*.025*Math.min(1,Math.hypot(Ne.vel.x,Ne.vel.z)/6):0),Ne.pos.z),Pn.rotation.set(Ne.pitch,Ne.yaw,0),Cs=null;let l=1e9;for(let u of fi){u.mat.uniforms.t.value=e+u.i;let h=Math.hypot(Ne.pos.x-u.pos.x,Ne.pos.z-u.pos.z),d=u.on?Math.max(0,1-h/7):0;if(u.mat.uniforms.hot.value=d,u.light&&(u.light.intensity=12+Math.sin(e*2+u.i)*2+d*10),u.parts){let f=u.parts.geometry.attributes.position,g=u.parts.userData.sp;for(let x=0;x<f.count;x++){let m=f.getY(x)+g[x]*i;m>4.6&&(m=0),f.setY(x,m)}f.needsUpdate=!0}u.on&&h<l&&(l=h,h<6.5&&(Cs=u))}mE(Cs?Math.max(0,1-l/6.5):0);let c=re("prompt");IE(),bt===xd&&!ut?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ff7fd8">\u{1F579}\uFE0F SPK Arcade</b><br><small>${Qt?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Retro-Spiele spielen</small>`):bt===md&&!ut?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ff7fd8">\u{1F455} S.P.K Merch</b><br><small>${Qt?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = T-Shirts ansehen</small>`):bt===vd&&!ut?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ffd23f">Umkleide</b><br><small>${Qt?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = umziehen</small>`):bt===yd&&!ut?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#9fe8b0">G\xE4stebuch</b><br><small>${Qt?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = lesen & reinschreiben</small>`):bt===Il&&!ut?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#e3b27a">N\xE4chste Party</b><br><small>${Qt?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Flyer gro\xDF ansehen</small>`):bt&&bt.radio&&!ut?(c.classList.remove("hidden"),c.innerHTML=En.prompt(Qt)):bt&&bt.secret&&!ut?(c.classList.remove("hidden"),c.innerHTML=xn.prompt(bt,Qt)):bt&&!ut?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ff7fd8">${di(bt.dj.name||"DJ")}</b><br><small>${Qt?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Instagram, SoundCloud & Co.</small>`):Cs&&!ut?(c.classList.remove("hidden"),c.innerHTML=`${Qt?"Geh ins Portal":"Lauf ins Portal"}: <b style="color:${Cs.col}">${di(Cs.game.name||Cs.game.ordner)}</b> startet sofort`+(Bt.size?"<br><small>Alle im Raum kommen mit</small>":"")):c.classList.add("hidden"),kE(i),ts&&(ts.rotation.y=e*.25,ts.position.y=6.2+Math.sin(e*.8)*.15);for(let u of Bt.values()){u.fresh&&(u.p.copy(u.tp),u.y=u.ty,u.fresh=!1),u.p.lerp(u.tp,Math.min(1,i*12));let h=u.ty-u.y;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;u.y+=h*Math.min(1,i*12),u.av.root.position.copy(u.p),u.av.root.rotation.y=u.y,u.av.tag.lookAt(Pn.position.x,u.p.y+2.15,Pn.position.z),om(u.av,u.sp,u.air,i)}if(ci){let u=ti.pos&&Math.hypot(Ne.pos.x-ti.pos.x,Ne.pos.z-ti.pos.z)<12;ci.root.visible=!!u,Or&&(Or.visible=!!u||!0),u&&(ci.root.position.copy(Ne.pos),ci.root.rotation.y=Ne.yaw,om(ci,Math.hypot(Ne.vel.x,Ne.vel.z),!Ne.ground,i))}ge.role!=="none"&&ME(i),xn.tick(i,e),En.tick(i,e),zt&&zt.tick(e,Ne.pos.distanceTo(zt.pos)<14),xn.render(hi)||(hi?hi.render():os.render(dt,Pn))}var nS=new C,bE=[["instagram","Instagram","#e1306c"],["facebook","Facebook","#1877f2"],["soundcloud","SoundCloud","#ff5500"],["tiktok","TikTok","#25f4ee"],["youtube","YouTube","#ff0000"],["spotify","Spotify","#1db954"],["mixcloud","Mixcloud","#5000ff"],["beatport","Beatport","#01ff95"],["website","Webseite","#ffffff"]],kr=[],bt=null,tn=!1;async function SE(){try{let e=await(await fetch("/System/djs.json",{cache:"no-store"})).json();return Array.isArray(e)?e:e.djs||[]}catch{return[]}}function TE(i,e){let s=Ot(512,640,r=>{let o=r.createLinearGradient(0,0,0,640);o.addColorStop(0,"#1a0f24"),o.addColorStop(1,"#07060c"),r.fillStyle=o,r.fillRect(0,0,512,640),r.fillStyle="#2b2236",r.beginPath(),r.arc(256,250,92,0,Math.PI*2),r.fill(),r.beginPath(),r.ellipse(256,520,170,150,0,Math.PI,0),r.fill(),r.strokeStyle="#ff2fb0",r.lineWidth=16,r.beginPath(),r.arc(256,250,112,Math.PI*1.08,Math.PI*1.92),r.stroke(),r.fillStyle="#ff2fb0",r.fillRect(128,240,30,62),r.fillRect(354,240,30,62),r.fillStyle="rgba(255,255,255,0.35)",r.font="600 26px system-ui, sans-serif",r.textAlign="center",r.fillText("Foto folgt",256,90)});if(i.foto){let r=new Image;r.onload=()=>{let o=s.image,a=o.getContext("2d"),l=Math.max(o.width/r.width,o.height/r.height),c=r.width*l,u=r.height*l;a.drawImage(r,(o.width-c)/2,(o.height-u)/2,c,u),s.needsUpdate=!0},r.src=/^(https?:)?\//.test(i.foto)?i.foto:"/System/dj-fotos/"+i.foto}return s}async function wE(){let i=await SE(),e=Math.max(1,i.length),t=od+.45,n=dm-.62,s=.22,r=.06,o=.22,a=.24,l=Math.min((n-t-s-o-a-3*r)/e,.29),c=e*l+3*r+s+o+a,u=(t+n)/2-c/2+l/2,h=u+l*(e-1)/2,d=cn-.12,f=1.7,g=2.15,x=2.75,m=u+(e-1)*l+l/2+r+a/2,p=m+a/2+r+s/2;if(CE(m),DE(p,d),zE(p+s/2+r+o/2,d),!i.length)return;let v=Ot(1024,128,(I,b,R)=>{I.clearRect(0,0,b,R),I.textAlign="center",I.textBaseline="middle",I.font='400 120px Impact, "Arial Black", sans-serif',I.shadowColor="#ff2fb0",I.shadowBlur=6,I.fillStyle="#ff7fd8",I.fillText("SPK DJs",b/2,R/2)}),y=new Y(new lt(6,.75),new Le({map:v,transparent:!0,toneMapped:!1,depthWrite:!1,color:13684944}));y.position.set(Math.sin(h)*(d-.05),x+g/2+.85,-Math.cos(h)*(d-.05)),y.lookAt(0,x+g/2+.85,0),dt.add(y);let _=new Me({color:1776418,roughness:.35,metalness:.8});i.forEach((I,b)=>{let R=u+b*l,P=new Ke;P.position.set(Math.sin(R)*d,x,-Math.cos(R)*d),P.lookAt(0,x,0),dt.add(P);let S=new Y(new Xe(f+.22,g+.22+.42,.08),_);S.position.y=-.21,P.add(S);let E=new Y(new lt(f,g),new Le({map:TE(I,b),toneMapped:!1}));E.position.z=.05,P.add(E);let L=Ot(512,96,(k,F,ne)=>{k.fillStyle="#0b0910",k.fillRect(0,0,F,ne),k.textAlign="center",k.textBaseline="middle",k.font='400 58px Impact, "Arial Black", sans-serif',k.fillStyle="#fff",k.fillText(String(I.name||"DJ "+(b+1)).toUpperCase(),F/2,ne/2+2)}),G=new Y(new lt(f,.34),new Le({map:L,toneMapped:!1}));G.position.set(0,-g/2-.22,.05),P.add(G);let U=new Y(new Xe(f+.3,.03,.03),new Le({color:16723888,toneMapped:!1}));U.position.set(0,g/2+.13,.06),P.add(U);let O=new Di(16769268,9,7,.5,.6,1.5);O.position.set(0,g/2+1.2,1.4),O.target=E,P.add(O),kr.push({dj:I,g:P,pic:E,edge:U,i:b})})}var md={merch:!0},Hr=null,qo={url:"",text:"Offizielle S.P.K T-Shirts"},AE="/SPK%20-%20Fuck%20the%20Police/spiel/assets/spk_logo.png";function RE(i,e){let t=new Ri,n=i/2;t.moveTo(-n*.62,-e/2),t.lineTo(n*.62,-e/2),t.lineTo(n*.64,e*.18),t.lineTo(n*.98,e*.06),t.lineTo(n*1.18,e*.3),t.lineTo(n*.78,e*.5),t.lineTo(n*.24,e*.5),t.quadraticCurveTo(0,e*.36,-n*.24,e*.5),t.lineTo(-n*.78,e*.5),t.lineTo(-n*1.18,e*.3),t.lineTo(-n*.98,e*.06),t.lineTo(-n*.64,e*.18),t.closePath();let s=new Io(t,12),r=s.attributes.position,o=s.attributes.uv;for(let a=0;a<r.count;a++)o.setXY(a,(r.getX(a)+n*1.18)/(n*2.36),(r.getY(a)+e/2)/e);return s}var Ju={};function hm(i,e){let t=i+e;if(Ju[t])return Ju[t];let n=new Image,s=Ot(256,256,(r,o,a)=>{r.fillStyle=i,r.fillRect(0,0,o,a);for(let l=0;l<900;l++)r.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},0.035)`,r.fillRect(Math.random()*o,Math.random()*a,2,2);r.strokeStyle="rgba(0,0,0,0.18)",r.lineWidth=3,r.beginPath(),r.moveTo(66,150),r.lineTo(80,210),r.moveTo(190,150),r.lineTo(176,210),r.stroke(),r.font='400 30px Impact, "Arial Black", sans-serif',r.textAlign="center",r.fillStyle=e,r.fillText("S.P.K",o/2,190),r.font="700 11px Arial",r.fillText("SOUNDSYSTEM",o/2,206)});return n.onload=()=>{let r=s.image,o=r.getContext("2d");(e==="#ffffff"||e==="#39ff88"||e==="#ff2fb0")&&(o.save(),o.globalCompositeOperation="source-over"),o.drawImage(n,88,70,80,80),e&&o.restore&&o.restore(),s.needsUpdate=!0},n.src=AE,Ju[t]=s,s}async function CE(i){try{let U=await fetch("/System/merch.json",{cache:"no-store"});qo=Object.assign(qo,await U.json())}catch{}let e=cn-1.12,t=new Ke;t.position.set(Math.sin(i)*e,0,-Math.cos(i)*e),t.lookAt(0,0,0),dt.add(t);let n=3.6,s=1.7,r=2.55,o=new Me({map:Dm(),roughness:.75,metalness:0}),a=new Me({color:1381658,roughness:.6,metalness:.4}),l=(U,O,k,F,ne,X,pe)=>{let me=new Y(new Xe(U,O,k),pe);return me.position.set(F,ne,X),me.castShadow=!0,me.receiveShadow=!0,t.add(me),me};l(n,.1,s,0,.05,0,o);for(let U of[-n/2+.08,n/2-.08])for(let O of[-s/2+.08,s/2-.12])l(.1,r,.1,U,r/2+.1,O,a);let c=Ot(1024,512,(U,O,k)=>{let F=U.createLinearGradient(0,0,0,k);F.addColorStop(0,"#1b1b22"),F.addColorStop(1,"#0b0b0f"),U.fillStyle=F,U.fillRect(0,0,O,k);for(let ne=0;ne<O;ne+=6)U.fillStyle="rgba(255,255,255,0.02)",U.fillRect(ne,0,2,k)});l(n-.2,r-.1,.04,0,r/2+.15,-s/2+.06,new Me({map:c,roughness:.95}));let u=new Me({color:13620184,metalness:1,roughness:.25}),h=new Y(new Je(.02,.02,n-.3,10),u);h.rotation.z=Math.PI/2,h.position.set(0,2.05,-s/2+.32),t.add(h);let d=[["#0d0d0f","#ff2fb0"],["#f2f2f2","#111111"],["#ff2fb0","#0d0d0f"],["#0d0d0f","#39ff88"],["#20e0ff","#0d0d0f"],["#0d0d0f","#ffffff"]],f=RE(.62,.72);d.forEach(([U,O],k)=>{let F=-1.3+k*.52,ne=new Y(f,new Me({map:hm(U,O),color:13421772,roughness:1,side:It}));ne.position.set(F,1.62,-s/2+.34+k*.004),ne.rotation.y=(k%2?1:-1)*.06,ne.castShadow=!0,t.add(ne);let X=new Y(new yn(.035,.006,6,12,Math.PI*1.4),u);X.position.set(F,2.03,-s/2+.34),t.add(X);let pe=new Y(new Xe(.44,.015,.015),u);pe.position.set(F,1.96,-s/2+.345),t.add(pe)});let g=Ot(1024,256,(U,O,k)=>{U.fillStyle="#0d0d10",U.fillRect(0,0,O,k),U.strokeStyle="#ff2fb0",U.lineWidth=8,U.strokeRect(10,10,O-20,k-20),U.font='400 120px Impact, "Arial Black", sans-serif',U.textAlign="center",U.textBaseline="middle",U.fillStyle="#ffffff",U.fillText("S.P.K  MERCH",O/2,k/2+6),U.font="700 26px Arial",U.fillStyle="#39ff88",U.fillText("T-SHIRTS \xB7 SOUNDSYSTEM \xB7 LINZ",O/2,k-34)}),x=[o,o,o,o,new Me({map:g,roughness:.6}),o],m=new Y(new Xe(n-.3,1,.55),x);m.position.set(0,.6,s/2-.3),m.castShadow=!0,t.add(m),l(n-.2,.05,.65,0,1.125,s/2-.3,o);let p=(U,O,k,F)=>{for(let ne=0;ne<F;ne++){let X=new Y(new Xe(.34,.035,.26),[new Me({color:U,roughness:.95}),new Me({color:U,roughness:.95}),new Me({map:hm(U,O),roughness:.95}),new Me({color:U,roughness:.95}),new Me({color:U,roughness:.95}),new Me({color:U,roughness:.95})]);X.position.set(k+(Math.random()-.5)*.02,1.17+ne*.036,s/2-.32),X.rotation.y=(Math.random()-.5)*.08,X.castShadow=!0,t.add(X)}};p("#0d0d0f","#ff2fb0",-1.15,5),p("#f2f2f2","#111111",-.6,4),p("#ff2fb0","#0d0d0f",.55,4),p("#0d0d0f","#39ff88",1.1,6);let v=Ot(256,128,(U,O,k)=>{U.fillStyle="#ffe22f",U.fillRect(0,0,O,k),U.fillStyle="#111",U.font="900 64px Arial",U.textAlign="center",U.textBaseline="middle",U.fillText("25 \u20AC",O/2,k/2+4)}),y=new Le({map:v,color:11579568});for(let U of[-.88,.82]){let O=new Y(new lt(.3,.15),y);O.position.set(U,1.24,s/2-.01),O.rotation.x=-.35,t.add(O)}l(.22,.06,.16,.05,1.18,s/2-.42,a);let _=Ot(512,256,(U,O,k)=>{for(let F=0;F<16;F++)U.fillStyle=F%2?"#ff2fb0":"#111114",U.fillRect(F*32,0,32,k);U.fillStyle="rgba(255,255,255,0.08)",U.fillRect(0,k-30,O,30)}),I=new Y(new lt(n+.3,s+.5),new Me({map:_,roughness:.8,side:It}));I.rotation.x=-Math.PI/2+.22,I.position.set(0,r+.12,.2),I.castShadow=!0,t.add(I);let b=Ot(512,64,(U,O,k)=>{for(let F=0;F<16;F++)U.fillStyle=F%2?"#ff2fb0":"#111114",U.beginPath(),U.moveTo(F*32,0),U.lineTo(F*32+32,0),U.lineTo(F*32+32,40),U.quadraticCurveTo(F*32+16,64,F*32,40),U.closePath(),U.fill()},!0);b.premultiplyAlpha=!1;let R=new Y(new lt(n+.3,.28),new Me({map:b,transparent:!0,roughness:.8,side:It}));R.position.set(0,r-.1,s/2+.43),t.add(R);let P=Ns([{t:"S.P.K MERCH",size:120,c:"#ffffff",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"#ff2fb0"}],{w:1024,h:180,pw:2.6});P.position.set(0,r+.62,s/2-.1),t.add(P);let S=new Le({color:12098144});for(let U=0;U<11;U++){let O=-n/2+.05+U*(n-.1)/10,k=new Y(new Lt(.035,8,6),S);k.position.set(O,r-.2-Math.sin(U/10*Math.PI)*.12,s/2+.45),t.add(k)}let E=new Mn(16767144,2.2,5,1.6);E.position.set(0,r-.6,.6),t.add(E);let L=new Di(16773856,4.2,7,.7,.7,1.5);L.position.set(0,r,1.6);let G=new Rt;G.position.set(0,1.5,-.5),t.add(L,G),L.target=G,Hr=new Y(new Xe(n+.3,r+1.2,s+.6),new Le({transparent:!0,opacity:0,depthWrite:!1})),Hr.position.set(0,(r+1.2)/2,0),t.add(Hr),id.pos=t.position.clone(),id.yaw=i}var id={pos:null,yaw:0};function Im(){tn=!0;for(let e in rt)rt[e]=!1;try{document.exitPointerLock()}catch{}re("djName").textContent="S.P.K MERCH",re("djInfo").textContent=qo.text||"Offizielle S.P.K T-Shirts";let i=re("djPhoto");i.src="/System/dj-fotos/spk.jpg",i.classList.remove("hidden"),i.classList.remove("big"),sd(),re("djBox").classList.remove("hidden")}var Pm=()=>{try{return localStorage.getItem("spk-merch-shirt")==="1"}catch{return!1}};function sd(){let i=Pm(),e=!!(Fe.look&&Fe.look.spk),t=i?`<button class="djl" id="mWear" style="--c:#39ff88">${e?"\u{1F455} Shirt ausziehen":"\u{1F455} Shirt anziehen"}</button>`:'<button class="djl" id="mBuy" style="--c:#39ff88">\u{1F6D2} Gratis kaufen (nur im Spiel)</button>';re("djLinks").innerHTML=t+'<p class="djnone" style="margin:6px 0 10px;opacity:.8">Das Spiel-Shirt ist gratis. Das echte T-Shirt kostet 25 \u20AC:</p>'+(qo.url?`<a class="djl" href="${di(qo.url)}" target="_blank" rel="noopener" style="--c:#ff2fb0">\u{1F455} Zum T-Shirt-Shop</a>`:'<p class="djnone">Link ist bald verf\xFCgbar.</p>');let n=o=>{if(Fe.look=gn(Object.assign({},Fe.look,{spk:o?1:0})),Dl(),Fl(),ge.role==="client"&&ge.conn)try{ge.conn.send({t:"look",lk:Fe.look})}catch{}},s=re("mBuy");s&&(s.onclick=()=>{try{localStorage.setItem("spk-merch-shirt","1")}catch{}n(!0),hd(!0),qt("Danke! Du tr\xE4gst jetzt das S.P.K T-Shirt \u2013 in der Umkleide kannst du es an- und ausziehen."),sd()});let r=re("mWear");r&&(r.onclick=()=>{let o=!(Fe.look&&Fe.look.spk);n(o),qt(o?"S.P.K T-Shirt angezogen.":"S.P.K T-Shirt ausgezogen."),sd()})}var Qu=new hl;function IE(){if(bt=null,!Zt||ut)return;Qu.setFromCamera({x:0,y:0},Pn),Qu.far=9;let i=kr.map(n=>n.pic);li&&i.push(li),Ps&&i.push(Ps),zr&&i.push(zr),zt&&i.push(zt.hit),Hr&&i.push(Hr);let e=xn.targets();for(let n of e)i.push(n);for(let n of En.targets())i.push(n);let t=Qu.intersectObjects(i,!1);if(t.length&&t[0].object.userData.aim&&t[0].object.userData.aim.radio)bt=t[0].distance<4.5?t[0].object.userData.aim:null;else if(t.length&&t[0].object.userData.aim){let n=t[0].object.userData.aim;bt=t[0].distance<2.8&&xn.canAim(n)?n:null}else t.length&&zt&&t[0].object===zt.hit?bt=t[0].distance<4.2?xd:null:t.length&&t[0].object===Hr?bt=t[0].distance<5.5?md:null:t.length&&(bt=t[0].object===zr?vd:t[0].object===li?Il:t[0].object===Ps?yd:kr.find(n=>n.pic===t[0].object)||null);for(let n of kr)n.edge.scale.y=n===bt?3:1;li&&li.scale.setScalar(bt===Il?1.02:1)}function gd(i){if(i&&i.secret){xn.use(i);return}if(i&&i.radio){En.openRadio();return}if(i===Il){UE();return}if(i===yd){GE();return}if(i===vd){Nm();return}if(i===xd){FE();return}if(i===md){Im();return}let e=i.dj;tn=!0;for(let s in rt)rt[s]=!1;try{document.exitPointerLock()}catch{}let t=bE.filter(([s])=>e[s]).map(([s,r,o])=>`<a class="djl" href="${di(e[s])}" target="_blank" rel="noopener" style="--c:${o}">${r}</a>`).join("");re("djName").textContent=e.name||"DJ",re("djInfo").textContent=e.info||"",re("djLinks").innerHTML=t||'<p class="djnone">F\xFCr diesen DJ sind noch keine Links eingetragen.</p>',re("djPhoto").classList.remove("big");let n=re("djPhoto");e.foto?(n.src=/^(https?:)?\//.test(e.foto)?e.foto:"/System/dj-fotos/"+e.foto,n.classList.remove("hidden")):n.classList.add("hidden"),re("djBox").classList.remove("hidden")}function ls(){re("radBox")&&re("radBox").classList.add("hidden"),re("djBox").classList.add("hidden"),re("gbBox").classList.add("hidden"),re("wrBox").classList.add("hidden"),Be.open=!1,tn=!1,en&&Fs()}re("djClose").onclick=ls;re("djBox").addEventListener("click",i=>{i.target.id==="djBox"&&ls()});var Il={flyer:!0},li=null,ei={};async function PE(){try{return await(await fetch("/System/party.json",{cache:"no-store"})).json()}catch{return{}}}function Lm(i){return/^(https?:)?\/\//.test(i)?i:"/System/flyer/"+i}function Dm(){return Ot(1024,1280,(i,e,t)=>{let s=t/6;for(let r=0;r<6;r++){let o=[120,78,44].map(a=>a+Math.floor((Math.random()-.5)*22));i.fillStyle=`rgb(${o})`,i.fillRect(0,r*s,e,s);for(let a=0;a<70;a++){let l=r*s+Math.random()*s;i.strokeStyle=`rgba(${Math.random()<.5?"60,35,15":"170,120,75"},${.08+Math.random()*.12})`,i.lineWidth=1+Math.random()*3,i.beginPath(),i.moveTo(0,l);for(let c=0;c<=e;c+=64)i.lineTo(c,l+Math.sin(c/90+a)*4);i.stroke()}if(Math.random()<.7){let a=Math.random()*e,l=r*s+s/2,c=i.createRadialGradient(a,l,2,a,l,26);c.addColorStop(0,"rgba(50,28,10,0.7)"),c.addColorStop(1,"rgba(50,28,10,0)"),i.fillStyle=c,i.beginPath(),i.ellipse(a,l,40,18,0,0,Math.PI*2),i.fill()}i.fillStyle="rgba(25,14,6,0.85)",i.fillRect(0,r*s,e,5);for(let a of[60,e-60])i.fillStyle="#3a3a3a",i.beginPath(),i.arc(a,r*s+s/2,9,0,Math.PI*2),i.fill()}})}function LE(i){return Ot(768,1086,(e,t,n)=>{e.fillStyle="#f2ece0",e.fillRect(0,0,t,n),e.fillStyle="#ff2fb0",e.fillRect(0,0,t,150),e.textAlign="center",e.textBaseline="middle",e.font='400 96px Impact, "Arial Black", sans-serif',e.fillStyle="#fff",e.fillText("SPK",t/2,80),e.font='400 84px Impact, "Arial Black", sans-serif',e.fillStyle="#18101c",e.fillText("N\xC4CHSTE",t/2,330),e.fillText("PARTY",t/2,430),e.font='600 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="#5a5060";let s=String(i||"Flyer folgt \u2013 bald steht hier, wann und wo die n\xE4chste SPK Party steigt!").split(" "),r="",o=600;for(let a of s){let l=r?r+" "+a:a;e.measureText(l).width>t-120?(e.fillText(r,t/2,o),o+=56,r=a):r=l}r&&e.fillText(r,t/2,o)})}async function DE(i,e){ei=await PE();let t=2.75,n=3,s=3.7,r=new Ke;r.position.set(Math.sin(i)*(e-.02),t,-Math.cos(i)*(e-.02)),r.lookAt(0,t,0),dt.add(r);let o=new Y(new Xe(n,s,.12),new Me({map:Dm(),roughness:.85,metalness:0}));r.add(o);let a=new Me({color:3875858,roughness:.8});for(let[d,f,g,x]of[[0,s/2,n+.16,.14],[0,-s/2,n+.16,.14],[n/2,0,.14,s],[-n/2,0,.14,s]]){let m=new Y(new Xe(g,x,.18),a);m.position.set(d,f,.02),r.add(m)}for(let d of[-n/2+.25,n/2-.25]){let f=new Y(new Xe(.14,t-s/2+.3,.14),a);f.position.set(d,-s/2-(t-s/2)/2+.15,-.05),r.add(f)}let l=2.1,c=l*1.414,u=LE(ei.text);if(li=new Y(new lt(l,c),new Me({map:u,roughness:.9})),li.position.set(0,.05,.075),li.rotation.z=-.015,r.add(li),ei.flyer){let d=new Image;d.onload=()=>{let f=u.image,g=f.getContext("2d");g.fillStyle="#111",g.fillRect(0,0,f.width,f.height);let x=Math.min(f.width/d.width,f.height/d.height),m=d.width*x,p=d.height*x;g.drawImage(d,(f.width-m)/2,(f.height-p)/2,m,p),u.needsUpdate=!0},d.src=Lm(ei.flyer)}for(let[d,f]of[[-l/2+.12,c/2-.12],[l/2-.12,c/2-.12]]){let g=new Y(new Lt(.05,12,8),new Me({color:16723888,roughness:.3}));g.position.set(d,f+.05,.11),r.add(g)}let h=new Di(16773340,9,8,.6,.7,1.4);h.position.set(0,s/2+1,1.8),h.target=li,r.add(h)}function UE(){tn=!0;for(let e in rt)rt[e]=!1;try{document.exitPointerLock()}catch{}re("djName").textContent="N\xC4CHSTE PARTY",re("djInfo").textContent=ei.flyer?ei.text||"":ei.text||"Flyer folgt \u2013 bald steht hier, wann die n\xE4chste SPK Party steigt!";let i=re("djPhoto");ei.flyer?(i.src=Lm(ei.flyer),i.classList.remove("hidden"),i.classList.add("big")):i.classList.add("hidden"),re("djLinks").innerHTML=ei.link?`<a class="djl" href="${di(ei.link)}" target="_blank" rel="noopener" style="--c:#e3b27a">Mehr Infos</a>`:"",re("djBox").classList.remove("hidden")}var xd={arcade:!0},zt=null;function NE(){let i=od+.24,e=cn-1.25;zt=tm(Ot),zt.g.scale.setScalar(2.2/1.75),zt.g.position.set(Math.sin(i)*e,0,-Math.cos(i)*e),zt.g.lookAt(0,0,0),dt.add(zt.g),zt.pos=zt.g.position.clone()}function FE(){if(!ut){if(ge.role==="client"&&ge.conn&&ge.conn.open){try{ge.conn.send({t:"arc"})}catch{}ut=!0,qt("Warte auf den Raum \u2026"),setTimeout(()=>{ut&&!ss&&(ut=!1)},5e3);return}if(ge.role==="host"&&Bt.size){Um(Fe.name);return}_d(null,null)}}function Um(i){if(ss)return;let e=ad();for(let t of ge.conns.values())try{t.conn.open&&t.conn.send({t:"arcgo",code:e,who:i})}catch{}_d(e,"host",i)}function _d(i,e,t){if(ss)return;ss=!0,ut=!0;for(let l in rt)rt[l]=!1;document.pointerLockElement&&document.exitPointerLock(),t&&t!==Fe.name&&qt(t+" startet die Arcade \u2013 alle spielen mit!");let n=document.createElement("div");n.id="arcLoad",n.style.cssText='position:fixed;inset:0;z-index:99;background:#05030c;display:flex;flex-direction:column;align-items:center;justify-content:center;font:900 46px "Courier New",monospace;color:#ff2fb0;letter-spacing:.1em;text-shadow:0 0 18px #ff2fb0',n.innerHTML='<div>SPK ARCADE</div><div style="margin-top:28px;width:min(420px,80vw);height:34px;border:4px solid #fff;padding:4px;box-sizing:border-box;display:flex;gap:4px" id="arcBar"></div><div style="margin-top:14px;font-size:16px;color:#20e0ff;text-shadow:none">LADE ...</div>',document.body.appendChild(n),cd();let s=0,r=n.querySelector("#arcBar"),o=setInterval(()=>{s++;let l=document.createElement("i");l.style.cssText="flex:0 0 calc((100% - 44px)/12);background:"+(s<5?"#39ff88":s<9?"#ffd23f":"#ff2fb0"),r.appendChild(l),s>=12&&clearInterval(o)},100);try{sessionStorage.setItem("gbgc-zurueck",JSON.stringify({role:ge.role==="client"?"client":"host",code:ge.code,t:Date.now()}))}catch{}let a="/Arcade/spiel/index.html?name="+encodeURIComponent(Fe.name)+(i?"&konsole="+e+"&code="+i:"")+(hn.get("peerhost")?"&peerhost="+hn.get("peerhost")+"&peerport="+(hn.get("peerport")||9e3)+"&ice=none":"");setTimeout(()=>{Ul(),location.href=a},e==="join"?2600:1400)}var vd={cab:!0},Hn={ang:dm-.3,r:cn-1.15,pos:null},zr=null;function OE(){let i=Hn.ang,e=Math.sin(i)*Hn.r,t=-Math.cos(i)*Hn.r;Hn.pos=new C(e,0,t);let n=new Ke;n.position.set(e,0,t),n.lookAt(0,0,0),dt.add(n);let s=1.9,r=2.6,o=1.6,a=new Me({color:2761264,roughness:.6,metalness:.3}),l=(x,m,p,v,y,_,I=a)=>{let b=new Y(new Xe(x,m,p),I);return b.position.set(v,y,_),n.add(b),b};l(s,r,.08,0,r/2,-o/2),l(.08,r,o,-s/2,r/2,0),l(.08,r,o,s/2,r/2,0),l(s+.1,.1,o+.1,0,r,0),l(s,.06,o,0,.03,0,new Me({color:3812922,roughness:.9})),l(.9,1.7,.03,0,1.25,-o/2+.06,new Me({color:13621480,roughness:.05,metalness:1}));let c=new Me({color:13112687,roughness:.85,side:It});for(let x of[-1,1]){let m=new lt(.55,r-.25,12,1),p=m.attributes.position;for(let y=0;y<p.count;y++)p.setZ(y,Math.sin(p.getX(y)*22)*.04);m.computeVertexNormals();let v=new Y(m,c);v.position.set(x*(s/2-.3),(r-.25)/2+.05,o/2),n.add(v)}l(s,.04,.04,0,r-.12,o/2,new Me({color:12566463,metalness:1,roughness:.3}));let u=Ns([{t:"UMKLEIDE",size:120,c:"#ffd23f",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"rgba(255,170,0,0.6)"}],{w:1024,h:180,pw:1.9});u.position.set(0,r+.35,o/2),n.add(u);let h=new Mn(16773328,6,4,1.6);h.position.set(0,r-.3,.2),n.add(h),zr=new Y(new Xe(s+.4,r+.6,o+.4),new Le({transparent:!0,opacity:0,depthWrite:!1})),zr.position.set(0,r/2,0),n.add(zr);let d=new Ke;d.position.set(s/2+.7,0,.3),n.add(d);let f=new Me({color:12566463,metalness:1,roughness:.3});for(let x of[-.45,.45]){let m=new Y(new Je(.02,.02,1.6,8),f);m.position.set(x,.8,0),d.add(m)}let g=new Y(new Je(.02,.02,.95,8),f);g.rotation.z=Math.PI/2,g.position.y=1.55,d.add(g),mn.slice(0,7).forEach((x,m)=>{let p=new Y(new Xe(.06,.62,.42),new Me({color:x,roughness:.9}));p.position.set(-.36+m*.12,1.2,0),d.add(p)})}var Be={open:!1,look:null,r:null,scene:null,cam:null,fig:null,mixer:null,rot:0,t:0,drag:null};function BE(){if(Be.r)return;let i=re("wrCanvas");Be.r=new xo({canvas:i,antialias:!0,alpha:!0}),Be.r.outputColorSpace=mt,Be.r.toneMapping=Sr,Be.scene=new _o,Be.cam=new Ut(30,1,.1,50),Be.cam.position.set(0,1.05,4.6),Be.cam.lookAt(0,.95,0),Be.scene.add(new Lo(16777215,4206656,1.5));let e=new ws(16777215,2.2);e.position.set(2,4,4),Be.scene.add(e);let t=new ws(16723888,1.4);t.position.set(-3,2,-3),Be.scene.add(t);let n=new Y(new Zn(.8,40),new Le({color:16723888,transparent:!0,opacity:.25}));n.rotation.x=-Math.PI/2,Be.scene.add(n),i.addEventListener("pointerdown",s=>{Be.drag=s.clientX,i.setPointerCapture(s.pointerId)}),i.addEventListener("pointermove",s=>{Be.drag!=null&&(Be.rot+=(s.clientX-Be.drag)*.012,Be.drag=s.clientX)}),i.addEventListener("pointerup",()=>{Be.drag=null})}function qr(){if(Be.look.ch&&!Ur(Xt,Be.look.ch)){let e=Be.look.ch;re("wrOpts").insertAdjacentHTML("afterbegin",'<div class="wrow" id="wrLoad"><span>\u23F3</span><div>Figur wird geladen \u2026</div></div>'),zo(Xt,e).then(()=>{let t=re("wrLoad");t&&t.remove(),Be.look.ch===e&&qr()})}Be.fig&&Be.scene.remove(Be.fig);let i=Al(Xt,Be.look);Be.fig=i.m,Be.scene.add(i.m),Be.mixer=new In(i.m),ui&&ui.idle&&Be.mixer.clipAction(ui.idle).play()}function jo(){let i=Be.look,e=re("wrOpts"),t=(o,a,l,c)=>`<div class="wrow"><span>${o}</span><div>`+a.map((u,h)=>`<button class="wo${u.v===l?" on":""}" data-set="${c}" data-v="${di(String(u.v))}">${di(u.t)}</button>`).join("")+"</div></div>",n=(o,a,l,c)=>`<div class="wrow"><span>${o}</span><div>`+a.map(u=>`<button class="wc${u===l?" on":""}" style="background:${u}" data-set="${c}" data-v="${u}" aria-label="${u}"></button>`).join("")+"</div></div>",s=t("Figur",Qi.map(o=>({t:o.name+(o.kind&&o.id&&o.kind==="Comic"?" \u270F\uFE0F":""),v:o.id})),i.ch,"ch"),r=Qi.find(o=>o.id===i.ch)||Qi[0];r.classic?(s+=t("Oberteil",zu.map((o,a)=>({t:o,v:a})),i.top,"top"),i.top&&(s+=n("Farbe",mn,i.tc,"tc"),s+=t("Aufdruck",[{t:"Ohne",v:""},{t:"\u{1F354} Burger",v:"burger"},{t:"\u25A6 Block-Print",v:"blocks"}],i.print||"","print")),s+=t("Hose",Gu.map((o,a)=>({t:o,v:a})),i.bot,"bot"),i.bot&&(s+=n("Farbe",mn,i.bc,"bc")),s+=t("Schuhe",Vu.map((o,a)=>({t:o,v:a})),i.sh,"sh"),i.sh&&(s+=n("Farbe",mn,i.shc,"shc")),s+=t("Hautfarbe",[{t:"Hell",v:0},{t:"Dunkel",v:1}],i.s,"s")):i.ch?((r.parts||[]).forEach(([o],a)=>{s+=`<div class="wrow"><span>${di(o)}</span><div><button class="wo${i.p[a]?"":" on"}" data-set="p${a}" data-v="">Original</button>`+mn.map(l=>`<button class="wc${l===i.p[a]?" on":""}" style="background:${l}" data-set="p${a}" data-v="${l}" aria-label="${l}"></button>`).join("")+"</div></div>"}),r.parts||(s+='<div class="wrow"><span>Kleidung</span><div style="opacity:.75">Diese Figur hat ihr festes Outfit \u2013 du kannst sie mit Kappe, Brille, Kette und Rucksack aufpeppen.</div></div>')):(s+=t("K\xF6rper",[{t:"Mann",v:"m"},{t:"Frau",v:"f"}],i.b,"b")+t("Hautfarbe",[{t:"Hell",v:0},{t:"Dunkel",v:1}],i.s,"s"),s+=t("Frisur",Hu.map(o=>({t:o.name,v:o.id})),i.h,"h"),i.b==="m"&&(s+=t("Bart",[{t:"Ohne",v:0},{t:"Mit Bart",v:1}],i.beard,"beard")),s+=n("Haarfarbe",Wu,i.hc,"hc"),s+=t("Oberteil",zu.map((o,a)=>({t:o,v:a})),i.top,"top"),i.top&&(s+=n("Farbe",mn,i.tc,"tc")),s+=t("Hose",Gu.map((o,a)=>({t:o,v:a})),i.bot,"bot"),i.bot&&(s+=n("Farbe",mn,i.bc,"bc")),s+=t("Schuhe",Vu.map((o,a)=>({t:o,v:a})),i.sh,"sh"),i.sh&&(s+=n("Farbe",mn,i.shc,"shc"))),s+=t("Kopf",Xu.map((o,a)=>({t:o,v:a})),i.cap,"cap"),i.cap&&(s+=n("Farbe",mn,i.capc,"capc")),s+=t("Brille",qu.map((o,a)=>({t:o,v:a})),i.gl,"gl"),Pm()&&(s+=t("S.P.K Shirt",[{t:"Ohne",v:0},{t:"Anziehen",v:1}],i.spk,"spk")),s+=t("Goldkette",[{t:"Ohne",v:0},{t:"Mit Kette",v:1}],i.chain,"chain"),s+=t("Rucksack",[{t:"Ohne",v:0},{t:"Mit Rucksack",v:1}],i.bag,"bag"),i.bag&&(s+=n("Farbe",mn,i.bagc,"bagc")),e.innerHTML=s,e.querySelectorAll("button[data-set]").forEach(o=>o.onclick=()=>{let a=o.dataset.set,l=o.dataset.v;if(["s","beard","top","bot","sh","cap","gl","chain","bag","spk"].includes(a)&&(l=+l),/^p\d$/.test(a)){let c=Be.look.p.slice();c[+a[1]]=l,Be.look=gn(Object.assign({},Be.look,{p:c}))}else a==="ch"?Be.look=gn(Object.assign({},Be.look,{ch:l,p:["","","",""]},Zp[l]||{print:""})):Be.look=gn(Object.assign({},Be.look,{[a]:l}));jo(),qr()})}function Nm(){if(!Xt){qt("Die Figuren werden noch geladen \u2026");return}tn=!0,Be.open=!0;for(let t in rt)rt[t]=!1;try{document.exitPointerLock()}catch{}Be.look=gn(Fe.look),BE(),jo(),qr(),Be.rot=0,re("wrBox").classList.remove("hidden");let i=re("wrCanvas"),e=i.getBoundingClientRect();Be.r.setPixelRatio(Math.min(2,devicePixelRatio||1)),Be.r.setSize(e.width||300,e.height||420,!1),Be.cam.aspect=(e.width||300)/(e.height||420),Be.cam.updateProjectionMatrix()}function kE(i){!Be.open||!Be.r||(Be.drag==null&&(Be.rot+=i*.35),Be.fig&&(Be.fig.rotation.y=Be.rot),Be.mixer&&Be.mixer.update(i),Be.r.render(Be.scene,Be.cam))}function Fm(){if(Fe.look=gn(Be.look),Dl(),Fl(),ge.role==="client"&&ge.conn)try{ge.conn.send({t:"look",lk:Fe.look})}catch{}qt("Neuer Look gespeichert \u2013 alle im Raum sehen dich jetzt so."),ls()}re("wrDone").onclick=Fm;re("wrCancel").onclick=ls;re("wrRandom").onclick=()=>{let i=Kp(Math.random,!0,!0);Math.random()<.5&&(i.ch=""),i.p=["","","",""].map(()=>Math.random()<.5?mn[Math.floor(Math.random()*mn.length)]:""),Be.look=gn(i),jo(),qr()};re("wrUndress").onclick=()=>{Be.look=gn(Object.assign({},Be.look,{top:0,bot:0,sh:0,cap:0,gl:0,chain:0,bag:0,spk:0,p:["","","",""]})),jo(),qr()};re("wrBox").addEventListener("click",i=>{i.target.id==="wrBox"&&ls()});var yd={gb:!0},Ps=null,Gr=null,Us="",Wr=[];async function Pl(i){if(!Us)return null;try{let t=await(await fetch(Us+(i?(Us.includes("?")?"&":"?")+i:""),{cache:"no-store"})).json();if(Array.isArray(t.eintraege))return Wr=t.eintraege,Om(),Wr}catch{}return null}function HE(i,e,t){let n=String(e).split(" "),s=[],r="";for(let o of n){let a=r?r+" "+o:o;i.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function Om(){if(!Gr)return;let i=Gr.image,e=i.getContext("2d"),t=i.width,n=i.height,s=e.createLinearGradient(0,0,0,n);s.addColorStop(0,"#1f3a2c"),s.addColorStop(1,"#16291f"),e.fillStyle=s,e.fillRect(0,0,t,n);for(let o=0;o<400;o++)e.fillStyle=`rgba(255,255,255,${Math.random()*.03})`,e.fillRect(Math.random()*t,Math.random()*n,3,1);e.textAlign="center",e.font='400 120px Impact, "Arial Black", sans-serif',e.fillStyle="#eef3e8",e.fillText("G\xC4STEBUCH",t/2,130),e.fillStyle="rgba(238,243,232,0.35)",e.fillRect(80,160,t-160,4),e.textAlign="left";let r=230;if(!Us)e.textAlign="center",e.font='italic 64px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#dfe8d6",e.fillText("kommt bald \u2026",t/2,400);else if(!Wr.length)e.textAlign="center",e.font='italic 60px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#dfe8d6",e.fillText("Sei der Erste \u2013",t/2,420),e.fillText("schreib was rein!",t/2,500);else for(let o of Wr.slice(0,7)){if(r>n-90)break;e.font='700 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="#9fe8b0",e.fillText(o.n,70,r),e.font='46px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#eef3e8";for(let a of HE(e,o.x,t-140).slice(0,3))r+=54,e.fillText(a,70,r);r+=66}e.textAlign="center",e.font='600 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="rgba(238,243,232,0.7)",e.fillText(Qt?"Tippe auf E zum Reinschreiben":"Klicken zum Reinschreiben",t/2,n-40),Gr.needsUpdate=!0}async function zE(i,e){try{Us=((await(await fetch("/System/gaestebuch.json",{cache:"no-store"})).json()).url||"").trim()}catch{}let t=2.75,n=3,s=3.7,r=new Ke;r.position.set(Math.sin(i)*(e-.02),t,-Math.cos(i)*(e-.02)),r.lookAt(0,t,0),dt.add(r);let o=new Me({color:3875858,roughness:.8}),a=new Y(new Xe(n,s,.12),o);r.add(a);for(let[c,u,h,d]of[[0,s/2,n+.16,.14],[0,-s/2,n+.16,.14],[n/2,0,.14,s],[-n/2,0,.14,s]]){let f=new Y(new Xe(h,d,.18),o);f.position.set(c,u,.02),r.add(f)}for(let c of[-n/2+.25,n/2-.25]){let u=new Y(new Xe(.14,t-s/2+.3,.14),o);u.position.set(c,-s/2-(t-s/2)/2+.15,-.05),r.add(u)}Gr=Ot(1024,1260,()=>{}),Ps=new Y(new lt(n-.2,s-.2),new Me({map:Gr,roughness:.95,emissive:16777215,emissiveMap:Gr,emissiveIntensity:.35})),Ps.position.z=.07,r.add(Ps);let l=new Di(16773340,9,8,.6,.7,1.4);l.position.set(0,s/2+1,1.8),l.target=Ps,r.add(l),Om(),Pl(),setInterval(()=>{tn||Pl()},6e4)}function rd(){let i=re("gbList");if(i.innerHTML="",!Us){i.innerHTML='<p class="djnone">Das G\xE4stebuch wird gerade eingerichtet \u2013 bald kannst du hier reinschreiben.</p>';return}if(!Wr.length){i.innerHTML='<p class="djnone">Noch keine Eintr\xE4ge \u2013 sei der Erste!</p>';return}for(let e of Wr){let t=document.createElement("div");t.className="gbe";let n=new Date(e.t);t.innerHTML="<b></b><span></span><p></p>",t.querySelector("b").textContent=e.n,t.querySelector("span").textContent=isNaN(n)?"":n.toLocaleDateString("de-AT")+" "+n.toLocaleTimeString("de-AT",{hour:"2-digit",minute:"2-digit"}),t.querySelector("p").textContent=e.x,i.appendChild(t)}}function GE(){tn=!0;for(let i in rt)rt[i]=!1;try{document.exitPointerLock()}catch{}re("gbName").value=Fe.name||"",re("gbText").value="",re("gbCount").textContent="0 / 100",re("gbMsg").textContent="",re("gbForm").classList.toggle("hidden",!Us),rd(),re("gbBox").classList.remove("hidden"),Pl().then(()=>rd())}re("gbText").addEventListener("input",()=>{re("gbCount").textContent=re("gbText").value.length+" / 100"});re("gbClose").onclick=ls;re("gbBox").addEventListener("click",i=>{i.target.id==="gbBox"&&ls()});re("gbForm").addEventListener("submit",async i=>{i.preventDefault();let e=re("gbText").value.replace(/\s+/g," ").trim().slice(0,100),t=(re("gbName").value.trim()||Fe.name||"Gast").slice(0,20);if(!e){re("gbMsg").textContent="Schreib zuerst etwas rein.";return}let n=0;try{n=+localStorage.getItem("spk-gb-last")||0}catch{}if(Date.now()-n<3e4){re("gbMsg").textContent="Bitte kurz warten, bevor du nochmal schreibst.";return}re("gbSend").disabled=!0,re("gbMsg").textContent="Wird gespeichert\u2026";let s=await Pl("name="+encodeURIComponent(t)+"&text="+encodeURIComponent(e));if(re("gbSend").disabled=!1,s){try{localStorage.setItem("spk-gb-last",String(Date.now()))}catch{}re("gbText").value="",re("gbCount").textContent="0 / 100",re("gbMsg").textContent="Danke! Dein Eintrag steht jetzt im G\xE4stebuch.",rd()}else re("gbMsg").textContent="Hat nicht geklappt \u2013 ist das Internet an?"});var VE="https://abacus.jasoncameron.dev/hit/spk-portal-hiasus/besucher",WE="https://abacus.jasoncameron.dev/get/spk-portal-hiasus/besucher",Bm="https://countapi.mileshilliard.com/api/v1/",Xr=null,Yo=null,Nl="",Ko=()=>{try{return new Date().toLocaleDateString("sv-SE",{timeZone:"Europe/Vienna"})}catch{return new Date().toISOString().slice(0,10)}};async function km(i){let e="besucher-"+Ko();for(let t of[`https://abacus.jasoncameron.dev/${i?"hit":"get"}/spk-portal-hiasus/${e}`,Bm+(i?"hit":"get")+"/spk-portal-hiasus-"+e])try{let n=await fetch(t,{cache:"no-store"});if(n.status===404&&!i)return 0;if(n.ok){let s=await n.json(),r=parseInt(s.value,10);if(!isNaN(r))return r}}catch{}return Nl===Ko()?Yo:null}async function Hm(){let i=Ko(),e=!1;try{e=!localStorage.getItem("spk-tag-"+i),localStorage.setItem("spk-tag-"+i,"1")}catch{}let t=await km(e);t!=null&&(Yo=t,Nl=i,Fr(!0))}async function XE(){let i=!1;try{i=!sessionStorage.getItem("spk-gezaehlt"),sessionStorage.setItem("spk-gezaehlt","1")}catch{}Xr=await zm(i),Fr(!0),Hm()}var Wo=null,um="",qE=null;async function zm(i){try{let e=await fetch(i?VE:WE,{cache:"no-store"});if(e.ok){let t=await e.json(),n=parseInt(t.value,10);if(!isNaN(n))return n}}catch{}try{let e=await fetch(Bm+(i?"hit":"get")+"/spk-portal-hiasus-besucher",{cache:"no-store"});if(e.ok){let t=await e.json(),n=parseInt(t.value,10);if(!isNaN(n))return n}}catch{}return Xr}function YE(){let i=new Date;return{time:i.toLocaleTimeString("de-AT",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),date:i.toLocaleDateString("de-AT",{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"}),vis:Xr==null?"\u2014":Xr.toLocaleString("de-AT"),day:Yo==null||Nl!==Ko()?"\u2014":Yo.toLocaleString("de-AT")}}function Fr(i){let e=YE(),t=e.time+e.vis+e.day;if(!i&&t===um||(um=t,re("hudClock")&&(re("hudClock").innerHTML=`<b>${e.time.slice(0,5)}</b><span>${Xr==null?"":"Besucher: "+e.vis+" \xB7 Heute: "+e.day}</span>`),!Wo))return;let n=Wo.image,s=n.getContext("2d"),r=n.width,o=n.height;s.fillStyle="#0b0910",s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,47,176,0.6)",s.lineWidth=6,s.strokeRect(10,10,r-20,o-20),s.textAlign="center",s.textBaseline="middle",s.font='700 150px Consolas, "Courier New", monospace',s.fillStyle="#e8f7ff",s.fillText(e.time,r/2,130),s.font='500 40px "Segoe UI", system-ui, sans-serif',s.fillStyle="#9d97ab",s.fillText(e.date,r/2,232),s.fillStyle="rgba(255,255,255,0.12)",s.fillRect(60,280,r-120,3),s.fillStyle="rgba(255,255,255,0.12)",s.fillRect(r/2-2,300,4,190),s.font='400 50px Impact, "Arial Black", sans-serif',s.fillStyle="#ff7fd8",s.fillText("BESUCHER GESAMT",r/4,340),s.fillStyle="#7fe9ff",s.fillText("HEUTE",r*3/4,340),s.font='700 96px Consolas, "Courier New", monospace',s.fillStyle="#e8f7ff",s.fillText(e.vis,r/4,440),s.fillText(e.day,r*3/4,440),Wo.needsUpdate=!0}function KE(){Wo=Ot(1024,512,()=>{});let i=new Ke;i.position.set(0,3.9,0),dt.add(i);let e=3,t=1.5,n=e/2+.11,s=new Y(new Xe(e+.16,t+.16,e+.16),new Me({color:1381659,roughness:.4,metalness:.8}));i.add(s);let r=new Le({map:Wo,toneMapped:!1,color:14211288});for(let o=0;o<4;o++){let a=new Y(new lt(e,t),r),l=o*Math.PI/2;a.position.set(Math.sin(l)*n,0,Math.cos(l)*n),a.rotation.y=l,i.add(a)}for(let o of[-1,1])for(let a of[-1,1]){let l=new Y(new Je(.02,.02,2.6,6),new Me({color:5593964,metalness:.9,roughness:.3}));l.position.set(o*e/2.2,t/2+1.3,a*e/2.2),i.add(l)}qE=i,Fr(!0),setInterval(()=>Fr(!1),1e3),XE(),setInterval(async()=>{let o=await zm(!1);if(o!=null&&(Xr=o,Fr(!0)),Nl!==Ko())Hm();else{let a=await km(!1);a!=null&&(Yo=a,Fr(!0))}},6e4)}async function jE(){let i=[];try{let s=await fetch("/__spiele",{cache:"no-store"});if(!s.ok)throw 0;i=await s.json()}catch{try{i=await(await fetch("/spiele.json",{cache:"no-store"})).json()}catch{}}Array.isArray(i)||(i=i?[i]:[]);let e=s=>{let r=/(\d{1,2})\.(\d{1,2})\.(\d{4})/.exec(s||"");return r?new Date(+r[3],+r[2]-1,+r[1]).getTime():0},t=new Array(Vr).fill(null),n=[];for(let s of i){let r=parseInt(s.portal,10);r>=1&&r<=Vr&&!t[r-1]?t[r-1]=s:n.push(s)}n.sort((s,r)=>e(s.datum)-e(r.datum));for(let s of n){let r=t.indexOf(null);r>=0&&(t[r]=s)}return t}async function $E(){try{ns=await new Ar().loadAsync("/System/assets/figur.glb");let i={};for(let t of ns.animations)i[t.name]=t;let e=t=>t?new Jn(t.name,t.duration,t.tracks.filter(n=>!n.name.startsWith("root."))):null;ui={idle:e(i.Idle_Loop),walk:e(i.Walk_Loop),run:e(i.Jog_Fwd_Loop),jump:e(i.Jump_Loop),dance:e(i.Dance_Loop),use:e(i.Interact)}}catch(i){console.warn("Figur fehlt",i),ns=null}try{Xt=await jp("/System/figuren/")}catch(i){console.warn("Figuren fehlen",i),Xt=null}try{OE(),ZE()}catch(i){console.warn("Umkleide",i)}try{NE()}catch(i){console.warn("Arcade",i)}try{Xt&&ui&&(En=em({scene:dt,camera:Pn,me:Ne,djFrames:kr,net:ge,toast:qt,canvasTex:Ot,$:re,CL:ui,FIG:Xt,audio:()=>(ld(),ht?{AC:ht,master:ni}:null),unlock:()=>{tn=!0;for(let i in rt)rt[i]=!1;try{document.exitPointerLock()}catch{}},relock:()=>{tn=!1,en&&Fs()}}))}catch(i){console.warn("UFO",i)}}var ci=null,Or=null;function Fl(){ci&&dt.remove(ci.root),!(!Xt||!ns)&&(Fe.look&&Fe.look.ch&&!Ur(Xt,Fe.look.ch)&&zo(Xt,Fe.look.ch).then(()=>{Ur(Xt,Fe.look.ch)&&Fl()}),ci=Br(Fe.name,Xo[0],Fe.look),ci.tag.visible=!1,ci.root.traverse(i=>i.layers.set(1)))}function ZE(){let i=Hn.ang,e=new Ke;e.position.set(Math.sin(i)*Hn.r,0,-Math.cos(i)*Hn.r),e.lookAt(0,0,0),dt.add(e);let t=new Ke;t.position.set(-1.9,0,.35),t.rotation.y=.35,e.add(t);let n=1.15,s=2.15,r=new Me({color:13938487,roughness:.3,metalness:.9}),o=(u,h,d,f)=>{let g=new Y(new Xe(u,h,.08),r);g.position.set(d,f,0),t.add(g)};o(n+.16,.08,0,.25),o(n+.16,.08,0,.25+s+.08),o(.08,s+.16,-n/2-.04,.29+s/2),o(.08,s+.16,n/2+.04,.29+s/2);for(let u of[-1,1]){let h=new Y(new Xe(.06,.06,.6),r);h.position.set(u*n/2,.03,-.1),t.add(h)}let a=new Y(new Xe(n,s,.02),new Me({color:1118481}));a.position.set(0,.29+s/2,-.03),t.add(a),Or=new ko(new lt(n,s),{textureWidth:Rl?384:768,textureHeight:Rl?720:1440,color:13159636,multisample:Rl?0:4}),Or.position.set(0,.29+s/2,.02),t.add(Or),Or.camera.layers.enable(1);let l=new Y(new Lt(.05,10,8),new Le({color:16773840,toneMapped:!1}));l.position.set(0,.29+s+.16,.06),t.add(l);let c=Ns([{t:"SPIEGEL",size:90,c:"#ffd23f",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"rgba(255,170,0,0.5)"}],{w:768,h:140,pw:1});c.position.set(0,.29+s+.4,.02),t.add(c),ti.pos=new C,t.getWorldPosition(ti.pos),Fl()}var ti={pos:null},En={tick(){},jump(){},collide(){},targets:()=>[],prompt:()=>"",state:()=>({n:0}),setState(){},remoteWave(){},setRad(){},hostRequest(){},control(){},openRadio(){}},xn={tick(){},render(){return!1},collide(){},targets:()=>[],speedMul:()=>1,jumpMul:()=>1,drift(){},canAim:()=>!1,use(){},prompt:()=>"",state:()=>[],setState(){},hostTake(){}};(async()=>{cE(),hE(),re("loadInfo").textContent="Lade Spiele\u2026";let[i]=await Promise.all([jE(),$E()]);i.forEach((n,s)=>fE(s,n));try{xn=Fp({scene:dt,camera:Pn,renderer:os,portals:fi,me:Ne,textPlane:Ns,toast:qt,net:ge,composer:hi,bloom:td,R_WALL:cn,ARC:Ll,PR:fm})}catch(n){console.warn("Geheimnis",n)}wE(),KE();let e=i.filter(Boolean).length;re("loadInfo").textContent=e===1?"1 Spiel im Raum":e+" Spiele im Raum",re("bEnter").disabled=!1,re("bJoin").disabled=!1,Cm(),window.konsole={_merch:()=>id,_openMerch:()=>Im(),_wardrobe:n=>{Nm(),n&&(Be.look=gn(n),jo(),qr())},_arcade:()=>zt,_pad:()=>({locked:Zt,started:en,djOpen:tn,leaving:ut,padMode:Ds}),_ufo:()=>En,_dj:kr,_addOther:dd,_secret:()=>xn,_collide:xm,MIR:ti,setMyLook:n=>{Be.look=gn(n),Fm()},me:Ne,portals:fi,net:ge,others:Bt,enterPortal:Sm,joinRoom:Cl,openRoom:Ls,keys:rt,voice:ft,started:()=>en};let t=null;try{t=JSON.parse(sessionStorage.getItem("gbgc-zurueck")||"null"),sessionStorage.removeItem("gbgc-zurueck")}catch{}Ne.pos.set(0,0,0),Ne.yaw=0,t&&Date.now()-t.t<6*36e5?(Ne.pos.set(0,0,-6),Ne.yaw=Math.PI,Ls(),t.role==="client"&&t.code?(vm(t.code),qt("Zur\xFCck im Portal \u2013 du kommst gleich wieder in den Raum von deinem Freund.")):qt("Zur\xFCck im Portal. Deine Freunde kommen gleich nach."),re("menuTitle").textContent="Willkommen zur\xFCck!"):hn.get("autojoin")||Ls(),hn.has("autotest")&&(en=!0,rs(!1)),hn.get("autojoin")&&Cl(hn.get("autojoin")).then(()=>{en=!0,rs(!1)}),as()})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
