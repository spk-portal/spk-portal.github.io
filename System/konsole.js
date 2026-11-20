var Jh="170";var h0=0,Xd=1,u0=2;var pp=1,d0=2,Ai=3,Tn=0,Ot=1,Pt=2,ui=0,fr=1,ti=2,qd=3,Yd=4,f0=5,Es=100,p0=101,m0=102,g0=103,x0=104,y0=200,v0=201,_0=202,M0=203,Lc=204,Dc=205,E0=206,b0=207,S0=208,T0=209,w0=210,A0=211,R0=212,C0=213,P0=214,Uc=0,Nc=1,kc=2,xr=3,Bc=4,Hc=5,Fc=6,Oc=7,mp=0,I0=1,L0=2,ji=0,Qh=1,eu=2,tu=3,Dr=4,D0=5,nu=6,iu=7,Kd="attached",U0="detached",gp=300,yr=301,vr=302,zc=303,Gc=304,Ml=306,wn=1e3,Ri=1001,Eo=1002,Jt=1003,su=1004;var lr=1005;var un=1006,go=1007;var hi=1008;var Ii=1009,xp=1010,yp=1011,bo=1012,ru=1013,Ts=1014,ei=1015,vn=1016,ou=1017,au=1018,_r=1020,vp=35902,_p=1021,Mp=1022,Fn=1023,Ep=1024,bp=1025,pr=1026,Mr=1027,lu=1028,cu=1029,Sp=1030,hu=1031;var uu=1033,Fa=33776,Oa=33777,za=33778,Ga=33779,Vc=35840,Wc=35841,Xc=35842,qc=35843,Yc=36196,Kc=37492,jc=37496,$c=37808,Zc=37809,Jc=37810,Qc=37811,eh=37812,th=37813,nh=37814,ih=37815,sh=37816,rh=37817,oh=37818,ah=37819,lh=37820,ch=37821,Va=36492,hh=36494,uh=36495,Tp=36283,dh=36284,fh=36285,ph=36286,N0=2200,k0=2201,B0=2202,Er=2300,br=2301,Zl=2302,cr=2400,hr=2401,Wa=2402,du=2500,H0=2501,wp=0,El=1,Vo=2,F0=3200,O0=3201;var Ap=0,z0=1,Yi="",ht="srgb",fn="srgb-linear",bl="linear",vt="srgb";var Ys=7680;var jd=519,G0=512,V0=513,W0=514,Rp=515,X0=516,q0=517,Y0=518,K0=519,mh=35044;var $d="300 es",Ci=2e3,Xa=2001,Li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zd=1234567,xo=Math.PI/180,Sr=180/Math.PI;function On(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[s&255]+cn[s>>8&255]+cn[s>>16&255]+cn[s>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function Wt(s,e,t){return Math.max(e,Math.min(t,s))}function fu(s,e){return(s%e+e)%e}function j0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function $0(s,e,t){return s!==e?(t-s)/(e-s):0}function yo(s,e,t){return(1-t)*s+t*e}function Z0(s,e,t,n){return yo(s,e,1-Math.exp(-t*n))}function J0(s,e=1){return e-Math.abs(fu(s,e*2)-e)}function Q0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function eg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function tg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ng(s,e){return s+Math.random()*(e-s)}function ig(s){return s*(.5-Math.random())}function sg(s){s!==void 0&&(Zd=s);let e=Zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rg(s){return s*xo}function og(s){return s*Sr}function ag(s){return(s&s-1)===0&&s!==0}function lg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hg(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Sl={DEG2RAD:xo,RAD2DEG:Sr,generateUUID:On,clamp:Wt,euclideanModulo:fu,mapLinear:j0,inverseLerp:$0,lerp:yo,damp:Z0,pingpong:J0,smoothstep:Q0,smootherstep:eg,randInt:tg,randFloat:ng,randFloatSpread:ig,seededRandom:sg,degToRad:rg,radToDeg:og,isPowerOfTwo:ag,ceilPowerOfTwo:lg,floorPowerOfTwo:cg,setQuaternionFromProperEuler:hg,normalize:Et,denormalize:Qn},de=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],v=i[1],_=i[4],y=i[7],R=i[2],b=i[5],w=i[8];return r[0]=o*x+a*v+l*R,r[3]=o*m+a*_+l*b,r[6]=o*p+a*y+l*w,r[1]=c*x+u*v+h*R,r[4]=c*m+u*_+h*b,r[7]=c*p+u*y+h*w,r[2]=d*x+f*v+g*R,r[5]=d*m+f*_+g*b,r[8]=d*p+f*y+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jl.makeScale(e,t)),this}rotate(e){return this.premultiply(Jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jl=new it;function Cp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function So(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ug(){let s=So("canvas");return s.style.display="block",s}var Jd={};function po(s){s in Jd||(Jd[s]=!0,console.warn(s))}function dg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function fg(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function pg(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ot={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===vt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yi?bl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Qd=[.64,.33,.3,.6,.15,.06],ef=[.2126,.7152,.0722],tf=[.3127,.329],nf=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sf=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[fn]:{primaries:Qd,whitePoint:tf,transfer:bl,toXYZ:nf,fromXYZ:sf,luminanceCoefficients:ef,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:Qd,whitePoint:tf,transfer:vt,toXYZ:nf,fromXYZ:sf,luminanceCoefficients:ef,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}});var Ks,gh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ks===void 0&&(Ks=So("canvas")),Ks.width=e.width,Ks.height=e.height;let n=Ks.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=So("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mg=0,qa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ql(i[o].image)):r.push(Ql(i[o]))}else r=Ql(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ql(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gg=0,Qt=class s extends Li{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Ri,i=Ri,r=un,o=hi,a=Fn,l=Ii,c=s.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=On(),this.name="",this.source=new qa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wn:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wn:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=gp;Qt.DEFAULT_ANISOTROPY=1;var dt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(f+1)/2,R=(p+1)/2,b=(u+d)/4,w=(h+x)/4,P=(g+m)/4;return _>y&&_>R?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=b/n,r=w/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=w/r,i=P/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xh=class extends Li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new qa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zt=class extends xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ya=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yh=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),b=Math.atan2(R,p*v);m=Math.sin(m*b)/R,a=Math.sin(a*b)/R}let y=a*v;if(l=l*m+d*y,c=c*m+f*y,u=u*m+g*y,h=h*m+x*y,m===1-a){let R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ec.copy(this).projectOnVector(e),this.sub(ec)}reflect(e){return this.sub(ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ec=new I,rf=new Nt,dn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(r,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),ha.subVectors(this.max,ro),js.subVectors(e.a,ro),$s.subVectors(e.b,ro),Zs.subVectors(e.c,ro),zi.subVectors($s,js),Gi.subVectors(Zs,$s),ms.subVectors(js,Zs);let t=[0,-zi.z,zi.y,0,-Gi.z,Gi.y,0,-ms.z,ms.y,zi.z,0,-zi.x,Gi.z,0,-Gi.x,ms.z,0,-ms.x,-zi.y,zi.x,0,-Gi.y,Gi.x,0,-ms.y,ms.x,0];return!tc(t,js,$s,Zs,ha)||(t=[1,0,0,0,1,0,0,0,1],!tc(t,js,$s,Zs,ha))?!1:(ua.crossVectors(zi,Gi),t=[ua.x,ua.y,ua.z],tc(t,js,$s,Zs,ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new I,new I,new I,new I,new I,new I,new I,new I],jn=new I,ca=new dn,js=new I,$s=new I,Zs=new I,zi=new I,Gi=new I,ms=new I,ro=new I,ha=new I,ua=new I,gs=new I;function tc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){gs.fromArray(s,r);let a=i.x*Math.abs(gs.x)+i.y*Math.abs(gs.y)+i.z*Math.abs(gs.z),l=e.dot(gs),c=t.dot(gs),u=n.dot(gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var xg=new dn,oo=new I,nc=new I,In=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):xg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);let t=oo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(oo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(nc)),this.expandByPoint(oo.copy(e.center).sub(nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ei=new I,ic=new I,da=new I,Vi=new I,sc=new I,fa=new I,rc=new I,ws=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ic.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(ic);let r=e.distanceTo(t)*.5,o=-this.direction.dot(da),a=Vi.dot(this.direction),l=-Vi.dot(da),c=Vi.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ic).addScaledVector(da,d),f}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);let n=Ei.dot(this.direction),i=Ei.dot(Ei)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,n,i,r){sc.subVectors(t,e),fa.subVectors(n,e),rc.crossVectors(sc,fa);let o=this.direction.dot(rc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);let l=a*this.direction.dot(fa.crossVectors(Vi,fa));if(l<0)return null;let c=a*this.direction.dot(sc.cross(Vi));if(c<0||l+c>o)return null;let u=-a*Vi.dot(rc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class s{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,x,m)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Js.setFromMatrixColumn(e,0).length(),r=1/Js.setFromMatrixColumn(e,1).length(),o=1/Js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yg,e,vg)}lookAt(e,t,n){let i=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Wi.crossVectors(n,Cn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Wi.crossVectors(n,Cn)),Wi.normalize(),pa.crossVectors(Cn,Wi),i[0]=Wi.x,i[4]=pa.x,i[8]=Cn.x,i[1]=Wi.y,i[5]=pa.y,i[9]=Cn.y,i[2]=Wi.z,i[6]=pa.z,i[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],_=n[7],y=n[11],R=n[15],b=i[0],w=i[4],P=i[8],S=i[12],E=i[1],L=i[5],H=i[9],D=i[13],B=i[2],z=i[6],k=i[10],te=i[14],q=i[3],pe=i[7],me=i[11],oe=i[15];return r[0]=o*b+a*E+l*B+c*q,r[4]=o*w+a*L+l*z+c*pe,r[8]=o*P+a*H+l*k+c*me,r[12]=o*S+a*D+l*te+c*oe,r[1]=u*b+h*E+d*B+f*q,r[5]=u*w+h*L+d*z+f*pe,r[9]=u*P+h*H+d*k+f*me,r[13]=u*S+h*D+d*te+f*oe,r[2]=g*b+x*E+m*B+p*q,r[6]=g*w+x*L+m*z+p*pe,r[10]=g*P+x*H+m*k+p*me,r[14]=g*S+x*D+m*te+p*oe,r[3]=v*b+_*E+y*B+R*q,r[7]=v*w+_*L+y*z+R*pe,r[11]=v*P+_*H+y*k+R*me,r[15]=v*S+_*D+y*te+R*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+x*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=h*m*c-x*d*c+x*l*f-a*m*f-h*l*p+a*d*p,_=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,y=u*x*c-g*h*c+g*a*f-o*x*f-u*a*p+o*h*p,R=g*h*l-u*x*l-g*a*d+o*x*d+u*a*m-o*h*m,b=t*v+n*_+i*y+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return e[0]=v*w,e[1]=(x*d*r-h*m*r-x*i*f+n*m*f+h*i*p-n*d*p)*w,e[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*w,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*w,e[4]=_*w,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*w,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*w,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*w,e[8]=y*w,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*w,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*w,e[12]=R*w,e[13]=(u*x*i-g*h*i+g*n*d-t*x*d-u*n*m+t*h*m)*w,e[14]=(g*a*i-o*x*i-g*n*l+t*x*l+o*n*m-t*a*m)*w,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,v=l*c,_=l*u,y=l*h,R=n.x,b=n.y,w=n.z;return i[0]=(1-(x+p))*R,i[1]=(f+y)*R,i[2]=(g-_)*R,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(d+p))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(g+_)*w,i[9]=(m-v)*w,i[10]=(1-(d+x))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Js.set(i[0],i[1],i[2]).length(),o=Js.set(i[4],i[5],i[6]).length(),a=Js.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],$n.copy(this);let c=1/r,u=1/o,h=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,t.setFromRotationMatrix($n),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ci){let l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(a===Ci)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xa)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ci){let l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*c,f=(n+i)*u,g,x;if(a===Ci)g=(o+r)*h,x=-2*h;else if(a===Xa)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Js=new I,$n=new Ze,yg=new I(0,0,0),vg=new I(1,1,1),Wi=new I,pa=new I,Cn=new I,of=new Ze,af=new Nt,Ln=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return af.setFromEuler(this),this.setFromQuaternion(af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var To=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_g=0,lf=new I,Qs=new Nt,bi=new Ze,ma=new I,ao=new I,Mg=new I,Eg=new Nt,cf=new I(1,0,0),hf=new I(0,1,0),uf=new I(0,0,1),df={type:"added"},bg={type:"removed"},er={type:"childadded",child:null},oc={type:"childremoved",child:null},It=class s extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new Ln,n=new Nt,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new it}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(cf,e)}rotateY(e){return this.rotateOnAxis(hf,e)}rotateZ(e){return this.rotateOnAxis(uf,e)}translateOnAxis(e,t){return lf.copy(e).applyQuaternion(this.quaternion),this.position.add(lf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cf,e)}translateY(e){return this.translateOnAxis(hf,e)}translateZ(e){return this.translateOnAxis(uf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ma.copy(e):ma.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(ao,ma,this.up):bi.lookAt(ma,ao,this.up),this.quaternion.setFromRotationMatrix(bi),i&&(bi.extractRotation(i.matrixWorld),Qs.setFromRotationMatrix(bi),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(df),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bg),oc.child=e,this.dispatchEvent(oc),oc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(df),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,Mg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,Eg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};It.DEFAULT_UP=new I(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new I,Si=new I,ac=new I,Ti=new I,tr=new I,nr=new I,ff=new I,lc=new I,cc=new I,hc=new I,uc=new dt,dc=new dt,fc=new dt,bs=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Zn.subVectors(e,t),i.cross(Zn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Zn.subVectors(i,t),Si.subVectors(n,t),ac.subVectors(e,t);let o=Zn.dot(Zn),a=Zn.dot(Si),l=Zn.dot(ac),c=Si.dot(Si),u=Si.dot(ac),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return uc.setScalar(0),dc.setScalar(0),fc.setScalar(0),uc.fromBufferAttribute(e,t),dc.fromBufferAttribute(e,n),fc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(uc,r.x),o.addScaledVector(dc,r.y),o.addScaledVector(fc,r.z),o}static isFrontFacing(e,t,n,i){return Zn.subVectors(n,t),Si.subVectors(e,t),Zn.cross(Si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Zn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;tr.subVectors(i,n),nr.subVectors(r,n),lc.subVectors(e,n);let l=tr.dot(lc),c=nr.dot(lc);if(l<=0&&c<=0)return t.copy(n);cc.subVectors(e,i);let u=tr.dot(cc),h=nr.dot(cc);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(tr,o);hc.subVectors(e,r);let f=tr.dot(hc),g=nr.dot(hc);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(nr,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return ff.subVectors(r,i),a=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(ff,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},ga={h:0,s:0,l:0};function pc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=fu(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=pc(o,r,e+1/3),this.g=pc(o,r,e),this.b=pc(o,r,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){let n=Pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return ot.fromWorkingColorSpace(hn.copy(this),e),Math.round(Wt(hn.r*255,0,255))*65536+Math.round(Wt(hn.g*255,0,255))*256+Math.round(Wt(hn.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(hn.copy(this),t);let n=hn.r,i=hn.g,r=hn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=ht){ot.fromWorkingColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,i=hn.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(ga);let n=yo(Xi.h,ga.h,t),i=yo(Xi.s,ga.s,t),r=yo(Xi.l,ga.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Ae;Ae.NAMES=Pp;var Sg=0,Dn=class extends Li{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=On(),this.name="",this.blending=fr,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Dc,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lc&&(n.blendSrc=this.blendSrc),this.blendDst!==Dc&&(n.blendDst=this.blendDst),this.blendEquation!==Es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},De=class extends Dn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new I,xa=new de,Bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mh,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),i=Et(i,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mh&&(e.usage=this.usage),e}};var Ka=class extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ja=class extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tg=0,Hn=new Ze,mc=new It,ir=new I,Pn=new dn,lo=new dn,Zt=new I,Tt=class s extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cp(e)?ja:Ka)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return mc.lookAt(e),mc.updateMatrix(),this.applyMatrix4(mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Pn.min,lo.min),Pn.expandByPoint(Zt),Zt.addVectors(Pn.max,lo.max),Pn.expandByPoint(Zt)):(Pn.expandByPoint(lo.min),Pn.expandByPoint(lo.max))}Pn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Zt.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(e,c),Zt.add(ir)),i=Math.max(i,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new I,l[P]=new I;let c=new I,u=new I,h=new I,d=new de,f=new de,g=new de,x=new I,m=new I;function p(P,S,E){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[P].add(x),a[S].add(x),a[E].add(x),l[P].add(m),l[S].add(m),l[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,S=v.length;P<S;++P){let E=v[P],L=E.start,H=E.count;for(let D=L,B=L+H;D<B;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let _=new I,y=new I,R=new I,b=new I;function w(P){R.fromBufferAttribute(i,P),b.copy(R);let S=a[P];_.copy(S),_.sub(R.multiplyScalar(R.dot(S))).normalize(),y.crossVectors(b,S);let L=y.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,L)}for(let P=0,S=v.length;P<S;++P){let E=v[P],L=E.start,H=E.count;for(let D=L,B=L+H;D<B;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Bt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pf=new Ze,xs=new ws,ya=new In,mf=new I,va=new I,_a=new I,Ma=new I,gc=new I,Ea=new I,gf=new I,ba=new I,F=class extends It{constructor(e=new Tt,t=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(gc.fromBufferAttribute(h,e),o?Ea.addScaledVector(gc,u):Ea.addScaledVector(gc.sub(t),u))}t.add(Ea)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(ya.containsPoint(xs.origin)===!1&&(xs.intersectSphere(ya,mf)===null||xs.origin.distanceToSquared(mf)>(e.far-e.near)**2))&&(pf.copy(r).invert(),xs.copy(e.ray).applyMatrix4(pf),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,R=_;y<R;y+=3){let b=a.getX(y),w=a.getX(y+1),P=a.getX(y+2);i=Sa(this,p,e,n,c,u,h,b,w,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);i=Sa(this,o,e,n,c,u,h,v,_,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,R=_;y<R;y+=3){let b=y,w=y+1,P=y+2;i=Sa(this,p,e,n,c,u,h,b,w,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=m,_=m+1,y=m+2;i=Sa(this,o,e,n,c,u,h,v,_,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function wg(s,e,t,n,i,r,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Tn,a),l===null)return null;ba.copy(a),ba.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ba);return c<t.near||c>t.far?null:{distance:c,point:ba.clone(),object:s}}function Sa(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,va),s.getVertexPosition(l,_a),s.getVertexPosition(c,Ma);let u=wg(s,e,t,n,va,_a,Ma,gf);if(u){let h=new I;bs.getBarycoord(gf,va,_a,Ma,h),i&&(u.uv=bs.getInterpolatedAttribute(i,a,l,c,h,new de)),r&&(u.uv1=bs.getInterpolatedAttribute(r,a,l,c,h,new de)),o&&(u.normal=bs.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};bs.getNormal(va,_a,Ma,d.normal),u.face=d,u.barycoord=h}return u}var Oe=class s extends Tt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(h,2));function g(x,m,p,v,_,y,R,b,w,P,S){let E=y/w,L=R/P,H=y/2,D=R/2,B=b/2,z=w+1,k=P+1,te=0,q=0,pe=new I;for(let me=0;me<k;me++){let oe=me*L-D;for(let Re=0;Re<z;Re++){let Ye=Re*E-H;pe[x]=Ye*v,pe[m]=oe*_,pe[p]=B,c.push(pe.x,pe.y,pe.z),pe[x]=0,pe[m]=0,pe[p]=b>0?1:-1,u.push(pe.x,pe.y,pe.z),h.push(Re/w),h.push(1-me/P),te+=1}}for(let me=0;me<P;me++)for(let oe=0;oe<w;oe++){let Re=d+oe+z*me,Ye=d+oe+z*(me+1),ee=d+(oe+1)+z*(me+1),fe=d+(oe+1)+z*me;l.push(Re,Ye,fe),l.push(Ye,ee,fe),q+=6}a.addGroup(f,q,S),f+=q,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Tr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function gn(s){let e={};for(let t=0;t<s.length;t++){let n=Tr(s[t]);for(let i in n)e[i]=n[i]}return e}function Ag(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ip(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var fi={clone:Tr,merge:gn},Rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,At=class extends Dn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rg,this.fragmentShader=Cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=Ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$a=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qi=new I,xf=new de,yf=new de,Ut=class extends $a{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,xf,yf),t.subVectors(yf,xf)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sr=-90,rr=1,vh=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ut(sr,rr,e,t);i.layers=this.layers,this.add(i);let r=new Ut(sr,rr,e,t);r.layers=this.layers,this.add(r);let o=new Ut(sr,rr,e,t);o.layers=this.layers,this.add(o);let a=new Ut(sr,rr,e,t);a.layers=this.layers,this.add(a);let l=new Ut(sr,rr,e,t);l.layers=this.layers,this.add(l);let c=new Ut(sr,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Za=class extends Qt{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_h=class extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Za(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Oe(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:ui});r.uniforms.tEquirect.value=t;let o=new F(i,r),a=t.minFilter;return t.minFilter===hi&&(t.minFilter=un),new vh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},xc=new I,Pg=new I,Ig=new it,Jn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=xc.subVectors(n,t).cross(Pg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ig.getNormalMatrix(e),i=this.coplanarPoint(xc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new In,Ta=new I,wo=class{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,r=new Jn,o=new Jn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],v=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,m-f,y-p).normalize(),n[1].setComponents(l+r,d+c,m+f,y+p).normalize(),n[2].setComponents(l+o,d+u,m+g,y+v).normalize(),n[3].setComponents(l-o,d-u,m-g,y-v).normalize(),n[4].setComponents(l-a,d-h,m-x,y-_).normalize(),t===Ci)n[5].setComponents(l+a,d+h,m+x,y+_).normalize();else if(t===Xa)n[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ta.x=i.normal.x>0?e.max.x:e.min.x,Ta.y=i.normal.y>0?e.max.y:e.min.y,Ta.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Lg(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var at=class s extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let v=p*d-o;for(let _=0;_<c;_++){let y=_*h-r;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let _=v+c*p,y=v+c*(p+1),R=v+1+c*(p+1),b=v+1+c*p;f.push(_,y,b),f.push(y,R,b)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ug=`#ifdef USE_ALPHAHASH
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
#endif`,Ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fg=`#ifdef USE_AOMAP
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
#endif`,Og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zg=`#ifdef USE_BATCHING
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
#endif`,Gg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qg=`#ifdef USE_IRIDESCENCE
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
#endif`,Yg=`#ifdef USE_BUMPMAP
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
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nx=`#define PI 3.141592653589793
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
} // validated`,ix=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sx=`vec3 transformedNormal = objectNormal;
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
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ux=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_x=`#ifdef USE_GRADIENTMAP
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
}`,Mx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sx=`uniform bool receiveShadow;
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
#endif`,Tx=`#ifdef USE_ENVMAP
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
#endif`,wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Px=`PhysicalMaterial material;
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
#endif`,Ix=`struct PhysicalMaterial {
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
}`,Lx=`
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
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gx=`#if defined( USE_POINTS_UV )
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
#endif`,Vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`#ifdef USE_MORPHTARGETS
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
#endif`,jx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ty=`#ifdef USE_NORMALMAP
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
#endif`,ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ry=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,my=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xy=`float getShadowMask() {
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
}`,yy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vy=`#ifdef USE_SKINNING
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
#endif`,_y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,My=`#ifdef USE_SKINNING
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
#endif`,Ey=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,by=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ty=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Ay=`#ifdef USE_TRANSMISSION
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
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ly=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dy=`uniform sampler2D t2D;
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
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,By=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`#include <common>
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
}`,Fy=`#if DEPTH_PACKING == 3200
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
}`,Oy=`#define DISTANCE
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
}`,zy=`#define DISTANCE
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`uniform float scale;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,qy=`#include <common>
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
}`,Yy=`uniform vec3 diffuse;
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
}`,Ky=`#define LAMBERT
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
}`,jy=`#define LAMBERT
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
}`,$y=`#define MATCAP
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
}`,Zy=`#define MATCAP
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
}`,Jy=`#define NORMAL
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
}`,Qy=`#define NORMAL
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
}`,ev=`#define PHONG
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
}`,tv=`#define PHONG
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
}`,nv=`#define STANDARD
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
}`,iv=`#define STANDARD
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
}`,sv=`#define TOON
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
}`,rv=`#define TOON
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
}`,ov=`uniform float size;
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
}`,av=`uniform vec3 diffuse;
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
}`,lv=`#include <common>
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
}`,cv=`uniform vec3 color;
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
}`,hv=`uniform float rotation;
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
}`,uv=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Dg,alphahash_pars_fragment:Ug,alphamap_fragment:Ng,alphamap_pars_fragment:kg,alphatest_fragment:Bg,alphatest_pars_fragment:Hg,aomap_fragment:Fg,aomap_pars_fragment:Og,batching_pars_vertex:zg,batching_vertex:Gg,begin_vertex:Vg,beginnormal_vertex:Wg,bsdfs:Xg,iridescence_fragment:qg,bumpmap_pars_fragment:Yg,clipping_planes_fragment:Kg,clipping_planes_pars_fragment:jg,clipping_planes_pars_vertex:$g,clipping_planes_vertex:Zg,color_fragment:Jg,color_pars_fragment:Qg,color_pars_vertex:ex,color_vertex:tx,common:nx,cube_uv_reflection_fragment:ix,defaultnormal_vertex:sx,displacementmap_pars_vertex:rx,displacementmap_vertex:ox,emissivemap_fragment:ax,emissivemap_pars_fragment:lx,colorspace_fragment:cx,colorspace_pars_fragment:hx,envmap_fragment:ux,envmap_common_pars_fragment:dx,envmap_pars_fragment:fx,envmap_pars_vertex:px,envmap_physical_pars_fragment:Tx,envmap_vertex:mx,fog_vertex:gx,fog_pars_vertex:xx,fog_fragment:yx,fog_pars_fragment:vx,gradientmap_pars_fragment:_x,lightmap_pars_fragment:Mx,lights_lambert_fragment:Ex,lights_lambert_pars_fragment:bx,lights_pars_begin:Sx,lights_toon_fragment:wx,lights_toon_pars_fragment:Ax,lights_phong_fragment:Rx,lights_phong_pars_fragment:Cx,lights_physical_fragment:Px,lights_physical_pars_fragment:Ix,lights_fragment_begin:Lx,lights_fragment_maps:Dx,lights_fragment_end:Ux,logdepthbuf_fragment:Nx,logdepthbuf_pars_fragment:kx,logdepthbuf_pars_vertex:Bx,logdepthbuf_vertex:Hx,map_fragment:Fx,map_pars_fragment:Ox,map_particle_fragment:zx,map_particle_pars_fragment:Gx,metalnessmap_fragment:Vx,metalnessmap_pars_fragment:Wx,morphinstance_vertex:Xx,morphcolor_vertex:qx,morphnormal_vertex:Yx,morphtarget_pars_vertex:Kx,morphtarget_vertex:jx,normal_fragment_begin:$x,normal_fragment_maps:Zx,normal_pars_fragment:Jx,normal_pars_vertex:Qx,normal_vertex:ey,normalmap_pars_fragment:ty,clearcoat_normal_fragment_begin:ny,clearcoat_normal_fragment_maps:iy,clearcoat_pars_fragment:sy,iridescence_pars_fragment:ry,opaque_fragment:oy,packing:ay,premultiplied_alpha_fragment:ly,project_vertex:cy,dithering_fragment:hy,dithering_pars_fragment:uy,roughnessmap_fragment:dy,roughnessmap_pars_fragment:fy,shadowmap_pars_fragment:py,shadowmap_pars_vertex:my,shadowmap_vertex:gy,shadowmask_pars_fragment:xy,skinbase_vertex:yy,skinning_pars_vertex:vy,skinning_vertex:_y,skinnormal_vertex:My,specularmap_fragment:Ey,specularmap_pars_fragment:by,tonemapping_fragment:Sy,tonemapping_pars_fragment:Ty,transmission_fragment:wy,transmission_pars_fragment:Ay,uv_pars_fragment:Ry,uv_pars_vertex:Cy,uv_vertex:Py,worldpos_vertex:Iy,background_vert:Ly,background_frag:Dy,backgroundCube_vert:Uy,backgroundCube_frag:Ny,cube_vert:ky,cube_frag:By,depth_vert:Hy,depth_frag:Fy,distanceRGBA_vert:Oy,distanceRGBA_frag:zy,equirect_vert:Gy,equirect_frag:Vy,linedashed_vert:Wy,linedashed_frag:Xy,meshbasic_vert:qy,meshbasic_frag:Yy,meshlambert_vert:Ky,meshlambert_frag:jy,meshmatcap_vert:$y,meshmatcap_frag:Zy,meshnormal_vert:Jy,meshnormal_frag:Qy,meshphong_vert:ev,meshphong_frag:tv,meshphysical_vert:nv,meshphysical_frag:iv,meshtoon_vert:sv,meshtoon_frag:rv,points_vert:ov,points_frag:av,shadow_vert:lv,shadow_frag:cv,sprite_vert:hv,sprite_frag:uv},Te={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},ci={basic:{uniforms:gn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:gn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ae(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:gn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:gn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:gn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ae(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:gn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:gn([Te.points,Te.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:gn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:gn([Te.common,Te.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:gn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:gn([Te.sprite,Te.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:gn([Te.common,Te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:gn([Te.lights,Te.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ci.physical={uniforms:gn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var wa={r:0,b:0,g:0},vs=new Ln,dv=new Ze;function fv(s,e,t,n,i,r,o){let a=new Ae(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function x(v){let _=!1,y=g(v);y===null?p(a,l):y&&y.isColor&&(p(y,1),_=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,_){let y=g(_);y&&(y.isCubeTexture||y.mapping===Ml)?(u===void 0&&(u=new F(new Oe(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Tr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),vs.copy(_.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dv.makeRotationFromEuler(vs)),u.material.toneMapped=ot.getTransfer(y.colorSpace)!==vt,(h!==y||d!==y.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new F(new at(2,2),new At({name:"BackgroundMaterial",uniforms:Tr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ot.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(wa,Ip(s)),n.buffers.color.setClear(wa.r,wa.g,wa.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:x,addToRenderList:m}}function pv(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(E,L,H,D,B){let z=!1,k=h(D,H,L);r!==k&&(r=k,c(r.object)),z=f(E,D,H,B),z&&g(E,D,H,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(E,L,H,D),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(E){return s.bindVertexArray(E)}function u(E){return s.deleteVertexArray(E)}function h(E,L,H){let D=H.wireframe===!0,B=n[E.id];B===void 0&&(B={},n[E.id]=B);let z=B[L.id];z===void 0&&(z={},B[L.id]=z);let k=z[D];return k===void 0&&(k=d(l()),z[D]=k),k}function d(E){let L=[],H=[],D=[];for(let B=0;B<t;B++)L[B]=0,H[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:D,object:E,attributes:{},index:null}}function f(E,L,H,D){let B=r.attributes,z=L.attributes,k=0,te=H.getAttributes();for(let q in te)if(te[q].location>=0){let me=B[q],oe=z[q];if(oe===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),me===void 0||me.attribute!==oe||oe&&me.data!==oe.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function g(E,L,H,D){let B={},z=L.attributes,k=0,te=H.getAttributes();for(let q in te)if(te[q].location>=0){let me=z[q];me===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(me=E.instanceColor));let oe={};oe.attribute=me,me&&me.data&&(oe.data=me.data),B[q]=oe,k++}r.attributes=B,r.attributesNum=k,r.index=D}function x(){let E=r.newAttributes;for(let L=0,H=E.length;L<H;L++)E[L]=0}function m(E){p(E,0)}function p(E,L){let H=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;H[E]=1,D[E]===0&&(s.enableVertexAttribArray(E),D[E]=1),B[E]!==L&&(s.vertexAttribDivisor(E,L),B[E]=L)}function v(){let E=r.newAttributes,L=r.enabledAttributes;for(let H=0,D=L.length;H<D;H++)L[H]!==E[H]&&(s.disableVertexAttribArray(H),L[H]=0)}function _(E,L,H,D,B,z,k){k===!0?s.vertexAttribIPointer(E,L,H,B,z):s.vertexAttribPointer(E,L,H,D,B,z)}function y(E,L,H,D){x();let B=D.attributes,z=H.getAttributes(),k=L.defaultAttributeValues;for(let te in z){let q=z[te];if(q.location>=0){let pe=B[te];if(pe===void 0&&(te==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),te==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),pe!==void 0){let me=pe.normalized,oe=pe.itemSize,Re=e.get(pe);if(Re===void 0)continue;let Ye=Re.buffer,ee=Re.type,fe=Re.bytesPerElement,K=ee===s.INT||ee===s.UNSIGNED_INT||pe.gpuType===ru;if(pe.isInterleavedBufferAttribute){let re=pe.data,ye=re.stride,Ce=pe.offset;if(re.isInstancedInterleavedBuffer){for(let we=0;we<q.locationSize;we++)p(q.location+we,re.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let we=0;we<q.locationSize;we++)m(q.location+we);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let we=0;we<q.locationSize;we++)_(q.location+we,oe/q.locationSize,ee,me,ye*fe,(Ce+oe/q.locationSize*we)*fe,K)}else{if(pe.isInstancedBufferAttribute){for(let re=0;re<q.locationSize;re++)p(q.location+re,pe.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let re=0;re<q.locationSize;re++)m(q.location+re);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let re=0;re<q.locationSize;re++)_(q.location+re,oe/q.locationSize,ee,me,oe*fe,oe/q.locationSize*re*fe,K)}}else if(k!==void 0){let me=k[te];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(q.location,me);break;case 3:s.vertexAttrib3fv(q.location,me);break;case 4:s.vertexAttrib4fv(q.location,me);break;default:s.vertexAttrib1fv(q.location,me)}}}}v()}function R(){P();for(let E in n){let L=n[E];for(let H in L){let D=L[H];for(let B in D)u(D[B].object),delete D[B];delete L[H]}delete n[E]}}function b(E){if(n[E.id]===void 0)return;let L=n[E.id];for(let H in L){let D=L[H];for(let B in D)u(D[B].object),delete D[B];delete L[H]}delete n[E.id]}function w(E){for(let L in n){let H=n[L];if(H[E.id]===void 0)continue;let D=H[E.id];for(let B in D)u(D[B].object),delete D[B];delete H[E.id]}}function P(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function mv(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Fn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let P=w===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ii&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ei&&!P)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:R,maxSamples:b}}function xv(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Jn,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{let v=r?0:n,_=v*4,y=p.clippingState||null;l.value=y,y=u(g,d,_,f);for(let R=0;R!==_;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==x;++_,y+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function yv(s){let e=new WeakMap;function t(o,a){return a===zc?o.mapping=yr:a===Gc&&(o.mapping=vr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===zc||a===Gc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new _h(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Zi=class extends $a{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ur=4,vf=[.125,.215,.35,.446,.526,.582],Ss=20,yc=new Zi,_f=new Ae,vc=null,_c=0,Mc=0,Ec=!1,Ms=(1+Math.sqrt(5))/2,or=1/Ms,Mf=[new I(-Ms,or,0),new I(Ms,or,0),new I(-or,0,Ms),new I(or,0,Ms),new I(0,Ms,-or),new I(0,Ms,or),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Ja=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){vc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,_c,Mc),this._renderer.xr.enabled=Ec,e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:vn,format:Fn,colorSpace:fn,depthBuffer:!1},i=Ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vv(r)),this._blurMaterial=_v(r,e,t)}return i}_compileMaterial(e){let t=new F(this._lodPlanes[0],e);this._renderer.compile(t,yc)}_sceneToCubeUV(e,t,n,i){let a=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_f),u.toneMapping=ji,u.autoClear=!1;let f=new De({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new F(new Oe,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(_f),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;Aa(i,v*_,p>2?_:0,_,_),u.setRenderTarget(i),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===yr||e.mapping===vr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bf());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new F(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Aa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mf[(i-r-1)%Mf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new F(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ss-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Ss;m>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);let p=[],v=0;for(let w=0;w<Ss;++w){let P=w/x,S=Math.exp(-P*P/2);p.push(S),w===0?v+=S:w<m&&(v+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let y=this._sizeLods[i],R=3*y*(i>_-ur?i-_+ur:0),b=4*(this._cubeSize-y);Aa(t,R,b,3*y,2*y),l.setRenderTarget(t),l.render(h,yc)}};function vv(s){let e=[],t=[],n=[],i=s,r=s-ur+1+vf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ur?l=vf[o-s+ur-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let b=0;b<f;b++){let w=b%3*2/3-1,P=b>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(S,x*g*b),_.set(d,m*g*b);let E=[b,b,b,b,b,b];y.set(E,p*g*b)}let R=new Tt;R.setAttribute("position",new Bt(v,x)),R.setAttribute("uv",new Bt(_,m)),R.setAttribute("faceIndex",new Bt(y,p)),e.push(R),i>ur&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ef(s,e,t){let n=new zt(s,e,t);return n.texture.mapping=Ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Aa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function _v(s,e,t){let n=new Float32Array(Ss),i=new I(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pu(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function bf(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Sf(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}function Mv(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===zc||l===Gc,u=l===yr||l===vr;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ja(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Ja(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ev(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&po("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bv(s,e,t,n){let i={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],s.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let _=0,y=v.length;_<y;_+=3){let R=v[_+0],b=v[_+1],w=v[_+2];d.push(R,b,b,w,w,R)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let R=_+0,b=_+1,w=_+2;d.push(R,b,b,w,w,R)}}else return;let m=new(Cp(d)?ja:Ka)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Sv(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*x[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Tv(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function wv(s,e,t){let n=new WeakMap,i=new dt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let S=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*R*4*h),w=new Ya(b,y,R,h);w.type=ei,w.needsUpdate=!0;let P=_*4;for(let E=0;E<h;E++){let L=m[E],H=p[E],D=v[E],B=y*R*4*E;for(let z=0;z<L.count;z++){let k=z*P;f===!0&&(i.fromBufferAttribute(L,z),b[B+k+0]=i.x,b[B+k+1]=i.y,b[B+k+2]=i.z,b[B+k+3]=0),g===!0&&(i.fromBufferAttribute(H,z),b[B+k+4]=i.x,b[B+k+5]=i.y,b[B+k+6]=i.z,b[B+k+7]=0),x===!0&&(i.fromBufferAttribute(D,z),b[B+k+8]=i.x,b[B+k+9]=i.y,b[B+k+10]=i.z,b[B+k+11]=D.itemSize===4?i.w:1)}}d={count:h,texture:w,size:new de(y,R)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Av(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Qa=class extends Qt{constructor(e,t,n,i,r,o,a,l,c,u=pr){if(u!==pr&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===pr&&(n=Ts),n===void 0&&u===Mr&&(n=_r),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Dp=new Qt,Tf=new Qa(1,1),Up=new Ya,Np=new yh,kp=new Za,wf=[],Af=[],Rf=new Float32Array(16),Cf=new Float32Array(9),Pf=new Float32Array(4);function Ur(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=wf[i];if(r===void 0&&(r=new Float32Array(i),wf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Xt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function qt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Tl(s,e){let t=Af[e];t===void 0&&(t=new Int32Array(e),Af[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Rv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Cv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2fv(this.addr,e),qt(t,e)}}function Pv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;s.uniform3fv(this.addr,e),qt(t,e)}}function Iv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4fv(this.addr,e),qt(t,e)}}function Lv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Pf.set(n),s.uniformMatrix2fv(this.addr,!1,Pf),qt(t,n)}}function Dv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Cf.set(n),s.uniformMatrix3fv(this.addr,!1,Cf),qt(t,n)}}function Uv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;Rf.set(n),s.uniformMatrix4fv(this.addr,!1,Rf),qt(t,n)}}function Nv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function kv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2iv(this.addr,e),qt(t,e)}}function Bv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3iv(this.addr,e),qt(t,e)}}function Hv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4iv(this.addr,e),qt(t,e)}}function Fv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ov(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2uiv(this.addr,e),qt(t,e)}}function zv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3uiv(this.addr,e),qt(t,e)}}function Gv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4uiv(this.addr,e),qt(t,e)}}function Vv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Tf.compareFunction=Rp,r=Tf):r=Dp,t.setTexture2D(e||r,i)}function Wv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Np,i)}function Xv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kp,i)}function qv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Up,i)}function Yv(s){switch(s){case 5126:return Rv;case 35664:return Cv;case 35665:return Pv;case 35666:return Iv;case 35674:return Lv;case 35675:return Dv;case 35676:return Uv;case 5124:case 35670:return Nv;case 35667:case 35671:return kv;case 35668:case 35672:return Bv;case 35669:case 35673:return Hv;case 5125:return Fv;case 36294:return Ov;case 36295:return zv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}function Kv(s,e){s.uniform1fv(this.addr,e)}function jv(s,e){let t=Ur(e,this.size,2);s.uniform2fv(this.addr,t)}function $v(s,e){let t=Ur(e,this.size,3);s.uniform3fv(this.addr,t)}function Zv(s,e){let t=Ur(e,this.size,4);s.uniform4fv(this.addr,t)}function Jv(s,e){let t=Ur(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Qv(s,e){let t=Ur(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function e_(s,e){let t=Ur(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function t_(s,e){s.uniform1iv(this.addr,e)}function n_(s,e){s.uniform2iv(this.addr,e)}function i_(s,e){s.uniform3iv(this.addr,e)}function s_(s,e){s.uniform4iv(this.addr,e)}function r_(s,e){s.uniform1uiv(this.addr,e)}function o_(s,e){s.uniform2uiv(this.addr,e)}function a_(s,e){s.uniform3uiv(this.addr,e)}function l_(s,e){s.uniform4uiv(this.addr,e)}function c_(s,e,t){let n=this.cache,i=e.length,r=Tl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Dp,r[o])}function h_(s,e,t){let n=this.cache,i=e.length,r=Tl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Np,r[o])}function u_(s,e,t){let n=this.cache,i=e.length,r=Tl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||kp,r[o])}function d_(s,e,t){let n=this.cache,i=e.length,r=Tl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Up,r[o])}function f_(s){switch(s){case 5126:return Kv;case 35664:return jv;case 35665:return $v;case 35666:return Zv;case 35674:return Jv;case 35675:return Qv;case 35676:return e_;case 5124:case 35670:return t_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return o_;case 36295:return a_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return d_}}var Mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yv(t.type)}},Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f_(t.type)}},bh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},bc=/(\w+)(\])?(\[|\.)?/g;function If(s,e){s.seq.push(e),s.map[e.id]=e}function p_(s,e,t){let n=s.name,i=n.length;for(bc.lastIndex=0;;){let r=bc.exec(n),o=bc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){If(t,c===void 0?new Mh(a,s,e):new Eh(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new bh(a),If(t,h)),t=h}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);p_(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Lf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var m_=37297,g_=0;function x_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Df=new it;function y_(s){ot._getMatrix(Df,ot.workingColorSpace,s);let e=`mat3( ${Df.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(s)){case bl:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Uf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+x_(s.getShaderSource(e),o)}else return i}function v_(s,e){let t=y_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function __(s,e){let t;switch(e){case Qh:t="Linear";break;case eu:t="Reinhard";break;case tu:t="Cineon";break;case Dr:t="ACESFilmic";break;case nu:t="AgX";break;case iu:t="Neutral";break;case D0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ra=new I;function M_(){ot.getLuminanceCoefficients(Ra);let s=Ra.x.toFixed(4),e=Ra.y.toFixed(4),t=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function b_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function S_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function mo(s){return s!==""}function Nf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var T_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(s){return s.replace(T_,A_)}var w_=new Map;function A_(s,e){let t=st[e];if(t===void 0){let n=w_.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sh(t)}var R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(s){return s.replace(R_,C_)}function C_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Hf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===pp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===d0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function I_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case yr:case vr:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vr:e="ENVMAP_MODE_REFRACTION";break}return e}function D_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mp:e="ENVMAP_BLENDING_MULTIPLY";break;case I0:e="ENVMAP_BLENDING_MIX";break;case L0:e="ENVMAP_BLENDING_ADD";break}return e}function U_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function N_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=P_(t),c=I_(t),u=L_(t),h=D_(t),d=U_(t),f=E_(t),g=b_(r),x=i.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mo).join(`
`),p.length>0&&(p+=`
`)):(m=[Hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),p=[Hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?st.tonemapping_pars_fragment:"",t.toneMapping!==ji?__("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,v_("linearToOutputTexel",t.outputColorSpace),M_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mo).join(`
`)),o=Sh(o),o=Nf(o,t),o=kf(o,t),a=Sh(a),a=Nf(a,t),a=kf(a,t),o=Bf(o),a=Bf(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===$d?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$d?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+m+o,y=v+p+a,R=Lf(i,i.VERTEX_SHADER,_),b=Lf(i,i.FRAGMENT_SHADER,y);i.attachShader(x,R),i.attachShader(x,b),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function w(L){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(x).trim(),D=i.getShaderInfoLog(R).trim(),B=i.getShaderInfoLog(b).trim(),z=!0,k=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,R,b);else{let te=Uf(i,R,"vertex"),q=Uf(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+te+`
`+q)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(D===""||B==="")&&(k=!1);k&&(L.diagnostics={runnable:z,programLog:H,vertexShader:{log:D,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(R),i.deleteShader(b),P=new gr(i,x),S=S_(i,x)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(x,m_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=b,this}var k_=0,Th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wh(e),t.set(e,n)),n}},wh=class{constructor(e){this.id=k_++,this.code=e,this.usedTimes=0}};function B_(s,e,t,n,i,r,o){let a=new To,l=new Th,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,E,L,H,D){let B=H.fog,z=D.geometry,k=S.isMeshStandardMaterial?H.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),q=te&&te.mapping===Ml?te.image.height:null,pe=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let me=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,oe=me!==void 0?me.length:0,Re=0;z.morphAttributes.position!==void 0&&(Re=1),z.morphAttributes.normal!==void 0&&(Re=2),z.morphAttributes.color!==void 0&&(Re=3);let Ye,ee,fe,K;if(pe){let Mt=ci[pe];Ye=Mt.vertexShader,ee=Mt.fragmentShader}else Ye=S.vertexShader,ee=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),K=l.getFragmentShaderID(S);let re=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ce=D.isInstancedMesh===!0,we=D.isBatchedMesh===!0,$e=!!S.map,ce=!!S.matcap,ve=!!te,A=!!S.aoMap,j=!!S.lightMap,Y=!!S.bumpMap,he=!!S.normalMap,U=!!S.displacementMap,W=!!S.emissiveMap,O=!!S.metalnessMap,T=!!S.roughnessMap,M=S.anisotropy>0,N=S.clearcoat>0,$=S.dispersion>0,le=S.iridescence>0,Q=S.sheen>0,be=S.transmission>0,ne=M&&!!S.anisotropyMap,_e=N&&!!S.clearcoatMap,qe=N&&!!S.clearcoatNormalMap,ae=N&&!!S.clearcoatRoughnessMap,Ee=le&&!!S.iridescenceMap,Be=le&&!!S.iridescenceThicknessMap,Fe=Q&&!!S.sheenColorMap,Se=Q&&!!S.sheenRoughnessMap,et=!!S.specularMap,Ke=!!S.specularColorMap,_t=!!S.specularIntensityMap,G=be&&!!S.transmissionMap,Pe=be&&!!S.thicknessMap,ie=!!S.gradientMap,ue=!!S.alphaMap,Ue=S.alphaTest>0,Ie=!!S.alphaHash,tt=!!S.extensions,Dt=ji;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Dt=s.toneMapping);let ln={shaderID:pe,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:ee,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:we,batchingColor:we&&D._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&D.instanceColor!==null,instancingMorph:Ce&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:fn,alphaToCoverage:!!S.alphaToCoverage,map:$e,matcap:ce,envMap:ve,envMapMode:ve&&te.mapping,envMapCubeUVHeight:q,aoMap:A,lightMap:j,bumpMap:Y,normalMap:he,displacementMap:d&&U,emissiveMap:W,normalMapObjectSpace:he&&S.normalMapType===z0,normalMapTangentSpace:he&&S.normalMapType===Ap,metalnessMap:O,roughnessMap:T,anisotropy:M,anisotropyMap:ne,clearcoat:N,clearcoatMap:_e,clearcoatNormalMap:qe,clearcoatRoughnessMap:ae,dispersion:$,iridescence:le,iridescenceMap:Ee,iridescenceThicknessMap:Be,sheen:Q,sheenColorMap:Fe,sheenRoughnessMap:Se,specularMap:et,specularColorMap:Ke,specularIntensityMap:_t,transmission:be,transmissionMap:G,thicknessMap:Pe,gradientMap:ie,opaque:S.transparent===!1&&S.blending===fr&&S.alphaToCoverage===!1,alphaMap:ue,alphaTest:Ue,alphaHash:Ie,combine:S.combine,mapUv:$e&&x(S.map.channel),aoMapUv:A&&x(S.aoMap.channel),lightMapUv:j&&x(S.lightMap.channel),bumpMapUv:Y&&x(S.bumpMap.channel),normalMapUv:he&&x(S.normalMap.channel),displacementMapUv:U&&x(S.displacementMap.channel),emissiveMapUv:W&&x(S.emissiveMap.channel),metalnessMapUv:O&&x(S.metalnessMap.channel),roughnessMapUv:T&&x(S.roughnessMap.channel),anisotropyMapUv:ne&&x(S.anisotropyMap.channel),clearcoatMapUv:_e&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:qe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(S.sheenRoughnessMap.channel),specularMapUv:et&&x(S.specularMap.channel),specularColorMapUv:Ke&&x(S.specularColorMap.channel),specularIntensityMapUv:_t&&x(S.specularIntensityMap.channel),transmissionMapUv:G&&x(S.transmissionMap.channel),thicknessMapUv:Pe&&x(S.thicknessMap.channel),alphaMapUv:ue&&x(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(he||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&($e||ue),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Re,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:$e&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===vt,decodeVideoTextureEmissive:W&&S.emissiveMap.isVideoTexture===!0&&ot.getTransfer(S.emissiveMap.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pt,flipSided:S.side===Ot,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:tt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&S.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ln.vertexUv1s=c.has(1),ln.vertexUv2s=c.has(2),ln.vertexUv3s=c.has(3),c.clear(),ln}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)E.push(L),E.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(v(E,S),_(E,S),E.push(s.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function _(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let E=g[S.type],L;if(E){let H=ci[E];L=fi.clone(H.uniforms)}else L=S.uniforms;return L}function R(S,E){let L;for(let H=0,D=u.length;H<D;H++){let B=u[H];if(B.cacheKey===E){L=B,++L.usedTimes;break}}return L===void 0&&(L=new N_(s,E,S,r),u.push(L)),L}function b(S){if(--S.usedTimes===0){let E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:P}}function H_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function F_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ff(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Of(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,g,x,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,g,x,m){let p=o(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||F_),n.length>1&&n.sort(d||Ff),i.length>1&&i.sort(d||Ff)}function u(){for(let h=e,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function O_(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Of,s.set(n,[o])):i>=r.length?(o=new Of,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function z_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ae};break;case"SpotLight":t={position:new I,direction:new I,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function G_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var V_=0;function W_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function X_(s){let e=new z_,t=G_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,r=new Ze,o=new Ze;function a(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,_=0,y=0,R=0,b=0,w=0;c.sort(W_);for(let S=0,E=c.length;S<E;S++){let L=c[S],H=L.color,D=L.intensity,B=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=H.r*D,h+=H.g*D,d+=H.b*D;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],D);w++}else if(L.isDirectionalLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,q=t.get(L);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=L.shadow.matrix,v++}n.directional[f]=k,f++}else if(L.isSpotLight){let k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(H).multiplyScalar(D),k.distance=B,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[x]=k;let te=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,te.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[x]=te.matrix,L.castShadow){let q=t.get(L);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=z,y++}x++}else if(L.isRectAreaLight){let k=e.get(L);k.color.copy(H).multiplyScalar(D),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=k,m++}else if(L.isPointLight){let k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){let te=L.shadow,q=t.get(L);q.shadowIntensity=te.intensity,q.shadowBias=te.bias,q.shadowNormalBias=te.normalBias,q.shadowRadius=te.radius,q.shadowMapSize=te.mapSize,q.shadowCameraNear=te.camera.near,q.shadowCameraFar=te.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=L.shadow.matrix,_++}n.point[g]=k,g++}else if(L.isHemisphereLight){let k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(D),k.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==y||P.numSpotMaps!==R||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=y,P.numSpotMaps=R,P.numLightProbes=w,n.version=V_++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let _=c[p];if(_.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function zf(s){let e=new X_(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function q_(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new zf(s),e.set(i,[a])):r>=o.length?(a=new zf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ah=class extends Dn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=F0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rh=class extends Dn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K_=`uniform sampler2D shadow_pass;
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
}`;function j_(s,e,t){let n=new wo,i=new de,r=new de,o=new dt,a=new Ah({depthPacking:O0}),l=new Rh,c={},u=t.maxTextureSize,h={[Tn]:Ot,[Ot]:Tn,[Pt]:Pt},d=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Y_,fragmentShader:K_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new F(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pp;let p=this.type;this.render=function(b,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let S=s.getRenderTarget(),E=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),H=s.state;H.setBlending(ui),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let D=p!==Ai&&this.type===Ai,B=p===Ai&&this.type!==Ai;for(let z=0,k=b.length;z<k;z++){let te=b[z],q=te.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let pe=q.getFrameExtents();if(i.multiply(pe),r.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/pe.x),i.x=r.x*pe.x,q.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/pe.y),i.y=r.y*pe.y,q.mapSize.y=r.y)),q.map===null||D===!0||B===!0){let oe=this.type!==Ai?{minFilter:Jt,magFilter:Jt}:{};q.map!==null&&q.map.dispose(),q.map=new zt(i.x,i.y,oe),q.map.texture.name=te.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let me=q.getViewportCount();for(let oe=0;oe<me;oe++){let Re=q.getViewport(oe);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),H.viewport(o),q.updateMatrices(te,oe),n=q.getFrustum(),y(w,P,q.camera,te,this.type)}q.isPointLightShadow!==!0&&this.type===Ai&&v(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,E,L)};function v(b,w){let P=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new zt(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,P,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,P,f,x,null)}function _(b,w,P,S){let E=null,L=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)E=L;else if(E=P.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let H=E.uuid,D=w.uuid,B=c[H];B===void 0&&(B={},c[H]=B);let z=B[D];z===void 0&&(z=E.clone(),B[D]=z,w.addEventListener("dispose",R)),E=z}if(E.visible=w.visible,E.wireframe=w.wireframe,S===Ai?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:h[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let H=s.properties.get(E);H.light=P}return E}function y(b,w,P,S,E){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Ai)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);let D=e.update(b),B=b.material;if(Array.isArray(B)){let z=D.groups;for(let k=0,te=z.length;k<te;k++){let q=z[k],pe=B[q.materialIndex];if(pe&&pe.visible){let me=_(b,pe,S,E);b.onBeforeShadow(s,b,w,P,D,me,q),s.renderBufferDirect(P,null,D,me,b,q),b.onAfterShadow(s,b,w,P,D,me,q)}}}else if(B.visible){let z=_(b,B,S,E);b.onBeforeShadow(s,b,w,P,D,z,null),s.renderBufferDirect(P,null,D,z,b,null),b.onAfterShadow(s,b,w,P,D,z,null)}}let H=b.children;for(let D=0,B=H.length;D<B;D++)y(H[D],w,P,S,E)}function R(b){b.target.removeEventListener("dispose",R);for(let P in c){let S=c[P],E=b.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var $_={[Uc]:Nc,[kc]:Fc,[Bc]:Oc,[xr]:Hc,[Nc]:Uc,[Fc]:kc,[Oc]:Bc,[Hc]:xr};function Z_(s,e){function t(){let G=!1,Pe=new dt,ie=null,ue=new dt(0,0,0,0);return{setMask:function(Ue){ie!==Ue&&!G&&(s.colorMask(Ue,Ue,Ue,Ue),ie=Ue)},setLocked:function(Ue){G=Ue},setClear:function(Ue,Ie,tt,Dt,ln){ln===!0&&(Ue*=Dt,Ie*=Dt,tt*=Dt),Pe.set(Ue,Ie,tt,Dt),ue.equals(Pe)===!1&&(s.clearColor(Ue,Ie,tt,Dt),ue.copy(Pe))},reset:function(){G=!1,ie=null,ue.set(-1,0,0,0)}}}function n(){let G=!1,Pe=!1,ie=null,ue=null,Ue=null;return{setReversed:function(Ie){if(Pe!==Ie){let tt=e.get("EXT_clip_control");Pe?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT);let Dt=Ue;Ue=null,this.setClear(Dt)}Pe=Ie},getReversed:function(){return Pe},setTest:function(Ie){Ie?re(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Ie){ie!==Ie&&!G&&(s.depthMask(Ie),ie=Ie)},setFunc:function(Ie){if(Pe&&(Ie=$_[Ie]),ue!==Ie){switch(Ie){case Uc:s.depthFunc(s.NEVER);break;case Nc:s.depthFunc(s.ALWAYS);break;case kc:s.depthFunc(s.LESS);break;case xr:s.depthFunc(s.LEQUAL);break;case Bc:s.depthFunc(s.EQUAL);break;case Hc:s.depthFunc(s.GEQUAL);break;case Fc:s.depthFunc(s.GREATER);break;case Oc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=Ie}},setLocked:function(Ie){G=Ie},setClear:function(Ie){Ue!==Ie&&(Pe&&(Ie=1-Ie),s.clearDepth(Ie),Ue=Ie)},reset:function(){G=!1,ie=null,ue=null,Ue=null,Pe=!1}}}function i(){let G=!1,Pe=null,ie=null,ue=null,Ue=null,Ie=null,tt=null,Dt=null,ln=null;return{setTest:function(Mt){G||(Mt?re(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(Mt){Pe!==Mt&&!G&&(s.stencilMask(Mt),Pe=Mt)},setFunc:function(Mt,Yn,vi){(ie!==Mt||ue!==Yn||Ue!==vi)&&(s.stencilFunc(Mt,Yn,vi),ie=Mt,ue=Yn,Ue=vi)},setOp:function(Mt,Yn,vi){(Ie!==Mt||tt!==Yn||Dt!==vi)&&(s.stencilOp(Mt,Yn,vi),Ie=Mt,tt=Yn,Dt=vi)},setLocked:function(Mt){G=Mt},setClear:function(Mt){ln!==Mt&&(s.clearStencil(Mt),ln=Mt)},reset:function(){G=!1,Pe=null,ie=null,ue=null,Ue=null,Ie=null,tt=null,Dt=null,ln=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,_=null,y=null,R=null,b=null,w=new Ae(0,0,0),P=0,S=!1,E=null,L=null,H=null,D=null,B=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,te=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=te>=2);let pe=null,me={},oe=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),Ye=new dt().fromArray(oe),ee=new dt().fromArray(Re);function fe(G,Pe,ie,ue){let Ue=new Uint8Array(4),Ie=s.createTexture();s.bindTexture(G,Ie),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<ie;tt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Pe+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return Ie}let K={};K[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(s.DEPTH_TEST),o.setFunc(xr),Y(!1),he(Xd),re(s.CULL_FACE),A(ui);function re(G){u[G]!==!0&&(s.enable(G),u[G]=!0)}function ye(G){u[G]!==!1&&(s.disable(G),u[G]=!1)}function Ce(G,Pe){return h[G]!==Pe?(s.bindFramebuffer(G,Pe),h[G]=Pe,G===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Pe),G===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function we(G,Pe){let ie=f,ue=!1;if(G){ie=d.get(Pe),ie===void 0&&(ie=[],d.set(Pe,ie));let Ue=G.textures;if(ie.length!==Ue.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Ie=0,tt=Ue.length;Ie<tt;Ie++)ie[Ie]=s.COLOR_ATTACHMENT0+Ie;ie.length=Ue.length,ue=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,ue=!0);ue&&s.drawBuffers(ie)}function $e(G){return g!==G?(s.useProgram(G),g=G,!0):!1}let ce={[Es]:s.FUNC_ADD,[p0]:s.FUNC_SUBTRACT,[m0]:s.FUNC_REVERSE_SUBTRACT};ce[g0]=s.MIN,ce[x0]=s.MAX;let ve={[y0]:s.ZERO,[v0]:s.ONE,[_0]:s.SRC_COLOR,[Lc]:s.SRC_ALPHA,[w0]:s.SRC_ALPHA_SATURATE,[S0]:s.DST_COLOR,[E0]:s.DST_ALPHA,[M0]:s.ONE_MINUS_SRC_COLOR,[Dc]:s.ONE_MINUS_SRC_ALPHA,[T0]:s.ONE_MINUS_DST_COLOR,[b0]:s.ONE_MINUS_DST_ALPHA,[A0]:s.CONSTANT_COLOR,[R0]:s.ONE_MINUS_CONSTANT_COLOR,[C0]:s.CONSTANT_ALPHA,[P0]:s.ONE_MINUS_CONSTANT_ALPHA};function A(G,Pe,ie,ue,Ue,Ie,tt,Dt,ln,Mt){if(G===ui){x===!0&&(ye(s.BLEND),x=!1);return}if(x===!1&&(re(s.BLEND),x=!0),G!==f0){if(G!==m||Mt!==S){if((p!==Es||y!==Es)&&(s.blendEquation(s.FUNC_ADD),p=Es,y=Es),Mt)switch(G){case fr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ti:s.blendFunc(s.ONE,s.ONE);break;case qd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case fr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ti:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case qd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}v=null,_=null,R=null,b=null,w.set(0,0,0),P=0,m=G,S=Mt}return}Ue=Ue||Pe,Ie=Ie||ie,tt=tt||ue,(Pe!==p||Ue!==y)&&(s.blendEquationSeparate(ce[Pe],ce[Ue]),p=Pe,y=Ue),(ie!==v||ue!==_||Ie!==R||tt!==b)&&(s.blendFuncSeparate(ve[ie],ve[ue],ve[Ie],ve[tt]),v=ie,_=ue,R=Ie,b=tt),(Dt.equals(w)===!1||ln!==P)&&(s.blendColor(Dt.r,Dt.g,Dt.b,ln),w.copy(Dt),P=ln),m=G,S=!1}function j(G,Pe){G.side===Pt?ye(s.CULL_FACE):re(s.CULL_FACE);let ie=G.side===Ot;Pe&&(ie=!ie),Y(ie),G.blending===fr&&G.transparent===!1?A(ui):A(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let ue=G.stencilWrite;a.setTest(ue),ue&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),W(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Y(G){E!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),E=G)}function he(G){G!==h0?(re(s.CULL_FACE),G!==L&&(G===Xd?s.cullFace(s.BACK):G===u0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),L=G}function U(G){G!==H&&(k&&s.lineWidth(G),H=G)}function W(G,Pe,ie){G?(re(s.POLYGON_OFFSET_FILL),(D!==Pe||B!==ie)&&(s.polygonOffset(Pe,ie),D=Pe,B=ie)):ye(s.POLYGON_OFFSET_FILL)}function O(G){G?re(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function T(G){G===void 0&&(G=s.TEXTURE0+z-1),pe!==G&&(s.activeTexture(G),pe=G)}function M(G,Pe,ie){ie===void 0&&(pe===null?ie=s.TEXTURE0+z-1:ie=pe);let ue=me[ie];ue===void 0&&(ue={type:void 0,texture:void 0},me[ie]=ue),(ue.type!==G||ue.texture!==Pe)&&(pe!==ie&&(s.activeTexture(ie),pe=ie),s.bindTexture(G,Pe||K[G]),ue.type=G,ue.texture=Pe)}function N(){let G=me[pe];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(G){Ye.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ye.copy(G))}function Se(G){ee.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),ee.copy(G))}function et(G,Pe){let ie=c.get(Pe);ie===void 0&&(ie=new WeakMap,c.set(Pe,ie));let ue=ie.get(G);ue===void 0&&(ue=s.getUniformBlockIndex(Pe,G.name),ie.set(G,ue))}function Ke(G,Pe){let ue=c.get(Pe).get(G);l.get(Pe)!==ue&&(s.uniformBlockBinding(Pe,ue,G.__bindingPointIndex),l.set(Pe,ue))}function _t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},pe=null,me={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,v=null,_=null,y=null,R=null,b=null,w=new Ae(0,0,0),P=0,S=!1,E=null,L=null,H=null,D=null,B=null,Ye.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:ye,bindFramebuffer:Ce,drawBuffers:we,useProgram:$e,setBlending:A,setMaterial:j,setFlipSided:Y,setCullFace:he,setLineWidth:U,setPolygonOffset:W,setScissorTest:O,activeTexture:T,bindTexture:M,unbindTexture:N,compressedTexImage2D:$,compressedTexImage3D:le,texImage2D:Ee,texImage3D:Be,updateUBOMapping:et,uniformBlockBinding:Ke,texStorage2D:qe,texStorage3D:ae,texSubImage2D:Q,texSubImage3D:be,compressedTexSubImage2D:ne,compressedTexSubImage3D:_e,scissor:Fe,viewport:Se,reset:_t}}function Gf(s,e,t,n){let i=J_(n);switch(t){case _p:return s*e;case Ep:return s*e;case bp:return s*e*2;case lu:return s*e/i.components*i.byteLength;case cu:return s*e/i.components*i.byteLength;case Sp:return s*e*2/i.components*i.byteLength;case hu:return s*e*2/i.components*i.byteLength;case Mp:return s*e*3/i.components*i.byteLength;case Fn:return s*e*4/i.components*i.byteLength;case uu:return s*e*4/i.components*i.byteLength;case Fa:case Oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case za:case Ga:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wc:case qc:return Math.max(s,16)*Math.max(e,8)/4;case Vc:case Xc:return Math.max(s,8)*Math.max(e,8)/2;case Yc:case Kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case eh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case th:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case nh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ih:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case rh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case oh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ah:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ch:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Va:case hh:case uh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Tp:case dh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case fh:case ph:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function J_(s){switch(s){case Ii:case xp:return{byteLength:1,components:1};case bo:case yp:case vn:return{byteLength:2,components:1};case ou:case au:return{byteLength:2,components:4};case Ts:case ru:case ei:return{byteLength:4,components:1};case vp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Q_(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):So("canvas")}function x(T,M,N){let $=1,le=O(T);if((le.width>N||le.height>N)&&($=N/Math.max(le.width,le.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Q=Math.floor($*le.width),be=Math.floor($*le.height);h===void 0&&(h=g(Q,be));let ne=M?g(Q,be):h;return ne.width=Q,ne.height=be,ne.getContext("2d").drawImage(T,0,0,Q,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Q+"x"+be+")."),ne}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(T,M,N,$,le=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=M;if(M===s.RED&&(N===s.FLOAT&&(Q=s.R32F),N===s.HALF_FLOAT&&(Q=s.R16F),N===s.UNSIGNED_BYTE&&(Q=s.R8)),M===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(Q=s.R8UI),N===s.UNSIGNED_SHORT&&(Q=s.R16UI),N===s.UNSIGNED_INT&&(Q=s.R32UI),N===s.BYTE&&(Q=s.R8I),N===s.SHORT&&(Q=s.R16I),N===s.INT&&(Q=s.R32I)),M===s.RG&&(N===s.FLOAT&&(Q=s.RG32F),N===s.HALF_FLOAT&&(Q=s.RG16F),N===s.UNSIGNED_BYTE&&(Q=s.RG8)),M===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(Q=s.RG8UI),N===s.UNSIGNED_SHORT&&(Q=s.RG16UI),N===s.UNSIGNED_INT&&(Q=s.RG32UI),N===s.BYTE&&(Q=s.RG8I),N===s.SHORT&&(Q=s.RG16I),N===s.INT&&(Q=s.RG32I)),M===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),N===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),N===s.UNSIGNED_INT&&(Q=s.RGB32UI),N===s.BYTE&&(Q=s.RGB8I),N===s.SHORT&&(Q=s.RGB16I),N===s.INT&&(Q=s.RGB32I)),M===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),N===s.UNSIGNED_INT&&(Q=s.RGBA32UI),N===s.BYTE&&(Q=s.RGBA8I),N===s.SHORT&&(Q=s.RGBA16I),N===s.INT&&(Q=s.RGBA32I)),M===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),M===s.RGBA){let be=le?bl:ot.getTransfer($);N===s.FLOAT&&(Q=s.RGBA32F),N===s.HALF_FLOAT&&(Q=s.RGBA16F),N===s.UNSIGNED_BYTE&&(Q=be===vt?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(T,M){let N;return T?M===null||M===Ts||M===_r?N=s.DEPTH24_STENCIL8:M===ei?N=s.DEPTH32F_STENCIL8:M===bo&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ts||M===_r?N=s.DEPTH_COMPONENT24:M===ei?N=s.DEPTH_COMPONENT32F:M===bo&&(N=s.DEPTH_COMPONENT16),N}function R(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Jt&&T.minFilter!==un?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function b(T){let M=T.target;M.removeEventListener("dispose",b),P(M),M.isVideoTexture&&u.delete(M)}function w(T){let M=T.target;M.removeEventListener("dispose",w),E(M)}function P(T){let M=n.get(T);if(M.__webglInit===void 0)return;let N=T.source,$=d.get(N);if($){let le=$[M.__cacheKey];le.usedTimes--,le.usedTimes===0&&S(T),Object.keys($).length===0&&d.delete(N)}n.remove(T)}function S(T){let M=n.get(T);s.deleteTexture(M.__webglTexture);let N=T.source,$=d.get(N);delete $[M.__cacheKey],o.memory.textures--}function E(T){let M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let le=0;le<M.__webglFramebuffer[$].length;le++)s.deleteFramebuffer(M.__webglFramebuffer[$][le]);else s.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)s.deleteFramebuffer(M.__webglFramebuffer[$]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let N=T.textures;for(let $=0,le=N.length;$<le;$++){let Q=n.get(N[$]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(N[$])}n.remove(T)}let L=0;function H(){L=0}function D(){let T=L;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),L+=1,T}function B(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function z(T,M){let N=n.get(T);if(T.isVideoTexture&&U(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){let $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(N,T,M);return}}t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+M)}function k(T,M){let N=n.get(T);if(T.version>0&&N.__version!==T.version){ee(N,T,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+M)}function te(T,M){let N=n.get(T);if(T.version>0&&N.__version!==T.version){ee(N,T,M);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+M)}function q(T,M){let N=n.get(T);if(T.version>0&&N.__version!==T.version){fe(N,T,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+M)}let pe={[wn]:s.REPEAT,[Ri]:s.CLAMP_TO_EDGE,[Eo]:s.MIRRORED_REPEAT},me={[Jt]:s.NEAREST,[su]:s.NEAREST_MIPMAP_NEAREST,[lr]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[go]:s.LINEAR_MIPMAP_NEAREST,[hi]:s.LINEAR_MIPMAP_LINEAR},oe={[G0]:s.NEVER,[K0]:s.ALWAYS,[V0]:s.LESS,[Rp]:s.LEQUAL,[W0]:s.EQUAL,[Y0]:s.GEQUAL,[X0]:s.GREATER,[q0]:s.NOTEQUAL};function Re(T,M){if(M.type===ei&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===un||M.magFilter===go||M.magFilter===lr||M.magFilter===hi||M.minFilter===un||M.minFilter===go||M.minFilter===lr||M.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,pe[M.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,pe[M.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,pe[M.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,me[M.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Jt||M.minFilter!==lr&&M.minFilter!==hi||M.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ye(T,M){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",b));let $=M.source,le=d.get($);le===void 0&&(le={},d.set($,le));let Q=B(M);if(Q!==T.__cacheKey){le[Q]===void 0&&(le[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),le[Q].usedTimes++;let be=le[T.__cacheKey];be!==void 0&&(le[T.__cacheKey].usedTimes--,be.usedTimes===0&&S(M)),T.__cacheKey=Q,T.__webglTexture=le[Q].texture}return N}function ee(T,M,N){let $=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=s.TEXTURE_3D);let le=Ye(T,M),Q=M.source;t.bindTexture($,T.__webglTexture,s.TEXTURE0+N);let be=n.get(Q);if(Q.version!==be.__version||le===!0){t.activeTexture(s.TEXTURE0+N);let ne=ot.getPrimaries(ot.workingColorSpace),_e=M.colorSpace===Yi?null:ot.getPrimaries(M.colorSpace),qe=M.colorSpace===Yi||ne===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ae=x(M.image,!1,i.maxTextureSize);ae=W(M,ae);let Ee=r.convert(M.format,M.colorSpace),Be=r.convert(M.type),Fe=_(M.internalFormat,Ee,Be,M.colorSpace,M.isVideoTexture);Re($,M);let Se,et=M.mipmaps,Ke=M.isVideoTexture!==!0,_t=be.__version===void 0||le===!0,G=Q.dataReady,Pe=R(M,ae);if(M.isDepthTexture)Fe=y(M.format===Mr,M.type),_t&&(Ke?t.texStorage2D(s.TEXTURE_2D,1,Fe,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,Fe,ae.width,ae.height,0,Ee,Be,null));else if(M.isDataTexture)if(et.length>0){Ke&&_t&&t.texStorage2D(s.TEXTURE_2D,Pe,Fe,et[0].width,et[0].height);for(let ie=0,ue=et.length;ie<ue;ie++)Se=et[ie],Ke?G&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Se.width,Se.height,Ee,Be,Se.data):t.texImage2D(s.TEXTURE_2D,ie,Fe,Se.width,Se.height,0,Ee,Be,Se.data);M.generateMipmaps=!1}else Ke?(_t&&t.texStorage2D(s.TEXTURE_2D,Pe,Fe,ae.width,ae.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae.width,ae.height,Ee,Be,ae.data)):t.texImage2D(s.TEXTURE_2D,0,Fe,ae.width,ae.height,0,Ee,Be,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Fe,et[0].width,et[0].height,ae.depth);for(let ie=0,ue=et.length;ie<ue;ie++)if(Se=et[ie],M.format!==Fn)if(Ee!==null)if(Ke){if(G)if(M.layerUpdates.size>0){let Ue=Gf(Se.width,Se.height,M.format,M.type);for(let Ie of M.layerUpdates){let tt=Se.data.subarray(Ie*Ue/Se.data.BYTES_PER_ELEMENT,(Ie+1)*Ue/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,Ie,Se.width,Se.height,1,Ee,tt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Se.width,Se.height,ae.depth,Ee,Se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Fe,Se.width,Se.height,ae.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Se.width,Se.height,ae.depth,Ee,Be,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Fe,Se.width,Se.height,ae.depth,0,Ee,Be,Se.data)}else{Ke&&_t&&t.texStorage2D(s.TEXTURE_2D,Pe,Fe,et[0].width,et[0].height);for(let ie=0,ue=et.length;ie<ue;ie++)Se=et[ie],M.format!==Fn?Ee!==null?Ke?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Fe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?G&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Se.width,Se.height,Ee,Be,Se.data):t.texImage2D(s.TEXTURE_2D,ie,Fe,Se.width,Se.height,0,Ee,Be,Se.data)}else if(M.isDataArrayTexture)if(Ke){if(_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Fe,ae.width,ae.height,ae.depth),G)if(M.layerUpdates.size>0){let ie=Gf(ae.width,ae.height,M.format,M.type);for(let ue of M.layerUpdates){let Ue=ae.data.subarray(ue*ie/ae.data.BYTES_PER_ELEMENT,(ue+1)*ie/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ue,ae.width,ae.height,1,Ee,Be,Ue)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ee,Be,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,ae.width,ae.height,ae.depth,0,Ee,Be,ae.data);else if(M.isData3DTexture)Ke?(_t&&t.texStorage3D(s.TEXTURE_3D,Pe,Fe,ae.width,ae.height,ae.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ee,Be,ae.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,ae.width,ae.height,ae.depth,0,Ee,Be,ae.data);else if(M.isFramebufferTexture){if(_t)if(Ke)t.texStorage2D(s.TEXTURE_2D,Pe,Fe,ae.width,ae.height);else{let ie=ae.width,ue=ae.height;for(let Ue=0;Ue<Pe;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,Fe,ie,ue,0,Ee,Be,null),ie>>=1,ue>>=1}}else if(et.length>0){if(Ke&&_t){let ie=O(et[0]);t.texStorage2D(s.TEXTURE_2D,Pe,Fe,ie.width,ie.height)}for(let ie=0,ue=et.length;ie<ue;ie++)Se=et[ie],Ke?G&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Ee,Be,Se):t.texImage2D(s.TEXTURE_2D,ie,Fe,Ee,Be,Se);M.generateMipmaps=!1}else if(Ke){if(_t){let ie=O(ae);t.texStorage2D(s.TEXTURE_2D,Pe,Fe,ie.width,ie.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Be,ae)}else t.texImage2D(s.TEXTURE_2D,0,Fe,Ee,Be,ae);m(M)&&p($),be.__version=Q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function fe(T,M,N){if(M.image.length!==6)return;let $=Ye(T,M),le=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+N);let Q=n.get(le);if(le.version!==Q.__version||$===!0){t.activeTexture(s.TEXTURE0+N);let be=ot.getPrimaries(ot.workingColorSpace),ne=M.colorSpace===Yi?null:ot.getPrimaries(M.colorSpace),_e=M.colorSpace===Yi||be===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let qe=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let ue=0;ue<6;ue++)!qe&&!ae?Ee[ue]=x(M.image[ue],!0,i.maxCubemapSize):Ee[ue]=ae?M.image[ue].image:M.image[ue],Ee[ue]=W(M,Ee[ue]);let Be=Ee[0],Fe=r.convert(M.format,M.colorSpace),Se=r.convert(M.type),et=_(M.internalFormat,Fe,Se,M.colorSpace),Ke=M.isVideoTexture!==!0,_t=Q.__version===void 0||$===!0,G=le.dataReady,Pe=R(M,Be);Re(s.TEXTURE_CUBE_MAP,M);let ie;if(qe){Ke&&_t&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,et,Be.width,Be.height);for(let ue=0;ue<6;ue++){ie=Ee[ue].mipmaps;for(let Ue=0;Ue<ie.length;Ue++){let Ie=ie[Ue];M.format!==Fn?Fe!==null?Ke?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,0,0,Ie.width,Ie.height,Fe,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,et,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,0,0,Ie.width,Ie.height,Fe,Se,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue,et,Ie.width,Ie.height,0,Fe,Se,Ie.data)}}}else{if(ie=M.mipmaps,Ke&&_t){ie.length>0&&Pe++;let ue=O(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,et,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ae){Ke?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ee[ue].width,Ee[ue].height,Fe,Se,Ee[ue].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,et,Ee[ue].width,Ee[ue].height,0,Fe,Se,Ee[ue].data);for(let Ue=0;Ue<ie.length;Ue++){let tt=ie[Ue].image[ue].image;Ke?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,0,0,tt.width,tt.height,Fe,Se,tt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,et,tt.width,tt.height,0,Fe,Se,tt.data)}}else{Ke?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Fe,Se,Ee[ue]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,et,Fe,Se,Ee[ue]);for(let Ue=0;Ue<ie.length;Ue++){let Ie=ie[Ue];Ke?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,0,0,Fe,Se,Ie.image[ue]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ue+1,et,Fe,Se,Ie.image[ue])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),Q.__version=le.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function K(T,M,N,$,le,Q){let be=r.convert(N.format,N.colorSpace),ne=r.convert(N.type),_e=_(N.internalFormat,be,ne,N.colorSpace),qe=n.get(M),ae=n.get(N);if(ae.__renderTarget=M,!qe.__hasExternalTextures){let Ee=Math.max(1,M.width>>Q),Be=Math.max(1,M.height>>Q);le===s.TEXTURE_3D||le===s.TEXTURE_2D_ARRAY?t.texImage3D(le,Q,_e,Ee,Be,M.depth,0,be,ne,null):t.texImage2D(le,Q,_e,Ee,Be,0,be,ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),he(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,le,ae.__webglTexture,0,Y(M)):(le===s.TEXTURE_2D||le>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,le,ae.__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(T,M,N){if(s.bindRenderbuffer(s.RENDERBUFFER,T),M.depthBuffer){let $=M.depthTexture,le=$&&$.isDepthTexture?$.type:null,Q=y(M.stencilBuffer,le),be=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=Y(M);he(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,Q,M.width,M.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,Q,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Q,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,T)}else{let $=M.textures;for(let le=0;le<$.length;le++){let Q=$[le],be=r.convert(Q.format,Q.colorSpace),ne=r.convert(Q.type),_e=_(Q.internalFormat,be,ne,Q.colorSpace),qe=Y(M);N&&he(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,_e,M.width,M.height):he(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe,_e,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,_e,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);let le=$.__webglTexture,Q=Y(M);if(M.depthTexture.format===pr)he(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0);else if(M.depthTexture.format===Mr)he(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ce(T){let M=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let $=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let le=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",le)};$.addEventListener("dispose",le),M.__depthDisposeCallback=le}M.__boundDepthTexture=$}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ye(M.__webglFramebuffer,T)}else if(N){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=s.createRenderbuffer(),re(M.__webglDepthbuffer[$],T,!1);else{let le=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),re(M.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,le)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function we(T,M,N){let $=n.get(T);M!==void 0&&K($.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Ce(T)}function $e(T){let M=T.texture,N=n.get(T),$=n.get(M);T.addEventListener("dispose",w);let le=T.textures,Q=T.isWebGLCubeRenderTarget===!0,be=le.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=M.version,o.memory.textures++),Q){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let _e=0;_e<M.mipmaps.length;_e++)N.__webglFramebuffer[ne][_e]=s.createFramebuffer()}else N.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)N.__webglFramebuffer[ne]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(be)for(let ne=0,_e=le.length;ne<_e;ne++){let qe=n.get(le[ne]);qe.__webglTexture===void 0&&(qe.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&he(T)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<le.length;ne++){let _e=le[ne];N.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);let qe=r.convert(_e.format,_e.colorSpace),ae=r.convert(_e.type),Ee=_(_e.internalFormat,qe,ae,_e.colorSpace,T.isXRRenderTarget===!0),Be=Y(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,Ee,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),re(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Re(s.TEXTURE_CUBE_MAP,M);for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)K(N.__webglFramebuffer[ne][_e],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e);else K(N.__webglFramebuffer[ne],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(M)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ne=0,_e=le.length;ne<_e;ne++){let qe=le[ne],ae=n.get(qe);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture),Re(s.TEXTURE_2D,qe),K(N.__webglFramebuffer,T,qe,s.COLOR_ATTACHMENT0+ne,s.TEXTURE_2D,0),m(qe)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ne=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,$.__webglTexture),Re(ne,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)K(N.__webglFramebuffer[_e],T,M,s.COLOR_ATTACHMENT0,ne,_e);else K(N.__webglFramebuffer,T,M,s.COLOR_ATTACHMENT0,ne,0);m(M)&&p(ne),t.unbindTexture()}T.depthBuffer&&Ce(T)}function ce(T){let M=T.textures;for(let N=0,$=M.length;N<$;N++){let le=M[N];if(m(le)){let Q=v(T),be=n.get(le).__webglTexture;t.bindTexture(Q,be),p(Q),t.unbindTexture()}}}let ve=[],A=[];function j(T){if(T.samples>0){if(he(T)===!1){let M=T.textures,N=T.width,$=T.height,le=s.COLOR_BUFFER_BIT,Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(T),ne=M.length>1;if(ne)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(le|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(le|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);let qe=n.get(M[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qe,0)}s.blitFramebuffer(0,0,N,$,0,0,N,$,le,s.NEAREST),l===!0&&(ve.length=0,A.length=0,ve.push(s.COLOR_ATTACHMENT0+_e),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ve.push(Q),A.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,A)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);let qe=n.get(M[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Y(T){return Math.min(i.maxSamples,T.samples)}function he(T){let M=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function U(T){let M=o.render.frame;u.get(T)!==M&&(u.set(T,M),T.update())}function W(T,M){let N=T.colorSpace,$=T.format,le=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==fn&&N!==Yi&&(ot.getTransfer(N)===vt?($!==Fn||le!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}function O(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=H,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=te,this.setTextureCube=q,this.rebindTextures=we,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=K,this.useMultisampledRTT=he}function eM(s,e){function t(n,i=Yi){let r,o=ot.getTransfer(i);if(n===Ii)return s.UNSIGNED_BYTE;if(n===ou)return s.UNSIGNED_SHORT_4_4_4_4;if(n===au)return s.UNSIGNED_SHORT_5_5_5_1;if(n===vp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===xp)return s.BYTE;if(n===yp)return s.SHORT;if(n===bo)return s.UNSIGNED_SHORT;if(n===ru)return s.INT;if(n===Ts)return s.UNSIGNED_INT;if(n===ei)return s.FLOAT;if(n===vn)return s.HALF_FLOAT;if(n===_p)return s.ALPHA;if(n===Mp)return s.RGB;if(n===Fn)return s.RGBA;if(n===Ep)return s.LUMINANCE;if(n===bp)return s.LUMINANCE_ALPHA;if(n===pr)return s.DEPTH_COMPONENT;if(n===Mr)return s.DEPTH_STENCIL;if(n===lu)return s.RED;if(n===cu)return s.RED_INTEGER;if(n===Sp)return s.RG;if(n===hu)return s.RG_INTEGER;if(n===uu)return s.RGBA_INTEGER;if(n===Fa||n===Oa||n===za||n===Ga)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vc||n===Wc||n===Xc||n===qc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yc||n===Kc||n===jc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yc||n===Kc)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$c||n===Zc||n===Jc||n===Qc||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$c)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===th)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ih)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ah)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ch)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===hh||n===uh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tp||n===dh||n===fh||n===ph)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ph)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Ch=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Xe=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},tM={type:"move"},vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iM=`
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

}`,Ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Qt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new At({vertexShader:nM,fragmentShader:iM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new F(new at(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ih=class extends Li{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,x=new Ph,m=t.getContextAttributes(),p=null,v=null,_=[],y=[],R=new de,b=null,w=new Ut;w.viewport=new dt;let P=new Ut;P.viewport=new dt;let S=[w,P],E=new Ch,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=_[ee];return fe===void 0&&(fe=new vo,_[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=_[ee];return fe===void 0&&(fe=new vo,_[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=_[ee];return fe===void 0&&(fe=new vo,_[ee]=fe),fe.getHandSpace()};function D(ee){let fe=y.indexOf(ee.inputSource);if(fe===-1)return;let K=_[fe];K!==void 0&&(K.update(ee.inputSource,ee.frame,c||o),K.dispatchEvent({type:ee.type,data:ee.inputSource}))}function B(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",z);for(let ee=0;ee<_.length;ee++){let fe=y[ee];fe!==null&&(y[ee]=null,_[ee].disconnect(fe))}L=null,H=null,x.reset(),e.setRenderTarget(p),f=null,d=null,h=null,i=null,v=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",B),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){let fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new zt(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,K=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Mr:pr,K=m.stencil?_r:Ts);let ye={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new zt(d.textureWidth,d.textureHeight,{format:Fn,type:Ii,depthTexture:new Qa(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z(ee){for(let fe=0;fe<ee.removed.length;fe++){let K=ee.removed[fe],re=y.indexOf(K);re>=0&&(y[re]=null,_[re].disconnect(K))}for(let fe=0;fe<ee.added.length;fe++){let K=ee.added[fe],re=y.indexOf(K);if(re===-1){for(let Ce=0;Ce<_.length;Ce++)if(Ce>=y.length){y.push(K),re=Ce;break}else if(y[Ce]===null){y[Ce]=K,re=Ce;break}if(re===-1)break}let ye=_[re];ye&&ye.connect(K)}}let k=new I,te=new I;function q(ee,fe,K){k.setFromMatrixPosition(fe.matrixWorld),te.setFromMatrixPosition(K.matrixWorld);let re=k.distanceTo(te),ye=fe.projectionMatrix.elements,Ce=K.projectionMatrix.elements,we=ye[14]/(ye[10]-1),$e=ye[14]/(ye[10]+1),ce=(ye[9]+1)/ye[5],ve=(ye[9]-1)/ye[5],A=(ye[8]-1)/ye[0],j=(Ce[8]+1)/Ce[0],Y=we*A,he=we*j,U=re/(-A+j),W=U*-A;if(fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(W),ee.translateZ(U),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ye[10]===-1)ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{let O=we+U,T=$e+U,M=Y-W,N=he+(re-W),$=ce*$e/T*O,le=ve*$e/T*O;ee.projectionMatrix.makePerspective(M,N,$,le,O,T),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function pe(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let fe=ee.near,K=ee.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(K=x.depthFar)),E.near=P.near=w.near=fe,E.far=P.far=w.far=K,(L!==E.near||H!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,H=E.far),w.layers.mask=ee.layers.mask|2,P.layers.mask=ee.layers.mask|4,E.layers.mask=w.layers.mask|P.layers.mask;let re=ee.parent,ye=E.cameras;pe(E,re);for(let Ce=0;Ce<ye.length;Ce++)pe(ye[Ce],re);ye.length===2?q(E,w,P):E.projectionMatrix.copy(w.projectionMatrix),me(ee,E,re)};function me(ee,fe,K){K===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(K.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Sr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let oe=null;function Re(ee,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){let K=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let re=!1;K.length!==E.cameras.length&&(E.cameras.length=0,re=!0);for(let Ce=0;Ce<K.length;Ce++){let we=K[Ce],$e=null;if(f!==null)$e=f.getViewport(we);else{let ve=h.getViewSubImage(d,we);$e=ve.viewport,Ce===0&&(e.setRenderTargetTextures(v,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(v))}let ce=S[Ce];ce===void 0&&(ce=new Ut,ce.layers.enable(Ce),ce.viewport=new dt,S[Ce]=ce),ce.matrix.fromArray(we.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(we.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set($e.x,$e.y,$e.width,$e.height),Ce===0&&(E.matrix.copy(ce.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),re===!0&&E.cameras.push(ce)}let ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")){let Ce=h.getDepthInformation(K[0]);Ce&&Ce.isValid&&Ce.texture&&x.init(e,Ce,i.renderState)}}for(let K=0;K<_.length;K++){let re=y[K],ye=_[K];re!==null&&ye!==void 0&&ye.update(re,fe,c||o)}oe&&oe(ee,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}let Ye=new Lp;Ye.setAnimationLoop(Re),this.setAnimationLoop=function(ee){oe=ee},this.dispose=function(){}}},_s=new Ln,sM=new Ze;function rM(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ip(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,_s.copy(y),_s.x*=-1,_s.y*=-1,_s.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),m.envMapRotation.value.setFromMatrix4(sM.makeRotationFromEuler(_s)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function oM(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;n.uniformBlockBinding(v,y)}function c(v,_){let y=i[v.id];y===void 0&&(g(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",m));let R=_.program;n.updateUBOMapping(v,R);let b=e.render.frame;r[v.id]!==b&&(d(v),r[v.id]=b)}function u(v){let _=h();v.__bindingPointIndex=_;let y=s.createBuffer(),R=v.__size,b=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=i[v.id],y=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let b=0,w=y.length;b<w;b++){let P=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,E=P.length;S<E;S++){let L=P[S];if(f(L,b,S,R)===!0){let H=L.__offset,D=Array.isArray(L.value)?L.value:[L.value],B=0;for(let z=0;z<D.length;z++){let k=D[z],te=x(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,H+B,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,B),B+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,_,y,R){let b=v.value,w=_+"_"+y;if(R[w]===void 0)return typeof b=="number"||typeof b=="boolean"?R[w]=b:R[w]=b.clone(),!0;{let P=R[w];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return R[w]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(v){let _=v.uniforms,y=0,R=16;for(let w=0,P=_.length;w<P;w++){let S=Array.isArray(_[w])?_[w]:[_[w]];for(let E=0,L=S.length;E<L;E++){let H=S[E],D=Array.isArray(H.value)?H.value:[H.value];for(let B=0,z=D.length;B<z;B++){let k=D[B],te=x(k),q=y%R,pe=q%te.boundary,me=q+pe;y+=pe,me!==0&&R-me<te.storage&&(y+=R-me),H.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=te.storage}}}let b=y%R;return b>0&&(y+=R-b),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Ao=class{constructor(e={}){let{canvas:t=ug(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ht,this.toneMapping=ji,this.toneMappingExposure=1;let y=this,R=!1,b=0,w=0,P=null,S=-1,E=null,L=new dt,H=new dt,D=null,B=new Ae(0),z=0,k=t.width,te=t.height,q=1,pe=null,me=null,oe=new dt(0,0,k,te),Re=new dt(0,0,k,te),Ye=!1,ee=new wo,fe=!1,K=!1,re=new Ze,ye=new Ze,Ce=new I,we=new dt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function ve(){return P===null?q:1}let A=n;function j(C,V){return t.getContext(C,V)}try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jh}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),A===null){let V="webgl2";if(A=j(V,C),A===null)throw j(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Y,he,U,W,O,T,M,N,$,le,Q,be,ne,_e,qe,ae,Ee,Be,Fe,Se,et,Ke,_t,G;function Pe(){Y=new Ev(A),Y.init(),Ke=new eM(A,Y),he=new gv(A,Y,e,Ke),U=new Z_(A,Y),he.reverseDepthBuffer&&d&&U.buffers.depth.setReversed(!0),W=new Tv(A),O=new H_,T=new Q_(A,Y,U,O,he,Ke,W),M=new yv(y),N=new Mv(y),$=new Lg(A),_t=new pv(A,$),le=new bv(A,$,W,_t),Q=new Av(A,le,$,W),Fe=new wv(A,he,T),ae=new xv(O),be=new B_(y,M,N,Y,he,_t,ae),ne=new rM(y,O),_e=new O_,qe=new q_(Y),Be=new fv(y,M,N,U,Q,f,l),Ee=new j_(y,Q,he),G=new oM(A,W,he,U),Se=new mv(A,Y,W),et=new Sv(A,Y,W),W.programs=be.programs,y.capabilities=he,y.extensions=Y,y.properties=O,y.renderLists=_e,y.shadowMap=Ee,y.state=U,y.info=W}Pe();let ie=new Ih(y,A);this.xr=ie,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let C=Y.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=Y.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(k,te,!1))},this.getSize=function(C){return C.set(k,te)},this.setSize=function(C,V,Z=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,te=V,t.width=Math.floor(C*q),t.height=Math.floor(V*q),Z===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(k*q,te*q).floor()},this.setDrawingBufferSize=function(C,V,Z){k=C,te=V,q=Z,t.width=Math.floor(C*Z),t.height=Math.floor(V*Z),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(oe)},this.setViewport=function(C,V,Z,J){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,V,Z,J),U.viewport(L.copy(oe).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(Re)},this.setScissor=function(C,V,Z,J){C.isVector4?Re.set(C.x,C.y,C.z,C.w):Re.set(C,V,Z,J),U.scissor(H.copy(Re).multiplyScalar(q).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(C){U.setScissorTest(Ye=C)},this.setOpaqueSort=function(C){pe=C},this.setTransparentSort=function(C){me=C},this.getClearColor=function(C){return C.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(C=!0,V=!0,Z=!0){let J=0;if(C){let X=!1;if(P!==null){let Me=P.texture.format;X=Me===uu||Me===hu||Me===cu}if(X){let Me=P.texture.type,Le=Me===Ii||Me===Ts||Me===bo||Me===_r||Me===ou||Me===au,ze=Be.getClearColor(),Ge=Be.getClearAlpha(),Je=ze.r,nt=ze.g,Ve=ze.b;Le?(g[0]=Je,g[1]=nt,g[2]=Ve,g[3]=Ge,A.clearBufferuiv(A.COLOR,0,g)):(x[0]=Je,x[1]=nt,x[2]=Ve,x[3]=Ge,A.clearBufferiv(A.COLOR,0,x))}else J|=A.COLOR_BUFFER_BIT}V&&(J|=A.DEPTH_BUFFER_BIT),Z&&(J|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),_e.dispose(),qe.dispose(),O.dispose(),M.dispose(),N.dispose(),Q.dispose(),_t.dispose(),G.dispose(),be.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Bd),ie.removeEventListener("sessionend",Hd),ps.stop()};function ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let C=W.autoReset,V=Ee.enabled,Z=Ee.autoUpdate,J=Ee.needsUpdate,X=Ee.type;Pe(),W.autoReset=C,Ee.enabled=V,Ee.autoUpdate=Z,Ee.needsUpdate=J,Ee.type=X}function Ie(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function tt(C){let V=C.target;V.removeEventListener("dispose",tt),Dt(V)}function Dt(C){ln(C),O.remove(C)}function ln(C){let V=O.get(C).programs;V!==void 0&&(V.forEach(function(Z){be.releaseProgram(Z)}),C.isShaderMaterial&&be.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,Z,J,X,Me){V===null&&(V=$e);let Le=X.isMesh&&X.matrixWorld.determinant()<0,ze=a0(C,V,Z,J,X);U.setMaterial(J,Le);let Ge=Z.index,Je=1;if(J.wireframe===!0){if(Ge=le.getWireframeAttribute(Z),Ge===void 0)return;Je=2}let nt=Z.drawRange,Ve=Z.attributes.position,gt=nt.start*Je,wt=(nt.start+nt.count)*Je;Me!==null&&(gt=Math.max(gt,Me.start*Je),wt=Math.min(wt,(Me.start+Me.count)*Je)),Ge!==null?(gt=Math.max(gt,0),wt=Math.min(wt,Ge.count)):Ve!=null&&(gt=Math.max(gt,0),wt=Math.min(wt,Ve.count));let Rt=wt-gt;if(Rt<0||Rt===1/0)return;_t.setup(X,J,ze,Z,Ge);let Sn,xt=Se;if(Ge!==null&&(Sn=$.get(Ge),xt=et,xt.setIndex(Sn)),X.isMesh)J.wireframe===!0?(U.setLineWidth(J.wireframeLinewidth*ve()),xt.setMode(A.LINES)):xt.setMode(A.TRIANGLES);else if(X.isLine){let We=J.linewidth;We===void 0&&(We=1),U.setLineWidth(We*ve()),X.isLineSegments?xt.setMode(A.LINES):X.isLineLoop?xt.setMode(A.LINE_LOOP):xt.setMode(A.LINE_STRIP)}else X.isPoints?xt.setMode(A.POINTS):X.isSprite&&xt.setMode(A.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)xt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))xt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let We=X._multiDrawStarts,_i=X._multiDrawCounts,yt=X._multiDrawCount,Kn=Ge?$.get(Ge).bytesPerElement:1,qs=O.get(J).currentProgram.getUniforms();for(let Rn=0;Rn<yt;Rn++)qs.setValue(A,"_gl_DrawID",Rn),xt.render(We[Rn]/Kn,_i[Rn])}else if(X.isInstancedMesh)xt.renderInstances(gt,Rt,X.count);else if(Z.isInstancedBufferGeometry){let We=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,_i=Math.min(Z.instanceCount,We);xt.renderInstances(gt,Rt,_i)}else xt.render(gt,Rt)};function Mt(C,V,Z){C.transparent===!0&&C.side===Pt&&C.forceSinglePass===!1?(C.side=Ot,C.needsUpdate=!0,la(C,V,Z),C.side=Tn,C.needsUpdate=!0,la(C,V,Z),C.side=Pt):la(C,V,Z)}this.compile=function(C,V,Z=null){Z===null&&(Z=C),p=qe.get(Z),p.init(V),_.push(p),Z.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),C!==Z&&C.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let J=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Me=X.material;if(Me)if(Array.isArray(Me))for(let Le=0;Le<Me.length;Le++){let ze=Me[Le];Mt(ze,Z,X),J.add(ze)}else Mt(Me,Z,X),J.add(Me)}),_.pop(),p=null,J},this.compileAsync=function(C,V,Z=null){let J=this.compile(C,V,Z);return new Promise(X=>{function Me(){if(J.forEach(function(Le){O.get(Le).currentProgram.isReady()&&J.delete(Le)}),J.size===0){X(C);return}setTimeout(Me,10)}Y.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Yn=null;function vi(C){Yn&&Yn(C)}function Bd(){ps.stop()}function Hd(){ps.start()}let ps=new Lp;ps.setAnimationLoop(vi),typeof self<"u"&&ps.setContext(self),this.setAnimationLoop=function(C){Yn=C,ie.setAnimationLoop(C),C===null?ps.stop():ps.start()},ie.addEventListener("sessionstart",Bd),ie.addEventListener("sessionend",Hd),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(V),V=ie.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,V,P),p=qe.get(C,_.length),p.init(V),_.push(p),ye.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ee.setFromProjectionMatrix(ye),K=this.localClippingEnabled,fe=ae.init(this.clippingPlanes,K),m=_e.get(C,v.length),m.init(),v.push(m),ie.enabled===!0&&ie.isPresenting===!0){let Me=y.xr.getDepthSensingMesh();Me!==null&&$l(Me,V,-1/0,y.sortObjects)}$l(C,V,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(pe,me),ce=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ce&&Be.addToRenderList(m,C),this.info.render.frame++,fe===!0&&ae.beginShadows();let Z=p.state.shadowsArray;Ee.render(Z,C,V),fe===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,X=m.transmissive;if(p.setupLights(),V.isArrayCamera){let Me=V.cameras;if(X.length>0)for(let Le=0,ze=Me.length;Le<ze;Le++){let Ge=Me[Le];Od(J,X,C,Ge)}ce&&Be.render(C);for(let Le=0,ze=Me.length;Le<ze;Le++){let Ge=Me[Le];Fd(m,C,Ge,Ge.viewport)}}else X.length>0&&Od(J,X,C,V),ce&&Be.render(C),Fd(m,C,V);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(y,C,V),_t.resetDefaultState(),S=-1,E=null,_.pop(),_.length>0?(p=_[_.length-1],fe===!0&&ae.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function $l(C,V,Z,J){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ee.intersectsSprite(C)){J&&we.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ye);let Le=Q.update(C),ze=C.material;ze.visible&&m.push(C,Le,ze,Z,we.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ee.intersectsObject(C))){let Le=Q.update(C),ze=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),we.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),we.copy(Le.boundingSphere.center)),we.applyMatrix4(C.matrixWorld).applyMatrix4(ye)),Array.isArray(ze)){let Ge=Le.groups;for(let Je=0,nt=Ge.length;Je<nt;Je++){let Ve=Ge[Je],gt=ze[Ve.materialIndex];gt&&gt.visible&&m.push(C,Le,gt,Z,we.z,Ve)}}else ze.visible&&m.push(C,Le,ze,Z,we.z,null)}}let Me=C.children;for(let Le=0,ze=Me.length;Le<ze;Le++)$l(Me[Le],V,Z,J)}function Fd(C,V,Z,J){let X=C.opaque,Me=C.transmissive,Le=C.transparent;p.setupLightsView(Z),fe===!0&&ae.setGlobalState(y.clippingPlanes,Z),J&&U.viewport(L.copy(J)),X.length>0&&aa(X,V,Z),Me.length>0&&aa(Me,V,Z),Le.length>0&&aa(Le,V,Z),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function Od(C,V,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new zt(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?vn:Ii,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let Me=p.state.transmissionRenderTarget[J.id],Le=J.viewport||L;Me.setSize(Le.z,Le.w);let ze=y.getRenderTarget();y.setRenderTarget(Me),y.getClearColor(B),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),ce&&Be.render(Z);let Ge=y.toneMapping;y.toneMapping=ji;let Je=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),fe===!0&&ae.setGlobalState(y.clippingPlanes,J),aa(C,Z,J),T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me),Y.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ve=0,gt=V.length;Ve<gt;Ve++){let wt=V[Ve],Rt=wt.object,Sn=wt.geometry,xt=wt.material,We=wt.group;if(xt.side===Pt&&Rt.layers.test(J.layers)){let _i=xt.side;xt.side=Ot,xt.needsUpdate=!0,zd(Rt,Z,J,Sn,xt,We),xt.side=_i,xt.needsUpdate=!0,nt=!0}}nt===!0&&(T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me))}y.setRenderTarget(ze),y.setClearColor(B,z),Je!==void 0&&(J.viewport=Je),y.toneMapping=Ge}function aa(C,V,Z){let J=V.isScene===!0?V.overrideMaterial:null;for(let X=0,Me=C.length;X<Me;X++){let Le=C[X],ze=Le.object,Ge=Le.geometry,Je=J===null?Le.material:J,nt=Le.group;ze.layers.test(Z.layers)&&zd(ze,V,Z,Ge,Je,nt)}}function zd(C,V,Z,J,X,Me){C.onBeforeRender(y,V,Z,J,X,Me),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(y,V,Z,J,C,Me),X.transparent===!0&&X.side===Pt&&X.forceSinglePass===!1?(X.side=Ot,X.needsUpdate=!0,y.renderBufferDirect(Z,V,J,X,C,Me),X.side=Tn,X.needsUpdate=!0,y.renderBufferDirect(Z,V,J,X,C,Me),X.side=Pt):y.renderBufferDirect(Z,V,J,X,C,Me),C.onAfterRender(y,V,Z,J,X,Me)}function la(C,V,Z){V.isScene!==!0&&(V=$e);let J=O.get(C),X=p.state.lights,Me=p.state.shadowsArray,Le=X.state.version,ze=be.getParameters(C,X.state,Me,V,Z),Ge=be.getProgramCacheKey(ze),Je=J.programs;J.environment=C.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(C.isMeshStandardMaterial?N:M).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Je===void 0&&(C.addEventListener("dispose",tt),Je=new Map,J.programs=Je);let nt=Je.get(Ge);if(nt!==void 0){if(J.currentProgram===nt&&J.lightsStateVersion===Le)return Vd(C,ze),nt}else ze.uniforms=be.getUniforms(C),C.onBeforeCompile(ze,y),nt=be.acquireProgram(ze,Ge),Je.set(Ge,nt),J.uniforms=ze.uniforms;let Ve=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=ae.uniform),Vd(C,ze),J.needsLights=c0(C),J.lightsStateVersion=Le,J.needsLights&&(Ve.ambientLightColor.value=X.state.ambient,Ve.lightProbe.value=X.state.probe,Ve.directionalLights.value=X.state.directional,Ve.directionalLightShadows.value=X.state.directionalShadow,Ve.spotLights.value=X.state.spot,Ve.spotLightShadows.value=X.state.spotShadow,Ve.rectAreaLights.value=X.state.rectArea,Ve.ltc_1.value=X.state.rectAreaLTC1,Ve.ltc_2.value=X.state.rectAreaLTC2,Ve.pointLights.value=X.state.point,Ve.pointLightShadows.value=X.state.pointShadow,Ve.hemisphereLights.value=X.state.hemi,Ve.directionalShadowMap.value=X.state.directionalShadowMap,Ve.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ve.spotShadowMap.value=X.state.spotShadowMap,Ve.spotLightMatrix.value=X.state.spotLightMatrix,Ve.spotLightMap.value=X.state.spotLightMap,Ve.pointShadowMap.value=X.state.pointShadowMap,Ve.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=nt,J.uniformsList=null,nt}function Gd(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=gr.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Vd(C,V){let Z=O.get(C);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function a0(C,V,Z,J,X){V.isScene!==!0&&(V=$e),T.resetTextureUnits();let Me=V.fog,Le=J.isMeshStandardMaterial?V.environment:null,ze=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:fn,Ge=(J.isMeshStandardMaterial?N:M).get(J.envMap||Le),Je=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,nt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ve=!!Z.morphAttributes.position,gt=!!Z.morphAttributes.normal,wt=!!Z.morphAttributes.color,Rt=ji;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Rt=y.toneMapping);let Sn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xt=Sn!==void 0?Sn.length:0,We=O.get(J),_i=p.state.lights;if(fe===!0&&(K===!0||C!==E)){let Bn=C===E&&J.id===S;ae.setState(J,C,Bn)}let yt=!1;J.version===We.__version?(We.needsLights&&We.lightsStateVersion!==_i.state.version||We.outputColorSpace!==ze||X.isBatchedMesh&&We.batching===!1||!X.isBatchedMesh&&We.batching===!0||X.isBatchedMesh&&We.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&We.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&We.instancing===!1||!X.isInstancedMesh&&We.instancing===!0||X.isSkinnedMesh&&We.skinning===!1||!X.isSkinnedMesh&&We.skinning===!0||X.isInstancedMesh&&We.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&We.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&We.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&We.instancingMorph===!1&&X.morphTexture!==null||We.envMap!==Ge||J.fog===!0&&We.fog!==Me||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ae.numPlanes||We.numIntersection!==ae.numIntersection)||We.vertexAlphas!==Je||We.vertexTangents!==nt||We.morphTargets!==Ve||We.morphNormals!==gt||We.morphColors!==wt||We.toneMapping!==Rt||We.morphTargetsCount!==xt)&&(yt=!0):(yt=!0,We.__version=J.version);let Kn=We.currentProgram;yt===!0&&(Kn=la(J,V,X));let qs=!1,Rn=!1,io=!1,Ct=Kn.getUniforms(),li=We.uniforms;if(U.useProgram(Kn.program)&&(qs=!0,Rn=!0,io=!0),J.id!==S&&(S=J.id,Rn=!0),qs||E!==C){U.buffers.depth.getReversed()?(re.copy(C.projectionMatrix),fg(re),pg(re),Ct.setValue(A,"projectionMatrix",re)):Ct.setValue(A,"projectionMatrix",C.projectionMatrix),Ct.setValue(A,"viewMatrix",C.matrixWorldInverse);let Fi=Ct.map.cameraPosition;Fi!==void 0&&Fi.setValue(A,Ce.setFromMatrixPosition(C.matrixWorld)),he.logarithmicDepthBuffer&&Ct.setValue(A,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ct.setValue(A,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,Rn=!0,io=!0)}if(X.isSkinnedMesh){Ct.setOptional(A,X,"bindMatrix"),Ct.setOptional(A,X,"bindMatrixInverse");let Bn=X.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),Ct.setValue(A,"boneTexture",Bn.boneTexture,T))}X.isBatchedMesh&&(Ct.setOptional(A,X,"batchingTexture"),Ct.setValue(A,"batchingTexture",X._matricesTexture,T),Ct.setOptional(A,X,"batchingIdTexture"),Ct.setValue(A,"batchingIdTexture",X._indirectTexture,T),Ct.setOptional(A,X,"batchingColorTexture"),X._colorsTexture!==null&&Ct.setValue(A,"batchingColorTexture",X._colorsTexture,T));let so=Z.morphAttributes;if((so.position!==void 0||so.normal!==void 0||so.color!==void 0)&&Fe.update(X,Z,Kn),(Rn||We.receiveShadow!==X.receiveShadow)&&(We.receiveShadow=X.receiveShadow,Ct.setValue(A,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(li.envMap.value=Ge,li.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(li.envMapIntensity.value=V.environmentIntensity),Rn&&(Ct.setValue(A,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&l0(li,io),Me&&J.fog===!0&&ne.refreshFogUniforms(li,Me),ne.refreshMaterialUniforms(li,J,q,te,p.state.transmissionRenderTarget[C.id]),gr.upload(A,Gd(We),li,T)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(gr.upload(A,Gd(We),li,T),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ct.setValue(A,"center",X.center),Ct.setValue(A,"modelViewMatrix",X.modelViewMatrix),Ct.setValue(A,"normalMatrix",X.normalMatrix),Ct.setValue(A,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Bn=J.uniformsGroups;for(let Fi=0,Oi=Bn.length;Fi<Oi;Fi++){let Wd=Bn[Fi];G.update(Wd,Kn),G.bind(Wd,Kn)}}return Kn}function l0(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function c0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,V,Z){O.get(C.texture).__webglTexture=V,O.get(C.depthTexture).__webglTexture=Z;let J=O.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){let Z=O.get(C);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,Z=0){P=C,b=V,w=Z;let J=!0,X=null,Me=!1,Le=!1;if(C){let Ge=O.get(C);if(Ge.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(A.FRAMEBUFFER,null),J=!1;else if(Ge.__webglFramebuffer===void 0)T.setupRenderTarget(C);else if(Ge.__hasExternalTextures)T.rebindTextures(C,O.get(C.texture).__webglTexture,O.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Ve=C.depthTexture;if(Ge.__boundDepthTexture!==Ve){if(Ve!==null&&O.has(Ve)&&(C.width!==Ve.image.width||C.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(C)}}let Je=C.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Le=!0);let nt=O.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[V])?X=nt[V][Z]:X=nt[V],Me=!0):C.samples>0&&T.useMultisampledRTT(C)===!1?X=O.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?X=nt[Z]:X=nt,L.copy(C.viewport),H.copy(C.scissor),D=C.scissorTest}else L.copy(oe).multiplyScalar(q).floor(),H.copy(Re).multiplyScalar(q).floor(),D=Ye;if(U.bindFramebuffer(A.FRAMEBUFFER,X)&&J&&U.drawBuffers(C,X),U.viewport(L),U.scissor(H),U.setScissorTest(D),Me){let Ge=O.get(C.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ge.__webglTexture,Z)}else if(Le){let Ge=O.get(C.texture),Je=V||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ge.__webglTexture,Z||0,Je)}S=-1},this.readRenderTargetPixels=function(C,V,Z,J,X,Me,Le){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=O.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(ze=ze[Le]),ze){U.bindFramebuffer(A.FRAMEBUFFER,ze);try{let Ge=C.texture,Je=Ge.format,nt=Ge.type;if(!he.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-J&&Z>=0&&Z<=C.height-X&&A.readPixels(V,Z,J,X,Ke.convert(Je),Ke.convert(nt),Me)}finally{let Ge=P!==null?O.get(P).__webglFramebuffer:null;U.bindFramebuffer(A.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(C,V,Z,J,X,Me,Le){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=O.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(ze=ze[Le]),ze){let Ge=C.texture,Je=Ge.format,nt=Ge.type;if(!he.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=C.width-J&&Z>=0&&Z<=C.height-X){U.bindFramebuffer(A.FRAMEBUFFER,ze);let Ve=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ve),A.bufferData(A.PIXEL_PACK_BUFFER,Me.byteLength,A.STREAM_READ),A.readPixels(V,Z,J,X,Ke.convert(Je),Ke.convert(nt),0);let gt=P!==null?O.get(P).__webglFramebuffer:null;U.bindFramebuffer(A.FRAMEBUFFER,gt);let wt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await dg(A,wt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ve),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Me),A.deleteBuffer(Ve),A.deleteSync(wt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,V=null,Z=0){C.isTexture!==!0&&(po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,C=arguments[1]);let J=Math.pow(2,-Z),X=Math.floor(C.image.width*J),Me=Math.floor(C.image.height*J),Le=V!==null?V.x:0,ze=V!==null?V.y:0;T.setTexture2D(C,0),A.copyTexSubImage2D(A.TEXTURE_2D,Z,0,0,Le,ze,X,Me),U.unbindTexture()},this.copyTextureToTexture=function(C,V,Z=null,J=null,X=0){C.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],V=arguments[2],X=arguments[3]||0,Z=null);let Me,Le,ze,Ge,Je,nt,Ve,gt,wt,Rt=C.isCompressedTexture?C.mipmaps[X]:C.image;Z!==null?(Me=Z.max.x-Z.min.x,Le=Z.max.y-Z.min.y,ze=Z.isBox3?Z.max.z-Z.min.z:1,Ge=Z.min.x,Je=Z.min.y,nt=Z.isBox3?Z.min.z:0):(Me=Rt.width,Le=Rt.height,ze=Rt.depth||1,Ge=0,Je=0,nt=0),J!==null?(Ve=J.x,gt=J.y,wt=J.z):(Ve=0,gt=0,wt=0);let Sn=Ke.convert(V.format),xt=Ke.convert(V.type),We;V.isData3DTexture?(T.setTexture3D(V,0),We=A.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(T.setTexture2DArray(V,0),We=A.TEXTURE_2D_ARRAY):(T.setTexture2D(V,0),We=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,V.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,V.unpackAlignment);let _i=A.getParameter(A.UNPACK_ROW_LENGTH),yt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Kn=A.getParameter(A.UNPACK_SKIP_PIXELS),qs=A.getParameter(A.UNPACK_SKIP_ROWS),Rn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Rt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Rt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ge),A.pixelStorei(A.UNPACK_SKIP_ROWS,Je),A.pixelStorei(A.UNPACK_SKIP_IMAGES,nt);let io=C.isDataArrayTexture||C.isData3DTexture,Ct=V.isDataArrayTexture||V.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let li=O.get(C),so=O.get(V),Bn=O.get(li.__renderTarget),Fi=O.get(so.__renderTarget);U.bindFramebuffer(A.READ_FRAMEBUFFER,Bn.__webglFramebuffer),U.bindFramebuffer(A.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Oi=0;Oi<ze;Oi++)io&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,O.get(C).__webglTexture,X,nt+Oi),C.isDepthTexture?(Ct&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,O.get(V).__webglTexture,X,wt+Oi),A.blitFramebuffer(Ge,Je,Me,Le,Ve,gt,Me,Le,A.DEPTH_BUFFER_BIT,A.NEAREST)):Ct?A.copyTexSubImage3D(We,X,Ve,gt,wt+Oi,Ge,Je,Me,Le):A.copyTexSubImage2D(We,X,Ve,gt,wt+Oi,Ge,Je,Me,Le);U.bindFramebuffer(A.READ_FRAMEBUFFER,null),U.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Ct?C.isDataTexture||C.isData3DTexture?A.texSubImage3D(We,X,Ve,gt,wt,Me,Le,ze,Sn,xt,Rt.data):V.isCompressedArrayTexture?A.compressedTexSubImage3D(We,X,Ve,gt,wt,Me,Le,ze,Sn,Rt.data):A.texSubImage3D(We,X,Ve,gt,wt,Me,Le,ze,Sn,xt,Rt):C.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,X,Ve,gt,Me,Le,Sn,xt,Rt.data):C.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,X,Ve,gt,Rt.width,Rt.height,Sn,Rt.data):A.texSubImage2D(A.TEXTURE_2D,X,Ve,gt,Me,Le,Sn,xt,Rt);A.pixelStorei(A.UNPACK_ROW_LENGTH,_i),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,yt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Kn),A.pixelStorei(A.UNPACK_SKIP_ROWS,qs),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Rn),X===0&&V.generateMipmaps&&A.generateMipmap(We),U.unbindTexture()},this.copyTextureToTexture3D=function(C,V,Z=null,J=null,X=0){return C.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,C=arguments[2],V=arguments[3],X=arguments[4]||0),po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,V,Z,J,X)},this.initRenderTarget=function(C){O.get(C).__webglFramebuffer===void 0&&T.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),U.unbindTexture()},this.resetState=function(){b=0,w=0,P=null,U.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}},el=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ro=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Co=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mh,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},mn=new I,Po=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),i=Et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),i=Et(i,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Vf=new I,Wf=new dt,Xf=new dt,aM=new I,qf=new Ze,Ca=new I,Sc=new In,Yf=new Ze,Tc=new ws,wr=class extends F{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kd,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ca),this.boundingBox.expandByPoint(Ca)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ca),this.boundingSphere.expandByPoint(Ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sc.copy(this.boundingSphere),Sc.applyMatrix4(i),e.ray.intersectsSphere(Sc)!==!1&&(Yf.copy(i).invert(),Tc.copy(e.ray).applyMatrix4(Yf),!(this.boundingBox!==null&&Tc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Tc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===U0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Wf.fromBufferAttribute(i.attributes.skinIndex,e),Xf.fromBufferAttribute(i.attributes.skinWeight,e),Vf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Xf.getComponent(r);if(o!==0){let a=Wf.getComponent(r);qf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(aM.copy(Vf).applyMatrix4(qf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Io=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},tl=class extends Qt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Jt,u=Jt,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kf=new Ze,lM=new Ze,Ar=class s{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:lM;Kf.multiplyMatrices(a,t[r]),Kf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new tl(t,e,e,Fn,ei);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Io),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},As=class extends Bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ar=new Ze,jf=new Ze,Pa=[],$f=new dn,cM=new Ze,co=new F,ho=new In,nl=class extends F{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,cM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ar),$f.copy(e.boundingBox).applyMatrix4(ar),this.boundingBox.union($f)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ar),ho.copy(e.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(ho)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(n),e.ray.intersectsSphere(ho)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ar),jf.multiplyMatrices(n,ar),co.matrixWorld=jf,co.raycast(e,Pa);for(let o=0,a=Pa.length;o<a;o++){let l=Pa[o];l.instanceId=r,l.object=this,t.push(l)}Pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new tl(new Float32Array(i*this.count),i,this.count,lu,ei));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Lo=class extends Dn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},il=new I,sl=new I,Zf=new Ze,uo=new ws,Ia=new In,wc=new I,Jf=new I,Rr=class extends It{constructor(e=new Tt,t=new Lo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)il.fromBufferAttribute(t,i-1),sl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=il.distanceTo(sl);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(i),Ia.radius+=r,e.ray.intersectsSphere(Ia)===!1)return;Zf.copy(i).invert(),uo.copy(e.ray).applyMatrix4(Zf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=u.getX(x),v=u.getX(x+1),_=La(this,e,uo,l,p,v);_&&t.push(_)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=La(this,e,uo,l,x,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=La(this,e,uo,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=La(this,e,uo,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function La(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(il.fromBufferAttribute(o,i),sl.fromBufferAttribute(o,r),t.distanceSqToSegment(il,sl,wc,Jf)>n)return;wc.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(wc);if(!(l<e.near||l>e.far))return{distance:l,point:Jf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Qf=new I,ep=new I,rl=class extends Rr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Qf.fromBufferAttribute(t,i),ep.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qf.distanceTo(ep);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ol=class extends Rr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Rs=class extends Dn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tp=new Ze,Lh=new ws,Da=new In,Ua=new I,Cr=class extends It{constructor(e=new Tt,t=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;tp.copy(i).invert(),Lh.copy(e.ray).applyMatrix4(tp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);Ua.fromBufferAttribute(h,m),np(Ua,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Ua.fromBufferAttribute(h,g),np(Ua,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function np(s,e,t,n,i,r,o){let a=Lh.distanceSqToPoint(s);if(a<t){let l=new I;Lh.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var en=class extends Qt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new de:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,i=[],r=[],o=[],a=new I,l=new Ze;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Wt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Wt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Do=class extends zn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new de){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Dh=class extends Do{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function mu(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Na=new I,Ac=new mu,Rc=new mu,Cc=new mu,Uo=class extends zn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Na.subVectors(i[0],i[1]).add(i[0]),c=Na);let h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Na.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Na),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ac.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,x,m),Rc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,x,m),Cc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Ac.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Rc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Cc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Ac.calc(l),Rc.calc(l),Cc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ip(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function hM(s,e){let t=1-s;return t*t*e}function uM(s,e){return 2*(1-s)*s*e}function dM(s,e){return s*s*e}function _o(s,e,t,n){return hM(s,e)+uM(s,t)+dM(s,n)}function fM(s,e){let t=1-s;return t*t*t*e}function pM(s,e){let t=1-s;return 3*t*t*s*e}function mM(s,e){return 3*(1-s)*s*s*e}function gM(s,e){return s*s*s*e}function Mo(s,e,t,n,i){return fM(s,e)+pM(s,t)+mM(s,n)+gM(s,i)}var al=class extends zn{constructor(e=new de,t=new de,n=new de,i=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new de){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mo(e,i.x,r.x,o.x,a.x),Mo(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Uh=class extends zn{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Mo(e,i.x,r.x,o.x,a.x),Mo(e,i.y,r.y,o.y,a.y),Mo(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ll=class extends zn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nh=class extends zn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cl=class extends zn{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(_o(e,i.x,r.x,o.x),_o(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends zn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(_o(e,i.x,r.x,o.x),_o(e,i.y,r.y,o.y),_o(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ul=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(ip(a,l.x,c.x,u.x,h.x),ip(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new de().fromArray(i))}return this}},dl=Object.freeze({__proto__:null,ArcCurve:Dh,CatmullRomCurve3:Uo,CubicBezierCurve:al,CubicBezierCurve3:Uh,EllipseCurve:Do,LineCurve:ll,LineCurve3:Nh,QuadraticBezierCurve:cl,QuadraticBezierCurve3:hl,SplineCurve:ul}),kh=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new dl[i.type]().fromJSON(i))}return this}},Cs=class extends kh{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ll(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new cl(this.currentPoint.clone(),new de(e,t),new de(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new al(this.currentPoint.clone(),new de(e,t),new de(n,i),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ul(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Do(e,t,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ps=class s extends Tt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Wt(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new I,d=new de,f=new I,g=new I,x=new I,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=t;v++){let _=n+v*u*i,y=Math.sin(_),R=Math.cos(_);for(let b=0;b<=e.length-1;b++){h.x=e[b].x*y,h.y=e[b].y,h.z=e[b].x*R,o.push(h.x,h.y,h.z),d.x=v/t,d.y=b/(e.length-1),a.push(d.x,d.y);let w=l[3*b+0]*y,P=l[3*b+1],S=l[3*b+0]*R;c.push(w,P,S)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,R=y,b=y+e.length,w=y+e.length+1,P=y+1;r.push(R,b,P),r.push(w,P,b)}this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(a,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},fl=class s extends Ps{constructor(e=1,t=1,n=4,i=8){let r=new Cs;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},ni=class s extends Tt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,u=new de;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},je=class s extends Tt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],m=n/2,p=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function v(){let y=new I,R=new I,b=0,w=(t-e)/n;for(let P=0;P<=r;P++){let S=[],E=P/r,L=E*(t-e)+e;for(let H=0;H<=i;H++){let D=H/i,B=D*l+a,z=Math.sin(B),k=Math.cos(B);R.x=L*z,R.y=-E*n+m,R.z=L*k,h.push(R.x,R.y,R.z),y.set(z,w,k).normalize(),d.push(y.x,y.y,y.z),f.push(D,1-E),S.push(g++)}x.push(S)}for(let P=0;P<i;P++)for(let S=0;S<r;S++){let E=x[S][P],L=x[S+1][P],H=x[S+1][P+1],D=x[S][P+1];(e>0||S!==0)&&(u.push(E,L,D),b+=3),(t>0||S!==r-1)&&(u.push(L,H,D),b+=3)}c.addGroup(p,b,0),p+=b}function _(y){let R=g,b=new de,w=new I,P=0,S=y===!0?e:t,E=y===!0?1:-1;for(let H=1;H<=i;H++)h.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let L=g;for(let H=0;H<=i;H++){let B=H/i*l+a,z=Math.cos(B),k=Math.sin(B);w.x=S*k,w.y=m*E,w.z=S*z,h.push(w.x,w.y,w.z),d.push(0,E,0),b.x=z*.5+.5,b.y=k*.5*E+.5,f.push(b.x,b.y),g++}for(let H=0;H<i;H++){let D=R+H,B=L+H;y===!0?u.push(B,B+1,D):u.push(B+1,B,D),P+=3}c.addGroup(p,P,y===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Is=class s extends je{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Di=class extends Cs{constructor(e){super(e),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Cs().fromJSON(i))}return this}},xM={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Bp(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=EM(s,e,r,t)),s.length>80*t){a=c=s[0],l=u=s[1];for(let g=t;g<i;g+=t)h=s[g],d=s[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return No(r,o,t,a,l,f,0),o}};function Bp(s,e,t,n,i){let r,o;if(i===DM(s,e,t,n)>0)for(r=e;r<t;r+=n)o=sp(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=sp(r,s[r],s[r+1],o);return o&&wl(o,o.next)&&(Bo(o),o=o.next),o}function Ls(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(wl(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Bo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function No(s,e,t,n,i,r,o){if(!s)return;!o&&r&&AM(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?vM(s,n,i,r):yM(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Bo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=_M(Ls(s),e,t),No(s,e,t,n,i,r,2)):o===2&&MM(s,e,t,n,i,r):No(Ls(s),e,t,n,i,r,1);break}}}function yM(s){let e=s.prev,t=s,n=s.next;if(Lt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&dr(i,a,r,l,o,c,g.x,g.y)&&Lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vM(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Lt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,x=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=Bh(f,g,e,t,n),v=Bh(x,m,e,t,n),_=s.prevZ,y=s.nextZ;for(;_&&_.z>=p&&y&&y.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&dr(a,u,l,h,c,d,_.x,_.y)&&Lt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&dr(a,u,l,h,c,d,y.x,y.y)&&Lt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&dr(a,u,l,h,c,d,_.x,_.y)&&Lt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&dr(a,u,l,h,c,d,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function _M(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!wl(i,r)&&Hp(i,n,n.next,r)&&ko(i,r)&&ko(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Bo(n),Bo(n.next),n=s=r),n=n.next}while(n!==s);return Ls(n)}function MM(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&PM(o,a)){let l=Fp(o,a);o=Ls(o,o.next),l=Ls(l,l.next),No(o,e,t,n,i,r,0),No(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function EM(s,e,t,n){let i=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Bp(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(CM(c));for(i.sort(bM),r=0;r<i.length;r++)t=SM(i[r],t);return t}function bM(s,e){return s.x-e.x}function SM(s,e){let t=TM(s,e);if(!t)return e;let n=Fp(t,s);return Ls(n,n.next),Ls(t,t.next)}function TM(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,l=i.x,c=i.y,u=1/0,h;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&dr(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),ko(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&wM(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function wM(s,e){return Lt(s.prev,s,e.prev)<0&&Lt(e.next,s,s.next)<0}function AM(s,e,t,n){let i=s;do i.z===0&&(i.z=Bh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,RM(i)}function RM(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Bh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function CM(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function dr(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function PM(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!IM(s,e)&&(ko(s,e)&&ko(e,s)&&LM(s,e)&&(Lt(s.prev,s,e.prev)||Lt(s,e.prev,e))||wl(s,e)&&Lt(s.prev,s,s.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function wl(s,e){return s.x===e.x&&s.y===e.y}function Hp(s,e,t,n){let i=Ba(Lt(s,e,t)),r=Ba(Lt(s,e,n)),o=Ba(Lt(t,n,s)),a=Ba(Lt(t,n,e));return!!(i!==r&&o!==a||i===0&&ka(s,t,e)||r===0&&ka(s,n,e)||o===0&&ka(t,s,n)||a===0&&ka(t,e,n))}function ka(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ba(s){return s>0?1:s<0?-1:0}function IM(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Hp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ko(s,e){return Lt(s.prev,s,s.next)<0?Lt(s,e,s.next)>=0&&Lt(s,s.prev,e)>=0:Lt(s,e,s.prev)<0||Lt(s,s.next,e)<0}function LM(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Fp(s,e){let t=new Hh(s.i,s.x,s.y),n=new Hh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function sp(s,e,t,n){let i=new Hh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Bo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Hh(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function DM(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var $i=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];rp(e),op(n,e);let o=e.length;t.forEach(rp);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,op(n,t[l]);let a=xM.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function rp(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function op(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Pr=class s extends Tt{constructor(e=new Di([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Qe(i,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:UM,_,y=!1,R,b,w,P;p&&(_=p.getSpacedPoints(u),y=!0,d=!1,R=p.computeFrenetFrames(u,!1),b=new I,w=new I,P=new I),d||(m=0,f=0,g=0,x=0);let S=a.extractPoints(c),E=S.shape,L=S.holes;if(!$i.isClockWise(E)){E=E.reverse();for(let ce=0,ve=L.length;ce<ve;ce++){let A=L[ce];$i.isClockWise(A)&&(L[ce]=A.reverse())}}let D=$i.triangulateShape(E,L),B=E;for(let ce=0,ve=L.length;ce<ve;ce++){let A=L[ce];E=E.concat(A)}function z(ce,ve,A){return ve||console.error("THREE.ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(ve,A)}let k=E.length,te=D.length;function q(ce,ve,A){let j,Y,he,U=ce.x-ve.x,W=ce.y-ve.y,O=A.x-ce.x,T=A.y-ce.y,M=U*U+W*W,N=U*T-W*O;if(Math.abs(N)>Number.EPSILON){let $=Math.sqrt(M),le=Math.sqrt(O*O+T*T),Q=ve.x-W/$,be=ve.y+U/$,ne=A.x-T/le,_e=A.y+O/le,qe=((ne-Q)*T-(_e-be)*O)/(U*T-W*O);j=Q+U*qe-ce.x,Y=be+W*qe-ce.y;let ae=j*j+Y*Y;if(ae<=2)return new de(j,Y);he=Math.sqrt(ae/2)}else{let $=!1;U>Number.EPSILON?O>Number.EPSILON&&($=!0):U<-Number.EPSILON?O<-Number.EPSILON&&($=!0):Math.sign(W)===Math.sign(T)&&($=!0),$?(j=-W,Y=U,he=Math.sqrt(M)):(j=U,Y=W,he=Math.sqrt(M/2))}return new de(j/he,Y/he)}let pe=[];for(let ce=0,ve=B.length,A=ve-1,j=ce+1;ce<ve;ce++,A++,j++)A===ve&&(A=0),j===ve&&(j=0),pe[ce]=q(B[ce],B[A],B[j]);let me=[],oe,Re=pe.concat();for(let ce=0,ve=L.length;ce<ve;ce++){let A=L[ce];oe=[];for(let j=0,Y=A.length,he=Y-1,U=j+1;j<Y;j++,he++,U++)he===Y&&(he=0),U===Y&&(U=0),oe[j]=q(A[j],A[he],A[U]);me.push(oe),Re=Re.concat(oe)}for(let ce=0;ce<m;ce++){let ve=ce/m,A=f*Math.cos(ve*Math.PI/2),j=g*Math.sin(ve*Math.PI/2)+x;for(let Y=0,he=B.length;Y<he;Y++){let U=z(B[Y],pe[Y],j);re(U.x,U.y,-A)}for(let Y=0,he=L.length;Y<he;Y++){let U=L[Y];oe=me[Y];for(let W=0,O=U.length;W<O;W++){let T=z(U[W],oe[W],j);re(T.x,T.y,-A)}}}let Ye=g+x;for(let ce=0;ce<k;ce++){let ve=d?z(E[ce],Re[ce],Ye):E[ce];y?(w.copy(R.normals[0]).multiplyScalar(ve.x),b.copy(R.binormals[0]).multiplyScalar(ve.y),P.copy(_[0]).add(w).add(b),re(P.x,P.y,P.z)):re(ve.x,ve.y,0)}for(let ce=1;ce<=u;ce++)for(let ve=0;ve<k;ve++){let A=d?z(E[ve],Re[ve],Ye):E[ve];y?(w.copy(R.normals[ce]).multiplyScalar(A.x),b.copy(R.binormals[ce]).multiplyScalar(A.y),P.copy(_[ce]).add(w).add(b),re(P.x,P.y,P.z)):re(A.x,A.y,h/u*ce)}for(let ce=m-1;ce>=0;ce--){let ve=ce/m,A=f*Math.cos(ve*Math.PI/2),j=g*Math.sin(ve*Math.PI/2)+x;for(let Y=0,he=B.length;Y<he;Y++){let U=z(B[Y],pe[Y],j);re(U.x,U.y,h+A)}for(let Y=0,he=L.length;Y<he;Y++){let U=L[Y];oe=me[Y];for(let W=0,O=U.length;W<O;W++){let T=z(U[W],oe[W],j);y?re(T.x,T.y+_[u-1].y,_[u-1].x+A):re(T.x,T.y,h+A)}}}ee(),fe();function ee(){let ce=i.length/3;if(d){let ve=0,A=k*ve;for(let j=0;j<te;j++){let Y=D[j];ye(Y[2]+A,Y[1]+A,Y[0]+A)}ve=u+m*2,A=k*ve;for(let j=0;j<te;j++){let Y=D[j];ye(Y[0]+A,Y[1]+A,Y[2]+A)}}else{for(let ve=0;ve<te;ve++){let A=D[ve];ye(A[2],A[1],A[0])}for(let ve=0;ve<te;ve++){let A=D[ve];ye(A[0]+k*u,A[1]+k*u,A[2]+k*u)}}n.addGroup(ce,i.length/3-ce,0)}function fe(){let ce=i.length/3,ve=0;K(B,ve),ve+=B.length;for(let A=0,j=L.length;A<j;A++){let Y=L[A];K(Y,ve),ve+=Y.length}n.addGroup(ce,i.length/3-ce,1)}function K(ce,ve){let A=ce.length;for(;--A>=0;){let j=A,Y=A-1;Y<0&&(Y=ce.length-1);for(let he=0,U=u+m*2;he<U;he++){let W=k*he,O=k*(he+1),T=ve+j+W,M=ve+Y+W,N=ve+Y+O,$=ve+j+O;Ce(T,M,N,$)}}}function re(ce,ve,A){l.push(ce),l.push(ve),l.push(A)}function ye(ce,ve,A){we(ce),we(ve),we(A);let j=i.length/3,Y=v.generateTopUV(n,i,j-3,j-2,j-1);$e(Y[0]),$e(Y[1]),$e(Y[2])}function Ce(ce,ve,A,j){we(ce),we(ve),we(j),we(ve),we(A),we(j);let Y=i.length/3,he=v.generateSideWallUV(n,i,Y-6,Y-3,Y-2,Y-1);$e(he[0]),$e(he[1]),$e(he[3]),$e(he[1]),$e(he[2]),$e(he[3])}function we(ce){i.push(l[ce*3+0]),i.push(l[ce*3+1]),i.push(l[ce*3+2])}function $e(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return NM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new dl[i.type]().fromJSON(i)),new s(n,e.options)}},UM={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new de(r,o),new de(a,l),new de(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-h),new de(d,1-g),new de(x,1-p)]:[new de(a,1-l),new de(u,1-h),new de(f,1-g),new de(m,1-p)]}};function NM(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ho=class s extends Tt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/i,f=new I,g=new de;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let v=p+m,_=v,y=v+n+1,R=v+n+2,b=v+1;a.push(_,y,b),a.push(y,R,b)}}this.setIndex(a),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Fo=class s extends Tt{constructor(e=new Di([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qe(i,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(o,2));function c(u){let h=i.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;$i.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];$i.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=$i.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){let v=f[m];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){let v=x[m],_=v[0]+h,y=v[1]+h,R=v[2]+h;n.push(_,y,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return kM(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function kM(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var pt=class s extends Tt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],_=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let b=R/t;h.x=-e*Math.cos(i+b*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(i+b*r)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(b+y,1-_),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let _=u[p][v+1],y=u[p][v],R=u[p+1][v],b=u[p+1][v+1];(p!==0||o>0)&&f.push(_,y,b),(p!==n-1||l<Math.PI)&&f.push(y,R,b)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Gt=class s extends Tt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var pl=class s extends Tt{constructor(e=new hl(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new de,u=new I,h=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function x(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),v(),p()}function m(_){u=e.getPointAt(_/t,u);let y=o.normals[_],R=o.binormals[_];for(let b=0;b<=i;b++){let w=b/i*Math.PI*2,P=Math.sin(w),S=-Math.cos(w);l.x=S*y.x+P*R.x,l.y=S*y.y+P*R.y,l.z=S*y.z+P*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let y=1;y<=i;y++){let R=(i+1)*(_-1)+(y-1),b=(i+1)*_+(y-1),w=(i+1)*_+y,P=(i+1)*(_-1)+y;g.push(R,b,P),g.push(b,w,P)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=i;y++)c.x=_/t,c.y=y/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new dl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ml=class extends At{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},ge=class extends Dn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ap,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends ge{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ha(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function BM(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function HM(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ap(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Op(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Ji=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fh=class extends Ji{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cr,endingEnd:cr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hr:r=e,a=2*t-n;break;case Wa:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hr:o=e,l=2*n-t;break;case Wa:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let R=0;R!==a;++R)r[R]=p*o[u+R]+v*o[c+R]+_*o[l+R]+y*o[h+R];return r}},gl=class extends Ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Oh=class extends Ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ha(t,this.TimeBufferType),this.values=Ha(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ha(e.times,Array),values:Ha(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Er:t=this.InterpolantFactoryMethodDiscrete;break;case br:t=this.InterpolantFactoryMethodLinear;break;case Zl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return Zl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&BM(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Zl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=br;var Qi=class extends Gn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Er;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends Gn{};xl.prototype.ValueTypeName="color";var Ui=class extends Gn{};Ui.prototype.ValueTypeName="number";var zh=class extends Ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Nt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ni=class extends Gn{InterpolantFactoryMethodLinear(e){return new zh(this.times,this.values,this.getValueSize(),e)}};Ni.prototype.ValueTypeName="quaternion";Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Gn{constructor(e,t,n){super(e,t,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Er;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Gn{};ki.prototype.ValueTypeName="vector";var ii=class{constructor(e="",t=-1,n=[],i=du){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(OM(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Gn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=HM(l);l=ap(l,1,u),c=ap(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ui(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,x){if(f.length!==0){let m=[],p=[];Op(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){let _=d[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}i.push(new Ui(".morphTargetInfluence["+x+"]",m,p))}l=f.length*o}else{let f=".bones["+t[h].name+"]";n(ki,f+".position",d,"pos",i),n(Ni,f+".quaternion",d,"rot",i),n(ki,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function FM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ui;case"vector":case"vector2":case"vector3":case"vector4":return ki;case"color":return xl;case"quaternion":return Ni;case"bool":case"boolean":return Qi;case"string":return es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function OM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=FM(s.type);if(s.times===void 0){let t=[],n=[];Op(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Ki={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Gh=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},zM=new Gh,Bi=class{constructor(e){this.manager=e!==void 0?e:zM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var wi={},Vh=class extends Error{constructor(e,t){super(e),this.response=t}},Oo=class extends Bi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:i});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=wi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){v();function v(){h.read().then(({done:_,value:y})=>{if(_)p.close();else{x+=y.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let b=0,w=u.length;b<w;b++){let P=u[b];P.onProgress&&P.onProgress(R)}p.enqueue(y),v()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Vh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Ki.add(e,c);let u=wi[e];delete wi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=wi[e];if(u===void 0)throw this.manager.itemError(e),c;delete wi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Wh=class extends Bi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=So("img");function l(){u(),Ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var yl=class extends Bi{constructor(e){super(e)}load(e,t,n,i){let r=new Qt,o=new Wh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ir=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},zo=class extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Pc=new Ze,lp=new I,cp=new I,Go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wo,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;lp.setFromMatrixPosition(e.matrixWorld),t.position.copy(lp),cp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cp),t.updateMatrixWorld(),Pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xh=class extends Go{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Sr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},di=class extends Ir{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},hp=new Ze,fo=new I,Ic=new I,qh=class extends Go{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fo.setFromMatrixPosition(e.matrixWorld),n.position.copy(fo),Ic.copy(n.position),Ic.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ic),n.updateMatrixWorld(),i.makeTranslation(-fo.x,-fo.y,-fo.z),hp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hp)}},yn=class extends Ir{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Yh=class extends Go{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ds=class extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ts=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var vl=class extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ki.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ki.add(e,l),r.manager.itemStart(e)}};var Lr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=up(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=up();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function up(){return performance.now()}var Kh=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Nt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Nt.multiplyQuaternionsFlat(e,o,e,t,e,n),Nt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},gu="\\[\\]\\.:\\/",GM=new RegExp("["+gu+"]","g"),xu="[^"+gu+"]",VM="[^"+gu.replace("\\.","")+"]",WM=/((?:WC+[\/:])*)/.source.replace("WC",xu),XM=/(WCOD+)?/.source.replace("WCOD",VM),qM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xu),YM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xu),KM=new RegExp("^"+WM+XM+qM+YM+"$"),jM=["material","materials","bones","map"],jh=class{constructor(e,t,n){let i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(GM,"")}static parseTrackName(e){let t=KM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);jM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=jh;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $h=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:cr,endingEnd:cr};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=k0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case H0:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case du:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===B0;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===N0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=hr,i.endingEnd=hr):(e?i.endingStart=this.zeroSlopeAtStart?hr:cr:i.endingStart=Wa,t?i.endingEnd=this.zeroSlopeAtEnd?hr:cr:i.endingEnd=Wa)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},$M=new Float32Array(1),Un=class extends Li{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=i[h],f=d.name,g=u[f];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;g=new Kh(St.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new gl(new Float32Array(2),new Float32Array(2),1,$M),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?ii.findByName(i,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=du),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new $h(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?ii.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var dp=new Ze,_l=class{constructor(e,t,n=0,i=1/0){this.ray=new ws(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new To,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dp),this}intersectObject(e,t=!0,n=[]){return Zh(e,this,n,t),n.sort(fp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Zh(e[i],this,n,t);return n.sort(fp),n}};function fp(s,e){return s.distance-e.distance}function Zh(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Zh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jh);var Yt=(s,e)=>s+Math.random()*(e-s),Vn=[["#ff2fb0","#ff8ad6","#3a0030"],["#20e0ff","#a8f6ff","#00303a"],["#39ff88","#c4ffd9","#003a18"],["#ffd23f","#fff1a8","#3a2a00"],["#ff6a2a","#ffc09a","#3a1000"],["#a46bff","#dcc6ff","#1a0040"]];function Wo(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,t}function kr(s,e,t,n,i){s.fillStyle=i;for(let r=0;r<26;r++){let o=Math.random()*6.28,a=n*Math.pow(Math.random(),.6);s.globalAlpha=Yt(.35,.9),s.beginPath(),s.arc(e+Math.cos(o)*a,t+Math.sin(o)*a,Yt(1.5,n*.09),0,6.28),s.fill()}s.globalAlpha=1}function Al(s,e,t,n,i,r){s.fillStyle=i;for(let o=0;o<r;o++){let a=Yt(e,t),l=Yt(18,90),c=Yt(4,9);s.fillRect(a-c/2,n-6,c,l),s.beginPath(),s.arc(a,n-6+l,c*.75,0,6.28),s.fill()}}function ns(s,e,t={}){let r=Wo(1024,512),o=r.getContext("2d"),[a,l,c]=e,u=t.accent||"#ffffff";if(t.cloud!==!1){o.fillStyle=t.cloudCol||c+"cc";for(let R=0;R<9;R++)o.beginPath(),o.ellipse(Yt(120,904),Yt(170,340),Yt(110,220),Yt(70,130),0,0,6.28),o.fill();kr(o,Yt(80,200),Yt(90,160),90,a),kr(o,Yt(804,944),Yt(320,420),80,u)}let h=[...s],d=h.length,f=Math.min(330,904/(d*.62));o.font=`900 ${f}px Impact, "Arial Black", sans-serif`;let g=0,x=h.map(R=>{let b=o.measureText(R).width*.88;return g+=b,b});if(g>914){f*=914/g,o.font=`900 ${f}px Impact, "Arial Black", sans-serif`,g=0;for(let R=0;R<d;R++)x[R]=o.measureText(h[R]).width*.88,g+=x[R]}let m=(1024-g)/2,p=512/2+f*.36,v=h.map((R,b)=>{let w={ch:R,x:m+x[b]/2,y:p+Yt(-18,18),r:Yt(-.16,.16),s:Yt(.95,1.12)};return m+=x[b],w}),_=R=>v.forEach(b=>{o.save(),o.translate(b.x,b.y),o.rotate(b.r),o.scale(b.s,b.s),o.textAlign="center",o.textBaseline="alphabetic",R(b),o.restore()});o.lineJoin="round";for(let R=22;R>0;R-=2)_(b=>{o.fillStyle=c,o.fillText(b.ch,R,R)});_(R=>{o.strokeStyle="#000",o.lineWidth=f*.16,o.strokeText(R.ch,0,0)}),_(R=>{o.strokeStyle=u,o.lineWidth=f*.085,o.strokeText(R.ch,0,0)});let y=o.createLinearGradient(0,p-f,0,p+10);y.addColorStop(0,l),y.addColorStop(.55,a),y.addColorStop(1,c),_(R=>{o.fillStyle=y,o.fillText(R.ch,0,0)}),o.save(),o.globalCompositeOperation="source-atop",o.strokeStyle="rgba(255,255,255,0.22)",o.lineWidth=7;for(let R=-512;R<1024;R+=34)o.beginPath(),o.moveTo(R,0),o.lineTo(R+512,512),o.stroke();o.restore(),_(R=>{o.fillStyle="rgba(255,255,255,0.9)",o.beginPath(),o.ellipse(-f*.12,-f*.55,f*.05,f*.022,-.5,0,6.28),o.fill()}),Al(o,(1024-g)/2+20,(1024+g)/2-20,p+4,a,t.drips||7);for(let R=0;R<6;R++){let b=Yt(40,984),w=Yt(40,472);o.strokeStyle=u,o.lineWidth=4,o.beginPath(),o.moveTo(b-16,w),o.lineTo(b+16,w),o.moveTo(b,w-16),o.lineTo(b,w+16),o.stroke()}return t.tag&&(o.font='italic 900 46px "Segoe Script","Brush Script MT",cursive',o.fillStyle=u,o.strokeStyle="#000",o.lineWidth=6,o.strokeText(t.tag,764,472),o.fillText(t.tag,764,472)),r}function ZM(s){let n=Wo(512,512),i=n.getContext("2d");kr(i,256,256,230,s[0]),i.fillStyle="#000",i.beginPath(),i.arc(262,266,186,0,6.28),i.fill();let r=i.createRadialGradient(220,200,20,256,256,190);return r.addColorStop(0,"#fff6a0"),r.addColorStop(1,"#ffc800"),i.fillStyle=r,i.beginPath(),i.arc(256,256,176,0,6.28),i.fill(),i.fillStyle="#000",i.beginPath(),i.ellipse(196,210,22,40,0,0,6.28),i.ellipse(316,210,22,40,0,0,6.28),i.fill(),i.strokeStyle="#000",i.lineWidth=18,i.lineCap="round",i.beginPath(),i.arc(256,260,110,.25,Math.PI-.25),i.stroke(),Al(i,140,370,420,"#ffc800",6),n}function JM(s){let n=Wo(512,512),i=n.getContext("2d");kr(i,256,256,220,s[0]),i.fillStyle="#000",i.beginPath(),i.ellipse(262,250,168,214,0,0,6.28),i.fill();let r=i.createLinearGradient(0,40,0,460);return r.addColorStop(0,"#c4ffd9"),r.addColorStop(1,"#14b85a"),i.fillStyle=r,i.beginPath(),i.ellipse(256,244,156,200,0,0,6.28),i.fill(),i.fillStyle="#000",i.beginPath(),i.ellipse(190,250,62,34,.55,0,6.28),i.ellipse(322,250,62,34,-.55,0,6.28),i.fill(),i.fillStyle="rgba(255,255,255,0.8)",i.beginPath(),i.ellipse(176,238,14,8,.5,0,6.28),i.ellipse(308,238,14,8,-.5,0,6.28),i.fill(),i.strokeStyle="#000",i.lineWidth=8,i.beginPath(),i.moveTo(236,360),i.quadraticCurveTo(256,372,276,360),i.stroke(),Al(i,150,360,430,"#14b85a",5),n}function QM(s){let n=Wo(512,640),i=n.getContext("2d");kr(i,256,320,240,s[0]),i.fillStyle="#000",i.fillRect(84,52,360,560),i.fillStyle="#1c1c22",i.fillRect(94,62,336,536),i.strokeStyle=s[0],i.lineWidth=10,i.strokeRect(94,62,336,536);let r=(o,a)=>{let l=i.createRadialGradient(262,o,6,262,o,a);l.addColorStop(0,"#555"),l.addColorStop(.3,"#111"),l.addColorStop(.9,"#333"),l.addColorStop(1,s[1]),i.fillStyle=l,i.beginPath(),i.arc(262,o,a,0,6.28),i.fill(),i.fillStyle="#888",i.beginPath(),i.arc(262,o,a*.18,0,6.28),i.fill()};r(170,70),r(420,140),i.strokeStyle=s[1],i.lineWidth=6;for(let o=0;o<3;o++)i.beginPath(),i.arc(262,420,170+o*28,-.6,.6),i.stroke(),i.beginPath(),i.arc(262,420,170+o*28,Math.PI-.6,Math.PI+.6),i.stroke();return i.font='900 64px Impact, "Arial Black", sans-serif',i.textAlign="center",i.fillStyle=s[0],i.strokeStyle="#000",i.lineWidth=10,i.strokeText("SPK",262,300),i.fillText("SPK",262,300),n}function eE(s){let n=Wo(512,384),i=n.getContext("2d");kr(i,256,200,170,s[0]);let r=[[70,300],[90,110],[170,210],[256,60],[342,210],[422,110],[442,300]];i.lineJoin="round",i.strokeStyle="#000",i.lineWidth=34,i.beginPath(),r.forEach(([a,l],c)=>c?i.lineTo(a,l):i.moveTo(a,l)),i.closePath(),i.stroke();let o=i.createLinearGradient(0,60,0,300);o.addColorStop(0,"#fff1a8"),o.addColorStop(1,"#e09000"),i.fillStyle=o,i.beginPath(),r.forEach(([a,l],c)=>c?i.lineTo(a,l):i.moveTo(a,l)),i.closePath(),i.fill();for(let[a,l]of[[90,110],[256,60],[422,110]])i.fillStyle=s[0],i.beginPath(),i.arc(a,l,18,0,6.28),i.fill(),i.strokeStyle="#000",i.lineWidth=6,i.stroke();return Al(i,110,400,300,"#e09000",5),n}function zp(s,e,t,n){let i=[()=>ns("SPK",Vn[0],{accent:"#20e0ff",tag:"TekMek"}),()=>ZM(Vn[3]),()=>ns("KAOS",Vn[1],{accent:"#ff2fb0"}),()=>QM(Vn[0]),()=>ns("TEKNO",Vn[2],{accent:"#ffd23f",tag:"Pseudonymos"}),()=>JM(Vn[2]),()=>ns("RAVE",Vn[5],{accent:"#39ff88"}),()=>eE(Vn[0]),()=>ns("S.P.K",Vn[3],{accent:"#ff2fb0",tag:"Sodomize"}),()=>ns("FREE PARTY",Vn[4],{accent:"#20e0ff"}),()=>ns("BASS",Vn[0],{accent:"#ffd23f",tag:"Knox"}),()=>ns("LOVE",Vn[1],{accent:"#ff2fb0",tag:"Tonvision"})],r=n-t,o=i.length;i.forEach((a,l)=>{let c=a(),u=c.width/c.height,h=t+r*(l+.5)/o,d=u>1.5?3.6:3.1,f=d*u,g=new en(c);g.colorSpace=ht,g.anisotropy=4;let x=new ge({map:g,transparent:!0,alphaTest:.05,roughness:.75,emissive:16777215,emissiveMap:g,emissiveIntensity:.62,depthWrite:!1}),m=new F(new at(f,d),x),p=e-.2,v=7.25+(l%2?-.1:.12);m.position.set(Math.sin(h)*p,v,-Math.cos(h)*p),m.lookAt(0,v,0),m.rotateZ(Yt(-.06,.06)),m.renderOrder=2,s.add(m)})}var Ib=new URLSearchParams(location.search);var Gp=[{n:1,name:"Plakatieren bei Nacht",icon:"\u{1F58C}\uFE0F"},{n:2,name:"SPK-LKW beladen",icon:"\u{1F4E6}"},{n:3,name:"Camper-Rennen",icon:"\u{1F3C1}"},{n:4,name:"Boxen ausladen & aufbauen",icon:"\u{1F50A}"},{n:5,name:"Boxen verkabeln",icon:"\u{1F50C}"},{n:6,name:"Rave gegen die Polizei",icon:"\u{1F6A8}"},{n:7,name:"Traveler \u2013 auf Tour",icon:"\u{1F690}"}];function yu(s,e){if(e===wp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Vo||e===El){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Vo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Hr=class extends Bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Tu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Fu(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ts.extractUrlBase(e);o=ts.resolveURL(c,this.path)}else o=ts.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Oo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Yp){try{o[lt.KHR_BINARY_GLTF]=new Ou(e)}catch(h){i&&i(h);return}r=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Yu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case lt.KHR_MATERIALS_UNLIT:o[h]=new bu;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[h]=new zu(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[h]=new Gu;break;case lt.KHR_MESH_QUANTIZATION:o[h]=new Vu;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function tE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Eu=class{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ae(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],fn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ds(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new yn(u),c.distance=h;break;case"spot":c=new di(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},bu=class{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return De}extendParams(e,t,n){let i=[];e.color=new Ae(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ht))}return Promise.all(i)}},Su=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Tu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(a,a)}return Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Au=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Ru=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ht)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(a[0],a[1],a[2],fn),Promise.all(r)}},Iu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Lu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(a[0],a[1],a[2],fn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ht)),Promise.all(r)}},Du=class{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Uu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Nu=class{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ku=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Bu=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Hu=class{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},Fu=class{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Wn.TRIANGLES&&c.mode!==Wn.TRIANGLE_STRIP&&c.mode!==Wn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let x=new Ze,m=new I,p=new Nt,v=new I(1,1,1),_=new nl(g.geometry,g.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),_.setMatrixAt(y,x.compose(m,p,v));for(let y in l)if(y==="_COLOR_0"){let R=l[y];_.instanceColor=new As(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);It.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Yp="glTF",Xo=12,Vp={JSON:1313821514,BIN:5130562},Ou=class{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Xo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Yp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Xo,r=new DataView(e,Xo),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Vp.JSON){let c=new Uint8Array(e,Xo+o,a);this.content=n.decode(c)}else if(l===Vp.BIN){let c=Xo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},zu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Xu[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Xu[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Br[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(f)},a,c,fn,d)})})}},Gu=class{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Vu=class{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}},Rl=class extends Ji{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,x=g-c,m=-2*f+3*d,p=f-d,v=1-m,_=p-d+h;for(let y=0;y!==a;y++){let R=o[x+y+a],b=o[x+y+l]*u,w=o[g+y+a],P=o[g+y]*u;r[y]=v*R+_*b+m*w+p*P}return r}},nE=new Nt,Wu=class extends Rl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return nE.fromArray(r).normalize().toArray(r),r}},Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Br={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wp={9728:Jt,9729:un,9984:su,9985:go,9986:lr,9987:hi},Xp={33071:Ri,33648:Eo,10497:wn},vu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iE={CUBICSPLINE:void 0,LINEAR:br,STEP:Er},_u={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ge({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Tn})),s.DefaultMaterial}function Us(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rE(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function oE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aE(s){let e,t=s.extensions&&s.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mu(t.attributes):e=s.indices+":"+Mu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Mu(s.targets[n]);return e}function Mu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function qu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var cE=new Ze,Yu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new yl(this.options.manager):this.textureLoader=new vl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Oo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Us(r,a,i),Hi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(ts.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=vu[i.type],a=Br[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Bt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=vu[i.type],c=Br[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(f&&f!==h){let p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,_=t.cache.get(v);_||(x=new c(a,p*f,i.count*f/u),_=new Co(x,f/u),t.cache.add(v,_)),m=new Po(_,l,d%f/u,g)}else a===null?x=new c(i.count*l):x=new c(a,d,i.count*l),m=new Bt(x,l,g);if(i.sparse!==void 0){let p=vu.SCALAR,v=Br[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,R=new v(o[1],_,i.sparse.count*p),b=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,P=R.length;w<P;w++){let S=R[w];if(m.setX(S,b[w*l]),l>=2&&m.setY(S,b[w*l+1]),l>=3&&m.setZ(S,b[w*l+2]),l>=4&&m.setW(S,b[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Wp[d.magFilter]||un,u.minFilter=Wp[d.minFilter]||hi,u.wrapS=Xp[d.wrapS]||wn,u.wrapT=Xp[d.wrapT]||wn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Jt&&u.minFilter!==un,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Qt(x);m.needsUpdate=!0,d(m)}),t.load(ts.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Hi(h,o),h.userData.mimeType=o.mimeType||lE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Rs,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Lo,Dn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ge}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){let h=i[lt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ae(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],fn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,ht)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Pt);let u=r.alphaMode||_u.OPAQUE;if(u===_u.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===_u.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==De&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==De&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==De){let h=r.emissiveFactor;a.emissive=new Ae().setRGB(h[0],h[1],h[2],fn)}return r.emissiveTexture!==void 0&&o!==De&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ht)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Hi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Us(i,h,r),h})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return qp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=aE(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=qp(new Tt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?sE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],m=o[f],p,v=c[f];if(m.mode===Wn.TRIANGLES||m.mode===Wn.TRIANGLE_STRIP||m.mode===Wn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new wr(x,v):new F(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Wn.TRIANGLE_STRIP?p.geometry=yu(p.geometry,El):m.mode===Wn.TRIANGLE_FAN&&(p.geometry=yu(p.geometry,Vo));else if(m.mode===Wn.LINES)p=new rl(x,v);else if(m.mode===Wn.LINE_STRIP)p=new Rr(x,v);else if(m.mode===Wn.LINE_LOOP)p=new ol(x,v);else if(m.mode===Wn.POINTS)p=new Cr(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&oE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Hi(p,r),m.extensions&&Us(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Us(i,h[0],r),h[0];let d=new Xe;r.extensions&&Us(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(Sl.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Zi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ar(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let v=0,_=d.length;v<_;v++){let y=d[v],R=f[v],b=g[v],w=x[v],P=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let S=n._createAnimationTracks(y,R,b,w,P);if(S)for(let E=0;E<S.length;E++)p.push(S[E])}return new ii(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,cE)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Io:c.length>1?u=new Xe:c.length===1?u=c[0]:u=new It,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Hi(u,r),r.extensions&&Us(n,u,r),r.matrix!==void 0){let h=new Ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Xe;n.name&&(r.name=i.createUniqueName(n.name)),Hi(r,n),n.extensions&&Us(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof Dn||d instanceof Qt)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];is[r.path]===is.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(is[r.path]){case is.weights:c=Ui;break;case is.rotation:c=Ni;break;case is.position:case is.scale:c=ki;break;default:switch(n.itemSize){case 1:c=Ui;break;case 2:case 3:default:c=ki;break}break}let u=i.interpolation!==void 0?iE[i.interpolation]:br,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+is[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=qu(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ni?Wu:Rl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function hE(s,e,t){let n=e.attributes,i=new dn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let u=qu(Br[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=qu(Br[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new In;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function qp(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Xu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ot.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Hi(s,e),hE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?rE(s,e.targets,t):s})}function qo(s){let e=new Map,t=new Map,n=s.clone();return Kp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Kp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Kp(s.children[n],e.children[n],t)}var Cl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var _n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},uE=new Zi(-1,1,1,-1,0,1),Ku=class extends Tt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},dE=new Ku,si=class{constructor(e){this._mesh=new F(dE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Pl=class extends _n{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fi.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new si(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Yo=class extends _n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Il=class extends _n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Fr=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new de);this._width=n.width,this._height=n.height,t=new zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pl(Cl),this.copyPass.material.blending=ui,this.clock=new Lr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Yo!==void 0&&(o instanceof Yo?n=!0:o instanceof Il&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Or=class extends _n{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ae}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var $p={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var zr=class s extends _n{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new Ae(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new zt(r,o,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new zt(r,o,{type:vn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new zt(r,o,{type:vn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=$p;this.highPassUniforms=fi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new de(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Cl;this.copyUniforms=fi.clone(u.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ti,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ae,this.oldClearAlpha=1,this.basic=new De,this.fsQuad=new si(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new de(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};zr.BlurDirectionX=new de(1,0);zr.BlurDirectionY=new de(0,1);var Zp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Gr=class extends _n{constructor(){super();let e=Zp;this.uniforms=fi.clone(e.uniforms),this.material=new ml({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new si(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Dr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===iu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ko=class s extends F{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Ut;let n=this,i=t.color!==void 0?new Ae(t.color):new Ae(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||s.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new Jn,h=new I,d=new I,f=new I,g=new Ze,x=new I(0,0,-1),m=new dt,p=new I,v=new I,_=new dt,y=new Ze,R=this.camera,b=new zt(r,o,{samples:c,type:vn}),w=new At({name:l.name!==void 0?l.name:"unspecified",uniforms:fi.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});w.uniforms.tDiffuse.value=b.texture,w.uniforms.color.value=i,w.uniforms.textureMatrix.value=y,this.material=w,this.onBeforeRender=function(P,S,E){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(E.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(d,f),p.dot(h)>0)return;p.reflect(h).negate(),p.add(d),g.extractRotation(E.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(f),v.subVectors(d,x),v.reflect(h).negate(),v.add(d),R.position.copy(p),R.up.set(0,1,0),R.up.applyMatrix4(g),R.up.reflect(h),R.lookAt(v),R.far=E.far,R.updateMatrixWorld(),R.projectionMatrix.copy(E.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(R.projectionMatrix),y.multiply(R.matrixWorldInverse),y.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(R.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let L=R.projectionMatrix;_.x=(Math.sign(m.x)+L.elements[8])/L.elements[0],_.y=(Math.sign(m.y)+L.elements[9])/L.elements[5],_.z=-1,_.w=(1+L.elements[10])/L.elements[14],m.multiplyScalar(2/m.dot(_)),L.elements[2]=m.x,L.elements[6]=m.y,L.elements[10]=m.z+1-a,L.elements[14]=m.w,n.visible=!1;let H=P.getRenderTarget(),D=P.xr.enabled,B=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(b),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(S,R),P.xr.enabled=D,P.shadowMap.autoUpdate=B,P.setRenderTarget(H);let z=E.viewport;z!==void 0&&P.state.viewport(z),n.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}};Ko.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Ll=[{id:"lsd",name:"LSD",col:"#ff2fb0",verb:"nehmen",kind:"tab",msg:"\u{1F308} LSD \u2013 die Welt f\xE4ngt an zu flie\xDFen \u2026"},{id:"spd",name:"SPEED",col:"#ffe22f",verb:"ziehen",kind:"line",msg:"\u26A1 SPEED \u2013 Puls auf 180!"},{id:"coke",name:"KOKAIN",col:"#bfe9ff",verb:"ziehen",kind:"line",msg:"\u2744\uFE0F KOKAIN \u2013 alles glitzert und ist superhell"},{id:"ket",name:"KETAMIN",col:"#9a7dff",verb:"ziehen",kind:"line",msg:"\u{1F300} KETAMIN \u2013 ab ins K-Hole \u2026"},{id:"beer",name:"BIER",col:"#ffb02f",verb:"trinken",kind:"beer",msg:"\u{1F37A} BIER \u2013 Prost! Alles schwankt ein bisschen"},{id:"weed",name:"JOINTS",col:"#7ddc4a",verb:"rauchen",kind:"joint",msg:"\u{1F33F} JOINT \u2013 alles wird langsam, weich und gem\xFCtlich \u2026"}],jo=240,Jp=8,ju=120,fE=.4,pE=3.2,mE=300,Dl=10,Qp="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",gE=`
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
}`,$u=class extends _n{constructor(){super(),this.u={tDiffuse:{value:null},tPrev:{value:null},t:{value:0},res:{value:new de(1,1)},lsd:{value:0},spd:{value:0},coke:{value:0},ket:{value:0},beer:{value:0},weed:{value:0}},this.q=new si(new At({uniforms:this.u,vertexShader:Qp,fragmentShader:gE,depthTest:!1,depthWrite:!1})),this.cu={tDiffuse:{value:null}},this.cq=new si(new At({uniforms:this.cu,vertexShader:Qp,fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ gl_FragColor = texture2D(tDiffuse, vUv); }",depthTest:!1,depthWrite:!1}));let e={type:vn};this.a=new zt(1,1,e),this.b=new zt(1,1,e),this.fresh=!0}setSize(e,t){this.a.setSize(e,t),this.b.setSize(e,t),this.u.res.value.set(e,t),this.fresh=!0}render(e,t,n){this.u.tDiffuse.value=n.texture,this.u.tPrev.value=this.fresh?n.texture:this.b.texture,this.fresh=!1,e.setRenderTarget(this.a),this.q.render(e),this.cu.tDiffuse.value=this.a.texture,e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(),this.cq.render(e);let i=this.a;this.a=this.b,this.b=i}};function em(s){let{scene:e,camera:t,renderer:n,portals:i,me:r,textPlane:o,toast:a,net:l}=s,c=s.R_WALL,u=s.ARC,h=i.length,d=s.PR,f=[],g=new De({color:16054015}),x=(()=>{let A=document.createElement("canvas");A.width=A.height=64;let j=A.getContext("2d");for(let he=0;he<64;he+=8)for(let U=0;U<64;U+=8)j.fillStyle=`hsl(${(U*5+he*7)%360},100%,55%)`,j.fillRect(U,he,8,8);j.fillStyle="#fff",j.font="bold 40px Arial",j.textAlign="center",j.fillText("\u263A",32,46);let Y=new en(A);return Y.colorSpace=ht,Y})(),m=new De({map:x}),p=new ge({color:16052194,roughness:.9}),v=new ge({color:14205082,roughness:.9}),_=new ge({color:5910021,roughness:.15,metalness:.3,emissive:2757120,transparent:!0,opacity:.92}),y=new De({color:16765802}),R=new ge({color:1381660,roughness:.25,metalness:.7}),b=new ge({color:11187400,roughness:.05,metalness:1,emissive:1711914});i.forEach((A,j)=>{let Y=j===h-1&&h>1?5:j%5,he=Ll[Y],U=new Ae(he.col),W=new Xe;W.position.copy(A.pos),W.lookAt(0,0,0),e.add(W);let O=-1.98,T=.95,M=(ne,_e,qe,ae,Ee,Be,Fe)=>{let Se=new F(new Oe(ne,_e,qe),Fe);return Se.position.set(ae,Ee,Be),W.add(Se),Se};M(1.6,.05,.55,0,T,O,new ge({color:1381660,roughness:.25,metalness:.7,emissive:U.clone().multiplyScalar(.22)}));let N=new F(new pt(.035,10,8),new De({color:U,toneMapped:!1}));N.position.set(-.7,1.55,O-.2),W.add(N);for(let ne of[-.72,.72])for(let _e of[-.22,.22])M(.05,T,.05,ne,T/2,O+_e,R);M(1.6,.025,.025,0,T-.03,O+.28,new De({color:U,toneMapped:!1}));let $=o([{t:he.name,size:120,c:he.col,font:'Impact, "Arial Black", sans-serif',weight:400,glow:he.col}],{w:768,h:170,pw:1.3});if($.position.set(0,1.85,O-.24),W.add($),he.kind!=="beer"&&he.kind!=="joint"&&M(.95,.012,.36,0,T+.031,O,b),he.kind==="joint"){M(.95,.02,.36,0,T+.035,O,new ge({color:6964260,roughness:.8}));let ne=new Xe;ne.position.set(-.56,T+.025,O-.15),ne.scale.setScalar(1.35),W.add(ne);let _e=new ge({color:8248394,roughness:.05,metalness:.1,transparent:!0,opacity:.55,emissive:1718800}),qe=new F(new pt(.085,20,14,0,Math.PI*2,0,Math.PI*.62),_e);qe.rotation.x=Math.PI,qe.position.y=.07,ne.add(qe);let ae=new F(new je(.066,.066,.006,20),_e);ae.position.y=.004,ne.add(ae);let Ee=new F(new je(.06,.068,.04,20),new De({color:4894880,transparent:!0,opacity:.6}));Ee.position.y=.03,ne.add(Ee);let Be=new F(new je(.03,.034,.42,18,1,!0),_e);Be.position.y=.33,ne.add(Be);let Fe=new F(new Gt(.031,.006,8,20),_e);Fe.rotation.x=Math.PI/2,Fe.position.y=.54,ne.add(Fe);let Se=new F(new Gt(.031,.004,6,3),_e);Se.rotation.x=Math.PI/2,Se.position.y=.3,ne.add(Se);let et=new F(new je(.008,.008,.13,8),_e);et.position.set(.055,.08,0),et.rotation.z=-.8,ne.add(et);let Ke=new F(new je(.022,.01,.03,12),new ge({color:11581118,metalness:.9,roughness:.25}));Ke.position.set(.1,.12,0),ne.add(Ke);let _t=new F(new at(.05,.05),new De({color:8248394,toneMapped:!1,transparent:!0,opacity:.9}));_t.position.set(0,.25,.034),ne.add(_t)}let le=[];for(let ne=0;ne<Dl;ne++){let _e=he.kind==="line"?-.36+ne*.08:-.32+ne%5*.16,qe=he.kind==="line"?0:ne<5?-.08:.08,ae;if(he.kind==="line")ae=new F(new Oe(.016,.007,.24),he.id==="spd"?new De({color:16773576}):he.id==="ket"?new De({color:15131391}):g),ae.position.set(_e,T+.041,O);else if(he.kind==="joint"){ae=new Xe;let Ee=new F(new je(.009,.005,.12,10),p);Ee.rotation.z=Math.PI/2,ae.add(Ee);let Be=new F(new je(.0052,.0052,.018,8),v);Be.rotation.z=Math.PI/2,Be.position.x=-.068,ae.add(Be);let Fe=new F(new Is(.0095,.016,8),p);Fe.rotation.z=-Math.PI/2,Fe.position.x=.068,ae.add(Fe),ae.position.set(-.3+ne%5*.15,T+.055,O+(ne<5?-.08:.08)),ae.rotation.y=(ne%5-2)*.12+(ne<5?.1:-.1)}else if(he.kind==="tab")ae=new F(new Oe(.07,.003,.07),m),ae.position.set(_e,T+.039,O+qe),ae.rotation.y=(ne%5-2)*.2;else{ae=new Xe;let Ee=new F(new je(.032,.032,.17,14),_);Ee.position.y=.085,ae.add(Ee);let Be=new F(new je(.012,.03,.08,12),_);Be.position.y=.21,ae.add(Be);let Fe=new F(new je(.0325,.0325,.06,14,1,!0),y);Fe.position.y=.08,ae.add(Fe),ae.position.set(_e+(ne<5?0:.05),T+.025,O+qe*1.2)}W.add(ae),le.push(ae)}if(he.kind==="line"){let ne=new F(new je(.008,.008,.13,10),new De({color:9421962}));ne.rotation.z=Math.PI/2,ne.position.set(.38,T+.045,O+.1),W.add(ne)}let Q=new F(new Oe(.95,.35,.5),new De({transparent:!0,opacity:0,depthWrite:!1}));Q.position.set(-.05,T+.15,O),W.add(Q);let be={i:j,di:Y,P:A,D:he,units:le,left:new Array(Dl).fill(!0),takenAt:new Array(Dl).fill(0),hit:Q,aim:{secret:!0,table:j}};if(Q.userData.aim=be.aim,j===h-1){let ne=new Xe;ne.position.set(.6,T+.03,O),W.add(ne);let _e=new F(new Oe(.3,.01,.16),new De({color:16777215}));ne.add(_e);let qe=new De({color:14688288}),ae=new F(new Oe(.05,.002,.016),qe);ae.position.set(-.11,.006,.05),ne.add(ae);let Ee=ae.clone();Ee.rotation.y=Math.PI/2,ne.add(Ee);let Be=new F(new je(.017,.017,.15,14),new De({color:3800968,toneMapped:!1,transparent:!0,opacity:.85}));Be.rotation.z=Math.PI/2,Be.position.set(.02,.025,0),ne.add(Be);let Fe=new F(new je(.002,.002,.07,6),new De({color:14540253}));Fe.rotation.z=Math.PI/2,Fe.position.set(.13,.025,0),ne.add(Fe);let Se=new F(new je(.012,.012,.06,10),new De({color:15658734}));Se.rotation.z=Math.PI/2,Se.position.set(-.08,.025,0),ne.add(Se);let et=o([{t:"GEGENMITTEL",size:90,c:"#39ff88",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"#39ff88"}],{w:768,h:140,pw:.7});et.position.set(.6,1.33,O-.24),W.add(et);let Ke=new F(new Oe(.34,.25,.3),Q.material);Ke.position.set(.6,T+.1,O),W.add(Ke),be.antiHit=Ke,Ke.userData.aim={secret:!0,anti:!0,table:j}}f.push(be)});let w=[];for(let A=-1;A<h;A++){let j=(A+.5-(h-1)/2)*u;w.push(new I(Math.sin(j)*(c-.6),0,-Math.cos(j)*(c-.6)))}function P(A){for(let j of w){let Y=A.x-j.x,he=A.z-j.z,U=Math.hypot(Y,he),W=.62+d;U<W&&U>1e-4&&(A.x=j.x+Y/U*W,A.z=j.z+he/U*W)}for(let j of f){let Y=j.P,he=A.x-Y.pos.x,U=A.z-Y.pos.z,W=he*Y.n.x+U*Y.n.z,O=he*Y.t.x+U*Y.t.z,T=-1.7+d;if(Math.abs(O)<.8+d&&W<T&&W>-2.6){let M=T-W;A.x+=Y.n.x*M,A.z+=Y.n.z*M}}}let S=A=>{let j=A.P;return(r.pos.x-j.pos.x)*j.n.x+(r.pos.z-j.pos.z)*j.n.z<-.35},E=Ll.map(()=>({doses:[],end:0})),L={lsd:0,spd:0,coke:0,ket:0,beer:0,weed:0},H=0,D=()=>performance.now()/1e3,B=A=>{if(A<0||A>=jo)return 0;if(A<Jp){let Y=A/Jp;return Y*Y*(3-2*Y)}if(A<ju)return 1;let j=(A-ju)/(jo-ju);return 1-j*j*(3-2*j)};function z(A,j){let Y=E[A];Y.doses=Y.doses.filter(U=>j-U<jo);let he=0;for(let U of Y.doses)he+=fE*B(j-U);return Math.min(pE,he)}function k(A){let j=D(),Y=E[A];Y.doses.push(j),Y.end=j+jo;let he=Y.doses.filter(U=>j-U<jo).length;a(Ll[A].msg+(he>1?` (${he}. Dosis \u2013 st\xE4rker!)`:" (ca. 4 Minuten)"))}function te(){let A=D(),j=!1;for(let Y of E)Y.end>A&&(j=!0),Y.end=0,Y.doses=[];H=D(),a(j?"\u{1F489} Gegenmittel \u2013 alles wieder klar im Kopf":"\u{1F489} Gegenmittel \u2013 du warst eh n\xFCchtern \u{1F604}")}let q=()=>f.map(A=>A.left.reduce((j,Y,he)=>j|(Y?1<<he:0),0));function pe(A){f.forEach((j,Y)=>{let he=A[Y]|0;j.left=j.units.map((U,W)=>!!(he&1<<W)),j.units.forEach((U,W)=>U.visible=j.left[W])})}function me(){if(l.role!=="host")return;let A={t:"dg",s:q()};for(let j of l.conns.values())try{j.conn.send(A)}catch{}}function oe(A,j){let Y=f[A];return!Y||!Y.left[j]?!1:(Y.left[j]=!1,Y.takenAt[j]=D(),Y.units[j].visible=!1,!0)}function Re(A){let j=f[A.table];if(!j||!S(j))return;if(A.anti){te();return}let Y=j.left.indexOf(!0);if(Y<0){a(j.D.name+" ist leer \u2013 kommt in ein paar Minuten wieder");return}if(oe(A.table,Y),k(j.di),l.role==="client"&&l.conn)try{l.conn.send({t:"dg1",i:A.table,k:Y})}catch{}else me()}let Ye=0;function ee(A){if(l.role==="client"||(Ye+=A)<2)return;Ye=0;let j=D(),Y=!1;for(let he of f)he.left.forEach((U,W)=>{!U&&j-he.takenAt[W]>mE&&(he.left[W]=!0,he.units[W].visible=!0,Y=!0)});Y&&me()}let fe=new $u;fe.enabled=!1;let K=null;if(s.composer){let A=s.composer.passes;s.composer.insertPass(fe,Math.max(1,A.length-1))}function re(){if(K)return K;K=new Fr(n),K.addPass(new Or(e,t)),K.addPass(fe),K.addPass(new Gr);let A=()=>K.setSize(window.innerWidth,window.innerHeight);return window.addEventListener("resize",A),A(),K}let ye=document.createElement("div");ye.id="tripHud",ye.style.cssText='position:fixed;left:16px;bottom:64px;z-index:20;font:600 14px "Segoe UI",system-ui,sans-serif;color:#fff;text-shadow:0 1px 4px #000;pointer-events:none;display:flex;flex-direction:column;gap:4px',document.body.appendChild(ye);let Ce=0,we=document.createElement("div");we.style.cssText="position:fixed;inset:0;background:#e8fff0;opacity:0;pointer-events:none;z-index:19",document.body.appendChild(we);let $e=t.fov,ce=!1;function ve(A,j){ee(A);let Y=D();L.lsd=z(0,Y),L.spd=z(1,Y),L.coke=z(2,Y),L.ket=z(3,Y),L.beer=z(4,Y),L.weed=z(5,Y),ce=L.lsd+L.spd+L.coke+L.ket+L.beer+L.weed>.002,fe.enabled=ce;for(let O in L)fe.u[O].value=L[O];fe.u.t.value=j,ce||(fe.fresh=!0);let U={};for(let O in L)U[O]=Math.min(1.6,L[O]);let W=$e+U.coke*14+U.spd*10-U.ket*12+U.lsd*8*Math.sin(j*.5)+U.beer*3*Math.sin(j*.7)+U.weed*4;if(Math.abs(t.fov-W)>.01&&(t.fov=W,t.updateProjectionMatrix()),ce&&(t.rotation.z+=U.beer*.09*Math.sin(j*.8)+U.ket*.22*Math.sin(j*.23)+U.lsd*.06*Math.sin(j*.6),t.rotation.x+=U.beer*.035*Math.sin(j*1.1)+U.ket*.05*Math.sin(j*.31),t.rotation.y+=U.beer*.045*Math.sin(j*.55),t.rotation.z+=U.weed*.03*Math.sin(j*.4),t.position.y+=U.weed*.03*Math.sin(j*.5),t.position.y+=U.spd*.02*Math.sin(j*40)+U.coke*.008*Math.sin(j*33)),s.bloom&&(s.bloom.strength=.42+Math.min(1.2,U.coke*.7+U.lsd*.5+U.spd*.25)),H>0){let O=Math.max(0,1-(Y-H)/1.3);we.style.opacity=String(O*.85),O<=0&&(H=0)}if((Ce+=A)>.5){Ce=0;let O=Ll.map((T,M)=>E[M].end>Y?`<span><span style="color:${T.col}">\u25CF</span> ${T.name}${E[M].doses.length>1?" \xD7"+E[M].doses.length:""} ${Math.floor((E[M].end-Y)/60)}:${String(Math.floor((E[M].end-Y)%60)).padStart(2,"0")}</span>`:"").filter(Boolean);ye.innerHTML=O.join("")}}return{collide:P,tick:ve,use:Re,targets:()=>{let A=[];for(let j of f)A.push(j.hit),j.antiHit&&A.push(j.antiHit);return A},prompt(A,j){let Y=f[A.table],he=j?"Tippe auf <kbd>E</kbd>":"<kbd>E</kbd>";if(A.anti)return`<b style="color:#39ff88">\u{1F489} Gegenmittel</b><br><small>${he} = spritzen (hebt alle Drogen auf)</small>`;let U=Y.left.filter(Boolean).length;return`<b style="color:${Y.D.col}">${Y.D.name}</b> <small>\xB7 ${U} von ${Dl} \xFCbrig</small><br><small>${U?he+" = "+Y.D.verb:"leer \u2013 kommt bald wieder"}</small>`},canAim:A=>{let j=f[A.table];return!!j&&S(j)},speedMul:()=>Math.max(.35,1+Math.min(1.6,L.spd)*.7+Math.min(1.6,L.coke)*.35-Math.min(1.6,L.ket)*.55-Math.min(1.6,L.beer)*.15-Math.min(1.6,L.weed)*.3),jumpMul:()=>1+Math.min(1.6,L.spd)*.3+Math.min(1.6,L.coke)*.15-Math.min(1.6,L.ket)*.2,drift:(A,j)=>{let Y=Math.min(1.6,L.beer)*1.6*Math.sin(j*.9)+Math.min(1.6,L.ket)*1.2*Math.sin(j*.37);Math.abs(Y)>.001&&A.lengthSq()>0&&(A.x+=Math.cos(j*.3)*Y,A.z+=Math.sin(j*.3)*Y)},render(A){return ce?(A?A.render():re().render(),!0):!1},state:q,setState:pe,hostTake(A,j){oe(A,j),me()}}}var Qu=[{id:"",name:"Glatze"},{id:"hair_buzzed",name:"Kurz"},{id:"hair_simpleparted",name:"Scheitel"},{id:"hair_long",name:"Lang"},{id:"hair_buns",name:"Dutt"},{id:"hair_buzzedfemale",name:"Kurz (Frau)"}],ed=["Kein Oberteil","T-Shirt","Langarm","Tanktop"],td=["Keine Hose","Shorts","Lange Hose"],nd=["Barfu\xDF","Schuhe"],Mn=["#ff2fb0","#20e0ff","#ffe22f","#39ff88","#8a2fff","#ff6a1a","#f2f2f2","#1b1c22","#d81c1c","#2f5dff","#6b4a2e","#7a7f88"],id=["#2a1d15","#5a3b22","#a8743c","#e8c46a","#0d0d0d","#b8452a","#ff2fb0","#e8e8e8"],ss=[{id:"",name:"Klassisch",kind:"Eigene Frisur & Kleidung"},{id:"remy",name:"Remy",kind:"Realistisch",top:1,parts:[["Oberteil",/^Tops/],["Hose",/^Bottoms/],["Schuhe",/^Shoes/],["Haare",/^Hair/]]},{id:"ch31",name:"Leo",kind:"Realistisch",top:1,parts:[["Pullover",/Sweater|Collar/],["Hose",/Pants/],["Schuhe",/Shoes/],["Haare",/Hair/]]},{id:"ch37",name:"Jody",kind:"Realistisch",top:1,parts:[["Shirt",/Shirt|Zipper/],["Hose",/Pants/],["Schuhe",/Sneakers/],["Haare",/Hair/]]},{id:"ch03",name:"Michelle",kind:"Realistisch"},{id:"soldier",name:"Soldat",kind:"Realistisch"},{id:"swat",name:"SWAT",kind:"Realistisch"},{id:"ch46",name:"Amy",kind:"Comic"},{id:"claire",name:"Claire",kind:"Comic"},{id:"kaya",name:"Rasta",kind:"Comic"},{id:"vegas",name:"Elvis",kind:"Comic"},{id:"ch43",name:"Wrestler",kind:"Comic"},{id:"ch14",name:"Fuchs",kind:"Comic"},{id:"tekmek",name:"TekMek",kind:"Realistisch",classic:1},{id:"hias",name:"HiAS",kind:"Realistisch",classic:1},{id:"ty",name:"Ty",kind:"Comic",top:1,parts:[["Pullover",/UpperBody/],["Hose",/LowerBody/],["Schuhe",/Shoes/],["Haare",/Hair/]]},{id:"granny",name:"Fitness-Oma",kind:"Comic"},{id:"mremireh",name:"Schuhkopf",kind:"Comic"},{id:"ch34",name:"Kobold",kind:"Comic"},{id:"pirate",name:"Pirat",kind:"Comic"},{id:"ch35",name:"Gasmaske",kind:"Realistisch"},{id:"xbot",name:"Roboter",kind:"Comic",parts:[["K\xF6rper",/Beta_Surface|Surface/],["Gelenke",/Joints/]]}],sd=["Keine","Basecap","M\xFCtze","Hut"],rd=["Keine","Sonnenbrille","Party-Brille"],Wr={b:"m",s:0,h:"hair_simpleparted",hc:"#2a1d15",beard:0,top:0,tc:"#ff2fb0",bot:0,bc:"#1b1c22",sh:0,shc:"#f2f2f2",ch:"",p:["","","",""],cap:0,capc:"#1b1c22",gl:0,chain:0,bag:0,bagc:"#ff2fb0",spk:0},hm=[[],[1,2],[1,2,3],[1]],um=[[],[4,5],[4,5,6]],dm=[[],[7]];function En(s){let e=Object.assign({},Wr,s||{});e.b=e.b==="f"?"f":"m",e.s=e.s?1:0,Qu.some(t=>t.id===e.h)||(e.h=Wr.h);for(let t of["top","bot","sh"])e[t]=Math.max(0,Math.min(t==="top"?3:t==="bot"?2:1,e[t]|0));for(let t of["hc","tc","bc","shc"])/^#[0-9a-f]{6}$/i.test(e[t]||"")||(e[t]=Wr[t]);e.beard=e.beard&&e.b==="m"?1:0,ss.some(t=>t.id===e.ch)||(e.ch=""),e.p=[0,1,2,3].map(t=>Array.isArray(e.p)&&/^#[0-9a-f]{6}$/i.test(e.p[t]||"")?e.p[t]:""),e.cap=Math.max(0,Math.min(sd.length-1,e.cap|0)),e.gl=Math.max(0,Math.min(rd.length-1,e.gl|0)),e.chain=e.chain?1:0,e.bag=e.bag?1:0,e.spk=e.spk?1:0;for(let t of["capc","bagc"])/^#[0-9a-f]{6}$/i.test(e[t]||"")||(e[t]=Wr[t]);return e.km=e.ch==="hias"&&e.km?e.km===2?2:1:0,e.kr=e.ch==="hias"&&e.kr?1:0,e.ks=e.ch==="hias"&&e.ks?1:0,e}function fm(s=Math.random,e=!0,t=!0){let n=s()<.5?"m":"f",i=a=>a[Math.floor(s()*a.length)],r=n==="m"?["hair_buzzed","hair_simpleparted","hair_long","","hair_buzzed"]:["hair_long","hair_buns","hair_buzzedfemale","hair_long","hair_simpleparted"],o={b:n,s:s()<.4?1:0,h:i(r),hc:i(id),beard:n==="m"&&s()<.35?1:0,top:e?1+Math.floor(s()*3):0,tc:i(Mn),bot:e?1+Math.floor(s()*2):0,bc:i(["#1b1c22","#23314f","#3a2e22","#4a4f58","#111111","#6b4a2e"]),sh:e?1:0,shc:i(["#f2f2f2","#111111","#ff2fb0","#20e0ff"])};return e&&(s()<.18&&(o.cap=1+Math.floor(s()*3),o.capc=i(Mn)),s()<.15&&(o.gl=1+Math.floor(s()*2)),s()<.12&&(o.chain=1)),e&&t&&s()<.35&&(o.ch=i(["remy","ch31","ch37","ch03","ch46","claire","kaya","vegas","ch43","ch14","ty","granny","mremireh","ch34","pirate","ch35","tekmek","hias"])),o}async function pm(s="/System/figuren/"){let e=new Hr,t=p=>new Promise((v,_)=>{let y=new Image;y.onload=()=>v(y),y.onerror=_,y.src=s+p}),[n,i,...r]=await Promise.all([e.loadAsync(s+"mann.gltf"),e.loadAsync(s+"frau.gltf"),...["hair_buzzed","hair_simpleparted","hair_long","hair_buns","hair_buzzedfemale","hair_beard"].map(p=>e.loadAsync(s+p+".gltf"))]),[o,a,l,c,u,h]=await Promise.all(["m_skin0.jpg","m_skin1.jpg","f_skin0.jpg","f_skin1.jpg","m_mask.png","f_mask.png"].map(t)),d=p=>{let v=document.createElement("canvas");v.width=p.width,v.height=p.height;let _=v.getContext("2d");return _.drawImage(p,0,0),_.getImageData(0,0,v.width,v.height)},f={};["hair_buzzed","hair_simpleparted","hair_long","hair_buns","hair_buzzedfemale","hair_beard"].forEach((p,v)=>f[p]=r[v]);let g=new dn().setFromObject(n.scene),x=1.8/(g.max.y-g.min.y),m={body:{m:n,f:i},hair:f,skins:{m:[d(o),d(a)],f:[d(l),d(c)]},masks:{m:d(u),f:d(h)},scale:x,tex:new Map,mats:new Map};try{let p=s+"mx/",v=await e.loadAsync(p+"anims.glb"),_=v.scene.getObjectByName("mixamorigHips"),y=m.mx={base:p,L:e,clips:{},xHip:_?_.position.length():1,chars:{xbot:v},wait:{},cache:new Map};for(let b of v.animations)y.clips[b.name]=b;let R=(()=>{try{return(JSON.parse(localStorage.getItem("operation-hias")||"{}").look||{}).ch||""}catch{return""}})();for(let b of ss)b.id&&b.id!=="xbot"&&!b.classic&&$o(m,b.id);R&&y.wait[R]&&await Promise.race([y.wait[R],new Promise(b=>setTimeout(b,9e3))])}catch(p){console.warn("Neue Figuren fehlen",p)}return m}var mm=new Set(["tekmek","hias"]);var xE={b:"m",h:"hair_long",hc:"#2b1d12",beard:1,dreads:1},yE={b:"m",s:1,h:"hair_buzzed",hc:"#7a5c40",beard:1,stub:1,fair:1,dreads:0},gm={tekmek:{top:1,tc:"#efefea",bot:2,bc:"#141414",sh:1,shc:"#1a1a1a",print:"",s:0},hias:{top:1,tc:"#121212",bot:1,bc:"#141414",sh:1,shc:"#1a1a1a",print:"blocks",s:0}};function $o(s,e){if(mm.has(e))return Promise.resolve(null);let t=s&&s.mx;return!t||!e?Promise.resolve(null):t.chars[e]?Promise.resolve(t.chars[e]):(t.wait[e]||(t.wait[e]=t.L.loadAsync(t.base+e+".glb").then(n=>(n.scene.traverse(i=>{let r=i.material?Array.isArray(i.material)?i.material:[i.material]:[];for(let o of r)o.metalness>.15&&(o.metalness=.15,o.needsUpdate=!0)}),t.chars[e]=n)).catch(n=>(console.warn("Figur fehlt",e,n),null))),t.wait[e])}var Xr=(s,e)=>!e||mm.has(e)||!!(s&&s.mx&&s.mx.chars[e]);function vE(s,e){let t=[e.b,e.s,e.top,e.tc,e.bot,e.bc,e.sh,e.shc,e.fair?"f":""].join("|");if(s.tex.has(t))return s.tex.get(t);let n=s.skins[e.b][e.s],i=s.masks[e.b],r=n.width,o=n.height,a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d"),c=l.createImageData(r,o),u=c.data,h=n.data,d=i.data,f=new Array(8).fill(null),g=p=>[parseInt(p.slice(1,3),16),parseInt(p.slice(3,5),16),parseInt(p.slice(5,7),16)];for(let p of hm[e.top])f[p]=g(e.tc);for(let p of um[e.bot])f[p]=g(e.bc);for(let p of dm[e.sh])f[p]=g(e.shc);let x=i.width/r;for(let p=0;p<o;p++)for(let v=0;v<r;v++){let _=(p*r+v)*4,y=(Math.floor(p*x)*i.width+Math.floor(v*x))*4,R=Math.round(d[y]/30),b=f[R];if(b){let w=(h[_]+h[_+1]+h[_+2])/765,P=.62+w*.55;u[_]=Math.min(255,b[0]*P),u[_+1]=Math.min(255,b[1]*P),u[_+2]=Math.min(255,b[2]*P)}else if(Math.abs(h[_]-h[_+1])<14&&Math.abs(h[_+1]-h[_+2])<14&&h[_]>80){let w=18+(h[_]-80)*.18;u[_]=w,u[_+1]=w,u[_+2]=w+3}else e.fair?(u[_]=Math.min(255,h[_]*1.22+22),u[_+1]=Math.min(255,h[_+1]*1.24+16),u[_+2]=Math.min(255,h[_+2]*1.26+12)):(u[_]=h[_],u[_+1]=h[_+1],u[_+2]=h[_+2]);u[_+3]=255}l.putImageData(c,0,0);let m=new en(a);return m.flipY=!1,m.colorSpace=ht,m.anisotropy=4,s.tex.set(t,m),m}function tm(s,e,t,n,i,r=1){for(let o of e.scene.getObjectsByProperty("isSkinnedMesh",!0)){let a=new ge({map:o.material.map,color:new Ae(i).multiplyScalar(2.2),roughness:.75,side:Pt,transparent:r<1,opacity:r,depthWrite:r>=1}),l=new wr(o.geometry,a),c=o.skeleton.bones.map(u=>t[u.name]||t.Head);l.bind(new Ar(c,o.skeleton.boneInverses),o.bindMatrix),l.frustumCulled=!1,l.castShadow=!0,n.add(l)}}function Fl(s,e,t=!1){let n=En(e);if(n.ch==="tekmek"?n=Object.assign({},n,xE,{ch:""}):n.ch==="hias"&&(n=Object.assign({},n,yE,{ch:""}),n.km&&Object.assign(n,{print:"",spk:0,chain:0,bag:0}),n.kr&&(n.cap=0)),n.ch&&s.mx&&s.mx.chars[n.ch]){n.spk&&(ss.find(o=>o.id===n.ch)||{}).top&&(n=Object.assign({},n,{p:n.p.slice()}),n.p[0]="#151515");let r=EE(s,n,t);return nm(r,n,!0),n.spk?Vr(r,n.ch):n.print==="burger"?Vr(r,n.ch,sm()):n.print==="blocks"&&Vr(r,n.ch,rm()),n.dreads&&om(r,n,!0),r}n.spk&&(n=Object.assign({},n,{top:1,tc:"#151515"}));let i=_E(s,n,t);return nm(i,n,!1),n.km&&RE(i,n.km===2),n.ks&&IE(i),n.kr&&CE(i),n.spk?Vr(i,"c"+n.b):n.print==="burger"?Vr(i,"c"+n.b,sm()):n.print==="blocks"&&Vr(i,"c"+n.b,rm()),n.dreads&&om(i,n,!1),i}function _E(s,e,t){let n=qo(s.body[e.b].scene);n.scale.setScalar(s.scale);let i={};n.traverse(l=>{l.isBone&&(i[l.name]=l)});let r=[],o=null,a=new Ae(e.hc).multiplyScalar(2.2);return n.traverse(l=>{if(!(l.isSkinnedMesh||l.isMesh))return;l.frustumCulled=!1,l.castShadow=!0;let c=l.material&&l.material.name||"";if(/Superhero/i.test(c)){o=l.parent;let u="body|"+[e.b,e.s,e.top,e.tc,e.bot,e.bc,e.sh,e.shc,e.fair?"f":""].join("|"),h=t&&s.mats.get(u);h||(h=l.material.clone(),h.map=vE(s,e),h.roughness=.62,h.metalness=0,h.needsUpdate=!0,t&&s.mats.set(u,h)),l.material=h,r.push(h)}else/Hair/i.test(c)&&(l.material=l.material.clone(),l.material.color=a.clone())}),o=o||n,e.h&&s.hair[e.h]&&tm(s,s.hair[e.h],i,o,e.hc),e.beard&&s.hair.hair_beard&&tm(s,s.hair.hair_beard,i,o,e.stub?"#6e5236":e.hc,e.stub?.4:1),{m:n,bones:i,mats:r,look:e}}var Zu={Head:"mixamorigHead",neck_01:"mixamorigNeck",spine_03:"mixamorigSpine2",spine_02:"mixamorigSpine1",spine_01:"mixamorigSpine",pelvis:"mixamorigHips",hand_r:"mixamorigRightHand",hand_l:"mixamorigLeftHand",foot_r:"mixamorigRightFoot",foot_l:"mixamorigLeftFoot"};function ME(s,e){let t=s.clone();return t.color=new Ae(e),t.userData.tint=1,t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
 vec4 sampledDiffuseColor = texture2D( map, vMapUv );
 float lumT = dot( sampledDiffuseColor.rgb, vec3( 0.299, 0.587, 0.114 ) );
 diffuseColor.rgb *= vec3( 0.18 + lumT * 1.5 );
 diffuseColor.a *= sampledDiffuseColor.a;
#endif`)},t.customProgramCacheKey=()=>"tint",t}function EE(s,e,t){let n=s.mx,i=n.chars[e.ch],r=ss.find(h=>h.id===e.ch)||{},o=qo(i.scene),a={};o.traverse(h=>{h.isBone&&(a[h.name]=h)});for(let h in Zu)a[Zu[h]]&&(a[h]=a[Zu[h]]);let l=[];o.traverse(h=>{if(!(h.isSkinnedMesh||h.isMesh))return;h.frustumCulled=!1,h.castShadow=!0;let d=(r.parts||[]).findIndex(([,f])=>f.test(h.name)||f.test(h.material&&h.material.name||""));if(d>=0&&e.p[d]){let f=e.ch+"|"+h.name+"|"+e.p[d],g=t&&s.mats.get(f);g||(g=ME(h.material,e.p[d]),t&&s.mats.set(f,g)),h.material=g}h.material&&h.material.map&&(h.material.map.anisotropy=4),l.push(h.material)});let c=a.mixamorigHips;o.userData.mxRig={id:e.ch,ratio:c?c.position.length()/n.xHip:1,mx:n},o.scale.setScalar(1),o.updateMatrixWorld(!0);let u=(a.Head||c||o).getWorldScale(new I).x||1;return{m:o,bones:a,mats:l,look:e,mx:!0,inv:1/u}}var bE=[[/Death/i,"die"],[/Hit/i,"hit"],[/Sprint/i,"sprint"],[/Jog|Run/i,"run"],[/Crouch_Fwd/i,"sneak"],[/Crouch|Fixing|Kneel/i,"crouch"],[/Walk/i,"walk"],[/Jump/i,"jump"],[/Dance/i,"dance"],[/Driv/i,"drive"],[/Sit/i,"sit"],[/Wave/i,"wave"],[/Interact|Push|Punch|PickUp|Spell|Sword/i,"use"]];function SE(s,e){let t=s.id+"|"+e.uuid,n=s.mx.cache.get(t);if(n)return n;let i=s.mx.clips[e.name]?e.name:"idle";if(!s.mx.clips[e.name]){for(let[o,a]of bE)if(o.test(e.name)){i=a;break}}let r=s.mx.clips[i]||s.mx.clips.idle;return n=new ii(e.name+"@mx",r.duration,r.tracks.filter(o=>o.name.endsWith(".quaternion")||o.name==="mixamorigHips.position").map(o=>{if(o.name!=="mixamorigHips.position")return o;let a=o.clone();for(let l=0;l<a.values.length;l++)a.values[l]*=s.ratio;return a})),n.userData={mx:1},s.mx.cache.set(t,n),n}if(!Un.prototype.__mxPatch){let s=Un.prototype.clipAction;Un.prototype.clipAction=function(e,t,n){let i=t||this._root,r=i&&i.userData&&i.userData.mxRig;return r&&e&&!(e.userData&&e.userData.mx)&&(e=SE(r,typeof e=="string"?ii.findByName(i,e)||{name:e,uuid:e}:e)),s.call(this,e,t,n)},Un.prototype.__mxPatch=1}var Ju=new Map,sn=(s,e={})=>{let t=s+JSON.stringify(e);return Ju.has(t)||Ju.set(t,new ge(Object.assign({color:s,roughness:.6},e))),Ju.get(t)};function nm(s,e,t){if(!e.cap&&!e.gl&&!e.chain&&!e.bag)return;let n=s.bones,i=n.Head;s.m.updateMatrixWorld(!0);let o=d=>d.getWorldPosition(new I),a=.24;t&&n.mixamorigHeadTop_End&&i&&(a=o(n.mixamorigHeadTop_End).distanceTo(o(i))||.24);let l=(d,f,g)=>{if(!d)return;let x=d.getWorldQuaternion(new Nt),m=d.getWorldScale(new I);f.position.copy(d.worldToLocal(g.clone())),f.quaternion.copy(x.invert().multiply(f.quaternion)),f.scale.divide(m),f.castShadow=!0,d.add(f)},c=()=>{let d=a*.62;return t||(d=.118),d};if(i){let d=o(i),f=c(),g=d.clone().add(new I(0,t?a*.72:.12,t?0:.005));if(e.cap===1){let x=new Xe,m=new F(new pt(f*1.05,18,10,0,Math.PI*2,0,Math.PI/2),sn(e.capc));m.scale.y=.72,x.add(m);let p=new F(new je(f*.9,f*.9,f*.06,18,1,!1,-Math.PI/2,Math.PI),sn(e.capc));p.scale.set(1,1,.75),p.position.set(0,0,f*.55),x.add(p);let v=new F(new pt(f*.08,8,6),sn(e.capc));v.position.y=f*.74,x.add(v),l(i,x,g.clone().add(new I(0,-f*.18,0)))}if(e.cap===2){let x=new Xe,m=new F(new pt(f*1.07,18,12,0,Math.PI*2,0,Math.PI*.55),sn(e.capc,{roughness:.95}));m.scale.y=.95,x.add(m);let p=new F(new Gt(f*1.02,f*.12,8,24),sn(e.capc,{roughness:.95}));p.rotation.x=Math.PI/2,p.position.y=f*.12,x.add(p);let v=new F(new pt(f*.25,10,8),sn("#f2f2f2",{roughness:1}));v.position.y=f*1.05,x.add(v),l(i,x,g.clone().add(new I(0,-f*.32,0)))}if(e.cap===3){let x=new Xe,m=new F(new je(f*.82,f*.98,f*.85,18),sn(e.capc));m.position.y=f*.42,x.add(m);let p=new F(new je(f*1.75,f*1.75,f*.06,24),sn(e.capc));x.add(p);let v=new F(new je(f*.99,f*.99,f*.18,18,1,!0),sn("#111111"));v.position.y=f*.12,x.add(v),l(i,x,g.clone().add(new I(0,-f*.08,0)))}if(e.gl){let x=new Xe,m=e.gl===1?sn("#050508",{roughness:.05,metalness:.8}):new De({color:[16723888,2154751,3800968][(e.capc||"").length%3],toneMapped:!1});for(let v of[-1,1]){let _=new F(e.gl===1?new pt(f*.34,14,10):new je(f*.33,f*.33,f*.06,5),m);e.gl===1?_.scale.set(1.15,.8,.35):_.rotation.x=Math.PI/2,_.position.set(v*f*.42,0,0),x.add(_)}let p=new F(new Oe(f*1.6,f*.06,f*.05),sn("#111111"));p.position.y=f*.1,x.add(p);for(let v of[-1,1]){let _=new F(new Oe(f*.05,f*.05,f*.95),sn("#111111"));_.position.set(v*f*.82,f*.08,-f*.48),x.add(_)}l(i,x,d.clone().add(new I(0,t?a*.36:.075,t?f*.98:.105)))}}let u=n.neck_01||i,h=n.spine_03;if(e.chain&&u){let d=o(u),f=t?a*.5:.11,g=new F(new Gt(f,f*.07,6,28),sn("#e8c45a",{metalness:1,roughness:.25}));g.rotation.x=Math.PI/2-.5;let x=new F(new je(f*.22,f*.22,f*.06,12),sn("#e8c45a",{metalness:1,roughness:.2}));x.rotation.x=Math.PI/2,x.position.set(0,-f*.95,f*.15);let m=new Xe;m.add(g,x),l(u,m,d.clone().add(new I(0,-f*.55,f*.35)))}if(e.bag&&h){let d=o(h),f=t?a*1.1:.24,g=new Xe,x=new F(new Oe(f*1.3,f*1.6,f*.6),sn(e.bagc));g.add(x);let m=new F(new Oe(f*1,f*.6,f*.25),sn(e.bagc));m.position.set(0,-f*.35,-f*.4),g.add(m);for(let p of[-1,1]){let v=new F(new Oe(f*.12,f*1.7,f*.05),sn("#151515"));v.position.set(p*f*.42,0,f*.32),g.add(v)}l(h,g,d.clone().add(new I(0,-f*.1,-f*.62)))}}var Ul=null,Nl=null,im=new Map,TE="/SPK%20-%20Fuck%20the%20Police/spiel/assets/spk_logo.png";function wE(){if(Nl)return Nl;let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d");(()=>{e.clearRect(0,0,256,256),e.fillStyle="#f2f2f2",e.font="900 78px Arial Black, Arial, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("S.P.K",128,128)})(),Ul=new en(s),Ul.colorSpace=ht;try{let n=new Image;n.onload=()=>{e.clearRect(0,0,256,256);let i=Math.min(240/n.width,240/n.height),r=n.width*i,o=n.height*i;e.drawImage(n,128-r/2,128-o/2,r,o),Ul.needsUpdate=!0},n.src=TE}catch{}return Nl=new ge({map:Ul,transparent:!0,alphaTest:.05,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),Nl}function Vr(s,e,t){let n=s.m,i=s.bones.spine_03||s.bones.spine_02;if(!i)return;n.updateMatrixWorld(!0);let r=i.getWorldPosition(new I),o=n.getWorldPosition(new I),a=im.get(e);if(!a){let d=r.y-o.y,f=-1e9,g=1e9,x=-1e9,m=new I;n.traverse(v=>{if(!v.isMesh||!v.geometry||!v.geometry.attributes.position)return;let _=v.geometry.attributes.position,y=Math.max(1,Math.floor(_.count/6e3));for(let R=0;R<_.count;R+=y)m.fromBufferAttribute(_,R).applyMatrix4(v.matrixWorld).sub(o),Math.abs(m.y-d)<.07&&Math.abs(m.x)<.25&&(Math.abs(m.x)<.05&&(f=Math.max(f,m.z)),m.z>0&&(g=Math.min(g,m.x),x=Math.max(x,m.x)))}),f<-1e8&&(f=.12);let p=x>g?x-g:.34;a={z:f,s:Math.max(.1,Math.min(.2,p*.55))},im.set(e,a)}let l=a.s*(t?1.45:1),c=new F(new at(l,l),t||wE());c.renderOrder=2;let u=i.getWorldQuaternion(new Nt),h=i.getWorldScale(new I);c.position.copy(i.worldToLocal(new I(o.x,r.y-a.s*(t?.02:.15),o.z+a.z+.018))),c.quaternion.copy(u.invert()),c.scale.divide(h),i.add(c)}var kl=null;function sm(){if(kl)return kl;let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d"),t=(i,r,o,a=30)=>{e.fillStyle=o,e.beginPath(),e.roundRect(28,i,200,r,a),e.fill()};t(52,46,"#b98a5a",[60,60,12,12]),t(98,12,"#6fae3c",6),t(110,12,"#c8443a",6),t(122,28,"#4a2c1c",10),t(150,10,"#e8c84a",4),t(160,34,"#b98a5a",[8,8,30,30]),e.fillStyle="#f6e8c8";for(let i=0;i<9;i++)e.beginPath(),e.ellipse(60+i*18,66+i%2*8,4,2,.4,0,7),e.fill();e.fillStyle="#c8302a",e.font="bold 22px Arial",e.textAlign="center",e.fillText("DJ TEKMEK",128,228);let n=new en(s);return n.colorSpace=ht,kl=new ge({map:n,transparent:!0,alphaTest:.05,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),kl}var Bl=null;function rm(){if(Bl)return Bl;let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d"),t=7,n=()=>(t=t*16807%2147483647)/2147483647;e.fillStyle="#ecece6",e.fillRect(34,8,188,240),e.fillStyle="#121212";for(let r=0;r<9;r++){let o=16+r*26+n()*6,a=7+n()*13;e.fillRect(40+n()*24,o,120+n()*56,a)}for(let r=0;r<260;r++)e.fillStyle=n()<.5?"rgba(18,18,18,0.8)":"rgba(236,236,230,0.9)",e.fillRect(34+n()*188,8+n()*240,2+n()*16,1+n()*3);let i=new en(s);return i.colorSpace=ht,Bl=new ge({map:i,transparent:!0,alphaTest:.05,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),Bl}function om(s,e,t){let n=s.bones.Head;if(!n)return;s.m.updateMatrixWorld(!0);let i=n.getWorldPosition(new I),r=.24;t&&s.bones.mixamorigHeadTop_End&&(r=s.bones.mixamorigHeadTop_End.getWorldPosition(new I).distanceTo(i)||.24);let o=t?r*.5:.1,a=i.y+(t?r*.45:.07),l=new ge({color:new Ae(e.hc||"#2b1d12").multiplyScalar(1.6),roughness:.95}),c=n.getWorldQuaternion(new Nt).invert(),u=n.getWorldScale(new I);for(let h=0;h<16;h++){let d=Math.PI*(.45+h/15*1.1)+Math.sin(h*7.3)*.08,f=h===1||h===14,g=(f?.42:.3)+h*37%10/40,x=new je(.016,.011,g,5);x.translate(0,-g/2,0);let m=new F(x,l);m.castShadow=!0;let p=new I(i.x+Math.sin(d)*o*1.05,a-Math.abs(Math.cos(d))*.02,i.z+Math.cos(d)*o*1.05);m.position.copy(n.worldToLocal(p.clone()));let v=new Nt().setFromEuler(new Ln(f?-.45:-Math.cos(d)*.25,0,Math.sin(d)*(f?.1:.25)));m.quaternion.copy(c.clone().multiply(v)),m.scale.set(1/u.x,1/u.y,1/u.z),n.add(m)}}var am=[[196,204,216],[130,96,210],[214,182,92],[232,234,240],[70,160,205]];function AE(s,e,t){let n="alien|"+e.getHexString()+"|"+t.join(",");if(s.tex.has(n))return s.tex.get(n);let i=s.skins.m[0],r=s.masks.m,o=i.width,a=i.height,l=document.createElement("canvas");l.width=o,l.height=a;let c=l.getContext("2d"),u=c.createImageData(o,a),h=u.data,d=i.data,f=r.data,g=r.width/o,x=new Array(8).fill(!1);for(let y of[...hm[2],...um[2],...dm[1]])x[y]=!0;let m=Math.round(e.r*255),p=Math.round(e.g*255),v=Math.round(e.b*255);for(let y=0;y<a;y++)for(let R=0;R<o;R++){let b=(y*o+R)*4,w=(Math.floor(y*g)*r.width+Math.floor(R*g))*4,P=Math.round(f[w]/30),S=(d[b]+d[b+1]+d[b+2])/765;if(x[P]){let E=.55+S*.6,L=y%64<3?.75:1;h[b]=Math.min(255,t[0]*E*L),h[b+1]=Math.min(255,t[1]*E*L),h[b+2]=Math.min(255,t[2]*E*L)}else{let E=.45+S*.85;h[b]=Math.min(255,m*E),h[b+1]=Math.min(255,p*E),h[b+2]=Math.min(255,v*E)}h[b+3]=255}c.putImageData(u,0,0);let _=new en(l);return _.flipY=!1,_.colorSpace=ht,_.anisotropy=4,s.tex.set(n,_),_}var lm=[8377946,5887648,10933834,4901064,10124799,7001706,14075978,5944575,14052020,4904570];function xm(s,e=0){let t=Fl(s,{b:"m",s:0,h:"",top:0,bot:0,sh:0},!1),n=new Ae(lm[e%lm.length]),i=new ge({map:AE(s,n,am[e%am.length]),roughness:.42,metalness:.2,emissive:n,emissiveIntensity:.08});t.m.traverse(o=>{if(!(o.isSkinnedMesh||o.isMesh))return;let a=o.material&&o.material.name||"";/Superhero/i.test(a)?o.material=i:o.visible=!1});let r=t.bones.Head;if(r){t.m.updateMatrixWorld(!0);let o=new I,a=new Nt,l=new I;r.matrixWorld.decompose(o,a,l);let c=t.m.scale.x,u=a.clone().invert(),h=(x,m,p=0)=>{let v=o.clone().add(m.clone().multiplyScalar(1));x.position.copy(r.worldToLocal(v));let _=new Nt().setFromEuler(new Ln(0,0,p));x.quaternion.copy(u.clone().multiply(_)),x.scale.divideScalar(l.x),r.add(x)},d=new ge({color:328968,roughness:.05,metalness:.7});for(let x of[-1,1]){let m=new F(new pt(.035,16,12),d);m.scale.set(1.15,.62,.5),h(m,new I(x*.042,.075,.095),x*.45)}let f=new ge({color:n,roughness:.4}),g=new De({color:11992970,toneMapped:!1});for(let x of[-1,1]){let m=new F(new je(.006,.008,.16,6),f);h(m,new I(x*.04,.25,0),-x*.3);let p=new F(new pt(.022,10,8),g);h(p,new I(x*.065,.33,0))}r.scale.multiplyScalar(1.45)}return t}var Kt={};function Ol(){if(Kt.velvet)return Kt;let s=(t,n,i)=>{let r=document.createElement("canvas");r.width=t,r.height=n,i(r.getContext("2d"),t,n);let o=new en(r);return o.colorSpace=ht,o.anisotropy=4,o};Kt.velvet=s(1024,1024,(t,n,i)=>{let r=t.createLinearGradient(0,0,n,0);r.addColorStop(0,"#5a0712"),r.addColorStop(.5,"#7a0c1a"),r.addColorStop(1,"#5a0712"),t.fillStyle=r,t.fillRect(0,0,n,i);for(let a=0;a<26e3;a++){let l=Math.random();t.fillStyle=l<.5?"rgba(30,0,4,.18)":"rgba(190,40,60,.12)",t.fillRect(Math.random()*n,Math.random()*i,1.5,3)}for(let a=0;a<18;a++){let l=Math.random()*n,c=t.createLinearGradient(l-30,0,l+30,0);c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(.5,"rgba(20,0,4,.28)"),c.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(l-30,0,60,i)}let o=a=>{t.save(),t.fillStyle="#6a0a16",t.fillRect(a,0,110,i),t.strokeStyle="#d9b25a",t.lineWidth=4,t.strokeRect(a+6,-5,98,i+10),t.strokeStyle="#e6c46e",t.fillStyle="#e6c46e",t.lineWidth=3.5;for(let l=0;l<i;l+=64){let c=a+55;t.beginPath(),t.moveTo(c,l),t.bezierCurveTo(c+34,l+14,c-34,l+46,c,l+64),t.stroke();for(let u of[-1,1])t.beginPath(),t.ellipse(c+u*22,l+32,11,5,u*.6,0,7),t.fill(),t.beginPath(),t.arc(c+u*34,l+16,3.5,0,7),t.fill()}t.restore()};o(0),o(n-110),t.strokeStyle="#d9b25a",t.lineWidth=10,t.beginPath(),t.moveTo(0,i-12),t.lineTo(n,i-12),t.stroke()}),Kt.lining=s(64,64,t=>{t.fillStyle="#c9a55a",t.fillRect(0,0,64,64);for(let n=0;n<300;n++)t.fillStyle=Math.random()<.5?"rgba(255,240,200,.25)":"rgba(120,80,20,.2)",t.fillRect(Math.random()*64,Math.random()*64,2,2)}),Kt.ermine=s(512,512,(t,n,i)=>{t.fillStyle="#f3eee4",t.fillRect(0,0,n,i);for(let r=0;r<9e3;r++)t.fillStyle=Math.random()<.5?"rgba(200,190,170,.25)":"rgba(255,255,255,.5)",t.fillRect(Math.random()*n,Math.random()*i,1,4);t.fillStyle="#121212";for(let r=0;r<6;r++)for(let o=0;o<6;o++){let a=(o+r%2*.5)*n/6+20,l=r*i/6+30;t.beginPath(),t.moveTo(a,l),t.quadraticCurveTo(a+9,l+18,a,l+34),t.quadraticCurveTo(a-9,l+18,a,l),t.fill()}}),Kt.ermine.wrapS=Kt.ermine.wrapT=wn,Kt.hair=(()=>{let t=document.createElement("canvas");t.width=t.height=256;let n=t.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,256,256);for(let r=0;r<14e3;r++){let o=Math.random()*255|0;n.fillStyle=`rgb(${o},${o},${o})`,n.fillRect(Math.random()*256,Math.random()*256,1.3,1.3)}let i=new en(t);return i.wrapS=i.wrapT=wn,i.repeat.set(6,6),i})(),Kt.gold=new ge({color:14463050,metalness:.85,roughness:.24,emissive:3811336,emissiveIntensity:.35}),Kt.ruby=new ge({color:11536412,roughness:.1,metalness:.2,emissive:4194312,emissiveIntensity:.6}),Kt.velvetM=new xn({map:Kt.velvet,roughness:.85,sheen:1,sheenColor:new Ae(16734832),sheenRoughness:.42,side:Tn}),Kt.liningM=new ge({map:Kt.lining,roughness:.35,metalness:.3,side:Ot}),Kt.fur=[];let e=9;for(let t=0;t<e;t++){let n=t/(e-1),i=new ge({map:Kt.ermine,alphaMap:Kt.hair,alphaTest:t?.12+n*.72:0,roughness:.95,color:new Ae().setScalar(.62+n*.4),side:Pt});Kt.fur.push(i)}return Kt}function cm(s,e,t){let n=Ol();s.computeVertexNormals();let i=s.attributes.position,r=s.attributes.normal;n.fur.forEach((o,a)=>{let l=s.clone(),c=l.attributes.position,u=e*a/(n.fur.length-1);for(let d=0;d<c.count;d++)c.setXYZ(d,i.getX(d)+r.getX(d)*u,i.getY(d)+r.getY(d)*u-u*u*3,i.getZ(d)+r.getZ(d)*u);let h=new F(l,o);h.castShadow=a===0,h.renderOrder=a,t.add(h)})}function Hl(s,e,t){let n=[],i=[],r=[];for(let a=0;a<=e;a++)for(let l=0;l<=s;l++){let c=l/s,u=a/e,[h,d,f]=t(c,u);n.push(h,d,f),i.push(c,1-u)}for(let a=0;a<e;a++)for(let l=0;l<s;l++){let c=a*(s+1)+l,u=c+1,h=c+s+1,d=h+1;r.push(c,h,u,u,h,d)}let o=new Tt;return o.setAttribute("position",new Qe(n,3)),o.setAttribute("uv",new Qe(i,2)),o.setIndex(r),o.computeVertexNormals(),o}function od(s,e){let t=s.getWorldQuaternion(new Nt),n=s.getWorldScale(new I);e.position.copy(s.worldToLocal(new I(0,0,0))),e.quaternion.copy(t.invert()),e.scale.set(1/n.x,1/n.y,1/n.z),s.add(e)}function RE(s,e){let t=s.bones,n=Ol();s.m.updateMatrixWorld(!0);let i=w=>w.getWorldPosition(new I),r=t.spine_03||t.spine_02,o=t.neck_01||t.Head;if(!r||!o)return;let a=i(o),l=t.upperarm_l,c=t.upperarm_r,u=l&&c?i(l).distanceTo(i(c))/2:.17,h=a.x,d=a.z-.015,f=a.y-.17,g=.09,x=w=>Math.PI*(e?.9-.08*w:.6-.08*w),m=(w,P,S)=>{let E=Math.pow(P,.9),L=u*1.22+(.31-u*1.22)*E,H=u*.7+(.26-u*.7)*E,D=1+(.012+.045*P)*Math.sin(w*13+P*2)+.02*P*Math.sin(w*5.3)+S;return[h+Math.sin(w)*L*D,f+(g-f)*P,d-.02*P+Math.cos(w)*H*D]},p=w=>(P,S)=>m(Math.PI+(P*2-1)*x(S),S,-w),v=new Xe,_=[],y=new F(Hl(64,30,p(0)),n.velvetM),R=new F(Hl(64,30,p(.012)),n.liningM);y.castShadow=!0,v.add(y,R),_.push(y,R);for(let w of[-1,1]){let S=Hl(6,30,(H,D)=>m(Math.PI+w*x(D)-w*.15*H,D,.012)),E=S.attributes.uv;for(let H=0;H<E.count;H++)E.setXY(H,E.getX(H)*.35,E.getY(H)*4);let L=v.children.length;cm(S,.026,v);for(let H=L;H<v.children.length;H++)_.push(v.children[H])}if(!e){let w=_.map(D=>D.geometry.attributes.position.array.slice()),P=_.map(D=>{let B=D.geometry.attributes.position.array,z=new Float32Array(B.length/3);for(let k=0;k<z.length;k++)z[k]=Math.pow(Math.max(0,Math.min(1,(f-B[k*3+1])/(f-g))),1.5);return z}),S=0,E=null,L=0,H=new I;y.onBeforeRender=()=>{let D=performance.now()/1e3;if(D-S<.012)return;let B=Math.min(.1,D-S);if(S=D,v.getWorldPosition(H),E){let te=Math.hypot(H.x-E.x,H.z-E.z)/Math.max(B,.001);L+=(Math.min(te,6)-L)*Math.min(1,B*4)}E=H.clone();let z=Math.min(.16,L*.035),k=.012+Math.min(.03,L*.008);_.forEach((te,q)=>{let pe=te.geometry.attributes.position.array,me=w[q],oe=P[q];for(let Re=0;Re<oe.length;Re++){let Ye=Re*3,ee=oe[Re];if(!ee)continue;let fe=me[Ye+1],K=me[Ye];pe[Ye]=K+Math.sin(D*1.3+fe*2.6+K*3)*k*.7*ee,pe[Ye+1]=fe+z*ee*ee*.35,pe[Ye+2]=me[Ye+2]-z*ee+Math.sin(D*1.7+fe*3.2+K*2)*k*ee}te.geometry.attributes.position.needsUpdate=!0})},y.frustumCulled=!1}let b=(w,P)=>{let S=.42+w*(Math.PI*2-.84),E=.078+(u*1.5-.078)*Math.min(1,P*1.45),L=a.y+.035-P*.27-Math.max(0,P-.55)*.07;return[h+Math.sin(S)*E,L,d+.01+Math.cos(S)*E*.78]};{let w=Hl(48,12,b),P=w.attributes.uv;for(let S=0;S<P.count;S++)P.setXY(S,P.getX(S)*3,P.getY(S)*.8);cm(w,.03,v)}{let w=new F(new Gt(.115,.007,6,40,Math.PI),n.gold);w.rotation.set(.35,0,Math.PI),w.position.set(h,a.y-.06,d+.07),v.add(w);for(let E=0;E<7;E++){let L=Math.PI*(.12+.76*E/6),H=new F(new pt(.008,8,6),n.ruby);H.position.set(h+Math.cos(L)*.115,a.y-.06-Math.sin(L)*.115*Math.cos(.35),d+.07+Math.sin(L)*.115*Math.sin(.35)),v.add(H)}let P=new F(new je(.032,.032,.008,24),n.gold);P.rotation.x=Math.PI/2-.25,P.position.set(h,a.y-.185,d+.115),v.add(P);let S=new F(new pt(.012,10,8),n.ruby);S.position.set(h,a.y-.185,d+.122),v.add(S)}od(r,v)}function CE(s){let e=s.bones,t=Ol(),n=e.Head;if(!n)return;s.m.updateMatrixWorld(!0);let i=n.getWorldPosition(new I),r=new Xe,o=.102,a=new F(new je(o*1.04,o,.05,32,1,!0),t.gold);a.position.y=.025,r.add(a);for(let f of[.002,.048]){let g=new F(new Gt(o*(f?1.04:1),.005,6,32),t.gold);g.rotation.x=Math.PI/2,g.position.y=f,r.add(g)}let l=new F(new pt(o*.98,24,10,0,Math.PI*2,0,Math.PI/2),t.velvetM);l.scale.y=.75,l.position.y=.035,r.add(l);for(let f=0;f<8;f++){let g=f/8*Math.PI*2,x=Math.cos(g),m=Math.sin(g),p=new F(new Is(.016,.06,4),t.gold);p.position.set(x*o*1.03,.078,m*o*1.03),r.add(p);let v=new F(new pt(.009,8,6),new ge({color:16183524,roughness:.25}));v.position.set(x*o*1.03,.112,m*o*1.03),r.add(v);let _=new F(new pt(.011,10,8),f%2?t.ruby:new ge({color:1065152,roughness:.1,emissive:530496,emissiveIntensity:.6}));_.position.set(x*o*1.06,.025,m*o*1.06),r.add(_)}for(let f of[0,Math.PI/2]){let g=new F(new Gt(o*.98,.006,6,24,Math.PI),t.gold);g.rotation.y=f,g.scale.y=.8,g.position.y=.04,r.add(g)}let c=new F(new pt(.016,12,10),t.gold);c.position.y=.04+o*.8+.014,r.add(c);let u=new F(new Oe(.006,.04,.006),t.gold);u.position.y=c.position.y+.028,r.add(u);let h=new F(new Oe(.026,.006,.006),t.gold);h.position.y=c.position.y+.032,r.add(h),r.traverse(f=>{f.isMesh&&(f.castShadow=!0)});let d=new Xe;d.add(r),r.position.set(i.x,i.y+PE,i.z-.005),r.rotation.x=-.12,od(n,d)}var PE=.15;function IE(s){let e=s.bones,t=Ol();s.m.updateMatrixWorld(!0);let n=e.hand_l,i=e.lowerarm_l;if(!n||!i)return;let r=n.getWorldPosition(new I),o=new I(-.5,.25,1).normalize(),a=new Xe,l=(h,d,f)=>{let g=new F(h,d);return g.position.y=f,g.castShadow=!0,a.add(g),g};l(new je(.011,.013,.66,14),t.gold,.08);for(let h of[-.2,0,.22,.33])l(new Gt(.014,.004,6,16),t.gold,h).rotation.x=Math.PI/2;l(new pt(.022,14,10),t.gold,-.26),l(new je(.02,.012,.05,12),t.gold,.39);let c=l(new pt(.036,18,14),t.gold,.44);l(new Gt(.037,.005,6,24),t.gold,.44);for(let h=0;h<4;h++){let d=h*Math.PI/2,f=new F(new Is(.012,.05,8),t.gold);f.position.set(Math.cos(d)*.03,.49,Math.sin(d)*.03),f.rotation.set(Math.sin(d)*.5,0,-Math.cos(d)*.5),a.add(f)}l(new Oe(.008,.07,.008),t.gold,.52),l(new Oe(.04,.008,.008),t.gold,.53);for(let[h,d]of[[0,1],[0,-1],[1,0],[-1,0]]){let f=new F(new pt(.009,8,6),t.ruby);f.position.set(h*.036,.44,d*.036),a.add(f)}let u=new Xe;u.add(a),a.quaternion.setFromUnitVectors(new I(0,1,0),o),a.position.copy(r).add(new I(0,-.01,.03)),od(n,u)}var ad=["Waldrave Acid","Blaulicht Hardtechno","Sonnenaufgang","Schranz Attacke","Hardtekk SPK","Acid Nacht","Minimal im Unterholz","Industrial Wald"],LE=s=>encodeURI("/SPK - Fuck the Police/spiel/musik/tekkno"+(s+1)+".mp3"),ym=5;function vm(s){let{scene:e,camera:t,me:n,djFrames:i,net:r,toast:o,canvasTex:a,$:l}=s,c=s.CL,u=s.FIG,h=new I(0,0,8.6),d={waves:0,rad:{s:0,p:!0,v:.7,o:0,at:0},jumped:new Set,anims:[],aliens:[],built:!1},f=new Xe;f.visible=!1,e.add(f);{let U=[[0,-.5],[1.8,-.38],[3,-.04],[3.15,.04],[2.8,.25],[1.6,.46],[0,.5]].map(M=>new de(M[0],M[1])),W=new F(new Ps(U,48),new ge({color:13687012,roughness:.3,metalness:.55,emissive:3819104,emissiveIntensity:.7}));f.add(W);let O=new F(new pt(1.25,32,16,0,Math.PI*2,0,Math.PI/2),new ge({color:8388560,roughness:.05,transparent:!0,opacity:.55,emissive:2792048,emissiveIntensity:.9}));O.position.y=.42,f.add(O),f.rim=[];for(let M=0;M<16;M++){let N=M/16*Math.PI*2,$=new F(new pt(.12,10,8),new De({color:16777215,toneMapped:!1}));$.position.set(Math.cos(N)*2.95,.04,Math.sin(N)*2.95),f.add($),f.rim.push($)}let T=new F(new ni(1,32),new De({color:11992986,toneMapped:!1}));T.rotation.x=Math.PI/2,T.position.y=-.51,f.add(T)}let g=a(64,256,U=>{let W=U.createLinearGradient(0,0,0,256);W.addColorStop(0,"rgba(255,255,255,0.95)"),W.addColorStop(1,"rgba(255,255,255,0.3)"),U.fillStyle=W,U.fillRect(0,0,64,256);for(let O=0;O<40;O++)U.fillStyle="rgba(255,255,255,0.25)",U.fillRect(Math.random()*64,Math.random()*256,2,30)});g.wrapS=g.wrapT=wn;let x=new De({map:g,color:11992986,transparent:!0,opacity:0,blending:ti,depthWrite:!1,side:Pt,toneMapped:!1,fog:!1}),m=new F(new je(1,2.4,1,32,1,!0),x);m.visible=!1,e.add(m);let p=new yn(10223482,0,14,1.6);e.add(p);let v=new Xe;v.position.copy(h),v.visible=!1,e.add(v);let _=a(256,64,()=>{});{let U=new Xe;U.scale.setScalar(1.35),U.position.y=0,v.add(U),v.R=U;let W=new ge({color:1447452,roughness:.5,metalness:.4}),O=new ge({color:13685980,roughness:.2,metalness:.95}),T=new F(new Oe(1.3,.72,.38),W);T.position.y=.42,U.add(T);let M=new F(new at(1.26,.68),new ge({color:2368556,roughness:.7}));M.position.set(0,.42,.191),U.add(M),v.cones=[];for(let be of[-.38,.38]){let ne=new F(new Gt(.22,.025,8,32),O);ne.position.set(be,.4,.2),U.add(ne);let _e=new F(new ni(.2,32),new ge({color:657932,roughness:.9}));_e.position.set(be,.4,.195),U.add(_e);let qe=new F(new ni(.06,16),new ge({color:3158074,metalness:.6}));qe.position.set(be,.4,.2),U.add(qe),v.cones.push(_e,qe)}let N=new F(new at(.42,.11),new De({map:_,toneMapped:!1}));N.position.set(0,.68,.195),U.add(N);for(let be=0;be<5;be++){let ne=new F(new Oe(.06,.03,.05),O);ne.position.set(-.12+be*.06,.8,.12),U.add(ne)}let $=new F(new Gt(.42,.03,8,24,Math.PI),O);$.position.set(0,.78,0),U.add($);let le=new F(new je(.008,.008,.9,6),O);le.position.set(.55,1.15,-.1),le.rotation.z=-.35,U.add(le);for(let be of[-.55,.55]){let ne=new F(new Oe(.1,.06,.3),W);ne.position.set(be,.03,0),U.add(ne)}let Q=new F(new at(1.26,.03),new De({color:16723888,toneMapped:!1}));Q.position.set(0,.07,.195),U.add(Q),v.glow=Q}v.lookAt(0,0,0);let y=new F(new Oe(2,1.4,1),new De({transparent:!0,opacity:0,depthWrite:!1}));y.position.y=.6,v.add(y),y.userData.aim={radio:!0};let R=new Xe;R.position.copy(h).add(new I(1.7,0,-.6)),R.visible=!1,e.add(R);{let U=new F(new Oe(.35,.22,.3),new ge({color:1118486,metalness:.5,roughness:.4}));U.position.y=.11,R.add(U);let W=new F(new ni(.06,16),new De({color:3800968,toneMapped:!1}));W.position.set(0,.16,.151),R.add(W),R.lens=W,R.beams=[];let O=[16723888,3800968,2154751,16724016,11566079,16769583];for(let T=0;T<9;T++){let M=new Xe;M.position.y=.18;let N=new F(new je(.012,.012,22,4,1,!0),new De({color:O[T%O.length],transparent:!0,opacity:.8,blending:ti,depthWrite:!1,toneMapped:!1}));N.position.y=11,M.add(N),R.add(M),R.beams.push(M)}R.light=new yn(3800968,0,12,1.5),R.light.position.y=1.5,R.add(R.light)}function b(U){let W=xm(u,U);W.m.rotation.y=Math.PI;let O=new Xe;O.add(W.m),e.add(O);let T=new Un(W.m),M={};for(let Q of["dance","idle","use","walk"])c[Q]&&(M[Q]=T.clipAction(c[Q]),M[Q].play(),M[Q].setEffectiveWeight(Q==="idle"?1:0));M.dance&&(M.dance.time=Math.random()*M.dance.getClip().duration);let N=Math.PI+U/10*Math.PI*2+U%2*.3,$=2.4+(U>=4?1:0)+(U>=8?.9:0),le=h.clone().add(new I(Math.sin(N)*$,0,Math.cos(N)*$));return{root:O,mixer:T,acts:M,cur:"idle",spot:le,i:U,w:{idle:1}}}function w(U,W){!U.acts[W]||U.cur===W||(U.cur=W)}function P(U,W){for(let O in U.acts){let T=O===U.cur?1:0;U.w[O]=(U.w[O]||0)+(T-(U.w[O]||0))*Math.min(1,W*6),U.acts[O].setEffectiveWeight(U.w[O])}U.mixer.update(W)}let S={t:-1,wave:0,list:[]};function E(U,W){for(;d.aliens.length<U*2;)d.aliens.push(b(d.aliens.length));if(d.waves=Math.max(d.waves,U),W){for(let O of d.aliens)O.root.position.copy(O.spot),L(O),w(O,"dance");v.visible=R.visible=!0;return}S.t=0,S.wave=U,S.list=d.aliens.slice((U-1)*2,U*2);for(let O of S.list)O.root.visible=!1;pe(),me(!0),o(U===1?"\u{1F47D} Was ist DAS?! Ein UFO landet im Portal!":"\u{1F47D} Noch mehr Aliens kommen zur Party! ("+U*2+" Aliens)")}function L(U){let W=h.clone().sub(U.root.position);U.root.rotation.y=Math.atan2(-W.x,-W.z)}let H=new I(0,34,8.6),D=new I(h.x,8.2,h.z);function B(U,W){if(S.t<0)return;S.t+=U;let O=S.t,T=N=>N<0?0:N>1?1:N*N*(3-2*N);f.visible=O<15,O<4?f.position.lerpVectors(H,D,T(O/4)):O<12?(f.position.copy(D),f.position.y+=Math.sin(O*1.6)*.2):f.position.lerpVectors(D,H,T((O-12)/3)),f.rotation.y+=U*1.5,f.rim.forEach((N,$)=>N.material.color.setHSL(($/16+O*.5)%1,1,.6));let M=O>4.5&&O<11.5?Math.min(1,(O-4.5)*2,(11.5-O)*2):0;if(m.visible=M>.01,m.visible){let N=f.position.y-.5;m.position.set(f.position.x,N/2,f.position.z),m.scale.set(1,N,1),x.opacity=.4*M,g.offset.y-=U*.6}p.position.set(h.x,2.5,h.z),p.intensity=25*M,S.list.forEach((N,$)=>{let le=$*.4;if(O<5+le){N.root.visible=!1;return}if(N.root.visible=!0,O<8+le){let Q=T((O-5-le)/3);N.root.position.set(h.x+($?.8:-.8),Sl.lerp(D.y-1.2,0,Q),h.z),N.root.rotation.y=O*2+$,w(N,"idle")}else if(O<10+le){let Q=T((O-8-le)/2),be=new I(h.x+($?.8:-.8),0,h.z);N.root.position.lerpVectors(be,N.spot,Q);let ne=N.spot.clone().sub(be);N.root.rotation.y=Math.atan2(-ne.x,-ne.z),w(N,"walk")}else S.wave===1&&O<12.5?(N.root.position.copy(N.spot),L(N),w(N,"use")):(N.root.position.copy(N.spot),L(N),w(N,"dance"))}),S.wave===1&&O>10.3&&!v.visible&&(v.visible=R.visible=!0,v.R.scale.setScalar(.01)),v.visible&&v.R.scale.x<1.35&&v.R.scale.setScalar(Math.min(1.35,v.R.scale.x+U*1.6)),S.wave===1&&O>12.5&&!d.started&&Re()&&(d.started=!0,d.rad={s:Math.floor(Math.random()*8),p:!0,v:.7,o:0,at:oe()},fe(),ee()),O>15&&(S.t=-1,f.visible=!1,m.visible=!1,p.intensity=0,me(!1))}let z=null,k=null,te=null,q=null;function pe(){let U=s.audio();if(!(!U||z)){z=new Audio,z.crossOrigin="anonymous",z.loop=!1,z.preload="auto",z.addEventListener("ended",()=>{Re()&&(d.rad.s=(d.rad.s+1)%8,d.rad.o=0,d.rad.at=oe(),fe(),ee())});try{let W=U.AC.createMediaElementSource(z);k=U.AC.createPanner(),k.panningModel="HRTF",k.distanceModel="inverse",k.refDistance=5,k.rolloffFactor=1.1,k.maxDistance=60,q=U.AC.createGain(),q.gain.value=.7,W.connect(q),q.connect(k),k.connect(U.master);let O=v.position;k.positionX?(k.positionX.value=O.x,k.positionY.value=1,k.positionZ.value=O.z):k.setPosition(O.x,1,O.z)}catch(W){console.warn("Radio-Ton",W)}}}function me(U){let W=s.audio();if(W){if(!te){te=W.AC.createGain(),te.gain.value=0,te.connect(W.master);let O=W.AC.createOscillator();O.type="sawtooth",O.frequency.value=62;let T=W.AC.createOscillator();T.frequency.value=5;let M=W.AC.createGain();M.gain.value=9,T.connect(M),M.connect(O.frequency);let N=W.AC.createBiquadFilter();N.type="lowpass",N.frequency.value=700,O.connect(N),N.connect(te),O.start(),T.start()}te.gain.setTargetAtTime(U?.12:0,W.AC.currentTime,.4)}}let oe=()=>Date.now()/1e3,Re=()=>r.role==="host"||r.role==="none"||!r.role;function Ye(){return d.rad.o+(d.rad.p?Math.max(0,oe()-d.rad.at):0)}function ee(){if(pe(),!z)return;let U=LE(d.rad.s);z.src.endsWith(U.split("/").pop())||(z.src=U),q?q.gain.value=d.rad.v:z.volume=d.rad.v;let W=Ye(),O=()=>{try{Math.abs(z.currentTime-W)>1.5&&isFinite(z.duration)&&W<z.duration&&(z.currentTime=W)}catch{}};if(z.readyState>=1?O():z.addEventListener("loadedmetadata",O,{once:!0}),d.rad.p){let T=z.play();T&&T.catch&&T.catch(()=>{})}else z.pause();ye()}function fe(){if(r.role!=="host")return;let U={t:"rad",s:Object.assign({},d.rad,{o:Ye()}),n:d.waves};for(let W of r.conns.values())try{W.conn.send(U)}catch{}}function K(U){let W=d.rad,O=Ye();U==="next"?(W.s=(W.s+1)%8,W.o=0,W.p=!0):U==="prev"?(W.s=(W.s+7)%8,W.o=0,W.p=!0):U==="toggle"?(W.o=O,W.p=!W.p):U==="up"?(W.v=Math.min(1,Math.round((W.v+.1)*10)/10),W.o=O):U==="down"&&(W.v=Math.max(0,Math.round((W.v-.1)*10)/10),W.o=O),U!=="up"&&U!=="down"&&U!=="toggle"&&(W.o=0),W.at=oe(),fe(),ee(),Ce()}function re(U){if(r.role==="client"&&r.conn)try{r.conn.send({t:"radc",c:U})}catch{}else K(U)}function ye(){let U=_.image.getContext("2d");U.fillStyle="#05140a",U.fillRect(0,0,256,64),U.fillStyle="#39ff88",U.font="700 22px Consolas, monospace",U.fillText((d.rad.p?"\u25B6 ":"\u275A\u275A ")+ad[d.rad.s],8,28),U.font="16px Consolas, monospace",U.fillText("VOL "+"\u2588".repeat(Math.round(d.rad.v*10))+"\u2591".repeat(10-Math.round(d.rad.v*10)),8,52),_.needsUpdate=!0}document.body.insertAdjacentHTML("beforeend",`<div id="radBox" class="hidden" style="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:60;background:rgba(14,12,22,.96);border:1px solid rgba(255,255,255,.18);border-radius:18px;padding:18px 20px;width:min(420px,92vw);text-align:center;color:#fff;font-family:'Segoe UI',sans-serif">
   <div style="font:400 32px Impact,'Arial Black',sans-serif;color:#39ff88;letter-spacing:.05em">\u{1F47D} ALIEN-RADIO</div><div id="radSong" style="margin:8px 0 14px;font-size:16px;color:#d8d0e6"></div>
   <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">${[["prev","\u23EE"],["toggle","\u23EF"],["next","\u23ED"],["down","\u{1F509}"],["up","\u{1F50A}"]].map(([U,W])=>`<button data-rc="${U}" style="width:62px;height:54px;border-radius:12px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;font-size:24px;cursor:pointer">${W}</button>`).join("")}</div>
   <div id="radVol" style="margin-top:12px;font:14px Consolas,monospace;color:#39ff88"></div><p style="font-size:12px;color:#8e869f;margin-top:10px">Alle im Raum h\xF6ren das Radio \xB7 je n\xE4her, desto lauter</p>
   <button id="radClose" style="margin-top:8px;padding:10px 26px;border-radius:12px;border:0;background:linear-gradient(135deg,#ff2fb0,#b81cff);color:#fff;font:800 15px 'Segoe UI';cursor:pointer">Fertig</button></div>`);for(let U of document.querySelectorAll("[data-rc]"))U.onclick=W=>{W.stopPropagation(),re(U.dataset.rc)};function Ce(){l("radSong").textContent=(d.rad.p?"\u25B6 ":"\u275A\u275A ")+ad[d.rad.s],l("radVol").textContent="Lautst\xE4rke "+Math.round(d.rad.v*100)+"%"}function we(){Ce(),l("radBox").classList.remove("hidden"),s.unlock()}l("radClose").onclick=()=>{l("radBox").classList.add("hidden"),s.relock()};function $e(){for(let U of i){let W=U.g.position;if(Math.hypot(n.pos.x-W.x,n.pos.z-W.z)<3.6&&!d.jumped.has(U.i)){d.jumped.add(U.i),U.edge.material.color.setHex(3800968),setTimeout(()=>U.edge.material.color.setHex(16723888),900);let T=s.audio();if(T){let M=T.AC.createOscillator(),N=T.AC.createGain();M.type="triangle",M.frequency.value=440*Math.pow(2,d.jumped.size/8),N.gain.setValueAtTime(.12,T.AC.currentTime),N.gain.exponentialRampToValueAtTime(1e-4,T.AC.currentTime+.4),M.connect(N),N.connect(T.master),M.start(),M.stop(T.AC.currentTime+.45)}i.length&&d.jumped.size>=i.length&&(d.jumped.clear(),ce())}}}function ce(){if(d.waves>=ym){o("\u{1F47D} Die Tanzfl\xE4che ist voll \u2013 mehr Aliens passen nicht ins Portal!");return}if(r.role==="client"&&r.conn){try{r.conn.send({t:"ufo"})}catch{}return}ve()}function ve(){if(d.waves>=ym||S.t>=0)return;let U=d.waves+1;if(d.waves=U,r.role==="host")for(let W of r.conns.values())try{W.conn.send({t:"ufo",n:U})}catch{}E(U,!1)}let A=new I,j=new I;function Y(U,W){B(U,W);for(let O of d.aliens)P(O,O.cur==="dance"?U*1.05:U);if(d.started||v.visible){let O=s.audio(),T=s.bass?s.bass():.5+.5*Math.sin(W*8),M=d.rad.p;v.cones.forEach((N,$)=>N.scale.setScalar(1+(M&&Math.sin(W*15.7)>.6?.08:0))),v.glow.material.color.setHSL(W*.15%1,1,.55),R.beams.forEach((N,$)=>{N.visible=M&&v.visible,N.rotation.z=Math.sin(W*(.7+$*.11)+$)*.9,N.rotation.x=Math.cos(W*(.5+$*.07)+$*2)*.6}),R.light.intensity=M&&v.visible?8+Math.sin(W*9)*4:0,R.light.color.setHSL(W*.2%1,1,.5),R.lens.material.color.setHSL(W*.3%1,1,.55);for(let N of d.aliens)N.cur==="dance"&&(N.root.position.y=0);if(O&&O.AC&&O.AC.listener){let N=O.AC.listener;t.getWorldDirection(A),j.set(0,1,0),N.positionX?(N.positionX.value=t.position.x,N.positionY.value=t.position.y,N.positionZ.value=t.position.z,N.forwardX.value=A.x,N.forwardY.value=A.y,N.forwardZ.value=A.z,N.upX.value=0,N.upY.value=1,N.upZ.value=0):(N.setPosition(t.position.x,t.position.y,t.position.z),N.setOrientation(A.x,A.y,A.z,0,1,0))}}r.role==="host"&&d.started&&(d.syncT=(d.syncT||0)+U)>6&&(d.syncT=0,d.rad.o=Ye(),d.rad.at=oe(),fe())}function he(U){if(!v.visible)return;let W=[{x:v.position.x,z:v.position.z,r:1},{x:R.position.x,z:R.position.z,r:.4},...d.aliens.filter(O=>O.root.visible).map(O=>({x:O.root.position.x,z:O.root.position.z,r:.35}))];for(let O of W){let T=U.x-O.x,M=U.z-O.z,N=Math.hypot(T,M),$=O.r+.35;N<$&&N>1e-4&&(U.x=O.x+T/N*$,U.z=O.z+M/N*$)}}return{tick:Y,jump:$e,collide:he,openRadio:we,targets:()=>v.visible?[y]:[],prompt:U=>`<b style="color:#39ff88">\u{1F47D} Alien-Radio</b> \xB7 ${ad[d.rad.s]}<br><small>${U?"Tippe auf <kbd>E</kbd>":"<kbd>E</kbd>"} = bedienen (Song, Lautst\xE4rke)</small>`,state:()=>({n:d.waves,rad:Object.assign({},d.rad,{o:Ye(),at:oe()})}),setState(U){U.n>0&&(E(U.n,!0),d.started=!0,d.rad=Object.assign({},U.rad,{at:oe()}),ee())},remoteWave(U){U>d.waves&&E(U,!1)},setRad(U,W){W>d.waves&&S.t<0&&E(W,!0),d.rad=Object.assign({},U,{at:oe()}),d.started=!0,ee(),Ce()},hostRequest:()=>ve(),control:K}}function _m(s){let e=new Xe,t=.8,n=new Di,i=[[-.42,0],[.4,0],[.4,.86],[.52,.93],[.5,1],[.24,1.06],[.13,1.5],[.24,1.52],[.24,1.75],[-.42,1.75]];n.moveTo(i[0][0],i[0][1]);for(let K of i.slice(1))n.lineTo(K[0],K[1]);n.closePath();let r=new Pr(n,{depth:t,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2});r.rotateY(-Math.PI/2),r.translate(t/2,0,0);let o=new ge({color:1379366,roughness:.35,metalness:.3}),a=new F(r,o);a.castShadow=!0,a.receiveShadow=!0,e.add(a);let l=s(512,1024,(K,re,ye)=>{K.clearRect(0,0,re,ye),["#ff2fb0","#b81cff","#20e0ff"].forEach((we,$e)=>{K.strokeStyle=we,K.lineWidth=26,K.shadowColor=we,K.shadowBlur=30,K.beginPath(),K.moveTo(-40,980-$e*60),K.bezierCurveTo(160,760-$e*60,300,520-$e*60,560,380-$e*60),K.stroke()}),K.shadowBlur=0,K.save(),K.translate(250,560),K.rotate(-Math.PI/2),K.font='900 150px Impact, "Arial Black"',K.textAlign="center",K.textBaseline="middle",K.lineWidth=10,K.strokeStyle="#000",K.strokeText("ARCADE",0,0),K.fillStyle="#ffd23f",K.fillText("ARCADE",0,0),K.restore();for(let we=0;we<40;we++)K.fillStyle="rgba(255,255,255,"+(.3+Math.random()*.5)+")",K.fillRect(Math.random()*re,Math.random()*ye*.5,4,4)}),c=new ge({map:l,transparent:!0,emissive:16777215,emissiveMap:l,emissiveIntensity:.6,roughness:.5});for(let K of[-1,1]){let re=new F(new at(.88,1.72),c);re.position.set(K*(t/2+.014),.87,-.04),re.rotation.y=K*Math.PI/2,e.add(re)}let u=new De({color:16723888,toneMapped:!1});for(let K of[-1,1]){let re=new F(new Oe(.02,.86,.02),u);re.position.set(K*(t/2+.01),.43,.405),e.add(re)}let h=document.createElement("canvas");h.width=320,h.height=240;let d=h.getContext("2d"),f=new en(h);f.colorSpace=ht,f.magFilter=Jt,f.minFilter=un;let g=new F(new at(.7,.47),new ge({color:328456,roughness:.3})),x=Math.atan2(.11,.44);g.position.set(0,1.28,.185+.02),g.rotation.x=-x,e.add(g);let m=new F(new at(.58,.4),new De({map:f,toneMapped:!1}));m.position.set(0,1.28,.21),m.rotation.x=-x,e.add(m);let p=new F(new at(.58,.4),new ge({color:16777215,transparent:!0,opacity:.06,roughness:.05,metalness:.9,depthWrite:!1}));p.position.set(0,1.28,.214),p.rotation.x=-x,e.add(p);let v=s(512,128,(K,re,ye)=>{let Ce=K.createLinearGradient(0,0,re,0);Ce.addColorStop(0,"#2a0050"),Ce.addColorStop(.5,"#5a0a6a"),Ce.addColorStop(1,"#2a0050"),K.fillStyle=Ce,K.fillRect(0,0,re,ye),K.font='900 76px Impact, "Arial Black"',K.textAlign="center",K.textBaseline="middle",K.shadowColor="#ff2fb0",K.shadowBlur=24,K.fillStyle="#ff7fd8",K.fillText("SPK ARCADE",re/2,ye/2+4),K.shadowBlur=0,K.fillStyle="#ffd23f";for(let we=0;we<18;we++)K.beginPath(),K.arc(16+we*28.5,8,4,0,7),K.fill(),K.beginPath(),K.arc(16+we*28.5,ye-8,4,0,7),K.fill()}),_=new De({map:v,toneMapped:!1}),y=new F(new at(.76,.2),_);y.position.set(0,1.635,.252+.002),e.add(y);let R=Math.atan2(.06,.26),b=new Xe;b.position.set(0,1.03,.37),b.rotation.x=R,e.add(b);let w=s(256,96,(K,re,ye)=>{K.fillStyle="#1a1030",K.fillRect(0,0,re,ye),K.strokeStyle="#20e0ff",K.lineWidth=3,K.strokeRect(4,4,re-8,ye-8),K.fillStyle="#ff2fb0",K.font="700 14px Arial",K.fillText("1 PLAYER",14,22)}),P=new F(new at(.78,.27),new ge({map:w,roughness:.6}));P.rotation.x=-Math.PI/2,P.position.y=.016,b.add(P);let S=new F(new je(.012,.012,.09,8),new ge({color:2236962,metalness:.8,roughness:.3}));S.position.set(-.22,.05,.02),b.add(S);let E=new F(new pt(.03,16,12),new ge({color:14688288,roughness:.25}));E.position.set(-.22,.1,.02),b.add(E);let H=[16723888,2154751,16765503,3800968].map((K,re)=>{let ye=new F(new je(.022,.022,.025,16),new ge({color:K,emissive:K,emissiveIntensity:.5,roughness:.3}));return ye.position.set(.02+re%2*.07+Math.floor(re/2)*.14,.014,re%2*.05-.02),b.add(ye),ye}),D=new F(new at(.34,.3),new ge({color:2763312,metalness:.7,roughness:.35}));D.position.set(0,.5,.418),e.add(D);for(let K of[-.07,.07]){let re=new F(new at(.05,.08),new De({color:16747050,toneMapped:!1}));re.position.set(K,.55,.42),e.add(re)}let B=new yn(8023551,2.2,4,1.6);B.position.set(0,1.3,.7),e.add(B);let z=s(128,128,K=>{let re=K.createRadialGradient(64,64,0,64,64,64);re.addColorStop(0,"rgba(255,47,176,0.6)"),re.addColorStop(1,"rgba(255,47,176,0)"),K.fillStyle=re,K.fillRect(0,0,128,128)}),k=new F(new at(2.2,2.2),new De({map:z,transparent:!0,depthWrite:!1,blending:ti}));k.rotation.x=-Math.PI/2,k.position.set(0,.015,.35),e.add(k);let te=new F(new Oe(t+.3,1.9,1.1),new De({transparent:!0,opacity:0,depthWrite:!1}));te.position.set(0,.95,0),e.add(te);let q=[[10,8],[9,8],[8,8],[7,8]],pe=[1,0],me=[20,10],oe=0,Re=0,Ye=["#ff2fb0","#20e0ff","#ffd23f","#39ff88"];function ee(K){d.fillStyle="#05030c",d.fillRect(0,0,320,240);for(let ye=0;ye<30;ye++)d.fillStyle=ye%3?"#2a2448":"#4a4478",d.fillRect((ye*97+K*20)%320,ye*53%240,2,2);let re=10;d.fillStyle="#ff3a3a",d.fillRect(me[0]*re+2,me[1]*re+2,6,6),q.forEach(([ye,Ce],we)=>{d.fillStyle=we?"#39ff88":"#9dffb8",d.fillRect(ye*re+1,Ce*re+1,8,8)}),d.font='bold 34px "Courier New", monospace',d.textAlign="center",d.fillStyle="#000",d.fillText("SPK ARCADE",162,62),d.fillStyle=Ye[Math.floor(K*2)%4],d.fillText("SPK ARCADE",160,60),d.font='bold 13px "Courier New", monospace',d.fillStyle="#f4f0ff",["SNAKE","PARTY-JAGD","PING-PONG","B\xD6LLER-BATTLE"].forEach((ye,Ce)=>d.fillText(ye,160,120+Ce*18)),Math.floor(K*2)%2&&(d.font='bold 16px "Courier New", monospace',d.fillStyle="#ffd23f",d.fillText("KLICK ODER E ZUM SPIELEN",160,220)),d.fillStyle="rgba(0,0,0,0.25)";for(let ye=0;ye<240;ye+=3)d.fillRect(0,ye,320,1);f.needsUpdate=!0}function fe(){let K=q[0],re=[[1,0],[-1,0],[0,1],[0,-1]].filter(Ce=>!(Ce[0]===-pe[0]&&Ce[1]===-pe[1])).filter(Ce=>{let we=K[0]+Ce[0],$e=K[1]+Ce[1];return we>=0&&$e>=0&&we<32&&$e<24&&!q.some(ce=>ce[0]===we&&ce[1]===$e)});if(!re.length){q.length=4,q[0]=[10,8];return}re.sort((Ce,we)=>Math.abs(K[0]+Ce[0]-me[0])+Math.abs(K[1]+Ce[1]-me[1])-(Math.abs(K[0]+we[0]-me[0])+Math.abs(K[1]+we[1]-me[1]))),pe=re[0];let ye=[K[0]+pe[0],K[1]+pe[1]];q.unshift(ye),ye[0]===me[0]&&ye[1]===me[1]?(me=[2+Math.floor(Math.random()*28),2+Math.floor(Math.random()*20)],q.length>22&&(q.length=6)):q.pop()}return ee(0),{g:e,hit:te,tick(K,re){!re||K-Re<.1||(Re=K,oe++,fe(),ee(K),H.forEach((ye,Ce)=>{ye.material.emissiveIntensity=.3+.7*(Math.sin(K*4+Ce)>.6?1:0)}),u.color.setHSL(K*.08%1,1,.55))}}}var rs={A:0,B:1,X:2,Y:3,LB:4,RB:5,LT:6,RT:7,BACK:8,START:9,L3:10,R3:11,UP:12,DOWN:13,LEFT:14,RIGHT:15},Mm={A:"Space",B:"KeyC",X:"KeyE",Y:"KeyF",LB:"KeyQ",RB:"KeyR",LT:"mouse2",RT:"mouse0",BACK:"Tab",R3:"KeyM",UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight"},DE={Space:" ",Tab:"Tab",Escape:"Escape",Enter:"Enter",ShiftLeft:"Shift",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight"};if(typeof window<"u"&&!window.__ctrlGuard){window.__ctrlGuard=1;let s=0;addEventListener("keydown",e=>{(e.key==="Control"||e.key==="Meta")&&(s=performance.now());let t=e.target&&/^(INPUT|TEXTAREA)$/.test(e.target.tagName);(e.ctrlKey||e.metaKey)&&!t&&!/^Key[CVXAZ]$/.test(e.code)&&e.preventDefault(),(e.ctrlKey&&e.code==="KeyW"||e.code==="F5"||e.code==="BrowserBack"||e.altKey&&e.code==="ArrowLeft")&&e.preventDefault()},!0),addEventListener("keyup",e=>{(e.key==="Control"||e.key==="Meta")&&(s=0)},!0),addEventListener("blur",()=>{s=0}),addEventListener("beforeunload",e=>{if(s&&performance.now()-s<8e3)return e.preventDefault(),e.returnValue="",""})}var Zo=null;function Em(s){if(Zo)return Zo.set(s),Zo;let e=Object.assign({},Mm,s.map||{}),t={},n=[],i=!1,r=!1,o=null,a=0,l="",c=performance.now(),u=document.createElement("style");u.textContent='.padFocus{outline:3px solid #ffd23f!important;outline-offset:3px;box-shadow:0 0 18px rgba(255,210,63,.7)!important}#padBadge{position:fixed;left:50%;bottom:8px;transform:translateX(-50%);z-index:9999;background:rgba(10,8,16,.85);border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:5px 12px;font:600 12px "Segoe UI",sans-serif;color:#d8d0e6;pointer-events:none;transition:opacity .4s;white-space:nowrap}#padBadge b{color:#39ff88}',document.head.appendChild(u);let h=document.createElement("div");h.id="padBadge",h.style.opacity="0",document.body.appendChild(h);let d=0;function f(b,w=4e3){h.innerHTML=b,h.style.opacity="1",clearTimeout(d),d=setTimeout(()=>h.style.opacity="0",w)}addEventListener("gamepadconnected",b=>f("\u{1F3AE} <b>Controller verbunden</b> \u2013 A = ausw\xE4hlen \xB7 B = zur\xFCck \xB7 Start = Pause/Weiter")),addEventListener("gamepaddisconnected",()=>{x(),f("\u{1F3AE} Controller getrennt")});let g=(b,w)=>{if(b){if(b.startsWith("mouse")){let P=+b.slice(5),S=s.canvas||document.body;S.dispatchEvent(new MouseEvent(w?"mousedown":"mouseup",{button:P,buttons:w?P===0?1:2:0,bubbles:!0,cancelable:!0})),!w&&P===0&&S.dispatchEvent(new MouseEvent("click",{button:0,bubbles:!0,cancelable:!0}));return}if(b==="wheel"){w&&(s.canvas||document).dispatchEvent(new WheelEvent("wheel",{deltaY:100,bubbles:!0}));return}t[b]!==w&&(t[b]=w,document.dispatchEvent(new KeyboardEvent(w?"keydown":"keyup",{code:b,key:DE[b]||(b.startsWith("Key")?b.slice(3).toLowerCase():b.startsWith("Digit")?b.slice(5):b),bubbles:!0,cancelable:!0})))}};function x(){for(let b in t)t[b]&&g(b,!1)}function m(){return[...document.querySelectorAll("button, select, input:not([type=hidden]), a[href], [data-pad]")].filter(w=>{if(w.disabled||w.closest(".hidden"))return!1;let P=w.getBoundingClientRect();if(P.width<4||P.height<4)return!1;let S=getComputedStyle(w);if(S.visibility==="hidden"||S.display==="none"||+S.opacity==0||S.pointerEvents==="none")return!1;if(P.bottom<0||P.top>innerHeight||P.right<0||P.left>innerWidth)return!0;let E=Math.min(innerWidth-1,Math.max(0,P.left+P.width/2)),L=Math.min(innerHeight-1,Math.max(0,P.top+P.height/2)),H=document.elementFromPoint(E,L);return H&&(H===w||w.contains(H)||H.contains(w)||H.closest("label")===w.closest("label"))})}function p(b){if(o&&o.classList.remove("padFocus"),o=b,b){b.classList.add("padFocus");try{b.scrollIntoView({block:"nearest",inline:"nearest"})}catch{}if(b.tagName!=="INPUT"||b.type==="range"||b.type==="checkbox")try{b.focus({preventScroll:!0})}catch{}}}function v(b){let w=m();if(!w.length)return;if(!o||!w.includes(o)){p(s.first&&w.find(D=>s.first.includes(D.id))||w.find(D=>/\b(btn|primary)\b/.test(D.className)&&!/ghost/.test(D.className))||w.find(D=>D.tagName==="BUTTON")||w[0]);return}let P=o.getBoundingClientRect(),S=P.left+P.width/2,E=P.top+P.height/2,L=null,H=1e9;for(let D of w){if(D===o)continue;let B=D.getBoundingClientRect(),z=B.left+B.width/2,k=B.top+B.height/2,te=z-S,q=k-E,pe=b==="up"?-q:b==="down"?q:b==="left"?-te:te,me=Math.abs(b==="up"||b==="down"?te:q);if(pe<4)continue;let oe=pe+me*2.2;oe<H&&(H=oe,L=D)}L&&p(L)}function _(b,w){if(b.tagName==="SELECT"){let P=b.options.length;if(!P)return!1;let S=b.selectedIndex;for(let E=0;E<P&&(S=(S+w+P)%P,!!b.options[S].disabled);E++);return b.selectedIndex=S,b.dispatchEvent(new Event("input",{bubbles:!0})),b.dispatchEvent(new Event("change",{bubbles:!0})),!0}if(b.tagName==="INPUT"&&b.type==="range"){let P=+b.step||(+b.max-+b.min)/20||1;return b.value=String(Math.min(+b.max,Math.max(+b.min,+b.value+w*P))),b.dispatchEvent(new Event("input",{bubbles:!0})),b.dispatchEvent(new Event("change",{bubbles:!0})),!0}return!1}function y(b){if(b){if(b.tagName==="SELECT"){_(b,1);return}if(b.tagName==="INPUT"&&(b.type==="checkbox"||b.type==="radio")){b.click();return}if(b.tagName==="INPUT"){try{b.focus(),b.select()}catch{}f("\u2328\uFE0F Mit der Tastatur tippen, dann B dr\xFCcken",3e3);return}b.click()}}function R(){requestAnimationFrame(R);let b=performance.now(),w=Math.min(.05,(b-c)/1e3);c=b;let P=navigator.getGamepads?navigator.getGamepads():[],S=null;for(let oe of P)if(oe&&oe.connected&&oe.buttons.length>=16){S=oe;break}if(!S){i&&(x(),i=!1);return}let E=S.buttons.map(oe=>oe.value>.5),L=S.axes,H=oe=>Math.abs(oe)<.18?0:(oe-Math.sign(oe)*.18)/.82,D=H(L[0]||0),B=H(L[1]||0),z=H(L[2]||0),k=H(L[3]||0);if((E.some(oe=>oe)||Math.abs(D)+Math.abs(B)+Math.abs(z)+Math.abs(k)>.3)&&!i&&(i=!0,s.onActive&&s.onActive()),!i){n=E;return}let q=oe=>E[rs[oe]]&&!n[rs[oe]],pe=oe=>!E[rs[oe]]&&n[rs[oe]],me=s.isPlaying();if(me&&!s._helped&&(s._helped=!0,f(s.help||"\u{1F3AE} Linker Stick = laufen \xB7 Rechter Stick = umschauen \xB7 A = springen \xB7 B = ducken \xB7 X = benutzen \xB7 Start = Pause",7e3)),me){o&&p(null);for(let oe of["A","B","X","Y","LB","RB","LT","RT","BACK","R3","UP","DOWN","LEFT","RIGHT"]){let Re=e[oe];Re&&(q(oe)&&g(Re,!0),pe(oe)&&g(Re,!1))}if(s.stick==="steer"?(g(e.STEER_L||"KeyA",D<-.3),g(e.STEER_R||"KeyD",D>.3)):(g("KeyW",B<-.35),g("KeyS",B>.35),g("KeyA",D<-.35),g("KeyD",D>.35)),q("L3")&&(r=!r),Math.hypot(D,B)<.25&&(r=!1),s.stick!=="steer"&&g("ShiftLeft",r||Math.hypot(D,B)>.97),!s.noLook&&(z||k)){let oe=(s.lookSpeed||900)*w,Re=Math.sign(z)*Math.pow(Math.abs(z),1.6)*oe,Ye=Math.sign(k)*Math.pow(Math.abs(k),1.6)*oe*.75;document.dispatchEvent(new MouseEvent("mousemove",{movementX:Re,movementY:Ye,bubbles:!0}))}q("START")&&(x(),r=!1,s.pause())}else{x(),r=!1;let oe="";if(E[rs.UP]||B<-.6?oe="up":E[rs.DOWN]||B>.6?oe="down":E[rs.LEFT]||D<-.6?oe="left":(E[rs.RIGHT]||D>.6)&&(oe="right"),oe&&(oe!==l||b>a)&&(a=b+(oe!==l?450:160),l=oe,(oe==="left"||oe==="right")&&o&&_(o,oe==="left"?-1:1)||v(oe)),oe||(l=""),o&&!document.body.contains(o)&&p(null),!o&&(oe||q("A"))?v("down"):q("A")&&y(o),q("B")&&(document.activeElement&&document.activeElement.tagName==="INPUT"?document.activeElement.blur():s.back&&s.back()),(q("START")||q("X")&&s.startOnX)&&(s.canPlay&&s.canPlay()?(document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),p(null),s.padLock()):o&&y(o)),k){let Re=o;for(;Re&&Re!==document.body&&!(Re.scrollHeight>Re.clientHeight+4&&/auto|scroll/.test(getComputedStyle(Re).overflowY));)Re=Re.parentElement;Re&&Re!==document.body&&(Re.scrollTop+=k*900*w)}}n=E}return requestAnimationFrame(R),Zo={isActive:()=>i,badge:f,set:b=>{x(),s=b,e=Object.assign({},Mm,b.map||{}),i&&s.onActive&&s.onActive()}},Zo}var se=s=>document.getElementById(s),pn=new URLSearchParams(location.search),on=(()=>{try{return matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0&&"ontouchstart"in window||pn.has("touch")}catch{return!1}})();on&&document.body.classList.add("touch");var Vs=1,ra=Math.PI*2/12.7,pd=16.8,rn=19,UE=1.65,Lm=.35,Xl=Vs/2*ra,Md=Math.PI*2-Xl,bm=[16723888,2154751,10181887,4054148,16731501,16765503,58836,16739286,8191823,11584767],ea=["#ff2fb0","#20e0ff","#3ddc84","#ff4d6d","#ffd23f","#9b5cff","#00e5d4","#ff6bd6","#7cff4f","#e0e0e0","#c08040","#5080ff","#ff9090","#90ffd0"],ke={name:"Neue Pussy1",sens:1,vol:.8,gfx:"hoch",invert:!1};try{let s=JSON.parse(localStorage.getItem("operation-hias")||"null");s&&(ke=Object.assign({},ke,s))}catch{}(!ke.name||ke.name==="HiAS"||ke.name==="Georg")&&(ke.name="Neue Pussy1");ke.look=En(ke.look);function ql(){try{let s=JSON.parse(localStorage.getItem("operation-hias")||"{}")||{};s.name=ke.name,s.vol=ke.vol,s.look=ke.look,localStorage.setItem("operation-hias",JSON.stringify(s))}catch{}}var Sm="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Ed=()=>{let s="";for(let e=0;e<5;e++)s+=Sm[Math.floor(Math.random()*Sm.length)];return s},Dm=!1;try{Dm=!!sessionStorage.getItem("gbgc-zurueck")}catch{}var ld=null;function Um(){if(ld)return ld;let s=null;if(Dm)try{s=sessionStorage.getItem("gbgc-raum")}catch{}(!s||!/^[A-Z0-9]{5}$/.test(s))&&(s=Ed());try{sessionStorage.setItem("gbgc-raum",s)}catch{}return ld=s}var ls=se("c"),us=new Ao({canvas:ls,antialias:!0,powerPreference:"high-performance"});us.setPixelRatio(Math.min(window.devicePixelRatio||1,on?1.25:1.5));us.toneMapping=Dr;us.toneMappingExposure=1.05;us.outputColorSpace=ht;var ut=new Ro;ut.background=new Ae(329227);ut.fog=new el(329227,.018);var Nn=new Ut(75,1,.05,200);Nn.rotation.order="YXZ";ut.add(Nn);var zl=ke.gfx==="niedrig"||pn.has("low")||on,gi=null,md=null;zl||(gi=new Fr(us),gi.addPass(new Or(ut,Nn)),md=new zr(new de(512,512),.42,.4,.82),gi.addPass(md),gi.addPass(new Gr));function Nm(){let s=window.innerWidth,e=window.innerHeight;us.setSize(s,e,!1),Nn.aspect=s/e,Nn.updateProjectionMatrix(),gi&&gi.setSize(s,e)}window.addEventListener("resize",Nm);Nm();function kt(s,e,t,n){let i=document.createElement("canvas");i.width=s,i.height=e;let r=i.getContext("2d");t(r,s,e);let o=new en(i);return o.colorSpace=ht,o.anisotropy=8,n&&(o.wrapS=o.wrapT=wn,o.repeat.set(n[0],n[1])),o}function Ws(s,e={}){let t=e.w||1024,n=e.h||256,i=kt(t,n,o=>{o.clearRect(0,0,t,n),e.bg&&(o.fillStyle=e.bg,NE(o,6,6,t-12,n-12,26),o.fill(),o.strokeStyle=e.border||"rgba(255,255,255,0.25)",o.lineWidth=6,o.stroke()),o.textAlign="center",o.textBaseline="middle";let a=s.length;s.forEach((l,c)=>{let u=l.size||90;o.font=`${l.weight||400} ${u}px ${l.font||'Impact, "Arial Black", sans-serif'}`;let h=u;for(;o.measureText(l.t).width>t-60&&h>20;)h-=4,o.font=`${l.weight||400} ${h}px ${l.font||'Impact, "Arial Black", sans-serif'}`;o.shadowColor=l.glow||"transparent",o.shadowBlur=l.glow?8:0,o.fillStyle=l.c||"#fff",o.fillText(l.t,t/2,n*(c+.5)/a+(l.dy||0))})});return new F(new at(e.pw||4,(e.pw||4)*n/t),new De({map:i,transparent:!0,depthWrite:!1,toneMapped:!1,side:Pt,color:14211288}))}function NE(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.arcTo(e+n,t,e+n,t+i,r),s.arcTo(e+n,t+i,e,t+i,r),s.arcTo(e,t+i,e,t,r),s.arcTo(e,t,e+n,t,r),s.closePath()}function kE(){let s=kt(1024,1024,(h,d,f)=>{h.fillStyle="#101219",h.fillRect(0,0,d,f);for(let g=0;g<8;g++)for(let x=0;x<8;x++){let m=16+Math.floor(Math.random()*8);h.fillStyle=`rgb(${m},${m+2},${m+8})`,h.fillRect(x*128+3,g*128+3,122,122);for(let p=0;p<40;p++)h.fillStyle=`rgba(255,255,255,${Math.random()*.025})`,h.fillRect(x*128+Math.random()*120,g*128+Math.random()*120,2+Math.random()*10,1)}h.strokeStyle="rgba(80,160,255,0.10)",h.lineWidth=2;for(let g=0;g<=8;g++)h.beginPath(),h.moveTo(g*128,0),h.lineTo(g*128,f),h.stroke(),h.beginPath(),h.moveTo(0,g*128),h.lineTo(d,g*128),h.stroke()},[6,6]),e=new F(new ni(rn+.5,96),new ge({map:s,roughness:.32,metalness:.55,color:16777215}));e.rotation.x=-Math.PI/2,ut.add(e);let t=(h,d)=>new De({color:h,transparent:!0,opacity:d,toneMapped:!1,side:Pt});for(let[h,d,f,g]of[[3.2,.06,16723888,.9],[3.45,.02,16723888,.6],[10.6,.04,2154751,.45],[17.4,.05,2154751,.5]]){let x=new F(new Ho(h,h+d,128),t(f,g));x.rotation.x=-Math.PI/2,x.position.y=.012,ut.add(x)}let n=kt(1024,1024,(h,d,f)=>{h.translate(d/2,f/2),h.strokeStyle="rgba(255,47,176,0.85)",h.lineWidth=10,h.beginPath(),h.arc(0,0,440,0,Math.PI*2),h.stroke(),h.lineWidth=4,h.beginPath(),h.arc(0,0,400,0,Math.PI*2),h.stroke();for(let g=0;g<10;g++)h.save(),h.rotate(g*Math.PI/5),h.fillStyle="rgba(255,47,176,0.8)",h.fillRect(-6,-440,12,60),h.restore();h.font='400 210px Impact, "Arial Black", sans-serif',h.textAlign="center",h.textBaseline="middle",h.fillStyle="rgba(255,90,200,0.95)",h.fillText("SPK",0,-10),h.font='400 64px Impact, "Arial Black", sans-serif',h.fillStyle="rgba(255,255,255,0.75)",h.fillText("PORTAL",0,150)}),i=new F(new ni(3.1,64),new De({map:n,transparent:!0,toneMapped:!1,opacity:.85,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.015,ut.add(i);{let h=new Image;h.onload=()=>{let d=n.image,f=d.getContext("2d"),g=d.width,x=d.height;f.setTransform(1,0,0,1,0,0),f.clearRect(0,0,g,x);let m=f.createRadialGradient(g/2,x/2,g*.2,g/2,x/2,g/2);m.addColorStop(0,"rgba(255,226,47,0.28)"),m.addColorStop(.75,"rgba(255,47,176,0.18)"),m.addColorStop(1,"rgba(255,47,176,0)"),f.fillStyle=m,f.beginPath(),f.arc(g/2,x/2,g/2,0,Math.PI*2),f.fill(),f.drawImage(h,g*.02,x*.02,g*.96,x*.96),n.needsUpdate=!0,i.material.opacity=1},h.src="/System/assets/logo4.png"}let r=kt(1024,512,(h,d,f)=>{h.fillStyle="#14161e",h.fillRect(0,0,d,f);for(let g=0;g<8;g++)for(let x=0;x<4;x++){let m=22+Math.floor(Math.random()*10);h.fillStyle=`rgb(${m},${m+2},${m+10})`,h.fillRect(g*128+4,x*128+4,120,120),h.fillStyle="rgba(0,0,0,0.35)",h.fillRect(g*128+4,x*128+118,120,6)}h.fillStyle="rgba(32,224,255,0.55)",h.fillRect(0,250,d,5)},[10,2]),o=new F(new je(rn,rn,10,96,1,!0),new ge({map:r,side:Ot,roughness:.6,metalness:.4}));o.position.y=5,ut.add(o);try{zp(ut,rn,Xl+.12,Md-.12)}catch(h){console.warn("Graffiti",h)}for(let[h,d]of[[.25,2154751],[9.6,16723888]]){let f=new F(new je(rn-.05,rn-.05,.08,96,1,!0),new De({color:d,side:Ot,toneMapped:!1}));f.position.y=h,ut.add(f)}let a=kt(2048,1024,(h,d,f)=>{let g=h.createLinearGradient(0,0,0,f);g.addColorStop(0,"#0a0c1c"),g.addColorStop(1,"#03040a"),h.fillStyle=g,h.fillRect(0,0,d,f);for(let x=0;x<1600;x++){let m=Math.random();h.fillStyle=`rgba(255,255,255,${m*m})`;let p=Math.random()<.03?3:1.4;h.fillRect(Math.random()*d,Math.random()*f*.9,p,p)}for(let x=0;x<4;x++){let m=Math.random()*d,p=Math.random()*f*.6,v=h.createRadialGradient(m,p,0,m,p,260);v.addColorStop(0,x%2?"rgba(120,60,255,0.18)":"rgba(255,120,40,0.13)"),v.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=v,h.fillRect(0,0,d,f)}}),l=new F(new pt(rn,64,24,0,Math.PI*2,0,Math.PI/2),new De({map:a,side:Ot,fog:!1}));l.position.y=10,l.scale.y=.55,ut.add(l);let c=new ge({color:2237743,roughness:.35,metalness:.8});for(let h=-1;h<Vs;h++){let d=(h+.5-(Vs-1)/2)*ra,f=Math.sin(d)*(rn-.6),g=-Math.cos(d)*(rn-.6),x=new F(new Oe(1,10,.9),c);x.position.set(f,5,g),x.rotation.y=-d,ut.add(x);let m=new F(new Oe(.08,9,.08),new De({color:h%2?2154751:16723888,toneMapped:!1}));m.position.set(Math.sin(d)*(rn-1.08),5,-Math.cos(d)*(rn-1.08)),ut.add(m)}ut.add(new zo(8425664,3154968,1));let u=new yn(16769728,60,30,1.6);u.position.set(0,9,0),ut.add(u)}var os=null;function BE(){os=new Xe,os.position.set(0,6.2,0),ut.add(os);let s=kt(2048,256,(t,n,i)=>{t.clearRect(0,0,n,i),t.textAlign="center",t.textBaseline="middle",t.font='400 150px Impact, "Arial Black", sans-serif';for(let[r,o,a]of[[n*.25,"SPK","#ff7fd8"],[n*.75,"PORTAL","#9ff3ff"]])t.shadowColor=a,t.shadowBlur=8,t.fillStyle=a,t.fillText(o,r,i/2)}),e=new F(new je(3.6,3.6,.9,96,1,!0),new De({map:s,transparent:!0,side:Tn,toneMapped:!1,depthWrite:!1,opacity:.85,color:13684944}));os.add(e);for(let t of[-.62,.62]){let n=new F(new Gt(3.6,.025,6,128),new De({color:16723888,toneMapped:!1}));n.rotation.x=Math.PI/2,n.position.y=t,os.add(n)}}var HE="varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",FE=`
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
}`,qn=[];function cd(s,e,t){let n=new Di,i=s/2-t,r=e-s/2;return n.moveTo(-i,t),n.lineTo(i,t),n.lineTo(i,r),n.absarc(0,r,i,0,Math.PI,!1),n.lineTo(-i,t),n}function OE(s,e){let t=(s-(Vs-1)/2)*ra,n=new I(Math.sin(t)*pd,0,-Math.cos(t)*pd),i=new Xe;i.position.copy(n),i.lookAt(0,0,0),ut.add(i);let r=new Ae(bm[s%bm.length]),o=!!e,a=3.4,l=4.7,c=cd(a+.7,l+.35,0),u=cd(a,l,0);c.holes.push(new Cs(u.getPoints(48)));let h=new Pr(c,{depth:.5,bevelEnabled:!0,bevelThickness:.06,bevelSize:.05,bevelSegments:2,curveSegments:48});h.translate(0,0,-.25);let d=new F(h,new ge({color:5593964,roughness:.35,metalness:.75}));i.add(d);let f=u.getPoints(64).map(H=>new I(H.x,H.y,.27)),g=new F(new pl(new Uo(f,!1),128,.045,6,!1),new De({color:o?r:new Ae(4475477),toneMapped:!1}));i.add(g);let x=new At({vertexShader:HE,fragmentShader:FE,transparent:!0,depthWrite:!1,side:Pt,uniforms:{t:{value:Math.random()*10},c1:{value:r.clone().multiplyScalar(1)},c2:{value:r.clone().multiplyScalar(.18)},on:{value:o?1:0},hot:{value:0}}}),m=new Fo(cd(a,l,0),48),p=m.attributes.uv,v=m.attributes.position;for(let H=0;H<p.count;H++)p.setXY(H,(v.getX(H)+a/2)/a,v.getY(H)/l);let _=new F(m,x);i.add(_);let y=new F(new je(2.6,2.8,.12,48,1,!1,-Math.PI/2,Math.PI),new ge({color:1776933,roughness:.4,metalness:.7}));y.position.set(0,.06,.05),i.add(y);let R=new F(new Ho(2.55,2.62,48,1,Math.PI,Math.PI),new De({color:o?r:3357252,toneMapped:!1,side:Pt}));R.rotation.x=-Math.PI/2,R.position.set(0,.125,.05),i.add(R);let b="#"+r.getHexString(),w=Ws(o?[{t:String(s+1),size:64,c:b,glow:b},{t:(e.name||e.ordner).toUpperCase(),size:92,c:"#ffffff",glow:b}]:[{t:String(s+1),size:64,c:"#667"},{t:"BALD VERF\xDCGBAR",size:80,c:"#8a8f9c"}],{w:1024,h:300,pw:4.4});if(w.position.set(0,l+1.85,.1),i.add(w),o&&(e.genre||e.spieler)){let H=Ws([{t:[e.genre,e.spieler].filter(Boolean).join("  \xB7  "),size:54,c:"#d8d2c6",font:'"Segoe UI", Arial, sans-serif',weight:600}],{w:1400,h:110,pw:3.8});H.position.set(0,l+.82,.3),i.add(H)}let P=null;o&&(P=new yn(r,14,9,1.8),P.position.set(0,2.2,1.6),i.add(P));let S=null;if(o){let D=new Tt,B=new Float32Array(70*3),z=new Float32Array(70);for(let k=0;k<70;k++)B[k*3]=(Math.random()-.5)*3,B[k*3+1]=Math.random()*4.5,B[k*3+2]=.2+Math.random()*1.2,z[k]=.3+Math.random()*.9;D.setAttribute("position",new Bt(B,3)),S=new Cr(D,new Rs({color:r,size:.06,transparent:!0,opacity:.9,toneMapped:!1,depthWrite:!1,blending:ti})),S.userData.sp=z,i.add(S)}let E=new I(0,0,1).applyQuaternion(i.quaternion),L=new I(1,0,0).applyQuaternion(i.quaternion);qn.push({i:s,game:e,on:o,g:i,mat:x,light:P,parts:S,pos:n,n:E,t:L,col:b})}var as=null,xi=null,jt=null;function jr(s,e,t){let n=new Xe,i=null,r=null;if(as&&jt){let a=Fl(jt,t||Wr).m;a.rotation.y=Math.PI,n.add(a),i=new Un(a),r={};for(let l of["idle","walk","run","jump"])xi[l]&&(r[l]=i.clipAction(xi[l]),r[l].play(),r[l].setEffectiveWeight(l==="idle"?1:0))}else if(as){let a=qo(as.scene);if(!jr.sc){let c=new dn().setFromObject(as.scene);jr.sc=1.8/(c.max.y-c.min.y)}a.scale.setScalar(jr.sc),a.rotation.y=Math.PI;let l=new Ae(e);a.traverse(c=>{if(c.isMesh||c.isSkinnedMesh){c.frustumCulled=!1;let u=c.material&&/Joint/i.test(c.material.name);c.material=new ge({color:u?1711138:l,roughness:.55,metalness:.15,emissive:u?0:l,emissiveIntensity:u?0:.08})}}),n.add(a),i=new Un(a),r={};for(let c of["idle","walk","run","jump"])xi[c]&&(r[c]=i.clipAction(xi[c]),r[c].play(),r[c].setEffectiveWeight(c==="idle"?1:0))}else{let a=new F(new fl(.3,1.1,4,12),new ge({color:e}));a.position.y=.9,n.add(a)}let o=Ws([{t:s,size:80,c:e,font:'"Segoe UI", Arial, sans-serif',weight:700,glow:"rgba(0,0,0,0.9)"}],{w:768,h:128,pw:1.6});return o.position.y=2.15,n.add(o),ut.add(n),{root:n,mixer:i,act:r,tag:o,w:{idle:1,walk:0,run:0,jump:0}}}function Tm(s,e,t,n){if(!s.mixer)return;let i={idle:0,walk:0,run:0,jump:0};t?i.jump=1:e>4.2?i.run=1:e>.4?i.walk=1:i.idle=1;for(let r in s.w)s.w[r]+=(i[r]-s.w[r])*Math.min(1,n*8),s.act[r]&&s.act[r].setEffectiveWeight(s.w[r]);s.mixer.update(n)}var ft=null,ai=null;function bd(){if(ft){ft.state==="suspended"&&ft.resume();return}try{ft=new(window.AudioContext||window.webkitAudioContext),ai=ft.createGain(),ai.gain.value=.9*(ke.vol==null?.8:ke.vol),ai.connect(ft.destination);let s=ft.createGain();s.gain.value=.035;let e=ft.createBiquadFilter();e.type="lowpass",e.frequency.value=600,e.connect(s),s.connect(ai);for(let i of[55,82.4,110.2,164.8]){let r=ft.createOscillator();r.type="sawtooth",r.frequency.value=i,r.detune.value=(Math.random()-.5)*12;let o=ft.createGain();o.gain.value=.25,r.connect(o),o.connect(e),r.start()}let t=ft.createOscillator();t.frequency.value=.07;let n=ft.createGain();n.gain.value=250,t.connect(n),n.connect(e.frequency),t.start()}catch{ft=null}}function zE(s){let e=ft.createBuffer(1,ft.sampleRate*s,ft.sampleRate),t=e.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;return e}function Sd(){if(!ft)return;let s=ft.currentTime,e=ft.createBufferSource();e.buffer=zE(2.2);let t=ft.createBiquadFilter();t.type="bandpass",t.Q.value=2,t.frequency.setValueAtTime(200,s),t.frequency.exponentialRampToValueAtTime(4e3,s+1.6);let n=ft.createGain();n.gain.setValueAtTime(1e-4,s),n.gain.exponentialRampToValueAtTime(.9,s+.5),n.gain.exponentialRampToValueAtTime(1e-4,s+2.1),e.connect(t),t.connect(n),n.connect(ai),e.start(s);let i=ft.createOscillator();i.type="sine",i.frequency.setValueAtTime(90,s),i.frequency.exponentialRampToValueAtTime(900,s+1.5);let r=ft.createGain();r.gain.setValueAtTime(1e-4,s),r.gain.exponentialRampToValueAtTime(.35,s+.4),r.gain.exponentialRampToValueAtTime(1e-4,s+1.8),i.connect(r),r.connect(ai),i.start(s),i.stop(s+2)}function Td(s){if(!ft)return;let e=ft.currentTime,t=ft.createOscillator();t.type="triangle",t.frequency.value=s?880:520;let n=ft.createGain();n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.25),t.connect(n),n.connect(ai),t.start(e),t.stop(e+.3)}var Ns=null;function GE(s){if(ft){if(!Ns){Ns=ft.createGain(),Ns.gain.value=0,Ns.connect(ai);let e=ft.createOscillator();e.type="sine",e.frequency.value=72;let t=ft.createOscillator();t.type="sine",t.frequency.value=108.5,e.connect(Ns),t.connect(Ns),e.start(),t.start()}Ns.gain.setTargetAtTime(s*.12,ft.currentTime,.2)}}var Ne={pos:new I(0,0,0),vel:new I,yaw:0,pitch:0,ground:!0},rt={},tn=!1,an=!1,ct=!1;function km(s){let e=Math.hypot(s.x,s.z),t=Math.atan2(s.x,-s.z),n=Math.abs(t)<Vs/2*ra-.02?rn-.45:pd+.25;if(e>n&&(s.x*=n/e,s.z*=n/e),bn.collide(s),An.collide(s),oi.pos){let i=s.x-oi.pos.x,r=s.z-oi.pos.z,o=Math.hypot(i,r),a=.7;o<a&&o>1e-4&&(s.x=oi.pos.x+i/o*a,s.z=oi.pos.z+r/o*a)}if(Vt){let i=s.x-Vt.pos.x,r=s.z-Vt.pos.z,o=Math.hypot(i,r),a=1.05;o<a&&o>1e-4&&(s.x=Vt.pos.x+i/o*a,s.z=Vt.pos.z+r/o*a)}if(kn.pos){let i=s.x-kn.pos.x,r=s.z-kn.pos.z,o=Math.hypot(i,r),a=1.35;o<a&&o>1e-4&&(s.x=kn.pos.x+i/o*a,s.z=kn.pos.z+r/o*a)}for(let i of qn){let r=s.x-i.pos.x,o=s.z-i.pos.z,a=r*i.n.x+o*i.n.z,l=r*i.t.x+o*i.t.z;for(let c of[-1,1]){let u=i.pos.x+i.t.x*c*2.05,h=i.pos.z+i.t.z*c*2.05,d=s.x-u,f=s.z-h,g=Math.hypot(d,f),x=.45+Lm;g<x&&g>1e-4&&(s.x=u+d/g*x,s.z=h+f/g*x)}if(i.side==null&&(i.side=1),Math.abs(l)>=2.4?i.side=a>=.02?1:-1:a>=.55?i.side=1:a<=-.5&&(i.side=-1),Math.abs(l)<2.4&&a<.55&&a>-.5&&!(i.on&&Math.abs(l)<1.55&&!ct&&i.side>0)){let u=(i.side>0?.55:-.5)-a;s.x+=i.n.x*u,s.z+=i.n.z*u}}}function VE(){if(!ct)for(let s of qn){if(!s.on)continue;let e=Ne.pos.x-s.pos.x,t=Ne.pos.z-s.pos.z,n=e*s.n.x+t*s.n.z,i=e*s.t.x+t*s.t.z;if(s.side>0&&n<.3&&n>-2&&Math.abs(i)<1.5&&Ne.pos.y<3){Cd(s.i);return}}}var Bm="gbgc-raum-v1-",Bs={debug:1,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478"}]}};pn.get("peerhost")&&(Bs.host=pn.get("peerhost"),Bs.port=+(pn.get("peerport")||9e3),Bs.path=pn.get("peerpath")||"/",Bs.secure=!1,Bs.config={iceServers:[]});var xe={role:"none",code:null,peer:null,conns:new Map,conn:null,myId:0,nextId:1,status:""},Ht=new Map,WE=0;function qr(s,e){xe.status=s,se("netStatus").textContent=s,se("netStatus").className=e?"warn":"",ds()}function Yl(){try{xe.conn&&xe.conn.close()}catch{}try{xe.peer&&xe.peer.destroy()}catch{}xe.peer=null,xe.conn=null,xe.conns.clear();for(let s of Ht.values())ut.remove(s.av.root);Ht.clear(),clearInterval(xe.joinRetry),xe.joinRetry=null}function zs(s=0){if(Yl(),xe.role="host",xe.code=Um(),xe.myId=0,xe.nextId=1,xe.names=new Map,qr("Raum wird ge\xF6ffnet\u2026"),!window.Peer){qr("Offline \u2013 Freunde k\xF6nnen gerade nicht beitreten.",!0);return}let e=new window.Peer(Bm+xe.code,Bs);xe.peer=e,zm(e),e.on("open",()=>{xe.peer===e&&qr("Raum ist offen \u2013 Freunde k\xF6nnen beitreten.")}),e.on("error",t=>{if(xe.peer===e){if(t.type==="unavailable-id"&&s<12){qr("Raum wird ge\xF6ffnet\u2026 ("+(s+1)+")");try{e.destroy()}catch{}setTimeout(()=>{xe.role==="host"&&xe.peer===e&&zs(s+1)},2500);return}(t.type==="network"||t.type==="server-error"||t.type==="socket-error"||t.type==="socket-closed")&&qr("Keine Internet-Verbindung \u2013 Freunde k\xF6nnen gerade nicht beitreten.",!0)}}),e.on("disconnected",()=>{setTimeout(()=>{try{xe.peer===e&&e.disconnected&&!e.destroyed&&e.reconnect()}catch{}},3e3)}),e.on("connection",t=>{t.on("data",i=>{if(xe.peer!==e||!i)return;let r=xe.conns.get(t.peer);if(i.t==="hello"){if(r)return;let o=xe.nextId++;r={conn:t,id:o},xe.conns.set(t.peer,r);let a=String(i.name||"Spieler").slice(0,16),l=Ad(o,a,null,i.lk);l.pid=t.peer;try{t.send({t:"welcome",id:o,code:xe.code}),t.send({t:"dg",s:bn.state()}),t.send(Object.assign({t:"ufoS"},An.state()))}catch{}$t(a+" ist dem Raum beigetreten"),Td(!0);return}if(r)if(i.t==="s"){let o=Ht.get(r.id);o&&(o.tp.fromArray(i.p),o.ty=i.y,o.sp=i.v||0,o.air=!!i.a,o.tk!==!!i.tk&&(o.tk=!!i.tk,ds()))}else if(i.t==="look"){let o=Ht.get(r.id);o&&wd(o,i.lk)}else if(i.t==="portal"){let o=qn[i.i];o&&o.on&&Vm(i.i,Ht.get(r.id)?.name,i.mis)}else i.t==="arc"?Jm(Ht.get(r.id)?.name):i.t==="dg1"?bn.hostTake(i.i|0,i.k|0):i.t==="ufo"?An.hostRequest():i.t==="radc"&&An.control(String(i.c))});let n=()=>{let i=xe.conns.get(t.peer);if(i){xe.conns.delete(t.peer);let r=Ht.get(i.id);r&&($t(r.name+" hat den Raum verlassen"),Om(i.id))}};t.on("close",n),t.on("error",n)})}function Gl(s,e={}){if(s=s.toUpperCase().replace(/[^A-Z0-9]/g,""),s.length!==5){se("joinInfo").textContent="Der Code hat 5 Zeichen.";return}if(s===Um()&&!e.silent){se("joinInfo").textContent="Das ist dein eigener Raum-Code.";return}if(!window.Peer){se("joinInfo").textContent="Keine Verbindung m\xF6glich (Internet?).";return}let t=()=>new Promise(i=>{let r=new window.Peer(Bs);zm(r);let o=!1,a=c=>{if(!o){if(o=!0,clearTimeout(l),!c)try{r.destroy()}catch{}i(c?r:null)}},l=setTimeout(()=>a(!1),15e3);r.on("error",()=>a(!1)),r.on("open",()=>{let c=r.connect(Bm+s,{reliable:!0,serialization:"json"});c.on("open",()=>{c.send({t:"hello",name:ke.name,lk:ke.look})}),c.on("data",u=>{if(u&&u.t==="welcome"&&!o){r._conn=c,r._id=u.id,a(!0);return}r===xe.peer&&XE(u)}),c.on("close",()=>{r===xe.peer&&!ct&&wm(s)}),c.on("error",()=>{r===xe.peer&&!ct&&wm(s)})})});return e.silent||(se("joinInfo").textContent="Verbinde mit "+s+"\u2026"),(async()=>{for(let i=0;i<3;i++){let r=await t();if(r)return r;if(xe.role==="client"&&xe.code===s)return null}return null})().then(i=>{if(!i)return e.silent||(se("joinInfo").textContent="Kein Raum mit diesem Code gefunden. Ist dein Freund in seinem Portal?"),!1;Yl(),xe.role="client",xe.code=s,xe.peer=i,xe.conn=i._conn,xe.myId=i._id,qr("Verbunden mit dem Raum von deinem Freund."),se("joinInfo").textContent="",$t("Du bist im Raum "+s),Td(!0);try{sessionStorage.setItem("gbgc-letzter-raum",s)}catch{}return e.then&&e.then(),!0})}function wm(s){$t("Verbindung zum Raum verloren \u2013 du bist jetzt in deinem eigenen Raum."),zs(),Hm(s)}function Hm(s){let e=0;clearInterval(xe.joinRetry);let t=()=>{if(xe.role==="client"||ct){clearInterval(xe.joinRetry);return}if(++e>60){clearInterval(xe.joinRetry);return}Gl(s,{silent:!0})};xe.joinRetry=setInterval(t,5e3),setTimeout(t,800)}function XE(s){if(s)if(s.t==="w"){let e=new Set;for(let t of s.pl){if(t.id===xe.myId)continue;e.add(t.id);let n=Ht.get(t.id);n?t.lk&&wd(n,t.lk):n=Ad(t.id,t.n,t.c,t.lk),n.tp.fromArray(t.p),n.ty=t.y,n.sp=t.v||0,n.air=!!t.a,n.pid=t.pid,n.tk!==!!t.tk&&(n.tk=!!t.tk,ds())}for(let t of[...Ht.keys()])e.has(t)||Om(t)}else s.t==="go"?Wm(s.i,s.code,"join",s.who,s.mis):s.t==="arcgo"?Ud(s.code,"join",s.who):s.t==="msg"?$t(s.s):s.t==="dg"&&Array.isArray(s.s)?bn.setState(s.s):s.t==="ufo"?An.remoteWave(s.n|0):s.t==="ufoS"?An.setState(s):s.t==="rad"&&s.s&&An.setRad(s.s,s.n|0)}function wd(s,e){let t=En(e),n=JSON.stringify(t);if(s.lkStr===n||(s.lkStr=n,s.look=t,!jt))return;let i=s.av;s.av=jr(s.name,s.color,t),s.av.root.position.copy(i.root.position),s.av.root.rotation.copy(i.root.rotation),ut.remove(i.root),Fm(s,t)}function Fm(s,e){jt&&e.ch&&!Xr(jt,e.ch)&&$o(jt,e.ch).then(()=>{Xr(jt,e.ch)&&s.look===e&&(s.lkStr="",wd(s,e))})}function Ad(s,e,t,n){let i=t||ea[(1+WE++)%ea.length],r=En(n),o={id:s,name:e,color:i,av:jr(e,i,r),look:r,lkStr:JSON.stringify(r),p:new I(0,0,0),tp:new I(0,0,0),y:0,ty:0,sp:0,air:!1,fresh:!0};return Ht.set(s,o),Fm(o,r),ds(),o}function Om(s){let e=Ht.get(s);e&&(ut.remove(e.av.root),Ht.delete(s),ds())}var hd=0,ud=0,mt={stream:null,calls:new Map,talking:!1,audios:new Map,asking:!1};function zm(s){s.on("call",e=>{try{e.answer()}catch{return}e.on("stream",n=>{let i=mt.audios.get(e.peer);i||(i=new Audio,i.autoplay=!0,i.playsInline=!0,mt.audios.set(e.peer,i),document.body.appendChild(i)),i.srcObject=n,i.volume=ke.vol==null?.8:ke.vol,i.muted=ke.vol===0;let r=i.play();r&&r.catch&&r.catch(()=>{})});let t=()=>{let n=mt.audios.get(e.peer);n&&(n.srcObject=null,n.remove(),mt.audios.delete(e.peer))};e.on("close",t),e.on("error",t)})}async function qE(){if(mt.stream)return!0;if(mt.asking)return!1;if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)return $t("Sprechen geht in diesem Browser leider nicht."),!1;mt.asking=!0;try{mt.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})}catch{return $t("Mikrofon nicht erlaubt \u2013 bitte im Browser das Mikrofon erlauben."),mt.asking=!1,!1}mt.asking=!1;for(let s of mt.stream.getAudioTracks())s.enabled=!1;return Rd(),!0}function Rd(){if(!(!mt.stream||!xe.peer||xe.peer.destroyed)){for(let[s,e]of mt.calls)if(e._peer!==xe.peer||![...Ht.values()].some(t=>t.pid===s)){try{e.close()}catch{}mt.calls.delete(s)}for(let s of Ht.values())if(!(!s.pid||mt.calls.has(s.pid)))try{let e=xe.peer.call(s.pid,mt.stream);if(!e)continue;e._peer=xe.peer,mt.calls.set(s.pid,e);let t=()=>{mt.calls.get(s.pid)===e&&mt.calls.delete(s.pid)};e.on("close",()=>{console.log("[voice] call closed",s.pid),t()}),e.on("error",n=>{console.log("[voice] call error",n&&n.type,n&&n.message),t()})}catch(e){console.log("[voice] call failed",e&&e.message)}}}async function YE(s){if(s&&!mt.stream){if(!await qE()){Jo=!1;return}if(!Jo)return}if(mt.talking=s&&!!mt.stream,mt.stream)for(let e of mt.stream.getAudioTracks())e.enabled=mt.talking;se("talkInd").textContent=on?"\u{1F3A4} Mikro AN \u2013 nochmal \u{1F3A4} dr\xFCcken zum Ausschalten":"\u{1F3A4} Mikro AN \u2013 nochmal V dr\xFCcken zum Ausschalten",se("talkInd").classList.toggle("hidden",!mt.talking),mt.talking&&!Ht.size&&$t("Mikro ist an \u2013 aber gerade ist niemand im Raum."),ds()}var Jo=!1;setInterval(()=>{xe.role!=="none"&&Rd()},1500);function Gm(){Jo=!Jo,YE(Jo)}function KE(s){if(ud+=s,ud>1&&(ud=0,Rd()),hd+=s,hd<1/15)return;hd=0;let e=Math.hypot(Ne.vel.x,Ne.vel.z);if(xe.role==="client"&&xe.conn&&xe.conn.open)try{xe.conn.send({t:"s",p:[+Ne.pos.x.toFixed(2),+Ne.pos.y.toFixed(2),+Ne.pos.z.toFixed(2)],y:+Ne.yaw.toFixed(3),v:+e.toFixed(1),a:!Ne.ground,tk:mt.talking})}catch{}else if(xe.role==="host"&&xe.conns.size){let t=[{id:0,n:ke.name,c:ea[0],lk:ke.look,p:[+Ne.pos.x.toFixed(2),+Ne.pos.y.toFixed(2),+Ne.pos.z.toFixed(2)],y:+Ne.yaw.toFixed(3),v:+e.toFixed(1),a:!Ne.ground,pid:xe.peer&&xe.peer.id,tk:mt.talking}];for(let n of Ht.values())t.push({id:n.id,n:n.name,c:n.color,lk:n.look,p:[+n.tp.x.toFixed(2),+n.tp.y.toFixed(2),+n.tp.z.toFixed(2)],y:+n.ty.toFixed(3),v:n.sp,a:n.air,pid:n.pid,tk:!!n.tk});for(let n of xe.conns.values())try{n.conn.open&&n.conn.send({t:"w",pl:t})}catch{}}}var jE=s=>s&&s.game&&/^SPK/.test(s.game.ordner||s.game.name||"");function $E(s){ct=!0,document.pointerLockElement&&document.exitPointerLock();let e=se("misPick");e||(e=document.createElement("div"),e.id="misPick",e.style.cssText='position:fixed;inset:0;z-index:80;display:flex;align-items:center;justify-content:center;background:rgba(5,3,12,.72);font-family:"Segoe UI",system-ui,sans-serif',document.body.appendChild(e)),e.innerHTML=`<div style="width:min(440px,92vw);max-height:92vh;overflow:auto;background:#140d22;border:2px solid #ff2fb0;border-radius:18px;padding:16px 16px 12px;box-shadow:0 0 40px rgba(255,47,176,.35)"><div style="text-align:center;font:900 22px Impact,'Arial Black',sans-serif;color:#ff2fb0;letter-spacing:1px">SPK \u2013 FUCK THE POLICE</div><div style="text-align:center;color:#ccc;font-size:13px;margin:4px 0 10px">Bei welcher Mission wollt ihr starten? Danach geht es der Reihe nach bis zum Schluss.</div>`+Gp.map(i=>`<button data-m="${i.n}" style="display:flex;align-items:center;gap:10px;width:100%;margin:5px 0;padding:10px 12px;background:#221636;border:1px solid #4a3a6a;border-radius:10px;color:#fff;font-size:15px;cursor:pointer;text-align:left"><span style="font-size:20px">${i.icon}</span><b style="color:#ffd23f;min-width:18px">${i.n}</b><span>${i.name}</span></button>`).join("")+'<button data-m="0" style="width:100%;margin-top:8px;padding:9px;background:none;border:1px solid #555;border-radius:10px;color:#aaa;font-size:14px;cursor:pointer">\u2715 Abbrechen</button></div>';let t=i=>{e.remove(),removeEventListener("keydown",n,!0),ct=!1,i?Cd(s,i):Ne.pos.addScaledVector(qn[s].n,2.5)},n=i=>{/^Digit[1-7]$/.test(i.code)?(i.preventDefault(),i.stopPropagation(),t(+i.code[5])):i.code==="Escape"&&(i.preventDefault(),i.stopPropagation(),t(0))};addEventListener("keydown",n,!0),e.querySelectorAll("button").forEach(i=>i.addEventListener("click",r=>{r.stopPropagation(),t(+i.dataset.m)}))}function Cd(s,e){if(!ct){if(!e&&jE(qn[s])){$E(s);return}if(xe.role==="client"&&xe.conn&&xe.conn.open){try{xe.conn.send({t:"portal",i:s,mis:e})}catch{}ct=!0,Xm(qn[s],"Warte auf den Raum\u2026"),Sd(),setTimeout(()=>{ct&&!cs&&(ct=!1,se("flash").classList.remove("on"),Ne.pos.addScaledVector(qn[s].n,2.5))},5e3);return}Vm(s,ke.name,e)}}var cs=!1;function Vm(s,e,t){if(cs)return;let n=Ed();for(let i of xe.conns.values())try{i.conn.open&&i.conn.send({t:"go",i:s,code:n,who:e,mis:t})}catch{}Wm(s,n,"host",e,t)}function Wm(s,e,t,n,i){let r=qn[s];if(!r||!r.on||cs)return;cs=!0,ct=!0;let o=r.game;Xm(r,(n&&n!==ke.name?n+" hat das Portal betreten \u2013 ":"")+(o.name||o.ordner)+" startet\u2026"),Sd();try{sessionStorage.setItem("gbgc-zurueck",JSON.stringify({role:xe.role==="client"?"client":"host",code:xe.code,t:Date.now()}))}catch{}let a=o.pfad+(o.start||"spiel/")+"?konsole="+t+"&code="+e+"&name="+encodeURIComponent(ke.name)+(i?"&mstart="+i:"")+(pn.get("peerhost")?"&peerhost="+pn.get("peerhost")+"&peerport="+(pn.get("peerport")||9e3)+"&ice=none&gfx=niedrig&noshadow":"");setTimeout(()=>{Yl(),location.href=a},t==="host"?1400:2600)}function Xm(s,e){let t=se("flash");t.style.background=`radial-gradient(circle at 50% 50%, #fff 0%, ${s.col} 45%, #000 100%)`,t.classList.add("on"),se("flashText").textContent=e,document.pointerLockElement&&document.exitPointerLock()}function $t(s){let e=document.createElement("div");e.className="toast",e.textContent=s,se("toasts").appendChild(e),setTimeout(()=>e.classList.add("out"),4200),setTimeout(()=>e.remove(),5e3)}function ds(){let s=[{n:ke.name+" (du)",c:xe.role==="client"?"#fff":ea[0],tk:mt.talking}];for(let t of Ht.values())s.push({n:t.name,c:t.color,tk:t.tk});let e="";xe.role==="host"?e=`<div class="lbl">Dein Raum-Code</div><div class="code">${xe.code}</div><div class="hint">Freunde: Portal starten \u2192 \u201EFreund beitreten" \u2192 diesen Code eingeben</div>`:xe.role==="client"&&(e=`<div class="lbl">Im Raum von deinem Freund</div><div class="code">${xe.code}</div>`),se("room").innerHTML=e+`<div class="lbl" style="margin-top:10px">Im Raum (${s.length})</div>`+s.map(t=>`<div class="pl"><i style="background:${t.c}"></i>${yi(t.n)}${t.tk?' <b class="tk">\u{1F3A4} spricht</b>':""}</div>`).join("")+`<div class="st ${se("netStatus").className}">${yi(xe.status)}</div>`,se("mCode").textContent=xe.role==="host"?xe.code:xe.code||"\u2014",se("mCodeLbl").textContent=xe.role==="client"?"Du bist im Raum":"Dein Raum-Code"}var yi=s=>String(s).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function hs(s){se("menu").classList.toggle("hidden",!s),se("hud").classList.toggle("dim",s)}function Xs(){if(Gs&&!on){tn=!0,se("clickHint").classList.add("hidden"),hs(!1);return}if(on){tn=!0,se("clickHint").classList.add("hidden"),hs(!1);try{let s=document.documentElement;!document.fullscreenElement&&s.requestFullscreen&&s.requestFullscreen({navigationUI:"hide"}).then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}catch{}return}try{let s=ls.requestPointerLock({unadjustedMovement:!0});s&&s.catch&&s.catch(()=>{try{ls.requestPointerLock()}catch{}})}catch{try{ls.requestPointerLock()}catch{}}}var Gs=!1;ls.addEventListener("mousedown",s=>{s.isTrusted&&(Gs=!1)});Em({canvas:ls,first:["bEnter","bResume"],isPlaying:()=>an&&tn&&!nn&&!ct,canPlay:()=>an&&!tn&&!nn&&!ct,padLock:()=>{Gs=!0,Xs()},pause:()=>{tn=!1,hs(!0)},back:()=>{nn?fs():an&&!ct&&(Gs=!0,Xs())},onActive:()=>{if(Gs=!0,document.pointerLockElement)try{document.exitPointerLock()}catch{}}});function Pd(){bd(),an=!0,hs(!1),Xs()}se("name").value=ke.name;var qm=()=>{for(let[s,e]of[["vol","vVol"],["wVol","wvVol"]])se(s).value=ke.vol,se(e).textContent=Math.round(ke.vol*100)+"%";se("muteAll").classList.toggle("on",ke.vol===0),se("muteAll").textContent=ke.vol===0?"\u{1F50A} Ton an":"\u{1F507} Ton aus",se("volBtn").textContent=ke.vol===0?"\u{1F507}":"\u{1F50A}",se("volBtn").classList.toggle("off",ke.vol===0)},gd=s=>{ke.vol=Math.max(0,Math.min(1,s)),qm(),ai&&(ai.gain.value=.9*ke.vol);for(let e of mt.audios.values())e.volume=ke.vol,e.muted=ke.vol===0;ql()};qm();var Am=ke.vol||.8;se("vol").oninput=se("wVol").oninput=s=>gd(+s.target.value);se("muteAll").onclick=()=>{ke.vol>0?(Am=ke.vol,gd(0)):gd(Am||.8)};se("volBtn").onclick=()=>se("volPop").classList.toggle("hidden");for(let s of["mousedown","pointerdown","touchstart","click"])se("volW").addEventListener(s,e=>e.stopPropagation());for(let s of["mousedown","touchstart"])document.addEventListener(s,e=>{se("volW").contains(e.target)||se("volPop").classList.add("hidden")},{capture:!0,passive:!0});se("name").oninput=()=>{ke.name=se("name").value.trim().slice(0,16)||"Neue Pussy1",ql(),ds()};se("bEnter").onclick=()=>{xe.role==="none"&&zs(),Pd()};se("bJoin").onclick=()=>{bd();let s=se("code").value;Gl(s).then(e=>{e&&Pd()})};se("code").addEventListener("keydown",s=>{s.key==="Enter"&&se("bJoin").click()});se("bOwn").onclick=()=>{zs(),$t("Du bist wieder in deinem eigenen Raum."),Pd()};ls.addEventListener("click",()=>{an&&!tn&&!ct&&!nn?Xs():tn&&bt&&Ld(bt)});document.addEventListener("pointerlockchange",()=>{Gs||(tn=document.pointerLockElement===ls,se("clickHint").classList.toggle("hidden",tn||!an||ct||nn),!tn&&an&&!ct&&!nn&&hs(!0))});document.addEventListener("mousemove",s=>{if(!tn)return;let e=.0022*(ke.sens||1);Ne.yaw-=s.movementX*e,Ne.pitch-=s.movementY*e*(ke.invert?-1:1),Ne.pitch=Math.max(-1.45,Math.min(1.45,Ne.pitch))});document.addEventListener("keydown",s=>{if(s.code==="F11"){s.preventDefault();try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen({navigationUI:"hide"}).then(()=>{an&&!se("menu").classList.contains("hidden")||an&&Xs()}).catch(()=>{})}catch{}return}document.activeElement&&/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)||(rt[s.code]=!0,(s.code==="KeyV"||s.code==="KeyM")&&an&&!s.repeat&&Gm(),s.code==="KeyE"&&tn&&bt&&Ld(bt),s.code==="Space"&&s.preventDefault())},!0);document.addEventListener("keyup",s=>{rt[s.code]=!1});window.addEventListener("blur",()=>{for(let s in rt)rt[s]=!1});function ZE(){if(!on)return;let s=document.createElement("div");s.id="touch",s.className="hidden",s.innerHTML='<div id="tLook"></div><div id="tJoy"><div id="tJoyBase"></div><div id="tKnob"></div></div><div id="tBtns"><button class="tb" id="tTalk">\u{1F3A4}</button><button class="tb big" id="tUse">E</button><button class="tb" id="tJump">SPRING</button></div><button id="tPause" aria-label="Men\xFC">\u2630</button>',document.body.appendChild(s);let e=se("tLook"),t=se("tJoy"),n=se("tKnob"),i=new Map;e.addEventListener("touchstart",g=>{g.preventDefault();for(let x of g.changedTouches)i.set(x.identifier,[x.clientX,x.clientY])},{passive:!1}),e.addEventListener("touchmove",g=>{g.preventDefault();for(let x of g.changedTouches){let m=i.get(x.identifier);if(!m)continue;let p=.0055*(ke.sens||1);Ne.yaw-=(x.clientX-m[0])*p,Ne.pitch=Math.max(-1.45,Math.min(1.45,Ne.pitch-(x.clientY-m[1])*p*.8)),m[0]=x.clientX,m[1]=x.clientY}},{passive:!1});let r=g=>{for(let x of g.changedTouches)i.delete(x.identifier)};e.addEventListener("touchend",r),e.addEventListener("touchcancel",r);let o=null,a=0,l=0,c=56,u=(g,x)=>{let m=g-a,p=x-l,v=Math.hypot(m,p);v>c&&(m*=c/v,p*=c/v),n.style.transform=`translate(${m}px,${p}px)`;let _=m/c,y=p/c,R=.3;rt.KeyW=y<-R,rt.KeyS=y>R,rt.KeyA=_<-R,rt.KeyD=_>R},h=()=>{o=null,n.style.transform="",rt.KeyW=rt.KeyS=rt.KeyA=rt.KeyD=!1};t.addEventListener("touchstart",g=>{if(g.preventDefault(),o!==null)return;let x=g.changedTouches[0];o=x.identifier;let m=t.getBoundingClientRect();a=m.left+m.width/2,l=m.top+m.height/2,u(x.clientX,x.clientY)},{passive:!1}),t.addEventListener("touchmove",g=>{g.preventDefault();for(let x of g.changedTouches)x.identifier===o&&u(x.clientX,x.clientY)},{passive:!1});let d=g=>{for(let x of g.changedTouches)x.identifier===o&&h()};t.addEventListener("touchend",d),t.addEventListener("touchcancel",d);let f=(g,x,m)=>{let p=se(g);p.addEventListener("touchstart",v=>{v.preventDefault(),v.stopPropagation(),p.classList.add("on"),x()},{passive:!1}),p.addEventListener("touchend",v=>{v.preventDefault(),p.classList.remove("on"),m&&m()},{passive:!1})};f("tJump",()=>{rt.Space=!0},()=>{rt.Space=!1}),f("tUse",()=>{bt&&Ld(bt)}),f("tTalk",()=>Gm()),se("tPause").addEventListener("click",()=>{tn=!1,h(),hs(!0)}),setInterval(()=>{s.classList.toggle("hidden",!(an&&tn&&!ct&&!nn)),se("tUse").classList.toggle("hot",!!bt),se("tTalk").classList.toggle("mic",mt.talking),tn||h()},150)}ZE();var Rm=new Lr,ks=null;function Ym(){requestAnimationFrame(Ym);let s=Math.min(Rm.getDelta(),.05),e=Rm.elapsedTime,t=(rt.KeyW||rt.ArrowUp?1:0)-(rt.KeyS||rt.ArrowDown?1:0),n=(rt.KeyD||rt.ArrowRight?1:0)-(rt.KeyA||rt.ArrowLeft?1:0),i=tn&&!ct,r=(rt.ShiftLeft||rt.ShiftRight?10.5:6.5)*bn.speedMul(),o=new I;i&&(o.set(n,0,-t),o.lengthSq()>0&&o.normalize().multiplyScalar(r).applyAxisAngle(new I(0,1,0),Ne.yaw),bn.drift(o,e));let a=Ne.ground?12:3;Ne.vel.x+=(o.x-Ne.vel.x)*Math.min(1,a*s),Ne.vel.z+=(o.z-Ne.vel.z)*Math.min(1,a*s),i&&rt.Space&&Ne.ground&&(Ne.vel.y=6.2*bn.jumpMul(),Ne.ground=!1,An.jump()),Ne.vel.y-=18*s,Ne.pos.addScaledVector(Ne.vel,s),Ne.pos.y<=0&&(Ne.pos.y=0,Ne.vel.y=0,Ne.ground=!0),km(Ne.pos),VE(),Nn.position.set(Ne.pos.x,Ne.pos.y+UE+(Ne.ground?Math.sin(e*9)*.025*Math.min(1,Math.hypot(Ne.vel.x,Ne.vel.z)/6):0),Ne.pos.z),Nn.rotation.set(Ne.pitch,Ne.yaw,0),ks=null;let l=1e9;for(let u of qn){u.mat.uniforms.t.value=e+u.i;let h=Math.hypot(Ne.pos.x-u.pos.x,Ne.pos.z-u.pos.z),d=u.on?Math.max(0,1-h/7):0;if(u.mat.uniforms.hot.value=d,u.light&&(u.light.intensity=12+Math.sin(e*2+u.i)*2+d*10),u.parts){let f=u.parts.geometry.attributes.position,g=u.parts.userData.sp;for(let x=0;x<f.count;x++){let m=f.getY(x)+g[x]*s;m>4.6&&(m=0),f.setY(x,m)}f.needsUpdate=!0}u.on&&h<l&&(l=h,h<6.5&&(ks=u))}GE(ks?Math.max(0,1-l/6.5):0);let c=se("prompt");rb(),bt===Dd&&!ct?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ff7fd8">\u{1F579}\uFE0F SPK Arcade</b><br><small>${on?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Retro-Spiele spielen</small>`):bt===Id&&!ct?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ff7fd8">\u{1F455} S.P.K Merch</b><br><small>${on?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = T-Shirts ansehen</small>`):bt===Nd&&!ct?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ffd23f">Umkleide</b><br><small>${on?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = umziehen</small>`):bt===kd&&!ct?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#9fe8b0">G\xE4stebuch</b><br><small>${on?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = lesen & reinschreiben</small>`):bt===Vl&&!ct?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#e3b27a">N\xE4chste Party</b><br><small>${on?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Flyer gro\xDF ansehen</small>`):bt&&bt.radio&&!ct?(c.classList.remove("hidden"),c.innerHTML=An.prompt(on)):bt&&bt.secret&&!ct?(c.classList.remove("hidden"),c.innerHTML=bn.prompt(bt,on)):bt&&!ct?(c.classList.remove("hidden"),c.innerHTML=`<b style="color:#ff7fd8">${yi(bt.dj.name||"DJ")}</b><br><small>${on?"Tippe auf <kbd>E</kbd>":"Klicken oder <kbd>E</kbd>"} = Instagram, SoundCloud & Co.</small>`):ks&&!ct?(c.classList.remove("hidden"),c.innerHTML=`${on?"Geh ins Portal":"Lauf ins Portal"}: <b style="color:${ks.col}">${yi(ks.game.name||ks.game.ordner)}</b> startet sofort`+(Ht.size?"<br><small>Alle im Raum kommen mit</small>":"")):c.classList.add("hidden"),pb(s),os&&(os.rotation.y=e*.25,os.position.y=6.2+Math.sin(e*.8)*.15);for(let u of Ht.values()){u.fresh&&(u.p.copy(u.tp),u.y=u.ty,u.fresh=!1),u.p.lerp(u.tp,Math.min(1,s*12));let h=u.ty-u.y;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;u.y+=h*Math.min(1,s*12),u.av.root.position.copy(u.p),u.av.root.rotation.y=u.y,u.av.tag.lookAt(Nn.position.x,u.p.y+2.15,Nn.position.z),Tm(u.av,u.sp,u.air,s)}if(mi){let u=oi.pos&&Math.hypot(Ne.pos.x-oi.pos.x,Ne.pos.z-oi.pos.z)<12;mi.root.visible=!!u,Kr&&(Kr.visible=!!u||!0),u&&(mi.root.position.copy(Ne.pos),mi.root.rotation.y=Ne.yaw,Tm(mi,Math.hypot(Ne.vel.x,Ne.vel.z),!Ne.ground,s))}xe.role!=="none"&&KE(s),bn.tick(s,e),An.tick(s,e),Vt&&Vt.tick(e,Ne.pos.distanceTo(Vt.pos)<14),bn.render(gi)||(gi?gi.render():us.render(ut,Nn))}var FS=new I,JE=[["instagram","Instagram","#e1306c"],["facebook","Facebook","#1877f2"],["soundcloud","SoundCloud","#ff5500"],["tiktok","TikTok","#25f4ee"],["youtube","YouTube","#ff0000"],["spotify","Spotify","#1db954"],["mixcloud","Mixcloud","#5000ff"],["beatport","Beatport","#01ff95"],["website","Webseite","#ffffff"]],$r=[],bt=null,nn=!1;async function QE(){try{let e=await(await fetch("/System/djs.json",{cache:"no-store"})).json();return Array.isArray(e)?e:e.djs||[]}catch{return[]}}function eb(s,e){let i=kt(512,640,r=>{let o=r.createLinearGradient(0,0,0,640);o.addColorStop(0,"#1a0f24"),o.addColorStop(1,"#07060c"),r.fillStyle=o,r.fillRect(0,0,512,640),r.fillStyle="#2b2236",r.beginPath(),r.arc(256,250,92,0,Math.PI*2),r.fill(),r.beginPath(),r.ellipse(256,520,170,150,0,Math.PI,0),r.fill(),r.strokeStyle="#ff2fb0",r.lineWidth=16,r.beginPath(),r.arc(256,250,112,Math.PI*1.08,Math.PI*1.92),r.stroke(),r.fillStyle="#ff2fb0",r.fillRect(128,240,30,62),r.fillRect(354,240,30,62),r.fillStyle="rgba(255,255,255,0.35)",r.font="600 26px system-ui, sans-serif",r.textAlign="center",r.fillText("Foto folgt",256,90)});if(s.foto){let r=new Image;r.onload=()=>{let o=i.image,a=o.getContext("2d"),l=Math.max(o.width/r.width,o.height/r.height),c=r.width*l,u=r.height*l;a.drawImage(r,(o.width-c)/2,(o.height-u)/2,c,u),i.needsUpdate=!0},r.src=/^(https?:)?\//.test(s.foto)?s.foto:"/System/dj-fotos/"+s.foto}return i}async function tb(){let s=await QE(),e=Math.max(1,s.length),t=Xl+.45,n=Md-.62,i=.22,r=.06,o=.22,a=.24,l=Math.min((n-t-i-o-a-3*r)/e,.29),c=e*l+3*r+i+o+a,u=(t+n)/2-c/2+l/2,h=u+l*(e-1)/2,d=rn-.12,f=1.7,g=2.15,x=2.75,m=u+(e-1)*l+l/2+r+a/2,p=m+a/2+r+i/2;sb(m),lb(p,d),vb(p+i/2+r+o/2,d);try{let R=p+i/2+r+o,b=kn.ang-.125;yb((R+b)/2,d)}catch(R){console.warn("Bestenliste",R)}if(!s.length)return;let v=kt(1024,128,(R,b,w)=>{R.clearRect(0,0,b,w),R.textAlign="center",R.textBaseline="middle",R.font='400 120px Impact, "Arial Black", sans-serif',R.shadowColor="#ff2fb0",R.shadowBlur=6,R.fillStyle="#ff7fd8",R.fillText("SPK DJs",b/2,w/2)}),_=new F(new at(6,.75),new De({map:v,transparent:!0,toneMapped:!1,depthWrite:!1,color:13684944}));_.position.set(Math.sin(h)*(d-.05),x+g/2+.85,-Math.cos(h)*(d-.05)),_.lookAt(0,x+g/2+.85,0),ut.add(_);let y=new ge({color:1776418,roughness:.35,metalness:.8});s.forEach((R,b)=>{let w=u+b*l,P=new Xe;P.position.set(Math.sin(w)*d,x,-Math.cos(w)*d),P.lookAt(0,x,0),ut.add(P);let S=new F(new Oe(f+.22,g+.22+.42,.08),y);S.position.y=-.21,P.add(S);let E=new F(new at(f,g),new De({map:eb(R,b),toneMapped:!1}));E.position.z=.05,P.add(E);let L=kt(512,96,(z,k,te)=>{z.fillStyle="#0b0910",z.fillRect(0,0,k,te),z.textAlign="center",z.textBaseline="middle",z.font='400 58px Impact, "Arial Black", sans-serif',z.fillStyle="#fff",z.fillText(String(R.name||"DJ "+(b+1)).toUpperCase(),k/2,te/2+2)}),H=new F(new at(f,.34),new De({map:L,toneMapped:!1}));H.position.set(0,-g/2-.22,.05),P.add(H);let D=new F(new Oe(f+.3,.03,.03),new De({color:16723888,toneMapped:!1}));D.position.set(0,g/2+.13,.06),P.add(D);let B=new di(16769268,9,7,.5,.6,1.5);B.position.set(0,g/2+1.2,1.4),B.target=E,P.add(B),$r.push({dj:R,g:P,pic:E,edge:D,i:b})})}var Id={merch:!0},Zr=null,ta={url:"",text:"Offizielle S.P.K T-Shirts"},nb="/SPK%20-%20Fuck%20the%20Police/spiel/assets/spk_logo.png";function ib(s,e){let t=new Di,n=s/2;t.moveTo(-n*.62,-e/2),t.lineTo(n*.62,-e/2),t.lineTo(n*.64,e*.18),t.lineTo(n*.98,e*.06),t.lineTo(n*1.18,e*.3),t.lineTo(n*.78,e*.5),t.lineTo(n*.24,e*.5),t.quadraticCurveTo(0,e*.36,-n*.24,e*.5),t.lineTo(-n*.78,e*.5),t.lineTo(-n*1.18,e*.3),t.lineTo(-n*.98,e*.06),t.lineTo(-n*.64,e*.18),t.closePath();let i=new Fo(t,12),r=i.attributes.position,o=i.attributes.uv;for(let a=0;a<r.count;a++)o.setXY(a,(r.getX(a)+n*1.18)/(n*2.36),(r.getY(a)+e/2)/e);return i}var dd={};function Cm(s,e){let t=s+e;if(dd[t])return dd[t];let n=new Image,i=kt(256,256,(r,o,a)=>{r.fillStyle=s,r.fillRect(0,0,o,a);for(let l=0;l<900;l++)r.fillStyle=`rgba(${Math.random()<.5?"0,0,0":"255,255,255"},0.035)`,r.fillRect(Math.random()*o,Math.random()*a,2,2);r.strokeStyle="rgba(0,0,0,0.18)",r.lineWidth=3,r.beginPath(),r.moveTo(66,150),r.lineTo(80,210),r.moveTo(190,150),r.lineTo(176,210),r.stroke(),r.font='400 30px Impact, "Arial Black", sans-serif',r.textAlign="center",r.fillStyle=e,r.fillText("S.P.K",o/2,190),r.font="700 11px Arial",r.fillText("SOUNDSYSTEM",o/2,206)});return n.onload=()=>{let r=i.image,o=r.getContext("2d");(e==="#ffffff"||e==="#39ff88"||e==="#ff2fb0")&&(o.save(),o.globalCompositeOperation="source-over"),o.drawImage(n,88,70,80,80),e&&o.restore&&o.restore(),i.needsUpdate=!0},n.src=nb,dd[t]=i,i}async function sb(s){try{let D=await fetch("/System/merch.json",{cache:"no-store"});ta=Object.assign(ta,await D.json())}catch{}let e=rn-1.12,t=new Xe;t.position.set(Math.sin(s)*e,0,-Math.cos(s)*e),t.lookAt(0,0,0),ut.add(t);let n=3.6,i=1.7,r=2.55,o=new ge({map:Zm(),roughness:.75,metalness:0}),a=new ge({color:1381658,roughness:.6,metalness:.4}),l=(D,B,z,k,te,q,pe)=>{let me=new F(new Oe(D,B,z),pe);return me.position.set(k,te,q),me.castShadow=!0,me.receiveShadow=!0,t.add(me),me};l(n,.1,i,0,.05,0,o);for(let D of[-n/2+.08,n/2-.08])for(let B of[-i/2+.08,i/2-.12])l(.1,r,.1,D,r/2+.1,B,a);let c=kt(1024,512,(D,B,z)=>{let k=D.createLinearGradient(0,0,0,z);k.addColorStop(0,"#1b1b22"),k.addColorStop(1,"#0b0b0f"),D.fillStyle=k,D.fillRect(0,0,B,z);for(let te=0;te<B;te+=6)D.fillStyle="rgba(255,255,255,0.02)",D.fillRect(te,0,2,z)});l(n-.2,r-.1,.04,0,r/2+.15,-i/2+.06,new ge({map:c,roughness:.95}));let u=new ge({color:13620184,metalness:1,roughness:.25}),h=new F(new je(.02,.02,n-.3,10),u);h.rotation.z=Math.PI/2,h.position.set(0,2.05,-i/2+.32),t.add(h);let d=[["#0d0d0f","#ff2fb0"],["#f2f2f2","#111111"],["#ff2fb0","#0d0d0f"],["#0d0d0f","#39ff88"],["#20e0ff","#0d0d0f"],["#0d0d0f","#ffffff"]],f=ib(.62,.72);d.forEach(([D,B],z)=>{let k=-1.3+z*.52,te=new F(f,new ge({map:Cm(D,B),color:13421772,roughness:1,side:Pt}));te.position.set(k,1.62,-i/2+.34+z*.004),te.rotation.y=(z%2?1:-1)*.06,te.castShadow=!0,t.add(te);let q=new F(new Gt(.035,.006,6,12,Math.PI*1.4),u);q.position.set(k,2.03,-i/2+.34),t.add(q);let pe=new F(new Oe(.44,.015,.015),u);pe.position.set(k,1.96,-i/2+.345),t.add(pe)});let g=kt(1024,256,(D,B,z)=>{D.fillStyle="#0d0d10",D.fillRect(0,0,B,z),D.strokeStyle="#ff2fb0",D.lineWidth=8,D.strokeRect(10,10,B-20,z-20),D.font='400 120px Impact, "Arial Black", sans-serif',D.textAlign="center",D.textBaseline="middle",D.fillStyle="#ffffff",D.fillText("S.P.K  MERCH",B/2,z/2+6),D.font="700 26px Arial",D.fillStyle="#39ff88",D.fillText("T-SHIRTS \xB7 SOUNDSYSTEM \xB7 LINZ",B/2,z-34)}),x=[o,o,o,o,new ge({map:g,roughness:.6}),o],m=new F(new Oe(n-.3,1,.55),x);m.position.set(0,.6,i/2-.3),m.castShadow=!0,t.add(m),l(n-.2,.05,.65,0,1.125,i/2-.3,o);let p=(D,B,z,k)=>{for(let te=0;te<k;te++){let q=new F(new Oe(.34,.035,.26),[new ge({color:D,roughness:.95}),new ge({color:D,roughness:.95}),new ge({map:Cm(D,B),roughness:.95}),new ge({color:D,roughness:.95}),new ge({color:D,roughness:.95}),new ge({color:D,roughness:.95})]);q.position.set(z+(Math.random()-.5)*.02,1.17+te*.036,i/2-.32),q.rotation.y=(Math.random()-.5)*.08,q.castShadow=!0,t.add(q)}};p("#0d0d0f","#ff2fb0",-1.15,5),p("#f2f2f2","#111111",-.6,4),p("#ff2fb0","#0d0d0f",.55,4),p("#0d0d0f","#39ff88",1.1,6);let v=kt(256,128,(D,B,z)=>{D.fillStyle="#ffe22f",D.fillRect(0,0,B,z),D.fillStyle="#111",D.font="900 64px Arial",D.textAlign="center",D.textBaseline="middle",D.fillText("25 \u20AC",B/2,z/2+4)}),_=new De({map:v,color:11579568});for(let D of[-.88,.82]){let B=new F(new at(.3,.15),_);B.position.set(D,1.24,i/2-.01),B.rotation.x=-.35,t.add(B)}l(.22,.06,.16,.05,1.18,i/2-.42,a);let y=kt(512,256,(D,B,z)=>{for(let k=0;k<16;k++)D.fillStyle=k%2?"#ff2fb0":"#111114",D.fillRect(k*32,0,32,z);D.fillStyle="rgba(255,255,255,0.08)",D.fillRect(0,z-30,B,30)}),R=new F(new at(n+.3,i+.5),new ge({map:y,roughness:.8,side:Pt}));R.rotation.x=-Math.PI/2+.22,R.position.set(0,r+.12,.2),R.castShadow=!0,t.add(R);let b=kt(512,64,(D,B,z)=>{for(let k=0;k<16;k++)D.fillStyle=k%2?"#ff2fb0":"#111114",D.beginPath(),D.moveTo(k*32,0),D.lineTo(k*32+32,0),D.lineTo(k*32+32,40),D.quadraticCurveTo(k*32+16,64,k*32,40),D.closePath(),D.fill()},!0);b.premultiplyAlpha=!1;let w=new F(new at(n+.3,.28),new ge({map:b,transparent:!0,roughness:.8,side:Pt}));w.position.set(0,r-.1,i/2+.43),t.add(w);let P=Ws([{t:"S.P.K MERCH",size:120,c:"#ffffff",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"#ff2fb0"}],{w:1024,h:180,pw:2.6});P.position.set(0,r+.62,i/2-.1),t.add(P);let S=new De({color:12098144});for(let D=0;D<11;D++){let B=-n/2+.05+D*(n-.1)/10,z=new F(new pt(.035,8,6),S);z.position.set(B,r-.2-Math.sin(D/10*Math.PI)*.12,i/2+.45),t.add(z)}let E=new yn(16767144,2.2,5,1.6);E.position.set(0,r-.6,.6),t.add(E);let L=new di(16773856,4.2,7,.7,.7,1.5);L.position.set(0,r,1.6);let H=new It;H.position.set(0,1.5,-.5),t.add(L,H),L.target=H,Zr=new F(new Oe(n+.3,r+1.2,i+.6),new De({transparent:!0,opacity:0,depthWrite:!1})),Zr.position.set(0,(r+1.2)/2,0),t.add(Zr),xd.pos=t.position.clone(),xd.yaw=s}var xd={pos:null,yaw:0};function Km(){nn=!0;for(let e in rt)rt[e]=!1;try{document.exitPointerLock()}catch{}se("djName").textContent="S.P.K MERCH",se("djInfo").textContent=ta.text||"Offizielle S.P.K T-Shirts";let s=se("djPhoto");s.src="/System/dj-fotos/spk.jpg",s.classList.remove("hidden"),s.classList.remove("big"),yd(),se("djBox").classList.remove("hidden")}var jm=()=>{try{return localStorage.getItem("spk-merch-shirt")==="1"}catch{return!1}};function yd(){let s=jm(),e=!!(ke.look&&ke.look.spk),t=s?`<button class="djl" id="mWear" style="--c:#39ff88">${e?"\u{1F455} Shirt ausziehen":"\u{1F455} Shirt anziehen"}</button>`:'<button class="djl" id="mBuy" style="--c:#39ff88">\u{1F6D2} Gratis kaufen (nur im Spiel)</button>';se("djLinks").innerHTML=t+'<p class="djnone" style="margin:6px 0 10px;opacity:.8">Das Spiel-Shirt ist gratis. Das echte T-Shirt kostet 25 \u20AC:</p>'+(ta.url?`<a class="djl" href="${yi(ta.url)}" target="_blank" rel="noopener" style="--c:#ff2fb0">\u{1F455} Zum T-Shirt-Shop</a>`:'<p class="djnone">Link ist bald verf\xFCgbar.</p>');let n=o=>{if(ke.look=En(Object.assign({},ke.look,{spk:o?1:0})),ql(),jl(),xe.role==="client"&&xe.conn)try{xe.conn.send({t:"look",lk:ke.look})}catch{}},i=se("mBuy");i&&(i.onclick=()=>{try{localStorage.setItem("spk-merch-shirt","1")}catch{}n(!0),Td(!0),$t("Danke! Du tr\xE4gst jetzt das S.P.K T-Shirt \u2013 in der Umkleide kannst du es an- und ausziehen."),yd()});let r=se("mWear");r&&(r.onclick=()=>{let o=!(ke.look&&ke.look.spk);n(o),$t(o?"S.P.K T-Shirt angezogen.":"S.P.K T-Shirt ausgezogen."),yd()})}var fd=new _l;function rb(){if(bt=null,!tn||ct)return;fd.setFromCamera({x:0,y:0},Nn),fd.far=9;let s=$r.map(n=>n.pic);pi&&s.push(pi),Hs&&s.push(Hs),Jr&&s.push(Jr),Vt&&s.push(Vt.hit),Zr&&s.push(Zr);let e=bn.targets();for(let n of e)s.push(n);for(let n of An.targets())s.push(n);let t=fd.intersectObjects(s,!1);if(t.length&&t[0].object.userData.aim&&t[0].object.userData.aim.radio)bt=t[0].distance<4.5?t[0].object.userData.aim:null;else if(t.length&&t[0].object.userData.aim){let n=t[0].object.userData.aim;bt=t[0].distance<2.8&&bn.canAim(n)?n:null}else t.length&&Vt&&t[0].object===Vt.hit?bt=t[0].distance<4.2?Dd:null:t.length&&t[0].object===Zr?bt=t[0].distance<5.5?Id:null:t.length&&t[0].distance<6?bt=t[0].object===Jr?Nd:t[0].object===pi?Vl:t[0].object===Hs?kd:$r.find(n=>n.pic===t[0].object)||null:bt=null;for(let n of $r)n.edge.scale.y=n===bt?3:1;pi&&pi.scale.setScalar(bt===Vl?1.02:1)}function Ld(s){if(s&&s.secret){bn.use(s);return}if(s&&s.radio){An.openRadio();return}if(s===Vl){cb();return}if(s===kd){_b();return}if(s===Nd){Qm();return}if(s===Dd){ub();return}if(s===Id){Km();return}let e=s.dj;nn=!0;for(let i in rt)rt[i]=!1;try{document.exitPointerLock()}catch{}let t=JE.filter(([i])=>e[i]).map(([i,r,o])=>`<a class="djl" href="${yi(e[i])}" target="_blank" rel="noopener" style="--c:${o}">${r}</a>`).join("");se("djName").textContent=e.name||"DJ",se("djInfo").textContent=e.info||"",se("djLinks").innerHTML=t||'<p class="djnone">F\xFCr diesen DJ sind noch keine Links eingetragen.</p>',se("djPhoto").classList.remove("big");let n=se("djPhoto");e.foto?(n.src=/^(https?:)?\//.test(e.foto)?e.foto:"/System/dj-fotos/"+e.foto,n.classList.remove("hidden")):n.classList.add("hidden"),se("djBox").classList.remove("hidden")}function fs(){se("radBox")&&se("radBox").classList.add("hidden"),se("djBox").classList.add("hidden"),se("gbBox").classList.add("hidden"),se("wrBox").classList.add("hidden"),He.open=!1,nn=!1,an&&Xs()}se("djClose").onclick=fs;se("djBox").addEventListener("click",s=>{s.target.id==="djBox"&&fs()});var Vl={flyer:!0},pi=null,ri={};async function ob(){try{return await(await fetch("/System/party.json",{cache:"no-store"})).json()}catch{return{}}}function $m(s){return/^(https?:)?\/\//.test(s)?s:"/System/flyer/"+s}function Zm(){return kt(1024,1280,(s,e,t)=>{let i=t/6;for(let r=0;r<6;r++){let o=[120,78,44].map(a=>a+Math.floor((Math.random()-.5)*22));s.fillStyle=`rgb(${o})`,s.fillRect(0,r*i,e,i);for(let a=0;a<70;a++){let l=r*i+Math.random()*i;s.strokeStyle=`rgba(${Math.random()<.5?"60,35,15":"170,120,75"},${.08+Math.random()*.12})`,s.lineWidth=1+Math.random()*3,s.beginPath(),s.moveTo(0,l);for(let c=0;c<=e;c+=64)s.lineTo(c,l+Math.sin(c/90+a)*4);s.stroke()}if(Math.random()<.7){let a=Math.random()*e,l=r*i+i/2,c=s.createRadialGradient(a,l,2,a,l,26);c.addColorStop(0,"rgba(50,28,10,0.7)"),c.addColorStop(1,"rgba(50,28,10,0)"),s.fillStyle=c,s.beginPath(),s.ellipse(a,l,40,18,0,0,Math.PI*2),s.fill()}s.fillStyle="rgba(25,14,6,0.85)",s.fillRect(0,r*i,e,5);for(let a of[60,e-60])s.fillStyle="#3a3a3a",s.beginPath(),s.arc(a,r*i+i/2,9,0,Math.PI*2),s.fill()}})}function ab(s){return kt(768,1086,(e,t,n)=>{e.fillStyle="#f2ece0",e.fillRect(0,0,t,n),e.fillStyle="#ff2fb0",e.fillRect(0,0,t,150),e.textAlign="center",e.textBaseline="middle",e.font='400 96px Impact, "Arial Black", sans-serif',e.fillStyle="#fff",e.fillText("SPK",t/2,80),e.font='400 84px Impact, "Arial Black", sans-serif',e.fillStyle="#18101c",e.fillText("N\xC4CHSTE",t/2,330),e.fillText("PARTY",t/2,430),e.font='600 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="#5a5060";let i=String(s||"Flyer folgt \u2013 bald steht hier, wann und wo die n\xE4chste SPK Party steigt!").split(" "),r="",o=600;for(let a of i){let l=r?r+" "+a:a;e.measureText(l).width>t-120?(e.fillText(r,t/2,o),o+=56,r=a):r=l}r&&e.fillText(r,t/2,o)})}async function lb(s,e){ri=await ob();let t=2.75,n=3,i=3.7,r=new Xe;r.position.set(Math.sin(s)*(e-.02),t,-Math.cos(s)*(e-.02)),r.lookAt(0,t,0),ut.add(r);let o=new F(new Oe(n,i,.12),new ge({map:Zm(),roughness:.85,metalness:0}));r.add(o);let a=new ge({color:3875858,roughness:.8});for(let[d,f,g,x]of[[0,i/2,n+.16,.14],[0,-i/2,n+.16,.14],[n/2,0,.14,i],[-n/2,0,.14,i]]){let m=new F(new Oe(g,x,.18),a);m.position.set(d,f,.02),r.add(m)}for(let d of[-n/2+.25,n/2-.25]){let f=new F(new Oe(.14,t-i/2+.3,.14),a);f.position.set(d,-i/2-(t-i/2)/2+.15,-.05),r.add(f)}let l=2.1,c=l*1.414,u=ab(ri.text);if(pi=new F(new at(l,c),new ge({map:u,roughness:.9})),pi.position.set(0,.05,.075),pi.rotation.z=-.015,r.add(pi),ri.flyer){let d=new Image;d.onload=()=>{let f=u.image,g=f.getContext("2d");g.fillStyle="#111",g.fillRect(0,0,f.width,f.height);let x=Math.min(f.width/d.width,f.height/d.height),m=d.width*x,p=d.height*x;g.drawImage(d,(f.width-m)/2,(f.height-p)/2,m,p),u.needsUpdate=!0},d.src=$m(ri.flyer)}for(let[d,f]of[[-l/2+.12,c/2-.12],[l/2-.12,c/2-.12]]){let g=new F(new pt(.05,12,8),new ge({color:16723888,roughness:.3}));g.position.set(d,f+.05,.11),r.add(g)}let h=new di(16773340,9,8,.6,.7,1.4);h.position.set(0,i/2+1,1.8),h.target=pi,r.add(h)}function cb(){nn=!0;for(let e in rt)rt[e]=!1;try{document.exitPointerLock()}catch{}se("djName").textContent="N\xC4CHSTE PARTY",se("djInfo").textContent=ri.flyer?ri.text||"":ri.text||"Flyer folgt \u2013 bald steht hier, wann die n\xE4chste SPK Party steigt!";let s=se("djPhoto");ri.flyer?(s.src=$m(ri.flyer),s.classList.remove("hidden"),s.classList.add("big")):s.classList.add("hidden"),se("djLinks").innerHTML=ri.link?`<a class="djl" href="${yi(ri.link)}" target="_blank" rel="noopener" style="--c:#e3b27a">Mehr Infos</a>`:"",se("djBox").classList.remove("hidden")}var Dd={arcade:!0},Vt=null;function hb(){let s=Xl+.24,e=rn-1.25;Vt=_m(kt),Vt.g.scale.setScalar(2.2/1.75),Vt.g.position.set(Math.sin(s)*e,0,-Math.cos(s)*e),Vt.g.lookAt(0,0,0),ut.add(Vt.g),Vt.pos=Vt.g.position.clone()}function ub(){if(!ct){if(xe.role==="client"&&xe.conn&&xe.conn.open){try{xe.conn.send({t:"arc"})}catch{}ct=!0,$t("Warte auf den Raum \u2026"),setTimeout(()=>{ct&&!cs&&(ct=!1)},5e3);return}if(xe.role==="host"&&Ht.size){Jm(ke.name);return}Ud(null,null)}}function Jm(s){if(cs)return;let e=Ed();for(let t of xe.conns.values())try{t.conn.open&&t.conn.send({t:"arcgo",code:e,who:s})}catch{}Ud(e,"host",s)}function Ud(s,e,t){if(cs)return;cs=!0,ct=!0;for(let l in rt)rt[l]=!1;document.pointerLockElement&&document.exitPointerLock(),t&&t!==ke.name&&$t(t+" startet die Arcade \u2013 alle spielen mit!");let n=document.createElement("div");n.id="arcLoad",n.style.cssText='position:fixed;inset:0;z-index:99;background:#05030c;display:flex;flex-direction:column;align-items:center;justify-content:center;font:900 46px "Courier New",monospace;color:#ff2fb0;letter-spacing:.1em;text-shadow:0 0 18px #ff2fb0',n.innerHTML='<div>SPK ARCADE</div><div style="margin-top:28px;width:min(420px,80vw);height:34px;border:4px solid #fff;padding:4px;box-sizing:border-box;display:flex;gap:4px" id="arcBar"></div><div style="margin-top:14px;font-size:16px;color:#20e0ff;text-shadow:none">LADE ...</div>',document.body.appendChild(n),Sd();let i=0,r=n.querySelector("#arcBar"),o=setInterval(()=>{i++;let l=document.createElement("i");l.style.cssText="flex:0 0 calc((100% - 44px)/12);background:"+(i<5?"#39ff88":i<9?"#ffd23f":"#ff2fb0"),r.appendChild(l),i>=12&&clearInterval(o)},100);try{sessionStorage.setItem("gbgc-zurueck",JSON.stringify({role:xe.role==="client"?"client":"host",code:xe.code,t:Date.now()}))}catch{}let a="/Arcade/spiel/index.html?name="+encodeURIComponent(ke.name)+(s?"&konsole="+e+"&code="+s:"")+(pn.get("peerhost")?"&peerhost="+pn.get("peerhost")+"&peerport="+(pn.get("peerport")||9e3)+"&ice=none":"");setTimeout(()=>{Yl(),location.href=a},e==="join"?2600:1400)}var Nd={cab:!0},kn={ang:Md-.14,r:rn-1.15,pos:null},Jr=null;function db(){let s=kn.ang,e=Math.sin(s)*kn.r,t=-Math.cos(s)*kn.r;kn.pos=new I(e,0,t);let n=new Xe;n.position.set(e,0,t),n.lookAt(0,0,0),ut.add(n);let i=1.9,r=2.6,o=1.6,a=new ge({color:2761264,roughness:.6,metalness:.3}),l=(x,m,p,v,_,y,R=a)=>{let b=new F(new Oe(x,m,p),R);return b.position.set(v,_,y),n.add(b),b};l(i,r,.08,0,r/2,-o/2),l(.08,r,o,-i/2,r/2,0),l(.08,r,o,i/2,r/2,0),l(i+.1,.1,o+.1,0,r,0),l(i,.06,o,0,.03,0,new ge({color:3812922,roughness:.9})),l(.9,1.7,.03,0,1.25,-o/2+.06,new ge({color:13621480,roughness:.05,metalness:1}));let c=new ge({color:13112687,roughness:.85,side:Pt});for(let x of[-1,1]){let m=new at(.55,r-.25,12,1),p=m.attributes.position;for(let _=0;_<p.count;_++)p.setZ(_,Math.sin(p.getX(_)*22)*.04);m.computeVertexNormals();let v=new F(m,c);v.position.set(x*(i/2-.3),(r-.25)/2+.05,o/2),n.add(v)}l(i,.04,.04,0,r-.12,o/2,new ge({color:12566463,metalness:1,roughness:.3}));let u=Ws([{t:"UMKLEIDE",size:120,c:"#ffd23f",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"rgba(255,170,0,0.6)"}],{w:1024,h:180,pw:1.9});u.position.set(0,r+.35,o/2),n.add(u);let h=new yn(16773328,6,4,1.6);h.position.set(0,r-.3,.2),n.add(h),Jr=new F(new Oe(i+.4,r+.6,o+.4),new De({transparent:!0,opacity:0,depthWrite:!1})),Jr.position.set(0,r/2,0),n.add(Jr);let d=new Xe;d.position.set(i/2+.7,0,.3),n.add(d);let f=new ge({color:12566463,metalness:1,roughness:.3});for(let x of[-.45,.45]){let m=new F(new je(.02,.02,1.6,8),f);m.position.set(x,.8,0),d.add(m)}let g=new F(new je(.02,.02,.95,8),f);g.rotation.z=Math.PI/2,g.position.y=1.55,d.add(g),Mn.slice(0,7).forEach((x,m)=>{let p=new F(new Oe(.06,.62,.42),new ge({color:x,roughness:.9}));p.position.set(-.36+m*.12,1.2,0),d.add(p)})}var He={open:!1,look:null,r:null,scene:null,cam:null,fig:null,mixer:null,rot:0,t:0,drag:null};function fb(){if(He.r)return;let s=se("wrCanvas");He.r=new Ao({canvas:s,antialias:!0,alpha:!0}),He.r.outputColorSpace=ht,He.r.toneMapping=Dr,He.scene=new Ro,He.cam=new Ut(30,1,.1,50),He.cam.position.set(0,1.05,4.6),He.cam.lookAt(0,.95,0),He.scene.add(new zo(16777215,4206656,1.5));let e=new Ds(16777215,2.2);e.position.set(2,4,4),He.scene.add(e);let t=new Ds(16723888,1.4);t.position.set(-3,2,-3),He.scene.add(t);let n=new F(new ni(.8,40),new De({color:16723888,transparent:!0,opacity:.25}));n.rotation.x=-Math.PI/2,He.scene.add(n),s.addEventListener("pointerdown",i=>{He.drag=i.clientX,s.setPointerCapture(i.pointerId)}),s.addEventListener("pointermove",i=>{He.drag!=null&&(He.rot+=(i.clientX-He.drag)*.012,He.drag=i.clientX)}),s.addEventListener("pointerup",()=>{He.drag=null})}function no(){if(He.look.ch&&!Xr(jt,He.look.ch)){let e=He.look.ch;se("wrOpts").insertAdjacentHTML("afterbegin",'<div class="wrow" id="wrLoad"><span>\u23F3</span><div>Figur wird geladen \u2026</div></div>'),$o(jt,e).then(()=>{let t=se("wrLoad");t&&t.remove(),He.look.ch===e&&no()})}He.fig&&He.scene.remove(He.fig);let s=Fl(jt,He.look);He.fig=s.m,He.scene.add(s.m),He.mixer=new Un(s.m),xi&&xi.idle&&He.mixer.clipAction(xi.idle).play()}function oa(){let s=He.look,e=se("wrOpts"),t=(o,a,l,c)=>`<div class="wrow"><span>${o}</span><div>`+a.map((u,h)=>`<button class="wo${u.v===l?" on":""}" data-set="${c}" data-v="${yi(String(u.v))}">${yi(u.t)}</button>`).join("")+"</div></div>",n=(o,a,l,c)=>`<div class="wrow"><span>${o}</span><div>`+a.map(u=>`<button class="wc${u===l?" on":""}" style="background:${u}" data-set="${c}" data-v="${u}" aria-label="${u}"></button>`).join("")+"</div></div>",i=t("Figur",ss.map(o=>({t:o.name+(o.kind&&o.id&&o.kind==="Comic"?" \u270F\uFE0F":""),v:o.id})),s.ch,"ch"),r=ss.find(o=>o.id===s.ch)||ss[0];r.classic?(i+=t("Oberteil",ed.map((o,a)=>({t:o,v:a})),s.top,"top"),s.top&&(i+=n("Farbe",Mn,s.tc,"tc"),i+=t("Aufdruck",[{t:"Ohne",v:""},{t:"\u{1F354} Burger",v:"burger"},{t:"\u25A6 Block-Print",v:"blocks"}],s.print||"","print")),i+=t("Hose",td.map((o,a)=>({t:o,v:a})),s.bot,"bot"),s.bot&&(i+=n("Farbe",Mn,s.bc,"bc")),i+=t("Schuhe",nd.map((o,a)=>({t:o,v:a})),s.sh,"sh"),s.sh&&(i+=n("Farbe",Mn,s.shc,"shc")),i+=t("Hautfarbe",[{t:"Hell",v:0},{t:"Dunkel",v:1}],s.s,"s")):s.ch?((r.parts||[]).forEach(([o],a)=>{i+=`<div class="wrow"><span>${yi(o)}</span><div><button class="wo${s.p[a]?"":" on"}" data-set="p${a}" data-v="">Original</button>`+Mn.map(l=>`<button class="wc${l===s.p[a]?" on":""}" style="background:${l}" data-set="p${a}" data-v="${l}" aria-label="${l}"></button>`).join("")+"</div></div>"}),r.parts||(i+='<div class="wrow"><span>Kleidung</span><div style="opacity:.75">Diese Figur hat ihr festes Outfit \u2013 du kannst sie mit Kappe, Brille, Kette und Rucksack aufpeppen.</div></div>')):(i+=t("K\xF6rper",[{t:"Mann",v:"m"},{t:"Frau",v:"f"}],s.b,"b")+t("Hautfarbe",[{t:"Hell",v:0},{t:"Dunkel",v:1}],s.s,"s"),i+=t("Frisur",Qu.map(o=>({t:o.name,v:o.id})),s.h,"h"),s.b==="m"&&(i+=t("Bart",[{t:"Ohne",v:0},{t:"Mit Bart",v:1}],s.beard,"beard")),i+=n("Haarfarbe",id,s.hc,"hc"),i+=t("Oberteil",ed.map((o,a)=>({t:o,v:a})),s.top,"top"),s.top&&(i+=n("Farbe",Mn,s.tc,"tc")),i+=t("Hose",td.map((o,a)=>({t:o,v:a})),s.bot,"bot"),s.bot&&(i+=n("Farbe",Mn,s.bc,"bc")),i+=t("Schuhe",nd.map((o,a)=>({t:o,v:a})),s.sh,"sh"),s.sh&&(i+=n("Farbe",Mn,s.shc,"shc"))),s.ch==="hias"&&(i+=t("\u{1F451} K\xF6nigsmantel",[{t:"Ohne",v:0},{t:"Anziehen",v:1}],s.km,"km"),i+=t("\u{1F531} Zepter (linke Hand)",[{t:"Ohne",v:0},{t:"Mitnehmen",v:1}],s.ks,"ks"),i+=t("\u{1F451} Krone",[{t:"Ohne",v:0},{t:"Aufsetzen",v:1}],s.kr,"kr")),i+=t("Kopf",sd.map((o,a)=>({t:o,v:a})),s.cap,"cap"),s.cap&&(i+=n("Farbe",Mn,s.capc,"capc")),i+=t("Brille",rd.map((o,a)=>({t:o,v:a})),s.gl,"gl"),jm()&&(i+=t("S.P.K Shirt",[{t:"Ohne",v:0},{t:"Anziehen",v:1}],s.spk,"spk")),i+=t("Goldkette",[{t:"Ohne",v:0},{t:"Mit Kette",v:1}],s.chain,"chain"),i+=t("Rucksack",[{t:"Ohne",v:0},{t:"Mit Rucksack",v:1}],s.bag,"bag"),s.bag&&(i+=n("Farbe",Mn,s.bagc,"bagc")),e.innerHTML=i,e.querySelectorAll("button[data-set]").forEach(o=>o.onclick=()=>{let a=o.dataset.set,l=o.dataset.v;if(["s","beard","top","bot","sh","cap","gl","chain","bag","spk","km","ks","kr"].includes(a)&&(l=+l),/^p\d$/.test(a)){let c=He.look.p.slice();c[+a[1]]=l,He.look=En(Object.assign({},He.look,{p:c}))}else a==="ch"?He.look=En(Object.assign({},He.look,{ch:l,p:["","","",""]},gm[l]||{print:""})):He.look=En(Object.assign({},He.look,{[a]:l}));oa(),no()})}function Qm(){if(!jt){$t("Die Figuren werden noch geladen \u2026");return}nn=!0,He.open=!0;for(let t in rt)rt[t]=!1;try{document.exitPointerLock()}catch{}He.look=En(ke.look),fb(),oa(),no(),He.rot=0,se("wrBox").classList.remove("hidden");let s=se("wrCanvas"),e=s.getBoundingClientRect();He.r.setPixelRatio(Math.min(2,devicePixelRatio||1)),He.r.setSize(e.width||300,e.height||420,!1),He.cam.aspect=(e.width||300)/(e.height||420),He.cam.updateProjectionMatrix()}function pb(s){!He.open||!He.r||(He.drag==null&&(He.rot+=s*.35),He.fig&&(He.fig.rotation.y=He.rot),He.mixer&&He.mixer.update(s),He.r.render(He.scene,He.cam))}function e0(){if(ke.look=En(He.look),ql(),jl(),xe.role==="client"&&xe.conn)try{xe.conn.send({t:"look",lk:ke.look})}catch{}$t("Neuer Look gespeichert \u2013 alle im Raum sehen dich jetzt so."),fs()}se("wrDone").onclick=e0;se("wrCancel").onclick=fs;se("wrRandom").onclick=()=>{let s=fm(Math.random,!0,!0);Math.random()<.5&&(s.ch=""),s.p=["","","",""].map(()=>Math.random()<.5?Mn[Math.floor(Math.random()*Mn.length)]:""),He.look=En(s),oa(),no()};se("wrUndress").onclick=()=>{He.look=En(Object.assign({},He.look,{top:0,bot:0,sh:0,cap:0,gl:0,chain:0,bag:0,spk:0,p:["","","",""]})),oa(),no()};se("wrBox").addEventListener("click",s=>{s.target.id==="wrBox"&&fs()});var kd={gb:!0},Hs=null,Qr=null,Xn="",eo=[];async function Wl(s){if(!Xn)return null;try{let t=await(await fetch(Xn+(s?(Xn.includes("?")?"&":"?")+s:""),{cache:"no-store"})).json();if(Array.isArray(t.eintraege))return eo=t.eintraege,t0(),eo}catch{}return null}function mb(s,e,t){let n=String(e).split(" "),i=[],r="";for(let o of n){let a=r?r+" "+o:o;s.measureText(a).width>t&&r?(i.push(r),r=o):r=a}return r&&i.push(r),i}function t0(){if(!Qr)return;let s=Qr.image,e=s.getContext("2d"),t=s.width,n=s.height,i=e.createLinearGradient(0,0,0,n);i.addColorStop(0,"#1f3a2c"),i.addColorStop(1,"#16291f"),e.fillStyle=i,e.fillRect(0,0,t,n);for(let o=0;o<400;o++)e.fillStyle=`rgba(255,255,255,${Math.random()*.03})`,e.fillRect(Math.random()*t,Math.random()*n,3,1);e.textAlign="center",e.font='400 120px Impact, "Arial Black", sans-serif',e.fillStyle="#eef3e8",e.fillText("G\xC4STEBUCH",t/2,130),e.fillStyle="rgba(238,243,232,0.35)",e.fillRect(80,160,t-160,4),e.textAlign="left";let r=230;if(!Xn)e.textAlign="center",e.font='italic 64px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#dfe8d6",e.fillText("kommt bald \u2026",t/2,400);else if(!eo.length)e.textAlign="center",e.font='italic 60px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#dfe8d6",e.fillText("Sei der Erste \u2013",t/2,420),e.fillText("schreib was rein!",t/2,500);else for(let o of eo.slice(0,7)){if(r>n-90)break;e.font='700 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="#9fe8b0",e.fillText(o.n,70,r),e.font='46px "Segoe Print", "Comic Sans MS", cursive',e.fillStyle="#eef3e8";for(let a of mb(e,o.x,t-140).slice(0,3))r+=54,e.fillText(a,70,r);r+=66}e.textAlign="center",e.font='600 40px "Segoe UI", system-ui, sans-serif',e.fillStyle="rgba(238,243,232,0.7)",e.fillText(on?"Tippe auf E zum Reinschreiben":"Klicken zum Reinschreiben",t/2,n-40),Qr.needsUpdate=!0}var Fs=null,na=null,Os="lade",gb="rennen";function vd(){if(!Fs)return;let s=Fs.image,e=s.getContext("2d"),t=s.width,n=s.height,i=e.createLinearGradient(0,0,0,n);i.addColorStop(0,"#1d1406"),i.addColorStop(1,"#0b0804"),e.fillStyle=i,e.fillRect(0,0,t,n),e.strokeStyle="rgba(255,210,90,0.35)",e.lineWidth=4,e.strokeRect(18,18,t-36,n-36),e.textAlign="center",e.textBaseline="alphabetic";let r=e.createLinearGradient(0,30,0,140);r.addColorStop(0,"#fff3b0"),r.addColorStop(.5,"#ffd23f"),r.addColorStop(1,"#b8860b"),e.font='400 118px Impact, "Arial Black", sans-serif',e.shadowColor="rgba(255,190,40,0.8)",e.shadowBlur=18,e.fillStyle=r,e.fillText("BESTENLISTE",t/2,140),e.shadowBlur=0,e.font='600 34px "Segoe UI", system-ui, sans-serif',e.fillStyle="rgba(255,230,170,0.75)",e.fillText("Top 15 \xB7 wer steht am \xF6ftesten in den Highscores (alle Spiele)",t/2,192);let o=na||[];if(!o.length){e.font='italic 52px "Segoe UI", system-ui, sans-serif',e.fillStyle="#e8dcc0",e.fillText(Os==="lade"?"Lade \u2026":Os==="alt"?"wird gerade eingerichtet \u2026":Os==="aus"?"gerade offline":"Noch keine Highscores!",t/2,560),Fs.needsUpdate=!0;return}let a=["#ffd23f","#d8dee6","#e08a4a"],l=262,c=64;o.slice(0,15).forEach((u,h)=>{if(h<3?(e.fillStyle=["rgba(255,210,63,0.16)","rgba(216,222,230,0.12)","rgba(224,138,74,0.13)"][h],e.fillRect(40,l-48,t-80,c-6)):h%2&&(e.fillStyle="rgba(255,255,255,0.04)",e.fillRect(40,l-48,t-80,c-6)),e.textAlign="left",h<3){let g=l-22,x=a[h];e.fillStyle=x,e.beginPath(),e.moveTo(72,g-20),e.lineTo(112,g-20),e.quadraticCurveTo(110,g+6,92,g+8),e.quadraticCurveTo(74,g+6,72,g-20),e.fill(),e.fillRect(88,g+6,8,12),e.fillRect(78,g+17,28,7),e.strokeStyle=x,e.lineWidth=5,e.beginPath(),e.arc(72,g-10,9,Math.PI*.5,Math.PI*1.5),e.stroke(),e.beginPath(),e.arc(112,g-10,9,-Math.PI*.5,Math.PI*.5),e.stroke()}else e.font='400 44px Impact, "Arial Black", sans-serif',e.fillStyle="#c9b88a",e.textAlign="center",e.fillText(h+1+".",92,l),e.textAlign="left";let d=String(u.n||"");for(e.font=(h<3?"700 46px":"600 42px")+' "Segoe UI", system-ui, sans-serif';e.measureText(d).width>560&&d.length>3;)d=d.slice(0,-2)+"\u2026";e.fillStyle=h<3?a[h]:"#f2ead8",e.fillText(d,150,l),e.textAlign="right",e.font='400 46px Impact, "Arial Black", sans-serif',e.fillStyle=h<3?a[h]:"#ffd23f",e.fillText(String(u.c),t-130,l),e.font='600 24px "Segoe UI", system-ui, sans-serif',e.fillStyle="rgba(255,230,170,0.55)",e.fillText((u.g?"\u{1F947}"+u.g+" ":"")+(u.s?"\u{1F948}"+u.s+" ":"")+(u.b?"\u{1F949}"+u.b:""),t-200,l-4),e.textAlign="left",l+=c}),Fs.needsUpdate=!0}async function Pm(){if(!Xn)try{Xn=((await(await fetch("/System/gaestebuch.json",{cache:"no-store"})).json()).url||"").trim()}catch{}if(!Xn){Os="alt",vd();return}try{let s=new AbortController,e=setTimeout(()=>s.abort(),15e3),t=await fetch(Xn+(Xn.includes("?")?"&":"?")+"rang=1&lo="+gb,{cache:"no-store",signal:s.signal});clearTimeout(e);let n=await t.json();Array.isArray(n.rang)?(na=n.rang,Os="ok"):Os="alt"}catch{na||(Os="aus")}vd(),xb()}var n0=[];function xb(){n0.forEach((s,e)=>{s.visible=!!(na&&na[e])})}function yb(s,e){let r=new Xe;r.position.set(Math.sin(s)*(e-.02),2.75,-Math.cos(s)*(e-.02)),r.lookAt(0,2.75,0),ut.add(r);let o=new ge({color:13938487,roughness:.25,metalness:1,emissive:3811328,emissiveIntensity:.6}),a=new F(new Oe(3,3.7,.12),new ge({color:1708550,roughness:.8}));r.add(a);for(let[f,g,x,m]of[[0,3.7/2,3+.2,.18],[0,-3.7/2,3+.2,.18],[3/2,0,.18,3.7],[-3/2,0,.18,3.7]]){let p=new F(new Oe(x,m,.2),o);p.position.set(f,g,.03),r.add(p)}for(let f of[-3/2,3/2])for(let g of[-3.7/2,3.7/2]){let x=new F(new pt(.13,16,12),o);x.position.set(f,g,.08),r.add(x)}for(let f of[-3/2+.25,3/2-.25]){let g=new F(new Oe(.14,1.2,.14),o);g.position.set(f,-3.7/2-(2.75-3.7/2)/2+.15,-.05),r.add(g)}Fs=kt(1024,1260,()=>{});let l=new F(new at(3-.2,3.7-.2),new ge({map:Fs,roughness:.9,emissive:16777215,emissiveMap:Fs,emissiveIntensity:.4}));l.position.z=.07,r.add(l);let c=new di(16773320,10,8,.6,.7,1.4);c.position.set(0,3.7/2+1,1.8),c.target=l,r.add(c);let u=(f,g)=>{let x=new Xe,m=new ge({color:f,roughness:.18,metalness:1,emissive:f,emissiveIntensity:.12}),p=[[0,0],[.16,0],[.16,.05],[.09,.07],[.09,.1],[.035,.12],[.03,.26],[.06,.3],[.17,.36],[.2,.5],[.21,.62],[.19,.62],[.18,.52],[.15,.4],[0,.36]].map(([y,R])=>new de(y,R)),v=new F(new Ps(p,28),m);x.add(v);for(let y of[-1,1]){let R=new F(new Gt(.075,.016,8,16,Math.PI),m);R.position.set(y*.2,.5,0),R.rotation.z=y>0?-Math.PI/2:Math.PI/2,x.add(R)}let _=new F(new Oe(.34,.08,.26),new ge({color:1380362,roughness:.5}));return _.position.y=-.04,x.add(_),x.scale.setScalar(g),x};n0=[[13938487,1.45,0],[13160150,1.15,-1],[12614202,1.05,1]].map(([f,g,x])=>{let m=u(f,g);return m.position.set(x,3.7/2+.17,.02),r.add(m),m.visible=!1,m});let d=new yn(16765562,5,4,1.6);d.position.set(0,3.7/2+1.1,.8),r.add(d),vd(),Pm(),setInterval(()=>{nn||Pm()},12e4)}async function vb(s,e){try{Xn=((await(await fetch("/System/gaestebuch.json",{cache:"no-store"})).json()).url||"").trim()}catch{}let t=2.75,n=3,i=3.7,r=new Xe;r.position.set(Math.sin(s)*(e-.02),t,-Math.cos(s)*(e-.02)),r.lookAt(0,t,0),ut.add(r);let o=new ge({color:3875858,roughness:.8}),a=new F(new Oe(n,i,.12),o);r.add(a);for(let[c,u,h,d]of[[0,i/2,n+.16,.14],[0,-i/2,n+.16,.14],[n/2,0,.14,i],[-n/2,0,.14,i]]){let f=new F(new Oe(h,d,.18),o);f.position.set(c,u,.02),r.add(f)}for(let c of[-n/2+.25,n/2-.25]){let u=new F(new Oe(.14,t-i/2+.3,.14),o);u.position.set(c,-i/2-(t-i/2)/2+.15,-.05),r.add(u)}Qr=kt(1024,1260,()=>{}),Hs=new F(new at(n-.2,i-.2),new ge({map:Qr,roughness:.95,emissive:16777215,emissiveMap:Qr,emissiveIntensity:.35})),Hs.position.z=.07,r.add(Hs);let l=new di(16773340,9,8,.6,.7,1.4);l.position.set(0,i/2+1,1.8),l.target=Hs,r.add(l),t0(),Wl(),setInterval(()=>{nn||Wl()},6e4)}function _d(){let s=se("gbList");if(s.innerHTML="",!Xn){s.innerHTML='<p class="djnone">Das G\xE4stebuch wird gerade eingerichtet \u2013 bald kannst du hier reinschreiben.</p>';return}if(!eo.length){s.innerHTML='<p class="djnone">Noch keine Eintr\xE4ge \u2013 sei der Erste!</p>';return}for(let e of eo){let t=document.createElement("div");t.className="gbe";let n=new Date(e.t);t.innerHTML="<b></b><span></span><p></p>",t.querySelector("b").textContent=e.n,t.querySelector("span").textContent=isNaN(n)?"":n.toLocaleDateString("de-AT")+" "+n.toLocaleTimeString("de-AT",{hour:"2-digit",minute:"2-digit"}),t.querySelector("p").textContent=e.x,s.appendChild(t)}}function _b(){nn=!0;for(let s in rt)rt[s]=!1;try{document.exitPointerLock()}catch{}se("gbName").value=ke.name||"",se("gbText").value="",se("gbCount").textContent="0 / 100",se("gbMsg").textContent="",se("gbForm").classList.toggle("hidden",!Xn),_d(),se("gbBox").classList.remove("hidden"),Wl().then(()=>_d())}se("gbText").addEventListener("input",()=>{se("gbCount").textContent=se("gbText").value.length+" / 100"});se("gbClose").onclick=fs;se("gbBox").addEventListener("click",s=>{s.target.id==="gbBox"&&fs()});se("gbForm").addEventListener("submit",async s=>{s.preventDefault();let e=se("gbText").value.replace(/\s+/g," ").trim().slice(0,100),t=(se("gbName").value.trim()||ke.name||"Gast").slice(0,20);if(!e){se("gbMsg").textContent="Schreib zuerst etwas rein.";return}let n=0;try{n=+localStorage.getItem("spk-gb-last")||0}catch{}if(Date.now()-n<3e4){se("gbMsg").textContent="Bitte kurz warten, bevor du nochmal schreibst.";return}se("gbSend").disabled=!0,se("gbMsg").textContent="Wird gespeichert\u2026";let i=await Wl("name="+encodeURIComponent(t)+"&text="+encodeURIComponent(e));if(se("gbSend").disabled=!1,i){try{localStorage.setItem("spk-gb-last",String(Date.now()))}catch{}se("gbText").value="",se("gbCount").textContent="0 / 100",se("gbMsg").textContent="Danke! Dein Eintrag steht jetzt im G\xE4stebuch.",_d()}else se("gbMsg").textContent="Hat nicht geklappt \u2013 ist das Internet an?"});var Mb="https://abacus.jasoncameron.dev/hit/spk-portal-hiasus/besucher",Eb="https://abacus.jasoncameron.dev/get/spk-portal-hiasus/besucher",i0="https://countapi.mileshilliard.com/api/v1/",to=null,ia=null,Kl="",sa=()=>{try{return new Date().toLocaleDateString("sv-SE",{timeZone:"Europe/Vienna"})}catch{return new Date().toISOString().slice(0,10)}};async function s0(s){let e="besucher-"+sa();for(let t of[`https://abacus.jasoncameron.dev/${s?"hit":"get"}/spk-portal-hiasus/${e}`,i0+(s?"hit":"get")+"/spk-portal-hiasus-"+e])try{let n=await fetch(t,{cache:"no-store"});if(n.status===404&&!s)return 0;if(n.ok){let i=await n.json(),r=parseInt(i.value,10);if(!isNaN(r))return r}}catch{}return Kl===sa()?ia:null}async function r0(){let s=sa(),e=!1;try{e=!localStorage.getItem("spk-tag-"+s),localStorage.setItem("spk-tag-"+s,"1")}catch{}let t=await s0(e);t!=null&&(ia=t,Kl=s,Yr(!0))}async function bb(){let s=!1;try{s=!sessionStorage.getItem("spk-gezaehlt"),sessionStorage.setItem("spk-gezaehlt","1")}catch{}to=await o0(s),Yr(!0),r0()}var Qo=null,Im="",Sb=null;async function o0(s){try{let e=await fetch(s?Mb:Eb,{cache:"no-store"});if(e.ok){let t=await e.json(),n=parseInt(t.value,10);if(!isNaN(n))return n}}catch{}try{let e=await fetch(i0+(s?"hit":"get")+"/spk-portal-hiasus-besucher",{cache:"no-store"});if(e.ok){let t=await e.json(),n=parseInt(t.value,10);if(!isNaN(n))return n}}catch{}return to}function Tb(){let s=new Date;return{time:s.toLocaleTimeString("de-AT",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),date:s.toLocaleDateString("de-AT",{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"}),vis:to==null?"\u2014":to.toLocaleString("de-AT"),day:ia==null||Kl!==sa()?"\u2014":ia.toLocaleString("de-AT")}}function Yr(s){let e=Tb(),t=e.time+e.vis+e.day;if(!s&&t===Im||(Im=t,se("hudClock")&&(se("hudClock").innerHTML=`<b>${e.time.slice(0,5)}</b><span>${to==null?"":"Besucher: "+e.vis+" \xB7 Heute: "+e.day}</span>`),!Qo))return;let n=Qo.image,i=n.getContext("2d"),r=n.width,o=n.height;i.fillStyle="#0b0910",i.fillRect(0,0,r,o),i.strokeStyle="rgba(255,47,176,0.6)",i.lineWidth=6,i.strokeRect(10,10,r-20,o-20),i.textAlign="center",i.textBaseline="middle",i.font='700 150px Consolas, "Courier New", monospace',i.fillStyle="#e8f7ff",i.fillText(e.time,r/2,130),i.font='500 40px "Segoe UI", system-ui, sans-serif',i.fillStyle="#9d97ab",i.fillText(e.date,r/2,232),i.fillStyle="rgba(255,255,255,0.12)",i.fillRect(60,280,r-120,3),i.fillStyle="rgba(255,255,255,0.12)",i.fillRect(r/2-2,300,4,190),i.font='400 50px Impact, "Arial Black", sans-serif',i.fillStyle="#ff7fd8",i.fillText("BESUCHER GESAMT",r/4,340),i.fillStyle="#7fe9ff",i.fillText("HEUTE",r*3/4,340),i.font='700 96px Consolas, "Courier New", monospace',i.fillStyle="#e8f7ff",i.fillText(e.vis,r/4,440),i.fillText(e.day,r*3/4,440),Qo.needsUpdate=!0}function wb(){Qo=kt(1024,512,()=>{});let s=new Xe;s.position.set(0,3.9,0),ut.add(s);let e=3,t=1.5,n=e/2+.11,i=new F(new Oe(e+.16,t+.16,e+.16),new ge({color:1381659,roughness:.4,metalness:.8}));s.add(i);let r=new De({map:Qo,toneMapped:!1,color:14211288});for(let o=0;o<4;o++){let a=new F(new at(e,t),r),l=o*Math.PI/2;a.position.set(Math.sin(l)*n,0,Math.cos(l)*n),a.rotation.y=l,s.add(a)}for(let o of[-1,1])for(let a of[-1,1]){let l=new F(new je(.02,.02,2.6,6),new ge({color:5593964,metalness:.9,roughness:.3}));l.position.set(o*e/2.2,t/2+1.3,a*e/2.2),s.add(l)}Sb=s,Yr(!0),setInterval(()=>Yr(!1),1e3),bb(),setInterval(async()=>{let o=await o0(!1);if(o!=null&&(to=o,Yr(!0)),Kl!==sa())r0();else{let a=await s0(!1);a!=null&&(ia=a,Yr(!0))}},6e4)}async function Ab(){let s=[];try{let r=await fetch("/__spiele",{cache:"no-store"});if(!r.ok)throw 0;s=await r.json()}catch{try{s=await(await fetch("/spiele.json",{cache:"no-store"})).json()}catch{}}Array.isArray(s)||(s=s?[s]:[]);let e=r=>{let o=/(\d{1,2})\.(\d{1,2})\.(\d{4})/.exec(r||"");return o?new Date(+o[3],+o[2]-1,+o[1]).getTime():0},t=new Array(Vs).fill(null),n=[],i=["Tour-Bus-Rennen","Plakatieren bei Nacht","Traveler","Razzia","DJ-Battle"];s=(s||[]).filter(r=>r&&!i.includes(r.ordner)&&!i.includes(r.name));for(let r of s){let o=parseInt(r.portal,10);o>=1&&o<=Vs&&!t[o-1]?t[o-1]=r:n.push(r)}n.sort((r,o)=>e(r.datum)-e(o.datum));for(let r of n){let o=t.indexOf(null);o>=0&&(t[o]=r)}return t}async function Rb(){try{as=await new Hr().loadAsync("/System/assets/figur.glb");let s={};for(let t of as.animations)s[t.name]=t;let e=t=>t?new ii(t.name,t.duration,t.tracks.filter(n=>!n.name.startsWith("root."))):null;xi={idle:e(s.Idle_Loop),walk:e(s.Walk_Loop),run:e(s.Jog_Fwd_Loop),jump:e(s.Jump_Loop),dance:e(s.Dance_Loop),use:e(s.Interact)}}catch(s){console.warn("Figur fehlt",s),as=null}try{jt=await pm("/System/figuren/")}catch(s){console.warn("Figuren fehlen",s),jt=null}try{db(),Cb()}catch(s){console.warn("Umkleide",s)}try{hb()}catch(s){console.warn("Arcade",s)}try{jt&&xi&&(An=vm({scene:ut,camera:Nn,me:Ne,djFrames:$r,net:xe,toast:$t,canvasTex:kt,$:se,CL:xi,FIG:jt,audio:()=>(bd(),ft?{AC:ft,master:ai}:null),unlock:()=>{nn=!0;for(let s in rt)rt[s]=!1;try{document.exitPointerLock()}catch{}},relock:()=>{nn=!1,an&&Xs()}}))}catch(s){console.warn("UFO",s)}}var mi=null,Kr=null;function jl(){mi&&ut.remove(mi.root),!(!jt||!as)&&(ke.look&&ke.look.ch&&!Xr(jt,ke.look.ch)&&$o(jt,ke.look.ch).then(()=>{Xr(jt,ke.look.ch)&&jl()}),mi=jr(ke.name,ea[0],ke.look),mi.tag.visible=!1,mi.root.traverse(s=>s.layers.set(1)))}function Cb(){let s=kn.ang,e=new Xe;e.position.set(Math.sin(s)*kn.r,0,-Math.cos(s)*kn.r),e.lookAt(0,0,0),ut.add(e);let t=new Xe;t.position.set(-1.9,0,.35),t.rotation.y=.35,e.add(t);let n=1.15,i=2.15,r=new ge({color:13938487,roughness:.3,metalness:.9}),o=(u,h,d,f)=>{let g=new F(new Oe(u,h,.08),r);g.position.set(d,f,0),t.add(g)};o(n+.16,.08,0,.25),o(n+.16,.08,0,.25+i+.08),o(.08,i+.16,-n/2-.04,.29+i/2),o(.08,i+.16,n/2+.04,.29+i/2);for(let u of[-1,1]){let h=new F(new Oe(.06,.06,.6),r);h.position.set(u*n/2,.03,-.1),t.add(h)}let a=new F(new Oe(n,i,.02),new ge({color:1118481}));a.position.set(0,.29+i/2,-.03),t.add(a),Kr=new Ko(new at(n,i),{textureWidth:zl?384:768,textureHeight:zl?720:1440,color:13159636,multisample:zl?0:4}),Kr.position.set(0,.29+i/2,.02),t.add(Kr),Kr.camera.layers.enable(1);let l=new F(new pt(.05,10,8),new De({color:16773840,toneMapped:!1}));l.position.set(0,.29+i+.16,.06),t.add(l);let c=Ws([{t:"SPIEGEL",size:90,c:"#ffd23f",font:'Impact, "Arial Black", sans-serif',weight:400,glow:"rgba(255,170,0,0.5)"}],{w:768,h:140,pw:1});c.position.set(0,.29+i+.4,.02),t.add(c),oi.pos=new I,t.getWorldPosition(oi.pos),jl()}var oi={pos:null},An={tick(){},jump(){},collide(){},targets:()=>[],prompt:()=>"",state:()=>({n:0}),setState(){},remoteWave(){},setRad(){},hostRequest(){},control(){},openRadio(){}},bn={tick(){},render(){return!1},collide(){},targets:()=>[],speedMul:()=>1,jumpMul:()=>1,drift(){},canAim:()=>!1,use(){},prompt:()=>"",state:()=>[],setState(){},hostTake(){}};(async()=>{kE(),BE(),se("loadInfo").textContent="Lade Spiele\u2026";let[s]=await Promise.all([Ab(),Rb()]);s.forEach((n,i)=>OE(i,n));try{bn=em({scene:ut,camera:Nn,renderer:us,portals:qn,me:Ne,textPlane:Ws,toast:$t,net:xe,composer:gi,bloom:md,R_WALL:rn,ARC:ra,PR:Lm})}catch(n){console.warn("Geheimnis",n)}tb(),wb();let e=s.filter(Boolean).length;se("loadInfo").textContent=e===1?"1 Spiel im Raum":e+" Spiele im Raum",se("bEnter").disabled=!1,se("bJoin").disabled=!1,Ym(),window.konsole={_merch:()=>xd,_openMerch:()=>Km(),_wardrobe:n=>{Qm(),n&&(He.look=En(n),oa(),no())},_arcade:()=>Vt,_pad:()=>({locked:tn,started:an,djOpen:nn,leaving:ct,padMode:Gs}),_ufo:()=>An,_dj:$r,_addOther:Ad,_secret:()=>bn,_collide:km,MIR:oi,setMyLook:n=>{He.look=En(n),e0()},me:Ne,portals:qn,net:xe,others:Ht,enterPortal:Cd,joinRoom:Gl,openRoom:zs,keys:rt,voice:mt,started:()=>an};let t=null;try{t=JSON.parse(sessionStorage.getItem("gbgc-zurueck")||"null"),sessionStorage.removeItem("gbgc-zurueck")}catch{}Ne.pos.set(0,0,0),Ne.yaw=0,t&&Date.now()-t.t<6*36e5?(Ne.pos.set(0,0,-6),Ne.yaw=Math.PI,zs(),t.role==="client"&&t.code?(Hm(t.code),$t("Zur\xFCck im Portal \u2013 du kommst gleich wieder in den Raum von deinem Freund.")):$t("Zur\xFCck im Portal. Deine Freunde kommen gleich nach."),se("menuTitle").textContent="Willkommen zur\xFCck!"):pn.get("autojoin")||zs(),pn.has("autotest")&&(an=!0,hs(!1)),pn.get("autojoin")&&Gl(pn.get("autojoin")).then(()=>{an=!0,hs(!1)}),ds()})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
