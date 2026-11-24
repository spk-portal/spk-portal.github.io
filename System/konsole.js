var iu="170";var y0=0,Jd=1,v0=2;var Mp=1,_0=2,Ai=3,Tn=0,Gt=1,Pt=2,di=0,mr=1,ni=2,Qd=3,ef=4,M0=5,Es=100,E0=101,b0=102,S0=103,T0=104,w0=200,A0=201,R0=202,C0=203,Bc=204,Hc=205,P0=206,I0=207,L0=208,D0=209,U0=210,N0=211,k0=212,B0=213,H0=214,Fc=0,Oc=1,zc=2,vr=3,Gc=4,Vc=5,Wc=6,Xc=7,Ep=0,F0=1,O0=2,ji=0,su=1,ru=2,ou=3,Nr=4,z0=5,au=6,lu=7,tf="attached",G0="detached",bp=300,_r=301,Mr=302,qc=303,Yc=304,El=306,wn=1e3,Ri=1001,bo=1002,Qt=1003,cu=1004;var hr=1005;var un=1006,xo=1007;var ui=1008;var Ii=1009,Sp=1010,Tp=1011,So=1012,hu=1013,Ts=1014,ti=1015,vn=1016,uu=1017,du=1018,Er=1020,wp=35902,Ap=1021,Rp=1022,Fn=1023,Cp=1024,Pp=1025,gr=1026,br=1027,fu=1028,pu=1029,Ip=1030,mu=1031;var gu=1033,Oa=33776,za=33777,Ga=33778,Va=33779,Kc=35840,jc=35841,$c=35842,Zc=35843,Jc=36196,Qc=37492,eh=37496,th=37808,nh=37809,ih=37810,sh=37811,rh=37812,oh=37813,ah=37814,lh=37815,ch=37816,hh=37817,uh=37818,dh=37819,fh=37820,ph=37821,Wa=36492,mh=36494,gh=36495,Lp=36283,xh=36284,yh=36285,vh=36286,xu=2200,V0=2201,W0=2202,Sr=2300,Tr=2301,nc=2302,ur=2400,dr=2401,Xa=2402,yu=2500,X0=2501,Dp=0,bl=1,Wo=2,q0=3200,Y0=3201;var Up=0,K0=1,Yi="",ht="srgb",fn="srgb-linear",Sl="linear",vt="srgb";var js=7680;var nf=519,j0=512,$0=513,Z0=514,Np=515,J0=516,Q0=517,eg=518,tg=519,_h=35044;var sf="300 es",Ci=2e3,qa=2001,Li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rf=1234567,yo=Math.PI/180,wr=180/Math.PI;function On(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function vu(i,e){return(i%e+e)%e}function ng(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ig(i,e,t){return i!==e?(t-i)/(e-i):0}function vo(i,e,t){return(1-t)*i+t*e}function sg(i,e,t,n){return vo(i,e,1-Math.exp(-t*n))}function rg(i,e=1){return e-Math.abs(vu(i,e*2)-e)}function og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ag(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function lg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function cg(i,e){return i+Math.random()*(e-i)}function hg(i){return i*(.5-Math.random())}function ug(i){i!==void 0&&(rf=i);let e=rf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dg(i){return i*yo}function fg(i){return i*wr}function pg(i){return(i&i-1)===0&&i!==0}function mg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Tl={DEG2RAD:yo,RAD2DEG:wr,generateUUID:On,clamp:qt,euclideanModulo:vu,mapLinear:ng,inverseLerp:ig,lerp:vo,damp:sg,pingpong:rg,smoothstep:og,smootherstep:ag,randInt:lg,randFloat:cg,randFloatSpread:hg,seededRandom:ug,degToRad:dg,radToDeg:fg,isPowerOfTwo:pg,ceilPowerOfTwo:mg,floorPowerOfTwo:gg,setQuaternionFromProperEuler:xg,normalize:Et,denormalize:ei},fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],_=s[4],v=s[7],w=s[2],E=s[5],A=s[8];return r[0]=o*x+a*y+l*w,r[3]=o*m+a*_+l*E,r[6]=o*p+a*v+l*A,r[1]=c*x+u*y+h*w,r[4]=c*m+u*_+h*E,r[7]=c*p+u*v+h*A,r[2]=d*x+f*y+g*w,r[5]=d*m+f*_+g*E,r[8]=d*p+f*v+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ic.makeScale(e,t)),this}rotate(e){return this.premultiply(ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ic=new st;function kp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function To(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yg(){let i=To("canvas");return i.style.display="block",i}var of={};function mo(i){i in of||(of[i]=!0,console.warn(i))}function vg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function _g(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ot={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===vt&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(i.r=xr(i.r),i.g=xr(i.g),i.b=xr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yi?Sl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var af=[.64,.33,.3,.6,.15,.06],lf=[.2126,.7152,.0722],cf=[.3127,.329],hf=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uf=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[fn]:{primaries:af,whitePoint:cf,transfer:Sl,toXYZ:hf,fromXYZ:uf,luminanceCoefficients:lf,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:af,whitePoint:cf,transfer:vt,toXYZ:hf,fromXYZ:uf,luminanceCoefficients:lf,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}});var $s,Mh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$s===void 0&&($s=To("canvas")),$s.width=e.width,$s.height=e.height;let n=$s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=To("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Eg=0,Ya=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sc(s[o].image)):r.push(sc(s[o]))}else r=sc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function sc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bg=0,en=class i extends Li{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ri,s=Ri,r=un,o=ui,a=Fn,l=Ii,c=i.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=On(),this.name="",this.source=new Ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=bp;en.DEFAULT_ANISOTROPY=1;var ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,v=(f+1)/2,w=(p+1)/2,E=(u+d)/4,A=(h+x)/4,P=(g+m)/4;return _>v&&_>w?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=A/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=P/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=P/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eh=class extends Li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ya(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends Eh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ka=class extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bh=class extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var It=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let w=Math.sqrt(_),E=Math.atan2(w,p*y);m=Math.sin(m*E)/w,a=Math.sin(a*E)/w}let v=a*y;if(l=l*m+d*v,c=c*m+f*v,u=u*m+g*v,h=h*m+x*v,m===1-a){let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(df.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rc.copy(this).projectOnVector(e),this.sub(rc)}reflect(e){return this.sub(rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rc=new I,df=new It,dn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oo),ua.subVectors(this.max,oo),Zs.subVectors(e.a,oo),Js.subVectors(e.b,oo),Qs.subVectors(e.c,oo),zi.subVectors(Js,Zs),Gi.subVectors(Qs,Js),ms.subVectors(Zs,Qs);let t=[0,-zi.z,zi.y,0,-Gi.z,Gi.y,0,-ms.z,ms.y,zi.z,0,-zi.x,Gi.z,0,-Gi.x,ms.z,0,-ms.x,-zi.y,zi.x,0,-Gi.y,Gi.x,0,-ms.y,ms.x,0];return!oc(t,Zs,Js,Qs,ua)||(t=[1,0,0,0,1,0,0,0,1],!oc(t,Zs,Js,Qs,ua))?!1:(da.crossVectors(zi,Gi),t=[da.x,da.y,da.z],oc(t,Zs,Js,Qs,ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new I,new I,new I,new I,new I,new I,new I,new I],$n=new I,ha=new dn,Zs=new I,Js=new I,Qs=new I,zi=new I,Gi=new I,ms=new I,oo=new I,ua=new I,da=new I,gs=new I;function oc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gs.fromArray(i,r);let a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),l=e.dot(gs),c=t.dot(gs),u=n.dot(gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Sg=new dn,ao=new I,ac=new I,In=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);let t=ao.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ao,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(ac)),this.expandByPoint(ao.copy(e.center).sub(ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ei=new I,lc=new I,fa=new I,Vi=new I,cc=new I,pa=new I,hc=new I,ws=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){lc.copy(e).add(t).multiplyScalar(.5),fa.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(lc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(fa),a=Vi.dot(this.direction),l=-Vi.dot(fa),c=Vi.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(lc).addScaledVector(fa,d),f}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);let n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,s,r){cc.subVectors(t,e),pa.subVectors(n,e),hc.crossVectors(cc,pa);let o=this.direction.dot(hc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);let l=a*this.direction.dot(pa.crossVectors(Vi,pa));if(l<0)return null;let c=a*this.direction.dot(cc.cross(Vi));if(c<0||l+c>o)return null;let u=-a*Vi.dot(hc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),o=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tg,e,wg)}lookAt(e,t,n){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Wi.crossVectors(n,Cn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Wi.crossVectors(n,Cn)),Wi.normalize(),ma.crossVectors(Cn,Wi),s[0]=Wi.x,s[4]=ma.x,s[8]=Cn.x,s[1]=Wi.y,s[5]=ma.y,s[9]=Cn.y,s[2]=Wi.z,s[6]=ma.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],v=n[11],w=n[15],E=s[0],A=s[4],P=s[8],S=s[12],b=s[1],L=s[5],H=s[9],D=s[13],B=s[2],z=s[6],k=s[10],te=s[14],q=s[3],ge=s[7],xe=s[11],ae=s[15];return r[0]=o*E+a*b+l*B+c*q,r[4]=o*A+a*L+l*z+c*ge,r[8]=o*P+a*H+l*k+c*xe,r[12]=o*S+a*D+l*te+c*ae,r[1]=u*E+h*b+d*B+f*q,r[5]=u*A+h*L+d*z+f*ge,r[9]=u*P+h*H+d*k+f*xe,r[13]=u*S+h*D+d*te+f*ae,r[2]=g*E+x*b+m*B+p*q,r[6]=g*A+x*L+m*z+p*ge,r[10]=g*P+x*H+m*k+p*xe,r[14]=g*S+x*D+m*te+p*ae,r[3]=y*E+_*b+v*B+w*q,r[7]=y*A+_*L+v*z+w*ge,r[11]=y*P+_*H+v*k+w*xe,r[15]=y*S+_*D+v*te+w*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=h*m*c-x*d*c+x*l*f-a*m*f-h*l*p+a*d*p,_=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,v=u*x*c-g*h*c+g*a*f-o*x*f-u*a*p+o*h*p,w=g*h*l-u*x*l-g*a*d+o*x*d+u*a*m-o*h*m,E=t*y+n*_+s*v+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=y*A,e[1]=(x*d*r-h*m*r-x*s*f+n*m*f+h*s*p-n*d*p)*A,e[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*A,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*A,e[4]=_*A,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*A,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*A,e[8]=v*A,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*A,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*A,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*A,e[12]=w*A,e[13]=(u*x*s-g*h*s+g*n*d-t*x*d-u*n*m+t*h*m)*A,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*m-t*a*m)*A,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,y=l*c,_=l*u,v=l*h,w=n.x,E=n.y,A=n.z;return s[0]=(1-(x+p))*w,s[1]=(f+v)*w,s[2]=(g-_)*w,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(d+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+_)*A,s[9]=(m-y)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=er.set(s[0],s[1],s[2]).length(),o=er.set(s[4],s[5],s[6]).length(),a=er.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);let c=1/r,u=1/o,h=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,t.setFromRotationMatrix(Zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ci){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===Ci)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===qa)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ci){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u,g,x;if(a===Ci)g=(o+r)*h,x=-2*h;else if(a===qa)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},er=new I,Zn=new Ze,Tg=new I(0,0,0),wg=new I(1,1,1),Wi=new I,ma=new I,Cn=new I,ff=new Ze,pf=new It,Ln=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ff,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pf.setFromEuler(this),this.setFromQuaternion(pf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var wo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ag=0,mf=new I,tr=new It,bi=new Ze,ga=new I,lo=new I,Rg=new I,Cg=new It,gf=new I(1,0,0),xf=new I(0,1,0),yf=new I(0,0,1),vf={type:"added"},Pg={type:"removed"},nr={type:"childadded",child:null},uc={type:"childremoved",child:null},Lt=class i extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Ln,n=new It,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new st}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(gf,e)}rotateY(e){return this.rotateOnAxis(xf,e)}rotateZ(e){return this.rotateOnAxis(yf,e)}translateOnAxis(e,t){return mf.copy(e).applyQuaternion(this.quaternion),this.position.add(mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gf,e)}translateY(e){return this.translateOnAxis(xf,e)}translateZ(e){return this.translateOnAxis(yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(lo,ga,this.up):bi.lookAt(ga,lo,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(bi),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vf),nr.child=e,this.dispatchEvent(nr),nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pg),uc.child=e,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vf),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,Rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,Cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new I(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new I,Si=new I,dc=new I,Ti=new I,ir=new I,sr=new I,_f=new I,fc=new I,pc=new I,mc=new I,gc=new ft,xc=new ft,yc=new ft,bs=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jn.subVectors(s,t),Si.subVectors(n,t),dc.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(Si),l=Jn.dot(dc),c=Si.dot(Si),u=Si.dot(dc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return gc.setScalar(0),xc.setScalar(0),yc.setScalar(0),gc.fromBufferAttribute(e,t),xc.fromBufferAttribute(e,n),yc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(gc,r.x),o.addScaledVector(xc,r.y),o.addScaledVector(yc,r.z),o}static isFrontFacing(e,t,n,s){return Jn.subVectors(n,t),Si.subVectors(e,t),Jn.cross(Si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Jn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ir.subVectors(s,n),sr.subVectors(r,n),fc.subVectors(e,n);let l=ir.dot(fc),c=sr.dot(fc);if(l<=0&&c<=0)return t.copy(n);pc.subVectors(e,s);let u=ir.dot(pc),h=sr.dot(pc);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ir,o);mc.subVectors(e,r);let f=ir.dot(mc),g=sr.dot(mc);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(sr,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return _f.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(_f,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(ir,o).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},xa={h:0,s:0,l:0};function vc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=vu(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=vc(o,r,e+1/3),this.g=vc(o,r,e),this.b=vc(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){let n=Bp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return ot.fromWorkingColorSpace(hn.copy(this),e),Math.round(qt(hn.r*255,0,255))*65536+Math.round(qt(hn.g*255,0,255))*256+Math.round(qt(hn.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(hn.copy(this),t);let n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=ht){ot.fromWorkingColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,s=hn.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(xa);let n=vo(Xi.h,xa.h,t),s=vo(Xi.s,xa.s,t),r=vo(Xi.l,xa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Re;Re.NAMES=Bp;var Ig=0,Dn=class extends Li{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=On(),this.name="",this.blending=mr,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bc,this.blendDst=Hc,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bc&&(n.blendSrc=this.blendSrc),this.blendDst!==Hc&&(n.blendDst=this.blendDst),this.blendEquation!==Es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ue=class extends Dn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new I,ya=new fe,Ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_h,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}};var ja=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $a=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lg=0,Hn=new Ze,_c=new Lt,rr=new I,Pn=new dn,co=new dn,Jt=new I,Tt=class i extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kp(e)?$a:ja)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];co.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Pn.min,co.min),Pn.expandByPoint(Jt),Jt.addVectors(Pn.max,co.max),Pn.expandByPoint(Jt)):(Pn.expandByPoint(co.min),Pn.expandByPoint(co.max))}Pn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(rr.fromBufferAttribute(e,c),Jt.add(rr)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new I,l[P]=new I;let c=new I,u=new I,h=new I,d=new fe,f=new fe,g=new fe,x=new I,m=new I;function p(P,S,b){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[P].add(x),a[S].add(x),a[b].add(x),l[P].add(m),l[S].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,S=y.length;P<S;++P){let b=y[P],L=b.start,H=b.count;for(let D=L,B=L+H;D<B;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let _=new I,v=new I,w=new I,E=new I;function A(P){w.fromBufferAttribute(s,P),E.copy(w);let S=a[P];_.copy(S),_.sub(w.multiplyScalar(w.dot(S))).normalize(),v.crossVectors(E,S);let L=v.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,L)}for(let P=0,S=y.length;P<S;++P){let b=y[P],L=b.start,H=b.count;for(let D=L,B=L+H;D<B;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Ht(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mf=new Ze,xs=new ws,va=new In,Ef=new I,_a=new I,Ma=new I,Ea=new I,Mc=new I,ba=new I,bf=new I,Sa=new I,F=class extends Lt{constructor(e=new Tt,t=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Mc.fromBufferAttribute(h,e),o?ba.addScaledVector(Mc,u):ba.addScaledVector(Mc.sub(t),u))}t.add(ba)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(va.containsPoint(xs.origin)===!1&&(xs.intersectSphere(va,Ef)===null||xs.origin.distanceToSquared(Ef)>(e.far-e.near)**2))&&(Mf.copy(r).invert(),xs.copy(e.ray).applyMatrix4(Mf),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,w=_;v<w;v+=3){let E=a.getX(v),A=a.getX(v+1),P=a.getX(v+2);s=Ta(this,p,e,n,c,u,h,E,A,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=Ta(this,o,e,n,c,u,h,y,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,w=_;v<w;v+=3){let E=v,A=v+1,P=v+2;s=Ta(this,p,e,n,c,u,h,E,A,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,v=m+2;s=Ta(this,o,e,n,c,u,h,y,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Dg(i,e,t,n,s,r,o,a){let l;if(e.side===Gt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Tn,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Sa);return c<t.near||c>t.far?null:{distance:c,point:Sa.clone(),object:i}}function Ta(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,_a),i.getVertexPosition(l,Ma),i.getVertexPosition(c,Ea);let u=Dg(i,e,t,n,_a,Ma,Ea,bf);if(u){let h=new I;bs.getBarycoord(bf,_a,Ma,Ea,h),s&&(u.uv=bs.getInterpolatedAttribute(s,a,l,c,h,new fe)),r&&(u.uv1=bs.getInterpolatedAttribute(r,a,l,c,h,new fe)),o&&(u.normal=bs.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};bs.getNormal(_a,Ma,Ea,d.normal),u.face=d,u.barycoord=h}return u}var Oe=class i extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(h,2));function g(x,m,p,y,_,v,w,E,A,P,S){let b=v/A,L=w/P,H=v/2,D=w/2,B=E/2,z=A+1,k=P+1,te=0,q=0,ge=new I;for(let xe=0;xe<k;xe++){let ae=xe*L-D;for(let Ce=0;Ce<z;Ce++){let Ye=Ce*b-H;ge[x]=Ye*y,ge[m]=ae*_,ge[p]=B,c.push(ge.x,ge.y,ge.z),ge[x]=0,ge[m]=0,ge[p]=E>0?1:-1,u.push(ge.x,ge.y,ge.z),h.push(Ce/A),h.push(1-xe/P),te+=1}}for(let xe=0;xe<P;xe++)for(let ae=0;ae<A;ae++){let Ce=d+ae+z*xe,Ye=d+ae+z*(xe+1),ee=d+(ae+1)+z*(xe+1),pe=d+(ae+1)+z*xe;l.push(Ce,Ye,pe),l.push(Ye,ee,pe),q+=6}a.addGroup(f,q,S),f+=q,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ar(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function gn(i){let e={};for(let t=0;t<i.length;t++){let n=Ar(i[t]);for(let s in n)e[s]=n[s]}return e}function Ug(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var pi={clone:Ar,merge:gn},Ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,At=class extends Dn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ng,this.fragmentShader=kg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=Ug(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Za=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qi=new I,Sf=new fe,Tf=new fe,kt=class extends Za{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Sf,Tf),t.subVectors(Tf,Sf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},or=-90,ar=1,Sh=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(or,ar,e,t);s.layers=this.layers,this.add(s);let r=new kt(or,ar,e,t);r.layers=this.layers,this.add(r);let o=new kt(or,ar,e,t);o.layers=this.layers,this.add(o);let a=new kt(or,ar,e,t);a.layers=this.layers,this.add(a);let l=new kt(or,ar,e,t);l.layers=this.layers,this.add(l);let c=new kt(or,ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ja=class extends en{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:_r,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Th=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ja(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oe(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:di});r.uniforms.tEquirect.value=t;let o=new F(s,r),a=t.minFilter;return t.minFilter===ui&&(t.minFilter=un),new Sh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ec=new I,Bg=new I,Hg=new st,Qn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ec.subVectors(n,t).cross(Bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ec),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hg.getNormalMatrix(e),s=this.coplanarPoint(Ec).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new In,wa=new I,Ao=class{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+u,m+g,v+y).normalize(),n[3].setComponents(l-o,d-u,m-g,v-y).normalize(),n[4].setComponents(l-a,d-h,m-x,v-_).normalize(),t===Ci)n[5].setComponents(l+a,d+h,m+x,v+_).normalize();else if(t===qa)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(wa.x=s.normal.x>0?e.max.x:e.min.x,wa.y=s.normal.y>0?e.max.y:e.min.y,wa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fg(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var at=class i extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let y=p*d-o;for(let _=0;_<c;_++){let v=_*h-r;g.push(v,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let _=y+c*p,v=y+c*(p+1),w=y+1+c*(p+1),E=y+1+c*p;f.push(_,v,E),f.push(v,w,E)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Og=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zg=`#ifdef USE_ALPHAHASH
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
#endif`,Gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qg=`#ifdef USE_AOMAP
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
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kg=`#ifdef USE_BATCHING
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
#endif`,jg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qg=`#ifdef USE_IRIDESCENCE
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
#endif`,ex=`#ifdef USE_BUMPMAP
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cx=`#define PI 3.141592653589793
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
} // validated`,hx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ux=`vec3 transformedNormal = objectNormal;
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
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yx=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
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
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ax=`#ifdef USE_GRADIENTMAP
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
}`,Rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ix=`uniform bool receiveShadow;
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
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bx=`PhysicalMaterial material;
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
#endif`,Hx=`struct PhysicalMaterial {
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
}`,Fx=`
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
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
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
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jx=`#if defined( USE_POINTS_UV )
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
#endif`,$x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ty=`#ifdef USE_MORPHTARGETS
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
#endif`,ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ly=`#ifdef USE_NORMALMAP
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
#endif`,cy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,py=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,my=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,by=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sy=`float getShadowMask() {
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
}`,Ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wy=`#ifdef USE_SKINNING
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
#endif`,Ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ry=`#ifdef USE_SKINNING
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
#endif`,Cy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dy=`#ifdef USE_TRANSMISSION
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
#endif`,Uy=`#ifdef USE_TRANSMISSION
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
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Oy=`uniform sampler2D t2D;
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
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`#include <common>
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
}`,qy=`#if DEPTH_PACKING == 3200
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
}`,Yy=`#define DISTANCE
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
}`,Ky=`#define DISTANCE
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
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`uniform float scale;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,Qy=`#include <common>
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
}`,ev=`uniform vec3 diffuse;
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
}`,tv=`#define LAMBERT
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
}`,nv=`#define LAMBERT
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
}`,iv=`#define MATCAP
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
}`,sv=`#define MATCAP
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
}`,rv=`#define NORMAL
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
}`,ov=`#define NORMAL
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
}`,av=`#define PHONG
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
}`,lv=`#define PHONG
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
}`,cv=`#define STANDARD
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
}`,hv=`#define STANDARD
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
}`,uv=`#define TOON
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
}`,dv=`#define TOON
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
}`,fv=`uniform float size;
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
}`,pv=`uniform vec3 diffuse;
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
}`,mv=`#include <common>
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
}`,gv=`uniform vec3 color;
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
}`,xv=`uniform float rotation;
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
}`,yv=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Og,alphahash_pars_fragment:zg,alphamap_fragment:Gg,alphamap_pars_fragment:Vg,alphatest_fragment:Wg,alphatest_pars_fragment:Xg,aomap_fragment:qg,aomap_pars_fragment:Yg,batching_pars_vertex:Kg,batching_vertex:jg,begin_vertex:$g,beginnormal_vertex:Zg,bsdfs:Jg,iridescence_fragment:Qg,bumpmap_pars_fragment:ex,clipping_planes_fragment:tx,clipping_planes_pars_fragment:nx,clipping_planes_pars_vertex:ix,clipping_planes_vertex:sx,color_fragment:rx,color_pars_fragment:ox,color_pars_vertex:ax,color_vertex:lx,common:cx,cube_uv_reflection_fragment:hx,defaultnormal_vertex:ux,displacementmap_pars_vertex:dx,displacementmap_vertex:fx,emissivemap_fragment:px,emissivemap_pars_fragment:mx,colorspace_fragment:gx,colorspace_pars_fragment:xx,envmap_fragment:yx,envmap_common_pars_fragment:vx,envmap_pars_fragment:_x,envmap_pars_vertex:Mx,envmap_physical_pars_fragment:Lx,envmap_vertex:Ex,fog_vertex:bx,fog_pars_vertex:Sx,fog_fragment:Tx,fog_pars_fragment:wx,gradientmap_pars_fragment:Ax,lightmap_pars_fragment:Rx,lights_lambert_fragment:Cx,lights_lambert_pars_fragment:Px,lights_pars_begin:Ix,lights_toon_fragment:Dx,lights_toon_pars_fragment:Ux,lights_phong_fragment:Nx,lights_phong_pars_fragment:kx,lights_physical_fragment:Bx,lights_physical_pars_fragment:Hx,lights_fragment_begin:Fx,lights_fragment_maps:Ox,lights_fragment_end:zx,logdepthbuf_fragment:Gx,logdepthbuf_pars_fragment:Vx,logdepthbuf_pars_vertex:Wx,logdepthbuf_vertex:Xx,map_fragment:qx,map_pars_fragment:Yx,map_particle_fragment:Kx,map_particle_pars_fragment:jx,metalnessmap_fragment:$x,metalnessmap_pars_fragment:Zx,morphinstance_vertex:Jx,morphcolor_vertex:Qx,morphnormal_vertex:ey,morphtarget_pars_vertex:ty,morphtarget_vertex:ny,normal_fragment_begin:iy,normal_fragment_maps:sy,normal_pars_fragment:ry,normal_pars_vertex:oy,normal_vertex:ay,normalmap_pars_fragment:ly,clearcoat_normal_fragment_begin:cy,clearcoat_normal_fragment_maps:hy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:dy,opaque_fragment:fy,packing:py,premultiplied_alpha_fragment:my,project_vertex:gy,dithering_fragment:xy,dithering_pars_fragment:yy,roughnessmap_fragment:vy,roughnessmap_pars_fragment:_y,shadowmap_pars_fragment:My,shadowmap_pars_vertex:Ey,shadowmap_vertex:by,shadowmask_pars_fragment:Sy,skinbase_vertex:Ty,skinning_pars_vertex:wy,skinning_vertex:Ay,skinnormal_vertex:Ry,specularmap_fragment:Cy,specularmap_pars_fragment:Py,tonemapping_fragment:Iy,tonemapping_pars_fragment:Ly,transmission_fragment:Dy,transmission_pars_fragment:Uy,uv_pars_fragment:Ny,uv_pars_vertex:ky,uv_vertex:By,worldpos_vertex:Hy,background_vert:Fy,background_frag:Oy,backgroundCube_vert:zy,backgroundCube_frag:Gy,cube_vert:Vy,cube_frag:Wy,depth_vert:Xy,depth_frag:qy,distanceRGBA_vert:Yy,distanceRGBA_frag:Ky,equirect_vert:jy,equirect_frag:$y,linedashed_vert:Zy,linedashed_frag:Jy,meshbasic_vert:Qy,meshbasic_frag:ev,meshlambert_vert:tv,meshlambert_frag:nv,meshmatcap_vert:iv,meshmatcap_frag:sv,meshnormal_vert:rv,meshnormal_frag:ov,meshphong_vert:av,meshphong_frag:lv,meshphysical_vert:cv,meshphysical_frag:hv,meshtoon_vert:uv,meshtoon_frag:dv,points_vert:fv,points_frag:pv,shadow_vert:mv,shadow_frag:gv,sprite_vert:xv,sprite_frag:yv},we={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},hi={basic:{uniforms:gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Re(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:gn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:gn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:gn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Re(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:gn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:gn([we.points,we.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:gn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:gn([we.common,we.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:gn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:gn([we.sprite,we.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:gn([we.common,we.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:gn([we.lights,we.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};hi.physical={uniforms:gn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Aa={r:0,b:0,g:0},vs=new Ln,vv=new Ze;function _v(i,e,t,n,s,r,o){let a=new Re(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function x(y){let _=!1,v=g(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),_=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,_){let v=g(_);v&&(v.isCubeTexture||v.mapping===El)?(u===void 0&&(u=new F(new Oe(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Ar(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),vs.copy(_.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vv.makeRotationFromEuler(vs)),u.material.toneMapped=ot.getTransfer(v.colorSpace)!==vt,(h!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new F(new at(2,2),new At({name:"BackgroundMaterial",uniforms:Ar(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ot.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(Aa,Hp(i)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:m}}function Mv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,L,H,D,B){let z=!1,k=h(D,H,L);r!==k&&(r=k,c(r.object)),z=f(b,D,H,B),z&&g(b,D,H,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(b,L,H,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,L,H){let D=H.wireframe===!0,B=n[b.id];B===void 0&&(B={},n[b.id]=B);let z=B[L.id];z===void 0&&(z={},B[L.id]=z);let k=z[D];return k===void 0&&(k=d(l()),z[D]=k),k}function d(b){let L=[],H=[],D=[];for(let B=0;B<t;B++)L[B]=0,H[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:D,object:b,attributes:{},index:null}}function f(b,L,H,D){let B=r.attributes,z=L.attributes,k=0,te=H.getAttributes();for(let q in te)if(te[q].location>=0){let xe=B[q],ae=z[q];if(ae===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor)),xe===void 0||xe.attribute!==ae||ae&&xe.data!==ae.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function g(b,L,H,D){let B={},z=L.attributes,k=0,te=H.getAttributes();for(let q in te)if(te[q].location>=0){let xe=z[q];xe===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor));let ae={};ae.attribute=xe,xe&&xe.data&&(ae.data=xe.data),B[q]=ae,k++}r.attributes=B,r.attributesNum=k,r.index=D}function x(){let b=r.newAttributes;for(let L=0,H=b.length;L<H;L++)b[L]=0}function m(b){p(b,0)}function p(b,L){let H=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;H[b]=1,D[b]===0&&(i.enableVertexAttribArray(b),D[b]=1),B[b]!==L&&(i.vertexAttribDivisor(b,L),B[b]=L)}function y(){let b=r.newAttributes,L=r.enabledAttributes;for(let H=0,D=L.length;H<D;H++)L[H]!==b[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function _(b,L,H,D,B,z,k){k===!0?i.vertexAttribIPointer(b,L,H,B,z):i.vertexAttribPointer(b,L,H,D,B,z)}function v(b,L,H,D){x();let B=D.attributes,z=H.getAttributes(),k=L.defaultAttributeValues;for(let te in z){let q=z[te];if(q.location>=0){let ge=B[te];if(ge===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(ge=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(ge=b.instanceColor)),ge!==void 0){let xe=ge.normalized,ae=ge.itemSize,Ce=e.get(ge);if(Ce===void 0)continue;let Ye=Ce.buffer,ee=Ce.type,pe=Ce.bytesPerElement,K=ee===i.INT||ee===i.UNSIGNED_INT||ge.gpuType===hu;if(ge.isInterleavedBufferAttribute){let re=ge.data,ve=re.stride,Pe=ge.offset;if(re.isInstancedInterleavedBuffer){for(let Ae=0;Ae<q.locationSize;Ae++)p(q.location+Ae,re.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ae=0;Ae<q.locationSize;Ae++)m(q.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Ae=0;Ae<q.locationSize;Ae++)_(q.location+Ae,ae/q.locationSize,ee,xe,ve*pe,(Pe+ae/q.locationSize*Ae)*pe,K)}else{if(ge.isInstancedBufferAttribute){for(let re=0;re<q.locationSize;re++)p(q.location+re,ge.meshPerAttribute);b.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let re=0;re<q.locationSize;re++)m(q.location+re);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let re=0;re<q.locationSize;re++)_(q.location+re,ae/q.locationSize,ee,xe,ae*pe,ae/q.locationSize*re*pe,K)}}else if(k!==void 0){let xe=k[te];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(q.location,xe);break;case 3:i.vertexAttrib3fv(q.location,xe);break;case 4:i.vertexAttrib4fv(q.location,xe);break;default:i.vertexAttrib1fv(q.location,xe)}}}}y()}function w(){P();for(let b in n){let L=n[b];for(let H in L){let D=L[H];for(let B in D)u(D[B].object),delete D[B];delete L[H]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let L=n[b.id];for(let H in L){let D=L[H];for(let B in D)u(D[B].object),delete D[B];delete L[H]}delete n[b.id]}function A(b){for(let L in n){let H=n[L];if(H[b.id]===void 0)continue;let D=H[b.id];for(let B in D)u(D[B].object),delete D[B];delete H[b.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Ev(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Fn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let P=A===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ii&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ti&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:w,maxSamples:E}}function Sv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Qn,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let y=r?0:n,_=y*4,v=p.clippingState||null;l.value=v,v=u(g,d,_,f);for(let w=0;w!==_;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=f;_!==x;++_,v+=4)o.copy(h[_]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Tv(i){let e=new WeakMap;function t(o,a){return a===qc?o.mapping=_r:a===Yc&&(o.mapping=Mr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qc||a===Yc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Th(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Zi=class extends Za{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},fr=4,wf=[.125,.215,.35,.446,.526,.582],Ss=20,bc=new Zi,Af=new Re,Sc=null,Tc=0,wc=0,Ac=!1,Ms=(1+Math.sqrt(5))/2,lr=1/Ms,Rf=[new I(-Ms,lr,0),new I(Ms,lr,0),new I(-lr,0,Ms),new I(lr,0,Ms),new I(0,Ms,-lr),new I(0,Ms,lr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Qa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Sc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Tc,wc),this._renderer.xr.enabled=Ac,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:vn,format:Fn,colorSpace:fn,depthBuffer:!1},s=Cf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wv(r)),this._blurMaterial=Av(r,e,t)}return s}_compileMaterial(e){let t=new F(this._lodPlanes[0],e);this._renderer.compile(t,bc)}_sceneToCubeUV(e,t,n,s){let a=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Af),u.toneMapping=ji,u.autoClear=!1;let f=new Ue({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new F(new Oe,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Af),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;Ra(s,y*_,p>2?_:0,_,_),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===_r||e.mapping===Mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new F(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ra(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,bc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Rf[(s-r-1)%Rf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new F(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ss-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Ss;m>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);let p=[],y=0;for(let A=0;A<Ss;++A){let P=A/x,S=Math.exp(-P*P/2);p.push(S),A===0?y+=S:A<m&&(y+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let v=this._sizeLods[s],w=3*v*(s>_-fr?s-_+fr:0),E=4*(this._cubeSize-v);Ra(t,w,E,3*v,2*v),l.setRenderTarget(t),l.render(h,bc)}};function wv(i){let e=[],t=[],n=[],s=i,r=i-fr+1+wf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-fr?l=wf[o-i+fr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),_=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,P=E>2?0:-1,S=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];y.set(S,x*g*E),_.set(d,m*g*E);let b=[E,E,E,E,E,E];v.set(b,p*g*E)}let w=new Tt;w.setAttribute("position",new Ht(y,x)),w.setAttribute("uv",new Ht(_,m)),w.setAttribute("faceIndex",new Ht(v,p)),e.push(w),s>fr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cf(i,e,t){let n=new Vt(i,e,t);return n.texture.mapping=El,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ra(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Av(i,e,t){let n=new Float32Array(Ss),s=new I(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_u(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Pf(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function If(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function _u(){return`

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
	`}function Rv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===qc||l===Yc,u=l===_r||l===Mr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Qa(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Qa(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Cv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&mo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Pv(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,v=y.length;_<v;_+=3){let w=y[_+0],E=y[_+1],A=y[_+2];d.push(w,E,E,A,A,w)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let w=_+0,E=_+1,A=_+2;d.push(w,E,E,A,A,w)}}else return;let m=new(kp(d)?$a:ja)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Iv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Lv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Dv(i,e,t){let n=new WeakMap,s=new ft;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let E=new Float32Array(v*w*4*h),A=new Ka(E,v,w,h);A.type=ti,A.needsUpdate=!0;let P=_*4;for(let b=0;b<h;b++){let L=m[b],H=p[b],D=y[b],B=v*w*4*b;for(let z=0;z<L.count;z++){let k=z*P;f===!0&&(s.fromBufferAttribute(L,z),E[B+k+0]=s.x,E[B+k+1]=s.y,E[B+k+2]=s.z,E[B+k+3]=0),g===!0&&(s.fromBufferAttribute(H,z),E[B+k+4]=s.x,E[B+k+5]=s.y,E[B+k+6]=s.z,E[B+k+7]=0),x===!0&&(s.fromBufferAttribute(D,z),E[B+k+8]=s.x,E[B+k+9]=s.y,E[B+k+10]=s.z,E[B+k+11]=D.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new fe(v,w)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Uv(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var el=class extends en{constructor(e,t,n,s,r,o,a,l,c,u=gr){if(u!==gr&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===gr&&(n=Ts),n===void 0&&u===br&&(n=Er),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Op=new en,Lf=new el(1,1),zp=new Ka,Gp=new bh,Vp=new Ja,Df=[],Uf=[],Nf=new Float32Array(16),kf=new Float32Array(9),Bf=new Float32Array(4);function kr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Df[s];if(r===void 0&&(r=new Float32Array(s),Df[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wl(i,e){let t=Uf[e];t===void 0&&(t=new Int32Array(e),Uf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function Bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function Hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function Fv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Bf.set(n),i.uniformMatrix2fv(this.addr,!1,Bf),Kt(t,n)}}function Ov(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;kf.set(n),i.uniformMatrix3fv(this.addr,!1,kf),Kt(t,n)}}function zv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,n))return;Nf.set(n),i.uniformMatrix4fv(this.addr,!1,Nf),Kt(t,n)}}function Gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function Wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function Xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function qv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function Kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function $v(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lf.compareFunction=Np,r=Lf):r=Op,t.setTexture2D(e||r,s)}function Zv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Gp,s)}function Jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vp,s)}function Qv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zp,s)}function e_(i){switch(i){case 5126:return Nv;case 35664:return kv;case 35665:return Bv;case 35666:return Hv;case 35674:return Fv;case 35675:return Ov;case 35676:return zv;case 5124:case 35670:return Gv;case 35667:case 35671:return Vv;case 35668:case 35672:return Wv;case 35669:case 35673:return Xv;case 5125:return qv;case 36294:return Yv;case 36295:return Kv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return Qv}}function t_(i,e){i.uniform1fv(this.addr,e)}function n_(i,e){let t=kr(e,this.size,2);i.uniform2fv(this.addr,t)}function i_(i,e){let t=kr(e,this.size,3);i.uniform3fv(this.addr,t)}function s_(i,e){let t=kr(e,this.size,4);i.uniform4fv(this.addr,t)}function r_(i,e){let t=kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function o_(i,e){let t=kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function a_(i,e){let t=kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function l_(i,e){i.uniform1iv(this.addr,e)}function c_(i,e){i.uniform2iv(this.addr,e)}function h_(i,e){i.uniform3iv(this.addr,e)}function u_(i,e){i.uniform4iv(this.addr,e)}function d_(i,e){i.uniform1uiv(this.addr,e)}function f_(i,e){i.uniform2uiv(this.addr,e)}function p_(i,e){i.uniform3uiv(this.addr,e)}function m_(i,e){i.uniform4uiv(this.addr,e)}function g_(i,e,t){let n=this.cache,s=e.length,r=wl(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Op,r[o])}function x_(i,e,t){let n=this.cache,s=e.length,r=wl(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Gp,r[o])}function y_(i,e,t){let n=this.cache,s=e.length,r=wl(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vp,r[o])}function v_(i,e,t){let n=this.cache,s=e.length,r=wl(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zp,r[o])}function __(i){switch(i){case 5126:return t_;case 35664:return n_;case 35665:return i_;case 35666:return s_;case 35674:return r_;case 35675:return o_;case 35676:return a_;case 5124:case 35670:return l_;case 35667:case 35671:return c_;case 35668:case 35672:return h_;case 35669:case 35673:return u_;case 5125:return d_;case 36294:return f_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return v_}}var wh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=e_(t.type)}},Ah=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=__(t.type)}},Rh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Rc=/(\w+)(\])?(\[|\.)?/g;function Hf(i,e){i.seq.push(e),i.map[e.id]=e}function M_(i,e,t){let n=i.name,s=n.length;for(Rc.lastIndex=0;;){let r=Rc.exec(n),o=Rc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hf(t,c===void 0?new wh(a,i,e):new Ah(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Rh(a),Hf(t,h)),t=h}}}var yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);M_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ff(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var E_=37297,b_=0;function S_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Of=new st;function T_(i){ot._getMatrix(Of,ot.workingColorSpace,i);let e=`mat3( ${Of.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Sl:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+S_(i.getShaderSource(e),o)}else return s}function w_(i,e){let t=T_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function A_(i,e){let t;switch(e){case su:t="Linear";break;case ru:t="Reinhard";break;case ou:t="Cineon";break;case Nr:t="ACESFilmic";break;case au:t="AgX";break;case lu:t="Neutral";break;case z0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ca=new I;function R_(){ot.getLuminanceCoefficients(Ca);let i=Ca.x.toFixed(4),e=Ca.y.toFixed(4),t=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function P_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function go(i){return i!==""}function Gf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var L_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(i){return i.replace(L_,U_)}var D_=new Map;function U_(i,e){let t=rt[e];if(t===void 0){let n=D_.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ch(t)}var N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(i){return i.replace(N_,k_)}function k_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function B_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function H_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _r:case Mr:e="ENVMAP_TYPE_CUBE";break;case El:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mr:e="ENVMAP_MODE_REFRACTION";break}return e}function O_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ep:e="ENVMAP_BLENDING_MULTIPLY";break;case F0:e="ENVMAP_BLENDING_MIX";break;case O0:e="ENVMAP_BLENDING_ADD";break}return e}function z_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function G_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=B_(t),c=H_(t),u=F_(t),h=O_(t),d=z_(t),f=C_(t),g=P_(r),x=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(go).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(go).join(`
`),p.length>0&&(p+=`
`)):(m=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),p=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?rt.tonemapping_pars_fragment:"",t.toneMapping!==ji?A_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,w_("linearToOutputTexel",t.outputColorSpace),R_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(go).join(`
`)),o=Ch(o),o=Gf(o,t),o=Vf(o,t),a=Ch(a),a=Gf(a,t),a=Vf(a,t),o=Wf(o),a=Wf(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+m+o,v=y+p+a,w=Ff(s,s.VERTEX_SHADER,_),E=Ff(s,s.FRAGMENT_SHADER,v);s.attachShader(x,w),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(x).trim(),D=s.getShaderInfoLog(w).trim(),B=s.getShaderInfoLog(E).trim(),z=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,E);else{let te=zf(s,w,"vertex"),q=zf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+te+`
`+q)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(D===""||B==="")&&(k=!1);k&&(L.diagnostics={runnable:z,programLog:H,vertexShader:{log:D,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(w),s.deleteShader(E),P=new yr(s,x),S=I_(s,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,E_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=b_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}var V_=0,Ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ih(e),t.set(e,n)),n}},Ih=class{constructor(e){this.id=V_++,this.code=e,this.usedTimes=0}};function W_(i,e,t,n,s,r,o){let a=new wo,l=new Ph,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,L,H,D){let B=H.fog,z=D.geometry,k=S.isMeshStandardMaterial?H.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),q=te&&te.mapping===El?te.image.height:null,ge=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let xe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ae=xe!==void 0?xe.length:0,Ce=0;z.morphAttributes.position!==void 0&&(Ce=1),z.morphAttributes.normal!==void 0&&(Ce=2),z.morphAttributes.color!==void 0&&(Ce=3);let Ye,ee,pe,K;if(ge){let Mt=hi[ge];Ye=Mt.vertexShader,ee=Mt.fragmentShader}else Ye=S.vertexShader,ee=S.fragmentShader,l.update(S),pe=l.getVertexShaderID(S),K=l.getFragmentShaderID(S);let re=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Pe=D.isInstancedMesh===!0,Ae=D.isBatchedMesh===!0,$e=!!S.map,he=!!S.matcap,_e=!!te,R=!!S.aoMap,j=!!S.lightMap,Y=!!S.bumpMap,ue=!!S.normalMap,U=!!S.displacementMap,W=!!S.emissiveMap,O=!!S.metalnessMap,T=!!S.roughnessMap,M=S.anisotropy>0,N=S.clearcoat>0,$=S.dispersion>0,ce=S.iridescence>0,Q=S.sheen>0,Se=S.transmission>0,ne=M&&!!S.anisotropyMap,Me=N&&!!S.clearcoatMap,qe=N&&!!S.clearcoatNormalMap,le=N&&!!S.clearcoatRoughnessMap,be=ce&&!!S.iridescenceMap,Be=ce&&!!S.iridescenceThicknessMap,Fe=Q&&!!S.sheenColorMap,Te=Q&&!!S.sheenRoughnessMap,tt=!!S.specularMap,Ke=!!S.specularColorMap,_t=!!S.specularIntensityMap,G=Se&&!!S.transmissionMap,Ie=Se&&!!S.thicknessMap,se=!!S.gradientMap,de=!!S.alphaMap,Ne=S.alphaTest>0,Le=!!S.alphaHash,nt=!!S.extensions,Nt=ji;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let ln={shaderID:ge,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:ee,defines:S.defines,customVertexShaderID:pe,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ae,batchingColor:Ae&&D._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&D.instanceColor!==null,instancingMorph:Pe&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:fn,alphaToCoverage:!!S.alphaToCoverage,map:$e,matcap:he,envMap:_e,envMapMode:_e&&te.mapping,envMapCubeUVHeight:q,aoMap:R,lightMap:j,bumpMap:Y,normalMap:ue,displacementMap:d&&U,emissiveMap:W,normalMapObjectSpace:ue&&S.normalMapType===K0,normalMapTangentSpace:ue&&S.normalMapType===Up,metalnessMap:O,roughnessMap:T,anisotropy:M,anisotropyMap:ne,clearcoat:N,clearcoatMap:Me,clearcoatNormalMap:qe,clearcoatRoughnessMap:le,dispersion:$,iridescence:ce,iridescenceMap:be,iridescenceThicknessMap:Be,sheen:Q,sheenColorMap:Fe,sheenRoughnessMap:Te,specularMap:tt,specularColorMap:Ke,specularIntensityMap:_t,transmission:Se,transmissionMap:G,thicknessMap:Ie,gradientMap:se,opaque:S.transparent===!1&&S.blending===mr&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:Ne,alphaHash:Le,combine:S.combine,mapUv:$e&&x(S.map.channel),aoMapUv:R&&x(S.aoMap.channel),lightMapUv:j&&x(S.lightMap.channel),bumpMapUv:Y&&x(S.bumpMap.channel),normalMapUv:ue&&x(S.normalMap.channel),displacementMapUv:U&&x(S.displacementMap.channel),emissiveMapUv:W&&x(S.emissiveMap.channel),metalnessMapUv:O&&x(S.metalnessMap.channel),roughnessMapUv:T&&x(S.roughnessMap.channel),anisotropyMapUv:ne&&x(S.anisotropyMap.channel),clearcoatMapUv:Me&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:qe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Te&&x(S.sheenRoughnessMap.channel),specularMapUv:tt&&x(S.specularMap.channel),specularColorMapUv:Ke&&x(S.specularColorMap.channel),specularIntensityMapUv:_t&&x(S.specularIntensityMap.channel),transmissionMapUv:G&&x(S.transmissionMap.channel),thicknessMapUv:Ie&&x(S.thicknessMap.channel),alphaMapUv:de&&x(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ue||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&($e||de),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ve,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:$e&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===vt,decodeVideoTextureEmissive:W&&S.emissiveMap.isVideoTexture===!0&&ot.getTransfer(S.emissiveMap.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pt,flipSided:S.side===Gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:nt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&S.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ln.vertexUv1s=c.has(1),ln.vertexUv2s=c.has(2),ln.vertexUv3s=c.has(3),c.clear(),ln}function p(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(y(b,S),_(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){let b=g[S.type],L;if(b){let H=hi[b];L=pi.clone(H.uniforms)}else L=S.uniforms;return L}function w(S,b){let L;for(let H=0,D=u.length;H<D;H++){let B=u[H];if(B.cacheKey===b){L=B,++L.usedTimes;break}}return L===void 0&&(L=new G_(i,b,S,r),u.push(L)),L}function E(S){if(--S.usedTimes===0){let b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:P}}function X_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||q_),n.length>1&&n.sort(d||qf),s.length>1&&s.sort(d||qf)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Y_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Yf,i.set(n,[o])):s>=r.length?(o=new Yf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function K_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Re};break;case"SpotLight":t={position:new I,direction:new I,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function j_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var $_=0;function Z_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function J_(i){let e=new K_,t=j_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Ze,o=new Ze;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,_=0,v=0,w=0,E=0,A=0;c.sort(Z_);for(let S=0,b=c.length;S<b;S++){let L=c[S],H=L.color,D=L.intensity,B=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=H.r*D,h+=H.g*D,d+=H.b*D;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],D);A++}else if(L.isDirectionalLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,q=t.get(L);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=k,f++}else if(L.isSpotLight){let k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(H).multiplyScalar(D),k.distance=B,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[x]=k;let te=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,te.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[x]=te.matrix,L.castShadow){let q=t.get(L);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=z,v++}x++}else if(L.isRectAreaLight){let k=e.get(L);k.color.copy(H).multiplyScalar(D),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=k,m++}else if(L.isPointLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let te=L.shadow,q=t.get(L);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,q.shadowCameraNear=te.camera.near,q.shadowCameraFar=te.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=L.shadow.matrix,_++}n.point[g]=k,g++}else if(L.isHemisphereLight){let k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(D),k.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==_||P.numSpotShadows!==v||P.numSpotMaps!==w||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=_,P.numSpotShadows=v,P.numSpotMaps=w,P.numLightProbes=A,n.version=$_++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let _=c[p];if(_.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Kf(i){let e=new J_(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Q_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Kf(i),e.set(s,[a])):r>=o.length?(a=new Kf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Lh=class extends Dn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=q0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dh=class extends Dn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},eM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tM=`uniform sampler2D shadow_pass;
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
}`;function nM(i,e,t){let n=new Ao,s=new fe,r=new fe,o=new ft,a=new Lh({depthPacking:Y0}),l=new Dh,c={},u=t.maxTextureSize,h={[Tn]:Gt,[Gt]:Tn,[Pt]:Pt},d=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:eM,fragmentShader:tM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new F(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mp;let p=this.type;this.render=function(E,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),H=i.state;H.setBlending(di),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let D=p!==Ai&&this.type===Ai,B=p===Ai&&this.type!==Ai;for(let z=0,k=E.length;z<k;z++){let te=E[z],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ge=q.getFrameExtents();if(s.multiply(ge),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ge.x),s.x=r.x*ge.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ge.y),s.y=r.y*ge.y,q.mapSize.y=r.y)),q.map===null||D===!0||B===!0){let ae=this.type!==Ai?{minFilter:Qt,magFilter:Qt}:{};q.map!==null&&q.map.dispose(),q.map=new Vt(s.x,s.y,ae),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let xe=q.getViewportCount();for(let ae=0;ae<xe;ae++){let Ce=q.getViewport(ae);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),H.viewport(o),q.updateMatrices(te,ae),n=q.getFrustum(),v(A,P,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===Ai&&y(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,L)};function y(E,A){let P=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vt(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,P,f,x,null)}function _(E,A,P,S){let b=null,L=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)b=L;else if(b=P.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=b.uuid,D=A.uuid,B=c[H];B===void 0&&(B={},c[H]=B);let z=B[D];z===void 0&&(z=b.clone(),B[D]=z,A.addEventListener("dispose",w)),b=z}if(b.visible=A.visible,b.wireframe=A.wireframe,S===Ai?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=i.properties.get(b);H.light=P}return b}function v(E,A,P,S,b){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Ai)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);let D=e.update(E),B=E.material;if(Array.isArray(B)){let z=D.groups;for(let k=0,te=z.length;k<te;k++){let q=z[k],ge=B[q.materialIndex];if(ge&&ge.visible){let xe=_(E,ge,S,b);E.onBeforeShadow(i,E,A,P,D,xe,q),i.renderBufferDirect(P,null,D,xe,E,q),E.onAfterShadow(i,E,A,P,D,xe,q)}}}else if(B.visible){let z=_(E,B,S,b);E.onBeforeShadow(i,E,A,P,D,z,null),i.renderBufferDirect(P,null,D,z,E,null),E.onAfterShadow(i,E,A,P,D,z,null)}}let H=E.children;for(let D=0,B=H.length;D<B;D++)v(H[D],A,P,S,b)}function w(E){E.target.removeEventListener("dispose",w);for(let P in c){let S=c[P],b=E.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var iM={[Fc]:Oc,[zc]:Wc,[Gc]:Xc,[vr]:Vc,[Oc]:Fc,[Wc]:zc,[Xc]:Gc,[Vc]:vr};function sM(i,e){function t(){let G=!1,Ie=new ft,se=null,de=new ft(0,0,0,0);return{setMask:function(Ne){se!==Ne&&!G&&(i.colorMask(Ne,Ne,Ne,Ne),se=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,Le,nt,Nt,ln){ln===!0&&(Ne*=Nt,Le*=Nt,nt*=Nt),Ie.set(Ne,Le,nt,Nt),de.equals(Ie)===!1&&(i.clearColor(Ne,Le,nt,Nt),de.copy(Ie))},reset:function(){G=!1,se=null,de.set(-1,0,0,0)}}}function n(){let G=!1,Ie=!1,se=null,de=null,Ne=null;return{setReversed:function(Le){if(Ie!==Le){let nt=e.get("EXT_clip_control");Ie?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT);let Nt=Ne;Ne=null,this.setClear(Nt)}Ie=Le},getReversed:function(){return Ie},setTest:function(Le){Le?re(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(Le){se!==Le&&!G&&(i.depthMask(Le),se=Le)},setFunc:function(Le){if(Ie&&(Le=iM[Le]),de!==Le){switch(Le){case Fc:i.depthFunc(i.NEVER);break;case Oc:i.depthFunc(i.ALWAYS);break;case zc:i.depthFunc(i.LESS);break;case vr:i.depthFunc(i.LEQUAL);break;case Gc:i.depthFunc(i.EQUAL);break;case Vc:i.depthFunc(i.GEQUAL);break;case Wc:i.depthFunc(i.GREATER);break;case Xc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Le}},setLocked:function(Le){G=Le},setClear:function(Le){Ne!==Le&&(Ie&&(Le=1-Le),i.clearDepth(Le),Ne=Le)},reset:function(){G=!1,se=null,de=null,Ne=null,Ie=!1}}}function s(){let G=!1,Ie=null,se=null,de=null,Ne=null,Le=null,nt=null,Nt=null,ln=null;return{setTest:function(Mt){G||(Mt?re(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Mt){Ie!==Mt&&!G&&(i.stencilMask(Mt),Ie=Mt)},setFunc:function(Mt,Kn,vi){(se!==Mt||de!==Kn||Ne!==vi)&&(i.stencilFunc(Mt,Kn,vi),se=Mt,de=Kn,Ne=vi)},setOp:function(Mt,Kn,vi){(Le!==Mt||nt!==Kn||Nt!==vi)&&(i.stencilOp(Mt,Kn,vi),Le=Mt,nt=Kn,Nt=vi)},setLocked:function(Mt){G=Mt},setClear:function(Mt){ln!==Mt&&(i.clearStencil(Mt),ln=Mt)},reset:function(){G=!1,Ie=null,se=null,de=null,Ne=null,Le=null,nt=null,Nt=null,ln=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,_=null,v=null,w=null,E=null,A=new Re(0,0,0),P=0,S=!1,b=null,L=null,H=null,D=null,B=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,te=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=te>=2);let ge=null,xe={},ae=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),Ye=new ft().fromArray(ae),ee=new ft().fromArray(Ce);function pe(G,Ie,se,de){let Ne=new Uint8Array(4),Le=i.createTexture();i.bindTexture(G,Le),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<se;nt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(Ie+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return Le}let K={};K[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(i.DEPTH_TEST),o.setFunc(vr),Y(!1),ue(Jd),re(i.CULL_FACE),R(di);function re(G){u[G]!==!0&&(i.enable(G),u[G]=!0)}function ve(G){u[G]!==!1&&(i.disable(G),u[G]=!1)}function Pe(G,Ie){return h[G]!==Ie?(i.bindFramebuffer(G,Ie),h[G]=Ie,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ie),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ae(G,Ie){let se=f,de=!1;if(G){se=d.get(Ie),se===void 0&&(se=[],d.set(Ie,se));let Ne=G.textures;if(se.length!==Ne.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,nt=Ne.length;Le<nt;Le++)se[Le]=i.COLOR_ATTACHMENT0+Le;se.length=Ne.length,de=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,de=!0);de&&i.drawBuffers(se)}function $e(G){return g!==G?(i.useProgram(G),g=G,!0):!1}let he={[Es]:i.FUNC_ADD,[E0]:i.FUNC_SUBTRACT,[b0]:i.FUNC_REVERSE_SUBTRACT};he[S0]=i.MIN,he[T0]=i.MAX;let _e={[w0]:i.ZERO,[A0]:i.ONE,[R0]:i.SRC_COLOR,[Bc]:i.SRC_ALPHA,[U0]:i.SRC_ALPHA_SATURATE,[L0]:i.DST_COLOR,[P0]:i.DST_ALPHA,[C0]:i.ONE_MINUS_SRC_COLOR,[Hc]:i.ONE_MINUS_SRC_ALPHA,[D0]:i.ONE_MINUS_DST_COLOR,[I0]:i.ONE_MINUS_DST_ALPHA,[N0]:i.CONSTANT_COLOR,[k0]:i.ONE_MINUS_CONSTANT_COLOR,[B0]:i.CONSTANT_ALPHA,[H0]:i.ONE_MINUS_CONSTANT_ALPHA};function R(G,Ie,se,de,Ne,Le,nt,Nt,ln,Mt){if(G===di){x===!0&&(ve(i.BLEND),x=!1);return}if(x===!1&&(re(i.BLEND),x=!0),G!==M0){if(G!==m||Mt!==S){if((p!==Es||v!==Es)&&(i.blendEquation(i.FUNC_ADD),p=Es,v=Es),Mt)switch(G){case mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ni:i.blendFunc(i.ONE,i.ONE);break;case Qd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ef:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ni:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ef:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,_=null,w=null,E=null,A.set(0,0,0),P=0,m=G,S=Mt}return}Ne=Ne||Ie,Le=Le||se,nt=nt||de,(Ie!==p||Ne!==v)&&(i.blendEquationSeparate(he[Ie],he[Ne]),p=Ie,v=Ne),(se!==y||de!==_||Le!==w||nt!==E)&&(i.blendFuncSeparate(_e[se],_e[de],_e[Le],_e[nt]),y=se,_=de,w=Le,E=nt),(Nt.equals(A)===!1||ln!==P)&&(i.blendColor(Nt.r,Nt.g,Nt.b,ln),A.copy(Nt),P=ln),m=G,S=!1}function j(G,Ie){G.side===Pt?ve(i.CULL_FACE):re(i.CULL_FACE);let se=G.side===Gt;Ie&&(se=!se),Y(se),G.blending===mr&&G.transparent===!1?R(di):R(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let de=G.stencilWrite;a.setTest(de),de&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),W(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(G){b!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),b=G)}function ue(G){G!==y0?(re(i.CULL_FACE),G!==L&&(G===Jd?i.cullFace(i.BACK):G===v0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),L=G}function U(G){G!==H&&(k&&i.lineWidth(G),H=G)}function W(G,Ie,se){G?(re(i.POLYGON_OFFSET_FILL),(D!==Ie||B!==se)&&(i.polygonOffset(Ie,se),D=Ie,B=se)):ve(i.POLYGON_OFFSET_FILL)}function O(G){G?re(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function T(G){G===void 0&&(G=i.TEXTURE0+z-1),ge!==G&&(i.activeTexture(G),ge=G)}function M(G,Ie,se){se===void 0&&(ge===null?se=i.TEXTURE0+z-1:se=ge);let de=xe[se];de===void 0&&(de={type:void 0,texture:void 0},xe[se]=de),(de.type!==G||de.texture!==Ie)&&(ge!==se&&(i.activeTexture(se),ge=se),i.bindTexture(G,Ie||K[G]),de.type=G,de.texture=Ie)}function N(){let G=xe[ge];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(G){Ye.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Ye.copy(G))}function Te(G){ee.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ee.copy(G))}function tt(G,Ie){let se=c.get(Ie);se===void 0&&(se=new WeakMap,c.set(Ie,se));let de=se.get(G);de===void 0&&(de=i.getUniformBlockIndex(Ie,G.name),se.set(G,de))}function Ke(G,Ie){let de=c.get(Ie).get(G);l.get(Ie)!==de&&(i.uniformBlockBinding(Ie,de,G.__bindingPointIndex),l.set(Ie,de))}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ge=null,xe={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,_=null,v=null,w=null,E=null,A=new Re(0,0,0),P=0,S=!1,b=null,L=null,H=null,D=null,B=null,Ye.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:ve,bindFramebuffer:Pe,drawBuffers:Ae,useProgram:$e,setBlending:R,setMaterial:j,setFlipSided:Y,setCullFace:ue,setLineWidth:U,setPolygonOffset:W,setScissorTest:O,activeTexture:T,bindTexture:M,unbindTexture:N,compressedTexImage2D:$,compressedTexImage3D:ce,texImage2D:be,texImage3D:Be,updateUBOMapping:tt,uniformBlockBinding:Ke,texStorage2D:qe,texStorage3D:le,texSubImage2D:Q,texSubImage3D:Se,compressedTexSubImage2D:ne,compressedTexSubImage3D:Me,scissor:Fe,viewport:Te,reset:_t}}function jf(i,e,t,n){let s=rM(n);switch(t){case Ap:return i*e;case Cp:return i*e;case Pp:return i*e*2;case fu:return i*e/s.components*s.byteLength;case pu:return i*e/s.components*s.byteLength;case Ip:return i*e*2/s.components*s.byteLength;case mu:return i*e*2/s.components*s.byteLength;case Rp:return i*e*3/s.components*s.byteLength;case Fn:return i*e*4/s.components*s.byteLength;case gu:return i*e*4/s.components*s.byteLength;case Oa:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:case Zc:return Math.max(i,16)*Math.max(e,8)/4;case Kc:case $c:return Math.max(i,8)*Math.max(e,8)/2;case Jc:case Qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ih:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case uh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case dh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ph:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wa:case mh:case gh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lp:case xh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yh:case vh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rM(i){switch(i){case Ii:case Sp:return{byteLength:1,components:1};case So:case Tp:case vn:return{byteLength:2,components:1};case uu:case du:return{byteLength:2,components:4};case Ts:case hu:case ti:return{byteLength:4,components:1};case wp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function oM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):To("canvas")}function x(T,M,N){let $=1,ce=O(T);if((ce.width>N||ce.height>N)&&($=N/Math.max(ce.width,ce.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Q=Math.floor($*ce.width),Se=Math.floor($*ce.height);h===void 0&&(h=g(Q,Se));let ne=M?g(Q,Se):h;return ne.width=Q,ne.height=Se,ne.getContext("2d").drawImage(T,0,0,Q,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Q+"x"+Se+")."),ne}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(T,M,N,$,ce=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=M;if(M===i.RED&&(N===i.FLOAT&&(Q=i.R32F),N===i.HALF_FLOAT&&(Q=i.R16F),N===i.UNSIGNED_BYTE&&(Q=i.R8)),M===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.R8UI),N===i.UNSIGNED_SHORT&&(Q=i.R16UI),N===i.UNSIGNED_INT&&(Q=i.R32UI),N===i.BYTE&&(Q=i.R8I),N===i.SHORT&&(Q=i.R16I),N===i.INT&&(Q=i.R32I)),M===i.RG&&(N===i.FLOAT&&(Q=i.RG32F),N===i.HALF_FLOAT&&(Q=i.RG16F),N===i.UNSIGNED_BYTE&&(Q=i.RG8)),M===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RG8UI),N===i.UNSIGNED_SHORT&&(Q=i.RG16UI),N===i.UNSIGNED_INT&&(Q=i.RG32UI),N===i.BYTE&&(Q=i.RG8I),N===i.SHORT&&(Q=i.RG16I),N===i.INT&&(Q=i.RG32I)),M===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),N===i.UNSIGNED_INT&&(Q=i.RGB32UI),N===i.BYTE&&(Q=i.RGB8I),N===i.SHORT&&(Q=i.RGB16I),N===i.INT&&(Q=i.RGB32I)),M===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),N===i.UNSIGNED_INT&&(Q=i.RGBA32UI),N===i.BYTE&&(Q=i.RGBA8I),N===i.SHORT&&(Q=i.RGBA16I),N===i.INT&&(Q=i.RGBA32I)),M===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),M===i.RGBA){let Se=ce?Sl:ot.getTransfer($);N===i.FLOAT&&(Q=i.RGBA32F),N===i.HALF_FLOAT&&(Q=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Q=Se===vt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(T,M){let N;return T?M===null||M===Ts||M===Er?N=i.DEPTH24_STENCIL8:M===ti?N=i.DEPTH32F_STENCIL8:M===So&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ts||M===Er?N=i.DEPTH_COMPONENT24:M===ti?N=i.DEPTH_COMPONENT32F:M===So&&(N=i.DEPTH_COMPONENT16),N}function w(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Qt&&T.minFilter!==un?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function E(T){let M=T.target;M.removeEventListener("dispose",E),P(M),M.isVideoTexture&&u.delete(M)}function A(T){let M=T.target;M.removeEventListener("dispose",A),b(M)}function P(T){let M=n.get(T);if(M.__webglInit===void 0)return;let N=T.source,$=d.get(N);if($){let ce=$[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&S(T),Object.keys($).length===0&&d.delete(N)}n.remove(T)}function S(T){let M=n.get(T);i.deleteTexture(M.__webglTexture);let N=T.source,$=d.get(N);delete $[M.__cacheKey],o.memory.textures--}function b(T){let M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let ce=0;ce<M.__webglFramebuffer[$].length;ce++)i.deleteFramebuffer(M.__webglFramebuffer[$][ce]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let N=T.textures;for(let $=0,ce=N.length;$<ce;$++){let Q=n.get(N[$]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(N[$])}n.remove(T)}let L=0;function H(){L=0}function D(){let T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function B(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function z(T,M){let N=n.get(T);if(T.isVideoTexture&&U(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){let $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(N,T,M);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+M)}function k(T,M){let N=n.get(T);if(T.version>0&&N.__version!==T.version){ee(N,T,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+M)}function te(T,M){let N=n.get(T);if(T.version>0&&N.__version!==T.version){ee(N,T,M);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+M)}function q(T,M){let N=n.get(T);if(T.version>0&&N.__version!==T.version){pe(N,T,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+M)}let ge={[wn]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[bo]:i.MIRRORED_REPEAT},xe={[Qt]:i.NEAREST,[cu]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},ae={[j0]:i.NEVER,[tg]:i.ALWAYS,[$0]:i.LESS,[Np]:i.LEQUAL,[Z0]:i.EQUAL,[eg]:i.GEQUAL,[J0]:i.GREATER,[Q0]:i.NOTEQUAL};function Ce(T,M){if(M.type===ti&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===un||M.magFilter===xo||M.magFilter===hr||M.magFilter===ui||M.minFilter===un||M.minFilter===xo||M.minFilter===hr||M.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ge[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ge[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ge[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,xe[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qt||M.minFilter!==hr&&M.minFilter!==ui||M.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ye(T,M){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",E));let $=M.source,ce=d.get($);ce===void 0&&(ce={},d.set($,ce));let Q=B(M);if(Q!==T.__cacheKey){ce[Q]===void 0&&(ce[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ce[Q].usedTimes++;let Se=ce[T.__cacheKey];Se!==void 0&&(ce[T.__cacheKey].usedTimes--,Se.usedTimes===0&&S(M)),T.__cacheKey=Q,T.__webglTexture=ce[Q].texture}return N}function ee(T,M,N){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);let ce=Ye(T,M),Q=M.source;t.bindTexture($,T.__webglTexture,i.TEXTURE0+N);let Se=n.get(Q);if(Q.version!==Se.__version||ce===!0){t.activeTexture(i.TEXTURE0+N);let ne=ot.getPrimaries(ot.workingColorSpace),Me=M.colorSpace===Yi?null:ot.getPrimaries(M.colorSpace),qe=M.colorSpace===Yi||ne===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let le=x(M.image,!1,s.maxTextureSize);le=W(M,le);let be=r.convert(M.format,M.colorSpace),Be=r.convert(M.type),Fe=_(M.internalFormat,be,Be,M.colorSpace,M.isVideoTexture);Ce($,M);let Te,tt=M.mipmaps,Ke=M.isVideoTexture!==!0,_t=Se.__version===void 0||ce===!0,G=Q.dataReady,Ie=w(M,le);if(M.isDepthTexture)Fe=v(M.format===br,M.type),_t&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Fe,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Fe,le.width,le.height,0,be,Be,null));else if(M.isDataTexture)if(tt.length>0){Ke&&_t&&t.texStorage2D(i.TEXTURE_2D,Ie,Fe,tt[0].width,tt[0].height);for(let se=0,de=tt.length;se<de;se++)Te=tt[se],Ke?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Te.width,Te.height,be,Be,Te.data):t.texImage2D(i.TEXTURE_2D,se,Fe,Te.width,Te.height,0,be,Be,Te.data);M.generateMipmaps=!1}else Ke?(_t&&t.texStorage2D(i.TEXTURE_2D,Ie,Fe,le.width,le.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,be,Be,le.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,le.width,le.height,0,be,Be,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&_t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Fe,tt[0].width,tt[0].height,le.depth);for(let se=0,de=tt.length;se<de;se++)if(Te=tt[se],M.format!==Fn)if(be!==null)if(Ke){if(G)if(M.layerUpdates.size>0){let Ne=jf(Te.width,Te.height,M.format,M.type);for(let Le of M.layerUpdates){let nt=Te.data.subarray(Le*Ne/Te.data.BYTES_PER_ELEMENT,(Le+1)*Ne/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Le,Te.width,Te.height,1,be,nt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Te.width,Te.height,le.depth,be,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Fe,Te.width,Te.height,le.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Te.width,Te.height,le.depth,be,Be,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Fe,Te.width,Te.height,le.depth,0,be,Be,Te.data)}else{Ke&&_t&&t.texStorage2D(i.TEXTURE_2D,Ie,Fe,tt[0].width,tt[0].height);for(let se=0,de=tt.length;se<de;se++)Te=tt[se],M.format!==Fn?be!==null?Ke?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Te.width,Te.height,be,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Te.width,Te.height,be,Be,Te.data):t.texImage2D(i.TEXTURE_2D,se,Fe,Te.width,Te.height,0,be,Be,Te.data)}else if(M.isDataArrayTexture)if(Ke){if(_t&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Fe,le.width,le.height,le.depth),G)if(M.layerUpdates.size>0){let se=jf(le.width,le.height,M.format,M.type);for(let de of M.layerUpdates){let Ne=le.data.subarray(de*se/le.data.BYTES_PER_ELEMENT,(de+1)*se/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,le.width,le.height,1,be,Be,Ne)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,be,Be,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,le.width,le.height,le.depth,0,be,Be,le.data);else if(M.isData3DTexture)Ke?(_t&&t.texStorage3D(i.TEXTURE_3D,Ie,Fe,le.width,le.height,le.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,be,Be,le.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,le.width,le.height,le.depth,0,be,Be,le.data);else if(M.isFramebufferTexture){if(_t)if(Ke)t.texStorage2D(i.TEXTURE_2D,Ie,Fe,le.width,le.height);else{let se=le.width,de=le.height;for(let Ne=0;Ne<Ie;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Fe,se,de,0,be,Be,null),se>>=1,de>>=1}}else if(tt.length>0){if(Ke&&_t){let se=O(tt[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Fe,se.width,se.height)}for(let se=0,de=tt.length;se<de;se++)Te=tt[se],Ke?G&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,be,Be,Te):t.texImage2D(i.TEXTURE_2D,se,Fe,be,Be,Te);M.generateMipmaps=!1}else if(Ke){if(_t){let se=O(le);t.texStorage2D(i.TEXTURE_2D,Ie,Fe,se.width,se.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Be,le)}else t.texImage2D(i.TEXTURE_2D,0,Fe,be,Be,le);m(M)&&p($),Se.__version=Q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function pe(T,M,N){if(M.image.length!==6)return;let $=Ye(T,M),ce=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);let Q=n.get(ce);if(ce.version!==Q.__version||$===!0){t.activeTexture(i.TEXTURE0+N);let Se=ot.getPrimaries(ot.workingColorSpace),ne=M.colorSpace===Yi?null:ot.getPrimaries(M.colorSpace),Me=M.colorSpace===Yi||Se===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let qe=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,be=[];for(let de=0;de<6;de++)!qe&&!le?be[de]=x(M.image[de],!0,s.maxCubemapSize):be[de]=le?M.image[de].image:M.image[de],be[de]=W(M,be[de]);let Be=be[0],Fe=r.convert(M.format,M.colorSpace),Te=r.convert(M.type),tt=_(M.internalFormat,Fe,Te,M.colorSpace),Ke=M.isVideoTexture!==!0,_t=Q.__version===void 0||$===!0,G=ce.dataReady,Ie=w(M,Be);Ce(i.TEXTURE_CUBE_MAP,M);let se;if(qe){Ke&&_t&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,tt,Be.width,Be.height);for(let de=0;de<6;de++){se=be[de].mipmaps;for(let Ne=0;Ne<se.length;Ne++){let Le=se[Ne];M.format!==Fn?Fe!==null?Ke?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,0,0,Le.width,Le.height,Fe,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,tt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,0,0,Le.width,Le.height,Fe,Te,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne,tt,Le.width,Le.height,0,Fe,Te,Le.data)}}}else{if(se=M.mipmaps,Ke&&_t){se.length>0&&Ie++;let de=O(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,tt,de.width,de.height)}for(let de=0;de<6;de++)if(le){Ke?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,be[de].width,be[de].height,Fe,Te,be[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,tt,be[de].width,be[de].height,0,Fe,Te,be[de].data);for(let Ne=0;Ne<se.length;Ne++){let nt=se[Ne].image[de].image;Ke?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,0,0,nt.width,nt.height,Fe,Te,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,tt,nt.width,nt.height,0,Fe,Te,nt.data)}}else{Ke?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Fe,Te,be[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,tt,Fe,Te,be[de]);for(let Ne=0;Ne<se.length;Ne++){let Le=se[Ne];Ke?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,0,0,Fe,Te,Le.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ne+1,tt,Fe,Te,Le.image[de])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),Q.__version=ce.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function K(T,M,N,$,ce,Q){let Se=r.convert(N.format,N.colorSpace),ne=r.convert(N.type),Me=_(N.internalFormat,Se,ne,N.colorSpace),qe=n.get(M),le=n.get(N);if(le.__renderTarget=M,!qe.__hasExternalTextures){let be=Math.max(1,M.width>>Q),Be=Math.max(1,M.height>>Q);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,Q,Me,be,Be,M.depth,0,Se,ne,null):t.texImage2D(ce,Q,Me,be,Be,0,Se,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ue(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ce,le.__webglTexture,0,Y(M)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ce,le.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(T,M,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){let $=M.depthTexture,ce=$&&$.isDepthTexture?$.type:null,Q=v(M.stencilBuffer,ce),Se=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=Y(M);ue(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Q,M.width,M.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,T)}else{let $=M.textures;for(let ce=0;ce<$.length;ce++){let Q=$[ce],Se=r.convert(Q.format,Q.colorSpace),ne=r.convert(Q.type),Me=_(Q.internalFormat,Se,ne,Q.colorSpace),qe=Y(M);N&&ue(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,Me,M.width,M.height):ue(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,Me,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Me,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);let ce=$.__webglTexture,Q=Y(M);if(M.depthTexture.format===gr)ue(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(M.depthTexture.format===br)ue(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Pe(T){let M=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let $=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let ce=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",ce)};$.addEventListener("dispose",ce),M.__depthDisposeCallback=ce}M.__boundDepthTexture=$}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ve(M.__webglFramebuffer,T)}else if(N){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),re(M.__webglDepthbuffer[$],T,!1);else{let ce=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),re(M.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ce)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(T,M,N){let $=n.get(T);M!==void 0&&K($.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Pe(T)}function $e(T){let M=T.texture,N=n.get(T),$=n.get(M);T.addEventListener("dispose",A);let ce=T.textures,Q=T.isWebGLCubeRenderTarget===!0,Se=ce.length>1;if(Se||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,o.memory.textures++),Q){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let Me=0;Me<M.mipmaps.length;Me++)N.__webglFramebuffer[ne][Me]=i.createFramebuffer()}else N.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)N.__webglFramebuffer[ne]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ne=0,Me=ce.length;ne<Me;ne++){let qe=n.get(ce[ne]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ue(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<ce.length;ne++){let Me=ce[ne];N.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);let qe=r.convert(Me.format,Me.colorSpace),le=r.convert(Me.type),be=_(Me.internalFormat,qe,le,Me.colorSpace,T.isXRRenderTarget===!0),Be=Y(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,be,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),re(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,M);for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)K(N.__webglFramebuffer[ne][Me],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me);else K(N.__webglFramebuffer[ne],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ne=0,Me=ce.length;ne<Me;ne++){let qe=ce[ne],le=n.get(qe);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),Ce(i.TEXTURE_2D,qe),K(N.__webglFramebuffer,T,qe,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,0),m(qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ne=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,$.__webglTexture),Ce(ne,M),M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)K(N.__webglFramebuffer[Me],T,M,i.COLOR_ATTACHMENT0,ne,Me);else K(N.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,ne,0);m(M)&&p(ne),t.unbindTexture()}T.depthBuffer&&Pe(T)}function he(T){let M=T.textures;for(let N=0,$=M.length;N<$;N++){let ce=M[N];if(m(ce)){let Q=y(T),Se=n.get(ce).__webglTexture;t.bindTexture(Q,Se),p(Q),t.unbindTexture()}}}let _e=[],R=[];function j(T){if(T.samples>0){if(ue(T)===!1){let M=T.textures,N=T.width,$=T.height,ce=i.COLOR_BUFFER_BIT,Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(T),ne=M.length>1;if(ne)for(let Me=0;Me<M.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);let qe=n.get(M[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,ce,i.NEAREST),l===!0&&(_e.length=0,R.length=0,_e.push(i.COLOR_ATTACHMENT0+Me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(_e.push(Q),R.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let Me=0;Me<M.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);let qe=n.get(M[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Y(T){return Math.min(s.maxSamples,T.samples)}function ue(T){let M=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function U(T){let M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function W(T,M){let N=T.colorSpace,$=T.format,ce=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==fn&&N!==Yi&&(ot.getTransfer(N)===vt?($!==Fn||ce!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}function O(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=H,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=te,this.setTextureCube=q,this.rebindTextures=Ae,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=K,this.useMultisampledRTT=ue}function aM(i,e){function t(n,s=Yi){let r,o=ot.getTransfer(s);if(n===Ii)return i.UNSIGNED_BYTE;if(n===uu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===du)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sp)return i.BYTE;if(n===Tp)return i.SHORT;if(n===So)return i.UNSIGNED_SHORT;if(n===hu)return i.INT;if(n===Ts)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===Ap)return i.ALPHA;if(n===Rp)return i.RGB;if(n===Fn)return i.RGBA;if(n===Cp)return i.LUMINANCE;if(n===Pp)return i.LUMINANCE_ALPHA;if(n===gr)return i.DEPTH_COMPONENT;if(n===br)return i.DEPTH_STENCIL;if(n===fu)return i.RED;if(n===pu)return i.RED_INTEGER;if(n===Ip)return i.RG;if(n===mu)return i.RG_INTEGER;if(n===gu)return i.RGBA_INTEGER;if(n===Oa||n===za||n===Ga||n===Va)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kc||n===jc||n===$c||n===Zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jc||n===Qc||n===eh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jc||n===Qc)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===eh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===th||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch||n===hh||n===uh||n===dh||n===fh||n===ph)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===th)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ih)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ch)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ph)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===mh||n===gh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wa)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lp||n===xh||n===yh||n===vh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Uh=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Xe=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},lM={type:"move"},_o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},cM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hM=`
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

}`,Nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new en,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new At({vertexShader:cM,fragmentShader:hM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new F(new at(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kh=class extends Li{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,x=new Nh,m=t.getContextAttributes(),p=null,y=null,_=[],v=[],w=new fe,E=null,A=new kt;A.viewport=new ft;let P=new kt;P.viewport=new ft;let S=[A,P],b=new Uh,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let pe=_[ee];return pe===void 0&&(pe=new _o,_[ee]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ee){let pe=_[ee];return pe===void 0&&(pe=new _o,_[ee]=pe),pe.getGripSpace()},this.getHand=function(ee){let pe=_[ee];return pe===void 0&&(pe=new _o,_[ee]=pe),pe.getHandSpace()};function D(ee){let pe=v.indexOf(ee.inputSource);if(pe===-1)return;let K=_[pe];K!==void 0&&(K.update(ee.inputSource,ee.frame,c||o),K.dispatchEvent({type:ee.type,data:ee.inputSource}))}function B(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",z);for(let ee=0;ee<_.length;ee++){let pe=v[ee];pe!==null&&(v[ee]=null,_[ee].disconnect(pe))}L=null,H=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,y=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",B),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0){let pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Vt(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let pe=null,K=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?br:gr,K=m.stencil?Er:Ts);let ve={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Vt(d.textureWidth,d.textureHeight,{format:Fn,type:Ii,depthTexture:new el(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z(ee){for(let pe=0;pe<ee.removed.length;pe++){let K=ee.removed[pe],re=v.indexOf(K);re>=0&&(v[re]=null,_[re].disconnect(K))}for(let pe=0;pe<ee.added.length;pe++){let K=ee.added[pe],re=v.indexOf(K);if(re===-1){for(let Pe=0;Pe<_.length;Pe++)if(Pe>=v.length){v.push(K),re=Pe;break}else if(v[Pe]===null){v[Pe]=K,re=Pe;break}if(re===-1)break}let ve=_[re];ve&&ve.connect(K)}}let k=new I,te=new I;function q(ee,pe,K){k.setFromMatrixPosition(pe.matrixWorld),te.setFromMatrixPosition(K.matrixWorld);let re=k.distanceTo(te),ve=pe.projectionMatrix.elements,Pe=K.projectionMatrix.elements,Ae=ve[14]/(ve[10]-1),$e=ve[14]/(ve[10]+1),he=(ve[9]+1)/ve[5],_e=(ve[9]-1)/ve[5],R=(ve[8]-1)/ve[0],j=(Pe[8]+1)/Pe[0],Y=Ae*R,ue=Ae*j,U=re/(-R+j),W=U*-R;if(pe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(W),ee.translateZ(U),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ve[10]===-1)ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{let O=Ae+U,T=$e+U,M=Y-W,N=ue+(re-W),$=he*$e/T*O,ce=_e*$e/T*O;ee.projectionMatrix.makePerspective(M,N,$,ce,O,T),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ge(ee,pe){pe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(pe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let pe=ee.near,K=ee.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(K=x.depthFar)),b.near=P.near=A.near=pe,b.far=P.far=A.far=K,(L!==b.near||H!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,H=b.far),A.layers.mask=ee.layers.mask|2,P.layers.mask=ee.layers.mask|4,b.layers.mask=A.layers.mask|P.layers.mask;let re=ee.parent,ve=b.cameras;ge(b,re);for(let Pe=0;Pe<ve.length;Pe++)ge(ve[Pe],re);ve.length===2?q(b,A,P):b.projectionMatrix.copy(A.projectionMatrix),xe(ee,b,re)};function xe(ee,pe,K){K===null?ee.matrix.copy(pe.matrixWorld):(ee.matrix.copy(K.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(pe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(pe.projectionMatrix),ee.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=wr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let ae=null;function Ce(ee,pe){if(u=pe.getViewerPose(c||o),g=pe,u!==null){let K=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let re=!1;K.length!==b.cameras.length&&(b.cameras.length=0,re=!0);for(let Pe=0;Pe<K.length;Pe++){let Ae=K[Pe],$e=null;if(f!==null)$e=f.getViewport(Ae);else{let _e=h.getViewSubImage(d,Ae);$e=_e.viewport,Pe===0&&(e.setRenderTargetTextures(y,_e.colorTexture,d.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(y))}let he=S[Pe];he===void 0&&(he=new kt,he.layers.enable(Pe),he.viewport=new ft,S[Pe]=he),he.matrix.fromArray(Ae.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Ae.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set($e.x,$e.y,$e.width,$e.height),Pe===0&&(b.matrix.copy(he.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),re===!0&&b.cameras.push(he)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")){let Pe=h.getDepthInformation(K[0]);Pe&&Pe.isValid&&Pe.texture&&x.init(e,Pe,s.renderState)}}for(let K=0;K<_.length;K++){let re=v[K],ve=_[K];re!==null&&ve!==void 0&&ve.update(re,pe,c||o)}ae&&ae(ee,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}let Ye=new Fp;Ye.setAnimationLoop(Ce),this.setAnimationLoop=function(ee){ae=ee},this.dispose=function(){}}},_s=new Ln,uM=new Ze;function dM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Hp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),_=y.envMap,v=y.envMapRotation;_&&(m.envMap.value=_,_s.copy(v),_s.x*=-1,_s.y*=-1,_s.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),m.envMapRotation.value.setFromMatrix4(uM.makeRotationFromEuler(_s)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=s[y.id];v===void 0&&(g(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",m));let w=_.program;n.updateUBOMapping(y,w);let E=e.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function u(y){let _=h();y.__bindingPointIndex=_;let v=i.createBuffer(),w=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],v=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,A=v.length;E<A;E++){let P=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,b=P.length;S<b;S++){let L=P[S];if(f(L,E,S,w)===!0){let H=L.__offset,D=Array.isArray(L.value)?L.value:[L.value],B=0;for(let z=0;z<D.length;z++){let k=D[z],te=x(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,H+B,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,B),B+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,v,w){let E=y.value,A=_+"_"+v;if(w[A]===void 0)return typeof E=="number"||typeof E=="boolean"?w[A]=E:w[A]=E.clone(),!0;{let P=w[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return w[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(y){let _=y.uniforms,v=0,w=16;for(let A=0,P=_.length;A<P;A++){let S=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,L=S.length;b<L;b++){let H=S[b],D=Array.isArray(H.value)?H.value:[H.value];for(let B=0,z=D.length;B<z;B++){let k=D[B],te=x(k),q=v%w,ge=q%te.boundary,xe=q+ge;v+=ge,xe!==0&&w-xe<te.storage&&(v+=w-xe),H.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=te.storage}}}let E=v%w;return E>0&&(v+=w-E),y.__size=v,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ro=class{constructor(e={}){let{canvas:t=yg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ht,this.toneMapping=ji,this.toneMappingExposure=1;let v=this,w=!1,E=0,A=0,P=null,S=-1,b=null,L=new ft,H=new ft,D=null,B=new Re(0),z=0,k=t.width,te=t.height,q=1,ge=null,xe=null,ae=new ft(0,0,k,te),Ce=new ft(0,0,k,te),Ye=!1,ee=new Ao,pe=!1,K=!1,re=new Ze,ve=new Ze,Pe=new I,Ae=new ft,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function _e(){return P===null?q:1}let R=n;function j(C,V){return t.getContext(C,V)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${iu}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Le,!1),R===null){let V="webgl2";if(R=j(V,C),R===null)throw j(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Y,ue,U,W,O,T,M,N,$,ce,Q,Se,ne,Me,qe,le,be,Be,Fe,Te,tt,Ke,_t,G;function Ie(){Y=new Cv(R),Y.init(),Ke=new aM(R,Y),ue=new bv(R,Y,e,Ke),U=new sM(R,Y),ue.reverseDepthBuffer&&d&&U.buffers.depth.setReversed(!0),W=new Lv(R),O=new X_,T=new oM(R,Y,U,O,ue,Ke,W),M=new Tv(v),N=new Rv(v),$=new Fg(R),_t=new Mv(R,$),ce=new Pv(R,$,W,_t),Q=new Uv(R,ce,$,W),Fe=new Dv(R,ue,T),le=new Sv(O),Se=new W_(v,M,N,Y,ue,_t,le),ne=new dM(v,O),Me=new Y_,qe=new Q_(Y),Be=new _v(v,M,N,U,Q,f,l),be=new nM(v,Q,ue),G=new fM(R,W,ue,U),Te=new Ev(R,Y,W),tt=new Iv(R,Y,W),W.programs=Se.programs,v.capabilities=ue,v.extensions=Y,v.properties=O,v.renderLists=Me,v.shadowMap=be,v.state=U,v.info=W}Ie();let se=new kh(v,R);this.xr=se,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let C=Y.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Y.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(k,te,!1))},this.getSize=function(C){return C.set(k,te)},this.setSize=function(C,V,Z=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,te=V,t.width=Math.floor(C*q),t.height=Math.floor(V*q),Z===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(k*q,te*q).floor()},this.setDrawingBufferSize=function(C,V,Z){k=C,te=V,q=Z,t.width=Math.floor(C*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(ae)},this.setViewport=function(C,V,Z,J){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,V,Z,J),U.viewport(L.copy(ae).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(Ce)},this.setScissor=function(C,V,Z,J){C.isVector4?Ce.set(C.x,C.y,C.z,C.w):Ce.set(C,V,Z,J),U.scissor(H.copy(Ce).multiplyScalar(q).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(C){U.setScissorTest(Ye=C)},this.setOpaqueSort=function(C){ge=C},this.setTransparentSort=function(C){xe=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(C=!0,V=!0,Z=!0){let J=0;if(C){let X=!1;if(P!==null){let Ee=P.texture.format;X=Ee===gu||Ee===mu||Ee===pu}if(X){let Ee=P.texture.type,De=Ee===Ii||Ee===Ts||Ee===So||Ee===Er||Ee===uu||Ee===du,ze=Be.getClearColor(),Ge=Be.getClearAlpha(),Je=ze.r,it=ze.g,Ve=ze.b;De?(g[0]=Je,g[1]=it,g[2]=Ve,g[3]=Ge,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Je,x[1]=it,x[2]=Ve,x[3]=Ge,R.clearBufferiv(R.COLOR,0,x))}else J|=R.COLOR_BUFFER_BIT}V&&(J|=R.DEPTH_BUFFER_BIT),Z&&(J|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Me.dispose(),qe.dispose(),O.dispose(),M.dispose(),N.dispose(),Q.dispose(),_t.dispose(),G.dispose(),Se.dispose(),se.dispose(),se.removeEventListener("sessionstart",Wd),se.removeEventListener("sessionend",Xd),ps.stop()};function de(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let C=W.autoReset,V=be.enabled,Z=be.autoUpdate,J=be.needsUpdate,X=be.type;Ie(),W.autoReset=C,be.enabled=V,be.autoUpdate=Z,be.needsUpdate=J,be.type=X}function Le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function nt(C){let V=C.target;V.removeEventListener("dispose",nt),Nt(V)}function Nt(C){ln(C),O.remove(C)}function ln(C){let V=O.get(C).programs;V!==void 0&&(V.forEach(function(Z){Se.releaseProgram(Z)}),C.isShaderMaterial&&Se.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,Z,J,X,Ee){V===null&&(V=$e);let De=X.isMesh&&X.matrixWorld.determinant()<0,ze=m0(C,V,Z,J,X);U.setMaterial(J,De);let Ge=Z.index,Je=1;if(J.wireframe===!0){if(Ge=ce.getWireframeAttribute(Z),Ge===void 0)return;Je=2}let it=Z.drawRange,Ve=Z.attributes.position,gt=it.start*Je,wt=(it.start+it.count)*Je;Ee!==null&&(gt=Math.max(gt,Ee.start*Je),wt=Math.min(wt,(Ee.start+Ee.count)*Je)),Ge!==null?(gt=Math.max(gt,0),wt=Math.min(wt,Ge.count)):Ve!=null&&(gt=Math.max(gt,0),wt=Math.min(wt,Ve.count));let Rt=wt-gt;if(Rt<0||Rt===1/0)return;_t.setup(X,J,ze,Z,Ge);let Sn,xt=Te;if(Ge!==null&&(Sn=$.get(Ge),xt=tt,xt.setIndex(Sn)),X.isMesh)J.wireframe===!0?(U.setLineWidth(J.wireframeLinewidth*_e()),xt.setMode(R.LINES)):xt.setMode(R.TRIANGLES);else if(X.isLine){let We=J.linewidth;We===void 0&&(We=1),U.setLineWidth(We*_e()),X.isLineSegments?xt.setMode(R.LINES):X.isLineLoop?xt.setMode(R.LINE_LOOP):xt.setMode(R.LINE_STRIP)}else X.isPoints?xt.setMode(R.POINTS):X.isSprite&&xt.setMode(R.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)xt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))xt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let We=X._multiDrawStarts,_i=X._multiDrawCounts,yt=X._multiDrawCount,jn=Ge?$.get(Ge).bytesPerElement:1,Ks=O.get(J).currentProgram.getUniforms();for(let Rn=0;Rn<yt;Rn++)Ks.setValue(R,"_gl_DrawID",Rn),xt.render(We[Rn]/jn,_i[Rn])}else if(X.isInstancedMesh)xt.renderInstances(gt,Rt,X.count);else if(Z.isInstancedBufferGeometry){let We=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,_i=Math.min(Z.instanceCount,We);xt.renderInstances(gt,Rt,_i)}else xt.render(gt,Rt)};function Mt(C,V,Z){C.transparent===!0&&C.side===Pt&&C.forceSinglePass===!1?(C.side=Gt,C.needsUpdate=!0,ca(C,V,Z),C.side=Tn,C.needsUpdate=!0,ca(C,V,Z),C.side=Pt):ca(C,V,Z)}this.compile=function(C,V,Z=null){Z===null&&(Z=C),p=qe.get(Z),p.init(V),_.push(p),Z.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),C!==Z&&C.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let J=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let De=0;De<Ee.length;De++){let ze=Ee[De];Mt(ze,Z,X),J.add(ze)}else Mt(Ee,Z,X),J.add(Ee)}),_.pop(),p=null,J},this.compileAsync=function(C,V,Z=null){let J=this.compile(C,V,Z);return new Promise(X=>{function Ee(){if(J.forEach(function(De){O.get(De).currentProgram.isReady()&&J.delete(De)}),J.size===0){X(C);return}setTimeout(Ee,10)}Y.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Kn=null;function vi(C){Kn&&Kn(C)}function Wd(){ps.stop()}function Xd(){ps.start()}let ps=new Fp;ps.setAnimationLoop(vi),typeof self<"u"&&ps.setContext(self),this.setAnimationLoop=function(C){Kn=C,se.setAnimationLoop(C),C===null?ps.stop():ps.start()},se.addEventListener("sessionstart",Wd),se.addEventListener("sessionend",Xd),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(V),V=se.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,V,P),p=qe.get(C,_.length),p.init(V),_.push(p),ve.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ee.setFromProjectionMatrix(ve),K=this.localClippingEnabled,pe=le.init(this.clippingPlanes,K),m=Me.get(C,y.length),m.init(),y.push(m),se.enabled===!0&&se.isPresenting===!0){let Ee=v.xr.getDepthSensingMesh();Ee!==null&&tc(Ee,V,-1/0,v.sortObjects)}tc(C,V,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ge,xe),he=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,he&&Be.addToRenderList(m,C),this.info.render.frame++,pe===!0&&le.beginShadows();let Z=p.state.shadowsArray;be.render(Z,C,V),pe===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,X=m.transmissive;if(p.setupLights(),V.isArrayCamera){let Ee=V.cameras;if(X.length>0)for(let De=0,ze=Ee.length;De<ze;De++){let Ge=Ee[De];Yd(J,X,C,Ge)}he&&Be.render(C);for(let De=0,ze=Ee.length;De<ze;De++){let Ge=Ee[De];qd(m,C,Ge,Ge.viewport)}}else X.length>0&&Yd(J,X,C,V),he&&Be.render(C),qd(m,C,V);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(v,C,V),_t.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],pe===!0&&le.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function tc(C,V,Z,J){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ee.intersectsSprite(C)){J&&Ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);let De=Q.update(C),ze=C.material;ze.visible&&m.push(C,De,ze,Z,Ae.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ee.intersectsObject(C))){let De=Q.update(C),ze=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ae.copy(C.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Ae.copy(De.boundingSphere.center)),Ae.applyMatrix4(C.matrixWorld).applyMatrix4(ve)),Array.isArray(ze)){let Ge=De.groups;for(let Je=0,it=Ge.length;Je<it;Je++){let Ve=Ge[Je],gt=ze[Ve.materialIndex];gt&&gt.visible&&m.push(C,De,gt,Z,Ae.z,Ve)}}else ze.visible&&m.push(C,De,ze,Z,Ae.z,null)}}let Ee=C.children;for(let De=0,ze=Ee.length;De<ze;De++)tc(Ee[De],V,Z,J)}function qd(C,V,Z,J){let X=C.opaque,Ee=C.transmissive,De=C.transparent;p.setupLightsView(Z),pe===!0&&le.setGlobalState(v.clippingPlanes,Z),J&&U.viewport(L.copy(J)),X.length>0&&la(X,V,Z),Ee.length>0&&la(Ee,V,Z),De.length>0&&la(De,V,Z),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function Yd(C,V,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Vt(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?vn:Ii,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let Ee=p.state.transmissionRenderTarget[J.id],De=J.viewport||L;Ee.setSize(De.z,De.w);let ze=v.getRenderTarget();v.setRenderTarget(Ee),v.getClearColor(B),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),he&&Be.render(Z);let Ge=v.toneMapping;v.toneMapping=ji;let Je=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),pe===!0&&le.setGlobalState(v.clippingPlanes,J),la(C,Z,J),T.updateMultisampleRenderTarget(Ee),T.updateRenderTargetMipmap(Ee),Y.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ve=0,gt=V.length;Ve<gt;Ve++){let wt=V[Ve],Rt=wt.object,Sn=wt.geometry,xt=wt.material,We=wt.group;if(xt.side===Pt&&Rt.layers.test(J.layers)){let _i=xt.side;xt.side=Gt,xt.needsUpdate=!0,Kd(Rt,Z,J,Sn,xt,We),xt.side=_i,xt.needsUpdate=!0,it=!0}}it===!0&&(T.updateMultisampleRenderTarget(Ee),T.updateRenderTargetMipmap(Ee))}v.setRenderTarget(ze),v.setClearColor(B,z),Je!==void 0&&(J.viewport=Je),v.toneMapping=Ge}function la(C,V,Z){let J=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Ee=C.length;X<Ee;X++){let De=C[X],ze=De.object,Ge=De.geometry,Je=J===null?De.material:J,it=De.group;ze.layers.test(Z.layers)&&Kd(ze,V,Z,Ge,Je,it)}}function Kd(C,V,Z,J,X,Ee){C.onBeforeRender(v,V,Z,J,X,Ee),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(v,V,Z,J,C,Ee),X.transparent===!0&&X.side===Pt&&X.forceSinglePass===!1?(X.side=Gt,X.needsUpdate=!0,v.renderBufferDirect(Z,V,J,X,C,Ee),X.side=Tn,X.needsUpdate=!0,v.renderBufferDirect(Z,V,J,X,C,Ee),X.side=Pt):v.renderBufferDirect(Z,V,J,X,C,Ee),C.onAfterRender(v,V,Z,J,X,Ee)}function ca(C,V,Z){V.isScene!==!0&&(V=$e);let J=O.get(C),X=p.state.lights,Ee=p.state.shadowsArray,De=X.state.version,ze=Se.getParameters(C,X.state,Ee,V,Z),Ge=Se.getProgramCacheKey(ze),Je=J.programs;J.environment=C.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(C.isMeshStandardMaterial?N:M).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Je===void 0&&(C.addEventListener("dispose",nt),Je=new Map,J.programs=Je);let it=Je.get(Ge);if(it!==void 0){if(J.currentProgram===it&&J.lightsStateVersion===De)return $d(C,ze),it}else ze.uniforms=Se.getUniforms(C),C.onBeforeCompile(ze,v),it=Se.acquireProgram(ze,Ge),Je.set(Ge,it),J.uniforms=ze.uniforms;let Ve=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=le.uniform),$d(C,ze),J.needsLights=x0(C),J.lightsStateVersion=De,J.needsLights&&(Ve.ambientLightColor.value=X.state.ambient,Ve.lightProbe.value=X.state.probe,Ve.directionalLights.value=X.state.directional,Ve.directionalLightShadows.value=X.state.directionalShadow,Ve.spotLights.value=X.state.spot,Ve.spotLightShadows.value=X.state.spotShadow,Ve.rectAreaLights.value=X.state.rectArea,Ve.ltc_1.value=X.state.rectAreaLTC1,Ve.ltc_2.value=X.state.rectAreaLTC2,Ve.pointLights.value=X.state.point,Ve.pointLightShadows.value=X.state.pointShadow,Ve.hemisphereLights.value=X.state.hemi,Ve.directionalShadowMap.value=X.state.directionalShadowMap,Ve.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ve.spotShadowMap.value=X.state.spotShadowMap,Ve.spotLightMatrix.value=X.state.spotLightMatrix,Ve.spotLightMap.value=X.state.spotLightMap,Ve.pointShadowMap.value=X.state.pointShadowMap,Ve.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=it,J.uniformsList=null,it}function jd(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=yr.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function $d(C,V){let Z=O.get(C);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function m0(C,V,Z,J,X){V.isScene!==!0&&(V=$e),T.resetTextureUnits();let Ee=V.fog,De=J.isMeshStandardMaterial?V.environment:null,ze=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:fn,Ge=(J.isMeshStandardMaterial?N:M).get(J.envMap||De),Je=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,it=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ve=!!Z.morphAttributes.position,gt=!!Z.morphAttributes.normal,wt=!!Z.morphAttributes.color,Rt=ji;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Rt=v.toneMapping);let Sn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xt=Sn!==void 0?Sn.length:0,We=O.get(J),_i=p.state.lights;if(pe===!0&&(K===!0||C!==b)){let Bn=C===b&&J.id===S;le.setState(J,C,Bn)}let yt=!1;J.version===We.__version?(We.needsLights&&We.lightsStateVersion!==_i.state.version||We.outputColorSpace!==ze||X.isBatchedMesh&&We.batching===!1||!X.isBatchedMesh&&We.batching===!0||X.isBatchedMesh&&We.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&We.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&We.instancing===!1||!X.isInstancedMesh&&We.instancing===!0||X.isSkinnedMesh&&We.skinning===!1||!X.isSkinnedMesh&&We.skinning===!0||X.isInstancedMesh&&We.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&We.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&We.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&We.instancingMorph===!1&&X.morphTexture!==null||We.envMap!==Ge||J.fog===!0&&We.fog!==Ee||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==le.numPlanes||We.numIntersection!==le.numIntersection)||We.vertexAlphas!==Je||We.vertexTangents!==it||We.morphTargets!==Ve||We.morphNormals!==gt||We.morphColors!==wt||We.toneMapping!==Rt||We.morphTargetsCount!==xt)&&(yt=!0):(yt=!0,We.__version=J.version);let jn=We.currentProgram;yt===!0&&(jn=ca(J,V,X));let Ks=!1,Rn=!1,so=!1,Ct=jn.getUniforms(),ci=We.uniforms;if(U.useProgram(jn.program)&&(Ks=!0,Rn=!0,so=!0),J.id!==S&&(S=J.id,Rn=!0),Ks||b!==C){U.buffers.depth.getReversed()?(re.copy(C.projectionMatrix),_g(re),Mg(re),Ct.setValue(R,"projectionMatrix",re)):Ct.setValue(R,"projectionMatrix",C.projectionMatrix),Ct.setValue(R,"viewMatrix",C.matrixWorldInverse);let Fi=Ct.map.cameraPosition;Fi!==void 0&&Fi.setValue(R,Pe.setFromMatrixPosition(C.matrixWorld)),ue.logarithmicDepthBuffer&&Ct.setValue(R,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ct.setValue(R,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Rn=!0,so=!0)}if(X.isSkinnedMesh){Ct.setOptional(R,X,"bindMatrix"),Ct.setOptional(R,X,"bindMatrixInverse");let Bn=X.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Ct.setValue(R,"boneTexture",Bn.boneTexture,T))}X.isBatchedMesh&&(Ct.setOptional(R,X,"batchingTexture"),Ct.setValue(R,"batchingTexture",X._matricesTexture,T),Ct.setOptional(R,X,"batchingIdTexture"),Ct.setValue(R,"batchingIdTexture",X._indirectTexture,T),Ct.setOptional(R,X,"batchingColorTexture"),X._colorsTexture!==null&&Ct.setValue(R,"batchingColorTexture",X._colorsTexture,T));let ro=Z.morphAttributes;if((ro.position!==void 0||ro.normal!==void 0||ro.color!==void 0)&&Fe.update(X,Z,jn),(Rn||We.receiveShadow!==X.receiveShadow)&&(We.receiveShadow=X.receiveShadow,Ct.setValue(R,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ci.envMap.value=Ge,ci.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(ci.envMapIntensity.value=V.environmentIntensity),Rn&&(Ct.setValue(R,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&g0(ci,so),Ee&&J.fog===!0&&ne.refreshFogUniforms(ci,Ee),ne.refreshMaterialUniforms(ci,J,q,te,p.state.transmissionRenderTarget[C.id]),yr.upload(R,jd(We),ci,T)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(yr.upload(R,jd(We),ci,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ct.setValue(R,"center",X.center),Ct.setValue(R,"modelViewMatrix",X.modelViewMatrix),Ct.setValue(R,"normalMatrix",X.normalMatrix),Ct.setValue(R,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Bn=J.uniformsGroups;for(let Fi=0,Oi=Bn.length;Fi<Oi;Fi++){let Zd=Bn[Fi];G.update(Zd,jn),G.bind(Zd,jn)}}return jn}function g0(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function x0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,V,Z){O.get(C.texture).__webglTexture=V,O.get(C.depthTexture).__webglTexture=Z;let J=O.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){let Z=O.get(C);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,Z=0){P=C,E=V,A=Z;let J=!0,X=null,Ee=!1,De=!1;if(C){let Ge=O.get(C);if(Ge.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(R.FRAMEBUFFER,null),J=!1;else if(Ge.__webglFramebuffer===void 0)T.setupRenderTarget(C);else if(Ge.__hasExternalTextures)T.rebindTextures(C,O.get(C.texture).__webglTexture,O.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ve=C.depthTexture;if(Ge.__boundDepthTexture!==Ve){if(Ve!==null&&O.has(Ve)&&(C.width!==Ve.image.width||C.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(C)}}let Je=C.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(De=!0);let it=O.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[V])?X=it[V][Z]:X=it[V],Ee=!0):C.samples>0&&T.useMultisampledRTT(C)===!1?X=O.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?X=it[Z]:X=it,L.copy(C.viewport),H.copy(C.scissor),D=C.scissorTest}else L.copy(ae).multiplyScalar(q).floor(),H.copy(Ce).multiplyScalar(q).floor(),D=Ye;if(U.bindFramebuffer(R.FRAMEBUFFER,X)&&J&&U.drawBuffers(C,X),U.viewport(L),U.scissor(H),U.setScissorTest(D),Ee){let Ge=O.get(C.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ge.__webglTexture,Z)}else if(De){let Ge=O.get(C.texture),Je=V||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ge.__webglTexture,Z||0,Je)}S=-1},this.readRenderTargetPixels=function(C,V,Z,J,X,Ee,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=O.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){U.bindFramebuffer(R.FRAMEBUFFER,ze);try{let Ge=C.texture,Je=Ge.format,it=Ge.type;if(!ue.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-J&&Z>=0&&Z<=C.height-X&&R.readPixels(V,Z,J,X,Ke.convert(Je),Ke.convert(it),Ee)}finally{let Ge=P!==null?O.get(P).__webglFramebuffer:null;U.bindFramebuffer(R.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,V,Z,J,X,Ee,De){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=O.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(ze=ze[De]),ze){let Ge=C.texture,Je=Ge.format,it=Ge.type;if(!ue.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=C.width-J&&Z>=0&&Z<=C.height-X){U.bindFramebuffer(R.FRAMEBUFFER,ze);let Ve=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ve),R.bufferData(R.PIXEL_PACK_BUFFER,Ee.byteLength,R.STREAM_READ),R.readPixels(V,Z,J,X,Ke.convert(Je),Ke.convert(it),0);let gt=P!==null?O.get(P).__webglFramebuffer:null;U.bindFramebuffer(R.FRAMEBUFFER,gt);let wt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await vg(R,wt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ve),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Ee),R.deleteBuffer(Ve),R.deleteSync(wt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,V=null,Z=0){C.isTexture!==!0&&(mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,C=arguments[1]);let J=Math.pow(2,-Z),X=Math.floor(C.image.width*J),Ee=Math.floor(C.image.height*J),De=V!==null?V.x:0,ze=V!==null?V.y:0;T.setTexture2D(C,0),R.copyTexSubImage2D(R.TEXTURE_2D,Z,0,0,De,ze,X,Ee),U.unbindTexture()},this.copyTextureToTexture=function(C,V,Z=null,J=null,X=0){C.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],V=arguments[2],X=arguments[3]||0,Z=null);let Ee,De,ze,Ge,Je,it,Ve,gt,wt,Rt=C.isCompressedTexture?C.mipmaps[X]:C.image;Z!==null?(Ee=Z.max.x-Z.min.x,De=Z.max.y-Z.min.y,ze=Z.isBox3?Z.max.z-Z.min.z:1,Ge=Z.min.x,Je=Z.min.y,it=Z.isBox3?Z.min.z:0):(Ee=Rt.width,De=Rt.height,ze=Rt.depth||1,Ge=0,Je=0,it=0),J!==null?(Ve=J.x,gt=J.y,wt=J.z):(Ve=0,gt=0,wt=0);let Sn=Ke.convert(V.format),xt=Ke.convert(V.type),We;V.isData3DTexture?(T.setTexture3D(V,0),We=R.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(T.setTexture2DArray(V,0),We=R.TEXTURE_2D_ARRAY):(T.setTexture2D(V,0),We=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,V.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,V.unpackAlignment);let _i=R.getParameter(R.UNPACK_ROW_LENGTH),yt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),jn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ks=R.getParameter(R.UNPACK_SKIP_ROWS),Rn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Rt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Rt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ge),R.pixelStorei(R.UNPACK_SKIP_ROWS,Je),R.pixelStorei(R.UNPACK_SKIP_IMAGES,it);let so=C.isDataArrayTexture||C.isData3DTexture,Ct=V.isDataArrayTexture||V.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let ci=O.get(C),ro=O.get(V),Bn=O.get(ci.__renderTarget),Fi=O.get(ro.__renderTarget);U.bindFramebuffer(R.READ_FRAMEBUFFER,Bn.__webglFramebuffer),U.bindFramebuffer(R.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Oi=0;Oi<ze;Oi++)so&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,O.get(C).__webglTexture,X,it+Oi),C.isDepthTexture?(Ct&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,O.get(V).__webglTexture,X,wt+Oi),R.blitFramebuffer(Ge,Je,Ee,De,Ve,gt,Ee,De,R.DEPTH_BUFFER_BIT,R.NEAREST)):Ct?R.copyTexSubImage3D(We,X,Ve,gt,wt+Oi,Ge,Je,Ee,De):R.copyTexSubImage2D(We,X,Ve,gt,wt+Oi,Ge,Je,Ee,De);U.bindFramebuffer(R.READ_FRAMEBUFFER,null),U.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ct?C.isDataTexture||C.isData3DTexture?R.texSubImage3D(We,X,Ve,gt,wt,Ee,De,ze,Sn,xt,Rt.data):V.isCompressedArrayTexture?R.compressedTexSubImage3D(We,X,Ve,gt,wt,Ee,De,ze,Sn,Rt.data):R.texSubImage3D(We,X,Ve,gt,wt,Ee,De,ze,Sn,xt,Rt):C.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,X,Ve,gt,Ee,De,Sn,xt,Rt.data):C.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,X,Ve,gt,Rt.width,Rt.height,Sn,Rt.data):R.texSubImage2D(R.TEXTURE_2D,X,Ve,gt,Ee,De,Sn,xt,Rt);R.pixelStorei(R.UNPACK_ROW_LENGTH,_i),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,yt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,jn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ks),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Rn),X===0&&V.generateMipmaps&&R.generateMipmap(We),U.unbindTexture()},this.copyTextureToTexture3D=function(C,V,Z=null,J=null,X=0){return C.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,C=arguments[2],V=arguments[3],X=arguments[4]||0),mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,V,Z,J,X)},this.initRenderTarget=function(C){O.get(C).__webglFramebuffer===void 0&&T.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),U.unbindTexture()},this.resetState=function(){E=0,A=0,P=null,U.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}},tl=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Co=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Po=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new I,Io=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var $f=new I,Zf=new ft,Jf=new ft,pM=new I,Qf=new Ze,Pa=new I,Cc=new In,ep=new Ze,Pc=new ws,Rr=class extends F{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tf,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingBox.expandByPoint(Pa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Pa),this.boundingSphere.expandByPoint(Pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cc.copy(this.boundingSphere),Cc.applyMatrix4(s),e.ray.intersectsSphere(Cc)!==!1&&(ep.copy(s).invert(),Pc.copy(e.ray).applyMatrix4(ep),!(this.boundingBox!==null&&Pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===G0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Zf.fromBufferAttribute(s.attributes.skinIndex,e),Jf.fromBufferAttribute(s.attributes.skinWeight,e),$f.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Jf.getComponent(r);if(o!==0){let a=Zf.getComponent(r);Qf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(pM.copy($f).applyMatrix4(Qf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Lo=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},nl=class extends en{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Qt,u=Qt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tp=new Ze,mM=new Ze,Cr=class i{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:mM;tp.multiplyMatrices(a,t[r]),tp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new nl(t,e,e,Fn,ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Lo),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},As=class extends Ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cr=new Ze,np=new Ze,Ia=[],ip=new dn,gM=new Ze,ho=new F,uo=new In,il=class extends F{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),ip.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(ip)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),uo.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),e.ray.intersectsSphere(uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cr),np.multiplyMatrices(n,cr),ho.matrixWorld=np,ho.raycast(e,Ia);for(let o=0,a=Ia.length;o<a;o++){let l=Ia[o];l.instanceId=r,l.object=this,t.push(l)}Ia.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new nl(new Float32Array(s*this.count),s,this.count,fu,ti));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Do=class extends Dn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sl=new I,rl=new I,sp=new Ze,fo=new ws,La=new In,Ic=new I,rp=new I,Pr=class extends Lt{constructor(e=new Tt,t=new Do){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)sl.fromBufferAttribute(t,s-1),rl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=sl.distanceTo(rl);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;sp.copy(s).invert(),fo.copy(e.ray).applyMatrix4(sp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=u.getX(x),y=u.getX(x+1),_=Da(this,e,fo,l,p,y);_&&t.push(_)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=Da(this,e,fo,l,x,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=Da(this,e,fo,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=Da(this,e,fo,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Da(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(sl.fromBufferAttribute(o,s),rl.fromBufferAttribute(o,r),t.distanceSqToSegment(sl,rl,Ic,rp)>n)return;Ic.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ic);if(!(l<e.near||l>e.far))return{distance:l,point:rp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var op=new I,ap=new I,ol=class extends Pr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)op.fromBufferAttribute(t,s),ap.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+op.distanceTo(ap);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},al=class extends Pr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Rs=class extends Dn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lp=new Ze,Bh=new ws,Ua=new In,Na=new I,Ir=class extends Lt{constructor(e=new Tt,t=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,e.ray.intersectsSphere(Ua)===!1)return;lp.copy(s).invert(),Bh.copy(e.ray).applyMatrix4(lp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Na.fromBufferAttribute(h,m),cp(Na,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Na.fromBufferAttribute(h,g),cp(Na,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cp(i,e,t,n,s,r,o){let a=Bh.distanceSqToPoint(i);if(a<t){let l=new I;Bh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var tn=class extends en{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new fe:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,s=[],r=[],o=[],a=new I,l=new Ze;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(qt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Uo=class extends zn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new fe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hh=class extends Uo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Mu(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ka=new I,Lc=new Mu,Dc=new Mu,Uc=new Mu,No=class extends zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ka.subVectors(s[0],s[1]).add(s[0]),c=ka);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ka.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ka),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Lc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,m),Dc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,m),Uc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Lc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Dc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Uc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Lc.calc(l),Dc.calc(l),Uc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function xM(i,e){let t=1-i;return t*t*e}function yM(i,e){return 2*(1-i)*i*e}function vM(i,e){return i*i*e}function Mo(i,e,t,n){return xM(i,e)+yM(i,t)+vM(i,n)}function _M(i,e){let t=1-i;return t*t*t*e}function MM(i,e){let t=1-i;return 3*t*t*i*e}function EM(i,e){return 3*(1-i)*i*i*e}function bM(i,e){return i*i*i*e}function Eo(i,e,t,n,s){return _M(i,e)+MM(i,t)+EM(i,n)+bM(i,s)}var ll=class extends zn{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Eo(e,s.x,r.x,o.x,a.x),Eo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fh=class extends zn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Eo(e,s.x,r.x,o.x,a.x),Eo(e,s.y,r.y,o.y,a.y),Eo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},cl=class extends zn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oh=class extends zn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends zn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Mo(e,s.x,r.x,o.x),Mo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ul=class extends zn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Mo(e,s.x,r.x,o.x),Mo(e,s.y,r.y,o.y),Mo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dl=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(hp(a,l.x,c.x,u.x,h.x),hp(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},fl=Object.freeze({__proto__:null,ArcCurve:Hh,CatmullRomCurve3:No,CubicBezierCurve:ll,CubicBezierCurve3:Fh,EllipseCurve:Uo,LineCurve:cl,LineCurve3:Oh,QuadraticBezierCurve:hl,QuadraticBezierCurve3:ul,SplineCurve:dl}),zh=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new fl[s.type]().fromJSON(s))}return this}},Cs=class extends zh{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new cl(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new hl(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ll(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new dl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Uo(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ps=class i extends Tt{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=qt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new I,d=new fe,f=new I,g=new I,x=new I,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=t;y++){let _=n+y*u*s,v=Math.sin(_),w=Math.cos(_);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*v,h.y=e[E].y,h.z=e[E].x*w,o.push(h.x,h.y,h.z),d.x=y/t,d.y=E/(e.length-1),a.push(d.x,d.y);let A=l[3*E+0]*v,P=l[3*E+1],S=l[3*E+0]*w;c.push(A,P,S)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){let v=_+y*e.length,w=v,E=v+e.length,A=v+e.length+1,P=v+1;r.push(w,E,P),r.push(A,P,E)}this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(a,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},pl=class i extends Ps{constructor(e=1,t=1,n=4,s=8){let r=new Cs;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},ii=class i extends Tt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,u=new fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},je=class i extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function y(){let v=new I,w=new I,E=0,A=(t-e)/n;for(let P=0;P<=r;P++){let S=[],b=P/r,L=b*(t-e)+e;for(let H=0;H<=s;H++){let D=H/s,B=D*l+a,z=Math.sin(B),k=Math.cos(B);w.x=L*z,w.y=-b*n+m,w.z=L*k,h.push(w.x,w.y,w.z),v.set(z,A,k).normalize(),d.push(v.x,v.y,v.z),f.push(D,1-b),S.push(g++)}x.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){let b=x[S][P],L=x[S+1][P],H=x[S+1][P+1],D=x[S][P+1];(e>0||S!==0)&&(u.push(b,L,D),E+=3),(t>0||S!==r-1)&&(u.push(L,H,D),E+=3)}c.addGroup(p,E,0),p+=E}function _(v){let w=g,E=new fe,A=new I,P=0,S=v===!0?e:t,b=v===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;let L=g;for(let H=0;H<=s;H++){let B=H/s*l+a,z=Math.cos(B),k=Math.sin(B);A.x=S*k,A.y=m*b,A.z=S*z,h.push(A.x,A.y,A.z),d.push(0,b,0),E.x=z*.5+.5,E.y=k*.5*b+.5,f.push(E.x,E.y),g++}for(let H=0;H<s;H++){let D=w+H,B=L+H;v===!0?u.push(B,B+1,D):u.push(B+1,B,D),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Is=class i extends je{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Di=class extends Cs{constructor(e){super(e),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Cs().fromJSON(s))}return this}},SM={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Wp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=CM(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return ko(r,o,t,a,l,f,0),o}};function Wp(i,e,t,n,s){let r,o;if(s===OM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=up(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=up(r,i[r],i[r+1],o);return o&&Al(o,o.next)&&(Ho(o),o=o.next),o}function Ls(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Al(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Ho(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ko(i,e,t,n,s,r,o){if(!i)return;!o&&r&&UM(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?wM(i,n,s,r):TM(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ho(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=AM(Ls(i),e,t),ko(i,e,t,n,s,r,2)):o===2&&RM(i,e,t,n,s,r):ko(Ls(i),e,t,n,s,r,1);break}}}function TM(i){let e=i.prev,t=i,n=i.next;if(Ut(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&pr(s,a,r,l,o,c,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function wM(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ut(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=Gh(f,g,e,t,n),y=Gh(x,m,e,t,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&pr(a,u,l,h,c,d,_.x,_.y)&&Ut(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&pr(a,u,l,h,c,d,v.x,v.y)&&Ut(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&pr(a,u,l,h,c,d,_.x,_.y)&&Ut(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&pr(a,u,l,h,c,d,v.x,v.y)&&Ut(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function AM(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Al(s,r)&&Xp(s,n,n.next,r)&&Bo(s,r)&&Bo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ho(n),Ho(n.next),n=i=r),n=n.next}while(n!==i);return Ls(n)}function RM(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&BM(o,a)){let l=qp(o,a);o=Ls(o,o.next),l=Ls(l,l.next),ko(o,e,t,n,s,r,0),ko(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function CM(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Wp(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(kM(c));for(s.sort(PM),r=0;r<s.length;r++)t=IM(s[r],t);return t}function PM(i,e){return i.x-e.x}function IM(i,e){let t=LM(i,e);if(!t)return e;let n=qp(t,i);return Ls(n,n.next),Ls(t,t.next)}function LM(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&pr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Bo(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&DM(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function DM(i,e){return Ut(i.prev,i,e.prev)<0&&Ut(e.next,i,i.next)<0}function UM(i,e,t,n){let s=i;do s.z===0&&(s.z=Gh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,NM(s)}function NM(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Gh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function kM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function pr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function BM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!HM(i,e)&&(Bo(i,e)&&Bo(e,i)&&FM(i,e)&&(Ut(i.prev,i,e.prev)||Ut(i,e.prev,e))||Al(i,e)&&Ut(i.prev,i,i.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Al(i,e){return i.x===e.x&&i.y===e.y}function Xp(i,e,t,n){let s=Ha(Ut(i,e,t)),r=Ha(Ut(i,e,n)),o=Ha(Ut(t,n,i)),a=Ha(Ut(t,n,e));return!!(s!==r&&o!==a||s===0&&Ba(i,t,e)||r===0&&Ba(i,n,e)||o===0&&Ba(t,i,n)||a===0&&Ba(t,e,n))}function Ba(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ha(i){return i>0?1:i<0?-1:0}function HM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Xp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Bo(i,e){return Ut(i.prev,i,i.next)<0?Ut(i,e,i.next)>=0&&Ut(i,i.prev,e)>=0:Ut(i,e,i.prev)<0||Ut(i,i.next,e)<0}function FM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function qp(i,e){let t=new Vh(i.i,i.x,i.y),n=new Vh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function up(i,e,t,n){let s=new Vh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function OM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var $i=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];dp(e),fp(n,e);let o=e.length;t.forEach(dp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,fp(n,t[l]);let a=SM.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function dp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function fp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Lr=class i extends Tt{constructor(e=new Di([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Qe(s,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:zM,_,v=!1,w,E,A,P;p&&(_=p.getSpacedPoints(u),v=!0,d=!1,w=p.computeFrenetFrames(u,!1),E=new I,A=new I,P=new I),d||(m=0,f=0,g=0,x=0);let S=a.extractPoints(c),b=S.shape,L=S.holes;if(!$i.isClockWise(b)){b=b.reverse();for(let he=0,_e=L.length;he<_e;he++){let R=L[he];$i.isClockWise(R)&&(L[he]=R.reverse())}}let D=$i.triangulateShape(b,L),B=b;for(let he=0,_e=L.length;he<_e;he++){let R=L[he];b=b.concat(R)}function z(he,_e,R){return _e||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(_e,R)}let k=b.length,te=D.length;function q(he,_e,R){let j,Y,ue,U=he.x-_e.x,W=he.y-_e.y,O=R.x-he.x,T=R.y-he.y,M=U*U+W*W,N=U*T-W*O;if(Math.abs(N)>Number.EPSILON){let $=Math.sqrt(M),ce=Math.sqrt(O*O+T*T),Q=_e.x-W/$,Se=_e.y+U/$,ne=R.x-T/ce,Me=R.y+O/ce,qe=((ne-Q)*T-(Me-Se)*O)/(U*T-W*O);j=Q+U*qe-he.x,Y=Se+W*qe-he.y;let le=j*j+Y*Y;if(le<=2)return new fe(j,Y);ue=Math.sqrt(le/2)}else{let $=!1;U>Number.EPSILON?O>Number.EPSILON&&($=!0):U<-Number.EPSILON?O<-Number.EPSILON&&($=!0):Math.sign(W)===Math.sign(T)&&($=!0),$?(j=-W,Y=U,ue=Math.sqrt(M)):(j=U,Y=W,ue=Math.sqrt(M/2))}return new fe(j/ue,Y/ue)}let ge=[];for(let he=0,_e=B.length,R=_e-1,j=he+1;he<_e;he++,R++,j++)R===_e&&(R=0),j===_e&&(j=0),ge[he]=q(B[he],B[R],B[j]);let xe=[],ae,Ce=ge.concat();for(let he=0,_e=L.length;he<_e;he++){let R=L[he];ae=[];for(let j=0,Y=R.length,ue=Y-1,U=j+1;j<Y;j++,ue++,U++)ue===Y&&(ue=0),U===Y&&(U=0),ae[j]=q(R[j],R[ue],R[U]);xe.push(ae),Ce=Ce.concat(ae)}for(let he=0;he<m;he++){let _e=he/m,R=f*Math.cos(_e*Math.PI/2),j=g*Math.sin(_e*Math.PI/2)+x;for(let Y=0,ue=B.length;Y<ue;Y++){let U=z(B[Y],ge[Y],j);re(U.x,U.y,-R)}for(let Y=0,ue=L.length;Y<ue;Y++){let U=L[Y];ae=xe[Y];for(let W=0,O=U.length;W<O;W++){let T=z(U[W],ae[W],j);re(T.x,T.y,-R)}}}let Ye=g+x;for(let he=0;he<k;he++){let _e=d?z(b[he],Ce[he],Ye):b[he];v?(A.copy(w.normals[0]).multiplyScalar(_e.x),E.copy(w.binormals[0]).multiplyScalar(_e.y),P.copy(_[0]).add(A).add(E),re(P.x,P.y,P.z)):re(_e.x,_e.y,0)}for(let he=1;he<=u;he++)for(let _e=0;_e<k;_e++){let R=d?z(b[_e],Ce[_e],Ye):b[_e];v?(A.copy(w.normals[he]).multiplyScalar(R.x),E.copy(w.binormals[he]).multiplyScalar(R.y),P.copy(_[he]).add(A).add(E),re(P.x,P.y,P.z)):re(R.x,R.y,h/u*he)}for(let he=m-1;he>=0;he--){let _e=he/m,R=f*Math.cos(_e*Math.PI/2),j=g*Math.sin(_e*Math.PI/2)+x;for(let Y=0,ue=B.length;Y<ue;Y++){let U=z(B[Y],ge[Y],j);re(U.x,U.y,h+R)}for(let Y=0,ue=L.length;Y<ue;Y++){let U=L[Y];ae=xe[Y];for(let W=0,O=U.length;W<O;W++){let T=z(U[W],ae[W],j);v?re(T.x,T.y+_[u-1].y,_[u-1].x+R):re(T.x,T.y,h+R)}}}ee(),pe();function ee(){let he=s.length/3;if(d){let _e=0,R=k*_e;for(let j=0;j<te;j++){let Y=D[j];ve(Y[2]+R,Y[1]+R,Y[0]+R)}_e=u+m*2,R=k*_e;for(let j=0;j<te;j++){let Y=D[j];ve(Y[0]+R,Y[1]+R,Y[2]+R)}}else{for(let _e=0;_e<te;_e++){let R=D[_e];ve(R[2],R[1],R[0])}for(let _e=0;_e<te;_e++){let R=D[_e];ve(R[0]+k*u,R[1]+k*u,R[2]+k*u)}}n.addGroup(he,s.length/3-he,0)}function pe(){let he=s.length/3,_e=0;K(B,_e),_e+=B.length;for(let R=0,j=L.length;R<j;R++){let Y=L[R];K(Y,_e),_e+=Y.length}n.addGroup(he,s.length/3-he,1)}function K(he,_e){let R=he.length;for(;--R>=0;){let j=R,Y=R-1;Y<0&&(Y=he.length-1);for(let ue=0,U=u+m*2;ue<U;ue++){let W=k*ue,O=k*(ue+1),T=_e+j+W,M=_e+Y+W,N=_e+Y+O,$=_e+j+O;Pe(T,M,N,$)}}}function re(he,_e,R){l.push(he),l.push(_e),l.push(R)}function ve(he,_e,R){Ae(he),Ae(_e),Ae(R);let j=s.length/3,Y=y.generateTopUV(n,s,j-3,j-2,j-1);$e(Y[0]),$e(Y[1]),$e(Y[2])}function Pe(he,_e,R,j){Ae(he),Ae(_e),Ae(j),Ae(_e),Ae(R),Ae(j);let Y=s.length/3,ue=y.generateSideWallUV(n,s,Y-6,Y-3,Y-2,Y-1);$e(ue[0]),$e(ue[1]),$e(ue[3]),$e(ue[1]),$e(ue[2]),$e(ue[3])}function Ae(he){s.push(l[he*3+0]),s.push(l[he*3+1]),s.push(l[he*3+2])}function $e(he){r.push(he.x),r.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return GM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new fl[s.type]().fromJSON(s)),new i(n,e.options)}},zM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new fe(r,o),new fe(a,l),new fe(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new fe(o,1-l),new fe(c,1-h),new fe(d,1-g),new fe(x,1-p)]:[new fe(a,1-l),new fe(u,1-h),new fe(f,1-g),new fe(m,1-p)]}};function GM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Fo=class i extends Tt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new I,g=new fe;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,_=y,v=y+n+1,w=y+n+2,E=y+1;a.push(_,v,E),a.push(v,w,E)}}this.setIndex(a),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Oo=class i extends Tt{constructor(e=new Di([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(o,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;$i.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];$i.isClockWise(y)===!0&&(g[m]=y.reverse())}let x=$i.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){let y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){let y=x[m],_=y[0]+h,v=y[1]+h,w=y[2]+h;n.push(_,v,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return VM(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function VM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var pt=class i extends Tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){let E=w/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(E+v,1-_),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let _=u[p][y+1],v=u[p][y],w=u[p+1][y],E=u[p+1][y+1];(p!==0||o>0)&&f.push(_,v,E),(p!==n-1||l<Math.PI)&&f.push(v,w,E)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Wt=class i extends Tt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ml=class i extends Tt{constructor(e=new ul(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new fe,u=new I,h=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function x(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),y(),p()}function m(_){u=e.getPointAt(_/t,u);let v=o.normals[_],w=o.binormals[_];for(let E=0;E<=s;E++){let A=E/s*Math.PI*2,P=Math.sin(A),S=-Math.cos(A);l.x=S*v.x+P*w.x,l.y=S*v.y+P*w.y,l.z=S*v.z+P*w.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let v=1;v<=s;v++){let w=(s+1)*(_-1)+(v-1),E=(s+1)*_+(v-1),A=(s+1)*_+v,P=(s+1)*(_-1)+v;g.push(w,E,P),g.push(E,A,P)}}function y(){for(let _=0;_<=t;_++)for(let v=0;v<=s;v++)c.x=_/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new fl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var gl=class extends At{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ye=class extends Dn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Up,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends ye{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Fa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function WM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function XM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function pp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Yp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Ji=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wh=class extends Ji{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ur,endingEnd:ur}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case dr:r=e,a=2*t-n;break;case Xa:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case dr:o=e,l=2*n-t;break;case Xa:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+y*o[c+w]+_*o[l+w]+v*o[h+w];return r}},xl=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Xh=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fa(t,this.TimeBufferType),this.values=Fa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fa(e.times,Array),values:Fa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sr:t=this.InterpolantFactoryMethodDiscrete;break;case Tr:t=this.InterpolantFactoryMethodLinear;break;case nc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&WM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===nc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Tr;var Qi=class extends Gn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Sr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends Gn{};yl.prototype.ValueTypeName="color";var Ui=class extends Gn{};Ui.prototype.ValueTypeName="number";var qh=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)It.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ni=class extends Gn{InterpolantFactoryMethodLinear(e){return new qh(this.times,this.values,this.getValueSize(),e)}};Ni.prototype.ValueTypeName="quaternion";Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Gn{constructor(e,t,n){super(e,t,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Sr;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Gn{};ki.prototype.ValueTypeName="vector";var si=class{constructor(e="",t=-1,n=[],s=yu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(YM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=XM(l);l=pp(l,1,u),c=pp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ui(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,x){if(f.length!==0){let m=[],p=[];Yp(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let _=d[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}s.push(new Ui(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(ki,f+".position",d,"pos",s),n(Ni,f+".quaternion",d,"rot",s),n(ki,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function qM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ui;case"vector":case"vector2":case"vector3":case"vector4":return ki;case"color":return yl;case"quaternion":return Ni;case"bool":case"boolean":return Qi;case"string":return es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function YM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=qM(i.type);if(i.times===void 0){let t=[],n=[];Yp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ki={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Yh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},KM=new Yh,Bi=class{constructor(e){this.manager=e!==void 0?e:KM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var wi={},Kh=class extends Error{constructor(e,t){super(e),this.response=t}},zo=class extends Bi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:s});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=wi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){y();function y(){h.read().then(({done:_,value:v})=>{if(_)p.close();else{x+=v.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let E=0,A=u.length;E<A;E++){let P=u[E];P.onProgress&&P.onProgress(w)}p.enqueue(v),y()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Kh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ki.add(e,c);let u=wi[e];delete wi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=wi[e];if(u===void 0)throw this.manager.itemError(e),c;delete wi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var jh=class extends Bi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=To("img");function l(){u(),Ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var vl=class extends Bi{constructor(e){super(e)}load(e,t,n,s){let r=new en,o=new jh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Dr=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Go=class extends Dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Nc=new Ze,mp=new I,gp=new I,Vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ao,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;mp.setFromMatrixPosition(e.matrixWorld),t.position.copy(mp),gp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gp),t.updateMatrixWorld(),Nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$h=class extends Vo{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=wr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},fi=class extends Dr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new $h}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},xp=new Ze,po=new I,kc=new I,Zh=class extends Vo{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),po.setFromMatrixPosition(e.matrixWorld),n.position.copy(po),kc.copy(n.position),kc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kc),n.updateMatrixWorld(),s.makeTranslation(-po.x,-po.y,-po.z),xp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xp)}},yn=class extends Dr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Jh=class extends Vo{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ds=class extends Dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Jh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ts=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var _l=class extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ki.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ki.add(e,l),r.manager.itemStart(e)}};var Ur=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=yp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function yp(){return performance.now()}var Qh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){It.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;It.multiplyQuaternionsFlat(e,o,e,t,e,n),It.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Eu="\\[\\]\\.:\\/",jM=new RegExp("["+Eu+"]","g"),bu="[^"+Eu+"]",$M="[^"+Eu.replace("\\.","")+"]",ZM=/((?:WC+[\/:])*)/.source.replace("WC",bu),JM=/(WCOD+)?/.source.replace("WCOD",$M),QM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bu),eE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bu),tE=new RegExp("^"+ZM+JM+QM+eE+"$"),nE=["material","materials","bones","map"],eu=class{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(jM,"")}static parseTrackName(e){let t=tE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);nE.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=eu;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tu=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ur,endingEnd:ur};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=V0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case X0:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case yu:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===W0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===xu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=dr,s.endingEnd=dr):(e?s.endingStart=this.zeroSlopeAtStart?dr:ur:s.endingStart=Xa,t?s.endingEnd=this.zeroSlopeAtEnd?dr:ur:s.endingEnd=Xa)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},iE=new Float32Array(1),Un=class extends Li{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;g=new Qh(St.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new xl(new Float32Array(2),new Float32Array(2),1,iE),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?si.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=yu),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new tu(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?si.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var vp=new Ze,Ml=class{constructor(e,t,n=0,s=1/0){this.ray=new ws(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return vp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vp),this}intersectObject(e,t=!0,n=[]){return nu(e,this,n,t),n.sort(_p),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)nu(e[s],this,n,t);return n.sort(_p),n}};function _p(i,e){return i.distance-e.distance}function nu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)nu(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=iu);var jt=(i,e)=>i+Math.random()*(e-i),Vn=[["#ff2fb0","#ff8ad6","#3a0030"],["#20e0ff","#a8f6ff","#00303a"],["#39ff88","#c4ffd9","#003a18"],["#ffd23f","#fff1a8","#3a2a00"],["#ff6a2a","#ffc09a","#3a1000"],["#a46bff","#dcc6ff","#1a0040"]];function Xo(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function Hr(i,e,t,n,s){i.fillStyle=s;for(let r=0;r<26;r++){let o=Math.random()*6.28,a=n*Math.pow(Math.random(),.6);i.globalAlpha=jt(.35,.9),i.beginPath(),i.arc(e+Math.cos(o)*a,t+Math.sin(o)*a,jt(1.5,n*.09),0,6.28),i.fill()}i.globalAlpha=1}function Rl(i,e,t,n,s,r){i.fillStyle=s;for(let o=0;o<r;o++){let a=jt(e,t),l=jt(18,90),c=jt(4,9);i.fillRect(a-c/2,n-6,c,l),i.beginPath(),i.arc(a,n-6+l,c*.75,0,6.28),i.fill()}}function ns(i,e,t={}){let r=Xo(1024,512),o=r.getContext("2d"),[a,l,c]=e,u=t.accent||"#ffffff";if(t.cloud!==!1){o.fillStyle=t.cloudCol||c+"cc";for(let w=0;w<9;w++)o.beginPath(),o.ellipse(jt(120,904),jt(170,340),jt(110,220),jt(70,130),0,0,6.28),o.fill();Hr(o,jt(80,200),jt(90,160),90,a),Hr(o,jt(804,944),jt(320,420),80,u)}let h=[...i],d=h.length,f=Math.min(330,904/(d*.62));o.font=`900 ${f}px Impact, "Arial Black", sans-serif`;let g=0,x=h.map(w=>{let E=o.measureText(w).width*.88;return g+=E,E});if(g>914){f*=914/g,o.font=`900 ${f}px Impact, "Arial Black", sans-serif`,g=0;for(let w=0;w<d;w++)x[w]=o.measureText(h[w]).width*.88,g+=x[w]}let m=(1024-g)/2,p=512/2+f*.36,y=h.map((w,E)=>{let A={ch:w,x:m+x[E]/2,y:p+jt(-18,18),r:jt(-.16,.16),s:jt(.95,1.12)};return m+=x[E],A}),_=w=>y.forEach(E=>{o.save(),o.translate(E.x,E.y),o.rotate(E.r),o.scale(E.s,E.s),o.textAlign="center",o.textBaseline="alphabetic",w(E),o.restore()});o.lineJoin="round";for(let w=22;w>0;w-=2)_(E=>{o.fillStyle=c,o.fillText(E.ch,w,w)});_(w=>{o.strokeStyle="#000",o.lineWidth=f*.16,o.strokeText(w.ch,0,0)}),_(w=>{o.strokeStyle=u,o.lineWidth=f*.085,o.strokeText(w.ch,0,0)});let v=o.createLinearGradient(0,p-f,0,p+10);v.addColorStop(0,l),v.addColorStop(.55,a),v.addColorStop(1,c),_(w=>{o.fillStyle=v,o.fillText(w.ch,0,0)}),o.save(),o.globalCompositeOperation="source-atop",o.strokeStyle="rgba(255,255,255,0.22)",o.lineWidth=7;for(let w=-512;w<1024;w+=34)o.beginPath(),o.moveTo(w,0),o.lineTo(w+512,512),o.stroke();o.restore(),_(w=>{o.fillStyle="rgba(255,255,255,0.9)",o.beginPath(),o.ellipse(-f*.12,-f*.55,f*.05,f*.022,-.5,0,6.28),o.fill()}),Rl(o,(1024-g)/2+20,(1024+g)/2-20,p+4,a,t.drips||7);for(let w=0;w<6;w++){let E=jt(40,984),A=jt(40,472);o.strokeStyle=u,o.lineWidth=4,o.beginPath(),o.moveTo(E-16,A),o.lineTo(E+16,A),o.moveTo(E,A-16),o.lineTo(E,A+16),o.stroke()}return t.tag&&(o.font='italic 900 46px "Segoe Script","Brush Script MT",cursive',o.fillStyle=u,o.strokeStyle="#000",o.lineWidth=6,o.strokeText(t.tag,764,472),o.fillText(t.tag,764,472)),r}function sE(i){let n=Xo(512,512),s=n.getContext("2d");Hr(s,256,256,230,i[0]),s.fillStyle="#000",s.beginPath(),s.arc(262,266,186,0,6.28),s.fill();let r=s.createRadialGradient(220,200,20,256,256,190);return r.addColorStop(0,"#fff6a0"),r.addColorStop(1,"#ffc800"),s.fillStyle=r,s.beginPath(),s.arc(256,256,176,0,6.28),s.fill(),s.fillStyle="#000",s.beginPath(),s.ellipse(196,210,22,40,0,0,6.28),s.ellipse(316,210,22,40,0,0,6.28),s.fill(),s.strokeStyle="#000",s.lineWidth=18,s.lineCap="round",s.beginPath(),s.arc(256,260,110,.25,Math.PI-.25),s.stroke(),Rl(s,140,370,420,"#ffc800",6),n}function rE(i){let n=Xo(512,512),s=n.getContext("2d");Hr(s,256,256,220,i[0]),s.fillStyle="#000",s.beginPath(),s.ellipse(262,250,168,214,0,0,6.28),s.fill();let r=s.createLinearGradient(0,40,0,460);return r.addColorStop(0,"#c4ffd9"),r.addColorStop(1,"#14b85a"),s.fillStyle=r,s.beginPath(),s.ellipse(256,244,156,200,0,0,6.28),s.fill(),s.fillStyle="#000",s.beginPath(),s.ellipse(190,250,62,34,.55,0,6.28),s.ellipse(322,250,62,34,-.55,0,6.28),s.fill(),s.fillStyle="rgba(255,255,255,0.8)",s.beginPath(),s.ellipse(176,238,14,8,.5,0,6.28),s.ellipse(308,238,14,8,-.5,0,6.28),s.fill(),s.strokeStyle="#000",s.lineWidth=8,s.beginPath(),s.moveTo(236,360),s.quadraticCurveTo(256,372,276,360),s.stroke(),Rl(s,150,360,430,"#14b85a",5),n}function oE(i){let n=Xo(512,640),s=n.getContext("2d");Hr(s,256,320,240,i[0]),s.fillStyle="#000",s.fillRect(84,52,360,560),s.fillStyle="#1c1c22",s.fillRect(94,62,336,536),s.strokeStyle=i[0],s.lineWidth=10,s.strokeRect(94,62,336,536);let r=(o,a)=>{let l=s.createRadialGradient(262,o,6,262,o,a);l.addColorStop(0,"#555"),l.addColorStop(.3,"#111"),l.addColorStop(.9,"#333"),l.addColorStop(1,i[1]),s.fillStyle=l,s.beginPath(),s.arc(262,o,a,0,6.28),s.fill(),s.fillStyle="#888",s.beginPath(),s.arc(262,o,a*.18,0,6.28),s.fill()};r(170,70),r(420,140),s.strokeStyle=i[1],s.lineWidth=6;for(let o=0;o<3;o++)s.beginPath(),s.arc(262,420,170+o*28,-.6,.6),s.stroke(),s.beginPath(),s.arc(262,420,170+o*28,Math.PI-.6,Math.PI+.6),s.stroke();return s.font='900 64px Impact, "Arial Black", sans-serif',s.textAlign="center",s.fillStyle=i[0],s.strokeStyle="#000",s.lineWidth=10,s.strokeText("SPK",262,300),s.fillText("SPK",262,300),n}function aE(i){let n=Xo(512,384),s=n.getContext("2d");Hr(s,256,200,170,i[0]);let r=[[70,300],[90,110],[170,210],[256,60],[342,210],[422,110],[442,300]];s.lineJoin="round",s.strokeStyle="#000",s.lineWidth=34,s.beginPath(),r.forEach(([a,l],c)=>c?s.lineTo(a,l):s.moveTo(a,l)),s.closePath(),s.stroke();let o=s.createLinearGradient(0,60,0,300);o.addColorStop(0,"#fff1a8"),o.addColorStop(1,"#e09000"),s.fillStyle=o,s.beginPath(),r.forEach(([a,l],c)=>c?s.lineTo(a,l):s.moveTo(a,l)),s.closePath(),s.fill();for(let[a,l]of[[90,110],[256,60],[422,110]])s.fillStyle=i[0],s.beginPath(),s.arc(a,l,18,0,6.28),s.fill(),s.strokeStyle="#000",s.lineWidth=6,s.stroke();return Rl(s,110,400,300,"#e09000",5),n}function Kp(i,e,t,n){let s=[()=>ns("SPK",Vn[0],{accent:"#20e0ff",tag:"TekMek"}),()=>sE(Vn[3]),()=>ns("KAOS",Vn[1],{accent:"#ff2fb0"}),()=>oE(Vn[0]),()=>ns("TEKNO",Vn[2],{accent:"#ffd23f",tag:"Pseudonymos"}),()=>rE(Vn[2]),()=>ns("RAVE",Vn[5],{accent:"#39ff88"}),()=>aE(Vn[0]),()=>ns("S.P.K",Vn[3],{accent:"#ff2fb0",tag:"Sodomize"}),()=>ns("FREE PARTY",Vn[4],{accent:"#20e0ff"}),()=>ns("BASS",Vn[0],{accent:"#ffd23f",tag:"Knox"}),()=>ns("LOVE",Vn[1],{accent:"#ff2fb0",tag:"Tonvision"})],r=n-t,o=s.length;s.forEach((a,l)=>{let c=a(),u=c.width/c.height,h=t+r*(l+.5)/o,d=u>1.5?3.6:3.1,f=d*u,g=new tn(c);g.colorSpace=ht,g.anisotropy=4;let x=new ye({map:g,transparent:!0,alphaTest:.05,roughness:.75,emissive:16777215,emissiveMap:g,emissiveIntensity:.62,depthWrite:!1}),m=new F(new at(f,d),x),p=e-.2,y=7.25+(l%2?-.1:.12);m.position.set(Math.sin(h)*p,y,-Math.cos(h)*p),m.lookAt(0,y,0),m.rotateZ(jt(-.06,.06)),m.renderOrder=2,i.add(m)})}var Wb=new URLSearchParams(location.search);var jp=[{n:1,name:"Plakatieren bei Nacht",icon:"\u{1F58C}\uFE0F"},{n:2,name:"SPK-LKW beladen",icon:"\u{1F4E6}"},{n:3,name:"Camper-Rennen",icon:"\u{1F3C1}"},{n:4,name:"Boxen ausladen & aufbauen",icon:"\u{1F50A}"},{n:5,name:"Boxen verkabeln",icon:"\u{1F50C}"},{n:6,name:"Rave gegen die Polizei",icon:"\u{1F6A8}"},{n:7,name:"Traveler \u2013 auf Tour",icon:"\u{1F690}"}];function Su(i,e){if(e===Dp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Wo||e===bl){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Wo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Or=class extends Bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Iu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Xu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ts.extractUrlBase(e);o=ts.resolveURL(c,this.path)}else o=ts.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new zo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===em){try{o[lt.KHR_BINARY_GLTF]=new qu(e)}catch(h){s&&s(h);return}r=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Qu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case lt.KHR_MATERIALS_UNLIT:o[h]=new Cu;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Yu(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[h]=new Ku;break;case lt.KHR_MESH_QUANTIZATION:o[h]=new ju;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function lE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ru=class{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Re(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],fn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ds(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new yn(u),c.distance=h;break;case"spot":c=new fi(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Cu=class{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ue}extendParams(e,t,n){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ht))}return Promise.all(s)}},Pu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Iu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(a,a)}return Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Du=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Uu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ht)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Nu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},ku=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],fn),Promise.all(r)}},Bu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Hu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],fn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ht)),Promise.all(r)}},Fu=class{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Ou=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},zu=class{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Gu=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Vu=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Wu=class{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Xu=class{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Wn.TRIANGLES&&c.mode!==Wn.TRIANGLE_STRIP&&c.mode!==Wn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let x=new Ze,m=new I,p=new It,y=new I(1,1,1),_=new il(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),_.setMatrixAt(v,x.compose(m,p,y));for(let v in l)if(v==="_COLOR_0"){let w=l[v];_.instanceColor=new As(w.array,w.itemSize,w.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);Lt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},em="glTF",qo=12,$p={JSON:1313821514,BIN:5130562},qu=class{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,qo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==em)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-qo,r=new DataView(e,qo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===$p.JSON){let c=new Uint8Array(e,qo+o,a);this.content=n.decode(c)}else if(l===$p.BIN){let c=qo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Yu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Zu[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Zu[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Fr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(f)},a,c,fn,d)})})}},Ku=class{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ju=class{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}},Cl=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,y=1-m,_=p-d+h;for(let v=0;v!==a;v++){let w=o[x+v+a],E=o[x+v+l]*u,A=o[g+v+a],P=o[g+v]*u;r[v]=y*w+_*E+m*A+p*P}return r}},cE=new It,$u=class extends Cl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return cE.fromArray(r).normalize().toArray(r),r}},Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zp={9728:Qt,9729:un,9984:cu,9985:xo,9986:hr,9987:ui},Jp={33071:Ri,33648:bo,10497:wn},Tu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hE={CUBICSPLINE:void 0,LINEAR:Tr,STEP:Sr},wu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ye({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Tn})),i.DefaultMaterial}function Us(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dE(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function fE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pE(i){let e,t=i.extensions&&i.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Au(t.attributes):e=i.indices+":"+Au(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Au(i.targets[n]);return e}function Au(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ju(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var gE=new Ze,Qu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new vl(this.options.manager):this.textureLoader=new _l(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Us(r,a,s),Hi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ts.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Tu[s.type],a=Fr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ht(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Tu[s.type],c=Fr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==h){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(y);_||(x=new c(a,p*f,s.count*f/u),_=new Po(x,f/u),t.cache.add(y,_)),m=new Io(_,l,d%f/u,g)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new Ht(x,l,g);if(s.sparse!==void 0){let p=Tu.SCALAR,y=Fr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,w=new y(o[1],_,s.sparse.count*p),E=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new Ht(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,P=w.length;A<P;A++){let S=w[A];if(m.setX(S,E[A*l]),l>=2&&m.setY(S,E[A*l+1]),l>=3&&m.setZ(S,E[A*l+2]),l>=4&&m.setW(S,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Zp[d.magFilter]||un,u.minFilter=Zp[d.minFilter]||ui,u.wrapS=Jp[d.wrapS]||wn,u.wrapT=Jp[d.wrapT]||wn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Qt&&u.minFilter!==un,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new en(x);m.needsUpdate=!0,d(m)}),t.load(ts.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Hi(h,o),h.userData.mimeType=o.mimeType||mE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Rs,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Do,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ye}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){let h=s[lt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],fn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,ht)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pt);let u=r.alphaMode||wu.OPAQUE;if(u===wu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===wu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ue&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new fe(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ue&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ue){let h=r.emissiveFactor;a.emissive=new Re().setRGB(h[0],h[1],h[2],fn)}return r.emissiveTexture!==void 0&&o!==Ue&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ht)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Hi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Us(s,h,r),h})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Qp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=pE(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Qp(new Tt,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?uE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],m=o[f],p,y=c[f];if(m.mode===Wn.TRIANGLES||m.mode===Wn.TRIANGLE_STRIP||m.mode===Wn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Rr(x,y):new F(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Wn.TRIANGLE_STRIP?p.geometry=Su(p.geometry,bl):m.mode===Wn.TRIANGLE_FAN&&(p.geometry=Su(p.geometry,Wo));else if(m.mode===Wn.LINES)p=new ol(x,y);else if(m.mode===Wn.LINE_STRIP)p=new Pr(x,y);else if(m.mode===Wn.LINE_LOOP)p=new al(x,y);else if(m.mode===Wn.POINTS)p=new Ir(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&fE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Hi(p,r),m.extensions&&Us(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Us(s,h[0],r),h[0];let d=new Xe;r.extensions&&Us(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(Tl.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Zi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Cr(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let y=0,_=d.length;y<_;y++){let v=d[y],w=f[y],E=g[y],A=x[y],P=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let S=n._createAnimationTracks(v,w,E,A,P);if(S)for(let b=0;b<S.length;b++)p.push(S[b])}return new si(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,gE)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Lo:c.length>1?u=new Xe:c.length===1?u=c[0]:u=new Lt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Hi(u,r),r.extensions&&Us(n,u,r),r.matrix!==void 0){let h=new Ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Xe;n.name&&(r.name=s.createUniqueName(n.name)),Hi(r,n),n.extensions&&Us(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof Dn||d instanceof en)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];is[r.path]===is.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(is[r.path]){case is.weights:c=Ui;break;case is.rotation:c=Ni;break;case is.position:case is.scale:c=ki;break;default:switch(n.itemSize){case 1:c=Ui;break;case 2:case 3:default:c=ki;break}break}let u=s.interpolation!==void 0?hE[s.interpolation]:Tr,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+is[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ju(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ni?$u:Cl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function xE(i,e,t){let n=e.attributes,s=new dn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let u=Ju(Fr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Ju(Fr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new In;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Qp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Zu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ot.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Hi(i,e),xE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?dE(i,e.targets,t):i})}function Yo(i){let e=new Map,t=new Map,n=i.clone();return tm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function tm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)tm(i.children[n],e.children[n],t)}var Pl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var _n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},yE=new Zi(-1,1,1,-1,0,1),ed=class extends Tt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},vE=new ed,ri=class{constructor(e){this._mesh=new F(vE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Il=class extends _n{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pi.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ri(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ko=class extends _n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ll=class extends _n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var zr=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new fe);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Il(Pl),this.copyPass.material.blending=di,this.clock=new Ur}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ko!==void 0&&(o instanceof Ko?n=!0:o instanceof Ll&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Gr=class extends _n{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var im={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Vr=class i extends _n{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,o,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Vt(r,o,{type:vn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Vt(r,o,{type:vn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=im;this.highPassUniforms=pi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new fe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Pl;this.copyUniforms=pi.clone(u.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ni,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new Ue,this.fsQuad=new ri(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Vr.BlurDirectionX=new fe(1,0);Vr.BlurDirectionY=new fe(0,1);var sm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Wr=class extends _n{constructor(){super();let e=sm;this.uniforms=pi.clone(e.uniforms),this.material=new gl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ri(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===su?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ru?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ou?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Nr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===au?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===lu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var jo=class i extends F{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new kt;let n=this,s=t.color!==void 0?new Re(t.color):new Re(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Qn,h=new I,d=new I,f=new I,g=new Ze,x=new I(0,0,-1),m=new ft,p=new I,y=new I,_=new ft,v=new Ze,w=this.camera,E=new Vt(r,o,{samples:c,type:vn}),A=new At({name:l.name!==void 0?l.name:"unspecified",uniforms:pi.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});A.uniforms.tDiffuse.value=E.texture,A.uniforms.color.value=s,A.uniforms.textureMatrix.value=v,this.material=A,this.onBeforeRender=function(P,S,b){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(b.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(d,f),p.dot(h)>0)return;p.reflect(h).negate(),p.add(d),g.extractRotation(b.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(f),y.subVectors(d,x),y.reflect(h).negate(),y.add(d),w.position.copy(p),w.up.set(0,1,0),w.up.applyMatrix4(g),w.up.reflect(h),w.lookAt(y),w.far=b.far,w.updateMatrixWorld(),w.projectionMatrix.copy(b.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(w.projectionMatrix),v.multiply(w.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(w.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let L=w.projectionMatrix;_.x=(Math.sign(m.x)+L.elements[8])/L.elements[0],_.y=(Math.sign(m.y)+L.elements[9])/L.elements[5],_.z=-1,_.w=(1+L.elements[10])/L.elements[14],m.multiplyScalar(2/m.dot(_)),L.elements[2]=m.x,L.elements[6]=m.y,L.elements[10]=m.z+1-a,L.elements[14]=m.w,n.visible=!1;let H=P.getRenderTarget(),D=P.xr.enabled,B=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(E),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(S,w),P.xr.enabled=D,P.shadowMap.autoUpdate=B,P.setRenderTarget(H);let z=b.viewport;z!==void 0&&P.state.viewport(z),n.visible=!0},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}};jo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Dl=[{id:"lsd",name:"LSD",col:"#ff2fb0",verb:"nehmen",kind:"tab",msg:"\u{1F308} LSD \u2013 die Welt f\xE4ngt an zu flie\xDFen \u2026"},{id:"spd",name:"SPEED",col:"#ffe22f",verb:"ziehen",kind:"line",msg:"\u26A1 SPEED \u2013 Puls auf 180!"},{id:"coke",name:"KOKAIN",col:"#bfe9ff",verb:"ziehen",kind:"line",msg:"\u2744\uFE0F KOKAIN \u2013 alles glitzert und ist superhell"},{id:"ket",name:"KETAMIN",col:"#9a7dff",verb:"ziehen",kind:"line",msg:"\u{1F300} KETAMIN \u2013 ab ins K-Hole \u2026"},{id:"beer",name:"BIER",col:"#ffb02f",verb:"trinken",kind:"beer",msg:"\u{1F37A} BIER \u2013 Prost! Alles schwankt ein bisschen"},{id:"weed",name:"JOINTS",col:"#7ddc4a",verb:"rauchen",kind:"joint",msg:"\u{1F33F} JOINT \u2013 alles wird langsam, weich und gem\xFCtlich \u2026"}],$o=240,rm=8,td=120,_E=.4,ME=3.2,EE=300,Ul=10,om="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",bE=`
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
}`,nd=class extends _n{constructor(){super(),this.u={tDiffuse:{value:null},tPrev:{value:null},t:{value:0},res:{value:new fe(1,1)},lsd:{value:0},spd:{value:0},coke:{value:0},ket:{value:0},beer:{value:0},weed:{value:0}},this.q=new ri(new At({uniforms:this.u,vertexShader:om,fragmentShader:bE,depthTest:!1,depthWrite:!1})),this.cu={tDiffuse:{value:null}},this.cq=new ri(new At({uniforms:this.cu,vertexShader:om,fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ gl_FragColor = texture2D(tDiffuse, vUv); }",depthTest:!1,depthWrite:!1}));let e={type:vn};this.a=new Vt(1,1,e),this.b=new Vt(1,1,e),this.fresh=!0}setSize(e,t){this.a.setSize(e,t),this.b.setSize(e,t),this.u.res.value.set(e,t),this.fresh=!0}render(e,t,n){this.u.tDiffuse.value=n.texture,this.u.tPrev.value=this.fresh?n.texture:this.b.texture,this.fresh=!1,e.setRenderTarget(this.a),this.q.render(e),this.cu.tDiffuse.value=this.a.texture,e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(),this.cq.render(e);let s=this.a;this.a=this.b,this.b=s}};function am(i){let{scene:e,camera:t,renderer:n,portals:s,me:r,textPlane:o,toast:a,net:l}=i,c=i.R_WALL,u=i.ARC,h=s.length,d=i.PR,f=[],g=new Ue({color:16054015}),x=(()=>{let R=document.createElement("canvas");R.width=R.height=64;let j=R.getContext("2d");for(let ue=0;ue<64;ue+=8)for(let U=0;U<64;U+=8)j.fillStyle=`hsl(${(U*5+ue*7)%360},100%,55%)`,j.fillRect(U,ue,8,8);j.fillStyle="#fff",j.font="bold 40px Arial",j.textAlign="center",j.fillText("\u263A",32,46);let Y=new tn(R);return Y.colorSpace=ht,Y})(),m=new Ue({map:x}),p=new ye({color:16052194,roughness:.9}),y=new ye({color:14205082,roughness:.9}),_=new ye({color:5910021,roughness:.15,metalness:.3,emissive:2757120,transparent:!0,opacity:.92}),v=new Ue({color:16765802}),w=new ye({color:1381660,roughness:.25,metalness:.7}),E=new ye({color:11187400,roughness:.05,metalness:1,emissive:1711914});s.forEach((R,j)=>{let Y=j===h-1&&h>1?5:j%5,ue=Dl[Y],U=new Re(ue.col),W=new Xe;W.position.copy(R.pos),W.lookAt(0,0,0),e.add(W);let O=-1.98,T=.95,M=(ne,Me,qe,le,be,Be,Fe)=>{let Te=new F(new Oe(ne,Me,qe),Fe);return Te.position.set(le,be,Be),W.add(Te),Te};M(1.6,.05,.55,0,T,O,new ye({color:1381660,roughness:.25,metalness:.7,emissive:U.clone().multiplyScalar(.22)}));let N=new F(new pt(.035,10,8),new Ue({color:U,toneMapped:!1}));N.position.set(-.7,1.55,O-.2),W.add(N);for(let ne of[-.72,.72])for(let Me of[-.22,.22])M(.05,T,.05,ne,T/2,O+Me,w);M(1.6,.025,.025,0,T-.03,O+.28,new Ue({color:U,toneMapped:!1}));let $=o([{t:ue.name,size:120,c:ue.col,font:'Impact, "Arial Black", sans-serif',weight:400,glow:ue.col}],{w:768,h:170,pw:1.3});if($.position.set(0,1.85,O-.24),W.add($),ue.kind!=="beer"&&ue.kind!=="joint"&&M(.95,.012,.36,0,T+.031,O,E),ue.kind==="joint"){M(.95,.02,.36,0,T+.035,O,new ye({color:6964260,roughness:.8}));let ne=new Xe;ne.position.set(-.56,T+.025,O-.15),ne.scale.setScalar(1.35),W.add(ne);let Me=new ye({color:8248394,roughness:.05,metalness:.1,transparent:!0,opacity:.55,emissive:1718800}),qe=new F(new pt(.085,20,14,0,Math.PI*2,0,Math.PI*.62),Me);qe.rotation.x=Math.PI,qe.position.y=.07,ne.add(qe);let le=new F(new je(.066,.066,.006,20),Me);le.position.y=.004,ne.add(le);let be=new F(new je(.06,.068,.04,20),new Ue({color:4894880,transparent:!0,opacity:.6}));be.position.y=.03,ne.add(be);let Be=new F(new je(.03,.034,.42,18,1,!0),Me);Be.position.y=.33,ne.add(Be);let Fe=new F(new Wt(.031,.006,8,20),Me);Fe.rotation.x=Math.PI/2,Fe.position.y=.54,ne.add(Fe);let Te=new F(new Wt(.031,.004,6,3),Me);Te.rotation.x=Math.PI/2,Te.position.y=.3,ne.add(Te);let tt=new F(new je(.008,.008,.13,8),Me);tt.position.set(.055,.08,0),tt.rotation.z=-.8,ne.add(tt);let Ke=new F(new je(.022,.01,.03,12),new ye({color:11581118,metalness:.9,roughness:.25}));Ke.position.set(.1,.12,0),ne.add(Ke);let _t=new F(new at(.05,.05),new Ue({color:8248394,toneMapped:!1,transparent:!0,opacity:.9}));_t.position.set(0,.25,.034),ne.add(_t)}let ce=[];for(let ne=0;ne<Ul;ne++){let Me=ue.kind==="line"?-.36+ne*.08:-.32+ne%5*.16,qe=ue.kind==="line"?0:ne<5?-.08:.08,le;if(ue.kind==="line")le=new F(new Oe(.016,.007,.24),ue.id==="spd"?new Ue({color:16773576}):ue.id==="ket"?new Ue({color:15131391}):g),le.position.set(Me,T+.041,O);else if(ue.kind==="joint"){le=new Xe;let be=new F(new je(.009,.005,.12,10),p);be.rotation.z=Math.PI/2,le.add(be);let Be=new F(new je(.0052,.0052,.018,8),y);Be.rotation.z=Math.PI/2,Be.position.x=-.068,le.add(Be);let Fe=new F(new Is(.0095,.016,8),p);Fe.rotation.z=-Math.PI/2,Fe.position.x=.068,le.add(Fe),le.position.set(-.3+ne%5*.15,T+.055,O+(ne<5?-.08:.08)),le.rotation.y=(ne%5-2)*.12+(ne<5?.1:-.1)}else if(ue.kind==="tab")le=new F(new Oe(.07,.003,.07),m),le.position.set(Me,T+.039,O+qe),le.rotation.y=(ne%5-2)*.2;else{le=new Xe;let be=new F(new je(.032,.032,.17,14),_);be.position.y=.085,le.add(be);let Be=new F(new je(.012,.03,.08,12),_);Be.position.y=.21,le.add(Be);let Fe=new F(new je(.0325,.0325,.06,14,1,!0),v);Fe.position.y=.08,le.add(Fe),le.position.set(Me+(ne<5?0:.05),T+.025,O+qe*1.2)}W.add(le),ce.push(le)}if(ue.kind==="line"){let ne=new F(new je(.008,.008,.13,10),new Ue({color:9421962}));ne.rotation.z=Math.PI/2,ne.position.set(.38,T+.045,O+.1),W.add(ne)}let Q=new F(new Oe(.95,.35,.5),new Ue({transparent:!0,opacity:0,depthWrite:!1}));Q.position.set(-.05,T+.15,O),W.add(Q);let Se={i:j,di:Y,P:R,D:ue,units:ce,left:new Array(Ul).fill(!0),takenAt:new Array(Ul).fill(0),hit:Q,aim:{secret:!0,table:j}};if(Q.userData.aim=Se.aim,j===h-1){let ne=new Xe;ne.position.set(.6,T+.03,O),W.add(ne);let Me=new F(new Oe(.3,.01,.16),new Ue({color:16777215}));ne.add(Me);let qe=new Ue({color:14688288}),le=new F(new Oe(.05,.002,.016),qe);le.position.set(-.11,.006,.05),ne.add(le);let be=le.clone();be.rotation.y=Math.PI/2,ne.add(be);let Be=new F(new je(.017,.017,.15,14),new Ue({color:3800968,toneMapped:!1,transparent:!0,opacity:.85}));Be.rotation.z=Math.PI/2,Be.position.set(.02,.025,0),ne.add(Be);let Fe=new F(new je(.002,.002,.07,6),new Ue({color:14540253}));Fe.rotation.z=Math.PI/2,Fe.position.set(.13,.025,0),ne.add(Fe);let Te=new F(new je(.012,.012,.06,10),new Ue({color:15658734}));Te.rotation.z=Math.PI/2,Te.position.set(-.08,.025,0),ne.add(Te);let tt=o([{t:"GEGENMITTEL",size:90,c:"#39ff88",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"#39ff88"}],{w:768,h:140,pw:.7});tt.position.set(.6,1.33,O-.24),W.add(tt);let Ke=new F(new Oe(.34,.25,.3),Q.material);Ke.position.set(.6,T+.1,O),W.add(Ke),Se.antiHit=Ke,Ke.userData.aim={secret:!0,anti:!0,table:j}}f.push(Se)});let A=[];for(let R=-1;R<h;R++){let j=(R+.5-(h-1)/2)*u;A.push(new I(Math.sin(j)*(c-.6),0,-Math.cos(j)*(c-.6)))}function P(R){for(let j of A){let Y=R.x-j.x,ue=R.z-j.z,U=Math.hypot(Y,ue),W=.62+d;U<W&&U>1e-4&&(R.x=j.x+Y/U*W,R.z=j.z+ue/U*W)}for(let j of f){let Y=j.P,ue=R.x-Y.pos.x,U=R.z-Y.pos.z,W=ue*Y.n.x+U*Y.n.z,O=ue*Y.t.x+U*Y.t.z,T=-1.7+d;if(Math.abs(O)<.8+d&&W<T&&W>-2.6){let M=T-W;R.x+=Y.n.x*M,R.z+=Y.n.z*M}}}let S=R=>{let j=R.P;return(r.pos.x-j.pos.x)*j.n.x+(r.pos.z-j.pos.z)*j.n.z<-.35},b=Dl.map(()=>({doses:[],end:0})),L={lsd:0,spd:0,coke:0,ket:0,beer:0,weed:0},H=0,D=()=>performance.now()/1e3,B=R=>{if(R<0||R>=$o)return 0;if(R<rm){let Y=R/rm;return Y*Y*(3-2*Y)}if(R<td)return 1;let j=(R-td)/($o-td);return 1-j*j*(3-2*j)};function z(R,j){let Y=b[R];Y.doses=Y.doses.filter(U=>j-U<$o);let ue=0;for(let U of Y.doses)ue+=_E*B(j-U);return Math.min(ME,ue)}function k(R){let j=D(),Y=b[R];Y.doses.push(j),Y.end=j+$o;let ue=Y.doses.filter(U=>j-U<$o).length;a(Dl[R].msg+(ue>1?` (${ue}. Dosis \u2013 st\xE4rker!)`:" (ca. 4 Minuten)"))}function te(){let R=D(),j=!1;for(let Y of b)Y.end>R&&(j=!0),Y.end=0,Y.doses=[];H=D(),a(j?"\u{1F489} Gegenmittel \u2013 alles wieder klar im Kopf":"\u{1F489} Gegenmittel \u2013 du warst eh n\xFCchtern \u{1F604}")}let q=()=>f.map(R=>R.left.reduce((j,Y,ue)=>j|(Y?1<<ue:0),0));function ge(R){f.forEach((j,Y)=>{let ue=R[Y]|0;j.left=j.units.map((U,W)=>!!(ue&1<<W)),j.units.forEach((U,W)=>U.visible=j.left[W])})}function xe(){if(l.role!=="host")return;let R={t:"dg",s:q()};for(let j of l.conns.values())try{j.conn.send(R)}catch{}}function ae(R,j){let Y=f[R];return!Y||!Y.left[j]?!1:(Y.left[j]=!1,Y.takenAt[j]=D(),Y.units[j].visible=!1,!0)}function Ce(R){let j=f[R.table];if(!j||!S(j))return;if(R.anti){te();return}let Y=j.left.indexOf(!0);if(Y<0){a(j.D.name+" ist leer \u2013 kommt in ein paar Minuten wieder");return}if(ae(R.table,Y),k(j.di),l.role==="client"&&l.conn)try{l.conn.send({t:"dg1",i:R.table,k:Y})}catch{}else xe()}let Ye=0;function ee(R){if(l.role==="client"||(Ye+=R)<2)return;Ye=0;let j=D(),Y=!1;for(let ue of f)ue.left.forEach((U,W)=>{!U&&j-ue.takenAt[W]>EE&&(ue.left[W]=!0,ue.units[W].visible=!0,Y=!0)});Y&&xe()}let pe=new nd;pe.enabled=!1;let K=null;if(i.composer){let R=i.composer.passes;i.composer.insertPass(pe,Math.max(1,R.length-1))}function re(){if(K)return K;K=new zr(n),K.addPass(new Gr(e,t)),K.addPass(pe),K.addPass(new Wr);let R=()=>K.setSize(window.innerWidth,window.innerHeight);return window.addEventListener("resize",R),R(),K}let ve=document.createElement("div");ve.id="tripHud",ve.style.cssText='position:fixed;left:16px;bottom:64px;z-index:20;font:600 14px "Segoe UI",system-ui,sans-serif;color:#fff;text-shadow:0 1px 4px #000;pointer-events:none;display:flex;flex-direction:column;gap:4px',document.body.appendChild(ve);let Pe=0,Ae=document.createElement("div");Ae.style.cssText="position:fixed;inset:0;background:#e8fff0;opacity:0;pointer-events:none;z-index:19",document.body.appendChild(Ae);let $e=t.fov,he=!1;function _e(R,j){ee(R);let Y=D();L.lsd=z(0,Y),L.spd=z(1,Y),L.coke=z(2,Y),L.ket=z(3,Y),L.beer=z(4,Y),L.weed=z(5,Y),he=L.lsd+L.spd+L.coke+L.ket+L.beer+L.weed>.002,pe.enabled=he;for(let O in L)pe.u[O].value=L[O];pe.u.t.value=j,he||(pe.fresh=!0);let U={};for(let O in L)U[O]=Math.min(1.6,L[O]);let W=$e+U.coke*14+U.spd*10-U.ket*12+U.lsd*8*Math.sin(j*.5)+U.beer*3*Math.sin(j*.7)+U.weed*4;if(Math.abs(t.fov-W)>.01&&(t.fov=W,t.updateProjectionMatrix()),he&&(t.rotation.z+=U.beer*.09*Math.sin(j*.8)+U.ket*.22*Math.sin(j*.23)+U.lsd*.06*Math.sin(j*.6),t.rotation.x+=U.beer*.035*Math.sin(j*1.1)+U.ket*.05*Math.sin(j*.31),t.rotation.y+=U.beer*.045*Math.sin(j*.55),t.rotation.z+=U.weed*.03*Math.sin(j*.4),t.position.y+=U.weed*.03*Math.sin(j*.5),t.position.y+=U.spd*.02*Math.sin(j*40)+U.coke*.008*Math.sin(j*33)),i.bloom&&(i.bloom.strength=.42+Math.min(1.2,U.coke*.7+U.lsd*.5+U.spd*.25)),H>0){let O=Math.max(0,1-(Y-H)/1.3);Ae.style.opacity=String(O*.85),O<=0&&(H=0)}if((Pe+=R)>.5){Pe=0;let O=Dl.map((T,M)=>b[M].end>Y?`<span><span style="color:${T.col}">\u25CF</span> ${T.name}${b[M].doses.length>1?" \xD7"+b[M].doses.length:""} ${Math.floor((b[M].end-Y)/60)}:${String(Math.floor((b[M].end-Y)%60)).padStart(2,"0")}</span>`:"").filter(Boolean);ve.innerHTML=O.join("")}}return{collide:P,tick:_e,use:Ce,targets:()=>{let R=[];for(let j of f)R.push(j.hit),j.antiHit&&R.push(j.antiHit);return R},prompt(R,j){let Y=f[R.table],ue=j?"Tippe auf <kbd>E</kbd>":"<kbd>E</kbd>";if(R.anti)return`<b style="color:#39ff88">\u{1F489} Gegenmittel</b><br><small>${ue} = spritzen (hebt alle Drogen auf)</small>`;let U=Y.left.filter(Boolean).length;return`<b style="color:${Y.D.col}">${Y.D.name}</b> <small>\xB7 ${U} von ${Ul} \xFCbrig</small><br><small>${U?ue+" = "+Y.D.verb:"leer \u2013 kommt bald wieder"}</small>`},canAim:R=>{let j=f[R.table];return!!j&&S(j)},speedMul:()=>Math.max(.35,1+Math.min(1.6,L.spd)*.7+Math.min(1.6,L.coke)*.35-Math.min(1.6,L.ket)*.55-Math.min(1.6,L.beer)*.15-Math.min(1.6,L.weed)*.3),jumpMul:()=>1+Math.min(1.6,L.spd)*.3+Math.min(1.6,L.coke)*.15-Math.min(1.6,L.ket)*.2,drift:(R,j)=>{let Y=Math.min(1.6,L.beer)*1.6*Math.sin(j*.9)+Math.min(1.6,L.ket)*1.2*Math.sin(j*.37);Math.abs(Y)>.001&&R.lengthSq()>0&&(R.x+=Math.cos(j*.3)*Y,R.z+=Math.sin(j*.3)*Y)},render(R){return he?(R?R.render():re().render(),!0):!1},state:q,setState:ge,hostTake(R,j){ae(R,j),xe()}}}var rd=[{id:"",name:"Glatze"},{id:"hair_buzzed",name:"Kurz"},{id:"hair_simpleparted",name:"Scheitel"},{id:"hair_long",name:"Lang"},{id:"hair_buns",name:"Dutt"},{id:"hair_buzzedfemale",name:"Kurz (Frau)"}],od=["Kein Oberteil","T-Shirt","Langarm","Tanktop"],ad=["Keine Hose","Shorts","Lange Hose"],ld=["Barfu\xDF","Schuhe"],Mn=["#ff2fb0","#20e0ff","#ffe22f","#39ff88","#8a2fff","#ff6a1a","#f2f2f2","#1b1c22","#d81c1c","#2f5dff","#6b4a2e","#7a7f88"],cd=["#2a1d15","#5a3b22","#a8743c","#e8c46a","#0d0d0d","#b8452a","#ff2fb0","#e8e8e8"],ss=[{id:"",name:"Klassisch",kind:"Eigene Frisur & Kleidung"},{id:"remy",name:"Remy",kind:"Realistisch",top:1,parts:[["Oberteil",/^Tops/],["Hose",/^Bottoms/],["Schuhe",/^Shoes/],["Haare",/^Hair/]]},{id:"ch31",name:"Leo",kind:"Realistisch",top:1,parts:[["Pullover",/Sweater|Collar/],["Hose",/Pants/],["Schuhe",/Shoes/],["Haare",/Hair/]]},{id:"ch37",name:"Jody",kind:"Realistisch",top:1,parts:[["Shirt",/Shirt|Zipper/],["Hose",/Pants/],["Schuhe",/Sneakers/],["Haare",/Hair/]]},{id:"ch03",name:"Michelle",kind:"Realistisch"},{id:"soldier",name:"Soldat",kind:"Realistisch"},{id:"swat",name:"SWAT",kind:"Realistisch"},{id:"ch46",name:"Amy",kind:"Comic"},{id:"claire",name:"Claire",kind:"Comic"},{id:"kaya",name:"Rasta",kind:"Comic"},{id:"vegas",name:"Elvis",kind:"Comic"},{id:"ch43",name:"Wrestler",kind:"Comic"},{id:"ch14",name:"Fuchs",kind:"Comic"},{id:"tekmek",name:"TekMek",kind:"Realistisch",classic:1},{id:"hias",name:"HiAS",kind:"Realistisch",classic:1},{id:"ty",name:"Ty",kind:"Comic",top:1,parts:[["Pullover",/UpperBody/],["Hose",/LowerBody/],["Schuhe",/Shoes/],["Haare",/Hair/]]},{id:"granny",name:"Fitness-Oma",kind:"Comic"},{id:"mremireh",name:"Schuhkopf",kind:"Comic"},{id:"ch34",name:"Kobold",kind:"Comic"},{id:"pirate",name:"Pirat",kind:"Comic"},{id:"ch35",name:"Gasmaske",kind:"Realistisch"},{id:"alien",name:"Alien",kind:"Neu"},{id:"bishop",name:"Untoter Bischof",kind:"Neu"},{id:"robe",name:"Kapuzenmantel",kind:"Neu"},{id:"scp173",name:"SCP-173",kind:"Neu"},{id:"stickman",name:"Strichm\xE4nnchen",kind:"Neu"},{id:"nurse",name:"Krankenschwester",kind:"Neu"},{id:"xbot",name:"Roboter",kind:"Comic",parts:[["K\xF6rper",/Beta_Surface|Surface/],["Gelenke",/Joints/]]}],hd=["Keine","Basecap","M\xFCtze","Hut"],ud=["Keine","Sonnenbrille","Party-Brille"],qr={b:"m",s:0,h:"hair_simpleparted",hc:"#2a1d15",beard:0,top:0,tc:"#ff2fb0",bot:0,bc:"#1b1c22",sh:0,shc:"#f2f2f2",ch:"",p:["","","",""],cap:0,capc:"#1b1c22",gl:0,chain:0,bag:0,bagc:"#ff2fb0",spk:0},xm=[[],[1,2],[1,2,3],[1]],ym=[[],[4,5],[4,5,6]],vm=[[],[7]];function En(i){let e=Object.assign({},qr,i||{});e.b=e.b==="f"?"f":"m",e.s=e.s?1:0,rd.some(t=>t.id===e.h)||(e.h=qr.h);for(let t of["top","bot","sh"])e[t]=Math.max(0,Math.min(t==="top"?3:t==="bot"?2:1,e[t]|0));for(let t of["hc","tc","bc","shc"])/^#[0-9a-f]{6}$/i.test(e[t]||"")||(e[t]=qr[t]);e.beard=e.beard&&e.b==="m"?1:0,ss.some(t=>t.id===e.ch)||(e.ch=""),e.p=[0,1,2,3].map(t=>Array.isArray(e.p)&&/^#[0-9a-f]{6}$/i.test(e.p[t]||"")?e.p[t]:""),e.cap=Math.max(0,Math.min(hd.length-1,e.cap|0)),e.gl=Math.max(0,Math.min(ud.length-1,e.gl|0)),e.chain=e.chain?1:0,e.bag=e.bag?1:0,e.spk=e.spk?1:0;for(let t of["capc","bagc"])/^#[0-9a-f]{6}$/i.test(e[t]||"")||(e[t]=qr[t]);return e.km=e.ch==="hias"&&e.km?e.km===2?2:1:0,e.kr=e.ch==="hias"&&e.kr?1:0,e.ks=e.ch==="hias"&&e.ks?1:0,e}function _m(i=Math.random,e=!0,t=!0){let n=i()<.5?"m":"f",s=a=>a[Math.floor(i()*a.length)],r=n==="m"?["hair_buzzed","hair_simpleparted","hair_long","","hair_buzzed"]:["hair_long","hair_buns","hair_buzzedfemale","hair_long","hair_simpleparted"],o={b:n,s:i()<.4?1:0,h:s(r),hc:s(cd),beard:n==="m"&&i()<.35?1:0,top:e?1+Math.floor(i()*3):0,tc:s(Mn),bot:e?1+Math.floor(i()*2):0,bc:s(["#1b1c22","#23314f","#3a2e22","#4a4f58","#111111","#6b4a2e"]),sh:e?1:0,shc:s(["#f2f2f2","#111111","#ff2fb0","#20e0ff"])};return e&&(i()<.18&&(o.cap=1+Math.floor(i()*3),o.capc=s(Mn)),i()<.15&&(o.gl=1+Math.floor(i()*2)),i()<.12&&(o.chain=1)),e&&t&&i()<.35&&(o.ch=s(["remy","ch31","ch37","ch03","ch46","claire","kaya","vegas","ch43","ch14","ty","granny","mremireh","ch34","pirate","ch35","tekmek","hias"])),o}async function Mm(i="/System/figuren/"){let e=new Or,t=p=>new Promise((y,_)=>{let v=new Image;v.onload=()=>y(v),v.onerror=_,v.src=i+p}),[n,s,...r]=await Promise.all([e.loadAsync(i+"mann.gltf"),e.loadAsync(i+"frau.gltf"),...["hair_buzzed","hair_simpleparted","hair_long","hair_buns","hair_buzzedfemale","hair_beard"].map(p=>e.loadAsync(i+p+".gltf"))]),[o,a,l,c,u,h]=await Promise.all(["m_skin0.jpg","m_skin1.jpg","f_skin0.jpg","f_skin1.jpg","m_mask.png","f_mask.png"].map(t)),d=p=>{let y=document.createElement("canvas");y.width=p.width,y.height=p.height;let _=y.getContext("2d");return _.drawImage(p,0,0),_.getImageData(0,0,y.width,y.height)},f={};["hair_buzzed","hair_simpleparted","hair_long","hair_buns","hair_buzzedfemale","hair_beard"].forEach((p,y)=>f[p]=r[y]);let g=new dn().setFromObject(n.scene),x=1.8/(g.max.y-g.min.y),m={body:{m:n,f:s},hair:f,skins:{m:[d(o),d(a)],f:[d(l),d(c)]},masks:{m:d(u),f:d(h)},scale:x,tex:new Map,mats:new Map};try{let p=i+"mx/",y=await e.loadAsync(p+"anims.glb"),_=y.scene.getObjectByName("mixamorigHips"),v=m.mx={base:p,L:e,clips:{},xHip:_?_.position.length():1,chars:{xbot:y},wait:{},cache:new Map};for(let E of y.animations)v.clips[E.name]=E;let w=(()=>{try{return(JSON.parse(localStorage.getItem("operation-hias")||"{}").look||{}).ch||""}catch{return""}})();for(let E of ss)E.id&&E.id!=="xbot"&&!E.classic&&Zo(m,E.id);w&&v.wait[w]&&await Promise.race([v.wait[w],new Promise(E=>setTimeout(E,9e3))])}catch(p){console.warn("Neue Figuren fehlen",p)}return m}var Em=new Set(["tekmek","hias"]);var SE={b:"m",h:"hair_long",hc:"#2b1d12",beard:1,dreads:1},TE={b:"m",s:1,h:"hair_buzzed",hc:"#7a5c40",beard:1,stub:1,fair:1,dreads:0},bm={tekmek:{top:1,tc:"#efefea",bot:2,bc:"#141414",sh:1,shc:"#1a1a1a",print:"",s:0},hias:{top:1,tc:"#121212",bot:1,bc:"#141414",sh:1,shc:"#1a1a1a",print:"blocks",s:0}};function Zo(i,e){if(Em.has(e))return Promise.resolve(null);let t=i&&i.mx;return!t||!e?Promise.resolve(null):t.chars[e]?Promise.resolve(t.chars[e]):(t.wait[e]||(t.wait[e]=t.L.loadAsync(t.base+e+".glb").then(n=>(n.scene.traverse(s=>{let r=s.material?Array.isArray(s.material)?s.material:[s.material]:[];for(let o of r)o.metalness>.15&&(o.metalness=.15,o.needsUpdate=!0)}),t.chars[e]=n)).catch(n=>(console.warn("Figur fehlt",e,n),null))),t.wait[e])}var Yr=(i,e)=>!e||Em.has(e)||!!(i&&i.mx&&i.mx.chars[e]);function wE(i,e){let t=[e.b,e.s,e.top,e.tc,e.bot,e.bc,e.sh,e.shc,e.fair?"f":""].join("|");if(i.tex.has(t))return i.tex.get(t);let n=i.skins[e.b][e.s],s=i.masks[e.b],r=n.width,o=n.height,a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c=l.createImageData(r,o),u=c.data,h=n.data,d=s.data,f=new Array(8).fill(null),g=p=>[parseInt(p.slice(1,3),16),parseInt(p.slice(3,5),16),parseInt(p.slice(5,7),16)];for(let p of xm[e.top])f[p]=g(e.tc);for(let p of ym[e.bot])f[p]=g(e.bc);for(let p of vm[e.sh])f[p]=g(e.shc);let x=s.width/r;for(let p=0;p<o;p++)for(let y=0;y<r;y++){let _=(p*r+y)*4,v=(Math.floor(p*x)*s.width+Math.floor(y*x))*4,w=Math.round(d[v]/30),E=f[w];if(E){let A=(h[_]+h[_+1]+h[_+2])/765,P=.62+A*.55;u[_]=Math.min(255,E[0]*P),u[_+1]=Math.min(255,E[1]*P),u[_+2]=Math.min(255,E[2]*P)}else if(Math.abs(h[_]-h[_+1])<14&&Math.abs(h[_+1]-h[_+2])<14&&h[_]>80){let A=18+(h[_]-80)*.18;u[_]=A,u[_+1]=A,u[_+2]=A+3}else e.fair?(u[_]=Math.min(255,h[_]*1.22+22),u[_+1]=Math.min(255,h[_+1]*1.24+16),u[_+2]=Math.min(255,h[_+2]*1.26+12)):(u[_]=h[_],u[_+1]=h[_+1],u[_+2]=h[_+2]);u[_+3]=255}l.putImageData(c,0,0);let m=new tn(a);return m.flipY=!1,m.colorSpace=ht,m.anisotropy=4,i.tex.set(t,m),m}function lm(i,e,t,n,s,r=1){for(let o of e.scene.getObjectsByProperty("isSkinnedMesh",!0)){let a=new ye({map:o.material.map,color:new Re(s).multiplyScalar(2.2),roughness:.75,side:Pt,transparent:r<1,opacity:r,depthWrite:r>=1}),l=new Rr(o.geometry,a),c=o.skeleton.bones.map(u=>t[u.name]||t.Head);l.bind(new Cr(c,o.skeleton.boneInverses),o.bindMatrix),l.frustumCulled=!1,l.castShadow=!0,n.add(l)}}function Ol(i,e,t=!1){let n=En(e);if(n.ch==="tekmek"?n=Object.assign({},n,SE,{ch:""}):n.ch==="hias"&&(n=Object.assign({},n,TE,{ch:""}),n.km&&Object.assign(n,{print:"",spk:0,chain:0,bag:0}),n.kr&&(n.cap=0)),n.ch&&i.mx&&i.mx.chars[n.ch]){n.spk&&(ss.find(o=>o.id===n.ch)||{}).top&&(n=Object.assign({},n,{p:n.p.slice()}),n.p[0]="#151515");let r=CE(i,n,t);return n.spk?Xr(r,n.ch):n.print==="burger"?Xr(r,n.ch,um()):n.print==="blocks"&&Xr(r,n.ch,dm()),cm(r,n,!0),n.dreads&&fm(r,n,!0),r}n.spk&&(n=Object.assign({},n,{top:1,tc:"#151515"}));let s=AE(i,n,t);return n.spk?Xr(s,"c"+n.b):n.print==="burger"?Xr(s,"c"+n.b,um()):n.print==="blocks"&&Xr(s,"c"+n.b,dm()),cm(s,n,!1),n.km&&NE(s,n.km===2),n.ks&&HE(s),n.kr&&kE(s),n.dreads&&fm(s,n,!1),s}function AE(i,e,t){let n=Yo(i.body[e.b].scene);n.scale.setScalar(i.scale);let s={};n.traverse(l=>{l.isBone&&(s[l.name]=l)});let r=[],o=null,a=new Re(e.hc).multiplyScalar(2.2);return n.traverse(l=>{if(!(l.isSkinnedMesh||l.isMesh))return;l.frustumCulled=!1,l.castShadow=!0;let c=l.material&&l.material.name||"";if(/Superhero/i.test(c)){o=l.parent;let u="body|"+[e.b,e.s,e.top,e.tc,e.bot,e.bc,e.sh,e.shc,e.fair?"f":""].join("|"),h=t&&i.mats.get(u);h||(h=l.material.clone(),h.map=wE(i,e),h.roughness=.62,h.metalness=0,h.needsUpdate=!0,t&&i.mats.set(u,h)),l.material=h,r.push(h)}else/Hair/i.test(c)&&(l.material=l.material.clone(),l.material.color=a.clone())}),o=o||n,e.h&&i.hair[e.h]&&lm(i,i.hair[e.h],s,o,e.hc),e.beard&&i.hair.hair_beard&&lm(i,i.hair.hair_beard,s,o,e.stub?"#6e5236":e.hc,e.stub?.4:1),{m:n,bones:s,mats:r,look:e}}var id={Head:"mixamorigHead",neck_01:"mixamorigNeck",spine_03:"mixamorigSpine2",spine_02:"mixamorigSpine1",spine_01:"mixamorigSpine",pelvis:"mixamorigHips",hand_r:"mixamorigRightHand",hand_l:"mixamorigLeftHand",foot_r:"mixamorigRightFoot",foot_l:"mixamorigLeftFoot"};function RE(i,e){let t=i.clone();return t.color=new Re(e),t.userData.tint=1,t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
 vec4 sampledDiffuseColor = texture2D( map, vMapUv );
 float lumT = dot( sampledDiffuseColor.rgb, vec3( 0.299, 0.587, 0.114 ) );
 diffuseColor.rgb *= vec3( 0.18 + lumT * 1.5 );
 diffuseColor.a *= sampledDiffuseColor.a;
#endif`)},t.customProgramCacheKey=()=>"tint",t}function CE(i,e,t){let n=i.mx,s=n.chars[e.ch],r=ss.find(h=>h.id===e.ch)||{},o=Yo(s.scene),a={};o.traverse(h=>{h.isBone&&(a[h.name]=h)});for(let h in id)a[id[h]]&&(a[h]=a[id[h]]);let l=[];o.traverse(h=>{if(!(h.isSkinnedMesh||h.isMesh))return;h.frustumCulled=!1,h.castShadow=!0;let d=(r.parts||[]).findIndex(([,f])=>f.test(h.name)||f.test(h.material&&h.material.name||""));if(d>=0&&e.p[d]){let f=e.ch+"|"+h.name+"|"+e.p[d],g=t&&i.mats.get(f);g||(g=RE(h.material,e.p[d]),t&&i.mats.set(f,g)),h.material=g}h.material&&h.material.map&&(h.material.map.anisotropy=4),l.push(h.material)});let c=a.mixamorigHips;o.userData.mxRig={id:e.ch,ratio:c?c.position.length()/n.xHip:1,mx:n},o.scale.setScalar(1),o.updateMatrixWorld(!0);let u=(a.Head||c||o).getWorldScale(new I).x||1;return{m:o,bones:a,mats:l,look:e,mx:!0,inv:1/u}}var PE=[[/Death/i,"die"],[/Hit/i,"hit"],[/Sprint/i,"sprint"],[/Jog|Run/i,"run"],[/Crouch_Fwd/i,"sneak"],[/Crouch|Fixing|Kneel/i,"crouch"],[/Walk/i,"walk"],[/Jump/i,"jump"],[/Dance/i,"dance"],[/Driv/i,"drive"],[/Sit/i,"sit"],[/Wave/i,"wave"],[/Interact|Push|Punch|PickUp|Spell|Sword/i,"use"]];function IE(i,e){let t=i.id+"|"+e.uuid,n=i.mx.cache.get(t);if(n)return n;let s=i.mx.clips[e.name]?e.name:"idle";if(!i.mx.clips[e.name]){for(let[o,a]of PE)if(o.test(e.name)){s=a;break}}let r=i.mx.clips[s]||i.mx.clips.idle;return n=new si(e.name+"@mx",r.duration,r.tracks.filter(o=>o.name.endsWith(".quaternion")||o.name==="mixamorigHips.position").map(o=>{if(o.name!=="mixamorigHips.position")return o;let a=o.clone();for(let l=0;l<a.values.length;l++)a.values[l]*=i.ratio;return a})),n.userData={mx:1},i.mx.cache.set(t,n),n}if(!Un.prototype.__mxPatch){let i=Un.prototype.clipAction;Un.prototype.clipAction=function(e,t,n){let s=t||this._root,r=s&&s.userData&&s.userData.mxRig;return r&&e&&!(e.userData&&e.userData.mx)&&(e=IE(r,typeof e=="string"?si.findByName(s,e)||{name:e,uuid:e}:e)),i.call(this,e,t,n)},Un.prototype.__mxPatch=1}var sd=new Map,rn=(i,e={})=>{let t=i+JSON.stringify(e);return sd.has(t)||sd.set(t,new ye(Object.assign({color:i,roughness:.6},e))),sd.get(t)};function cm(i,e,t){if(!e.cap&&!e.gl&&!e.chain&&!e.bag)return;let n=i.bones,s=n.Head,r=i.m;r.updateMatrixWorld(!0);let o=d=>d.getWorldPosition(new I),a=.24;t&&n.mixamorigHeadTop_End&&s&&(a=o(n.mixamorigHeadTop_End).distanceTo(o(s))||.24);let l=(d,f,g)=>{if(!d)return;let x=d.getWorldQuaternion(new It),m=d.getWorldScale(new I);f.position.copy(d.worldToLocal(g.clone())),f.quaternion.copy(x.invert().multiply(f.quaternion)),f.scale.divide(m),f.castShadow=!0,d.add(f)},c=()=>{let d=a*.62;return t||(d=.118),d};if(s){let d=o(s),f=c(),g=d.clone().add(new I(0,t?a*.72:.12,t?0:.005));if(e.cap===1){let x=new Xe,m=new F(new pt(f*1.05,18,10,0,Math.PI*2,0,Math.PI/2),rn(e.capc));m.scale.y=.72,x.add(m);let p=new F(new je(f*.9,f*.9,f*.06,18,1,!1,-Math.PI/2,Math.PI),rn(e.capc));p.scale.set(1,1,.75),p.position.set(0,0,f*.55),x.add(p);let y=new F(new pt(f*.08,8,6),rn(e.capc));y.position.y=f*.74,x.add(y),l(s,x,g.clone().add(new I(0,-f*.18,0)))}if(e.cap===2){let x=new Xe,m=new F(new pt(f*1.07,18,12,0,Math.PI*2,0,Math.PI*.55),rn(e.capc,{roughness:.95}));m.scale.y=.95,x.add(m);let p=new F(new Wt(f*1.02,f*.12,8,24),rn(e.capc,{roughness:.95}));p.rotation.x=Math.PI/2,p.position.y=f*.12,x.add(p);let y=new F(new pt(f*.25,10,8),rn("#f2f2f2",{roughness:1}));y.position.y=f*1.05,x.add(y),l(s,x,g.clone().add(new I(0,-f*.32,0)))}if(e.cap===3){let x=new Xe,m=new F(new je(f*.82,f*.98,f*.85,18),rn(e.capc));m.position.y=f*.42,x.add(m);let p=new F(new je(f*1.75,f*1.75,f*.06,24),rn(e.capc));x.add(p);let y=new F(new je(f*.99,f*.99,f*.18,18,1,!0),rn("#111111"));y.position.y=f*.12,x.add(y),l(s,x,g.clone().add(new I(0,-f*.08,0)))}if(e.gl){let x=new Xe,m=e.gl===1?rn("#050508",{roughness:.05,metalness:.8}):new Ue({color:[16723888,2154751,3800968][(e.capc||"").length%3],toneMapped:!1});for(let y of[-1,1]){let _=new F(e.gl===1?new pt(f*.34,14,10):new je(f*.33,f*.33,f*.06,5),m);e.gl===1?_.scale.set(1.15,.8,.35):_.rotation.x=Math.PI/2,_.position.set(y*f*.42,0,0),x.add(_)}let p=new F(new Oe(f*1.6,f*.06,f*.05),rn("#111111"));p.position.y=f*.1,x.add(p);for(let y of[-1,1]){let _=new F(new Oe(f*.05,f*.05,f*.95),rn("#111111"));_.position.set(y*f*.82,f*.08,-f*.48),x.add(_)}l(s,x,d.clone().add(new I(0,t?a*.36:.075,t?f*.98:.105)))}}let u=n.neck_01||s,h=n.spine_03;if(e.chain&&u){let d=o(u),f=t?Math.max(.1,a*.55):.11,g=new F(new Wt(f,f*.07,6,28),rn("#e8c45a",{metalness:1,roughness:.25}));g.rotation.x=Math.PI/2+.5;let x=new F(new je(f*.22,f*.22,f*.06,12),rn("#e8c45a",{metalness:1,roughness:.2}));x.rotation.x=Math.PI/2-.3,x.position.set(0,-f*.72,f*.9);let m=new Xe;m.add(g,x);let p=d.clone().add(new I(0,-f*.55,f*.35));if(t){let y=d.y-f*.95,_=-1e9,v=new I;r.traverse(w=>{if(!w.isMesh||!w.geometry||!w.geometry.attributes.position)return;w.isSkinnedMesh&&w.skeleton.update();let E=w.geometry.attributes.position,A=Math.max(1,Math.floor(E.count/8e3));for(let P=0;P<E.count;P+=A)w.getVertexPosition(P,v).applyMatrix4(w.matrixWorld),Math.abs(v.y-y)<.035&&Math.abs(v.x-d.x)<.05&&(_=Math.max(_,v.z))}),_>-1e8&&(p=new I(d.x,y+f*.48,_+.035-f*.88))}l(u,m,p)}if(e.bag&&h){let d=o(h),f=t?a*1.1:.24,g=new Xe,x=new F(new Oe(f*1.3,f*1.6,f*.6),rn(e.bagc));g.add(x);let m=new F(new Oe(f*1,f*.6,f*.25),rn(e.bagc));m.position.set(0,-f*.35,-f*.4),g.add(m);for(let p of[-1,1]){let y=new F(new Oe(f*.12,f*1.7,f*.05),rn("#151515"));y.position.set(p*f*.42,0,f*.32),g.add(y)}l(h,g,d.clone().add(new I(0,-f*.1,-f*.62)))}}var Nl=null,kl=null,hm=new Map,LE="/SPK%20-%20Fuck%20the%20Police/spiel/assets/spk_logo.png";function DE(){if(kl)return kl;let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");(()=>{e.clearRect(0,0,256,256),e.fillStyle="#f2f2f2",e.font="900 78px Arial Black, Arial, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("S.P.K",128,128)})(),Nl=new tn(i),Nl.colorSpace=ht;try{let n=new Image;n.onload=()=>{e.clearRect(0,0,256,256);let s=Math.min(240/n.width,240/n.height),r=n.width*s,o=n.height*s;e.drawImage(n,128-r/2,128-o/2,r,o),Nl.needsUpdate=!0},n.src=LE}catch{}return kl=new ye({map:Nl,transparent:!0,alphaTest:.05,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),kl}function Xr(i,e,t){let n=i.m,s=i.bones.spine_03||i.bones.spine_02;if(!s)return;n.updateMatrixWorld(!0);let r=s.getWorldPosition(new I),o=n.getWorldPosition(new I),a=hm.get(e);if(!a){let d=r.y-o.y,f=-1e9,g=1e9,x=-1e9,m=new I;n.traverse(y=>{if(!y.isMesh||!y.geometry||!y.geometry.attributes.position)return;let _=y.geometry.attributes.position,v=Math.max(1,Math.floor(_.count/6e3));y.isSkinnedMesh&&y.skeleton.update();for(let w=0;w<_.count;w+=v)y.getVertexPosition(w,m).applyMatrix4(y.matrixWorld).sub(o),Math.abs(m.y-d)<.07&&Math.abs(m.x)<.25&&(Math.abs(m.x)<.05&&(f=Math.max(f,m.z)),m.z>0&&(g=Math.min(g,m.x),x=Math.max(x,m.x)))}),f<-1e8&&(f=.12);let p=x>g?x-g:.34;a={z:f,s:Math.max(.1,Math.min(.2,p*.55))},hm.set(e,a)}let l=a.s*(t?1.45:1),c=new F(new at(l,l),t||DE());c.renderOrder=2;let u=s.getWorldQuaternion(new It),h=s.getWorldScale(new I);c.position.copy(s.worldToLocal(new I(o.x,r.y-a.s*(t?.02:.15),o.z+a.z+.018))),c.quaternion.copy(u.invert()),c.scale.divide(h),s.add(c)}var Bl=null;function um(){if(Bl)return Bl;let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d"),t=(s,r,o,a=30)=>{e.fillStyle=o,e.beginPath(),e.roundRect(28,s,200,r,a),e.fill()};t(52,46,"#b98a5a",[60,60,12,12]),t(98,12,"#6fae3c",6),t(110,12,"#c8443a",6),t(122,28,"#4a2c1c",10),t(150,10,"#e8c84a",4),t(160,34,"#b98a5a",[8,8,30,30]),e.fillStyle="#f6e8c8";for(let s=0;s<9;s++)e.beginPath(),e.ellipse(60+s*18,66+s%2*8,4,2,.4,0,7),e.fill();e.fillStyle="#c8302a",e.font="bold 22px Arial",e.textAlign="center",e.fillText("DJ TEKMEK",128,228);let n=new tn(i);return n.colorSpace=ht,Bl=new ye({map:n,transparent:!0,alphaTest:.05,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),Bl}var Hl=null;function dm(){if(Hl)return Hl;let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d"),t=7,n=()=>(t=t*16807%2147483647)/2147483647;e.fillStyle="#ecece6",e.fillRect(34,8,188,240),e.fillStyle="#121212";for(let r=0;r<9;r++){let o=16+r*26+n()*6,a=7+n()*13;e.fillRect(40+n()*24,o,120+n()*56,a)}for(let r=0;r<260;r++)e.fillStyle=n()<.5?"rgba(18,18,18,0.8)":"rgba(236,236,230,0.9)",e.fillRect(34+n()*188,8+n()*240,2+n()*16,1+n()*3);let s=new tn(i);return s.colorSpace=ht,Hl=new ye({map:s,transparent:!0,alphaTest:.05,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),Hl}function fm(i,e,t){let n=i.bones.Head;if(!n)return;i.m.updateMatrixWorld(!0);let s=n.getWorldPosition(new I),r=.24;t&&i.bones.mixamorigHeadTop_End&&(r=i.bones.mixamorigHeadTop_End.getWorldPosition(new I).distanceTo(s)||.24);let o=t?r*.5:.1,a=s.y+(t?r*.45:.07),l=new ye({color:new Re(e.hc||"#2b1d12").multiplyScalar(1.6),roughness:.95}),c=n.getWorldQuaternion(new It).invert(),u=n.getWorldScale(new I);for(let h=0;h<16;h++){let d=Math.PI*(.45+h/15*1.1)+Math.sin(h*7.3)*.08,f=h===1||h===14,g=(f?.42:.3)+h*37%10/40,x=new je(.016,.011,g,5);x.translate(0,-g/2,0);let m=new F(x,l);m.castShadow=!0;let p=new I(s.x+Math.sin(d)*o*1.05,a-Math.abs(Math.cos(d))*.02,s.z+Math.cos(d)*o*1.05);m.position.copy(n.worldToLocal(p.clone()));let y=new It().setFromEuler(new Ln(f?-.45:-Math.cos(d)*.25,0,Math.sin(d)*(f?.1:.25)));m.quaternion.copy(c.clone().multiply(y)),m.scale.set(1/u.x,1/u.y,1/u.z),n.add(m)}}var pm=[[196,204,216],[130,96,210],[214,182,92],[232,234,240],[70,160,205]];function UE(i,e,t){let n="alien|"+e.getHexString()+"|"+t.join(",");if(i.tex.has(n))return i.tex.get(n);let s=i.skins.m[0],r=i.masks.m,o=s.width,a=s.height,l=document.createElement("canvas");l.width=o,l.height=a;let c=l.getContext("2d"),u=c.createImageData(o,a),h=u.data,d=s.data,f=r.data,g=r.width/o,x=new Array(8).fill(!1);for(let v of[...xm[2],...ym[2],...vm[1]])x[v]=!0;let m=Math.round(e.r*255),p=Math.round(e.g*255),y=Math.round(e.b*255);for(let v=0;v<a;v++)for(let w=0;w<o;w++){let E=(v*o+w)*4,A=(Math.floor(v*g)*r.width+Math.floor(w*g))*4,P=Math.round(f[A]/30),S=(d[E]+d[E+1]+d[E+2])/765;if(x[P]){let b=.55+S*.6,L=v%64<3?.75:1;h[E]=Math.min(255,t[0]*b*L),h[E+1]=Math.min(255,t[1]*b*L),h[E+2]=Math.min(255,t[2]*b*L)}else{let b=.45+S*.85;h[E]=Math.min(255,m*b),h[E+1]=Math.min(255,p*b),h[E+2]=Math.min(255,y*b)}h[E+3]=255}c.putImageData(u,0,0);let _=new tn(l);return _.flipY=!1,_.colorSpace=ht,_.anisotropy=4,i.tex.set(n,_),_}var mm=[8377946,5887648,10933834,4901064,10124799,7001706,14075978,5944575,14052020,4904570];function Sm(i,e=0){let t=Ol(i,{b:"m",s:0,h:"",top:0,bot:0,sh:0},!1),n=new Re(mm[e%mm.length]),s=new ye({map:UE(i,n,pm[e%pm.length]),roughness:.42,metalness:.2,emissive:n,emissiveIntensity:.08});t.m.traverse(o=>{if(!(o.isSkinnedMesh||o.isMesh))return;let a=o.material&&o.material.name||"";/Superhero/i.test(a)?o.material=s:o.visible=!1});let r=t.bones.Head;if(r){t.m.updateMatrixWorld(!0);let o=new I,a=new It,l=new I;r.matrixWorld.decompose(o,a,l);let c=t.m.scale.x,u=a.clone().invert(),h=(x,m,p=0)=>{let y=o.clone().add(m.clone().multiplyScalar(1));x.position.copy(r.worldToLocal(y));let _=new It().setFromEuler(new Ln(0,0,p));x.quaternion.copy(u.clone().multiply(_)),x.scale.divideScalar(l.x),r.add(x)},d=new ye({color:328968,roughness:.05,metalness:.7});for(let x of[-1,1]){let m=new F(new pt(.035,16,12),d);m.scale.set(1.15,.62,.5),h(m,new I(x*.042,.075,.095),x*.45)}let f=new ye({color:n,roughness:.4}),g=new Ue({color:11992970,toneMapped:!1});for(let x of[-1,1]){let m=new F(new je(.006,.008,.16,6),f);h(m,new I(x*.04,.25,0),-x*.3);let p=new F(new pt(.022,10,8),g);h(p,new I(x*.065,.33,0))}r.scale.multiplyScalar(1.45)}return t}var $t={};function zl(){if($t.velvet)return $t;let i=(t,n,s)=>{let r=document.createElement("canvas");r.width=t,r.height=n,s(r.getContext("2d"),t,n);let o=new tn(r);return o.colorSpace=ht,o.anisotropy=4,o};$t.velvet=i(1024,1024,(t,n,s)=>{let r=t.createLinearGradient(0,0,n,0);r.addColorStop(0,"#5a0712"),r.addColorStop(.5,"#7a0c1a"),r.addColorStop(1,"#5a0712"),t.fillStyle=r,t.fillRect(0,0,n,s);for(let a=0;a<26e3;a++){let l=Math.random();t.fillStyle=l<.5?"rgba(30,0,4,.18)":"rgba(190,40,60,.12)",t.fillRect(Math.random()*n,Math.random()*s,1.5,3)}for(let a=0;a<18;a++){let l=Math.random()*n,c=t.createLinearGradient(l-30,0,l+30,0);c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(.5,"rgba(20,0,4,.28)"),c.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(l-30,0,60,s)}let o=a=>{t.save(),t.fillStyle="#6a0a16",t.fillRect(a,0,110,s),t.strokeStyle="#d9b25a",t.lineWidth=4,t.strokeRect(a+6,-5,98,s+10),t.strokeStyle="#e6c46e",t.fillStyle="#e6c46e",t.lineWidth=3.5;for(let l=0;l<s;l+=64){let c=a+55;t.beginPath(),t.moveTo(c,l),t.bezierCurveTo(c+34,l+14,c-34,l+46,c,l+64),t.stroke();for(let u of[-1,1])t.beginPath(),t.ellipse(c+u*22,l+32,11,5,u*.6,0,7),t.fill(),t.beginPath(),t.arc(c+u*34,l+16,3.5,0,7),t.fill()}t.restore()};o(0),o(n-110),t.strokeStyle="#d9b25a",t.lineWidth=10,t.beginPath(),t.moveTo(0,s-12),t.lineTo(n,s-12),t.stroke()}),$t.lining=i(64,64,t=>{t.fillStyle="#c9a55a",t.fillRect(0,0,64,64);for(let n=0;n<300;n++)t.fillStyle=Math.random()<.5?"rgba(255,240,200,.25)":"rgba(120,80,20,.2)",t.fillRect(Math.random()*64,Math.random()*64,2,2)}),$t.ermine=i(512,512,(t,n,s)=>{t.fillStyle="#f3eee4",t.fillRect(0,0,n,s);for(let r=0;r<9e3;r++)t.fillStyle=Math.random()<.5?"rgba(200,190,170,.25)":"rgba(255,255,255,.5)",t.fillRect(Math.random()*n,Math.random()*s,1,4);t.fillStyle="#121212";for(let r=0;r<6;r++)for(let o=0;o<6;o++){let a=(o+r%2*.5)*n/6+20,l=r*s/6+30;t.beginPath(),t.moveTo(a,l),t.quadraticCurveTo(a+9,l+18,a,l+34),t.quadraticCurveTo(a-9,l+18,a,l),t.fill()}}),$t.ermine.wrapS=$t.ermine.wrapT=wn,$t.hair=(()=>{let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,256,256);for(let r=0;r<14e3;r++){let o=Math.random()*255|0;n.fillStyle=`rgb(${o},${o},${o})`,n.fillRect(Math.random()*256,Math.random()*256,1.3,1.3)}let s=new tn(t);return s.wrapS=s.wrapT=wn,s.repeat.set(6,6),s})(),$t.gold=new ye({color:14463050,metalness:.85,roughness:.24,emissive:3811336,emissiveIntensity:.35}),$t.ruby=new ye({color:11536412,roughness:.1,metalness:.2,emissive:4194312,emissiveIntensity:.6}),$t.velvetM=new xn({map:$t.velvet,roughness:.85,sheen:1,sheenColor:new Re(16734832),sheenRoughness:.42,side:Tn}),$t.liningM=new ye({map:$t.lining,roughness:.35,metalness:.3,side:Gt}),$t.fur=[];let e=9;for(let t=0;t<e;t++){let n=t/(e-1),s=new ye({map:$t.ermine,alphaMap:$t.hair,alphaTest:t?.12+n*.72:0,roughness:.95,color:new Re().setScalar(.62+n*.4),side:Pt});$t.fur.push(s)}return $t}function gm(i,e,t){let n=zl();i.computeVertexNormals();let s=i.attributes.position,r=i.attributes.normal;n.fur.forEach((o,a)=>{let l=i.clone(),c=l.attributes.position,u=e*a/(n.fur.length-1);for(let d=0;d<c.count;d++)c.setXYZ(d,s.getX(d)+r.getX(d)*u,s.getY(d)+r.getY(d)*u-u*u*3,s.getZ(d)+r.getZ(d)*u);let h=new F(l,o);h.castShadow=a===0,h.renderOrder=a,t.add(h)})}function Fl(i,e,t){let n=[],s=[],r=[];for(let a=0;a<=e;a++)for(let l=0;l<=i;l++){let c=l/i,u=a/e,[h,d,f]=t(c,u);n.push(h,d,f),s.push(c,1-u)}for(let a=0;a<e;a++)for(let l=0;l<i;l++){let c=a*(i+1)+l,u=c+1,h=c+i+1,d=h+1;r.push(c,h,u,u,h,d)}let o=new Tt;return o.setAttribute("position",new Qe(n,3)),o.setAttribute("uv",new Qe(s,2)),o.setIndex(r),o.computeVertexNormals(),o}function Tm(i,e){let t=i.getWorldQuaternion(new It),n=i.getWorldScale(new I);e.position.copy(i.worldToLocal(new I(0,0,0))),e.quaternion.copy(t.invert()),e.scale.set(1/n.x,1/n.y,1/n.z),i.add(e)}function NE(i,e){let t=i.bones,n=zl();i.m.updateMatrixWorld(!0);let s=A=>A.getWorldPosition(new I),r=t.spine_03||t.spine_02,o=t.neck_01||t.Head;if(!r||!o)return;let a=s(o),l=t.upperarm_l,c=t.upperarm_r,u=l&&c?s(l).distanceTo(s(c))/2:.17,h=a.x,d=a.z-.015,f=a.y-.17,g=.09,x=A=>Math.PI*(e?.9-.08*A:.6-.08*A),m=(A,P,S)=>{let b=Math.pow(P,.9),L=u*1.22+(.31-u*1.22)*b,H=u*.7+(.26-u*.7)*b,D=1+(.012+.045*P)*Math.sin(A*13+P*2)+.02*P*Math.sin(A*5.3)+S;return[h+Math.sin(A)*L*D,f+(g-f)*P,d-.02*P+Math.cos(A)*H*D]},p=A=>(P,S)=>m(Math.PI+(P*2-1)*x(S),S,-A),y=new Xe,_=[],v=new F(Fl(64,30,p(0)),n.velvetM),w=new F(Fl(64,30,p(.012)),n.liningM);v.castShadow=!0,y.add(v,w),_.push(v,w);for(let A of[-1,1]){let S=Fl(6,30,(H,D)=>m(Math.PI+A*x(D)-A*.15*H,D,.012)),b=S.attributes.uv;for(let H=0;H<b.count;H++)b.setXY(H,b.getX(H)*.35,b.getY(H)*4);let L=y.children.length;gm(S,.026,y);for(let H=L;H<y.children.length;H++)_.push(y.children[H])}if(!e){let A=_.map(D=>D.geometry.attributes.position.array.slice()),P=_.map(D=>{let B=D.geometry.attributes.position.array,z=new Float32Array(B.length/3);for(let k=0;k<z.length;k++)z[k]=Math.pow(Math.max(0,Math.min(1,(f-B[k*3+1])/(f-g))),1.5);return z}),S=0,b=null,L=0,H=new I;v.onBeforeRender=()=>{let D=performance.now()/1e3;if(D-S<.012)return;let B=Math.min(.1,D-S);if(S=D,y.getWorldPosition(H),b){let te=Math.hypot(H.x-b.x,H.z-b.z)/Math.max(B,.001);L+=(Math.min(te,6)-L)*Math.min(1,B*4)}b=H.clone();let z=Math.min(.16,L*.035),k=.012+Math.min(.03,L*.008);_.forEach((te,q)=>{let ge=te.geometry.attributes.position.array,xe=A[q],ae=P[q];for(let Ce=0;Ce<ae.length;Ce++){let Ye=Ce*3,ee=ae[Ce];if(!ee)continue;let pe=xe[Ye+1],K=xe[Ye];ge[Ye]=K+Math.sin(D*1.3+pe*2.6+K*3)*k*.7*ee,ge[Ye+1]=pe+z*ee*ee*.35,ge[Ye+2]=xe[Ye+2]-z*ee+Math.sin(D*1.7+pe*3.2+K*2)*k*ee}te.geometry.attributes.position.needsUpdate=!0})},v.frustumCulled=!1}let E=(A,P)=>{let S=.42+A*(Math.PI*2-.84),b=.078+(u*1.5-.078)*Math.min(1,P*1.45),L=a.y+.035-P*.27-Math.max(0,P-.55)*.07;return[h+Math.sin(S)*b,L,d+.01+Math.cos(S)*b*.78]};{let A=Fl(48,12,E),P=A.attributes.uv;for(let S=0;S<P.count;S++)P.setXY(S,P.getX(S)*3,P.getY(S)*.8);gm(A,.03,y)}{let A=new F(new Wt(.115,.007,6,40,Math.PI),n.gold);A.rotation.set(.35,0,Math.PI),A.position.set(h,a.y-.06,d+.07),y.add(A);for(let b=0;b<7;b++){let L=Math.PI*(.12+.76*b/6),H=new F(new pt(.008,8,6),n.ruby);H.position.set(h+Math.cos(L)*.115,a.y-.06-Math.sin(L)*.115*Math.cos(.35),d+.07+Math.sin(L)*.115*Math.sin(.35)),y.add(H)}let P=new F(new je(.032,.032,.008,24),n.gold);P.rotation.x=Math.PI/2-.25,P.position.set(h,a.y-.185,d+.115),y.add(P);let S=new F(new pt(.012,10,8),n.ruby);S.position.set(h,a.y-.185,d+.122),y.add(S)}Tm(r,y)}function kE(i){let e=i.bones,t=zl(),n=e.Head;if(!n)return;i.m.updateMatrixWorld(!0);let s=n.getWorldPosition(new I),r=new Xe,o=.102,a=new F(new je(o*1.04,o,.05,32,1,!0),t.gold);a.position.y=.025,r.add(a);for(let f of[.002,.048]){let g=new F(new Wt(o*(f?1.04:1),.005,6,32),t.gold);g.rotation.x=Math.PI/2,g.position.y=f,r.add(g)}let l=new F(new pt(o*.98,24,10,0,Math.PI*2,0,Math.PI/2),t.velvetM);l.scale.y=.75,l.position.y=.035,r.add(l);for(let f=0;f<8;f++){let g=f/8*Math.PI*2,x=Math.cos(g),m=Math.sin(g),p=new F(new Is(.016,.06,4),t.gold);p.position.set(x*o*1.03,.078,m*o*1.03),r.add(p);let y=new F(new pt(.009,8,6),new ye({color:16183524,roughness:.25}));y.position.set(x*o*1.03,.112,m*o*1.03),r.add(y);let _=new F(new pt(.011,10,8),f%2?t.ruby:new ye({color:1065152,roughness:.1,emissive:530496,emissiveIntensity:.6}));_.position.set(x*o*1.06,.025,m*o*1.06),r.add(_)}for(let f of[0,Math.PI/2]){let g=new F(new Wt(o*.98,.006,6,24,Math.PI),t.gold);g.rotation.y=f,g.scale.y=.8,g.position.y=.04,r.add(g)}let c=new F(new pt(.016,12,10),t.gold);c.position.y=.04+o*.8+.014,r.add(c);let u=new F(new Oe(.006,.04,.006),t.gold);u.position.y=c.position.y+.028,r.add(u);let h=new F(new Oe(.026,.006,.006),t.gold);h.position.y=c.position.y+.032,r.add(h),r.traverse(f=>{f.isMesh&&(f.castShadow=!0)});let d=new Xe;d.add(r),r.position.set(s.x,s.y+BE,s.z-.005),r.rotation.x=-.12,Tm(n,d)}var BE=.15;function HE(i){let e=i.bones,t=zl();i.m.updateMatrixWorld(!0);let n=e.hand_l,s=e.lowerarm_l;if(!n||!s)return;let r=new Xe,o=(x,m,p)=>{let y=new F(x,m);return y.position.y=p,y.castShadow=!0,r.add(y),y};o(new je(.011,.013,.66,14),t.gold,.08);for(let x of[-.2,0,.22,.33])o(new Wt(.014,.004,6,16),t.gold,x).rotation.x=Math.PI/2;o(new pt(.022,14,10),t.gold,-.26),o(new je(.02,.012,.05,12),t.gold,.39);let a=o(new pt(.036,18,14),t.gold,.44);o(new Wt(.037,.005,6,24),t.gold,.44);for(let x=0;x<4;x++){let m=x*Math.PI/2,p=new F(new Is(.012,.05,8),t.gold);p.position.set(Math.cos(m)*.03,.49,Math.sin(m)*.03),p.rotation.set(Math.sin(m)*.5,0,-Math.cos(m)*.5),r.add(p)}o(new Oe(.008,.07,.008),t.gold,.52),o(new Oe(.04,.008,.008),t.gold,.53);for(let[x,m]of[[0,1],[0,-1],[1,0],[-1,0]]){let p=new F(new pt(.009,8,6),t.ruby);p.position.set(x*.036,.44,m*.036),r.add(p)}let l=e.middle_01_l,c=new It().setFromUnitVectors(new I(0,1,0),new I(0,.85,-.5).normalize()),u=new I,h=new I,d=new It,f=new It;i.m.add(r);let g=r.updateMatrixWorld.bind(r);r.updateMatrixWorld=x=>{n.getWorldPosition(u),l&&(l.getWorldPosition(h),u.lerp(h,.55)),i.m.worldToLocal(u),r.position.copy(u),r.scale.set(1/i.m.scale.x,1/i.m.scale.y,1/i.m.scale.z),i.m.getWorldQuaternion(d),i.m.parent?i.m.parent.getWorldQuaternion(f):f.identity(),r.quaternion.copy(d.invert()).multiply(f).multiply(c),g(!0)}}var Gl=["Waldrave Acid","Blaulicht Hardtechno","Sonnenaufgang","Schranz Attacke","Hardtekk SPK","Acid Nacht","Minimal im Unterholz","Industrial Wald","Vinc Rec 1","Domschi nerv\xF6s \u2013 Teil 1","Domschi nerv\xF6s \u2013 Teil 2","Domschi nerv\xF6s \u2013 Teil 3","Domschi nerv\xF6s \u2013 Teil 4","Domschi nerv\xF6s \u2013 Teil 5","Domschi nerv\xF6s \u2013 Teil 6","Domschi nerv\xF6s \u2013 Teil 7","Domschi nerv\xF6s \u2013 Teil 8","Domschi nerv\xF6s \u2013 Teil 9","Domschi nerv\xF6s \u2013 Teil 10","Domschi nerv\xF6s \u2013 Teil 11","Domschi nerv\xF6s \u2013 Teil 12","Domschi nerv\xF6s \u2013 Teil 13","Domschi nerv\xF6s \u2013 Teil 14","Domschi nerv\xF6s \u2013 Teil 15","Domschi nerv\xF6s \u2013 Teil 16"],Vl=Gl.length,FE=i=>{let e;do e=Math.random()*Vl|0;while(e===i);return e},OE=i=>encodeURI("/SPK - Fuck the Police/spiel/musik/tekkno"+(i+1)+".mp3"),wm=5;function Am(i){let{scene:e,camera:t,me:n,djFrames:s,net:r,toast:o,canvasTex:a,$:l}=i,c=i.CL,u=i.FIG,h=new I(0,0,8.6),d={waves:0,rad:{s:0,p:!0,v:.7,o:0,at:0},jumped:new Set,anims:[],aliens:[],built:!1},f=new Xe;f.visible=!1,e.add(f);{let U=[[0,-.5],[1.8,-.38],[3,-.04],[3.15,.04],[2.8,.25],[1.6,.46],[0,.5]].map(M=>new fe(M[0],M[1])),W=new F(new Ps(U,48),new ye({color:13687012,roughness:.3,metalness:.55,emissive:3819104,emissiveIntensity:.7}));f.add(W);let O=new F(new pt(1.25,32,16,0,Math.PI*2,0,Math.PI/2),new ye({color:8388560,roughness:.05,transparent:!0,opacity:.55,emissive:2792048,emissiveIntensity:.9}));O.position.y=.42,f.add(O),f.rim=[];for(let M=0;M<16;M++){let N=M/16*Math.PI*2,$=new F(new pt(.12,10,8),new Ue({color:16777215,toneMapped:!1}));$.position.set(Math.cos(N)*2.95,.04,Math.sin(N)*2.95),f.add($),f.rim.push($)}let T=new F(new ii(1,32),new Ue({color:11992986,toneMapped:!1}));T.rotation.x=Math.PI/2,T.position.y=-.51,f.add(T)}let g=a(64,256,U=>{let W=U.createLinearGradient(0,0,0,256);W.addColorStop(0,"rgba(255,255,255,0.95)"),W.addColorStop(1,"rgba(255,255,255,0.3)"),U.fillStyle=W,U.fillRect(0,0,64,256);for(let O=0;O<40;O++)U.fillStyle="rgba(255,255,255,0.25)",U.fillRect(Math.random()*64,Math.random()*256,2,30)});g.wrapS=g.wrapT=wn;let x=new Ue({map:g,color:11992986,transparent:!0,opacity:0,blending:ni,depthWrite:!1,side:Pt,toneMapped:!1,fog:!1}),m=new F(new je(1,2.4,1,32,1,!0),x);m.visible=!1,e.add(m);let p=new yn(10223482,0,14,1.6);e.add(p);let y=new Xe;y.position.copy(h),y.visible=!1,e.add(y);let _=a(256,64,()=>{});{let U=new Xe;U.scale.setScalar(1.35),U.position.y=0,y.add(U),y.R=U;let W=new ye({color:1447452,roughness:.5,metalness:.4}),O=new ye({color:13685980,roughness:.2,metalness:.95}),T=new F(new Oe(1.3,.72,.38),W);T.position.y=.42,U.add(T);let M=new F(new at(1.26,.68),new ye({color:2368556,roughness:.7}));M.position.set(0,.42,.191),U.add(M),y.cones=[];for(let Se of[-.38,.38]){let ne=new F(new Wt(.22,.025,8,32),O);ne.position.set(Se,.4,.2),U.add(ne);let Me=new F(new ii(.2,32),new ye({color:657932,roughness:.9}));Me.position.set(Se,.4,.195),U.add(Me);let qe=new F(new ii(.06,16),new ye({color:3158074,metalness:.6}));qe.position.set(Se,.4,.2),U.add(qe),y.cones.push(Me,qe)}let N=new F(new at(.42,.11),new Ue({map:_,toneMapped:!1}));N.position.set(0,.68,.195),U.add(N);for(let Se=0;Se<5;Se++){let ne=new F(new Oe(.06,.03,.05),O);ne.position.set(-.12+Se*.06,.8,.12),U.add(ne)}let $=new F(new Wt(.42,.03,8,24,Math.PI),O);$.position.set(0,.78,0),U.add($);let ce=new F(new je(.008,.008,.9,6),O);ce.position.set(.55,1.15,-.1),ce.rotation.z=-.35,U.add(ce);for(let Se of[-.55,.55]){let ne=new F(new Oe(.1,.06,.3),W);ne.position.set(Se,.03,0),U.add(ne)}let Q=new F(new at(1.26,.03),new Ue({color:16723888,toneMapped:!1}));Q.position.set(0,.07,.195),U.add(Q),y.glow=Q}y.lookAt(0,0,0);let v=new F(new Oe(2,1.4,1),new Ue({transparent:!0,opacity:0,depthWrite:!1}));v.position.y=.6,y.add(v),v.userData.aim={radio:!0};let w=new Xe;w.position.copy(h).add(new I(1.7,0,-.6)),w.visible=!1,e.add(w);{let U=new F(new Oe(.35,.22,.3),new ye({color:1118486,metalness:.5,roughness:.4}));U.position.y=.11,w.add(U);let W=new F(new ii(.06,16),new Ue({color:3800968,toneMapped:!1}));W.position.set(0,.16,.151),w.add(W),w.lens=W,w.beams=[];let O=[16723888,3800968,2154751,16724016,11566079,16769583];for(let T=0;T<9;T++){let M=new Xe;M.position.y=.18;let N=new F(new je(.012,.012,22,4,1,!0),new Ue({color:O[T%O.length],transparent:!0,opacity:.8,blending:ni,depthWrite:!1,toneMapped:!1}));N.position.y=11,M.add(N),w.add(M),w.beams.push(M)}w.light=new yn(3800968,0,12,1.5),w.light.position.y=1.5,w.add(w.light)}function E(U){let W=Sm(u,U);W.m.rotation.y=Math.PI;let O=new Xe;O.add(W.m),e.add(O);let T=new Un(W.m),M={};for(let Q of["dance","idle","use","walk"])c[Q]&&(M[Q]=T.clipAction(c[Q]),M[Q].play(),M[Q].setEffectiveWeight(Q==="idle"?1:0));M.dance&&(M.dance.time=Math.random()*M.dance.getClip().duration);let N=Math.PI+U/10*Math.PI*2+U%2*.3,$=2.4+(U>=4?1:0)+(U>=8?.9:0),ce=h.clone().add(new I(Math.sin(N)*$,0,Math.cos(N)*$));return{root:O,mixer:T,acts:M,cur:"idle",spot:ce,i:U,w:{idle:1}}}function A(U,W){!U.acts[W]||U.cur===W||(U.cur=W)}function P(U,W){for(let O in U.acts){let T=O===U.cur?1:0;U.w[O]=(U.w[O]||0)+(T-(U.w[O]||0))*Math.min(1,W*6),U.acts[O].setEffectiveWeight(U.w[O])}U.mixer.update(W)}let S={t:-1,wave:0,list:[]};function b(U,W){for(;d.aliens.length<U*2;)d.aliens.push(E(d.aliens.length));if(d.waves=Math.max(d.waves,U),W){for(let O of d.aliens)O.root.position.copy(O.spot),L(O),A(O,"dance");y.visible=w.visible=!0;return}S.t=0,S.wave=U,S.list=d.aliens.slice((U-1)*2,U*2);for(let O of S.list)O.root.visible=!1;ge(),xe(!0),o(U===1?"\u{1F47D} Was ist DAS?! Ein UFO landet im Portal!":"\u{1F47D} Noch mehr Aliens kommen zur Party! ("+U*2+" Aliens)")}function L(U){let W=h.clone().sub(U.root.position);U.root.rotation.y=Math.atan2(-W.x,-W.z)}let H=new I(0,34,8.6),D=new I(h.x,8.2,h.z);function B(U,W){if(S.t<0)return;S.t+=U;let O=S.t,T=N=>N<0?0:N>1?1:N*N*(3-2*N);f.visible=O<15,O<4?f.position.lerpVectors(H,D,T(O/4)):O<12?(f.position.copy(D),f.position.y+=Math.sin(O*1.6)*.2):f.position.lerpVectors(D,H,T((O-12)/3)),f.rotation.y+=U*1.5,f.rim.forEach((N,$)=>N.material.color.setHSL(($/16+O*.5)%1,1,.6));let M=O>4.5&&O<11.5?Math.min(1,(O-4.5)*2,(11.5-O)*2):0;if(m.visible=M>.01,m.visible){let N=f.position.y-.5;m.position.set(f.position.x,N/2,f.position.z),m.scale.set(1,N,1),x.opacity=.4*M,g.offset.y-=U*.6}p.position.set(h.x,2.5,h.z),p.intensity=25*M,S.list.forEach((N,$)=>{let ce=$*.4;if(O<5+ce){N.root.visible=!1;return}if(N.root.visible=!0,O<8+ce){let Q=T((O-5-ce)/3);N.root.position.set(h.x+($?.8:-.8),Tl.lerp(D.y-1.2,0,Q),h.z),N.root.rotation.y=O*2+$,A(N,"idle")}else if(O<10+ce){let Q=T((O-8-ce)/2),Se=new I(h.x+($?.8:-.8),0,h.z);N.root.position.lerpVectors(Se,N.spot,Q);let ne=N.spot.clone().sub(Se);N.root.rotation.y=Math.atan2(-ne.x,-ne.z),A(N,"walk")}else S.wave===1&&O<12.5?(N.root.position.copy(N.spot),L(N),A(N,"use")):(N.root.position.copy(N.spot),L(N),A(N,"dance"))}),S.wave===1&&O>10.3&&!y.visible&&(y.visible=w.visible=!0,y.R.scale.setScalar(.01)),y.visible&&y.R.scale.x<1.35&&y.R.scale.setScalar(Math.min(1.35,y.R.scale.x+U*1.6)),S.wave===1&&O>12.5&&!d.started&&Ce()&&(d.started=!0,d.rad={s:8,p:!0,v:.7,o:0,at:ae()},pe(),ee()),O>15&&(S.t=-1,f.visible=!1,m.visible=!1,p.intensity=0,xe(!1))}let z=null,k=null,te=null,q=null;function ge(){let U=i.audio();if(!(!U||z)){z=new Audio,z.crossOrigin="anonymous",z.loop=!1,z.preload="auto",z.addEventListener("ended",()=>{Ce()&&(d.rad.s=FE(d.rad.s),d.rad.o=0,d.rad.at=ae(),pe(),ee())});try{let W=U.AC.createMediaElementSource(z);k=U.AC.createPanner(),k.panningModel="HRTF",k.distanceModel="inverse",k.refDistance=5,k.rolloffFactor=1.1,k.maxDistance=60,q=U.AC.createGain(),q.gain.value=.7,W.connect(q),q.connect(k),k.connect(U.master);let O=y.position;k.positionX?(k.positionX.value=O.x,k.positionY.value=1,k.positionZ.value=O.z):k.setPosition(O.x,1,O.z)}catch(W){console.warn("Radio-Ton",W)}}}function xe(U){let W=i.audio();if(W){if(!te){te=W.AC.createGain(),te.gain.value=0,te.connect(W.master);let O=W.AC.createOscillator();O.type="sawtooth",O.frequency.value=62;let T=W.AC.createOscillator();T.frequency.value=5;let M=W.AC.createGain();M.gain.value=9,T.connect(M),M.connect(O.frequency);let N=W.AC.createBiquadFilter();N.type="lowpass",N.frequency.value=700,O.connect(N),N.connect(te),O.start(),T.start()}te.gain.setTargetAtTime(U?.12:0,W.AC.currentTime,.4)}}let ae=()=>Date.now()/1e3,Ce=()=>r.role==="host"||r.role==="none"||!r.role;function Ye(){return d.rad.o+(d.rad.p?Math.max(0,ae()-d.rad.at):0)}function ee(){if(ge(),!z)return;let U=OE(d.rad.s);z.src.endsWith(U.split("/").pop())||(z.src=U),q?q.gain.value=d.rad.v:z.volume=d.rad.v;let W=Ye(),O=()=>{try{Math.abs(z.currentTime-W)>1.5&&isFinite(z.duration)&&W<z.duration&&(z.currentTime=W)}catch{}};if(z.readyState>=1?O():z.addEventListener("loadedmetadata",O,{once:!0}),d.rad.p){let T=z.play();T&&T.catch&&T.catch(()=>{})}else z.pause();ve()}function pe(){if(r.role!=="host")return;let U={t:"rad",s:Object.assign({},d.rad,{o:Ye()}),n:d.waves};for(let W of r.conns.values())try{W.conn.send(U)}catch{}}function K(U){let W=d.rad,O=Ye();U==="next"?(W.s=(W.s+1)%Vl,W.o=0,W.p=!0):U==="prev"?(W.s=(W.s+Vl-1)%Vl,W.o=0,W.p=!0):U==="toggle"?(W.o=O,W.p=!W.p):U==="up"?(W.v=Math.min(1,Math.round((W.v+.1)*10)/10),W.o=O):U==="down"&&(W.v=Math.max(0,Math.round((W.v-.1)*10)/10),W.o=O),U!=="up"&&U!=="down"&&U!=="toggle"&&(W.o=0),W.at=ae(),pe(),ee(),Pe()}function re(U){if(r.role==="client"&&r.conn)try{r.conn.send({t:"radc",c:U})}catch{}else K(U)}function ve(){let U=_.image.getContext("2d");U.fillStyle="#05140a",U.fillRect(0,0,256,64),U.fillStyle="#39ff88",U.font="700 22px Consolas, monospace",U.fillText((d.rad.p?"\u25B6 ":"\u275A\u275A ")+Gl[d.rad.s],8,28),U.font="16px Consolas, monospace",U.fillText("VOL "+"\u2588".repeat(Math.round(d.rad.v*10))+"\u2591".repeat(10-Math.round(d.rad.v*10)),8,52),_.needsUpdate=!0}document.body.insertAdjacentHTML("beforeend",`<div id="radBox" class="hidden" style="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;background:rgba(14,12,22,.96);border:1px solid rgba(255,255,255,.18);border-radius:18px;padding:18px 20px;width:min(420px,92vw);text-align:center;color:#fff;font-family:'Segoe UI',sans-serif">
   <div style="font:400 32px Impact,'Arial Black',sans-serif;color:#39ff88;letter-spacing:.05em">\u{1F47D} ALIEN-RADIO</div><div id="radSong" style="margin:8px 0 14px;font-size:16px;color:#d8d0e6"></div>
   <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">${[["prev","\u23EE"],["toggle","\u23EF"],["next","\u23ED"],["down","\u{1F509}"],["up","\u{1F50A}"]].map(([U,W])=>`<button data-rc="${U}" style="width:62px;height:54px;border-radius:12px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;font-size:24px;cursor:pointer">${W}</button>`).join("")}</div>
   <div id="radVol" style="margin-top:12px;font:14px Consolas,monospace;color:#39ff88"></div><p style="font-size:12px;color:#8e869f;margin-top:10px">Alle im Raum h\xF6ren das Radio \xB7 je n\xE4her, desto lauter</p>
   <button id="radClose" style="margin-top:8px;padding:10px 26px;border-radius:12px;border:0;background:linear-gradient(135deg,#ff2fb0,#b81cff);color:#fff;font:800 15px 'Segoe UI';cursor:pointer">Fertig</button></div>`);for(let U of document.querySelectorAll("[data-rc]"))U.onclick=W=>{W.stopPropagation(),re(U.dataset.rc)};function Pe(){l("radSong").textContent=(d.rad.p?"\u25B6 ":"\u275A\u275A ")+Gl[d.rad.s],l("radVol").textContent="Lautst\xE4rke "+Math.round(d.rad.v*100)+"%"}function Ae(){Pe(),l("radBox").classList.remove("hidden"),i.unlock()}l("radClose").onclick=()=>{l("radBox").classList.add("hidden"),i.relock()};function $e(){for(let U of s){let W=U.g.position;if(Math.hypot(n.pos.x-W.x,n.pos.z-W.z)<3.6&&!d.jumped.has(U.i)){d.jumped.add(U.i),U.edge.material.color.setHex(3800968),setTimeout(()=>U.edge.material.color.setHex(16723888),900);let T=i.audio();if(T){let M=T.AC.createOscillator(),N=T.AC.createGain();M.type="triangle",M.frequency.value=440*Math.pow(2,d.jumped.size/8),N.gain.setValueAtTime(.12,T.AC.currentTime),N.gain.exponentialRampToValueAtTime(1e-4,T.AC.currentTime+.4),M.connect(N),N.connect(T.master),M.start(),M.stop(T.AC.currentTime+.45)}s.length&&d.jumped.size>=s.length&&(d.jumped.clear(),he())}}}function he(){if(d.waves>=wm){o("\u{1F47D} Die Tanzfl\xE4che ist voll \u2013 mehr Aliens passen nicht ins Portal!");return}if(r.role==="client"&&r.conn){try{r.conn.send({t:"ufo"})}catch{}return}_e()}function _e(){if(d.waves>=wm||S.t>=0)return;let U=d.waves+1;if(d.waves=U,r.role==="host")for(let W of r.conns.values())try{W.conn.send({t:"ufo",n:U})}catch{}b(U,!1)}let R=new I,j=new I;function Y(U,W){B(U,W);for(let O of d.aliens)P(O,O.cur==="dance"?U*1.05:U);if(d.started||y.visible){let O=i.audio(),T=i.bass?i.bass():.5+.5*Math.sin(W*8),M=d.rad.p;y.cones.forEach((N,$)=>N.scale.setScalar(1+(M&&Math.sin(W*15.7)>.6?.08:0))),y.glow.material.color.setHSL(W*.15%1,1,.55),w.beams.forEach((N,$)=>{N.visible=M&&y.visible,N.rotation.z=Math.sin(W*(.7+$*.11)+$)*.9,N.rotation.x=Math.cos(W*(.5+$*.07)+$*2)*.6}),w.light.intensity=M&&y.visible?8+Math.sin(W*9)*4:0,w.light.color.setHSL(W*.2%1,1,.5),w.lens.material.color.setHSL(W*.3%1,1,.55);for(let N of d.aliens)N.cur==="dance"&&(N.root.position.y=0);if(O&&O.AC&&O.AC.listener){let N=O.AC.listener;t.getWorldDirection(R),j.set(0,1,0),N.positionX?(N.positionX.value=t.position.x,N.positionY.value=t.position.y,N.positionZ.value=t.position.z,N.forwardX.value=R.x,N.forwardY.value=R.y,N.forwardZ.value=R.z,N.upX.value=0,N.upY.value=1,N.upZ.value=0):(N.setPosition(t.position.x,t.position.y,t.position.z),N.setOrientation(R.x,R.y,R.z,0,1,0))}}r.role==="host"&&d.started&&(d.syncT=(d.syncT||0)+U)>6&&(d.syncT=0,d.rad.o=Ye(),d.rad.at=ae(),pe())}function ue(U){if(!y.visible)return;let W=[{x:y.position.x,z:y.position.z,r:1},{x:w.position.x,z:w.position.z,r:.4},...d.aliens.filter(O=>O.root.visible).map(O=>({x:O.root.position.x,z:O.root.position.z,r:.35}))];for(let O of W){let T=U.x-O.x,M=U.z-O.z,N=Math.hypot(T,M),$=O.r+.35;N<$&&N>1e-4&&(U.x=O.x+T/N*$,U.z=O.z+M/N*$)}}return{tick:Y,jump:$e,collide:ue,openRadio:Ae,targets:()=>y.visible?[v]:[],prompt:U=>`<b style="color:#39ff88">\u{1F47D} Alien-Radio</b> \xB7 ${Gl[d.rad.s]}<br><small>${U?"Tippe auf <kbd>E</kbd>":"<kbd>E</kbd>"} = bedienen (Song, Lautst\xE4rke)</small>`,state:()=>({n:d.waves,rad:Object.assign({},d.rad,{o:Ye(),at:ae()})}),setState(U){U.n>0&&(b(U.n,!0),d.started=!0,d.rad=Object.assign({},U.rad,{at:ae()}),ee())},remoteWave(U){U>d.waves&&b(U,!1)},setRad(U,W){W>d.waves&&S.t<0&&b(W,!0),d.rad=Object.assign({},U,{at:ae()}),d.started=!0,ee(),Pe()},hostRequest:()=>_e(),control:K}}function Rm(i){let e=new Xe,t=.8,n=new Di,s=[[-.42,0],[.4,0],[.4,.86],[.52,.93],[.5,1],[.24,1.06],[.13,1.5],[.24,1.52],[.24,1.75],[-.42,1.75]];n.moveTo(s[0][0],s[0][1]);for(let K of s.slice(1))n.lineTo(K[0],K[1]);n.closePath();let r=new Lr(n,{depth:t,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2});r.rotateY(-Math.PI/2),r.translate(t/2,0,0);let o=new ye({color:1379366,roughness:.35,metalness:.3}),a=new F(r,o);a.castShadow=!0,a.receiveShadow=!0,e.add(a);let l=i(512,1024,(K,re,ve)=>{K.clearRect(0,0,re,ve),["#ff2fb0","#b81cff","#20e0ff"].forEach((Ae,$e)=>{K.strokeStyle=Ae,K.lineWidth=26,K.shadowColor=Ae,K.shadowBlur=30,K.beginPath(),K.moveTo(-40,980-$e*60),K.bezierCurveTo(160,760-$e*60,300,520-$e*60,560,380-$e*60),K.stroke()}),K.shadowBlur=0,K.save(),K.translate(250,560),K.rotate(-Math.PI/2),K.font='900 150px Impact, "Arial Black"',K.textAlign="center",K.textBaseline="middle",K.lineWidth=10,K.strokeStyle="#000",K.strokeText("ARCADE",0,0),K.fillStyle="#ffd23f",K.fillText("ARCADE",0,0),K.restore();for(let Ae=0;Ae<40;Ae++)K.fillStyle="rgba(255,255,255,"+(.3+Math.random()*.5)+")",K.fillRect(Math.random()*re,Math.random()*ve*.5,4,4)}),c=new ye({map:l,transparent:!0,emissive:16777215,emissiveMap:l,emissiveIntensity:.6,roughness:.5});for(let K of[-1,1]){let re=new F(new at(.88,1.72),c);re.position.set(K*(t/2+.014),.87,-.04),re.rotation.y=K*Math.PI/2,e.add(re)}let u=new Ue({color:16723888,toneMapped:!1});for(let K of[-1,1]){let re=new F(new Oe(.02,.86,.02),u);re.position.set(K*(t/2+.01),.43,.405),e.add(re)}let h=document.createElement("canvas");h.width=320,h.height=240;let d=h.getContext("2d"),f=new tn(h);f.colorSpace=ht,f.magFilter=Qt,f.minFilter=un;let g=new F(new at(.7,.47),new ye({color:328456,roughness:.3})),x=Math.atan2(.11,.44);g.position.set(0,1.28,.185+.02),g.rotation.x=-x,e.add(g);let m=new F(new at(.58,.4),new Ue({map:f,toneMapped:!1}));m.position.set(0,1.28,.21),m.rotation.x=-x,e.add(m);let p=new F(new at(.58,.4),new ye({color:16777215,transparent:!0,opacity:.06,roughness:.05,metalness:.9,depthWrite:!1}));p.position.set(0,1.28,.214),p.rotation.x=-x,e.add(p);let y=i(512,128,(K,re,ve)=>{let Pe=K.createLinearGradient(0,0,re,0);Pe.addColorStop(0,"#2a0050"),Pe.addColorStop(.5,"#5a0a6a"),Pe.addColorStop(1,"#2a0050"),K.fillStyle=Pe,K.fillRect(0,0,re,ve),K.font='900 76px Impact, "Arial Black"',K.textAlign="center",K.textBaseline="middle",K.shadowColor="#ff2fb0",K.shadowBlur=24,K.fillStyle="#ff7fd8",K.fillText("SPK ARCADE",re/2,ve/2+4),K.shadowBlur=0,K.fillStyle="#ffd23f";for(let Ae=0;Ae<18;Ae++)K.beginPath(),K.arc(16+Ae*28.5,8,4,0,7),K.fill(),K.beginPath(),K.arc(16+Ae*28.5,ve-8,4,0,7),K.fill()}),_=new Ue({map:y,toneMapped:!1}),v=new F(new at(.76,.2),_);v.position.set(0,1.635,.252+.002),e.add(v);let w=Math.atan2(.06,.26),E=new Xe;E.position.set(0,1.03,.37),E.rotation.x=w,e.add(E);let A=i(256,96,(K,re,ve)=>{K.fillStyle="#1a1030",K.fillRect(0,0,re,ve),K.strokeStyle="#20e0ff",K.lineWidth=3,K.strokeRect(4,4,re-8,ve-8),K.fillStyle="#ff2fb0",K.font="700 14px Arial",K.fillText("1 PLAYER",14,22)}),P=new F(new at(.78,.27),new ye({map:A,roughness:.6}));P.rotation.x=-Math.PI/2,P.position.y=.016,E.add(P);let S=new F(new je(.012,.012,.09,8),new ye({color:2236962,metalness:.8,roughness:.3}));S.position.set(-.22,.05,.02),E.add(S);let b=new F(new pt(.03,16,12),new ye({color:14688288,roughness:.25}));b.position.set(-.22,.1,.02),E.add(b);let H=[16723888,2154751,16765503,3800968].map((K,re)=>{let ve=new F(new je(.022,.022,.025,16),new ye({color:K,emissive:K,emissiveIntensity:.5,roughness:.3}));return ve.position.set(.02+re%2*.07+Math.floor(re/2)*.14,.014,re%2*.05-.02),E.add(ve),ve}),D=new F(new at(.34,.3),new ye({color:2763312,metalness:.7,roughness:.35}));D.position.set(0,.5,.418),e.add(D);for(let K of[-.07,.07]){let re=new F(new at(.05,.08),new Ue({color:16747050,toneMapped:!1}));re.position.set(K,.55,.42),e.add(re)}let B=new yn(8023551,2.2,4,1.6);B.position.set(0,1.3,.7),e.add(B);let z=i(128,128,K=>{let re=K.createRadialGradient(64,64,0,64,64,64);re.addColorStop(0,"rgba(255,47,176,0.6)"),re.addColorStop(1,"rgba(255,47,176,0)"),K.fillStyle=re,K.fillRect(0,0,128,128)}),k=new F(new at(2.2,2.2),new Ue({map:z,transparent:!0,depthWrite:!1,blending:ni}));k.rotation.x=-Math.PI/2,k.position.set(0,.015,.35),e.add(k);let te=new F(new Oe(t+.3,1.9,1.1),new Ue({transparent:!0,opacity:0,depthWrite:!1}));te.position.set(0,.95,0),e.add(te);let q=[[10,8],[9,8],[8,8],[7,8]],ge=[1,0],xe=[20,10],ae=0,Ce=0,Ye=["#ff2fb0","#20e0ff","#ffd23f","#39ff88"];function ee(K){d.fillStyle="#05030c",d.fillRect(0,0,320,240);for(let ve=0;ve<30;ve++)d.fillStyle=ve%3?"#2a2448":"#4a4478",d.fillRect((ve*97+K*20)%320,ve*53%240,2,2);let re=10;d.fillStyle="#ff3a3a",d.fillRect(xe[0]*re+2,xe[1]*re+2,6,6),q.forEach(([ve,Pe],Ae)=>{d.fillStyle=Ae?"#39ff88":"#9dffb8",d.fillRect(ve*re+1,Pe*re+1,8,8)}),d.font='bold 34px "Courier New", monospace',d.textAlign="center",d.fillStyle="#000",d.fillText("SPK ARCADE",162,62),d.fillStyle=Ye[Math.floor(K*2)%4],d.fillText("SPK ARCADE",160,60),d.font='bold 13px "Courier New", monospace',d.fillStyle="#f4f0ff",["SNAKE","PARTY-JAGD","PING-PONG","B\xD6LLER-BATTLE"].forEach((ve,Pe)=>d.fillText(ve,160,120+Pe*18)),Math.floor(K*2)%2&&(d.font='bold 16px "Courier New", monospace',d.fillStyle="#ffd23f",d.fillText("KLICK ODER E ZUM SPIELEN",160,220)),d.fillStyle="rgba(0,0,0,0.25)";for(let ve=0;ve<240;ve+=3)d.fillRect(0,ve,320,1);f.needsUpdate=!0}function pe(){let K=q[0],re=[[1,0],[-1,0],[0,1],[0,-1]].filter(Pe=>!(Pe[0]===-ge[0]&&Pe[1]===-ge[1])).filter(Pe=>{let Ae=K[0]+Pe[0],$e=K[1]+Pe[1];return Ae>=0&&$e>=0&&Ae<32&&$e<24&&!q.some(he=>he[0]===Ae&&he[1]===$e)});if(!re.length){q.length=4,q[0]=[10,8];return}re.sort((Pe,Ae)=>Math.abs(K[0]+Pe[0]-xe[0])+Math.abs(K[1]+Pe[1]-xe[1])-(Math.abs(K[0]+Ae[0]-xe[0])+Math.abs(K[1]+Ae[1]-xe[1]))),ge=re[0];let ve=[K[0]+ge[0],K[1]+ge[1]];q.unshift(ve),ve[0]===xe[0]&&ve[1]===xe[1]?(xe=[2+Math.floor(Math.random()*28),2+Math.floor(Math.random()*20)],q.length>22&&(q.length=6)):q.pop()}return ee(0),{g:e,hit:te,tick(K,re){!re||K-Ce<.1||(Ce=K,ae++,pe(),ee(K),H.forEach((ve,Pe)=>{ve.material.emissiveIntensity=.3+.7*(Math.sin(K*4+Pe)>.6?1:0)}),u.color.setHSL(K*.08%1,1,.55))}}}var rs={A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,BACK:8,START:9,L3:10,R3:11,UP:12,DOWN:13,LEFT:14,RIGHT:15},Cm={A:"Space",B:"KeyC",X:"KeyE",Y:"KeyF",LB:"KeyQ",RB:"KeyR",LT:"mouse2",RT:"mouse0",BACK:"Tab",R3:"KeyM",UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight"},zE={Space:" ",Tab:"Tab",Escape:"Escape",Enter:"Enter",ShiftLeft:"Shift",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight"};if(typeof window<"u"&&!window.__ctrlGuard){window.__ctrlGuard=1;let i=0;addEventListener("keydown",n=>{(n.key==="Control"||n.key==="Meta")&&(i=performance.now());let s=n.target&&/^(INPUT|TEXTAREA)$/.test(n.target.tagName);(n.ctrlKey||n.metaKey)&&!s&&(document.pointerLockElement||!/^Key[CVXAZ]$/.test(n.code))&&n.preventDefault(),(n.ctrlKey&&n.code==="KeyW"||n.code==="F5"||n.code==="BrowserBack"||n.altKey&&n.code==="ArrowLeft")&&n.preventDefault()},!0),addEventListener("keyup",n=>{(n.key==="Control"||n.key==="Meta")&&(i=0)},!0),addEventListener("blur",()=>{i=0});let e=["ControlLeft","ControlRight","KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","KeyR","KeyF","KeyT","KeyN","KeyC","KeyG","KeyH","KeyL","KeyV","Space","Tab","MetaLeft","MetaRight"],t=()=>{try{navigator.keyboard&&navigator.keyboard.lock&&document.fullscreenElement&&navigator.keyboard.lock(e).catch(()=>{})}catch{}};document.addEventListener("pointerlockchange",()=>{if(document.pointerLockElement)if(document.fullscreenElement)t();else try{let n=document.documentElement.requestFullscreen({navigationUI:"hide"});n&&n.then&&n.then(t).catch(()=>{})}catch{}}),document.addEventListener("fullscreenchange",()=>{document.fullscreenElement&&t()}),addEventListener("beforeunload",n=>{if(i&&performance.now()-i<8e3)return n.preventDefault(),n.returnValue="",""})}var Jo=null;function Pm(i){if(Jo)return Jo.set(i),Jo;let e=Object.assign({},Cm,i.map||{}),t={},n=[],s=!1,r=!1,o=null,a=0,l="",c=performance.now(),u=document.createElement("style");u.textContent='.padFocus{outline:3px solid #ffd23f!important;outline-offset:3px;box-shadow:0 0 18px rgba(255,210,63,.7)!important}#padBadge{position:fixed;left:50%;bottom:8px;transform:translateX(-50%);z-index:9999;background:rgba(10,8,16,.85);border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:5px 12px;font:600 12px "Segoe UI",sans-serif;color:#d8d0e6;pointer-events:none;transition:opacity .4s;white-space:nowrap}#padBadge b{color:#39ff88}',document.head.appendChild(u);let h=document.createElement("div");h.id="padBadge",h.style.opacity="0",document.body.appendChild(h);let d=0;function f(E,A=4e3){h.innerHTML=E,h.style.opacity="1",clearTimeout(d),d=setTimeout(()=>h.style.opacity="0",A)}addEventListener("gamepadconnected",E=>f("\u{1F3AE} <b>Controller verbunden</b> \u2013 A = ausw\xE4hlen \xB7 B = zur\xFCck \xB7 Start = Pause/Weiter")),addEventListener("gamepaddisconnected",()=>{x(),f("\u{1F3AE} Controller getrennt")});let g=(E,A)=>{if(E){if(E.startsWith("mouse")){let P=+E.slice(5),S=i.canvas||document.body;S.dispatchEvent(new MouseEvent(A?"mousedown":"mouseup",{button:P,buttons:A?P===0?1:2:0,bubbles:!0,cancelable:!0})),!A&&P===0&&S.dispatchEvent(new MouseEvent("click",{button:0,bubbles:!0,cancelable:!0}));return}if(E==="wheel"){A&&(i.canvas||document).dispatchEvent(new WheelEvent("wheel",{deltaY:100,bubbles:!0}));return}t[E]!==A&&(t[E]=A,document.dispatchEvent(new KeyboardEvent(A?"keydown":"keyup",{code:E,key:zE[E]||(E.startsWith("Key")?E.slice(3).toLowerCase():E.startsWith("Digit")?E.slice(5):E),bubbles:!0,cancelable:!0})))}};function x(){for(let E in t)t[E]&&g(E,!1)}function m(){return[...document.querySelectorAll("button, select, input:not([type=hidden]), a[href], [data-pad]")].filter(A=>{if(A.disabled||A.closest(".hidden"))return!1;let P=A.getBoundingClientRect();if(P.width<4||P.height<4)return!1;let S=getComputedStyle(A);if(S.visibility==="hidden"||S.display==="none"||+S.opacity==0||S.pointerEvents==="none")return!1;if(P.bottom<0||P.top>innerHeight||P.right<0||P.left>innerWidth)return!0;let b=Math.min(innerWidth-1,Math.max(0,P.left+P.width/2)),L=Math.min(innerHeight-1,Math.max(0,P.top+P.height/2)),H=document.elementFromPoint(b,L);return H&&(H===A||A.contains(H)||H.contains(A)||H.closest("label")===A.closest("label"))})}function p(E){if(o&&o.classList.remove("padFocus"),o=E,E){E.classList.add("padFocus");try{E.scrollIntoView({block:"nearest",inline:"nearest"})}catch{}if(E.tagName!=="INPUT"||E.type==="range"||E.type==="checkbox")try{E.focus({preventScroll:!0})}catch{}}}function y(E){let A=m();if(!A.length)return;if(!o||!A.includes(o)){p(i.first&&A.find(D=>i.first.includes(D.id))||A.find(D=>/\b(btn|primary)\b/.test(D.className)&&!/ghost/.test(D.className))||A.find(D=>D.tagName==="BUTTON")||A[0]);return}let P=o.getBoundingClientRect(),S=P.left+P.width/2,b=P.top+P.height/2,L=null,H=1e9;for(let D of A){if(D===o)continue;let B=D.getBoundingClientRect(),z=B.left+B.width/2,k=B.top+B.height/2,te=z-S,q=k-b,ge=E==="up"?-q:E==="down"?q:E==="left"?-te:te,xe=Math.abs(E==="up"||E==="down"?te:q);if(ge<4)continue;let ae=ge+xe*2.2;ae<H&&(H=ae,L=D)}L&&p(L)}function _(E,A){if(E.tagName==="SELECT"){let P=E.options.length;if(!P)return!1;let S=E.selectedIndex;for(let b=0;b<P&&(S=(S+A+P)%P,!!E.options[S].disabled);b++);return E.selectedIndex=S,E.dispatchEvent(new Event("input",{bubbles:!0})),E.dispatchEvent(new Event("change",{bubbles:!0})),!0}if(E.tagName==="INPUT"&&E.type==="range"){let P=+E.step||(+E.max-+E.min)/20||1;return E.value=String(Math.min(+E.max,Math.max(+E.min,+E.value+A*P))),E.dispatchEvent(new Event("input",{bubbles:!0})),E.dispatchEvent(new Event("change",{bubbles:!0})),!0}return!1}function v(E){if(E){if(E.tagName==="SELECT"){_(E,1);return}if(E.tagName==="INPUT"&&(E.type==="checkbox"||E.type==="radio")){E.click();return}if(E.tagName==="INPUT"){try{E.focus(),E.select()}catch{}f("\u2328\uFE0F Mit der Tastatur tippen, dann B dr\xFCcken",3e3);return}E.click()}}function w(){requestAnimationFrame(w);let E=performance.now(),A=Math.min(.05,(E-c)/1e3);c=E;let P=navigator.getGamepads?navigator.getGamepads():[],S=null;for(let ae of P)if(ae&&ae.connected&&ae.buttons.length>=16){S=ae;break}if(!S){s&&(x(),s=!1);return}let b=S.buttons.map(ae=>ae.value>.5),L=S.axes,H=ae=>Math.abs(ae)<.18?0:(ae-Math.sign(ae)*.18)/.82,D=H(L[0]||0),B=H(L[1]||0),z=H(L[2]||0),k=H(L[3]||0);if((b.some(ae=>ae)||Math.abs(D)+Math.abs(B)+Math.abs(z)+Math.abs(k)>.3)&&!s&&(s=!0,i.onActive&&i.onActive()),!s){n=b;return}let q=ae=>b[rs[ae]]&&!n[rs[ae]],ge=ae=>!b[rs[ae]]&&n[rs[ae]],xe=i.isPlaying();if(xe&&!i._helped&&(i._helped=!0,f(i.help||"\u{1F3AE} Linker Stick = laufen \xB7 Rechter Stick = umschauen \xB7 A = springen \xB7 B = ducken \xB7 X = benutzen \xB7 Start = Pause",7e3)),xe){o&&p(null);for(let ae of["A","B","X","Y","LB","RB","LT","RT","BACK","R3","UP","DOWN","LEFT","RIGHT"]){let Ce=e[ae];Ce&&(q(ae)&&g(Ce,!0),ge(ae)&&g(Ce,!1))}if(i.stick==="steer"?(g(e.STEER_L||"KeyA",D<-.3),g(e.STEER_R||"KeyD",D>.3)):(g("KeyW",B<-.35),g("KeyS",B>.35),g("KeyA",D<-.35),g("KeyD",D>.35)),q("L3")&&(r=!r),Math.hypot(D,B)<.25&&(r=!1),i.stick!=="steer"&&g("ShiftLeft",r||Math.hypot(D,B)>.97),!i.noLook&&(z||k)){let ae=(i.lookSpeed||900)*A,Ce=Math.sign(z)*Math.pow(Math.abs(z),1.6)*ae,Ye=Math.sign(k)*Math.pow(Math.abs(k),1.6)*ae*.75;document.dispatchEvent(new MouseEvent("mousemove",{movementX:Ce,movementY:Ye,bubbles:!0}))}q("START")&&(x(),r=!1,i.pause())}else{x(),r=!1;let ae="";if(b[rs.UP]||B<-.6?ae="up":b[rs.DOWN]||B>.6?ae="down":b[rs.LEFT]||D<-.6?ae="left":(b[rs.RIGHT]||D>.6)&&(ae="right"),ae&&(ae!==l||E>a)&&(a=E+(ae!==l?450:160),l=ae,(ae==="left"||ae==="right")&&o&&_(o,ae==="left"?-1:1)||y(ae)),ae||(l=""),o&&!document.body.contains(o)&&p(null),!o&&(ae||q("A"))?y("down"):q("A")&&v(o),q("B")&&(document.activeElement&&document.activeElement.tagName==="INPUT"?document.activeElement.blur():i.back&&i.back()),(q("START")||q("X")&&i.startOnX)&&(i.canPlay&&i.canPlay()?(document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),p(null),i.padLock()):o&&v(o)),k){let Ce=o;for(;Ce&&Ce!==document.body&&!(Ce.scrollHeight>Ce.clientHeight+4&&/auto|scroll/.test(getComputedStyle(Ce).overflowY));)Ce=Ce.parentElement;Ce&&Ce!==document.body&&(Ce.scrollTop+=k*900*A)}}n=b}return requestAnimationFrame(w),Jo={isActive:()=>s,badge:f,set:E=>{x(),i=E,e=Object.assign({},Cm,E.map||{}),s&&i.onActive&&i.onActive()}},Jo}var ie=i=>document.getElementById(i),pn=new URLSearchParams(location.search),on=(()=>{try{return matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&"ontouchstart"in window||pn.has("touch")}catch{return!1}})();on&&document.body.classList.add("touch");var Ws=1,oa=Math.PI*2/12.7,yd=16.8,nn=19,GE=1.65,Om=.35,$l=Ws/2*oa,wd=Math.PI*2-$l,Im=[16723888,2154751,10181887,4054148,16731501,16765503,58836,16739286,8191823,11584767],ta=["#ff2fb0","#20e0ff","#3ddc84","#ff4d6d","#ffd23f","#9b5cff","#00e5d4","#ff6bd6","#7cff4f","#e0e0e0","#c08040","#5080ff","#ff9090","#90ffd0"],ke={name:"Neue Pussy1",sens:1,vol:.8,gfx:"hoch",invert:!1};try{let i=JSON.parse(localStorage.getItem("operation-hias")||"null");i&&(ke=Object.assign({},ke,i))}catch{}(!ke.name||ke.name==="HiAS"||ke.name==="Georg")&&(ke.name="Neue Pussy1");ke.look=En(ke.look);function Zl(){try{let i=JSON.parse(localStorage.getItem("operation-hias")||"{}")||{};i.name=ke.name,i.vol=ke.vol,i.look=ke.look,localStorage.setItem("operation-hias",JSON.stringify(i))}catch{}}var Lm="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Ad=()=>{let i="";for(let e=0;e<5;e++)i+=Lm[Math.floor(Math.random()*Lm.length)];return i},zm=!1;try{zm=!!sessionStorage.getItem("gbgc-zurueck")}catch{}var dd=null;function Gm(){if(dd)return dd;let i=null;if(zm)try{i=sessionStorage.getItem("gbgc-raum")}catch{}(!i||!/^[A-Z0-9]{5}$/.test(i))&&(i=Ad());try{sessionStorage.setItem("gbgc-raum",i)}catch{}return dd=i}var ls=ie("c"),us=new Ro({canvas:ls,antialias:!0,powerPreference:"high-performance"});us.setPixelRatio(Math.min(window.devicePixelRatio||1,on?1.25:1.5));us.toneMapping=Nr;us.toneMappingExposure=1.05;us.outputColorSpace=ht;var dt=new Co;dt.background=new Re(329227);dt.fog=new tl(329227,.018);var Nn=new kt(75,1,.05,200);Nn.rotation.order="YXZ";dt.add(Nn);var Wl=ke.gfx==="niedrig"||pn.has("low")||on,gi=null,vd=null;Wl||(gi=new zr(us),gi.addPass(new Gr(dt,Nn)),vd=new Vr(new fe(512,512),.42,.4,.82),gi.addPass(vd),gi.addPass(new Wr));function Vm(){let i=window.innerWidth,e=window.innerHeight;us.setSize(i,e,!1),Nn.aspect=i/e,Nn.updateProjectionMatrix(),gi&&gi.setSize(i,e)}window.addEventListener("resize",Vm);Vm();function Bt(i,e,t,n){let s=document.createElement("canvas");s.width=i,s.height=e;let r=s.getContext("2d");t(r,i,e);let o=new tn(s);return o.colorSpace=ht,o.anisotropy=8,n&&(o.wrapS=o.wrapT=wn,o.repeat.set(n[0],n[1])),o}function Xs(i,e={}){let t=e.w||1024,n=e.h||256,s=Bt(t,n,o=>{o.clearRect(0,0,t,n),e.bg&&(o.fillStyle=e.bg,VE(o,6,6,t-12,n-12,26),o.fill(),o.strokeStyle=e.border||"rgba(255,255,255,0.25)",o.lineWidth=6,o.stroke()),o.textAlign="center",o.textBaseline="middle";let a=i.length;i.forEach((l,c)=>{let u=l.size||90;o.font=`${l.weight||400} ${u}px ${l.font||'Impact, "Arial Black", sans-serif'}`;let h=u;for(;o.measureText(l.t).width>t-60&&h>20;)h-=4,o.font=`${l.weight||400} ${h}px ${l.font||'Impact, "Arial Black", sans-serif'}`;o.shadowColor=l.glow||"transparent",o.shadowBlur=l.glow?8:0,o.fillStyle=l.c||"#fff",o.fillText(l.t,t/2,n*(c+.5)/a+(l.dy||0))})});return new F(new at(e.pw||4,(e.pw||4)*n/t),new Ue({map:s,transparent:!0,depthWrite:!1,toneMapped:!1,side:Pt,color:14211288}))}function VE(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function WE(){let i=Bt(1024,1024,(h,d,f)=>{h.fillStyle="#101219",h.fillRect(0,0,d,f);for(let g=0;g<8;g++)for(let x=0;x<8;x++){let m=16+Math.floor(Math.random()*8);h.fillStyle=`rgb(${m},${m+2},${m+8})`,h.fillRect(x*128+3,g*128+3,122,122);for(let p=0;p<40;p++)h.fillStyle=`rgba(255,255,255,${Math.random()*.025})`,h.fillRect(x*128+Math.random()*120,g*128+Math.random()*120,2+Math.random()*10,1)}h.strokeStyle="rgba(80,160,255,0.10)",h.lineWidth=2;for(let g=0;g<=8;g++)h.beginPath(),h.moveTo(g*128,0),h.lineTo(g*128,f),h.stroke(),h.beginPath(),h.moveTo(0,g*128),h.lineTo(d,g*128),h.stroke()},[6,6]),e=new F(new ii(nn+.5,96),new ye({map:i,roughness:1,metalness:0,color:3815994,envMapIntensity:0}));e.rotation.x=-Math.PI/2,dt.add(e);let t=(h,d)=>new Ue({color:h,transparent:!0,opacity:d,toneMapped:!1,side:Pt});for(let[h,d,f,g]of[[3.2,.06,16723888,.9],[3.45,.02,16723888,.6],[10.6,.04,2154751,.45],[17.4,.05,2154751,.5]]){let x=new F(new Fo(h,h+d,128),t(f,g));x.rotation.x=-Math.PI/2,x.position.y=.012,dt.add(x)}let n=Bt(1024,1024,(h,d,f)=>{h.translate(d/2,f/2),h.strokeStyle="rgba(255,47,176,0.85)",h.lineWidth=10,h.beginPath(),h.arc(0,0,440,0,Math.PI*2),h.stroke(),h.lineWidth=4,h.beginPath(),h.arc(0,0,400,0,Math.PI*2),h.stroke();for(let g=0;g<10;g++)h.save(),h.rotate(g*Math.PI/5),h.fillStyle="rgba(255,47,176,0.8)",h.fillRect(-6,-440,12,60),h.restore();h.font='400 210px Impact, "Arial Black", sans-serif',h.textAlign="center",h.textBaseline="middle",h.fillStyle="rgba(255,90,200,0.95)",h.fillText("SPK",0,-10),h.font='400 64px Impact, "Arial Black", sans-serif',h.fillStyle="rgba(255,255,255,0.75)",h.fillText("PORTAL",0,150)}),s=new F(new ii(3.1,64),new Ue({map:n,transparent:!0,toneMapped:!1,opacity:.85,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.015,dt.add(s);{let h=new Image;h.onload=()=>{let d=n.image,f=d.getContext("2d"),g=d.width,x=d.height;f.setTransform(1,0,0,1,0,0),f.clearRect(0,0,g,x);let m=f.createRadialGradient(g/2,x/2,g*.2,g/2,x/2,g/2);m.addColorStop(0,"rgba(255,226,47,0.28)"),m.addColorStop(.75,"rgba(255,47,176,0.18)"),m.addColorStop(1,"rgba(255,47,176,0)"),f.fillStyle=m,f.beginPath(),f.arc(g/2,x/2,g/2,0,Math.PI*2),f.fill(),f.drawImage(h,g*.02,x*.02,g*.96,x*.96),n.needsUpdate=!0,s.material.opacity=1},h.src="/System/assets/logo4.png"}let r=Bt(1024,512,(h,d,f)=>{h.fillStyle="#14161e",h.fillRect(0,0,d,f);for(let g=0;g<8;g++)for(let x=0;x<4;x++){let m=22+Math.floor(Math.random()*10);h.fillStyle=`rgb(${m},${m+2},${m+10})`,h.fillRect(g*128+4,x*128+4,120,120),h.fillStyle="rgba(0,0,0,0.35)",h.fillRect(g*128+4,x*128+118,120,6)}h.fillStyle="rgba(32,224,255,0.55)",h.fillRect(0,250,d,5)},[10,2]),o=new F(new je(nn,nn,10,96,1,!0),new ye({map:r,side:Gt,roughness:.6,metalness:.4}));o.position.y=5,dt.add(o);try{Kp(dt,nn,$l+.12,wd-.12)}catch(h){console.warn("Graffiti",h)}for(let[h,d]of[[.25,2154751],[9.6,16723888]]){let f=new F(new je(nn-.05,nn-.05,.08,96,1,!0),new Ue({color:d,side:Gt,toneMapped:!1}));f.position.y=h,dt.add(f)}let a=Bt(2048,1024,(h,d,f)=>{let g=h.createLinearGradient(0,0,0,f);g.addColorStop(0,"#0a0c1c"),g.addColorStop(1,"#03040a"),h.fillStyle=g,h.fillRect(0,0,d,f);for(let x=0;x<1600;x++){let m=Math.random();h.fillStyle=`rgba(255,255,255,${m*m})`;let p=Math.random()<.03?3:1.4;h.fillRect(Math.random()*d,Math.random()*f*.9,p,p)}for(let x=0;x<4;x++){let m=Math.random()*d,p=Math.random()*f*.6,y=h.createRadialGradient(m,p,0,m,p,260);y.addColorStop(0,x%2?"rgba(120,60,255,0.18)":"rgba(255,120,40,0.13)"),y.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=y,h.fillRect(0,0,d,f)}}),l=new F(new pt(nn,64,24,0,Math.PI*2,0,Math.PI/2),new Ue({map:a,side:Gt,fog:!1}));l.position.y=10,l.scale.y=.55,dt.add(l);let c=new ye({color:2237743,roughness:.35,metalness:.8});for(let h=-1;h<Ws;h++){let d=(h+.5-(Ws-1)/2)*oa,f=Math.sin(d)*(nn-.6),g=-Math.cos(d)*(nn-.6),x=new F(new Oe(1,10,.9),c);x.position.set(f,5,g),x.rotation.y=-d,dt.add(x);let m=new F(new Oe(.08,9,.08),new Ue({color:h%2?2154751:16723888,toneMapped:!1}));m.position.set(Math.sin(d)*(nn-1.08),5,-Math.cos(d)*(nn-1.08)),dt.add(m)}dt.add(new Go(8425664,3154968,1));let u=new yn(16769728,60,30,1.6);u.position.set(0,9,0),dt.add(u)}var os=null;function XE(){os=new Xe,os.position.set(0,6.2,0),dt.add(os);let i=Bt(2048,256,(t,n,s)=>{t.clearRect(0,0,n,s),t.textAlign="center",t.textBaseline="middle",t.font='400 150px Impact, "Arial Black", sans-serif';for(let[r,o,a]of[[n*.25,"SPK","#ff7fd8"],[n*.75,"PORTAL","#9ff3ff"]])t.shadowColor=a,t.shadowBlur=8,t.fillStyle=a,t.fillText(o,r,s/2)}),e=new F(new je(3.6,3.6,.9,96,1,!0),new Ue({map:i,transparent:!0,side:Tn,toneMapped:!1,depthWrite:!1,opacity:.85,color:13684944}));os.add(e);for(let t of[-.62,.62]){let n=new F(new Wt(3.6,.025,6,128),new Ue({color:16723888,toneMapped:!1}));n.rotation.x=Math.PI/2,n.position.y=t,os.add(n)}}var qE="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",YE=`
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
}`,Yn=[];function fd(i,e,t){let n=new Di,s=i/2-t,r=e-i/2;return n.moveTo(-s,t),n.lineTo(s,t),n.lineTo(s,r),n.absarc(0,r,s,0,Math.PI,!1),n.lineTo(-s,t),n}function KE(i,e){let t=(i-(Ws-1)/2)*oa,n=new I(Math.sin(t)*yd,0,-Math.cos(t)*yd),s=new Xe;s.position.copy(n),s.lookAt(0,0,0),dt.add(s);let r=new Re(Im[i%Im.length]),o=!!e,a=3.4,l=4.7,c=fd(a+.7,l+.35,0),u=fd(a,l,0);c.holes.push(new Cs(u.getPoints(48)));let h=new Lr(c,{depth:.5,bevelEnabled:!0,bevelThickness:.06,bevelSize:.05,bevelSegments:2,curveSegments:48});h.translate(0,0,-.25);let d=new F(h,new ye({color:5593964,roughness:.35,metalness:.75}));s.add(d);let f=u.getPoints(64).map(H=>new I(H.x,H.y,.27)),g=new F(new ml(new No(f,!1),128,.045,6,!1),new Ue({color:o?r:new Re(4475477),toneMapped:!1}));s.add(g);let x=new At({vertexShader:qE,fragmentShader:YE,transparent:!0,depthWrite:!1,side:Pt,uniforms:{t:{value:Math.random()*10},c1:{value:r.clone().multiplyScalar(1)},c2:{value:r.clone().multiplyScalar(.18)},on:{value:o?1:0},hot:{value:0}}}),m=new Oo(fd(a,l,0),48),p=m.attributes.uv,y=m.attributes.position;for(let H=0;H<p.count;H++)p.setXY(H,(y.getX(H)+a/2)/a,y.getY(H)/l);let _=new F(m,x);s.add(_);let v=new F(new je(2.6,2.8,.12,48,1,!1,-Math.PI/2,Math.PI),new ye({color:1776933,roughness:.4,metalness:.7}));v.position.set(0,.06,.05),s.add(v);let w=new F(new Fo(2.55,2.62,48,1,Math.PI,Math.PI),new Ue({color:o?r:3357252,toneMapped:!1,side:Pt}));w.rotation.x=-Math.PI/2,w.position.set(0,.125,.05),s.add(w);let E="#"+r.getHexString(),A=Xs(o?[{t:String(i+1),size:64,c:E,glow:E},{t:(e.name||e.ordner).toUpperCase(),size:92,c:"#ffffff",glow:E}]:[{t:String(i+1),size:64,c:"#667"},{t:"BALD VERF\xDCGBAR",size:80,c:"#8a8f9c"}],{w:1024,h:300,pw:4.4});if(A.position.set(0,l+1.85,.1),s.add(A),o&&(e.genre||e.spieler)){let H=Xs([{t:[e.genre,e.spieler].filter(Boolean).join("  \xB7  "),size:54,c:"#d8d2c6",font:'"Segoe UI", Arial, sans-serif',weight:600}],{w:1400,h:110,pw:3.8});H.position.set(0,l+.82,.3),s.add(H)}let P=null;o&&(P=new yn(r,14,9,1.8),P.position.set(0,2.2,1.6),s.add(P));let S=null;if(o){let D=new Tt,B=new Float32Array(70*3),z=new Float32Array(70);for(let k=0;k<70;k++)B[k*3]=(Math.random()-.5)*3,B[k*3+1]=Math.random()*4.5,B[k*3+2]=.2+Math.random()*1.2,z[k]=.3+Math.random()*.9;D.setAttribute("position",new Ht(B,3)),S=new Ir(D,new Rs({color:r,size:.06,transparent:!0,opacity:.9,toneMapped:!1,depthWrite:!1,blending:ni})),S.userData.sp=z,s.add(S)}let b=new I(0,0,1).applyQuaternion(s.quaternion),L=new I(1,0,0).applyQuaternion(s.quaternion);Yn.push({i,game:e,on:o,g:s,mat:x,light:P,parts:S,pos:n,n:b,t:L,col:E})}var as=null,xi=null,Zt=null;function Zr(i,e,t){let n=new Xe,s=null,r=null;if(as&&Zt){let a=Ol(Zt,t||qr).m;a.rotation.y=Math.PI,n.add(a),s=new Un(a),r={};for(let l of["idle","walk","run","jump","crouch","sneak","punch","death"])xi[l]&&(r[l]=s.clipAction(xi[l]),(l==="punch"||l==="death")&&(r[l].setLoop(xu),r[l].clampWhenFinished=!0),r[l].play(),r[l].setEffectiveWeight(l==="idle"?1:0))}else if(as){let a=Yo(as.scene);if(!Zr.sc){let c=new dn().setFromObject(as.scene);Zr.sc=1.8/(c.max.y-c.min.y)}a.scale.setScalar(Zr.sc),a.rotation.y=Math.PI;let l=new Re(e);a.traverse(c=>{if(c.isMesh||c.isSkinnedMesh){c.frustumCulled=!1;let u=c.material&&/Joint/i.test(c.material.name);c.material=new ye({color:u?1711138:l,roughness:.55,metalness:.15,emissive:u?0:l,emissiveIntensity:u?0:.08})}}),n.add(a),s=new Un(a),r={};for(let c of["idle","walk","run","jump"])xi[c]&&(r[c]=s.clipAction(xi[c]),r[c].play(),r[c].setEffectiveWeight(c==="idle"?1:0))}else{let a=new F(new pl(.3,1.1,4,12),new ye({color:e}));a.position.y=.9,n.add(a)}let o=Xs([{t:i,size:80,c:e,font:'"Segoe UI", Arial, sans-serif',weight:700,glow:"rgba(0,0,0,0.9)"}],{w:768,h:128,pw:1.6});return o.position.y=2.15,n.add(o),dt.add(n),{root:n,mixer:s,act:r,tag:o,w:{idle:1,walk:0,run:0,jump:0}}}var jE=new I(0,0,0);function $E(){if(oe.ko>0||(oe.punchCd||0)>performance.now())return;oe.punchCd=performance.now()+450,oe.pu++,oe.punchNow=!0;let i=oe.body??oe.yaw,e=-Math.sin(i),t=-Math.cos(i),n=null,s=1.9;for(let r of Dt.values()){if(r.ko)continue;let o=r.p.x-oe.pos.x,a=r.p.z-oe.pos.z,l=Math.hypot(o,a);l<s&&(o*e+a*t)/(l||1)>.35&&(s=l,n=r)}if(Wm(!!n),!!n){if(me.role==="host"){for(let r of me.conns.values())if(r.id===n.id)try{r.conn.send({t:"hit",by:ke.name})}catch{}}else if(me.role==="client"&&me.conn&&me.conn.open)try{me.conn.send({t:"hit",id:n.id})}catch{}}}function Wm(i){try{let e=ut;if(!e)return;let t=e.createOscillator(),n=e.createGain();t.type="triangle",t.frequency.setValueAtTime(i?140:320,e.currentTime),t.frequency.exponentialRampToValueAtTime(i?55:180,e.currentTime+.12),n.gain.setValueAtTime(i?.5:.12,e.currentTime),n.gain.exponentialRampToValueAtTime(.001,e.currentTime+.15),t.connect(n),n.connect(qn),t.start(),t.stop(e.currentTime+.16)}catch{}}function Rd(i){if(oe.ko>0)return;oe.hp-=25,Wm(!0);let e=oe.body??oe.yaw;oe.vel.x+=Math.sin(e)*4,oe.vel.z+=Math.cos(e)*4,JE(),oe.hp<=0&&(oe.hp=0,oe.ko=3.5,Ot("\u{1F4A5} "+i+" hat dich k.o. geschlagen! Gleich geht es neu los \u2026")),Cd()}function ZE(){oe.hp=100,oe.pos.copy(jE),oe.vel.set(0,0,0),Cd(),Ot("Du bist wieder da \u2013 volle Gesundheit!")}function JE(){let i=ie("hpFlash");i||(i=document.createElement("div"),i.id="hpFlash",i.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:40;box-shadow:inset 0 0 160px 50px rgba(220,0,0,.8);opacity:0;transition:opacity .5s",document.body.appendChild(i)),i.style.transition="none",i.style.opacity="1",requestAnimationFrame(()=>{i.style.transition="opacity .6s",i.style.opacity="0"})}function Cd(){let i=ie("hpBar");i||(i=document.createElement("div"),i.id="hpBar",i.style.cssText="position:fixed;left:50%;bottom:18px;transform:translateX(-50%);width:200px;height:10px;border-radius:6px;background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.25);z-index:30;overflow:hidden;pointer-events:none",i.innerHTML='<i style="display:block;height:100%;background:linear-gradient(90deg,#ff3a3a,#39ff88);width:100%"></i>',document.body.appendChild(i)),i.firstChild.style.width=oe.hp+"%",i.style.display=oe.hp<100||oe.ko>0?"block":"none"}setInterval(()=>{oe.ko<=0&&oe.hp<100&&(oe.hp=Math.min(100,oe.hp+5),Cd())},1500);function Dm(i,e,t,n,s={}){if(!i.mixer)return;let r={idle:0,walk:0,run:0,jump:0,crouch:0,sneak:0,punch:0,death:0};s.punch&&i.act.punch&&(i.punchT=.5,i.act.punch.reset().play()),s.dead&&!i.wasDead&&i.act.death&&i.act.death.reset().play(),i.wasDead=!!s.dead,i.punchT=Math.max(0,(i.punchT||0)-n),s.dead?r.death=1:i.punchT>0?r.punch=1:t?r.jump=1:s.crouch?e>.4?r.sneak=1:r.crouch=1:e>4.2?r.run=1:e>.4?r.walk=1:r.idle=1;for(let o in r)o in i.w||(i.w[o]=0);for(let o in i.w)i.w[o]+=(r[o]-i.w[o])*Math.min(1,n*8),i.act[o]&&i.act[o].setEffectiveWeight(i.w[o]);i.mixer.update(n)}var ut=null,qn=null;function Pd(){if(ut){ut.state==="suspended"&&ut.resume();return}try{ut=new(window.AudioContext||window.webkitAudioContext),qn=ut.createGain(),qn.gain.value=.9*(ke.vol==null?.8:ke.vol),qn.connect(ut.destination);let i=ut.createGain();i.gain.value=.035;let e=ut.createBiquadFilter();e.type="lowpass",e.frequency.value=600,e.connect(i),i.connect(qn);for(let s of[55,82.4,110.2,164.8]){let r=ut.createOscillator();r.type="sawtooth",r.frequency.value=s,r.detune.value=(Math.random()-.5)*12;let o=ut.createGain();o.gain.value=.25,r.connect(o),o.connect(e),r.start()}let t=ut.createOscillator();t.frequency.value=.07;let n=ut.createGain();n.gain.value=250,t.connect(n),n.connect(e.frequency),t.start()}catch{ut=null}}function QE(i){let e=ut.createBuffer(1,ut.sampleRate*i,ut.sampleRate),t=e.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;return e}function Id(){if(!ut)return;let i=ut.currentTime,e=ut.createBufferSource();e.buffer=QE(2.2);let t=ut.createBiquadFilter();t.type="bandpass",t.Q.value=2,t.frequency.setValueAtTime(200,i),t.frequency.exponentialRampToValueAtTime(4e3,i+1.6);let n=ut.createGain();n.gain.setValueAtTime(1e-4,i),n.gain.exponentialRampToValueAtTime(.9,i+.5),n.gain.exponentialRampToValueAtTime(1e-4,i+2.1),e.connect(t),t.connect(n),n.connect(qn),e.start(i);let s=ut.createOscillator();s.type="sine",s.frequency.setValueAtTime(90,i),s.frequency.exponentialRampToValueAtTime(900,i+1.5);let r=ut.createGain();r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(.35,i+.4),r.gain.exponentialRampToValueAtTime(1e-4,i+1.8),s.connect(r),r.connect(qn),s.start(i),s.stop(i+2)}function Ld(i){if(!ut)return;let e=ut.currentTime,t=ut.createOscillator();t.type="triangle",t.frequency.value=i?880:520;let n=ut.createGain();n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.25),t.connect(n),n.connect(qn),t.start(e),t.stop(e+.3)}var Ns=null;function eb(i){if(ut){if(!Ns){Ns=ut.createGain(),Ns.gain.value=0,Ns.connect(qn);let e=ut.createOscillator();e.type="sine",e.frequency.value=72;let t=ut.createOscillator();t.type="sine",t.frequency.value=108.5,e.connect(Ns),t.connect(Ns),e.start(),t.start()}Ns.gain.setTargetAtTime(i*.12,ut.currentTime,.2)}}var oe={pos:new I(0,0,0),vel:new I,yaw:0,pitch:0,ground:!0,hp:100,ko:0,pu:0,punchNow:!1},et={},Ft=!1,an=!1,ct=!1;function Xm(i){let e=Math.hypot(i.x,i.z),t=Math.atan2(i.x,-i.z),n=Math.abs(t)<Ws/2*oa-.02?nn-.45:yd+.25;if(e>n&&(i.x*=n/e,i.z*=n/e),bn.collide(i),An.collide(i),li.pos){let s=i.x-li.pos.x,r=i.z-li.pos.z,o=Math.hypot(s,r),a=.7;o<a&&o>1e-4&&(i.x=li.pos.x+s/o*a,i.z=li.pos.z+r/o*a)}if(Xt){let s=i.x-Xt.pos.x,r=i.z-Xt.pos.z,o=Math.hypot(s,r),a=1.05;o<a&&o>1e-4&&(i.x=Xt.pos.x+s/o*a,i.z=Xt.pos.z+r/o*a)}if(kn.pos){let s=i.x-kn.pos.x,r=i.z-kn.pos.z,o=Math.hypot(s,r),a=1.35;o<a&&o>1e-4&&(i.x=kn.pos.x+s/o*a,i.z=kn.pos.z+r/o*a)}for(let s of Yn){let r=i.x-s.pos.x,o=i.z-s.pos.z,a=r*s.n.x+o*s.n.z,l=r*s.t.x+o*s.t.z;for(let c of[-1,1]){let u=s.pos.x+s.t.x*c*2.05,h=s.pos.z+s.t.z*c*2.05,d=i.x-u,f=i.z-h,g=Math.hypot(d,f),x=.45+Om;g<x&&g>1e-4&&(i.x=u+d/g*x,i.z=h+f/g*x)}if(s.side==null&&(s.side=1),Math.abs(l)>=2.4?s.side=a>=.02?1:-1:a>=.55?s.side=1:a<=-.5&&(s.side=-1),Math.abs(l)<2.4&&a<.55&&a>-.5&&!(s.on&&Math.abs(l)<1.55&&!ct&&s.side>0)){let u=(s.side>0?.55:-.5)-a;i.x+=s.n.x*u,i.z+=s.n.z*u}}}function tb(){if(!ct)for(let i of Yn){if(!i.on)continue;let e=oe.pos.x-i.pos.x,t=oe.pos.z-i.pos.z,n=e*i.n.x+t*i.n.z,s=e*i.t.x+t*i.t.z;if(i.side>0&&n<.3&&n>-2&&Math.abs(s)<1.5&&oe.pos.y<3){kd(i.i);return}}}var qm="gbgc-raum-v1-",Bs={debug:1,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}};pn.get("peerhost")&&(Bs.host=pn.get("peerhost"),Bs.port=+(pn.get("peerport")||9e3),Bs.path=pn.get("peerpath")||"/",Bs.secure=!1,Bs.config={iceServers:[]});var me={role:"none",code:null,peer:null,conns:new Map,conn:null,myId:0,nextId:1,status:""},Dt=new Map,nb=0;function Kr(i,e){me.status=i,ie("netStatus").textContent=i,ie("netStatus").className=e?"warn":"",ds()}function Jl(){try{me.conn&&me.conn.close()}catch{}try{me.peer&&me.peer.destroy()}catch{}me.peer=null,me.conn=null,me.conns.clear();for(let i of Dt.values())dt.remove(i.av.root);Dt.clear(),clearInterval(me.joinRetry),me.joinRetry=null}function Gs(i=0){if(Jl(),me.role="host",me.code=Gm(),me.myId=0,me.nextId=1,me.names=new Map,Kr("Raum wird ge\xF6ffnet\u2026"),!window.Peer){Kr("Offline \u2013 Freunde k\xF6nnen gerade nicht beitreten.",!0);return}let e=new window.Peer(qm+me.code,Bs);me.peer=e,$m(e),e.on("open",()=>{me.peer===e&&Kr("Raum ist offen \u2013 Freunde k\xF6nnen beitreten.")}),e.on("error",t=>{if(me.peer===e){if(t.type==="unavailable-id"&&i<12){Kr("Raum wird ge\xF6ffnet\u2026 ("+(i+1)+")");try{e.destroy()}catch{}setTimeout(()=>{me.role==="host"&&me.peer===e&&Gs(i+1)},2500);return}(t.type==="network"||t.type==="server-error"||t.type==="socket-error"||t.type==="socket-closed")&&Kr("Keine Internet-Verbindung \u2013 Freunde k\xF6nnen gerade nicht beitreten.",!0)}}),e.on("disconnected",()=>{setTimeout(()=>{try{me.peer===e&&e.disconnected&&!e.destroyed&&e.reconnect()}catch{}},3e3)}),e.on("connection",t=>{t.on("data",s=>{if(me.peer!==e||!s)return;let r=me.conns.get(t.peer);if(s.t==="hello"){if(r)return;let o=me.nextId++;r={conn:t,id:o},me.conns.set(t.peer,r);let a=String(s.name||"Spieler").slice(0,16),l=Ud(o,a,null,s.lk);l.pid=t.peer;try{t.send({t:"welcome",id:o,code:me.code}),t.send({t:"dg",s:bn.state()}),t.send(Object.assign({t:"ufoS"},An.state()))}catch{}Ot(a+" ist dem Raum beigetreten"),Ld(!0);return}if(r){if(s.t==="s"){let o=Dt.get(r.id);o&&(o.tp.fromArray(s.p),o.ty=s.y,o.sp=s.v||0,o.air=!!s.a,o.ck=!!s.k,o.pu=s.u||0,o.ko=!!s.d,o.tk!==!!s.tk&&(o.tk=!!s.tk,ds()))}else if(s.t==="look"){let o=Dt.get(r.id);o&&Dd(o,s.lk)}else if(s.t==="portal"){let o=Yn[s.i];o&&o.on&&Jm(s.i,Dt.get(r.id)?.name,s.mis)}else if(s.t==="arc")a0(Dt.get(r.id)?.name);else if(s.t==="dg1")bn.hostTake(s.i|0,s.k|0);else if(s.t==="ufo")An.hostRequest();else if(s.t==="radc")An.control(String(s.c));else if(s.t==="hit"){let o=Dt.get(r.id);if(!(s.id|0))Rd(o?o.name:"Jemand");else for(let a of me.conns.values())if(a.id===(s.id|0))try{a.conn.send({t:"hit",by:o?o.name:"Jemand"})}catch{}}}});let n=()=>{let s=me.conns.get(t.peer);if(s){me.conns.delete(t.peer);let r=Dt.get(s.id);r&&(Ot(r.name+" hat den Raum verlassen"),jm(s.id))}};t.on("close",n),t.on("error",n)})}function ql(i,e={}){if(i=i.toUpperCase().replace(/[^A-Z0-9]/g,""),i.length!==5){ie("joinInfo").textContent="Der Code hat 5 Zeichen.";return}if(i===Gm()&&!e.silent){ie("joinInfo").textContent="Das ist dein eigener Raum-Code.";return}if(!window.Peer){ie("joinInfo").textContent="Keine Verbindung m\xF6glich (Internet?).";return}let t=()=>new Promise(s=>{let r=new window.Peer(Bs);$m(r);let o=!1,a=c=>{if(!o){if(o=!0,clearTimeout(l),!c)try{r.destroy()}catch{}s(c?r:null)}},l=setTimeout(()=>a(!1),15e3);r.on("error",()=>a(!1)),r.on("open",()=>{let c=r.connect(qm+i,{reliable:!0,serialization:"json"});c.on("open",()=>{c.send({t:"hello",name:ke.name,lk:ke.look})}),c.on("data",u=>{if(u&&u.t==="welcome"&&!o){r._conn=c,r._id=u.id,a(!0);return}r===me.peer&&ib(u)}),c.on("close",()=>{r===me.peer&&!ct&&Um(i)}),c.on("error",()=>{r===me.peer&&!ct&&Um(i)})})});return e.silent||(ie("joinInfo").textContent="Verbinde mit "+i+"\u2026"),(async()=>{for(let s=0;s<3;s++){let r=await t();if(r)return r;if(me.role==="client"&&me.code===i)return null}return null})().then(s=>{if(!s)return e.silent||(ie("joinInfo").textContent="Kein Raum mit diesem Code gefunden. Ist dein Freund in seinem Portal?"),!1;Jl(),me.role="client",me.code=i,me.peer=s,me.conn=s._conn,me.myId=s._id,Kr("Verbunden mit dem Raum von deinem Freund."),ie("joinInfo").textContent="",Ot("Du bist im Raum "+i),Ld(!0);try{sessionStorage.setItem("gbgc-letzter-raum",i)}catch{}return e.then&&e.then(),!0})}function Um(i){Ot("Verbindung zum Raum verloren \u2013 du bist jetzt in deinem eigenen Raum."),Gs(),Ym(i)}function Ym(i){let e=0;clearInterval(me.joinRetry);let t=()=>{if(me.role==="client"||ct){clearInterval(me.joinRetry);return}if(++e>60){clearInterval(me.joinRetry);return}ql(i,{silent:!0})};me.joinRetry=setInterval(t,5e3),setTimeout(t,800)}function ib(i){if(i)if(i.t==="w"){let e=new Set;for(let t of i.pl){if(t.id===me.myId)continue;e.add(t.id);let n=Dt.get(t.id);n?t.lk&&Dd(n,t.lk):n=Ud(t.id,t.n,t.c,t.lk),n.tp.fromArray(t.p),n.ty=t.y,n.sp=t.v||0,n.air=!!t.a,n.pid=t.pid,n.ck=!!t.k,n.pu=t.u||0,n.ko=!!t.d,n.tk!==!!t.tk&&(n.tk=!!t.tk,ds())}for(let t of[...Dt.keys()])e.has(t)||jm(t)}else i.t==="go"?Qm(i.i,i.code,"join",i.who,i.mis):i.t==="arcgo"?zd(i.code,"join",i.who):i.t==="msg"?Ot(i.s):i.t==="dg"&&Array.isArray(i.s)?bn.setState(i.s):i.t==="ufo"?An.remoteWave(i.n|0):i.t==="ufoS"?An.setState(i):i.t==="rad"&&i.s?An.setRad(i.s,i.n|0):i.t==="hit"&&Rd(i.by||"Jemand")}function Dd(i,e){let t=En(e),n=JSON.stringify(t);if(i.lkStr===n||(i.lkStr=n,i.look=t,!Zt))return;let s=i.av;i.av=Zr(i.name,i.color,t),i.av.root.position.copy(s.root.position),i.av.root.rotation.copy(s.root.rotation),dt.remove(s.root),Km(i,t)}function Km(i,e){Zt&&e.ch&&!Yr(Zt,e.ch)&&Zo(Zt,e.ch).then(()=>{Yr(Zt,e.ch)&&i.look===e&&(i.lkStr="",Dd(i,e))})}function Ud(i,e,t,n){let s=t||ta[(1+nb++)%ta.length],r=En(n),o={id:i,name:e,color:s,av:Zr(e,s,r),look:r,lkStr:JSON.stringify(r),p:new I(0,0,0),tp:new I(0,0,0),y:0,ty:0,sp:0,air:!1,fresh:!0};return Dt.set(i,o),Km(o,r),ds(),o}function jm(i){let e=Dt.get(i);e&&(dt.remove(e.av.root),Dt.delete(i),ds())}var pd=0,md=0,mt={stream:null,calls:new Map,talking:!1,audios:new Map,asking:!1};function $m(i){i.on("call",e=>{try{e.answer()}catch{return}e.on("stream",n=>{let s=mt.audios.get(e.peer);s||(s=new Audio,s.autoplay=!0,s.playsInline=!0,mt.audios.set(e.peer,s),document.body.appendChild(s)),s.srcObject=n,s.volume=ke.vol==null?.8:ke.vol,s.muted=ke.vol===0;let r=s.play();r&&r.catch&&r.catch(()=>{})});let t=()=>{let n=mt.audios.get(e.peer);n&&(n.srcObject=null,n.remove(),mt.audios.delete(e.peer))};e.on("close",t),e.on("error",t)})}async function sb(){if(mt.stream)return!0;if(mt.asking)return!1;if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return Ot("Sprechen geht in diesem Browser leider nicht."),!1;mt.asking=!0;try{mt.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch{return Ot("Mikrofon nicht erlaubt \u2013 bitte im Browser das Mikrofon erlauben."),mt.asking=!1,!1}mt.asking=!1;for(let i of mt.stream.getAudioTracks())i.enabled=!1;return Nd(),!0}function Nd(){if(!(!mt.stream||!me.peer||me.peer.destroyed)){for(let[i,e]of mt.calls)if(e._peer!==me.peer||![...Dt.values()].some(t=>t.pid===i)){try{e.close()}catch{}mt.calls.delete(i)}for(let i of Dt.values())if(!(!i.pid||mt.calls.has(i.pid)))try{let e=me.peer.call(i.pid,mt.stream);if(!e)continue;e._peer=me.peer,mt.calls.set(i.pid,e);let t=()=>{mt.calls.get(i.pid)===e&&mt.calls.delete(i.pid)};e.on("close",()=>{console.log("[voice] call closed",i.pid),t()}),e.on("error",n=>{console.log("[voice] call error",n&&n.type,n&&n.message),t()})}catch(e){console.log("[voice] call failed",e&&e.message)}}}async function rb(i){if(i&&!mt.stream){if(!await sb()){Qo=!1;return}if(!Qo)return}if(mt.talking=i&&!!mt.stream,mt.stream)for(let e of mt.stream.getAudioTracks())e.enabled=mt.talking;ie("talkInd").textContent=on?"\u{1F3A4} Mikro AN \u2013 nochmal \u{1F3A4} dr\xFCcken zum Ausschalten":"\u{1F3A4} Mikro AN \u2013 nochmal V dr\xFCcken zum Ausschalten",ie("talkInd").classList.toggle("hidden",!mt.talking),mt.talking&&!Dt.size&&Ot("Mikro ist an \u2013 aber gerade ist niemand im Raum."),ds()}var Qo=!1;setInterval(()=>{me.role!=="none"&&Nd()},1500);function Zm(){Qo=!Qo,rb(Qo)}function ob(i){if(md+=i,md>1&&(md=0,Nd()),pd+=i,pd<1/15)return;pd=0;let e=Math.hypot(oe.vel.x,oe.vel.z);if(me.role==="client"&&me.conn&&me.conn.open)try{me.conn.send({t:"s",p:[+oe.pos.x.toFixed(2),+oe.pos.y.toFixed(2),+oe.pos.z.toFixed(2)],y:+(oe.body??oe.yaw).toFixed(3),v:+e.toFixed(1),a:!oe.ground,tk:mt.talking,k:$r?1:0,u:oe.pu,d:oe.ko>0?1:0})}catch{}else if(me.role==="host"&&me.conns.size){let t=[{id:0,n:ke.name,c:ta[0],lk:ke.look,p:[+oe.pos.x.toFixed(2),+oe.pos.y.toFixed(2),+oe.pos.z.toFixed(2)],y:+(oe.body??oe.yaw).toFixed(3),v:+e.toFixed(1),a:!oe.ground,pid:me.peer&&me.peer.id,tk:mt.talking,k:$r?1:0,u:oe.pu,d:oe.ko>0?1:0}];for(let n of Dt.values())t.push({id:n.id,n:n.name,c:n.color,lk:n.look,p:[+n.tp.x.toFixed(2),+n.tp.y.toFixed(2),+n.tp.z.toFixed(2)],y:+n.ty.toFixed(3),v:n.sp,a:n.air,pid:n.pid,tk:!!n.tk,k:n.ck?1:0,u:n.pu||0,d:n.ko?1:0});for(let n of me.conns.values())try{n.conn.open&&n.conn.send({t:"w",pl:t})}catch{}}}var ab=i=>i&&i.game&&/^SPK/.test(i.game.ordner||i.game.name||"");function lb(i){ct=!0,document.pointerLockElement&&document.exitPointerLock();let e=ie("misPick");e||(e=document.createElement("div"),e.id="misPick",e.style.cssText='position:fixed;inset:0;z-index:80;display:flex;align-items:center;justify-content:center;background:rgba(5,3,12,.72);font-family:"Segoe UI",system-ui,sans-serif',document.body.appendChild(e)),e.innerHTML=`<div style="width:min(440px,92vw);max-height:92vh;overflow:auto;background:#140d22;border:2px solid #ff2fb0;border-radius:18px;padding:16px 16px 12px;box-shadow:0 0 40px rgba(255,47,176,.35)"><div style="text-align:center;font:900 22px Impact,'Arial Black',sans-serif;color:#ff2fb0;letter-spacing:1px">SPK \u2013 FUCK THE POLICE</div><div style="text-align:center;color:#ccc;font-size:13px;margin:4px 0 10px">Bei welcher Mission wollt ihr starten? Danach geht es der Reihe nach bis zum Schluss.</div>`+jp.map(s=>`<button data-m="${s.n}" style="display:flex;align-items:center;gap:10px;width:100%;margin:5px 0;padding:10px 12px;background:#221636;border:1px solid #4a3a6a;border-radius:10px;color:#fff;font-size:15px;cursor:pointer;text-align:left"><span style="font-size:20px">${s.icon}</span><b style="color:#ffd23f;min-width:18px">${s.n}</b><span>${s.name}</span></button>`).join("")+'<button data-m="0" style="width:100%;margin-top:8px;padding:9px;background:none;border:1px solid #555;border-radius:10px;color:#aaa;font-size:14px;cursor:pointer">\u2715 Abbrechen</button></div>';let t=s=>{e.remove(),removeEventListener("keydown",n,!0),ct=!1,s?kd(i,s):oe.pos.addScaledVector(Yn[i].n,2.5)},n=s=>{/^Digit[1-7]$/.test(s.code)?(s.preventDefault(),s.stopPropagation(),t(+s.code[5])):s.code==="Escape"&&(s.preventDefault(),s.stopPropagation(),t(0))};addEventListener("keydown",n,!0),e.querySelectorAll("button").forEach(s=>s.addEventListener("click",r=>{r.stopPropagation(),t(+s.dataset.m)}))}function kd(i,e){if(!ct){if(!e&&ab(Yn[i])){lb(i);return}if(me.role==="client"&&me.conn&&me.conn.open){try{me.conn.send({t:"portal",i,mis:e})}catch{}ct=!0,e0(Yn[i],"Warte auf den Raum\u2026"),Id(),setTimeout(()=>{ct&&!cs&&(ct=!1,ie("flash").classList.remove("on"),oe.pos.addScaledVector(Yn[i].n,2.5))},5e3);return}Jm(i,ke.name,e)}}var cs=!1;function Jm(i,e,t){if(cs)return;let n=Ad();for(let s of me.conns.values())try{s.conn.open&&s.conn.send({t:"go",i,code:n,who:e,mis:t})}catch{}Qm(i,n,"host",e,t)}function Qm(i,e,t,n,s){let r=Yn[i];if(!r||!r.on||cs)return;cs=!0,ct=!0;let o=r.game;e0(r,(n&&n!==ke.name?n+" hat das Portal betreten \u2013 ":"")+(o.name||o.ordner)+" startet\u2026"),Id();try{sessionStorage.setItem("gbgc-zurueck",JSON.stringify({role:me.role==="client"?"client":"host",code:me.code,t:Date.now()}))}catch{}let a=o.pfad+(o.start||"spiel/")+"?konsole="+t+"&code="+e+"&name="+encodeURIComponent(ke.name)+(s?"&mstart="+s:"")+(pn.get("peerhost")?"&peerhost="+pn.get("peerhost")+"&peerport="+(pn.get("peerport")||9e3)+"&ice=none&gfx=niedrig&noshadow":"");setTimeout(()=>{Jl(),location.href=a},t==="host"?1400:2600)}function e0(i,e){let t=ie("flash");t.style.background=`radial-gradient(circle at 50% 50%, #fff 0%, ${i.col} 45%, #000 100%)`,t.classList.add("on"),ie("flashText").textContent=e,document.pointerLockElement&&document.exitPointerLock()}function Ot(i){let e=document.createElement("div");e.className="toast",e.textContent=i,ie("toasts").appendChild(e),setTimeout(()=>e.classList.add("out"),4200),setTimeout(()=>e.remove(),5e3)}function ds(){let i=[{n:ke.name+" (du)",c:me.role==="client"?"#fff":ta[0],tk:mt.talking}];for(let t of Dt.values())i.push({n:t.name,c:t.color,tk:t.tk});let e="";me.role==="host"?e=`<div class="lbl">Dein Raum-Code</div><div class="code">${me.code}</div><div class="hint">Freunde: Portal starten \u2192 \u201EFreund beitreten" \u2192 diesen Code eingeben</div>`:me.role==="client"&&(e=`<div class="lbl">Im Raum von deinem Freund</div><div class="code">${me.code}</div>`),ie("room").innerHTML=e+`<div class="lbl" style="margin-top:10px">Im Raum (${i.length})</div>`+i.map(t=>`<div class="pl"><i style="background:${t.c}"></i>${yi(t.n)}${t.tk?' <b class="tk">\u{1F3A4} spricht</b>':""}</div>`).join("")+`<div class="st ${ie("netStatus").className}">${yi(me.status)}</div>`,ie("mCode").textContent=me.role==="host"?me.code:me.code||"\u2014",ie("mCodeLbl").textContent=me.role==="client"?"Du bist im Raum":"Dein Raum-Code"}var yi=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function hs(i){ie("menu").classList.toggle("hidden",!i),ie("hud").classList.toggle("dim",i)}function qs(){if(Vs&&!on){Ft=!0,ie("clickHint").classList.add("hidden"),hs(!1);return}if(on){Ft=!0,ie("clickHint").classList.add("hidden"),hs(!1);try{let i=document.documentElement;!document.fullscreenElement&&i.requestFullscreen&&i.requestFullscreen({navigationUI:"hide"}).then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}catch{}return}try{let i=ls.requestPointerLock({unadjustedMovement:!0});i&&i.catch&&i.catch(()=>{try{ls.requestPointerLock()}catch{}})}catch{try{ls.requestPointerLock()}catch{}}}var Vs=!1;ls.addEventListener("mousedown",i=>{i.isTrusted&&(Vs=!1)});Pm({canvas:ls,first:["bEnter","bResume"],isPlaying:()=>an&&Ft&&!sn&&!ct,canPlay:()=>an&&!Ft&&!sn&&!ct,padLock:()=>{Vs=!0,qs()},pause:()=>{Ft=!1,hs(!0)},back:()=>{sn?fs():an&&!ct&&(Vs=!0,qs())},onActive:()=>{if(Vs=!0,document.pointerLockElement)try{document.exitPointerLock()}catch{}}});function Bd(){Pd(),an=!0,hs(!1),qs()}ie("name").value=ke.name;var t0=()=>{for(let[i,e]of[["vol","vVol"],["wVol","wvVol"]])ie(i).value=ke.vol,ie(e).textContent=Math.round(ke.vol*100)+"%";ie("muteAll").classList.toggle("on",ke.vol===0),ie("muteAll").textContent=ke.vol===0?"\u{1F50A} Ton an":"\u{1F507} Ton aus",ie("volBtn").textContent=ke.vol===0?"\u{1F507}":"\u{1F50A}",ie("volBtn").classList.toggle("off",ke.vol===0)},_d=i=>{ke.vol=Math.max(0,Math.min(1,i)),t0(),qn&&(qn.gain.value=.9*ke.vol);for(let e of mt.audios.values())e.volume=ke.vol,e.muted=ke.vol===0;Zl()};t0();var Nm=ke.vol||.8;ie("vol").oninput=ie("wVol").oninput=i=>_d(+i.target.value);ie("muteAll").onclick=()=>{ke.vol>0?(Nm=ke.vol,_d(0)):_d(Nm||.8)};ie("volBtn").onclick=()=>ie("volPop").classList.toggle("hidden");for(let i of["mousedown","pointerdown","touchstart","click"])ie("volW").addEventListener(i,e=>e.stopPropagation());for(let i of["mousedown","touchstart"])document.addEventListener(i,e=>{ie("volW").contains(e.target)||ie("volPop").classList.add("hidden")},{capture:!0,passive:!0});ie("name").oninput=()=>{ke.name=ie("name").value.trim().slice(0,16)||"Neue Pussy1",Zl(),ds()};ie("bEnter").onclick=()=>{me.role==="none"&&Gs(),Bd()};ie("bJoin").onclick=()=>{Pd();let i=ie("code").value;ql(i).then(e=>{e&&Bd()})};ie("code").addEventListener("keydown",i=>{i.key==="Enter"&&ie("bJoin").click()});ie("bOwn").onclick=()=>{Gs(),Ot("Du bist wieder in deinem eigenen Raum."),Bd()};ls.addEventListener("click",()=>{an&&!Ft&&!ct&&!sn?qs():Ft&&bt&&Fd(bt)});document.addEventListener("pointerlockchange",()=>{Vs||(Ft=document.pointerLockElement===ls,ie("clickHint").classList.toggle("hidden",Ft||!an||ct||sn),!Ft&&an&&!ct&&!sn&&hs(!0))});document.addEventListener("mousemove",i=>{if(!Ft)return;let e=.0022*(ke.sens||1);oe.yaw-=i.movementX*e,oe.pitch-=i.movementY*e*(ke.invert?-1:1),oe.pitch=Math.max(-1.1,Math.min(.75,oe.pitch))});document.addEventListener("keydown",i=>{if(i.code==="F11"){i.preventDefault();try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>{an&&!ie("menu").classList.contains("hidden")||an&&qs()}).catch(()=>{})}catch{}return}document.activeElement&&/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)||(et[i.code]=!0,(i.code==="KeyV"||i.code==="KeyM")&&an&&!i.repeat&&Zm(),i.code==="KeyE"&&Ft&&bt&&Fd(bt),i.code==="KeyF"&&Ft&&!i.repeat&&!ct&&$E(),i.code==="Space"&&i.preventDefault(),/^Control/.test(i.code)&&i.preventDefault())},!0);document.addEventListener("keyup",i=>{et[i.code]=!1});window.addEventListener("blur",()=>{for(let i in et)et[i]=!1});function cb(){if(!on)return;let i=document.createElement("div");i.id="touch",i.className="hidden",i.innerHTML='<div id="tLook"></div><div id="tJoy"><div id="tJoyBase"></div><div id="tKnob"></div></div><div id="tBtns"><button class="tb" id="tTalk">\u{1F3A4}</button><button class="tb big" id="tUse">E</button><button class="tb" id="tJump">SPRING</button></div><button id="tPause" aria-label="Men\xFC">\u2630</button>',document.body.appendChild(i);let e=ie("tLook"),t=ie("tJoy"),n=ie("tKnob"),s=new Map;e.addEventListener("touchstart",g=>{g.preventDefault();for(let x of g.changedTouches)s.set(x.identifier,[x.clientX,x.clientY])},{passive:!1}),e.addEventListener("touchmove",g=>{g.preventDefault();for(let x of g.changedTouches){let m=s.get(x.identifier);if(!m)continue;let p=.0055*(ke.sens||1);oe.yaw-=(x.clientX-m[0])*p,oe.pitch=Math.max(-1.1,Math.min(.75,oe.pitch-(x.clientY-m[1])*p*.8)),m[0]=x.clientX,m[1]=x.clientY}},{passive:!1});let r=g=>{for(let x of g.changedTouches)s.delete(x.identifier)};e.addEventListener("touchend",r),e.addEventListener("touchcancel",r);let o=null,a=0,l=0,c=56,u=(g,x)=>{let m=g-a,p=x-l,y=Math.hypot(m,p);y>c&&(m*=c/y,p*=c/y),n.style.transform=`translate(${m}px,${p}px)`;let _=m/c,v=p/c,w=.3;et.KeyW=v<-w,et.KeyS=v>w,et.KeyA=_<-w,et.KeyD=_>w},h=()=>{o=null,n.style.transform="",et.KeyW=et.KeyS=et.KeyA=et.KeyD=!1};t.addEventListener("touchstart",g=>{if(g.preventDefault(),o!==null)return;let x=g.changedTouches[0];o=x.identifier;let m=t.getBoundingClientRect();a=m.left+m.width/2,l=m.top+m.height/2,u(x.clientX,x.clientY)},{passive:!1}),t.addEventListener("touchmove",g=>{g.preventDefault();for(let x of g.changedTouches)x.identifier===o&&u(x.clientX,x.clientY)},{passive:!1});let d=g=>{for(let x of g.changedTouches)x.identifier===o&&h()};t.addEventListener("touchend",d),t.addEventListener("touchcancel",d);let f=(g,x,m)=>{let p=ie(g);p.addEventListener("touchstart",y=>{y.preventDefault(),y.stopPropagation(),p.classList.add("on"),x()},{passive:!1}),p.addEventListener("touchend",y=>{y.preventDefault(),p.classList.remove("on"),m&&m()},{passive:!1})};f("tJump",()=>{et.Space=!0},()=>{et.Space=!1}),f("tUse",()=>{bt&&Fd(bt)}),f("tTalk",()=>Zm()),ie("tPause").addEventListener("click",()=>{Ft=!1,h(),hs(!0)}),setInterval(()=>{i.classList.toggle("hidden",!(an&&Ft&&!ct&&!sn)),ie("tUse").classList.toggle("hot",!!bt),ie("tTalk").classList.toggle("mic",mt.talking),Ft||h()},150)}cb();var km=new Ur,ks=null;function n0(){requestAnimationFrame(n0);let i=Math.min(km.getDelta(),.05),e=km.elapsedTime,t=(et.KeyW||et.ArrowUp?1:0)-(et.KeyS||et.ArrowDown?1:0),n=(et.KeyD||et.ArrowRight?1:0)-(et.KeyA||et.ArrowLeft?1:0);oe.ko=Math.max(0,oe.ko-i),oe.koWas&&oe.ko<=0&&ZE(),oe.koWas=oe.ko>0,$r=!!(et.ControlLeft||et.ControlRight||et.KeyC)&&Ft&&oe.ko<=0;let s=Ft&&!ct&&oe.ko<=0,r=($r?2.6:et.ShiftLeft||et.ShiftRight?10.5:6.5)*bn.speedMul(),o=new I;s&&(o.set(n,0,-t),o.lengthSq()>0&&o.normalize().multiplyScalar(r).applyAxisAngle(new I(0,1,0),oe.yaw),bn.drift(o,e));let a=oe.ground?12:3;oe.vel.x+=(o.x-oe.vel.x)*Math.min(1,a*i),oe.vel.z+=(o.z-oe.vel.z)*Math.min(1,a*i),s&&et.Space&&oe.ground&&(oe.vel.y=6.2*bn.jumpMul(),oe.ground=!1,An.jump()),oe.vel.y-=18*i,oe.pos.addScaledVector(oe.vel,i),oe.pos.y<=0&&(oe.pos.y=0,oe.vel.y=0,oe.ground=!0),Xm(oe.pos),tb();{let u=new I(oe.pos.x,oe.pos.y+GE-($r?.5:.05),oe.pos.z),h=Math.cos(oe.pitch),d=new I(Math.sin(oe.yaw)*h,-Math.sin(oe.pitch),Math.cos(oe.yaw)*h),f=zb,g=new I(Math.cos(oe.yaw),0,-Math.sin(oe.yaw));for(;f>.6;f-=.1){let x=u.clone().addScaledVector(d,f).addScaledVector(g,.45);if(Math.hypot(x.x,x.z)<nn-.4&&x.y>.25)break}Xl=f,Nn.position.copy(u).addScaledVector(d,f).addScaledVector(g,.45),Nn.rotation.set(oe.pitch,oe.yaw,0,"YXZ")}ks=null;let l=1e9;for(let u of Yn){u.mat.uniforms.t.value=e+u.i;let h=Math.hypot(oe.pos.x-u.pos.x,oe.pos.z-u.pos.z),d=u.on?Math.max(0,1-h/7):0;if(u.mat.uniforms.hot.value=d,u.light&&(u.light.intensity=12+Math.sin(e*2+u.i)*2+d*10),u.parts){let f=u.parts.geometry.attributes.position,g=u.parts.userData.sp;for(let x=0;x<f.count;x++){let m=f.getY(x)+g[x]*i;m>4.6&&(m=0),f.setY(x,m)}f.needsUpdate=!0}u.on&&h<l&&(l=h,h<6.5&&(ks=u))}eb(ks?Math.max(0,1-l/6.5):0);let c=ie("prompt");xb(),bt===Od&&!ct?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ff7fd8">\u{1F579}\uFE0F SPK Arcade</b><br><small>${on?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Retro-Spiele spielen</small>`):bt===Hd&&!ct?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ff7fd8">\u{1F455} S.P.K Merch</b><br><small>${on?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = T-Shirts ansehen</small>`):bt===Gd&&!ct?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ffd23f">Umkleide</b><br><small>${on?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = umziehen</small>`):bt===Vd&&!ct?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#9fe8b0">G\xE4stebuch</b><br><small>${on?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = lesen & reinschreiben</small>`):bt===Yl&&!ct?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#e3b27a">N\xE4chste Party</b><br><small>${on?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Flyer gro\xDF ansehen</small>`):bt&&bt.radio&&!ct?(c.classList.remove("hidden"),c.innerHTML=An.prompt(on)):bt&&bt.secret&&!ct?(c.classList.remove("hidden"),c.innerHTML=bn.prompt(bt,on)):bt&&!ct?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ff7fd8">${yi(bt.dj.name||"DJ")}</b><br><small>${on?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Instagram, SoundCloud & Co.</small>`):ks&&!ct?(c.classList.remove("hidden"),c.innerHTML=`${on?"Geh ins Portal":"Lauf ins Portal"}: <b style="color:${ks.col}">${yi(ks.game.name||ks.game.ordner)}</b> startet sofort`+(Dt.size?"<br><small>Alle im Raum kommen mit</small>":"")):c.classList.add("hidden"),wb(i),os&&(os.rotation.y=e*.25,os.position.y=6.2+Math.sin(e*.8)*.15);for(let u of Dt.values()){u.fresh&&(u.p.copy(u.tp),u.y=u.ty,u.fresh=!1),u.p.lerp(u.tp,Math.min(1,i*12));let h=u.ty-u.y;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;u.y+=h*Math.min(1,i*12),u.av.root.position.copy(u.p),u.av.root.rotation.y=u.y,u.av.tag.lookAt(Nn.position.x,u.p.y+2.15,Nn.position.z),Dm(u.av,u.sp,u.air,i,{crouch:u.ck,punch:u.puSeen!==void 0&&u.pu!==u.puSeen,dead:u.ko}),u.puSeen=u.pu}if(ai){let u=li.pos&&Math.hypot(oe.pos.x-li.pos.x,oe.pos.z-li.pos.z)<12;ai.root.visible=!0,jr&&(jr.visible=!!u||!0);{let h=Math.hypot(oe.vel.x,oe.vel.z);if(h>.5){let f=Math.atan2(-oe.vel.x,-oe.vel.z)-(oe.body??oe.yaw);for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;oe.body=(oe.body??oe.yaw)+f*Math.min(1,i*12)}ai.root.position.copy(oe.pos),ai.root.rotation.y=oe.body??oe.yaw,oe.ko>0&&(ai.root.rotation.z=0),Dm(ai,h,!oe.ground,i,{crouch:$r,punch:oe.punchNow,dead:oe.ko>0}),oe.punchNow=!1}}me.role!=="none"&&ob(i),bn.tick(i,e),An.tick(i,e),Xt&&Xt.tick(e,oe.pos.distanceTo(Xt.pos)<14),bn.render(gi)||(gi?gi.render():us.render(dt,Nn))}var JS=new I,hb=[["instagram","Instagram","#e1306c"],["facebook","Facebook","#1877f2"],["soundcloud","SoundCloud","#ff5500"],["tiktok","TikTok","#25f4ee"],["youtube","YouTube","#ff0000"],["spotify","Spotify","#1db954"],["mixcloud","Mixcloud","#5000ff"],["beatport","Beatport","#01ff95"],["website","Webseite","#ffffff"]],Jr=[],bt=null,sn=!1;async function ub(){try{let e=await(await fetch("/System/djs.json",{cache:"no-store"})).json();return Array.isArray(e)?e:e.djs||[]}catch{return[]}}function db(i,e){let s=Bt(512,640,r=>{let o=r.createLinearGradient(0,0,0,640);o.addColorStop(0,"#1a0f24"),o.addColorStop(1,"#07060c"),r.fillStyle=o,r.fillRect(0,0,512,640),r.fillStyle="#2b2236",r.beginPath(),r.arc(256,250,92,0,Math.PI*2),r.fill(),r.beginPath(),r.ellipse(256,520,170,150,0,Math.PI,0),r.fill(),r.strokeStyle="#ff2fb0",r.lineWidth=16,r.beginPath(),r.arc(256,250,112,Math.PI*1.08,Math.PI*1.92),r.stroke(),r.fillStyle="#ff2fb0",r.fillRect(128,240,30,62),r.fillRect(354,240,30,62),r.fillStyle="rgba(255,255,255,0.35)",r.font="600 26px system-ui, sans-serif",r.textAlign="center",r.fillText("Foto folgt",256,90)});if(i.foto){let r=new Image;r.onload=()=>{let o=s.image,a=o.getContext("2d"),l=Math.max(o.width/r.width,o.height/r.height),c=r.width*l,u=r.height*l;a.drawImage(r,(o.width-c)/2,(o.height-u)/2,c,u),s.needsUpdate=!0},r.src=/^(https?:)?\//.test(i.foto)?i.foto:"/System/dj-fotos/"+i.foto}return s}async function fb(){let i=await ub(),e=Math.max(1,i.length),t=$l+.45,n=wd-.62,s=.22,r=.06,o=.22,a=.24,l=Math.min((n-t-s-o-a-3*r)/e,.29),c=e*l+3*r+s+o+a,u=(t+n)/2-c/2+l/2,h=u+l*(e-1)/2,d=nn-.12,f=1.7,g=2.15,x=2.75,m=u+(e-1)*l+l/2+r+a/2,p=m+a/2+r+s/2;gb(m),_b(p,d),Ib(p+s/2+r+o/2,d);try{let w=p+s/2+r+o,E=kn.ang-.125;Pb((w+E)/2,d)}catch(w){console.warn("Bestenliste",w)}if(!i.length)return;let y=Bt(1024,128,(w,E,A)=>{w.clearRect(0,0,E,A),w.textAlign="center",w.textBaseline="middle",w.font='400 120px Impact, "Arial Black", sans-serif',w.shadowColor="#ff2fb0",w.shadowBlur=6,w.fillStyle="#ff7fd8",w.fillText("SPK DJs",E/2,A/2)}),_=new F(new at(6,.75),new Ue({map:y,transparent:!0,toneMapped:!1,depthWrite:!1,color:13684944}));_.position.set(Math.sin(h)*(d-.05),x+g/2+.85,-Math.cos(h)*(d-.05)),_.lookAt(0,x+g/2+.85,0),dt.add(_);let v=new ye({color:1776418,roughness:.35,metalness:.8});i.forEach((w,E)=>{let A=u+E*l,P=new Xe;P.position.set(Math.sin(A)*d,x,-Math.cos(A)*d),P.lookAt(0,x,0),dt.add(P);let S=new F(new Oe(f+.22,g+.22+.42,.08),v);S.position.y=-.21,P.add(S);let b=new F(new at(f,g),new Ue({map:db(w,E),toneMapped:!1}));b.position.z=.05,P.add(b);let L=Bt(512,96,(z,k,te)=>{z.fillStyle="#0b0910",z.fillRect(0,0,k,te),z.textAlign="center",z.textBaseline="middle",z.font='400 58px Impact, "Arial Black", sans-serif',z.fillStyle="#fff",z.fillText(String(w.name||"DJ "+(E+1)).toUpperCase(),k/2,te/2+2)}),H=new F(new at(f,.34),new Ue({map:L,toneMapped:!1}));H.position.set(0,-g/2-.22,.05),P.add(H);let D=new F(new Oe(f+.3,.03,.03),new Ue({color:16723888,toneMapped:!1}));D.position.set(0,g/2+.13,.06),P.add(D);let B=new fi(16769268,9,7,.5,.6,1.5);B.position.set(0,g/2+1.2,1.4),B.target=b,P.add(B),Jr.push({dj:w,g:P,pic:b,edge:D,i:E})})}var Hd={merch:!0},Qr=null,na={url:"",text:"Offizielle S.P.K T-Shirts"},pb="/SPK%20-%20Fuck%20the%20Police/spiel/assets/spk_logo.png";function mb(i,e){let t=new Di,n=i/2;t.moveTo(-n*.62,-e/2),t.lineTo(n*.62,-e/2),t.lineTo(n*.64,e*.18),t.lineTo(n*.98,e*.06),t.lineTo(n*1.18,e*.3),t.lineTo(n*.78,e*.5),t.lineTo(n*.24,e*.5),t.quadraticCurveTo(0,e*.36,-n*.24,e*.5),t.lineTo(-n*.78,e*.5),t.lineTo(-n*1.18,e*.3),t.lineTo(-n*.98,e*.06),t.lineTo(-n*.64,e*.18),t.closePath();let s=new Oo(t,12),r=s.attributes.position,o=s.attributes.uv;for(let a=0;a<r.count;a++)o.setXY(a,(r.getX(a)+n*1.18)/(n*2.36),(r.getY(a)+e/2)/e);return s}var gd={};function Bm(i,e){let t=i+e;if(gd[t])return gd[t];let n=new Image,s=Bt(256,256,(r,o,a)=>{r.fillStyle=i,r.fillRect(0,0,o,a);for(let l=0;l<900;l++)r.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},0.035)`,r.fillRect(Math.random()*o,Math.random()*a,2,2);r.strokeStyle="rgba(0,0,0,0.18)",r.lineWidth=3,r.beginPath(),r.moveTo(66,150),r.lineTo(80,210),r.moveTo(190,150),r.lineTo(176,210),r.stroke(),r.font='400 30px Impact, "Arial Black", sans-serif',r.textAlign="center",r.fillStyle=e,r.fillText("S.P.K",o/2,190),r.font="700 11px Arial",r.fillText("SOUNDSYSTEM",o/2,206)});return n.onload=()=>{let r=s.image,o=r.getContext("2d");(e==="#ffffff"||e==="#39ff88"||e==="#ff2fb0")&&(o.save(),o.globalCompositeOperation="source-over"),o.drawImage(n,88,70,80,80),e&&o.restore&&o.restore(),s.needsUpdate=!0},n.src=pb,gd[t]=s,s}async function gb(i){try{let D=await fetch("/System/merch.json",{cache:"no-store"});na=Object.assign(na,await D.json())}catch{}let e=nn-1.12,t=new Xe;t.position.set(Math.sin(i)*e,0,-Math.cos(i)*e),t.lookAt(0,0,0),dt.add(t);let n=3.6,s=1.7,r=2.55,o=new ye({map:o0(),roughness:.75,metalness:0}),a=new ye({color:1381658,roughness:.6,metalness:.4}),l=(D,B,z,k,te,q,ge)=>{let xe=new F(new Oe(D,B,z),ge);return xe.position.set(k,te,q),xe.castShadow=!0,xe.receiveShadow=!0,t.add(xe),xe};l(n,.1,s,0,.05,0,o);for(let D of[-n/2+.08,n/2-.08])for(let B of[-s/2+.08,s/2-.12])l(.1,r,.1,D,r/2+.1,B,a);let c=Bt(1024,512,(D,B,z)=>{let k=D.createLinearGradient(0,0,0,z);k.addColorStop(0,"#1b1b22"),k.addColorStop(1,"#0b0b0f"),D.fillStyle=k,D.fillRect(0,0,B,z);for(let te=0;te<B;te+=6)D.fillStyle="rgba(255,255,255,0.02)",D.fillRect(te,0,2,z)});l(n-.2,r-.1,.04,0,r/2+.15,-s/2+.06,new ye({map:c,roughness:.95}));let u=new ye({color:13620184,metalness:1,roughness:.25}),h=new F(new je(.02,.02,n-.3,10),u);h.rotation.z=Math.PI/2,h.position.set(0,2.05,-s/2+.32),t.add(h);let d=[["#0d0d0f","#ff2fb0"],["#f2f2f2","#111111"],["#ff2fb0","#0d0d0f"],["#0d0d0f","#39ff88"],["#20e0ff","#0d0d0f"],["#0d0d0f","#ffffff"]],f=mb(.62,.72);d.forEach(([D,B],z)=>{let k=-1.3+z*.52,te=new F(f,new ye({map:Bm(D,B),color:13421772,roughness:1,side:Pt}));te.position.set(k,1.62,-s/2+.34+z*.004),te.rotation.y=(z%2?1:-1)*.06,te.castShadow=!0,t.add(te);let q=new F(new Wt(.035,.006,6,12,Math.PI*1.4),u);q.position.set(k,2.03,-s/2+.34),t.add(q);let ge=new F(new Oe(.44,.015,.015),u);ge.position.set(k,1.96,-s/2+.345),t.add(ge)});let g=Bt(1024,256,(D,B,z)=>{D.fillStyle="#0d0d10",D.fillRect(0,0,B,z),D.strokeStyle="#ff2fb0",D.lineWidth=8,D.strokeRect(10,10,B-20,z-20),D.font='400 120px Impact, "Arial Black", sans-serif',D.textAlign="center",D.textBaseline="middle",D.fillStyle="#ffffff",D.fillText("S.P.K  MERCH",B/2,z/2+6),D.font="700 26px Arial",D.fillStyle="#39ff88",D.fillText("T-SHIRTS \xB7 SOUNDSYSTEM \xB7 LINZ",B/2,z-34)}),x=[o,o,o,o,new ye({map:g,roughness:.6}),o],m=new F(new Oe(n-.3,1,.55),x);m.position.set(0,.6,s/2-.3),m.castShadow=!0,t.add(m),l(n-.2,.05,.65,0,1.125,s/2-.3,o);let p=(D,B,z,k)=>{for(let te=0;te<k;te++){let q=new F(new Oe(.34,.035,.26),[new ye({color:D,roughness:.95}),new ye({color:D,roughness:.95}),new ye({map:Bm(D,B),roughness:.95}),new ye({color:D,roughness:.95}),new ye({color:D,roughness:.95}),new ye({color:D,roughness:.95})]);q.position.set(z+(Math.random()-.5)*.02,1.17+te*.036,s/2-.32),q.rotation.y=(Math.random()-.5)*.08,q.castShadow=!0,t.add(q)}};p("#0d0d0f","#ff2fb0",-1.15,5),p("#f2f2f2","#111111",-.6,4),p("#ff2fb0","#0d0d0f",.55,4),p("#0d0d0f","#39ff88",1.1,6);let y=Bt(256,128,(D,B,z)=>{D.fillStyle="#ffe22f",D.fillRect(0,0,B,z),D.fillStyle="#111",D.font="900 64px Arial",D.textAlign="center",D.textBaseline="middle",D.fillText("25 \u20AC",B/2,z/2+4)}),_=new Ue({map:y,color:11579568});for(let D of[-.88,.82]){let B=new F(new at(.3,.15),_);B.position.set(D,1.24,s/2-.01),B.rotation.x=-.35,t.add(B)}l(.22,.06,.16,.05,1.18,s/2-.42,a);let v=Bt(512,256,(D,B,z)=>{for(let k=0;k<16;k++)D.fillStyle=k%2?"#ff2fb0":"#111114",D.fillRect(k*32,0,32,z);D.fillStyle="rgba(255,255,255,0.08)",D.fillRect(0,z-30,B,30)}),w=new F(new at(n+.3,s+.5),new ye({map:v,roughness:.8,side:Pt}));w.rotation.x=-Math.PI/2+.22,w.position.set(0,r+.12,.2),w.castShadow=!0,t.add(w);let E=Bt(512,64,(D,B,z)=>{for(let k=0;k<16;k++)D.fillStyle=k%2?"#ff2fb0":"#111114",D.beginPath(),D.moveTo(k*32,0),D.lineTo(k*32+32,0),D.lineTo(k*32+32,40),D.quadraticCurveTo(k*32+16,64,k*32,40),D.closePath(),D.fill()},!0);E.premultiplyAlpha=!1;let A=new F(new at(n+.3,.28),new ye({map:E,transparent:!0,roughness:.8,side:Pt}));A.position.set(0,r-.1,s/2+.43),t.add(A);let P=Xs([{t:"S.P.K MERCH",size:120,c:"#ffffff",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"#ff2fb0"}],{w:1024,h:180,pw:2.6});P.position.set(0,r+.62,s/2-.1),t.add(P);let S=new Ue({color:12098144});for(let D=0;D<11;D++){let B=-n/2+.05+D*(n-.1)/10,z=new F(new pt(.035,8,6),S);z.position.set(B,r-.2-Math.sin(D/10*Math.PI)*.12,s/2+.45),t.add(z)}let b=new yn(16767144,2.2,5,1.6);b.position.set(0,r-.6,.6),t.add(b);let L=new fi(16773856,4.2,7,.7,.7,1.5);L.position.set(0,r,1.6);let H=new Lt;H.position.set(0,1.5,-.5),t.add(L,H),L.target=H,Qr=new F(new Oe(n+.3,r+1.2,s+.6),new Ue({transparent:!0,opacity:0,depthWrite:!1})),Qr.position.set(0,(r+1.2)/2,0),t.add(Qr),Md.pos=t.position.clone(),Md.yaw=i}var Md={pos:null,yaw:0};function i0(){sn=!0;for(let e in et)et[e]=!1;try{document.exitPointerLock()}catch{}ie("djName").textContent="S.P.K MERCH",ie("djInfo").textContent=na.text||"Offizielle S.P.K T-Shirts";let i=ie("djPhoto");i.src="/System/dj-fotos/spk.jpg",i.classList.remove("hidden"),i.classList.remove("big"),Ed(),ie("djBox").classList.remove("hidden")}var s0=()=>{try{return localStorage.getItem("spk-merch-shirt")==="1"}catch{return!1}};function Ed(){let i=s0(),e=!!(ke.look&&ke.look.spk),t=i?`<button class="djl" id="mWear" style="--c:#39ff88">${e?"\u{1F455} Shirt ausziehen":"\u{1F455} Shirt anziehen"}</button>`:'<button class="djl" id="mBuy" style="--c:#39ff88">\u{1F6D2} Gratis kaufen (nur im Spiel)</button>';ie("djLinks").innerHTML=t+'<p class="djnone" style="margin:6px 0 10px;opacity:.8">Das Spiel-Shirt ist gratis. Das echte T-Shirt kostet 25 \u20AC:</p>'+(na.url?`<a class="djl" href="${yi(na.url)}" target="_blank" rel="noopener" style="--c:#ff2fb0">\u{1F455} Zum T-Shirt-Shop</a>`:'<p class="djnone">Link ist bald verf\xFCgbar.</p>');let n=o=>{if(ke.look=En(Object.assign({},ke.look,{spk:o?1:0})),Zl(),ec(),me.role==="client"&&me.conn)try{me.conn.send({t:"look",lk:ke.look})}catch{}},s=ie("mBuy");s&&(s.onclick=()=>{try{localStorage.setItem("spk-merch-shirt","1")}catch{}n(!0),Ld(!0),Ot("Danke! Du tr\xE4gst jetzt das S.P.K T-Shirt \u2013 in der Umkleide kannst du es an- und ausziehen."),Ed()});let r=ie("mWear");r&&(r.onclick=()=>{let o=!(ke.look&&ke.look.spk);n(o),Ot(o?"S.P.K T-Shirt angezogen.":"S.P.K T-Shirt ausgezogen."),Ed()})}var xd=new Ml;function xb(){if(bt=null,!Ft||ct)return;xd.setFromCamera({x:0,y:0},Nn),xd.far=9+Xl;let i=Jr.map(n=>n.pic);mi&&i.push(mi),Fs&&i.push(Fs),eo&&i.push(eo),Xt&&i.push(Xt.hit),Qr&&i.push(Qr);let e=bn.targets();for(let n of e)i.push(n);for(let n of An.targets())i.push(n);let t=xd.intersectObjects(i,!1).filter(n=>n.distance>Xl*.6);for(let n of t)n.distance=Math.max(0,n.distance-Xl);if(t.length&&t[0].object.userData.aim&&t[0].object.userData.aim.radio)bt=t[0].distance<4.5?t[0].object.userData.aim:null;else if(t.length&&t[0].object.userData.aim){let n=t[0].object.userData.aim;bt=t[0].distance<2.8&&bn.canAim(n)?n:null}else t.length&&Xt&&t[0].object===Xt.hit?bt=t[0].distance<4.2?Od:null:t.length&&t[0].object===Qr?bt=t[0].distance<5.5?Hd:null:t.length&&t[0].distance<6?bt=t[0].object===eo?Gd:t[0].object===mi?Yl:t[0].object===Fs?Vd:Jr.find(n=>n.pic===t[0].object)||null:bt=null;for(let n of Jr)n.edge.scale.y=n===bt?3:1;mi&&mi.scale.setScalar(bt===Yl?1.02:1)}function Fd(i){if(i&&i.secret){bn.use(i);return}if(i&&i.radio){An.openRadio();return}if(i===Yl){Mb();return}if(i===Vd){Lb();return}if(i===Gd){l0();return}if(i===Od){bb();return}if(i===Hd){i0();return}let e=i.dj;sn=!0;for(let s in et)et[s]=!1;try{document.exitPointerLock()}catch{}let t=hb.filter(([s])=>e[s]).map(([s,r,o])=>`<a class="djl" href="${yi(e[s])}" target="_blank" rel="noopener" style="--c:${o}">${r}</a>`).join("");ie("djName").textContent=e.name||"DJ",ie("djInfo").textContent=e.info||"",ie("djLinks").innerHTML=t||'<p class="djnone">F\xFCr diesen DJ sind noch keine Links eingetragen.</p>',ie("djPhoto").classList.remove("big");let n=ie("djPhoto");e.foto?(n.src=/^(https?:)?\//.test(e.foto)?e.foto:"/System/dj-fotos/"+e.foto,n.classList.remove("hidden")):n.classList.add("hidden"),ie("djBox").classList.remove("hidden")}function fs(){ie("radBox")&&ie("radBox").classList.add("hidden"),ie("djBox").classList.add("hidden"),ie("gbBox").classList.add("hidden"),ie("wrBox").classList.add("hidden"),He.open=!1,sn=!1,an&&qs()}ie("djClose").onclick=fs;ie("djBox").addEventListener("click",i=>{i.target.id==="djBox"&&fs()});var Yl={flyer:!0},mi=null,oi={};async function yb(){try{return await(await fetch("/System/party.json",{cache:"no-store"})).json()}catch{return{}}}function r0(i){return/^(https?:)?\/\//.test(i)?i:"/System/flyer/"+i}function o0(){return Bt(1024,1280,(i,e,t)=>{let s=t/6;for(let r=0;r<6;r++){let o=[120,78,44].map(a=>a+Math.floor((Math.random()-.5)*22));i.fillStyle=`rgb(${o})`,i.fillRect(0,r*s,e,s);for(let a=0;a<70;a++){let l=r*s+Math.random()*s;i.strokeStyle=`rgba(${Math.random()<.5?"60,35,15":"170,120,75"},${.08+Math.random()*.12})`,i.lineWidth=1+Math.random()*3,i.beginPath(),i.moveTo(0,l);for(let c=0;c<=e;c+=64)i.lineTo(c,l+Math.sin(c/90+a)*4);i.stroke()}if(Math.random()<.7){let a=Math.random()*e,l=r*s+s/2,c=i.createRadialGradient(a,l,2,a,l,26);c.addColorStop(0,"rgba(50,28,10,0.7)"),c.addColorStop(1,"rgba(50,28,10,0)"),i.fillStyle=c,i.beginPath(),i.ellipse(a,l,40,18,0,0,Math.PI*2),i.fill()}i.fillStyle="rgba(25,14,6,0.85)",i.fillRect(0,r*s,e,5);for(let a of[60,e-60])i.fillStyle="#3a3a3a",i.beginPath(),i.arc(a,r*s+s/2,9,0,Math.PI*2),i.fill()}})}function vb(i){return Bt(768,1086,(e,t,n)=>{e.fillStyle="#f2ece0",e.fillRect(0,0,t,n),e.fillStyle="#ff2fb0",e.fillRect(0,0,t,150),e.textAlign="center",e.textBaseline="middle",e.font='400 96px Impact, "Arial Black", sans-serif',e.fillStyle="#fff",e.fillText("SPK",t/2,80),e.font='400 84px Impact, "Arial Black", sans-serif',e.fillStyle="#18101c",e.fillText("N\xC4CHSTE",t/2,330),e.fillText("PARTY",t/2,430),e.font='600 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="#5a5060";let s=String(i||"Flyer folgt \u2013 bald steht hier, wann und wo die n\xE4chste SPK Party steigt!").split(" "),r="",o=600;for(let a of s){let l=r?r+" "+a:a;e.measureText(l).width>t-120?(e.fillText(r,t/2,o),o+=56,r=a):r=l}r&&e.fillText(r,t/2,o)})}async function _b(i,e){oi=await yb();let t=2.75,n=3,s=3.7,r=new Xe;r.position.set(Math.sin(i)*(e-.02),t,-Math.cos(i)*(e-.02)),r.lookAt(0,t,0),dt.add(r);let o=new F(new Oe(n,s,.12),new ye({map:o0(),roughness:.85,metalness:0}));r.add(o);let a=new ye({color:3875858,roughness:.8});for(let[d,f,g,x]of[[0,s/2,n+.16,.14],[0,-s/2,n+.16,.14],[n/2,0,.14,s],[-n/2,0,.14,s]]){let m=new F(new Oe(g,x,.18),a);m.position.set(d,f,.02),r.add(m)}for(let d of[-n/2+.25,n/2-.25]){let f=new F(new Oe(.14,t-s/2+.3,.14),a);f.position.set(d,-s/2-(t-s/2)/2+.15,-.05),r.add(f)}let l=2.1,c=l*1.414,u=vb(oi.text);if(mi=new F(new at(l,c),new ye({map:u,roughness:.9})),mi.position.set(0,.05,.075),mi.rotation.z=-.015,r.add(mi),oi.flyer){let d=new Image;d.onload=()=>{let f=u.image,g=f.getContext("2d");g.fillStyle="#111",g.fillRect(0,0,f.width,f.height);let x=Math.min(f.width/d.width,f.height/d.height),m=d.width*x,p=d.height*x;g.drawImage(d,(f.width-m)/2,(f.height-p)/2,m,p),u.needsUpdate=!0},d.src=r0(oi.flyer)}for(let[d,f]of[[-l/2+.12,c/2-.12],[l/2-.12,c/2-.12]]){let g=new F(new pt(.05,12,8),new ye({color:16723888,roughness:.3}));g.position.set(d,f+.05,.11),r.add(g)}let h=new fi(16773340,9,8,.6,.7,1.4);h.position.set(0,s/2+1,1.8),h.target=mi,r.add(h)}function Mb(){sn=!0;for(let e in et)et[e]=!1;try{document.exitPointerLock()}catch{}ie("djName").textContent="N\xC4CHSTE PARTY",ie("djInfo").textContent=oi.flyer?oi.text||"":oi.text||"Flyer folgt \u2013 bald steht hier, wann die n\xE4chste SPK Party steigt!";let i=ie("djPhoto");oi.flyer?(i.src=r0(oi.flyer),i.classList.remove("hidden"),i.classList.add("big")):i.classList.add("hidden"),ie("djLinks").innerHTML=oi.link?`<a class="djl" href="${yi(oi.link)}" target="_blank" rel="noopener" style="--c:#e3b27a">Mehr Infos</a>`:"",ie("djBox").classList.remove("hidden")}var Od={arcade:!0},Xt=null;function Eb(){let i=$l+.24,e=nn-1.25;Xt=Rm(Bt),Xt.g.scale.setScalar(2.2/1.75),Xt.g.position.set(Math.sin(i)*e,0,-Math.cos(i)*e),Xt.g.lookAt(0,0,0),dt.add(Xt.g),Xt.pos=Xt.g.position.clone()}function bb(){if(!ct){if(me.role==="client"&&me.conn&&me.conn.open){try{me.conn.send({t:"arc"})}catch{}ct=!0,Ot("Warte auf den Raum \u2026"),setTimeout(()=>{ct&&!cs&&(ct=!1)},5e3);return}if(me.role==="host"&&Dt.size){a0(ke.name);return}zd(null,null)}}function a0(i){if(cs)return;let e=Ad();for(let t of me.conns.values())try{t.conn.open&&t.conn.send({t:"arcgo",code:e,who:i})}catch{}zd(e,"host",i)}function zd(i,e,t){if(cs)return;cs=!0,ct=!0;for(let l in et)et[l]=!1;document.pointerLockElement&&document.exitPointerLock(),t&&t!==ke.name&&Ot(t+" startet die Arcade \u2013 alle spielen mit!");let n=document.createElement("div");n.id="arcLoad",n.style.cssText='position:fixed;inset:0;z-index:99;background:#05030c;display:flex;flex-direction:column;align-items:center;justify-content:center;font:900 46px "Courier New",monospace;color:#ff2fb0;letter-spacing:.1em;text-shadow:0 0 18px #ff2fb0',n.innerHTML='<div>SPK ARCADE</div><div style="margin-top:28px;width:min(420px,80vw);height:34px;border:4px solid #fff;padding:4px;box-sizing:border-box;display:flex;gap:4px" id="arcBar"></div><div style="margin-top:14px;font-size:16px;color:#20e0ff;text-shadow:none">LADE ...</div>',document.body.appendChild(n),Id();let s=0,r=n.querySelector("#arcBar"),o=setInterval(()=>{s++;let l=document.createElement("i");l.style.cssText="flex:0 0 calc((100% - 44px)/12);background:"+(s<5?"#39ff88":s<9?"#ffd23f":"#ff2fb0"),r.appendChild(l),s>=12&&clearInterval(o)},100);try{sessionStorage.setItem("gbgc-zurueck",JSON.stringify({role:me.role==="client"?"client":"host",code:me.code,t:Date.now()}))}catch{}let a="/Arcade/spiel/index.html?name="+encodeURIComponent(ke.name)+(i?"&konsole="+e+"&code="+i:"")+(pn.get("peerhost")?"&peerhost="+pn.get("peerhost")+"&peerport="+(pn.get("peerport")||9e3)+"&ice=none":"");setTimeout(()=>{Jl(),location.href=a},e==="join"?2600:1400)}var Gd={cab:!0},kn={ang:wd-.14,r:nn-1.15,pos:null},eo=null;function Sb(){let i=kn.ang,e=Math.sin(i)*kn.r,t=-Math.cos(i)*kn.r;kn.pos=new I(e,0,t);let n=new Xe;n.position.set(e,0,t),n.lookAt(0,0,0),dt.add(n);let s=1.9,r=2.6,o=1.6,a=new ye({color:2761264,roughness:.6,metalness:.3}),l=(x,m,p,y,_,v,w=a)=>{let E=new F(new Oe(x,m,p),w);return E.position.set(y,_,v),n.add(E),E};l(s,r,.08,0,r/2,-o/2),l(.08,r,o,-s/2,r/2,0),l(.08,r,o,s/2,r/2,0),l(s+.1,.1,o+.1,0,r,0),l(s,.06,o,0,.03,0,new ye({color:3812922,roughness:.9})),l(.9,1.7,.03,0,1.25,-o/2+.06,new ye({color:13621480,roughness:.05,metalness:1}));let c=new ye({color:13112687,roughness:.85,side:Pt});for(let x of[-1,1]){let m=new at(.55,r-.25,12,1),p=m.attributes.position;for(let _=0;_<p.count;_++)p.setZ(_,Math.sin(p.getX(_)*22)*.04);m.computeVertexNormals();let y=new F(m,c);y.position.set(x*(s/2-.3),(r-.25)/2+.05,o/2),n.add(y)}l(s,.04,.04,0,r-.12,o/2,new ye({color:12566463,metalness:1,roughness:.3}));let u=Xs([{t:"UMKLEIDE",size:120,c:"#ffd23f",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"rgba(255,170,0,0.6)"}],{w:1024,h:180,pw:1.9});u.position.set(0,r+.35,o/2),n.add(u);let h=new yn(16773328,6,4,1.6);h.position.set(0,r-.3,.2),n.add(h),eo=new F(new Oe(s+.4,r+.6,o+.4),new Ue({transparent:!0,opacity:0,depthWrite:!1})),eo.position.set(0,r/2,0),n.add(eo);let d=new Xe;d.position.set(s/2+.7,0,.3),n.add(d);let f=new ye({color:12566463,metalness:1,roughness:.3});for(let x of[-.45,.45]){let m=new F(new je(.02,.02,1.6,8),f);m.position.set(x,.8,0),d.add(m)}let g=new F(new je(.02,.02,.95,8),f);g.rotation.z=Math.PI/2,g.position.y=1.55,d.add(g),Mn.slice(0,7).forEach((x,m)=>{let p=new F(new Oe(.06,.62,.42),new ye({color:x,roughness:.9}));p.position.set(-.36+m*.12,1.2,0),d.add(p)})}var He={open:!1,look:null,r:null,scene:null,cam:null,fig:null,mixer:null,rot:0,t:0,drag:null};function Tb(){if(He.r)return;let i=ie("wrCanvas");He.r=new Ro({canvas:i,antialias:!0,alpha:!0}),He.r.outputColorSpace=ht,He.r.toneMapping=Nr,He.scene=new Co,He.cam=new kt(30,1,.1,50),He.cam.position.set(0,1.05,4.6),He.cam.lookAt(0,.95,0),He.scene.add(new Go(16777215,4206656,1.5));let e=new Ds(16777215,2.2);e.position.set(2,4,4),He.scene.add(e);let t=new Ds(16723888,1.4);t.position.set(-3,2,-3),He.scene.add(t);let n=new F(new ii(.8,40),new Ue({color:16723888,transparent:!0,opacity:.25}));n.rotation.x=-Math.PI/2,He.scene.add(n),i.addEventListener("pointerdown",s=>{He.drag=s.clientX,i.setPointerCapture(s.pointerId)}),i.addEventListener("pointermove",s=>{He.drag!=null&&(He.rot+=(s.clientX-He.drag)*.012,He.drag=s.clientX)}),i.addEventListener("pointerup",()=>{He.drag=null})}function io(){if(He.look.ch&&!Yr(Zt,He.look.ch)){let e=He.look.ch;ie("wrOpts").insertAdjacentHTML("afterbegin",'<div class="wrow" id="wrLoad"><span>\u23F3</span><div>Figur wird geladen \u2026</div></div>'),Zo(Zt,e).then(()=>{let t=ie("wrLoad");t&&t.remove(),He.look.ch===e&&io()})}He.fig&&He.scene.remove(He.fig);let i=Ol(Zt,He.look);He.fig=i.m,He.scene.add(i.m),He.mixer=new Un(i.m),xi&&xi.idle&&He.mixer.clipAction(xi.idle).play()}function aa(){let i=He.look,e=ie("wrOpts"),t=(o,a,l,c)=>`<div class="wrow"><span>${o}</span><div>`+a.map((u,h)=>`<button class="wo${u.v===l?" on":""}" data-set="${c}" data-v="${yi(String(u.v))}">${yi(u.t)}</button>`).join("")+"</div></div>",n=(o,a,l,c)=>`<div class="wrow"><span>${o}</span><div>`+a.map(u=>`<button class="wc${u===l?" on":""}" style="background:${u}" data-set="${c}" data-v="${u}" aria-label="${u}"></button>`).join("")+"</div></div>",s=t("Figur",ss.map(o=>({t:o.name+(o.kind&&o.id&&o.kind==="Comic"?" \u270F\uFE0F":""),v:o.id})),i.ch,"ch"),r=ss.find(o=>o.id===i.ch)||ss[0];r.classic?(s+=t("Oberteil",od.map((o,a)=>({t:o,v:a})),i.top,"top"),i.top&&(s+=n("Farbe",Mn,i.tc,"tc"),s+=t("Aufdruck",[{t:"Ohne",v:""},{t:"\u{1F354} Burger",v:"burger"},{t:"\u25A6 Block-Print",v:"blocks"}],i.print||"","print")),s+=t("Hose",ad.map((o,a)=>({t:o,v:a})),i.bot,"bot"),i.bot&&(s+=n("Farbe",Mn,i.bc,"bc")),s+=t("Schuhe",ld.map((o,a)=>({t:o,v:a})),i.sh,"sh"),i.sh&&(s+=n("Farbe",Mn,i.shc,"shc")),s+=t("Hautfarbe",[{t:"Hell",v:0},{t:"Dunkel",v:1}],i.s,"s")):i.ch?((r.parts||[]).forEach(([o],a)=>{s+=`<div class="wrow"><span>${yi(o)}</span><div><button class="wo${i.p[a]?"":" on"}" data-set="p${a}" data-v="">Original</button>`+Mn.map(l=>`<button class="wc${l===i.p[a]?" on":""}" style="background:${l}" data-set="p${a}" data-v="${l}" aria-label="${l}"></button>`).join("")+"</div></div>"}),r.parts||(s+='<div class="wrow"><span>Kleidung</span><div style="opacity:.75">Diese Figur hat ihr festes Outfit \u2013 du kannst sie mit Kappe, Brille, Kette und Rucksack aufpeppen.</div></div>')):(s+=t("K\xF6rper",[{t:"Mann",v:"m"},{t:"Frau",v:"f"}],i.b,"b")+t("Hautfarbe",[{t:"Hell",v:0},{t:"Dunkel",v:1}],i.s,"s"),s+=t("Frisur",rd.map(o=>({t:o.name,v:o.id})),i.h,"h"),i.b==="m"&&(s+=t("Bart",[{t:"Ohne",v:0},{t:"Mit Bart",v:1}],i.beard,"beard")),s+=n("Haarfarbe",cd,i.hc,"hc"),s+=t("Oberteil",od.map((o,a)=>({t:o,v:a})),i.top,"top"),i.top&&(s+=n("Farbe",Mn,i.tc,"tc")),s+=t("Hose",ad.map((o,a)=>({t:o,v:a})),i.bot,"bot"),i.bot&&(s+=n("Farbe",Mn,i.bc,"bc")),s+=t("Schuhe",ld.map((o,a)=>({t:o,v:a})),i.sh,"sh"),i.sh&&(s+=n("Farbe",Mn,i.shc,"shc"))),i.ch==="hias"&&(s+=t("\u{1F451} K\xF6nigsmantel",[{t:"Ohne",v:0},{t:"Anziehen",v:1}],i.km,"km"),s+=t("\u{1F531} Zepter (linke Hand)",[{t:"Ohne",v:0},{t:"Mitnehmen",v:1}],i.ks,"ks"),s+=t("\u{1F451} Krone",[{t:"Ohne",v:0},{t:"Aufsetzen",v:1}],i.kr,"kr")),s+=t("Kopf",hd.map((o,a)=>({t:o,v:a})),i.cap,"cap"),i.cap&&(s+=n("Farbe",Mn,i.capc,"capc")),s+=t("Brille",ud.map((o,a)=>({t:o,v:a})),i.gl,"gl"),s0()&&(s+=t("S.P.K Shirt",[{t:"Ohne",v:0},{t:"Anziehen",v:1}],i.spk,"spk")),s+=t("Goldkette",[{t:"Ohne",v:0},{t:"Mit Kette",v:1}],i.chain,"chain"),s+=t("Rucksack",[{t:"Ohne",v:0},{t:"Mit Rucksack",v:1}],i.bag,"bag"),i.bag&&(s+=n("Farbe",Mn,i.bagc,"bagc")),e.innerHTML=s,e.querySelectorAll("button[data-set]").forEach(o=>o.onclick=()=>{let a=o.dataset.set,l=o.dataset.v;if(["s","beard","top","bot","sh","cap","gl","chain","bag","spk","km","ks","kr"].includes(a)&&(l=+l),/^p\d$/.test(a)){let c=He.look.p.slice();c[+a[1]]=l,He.look=En(Object.assign({},He.look,{p:c}))}else a==="ch"?He.look=En(Object.assign({},He.look,{ch:l,p:["","","",""]},bm[l]||{print:""})):He.look=En(Object.assign({},He.look,{[a]:l}));aa(),io()})}function l0(){if(!Zt){Ot("Die Figuren werden noch geladen \u2026");return}sn=!0,He.open=!0;for(let t in et)et[t]=!1;try{document.exitPointerLock()}catch{}He.look=En(ke.look),Tb(),aa(),io(),He.rot=0,ie("wrBox").classList.remove("hidden");let i=ie("wrCanvas"),e=i.getBoundingClientRect();He.r.setPixelRatio(Math.min(2,devicePixelRatio||1)),He.r.setSize(e.width||300,e.height||420,!1),He.cam.aspect=(e.width||300)/(e.height||420),He.cam.updateProjectionMatrix()}function wb(i){!He.open||!He.r||(He.drag==null&&(He.rot+=i*.35),He.fig&&(He.fig.rotation.y=He.rot),He.mixer&&He.mixer.update(i),He.r.render(He.scene,He.cam))}function c0(){if(ke.look=En(He.look),Zl(),ec(),me.role==="client"&&me.conn)try{me.conn.send({t:"look",lk:ke.look})}catch{}Ot("Neuer Look gespeichert \u2013 alle im Raum sehen dich jetzt so."),fs()}ie("wrDone").onclick=c0;ie("wrCancel").onclick=fs;ie("wrRandom").onclick=()=>{let i=_m(Math.random,!0,!0);Math.random()<.5&&(i.ch=""),i.p=["","","",""].map(()=>Math.random()<.5?Mn[Math.floor(Math.random()*Mn.length)]:""),He.look=En(i),aa(),io()};ie("wrUndress").onclick=()=>{He.look=En(Object.assign({},He.look,{top:0,bot:0,sh:0,cap:0,gl:0,chain:0,bag:0,spk:0,p:["","","",""]})),aa(),io()};ie("wrBox").addEventListener("click",i=>{i.target.id==="wrBox"&&fs()});var Vd={gb:!0},Fs=null,to=null,Xn="",no=[];async function Kl(i){if(!Xn)return null;try{let t=await(await fetch(Xn+(i?(Xn.includes("?")?"&":"?")+i:""),{cache:"no-store"})).json();if(Array.isArray(t.eintraege))return no=t.eintraege,h0(),no}catch{}return null}function Ab(i,e,t){let n=String(e).split(" "),s=[],r="";for(let o of n){let a=r?r+" "+o:o;i.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function h0(){if(!to)return;let i=to.image,e=i.getContext("2d"),t=i.width,n=i.height,s=e.createLinearGradient(0,0,0,n);s.addColorStop(0,"#1f3a2c"),s.addColorStop(1,"#16291f"),e.fillStyle=s,e.fillRect(0,0,t,n);for(let o=0;o<400;o++)e.fillStyle=`rgba(255,255,255,${Math.random()*.03})`,e.fillRect(Math.random()*t,Math.random()*n,3,1);e.textAlign="center",e.font='400 120px Impact, "Arial Black", sans-serif',e.fillStyle="#eef3e8",e.fillText("G\xC4STEBUCH",t/2,130),e.fillStyle="rgba(238,243,232,0.35)",e.fillRect(80,160,t-160,4),e.textAlign="left";let r=230;if(!Xn)e.textAlign="center",e.font='italic 64px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#dfe8d6",e.fillText("kommt bald \u2026",t/2,400);else if(!no.length)e.textAlign="center",e.font='italic 60px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#dfe8d6",e.fillText("Sei der Erste \u2013",t/2,420),e.fillText("schreib was rein!",t/2,500);else for(let o of no.slice(0,7)){if(r>n-90)break;e.font='700 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="#9fe8b0",e.fillText(o.n,70,r),e.font='46px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#eef3e8";for(let a of Ab(e,o.x,t-140).slice(0,3))r+=54,e.fillText(a,70,r);r+=66}e.textAlign="center",e.font='600 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="rgba(238,243,232,0.7)",e.fillText(on?"Tippe auf E zum Reinschreiben":"Klicken zum Reinschreiben",t/2,n-40),to.needsUpdate=!0}var Os=null,ia=null,zs="lade",Rb="rennen";function bd(){if(!Os)return;let i=Os.image,e=i.getContext("2d"),t=i.width,n=i.height,s=e.createLinearGradient(0,0,0,n);s.addColorStop(0,"#1d1406"),s.addColorStop(1,"#0b0804"),e.fillStyle=s,e.fillRect(0,0,t,n),e.strokeStyle="rgba(255,210,90,0.35)",e.lineWidth=4,e.strokeRect(18,18,t-36,n-36),e.textAlign="center",e.textBaseline="alphabetic";let r=e.createLinearGradient(0,30,0,140);r.addColorStop(0,"#fff3b0"),r.addColorStop(.5,"#ffd23f"),r.addColorStop(1,"#b8860b"),e.font='400 118px Impact, "Arial Black", sans-serif',e.shadowColor="rgba(255,190,40,0.8)",e.shadowBlur=18,e.fillStyle=r,e.fillText("BESTENLISTE",t/2,140),e.shadowBlur=0,e.font='600 34px "Segoe UI", system-ui, sans-serif',e.fillStyle="rgba(255,230,170,0.75)",e.fillText("Top 15 \xB7 wer steht am \xF6ftesten in den Highscores (alle Spiele)",t/2,192);let o=ia||[];if(!o.length){e.font='italic 52px "Segoe UI", system-ui, sans-serif',e.fillStyle="#e8dcc0",e.fillText(zs==="lade"?"Lade \u2026":zs==="alt"?"wird gerade eingerichtet \u2026":zs==="aus"?"gerade offline":"Noch keine Highscores!",t/2,560),Os.needsUpdate=!0;return}let a=["#ffd23f","#d8dee6","#e08a4a"],l=262,c=64;o.slice(0,15).forEach((u,h)=>{if(h<3?(e.fillStyle=["rgba(255,210,63,0.16)","rgba(216,222,230,0.12)","rgba(224,138,74,0.13)"][h],e.fillRect(40,l-48,t-80,c-6)):h%2&&(e.fillStyle="rgba(255,255,255,0.04)",e.fillRect(40,l-48,t-80,c-6)),e.textAlign="left",h<3){let g=l-22,x=a[h];e.fillStyle=x,e.beginPath(),e.moveTo(72,g-20),e.lineTo(112,g-20),e.quadraticCurveTo(110,g+6,92,g+8),e.quadraticCurveTo(74,g+6,72,g-20),e.fill(),e.fillRect(88,g+6,8,12),e.fillRect(78,g+17,28,7),e.strokeStyle=x,e.lineWidth=5,e.beginPath(),e.arc(72,g-10,9,Math.PI*.5,Math.PI*1.5),e.stroke(),e.beginPath(),e.arc(112,g-10,9,-Math.PI*.5,Math.PI*.5),e.stroke()}else e.font='400 44px Impact, "Arial Black", sans-serif',e.fillStyle="#c9b88a",e.textAlign="center",e.fillText(h+1+".",92,l),e.textAlign="left";let d=String(u.n||"");for(e.font=(h<3?"700 46px":"600 42px")+' "Segoe UI", system-ui, sans-serif';e.measureText(d).width>560&&d.length>3;)d=d.slice(0,-2)+"\u2026";e.fillStyle=h<3?a[h]:"#f2ead8",e.fillText(d,150,l),e.textAlign="right",e.font='400 46px Impact, "Arial Black", sans-serif',e.fillStyle=h<3?a[h]:"#ffd23f",e.fillText(String(u.c),t-130,l),e.font='600 24px "Segoe UI", system-ui, sans-serif',e.fillStyle="rgba(255,230,170,0.55)",e.fillText((u.g?"\u{1F947}"+u.g+" ":"")+(u.s?"\u{1F948}"+u.s+" ":"")+(u.b?"\u{1F949}"+u.b:""),t-200,l-4),e.textAlign="left",l+=c}),Os.needsUpdate=!0}async function Hm(){if(!Xn)try{Xn=((await(await fetch("/System/gaestebuch.json",{cache:"no-store"})).json()).url||"").trim()}catch{}if(!Xn){zs="alt",bd();return}try{let i=new AbortController,e=setTimeout(()=>i.abort(),15e3),t=await fetch(Xn+(Xn.includes("?")?"&":"?")+"rang=1&lo="+Rb,{cache:"no-store",signal:i.signal});clearTimeout(e);let n=await t.json();Array.isArray(n.rang)?(ia=n.rang,zs="ok"):zs="alt"}catch{ia||(zs="aus")}bd(),Cb()}var u0=[];function Cb(){u0.forEach((i,e)=>{i.visible=!!(ia&&ia[e])})}function Pb(i,e){let r=new Xe;r.position.set(Math.sin(i)*(e-.02),2.75,-Math.cos(i)*(e-.02)),r.lookAt(0,2.75,0),dt.add(r);let o=new ye({color:13938487,roughness:.25,metalness:1,emissive:3811328,emissiveIntensity:.6}),a=new F(new Oe(3,3.7,.12),new ye({color:1708550,roughness:.8}));r.add(a);for(let[f,g,x,m]of[[0,3.7/2,3+.2,.18],[0,-3.7/2,3+.2,.18],[3/2,0,.18,3.7],[-3/2,0,.18,3.7]]){let p=new F(new Oe(x,m,.2),o);p.position.set(f,g,.03),r.add(p)}for(let f of[-3/2,3/2])for(let g of[-3.7/2,3.7/2]){let x=new F(new pt(.13,16,12),o);x.position.set(f,g,.08),r.add(x)}for(let f of[-3/2+.25,3/2-.25]){let g=new F(new Oe(.14,1.2,.14),o);g.position.set(f,-3.7/2-(2.75-3.7/2)/2+.15,-.05),r.add(g)}Os=Bt(1024,1260,()=>{});let l=new F(new at(3-.2,3.7-.2),new ye({map:Os,roughness:.9,emissive:16777215,emissiveMap:Os,emissiveIntensity:.4}));l.position.z=.07,r.add(l);let c=new fi(16773320,10,8,.6,.7,1.4);c.position.set(0,3.7/2+1,1.8),c.target=l,r.add(c);let u=(f,g)=>{let x=new Xe,m=new ye({color:f,roughness:.18,metalness:1,emissive:f,emissiveIntensity:.12}),p=[[0,0],[.16,0],[.16,.05],[.09,.07],[.09,.1],[.035,.12],[.03,.26],[.06,.3],[.17,.36],[.2,.5],[.21,.62],[.19,.62],[.18,.52],[.15,.4],[0,.36]].map(([v,w])=>new fe(v,w)),y=new F(new Ps(p,28),m);x.add(y);for(let v of[-1,1]){let w=new F(new Wt(.075,.016,8,16,Math.PI),m);w.position.set(v*.2,.5,0),w.rotation.z=v>0?-Math.PI/2:Math.PI/2,x.add(w)}let _=new F(new Oe(.34,.08,.26),new ye({color:1380362,roughness:.5}));return _.position.y=-.04,x.add(_),x.scale.setScalar(g),x};u0=[[13938487,1.45,0],[13160150,1.15,-1],[12614202,1.05,1]].map(([f,g,x])=>{let m=u(f,g);return m.position.set(x,3.7/2+.17,.02),r.add(m),m.visible=!1,m});let d=new yn(16765562,5,4,1.6);d.position.set(0,3.7/2+1.1,.8),r.add(d),bd(),Hm(),setInterval(()=>{sn||Hm()},12e4)}async function Ib(i,e){try{Xn=((await(await fetch("/System/gaestebuch.json",{cache:"no-store"})).json()).url||"").trim()}catch{}let t=2.75,n=3,s=3.7,r=new Xe;r.position.set(Math.sin(i)*(e-.02),t,-Math.cos(i)*(e-.02)),r.lookAt(0,t,0),dt.add(r);let o=new ye({color:3875858,roughness:.8}),a=new F(new Oe(n,s,.12),o);r.add(a);for(let[c,u,h,d]of[[0,s/2,n+.16,.14],[0,-s/2,n+.16,.14],[n/2,0,.14,s],[-n/2,0,.14,s]]){let f=new F(new Oe(h,d,.18),o);f.position.set(c,u,.02),r.add(f)}for(let c of[-n/2+.25,n/2-.25]){let u=new F(new Oe(.14,t-s/2+.3,.14),o);u.position.set(c,-s/2-(t-s/2)/2+.15,-.05),r.add(u)}to=Bt(1024,1260,()=>{}),Fs=new F(new at(n-.2,s-.2),new ye({map:to,roughness:.95,emissive:16777215,emissiveMap:to,emissiveIntensity:.35})),Fs.position.z=.07,r.add(Fs);let l=new fi(16773340,9,8,.6,.7,1.4);l.position.set(0,s/2+1,1.8),l.target=Fs,r.add(l),h0(),Kl(),setInterval(()=>{sn||Kl()},6e4)}function Sd(){let i=ie("gbList");if(i.innerHTML="",!Xn){i.innerHTML='<p class="djnone">Das G\xE4stebuch wird gerade eingerichtet \u2013 bald kannst du hier reinschreiben.</p>';return}if(!no.length){i.innerHTML='<p class="djnone">Noch keine Eintr\xE4ge \u2013 sei der Erste!</p>';return}for(let e of no){let t=document.createElement("div");t.className="gbe";let n=new Date(e.t);t.innerHTML="<b></b><span></span><p></p>",t.querySelector("b").textContent=e.n,t.querySelector("span").textContent=isNaN(n)?"":n.toLocaleDateString("de-AT")+" "+n.toLocaleTimeString("de-AT",{hour:"2-digit",minute:"2-digit"}),t.querySelector("p").textContent=e.x,i.appendChild(t)}}function Lb(){sn=!0;for(let i in et)et[i]=!1;try{document.exitPointerLock()}catch{}ie("gbName").value=ke.name||"",ie("gbText").value="",ie("gbCount").textContent="0 / 100",ie("gbMsg").textContent="",ie("gbForm").classList.toggle("hidden",!Xn),Sd(),ie("gbBox").classList.remove("hidden"),Kl().then(()=>Sd())}ie("gbText").addEventListener("input",()=>{ie("gbCount").textContent=ie("gbText").value.length+" / 100"});ie("gbClose").onclick=fs;ie("gbBox").addEventListener("click",i=>{i.target.id==="gbBox"&&fs()});ie("gbForm").addEventListener("submit",async i=>{i.preventDefault();let e=ie("gbText").value.replace(/\s+/g," ").trim().slice(0,100),t=(ie("gbName").value.trim()||ke.name||"Gast").slice(0,20);if(!e){ie("gbMsg").textContent="Schreib zuerst etwas rein.";return}let n=0;try{n=+localStorage.getItem("spk-gb-last")||0}catch{}if(Date.now()-n<3e4){ie("gbMsg").textContent="Bitte kurz warten, bevor du nochmal schreibst.";return}ie("gbSend").disabled=!0,ie("gbMsg").textContent="Wird gespeichert\u2026";let s=await Kl("name="+encodeURIComponent(t)+"&text="+encodeURIComponent(e));if(ie("gbSend").disabled=!1,s){try{localStorage.setItem("spk-gb-last",String(Date.now()))}catch{}ie("gbText").value="",ie("gbCount").textContent="0 / 100",ie("gbMsg").textContent="Danke! Dein Eintrag steht jetzt im G\xE4stebuch.",Sd()}else ie("gbMsg").textContent="Hat nicht geklappt \u2013 ist das Internet an?"});var Db="https://abacus.jasoncameron.dev/hit/spk-portal-hiasus/besucher",Ub="https://abacus.jasoncameron.dev/get/spk-portal-hiasus/besucher",d0="https://countapi.mileshilliard.com/api/v1/",Ys=null,sa=null,Ql="",ra=()=>{try{return new Date().toLocaleDateString("sv-SE",{timeZone:"Europe/Vienna"})}catch{return new Date().toISOString().slice(0,10)}};async function jl(i,e=3500,t=!1){let n=new AbortController,s=setTimeout(()=>n.abort(),e);try{let r=await fetch(i,{cache:"no-store",signal:n.signal});if(r.status===404&&t)return 0;if(!r.ok)throw 0;let o=await r.json(),a=parseInt(o.value,10);if(isNaN(a))throw 0;return a}finally{clearTimeout(s)}}async function f0(i){let e="besucher-"+ra(),t=[`https://abacus.jasoncameron.dev/${i?"hit":"get"}/spk-portal-hiasus/${e}`,d0+(i?"hit":"get")+"/spk-portal-hiasus-"+e];try{return await jl(t[0],3e3,!i).catch(()=>jl(t[1],3e3,!i))}catch{}return Ql===ra()?sa:null}async function p0(){let i=ra(),e=!1;try{e=!localStorage.getItem("spk-tag-"+i),localStorage.setItem("spk-tag-"+i,"1")}catch{}let t=await f0(e);t!=null&&(sa=t,Ql=i,Hs(!0))}async function Nb(){let i=!1;try{i=!sessionStorage.getItem("spk-gezaehlt"),sessionStorage.setItem("spk-gezaehlt","1")}catch{}p0(),Ys=await Td(i),Hs(!0)}var ea=null,Fm="",kb=null;async function Td(i){let e=i?Db:Ub,t=d0+(i?"hit":"get")+"/spk-portal-hiasus-besucher";try{return await jl(e,3e3).catch(()=>jl(t,3e3))}catch{}return Ys}function Bb(){let i=new Date;return{time:i.toLocaleTimeString("de-AT",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),date:i.toLocaleDateString("de-AT",{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"}),vis:Ys==null?"\u2014":Ys.toLocaleString("de-AT"),day:sa==null||Ql!==ra()?"\u2014":sa.toLocaleString("de-AT")}}function Hs(i){let e=Bb(),t=e.time+e.vis+e.day;if(!i&&t===Fm||(Fm=t,ie("hudClock")&&(ie("hudClock").innerHTML=`<b>${e.time.slice(0,5)}</b><span>${Ys==null?"":"Besucher: "+e.vis+" \xB7 Heute: "+e.day}</span>`),!ea))return;let n=ea.image,s=n.getContext("2d"),r=n.width,o=n.height;s.fillStyle="#0b0910",s.fillRect(0,0,r,o),s.strokeStyle="rgba(255,47,176,0.6)",s.lineWidth=6,s.strokeRect(10,10,r-20,o-20),s.textAlign="center",s.textBaseline="middle",s.font='700 150px Consolas, "Courier New", monospace',s.fillStyle="#e8f7ff",s.fillText(e.time,r/2,130),s.font='500 40px "Segoe UI", system-ui, sans-serif',s.fillStyle="#9d97ab",s.fillText(e.date,r/2,232),s.fillStyle="rgba(255,255,255,0.12)",s.fillRect(60,280,r-120,3),s.fillStyle="rgba(255,255,255,0.12)",s.fillRect(r/2-2,300,4,190),s.font='400 50px Impact, "Arial Black", sans-serif',s.fillStyle="#ff7fd8",s.fillText("BESUCHER GESAMT",r/4,340),s.fillStyle="#7fe9ff",s.fillText("HEUTE",r*3/4,340),s.font='700 96px Consolas, "Courier New", monospace',s.fillStyle="#e8f7ff",s.fillText(e.vis,r/4,440),s.fillText(e.day,r*3/4,440),ea.needsUpdate=!0}function Hb(){ea=Bt(1024,512,()=>{});let i=new Xe;i.position.set(0,3.9,0),dt.add(i);let e=3,t=1.5,n=e/2+.11,s=new F(new Oe(e+.16,t+.16,e+.16),new ye({color:1381659,roughness:.4,metalness:.8}));i.add(s);let r=new Ue({map:ea,toneMapped:!1,color:14211288});for(let o=0;o<4;o++){let a=new F(new at(e,t),r),l=o*Math.PI/2;a.position.set(Math.sin(l)*n,0,Math.cos(l)*n),a.rotation.y=l,i.add(a)}for(let o of[-1,1])for(let a of[-1,1]){let l=new F(new je(.02,.02,2.6,6),new ye({color:5593964,metalness:.9,roughness:.3}));l.position.set(o*e/2.2,t/2+1.3,a*e/2.2),i.add(l)}kb=i,Hs(!0),setInterval(()=>Hs(!1),1e3),Nb(),setInterval(async()=>{let o=await Td(!1);if(o!=null&&(Ys=o,Hs(!0)),Ql!==ra())p0();else{let a=await f0(!1);a!=null&&(sa=a,Hs(!0))}},15e3),addEventListener("visibilitychange",()=>{document.hidden||Td(!1).then(o=>{o!=null&&(Ys=o,Hs(!0))})})}async function Fb(){let i=[];try{let r=await fetch("/__spiele",{cache:"no-store"});if(!r.ok)throw 0;i=await r.json()}catch{try{i=await(await fetch("/spiele.json",{cache:"no-store"})).json()}catch{}}Array.isArray(i)||(i=i?[i]:[]);let e=r=>{let o=/(\d{1,2})\.(\d{1,2})\.(\d{4})/.exec(r||"");return o?new Date(+o[3],+o[2]-1,+o[1]).getTime():0},t=new Array(Ws).fill(null),n=[],s=["Tour-Bus-Rennen","Plakatieren bei Nacht","Traveler","Razzia","DJ-Battle"];i=(i||[]).filter(r=>r&&!s.includes(r.ordner)&&!s.includes(r.name));for(let r of i){let o=parseInt(r.portal,10);o>=1&&o<=Ws&&!t[o-1]?t[o-1]=r:n.push(r)}n.sort((r,o)=>e(r.datum)-e(o.datum));for(let r of n){let o=t.indexOf(null);o>=0&&(t[o]=r)}return t}async function Ob(){try{as=await new Or().loadAsync("/System/assets/figur.glb");let i={};for(let t of as.animations)i[t.name]=t;let e=t=>t?new si(t.name,t.duration,t.tracks.filter(n=>!n.name.startsWith("root."))):null;xi={idle:e(i.Idle_Loop),walk:e(i.Walk_Loop),run:e(i.Jog_Fwd_Loop),jump:e(i.Jump_Loop),dance:e(i.Dance_Loop),use:e(i.Interact),crouch:e(i.Crouch_Idle_Loop),sneak:e(i.Crouch_Fwd_Loop),punch:e(i.Punch_Jab),death:e(i.Death01)}}catch(i){console.warn("Figur fehlt",i),as=null}try{Zt=await Mm("/System/figuren/")}catch(i){console.warn("Figuren fehlen",i),Zt=null}try{Sb(),Gb()}catch(i){console.warn("Umkleide",i)}try{Eb()}catch(i){console.warn("Arcade",i)}try{Zt&&xi&&(An=Am({scene:dt,camera:Nn,me:oe,djFrames:Jr,net:me,toast:Ot,canvasTex:Bt,$:ie,CL:xi,FIG:Zt,audio:()=>(Pd(),ut?{AC:ut,master:qn}:null),unlock:()=>{sn=!0;for(let i in et)et[i]=!1;try{document.exitPointerLock()}catch{}},relock:()=>{sn=!1,an&&qs()}}))}catch(i){console.warn("UFO",i)}}var ai=null,jr=null,Xl=0,$r=!1,zb=2.8;function ec(){ai&&dt.remove(ai.root),!(!Zt||!as)&&(ke.look&&ke.look.ch&&!Yr(Zt,ke.look.ch)&&Zo(Zt,ke.look.ch).then(()=>{Yr(Zt,ke.look.ch)&&ec()}),ai=Zr(ke.name,ta[0],ke.look),ai.tag.visible=!1,ai.root.traverse(i=>{i.layers.enable(0),i.layers.enable(1)}))}function Gb(){let i=kn.ang,e=new Xe;e.position.set(Math.sin(i)*kn.r,0,-Math.cos(i)*kn.r),e.lookAt(0,0,0),dt.add(e);let t=new Xe;t.position.set(-1.9,0,.35),t.rotation.y=.35,e.add(t);let n=1.15,s=2.15,r=new ye({color:13938487,roughness:.3,metalness:.9}),o=(u,h,d,f)=>{let g=new F(new Oe(u,h,.08),r);g.position.set(d,f,0),t.add(g)};o(n+.16,.08,0,.25),o(n+.16,.08,0,.25+s+.08),o(.08,s+.16,-n/2-.04,.29+s/2),o(.08,s+.16,n/2+.04,.29+s/2);for(let u of[-1,1]){let h=new F(new Oe(.06,.06,.6),r);h.position.set(u*n/2,.03,-.1),t.add(h)}let a=new F(new Oe(n,s,.02),new ye({color:1118481}));a.position.set(0,.29+s/2,-.03),t.add(a),jr=new jo(new at(n,s),{textureWidth:Wl?384:768,textureHeight:Wl?720:1440,color:13159636,multisample:Wl?0:4}),jr.position.set(0,.29+s/2,.02),t.add(jr),jr.camera.layers.enable(1);let l=new F(new pt(.05,10,8),new Ue({color:16773840,toneMapped:!1}));l.position.set(0,.29+s+.16,.06),t.add(l);let c=Xs([{t:"SPIEGEL",size:90,c:"#ffd23f",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"rgba(255,170,0,0.5)"}],{w:768,h:140,pw:1});c.position.set(0,.29+s+.4,.02),t.add(c),li.pos=new I,t.getWorldPosition(li.pos),ec()}var li={pos:null},An={tick(){},jump(){},collide(){},targets:()=>[],prompt:()=>"",state:()=>({n:0}),setState(){},remoteWave(){},setRad(){},hostRequest(){},control(){},openRadio(){}},bn={tick(){},render(){return!1},collide(){},targets:()=>[],speedMul:()=>1,jumpMul:()=>1,drift(){},canAim:()=>!1,use(){},prompt:()=>"",state:()=>[],setState(){},hostTake(){}};(async()=>{WE(),XE(),ie("loadInfo").textContent="Lade Spiele\u2026";let[i]=await Promise.all([Fb(),Ob()]);i.forEach((n,s)=>KE(s,n));try{bn=am({scene:dt,camera:Nn,renderer:us,portals:Yn,me:oe,textPlane:Xs,toast:Ot,net:me,composer:gi,bloom:vd,R_WALL:nn,ARC:oa,PR:Om})}catch(n){console.warn("Geheimnis",n)}fb(),Hb();let e=i.filter(Boolean).length;ie("loadInfo").textContent=e===1?"1 Spiel im Raum":e+" Spiele im Raum",ie("bEnter").disabled=!1,ie("bJoin").disabled=!1,n0(),window.konsole={_merch:()=>Md,_openMerch:()=>i0(),_wardrobe:n=>{l0(),n&&(He.look=En(n),aa(),io())},_arcade:()=>Xt,_pad:()=>({locked:Ft,started:an,djOpen:sn,leaving:ct,padMode:Vs}),_ufo:()=>An,_dj:Jr,_addOther:Ud,_secret:()=>bn,_collide:Xm,MIR:li,setMyLook:n=>{He.look=En(n),c0()},me:oe,portals:Yn,net:me,others:Dt,enterPortal:kd,joinRoom:ql,openRoom:Gs,keys:et,voice:mt,started:()=>an};let t=null;try{t=JSON.parse(sessionStorage.getItem("gbgc-zurueck")||"null"),sessionStorage.removeItem("gbgc-zurueck")}catch{}oe.pos.set(0,0,0),oe.yaw=0,t&&Date.now()-t.t<6*36e5?(oe.pos.set(0,0,-6),oe.yaw=Math.PI,Gs(),t.role==="client"&&t.code?(Ym(t.code),Ot("Zur\xFCck im Portal \u2013 du kommst gleich wieder in den Raum von deinem Freund.")):Ot("Zur\xFCck im Portal. Deine Freunde kommen gleich nach."),ie("menuTitle").textContent="Willkommen zur\xFCck!"):pn.get("autojoin")||Gs(),pn.has("autotest")&&(an=!0,hs(!1),window.__hub={me:oe,others:Dt,keys:et,setLocked:n=>{Ft=n},takeHit:Rd}),pn.get("autojoin")&&ql(pn.get("autojoin")).then(()=>{an=!0,hs(!1)}),ds()})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
