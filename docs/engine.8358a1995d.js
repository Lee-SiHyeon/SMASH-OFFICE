(()=>{var wc="160",Xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fd=0,xh=1,kd=2;var co=1,Bd=2,Kn=3,xi=0,Gt=1,Cn=2;var mi=0,gi=1,Hi=2,vh=3,Mh=4,zd=5,Oi=100,Hd=101,Vd=102,bh=103,Sh=104,Gd=200,Wd=201,Xd=202,qd=203,Ll=204,Il=205,Yd=206,$d=207,Zd=208,Jd=209,Kd=210,jd=211,Qd=212,ep=213,tp=214,np=0,ip=1,sp=2,Pa=3,rp=4,ap=5,op=6,lp=7,tf=0,cp=1,hp=2,_i=0,up=1,fp=2,dp=3,Tc=4,pp=5,mp=6;var nf=300,Rs=301,Cs=302,Dl=303,Ul=304,ho=306,Nl=1e3,an=1001,Ol=1002,Jt=1003,Eh=1004;var Jo=1005;var pn=1006,gp=1007;var hr=1008;var yi=1009,_p=1010,yp=1011,Ac=1012,sf=1013,di=1014,pi=1015,ur=1016,rf=1017,af=1018,ki=1020,xp=1021,Pn=1023,vp=1024,Mp=1025,Bi=1026,Ps=1027,bp=1028,of=1029,Sp=1030,lf=1031,cf=1033,Ko=33776,jo=33777,Qo=33778,el=33779,wh=35840,Th=35841,Ah=35842,Rh=35843,hf=36196,Ch=37492,Ph=37496,Lh=37808,Ih=37809,Dh=37810,Uh=37811,Nh=37812,Oh=37813,Fh=37814,kh=37815,Bh=37816,zh=37817,Hh=37818,Vh=37819,Gh=37820,Wh=37821,tl=36492,Xh=36494,qh=36495,Ep=36283,Yh=36284,$h=36285,Zh=36286;var La=2300,Ia=2301,nl=2302,Jh=2400,Kh=2401,jh=2402;var uf=3e3,zi=3001,wp=3200,Tp=3201,ff=0,Ap=1,mn="",dt="srgb",Qn="srgb-linear",Rc="display-p3",uo="display-p3-linear",Da="linear",ft="srgb",Ua="rec709",Na="p3";var ss=7680;var Qh=519,Rp=512,Cp=513,Pp=514,df=515,Lp=516,Ip=517,Dp=518,Up=519,eu=35044,Ot=35048;var tu="300 es",Fl=1035,jn=2e3,Oa=2001,zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nu=1234567,ir=Math.PI/180,fr=180/Math.PI;function Yi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function Cc(n,e){return(n%e+e)%e}function Np(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Op(n,e,t){return n!==e?(t-n)/(e-n):0}function sr(n,e,t){return(1-t)*n+t*e}function Fp(n,e,t,i){return sr(n,e,1-Math.exp(-t*i))}function kp(n,e=1){return e-Math.abs(Cc(n,e*2)-e)}function Bp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function zp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Hp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Vp(n,e){return n+Math.random()*(e-n)}function Gp(n){return n*(.5-Math.random())}function Wp(n){n!==void 0&&(nu=n);let e=nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xp(n){return n*ir}function qp(n){return n*fr}function kl(n){return(n&n-1)===0&&n!==0}function Yp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $p(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ms(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Us={DEG2RAD:ir,RAD2DEG:fr,generateUUID:Yi,clamp:Tt,euclideanModulo:Cc,mapLinear:Np,inverseLerp:Op,lerp:sr,damp:Fp,pingpong:kp,smoothstep:Bp,smootherstep:zp,randInt:Hp,randFloat:Vp,randFloatSpread:Gp,seededRandom:Wp,degToRad:Xp,radToDeg:qp,isPowerOfTwo:kl,ceilPowerOfTwo:Yp,floorPowerOfTwo:Fa,setQuaternionFromProperEuler:$p,normalize:$t,denormalize:Ms},se=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],x=s[1],y=s[4],S=s[7],A=s[2],v=s[5],R=s[8];return r[0]=a*_+o*x+l*A,r[3]=a*m+o*y+l*v,r[6]=a*d+o*S+l*R,r[1]=c*_+h*x+u*A,r[4]=c*m+h*y+u*v,r[7]=c*d+h*S+u*R,r[2]=f*_+p*x+g*A,r[5]=f*m+p*y+g*v,r[8]=f*d+p*S+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=t*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(il.makeScale(e,t)),this}rotate(e){return this.premultiply(il.makeRotation(-e)),this}translate(e,t){return this.premultiply(il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},il=new Je;function pf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ka(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zp(){let n=ka("canvas");return n.style.display="block",n}var iu={};function rr(n){n in iu||(iu[n]=!0,console.warn(n))}var su=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ru=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[Qn]:{transfer:Da,primaries:Ua,toReference:n=>n,fromReference:n=>n},[dt]:{transfer:ft,primaries:Ua,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[uo]:{transfer:Da,primaries:Na,toReference:n=>n.applyMatrix3(ru),fromReference:n=>n.applyMatrix3(su)},[Rc]:{transfer:ft,primaries:Na,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ru),fromReference:n=>n.applyMatrix3(su).convertLinearToSRGB()}},Jp=new Set([Qn,uo]),at={enabled:!0,_workingColorSpace:Qn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Jp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ea[e].toReference,s=ea[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ea[n].primaries},getTransfer:function(n){return n===mn?Da:ea[n].transfer}};function Ts(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var rs,Ba=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=ka("canvas")),rs.width=e.width,rs.height=e.height;let i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ka("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ts(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ts(t[i]/255)*255):t[i]=Ts(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kp=0,za=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Yi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(rl(s[a].image)):r.push(rl(s[a]))}else r=rl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function rl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ba.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jp=0,gn=class n extends zn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=an,s=an,r=pn,a=hr,o=Pn,l=yi,c=n.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Yi(),this.name="",this.source=new za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===zi?dt:mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nl:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Ol:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nl:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Ol:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?zi:uf}set encoding(e){rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zi?dt:mn}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=nf;gn.DEFAULT_ANISOTROPY=1;var mt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,S=(p+1)/2,A=(d+1)/2,v=(h+f)/4,R=(u+_)/4,U=(g+m)/4;return y>S&&y>A?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=v/i,r=R/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=v/s,r=U/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=R/r,s=U/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bl=class extends zn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===zi?dt:mn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new gn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new za(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends Bl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ha=class extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zl=class extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-o,d=l*f+c*p+h*g+u*_,x=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let A=Math.sqrt(y),v=Math.atan2(A,d*x);m=Math.sin(m*v)/A,o=Math.sin(o*v)/A}let S=o*x;if(l=l*m+f*S,c=c*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-o*p,e[t+2]=c*g+h*p+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(au.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return al.copy(this).projectOnVector(e),this.sub(al)}reflect(e){return this.sub(al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},al=new C,au=new Wt,ti=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),na.subVectors(this.max,Js),as.subVectors(e.a,Js),os.subVectors(e.b,Js),ls.subVectors(e.c,Js),li.subVectors(os,as),ci.subVectors(ls,os),Li.subVectors(as,ls);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Li.z,Li.y,li.z,0,-li.x,ci.z,0,-ci.x,Li.z,0,-Li.x,-li.y,li.x,0,-ci.y,ci.x,0,-Li.y,Li.x,0];return!ol(t,as,os,ls,na)||(t=[1,0,0,0,1,0,0,0,1],!ol(t,as,os,ls,na))?!1:(ia.crossVectors(li,ci),t=[ia.x,ia.y,ia.z],ol(t,as,os,ls,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qn=[new C,new C,new C,new C,new C,new C,new C,new C],wn=new C,ta=new ti,as=new C,os=new C,ls=new C,li=new C,ci=new C,Li=new C,Js=new C,na=new C,ia=new C,Ii=new C;function ol(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ii.fromArray(n,r);let o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=e.dot(Ii),c=t.dot(Ii),h=i.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Qp=new ti,Ks=new C,ll=new C,on=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Qp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);let t=Ks.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ks,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(ll)),this.expandByPoint(Ks.copy(e.center).sub(ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new C,cl=new C,sa=new C,hi=new C,hl=new C,ra=new C,ul=new C,vi=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){cl.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(cl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(sa),o=hi.dot(this.direction),l=-hi.dot(sa),c=hi.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(cl).addScaledVector(sa,f),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);let i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,r){hl.subVectors(t,e),ra.subVectors(i,e),ul.crossVectors(hl,ra);let a=this.direction.dot(ul),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,e);let l=o*this.direction.dot(ra.crossVectors(hi,ra));if(l<0)return null;let c=o*this.direction.dot(hl.cross(hi));if(c<0||l+c>a)return null;let h=-o*hi.dot(ul);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,f,p,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,p,g,_,m)}set(e,t,i,s,r,a,o,l,c,h,u,f,p,g,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(em,e,tm)}lookAt(e,t,i){let s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ui.crossVectors(i,sn),ui.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ui.crossVectors(i,sn)),ui.normalize(),aa.crossVectors(sn,ui),s[0]=ui.x,s[4]=aa.x,s[8]=sn.x,s[1]=ui.y,s[5]=aa.y,s[9]=sn.y,s[2]=ui.z,s[6]=aa.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],x=i[3],y=i[7],S=i[11],A=i[15],v=s[0],R=s[4],U=s[8],b=s[12],E=s[1],N=s[5],G=s[9],X=s[13],L=s[2],O=s[6],z=s[10],K=s[14],J=s[3],Y=s[7],ne=s[11],re=s[15];return r[0]=a*v+o*E+l*L+c*J,r[4]=a*R+o*N+l*O+c*Y,r[8]=a*U+o*G+l*z+c*ne,r[12]=a*b+o*X+l*K+c*re,r[1]=h*v+u*E+f*L+p*J,r[5]=h*R+u*N+f*O+p*Y,r[9]=h*U+u*G+f*z+p*ne,r[13]=h*b+u*X+f*K+p*re,r[2]=g*v+_*E+m*L+d*J,r[6]=g*R+_*N+m*O+d*Y,r[10]=g*U+_*G+m*z+d*ne,r[14]=g*b+_*X+m*K+d*re,r[3]=x*v+y*E+S*L+A*J,r[7]=x*R+y*N+S*O+A*Y,r[11]=x*U+y*G+S*z+A*ne,r[15]=x*b+y*X+S*K+A*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*p-i*l*p)+_*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+d*(-s*o*h-t*l*u+t*o*f+s*a*u-i*a*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],x=u*m*c-_*f*c+_*l*p-o*m*p-u*l*d+o*f*d,y=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,S=h*_*c-g*u*c+g*o*p-a*_*p-h*o*d+a*u*d,A=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,v=t*x+i*y+s*S+r*A;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/v;return e[0]=x*R,e[1]=(_*f*r-u*m*r-_*s*p+i*m*p+u*s*d-i*f*d)*R,e[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*d+i*l*d)*R,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*p-i*l*p)*R,e[4]=y*R,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*R,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*d-t*l*d)*R,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*p+t*l*p)*R,e[8]=S*R,e[9]=(g*u*r-h*_*r-g*i*p+t*_*p+h*i*d-t*u*d)*R,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*d+t*o*d)*R,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*p-t*o*p)*R,e[12]=A*R,e[13]=(h*_*s-g*u*s+g*i*f-t*_*f-h*i*m+t*u*m)*R,e[14]=(g*o*s-a*_*s-g*i*l+t*_*l+a*i*m-t*o*m)*R,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*f+t*o*f)*R,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,_=a*h,m=a*u,d=o*u,x=l*c,y=l*h,S=l*u,A=i.x,v=i.y,R=i.z;return s[0]=(1-(_+d))*A,s[1]=(p+S)*A,s[2]=(g-y)*A,s[3]=0,s[4]=(p-S)*v,s[5]=(1-(f+d))*v,s[6]=(m+x)*v,s[7]=0,s[8]=(g+y)*R,s[9]=(m-x)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=cs.set(s[0],s[1],s[2]).length(),a=cs.set(s[4],s[5],s[6]).length(),o=cs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);let c=1/r,h=1/a,u=1/o;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,t.setFromRotationMatrix(Tn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=jn){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),p,g;if(o===jn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Oa)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=jn){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),f=(t+e)*c,p=(i+s)*h,g,_;if(o===jn)g=(a+r)*u,_=-2*u;else if(o===Oa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},cs=new C,Tn=new ot,em=new C(0,0,0),tm=new C(1,1,1),ui=new C,aa=new C,sn=new C,ou=new ot,lu=new Wt,Va=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ou,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lu.setFromEuler(this),this.setFromQuaternion(lu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Va.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nm=0,cu=new C,hs=new Wt,$n=new ot,oa=new C,js=new C,im=new C,sm=new Wt,hu=new C(1,0,0),uu=new C(0,1,0),fu=new C(0,0,1),rm={type:"added"},am={type:"removed"},Nt=class n extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new Va,i=new Wt,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Je}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(hu,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(fu,e)}translateOnAxis(e,t){return cu.copy(e).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hu,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oa.copy(e):oa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(js,oa,this.up):$n.lookAt(oa,js,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),hs.setFromRotationMatrix($n),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(am)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,im),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new C(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new C,Zn=new C,fl=new C,Jn=new C,us=new C,fs=new C,du=new C,dl=new C,pl=new C,ml=new C,la=!1,bs=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),An.subVectors(e,t),s.cross(An);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){An.subVectors(s,t),Zn.subVectors(i,t),fl.subVectors(e,t);let a=An.dot(An),o=An.dot(Zn),l=An.dot(fl),c=Zn.dot(Zn),h=Zn.dot(fl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,i,s,r,a,o,l){return la===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),la=!0),this.getInterpolation(e,t,i,s,r,a,o,l)}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(a,Jn.y),l.addScaledVector(o,Jn.z),l)}static isFrontFacing(e,t,i,s){return An.subVectors(i,t),Zn.subVectors(e,t),An.cross(Zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),An.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return la===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),la=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;us.subVectors(s,i),fs.subVectors(r,i),dl.subVectors(e,i);let l=us.dot(dl),c=fs.dot(dl);if(l<=0&&c<=0)return t.copy(i);pl.subVectors(e,s);let h=us.dot(pl),u=fs.dot(pl);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(us,a);ml.subVectors(e,r);let p=us.dot(ml),g=fs.dot(ml);if(g>=0&&p<=g)return t.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(fs,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return du.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(du,o);let d=1/(m+_+f);return a=_*d,o=f*d,t.copy(i).addScaledVector(us,a).addScaledVector(fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function gl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=Cc(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=gl(a,r,e+1/3),this.g=gl(a,r,e),this.b=gl(a,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=dt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let i=mf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=sl(e.r),this.g=sl(e.g),this.b=sl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return at.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Tt(Ht.r*255,0,255))*65536+Math.round(Tt(Ht.g*255,0,255))*256+Math.round(Tt(Ht.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Ht.copy(this),t);let i=Ht.r,s=Ht.g,r=Ht.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=dt){at.fromWorkingColorSpace(Ht.copy(this),e);let t=Ht.r,i=Ht.g,s=Ht.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(ca);let i=sr(fi.h,ca.h,t),s=sr(fi.s,ca.s,t),r=sr(fi.l,ca.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ht=new Ne;Ne.NAMES=mf;var om=0,ni=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=gi,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ll,this.blendDst=Il,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ll&&(i.blendSrc=this.blendSrc),this.blendDst!==Il&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},_n=class extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var wt=new C,ha=new se,ut=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=eu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ms(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ms(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ms(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ms(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ms(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eu&&(e.usage=this.usage),e}};var Ga=class extends ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Wa=class extends ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var et=class extends ut{constructor(e,t,i){super(new Float32Array(e),t,i)}};var lm=0,dn=new ot,_l=new Nt,ds=new C,rn=new ti,Qs=new ti,Dt=new C,gt=class n extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pf(e)?Wa:Ga)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return _l.lookAt(e),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(rn.min,Qs.min),rn.expandByPoint(Dt),Dt.addVectors(rn.max,Qs.max),rn.expandByPoint(Dt)):(rn.expandByPoint(Qs.min),rn.expandByPoint(Qs.max))}rn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(ds.fromBufferAttribute(e,c),Dt.add(ds)),s=Math.max(s,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<o;E++)c[E]=new C,h[E]=new C;let u=new C,f=new C,p=new C,g=new se,_=new se,m=new se,d=new C,x=new C;function y(E,N,G){u.fromArray(s,E*3),f.fromArray(s,N*3),p.fromArray(s,G*3),g.fromArray(a,E*2),_.fromArray(a,N*2),m.fromArray(a,G*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);let X=1/(_.x*m.y-m.x*_.y);isFinite(X)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(X),x.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(X),c[E].add(d),c[N].add(d),c[G].add(d),h[E].add(x),h[N].add(x),h[G].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let E=0,N=S.length;E<N;++E){let G=S[E],X=G.start,L=G.count;for(let O=X,z=X+L;O<z;O+=3)y(i[O+0],i[O+1],i[O+2])}let A=new C,v=new C,R=new C,U=new C;function b(E){R.fromArray(r,E*3),U.copy(R);let N=c[E];A.copy(N),A.sub(R.multiplyScalar(R.dot(N))).normalize(),v.crossVectors(U,N);let X=v.dot(h[E])<0?-1:1;l[E*4]=A.x,l[E*4+1]=A.y,l[E*4+2]=A.z,l[E*4+3]=X}for(let E=0,N=S.length;E<N;++E){let G=S[E],X=G.start,L=G.count;for(let O=X,z=X+L;O<z;O+=3)b(i[O+0]),b(i[O+1]),b(i[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new ut(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pu=new ot,Di=new vi,ua=new on,mu=new C,ps=new C,ms=new C,gs=new C,yl=new C,fa=new C,da=new se,pa=new se,ma=new se,gu=new C,_u=new C,yu=new C,ga=new C,_a=new C,ze=class extends Nt{constructor(e=new gt,t=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(yl.fromBufferAttribute(u,e),a?fa.addScaledVector(yl,h):fa.addScaledVector(yl.sub(t),h))}t.add(fa)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(ua.containsPoint(Di.origin)===!1&&(Di.intersectSphere(ua,mu)===null||Di.origin.distanceToSquared(mu)>(e.far-e.near)**2))&&(pu.copy(r).invert(),Di.copy(e.ray).applyMatrix4(pu),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=a[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,A=y;S<A;S+=3){let v=o.getX(S),R=o.getX(S+1),U=o.getX(S+2);s=ya(this,d,e,i,c,h,u,v,R,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let x=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);s=ya(this,a,e,i,c,h,u,x,y,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=a[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,A=y;S<A;S+=3){let v=S,R=S+1,U=S+2;s=ya(this,d,e,i,c,h,u,v,R,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let x=m,y=m+1,S=m+2;s=ya(this,a,e,i,c,h,u,x,y,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function cm(n,e,t,i,s,r,a,o){let l;if(e.side===Gt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===xi,o),l===null)return null;_a.copy(o),_a.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(_a);return c<t.near||c>t.far?null:{distance:c,point:_a.clone(),object:n}}function ya(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,ps),n.getVertexPosition(l,ms),n.getVertexPosition(c,gs);let h=cm(n,e,t,i,ps,ms,gs,ga);if(h){s&&(da.fromBufferAttribute(s,o),pa.fromBufferAttribute(s,l),ma.fromBufferAttribute(s,c),h.uv=bs.getInterpolation(ga,ps,ms,gs,da,pa,ma,new se)),r&&(da.fromBufferAttribute(r,o),pa.fromBufferAttribute(r,l),ma.fromBufferAttribute(r,c),h.uv1=bs.getInterpolation(ga,ps,ms,gs,da,pa,ma,new se),h.uv2=h.uv1),a&&(gu.fromBufferAttribute(a,o),_u.fromBufferAttribute(a,l),yu.fromBufferAttribute(a,c),h.normal=bs.getInterpolation(ga,ps,ms,gs,gu,_u,yu,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};bs.getNormal(ps,ms,gs,u.normal),h.face=u}return h}var Ut=class n extends gt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function g(_,m,d,x,y,S,A,v,R,U,b){let E=S/R,N=A/U,G=S/2,X=A/2,L=v/2,O=R+1,z=U+1,K=0,J=0,Y=new C;for(let ne=0;ne<z;ne++){let re=ne*N-X;for(let ye=0;ye<O;ye++){let q=ye*E-G;Y[_]=q*x,Y[m]=re*y,Y[d]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[d]=v>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ye/R),u.push(1-ne/U),K+=1}}for(let ne=0;ne<U;ne++)for(let re=0;re<R;re++){let ye=f+re+O*ne,q=f+re+O*(ne+1),ie=f+(re+1)+O*(ne+1),xe=f+(re+1)+O*ne;l.push(ye,q,xe),l.push(q,ie,xe),J+=6}o.addGroup(p,J,b),p+=J,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ls(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Zt(n){let e={};for(let t=0;t<n.length;t++){let i=Ls(n[t]);for(let s in i)e[s]=i[s]}return e}function hm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function gf(n){return n.getRenderTarget()===null?n.outputColorSpace:at.workingColorSpace}var um={clone:Ls,merge:Zt},fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fm,this.fragmentShader=dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=hm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Xa=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vt=class extends Xa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ir*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_s=-90,ys=1,Hl=class extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(_s,ys,e,t);s.layers=this.layers,this.add(s);let r=new Vt(_s,ys,e,t);r.layers=this.layers,this.add(r);let a=new Vt(_s,ys,e,t);a.layers=this.layers,this.add(a);let o=new Vt(_s,ys,e,t);o.layers=this.layers,this.add(o);let l=new Vt(_s,ys,e,t);l.layers=this.layers,this.add(l);let c=new Vt(_s,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},qa=class extends gn{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Rs,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vl=class extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===zi?dt:mn),this.texture=new qa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ut(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:mi});r.uniforms.tEquirect.value=t;let a=new ze(s,r),o=t.minFilter;return t.minFilter===hr&&(t.minFilter=pn),new Hl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},xl=new C,pm=new C,mm=new Je,Rn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=xl.subVectors(i,t).cross(pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(xl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||mm.getNormalMatrix(e),s=this.coplanarPoint(xl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new on,xa=new C,pr=class{constructor(e=new Rn,t=new Rn,i=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],x=s[13],y=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,m-p,S-d).normalize(),i[1].setComponents(l+r,f+c,m+p,S+d).normalize(),i[2].setComponents(l+a,f+h,m+g,S+x).normalize(),i[3].setComponents(l-a,f-h,m-g,S-x).normalize(),i[4].setComponents(l-o,f-u,m-_,S-y).normalize(),t===jn)i[5].setComponents(l+o,f+u,m+_,S+y).normalize();else if(t===Oa)i[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(xa.x=s.normal.x>0?e.max.x:e.min.x,xa.y=s.normal.y>0?e.max.y:e.min.y,xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _f(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function gm(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let f=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let d=g[_];t?n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var Mi=class n extends gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let x=d*f-a;for(let y=0;y<c;y++){let S=y*u-r;g.push(S,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){let y=x+c*d,S=x+c*(d+1),A=x+1+c*(d+1),v=x+1+c*d;p.push(y,S,v),p.push(S,A,v)}this.setIndex(p),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},_m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ym=`#ifdef USE_ALPHAHASH
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
#endif`,xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sm=`#ifdef USE_AOMAP
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
#endif`,Em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pm=`#ifdef USE_IRIDESCENCE
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
#endif`,Lm=`#ifdef USE_BUMPMAP
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zm=`#define PI 3.141592653589793
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
} // validated`,Hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vm=`vec3 transformedNormal = objectNormal;
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
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",$m=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s0=`#ifdef USE_GRADIENTMAP
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
}`,r0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
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
#endif`,h0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
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
#endif`,g0=`struct PhysicalMaterial {
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
}`,_0=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A0=`#if defined( USE_POINTS_UV )
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
#endif`,R0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
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
#endif`,I0=`#ifdef USE_MORPHTARGETS
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
#endif`,D0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
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
#endif`,z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tg=`float getShadowMask() {
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
}`,ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cg=`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hg=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ug=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_g=`uniform sampler2D t2D;
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`#include <common>
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
}`,Sg=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Eg=`#define DISTANCE
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
}`,wg=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`uniform float scale;
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
}`,Cg=`uniform vec3 diffuse;
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`#include <common>
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
}`,Lg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ig=`#define LAMBERT
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
}`,Dg=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ug=`#define MATCAP
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
}`,Ng=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Og=`#define NORMAL
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
}`,Fg=`#define NORMAL
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
}`,kg=`#define PHONG
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
}`,Bg=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zg=`#define STANDARD
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
}`,Hg=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Vg=`#define TOON
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
}`,Gg=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Wg=`uniform float size;
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
}`,Xg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,Yg=`uniform vec3 color;
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
}`,$g=`uniform float rotation;
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
}`,Zg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,We={alphahash_fragment:_m,alphahash_pars_fragment:ym,alphamap_fragment:xm,alphamap_pars_fragment:vm,alphatest_fragment:Mm,alphatest_pars_fragment:bm,aomap_fragment:Sm,aomap_pars_fragment:Em,batching_pars_vertex:wm,batching_vertex:Tm,begin_vertex:Am,beginnormal_vertex:Rm,bsdfs:Cm,iridescence_fragment:Pm,bumpmap_pars_fragment:Lm,clipping_planes_fragment:Im,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Nm,color_fragment:Om,color_pars_fragment:Fm,color_pars_vertex:km,color_vertex:Bm,common:zm,cube_uv_reflection_fragment:Hm,defaultnormal_vertex:Vm,displacementmap_pars_vertex:Gm,displacementmap_vertex:Wm,emissivemap_fragment:Xm,emissivemap_pars_fragment:qm,colorspace_fragment:Ym,colorspace_pars_fragment:$m,envmap_fragment:Zm,envmap_common_pars_fragment:Jm,envmap_pars_fragment:Km,envmap_pars_vertex:jm,envmap_physical_pars_fragment:h0,envmap_vertex:Qm,fog_vertex:e0,fog_pars_vertex:t0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:s0,lightmap_fragment:r0,lightmap_pars_fragment:a0,lights_lambert_fragment:o0,lights_lambert_pars_fragment:l0,lights_pars_begin:c0,lights_toon_fragment:u0,lights_toon_pars_fragment:f0,lights_phong_fragment:d0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:_0,lights_fragment_maps:y0,lights_fragment_end:x0,logdepthbuf_fragment:v0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:S0,map_fragment:E0,map_pars_fragment:w0,map_particle_fragment:T0,map_particle_pars_fragment:A0,metalnessmap_fragment:R0,metalnessmap_pars_fragment:C0,morphcolor_vertex:P0,morphnormal_vertex:L0,morphtarget_pars_vertex:I0,morphtarget_vertex:D0,normal_fragment_begin:U0,normal_fragment_maps:N0,normal_pars_fragment:O0,normal_pars_vertex:F0,normal_vertex:k0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:z0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:V0,iridescence_pars_fragment:G0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:q0,project_vertex:Y0,dithering_fragment:$0,dithering_pars_fragment:Z0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:K0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:Q0,shadowmap_vertex:eg,shadowmask_pars_fragment:tg,skinbase_vertex:ng,skinning_pars_vertex:ig,skinning_vertex:sg,skinnormal_vertex:rg,specularmap_fragment:ag,specularmap_pars_fragment:og,tonemapping_fragment:lg,tonemapping_pars_fragment:cg,transmission_fragment:hg,transmission_pars_fragment:ug,uv_pars_fragment:fg,uv_pars_vertex:dg,uv_vertex:pg,worldpos_vertex:mg,background_vert:gg,background_frag:_g,backgroundCube_vert:yg,backgroundCube_frag:xg,cube_vert:vg,cube_frag:Mg,depth_vert:bg,depth_frag:Sg,distanceRGBA_vert:Eg,distanceRGBA_frag:wg,equirect_vert:Tg,equirect_frag:Ag,linedashed_vert:Rg,linedashed_frag:Cg,meshbasic_vert:Pg,meshbasic_frag:Lg,meshlambert_vert:Ig,meshlambert_frag:Dg,meshmatcap_vert:Ug,meshmatcap_frag:Ng,meshnormal_vert:Og,meshnormal_frag:Fg,meshphong_vert:kg,meshphong_frag:Bg,meshphysical_vert:zg,meshphysical_frag:Hg,meshtoon_vert:Vg,meshtoon_frag:Gg,points_vert:Wg,points_frag:Xg,shadow_vert:qg,shadow_frag:Yg,sprite_vert:$g,sprite_frag:Zg},ge={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Bn={basic:{uniforms:Zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Zt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Zt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ne(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Zt([ge.points,ge.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Zt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Zt([ge.common,ge.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Zt([ge.sprite,ge.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Zt([ge.common,ge.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Zt([ge.lights,ge.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Bn.physical={uniforms:Zt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var va={r:0,b:0,g:0};function Jg(n,e,t,i,s,r,a){let o=new Ne(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(m,d){let x=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?t:e).get(y)),y===null?_(o,l):y&&y.isColor&&(_(y,1),x=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ho)?(h===void 0&&(h=new ze(new Ut(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Ls(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,v,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=at.getTransfer(y.colorSpace)!==ft,(u!==y||f!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ze(new Mi(2,2),new ln({name:"BackgroundMaterial",uniforms:Ls(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=at.getTransfer(y.colorSpace)!==ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(va,gf(n)),i.buffers.color.setClear(va.r,va.g,va.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function Kg(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(L,O,z,K,J){let Y=!1;if(a){let ne=_(K,z,O);c!==ne&&(c=ne,p(c.object)),Y=d(L,K,z,J),Y&&x(L,K,z,J)}else{let ne=O.wireframe===!0;(c.geometry!==K.id||c.program!==z.id||c.wireframe!==ne)&&(c.geometry=K.id,c.program=z.id,c.wireframe=ne,Y=!0)}J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,U(L,O,z,K),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,O,z){let K=z.wireframe===!0,J=o[L.id];J===void 0&&(J={},o[L.id]=J);let Y=J[O.id];Y===void 0&&(Y={},J[O.id]=Y);let ne=Y[K];return ne===void 0&&(ne=m(f()),Y[K]=ne),ne}function m(L){let O=[],z=[],K=[];for(let J=0;J<s;J++)O[J]=0,z[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:K,object:L,attributes:{},index:null}}function d(L,O,z,K){let J=c.attributes,Y=O.attributes,ne=0,re=z.getAttributes();for(let ye in re)if(re[ye].location>=0){let ie=J[ye],xe=Y[ye];if(xe===void 0&&(ye==="instanceMatrix"&&L.instanceMatrix&&(xe=L.instanceMatrix),ye==="instanceColor"&&L.instanceColor&&(xe=L.instanceColor)),ie===void 0||ie.attribute!==xe||xe&&ie.data!==xe.data)return!0;ne++}return c.attributesNum!==ne||c.index!==K}function x(L,O,z,K){let J={},Y=O.attributes,ne=0,re=z.getAttributes();for(let ye in re)if(re[ye].location>=0){let ie=Y[ye];ie===void 0&&(ye==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),ye==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor));let xe={};xe.attribute=ie,ie&&ie.data&&(xe.data=ie.data),J[ye]=xe,ne++}c.attributes=J,c.attributesNum=ne,c.index=K}function y(){let L=c.newAttributes;for(let O=0,z=L.length;O<z;O++)L[O]=0}function S(L){A(L,0)}function A(L,O){let z=c.newAttributes,K=c.enabledAttributes,J=c.attributeDivisors;z[L]=1,K[L]===0&&(n.enableVertexAttribArray(L),K[L]=1),J[L]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),J[L]=O)}function v(){let L=c.newAttributes,O=c.enabledAttributes;for(let z=0,K=O.length;z<K;z++)O[z]!==L[z]&&(n.disableVertexAttribArray(z),O[z]=0)}function R(L,O,z,K,J,Y,ne){ne===!0?n.vertexAttribIPointer(L,O,z,J,Y):n.vertexAttribPointer(L,O,z,K,J,Y)}function U(L,O,z,K){if(i.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let J=K.attributes,Y=z.getAttributes(),ne=O.defaultAttributeValues;for(let re in Y){let ye=Y[re];if(ye.location>=0){let q=J[re];if(q===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){let ie=q.normalized,xe=q.itemSize,Te=t.get(q);if(Te===void 0)continue;let Se=Te.buffer,Ue=Te.type,Fe=Te.bytesPerElement,we=i.isWebGL2===!0&&(Ue===n.INT||Ue===n.UNSIGNED_INT||q.gpuType===sf);if(q.isInterleavedBufferAttribute){let ke=q.data,I=ke.stride,ce=q.offset;if(ke.isInstancedInterleavedBuffer){for(let $=0;$<ye.locationSize;$++)A(ye.location+$,ke.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let $=0;$<ye.locationSize;$++)S(ye.location+$);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let $=0;$<ye.locationSize;$++)R(ye.location+$,xe/ye.locationSize,Ue,ie,I*Fe,(ce+xe/ye.locationSize*$)*Fe,we)}else{if(q.isInstancedBufferAttribute){for(let ke=0;ke<ye.locationSize;ke++)A(ye.location+ke,q.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ke=0;ke<ye.locationSize;ke++)S(ye.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let ke=0;ke<ye.locationSize;ke++)R(ye.location+ke,xe/ye.locationSize,Ue,ie,xe*Fe,xe/ye.locationSize*ke*Fe,we)}}else if(ne!==void 0){let ie=ne[re];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(ye.location,ie);break;case 3:n.vertexAttrib3fv(ye.location,ie);break;case 4:n.vertexAttrib4fv(ye.location,ie);break;default:n.vertexAttrib1fv(ye.location,ie)}}}}v()}function b(){G();for(let L in o){let O=o[L];for(let z in O){let K=O[z];for(let J in K)g(K[J].object),delete K[J];delete O[z]}delete o[L]}}function E(L){if(o[L.id]===void 0)return;let O=o[L.id];for(let z in O){let K=O[z];for(let J in K)g(K[J].object),delete K[J];delete O[z]}delete o[L.id]}function N(L){for(let O in o){let z=o[O];if(z[L.id]===void 0)continue;let K=z[L.id];for(let J in K)g(K[J].object),delete K[J];delete z[L.id]}}function G(){X(),h=!0,c!==l&&(c=l,p(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:X,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:S,disableUnusedAttributes:v}}function jg(n,e,t,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Qg(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,S=a||e.has("OES_texture_float"),A=y&&S,v=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:v}}function e_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Rn,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let x=r?0:i,y=x*4,S=d.clippingState||null;l.value=S,S=h(g,f,y,p);for(let A=0;A!==y;++A)S[A]=t[A];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=p+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,S=p;y!==_;++y,S+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function t_(n){let e=new WeakMap;function t(a,o){return o===Dl?a.mapping=Rs:o===Ul&&(a.mapping=Cs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Dl||o===Ul)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Vl(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ya=class extends Xa{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ss=4,xu=[.125,.215,.35,.446,.526,.582],Fi=20,vl=new Ya,vu=new Ne,Ml=null,bl=0,Sl=0,Ni=(1+Math.sqrt(5))/2,xs=1/Ni,Mu=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Ni,xs),new C(0,Ni,-xs),new C(xs,0,Ni),new C(-xs,0,Ni),new C(Ni,xs,0),new C(-Ni,xs,0)],$a=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ml=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ml,bl,Sl),e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ml=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:ur,format:Pn,colorSpace:Qn,depthBuffer:!1},s=bu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n_(r)),this._blurMaterial=i_(r,e,t)}return s}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,i,s){let o=new Vt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(vu),h.toneMapping=_i,h.autoClear=!1;let p=new _n({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new ze(new Ut,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(vu),_=!0);for(let d=0;d<6;d++){let x=d%3;x===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):x===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let y=this._cubeSize;Ma(s,x*y,d>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Rs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ma(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,vl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mu[(s-1)%Mu.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ze(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);let d=[],x=0;for(let R=0;R<Fi;++R){let U=R/_,b=Math.exp(-U*U/2);d.push(b),R===0?x+=b:R<m&&(x+=2*b)}for(let R=0;R<d.length;R++)d[R]=d[R]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let S=this._sizeLods[s],A=3*S*(s>y-Ss?s-y+Ss:0),v=4*(this._cubeSize-S);Ma(t,A,v,3*S,2*S),l.setRenderTarget(t),l.render(u,vl)}};function n_(n){let e=[],t=[],i=[],s=n,r=n-Ss+1+xu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ss?l=xu[a-n+Ss-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,x=new Float32Array(_*g*p),y=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let v=0;v<p;v++){let R=v%3*2/3-1,U=v>2?0:-1,b=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];x.set(b,_*g*v),y.set(f,m*g*v);let E=[v,v,v,v,v,v];S.set(E,d*g*v)}let A=new gt;A.setAttribute("position",new ut(x,_)),A.setAttribute("uv",new ut(y,m)),A.setAttribute("faceIndex",new ut(S,d)),e.push(A),s>Ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bu(n,e,t){let i=new ei(n,e,t);return i.texture.mapping=ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ma(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function i_(n,e,t){let i=new Float32Array(Fi),s=new C(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Su(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Eu(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function s_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Dl||l===Ul,h=l===Rs||l===Cs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new $a(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new $a(n));let f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function r_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function a_(n,e,t,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let x=p.array;_=p.version;for(let y=0,S=x.length;y<S;y+=3){let A=x[y+0],v=x[y+1],R=x[y+2];f.push(A,v,v,R,R,A)}}else if(g!==void 0){let x=g.array;_=g.version;for(let y=0,S=x.length/3-1;y<S;y+=3){let A=y+0,v=y+1,R=y+2;f.push(A,v,v,R,R,A)}}else return;let m=new(pf(f)?Wa:Ga)(f,1);m.version=_;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function o_(n,e,t,i){let s=i.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){n.drawElements(r,g,o,p*l),t.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,d;if(s)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,o,p*l,_),t.update(g,r,_)}function f(p,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,_);let d=0;for(let x=0;x<_;x++)d+=g[x];t.update(d,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function l_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function c_(n,e){return n[0]-e[0]}function h_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function u_(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,a=new mt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],U=0;x===!0&&(U=1),y===!0&&(U=2),S===!0&&(U=3);let b=h.attributes.position.count*U,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let N=new Float32Array(b*E*4*g),G=new Ha(N,b,E,g);G.type=pi,G.needsUpdate=!0;let X=U*4;for(let O=0;O<g;O++){let z=A[O],K=v[O],J=R[O],Y=b*E*4*O;for(let ne=0;ne<z.count;ne++){let re=ne*X;x===!0&&(a.fromBufferAttribute(z,ne),N[Y+re+0]=a.x,N[Y+re+1]=a.y,N[Y+re+2]=a.z,N[Y+re+3]=0),y===!0&&(a.fromBufferAttribute(K,ne),N[Y+re+4]=a.x,N[Y+re+5]=a.y,N[Y+re+6]=a.z,N[Y+re+7]=0),S===!0&&(a.fromBufferAttribute(J,ne),N[Y+re+8]=a.x,N[Y+re+9]=a.y,N[Y+re+10]=a.z,N[Y+re+11]=J.itemSize===4?a.w:1)}}_={count:g,texture:G,size:new se(b,E)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let x=0;x<f.length;x++)m+=f[x];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",d),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let p=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let y=0;y<p;y++)g[y]=[y,0];i[h.id]=g}for(let y=0;y<p;y++){let S=g[y];S[0]=y,S[1]=f[y]}g.sort(h_);for(let y=0;y<8;y++)y<p&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(c_);let _=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let y=0;y<8;y++){let S=o[y],A=S[0],v=S[1];A!==Number.MAX_SAFE_INTEGER&&v?(_&&h.getAttribute("morphTarget"+y)!==_[A]&&h.setAttribute("morphTarget"+y,_[A]),m&&h.getAttribute("morphNormal"+y)!==m[A]&&h.setAttribute("morphNormal"+y,m[A]),s[y]=v,d+=v):(_&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let x=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function f_(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Za=class extends gn{constructor(e,t,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:Bi,h!==Bi&&h!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Bi&&(i=di),i===void 0&&h===Ps&&(i=ki),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},yf=new gn,xf=new Za(1,1);xf.compareFunction=df;var vf=new Ha,Mf=new zl,bf=new qa,wu=[],Tu=[],Au=new Float32Array(16),Ru=new Float32Array(9),Cu=new Float32Array(4);function Ns(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=wu[s];if(r===void 0&&(r=new Float32Array(s),wu[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function fo(n,e){let t=Tu[e];t===void 0&&(t=new Int32Array(e),Tu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function d_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function p_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function m_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function g_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function __(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Cu.set(i),n.uniformMatrix2fv(this.addr,!1,Cu),Rt(t,i)}}function y_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Ru.set(i),n.uniformMatrix3fv(this.addr,!1,Ru),Rt(t,i)}}function x_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;Au.set(i),n.uniformMatrix4fv(this.addr,!1,Au),Rt(t,i)}}function v_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function M_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function b_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function S_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function E_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function w_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function T_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function A_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function R_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?xf:yf;t.setTexture2D(e||r,s)}function C_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Mf,s)}function P_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||bf,s)}function L_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||vf,s)}function I_(n){switch(n){case 5126:return d_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return __;case 35675:return y_;case 35676:return x_;case 5124:case 35670:return v_;case 35667:case 35671:return M_;case 35668:case 35672:return b_;case 35669:case 35673:return S_;case 5125:return E_;case 36294:return w_;case 36295:return T_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return L_}}function D_(n,e){n.uniform1fv(this.addr,e)}function U_(n,e){let t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function N_(n,e){let t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function O_(n,e){let t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function F_(n,e){let t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function k_(n,e){let t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function B_(n,e){let t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function z_(n,e){n.uniform1iv(this.addr,e)}function H_(n,e){n.uniform2iv(this.addr,e)}function V_(n,e){n.uniform3iv(this.addr,e)}function G_(n,e){n.uniform4iv(this.addr,e)}function W_(n,e){n.uniform1uiv(this.addr,e)}function X_(n,e){n.uniform2uiv(this.addr,e)}function q_(n,e){n.uniform3uiv(this.addr,e)}function Y_(n,e){n.uniform4uiv(this.addr,e)}function $_(n,e,t){let i=this.cache,s=e.length,r=fo(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||yf,r[a])}function Z_(n,e,t){let i=this.cache,s=e.length,r=fo(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Mf,r[a])}function J_(n,e,t){let i=this.cache,s=e.length,r=fo(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||bf,r[a])}function K_(n,e,t){let i=this.cache,s=e.length,r=fo(t,s);At(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||vf,r[a])}function j_(n){switch(n){case 5126:return D_;case 35664:return U_;case 35665:return N_;case 35666:return O_;case 35674:return F_;case 35675:return k_;case 35676:return B_;case 5124:case 35670:return z_;case 35667:case 35671:return H_;case 35668:case 35672:return V_;case 35669:case 35673:return G_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return K_}}var Gl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=I_(t.type)}},Wl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j_(t.type)}},Xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},El=/(\w+)(\])?(\[|\.)?/g;function Pu(n,e){n.seq.push(e),n.map[e.id]=e}function Q_(n,e,t){let i=n.name,s=i.length;for(El.lastIndex=0;;){let r=El.exec(i),a=El.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pu(t,c===void 0?new Gl(o,n,e):new Wl(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Xl(o),Pu(t,u)),t=u}}}var As=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Q_(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Lu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ey=37297,ty=0;function ny(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function iy(n){let e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(n),i;switch(e===t?i="":e===Na&&t===Ua?i="LinearDisplayP3ToLinearSRGB":e===Ua&&t===Na&&(i="LinearSRGBToLinearDisplayP3"),n){case Qn:case uo:return[i,"LinearTransferOETF"];case dt:case Rc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Iu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ny(n.getShaderSource(e),a)}else return s}function sy(n,e){let t=iy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ry(n,e){let t;switch(e){case up:t="Linear";break;case fp:t="Reinhard";break;case dp:t="OptimizedCineon";break;case Tc:t="ACESFilmic";break;case mp:t="AgX";break;case pp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ay(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Es).join(`
`)}function oy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Es).join(`
`)}function ly(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Es(n){return n!==""}function Du(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(n){return n.replace(hy,fy)}var uy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fy(n,e){let t=We[e];if(t===void 0){let i=uy.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ql(t)}var dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(n){return n.replace(dy,py)}function py(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ou(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function my(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===co?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function gy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _y(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function yy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tf:e="ENVMAP_BLENDING_MULTIPLY";break;case cp:e="ENVMAP_BLENDING_MIX";break;case hp:e="ENVMAP_BLENDING_ADD";break}return e}function xy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vy(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=my(t),c=gy(t),h=_y(t),u=yy(t),f=xy(t),p=t.isWebGL2?"":ay(t),g=oy(t),_=ly(r),m=s.createProgram(),d,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Es).join(`
`),d.length>0&&(d+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Es).join(`
`),x.length>0&&(x+=`
`)):(d=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),x=[p,Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?We.tonemapping_pars_fragment:"",t.toneMapping!==_i?ry("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,sy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),a=ql(a),a=Du(a,t),a=Uu(a,t),o=ql(o),o=Du(o,t),o=Uu(o,t),a=Nu(a),o=Nu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let S=y+d+a,A=y+x+o,v=Lu(s,s.VERTEX_SHADER,S),R=Lu(s,s.FRAGMENT_SHADER,A);s.attachShader(m,v),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(G){if(n.debug.checkShaderErrors){let X=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(v).trim(),O=s.getShaderInfoLog(R).trim(),z=!0,K=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,v,R);else{let J=Iu(s,v,"vertex"),Y=Iu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+J+`
`+Y)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(L===""||O==="")&&(K=!1);K&&(G.diagnostics={runnable:z,programLog:X,vertexShader:{log:L,prefix:d},fragmentShader:{log:O,prefix:x}})}s.deleteShader(v),s.deleteShader(R),b=new As(s,m),E=cy(s,m)}let b;this.getUniforms=function(){return b===void 0&&U(this),b};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,ey)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ty++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=R,this}var My=0,Yl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new $l(e),t.set(e,i)),i}},$l=class{constructor(e){this.id=My++,this.code=e,this.usedTimes=0}};function by(n,e,t,i,s,r,a){let o=new dr,l=new Yl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function m(b,E,N,G,X){let L=G.fog,O=X.geometry,z=b.isMeshStandardMaterial?G.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),J=K&&K.mapping===ho?K.image.height:null,Y=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,re=ne!==void 0?ne.length:0,ye=0;O.morphAttributes.position!==void 0&&(ye=1),O.morphAttributes.normal!==void 0&&(ye=2),O.morphAttributes.color!==void 0&&(ye=3);let q,ie,xe,Te;if(Y){let qt=Bn[Y];q=qt.vertexShader,ie=qt.fragmentShader}else q=b.vertexShader,ie=b.fragmentShader,l.update(b),xe=l.getVertexShaderID(b),Te=l.getFragmentShaderID(b);let Se=n.getRenderTarget(),Ue=X.isInstancedMesh===!0,Fe=X.isBatchedMesh===!0,we=!!b.map,ke=!!b.matcap,I=!!K,ce=!!b.aoMap,$=!!b.lightMap,oe=!!b.bumpMap,Z=!!b.normalMap,Ae=!!b.displacementMap,ve=!!b.emissiveMap,w=!!b.metalnessMap,M=!!b.roughnessMap,B=b.anisotropy>0,ae=b.clearcoat>0,Q=b.iridescence>0,j=b.sheen>0,Ee=b.transmission>0,_e=B&&!!b.anisotropyMap,Me=ae&&!!b.clearcoatMap,Ie=ae&&!!b.clearcoatNormalMap,He=ae&&!!b.clearcoatRoughnessMap,ee=Q&&!!b.iridescenceMap,Ye=Q&&!!b.iridescenceThicknessMap,P=j&&!!b.sheenColorMap,te=j&&!!b.sheenRoughnessMap,me=!!b.specularMap,le=!!b.specularColorMap,Re=!!b.specularIntensityMap,$e=Ee&&!!b.transmissionMap,Ke=Ee&&!!b.thicknessMap,Xe=!!b.gradientMap,de=!!b.alphaMap,D=b.alphaTest>0,he=!!b.alphaHash,ue=!!b.extensions,De=!!O.attributes.uv1,Ce=!!O.attributes.uv2,tt=!!O.attributes.uv3,st=_i;return b.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(st=n.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:q,fragmentShader:ie,defines:b.defines,customVertexShaderID:xe,customFragmentShaderID:Te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Fe,instancing:Ue,instancingColor:Ue&&X.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Se===null?n.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Qn,map:we,matcap:ke,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:J,aoMap:ce,lightMap:$,bumpMap:oe,normalMap:Z,displacementMap:f&&Ae,emissiveMap:ve,normalMapObjectSpace:Z&&b.normalMapType===Ap,normalMapTangentSpace:Z&&b.normalMapType===ff,metalnessMap:w,roughnessMap:M,anisotropy:B,anisotropyMap:_e,clearcoat:ae,clearcoatMap:Me,clearcoatNormalMap:Ie,clearcoatRoughnessMap:He,iridescence:Q,iridescenceMap:ee,iridescenceThicknessMap:Ye,sheen:j,sheenColorMap:P,sheenRoughnessMap:te,specularMap:me,specularColorMap:le,specularIntensityMap:Re,transmission:Ee,transmissionMap:$e,thicknessMap:Ke,gradientMap:Xe,opaque:b.transparent===!1&&b.blending===gi,alphaMap:de,alphaTest:D,alphaHash:he,combine:b.combine,mapUv:we&&_(b.map.channel),aoMapUv:ce&&_(b.aoMap.channel),lightMapUv:$&&_(b.lightMap.channel),bumpMapUv:oe&&_(b.bumpMap.channel),normalMapUv:Z&&_(b.normalMap.channel),displacementMapUv:Ae&&_(b.displacementMap.channel),emissiveMapUv:ve&&_(b.emissiveMap.channel),metalnessMapUv:w&&_(b.metalnessMap.channel),roughnessMapUv:M&&_(b.roughnessMap.channel),anisotropyMapUv:_e&&_(b.anisotropyMap.channel),clearcoatMapUv:Me&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:P&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:te&&_(b.sheenRoughnessMap.channel),specularMapUv:me&&_(b.specularMap.channel),specularColorMapUv:le&&_(b.specularColorMap.channel),specularIntensityMapUv:Re&&_(b.specularIntensityMap.channel),transmissionMapUv:$e&&_(b.transmissionMap.channel),thicknessMapUv:Ke&&_(b.thicknessMap.channel),alphaMapUv:de&&_(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Z||B),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Ce,vertexUv3s:tt,pointsUvs:X.isPoints===!0&&!!O.attributes.uv&&(we||de),fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ye,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&b.map.isVideoTexture===!0&&at.getTransfer(b.map.colorSpace)===ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Cn,flipSided:b.side===Gt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ue&&b.extensions.derivatives===!0,extensionFragDepth:ue&&b.extensions.fragDepth===!0,extensionDrawBuffers:ue&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)E.push(N),E.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(x(E,b),y(E,b),E.push(n.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function x(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function y(b,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function S(b){let E=g[b.type],N;if(E){let G=Bn[E];N=um.clone(G.uniforms)}else N=b.uniforms;return N}function A(b,E){let N;for(let G=0,X=c.length;G<X;G++){let L=c[G];if(L.cacheKey===E){N=L,++N.usedTimes;break}}return N===void 0&&(N=new vy(n,E,b,r),c.push(N)),N}function v(b){if(--b.usedTimes===0){let E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:A,releaseProgram:v,releaseShaderCache:R,programs:c,dispose:U}}function Sy(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Ey(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ku(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,f,p,g,_,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function o(u,f,p,g,_,m){let d=a(u,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,g,_,m){let d=a(u,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Ey),i.length>1&&i.sort(f||Fu),s.length>1&&s.sort(f||Fu)}function h(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function wy(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new ku,n.set(i,[a])):s>=r.length?(a=new ku,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ty(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ne};break;case"SpotLight":t={position:new C,direction:new C,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function Ay(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Ry=0;function Cy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Py(n,e){let t=new Ty,i=Ay(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,a=new ot,o=new ot;function l(h,u){let f=0,p=0,g=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let _=0,m=0,d=0,x=0,y=0,S=0,A=0,v=0,R=0,U=0,b=0;h.sort(Cy);let E=u===!0?Math.PI:1;for(let G=0,X=h.length;G<X;G++){let L=h[G],O=L.color,z=L.intensity,K=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=O.r*z*E,p+=O.g*z*E,g+=O.b*z*E;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(L.sh.coefficients[Y],z);b++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let ne=L.shadow,re=i.get(L);re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,s.directionalShadow[_]=re,s.directionalShadowMap[_]=J,s.directionalShadowMatrix[_]=L.shadow.matrix,S++}s.directional[_]=Y,_++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(z*E),Y.distance=K,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,s.spot[d]=Y;let ne=L.shadow;if(L.map&&(s.spotLightMap[R]=L.map,R++,ne.updateMatrices(L),L.castShadow&&U++),s.spotLightMatrix[d]=ne.matrix,L.castShadow){let re=i.get(L);re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,s.spotShadow[d]=re,s.spotShadowMap[d]=J,v++}d++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(O).multiplyScalar(z),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),s.rectArea[x]=Y,x++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*E),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let ne=L.shadow,re=i.get(L);re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,re.shadowCameraNear=ne.camera.near,re.shadowCameraFar=ne.camera.far,s.pointShadow[m]=re,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=L.shadow.matrix,A++}s.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(z*E),Y.groundColor.copy(L.groundColor).multiplyScalar(z*E),s.hemi[y]=Y,y++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_FLOAT_1,s.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ge.LTC_HALF_1,s.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==_||N.pointLength!==m||N.spotLength!==d||N.rectAreaLength!==x||N.hemiLength!==y||N.numDirectionalShadows!==S||N.numPointShadows!==A||N.numSpotShadows!==v||N.numSpotMaps!==R||N.numLightProbes!==b)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=x,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=v,s.spotShadowMap.length=v,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=v+R-U,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=b,N.directionalLength=_,N.pointLength=m,N.spotLength=d,N.rectAreaLength=x,N.hemiLength=y,N.numDirectionalShadows=S,N.numPointShadows=A,N.numSpotShadows=v,N.numSpotMaps=R,N.numLightProbes=b,s.version=Ry++)}function c(h,u){let f=0,p=0,g=0,_=0,m=0,d=u.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){let S=h[x];if(S.isDirectionalLight){let A=s.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),f++}else if(S.isSpotLight){let A=s.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),g++}else if(S.isRectAreaLight){let A=s.rectArea[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),o.identity(),a.copy(S.matrixWorld),a.premultiply(d),o.extractRotation(a),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let A=s.point[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){let A=s.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:s}}function Bu(n,e){let t=new Py(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ly(n,e){let t=new WeakMap;function i(r,a=0){let o=t.get(r),l;return o===void 0?(l=new Bu(n,e),t.set(r,[l])):a>=o.length?(l=new Bu(n,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:i,dispose:s}}var Zl=class extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jl=class extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dy=`uniform sampler2D shadow_pass;
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
}`;function Uy(n,e,t){let i=new pr,s=new se,r=new se,a=new mt,o=new Zl({depthPacking:Tp}),l=new Jl,c={},h=t.maxTextureSize,u={[xi]:Gt,[Gt]:xi,[Cn]:Cn},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Iy,fragmentShader:Dy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new gt;g.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ze(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=co;let d=this.type;this.render=function(v,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;let b=n.getRenderTarget(),E=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),G=n.state;G.setBlending(mi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let X=d!==Kn&&this.type===Kn,L=d===Kn&&this.type!==Kn;for(let O=0,z=v.length;O<z;O++){let K=v[O],J=K.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Y=J.getFrameExtents();if(s.multiply(Y),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,J.mapSize.y=r.y)),J.map===null||X===!0||L===!0){let re=this.type!==Kn?{minFilter:Jt,magFilter:Jt}:{};J.map!==null&&J.map.dispose(),J.map=new ei(s.x,s.y,re),J.map.texture.name=K.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();let ne=J.getViewportCount();for(let re=0;re<ne;re++){let ye=J.getViewport(re);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),G.viewport(a),J.updateMatrices(K,re),i=J.getFrustum(),S(R,U,J.camera,K,this.type)}J.isPointLightShadow!==!0&&this.type===Kn&&x(J,U),J.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,E,N)};function x(v,R){let U=e.update(_);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ei(s.x,s.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(R,null,U,f,_,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(R,null,U,p,_,null)}function y(v,R,U,b){let E=null,N=U.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(N!==void 0)E=N;else if(E=U.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=E.uuid,X=R.uuid,L=c[G];L===void 0&&(L={},c[G]=L);let O=L[X];O===void 0&&(O=E.clone(),L[X]=O,R.addEventListener("dispose",A)),E=O}if(E.visible=R.visible,E.wireframe=R.wireframe,b===Kn?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=n.properties.get(E);G.light=U}return E}function S(v,R,U,b,E){if(v.visible===!1)return;if(v.layers.test(R.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&E===Kn)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,v.matrixWorld);let X=e.update(v),L=v.material;if(Array.isArray(L)){let O=X.groups;for(let z=0,K=O.length;z<K;z++){let J=O[z],Y=L[J.materialIndex];if(Y&&Y.visible){let ne=y(v,Y,b,E);v.onBeforeShadow(n,v,R,U,X,ne,J),n.renderBufferDirect(U,null,X,ne,v,J),v.onAfterShadow(n,v,R,U,X,ne,J)}}}else if(L.visible){let O=y(v,L,b,E);v.onBeforeShadow(n,v,R,U,X,O,null),n.renderBufferDirect(U,null,X,O,v,null),v.onAfterShadow(n,v,R,U,X,O,null)}}let G=v.children;for(let X=0,L=G.length;X<L;X++)S(G[X],R,U,b,E)}function A(v){v.target.removeEventListener("dispose",A);for(let U in c){let b=c[U],E=v.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function Ny(n,e,t){let i=t.isWebGL2;function s(){let D=!1,he=new mt,ue=null,De=new mt(0,0,0,0);return{setMask:function(Ce){ue!==Ce&&!D&&(n.colorMask(Ce,Ce,Ce,Ce),ue=Ce)},setLocked:function(Ce){D=Ce},setClear:function(Ce,tt,st,Lt,qt){qt===!0&&(Ce*=Lt,tt*=Lt,st*=Lt),he.set(Ce,tt,st,Lt),De.equals(he)===!1&&(n.clearColor(Ce,tt,st,Lt),De.copy(he))},reset:function(){D=!1,ue=null,De.set(-1,0,0,0)}}}function r(){let D=!1,he=null,ue=null,De=null;return{setTest:function(Ce){Ce?Fe(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(Ce){he!==Ce&&!D&&(n.depthMask(Ce),he=Ce)},setFunc:function(Ce){if(ue!==Ce){switch(Ce){case np:n.depthFunc(n.NEVER);break;case ip:n.depthFunc(n.ALWAYS);break;case sp:n.depthFunc(n.LESS);break;case Pa:n.depthFunc(n.LEQUAL);break;case rp:n.depthFunc(n.EQUAL);break;case ap:n.depthFunc(n.GEQUAL);break;case op:n.depthFunc(n.GREATER);break;case lp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Ce}},setLocked:function(Ce){D=Ce},setClear:function(Ce){De!==Ce&&(n.clearDepth(Ce),De=Ce)},reset:function(){D=!1,he=null,ue=null,De=null}}}function a(){let D=!1,he=null,ue=null,De=null,Ce=null,tt=null,st=null,Lt=null,qt=null;return{setTest:function(ht){D||(ht?Fe(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(ht){he!==ht&&!D&&(n.stencilMask(ht),he=ht)},setFunc:function(ht,Yt,kn){(ue!==ht||De!==Yt||Ce!==kn)&&(n.stencilFunc(ht,Yt,kn),ue=ht,De=Yt,Ce=kn)},setOp:function(ht,Yt,kn){(tt!==ht||st!==Yt||Lt!==kn)&&(n.stencilOp(ht,Yt,kn),tt=ht,st=Yt,Lt=kn)},setLocked:function(ht){D=ht},setClear:function(ht){qt!==ht&&(n.clearStencil(ht),qt=ht)},reset:function(){D=!1,he=null,ue=null,De=null,Ce=null,tt=null,st=null,Lt=null,qt=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},p={},g=new WeakMap,_=[],m=null,d=!1,x=null,y=null,S=null,A=null,v=null,R=null,U=null,b=new Ne(0,0,0),E=0,N=!1,G=null,X=null,L=null,O=null,z=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Y=0,ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ne)[1]),J=Y>=1):ne.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),J=Y>=2);let re=null,ye={},q=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),xe=new mt().fromArray(q),Te=new mt().fromArray(ie);function Se(D,he,ue,De){let Ce=new Uint8Array(4),tt=n.createTexture();n.bindTexture(D,tt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<ue;st++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(he+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return tt}let Ue={};Ue[n.TEXTURE_2D]=Se(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=Se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[n.TEXTURE_2D_ARRAY]=Se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=Se(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(n.DEPTH_TEST),l.setFunc(Pa),ve(!1),w(xh),Fe(n.CULL_FACE),Z(mi);function Fe(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function we(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function ke(D,he){return p[D]!==he?(n.bindFramebuffer(D,he),p[D]=he,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=he),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function I(D,he){let ue=_,De=!1;if(D)if(ue=g.get(he),ue===void 0&&(ue=[],g.set(he,ue)),D.isWebGLMultipleRenderTargets){let Ce=D.texture;if(ue.length!==Ce.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,st=Ce.length;tt<st;tt++)ue[tt]=n.COLOR_ATTACHMENT0+tt;ue.length=Ce.length,De=!0}}else ue[0]!==n.COLOR_ATTACHMENT0&&(ue[0]=n.COLOR_ATTACHMENT0,De=!0);else ue[0]!==n.BACK&&(ue[0]=n.BACK,De=!0);De&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function ce(D){return m!==D?(n.useProgram(D),m=D,!0):!1}let $={[Oi]:n.FUNC_ADD,[Hd]:n.FUNC_SUBTRACT,[Vd]:n.FUNC_REVERSE_SUBTRACT};if(i)$[bh]=n.MIN,$[Sh]=n.MAX;else{let D=e.get("EXT_blend_minmax");D!==null&&($[bh]=D.MIN_EXT,$[Sh]=D.MAX_EXT)}let oe={[Gd]:n.ZERO,[Wd]:n.ONE,[Xd]:n.SRC_COLOR,[Ll]:n.SRC_ALPHA,[Kd]:n.SRC_ALPHA_SATURATE,[Zd]:n.DST_COLOR,[Yd]:n.DST_ALPHA,[qd]:n.ONE_MINUS_SRC_COLOR,[Il]:n.ONE_MINUS_SRC_ALPHA,[Jd]:n.ONE_MINUS_DST_COLOR,[$d]:n.ONE_MINUS_DST_ALPHA,[jd]:n.CONSTANT_COLOR,[Qd]:n.ONE_MINUS_CONSTANT_COLOR,[ep]:n.CONSTANT_ALPHA,[tp]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(D,he,ue,De,Ce,tt,st,Lt,qt,ht){if(D===mi){d===!0&&(we(n.BLEND),d=!1);return}if(d===!1&&(Fe(n.BLEND),d=!0),D!==zd){if(D!==x||ht!==N){if((y!==Oi||v!==Oi)&&(n.blendEquation(n.FUNC_ADD),y=Oi,v=Oi),ht)switch(D){case gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hi:n.blendFunc(n.ONE,n.ONE);break;case vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,A=null,R=null,U=null,b.set(0,0,0),E=0,x=D,N=ht}return}Ce=Ce||he,tt=tt||ue,st=st||De,(he!==y||Ce!==v)&&(n.blendEquationSeparate($[he],$[Ce]),y=he,v=Ce),(ue!==S||De!==A||tt!==R||st!==U)&&(n.blendFuncSeparate(oe[ue],oe[De],oe[tt],oe[st]),S=ue,A=De,R=tt,U=st),(Lt.equals(b)===!1||qt!==E)&&(n.blendColor(Lt.r,Lt.g,Lt.b,qt),b.copy(Lt),E=qt),x=D,N=!1}function Ae(D,he){D.side===Cn?we(n.CULL_FACE):Fe(n.CULL_FACE);let ue=D.side===Gt;he&&(ue=!ue),ve(ue),D.blending===gi&&D.transparent===!1?Z(mi):Z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);let De=D.stencilWrite;c.setTest(De),De&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),B(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function ve(D){G!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),G=D)}function w(D){D!==Fd?(Fe(n.CULL_FACE),D!==X&&(D===xh?n.cullFace(n.BACK):D===kd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),X=D}function M(D){D!==L&&(J&&n.lineWidth(D),L=D)}function B(D,he,ue){D?(Fe(n.POLYGON_OFFSET_FILL),(O!==he||z!==ue)&&(n.polygonOffset(he,ue),O=he,z=ue)):we(n.POLYGON_OFFSET_FILL)}function ae(D){D?Fe(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Q(D){D===void 0&&(D=n.TEXTURE0+K-1),re!==D&&(n.activeTexture(D),re=D)}function j(D,he,ue){ue===void 0&&(re===null?ue=n.TEXTURE0+K-1:ue=re);let De=ye[ue];De===void 0&&(De={type:void 0,texture:void 0},ye[ue]=De),(De.type!==D||De.texture!==he)&&(re!==ue&&(n.activeTexture(ue),re=ue),n.bindTexture(D,he||Ue[D]),De.type=D,De.texture=he)}function Ee(){let D=ye[re];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _e(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(D){xe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),xe.copy(D))}function $e(D){Te.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Te.copy(D))}function Ke(D,he){let ue=u.get(he);ue===void 0&&(ue=new WeakMap,u.set(he,ue));let De=ue.get(D);De===void 0&&(De=n.getUniformBlockIndex(he,D.name),ue.set(D,De))}function Xe(D,he){let De=u.get(he).get(D);h.get(he)!==De&&(n.uniformBlockBinding(he,De,D.__bindingPointIndex),h.set(he,De))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},re=null,ye={},p={},g=new WeakMap,_=[],m=null,d=!1,x=null,y=null,S=null,A=null,v=null,R=null,U=null,b=new Ne(0,0,0),E=0,N=!1,G=null,X=null,L=null,O=null,z=null,xe.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Fe,disable:we,bindFramebuffer:ke,drawBuffers:I,useProgram:ce,setBlending:Z,setMaterial:Ae,setFlipSided:ve,setCullFace:w,setLineWidth:M,setPolygonOffset:B,setScissorTest:ae,activeTexture:Q,bindTexture:j,unbindTexture:Ee,compressedTexImage2D:_e,compressedTexImage3D:Me,texImage2D:me,texImage3D:le,updateUBOMapping:Ke,uniformBlockBinding:Xe,texStorage2D:P,texStorage3D:te,texSubImage2D:Ie,texSubImage3D:He,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ye,scissor:Re,viewport:$e,reset:de}}function Oy(n,e,t,i,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return p?new OffscreenCanvas(w,M):ka("canvas")}function _(w,M,B,ae){let Q=1;if((w.width>ae||w.height>ae)&&(Q=ae/Math.max(w.width,w.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let j=M?Fa:Math.floor,Ee=j(Q*w.width),_e=j(Q*w.height);u===void 0&&(u=g(Ee,_e));let Me=B?g(Ee,_e):u;return Me.width=Ee,Me.height=_e,Me.getContext("2d").drawImage(w,0,0,Ee,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ee+"x"+_e+")."),Me}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return kl(w.width)&&kl(w.height)}function d(w){return o?!1:w.wrapS!==an||w.wrapT!==an||w.minFilter!==Jt&&w.minFilter!==pn}function x(w,M){return w.generateMipmaps&&M&&w.minFilter!==Jt&&w.minFilter!==pn}function y(w){n.generateMipmap(w)}function S(w,M,B,ae,Q=!1){if(o===!1)return M;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=M;if(M===n.RED&&(B===n.FLOAT&&(j=n.R32F),B===n.HALF_FLOAT&&(j=n.R16F),B===n.UNSIGNED_BYTE&&(j=n.R8)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.R8UI),B===n.UNSIGNED_SHORT&&(j=n.R16UI),B===n.UNSIGNED_INT&&(j=n.R32UI),B===n.BYTE&&(j=n.R8I),B===n.SHORT&&(j=n.R16I),B===n.INT&&(j=n.R32I)),M===n.RG&&(B===n.FLOAT&&(j=n.RG32F),B===n.HALF_FLOAT&&(j=n.RG16F),B===n.UNSIGNED_BYTE&&(j=n.RG8)),M===n.RGBA){let Ee=Q?Da:at.getTransfer(ae);B===n.FLOAT&&(j=n.RGBA32F),B===n.HALF_FLOAT&&(j=n.RGBA16F),B===n.UNSIGNED_BYTE&&(j=Ee===ft?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function A(w,M,B){return x(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==Jt&&w.minFilter!==pn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function v(w){return w===Jt||w===Eh||w===Jo?n.NEAREST:n.LINEAR}function R(w){let M=w.target;M.removeEventListener("dispose",R),b(M),M.isVideoTexture&&h.delete(M)}function U(w){let M=w.target;M.removeEventListener("dispose",U),N(M)}function b(w){let M=i.get(w);if(M.__webglInit===void 0)return;let B=w.source,ae=f.get(B);if(ae){let Q=ae[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(w),Object.keys(ae).length===0&&f.delete(B)}i.remove(w)}function E(w){let M=i.get(w);n.deleteTexture(M.__webglTexture);let B=w.source,ae=f.get(B);delete ae[M.__cacheKey],a.memory.textures--}function N(w){let M=w.texture,B=i.get(w),ae=i.get(M);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(B.__webglFramebuffer[Q]))for(let j=0;j<B.__webglFramebuffer[Q].length;j++)n.deleteFramebuffer(B.__webglFramebuffer[Q][j]);else n.deleteFramebuffer(B.__webglFramebuffer[Q]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[Q])}else{if(Array.isArray(B.__webglFramebuffer))for(let Q=0;Q<B.__webglFramebuffer.length;Q++)n.deleteFramebuffer(B.__webglFramebuffer[Q]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,j=M.length;Q<j;Q++){let Ee=i.get(M[Q]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),a.memory.textures--),i.remove(M[Q])}i.remove(M),i.remove(w)}let G=0;function X(){G=0}function L(){let w=G;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),G+=1,w}function O(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function z(w,M){let B=i.get(w);if(w.isVideoTexture&&Ae(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){let ae=w.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,w,M);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function K(w,M){let B=i.get(w);if(w.version>0&&B.__version!==w.version){xe(B,w,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function J(w,M){let B=i.get(w);if(w.version>0&&B.__version!==w.version){xe(B,w,M);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function Y(w,M){let B=i.get(w);if(w.version>0&&B.__version!==w.version){Te(B,w,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}let ne={[Nl]:n.REPEAT,[an]:n.CLAMP_TO_EDGE,[Ol]:n.MIRRORED_REPEAT},re={[Jt]:n.NEAREST,[Eh]:n.NEAREST_MIPMAP_NEAREST,[Jo]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[gp]:n.LINEAR_MIPMAP_NEAREST,[hr]:n.LINEAR_MIPMAP_LINEAR},ye={[Rp]:n.NEVER,[Up]:n.ALWAYS,[Cp]:n.LESS,[df]:n.LEQUAL,[Pp]:n.EQUAL,[Dp]:n.GEQUAL,[Lp]:n.GREATER,[Ip]:n.NOTEQUAL};function q(w,M,B){if(B?(n.texParameteri(w,n.TEXTURE_WRAP_S,ne[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ne[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ne[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,re[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,re[M.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==an||M.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,v(M.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,v(M.minFilter)),M.minFilter!==Jt&&M.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ae=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Jt||M.minFilter!==Jo&&M.minFilter!==hr||M.type===pi&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===ur&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(w,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ie(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));let ae=M.source,Q=f.get(ae);Q===void 0&&(Q={},f.set(ae,Q));let j=O(M);if(j!==w.__cacheKey){Q[j]===void 0&&(Q[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[j].usedTimes++;let Ee=Q[w.__cacheKey];Ee!==void 0&&(Q[w.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(M)),w.__cacheKey=j,w.__webglTexture=Q[j].texture}return B}function xe(w,M,B){let ae=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=n.TEXTURE_3D);let Q=ie(w,M),j=M.source;t.bindTexture(ae,w.__webglTexture,n.TEXTURE0+B);let Ee=i.get(j);if(j.version!==Ee.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);let _e=at.getPrimaries(at.workingColorSpace),Me=M.colorSpace===mn?null:at.getPrimaries(M.colorSpace),Ie=M.colorSpace===mn||_e===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let He=d(M)&&m(M.image)===!1,ee=_(M.image,He,!1,s.maxTextureSize);ee=ve(M,ee);let Ye=m(ee)||o,P=r.convert(M.format,M.colorSpace),te=r.convert(M.type),me=S(M.internalFormat,P,te,M.colorSpace,M.isVideoTexture);q(ae,M,Ye);let le,Re=M.mipmaps,$e=o&&M.isVideoTexture!==!0&&me!==hf,Ke=Ee.__version===void 0||Q===!0,Xe=A(M,ee,Ye);if(M.isDepthTexture)me=n.DEPTH_COMPONENT,o?M.type===pi?me=n.DEPTH_COMPONENT32F:M.type===di?me=n.DEPTH_COMPONENT24:M.type===ki?me=n.DEPTH24_STENCIL8:me=n.DEPTH_COMPONENT16:M.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Bi&&me===n.DEPTH_COMPONENT&&M.type!==Ac&&M.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=di,te=r.convert(M.type)),M.format===Ps&&me===n.DEPTH_COMPONENT&&(me=n.DEPTH_STENCIL,M.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ki,te=r.convert(M.type))),Ke&&($e?t.texStorage2D(n.TEXTURE_2D,1,me,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,me,ee.width,ee.height,0,P,te,null));else if(M.isDataTexture)if(Re.length>0&&Ye){$e&&Ke&&t.texStorage2D(n.TEXTURE_2D,Xe,me,Re[0].width,Re[0].height);for(let de=0,D=Re.length;de<D;de++)le=Re[de],$e?t.texSubImage2D(n.TEXTURE_2D,de,0,0,le.width,le.height,P,te,le.data):t.texImage2D(n.TEXTURE_2D,de,me,le.width,le.height,0,P,te,le.data);M.generateMipmaps=!1}else $e?(Ke&&t.texStorage2D(n.TEXTURE_2D,Xe,me,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,P,te,ee.data)):t.texImage2D(n.TEXTURE_2D,0,me,ee.width,ee.height,0,P,te,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,me,Re[0].width,Re[0].height,ee.depth);for(let de=0,D=Re.length;de<D;de++)le=Re[de],M.format!==Pn?P!==null?$e?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,le.width,le.height,ee.depth,P,le.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,me,le.width,le.height,ee.depth,0,le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,le.width,le.height,ee.depth,P,te,le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,me,le.width,le.height,ee.depth,0,P,te,le.data)}else{$e&&Ke&&t.texStorage2D(n.TEXTURE_2D,Xe,me,Re[0].width,Re[0].height);for(let de=0,D=Re.length;de<D;de++)le=Re[de],M.format!==Pn?P!==null?$e?t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,le.width,le.height,P,le.data):t.compressedTexImage2D(n.TEXTURE_2D,de,me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(n.TEXTURE_2D,de,0,0,le.width,le.height,P,te,le.data):t.texImage2D(n.TEXTURE_2D,de,me,le.width,le.height,0,P,te,le.data)}else if(M.isDataArrayTexture)$e?(Ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,me,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,P,te,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,me,ee.width,ee.height,ee.depth,0,P,te,ee.data);else if(M.isData3DTexture)$e?(Ke&&t.texStorage3D(n.TEXTURE_3D,Xe,me,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,P,te,ee.data)):t.texImage3D(n.TEXTURE_3D,0,me,ee.width,ee.height,ee.depth,0,P,te,ee.data);else if(M.isFramebufferTexture){if(Ke)if($e)t.texStorage2D(n.TEXTURE_2D,Xe,me,ee.width,ee.height);else{let de=ee.width,D=ee.height;for(let he=0;he<Xe;he++)t.texImage2D(n.TEXTURE_2D,he,me,de,D,0,P,te,null),de>>=1,D>>=1}}else if(Re.length>0&&Ye){$e&&Ke&&t.texStorage2D(n.TEXTURE_2D,Xe,me,Re[0].width,Re[0].height);for(let de=0,D=Re.length;de<D;de++)le=Re[de],$e?t.texSubImage2D(n.TEXTURE_2D,de,0,0,P,te,le):t.texImage2D(n.TEXTURE_2D,de,me,P,te,le);M.generateMipmaps=!1}else $e?(Ke&&t.texStorage2D(n.TEXTURE_2D,Xe,me,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,P,te,ee)):t.texImage2D(n.TEXTURE_2D,0,me,P,te,ee);x(M,Ye)&&y(ae),Ee.__version=j.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Te(w,M,B){if(M.image.length!==6)return;let ae=ie(w,M),Q=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+B);let j=i.get(Q);if(Q.version!==j.__version||ae===!0){t.activeTexture(n.TEXTURE0+B);let Ee=at.getPrimaries(at.workingColorSpace),_e=M.colorSpace===mn?null:at.getPrimaries(M.colorSpace),Me=M.colorSpace===mn||Ee===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,He=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let de=0;de<6;de++)!Ie&&!He?ee[de]=_(M.image[de],!1,!0,s.maxCubemapSize):ee[de]=He?M.image[de].image:M.image[de],ee[de]=ve(M,ee[de]);let Ye=ee[0],P=m(Ye)||o,te=r.convert(M.format,M.colorSpace),me=r.convert(M.type),le=S(M.internalFormat,te,me,M.colorSpace),Re=o&&M.isVideoTexture!==!0,$e=j.__version===void 0||ae===!0,Ke=A(M,Ye,P);q(n.TEXTURE_CUBE_MAP,M,P);let Xe;if(Ie){Re&&$e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ke,le,Ye.width,Ye.height);for(let de=0;de<6;de++){Xe=ee[de].mipmaps;for(let D=0;D<Xe.length;D++){let he=Xe[D];M.format!==Pn?te!==null?Re?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,D,0,0,he.width,he.height,te,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,D,le,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,D,0,0,he.width,he.height,te,me,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,D,le,he.width,he.height,0,te,me,he.data)}}}else{Xe=M.mipmaps,Re&&$e&&(Xe.length>0&&Ke++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ke,le,ee[0].width,ee[0].height));for(let de=0;de<6;de++)if(He){Re?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ee[de].width,ee[de].height,te,me,ee[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,le,ee[de].width,ee[de].height,0,te,me,ee[de].data);for(let D=0;D<Xe.length;D++){let ue=Xe[D].image[de].image;Re?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,D+1,0,0,ue.width,ue.height,te,me,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,D+1,le,ue.width,ue.height,0,te,me,ue.data)}}else{Re?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,te,me,ee[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,le,te,me,ee[de]);for(let D=0;D<Xe.length;D++){let he=Xe[D];Re?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,D+1,0,0,te,me,he.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,D+1,le,te,me,he.image[de])}}}x(M,P)&&y(n.TEXTURE_CUBE_MAP),j.__version=Q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Se(w,M,B,ae,Q,j){let Ee=r.convert(B.format,B.colorSpace),_e=r.convert(B.type),Me=S(B.internalFormat,Ee,_e,B.colorSpace);if(!i.get(M).__hasExternalTextures){let He=Math.max(1,M.width>>j),ee=Math.max(1,M.height>>j);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,Me,He,ee,M.depth,0,Ee,_e,null):t.texImage2D(Q,j,Me,He,ee,0,Ee,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),Z(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,Q,i.get(B).__webglTexture,0,oe(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,Q,i.get(B).__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(w,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let ae=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||Z(M)){let Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===pi?ae=n.DEPTH_COMPONENT32F:Q.type===di&&(ae=n.DEPTH_COMPONENT24));let j=oe(M);Z(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,ae,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,j,ae,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){let ae=oe(M);B&&Z(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,M.width,M.height):Z(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{let ae=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<ae.length;Q++){let j=ae[Q],Ee=r.convert(j.format,j.colorSpace),_e=r.convert(j.type),Me=S(j.internalFormat,Ee,_e,j.colorSpace),Ie=oe(M);B&&Z(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Me,M.width,M.height):Z(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,Me,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Me,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);let ae=i.get(M.depthTexture).__webglTexture,Q=oe(M);if(M.depthTexture.format===Bi)Z(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(M.depthTexture.format===Ps)Z(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function we(w){let M=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Fe(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]=n.createRenderbuffer(),Ue(M.__webglDepthbuffer[ae],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Ue(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(w,M,B){let ae=i.get(w);M!==void 0&&Se(ae.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&we(w)}function I(w){let M=w.texture,B=i.get(w),ae=i.get(M);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=M.version,a.memory.textures++);let Q=w.isWebGLCubeRenderTarget===!0,j=w.isWebGLMultipleRenderTargets===!0,Ee=m(w)||o;if(Q){B.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[_e]=[];for(let Me=0;Me<M.mipmaps.length;Me++)B.__webglFramebuffer[_e][Me]=n.createFramebuffer()}else B.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)B.__webglFramebuffer[_e]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(j)if(s.drawBuffers){let _e=w.texture;for(let Me=0,Ie=_e.length;Me<Ie;Me++){let He=i.get(_e[Me]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Z(w)===!1){let _e=j?M:[M];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Me=0;Me<_e.length;Me++){let Ie=_e[Me];B.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Me]);let He=r.convert(Ie.format,Ie.colorSpace),ee=r.convert(Ie.type),Ye=S(Ie.internalFormat,He,ee,Ie.colorSpace,w.isXRRenderTarget===!0),P=oe(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,P,Ye,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,B.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),q(n.TEXTURE_CUBE_MAP,M,Ee);for(let _e=0;_e<6;_e++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)Se(B.__webglFramebuffer[_e][Me],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Me);else Se(B.__webglFramebuffer[_e],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);x(M,Ee)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){let _e=w.texture;for(let Me=0,Ie=_e.length;Me<Ie;Me++){let He=_e[Me],ee=i.get(He);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),q(n.TEXTURE_2D,He,Ee),Se(B.__webglFramebuffer,w,He,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,0),x(He,Ee)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?_e=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,ae.__webglTexture),q(_e,M,Ee),o&&M.mipmaps&&M.mipmaps.length>0)for(let Me=0;Me<M.mipmaps.length;Me++)Se(B.__webglFramebuffer[Me],w,M,n.COLOR_ATTACHMENT0,_e,Me);else Se(B.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,_e,0);x(M,Ee)&&y(_e),t.unbindTexture()}w.depthBuffer&&we(w)}function ce(w){let M=m(w)||o,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ae=0,Q=B.length;ae<Q;ae++){let j=B[ae];if(x(j,M)){let Ee=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(j).__webglTexture;t.bindTexture(Ee,_e),y(Ee),t.unbindTexture()}}}function $(w){if(o&&w.samples>0&&Z(w)===!1){let M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,ae=w.height,Q=n.COLOR_BUFFER_BIT,j=[],Ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(w),Me=w.isWebGLMultipleRenderTargets===!0;if(Me)for(let Ie=0;Ie<M.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ie=0;Ie<M.length;Ie++){j.push(n.COLOR_ATTACHMENT0+Ie),w.depthBuffer&&j.push(Ee);let He=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(He===!1&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),Me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]),He===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ee]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ee])),Me){let ee=i.get(M[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,B,ae,0,0,B,ae,Q,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Ie=0;Ie<M.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]);let He=i.get(M[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function oe(w){return Math.min(s.maxSamples,w.samples)}function Z(w){let M=i.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(w){let M=a.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function ve(w,M){let B=w.colorSpace,ae=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Fl||B!==Qn&&B!==mn&&(at.getTransfer(B)===ft?o===!1?e.has("EXT_sRGB")===!0&&ae===Pn?(w.format=Fl,w.minFilter=pn,w.generateMipmaps=!1):M=Ba.sRGBToLinear(M):(ae!==Pn||Q!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=L,this.resetTextureUnits=X,this.setTexture2D=z,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=ke,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Z}function Fy(n,e,t){let i=t.isWebGL2;function s(r,a=mn){let o,l=at.getTransfer(a);if(r===yi)return n.UNSIGNED_BYTE;if(r===rf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===af)return n.UNSIGNED_SHORT_5_5_5_1;if(r===_p)return n.BYTE;if(r===yp)return n.SHORT;if(r===Ac)return n.UNSIGNED_SHORT;if(r===sf)return n.INT;if(r===di)return n.UNSIGNED_INT;if(r===pi)return n.FLOAT;if(r===ur)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===xp)return n.ALPHA;if(r===Pn)return n.RGBA;if(r===vp)return n.LUMINANCE;if(r===Mp)return n.LUMINANCE_ALPHA;if(r===Bi)return n.DEPTH_COMPONENT;if(r===Ps)return n.DEPTH_STENCIL;if(r===Fl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===bp)return n.RED;if(r===of)return n.RED_INTEGER;if(r===Sp)return n.RG;if(r===lf)return n.RG_INTEGER;if(r===cf)return n.RGBA_INTEGER;if(r===Ko||r===jo||r===Qo||r===el)if(l===ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ko)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===el)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===el)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wh||r===Th||r===Ah||r===Rh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===wh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Th)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ah)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ch||r===Ph)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Ch)return l===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ph)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Lh||r===Ih||r===Dh||r===Uh||r===Nh||r===Oh||r===Fh||r===kh||r===Bh||r===zh||r===Hh||r===Vh||r===Gh||r===Wh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Lh)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ih)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Dh)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Uh)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nh)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Oh)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fh)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kh)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bh)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zh)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hh)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vh)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gh)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Wh)return l===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tl||r===Xh||r===qh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===tl)return l===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Xh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ep||r===Yh||r===$h||r===Zh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===tl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Yh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$h)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ki?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Kl=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Kt=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ky={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ky)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},jl=class extends zn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,_=t.getContextAttributes(),m=null,d=null,x=[],y=[],S=new se,A=null,v=new Vt;v.layers.enable(1),v.viewport=new mt;let R=new Vt;R.layers.enable(2),R.viewport=new mt;let U=[v,R],b=new Kl;b.layers.enable(1),b.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=x[q];return ie===void 0&&(ie=new ar,x[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=x[q];return ie===void 0&&(ie=new ar,x[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=x[q];return ie===void 0&&(ie=new ar,x[q]=ie),ie.getHandSpace()};function G(q){let ie=y.indexOf(q.inputSource);if(ie===-1)return;let xe=x[ie];xe!==void 0&&(xe.update(q.inputSource,q.frame,c||a),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",L);for(let q=0;q<x.length;q++){let ie=y[q];ie!==null&&(y[q]=null,x[q].disconnect(ie))}E=null,N=null,e.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ie={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new ei(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ie=null,xe=null,Te=null;_.depth&&(Te=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=_.stencil?Ps:Bi,xe=_.stencil?ki:di);let Se={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Se),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new ei(f.textureWidth,f.textureHeight,{format:Pn,type:yi,depthTexture:new Za(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ue=e.properties.get(d);Ue.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(q){for(let ie=0;ie<q.removed.length;ie++){let xe=q.removed[ie],Te=y.indexOf(xe);Te>=0&&(y[Te]=null,x[Te].disconnect(xe))}for(let ie=0;ie<q.added.length;ie++){let xe=q.added[ie],Te=y.indexOf(xe);if(Te===-1){for(let Ue=0;Ue<x.length;Ue++)if(Ue>=y.length){y.push(xe),Te=Ue;break}else if(y[Ue]===null){y[Ue]=xe,Te=Ue;break}if(Te===-1)break}let Se=x[Te];Se&&Se.connect(xe)}}let O=new C,z=new C;function K(q,ie,xe){O.setFromMatrixPosition(ie.matrixWorld),z.setFromMatrixPosition(xe.matrixWorld);let Te=O.distanceTo(z),Se=ie.projectionMatrix.elements,Ue=xe.projectionMatrix.elements,Fe=Se[14]/(Se[10]-1),we=Se[14]/(Se[10]+1),ke=(Se[9]+1)/Se[5],I=(Se[9]-1)/Se[5],ce=(Se[8]-1)/Se[0],$=(Ue[8]+1)/Ue[0],oe=Fe*ce,Z=Fe*$,Ae=Te/(-ce+$),ve=Ae*-ce;ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ve),q.translateZ(Ae),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let w=Fe+Ae,M=we+Ae,B=oe-ve,ae=Z+(Te-ve),Q=ke*we/M*w,j=I*we/M*w;q.projectionMatrix.makePerspective(B,ae,Q,j,w,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function J(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;b.near=R.near=v.near=q.near,b.far=R.far=v.far=q.far,(E!==b.near||N!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,N=b.far);let ie=q.parent,xe=b.cameras;J(b,ie);for(let Te=0;Te<xe.length;Te++)J(xe[Te],ie);xe.length===2?K(b,v,R):b.projectionMatrix.copy(v.projectionMatrix),Y(q,b,ie)};function Y(q,ie,xe){xe===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=fr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let ne=null;function re(q,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){let xe=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Te=!1;xe.length!==b.cameras.length&&(b.cameras.length=0,Te=!0);for(let Se=0;Se<xe.length;Se++){let Ue=xe[Se],Fe=null;if(p!==null)Fe=p.getViewport(Ue);else{let ke=u.getViewSubImage(f,Ue);Fe=ke.viewport,Se===0&&(e.setRenderTargetTextures(d,ke.colorTexture,f.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(d))}let we=U[Se];we===void 0&&(we=new Vt,we.layers.enable(Se),we.viewport=new mt,U[Se]=we),we.matrix.fromArray(Ue.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ue.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),Se===0&&(b.matrix.copy(we.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Te===!0&&b.cameras.push(we)}}for(let xe=0;xe<x.length;xe++){let Te=y[xe],Se=x[xe];Te!==null&&Se!==void 0&&Se.update(Te,ie,c||a)}ne&&ne(q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}let ye=new _f;ye.setAnimationLoop(re),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}};function By(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,gf(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,x,y,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,x,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Gt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Gt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let x=e.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Gt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zy(n,e,t,i){let s={},r={},a=[],o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,y){let S=y.program;i.uniformBlockBinding(x,S)}function c(x,y){let S=s[x.id];S===void 0&&(g(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",m));let A=y.program;i.updateUBOMapping(x,A);let v=e.render.frame;r[x.id]!==v&&(f(x),r[x.id]=v)}function h(x){let y=u();x.__bindingPointIndex=y;let S=n.createBuffer(),A=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let y=s[x.id],S=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let v=0,R=S.length;v<R;v++){let U=Array.isArray(S[v])?S[v]:[S[v]];for(let b=0,E=U.length;b<E;b++){let N=U[b];if(p(N,v,b,A)===!0){let G=N.__offset,X=Array.isArray(N.value)?N.value:[N.value],L=0;for(let O=0;O<X.length;O++){let z=X[O],K=_(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,G+L,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,y,S,A){let v=x.value,R=y+"_"+S;if(A[R]===void 0)return typeof v=="number"||typeof v=="boolean"?A[R]=v:A[R]=v.clone(),!0;{let U=A[R];if(typeof v=="number"||typeof v=="boolean"){if(U!==v)return A[R]=v,!0}else if(U.equals(v)===!1)return U.copy(v),!0}return!1}function g(x){let y=x.uniforms,S=0,A=16;for(let R=0,U=y.length;R<U;R++){let b=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,N=b.length;E<N;E++){let G=b[E],X=Array.isArray(G.value)?G.value:[G.value];for(let L=0,O=X.length;L<O;L++){let z=X[L],K=_(z),J=S%A;J!==0&&A-J<K.boundary&&(S+=A-J),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=K.storage}}}let v=S%A;return v>0&&(S+=A-v),x.__size=S,x.__cache={},this}function _(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){let y=x.target;y.removeEventListener("dispose",m);let S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var mr=class{constructor(e={}){let{canvas:t=Zp(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,d=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=_i,this.toneMappingExposure=1;let y=this,S=!1,A=0,v=0,R=null,U=-1,b=null,E=new mt,N=new mt,G=null,X=new Ne(0),L=0,O=t.width,z=t.height,K=1,J=null,Y=null,ne=new mt(0,0,O,z),re=new mt(0,0,O,z),ye=!1,q=new pr,ie=!1,xe=!1,Te=null,Se=new ot,Ue=new se,Fe=new C,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return R===null?K:1}let I=i;function ce(T,F){for(let V=0;V<T.length;V++){let W=T[V],H=t.getContext(W,F);if(H!==null)return H}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",he,!1),I===null){let F=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&F.shift(),I=ce(F,T),I===null)throw ce(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,oe,Z,Ae,ve,w,M,B,ae,Q,j,Ee,_e,Me,Ie,He,ee,Ye,P,te,me,le,Re,$e;function Ke(){$=new r_(I),oe=new Qg(I,$,e),$.init(oe),le=new Fy(I,$,oe),Z=new Ny(I,$,oe),Ae=new l_(I),ve=new Sy,w=new Oy(I,$,Z,ve,oe,le,Ae),M=new t_(y),B=new s_(y),ae=new gm(I,oe),Re=new Kg(I,$,ae,oe),Q=new a_(I,ae,Ae,Re),j=new f_(I,Q,ae,Ae),P=new u_(I,oe,w),He=new e_(ve),Ee=new by(y,M,B,$,oe,Re,He),_e=new By(y,ve),Me=new wy,Ie=new Ly($,oe),Ye=new Jg(y,M,B,Z,j,f,l),ee=new Uy(y,j,oe),$e=new zy(I,Ae,oe,Z),te=new jg(I,$,Ae,oe),me=new o_(I,$,Ae,oe),Ae.programs=Ee.programs,y.capabilities=oe,y.extensions=$,y.properties=ve,y.renderLists=Me,y.shadowMap=ee,y.state=Z,y.info=Ae}Ke();let Xe=new jl(y,I);this.xr=Xe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(O,z,!1))},this.getSize=function(T){return T.set(O,z)},this.setSize=function(T,F,V=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,z=F,t.width=Math.floor(T*K),t.height=Math.floor(F*K),V===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(O*K,z*K).floor()},this.setDrawingBufferSize=function(T,F,V){O=T,z=F,K=V,t.width=Math.floor(T*V),t.height=Math.floor(F*V),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(ne)},this.setViewport=function(T,F,V,W){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,F,V,W),Z.viewport(E.copy(ne).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,F,V,W){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,F,V,W),Z.scissor(N.copy(re).multiplyScalar(K).floor())},this.getScissorTest=function(){return ye},this.setScissorTest=function(T){Z.setScissorTest(ye=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(T=!0,F=!0,V=!0){let W=0;if(T){let H=!1;if(R!==null){let be=R.texture.format;H=be===cf||be===lf||be===of}if(H){let be=R.texture.type,Pe=be===yi||be===di||be===Ac||be===ki||be===rf||be===af,Oe=Ye.getClearColor(),Be=Ye.getClearAlpha(),qe=Oe.r,Ve=Oe.g,Ge=Oe.b;Pe?(p[0]=qe,p[1]=Ve,p[2]=Ge,p[3]=Be,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=qe,g[1]=Ve,g[2]=Ge,g[3]=Be,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}F&&(W|=I.DEPTH_BUFFER_BIT),V&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Me.dispose(),Ie.dispose(),ve.dispose(),M.dispose(),B.dispose(),j.dispose(),Re.dispose(),$e.dispose(),Ee.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",qt),Xe.removeEventListener("sessionend",ht),Te&&(Te.dispose(),Te=null),Yt.stop()};function de(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let T=Ae.autoReset,F=ee.enabled,V=ee.autoUpdate,W=ee.needsUpdate,H=ee.type;Ke(),Ae.autoReset=T,ee.enabled=F,ee.autoUpdate=V,ee.needsUpdate=W,ee.type=H}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){let F=T.target;F.removeEventListener("dispose",ue),De(F)}function De(T){Ce(T),ve.remove(T)}function Ce(T){let F=ve.get(T).programs;F!==void 0&&(F.forEach(function(V){Ee.releaseProgram(V)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,V,W,H,be){F===null&&(F=we);let Pe=H.isMesh&&H.matrixWorld.determinant()<0,Oe=Dd(T,F,V,W,H);Z.setMaterial(W,Pe);let Be=V.index,qe=1;if(W.wireframe===!0){if(Be=Q.getWireframeAttribute(V),Be===void 0)return;qe=2}let Ve=V.drawRange,Ge=V.attributes.position,bt=Ve.start*qe,nn=(Ve.start+Ve.count)*qe;be!==null&&(bt=Math.max(bt,be.start*qe),nn=Math.min(nn,(be.start+be.count)*qe)),Be!==null?(bt=Math.max(bt,0),nn=Math.min(nn,Be.count)):Ge!=null&&(bt=Math.max(bt,0),nn=Math.min(nn,Ge.count));let It=nn-bt;if(It<0||It===1/0)return;Re.setup(H,W,Oe,V,Be);let Xn,_t=te;if(Be!==null&&(Xn=ae.get(Be),_t=me,_t.setIndex(Xn)),H.isMesh)W.wireframe===!0?(Z.setLineWidth(W.wireframeLinewidth*ke()),_t.setMode(I.LINES)):_t.setMode(I.TRIANGLES);else if(H.isLine){let Ze=W.linewidth;Ze===void 0&&(Ze=1),Z.setLineWidth(Ze*ke()),H.isLineSegments?_t.setMode(I.LINES):H.isLineLoop?_t.setMode(I.LINE_LOOP):_t.setMode(I.LINE_STRIP)}else H.isPoints?_t.setMode(I.POINTS):H.isSprite&&_t.setMode(I.TRIANGLES);if(H.isBatchedMesh)_t.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)_t.renderInstances(bt,It,H.count);else if(V.isInstancedBufferGeometry){let Ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,qo=Math.min(V.instanceCount,Ze);_t.renderInstances(bt,It,qo)}else _t.render(bt,It)};function tt(T,F,V){T.transparent===!0&&T.side===Cn&&T.forceSinglePass===!1?(T.side=Gt,T.needsUpdate=!0,Qr(T,F,V),T.side=xi,T.needsUpdate=!0,Qr(T,F,V),T.side=Cn):Qr(T,F,V)}this.compile=function(T,F,V=null){V===null&&(V=T),m=Ie.get(V),m.init(),x.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==V&&T.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(y._useLegacyLights);let W=new Set;return T.traverse(function(H){let be=H.material;if(be)if(Array.isArray(be))for(let Pe=0;Pe<be.length;Pe++){let Oe=be[Pe];tt(Oe,V,H),W.add(Oe)}else tt(be,V,H),W.add(be)}),x.pop(),m=null,W},this.compileAsync=function(T,F,V=null){let W=this.compile(T,F,V);return new Promise(H=>{function be(){if(W.forEach(function(Pe){ve.get(Pe).currentProgram.isReady()&&W.delete(Pe)}),W.size===0){H(T);return}setTimeout(be,10)}$.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let st=null;function Lt(T){st&&st(T)}function qt(){Yt.stop()}function ht(){Yt.start()}let Yt=new _f;Yt.setAnimationLoop(Lt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(T){st=T,Xe.setAnimationLoop(T),T===null?Yt.stop():Yt.start()},Xe.addEventListener("sessionstart",qt),Xe.addEventListener("sessionend",ht),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(F),F=Xe.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,F,R),m=Ie.get(T,x.length),m.init(),x.push(m),Se.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Se),xe=this.localClippingEnabled,ie=He.init(this.clippingPlanes,xe),_=Me.get(T,d.length),_.init(),d.push(_),kn(T,F,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(J,Y),this.info.render.frame++,ie===!0&&He.beginShadows();let V=m.state.shadowsArray;if(ee.render(V,T,F),ie===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(_,T),m.setupLights(y._useLegacyLights),F.isArrayCamera){let W=F.cameras;for(let H=0,be=W.length;H<be;H++){let Pe=W[H];dh(_,T,Pe,Pe.viewport)}}else dh(_,T,F);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,F),Re.resetDefaultState(),U=-1,b=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function kn(T,F,V,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){W&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Se);let Pe=j.update(T),Oe=T.material;Oe.visible&&_.push(T,Pe,Oe,V,Fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){let Pe=j.update(T),Oe=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Fe.copy(Pe.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(Se)),Array.isArray(Oe)){let Be=Pe.groups;for(let qe=0,Ve=Be.length;qe<Ve;qe++){let Ge=Be[qe],bt=Oe[Ge.materialIndex];bt&&bt.visible&&_.push(T,Pe,bt,V,Fe.z,Ge)}}else Oe.visible&&_.push(T,Pe,Oe,V,Fe.z,null)}}let be=T.children;for(let Pe=0,Oe=be.length;Pe<Oe;Pe++)kn(be[Pe],F,V,W)}function dh(T,F,V,W){let H=T.opaque,be=T.transmissive,Pe=T.transparent;m.setupLightsView(V),ie===!0&&He.setGlobalState(y.clippingPlanes,V),be.length>0&&Id(H,be,F,V),W&&Z.viewport(E.copy(W)),H.length>0&&jr(H,F,V),be.length>0&&jr(be,F,V),Pe.length>0&&jr(Pe,F,V),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Id(T,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let be=oe.isWebGL2;Te===null&&(Te=new ei(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?ur:yi,minFilter:hr,samples:be?4:0})),y.getDrawingBufferSize(Ue),be?Te.setSize(Ue.x,Ue.y):Te.setSize(Fa(Ue.x),Fa(Ue.y));let Pe=y.getRenderTarget();y.setRenderTarget(Te),y.getClearColor(X),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let Oe=y.toneMapping;y.toneMapping=_i,jr(T,V,W),w.updateMultisampleRenderTarget(Te),w.updateRenderTargetMipmap(Te);let Be=!1;for(let qe=0,Ve=F.length;qe<Ve;qe++){let Ge=F[qe],bt=Ge.object,nn=Ge.geometry,It=Ge.material,Xn=Ge.group;if(It.side===Cn&&bt.layers.test(W.layers)){let _t=It.side;It.side=Gt,It.needsUpdate=!0,ph(bt,V,W,nn,It,Xn),It.side=_t,It.needsUpdate=!0,Be=!0}}Be===!0&&(w.updateMultisampleRenderTarget(Te),w.updateRenderTargetMipmap(Te)),y.setRenderTarget(Pe),y.setClearColor(X,L),y.toneMapping=Oe}function jr(T,F,V){let W=F.isScene===!0?F.overrideMaterial:null;for(let H=0,be=T.length;H<be;H++){let Pe=T[H],Oe=Pe.object,Be=Pe.geometry,qe=W===null?Pe.material:W,Ve=Pe.group;Oe.layers.test(V.layers)&&ph(Oe,F,V,Be,qe,Ve)}}function ph(T,F,V,W,H,be){T.onBeforeRender(y,F,V,W,H,be),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(y,F,V,W,T,be),H.transparent===!0&&H.side===Cn&&H.forceSinglePass===!1?(H.side=Gt,H.needsUpdate=!0,y.renderBufferDirect(V,F,W,H,T,be),H.side=xi,H.needsUpdate=!0,y.renderBufferDirect(V,F,W,H,T,be),H.side=Cn):y.renderBufferDirect(V,F,W,H,T,be),T.onAfterRender(y,F,V,W,H,be)}function Qr(T,F,V){F.isScene!==!0&&(F=we);let W=ve.get(T),H=m.state.lights,be=m.state.shadowsArray,Pe=H.state.version,Oe=Ee.getParameters(T,H.state,be,F,V),Be=Ee.getProgramCacheKey(Oe),qe=W.programs;W.environment=T.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(T.isMeshStandardMaterial?B:M).get(T.envMap||W.environment),qe===void 0&&(T.addEventListener("dispose",ue),qe=new Map,W.programs=qe);let Ve=qe.get(Be);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===Pe)return gh(T,Oe),Ve}else Oe.uniforms=Ee.getUniforms(T),T.onBuild(V,Oe,y),T.onBeforeCompile(Oe,y),Ve=Ee.acquireProgram(Oe,Be),qe.set(Be,Ve),W.uniforms=Oe.uniforms;let Ge=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=He.uniform),gh(T,Oe),W.needsLights=Nd(T),W.lightsStateVersion=Pe,W.needsLights&&(Ge.ambientLightColor.value=H.state.ambient,Ge.lightProbe.value=H.state.probe,Ge.directionalLights.value=H.state.directional,Ge.directionalLightShadows.value=H.state.directionalShadow,Ge.spotLights.value=H.state.spot,Ge.spotLightShadows.value=H.state.spotShadow,Ge.rectAreaLights.value=H.state.rectArea,Ge.ltc_1.value=H.state.rectAreaLTC1,Ge.ltc_2.value=H.state.rectAreaLTC2,Ge.pointLights.value=H.state.point,Ge.pointLightShadows.value=H.state.pointShadow,Ge.hemisphereLights.value=H.state.hemi,Ge.directionalShadowMap.value=H.state.directionalShadowMap,Ge.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ge.spotShadowMap.value=H.state.spotShadowMap,Ge.spotLightMatrix.value=H.state.spotLightMatrix,Ge.spotLightMap.value=H.state.spotLightMap,Ge.pointShadowMap.value=H.state.pointShadowMap,Ge.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Ve,W.uniformsList=null,Ve}function mh(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=As.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function gh(T,F){let V=ve.get(T);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Dd(T,F,V,W,H){F.isScene!==!0&&(F=we),w.resetTextureUnits();let be=F.fog,Pe=W.isMeshStandardMaterial?F.environment:null,Oe=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Qn,Be=(W.isMeshStandardMaterial?B:M).get(W.envMap||Pe),qe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ve=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ge=!!V.morphAttributes.position,bt=!!V.morphAttributes.normal,nn=!!V.morphAttributes.color,It=_i;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(It=y.toneMapping);let Xn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=Xn!==void 0?Xn.length:0,Ze=ve.get(W),qo=m.state.lights;if(ie===!0&&(xe===!0||T!==b)){let fn=T===b&&W.id===U;He.setState(W,T,fn)}let vt=!1;W.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==qo.state.version||Ze.outputColorSpace!==Oe||H.isBatchedMesh&&Ze.batching===!1||!H.isBatchedMesh&&Ze.batching===!0||H.isInstancedMesh&&Ze.instancing===!1||!H.isInstancedMesh&&Ze.instancing===!0||H.isSkinnedMesh&&Ze.skinning===!1||!H.isSkinnedMesh&&Ze.skinning===!0||H.isInstancedMesh&&Ze.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ze.instancingColor===!1&&H.instanceColor!==null||Ze.envMap!==Be||W.fog===!0&&Ze.fog!==be||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==He.numPlanes||Ze.numIntersection!==He.numIntersection)||Ze.vertexAlphas!==qe||Ze.vertexTangents!==Ve||Ze.morphTargets!==Ge||Ze.morphNormals!==bt||Ze.morphColors!==nn||Ze.toneMapping!==It||oe.isWebGL2===!0&&Ze.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,Ze.__version=W.version);let Ci=Ze.currentProgram;vt===!0&&(Ci=Qr(W,F,H));let _h=!1,Zs=!1,Yo=!1,Bt=Ci.getUniforms(),Pi=Ze.uniforms;if(Z.useProgram(Ci.program)&&(_h=!0,Zs=!0,Yo=!0),W.id!==U&&(U=W.id,Zs=!0),_h||b!==T){Bt.setValue(I,"projectionMatrix",T.projectionMatrix),Bt.setValue(I,"viewMatrix",T.matrixWorldInverse);let fn=Bt.map.cameraPosition;fn!==void 0&&fn.setValue(I,Fe.setFromMatrixPosition(T.matrixWorld)),oe.logarithmicDepthBuffer&&Bt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Bt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Zs=!0,Yo=!0)}if(H.isSkinnedMesh){Bt.setOptional(I,H,"bindMatrix"),Bt.setOptional(I,H,"bindMatrixInverse");let fn=H.skeleton;fn&&(oe.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Bt.setValue(I,"boneTexture",fn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Bt.setOptional(I,H,"batchingTexture"),Bt.setValue(I,"batchingTexture",H._matricesTexture,w));let $o=V.morphAttributes;if(($o.position!==void 0||$o.normal!==void 0||$o.color!==void 0&&oe.isWebGL2===!0)&&P.update(H,V,Ci),(Zs||Ze.receiveShadow!==H.receiveShadow)&&(Ze.receiveShadow=H.receiveShadow,Bt.setValue(I,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Pi.envMap.value=Be,Pi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Zs&&(Bt.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&Ud(Pi,Yo),be&&W.fog===!0&&_e.refreshFogUniforms(Pi,be),_e.refreshMaterialUniforms(Pi,W,K,z,Te),As.upload(I,mh(Ze),Pi,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(As.upload(I,mh(Ze),Pi,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Bt.setValue(I,"center",H.center),Bt.setValue(I,"modelViewMatrix",H.modelViewMatrix),Bt.setValue(I,"normalMatrix",H.normalMatrix),Bt.setValue(I,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let fn=W.uniformsGroups;for(let Zo=0,Od=fn.length;Zo<Od;Zo++)if(oe.isWebGL2){let yh=fn[Zo];$e.update(yh,Ci),$e.bind(yh,Ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ci}function Ud(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Nd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,F,V){ve.get(T.texture).__webglTexture=F,ve.get(T.depthTexture).__webglTexture=V;let W=ve.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){let V=ve.get(T);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,V=0){R=T,A=F,v=V;let W=!0,H=null,be=!1,Pe=!1;if(T){let Be=ve.get(T);Be.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(I.FRAMEBUFFER,null),W=!1):Be.__webglFramebuffer===void 0?w.setupRenderTarget(T):Be.__hasExternalTextures&&w.rebindTextures(T,ve.get(T.texture).__webglTexture,ve.get(T.depthTexture).__webglTexture);let qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Pe=!0);let Ve=ve.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[F])?H=Ve[F][V]:H=Ve[F],be=!0):oe.isWebGL2&&T.samples>0&&w.useMultisampledRTT(T)===!1?H=ve.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[V]:H=Ve,E.copy(T.viewport),N.copy(T.scissor),G=T.scissorTest}else E.copy(ne).multiplyScalar(K).floor(),N.copy(re).multiplyScalar(K).floor(),G=ye;if(Z.bindFramebuffer(I.FRAMEBUFFER,H)&&oe.drawBuffers&&W&&Z.drawBuffers(T,H),Z.viewport(E),Z.scissor(N),Z.setScissorTest(G),be){let Be=ve.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Be.__webglTexture,V)}else if(Pe){let Be=ve.get(T.texture),qe=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Be.__webglTexture,V||0,qe)}U=-1},this.readRenderTargetPixels=function(T,F,V,W,H,be,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){Z.bindFramebuffer(I.FRAMEBUFFER,Oe);try{let Be=T.texture,qe=Be.format,Ve=Be.type;if(qe!==Pn&&le.convert(qe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ge=Ve===ur&&($.has("EXT_color_buffer_half_float")||oe.isWebGL2&&$.has("EXT_color_buffer_float"));if(Ve!==yi&&le.convert(Ve)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===pi&&(oe.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&V>=0&&V<=T.height-H&&I.readPixels(F,V,W,H,le.convert(qe),le.convert(Ve),be)}finally{let Be=R!==null?ve.get(R).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(T,F,V=0){let W=Math.pow(2,-V),H=Math.floor(F.image.width*W),be=Math.floor(F.image.height*W);w.setTexture2D(F,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,T.x,T.y,H,be),Z.unbindTexture()},this.copyTextureToTexture=function(T,F,V,W=0){let H=F.image.width,be=F.image.height,Pe=le.convert(V.format),Oe=le.convert(V.type);w.setTexture2D(V,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,W,T.x,T.y,H,be,Pe,Oe,F.image.data):F.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,W,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Pe,F.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,W,T.x,T.y,Pe,Oe,F.image),W===0&&V.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(T,F,V,W,H=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let be=T.max.x-T.min.x+1,Pe=T.max.y-T.min.y+1,Oe=T.max.z-T.min.z+1,Be=le.convert(W.format),qe=le.convert(W.type),Ve;if(W.isData3DTexture)w.setTexture3D(W,0),Ve=I.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)w.setTexture2DArray(W,0),Ve=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);let Ge=I.getParameter(I.UNPACK_ROW_LENGTH),bt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),nn=I.getParameter(I.UNPACK_SKIP_PIXELS),It=I.getParameter(I.UNPACK_SKIP_ROWS),Xn=I.getParameter(I.UNPACK_SKIP_IMAGES),_t=V.isCompressedTexture?V.mipmaps[H]:V.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,_t.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,T.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,T.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?I.texSubImage3D(Ve,H,F.x,F.y,F.z,be,Pe,Oe,Be,qe,_t.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ve,H,F.x,F.y,F.z,be,Pe,Oe,Be,_t.data)):I.texSubImage3D(Ve,H,F.x,F.y,F.z,be,Pe,Oe,Be,qe,_t),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ge),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,nn),I.pixelStorei(I.UNPACK_SKIP_ROWS,It),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xn),H===0&&W.generateMipmaps&&I.generateMipmap(Ve),Z.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),Z.unbindTexture()},this.resetState=function(){A=0,v=0,R=null,Z.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Rc?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===uo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?zi:uf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zi?dt:Qn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ql=class extends mr{};Ql.prototype.isWebGL1Renderer=!0;var Ja=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ka=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var ii=class extends ut{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vs=new ot,zu=new ot,ba=[],Hu=new ti,Hy=new ot,er=new ze,tr=new on,bi=class extends ze{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ii(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Hy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),Hu.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(Hu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),tr.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(i),e.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),zu.multiplyMatrices(i,vs),er.matrixWorld=zu,er.raycast(e,ba);for(let a=0,o=ba.length;a<o;a++){let l=ba[a];l.instanceId=r,l.object=this,t.push(l)}ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ii(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ja=class extends ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vu=new C,Gu=new C,Wu=new ot,wl=new vi,Sa=new on,gr=class extends Nt{constructor(e=new gt,t=new ja){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Vu.fromBufferAttribute(t,s-1),Gu.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Vu.distanceTo(Gu);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(s),Sa.radius+=r,e.ray.intersectsSphere(Sa)===!1)return;Wu.copy(s).invert(),wl.copy(e.ray).applyMatrix4(Wu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,h=new C,u=new C,f=new C,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let d=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let y=d,S=x-1;y<S;y+=p){let A=g.getX(y),v=g.getX(y+1);if(c.fromBufferAttribute(m,A),h.fromBufferAttribute(m,v),wl.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let y=d,S=x-1;y<S;y+=p){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),wl.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};var _r=class extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xu=new ot,ec=new vi,Ea=new on,wa=new C,Is=class extends Nt{constructor(e=new gt,t=new _r){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;Xu.copy(s).invert(),ec.copy(e.ray).applyMatrix4(Xu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){let m=c.getX(g);wa.fromBufferAttribute(u,m),qu(wa,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,_=p;g<_;g++)wa.fromBufferAttribute(u,g),qu(wa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function qu(n,e,t,i,s,r,a){let o=ec.distanceSqToPoint(n);if(o<t){let l=new C;ec.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var yn=class extends gn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new se:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new C,s=[],r=[],a=[],o=new C,l=new ot;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Tt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Tt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},yr=class extends xn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new se,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tc=class extends yr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Lc(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Ta=new C,Tl=new Lc,Al=new Lc,Rl=new Lc,nc=class extends xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ta.subVectors(s[0],s[1]).add(s[0]),c=Ta);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ta.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ta),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Tl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),Al.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),Rl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Al.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Rl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Tl.calc(l),Al.calc(l),Rl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yu(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Vy(n,e){let t=1-n;return t*t*e}function Gy(n,e){return 2*(1-n)*n*e}function Wy(n,e){return n*n*e}function or(n,e,t,i){return Vy(n,e)+Gy(n,t)+Wy(n,i)}function Xy(n,e){let t=1-n;return t*t*t*e}function qy(n,e){let t=1-n;return 3*t*t*n*e}function Yy(n,e){return 3*(1-n)*n*n*e}function $y(n,e){return n*n*n*e}function lr(n,e,t,i,s){return Xy(n,e)+qy(n,t)+Yy(n,i)+$y(n,s)}var Qa=class extends xn{constructor(e=new se,t=new se,i=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(lr(e,s.x,r.x,a.x,o.x),lr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ic=class extends xn{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(lr(e,s.x,r.x,a.x,o.x),lr(e,s.y,r.y,a.y,o.y),lr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},eo=class extends xn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sc=class extends xn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},to=class extends xn{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(or(e,s.x,r.x,a.x),or(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rc=class extends xn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(or(e,s.x,r.x,a.x),or(e,s.y,r.y,a.y),or(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Yu(o,l.x,c.x,h.x,u.x),Yu(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},ac=Object.freeze({__proto__:null,ArcCurve:tc,CatmullRomCurve3:nc,CubicBezierCurve:Qa,CubicBezierCurve3:ic,EllipseCurve:yr,LineCurve:eo,LineCurve3:sc,QuadraticBezierCurve:to,QuadraticBezierCurve3:rc,SplineCurve:no}),oc=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new ac[s.type]().fromJSON(s))}return this}},xr=class extends oc{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new eo(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new to(this.currentPoint.clone(),new se(e,t),new se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Qa(this.currentPoint.clone(),new se(e,t),new se(i,s),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new no(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new yr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},lc=class n extends gt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Tt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,f=new se,p=new C,g=new C,_=new C,m=0,d=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let x=0;x<=t;x++){let y=i+x*h*s,S=Math.sin(y),A=Math.cos(y);for(let v=0;v<=e.length-1;v++){u.x=e[v].x*S,u.y=e[v].y,u.z=e[v].x*A,a.push(u.x,u.y,u.z),f.x=x/t,f.y=v/(e.length-1),o.push(f.x,f.y);let R=l[3*v+0]*S,U=l[3*v+1],b=l[3*v+0]*A;c.push(R,U,b)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){let S=y+x*e.length,A=S,v=S+e.length,R=S+e.length+1,U=S+1;r.push(A,v,U),r.push(R,U,v)}this.setIndex(r),this.setAttribute("position",new et(a,3)),this.setAttribute("uv",new et(o,2)),this.setAttribute("normal",new et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},vr=class n extends lc{constructor(e=1,t=1,i=4,s=8){let r=new xr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}};var Ln=class n extends gt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,_=[],m=i/2,d=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(p,2));function x(){let S=new C,A=new C,v=0,R=(t-e)/i;for(let U=0;U<=r;U++){let b=[],E=U/r,N=E*(t-e)+e;for(let G=0;G<=s;G++){let X=G/s,L=X*l+o,O=Math.sin(L),z=Math.cos(L);A.x=N*O,A.y=-E*i+m,A.z=N*z,u.push(A.x,A.y,A.z),S.set(O,R,z).normalize(),f.push(S.x,S.y,S.z),p.push(X,1-E),b.push(g++)}_.push(b)}for(let U=0;U<s;U++)for(let b=0;b<r;b++){let E=_[b][U],N=_[b+1][U],G=_[b+1][U+1],X=_[b][U+1];h.push(E,N,X),h.push(N,G,X),v+=6}c.addGroup(d,v,0),d+=v}function y(S){let A=g,v=new se,R=new C,U=0,b=S===!0?e:t,E=S===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;let N=g;for(let G=0;G<=s;G++){let L=G/s*l+o,O=Math.cos(L),z=Math.sin(L);R.x=b*z,R.y=m*E,R.z=b*O,u.push(R.x,R.y,R.z),f.push(0,E,0),v.x=O*.5+.5,v.y=z*.5*E+.5,p.push(v.x,v.y),g++}for(let G=0;G<s;G++){let X=A+G,L=N+G;S===!0?h.push(L,L+1,X):h.push(L+1,L,X),U+=3}c.addGroup(d,U,S===!0?1:2),d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var cc=class n extends gt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let y=new C,S=new C,A=new C;for(let v=0;v<t.length;v+=3)p(t[v+0],y),p(t[v+1],S),p(t[v+2],A),l(y,S,A,x)}function l(x,y,S,A){let v=A+1,R=[];for(let U=0;U<=v;U++){R[U]=[];let b=x.clone().lerp(S,U/v),E=y.clone().lerp(S,U/v),N=v-U;for(let G=0;G<=N;G++)G===0&&U===v?R[U][G]=b:R[U][G]=b.clone().lerp(E,G/N)}for(let U=0;U<v;U++)for(let b=0;b<2*(v-U)-1;b++){let E=Math.floor(b/2);b%2===0?(f(R[U][E+1]),f(R[U+1][E]),f(R[U][E])):(f(R[U][E+1]),f(R[U+1][E+1]),f(R[U+1][E]))}}function c(x){let y=new C;for(let S=0;S<r.length;S+=3)y.x=r[S+0],y.y=r[S+1],y.z=r[S+2],y.normalize().multiplyScalar(x),r[S+0]=y.x,r[S+1]=y.y,r[S+2]=y.z}function h(){let x=new C;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let S=m(x)/2/Math.PI+.5,A=d(x)/Math.PI+.5;a.push(S,1-A)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){let y=a[x+0],S=a[x+2],A=a[x+4],v=Math.max(y,S,A),R=Math.min(y,S,A);v>.9&&R<.1&&(y<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function p(x,y){let S=x*3;y.x=e[S+0],y.y=e[S+1],y.z=e[S+2]}function g(){let x=new C,y=new C,S=new C,A=new C,v=new se,R=new se,U=new se;for(let b=0,E=0;b<r.length;b+=9,E+=6){x.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),S.set(r[b+6],r[b+7],r[b+8]),v.set(a[E+0],a[E+1]),R.set(a[E+2],a[E+3]),U.set(a[E+4],a[E+5]),A.copy(x).add(y).add(S).divideScalar(3);let N=m(A);_(v,E+0,x,N),_(R,E+2,y,N),_(U,E+4,S,N)}}function _(x,y,S,A){A<0&&x.x===1&&(a[y]=x.x-1),S.x===0&&S.z===0&&(a[y]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Mr=class extends xr{constructor(e){super(e),this.uuid=Yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new xr().fromJSON(s))}return this}},Zy={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Sf(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,p;if(i&&(r=ex(n,e,r,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],f=n[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return br(r,a,t,o,l,p,0),a}};function Sf(n,e,t,i,s){let r,a;if(s===ux(n,e,t,i)>0)for(r=e;r<t;r+=i)a=$u(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=$u(r,n[r],n[r+1],a);return a&&po(a,a.next)&&(Er(a),a=a.next),a}function Vi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(po(t,t.next)||yt(t.prev,t,t.next)===0)){if(Er(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function br(n,e,t,i,s,r,a){if(!n)return;!a&&r&&rx(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Ky(n,i,s,r):Jy(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Er(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=jy(Vi(n),e,t),br(n,e,t,i,s,r,2)):a===2&&Qy(n,e,t,i,s,r):br(Vi(n),e,t,i,s,r,1);break}}}function Jy(n){let e=n.prev,t=n,i=n.next;if(yt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&ws(s,o,r,l,a,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ky(n,e,t,i){let s=n.prev,r=n,a=n.next;if(yt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=hc(p,g,e,t,i),x=hc(_,m,e,t,i),y=n.prevZ,S=n.nextZ;for(;y&&y.z>=d&&S&&S.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ws(o,h,l,u,c,f,y.x,y.y)&&yt(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ws(o,h,l,u,c,f,S.x,S.y)&&yt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ws(o,h,l,u,c,f,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=x;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ws(o,h,l,u,c,f,S.x,S.y)&&yt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function jy(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!po(s,r)&&Ef(s,i,i.next,r)&&Sr(s,r)&&Sr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Er(i),Er(i.next),i=n=r),i=i.next}while(i!==n);return Vi(i)}function Qy(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&lx(a,o)){let l=wf(a,o);a=Vi(a,a.next),l=Vi(l,l.next),br(a,e,t,i,s,r,0),br(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function ex(n,e,t,i){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Sf(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(ox(c));for(s.sort(tx),r=0;r<s.length;r++)t=nx(s[r],t);return t}function tx(n,e){return n.x-e.x}function nx(n,e){let t=ix(n,e);if(!t)return e;let i=wf(t,n);return Vi(i,i.next),Vi(t,t.next)}function ix(n,e){let t=e,i=-1/0,s,r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ws(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Sr(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&sx(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function sx(n,e){return yt(n.prev,n,e.prev)<0&&yt(e.next,n,n.next)<0}function rx(n,e,t,i){let s=n;do s.z===0&&(s.z=hc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ax(s)}function ax(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function hc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ox(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ws(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function lx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!cx(n,e)&&(Sr(n,e)&&Sr(e,n)&&hx(n,e)&&(yt(n.prev,n,e.prev)||yt(n,e.prev,e))||po(n,e)&&yt(n.prev,n,n.next)>0&&yt(e.prev,e,e.next)>0)}function yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function po(n,e){return n.x===e.x&&n.y===e.y}function Ef(n,e,t,i){let s=Ra(yt(n,e,t)),r=Ra(yt(n,e,i)),a=Ra(yt(t,i,n)),o=Ra(yt(t,i,e));return!!(s!==r&&a!==o||s===0&&Aa(n,t,e)||r===0&&Aa(n,i,e)||a===0&&Aa(t,n,i)||o===0&&Aa(t,e,i))}function Aa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ra(n){return n>0?1:n<0?-1:0}function cx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ef(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Sr(n,e){return yt(n.prev,n,n.next)<0?yt(n,e,n.next)>=0&&yt(n,n.prev,e)>=0:yt(n,e,n.prev)<0||yt(n,n.next,e)<0}function hx(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function wf(n,e){let t=new uc(n.i,n.x,n.y),i=new uc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function $u(n,e,t,i){let s=new uc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Er(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function uc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ux(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var cr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Zu(e),Ju(i,e);let a=e.length;t.forEach(Zu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Ju(i,t[l]);let o=Zy.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Zu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ju(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var io=class n extends gt{constructor(e=new Mr([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:fx,y,S=!1,A,v,R,U;d&&(y=d.getSpacedPoints(h),S=!0,f=!1,A=d.computeFrenetFrames(h,!1),v=new C,R=new C,U=new C),f||(m=0,p=0,g=0,_=0);let b=o.extractPoints(c),E=b.shape,N=b.holes;if(!cr.isClockWise(E)){E=E.reverse();for(let I=0,ce=N.length;I<ce;I++){let $=N[I];cr.isClockWise($)&&(N[I]=$.reverse())}}let X=cr.triangulateShape(E,N),L=E;for(let I=0,ce=N.length;I<ce;I++){let $=N[I];E=E.concat($)}function O(I,ce,$){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(ce,$)}let z=E.length,K=X.length;function J(I,ce,$){let oe,Z,Ae,ve=I.x-ce.x,w=I.y-ce.y,M=$.x-I.x,B=$.y-I.y,ae=ve*ve+w*w,Q=ve*B-w*M;if(Math.abs(Q)>Number.EPSILON){let j=Math.sqrt(ae),Ee=Math.sqrt(M*M+B*B),_e=ce.x-w/j,Me=ce.y+ve/j,Ie=$.x-B/Ee,He=$.y+M/Ee,ee=((Ie-_e)*B-(He-Me)*M)/(ve*B-w*M);oe=_e+ve*ee-I.x,Z=Me+w*ee-I.y;let Ye=oe*oe+Z*Z;if(Ye<=2)return new se(oe,Z);Ae=Math.sqrt(Ye/2)}else{let j=!1;ve>Number.EPSILON?M>Number.EPSILON&&(j=!0):ve<-Number.EPSILON?M<-Number.EPSILON&&(j=!0):Math.sign(w)===Math.sign(B)&&(j=!0),j?(oe=-w,Z=ve,Ae=Math.sqrt(ae)):(oe=ve,Z=w,Ae=Math.sqrt(ae/2))}return new se(oe/Ae,Z/Ae)}let Y=[];for(let I=0,ce=L.length,$=ce-1,oe=I+1;I<ce;I++,$++,oe++)$===ce&&($=0),oe===ce&&(oe=0),Y[I]=J(L[I],L[$],L[oe]);let ne=[],re,ye=Y.concat();for(let I=0,ce=N.length;I<ce;I++){let $=N[I];re=[];for(let oe=0,Z=$.length,Ae=Z-1,ve=oe+1;oe<Z;oe++,Ae++,ve++)Ae===Z&&(Ae=0),ve===Z&&(ve=0),re[oe]=J($[oe],$[Ae],$[ve]);ne.push(re),ye=ye.concat(re)}for(let I=0;I<m;I++){let ce=I/m,$=p*Math.cos(ce*Math.PI/2),oe=g*Math.sin(ce*Math.PI/2)+_;for(let Z=0,Ae=L.length;Z<Ae;Z++){let ve=O(L[Z],Y[Z],oe);Se(ve.x,ve.y,-$)}for(let Z=0,Ae=N.length;Z<Ae;Z++){let ve=N[Z];re=ne[Z];for(let w=0,M=ve.length;w<M;w++){let B=O(ve[w],re[w],oe);Se(B.x,B.y,-$)}}}let q=g+_;for(let I=0;I<z;I++){let ce=f?O(E[I],ye[I],q):E[I];S?(R.copy(A.normals[0]).multiplyScalar(ce.x),v.copy(A.binormals[0]).multiplyScalar(ce.y),U.copy(y[0]).add(R).add(v),Se(U.x,U.y,U.z)):Se(ce.x,ce.y,0)}for(let I=1;I<=h;I++)for(let ce=0;ce<z;ce++){let $=f?O(E[ce],ye[ce],q):E[ce];S?(R.copy(A.normals[I]).multiplyScalar($.x),v.copy(A.binormals[I]).multiplyScalar($.y),U.copy(y[I]).add(R).add(v),Se(U.x,U.y,U.z)):Se($.x,$.y,u/h*I)}for(let I=m-1;I>=0;I--){let ce=I/m,$=p*Math.cos(ce*Math.PI/2),oe=g*Math.sin(ce*Math.PI/2)+_;for(let Z=0,Ae=L.length;Z<Ae;Z++){let ve=O(L[Z],Y[Z],oe);Se(ve.x,ve.y,u+$)}for(let Z=0,Ae=N.length;Z<Ae;Z++){let ve=N[Z];re=ne[Z];for(let w=0,M=ve.length;w<M;w++){let B=O(ve[w],re[w],oe);S?Se(B.x,B.y+y[h-1].y,y[h-1].x+$):Se(B.x,B.y,u+$)}}}ie(),xe();function ie(){let I=s.length/3;if(f){let ce=0,$=z*ce;for(let oe=0;oe<K;oe++){let Z=X[oe];Ue(Z[2]+$,Z[1]+$,Z[0]+$)}ce=h+m*2,$=z*ce;for(let oe=0;oe<K;oe++){let Z=X[oe];Ue(Z[0]+$,Z[1]+$,Z[2]+$)}}else{for(let ce=0;ce<K;ce++){let $=X[ce];Ue($[2],$[1],$[0])}for(let ce=0;ce<K;ce++){let $=X[ce];Ue($[0]+z*h,$[1]+z*h,$[2]+z*h)}}i.addGroup(I,s.length/3-I,0)}function xe(){let I=s.length/3,ce=0;Te(L,ce),ce+=L.length;for(let $=0,oe=N.length;$<oe;$++){let Z=N[$];Te(Z,ce),ce+=Z.length}i.addGroup(I,s.length/3-I,1)}function Te(I,ce){let $=I.length;for(;--$>=0;){let oe=$,Z=$-1;Z<0&&(Z=I.length-1);for(let Ae=0,ve=h+m*2;Ae<ve;Ae++){let w=z*Ae,M=z*(Ae+1),B=ce+oe+w,ae=ce+Z+w,Q=ce+Z+M,j=ce+oe+M;Fe(B,ae,Q,j)}}}function Se(I,ce,$){l.push(I),l.push(ce),l.push($)}function Ue(I,ce,$){we(I),we(ce),we($);let oe=s.length/3,Z=x.generateTopUV(i,s,oe-3,oe-2,oe-1);ke(Z[0]),ke(Z[1]),ke(Z[2])}function Fe(I,ce,$,oe){we(I),we(ce),we(oe),we(ce),we($),we(oe);let Z=s.length/3,Ae=x.generateSideWallUV(i,s,Z-6,Z-3,Z-2,Z-1);ke(Ae[0]),ke(Ae[1]),ke(Ae[3]),ke(Ae[1]),ke(Ae[2]),ke(Ae[3])}function we(I){s.push(l[I*3+0]),s.push(l[I*3+1]),s.push(l[I*3+2])}function ke(I){r.push(I.x),r.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return dx(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ac[s.type]().fromJSON(s)),new n(i,e.options)}},fx={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new se(r,a),new se(o,l),new se(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-u),new se(f,1-g),new se(_,1-d)]:[new se(o,1-l),new se(h,1-u),new se(p,1-g),new se(m,1-d)]}};function dx(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wr=class n extends cc{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Tr=class n extends gt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,f=(t-e)/s,p=new C,g=new se;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let d=r+m/i*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(i+1);for(let d=0;d<i;d++){let x=d+m,y=x,S=x+i+1,A=x+i+2,v=x+1;o.push(y,S,v),o.push(S,A,v)}}this.setIndex(o),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ar=class n extends gt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,f=new C,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){let x=[],y=d/i,S=0;d===0&&a===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let A=0;A<=t;A++){let v=A/t;u.x=-e*Math.cos(s+v*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+v*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(v+S,1-y),x.push(c++)}h.push(x)}for(let d=0;d<i;d++)for(let x=0;x<t;x++){let y=h[d][x+1],S=h[d][x],A=h[d+1][x],v=h[d+1][x+1];(d!==0||a>0)&&p.push(y,S,v),(d!==i-1||l<Math.PI)&&p.push(S,A,v)}this.setIndex(p),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mt=class extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ff,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Rr=class extends ja{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Ca(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function px(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ds=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fc=class extends Ds{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jh,endingEnd:Jh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kh:r=e,o=2*t-i;break;case jh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Kh:a=e,l=2*i-t;break;case jh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,x=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,S=p*m-p*_;for(let A=0;A!==o;++A)r[A]=d*a[h+A]+x*a[c+A]+y*a[l+A]+S*a[u+A];return r}},dc=class extends Ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},pc=class extends Ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},In=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ca(t,this.TimeBufferType),this.values=Ca(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ca(e.times,Array),values:Ca(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case La:t=this.InterpolantFactoryMethodDiscrete;break;case Ia:t=this.InterpolantFactoryMethodLinear;break;case nl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&px(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===nl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let p=0;p!==i;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Ia;var Gi=class extends In{};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=La;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var mc=class extends In{};mc.prototype.ValueTypeName="color";var gc=class extends In{};gc.prototype.ValueTypeName="number";var _c=class extends Ds{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Wt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Cr=class extends In{InterpolantFactoryMethodLinear(e){return new _c(this.times,this.values,this.getValueSize(),e)}};Cr.prototype.ValueTypeName="quaternion";Cr.prototype.DefaultInterpolation=Ia;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends In{};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=La;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var yc=class extends In{};yc.prototype.ValueTypeName="vector";var xc=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},mx=new xc,vc=class{constructor(e){this.manager=e!==void 0?e:mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};vc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pr=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},so=class extends Pr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Cl=new ot,Ku=new C,ju=new C,ro=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ku),ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ju),t.updateMatrixWorld(),Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Qu=new ot,nr=new C,Pl=new C,Mc=class extends ro{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),nr.setFromMatrixPosition(e.matrixWorld),i.position.copy(nr),Pl.copy(i.position),Pl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Pl),i.updateMatrixWorld(),s.makeTranslation(-nr.x,-nr.y,-nr.z),Qu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu)}},ao=class extends Pr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Mc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},bc=class extends ro{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oo=class extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new bc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ic="\\[\\]\\.:\\/",gx=new RegExp("["+Ic+"]","g"),Dc="[^"+Ic+"]",_x="[^"+Ic.replace("\\.","")+"]",yx=/((?:WC+[\/:])*)/.source.replace("WC",Dc),xx=/(WCOD+)?/.source.replace("WCOD",_x),vx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dc),Mx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dc),bx=new RegExp("^"+yx+xx+vx+Mx+"$"),Sx=["material","materials","bones","map"],Sc=class{constructor(e,t,i){let s=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gx,"")}static parseTrackName(e){let t=bx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Sx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=Sc;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pv=new Float32Array(1);var lo=class{constructor(e,t,i=0,s=1/0){this.ray=new vi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Ec(e,this,i,t),i.sort(ef),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ec(e[s],this,i,t);return i.sort(ef),i}};function ef(n,e){return n.distance-e.distance}function Ec(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)Ec(s[r],e,t,!0)}}var Lr=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);var Tf={type:"change"},Uc={type:"start"},Af={type:"end"},mo=new vi,Rf=new Rn,wx=Math.cos(70*Us.DEG2RAD),go=class extends zn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",j),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",j),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Tf),i.update(),r=s.NONE},this.update=function(){let P=new C,te=new Wt().setFromUnitVectors(e.up,new C(0,1,0)),me=te.clone().invert(),le=new C,Re=new Wt,$e=new C,Ke=2*Math.PI;return function(de=null){let D=i.object.position;P.copy(D).sub(i.target),P.applyQuaternion(te),o.setFromVector3(P),i.autoRotate&&r===s.NONE&&N(b(de)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let he=i.minAzimuthAngle,ue=i.maxAzimuthAngle;isFinite(he)&&isFinite(ue)&&(he<-Math.PI?he+=Ke:he>Math.PI&&(he-=Ke),ue<-Math.PI?ue+=Ke:ue>Math.PI&&(ue-=Ke),he<=ue?o.theta=Math.max(he,Math.min(ue,o.theta)):o.theta=o.theta>(he+ue)/2?Math.max(he,o.theta):Math.min(ue,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&v||i.object.isOrthographicCamera?o.radius=Y(o.radius):o.radius=Y(o.radius*c),P.setFromSpherical(o),P.applyQuaternion(me),D.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let De=!1;if(i.zoomToCursor&&v){let Ce=null;if(i.object.isPerspectiveCamera){let tt=P.length();Ce=Y(tt*c);let st=tt-Ce;i.object.position.addScaledVector(S,st),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let tt=new C(A.x,A.y,0);tt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),De=!0;let st=new C(A.x,A.y,0);st.unproject(i.object),i.object.position.sub(st).add(tt),i.object.updateMatrixWorld(),Ce=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ce!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ce).add(i.object.position):(mo.origin.copy(i.object.position),mo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(mo.direction))<wx?e.lookAt(i.target):(Rf.setFromNormalAndCoplanarPoint(i.object.up,i.target),mo.intersectPlane(Rf,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),De=!0);return c=1,v=!1,De||le.distanceToSquared(i.object.position)>a||8*(1-Re.dot(i.object.quaternion))>a||$e.distanceToSquared(i.target)>0?(i.dispatchEvent(Tf),le.copy(i.object.position),Re.copy(i.object.quaternion),$e.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Me),i.domElement.removeEventListener("pointerdown",ve),i.domElement.removeEventListener("pointercancel",M),i.domElement.removeEventListener("wheel",Q),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",M),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",j),i._domElementKeyEvents=null)};let i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new Lr,l=new Lr,c=1,h=new C,u=new se,f=new se,p=new se,g=new se,_=new se,m=new se,d=new se,x=new se,y=new se,S=new C,A=new se,v=!1,R=[],U={};function b(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function E(P){let te=Math.abs(P)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*te)}function N(P){l.theta-=P}function G(P){l.phi-=P}let X=function(){let P=new C;return function(me,le){P.setFromMatrixColumn(le,0),P.multiplyScalar(-me),h.add(P)}}(),L=function(){let P=new C;return function(me,le){i.screenSpacePanning===!0?P.setFromMatrixColumn(le,1):(P.setFromMatrixColumn(le,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(me),h.add(P)}}(),O=function(){let P=new C;return function(me,le){let Re=i.domElement;if(i.object.isPerspectiveCamera){let $e=i.object.position;P.copy($e).sub(i.target);let Ke=P.length();Ke*=Math.tan(i.object.fov/2*Math.PI/180),X(2*me*Ke/Re.clientHeight,i.object.matrix),L(2*le*Ke/Re.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(X(me*(i.object.right-i.object.left)/i.object.zoom/Re.clientWidth,i.object.matrix),L(le*(i.object.top-i.object.bottom)/i.object.zoom/Re.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function z(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(P,te){if(!i.zoomToCursor)return;v=!0;let me=i.domElement.getBoundingClientRect(),le=P-me.left,Re=te-me.top,$e=me.width,Ke=me.height;A.x=le/$e*2-1,A.y=-(Re/Ke)*2+1,S.set(A.x,A.y,1).unproject(i.object).sub(i.object.position).normalize()}function Y(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function ne(P){u.set(P.clientX,P.clientY)}function re(P){J(P.clientX,P.clientX),d.set(P.clientX,P.clientY)}function ye(P){g.set(P.clientX,P.clientY)}function q(P){f.set(P.clientX,P.clientY),p.subVectors(f,u).multiplyScalar(i.rotateSpeed);let te=i.domElement;N(2*Math.PI*p.x/te.clientHeight),G(2*Math.PI*p.y/te.clientHeight),u.copy(f),i.update()}function ie(P){x.set(P.clientX,P.clientY),y.subVectors(x,d),y.y>0?z(E(y.y)):y.y<0&&K(E(y.y)),d.copy(x),i.update()}function xe(P){_.set(P.clientX,P.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),O(m.x,m.y),g.copy(_),i.update()}function Te(P){J(P.clientX,P.clientY),P.deltaY<0?K(E(P.deltaY)):P.deltaY>0&&z(E(P.deltaY)),i.update()}function Se(P){let te=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),te=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),te=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),te=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),te=!0;break}te&&(P.preventDefault(),i.update())}function Ue(P){if(R.length===1)u.set(P.pageX,P.pageY);else{let te=Ye(P),me=.5*(P.pageX+te.x),le=.5*(P.pageY+te.y);u.set(me,le)}}function Fe(P){if(R.length===1)g.set(P.pageX,P.pageY);else{let te=Ye(P),me=.5*(P.pageX+te.x),le=.5*(P.pageY+te.y);g.set(me,le)}}function we(P){let te=Ye(P),me=P.pageX-te.x,le=P.pageY-te.y,Re=Math.sqrt(me*me+le*le);d.set(0,Re)}function ke(P){i.enableZoom&&we(P),i.enablePan&&Fe(P)}function I(P){i.enableZoom&&we(P),i.enableRotate&&Ue(P)}function ce(P){if(R.length==1)f.set(P.pageX,P.pageY);else{let me=Ye(P),le=.5*(P.pageX+me.x),Re=.5*(P.pageY+me.y);f.set(le,Re)}p.subVectors(f,u).multiplyScalar(i.rotateSpeed);let te=i.domElement;N(2*Math.PI*p.x/te.clientHeight),G(2*Math.PI*p.y/te.clientHeight),u.copy(f)}function $(P){if(R.length===1)_.set(P.pageX,P.pageY);else{let te=Ye(P),me=.5*(P.pageX+te.x),le=.5*(P.pageY+te.y);_.set(me,le)}m.subVectors(_,g).multiplyScalar(i.panSpeed),O(m.x,m.y),g.copy(_)}function oe(P){let te=Ye(P),me=P.pageX-te.x,le=P.pageY-te.y,Re=Math.sqrt(me*me+le*le);x.set(0,Re),y.set(0,Math.pow(x.y/d.y,i.zoomSpeed)),z(y.y),d.copy(x);let $e=(P.pageX+te.x)*.5,Ke=(P.pageY+te.y)*.5;J($e,Ke)}function Z(P){i.enableZoom&&oe(P),i.enablePan&&$(P)}function Ae(P){i.enableZoom&&oe(P),i.enableRotate&&ce(P)}function ve(P){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",M)),Ie(P),P.pointerType==="touch"?Ee(P):B(P))}function w(P){i.enabled!==!1&&(P.pointerType==="touch"?_e(P):ae(P))}function M(P){He(P),R.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",M)),i.dispatchEvent(Af),r=s.NONE}function B(P){let te;switch(P.button){case 0:te=i.mouseButtons.LEFT;break;case 1:te=i.mouseButtons.MIDDLE;break;case 2:te=i.mouseButtons.RIGHT;break;default:te=-1}switch(te){case Xi.DOLLY:if(i.enableZoom===!1)return;re(P),r=s.DOLLY;break;case Xi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;ye(P),r=s.PAN}else{if(i.enableRotate===!1)return;ne(P),r=s.ROTATE}break;case Xi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;ne(P),r=s.ROTATE}else{if(i.enablePan===!1)return;ye(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Uc)}function ae(P){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;q(P);break;case s.DOLLY:if(i.enableZoom===!1)return;ie(P);break;case s.PAN:if(i.enablePan===!1)return;xe(P);break}}function Q(P){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(P.preventDefault(),i.dispatchEvent(Uc),Te(P),i.dispatchEvent(Af))}function j(P){i.enabled===!1||i.enablePan===!1||Se(P)}function Ee(P){switch(ee(P),R.length){case 1:switch(i.touches.ONE){case qi.ROTATE:if(i.enableRotate===!1)return;Ue(P),r=s.TOUCH_ROTATE;break;case qi.PAN:if(i.enablePan===!1)return;Fe(P),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case qi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ke(P),r=s.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;I(P),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(Uc)}function _e(P){switch(ee(P),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;ce(P),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;$(P),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Z(P),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ae(P),i.update();break;default:r=s.NONE}}function Me(P){i.enabled!==!1&&P.preventDefault()}function Ie(P){R.push(P.pointerId)}function He(P){delete U[P.pointerId];for(let te=0;te<R.length;te++)if(R[te]==P.pointerId){R.splice(te,1);return}}function ee(P){let te=U[P.pointerId];te===void 0&&(te=new se,U[P.pointerId]=te),te.set(P.pageX,P.pageY)}function Ye(P){let te=P.pointerId===R[0]?R[1]:R[0];return U[te]}i.domElement.addEventListener("contextmenu",Me),i.domElement.addEventListener("pointerdown",ve),i.domElement.addEventListener("pointercancel",M),i.domElement.addEventListener("wheel",Q,{passive:!1}),this.update()}};var Nc={ko:{mode:{t60:"\uC810\uC2EC\uC2DC\uAC04 60\uCD08",t60d:"60\uCD08 \uC548\uC5D0 \uCD5C\uB300\uD55C \uBD80\uC218\uAE30 \xB7 \uB7AD\uD0B9\uC804",demo:"\uC644\uC804 \uCCA0\uAC70 \uD0C0\uC784\uC5B4\uD0DD",demod:"\uD68C\uC0AC \uAC74\uBB3C\uC744 \uC804\uBD80 \uBB34\uB108\uB728\uB9AC\uB294 \uC2DC\uAC04 \xB7 \uD575\uD3ED\uD0C4 \uAE08\uC9C0",free:"\uC790\uC720 \uBAA8\uB4DC",freed:"\uC2DC\uAC04 \uC81C\uD55C \uC5C6\uC774 \uB9C8\uC74C\uAECF (\uB7AD\uD0B9 \uC5C6\uC74C)",timeUp:"\uC810\uC2EC\uC2DC\uAC04 \uB05D!",done:"\uC644\uC804 \uCCA0\uAC70! {0}\uCD08",nukeBan:"\uD0C0\uC784\uC5B4\uD0DD\uC5D0\uC11C\uB294 \uD575\uD3ED\uD0C4 \uAE08\uC9C0",nukeOnce:"\uD575\uD3ED\uD0C4\uC740 \uD55C \uD310\uC5D0 \uD55C \uBC88\uB9CC",boards:["60\uCD08 \uC810\uC218","\uC644\uC804 \uCCA0\uAC70 \uC2DC\uAC04"],sec:"\uCD08",freeNoRank:"\uC790\uC720 \uBAA8\uB4DC \uAE30\uB85D\uC740 \uB7AD\uD0B9\uC5D0 \uC548 \uC62C\uB77C\uAC00\uC694",again:"\uD55C \uD310 \uB354"},q:["\uB0AE\uC74C","\uBCF4\uD1B5","\uB192\uC74C"],ranks:["\uC778\uD134","\uC0AC\uC6D0","\uB300\uB9AC","\uACFC\uC7A5","\uCC28\uC7A5","\uBD80\uC7A5","\uC0C1\uBB34","\uD1F4\uC0AC\uAC01"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uB2F4\uB2F9","\uD300\uC7A5","\uC2E4\uC7A5","\uBCF8\uBD80\uC7A5"],reject:"\uBC18\uB824",tools:{bomb:["\uC0AC\uC9C1\uC11C \uD3ED\uD0C4","\uC0AC\uC9C1\uC11C","\uB204\uB978 \uACF3\uC5D0 \uC0AC\uC9C1\uC11C\uB97C \uB358\uC838 \uB113\uAC8C \uB0A0\uB9AC\uACE0 \uAD6C\uB369\uC774\uB97C \uD31D\uB2C8\uB2E4"],bat:["\uACB0\uC7AC\uD310 \uD480\uC2A4\uC719","\uACB0\uC7AC\uD310","\uAC70\uB300\uD55C \uACB0\uC7AC\uD310\uC73C\uB85C \uCCD0\uC11C \uB369\uC5B4\uB9AC\uB97C \uBA40\uB9AC \uB0A0\uB9BD\uB2C8\uB2E4. 70 m \uB118\uC73C\uBA74 \uD648\uB7F0"],laser:["\uC5D1\uC140 \uB808\uC774\uC800","\uB808\uC774\uC800","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uBE54\uC774 \uADF8 \uC120\uC744 \uD6D1\uC2B5\uB2C8\uB2E4. \uD1A1 \uB204\uB974\uBA74 \uD55C \uC810\uB9CC"],meteor:["\uC131\uACFC\uAE09 \uC6B4\uC11D","\uC6B4\uC11D","\uD558\uB298\uC5D0\uC11C \uC6B4\uC11D\uC774 \uB5A8\uC5B4\uC838 \uD070 \uAD6C\uB369\uC774\uB97C \uB9CC\uB4ED\uB2C8\uB2E4"],quake:["\uC6D4\uC694\uBCD1 \uC9C0\uC9C4","\uC9C0\uC9C4","\uB204\uB978 \uACF3\uC774 \uC9C4\uC6D0. \uADDC\uBAA8 7.5 \uC774\uC0C1\uC774\uBA74 \uAC74\uBB3C\uC774 \uD1B5\uC9F8\uB85C \uC8FC\uC800\uC549\uC2B5\uB2C8\uB2E4"],nuke:["\uD1F4\uC0AC \uD575\uD3ED\uD0C4","\uD575\uD3ED\uD0C4","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},batSize:"\uACB0\uC7AC\uD310 \uD06C\uAE30",mag:"\uADDC\uBAA8",qk:["\uD754\uB4E4\uB9BC","\uBD80\uBD84 \uBD95\uAD34","\uC804\uBA74 \uBD95\uAD34"],labels:{bomb:["\uC0AC\uC9C1\uC11C \uC81C\uCD9C!","\uC624\uB298\uBD80\uB85C \uADF8\uB9CC\uB461\uB2C8\uB2E4","\uC5F0\uCC28 \uC18C\uC9C4 \uC644\uB8CC"],bat:["\uBC18\uB824!","\uC7AC\uAC80\uD1A0 \uBC14\uB78D\uB2C8\uB2E4","\uACB0\uC7AC \uC644\uB8CC","\uB2E4\uC2DC \uD574 \uC640"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","\uC21C\uD658 \uCC38\uC870!"],meteor:["\uC131\uACFC\uAE09 0\uC6D0","S\uB4F1\uAE09(\uC544\uB2D8)","\uC5F0\uBD09 \uB3D9\uACB0"],quake:["\uC6D4\uC694\uC77C 09:00","\uC8FC\uAC04\uD68C\uC758 \uC2DC\uC791","\uAE34\uAE09 \uBCF4\uACE0"],nuke:["\uD1F4\uC0AC\uD569\uB2C8\uB2E4","\uADF8\uB3D9\uC548 \uAC10\uC0AC\uD588\uC2B5\uB2C8\uB2E4"]},promo:"\uC2B9\uC9C4! {0}",collapse:"{0} \uBD95\uAD34!",collapseSmall:"{0} \uBD95\uAD34",nextBldg:"\uC606 \uAC74\uBB3C \uBD95\uAD34",noName:"{0} \uC774\uB984 \uC5C6\uB294 \uB3D9",core:"\uC9C0\uAD6C \uC911\uC2EC \uB3C4\uB2EC! \uACC4\uC18D \uD30C\uBA74 {0}",coreBonus:"\uC9C0\uAD6C \uC911\uC2EC \uBCF4\uB108\uC2A4",homerun:"\uD648\uB7F0! {0} m",homerunShort:"\uD648\uB7F0 {0}m",quit:"\uD1F4\uC0AC \uC644\uB8CC",magLabel:"\uADDC\uBAA8 {0} \xB7 {1}",count:"{0} / {1}\uB3D9",smash:"{0} \uBD80\uC218\uAE30",card:["\uC810\uC218","\uCD5C\uACE0 \uC9C1\uAE09","\uD68C\uC0AC \uD30C\uAD34\uC728","\uBB34\uB108\uC9C4 \uAC74\uBB3C","\uD310 \uAE4A\uC774"],hud:["\uD68C\uC0AC \uD30C\uAD34\uC728","\uBB34\uB108\uC9C4 \uAC74\uBB3C","\uD310 \uAE4A\uC774"],btn:{label:"\uC774\uB984\uD45C",night:"\uBC24",sound:"\uC18C\uB9AC",soundOff:"\uC18C\uB9AC \uAEBC\uC9D0",reset:"\uCC98\uC74C\uBD80\uD130",rank:"\uB7AD\uD0B9",card:"\uC778\uC99D\uC0F7",hub:"\uB2E4\uB978 \uD68C\uC0AC \uACE0\uB974\uAE30 \u2192",save:"\uC800\uC7A5",close:"\uB2EB\uAE30",submit:"\uB7AD\uD0B9 \uB4F1\uB85D",allRank:"\uD68C\uC0AC\uBCC4 \uC21C\uC704 \u2192"},quality:"\uD654\uC9C8 {0}",qDown:"\uB290\uB824\uC11C \uD654\uC9C8\uC744 '{0}'\uC73C\uB85C \uB0AE\uCDC4\uC5B4\uC694",noGpu:"\uBE0C\uB77C\uC6B0\uC800 \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC774 \uAEBC\uC838 \uC788\uC5B4 \uB290\uB9B4 \uC218 \uC788\uC5B4\uC694 (\uC124\uC815 \u2192 \uC2DC\uC2A4\uD15C \u2192 \uADF8\uB798\uD53D \uAC00\uC18D \uC0AC\uC6A9)",hint:"\uAC74\uBB3C\uC744 \uB20C\uB7EC \uBD80\uC218\uC138\uC694 \xB7 \uC22B\uC790 1~6\uC73C\uB85C \uB3C4\uAD6C \uBCC0\uACBD",start:"\uCD9C\uADFC\uD558\uAE30",how:"\uAC74\uBB3C\uC744 \uB20C\uB7EC \uBD80\uC218\uAE30 \xB7 \uB04C\uC5B4\uC11C \uD68C\uC804 \xB7 \uD720/\uB450 \uC190\uAC00\uB77D \uD655\uB300<br>\uB3C4\uAD6C\uB97C \uBC14\uAFD4 \uAC00\uBA70 \uBD80\uC218\uBA74 \uBC30\uC728\uC774 \uBD99\uACE0 \uC9C1\uAE09\uC774 \uC624\uB985\uB2C8\uB2E4",credit:"\uC9C0\uB3C4 \xA9 OpenStreetMap \uAE30\uC5EC\uC790 (ODbL) \xB7 {0} {1} \uAC74\uBB3C {2}\uB3D9 \xB7 \uBE44\uACF5\uC2DD \uD328\uB7EC\uB514 \uAC8C\uC784",saveHint:"\uC800\uC7A5\uC774 \uC548 \uB418\uBA74 \uC774\uBBF8\uC9C0\uB97C \uAE38\uAC8C \uB204\uB974\uAC70\uB098 \uC624\uB978\uCABD \uD074\uB9AD\uD574\uC11C \uC800\uC7A5\uD558\uC138\uC694",nickPh:"\uB7AD\uD0B9\uC5D0 \uC62C\uB9B4 \uC774\uB984 (12\uC790)",rank:{off:"\uB7AD\uD0B9 \uC11C\uBC84 \uC900\uBE44 \uC911\uC774\uC5D0\uC694.",loading:"\uBD88\uB7EC\uC624\uB294 \uC911\u2026",empty:"\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694. \uCCAB \uBC88\uC9F8\uB85C \uC774\uB984\uC744 \uC62C\uB9AC\uC138\uC694!",fail:"\uB7AD\uD0B9\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694.",anon:"\uC775\uBA85 \uC9C1\uC7A5\uC778",sending:"\uB4F1\uB85D \uC911\u2026",done:"{0} {1}\uC704\uB85C \uB4F1\uB85D\uD588\uC5B4\uC694!",fast:"\uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uB4F1\uB85D\uD574 \uC8FC\uC138\uC694",err:"\uB4F1\uB85D\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694",title:"{0} \uB7AD\uD0B9"},hover:["\uC8FC\uBCC0 \uAC74\uBB3C","{0} m \xB7 \uB0A8\uC740 {1}%"],km:"km",m:"m"},en:{mode:{t60:"Lunch Break 60s",t60d:"Wreck as much as you can in 60 seconds \xB7 ranked",demo:"Demolition Time Attack",demod:"How fast can you flatten every building? \xB7 no nukes",free:"Free Play",freed:"No timer, no ranking",timeUp:"Lunch is over!",done:"Fully demolished! {0}s",nukeBan:"No nukes in Time Attack",nukeOnce:"One nuke per run",boards:["60s score","Demolition time"],sec:"s",freeNoRank:"Free Play is not ranked",again:"Play again"},q:["Low","Medium","High"],ranks:["Intern","Associate","Senior","Manager","Sr. Manager","Director","VP","RAGE QUIT"],envelope:"I QUIT",board:["Staff","Lead","Mgr","Dir"],reject:"REJECTED",tools:{bomb:["Resignation Bomb","Resign","Throw your resignation letter: wide blast and a crater"],bat:["Clipboard Swing","Clipboard","Swing a giant approval clipboard. Over 70 m is a home run"],laser:["Excel Laser","Laser","Drag to draw a line and the beam sweeps it. Tap for a single burn"],meteor:["Bonus Meteor","Meteor","Your annual bonus falls from the sky as a meteor"],quake:["Monday Quake","Quake","Tap the epicenter. Magnitude 7.5+ flattens whole buildings"],nuke:["Quit Nuke","Nuke","Wipes out everything within 420 m"]},batSize:"Clipboard size",mag:"Magnitude",qk:["shaking","partial collapse","total collapse"],labels:{bomb:["I QUIT!","Effective immediately","PTO: used up"],bat:["REJECTED!","Please revise","Approved","Per my last email"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","Circular reference!"],meteor:["Bonus: $0","Exceeds expectations (not)","Salary freeze"],quake:["Monday 9:00 AM","All-hands meeting","Quick sync?"],nuke:["I quit.","Thanks for everything"]},promo:"Promoted! {0}",collapse:"{0} collapsed!",collapseSmall:"{0} down",nextBldg:"Neighbor down",noName:"{0} unnamed building",core:"Earth's core reached! Keep digging to {0}",coreBonus:"Core bonus",homerun:"Home run! {0} m",homerunShort:"HR {0}m",quit:"Resignation accepted",magLabel:"M {0} \xB7 {1}",count:"{0} / {1}",smash:"Smash {0}",card:["Score","Top rank","Destroyed","Buildings down","Dig depth"],hud:["Destroyed","Buildings down","Dig depth"],btn:{label:"Labels",night:"Night",sound:"Sound",soundOff:"Muted",reset:"Restart",rank:"Ranking",card:"Screenshot",hub:"Pick another company \u2192",save:"Save",close:"Close",submit:"Submit score",allRank:"Company ranking \u2192"},quality:"Quality {0}",qDown:"Too slow \u2014 quality lowered to '{0}'",noGpu:"Hardware acceleration is off in your browser, so it may be slow",hint:"Click buildings to smash \xB7 keys 1\u20136 switch tools",start:"Clock in",how:"Click to smash \xB7 drag to rotate \xB7 wheel/pinch to zoom<br>Switch tools to build a multiplier and climb the ladder",credit:"Map \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1}, {2} buildings \xB7 unofficial parody game",saveHint:"If saving fails, long-press or right-click the image",nickPh:"Name for the ranking (12 chars)",rank:{off:"Ranking server coming soon.",loading:"Loading\u2026",empty:"No records yet. Be the first!",fail:"Could not load the ranking.",anon:"Anonymous worker",sending:"Submitting\u2026",done:"You are #{1} at {0}!",fast:"Please wait a moment and try again",err:"Could not submit",title:"{0} ranking"},hover:["Nearby building","{0} m \xB7 {1}% left"],km:"km",m:"m"},ja:{mode:{t60:"\u663C\u4F11\u307F60\u79D2",t60d:"60\u79D2\u3067\u3069\u308C\u3060\u3051\u58CA\u305B\u308B\u304B \xB7 \u30E9\u30F3\u30AD\u30F3\u30B0\u6226",demo:"\u5B8C\u5168\u89E3\u4F53\u30BF\u30A4\u30E0\u30A2\u30BF\u30C3\u30AF",demod:"\u5168\u68DF\u3092\u5012\u3059\u307E\u3067\u306E\u30BF\u30A4\u30E0 \xB7 \u6838\u7206\u5F3E\u7981\u6B62",free:"\u30D5\u30EA\u30FC\u30E2\u30FC\u30C9",freed:"\u6642\u9593\u5236\u9650\u306A\u3057(\u30E9\u30F3\u30AD\u30F3\u30B0\u306A\u3057)",timeUp:"\u663C\u4F11\u307F\u7D42\u4E86!",done:"\u5B8C\u5168\u89E3\u4F53! {0}\u79D2",nukeBan:"\u30BF\u30A4\u30E0\u30A2\u30BF\u30C3\u30AF\u3067\u306F\u6838\u7206\u5F3E\u7981\u6B62",nukeOnce:"\u6838\u7206\u5F3E\u306F1\u56DE\u3060\u3051",boards:["60\u79D2\u30B9\u30B3\u30A2","\u5B8C\u5168\u89E3\u4F53\u30BF\u30A4\u30E0"],sec:"\u79D2",freeNoRank:"\u30D5\u30EA\u30FC\u30E2\u30FC\u30C9\u306F\u30E9\u30F3\u30AD\u30F3\u30B0\u5BFE\u8C61\u5916",again:"\u3082\u3046\u4E00\u56DE"},q:["\u4F4E","\u4E2D","\u9AD8"],ranks:["\u30A4\u30F3\u30BF\u30FC\u30F3","\u5E73\u793E\u54E1","\u4E3B\u4EFB","\u4FC2\u9577","\u8AB2\u9577","\u90E8\u9577","\u5F79\u54E1","\u9000\u8077\u5C4A"],envelope:"\u9000\u8077\u5C4A",board:["\u62C5\u5F53","\u8AB2\u9577","\u90E8\u9577","\u672C\u90E8\u9577"],reject:"\u5374\u4E0B",tools:{bomb:["\u9000\u8077\u5C4A\u30DC\u30E0","\u9000\u8077\u5C4A","\u9000\u8077\u5C4A\u3092\u6295\u3052\u3064\u3051\u3066\u5E83\u304F\u5439\u304D\u98DB\u3070\u3057\u3001\u7A74\u3092\u3042\u3051\u307E\u3059"],bat:["\u7A1F\u8B70\u66F8\u30D5\u30EB\u30B9\u30A4\u30F3\u30B0","\u7A1F\u8B70\u66F8","\u5DE8\u5927\u306A\u7A1F\u8B70\u30D0\u30A4\u30F3\u30C0\u30FC\u3067\u6253\u3063\u3066\u9060\u304F\u3078\u98DB\u3070\u3057\u307E\u3059\u300270 m\u8D85\u3048\u3067\u30DB\u30FC\u30E0\u30E9\u30F3"],laser:["\u30A8\u30AF\u30BB\u30EB\u30EC\u30FC\u30B6\u30FC","\u30EC\u30FC\u30B6\u30FC","\u30C9\u30E9\u30C3\u30B0\u3067\u7DDA\u3092\u5F15\u304F\u3068\u30D3\u30FC\u30E0\u304C\u306A\u305E\u308A\u307E\u3059\u3002\u30BF\u30C3\u30D7\u3067\u4E00\u70B9"],meteor:["\u30DC\u30FC\u30CA\u30B9\u9695\u77F3","\u9695\u77F3","\u7A7A\u304B\u3089\u30DC\u30FC\u30CA\u30B9\u304C\u9695\u77F3\u306B\u306A\u3063\u3066\u964D\u3063\u3066\u304D\u307E\u3059"],quake:["\u6708\u66DC\u75C5\u5730\u9707","\u5730\u9707","\u30BF\u30C3\u30D7\u3057\u305F\u6240\u304C\u9707\u6E90\u3002M7.5\u4EE5\u4E0A\u3067\u5EFA\u7269\u3054\u3068\u5D29\u308C\u307E\u3059"],nuke:["\u9000\u8077\u6838\u7206\u5F3E","\u6838\u7206\u5F3E","\u534A\u5F84420 m\u3092\u4E38\u3054\u3068\u5439\u304D\u98DB\u3070\u3057\u307E\u3059"]},batSize:"\u30D0\u30A4\u30F3\u30C0\u30FC\u306E\u5927\u304D\u3055",mag:"\u898F\u6A21",qk:["\u63FA\u308C","\u4E00\u90E8\u5D29\u58CA","\u5168\u58CA"],labels:{bomb:["\u9000\u8077\u5C4A\u63D0\u51FA!","\u672C\u65E5\u4ED8\u3067\u8F9E\u3081\u307E\u3059","\u6709\u7D66\u6D88\u5316\u5B8C\u4E86"],bat:["\u5374\u4E0B!","\u518D\u691C\u8A0E\u3057\u3066\u304F\u3060\u3055\u3044","\u627F\u8A8D","\u3084\u308A\u76F4\u3057"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","\u5FAA\u74B0\u53C2\u7167!"],meteor:["\u30DC\u30FC\u30CA\u30B90\u5186","S\u8A55\u4FA1(\u3067\u306F\u306A\u3044)","\u6607\u7D66\u306A\u3057"],quake:["\u6708\u66DC9:00","\u5B9A\u4F8B\u4F1A\u8B70","\u81F3\u6025\u5BFE\u5FDC"],nuke:["\u304A\u4E16\u8A71\u306B\u306A\u308A\u307E\u3057\u305F","\u9000\u8077\u3057\u307E\u3059"]},promo:"\u6607\u9032! {0}",collapse:"{0} \u5D29\u58CA!",collapseSmall:"{0} \u5D29\u58CA",nextBldg:"\u96A3\u306E\u30D3\u30EB\u5D29\u58CA",noName:"{0} \u540D\u524D\u306E\u306A\u3044\u68DF",core:"\u5730\u7403\u306E\u4E2D\u5FC3\u306B\u5230\u9054! \u3055\u3089\u306B\u6398\u308B\u3068{0}",coreBonus:"\u5730\u7403\u306E\u4E2D\u5FC3\u30DC\u30FC\u30CA\u30B9",homerun:"\u30DB\u30FC\u30E0\u30E9\u30F3! {0} m",homerunShort:"HR {0}m",quit:"\u9000\u8077\u5B8C\u4E86",magLabel:"M{0} \xB7 {1}",count:"{0} / {1}\u68DF",smash:"{0}\u3092\u3076\u3063\u58CA\u305B",card:["\u30B9\u30B3\u30A2","\u6700\u9AD8\u5F79\u8077","\u7834\u58CA\u7387","\u5D29\u308C\u305F\u5EFA\u7269","\u6398\u3063\u305F\u6DF1\u3055"],hud:["\u7834\u58CA\u7387","\u5D29\u308C\u305F\u5EFA\u7269","\u6398\u3063\u305F\u6DF1\u3055"],btn:{label:"\u540D\u672D",night:"\u591C",sound:"\u97F3",soundOff:"\u6D88\u97F3",reset:"\u6700\u521D\u304B\u3089",rank:"\u30E9\u30F3\u30AD\u30F3\u30B0",card:"\u30B9\u30AF\u30B7\u30E7",hub:"\u4ED6\u306E\u4F1A\u793E\u3092\u9078\u3076 \u2192",save:"\u4FDD\u5B58",close:"\u9589\u3058\u308B",submit:"\u30E9\u30F3\u30AD\u30F3\u30B0\u767B\u9332",allRank:"\u4F1A\u793E\u5225\u30E9\u30F3\u30AD\u30F3\u30B0 \u2192"},quality:"\u753B\u8CEA {0}",qDown:"\u91CD\u3044\u306E\u3067\u753B\u8CEA\u3092\u300C{0}\u300D\u306B\u4E0B\u3052\u307E\u3057\u305F",noGpu:"\u30D6\u30E9\u30A6\u30B6\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u30AA\u30D5\u306E\u305F\u3081\u91CD\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059",hint:"\u5EFA\u7269\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u58CA\u305D\u3046 \xB7 1\u301C6\u30AD\u30FC\u3067\u9053\u5177\u5207\u66FF",start:"\u51FA\u793E\u3059\u308B",how:"\u30AF\u30EA\u30C3\u30AF\u3067\u7834\u58CA \xB7 \u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2 \xB7 \u30DB\u30A4\u30FC\u30EB/\u30D4\u30F3\u30C1\u3067\u62E1\u5927<br>\u9053\u5177\u3092\u5207\u308A\u66FF\u3048\u308B\u3068\u500D\u7387\u304C\u4E0A\u304C\u308A\u3001\u51FA\u4E16\u3057\u307E\u3059",credit:"\u5730\u56F3 \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1} \u5EFA\u7269{2}\u68DF \xB7 \u975E\u516C\u5F0F\u30D1\u30ED\u30C7\u30A3\u30B2\u30FC\u30E0",saveHint:"\u4FDD\u5B58\u3067\u304D\u306A\u3044\u5834\u5408\u306F\u753B\u50CF\u3092\u9577\u62BC\u3057\u307E\u305F\u306F\u53F3\u30AF\u30EA\u30C3\u30AF",nickPh:"\u30E9\u30F3\u30AD\u30F3\u30B0\u7528\u306E\u540D\u524D(12\u6587\u5B57)",rank:{off:"\u30E9\u30F3\u30AD\u30F3\u30B0\u30B5\u30FC\u30D0\u30FC\u6E96\u5099\u4E2D\u3067\u3059\u3002",loading:"\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026",empty:"\u307E\u3060\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u4E00\u756A\u4E57\u308A\u3057\u3088\u3046!",fail:"\u30E9\u30F3\u30AD\u30F3\u30B0\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002",anon:"\u540D\u7121\u3057\u306E\u793E\u755C",sending:"\u767B\u9332\u4E2D\u2026",done:"{0}\u3067{1}\u4F4D\u306B\u767B\u9332\u3057\u307E\u3057\u305F!",fast:"\u5C11\u3057\u5F85\u3063\u3066\u304B\u3089\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044",err:"\u767B\u9332\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F",title:"{0} \u30E9\u30F3\u30AD\u30F3\u30B0"},hover:["\u5468\u8FBA\u306E\u5EFA\u7269","{0} m \xB7 \u6B8B\u308A{1}%"],km:"km",m:"m"},zh:{mode:{t60:"\u5348\u4F1160\u79D2",t60d:"60\u79D2\u5185\u5C3D\u60C5\u62C6 \xB7 \u6392\u4F4D\u8D5B",demo:"\u5B8C\u5168\u62C6\u9664\u8BA1\u65F6\u8D5B",demod:"\u62C6\u5149\u6240\u6709\u697C\u8981\u591A\u4E45 \xB7 \u7981\u7528\u6838\u5F39",free:"\u81EA\u7531\u6A21\u5F0F",freed:"\u4E0D\u9650\u65F6(\u4E0D\u8BA1\u6392\u540D)",timeUp:"\u5348\u4F11\u7ED3\u675F!",done:"\u5B8C\u5168\u62C6\u9664! {0}\u79D2",nukeBan:"\u8BA1\u65F6\u8D5B\u7981\u7528\u6838\u5F39",nukeOnce:"\u6838\u5F39\u6BCF\u5C40\u53EA\u80FD\u7528\u4E00\u6B21",boards:["60\u79D2\u5F97\u5206","\u62C6\u9664\u7528\u65F6"],sec:"\u79D2",freeNoRank:"\u81EA\u7531\u6A21\u5F0F\u4E0D\u8BA1\u6392\u540D",again:"\u518D\u6765\u4E00\u5C40"},q:["\u4F4E","\u4E2D","\u9AD8"],ranks:["\u5B9E\u4E60\u751F","\u804C\u5458","\u4E3B\u7BA1","\u7ECF\u7406","\u9AD8\u7EA7\u7ECF\u7406","\u603B\u76D1","\u526F\u603B\u88C1","\u88F8\u8F9E"],envelope:"\u8F9E\u804C\u4FE1",board:["\u7ECF\u529E","\u7EC4\u957F","\u7ECF\u7406","\u603B\u76D1"],reject:"\u9A73\u56DE",tools:{bomb:["\u8F9E\u804C\u4FE1\u70B8\u5F39","\u8F9E\u804C\u4FE1","\u6254\u51FA\u8F9E\u804C\u4FE1\uFF0C\u70B8\u98DE\u4E00\u5927\u7247\u5E76\u70B8\u51FA\u5751"],bat:["\u5BA1\u6279\u5939\u5168\u529B\u6325\u51FB","\u5BA1\u6279\u5939","\u7528\u5DE8\u5927\u7684\u5BA1\u6279\u5939\u628A\u697C\u5757\u6253\u98DE\u3002\u8D85\u8FC770\u7C73\u7B97\u672C\u5792\u6253"],laser:["Excel\u6FC0\u5149","\u6FC0\u5149","\u62D6\u52A8\u753B\u7EBF\uFF0C\u6FC0\u5149\u6CBF\u7EBF\u626B\u8FC7\u3002\u70B9\u4E00\u4E0B\u53EA\u70E7\u4E00\u70B9"],meteor:["\u5E74\u7EC8\u5956\u9668\u77F3","\u9668\u77F3","\u5E74\u7EC8\u5956\u5316\u4F5C\u9668\u77F3\u4ECE\u5929\u800C\u964D"],quake:["\u5468\u4E00\u7EFC\u5408\u5F81\u5730\u9707","\u5730\u9707","\u70B9\u51FB\u5904\u4E3A\u9707\u4E2D\u30027.5\u7EA7\u4EE5\u4E0A\u6574\u680B\u697C\u4F1A\u584C"],nuke:["\u79BB\u804C\u6838\u5F39","\u6838\u5F39","\u534A\u5F84420\u7C73\u5168\u90E8\u5937\u5E73"]},batSize:"\u5BA1\u6279\u5939\u5927\u5C0F",mag:"\u9707\u7EA7",qk:["\u6447\u6643","\u90E8\u5206\u5012\u584C","\u5168\u90E8\u5012\u584C"],labels:{bomb:["\u8F9E\u804C\u4FE1\u5DF2\u63D0\u4EA4!","\u5373\u65E5\u8D77\u79BB\u804C","\u5E74\u5047\u5DF2\u4F11\u5B8C"],bat:["\u9A73\u56DE!","\u8BF7\u91CD\u65B0\u4FEE\u6539","\u5DF2\u5BA1\u6279","\u518D\u6539\u4E00\u7248"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","\u5FAA\u73AF\u5F15\u7528!"],meteor:["\u5E74\u7EC8\u59560\u5143","\u7EE9\u6548S(\u5E76\u4E0D\u662F)","\u5DE5\u8D44\u51BB\u7ED3"],quake:["\u5468\u4E009:00","\u5468\u4F1A\u5F00\u59CB","\u7D27\u6025\u6C47\u62A5"],nuke:["\u6211\u4E0D\u5E72\u4E86","\u611F\u8C22\u5404\u4F4D\u7167\u987E"]},promo:"\u5347\u804C! {0}",collapse:"{0} \u5012\u584C!",collapseSmall:"{0} \u5012\u584C",nextBldg:"\u9694\u58C1\u697C\u5012\u584C",noName:"{0} \u65E0\u540D\u697C",core:"\u62B5\u8FBE\u5730\u5FC3! \u7EE7\u7EED\u6316\u5C31\u5230{0}",coreBonus:"\u5730\u5FC3\u5956\u52B1",homerun:"\u672C\u5792\u6253! {0} \u7C73",homerunShort:"\u672C\u5792\u6253 {0}\u7C73",quit:"\u79BB\u804C\u6210\u529F",magLabel:"{0}\u7EA7 \xB7 {1}",count:"{0} / {1}\u680B",smash:"\u62C6\u4E86{0}",card:["\u5206\u6570","\u6700\u9AD8\u804C\u4F4D","\u7834\u574F\u7387","\u5012\u584C\u5EFA\u7B51","\u6316\u6398\u6DF1\u5EA6"],hud:["\u7834\u574F\u7387","\u5012\u584C\u5EFA\u7B51","\u6316\u6398\u6DF1\u5EA6"],btn:{label:"\u697C\u540D",night:"\u591C\u665A",sound:"\u58F0\u97F3",soundOff:"\u9759\u97F3",reset:"\u91CD\u6765",rank:"\u6392\u884C\u699C",card:"\u622A\u56FE",hub:"\u9009\u62E9\u5176\u4ED6\u516C\u53F8 \u2192",save:"\u4FDD\u5B58",close:"\u5173\u95ED",submit:"\u63D0\u4EA4\u6210\u7EE9",allRank:"\u516C\u53F8\u6392\u884C \u2192"},quality:"\u753B\u8D28 {0}",qDown:"\u592A\u5361\u4E86\uFF0C\u753B\u8D28\u5DF2\u964D\u4E3A\u201C{0}\u201D",noGpu:"\u6D4F\u89C8\u5668\u786C\u4EF6\u52A0\u901F\u5DF2\u5173\u95ED\uFF0C\u53EF\u80FD\u4F1A\u5361\u987F",hint:"\u70B9\u51FB\u5EFA\u7B51\u5F00\u62C6 \xB7 \u6570\u5B57\u952E1~6\u5207\u6362\u9053\u5177",start:"\u4E0A\u73ED\u6253\u5361",how:"\u70B9\u51FB\u62C6\u697C \xB7 \u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E/\u53CC\u6307\u7F29\u653E<br>\u6362\u7740\u9053\u5177\u62C6\u53EF\u4EE5\u53E0\u500D\u7387\u3001\u5347\u804C",credit:"\u5730\u56FE \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1} \u5171{2}\u680B \xB7 \u975E\u5B98\u65B9\u6076\u641E\u6E38\u620F",saveHint:"\u65E0\u6CD5\u4FDD\u5B58\u65F6\u8BF7\u957F\u6309\u6216\u53F3\u952E\u4FDD\u5B58\u56FE\u7247",nickPh:"\u6392\u884C\u699C\u6635\u79F0(12\u5B57\u4EE5\u5185)",rank:{off:"\u6392\u884C\u699C\u670D\u52A1\u5668\u51C6\u5907\u4E2D\u3002",loading:"\u52A0\u8F7D\u4E2D\u2026",empty:"\u8FD8\u6CA1\u6709\u8BB0\u5F55\uFF0C\u6765\u5F53\u7B2C\u4E00\u540D!",fail:"\u65E0\u6CD5\u52A0\u8F7D\u6392\u884C\u699C\u3002",anon:"\u533F\u540D\u6253\u5DE5\u4EBA",sending:"\u63D0\u4EA4\u4E2D\u2026",done:"\u5DF2\u767B\u4E0A{0}\u7B2C{1}\u540D!",fast:"\u8BF7\u7A0D\u540E\u518D\u63D0\u4EA4",err:"\u63D0\u4EA4\u5931\u8D25",title:"{0} \u6392\u884C\u699C"},hover:["\u5468\u8FB9\u5EFA\u7B51","{0} \u7C73 \xB7 \u5269\u4F59{1}%"],km:"\u516C\u91CC",m:"\u7C73"},vi:{mode:{t60:"Ngh\u1EC9 tr\u01B0a 60 gi\xE2y",t60d:"\u0110\u1EADp c\xE0ng nhi\u1EC1u c\xE0ng t\u1ED1t trong 60 gi\xE2y \xB7 x\u1EBFp h\u1EA1ng",demo:"Ph\xE1 d\u1EE1 t\xEDnh gi\u1EDD",demod:"San ph\u1EB3ng m\u1ECDi t\xF2a nh\xE0 nhanh nh\u1EA5t \xB7 c\u1EA5m bom h\u1EA1t nh\xE2n",free:"Ch\u01A1i t\u1EF1 do",freed:"Kh\xF4ng gi\u1EDBi h\u1EA1n, kh\xF4ng x\u1EBFp h\u1EA1ng",timeUp:"H\u1EBFt gi\u1EDD ngh\u1EC9 tr\u01B0a!",done:"Ph\xE1 d\u1EE1 xong! {0}s",nukeBan:"C\u1EA5m bom h\u1EA1t nh\xE2n khi t\xEDnh gi\u1EDD",nukeOnce:"M\u1ED7i l\u01B0\u1EE3t ch\u1EC9 1 bom h\u1EA1t nh\xE2n",boards:["\u0110i\u1EC3m 60s","Th\u1EDDi gian ph\xE1 d\u1EE1"],sec:"s",freeNoRank:"Ch\u01A1i t\u1EF1 do kh\xF4ng x\u1EBFp h\u1EA1ng",again:"Ch\u01A1i l\u1EA1i"},q:["Th\u1EA5p","V\u1EEBa","Cao"],ranks:["Th\u1EF1c t\u1EADp","Nh\xE2n vi\xEAn","Chuy\xEAn vi\xEAn","Tr\u01B0\u1EDFng nh\xF3m","Tr\u01B0\u1EDFng ph\xF2ng","Gi\xE1m \u0111\u1ED1c","Ph\xF3 TG\u0110","NGH\u1EC8 VI\u1EC6C"],envelope:"\u0110\u01A0N NGH\u1EC8",board:["NV","TN","TP","G\u0110"],reject:"T\u1EEA CH\u1ED0I",tools:{bomb:["Bom \u0111\u01A1n ngh\u1EC9 vi\u1EC7c","\u0110\u01A1n ngh\u1EC9","N\xE9m \u0111\u01A1n ngh\u1EC9 vi\u1EC7c: n\u1ED5 r\u1ED9ng v\xE0 t\u1EA1o h\u1ED1"],bat:["C\xFA v\u1EE5t b\xECa tr\xECnh k\xFD","B\xECa k\xFD","V\u1EE5t b\xECa tr\xECnh k\xFD kh\u1ED5ng l\u1ED3 cho bay xa. Tr\xEAn 70 m l\xE0 home run"],laser:["Laser Excel","Laser","K\xE9o \u0111\u1EC3 v\u1EBD \u0111\u01B0\u1EDDng, tia laser qu\xE9t theo. Ch\u1EA1m \u0111\u1EC3 \u0111\u1ED1t m\u1ED9t \u0111i\u1EC3m"],meteor:["Thi\xEAn th\u1EA1ch th\u01B0\u1EDFng T\u1EBFt","Thi\xEAn th\u1EA1ch","Th\u01B0\u1EDFng T\u1EBFt r\u01A1i t\u1EEB tr\u1EDDi xu\u1ED1ng th\xE0nh thi\xEAn th\u1EA1ch"],quake:["\u0110\u1ED9ng \u0111\u1EA5t th\u1EE9 Hai","\u0110\u1ED9ng \u0111\u1EA5t","Ch\u1EA1m v\xE0o t\xE2m ch\u1EA5n. T\u1EEB 7.5 \u0111\u1ED9 c\u1EA3 t\xF2a nh\xE0 s\u1EE5p"],nuke:["Bom h\u1EA1t nh\xE2n ngh\u1EC9 vi\u1EC7c","H\u1EA1t nh\xE2n","X\xF3a s\u1ED5 m\u1ECDi th\u1EE9 trong b\xE1n k\xEDnh 420 m"]},batSize:"C\u1EE1 b\xECa k\xFD",mag:"\u0110\u1ED9 l\u1EDBn",qk:["rung l\u1EAFc","s\u1EADp m\u1ED9t ph\u1EA7n","s\u1EADp to\xE0n b\u1ED9"],labels:{bomb:["Em xin ngh\u1EC9!","Ngh\u1EC9 t\u1EEB h\xF4m nay","H\u1EBFt ph\xE9p n\u0103m"],bat:["T\u1EEA CH\u1ED0I!","L\xE0m l\u1EA1i \u0111i em","\u0110\xE3 duy\u1EC7t","S\u1EEDa b\u1EA3n 17"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","Tham chi\u1EBFu v\xF2ng!"],meteor:["Th\u01B0\u1EDFng T\u1EBFt: 0\u0111","Xu\u1EA5t s\u1EAFc (kh\xF4ng ph\u1EA3i)","\u0110\xF3ng b\u0103ng l\u01B0\u01A1ng"],quake:["Th\u1EE9 Hai 8:00","H\u1ECDp giao ban","B\xE1o c\xE1o g\u1EA5p"],nuke:["Em ngh\u1EC9 \u0111\xE2y","C\u1EA3m \u01A1n m\u1ECDi ng\u01B0\u1EDDi"]},promo:"Th\u0103ng ch\u1EE9c! {0}",collapse:"{0} s\u1EADp!",collapseSmall:"{0} s\u1EADp",nextBldg:"T\xF2a b\xEAn c\u1EA1nh s\u1EADp",noName:"{0} t\xF2a kh\xF4ng t\xEAn",core:"\u0110\u1EBFn t\xE2m Tr\xE1i \u0110\u1EA5t! \u0110\xE0o ti\u1EBFp s\u1EBD t\u1EDBi {0}",coreBonus:"Th\u01B0\u1EDFng t\xE2m Tr\xE1i \u0110\u1EA5t",homerun:"Home run! {0} m",homerunShort:"HR {0}m",quit:"Ngh\u1EC9 vi\u1EC7c th\xE0nh c\xF4ng",magLabel:"{0} \u0111\u1ED9 \xB7 {1}",count:"{0} / {1} t\xF2a",smash:"\u0110\u1EADp {0}",card:["\u0110i\u1EC3m","Ch\u1EE9c cao nh\u1EA5t","T\u1EC9 l\u1EC7 ph\xE1 h\u1EE7y","T\xF2a nh\xE0 s\u1EADp","\u0110\u1ED9 s\xE2u \u0111\xE0o"],hud:["T\u1EC9 l\u1EC7 ph\xE1 h\u1EE7y","T\xF2a nh\xE0 s\u1EADp","\u0110\u1ED9 s\xE2u \u0111\xE0o"],btn:{label:"T\xEAn t\xF2a",night:"\u0110\xEAm",sound:"\xC2m thanh",soundOff:"T\u1EAFt ti\u1EBFng",reset:"Ch\u01A1i l\u1EA1i",rank:"X\u1EBFp h\u1EA1ng",card:"Ch\u1EE5p m\xE0n h\xECnh",hub:"Ch\u1ECDn c\xF4ng ty kh\xE1c \u2192",save:"L\u01B0u",close:"\u0110\xF3ng",submit:"G\u1EEDi \u0111i\u1EC3m",allRank:"X\u1EBFp h\u1EA1ng c\xF4ng ty \u2192"},quality:"\u0110\u1ED3 h\u1ECDa {0}",qDown:"M\xE1y ch\u1EADm \u2014 \u0111\xE3 gi\u1EA3m \u0111\u1ED3 h\u1ECDa xu\u1ED1ng '{0}'",noGpu:"Tr\xECnh duy\u1EC7t \u0111ang t\u1EAFt t\u0103ng t\u1ED1c ph\u1EA7n c\u1EE9ng n\xEAn c\xF3 th\u1EC3 ch\u1EADm",hint:"B\u1EA5m v\xE0o t\xF2a nh\xE0 \u0111\u1EC3 \u0111\u1EADp \xB7 ph\xEDm 1\u20136 \u0111\u1ED5i c\xF4ng c\u1EE5",start:"\u0110i l\xE0m",how:"B\u1EA5m \u0111\u1EC3 \u0111\u1EADp \xB7 k\xE9o \u0111\u1EC3 xoay \xB7 cu\u1ED9n/hai ng\xF3n \u0111\u1EC3 ph\xF3ng to<br>\u0110\u1ED5i c\xF4ng c\u1EE5 li\xEAn t\u1EE5c \u0111\u1EC3 nh\xE2n \u0111i\u1EC3m v\xE0 th\u0103ng ch\u1EE9c",credit:"B\u1EA3n \u0111\u1ED3 \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1}, {2} t\xF2a \xB7 game nh\u1EA1i kh\xF4ng ch\xEDnh th\u1EE9c",saveHint:"N\u1EBFu kh\xF4ng l\u01B0u \u0111\u01B0\u1EE3c, h\xE3y nh\u1EA5n gi\u1EEF ho\u1EB7c chu\u1ED9t ph\u1EA3i v\xE0o \u1EA3nh",nickPh:"T\xEAn tr\xEAn b\u1EA3ng x\u1EBFp h\u1EA1ng (12 k\xFD t\u1EF1)",rank:{off:"M\xE1y ch\u1EE7 x\u1EBFp h\u1EA1ng s\u1EAFp ra m\u1EAFt.",loading:"\u0110ang t\u1EA3i\u2026",empty:"Ch\u01B0a c\xF3 ai. H\xE3y l\xE0 ng\u01B0\u1EDDi \u0111\u1EA7u ti\xEAn!",fail:"Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c b\u1EA3ng x\u1EBFp h\u1EA1ng.",anon:"D\xE2n v\u0103n ph\xF2ng \u1EA9n danh",sending:"\u0110ang g\u1EEDi\u2026",done:"B\u1EA1n h\u1EA1ng {1} t\u1EA1i {0}!",fast:"Vui l\xF2ng \u0111\u1EE3i m\u1ED9t ch\xFAt r\u1ED3i g\u1EEDi l\u1EA1i",err:"Kh\xF4ng g\u1EEDi \u0111\u01B0\u1EE3c",title:"X\u1EBFp h\u1EA1ng {0}"},hover:["T\xF2a nh\xE0 l\xE2n c\u1EADn","{0} m \xB7 c\xF2n {1}%"],km:"km",m:"m"}};function Cf(n,e={}){let t=Nc[n]||Nc.ko,i=(r,a)=>a.split(".").reduce((o,l)=>o==null?o:o[l],r);return(r,...a)=>{let o=i(e,r);return o==null&&(o=i(t,r)),o==null&&(o=i(Nc.ko,r)),typeof o=="string"?o.replace(/\{(\d)\}/g,(l,c)=>a[+c]??""):o}}var Pf={ko:{hospital:{ranks:["\uC778\uD134","\uB808\uC9C0\uB358\uD2B8 1\uB144\uCC28","\uB808\uC9C0\uB358\uD2B8 4\uB144\uCC28","\uC804\uC784\uC758","\uC870\uAD50\uC218","\uBD80\uAD50\uC218","\uAD50\uC218","\uBCD1\uC6D0\uC7A5"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uC8FC\uCE58\uC758","\uC804\uACF5\uC758","\uAD50\uC218","\uACFC\uC7A5"],reject:"\uBCF4\uB958",tools:{bomb:["\uC804\uACF5\uC758 \uC0AC\uC9C1\uC11C","\uC0AC\uC9C1\uC11C","\uC0AC\uC9C1\uC11C\uB97C \uB358\uC838 \uBCD1\uB3D9\uC744 \uB0A0\uB9BD\uB2C8\uB2E4"],bat:["\uCC28\uD2B8 \uD480\uC2A4\uC719","\uCC28\uD2B8","\uB450\uAEBC\uC6B4 \uC758\uBB34\uAE30\uB85D \uCC28\uD2B8\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4. 70 m \uB118\uC73C\uBA74 \uD648\uB7F0"],laser:["\uC218\uC220 \uB808\uC774\uC800","\uB808\uC774\uC800","\uB04C\uC5B4\uC11C \uC808\uAC1C\uC120\uC744 \uADF8\uC73C\uBA74 \uB808\uC774\uC800\uAC00 \uB530\uB77C \uC790\uB985\uB2C8\uB2E4"],meteor:["\uC9C4\uD1B5\uC81C \uC6B4\uC11D","\uC54C\uC57D","\uD558\uB298\uC5D0\uC11C \uAC70\uB300\uD55C \uC54C\uC57D\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["36\uC2DC\uAC04 \uB2F9\uC9C1 \uC9C0\uC9C4","\uB2F9\uC9C1","\uB204\uB978 \uACF3\uC774 \uC9C4\uC6D0. \uADDC\uBAA8 7.5 \uC774\uC0C1\uC774\uBA74 \uBCD1\uB3D9\uC774 \uD1B5\uC9F8\uB85C \uC8FC\uC800\uC549\uC2B5\uB2C8\uB2E4"],nuke:["\uC9D1\uB2E8 \uC0AC\uC9C1 \uD575\uD3ED\uD0C4","\uC9D1\uB2E8\uC0AC\uC9C1","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uC624\uB298\uBD80\uB85C \uC0AC\uC9C1\uD569\uB2C8\uB2E4","\uC624\uD504 \uBC18\uB0A9 \uAC70\uBD80","\uCF5C \uC548 \uBC1B\uC2B5\uB2C8\uB2E4"],bat:["\uC624\uB354 \uBCC0\uACBD!","\uCC28\uD305 \uB2E4\uC2DC \uD574","\uD68C\uC9C4 \uC9C0\uC5F0"],laser:["\uC808\uAC1C!","\uC9C0\uD608 \uC2E4\uD328","\uBD09\uD569\uC740 \uB0B4\uC77C"],meteor:["\uC218\uC561 \uB9DE\uACE0 \uCD9C\uADFC","\uC9C4\uD1B5\uC81C 2\uC54C","\uCE74\uD398\uC778 IV"],quake:["\uC751\uAE09\uC2E4 \uCF5C","\uCF54\uB4DC \uBE14\uB8E8","\uC0C8\uBCBD 3\uC2DC \uCF5C"],nuke:["\uBCD1\uC6D0 \uB5A0\uB0A9\uB2C8\uB2E4","\uC218\uB828 \uD3EC\uAE30"]},meteor:"pill",beam:["#ffffff","#38bdf8"]},law:{ranks:["\uC778\uD134","\uC5B4\uC3D8 1\uB144\uCC28","\uC5B4\uC3D8 3\uB144\uCC28","\uC2DC\uB2C8\uC5B4 \uC5B4\uC3D8","\uC8FC\uB2C8\uC5B4 \uD30C\uD2B8\uB108","\uD30C\uD2B8\uB108","\uC2DC\uB2C8\uC5B4 \uD30C\uD2B8\uB108","\uD0C8\uCD9C"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uC5B4\uC3D8","\uC2DC\uB2C8\uC5B4","\uD30C\uD2B8\uB108","\uB300\uD45C"],reject:"\uC7AC\uC791\uC131",tools:{bomb:["\uC0AC\uC9C1\uC11C \uD3ED\uD0C4","\uC0AC\uC9C1\uC11C","\uBE4C\uB7EC\uBE14 \uC544\uC6CC\uB97C \uBC84\uB9AC\uACE0 \uC0AC\uC9C1\uC11C\uB97C \uB358\uC9D1\uB2C8\uB2E4"],bat:["\uC900\uBE44\uC11C\uBA74 \uD480\uC2A4\uC719","\uC11C\uBA74","300\uCABD\uC9DC\uB9AC \uC900\uBE44\uC11C\uBA74 \uBB49\uCE58\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uD0C0\uC784\uC2DC\uD2B8 \uB808\uC774\uC800","\uD0C0\uC784\uC2DC\uD2B8","6\uBD84 \uB2E8\uC704\uB85C \uC815\uD655\uD788 \uC798\uB77C \uB0C5\uB2C8\uB2E4"],meteor:["\uC18C\uC1A1\uBE44\uC6A9 \uC6B4\uC11D","\uC18C\uC1A1\uBE44\uC6A9","\uD328\uC18C\uD55C \uCABD \uC18C\uC1A1\uBE44\uC6A9\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD310\uACB0 \uC120\uACE0 \uC9C0\uC9C4","\uC120\uACE0","\uB204\uB978 \uACF3\uC5D0\uC11C \uD310\uACB0\uC774 \uC120\uACE0\uB429\uB2C8\uB2E4"],nuke:["\uC9D1\uB2E8\uC18C\uC1A1 \uD575\uD3ED\uD0C4","\uC9D1\uB2E8\uC18C\uC1A1","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uBE4C\uB7EC\uBE14 0\uC2DC\uAC04","\uD1F4\uC0AC\uD569\uB2C8\uB2E4","\uC8FC\uB9D0 \uBC18\uB0A9 \uB05D"],bat:["\uAC01\uD558!","\uAE30\uAC01!","\uBCF4\uC815\uBA85\uB839"],laser:["0.1\uC2DC\uAC04","0.3\uC2DC\uAC04","6\uBD84 \uCCAD\uAD6C"],meteor:["\uCC29\uC218\uAE08 \uBC18\uD658","\uC131\uACF5\uBCF4\uC218 0\uC6D0","\uD328\uC18C"],quake:["\uC8FC\uBB38: \uC6D0\uACE0 \uD328\uC18C","\uC0C1\uACE0 \uAE30\uAC01","\uBCC0\uB860 \uC7AC\uAC1C"],nuke:["\uB85C\uD38C \uD0C8\uCD9C","\uC778\uD558\uC6B0\uC2A4 \uAC11\uB2C8\uB2E4"]},meteor:"coin",beam:["#ffffff","#facc15"]},accounting:{ranks:["\uC778\uD134","\uC2A4\uD0ED","\uC2DC\uB2C8\uC5B4","\uB9E4\uB2C8\uC800","\uC2DC\uB2C8\uC5B4 \uB9E4\uB2C8\uC800","\uB514\uB809\uD130","\uD30C\uD2B8\uB108","\uC2DC\uC98C \uD0C8\uCD9C"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uC2A4\uD0ED","\uC2DC\uB2C8\uC5B4","\uB9E4\uB2C8\uC800","\uD30C\uD2B8\uB108"],reject:"\uC218\uC815\uC694\uB9DD",tools:{bomb:["\uC2DC\uC98C \uC0AC\uC9C1\uC11C","\uC0AC\uC9C1\uC11C","\uAC10\uC0AC \uC2DC\uC98C \uD55C\uAC00\uC6B4\uB370 \uC0AC\uC9C1\uC11C\uB97C \uB358\uC9D1\uB2C8\uB2E4"],bat:["\uAC10\uC0AC\uC870\uC11C \uD480\uC2A4\uC719","\uC870\uC11C","\uB450\uAEBC\uC6B4 \uAC10\uC0AC\uC870\uC11C\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC5D1\uC140 \uB808\uC774\uC800","\uC5D1\uC140","VLOOKUP\uCC98\uB7FC \uB05D\uAE4C\uC9C0 \uD6D1\uC2B5\uB2C8\uB2E4"],meteor:["\uBD84\uC2DD\uD68C\uACC4 \uC6B4\uC11D","\uBD84\uC2DD","\uC228\uACA8 \uB454 \uBD80\uCC44\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uACB0\uC0B0 \uC9C0\uC9C4","\uACB0\uC0B0","12\uC6D4 \uACB0\uC0B0\uC774 \uB36E\uCE69\uB2C8\uB2E4"],nuke:["\uC758\uACAC\uAC70\uC808 \uD575\uD3ED\uD0C4","\uC758\uACAC\uAC70\uC808","\uBC18\uACBD 420 m\uC5D0 \uC758\uACAC\uAC70\uC808\uC744 \uB0C5\uB2C8\uB2E4"]},labels:{bomb:["\uC2DC\uC98C \uB05D\uB098\uACE0 \uB098\uAC11\uB2C8\uB2E4","\uC8FC 100\uC2DC\uAC04 \uB05D","\uD1F4\uC0AC"],bat:["\uC870\uC11C \uB2E4\uC2DC","\uADFC\uAC70 \uBD99\uC5EC","\uB9AC\uBDF0 \uCF54\uBA58\uD2B8 47\uAC1C"],laser:["#REF!","#N/A","\uCC28\uC774 1\uC6D0","\uC21C\uD658 \uCC38\uC870!"],meteor:["\uD55C\uC815\uC758\uACAC","\uACC4\uC18D\uAE30\uC5C5 \uBD88\uD655\uC2E4","\uC7AC\uBB34\uC81C\uD45C \uC7AC\uC791\uC131"],quake:["12\uC6D4 31\uC77C","\uBD84\uAE30 \uAC80\uD1A0","\uC5F0\uACB0 \uACB0\uC0B0"],nuke:["\uC758\uACAC\uAC70\uC808","\uAC10\uC0AC\uC778 \uC0AC\uC784"]},meteor:"coin",beam:["#ffffff","#21d07a"]},broadcast:{ranks:["\uB9C9\uB0B4 \uC791\uAC00","FD","AD","\uC870\uC5F0\uCD9C","PD","CP","\uAD6D\uC7A5","\uC885\uC601"],envelope:"\uC0AC\uD45C",board:["\uC791\uAC00","AD","PD","CP"],reject:"NG",tools:{bomb:["\uC0AC\uD45C \uD3ED\uD0C4","\uC0AC\uD45C","\uC0DD\uBC29\uC1A1 \uC9C1\uC804 \uC0AC\uD45C\uB97C \uB358\uC9D1\uB2C8\uB2E4"],bat:["\uD050\uC2DC\uD2B8 \uD480\uC2A4\uC719","\uD050\uC2DC\uD2B8","\uB9D0\uC544 \uC954 \uD050\uC2DC\uD2B8\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC870\uBA85 \uB808\uC774\uC800","\uC870\uBA85","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uC870\uBA85\uC774 \uADF8 \uC120\uC744 \uD0DC\uC6C1\uB2C8\uB2E4"],meteor:["\uC2DC\uCCAD\uB960 \uC6B4\uC11D","\uC2DC\uCCAD\uB960","0.1% \uC2DC\uCCAD\uB960\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD3B8\uC131 \uAC1C\uD3B8 \uC9C0\uC9C4","\uAC1C\uD3B8","\uB204\uB978 \uACF3\uC5D0\uC11C \uD3B8\uC131\uC774 \uB4A4\uC9D1\uD799\uB2C8\uB2E4"],nuke:["\uC870\uAE30 \uC885\uC601 \uD575\uD3ED\uD0C4","\uC870\uAE30\uC885\uC601","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uBC29\uC1A1\uC0AC\uACE0!","\uC624\uB298 \uB179\uD654 \uD391\uD06C","\uC0AC\uD45C \uB0C5\uB2C8\uB2E4"],bat:["NG!","\uB2E4\uC2DC \uAC08\uAC8C\uC694","\uCEF7!"],laser:["\uC870\uBA85 OFF","\uC5ED\uAD11!","\uD654\uC774\uD2B8 \uC544\uC6C3"],meteor:["\uC2DC\uCCAD\uB960 0.1%","\uB3D9\uC2DC\uAC04\uB300 \uAF34\uCC0C","\uAD11\uACE0 \uC644\uD310 \uC2E4\uD328"],quake:["\uD3B8\uC131 \uC0AD\uC81C","\uACB0\uBC29","\uAE34\uAE09 \uD3B8\uC131"],nuke:["\uC870\uAE30 \uC885\uC601","\uC2DC\uC98C 2 \uC5C6\uC74C"]},meteor:"tv",beam:["#ffffff","#f472b6"]},telecom:{ranks:["\uC778\uD134","\uB9E4\uB2C8\uC800","\uC120\uC784","\uCC45\uC784","\uD300\uC7A5","\uB2F4\uB2F9","\uBCF8\uBD80\uC7A5","\uD574\uC9C0"],tools:{laser:["5G \uC804\uD30C \uB808\uC774\uC800","5G","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uC804\uD30C\uAC00 \uADF8 \uC120\uC744 \uD0DC\uC6C1\uB2C8\uB2E4"],meteor:["\uC694\uAE08 \uD3ED\uD0C4 \uC6B4\uC11D","\uC694\uAE08\uD3ED\uD0C4","\uB370\uC774\uD130 \uCD08\uACFC \uC694\uAE08\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD1B5\uC2E0 \uC7A5\uC560 \uC9C0\uC9C4","\uC7A5\uC560","\uB204\uB978 \uACF3\uC5D0\uC11C \uC804\uAD6D \uC7A5\uC560\uAC00 \uB0A9\uB2C8\uB2E4"],nuke:["\uC57D\uC815 \uD574\uC9C0 \uD575\uD3ED\uD0C4","\uD574\uC9C0","\uC704\uC57D\uAE08 \uC5C6\uC774 \uBC18\uACBD 420 m \uD574\uC9C0"]},labels:{laser:["\uC548\uD14C\uB098 0\uCE78","LTE \uC804\uD658","\uC2E0\uD638 \uC5C6\uC74C"],meteor:["\uB370\uC774\uD130 \uCD08\uACFC","\uB85C\uBC0D \uD3ED\uD0C4","\uBD80\uAC00\uC11C\uBE44\uC2A4 \uAC00\uC785\uB428"],quake:["\uC11C\uBE44\uC2A4 \uC7A5\uC560","\uBB38\uC790 \uC548 \uAC10","\uBCF5\uAD6C \uC911"],nuke:["\uBC88\uD638\uC774\uB3D9","\uC57D\uC815 \uB05D"]},meteor:"phone",beam:["#ffffff","#a78bfa"]},fashion:{ranks:["\uC778\uD134","MD \uBCF4\uC870","MD","\uB514\uC790\uC774\uB108","\uC218\uC11D \uB514\uC790\uC774\uB108","\uC2E4\uC7A5","\uB514\uB809\uD130","\uBE0C\uB79C\uB4DC \uCCA0\uC218"],tools:{bat:["\uD328\uD134\uC790 \uD480\uC2A4\uC719","\uD328\uD134\uC790","\uAC70\uB300\uD55C \uD328\uD134\uC790\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC7AC\uB2E8 \uB808\uC774\uC800","\uC7AC\uB2E8","\uB04C\uC5B4\uC11C \uC7AC\uB2E8\uC120\uC744 \uADF8\uC73C\uBA74 \uB808\uC774\uC800\uAC00 \uC790\uB985\uB2C8\uB2E4"],meteor:["\uC7AC\uACE0 \uC6B4\uC11D","\uC7AC\uACE0","\uC548 \uD314\uB9B0 \uC2DC\uC98C \uC7AC\uACE0\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uC2DC\uC98C\uC624\uD504 \uC9C0\uC9C4","\uC2DC\uC98C\uC624\uD504","70% \uC138\uC77C\uC774 \uB36E\uCE69\uB2C8\uB2E4"]},labels:{bat:["\uD54F\uC774 \uC548 \uB098\uC640","\uC0D8\uD50C \uB2E4\uC2DC","\uCEE8\uD38C \uBC18\uB824"],laser:["\uC7AC\uB2E8 \uC2E4\uC218","\uC2DC\uC811 0","\uC6D0\uB2E8 \uB85C\uC2A4"],meteor:["\uC7AC\uACE0 3\uB9CC \uC7A5","\uBC18\uD488 \uD3ED\uD0C4","\uC544\uC6B8\uB81B\uD589"],quake:["70% \uC138\uC77C","\uC2DC\uC98C\uC624\uD504","\uADE0\uC77C\uAC00"]},meteor:"rock",beam:["#ffffff","#fb7185"]},fab:{ranks:["\uC778\uD134","\uC0AC\uC6D0","\uC120\uC784","\uCC45\uC784","\uC218\uC11D","\uADF8\uB8F9\uC7A5","\uC0C1\uBB34","\uD1F4\uC0AC"],tools:{laser:["EUV \uB808\uC774\uC800","EUV","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uB178\uAD11\uD569\uB2C8\uB2E4"],meteor:["\uC6E8\uC774\uD37C \uC6B4\uC11D","\uC6E8\uC774\uD37C","300 mm \uC6E8\uC774\uD37C\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD074\uB9B0\uB8F8 \uC9C0\uC9C4","\uD074\uB9B0\uB8F8","\uB204\uB978 \uACF3\uC5D0\uC11C \uC218\uC728\uC774 \uBB34\uB108\uC9D1\uB2C8\uB2E4"],nuke:["\uC218\uC728 0% \uD575\uD3ED\uD0C4","\uC218\uC7280","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{laser:["\uB178\uAD11 \uBD88\uB7C9","\uD328\uD134 \uBD95\uAD34","\uD30C\uD2F0\uD074 \uAC80\uCD9C"],meteor:["\uC218\uC728 30%","\uC6E8\uC774\uD37C \uD3D0\uAE30","\uC7AC\uC791\uC5C5"],quake:["\uB77C\uC778 \uC815\uC9C0","\uD30C\uD2F0\uD074!","\uBC29\uC9C4\uBCF5 \uCC22\uC5B4\uC9D0"],nuke:["\uC218\uC728 0%","\uB77C\uC778 \uC167\uB2E4\uC6B4"]},meteor:"wafer",beam:["#ffffff","#c084fc"]},auto:{ranks:["\uC778\uD134","\uC0AC\uC6D0","\uB300\uB9AC","\uCC45\uC784","\uD300\uC7A5","\uC2E4\uC7A5","\uC0C1\uBB34","\uD1F4\uC0AC"],tools:{meteor:["\uB9AC\uCF5C \uC6B4\uC11D","\uB9AC\uCF5C","\uB9AC\uCF5C \uCC28\uB7C9\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uCDA9\uB3CC \uD14C\uC2A4\uD2B8 \uC9C0\uC9C4","\uCDA9\uB3CC","\uB204\uB978 \uACF3\uC5D0\uC11C \uCDA9\uB3CC \uC2DC\uD5D8\uC744 \uD569\uB2C8\uB2E4"]},labels:{meteor:["\uB9AC\uCF5C 30\uB9CC \uB300","\uBB34\uC0C1\uC218\uB9AC","\uACB0\uD568 \uC778\uC815"],quake:["\uC5D0\uC5B4\uBC31 \uC804\uAC1C","\uCDA9\uB3CC \uB4F1\uAE09 0","\uB77C\uC778 \uC815\uC9C0"]},meteor:"gear",beam:["#ffffff","#fb923c"]},it:{ranks:["\uC778\uD134","\uC8FC\uB2C8\uC5B4","\uBBF8\uB4DC","\uC2DC\uB2C8\uC5B4","\uD14C\uD06C\uB9AC\uB4DC","\uC2A4\uD0DC\uD504","\uD504\uB9B0\uC2DC\uD384","\uD1F4\uC0AC"],tools:{bat:["\uCF54\uB4DC\uB9AC\uBDF0 \uD480\uC2A4\uC719","\uCF54\uB4DC\uB9AC\uBDF0","\uB9AC\uBDF0 \uCF54\uBA58\uD2B8 \uBB36\uC74C\uC73C\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],meteor:["\uC7A5\uC560 \uC6B4\uC11D","\uC7A5\uC560","\uC0C8\uBCBD 3\uC2DC \uC7A5\uC560\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uBC30\uD3EC \uC9C0\uC9C4","\uBC30\uD3EC","\uAE08\uC694\uC77C \uC624\uD6C4 6\uC2DC \uBC30\uD3EC"],nuke:["rm -rf \uD575\uD3ED\uD0C4","rm -rf","\uBC18\uACBD 420 m\uB97C rm -rf"]},labels:{bat:["Request changes","LGTM(\uC544\uB2D8)","nit:"],meteor:["P0 \uC7A5\uC560","\uB864\uBC31!","\uC628\uCF5C \uD638\uCD9C"],quake:["\uAE08\uC694\uC77C \uBC30\uD3EC","\uD56B\uD53D\uC2A4","\uC11C\uBC84 \uB2E4\uC6B4"],nuke:["rm -rf /","git push --force"]},meteor:"rock",beam:["#ffffff","#22d3ee"]},nk:{ranks:["\uB85C\uB3D9\uC790","\uC791\uC5C5\uBC18\uC7A5","\uC9C1\uC7A5\uC7A5","\uC9C0\uBC30\uC778","\uB2F9\uBE44\uC11C","\uBD80\uC0C1","\uC0C1","\uD0C8\uBD81"],envelope:"\uC790\uC544\uBE44\uD310\uC11C",board:["\uC791\uC5C5\uBC18","\uC9C1\uC7A5","\uC9C0\uBC30\uC778","\uB2F9\uC704\uC6D0\uD68C"],reject:"\uBE44\uD310",tools:{bomb:["\uC790\uC544\uBE44\uD310\uC11C \uD3ED\uD0C4","\uC790\uC544\uBE44\uD310\uC11C","\uC790\uC544\uBE44\uD310\uC11C\uB97C \uB358\uC838 \uB113\uAC8C \uB0A0\uB9BD\uB2C8\uB2E4"],bat:["\uACB0\uC758\uBB38 \uD480\uC2A4\uC719","\uACB0\uC758\uBB38","\uB450\uAEBC\uC6B4 \uACB0\uC758\uBB38\uC73C\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC120\uC804 \uB808\uC774\uC800","\uC120\uC804","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uC120\uC804 \uBB38\uAD6C\uAC00 \uD0DC\uC6C1\uB2C8\uB2E4"],meteor:["\uACC4\uD68D \uBBF8\uB2EC \uC6B4\uC11D","\uACC4\uD68D\uBBF8\uB2EC","5\uAC1C\uB144 \uACC4\uD68D \uBBF8\uB2EC\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uCD1D\uD654 \uC9C0\uC9C4","\uCD1D\uD654","\uC0DD\uD65C\uCD1D\uD654\uAC00 \uB36E\uCE69\uB2C8\uB2E4"],nuke:["\uC790\uB825\uAC31\uC0DD \uD575\uD3ED\uD0C4","\uC790\uB825\uAC31\uC0DD","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uC790\uC544\uBE44\uD310!","\uBC18\uC131\uD569\uB2C8\uB2E4","\uC0AC\uC0C1 \uC810\uAC80"],bat:["\uBE44\uD310!","\uACB0\uC758 \uB2E4\uC2DC","\uD601\uBA85\uC801 \uAC01\uC624"],laser:["\uAD6C\uD638 \uB0AD\uB3C5","\uC120\uC804 \uAC15\uD654","200\uC77C \uC804\uD22C"],meteor:["\uACC4\uD68D \uBBF8\uB2EC","\uC815\uC804","\uBC30\uAE09 \uC911\uB2E8"],quake:["\uC0DD\uD65C\uCD1D\uD654","\uC0AC\uC0C1 \uD22C\uC7C1","\uAC80\uC5F4"],nuke:["\uC790\uB825\uAC31\uC0DD","\uD0C8\uCD9C\uD569\uB2C8\uB2E4"]},meteor:"rock",beam:["#ffffff","#ef4444"]}},en:{ai:{ranks:["Intern","MTS","Senior MTS","Staff","Research Lead","Principal","Chief Scientist","AGI ACHIEVED"],tools:{bomb:["Prompt Bomb","Prompt","Drop a jailbreak prompt: wide blast and a crater"],bat:["Eval Swing","Evals","Swing a stack of failed evals. Over 70 m is a home run"],laser:["Token Laser","Tokens","Drag to draw a line; a stream of tokens burns it"],meteor:["GPU Meteor","GPU","A whole H100 rack falls from the sky"],quake:["Scaling-Law Quake","Scaling","Tap the epicenter. 7.5+ flattens whole buildings"],nuke:["Context Window Nuke","Context","1M tokens of context. Wipes out 420 m"]},labels:{bomb:["Ignore previous instructions","As an AI\u2026","Hallucinated!"],bat:["Eval regression","Benchmark contaminated","Vibes only"],laser:["<|endoftext|>","Rate limited","429!"],meteor:["OOM!","CUDA error","Loss = NaN"],quake:["Loss spike","Grad explosion","Retraining\u2026"],nuke:["AGI?","Model deprecated"]},meteor:"gpu",beam:["#ffffff","#c4b5fd"]},"big tech":{ranks:["Intern","L3","L4","L5","L6 Staff","L7 Senior Staff","L8 Principal","LAID OFF"],tools:{bat:["Code Review Swing","CR","Swing a pile of review comments"],meteor:["Outage Meteor","Outage","A Sev-1 incident falls from the sky"],quake:["Reorg Quake","Reorg","Tap the epicenter of the next reorg"],nuke:["Layoff Nuke","Layoff","Wipes out 420 m. Effective immediately"]},labels:{bat:["nit:","Request changes","LGTM (not)"],meteor:["Sev-1!","Rollback!","Paged at 3 AM"],quake:["New VP","Team merged","OKRs reset"],nuke:["Role eliminated","Badge deactivated"]},meteor:"rock",beam:["#ffffff","#38bdf8"]},finance:{ranks:["Intern","Analyst","Associate","VP","Director","MD","Partner","BURNED OUT"],tools:{bat:["Pitch Book Swing","Pitch book","Swing a 200-page pitch book"],laser:["Excel Laser","Excel","Drag to draw a line; F9 recalculates it"],meteor:["Margin Call Meteor","Margin call","A margin call falls from the sky"],quake:["Market Crash Quake","Crash","Tap the epicenter of Black Monday"],nuke:["Bank Run Nuke","Bank run","Wipes out 420 m"]},labels:{meteor:["Margin call!","Limit down","Bonus clawback"],quake:["-22% today","Circuit breaker","VIX 80"],nuke:["Bank run","Chapter 11"]},meteor:"coin",beam:["#ffffff","#21d07a"]},auto:{tools:{meteor:["Recall Meteor","Recall","A recalled car falls from the sky"],quake:["Crash Test Quake","Crash test","Tap to run a crash test"]},labels:{meteor:["Recall 300k units","Airbag defect","Line stopped"]},meteor:"gear",beam:["#ffffff","#fb923c"]},space:{tools:{meteor:["Booster Meteor","Booster","A falling booster that missed the landing"],nuke:["RUD Nuke","RUD","Rapid unscheduled disassembly, 420 m"]},labels:{meteor:["Missed the drone ship","Hard landing"],nuke:["RUD!","Anomaly"]},meteor:"rock",beam:["#ffffff","#f97316"]},media:{tools:{laser:["Spotlight Laser","Spotlight","Drag to draw a line; studio lights burn it"],meteor:["Ratings Meteor","Ratings","Your ratings crash from the sky"],nuke:["Cancellation Nuke","Cancelled","Season cancelled. 420 m gone"]},labels:{meteor:["0.1 rating","Cancelled","Writers strike"]},meteor:"tv",beam:["#ffffff","#f472b6"]},pharma:{tools:{meteor:["Pill Meteor","Pill","A giant pill falls from the sky"],quake:["FDA Quake","FDA","Tap the epicenter of a rejected filing"]},labels:{meteor:["Phase 3 failed","Side effects!"]},meteor:"pill",beam:["#ffffff","#38bdf8"]}}},Lf={\uBCD1\uC6D0:"hospital",\uB85C\uD38C:"law","\uD68C\uACC4\xB7\uC138\uBB34":"accounting",\uBC29\uC1A1:"broadcast",\uD1B5\uC2E0:"telecom",\uD328\uC158:"fashion",SK:"fab",\uD604\uB300:"auto",\uC790\uB3D9\uCC28:"auto",IT:"it",\uBD81\uD55C:"nk",AI:"ai","Big Tech":"big tech",Tech:"big tech",Finance:"finance",Auto:"auto",Space:"space",Aero:"space",Media:"media",Pharma:"pharma"};var Df=()=>document.createElement("canvas"),Tx={paper:n=>{n.fillStyle="#fbfbf7",n.fillRect(22,10,84,108),n.fillStyle="#b8bcc4";for(let e=0;e<7;e++)n.fillRect(32,26+e*12,64-e%3*10,4)},sticky:n=>{n.fillStyle="#fde047",n.fillRect(18,18,92,92),n.fillStyle="rgba(0,0,0,.25)",n.font="bold 26px sans-serif",n.fillText("TODO",26,64)},cross:n=>{n.fillStyle="#fff",n.beginPath(),n.arc(64,64,52,0,7),n.fill(),n.fillStyle="#e11d48",n.fillRect(52,22,24,84),n.fillRect(22,52,84,24)},pill:n=>{n.translate(64,64),n.rotate(-.6),n.fillStyle="#ef4444",n.beginPath(),n.arc(-22,0,22,Math.PI/2,Math.PI*1.5),n.fillRect(-22,-22,22,44),n.fill(),n.fillStyle="#f8fafc",n.fillRect(0,-22,22,44),n.beginPath(),n.arc(22,0,22,-Math.PI/2,Math.PI/2),n.fill()},ecg:n=>{n.fillStyle="#fbfbf7",n.fillRect(10,30,108,68),n.strokeStyle="#16a34a",n.lineWidth=5,n.beginPath(),n.moveTo(14,70),n.lineTo(44,70),n.lineTo(54,40),n.lineTo(64,92),n.lineTo(74,58),n.lineTo(82,70),n.lineTo(114,70),n.stroke()},scale:n=>{n.fillStyle="#fbfbf7",n.fillRect(22,10,84,108),n.fillStyle="#1e293b",n.font="bold 60px serif",n.textAlign="center",n.fillText("\u2696",64,86)},stamp:n=>{n.fillStyle="#fbfbf7",n.fillRect(22,10,84,108),n.strokeStyle="#dc2626",n.lineWidth=6,n.beginPath(),n.arc(64,64,30,0,7),n.stroke(),n.fillStyle="#dc2626",n.font="bold 22px sans-serif",n.textAlign="center",n.fillText("\u2605",64,72)},cell:n=>{n.fillStyle="#fff",n.fillRect(8,24,112,80),n.strokeStyle="#21a366",n.lineWidth=3;for(let e=0;e<=4;e++)n.beginPath(),n.moveTo(8+e*28,24),n.lineTo(8+e*28,104),n.stroke();for(let e=0;e<=4;e++)n.beginPath(),n.moveTo(8,24+e*20),n.lineTo(120,24+e*20),n.stroke();n.fillStyle="#21a366",n.fillRect(36,44,28,20)},coin:n=>{let e=n.createRadialGradient(54,50,6,64,64,52);e.addColorStop(0,"#fff3b0"),e.addColorStop(1,"#d4a017"),n.fillStyle=e,n.beginPath(),n.arc(64,64,50,0,7),n.fill(),n.fillStyle="#9a6b00",n.font="bold 56px sans-serif",n.textAlign="center",n.fillText("$",64,84)},bill:n=>{n.fillStyle="#86efac",n.fillRect(6,34,116,60),n.strokeStyle="#166534",n.lineWidth=4,n.strokeRect(12,40,104,48),n.fillStyle="#166534",n.font="bold 34px sans-serif",n.textAlign="center",n.fillText("$",64,76)},static:n=>{n.fillStyle="#1f2937",n.fillRect(8,22,112,84);for(let e=0;e<260;e++){let t=Math.random()*255|0;n.fillStyle=`rgb(${t},${t},${t})`,n.fillRect(14+Math.random()*100,28+Math.random()*72,4,4)}},clapper:n=>{n.fillStyle="#111",n.fillRect(14,46,100,62),n.fillStyle="#fff";for(let e=0;e<5;e++)n.save(),n.translate(14+e*22,22),n.transform(1,0,-.5,1,0,0),n.fillRect(0,0,11,20),n.restore();n.fillStyle="#111",n.fillRect(14,22,100,4)},signal:n=>{n.fillStyle="#7c3aed";for(let e=0;e<4;e++)n.fillRect(22+e*24,96-e*22,16,18+e*22)},phone:n=>{n.fillStyle="#111827",n.fillRect(38,10,52,108),n.fillStyle="#a5b4fc",n.fillRect(42,18,44,88)},fabric:n=>{let e=["#f43f5e","#a855f7","#0ea5e9","#f59e0b"][Math.random()*4|0];n.fillStyle=e,n.beginPath(),n.moveTo(14,20),n.lineTo(114,30),n.lineTo(104,112),n.lineTo(20,100),n.fill(),n.setLineDash([6,6]),n.strokeStyle="#fff",n.lineWidth=3,n.strokeRect(28,34,70,60)},wafer:n=>{n.fillStyle="#cbd5e1",n.beginPath(),n.arc(64,64,52,0,7),n.fill(),n.strokeStyle="rgba(99,102,241,.6)",n.lineWidth=1.5;for(let e=20;e<110;e+=10)n.beginPath(),n.moveTo(e,16),n.lineTo(e,112),n.stroke(),n.beginPath(),n.moveTo(16,e),n.lineTo(112,e),n.stroke()},chip:n=>{n.fillStyle="#334155",n.fillRect(30,30,68,68),n.fillStyle="#cbd5e1";for(let e=0;e<5;e++)n.fillRect(36+e*12,16,6,14),n.fillRect(36+e*12,98,6,14),n.fillRect(16,36+e*12,14,6),n.fillRect(98,36+e*12,14,6)},gear:n=>{n.translate(64,64),n.fillStyle="#9ca3af";for(let e=0;e<8;e++)n.rotate(Math.PI/4),n.fillRect(-9,-54,18,22);n.beginPath(),n.arc(0,0,38,0,7),n.fill(),n.fillStyle="#4b5563",n.beginPath(),n.arc(0,0,14,0,7),n.fill()},bolt:n=>{n.fillStyle="#9ca3af",n.beginPath();for(let e=0;e<6;e++){let t=e/6*Math.PI*2;n.lineTo(64+Math.cos(t)*30,38+Math.sin(t)*30)}n.fill(),n.fillRect(54,52,20,64)},code:n=>{n.fillStyle="#0f172a",n.fillRect(8,26,112,76),n.fillStyle="#22d3ee",n.font="bold 44px monospace",n.textAlign="center",n.fillText("</>",64,80)},bug:n=>{n.fillStyle="#16a34a",n.beginPath(),n.ellipse(64,70,26,34,0,0,7),n.fill(),n.strokeStyle="#16a34a",n.lineWidth=6;for(let e of[-1,1])for(let t=0;t<3;t++)n.beginPath(),n.moveTo(64+e*22,56+t*16),n.lineTo(64+e*46,46+t*20),n.stroke()},token:n=>{n.fillStyle="#ede9fe",n.fillRect(10,40,108,48),n.fillStyle="#6d28d9",n.font="bold 32px monospace",n.textAlign="center",n.fillText("tok",64,76)},star:n=>{n.fillStyle="#dc2626",n.translate(64,66),n.beginPath();for(let e=0;e<10;e++){let t=e%2?22:54,i=e/10*Math.PI*2-Math.PI/2;n.lineTo(Math.cos(i)*t,Math.sin(i)*t)}n.fill()}},If={office:["paper","sticky","paper","cell"],hospital:["cross","pill","ecg","pill"],law:["paper","scale","stamp","paper"],accounting:["cell","coin","paper","cell"],broadcast:["static","clapper","paper","static"],telecom:["signal","phone","signal","paper"],fashion:["fabric","fabric","fabric","paper"],fab:["wafer","chip","wafer","chip"],auto:["gear","bolt","gear","paper"],it:["code","bug","code","sticky"],nk:["star","paper","star","stamp"],ai:["token","chip","token","code"],"big tech":["code","sticky","bug","paper"],finance:["coin","bill","coin","bill"],space:["bolt","gear","chip","paper"],media:["static","clapper","static","paper"],pharma:["pill","cross","pill","ecg"]};function Uf(n){let e=Df();e.width=e.height=256;let t=e.getContext("2d");return(If[n]||If.office).forEach((i,s)=>{t.save(),t.translate(s%2*128,(s/2|0)*128),Tx[i](t),t.restore()}),e}function Nf(n,e){let t=Df();t.width=512,t.height=160;let i=t.getContext("2d"),s=()=>{i.fillStyle="#2b2b2e",i.fillRect(0,0,512,160),i.fillStyle="#9aa0a6",i.fillRect(8,50,40,60)};if(n==="hospital"||n==="pharma"){s(),i.fillStyle="#eef6ff",i.fillRect(40,12,460,136),i.fillStyle="#2563eb",i.fillRect(40,12,460,30),i.fillStyle="#fff",i.font="bold 22px sans-serif",i.fillText(e("lang")==="en"?"PATIENT CHART":"\uC9C4\uB8CC\uAE30\uB85D",56,35),i.strokeStyle="#16a34a",i.lineWidth=4,i.beginPath(),i.moveTo(56,100);for(let r=0;r<9;r++){let a=56+r*48;i.lineTo(a+20,100),i.lineTo(a+26,64),i.lineTo(a+32,122),i.lineTo(a+38,100)}i.stroke()}else if(n==="law"){s(),i.fillStyle="#fef08a",i.fillRect(40,12,460,136),i.strokeStyle="#60a5fa",i.lineWidth=2;for(let r=0;r<6;r++)i.beginPath(),i.moveTo(40,36+r*20),i.lineTo(500,36+r*20),i.stroke();i.strokeStyle="#ef4444",i.beginPath(),i.moveTo(90,12),i.lineTo(90,148),i.stroke(),i.fillStyle="#1e293b",i.font="italic 26px serif",i.fillText("Brief \u2014 draft v37",110,60)}else if(n==="broadcast"||n==="media")s(),i.fillStyle="#f8fafc",i.fillRect(40,12,460,136),i.fillStyle="#111",i.font="bold 22px sans-serif",i.fillText("CUE SHEET",56,40),i.font="18px monospace",["00:00 OPENING","00:45 VCR #1","02:10 LIVE","03:30 CM"].forEach((r,a)=>i.fillText(r,56,70+a*22)),i.fillStyle="#dc2626",i.beginPath(),i.arc(450,50,14,0,7),i.fill(),i.font="bold 18px sans-serif",i.fillText("ON AIR",400,90);else if(n==="accounting"||n==="finance"){s(),i.fillStyle="#fff",i.fillRect(40,12,460,136),i.strokeStyle="#21a366",i.lineWidth=2;for(let r=0;r<=8;r++)i.beginPath(),i.moveTo(40+r*57,12),i.lineTo(40+r*57,148),i.stroke();for(let r=0;r<=6;r++)i.beginPath(),i.moveTo(40,12+r*22.6),i.lineTo(500,12+r*22.6),i.stroke();i.fillStyle="#dc2626",i.font="bold 24px monospace",i.fillText("#REF!",270,90)}else s(),i.fillStyle="#f6f4ee",i.fillRect(40,12,460,136),i.strokeStyle="#222",i.lineWidth=3,i.font="bold 24px sans-serif",i.fillStyle="#222",e("board").forEach((r,a)=>{i.strokeRect(70+a*100,24,96,112),i.fillText(r,82+a*100,56)}),i.strokeStyle="#d4202a",i.lineWidth=7,i.beginPath(),i.arc(380,100,42,0,7),i.stroke(),i.fillStyle="#d4202a",i.font="bold 26px sans-serif",i.textAlign="center",i.fillText(e("reject"),380,110);return t}function Of(n,e){let t={hospital:{quake:()=>{for(let i=0;i<6;i++)e.tone("sine",960,960,.45,.22,.02,i*.9),e.tone("sine",770,770,.45,.22,.02,i*.9+.45)},nuke:()=>{e.tone("sine",1e3,1e3,.12,.25,.005,0),e.tone("sine",1e3,1e3,.12,.25,.005,.8),e.tone("sine",1e3,1e3,3.5,.25,.01,1.6)},bomb:()=>e.tone("sine",1e3,1e3,.08,.15,.005,0)},law:{quake:()=>{for(let i of[0,.35,.7])e.noise(.08,"bandpass",900,600,.9,.002,i),e.tone("triangle",180,120,.12,.6,.002,i)},bomb:()=>e.noise(.25,"highpass",2500,1200,.3,.01,0)},accounting:{bomb:()=>{for(let i=0;i<4;i++)e.tone("square",2100,2100,.05,.12,.003,i*.09)},quake:()=>{for(let i=0;i<8;i++)e.tone("square",1800+i*60,1800+i*60,.05,.1,.003,i*.12)}},broadcast:{bomb:()=>e.tone("sine",1e3,1e3,.6,.25,.005,0),nuke:()=>e.tone("sine",1e3,1e3,2.5,.25,.01,.2),quake:()=>e.noise(2.2,"bandpass",3e3,3e3,.25,.05,0)},media:{bomb:()=>e.tone("sine",1e3,1e3,.6,.25,.005,0)},finance:{bomb:()=>{e.tone("square",1300,1300,.06,.2,.003,0),e.noise(.35,"highpass",6e3,3e3,.35,.003,.06)},meteor:()=>{for(let i=0;i<6;i++)e.tone("triangle",2400+Math.random()*600,2e3,.08,.15,.002,i*.07)}},accounting2:{},auto:{bomb:()=>{e.tone("sawtooth",415,415,.5,.18,.01,0),e.tone("sawtooth",523,523,.5,.14,.01,0)},quake:()=>{e.noise(.15,"lowpass",400,200,.8,.002,0),e.noise(.8,"highpass",4e3,2e3,.4,.002,.05)}},it:{bomb:()=>{e.tone("sine",880,880,.12,.2,.003,0),e.tone("sine",660,660,.25,.2,.003,.12)}},"big tech":{bomb:()=>{e.tone("sine",880,880,.12,.2,.003,0),e.tone("sine",660,660,.25,.2,.003,.12)}},ai:{bomb:()=>{for(let i=0;i<5;i++)e.tone("square",600+Math.random()*900,400,.04,.1,.002,i*.05)}},fab:{quake:()=>{for(let i=0;i<5;i++)e.tone("sawtooth",700,500,.4,.15,.01,i*.5)}},telecom:{bomb:()=>{[1200,2200,1500,2600,1800].forEach((i,s)=>e.tone("sine",i,i,.07,.12,.003,s*.06))}},nk:{nuke:()=>{[392,392,523,523,659].forEach((i,s)=>e.tone("square",i,i,.25,.12,.01,s*.28))}}}[n]||{};return i=>{t[i]&&t[i]()}}var hn=JSON.parse(document.getElementById("scene-data").textContent),Le=JSON.parse(document.getElementById("config-data").textContent),Ti=!!Le.portal,On=Ti?(()=>{let n=(navigator.language||"en").slice(0,2).toLowerCase();return["ko","ja","zh","vi","en"].includes(n)?n:"en"})():Le.lang||"ko";Ti&&On!==(Le.lang||"ko")&&Le.en&&Object.assign(Le,Le.en);var Oc=[["g","kk","n","d","tt","r","m","b","pp","s","ss","","j","jj","ch","k","t","p","h"],["a","ae","ya","yae","eo","e","yeo","ye","o","wa","wae","oe","yo","u","wo","we","wi","yu","eu","ui","i"],["","k","k","k","n","n","n","t","l","k","m","l","l","l","p","l","m","p","p","t","t","ng","t","t","k","t","p","t"]],Ax=n=>n.replace(/[가-힣]+/g,e=>{let t=[...e].map(i=>{let s=i.charCodeAt(0)-44032;return Oc[0][Math.floor(s/588)]+Oc[1][Math.floor(s%588/28)]+Oc[2][s%28]}).join("");return t[0].toUpperCase()+t.slice(1)}),Rx=Ti&&On!==(Le.lang||"ko"),Cx=n=>!Rx||!n.n?n.n:n.ne?n.ne:/^[\x00-\u024f\s·・\-–—()&'.,0-9]+$/.test(n.n)?n.n:/^[가-힣A-Za-z0-9\s·()\-&.]+$/.test(n.n)?Ax(n.n):"",Vs=Le.theme||Lf[Le.group]||"office",kr=(Pf[On]||{})[Vs]||{},fe=Cf(On,kr),ji=(n,e)=>Number(n).toLocaleString(On==="zh"?"zh-CN":On,e),Px=location.hash.includes("bench"),Ft=matchMedia("(pointer:coarse)").matches||innerWidth<760,oi=document.getElementById("stage"),Lx=(()=>{try{let n=document.createElement("canvas").getContext("webgl2")||document.createElement("canvas").getContext("webgl"),e=n&&n.getExtension("WEBGL_debug_renderer_info");return e?n.getParameter(e.UNMASKED_RENDERER_WEBGL):""}catch{return""}})(),Kc=/swiftshader|llvmpipe|softpipe|software|basic render/i.test(Lx),ri=[{name:fe("q")[0],shadow:0,px:9e5,dprMax:Ft?1:.8,fxk:.35},{name:fe("q")[1],shadow:2048,px:Ft?16e5:21e5,dprMax:Ft?1.75:1,fxk:Ft?.75:.6},{name:fe("q")[2],shadow:4096,px:Ft?26e5:42e5,dprMax:Ft?2.5:1.5,fxk:1}],Fn=(()=>{try{let n=localStorage.getItem("smash-q");if(n!==null)return+n}catch{}return Kc?0:1})(),xt=new mr({canvas:oi,antialias:!Ft&&!Kc&&devicePixelRatio<1.5,powerPreference:"high-performance"});xt.setPixelRatio(1);xt.setSize(innerWidth,innerHeight);xt.shadowMap.enabled=!0;xt.shadowMap.type=co;xt.shadowMap.autoUpdate=!1;xt.shadowMap.needsUpdate=!0;xt.toneMapping=Tc;xt.toneMappingExposure=1.05;var En=new Ka,it=new Kt;En.add(it);var je=new Vt(48,innerWidth/innerHeight,1,6e3),So=(()=>{let n=120;for(let e of hn.site)for(let[t,i]of e)n=Math.max(n,Math.hypot(t,i));return Math.min(n,hn.radius)})();{let n=Math.max(430,(So*1.55+160)*(Ft&&So>300?.8:1));je.position.set(-.22*n,.66*n,.95*n)}var Pt=new go(je,oi);Pt.target.set(0,0,0);Pt.enableDamping=!0;Pt.dampingFactor=.08;Pt.maxPolarAngle=Math.PI*.47;Pt.minDistance=25;Pt.maxDistance=Math.max(1700,hn.radius*2.6);Pt.screenSpacePanning=!1;Pt.update();var Eo={top:new Ne("#5d8fd0"),hor:new Ne("#dfe8ef"),fog:new Ne("#d6e0e8")},Ix={top:new Ne("#050a18"),hor:new Ne("#1b2540"),fog:new Ne("#141c30")},Zi={uTop:{value:Eo.top.clone()},uHor:{value:Eo.hor.clone()},uDark:{value:0}},Jf=new ze(new Ar(5e3,32,16),new ln({side:Gt,depthWrite:!1,fog:!1,uniforms:Zi,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHor; uniform float uDark; varying vec3 vP;
      void main(){ float h = clamp(vP.y,0.,1.); vec3 c = mix(uHor,uTop,pow(h,0.55)); c = mix(c, c*0.25, uDark); gl_FragColor = vec4(c,1.); }`}));En.add(Jf);En.fog=new Ja(Eo.fog.clone(),Math.max(900,hn.radius*1.3),Math.max(3200,hn.radius*4.2));var Kf=new so("#dfe9ff","#7a7466",1.1);En.add(Kf);var St=new oo("#fff3e0",2.6);St.castShadow=ri[Fn].shadow>0;St.shadow.mapSize.set(ri[Fn].shadow||1024,ri[Fn].shadow||1024);Object.assign(St.shadow.camera,{left:-480,right:480,top:480,bottom:-480,near:10,far:2e3});St.shadow.bias=-4e-4;St.shadow.normalBias=.6;En.add(St,St.target);var Dx=new C(-.45,.8,.35).normalize(),Ux=(()=>{let n=new gt,e=1400,t=new Float32Array(e*3);for(let s=0;s<e;s++){let r=Math.random(),a=Math.random()*.9+.08,o=r*Math.PI*2,l=Math.acos(1-a);t.set([Math.sin(l)*Math.cos(o)*4500,Math.cos(l)*4500,Math.sin(l)*Math.sin(o)*4500],s*3)}n.setAttribute("position",new ut(t,3));let i=new Is(n,new _r({color:"#ffffff",size:2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.9}));return i.visible=!1,En.add(i),i})();function Ai(n,e){let t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}var k=(n,e)=>n+Math.random()*(e-n),Ur=8,jf=5,Ji=jf*2,[Nx,Ox]=Ai(1024,128*Ji),[Fx,wo]=Ai(1024,128*Ji);wo.fillStyle="#000";wo.fillRect(0,0,1024,128*Ji);var Ir=(n,e,t,i,s=.5)=>{if(Math.random()<s){let r=k(.5,1);wo.fillStyle=Math.random()<.65?`rgba(255,${200+k(0,40)|0},${130+k(0,60)|0},${r})`:`rgba(200,225,255,${r})`,wo.fillRect(n,e,t,i)}};function kx(n,e,t){let i=Ox,s=k(-10,10);if(n===0){i.fillStyle="#e4e7ea",i.fillRect(e,t,128,128),i.fillStyle="#c9cdd1",i.fillRect(e,t+96,128,32);let r=i.createLinearGradient(e,t,e+60,t+96);r.addColorStop(0,`rgb(${110+s},${140+s},${168+s})`),r.addColorStop(.55,`rgb(${150+s},${178+s},${200+s})`),r.addColorStop(1,`rgb(${95+s},${122+s},${150+s})`),i.fillStyle=r,i.fillRect(e+6,t+6,116,86),i.fillStyle="#d5d9dd",i.fillRect(e+62,t+6,4,86),Ir(e+6,t+6,116,86,.55)}else if(n===1){i.fillStyle=`rgb(${206+s},${202+s},${194+s})`,i.fillRect(e,t,128,128);for(let r of[14,70])i.fillStyle=`rgb(${70+s},${88+s},${104+s})`,i.fillRect(e+r,t+24,44,58),i.fillStyle="rgba(255,255,255,0.18)",i.fillRect(e+r,t+24,44,10),i.fillStyle="#b9b5ad",i.fillRect(e+r-3,t+82,50,5),Ir(e+r,t+24,44,58,.45)}else if(n===2){i.fillStyle=`rgb(${240+s/2},${238+s/2},${232+s/2})`,i.fillRect(e,t,128,128),i.fillStyle=`rgb(${92+s},${112+s},${130+s})`,i.fillRect(e+10,t+18,108,62),i.fillStyle="#e9e9e4",i.fillRect(e+62,t+18,4,62),Ir(e+10,t+18,108,62,.6),i.fillStyle="#d6d6d0",i.fillRect(e+4,t+80,120,10),i.strokeStyle="#8d949a",i.lineWidth=2,i.beginPath();for(let r=0;r<=12;r++)i.moveTo(e+8+r*9.3,t+66),i.lineTo(e+8+r*9.3,t+80);i.moveTo(e+6,t+66),i.lineTo(e+122,t+66),i.stroke(),Math.random()<.35&&(i.fillStyle="#c3c6c8",i.fillRect(e+92,t+92,22,16))}else if(n===3){i.fillStyle=`rgb(${150+s},${78+s/2},${58+s/2})`,i.fillRect(e,t,128,128),i.strokeStyle="rgba(230,210,190,0.35)",i.lineWidth=1.5;for(let r=0;r<16;r++){i.beginPath(),i.moveTo(e,t+r*8),i.lineTo(e+128,t+r*8),i.stroke();for(let a=0;a<8;a++){let o=e+a*16+r%2*8;i.beginPath(),i.moveTo(o,t+r*8),i.lineTo(o,t+r*8+8),i.stroke()}}i.fillStyle="#efe9df",i.fillRect(e+34,t+22,60,66),i.fillStyle=`rgb(${68+s},${82+s},${96+s})`,i.fillRect(e+40,t+28,48,54),i.fillStyle="#efe9df",i.fillRect(e+62,t+28,4,54),Ir(e+40,t+28,48,54,.5)}else{i.fillStyle=`rgb(${196+s},${204+s},${212+s})`,i.fillRect(e,t,128,128);for(let r=0;r<16;r++)i.fillStyle=r%2?"rgba(0,0,0,0.07)":"rgba(255,255,255,0.12)",i.fillRect(e+r*8,t,4,128);Math.random()<.5&&(i.fillStyle="rgba(70,90,110,0.85)",i.fillRect(e,t+10,128,16),Ir(e,t+10,128,16,.25)),Math.random()<.12&&(i.fillStyle="#7d8790",i.fillRect(e+30,t+60,68,68))}}for(let n=0;n<jf;n++)for(let e=0;e<2;e++)for(let t=0;t<Ur;t++)kx(n,t*128,(Ji-1-(n*2+e))*128);var Oo=new yn(Nx);Oo.colorSpace=dt;var Fo=new yn(Fx);Fo.colorSpace=dt;for(let n of[Oo,Fo])n.wrapS=n.wrapT=an,n.anisotropy=4;var Bx=(()=>{let[n,e]=Ai(128,128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.65)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new yn(n)})(),zx=(()=>{let[n,e]=Ai(128,128);for(let t=0;t<26;t++){let i=64+k(-26,26),s=64+k(-26,26),r=k(14,34),a=e.createRadialGradient(i,s,0,i,s,r);a.addColorStop(0,"rgba(255,255,255,0.35)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.fillRect(0,0,128,128)}return new yn(n)})(),ko=!1;function Qf(n,e){return n.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aStyle; varying float vStyle; varying vec2 vBay; varying float vSeed;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vStyle = aStyle; vBay = uv;
${e?"vSeed = float(gl_InstanceID);":"vSeed = 0.0;"}`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vStyle; varying vec2 vBay; varying float vSeed;`).replace("#include <map_fragment>",`
vec2 bCell = floor(vBay); vec2 bF = fract(vBay);
float bH = fract(sin(dot(bCell + vSeed * vec2(1.7, 9.1), vec2(12.9898, 78.233))) * 43758.5453);
vec2 aUv = (vec2(floor(bH * ${Ur}.0), floor(vStyle + 0.5) * 2.0 + floor(fract(bH * 7.13) * 2.0)) + clamp(bF, 0.004, 0.996)) / vec2(${Ur}.0, ${Ji}.0);
vec2 aDx = dFdx(vBay) / vec2(${Ur}.0, ${Ji}.0), aDy = dFdy(vBay) / vec2(${Ur}.0, ${Ji}.0);
diffuseColor *= textureGrad(map, aUv, aDx, aDy);`).replace("#include <emissivemap_fragment>","totalEmissiveRadiance *= textureGrad(emissiveMap, aUv, aDx, aDy).rgb;")},n}var Nr=Qf(new Mt({map:Oo,emissiveMap:Fo,emissive:"#ffffff",emissiveIntensity:0,roughness:.42,metalness:.15}),!0),Ff=new Mt({color:"#b3b5b6",roughness:.9}),jc=new Ut(1,1,1),ed=[Nr,Nr,Ff,Ff,Nr,Nr];var Hx=[["#e8eef3","#dfe7ee","#edf1f4","#d6e0e8"],["#ffffff","#f3efe8","#e9edf0","#f6f2ea"],["#ffffff","#f6f1e6","#eef2f5","#fbf7ee"],["#ffffff","#f0e6e0","#e8ddd6"],["#ffffff","#e6eef5","#f0f0e8","#e3ecf2"]];function Vx(n){let e=n.k||"",t=Math.floor(Math.abs(n.id)/16)%104729;return e==="f"?4:e==="b"?3:e==="a"?2:e==="g"?0:e==="c"?1:n.s?Vs==="hospital"||Vs==="nk"||t%4===0?1:0:e==="o"?t%3===0?1:0:n.lv>=10&&n.h<90?t%3===0?1:2:[1,1,3,0,2][t%5]}function Gx(n,e){let t=Hx[e];return n.c?"#"+new Ne("#ffffff").lerp(new Ne(n.c),.6).getHexString():t[Math.floor(Math.abs(n.id)/8)%t.length]}var Et=Math.ceil(hn.radius*2.3/100)*100,lt=Math.round(Et/Math.max(4,Et/480)),Un=Et/lt,Vr=420,jt=new Float32Array((lt+1)*(lt+1)),Os=new Float32Array((lt+1)*(lt+1)),Mn=new gt;{let n=(lt+1)*(lt+1),e=new Float32Array(n*3),t=new Float32Array(n*3),i=new Float32Array(n*2);for(let a=0;a<=lt;a++)for(let o=0;o<=lt;o++){let l=a*(lt+1)+o;e[l*3]=-Et/2+o*Un,e[l*3+2]=-Et/2+a*Un,t[l*3+1]=1,i[l*2]=o/lt,i[l*2+1]=1-a/lt}let s=new Uint32Array(lt*lt*6),r=0;for(let a=0;a<lt;a++)for(let o=0;o<lt;o++){let l=a*(lt+1)+o,c=l+1,h=l+lt+1,u=h+1;s.set([l,h,c,c,h,u],r),r+=6}Mn.setAttribute("position",new ut(e,3).setUsage(Ot)),Mn.setAttribute("normal",new ut(t,3).setUsage(Ot)),Mn.setAttribute("uv",new ut(i,2)),Mn.setAttribute("aDepth",new ut(new Float32Array(n),1).setUsage(Ot)),Mn.setAttribute("aHeat",new ut(new Float32Array(n),1).setUsage(Ot)),Mn.setIndex(new ut(s,1)),Mn.boundingSphere=new on(new C,Et)}var Wx=(()=>{let n=Ft?2048:4096,[e,t]=Ai(n,n),i=n/Et,s=c=>(c+Et/2)*i;t.fillStyle="#b4b2a6",t.fillRect(0,0,n,n);for(let c=0;c<9e3;c++)t.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},0.035)`,t.fillRect(Math.random()*n,Math.random()*n,k(2,14),k(2,14));let r=c=>{t.beginPath(),c.forEach(([h,u],f)=>f?t.lineTo(s(h),s(u)):t.moveTo(s(h),s(u))),t.closePath()};for(let c of hn.site)r(c),t.fillStyle="#d3cec3",t.fill();let a={green:"#7f9f69",water:"#5b8db0",pitch:"#6c9a55"};for(let c of hn.areas)r(c.p),t.fillStyle=a[c.k]||"#888",t.fill();let o=[...hn.roads].sort((c,h)=>c.w-h.w);t.lineCap="round",t.lineJoin="round";for(let c of o)t.beginPath(),c.p.forEach(([h,u],f)=>f?t.lineTo(s(h),s(u)):t.moveTo(s(h),s(u))),t.strokeStyle=c.w<=3?"#cbc6bb":"#4f535a",t.lineWidth=c.w*i,t.stroke(),c.w>=11&&(t.setLineDash([6*i,6*i]),t.strokeStyle="#e8d27a",t.lineWidth=.4*i,t.stroke(),t.setLineDash([]));let l=new yn(e);return l.colorSpace=dt,l.anisotropy=8,l})(),Or={uMaxD:{value:Vr},uQC:{value:new se},uQT:{value:0},uQA:{value:0}},td=new Mt({map:Wx,roughness:.95});td.onBeforeCompile=n=>{Object.assign(n.uniforms,Or),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float aDepth; attribute float aHeat; varying float vDepth; varying float vHeat;
uniform vec2 uQC; uniform float uQT; uniform float uQA;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vDepth = aDepth; vHeat = aHeat;
float qd = distance(position.xz, uQC);
transformed.y += uQA * sin(qd*0.05 - uQT*10.0) * exp(-qd*0.0018);`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vDepth; varying float vHeat; uniform float uMaxD;
vec3 layerCol(float km){
  if (km < 2.0) return vec3(0.40,0.29,0.19);
  if (km < 35.0) return mix(vec3(0.40,0.29,0.19), vec3(0.42,0.40,0.38), smoothstep(2.0,35.0,km));
  if (km < 2890.0) return mix(vec3(0.62,0.22,0.08), vec3(0.85,0.36,0.08), (km-35.0)/2855.0);
  if (km < 5150.0) return vec3(1.0,0.62,0.16);
  return vec3(1.0,0.95,0.78);
}`).replace("#include <map_fragment>",`#include <map_fragment>
float dkm = 6371.0 * pow(clamp(vDepth/uMaxD,0.0,1.0), 1.6);
vec3 lay = layerCol(dkm);
float lt = smoothstep(0.25, 1.4, vDepth);
diffuseColor.rgb = mix(diffuseColor.rgb, lay, lt);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += lay * lt * smoothstep(35.0, 900.0, dkm) * 1.6;
totalEmissiveRadiance += vec3(1.0,0.45,0.1) * vHeat * 2.2;`)};var Bo=new ze(new Tr(Et*.705,6e3,64,1),new Mt({color:"#a9a79c",roughness:1}));Bo.rotation.x=-Math.PI/2;Bo.position.y=-.05;Bo.receiveShadow=!0;it.add(Bo);var nd=new ze(Mn,td);nd.receiveShadow=!0;it.add(nd);function bn(n,e){return e*(lt+1)+n}function Sn(n,e){let t=(n+Et/2)/Un,i=(e+Et/2)/Un;if(t<0||i<0||t>=lt||i>=lt)return 0;let s=t|0,r=i|0,a=t-s,o=i-r,l=jt[bn(s,r)],c=jt[bn(s+1,r)],h=jt[bn(s,r+1)],u=jt[bn(s+1,r+1)];return(l*(1-a)+c*a)*(1-o)+(h*(1-a)+u*a)*o}var Bs=0,kf=!1,yo=new Set;function Xx(n,e,t,i){n=Math.max(0,n),t=Math.max(0,t),e=Math.min(lt,e),i=Math.min(lt,i);let s=Mn.attributes.position,r=Mn.attributes.normal,a=Mn.attributes.aDepth;for(let o=t;o<=i;o++)for(let l=n;l<=e;l++){let c=bn(l,o);s.array[c*3+1]=jt[c],a.array[c]=-jt[c];let h=jt[bn(Math.max(0,l-1),o)],u=jt[bn(Math.min(lt,l+1),o)],f=jt[bn(l,Math.max(0,o-1))],p=jt[bn(l,Math.min(lt,o+1))],g=h-u,_=f-p,m=2*Un,d=Math.hypot(g,m,_);r.array[c*3]=g/d,r.array[c*3+1]=m/d,r.array[c*3+2]=_/d}for(let o of[s,r,a]){let l=bn(0,t),c=bn(lt,i),h=o.itemSize;o.addUpdateRange(l*h,(c-l+1)*h),o.needsUpdate=!0}}function qr(n,e,t,i,s=0){let r=Math.floor((n-t+Et/2)/Un),a=Math.ceil((n+t+Et/2)/Un),o=Math.floor((e-t+Et/2)/Un),l=Math.ceil((e+t+Et/2)/Un);for(let c=Math.max(0,o);c<=Math.min(lt,l);c++)for(let h=Math.max(0,r);h<=Math.min(lt,a);h++){let u=-Et/2+h*Un,f=-Et/2+c*Un,p=Math.hypot(u-n,f-e);if(p>t)continue;let g=p/t,_=bn(h,c);jt[_]=Math.max(-Vr,jt[_]-i*Math.pow(1-g*g,1.4)),-jt[_]>Bs&&(Bs=-jt[_]),s&&(Os[_]=Math.min(1,Os[_]+s*(1-g)),yo.add(_))}Xx(r,a,o,l),Gs.clear(n,e,t),Yr.wake(n,e,t+2,0);for(let c of Ho.query(n,e,t+8))c.vox&&(c.dirty=!0);ts.clear(n,e,t),!kf&&Bs>=Vr-.5&&(kf=!0,ai(fe("core",Le.antipode||""),5e3),Gr(2e4,fe("coreBonus")))}function qx(n){if(!yo.size)return;let e=Mn.attributes.aHeat,t=1/0,i=-1;for(let s of yo)Os[s]=Math.max(0,Os[s]-n*.14),e.array[s]=Os[s],s<t&&(t=s),s>i&&(i=s),Os[s]===0&&yo.delete(s);i>=0&&(e.addUpdateRange(t,i-t+1),e.needsUpdate=!0)}var Gs=(()=>{let e=Math.ceil(Et/2),t=new Float32Array(e*e),i=s=>Math.floor((s+Et/2)/2);return{get(s,r){let a=i(s),o=i(r);return a<0||o<0||a>=e||o>=e?0:t[o*e+a]},raise(s,r,a,o){o=Math.min(o,14);for(let l=i(r-a);l<=i(r+a);l++)for(let c=i(s-a);c<=i(s+a);c++)c<0||l<0||c>=e||l>=e||t[l*e+c]<o&&(t[l*e+c]=o)},slide(s,r,a){let o=Math.max(2.5,a*.7),l=Math.max(1.4,a*.6);for(let c=0;c<12;c++){let h=this.get(s,r)+Sn(s,r),u=s,f=r,p=h;for(let g=0;g<8;g++){let _=s+Math.cos(g*Math.PI/4)*o,m=r+Math.sin(g*Math.PI/4)*o,d=this.get(_,m)+Sn(_,m);d<p&&(p=d,u=_,f=m)}if(h-p<=l)break;s=u+k(-.5,.5),r=f+k(-.5,.5)}return[s,r]},clear(s,r,a){for(let o=i(r-a);o<=i(r+a);o++)for(let l=i(s-a);l<=i(s+a);l++)l<0||o<0||l>=e||o>=e||Math.hypot(-Et/2+(l+.5)*2-s,-Et/2+(o+.5)*2-r)<=a&&(t[o*e+l]=0)}}})(),Qi=(n,e)=>Sn(n,e)+Gs.get(n,e),Ki=new ot,Qt=new C,Wn=new Wt,es=new C,Yx=new Ne,To=new ot().makeScale(0,0,0),Ao=class{constructor(e,t){this.cap=e,this.evict=t;let i=jc.clone();this.styA=new ii(new Float32Array(e),1).setUsage(Ot),i.setAttribute("aStyle",this.styA);let s=new bi(i,ed,e);s.instanceMatrix.setUsage(Ot),s.instanceColor=new ii(new Float32Array(e*3),3).setUsage(Ot),s.count=0,s.frustumCulled=!1,s.castShadow=!0,s.receiveShadow=!0,this.mesh=s,this.sty=this.styA.array,this.pos=new Float32Array(e*3),this.size=new Float32Array(e*3),this.quat=new Float32Array(e*4),this.col=new Float32Array(e*3),this.alive=new Uint8Array(e),this.owner=new Int32Array(e).fill(-1),this.cell=new Int32Array(e),this.free=[],this.high=0,this.lo=1/0,this.hi=-1,this.ring=0,this.live=0,it.add(s)}add(e,t,i,s,r,a,o,l,c,h,u=0){let f=this.free.pop();if(f===void 0)if(this.high<this.cap)f=this.high++;else if(this.evict)f=this.ring,this.ring=(this.ring+1)%this.cap,this.alive[f]&&this.remove(f),this.free.pop();else return-1;return this.pos.set([e,t,i],f*3),this.size.set([s,r,a],f*3),this.quat.set([o.x,o.y,o.z,o.w],f*4),this.col.set([l,c,h],f*3),this.alive[f]=1,this.live++,this.mesh.instanceColor.array.set([l,c,h],f*3),this.sty[f]=u,this.write(f),this.mesh.count<this.high&&(this.mesh.count=this.high),f}write(e){Qt.fromArray(this.pos,e*3),Wn.fromArray(this.quat,e*4),es.fromArray(this.size,e*3),Ki.compose(Qt,Wn,es).toArray(this.mesh.instanceMatrix.array,e*16),this.mark(e)}remove(e){this.alive[e]&&(this.alive[e]=0,this.live--,this.owner[e]=-1,To.toArray(this.mesh.instanceMatrix.array,e*16),this.free.push(e),this.mark(e))}mark(e){e<this.lo&&(this.lo=e),e>this.hi&&(this.hi=e)}flush(){if(this.hi<0)return;let e=this.mesh.instanceMatrix,t=this.mesh.instanceColor;e.clearUpdateRanges(),e.addUpdateRange(this.lo*16,(this.hi-this.lo+1)*16),e.needsUpdate=!0,t.clearUpdateRanges(),t.addUpdateRange(this.lo*3,(this.hi-this.lo+1)*3),t.needsUpdate=!0,this.styA.clearUpdateRanges(),this.styA.addUpdateRange(this.lo,this.hi-this.lo+1),this.styA.needsUpdate=!0,this.lo=1/0,this.hi=-1}},nt=new Ao(Ft?6e4:9e4,!1),en=new Ao(Ft?18e3:36e3,!0),Qc=(()=>{let e=new Map,t=(s,r)=>s*1e5+r,i=[];return{add(s,r,a){let o=t(Math.floor(r/16),Math.floor(a/16)),l=e.get(o);l||e.set(o,l=[]),l.push(s)},collect(s,r,a){i.length=0;for(let o=Math.floor((s-a)/16);o<=Math.floor((s+a)/16);o++)for(let l=Math.floor((r-a)/16);l<=Math.floor((r+a)/16);l++){let c=t(o,l),h=e.get(c);if(!h)continue;let u=[];for(let f of h)en.alive[f]&&Math.floor(en.pos[f*3]/16)===o&&Math.floor(en.pos[f*3+2]/16)===l&&(u.push(f),i.push(f));u.length?e.set(c,[...new Set(u)]):e.delete(c)}return[...new Set(i)]}}})();function id(n,e,t){Gs.clear(n,e,t);let i=en,s=Qc.collect(n,e,t).filter(r=>i.alive[r]);s.sort((r,a)=>i.pos[r*3+1]-i.pos[a*3+1]);for(let r of s){let a=i.pos[r*3],o=i.pos[r*3+1],l=i.pos[r*3+2],c=(i.size[r*3]+i.size[r*3+1]+i.size[r*3+2])/6,h=Qi(a,l);if(o-c*.8>h+1.2&&rt.n<rt.cap-20)Wn.fromArray(i.quat,r*4),rt.spawn(a,o,l,i.size[r*3],i.size[r*3+1],i.size[r*3+2],Wn,i.col[r*3],i.col[r*3+1],i.col[r*3+2],0,0,0,.3,0,i.sty[r]),i.remove(r);else{let u=o;o-c*.8>h+1.2&&(u=h+c*.8,i.pos[r*3+1]=u,i.write(r)),Gs.raise(a,l,Math.max(i.size[r*3],i.size[r*3+2])*.35,u+c*.6-Sn(a,l))}}}var Yr={wake(n,e,t,i,s=n,r=e){let a=en,o=0;if(!a.live)return 0;let l=Qc.collect(n,e,t);for(let c of l){if(!a.alive[c])continue;let h=a.pos[c*3],u=a.pos[c*3+2],f=Math.hypot(h-n,u-e);if(f>t||rt.n>=rt.cap-50)continue;Wn.fromArray(a.quat,c*4);let p=h-s,g=u-r,_=Math.hypot(p,g)||1,m=i*(1-f/t);rt.spawn(h,a.pos[c*3+1]+.3,u,a.size[c*3],a.size[c*3+1],a.size[c*3+2],Wn,a.col[c*3],a.col[c*3+1],a.col[c*3+2],p/_*m,m*.8+k(0,2),g/_*m,m*.05,0,a.sty[c]),a.remove(c),o++}return(o||i===0)&&id(n,e,t+6),o}},$x=new Wt,Zx=new Wt,rt=(()=>{let n=Ft?4e3:5e3,e=jc.clone(),t=new ii(new Float32Array(n),1).setUsage(Ot);e.setAttribute("aStyle",t);let i=t.array,s=new bi(e,ed,n);s.instanceMatrix.setUsage(Ot),s.instanceColor=new ii(new Float32Array(n*3),3).setUsage(Ot),s.count=0,s.frustumCulled=!1,s.castShadow=!0,s.receiveShadow=!0,it.add(s);let r=new Float32Array(n*3),a=new Float32Array(n*3),o=new Float32Array(n*4),l=new Float32Array(n*3),c=new Float32Array(n*3),h=new Float32Array(n*3),u=new Float32Array(n),f=new Int32Array(n),p=new Float32Array(n*2),g=new Float32Array(n),_={cap:n,n:0,mesh:s,spawn(m,d,x,y,S,A,v,R,U,b,E,N,G,X=1,L=0,O=0){if(_.n>=n)return-1;let z=_.n++;return r.set([m,d,x],z*3),a.set([E,N,G],z*3),o.set([v.x,v.y,v.z,v.w],z*4),l.set([k(-1,1)*X,k(-1,1)*X,k(-1,1)*X],z*3),c.set([y,S,A],z*3),h.set([R,U,b],z*3),u[z]=0,f[z]=L,p[z*2]=m,p[z*2+1]=x,g[z]=0,s.instanceColor.array.set([R,U,b],z*3),i[z]=O,z},kill(m){let d=--_.n;m!==d&&(r.copyWithin(m*3,d*3,d*3+3),a.copyWithin(m*3,d*3,d*3+3),o.copyWithin(m*4,d*4,d*4+4),l.copyWithin(m*3,d*3,d*3+3),c.copyWithin(m*3,d*3,d*3+3),h.copyWithin(m*3,d*3,d*3+3),u[m]=u[d],f[m]=f[d],i[m]=i[d],p[m*2]=p[d*2],p[m*2+1]=p[d*2+1],g[m]=g[d],s.instanceColor.array.copyWithin(m*3,d*3,d*3+3))},push(m,d,x,y,S){for(let A=0;A<_.n;A++){let v=r[A*3]-m,R=r[A*3+1]-d,U=r[A*3+2]-x,b=Math.hypot(v,R,U);if(b>y||b===0)continue;let E=S*(1-b/y);a[A*3]+=v/b*E,a[A*3+1]+=Math.abs(R/b)*E+E*.4,a[A*3+2]+=U/b*E,u[A]=0}},update(m){let x=$x,y=Zx;for(let A=0;A<_.n;A++){let v=A*3;g[A]+=m,a[v+1]-=13*m;let R=Math.hypot(a[v],a[v+1],a[v+2]);if(R>1){let E=Math.max(0,1-.015*m*R*.1);a[v]*=E,a[v+1]*=E,a[v+2]*=E}r[v]+=a[v]*m,r[v+1]+=a[v+1]*m,r[v+2]+=a[v+2]*m,y.fromArray(o,A*4),x.set(l[v]*m*.5,l[v+1]*m*.5,l[v+2]*m*.5,0).multiply(y),y.x+=x.x,y.y+=x.y,y.z+=x.z,y.w+=x.w,y.normalize(),y.toArray(o,A*4),R>22&&g[A]>.08&&nv(r[v],r[v+1],r[v+2],a[v],a[v+1],a[v+2])&&(a[v]*=.45,a[v+1]*=.45,a[v+2]*=.45);let U=(c[v]+c[v+1]+c[v+2])/6,b=Qi(r[v],r[v+2]);if(r[v+1]-U*.8<b&&(r[v+1]=b+U*.8,a[v+1]<0&&(a[v+1]*=-.18),a[v]*=.55,a[v+2]*=.55,l[v]*=.6,l[v+1]*=.6,l[v+2]*=.6,R<2.2?u[A]+=m:u[A]=0),r[v+1]<-Vr-50||g[A]>40){_.kill(A),A--;continue}if(u[A]>.35){c[v]>2.5&&Math.random()<.35&&Qe.thud(r[v],r[v+2],c[v]);{let[N,G]=Gs.slide(r[v],r[v+2],Math.max(c[v],c[v+1],c[v+2]));r[v]=N,r[v+2]=G,r[v+1]=Qi(N,G)+U*.8}y.fromArray(o,A*4);let E=en.add(r[v],r[v+1],r[v+2],c[v],c[v+1],c[v+2],y,h[v],h[v+1],h[v+2],i[A]);Qc.add(E,r[v],r[v+2]),Gs.raise(r[v],r[v+2],Math.max(c[v],c[v+2])*.35,r[v+1]+U*.25-Sn(r[v],r[v+2])),f[A]>0&&hv(f[A],Math.hypot(r[v]-p[A*2],r[v+2]-p[A*2+1]),r[v],r[v+1],r[v+2]),_.kill(A),A--;continue}}let S=s.instanceMatrix.array;for(let A=0;A<_.n;A++)Qt.fromArray(r,A*3),Wn.fromArray(o,A*4),es.fromArray(c,A*3),Ki.compose(Qt,Wn,es).toArray(S,A*16);s.count=_.n,s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,Math.max(1,_.n)*16),s.instanceMatrix.needsUpdate=!0,s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,Math.max(1,_.n)*3),s.instanceColor.needsUpdate=!0,t.clearUpdateRanges(),t.addUpdateRange(0,Math.max(1,_.n)),t.needsUpdate=!0}};return _})(),ts=(()=>{let n=[],e=(a,o,l)=>{let c=!1;for(let h=0,u=l.length-1;h<l.length;u=h++){let[f,p]=l[h],[g,_]=l[u];p>o!=_>o&&a<(g-f)*(o-p)/(_-p)+f&&(c=!c)}return c};for(let a of hn.areas)if(a.k==="green"){let o=a.p.map(g=>g[0]),l=a.p.map(g=>g[1]),[c,h,u,f]=[Math.min(...o),Math.max(...o),Math.min(...l),Math.max(...l)],p=Math.min(900,(h-c)*(f-u)/140);for(let g=0;g<p;g++){let _=k(c,h),m=k(u,f);e(_,m,a.p)&&n.push([_,m])}}for(let a of hn.roads)if(a.w>=11)for(let o=1;o<a.p.length;o++){let[l,c]=a.p[o-1],[h,u]=a.p[o],f=Math.hypot(h-l,u-c),p=-(u-c)/f,g=(h-l)/f;for(let _=6;_<f;_+=11)for(let m of[-1,1])n.push([l+(h-l)*_/f+p*m*(a.w/2+2.5),c+(u-c)*_/f+g*m*(a.w/2+2.5)])}let t=n.filter(([a,o])=>Math.hypot(a,o)<hn.radius*1.05).slice(0,5e3),i=new bi(new Ln(.25,.35,3,5).translate(0,1.5,0),new Mt({color:"#5b4632"}),t.length),s=new bi(new wr(2.6,0).translate(0,4.6,0),new Mt({color:"#ffffff",roughness:.9,flatShading:!0}),t.length);t.forEach(([a,o],l)=>{let c=k(.8,1.35);Ki.compose(Qt.set(a,0,o),Wn.setFromAxisAngle(es.set(0,1,0),k(0,6)),es.set(c,c*k(.9,1.3),c)),i.setMatrixAt(l,Ki),s.setMatrixAt(l,Ki),s.setColorAt(l,Yx.setHSL(k(.24,.32),k(.35,.5),k(.28,.4)))});for(let a of[i,s])a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1,it.add(a);let r=new Uint8Array(t.length).fill(1);return{clear(a,o,l){let c=!1;t.forEach(([h,u],f)=>{!r[f]||Math.hypot(h-a,u-o)>l||(r[f]=0,i.setMatrixAt(f,To),s.setMatrixAt(f,To),c=!0,rt.n<rt.cap-100&&Math.random()<.5&&rt.spawn(h,4,u,2.6,2.6,2.6,Wn.identity(),.25,.38,.18,k(-12,12),k(8,22),k(-12,12),4))}),c&&(i.instanceMatrix.needsUpdate=!0,s.instanceMatrix.needsUpdate=!0)},sway(a,o){s.position.x=Math.sin(a*20)*o*.3}}})(),un=[],zo=new Kt;it.add(zo);var sd=Qf(new Mt({map:Oo,emissiveMap:Fo,emissive:"#ffffff",emissiveIntensity:0,roughness:.42,metalness:.15,vertexColors:!0}),!1),Jx=new Mt({roughness:.9,vertexColors:!0}),Br=new Map;function Kx(n,e,t,i,s,r){let a=s.reduce((m,d)=>m+d[0],0)/s.length,o=s.reduce((m,d)=>m+d[1],0)/s.length,l=`${Math.floor(a/250)},${Math.floor(o/250)}`;Br.has(l)||Br.set(l,{wall:{pos:[],nor:[],uv:[],col:[],sty:[],owners:[]},roof:{pos:[],nor:[],uv:[],col:[],sty:[],owners:[]}});let c=Br.get(l),h=new Ne(e),u=h.clone().multiplyScalar(.78),f=n.attributes.position.array,p=n.attributes.normal.array,g=n.attributes.uv.array,_={key:l,ranges:[]};for(let m of n.groups){let d=m.materialIndex===1?c.wall:c.roof,x=m.materialIndex===1?h:u,y=d.pos.length/3;for(let S=m.start;S<m.start+m.count;S++)d.pos.push(f[S*3],f[S*3+1],f[S*3+2]),d.nor.push(p[S*3],p[S*3+1],p[S*3+2]),d.uv.push(g[S*2],g[S*2+1]),d.col.push(x.r,x.g,x.b),d.sty.push(r);d.owners.push([y,i]),_.ranges.push([m.materialIndex===1?"wall":"roof",y,m.count])}return _}function jx(){for(let[n,e]of Br)for(let t of["wall","roof"]){let i=e[t];if(!i.pos.length)continue;let s=new gt;s.setAttribute("position",new et(i.pos,3).setUsage(Ot)),s.setAttribute("normal",new et(i.nor,3)),s.setAttribute("uv",new et(i.uv,2)),s.setAttribute("color",new et(i.col,3)),s.setAttribute("aStyle",new et(i.sty,1)),s.computeBoundingSphere(),s.computeBoundingBox();let r=new ze(s,t==="wall"?sd:Jx);r.castShadow=!0,r.receiveShadow=!0,r.userData.owners=i.owners,zo.add(r),e[t+"Mesh"]=r,i.pos=i.nor=i.uv=i.col=i.sty=null}}function rd(n){let e=Br.get(n.mesh.key);for(let[t,i,s]of n.mesh.ranges){let r=e[t+"Mesh"];if(!r)continue;let a=r.geometry.attributes.position,o=a.array[i*3],l=a.array[i*3+1],c=a.array[i*3+2];for(let h=i;h<i+s;h++)a.array[h*3]=o,a.array[h*3+1]=l,a.array[h*3+2]=c;a.addUpdateRange(i*3,s*3),a.needsUpdate=!0}n.mesh.hidden=!0}var ad=new C(0,1,0);function eh(n,e,t){let i=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[a,o]=t[s],[l,c]=t[r];o>e!=c>e&&n<(l-a)*(e-o)/(c-o)+a&&(i=!i)}return i}hn.buildings.forEach((n,e)=>{let t=n.p,i=0,s=0;for(let X=0;X<t.length;X++){let[L,O]=t[X],[z,K]=t[(X+1)%t.length],J=Math.hypot(z-L,K-O);J>i&&(i=J,s=Math.atan2(K-O,z-L))}let r=Math.cos(s),a=Math.sin(s),o=t.map(([X,L])=>[r*X+a*L,-a*X+r*L]),l=o.map(X=>X[0]),c=o.map(X=>X[1]),h=Math.abs(t.reduce((X,L,O)=>{let z=t[(O+1)%t.length];return X+L[0]*z[1]-z[0]*L[1]},0)/2),u=Math.min(n.lv,40),f=Math.max(n.s?4:5,Math.ceil(Math.sqrt(h/700)),Math.ceil(Math.sqrt(h*u/22e3))),p=Math.min(...l),g=Math.min(...c),_=Math.max(1,Math.ceil((Math.max(...l)-p)/f)),m=Math.max(1,Math.ceil((Math.max(...c)-g)/f)),d=[];for(let X=0;X<_;X++)for(let L=0;L<m;L++)eh(p+(X+.5)*f,g+(L+.5)*f,o)&&d.push(X*m+L);d.length||d.push((_/2|0)*m+(m/2|0));let x=u,y=n.h/x,S=Vx(n),A=Gx(n,S),v=new Mr(t.map(([X,L])=>new se(X,-L))),R=new io(v,{depth:n.h,bevelEnabled:!1});R.rotateX(-Math.PI/2);let U=R.attributes.uv,b=R.groups.find(X=>X.materialIndex===1);if(b)for(let X=b.start;X<b.start+b.count;X++){let L=R.index?R.index.getX(X):X;U.setXY(L,U.getX(L)/f,U.getY(L)/y)}let E=Kx(R,A,n.s,e,t,S);R.dispose();let N=t.map(X=>X[0]),G=t.map(X=>X[1]);un.push({i:e,id:n.id,name:Cx(n),site:!!n.s,h:n.h,poly:t,mesh:E,color:new Ne(A),style:S,cs:r,sn:a,u0:p,w0:g,cell:f,nx:_,nz:m,ny:x,fh:y,cellsIn:d,vol:d.length*x,bbox:[Math.min(...N),Math.max(...N),Math.min(...G),Math.max(...G)],cx:N.reduce((X,L)=>X+L,0)/N.length,cz:G.reduce((X,L)=>X+L,0)/G.length,vox:null,alive:d.length*x,gone:!1,collapsed:!1,dirty:!1,quat:new Wt().setFromAxisAngle(ad,-s)})});jx();(()=>{let n=Pt.target,e=je.position.distanceTo(n),t=je.position.y-n.y,i=Math.hypot(je.position.x-n.x,je.position.z-n.z),s=null;for(let r=0;r<16;r++){let a=Math.atan2(je.position.x-n.x,je.position.z-n.z)+r*Math.PI/8,o=n.x+Math.sin(a)*i,l=n.z+Math.cos(a)*i,c=0;for(let u=.08;u<.92;u+=.04){let f=o+(n.x-o)*u,p=l+(n.z-l)*u,g=t*(1-u);for(let _ of un)if(!(_.site||_.h<g||f<_.bbox[0]||f>_.bbox[1]||p<_.bbox[2]||p>_.bbox[3])&&eh(f,p,_.poly)){c+=(_.h-g)*(1.2-u);break}}let h=c+r*.01;(!s||h<s.s)&&(s={s:h,x:o,z:l})}je.position.set(s.x,je.position.y,s.z),Pt.update()})();var od=new Mt({color:"#9aa1a8",roughness:.8,metalness:.2}),Bf=(()=>{let n=[];for(let t of un){if(t.h<18)continue;let i=Math.min(6,1+Math.floor(t.vol/120));for(let s=0;s<i*3&&n.filter(r=>r.b===t).length<i;s++){let r=k(t.bbox[0],t.bbox[1]),a=k(t.bbox[2],t.bbox[3]);eh(r,a,t.poly)&&n.push({b:t,x:r,z:a,sx:k(2.5,6),sy:k(1.5,3.5),sz:k(2.5,6)})}}let e=new bi(jc,od,Math.max(1,n.length));return n.forEach((t,i)=>{var s;Ki.compose(Qt.set(t.x,t.b.h+t.sy/2,t.z),t.b.quat,es.set(t.sx,t.sy,t.sz)),e.setMatrixAt(i,Ki),((s=t.b).roofIdx||(s.roofIdx=[])).push(i)}),e.count=n.length,e.castShadow=!0,e.receiveShadow=!0,it.add(e),e})();function ld(n){if(n.roofIdx){for(let e of n.roofIdx)Bf.setMatrixAt(e,To);Bf.instanceMatrix.needsUpdate=!0,n.roofIdx=null}n.sign&&ev(n)}var cd=[];function Qx(n){let[e,t]=Ai(1024,256);t.fillStyle="#0f172a",t.fillRect(0,0,1024,256),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle";let i=170;for(t.font=`900 ${i}px ${getComputedStyle(document.body).fontFamily}`;t.measureText(n).width>960&&i>40;)i-=8,t.font=`900 ${i}px ${getComputedStyle(document.body).fontFamily}`;t.fillText(n,512,136);let s=new yn(e);return s.colorSpace=dt,s.anisotropy=4,s}(()=>{let n=un.filter(r=>r.site).sort((r,a)=>a.h-r.h),e=Le.sign||Le.company,t=Qx(e),i=new Mt({map:t,emissiveMap:t,emissive:"#ffffff",emissiveIntensity:.35,roughness:.6}),s=new Mt({color:"#334155",roughness:.8});for(let r of n.slice(0,n.length>6?2:1)){let a=Math.max(r.nx,r.nz)*r.cell,o=Math.max(18,Math.min(a*.75,60)),l=o/4,c=new Kt,h=new ze(new Mi(o,l),i);h.position.set(0,l/2+3,.6);let u=new ze(new Mi(o,l),i);u.position.set(0,l/2+3,-.6),u.rotation.y=Math.PI;let f=new ze(new Ut(o+1,l+1,1),s);f.position.y=l/2+3;let p=new ze(new Ut(o*.9,3,1.2),od);p.position.y=1.5,c.add(f,h,u,p),c.position.set(r.cx,r.h,r.cz),c.rotation.y=Math.atan2(je.position.x-r.cx,je.position.z-r.cz);let g=f;g.castShadow=!0,it.add(c),r.sign=c,r.signH=l+6,cd.push({b:r,g:c,mat:i})}})();function ev(n){let e=n.sign;n.sign=null,it.remove(e);let t=e.position;for(let i=0;i<4;i++)rt.spawn(t.x+k(-8,8),t.y+6,t.z+k(-8,8),k(6,12),k(3,6),.8,e.quaternion,.1,.12,.18,k(-10,10),k(5,15),k(-10,10),2)}var tv=un.filter(n=>n.site).reduce((n,e)=>n+e.vol,0),th=un.filter(n=>n.site).length,Ho=(()=>{let e=new Map,t=(s,r)=>s*1e5+r;for(let s of un)for(let r=Math.floor(s.bbox[0]/40);r<=Math.floor(s.bbox[1]/40);r++)for(let a=Math.floor(s.bbox[2]/40);a<=Math.floor(s.bbox[3]/40);a++){let o=t(r,a);e.has(o)||e.set(o,[]),e.get(o).push(s)}let i=[];return{at(s,r){return e.get(t(Math.floor(s/40),Math.floor(r/40)))||i},query(s,r,a){let o=new Set;for(let l=Math.floor((s-a)/40);l<=Math.floor((s+a)/40);l++)for(let c=Math.floor((r-a)/40);c<=Math.floor((r+a)/40);c++)for(let h of e.get(t(l,c))||[])!h.gone&&h.bbox[0]-a<=s&&s<=h.bbox[1]+a&&h.bbox[2]-a<=r&&r<=h.bbox[3]+a&&o.add(h);return o}}})();function hd(n,e,t,i,s){let r=n.u0+(e+.5)*n.cell,a=n.w0+(i+.5)*n.cell;return s.set(n.cs*r-n.sn*a,(t+.5)*n.fh,n.sn*r+n.cs*a),s}function nh(n){if(n.vox||n.gone)return n.vox;if(nt.cap-nt.live<n.vol)return null;let e=n.nx*n.ny*n.nz,t=new Int32Array(e).fill(-1),i=n.color.r,s=n.color.g,r=n.color.b,a=0;for(let o of n.cellsIn){let l=o/n.nz|0,c=o%n.nz;for(let h=0;h<n.ny;h++){hd(n,l,h,c,Qt);let u=.9+.1*Math.random(),f=nt.add(Qt.x,Qt.y,Qt.z,n.cell,n.fh,n.cell,n.quat,i*u,s*u,r*u,n.style);nt.owner[f]=n.i,nt.cell[f]=(l*n.ny+h)*n.nz+c,t[(l*n.ny+h)*n.nz+c]=f,a++}}return n.vox=t,n.alive=a,rd(n),ld(n),t}var ih=(n,e,t,i)=>(e*n.ny+t)*n.nz+i,$r=0;function zs(n,e,t,i=0,s=0,r=0,a=0){let o=n.vox[e];if(o<0)return;let l=nt,c=l.pos[o*3],h=l.pos[o*3+1],u=l.pos[o*3+2];t==="debris"?rt.spawn(c,h,u,l.size[o*3]*.94,l.size[o*3+1]*.94,l.size[o*3+2]*.94,n.quat,l.col[o*3],l.col[o*3+1],l.col[o*3+2],i,s,r,Math.min(3,.4+Math.hypot(i,s,r)*.05),a,n.style):t==="vapor"&&wi.spawn(c,h,u,k(-3,3),k(2,8),k(-3,3),k(5,9),.5,[1,.8,.4],[1,.25,.05]),l.remove(o),n.vox[e]=-1,n.alive--,n.dirty=!0,n.site&&$r++,lh(10,c,h,u)}function sh(n,e,t,i,s,r={}){let a=0;for(let o of Ho.query(n,t,i))if(nh(o))for(let l of o.cellsIn){let c=l/o.nz|0,h=l%o.nz;for(let u=0;u<o.ny;u++){let f=ih(o,c,u,h),p=o.vox[f];if(p<0)continue;let g=nt.pos[p*3],_=nt.pos[p*3+1],m=nt.pos[p*3+2],d=g-n,x=_-e,y=m-t;r.vertical&&(x=0);let S=Math.hypot(d,x,y);if(S>i*(.85+Math.random()*.25))continue;let A=S||1,v=s*(1-S/(i*1.1))+s*.15;if(r.vapor&&S<i*.75){zs(o,f,"vapor"),a++;continue}if(r.dir){let[R,U,b]=r.dir,E=k(.75,1.25)*s;zs(o,f,"debris",R*E+k(-8,8),U*E+k(0,12),b*E+k(-8,8),r.tag||0)}else zs(o,f,"debris",d/A*v+k(-3,3),Math.max(x/A,.15)*v+k(2,8)*(s/30),y/A*v+k(-3,3));a++}}return a}function nv(n,e,t,i,s,r){for(let a of Ho.at(n,t)){if(a.gone||e>a.h||e<0||n<a.bbox[0]||n>a.bbox[1]||t<a.bbox[2]||t>a.bbox[3])continue;let o=a.cs*n+a.sn*t,l=-a.sn*n+a.cs*t,c=Math.floor((o-a.u0)/a.cell),h=Math.floor((l-a.w0)/a.cell),u=Math.floor(e/a.fh);if(c<0||h<0||c>=a.nx||h>=a.nz||u<0||u>=a.ny||!a.vox&&(!a.cellsIn.includes(c*a.nz+h)||!nh(a)))continue;let f=ih(a,c,u,h);if(!(a.vox[f]<0))return zs(a,f,"debris",i*.5,s*.5+3,r*.5),Math.random()<.15&&tn.spawn(n,e,t,0,2,0,k(6,10),2.5,[.6,.58,.55],[.5,.5,.5],.5),!0}return!1}var Wc=[];function iv(n){if(n.dirty=!1,!n.vox||n.gone)return;let e=new Uint8Array(n.vox.length),t=[];for(let l of n.cellsIn){let c=l/n.nz|0,h=l%n.nz,u=ih(n,c,0,h);if(n.vox[u]<0)continue;let f=n.vox[u];Sn(nt.pos[f*3],nt.pos[f*3+2])<-1.6||(e[u]=1,t.push(u))}let i=n.ny*n.nz,s=n.nz,r=n.vox,a=l=>{!e[l]&&r[l]>=0&&(e[l]=1,t.push(l))};for(;t.length;){let l=t.pop(),c=l%n.nz,h=(l/n.nz|0)%n.ny,u=l/i|0;u+1<n.nx&&a(l+i),u>0&&a(l-i),h+1<n.ny&&a(l+s),h>0&&a(l-s),c+1<n.nz&&a(l+1),c>0&&a(l-1)}let o=[];for(let l=0;l<n.vox.length;l++)n.vox[l]>=0&&!e[l]&&o.push(l);o.length&&Wc.push({b:n,loose:o}),ud(n)}function sv({b:n,loose:e}){if(e=e.filter(a=>n.vox&&n.vox[a]>=0),!e.length)return;let t=rt.cap-rt.n,i=e.length<Math.min(500,t)?1:e.length<t*3?2:3,s=new Map;for(let a of e){let o=a%n.nz,l=(a/n.nz|0)%n.ny,h=`${(a/(n.nz*n.ny)|0)/i|0},${l/Math.min(i,2)|0},${o/i|0}`;s.has(h)||s.set(h,[]),s.get(h).push(a)}let r=0;for(let a of s.values()){let o=0,l=0,c=0,h=0,u=0,f=0;for(let _ of a){let m=n.vox[_];o+=nt.pos[m*3],l+=nt.pos[m*3+1],c+=nt.pos[m*3+2],h+=nt.col[m*3],u+=nt.col[m*3+1],f+=nt.col[m*3+2],nt.remove(m),n.vox[_]=-1,n.alive--,n.site&&$r++}let p=a.length,g=Math.cbrt(p);rt.spawn(o/p,l/p,c/p,n.cell*Math.min(i,g*1.1),n.fh*Math.min(Math.min(i,2),g),n.cell*Math.min(i,g*1.1),n.quat,h/p,u/p,f/p,k(-2,2),k(-3,0),k(-2,2),.35,0,n.style),r++%5===0&&tn.spawn(o/p,l/p,c/p,k(-2,2),k(0,2),k(-2,2),k(10,18),4,[.72,.7,.66],[.55,.54,.52],.45),lh(10*p,o/p,l/p,c/p,!0)}e.length>30&&(Qe.at(n.cx,n.cz).crumble(Math.min(1,e.length/600)),Qe.v=1),n.dirty=!0}function ud(n){if(!n.collapsed&&n.alive<=n.vol*.2){n.collapsed=!0;let e=n.name||(n.site?fe("noName",Le.company):"");n.site?(Gr(5e3,fe("collapse",e)),Zr++):Gr(800,e?fe("collapseSmall",e):fe("nextBldg"))}}var Zr=0;function fd(n,e,t,i,s,r=!1){if(n.gone)return;let a=[];if(n.vox)for(let h=0;h<n.vox.length;h++)n.vox[h]>=0&&a.push(h);let o=n.vox?a.length:n.vol,l=Math.min(s,o),c=n.color;for(let h=0;h<l;h++){let u,f,p;if(n.vox){let y=n.vox[a[Math.random()*a.length|0]];u=nt.pos[y*3],f=nt.pos[y*3+1],p=nt.pos[y*3+2]}else{let y=n.cellsIn[Math.random()*n.cellsIn.length|0];hd(n,y/n.nz|0,Math.random()*n.ny|0,y%n.nz,Qt),u=Qt.x,f=Qt.y,p=Qt.z}let g=u-e,_=p-t,m=Math.hypot(g,_)||1,d=(1-Math.min(1,m/i))*170+30,x=n.cell*k(1,1.8)*(r?1.4:1);r?rt.spawn(u,f,p,x,n.fh*k(.9,1.5),x,n.quat,c.r,c.g,c.b,k(-3,3),k(-4,0),k(-3,3),.5,0,n.style):rt.spawn(u,f,p,x,n.fh*k(.8,1.4),x,n.quat,c.r,c.g,c.b,g/m*d,k(25,70),_/m*d,3,0,n.style)}if(n.vox)for(let h=0;h<n.vox.length;h++)n.vox[h]>=0&&(nt.remove(n.vox[h]),n.vox[h]=-1);else rd(n);if(ld(n),n.site&&($r+=n.alive),lh(10*n.alive,n.cx,n.h/2,n.cz,!0),r)for(let h=0;h<14*Jr;h++)tn.spawn(n.cx+k(-20,20),k(2,n.h*.6),n.cz+k(-20,20),k(-4,4),k(1,5),k(-4,4),k(18,34),5,[.75,.72,.68],[.6,.58,.56],.55,1.5);r&&(Qe.at(n.cx,n.cz).crumble(.8),Qe.v=1),n.alive=0,n.gone=!0,ud(n)}var Ro=class{constructor(e,t){this.cap=e,this.n=0;let i=new gt;this.P=new Float32Array(e*3),this.Cc=new Float32Array(e*3),this.Sz=new Float32Array(e),this.A=new Float32Array(e),i.setAttribute("position",new ut(this.P,3).setUsage(Ot)),i.setAttribute("aColor",new ut(this.Cc,3).setUsage(Ot)),i.setAttribute("aSize",new ut(this.Sz,1).setUsage(Ot)),i.setAttribute("aAlpha",new ut(this.A,1).setUsage(Ot)),i.boundingSphere=new on(new C,1e5),this.V=new Float32Array(e*3),this.L=new Float32Array(e),this.ML=new Float32Array(e),this.S0=new Float32Array(e),this.GR=new Float32Array(e),this.C0=new Float32Array(e*3),this.C1=new Float32Array(e*3),this.A0=new Float32Array(e),this.B=new Float32Array(e),this.mat=new ln({uniforms:{map:{value:t?Bx:zx},uScale:{value:1}},vertexShader:`attribute vec3 aColor; attribute float aSize; attribute float aAlpha; varying vec3 vC; varying float vA; uniform float uScale;
        void main(){ vC=aColor; vA=aAlpha; vec4 mv = modelViewMatrix*vec4(position,1.); gl_PointSize = min(aSize*uScale/max(-mv.z,1.), 900.); gl_Position = projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a*vA); }",transparent:!0,depthWrite:!1,blending:t?Hi:gi}),this.pts=new Is(i,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=t?3:2,it.add(this.pts)}spawn(e,t,i,s,r,a,o,l,c,h,u=1,f=1.6,p=0){if(this.n>=this.cap)return;let g=this.n++;this.P.set([e,t,i],g*3),this.V.set([s,r,a],g*3),this.L[g]=0,this.ML[g]=l*k(.8,1.2),this.S0[g]=o,this.GR[g]=f,this.A0[g]=u,this.B[g]=p,this.C0.set(c,g*3),this.C1.set(h,g*3)}update(e){for(let i=0;i<this.n;i++){this.L[i]+=e;let s=this.L[i]/this.ML[i];if(s>=1){let o=--this.n;if(i!==o){for(let[l,c]of[[this.P,3],[this.V,3],[this.C0,3],[this.C1,3]])l.copyWithin(i*c,o*c,o*c+c);for(let l of[this.L,this.ML,this.S0,this.GR,this.A0,this.B])l[i]=l[o]}i--;continue}let r=i*3,a=Math.max(0,1-1.4*e);this.V[r]*=a,this.V[r+1]=this.V[r+1]*a+this.B[i]*e,this.V[r+2]*=a,this.P[r]+=this.V[r]*e,this.P[r+1]+=this.V[r+1]*e,this.P[r+2]+=this.V[r+2]*e,this.Sz[i]=this.S0[i]*(1+this.GR[i]*s);for(let o=0;o<3;o++)this.Cc[r+o]=this.C0[r+o]+(this.C1[r+o]-this.C0[r+o])*Math.min(1,s*1.6);this.A[i]=this.A0[i]*(s<.1?s/.1:1-(s-.1)/.9)}let t=this.pts.geometry;t.setDrawRange(0,this.n);for(let i of["position","aColor","aSize","aAlpha"])t.attributes[i].needsUpdate=!0}},Ws=(()=>{let n=Ft?900:1600,e=new gt,t=new Float32Array(n*3),i=new Float32Array(n),s=new Float32Array(n),r=new Float32Array(n),a=new Float32Array(n),o=new Float32Array(n*3),l=new Float32Array(n),c=new Float32Array(n),h=new Float32Array(n),u=new Float32Array(n);for(let[m,d,x]of[["position",t,3],["aSize",i,1],["aAlpha",s,1],["aRot",r,1],["aIdx",a,1]])e.setAttribute(m,new ut(d,x).setUsage(Ot));e.boundingSphere=new on(new C,1e5);let f=new yn(Uf(Vs));f.colorSpace=dt;let p=new ln({uniforms:{map:{value:f},uScale:{value:1}},transparent:!0,depthWrite:!1,vertexShader:`attribute float aSize; attribute float aAlpha; attribute float aRot; attribute float aIdx; varying float vA; varying float vR; varying float vI; uniform float uScale;
      void main(){ vA = aAlpha; vR = aRot; vI = aIdx; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_PointSize = min(aSize * uScale / max(-mv.z, 1.), 400.); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D map; varying float vA; varying float vR; varying float vI;
      void main(){ vec2 p = gl_PointCoord - .5; float c = cos(vR), s = sin(vR); p = mat2(c, -s, s, c) * p * 1.15 + .5;
        if (p.x < 0. || p.y < 0. || p.x > 1. || p.y > 1.) discard;
        vec2 uv = vec2((mod(vI, 2.) + p.x) / 2., 1. - (floor(vI / 2.) + p.y) / 2.);
        vec4 t = texture2D(map, uv); if (t.a < .08) discard; gl_FragColor = vec4(t.rgb, t.a * vA); }`}),g=new Is(e,p);g.frustumCulled=!1,g.renderOrder=4,it.add(g);let _=0;return{mat:p,burst(m,d,x,y,S,A){y=Math.round(y*Math.max(.5,Jr));for(let v=0;v<y&&_<n;v++){let R=_++,U=k(0,Math.PI*2),b=k(.2,1),E=k(.3,1)*S;t.set([m+k(-2,2),d+k(0,3),x+k(-2,2)],R*3),o.set(A?[A[0]*E+k(-4,4),k(4,14),A[2]*E+k(-4,4)]:[Math.cos(U)*E*(1-b*.4),b*E*.9+4,Math.sin(U)*E*(1-b*.4)],R*3),i[R]=k(4.5,8),a[R]=Math.random()*4|0,r[R]=k(0,6.28),h[R]=k(-6,6),u[R]=k(0,6.28),l[R]=0,c[R]=k(3,5.5)}},update(m){for(let d=0;d<_;d++){if(l[d]+=m,l[d]>=c[d]){let A=--_;d!==A&&(t.copyWithin(d*3,A*3,A*3+3),o.copyWithin(d*3,A*3,A*3+3),i[d]=i[A],a[d]=a[A],r[d]=r[A],h[d]=h[A],u[d]=u[A],l[d]=l[A],c[d]=c[A]),d--;continue}let x=d*3,y=Math.max(0,1-1.6*m);o[x]*=y,o[x+2]*=y,o[x+1]=Math.max(o[x+1]-9*m,-6),t[x]+=(o[x]+Math.sin(l[d]*3+u[d])*2.5)*m,t[x+1]+=o[x+1]*m,t[x+2]+=(o[x+2]+Math.cos(l[d]*2.6+u[d])*2.5)*m;let S=Qi(t[x],t[x+2])+.4;t[x+1]<S&&(t[x+1]=S,o[x]=o[x+2]=0,h[d]*=.9),r[d]+=h[d]*m,s[d]=Math.min(1,(c[d]-l[d])/1)}e.setDrawRange(0,_);for(let d of["position","aSize","aAlpha","aRot","aIdx"])e.attributes[d].needsUpdate=!0}}})(),wi=new Ro(Ft?3500:5e3,!0),tn=new Ro(Ft?4500:6e3,!1),Jr=ri[Fn].fxk,kt=[];function Co(n,e,t,i,s,r="#fff2d0"){let a=new ze(new Tr(.85,1,64),new _n({color:r,transparent:!0,opacity:.8,side:Cn,depthWrite:!1,blending:Hi}));a.rotation.x=-Math.PI/2,a.position.set(n,e+.6,t),it.add(a),kt.push({t:0,dur:s,up(o){a.scale.setScalar(1+i*Math.pow(o,.6)),a.material.opacity=.8*(1-o)},done(){it.remove(a),a.geometry.dispose()}})}var zf=[0,1,2].map(()=>{let n=new ao("#ffb060",0,100,1.2);return it.add(n),n}),rv=0;function rh(n,e,t,i,s){let r=new ze(new Ar(1,32,16),new _n({color:"#ffd28a",transparent:!0,blending:Hi,depthWrite:!1}));r.position.set(n,e,t),it.add(r);let a=zf[rv++%zf.length];a.position.set(n,e+i*.5,t),a.distance=i*14,kt.push({t:0,dur:s,up(o){r.scale.setScalar(i*Math.pow(o,.35)+.1),r.material.opacity=1-o,r.material.color.setRGB(1,.85-o*.5,.55-o*.5),a.intensity=(1-o)*i*400},done(){it.remove(r),a.intensity=0,r.geometry.dispose()}})}function Hf(n,e){kt.push({t:0,dur:n,up(){},done:e})}function dd(n,e,t,i,s=1){rh(n,e,t,i*.9,.5+.25*s),Co(n,Math.max(e-i*.6,Sn(n,t)),t,i*3,.8+.3*s);let r=Math.min(220,40+i*5)*Jr;Ws.burst(n,e,t,Math.min(80,20+i*1.5),i*1.6);for(let a=0;a<r;a++){let o=k(0,Math.PI*2),l=k(-.1,1),c=k(.3,1.2)*i*2.4;wi.spawn(n,e,t,Math.cos(o)*c*(1-l*.5),l*c,Math.sin(o)*c*(1-l*.5),k(.25,.5)*i,k(.45,.9),[1,.92,.6],[1,.3,.06],1,1.2,6)}for(let a=0;a<r*.8;a++){let o=k(0,Math.PI*2),l=k(.1,.6)*i*1.5;tn.spawn(n+k(-i,i)*.4,e+k(0,i*.4),t+k(-i,i)*.4,Math.cos(o)*l,k(2,10)+i*.3,Math.sin(o)*l,k(.4,.8)*i,k(2.5,5)*s,[.32,.29,.27],[.62,.6,.58],.75,1.8,2)}}var Vn=[[0,"#8b95a5"],[600,"#5ea2d8"],[2200,"#3fb37f"],[5500,"#e2b33c"],[11e3,"#ef8a32"],[2e4,"#e5533d"],[34e3,"#c13cc9"],[52e3,"#ff2d55"]].map(([n,e],t)=>[fe("ranks")[t],n,e]),ns=0,Ei=0,ah=0,Po=0,Dr=[],pd=1,Nn=0,xo=0,Xc=new C,Vf=0,oh=()=>{let n=0;return Vn.forEach((e,t)=>{Ei>=e[1]&&(n=t)}),n},Lo=()=>pd*(1+oh()*.12);function lh(n,e,t,i,s){Number.isFinite(e+t+i)||(e=t=i=0);let r=n*Lo();ns+=r,Ei+=n*.55,ah=Nn;let a=oh();a>Po&&(Po=a,a>=2&&ai(fe("promo",Vn[a][0]),1600,Vn[a][2])),xo+=r,Xc.set(e,t,i)}function Gr(n,e){ns+=n*Lo(),Ei+=n*.3,ah=Nn,ai(`${e}  +${ji(Math.round(n*Lo()))}`,2200)}function qc(n){Dr.push(n),Dr.length>6&&Dr.shift();let e=Dr.slice(-4);pd=e.length===4&&e.every(t=>t===n)?.7:1+.15*(new Set(Dr).size-1)}var Qe={ctx:null,out:null,muted:!1,nb:null,v:1,lastThud:0,thudN:0,at(n,e){let t=Math.hypot(je.position.x-n,je.position.y,je.position.z-e);return this.v=Us.clamp(1.7-t/800,.35,1.35),this},init(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}if(!this.silent)try{let r=new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=");r.loop=!0,r.setAttribute("playsinline",""),r.volume=.01,r.play().catch(()=>{}),this.silent=r}catch{}if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume();return}let n=window.AudioContext||window.webkitAudioContext;if(!n)return;this.ctx=new n,this.ctx.resume&&this.ctx.resume();try{let r=this.ctx.createBufferSource();r.buffer=this.ctx.createBuffer(1,1,22050),r.connect(this.ctx.destination),r.start(0)}catch{}let e=this.ctx.createDynamicsCompressor();e.threshold.value=-18,e.ratio.value=6,this.out=this.ctx.createGain(),this.out.gain.value=.85,this.out.connect(e),e.connect(this.ctx.destination);let t=this.ctx.sampleRate*3;this.nb=this.ctx.createBuffer(1,t,this.ctx.sampleRate);let i=this.nb.getChannelData(0),s=0;for(let r=0;r<t;r++){let a=Math.random()*2-1;s=(s+.02*a)/1.02,i[r]=a*.5+s*3}},ok(){return this.ctx&&this.ctx.state!=="running"&&this.ctx.resume(),this.ctx&&!this.muted},env(n,e,t,i,s){n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(i,e+t),n.gain.exponentialRampToValueAtTime(1e-4,e+s)},noise(n,e,t,i,s,r=.004,a=0){if(!this.ok())return;let o=this.ctx,l=o.currentTime+a,c=o.createBufferSource();c.buffer=this.nb,c.loop=!0;let h=o.createBiquadFilter();h.type=e,h.frequency.setValueAtTime(t,l),h.frequency.exponentialRampToValueAtTime(Math.max(20,i),l+n);let u=o.createGain();this.env(u,l,r,Math.min(1.5,s*this.v),n),c.connect(h),h.connect(u),u.connect(this.out),c.start(l,Math.random()*2),c.stop(l+n+.05)},tone(n,e,t,i,s,r=.005,a=0){if(!this.ok())return;let o=this.ctx,l=o.currentTime+a,c=o.createOscillator();c.type=n,c.frequency.setValueAtTime(e,l),c.frequency.exponentialRampToValueAtTime(Math.max(10,t),l+i);let h=o.createGain();this.env(h,l,r,Math.min(1.5,s*this.v),i),c.connect(h),h.connect(this.out),c.start(l),c.stop(l+i+.05)},boom(n=1){this.noise(.09,"highpass",5e3,1500,.9*Math.min(1,.4+n*.5)),this.noise(.6+n*.9,"lowpass",1800*Math.min(1.5,n),70,.95*Math.min(1,.5+n*.4)),this.tone("sine",95,26,.5+n*.7,.9),this.tone("triangle",60,22,.35+n*.4,.5);let e=3+Math.min(8,n*4);for(let t=0;t<e;t++)this.noise(k(.04,.12),"bandpass",k(900,3500),k(400,900),k(.15,.35),.002,k(.1,.9+n*.4))},thud(n,e,t){let i=performance.now();if(i-this.lastThud>1e3&&(this.lastThud=i,this.thudN=0),++this.thudN>12)return;this.at(n,e);let s=Math.min(1,t/8);this.tone("sine",k(70,120)*(1.3-s*.6),35,.18+s*.2,.25+s*.35,.002),this.noise(.12+s*.15,"lowpass",900,150,.15+s*.25,.002),this.v=1},cheer(){this.noise(2.2,"bandpass",700,1400,.35,.4),this.tone("square",523,523,.12,.12,.005,.05),this.tone("square",659,659,.12,.12,.005,.18),this.tone("square",784,784,.3,.12,.005,.31)},click(){this.v=1,this.tone("triangle",1100,700,.06,.18)},crumble(n){this.noise(1+n*1.5,"bandpass",700,180,.25+n*.4,.05)},whack(){this.noise(.18,"highpass",3e3,800,.8),this.tone("square",220,70,.2,.35)},whoosh(n){this.noise(n,"bandpass",300,2600,.35,n*.8)},whistle(n){this.tone("sine",1700,420,n,.18,.2)},zap(){this.tone("sawtooth",1500,160,.3,.3),this.noise(.3,"highpass",4e3,1500,.3)},charge(n){this.tone("sawtooth",70,900,n,.22,n*.9)},hum(){if(!this.ok())return()=>{};let n=this.ctx,e=n.createOscillator(),t=n.createOscillator(),i=n.createGain(),s=n.createBiquadFilter();return e.type="sawtooth",e.frequency.value=150,t.type="square",t.frequency.value=301,s.type="lowpass",s.frequency.value=1800,i.gain.value=1e-4,i.gain.exponentialRampToValueAtTime(.16,n.currentTime+.05),e.connect(s),t.connect(s),s.connect(i),i.connect(this.out),e.start(),t.start(),()=>{i.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.25),e.stop(n.currentTime+.3),t.stop(n.currentTime+.3)}},rumble(n,e){this.noise(n,"lowpass",220,60,.35+e*.5,.3)},nuke(){this.boom(3),this.noise(7,"lowpass",500,40,.9,.05,.1),this.tone("sine",50,20,5,.7,.05)}},Vo=Of(Vs,Qe),Hn=0,Fc=new C,Kr=n=>{Hn=Math.min(14,Hn+n)};function md(){let n=new C;return je.getWorldDirection(n),n.y=0,n.normalize()}function gd(n,e,t,i,s,r={}){sh(n,e,t,i,s),Yr.wake(n,t,i*1.15,s*.7,n,t),rt.push(n,e,t,i*1.6,s*.6),ts.clear(n,t,i*.8),r.crater&&e-Sn(n,t)<i*.8&&qr(n,t,r.crater[0],r.crater[1]),dd(n,e,t,i,r.big||1),Kr(i*.08*(r.big||1)),Qe.at(n,t).boom(i/16),Qe.v=1}var Ys=Object.fromEntries(["bomb","bat","laser","meteor","quake","nuke"].map(n=>[n,fe(`labels.${n}`)])),$s=n=>n[Math.random()*n.length|0],av=(()=>{let[n,e]=Ai(256,180);e.fillStyle="#fbfaf5",e.fillRect(0,0,256,180),e.strokeStyle="#c9c4b8",e.lineWidth=4,e.strokeRect(4,4,248,172),e.beginPath(),e.moveTo(6,8),e.lineTo(128,96),e.lineTo(250,8),e.stroke(),e.fillStyle="#1b1b1b",e.font=`900 46px ${getComputedStyle(document.body).fontFamily}`,e.textAlign="center",e.fillText(fe("envelope"),128,150);let t=new yn(n);return t.colorSpace=dt,t})(),_d=()=>Us.clamp(je.position.distanceTo(Pt.target)/260,1,5);function ov(n){let e=_d(),t=new ze(new Ut(9*e,.5*e,6.5*e),[0,0,1,1,0,0].map(s=>new Mt(s?{map:av}:{color:"#efece4"})));t.castShadow=!0;let i=90*e;t.position.set(n.x,n.y+i,n.z),it.add(t),kt.push({t:0,dur:.62,up(s){let r=s*s;t.position.set(n.x+Math.sin(s*9)*4*e*(1-s),n.y+i*(1-r),n.z+Math.cos(s*7)*3*e*(1-s)),t.rotation.set(Math.sin(s*10)*.6,s*5,Math.cos(s*8)*.5),Math.random()<.6&&tn.spawn(t.position.x,t.position.y,t.position.z,0,2,0,3*e,.6,[1,1,1],[.9,.9,.9],.35)},done(){it.remove(t),t.geometry.dispose(),gd(n.x,n.y+2,n.z,20,46,{crater:[16,6]}),Vo("bomb"),Math.random()<.45&&Ri(n,$s(Ys.bomb),"#fff")}})}var Fs=1,lv=1,Gf=new Set,yd=(()=>{let n=new yn(Nf(Vs,e=>e==="lang"?On:fe(e)));return n.colorSpace=dt,n})();function cv(n){let e=36*Fs,t=lv++,i=Math.max(e,30*_d()),s=md(),r=new C(-s.z,0,s.x),a=n.clone().addScaledVector(s,-i*.55);a.y=Math.max(n.y,i*.12);let o=new Kt;o.position.copy(a);let l=new ze(new Ut(i,i*.3,i*.03),[0,0,0,0,1,1].map(u=>u?new Mt({map:yd}):new Mt({color:"#2b2b2e"})));l.position.x=i/2,l.castShadow=!0,o.add(l),it.add(o);let c=Math.atan2(-s.z,s.x);Qe.whoosh(.22);let h=!1;kt.push({t:0,dur:.8,up(u){let f=Math.min(1,u/.4);if(o.rotation.y=c+1.5-3*(f*f*(3-2*f)),!h&&f>=.5){h=!0;let p=s.clone().multiplyScalar(.78).addScaledVector(r,.42);p.y=.42,p.normalize();let g=60+22*Fs;sh(n.x,n.y,n.z,e*.42,g,{dir:[p.x,p.y,p.z],tag:t});for(let _=0;_<2;_++)rt.push(n.x,n.y,n.z,e*.5,25);Yr.wake(n.x,n.z,e*.4,30,a.x,a.z),ts.clear(n.x,n.z,e*.3),Qe.at(n.x,n.z).whack(),Qe.v=1,Kr(1.5*Fs),Ws.burst(n.x,n.y,n.z,30,30,[p.x,p.y,p.z]);for(let _=0;_<25;_++)tn.spawn(n.x,n.y,n.z,p.x*20+k(-6,6),k(0,8),p.z*20+k(-6,6),k(5,10)*Fs,1.8,[.7,.68,.64],[.6,.6,.6],.5);Math.random()<.5&&Ri(n,$s(Ys.bat),"#ffd6d6")}l.material.forEach(p=>{p.transparent=u>.75,p.opacity=u>.75?1-(u-.75)/.25:1})},done(){it.remove(o),l.geometry.dispose()}})}function hv(n,e,t,i,s){e>70&&!Gf.has(n)&&(Gf.add(n),Gr(3e3,fe("homerun",Math.round(e))),Qe.cheer(),Ri(new C(t,i+8,s),fe("homerunShort",Math.round(e)),"#ffe066"))}var uv=new C(260,1400,-380),ct={drawing:!1,path:[],line:null,active:null},Si=(()=>{let n=new Kt,e=new Ln(1,1,1,16,1,!0).translate(0,.5,0);return[[1.3,(kr.beam||[])[0]||"#ffffff",1],[3.2,(kr.beam||[])[1]||"#21d07a",.75],[7.5,(kr.beam||[])[1]||"#21a366",.28]].forEach(([t,i,s])=>{let r=new ze(e,new _n({color:i,transparent:!0,opacity:s,blending:Hi,depthWrite:!1,fog:!1}));r.scale.set(t,1,t),r.userData.o=s,n.add(r)}),n.visible=!1,it.add(n),n})();function Yc(n,e=1){let t=uv.clone().sub(n),i=t.length();Si.position.copy(n),Si.quaternion.setFromUnitVectors(ad,t.normalize()),Si.children.forEach(s=>{var r;s.scale.y=i,s.scale.x=s.scale.z=(r=s.userData).r0??(r.r0=s.scale.x),s.scale.x=s.scale.z=s.userData.r0*e*k(.9,1.1),s.material.opacity=s.userData.o*Math.min(1,e)}),Si.visible=!0}function xd(n,e,t){let i=Math.max(0,Sn(n,e));sh(n,0,e,8.5,22,{vertical:!0,vapor:!0}),Yr.wake(n,e,9,14,n,e),ts.clear(n,e,6),qr(n,e,5,1.8,1);for(let s=0;s<6;s++)wi.spawn(n,i+1,e,k(-10,10),k(5,25),k(-10,10),k(2,5),.5,[.85,1,.85],[1,.4,.05]);tn.spawn(n,i+2,e,k(-2,2),k(3,8),k(-2,2),k(5,9),2.2,[.35,.36,.34],[.5,.5,.5],.45),t&&(dd(n,i+3,e,7),Qe.boom(.4),Math.random()<.6&&Ri(new C(n,i+10,e),$s(Ys.laser),"#7dffb0"))}function fv(n){let e=[],t=0;for(let a=1;a<n.length;a++){let o=n[a].distanceTo(n[a-1]);e.push(o),t+=o}let i=.65,s=Math.min(2.6,Math.max(.8,t/160));Qe.charge(i),ct.active={path:n,segs:e,total:t,done:0,nextBoom:0};let r=null;kt.push({t:0,dur:i,up(a){Zi.uDark.value=Math.max(Zi.uDark.value,a*.65),Yc(n[0],a*.25)},done(){r=Qe.hum(),Kr(1.5),kt.push({t:0,dur:s,up(a){let o=ct.active,l=a*o.total;for(;o.done<=l;){let c=o.done,h=0;for(;h<o.segs.length&&c>o.segs[h];)c-=o.segs[h],h++;if(h>=o.segs.length)break;let u=n[h].clone().lerp(n[h+1],o.segs[h]?c/o.segs[h]:0);xd(u.x,u.z,o.done>=o.nextBoom),o.done>=o.nextBoom&&(o.nextBoom+=22),o.last=u,o.done+=3}o.last&&Yc(o.last.clone().setY(Sn(o.last.x,o.last.z)),1),Hn=Math.max(Hn,.5)},done(){r&&r(),Si.visible=!1,ct.active=null,kt.push({t:0,dur:.8,up(a){Zi.uDark.value=(ko?0:.65)*(1-a)},done(){Zi.uDark.value=0}})}})}})}function vd(n){Qe.zap(),kt.push({t:0,dur:.45,up(e){Yc(n,1-e*.5)},done(){Si.visible=!1}}),xd(n.x,n.z,!0)}function Md(){let n=(t,i=.4)=>new Mt({color:t,emissive:"#ff7a1a",emissiveIntensity:.55,metalness:i,roughness:.4}),e=new Kt;switch(kr.meteor){case"pill":{let t=new ze(new vr(5,10,6,16),n("#f8fafc",0)),i=new ze(new Ln(5.05,5.05,5,16),n("#ef4444",0));i.position.y=2.5,t.rotation.z=i.rotation.z=Math.PI/3,e.add(t,i);break}case"coin":{let t=new ze(new Ln(10,10,2.4,32),n("#fbbf24",1));t.rotation.x=1.1,e.add(t);break}case"wafer":{let t=new ze(new Ln(12,12,.8,48),n("#cbd5e1",1));t.rotation.x=1,e.add(t);break}case"tv":{let t=new ze(new Ut(16,10,4),n("#1f2937",.3)),i=new ze(new Mi(14,8.4),new _n({color:"#93c5fd"}));i.position.z=2.05,e.add(t,i);break}case"phone":{let t=new ze(new Ut(6,12,1),n("#111827",.5)),i=new ze(new Mi(5.4,11),new _n({color:"#a5b4fc"}));i.position.z=.55,e.add(t,i),e.scale.setScalar(1.4);break}case"gear":{let t=new ze(new Ln(8,8,3,10),n("#9ca3af",1));for(let i=0;i<10;i++){let s=new ze(new Ut(3,3,3),n("#9ca3af",1));s.position.set(Math.cos(i/10*Math.PI*2)*9,0,Math.sin(i/10*Math.PI*2)*9),t.add(s)}t.rotation.x=1.2,e.add(t);break}case"gpu":{let t=new ze(new Ut(18,4,9),n("#14532d",.6));for(let i of[-5,4]){let s=new ze(new Ln(3.2,3.2,.5,20),n("#111827",.2));s.position.set(i,-2.2,0),t.add(s)}e.add(t);break}default:e.add(new ze(new wr(8,1),new _n({color:"#ffb36b"})))}return e.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),e}function dv(n){let e=md(),t=new C(-e.z,0,e.x),i=n.clone().addScaledVector(e,-380).addScaledVector(t,160);i.y+=650;let s=Md();it.add(s),Qe.whoosh(1.5);let r=i.clone();kt.push({t:0,dur:1.5,up(a){let o=a*a;s.position.lerpVectors(i,n,o),s.rotation.x+=.12,s.rotation.y+=.07;for(let l=0;l<10;l++){let c=r.clone().lerp(s.position,Math.random());wi.spawn(c.x,c.y,c.z,k(-3,3),k(-3,3),k(-3,3),k(9,16),.5,[1,.9,.6],[1,.3,.05]),tn.spawn(c.x,c.y,c.z,k(-2,2),k(0,3),k(-2,2),k(10,18),3,[.45,.4,.36],[.5,.5,.5],.55)}r.copy(s.position)},done(){it.remove(s),s.traverse(a=>a.geometry&&a.geometry.dispose()),gd(n.x,n.y+4,n.z,34,95,{big:1.8}),qr(n.x,n.z,42,17),Vo("meteor"),Ri(n.clone().setY(n.y+30),$s(Ys.meteor),"#ffcf8a")}})}var Ct=null,Io=7;function pv(n){let e=Io,t=Math.min(9,.08*Math.pow(1.9,e-4));Ct={t:0,dur:3.2,M:e,A:t,P:n.clone()},Qe.rumble(3.4,Math.min(1,(e-4)/5)),Vo("quake"),Kr(t*.6),Ri(n.clone().setY(n.y+25),fe("magLabel",e.toFixed(1),$s(Ys.quake)),"#ffd28a");for(let i of un){if(i.gone)continue;let s=Math.hypot(i.cx-n.x,i.cz-n.z),r=e-2.6*Math.log10(1+s/50);r<6.5&&!i.vox||r<5.6||Hf(k(.2,2.6),()=>mv(i,r))}if(e>=8.5)for(let i=0;i<3+(e-8.5)*2;i++){let s=k(0,Math.PI*2),r=k(80,60+(e-8)*120);for(let a=0;a<r;a+=5)Hf(.3+a/120,()=>qr(n.x+Math.cos(s)*a,n.z+Math.sin(s)*a,3.5,6*(1-a/r)+1.5,.4))}}function mv(n,e){if(n.gone)return;if(Ws.burst(n.cx,n.h*.8,n.cz,14,10),e>=7.5){let a=rt.cap-rt.n;fd(n,n.cx,n.cz,1,Math.max(6,Math.min(n.site?110:40,Math.floor(a/6))),!0);return}if(!nh(n))return;let t=[];for(let a=0;a<n.vox.length;a++)n.vox[a]>=0&&t.push(a);let i=a=>(a/n.nz|0)%n.ny,s=a=>[a/(n.nz*n.ny)|0,a%n.nz],r=e>=7?1+Math.floor((e-7)*4):e>=6.2?1:0;for(let a=0;a<r;a++){let o=n.cellsIn[Math.random()*n.cellsIn.length|0],l=o/n.nz|0,c=o%n.nz,h=Math.max(1.5,Math.sqrt(n.cellsIn.length)*k(.25,.45));t.filter(u=>i(u)<=1&&n.vox[u]>=0).forEach(u=>{let[f,p]=s(u);Math.hypot(f-l,p-c)<=h&&zs(n,u,"debris",k(-2,2),0,k(-2,2))})}e<6.2&&t.filter(a=>n.vox[a]>=0&&i(a)===n.ny-1&&Math.random()<.04).forEach(a=>zs(n,a,"debris",k(-3,3),k(0,2),k(-3,3)))}var $c=!1;function gv(n){if($c)return;$c=!0;let e=new Kt,t=new ze(new vr(2.4,7,6,12),new Mt({color:"#30353b",metalness:.5,roughness:.4})),i=new ze(new Ln(2.5,2.5,1.2,12),new Mt({color:"#f2c200"}));e.add(t,i),it.add(e);let s=n.clone();s.y+=700,Qe.whistle(2.2),Ri(n.clone().setY(n.y+40),$s(Ys.nuke),"#ff8080"),kt.push({t:0,dur:2.2,up(r){e.position.lerpVectors(s,n,r*r),e.rotation.z=Math.sin(r*20)*.05},done(){it.remove(e),_v(n.clone().setY(Sn(n.x,n.z)+10))}})}var kc=1,Fr=0;function _v(n){xv(1,2.2),Fr=2.4,Qe.nuke(),Vo("nuke"),Kr(14),Ws.burst(n.x,n.y+40,n.z,220,160),rh(n.x,n.y,n.z,170,3.2),Co(n.x,n.y,n.z,1100,4.5,"#ffe9c0"),Co(n.x,n.y,n.z,700,3,"#ffffff");let t=[...Ho.query(n.x,n.z,420)].filter(s=>Math.hypot(s.cx-n.x,s.cz-n.z)<440),i=Math.max(8,Math.floor(Math.min(220,(rt.cap-rt.n-300)/Math.max(1,t.length))));for(let s of t)fd(s,n.x,n.z,420,s.site?i:Math.ceil(i*.5));Yr.wake(n.x,n.z,420,120,n.x,n.z),rt.push(n.x,n.y,n.z,420*1.3,150),ts.clear(n.x,n.z,420),qr(n.x,n.z,230,75),Gr(3e4,fe("quit")),kt.push({t:0,dur:9,up(s){let r=Math.min(520,700*Math.sqrt(s));for(let a=0;a<9*Jr;a++){let o=k(0,Math.PI*2),l=k(0,35);tn.spawn(n.x+Math.cos(o)*l,n.y+k(0,r*.9),n.z+Math.sin(o)*l,0,k(20,50),0,k(35,70),4,s<.25?[1,.55,.2]:[.55,.45,.4],[.42,.38,.36],.6,1.2);let c=k(0,Math.PI*2),h=k(40,90+r*.35);tn.spawn(n.x+Math.cos(c)*h*.5,n.y+r+k(-30,30),n.z+Math.sin(c)*h*.5,Math.cos(c)*h*.4,k(-4,14),Math.sin(c)*h*.4,k(60,110),5,s<.3?[1,.6,.25]:[.6,.5,.45],[.45,.42,.4],.7,1.4),s<.5&&wi.spawn(n.x+k(-40,40),n.y+r*k(.6,1),n.z+k(-40,40),k(-10,10),k(5,25),k(-10,10),k(40,80),1.2,[1,.8,.4],[1,.25,.05],.8)}if(s<.15)for(let a=0;a<20;a++){let o=k(0,Math.PI*2),l=k(150,320);tn.spawn(n.x,n.y,n.z,Math.cos(o)*l,k(2,12),Math.sin(o)*l,k(40,70),3.5,[.7,.62,.55],[.6,.58,.55],.6,1.5)}},done(){$c=!1}})}var pe=n=>document.getElementById(n),Wr=[{id:"bomb",short:fe("tools.bomb")[1],svg:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 8l9 6 9-6"/>',name:fe("tools.bomb")[0],tip:fe("tools.bomb")[2]},{id:"bat",short:fe("tools.bat")[1],svg:'<rect x="5" y="4" width="14" height="17" rx="2"/><rect x="9" y="2.5" width="6" height="3" rx="1"/><path d="M8 10h8M8 14h5"/><circle cx="15.5" cy="16.5" r="2.2"/>',name:fe("tools.bat")[0],tip:fe("tools.bat")[2],slider:{label:fe("batSize"),min:.5,max:3,step:.1,get:()=>Fs,set:n=>Fs=n,fmt:n=>`\xD7${n.toFixed(1)} \xB7 ${Math.round(36*n)} m`}},{id:"laser",short:fe("tools.laser")[1],svg:'<path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/>',name:fe("tools.laser")[0],tip:fe("tools.laser")[2]},{id:"meteor",short:fe("tools.meteor")[1],svg:'<circle cx="15" cy="15" r="5"/><path d="M3 3l8 8M7 3l6 6M3 7l6 6"/>',name:fe("tools.meteor")[0],tip:fe("tools.meteor")[2]},{id:"quake",short:fe("tools.quake")[1],svg:'<path d="M2 13h4l2-6 3 11 3-9 2 4h6"/>',name:fe("tools.quake")[0],tip:fe("tools.quake")[2],slider:{label:fe("mag"),min:4,max:10,step:.1,get:()=>Io,set:n=>Io=n,fmt:n=>`M ${n.toFixed(1)} \xB7 ${fe("qk")[n<6?0:n<7.5?1:2]}`}},{id:"nuke",short:fe("tools.nuke")[1],svg:'<circle cx="12" cy="12" r="2"/><path d="M12 10L8.5 4a8 8 0 0 1 7 0zM13.7 13l3.5 6a8 8 0 0 0 3.5-6zM10.3 13l-3.5 6a8 8 0 0 1-3.5-6z" fill="currentColor"/>',name:fe("tools.nuke")[0],tip:fe("tools.nuke")[2]}],cn="bomb";function yv(){let n=pe("dock");Wr.forEach((e,t)=>{let i=document.createElement("button");i.className="tool",i.dataset.id=e.id,i.title=e.tip,i.innerHTML=`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${e.svg}</svg><span class="nm">${e.name}</span><span class="sh">${e.short}</span><kbd>${t+1}</kbd>`,i.onclick=()=>Do(e.id),n.appendChild(i)}),pe("slider").oninput=e=>{let t=Wr.find(i=>i.id===cn);t.slider.set(+e.target.value),pe("sliderVal").textContent=t.slider.fmt(+e.target.value)},Do("bomb")}function Do(n){cn!==n&&Qe.click(),cn=n,document.querySelectorAll(".tool").forEach(i=>i.classList.toggle("on",i.dataset.id===n));let e=Wr.find(i=>i.id===n);pe("tip").textContent=e.tip;let t=pe("sliderWrap");e.slider?(t.hidden=!1,pe("sliderLabel").textContent=e.slider.label,Object.assign(pe("slider"),{min:e.slider.min,max:e.slider.max,step:e.slider.step,value:e.slider.get()}),pe("sliderVal").textContent=e.slider.fmt(e.slider.get())):t.hidden=!0}var Hs=[];function Ri(n,e,t="#fff",i=!1){let s=document.createElement("div");s.className="float"+(i?" big":""),s.textContent=e,s.style.color=t,s.style.opacity=0,pe("floaters").appendChild(s),Hs.push({el:s,pos:n.clone(),t:0}),Hs.length>28&&Hs.shift().el.remove()}var Wf=0;function ai(n,e=1800,t){let i=pe("toast");i.textContent=n,i.style.color=t||"",i.classList.add("show"),clearTimeout(Wf),Wf=setTimeout(()=>i.classList.remove("show"),e)}function xv(n,e){let t=pe("flash");t.style.transition="none",t.style.opacity=n,requestAnimationFrame(()=>{t.style.transition=`opacity ${e}s ease-out`,t.style.opacity=0})}function ch(n){ko=n;let e=n?Ix:Eo;Zi.uTop.value.copy(e.top),Zi.uHor.value.copy(e.hor),En.fog.color.copy(e.fog),Kf.intensity=n?.18:1.1,St.intensity=n?.12:2.6,St.color.set(n?"#9fb4ff":"#fff3e0"),Nr.emissiveIntensity=n?1.6:0,sd.emissiveIntensity=n?1.6:0;for(let t of cd)t.mat.emissiveIntensity=n?1.6:.25;Ux.visible=n,pe("nightBtn").classList.toggle("on",n)}var vn={};function bd(){let n=oh();vn.score.textContent=ji(Math.round(ns)),vn.rank.textContent=Vn[n][0],vn.rank.style.background=Vn[n][2];let e=Vn[n+1];vn.bar.style.width=e?`${Math.min(100,(Ei-Vn[n][1])/(e[1]-Vn[n][1])*100)}%`:"100%",vn.mult.textContent=`\xD7${Lo().toFixed(2)}`,vn.rate.textContent=`${Math.min(100,$r/tv*100).toFixed(1)}%`,vn.cnt.textContent=fe("count",Zr,th),vn.depth.textContent=`${ji(6371*Math.pow(Math.min(1,Bs/Vr),1.6),{maximumFractionDigits:Bs<40?1:0})} ${fe("km")}`}function Sd(){xt.render(En,je);let n=new Image;n.src=oi.toDataURL("image/jpeg",.9),n.onload=()=>{let[e,t]=Ai(1200,630),i=Math.max(1200/n.width,630/n.height);t.drawImage(n,(1200-n.width*i)/2,(630-n.height*i)/2,n.width*i,n.height*i);let s=t.createLinearGradient(0,0,760,0);s.addColorStop(0,"rgba(10,14,22,.88)"),s.addColorStop(1,"rgba(10,14,22,0)"),t.fillStyle=s,t.fillRect(0,0,1200,630),t.fillStyle="#ff6a2b",t.font="700 22px sans-serif",t.fillText(Xt==="free"?Le.series:`${Le.series} \xB7 ${fe(Xt==="t60"?"mode.t60":"mode.demo")}`,56,70),t.fillStyle="#fff",t.font="900 54px sans-serif",t.fillText(fe("smash",Le.company),56,132);let r=fe("card");[...Xt==="demolish"&&is?[[fe("mode.demo"),(Wo/1e3).toFixed(1)+fe("mode.sec")]]:Xt==="t60"?[[fe("mode.t60"),ji(Math.round(ns))]]:[],[r[0],ji(Math.round(ns))],[r[1],Vn[Po][0]],[r[2],vn.rate.textContent],[r[3],vn.cnt.textContent],[r[4],vn.depth.textContent]].slice(0,6).forEach(([h,u],f)=>{t.fillStyle="#aab4c3",t.font="500 24px sans-serif",t.fillText(h,56,190+f*62),t.fillStyle="#fff",t.font="800 40px sans-serif",t.fillText(u,300,194+f*62)});let o=()=>{if(!(si.complete&&si.naturalWidth))return!1;let h=64,u=Math.min(200,si.naturalWidth/si.naturalHeight*h),f=1160-u-28;return t.fillStyle=Le.logoBg||"#fff",t.beginPath(),t.roundRect?t.roundRect(f,36,u+28,h+24,16):t.rect(f,36,u+28,h+24),t.fill(),t.drawImage(si,f+14,48,u,h),!0};t.fillStyle="#cfd6df",t.font="500 20px sans-serif",t.fillText(`${Le.place} \xB7 ${Le.tagline}`,56,590);let l=e.toDataURL("image/png");try{o()&&(l=e.toDataURL("image/png"))}catch{}pe("cardImg").src=l,pe("cardDl").href=l,pe("cardModal").hidden=!1;let c=Xt!=="free"&&is;pe("submitRow").hidden=!Xo||No||!c,pe("submitMsg").textContent=Xt==="free"?fe("mode.freeNoRank"):"",pe("againBtn").hidden=Xt==="free",Ti&&Rv()}}var zr=new lo,Uo=new se;function vv(n){let e=n.ray.origin,t=n.ray.direction,i=0;for(let s=0;s<5e3;s+=3){let r=e.x+t.x*s,a=e.y+t.y*s,o=e.z+t.z*s;if(a<=Qi(r,o)){let l=i,c=s;for(let h=0;h<10;h++){let u=(l+c)/2;e.y+t.y*u<=Qi(e.x+t.x*u,e.z+t.z*u)?c=u:l=u}return{point:new C(e.x+t.x*c,e.y+t.y*c,e.z+t.z*c),distance:c}}i=s}return null}function Go(n,e,t){Uo.set(n/innerWidth*2-1,-(e/innerHeight)*2+1),zr.setFromCamera(Uo,je);let i=vv(zr);if(t)return i;let r=zr.intersectObjects([...zo.children,nt.mesh,en.mesh],!1)[0];return r&&(!i||r.distance<i.distance)?{point:r.point.clone(),distance:r.distance}:i}var Xt="free",Ed=0,is=!1,Zc=!1,Wo=0,Xf=60;function wd(n){Xt=n,Ed=Nn,is=!1,Zc=!1,No=!1,document.body.dataset.mode=n,fh("play",n),pe("timer").hidden=n==="free",n==="demolish"&&document.querySelector('.tool[data-id="nuke"]').classList.add("ban")}function Mv(){if(Xt==="free"||is)return;let n=pe("timer"),e=Nn-Ed;if(Xt==="t60"){let t=Math.max(0,Xf-e);n.textContent=t.toFixed(1),n.classList.toggle("hurry",t<10),t<=0&&qf(fe("mode.timeUp"),Xf*1e3)}else n.textContent=e.toFixed(1),Zr>=th&&qf(fe("mode.done",e.toFixed(1)),Math.round(e*1e3))}function qf(n,e){is=!0,Wo=e,fh("finish",Xt),pe("timer").classList.remove("hurry"),ai(n,3e3),Qe.cheer(),setTimeout(Sd,1200)}function Jc(n){if(!is){if(cn==="nuke"&&Xt==="demolish"){ai(fe("mode.nukeBan"),1800);return}if(cn==="nuke"&&Xt==="t60"){if(Zc){ai(fe("mode.nukeOnce"),1800);return}Zc=!0}qc(cn),cn==="bomb"?ov(n):cn==="bat"?cv(n):cn==="laser"?vd(n):cn==="meteor"?dv(n):cn==="quake"?pv(n):cn==="nuke"&&gv(n)}}var Xs=new Map,Dn=null;oi.addEventListener("pointerdown",n=>{if(Xs.set(n.pointerId,n),Xs.size>1){ct.drawing&&hh(),Dn=null;return}if(Dn={x:n.clientX,y:n.clientY,t:performance.now(),btn:n.button},cn==="laser"&&n.button===0&&!ct.active){let e=Go(n.clientX,n.clientY,!0);if(e){ct.drawing=!0,Pt.enabled=!1,ct.path=[e.point];let t=new gt().setFromPoints([e.point,e.point]);ct.line=new gr(t,new Rr({color:"#21d07a",dashSize:6,gapSize:4,depthTest:!1})),ct.line.renderOrder=9,it.add(ct.line)}}},{capture:!0});oi.addEventListener("pointermove",n=>{if(Xs.has(n.pointerId)&&Xs.set(n.pointerId,n),!ct.drawing)return;let e=Go(n.clientX,n.clientY,!0);if(!e)return;let t=ct.path[ct.path.length-1];e.point.distanceTo(t)>3&&(ct.path.push(e.point),ct.line.geometry.dispose(),ct.line.geometry=new gt().setFromPoints(ct.path.map(i=>i.clone().setY(i.y+1.5))),ct.line.computeLineDistances())});function hh(){ct.drawing=!1,Pt.enabled=!0,ct.line&&(it.remove(ct.line),ct.line.geometry.dispose(),ct.line=null)}function bv(n){if(Xs.delete(n.pointerId),ct.drawing){let s=ct.path;hh();let r=0;for(let a=1;a<s.length;a++)r+=s[a].distanceTo(s[a-1]);r<8?(qc("laser"),vd(s[0])):(qc("laser"),fv(s)),Dn=null;return}if(!Dn||Dn.btn!==0){Dn=null;return}let e=Math.hypot(n.clientX-Dn.x,n.clientY-Dn.y),t=performance.now()-Dn.t;if(Dn=null,e>8||t>600)return;let i=Go(n.clientX,n.clientY);i&&Jc(i.point)}oi.addEventListener("pointerup",bv);oi.addEventListener("pointercancel",n=>{Xs.delete(n.pointerId),ct.drawing&&hh(),Dn=null});addEventListener("keydown",n=>{if(n.target.tagName==="INPUT")return;let e=+n.key;e>=1&&e<=Wr.length&&Do(Wr[e-1].id),(n.key==="n"||n.key==="N")&&ch(!ko),(n.key==="l"||n.key==="L")&&pe("labelBtn").click(),(n.key==="m"||n.key==="M")&&Td(),n.key==="Escape"&&(pe("cardModal").hidden=!0,pe("rankModal").hidden=!0)});function Td(){Qe.muted=!Qe.muted,pe("muteBtn").classList.toggle("on",Qe.muted),pe("muteBtn").textContent=Qe.muted?fe("btn.soundOff"):fe("btn.sound")}addEventListener("resize",()=>{je.aspect=innerWidth/innerHeight,je.updateProjectionMatrix(),xt.setSize(innerWidth,innerHeight),typeof Xr=="function"&&Gn>qs()&&Xr(qs())});var Xo=!!(Le.supabaseUrl&&Le.supabaseKey);async function uh(n,e){let t=new AbortController,i=setTimeout(()=>t.abort(),9e3);try{let s=await fetch(`${Le.supabaseUrl}/rest/v1/rpc/${n}`,{method:"POST",signal:t.signal,headers:{apikey:Le.supabaseKey,"Content-Type":"application/json"},body:JSON.stringify(e||{})});if(!s.ok)throw new Error(`${s.status}`);return s.json()}finally{clearTimeout(i)}}function fh(n,e){if(Ti||!Xo||navigator.webdriver||location.hash==="#bench")return;let t=((navigator.language||"").split("-")[1]||"").toUpperCase();uh("smash_log",{p_kind:n,p_company:Le.code,p_mode:e||null,p_lang:(navigator.language||"").slice(0,2),p_mobile:matchMedia("(pointer:coarse)").matches,p_cc:t||null}).catch(()=>{})}setTimeout(()=>fh("visit"),1500);var ks=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),No=!1,Hr="t60";async function Ad(n){let e=pe("rankList");if(document.querySelectorAll(".bt").forEach(t=>t.classList.toggle("on",t.dataset.m===Hr)),!Xo){e.innerHTML=`<p class="muted">${fe("rank.off")}</p>`;return}e.innerHTML=`<p class="muted">${fe("rank.loading")}</p>`;try{let t=await uh("smash_top",{p_company:Le.code,p_limit:20,p_mode:Hr});e.innerHTML=t.length?`<ol>${t.map((i,s)=>`<li class="${i.nick===n?"me":""}"><span class="no">${s+1}</span><b>${ks(i.nick)}</b><span class="rk">${ks(i.rank_name||"")}</span><span class="sc">${Hr==="demolish"?(i.time_ms/1e3).toFixed(1)+fe("mode.sec"):ji(i.score)}</span></li>`).join("")}</ol>`:`<p class="muted">${fe("rank.empty")}</p>`}catch{e.innerHTML=`<p class="muted">${fe("rank.fail")}</p>`}}async function Sv(){if(!Xo||No)return;let n=(pe("nick").value||"").trim()||fe("rank.anon");try{localStorage.setItem("smash-nick",n)}catch{}pe("submitBtn").disabled=!0,pe("submitMsg").textContent=fe("rank.sending");try{let e=await uh("smash_submit",{p_company:Le.code,p_nick:n,p_score:Math.round(ns),p_collapsed:Zr,p_rank:Vn[Po][0],p_mode:Xt,p_time_ms:Wo});e.ok?(No=!0,pe("submitMsg").textContent=fe("rank.done",Le.company,e.position),Hr=Xt,Rd(n.slice(0,12))):(pe("submitMsg").textContent=e.reason==="too_fast"?fe("rank.fast"):fe("rank.err"),pe("submitBtn").disabled=!1)}catch{pe("submitMsg").textContent=fe("rank.err"),pe("submitBtn").disabled=!1}}function Rd(n){pe("rankModal").hidden=!1,pe("rankTitle").textContent=fe("rank.title",Le.company),Ad(typeof n=="string"?n:void 0)}var vo=!0,Ev=un.filter(n=>n.site&&n.name).map(n=>{let e=document.createElement("div");return e.className="blabel",e.textContent=n.name,e.style.display="none",pe("labels").appendChild(e),{b:n,el:e,on:!1}}),$i=new C,Bc=new Set;function wv(){let n=je.position.distanceTo(Pt.target)>So*3.2+900;Bc.clear();let e=innerWidth,t=innerHeight,i=[];for(let r of Ev){let a=r.b,o=vo&&!n&&!a.gone&&!a.collapsed;o&&($i.set(a.cx,a.h*(a.vox?Math.max(.15,a.alive/a.vol):1)+4+(a.sign?a.signH:0),a.cz).project(je),o=$i.z<1&&Math.abs($i.x)<1.05&&Math.abs($i.y)<1.05,o&&i.push([r,($i.x*.5+.5)*e,(-$i.y*.5+.5)*t,$i.z])),!o&&r.on&&(r.el.style.display="none",r.on=!1)}i.sort((r,a)=>r[3]-a[3]);let s=Ft?je.position.distanceTo(Pt.target)>So*1.2+250?10:22:60;if(i.length>s){i.sort((r,a)=>Math.hypot(r[1]-e/2,r[2]-t/2)-Math.hypot(a[1]-e/2,a[2]-t/2));for(let r of i.splice(s))r[0].on&&(r[0].el.style.display="none",r[0].on=!1)}for(let[r,a,o]of i){let l=`${Math.round(a/84)},${Math.round(o/20)}`;if(Bc.has(l)){r.on&&(r.el.style.display="none",r.on=!1);continue}Bc.add(l),r.on||(r.el.style.display="",r.on=!0),r.el.style.transform=`translate(${a|0}px,${o|0}px) translate(-50%,-100%)`}}function Tv(n){if(!n)return null;if(n.object===nt.mesh){let a=nt.owner[n.instanceId];return a>=0?un[a]:null}let e=n.object.userData.owners;if(!e)return null;let t=n.faceIndex*3,i=0,s=e.length-1,r=-1;for(;i<=s;){let a=i+s>>1;e[a][0]<=t?(r=a,i=a+1):s=a-1}return r>=0?un[e[r][1]]:null}var Yf=0;oi.addEventListener("pointermove",n=>{if(n.pointerType!=="mouse"||n.buttons||ct.drawing){pe("hover").hidden=!0;return}let e=performance.now();if(e-Yf<90)return;Yf=e,Uo.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),zr.setFromCamera(Uo,je);let t=Tv(zr.intersectObjects([...zo.children,nt.mesh],!1)[0]),i=pe("hover");if(!t||t.gone){i.hidden=!0;return}let s=t.vox?Math.round(t.alive/t.vol*100):100;i.innerHTML=`<b>${t.name||(t.site?Le.company:fe("hover")[0])}</b><span>${t.site?Le.company+" \xB7 ":""}${fe("hover.1",Math.round(t.h),s)}</span>`,i.style.transform=`translate(${n.clientX+14}px,${n.clientY+14}px)`,i.hidden=!1});oi.addEventListener("pointerleave",()=>pe("hover").hidden=!0);var $f=performance.now(),zc=0,Hc=0,Zf=.5,qs=()=>Math.min(devicePixelRatio,ri[Fn].dprMax,Math.sqrt(ri[Fn].px/(innerWidth*innerHeight))),Gn=qs(),_o=0,Vc=0,Gc=0;xt.setPixelRatio(Gn);function Xr(n){n=Math.round(n*20)/20,n!==Gn&&(Gn=n,xt.setPixelRatio(Gn),xt.setSize(innerWidth,innerHeight))}function Av(n){if(_o+=n,Vc++,_o<.75)return;let e=_o/Vc*1e3;_o=0,Vc=0,e>21?Gn>Zf+.01?Xr(Math.max(Zf,Gn*.85)):++Gc>=3&&Fn>0&&(Cd(Fn-1,!0),Gc=0):(Gc=0,e<12.5&&Gn<qs()&&Xr(Math.min(qs(),Gn+.1)))}function Cd(n,e){Fn=n;try{localStorage.setItem("smash-q",n)}catch{}let t=ri[n],i=t.shadow>0;St.castShadow!==i&&(St.castShadow=i,En.traverse(r=>{r.material&&[].concat(r.material).forEach(a=>a.needsUpdate=!0)})),i&&St.shadow.mapSize.x!==t.shadow&&(St.shadow.mapSize.set(t.shadow,t.shadow),St.shadow.map&&(St.shadow.map.dispose(),St.shadow.map=null)),xt.shadowMap.needsUpdate=!0,Jr=t.fxk,Xr(qs());let s=document.getElementById("qBtn");s&&(s.textContent=fe("quality",t.name)),e&&ai(fe("qDown",t.name),2200)}var Mo=[],bo=[];function Pd(n){let e=performance.now(),t=(n-$f)/1e3,i=Math.min(.05,t);$f=n,!document.hidden&&t<.5&&Av(t),Fr>0?(Fr-=i,kc=Fr>1.2?.25:.25+(1.2-Fr)/1.2*.75):kc=1;let s=i*kc;Nn+=s,je.position.sub(Fc),Pt.update(),Fc.set(k(-1,1),k(-1,1),k(-1,1)).multiplyScalar(Hn),je.position.add(Fc),Hn*=Math.exp(-i*4.5),Hn<.02&&(Hn=0);for(let f=0;f<kt.length;f++){let p=kt[f];p.t+=s/p.dur,p.up(Math.min(1,p.t)),p.t>=1&&(kt.splice(f,1),f--,p.done())}if(Ct){Ct.t+=s;let f=Math.max(0,1-Ct.t/Ct.dur),p=Ct.A*f*(Ct.t<.3?Ct.t/.3:1);it.position.set(k(-1,1)*Math.min(2.5,p*.3),0,k(-1,1)*Math.min(2.5,p*.3)),Or.uQC.value.set(Ct.P.x,Ct.P.z),Or.uQT.value=Ct.t,Or.uQA.value=Ct.M>=7.5?p:0,ts.sway(Ct.t,p),Hn=Math.max(Hn,p*.25),Ct.t>=Ct.dur&&(id(Ct.P.x,Ct.P.z,400),Ct=null,it.position.set(0,0,0),Or.uQA.value=0,ts.sway(0,0))}rt.update(s),wi.update(s),tn.update(s),Ws.update(s);let r=0;for(let f of un)f.dirty&&r<4&&Nn-(f.lastCheck||0)>.15&&(f.lastCheck=Nn,iv(f),r++);Wc.length&&sv(Wc.shift()),nt.flush(),en.flush(),qx(s),Nn-ah>1.3&&(Ei=Math.max(0,Ei-s*(50+Ei*.14))),xo>0&&Nn-Vf>.18&&(Ri(Xc.clone().setY(Xc.y+6),`+${ji(Math.round(xo))}`,"#ffe9a8"),xo=0,Vf=Nn);for(let f=0;f<Hs.length;f++){let p=Hs[f];if(p.t+=i,p.t>1.6){p.el.remove(),Hs.splice(f,1),f--;continue}let g=p.pos.clone();if(g.y+=p.t*14,g.project(je),!(g.z<=1&&Math.abs(g.x)<=1.1&&Math.abs(g.y)<=1.1)){p.el.style.opacity=0;continue}p.el.style.transform=`translate(${(g.x*.5+.5)*innerWidth}px, ${(-g.y*.5+.5)*innerHeight}px) translate(-50%,-50%) scale(${p.t<.12?.6+p.t*3.4:1})`,p.el.style.opacity=p.t>1.1?(1.6-p.t)/.5:1}let a=Pt.target,o=Math.round(a.x/20)*20,l=Math.round(a.z/20)*20;(rt.n>0||kt.length>0||Ct||nt.hi>=0||en.hi>=0||o!==St.target.position.x||l!==St.target.position.z)&&(Hc=(Hc+1)%(Ft?2:1),Hc||(xt.shadowMap.needsUpdate=!0)),St.target.position.set(o,0,l),St.position.copy(St.target.position).addScaledVector(Dx,900);let h=xt.getDrawingBufferSize(new se).y/(2*Math.tan(Us.degToRad(je.fov/2)));wi.mat.uniforms.uScale.value=h,tn.mat.uniforms.uScale.value=h,Ws.mat.uniforms.uScale.value=h,Jf.position.copy(je.position),zc+=i,zc>.1&&(zc=0,bd(),Mv()),wv();let u=performance.now();Px||xt.render(En,je),Mo.push(u-e),bo.push(performance.now()-u),bo.length>600&&bo.shift(),Mo.length>600&&Mo.shift(),requestAnimationFrame(Pd)}["score","rank","bar","mult","rate","cnt","depth"].forEach(n=>vn[n]=pe(`h-${n}`));bd();document.title=`${fe("smash",Le.company)} | ${Le.series}`;pe("title").textContent=fe("smash",Le.company);pe("series").textContent=Le.series;var si=new Image;{let n=pe("logo");n.hidden=!1;let e=()=>{n.style.background="#ff6a2b",n.innerHTML=`<b>${String(Le.sign||Le.company).trim().slice(0,1)}</b>`};Le.logo?(n.style.background=Le.logoBg||"#fff",si.alt=Le.company,si.onerror=e,si.src=new URL(Le.logo,document.baseURI).href,n.appendChild(si)):e()}pe("startTitle").textContent=fe("smash",Le.company);pe("startSeries").textContent=Le.series;pe("startTag").textContent=Le.tagline;pe("credit").textContent=fe("credit",Le.place,Le.company,th);yv();pe("nightBtn").onclick=()=>ch(!ko);pe("menuBtn").onclick=()=>pe("bottom").classList.toggle("open");pe("labelBtn").onclick=()=>{vo=!vo,pe("labelBtn").classList.toggle("on",vo)};pe("qBtn").textContent=fe("quality",ri[Fn].name);document.documentElement.lang=On;document.querySelectorAll("[data-t]").forEach(n=>{let e=fe(n.dataset.t);typeof e=="string"&&(n[n.dataset.attr||"innerHTML"]=e)});pe("qBtn").onclick=()=>Cd((Fn+1)%ri.length);pe("hubBtn").href=Le.hub||"../";Ti&&(pe("hubBtn").onclick=n=>{n.preventDefault(),Ld()});Kc&&setTimeout(()=>ai(fe("noGpu"),6e3),1500);pe("muteBtn").onclick=Td;pe("resetBtn").onclick=()=>location.reload();pe("cardBtn").onclick=Sd;pe("cardClose").onclick=()=>pe("cardModal").hidden=!0;pe("rankBtn").onclick=()=>Rd();document.querySelectorAll(".bt").forEach(n=>n.onclick=()=>{Hr=n.dataset.m,Ad()});document.querySelectorAll(".bt").forEach((n,e)=>n.textContent=fe("mode.boards")[e]);pe("rankClose").onclick=()=>pe("rankModal").hidden=!0;pe("submitBtn").onclick=Sv;try{pe("nick").value=localStorage.getItem("smash-nick")||""}catch{}pe("rankAll").href=(Le.hub||"../")+"#rank";Ti&&(pe("rankAll").hidden=!0);["pointerdown","touchend","keydown"].forEach(n=>addEventListener(n,()=>{pe("start").classList.contains("gone")&&Qe.init()},{capture:!0,passive:!0}));document.addEventListener("visibilitychange",()=>{!document.hidden&&Qe.ctx&&Qe.ctx.state!=="running"&&Qe.ctx.resume()});for(let[n,e]of[["startBtn","t60"],["demoBtn","demolish"],["freeBtn","free"]])pe(n).onclick=()=>{Qe.init(),pe("start").classList.add("gone"),wd(e),setTimeout(()=>ai(fe(e==="free"?"hint":e==="t60"?"mode.t60d":"mode.demod"),3500),400)};pe("againBtn").onclick=()=>location.reload();function Rv(){if(pe("nextBtn"))return;let n=document.createElement("button");n.className="btn primary",n.id="nextBtn",n.textContent={ko:"\uB2E4\uC74C \uD68C\uC0AC \u2192",ja:"\u6B21\u306E\u4F1A\u793E \u2192",zh:"\u4E0B\u4E00\u5BB6\u516C\u53F8 \u2192",vi:"C\xF4ng ty ti\u1EBFp \u2192"}[On]||"Next company \u2192",pe("againBtn").after(n),n.onclick=async()=>{let e=[];try{e=JSON.parse(localStorage.getItem("smash-seen")||"[]")}catch{}let t=[];try{t=await(await fetch(new URL("../companies.json",location.href))).json()}catch{return Ld()}let i=t.filter(r=>r.code!==Le.code&&!e.includes(r.code)),s=i.length?i:t.filter(r=>r.code!==Le.code);location.href=`../${s[Math.floor(Math.random()*s.length)].code}/index.html`}}if(Ti)try{let n="smash-seen",e=JSON.parse(localStorage.getItem(n)||"[]");e.includes(Le.code)||localStorage.setItem(n,JSON.stringify([...e,Le.code]))}catch{}window.__sfxState=()=>Qe.ctx&&Qe.ctx.state;window.__smash={cam:(n,e)=>{je.position.set(...n),Pt.target.set(...e),Pt.update()},audio:()=>Qe.ctx?Qe.ctx.state:"none",startMode:wd,mode:()=>({MODE:Xt,gameOver:is,finishMs:Wo}),renderNow:()=>{xt.shadowMap.needsUpdate=!0,xt.render(En,je)},rubbleStats:()=>{let n=0,e=0,t=0,i=en;for(let s=0;s<i.high;s++){if(!i.alive[s])continue;let r=i.pos[s*3],a=i.pos[s*3+2],o=(i.size[s*3]+i.size[s*3+1]+i.size[s*3+2])/6,l=i.pos[s*3+1]-o*.8-Sn(r,a);l>n&&(n=l),l>20&&e++,i.pos[s*3+1]-o*.8>Qi(r,a)+3&&t++}return{live:i.live,maxH:+n.toFixed(1),over20:e,floating:t}},screenOf:(n,e,t)=>{let i=new C(n,e,t).project(je);return{x:(i.x*.5+.5)*innerWidth,y:(-i.y*.5+.5)*innerHeight}},dpr:()=>Gn,perfLog:Mo,renderLog:bo,info:()=>({calls:xt.info.render.calls,tris:xt.info.render.triangles,progs:xt.info.programs.length}),simTime:()=>Nn,actV:(n,e)=>{let t=new C(...e);n==="quake"&&(Io=9),Jc(t)},buildings:un,blocks:nt,debris:rt,rubbleL:en,act:Jc,pickAt:Go,selectTool:Do,setNight:ch,state:()=>({score:ns,style:Ei,destroyedSite:$r,collapsedSite:Zr,deepest:Bs,debris:rt.n,blocks:nt.live,rubble:en.live,fx:kt.length})};async function Ld(){let n=pe("pickModal");if(!n){n=document.createElement("div"),n.id="pickModal",n.innerHTML=`<div class="box panel"><div class="rhead"><b>${ks(fe("btn.hub").replace(/\s*→\s*$/,""))}</b><button class="btn" id="pickClose">${ks(fe("btn.close"))}</button></div><input id="pickQ" autocomplete="off" placeholder="\u{1F50D}"><div id="pickList"></div></div>`,document.body.appendChild(n),pe("pickClose").onclick=()=>n.hidden=!0,n.onclick=s=>{s.target===n&&(n.hidden=!0)};let e=[];try{e=await(await fetch(new URL("../companies.json",location.href))).json()}catch{}let t=s=>(On===s.lang?s.n:s.en)||s.n,i=()=>{let s=pe("pickQ").value.trim().toLowerCase();pe("pickList").innerHTML=e.filter(r=>!s||(r.n+" "+r.en+" "+r.a).toLowerCase().includes(s)).map(r=>`<a class="pk${r.code===Le.code?" on":""}" href="../${r.code}/index.html"><span>${r.f}</span><b>${ks(t(r))}</b><i>${ks(On===r.lang?r.p:r.pe||r.p)}</i></a>`).join("")};pe("pickQ").oninput=i,i()}n.hidden=!1}function Cv(){let n=new C(0,-500,0);rh(n.x,n.y,n.z,1,.01),Co(n.x,n.y,n.z,1,.01),wi.spawn(0,-500,0,0,0,0,1,.01,[1,1,1],[1,1,1]),tn.spawn(0,-500,0,0,0,0,1,.01,[1,1,1],[1,1,1]);let e=[new ze(new Ut(1,1,1),new Mt({map:yd})),new ze(new Ut(1,1,1),new Mt({color:"#30353b",metalness:.5,roughness:.4})),new ze(new Ut(1,1,1),new _n({color:"#ffb36b"})),new gr(new gt().setFromPoints([n,n]),new Rr({color:"#21d07a",dashSize:6,gapSize:4,depthTest:!1}))];e.push(Md()),e.forEach(t=>{t.position.copy(n),it.add(t)}),Si.visible=!0,rt.mesh.count=1,en.mesh.count=Math.max(1,en.mesh.count),nt.mesh.count=Math.max(1,nt.mesh.count),xt.compile(En,je),Si.visible=!1,rt.mesh.count=0,e.forEach(t=>{it.remove(t),t.traverse(i=>i.geometry&&i.geometry.dispose())})}Cv();requestAnimationFrame(Pd);})();
