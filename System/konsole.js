var Oh="170";var zm=0,Ad=1,Vm=2;var $f=1,Gm=2,Ei=3,Nn=0,Kt=1,It=2,oi=0,sr=1,Kn=2,Rd=3,Cd=4,Wm=5,xs=100,Xm=101,qm=102,Ym=103,Km=104,jm=200,$m=201,Zm=202,Jm=203,xc=204,_c=205,Qm=206,e0=207,t0=208,n0=209,i0=210,s0=211,r0=212,o0=213,a0=214,vc=0,yc=1,Mc=2,lr=3,Ec=4,bc=5,Sc=6,Tc=7,Zf=0,l0=1,c0=2,Xi=0,Bh=1,kh=2,Hh=3,Sr=4,h0=5,zh=6,Vh=7,Id="attached",u0="detached",Jf=300,cr=301,hr=302,wc=303,Ac=304,hl=306,jn=1e3,bi=1001,uo=1002,jt=1003,Gh=1004;var Qs=1005;var on=1006,ro=1007;var ri=1008;var wi=1009,Qf=1010,ep=1011,fo=1012,Wh=1013,ys=1014,Yn=1015,fn=1016,Xh=1017,qh=1018,ur=1020,tp=35902,np=1021,ip=1022,Dn=1023,sp=1024,rp=1025,rr=1026,dr=1027,Yh=1028,Kh=1029,op=1030,jh=1031;var $h=1033,Ra=33776,Ca=33777,Ia=33778,Pa=33779,Rc=35840,Cc=35841,Ic=35842,Pc=35843,Lc=36196,Dc=37492,Uc=37496,Nc=37808,Fc=37809,Oc=37810,Bc=37811,kc=37812,Hc=37813,zc=37814,Vc=37815,Gc=37816,Wc=37817,Xc=37818,qc=37819,Yc=37820,Kc=37821,La=36492,jc=36494,$c=36495,ap=36283,Zc=36284,Jc=36285,Qc=36286,d0=2200,f0=2201,p0=2202,fr=2300,pr=2301,Fl=2302,er=2400,tr=2401,Da=2402,Zh=2500,m0=2501,lp=0,ul=1,Uo=2,g0=3200,x0=3201;var cp=0,_0=1,Gi="",mt="srgb",ln="srgb-linear",dl="linear",_t="srgb";var Bs=7680;var Pd=519,v0=512,y0=513,M0=514,hp=515,E0=516,b0=517,S0=518,T0=519,eh=35044;var Ld="300 es",Si=2e3,Ua=2001,Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dd=1234567,oo=Math.PI/180,mr=180/Math.PI;function Un(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function Vt(i,e,t){return Math.max(e,Math.min(t,i))}function Jh(i,e){return(i%e+e)%e}function w0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function A0(i,e,t){return i!==e?(t-i)/(e-i):0}function ao(i,e,t){return(1-t)*i+t*e}function R0(i,e,t,n){return ao(i,e,1-Math.exp(-t*n))}function C0(i,e=1){return e-Math.abs(Jh(i,e*2)-e)}function I0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function P0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function L0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function D0(i,e){return i+Math.random()*(e-i)}function U0(i){return i*(.5-Math.random())}function N0(i){i!==void 0&&(Dd=i);let e=Dd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function F0(i){return i*oo}function O0(i){return i*mr}function B0(i){return(i&i-1)===0&&i!==0}function k0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function H0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function z0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var fl={DEG2RAD:oo,RAD2DEG:mr,generateUUID:Un,clamp:Vt,euclideanModulo:Jh,mapLinear:w0,inverseLerp:A0,lerp:ao,damp:R0,pingpong:C0,smoothstep:I0,smootherstep:P0,randInt:L0,randFloat:D0,randFloatSpread:U0,seededRandom:N0,degToRad:F0,radToDeg:O0,isPowerOfTwo:B0,ceilPowerOfTwo:k0,floorPowerOfTwo:H0,setQuaternionFromProperEuler:z0,normalize:yt,denormalize:qn},ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],y=s[4],_=s[7],P=s[2],b=s[5],R=s[8];return r[0]=o*x+a*v+l*P,r[3]=o*m+a*y+l*b,r[6]=o*p+a*_+l*R,r[1]=c*x+u*v+h*P,r[4]=c*m+u*y+h*b,r[7]=c*p+u*_+h*R,r[2]=d*x+f*v+g*P,r[5]=d*m+f*y+g*b,r[8]=d*p+f*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ol.makeScale(e,t)),this}rotate(e){return this.premultiply(Ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ol=new Qe;function up(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function V0(){let i=po("canvas");return i.style.display="block",i}var Ud={};function io(i){i in Ud||(Ud[i]=!0,console.warn(i))}function G0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function W0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function X0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var st={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===_t&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===_t&&(i.r=or(i.r),i.g=or(i.g),i.b=or(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?dl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Nd=[.64,.33,.3,.6,.15,.06],Fd=[.2126,.7152,.0722],Od=[.3127,.329],Bd=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kd=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[ln]:{primaries:Nd,whitePoint:Od,transfer:dl,toXYZ:Bd,fromXYZ:kd,luminanceCoefficients:Fd,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:Nd,whitePoint:Od,transfer:_t,toXYZ:Bd,fromXYZ:kd,luminanceCoefficients:Fd,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}});var ks,th=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=po("canvas")),ks.width=e.width,ks.height=e.height;let n=ks.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=po("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ti(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},q0=0,Na=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bl(s[o].image)):r.push(Bl(s[o]))}else r=Bl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?th.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Y0=0,$t=class i extends Ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bi,s=bi,r=on,o=ri,a=Dn,l=wi,c=i.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Un(),this.name="",this.source=new Na(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Jf;$t.DEFAULT_ANISOTROPY=1;var lt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,_=(f+1)/2,P=(p+1)/2,b=(u+d)/4,R=(h+x)/4,I=(g+m)/4;return y>_&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=b/n,r=R/n):_>P?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=R/r,s=I/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nh=class extends Ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new $t(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Na(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends nh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fa=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ih=class extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let P=Math.sqrt(y),b=Math.atan2(P,p*v);m=Math.sin(m*b)/P,a=Math.sin(a*b)/P}let _=a*v;if(l=l*m+d*_,c=c*m+f*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kl.copy(this).projectOnVector(e),this.sub(kl)}reflect(e){return this.sub(kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kl=new C,Hd=new Nt,an=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jo.copy(n.boundingBox)),Jo.applyMatrix4(e.matrixWorld),this.union(Jo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Qo.subVectors(this.max,jr),Hs.subVectors(e.a,jr),zs.subVectors(e.b,jr),Vs.subVectors(e.c,jr),Oi.subVectors(zs,Hs),Bi.subVectors(Vs,zs),hs.subVectors(Hs,Vs);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-hs.z,hs.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,hs.z,0,-hs.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-hs.y,hs.x,0];return!Hl(t,Hs,zs,Vs,Qo)||(t=[1,0,0,0,1,0,0,0,1],!Hl(t,Hs,zs,Vs,Qo))?!1:(ea.crossVectors(Oi,Bi),t=[ea.x,ea.y,ea.z],Hl(t,Hs,zs,Vs,Qo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},gi=[new C,new C,new C,new C,new C,new C,new C,new C],Vn=new C,Jo=new an,Hs=new C,zs=new C,Vs=new C,Oi=new C,Bi=new C,hs=new C,jr=new C,Qo=new C,ea=new C,us=new C;function Hl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){us.fromArray(i,r);let a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),u=n.dot(us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var K0=new an,$r=new C,zl=new C,Sn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):K0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);let t=$r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($r,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(zl)),this.expandByPoint($r.copy(e.center).sub(zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new C,Vl=new C,ta=new C,ki=new C,Gl=new C,na=new C,Wl=new C,Ms=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Vl.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Vl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ta),a=ki.dot(this.direction),l=-ki.dot(ta),c=ki.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Vl).addScaledVector(ta,d),f}intersectSphere(e,t){xi.subVectors(e.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,s,r){Gl.subVectors(t,e),na.subVectors(n,e),Wl.crossVectors(Gl,na);let o=this.direction.dot(Wl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);let l=a*this.direction.dot(na.crossVectors(ki,na));if(l<0)return null;let c=a*this.direction.dot(Gl.cross(ki));if(c<0||l+c>o)return null;let u=-a*ki.dot(Wl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Gs.setFromMatrixColumn(e,0).length(),r=1/Gs.setFromMatrixColumn(e,1).length(),o=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j0,e,$0)}lookAt(e,t,n){let s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Hi.crossVectors(n,En),Hi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Hi.crossVectors(n,En)),Hi.normalize(),ia.crossVectors(En,Hi),s[0]=Hi.x,s[4]=ia.x,s[8]=En.x,s[1]=Hi.y,s[5]=ia.y,s[9]=En.y,s[2]=Hi.z,s[6]=ia.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],y=n[7],_=n[11],P=n[15],b=s[0],R=s[4],I=s[8],S=s[12],E=s[1],D=s[5],W=s[9],L=s[13],O=s[2],z=s[6],F=s[10],re=s[14],q=s[3],de=s[7],me=s[11],ae=s[15];return r[0]=o*b+a*E+l*O+c*q,r[4]=o*R+a*D+l*z+c*de,r[8]=o*I+a*W+l*F+c*me,r[12]=o*S+a*L+l*re+c*ae,r[1]=u*b+h*E+d*O+f*q,r[5]=u*R+h*D+d*z+f*de,r[9]=u*I+h*W+d*F+f*me,r[13]=u*S+h*L+d*re+f*ae,r[2]=g*b+x*E+m*O+p*q,r[6]=g*R+x*D+m*z+p*de,r[10]=g*I+x*W+m*F+p*me,r[14]=g*S+x*L+m*re+p*ae,r[3]=v*b+y*E+_*O+P*q,r[7]=v*R+y*D+_*z+P*de,r[11]=v*I+y*W+_*F+P*me,r[15]=v*S+y*L+_*re+P*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=h*m*c-x*d*c+x*l*f-a*m*f-h*l*p+a*d*p,y=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,_=u*x*c-g*h*c+g*a*f-o*x*f-u*a*p+o*h*p,P=g*h*l-u*x*l-g*a*d+o*x*d+u*a*m-o*h*m,b=t*v+n*y+s*_+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/b;return e[0]=v*R,e[1]=(x*d*r-h*m*r-x*s*f+n*m*f+h*s*p-n*d*p)*R,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*R,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*R,e[4]=y*R,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=_*R,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*R,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*R,e[12]=P*R,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*m+t*h*m)*R,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,v=l*c,y=l*u,_=l*h,P=n.x,b=n.y,R=n.z;return s[0]=(1-(x+p))*P,s[1]=(f+_)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(f-_)*b,s[5]=(1-(d+p))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Gs.set(s[0],s[1],s[2]).length(),o=Gs.set(s[4],s[5],s[6]).length(),a=Gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);let c=1/r,u=1/o,h=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,t.setFromRotationMatrix(Gn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Si){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===Si)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ua)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Si){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u,g,x;if(a===Si)g=(o+r)*h,x=-2*h;else if(a===Ua)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gs=new C,Gn=new Ke,j0=new C(0,0,0),$0=new C(1,1,1),Hi=new C,ia=new C,En=new C,zd=new Ke,Vd=new Nt,Tn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Z0=0,Gd=new C,Ws=new Nt,_i=new Ke,sa=new C,Zr=new C,J0=new C,Q0=new Nt,Wd=new C(1,0,0),Xd=new C(0,1,0),qd=new C(0,0,1),Yd={type:"added"},eg={type:"removed"},Xs={type:"childadded",child:null},Xl={type:"childremoved",child:null},Rt=class i extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Tn,n=new Nt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Qe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Wd,e)}rotateY(e){return this.rotateOnAxis(Xd,e)}rotateZ(e){return this.rotateOnAxis(qd,e)}translateOnAxis(e,t){return Gd.copy(e).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wd,e)}translateY(e){return this.translateOnAxis(Xd,e)}translateZ(e){return this.translateOnAxis(qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?sa.copy(e):sa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Zr,sa,this.up):_i.lookAt(sa,Zr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Ws.setFromRotationMatrix(_i),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eg),Xl.child=e,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,J0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,Q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Rt.DEFAULT_UP=new C(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wn=new C,vi=new C,ql=new C,yi=new C,qs=new C,Ys=new C,Kd=new C,Yl=new C,Kl=new C,jl=new C,$l=new lt,Zl=new lt,Jl=new lt,_s=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Wn.subVectors(e,t),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Wn.subVectors(s,t),vi.subVectors(n,t),ql.subVectors(e,t);let o=Wn.dot(Wn),a=Wn.dot(vi),l=Wn.dot(ql),c=vi.dot(vi),u=vi.dot(ql),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return $l.setScalar(0),Zl.setScalar(0),Jl.setScalar(0),$l.fromBufferAttribute(e,t),Zl.fromBufferAttribute(e,n),Jl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($l,r.x),o.addScaledVector(Zl,r.y),o.addScaledVector(Jl,r.z),o}static isFrontFacing(e,t,n,s){return Wn.subVectors(n,t),vi.subVectors(e,t),Wn.cross(vi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Wn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;qs.subVectors(s,n),Ys.subVectors(r,n),Yl.subVectors(e,n);let l=qs.dot(Yl),c=Ys.dot(Yl);if(l<=0&&c<=0)return t.copy(n);Kl.subVectors(e,s);let u=qs.dot(Kl),h=Ys.dot(Kl);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(qs,o);jl.subVectors(e,r);let f=qs.dot(jl),g=Ys.dot(jl);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ys,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Kd.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Kd,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(qs,o).addScaledVector(Ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Ql(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Jh(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ql(o,r,e+1/3),this.g=Ql(o,r,e),this.b=Ql(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return st.fromWorkingColorSpace(rn.copy(this),e),Math.round(Vt(rn.r*255,0,255))*65536+Math.round(Vt(rn.g*255,0,255))*256+Math.round(Vt(rn.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(rn.copy(this),t);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=mt){st.fromWorkingColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,s=rn.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(ra);let n=ao(zi.h,ra.h,t),s=ao(zi.s,ra.s,t),r=ao(zi.l,ra.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Re;Re.NAMES=dp;var tg=0,wn=class extends Ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Un(),this.name="",this.blending=sr,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=_c,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xc&&(n.blendSrc=this.blendSrc),this.blendDst!==_c&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Le=class extends wn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new C,oa=new ce,Ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eh,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}};var Oa=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ba=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},ng=0,Ln=new Ke,ec=new Rt,Ks=new C,bn=new an,Jr=new an,Yt=new C,Ct=class i extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?Ba:Oa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(bn.min,Jr.min),bn.expandByPoint(Yt),Yt.addVectors(bn.max,Jr.max),bn.expandByPoint(Yt)):(bn.expandByPoint(Jr.min),bn.expandByPoint(Jr.max))}bn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Yt.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(e,c),Yt.add(Ks)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new C,l[I]=new C;let c=new C,u=new C,h=new C,d=new ce,f=new ce,g=new ce,x=new C,m=new C;function p(I,S,E){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(x),a[S].add(x),a[E].add(x),l[I].add(m),l[S].add(m),l[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,S=v.length;I<S;++I){let E=v[I],D=E.start,W=E.count;for(let L=D,O=D+W;L<O;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let y=new C,_=new C,P=new C,b=new C;function R(I){P.fromBufferAttribute(s,I),b.copy(P);let S=a[I];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),_.crossVectors(b,S);let D=_.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,D)}for(let I=0,S=v.length;I<S;++I){let E=v[I],D=E.start,W=E.count;for(let L=D,O=D+W;L<O;L+=3)R(e.getX(L+0)),R(e.getX(L+1)),R(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Ft(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jd=new Ke,ds=new Ms,aa=new Sn,$d=new C,la=new C,ca=new C,ha=new C,tc=new C,ua=new C,Zd=new C,da=new C,K=class extends Rt{constructor(e=new Ct,t=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(tc.fromBufferAttribute(h,e),o?ua.addScaledVector(tc,u):ua.addScaledVector(tc.sub(t),u))}t.add(ua)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(aa.containsPoint(ds.origin)===!1&&(ds.intersectSphere(aa,$d)===null||ds.origin.distanceToSquared($d)>(e.far-e.near)**2))&&(jd.copy(r).invert(),ds.copy(e.ray).applyMatrix4(jd),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,P=y;_<P;_+=3){let b=a.getX(_),R=a.getX(_+1),I=a.getX(_+2);s=fa(this,p,e,n,c,u,h,b,R,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=fa(this,o,e,n,c,u,h,v,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,P=y;_<P;_+=3){let b=_,R=_+1,I=_+2;s=fa(this,p,e,n,c,u,h,b,R,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=m,y=m+1,_=m+2;s=fa(this,o,e,n,c,u,h,v,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ig(i,e,t,n,s,r,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Nn,a),l===null)return null;da.copy(a),da.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(da);return c<t.near||c>t.far?null:{distance:c,point:da.clone(),object:i}}function fa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,la),i.getVertexPosition(l,ca),i.getVertexPosition(c,ha);let u=ig(i,e,t,n,la,ca,ha,Zd);if(u){let h=new C;_s.getBarycoord(Zd,la,ca,ha,h),s&&(u.uv=_s.getInterpolatedAttribute(s,a,l,c,h,new ce)),r&&(u.uv1=_s.getInterpolatedAttribute(r,a,l,c,h,new ce)),o&&(u.normal=_s.getInterpolatedAttribute(o,a,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};_s.getNormal(la,ca,ha,d.normal),u.face=d,u.barycoord=h}return u}var Ge=class i extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(h,2));function g(x,m,p,v,y,_,P,b,R,I,S){let E=_/R,D=P/I,W=_/2,L=P/2,O=b/2,z=R+1,F=I+1,re=0,q=0,de=new C;for(let me=0;me<F;me++){let ae=me*D-L;for(let De=0;De<z;De++){let qe=De*E-W;de[x]=qe*v,de[m]=ae*y,de[p]=O,c.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[p]=b>0?1:-1,u.push(de.x,de.y,de.z),h.push(De/R),h.push(1-me/I),re+=1}}for(let me=0;me<I;me++)for(let ae=0;ae<R;ae++){let De=d+ae+z*me,qe=d+ae+z*(me+1),ne=d+(ae+1)+z*(me+1),ge=d+(ae+1)+z*me;l.push(De,qe,ge),l.push(qe,ne,ge),q+=6}a.addGroup(f,q,S),f+=q,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function gr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function dn(i){let e={};for(let t=0;t<i.length;t++){let n=gr(i[t]);for(let s in n)e[s]=n[s]}return e}function sg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var ai={clone:gr,merge:dn},rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tt=class extends wn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rg,this.fragmentShader=og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=sg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ka=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vi=new C,Jd=new ce,Qd=new ce,Dt=class extends ka{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,Jd,Qd),t.subVectors(Qd,Jd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(oo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},js=-90,$s=1,sh=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(js,$s,e,t);s.layers=this.layers,this.add(s);let r=new Dt(js,$s,e,t);r.layers=this.layers,this.add(r);let o=new Dt(js,$s,e,t);o.layers=this.layers,this.add(o);let a=new Dt(js,$s,e,t);a.layers=this.layers,this.add(a);let l=new Dt(js,$s,e,t);l.layers=this.layers,this.add(l);let c=new Dt(js,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ha=class extends $t{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:cr,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rh=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ha(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),r=new Tt({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:oi});r.uniforms.tEquirect.value=t;let o=new K(s,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=on),new sh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},nc=new C,ag=new C,lg=new Qe,Xn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=nc.subVectors(n,t).cross(ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(nc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lg.getNormalMatrix(e),s=this.coplanarPoint(nc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new Sn,pa=new C,go=class{constructor(e=new Xn,t=new Xn,n=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,m-f,_-p).normalize(),n[1].setComponents(l+r,d+c,m+f,_+p).normalize(),n[2].setComponents(l+o,d+u,m+g,_+v).normalize(),n[3].setComponents(l-o,d-u,m-g,_-v).normalize(),n[4].setComponents(l-a,d-h,m-x,_-y).normalize(),t===Si)n[5].setComponents(l+a,d+h,m+x,_+y).normalize();else if(t===Ua)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(pa.x=s.normal.x>0?e.max.x:e.min.x,pa.y=s.normal.y>0?e.max.y:e.min.y,pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function pp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cg(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ut=class i extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let v=p*d-o;for(let y=0;y<c;y++){let _=y*h-r;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let y=v+c*p,_=v+c*(p+1),P=v+1+c*(p+1),b=v+1+c*p;f.push(y,_,b),f.push(_,P,b)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ug=`#ifdef USE_ALPHAHASH
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
#endif`,dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gg=`#ifdef USE_AOMAP
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
#endif`,xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_g=`#ifdef USE_BATCHING
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
#endif`,vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bg=`#ifdef USE_IRIDESCENCE
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
#endif`,Sg=`#ifdef USE_BUMPMAP
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dg=`#define PI 3.141592653589793
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
} // validated`,Ug=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ng=`vec3 transformedNormal = objectNormal;
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
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
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
#endif`,Yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zg=`#ifdef USE_GRADIENTMAP
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
}`,Jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
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
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ax=`PhysicalMaterial material;
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
#endif`,lx=`struct PhysicalMaterial {
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
}`,cx=`
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vx=`#if defined( USE_POINTS_UV )
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
#endif`,yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tx=`#ifdef USE_MORPHTARGETS
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
#endif`,wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lx=`#ifdef USE_NORMALMAP
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
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kx=`float getShadowMask() {
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
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,Zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jx=`#ifdef USE_SKINNING
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
#endif`,Qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i_=`#ifdef USE_TRANSMISSION
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
#endif`,s_=`#ifdef USE_TRANSMISSION
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
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h_=`uniform sampler2D t2D;
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
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`#include <common>
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
}`,g_=`#if DEPTH_PACKING == 3200
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
}`,x_=`#define DISTANCE
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
}`,__=`#define DISTANCE
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`uniform float scale;
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
}`,E_=`uniform vec3 diffuse;
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
}`,b_=`#include <common>
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
}`,S_=`uniform vec3 diffuse;
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
}`,T_=`#define LAMBERT
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
}`,w_=`#define LAMBERT
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
}`,A_=`#define MATCAP
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
}`,R_=`#define MATCAP
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
}`,C_=`#define NORMAL
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
}`,I_=`#define NORMAL
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
}`,P_=`#define PHONG
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
}`,L_=`#define PHONG
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
}`,D_=`#define STANDARD
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
}`,U_=`#define STANDARD
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
}`,N_=`#define TOON
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
}`,F_=`#define TOON
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
}`,O_=`uniform float size;
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
}`,B_=`uniform vec3 diffuse;
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
}`,k_=`#include <common>
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
}`,H_=`uniform vec3 color;
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
}`,z_=`uniform float rotation;
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
}`,V_=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:hg,alphahash_pars_fragment:ug,alphamap_fragment:dg,alphamap_pars_fragment:fg,alphatest_fragment:pg,alphatest_pars_fragment:mg,aomap_fragment:gg,aomap_pars_fragment:xg,batching_pars_vertex:_g,batching_vertex:vg,begin_vertex:yg,beginnormal_vertex:Mg,bsdfs:Eg,iridescence_fragment:bg,bumpmap_pars_fragment:Sg,clipping_planes_fragment:Tg,clipping_planes_pars_fragment:wg,clipping_planes_pars_vertex:Ag,clipping_planes_vertex:Rg,color_fragment:Cg,color_pars_fragment:Ig,color_pars_vertex:Pg,color_vertex:Lg,common:Dg,cube_uv_reflection_fragment:Ug,defaultnormal_vertex:Ng,displacementmap_pars_vertex:Fg,displacementmap_vertex:Og,emissivemap_fragment:Bg,emissivemap_pars_fragment:kg,colorspace_fragment:Hg,colorspace_pars_fragment:zg,envmap_fragment:Vg,envmap_common_pars_fragment:Gg,envmap_pars_fragment:Wg,envmap_pars_vertex:Xg,envmap_physical_pars_fragment:nx,envmap_vertex:qg,fog_vertex:Yg,fog_pars_vertex:Kg,fog_fragment:jg,fog_pars_fragment:$g,gradientmap_pars_fragment:Zg,lightmap_pars_fragment:Jg,lights_lambert_fragment:Qg,lights_lambert_pars_fragment:ex,lights_pars_begin:tx,lights_toon_fragment:ix,lights_toon_pars_fragment:sx,lights_phong_fragment:rx,lights_phong_pars_fragment:ox,lights_physical_fragment:ax,lights_physical_pars_fragment:lx,lights_fragment_begin:cx,lights_fragment_maps:hx,lights_fragment_end:ux,logdepthbuf_fragment:dx,logdepthbuf_pars_fragment:fx,logdepthbuf_pars_vertex:px,logdepthbuf_vertex:mx,map_fragment:gx,map_pars_fragment:xx,map_particle_fragment:_x,map_particle_pars_fragment:vx,metalnessmap_fragment:yx,metalnessmap_pars_fragment:Mx,morphinstance_vertex:Ex,morphcolor_vertex:bx,morphnormal_vertex:Sx,morphtarget_pars_vertex:Tx,morphtarget_vertex:wx,normal_fragment_begin:Ax,normal_fragment_maps:Rx,normal_pars_fragment:Cx,normal_pars_vertex:Ix,normal_vertex:Px,normalmap_pars_fragment:Lx,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Nx,iridescence_pars_fragment:Fx,opaque_fragment:Ox,packing:Bx,premultiplied_alpha_fragment:kx,project_vertex:Hx,dithering_fragment:zx,dithering_pars_fragment:Vx,roughnessmap_fragment:Gx,roughnessmap_pars_fragment:Wx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:qx,shadowmap_vertex:Yx,shadowmask_pars_fragment:Kx,skinbase_vertex:jx,skinning_pars_vertex:$x,skinning_vertex:Zx,skinnormal_vertex:Jx,specularmap_fragment:Qx,specularmap_pars_fragment:e_,tonemapping_fragment:t_,tonemapping_pars_fragment:n_,transmission_fragment:i_,transmission_pars_fragment:s_,uv_pars_fragment:r_,uv_pars_vertex:o_,uv_vertex:a_,worldpos_vertex:l_,background_vert:c_,background_frag:h_,backgroundCube_vert:u_,backgroundCube_frag:d_,cube_vert:f_,cube_frag:p_,depth_vert:m_,depth_frag:g_,distanceRGBA_vert:x_,distanceRGBA_frag:__,equirect_vert:v_,equirect_frag:y_,linedashed_vert:M_,linedashed_frag:E_,meshbasic_vert:b_,meshbasic_frag:S_,meshlambert_vert:T_,meshlambert_frag:w_,meshmatcap_vert:A_,meshmatcap_frag:R_,meshnormal_vert:C_,meshnormal_frag:I_,meshphong_vert:P_,meshphong_frag:L_,meshphysical_vert:D_,meshphysical_frag:U_,meshtoon_vert:N_,meshtoon_frag:F_,points_vert:O_,points_frag:B_,shadow_vert:k_,shadow_frag:H_,sprite_vert:z_,sprite_frag:V_},Se={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},si={basic:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:dn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:dn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:dn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:dn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:dn([Se.points,Se.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:dn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:dn([Se.common,Se.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:dn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:dn([Se.sprite,Se.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:dn([Se.common,Se.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:dn([Se.lights,Se.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};si.physical={uniforms:dn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var ma={r:0,b:0,g:0},ps=new Tn,G_=new Ke;function W_(i,e,t,n,s,r,o){let a=new Re(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function x(v){let y=!1,_=g(v);_===null?p(a,l):_&&_.isColor&&(p(_,1),y=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){let _=g(y);_&&(_.isCubeTexture||_.mapping===hl)?(u===void 0&&(u=new K(new Ge(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:gr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ps.copy(y.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(G_.makeRotationFromEuler(ps)),u.material.toneMapped=st.getTransfer(_.colorSpace)!==_t,(h!==_||d!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new K(new ut(2,2),new Tt({name:"BackgroundMaterial",uniforms:gr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(_.colorSpace)!==_t,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(ma,fp(i)),n.buffers.color.setClear(ma.r,ma.g,ma.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:x,addToRenderList:m}}function X_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(E,D,W,L,O){let z=!1,F=h(L,W,D);r!==F&&(r=F,c(r.object)),z=f(E,L,W,O),z&&g(E,L,W,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,_(E,D,W,L),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,D,W){let L=W.wireframe===!0,O=n[E.id];O===void 0&&(O={},n[E.id]=O);let z=O[D.id];z===void 0&&(z={},O[D.id]=z);let F=z[L];return F===void 0&&(F=d(l()),z[L]=F),F}function d(E){let D=[],W=[],L=[];for(let O=0;O<t;O++)D[O]=0,W[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:L,object:E,attributes:{},index:null}}function f(E,D,W,L){let O=r.attributes,z=D.attributes,F=0,re=W.getAttributes();for(let q in re)if(re[q].location>=0){let me=O[q],ae=z[q];if(ae===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(ae=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(ae=E.instanceColor)),me===void 0||me.attribute!==ae||ae&&me.data!==ae.data)return!0;F++}return r.attributesNum!==F||r.index!==L}function g(E,D,W,L){let O={},z=D.attributes,F=0,re=W.getAttributes();for(let q in re)if(re[q].location>=0){let me=z[q];me===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(me=E.instanceColor));let ae={};ae.attribute=me,me&&me.data&&(ae.data=me.data),O[q]=ae,F++}r.attributes=O,r.attributesNum=F,r.index=L}function x(){let E=r.newAttributes;for(let D=0,W=E.length;D<W;D++)E[D]=0}function m(E){p(E,0)}function p(E,D){let W=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;W[E]=1,L[E]===0&&(i.enableVertexAttribArray(E),L[E]=1),O[E]!==D&&(i.vertexAttribDivisor(E,D),O[E]=D)}function v(){let E=r.newAttributes,D=r.enabledAttributes;for(let W=0,L=D.length;W<L;W++)D[W]!==E[W]&&(i.disableVertexAttribArray(W),D[W]=0)}function y(E,D,W,L,O,z,F){F===!0?i.vertexAttribIPointer(E,D,W,O,z):i.vertexAttribPointer(E,D,W,L,O,z)}function _(E,D,W,L){x();let O=L.attributes,z=W.getAttributes(),F=D.defaultAttributeValues;for(let re in z){let q=z[re];if(q.location>=0){let de=O[re];if(de===void 0&&(re==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),re==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),de!==void 0){let me=de.normalized,ae=de.itemSize,De=e.get(de);if(De===void 0)continue;let qe=De.buffer,ne=De.type,ge=De.bytesPerElement,Y=ne===i.INT||ne===i.UNSIGNED_INT||de.gpuType===Wh;if(de.isInterleavedBufferAttribute){let se=de.data,_e=se.stride,we=de.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<q.locationSize;be++)p(q.location+be,se.meshPerAttribute);E.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<q.locationSize;be++)m(q.location+be);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let be=0;be<q.locationSize;be++)y(q.location+be,ae/q.locationSize,ne,me,_e*ge,(we+ae/q.locationSize*be)*ge,Y)}else{if(de.isInstancedBufferAttribute){for(let se=0;se<q.locationSize;se++)p(q.location+se,de.meshPerAttribute);E.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let se=0;se<q.locationSize;se++)m(q.location+se);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let se=0;se<q.locationSize;se++)y(q.location+se,ae/q.locationSize,ne,me,ae*ge,ae/q.locationSize*se*ge,Y)}}else if(F!==void 0){let me=F[re];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(q.location,me);break;case 3:i.vertexAttrib3fv(q.location,me);break;case 4:i.vertexAttrib4fv(q.location,me);break;default:i.vertexAttrib1fv(q.location,me)}}}}v()}function P(){I();for(let E in n){let D=n[E];for(let W in D){let L=D[W];for(let O in L)u(L[O].object),delete L[O];delete D[W]}delete n[E]}}function b(E){if(n[E.id]===void 0)return;let D=n[E.id];for(let W in D){let L=D[W];for(let O in L)u(L[O].object),delete L[O];delete D[W]}delete n[E.id]}function R(E){for(let D in n){let W=n[D];if(W[E.id]===void 0)continue;let L=W[E.id];for(let O in L)u(L[O].object),delete L[O];delete W[E.id]}}function I(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function q_(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Y_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let I=R===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==wi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Yn&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:P,maxSamples:b}}function K_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Xn,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let v=r?0:n,y=v*4,_=p.clippingState||null;l.value=_,_=u(g,d,y,f);for(let P=0;P!==y;++P)_[P]=t[P];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function j_(i){let e=new WeakMap;function t(o,a){return a===wc?o.mapping=cr:a===Ac&&(o.mapping=hr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wc||a===Ac)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new rh(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Yi=class extends ka{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nr=4,ef=[.125,.215,.35,.446,.526,.582],vs=20,ic=new Yi,tf=new Re,sc=null,rc=0,oc=0,ac=!1,gs=(1+Math.sqrt(5))/2,Zs=1/gs,nf=[new C(-gs,Zs,0),new C(gs,Zs,0),new C(-Zs,0,gs),new C(Zs,0,gs),new C(0,gs,-Zs),new C(0,gs,Zs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],za=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sc,rc,oc),this._renderer.xr.enabled=ac,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),oc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:fn,format:Dn,colorSpace:ln,depthBuffer:!1},s=sf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$_(r)),this._blurMaterial=Z_(r,e,t)}return s}_compileMaterial(e){let t=new K(this._lodPlanes[0],e);this._renderer.compile(t,ic)}_sceneToCubeUV(e,t,n,s){let a=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(tf),u.toneMapping=Xi,u.autoClear=!1;let f=new Le({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new K(new Ge,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(tf),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;ga(s,v*y,p>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===cr||e.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new K(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ga(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ic)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nf[(s-r-1)%nf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new K(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):vs;m>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);let p=[],v=0;for(let R=0;R<vs;++R){let I=R/x,S=Math.exp(-I*I/2);p.push(S),R===0?v+=S:R<m&&(v+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let _=this._sizeLods[s],P=3*_*(s>y-nr?s-y+nr:0),b=4*(this._cubeSize-_);ga(t,P,b,3*_,2*_),l.setRenderTarget(t),l.render(h,ic)}};function $_(i){let e=[],t=[],n=[],s=i,r=i-nr+1+ef.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-nr?l=ef[o-i+nr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),y=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let b=0;b<f;b++){let R=b%3*2/3-1,I=b>2?0:-1,S=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(S,x*g*b),y.set(d,m*g*b);let E=[b,b,b,b,b,b];_.set(E,p*g*b)}let P=new Ct;P.setAttribute("position",new Ft(v,x)),P.setAttribute("uv",new Ft(y,m)),P.setAttribute("faceIndex",new Ft(_,p)),e.push(P),s>nr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sf(i,e,t){let n=new Ht(i,e,t);return n.texture.mapping=hl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Z_(i,e,t){let n=new Float32Array(vs),s=new C(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function rf(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function of(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Qh(){return`

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
	`}function J_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===wc||l===Ac,u=l===cr||l===hr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new za(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new za(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Q_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&io("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ev(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let y=0,_=v.length;y<_;y+=3){let P=v[y+0],b=v[y+1],R=v[y+2];d.push(P,b,b,R,R,P)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let P=y+0,b=y+1,R=y+2;d.push(P,b,b,R,R,P)}}else return;let m=new(up(d)?Ba:Oa)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function tv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*x[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function nv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function iv(i,e,t){let n=new WeakMap,s=new lt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,P=1;_>e.maxTextureSize&&(P=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let b=new Float32Array(_*P*4*h),R=new Fa(b,_,P,h);R.type=Yn,R.needsUpdate=!0;let I=y*4;for(let E=0;E<h;E++){let D=m[E],W=p[E],L=v[E],O=_*P*4*E;for(let z=0;z<D.count;z++){let F=z*I;f===!0&&(s.fromBufferAttribute(D,z),b[O+F+0]=s.x,b[O+F+1]=s.y,b[O+F+2]=s.z,b[O+F+3]=0),g===!0&&(s.fromBufferAttribute(W,z),b[O+F+4]=s.x,b[O+F+5]=s.y,b[O+F+6]=s.z,b[O+F+7]=0),x===!0&&(s.fromBufferAttribute(L,z),b[O+F+8]=s.x,b[O+F+9]=s.y,b[O+F+10]=s.z,b[O+F+11]=L.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new ce(_,P)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function sv(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Va=class extends $t{constructor(e,t,n,s,r,o,a,l,c,u=rr){if(u!==rr&&u!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===rr&&(n=ys),n===void 0&&u===dr&&(n=ur),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mp=new $t,af=new Va(1,1),gp=new Fa,xp=new ih,_p=new Ha,lf=[],cf=[],hf=new Float32Array(16),uf=new Float32Array(9),df=new Float32Array(4);function Tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=lf[s];if(r===void 0&&(r=new Float32Array(s),lf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function pl(i,e){let t=cf[e];t===void 0&&(t=new Int32Array(e),cf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function cv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;df.set(n),i.uniformMatrix2fv(this.addr,!1,df),Wt(t,n)}}function hv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;uf.set(n),i.uniformMatrix3fv(this.addr,!1,uf),Wt(t,n)}}function uv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;hf.set(n),i.uniformMatrix4fv(this.addr,!1,hf),Wt(t,n)}}function dv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function _v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(af.compareFunction=hp,r=af):r=mp,t.setTexture2D(e||r,s)}function Mv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xp,s)}function Ev(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_p,s)}function bv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gp,s)}function Sv(i){switch(i){case 5126:return rv;case 35664:return ov;case 35665:return av;case 35666:return lv;case 35674:return cv;case 35675:return hv;case 35676:return uv;case 5124:case 35670:return dv;case 35667:case 35671:return fv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return xv;case 36295:return _v;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return bv}}function Tv(i,e){i.uniform1fv(this.addr,e)}function wv(i,e){let t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Av(i,e){let t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function Rv(i,e){let t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function Cv(i,e){let t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Iv(i,e){let t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pv(i,e){let t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lv(i,e){i.uniform1iv(this.addr,e)}function Dv(i,e){i.uniform2iv(this.addr,e)}function Uv(i,e){i.uniform3iv(this.addr,e)}function Nv(i,e){i.uniform4iv(this.addr,e)}function Fv(i,e){i.uniform1uiv(this.addr,e)}function Ov(i,e){i.uniform2uiv(this.addr,e)}function Bv(i,e){i.uniform3uiv(this.addr,e)}function kv(i,e){i.uniform4uiv(this.addr,e)}function Hv(i,e,t){let n=this.cache,s=e.length,r=pl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||mp,r[o])}function zv(i,e,t){let n=this.cache,s=e.length,r=pl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xp,r[o])}function Vv(i,e,t){let n=this.cache,s=e.length,r=pl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||_p,r[o])}function Gv(i,e,t){let n=this.cache,s=e.length,r=pl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||gp,r[o])}function Wv(i){switch(i){case 5126:return Tv;case 35664:return wv;case 35665:return Av;case 35666:return Rv;case 35674:return Cv;case 35675:return Iv;case 35676:return Pv;case 5124:case 35670:return Lv;case 35667:case 35671:return Dv;case 35668:case 35672:return Uv;case 35669:case 35673:return Nv;case 5125:return Fv;case 36294:return Ov;case 36295:return Bv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Gv}}var oh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sv(t.type)}},ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wv(t.type)}},lh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},lc=/(\w+)(\])?(\[|\.)?/g;function ff(i,e){i.seq.push(e),i.map[e.id]=e}function Xv(i,e,t){let n=i.name,s=n.length;for(lc.lastIndex=0;;){let r=lc.exec(n),o=lc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ff(t,c===void 0?new oh(a,i,e):new ah(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new lh(a),ff(t,h)),t=h}}}var ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Xv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function pf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var qv=37297,Yv=0;function Kv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var mf=new Qe;function jv(i){st._getMatrix(mf,st.workingColorSpace,i);let e=`mat3( ${mf.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case dl:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Kv(i.getShaderSource(e),o)}else return s}function $v(i,e){let t=jv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zv(i,e){let t;switch(e){case Bh:t="Linear";break;case kh:t="Reinhard";break;case Hh:t="Cineon";break;case Sr:t="ACESFilmic";break;case zh:t="AgX";break;case Vh:t="Neutral";break;case h0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xa=new C;function Jv(){st.getLuminanceCoefficients(xa);let i=xa.x.toFixed(4),e=xa.y.toFixed(4),t=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function ey(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ty(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function so(i){return i!==""}function xf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _f(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(i){return i.replace(ny,sy)}var iy=new Map;function sy(i,e){let t=nt[e];if(t===void 0){let n=iy.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ch(t)}var ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(i){return i.replace(ry,oy)}function oy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ay(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$f?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function ly(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cr:case hr:e="ENVMAP_TYPE_CUBE";break;case hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function hy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zf:e="ENVMAP_BLENDING_MULTIPLY";break;case l0:e="ENVMAP_BLENDING_MIX";break;case c0:e="ENVMAP_BLENDING_ADD";break}return e}function uy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function dy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ay(t),c=ly(t),u=cy(t),h=hy(t),d=uy(t),f=Qv(t),g=ey(r),x=s.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),p.length>0&&(p+=`
`)):(m=[yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?nt.tonemapping_pars_fragment:"",t.toneMapping!==Xi?Zv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,$v("linearToOutputTexel",t.outputColorSpace),Jv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),o=ch(o),o=xf(o,t),o=_f(o,t),a=ch(a),a=xf(a,t),a=_f(a,t),o=vf(o),a=vf(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+m+o,_=v+p+a,P=pf(s,s.VERTEX_SHADER,y),b=pf(s,s.FRAGMENT_SHADER,_);s.attachShader(x,P),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(D){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(x).trim(),L=s.getShaderInfoLog(P).trim(),O=s.getShaderInfoLog(b).trim(),z=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,b);else{let re=gf(s,P,"vertex"),q=gf(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+re+`
`+q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(L===""||O==="")&&(F=!1);F&&(D.diagnostics={runnable:z,programLog:W,vertexShader:{log:L,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(P),s.deleteShader(b),I=new ar(s,x),S=ty(s,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,qv)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=b,this}var fy=0,hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new uh(e),t.set(e,n)),n}},uh=class{constructor(e){this.id=fy++,this.code=e,this.usedTimes=0}};function py(i,e,t,n,s,r,o){let a=new mo,l=new hh,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,E,D,W,L){let O=W.fog,z=L.geometry,F=S.isMeshStandardMaterial?W.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),q=re&&re.mapping===hl?re.image.height:null,de=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let me=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ae=me!==void 0?me.length:0,De=0;z.morphAttributes.position!==void 0&&(De=1),z.morphAttributes.normal!==void 0&&(De=2),z.morphAttributes.color!==void 0&&(De=3);let qe,ne,ge,Y;if(de){let vt=si[de];qe=vt.vertexShader,ne=vt.fragmentShader}else qe=S.vertexShader,ne=S.fragmentShader,l.update(S),ge=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);let se=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),we=L.isInstancedMesh===!0,be=L.isBatchedMesh===!0,Ye=!!S.map,B=!!S.matcap,H=!!re,T=!!S.aoMap,xe=!!S.lightMap,$=!!S.bumpMap,ue=!!S.normalMap,U=!!S.displacementMap,j=!!S.emissiveMap,X=!!S.metalnessMap,w=!!S.roughnessMap,M=S.anisotropy>0,N=S.clearcoat>0,Z=S.dispersion>0,te=S.iridescence>0,ee=S.sheen>0,ye=S.transmission>0,he=M&&!!S.anisotropyMap,Ee=N&&!!S.clearcoatMap,Xe=N&&!!S.clearcoatNormalMap,fe=N&&!!S.clearcoatRoughnessMap,Ae=te&&!!S.iridescenceMap,Ve=te&&!!S.iridescenceThicknessMap,We=ee&&!!S.sheenColorMap,Oe=ee&&!!S.sheenRoughnessMap,at=!!S.specularMap,tt=!!S.specularColorMap,bt=!!S.specularIntensityMap,k=ye&&!!S.transmissionMap,Te=ye&&!!S.thicknessMap,ie=!!S.gradientMap,le=!!S.alphaMap,Pe=S.alphaTest>0,Ce=!!S.alphaHash,Ze=!!S.extensions,Lt=Xi;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let nn={shaderID:de,shaderType:S.type,shaderName:S.name,vertexShader:qe,fragmentShader:ne,defines:S.defines,customVertexShaderID:ge,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:be,batchingColor:be&&L._colorsTexture!==null,instancing:we,instancingColor:we&&L.instanceColor!==null,instancingMorph:we&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ln,alphaToCoverage:!!S.alphaToCoverage,map:Ye,matcap:B,envMap:H,envMapMode:H&&re.mapping,envMapCubeUVHeight:q,aoMap:T,lightMap:xe,bumpMap:$,normalMap:ue,displacementMap:d&&U,emissiveMap:j,normalMapObjectSpace:ue&&S.normalMapType===_0,normalMapTangentSpace:ue&&S.normalMapType===cp,metalnessMap:X,roughnessMap:w,anisotropy:M,anisotropyMap:he,clearcoat:N,clearcoatMap:Ee,clearcoatNormalMap:Xe,clearcoatRoughnessMap:fe,dispersion:Z,iridescence:te,iridescenceMap:Ae,iridescenceThicknessMap:Ve,sheen:ee,sheenColorMap:We,sheenRoughnessMap:Oe,specularMap:at,specularColorMap:tt,specularIntensityMap:bt,transmission:ye,transmissionMap:k,thicknessMap:Te,gradientMap:ie,opaque:S.transparent===!1&&S.blending===sr&&S.alphaToCoverage===!1,alphaMap:le,alphaTest:Pe,alphaHash:Ce,combine:S.combine,mapUv:Ye&&x(S.map.channel),aoMapUv:T&&x(S.aoMap.channel),lightMapUv:xe&&x(S.lightMap.channel),bumpMapUv:$&&x(S.bumpMap.channel),normalMapUv:ue&&x(S.normalMap.channel),displacementMapUv:U&&x(S.displacementMap.channel),emissiveMapUv:j&&x(S.emissiveMap.channel),metalnessMapUv:X&&x(S.metalnessMap.channel),roughnessMapUv:w&&x(S.roughnessMap.channel),anisotropyMapUv:he&&x(S.anisotropyMap.channel),clearcoatMapUv:Ee&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(S.sheenRoughnessMap.channel),specularMapUv:at&&x(S.specularMap.channel),specularColorMapUv:tt&&x(S.specularColorMap.channel),specularIntensityMapUv:bt&&x(S.specularIntensityMap.channel),transmissionMapUv:k&&x(S.transmissionMap.channel),thicknessMapUv:Te&&x(S.thicknessMap.channel),alphaMapUv:le&&x(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ue||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Ye||le),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:_e,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:De,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Ye&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:j&&S.emissiveMap.isVideoTexture===!0&&st.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===It,flipSided:S.side===Kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ze&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&S.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return nn.vertexUv1s=c.has(1),nn.vertexUv2s=c.has(2),nn.vertexUv3s=c.has(3),c.clear(),nn}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)E.push(D),E.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(v(E,S),y(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function y(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let E=g[S.type],D;if(E){let W=si[E];D=ai.clone(W.uniforms)}else D=S.uniforms;return D}function P(S,E){let D;for(let W=0,L=u.length;W<L;W++){let O=u[W];if(O.cacheKey===E){D=O,++D.usedTimes;break}}return D===void 0&&(D=new dy(i,E,S,r),u.push(D)),D}function b(S){if(--S.usedTimes===0){let E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:b,releaseShaderCache:R,programs:u,dispose:I}}function my(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function gy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ef(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||gy),n.length>1&&n.sort(d||Mf),s.length>1&&s.sort(d||Mf)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function xy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ef,i.set(n,[o])):s>=r.length?(o=new Ef,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function _y(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Re};break;case"SpotLight":t={position:new C,direction:new C,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function vy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var yy=0;function My(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ey(i){let e=new _y,t=vy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Ke,o=new Ke;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,y=0,_=0,P=0,b=0,R=0;c.sort(My);for(let S=0,E=c.length;S<E;S++){let D=c[S],W=D.color,L=D.intensity,O=D.distance,z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=W.r*L,h+=W.g*L,d+=W.b*L;else if(D.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(D.sh.coefficients[F],L);R++}else if(D.isDirectionalLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let re=D.shadow,q=t.get(D);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=D.shadow.matrix,v++}n.directional[f]=F,f++}else if(D.isSpotLight){let F=e.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(W).multiplyScalar(L),F.distance=O,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,n.spot[x]=F;let re=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,re.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[x]=re.matrix,D.castShadow){let q=t.get(D);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=z,_++}x++}else if(D.isRectAreaLight){let F=e.get(D);F.color.copy(W).multiplyScalar(L),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=F,m++}else if(D.isPointLight){let F=e.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),F.distance=D.distance,F.decay=D.decay,D.castShadow){let re=D.shadow,q=t.get(D);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,q.shadowCameraNear=re.camera.near,q.shadowCameraFar=re.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=F,g++}else if(D.isHemisphereLight){let F=e.get(D);F.skyColor.copy(D.color).multiplyScalar(L),F.groundColor.copy(D.groundColor).multiplyScalar(L),n.hemi[p]=F,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==_||I.numSpotMaps!==P||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=_,I.numSpotMaps=P,I.numLightProbes=R,n.version=yy++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let y=c[p];if(y.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function bf(i){let e=new Ey(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function by(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new bf(i),e.set(s,[a])):r>=o.length?(a=new bf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var dh=class extends wn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=g0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fh=class extends wn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ty=`uniform sampler2D shadow_pass;
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
}`;function wy(i,e,t){let n=new go,s=new ce,r=new ce,o=new lt,a=new dh({depthPacking:x0}),l=new fh,c={},u=t.maxTextureSize,h={[Nn]:Kt,[Kt]:Nn,[It]:It},d=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Sy,fragmentShader:Ty}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ct;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new K(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let p=this.type;this.render=function(b,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),W=i.state;W.setBlending(oi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let L=p!==Ei&&this.type===Ei,O=p===Ei&&this.type!==Ei;for(let z=0,F=b.length;z<F;z++){let re=b[z],q=re.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let de=q.getFrameExtents();if(s.multiply(de),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/de.x),s.x=r.x*de.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/de.y),s.y=r.y*de.y,q.mapSize.y=r.y)),q.map===null||L===!0||O===!0){let ae=this.type!==Ei?{minFilter:jt,magFilter:jt}:{};q.map!==null&&q.map.dispose(),q.map=new Ht(s.x,s.y,ae),q.map.texture.name=re.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let me=q.getViewportCount();for(let ae=0;ae<me;ae++){let De=q.getViewport(ae);o.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),W.viewport(o),q.updateMatrices(re,ae),n=q.getFrustum(),_(R,I,q.camera,re,this.type)}q.isPointLightShadow!==!0&&this.type===Ei&&v(q,I),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,E,D)};function v(b,R){let I=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ht(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,I,f,x,null)}function y(b,R,I,S){let E=null,D=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)E=D;else if(E=I.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=E.uuid,L=R.uuid,O=c[W];O===void 0&&(O={},c[W]=O);let z=O[L];z===void 0&&(z=E.clone(),O[L]=z,R.addEventListener("dispose",P)),E=z}if(E.visible=R.visible,E.wireframe=R.wireframe,S===Ei?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:h[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let W=i.properties.get(E);W.light=I}return E}function _(b,R,I,S,E){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Ei)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);let L=e.update(b),O=b.material;if(Array.isArray(O)){let z=L.groups;for(let F=0,re=z.length;F<re;F++){let q=z[F],de=O[q.materialIndex];if(de&&de.visible){let me=y(b,de,S,E);b.onBeforeShadow(i,b,R,I,L,me,q),i.renderBufferDirect(I,null,L,me,b,q),b.onAfterShadow(i,b,R,I,L,me,q)}}}else if(O.visible){let z=y(b,O,S,E);b.onBeforeShadow(i,b,R,I,L,z,null),i.renderBufferDirect(I,null,L,z,b,null),b.onAfterShadow(i,b,R,I,L,z,null)}}let W=b.children;for(let L=0,O=W.length;L<O;L++)_(W[L],R,I,S,E)}function P(b){b.target.removeEventListener("dispose",P);for(let I in c){let S=c[I],E=b.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var Ay={[vc]:yc,[Mc]:Sc,[Ec]:Tc,[lr]:bc,[yc]:vc,[Sc]:Mc,[Tc]:Ec,[bc]:lr};function Ry(i,e){function t(){let k=!1,Te=new lt,ie=null,le=new lt(0,0,0,0);return{setMask:function(Pe){ie!==Pe&&!k&&(i.colorMask(Pe,Pe,Pe,Pe),ie=Pe)},setLocked:function(Pe){k=Pe},setClear:function(Pe,Ce,Ze,Lt,nn){nn===!0&&(Pe*=Lt,Ce*=Lt,Ze*=Lt),Te.set(Pe,Ce,Ze,Lt),le.equals(Te)===!1&&(i.clearColor(Pe,Ce,Ze,Lt),le.copy(Te))},reset:function(){k=!1,ie=null,le.set(-1,0,0,0)}}}function n(){let k=!1,Te=!1,ie=null,le=null,Pe=null;return{setReversed:function(Ce){if(Te!==Ce){let Ze=e.get("EXT_clip_control");Te?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);let Lt=Pe;Pe=null,this.setClear(Lt)}Te=Ce},getReversed:function(){return Te},setTest:function(Ce){Ce?se(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(Ce){ie!==Ce&&!k&&(i.depthMask(Ce),ie=Ce)},setFunc:function(Ce){if(Te&&(Ce=Ay[Ce]),le!==Ce){switch(Ce){case vc:i.depthFunc(i.NEVER);break;case yc:i.depthFunc(i.ALWAYS);break;case Mc:i.depthFunc(i.LESS);break;case lr:i.depthFunc(i.LEQUAL);break;case Ec:i.depthFunc(i.EQUAL);break;case bc:i.depthFunc(i.GEQUAL);break;case Sc:i.depthFunc(i.GREATER);break;case Tc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Ce}},setLocked:function(Ce){k=Ce},setClear:function(Ce){Pe!==Ce&&(Te&&(Ce=1-Ce),i.clearDepth(Ce),Pe=Ce)},reset:function(){k=!1,ie=null,le=null,Pe=null,Te=!1}}}function s(){let k=!1,Te=null,ie=null,le=null,Pe=null,Ce=null,Ze=null,Lt=null,nn=null;return{setTest:function(vt){k||(vt?se(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(vt){Te!==vt&&!k&&(i.stencilMask(vt),Te=vt)},setFunc:function(vt,Hn,pi){(ie!==vt||le!==Hn||Pe!==pi)&&(i.stencilFunc(vt,Hn,pi),ie=vt,le=Hn,Pe=pi)},setOp:function(vt,Hn,pi){(Ce!==vt||Ze!==Hn||Lt!==pi)&&(i.stencilOp(vt,Hn,pi),Ce=vt,Ze=Hn,Lt=pi)},setLocked:function(vt){k=vt},setClear:function(vt){nn!==vt&&(i.clearStencil(vt),nn=vt)},reset:function(){k=!1,Te=null,ie=null,le=null,Pe=null,Ce=null,Ze=null,Lt=null,nn=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,P=null,b=null,R=new Re(0,0,0),I=0,S=!1,E=null,D=null,W=null,L=null,O=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,re=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=re>=2);let de=null,me={},ae=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),qe=new lt().fromArray(ae),ne=new lt().fromArray(De);function ge(k,Te,ie,le){let Pe=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(k,Ce),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<ie;Ze++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Te+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Ce}let Y={};Y[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(lr),$(!1),ue(Ad),se(i.CULL_FACE),T(oi);function se(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function _e(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function we(k,Te){return h[k]!==Te?(i.bindFramebuffer(k,Te),h[k]=Te,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Te),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function be(k,Te){let ie=f,le=!1;if(k){ie=d.get(Te),ie===void 0&&(ie=[],d.set(Te,ie));let Pe=k.textures;if(ie.length!==Pe.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,Ze=Pe.length;Ce<Ze;Ce++)ie[Ce]=i.COLOR_ATTACHMENT0+Ce;ie.length=Pe.length,le=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,le=!0);le&&i.drawBuffers(ie)}function Ye(k){return g!==k?(i.useProgram(k),g=k,!0):!1}let B={[xs]:i.FUNC_ADD,[Xm]:i.FUNC_SUBTRACT,[qm]:i.FUNC_REVERSE_SUBTRACT};B[Ym]=i.MIN,B[Km]=i.MAX;let H={[jm]:i.ZERO,[$m]:i.ONE,[Zm]:i.SRC_COLOR,[xc]:i.SRC_ALPHA,[i0]:i.SRC_ALPHA_SATURATE,[t0]:i.DST_COLOR,[Qm]:i.DST_ALPHA,[Jm]:i.ONE_MINUS_SRC_COLOR,[_c]:i.ONE_MINUS_SRC_ALPHA,[n0]:i.ONE_MINUS_DST_COLOR,[e0]:i.ONE_MINUS_DST_ALPHA,[s0]:i.CONSTANT_COLOR,[r0]:i.ONE_MINUS_CONSTANT_COLOR,[o0]:i.CONSTANT_ALPHA,[a0]:i.ONE_MINUS_CONSTANT_ALPHA};function T(k,Te,ie,le,Pe,Ce,Ze,Lt,nn,vt){if(k===oi){x===!0&&(_e(i.BLEND),x=!1);return}if(x===!1&&(se(i.BLEND),x=!0),k!==Wm){if(k!==m||vt!==S){if((p!==xs||_!==xs)&&(i.blendEquation(i.FUNC_ADD),p=xs,_=xs),vt)switch(k){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFunc(i.ONE,i.ONE);break;case Rd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,y=null,P=null,b=null,R.set(0,0,0),I=0,m=k,S=vt}return}Pe=Pe||Te,Ce=Ce||ie,Ze=Ze||le,(Te!==p||Pe!==_)&&(i.blendEquationSeparate(B[Te],B[Pe]),p=Te,_=Pe),(ie!==v||le!==y||Ce!==P||Ze!==b)&&(i.blendFuncSeparate(H[ie],H[le],H[Ce],H[Ze]),v=ie,y=le,P=Ce,b=Ze),(Lt.equals(R)===!1||nn!==I)&&(i.blendColor(Lt.r,Lt.g,Lt.b,nn),R.copy(Lt),I=nn),m=k,S=!1}function xe(k,Te){k.side===It?_e(i.CULL_FACE):se(i.CULL_FACE);let ie=k.side===Kt;Te&&(ie=!ie),$(ie),k.blending===sr&&k.transparent===!1?T(oi):T(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let le=k.stencilWrite;a.setTest(le),le&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),j(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(k){E!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),E=k)}function ue(k){k!==zm?(se(i.CULL_FACE),k!==D&&(k===Ad?i.cullFace(i.BACK):k===Vm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),D=k}function U(k){k!==W&&(F&&i.lineWidth(k),W=k)}function j(k,Te,ie){k?(se(i.POLYGON_OFFSET_FILL),(L!==Te||O!==ie)&&(i.polygonOffset(Te,ie),L=Te,O=ie)):_e(i.POLYGON_OFFSET_FILL)}function X(k){k?se(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function w(k){k===void 0&&(k=i.TEXTURE0+z-1),de!==k&&(i.activeTexture(k),de=k)}function M(k,Te,ie){ie===void 0&&(de===null?ie=i.TEXTURE0+z-1:ie=de);let le=me[ie];le===void 0&&(le={type:void 0,texture:void 0},me[ie]=le),(le.type!==k||le.texture!==Te)&&(de!==ie&&(i.activeTexture(ie),de=ie),i.bindTexture(k,Te||Y[k]),le.type=k,le.texture=Te)}function N(){let k=me[de];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(k){qe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),qe.copy(k))}function Oe(k){ne.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ne.copy(k))}function at(k,Te){let ie=c.get(Te);ie===void 0&&(ie=new WeakMap,c.set(Te,ie));let le=ie.get(k);le===void 0&&(le=i.getUniformBlockIndex(Te,k.name),ie.set(k,le))}function tt(k,Te){let le=c.get(Te).get(k);l.get(Te)!==le&&(i.uniformBlockBinding(Te,le,k.__bindingPointIndex),l.set(Te,le))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},de=null,me={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,P=null,b=null,R=new Re(0,0,0),I=0,S=!1,E=null,D=null,W=null,L=null,O=null,qe.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:_e,bindFramebuffer:we,drawBuffers:be,useProgram:Ye,setBlending:T,setMaterial:xe,setFlipSided:$,setCullFace:ue,setLineWidth:U,setPolygonOffset:j,setScissorTest:X,activeTexture:w,bindTexture:M,unbindTexture:N,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:Ae,texImage3D:Ve,updateUBOMapping:at,uniformBlockBinding:tt,texStorage2D:Xe,texStorage3D:fe,texSubImage2D:ee,texSubImage3D:ye,compressedTexSubImage2D:he,compressedTexSubImage3D:Ee,scissor:We,viewport:Oe,reset:bt}}function Sf(i,e,t,n){let s=Cy(n);switch(t){case np:return i*e;case sp:return i*e;case rp:return i*e*2;case Yh:return i*e/s.components*s.byteLength;case Kh:return i*e/s.components*s.byteLength;case op:return i*e*2/s.components*s.byteLength;case jh:return i*e*2/s.components*s.byteLength;case ip:return i*e*3/s.components*s.byteLength;case Dn:return i*e*4/s.components*s.byteLength;case $h:return i*e*4/s.components*s.byteLength;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cc:case Pc:return Math.max(i,16)*Math.max(e,8)/4;case Rc:case Ic:return Math.max(i,8)*Math.max(e,8)/2;case Lc:case Dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Kc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case La:case jc:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ap:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Jc:case Qc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cy(i){switch(i){case wi:case Qf:return{byteLength:1,components:1};case fo:case ep:case fn:return{byteLength:2,components:1};case Xh:case qh:return{byteLength:2,components:4};case ys:case Wh:case Yn:return{byteLength:4,components:1};case tp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Iy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return f?new OffscreenCanvas(w,M):po("canvas")}function x(w,M,N){let Z=1,te=X(w);if((te.width>N||te.height>N)&&(Z=N/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ee=Math.floor(Z*te.width),ye=Math.floor(Z*te.height);h===void 0&&(h=g(ee,ye));let he=M?g(ee,ye):h;return he.width=ee,he.height=ye,he.getContext("2d").drawImage(w,0,0,ee,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ee+"x"+ye+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,M,N,Z,te=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ee=M;if(M===i.RED&&(N===i.FLOAT&&(ee=i.R32F),N===i.HALF_FLOAT&&(ee=i.R16F),N===i.UNSIGNED_BYTE&&(ee=i.R8)),M===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(ee=i.R8UI),N===i.UNSIGNED_SHORT&&(ee=i.R16UI),N===i.UNSIGNED_INT&&(ee=i.R32UI),N===i.BYTE&&(ee=i.R8I),N===i.SHORT&&(ee=i.R16I),N===i.INT&&(ee=i.R32I)),M===i.RG&&(N===i.FLOAT&&(ee=i.RG32F),N===i.HALF_FLOAT&&(ee=i.RG16F),N===i.UNSIGNED_BYTE&&(ee=i.RG8)),M===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(ee=i.RG8UI),N===i.UNSIGNED_SHORT&&(ee=i.RG16UI),N===i.UNSIGNED_INT&&(ee=i.RG32UI),N===i.BYTE&&(ee=i.RG8I),N===i.SHORT&&(ee=i.RG16I),N===i.INT&&(ee=i.RG32I)),M===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),N===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),N===i.UNSIGNED_INT&&(ee=i.RGB32UI),N===i.BYTE&&(ee=i.RGB8I),N===i.SHORT&&(ee=i.RGB16I),N===i.INT&&(ee=i.RGB32I)),M===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),N===i.UNSIGNED_INT&&(ee=i.RGBA32UI),N===i.BYTE&&(ee=i.RGBA8I),N===i.SHORT&&(ee=i.RGBA16I),N===i.INT&&(ee=i.RGBA32I)),M===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),M===i.RGBA){let ye=te?dl:st.getTransfer(Z);N===i.FLOAT&&(ee=i.RGBA32F),N===i.HALF_FLOAT&&(ee=i.RGBA16F),N===i.UNSIGNED_BYTE&&(ee=ye===_t?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(w,M){let N;return w?M===null||M===ys||M===ur?N=i.DEPTH24_STENCIL8:M===Yn?N=i.DEPTH32F_STENCIL8:M===fo&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ys||M===ur?N=i.DEPTH_COMPONENT24:M===Yn?N=i.DEPTH_COMPONENT32F:M===fo&&(N=i.DEPTH_COMPONENT16),N}function P(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==jt&&w.minFilter!==on?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function b(w){let M=w.target;M.removeEventListener("dispose",b),I(M),M.isVideoTexture&&u.delete(M)}function R(w){let M=w.target;M.removeEventListener("dispose",R),E(M)}function I(w){let M=n.get(w);if(M.__webglInit===void 0)return;let N=w.source,Z=d.get(N);if(Z){let te=Z[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(w),Object.keys(Z).length===0&&d.delete(N)}n.remove(w)}function S(w){let M=n.get(w);i.deleteTexture(M.__webglTexture);let N=w.source,Z=d.get(N);delete Z[M.__cacheKey],o.memory.textures--}function E(w){let M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let te=0;te<M.__webglFramebuffer[Z].length;te++)i.deleteFramebuffer(M.__webglFramebuffer[Z][te]);else i.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[Z]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let N=w.textures;for(let Z=0,te=N.length;Z<te;Z++){let ee=n.get(N[Z]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(N[Z])}n.remove(w)}let D=0;function W(){D=0}function L(){let w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function O(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function z(w,M){let N=n.get(w);if(w.isVideoTexture&&U(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){let Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(N,w,M);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+M)}function F(w,M){let N=n.get(w);if(w.version>0&&N.__version!==w.version){ne(N,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+M)}function re(w,M){let N=n.get(w);if(w.version>0&&N.__version!==w.version){ne(N,w,M);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+M)}function q(w,M){let N=n.get(w);if(w.version>0&&N.__version!==w.version){ge(N,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+M)}let de={[jn]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[uo]:i.MIRRORED_REPEAT},me={[jt]:i.NEAREST,[Gh]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},ae={[v0]:i.NEVER,[T0]:i.ALWAYS,[y0]:i.LESS,[hp]:i.LEQUAL,[M0]:i.EQUAL,[S0]:i.GEQUAL,[E0]:i.GREATER,[b0]:i.NOTEQUAL};function De(w,M){if(M.type===Yn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===on||M.magFilter===ro||M.magFilter===Qs||M.magFilter===ri||M.minFilter===on||M.minFilter===ro||M.minFilter===Qs||M.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,de[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,de[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,de[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,me[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jt||M.minFilter!==Qs&&M.minFilter!==ri||M.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function qe(w,M){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",b));let Z=M.source,te=d.get(Z);te===void 0&&(te={},d.set(Z,te));let ee=O(M);if(ee!==w.__cacheKey){te[ee]===void 0&&(te[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),te[ee].usedTimes++;let ye=te[w.__cacheKey];ye!==void 0&&(te[w.__cacheKey].usedTimes--,ye.usedTimes===0&&S(M)),w.__cacheKey=ee,w.__webglTexture=te[ee].texture}return N}function ne(w,M,N){let Z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=i.TEXTURE_3D);let te=qe(w,M),ee=M.source;t.bindTexture(Z,w.__webglTexture,i.TEXTURE0+N);let ye=n.get(ee);if(ee.version!==ye.__version||te===!0){t.activeTexture(i.TEXTURE0+N);let he=st.getPrimaries(st.workingColorSpace),Ee=M.colorSpace===Gi?null:st.getPrimaries(M.colorSpace),Xe=M.colorSpace===Gi||he===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let fe=x(M.image,!1,s.maxTextureSize);fe=j(M,fe);let Ae=r.convert(M.format,M.colorSpace),Ve=r.convert(M.type),We=y(M.internalFormat,Ae,Ve,M.colorSpace,M.isVideoTexture);De(Z,M);let Oe,at=M.mipmaps,tt=M.isVideoTexture!==!0,bt=ye.__version===void 0||te===!0,k=ee.dataReady,Te=P(M,fe);if(M.isDepthTexture)We=_(M.format===dr,M.type),bt&&(tt?t.texStorage2D(i.TEXTURE_2D,1,We,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,We,fe.width,fe.height,0,Ae,Ve,null));else if(M.isDataTexture)if(at.length>0){tt&&bt&&t.texStorage2D(i.TEXTURE_2D,Te,We,at[0].width,at[0].height);for(let ie=0,le=at.length;ie<le;ie++)Oe=at[ie],tt?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Ae,Ve,Oe.data):t.texImage2D(i.TEXTURE_2D,ie,We,Oe.width,Oe.height,0,Ae,Ve,Oe.data);M.generateMipmaps=!1}else tt?(bt&&t.texStorage2D(i.TEXTURE_2D,Te,We,fe.width,fe.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,Ae,Ve,fe.data)):t.texImage2D(i.TEXTURE_2D,0,We,fe.width,fe.height,0,Ae,Ve,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){tt&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,We,at[0].width,at[0].height,fe.depth);for(let ie=0,le=at.length;ie<le;ie++)if(Oe=at[ie],M.format!==Dn)if(Ae!==null)if(tt){if(k)if(M.layerUpdates.size>0){let Pe=Sf(Oe.width,Oe.height,M.format,M.type);for(let Ce of M.layerUpdates){let Ze=Oe.data.subarray(Ce*Pe/Oe.data.BYTES_PER_ELEMENT,(Ce+1)*Pe/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Ce,Oe.width,Oe.height,1,Ae,Ze)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Oe.width,Oe.height,fe.depth,Ae,Oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,We,Oe.width,Oe.height,fe.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Oe.width,Oe.height,fe.depth,Ae,Ve,Oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,We,Oe.width,Oe.height,fe.depth,0,Ae,Ve,Oe.data)}else{tt&&bt&&t.texStorage2D(i.TEXTURE_2D,Te,We,at[0].width,at[0].height);for(let ie=0,le=at.length;ie<le;ie++)Oe=at[ie],M.format!==Dn?Ae!==null?tt?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Ae,Oe.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,We,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Oe.width,Oe.height,Ae,Ve,Oe.data):t.texImage2D(i.TEXTURE_2D,ie,We,Oe.width,Oe.height,0,Ae,Ve,Oe.data)}else if(M.isDataArrayTexture)if(tt){if(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,We,fe.width,fe.height,fe.depth),k)if(M.layerUpdates.size>0){let ie=Sf(fe.width,fe.height,M.format,M.type);for(let le of M.layerUpdates){let Pe=fe.data.subarray(le*ie/fe.data.BYTES_PER_ELEMENT,(le+1)*ie/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,Ae,Ve,Pe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ae,Ve,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,fe.width,fe.height,fe.depth,0,Ae,Ve,fe.data);else if(M.isData3DTexture)tt?(bt&&t.texStorage3D(i.TEXTURE_3D,Te,We,fe.width,fe.height,fe.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ae,Ve,fe.data)):t.texImage3D(i.TEXTURE_3D,0,We,fe.width,fe.height,fe.depth,0,Ae,Ve,fe.data);else if(M.isFramebufferTexture){if(bt)if(tt)t.texStorage2D(i.TEXTURE_2D,Te,We,fe.width,fe.height);else{let ie=fe.width,le=fe.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,We,ie,le,0,Ae,Ve,null),ie>>=1,le>>=1}}else if(at.length>0){if(tt&&bt){let ie=X(at[0]);t.texStorage2D(i.TEXTURE_2D,Te,We,ie.width,ie.height)}for(let ie=0,le=at.length;ie<le;ie++)Oe=at[ie],tt?k&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ae,Ve,Oe):t.texImage2D(i.TEXTURE_2D,ie,We,Ae,Ve,Oe);M.generateMipmaps=!1}else if(tt){if(bt){let ie=X(fe);t.texStorage2D(i.TEXTURE_2D,Te,We,ie.width,ie.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Ve,fe)}else t.texImage2D(i.TEXTURE_2D,0,We,Ae,Ve,fe);m(M)&&p(Z),ye.__version=ee.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ge(w,M,N){if(M.image.length!==6)return;let Z=qe(w,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+N);let ee=n.get(te);if(te.version!==ee.__version||Z===!0){t.activeTexture(i.TEXTURE0+N);let ye=st.getPrimaries(st.workingColorSpace),he=M.colorSpace===Gi?null:st.getPrimaries(M.colorSpace),Ee=M.colorSpace===Gi||ye===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Xe=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let le=0;le<6;le++)!Xe&&!fe?Ae[le]=x(M.image[le],!0,s.maxCubemapSize):Ae[le]=fe?M.image[le].image:M.image[le],Ae[le]=j(M,Ae[le]);let Ve=Ae[0],We=r.convert(M.format,M.colorSpace),Oe=r.convert(M.type),at=y(M.internalFormat,We,Oe,M.colorSpace),tt=M.isVideoTexture!==!0,bt=ee.__version===void 0||Z===!0,k=te.dataReady,Te=P(M,Ve);De(i.TEXTURE_CUBE_MAP,M);let ie;if(Xe){tt&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,at,Ve.width,Ve.height);for(let le=0;le<6;le++){ie=Ae[le].mipmaps;for(let Pe=0;Pe<ie.length;Pe++){let Ce=ie[Pe];M.format!==Dn?We!==null?tt?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,0,0,Ce.width,Ce.height,We,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,at,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,0,0,Ce.width,Ce.height,We,Oe,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,at,Ce.width,Ce.height,0,We,Oe,Ce.data)}}}else{if(ie=M.mipmaps,tt&&bt){ie.length>0&&Te++;let le=X(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,at,le.width,le.height)}for(let le=0;le<6;le++)if(fe){tt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ae[le].width,Ae[le].height,We,Oe,Ae[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,at,Ae[le].width,Ae[le].height,0,We,Oe,Ae[le].data);for(let Pe=0;Pe<ie.length;Pe++){let Ze=ie[Pe].image[le].image;tt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,0,0,Ze.width,Ze.height,We,Oe,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,at,Ze.width,Ze.height,0,We,Oe,Ze.data)}}else{tt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,We,Oe,Ae[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,at,We,Oe,Ae[le]);for(let Pe=0;Pe<ie.length;Pe++){let Ce=ie[Pe];tt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,0,0,We,Oe,Ce.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,at,We,Oe,Ce.image[le])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),ee.__version=te.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Y(w,M,N,Z,te,ee){let ye=r.convert(N.format,N.colorSpace),he=r.convert(N.type),Ee=y(N.internalFormat,ye,he,N.colorSpace),Xe=n.get(M),fe=n.get(N);if(fe.__renderTarget=M,!Xe.__hasExternalTextures){let Ae=Math.max(1,M.width>>ee),Ve=Math.max(1,M.height>>ee);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,ee,Ee,Ae,Ve,M.depth,0,ye,he,null):t.texImage2D(te,ee,Ee,Ae,Ve,0,ye,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ue(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,te,fe.__webglTexture,0,$(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,te,fe.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(w,M,N){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){let Z=M.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,ee=_(M.stencilBuffer,te),ye=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=$(M);ue(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,ee,M.width,M.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ee,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ee,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,w)}else{let Z=M.textures;for(let te=0;te<Z.length;te++){let ee=Z[te],ye=r.convert(ee.format,ee.colorSpace),he=r.convert(ee.type),Ee=y(ee.internalFormat,ye,he,ee.colorSpace),Xe=$(M);N&&ue(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Ee,M.width,M.height):ue(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,Ee,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);let te=Z.__webglTexture,ee=$(M);if(M.depthTexture.format===rr)ue(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(M.depthTexture.format===dr)ue(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function we(w){let M=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let Z=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Z}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");_e(M.__webglFramebuffer,w)}else if(N){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=i.createRenderbuffer(),se(M.__webglDepthbuffer[Z],w,!1);else{let te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),se(M.__webglDepthbuffer,w,!1);else{let Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(w,M,N){let Z=n.get(w);M!==void 0&&Y(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&we(w)}function Ye(w){let M=w.texture,N=n.get(w),Z=n.get(M);w.addEventListener("dispose",R);let te=w.textures,ee=w.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,o.memory.textures++),ee){N.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[he]=[];for(let Ee=0;Ee<M.mipmaps.length;Ee++)N.__webglFramebuffer[he][Ee]=i.createFramebuffer()}else N.__webglFramebuffer[he]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)N.__webglFramebuffer[he]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(ye)for(let he=0,Ee=te.length;he<Ee;he++){let Xe=n.get(te[he]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ue(w)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){let Ee=te[he];N.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[he]);let Xe=r.convert(Ee.format,Ee.colorSpace),fe=r.convert(Ee.type),Ae=y(Ee.internalFormat,Xe,fe,Ee.colorSpace,w.isXRRenderTarget===!0),Ve=$(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,N.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),se(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),De(i.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)Y(N.__webglFramebuffer[he][Ee],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee);else Y(N.__webglFramebuffer[he],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let he=0,Ee=te.length;he<Ee;he++){let Xe=te[he],fe=n.get(Xe);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),De(i.TEXTURE_2D,Xe),Y(N.__webglFramebuffer,w,Xe,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,0),m(Xe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Z.__webglTexture),De(he,M),M.mipmaps&&M.mipmaps.length>0)for(let Ee=0;Ee<M.mipmaps.length;Ee++)Y(N.__webglFramebuffer[Ee],w,M,i.COLOR_ATTACHMENT0,he,Ee);else Y(N.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,he,0);m(M)&&p(he),t.unbindTexture()}w.depthBuffer&&we(w)}function B(w){let M=w.textures;for(let N=0,Z=M.length;N<Z;N++){let te=M[N];if(m(te)){let ee=v(w),ye=n.get(te).__webglTexture;t.bindTexture(ee,ye),p(ee),t.unbindTexture()}}}let H=[],T=[];function xe(w){if(w.samples>0){if(ue(w)===!1){let M=w.textures,N=w.width,Z=w.height,te=i.COLOR_BUFFER_BIT,ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(w),he=M.length>1;if(he)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Ee]);let Xe=n.get(M[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,N,Z,0,0,N,Z,te,i.NEAREST),l===!0&&(H.length=0,T.length=0,H.push(i.COLOR_ATTACHMENT0+Ee),w.depthBuffer&&w.resolveDepthBuffer===!1&&(H.push(ee),T.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,H))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Ee]);let Xe=n.get(M[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function $(w){return Math.min(s.maxSamples,w.samples)}function ue(w){let M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function U(w){let M=o.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function j(w,M){let N=w.colorSpace,Z=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==ln&&N!==Gi&&(st.getTransfer(N)===_t?(Z!==Dn||te!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}function X(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=W,this.setTexture2D=z,this.setTexture2DArray=F,this.setTexture3D=re,this.setTextureCube=q,this.rebindTextures=be,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=ue}function Py(i,e){function t(n,s=Gi){let r,o=st.getTransfer(s);if(n===wi)return i.UNSIGNED_BYTE;if(n===Xh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qf)return i.BYTE;if(n===ep)return i.SHORT;if(n===fo)return i.UNSIGNED_SHORT;if(n===Wh)return i.INT;if(n===ys)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===np)return i.ALPHA;if(n===ip)return i.RGB;if(n===Dn)return i.RGBA;if(n===sp)return i.LUMINANCE;if(n===rp)return i.LUMINANCE_ALPHA;if(n===rr)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===Yh)return i.RED;if(n===Kh)return i.RED_INTEGER;if(n===op)return i.RG;if(n===jh)return i.RG_INTEGER;if(n===$h)return i.RGBA_INTEGER;if(n===Ra||n===Ca||n===Ia||n===Pa)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rc||n===Cc||n===Ic||n===Pc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lc||n===Dc||n===Uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lc||n===Dc)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nc||n===Fc||n===Oc||n===Bc||n===kc||n===Hc||n===zc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Kc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===jc||n===$c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===La)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ap||n===Zc||n===Jc||n===Qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===La)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ph=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},$e=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ly={type:"move"},lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ly)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uy=`
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

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new $t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tt({vertexShader:Dy,fragmentShader:Uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new ut(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends Ai{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,x=new mh,m=t.getContextAttributes(),p=null,v=null,y=[],_=[],P=new ce,b=null,R=new Dt;R.viewport=new lt;let I=new Dt;I.viewport=new lt;let S=[R,I],E=new ph,D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ge=y[ne];return ge===void 0&&(ge=new lo,y[ne]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ne){let ge=y[ne];return ge===void 0&&(ge=new lo,y[ne]=ge),ge.getGripSpace()},this.getHand=function(ne){let ge=y[ne];return ge===void 0&&(ge=new lo,y[ne]=ge),ge.getHandSpace()};function L(ne){let ge=_.indexOf(ne.inputSource);if(ge===-1)return;let Y=y[ge];Y!==void 0&&(Y.update(ne.inputSource,ne.frame,c||o),Y.dispatchEvent({type:ne.type,data:ne.inputSource}))}function O(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",z);for(let ne=0;ne<y.length;ne++){let ge=_[ne];ge!==null&&(_[ne]=null,y[ne].disconnect(ge))}D=null,W=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,v=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",O),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){let ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ht(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ge=null,Y=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?dr:rr,Y=m.stencil?ur:ys);let _e={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(_e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Ht(d.textureWidth,d.textureHeight,{format:Dn,type:wi,depthTexture:new Va(d.textureWidth,d.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z(ne){for(let ge=0;ge<ne.removed.length;ge++){let Y=ne.removed[ge],se=_.indexOf(Y);se>=0&&(_[se]=null,y[se].disconnect(Y))}for(let ge=0;ge<ne.added.length;ge++){let Y=ne.added[ge],se=_.indexOf(Y);if(se===-1){for(let we=0;we<y.length;we++)if(we>=_.length){_.push(Y),se=we;break}else if(_[we]===null){_[we]=Y,se=we;break}if(se===-1)break}let _e=y[se];_e&&_e.connect(Y)}}let F=new C,re=new C;function q(ne,ge,Y){F.setFromMatrixPosition(ge.matrixWorld),re.setFromMatrixPosition(Y.matrixWorld);let se=F.distanceTo(re),_e=ge.projectionMatrix.elements,we=Y.projectionMatrix.elements,be=_e[14]/(_e[10]-1),Ye=_e[14]/(_e[10]+1),B=(_e[9]+1)/_e[5],H=(_e[9]-1)/_e[5],T=(_e[8]-1)/_e[0],xe=(we[8]+1)/we[0],$=be*T,ue=be*xe,U=se/(-T+xe),j=U*-T;if(ge.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(j),ne.translateZ(U),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),_e[10]===-1)ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{let X=be+U,w=Ye+U,M=$-j,N=ue+(se-j),Z=B*Ye/w*X,te=H*Ye/w*X;ne.projectionMatrix.makePerspective(M,N,Z,te,X,w),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function de(ne,ge){ge===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ge.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ge=ne.near,Y=ne.far;x.texture!==null&&(x.depthNear>0&&(ge=x.depthNear),x.depthFar>0&&(Y=x.depthFar)),E.near=I.near=R.near=ge,E.far=I.far=R.far=Y,(D!==E.near||W!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,W=E.far),R.layers.mask=ne.layers.mask|2,I.layers.mask=ne.layers.mask|4,E.layers.mask=R.layers.mask|I.layers.mask;let se=ne.parent,_e=E.cameras;de(E,se);for(let we=0;we<_e.length;we++)de(_e[we],se);_e.length===2?q(E,R,I):E.projectionMatrix.copy(R.projectionMatrix),me(ne,E,se)};function me(ne,ge,Y){Y===null?ne.matrix.copy(ge.matrixWorld):(ne.matrix.copy(Y.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ge.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=mr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let ae=null;function De(ne,ge){if(u=ge.getViewerPose(c||o),g=ge,u!==null){let Y=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let se=!1;Y.length!==E.cameras.length&&(E.cameras.length=0,se=!0);for(let we=0;we<Y.length;we++){let be=Y[we],Ye=null;if(f!==null)Ye=f.getViewport(be);else{let H=h.getViewSubImage(d,be);Ye=H.viewport,we===0&&(e.setRenderTargetTextures(v,H.colorTexture,d.ignoreDepthValues?void 0:H.depthStencilTexture),e.setRenderTarget(v))}let B=S[we];B===void 0&&(B=new Dt,B.layers.enable(we),B.viewport=new lt,S[we]=B),B.matrix.fromArray(be.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(be.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),we===0&&(E.matrix.copy(B.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),se===!0&&E.cameras.push(B)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")){let we=h.getDepthInformation(Y[0]);we&&we.isValid&&we.texture&&x.init(e,we,s.renderState)}}for(let Y=0;Y<y.length;Y++){let se=_[Y],_e=y[Y];se!==null&&_e!==void 0&&_e.update(se,ge,c||o)}ae&&ae(ne,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),g=null}let qe=new pp;qe.setAnimationLoop(De),this.setAnimationLoop=function(ne){ae=ne},this.dispose=function(){}}},ms=new Tn,Ny=new Ke;function Fy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,ms.copy(_),ms.x*=-1,ms.y*=-1,ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.envMapRotation.value.setFromMatrix4(Ny.makeRotationFromEuler(ms)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Oy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let _=y.program;n.uniformBlockBinding(v,_)}function c(v,y){let _=s[v.id];_===void 0&&(g(v),_=u(v),s[v.id]=_,v.addEventListener("dispose",m));let P=y.program;n.updateUBOMapping(v,P);let b=e.render.frame;r[v.id]!==b&&(d(v),r[v.id]=b)}function u(v){let y=h();v.__bindingPointIndex=y;let _=i.createBuffer(),P=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let y=s[v.id],_=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,R=_.length;b<R;b++){let I=Array.isArray(_[b])?_[b]:[_[b]];for(let S=0,E=I.length;S<E;S++){let D=I[S];if(f(D,b,S,P)===!0){let W=D.__offset,L=Array.isArray(D.value)?D.value:[D.value],O=0;for(let z=0;z<L.length;z++){let F=L[z],re=x(F);typeof F=="number"||typeof F=="boolean"?(D.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,W+O,D.__data)):F.isMatrix3?(D.__data[0]=F.elements[0],D.__data[1]=F.elements[1],D.__data[2]=F.elements[2],D.__data[3]=0,D.__data[4]=F.elements[3],D.__data[5]=F.elements[4],D.__data[6]=F.elements[5],D.__data[7]=0,D.__data[8]=F.elements[6],D.__data[9]=F.elements[7],D.__data[10]=F.elements[8],D.__data[11]=0):(F.toArray(D.__data,O),O+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,_,P){let b=v.value,R=y+"_"+_;if(P[R]===void 0)return typeof b=="number"||typeof b=="boolean"?P[R]=b:P[R]=b.clone(),!0;{let I=P[R];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return P[R]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(v){let y=v.uniforms,_=0,P=16;for(let R=0,I=y.length;R<I;R++){let S=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,D=S.length;E<D;E++){let W=S[E],L=Array.isArray(W.value)?W.value:[W.value];for(let O=0,z=L.length;O<z;O++){let F=L[O],re=x(F),q=_%P,de=q%re.boundary,me=q+de;_+=de,me!==0&&P-me<re.storage&&(_+=P-me),W.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=re.storage}}}let b=_%P;return b>0&&(_+=P-b),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var xo=class{constructor(e={}){let{canvas:t=V0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this.toneMapping=Xi,this.toneMappingExposure=1;let _=this,P=!1,b=0,R=0,I=null,S=-1,E=null,D=new lt,W=new lt,L=null,O=new Re(0),z=0,F=t.width,re=t.height,q=1,de=null,me=null,ae=new lt(0,0,F,re),De=new lt(0,0,F,re),qe=!1,ne=new go,ge=!1,Y=!1,se=new Ke,_e=new Ke,we=new C,be=new lt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},B=!1;function H(){return I===null?q:1}let T=n;function xe(A,V){return t.getContext(A,V)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oh}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),T===null){let V="webgl2";if(T=xe(V,A),T===null)throw xe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let $,ue,U,j,X,w,M,N,Z,te,ee,ye,he,Ee,Xe,fe,Ae,Ve,We,Oe,at,tt,bt,k;function Te(){$=new Q_(T),$.init(),tt=new Py(T,$),ue=new Y_(T,$,e,tt),U=new Ry(T,$),ue.reverseDepthBuffer&&d&&U.buffers.depth.setReversed(!0),j=new nv(T),X=new my,w=new Iy(T,$,U,X,ue,tt,j),M=new j_(_),N=new J_(_),Z=new cg(T),bt=new X_(T,Z),te=new ev(T,Z,j,bt),ee=new sv(T,te,Z,j),We=new iv(T,ue,w),fe=new K_(X),ye=new py(_,M,N,$,ue,bt,fe),he=new Fy(_,X),Ee=new xy,Xe=new by($),Ve=new W_(_,M,N,U,ee,f,l),Ae=new wy(_,ee,ue),k=new Oy(T,j,ue,U),Oe=new q_(T,$,j),at=new tv(T,$,j),j.programs=ye.programs,_.capabilities=ue,_.extensions=$,_.properties=X,_.renderLists=Ee,_.shadowMap=Ae,_.state=U,_.info=j}Te();let ie=new gh(_,T);this.xr=ie,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let A=$.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=$.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(F,re,!1))},this.getSize=function(A){return A.set(F,re)},this.setSize=function(A,V,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,re=V,t.width=Math.floor(A*q),t.height=Math.floor(V*q),J===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(F*q,re*q).floor()},this.setDrawingBufferSize=function(A,V,J){F=A,re=V,q=J,t.width=Math.floor(A*J),t.height=Math.floor(V*J),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(ae)},this.setViewport=function(A,V,J,Q){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,V,J,Q),U.viewport(D.copy(ae).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,V,J,Q){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,V,J,Q),U.scissor(W.copy(De).multiplyScalar(q).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(A){U.setScissorTest(qe=A)},this.setOpaqueSort=function(A){de=A},this.setTransparentSort=function(A){me=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(A=!0,V=!0,J=!0){let Q=0;if(A){let G=!1;if(I!==null){let ve=I.texture.format;G=ve===$h||ve===jh||ve===Kh}if(G){let ve=I.texture.type,Ie=ve===wi||ve===ys||ve===fo||ve===ur||ve===Xh||ve===qh,Be=Ve.getClearColor(),ke=Ve.getClearAlpha(),je=Be.r,Je=Be.g,He=Be.b;Ie?(g[0]=je,g[1]=Je,g[2]=He,g[3]=ke,T.clearBufferuiv(T.COLOR,0,g)):(x[0]=je,x[1]=Je,x[2]=He,x[3]=ke,T.clearBufferiv(T.COLOR,0,x))}else Q|=T.COLOR_BUFFER_BIT}V&&(Q|=T.DEPTH_BUFFER_BIT),J&&(Q|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Ee.dispose(),Xe.dispose(),X.dispose(),M.dispose(),N.dispose(),ee.dispose(),bt.dispose(),k.dispose(),ye.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",vd),ie.removeEventListener("sessionend",yd),cs.stop()};function le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let A=j.autoReset,V=Ae.enabled,J=Ae.autoUpdate,Q=Ae.needsUpdate,G=Ae.type;Te(),j.autoReset=A,Ae.enabled=V,Ae.autoUpdate=J,Ae.needsUpdate=Q,Ae.type=G}function Ce(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ze(A){let V=A.target;V.removeEventListener("dispose",Ze),Lt(V)}function Lt(A){nn(A),X.remove(A)}function nn(A){let V=X.get(A).programs;V!==void 0&&(V.forEach(function(J){ye.releaseProgram(J)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,J,Q,G,ve){V===null&&(V=Ye);let Ie=G.isMesh&&G.matrixWorld.determinant()<0,Be=Bm(A,V,J,Q,G);U.setMaterial(Q,Ie);let ke=J.index,je=1;if(Q.wireframe===!0){if(ke=te.getWireframeAttribute(J),ke===void 0)return;je=2}let Je=J.drawRange,He=J.attributes.position,pt=Je.start*je,St=(Je.start+Je.count)*je;ve!==null&&(pt=Math.max(pt,ve.start*je),St=Math.min(St,(ve.start+ve.count)*je)),ke!==null?(pt=Math.max(pt,0),St=Math.min(St,ke.count)):He!=null&&(pt=Math.max(pt,0),St=Math.min(St,He.count));let wt=St-pt;if(wt<0||wt===1/0)return;bt.setup(G,Q,Be,J,ke);let _n,gt=Oe;if(ke!==null&&(_n=Z.get(ke),gt=at,gt.setIndex(_n)),G.isMesh)Q.wireframe===!0?(U.setLineWidth(Q.wireframeLinewidth*H()),gt.setMode(T.LINES)):gt.setMode(T.TRIANGLES);else if(G.isLine){let ze=Q.linewidth;ze===void 0&&(ze=1),U.setLineWidth(ze*H()),G.isLineSegments?gt.setMode(T.LINES):G.isLineLoop?gt.setMode(T.LINE_LOOP):gt.setMode(T.LINE_STRIP)}else G.isPoints?gt.setMode(T.POINTS):G.isSprite&&gt.setMode(T.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)gt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if($.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let ze=G._multiDrawStarts,mi=G._multiDrawCounts,xt=G._multiDrawCount,zn=ke?Z.get(ke).bytesPerElement:1,Os=X.get(Q).currentProgram.getUniforms();for(let Mn=0;Mn<xt;Mn++)Os.setValue(T,"_gl_DrawID",Mn),gt.render(ze[Mn]/zn,mi[Mn])}else if(G.isInstancedMesh)gt.renderInstances(pt,wt,G.count);else if(J.isInstancedBufferGeometry){let ze=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,mi=Math.min(J.instanceCount,ze);gt.renderInstances(pt,wt,mi)}else gt.render(pt,wt)};function vt(A,V,J){A.transparent===!0&&A.side===It&&A.forceSinglePass===!1?(A.side=Kt,A.needsUpdate=!0,Zo(A,V,J),A.side=Nn,A.needsUpdate=!0,Zo(A,V,J),A.side=It):Zo(A,V,J)}this.compile=function(A,V,J=null){J===null&&(J=A),p=Xe.get(J),p.init(V),y.push(p),J.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==J&&A.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let Q=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ve=G.material;if(ve)if(Array.isArray(ve))for(let Ie=0;Ie<ve.length;Ie++){let Be=ve[Ie];vt(Be,J,G),Q.add(Be)}else vt(ve,J,G),Q.add(ve)}),y.pop(),p=null,Q},this.compileAsync=function(A,V,J=null){let Q=this.compile(A,V,J);return new Promise(G=>{function ve(){if(Q.forEach(function(Ie){X.get(Ie).currentProgram.isReady()&&Q.delete(Ie)}),Q.size===0){G(A);return}setTimeout(ve,10)}$.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Hn=null;function pi(A){Hn&&Hn(A)}function vd(){cs.stop()}function yd(){cs.start()}let cs=new pp;cs.setAnimationLoop(pi),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(A){Hn=A,ie.setAnimationLoop(A),A===null?cs.stop():cs.start()},ie.addEventListener("sessionstart",vd),ie.addEventListener("sessionend",yd),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(V),V=ie.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,V,I),p=Xe.get(A,y.length),p.init(V),y.push(p),_e.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ne.setFromProjectionMatrix(_e),Y=this.localClippingEnabled,ge=fe.init(this.clippingPlanes,Y),m=Ee.get(A,v.length),m.init(),v.push(m),ie.enabled===!0&&ie.isPresenting===!0){let ve=_.xr.getDepthSensingMesh();ve!==null&&Nl(ve,V,-1/0,_.sortObjects)}Nl(A,V,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(de,me),B=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,B&&Ve.addToRenderList(m,A),this.info.render.frame++,ge===!0&&fe.beginShadows();let J=p.state.shadowsArray;Ae.render(J,A,V),ge===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=m.opaque,G=m.transmissive;if(p.setupLights(),V.isArrayCamera){let ve=V.cameras;if(G.length>0)for(let Ie=0,Be=ve.length;Ie<Be;Ie++){let ke=ve[Ie];Ed(Q,G,A,ke)}B&&Ve.render(A);for(let Ie=0,Be=ve.length;Ie<Be;Ie++){let ke=ve[Ie];Md(m,A,ke,ke.viewport)}}else G.length>0&&Ed(Q,G,A,V),B&&Ve.render(A),Md(m,A,V);I!==null&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(_,A,V),bt.resetDefaultState(),S=-1,E=null,y.pop(),y.length>0?(p=y[y.length-1],ge===!0&&fe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Nl(A,V,J,Q){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){Q&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);let Ie=ee.update(A),Be=A.material;Be.visible&&m.push(A,Ie,Be,J,be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ne.intersectsObject(A))){let Ie=ee.update(A),Be=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),be.copy(Ie.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Be)){let ke=Ie.groups;for(let je=0,Je=ke.length;je<Je;je++){let He=ke[je],pt=Be[He.materialIndex];pt&&pt.visible&&m.push(A,Ie,pt,J,be.z,He)}}else Be.visible&&m.push(A,Ie,Be,J,be.z,null)}}let ve=A.children;for(let Ie=0,Be=ve.length;Ie<Be;Ie++)Nl(ve[Ie],V,J,Q)}function Md(A,V,J,Q){let G=A.opaque,ve=A.transmissive,Ie=A.transparent;p.setupLightsView(J),ge===!0&&fe.setGlobalState(_.clippingPlanes,J),Q&&U.viewport(D.copy(Q)),G.length>0&&$o(G,V,J),ve.length>0&&$o(ve,V,J),Ie.length>0&&$o(Ie,V,J),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function Ed(A,V,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Ht(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?fn:wi,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));let ve=p.state.transmissionRenderTarget[Q.id],Ie=Q.viewport||D;ve.setSize(Ie.z,Ie.w);let Be=_.getRenderTarget();_.setRenderTarget(ve),_.getClearColor(O),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear(),B&&Ve.render(J);let ke=_.toneMapping;_.toneMapping=Xi;let je=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),ge===!0&&fe.setGlobalState(_.clippingPlanes,Q),$o(A,J,Q),w.updateMultisampleRenderTarget(ve),w.updateRenderTargetMipmap(ve),$.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let He=0,pt=V.length;He<pt;He++){let St=V[He],wt=St.object,_n=St.geometry,gt=St.material,ze=St.group;if(gt.side===It&&wt.layers.test(Q.layers)){let mi=gt.side;gt.side=Kt,gt.needsUpdate=!0,bd(wt,J,Q,_n,gt,ze),gt.side=mi,gt.needsUpdate=!0,Je=!0}}Je===!0&&(w.updateMultisampleRenderTarget(ve),w.updateRenderTargetMipmap(ve))}_.setRenderTarget(Be),_.setClearColor(O,z),je!==void 0&&(Q.viewport=je),_.toneMapping=ke}function $o(A,V,J){let Q=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ve=A.length;G<ve;G++){let Ie=A[G],Be=Ie.object,ke=Ie.geometry,je=Q===null?Ie.material:Q,Je=Ie.group;Be.layers.test(J.layers)&&bd(Be,V,J,ke,je,Je)}}function bd(A,V,J,Q,G,ve){A.onBeforeRender(_,V,J,Q,G,ve),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(_,V,J,Q,A,ve),G.transparent===!0&&G.side===It&&G.forceSinglePass===!1?(G.side=Kt,G.needsUpdate=!0,_.renderBufferDirect(J,V,Q,G,A,ve),G.side=Nn,G.needsUpdate=!0,_.renderBufferDirect(J,V,Q,G,A,ve),G.side=It):_.renderBufferDirect(J,V,Q,G,A,ve),A.onAfterRender(_,V,J,Q,G,ve)}function Zo(A,V,J){V.isScene!==!0&&(V=Ye);let Q=X.get(A),G=p.state.lights,ve=p.state.shadowsArray,Ie=G.state.version,Be=ye.getParameters(A,G.state,ve,V,J),ke=ye.getProgramCacheKey(Be),je=Q.programs;Q.environment=A.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(A.isMeshStandardMaterial?N:M).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",Ze),je=new Map,Q.programs=je);let Je=je.get(ke);if(Je!==void 0){if(Q.currentProgram===Je&&Q.lightsStateVersion===Ie)return Td(A,Be),Je}else Be.uniforms=ye.getUniforms(A),A.onBeforeCompile(Be,_),Je=ye.acquireProgram(Be,ke),je.set(ke,Je),Q.uniforms=Be.uniforms;let He=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=fe.uniform),Td(A,Be),Q.needsLights=Hm(A),Q.lightsStateVersion=Ie,Q.needsLights&&(He.ambientLightColor.value=G.state.ambient,He.lightProbe.value=G.state.probe,He.directionalLights.value=G.state.directional,He.directionalLightShadows.value=G.state.directionalShadow,He.spotLights.value=G.state.spot,He.spotLightShadows.value=G.state.spotShadow,He.rectAreaLights.value=G.state.rectArea,He.ltc_1.value=G.state.rectAreaLTC1,He.ltc_2.value=G.state.rectAreaLTC2,He.pointLights.value=G.state.point,He.pointLightShadows.value=G.state.pointShadow,He.hemisphereLights.value=G.state.hemi,He.directionalShadowMap.value=G.state.directionalShadowMap,He.directionalShadowMatrix.value=G.state.directionalShadowMatrix,He.spotShadowMap.value=G.state.spotShadowMap,He.spotLightMatrix.value=G.state.spotLightMatrix,He.spotLightMap.value=G.state.spotLightMap,He.pointShadowMap.value=G.state.pointShadowMap,He.pointShadowMatrix.value=G.state.pointShadowMatrix),Q.currentProgram=Je,Q.uniformsList=null,Je}function Sd(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=ar.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Td(A,V){let J=X.get(A);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Bm(A,V,J,Q,G){V.isScene!==!0&&(V=Ye),w.resetTextureUnits();let ve=V.fog,Ie=Q.isMeshStandardMaterial?V.environment:null,Be=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ln,ke=(Q.isMeshStandardMaterial?N:M).get(Q.envMap||Ie),je=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),He=!!J.morphAttributes.position,pt=!!J.morphAttributes.normal,St=!!J.morphAttributes.color,wt=Xi;Q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(wt=_.toneMapping);let _n=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,gt=_n!==void 0?_n.length:0,ze=X.get(Q),mi=p.state.lights;if(ge===!0&&(Y===!0||A!==E)){let Pn=A===E&&Q.id===S;fe.setState(Q,A,Pn)}let xt=!1;Q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==mi.state.version||ze.outputColorSpace!==Be||G.isBatchedMesh&&ze.batching===!1||!G.isBatchedMesh&&ze.batching===!0||G.isBatchedMesh&&ze.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ze.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ze.instancing===!1||!G.isInstancedMesh&&ze.instancing===!0||G.isSkinnedMesh&&ze.skinning===!1||!G.isSkinnedMesh&&ze.skinning===!0||G.isInstancedMesh&&ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ze.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ze.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ze.instancingMorph===!1&&G.morphTexture!==null||ze.envMap!==ke||Q.fog===!0&&ze.fog!==ve||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==fe.numPlanes||ze.numIntersection!==fe.numIntersection)||ze.vertexAlphas!==je||ze.vertexTangents!==Je||ze.morphTargets!==He||ze.morphNormals!==pt||ze.morphColors!==St||ze.toneMapping!==wt||ze.morphTargetsCount!==gt)&&(xt=!0):(xt=!0,ze.__version=Q.version);let zn=ze.currentProgram;xt===!0&&(zn=Zo(Q,V,G));let Os=!1,Mn=!1,Yr=!1,At=zn.getUniforms(),ii=ze.uniforms;if(U.useProgram(zn.program)&&(Os=!0,Mn=!0,Yr=!0),Q.id!==S&&(S=Q.id,Mn=!0),Os||E!==A){U.buffers.depth.getReversed()?(se.copy(A.projectionMatrix),W0(se),X0(se),At.setValue(T,"projectionMatrix",se)):At.setValue(T,"projectionMatrix",A.projectionMatrix),At.setValue(T,"viewMatrix",A.matrixWorldInverse);let Ni=At.map.cameraPosition;Ni!==void 0&&Ni.setValue(T,we.setFromMatrixPosition(A.matrixWorld)),ue.logarithmicDepthBuffer&&At.setValue(T,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&At.setValue(T,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Mn=!0,Yr=!0)}if(G.isSkinnedMesh){At.setOptional(T,G,"bindMatrix"),At.setOptional(T,G,"bindMatrixInverse");let Pn=G.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),At.setValue(T,"boneTexture",Pn.boneTexture,w))}G.isBatchedMesh&&(At.setOptional(T,G,"batchingTexture"),At.setValue(T,"batchingTexture",G._matricesTexture,w),At.setOptional(T,G,"batchingIdTexture"),At.setValue(T,"batchingIdTexture",G._indirectTexture,w),At.setOptional(T,G,"batchingColorTexture"),G._colorsTexture!==null&&At.setValue(T,"batchingColorTexture",G._colorsTexture,w));let Kr=J.morphAttributes;if((Kr.position!==void 0||Kr.normal!==void 0||Kr.color!==void 0)&&We.update(G,J,zn),(Mn||ze.receiveShadow!==G.receiveShadow)&&(ze.receiveShadow=G.receiveShadow,At.setValue(T,"receiveShadow",G.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ii.envMap.value=ke,ii.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(ii.envMapIntensity.value=V.environmentIntensity),Mn&&(At.setValue(T,"toneMappingExposure",_.toneMappingExposure),ze.needsLights&&km(ii,Yr),ve&&Q.fog===!0&&he.refreshFogUniforms(ii,ve),he.refreshMaterialUniforms(ii,Q,q,re,p.state.transmissionRenderTarget[A.id]),ar.upload(T,Sd(ze),ii,w)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ar.upload(T,Sd(ze),ii,w),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&At.setValue(T,"center",G.center),At.setValue(T,"modelViewMatrix",G.modelViewMatrix),At.setValue(T,"normalMatrix",G.normalMatrix),At.setValue(T,"modelMatrix",G.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Pn=Q.uniformsGroups;for(let Ni=0,Fi=Pn.length;Ni<Fi;Ni++){let wd=Pn[Ni];k.update(wd,zn),k.bind(wd,zn)}}return zn}function km(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Hm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,V,J){X.get(A.texture).__webglTexture=V,X.get(A.depthTexture).__webglTexture=J;let Q=X.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){let J=X.get(A);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,J=0){I=A,b=V,R=J;let Q=!0,G=null,ve=!1,Ie=!1;if(A){let ke=X.get(A);if(ke.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(T.FRAMEBUFFER,null),Q=!1;else if(ke.__webglFramebuffer===void 0)w.setupRenderTarget(A);else if(ke.__hasExternalTextures)w.rebindTextures(A,X.get(A.texture).__webglTexture,X.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let He=A.depthTexture;if(ke.__boundDepthTexture!==He){if(He!==null&&X.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(A)}}let je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ie=!0);let Je=X.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[V])?G=Je[V][J]:G=Je[V],ve=!0):A.samples>0&&w.useMultisampledRTT(A)===!1?G=X.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?G=Je[J]:G=Je,D.copy(A.viewport),W.copy(A.scissor),L=A.scissorTest}else D.copy(ae).multiplyScalar(q).floor(),W.copy(De).multiplyScalar(q).floor(),L=qe;if(U.bindFramebuffer(T.FRAMEBUFFER,G)&&Q&&U.drawBuffers(A,G),U.viewport(D),U.scissor(W),U.setScissorTest(L),ve){let ke=X.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,J)}else if(Ie){let ke=X.get(A.texture),je=V||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,ke.__webglTexture,J||0,je)}S=-1},this.readRenderTargetPixels=function(A,V,J,Q,G,ve,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){U.bindFramebuffer(T.FRAMEBUFFER,Be);try{let ke=A.texture,je=ke.format,Je=ke.type;if(!ue.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-Q&&J>=0&&J<=A.height-G&&T.readPixels(V,J,Q,G,tt.convert(je),tt.convert(Je),ve)}finally{let ke=I!==null?X.get(I).__webglFramebuffer:null;U.bindFramebuffer(T.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,V,J,Q,G,ve,Ie){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){let ke=A.texture,je=ke.format,Je=ke.type;if(!ue.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=A.width-Q&&J>=0&&J<=A.height-G){U.bindFramebuffer(T.FRAMEBUFFER,Be);let He=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,He),T.bufferData(T.PIXEL_PACK_BUFFER,ve.byteLength,T.STREAM_READ),T.readPixels(V,J,Q,G,tt.convert(je),tt.convert(Je),0);let pt=I!==null?X.get(I).__webglFramebuffer:null;U.bindFramebuffer(T.FRAMEBUFFER,pt);let St=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await G0(T,St,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,He),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ve),T.deleteBuffer(He),T.deleteSync(St),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,V=null,J=0){A.isTexture!==!0&&(io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1]);let Q=Math.pow(2,-J),G=Math.floor(A.image.width*Q),ve=Math.floor(A.image.height*Q),Ie=V!==null?V.x:0,Be=V!==null?V.y:0;w.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,J,0,0,Ie,Be,G,ve),U.unbindTexture()},this.copyTextureToTexture=function(A,V,J=null,Q=null,G=0){A.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],V=arguments[2],G=arguments[3]||0,J=null);let ve,Ie,Be,ke,je,Je,He,pt,St,wt=A.isCompressedTexture?A.mipmaps[G]:A.image;J!==null?(ve=J.max.x-J.min.x,Ie=J.max.y-J.min.y,Be=J.isBox3?J.max.z-J.min.z:1,ke=J.min.x,je=J.min.y,Je=J.isBox3?J.min.z:0):(ve=wt.width,Ie=wt.height,Be=wt.depth||1,ke=0,je=0,Je=0),Q!==null?(He=Q.x,pt=Q.y,St=Q.z):(He=0,pt=0,St=0);let _n=tt.convert(V.format),gt=tt.convert(V.type),ze;V.isData3DTexture?(w.setTexture3D(V,0),ze=T.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(w.setTexture2DArray(V,0),ze=T.TEXTURE_2D_ARRAY):(w.setTexture2D(V,0),ze=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,V.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,V.unpackAlignment);let mi=T.getParameter(T.UNPACK_ROW_LENGTH),xt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),zn=T.getParameter(T.UNPACK_SKIP_PIXELS),Os=T.getParameter(T.UNPACK_SKIP_ROWS),Mn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,wt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,wt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ke),T.pixelStorei(T.UNPACK_SKIP_ROWS,je),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Je);let Yr=A.isDataArrayTexture||A.isData3DTexture,At=V.isDataArrayTexture||V.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let ii=X.get(A),Kr=X.get(V),Pn=X.get(ii.__renderTarget),Ni=X.get(Kr.__renderTarget);U.bindFramebuffer(T.READ_FRAMEBUFFER,Pn.__webglFramebuffer),U.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Fi=0;Fi<Be;Fi++)Yr&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,X.get(A).__webglTexture,G,Je+Fi),A.isDepthTexture?(At&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,X.get(V).__webglTexture,G,St+Fi),T.blitFramebuffer(ke,je,ve,Ie,He,pt,ve,Ie,T.DEPTH_BUFFER_BIT,T.NEAREST)):At?T.copyTexSubImage3D(ze,G,He,pt,St+Fi,ke,je,ve,Ie):T.copyTexSubImage2D(ze,G,He,pt,St+Fi,ke,je,ve,Ie);U.bindFramebuffer(T.READ_FRAMEBUFFER,null),U.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?T.texSubImage3D(ze,G,He,pt,St,ve,Ie,Be,_n,gt,wt.data):V.isCompressedArrayTexture?T.compressedTexSubImage3D(ze,G,He,pt,St,ve,Ie,Be,_n,wt.data):T.texSubImage3D(ze,G,He,pt,St,ve,Ie,Be,_n,gt,wt):A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,G,He,pt,ve,Ie,_n,gt,wt.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,G,He,pt,wt.width,wt.height,_n,wt.data):T.texSubImage2D(T.TEXTURE_2D,G,He,pt,ve,Ie,_n,gt,wt);T.pixelStorei(T.UNPACK_ROW_LENGTH,mi),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,xt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,zn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Os),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Mn),G===0&&V.generateMipmaps&&T.generateMipmap(ze),U.unbindTexture()},this.copyTextureToTexture3D=function(A,V,J=null,Q=null,G=0){return A.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],V=arguments[3],G=arguments[4]||0),io('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,V,J,Q,G)},this.initRenderTarget=function(A){X.get(A).__webglFramebuffer===void 0&&w.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),U.unbindTexture()},this.resetState=function(){b=0,R=0,I=null,U.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}},Ga=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var _o=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},vo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eh,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new C,yo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Tf=new C,wf=new lt,Af=new lt,By=new C,Rf=new Ke,_a=new C,cc=new Sn,Cf=new Ke,hc=new Ms,xr=class extends K{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Id,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new an),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_a),this.boundingBox.expandByPoint(_a)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_a),this.boundingSphere.expandByPoint(_a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cc.copy(this.boundingSphere),cc.applyMatrix4(s),e.ray.intersectsSphere(cc)!==!1&&(Cf.copy(s).invert(),hc.copy(e.ray).applyMatrix4(Cf),!(this.boundingBox!==null&&hc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Id?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===u0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;wf.fromBufferAttribute(s.attributes.skinIndex,e),Af.fromBufferAttribute(s.attributes.skinWeight,e),Tf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Af.getComponent(r);if(o!==0){let a=wf.getComponent(r);Rf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(By.copy(Tf).applyMatrix4(Rf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Mo=class extends Rt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wa=class extends $t{constructor(e=null,t=1,n=1,s,r,o,a,l,c=jt,u=jt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},If=new Ke,ky=new Ke,_r=class i{constructor(e=[],t=[]){this.uuid=Un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:ky;If.multiplyMatrices(a,t[r]),If.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Wa(t,e,e,Dn,Yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Mo),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Es=class extends Ft{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new Ke,Pf=new Ke,va=[],Lf=new an,Hy=new Ke,Qr=new K,eo=new Sn,Xa=class extends K{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Es(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new an),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Lf.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(Lf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),eo.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eo.copy(this.boundingSphere),eo.applyMatrix4(n),e.ray.intersectsSphere(eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),Pf.multiplyMatrices(n,Js),Qr.matrixWorld=Pf,Qr.raycast(e,va);for(let o=0,a=va.length;o<a;o++){let l=va[o];l.instanceId=r,l.object=this,t.push(l)}va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wa(new Float32Array(s*this.count),s,this.count,Yh,Yn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Eo=class extends wn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},qa=new C,Ya=new C,Df=new Ke,to=new Ms,ya=new Sn,uc=new C,Uf=new C,vr=class extends Rt{constructor(e=new Ct,t=new Eo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)qa.fromBufferAttribute(t,s-1),Ya.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=qa.distanceTo(Ya);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;Df.copy(s).invert(),to.copy(e.ray).applyMatrix4(Df);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=u.getX(x),v=u.getX(x+1),y=Ma(this,e,to,l,p,v);y&&t.push(y)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=Ma(this,e,to,l,x,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=Ma(this,e,to,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=Ma(this,e,to,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ma(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(qa.fromBufferAttribute(o,s),Ya.fromBufferAttribute(o,r),t.distanceSqToSegment(qa,Ya,uc,Uf)>n)return;uc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(uc);if(!(l<e.near||l>e.far))return{distance:l,point:Uf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Nf=new C,Ff=new C,Ka=class extends vr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Nf.fromBufferAttribute(t,s),Ff.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Nf.distanceTo(Ff);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ja=class extends vr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},bs=class extends wn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Of=new Ke,xh=new Ms,Ea=new Sn,ba=new C,yr=class extends Rt{constructor(e=new Ct,t=new bs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;Of.copy(s).invert(),xh.copy(e.ray).applyMatrix4(Of);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);ba.fromBufferAttribute(h,m),Bf(ba,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)ba.fromBufferAttribute(h,g),Bf(ba,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bf(i,e,t,n,s,r,o){let a=xh.distanceSqToPoint(i);if(a<t){let l=new C;xh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var An=class extends $t{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,s=[],r=[],o=[],a=new C,l=new Ke;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Vt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Vt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},bo=class extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},_h=class extends bo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function eu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Sa=new C,dc=new eu,fc=new eu,pc=new eu,So=class extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Sa.subVectors(s[0],s[1]).add(s[0]),c=Sa);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Sa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Sa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),dc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,m),fc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,m),pc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),fc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),pc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(dc.calc(l),fc.calc(l),pc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function kf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function zy(i,e){let t=1-i;return t*t*e}function Vy(i,e){return 2*(1-i)*i*e}function Gy(i,e){return i*i*e}function co(i,e,t,n){return zy(i,e)+Vy(i,t)+Gy(i,n)}function Wy(i,e){let t=1-i;return t*t*t*e}function Xy(i,e){let t=1-i;return 3*t*t*i*e}function qy(i,e){return 3*(1-i)*i*i*e}function Yy(i,e){return i*i*i*e}function ho(i,e,t,n,s){return Wy(i,e)+Xy(i,t)+qy(i,n)+Yy(i,s)}var $a=class extends Fn{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ho(e,s.x,r.x,o.x,a.x),ho(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vh=class extends Fn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ho(e,s.x,r.x,o.x,a.x),ho(e,s.y,r.y,o.y,a.y),ho(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Za=class extends Fn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yh=class extends Fn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Fn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(co(e,s.x,r.x,o.x),co(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends Fn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(co(e,s.x,r.x,o.x),co(e,s.y,r.y,o.y),co(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},el=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(kf(a,l.x,c.x,u.x,h.x),kf(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},tl=Object.freeze({__proto__:null,ArcCurve:_h,CatmullRomCurve3:So,CubicBezierCurve:$a,CubicBezierCurve3:vh,EllipseCurve:bo,LineCurve:Za,LineCurve3:yh,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:Qa,SplineCurve:el}),Mh=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new tl[s.type]().fromJSON(s))}return this}},Ss=class extends Mh{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Za(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ja(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new $a(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new el(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new bo(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},To=class i extends Ct{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Vt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new C,d=new ce,f=new C,g=new C,x=new C,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=t;v++){let y=n+v*u*s,_=Math.sin(y),P=Math.cos(y);for(let b=0;b<=e.length-1;b++){h.x=e[b].x*_,h.y=e[b].y,h.z=e[b].x*P,o.push(h.x,h.y,h.z),d.x=v/t,d.y=b/(e.length-1),a.push(d.x,d.y);let R=l[3*b+0]*_,I=l[3*b+1],S=l[3*b+0]*P;c.push(R,I,S)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let _=y+v*e.length,P=_,b=_+e.length,R=_+e.length+1,I=_+1;r.push(P,b,I),r.push(R,I,b)}this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("uv",new et(a,2)),this.setAttribute("normal",new et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},nl=class i extends To{constructor(e=1,t=1,n=4,s=8){let r=new Ss;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},$n=class i extends Ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,u=new ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ot=class i extends Ct{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],m=n/2,p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function v(){let _=new C,P=new C,b=0,R=(t-e)/n;for(let I=0;I<=r;I++){let S=[],E=I/r,D=E*(t-e)+e;for(let W=0;W<=s;W++){let L=W/s,O=L*l+a,z=Math.sin(O),F=Math.cos(O);P.x=D*z,P.y=-E*n+m,P.z=D*F,h.push(P.x,P.y,P.z),_.set(z,R,F).normalize(),d.push(_.x,_.y,_.z),f.push(L,1-E),S.push(g++)}x.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){let E=x[S][I],D=x[S+1][I],W=x[S+1][I+1],L=x[S][I+1];(e>0||S!==0)&&(u.push(E,D,L),b+=3),(t>0||S!==r-1)&&(u.push(D,W,L),b+=3)}c.addGroup(p,b,0),p+=b}function y(_){let P=g,b=new ce,R=new C,I=0,S=_===!0?e:t,E=_===!0?1:-1;for(let W=1;W<=s;W++)h.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let D=g;for(let W=0;W<=s;W++){let O=W/s*l+a,z=Math.cos(O),F=Math.sin(O);R.x=S*F,R.y=m*E,R.z=S*z,h.push(R.x,R.y,R.z),d.push(0,E,0),b.x=z*.5+.5,b.y=F*.5*E+.5,f.push(b.x,b.y),g++}for(let W=0;W<s;W++){let L=P+W,O=D+W;_===!0?u.push(O,O+1,L):u.push(O+1,O,L),I+=3}c.addGroup(p,I,_===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ri=class extends Ss{constructor(e){super(e),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ss().fromJSON(s))}return this}},Ky={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=vp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=Qy(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return wo(r,o,t,a,l,f,0),o}};function vp(i,e,t,n,s){let r,o;if(s===hM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Hf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Hf(r,i[r],i[r+1],o);return o&&ml(o,o.next)&&(Ro(o),o=o.next),o}function Ts(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ml(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&sM(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?$y(i,n,s,r):jy(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ro(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Zy(Ts(i),e,t),wo(i,e,t,n,s,r,2)):o===2&&Jy(i,e,t,n,s,r):wo(Ts(i),e,t,n,s,r,1);break}}}function jy(i){let e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&ir(s,a,r,l,o,c,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $y(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Pt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=Eh(f,g,e,t,n),v=Eh(x,m,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ir(a,u,l,h,c,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ir(a,u,l,h,c,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ir(a,u,l,h,c,d,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ir(a,u,l,h,c,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Zy(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!ml(s,r)&&yp(s,n,n.next,r)&&Ao(s,r)&&Ao(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ro(n),Ro(n.next),n=i=r),n=n.next}while(n!==i);return Ts(n)}function Jy(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&aM(o,a)){let l=Mp(o,a);o=Ts(o,o.next),l=Ts(l,l.next),wo(o,e,t,n,s,r,0),wo(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Qy(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=vp(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(oM(c));for(s.sort(eM),r=0;r<s.length;r++)t=tM(s[r],t);return t}function eM(i,e){return i.x-e.x}function tM(i,e){let t=nM(i,e);if(!t)return e;let n=Mp(t,i);return Ts(n,n.next),Ts(t,t.next)}function nM(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ir(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Ao(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&iM(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function iM(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function sM(i,e,t,n){let s=i;do s.z===0&&(s.z=Eh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rM(s)}function rM(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Eh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function oM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ir(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function aM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!lM(i,e)&&(Ao(i,e)&&Ao(e,i)&&cM(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||ml(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ml(i,e){return i.x===e.x&&i.y===e.y}function yp(i,e,t,n){let s=wa(Pt(i,e,t)),r=wa(Pt(i,e,n)),o=wa(Pt(t,n,i)),a=wa(Pt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ta(i,t,e)||r===0&&Ta(i,n,e)||o===0&&Ta(t,i,n)||a===0&&Ta(t,e,n))}function Ta(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function wa(i){return i>0?1:i<0?-1:0}function lM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&yp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ao(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function cM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Mp(i,e){let t=new bh(i.i,i.x,i.y),n=new bh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Hf(i,e,t,n){let s=new bh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var qi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];zf(e),Vf(n,e);let o=e.length;t.forEach(zf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Vf(n,t[l]);let a=Ky.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function zf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Vf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Mr=class i extends Ct{constructor(e=new Ri([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:uM,y,_=!1,P,b,R,I;p&&(y=p.getSpacedPoints(u),_=!0,d=!1,P=p.computeFrenetFrames(u,!1),b=new C,R=new C,I=new C),d||(m=0,f=0,g=0,x=0);let S=a.extractPoints(c),E=S.shape,D=S.holes;if(!qi.isClockWise(E)){E=E.reverse();for(let B=0,H=D.length;B<H;B++){let T=D[B];qi.isClockWise(T)&&(D[B]=T.reverse())}}let L=qi.triangulateShape(E,D),O=E;for(let B=0,H=D.length;B<H;B++){let T=D[B];E=E.concat(T)}function z(B,H,T){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(H,T)}let F=E.length,re=L.length;function q(B,H,T){let xe,$,ue,U=B.x-H.x,j=B.y-H.y,X=T.x-B.x,w=T.y-B.y,M=U*U+j*j,N=U*w-j*X;if(Math.abs(N)>Number.EPSILON){let Z=Math.sqrt(M),te=Math.sqrt(X*X+w*w),ee=H.x-j/Z,ye=H.y+U/Z,he=T.x-w/te,Ee=T.y+X/te,Xe=((he-ee)*w-(Ee-ye)*X)/(U*w-j*X);xe=ee+U*Xe-B.x,$=ye+j*Xe-B.y;let fe=xe*xe+$*$;if(fe<=2)return new ce(xe,$);ue=Math.sqrt(fe/2)}else{let Z=!1;U>Number.EPSILON?X>Number.EPSILON&&(Z=!0):U<-Number.EPSILON?X<-Number.EPSILON&&(Z=!0):Math.sign(j)===Math.sign(w)&&(Z=!0),Z?(xe=-j,$=U,ue=Math.sqrt(M)):(xe=U,$=j,ue=Math.sqrt(M/2))}return new ce(xe/ue,$/ue)}let de=[];for(let B=0,H=O.length,T=H-1,xe=B+1;B<H;B++,T++,xe++)T===H&&(T=0),xe===H&&(xe=0),de[B]=q(O[B],O[T],O[xe]);let me=[],ae,De=de.concat();for(let B=0,H=D.length;B<H;B++){let T=D[B];ae=[];for(let xe=0,$=T.length,ue=$-1,U=xe+1;xe<$;xe++,ue++,U++)ue===$&&(ue=0),U===$&&(U=0),ae[xe]=q(T[xe],T[ue],T[U]);me.push(ae),De=De.concat(ae)}for(let B=0;B<m;B++){let H=B/m,T=f*Math.cos(H*Math.PI/2),xe=g*Math.sin(H*Math.PI/2)+x;for(let $=0,ue=O.length;$<ue;$++){let U=z(O[$],de[$],xe);se(U.x,U.y,-T)}for(let $=0,ue=D.length;$<ue;$++){let U=D[$];ae=me[$];for(let j=0,X=U.length;j<X;j++){let w=z(U[j],ae[j],xe);se(w.x,w.y,-T)}}}let qe=g+x;for(let B=0;B<F;B++){let H=d?z(E[B],De[B],qe):E[B];_?(R.copy(P.normals[0]).multiplyScalar(H.x),b.copy(P.binormals[0]).multiplyScalar(H.y),I.copy(y[0]).add(R).add(b),se(I.x,I.y,I.z)):se(H.x,H.y,0)}for(let B=1;B<=u;B++)for(let H=0;H<F;H++){let T=d?z(E[H],De[H],qe):E[H];_?(R.copy(P.normals[B]).multiplyScalar(T.x),b.copy(P.binormals[B]).multiplyScalar(T.y),I.copy(y[B]).add(R).add(b),se(I.x,I.y,I.z)):se(T.x,T.y,h/u*B)}for(let B=m-1;B>=0;B--){let H=B/m,T=f*Math.cos(H*Math.PI/2),xe=g*Math.sin(H*Math.PI/2)+x;for(let $=0,ue=O.length;$<ue;$++){let U=z(O[$],de[$],xe);se(U.x,U.y,h+T)}for(let $=0,ue=D.length;$<ue;$++){let U=D[$];ae=me[$];for(let j=0,X=U.length;j<X;j++){let w=z(U[j],ae[j],xe);_?se(w.x,w.y+y[u-1].y,y[u-1].x+T):se(w.x,w.y,h+T)}}}ne(),ge();function ne(){let B=s.length/3;if(d){let H=0,T=F*H;for(let xe=0;xe<re;xe++){let $=L[xe];_e($[2]+T,$[1]+T,$[0]+T)}H=u+m*2,T=F*H;for(let xe=0;xe<re;xe++){let $=L[xe];_e($[0]+T,$[1]+T,$[2]+T)}}else{for(let H=0;H<re;H++){let T=L[H];_e(T[2],T[1],T[0])}for(let H=0;H<re;H++){let T=L[H];_e(T[0]+F*u,T[1]+F*u,T[2]+F*u)}}n.addGroup(B,s.length/3-B,0)}function ge(){let B=s.length/3,H=0;Y(O,H),H+=O.length;for(let T=0,xe=D.length;T<xe;T++){let $=D[T];Y($,H),H+=$.length}n.addGroup(B,s.length/3-B,1)}function Y(B,H){let T=B.length;for(;--T>=0;){let xe=T,$=T-1;$<0&&($=B.length-1);for(let ue=0,U=u+m*2;ue<U;ue++){let j=F*ue,X=F*(ue+1),w=H+xe+j,M=H+$+j,N=H+$+X,Z=H+xe+X;we(w,M,N,Z)}}}function se(B,H,T){l.push(B),l.push(H),l.push(T)}function _e(B,H,T){be(B),be(H),be(T);let xe=s.length/3,$=v.generateTopUV(n,s,xe-3,xe-2,xe-1);Ye($[0]),Ye($[1]),Ye($[2])}function we(B,H,T,xe){be(B),be(H),be(xe),be(H),be(T),be(xe);let $=s.length/3,ue=v.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);Ye(ue[0]),Ye(ue[1]),Ye(ue[3]),Ye(ue[1]),Ye(ue[2]),Ye(ue[3])}function be(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function Ye(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return dM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new tl[s.type]().fromJSON(s)),new i(n,e.options)}},uM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ce(r,o),new ce(a,l),new ce(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-h),new ce(d,1-g),new ce(x,1-p)]:[new ce(a,1-l),new ce(u,1-h),new ce(f,1-g),new ce(m,1-p)]}};function dM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Co=class i extends Ct{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new C,g=new ce;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let v=p+m,y=v,_=v+n+1,P=v+n+2,b=v+1;a.push(y,_,b),a.push(_,P,b)}}this.setIndex(a),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Io=class i extends Ct{constructor(e=new Ri([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(r,3)),this.setAttribute("uv",new et(o,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;qi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];qi.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=qi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){let v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){let v=x[m],y=v[0]+h,_=v[1]+h,P=v[2]+h;n.push(y,_,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return fM(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function fM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ut=class i extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],y=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let P=0;P<=t;P++){let b=P/t;h.x=-e*Math.cos(s+b*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+b*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(b+_,1-y),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let y=u[p][v+1],_=u[p][v],P=u[p+1][v],b=u[p+1][v+1];(p!==0||o>0)&&f.push(y,_,b),(p!==n-1||l<Math.PI)&&f.push(_,P,b)}this.setIndex(f),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zn=class i extends Ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new C,h=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var il=class i extends Ct{constructor(e=new Qa(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new ce,u=new C,h=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new et(h,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),v(),p()}function m(y){u=e.getPointAt(y/t,u);let _=o.normals[y],P=o.binormals[y];for(let b=0;b<=s;b++){let R=b/s*Math.PI*2,I=Math.sin(R),S=-Math.cos(R);l.x=S*_.x+I*P.x,l.y=S*_.y+I*P.y,l.z=S*_.z+I*P.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){let P=(s+1)*(y-1)+(_-1),b=(s+1)*y+(_-1),R=(s+1)*y+_,I=(s+1)*(y-1)+_;g.push(P,b,I),g.push(b,R,I)}}function v(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)c.x=y/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new tl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var sl=class extends Tt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Me=class extends wn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cp,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rn=class extends Me{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Aa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function pM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Gf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Ep(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ki=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sh=class extends Ki{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:er,endingEnd:er}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case tr:r=e,a=2*t-n;break;case Da:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tr:o=e,l=2*n-t;break;case Da:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let P=0;P!==a;++P)r[P]=p*o[u+P]+v*o[c+P]+y*o[l+P]+_*o[h+P];return r}},rl=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Th=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fr:t=this.InterpolantFactoryMethodDiscrete;break;case pr:t=this.InterpolantFactoryMethodLinear;break;case Fl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return pr;case this.InterpolantFactoryMethodSmooth:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&pM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=pr;var ji=class extends On{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=fr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends On{};ol.prototype.ValueTypeName="color";var Ci=class extends On{};Ci.prototype.ValueTypeName="number";var wh=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Nt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ii=class extends On{InterpolantFactoryMethodLinear(e){return new wh(this.times,this.values,this.getValueSize(),e)}};Ii.prototype.ValueTypeName="quaternion";Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends On{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=fr;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends On{};Pi.prototype.ValueTypeName="vector";var Jn=class{constructor(e="",t=-1,n=[],s=Zh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Un(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(xM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(On.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=mM(l);l=Gf(l,1,u),c=Gf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ci(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,x){if(f.length!==0){let m=[],p=[];Ep(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){let y=d[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}s.push(new Ci(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(Pi,f+".position",d,"pos",s),n(Ii,f+".quaternion",d,"rot",s),n(Pi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function gM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ci;case"vector":case"vector2":case"vector3":case"vector4":return Pi;case"color":return ol;case"quaternion":return Ii;case"bool":case"boolean":return ji;case"string":return $i}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function xM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=gM(i.type);if(i.times===void 0){let t=[],n=[];Ep(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Wi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ah=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},_M=new Ah,Li=class{constructor(e){this.manager=e!==void 0?e:_M,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Li.DEFAULT_MATERIAL_NAME="__DEFAULT";var Mi={},Rh=class extends Error{constructor(e,t){super(e),this.response=t}},Po=class extends Li{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:s});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Mi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){v();function v(){h.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let b=0,R=u.length;b<R;b++){let I=u[b];I.onProgress&&I.onProgress(P)}p.enqueue(_),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Rh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Wi.add(e,c);let u=Mi[e];delete Mi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ch=class extends Li{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=po("img");function l(){u(),Wi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var al=class extends Li{constructor(e){super(e)}load(e,t,n,s){let r=new $t,o=new Ch(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Er=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Lo=class extends Er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},mc=new Ke,Wf=new C,Xf=new C,Do=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wf),Xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xf),t.updateMatrixWorld(),mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ih=class extends Do{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=mr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Di=class extends Er{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ih}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},qf=new Ke,no=new C,gc=new C,Ph=class extends Do{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),n.position.copy(no),gc.copy(n.position),gc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(gc),n.updateMatrixWorld(),s.makeTranslation(-no.x,-no.y,-no.z),qf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qf)}},vn=class extends Er{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ph}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Lh=class extends Do{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends Er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Lh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Zi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ll=class extends Li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Wi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Wi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(e,l),r.manager.itemStart(e)}};var br=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Yf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Yf(){return performance.now()}var Dh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Nt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Nt.multiplyQuaternionsFlat(e,o,e,t,e,n),Nt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},tu="\\[\\]\\.:\\/",vM=new RegExp("["+tu+"]","g"),nu="[^"+tu+"]",yM="[^"+tu.replace("\\.","")+"]",MM=/((?:WC+[\/:])*)/.source.replace("WC",nu),EM=/(WCOD+)?/.source.replace("WCOD",yM),bM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),SM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),TM=new RegExp("^"+MM+EM+bM+SM+"$"),wM=["material","materials","bones","map"],Uh=class{constructor(e,t,n){let s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vM,"")}static parseTrackName(e){let t=TM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=Uh;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nh=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:er,endingEnd:er};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=f0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case m0:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Zh:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===p0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===d0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=tr,s.endingEnd=tr):(e?s.endingStart=this.zeroSlopeAtStart?tr:er:s.endingStart=Da,t?s.endingEnd=this.zeroSlopeAtEnd?tr:er:s.endingEnd=Da)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},AM=new Float32Array(1),Cn=class extends Ai{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;g=new Dh(Mt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new rl(new Float32Array(2),new Float32Array(2),1,AM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Jn.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Zh),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Nh(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Jn.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Kf=new Ke,cl=class{constructor(e,t,n=0,s=1/0){this.ray=new Ms(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kf),this}intersectObject(e,t=!0,n=[]){return Fh(e,this,n,t),n.sort(jf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fh(e[s],this,n,t);return n.sort(jf),n}};function jf(i,e){return i.distance-e.distance}function Fh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Fh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);function iu(i,e){if(e===lp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Uo||e===ul){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Uo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Ar=class extends Li{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Su(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Zi.extractUrlBase(e);o=Zi.resolveURL(c,this.path)}else o=Zi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Po(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ap){try{o[rt.KHR_BINARY_GLTF]=new Tu(e)}catch(h){s&&s(h);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Lu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case rt.KHR_MATERIALS_UNLIT:o[h]=new lu;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[h]=new wu(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[h]=new Au;break;case rt.KHR_MESH_QUANTIZATION:o[h]=new Ru;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function RM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},au=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Re(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ln);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ws(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new vn(u),c.distance=h;break;case"spot":c=new Di(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ui(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},lu=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return Le}extendParams(e,t,n){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ln),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(s)}},cu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},hu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(a,a)}return Promise.all(r)}},uu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},du=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},fu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ln)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,mt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},pu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},mu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],ln),Promise.all(r)}},gu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},xu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],ln),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,mt)),Promise.all(r)}},_u=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},yu=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Mu=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Eu=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},bu=class{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Su=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Bn.TRIANGLES&&c.mode!==Bn.TRIANGLE_STRIP&&c.mode!==Bn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let x=new Ke,m=new C,p=new Nt,v=new C(1,1,1),y=new Xa(g.geometry,g.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&v.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,x.compose(m,p,v));for(let _ in l)if(_==="_COLOR_0"){let P=l[_];y.instanceColor=new Es(P.array,P.itemSize,P.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);Rt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Ap="glTF",Fo=12,bp={JSON:1313821514,BIN:5130562},Tu=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Fo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ap)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Fo,r=new DataView(e,Fo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===bp.JSON){let c=new Uint8Array(e,Fo+o,a);this.content=n.decode(c)}else if(l===bp.BIN){let c=Fo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},wu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Iu[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Iu[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=wr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(f)},a,c,ln,d)})})}},Au=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ru=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},gl=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,v=1-m,y=p-d+h;for(let _=0;_!==a;_++){let P=o[x+_+a],b=o[x+_+l]*u,R=o[g+_+a],I=o[g+_]*u;r[_]=v*P+y*b+m*R+p*I}return r}},CM=new Nt,Cu=class extends gl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return CM.fromArray(r).normalize().toArray(r),r}},Bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sp={9728:jt,9729:on,9984:Gh,9985:ro,9986:Qs,9987:ri},Tp={33071:bi,33648:uo,10497:jn},su={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Iu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},IM={CUBICSPLINE:void 0,LINEAR:pr,STEP:fr},ru={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function PM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Me({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),i.DefaultMaterial}function As(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ui(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function LM(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function DM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function UM(i){let e,t=i.extensions&&i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ou(t.attributes):e=i.indices+":"+ou(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ou(i.targets[n]);return e}function ou(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Pu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function NM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var FM=new Ke,Lu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new RM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new al(this.options.manager):this.textureLoader=new ll(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Po(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return As(r,a,s),Ui(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Zi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=su[s.type],a=wr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ft(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=su[s.type],c=wr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==h){let p=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,y=t.cache.get(v);y||(x=new c(a,p*f,s.count*f/u),y=new vo(x,f/u),t.cache.add(v,y)),m=new yo(y,l,d%f/u,g)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new Ft(x,l,g);if(s.sparse!==void 0){let p=su.SCALAR,v=wr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,P=new v(o[1],y,s.sparse.count*p),b=new c(o[2],_,s.sparse.count*l);a!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,I=P.length;R<I;R++){let S=P[R];if(m.setX(S,b[R*l]),l>=2&&m.setY(S,b[R*l+1]),l>=3&&m.setZ(S,b[R*l+2]),l>=4&&m.setW(S,b[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Sp[d.magFilter]||on,u.minFilter=Sp[d.minFilter]||ri,u.wrapS=Tp[d.wrapS]||jn,u.wrapT=Tp[d.wrapT]||jn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==jt&&u.minFilter!==on,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new $t(x);m.needsUpdate=!0,d(m)}),t.load(Zi.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ui(h,o),h.userData.mimeType=o.mimeType||NM(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new bs,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Eo,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Me}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){let h=s[rt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ln),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,mt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=It);let u=r.alphaMode||ru.OPAQUE;if(u===ru.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ru.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Le&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Le&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Le){let h=r.emissiveFactor;a.emissive=new Re().setRGB(h[0],h[1],h[2],ln)}return r.emissiveTexture!==void 0&&o!==Le&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,mt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Ui(h,r),t.associations.set(h,{materials:e}),r.extensions&&As(s,h,r),h})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return wp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=UM(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=wp(new Ct,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?PM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],m=o[f],p,v=c[f];if(m.mode===Bn.TRIANGLES||m.mode===Bn.TRIANGLE_STRIP||m.mode===Bn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new xr(x,v):new K(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Bn.TRIANGLE_STRIP?p.geometry=iu(p.geometry,ul):m.mode===Bn.TRIANGLE_FAN&&(p.geometry=iu(p.geometry,Uo));else if(m.mode===Bn.LINES)p=new Ka(x,v);else if(m.mode===Bn.LINE_STRIP)p=new vr(x,v);else if(m.mode===Bn.LINE_LOOP)p=new ja(x,v);else if(m.mode===Bn.POINTS)p=new yr(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&DM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ui(p,r),m.extensions&&As(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&As(s,h[0],r),h[0];let d=new $e;r.extensions&&As(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(fl.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Yi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ui(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new _r(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let v=0,y=d.length;v<y;v++){let _=d[v],P=f[v],b=g[v],R=x[v],I=m[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let S=n._createAnimationTracks(_,P,b,R,I);if(S)for(let E=0;E<S.length;E++)p.push(S[E])}return new Jn(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,FM)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Mo:c.length>1?u=new $e:c.length===1?u=c[0]:u=new Rt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ui(u,r),r.extensions&&As(n,u,r),r.matrix!==void 0){let h=new Ke;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new $e;n.name&&(r.name=s.createUniqueName(n.name)),Ui(r,n),n.extensions&&As(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof wn||d instanceof $t)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Ji[r.path]===Ji.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Ji[r.path]){case Ji.weights:c=Ci;break;case Ji.rotation:c=Ii;break;case Ji.position:case Ji.scale:c=Pi;break;default:switch(n.itemSize){case 1:c=Ci;break;case 2:case 3:default:c=Pi;break}break}let u=s.interpolation!==void 0?IM[s.interpolation]:pr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Ji[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Pu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ii?Cu:gl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function OM(i,e,t){let n=e.attributes,s=new an;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){let u=Pu(wr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,l=new C;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Pu(wr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Sn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function wp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Iu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return st.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Ui(i,e),OM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?LM(i,e.targets,t):i})}function Oo(i){let e=new Map,t=new Map,n=i.clone();return Rp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Rp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Rp(i.children[n],e.children[n],t)}var xl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},BM=new Yi(-1,1,1,-1,0,1),Du=class extends Ct{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}},kM=new Du,Qn=class{constructor(e){this._mesh=new K(kM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,BM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var _l=class extends pn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ai.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Qn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Bo=class extends pn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},vl=class extends pn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Rr=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new Ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _l(xl),this.copyPass.material.blending=oi,this.clock=new br}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bo!==void 0&&(o instanceof Bo?n=!0:o instanceof vl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Cr=class extends pn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Ip={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ir=class i extends pn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ht(r,o,{type:fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ht(r,o,{type:fn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ht(r,o,{type:fn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Ip;this.highPassUniforms=ai.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=xl;this.copyUniforms=ai.clone(u.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Kn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new Le,this.fsQuad=new Qn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Tt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ir.BlurDirectionX=new ce(1,0);Ir.BlurDirectionY=new ce(0,1);var Pp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Pr=class extends pn{constructor(){super();let e=Pp;this.uniforms=ai.clone(e.uniforms),this.material=new sl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Qn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ko=class i extends K{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Dt;let n=this,s=t.color!==void 0?new Re(t.color):new Re(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Xn,h=new C,d=new C,f=new C,g=new Ke,x=new C(0,0,-1),m=new lt,p=new C,v=new C,y=new lt,_=new Ke,P=this.camera,b=new Ht(r,o,{samples:c,type:fn}),R=new Tt({name:l.name!==void 0?l.name:"unspecified",uniforms:ai.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});R.uniforms.tDiffuse.value=b.texture,R.uniforms.color.value=s,R.uniforms.textureMatrix.value=_,this.material=R,this.onBeforeRender=function(I,S,E){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(E.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(d,f),p.dot(h)>0)return;p.reflect(h).negate(),p.add(d),g.extractRotation(E.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(f),v.subVectors(d,x),v.reflect(h).negate(),v.add(d),P.position.copy(p),P.up.set(0,1,0),P.up.applyMatrix4(g),P.up.reflect(h),P.lookAt(v),P.far=E.far,P.updateMatrixWorld(),P.projectionMatrix.copy(E.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(P.projectionMatrix),_.multiply(P.matrixWorldInverse),_.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(P.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let D=P.projectionMatrix;y.x=(Math.sign(m.x)+D.elements[8])/D.elements[0],y.y=(Math.sign(m.y)+D.elements[9])/D.elements[5],y.z=-1,y.w=(1+D.elements[10])/D.elements[14],m.multiplyScalar(2/m.dot(y)),D.elements[2]=m.x,D.elements[6]=m.y,D.elements[10]=m.z+1-a,D.elements[14]=m.w,n.visible=!1;let W=I.getRenderTarget(),L=I.xr.enabled,O=I.shadowMap.autoUpdate;I.xr.enabled=!1,I.shadowMap.autoUpdate=!1,I.setRenderTarget(b),I.state.buffers.depth.setMask(!0),I.autoClear===!1&&I.clear(),I.render(S,P),I.xr.enabled=L,I.shadowMap.autoUpdate=O,I.setRenderTarget(W);let z=E.viewport;z!==void 0&&I.state.viewport(z),n.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}};ko.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Lr=[{id:"lsd",name:"LSD",col:"#ff2fb0",verb:"nehmen",kind:"tab",msg:"\u{1F308} LSD \u2013 die Welt f\xE4ngt an zu flie\xDFen \u2026"},{id:"spd",name:"SPEED",col:"#ffe22f",verb:"ziehen",kind:"line",msg:"\u26A1 SPEED \u2013 Puls auf 180!"},{id:"coke",name:"KOKAIN",col:"#bfe9ff",verb:"ziehen",kind:"line",msg:"\u2744\uFE0F KOKAIN \u2013 alles glitzert und ist superhell"},{id:"ket",name:"KETAMIN",col:"#9a7dff",verb:"ziehen",kind:"line",msg:"\u{1F300} KETAMIN \u2013 ab ins K-Hole \u2026"},{id:"beer",name:"BIER",col:"#ffb02f",verb:"trinken",kind:"beer",msg:"\u{1F37A} BIER \u2013 Prost! Alles schwankt ein bisschen"}],Ho=240,Lp=8,Uu=120,HM=.4,zM=3.2,VM=300,yl=10,Dp="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",GM=`
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
}`,Nu=class extends pn{constructor(){super(),this.u={tDiffuse:{value:null},tPrev:{value:null},t:{value:0},res:{value:new ce(1,1)},lsd:{value:0},spd:{value:0},coke:{value:0},ket:{value:0},beer:{value:0}},this.q=new Qn(new Tt({uniforms:this.u,vertexShader:Dp,fragmentShader:GM,depthTest:!1,depthWrite:!1})),this.cu={tDiffuse:{value:null}},this.cq=new Qn(new Tt({uniforms:this.cu,vertexShader:Dp,fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ gl_FragColor = texture2D(tDiffuse, vUv); }",depthTest:!1,depthWrite:!1}));let e={type:fn};this.a=new Ht(1,1,e),this.b=new Ht(1,1,e),this.fresh=!0}setSize(e,t){this.a.setSize(e,t),this.b.setSize(e,t),this.u.res.value.set(e,t),this.fresh=!0}render(e,t,n){this.u.tDiffuse.value=n.texture,this.u.tPrev.value=this.fresh?n.texture:this.b.texture,this.fresh=!1,e.setRenderTarget(this.a),this.q.render(e),this.cu.tDiffuse.value=this.a.texture,e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(),this.cq.render(e);let s=this.a;this.a=this.b,this.b=s}};function Up(i){let{scene:e,camera:t,renderer:n,portals:s,me:r,textPlane:o,toast:a,net:l}=i,c=i.R_WALL,u=i.ARC,h=s.length,d=i.PR,f=[],g=new Le({color:16054015}),x=(()=>{let B=document.createElement("canvas");B.width=B.height=64;let H=B.getContext("2d");for(let xe=0;xe<64;xe+=8)for(let $=0;$<64;$+=8)H.fillStyle=`hsl(${($*5+xe*7)%360},100%,55%)`,H.fillRect($,xe,8,8);H.fillStyle="#fff",H.font="bold 40px Arial",H.textAlign="center",H.fillText("\u263A",32,46);let T=new An(B);return T.colorSpace=mt,T})(),m=new Le({map:x}),p=new Me({color:5910021,roughness:.15,metalness:.3,emissive:2757120,transparent:!0,opacity:.92}),v=new Le({color:16765802}),y=new Me({color:1381660,roughness:.25,metalness:.7}),_=new Me({color:11187400,roughness:.05,metalness:1,emissive:1711914});s.forEach((B,H)=>{let T=Lr[H%Lr.length],xe=new Re(T.col),$=new $e;$.position.copy(B.pos),$.lookAt(0,0,0),e.add($);let ue=-1.98,U=.95,j=(te,ee,ye,he,Ee,Xe,fe)=>{let Ae=new K(new Ge(te,ee,ye),fe);return Ae.position.set(he,Ee,Xe),$.add(Ae),Ae};j(1.6,.05,.55,0,U,ue,new Me({color:1381660,roughness:.25,metalness:.7,emissive:xe.clone().multiplyScalar(.22)}));let X=new K(new Ut(.035,10,8),new Le({color:xe,toneMapped:!1}));X.position.set(-.7,1.55,ue-.2),$.add(X);for(let te of[-.72,.72])for(let ee of[-.22,.22])j(.05,U,.05,te,U/2,ue+ee,y);j(1.6,.025,.025,0,U-.03,ue+.28,new Le({color:xe,toneMapped:!1}));let w=o([{t:T.name,size:120,c:T.col,font:'Impact, "Arial Black", sans-serif',weight:400,glow:T.col}],{w:768,h:170,pw:1.3});w.position.set(0,1.85,ue-.24),$.add(w),T.kind!=="beer"&&j(.95,.012,.36,0,U+.031,ue,_);let M=[];for(let te=0;te<yl;te++){let ee=T.kind==="line"?-.36+te*.08:-.32+te%5*.16,ye=T.kind==="line"?0:te<5?-.08:.08,he;if(T.kind==="line")he=new K(new Ge(.016,.007,.24),T.id==="spd"?new Le({color:16773576}):T.id==="ket"?new Le({color:15131391}):g),he.position.set(ee,U+.041,ue);else if(T.kind==="tab")he=new K(new Ge(.07,.003,.07),m),he.position.set(ee,U+.039,ue+ye),he.rotation.y=(te%5-2)*.2;else{he=new $e;let Ee=new K(new ot(.032,.032,.17,14),p);Ee.position.y=.085,he.add(Ee);let Xe=new K(new ot(.012,.03,.08,12),p);Xe.position.y=.21,he.add(Xe);let fe=new K(new ot(.0325,.0325,.06,14,1,!0),v);fe.position.y=.08,he.add(fe),he.position.set(ee+(te<5?0:.05),U+.025,ue+ye*1.2)}$.add(he),M.push(he)}if(T.kind==="line"){let te=new K(new ot(.008,.008,.13,10),new Le({color:9421962}));te.rotation.z=Math.PI/2,te.position.set(.38,U+.045,ue+.1),$.add(te)}let N=new K(new Ge(.95,.35,.5),new Le({transparent:!0,opacity:0,depthWrite:!1}));N.position.set(-.05,U+.15,ue),$.add(N);let Z={i:H,P:B,D:T,units:M,left:new Array(yl).fill(!0),takenAt:new Array(yl).fill(0),hit:N,aim:{secret:!0,table:H}};if(N.userData.aim=Z.aim,H===h-1){let te=new $e;te.position.set(.6,U+.03,ue),$.add(te);let ee=new K(new Ge(.3,.01,.16),new Le({color:16777215}));te.add(ee);let ye=new Le({color:14688288}),he=new K(new Ge(.05,.002,.016),ye);he.position.set(-.11,.006,.05),te.add(he);let Ee=he.clone();Ee.rotation.y=Math.PI/2,te.add(Ee);let Xe=new K(new ot(.017,.017,.15,14),new Le({color:3800968,toneMapped:!1,transparent:!0,opacity:.85}));Xe.rotation.z=Math.PI/2,Xe.position.set(.02,.025,0),te.add(Xe);let fe=new K(new ot(.002,.002,.07,6),new Le({color:14540253}));fe.rotation.z=Math.PI/2,fe.position.set(.13,.025,0),te.add(fe);let Ae=new K(new ot(.012,.012,.06,10),new Le({color:15658734}));Ae.rotation.z=Math.PI/2,Ae.position.set(-.08,.025,0),te.add(Ae);let Ve=o([{t:"GEGENMITTEL",size:90,c:"#39ff88",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"#39ff88"}],{w:768,h:140,pw:.7});Ve.position.set(.6,1.33,ue-.24),$.add(Ve);let We=new K(new Ge(.34,.25,.3),N.material);We.position.set(.6,U+.1,ue),$.add(We),Z.antiHit=We,We.userData.aim={secret:!0,anti:!0,table:H}}f.push(Z)});let P=[];for(let B=-1;B<h;B++){let H=(B+.5-(h-1)/2)*u;P.push(new C(Math.sin(H)*(c-.6),0,-Math.cos(H)*(c-.6)))}function b(B){for(let H of P){let T=B.x-H.x,xe=B.z-H.z,$=Math.hypot(T,xe),ue=.62+d;$<ue&&$>1e-4&&(B.x=H.x+T/$*ue,B.z=H.z+xe/$*ue)}for(let H of f){let T=H.P,xe=B.x-T.pos.x,$=B.z-T.pos.z,ue=xe*T.n.x+$*T.n.z,U=xe*T.t.x+$*T.t.z,j=-1.7+d;if(Math.abs(U)<.8+d&&ue<j&&ue>-2.6){let X=j-ue;B.x+=T.n.x*X,B.z+=T.n.z*X}}}let R=B=>{let H=B.P;return(r.pos.x-H.pos.x)*H.n.x+(r.pos.z-H.pos.z)*H.n.z<-.35},I=Lr.map(()=>({doses:[],end:0})),S={lsd:0,spd:0,coke:0,ket:0,beer:0},E=0,D=()=>performance.now()/1e3,W=B=>{if(B<0||B>=Ho)return 0;if(B<Lp){let T=B/Lp;return T*T*(3-2*T)}if(B<Uu)return 1;let H=(B-Uu)/(Ho-Uu);return 1-H*H*(3-2*H)};function L(B,H){let T=I[B];T.doses=T.doses.filter($=>H-$<Ho);let xe=0;for(let $ of T.doses)xe+=HM*W(H-$);return Math.min(zM,xe)}function O(B){let H=D(),T=I[B];T.doses.push(H),T.end=H+Ho;let xe=T.doses.filter($=>H-$<Ho).length;a(Lr[B].msg+(xe>1?` (${xe}. Dosis \u2013 st\xE4rker!)`:" (ca. 4 Minuten)"))}function z(){let B=D(),H=!1;for(let T of I)T.end>B&&(H=!0),T.end=0,T.doses=[];E=D(),a(H?"\u{1F489} Gegenmittel \u2013 alles wieder klar im Kopf":"\u{1F489} Gegenmittel \u2013 du warst eh n\xFCchtern \u{1F604}")}let F=()=>f.map(B=>B.left.reduce((H,T,xe)=>H|(T?1<<xe:0),0));function re(B){f.forEach((H,T)=>{let xe=B[T]|0;H.left=H.units.map(($,ue)=>!!(xe&1<<ue)),H.units.forEach(($,ue)=>$.visible=H.left[ue])})}function q(){if(l.role!=="host")return;let B={t:"dg",s:F()};for(let H of l.conns.values())try{H.conn.send(B)}catch{}}function de(B,H){let T=f[B];return!T||!T.left[H]?!1:(T.left[H]=!1,T.takenAt[H]=D(),T.units[H].visible=!1,!0)}function me(B){let H=f[B.table];if(!H||!R(H))return;if(B.anti){z();return}let T=H.left.indexOf(!0);if(T<0){a(H.D.name+" ist leer \u2013 kommt in ein paar Minuten wieder");return}if(de(B.table,T),O(B.table%Lr.length),l.role==="client"&&l.conn)try{l.conn.send({t:"dg1",i:B.table,k:T})}catch{}else q()}let ae=0;function De(B){if(l.role==="client"||(ae+=B)<2)return;ae=0;let H=D(),T=!1;for(let xe of f)xe.left.forEach(($,ue)=>{!$&&H-xe.takenAt[ue]>VM&&(xe.left[ue]=!0,xe.units[ue].visible=!0,T=!0)});T&&q()}let qe=new Nu;qe.enabled=!1;let ne=null;if(i.composer){let B=i.composer.passes;i.composer.insertPass(qe,Math.max(1,B.length-1))}function ge(){if(ne)return ne;ne=new Rr(n),ne.addPass(new Cr(e,t)),ne.addPass(qe),ne.addPass(new Pr);let B=()=>ne.setSize(window.innerWidth,window.innerHeight);return window.addEventListener("resize",B),B(),ne}let Y=document.createElement("div");Y.id="tripHud",Y.style.cssText='position:fixed;left:16px;bottom:64px;z-index:20;font:600 14px "Segoe UI",system-ui,sans-serif;color:#fff;text-shadow:0 1px 4px #000;pointer-events:none;display:flex;flex-direction:column;gap:4px',document.body.appendChild(Y);let se=0,_e=document.createElement("div");_e.style.cssText="position:fixed;inset:0;background:#e8fff0;opacity:0;pointer-events:none;z-index:19",document.body.appendChild(_e);let we=t.fov,be=!1;function Ye(B,H){De(B);let T=D();S.lsd=L(0,T),S.spd=L(1,T),S.coke=L(2,T),S.ket=L(3,T),S.beer=L(4,T),be=S.lsd+S.spd+S.coke+S.ket+S.beer>.002,qe.enabled=be;for(let U in S)qe.u[U].value=S[U];qe.u.t.value=H,be||(qe.fresh=!0);let $={};for(let U in S)$[U]=Math.min(1.6,S[U]);let ue=we+$.coke*14+$.spd*10-$.ket*12+$.lsd*8*Math.sin(H*.5)+$.beer*3*Math.sin(H*.7);if(Math.abs(t.fov-ue)>.01&&(t.fov=ue,t.updateProjectionMatrix()),be&&(t.rotation.z+=$.beer*.09*Math.sin(H*.8)+$.ket*.22*Math.sin(H*.23)+$.lsd*.06*Math.sin(H*.6),t.rotation.x+=$.beer*.035*Math.sin(H*1.1)+$.ket*.05*Math.sin(H*.31),t.rotation.y+=$.beer*.045*Math.sin(H*.55),t.position.y+=$.spd*.02*Math.sin(H*40)+$.coke*.008*Math.sin(H*33)),i.bloom&&(i.bloom.strength=.42+Math.min(1.2,$.coke*.7+$.lsd*.5+$.spd*.25)),E>0){let U=Math.max(0,1-(T-E)/1.3);_e.style.opacity=String(U*.85),U<=0&&(E=0)}if((se+=B)>.5){se=0;let U=Lr.map((j,X)=>I[X].end>T?`<span><span style="color:${j.col}">\u25CF</span> ${j.name}${I[X].doses.length>1?" \xD7"+I[X].doses.length:""} ${Math.floor((I[X].end-T)/60)}:${String(Math.floor((I[X].end-T)%60)).padStart(2,"0")}</span>`:"").filter(Boolean);Y.innerHTML=U.join("")}}return{collide:b,tick:Ye,use:me,targets:()=>{let B=[];for(let H of f)B.push(H.hit),H.antiHit&&B.push(H.antiHit);return B},prompt(B,H){let T=f[B.table],xe=H?"Tippe auf <kbd>E</kbd>":"<kbd>E</kbd>";if(B.anti)return`<b style="color:#39ff88">\u{1F489} Gegenmittel</b><br><small>${xe} = spritzen (hebt alle Drogen auf)</small>`;let $=T.left.filter(Boolean).length;return`<b style="color:${T.D.col}">${T.D.name}</b> <small>\xB7 ${$} von ${yl} \xFCbrig</small><br><small>${$?xe+" = "+T.D.verb:"leer \u2013 kommt bald wieder"}</small>`},canAim:B=>{let H=f[B.table];return!!H&&R(H)},speedMul:()=>Math.max(.35,1+Math.min(1.6,S.spd)*.7+Math.min(1.6,S.coke)*.35-Math.min(1.6,S.ket)*.55-Math.min(1.6,S.beer)*.15),jumpMul:()=>1+Math.min(1.6,S.spd)*.3+Math.min(1.6,S.coke)*.15-Math.min(1.6,S.ket)*.2,drift:(B,H)=>{let T=Math.min(1.6,S.beer)*1.6*Math.sin(H*.9)+Math.min(1.6,S.ket)*1.2*Math.sin(H*.37);Math.abs(T)>.001&&B.lengthSq()>0&&(B.x+=Math.cos(H*.3)*T,B.z+=Math.sin(H*.3)*T)},render(B){return be?(B?B.render():ge().render(),!0):!1},state:F,setState:re,hostTake(B,H){de(B,H),q()}}}var Bu=[{id:"",name:"Glatze"},{id:"hair_buzzed",name:"Kurz"},{id:"hair_simpleparted",name:"Scheitel"},{id:"hair_long",name:"Lang"},{id:"hair_buns",name:"Dutt"},{id:"hair_buzzedfemale",name:"Kurz (Frau)"}],ku=["Kein Oberteil","T-Shirt","Langarm","Tanktop"],Hu=["Keine Hose","Shorts","Lange Hose"],zu=["Barfu\xDF","Schuhe"],mn=["#ff2fb0","#20e0ff","#ffe22f","#39ff88","#8a2fff","#ff6a1a","#f2f2f2","#1b1c22","#d81c1c","#2f5dff","#6b4a2e","#7a7f88"],Vu=["#2a1d15","#5a3b22","#a8743c","#e8c46a","#0d0d0d","#b8452a","#ff2fb0","#e8e8e8"],Qi=[{id:"",name:"Klassisch",kind:"Eigene Frisur & Kleidung"},{id:"remy",name:"Remy",kind:"Realistisch",top:1,parts:[["Oberteil",/^Tops/],["Hose",/^Bottoms/],["Schuhe",/^Shoes/],["Haare",/^Hair/]]},{id:"ch31",name:"Leo",kind:"Realistisch",top:1,parts:[["Pullover",/Sweater|Collar/],["Hose",/Pants/],["Schuhe",/Shoes/],["Haare",/Hair/]]},{id:"ch37",name:"Jody",kind:"Realistisch",top:1,parts:[["Shirt",/Shirt|Zipper/],["Hose",/Pants/],["Schuhe",/Sneakers/],["Haare",/Hair/]]},{id:"ch03",name:"Michelle",kind:"Realistisch"},{id:"soldier",name:"Soldat",kind:"Realistisch"},{id:"swat",name:"SWAT",kind:"Realistisch"},{id:"ch46",name:"Amy",kind:"Comic"},{id:"claire",name:"Claire",kind:"Comic"},{id:"kaya",name:"Rasta",kind:"Comic"},{id:"vegas",name:"Elvis",kind:"Comic"},{id:"ch43",name:"Wrestler",kind:"Comic"},{id:"ch14",name:"Fuchs",kind:"Comic"},{id:"tekmek",name:"TekMek",kind:"Realistisch",classic:1},{id:"ty",name:"Ty",kind:"Comic",top:1,parts:[["Pullover",/UpperBody/],["Hose",/LowerBody/],["Schuhe",/Shoes/],["Haare",/Hair/]]},{id:"granny",name:"Fitness-Oma",kind:"Comic"},{id:"mremireh",name:"Schuhkopf",kind:"Comic"},{id:"ch34",name:"Kobold",kind:"Comic"},{id:"pirate",name:"Pirat",kind:"Comic"},{id:"ch35",name:"Gasmaske",kind:"Realistisch"},{id:"xbot",name:"Roboter",kind:"Comic",parts:[["K\xF6rper",/Beta_Surface|Surface/],["Gelenke",/Joints/]]}],Gu=["Keine","Basecap","M\xFCtze","Hut"],Wu=["Keine","Sonnenbrille","Party-Brille"],Dr={b:"m",s:0,h:"hair_simpleparted",hc:"#2a1d15",beard:0,top:0,tc:"#ff2fb0",bot:0,bc:"#1b1c22",sh:0,shc:"#f2f2f2",ch:"",p:["","","",""],cap:0,capc:"#1b1c22",gl:0,chain:0,bag:0,bagc:"#ff2fb0",spk:0},Vp=[[],[1,2],[1,2,3],[1]],Gp=[[],[4,5],[4,5,6]],Wp=[[],[7]];function gn(i){let e=Object.assign({},Dr,i||{});e.b=e.b==="f"?"f":"m",e.s=e.s?1:0,Bu.some(t=>t.id===e.h)||(e.h=Dr.h);for(let t of["top","bot","sh"])e[t]=Math.max(0,Math.min(t==="top"?3:t==="bot"?2:1,e[t]|0));for(let t of["hc","tc","bc","shc"])/^#[0-9a-f]{6}$/i.test(e[t]||"")||(e[t]=Dr[t]);e.beard=e.beard&&e.b==="m"?1:0,Qi.some(t=>t.id===e.ch)||(e.ch=""),e.p=[0,1,2,3].map(t=>Array.isArray(e.p)&&/^#[0-9a-f]{6}$/i.test(e.p[t]||"")?e.p[t]:""),e.cap=Math.max(0,Math.min(Gu.length-1,e.cap|0)),e.gl=Math.max(0,Math.min(Wu.length-1,e.gl|0)),e.chain=e.chain?1:0,e.bag=e.bag?1:0,e.spk=e.spk?1:0;for(let t of["capc","bagc"])/^#[0-9a-f]{6}$/i.test(e[t]||"")||(e[t]=Dr[t]);return e}function Xp(i=Math.random,e=!0,t=!0){let n=i()<.5?"m":"f",s=a=>a[Math.floor(i()*a.length)],r=n==="m"?["hair_buzzed","hair_simpleparted","hair_long","","hair_buzzed"]:["hair_long","hair_buns","hair_buzzedfemale","hair_long","hair_simpleparted"],o={b:n,s:i()<.4?1:0,h:s(r),hc:s(Vu),beard:n==="m"&&i()<.35?1:0,top:e?1+Math.floor(i()*3):0,tc:s(mn),bot:e?1+Math.floor(i()*2):0,bc:s(["#1b1c22","#23314f","#3a2e22","#4a4f58","#111111","#6b4a2e"]),sh:e?1:0,shc:s(["#f2f2f2","#111111","#ff2fb0","#20e0ff"])};return e&&(i()<.18&&(o.cap=1+Math.floor(i()*3),o.capc=s(mn)),i()<.15&&(o.gl=1+Math.floor(i()*2)),i()<.12&&(o.chain=1)),e&&t&&i()<.35&&(o.ch=s(["remy","ch31","ch37","ch03","ch46","claire","kaya","vegas","ch43","ch14","ty","granny","mremireh","ch34","pirate","ch35","tekmek"])),o}async function qp(i="/System/figuren/"){let e=new Ar,t=p=>new Promise((v,y)=>{let _=new Image;_.onload=()=>v(_),_.onerror=y,_.src=i+p}),[n,s,...r]=await Promise.all([e.loadAsync(i+"mann.gltf"),e.loadAsync(i+"frau.gltf"),...["hair_buzzed","hair_simpleparted","hair_long","hair_buns","hair_buzzedfemale","hair_beard"].map(p=>e.loadAsync(i+p+".gltf"))]),[o,a,l,c,u,h]=await Promise.all(["m_skin0.jpg","m_skin1.jpg","f_skin0.jpg","f_skin1.jpg","m_mask.png","f_mask.png"].map(t)),d=p=>{let v=document.createElement("canvas");v.width=p.width,v.height=p.height;let y=v.getContext("2d");return y.drawImage(p,0,0),y.getImageData(0,0,v.width,v.height)},f={};["hair_buzzed","hair_simpleparted","hair_long","hair_buns","hair_buzzedfemale","hair_beard"].forEach((p,v)=>f[p]=r[v]);let g=new an().setFromObject(n.scene),x=1.8/(g.max.y-g.min.y),m={body:{m:n,f:s},hair:f,skins:{m:[d(o),d(a)],f:[d(l),d(c)]},masks:{m:d(u),f:d(h)},scale:x,tex:new Map,mats:new Map};try{let p=i+"mx/",v=await e.loadAsync(p+"anims.glb"),y=v.scene.getObjectByName("mixamorigHips"),_=m.mx={base:p,L:e,clips:{},xHip:y?y.position.length():1,chars:{xbot:v},wait:{},cache:new Map};for(let b of v.animations)_.clips[b.name]=b;let P=(()=>{try{return(JSON.parse(localStorage.getItem("operation-hias")||"{}").look||{}).ch||""}catch{return""}})();for(let b of Qi)b.id&&b.id!=="xbot"&&!b.classic&&zo(m,b.id);P&&_.wait[P]&&await Promise.race([_.wait[P],new Promise(b=>setTimeout(b,9e3))])}catch(p){console.warn("Neue Figuren fehlen",p)}return m}var Yp=new Set(["tekmek"]);var WM={b:"m",h:"hair_long",hc:"#2b1d12",beard:1,dreads:1};function zo(i,e){if(Yp.has(e))return Promise.resolve(null);let t=i&&i.mx;return!t||!e?Promise.resolve(null):t.chars[e]?Promise.resolve(t.chars[e]):(t.wait[e]||(t.wait[e]=t.L.loadAsync(t.base+e+".glb").then(n=>(n.scene.traverse(s=>{let r=s.material?Array.isArray(s.material)?s.material:[s.material]:[];for(let o of r)o.metalness>.15&&(o.metalness=.15,o.needsUpdate=!0)}),t.chars[e]=n)).catch(n=>(console.warn("Figur fehlt",e,n),null))),t.wait[e])}var Ur=(i,e)=>!e||Yp.has(e)||!!(i&&i.mx&&i.mx.chars[e]);function XM(i,e){let t=[e.b,e.s,e.top,e.tc,e.bot,e.bc,e.sh,e.shc].join("|");if(i.tex.has(t))return i.tex.get(t);let n=i.skins[e.b][e.s],s=i.masks[e.b],r=n.width,o=n.height,a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c=l.createImageData(r,o),u=c.data,h=n.data,d=s.data,f=new Array(8).fill(null),g=p=>[parseInt(p.slice(1,3),16),parseInt(p.slice(3,5),16),parseInt(p.slice(5,7),16)];for(let p of Vp[e.top])f[p]=g(e.tc);for(let p of Gp[e.bot])f[p]=g(e.bc);for(let p of Wp[e.sh])f[p]=g(e.shc);let x=s.width/r;for(let p=0;p<o;p++)for(let v=0;v<r;v++){let y=(p*r+v)*4,_=(Math.floor(p*x)*s.width+Math.floor(v*x))*4,P=Math.round(d[_]/30),b=f[P];if(b){let R=(h[y]+h[y+1]+h[y+2])/765,I=.62+R*.55;u[y]=Math.min(255,b[0]*I),u[y+1]=Math.min(255,b[1]*I),u[y+2]=Math.min(255,b[2]*I)}else if(Math.abs(h[y]-h[y+1])<14&&Math.abs(h[y+1]-h[y+2])<14&&h[y]>80){let R=18+(h[y]-80)*.18;u[y]=R,u[y+1]=R,u[y+2]=R+3}else u[y]=h[y],u[y+1]=h[y+1],u[y+2]=h[y+2];u[y+3]=255}l.putImageData(c,0,0);let m=new An(a);return m.flipY=!1,m.colorSpace=mt,m.anisotropy=4,i.tex.set(t,m),m}function Np(i,e,t,n,s){for(let r of e.scene.getObjectsByProperty("isSkinnedMesh",!0)){let o=new Me({map:r.material.map,color:new Re(s).multiplyScalar(2.2),roughness:.75,side:It}),a=new xr(r.geometry,o),l=r.skeleton.bones.map(c=>t[c.name]||t.Head);a.bind(new _r(l,r.skeleton.boneInverses),r.bindMatrix),a.frustumCulled=!1,a.castShadow=!0,n.add(a)}}function Tl(i,e,t=!1){let n=gn(e);if(n.ch==="tekmek"&&(n=Object.assign({},n,WM,{ch:""})),n.ch&&i.mx&&i.mx.chars[n.ch]){n.spk&&(Qi.find(o=>o.id===n.ch)||{}).top&&(n=Object.assign({},n,{p:n.p.slice()}),n.p[0]="#151515");let r=KM(i,n,t);return Fp(r,n,!0),n.spk?bl(r,n.ch):n.print==="burger"&&bl(r,n.ch,Bp()),n.dreads&&kp(r,n,!0),r}n.spk&&(n=Object.assign({},n,{top:1,tc:"#151515"}));let s=qM(i,n,t);return Fp(s,n,!1),n.spk?bl(s,"c"+n.b):n.print==="burger"&&bl(s,"c"+n.b,Bp()),n.dreads&&kp(s,n,!1),s}function qM(i,e,t){let n=Oo(i.body[e.b].scene);n.scale.setScalar(i.scale);let s={};n.traverse(l=>{l.isBone&&(s[l.name]=l)});let r=[],o=null,a=new Re(e.hc).multiplyScalar(2.2);return n.traverse(l=>{if(!(l.isSkinnedMesh||l.isMesh))return;l.frustumCulled=!1,l.castShadow=!0;let c=l.material&&l.material.name||"";if(/Superhero/i.test(c)){o=l.parent;let u="body|"+[e.b,e.s,e.top,e.tc,e.bot,e.bc,e.sh,e.shc].join("|"),h=t&&i.mats.get(u);h||(h=l.material.clone(),h.map=XM(i,e),h.roughness=.62,h.metalness=0,h.needsUpdate=!0,t&&i.mats.set(u,h)),l.material=h,r.push(h)}else/Hair/i.test(c)&&(l.material=l.material.clone(),l.material.color=a.clone())}),o=o||n,e.h&&i.hair[e.h]&&Np(i,i.hair[e.h],s,o,e.hc),e.beard&&i.hair.hair_beard&&Np(i,i.hair.hair_beard,s,o,e.hc),{m:n,bones:s,mats:r,look:e}}var Fu={Head:"mixamorigHead",neck_01:"mixamorigNeck",spine_03:"mixamorigSpine2",spine_02:"mixamorigSpine1",spine_01:"mixamorigSpine",pelvis:"mixamorigHips",hand_r:"mixamorigRightHand",hand_l:"mixamorigLeftHand",foot_r:"mixamorigRightFoot",foot_l:"mixamorigLeftFoot"};function YM(i,e){let t=i.clone();return t.color=new Re(e),t.userData.tint=1,t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
 vec4 sampledDiffuseColor = texture2D( map, vMapUv );
 float lumT = dot( sampledDiffuseColor.rgb, vec3( 0.299, 0.587, 0.114 ) );
 diffuseColor.rgb *= vec3( 0.18 + lumT * 1.5 );
 diffuseColor.a *= sampledDiffuseColor.a;
#endif`)},t.customProgramCacheKey=()=>"tint",t}function KM(i,e,t){let n=i.mx,s=n.chars[e.ch],r=Qi.find(h=>h.id===e.ch)||{},o=Oo(s.scene),a={};o.traverse(h=>{h.isBone&&(a[h.name]=h)});for(let h in Fu)a[Fu[h]]&&(a[h]=a[Fu[h]]);let l=[];o.traverse(h=>{if(!(h.isSkinnedMesh||h.isMesh))return;h.frustumCulled=!1,h.castShadow=!0;let d=(r.parts||[]).findIndex(([,f])=>f.test(h.name)||f.test(h.material&&h.material.name||""));if(d>=0&&e.p[d]){let f=e.ch+"|"+h.name+"|"+e.p[d],g=t&&i.mats.get(f);g||(g=YM(h.material,e.p[d]),t&&i.mats.set(f,g)),h.material=g}h.material&&h.material.map&&(h.material.map.anisotropy=4),l.push(h.material)});let c=a.mixamorigHips;o.userData.mxRig={id:e.ch,ratio:c?c.position.length()/n.xHip:1,mx:n},o.scale.setScalar(1),o.updateMatrixWorld(!0);let u=(a.Head||c||o).getWorldScale(new C).x||1;return{m:o,bones:a,mats:l,look:e,mx:!0,inv:1/u}}var jM=[[/Death/i,"die"],[/Hit/i,"hit"],[/Sprint/i,"sprint"],[/Jog|Run/i,"run"],[/Crouch_Fwd/i,"sneak"],[/Crouch|Fixing|Kneel/i,"crouch"],[/Walk/i,"walk"],[/Jump/i,"jump"],[/Dance/i,"dance"],[/Driv/i,"drive"],[/Sit/i,"sit"],[/Wave/i,"wave"],[/Interact|Push|Punch|PickUp|Spell|Sword/i,"use"]];function $M(i,e){let t=i.id+"|"+e.uuid,n=i.mx.cache.get(t);if(n)return n;let s=i.mx.clips[e.name]?e.name:"idle";if(!i.mx.clips[e.name]){for(let[o,a]of jM)if(o.test(e.name)){s=a;break}}let r=i.mx.clips[s]||i.mx.clips.idle;return n=new Jn(e.name+"@mx",r.duration,r.tracks.filter(o=>o.name.endsWith(".quaternion")||o.name==="mixamorigHips.position").map(o=>{if(o.name!=="mixamorigHips.position")return o;let a=o.clone();for(let l=0;l<a.values.length;l++)a.values[l]*=i.ratio;return a})),n.userData={mx:1},i.mx.cache.set(t,n),n}if(!Cn.prototype.__mxPatch){let i=Cn.prototype.clipAction;Cn.prototype.clipAction=function(e,t,n){let s=t||this._root,r=s&&s.userData&&s.userData.mxRig;return r&&e&&!(e.userData&&e.userData.mx)&&(e=$M(r,typeof e=="string"?Jn.findByName(s,e)||{name:e,uuid:e}:e)),i.call(this,e,t,n)},Cn.prototype.__mxPatch=1}var Ou=new Map,Jt=(i,e={})=>{let t=i+JSON.stringify(e);return Ou.has(t)||Ou.set(t,new Me(Object.assign({color:i,roughness:.6},e))),Ou.get(t)};function Fp(i,e,t){if(!e.cap&&!e.gl&&!e.chain&&!e.bag)return;let n=i.bones,s=n.Head;i.m.updateMatrixWorld(!0);let o=d=>d.getWorldPosition(new C),a=.24;t&&n.mixamorigHeadTop_End&&s&&(a=o(n.mixamorigHeadTop_End).distanceTo(o(s))||.24);let l=(d,f,g)=>{if(!d)return;let x=d.getWorldQuaternion(new Nt),m=d.getWorldScale(new C);f.position.copy(d.worldToLocal(g.clone())),f.quaternion.copy(x.invert().multiply(f.quaternion)),f.scale.divide(m),f.castShadow=!0,d.add(f)},c=()=>{let d=a*.62;return t||(d=.118),d};if(s){let d=o(s),f=c(),g=d.clone().add(new C(0,t?a*.72:.12,t?0:.005));if(e.cap===1){let x=new $e,m=new K(new Ut(f*1.05,18,10,0,Math.PI*2,0,Math.PI/2),Jt(e.capc));m.scale.y=.72,x.add(m);let p=new K(new ot(f*.9,f*.9,f*.06,18,1,!1,-Math.PI/2,Math.PI),Jt(e.capc));p.scale.set(1,1,.75),p.position.set(0,0,f*.55),x.add(p);let v=new K(new Ut(f*.08,8,6),Jt(e.capc));v.position.y=f*.74,x.add(v),l(s,x,g.clone().add(new C(0,-f*.18,0)))}if(e.cap===2){let x=new $e,m=new K(new Ut(f*1.07,18,12,0,Math.PI*2,0,Math.PI*.55),Jt(e.capc,{roughness:.95}));m.scale.y=.95,x.add(m);let p=new K(new Zn(f*1.02,f*.12,8,24),Jt(e.capc,{roughness:.95}));p.rotation.x=Math.PI/2,p.position.y=f*.12,x.add(p);let v=new K(new Ut(f*.25,10,8),Jt("#f2f2f2",{roughness:1}));v.position.y=f*1.05,x.add(v),l(s,x,g.clone().add(new C(0,-f*.32,0)))}if(e.cap===3){let x=new $e,m=new K(new ot(f*.82,f*.98,f*.85,18),Jt(e.capc));m.position.y=f*.42,x.add(m);let p=new K(new ot(f*1.75,f*1.75,f*.06,24),Jt(e.capc));x.add(p);let v=new K(new ot(f*.99,f*.99,f*.18,18,1,!0),Jt("#111111"));v.position.y=f*.12,x.add(v),l(s,x,g.clone().add(new C(0,-f*.08,0)))}if(e.gl){let x=new $e,m=e.gl===1?Jt("#050508",{roughness:.05,metalness:.8}):new Le({color:[16723888,2154751,3800968][(e.capc||"").length%3],toneMapped:!1});for(let v of[-1,1]){let y=new K(e.gl===1?new Ut(f*.34,14,10):new ot(f*.33,f*.33,f*.06,5),m);e.gl===1?y.scale.set(1.15,.8,.35):y.rotation.x=Math.PI/2,y.position.set(v*f*.42,0,0),x.add(y)}let p=new K(new Ge(f*1.6,f*.06,f*.05),Jt("#111111"));p.position.y=f*.1,x.add(p);for(let v of[-1,1]){let y=new K(new Ge(f*.05,f*.05,f*.95),Jt("#111111"));y.position.set(v*f*.82,f*.08,-f*.48),x.add(y)}l(s,x,d.clone().add(new C(0,t?a*.36:.075,t?f*.98:.105)))}}let u=n.neck_01||s,h=n.spine_03;if(e.chain&&u){let d=o(u),f=t?a*.5:.11,g=new K(new Zn(f,f*.07,6,28),Jt("#e8c45a",{metalness:1,roughness:.25}));g.rotation.x=Math.PI/2-.5;let x=new K(new ot(f*.22,f*.22,f*.06,12),Jt("#e8c45a",{metalness:1,roughness:.2}));x.rotation.x=Math.PI/2,x.position.set(0,-f*.95,f*.15);let m=new $e;m.add(g,x),l(u,m,d.clone().add(new C(0,-f*.55,f*.35)))}if(e.bag&&h){let d=o(h),f=t?a*1.1:.24,g=new $e,x=new K(new Ge(f*1.3,f*1.6,f*.6),Jt(e.bagc));g.add(x);let m=new K(new Ge(f*1,f*.6,f*.25),Jt(e.bagc));m.position.set(0,-f*.35,-f*.4),g.add(m);for(let p of[-1,1]){let v=new K(new Ge(f*.12,f*1.7,f*.05),Jt("#151515"));v.position.set(p*f*.42,0,f*.32),g.add(v)}l(h,g,d.clone().add(new C(0,-f*.1,-f*.62)))}}var Ml=null,El=null,Op=new Map,ZM="/SPK%20-%20Fuck%20the%20Police/spiel/assets/spk_logo.png";function JM(){if(El)return El;let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");(()=>{e.clearRect(0,0,256,256),e.fillStyle="#f2f2f2",e.font="900 78px Arial Black, Arial, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("S.P.K",128,128)})(),Ml=new An(i),Ml.colorSpace=mt;try{let n=new Image;n.onload=()=>{e.clearRect(0,0,256,256);let s=Math.min(240/n.width,240/n.height),r=n.width*s,o=n.height*s;e.drawImage(n,128-r/2,128-o/2,r,o),Ml.needsUpdate=!0},n.src=ZM}catch{}return El=new Me({map:Ml,transparent:!0,alphaTest:.05,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),El}function bl(i,e,t){let n=i.m,s=i.bones.spine_03||i.bones.spine_02;if(!s)return;n.updateMatrixWorld(!0);let r=s.getWorldPosition(new C),o=n.getWorldPosition(new C),a=Op.get(e);if(!a){let d=r.y-o.y,f=-1e9,g=1e9,x=-1e9,m=new C;n.traverse(v=>{if(!v.isMesh||!v.geometry||!v.geometry.attributes.position)return;let y=v.geometry.attributes.position,_=Math.max(1,Math.floor(y.count/6e3));for(let P=0;P<y.count;P+=_)m.fromBufferAttribute(y,P).applyMatrix4(v.matrixWorld).sub(o),Math.abs(m.y-d)<.07&&Math.abs(m.x)<.25&&(Math.abs(m.x)<.05&&(f=Math.max(f,m.z)),m.z>0&&(g=Math.min(g,m.x),x=Math.max(x,m.x)))}),f<-1e8&&(f=.12);let p=x>g?x-g:.34;a={z:f,s:Math.max(.1,Math.min(.2,p*.55))},Op.set(e,a)}let l=a.s*(t?1.45:1),c=new K(new ut(l,l),t||JM());c.renderOrder=2;let u=s.getWorldQuaternion(new Nt),h=s.getWorldScale(new C);c.position.copy(s.worldToLocal(new C(o.x,r.y-a.s*(t?.02:.15),o.z+a.z+.018))),c.quaternion.copy(u.invert()),c.scale.divide(h),s.add(c)}var Sl=null;function Bp(){if(Sl)return Sl;let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d"),t=(s,r,o,a=30)=>{e.fillStyle=o,e.beginPath(),e.roundRect(28,s,200,r,a),e.fill()};t(52,46,"#b98a5a",[60,60,12,12]),t(98,12,"#6fae3c",6),t(110,12,"#c8443a",6),t(122,28,"#4a2c1c",10),t(150,10,"#e8c84a",4),t(160,34,"#b98a5a",[8,8,30,30]),e.fillStyle="#f6e8c8";for(let s=0;s<9;s++)e.beginPath(),e.ellipse(60+s*18,66+s%2*8,4,2,.4,0,7),e.fill();e.fillStyle="#c8302a",e.font="bold 22px Arial",e.textAlign="center",e.fillText("DJ TEKMEK",128,228);let n=new An(i);return n.colorSpace=mt,Sl=new Me({map:n,transparent:!0,alphaTest:.05,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),Sl}function kp(i,e,t){let n=i.bones.Head;if(!n)return;i.m.updateMatrixWorld(!0);let s=n.getWorldPosition(new C),r=.24;t&&i.bones.mixamorigHeadTop_End&&(r=i.bones.mixamorigHeadTop_End.getWorldPosition(new C).distanceTo(s)||.24);let o=t?r*.5:.1,a=s.y+(t?r*.45:.07),l=new Me({color:new Re(e.hc||"#2b1d12").multiplyScalar(1.6),roughness:.95}),c=n.getWorldQuaternion(new Nt).invert(),u=n.getWorldScale(new C);for(let h=0;h<16;h++){let d=Math.PI*(.45+h/15*1.1)+Math.sin(h*7.3)*.08,f=h===1||h===14,g=(f?.42:.3)+h*37%10/40,x=new ot(.016,.011,g,5);x.translate(0,-g/2,0);let m=new K(x,l);m.castShadow=!0;let p=new C(s.x+Math.sin(d)*o*1.05,a-Math.abs(Math.cos(d))*.02,s.z+Math.cos(d)*o*1.05);m.position.copy(n.worldToLocal(p.clone()));let v=new Nt().setFromEuler(new Tn(f?-.45:-Math.cos(d)*.25,0,Math.sin(d)*(f?.1:.25)));m.quaternion.copy(c.clone().multiply(v)),m.scale.set(1/u.x,1/u.y,1/u.z),n.add(m)}}var Hp=[[196,204,216],[130,96,210],[214,182,92],[232,234,240],[70,160,205]];function QM(i,e,t){let n="alien|"+e.getHexString()+"|"+t.join(",");if(i.tex.has(n))return i.tex.get(n);let s=i.skins.m[0],r=i.masks.m,o=s.width,a=s.height,l=document.createElement("canvas");l.width=o,l.height=a;let c=l.getContext("2d"),u=c.createImageData(o,a),h=u.data,d=s.data,f=r.data,g=r.width/o,x=new Array(8).fill(!1);for(let _ of[...Vp[2],...Gp[2],...Wp[1]])x[_]=!0;let m=Math.round(e.r*255),p=Math.round(e.g*255),v=Math.round(e.b*255);for(let _=0;_<a;_++)for(let P=0;P<o;P++){let b=(_*o+P)*4,R=(Math.floor(_*g)*r.width+Math.floor(P*g))*4,I=Math.round(f[R]/30),S=(d[b]+d[b+1]+d[b+2])/765;if(x[I]){let E=.55+S*.6,D=_%64<3?.75:1;h[b]=Math.min(255,t[0]*E*D),h[b+1]=Math.min(255,t[1]*E*D),h[b+2]=Math.min(255,t[2]*E*D)}else{let E=.45+S*.85;h[b]=Math.min(255,m*E),h[b+1]=Math.min(255,p*E),h[b+2]=Math.min(255,v*E)}h[b+3]=255}c.putImageData(u,0,0);let y=new An(l);return y.flipY=!1,y.colorSpace=mt,y.anisotropy=4,i.tex.set(n,y),y}var zp=[8377946,5887648,10933834,4901064,10124799,7001706,14075978,5944575,14052020,4904570];function Kp(i,e=0){let t=Tl(i,{b:"m",s:0,h:"",top:0,bot:0,sh:0},!1),n=new Re(zp[e%zp.length]),s=new Me({map:QM(i,n,Hp[e%Hp.length]),roughness:.42,metalness:.2,emissive:n,emissiveIntensity:.08});t.m.traverse(o=>{if(!(o.isSkinnedMesh||o.isMesh))return;let a=o.material&&o.material.name||"";/Superhero/i.test(a)?o.material=s:o.visible=!1});let r=t.bones.Head;if(r){t.m.updateMatrixWorld(!0);let o=new C,a=new Nt,l=new C;r.matrixWorld.decompose(o,a,l);let c=t.m.scale.x,u=a.clone().invert(),h=(x,m,p=0)=>{let v=o.clone().add(m.clone().multiplyScalar(1));x.position.copy(r.worldToLocal(v));let y=new Nt().setFromEuler(new Tn(0,0,p));x.quaternion.copy(u.clone().multiply(y)),x.scale.divideScalar(l.x),r.add(x)},d=new Me({color:328968,roughness:.05,metalness:.7});for(let x of[-1,1]){let m=new K(new Ut(.035,16,12),d);m.scale.set(1.15,.62,.5),h(m,new C(x*.042,.075,.095),x*.45)}let f=new Me({color:n,roughness:.4}),g=new Le({color:11992970,toneMapped:!1});for(let x of[-1,1]){let m=new K(new ot(.006,.008,.16,6),f);h(m,new C(x*.04,.25,0),-x*.3);let p=new K(new Ut(.022,10,8),g);h(p,new C(x*.065,.33,0))}r.scale.multiplyScalar(1.45)}return t}var Xu=["Waldrave Acid","Blaulicht Hardtechno","Sonnenaufgang","Schranz Attacke","Hardtekk SPK","Acid Nacht","Minimal im Unterholz","Industrial Wald"],eE=i=>encodeURI("/SPK - Fuck the Police/spiel/musik/tekkno"+(i+1)+".mp3"),jp=5;function $p(i){let{scene:e,camera:t,me:n,djFrames:s,net:r,toast:o,canvasTex:a,$:l}=i,c=i.CL,u=i.FIG,h=new C(0,0,8.6),d={waves:0,rad:{s:0,p:!0,v:.7,o:0,at:0},jumped:new Set,anims:[],aliens:[],built:!1},f=new $e;f.visible=!1,e.add(f);{let U=[[0,-.5],[1.8,-.38],[3,-.04],[3.15,.04],[2.8,.25],[1.6,.46],[0,.5]].map(M=>new ce(M[0],M[1])),j=new K(new To(U,48),new Me({color:13687012,roughness:.3,metalness:.55,emissive:3819104,emissiveIntensity:.7}));f.add(j);let X=new K(new Ut(1.25,32,16,0,Math.PI*2,0,Math.PI/2),new Me({color:8388560,roughness:.05,transparent:!0,opacity:.55,emissive:2792048,emissiveIntensity:.9}));X.position.y=.42,f.add(X),f.rim=[];for(let M=0;M<16;M++){let N=M/16*Math.PI*2,Z=new K(new Ut(.12,10,8),new Le({color:16777215,toneMapped:!1}));Z.position.set(Math.cos(N)*2.95,.04,Math.sin(N)*2.95),f.add(Z),f.rim.push(Z)}let w=new K(new $n(1,32),new Le({color:11992986,toneMapped:!1}));w.rotation.x=Math.PI/2,w.position.y=-.51,f.add(w)}let g=a(64,256,U=>{let j=U.createLinearGradient(0,0,0,256);j.addColorStop(0,"rgba(255,255,255,0.95)"),j.addColorStop(1,"rgba(255,255,255,0.3)"),U.fillStyle=j,U.fillRect(0,0,64,256);for(let X=0;X<40;X++)U.fillStyle="rgba(255,255,255,0.25)",U.fillRect(Math.random()*64,Math.random()*256,2,30)});g.wrapS=g.wrapT=jn;let x=new Le({map:g,color:11992986,transparent:!0,opacity:0,blending:Kn,depthWrite:!1,side:It,toneMapped:!1,fog:!1}),m=new K(new ot(1,2.4,1,32,1,!0),x);m.visible=!1,e.add(m);let p=new vn(10223482,0,14,1.6);e.add(p);let v=new $e;v.position.copy(h),v.visible=!1,e.add(v);let y=a(256,64,()=>{});{let U=new $e;U.scale.setScalar(1.35),U.position.y=0,v.add(U),v.R=U;let j=new Me({color:1447452,roughness:.5,metalness:.4}),X=new Me({color:13685980,roughness:.2,metalness:.95}),w=new K(new Ge(1.3,.72,.38),j);w.position.y=.42,U.add(w);let M=new K(new ut(1.26,.68),new Me({color:2368556,roughness:.7}));M.position.set(0,.42,.191),U.add(M),v.cones=[];for(let ye of[-.38,.38]){let he=new K(new Zn(.22,.025,8,32),X);he.position.set(ye,.4,.2),U.add(he);let Ee=new K(new $n(.2,32),new Me({color:657932,roughness:.9}));Ee.position.set(ye,.4,.195),U.add(Ee);let Xe=new K(new $n(.06,16),new Me({color:3158074,metalness:.6}));Xe.position.set(ye,.4,.2),U.add(Xe),v.cones.push(Ee,Xe)}let N=new K(new ut(.42,.11),new Le({map:y,toneMapped:!1}));N.position.set(0,.68,.195),U.add(N);for(let ye=0;ye<5;ye++){let he=new K(new Ge(.06,.03,.05),X);he.position.set(-.12+ye*.06,.8,.12),U.add(he)}let Z=new K(new Zn(.42,.03,8,24,Math.PI),X);Z.position.set(0,.78,0),U.add(Z);let te=new K(new ot(.008,.008,.9,6),X);te.position.set(.55,1.15,-.1),te.rotation.z=-.35,U.add(te);for(let ye of[-.55,.55]){let he=new K(new Ge(.1,.06,.3),j);he.position.set(ye,.03,0),U.add(he)}let ee=new K(new ut(1.26,.03),new Le({color:16723888,toneMapped:!1}));ee.position.set(0,.07,.195),U.add(ee),v.glow=ee}v.lookAt(0,0,0);let _=new K(new Ge(2,1.4,1),new Le({transparent:!0,opacity:0,depthWrite:!1}));_.position.y=.6,v.add(_),_.userData.aim={radio:!0};let P=new $e;P.position.copy(h).add(new C(1.7,0,-.6)),P.visible=!1,e.add(P);{let U=new K(new Ge(.35,.22,.3),new Me({color:1118486,metalness:.5,roughness:.4}));U.position.y=.11,P.add(U);let j=new K(new $n(.06,16),new Le({color:3800968,toneMapped:!1}));j.position.set(0,.16,.151),P.add(j),P.lens=j,P.beams=[];let X=[16723888,3800968,2154751,16724016,11566079,16769583];for(let w=0;w<9;w++){let M=new $e;M.position.y=.18;let N=new K(new ot(.012,.012,22,4,1,!0),new Le({color:X[w%X.length],transparent:!0,opacity:.8,blending:Kn,depthWrite:!1,toneMapped:!1}));N.position.y=11,M.add(N),P.add(M),P.beams.push(M)}P.light=new vn(3800968,0,12,1.5),P.light.position.y=1.5,P.add(P.light)}function b(U){let j=Kp(u,U);j.m.rotation.y=Math.PI;let X=new $e;X.add(j.m),e.add(X);let w=new Cn(j.m),M={};for(let ee of["dance","idle","use","walk"])c[ee]&&(M[ee]=w.clipAction(c[ee]),M[ee].play(),M[ee].setEffectiveWeight(ee==="idle"?1:0));M.dance&&(M.dance.time=Math.random()*M.dance.getClip().duration);let N=Math.PI+U/10*Math.PI*2+U%2*.3,Z=2.4+(U>=4?1:0)+(U>=8?.9:0),te=h.clone().add(new C(Math.sin(N)*Z,0,Math.cos(N)*Z));return{root:X,mixer:w,acts:M,cur:"idle",spot:te,i:U,w:{idle:1}}}function R(U,j){!U.acts[j]||U.cur===j||(U.cur=j)}function I(U,j){for(let X in U.acts){let w=X===U.cur?1:0;U.w[X]=(U.w[X]||0)+(w-(U.w[X]||0))*Math.min(1,j*6),U.acts[X].setEffectiveWeight(U.w[X])}U.mixer.update(j)}let S={t:-1,wave:0,list:[]};function E(U,j){for(;d.aliens.length<U*2;)d.aliens.push(b(d.aliens.length));if(d.waves=Math.max(d.waves,U),j){for(let X of d.aliens)X.root.position.copy(X.spot),D(X),R(X,"dance");v.visible=P.visible=!0;return}S.t=0,S.wave=U,S.list=d.aliens.slice((U-1)*2,U*2);for(let X of S.list)X.root.visible=!1;de(),me(!0),o(U===1?"\u{1F47D} Was ist DAS?! Ein UFO landet im Portal!":"\u{1F47D} Noch mehr Aliens kommen zur Party! ("+U*2+" Aliens)")}function D(U){let j=h.clone().sub(U.root.position);U.root.rotation.y=Math.atan2(-j.x,-j.z)}let W=new C(0,34,8.6),L=new C(h.x,8.2,h.z);function O(U,j){if(S.t<0)return;S.t+=U;let X=S.t,w=N=>N<0?0:N>1?1:N*N*(3-2*N);f.visible=X<15,X<4?f.position.lerpVectors(W,L,w(X/4)):X<12?(f.position.copy(L),f.position.y+=Math.sin(X*1.6)*.2):f.position.lerpVectors(L,W,w((X-12)/3)),f.rotation.y+=U*1.5,f.rim.forEach((N,Z)=>N.material.color.setHSL((Z/16+X*.5)%1,1,.6));let M=X>4.5&&X<11.5?Math.min(1,(X-4.5)*2,(11.5-X)*2):0;if(m.visible=M>.01,m.visible){let N=f.position.y-.5;m.position.set(f.position.x,N/2,f.position.z),m.scale.set(1,N,1),x.opacity=.4*M,g.offset.y-=U*.6}p.position.set(h.x,2.5,h.z),p.intensity=25*M,S.list.forEach((N,Z)=>{let te=Z*.4;if(X<5+te){N.root.visible=!1;return}if(N.root.visible=!0,X<8+te){let ee=w((X-5-te)/3);N.root.position.set(h.x+(Z?.8:-.8),fl.lerp(L.y-1.2,0,ee),h.z),N.root.rotation.y=X*2+Z,R(N,"idle")}else if(X<10+te){let ee=w((X-8-te)/2),ye=new C(h.x+(Z?.8:-.8),0,h.z);N.root.position.lerpVectors(ye,N.spot,ee);let he=N.spot.clone().sub(ye);N.root.rotation.y=Math.atan2(-he.x,-he.z),R(N,"walk")}else S.wave===1&&X<12.5?(N.root.position.copy(N.spot),D(N),R(N,"use")):(N.root.position.copy(N.spot),D(N),R(N,"dance"))}),S.wave===1&&X>10.3&&!v.visible&&(v.visible=P.visible=!0,v.R.scale.setScalar(.01)),v.visible&&v.R.scale.x<1.35&&v.R.scale.setScalar(Math.min(1.35,v.R.scale.x+U*1.6)),S.wave===1&&X>12.5&&!d.started&&De()&&(d.started=!0,d.rad={s:Math.floor(Math.random()*8),p:!0,v:.7,o:0,at:ae()},ge(),ne()),X>15&&(S.t=-1,f.visible=!1,m.visible=!1,p.intensity=0,me(!1))}let z=null,F=null,re=null,q=null;function de(){let U=i.audio();if(!(!U||z)){z=new Audio,z.crossOrigin="anonymous",z.loop=!1,z.preload="auto",z.addEventListener("ended",()=>{De()&&(d.rad.s=(d.rad.s+1)%8,d.rad.o=0,d.rad.at=ae(),ge(),ne())});try{let j=U.AC.createMediaElementSource(z);F=U.AC.createPanner(),F.panningModel="HRTF",F.distanceModel="inverse",F.refDistance=5,F.rolloffFactor=1.1,F.maxDistance=60,q=U.AC.createGain(),q.gain.value=.7,j.connect(q),q.connect(F),F.connect(U.master);let X=v.position;F.positionX?(F.positionX.value=X.x,F.positionY.value=1,F.positionZ.value=X.z):F.setPosition(X.x,1,X.z)}catch(j){console.warn("Radio-Ton",j)}}}function me(U){let j=i.audio();if(j){if(!re){re=j.AC.createGain(),re.gain.value=0,re.connect(j.master);let X=j.AC.createOscillator();X.type="sawtooth",X.frequency.value=62;let w=j.AC.createOscillator();w.frequency.value=5;let M=j.AC.createGain();M.gain.value=9,w.connect(M),M.connect(X.frequency);let N=j.AC.createBiquadFilter();N.type="lowpass",N.frequency.value=700,X.connect(N),N.connect(re),X.start(),w.start()}re.gain.setTargetAtTime(U?.12:0,j.AC.currentTime,.4)}}let ae=()=>Date.now()/1e3,De=()=>r.role==="host"||r.role==="none"||!r.role;function qe(){return d.rad.o+(d.rad.p?Math.max(0,ae()-d.rad.at):0)}function ne(){if(de(),!z)return;let U=eE(d.rad.s);z.src.endsWith(U.split("/").pop())||(z.src=U),q?q.gain.value=d.rad.v:z.volume=d.rad.v;let j=qe(),X=()=>{try{Math.abs(z.currentTime-j)>1.5&&isFinite(z.duration)&&j<z.duration&&(z.currentTime=j)}catch{}};if(z.readyState>=1?X():z.addEventListener("loadedmetadata",X,{once:!0}),d.rad.p){let w=z.play();w&&w.catch&&w.catch(()=>{})}else z.pause();_e()}function ge(){if(r.role!=="host")return;let U={t:"rad",s:Object.assign({},d.rad,{o:qe()}),n:d.waves};for(let j of r.conns.values())try{j.conn.send(U)}catch{}}function Y(U){let j=d.rad,X=qe();U==="next"?(j.s=(j.s+1)%8,j.o=0,j.p=!0):U==="prev"?(j.s=(j.s+7)%8,j.o=0,j.p=!0):U==="toggle"?(j.o=X,j.p=!j.p):U==="up"?(j.v=Math.min(1,Math.round((j.v+.1)*10)/10),j.o=X):U==="down"&&(j.v=Math.max(0,Math.round((j.v-.1)*10)/10),j.o=X),U!=="up"&&U!=="down"&&U!=="toggle"&&(j.o=0),j.at=ae(),ge(),ne(),we()}function se(U){if(r.role==="client"&&r.conn)try{r.conn.send({t:"radc",c:U})}catch{}else Y(U)}function _e(){let U=y.image.getContext("2d");U.fillStyle="#05140a",U.fillRect(0,0,256,64),U.fillStyle="#39ff88",U.font="700 22px Consolas, monospace",U.fillText((d.rad.p?"\u25B6 ":"\u275A\u275A ")+Xu[d.rad.s],8,28),U.font="16px Consolas, monospace",U.fillText("VOL "+"\u2588".repeat(Math.round(d.rad.v*10))+"\u2591".repeat(10-Math.round(d.rad.v*10)),8,52),y.needsUpdate=!0}document.body.insertAdjacentHTML("beforeend",`<div id="radBox" class="hidden" style="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;background:rgba(14,12,22,.96);border:1px solid rgba(255,255,255,.18);border-radius:18px;padding:18px 20px;width:min(420px,92vw);text-align:center;color:#fff;font-family:'Segoe UI',sans-serif">
   <div style="font:400 32px Impact,'Arial Black',sans-serif;color:#39ff88;letter-spacing:.05em">\u{1F47D} ALIEN-RADIO</div><div id="radSong" style="margin:8px 0 14px;font-size:16px;color:#d8d0e6"></div>
   <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">${[["prev","\u23EE"],["toggle","\u23EF"],["next","\u23ED"],["down","\u{1F509}"],["up","\u{1F50A}"]].map(([U,j])=>`<button data-rc="${U}" style="width:62px;height:54px;border-radius:12px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;font-size:24px;cursor:pointer">${j}</button>`).join("")}</div>
   <div id="radVol" style="margin-top:12px;font:14px Consolas,monospace;color:#39ff88"></div><p style="font-size:12px;color:#8e869f;margin-top:10px">Alle im Raum h\xF6ren das Radio \xB7 je n\xE4her, desto lauter</p>
   <button id="radClose" style="margin-top:8px;padding:10px 26px;border-radius:12px;border:0;background:linear-gradient(135deg,#ff2fb0,#b81cff);color:#fff;font:800 15px 'Segoe UI';cursor:pointer">Fertig</button></div>`);for(let U of document.querySelectorAll("[data-rc]"))U.onclick=j=>{j.stopPropagation(),se(U.dataset.rc)};function we(){l("radSong").textContent=(d.rad.p?"\u25B6 ":"\u275A\u275A ")+Xu[d.rad.s],l("radVol").textContent="Lautst\xE4rke "+Math.round(d.rad.v*100)+"%"}function be(){we(),l("radBox").classList.remove("hidden"),i.unlock()}l("radClose").onclick=()=>{l("radBox").classList.add("hidden"),i.relock()};function Ye(){for(let U of s){let j=U.g.position;if(Math.hypot(n.pos.x-j.x,n.pos.z-j.z)<3.6&&!d.jumped.has(U.i)){d.jumped.add(U.i),U.edge.material.color.setHex(3800968),setTimeout(()=>U.edge.material.color.setHex(16723888),900);let w=i.audio();if(w){let M=w.AC.createOscillator(),N=w.AC.createGain();M.type="triangle",M.frequency.value=440*Math.pow(2,d.jumped.size/8),N.gain.setValueAtTime(.12,w.AC.currentTime),N.gain.exponentialRampToValueAtTime(1e-4,w.AC.currentTime+.4),M.connect(N),N.connect(w.master),M.start(),M.stop(w.AC.currentTime+.45)}s.length&&d.jumped.size>=s.length&&(d.jumped.clear(),B())}}}function B(){if(d.waves>=jp){o("\u{1F47D} Die Tanzfl\xE4che ist voll \u2013 mehr Aliens passen nicht ins Portal!");return}if(r.role==="client"&&r.conn){try{r.conn.send({t:"ufo"})}catch{}return}H()}function H(){if(d.waves>=jp||S.t>=0)return;let U=d.waves+1;if(d.waves=U,r.role==="host")for(let j of r.conns.values())try{j.conn.send({t:"ufo",n:U})}catch{}E(U,!1)}let T=new C,xe=new C;function $(U,j){O(U,j);for(let X of d.aliens)I(X,X.cur==="dance"?U*1.05:U);if(d.started||v.visible){let X=i.audio(),w=i.bass?i.bass():.5+.5*Math.sin(j*8),M=d.rad.p;v.cones.forEach((N,Z)=>N.scale.setScalar(1+(M&&Math.sin(j*15.7)>.6?.08:0))),v.glow.material.color.setHSL(j*.15%1,1,.55),P.beams.forEach((N,Z)=>{N.visible=M&&v.visible,N.rotation.z=Math.sin(j*(.7+Z*.11)+Z)*.9,N.rotation.x=Math.cos(j*(.5+Z*.07)+Z*2)*.6}),P.light.intensity=M&&v.visible?8+Math.sin(j*9)*4:0,P.light.color.setHSL(j*.2%1,1,.5),P.lens.material.color.setHSL(j*.3%1,1,.55);for(let N of d.aliens)N.cur==="dance"&&(N.root.position.y=0);if(X&&X.AC&&X.AC.listener){let N=X.AC.listener;t.getWorldDirection(T),xe.set(0,1,0),N.positionX?(N.positionX.value=t.position.x,N.positionY.value=t.position.y,N.positionZ.value=t.position.z,N.forwardX.value=T.x,N.forwardY.value=T.y,N.forwardZ.value=T.z,N.upX.value=0,N.upY.value=1,N.upZ.value=0):(N.setPosition(t.position.x,t.position.y,t.position.z),N.setOrientation(T.x,T.y,T.z,0,1,0))}}r.role==="host"&&d.started&&(d.syncT=(d.syncT||0)+U)>6&&(d.syncT=0,d.rad.o=qe(),d.rad.at=ae(),ge())}function ue(U){if(!v.visible)return;let j=[{x:v.position.x,z:v.position.z,r:1},{x:P.position.x,z:P.position.z,r:.4},...d.aliens.filter(X=>X.root.visible).map(X=>({x:X.root.position.x,z:X.root.position.z,r:.35}))];for(let X of j){let w=U.x-X.x,M=U.z-X.z,N=Math.hypot(w,M),Z=X.r+.35;N<Z&&N>1e-4&&(U.x=X.x+w/N*Z,U.z=X.z+M/N*Z)}}return{tick:$,jump:Ye,collide:ue,openRadio:be,targets:()=>v.visible?[_]:[],prompt:U=>`<b style="color:#39ff88">\u{1F47D} Alien-Radio</b> \xB7 ${Xu[d.rad.s]}<br><small>${U?"Tippe auf <kbd>E</kbd>":"<kbd>E</kbd>"} = bedienen (Song, Lautst\xE4rke)</small>`,state:()=>({n:d.waves,rad:Object.assign({},d.rad,{o:qe(),at:ae()})}),setState(U){U.n>0&&(E(U.n,!0),d.started=!0,d.rad=Object.assign({},U.rad,{at:ae()}),ne())},remoteWave(U){U>d.waves&&E(U,!1)},setRad(U,j){j>d.waves&&S.t<0&&E(j,!0),d.rad=Object.assign({},U,{at:ae()}),d.started=!0,ne(),we()},hostRequest:()=>H(),control:Y}}function Zp(i){let e=new $e,t=.8,n=new Ri,s=[[-.42,0],[.4,0],[.4,.86],[.52,.93],[.5,1],[.24,1.06],[.13,1.5],[.24,1.52],[.24,1.75],[-.42,1.75]];n.moveTo(s[0][0],s[0][1]);for(let Y of s.slice(1))n.lineTo(Y[0],Y[1]);n.closePath();let r=new Mr(n,{depth:t,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2});r.rotateY(-Math.PI/2),r.translate(t/2,0,0);let o=new Me({color:1379366,roughness:.35,metalness:.3}),a=new K(r,o);a.castShadow=!0,a.receiveShadow=!0,e.add(a);let l=i(512,1024,(Y,se,_e)=>{Y.clearRect(0,0,se,_e),["#ff2fb0","#b81cff","#20e0ff"].forEach((be,Ye)=>{Y.strokeStyle=be,Y.lineWidth=26,Y.shadowColor=be,Y.shadowBlur=30,Y.beginPath(),Y.moveTo(-40,980-Ye*60),Y.bezierCurveTo(160,760-Ye*60,300,520-Ye*60,560,380-Ye*60),Y.stroke()}),Y.shadowBlur=0,Y.save(),Y.translate(250,560),Y.rotate(-Math.PI/2),Y.font='900 150px Impact, "Arial Black"',Y.textAlign="center",Y.textBaseline="middle",Y.lineWidth=10,Y.strokeStyle="#000",Y.strokeText("ARCADE",0,0),Y.fillStyle="#ffd23f",Y.fillText("ARCADE",0,0),Y.restore();for(let be=0;be<40;be++)Y.fillStyle="rgba(255,255,255,"+(.3+Math.random()*.5)+")",Y.fillRect(Math.random()*se,Math.random()*_e*.5,4,4)}),c=new Me({map:l,transparent:!0,emissive:16777215,emissiveMap:l,emissiveIntensity:.6,roughness:.5});for(let Y of[-1,1]){let se=new K(new ut(.88,1.72),c);se.position.set(Y*(t/2+.014),.87,-.04),se.rotation.y=Y*Math.PI/2,e.add(se)}let u=new Le({color:16723888,toneMapped:!1});for(let Y of[-1,1]){let se=new K(new Ge(.02,.86,.02),u);se.position.set(Y*(t/2+.01),.43,.405),e.add(se)}let h=document.createElement("canvas");h.width=320,h.height=240;let d=h.getContext("2d"),f=new An(h);f.colorSpace=mt,f.magFilter=jt,f.minFilter=on;let g=new K(new ut(.7,.47),new Me({color:328456,roughness:.3})),x=Math.atan2(.11,.44);g.position.set(0,1.28,.185+.02),g.rotation.x=-x,e.add(g);let m=new K(new ut(.58,.4),new Le({map:f,toneMapped:!1}));m.position.set(0,1.28,.21),m.rotation.x=-x,e.add(m);let p=new K(new ut(.58,.4),new Me({color:16777215,transparent:!0,opacity:.06,roughness:.05,metalness:.9,depthWrite:!1}));p.position.set(0,1.28,.214),p.rotation.x=-x,e.add(p);let v=i(512,128,(Y,se,_e)=>{let we=Y.createLinearGradient(0,0,se,0);we.addColorStop(0,"#2a0050"),we.addColorStop(.5,"#5a0a6a"),we.addColorStop(1,"#2a0050"),Y.fillStyle=we,Y.fillRect(0,0,se,_e),Y.font='900 76px Impact, "Arial Black"',Y.textAlign="center",Y.textBaseline="middle",Y.shadowColor="#ff2fb0",Y.shadowBlur=24,Y.fillStyle="#ff7fd8",Y.fillText("SPK ARCADE",se/2,_e/2+4),Y.shadowBlur=0,Y.fillStyle="#ffd23f";for(let be=0;be<18;be++)Y.beginPath(),Y.arc(16+be*28.5,8,4,0,7),Y.fill(),Y.beginPath(),Y.arc(16+be*28.5,_e-8,4,0,7),Y.fill()}),y=new Le({map:v,toneMapped:!1}),_=new K(new ut(.76,.2),y);_.position.set(0,1.635,.252+.002),e.add(_);let P=Math.atan2(.06,.26),b=new $e;b.position.set(0,1.03,.37),b.rotation.x=P,e.add(b);let R=i(256,96,(Y,se,_e)=>{Y.fillStyle="#1a1030",Y.fillRect(0,0,se,_e),Y.strokeStyle="#20e0ff",Y.lineWidth=3,Y.strokeRect(4,4,se-8,_e-8),Y.fillStyle="#ff2fb0",Y.font="700 14px Arial",Y.fillText("1 PLAYER",14,22)}),I=new K(new ut(.78,.27),new Me({map:R,roughness:.6}));I.rotation.x=-Math.PI/2,I.position.y=.016,b.add(I);let S=new K(new ot(.012,.012,.09,8),new Me({color:2236962,metalness:.8,roughness:.3}));S.position.set(-.22,.05,.02),b.add(S);let E=new K(new Ut(.03,16,12),new Me({color:14688288,roughness:.25}));E.position.set(-.22,.1,.02),b.add(E);let W=[16723888,2154751,16765503,3800968].map((Y,se)=>{let _e=new K(new ot(.022,.022,.025,16),new Me({color:Y,emissive:Y,emissiveIntensity:.5,roughness:.3}));return _e.position.set(.02+se%2*.07+Math.floor(se/2)*.14,.014,se%2*.05-.02),b.add(_e),_e}),L=new K(new ut(.34,.3),new Me({color:2763312,metalness:.7,roughness:.35}));L.position.set(0,.5,.418),e.add(L);for(let Y of[-.07,.07]){let se=new K(new ut(.05,.08),new Le({color:16747050,toneMapped:!1}));se.position.set(Y,.55,.42),e.add(se)}let O=new vn(8023551,2.2,4,1.6);O.position.set(0,1.3,.7),e.add(O);let z=i(128,128,Y=>{let se=Y.createRadialGradient(64,64,0,64,64,64);se.addColorStop(0,"rgba(255,47,176,0.6)"),se.addColorStop(1,"rgba(255,47,176,0)"),Y.fillStyle=se,Y.fillRect(0,0,128,128)}),F=new K(new ut(2.2,2.2),new Le({map:z,transparent:!0,depthWrite:!1,blending:Kn}));F.rotation.x=-Math.PI/2,F.position.set(0,.015,.35),e.add(F);let re=new K(new Ge(t+.3,1.9,1.1),new Le({transparent:!0,opacity:0,depthWrite:!1}));re.position.set(0,.95,0),e.add(re);let q=[[10,8],[9,8],[8,8],[7,8]],de=[1,0],me=[20,10],ae=0,De=0,qe=["#ff2fb0","#20e0ff","#ffd23f","#39ff88"];function ne(Y){d.fillStyle="#05030c",d.fillRect(0,0,320,240);for(let _e=0;_e<30;_e++)d.fillStyle=_e%3?"#2a2448":"#4a4478",d.fillRect((_e*97+Y*20)%320,_e*53%240,2,2);let se=10;d.fillStyle="#ff3a3a",d.fillRect(me[0]*se+2,me[1]*se+2,6,6),q.forEach(([_e,we],be)=>{d.fillStyle=be?"#39ff88":"#9dffb8",d.fillRect(_e*se+1,we*se+1,8,8)}),d.font='bold 34px "Courier New", monospace',d.textAlign="center",d.fillStyle="#000",d.fillText("SPK ARCADE",162,62),d.fillStyle=qe[Math.floor(Y*2)%4],d.fillText("SPK ARCADE",160,60),d.font='bold 13px "Courier New", monospace',d.fillStyle="#f4f0ff",["SNAKE","PARTY-JAGD","PING-PONG","B\xD6LLER-BATTLE"].forEach((_e,we)=>d.fillText(_e,160,120+we*18)),Math.floor(Y*2)%2&&(d.font='bold 16px "Courier New", monospace',d.fillStyle="#ffd23f",d.fillText("KLICK ODER E ZUM SPIELEN",160,220)),d.fillStyle="rgba(0,0,0,0.25)";for(let _e=0;_e<240;_e+=3)d.fillRect(0,_e,320,1);f.needsUpdate=!0}function ge(){let Y=q[0],se=[[1,0],[-1,0],[0,1],[0,-1]].filter(we=>!(we[0]===-de[0]&&we[1]===-de[1])).filter(we=>{let be=Y[0]+we[0],Ye=Y[1]+we[1];return be>=0&&Ye>=0&&be<32&&Ye<24&&!q.some(B=>B[0]===be&&B[1]===Ye)});if(!se.length){q.length=4,q[0]=[10,8];return}se.sort((we,be)=>Math.abs(Y[0]+we[0]-me[0])+Math.abs(Y[1]+we[1]-me[1])-(Math.abs(Y[0]+be[0]-me[0])+Math.abs(Y[1]+be[1]-me[1]))),de=se[0];let _e=[Y[0]+de[0],Y[1]+de[1]];q.unshift(_e),_e[0]===me[0]&&_e[1]===me[1]?(me=[2+Math.floor(Math.random()*28),2+Math.floor(Math.random()*20)],q.length>22&&(q.length=6)):q.pop()}return ne(0),{g:e,hit:re,tick(Y,se){!se||Y-De<.1||(De=Y,ae++,ge(),ne(Y),W.forEach((_e,we)=>{_e.material.emissiveIntensity=.3+.7*(Math.sin(Y*4+we)>.6?1:0)}),u.color.setHSL(Y*.08%1,1,.55))}}}var es={A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,BACK:8,START:9,L3:10,R3:11,UP:12,DOWN:13,LEFT:14,RIGHT:15},Jp={A:"Space",B:"KeyC",X:"KeyE",Y:"KeyF",LB:"KeyQ",RB:"KeyR",LT:"mouse2",RT:"mouse0",BACK:"Tab",R3:"KeyM",UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight"},tE={Space:" ",Tab:"Tab",Escape:"Escape",Enter:"Enter",ShiftLeft:"Shift",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight"};if(typeof window<"u"&&!window.__ctrlGuard){window.__ctrlGuard=1;let i=0;addEventListener("keydown",e=>{(e.key==="Control"||e.key==="Meta")&&(i=performance.now());let t=e.target&&/^(INPUT|TEXTAREA)$/.test(e.target.tagName);(e.ctrlKey||e.metaKey)&&!t&&!/^Key[CVXAZ]$/.test(e.code)&&e.preventDefault(),(e.ctrlKey&&e.code==="KeyW"||e.code==="F5"||e.code==="BrowserBack"||e.altKey&&e.code==="ArrowLeft")&&e.preventDefault()},!0),addEventListener("keyup",e=>{(e.key==="Control"||e.key==="Meta")&&(i=0)},!0),addEventListener("blur",()=>{i=0}),addEventListener("beforeunload",e=>{if(i&&performance.now()-i<8e3)return e.preventDefault(),e.returnValue="",""})}var Vo=null;function Qp(i){if(Vo)return Vo.set(i),Vo;let e=Object.assign({},Jp,i.map||{}),t={},n=[],s=!1,r=!1,o=null,a=0,l="",c=performance.now(),u=document.createElement("style");u.textContent='.padFocus{outline:3px solid #ffd23f!important;outline-offset:3px;box-shadow:0 0 18px rgba(255,210,63,.7)!important}#padBadge{position:fixed;left:50%;bottom:8px;transform:translateX(-50%);z-index:9999;background:rgba(10,8,16,.85);border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:5px 12px;font:600 12px "Segoe UI",sans-serif;color:#d8d0e6;pointer-events:none;transition:opacity .4s;white-space:nowrap}#padBadge b{color:#39ff88}',document.head.appendChild(u);let h=document.createElement("div");h.id="padBadge",h.style.opacity="0",document.body.appendChild(h);let d=0;function f(b,R=4e3){h.innerHTML=b,h.style.opacity="1",clearTimeout(d),d=setTimeout(()=>h.style.opacity="0",R)}addEventListener("gamepadconnected",b=>f("\u{1F3AE} <b>Controller verbunden</b> \u2013 A = ausw\xE4hlen \xB7 B = zur\xFCck \xB7 Start = Pause/Weiter")),addEventListener("gamepaddisconnected",()=>{x(),f("\u{1F3AE} Controller getrennt")});let g=(b,R)=>{if(b){if(b.startsWith("mouse")){let I=+b.slice(5),S=i.canvas||document.body;S.dispatchEvent(new MouseEvent(R?"mousedown":"mouseup",{button:I,buttons:R?I===0?1:2:0,bubbles:!0,cancelable:!0})),!R&&I===0&&S.dispatchEvent(new MouseEvent("click",{button:0,bubbles:!0,cancelable:!0}));return}if(b==="wheel"){R&&(i.canvas||document).dispatchEvent(new WheelEvent("wheel",{deltaY:100,bubbles:!0}));return}t[b]!==R&&(t[b]=R,document.dispatchEvent(new KeyboardEvent(R?"keydown":"keyup",{code:b,key:tE[b]||(b.startsWith("Key")?b.slice(3).toLowerCase():b.startsWith("Digit")?b.slice(5):b),bubbles:!0,cancelable:!0})))}};function x(){for(let b in t)t[b]&&g(b,!1)}function m(){return[...document.querySelectorAll("button, select, input:not([type=hidden]), a[href], [data-pad]")].filter(R=>{if(R.disabled||R.closest(".hidden"))return!1;let I=R.getBoundingClientRect();if(I.width<4||I.height<4)return!1;let S=getComputedStyle(R);if(S.visibility==="hidden"||S.display==="none"||+S.opacity==0||S.pointerEvents==="none")return!1;if(I.bottom<0||I.top>innerHeight||I.right<0||I.left>innerWidth)return!0;let E=Math.min(innerWidth-1,Math.max(0,I.left+I.width/2)),D=Math.min(innerHeight-1,Math.max(0,I.top+I.height/2)),W=document.elementFromPoint(E,D);return W&&(W===R||R.contains(W)||W.contains(R)||W.closest("label")===R.closest("label"))})}function p(b){if(o&&o.classList.remove("padFocus"),o=b,b){b.classList.add("padFocus");try{b.scrollIntoView({block:"nearest",inline:"nearest"})}catch{}if(b.tagName!=="INPUT"||b.type==="range"||b.type==="checkbox")try{b.focus({preventScroll:!0})}catch{}}}function v(b){let R=m();if(!R.length)return;if(!o||!R.includes(o)){p(i.first&&R.find(L=>i.first.includes(L.id))||R.find(L=>/\b(btn|primary)\b/.test(L.className)&&!/ghost/.test(L.className))||R.find(L=>L.tagName==="BUTTON")||R[0]);return}let I=o.getBoundingClientRect(),S=I.left+I.width/2,E=I.top+I.height/2,D=null,W=1e9;for(let L of R){if(L===o)continue;let O=L.getBoundingClientRect(),z=O.left+O.width/2,F=O.top+O.height/2,re=z-S,q=F-E,de=b==="up"?-q:b==="down"?q:b==="left"?-re:re,me=Math.abs(b==="up"||b==="down"?re:q);if(de<4)continue;let ae=de+me*2.2;ae<W&&(W=ae,D=L)}D&&p(D)}function y(b,R){if(b.tagName==="SELECT"){let I=b.options.length;if(!I)return!1;let S=b.selectedIndex;for(let E=0;E<I&&(S=(S+R+I)%I,!!b.options[S].disabled);E++);return b.selectedIndex=S,b.dispatchEvent(new Event("input",{bubbles:!0})),b.dispatchEvent(new Event("change",{bubbles:!0})),!0}if(b.tagName==="INPUT"&&b.type==="range"){let I=+b.step||(+b.max-+b.min)/20||1;return b.value=String(Math.min(+b.max,Math.max(+b.min,+b.value+R*I))),b.dispatchEvent(new Event("input",{bubbles:!0})),b.dispatchEvent(new Event("change",{bubbles:!0})),!0}return!1}function _(b){if(b){if(b.tagName==="SELECT"){y(b,1);return}if(b.tagName==="INPUT"&&(b.type==="checkbox"||b.type==="radio")){b.click();return}if(b.tagName==="INPUT"){try{b.focus(),b.select()}catch{}f("\u2328\uFE0F Mit der Tastatur tippen, dann B dr\xFCcken",3e3);return}b.click()}}function P(){requestAnimationFrame(P);let b=performance.now(),R=Math.min(.05,(b-c)/1e3);c=b;let I=navigator.getGamepads?navigator.getGamepads():[],S=null;for(let ae of I)if(ae&&ae.connected&&ae.buttons.length>=16){S=ae;break}if(!S){s&&(x(),s=!1);return}let E=S.buttons.map(ae=>ae.value>.5),D=S.axes,W=ae=>Math.abs(ae)<.18?0:(ae-Math.sign(ae)*.18)/.82,L=W(D[0]||0),O=W(D[1]||0),z=W(D[2]||0),F=W(D[3]||0);if((E.some(ae=>ae)||Math.abs(L)+Math.abs(O)+Math.abs(z)+Math.abs(F)>.3)&&!s&&(s=!0,i.onActive&&i.onActive()),!s){n=E;return}let q=ae=>E[es[ae]]&&!n[es[ae]],de=ae=>!E[es[ae]]&&n[es[ae]],me=i.isPlaying();if(me&&!i._helped&&(i._helped=!0,f(i.help||"\u{1F3AE} Linker Stick = laufen \xB7 Rechter Stick = umschauen \xB7 A = springen \xB7 B = ducken \xB7 X = benutzen \xB7 Start = Pause",7e3)),me){o&&p(null);for(let ae of["A","B","X","Y","LB","RB","LT","RT","BACK","R3","UP","DOWN","LEFT","RIGHT"]){let De=e[ae];De&&(q(ae)&&g(De,!0),de(ae)&&g(De,!1))}if(i.stick==="steer"?(g(e.STEER_L||"KeyA",L<-.3),g(e.STEER_R||"KeyD",L>.3)):(g("KeyW",O<-.35),g("KeyS",O>.35),g("KeyA",L<-.35),g("KeyD",L>.35)),q("L3")&&(r=!r),Math.hypot(L,O)<.25&&(r=!1),i.stick!=="steer"&&g("ShiftLeft",r||Math.hypot(L,O)>.97),!i.noLook&&(z||F)){let ae=(i.lookSpeed||900)*R,De=Math.sign(z)*Math.pow(Math.abs(z),1.6)*ae,qe=Math.sign(F)*Math.pow(Math.abs(F),1.6)*ae*.75;document.dispatchEvent(new MouseEvent("mousemove",{movementX:De,movementY:qe,bubbles:!0}))}q("START")&&(x(),r=!1,i.pause())}else{x(),r=!1;let ae="";if(E[es.UP]||O<-.6?ae="up":E[es.DOWN]||O>.6?ae="down":E[es.LEFT]||L<-.6?ae="left":(E[es.RIGHT]||L>.6)&&(ae="right"),ae&&(ae!==l||b>a)&&(a=b+(ae!==l?450:160),l=ae,(ae==="left"||ae==="right")&&o&&y(o,ae==="left"?-1:1)||v(ae)),ae||(l=""),o&&!document.body.contains(o)&&p(null),!o&&(ae||q("A"))?v("down"):q("A")&&_(o),q("B")&&(document.activeElement&&document.activeElement.tagName==="INPUT"?document.activeElement.blur():i.back&&i.back()),(q("START")||q("X")&&i.startOnX)&&(i.canPlay&&i.canPlay()?(document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),p(null),i.padLock()):o&&_(o)),F){let De=o;for(;De&&De!==document.body&&!(De.scrollHeight>De.clientHeight+4&&/auto|scroll/.test(getComputedStyle(De).overflowY));)De=De.parentElement;De&&De!==document.body&&(De.scrollTop+=F*900*R)}}n=E}return requestAnimationFrame(P),Vo={isActive:()=>s,badge:f,set:b=>{x(),i=b,e=Object.assign({},Jp,b.map||{}),s&&i.onActive&&i.onActive()}},Vo}var oe=i=>document.getElementById(i),hn=new URLSearchParams(location.search),Qt=(()=>{try{return matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&"ontouchstart"in window||hn.has("touch")}catch{return!1}})();Qt&&document.body.classList.add("touch");var sd=3*(Math.PI*2/12.7),lm=Math.PI*2-sd,Gr=6,Il=Math.PI*2/12.7,Ju=19.2,cn=21.5,nE=1.65,cm=.35,em=[16723888,2154751,10181887,4054148,16731501,16765503,58836,16739286,8191823,11584767],Xo=["#ff2fb0","#20e0ff","#3ddc84","#ff4d6d","#ffd23f","#9b5cff","#00e5d4","#ff6bd6","#7cff4f","#e0e0e0","#c08040","#5080ff","#ff9090","#90ffd0"],Ne={name:"Neue Pussy1",sens:1,vol:.8,gfx:"hoch",invert:!1};try{let i=JSON.parse(localStorage.getItem("operation-hias")||"null");i&&(Ne=Object.assign({},Ne,i))}catch{}(!Ne.name||Ne.name==="HiAS"||Ne.name==="Georg")&&(Ne.name="Neue Pussy1");Ne.look=gn(Ne.look);function Pl(){try{let i=JSON.parse(localStorage.getItem("operation-hias")||"{}")||{};i.name=Ne.name,i.vol=Ne.vol,i.look=Ne.look,localStorage.setItem("operation-hias",JSON.stringify(i))}catch{}}var tm="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",rd=()=>{let i="";for(let e=0;e<5;e++)i+=tm[Math.floor(Math.random()*tm.length)];return i},hm=!1;try{hm=!!sessionStorage.getItem("gbgc-zurueck")}catch{}var qu=null;function um(){if(qu)return qu;let i=null;if(hm)try{i=sessionStorage.getItem("gbgc-raum")}catch{}(!i||!/^[A-Z0-9]{5}$/.test(i))&&(i=rd());try{sessionStorage.setItem("gbgc-raum",i)}catch{}return qu=i}var is=oe("c"),os=new xo({canvas:is,antialias:!0,powerPreference:"high-performance"});os.setPixelRatio(Math.min(window.devicePixelRatio||1,Qt?1.25:1.5));os.toneMapping=Sr;os.toneMappingExposure=1.05;os.outputColorSpace=mt;var dt=new _o;dt.background=new Re(329227);dt.fog=new Ga(329227,.018);var In=new Dt(75,1,.05,200);In.rotation.order="YXZ";dt.add(In);var wl=Ne.gfx==="niedrig"||hn.has("low")||Qt,hi=null,Qu=null;wl||(hi=new Rr(os),hi.addPass(new Cr(dt,In)),Qu=new Ir(new ce(512,512),.42,.4,.82),hi.addPass(Qu),hi.addPass(new Pr));function dm(){let i=window.innerWidth,e=window.innerHeight;os.setSize(i,e,!1),In.aspect=i/e,In.updateProjectionMatrix(),hi&&hi.setSize(i,e)}window.addEventListener("resize",dm);dm();function Ot(i,e,t,n){let s=document.createElement("canvas");s.width=i,s.height=e;let r=s.getContext("2d");t(r,i,e);let o=new An(s);return o.colorSpace=mt,o.anisotropy=8,n&&(o.wrapS=o.wrapT=jn,o.repeat.set(n[0],n[1])),o}function Ns(i,e={}){let t=e.w||1024,n=e.h||256,s=Ot(t,n,o=>{o.clearRect(0,0,t,n),e.bg&&(o.fillStyle=e.bg,iE(o,6,6,t-12,n-12,26),o.fill(),o.strokeStyle=e.border||"rgba(255,255,255,0.25)",o.lineWidth=6,o.stroke()),o.textAlign="center",o.textBaseline="middle";let a=i.length;i.forEach((l,c)=>{let u=l.size||90;o.font=`${l.weight||400} ${u}px ${l.font||'Impact, "Arial Black", sans-serif'}`;let h=u;for(;o.measureText(l.t).width>t-60&&h>20;)h-=4,o.font=`${l.weight||400} ${h}px ${l.font||'Impact, "Arial Black", sans-serif'}`;o.shadowColor=l.glow||"transparent",o.shadowBlur=l.glow?8:0,o.fillStyle=l.c||"#fff",o.fillText(l.t,t/2,n*(c+.5)/a+(l.dy||0))})});return new K(new ut(e.pw||4,(e.pw||4)*n/t),new Le({map:s,transparent:!0,depthWrite:!1,toneMapped:!1,side:It,color:14211288}))}function iE(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function sE(){let i=Ot(1024,1024,(h,d,f)=>{h.fillStyle="#101219",h.fillRect(0,0,d,f);for(let g=0;g<8;g++)for(let x=0;x<8;x++){let m=16+Math.floor(Math.random()*8);h.fillStyle=`rgb(${m},${m+2},${m+8})`,h.fillRect(x*128+3,g*128+3,122,122);for(let p=0;p<40;p++)h.fillStyle=`rgba(255,255,255,${Math.random()*.025})`,h.fillRect(x*128+Math.random()*120,g*128+Math.random()*120,2+Math.random()*10,1)}h.strokeStyle="rgba(80,160,255,0.10)",h.lineWidth=2;for(let g=0;g<=8;g++)h.beginPath(),h.moveTo(g*128,0),h.lineTo(g*128,f),h.stroke(),h.beginPath(),h.moveTo(0,g*128),h.lineTo(d,g*128),h.stroke()},[6,6]),e=new K(new $n(cn+.5,96),new Me({map:i,roughness:.32,metalness:.55,color:16777215}));e.rotation.x=-Math.PI/2,dt.add(e);let t=(h,d)=>new Le({color:h,transparent:!0,opacity:d,toneMapped:!1,side:It});for(let[h,d,f,g]of[[3.2,.06,16723888,.9],[3.45,.02,16723888,.6],[10.6,.04,2154751,.45],[17.4,.05,2154751,.5]]){let x=new K(new Co(h,h+d,128),t(f,g));x.rotation.x=-Math.PI/2,x.position.y=.012,dt.add(x)}let n=Ot(1024,1024,(h,d,f)=>{h.translate(d/2,f/2),h.strokeStyle="rgba(255,47,176,0.85)",h.lineWidth=10,h.beginPath(),h.arc(0,0,440,0,Math.PI*2),h.stroke(),h.lineWidth=4,h.beginPath(),h.arc(0,0,400,0,Math.PI*2),h.stroke();for(let g=0;g<10;g++)h.save(),h.rotate(g*Math.PI/5),h.fillStyle="rgba(255,47,176,0.8)",h.fillRect(-6,-440,12,60),h.restore();h.font='400 210px Impact, "Arial Black", sans-serif',h.textAlign="center",h.textBaseline="middle",h.fillStyle="rgba(255,90,200,0.95)",h.fillText("SPK",0,-10),h.font='400 64px Impact, "Arial Black", sans-serif',h.fillStyle="rgba(255,255,255,0.75)",h.fillText("PORTAL",0,150)}),s=new K(new $n(3.1,64),new Le({map:n,transparent:!0,toneMapped:!1,opacity:.85,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.015,dt.add(s);{let h=new Image;h.onload=()=>{let d=n.image,f=d.getContext("2d"),g=d.width,x=d.height;f.setTransform(1,0,0,1,0,0),f.clearRect(0,0,g,x);let m=f.createRadialGradient(g/2,x/2,g*.2,g/2,x/2,g/2);m.addColorStop(0,"rgba(255,226,47,0.28)"),m.addColorStop(.75,"rgba(255,47,176,0.18)"),m.addColorStop(1,"rgba(255,47,176,0)"),f.fillStyle=m,f.beginPath(),f.arc(g/2,x/2,g/2,0,Math.PI*2),f.fill(),f.drawImage(h,g*.02,x*.02,g*.96,x*.96),n.needsUpdate=!0,s.material.opacity=1},h.src="/System/assets/logo4.png"}let r=Ot(1024,512,(h,d,f)=>{h.fillStyle="#14161e",h.fillRect(0,0,d,f);for(let g=0;g<8;g++)for(let x=0;x<4;x++){let m=22+Math.floor(Math.random()*10);h.fillStyle=`rgb(${m},${m+2},${m+10})`,h.fillRect(g*128+4,x*128+4,120,120),h.fillStyle="rgba(0,0,0,0.35)",h.fillRect(g*128+4,x*128+118,120,6)}h.fillStyle="rgba(32,224,255,0.55)",h.fillRect(0,250,d,5)},[10,2]),o=new K(new ot(cn,cn,10,96,1,!0),new Me({map:r,side:Kt,roughness:.6,metalness:.4}));o.position.y=5,dt.add(o);for(let[h,d]of[[.25,2154751],[9.6,16723888]]){let f=new K(new ot(cn-.05,cn-.05,.08,96,1,!0),new Le({color:d,side:Kt,toneMapped:!1}));f.position.y=h,dt.add(f)}let a=Ot(2048,1024,(h,d,f)=>{let g=h.createLinearGradient(0,0,0,f);g.addColorStop(0,"#0a0c1c"),g.addColorStop(1,"#03040a"),h.fillStyle=g,h.fillRect(0,0,d,f);for(let x=0;x<1600;x++){let m=Math.random();h.fillStyle=`rgba(255,255,255,${m*m})`;let p=Math.random()<.03?3:1.4;h.fillRect(Math.random()*d,Math.random()*f*.9,p,p)}for(let x=0;x<4;x++){let m=Math.random()*d,p=Math.random()*f*.6,v=h.createRadialGradient(m,p,0,m,p,260);v.addColorStop(0,x%2?"rgba(120,60,255,0.18)":"rgba(255,120,40,0.13)"),v.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=v,h.fillRect(0,0,d,f)}}),l=new K(new Ut(cn,64,24,0,Math.PI*2,0,Math.PI/2),new Le({map:a,side:Kt,fog:!1}));l.position.y=10,l.scale.y=.55,dt.add(l);let c=new Me({color:2237743,roughness:.35,metalness:.8});for(let h=-1;h<Gr;h++){let d=(h+.5-(Gr-1)/2)*Il,f=Math.sin(d)*(cn-.6),g=-Math.cos(d)*(cn-.6),x=new K(new Ge(1,10,.9),c);x.position.set(f,5,g),x.rotation.y=-d,dt.add(x);let m=new K(new Ge(.08,9,.08),new Le({color:h%2?2154751:16723888,toneMapped:!1}));m.position.set(Math.sin(d)*(cn-1.08),5,-Math.cos(d)*(cn-1.08)),dt.add(m)}dt.add(new Lo(8425664,3154968,1));let u=new vn(16769728,60,30,1.6);u.position.set(0,9,0),dt.add(u)}var ts=null;function rE(){ts=new $e,ts.position.set(0,6.2,0),dt.add(ts);let i=Ot(2048,256,(t,n,s)=>{t.clearRect(0,0,n,s),t.textAlign="center",t.textBaseline="middle",t.font='400 150px Impact, "Arial Black", sans-serif';for(let[r,o,a]of[[n*.25,"SPK","#ff7fd8"],[n*.75,"PORTAL","#9ff3ff"]])t.shadowColor=a,t.shadowBlur=8,t.fillStyle=a,t.fillText(o,r,s/2)}),e=new K(new ot(3.6,3.6,.9,96,1,!0),new Le({map:i,transparent:!0,side:Nn,toneMapped:!1,depthWrite:!1,opacity:.85,color:13684944}));ts.add(e);for(let t of[-.62,.62]){let n=new K(new Zn(3.6,.025,6,128),new Le({color:16723888,toneMapped:!1}));n.rotation.x=Math.PI/2,n.position.y=t,ts.add(n)}}var oE="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",aE=`
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
}`,fi=[];function Yu(i,e,t){let n=new Ri,s=i/2-t,r=e-i/2;return n.moveTo(-s,t),n.lineTo(s,t),n.lineTo(s,r),n.absarc(0,r,s,0,Math.PI,!1),n.lineTo(-s,t),n}function lE(i,e){let t=(i-(Gr-1)/2)*Il,n=new C(Math.sin(t)*Ju,0,-Math.cos(t)*Ju),s=new $e;s.position.copy(n),s.lookAt(0,0,0),dt.add(s);let r=new Re(em[i%em.length]),o=!!e,a=3.4,l=4.7,c=Yu(a+.7,l+.35,0),u=Yu(a,l,0);c.holes.push(new Ss(u.getPoints(48)));let h=new Mr(c,{depth:.5,bevelEnabled:!0,bevelThickness:.06,bevelSize:.05,bevelSegments:2,curveSegments:48});h.translate(0,0,-.25);let d=new K(h,new Me({color:5593964,roughness:.35,metalness:.75}));s.add(d);let f=u.getPoints(64).map(W=>new C(W.x,W.y,.27)),g=new K(new il(new So(f,!1),128,.045,6,!1),new Le({color:o?r:new Re(4475477),toneMapped:!1}));s.add(g);let x=new Tt({vertexShader:oE,fragmentShader:aE,transparent:!0,depthWrite:!1,side:It,uniforms:{t:{value:Math.random()*10},c1:{value:r.clone().multiplyScalar(1)},c2:{value:r.clone().multiplyScalar(.18)},on:{value:o?1:0},hot:{value:0}}}),m=new Io(Yu(a,l,0),48),p=m.attributes.uv,v=m.attributes.position;for(let W=0;W<p.count;W++)p.setXY(W,(v.getX(W)+a/2)/a,v.getY(W)/l);let y=new K(m,x);s.add(y);let _=new K(new ot(2.6,2.8,.12,48,1,!1,-Math.PI/2,Math.PI),new Me({color:1776933,roughness:.4,metalness:.7}));_.position.set(0,.06,.05),s.add(_);let P=new K(new Co(2.55,2.62,48,1,Math.PI,Math.PI),new Le({color:o?r:3357252,toneMapped:!1,side:It}));P.rotation.x=-Math.PI/2,P.position.set(0,.125,.05),s.add(P);let b="#"+r.getHexString(),R=Ns(o?[{t:String(i+1),size:64,c:b,glow:b},{t:(e.name||e.ordner).toUpperCase(),size:92,c:"#ffffff",glow:b}]:[{t:String(i+1),size:64,c:"#667"},{t:"BALD VERF\xDCGBAR",size:80,c:"#8a8f9c"}],{w:1024,h:300,pw:4.4});if(R.position.set(0,l+1.85,.1),s.add(R),o&&(e.genre||e.spieler)){let W=Ns([{t:[e.genre,e.spieler].filter(Boolean).join("  \xB7  "),size:54,c:"#d8d2c6",font:'"Segoe UI", Arial, sans-serif',weight:600}],{w:1400,h:110,pw:3.8});W.position.set(0,l+.82,.3),s.add(W)}let I=null;o&&(I=new vn(r,14,9,1.8),I.position.set(0,2.2,1.6),s.add(I));let S=null;if(o){let L=new Ct,O=new Float32Array(70*3),z=new Float32Array(70);for(let F=0;F<70;F++)O[F*3]=(Math.random()-.5)*3,O[F*3+1]=Math.random()*4.5,O[F*3+2]=.2+Math.random()*1.2,z[F]=.3+Math.random()*.9;L.setAttribute("position",new Ft(O,3)),S=new yr(L,new bs({color:r,size:.06,transparent:!0,opacity:.9,toneMapped:!1,depthWrite:!1,blending:Kn})),S.userData.sp=z,s.add(S)}let E=new C(0,0,1).applyQuaternion(s.quaternion),D=new C(1,0,0).applyQuaternion(s.quaternion);fi.push({i,game:e,on:o,g:s,mat:x,light:I,parts:S,pos:n,n:E,t:D,col:b})}var ns=null,ui=null,Xt=null;function Br(i,e,t){let n=new $e,s=null,r=null;if(ns&&Xt){let a=Tl(Xt,t||Dr).m;a.rotation.y=Math.PI,n.add(a),s=new Cn(a),r={};for(let l of["idle","walk","run","jump"])ui[l]&&(r[l]=s.clipAction(ui[l]),r[l].play(),r[l].setEffectiveWeight(l==="idle"?1:0))}else if(ns){let a=Oo(ns.scene);if(!Br.sc){let c=new an().setFromObject(ns.scene);Br.sc=1.8/(c.max.y-c.min.y)}a.scale.setScalar(Br.sc),a.rotation.y=Math.PI;let l=new Re(e);a.traverse(c=>{if(c.isMesh||c.isSkinnedMesh){c.frustumCulled=!1;let u=c.material&&/Joint/i.test(c.material.name);c.material=new Me({color:u?1711138:l,roughness:.55,metalness:.15,emissive:u?0:l,emissiveIntensity:u?0:.08})}}),n.add(a),s=new Cn(a),r={};for(let c of["idle","walk","run","jump"])ui[c]&&(r[c]=s.clipAction(ui[c]),r[c].play(),r[c].setEffectiveWeight(c==="idle"?1:0))}else{let a=new K(new nl(.3,1.1,4,12),new Me({color:e}));a.position.y=.9,n.add(a)}let o=Ns([{t:i,size:80,c:e,font:'"Segoe UI", Arial, sans-serif',weight:700,glow:"rgba(0,0,0,0.9)"}],{w:768,h:128,pw:1.6});return o.position.y=2.15,n.add(o),dt.add(n),{root:n,mixer:s,act:r,tag:o,w:{idle:1,walk:0,run:0,jump:0}}}function nm(i,e,t,n){if(!i.mixer)return;let s={idle:0,walk:0,run:0,jump:0};t?s.jump=1:e>4.2?s.run=1:e>.4?s.walk=1:s.idle=1;for(let r in i.w)i.w[r]+=(s[r]-i.w[r])*Math.min(1,n*8),i.act[r]&&i.act[r].setEffectiveWeight(i.w[r]);i.mixer.update(n)}var ct=null,ni=null;function od(){if(ct){ct.state==="suspended"&&ct.resume();return}try{ct=new(window.AudioContext||window.webkitAudioContext),ni=ct.createGain(),ni.gain.value=.9*(Ne.vol==null?.8:Ne.vol),ni.connect(ct.destination);let i=ct.createGain();i.gain.value=.035;let e=ct.createBiquadFilter();e.type="lowpass",e.frequency.value=600,e.connect(i),i.connect(ni);for(let s of[55,82.4,110.2,164.8]){let r=ct.createOscillator();r.type="sawtooth",r.frequency.value=s,r.detune.value=(Math.random()-.5)*12;let o=ct.createGain();o.gain.value=.25,r.connect(o),o.connect(e),r.start()}let t=ct.createOscillator();t.frequency.value=.07;let n=ct.createGain();n.gain.value=250,t.connect(n),n.connect(e.frequency),t.start()}catch{ct=null}}function cE(i){let e=ct.createBuffer(1,ct.sampleRate*i,ct.sampleRate),t=e.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;return e}function ad(){if(!ct)return;let i=ct.currentTime,e=ct.createBufferSource();e.buffer=cE(2.2);let t=ct.createBiquadFilter();t.type="bandpass",t.Q.value=2,t.frequency.setValueAtTime(200,i),t.frequency.exponentialRampToValueAtTime(4e3,i+1.6);let n=ct.createGain();n.gain.setValueAtTime(1e-4,i),n.gain.exponentialRampToValueAtTime(.9,i+.5),n.gain.exponentialRampToValueAtTime(1e-4,i+2.1),e.connect(t),t.connect(n),n.connect(ni),e.start(i);let s=ct.createOscillator();s.type="sine",s.frequency.setValueAtTime(90,i),s.frequency.exponentialRampToValueAtTime(900,i+1.5);let r=ct.createGain();r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(.35,i+.4),r.gain.exponentialRampToValueAtTime(1e-4,i+1.8),s.connect(r),r.connect(ni),s.start(i),s.stop(i+2)}function ld(i){if(!ct)return;let e=ct.currentTime,t=ct.createOscillator();t.type="triangle",t.frequency.value=i?880:520;let n=ct.createGain();n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.25),t.connect(n),n.connect(ni),t.start(e),t.stop(e+.3)}var Rs=null;function hE(i){if(ct){if(!Rs){Rs=ct.createGain(),Rs.gain.value=0,Rs.connect(ni);let e=ct.createOscillator();e.type="sine",e.frequency.value=72;let t=ct.createOscillator();t.type="sine",t.frequency.value=108.5,e.connect(Rs),t.connect(Rs),e.start(),t.start()}Rs.gain.setTargetAtTime(i*.12,ct.currentTime,.2)}}var Ue={pos:new C(0,0,0),vel:new C,yaw:0,pitch:0,ground:!0},it={},Zt=!1,en=!1,ht=!1;function fm(i){let e=Math.hypot(i.x,i.z),t=Math.atan2(i.x,-i.z),n=Math.abs(t)<Gr/2*Il-.02?cn-.45:Ju+.25;if(e>n&&(i.x*=n/e,i.z*=n/e),xn.collide(i),yn.collide(i),ti.pos){let s=i.x-ti.pos.x,r=i.z-ti.pos.z,o=Math.hypot(s,r),a=.7;o<a&&o>1e-4&&(i.x=ti.pos.x+s/o*a,i.z=ti.pos.z+r/o*a)}if(zt){let s=i.x-zt.pos.x,r=i.z-zt.pos.z,o=Math.hypot(s,r),a=1.05;o<a&&o>1e-4&&(i.x=zt.pos.x+s/o*a,i.z=zt.pos.z+r/o*a)}if(kn.pos){let s=i.x-kn.pos.x,r=i.z-kn.pos.z,o=Math.hypot(s,r),a=1.35;o<a&&o>1e-4&&(i.x=kn.pos.x+s/o*a,i.z=kn.pos.z+r/o*a)}for(let s of fi){let r=i.x-s.pos.x,o=i.z-s.pos.z,a=r*s.n.x+o*s.n.z,l=r*s.t.x+o*s.t.z;for(let c of[-1,1]){let u=s.pos.x+s.t.x*c*2.05,h=s.pos.z+s.t.z*c*2.05,d=i.x-u,f=i.z-h,g=Math.hypot(d,f),x=.45+cm;g<x&&g>1e-4&&(i.x=u+d/g*x,i.z=h+f/g*x)}if(s.side==null&&(s.side=1),Math.abs(l)>=2.4?s.side=a>=.02?1:-1:a>=.55?s.side=1:a<=-.5&&(s.side=-1),Math.abs(l)<2.4&&a<.55&&a>-.5&&!(s.on&&Math.abs(l)<1.55&&!ht&&s.side>0)){let u=(s.side>0?.55:-.5)-a;i.x+=s.n.x*u,i.z+=s.n.z*u}}}function uE(){if(!ht)for(let i of fi){if(!i.on)continue;let e=Ue.pos.x-i.pos.x,t=Ue.pos.z-i.pos.z,n=e*i.n.x+t*i.n.z,s=e*i.t.x+t*i.t.z;if(i.side>0&&n<.3&&n>-2&&Math.abs(s)<1.5&&Ue.pos.y<3){ym(i.i);return}}}var pm="gbgc-raum-v1-",Is={debug:1,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}};hn.get("peerhost")&&(Is.host=hn.get("peerhost"),Is.port=+(hn.get("peerport")||9e3),Is.path=hn.get("peerpath")||"/",Is.secure=!1,Is.config={iceServers:[]});var pe={role:"none",code:null,peer:null,conns:new Map,conn:null,myId:0,nextId:1,status:""},Bt=new Map,dE=0;function Nr(i,e){pe.status=i,oe("netStatus").textContent=i,oe("netStatus").className=e?"warn":"",as()}function Ll(){try{pe.conn&&pe.conn.close()}catch{}try{pe.peer&&pe.peer.destroy()}catch{}pe.peer=null,pe.conn=null,pe.conns.clear();for(let i of Bt.values())dt.remove(i.av.root);Bt.clear(),clearInterval(pe.joinRetry),pe.joinRetry=null}function Ls(i=0){if(Ll(),pe.role="host",pe.code=um(),pe.myId=0,pe.nextId=1,pe.names=new Map,Nr("Raum wird ge\xF6ffnet\u2026"),!window.Peer){Nr("Offline \u2013 Freunde k\xF6nnen gerade nicht beitreten.",!0);return}let e=new window.Peer(pm+pe.code,Is);pe.peer=e,_m(e),e.on("open",()=>{pe.peer===e&&Nr("Raum ist offen \u2013 Freunde k\xF6nnen beitreten.")}),e.on("error",t=>{if(pe.peer===e){if(t.type==="unavailable-id"&&i<12){Nr("Raum wird ge\xF6ffnet\u2026 ("+(i+1)+")");try{e.destroy()}catch{}setTimeout(()=>{pe.role==="host"&&pe.peer===e&&Ls(i+1)},2500);return}(t.type==="network"||t.type==="server-error"||t.type==="socket-error"||t.type==="socket-closed")&&Nr("Keine Internet-Verbindung \u2013 Freunde k\xF6nnen gerade nicht beitreten.",!0)}}),e.on("disconnected",()=>{setTimeout(()=>{try{pe.peer===e&&e.disconnected&&!e.destroyed&&e.reconnect()}catch{}},3e3)}),e.on("connection",t=>{t.on("data",s=>{if(pe.peer!==e||!s)return;let r=pe.conns.get(t.peer);if(s.t==="hello"){if(r)return;let o=pe.nextId++;r={conn:t,id:o},pe.conns.set(t.peer,r);let a=String(s.name||"Spieler").slice(0,16),l=hd(o,a,null,s.lk);l.pid=t.peer;try{t.send({t:"welcome",id:o,code:pe.code}),t.send({t:"dg",s:xn.state()}),t.send(Object.assign({t:"ufoS"},yn.state()))}catch{}qt(a+" ist dem Raum beigetreten"),ld(!0);return}if(r)if(s.t==="s"){let o=Bt.get(r.id);o&&(o.tp.fromArray(s.p),o.ty=s.y,o.sp=s.v||0,o.air=!!s.a,o.tk!==!!s.tk&&(o.tk=!!s.tk,as()))}else if(s.t==="look"){let o=Bt.get(r.id);o&&cd(o,s.lk)}else if(s.t==="portal"){let o=fi[s.i];o&&o.on&&Mm(s.i,Bt.get(r.id)?.name)}else s.t==="arc"?Im(Bt.get(r.id)?.name):s.t==="dg1"?xn.hostTake(s.i|0,s.k|0):s.t==="ufo"?yn.hostRequest():s.t==="radc"&&yn.control(String(s.c))});let n=()=>{let s=pe.conns.get(t.peer);if(s){pe.conns.delete(t.peer);let r=Bt.get(s.id);r&&(qt(r.name+" hat den Raum verlassen"),xm(s.id))}};t.on("close",n),t.on("error",n)})}function Al(i,e={}){if(i=i.toUpperCase().replace(/[^A-Z0-9]/g,""),i.length!==5){oe("joinInfo").textContent="Der Code hat 5 Zeichen.";return}if(i===um()&&!e.silent){oe("joinInfo").textContent="Das ist dein eigener Raum-Code.";return}if(!window.Peer){oe("joinInfo").textContent="Keine Verbindung m\xF6glich (Internet?).";return}let t=()=>new Promise(s=>{let r=new window.Peer(Is);_m(r);let o=!1,a=c=>{if(!o){if(o=!0,clearTimeout(l),!c)try{r.destroy()}catch{}s(c?r:null)}},l=setTimeout(()=>a(!1),15e3);r.on("error",()=>a(!1)),r.on("open",()=>{let c=r.connect(pm+i,{reliable:!0,serialization:"json"});c.on("open",()=>{c.send({t:"hello",name:Ne.name,lk:Ne.look})}),c.on("data",u=>{if(u&&u.t==="welcome"&&!o){r._conn=c,r._id=u.id,a(!0);return}r===pe.peer&&fE(u)}),c.on("close",()=>{r===pe.peer&&!ht&&im(i)}),c.on("error",()=>{r===pe.peer&&!ht&&im(i)})})});return e.silent||(oe("joinInfo").textContent="Verbinde mit "+i+"\u2026"),(async()=>{for(let s=0;s<3;s++){let r=await t();if(r)return r;if(pe.role==="client"&&pe.code===i)return null}return null})().then(s=>{if(!s)return e.silent||(oe("joinInfo").textContent="Kein Raum mit diesem Code gefunden. Ist dein Freund in seinem Portal?"),!1;Ll(),pe.role="client",pe.code=i,pe.peer=s,pe.conn=s._conn,pe.myId=s._id,Nr("Verbunden mit dem Raum von deinem Freund."),oe("joinInfo").textContent="",qt("Du bist im Raum "+i),ld(!0);try{sessionStorage.setItem("gbgc-letzter-raum",i)}catch{}return e.then&&e.then(),!0})}function im(i){qt("Verbindung zum Raum verloren \u2013 du bist jetzt in deinem eigenen Raum."),Ls(),mm(i)}function mm(i){let e=0;clearInterval(pe.joinRetry);let t=()=>{if(pe.role==="client"||ht){clearInterval(pe.joinRetry);return}if(++e>60){clearInterval(pe.joinRetry);return}Al(i,{silent:!0})};pe.joinRetry=setInterval(t,5e3),setTimeout(t,800)}function fE(i){if(i)if(i.t==="w"){let e=new Set;for(let t of i.pl){if(t.id===pe.myId)continue;e.add(t.id);let n=Bt.get(t.id);n?t.lk&&cd(n,t.lk):n=hd(t.id,t.n,t.c,t.lk),n.tp.fromArray(t.p),n.ty=t.y,n.sp=t.v||0,n.air=!!t.a,n.pid=t.pid,n.tk!==!!t.tk&&(n.tk=!!t.tk,as())}for(let t of[...Bt.keys()])e.has(t)||xm(t)}else i.t==="go"?Em(i.i,i.code,"join",i.who):i.t==="arcgo"?gd(i.code,"join",i.who):i.t==="msg"?qt(i.s):i.t==="dg"&&Array.isArray(i.s)?xn.setState(i.s):i.t==="ufo"?yn.remoteWave(i.n|0):i.t==="ufoS"?yn.setState(i):i.t==="rad"&&i.s&&yn.setRad(i.s,i.n|0)}function cd(i,e){let t=gn(e),n=JSON.stringify(t);if(i.lkStr===n||(i.lkStr=n,i.look=t,!Xt))return;let s=i.av;i.av=Br(i.name,i.color,t),i.av.root.position.copy(s.root.position),i.av.root.rotation.copy(s.root.rotation),dt.remove(s.root),gm(i,t)}function gm(i,e){Xt&&e.ch&&!Ur(Xt,e.ch)&&zo(Xt,e.ch).then(()=>{Ur(Xt,e.ch)&&i.look===e&&(i.lkStr="",cd(i,e))})}function hd(i,e,t,n){let s=t||Xo[(1+dE++)%Xo.length],r=gn(n),o={id:i,name:e,color:s,av:Br(e,s,r),look:r,lkStr:JSON.stringify(r),p:new C(0,0,0),tp:new C(0,0,0),y:0,ty:0,sp:0,air:!1,fresh:!0};return Bt.set(i,o),gm(o,r),as(),o}function xm(i){let e=Bt.get(i);e&&(dt.remove(e.av.root),Bt.delete(i),as())}var Ku=0,ju=0,ft={stream:null,calls:new Map,talking:!1,audios:new Map,asking:!1};function _m(i){i.on("call",e=>{try{e.answer()}catch{return}e.on("stream",n=>{let s=ft.audios.get(e.peer);s||(s=new Audio,s.autoplay=!0,s.playsInline=!0,ft.audios.set(e.peer,s),document.body.appendChild(s)),s.srcObject=n,s.volume=Ne.vol==null?.8:Ne.vol,s.muted=Ne.vol===0;let r=s.play();r&&r.catch&&r.catch(()=>{})});let t=()=>{let n=ft.audios.get(e.peer);n&&(n.srcObject=null,n.remove(),ft.audios.delete(e.peer))};e.on("close",t),e.on("error",t)})}async function pE(){if(ft.stream)return!0;if(ft.asking)return!1;if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return qt("Sprechen geht in diesem Browser leider nicht."),!1;ft.asking=!0;try{ft.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch{return qt("Mikrofon nicht erlaubt \u2013 bitte im Browser das Mikrofon erlauben."),ft.asking=!1,!1}ft.asking=!1;for(let i of ft.stream.getAudioTracks())i.enabled=!1;return ud(),!0}function ud(){if(!(!ft.stream||!pe.peer||pe.peer.destroyed)){for(let[i,e]of ft.calls)if(e._peer!==pe.peer||![...Bt.values()].some(t=>t.pid===i)){try{e.close()}catch{}ft.calls.delete(i)}for(let i of Bt.values())if(!(!i.pid||ft.calls.has(i.pid)))try{let e=pe.peer.call(i.pid,ft.stream);if(!e)continue;e._peer=pe.peer,ft.calls.set(i.pid,e);let t=()=>{ft.calls.get(i.pid)===e&&ft.calls.delete(i.pid)};e.on("close",()=>{console.log("[voice] call closed",i.pid),t()}),e.on("error",n=>{console.log("[voice] call error",n&&n.type,n&&n.message),t()})}catch(e){console.log("[voice] call failed",e&&e.message)}}}async function mE(i){if(i&&!ft.stream){if(!await pE()){Go=!1;return}if(!Go)return}if(ft.talking=i&&!!ft.stream,ft.stream)for(let e of ft.stream.getAudioTracks())e.enabled=ft.talking;oe("talkInd").textContent=Qt?"\u{1F3A4} Mikro AN \u2013 nochmal \u{1F3A4} dr\xFCcken zum Ausschalten":"\u{1F3A4} Mikro AN \u2013 nochmal V dr\xFCcken zum Ausschalten",oe("talkInd").classList.toggle("hidden",!ft.talking),ft.talking&&!Bt.size&&qt("Mikro ist an \u2013 aber gerade ist niemand im Raum."),as()}var Go=!1;setInterval(()=>{pe.role!=="none"&&ud()},1500);function vm(){Go=!Go,mE(Go)}function gE(i){if(ju+=i,ju>1&&(ju=0,ud()),Ku+=i,Ku<1/15)return;Ku=0;let e=Math.hypot(Ue.vel.x,Ue.vel.z);if(pe.role==="client"&&pe.conn&&pe.conn.open)try{pe.conn.send({t:"s",p:[+Ue.pos.x.toFixed(2),+Ue.pos.y.toFixed(2),+Ue.pos.z.toFixed(2)],y:+Ue.yaw.toFixed(3),v:+e.toFixed(1),a:!Ue.ground,tk:ft.talking})}catch{}else if(pe.role==="host"&&pe.conns.size){let t=[{id:0,n:Ne.name,c:Xo[0],lk:Ne.look,p:[+Ue.pos.x.toFixed(2),+Ue.pos.y.toFixed(2),+Ue.pos.z.toFixed(2)],y:+Ue.yaw.toFixed(3),v:+e.toFixed(1),a:!Ue.ground,pid:pe.peer&&pe.peer.id,tk:ft.talking}];for(let n of Bt.values())t.push({id:n.id,n:n.name,c:n.color,lk:n.look,p:[+n.tp.x.toFixed(2),+n.tp.y.toFixed(2),+n.tp.z.toFixed(2)],y:+n.ty.toFixed(3),v:n.sp,a:n.air,pid:n.pid,tk:!!n.tk});for(let n of pe.conns.values())try{n.conn.open&&n.conn.send({t:"w",pl:t})}catch{}}}function ym(i){if(!ht){if(pe.role==="client"&&pe.conn&&pe.conn.open){try{pe.conn.send({t:"portal",i})}catch{}ht=!0,bm(fi[i],"Warte auf den Raum\u2026"),ad(),setTimeout(()=>{ht&&!ss&&(ht=!1,oe("flash").classList.remove("on"),Ue.pos.addScaledVector(fi[i].n,2.5))},5e3);return}Mm(i,Ne.name)}}var ss=!1;function Mm(i,e){if(ss)return;let t=rd();for(let n of pe.conns.values())try{n.conn.open&&n.conn.send({t:"go",i,code:t,who:e})}catch{}Em(i,t,"host",e)}function Em(i,e,t,n){let s=fi[i];if(!s||!s.on||ss)return;ss=!0,ht=!0;let r=s.game;bm(s,(n&&n!==Ne.name?n+" hat das Portal betreten \u2013 ":"")+(r.name||r.ordner)+" startet\u2026"),ad();try{sessionStorage.setItem("gbgc-zurueck",JSON.stringify({role:pe.role==="client"?"client":"host",code:pe.code,t:Date.now()}))}catch{}let o=r.pfad+(r.start||"spiel/")+"?konsole="+t+"&code="+e+"&name="+encodeURIComponent(Ne.name)+(hn.get("peerhost")?"&peerhost="+hn.get("peerhost")+"&peerport="+(hn.get("peerport")||9e3)+"&ice=none&gfx=niedrig&noshadow":"");setTimeout(()=>{Ll(),location.href=o},t==="host"?1400:2600)}function bm(i,e){let t=oe("flash");t.style.background=`radial-gradient(circle at 50% 50%, #fff 0%, ${i.col} 45%, #000 100%)`,t.classList.add("on"),oe("flashText").textContent=e,document.pointerLockElement&&document.exitPointerLock()}function qt(i){let e=document.createElement("div");e.className="toast",e.textContent=i,oe("toasts").appendChild(e),setTimeout(()=>e.classList.add("out"),4200),setTimeout(()=>e.remove(),5e3)}function as(){let i=[{n:Ne.name+" (du)",c:pe.role==="client"?"#fff":Xo[0],tk:ft.talking}];for(let t of Bt.values())i.push({n:t.name,c:t.color,tk:t.tk});let e="";pe.role==="host"?e=`<div class="lbl">Dein Raum-Code</div><div class="code">${pe.code}</div><div class="hint">Freunde: Portal starten \u2192 \u201EFreund beitreten" \u2192 diesen Code eingeben</div>`:pe.role==="client"&&(e=`<div class="lbl">Im Raum von deinem Freund</div><div class="code">${pe.code}</div>`),oe("room").innerHTML=e+`<div class="lbl" style="margin-top:10px">Im Raum (${i.length})</div>`+i.map(t=>`<div class="pl"><i style="background:${t.c}"></i>${di(t.n)}${t.tk?' <b class="tk">\u{1F3A4} spricht</b>':""}</div>`).join("")+`<div class="st ${oe("netStatus").className}">${di(pe.status)}</div>`,oe("mCode").textContent=pe.role==="host"?pe.code:pe.code||"\u2014",oe("mCodeLbl").textContent=pe.role==="client"?"Du bist im Raum":"Dein Raum-Code"}var di=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function rs(i){oe("menu").classList.toggle("hidden",!i),oe("hud").classList.toggle("dim",i)}function Fs(){if(Ds&&!Qt){Zt=!0,oe("clickHint").classList.add("hidden"),rs(!1);return}if(Qt){Zt=!0,oe("clickHint").classList.add("hidden"),rs(!1);try{let i=document.documentElement;!document.fullscreenElement&&i.requestFullscreen&&i.requestFullscreen({navigationUI:"hide"}).then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}catch{}return}try{let i=is.requestPointerLock({unadjustedMovement:!0});i&&i.catch&&i.catch(()=>{try{is.requestPointerLock()}catch{}})}catch{try{is.requestPointerLock()}catch{}}}var Ds=!1;is.addEventListener("mousedown",i=>{i.isTrusted&&(Ds=!1)});Qp({canvas:is,first:["bEnter","bResume"],isPlaying:()=>en&&Zt&&!tn&&!ht,canPlay:()=>en&&!Zt&&!tn&&!ht,padLock:()=>{Ds=!0,Fs()},pause:()=>{Zt=!1,rs(!0)},back:()=>{tn?ls():en&&!ht&&(Ds=!0,Fs())},onActive:()=>{if(Ds=!0,document.pointerLockElement)try{document.exitPointerLock()}catch{}}});function dd(){od(),en=!0,rs(!1),Fs()}oe("name").value=Ne.name;var Sm=()=>{for(let[i,e]of[["vol","vVol"],["wVol","wvVol"]])oe(i).value=Ne.vol,oe(e).textContent=Math.round(Ne.vol*100)+"%";oe("muteAll").classList.toggle("on",Ne.vol===0),oe("muteAll").textContent=Ne.vol===0?"\u{1F50A} Ton an":"\u{1F507} Ton aus",oe("volBtn").textContent=Ne.vol===0?"\u{1F507}":"\u{1F50A}",oe("volBtn").classList.toggle("off",Ne.vol===0)},ed=i=>{Ne.vol=Math.max(0,Math.min(1,i)),Sm(),ni&&(ni.gain.value=.9*Ne.vol);for(let e of ft.audios.values())e.volume=Ne.vol,e.muted=Ne.vol===0;Pl()};Sm();var sm=Ne.vol||.8;oe("vol").oninput=oe("wVol").oninput=i=>ed(+i.target.value);oe("muteAll").onclick=()=>{Ne.vol>0?(sm=Ne.vol,ed(0)):ed(sm||.8)};oe("volBtn").onclick=()=>oe("volPop").classList.toggle("hidden");for(let i of["mousedown","pointerdown","touchstart","click"])oe("volW").addEventListener(i,e=>e.stopPropagation());for(let i of["mousedown","touchstart"])document.addEventListener(i,e=>{oe("volW").contains(e.target)||oe("volPop").classList.add("hidden")},{capture:!0,passive:!0});oe("name").oninput=()=>{Ne.name=oe("name").value.trim().slice(0,16)||"Neue Pussy1",Pl(),as()};oe("bEnter").onclick=()=>{pe.role==="none"&&Ls(),dd()};oe("bJoin").onclick=()=>{od();let i=oe("code").value;Al(i).then(e=>{e&&dd()})};oe("code").addEventListener("keydown",i=>{i.key==="Enter"&&oe("bJoin").click()});oe("bOwn").onclick=()=>{Ls(),qt("Du bist wieder in deinem eigenen Raum."),dd()};is.addEventListener("click",()=>{en&&!Zt&&!ht&&!tn?Fs():Zt&&Et&&pd(Et)});document.addEventListener("pointerlockchange",()=>{Ds||(Zt=document.pointerLockElement===is,oe("clickHint").classList.toggle("hidden",Zt||!en||ht||tn),!Zt&&en&&!ht&&!tn&&rs(!0))});document.addEventListener("mousemove",i=>{if(!Zt)return;let e=.0022*(Ne.sens||1);Ue.yaw-=i.movementX*e,Ue.pitch-=i.movementY*e*(Ne.invert?-1:1),Ue.pitch=Math.max(-1.45,Math.min(1.45,Ue.pitch))});document.addEventListener("keydown",i=>{if(i.code==="F11"){i.preventDefault();try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>{en&&!oe("menu").classList.contains("hidden")||en&&Fs()}).catch(()=>{})}catch{}return}document.activeElement&&/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)||(it[i.code]=!0,(i.code==="KeyV"||i.code==="KeyM")&&en&&!i.repeat&&vm(),i.code==="KeyE"&&Zt&&Et&&pd(Et),i.code==="Space"&&i.preventDefault())},!0);document.addEventListener("keyup",i=>{it[i.code]=!1});window.addEventListener("blur",()=>{for(let i in it)it[i]=!1});function xE(){if(!Qt)return;let i=document.createElement("div");i.id="touch",i.className="hidden",i.innerHTML='<div id="tLook"></div><div id="tJoy"><div id="tJoyBase"></div><div id="tKnob"></div></div><div id="tBtns"><button class="tb" id="tTalk">\u{1F3A4}</button><button class="tb big" id="tUse">E</button><button class="tb" id="tJump">SPRING</button></div><button id="tPause" aria-label="Men\xFC">\u2630</button>',document.body.appendChild(i);let e=oe("tLook"),t=oe("tJoy"),n=oe("tKnob"),s=new Map;e.addEventListener("touchstart",g=>{g.preventDefault();for(let x of g.changedTouches)s.set(x.identifier,[x.clientX,x.clientY])},{passive:!1}),e.addEventListener("touchmove",g=>{g.preventDefault();for(let x of g.changedTouches){let m=s.get(x.identifier);if(!m)continue;let p=.0055*(Ne.sens||1);Ue.yaw-=(x.clientX-m[0])*p,Ue.pitch=Math.max(-1.45,Math.min(1.45,Ue.pitch-(x.clientY-m[1])*p*.8)),m[0]=x.clientX,m[1]=x.clientY}},{passive:!1});let r=g=>{for(let x of g.changedTouches)s.delete(x.identifier)};e.addEventListener("touchend",r),e.addEventListener("touchcancel",r);let o=null,a=0,l=0,c=56,u=(g,x)=>{let m=g-a,p=x-l,v=Math.hypot(m,p);v>c&&(m*=c/v,p*=c/v),n.style.transform=`translate(${m}px,${p}px)`;let y=m/c,_=p/c,P=.3;it.KeyW=_<-P,it.KeyS=_>P,it.KeyA=y<-P,it.KeyD=y>P},h=()=>{o=null,n.style.transform="",it.KeyW=it.KeyS=it.KeyA=it.KeyD=!1};t.addEventListener("touchstart",g=>{if(g.preventDefault(),o!==null)return;let x=g.changedTouches[0];o=x.identifier;let m=t.getBoundingClientRect();a=m.left+m.width/2,l=m.top+m.height/2,u(x.clientX,x.clientY)},{passive:!1}),t.addEventListener("touchmove",g=>{g.preventDefault();for(let x of g.changedTouches)x.identifier===o&&u(x.clientX,x.clientY)},{passive:!1});let d=g=>{for(let x of g.changedTouches)x.identifier===o&&h()};t.addEventListener("touchend",d),t.addEventListener("touchcancel",d);let f=(g,x,m)=>{let p=oe(g);p.addEventListener("touchstart",v=>{v.preventDefault(),v.stopPropagation(),p.classList.add("on"),x()},{passive:!1}),p.addEventListener("touchend",v=>{v.preventDefault(),p.classList.remove("on"),m&&m()},{passive:!1})};f("tJump",()=>{it.Space=!0},()=>{it.Space=!1}),f("tUse",()=>{Et&&pd(Et)}),f("tTalk",()=>vm()),oe("tPause").addEventListener("click",()=>{Zt=!1,h(),rs(!0)}),setInterval(()=>{i.classList.toggle("hidden",!(en&&Zt&&!ht&&!tn)),oe("tUse").classList.toggle("hot",!!Et),oe("tTalk").classList.toggle("mic",ft.talking),Zt||h()},150)}xE();var rm=new br,Cs=null;function Tm(){requestAnimationFrame(Tm);let i=Math.min(rm.getDelta(),.05),e=rm.elapsedTime,t=(it.KeyW||it.ArrowUp?1:0)-(it.KeyS||it.ArrowDown?1:0),n=(it.KeyD||it.ArrowRight?1:0)-(it.KeyA||it.ArrowLeft?1:0),s=Zt&&!ht,r=(it.ShiftLeft||it.ShiftRight?10.5:6.5)*xn.speedMul(),o=new C;s&&(o.set(n,0,-t),o.lengthSq()>0&&o.normalize().multiplyScalar(r).applyAxisAngle(new C(0,1,0),Ue.yaw),xn.drift(o,e));let a=Ue.ground?12:3;Ue.vel.x+=(o.x-Ue.vel.x)*Math.min(1,a*i),Ue.vel.z+=(o.z-Ue.vel.z)*Math.min(1,a*i),s&&it.Space&&Ue.ground&&(Ue.vel.y=6.2*xn.jumpMul(),Ue.ground=!1,yn.jump()),Ue.vel.y-=18*i,Ue.pos.addScaledVector(Ue.vel,i),Ue.pos.y<=0&&(Ue.pos.y=0,Ue.vel.y=0,Ue.ground=!0),fm(Ue.pos),uE(),In.position.set(Ue.pos.x,Ue.pos.y+nE+(Ue.ground?Math.sin(e*9)*.025*Math.min(1,Math.hypot(Ue.vel.x,Ue.vel.z)/6):0),Ue.pos.z),In.rotation.set(Ue.pitch,Ue.yaw,0),Cs=null;let l=1e9;for(let u of fi){u.mat.uniforms.t.value=e+u.i;let h=Math.hypot(Ue.pos.x-u.pos.x,Ue.pos.z-u.pos.z),d=u.on?Math.max(0,1-h/7):0;if(u.mat.uniforms.hot.value=d,u.light&&(u.light.intensity=12+Math.sin(e*2+u.i)*2+d*10),u.parts){let f=u.parts.geometry.attributes.position,g=u.parts.userData.sp;for(let x=0;x<f.count;x++){let m=f.getY(x)+g[x]*i;m>4.6&&(m=0),f.setY(x,m)}f.needsUpdate=!0}u.on&&h<l&&(l=h,h<6.5&&(Cs=u))}hE(Cs?Math.max(0,1-l/6.5):0);let c=oe("prompt");TE(),Et===md&&!ht?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ff7fd8">\u{1F579}\uFE0F SPK Arcade</b><br><small>${Qt?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Retro-Spiele spielen</small>`):Et===fd&&!ht?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ff7fd8">\u{1F455} S.P.K Merch</b><br><small>${Qt?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = T-Shirts ansehen</small>`):Et===xd&&!ht?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ffd23f">Umkleide</b><br><small>${Qt?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = umziehen</small>`):Et===_d&&!ht?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#9fe8b0">G\xE4stebuch</b><br><small>${Qt?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = lesen & reinschreiben</small>`):Et===Rl&&!ht?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#e3b27a">N\xE4chste Party</b><br><small>${Qt?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Flyer gro\xDF ansehen</small>`):Et&&Et.radio&&!ht?(c.classList.remove("hidden"),c.innerHTML=yn.prompt(Qt)):Et&&Et.secret&&!ht?(c.classList.remove("hidden"),c.innerHTML=xn.prompt(Et,Qt)):Et&&!ht?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ff7fd8">${di(Et.dj.name||"DJ")}</b><br><small>${Qt?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Instagram, SoundCloud & Co.</small>`):Cs&&!ht?(c.classList.remove("hidden"),c.innerHTML=`${Qt?"Geh ins Portal":"Lauf ins Portal"}: <b style="color:${Cs.col}">${di(Cs.game.name||Cs.game.ordner)}</b> startet sofort`+(Bt.size?"<br><small>Alle im Raum kommen mit</small>":"")):c.classList.add("hidden"),UE(i),ts&&(ts.rotation.y=e*.25,ts.position.y=6.2+Math.sin(e*.8)*.15);for(let u of Bt.values()){u.fresh&&(u.p.copy(u.tp),u.y=u.ty,u.fresh=!1),u.p.lerp(u.tp,Math.min(1,i*12));let h=u.ty-u.y;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;u.y+=h*Math.min(1,i*12),u.av.root.position.copy(u.p),u.av.root.rotation.y=u.y,u.av.tag.lookAt(In.position.x,u.p.y+2.15,In.position.z),nm(u.av,u.sp,u.air,i)}if(ci){let u=ti.pos&&Math.hypot(Ue.pos.x-ti.pos.x,Ue.pos.z-ti.pos.z)<12;ci.root.visible=!!u,Or&&(Or.visible=!!u||!0),u&&(ci.root.position.copy(Ue.pos),ci.root.rotation.y=Ue.yaw,nm(ci,Math.hypot(Ue.vel.x,Ue.vel.z),!Ue.ground,i))}pe.role!=="none"&&gE(i),xn.tick(i,e),yn.tick(i,e),zt&&zt.tick(e,Ue.pos.distanceTo(zt.pos)<14),xn.render(hi)||(hi?hi.render():os.render(dt,In))}var Zb=new C,_E=[["instagram","Instagram","#e1306c"],["facebook","Facebook","#1877f2"],["soundcloud","SoundCloud","#ff5500"],["tiktok","TikTok","#25f4ee"],["youtube","YouTube","#ff0000"],["spotify","Spotify","#1db954"],["mixcloud","Mixcloud","#5000ff"],["beatport","Beatport","#01ff95"],["website","Webseite","#ffffff"]],kr=[],Et=null,tn=!1;async function vE(){try{let e=await(await fetch("/System/djs.json",{cache:"no-store"})).json();return Array.isArray(e)?e:e.djs||[]}catch{return[]}}function yE(i,e){let s=Ot(512,640,r=>{let o=r.createLinearGradient(0,0,0,640);o.addColorStop(0,"#1a0f24"),o.addColorStop(1,"#07060c"),r.fillStyle=o,r.fillRect(0,0,512,640),r.fillStyle="#2b2236",r.beginPath(),r.arc(256,250,92,0,Math.PI*2),r.fill(),r.beginPath(),r.ellipse(256,520,170,150,0,Math.PI,0),r.fill(),r.strokeStyle="#ff2fb0",r.lineWidth=16,r.beginPath(),r.arc(256,250,112,Math.PI*1.08,Math.PI*1.92),r.stroke(),r.fillStyle="#ff2fb0",r.fillRect(128,240,30,62),r.fillRect(354,240,30,62),r.fillStyle="rgba(255,255,255,0.35)",r.font="600 26px system-ui, sans-serif",r.textAlign="center",r.fillText("Foto folgt",256,90)});if(i.foto){let r=new Image;r.onload=()=>{let o=s.image,a=o.getContext("2d"),l=Math.max(o.width/r.width,o.height/r.height),c=r.width*l,u=r.height*l;a.drawImage(r,(o.width-c)/2,(o.height-u)/2,c,u),s.needsUpdate=!0},r.src=/^(https?:)?\//.test(i.foto)?i.foto:"/System/dj-fotos/"+i.foto}return s}async function ME(){let i=await vE(),e=Math.max(1,i.length),t=sd+.45,n=lm-.62,s=.22,r=.06,o=.22,a=.24,l=Math.min((n-t-s-o-a-3*r)/e,.29),c=e*l+3*r+s+o+a,u=(t+n)/2-c/2+l/2,h=u+l*(e-1)/2,d=cn-.12,f=1.7,g=2.15,x=2.75,m=u+(e-1)*l+l/2+r+a/2,p=m+a/2+r+s/2;if(SE(m),RE(p,d),FE(p+s/2+r+o/2,d),!i.length)return;let v=Ot(1024,128,(P,b,R)=>{P.clearRect(0,0,b,R),P.textAlign="center",P.textBaseline="middle",P.font='400 120px Impact, "Arial Black", sans-serif',P.shadowColor="#ff2fb0",P.shadowBlur=6,P.fillStyle="#ff7fd8",P.fillText("SPK DJs",b/2,R/2)}),y=new K(new ut(6,.75),new Le({map:v,transparent:!0,toneMapped:!1,depthWrite:!1,color:13684944}));y.position.set(Math.sin(h)*(d-.05),x+g/2+.85,-Math.cos(h)*(d-.05)),y.lookAt(0,x+g/2+.85,0),dt.add(y);let _=new Me({color:1776418,roughness:.35,metalness:.8});i.forEach((P,b)=>{let R=u+b*l,I=new $e;I.position.set(Math.sin(R)*d,x,-Math.cos(R)*d),I.lookAt(0,x,0),dt.add(I);let S=new K(new Ge(f+.22,g+.22+.42,.08),_);S.position.y=-.21,I.add(S);let E=new K(new ut(f,g),new Le({map:yE(P,b),toneMapped:!1}));E.position.z=.05,I.add(E);let D=Ot(512,96,(z,F,re)=>{z.fillStyle="#0b0910",z.fillRect(0,0,F,re),z.textAlign="center",z.textBaseline="middle",z.font='400 58px Impact, "Arial Black", sans-serif',z.fillStyle="#fff",z.fillText(String(P.name||"DJ "+(b+1)).toUpperCase(),F/2,re/2+2)}),W=new K(new ut(f,.34),new Le({map:D,toneMapped:!1}));W.position.set(0,-g/2-.22,.05),I.add(W);let L=new K(new Ge(f+.3,.03,.03),new Le({color:16723888,toneMapped:!1}));L.position.set(0,g/2+.13,.06),I.add(L);let O=new Di(16769268,9,7,.5,.6,1.5);O.position.set(0,g/2+1.2,1.4),O.target=E,I.add(O),kr.push({dj:P,g:I,pic:E,edge:L,i:b})})}var fd={merch:!0},Hr=null,qo={url:"",text:"Offizielle S.P.K T-Shirts"},EE="/SPK%20-%20Fuck%20the%20Police/spiel/assets/spk_logo.png";function bE(i,e){let t=new Ri,n=i/2;t.moveTo(-n*.62,-e/2),t.lineTo(n*.62,-e/2),t.lineTo(n*.64,e*.18),t.lineTo(n*.98,e*.06),t.lineTo(n*1.18,e*.3),t.lineTo(n*.78,e*.5),t.lineTo(n*.24,e*.5),t.quadraticCurveTo(0,e*.36,-n*.24,e*.5),t.lineTo(-n*.78,e*.5),t.lineTo(-n*1.18,e*.3),t.lineTo(-n*.98,e*.06),t.lineTo(-n*.64,e*.18),t.closePath();let s=new Io(t,12),r=s.attributes.position,o=s.attributes.uv;for(let a=0;a<r.count;a++)o.setXY(a,(r.getX(a)+n*1.18)/(n*2.36),(r.getY(a)+e/2)/e);return s}var $u={};function om(i,e){let t=i+e;if($u[t])return $u[t];let n=new Image,s=Ot(256,256,(r,o,a)=>{r.fillStyle=i,r.fillRect(0,0,o,a);for(let l=0;l<900;l++)r.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},0.035)`,r.fillRect(Math.random()*o,Math.random()*a,2,2);r.strokeStyle="rgba(0,0,0,0.18)",r.lineWidth=3,r.beginPath(),r.moveTo(66,150),r.lineTo(80,210),r.moveTo(190,150),r.lineTo(176,210),r.stroke(),r.font='400 30px Impact, "Arial Black", sans-serif',r.textAlign="center",r.fillStyle=e,r.fillText("S.P.K",o/2,190),r.font="700 11px Arial",r.fillText("SOUNDSYSTEM",o/2,206)});return n.onload=()=>{let r=s.image,o=r.getContext("2d");(e==="#ffffff"||e==="#39ff88"||e==="#ff2fb0")&&(o.save(),o.globalCompositeOperation="source-over"),o.drawImage(n,88,70,80,80),e&&o.restore&&o.restore(),s.needsUpdate=!0},n.src=EE,$u[t]=s,s}async function SE(i){try{let L=await fetch("/System/merch.json",{cache:"no-store"});qo=Object.assign(qo,await L.json())}catch{}let e=cn-1.12,t=new $e;t.position.set(Math.sin(i)*e,0,-Math.cos(i)*e),t.lookAt(0,0,0),dt.add(t);let n=3.6,s=1.7,r=2.55,o=new Me({map:Cm(),roughness:.75,metalness:0}),a=new Me({color:1381658,roughness:.6,metalness:.4}),l=(L,O,z,F,re,q,de)=>{let me=new K(new Ge(L,O,z),de);return me.position.set(F,re,q),me.castShadow=!0,me.receiveShadow=!0,t.add(me),me};l(n,.1,s,0,.05,0,o);for(let L of[-n/2+.08,n/2-.08])for(let O of[-s/2+.08,s/2-.12])l(.1,r,.1,L,r/2+.1,O,a);let c=Ot(1024,512,(L,O,z)=>{let F=L.createLinearGradient(0,0,0,z);F.addColorStop(0,"#1b1b22"),F.addColorStop(1,"#0b0b0f"),L.fillStyle=F,L.fillRect(0,0,O,z);for(let re=0;re<O;re+=6)L.fillStyle="rgba(255,255,255,0.02)",L.fillRect(re,0,2,z)});l(n-.2,r-.1,.04,0,r/2+.15,-s/2+.06,new Me({map:c,roughness:.95}));let u=new Me({color:13620184,metalness:1,roughness:.25}),h=new K(new ot(.02,.02,n-.3,10),u);h.rotation.z=Math.PI/2,h.position.set(0,2.05,-s/2+.32),t.add(h);let d=[["#0d0d0f","#ff2fb0"],["#f2f2f2","#111111"],["#ff2fb0","#0d0d0f"],["#0d0d0f","#39ff88"],["#20e0ff","#0d0d0f"],["#0d0d0f","#ffffff"]],f=bE(.62,.72);d.forEach(([L,O],z)=>{let F=-1.3+z*.52,re=new K(f,new Me({map:om(L,O),color:13421772,roughness:1,side:It}));re.position.set(F,1.62,-s/2+.34+z*.004),re.rotation.y=(z%2?1:-1)*.06,re.castShadow=!0,t.add(re);let q=new K(new Zn(.035,.006,6,12,Math.PI*1.4),u);q.position.set(F,2.03,-s/2+.34),t.add(q);let de=new K(new Ge(.44,.015,.015),u);de.position.set(F,1.96,-s/2+.345),t.add(de)});let g=Ot(1024,256,(L,O,z)=>{L.fillStyle="#0d0d10",L.fillRect(0,0,O,z),L.strokeStyle="#ff2fb0",L.lineWidth=8,L.strokeRect(10,10,O-20,z-20),L.font='400 120px Impact, "Arial Black", sans-serif',L.textAlign="center",L.textBaseline="middle",L.fillStyle="#ffffff",L.fillText("S.P.K  MERCH",O/2,z/2+6),L.font="700 26px Arial",L.fillStyle="#39ff88",L.fillText("T-SHIRTS \xB7 SOUNDSYSTEM \xB7 LINZ",O/2,z-34)}),x=[o,o,o,o,new Me({map:g,roughness:.6}),o],m=new K(new Ge(n-.3,1,.55),x);m.position.set(0,.6,s/2-.3),m.castShadow=!0,t.add(m),l(n-.2,.05,.65,0,1.125,s/2-.3,o);let p=(L,O,z,F)=>{for(let re=0;re<F;re++){let q=new K(new Ge(.34,.035,.26),[new Me({color:L,roughness:.95}),new Me({color:L,roughness:.95}),new Me({map:om(L,O),roughness:.95}),new Me({color:L,roughness:.95}),new Me({color:L,roughness:.95}),new Me({color:L,roughness:.95})]);q.position.set(z+(Math.random()-.5)*.02,1.17+re*.036,s/2-.32),q.rotation.y=(Math.random()-.5)*.08,q.castShadow=!0,t.add(q)}};p("#0d0d0f","#ff2fb0",-1.15,5),p("#f2f2f2","#111111",-.6,4),p("#ff2fb0","#0d0d0f",.55,4),p("#0d0d0f","#39ff88",1.1,6);let v=Ot(256,128,(L,O,z)=>{L.fillStyle="#ffe22f",L.fillRect(0,0,O,z),L.fillStyle="#111",L.font="900 64px Arial",L.textAlign="center",L.textBaseline="middle",L.fillText("25 \u20AC",O/2,z/2+4)}),y=new Le({map:v,color:11579568});for(let L of[-.88,.82]){let O=new K(new ut(.3,.15),y);O.position.set(L,1.24,s/2-.01),O.rotation.x=-.35,t.add(O)}l(.22,.06,.16,.05,1.18,s/2-.42,a);let _=Ot(512,256,(L,O,z)=>{for(let F=0;F<16;F++)L.fillStyle=F%2?"#ff2fb0":"#111114",L.fillRect(F*32,0,32,z);L.fillStyle="rgba(255,255,255,0.08)",L.fillRect(0,z-30,O,30)}),P=new K(new ut(n+.3,s+.5),new Me({map:_,roughness:.8,side:It}));P.rotation.x=-Math.PI/2+.22,P.position.set(0,r+.12,.2),P.castShadow=!0,t.add(P);let b=Ot(512,64,(L,O,z)=>{for(let F=0;F<16;F++)L.fillStyle=F%2?"#ff2fb0":"#111114",L.beginPath(),L.moveTo(F*32,0),L.lineTo(F*32+32,0),L.lineTo(F*32+32,40),L.quadraticCurveTo(F*32+16,64,F*32,40),L.closePath(),L.fill()},!0);b.premultiplyAlpha=!1;let R=new K(new ut(n+.3,.28),new Me({map:b,transparent:!0,roughness:.8,side:It}));R.position.set(0,r-.1,s/2+.43),t.add(R);let I=Ns([{t:"S.P.K MERCH",size:120,c:"#ffffff",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"#ff2fb0"}],{w:1024,h:180,pw:2.6});I.position.set(0,r+.62,s/2-.1),t.add(I);let S=new Le({color:12098144});for(let L=0;L<11;L++){let O=-n/2+.05+L*(n-.1)/10,z=new K(new Ut(.035,8,6),S);z.position.set(O,r-.2-Math.sin(L/10*Math.PI)*.12,s/2+.45),t.add(z)}let E=new vn(16767144,2.2,5,1.6);E.position.set(0,r-.6,.6),t.add(E);let D=new Di(16773856,4.2,7,.7,.7,1.5);D.position.set(0,r,1.6);let W=new Rt;W.position.set(0,1.5,-.5),t.add(D,W),D.target=W,Hr=new K(new Ge(n+.3,r+1.2,s+.6),new Le({transparent:!0,opacity:0,depthWrite:!1})),Hr.position.set(0,(r+1.2)/2,0),t.add(Hr),td.pos=t.position.clone(),td.yaw=i}var td={pos:null,yaw:0};function wm(){tn=!0;for(let e in it)it[e]=!1;try{document.exitPointerLock()}catch{}oe("djName").textContent="S.P.K MERCH",oe("djInfo").textContent=qo.text||"Offizielle S.P.K T-Shirts";let i=oe("djPhoto");i.src="/System/dj-fotos/spk.jpg",i.classList.remove("hidden"),i.classList.remove("big"),nd(),oe("djBox").classList.remove("hidden")}var Am=()=>{try{return localStorage.getItem("spk-merch-shirt")==="1"}catch{return!1}};function nd(){let i=Am(),e=!!(Ne.look&&Ne.look.spk),t=i?`<button class="djl" id="mWear" style="--c:#39ff88">${e?"\u{1F455} Shirt ausziehen":"\u{1F455} Shirt anziehen"}</button>`:'<button class="djl" id="mBuy" style="--c:#39ff88">\u{1F6D2} Gratis kaufen (nur im Spiel)</button>';oe("djLinks").innerHTML=t+'<p class="djnone" style="margin:6px 0 10px;opacity:.8">Das Spiel-Shirt ist gratis. Das echte T-Shirt kostet 25 \u20AC:</p>'+(qo.url?`<a class="djl" href="${di(qo.url)}" target="_blank" rel="noopener" style="--c:#ff2fb0">\u{1F455} Zum T-Shirt-Shop</a>`:'<p class="djnone">Link ist bald verf\xFCgbar.</p>');let n=o=>{if(Ne.look=gn(Object.assign({},Ne.look,{spk:o?1:0})),Pl(),Ul(),pe.role==="client"&&pe.conn)try{pe.conn.send({t:"look",lk:Ne.look})}catch{}},s=oe("mBuy");s&&(s.onclick=()=>{try{localStorage.setItem("spk-merch-shirt","1")}catch{}n(!0),ld(!0),qt("Danke! Du tr\xE4gst jetzt das S.P.K T-Shirt \u2013 in der Umkleide kannst du es an- und ausziehen."),nd()});let r=oe("mWear");r&&(r.onclick=()=>{let o=!(Ne.look&&Ne.look.spk);n(o),qt(o?"S.P.K T-Shirt angezogen.":"S.P.K T-Shirt ausgezogen."),nd()})}var Zu=new cl;function TE(){if(Et=null,!Zt||ht)return;Zu.setFromCamera({x:0,y:0},In),Zu.far=9;let i=kr.map(n=>n.pic);li&&i.push(li),Ps&&i.push(Ps),zr&&i.push(zr),zt&&i.push(zt.hit),Hr&&i.push(Hr);let e=xn.targets();for(let n of e)i.push(n);for(let n of yn.targets())i.push(n);let t=Zu.intersectObjects(i,!1);if(t.length&&t[0].object.userData.aim&&t[0].object.userData.aim.radio)Et=t[0].distance<4.5?t[0].object.userData.aim:null;else if(t.length&&t[0].object.userData.aim){let n=t[0].object.userData.aim;Et=t[0].distance<2.8&&xn.canAim(n)?n:null}else t.length&&zt&&t[0].object===zt.hit?Et=t[0].distance<4.2?md:null:t.length&&t[0].object===Hr?Et=t[0].distance<5.5?fd:null:t.length&&(Et=t[0].object===zr?xd:t[0].object===li?Rl:t[0].object===Ps?_d:kr.find(n=>n.pic===t[0].object)||null);for(let n of kr)n.edge.scale.y=n===Et?3:1;li&&li.scale.setScalar(Et===Rl?1.02:1)}function pd(i){if(i&&i.secret){xn.use(i);return}if(i&&i.radio){yn.openRadio();return}if(i===Rl){CE();return}if(i===_d){OE();return}if(i===xd){Pm();return}if(i===md){PE();return}if(i===fd){wm();return}let e=i.dj;tn=!0;for(let s in it)it[s]=!1;try{document.exitPointerLock()}catch{}let t=_E.filter(([s])=>e[s]).map(([s,r,o])=>`<a class="djl" href="${di(e[s])}" target="_blank" rel="noopener" style="--c:${o}">${r}</a>`).join("");oe("djName").textContent=e.name||"DJ",oe("djInfo").textContent=e.info||"",oe("djLinks").innerHTML=t||'<p class="djnone">F\xFCr diesen DJ sind noch keine Links eingetragen.</p>',oe("djPhoto").classList.remove("big");let n=oe("djPhoto");e.foto?(n.src=/^(https?:)?\//.test(e.foto)?e.foto:"/System/dj-fotos/"+e.foto,n.classList.remove("hidden")):n.classList.add("hidden"),oe("djBox").classList.remove("hidden")}function ls(){oe("radBox")&&oe("radBox").classList.add("hidden"),oe("djBox").classList.add("hidden"),oe("gbBox").classList.add("hidden"),oe("wrBox").classList.add("hidden"),Fe.open=!1,tn=!1,en&&Fs()}oe("djClose").onclick=ls;oe("djBox").addEventListener("click",i=>{i.target.id==="djBox"&&ls()});var Rl={flyer:!0},li=null,ei={};async function wE(){try{return await(await fetch("/System/party.json",{cache:"no-store"})).json()}catch{return{}}}function Rm(i){return/^(https?:)?\/\//.test(i)?i:"/System/flyer/"+i}function Cm(){return Ot(1024,1280,(i,e,t)=>{let s=t/6;for(let r=0;r<6;r++){let o=[120,78,44].map(a=>a+Math.floor((Math.random()-.5)*22));i.fillStyle=`rgb(${o})`,i.fillRect(0,r*s,e,s);for(let a=0;a<70;a++){let l=r*s+Math.random()*s;i.strokeStyle=`rgba(${Math.random()<.5?"60,35,15":"170,120,75"},${.08+Math.random()*.12})`,i.lineWidth=1+Math.random()*3,i.beginPath(),i.moveTo(0,l);for(let c=0;c<=e;c+=64)i.lineTo(c,l+Math.sin(c/90+a)*4);i.stroke()}if(Math.random()<.7){let a=Math.random()*e,l=r*s+s/2,c=i.createRadialGradient(a,l,2,a,l,26);c.addColorStop(0,"rgba(50,28,10,0.7)"),c.addColorStop(1,"rgba(50,28,10,0)"),i.fillStyle=c,i.beginPath(),i.ellipse(a,l,40,18,0,0,Math.PI*2),i.fill()}i.fillStyle="rgba(25,14,6,0.85)",i.fillRect(0,r*s,e,5);for(let a of[60,e-60])i.fillStyle="#3a3a3a",i.beginPath(),i.arc(a,r*s+s/2,9,0,Math.PI*2),i.fill()}})}function AE(i){return Ot(768,1086,(e,t,n)=>{e.fillStyle="#f2ece0",e.fillRect(0,0,t,n),e.fillStyle="#ff2fb0",e.fillRect(0,0,t,150),e.textAlign="center",e.textBaseline="middle",e.font='400 96px Impact, "Arial Black", sans-serif',e.fillStyle="#fff",e.fillText("SPK",t/2,80),e.font='400 84px Impact, "Arial Black", sans-serif',e.fillStyle="#18101c",e.fillText("N\xC4CHSTE",t/2,330),e.fillText("PARTY",t/2,430),e.font='600 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="#5a5060";let s=String(i||"Flyer folgt \u2013 bald steht hier, wann und wo die n\xE4chste SPK Party steigt!").split(" "),r="",o=600;for(let a of s){let l=r?r+" "+a:a;e.measureText(l).width>t-120?(e.fillText(r,t/2,o),o+=56,r=a):r=l}r&&e.fillText(r,t/2,o)})}async function RE(i,e){ei=await wE();let t=2.75,n=3,s=3.7,r=new $e;r.position.set(Math.sin(i)*(e-.02),t,-Math.cos(i)*(e-.02)),r.lookAt(0,t,0),dt.add(r);let o=new K(new Ge(n,s,.12),new Me({map:Cm(),roughness:.85,metalness:0}));r.add(o);let a=new Me({color:3875858,roughness:.8});for(let[d,f,g,x]of[[0,s/2,n+.16,.14],[0,-s/2,n+.16,.14],[n/2,0,.14,s],[-n/2,0,.14,s]]){let m=new K(new Ge(g,x,.18),a);m.position.set(d,f,.02),r.add(m)}for(let d of[-n/2+.25,n/2-.25]){let f=new K(new Ge(.14,t-s/2+.3,.14),a);f.position.set(d,-s/2-(t-s/2)/2+.15,-.05),r.add(f)}let l=2.1,c=l*1.414,u=AE(ei.text);if(li=new K(new ut(l,c),new Me({map:u,roughness:.9})),li.position.set(0,.05,.075),li.rotation.z=-.015,r.add(li),ei.flyer){let d=new Image;d.onload=()=>{let f=u.image,g=f.getContext("2d");g.fillStyle="#111",g.fillRect(0,0,f.width,f.height);let x=Math.min(f.width/d.width,f.height/d.height),m=d.width*x,p=d.height*x;g.drawImage(d,(f.width-m)/2,(f.height-p)/2,m,p),u.needsUpdate=!0},d.src=Rm(ei.flyer)}for(let[d,f]of[[-l/2+.12,c/2-.12],[l/2-.12,c/2-.12]]){let g=new K(new Ut(.05,12,8),new Me({color:16723888,roughness:.3}));g.position.set(d,f+.05,.11),r.add(g)}let h=new Di(16773340,9,8,.6,.7,1.4);h.position.set(0,s/2+1,1.8),h.target=li,r.add(h)}function CE(){tn=!0;for(let e in it)it[e]=!1;try{document.exitPointerLock()}catch{}oe("djName").textContent="N\xC4CHSTE PARTY",oe("djInfo").textContent=ei.flyer?ei.text||"":ei.text||"Flyer folgt \u2013 bald steht hier, wann die n\xE4chste SPK Party steigt!";let i=oe("djPhoto");ei.flyer?(i.src=Rm(ei.flyer),i.classList.remove("hidden"),i.classList.add("big")):i.classList.add("hidden"),oe("djLinks").innerHTML=ei.link?`<a class="djl" href="${di(ei.link)}" target="_blank" rel="noopener" style="--c:#e3b27a">Mehr Infos</a>`:"",oe("djBox").classList.remove("hidden")}var md={arcade:!0},zt=null;function IE(){let i=sd+.24,e=cn-1.25;zt=Zp(Ot),zt.g.scale.setScalar(2.2/1.75),zt.g.position.set(Math.sin(i)*e,0,-Math.cos(i)*e),zt.g.lookAt(0,0,0),dt.add(zt.g),zt.pos=zt.g.position.clone()}function PE(){if(!ht){if(pe.role==="client"&&pe.conn&&pe.conn.open){try{pe.conn.send({t:"arc"})}catch{}ht=!0,qt("Warte auf den Raum \u2026"),setTimeout(()=>{ht&&!ss&&(ht=!1)},5e3);return}if(pe.role==="host"&&Bt.size){Im(Ne.name);return}gd(null,null)}}function Im(i){if(ss)return;let e=rd();for(let t of pe.conns.values())try{t.conn.open&&t.conn.send({t:"arcgo",code:e,who:i})}catch{}gd(e,"host",i)}function gd(i,e,t){if(ss)return;ss=!0,ht=!0;for(let l in it)it[l]=!1;document.pointerLockElement&&document.exitPointerLock(),t&&t!==Ne.name&&qt(t+" startet die Arcade \u2013 alle spielen mit!");let n=document.createElement("div");n.id="arcLoad",n.style.cssText='position:fixed;inset:0;z-index:99;background:#05030c;display:flex;flex-direction:column;align-items:center;justify-content:center;font:900 46px "Courier New",monospace;color:#ff2fb0;letter-spacing:.1em;text-shadow:0 0 18px #ff2fb0',n.innerHTML='<div>SPK ARCADE</div><div style="margin-top:28px;width:min(420px,80vw);height:34px;border:4px solid #fff;padding:4px;box-sizing:border-box;display:flex;gap:4px" id="arcBar"></div><div style="margin-top:14px;font-size:16px;color:#20e0ff;text-shadow:none">LADE ...</div>',document.body.appendChild(n),ad();let s=0,r=n.querySelector("#arcBar"),o=setInterval(()=>{s++;let l=document.createElement("i");l.style.cssText="flex:0 0 calc((100% - 44px)/12);background:"+(s<5?"#39ff88":s<9?"#ffd23f":"#ff2fb0"),r.appendChild(l),s>=12&&clearInterval(o)},100);try{sessionStorage.setItem("gbgc-zurueck",JSON.stringify({role:pe.role==="client"?"client":"host",code:pe.code,t:Date.now()}))}catch{}let a="/Arcade/spiel/index.html?name="+encodeURIComponent(Ne.name)+(i?"&konsole="+e+"&code="+i:"")+(hn.get("peerhost")?"&peerhost="+hn.get("peerhost")+"&peerport="+(hn.get("peerport")||9e3)+"&ice=none":"");setTimeout(()=>{Ll(),location.href=a},e==="join"?2600:1400)}var xd={cab:!0},kn={ang:lm-.3,r:cn-1.15,pos:null},zr=null;function LE(){let i=kn.ang,e=Math.sin(i)*kn.r,t=-Math.cos(i)*kn.r;kn.pos=new C(e,0,t);let n=new $e;n.position.set(e,0,t),n.lookAt(0,0,0),dt.add(n);let s=1.9,r=2.6,o=1.6,a=new Me({color:2761264,roughness:.6,metalness:.3}),l=(x,m,p,v,y,_,P=a)=>{let b=new K(new Ge(x,m,p),P);return b.position.set(v,y,_),n.add(b),b};l(s,r,.08,0,r/2,-o/2),l(.08,r,o,-s/2,r/2,0),l(.08,r,o,s/2,r/2,0),l(s+.1,.1,o+.1,0,r,0),l(s,.06,o,0,.03,0,new Me({color:3812922,roughness:.9})),l(.9,1.7,.03,0,1.25,-o/2+.06,new Me({color:13621480,roughness:.05,metalness:1}));let c=new Me({color:13112687,roughness:.85,side:It});for(let x of[-1,1]){let m=new ut(.55,r-.25,12,1),p=m.attributes.position;for(let y=0;y<p.count;y++)p.setZ(y,Math.sin(p.getX(y)*22)*.04);m.computeVertexNormals();let v=new K(m,c);v.position.set(x*(s/2-.3),(r-.25)/2+.05,o/2),n.add(v)}l(s,.04,.04,0,r-.12,o/2,new Me({color:12566463,metalness:1,roughness:.3}));let u=Ns([{t:"UMKLEIDE",size:120,c:"#ffd23f",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"rgba(255,170,0,0.6)"}],{w:1024,h:180,pw:1.9});u.position.set(0,r+.35,o/2),n.add(u);let h=new vn(16773328,6,4,1.6);h.position.set(0,r-.3,.2),n.add(h),zr=new K(new Ge(s+.4,r+.6,o+.4),new Le({transparent:!0,opacity:0,depthWrite:!1})),zr.position.set(0,r/2,0),n.add(zr);let d=new $e;d.position.set(s/2+.7,0,.3),n.add(d);let f=new Me({color:12566463,metalness:1,roughness:.3});for(let x of[-.45,.45]){let m=new K(new ot(.02,.02,1.6,8),f);m.position.set(x,.8,0),d.add(m)}let g=new K(new ot(.02,.02,.95,8),f);g.rotation.z=Math.PI/2,g.position.y=1.55,d.add(g),mn.slice(0,7).forEach((x,m)=>{let p=new K(new Ge(.06,.62,.42),new Me({color:x,roughness:.9}));p.position.set(-.36+m*.12,1.2,0),d.add(p)})}var Fe={open:!1,look:null,r:null,scene:null,cam:null,fig:null,mixer:null,rot:0,t:0,drag:null};function DE(){if(Fe.r)return;let i=oe("wrCanvas");Fe.r=new xo({canvas:i,antialias:!0,alpha:!0}),Fe.r.outputColorSpace=mt,Fe.r.toneMapping=Sr,Fe.scene=new _o,Fe.cam=new Dt(30,1,.1,50),Fe.cam.position.set(0,1.05,4.6),Fe.cam.lookAt(0,.95,0),Fe.scene.add(new Lo(16777215,4206656,1.5));let e=new ws(16777215,2.2);e.position.set(2,4,4),Fe.scene.add(e);let t=new ws(16723888,1.4);t.position.set(-3,2,-3),Fe.scene.add(t);let n=new K(new $n(.8,40),new Le({color:16723888,transparent:!0,opacity:.25}));n.rotation.x=-Math.PI/2,Fe.scene.add(n),i.addEventListener("pointerdown",s=>{Fe.drag=s.clientX,i.setPointerCapture(s.pointerId)}),i.addEventListener("pointermove",s=>{Fe.drag!=null&&(Fe.rot+=(s.clientX-Fe.drag)*.012,Fe.drag=s.clientX)}),i.addEventListener("pointerup",()=>{Fe.drag=null})}function qr(){if(Fe.look.ch&&!Ur(Xt,Fe.look.ch)){let e=Fe.look.ch;oe("wrOpts").insertAdjacentHTML("afterbegin",'<div class="wrow" id="wrLoad"><span>\u23F3</span><div>Figur wird geladen \u2026</div></div>'),zo(Xt,e).then(()=>{let t=oe("wrLoad");t&&t.remove(),Fe.look.ch===e&&qr()})}Fe.fig&&Fe.scene.remove(Fe.fig);let i=Tl(Xt,Fe.look);Fe.fig=i.m,Fe.scene.add(i.m),Fe.mixer=new Cn(i.m),ui&&ui.idle&&Fe.mixer.clipAction(ui.idle).play()}function jo(){let i=Fe.look,e=oe("wrOpts"),t=(o,a,l,c)=>`<div class="wrow"><span>${o}</span><div>`+a.map((u,h)=>`<button class="wo${u.v===l?" on":""}" data-set="${c}" data-v="${di(String(u.v))}">${di(u.t)}</button>`).join("")+"</div></div>",n=(o,a,l,c)=>`<div class="wrow"><span>${o}</span><div>`+a.map(u=>`<button class="wc${u===l?" on":""}" style="background:${u}" data-set="${c}" data-v="${u}" aria-label="${u}"></button>`).join("")+"</div></div>",s=t("Figur",Qi.map(o=>({t:o.name+(o.kind&&o.id&&o.kind==="Comic"?" \u270F\uFE0F":""),v:o.id})),i.ch,"ch"),r=Qi.find(o=>o.id===i.ch)||Qi[0];r.classic?(s+=t("Oberteil",ku.map((o,a)=>({t:o,v:a})),i.top,"top"),i.top&&(s+=n("Farbe",mn,i.tc,"tc"),s+=t("Aufdruck",[{t:"Ohne",v:""},{t:"\u{1F354} Burger",v:"burger"}],i.print||"","print")),s+=t("Hose",Hu.map((o,a)=>({t:o,v:a})),i.bot,"bot"),i.bot&&(s+=n("Farbe",mn,i.bc,"bc")),s+=t("Schuhe",zu.map((o,a)=>({t:o,v:a})),i.sh,"sh"),i.sh&&(s+=n("Farbe",mn,i.shc,"shc")),s+=t("Hautfarbe",[{t:"Hell",v:0},{t:"Dunkel",v:1}],i.s,"s")):i.ch?((r.parts||[]).forEach(([o],a)=>{s+=`<div class="wrow"><span>${di(o)}</span><div><button class="wo${i.p[a]?"":" on"}" data-set="p${a}" data-v="">Original</button>`+mn.map(l=>`<button class="wc${l===i.p[a]?" on":""}" style="background:${l}" data-set="p${a}" data-v="${l}" aria-label="${l}"></button>`).join("")+"</div></div>"}),r.parts||(s+='<div class="wrow"><span>Kleidung</span><div style="opacity:.75">Diese Figur hat ihr festes Outfit \u2013 du kannst sie mit Kappe, Brille, Kette und Rucksack aufpeppen.</div></div>')):(s+=t("K\xF6rper",[{t:"Mann",v:"m"},{t:"Frau",v:"f"}],i.b,"b")+t("Hautfarbe",[{t:"Hell",v:0},{t:"Dunkel",v:1}],i.s,"s"),s+=t("Frisur",Bu.map(o=>({t:o.name,v:o.id})),i.h,"h"),i.b==="m"&&(s+=t("Bart",[{t:"Ohne",v:0},{t:"Mit Bart",v:1}],i.beard,"beard")),s+=n("Haarfarbe",Vu,i.hc,"hc"),s+=t("Oberteil",ku.map((o,a)=>({t:o,v:a})),i.top,"top"),i.top&&(s+=n("Farbe",mn,i.tc,"tc")),s+=t("Hose",Hu.map((o,a)=>({t:o,v:a})),i.bot,"bot"),i.bot&&(s+=n("Farbe",mn,i.bc,"bc")),s+=t("Schuhe",zu.map((o,a)=>({t:o,v:a})),i.sh,"sh"),i.sh&&(s+=n("Farbe",mn,i.shc,"shc"))),s+=t("Kopf",Gu.map((o,a)=>({t:o,v:a})),i.cap,"cap"),i.cap&&(s+=n("Farbe",mn,i.capc,"capc")),s+=t("Brille",Wu.map((o,a)=>({t:o,v:a})),i.gl,"gl"),Am()&&(s+=t("S.P.K Shirt",[{t:"Ohne",v:0},{t:"Anziehen",v:1}],i.spk,"spk")),s+=t("Goldkette",[{t:"Ohne",v:0},{t:"Mit Kette",v:1}],i.chain,"chain"),s+=t("Rucksack",[{t:"Ohne",v:0},{t:"Mit Rucksack",v:1}],i.bag,"bag"),i.bag&&(s+=n("Farbe",mn,i.bagc,"bagc")),e.innerHTML=s,e.querySelectorAll("button[data-set]").forEach(o=>o.onclick=()=>{let a=o.dataset.set,l=o.dataset.v;if(["s","beard","top","bot","sh","cap","gl","chain","bag","spk"].includes(a)&&(l=+l),/^p\d$/.test(a)){let c=Fe.look.p.slice();c[+a[1]]=l,Fe.look=gn(Object.assign({},Fe.look,{p:c}))}else a==="ch"?Fe.look=gn(Object.assign({},Fe.look,{ch:l,p:["","","",""]},l==="tekmek"?{top:1,tc:"#efefea",bot:2,bc:"#141414",sh:1,shc:"#1a1a1a",print:"burger",s:0}:{print:""})):Fe.look=gn(Object.assign({},Fe.look,{[a]:l}));jo(),qr()})}function Pm(){if(!Xt){qt("Die Figuren werden noch geladen \u2026");return}tn=!0,Fe.open=!0;for(let t in it)it[t]=!1;try{document.exitPointerLock()}catch{}Fe.look=gn(Ne.look),DE(),jo(),qr(),Fe.rot=0,oe("wrBox").classList.remove("hidden");let i=oe("wrCanvas"),e=i.getBoundingClientRect();Fe.r.setPixelRatio(Math.min(2,devicePixelRatio||1)),Fe.r.setSize(e.width||300,e.height||420,!1),Fe.cam.aspect=(e.width||300)/(e.height||420),Fe.cam.updateProjectionMatrix()}function UE(i){!Fe.open||!Fe.r||(Fe.drag==null&&(Fe.rot+=i*.35),Fe.fig&&(Fe.fig.rotation.y=Fe.rot),Fe.mixer&&Fe.mixer.update(i),Fe.r.render(Fe.scene,Fe.cam))}function Lm(){if(Ne.look=gn(Fe.look),Pl(),Ul(),pe.role==="client"&&pe.conn)try{pe.conn.send({t:"look",lk:Ne.look})}catch{}qt("Neuer Look gespeichert \u2013 alle im Raum sehen dich jetzt so."),ls()}oe("wrDone").onclick=Lm;oe("wrCancel").onclick=ls;oe("wrRandom").onclick=()=>{let i=Xp(Math.random,!0,!0);Math.random()<.5&&(i.ch=""),i.p=["","","",""].map(()=>Math.random()<.5?mn[Math.floor(Math.random()*mn.length)]:""),Fe.look=gn(i),jo(),qr()};oe("wrUndress").onclick=()=>{Fe.look=gn(Object.assign({},Fe.look,{top:0,bot:0,sh:0,cap:0,gl:0,chain:0,bag:0,spk:0,p:["","","",""]})),jo(),qr()};oe("wrBox").addEventListener("click",i=>{i.target.id==="wrBox"&&ls()});var _d={gb:!0},Ps=null,Vr=null,Us="",Wr=[];async function Cl(i){if(!Us)return null;try{let t=await(await fetch(Us+(i?(Us.includes("?")?"&":"?")+i:""),{cache:"no-store"})).json();if(Array.isArray(t.eintraege))return Wr=t.eintraege,Dm(),Wr}catch{}return null}function NE(i,e,t){let n=String(e).split(" "),s=[],r="";for(let o of n){let a=r?r+" "+o:o;i.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function Dm(){if(!Vr)return;let i=Vr.image,e=i.getContext("2d"),t=i.width,n=i.height,s=e.createLinearGradient(0,0,0,n);s.addColorStop(0,"#1f3a2c"),s.addColorStop(1,"#16291f"),e.fillStyle=s,e.fillRect(0,0,t,n);for(let o=0;o<400;o++)e.fillStyle=`rgba(255,255,255,${Math.random()*.03})`,e.fillRect(Math.random()*t,Math.random()*n,3,1);e.textAlign="center",e.font='400 120px Impact, "Arial Black", sans-serif',e.fillStyle="#eef3e8",e.fillText("G\xC4STEBUCH",t/2,130),e.fillStyle="rgba(238,243,232,0.35)",e.fillRect(80,160,t-160,4),e.textAlign="left";let r=230;if(!Us)e.textAlign="center",e.font='italic 64px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#dfe8d6",e.fillText("kommt bald \u2026",t/2,400);else if(!Wr.length)e.textAlign="center",e.font='italic 60px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#dfe8d6",e.fillText("Sei der Erste \u2013",t/2,420),e.fillText("schreib was rein!",t/2,500);else for(let o of Wr.slice(0,7)){if(r>n-90)break;e.font='700 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="#9fe8b0",e.fillText(o.n,70,r),e.font='46px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#eef3e8";for(let a of NE(e,o.x,t-140).slice(0,3))r+=54,e.fillText(a,70,r);r+=66}e.textAlign="center",e.font='600 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="rgba(238,243,232,0.7)",e.fillText(Qt?"Tippe auf E zum Reinschreiben":"Klicken zum Reinschreiben",t/2,n-40),Vr.needsUpdate=!0}async function FE(i,e){try{Us=((await(await fetch("/System/gaestebuch.json",{cache:"no-store"})).json()).url||"").trim()}catch{}let t=2.75,n=3,s=3.7,r=new $e;r.position.set(Math.sin(i)*(e-.02),t,-Math.cos(i)*(e-.02)),r.lookAt(0,t,0),dt.add(r);let o=new Me({color:3875858,roughness:.8}),a=new K(new Ge(n,s,.12),o);r.add(a);for(let[c,u,h,d]of[[0,s/2,n+.16,.14],[0,-s/2,n+.16,.14],[n/2,0,.14,s],[-n/2,0,.14,s]]){let f=new K(new Ge(h,d,.18),o);f.position.set(c,u,.02),r.add(f)}for(let c of[-n/2+.25,n/2-.25]){let u=new K(new Ge(.14,t-s/2+.3,.14),o);u.position.set(c,-s/2-(t-s/2)/2+.15,-.05),r.add(u)}Vr=Ot(1024,1260,()=>{}),Ps=new K(new ut(n-.2,s-.2),new Me({map:Vr,roughness:.95,emissive:16777215,emissiveMap:Vr,emissiveIntensity:.35})),Ps.position.z=.07,r.add(Ps);let l=new Di(16773340,9,8,.6,.7,1.4);l.position.set(0,s/2+1,1.8),l.target=Ps,r.add(l),Dm(),Cl(),setInterval(()=>{tn||Cl()},6e4)}function id(){let i=oe("gbList");if(i.innerHTML="",!Us){i.innerHTML='<p class="djnone">Das G\xE4stebuch wird gerade eingerichtet \u2013 bald kannst du hier reinschreiben.</p>';return}if(!Wr.length){i.innerHTML='<p class="djnone">Noch keine Eintr\xE4ge \u2013 sei der Erste!</p>';return}for(let e of Wr){let t=document.createElement("div");t.className="gbe";let n=new Date(e.t);t.innerHTML="<b></b><span></span><p></p>",t.querySelector("b").textContent=e.n,t.querySelector("span").textContent=isNaN(n)?"":n.toLocaleDateString("de-AT")+" "+n.toLocaleTimeString("de-AT",{hour:"2-digit",minute:"2-digit"}),t.querySelector("p").textContent=e.x,i.appendChild(t)}}function OE(){tn=!0;for(let i in it)it[i]=!1;try{document.exitPointerLock()}catch{}oe("gbName").value=Ne.name||"",oe("gbText").value="",oe("gbCount").textContent="0 / 100",oe("gbMsg").textContent="",oe("gbForm").classList.toggle("hidden",!Us),id(),oe("gbBox").classList.remove("hidden"),Cl().then(()=>id())}oe("gbText").addEventListener("input",()=>{oe("gbCount").textContent=oe("gbText").value.length+" / 100"});oe("gbClose").onclick=ls;oe("gbBox").addEventListener("click",i=>{i.target.id==="gbBox"&&ls()});oe("gbForm").addEventListener("submit",async i=>{i.preventDefault();let e=oe("gbText").value.replace(/\s+/g," ").trim().slice(0,100),t=(oe("gbName").value.trim()||Ne.name||"Gast").slice(0,20);if(!e){oe("gbMsg").textContent="Schreib zuerst etwas rein.";return}let n=0;try{n=+localStorage.getItem("spk-gb-last")||0}catch{}if(Date.now()-n<3e4){oe("gbMsg").textContent="Bitte kurz warten, bevor du nochmal schreibst.";return}oe("gbSend").disabled=!0,oe("gbMsg").textContent="Wird gespeichert\u2026";let s=await Cl("name="+encodeURIComponent(t)+"&text="+encodeURIComponent(e));if(oe("gbSend").disabled=!1,s){try{localStorage.setItem("spk-gb-last",String(Date.now()))}catch{}oe("gbText").value="",oe("gbCount").textContent="0 / 100",oe("gbMsg").textContent="Danke! Dein Eintrag steht jetzt im G\xE4stebuch.",id()}else oe("gbMsg").textContent="Hat nicht geklappt \u2013 ist das Internet an?"});var BE="https://abacus.jasoncameron.dev/hit/spk-portal-hiasus/besucher",kE="https://abacus.jasoncameron.dev/get/spk-portal-hiasus/besucher",Um="https://countapi.mileshilliard.com/api/v1/",Xr=null,Yo=null,Dl="",Ko=()=>{try{return new Date().toLocaleDateString("sv-SE",{timeZone:"Europe/Vienna"})}catch{return new Date().toISOString().slice(0,10)}};async function Nm(i){let e="besucher-"+Ko();for(let t of[`https://abacus.jasoncameron.dev/${i?"hit":"get"}/spk-portal-hiasus/${e}`,Um+(i?"hit":"get")+"/spk-portal-hiasus-"+e])try{let n=await fetch(t,{cache:"no-store"});if(n.status===404&&!i)return 0;if(n.ok){let s=await n.json(),r=parseInt(s.value,10);if(!isNaN(r))return r}}catch{}return Dl===Ko()?Yo:null}async function Fm(){let i=Ko(),e=!1;try{e=!localStorage.getItem("spk-tag-"+i),localStorage.setItem("spk-tag-"+i,"1")}catch{}let t=await Nm(e);t!=null&&(Yo=t,Dl=i,Fr(!0))}async function HE(){let i=!1;try{i=!sessionStorage.getItem("spk-gezaehlt"),sessionStorage.setItem("spk-gezaehlt","1")}catch{}Xr=await Om(i),Fr(!0),Fm()}var Wo=null,am="",zE=null;async function Om(i){try{let e=await fetch(i?BE:kE,{cache:"no-store"});if(e.ok){let t=await e.json(),n=parseInt(t.value,10);if(!isNaN(n))return n}}catch{}try{let e=await fetch(Um+(i?"hit":"get")+"/spk-portal-hiasus-besucher",{cache:"no-store"});if(e.ok){let t=await e.json(),n=parseInt(t.value,10);if(!isNaN(n))return n}}catch{}return Xr}function VE(){let i=new Date;return{time:i.toLocaleTimeString("de-AT",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),date:i.toLocaleDateString("de-AT",{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"}),vis:Xr==null?"\u2014":Xr.toLocaleString("de-AT"),day:Yo==null||Dl!==Ko()?"\u2014":Yo.toLocaleString("de-AT")}}function Fr(i){let e=VE(),t=e.time+e.vis+e.day;if(!i&&t===am||(am=t,oe("hudClock")&&(oe("hudClock").innerHTML=`<b>${e.time.slice(0,5)}</b><span>${Xr==null?"":"Besucher: "+e.vis+" \xB7 Heute: "+e.day}</span>`),!Wo))return;let n=Wo.image,s=n.getContext("2d"),r=n.width,o=n.height;s.fillStyle="#0b0910",s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,47,176,0.6)",s.lineWidth=6,s.strokeRect(10,10,r-20,o-20),s.textAlign="center",s.textBaseline="middle",s.font='700 150px Consolas, "Courier New", monospace',s.fillStyle="#e8f7ff",s.fillText(e.time,r/2,130),s.font='500 40px "Segoe UI", system-ui, sans-serif',s.fillStyle="#9d97ab",s.fillText(e.date,r/2,232),s.fillStyle="rgba(255,255,255,0.12)",s.fillRect(60,280,r-120,3),s.fillStyle="rgba(255,255,255,0.12)",s.fillRect(r/2-2,300,4,190),s.font='400 50px Impact, "Arial Black", sans-serif',s.fillStyle="#ff7fd8",s.fillText("BESUCHER GESAMT",r/4,340),s.fillStyle="#7fe9ff",s.fillText("HEUTE",r*3/4,340),s.font='700 96px Consolas, "Courier New", monospace',s.fillStyle="#e8f7ff",s.fillText(e.vis,r/4,440),s.fillText(e.day,r*3/4,440),Wo.needsUpdate=!0}function GE(){Wo=Ot(1024,512,()=>{});let i=new $e;i.position.set(0,3.9,0),dt.add(i);let e=3,t=1.5,n=e/2+.11,s=new K(new Ge(e+.16,t+.16,e+.16),new Me({color:1381659,roughness:.4,metalness:.8}));i.add(s);let r=new Le({map:Wo,toneMapped:!1,color:14211288});for(let o=0;o<4;o++){let a=new K(new ut(e,t),r),l=o*Math.PI/2;a.position.set(Math.sin(l)*n,0,Math.cos(l)*n),a.rotation.y=l,i.add(a)}for(let o of[-1,1])for(let a of[-1,1]){let l=new K(new ot(.02,.02,2.6,6),new Me({color:5593964,metalness:.9,roughness:.3}));l.position.set(o*e/2.2,t/2+1.3,a*e/2.2),i.add(l)}zE=i,Fr(!0),setInterval(()=>Fr(!1),1e3),HE(),setInterval(async()=>{let o=await Om(!1);if(o!=null&&(Xr=o,Fr(!0)),Dl!==Ko())Fm();else{let a=await Nm(!1);a!=null&&(Yo=a,Fr(!0))}},6e4)}async function WE(){let i=[];try{let s=await fetch("/__spiele",{cache:"no-store"});if(!s.ok)throw 0;i=await s.json()}catch{try{i=await(await fetch("/spiele.json",{cache:"no-store"})).json()}catch{}}Array.isArray(i)||(i=i?[i]:[]);let e=s=>{let r=/(\d{1,2})\.(\d{1,2})\.(\d{4})/.exec(s||"");return r?new Date(+r[3],+r[2]-1,+r[1]).getTime():0},t=new Array(Gr).fill(null),n=[];for(let s of i){let r=parseInt(s.portal,10);r>=1&&r<=Gr&&!t[r-1]?t[r-1]=s:n.push(s)}n.sort((s,r)=>e(s.datum)-e(r.datum));for(let s of n){let r=t.indexOf(null);r>=0&&(t[r]=s)}return t}async function XE(){try{ns=await new Ar().loadAsync("/System/assets/figur.glb");let i={};for(let t of ns.animations)i[t.name]=t;let e=t=>t?new Jn(t.name,t.duration,t.tracks.filter(n=>!n.name.startsWith("root."))):null;ui={idle:e(i.Idle_Loop),walk:e(i.Walk_Loop),run:e(i.Jog_Fwd_Loop),jump:e(i.Jump_Loop),dance:e(i.Dance_Loop),use:e(i.Interact)}}catch(i){console.warn("Figur fehlt",i),ns=null}try{Xt=await qp("/System/figuren/")}catch(i){console.warn("Figuren fehlen",i),Xt=null}try{LE(),qE()}catch(i){console.warn("Umkleide",i)}try{IE()}catch(i){console.warn("Arcade",i)}try{Xt&&ui&&(yn=$p({scene:dt,camera:In,me:Ue,djFrames:kr,net:pe,toast:qt,canvasTex:Ot,$:oe,CL:ui,FIG:Xt,audio:()=>(od(),ct?{AC:ct,master:ni}:null),unlock:()=>{tn=!0;for(let i in it)it[i]=!1;try{document.exitPointerLock()}catch{}},relock:()=>{tn=!1,en&&Fs()}}))}catch(i){console.warn("UFO",i)}}var ci=null,Or=null;function Ul(){ci&&dt.remove(ci.root),!(!Xt||!ns)&&(Ne.look&&Ne.look.ch&&!Ur(Xt,Ne.look.ch)&&zo(Xt,Ne.look.ch).then(()=>{Ur(Xt,Ne.look.ch)&&Ul()}),ci=Br(Ne.name,Xo[0],Ne.look),ci.tag.visible=!1,ci.root.traverse(i=>i.layers.set(1)))}function qE(){let i=kn.ang,e=new $e;e.position.set(Math.sin(i)*kn.r,0,-Math.cos(i)*kn.r),e.lookAt(0,0,0),dt.add(e);let t=new $e;t.position.set(-1.9,0,.35),t.rotation.y=.35,e.add(t);let n=1.15,s=2.15,r=new Me({color:13938487,roughness:.3,metalness:.9}),o=(u,h,d,f)=>{let g=new K(new Ge(u,h,.08),r);g.position.set(d,f,0),t.add(g)};o(n+.16,.08,0,.25),o(n+.16,.08,0,.25+s+.08),o(.08,s+.16,-n/2-.04,.29+s/2),o(.08,s+.16,n/2+.04,.29+s/2);for(let u of[-1,1]){let h=new K(new Ge(.06,.06,.6),r);h.position.set(u*n/2,.03,-.1),t.add(h)}let a=new K(new Ge(n,s,.02),new Me({color:1118481}));a.position.set(0,.29+s/2,-.03),t.add(a),Or=new ko(new ut(n,s),{textureWidth:wl?384:768,textureHeight:wl?720:1440,color:13159636,multisample:wl?0:4}),Or.position.set(0,.29+s/2,.02),t.add(Or),Or.camera.layers.enable(1);let l=new K(new Ut(.05,10,8),new Le({color:16773840,toneMapped:!1}));l.position.set(0,.29+s+.16,.06),t.add(l);let c=Ns([{t:"SPIEGEL",size:90,c:"#ffd23f",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"rgba(255,170,0,0.5)"}],{w:768,h:140,pw:1});c.position.set(0,.29+s+.4,.02),t.add(c),ti.pos=new C,t.getWorldPosition(ti.pos),Ul()}var ti={pos:null},yn={tick(){},jump(){},collide(){},targets:()=>[],prompt:()=>"",state:()=>({n:0}),setState(){},remoteWave(){},setRad(){},hostRequest(){},control(){},openRadio(){}},xn={tick(){},render(){return!1},collide(){},targets:()=>[],speedMul:()=>1,jumpMul:()=>1,drift(){},canAim:()=>!1,use(){},prompt:()=>"",state:()=>[],setState(){},hostTake(){}};(async()=>{sE(),rE(),oe("loadInfo").textContent="Lade Spiele\u2026";let[i]=await Promise.all([WE(),XE()]);i.forEach((n,s)=>lE(s,n));try{xn=Up({scene:dt,camera:In,renderer:os,portals:fi,me:Ue,textPlane:Ns,toast:qt,net:pe,composer:hi,bloom:Qu,R_WALL:cn,ARC:Il,PR:cm})}catch(n){console.warn("Geheimnis",n)}ME(),GE();let e=i.filter(Boolean).length;oe("loadInfo").textContent=e===1?"1 Spiel im Raum":e+" Spiele im Raum",oe("bEnter").disabled=!1,oe("bJoin").disabled=!1,Tm(),window.konsole={_merch:()=>td,_openMerch:()=>wm(),_wardrobe:n=>{Pm(),n&&(Fe.look=gn(n),jo(),qr())},_arcade:()=>zt,_pad:()=>({locked:Zt,started:en,djOpen:tn,leaving:ht,padMode:Ds}),_ufo:()=>yn,_dj:kr,_addOther:hd,_secret:()=>xn,_collide:fm,MIR:ti,setMyLook:n=>{Fe.look=gn(n),Lm()},me:Ue,portals:fi,net:pe,others:Bt,enterPortal:ym,joinRoom:Al,openRoom:Ls,keys:it,voice:ft,started:()=>en};let t=null;try{t=JSON.parse(sessionStorage.getItem("gbgc-zurueck")||"null"),sessionStorage.removeItem("gbgc-zurueck")}catch{}Ue.pos.set(0,0,0),Ue.yaw=0,t&&Date.now()-t.t<6*36e5?(Ue.pos.set(0,0,-6),Ue.yaw=Math.PI,Ls(),t.role==="client"&&t.code?(mm(t.code),qt("Zur\xFCck im Portal \u2013 du kommst gleich wieder in den Raum von deinem Freund.")):qt("Zur\xFCck im Portal. Deine Freunde kommen gleich nach."),oe("menuTitle").textContent="Willkommen zur\xFCck!"):hn.get("autojoin")||Ls(),hn.has("autotest")&&(en=!0,rs(!1)),hn.get("autojoin")&&Al(hn.get("autojoin")).then(()=>{en=!0,rs(!1)}),as()})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
