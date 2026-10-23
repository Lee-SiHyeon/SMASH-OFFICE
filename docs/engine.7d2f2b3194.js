(()=>{var dc="160",zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pf=0,ih=1,mf=2;var ja=1,gf=2,Yn=3,gi=0,zt=1,En=2;var di=0,fi=1,Oi=2,sh=3,rh=4,_f=5,Li=100,xf=101,yf=102,ah=103,oh=104,vf=200,Mf=201,Sf=202,bf=203,xl=204,yl=205,Ef=206,wf=207,Tf=208,Af=209,Rf=210,Cf=211,Pf=212,Lf=213,If=214,Df=0,Uf=1,Nf=2,ya=3,Of=4,Ff=5,Bf=6,kf=7,ku=0,zf=1,Hf=2,pi=0,Vf=1,Gf=2,Wf=3,fc=4,Xf=5,qf=6;var zu=300,ys=301,vs=302,vl=303,Ml=304,Qa=306,Sl=1e3,sn=1001,bl=1002,Yt=1003,lh=1004;var Fo=1005;var cn=1006,Yf=1007;var js=1008;var mi=1009,$f=1010,Zf=1011,pc=1012,Hu=1013,hi=1014,ui=1015,Qs=1016,Vu=1017,Gu=1018,Di=1020,Jf=1021,wn=1023,Kf=1024,jf=1025,Ui=1026,Ms=1027,Qf=1028,Wu=1029,ep=1030,Xu=1031,qu=1033,Bo=33776,ko=33777,zo=33778,Ho=33779,ch=35840,hh=35841,uh=35842,dh=35843,Yu=36196,fh=37492,ph=37496,mh=37808,gh=37809,_h=37810,xh=37811,yh=37812,vh=37813,Mh=37814,Sh=37815,bh=37816,Eh=37817,wh=37818,Th=37819,Ah=37820,Rh=37821,Vo=36492,Ch=36494,Ph=36495,tp=36283,Lh=36284,Ih=36285,Dh=36286;var va=2300,Ma=2301,Go=2302,Uh=2400,Nh=2401,Oh=2402;var $u=3e3,Ni=3001,np=3200,ip=3201,Zu=0,sp=1,hn="",dt="srgb",Zn="srgb-linear",mc="display-p3",eo="display-p3-linear",Sa="linear",ct="srgb",ba="rec709",Ea="p3";var Zi=7680;var Fh=519,rp=512,ap=513,op=514,Ju=515,lp=516,cp=517,hp=518,up=519,Bh=35044,Vt=35048;var kh="300 es",El=1035,$n=2e3,wa=2001,Nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zh=1234567,Xs=Math.PI/180,er=180/Math.PI;function Vi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function gc(i,e){return(i%e+e)%e}function dp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function fp(i,e,t){return i!==e?(t-i)/(e-i):0}function qs(i,e,t){return(1-t)*i+t*e}function pp(i,e,t,n){return qs(i,e,1-Math.exp(-t*n))}function mp(i,e=1){return e-Math.abs(gc(i,e*2)-e)}function gp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _p(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function xp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function yp(i,e){return i+Math.random()*(e-i)}function vp(i){return i*(.5-Math.random())}function Mp(i){i!==void 0&&(zh=i);let e=zh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sp(i){return i*Xs}function bp(i){return i*er}function wl(i){return(i&i-1)===0&&i!==0}function Ep(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ta(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ds(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Mr={DEG2RAD:Xs,RAD2DEG:er,generateUUID:Vi,clamp:wt,euclideanModulo:gc,mapLinear:dp,inverseLerp:fp,lerp:qs,damp:pp,pingpong:mp,smoothstep:gp,smootherstep:_p,randInt:xp,randFloat:yp,randFloatSpread:vp,seededRandom:Mp,degToRad:Sp,radToDeg:bp,isPowerOfTwo:wl,ceilPowerOfTwo:Ep,floorPowerOfTwo:Ta,setQuaternionFromProperEuler:wp,normalize:Xt,denormalize:ds},se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],_=s[4],b=s[7],R=s[2],S=s[5],A=s[8];return r[0]=a*x+o*y+l*R,r[3]=a*m+o*_+l*S,r[6]=a*p+o*b+l*A,r[1]=c*x+h*y+u*R,r[4]=c*m+h*_+u*S,r[7]=c*p+h*b+u*A,r[2]=d*x+f*y+g*R,r[5]=d*m+f*_+g*S,r[8]=d*p+f*b+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wo.makeScale(e,t)),this}rotate(e){return this.premultiply(Wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wo=new Ze;function Ku(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tp(){let i=Aa("canvas");return i.style.display="block",i}var Hh={};function Ys(i){i in Hh||(Hh[i]=!0,console.warn(i))}var Vh=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gh=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gr={[Zn]:{transfer:Sa,primaries:ba,toReference:i=>i,fromReference:i=>i},[dt]:{transfer:ct,primaries:ba,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[eo]:{transfer:Sa,primaries:Ea,toReference:i=>i.applyMatrix3(Gh),fromReference:i=>i.applyMatrix3(Vh)},[mc]:{transfer:ct,primaries:Ea,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gh),fromReference:i=>i.applyMatrix3(Vh).convertLinearToSRGB()}},Ap=new Set([Zn,eo]),st={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ap.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Gr[e].toReference,s=Gr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Gr[i].primaries},getTransfer:function(i){return i===hn?Sa:Gr[i].transfer}};function _s(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,Ra=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ji===void 0&&(Ji=Aa("canvas")),Ji.width=e.width,Ji.height=e.height;let n=Ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Aa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_s(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_s(t[n]/255)*255):t[n]=_s(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rp=0,Ca=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Vi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qo(s[a].image)):r.push(qo(s[a]))}else r=qo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cp=0,un=class i extends Nn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=sn,s=sn,r=cn,a=js,o=wn,l=mi,c=i.DEFAULT_ANISOTROPY,h=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Vi(),this.name="",this.source=new Ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ni?dt:hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sl:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sl:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?Ni:$u}set encoding(e){Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ni?dt:hn}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=zu;un.DEFAULT_ANISOTROPY=1;var ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,b=(f+1)/2,R=(p+1)/2,S=(h+d)/4,A=(u+x)/4,U=(g+m)/4;return _>b&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=S/n,r=A/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=U/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=U/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tl=class extends Nn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ni?dt:hn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ca(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pa=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Al=class extends un{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ht=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),S=Math.atan2(R,p*y);m=Math.sin(m*S)/R,o=Math.sin(o*S)/R}let b=o*y;if(l=l*m+d*b,c=c*m+f*b,h=h*m+g*b,u=u*m+x*b,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yo=new C,Wh=new Ht,Kn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Xr.subVectors(this.max,Bs),Ki.subVectors(e.a,Bs),ji.subVectors(e.b,Bs),Qi.subVectors(e.c,Bs),ri.subVectors(ji,Ki),ai.subVectors(Qi,ji),Ti.subVectors(Ki,Qi);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ti.z,Ti.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ti.z,0,-Ti.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ti.y,Ti.x,0];return!$o(t,Ki,ji,Qi,Xr)||(t=[1,0,0,0,1,0,0,0,1],!$o(t,Ki,ji,Qi,Xr))?!1:(qr.crossVectors(ri,ai),t=[qr.x,qr.y,qr.z],$o(t,Ki,ji,Qi,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Vn=[new C,new C,new C,new C,new C,new C,new C,new C],vn=new C,Wr=new Kn,Ki=new C,ji=new C,Qi=new C,ri=new C,ai=new C,Ti=new C,Bs=new C,Xr=new C,qr=new C,Ai=new C;function $o(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ai.fromArray(i,r);let o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Pp=new Kn,ks=new C,Zo=new C,dn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Pp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);let t=ks.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(Zo)),this.expandByPoint(ks.copy(e.center).sub(Zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new C,Jo=new C,Yr=new C,oi=new C,Ko=new C,$r=new C,jo=new C,_i=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jo.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Jo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=oi.dot(this.direction),l=-oi.dot(Yr),c=oi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jo).addScaledVector(Yr,d),f}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,s,r){Ko.subVectors(t,e),$r.subVectors(n,e),jo.crossVectors(Ko,$r);let a=this.direction.dot(jo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);let l=o*this.direction.dot($r.crossVectors(oi,$r));if(l<0)return null;let c=o*this.direction.dot(Ko.cross(oi));if(c<0||l+c>a)return null;let h=-o*oi.dot(jo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lp,e,Ip)}lookAt(e,t,n){let s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),li.crossVectors(n,tn),li.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),li.crossVectors(n,tn)),li.normalize(),Zr.crossVectors(tn,li),s[0]=li.x,s[4]=Zr.x,s[8]=tn.x,s[1]=li.y,s[5]=Zr.y,s[9]=tn.y,s[2]=li.z,s[6]=Zr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],b=n[11],R=n[15],S=s[0],A=s[4],U=s[8],M=s[12],E=s[1],N=s[5],X=s[9],W=s[13],L=s[2],O=s[6],k=s[10],K=s[14],J=s[3],Y=s[7],ne=s[11],re=s[15];return r[0]=a*S+o*E+l*L+c*J,r[4]=a*A+o*N+l*O+c*Y,r[8]=a*U+o*X+l*k+c*ne,r[12]=a*M+o*W+l*K+c*re,r[1]=h*S+u*E+d*L+f*J,r[5]=h*A+u*N+d*O+f*Y,r[9]=h*U+u*X+d*k+f*ne,r[13]=h*M+u*W+d*K+f*re,r[2]=g*S+x*E+m*L+p*J,r[6]=g*A+x*N+m*O+p*Y,r[10]=g*U+x*X+m*k+p*ne,r[14]=g*M+x*W+m*K+p*re,r[3]=y*S+_*E+b*L+R*J,r[7]=y*A+_*N+b*O+R*Y,r[11]=y*U+_*X+b*k+R*ne,r[15]=y*M+_*W+b*K+R*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,_=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,b=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,R=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,S=t*y+n*_+s*b+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/S;return e[0]=y*A,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*A,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*A,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,e[4]=_*A,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*A,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*A,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*A,e[8]=b*A,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*A,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*A,e[12]=R*A,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*A,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*A,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,_=l*h,b=l*u,R=n.x,S=n.y,A=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+b)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(f-b)*S,s[5]=(1-(d+p))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(g+_)*A,s[9]=(m-y)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=es.set(s[0],s[1],s[2]).length(),a=es.set(s[4],s[5],s[6]).length(),o=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Mn.copy(this);let c=1/r,h=1/a,u=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,t.setFromRotationMatrix(Mn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=$n){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(o===$n)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===wa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=$n){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h,g,x;if(o===$n)g=(a+r)*u,x=-2*u;else if(o===wa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},es=new C,Mn=new rt,Lp=new C(0,0,0),Ip=new C(1,1,1),li=new C,Zr=new C,tn=new C,Xh=new rt,qh=new Ht,La=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};La.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dp=0,Yh=new C,ts=new Ht,Wn=new rt,Jr=new C,zs=new C,Up=new C,Np=new Ht,$h=new C(1,0,0),Zh=new C(0,1,0),Jh=new C(0,0,1),Op={type:"added"},Fp={type:"removed"},Ut=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new La,n=new Ht,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ze}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis($h,e)}rotateY(e){return this.rotateOnAxis(Zh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,t){return Yh.copy(e).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($h,e)}translateY(e){return this.translateOnAxis(Zh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jr.copy(e):Jr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(zs,Jr,this.up):Wn.lookAt(Jr,zs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Wn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Op)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,Up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new C(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new C,Xn=new C,Qo=new C,qn=new C,ns=new C,is=new C,Kh=new C,el=new C,tl=new C,nl=new C,Kr=!1,fs=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Sn.subVectors(e,t),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Sn.subVectors(s,t),Xn.subVectors(n,t),Qo.subVectors(e,t);let a=Sn.dot(Sn),o=Sn.dot(Xn),l=Sn.dot(Qo),c=Xn.dot(Xn),h=Xn.dot(Qo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(e,t,n,s,r,a,o,l){return Kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kr=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static isFrontFacing(e,t,n,s){return Sn.subVectors(n,t),Xn.subVectors(e,t),Sn.cross(Xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Sn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ns.subVectors(s,n),is.subVectors(r,n),el.subVectors(e,n);let l=ns.dot(el),c=is.dot(el);if(l<=0&&c<=0)return t.copy(n);tl.subVectors(e,s);let h=ns.dot(tl),u=is.dot(tl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ns,a);nl.subVectors(e,r);let f=ns.dot(nl),g=is.dot(nl);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(is,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Kh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Kh,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},jr={h:0,s:0,l:0};function il(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=gc(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=il(a,r,e+1/3),this.g=il(a,r,e),this.b=il(a,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return st.fromWorkingColorSpace(Bt.copy(this),e),Math.round(wt(Bt.r*255,0,255))*65536+Math.round(wt(Bt.g*255,0,255))*256+Math.round(wt(Bt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Bt.copy(this),t);let n=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=dt){st.fromWorkingColorSpace(Bt.copy(this),e);let t=Bt.r,n=Bt.g,s=Bt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(jr);let n=qs(ci.h,jr.h,t),s=qs(ci.s,jr.s,t),r=qs(ci.l,jr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Ue;Ue.NAMES=ju;var Bp=0,jn=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=fi,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=yl,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xl&&(n.blendSrc=this.blendSrc),this.blendDst!==yl&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},fn=class extends jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new C,Qr=new se,ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ds(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bh&&(e.usage=this.usage),e}};var Ia=class extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Da=class extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}};var kp=0,ln=new rt,sl=new Ut,ss=new C,nn=new Kn,Hs=new Kn,Lt=new C,gt=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ku(e)?Da:Ia)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ke(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(nn.min,Hs.min),nn.expandByPoint(Lt),Lt.addVectors(nn.max,Hs.max),nn.expandByPoint(Lt)):(nn.expandByPoint(Hs.min),nn.expandByPoint(Hs.max))}nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Lt.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(e,c),Lt.add(ss)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<o;E++)c[E]=new C,h[E]=new C;let u=new C,d=new C,f=new C,g=new se,x=new se,m=new se,p=new C,y=new C;function _(E,N,X){u.fromArray(s,E*3),d.fromArray(s,N*3),f.fromArray(s,X*3),g.fromArray(a,E*2),x.fromArray(a,N*2),m.fromArray(a,X*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let W=1/(x.x*m.y-m.x*x.y);isFinite(W)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(W),y.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(W),c[E].add(p),c[N].add(p),c[X].add(p),h[E].add(y),h[N].add(y),h[X].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let E=0,N=b.length;E<N;++E){let X=b[E],W=X.start,L=X.count;for(let O=W,k=W+L;O<k;O+=3)_(n[O+0],n[O+1],n[O+2])}let R=new C,S=new C,A=new C,U=new C;function M(E){A.fromArray(r,E*3),U.copy(A);let N=c[E];R.copy(N),R.sub(A.multiplyScalar(A.dot(N))).normalize(),S.crossVectors(U,N);let W=S.dot(h[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=W}for(let E=0,N=b.length;E<N;++E){let X=b[E],W=X.start,L=X.count;for(let O=W,k=W+L;O<k;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new ht(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jh=new rt,Ri=new _i,ea=new dn,Qh=new C,rs=new C,as=new C,os=new C,rl=new C,ta=new C,na=new se,ia=new se,sa=new se,eu=new C,tu=new C,nu=new C,ra=new C,aa=new C,ke=class extends Ut{constructor(e=new gt,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(rl.fromBufferAttribute(u,e),a?ta.addScaledVector(rl,h):ta.addScaledVector(rl.sub(t),h))}t.add(ta)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(ea.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(ea,Qh)===null||Ri.origin.distanceToSquared(Qh)>(e.far-e.near)**2))&&(jh.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(jh),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,R=_;b<R;b+=3){let S=o.getX(b),A=o.getX(b+1),U=o.getX(b+2);s=oa(this,p,e,n,c,h,u,S,A,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);s=oa(this,a,e,n,c,h,u,y,_,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,R=_;b<R;b+=3){let S=b,A=b+1,U=b+2;s=oa(this,p,e,n,c,h,u,S,A,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,b=m+2;s=oa(this,a,e,n,c,h,u,y,_,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function zp(i,e,t,n,s,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===gi,o),l===null)return null;aa.copy(o),aa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:i}}function oa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,rs),i.getVertexPosition(l,as),i.getVertexPosition(c,os);let h=zp(i,e,t,n,rs,as,os,ra);if(h){s&&(na.fromBufferAttribute(s,o),ia.fromBufferAttribute(s,l),sa.fromBufferAttribute(s,c),h.uv=fs.getInterpolation(ra,rs,as,os,na,ia,sa,new se)),r&&(na.fromBufferAttribute(r,o),ia.fromBufferAttribute(r,l),sa.fromBufferAttribute(r,c),h.uv1=fs.getInterpolation(ra,rs,as,os,na,ia,sa,new se),h.uv2=h.uv1),a&&(eu.fromBufferAttribute(a,o),tu.fromBufferAttribute(a,l),nu.fromBufferAttribute(a,c),h.normal=fs.getInterpolation(ra,rs,as,os,eu,tu,nu,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};fs.getNormal(rs,as,os,u.normal),h.face=u}return h}var It=class i extends gt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(x,m,p,y,_,b,R,S,A,U,M){let E=b/A,N=R/U,X=b/2,W=R/2,L=S/2,O=A+1,k=U+1,K=0,J=0,Y=new C;for(let ne=0;ne<k;ne++){let re=ne*N-W;for(let ge=0;ge<O;ge++){let q=ge*E-X;Y[x]=q*y,Y[m]=re*_,Y[p]=L,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(ge/A),u.push(1-ne/U),K+=1}}for(let ne=0;ne<U;ne++)for(let re=0;re<A;re++){let ge=d+re+O*ne,q=d+re+O*(ne+1),ie=d+(re+1)+O*(ne+1),_e=d+(re+1)+O*ne;l.push(ge,q,_e),l.push(q,ie,_e),J+=6}o.addGroup(f,J,M),f+=J,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ss(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){let e={};for(let t=0;t<i.length;t++){let n=Ss(i[t]);for(let s in n)e[s]=n[s]}return e}function Hp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qu(i){return i.getRenderTarget()===null?i.outputColorSpace:st.workingColorSpace}var Vp={clone:Ss,merge:qt},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=Hp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ua=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kt=class extends Ua{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ls=-90,cs=1,Rl=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(ls,cs,e,t);s.layers=this.layers,this.add(s);let r=new kt(ls,cs,e,t);r.layers=this.layers,this.add(r);let a=new kt(ls,cs,e,t);a.layers=this.layers,this.add(a);let o=new kt(ls,cs,e,t);o.layers=this.layers,this.add(o);let l=new kt(ls,cs,e,t);l.layers=this.layers,this.add(l);let c=new kt(ls,cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Na=class extends un{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ys,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cl=class extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ni?dt:hn),this.texture=new Na(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new It(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:di});r.uniforms.tEquirect.value=t;let a=new ke(s,r),o=t.minFilter;return t.minFilter===js&&(t.minFilter=cn),new Rl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},al=new C,Xp=new C,qp=new Ze,bn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=al.subVectors(n,t).cross(Xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(al),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qp.getNormalMatrix(e),s=this.coplanarPoint(al).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new dn,la=new C,nr=class{constructor(e=new bn,t=new bn,n=new bn,s=new bn,r=new bn,a=new bn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-f,b-p).normalize(),n[1].setComponents(l+r,d+c,m+f,b+p).normalize(),n[2].setComponents(l+a,d+h,m+g,b+y).normalize(),n[3].setComponents(l-a,d-h,m-g,b-y).normalize(),n[4].setComponents(l-o,d-u,m-x,b-_).normalize(),t===$n)n[5].setComponents(l+o,d+u,m+x,b+_).normalize();else if(t===wa)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ed(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Yp(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var xi=class i extends gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let _=0;_<c;_++){let b=_*u-r;g.push(b,-y,0),x.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let _=y+c*p,b=y+c*(p+1),R=y+1+c*(p+1),S=y+1+c*p;f.push(_,b,S),f.push(b,R,S)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},$p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zp=`#ifdef USE_ALPHAHASH
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
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
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
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
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
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,om=`#ifdef USE_IRIDESCENCE
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
#endif`,lm=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_m=`#define PI 3.141592653589793
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Em="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`
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
}`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
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
}`,Om=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
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
#endif`,Ym=`struct PhysicalMaterial {
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
}`,$m=`
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sg=`#if defined( USE_POINTS_UV )
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
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
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
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,hg=`#ifdef USE_MORPHTARGETS
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
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
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
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ig=`float getShadowMask() {
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
}`,Dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,Ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,Fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
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
}`,e0=`#if DEPTH_PACKING == 3200
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
}`,t0=`#define DISTANCE
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
}`,n0=`#define DISTANCE
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`uniform float scale;
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
}`,a0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#define LAMBERT
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
}`,h0=`#define LAMBERT
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
}`,u0=`#define MATCAP
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
}`,d0=`#define MATCAP
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
}`,f0=`#define NORMAL
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
}`,p0=`#define NORMAL
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
}`,m0=`#define PHONG
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
}`,g0=`#define PHONG
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
}`,_0=`#define STANDARD
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
}`,x0=`#define STANDARD
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
}`,y0=`#define TOON
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
}`,v0=`#define TOON
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
}`,M0=`uniform float size;
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
}`,S0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,E0=`uniform vec3 color;
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
}`,w0=`uniform float rotation;
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
}`,T0=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:$p,alphahash_pars_fragment:Zp,alphamap_fragment:Jp,alphamap_pars_fragment:Kp,alphatest_fragment:jp,alphatest_pars_fragment:Qp,aomap_fragment:em,aomap_pars_fragment:tm,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:am,iridescence_fragment:om,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:_m,cube_uv_reflection_fragment:xm,defaultnormal_vertex:ym,displacementmap_pars_vertex:vm,displacementmap_vertex:Mm,emissivemap_fragment:Sm,emissivemap_pars_fragment:bm,colorspace_fragment:Em,colorspace_pars_fragment:wm,envmap_fragment:Tm,envmap_common_pars_fragment:Am,envmap_pars_fragment:Rm,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:Hm,envmap_vertex:Pm,fog_vertex:Lm,fog_pars_vertex:Im,fog_fragment:Dm,fog_pars_fragment:Um,gradientmap_pars_fragment:Nm,lightmap_fragment:Om,lightmap_pars_fragment:Fm,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:km,lights_pars_begin:zm,lights_toon_fragment:Vm,lights_toon_pars_fragment:Gm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:qm,lights_physical_pars_fragment:Ym,lights_fragment_begin:$m,lights_fragment_maps:Zm,lights_fragment_end:Jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:eg,map_fragment:tg,map_pars_fragment:ng,map_particle_fragment:ig,map_particle_pars_fragment:sg,metalnessmap_fragment:rg,metalnessmap_pars_fragment:ag,morphcolor_vertex:og,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:vg,opaque_fragment:Mg,packing:Sg,premultiplied_alpha_fragment:bg,project_vertex:Eg,dithering_fragment:wg,dithering_pars_fragment:Tg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Ig,skinbase_vertex:Dg,skinning_pars_vertex:Ug,skinning_vertex:Ng,skinnormal_vertex:Og,specularmap_fragment:Fg,specularmap_pars_fragment:Bg,tonemapping_fragment:kg,tonemapping_pars_fragment:zg,transmission_fragment:Hg,transmission_pars_fragment:Vg,uv_pars_fragment:Gg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:$g,backgroundCube_vert:Zg,backgroundCube_frag:Jg,cube_vert:Kg,cube_frag:jg,depth_vert:Qg,depth_frag:e0,distanceRGBA_vert:t0,distanceRGBA_frag:n0,equirect_vert:i0,equirect_frag:s0,linedashed_vert:r0,linedashed_frag:a0,meshbasic_vert:o0,meshbasic_frag:l0,meshlambert_vert:c0,meshlambert_frag:h0,meshmatcap_vert:u0,meshmatcap_frag:d0,meshnormal_vert:f0,meshnormal_frag:p0,meshphong_vert:m0,meshphong_frag:g0,meshphysical_vert:_0,meshphysical_frag:x0,meshtoon_vert:y0,meshtoon_frag:v0,points_vert:M0,points_frag:S0,shadow_vert:b0,shadow_frag:E0,sprite_vert:w0,sprite_frag:T0},pe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Un={basic:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:qt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:qt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:qt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:qt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:qt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:qt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:qt([pe.common,pe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:qt([pe.lights,pe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Un.physical={uniforms:qt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var ca={r:0,b:0,g:0};function A0(i,e,t,n,s,r,a){let o=new Ue(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?x(o,l):_&&_.isColor&&(x(_,1),y=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Qa)?(h===void 0&&(h=new ke(new It(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Ss(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=st.getTransfer(_.colorSpace)!==ct,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ke(new xi(2,2),new pn({name:"BackgroundMaterial",uniforms:Ss(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=st.getTransfer(_.colorSpace)!==ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(ca,Qu(i)),n.buffers.color.setClear(ca.r,ca.g,ca.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function R0(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(L,O,k,K,J){let Y=!1;if(a){let ne=x(K,k,O);c!==ne&&(c=ne,f(c.object)),Y=p(L,K,k,J),Y&&y(L,K,k,J)}else{let ne=O.wireframe===!0;(c.geometry!==K.id||c.program!==k.id||c.wireframe!==ne)&&(c.geometry=K.id,c.program=k.id,c.wireframe=ne,Y=!0)}J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,U(L,O,k,K),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,O,k){let K=k.wireframe===!0,J=o[L.id];J===void 0&&(J={},o[L.id]=J);let Y=J[O.id];Y===void 0&&(Y={},J[O.id]=Y);let ne=Y[K];return ne===void 0&&(ne=m(d()),Y[K]=ne),ne}function m(L){let O=[],k=[],K=[];for(let J=0;J<s;J++)O[J]=0,k[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:K,object:L,attributes:{},index:null}}function p(L,O,k,K){let J=c.attributes,Y=O.attributes,ne=0,re=k.getAttributes();for(let ge in re)if(re[ge].location>=0){let ie=J[ge],_e=Y[ge];if(_e===void 0&&(ge==="instanceMatrix"&&L.instanceMatrix&&(_e=L.instanceMatrix),ge==="instanceColor"&&L.instanceColor&&(_e=L.instanceColor)),ie===void 0||ie.attribute!==_e||_e&&ie.data!==_e.data)return!0;ne++}return c.attributesNum!==ne||c.index!==K}function y(L,O,k,K){let J={},Y=O.attributes,ne=0,re=k.getAttributes();for(let ge in re)if(re[ge].location>=0){let ie=Y[ge];ie===void 0&&(ge==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),ge==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor));let _e={};_e.attribute=ie,ie&&ie.data&&(_e.data=ie.data),J[ge]=_e,ne++}c.attributes=J,c.attributesNum=ne,c.index=K}function _(){let L=c.newAttributes;for(let O=0,k=L.length;O<k;O++)L[O]=0}function b(L){R(L,0)}function R(L,O){let k=c.newAttributes,K=c.enabledAttributes,J=c.attributeDivisors;k[L]=1,K[L]===0&&(i.enableVertexAttribArray(L),K[L]=1),J[L]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),J[L]=O)}function S(){let L=c.newAttributes,O=c.enabledAttributes;for(let k=0,K=O.length;k<K;k++)O[k]!==L[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function A(L,O,k,K,J,Y,ne){ne===!0?i.vertexAttribIPointer(L,O,k,J,Y):i.vertexAttribPointer(L,O,k,K,J,Y)}function U(L,O,k,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let J=K.attributes,Y=k.getAttributes(),ne=O.defaultAttributeValues;for(let re in Y){let ge=Y[re];if(ge.location>=0){let q=J[re];if(q===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){let ie=q.normalized,_e=q.itemSize,Te=t.get(q);if(Te===void 0)continue;let Se=Te.buffer,De=Te.type,Oe=Te.bytesPerElement,we=n.isWebGL2===!0&&(De===i.INT||De===i.UNSIGNED_INT||q.gpuType===Hu);if(q.isInterleavedBufferAttribute){let Fe=q.data,I=Fe.stride,ce=q.offset;if(Fe.isInstancedInterleavedBuffer){for(let $=0;$<ge.locationSize;$++)R(ge.location+$,Fe.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let $=0;$<ge.locationSize;$++)b(ge.location+$);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let $=0;$<ge.locationSize;$++)A(ge.location+$,_e/ge.locationSize,De,ie,I*Oe,(ce+_e/ge.locationSize*$)*Oe,we)}else{if(q.isInstancedBufferAttribute){for(let Fe=0;Fe<ge.locationSize;Fe++)R(ge.location+Fe,q.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Fe=0;Fe<ge.locationSize;Fe++)b(ge.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let Fe=0;Fe<ge.locationSize;Fe++)A(ge.location+Fe,_e/ge.locationSize,De,ie,_e*Oe,_e/ge.locationSize*Fe*Oe,we)}}else if(ne!==void 0){let ie=ne[re];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(ge.location,ie);break;case 3:i.vertexAttrib3fv(ge.location,ie);break;case 4:i.vertexAttrib4fv(ge.location,ie);break;default:i.vertexAttrib1fv(ge.location,ie)}}}}S()}function M(){X();for(let L in o){let O=o[L];for(let k in O){let K=O[k];for(let J in K)g(K[J].object),delete K[J];delete O[k]}delete o[L]}}function E(L){if(o[L.id]===void 0)return;let O=o[L.id];for(let k in O){let K=O[k];for(let J in K)g(K[J].object),delete K[J];delete O[k]}delete o[L.id]}function N(L){for(let O in o){let k=o[O];if(k[L.id]===void 0)continue;let K=k[L.id];for(let J in K)g(K[J].object),delete K[J];delete k[L.id]}}function X(){W(),h=!0,c!==l&&(c=l,f(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:W,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:b,disableUnusedAttributes:S}}function C0(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function P0(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,b=a||e.has("OES_texture_float"),R=_&&b,S=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:S}}function L0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new bn,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,_=y*4,b=p.clippingState||null;l.value=b,b=h(g,d,_,f);for(let R=0;R!==_;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=f;_!==x;++_,b+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function I0(i){let e=new WeakMap;function t(a,o){return o===vl?a.mapping=ys:o===Ml&&(a.mapping=vs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===vl||o===Ml)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Cl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Oa=class extends Ua{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ps=4,iu=[.125,.215,.35,.446,.526,.582],Ii=20,ol=new Oa,su=new Ue,ll=null,cl=0,hl=0,Pi=(1+Math.sqrt(5))/2,hs=1/Pi,ru=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Pi,hs),new C(0,Pi,-hs),new C(hs,0,Pi),new C(-hs,0,Pi),new C(Pi,hs,0),new C(-Pi,hs,0)],Fa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ll,cl,hl),e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Qs,format:wn,colorSpace:Zn,depthBuffer:!1},s=au(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(r)),this._blurMaterial=U0(r,e,t)}return s}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,n,s){let o=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(su),h.toneMapping=pi,h.autoClear=!1;let f=new fn({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new ke(new It,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(su),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;ha(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ys||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ha(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ol)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ru[(s-1)%ru.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ke(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let p=[],y=0;for(let A=0;A<Ii;++A){let U=A/x,M=Math.exp(-U*U/2);p.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let b=this._sizeLods[s],R=3*b*(s>_-ps?s-_+ps:0),S=4*(this._cubeSize-b);ha(t,R,S,3*b,2*b),l.setRenderTarget(t),l.render(u,ol)}};function D0(i){let e=[],t=[],n=[],s=i,r=i-ps+1+iu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ps?l=iu[a-i+ps-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),_=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let S=0;S<f;S++){let A=S%3*2/3-1,U=S>2?0:-1,M=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];y.set(M,x*g*S),_.set(d,m*g*S);let E=[S,S,S,S,S,S];b.set(E,p*g*S)}let R=new gt;R.setAttribute("position",new ht(y,x)),R.setAttribute("uv",new ht(_,m)),R.setAttribute("faceIndex",new ht(b,p)),e.push(R),s>ps&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function au(i,e,t){let n=new Jn(i,e,t);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function U0(i,e,t){let n=new Float32Array(Ii),s=new C(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_c(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function ou(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function lu(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function N0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===vl||l===Ml,h=l===ys||l===vs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Fa(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Fa(i));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function O0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function F0(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,b=y.length;_<b;_+=3){let R=y[_+0],S=y[_+1],A=y[_+2];d.push(R,S,S,A,A,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,b=y.length/3-1;_<b;_+=3){let R=_+0,S=_+1,A=_+2;d.push(R,S,S,A,A,R)}}else return;let m=new(Ku(d)?Da:Ia)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function B0(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){i.drawElements(r,g,o,f*l),t.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,x),t.update(g,r,x)}function d(f,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function k0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function z0(i,e){return i[0]-e[0]}function H0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function V0(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],U=0;y===!0&&(U=1),_===!0&&(U=2),b===!0&&(U=3);let M=h.attributes.position.count*U,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let N=new Float32Array(M*E*4*g),X=new Pa(N,M,E,g);X.type=ui,X.needsUpdate=!0;let W=U*4;for(let O=0;O<g;O++){let k=R[O],K=S[O],J=A[O],Y=M*E*4*O;for(let ne=0;ne<k.count;ne++){let re=ne*W;y===!0&&(a.fromBufferAttribute(k,ne),N[Y+re+0]=a.x,N[Y+re+1]=a.y,N[Y+re+2]=a.z,N[Y+re+3]=0),_===!0&&(a.fromBufferAttribute(K,ne),N[Y+re+4]=a.x,N[Y+re+5]=a.y,N[Y+re+6]=a.z,N[Y+re+7]=0),b===!0&&(a.fromBufferAttribute(J,ne),N[Y+re+8]=a.x,N[Y+re+9]=a.y,N[Y+re+10]=a.z,N[Y+re+11]=J.itemSize===4?a.w:1)}}x={count:g,texture:X,size:new se(M,E)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){let b=g[_];b[0]=_,b[1]=d[_]}g.sort(H0);for(let _=0;_<8;_++)_<f&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(z0);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let b=o[_],R=b[0],S=b[1];R!==Number.MAX_SAFE_INTEGER&&S?(x&&h.getAttribute("morphTarget"+_)!==x[R]&&h.setAttribute("morphTarget"+_,x[R]),m&&h.getAttribute("morphNormal"+_)!==m[R]&&h.setAttribute("morphNormal"+_,m[R]),s[_]=S,p+=S):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function G0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ba=class extends un{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ui,h!==Ui&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=hi),n===void 0&&h===Ms&&(n=Di),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},td=new un,nd=new Ba(1,1);nd.compareFunction=Ju;var id=new Pa,sd=new Al,rd=new Na,cu=[],hu=[],uu=new Float32Array(16),du=new Float32Array(9),fu=new Float32Array(4);function Es(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=cu[s];if(r===void 0&&(r=new Float32Array(s),cu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function to(i,e){let t=hu[e];t===void 0&&(t=new Int32Array(e),hu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function W0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function X0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function Y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function $0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;fu.set(n),i.uniformMatrix2fv(this.addr,!1,fu),At(t,n)}}function Z0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;du.set(n),i.uniformMatrix3fv(this.addr,!1,du),At(t,n)}}function J0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;uu.set(n),i.uniformMatrix4fv(this.addr,!1,uu),At(t,n)}}function K0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function Q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function t_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function r_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?nd:td;t.setTexture2D(e||r,s)}function a_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sd,s)}function o_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rd,s)}function l_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||id,s)}function c_(i){switch(i){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return $0;case 35675:return Z0;case 35676:return J0;case 5124:case 35670:return K0;case 35667:case 35671:return j0;case 35668:case 35672:return Q0;case 35669:case 35673:return e_;case 5125:return t_;case 36294:return n_;case 36295:return i_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return l_}}function h_(i,e){i.uniform1fv(this.addr,e)}function u_(i,e){let t=Es(e,this.size,2);i.uniform2fv(this.addr,t)}function d_(i,e){let t=Es(e,this.size,3);i.uniform3fv(this.addr,t)}function f_(i,e){let t=Es(e,this.size,4);i.uniform4fv(this.addr,t)}function p_(i,e){let t=Es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function m_(i,e){let t=Es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function g_(i,e){let t=Es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function __(i,e){i.uniform1iv(this.addr,e)}function x_(i,e){i.uniform2iv(this.addr,e)}function y_(i,e){i.uniform3iv(this.addr,e)}function v_(i,e){i.uniform4iv(this.addr,e)}function M_(i,e){i.uniform1uiv(this.addr,e)}function S_(i,e){i.uniform2uiv(this.addr,e)}function b_(i,e){i.uniform3uiv(this.addr,e)}function E_(i,e){i.uniform4uiv(this.addr,e)}function w_(i,e,t){let n=this.cache,s=e.length,r=to(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||td,r[a])}function T_(i,e,t){let n=this.cache,s=e.length,r=to(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sd,r[a])}function A_(i,e,t){let n=this.cache,s=e.length,r=to(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||rd,r[a])}function R_(i,e,t){let n=this.cache,s=e.length,r=to(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||id,r[a])}function C_(i){switch(i){case 5126:return h_;case 35664:return u_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return __;case 35667:case 35671:return x_;case 35668:case 35672:return y_;case 35669:case 35673:return v_;case 5125:return M_;case 36294:return S_;case 36295:return b_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return R_}}var Pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=c_(t.type)}},Ll=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C_(t.type)}},Il=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ul=/(\w+)(\])?(\[|\.)?/g;function pu(i,e){i.seq.push(e),i.map[e.id]=e}function P_(i,e,t){let n=i.name,s=n.length;for(ul.lastIndex=0;;){let r=ul.exec(n),a=ul.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){pu(t,c===void 0?new Pl(o,i,e):new Ll(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Il(o),pu(t,u)),t=u}}}var xs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);P_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function mu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var L_=37297,I_=0;function D_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function U_(i){let e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(i),n;switch(e===t?n="":e===Ea&&t===ba?n="LinearDisplayP3ToLinearSRGB":e===ba&&t===Ea&&(n="LinearSRGBToLinearDisplayP3"),i){case Zn:case eo:return[n,"LinearTransferOETF"];case dt:case mc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function gu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+D_(i.getShaderSource(e),a)}else return s}function N_(i,e){let t=U_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function O_(i,e){let t;switch(e){case Vf:t="Linear";break;case Gf:t="Reinhard";break;case Wf:t="OptimizedCineon";break;case fc:t="ACESFilmic";break;case qf:t="AgX";break;case Xf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function F_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ms).join(`
`)}function B_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ms).join(`
`)}function k_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ms(i){return i!==""}function _u(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var H_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(i){return i.replace(H_,G_)}var V_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function G_(i,e){let t=Ge[e];if(t===void 0){let n=V_.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dl(t)}var W_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yu(i){return i.replace(W_,X_)}function X_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function q_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ja?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===gf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Y_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case vs:e="ENVMAP_TYPE_CUBE";break;case Qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function Z_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ku:e="ENVMAP_BLENDING_MULTIPLY";break;case zf:e="ENVMAP_BLENDING_MIX";break;case Hf:e="ENVMAP_BLENDING_ADD";break}return e}function J_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function K_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=q_(t),c=Y_(t),h=$_(t),u=Z_(t),d=J_(t),f=t.isWebGL2?"":F_(t),g=B_(t),x=k_(r),m=s.createProgram(),p,y,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ms).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ms).join(`
`),y.length>0&&(y+=`
`)):(p=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),y=[f,vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==pi?O_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,N_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),a=Dl(a),a=_u(a,t),a=xu(a,t),o=Dl(o),o=_u(o,t),o=xu(o,t),a=yu(a),o=yu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let b=_+p+a,R=_+y+o,S=mu(s,s.VERTEX_SHADER,b),A=mu(s,s.FRAGMENT_SHADER,R);s.attachShader(m,S),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(X){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(S).trim(),O=s.getShaderInfoLog(A).trim(),k=!0,K=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,S,A);else{let J=gu(s,S,"vertex"),Y=gu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+J+`
`+Y)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(L===""||O==="")&&(K=!1);K&&(X.diagnostics={runnable:k,programLog:W,vertexShader:{log:L,prefix:p},fragmentShader:{log:O,prefix:y}})}s.deleteShader(S),s.deleteShader(A),M=new xs(s,m),E=z_(s,m)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,L_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=A,this}var j_=0,Ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nl(e),t.set(e,n)),n}},Nl=class{constructor(e){this.id=j_++,this.code=e,this.usedTimes=0}};function Q_(i,e,t,n,s,r,a){let o=new tr,l=new Ul,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,E,N,X,W){let L=X.fog,O=W.geometry,k=M.isMeshStandardMaterial?X.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),J=K&&K.mapping===Qa?K.image.height:null,Y=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,re=ne!==void 0?ne.length:0,ge=0;O.morphAttributes.position!==void 0&&(ge=1),O.morphAttributes.normal!==void 0&&(ge=2),O.morphAttributes.color!==void 0&&(ge=3);let q,ie,_e,Te;if(Y){let Gt=Un[Y];q=Gt.vertexShader,ie=Gt.fragmentShader}else q=M.vertexShader,ie=M.fragmentShader,l.update(M),_e=l.getVertexShaderID(M),Te=l.getFragmentShaderID(M);let Se=i.getRenderTarget(),De=W.isInstancedMesh===!0,Oe=W.isBatchedMesh===!0,we=!!M.map,Fe=!!M.matcap,I=!!K,ce=!!M.aoMap,$=!!M.lightMap,oe=!!M.bumpMap,Z=!!M.normalMap,Ae=!!M.displacementMap,xe=!!M.emissiveMap,w=!!M.metalnessMap,v=!!M.roughnessMap,B=M.anisotropy>0,ae=M.clearcoat>0,Q=M.iridescence>0,j=M.sheen>0,Ee=M.transmission>0,me=B&&!!M.anisotropyMap,ve=ae&&!!M.clearcoatMap,Le=ae&&!!M.clearcoatNormalMap,ze=ae&&!!M.clearcoatRoughnessMap,ee=Q&&!!M.iridescenceMap,qe=Q&&!!M.iridescenceThicknessMap,P=j&&!!M.sheenColorMap,te=j&&!!M.sheenRoughnessMap,fe=!!M.specularMap,le=!!M.specularColorMap,Re=!!M.specularIntensityMap,Ye=Ee&&!!M.transmissionMap,Je=Ee&&!!M.thicknessMap,We=!!M.gradientMap,de=!!M.alphaMap,D=M.alphaTest>0,he=!!M.alphaHash,ue=!!M.extensions,Ie=!!O.attributes.uv1,Ce=!!O.attributes.uv2,je=!!O.attributes.uv3,tt=pi;return M.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(tt=i.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:ie,defines:M.defines,customVertexShaderID:_e,customFragmentShaderID:Te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Oe,instancing:De,instancingColor:De&&W.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Zn,map:we,matcap:Fe,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:J,aoMap:ce,lightMap:$,bumpMap:oe,normalMap:Z,displacementMap:d&&Ae,emissiveMap:xe,normalMapObjectSpace:Z&&M.normalMapType===sp,normalMapTangentSpace:Z&&M.normalMapType===Zu,metalnessMap:w,roughnessMap:v,anisotropy:B,anisotropyMap:me,clearcoat:ae,clearcoatMap:ve,clearcoatNormalMap:Le,clearcoatRoughnessMap:ze,iridescence:Q,iridescenceMap:ee,iridescenceThicknessMap:qe,sheen:j,sheenColorMap:P,sheenRoughnessMap:te,specularMap:fe,specularColorMap:le,specularIntensityMap:Re,transmission:Ee,transmissionMap:Ye,thicknessMap:Je,gradientMap:We,opaque:M.transparent===!1&&M.blending===fi,alphaMap:de,alphaTest:D,alphaHash:he,combine:M.combine,mapUv:we&&x(M.map.channel),aoMapUv:ce&&x(M.aoMap.channel),lightMapUv:$&&x(M.lightMap.channel),bumpMapUv:oe&&x(M.bumpMap.channel),normalMapUv:Z&&x(M.normalMap.channel),displacementMapUv:Ae&&x(M.displacementMap.channel),emissiveMapUv:xe&&x(M.emissiveMap.channel),metalnessMapUv:w&&x(M.metalnessMap.channel),roughnessMapUv:v&&x(M.roughnessMap.channel),anisotropyMapUv:me&&x(M.anisotropyMap.channel),clearcoatMapUv:ve&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Le&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:P&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:te&&x(M.sheenRoughnessMap.channel),specularMapUv:fe&&x(M.specularMap.channel),specularColorMapUv:le&&x(M.specularColorMap.channel),specularIntensityMapUv:Re&&x(M.specularIntensityMap.channel),transmissionMapUv:Ye&&x(M.transmissionMap.channel),thicknessMapUv:Je&&x(M.thicknessMap.channel),alphaMapUv:de&&x(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Z||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Ce,vertexUv3s:je,pointsUvs:W.isPoints===!0&&!!O.attributes.uv&&(we||de),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ge,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===En,flipSided:M.side===zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ue&&M.extensions.derivatives===!0,extensionFragDepth:ue&&M.extensions.fragDepth===!0,extensionDrawBuffers:ue&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)E.push(N),E.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(y(E,M),_(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function b(M){let E=g[M.type],N;if(E){let X=Un[E];N=Vp.clone(X.uniforms)}else N=M.uniforms;return N}function R(M,E){let N;for(let X=0,W=c.length;X<W;X++){let L=c[X];if(L.cacheKey===E){N=L,++N.usedTimes;break}}return N===void 0&&(N=new K_(i,E,M,r),c.push(N)),N}function S(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:U}}function ex(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function tx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Su(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||tx),n.length>1&&n.sort(d||Mu),s.length>1&&s.sort(d||Mu)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function nx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Su,i.set(n,[a])):s>=r.length?(a=new Su,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ix(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ue};break;case"SpotLight":t={position:new C,direction:new C,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function sx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var rx=0;function ax(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ox(i,e){let t=new ix,n=sx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,a=new rt,o=new rt;function l(h,u){let d=0,f=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let x=0,m=0,p=0,y=0,_=0,b=0,R=0,S=0,A=0,U=0,M=0;h.sort(ax);let E=u===!0?Math.PI:1;for(let X=0,W=h.length;X<W;X++){let L=h[X],O=L.color,k=L.intensity,K=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*k*E,f+=O.g*k*E,g+=O.b*k*E;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(L.sh.coefficients[Y],k);M++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let ne=L.shadow,re=n.get(L);re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,s.directionalShadow[x]=re,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=L.shadow.matrix,b++}s.directional[x]=Y,x++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(k*E),Y.distance=K,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,s.spot[p]=Y;let ne=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,ne.updateMatrices(L),L.castShadow&&U++),s.spotLightMatrix[p]=ne.matrix,L.castShadow){let re=n.get(L);re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,s.spotShadow[p]=re,s.spotShadowMap[p]=J,S++}p++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(O).multiplyScalar(k),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=Y,y++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*E),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let ne=L.shadow,re=n.get(L);re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,re.shadowCameraNear=ne.camera.near,re.shadowCameraFar=ne.camera.far,s.pointShadow[m]=re,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=L.shadow.matrix,R++}s.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(k*E),Y.groundColor.copy(L.groundColor).multiplyScalar(k*E),s.hemi[_]=Y,_++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==y||N.hemiLength!==_||N.numDirectionalShadows!==b||N.numPointShadows!==R||N.numSpotShadows!==S||N.numSpotMaps!==A||N.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=S+A-U,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=M,N.directionalLength=x,N.pointLength=m,N.spotLength=p,N.rectAreaLength=y,N.hemiLength=_,N.numDirectionalShadows=b,N.numPointShadows=R,N.numSpotShadows=S,N.numSpotMaps=A,N.numLightProbes=M,s.version=rx++)}function c(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let b=h[y];if(b.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(b.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let R=s.rectArea[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(b.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let R=s.point[f];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function bu(i,e){let t=new ox(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function lx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new bu(i,e),t.set(r,[l])):a>=o.length?(l=new bu(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ol=class extends jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fl=class extends jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hx=`uniform sampler2D shadow_pass;
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
}`;function ux(i,e,t){let n=new nr,s=new se,r=new se,a=new ft,o=new Ol({depthPacking:ip}),l=new Fl,c={},h=t.maxTextureSize,u={[gi]:zt,[zt]:gi,[En]:En},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:cx,fragmentShader:hx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new gt;g.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let p=this.type;this.render=function(S,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let M=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),X=i.state;X.setBlending(di),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let W=p!==Yn&&this.type===Yn,L=p===Yn&&this.type!==Yn;for(let O=0,k=S.length;O<k;O++){let K=S[O],J=K.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Y=J.getFrameExtents();if(s.multiply(Y),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,J.mapSize.y=r.y)),J.map===null||W===!0||L===!0){let re=this.type!==Yn?{minFilter:Yt,magFilter:Yt}:{};J.map!==null&&J.map.dispose(),J.map=new Jn(s.x,s.y,re),J.map.texture.name=K.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let ne=J.getViewportCount();for(let re=0;re<ne;re++){let ge=J.getViewport(re);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),X.viewport(a),J.updateMatrices(K,re),n=J.getFrustum(),b(A,U,J.camera,K,this.type)}J.isPointLightShadow!==!0&&this.type===Yn&&y(J,U),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,E,N)};function y(S,A){let U=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Jn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,U,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,U,f,x,null)}function _(S,A,U,M){let E=null,N=U.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)E=N;else if(E=U.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let X=E.uuid,W=A.uuid,L=c[X];L===void 0&&(L={},c[X]=L);let O=L[W];O===void 0&&(O=E.clone(),L[W]=O,A.addEventListener("dispose",R)),E=O}if(E.visible=A.visible,E.wireframe=A.wireframe,M===Yn?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let X=i.properties.get(E);X.light=U}return E}function b(S,A,U,M,E){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===Yn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,S.matrixWorld);let W=e.update(S),L=S.material;if(Array.isArray(L)){let O=W.groups;for(let k=0,K=O.length;k<K;k++){let J=O[k],Y=L[J.materialIndex];if(Y&&Y.visible){let ne=_(S,Y,M,E);S.onBeforeShadow(i,S,A,U,W,ne,J),i.renderBufferDirect(U,null,W,ne,S,J),S.onAfterShadow(i,S,A,U,W,ne,J)}}}else if(L.visible){let O=_(S,L,M,E);S.onBeforeShadow(i,S,A,U,W,O,null),i.renderBufferDirect(U,null,W,O,S,null),S.onAfterShadow(i,S,A,U,W,O,null)}}let X=S.children;for(let W=0,L=X.length;W<L;W++)b(X[W],A,U,M,E)}function R(S){S.target.removeEventListener("dispose",R);for(let U in c){let M=c[U],E=S.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function dx(i,e,t){let n=t.isWebGL2;function s(){let D=!1,he=new ft,ue=null,Ie=new ft(0,0,0,0);return{setMask:function(Ce){ue!==Ce&&!D&&(i.colorMask(Ce,Ce,Ce,Ce),ue=Ce)},setLocked:function(Ce){D=Ce},setClear:function(Ce,je,tt,Ct,Gt){Gt===!0&&(Ce*=Ct,je*=Ct,tt*=Ct),he.set(Ce,je,tt,Ct),Ie.equals(he)===!1&&(i.clearColor(Ce,je,tt,Ct),Ie.copy(he))},reset:function(){D=!1,ue=null,Ie.set(-1,0,0,0)}}}function r(){let D=!1,he=null,ue=null,Ie=null;return{setTest:function(Ce){Ce?Oe(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(Ce){he!==Ce&&!D&&(i.depthMask(Ce),he=Ce)},setFunc:function(Ce){if(ue!==Ce){switch(Ce){case Df:i.depthFunc(i.NEVER);break;case Uf:i.depthFunc(i.ALWAYS);break;case Nf:i.depthFunc(i.LESS);break;case ya:i.depthFunc(i.LEQUAL);break;case Of:i.depthFunc(i.EQUAL);break;case Ff:i.depthFunc(i.GEQUAL);break;case Bf:i.depthFunc(i.GREATER);break;case kf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Ce}},setLocked:function(Ce){D=Ce},setClear:function(Ce){Ie!==Ce&&(i.clearDepth(Ce),Ie=Ce)},reset:function(){D=!1,he=null,ue=null,Ie=null}}}function a(){let D=!1,he=null,ue=null,Ie=null,Ce=null,je=null,tt=null,Ct=null,Gt=null;return{setTest:function(lt){D||(lt?Oe(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(lt){he!==lt&&!D&&(i.stencilMask(lt),he=lt)},setFunc:function(lt,Wt,Dn){(ue!==lt||Ie!==Wt||Ce!==Dn)&&(i.stencilFunc(lt,Wt,Dn),ue=lt,Ie=Wt,Ce=Dn)},setOp:function(lt,Wt,Dn){(je!==lt||tt!==Wt||Ct!==Dn)&&(i.stencilOp(lt,Wt,Dn),je=lt,tt=Wt,Ct=Dn)},setLocked:function(lt){D=lt},setClear:function(lt){Gt!==lt&&(i.clearStencil(lt),Gt=lt)},reset:function(){D=!1,he=null,ue=null,Ie=null,Ce=null,je=null,tt=null,Ct=null,Gt=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,b=null,R=null,S=null,A=null,U=null,M=new Ue(0,0,0),E=0,N=!1,X=null,W=null,L=null,O=null,k=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Y=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ne)[1]),J=Y>=1):ne.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),J=Y>=2);let re=null,ge={},q=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),_e=new ft().fromArray(q),Te=new ft().fromArray(ie);function Se(D,he,ue,Ie){let Ce=new Uint8Array(4),je=i.createTexture();i.bindTexture(D,je),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<ue;tt++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(he,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(he+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return je}let De={};De[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),De[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),De[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(i.DEPTH_TEST),l.setFunc(ya),xe(!1),w(ih),Oe(i.CULL_FACE),Z(di);function Oe(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function we(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Fe(D,he){return f[D]!==he?(i.bindFramebuffer(D,he),f[D]=he,n&&(D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he)),!0):!1}function I(D,he){let ue=x,Ie=!1;if(D)if(ue=g.get(he),ue===void 0&&(ue=[],g.set(he,ue)),D.isWebGLMultipleRenderTargets){let Ce=D.texture;if(ue.length!==Ce.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let je=0,tt=Ce.length;je<tt;je++)ue[je]=i.COLOR_ATTACHMENT0+je;ue.length=Ce.length,Ie=!0}}else ue[0]!==i.COLOR_ATTACHMENT0&&(ue[0]=i.COLOR_ATTACHMENT0,Ie=!0);else ue[0]!==i.BACK&&(ue[0]=i.BACK,Ie=!0);Ie&&(t.isWebGL2?i.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function ce(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let $={[Li]:i.FUNC_ADD,[xf]:i.FUNC_SUBTRACT,[yf]:i.FUNC_REVERSE_SUBTRACT};if(n)$[ah]=i.MIN,$[oh]=i.MAX;else{let D=e.get("EXT_blend_minmax");D!==null&&($[ah]=D.MIN_EXT,$[oh]=D.MAX_EXT)}let oe={[vf]:i.ZERO,[Mf]:i.ONE,[Sf]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[Rf]:i.SRC_ALPHA_SATURATE,[Tf]:i.DST_COLOR,[Ef]:i.DST_ALPHA,[bf]:i.ONE_MINUS_SRC_COLOR,[yl]:i.ONE_MINUS_SRC_ALPHA,[Af]:i.ONE_MINUS_DST_COLOR,[wf]:i.ONE_MINUS_DST_ALPHA,[Cf]:i.CONSTANT_COLOR,[Pf]:i.ONE_MINUS_CONSTANT_COLOR,[Lf]:i.CONSTANT_ALPHA,[If]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(D,he,ue,Ie,Ce,je,tt,Ct,Gt,lt){if(D===di){p===!0&&(we(i.BLEND),p=!1);return}if(p===!1&&(Oe(i.BLEND),p=!0),D!==_f){if(D!==y||lt!==N){if((_!==Li||S!==Li)&&(i.blendEquation(i.FUNC_ADD),_=Li,S=Li),lt)switch(D){case fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oi:i.blendFunc(i.ONE,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,R=null,A=null,U=null,M.set(0,0,0),E=0,y=D,N=lt}return}Ce=Ce||he,je=je||ue,tt=tt||Ie,(he!==_||Ce!==S)&&(i.blendEquationSeparate($[he],$[Ce]),_=he,S=Ce),(ue!==b||Ie!==R||je!==A||tt!==U)&&(i.blendFuncSeparate(oe[ue],oe[Ie],oe[je],oe[tt]),b=ue,R=Ie,A=je,U=tt),(Ct.equals(M)===!1||Gt!==E)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Gt),M.copy(Ct),E=Gt),y=D,N=!1}function Ae(D,he){D.side===En?we(i.CULL_FACE):Oe(i.CULL_FACE);let ue=D.side===zt;he&&(ue=!ue),xe(ue),D.blending===fi&&D.transparent===!1?Z(di):Z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);let Ie=D.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),B(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Oe(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(D){X!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),X=D)}function w(D){D!==pf?(Oe(i.CULL_FACE),D!==W&&(D===ih?i.cullFace(i.BACK):D===mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),W=D}function v(D){D!==L&&(J&&i.lineWidth(D),L=D)}function B(D,he,ue){D?(Oe(i.POLYGON_OFFSET_FILL),(O!==he||k!==ue)&&(i.polygonOffset(he,ue),O=he,k=ue)):we(i.POLYGON_OFFSET_FILL)}function ae(D){D?Oe(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function Q(D){D===void 0&&(D=i.TEXTURE0+K-1),re!==D&&(i.activeTexture(D),re=D)}function j(D,he,ue){ue===void 0&&(re===null?ue=i.TEXTURE0+K-1:ue=re);let Ie=ge[ue];Ie===void 0&&(Ie={type:void 0,texture:void 0},ge[ue]=Ie),(Ie.type!==D||Ie.texture!==he)&&(re!==ue&&(i.activeTexture(ue),re=ue),i.bindTexture(D,he||De[D]),Ie.type=D,Ie.texture=he)}function Ee(){let D=ge[re];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(D){_e.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),_e.copy(D))}function Ye(D){Te.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Te.copy(D))}function Je(D,he){let ue=u.get(he);ue===void 0&&(ue=new WeakMap,u.set(he,ue));let Ie=ue.get(D);Ie===void 0&&(Ie=i.getUniformBlockIndex(he,D.name),ue.set(D,Ie))}function We(D,he){let Ie=u.get(he).get(D);h.get(he)!==Ie&&(i.uniformBlockBinding(he,Ie,D.__bindingPointIndex),h.set(he,Ie))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},re=null,ge={},f={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,b=null,R=null,S=null,A=null,U=null,M=new Ue(0,0,0),E=0,N=!1,X=null,W=null,L=null,O=null,k=null,_e.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Oe,disable:we,bindFramebuffer:Fe,drawBuffers:I,useProgram:ce,setBlending:Z,setMaterial:Ae,setFlipSided:xe,setCullFace:w,setLineWidth:v,setPolygonOffset:B,setScissorTest:ae,activeTexture:Q,bindTexture:j,unbindTexture:Ee,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:fe,texImage3D:le,updateUBOMapping:Je,uniformBlockBinding:We,texStorage2D:P,texStorage3D:te,texSubImage2D:Le,texSubImage3D:ze,compressedTexSubImage2D:ee,compressedTexSubImage3D:qe,scissor:Re,viewport:Ye,reset:de}}function fx(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):Aa("canvas")}function x(w,v,B,ae){let Q=1;if((w.width>ae||w.height>ae)&&(Q=ae/Math.max(w.width,w.height)),Q<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let j=v?Ta:Math.floor,Ee=j(Q*w.width),me=j(Q*w.height);u===void 0&&(u=g(Ee,me));let ve=B?g(Ee,me):u;return ve.width=Ee,ve.height=me,ve.getContext("2d").drawImage(w,0,0,Ee,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ee+"x"+me+")."),ve}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return wl(w.width)&&wl(w.height)}function p(w){return o?!1:w.wrapS!==sn||w.wrapT!==sn||w.minFilter!==Yt&&w.minFilter!==cn}function y(w,v){return w.generateMipmaps&&v&&w.minFilter!==Yt&&w.minFilter!==cn}function _(w){i.generateMipmap(w)}function b(w,v,B,ae,Q=!1){if(o===!1)return v;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=v;if(v===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),v===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RGBA){let Ee=Q?Sa:st.getTransfer(ae);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=Ee===ct?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function R(w,v,B){return y(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==Yt&&w.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function S(w){return w===Yt||w===lh||w===Fo?i.NEAREST:i.LINEAR}function A(w){let v=w.target;v.removeEventListener("dispose",A),M(v),v.isVideoTexture&&h.delete(v)}function U(w){let v=w.target;v.removeEventListener("dispose",U),N(v)}function M(w){let v=n.get(w);if(v.__webglInit===void 0)return;let B=w.source,ae=d.get(B);if(ae){let Q=ae[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(w),Object.keys(ae).length===0&&d.delete(B)}n.remove(w)}function E(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let B=w.source,ae=d.get(B);delete ae[v.__cacheKey],a.memory.textures--}function N(w){let v=w.texture,B=n.get(w),ae=n.get(v);if(ae.__webglTexture!==void 0&&(i.deleteTexture(ae.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(B.__webglFramebuffer[Q]))for(let j=0;j<B.__webglFramebuffer[Q].length;j++)i.deleteFramebuffer(B.__webglFramebuffer[Q][j]);else i.deleteFramebuffer(B.__webglFramebuffer[Q]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[Q])}else{if(Array.isArray(B.__webglFramebuffer))for(let Q=0;Q<B.__webglFramebuffer.length;Q++)i.deleteFramebuffer(B.__webglFramebuffer[Q]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,j=v.length;Q<j;Q++){let Ee=n.get(v[Q]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),a.memory.textures--),n.remove(v[Q])}n.remove(v),n.remove(w)}let X=0;function W(){X=0}function L(){let w=X;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),X+=1,w}function O(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function k(w,v){let B=n.get(w);if(w.isVideoTexture&&Ae(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){let ae=w.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(B,w,v);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function K(w,v){let B=n.get(w);if(w.version>0&&B.__version!==w.version){_e(B,w,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function J(w,v){let B=n.get(w);if(w.version>0&&B.__version!==w.version){_e(B,w,v);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function Y(w,v){let B=n.get(w);if(w.version>0&&B.__version!==w.version){Te(B,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let ne={[Sl]:i.REPEAT,[sn]:i.CLAMP_TO_EDGE,[bl]:i.MIRRORED_REPEAT},re={[Yt]:i.NEAREST,[lh]:i.NEAREST_MIPMAP_NEAREST,[Fo]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Yf]:i.LINEAR_MIPMAP_NEAREST,[js]:i.LINEAR_MIPMAP_LINEAR},ge={[rp]:i.NEVER,[up]:i.ALWAYS,[ap]:i.LESS,[Ju]:i.LEQUAL,[op]:i.EQUAL,[hp]:i.GEQUAL,[lp]:i.GREATER,[cp]:i.NOTEQUAL};function q(w,v,B){if(B?(i.texParameteri(w,i.TEXTURE_WRAP_S,ne[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ne[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ne[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,re[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,re[v.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==sn||v.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,S(v.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,S(v.minFilter)),v.minFilter!==Yt&&v.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ge[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ae=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Yt||v.minFilter!==Fo&&v.minFilter!==js||v.type===ui&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Qs&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(w,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function ie(w,v){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));let ae=v.source,Q=d.get(ae);Q===void 0&&(Q={},d.set(ae,Q));let j=O(v);if(j!==w.__cacheKey){Q[j]===void 0&&(Q[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[j].usedTimes++;let Ee=Q[w.__cacheKey];Ee!==void 0&&(Q[w.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(v)),w.__cacheKey=j,w.__webglTexture=Q[j].texture}return B}function _e(w,v,B){let ae=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ae=i.TEXTURE_3D);let Q=ie(w,v),j=v.source;t.bindTexture(ae,w.__webglTexture,i.TEXTURE0+B);let Ee=n.get(j);if(j.version!==Ee.__version||Q===!0){t.activeTexture(i.TEXTURE0+B);let me=st.getPrimaries(st.workingColorSpace),ve=v.colorSpace===hn?null:st.getPrimaries(v.colorSpace),Le=v.colorSpace===hn||me===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ze=p(v)&&m(v.image)===!1,ee=x(v.image,ze,!1,s.maxTextureSize);ee=xe(v,ee);let qe=m(ee)||o,P=r.convert(v.format,v.colorSpace),te=r.convert(v.type),fe=b(v.internalFormat,P,te,v.colorSpace,v.isVideoTexture);q(ae,v,qe);let le,Re=v.mipmaps,Ye=o&&v.isVideoTexture!==!0&&fe!==Yu,Je=Ee.__version===void 0||Q===!0,We=R(v,ee,qe);if(v.isDepthTexture)fe=i.DEPTH_COMPONENT,o?v.type===ui?fe=i.DEPTH_COMPONENT32F:v.type===hi?fe=i.DEPTH_COMPONENT24:v.type===Di?fe=i.DEPTH24_STENCIL8:fe=i.DEPTH_COMPONENT16:v.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ui&&fe===i.DEPTH_COMPONENT&&v.type!==pc&&v.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=hi,te=r.convert(v.type)),v.format===Ms&&fe===i.DEPTH_COMPONENT&&(fe=i.DEPTH_STENCIL,v.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Di,te=r.convert(v.type))),Je&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,fe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,fe,ee.width,ee.height,0,P,te,null));else if(v.isDataTexture)if(Re.length>0&&qe){Ye&&Je&&t.texStorage2D(i.TEXTURE_2D,We,fe,Re[0].width,Re[0].height);for(let de=0,D=Re.length;de<D;de++)le=Re[de],Ye?t.texSubImage2D(i.TEXTURE_2D,de,0,0,le.width,le.height,P,te,le.data):t.texImage2D(i.TEXTURE_2D,de,fe,le.width,le.height,0,P,te,le.data);v.generateMipmaps=!1}else Ye?(Je&&t.texStorage2D(i.TEXTURE_2D,We,fe,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,P,te,ee.data)):t.texImage2D(i.TEXTURE_2D,0,fe,ee.width,ee.height,0,P,te,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ye&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,fe,Re[0].width,Re[0].height,ee.depth);for(let de=0,D=Re.length;de<D;de++)le=Re[de],v.format!==wn?P!==null?Ye?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,le.width,le.height,ee.depth,P,le.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,fe,le.width,le.height,ee.depth,0,le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,le.width,le.height,ee.depth,P,te,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,fe,le.width,le.height,ee.depth,0,P,te,le.data)}else{Ye&&Je&&t.texStorage2D(i.TEXTURE_2D,We,fe,Re[0].width,Re[0].height);for(let de=0,D=Re.length;de<D;de++)le=Re[de],v.format!==wn?P!==null?Ye?t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,le.width,le.height,P,le.data):t.compressedTexImage2D(i.TEXTURE_2D,de,fe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(i.TEXTURE_2D,de,0,0,le.width,le.height,P,te,le.data):t.texImage2D(i.TEXTURE_2D,de,fe,le.width,le.height,0,P,te,le.data)}else if(v.isDataArrayTexture)Ye?(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,fe,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,P,te,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,ee.width,ee.height,ee.depth,0,P,te,ee.data);else if(v.isData3DTexture)Ye?(Je&&t.texStorage3D(i.TEXTURE_3D,We,fe,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,P,te,ee.data)):t.texImage3D(i.TEXTURE_3D,0,fe,ee.width,ee.height,ee.depth,0,P,te,ee.data);else if(v.isFramebufferTexture){if(Je)if(Ye)t.texStorage2D(i.TEXTURE_2D,We,fe,ee.width,ee.height);else{let de=ee.width,D=ee.height;for(let he=0;he<We;he++)t.texImage2D(i.TEXTURE_2D,he,fe,de,D,0,P,te,null),de>>=1,D>>=1}}else if(Re.length>0&&qe){Ye&&Je&&t.texStorage2D(i.TEXTURE_2D,We,fe,Re[0].width,Re[0].height);for(let de=0,D=Re.length;de<D;de++)le=Re[de],Ye?t.texSubImage2D(i.TEXTURE_2D,de,0,0,P,te,le):t.texImage2D(i.TEXTURE_2D,de,fe,P,te,le);v.generateMipmaps=!1}else Ye?(Je&&t.texStorage2D(i.TEXTURE_2D,We,fe,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,P,te,ee)):t.texImage2D(i.TEXTURE_2D,0,fe,P,te,ee);y(v,qe)&&_(ae),Ee.__version=j.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Te(w,v,B){if(v.image.length!==6)return;let ae=ie(w,v),Q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);let j=n.get(Q);if(Q.version!==j.__version||ae===!0){t.activeTexture(i.TEXTURE0+B);let Ee=st.getPrimaries(st.workingColorSpace),me=v.colorSpace===hn?null:st.getPrimaries(v.colorSpace),ve=v.colorSpace===hn||Ee===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Le=v.isCompressedTexture||v.image[0].isCompressedTexture,ze=v.image[0]&&v.image[0].isDataTexture,ee=[];for(let de=0;de<6;de++)!Le&&!ze?ee[de]=x(v.image[de],!1,!0,s.maxCubemapSize):ee[de]=ze?v.image[de].image:v.image[de],ee[de]=xe(v,ee[de]);let qe=ee[0],P=m(qe)||o,te=r.convert(v.format,v.colorSpace),fe=r.convert(v.type),le=b(v.internalFormat,te,fe,v.colorSpace),Re=o&&v.isVideoTexture!==!0,Ye=j.__version===void 0||ae===!0,Je=R(v,qe,P);q(i.TEXTURE_CUBE_MAP,v,P);let We;if(Le){Re&&Ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Je,le,qe.width,qe.height);for(let de=0;de<6;de++){We=ee[de].mipmaps;for(let D=0;D<We.length;D++){let he=We[D];v.format!==wn?te!==null?Re?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D,0,0,he.width,he.height,te,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D,le,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D,0,0,he.width,he.height,te,fe,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D,le,he.width,he.height,0,te,fe,he.data)}}}else{We=v.mipmaps,Re&&Ye&&(We.length>0&&Je++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Je,le,ee[0].width,ee[0].height));for(let de=0;de<6;de++)if(ze){Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ee[de].width,ee[de].height,te,fe,ee[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,le,ee[de].width,ee[de].height,0,te,fe,ee[de].data);for(let D=0;D<We.length;D++){let ue=We[D].image[de].image;Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D+1,0,0,ue.width,ue.height,te,fe,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D+1,le,ue.width,ue.height,0,te,fe,ue.data)}}else{Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,te,fe,ee[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,le,te,fe,ee[de]);for(let D=0;D<We.length;D++){let he=We[D];Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D+1,0,0,te,fe,he.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,D+1,le,te,fe,he.image[de])}}}y(v,P)&&_(i.TEXTURE_CUBE_MAP),j.__version=Q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Se(w,v,B,ae,Q,j){let Ee=r.convert(B.format,B.colorSpace),me=r.convert(B.type),ve=b(B.internalFormat,Ee,me,B.colorSpace);if(!n.get(v).__hasExternalTextures){let ze=Math.max(1,v.width>>j),ee=Math.max(1,v.height>>j);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,ve,ze,ee,v.depth,0,Ee,me,null):t.texImage2D(Q,j,ve,ze,ee,0,Ee,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Z(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Q,n.get(B).__webglTexture,0,oe(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,Q,n.get(B).__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(w,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer&&!v.stencilBuffer){let ae=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||Z(v)){let Q=v.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ui?ae=i.DEPTH_COMPONENT32F:Q.type===hi&&(ae=i.DEPTH_COMPONENT24));let j=oe(v);Z(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,ae,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,j,ae,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,ae,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(v.depthBuffer&&v.stencilBuffer){let ae=oe(v);B&&Z(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,v.width,v.height):Z(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{let ae=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Q=0;Q<ae.length;Q++){let j=ae[Q],Ee=r.convert(j.format,j.colorSpace),me=r.convert(j.type),ve=b(j.internalFormat,Ee,me,j.colorSpace),Le=oe(v);B&&Z(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ve,v.width,v.height):Z(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,ve,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ve,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);let ae=n.get(v.depthTexture).__webglTexture,Q=oe(v);if(v.depthTexture.format===Ui)Z(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(v.depthTexture.format===Ms)Z(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function we(w){let v=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Oe(v.__webglFramebuffer,w)}else if(B){v.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ae]),v.__webglDepthbuffer[ae]=i.createRenderbuffer(),De(v.__webglDepthbuffer[ae],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),De(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(w,v,B){let ae=n.get(w);v!==void 0&&Se(ae.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&we(w)}function I(w){let v=w.texture,B=n.get(w),ae=n.get(v);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=v.version,a.memory.textures++);let Q=w.isWebGLCubeRenderTarget===!0,j=w.isWebGLMultipleRenderTargets===!0,Ee=m(w)||o;if(Q){B.__webglFramebuffer=[];for(let me=0;me<6;me++)if(o&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[me]=[];for(let ve=0;ve<v.mipmaps.length;ve++)B.__webglFramebuffer[me][ve]=i.createFramebuffer()}else B.__webglFramebuffer[me]=i.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let me=0;me<v.mipmaps.length;me++)B.__webglFramebuffer[me]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(j)if(s.drawBuffers){let me=w.texture;for(let ve=0,Le=me.length;ve<Le;ve++){let ze=n.get(me[ve]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Z(w)===!1){let me=j?v:[v];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ve=0;ve<me.length;ve++){let Le=me[ve];B.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ve]);let ze=r.convert(Le.format,Le.colorSpace),ee=r.convert(Le.type),qe=b(Le.internalFormat,ze,ee,Le.colorSpace,w.isXRRenderTarget===!0),P=oe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,P,qe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,B.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),De(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),q(i.TEXTURE_CUBE_MAP,v,Ee);for(let me=0;me<6;me++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)Se(B.__webglFramebuffer[me][ve],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else Se(B.__webglFramebuffer[me],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);y(v,Ee)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){let me=w.texture;for(let ve=0,Le=me.length;ve<Le;ve++){let ze=me[ve],ee=n.get(ze);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),q(i.TEXTURE_2D,ze,Ee),Se(B.__webglFramebuffer,w,ze,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),y(ze,Ee)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?me=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,ae.__webglTexture),q(me,v,Ee),o&&v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)Se(B.__webglFramebuffer[ve],w,v,i.COLOR_ATTACHMENT0,me,ve);else Se(B.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,me,0);y(v,Ee)&&_(me),t.unbindTexture()}w.depthBuffer&&we(w)}function ce(w){let v=m(w)||o,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ae=0,Q=B.length;ae<Q;ae++){let j=B[ae];if(y(j,v)){let Ee=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,me=n.get(j).__webglTexture;t.bindTexture(Ee,me),_(Ee),t.unbindTexture()}}}function $(w){if(o&&w.samples>0&&Z(w)===!1){let v=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,ae=w.height,Q=i.COLOR_BUFFER_BIT,j=[],Ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(w),ve=w.isWebGLMultipleRenderTargets===!0;if(ve)for(let Le=0;Le<v.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Le=0;Le<v.length;Le++){j.push(i.COLOR_ATTACHMENT0+Le),w.depthBuffer&&j.push(Ee);let ze=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(ze===!1&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ve&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Le]),ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ee]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ee])),ve){let ee=n.get(v[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,B,ae,0,0,B,ae,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Le=0;Le<v.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,me.__webglColorRenderbuffer[Le]);let ze=n.get(v[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function oe(w){return Math.min(s.maxSamples,w.samples)}function Z(w){let v=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ae(w){let v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function xe(w,v){let B=w.colorSpace,ae=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===El||B!==Zn&&B!==hn&&(st.getTransfer(B)===ct?o===!1?e.has("EXT_sRGB")===!0&&ae===wn?(w.format=El,w.minFilter=cn,w.generateMipmaps=!1):v=Ra.sRGBToLinear(v):(ae!==wn||Q!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}this.allocateTextureUnit=L,this.resetTextureUnits=W,this.setTexture2D=k,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=Fe,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Z}function px(i,e,t){let n=t.isWebGL2;function s(r,a=hn){let o,l=st.getTransfer(a);if(r===mi)return i.UNSIGNED_BYTE;if(r===Vu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Gu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===$f)return i.BYTE;if(r===Zf)return i.SHORT;if(r===pc)return i.UNSIGNED_SHORT;if(r===Hu)return i.INT;if(r===hi)return i.UNSIGNED_INT;if(r===ui)return i.FLOAT;if(r===Qs)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Jf)return i.ALPHA;if(r===wn)return i.RGBA;if(r===Kf)return i.LUMINANCE;if(r===jf)return i.LUMINANCE_ALPHA;if(r===Ui)return i.DEPTH_COMPONENT;if(r===Ms)return i.DEPTH_STENCIL;if(r===El)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Qf)return i.RED;if(r===Wu)return i.RED_INTEGER;if(r===ep)return i.RG;if(r===Xu)return i.RG_INTEGER;if(r===qu)return i.RGBA_INTEGER;if(r===Bo||r===ko||r===zo||r===Ho)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Bo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Bo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ko)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ho)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ch||r===hh||r===uh||r===dh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ch)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===uh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===dh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===fh||r===ph)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===fh)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ph)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===mh||r===gh||r===_h||r===xh||r===yh||r===vh||r===Mh||r===Sh||r===bh||r===Eh||r===wh||r===Th||r===Ah||r===Rh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===mh)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gh)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_h)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xh)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yh)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vh)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mh)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sh)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bh)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Eh)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wh)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Th)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ah)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rh)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vo||r===Ch||r===Ph)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Vo)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ch)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ph)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tp||r===Lh||r===Ih||r===Dh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Vo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Lh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ih)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Di?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Bl=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},$t=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},mx={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},kl=class extends Nn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=t.getContextAttributes(),m=null,p=null,y=[],_=[],b=new se,R=null,S=new kt;S.layers.enable(1),S.viewport=new ft;let A=new kt;A.layers.enable(2),A.viewport=new ft;let U=[S,A],M=new Bl;M.layers.enable(1),M.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=y[q];return ie===void 0&&(ie=new $s,y[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=y[q];return ie===void 0&&(ie=new $s,y[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=y[q];return ie===void 0&&(ie=new $s,y[q]=ie),ie.getHandSpace()};function X(q){let ie=_.indexOf(q.inputSource);if(ie===-1)return;let _e=y[ie];_e!==void 0&&(_e.update(q.inputSource,q.frame,c||a),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",L);for(let q=0;q<y.length;q++){let ie=_[q];ie!==null&&(_[q]=null,y[q].disconnect(ie))}E=null,N=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ie={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Jn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ie=null,_e=null,Te=null;x.depth&&(Te=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=x.stencil?Ms:Ui,_e=x.stencil?Di:hi);let Se={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new Jn(d.textureWidth,d.textureHeight,{format:wn,type:mi,depthTexture:new Ba(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let De=e.properties.get(p);De.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(q){for(let ie=0;ie<q.removed.length;ie++){let _e=q.removed[ie],Te=_.indexOf(_e);Te>=0&&(_[Te]=null,y[Te].disconnect(_e))}for(let ie=0;ie<q.added.length;ie++){let _e=q.added[ie],Te=_.indexOf(_e);if(Te===-1){for(let De=0;De<y.length;De++)if(De>=_.length){_.push(_e),Te=De;break}else if(_[De]===null){_[De]=_e,Te=De;break}if(Te===-1)break}let Se=y[Te];Se&&Se.connect(_e)}}let O=new C,k=new C;function K(q,ie,_e){O.setFromMatrixPosition(ie.matrixWorld),k.setFromMatrixPosition(_e.matrixWorld);let Te=O.distanceTo(k),Se=ie.projectionMatrix.elements,De=_e.projectionMatrix.elements,Oe=Se[14]/(Se[10]-1),we=Se[14]/(Se[10]+1),Fe=(Se[9]+1)/Se[5],I=(Se[9]-1)/Se[5],ce=(Se[8]-1)/Se[0],$=(De[8]+1)/De[0],oe=Oe*ce,Z=Oe*$,Ae=Te/(-ce+$),xe=Ae*-ce;ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(xe),q.translateZ(Ae),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let w=Oe+Ae,v=we+Ae,B=oe-xe,ae=Z+(Te-xe),Q=Fe*we/v*w,j=I*we/v*w;q.projectionMatrix.makePerspective(B,ae,Q,j,w,v),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function J(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;M.near=A.near=S.near=q.near,M.far=A.far=S.far=q.far,(E!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,N=M.far);let ie=q.parent,_e=M.cameras;J(M,ie);for(let Te=0;Te<_e.length;Te++)J(_e[Te],ie);_e.length===2?K(M,S,A):M.projectionMatrix.copy(S.projectionMatrix),Y(q,M,ie)};function Y(q,ie,_e){_e===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=er*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let ne=null;function re(q,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){let _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Te=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,Te=!0);for(let Se=0;Se<_e.length;Se++){let De=_e[Se],Oe=null;if(f!==null)Oe=f.getViewport(De);else{let Fe=u.getViewSubImage(d,De);Oe=Fe.viewport,Se===0&&(e.setRenderTargetTextures(p,Fe.colorTexture,d.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(p))}let we=U[Se];we===void 0&&(we=new kt,we.layers.enable(Se),we.viewport=new ft,U[Se]=we),we.matrix.fromArray(De.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(De.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Se===0&&(M.matrix.copy(we.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Te===!0&&M.cameras.push(we)}}for(let _e=0;_e<y.length;_e++){let Te=_[_e],Se=y[_e];Te!==null&&Se!==void 0&&Se.update(Te,ie,c||a)}ne&&ne(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let ge=new ed;ge.setAnimationLoop(re),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}};function gx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _x(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let b=_.program;n.uniformBlockBinding(y,b)}function c(y,_){let b=s[y.id];b===void 0&&(g(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));let R=_.program;n.updateUBOMapping(y,R);let S=e.render.frame;r[y.id]!==S&&(d(y),r[y.id]=S)}function h(y){let _=u();y.__bindingPointIndex=_;let b=i.createBuffer(),R=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],b=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,A=b.length;S<A;S++){let U=Array.isArray(b[S])?b[S]:[b[S]];for(let M=0,E=U.length;M<E;M++){let N=U[M];if(f(N,S,M,R)===!0){let X=N.__offset,W=Array.isArray(N.value)?N.value:[N.value],L=0;for(let O=0;O<W.length;O++){let k=W[O],K=x(k);typeof k=="number"||typeof k=="boolean"?(N.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,X+L,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=0,N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=0,N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=0):(k.toArray(N.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,b,R){let S=y.value,A=_+"_"+b;if(R[A]===void 0)return typeof S=="number"||typeof S=="boolean"?R[A]=S:R[A]=S.clone(),!0;{let U=R[A];if(typeof S=="number"||typeof S=="boolean"){if(U!==S)return R[A]=S,!0}else if(U.equals(S)===!1)return U.copy(S),!0}return!1}function g(y){let _=y.uniforms,b=0,R=16;for(let A=0,U=_.length;A<U;A++){let M=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,N=M.length;E<N;E++){let X=M[E],W=Array.isArray(X.value)?X.value:[X.value];for(let L=0,O=W.length;L<O;L++){let k=W[L],K=x(k),J=b%R;J!==0&&R-J<K.boundary&&(b+=R-J),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=b,b+=K.storage}}}let S=b%R;return S>0&&(b+=R-S),y.__size=b,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ir=class{constructor(e={}){let{canvas:t=Tp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;let _=this,b=!1,R=0,S=0,A=null,U=-1,M=null,E=new ft,N=new ft,X=null,W=new Ue(0),L=0,O=t.width,k=t.height,K=1,J=null,Y=null,ne=new ft(0,0,O,k),re=new ft(0,0,O,k),ge=!1,q=new nr,ie=!1,_e=!1,Te=null,Se=new rt,De=new se,Oe=new C,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return A===null?K:1}let I=n;function ce(T,F){for(let H=0;H<T.length;H++){let G=T[H],z=t.getContext(G,F);if(z!==null)return z}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",he,!1),I===null){let F=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&F.shift(),I=ce(F,T),I===null)throw ce(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,oe,Z,Ae,xe,w,v,B,ae,Q,j,Ee,me,ve,Le,ze,ee,qe,P,te,fe,le,Re,Ye;function Je(){$=new O0(I),oe=new P0(I,$,e),$.init(oe),le=new px(I,$,oe),Z=new dx(I,$,oe),Ae=new k0(I),xe=new ex,w=new fx(I,$,Z,xe,oe,le,Ae),v=new I0(_),B=new N0(_),ae=new Yp(I,oe),Re=new R0(I,$,ae,oe),Q=new F0(I,ae,Ae,Re),j=new G0(I,Q,ae,Ae),P=new V0(I,oe,w),ze=new L0(xe),Ee=new Q_(_,v,B,$,oe,Re,ze),me=new gx(_,xe),ve=new nx,Le=new lx($,oe),qe=new A0(_,v,B,Z,j,d,l),ee=new ux(_,j,oe),Ye=new _x(I,Ae,oe,Z),te=new C0(I,$,Ae,oe),fe=new B0(I,$,Ae,oe),Ae.programs=Ee.programs,_.capabilities=oe,_.extensions=$,_.properties=xe,_.renderLists=ve,_.shadowMap=ee,_.state=Z,_.info=Ae}Je();let We=new kl(_,I);this.xr=We,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(O,k,!1))},this.getSize=function(T){return T.set(O,k)},this.setSize=function(T,F,H=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,k=F,t.width=Math.floor(T*K),t.height=Math.floor(F*K),H===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(O*K,k*K).floor()},this.setDrawingBufferSize=function(T,F,H){O=T,k=F,K=H,t.width=Math.floor(T*H),t.height=Math.floor(F*H),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(ne)},this.setViewport=function(T,F,H,G){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,F,H,G),Z.viewport(E.copy(ne).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,F,H,G){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,F,H,G),Z.scissor(N.copy(re).multiplyScalar(K).floor())},this.getScissorTest=function(){return ge},this.setScissorTest=function(T){Z.setScissorTest(ge=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(T=!0,F=!0,H=!0){let G=0;if(T){let z=!1;if(A!==null){let Me=A.texture.format;z=Me===qu||Me===Xu||Me===Wu}if(z){let Me=A.texture.type,Pe=Me===mi||Me===hi||Me===pc||Me===Di||Me===Vu||Me===Gu,Ne=qe.getClearColor(),Be=qe.getClearAlpha(),Xe=Ne.r,He=Ne.g,Ve=Ne.b;Pe?(f[0]=Xe,f[1]=He,f[2]=Ve,f[3]=Be,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Xe,g[1]=He,g[2]=Ve,g[3]=Be,I.clearBufferiv(I.COLOR,0,g))}else G|=I.COLOR_BUFFER_BIT}F&&(G|=I.DEPTH_BUFFER_BIT),H&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ve.dispose(),Le.dispose(),xe.dispose(),v.dispose(),B.dispose(),j.dispose(),Re.dispose(),Ye.dispose(),Ee.dispose(),We.dispose(),We.removeEventListener("sessionstart",Gt),We.removeEventListener("sessionend",lt),Te&&(Te.dispose(),Te=null),Wt.stop()};function de(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let T=Ae.autoReset,F=ee.enabled,H=ee.autoUpdate,G=ee.needsUpdate,z=ee.type;Je(),Ae.autoReset=T,ee.enabled=F,ee.autoUpdate=H,ee.needsUpdate=G,ee.type=z}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){let F=T.target;F.removeEventListener("dispose",ue),Ie(F)}function Ie(T){Ce(T),xe.remove(T)}function Ce(T){let F=xe.get(T).programs;F!==void 0&&(F.forEach(function(H){Ee.releaseProgram(H)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,H,G,z,Me){F===null&&(F=we);let Pe=z.isMesh&&z.matrixWorld.determinant()<0,Ne=hf(T,F,H,G,z);Z.setMaterial(G,Pe);let Be=H.index,Xe=1;if(G.wireframe===!0){if(Be=Q.getWireframeAttribute(H),Be===void 0)return;Xe=2}let He=H.drawRange,Ve=H.attributes.position,yt=He.start*Xe,en=(He.start+He.count)*Xe;Me!==null&&(yt=Math.max(yt,Me.start*Xe),en=Math.min(en,(Me.start+Me.count)*Xe)),Be!==null?(yt=Math.max(yt,0),en=Math.min(en,Be.count)):Ve!=null&&(yt=Math.max(yt,0),en=Math.min(en,Ve.count));let Pt=en-yt;if(Pt<0||Pt===1/0)return;Re.setup(z,G,Ne,H,Be);let Hn,pt=te;if(Be!==null&&(Hn=ae.get(Be),pt=fe,pt.setIndex(Hn)),z.isMesh)G.wireframe===!0?(Z.setLineWidth(G.wireframeLinewidth*Fe()),pt.setMode(I.LINES)):pt.setMode(I.TRIANGLES);else if(z.isLine){let $e=G.linewidth;$e===void 0&&($e=1),Z.setLineWidth($e*Fe()),z.isLineSegments?pt.setMode(I.LINES):z.isLineLoop?pt.setMode(I.LINE_LOOP):pt.setMode(I.LINE_STRIP)}else z.isPoints?pt.setMode(I.POINTS):z.isSprite&&pt.setMode(I.TRIANGLES);if(z.isBatchedMesh)pt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)pt.renderInstances(yt,Pt,z.count);else if(H.isInstancedBufferGeometry){let $e=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Do=Math.min(H.instanceCount,$e);pt.renderInstances(yt,Pt,Do)}else pt.render(yt,Pt)};function je(T,F,H){T.transparent===!0&&T.side===En&&T.forceSinglePass===!1?(T.side=zt,T.needsUpdate=!0,Vr(T,F,H),T.side=gi,T.needsUpdate=!0,Vr(T,F,H),T.side=En):Vr(T,F,H)}this.compile=function(T,F,H=null){H===null&&(H=T),m=Le.get(H),m.init(),y.push(m),H.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),T!==H&&T.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(_._useLegacyLights);let G=new Set;return T.traverse(function(z){let Me=z.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){let Ne=Me[Pe];je(Ne,H,z),G.add(Ne)}else je(Me,H,z),G.add(Me)}),y.pop(),m=null,G},this.compileAsync=function(T,F,H=null){let G=this.compile(T,F,H);return new Promise(z=>{function Me(){if(G.forEach(function(Pe){xe.get(Pe).currentProgram.isReady()&&G.delete(Pe)}),G.size===0){z(T);return}setTimeout(Me,10)}$.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let tt=null;function Ct(T){tt&&tt(T)}function Gt(){Wt.stop()}function lt(){Wt.start()}let Wt=new ed;Wt.setAnimationLoop(Ct),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(T){tt=T,We.setAnimationLoop(T),T===null?Wt.stop():Wt.start()},We.addEventListener("sessionstart",Gt),We.addEventListener("sessionend",lt),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(F),F=We.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,F,A),m=Le.get(T,y.length),m.init(),y.push(m),Se.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Se),_e=this.localClippingEnabled,ie=ze.init(this.clippingPlanes,_e),x=ve.get(T,p.length),x.init(),p.push(x),Dn(T,F,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(J,Y),this.info.render.frame++,ie===!0&&ze.beginShadows();let H=m.state.shadowsArray;if(ee.render(H,T,F),ie===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(x,T),m.setupLights(_._useLegacyLights),F.isArrayCamera){let G=F.cameras;for(let z=0,Me=G.length;z<Me;z++){let Pe=G[z];Kc(x,T,Pe,Pe.viewport)}}else Kc(x,T,F);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(_,T,F),Re.resetDefaultState(),U=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Dn(T,F,H,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){G&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Se);let Pe=j.update(T),Ne=T.material;Ne.visible&&x.push(T,Pe,Ne,H,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){let Pe=j.update(T),Ne=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Oe.copy(Pe.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(Se)),Array.isArray(Ne)){let Be=Pe.groups;for(let Xe=0,He=Be.length;Xe<He;Xe++){let Ve=Be[Xe],yt=Ne[Ve.materialIndex];yt&&yt.visible&&x.push(T,Pe,yt,H,Oe.z,Ve)}}else Ne.visible&&x.push(T,Pe,Ne,H,Oe.z,null)}}let Me=T.children;for(let Pe=0,Ne=Me.length;Pe<Ne;Pe++)Dn(Me[Pe],F,H,G)}function Kc(T,F,H,G){let z=T.opaque,Me=T.transmissive,Pe=T.transparent;m.setupLightsView(H),ie===!0&&ze.setGlobalState(_.clippingPlanes,H),Me.length>0&&cf(z,Me,F,H),G&&Z.viewport(E.copy(G)),z.length>0&&Hr(z,F,H),Me.length>0&&Hr(Me,F,H),Pe.length>0&&Hr(Pe,F,H),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function cf(T,F,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let Me=oe.isWebGL2;Te===null&&(Te=new Jn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?Qs:mi,minFilter:js,samples:Me?4:0})),_.getDrawingBufferSize(De),Me?Te.setSize(De.x,De.y):Te.setSize(Ta(De.x),Ta(De.y));let Pe=_.getRenderTarget();_.setRenderTarget(Te),_.getClearColor(W),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let Ne=_.toneMapping;_.toneMapping=pi,Hr(T,H,G),w.updateMultisampleRenderTarget(Te),w.updateRenderTargetMipmap(Te);let Be=!1;for(let Xe=0,He=F.length;Xe<He;Xe++){let Ve=F[Xe],yt=Ve.object,en=Ve.geometry,Pt=Ve.material,Hn=Ve.group;if(Pt.side===En&&yt.layers.test(G.layers)){let pt=Pt.side;Pt.side=zt,Pt.needsUpdate=!0,jc(yt,H,G,en,Pt,Hn),Pt.side=pt,Pt.needsUpdate=!0,Be=!0}}Be===!0&&(w.updateMultisampleRenderTarget(Te),w.updateRenderTargetMipmap(Te)),_.setRenderTarget(Pe),_.setClearColor(W,L),_.toneMapping=Ne}function Hr(T,F,H){let G=F.isScene===!0?F.overrideMaterial:null;for(let z=0,Me=T.length;z<Me;z++){let Pe=T[z],Ne=Pe.object,Be=Pe.geometry,Xe=G===null?Pe.material:G,He=Pe.group;Ne.layers.test(H.layers)&&jc(Ne,F,H,Be,Xe,He)}}function jc(T,F,H,G,z,Me){T.onBeforeRender(_,F,H,G,z,Me),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(_,F,H,G,T,Me),z.transparent===!0&&z.side===En&&z.forceSinglePass===!1?(z.side=zt,z.needsUpdate=!0,_.renderBufferDirect(H,F,G,z,T,Me),z.side=gi,z.needsUpdate=!0,_.renderBufferDirect(H,F,G,z,T,Me),z.side=En):_.renderBufferDirect(H,F,G,z,T,Me),T.onAfterRender(_,F,H,G,z,Me)}function Vr(T,F,H){F.isScene!==!0&&(F=we);let G=xe.get(T),z=m.state.lights,Me=m.state.shadowsArray,Pe=z.state.version,Ne=Ee.getParameters(T,z.state,Me,F,H),Be=Ee.getProgramCacheKey(Ne),Xe=G.programs;G.environment=T.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(T.isMeshStandardMaterial?B:v).get(T.envMap||G.environment),Xe===void 0&&(T.addEventListener("dispose",ue),Xe=new Map,G.programs=Xe);let He=Xe.get(Be);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===Pe)return eh(T,Ne),He}else Ne.uniforms=Ee.getUniforms(T),T.onBuild(H,Ne,_),T.onBeforeCompile(Ne,_),He=Ee.acquireProgram(Ne,Be),Xe.set(Be,He),G.uniforms=Ne.uniforms;let Ve=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=ze.uniform),eh(T,Ne),G.needsLights=df(T),G.lightsStateVersion=Pe,G.needsLights&&(Ve.ambientLightColor.value=z.state.ambient,Ve.lightProbe.value=z.state.probe,Ve.directionalLights.value=z.state.directional,Ve.directionalLightShadows.value=z.state.directionalShadow,Ve.spotLights.value=z.state.spot,Ve.spotLightShadows.value=z.state.spotShadow,Ve.rectAreaLights.value=z.state.rectArea,Ve.ltc_1.value=z.state.rectAreaLTC1,Ve.ltc_2.value=z.state.rectAreaLTC2,Ve.pointLights.value=z.state.point,Ve.pointLightShadows.value=z.state.pointShadow,Ve.hemisphereLights.value=z.state.hemi,Ve.directionalShadowMap.value=z.state.directionalShadowMap,Ve.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ve.spotShadowMap.value=z.state.spotShadowMap,Ve.spotLightMatrix.value=z.state.spotLightMatrix,Ve.spotLightMap.value=z.state.spotLightMap,Ve.pointShadowMap.value=z.state.pointShadowMap,Ve.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function Qc(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=xs.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function eh(T,F){let H=xe.get(T);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function hf(T,F,H,G,z){F.isScene!==!0&&(F=we),w.resetTextureUnits();let Me=F.fog,Pe=G.isMeshStandardMaterial?F.environment:null,Ne=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zn,Be=(G.isMeshStandardMaterial?B:v).get(G.envMap||Pe),Xe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ve=!!H.morphAttributes.position,yt=!!H.morphAttributes.normal,en=!!H.morphAttributes.color,Pt=pi;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Pt=_.toneMapping);let Hn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pt=Hn!==void 0?Hn.length:0,$e=xe.get(G),Do=m.state.lights;if(ie===!0&&(_e===!0||T!==M)){let on=T===M&&G.id===U;ze.setState(G,T,on)}let _t=!1;G.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Do.state.version||$e.outputColorSpace!==Ne||z.isBatchedMesh&&$e.batching===!1||!z.isBatchedMesh&&$e.batching===!0||z.isInstancedMesh&&$e.instancing===!1||!z.isInstancedMesh&&$e.instancing===!0||z.isSkinnedMesh&&$e.skinning===!1||!z.isSkinnedMesh&&$e.skinning===!0||z.isInstancedMesh&&$e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&$e.instancingColor===!1&&z.instanceColor!==null||$e.envMap!==Be||G.fog===!0&&$e.fog!==Me||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ze.numPlanes||$e.numIntersection!==ze.numIntersection)||$e.vertexAlphas!==Xe||$e.vertexTangents!==He||$e.morphTargets!==Ve||$e.morphNormals!==yt||$e.morphColors!==en||$e.toneMapping!==Pt||oe.isWebGL2===!0&&$e.morphTargetsCount!==pt)&&(_t=!0):(_t=!0,$e.__version=G.version);let Ei=$e.currentProgram;_t===!0&&(Ei=Vr(G,F,z));let th=!1,Fs=!1,Uo=!1,Ot=Ei.getUniforms(),wi=$e.uniforms;if(Z.useProgram(Ei.program)&&(th=!0,Fs=!0,Uo=!0),G.id!==U&&(U=G.id,Fs=!0),th||M!==T){Ot.setValue(I,"projectionMatrix",T.projectionMatrix),Ot.setValue(I,"viewMatrix",T.matrixWorldInverse);let on=Ot.map.cameraPosition;on!==void 0&&on.setValue(I,Oe.setFromMatrixPosition(T.matrixWorld)),oe.logarithmicDepthBuffer&&Ot.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ot.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Fs=!0,Uo=!0)}if(z.isSkinnedMesh){Ot.setOptional(I,z,"bindMatrix"),Ot.setOptional(I,z,"bindMatrixInverse");let on=z.skeleton;on&&(oe.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Ot.setValue(I,"boneTexture",on.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ot.setOptional(I,z,"batchingTexture"),Ot.setValue(I,"batchingTexture",z._matricesTexture,w));let No=H.morphAttributes;if((No.position!==void 0||No.normal!==void 0||No.color!==void 0&&oe.isWebGL2===!0)&&P.update(z,H,Ei),(Fs||$e.receiveShadow!==z.receiveShadow)&&($e.receiveShadow=z.receiveShadow,Ot.setValue(I,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wi.envMap.value=Be,wi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Fs&&(Ot.setValue(I,"toneMappingExposure",_.toneMappingExposure),$e.needsLights&&uf(wi,Uo),Me&&G.fog===!0&&me.refreshFogUniforms(wi,Me),me.refreshMaterialUniforms(wi,G,K,k,Te),xs.upload(I,Qc($e),wi,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(xs.upload(I,Qc($e),wi,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ot.setValue(I,"center",z.center),Ot.setValue(I,"modelViewMatrix",z.modelViewMatrix),Ot.setValue(I,"normalMatrix",z.normalMatrix),Ot.setValue(I,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let on=G.uniformsGroups;for(let Oo=0,ff=on.length;Oo<ff;Oo++)if(oe.isWebGL2){let nh=on[Oo];Ye.update(nh,Ei),Ye.bind(nh,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function uf(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function df(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,F,H){xe.get(T.texture).__webglTexture=F,xe.get(T.depthTexture).__webglTexture=H;let G=xe.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){let H=xe.get(T);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,H=0){A=T,R=F,S=H;let G=!0,z=null,Me=!1,Pe=!1;if(T){let Be=xe.get(T);Be.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):Be.__webglFramebuffer===void 0?w.setupRenderTarget(T):Be.__hasExternalTextures&&w.rebindTextures(T,xe.get(T.texture).__webglTexture,xe.get(T.depthTexture).__webglTexture);let Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Pe=!0);let He=xe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[F])?z=He[F][H]:z=He[F],Me=!0):oe.isWebGL2&&T.samples>0&&w.useMultisampledRTT(T)===!1?z=xe.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?z=He[H]:z=He,E.copy(T.viewport),N.copy(T.scissor),X=T.scissorTest}else E.copy(ne).multiplyScalar(K).floor(),N.copy(re).multiplyScalar(K).floor(),X=ge;if(Z.bindFramebuffer(I.FRAMEBUFFER,z)&&oe.drawBuffers&&G&&Z.drawBuffers(T,z),Z.viewport(E),Z.scissor(N),Z.setScissorTest(X),Me){let Be=xe.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Be.__webglTexture,H)}else if(Pe){let Be=xe.get(T.texture),Xe=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Be.__webglTexture,H||0,Xe)}U=-1},this.readRenderTargetPixels=function(T,F,H,G,z,Me,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){Z.bindFramebuffer(I.FRAMEBUFFER,Ne);try{let Be=T.texture,Xe=Be.format,He=Be.type;if(Xe!==wn&&le.convert(Xe)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ve=He===Qs&&($.has("EXT_color_buffer_half_float")||oe.isWebGL2&&$.has("EXT_color_buffer_float"));if(He!==mi&&le.convert(He)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===ui&&(oe.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&H>=0&&H<=T.height-z&&I.readPixels(F,H,G,z,le.convert(Xe),le.convert(He),Me)}finally{let Be=A!==null?xe.get(A).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(T,F,H=0){let G=Math.pow(2,-H),z=Math.floor(F.image.width*G),Me=Math.floor(F.image.height*G);w.setTexture2D(F,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,T.x,T.y,z,Me),Z.unbindTexture()},this.copyTextureToTexture=function(T,F,H,G=0){let z=F.image.width,Me=F.image.height,Pe=le.convert(H.format),Ne=le.convert(H.type);w.setTexture2D(H,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment),F.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,T.x,T.y,z,Me,Pe,Ne,F.image.data):F.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Pe,F.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,T.x,T.y,Pe,Ne,F.image),G===0&&H.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(T,F,H,G,z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Me=T.max.x-T.min.x+1,Pe=T.max.y-T.min.y+1,Ne=T.max.z-T.min.z+1,Be=le.convert(G.format),Xe=le.convert(G.type),He;if(G.isData3DTexture)w.setTexture3D(G,0),He=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)w.setTexture2DArray(G,0),He=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);let Ve=I.getParameter(I.UNPACK_ROW_LENGTH),yt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),en=I.getParameter(I.UNPACK_SKIP_PIXELS),Pt=I.getParameter(I.UNPACK_SKIP_ROWS),Hn=I.getParameter(I.UNPACK_SKIP_IMAGES),pt=H.isCompressedTexture?H.mipmaps[z]:H.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,T.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,T.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,T.min.z),H.isDataTexture||H.isData3DTexture?I.texSubImage3D(He,z,F.x,F.y,F.z,Me,Pe,Ne,Be,Xe,pt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(He,z,F.x,F.y,F.z,Me,Pe,Ne,Be,pt.data)):I.texSubImage3D(He,z,F.x,F.y,F.z,Me,Pe,Ne,Be,Xe,pt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ve),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,en),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Hn),z===0&&G.generateMipmaps&&I.generateMipmap(He),Z.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),Z.unbindTexture()},this.resetState=function(){R=0,S=0,A=null,Z.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===mc?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===eo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?Ni:$u}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ni?dt:Zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},zl=class extends ir{};zl.prototype.isWebGL1Renderer=!0;var ka=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},za=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var Qn=class extends ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},us=new rt,Eu=new rt,ua=[],wu=new Kn,xx=new rt,Vs=new ke,Gs=new dn,yi=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qn(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),wu.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(wu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),Gs.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),e.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),Eu.multiplyMatrices(n,us),Vs.matrixWorld=Eu,Vs.raycast(e,ua);for(let a=0,o=ua.length;a<o;a++){let l=ua[a];l.instanceId=r,l.object=this,t.push(l)}ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ha=class extends jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Tu=new C,Au=new C,Ru=new rt,dl=new _i,da=new dn,sr=class extends Ut{constructor(e=new gt,t=new Ha){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Tu.fromBufferAttribute(t,s-1),Au.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Tu.distanceTo(Au);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;Ru.copy(s).invert(),dl.copy(e.ray).applyMatrix4(Ru);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let _=p,b=y-1;_<b;_+=f){let R=g.getX(_),S=g.getX(_+1);if(c.fromBufferAttribute(m,R),h.fromBufferAttribute(m,S),dl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let _=p,b=y-1;_<b;_+=f){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),dl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};var rr=class extends jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cu=new rt,Hl=new _i,fa=new dn,pa=new C,ar=class extends Ut{constructor(e=new gt,t=new rr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;Cu.copy(s).invert(),Hl.copy(e.ray).applyMatrix4(Cu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);pa.fromBufferAttribute(u,m),Pu(pa,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)pa.fromBufferAttribute(u,g),Pu(pa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Pu(i,e,t,n,s,r,a){let o=Hl.distanceSqToPoint(i);if(o<t){let l=new C;Hl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Tn=class extends un{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new se:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,s=[],r=[],a=[],o=new C,l=new rt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(wt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(wt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},or=class extends mn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new se,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vl=class extends or{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function xc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ma=new C,fl=new xc,pl=new xc,ml=new xc,Gl=class extends mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ma.subVectors(s[0],s[1]).add(s[0]),c=ma);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ma),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),fl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),pl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),ml.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(fl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),pl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ml.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(fl.calc(l),pl.calc(l),ml.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Lu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function yx(i,e){let t=1-i;return t*t*e}function vx(i,e){return 2*(1-i)*i*e}function Mx(i,e){return i*i*e}function Zs(i,e,t,n){return yx(i,e)+vx(i,t)+Mx(i,n)}function Sx(i,e){let t=1-i;return t*t*t*e}function bx(i,e){let t=1-i;return 3*t*t*i*e}function Ex(i,e){return 3*(1-i)*i*i*e}function wx(i,e){return i*i*i*e}function Js(i,e,t,n,s){return Sx(i,e)+bx(i,t)+Ex(i,n)+wx(i,s)}var Va=class extends mn{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(e,s.x,r.x,a.x,o.x),Js(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wl=class extends mn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(e,s.x,r.x,a.x,o.x),Js(e,s.y,r.y,a.y,o.y),Js(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ga=class extends mn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xl=class extends mn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends mn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Zs(e,s.x,r.x,a.x),Zs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ql=class extends mn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Zs(e,s.x,r.x,a.x),Zs(e,s.y,r.y,a.y),Zs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Lu(o,l.x,c.x,h.x,u.x),Lu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},Yl=Object.freeze({__proto__:null,ArcCurve:Vl,CatmullRomCurve3:Gl,CubicBezierCurve:Va,CubicBezierCurve3:Wl,EllipseCurve:or,LineCurve:Ga,LineCurve3:Xl,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:ql,SplineCurve:Xa}),$l=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Yl[s.type]().fromJSON(s))}return this}},lr=class extends $l{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ga(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Wa(this.currentPoint.clone(),new se(e,t),new se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Va(this.currentPoint.clone(),new se(e,t),new se(n,s),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new or(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Zl=class i extends gt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=wt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,d=new se,f=new C,g=new C,x=new C,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=t;y++){let _=n+y*h*s,b=Math.sin(_),R=Math.cos(_);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*b,u.y=e[S].y,u.z=e[S].x*R,a.push(u.x,u.y,u.z),d.x=y/t,d.y=S/(e.length-1),o.push(d.x,d.y);let A=l[3*S+0]*b,U=l[3*S+1],M=l[3*S+0]*R;c.push(A,U,M)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){let b=_+y*e.length,R=b,S=b+e.length,A=b+e.length+1,U=b+1;r.push(R,S,U),r.push(A,U,S)}this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("uv",new Ke(o,2)),this.setAttribute("normal",new Ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},cr=class i extends Zl{constructor(e=1,t=1,n=4,s=8){let r=new lr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}};var An=class i extends gt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(f,2));function y(){let b=new C,R=new C,S=0,A=(t-e)/n;for(let U=0;U<=r;U++){let M=[],E=U/r,N=E*(t-e)+e;for(let X=0;X<=s;X++){let W=X/s,L=W*l+o,O=Math.sin(L),k=Math.cos(L);R.x=N*O,R.y=-E*n+m,R.z=N*k,u.push(R.x,R.y,R.z),b.set(O,A,k).normalize(),d.push(b.x,b.y,b.z),f.push(W,1-E),M.push(g++)}x.push(M)}for(let U=0;U<s;U++)for(let M=0;M<r;M++){let E=x[M][U],N=x[M+1][U],X=x[M+1][U+1],W=x[M][U+1];h.push(E,N,W),h.push(N,X,W),S+=6}c.addGroup(p,S,0),p+=S}function _(b){let R=g,S=new se,A=new C,U=0,M=b===!0?e:t,E=b===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let N=g;for(let X=0;X<=s;X++){let L=X/s*l+o,O=Math.cos(L),k=Math.sin(L);A.x=M*k,A.y=m*E,A.z=M*O,u.push(A.x,A.y,A.z),d.push(0,E,0),S.x=O*.5+.5,S.y=k*.5*E+.5,f.push(S.x,S.y),g++}for(let X=0;X<s;X++){let W=R+X,L=N+X;b===!0?h.push(L,L+1,W):h.push(L+1,L,W),U+=3}c.addGroup(p,U,b===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Jl=class i extends gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let _=new C,b=new C,R=new C;for(let S=0;S<t.length;S+=3)f(t[S+0],_),f(t[S+1],b),f(t[S+2],R),l(_,b,R,y)}function l(y,_,b,R){let S=R+1,A=[];for(let U=0;U<=S;U++){A[U]=[];let M=y.clone().lerp(b,U/S),E=_.clone().lerp(b,U/S),N=S-U;for(let X=0;X<=N;X++)X===0&&U===S?A[U][X]=M:A[U][X]=M.clone().lerp(E,X/N)}for(let U=0;U<S;U++)for(let M=0;M<2*(S-U)-1;M++){let E=Math.floor(M/2);M%2===0?(d(A[U][E+1]),d(A[U+1][E]),d(A[U][E])):(d(A[U][E+1]),d(A[U+1][E+1]),d(A[U+1][E]))}}function c(y){let _=new C;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(y),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function h(){let y=new C;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let b=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(b,1-R)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let _=a[y+0],b=a[y+2],R=a[y+4],S=Math.max(_,b,R),A=Math.min(_,b,R);S>.9&&A<.1&&(_<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){let b=y*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function g(){let y=new C,_=new C,b=new C,R=new C,S=new se,A=new se,U=new se;for(let M=0,E=0;M<r.length;M+=9,E+=6){y.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),S.set(a[E+0],a[E+1]),A.set(a[E+2],a[E+3]),U.set(a[E+4],a[E+5]),R.copy(y).add(_).add(b).divideScalar(3);let N=m(R);x(S,E+0,y,N),x(A,E+2,_,N),x(U,E+4,b,N)}}function x(y,_,b,R){R<0&&y.x===1&&(a[_]=y.x-1),b.x===0&&b.z===0&&(a[_]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var hr=class extends lr{constructor(e){super(e),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new lr().fromJSON(s))}return this}},Tx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ad(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=Lx(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return ur(r,a,t,o,l,f,0),a}};function ad(i,e,t,n,s){let r,a;if(s===Vx(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Iu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Iu(r,i[r],i[r+1],a);return a&&no(a,a.next)&&(fr(a),a=a.next),a}function Fi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(no(t,t.next)||mt(t.prev,t,t.next)===0)){if(fr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ur(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Ox(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Rx(i,n,s,r):Ax(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),fr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Cx(Fi(i),e,t),ur(i,e,t,n,s,r,2)):a===2&&Px(i,e,t,n,s,r):ur(Fi(i),e,t,n,s,r,1);break}}}function Ax(i){let e=i.prev,t=i,n=i.next;if(mt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&gs(s,o,r,l,a,c,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(mt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Kl(f,g,e,t,n),y=Kl(x,m,e,t,n),_=i.prevZ,b=i.nextZ;for(;_&&_.z>=p&&b&&b.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&gs(o,h,l,u,c,d,_.x,_.y)&&mt(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&gs(o,h,l,u,c,d,b.x,b.y)&&mt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&gs(o,h,l,u,c,d,_.x,_.y)&&mt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&gs(o,h,l,u,c,d,b.x,b.y)&&mt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Cx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!no(s,r)&&od(s,n,n.next,r)&&dr(s,r)&&dr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),fr(n),fr(n.next),n=i=r),n=n.next}while(n!==i);return Fi(n)}function Px(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&kx(a,o)){let l=ld(a,o);a=Fi(a,a.next),l=Fi(l,l.next),ur(a,e,t,n,s,r,0),ur(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Lx(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=ad(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Bx(c));for(s.sort(Ix),r=0;r<s.length;r++)t=Dx(s[r],t);return t}function Ix(i,e){return i.x-e.x}function Dx(i,e){let t=Ux(i,e);if(!t)return e;let n=ld(t,i);return Fi(n,n.next),Fi(t,t.next)}function Ux(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&gs(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),dr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Nx(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Nx(i,e){return mt(i.prev,i,e.prev)<0&&mt(e.next,i,i.next)<0}function Ox(i,e,t,n){let s=i;do s.z===0&&(s.z=Kl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fx(s)}function Fx(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Kl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Bx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function gs(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function kx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!zx(i,e)&&(dr(i,e)&&dr(e,i)&&Hx(i,e)&&(mt(i.prev,i,e.prev)||mt(i,e.prev,e))||no(i,e)&&mt(i.prev,i,i.next)>0&&mt(e.prev,e,e.next)>0)}function mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function no(i,e){return i.x===e.x&&i.y===e.y}function od(i,e,t,n){let s=_a(mt(i,e,t)),r=_a(mt(i,e,n)),a=_a(mt(t,n,i)),o=_a(mt(t,n,e));return!!(s!==r&&a!==o||s===0&&ga(i,t,e)||r===0&&ga(i,n,e)||a===0&&ga(t,i,n)||o===0&&ga(t,e,n))}function ga(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _a(i){return i>0?1:i<0?-1:0}function zx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&od(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function dr(i,e){return mt(i.prev,i,i.next)<0?mt(i,e,i.next)>=0&&mt(i,i.prev,e)>=0:mt(i,e,i.prev)<0||mt(i,i.next,e)<0}function Hx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ld(i,e){let t=new jl(i.i,i.x,i.y),n=new jl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Iu(i,e,t,n){let s=new jl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jl(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Vx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Ks=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Du(e),Uu(n,e);let a=e.length;t.forEach(Du);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Uu(n,t[l]);let o=Tx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Du(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Uu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var qa=class i extends gt{constructor(e=new hr([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Gx,_,b=!1,R,S,A,U;p&&(_=p.getSpacedPoints(h),b=!0,d=!1,R=p.computeFrenetFrames(h,!1),S=new C,A=new C,U=new C),d||(m=0,f=0,g=0,x=0);let M=o.extractPoints(c),E=M.shape,N=M.holes;if(!Ks.isClockWise(E)){E=E.reverse();for(let I=0,ce=N.length;I<ce;I++){let $=N[I];Ks.isClockWise($)&&(N[I]=$.reverse())}}let W=Ks.triangulateShape(E,N),L=E;for(let I=0,ce=N.length;I<ce;I++){let $=N[I];E=E.concat($)}function O(I,ce,$){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(ce,$)}let k=E.length,K=W.length;function J(I,ce,$){let oe,Z,Ae,xe=I.x-ce.x,w=I.y-ce.y,v=$.x-I.x,B=$.y-I.y,ae=xe*xe+w*w,Q=xe*B-w*v;if(Math.abs(Q)>Number.EPSILON){let j=Math.sqrt(ae),Ee=Math.sqrt(v*v+B*B),me=ce.x-w/j,ve=ce.y+xe/j,Le=$.x-B/Ee,ze=$.y+v/Ee,ee=((Le-me)*B-(ze-ve)*v)/(xe*B-w*v);oe=me+xe*ee-I.x,Z=ve+w*ee-I.y;let qe=oe*oe+Z*Z;if(qe<=2)return new se(oe,Z);Ae=Math.sqrt(qe/2)}else{let j=!1;xe>Number.EPSILON?v>Number.EPSILON&&(j=!0):xe<-Number.EPSILON?v<-Number.EPSILON&&(j=!0):Math.sign(w)===Math.sign(B)&&(j=!0),j?(oe=-w,Z=xe,Ae=Math.sqrt(ae)):(oe=xe,Z=w,Ae=Math.sqrt(ae/2))}return new se(oe/Ae,Z/Ae)}let Y=[];for(let I=0,ce=L.length,$=ce-1,oe=I+1;I<ce;I++,$++,oe++)$===ce&&($=0),oe===ce&&(oe=0),Y[I]=J(L[I],L[$],L[oe]);let ne=[],re,ge=Y.concat();for(let I=0,ce=N.length;I<ce;I++){let $=N[I];re=[];for(let oe=0,Z=$.length,Ae=Z-1,xe=oe+1;oe<Z;oe++,Ae++,xe++)Ae===Z&&(Ae=0),xe===Z&&(xe=0),re[oe]=J($[oe],$[Ae],$[xe]);ne.push(re),ge=ge.concat(re)}for(let I=0;I<m;I++){let ce=I/m,$=f*Math.cos(ce*Math.PI/2),oe=g*Math.sin(ce*Math.PI/2)+x;for(let Z=0,Ae=L.length;Z<Ae;Z++){let xe=O(L[Z],Y[Z],oe);Se(xe.x,xe.y,-$)}for(let Z=0,Ae=N.length;Z<Ae;Z++){let xe=N[Z];re=ne[Z];for(let w=0,v=xe.length;w<v;w++){let B=O(xe[w],re[w],oe);Se(B.x,B.y,-$)}}}let q=g+x;for(let I=0;I<k;I++){let ce=d?O(E[I],ge[I],q):E[I];b?(A.copy(R.normals[0]).multiplyScalar(ce.x),S.copy(R.binormals[0]).multiplyScalar(ce.y),U.copy(_[0]).add(A).add(S),Se(U.x,U.y,U.z)):Se(ce.x,ce.y,0)}for(let I=1;I<=h;I++)for(let ce=0;ce<k;ce++){let $=d?O(E[ce],ge[ce],q):E[ce];b?(A.copy(R.normals[I]).multiplyScalar($.x),S.copy(R.binormals[I]).multiplyScalar($.y),U.copy(_[I]).add(A).add(S),Se(U.x,U.y,U.z)):Se($.x,$.y,u/h*I)}for(let I=m-1;I>=0;I--){let ce=I/m,$=f*Math.cos(ce*Math.PI/2),oe=g*Math.sin(ce*Math.PI/2)+x;for(let Z=0,Ae=L.length;Z<Ae;Z++){let xe=O(L[Z],Y[Z],oe);Se(xe.x,xe.y,u+$)}for(let Z=0,Ae=N.length;Z<Ae;Z++){let xe=N[Z];re=ne[Z];for(let w=0,v=xe.length;w<v;w++){let B=O(xe[w],re[w],oe);b?Se(B.x,B.y+_[h-1].y,_[h-1].x+$):Se(B.x,B.y,u+$)}}}ie(),_e();function ie(){let I=s.length/3;if(d){let ce=0,$=k*ce;for(let oe=0;oe<K;oe++){let Z=W[oe];De(Z[2]+$,Z[1]+$,Z[0]+$)}ce=h+m*2,$=k*ce;for(let oe=0;oe<K;oe++){let Z=W[oe];De(Z[0]+$,Z[1]+$,Z[2]+$)}}else{for(let ce=0;ce<K;ce++){let $=W[ce];De($[2],$[1],$[0])}for(let ce=0;ce<K;ce++){let $=W[ce];De($[0]+k*h,$[1]+k*h,$[2]+k*h)}}n.addGroup(I,s.length/3-I,0)}function _e(){let I=s.length/3,ce=0;Te(L,ce),ce+=L.length;for(let $=0,oe=N.length;$<oe;$++){let Z=N[$];Te(Z,ce),ce+=Z.length}n.addGroup(I,s.length/3-I,1)}function Te(I,ce){let $=I.length;for(;--$>=0;){let oe=$,Z=$-1;Z<0&&(Z=I.length-1);for(let Ae=0,xe=h+m*2;Ae<xe;Ae++){let w=k*Ae,v=k*(Ae+1),B=ce+oe+w,ae=ce+Z+w,Q=ce+Z+v,j=ce+oe+v;Oe(B,ae,Q,j)}}}function Se(I,ce,$){l.push(I),l.push(ce),l.push($)}function De(I,ce,$){we(I),we(ce),we($);let oe=s.length/3,Z=y.generateTopUV(n,s,oe-3,oe-2,oe-1);Fe(Z[0]),Fe(Z[1]),Fe(Z[2])}function Oe(I,ce,$,oe){we(I),we(ce),we(oe),we(ce),we($),we(oe);let Z=s.length/3,Ae=y.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);Fe(Ae[0]),Fe(Ae[1]),Fe(Ae[3]),Fe(Ae[1]),Fe(Ae[2]),Fe(Ae[3])}function we(I){s.push(l[I*3+0]),s.push(l[I*3+1]),s.push(l[I*3+2])}function Fe(I){r.push(I.x),r.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Wx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Yl[s.type]().fromJSON(s)),new i(n,e.options)}},Gx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new se(r,a),new se(o,l),new se(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-u),new se(d,1-g),new se(x,1-p)]:[new se(o,1-l),new se(h,1-u),new se(f,1-g),new se(m,1-p)]}};function Wx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var pr=class i extends Jl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var mr=class i extends gt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new C,g=new se;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,_=y,b=y+n+1,R=y+n+2,S=y+1;o.push(_,b,S),o.push(b,R,S)}}this.setIndex(o),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var gr=class i extends gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,b=0;p===0&&a===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){let S=R/t;u.x=-e*Math.cos(s+S*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+S*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(S+b,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let _=h[p][y+1],b=h[p][y],R=h[p+1][y],S=h[p+1][y+1];(p!==0||a>0)&&f.push(_,b,S),(p!==n-1||l<Math.PI)&&f.push(b,R,S)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(x,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xt=class extends jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zu,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var _r=class extends Ha{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function xa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Xx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var bs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ql=class extends bs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uh,endingEnd:Uh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nh:r=e,o=2*t-n;break;case Oh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nh:a=e,l=2*n-t;break;case Oh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+y*a[c+R]+_*a[l+R]+b*a[u+R];return r}},ec=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},tc=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Rn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xa(t,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xa(e.times,Array),values:xa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ql(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case va:t=this.InterpolantFactoryMethodDiscrete;break;case Ma:t=this.InterpolantFactoryMethodLinear;break;case Go:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return va;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Xx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Go,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Ma;var Bi=class extends Rn{};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=va;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var nc=class extends Rn{};nc.prototype.ValueTypeName="color";var ic=class extends Rn{};ic.prototype.ValueTypeName="number";var sc=class extends bs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ht.slerpFlat(r,0,a,c-o,a,c,l);return r}},xr=class extends Rn{InterpolantFactoryMethodLinear(e){return new sc(this.times,this.values,this.getValueSize(),e)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.DefaultInterpolation=Ma;xr.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Rn{};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=va;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends Rn{};rc.prototype.ValueTypeName="vector";var ac=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},qx=new ac,oc=class{constructor(e){this.manager=e!==void 0?e:qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};oc.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ya=class extends yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},gl=new rt,Nu=new C,Ou=new C,$a=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ou),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Fu=new rt,Ws=new C,_l=new C,lc=class extends $a{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ws),_l.copy(n.position),_l.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_l),n.updateMatrixWorld(),s.makeTranslation(-Ws.x,-Ws.y,-Ws.z),Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu)}},Za=class extends yr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},cc=class extends $a{constructor(){super(new Oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ja=class extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new cc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var yc="\\[\\]\\.:\\/",Yx=new RegExp("["+yc+"]","g"),vc="[^"+yc+"]",$x="[^"+yc.replace("\\.","")+"]",Zx=/((?:WC+[\/:])*)/.source.replace("WC",vc),Jx=/(WCOD+)?/.source.replace("WCOD",$x),Kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),Qx=new RegExp("^"+Zx+Jx+Kx+jx+"$"),ey=["material","materials","bones","map"],hc=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(e){let t=Qx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ey.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=hc;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iv=new Float32Array(1);var Ka=class{constructor(e,t,n=0,s=1/0){this.ray=new _i(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return uc(e,this,n,t),n.sort(Bu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)uc(e[s],this,n,t);return n.sort(Bu),n}};function Bu(i,e){return i.distance-e.distance}function uc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)uc(s[r],e,t,!0)}}var vr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);var cd={type:"change"},Mc={type:"start"},hd={type:"end"},io=new _i,ud=new bn,ny=Math.cos(70*Mr.DEG2RAD),so=class extends Nn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",j),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",j),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(cd),n.update(),r=s.NONE},this.update=function(){let P=new C,te=new Ht().setFromUnitVectors(e.up,new C(0,1,0)),fe=te.clone().invert(),le=new C,Re=new Ht,Ye=new C,Je=2*Math.PI;return function(de=null){let D=n.object.position;P.copy(D).sub(n.target),P.applyQuaternion(te),o.setFromVector3(P),n.autoRotate&&r===s.NONE&&N(M(de)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let he=n.minAzimuthAngle,ue=n.maxAzimuthAngle;isFinite(he)&&isFinite(ue)&&(he<-Math.PI?he+=Je:he>Math.PI&&(he-=Je),ue<-Math.PI?ue+=Je:ue>Math.PI&&(ue-=Je),he<=ue?o.theta=Math.max(he,Math.min(ue,o.theta)):o.theta=o.theta>(he+ue)/2?Math.max(he,o.theta):Math.min(ue,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&S||n.object.isOrthographicCamera?o.radius=Y(o.radius):o.radius=Y(o.radius*c),P.setFromSpherical(o),P.applyQuaternion(fe),D.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ie=!1;if(n.zoomToCursor&&S){let Ce=null;if(n.object.isPerspectiveCamera){let je=P.length();Ce=Y(je*c);let tt=je-Ce;n.object.position.addScaledVector(b,tt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let je=new C(R.x,R.y,0);je.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ie=!0;let tt=new C(R.x,R.y,0);tt.unproject(n.object),n.object.position.sub(tt).add(je),n.object.updateMatrixWorld(),Ce=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ce!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ce).add(n.object.position):(io.origin.copy(n.object.position),io.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(io.direction))<ny?e.lookAt(n.target):(ud.setFromNormalAndCoplanarPoint(n.object.up,n.target),io.intersectPlane(ud,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ie=!0);return c=1,S=!1,Ie||le.distanceToSquared(n.object.position)>a||8*(1-Re.dot(n.object.quaternion))>a||Ye.distanceToSquared(n.target)>0?(n.dispatchEvent(cd),le.copy(n.object.position),Re.copy(n.object.quaternion),Ye.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ve),n.domElement.removeEventListener("pointerdown",xe),n.domElement.removeEventListener("pointercancel",v),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",v),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",j),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new vr,l=new vr,c=1,h=new C,u=new se,d=new se,f=new se,g=new se,x=new se,m=new se,p=new se,y=new se,_=new se,b=new C,R=new se,S=!1,A=[],U={};function M(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function E(P){let te=Math.abs(P)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*te)}function N(P){l.theta-=P}function X(P){l.phi-=P}let W=function(){let P=new C;return function(fe,le){P.setFromMatrixColumn(le,0),P.multiplyScalar(-fe),h.add(P)}}(),L=function(){let P=new C;return function(fe,le){n.screenSpacePanning===!0?P.setFromMatrixColumn(le,1):(P.setFromMatrixColumn(le,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(fe),h.add(P)}}(),O=function(){let P=new C;return function(fe,le){let Re=n.domElement;if(n.object.isPerspectiveCamera){let Ye=n.object.position;P.copy(Ye).sub(n.target);let Je=P.length();Je*=Math.tan(n.object.fov/2*Math.PI/180),W(2*fe*Je/Re.clientHeight,n.object.matrix),L(2*le*Je/Re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(fe*(n.object.right-n.object.left)/n.object.zoom/Re.clientWidth,n.object.matrix),L(le*(n.object.top-n.object.bottom)/n.object.zoom/Re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(P,te){if(!n.zoomToCursor)return;S=!0;let fe=n.domElement.getBoundingClientRect(),le=P-fe.left,Re=te-fe.top,Ye=fe.width,Je=fe.height;R.x=le/Ye*2-1,R.y=-(Re/Je)*2+1,b.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function ne(P){u.set(P.clientX,P.clientY)}function re(P){J(P.clientX,P.clientX),p.set(P.clientX,P.clientY)}function ge(P){g.set(P.clientX,P.clientY)}function q(P){d.set(P.clientX,P.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let te=n.domElement;N(2*Math.PI*f.x/te.clientHeight),X(2*Math.PI*f.y/te.clientHeight),u.copy(d),n.update()}function ie(P){y.set(P.clientX,P.clientY),_.subVectors(y,p),_.y>0?k(E(_.y)):_.y<0&&K(E(_.y)),p.copy(y),n.update()}function _e(P){x.set(P.clientX,P.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),O(m.x,m.y),g.copy(x),n.update()}function Te(P){J(P.clientX,P.clientY),P.deltaY<0?K(E(P.deltaY)):P.deltaY>0&&k(E(P.deltaY)),n.update()}function Se(P){let te=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),te=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),te=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),te=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),te=!0;break}te&&(P.preventDefault(),n.update())}function De(P){if(A.length===1)u.set(P.pageX,P.pageY);else{let te=qe(P),fe=.5*(P.pageX+te.x),le=.5*(P.pageY+te.y);u.set(fe,le)}}function Oe(P){if(A.length===1)g.set(P.pageX,P.pageY);else{let te=qe(P),fe=.5*(P.pageX+te.x),le=.5*(P.pageY+te.y);g.set(fe,le)}}function we(P){let te=qe(P),fe=P.pageX-te.x,le=P.pageY-te.y,Re=Math.sqrt(fe*fe+le*le);p.set(0,Re)}function Fe(P){n.enableZoom&&we(P),n.enablePan&&Oe(P)}function I(P){n.enableZoom&&we(P),n.enableRotate&&De(P)}function ce(P){if(A.length==1)d.set(P.pageX,P.pageY);else{let fe=qe(P),le=.5*(P.pageX+fe.x),Re=.5*(P.pageY+fe.y);d.set(le,Re)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let te=n.domElement;N(2*Math.PI*f.x/te.clientHeight),X(2*Math.PI*f.y/te.clientHeight),u.copy(d)}function $(P){if(A.length===1)x.set(P.pageX,P.pageY);else{let te=qe(P),fe=.5*(P.pageX+te.x),le=.5*(P.pageY+te.y);x.set(fe,le)}m.subVectors(x,g).multiplyScalar(n.panSpeed),O(m.x,m.y),g.copy(x)}function oe(P){let te=qe(P),fe=P.pageX-te.x,le=P.pageY-te.y,Re=Math.sqrt(fe*fe+le*le);y.set(0,Re),_.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),k(_.y),p.copy(y);let Ye=(P.pageX+te.x)*.5,Je=(P.pageY+te.y)*.5;J(Ye,Je)}function Z(P){n.enableZoom&&oe(P),n.enablePan&&$(P)}function Ae(P){n.enableZoom&&oe(P),n.enableRotate&&ce(P)}function xe(P){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",w),n.domElement.addEventListener("pointerup",v)),Le(P),P.pointerType==="touch"?Ee(P):B(P))}function w(P){n.enabled!==!1&&(P.pointerType==="touch"?me(P):ae(P))}function v(P){ze(P),A.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",v)),n.dispatchEvent(hd),r=s.NONE}function B(P){let te;switch(P.button){case 0:te=n.mouseButtons.LEFT;break;case 1:te=n.mouseButtons.MIDDLE;break;case 2:te=n.mouseButtons.RIGHT;break;default:te=-1}switch(te){case zi.DOLLY:if(n.enableZoom===!1)return;re(P),r=s.DOLLY;break;case zi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;ge(P),r=s.PAN}else{if(n.enableRotate===!1)return;ne(P),r=s.ROTATE}break;case zi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;ne(P),r=s.ROTATE}else{if(n.enablePan===!1)return;ge(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Mc)}function ae(P){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;q(P);break;case s.DOLLY:if(n.enableZoom===!1)return;ie(P);break;case s.PAN:if(n.enablePan===!1)return;_e(P);break}}function Q(P){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(P.preventDefault(),n.dispatchEvent(Mc),Te(P),n.dispatchEvent(hd))}function j(P){n.enabled===!1||n.enablePan===!1||Se(P)}function Ee(P){switch(ee(P),A.length){case 1:switch(n.touches.ONE){case Hi.ROTATE:if(n.enableRotate===!1)return;De(P),r=s.TOUCH_ROTATE;break;case Hi.PAN:if(n.enablePan===!1)return;Oe(P),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Hi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Fe(P),r=s.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;I(P),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Mc)}function me(P){switch(ee(P),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ce(P),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;$(P),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Z(P),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(P),n.update();break;default:r=s.NONE}}function ve(P){n.enabled!==!1&&P.preventDefault()}function Le(P){A.push(P.pointerId)}function ze(P){delete U[P.pointerId];for(let te=0;te<A.length;te++)if(A[te]==P.pointerId){A.splice(te,1);return}}function ee(P){let te=U[P.pointerId];te===void 0&&(te=new se,U[P.pointerId]=te),te.set(P.pageX,P.pageY)}function qe(P){let te=P.pointerId===A[0]?A[1]:A[0];return U[te]}n.domElement.addEventListener("contextmenu",ve),n.domElement.addEventListener("pointerdown",xe),n.domElement.addEventListener("pointercancel",v),n.domElement.addEventListener("wheel",Q,{passive:!1}),this.update()}};var Sc={ko:{q:["\uB0AE\uC74C","\uBCF4\uD1B5","\uB192\uC74C"],ranks:["\uC778\uD134","\uC0AC\uC6D0","\uB300\uB9AC","\uACFC\uC7A5","\uCC28\uC7A5","\uBD80\uC7A5","\uC0C1\uBB34","\uD1F4\uC0AC\uAC01"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uB2F4\uB2F9","\uD300\uC7A5","\uC2E4\uC7A5","\uBCF8\uBD80\uC7A5"],reject:"\uBC18\uB824",tools:{bomb:["\uC0AC\uC9C1\uC11C \uD3ED\uD0C4","\uC0AC\uC9C1\uC11C","\uB204\uB978 \uACF3\uC5D0 \uC0AC\uC9C1\uC11C\uB97C \uB358\uC838 \uB113\uAC8C \uB0A0\uB9AC\uACE0 \uAD6C\uB369\uC774\uB97C \uD31D\uB2C8\uB2E4"],bat:["\uACB0\uC7AC\uD310 \uD480\uC2A4\uC719","\uACB0\uC7AC\uD310","\uAC70\uB300\uD55C \uACB0\uC7AC\uD310\uC73C\uB85C \uCCD0\uC11C \uB369\uC5B4\uB9AC\uB97C \uBA40\uB9AC \uB0A0\uB9BD\uB2C8\uB2E4. 70 m \uB118\uC73C\uBA74 \uD648\uB7F0"],laser:["\uC5D1\uC140 \uB808\uC774\uC800","\uB808\uC774\uC800","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uBE54\uC774 \uADF8 \uC120\uC744 \uD6D1\uC2B5\uB2C8\uB2E4. \uD1A1 \uB204\uB974\uBA74 \uD55C \uC810\uB9CC"],meteor:["\uC131\uACFC\uAE09 \uC6B4\uC11D","\uC6B4\uC11D","\uD558\uB298\uC5D0\uC11C \uC6B4\uC11D\uC774 \uB5A8\uC5B4\uC838 \uD070 \uAD6C\uB369\uC774\uB97C \uB9CC\uB4ED\uB2C8\uB2E4"],quake:["\uC6D4\uC694\uBCD1 \uC9C0\uC9C4","\uC9C0\uC9C4","\uB204\uB978 \uACF3\uC774 \uC9C4\uC6D0. \uADDC\uBAA8 7.5 \uC774\uC0C1\uC774\uBA74 \uAC74\uBB3C\uC774 \uD1B5\uC9F8\uB85C \uC8FC\uC800\uC549\uC2B5\uB2C8\uB2E4"],nuke:["\uD1F4\uC0AC \uD575\uD3ED\uD0C4","\uD575\uD3ED\uD0C4","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},batSize:"\uACB0\uC7AC\uD310 \uD06C\uAE30",mag:"\uADDC\uBAA8",qk:["\uD754\uB4E4\uB9BC","\uBD80\uBD84 \uBD95\uAD34","\uC804\uBA74 \uBD95\uAD34"],labels:{bomb:["\uC0AC\uC9C1\uC11C \uC81C\uCD9C!","\uC624\uB298\uBD80\uB85C \uADF8\uB9CC\uB461\uB2C8\uB2E4","\uC5F0\uCC28 \uC18C\uC9C4 \uC644\uB8CC"],bat:["\uBC18\uB824!","\uC7AC\uAC80\uD1A0 \uBC14\uB78D\uB2C8\uB2E4","\uACB0\uC7AC \uC644\uB8CC","\uB2E4\uC2DC \uD574 \uC640"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","\uC21C\uD658 \uCC38\uC870!"],meteor:["\uC131\uACFC\uAE09 0\uC6D0","S\uB4F1\uAE09(\uC544\uB2D8)","\uC5F0\uBD09 \uB3D9\uACB0"],quake:["\uC6D4\uC694\uC77C 09:00","\uC8FC\uAC04\uD68C\uC758 \uC2DC\uC791","\uAE34\uAE09 \uBCF4\uACE0"],nuke:["\uD1F4\uC0AC\uD569\uB2C8\uB2E4","\uADF8\uB3D9\uC548 \uAC10\uC0AC\uD588\uC2B5\uB2C8\uB2E4"]},promo:"\uC2B9\uC9C4! {0}",collapse:"{0} \uBD95\uAD34!",collapseSmall:"{0} \uBD95\uAD34",nextBldg:"\uC606 \uAC74\uBB3C \uBD95\uAD34",noName:"{0} \uC774\uB984 \uC5C6\uB294 \uB3D9",core:"\uC9C0\uAD6C \uC911\uC2EC \uB3C4\uB2EC! \uACC4\uC18D \uD30C\uBA74 {0}",coreBonus:"\uC9C0\uAD6C \uC911\uC2EC \uBCF4\uB108\uC2A4",homerun:"\uD648\uB7F0! {0} m",homerunShort:"\uD648\uB7F0 {0}m",quit:"\uD1F4\uC0AC \uC644\uB8CC",magLabel:"\uADDC\uBAA8 {0} \xB7 {1}",count:"{0} / {1}\uB3D9",smash:"{0} \uBD80\uC218\uAE30",card:["\uC810\uC218","\uCD5C\uACE0 \uC9C1\uAE09","\uD68C\uC0AC \uD30C\uAD34\uC728","\uBB34\uB108\uC9C4 \uAC74\uBB3C","\uD310 \uAE4A\uC774"],hud:["\uD68C\uC0AC \uD30C\uAD34\uC728","\uBB34\uB108\uC9C4 \uAC74\uBB3C","\uD310 \uAE4A\uC774"],btn:{label:"\uC774\uB984\uD45C",night:"\uBC24",sound:"\uC18C\uB9AC",soundOff:"\uC18C\uB9AC \uAEBC\uC9D0",reset:"\uCC98\uC74C\uBD80\uD130",rank:"\uB7AD\uD0B9",card:"\uC778\uC99D\uC0F7",hub:"\uB2E4\uB978 \uD68C\uC0AC \uACE0\uB974\uAE30 \u2192",save:"\uC800\uC7A5",close:"\uB2EB\uAE30",submit:"\uB7AD\uD0B9 \uB4F1\uB85D",allRank:"\uD68C\uC0AC\uBCC4 \uC21C\uC704 \u2192"},quality:"\uD654\uC9C8 {0}",qDown:"\uB290\uB824\uC11C \uD654\uC9C8\uC744 '{0}'\uC73C\uB85C \uB0AE\uCDC4\uC5B4\uC694",noGpu:"\uBE0C\uB77C\uC6B0\uC800 \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC774 \uAEBC\uC838 \uC788\uC5B4 \uB290\uB9B4 \uC218 \uC788\uC5B4\uC694 (\uC124\uC815 \u2192 \uC2DC\uC2A4\uD15C \u2192 \uADF8\uB798\uD53D \uAC00\uC18D \uC0AC\uC6A9)",hint:"\uAC74\uBB3C\uC744 \uB20C\uB7EC \uBD80\uC218\uC138\uC694 \xB7 \uC22B\uC790 1~6\uC73C\uB85C \uB3C4\uAD6C \uBCC0\uACBD",start:"\uCD9C\uADFC\uD558\uAE30",how:"\uAC74\uBB3C\uC744 \uB20C\uB7EC \uBD80\uC218\uAE30 \xB7 \uB04C\uC5B4\uC11C \uD68C\uC804 \xB7 \uD720/\uB450 \uC190\uAC00\uB77D \uD655\uB300<br>\uB3C4\uAD6C\uB97C \uBC14\uAFD4 \uAC00\uBA70 \uBD80\uC218\uBA74 \uBC30\uC728\uC774 \uBD99\uACE0 \uC9C1\uAE09\uC774 \uC624\uB985\uB2C8\uB2E4",credit:"\uC9C0\uB3C4 \xA9 OpenStreetMap \uAE30\uC5EC\uC790 (ODbL) \xB7 {0} {1} \uAC74\uBB3C {2}\uB3D9 \xB7 \uBE44\uACF5\uC2DD \uD328\uB7EC\uB514 \uAC8C\uC784",saveHint:"\uC800\uC7A5\uC774 \uC548 \uB418\uBA74 \uC774\uBBF8\uC9C0\uB97C \uAE38\uAC8C \uB204\uB974\uAC70\uB098 \uC624\uB978\uCABD \uD074\uB9AD\uD574\uC11C \uC800\uC7A5\uD558\uC138\uC694",nickPh:"\uB7AD\uD0B9\uC5D0 \uC62C\uB9B4 \uC774\uB984 (12\uC790)",rank:{off:"\uB7AD\uD0B9 \uC11C\uBC84 \uC900\uBE44 \uC911\uC774\uC5D0\uC694.",loading:"\uBD88\uB7EC\uC624\uB294 \uC911\u2026",empty:"\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694. \uCCAB \uBC88\uC9F8\uB85C \uC774\uB984\uC744 \uC62C\uB9AC\uC138\uC694!",fail:"\uB7AD\uD0B9\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694.",anon:"\uC775\uBA85 \uC9C1\uC7A5\uC778",sending:"\uB4F1\uB85D \uC911\u2026",done:"{0} {1}\uC704\uB85C \uB4F1\uB85D\uD588\uC5B4\uC694!",fast:"\uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uB4F1\uB85D\uD574 \uC8FC\uC138\uC694",err:"\uB4F1\uB85D\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694",title:"{0} \uB7AD\uD0B9"},hover:["\uC8FC\uBCC0 \uAC74\uBB3C","{0} m \xB7 \uB0A8\uC740 {1}%"],km:"km",m:"m"},en:{q:["Low","Medium","High"],ranks:["Intern","Associate","Senior","Manager","Sr. Manager","Director","VP","RAGE QUIT"],envelope:"I QUIT",board:["Staff","Lead","Mgr","Dir"],reject:"REJECTED",tools:{bomb:["Resignation Bomb","Resign","Throw your resignation letter: wide blast and a crater"],bat:["Clipboard Swing","Clipboard","Swing a giant approval clipboard. Over 70 m is a home run"],laser:["Excel Laser","Laser","Drag to draw a line and the beam sweeps it. Tap for a single burn"],meteor:["Bonus Meteor","Meteor","Your annual bonus falls from the sky as a meteor"],quake:["Monday Quake","Quake","Tap the epicenter. Magnitude 7.5+ flattens whole buildings"],nuke:["Quit Nuke","Nuke","Wipes out everything within 420 m"]},batSize:"Clipboard size",mag:"Magnitude",qk:["shaking","partial collapse","total collapse"],labels:{bomb:["I QUIT!","Effective immediately","PTO: used up"],bat:["REJECTED!","Please revise","Approved","Per my last email"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","Circular reference!"],meteor:["Bonus: $0","Exceeds expectations (not)","Salary freeze"],quake:["Monday 9:00 AM","All-hands meeting","Quick sync?"],nuke:["I quit.","Thanks for everything"]},promo:"Promoted! {0}",collapse:"{0} collapsed!",collapseSmall:"{0} down",nextBldg:"Neighbor down",noName:"{0} unnamed building",core:"Earth's core reached! Keep digging to {0}",coreBonus:"Core bonus",homerun:"Home run! {0} m",homerunShort:"HR {0}m",quit:"Resignation accepted",magLabel:"M {0} \xB7 {1}",count:"{0} / {1}",smash:"Smash {0}",card:["Score","Top rank","Destroyed","Buildings down","Dig depth"],hud:["Destroyed","Buildings down","Dig depth"],btn:{label:"Labels",night:"Night",sound:"Sound",soundOff:"Muted",reset:"Restart",rank:"Ranking",card:"Screenshot",hub:"Pick another company \u2192",save:"Save",close:"Close",submit:"Submit score",allRank:"Company ranking \u2192"},quality:"Quality {0}",qDown:"Too slow \u2014 quality lowered to '{0}'",noGpu:"Hardware acceleration is off in your browser, so it may be slow",hint:"Click buildings to smash \xB7 keys 1\u20136 switch tools",start:"Clock in",how:"Click to smash \xB7 drag to rotate \xB7 wheel/pinch to zoom<br>Switch tools to build a multiplier and climb the ladder",credit:"Map \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1}, {2} buildings \xB7 unofficial parody game",saveHint:"If saving fails, long-press or right-click the image",nickPh:"Name for the ranking (12 chars)",rank:{off:"Ranking server coming soon.",loading:"Loading\u2026",empty:"No records yet. Be the first!",fail:"Could not load the ranking.",anon:"Anonymous worker",sending:"Submitting\u2026",done:"You are #{1} at {0}!",fast:"Please wait a moment and try again",err:"Could not submit",title:"{0} ranking"},hover:["Nearby building","{0} m \xB7 {1}% left"],km:"km",m:"m"},ja:{q:["\u4F4E","\u4E2D","\u9AD8"],ranks:["\u30A4\u30F3\u30BF\u30FC\u30F3","\u5E73\u793E\u54E1","\u4E3B\u4EFB","\u4FC2\u9577","\u8AB2\u9577","\u90E8\u9577","\u5F79\u54E1","\u9000\u8077\u5C4A"],envelope:"\u9000\u8077\u5C4A",board:["\u62C5\u5F53","\u8AB2\u9577","\u90E8\u9577","\u672C\u90E8\u9577"],reject:"\u5374\u4E0B",tools:{bomb:["\u9000\u8077\u5C4A\u30DC\u30E0","\u9000\u8077\u5C4A","\u9000\u8077\u5C4A\u3092\u6295\u3052\u3064\u3051\u3066\u5E83\u304F\u5439\u304D\u98DB\u3070\u3057\u3001\u7A74\u3092\u3042\u3051\u307E\u3059"],bat:["\u7A1F\u8B70\u66F8\u30D5\u30EB\u30B9\u30A4\u30F3\u30B0","\u7A1F\u8B70\u66F8","\u5DE8\u5927\u306A\u7A1F\u8B70\u30D0\u30A4\u30F3\u30C0\u30FC\u3067\u6253\u3063\u3066\u9060\u304F\u3078\u98DB\u3070\u3057\u307E\u3059\u300270 m\u8D85\u3048\u3067\u30DB\u30FC\u30E0\u30E9\u30F3"],laser:["\u30A8\u30AF\u30BB\u30EB\u30EC\u30FC\u30B6\u30FC","\u30EC\u30FC\u30B6\u30FC","\u30C9\u30E9\u30C3\u30B0\u3067\u7DDA\u3092\u5F15\u304F\u3068\u30D3\u30FC\u30E0\u304C\u306A\u305E\u308A\u307E\u3059\u3002\u30BF\u30C3\u30D7\u3067\u4E00\u70B9"],meteor:["\u30DC\u30FC\u30CA\u30B9\u9695\u77F3","\u9695\u77F3","\u7A7A\u304B\u3089\u30DC\u30FC\u30CA\u30B9\u304C\u9695\u77F3\u306B\u306A\u3063\u3066\u964D\u3063\u3066\u304D\u307E\u3059"],quake:["\u6708\u66DC\u75C5\u5730\u9707","\u5730\u9707","\u30BF\u30C3\u30D7\u3057\u305F\u6240\u304C\u9707\u6E90\u3002M7.5\u4EE5\u4E0A\u3067\u5EFA\u7269\u3054\u3068\u5D29\u308C\u307E\u3059"],nuke:["\u9000\u8077\u6838\u7206\u5F3E","\u6838\u7206\u5F3E","\u534A\u5F84420 m\u3092\u4E38\u3054\u3068\u5439\u304D\u98DB\u3070\u3057\u307E\u3059"]},batSize:"\u30D0\u30A4\u30F3\u30C0\u30FC\u306E\u5927\u304D\u3055",mag:"\u898F\u6A21",qk:["\u63FA\u308C","\u4E00\u90E8\u5D29\u58CA","\u5168\u58CA"],labels:{bomb:["\u9000\u8077\u5C4A\u63D0\u51FA!","\u672C\u65E5\u4ED8\u3067\u8F9E\u3081\u307E\u3059","\u6709\u7D66\u6D88\u5316\u5B8C\u4E86"],bat:["\u5374\u4E0B!","\u518D\u691C\u8A0E\u3057\u3066\u304F\u3060\u3055\u3044","\u627F\u8A8D","\u3084\u308A\u76F4\u3057"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","\u5FAA\u74B0\u53C2\u7167!"],meteor:["\u30DC\u30FC\u30CA\u30B90\u5186","S\u8A55\u4FA1(\u3067\u306F\u306A\u3044)","\u6607\u7D66\u306A\u3057"],quake:["\u6708\u66DC9:00","\u5B9A\u4F8B\u4F1A\u8B70","\u81F3\u6025\u5BFE\u5FDC"],nuke:["\u304A\u4E16\u8A71\u306B\u306A\u308A\u307E\u3057\u305F","\u9000\u8077\u3057\u307E\u3059"]},promo:"\u6607\u9032! {0}",collapse:"{0} \u5D29\u58CA!",collapseSmall:"{0} \u5D29\u58CA",nextBldg:"\u96A3\u306E\u30D3\u30EB\u5D29\u58CA",noName:"{0} \u540D\u524D\u306E\u306A\u3044\u68DF",core:"\u5730\u7403\u306E\u4E2D\u5FC3\u306B\u5230\u9054! \u3055\u3089\u306B\u6398\u308B\u3068{0}",coreBonus:"\u5730\u7403\u306E\u4E2D\u5FC3\u30DC\u30FC\u30CA\u30B9",homerun:"\u30DB\u30FC\u30E0\u30E9\u30F3! {0} m",homerunShort:"HR {0}m",quit:"\u9000\u8077\u5B8C\u4E86",magLabel:"M{0} \xB7 {1}",count:"{0} / {1}\u68DF",smash:"{0}\u3092\u3076\u3063\u58CA\u305B",card:["\u30B9\u30B3\u30A2","\u6700\u9AD8\u5F79\u8077","\u7834\u58CA\u7387","\u5D29\u308C\u305F\u5EFA\u7269","\u6398\u3063\u305F\u6DF1\u3055"],hud:["\u7834\u58CA\u7387","\u5D29\u308C\u305F\u5EFA\u7269","\u6398\u3063\u305F\u6DF1\u3055"],btn:{label:"\u540D\u672D",night:"\u591C",sound:"\u97F3",soundOff:"\u6D88\u97F3",reset:"\u6700\u521D\u304B\u3089",rank:"\u30E9\u30F3\u30AD\u30F3\u30B0",card:"\u30B9\u30AF\u30B7\u30E7",hub:"\u4ED6\u306E\u4F1A\u793E\u3092\u9078\u3076 \u2192",save:"\u4FDD\u5B58",close:"\u9589\u3058\u308B",submit:"\u30E9\u30F3\u30AD\u30F3\u30B0\u767B\u9332",allRank:"\u4F1A\u793E\u5225\u30E9\u30F3\u30AD\u30F3\u30B0 \u2192"},quality:"\u753B\u8CEA {0}",qDown:"\u91CD\u3044\u306E\u3067\u753B\u8CEA\u3092\u300C{0}\u300D\u306B\u4E0B\u3052\u307E\u3057\u305F",noGpu:"\u30D6\u30E9\u30A6\u30B6\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u30AA\u30D5\u306E\u305F\u3081\u91CD\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059",hint:"\u5EFA\u7269\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u58CA\u305D\u3046 \xB7 1\u301C6\u30AD\u30FC\u3067\u9053\u5177\u5207\u66FF",start:"\u51FA\u793E\u3059\u308B",how:"\u30AF\u30EA\u30C3\u30AF\u3067\u7834\u58CA \xB7 \u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2 \xB7 \u30DB\u30A4\u30FC\u30EB/\u30D4\u30F3\u30C1\u3067\u62E1\u5927<br>\u9053\u5177\u3092\u5207\u308A\u66FF\u3048\u308B\u3068\u500D\u7387\u304C\u4E0A\u304C\u308A\u3001\u51FA\u4E16\u3057\u307E\u3059",credit:"\u5730\u56F3 \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1} \u5EFA\u7269{2}\u68DF \xB7 \u975E\u516C\u5F0F\u30D1\u30ED\u30C7\u30A3\u30B2\u30FC\u30E0",saveHint:"\u4FDD\u5B58\u3067\u304D\u306A\u3044\u5834\u5408\u306F\u753B\u50CF\u3092\u9577\u62BC\u3057\u307E\u305F\u306F\u53F3\u30AF\u30EA\u30C3\u30AF",nickPh:"\u30E9\u30F3\u30AD\u30F3\u30B0\u7528\u306E\u540D\u524D(12\u6587\u5B57)",rank:{off:"\u30E9\u30F3\u30AD\u30F3\u30B0\u30B5\u30FC\u30D0\u30FC\u6E96\u5099\u4E2D\u3067\u3059\u3002",loading:"\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026",empty:"\u307E\u3060\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u4E00\u756A\u4E57\u308A\u3057\u3088\u3046!",fail:"\u30E9\u30F3\u30AD\u30F3\u30B0\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002",anon:"\u540D\u7121\u3057\u306E\u793E\u755C",sending:"\u767B\u9332\u4E2D\u2026",done:"{0}\u3067{1}\u4F4D\u306B\u767B\u9332\u3057\u307E\u3057\u305F!",fast:"\u5C11\u3057\u5F85\u3063\u3066\u304B\u3089\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044",err:"\u767B\u9332\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F",title:"{0} \u30E9\u30F3\u30AD\u30F3\u30B0"},hover:["\u5468\u8FBA\u306E\u5EFA\u7269","{0} m \xB7 \u6B8B\u308A{1}%"],km:"km",m:"m"},zh:{q:["\u4F4E","\u4E2D","\u9AD8"],ranks:["\u5B9E\u4E60\u751F","\u804C\u5458","\u4E3B\u7BA1","\u7ECF\u7406","\u9AD8\u7EA7\u7ECF\u7406","\u603B\u76D1","\u526F\u603B\u88C1","\u88F8\u8F9E"],envelope:"\u8F9E\u804C\u4FE1",board:["\u7ECF\u529E","\u7EC4\u957F","\u7ECF\u7406","\u603B\u76D1"],reject:"\u9A73\u56DE",tools:{bomb:["\u8F9E\u804C\u4FE1\u70B8\u5F39","\u8F9E\u804C\u4FE1","\u6254\u51FA\u8F9E\u804C\u4FE1\uFF0C\u70B8\u98DE\u4E00\u5927\u7247\u5E76\u70B8\u51FA\u5751"],bat:["\u5BA1\u6279\u5939\u5168\u529B\u6325\u51FB","\u5BA1\u6279\u5939","\u7528\u5DE8\u5927\u7684\u5BA1\u6279\u5939\u628A\u697C\u5757\u6253\u98DE\u3002\u8D85\u8FC770\u7C73\u7B97\u672C\u5792\u6253"],laser:["Excel\u6FC0\u5149","\u6FC0\u5149","\u62D6\u52A8\u753B\u7EBF\uFF0C\u6FC0\u5149\u6CBF\u7EBF\u626B\u8FC7\u3002\u70B9\u4E00\u4E0B\u53EA\u70E7\u4E00\u70B9"],meteor:["\u5E74\u7EC8\u5956\u9668\u77F3","\u9668\u77F3","\u5E74\u7EC8\u5956\u5316\u4F5C\u9668\u77F3\u4ECE\u5929\u800C\u964D"],quake:["\u5468\u4E00\u7EFC\u5408\u5F81\u5730\u9707","\u5730\u9707","\u70B9\u51FB\u5904\u4E3A\u9707\u4E2D\u30027.5\u7EA7\u4EE5\u4E0A\u6574\u680B\u697C\u4F1A\u584C"],nuke:["\u79BB\u804C\u6838\u5F39","\u6838\u5F39","\u534A\u5F84420\u7C73\u5168\u90E8\u5937\u5E73"]},batSize:"\u5BA1\u6279\u5939\u5927\u5C0F",mag:"\u9707\u7EA7",qk:["\u6447\u6643","\u90E8\u5206\u5012\u584C","\u5168\u90E8\u5012\u584C"],labels:{bomb:["\u8F9E\u804C\u4FE1\u5DF2\u63D0\u4EA4!","\u5373\u65E5\u8D77\u79BB\u804C","\u5E74\u5047\u5DF2\u4F11\u5B8C"],bat:["\u9A73\u56DE!","\u8BF7\u91CD\u65B0\u4FEE\u6539","\u5DF2\u5BA1\u6279","\u518D\u6539\u4E00\u7248"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","\u5FAA\u73AF\u5F15\u7528!"],meteor:["\u5E74\u7EC8\u59560\u5143","\u7EE9\u6548S(\u5E76\u4E0D\u662F)","\u5DE5\u8D44\u51BB\u7ED3"],quake:["\u5468\u4E009:00","\u5468\u4F1A\u5F00\u59CB","\u7D27\u6025\u6C47\u62A5"],nuke:["\u6211\u4E0D\u5E72\u4E86","\u611F\u8C22\u5404\u4F4D\u7167\u987E"]},promo:"\u5347\u804C! {0}",collapse:"{0} \u5012\u584C!",collapseSmall:"{0} \u5012\u584C",nextBldg:"\u9694\u58C1\u697C\u5012\u584C",noName:"{0} \u65E0\u540D\u697C",core:"\u62B5\u8FBE\u5730\u5FC3! \u7EE7\u7EED\u6316\u5C31\u5230{0}",coreBonus:"\u5730\u5FC3\u5956\u52B1",homerun:"\u672C\u5792\u6253! {0} \u7C73",homerunShort:"\u672C\u5792\u6253 {0}\u7C73",quit:"\u79BB\u804C\u6210\u529F",magLabel:"{0}\u7EA7 \xB7 {1}",count:"{0} / {1}\u680B",smash:"\u62C6\u4E86{0}",card:["\u5206\u6570","\u6700\u9AD8\u804C\u4F4D","\u7834\u574F\u7387","\u5012\u584C\u5EFA\u7B51","\u6316\u6398\u6DF1\u5EA6"],hud:["\u7834\u574F\u7387","\u5012\u584C\u5EFA\u7B51","\u6316\u6398\u6DF1\u5EA6"],btn:{label:"\u697C\u540D",night:"\u591C\u665A",sound:"\u58F0\u97F3",soundOff:"\u9759\u97F3",reset:"\u91CD\u6765",rank:"\u6392\u884C\u699C",card:"\u622A\u56FE",hub:"\u9009\u62E9\u5176\u4ED6\u516C\u53F8 \u2192",save:"\u4FDD\u5B58",close:"\u5173\u95ED",submit:"\u63D0\u4EA4\u6210\u7EE9",allRank:"\u516C\u53F8\u6392\u884C \u2192"},quality:"\u753B\u8D28 {0}",qDown:"\u592A\u5361\u4E86\uFF0C\u753B\u8D28\u5DF2\u964D\u4E3A\u201C{0}\u201D",noGpu:"\u6D4F\u89C8\u5668\u786C\u4EF6\u52A0\u901F\u5DF2\u5173\u95ED\uFF0C\u53EF\u80FD\u4F1A\u5361\u987F",hint:"\u70B9\u51FB\u5EFA\u7B51\u5F00\u62C6 \xB7 \u6570\u5B57\u952E1~6\u5207\u6362\u9053\u5177",start:"\u4E0A\u73ED\u6253\u5361",how:"\u70B9\u51FB\u62C6\u697C \xB7 \u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E/\u53CC\u6307\u7F29\u653E<br>\u6362\u7740\u9053\u5177\u62C6\u53EF\u4EE5\u53E0\u500D\u7387\u3001\u5347\u804C",credit:"\u5730\u56FE \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1} \u5171{2}\u680B \xB7 \u975E\u5B98\u65B9\u6076\u641E\u6E38\u620F",saveHint:"\u65E0\u6CD5\u4FDD\u5B58\u65F6\u8BF7\u957F\u6309\u6216\u53F3\u952E\u4FDD\u5B58\u56FE\u7247",nickPh:"\u6392\u884C\u699C\u6635\u79F0(12\u5B57\u4EE5\u5185)",rank:{off:"\u6392\u884C\u699C\u670D\u52A1\u5668\u51C6\u5907\u4E2D\u3002",loading:"\u52A0\u8F7D\u4E2D\u2026",empty:"\u8FD8\u6CA1\u6709\u8BB0\u5F55\uFF0C\u6765\u5F53\u7B2C\u4E00\u540D!",fail:"\u65E0\u6CD5\u52A0\u8F7D\u6392\u884C\u699C\u3002",anon:"\u533F\u540D\u6253\u5DE5\u4EBA",sending:"\u63D0\u4EA4\u4E2D\u2026",done:"\u5DF2\u767B\u4E0A{0}\u7B2C{1}\u540D!",fast:"\u8BF7\u7A0D\u540E\u518D\u63D0\u4EA4",err:"\u63D0\u4EA4\u5931\u8D25",title:"{0} \u6392\u884C\u699C"},hover:["\u5468\u8FB9\u5EFA\u7B51","{0} \u7C73 \xB7 \u5269\u4F59{1}%"],km:"\u516C\u91CC",m:"\u7C73"},vi:{q:["Th\u1EA5p","V\u1EEBa","Cao"],ranks:["Th\u1EF1c t\u1EADp","Nh\xE2n vi\xEAn","Chuy\xEAn vi\xEAn","Tr\u01B0\u1EDFng nh\xF3m","Tr\u01B0\u1EDFng ph\xF2ng","Gi\xE1m \u0111\u1ED1c","Ph\xF3 TG\u0110","NGH\u1EC8 VI\u1EC6C"],envelope:"\u0110\u01A0N NGH\u1EC8",board:["NV","TN","TP","G\u0110"],reject:"T\u1EEA CH\u1ED0I",tools:{bomb:["Bom \u0111\u01A1n ngh\u1EC9 vi\u1EC7c","\u0110\u01A1n ngh\u1EC9","N\xE9m \u0111\u01A1n ngh\u1EC9 vi\u1EC7c: n\u1ED5 r\u1ED9ng v\xE0 t\u1EA1o h\u1ED1"],bat:["C\xFA v\u1EE5t b\xECa tr\xECnh k\xFD","B\xECa k\xFD","V\u1EE5t b\xECa tr\xECnh k\xFD kh\u1ED5ng l\u1ED3 cho bay xa. Tr\xEAn 70 m l\xE0 home run"],laser:["Laser Excel","Laser","K\xE9o \u0111\u1EC3 v\u1EBD \u0111\u01B0\u1EDDng, tia laser qu\xE9t theo. Ch\u1EA1m \u0111\u1EC3 \u0111\u1ED1t m\u1ED9t \u0111i\u1EC3m"],meteor:["Thi\xEAn th\u1EA1ch th\u01B0\u1EDFng T\u1EBFt","Thi\xEAn th\u1EA1ch","Th\u01B0\u1EDFng T\u1EBFt r\u01A1i t\u1EEB tr\u1EDDi xu\u1ED1ng th\xE0nh thi\xEAn th\u1EA1ch"],quake:["\u0110\u1ED9ng \u0111\u1EA5t th\u1EE9 Hai","\u0110\u1ED9ng \u0111\u1EA5t","Ch\u1EA1m v\xE0o t\xE2m ch\u1EA5n. T\u1EEB 7.5 \u0111\u1ED9 c\u1EA3 t\xF2a nh\xE0 s\u1EE5p"],nuke:["Bom h\u1EA1t nh\xE2n ngh\u1EC9 vi\u1EC7c","H\u1EA1t nh\xE2n","X\xF3a s\u1ED5 m\u1ECDi th\u1EE9 trong b\xE1n k\xEDnh 420 m"]},batSize:"C\u1EE1 b\xECa k\xFD",mag:"\u0110\u1ED9 l\u1EDBn",qk:["rung l\u1EAFc","s\u1EADp m\u1ED9t ph\u1EA7n","s\u1EADp to\xE0n b\u1ED9"],labels:{bomb:["Em xin ngh\u1EC9!","Ngh\u1EC9 t\u1EEB h\xF4m nay","H\u1EBFt ph\xE9p n\u0103m"],bat:["T\u1EEA CH\u1ED0I!","L\xE0m l\u1EA1i \u0111i em","\u0110\xE3 duy\u1EC7t","S\u1EEDa b\u1EA3n 17"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","Tham chi\u1EBFu v\xF2ng!"],meteor:["Th\u01B0\u1EDFng T\u1EBFt: 0\u0111","Xu\u1EA5t s\u1EAFc (kh\xF4ng ph\u1EA3i)","\u0110\xF3ng b\u0103ng l\u01B0\u01A1ng"],quake:["Th\u1EE9 Hai 8:00","H\u1ECDp giao ban","B\xE1o c\xE1o g\u1EA5p"],nuke:["Em ngh\u1EC9 \u0111\xE2y","C\u1EA3m \u01A1n m\u1ECDi ng\u01B0\u1EDDi"]},promo:"Th\u0103ng ch\u1EE9c! {0}",collapse:"{0} s\u1EADp!",collapseSmall:"{0} s\u1EADp",nextBldg:"T\xF2a b\xEAn c\u1EA1nh s\u1EADp",noName:"{0} t\xF2a kh\xF4ng t\xEAn",core:"\u0110\u1EBFn t\xE2m Tr\xE1i \u0110\u1EA5t! \u0110\xE0o ti\u1EBFp s\u1EBD t\u1EDBi {0}",coreBonus:"Th\u01B0\u1EDFng t\xE2m Tr\xE1i \u0110\u1EA5t",homerun:"Home run! {0} m",homerunShort:"HR {0}m",quit:"Ngh\u1EC9 vi\u1EC7c th\xE0nh c\xF4ng",magLabel:"{0} \u0111\u1ED9 \xB7 {1}",count:"{0} / {1} t\xF2a",smash:"\u0110\u1EADp {0}",card:["\u0110i\u1EC3m","Ch\u1EE9c cao nh\u1EA5t","T\u1EC9 l\u1EC7 ph\xE1 h\u1EE7y","T\xF2a nh\xE0 s\u1EADp","\u0110\u1ED9 s\xE2u \u0111\xE0o"],hud:["T\u1EC9 l\u1EC7 ph\xE1 h\u1EE7y","T\xF2a nh\xE0 s\u1EADp","\u0110\u1ED9 s\xE2u \u0111\xE0o"],btn:{label:"T\xEAn t\xF2a",night:"\u0110\xEAm",sound:"\xC2m thanh",soundOff:"T\u1EAFt ti\u1EBFng",reset:"Ch\u01A1i l\u1EA1i",rank:"X\u1EBFp h\u1EA1ng",card:"Ch\u1EE5p m\xE0n h\xECnh",hub:"Ch\u1ECDn c\xF4ng ty kh\xE1c \u2192",save:"L\u01B0u",close:"\u0110\xF3ng",submit:"G\u1EEDi \u0111i\u1EC3m",allRank:"X\u1EBFp h\u1EA1ng c\xF4ng ty \u2192"},quality:"\u0110\u1ED3 h\u1ECDa {0}",qDown:"M\xE1y ch\u1EADm \u2014 \u0111\xE3 gi\u1EA3m \u0111\u1ED3 h\u1ECDa xu\u1ED1ng '{0}'",noGpu:"Tr\xECnh duy\u1EC7t \u0111ang t\u1EAFt t\u0103ng t\u1ED1c ph\u1EA7n c\u1EE9ng n\xEAn c\xF3 th\u1EC3 ch\u1EADm",hint:"B\u1EA5m v\xE0o t\xF2a nh\xE0 \u0111\u1EC3 \u0111\u1EADp \xB7 ph\xEDm 1\u20136 \u0111\u1ED5i c\xF4ng c\u1EE5",start:"\u0110i l\xE0m",how:"B\u1EA5m \u0111\u1EC3 \u0111\u1EADp \xB7 k\xE9o \u0111\u1EC3 xoay \xB7 cu\u1ED9n/hai ng\xF3n \u0111\u1EC3 ph\xF3ng to<br>\u0110\u1ED5i c\xF4ng c\u1EE5 li\xEAn t\u1EE5c \u0111\u1EC3 nh\xE2n \u0111i\u1EC3m v\xE0 th\u0103ng ch\u1EE9c",credit:"B\u1EA3n \u0111\u1ED3 \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1}, {2} t\xF2a \xB7 game nh\u1EA1i kh\xF4ng ch\xEDnh th\u1EE9c",saveHint:"N\u1EBFu kh\xF4ng l\u01B0u \u0111\u01B0\u1EE3c, h\xE3y nh\u1EA5n gi\u1EEF ho\u1EB7c chu\u1ED9t ph\u1EA3i v\xE0o \u1EA3nh",nickPh:"T\xEAn tr\xEAn b\u1EA3ng x\u1EBFp h\u1EA1ng (12 k\xFD t\u1EF1)",rank:{off:"M\xE1y ch\u1EE7 x\u1EBFp h\u1EA1ng s\u1EAFp ra m\u1EAFt.",loading:"\u0110ang t\u1EA3i\u2026",empty:"Ch\u01B0a c\xF3 ai. H\xE3y l\xE0 ng\u01B0\u1EDDi \u0111\u1EA7u ti\xEAn!",fail:"Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c b\u1EA3ng x\u1EBFp h\u1EA1ng.",anon:"D\xE2n v\u0103n ph\xF2ng \u1EA9n danh",sending:"\u0110ang g\u1EEDi\u2026",done:"B\u1EA1n h\u1EA1ng {1} t\u1EA1i {0}!",fast:"Vui l\xF2ng \u0111\u1EE3i m\u1ED9t ch\xFAt r\u1ED3i g\u1EEDi l\u1EA1i",err:"Kh\xF4ng g\u1EEDi \u0111\u01B0\u1EE3c",title:"X\u1EBFp h\u1EA1ng {0}"},hover:["T\xF2a nh\xE0 l\xE2n c\u1EADn","{0} m \xB7 c\xF2n {1}%"],km:"km",m:"m"}};function dd(i,e={}){let t=Sc[i]||Sc.ko,n=(r,a)=>a.split(".").reduce((o,l)=>o==null?o:o[l],r);return(r,...a)=>{let o=n(e,r);return o==null&&(o=n(t,r)),o==null&&(o=n(Sc.ko,r)),typeof o=="string"?o.replace(/\{(\d)\}/g,(l,c)=>a[+c]??""):o}}var fd={ko:{hospital:{ranks:["\uC778\uD134","\uB808\uC9C0\uB358\uD2B8 1\uB144\uCC28","\uB808\uC9C0\uB358\uD2B8 4\uB144\uCC28","\uC804\uC784\uC758","\uC870\uAD50\uC218","\uBD80\uAD50\uC218","\uAD50\uC218","\uBCD1\uC6D0\uC7A5"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uC8FC\uCE58\uC758","\uC804\uACF5\uC758","\uAD50\uC218","\uACFC\uC7A5"],reject:"\uBCF4\uB958",tools:{bomb:["\uC804\uACF5\uC758 \uC0AC\uC9C1\uC11C","\uC0AC\uC9C1\uC11C","\uC0AC\uC9C1\uC11C\uB97C \uB358\uC838 \uBCD1\uB3D9\uC744 \uB0A0\uB9BD\uB2C8\uB2E4"],bat:["\uCC28\uD2B8 \uD480\uC2A4\uC719","\uCC28\uD2B8","\uB450\uAEBC\uC6B4 \uC758\uBB34\uAE30\uB85D \uCC28\uD2B8\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4. 70 m \uB118\uC73C\uBA74 \uD648\uB7F0"],laser:["\uC218\uC220 \uB808\uC774\uC800","\uB808\uC774\uC800","\uB04C\uC5B4\uC11C \uC808\uAC1C\uC120\uC744 \uADF8\uC73C\uBA74 \uB808\uC774\uC800\uAC00 \uB530\uB77C \uC790\uB985\uB2C8\uB2E4"],meteor:["\uC9C4\uD1B5\uC81C \uC6B4\uC11D","\uC54C\uC57D","\uD558\uB298\uC5D0\uC11C \uAC70\uB300\uD55C \uC54C\uC57D\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["36\uC2DC\uAC04 \uB2F9\uC9C1 \uC9C0\uC9C4","\uB2F9\uC9C1","\uB204\uB978 \uACF3\uC774 \uC9C4\uC6D0. \uADDC\uBAA8 7.5 \uC774\uC0C1\uC774\uBA74 \uBCD1\uB3D9\uC774 \uD1B5\uC9F8\uB85C \uC8FC\uC800\uC549\uC2B5\uB2C8\uB2E4"],nuke:["\uC9D1\uB2E8 \uC0AC\uC9C1 \uD575\uD3ED\uD0C4","\uC9D1\uB2E8\uC0AC\uC9C1","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uC624\uB298\uBD80\uB85C \uC0AC\uC9C1\uD569\uB2C8\uB2E4","\uC624\uD504 \uBC18\uB0A9 \uAC70\uBD80","\uCF5C \uC548 \uBC1B\uC2B5\uB2C8\uB2E4"],bat:["\uC624\uB354 \uBCC0\uACBD!","\uCC28\uD305 \uB2E4\uC2DC \uD574","\uD68C\uC9C4 \uC9C0\uC5F0"],laser:["\uC808\uAC1C!","\uC9C0\uD608 \uC2E4\uD328","\uBD09\uD569\uC740 \uB0B4\uC77C"],meteor:["\uC218\uC561 \uB9DE\uACE0 \uCD9C\uADFC","\uC9C4\uD1B5\uC81C 2\uC54C","\uCE74\uD398\uC778 IV"],quake:["\uC751\uAE09\uC2E4 \uCF5C","\uCF54\uB4DC \uBE14\uB8E8","\uC0C8\uBCBD 3\uC2DC \uCF5C"],nuke:["\uBCD1\uC6D0 \uB5A0\uB0A9\uB2C8\uB2E4","\uC218\uB828 \uD3EC\uAE30"]},meteor:"pill",beam:["#ffffff","#38bdf8"]},law:{ranks:["\uC778\uD134","\uC5B4\uC3D8 1\uB144\uCC28","\uC5B4\uC3D8 3\uB144\uCC28","\uC2DC\uB2C8\uC5B4 \uC5B4\uC3D8","\uC8FC\uB2C8\uC5B4 \uD30C\uD2B8\uB108","\uD30C\uD2B8\uB108","\uC2DC\uB2C8\uC5B4 \uD30C\uD2B8\uB108","\uD0C8\uCD9C"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uC5B4\uC3D8","\uC2DC\uB2C8\uC5B4","\uD30C\uD2B8\uB108","\uB300\uD45C"],reject:"\uC7AC\uC791\uC131",tools:{bomb:["\uC0AC\uC9C1\uC11C \uD3ED\uD0C4","\uC0AC\uC9C1\uC11C","\uBE4C\uB7EC\uBE14 \uC544\uC6CC\uB97C \uBC84\uB9AC\uACE0 \uC0AC\uC9C1\uC11C\uB97C \uB358\uC9D1\uB2C8\uB2E4"],bat:["\uC900\uBE44\uC11C\uBA74 \uD480\uC2A4\uC719","\uC11C\uBA74","300\uCABD\uC9DC\uB9AC \uC900\uBE44\uC11C\uBA74 \uBB49\uCE58\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uD0C0\uC784\uC2DC\uD2B8 \uB808\uC774\uC800","\uD0C0\uC784\uC2DC\uD2B8","6\uBD84 \uB2E8\uC704\uB85C \uC815\uD655\uD788 \uC798\uB77C \uB0C5\uB2C8\uB2E4"],meteor:["\uC18C\uC1A1\uBE44\uC6A9 \uC6B4\uC11D","\uC18C\uC1A1\uBE44\uC6A9","\uD328\uC18C\uD55C \uCABD \uC18C\uC1A1\uBE44\uC6A9\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD310\uACB0 \uC120\uACE0 \uC9C0\uC9C4","\uC120\uACE0","\uB204\uB978 \uACF3\uC5D0\uC11C \uD310\uACB0\uC774 \uC120\uACE0\uB429\uB2C8\uB2E4"],nuke:["\uC9D1\uB2E8\uC18C\uC1A1 \uD575\uD3ED\uD0C4","\uC9D1\uB2E8\uC18C\uC1A1","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uBE4C\uB7EC\uBE14 0\uC2DC\uAC04","\uD1F4\uC0AC\uD569\uB2C8\uB2E4","\uC8FC\uB9D0 \uBC18\uB0A9 \uB05D"],bat:["\uAC01\uD558!","\uAE30\uAC01!","\uBCF4\uC815\uBA85\uB839"],laser:["0.1\uC2DC\uAC04","0.3\uC2DC\uAC04","6\uBD84 \uCCAD\uAD6C"],meteor:["\uCC29\uC218\uAE08 \uBC18\uD658","\uC131\uACF5\uBCF4\uC218 0\uC6D0","\uD328\uC18C"],quake:["\uC8FC\uBB38: \uC6D0\uACE0 \uD328\uC18C","\uC0C1\uACE0 \uAE30\uAC01","\uBCC0\uB860 \uC7AC\uAC1C"],nuke:["\uB85C\uD38C \uD0C8\uCD9C","\uC778\uD558\uC6B0\uC2A4 \uAC11\uB2C8\uB2E4"]},meteor:"coin",beam:["#ffffff","#facc15"]},accounting:{ranks:["\uC778\uD134","\uC2A4\uD0ED","\uC2DC\uB2C8\uC5B4","\uB9E4\uB2C8\uC800","\uC2DC\uB2C8\uC5B4 \uB9E4\uB2C8\uC800","\uB514\uB809\uD130","\uD30C\uD2B8\uB108","\uC2DC\uC98C \uD0C8\uCD9C"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uC2A4\uD0ED","\uC2DC\uB2C8\uC5B4","\uB9E4\uB2C8\uC800","\uD30C\uD2B8\uB108"],reject:"\uC218\uC815\uC694\uB9DD",tools:{bomb:["\uC2DC\uC98C \uC0AC\uC9C1\uC11C","\uC0AC\uC9C1\uC11C","\uAC10\uC0AC \uC2DC\uC98C \uD55C\uAC00\uC6B4\uB370 \uC0AC\uC9C1\uC11C\uB97C \uB358\uC9D1\uB2C8\uB2E4"],bat:["\uAC10\uC0AC\uC870\uC11C \uD480\uC2A4\uC719","\uC870\uC11C","\uB450\uAEBC\uC6B4 \uAC10\uC0AC\uC870\uC11C\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC5D1\uC140 \uB808\uC774\uC800","\uC5D1\uC140","VLOOKUP\uCC98\uB7FC \uB05D\uAE4C\uC9C0 \uD6D1\uC2B5\uB2C8\uB2E4"],meteor:["\uBD84\uC2DD\uD68C\uACC4 \uC6B4\uC11D","\uBD84\uC2DD","\uC228\uACA8 \uB454 \uBD80\uCC44\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uACB0\uC0B0 \uC9C0\uC9C4","\uACB0\uC0B0","12\uC6D4 \uACB0\uC0B0\uC774 \uB36E\uCE69\uB2C8\uB2E4"],nuke:["\uC758\uACAC\uAC70\uC808 \uD575\uD3ED\uD0C4","\uC758\uACAC\uAC70\uC808","\uBC18\uACBD 420 m\uC5D0 \uC758\uACAC\uAC70\uC808\uC744 \uB0C5\uB2C8\uB2E4"]},labels:{bomb:["\uC2DC\uC98C \uB05D\uB098\uACE0 \uB098\uAC11\uB2C8\uB2E4","\uC8FC 100\uC2DC\uAC04 \uB05D","\uD1F4\uC0AC"],bat:["\uC870\uC11C \uB2E4\uC2DC","\uADFC\uAC70 \uBD99\uC5EC","\uB9AC\uBDF0 \uCF54\uBA58\uD2B8 47\uAC1C"],laser:["#REF!","#N/A","\uCC28\uC774 1\uC6D0","\uC21C\uD658 \uCC38\uC870!"],meteor:["\uD55C\uC815\uC758\uACAC","\uACC4\uC18D\uAE30\uC5C5 \uBD88\uD655\uC2E4","\uC7AC\uBB34\uC81C\uD45C \uC7AC\uC791\uC131"],quake:["12\uC6D4 31\uC77C","\uBD84\uAE30 \uAC80\uD1A0","\uC5F0\uACB0 \uACB0\uC0B0"],nuke:["\uC758\uACAC\uAC70\uC808","\uAC10\uC0AC\uC778 \uC0AC\uC784"]},meteor:"coin",beam:["#ffffff","#21d07a"]},broadcast:{ranks:["\uB9C9\uB0B4 \uC791\uAC00","FD","AD","\uC870\uC5F0\uCD9C","PD","CP","\uAD6D\uC7A5","\uC885\uC601"],envelope:"\uC0AC\uD45C",board:["\uC791\uAC00","AD","PD","CP"],reject:"NG",tools:{bomb:["\uC0AC\uD45C \uD3ED\uD0C4","\uC0AC\uD45C","\uC0DD\uBC29\uC1A1 \uC9C1\uC804 \uC0AC\uD45C\uB97C \uB358\uC9D1\uB2C8\uB2E4"],bat:["\uD050\uC2DC\uD2B8 \uD480\uC2A4\uC719","\uD050\uC2DC\uD2B8","\uB9D0\uC544 \uC954 \uD050\uC2DC\uD2B8\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC870\uBA85 \uB808\uC774\uC800","\uC870\uBA85","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uC870\uBA85\uC774 \uADF8 \uC120\uC744 \uD0DC\uC6C1\uB2C8\uB2E4"],meteor:["\uC2DC\uCCAD\uB960 \uC6B4\uC11D","\uC2DC\uCCAD\uB960","0.1% \uC2DC\uCCAD\uB960\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD3B8\uC131 \uAC1C\uD3B8 \uC9C0\uC9C4","\uAC1C\uD3B8","\uB204\uB978 \uACF3\uC5D0\uC11C \uD3B8\uC131\uC774 \uB4A4\uC9D1\uD799\uB2C8\uB2E4"],nuke:["\uC870\uAE30 \uC885\uC601 \uD575\uD3ED\uD0C4","\uC870\uAE30\uC885\uC601","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uBC29\uC1A1\uC0AC\uACE0!","\uC624\uB298 \uB179\uD654 \uD391\uD06C","\uC0AC\uD45C \uB0C5\uB2C8\uB2E4"],bat:["NG!","\uB2E4\uC2DC \uAC08\uAC8C\uC694","\uCEF7!"],laser:["\uC870\uBA85 OFF","\uC5ED\uAD11!","\uD654\uC774\uD2B8 \uC544\uC6C3"],meteor:["\uC2DC\uCCAD\uB960 0.1%","\uB3D9\uC2DC\uAC04\uB300 \uAF34\uCC0C","\uAD11\uACE0 \uC644\uD310 \uC2E4\uD328"],quake:["\uD3B8\uC131 \uC0AD\uC81C","\uACB0\uBC29","\uAE34\uAE09 \uD3B8\uC131"],nuke:["\uC870\uAE30 \uC885\uC601","\uC2DC\uC98C 2 \uC5C6\uC74C"]},meteor:"tv",beam:["#ffffff","#f472b6"]},telecom:{ranks:["\uC778\uD134","\uB9E4\uB2C8\uC800","\uC120\uC784","\uCC45\uC784","\uD300\uC7A5","\uB2F4\uB2F9","\uBCF8\uBD80\uC7A5","\uD574\uC9C0"],tools:{laser:["5G \uC804\uD30C \uB808\uC774\uC800","5G","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uC804\uD30C\uAC00 \uADF8 \uC120\uC744 \uD0DC\uC6C1\uB2C8\uB2E4"],meteor:["\uC694\uAE08 \uD3ED\uD0C4 \uC6B4\uC11D","\uC694\uAE08\uD3ED\uD0C4","\uB370\uC774\uD130 \uCD08\uACFC \uC694\uAE08\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD1B5\uC2E0 \uC7A5\uC560 \uC9C0\uC9C4","\uC7A5\uC560","\uB204\uB978 \uACF3\uC5D0\uC11C \uC804\uAD6D \uC7A5\uC560\uAC00 \uB0A9\uB2C8\uB2E4"],nuke:["\uC57D\uC815 \uD574\uC9C0 \uD575\uD3ED\uD0C4","\uD574\uC9C0","\uC704\uC57D\uAE08 \uC5C6\uC774 \uBC18\uACBD 420 m \uD574\uC9C0"]},labels:{laser:["\uC548\uD14C\uB098 0\uCE78","LTE \uC804\uD658","\uC2E0\uD638 \uC5C6\uC74C"],meteor:["\uB370\uC774\uD130 \uCD08\uACFC","\uB85C\uBC0D \uD3ED\uD0C4","\uBD80\uAC00\uC11C\uBE44\uC2A4 \uAC00\uC785\uB428"],quake:["\uC11C\uBE44\uC2A4 \uC7A5\uC560","\uBB38\uC790 \uC548 \uAC10","\uBCF5\uAD6C \uC911"],nuke:["\uBC88\uD638\uC774\uB3D9","\uC57D\uC815 \uB05D"]},meteor:"phone",beam:["#ffffff","#a78bfa"]},fashion:{ranks:["\uC778\uD134","MD \uBCF4\uC870","MD","\uB514\uC790\uC774\uB108","\uC218\uC11D \uB514\uC790\uC774\uB108","\uC2E4\uC7A5","\uB514\uB809\uD130","\uBE0C\uB79C\uB4DC \uCCA0\uC218"],tools:{bat:["\uD328\uD134\uC790 \uD480\uC2A4\uC719","\uD328\uD134\uC790","\uAC70\uB300\uD55C \uD328\uD134\uC790\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC7AC\uB2E8 \uB808\uC774\uC800","\uC7AC\uB2E8","\uB04C\uC5B4\uC11C \uC7AC\uB2E8\uC120\uC744 \uADF8\uC73C\uBA74 \uB808\uC774\uC800\uAC00 \uC790\uB985\uB2C8\uB2E4"],meteor:["\uC7AC\uACE0 \uC6B4\uC11D","\uC7AC\uACE0","\uC548 \uD314\uB9B0 \uC2DC\uC98C \uC7AC\uACE0\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uC2DC\uC98C\uC624\uD504 \uC9C0\uC9C4","\uC2DC\uC98C\uC624\uD504","70% \uC138\uC77C\uC774 \uB36E\uCE69\uB2C8\uB2E4"]},labels:{bat:["\uD54F\uC774 \uC548 \uB098\uC640","\uC0D8\uD50C \uB2E4\uC2DC","\uCEE8\uD38C \uBC18\uB824"],laser:["\uC7AC\uB2E8 \uC2E4\uC218","\uC2DC\uC811 0","\uC6D0\uB2E8 \uB85C\uC2A4"],meteor:["\uC7AC\uACE0 3\uB9CC \uC7A5","\uBC18\uD488 \uD3ED\uD0C4","\uC544\uC6B8\uB81B\uD589"],quake:["70% \uC138\uC77C","\uC2DC\uC98C\uC624\uD504","\uADE0\uC77C\uAC00"]},meteor:"rock",beam:["#ffffff","#fb7185"]},fab:{ranks:["\uC778\uD134","\uC0AC\uC6D0","\uC120\uC784","\uCC45\uC784","\uC218\uC11D","\uADF8\uB8F9\uC7A5","\uC0C1\uBB34","\uD1F4\uC0AC"],tools:{laser:["EUV \uB808\uC774\uC800","EUV","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uB178\uAD11\uD569\uB2C8\uB2E4"],meteor:["\uC6E8\uC774\uD37C \uC6B4\uC11D","\uC6E8\uC774\uD37C","300 mm \uC6E8\uC774\uD37C\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD074\uB9B0\uB8F8 \uC9C0\uC9C4","\uD074\uB9B0\uB8F8","\uB204\uB978 \uACF3\uC5D0\uC11C \uC218\uC728\uC774 \uBB34\uB108\uC9D1\uB2C8\uB2E4"],nuke:["\uC218\uC728 0% \uD575\uD3ED\uD0C4","\uC218\uC7280","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{laser:["\uB178\uAD11 \uBD88\uB7C9","\uD328\uD134 \uBD95\uAD34","\uD30C\uD2F0\uD074 \uAC80\uCD9C"],meteor:["\uC218\uC728 30%","\uC6E8\uC774\uD37C \uD3D0\uAE30","\uC7AC\uC791\uC5C5"],quake:["\uB77C\uC778 \uC815\uC9C0","\uD30C\uD2F0\uD074!","\uBC29\uC9C4\uBCF5 \uCC22\uC5B4\uC9D0"],nuke:["\uC218\uC728 0%","\uB77C\uC778 \uC167\uB2E4\uC6B4"]},meteor:"wafer",beam:["#ffffff","#c084fc"]},auto:{ranks:["\uC778\uD134","\uC0AC\uC6D0","\uB300\uB9AC","\uCC45\uC784","\uD300\uC7A5","\uC2E4\uC7A5","\uC0C1\uBB34","\uD1F4\uC0AC"],tools:{meteor:["\uB9AC\uCF5C \uC6B4\uC11D","\uB9AC\uCF5C","\uB9AC\uCF5C \uCC28\uB7C9\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uCDA9\uB3CC \uD14C\uC2A4\uD2B8 \uC9C0\uC9C4","\uCDA9\uB3CC","\uB204\uB978 \uACF3\uC5D0\uC11C \uCDA9\uB3CC \uC2DC\uD5D8\uC744 \uD569\uB2C8\uB2E4"]},labels:{meteor:["\uB9AC\uCF5C 30\uB9CC \uB300","\uBB34\uC0C1\uC218\uB9AC","\uACB0\uD568 \uC778\uC815"],quake:["\uC5D0\uC5B4\uBC31 \uC804\uAC1C","\uCDA9\uB3CC \uB4F1\uAE09 0","\uB77C\uC778 \uC815\uC9C0"]},meteor:"gear",beam:["#ffffff","#fb923c"]},it:{ranks:["\uC778\uD134","\uC8FC\uB2C8\uC5B4","\uBBF8\uB4DC","\uC2DC\uB2C8\uC5B4","\uD14C\uD06C\uB9AC\uB4DC","\uC2A4\uD0DC\uD504","\uD504\uB9B0\uC2DC\uD384","\uD1F4\uC0AC"],tools:{bat:["\uCF54\uB4DC\uB9AC\uBDF0 \uD480\uC2A4\uC719","\uCF54\uB4DC\uB9AC\uBDF0","\uB9AC\uBDF0 \uCF54\uBA58\uD2B8 \uBB36\uC74C\uC73C\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],meteor:["\uC7A5\uC560 \uC6B4\uC11D","\uC7A5\uC560","\uC0C8\uBCBD 3\uC2DC \uC7A5\uC560\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uBC30\uD3EC \uC9C0\uC9C4","\uBC30\uD3EC","\uAE08\uC694\uC77C \uC624\uD6C4 6\uC2DC \uBC30\uD3EC"],nuke:["rm -rf \uD575\uD3ED\uD0C4","rm -rf","\uBC18\uACBD 420 m\uB97C rm -rf"]},labels:{bat:["Request changes","LGTM(\uC544\uB2D8)","nit:"],meteor:["P0 \uC7A5\uC560","\uB864\uBC31!","\uC628\uCF5C \uD638\uCD9C"],quake:["\uAE08\uC694\uC77C \uBC30\uD3EC","\uD56B\uD53D\uC2A4","\uC11C\uBC84 \uB2E4\uC6B4"],nuke:["rm -rf /","git push --force"]},meteor:"rock",beam:["#ffffff","#22d3ee"]},nk:{ranks:["\uB85C\uB3D9\uC790","\uC791\uC5C5\uBC18\uC7A5","\uC9C1\uC7A5\uC7A5","\uC9C0\uBC30\uC778","\uB2F9\uBE44\uC11C","\uBD80\uC0C1","\uC0C1","\uD0C8\uBD81"],envelope:"\uC790\uC544\uBE44\uD310\uC11C",board:["\uC791\uC5C5\uBC18","\uC9C1\uC7A5","\uC9C0\uBC30\uC778","\uB2F9\uC704\uC6D0\uD68C"],reject:"\uBE44\uD310",tools:{bomb:["\uC790\uC544\uBE44\uD310\uC11C \uD3ED\uD0C4","\uC790\uC544\uBE44\uD310\uC11C","\uC790\uC544\uBE44\uD310\uC11C\uB97C \uB358\uC838 \uB113\uAC8C \uB0A0\uB9BD\uB2C8\uB2E4"],bat:["\uACB0\uC758\uBB38 \uD480\uC2A4\uC719","\uACB0\uC758\uBB38","\uB450\uAEBC\uC6B4 \uACB0\uC758\uBB38\uC73C\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC120\uC804 \uB808\uC774\uC800","\uC120\uC804","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uC120\uC804 \uBB38\uAD6C\uAC00 \uD0DC\uC6C1\uB2C8\uB2E4"],meteor:["\uACC4\uD68D \uBBF8\uB2EC \uC6B4\uC11D","\uACC4\uD68D\uBBF8\uB2EC","5\uAC1C\uB144 \uACC4\uD68D \uBBF8\uB2EC\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uCD1D\uD654 \uC9C0\uC9C4","\uCD1D\uD654","\uC0DD\uD65C\uCD1D\uD654\uAC00 \uB36E\uCE69\uB2C8\uB2E4"],nuke:["\uC790\uB825\uAC31\uC0DD \uD575\uD3ED\uD0C4","\uC790\uB825\uAC31\uC0DD","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uC790\uC544\uBE44\uD310!","\uBC18\uC131\uD569\uB2C8\uB2E4","\uC0AC\uC0C1 \uC810\uAC80"],bat:["\uBE44\uD310!","\uACB0\uC758 \uB2E4\uC2DC","\uD601\uBA85\uC801 \uAC01\uC624"],laser:["\uAD6C\uD638 \uB0AD\uB3C5","\uC120\uC804 \uAC15\uD654","200\uC77C \uC804\uD22C"],meteor:["\uACC4\uD68D \uBBF8\uB2EC","\uC815\uC804","\uBC30\uAE09 \uC911\uB2E8"],quake:["\uC0DD\uD65C\uCD1D\uD654","\uC0AC\uC0C1 \uD22C\uC7C1","\uAC80\uC5F4"],nuke:["\uC790\uB825\uAC31\uC0DD","\uD0C8\uCD9C\uD569\uB2C8\uB2E4"]},meteor:"rock",beam:["#ffffff","#ef4444"]}},en:{ai:{ranks:["Intern","MTS","Senior MTS","Staff","Research Lead","Principal","Chief Scientist","AGI ACHIEVED"],tools:{bomb:["Prompt Bomb","Prompt","Drop a jailbreak prompt: wide blast and a crater"],bat:["Eval Swing","Evals","Swing a stack of failed evals. Over 70 m is a home run"],laser:["Token Laser","Tokens","Drag to draw a line; a stream of tokens burns it"],meteor:["GPU Meteor","GPU","A whole H100 rack falls from the sky"],quake:["Scaling-Law Quake","Scaling","Tap the epicenter. 7.5+ flattens whole buildings"],nuke:["Context Window Nuke","Context","1M tokens of context. Wipes out 420 m"]},labels:{bomb:["Ignore previous instructions","As an AI\u2026","Hallucinated!"],bat:["Eval regression","Benchmark contaminated","Vibes only"],laser:["<|endoftext|>","Rate limited","429!"],meteor:["OOM!","CUDA error","Loss = NaN"],quake:["Loss spike","Grad explosion","Retraining\u2026"],nuke:["AGI?","Model deprecated"]},meteor:"gpu",beam:["#ffffff","#c4b5fd"]},"big tech":{ranks:["Intern","L3","L4","L5","L6 Staff","L7 Senior Staff","L8 Principal","LAID OFF"],tools:{bat:["Code Review Swing","CR","Swing a pile of review comments"],meteor:["Outage Meteor","Outage","A Sev-1 incident falls from the sky"],quake:["Reorg Quake","Reorg","Tap the epicenter of the next reorg"],nuke:["Layoff Nuke","Layoff","Wipes out 420 m. Effective immediately"]},labels:{bat:["nit:","Request changes","LGTM (not)"],meteor:["Sev-1!","Rollback!","Paged at 3 AM"],quake:["New VP","Team merged","OKRs reset"],nuke:["Role eliminated","Badge deactivated"]},meteor:"rock",beam:["#ffffff","#38bdf8"]},finance:{ranks:["Intern","Analyst","Associate","VP","Director","MD","Partner","BURNED OUT"],tools:{bat:["Pitch Book Swing","Pitch book","Swing a 200-page pitch book"],laser:["Excel Laser","Excel","Drag to draw a line; F9 recalculates it"],meteor:["Margin Call Meteor","Margin call","A margin call falls from the sky"],quake:["Market Crash Quake","Crash","Tap the epicenter of Black Monday"],nuke:["Bank Run Nuke","Bank run","Wipes out 420 m"]},labels:{meteor:["Margin call!","Limit down","Bonus clawback"],quake:["-22% today","Circuit breaker","VIX 80"],nuke:["Bank run","Chapter 11"]},meteor:"coin",beam:["#ffffff","#21d07a"]},auto:{tools:{meteor:["Recall Meteor","Recall","A recalled car falls from the sky"],quake:["Crash Test Quake","Crash test","Tap to run a crash test"]},labels:{meteor:["Recall 300k units","Airbag defect","Line stopped"]},meteor:"gear",beam:["#ffffff","#fb923c"]},space:{tools:{meteor:["Booster Meteor","Booster","A falling booster that missed the landing"],nuke:["RUD Nuke","RUD","Rapid unscheduled disassembly, 420 m"]},labels:{meteor:["Missed the drone ship","Hard landing"],nuke:["RUD!","Anomaly"]},meteor:"rock",beam:["#ffffff","#f97316"]},media:{tools:{laser:["Spotlight Laser","Spotlight","Drag to draw a line; studio lights burn it"],meteor:["Ratings Meteor","Ratings","Your ratings crash from the sky"],nuke:["Cancellation Nuke","Cancelled","Season cancelled. 420 m gone"]},labels:{meteor:["0.1 rating","Cancelled","Writers strike"]},meteor:"tv",beam:["#ffffff","#f472b6"]},pharma:{tools:{meteor:["Pill Meteor","Pill","A giant pill falls from the sky"],quake:["FDA Quake","FDA","Tap the epicenter of a rejected filing"]},labels:{meteor:["Phase 3 failed","Side effects!"]},meteor:"pill",beam:["#ffffff","#38bdf8"]}}},pd={\uBCD1\uC6D0:"hospital",\uB85C\uD38C:"law","\uD68C\uACC4\xB7\uC138\uBB34":"accounting",\uBC29\uC1A1:"broadcast",\uD1B5\uC2E0:"telecom",\uD328\uC158:"fashion",SK:"fab",\uD604\uB300:"auto",\uC790\uB3D9\uCC28:"auto",IT:"it",\uBD81\uD55C:"nk",AI:"ai","Big Tech":"big tech",Tech:"big tech",Finance:"finance",Auto:"auto",Space:"space",Aero:"space",Media:"media",Pharma:"pharma"};var rn=JSON.parse(document.getElementById("scene-data").textContent),et=JSON.parse(document.getElementById("config-data").textContent),Lr=et.lang||"ko",Pc=et.theme||pd[et.group]||"office",Rr=(fd[Lr]||{})[Pc]||{},ye=dd(Lr,Rr),Ps=(i,e)=>Number(i).toLocaleString(Lr==="zh"?"zh-CN":Lr,e),iy=location.hash.includes("bench"),Zt=matchMedia("(pointer:coarse)").matches||innerWidth<760,ni=document.getElementById("stage"),sy=(()=>{try{let i=document.createElement("canvas").getContext("webgl2")||document.createElement("canvas").getContext("webgl"),e=i&&i.getExtension("WEBGL_debug_renderer_info");return e?i.getParameter(e.UNMASKED_RENDERER_WEBGL):""}catch{return""}})(),Bc=/swiftshader|llvmpipe|softpipe|software|basic render/i.test(sy),ti=[{name:ye("q")[0],shadow:0,px:9e5,dprMax:Zt?1:.8,fxk:.35},{name:ye("q")[1],shadow:2048,px:Zt?16e5:21e5,dprMax:Zt?1.75:1,fxk:Zt?.75:.6},{name:ye("q")[2],shadow:4096,px:Zt?26e5:42e5,dprMax:Zt?2.5:1.5,fxk:1}],Ln=(()=>{try{let i=localStorage.getItem("smash-q");if(i!==null)return+i}catch{}return Bc?0:1})(),St=new ir({canvas:ni,antialias:!Zt&&!Bc&&devicePixelRatio<1.5,powerPreference:"high-performance"});St.setPixelRatio(1);St.setSize(innerWidth,innerHeight);St.shadowMap.enabled=!0;St.shadowMap.type=ja;St.shadowMap.autoUpdate=!1;St.shadowMap.needsUpdate=!0;St.toneMapping=fc;St.toneMappingExposure=1.05;var In=new za,nt=new $t;In.add(nt);var Et=new kt(48,innerWidth/innerHeight,1,6e3),Ad=(()=>{let i=120;for(let e of rn.site)for(let[t,n]of e)i=Math.max(i,Math.hypot(t,n));return Math.min(i,rn.radius)})();{let i=Ad*1.55+160;Et.position.set(-.22*i,.62*i,.95*i)}var Qt=new so(Et,ni);Qt.target.set(0,0,0);Qt.enableDamping=!0;Qt.dampingFactor=.08;Qt.maxPolarAngle=Math.PI*.47;Qt.minDistance=25;Qt.maxDistance=Math.max(1700,rn.radius*2.6);Qt.screenSpacePanning=!1;Qt.update();var uo={top:new Ue("#5d8fd0"),hor:new Ue("#dfe8ef"),fog:new Ue("#d6e0e8")},ry={top:new Ue("#050a18"),hor:new Ue("#1b2540"),fog:new Ue("#141c30")},Wi={uTop:{value:uo.top.clone()},uHor:{value:uo.hor.clone()},uDark:{value:0}},Rd=new ke(new gr(5e3,32,16),new pn({side:zt,depthWrite:!1,fog:!1,uniforms:Wi,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHor; uniform float uDark; varying vec3 vP;
      void main(){ float h = clamp(vP.y,0.,1.); vec3 c = mix(uHor,uTop,pow(h,0.55)); c = mix(c, c*0.25, uDark); gl_FragColor = vec4(c,1.); }`}));In.add(Rd);In.fog=new ka(uo.fog.clone(),Math.max(900,rn.radius*1.3),Math.max(3200,rn.radius*4.2));var Cd=new Ya("#dfe9ff","#7a7466",1.1);In.add(Cd);var vt=new Ja("#fff3e0",2.6);vt.castShadow=ti[Ln].shadow>0;vt.shadow.mapSize.set(ti[Ln].shadow||1024,ti[Ln].shadow||1024);Object.assign(vt.shadow.camera,{left:-480,right:480,top:480,bottom:-480,near:10,far:2e3});vt.shadow.bias=-4e-4;vt.shadow.normalBias=.6;In.add(vt,vt.target);var ay=new C(-.45,.8,.35).normalize(),oy=(()=>{let i=new gt,e=1400,t=new Float32Array(e*3);for(let s=0;s<e;s++){let r=Math.random(),a=Math.random()*.9+.08,o=r*Math.PI*2,l=Math.acos(1-a);t.set([Math.sin(l)*Math.cos(o)*4500,Math.cos(l)*4500,Math.sin(l)*Math.sin(o)*4500],s*3)}i.setAttribute("position",new ht(t,3));let n=new ar(i,new rr({color:"#ffffff",size:2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.9}));return n.visible=!1,In.add(n),n})();function ii(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}var V=(i,e)=>i+Math.random()*(e-i),Er=8,Pd=5,Xi=Pd*2,[ly,cy]=ii(1024,128*Xi),[hy,fo]=ii(1024,128*Xi);fo.fillStyle="#000";fo.fillRect(0,0,1024,128*Xi);var Sr=(i,e,t,n,s=.5)=>{if(Math.random()<s){let r=V(.5,1);fo.fillStyle=Math.random()<.65?`rgba(255,${200+V(0,40)|0},${130+V(0,60)|0},${r})`:`rgba(200,225,255,${r})`,fo.fillRect(i,e,t,n)}};function uy(i,e,t){let n=cy,s=V(-10,10);if(i===0){n.fillStyle="#e4e7ea",n.fillRect(e,t,128,128),n.fillStyle="#c9cdd1",n.fillRect(e,t+96,128,32);let r=n.createLinearGradient(e,t,e+60,t+96);r.addColorStop(0,`rgb(${110+s},${140+s},${168+s})`),r.addColorStop(.55,`rgb(${150+s},${178+s},${200+s})`),r.addColorStop(1,`rgb(${95+s},${122+s},${150+s})`),n.fillStyle=r,n.fillRect(e+6,t+6,116,86),n.fillStyle="#d5d9dd",n.fillRect(e+62,t+6,4,86),Sr(e+6,t+6,116,86,.55)}else if(i===1){n.fillStyle=`rgb(${206+s},${202+s},${194+s})`,n.fillRect(e,t,128,128);for(let r of[14,70])n.fillStyle=`rgb(${70+s},${88+s},${104+s})`,n.fillRect(e+r,t+24,44,58),n.fillStyle="rgba(255,255,255,0.18)",n.fillRect(e+r,t+24,44,10),n.fillStyle="#b9b5ad",n.fillRect(e+r-3,t+82,50,5),Sr(e+r,t+24,44,58,.45)}else if(i===2){n.fillStyle=`rgb(${240+s/2},${238+s/2},${232+s/2})`,n.fillRect(e,t,128,128),n.fillStyle=`rgb(${92+s},${112+s},${130+s})`,n.fillRect(e+10,t+18,108,62),n.fillStyle="#e9e9e4",n.fillRect(e+62,t+18,4,62),Sr(e+10,t+18,108,62,.6),n.fillStyle="#d6d6d0",n.fillRect(e+4,t+80,120,10),n.strokeStyle="#8d949a",n.lineWidth=2,n.beginPath();for(let r=0;r<=12;r++)n.moveTo(e+8+r*9.3,t+66),n.lineTo(e+8+r*9.3,t+80);n.moveTo(e+6,t+66),n.lineTo(e+122,t+66),n.stroke(),Math.random()<.35&&(n.fillStyle="#c3c6c8",n.fillRect(e+92,t+92,22,16))}else if(i===3){n.fillStyle=`rgb(${150+s},${78+s/2},${58+s/2})`,n.fillRect(e,t,128,128),n.strokeStyle="rgba(230,210,190,0.35)",n.lineWidth=1.5;for(let r=0;r<16;r++){n.beginPath(),n.moveTo(e,t+r*8),n.lineTo(e+128,t+r*8),n.stroke();for(let a=0;a<8;a++){let o=e+a*16+r%2*8;n.beginPath(),n.moveTo(o,t+r*8),n.lineTo(o,t+r*8+8),n.stroke()}}n.fillStyle="#efe9df",n.fillRect(e+34,t+22,60,66),n.fillStyle=`rgb(${68+s},${82+s},${96+s})`,n.fillRect(e+40,t+28,48,54),n.fillStyle="#efe9df",n.fillRect(e+62,t+28,4,54),Sr(e+40,t+28,48,54,.5)}else{n.fillStyle=`rgb(${196+s},${204+s},${212+s})`,n.fillRect(e,t,128,128);for(let r=0;r<16;r++)n.fillStyle=r%2?"rgba(0,0,0,0.07)":"rgba(255,255,255,0.12)",n.fillRect(e+r*8,t,4,128);Math.random()<.5&&(n.fillStyle="rgba(70,90,110,0.85)",n.fillRect(e,t+10,128,16),Sr(e,t+10,128,16,.25)),Math.random()<.12&&(n.fillStyle="#7d8790",n.fillRect(e+30,t+60,68,68))}}for(let i=0;i<Pd;i++)for(let e=0;e<2;e++)for(let t=0;t<Er;t++)uy(i,t*128,(Xi-1-(i*2+e))*128);var Eo=new Tn(ly);Eo.colorSpace=dt;var wo=new Tn(hy);wo.colorSpace=dt;for(let i of[Eo,wo])i.wrapS=i.wrapT=sn,i.anisotropy=4;var dy=(()=>{let[i,e]=ii(128,128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.65)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Tn(i)})(),fy=(()=>{let[i,e]=ii(128,128);for(let t=0;t<26;t++){let n=64+V(-26,26),s=64+V(-26,26),r=V(14,34),a=e.createRadialGradient(n,s,0,n,s,r);a.addColorStop(0,"rgba(255,255,255,0.35)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.fillRect(0,0,128,128)}return new Tn(i)})(),To=!1;function Ld(i,e){return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aStyle; varying float vStyle; varying vec2 vBay; varying float vSeed;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vStyle = aStyle; vBay = uv;
${e?"vSeed = float(gl_InstanceID);":"vSeed = 0.0;"}`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vStyle; varying vec2 vBay; varying float vSeed;`).replace("#include <map_fragment>",`
vec2 bCell = floor(vBay); vec2 bF = fract(vBay);
float bH = fract(sin(dot(bCell + vSeed * vec2(1.7, 9.1), vec2(12.9898, 78.233))) * 43758.5453);
vec2 aUv = (vec2(floor(bH * ${Er}.0), floor(vStyle + 0.5) * 2.0 + floor(fract(bH * 7.13) * 2.0)) + clamp(bF, 0.004, 0.996)) / vec2(${Er}.0, ${Xi}.0);
vec2 aDx = dFdx(vBay) / vec2(${Er}.0, ${Xi}.0), aDy = dFdy(vBay) / vec2(${Er}.0, ${Xi}.0);
diffuseColor *= textureGrad(map, aUv, aDx, aDy);`).replace("#include <emissivemap_fragment>","totalEmissiveRadiance *= textureGrad(emissiveMap, aUv, aDx, aDy).rgb;")},i}var wr=Ld(new xt({map:Eo,emissiveMap:wo,emissive:"#ffffff",emissiveIntensity:0,roughness:.42,metalness:.15}),!0),md=new xt({color:"#b3b5b6",roughness:.9}),kc=new It(1,1,1),Id=[wr,wr,md,md,wr,wr];var py=[["#e8eef3","#dfe7ee","#edf1f4","#d6e0e8"],["#ffffff","#f3efe8","#e9edf0","#f6f2ea"],["#ffffff","#f6f1e6","#eef2f5","#fbf7ee"],["#ffffff","#f0e6e0","#e8ddd6"],["#ffffff","#e6eef5","#f0f0e8","#e3ecf2"]];function my(i){let e=i.k||"",t=i.id>>4;return e==="f"?4:e==="b"?3:e==="a"?2:e==="g"?0:e==="c"?1:i.s?Pc==="hospital"||Pc==="nk"||t%4===0?1:0:e==="o"?t%3===0?1:0:i.lv>=10&&i.h<90?t%3===0?1:2:[1,1,3,0,2][t%5]}function gy(i,e){let t=py[e];return i.c?"#"+new Ue("#ffffff").lerp(new Ue(i.c),.6).getHexString():t[(i.id>>3)%t.length]}var Mt=Math.ceil(rn.radius*2.3/100)*100,at=Math.round(Mt/Math.max(4,Mt/480)),Pn=Mt/at,Ir=420,Jt=new Float32Array((at+1)*(at+1)),ws=new Float32Array((at+1)*(at+1)),_n=new gt;{let i=(at+1)*(at+1),e=new Float32Array(i*3),t=new Float32Array(i*3),n=new Float32Array(i*2);for(let a=0;a<=at;a++)for(let o=0;o<=at;o++){let l=a*(at+1)+o;e[l*3]=-Mt/2+o*Pn,e[l*3+2]=-Mt/2+a*Pn,t[l*3+1]=1,n[l*2]=o/at,n[l*2+1]=1-a/at}let s=new Uint32Array(at*at*6),r=0;for(let a=0;a<at;a++)for(let o=0;o<at;o++){let l=a*(at+1)+o,c=l+1,h=l+at+1,u=h+1;s.set([l,h,c,c,h,u],r),r+=6}_n.setAttribute("position",new ht(e,3).setUsage(Vt)),_n.setAttribute("normal",new ht(t,3).setUsage(Vt)),_n.setAttribute("uv",new ht(n,2)),_n.setAttribute("aDepth",new ht(new Float32Array(i),1).setUsage(Vt)),_n.setAttribute("aHeat",new ht(new Float32Array(i),1).setUsage(Vt)),_n.setIndex(new ht(s,1)),_n.boundingSphere=new dn(new C,Mt)}var _y=(()=>{let i=Zt?2048:4096,[e,t]=ii(i,i),n=i/Mt,s=c=>(c+Mt/2)*n;t.fillStyle="#b4b2a6",t.fillRect(0,0,i,i);for(let c=0;c<9e3;c++)t.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},0.035)`,t.fillRect(Math.random()*i,Math.random()*i,V(2,14),V(2,14));let r=c=>{t.beginPath(),c.forEach(([h,u],d)=>d?t.lineTo(s(h),s(u)):t.moveTo(s(h),s(u))),t.closePath()};for(let c of rn.site)r(c),t.fillStyle="#d3cec3",t.fill();let a={green:"#7f9f69",water:"#5b8db0",pitch:"#6c9a55"};for(let c of rn.areas)r(c.p),t.fillStyle=a[c.k]||"#888",t.fill();let o=[...rn.roads].sort((c,h)=>c.w-h.w);t.lineCap="round",t.lineJoin="round";for(let c of o)t.beginPath(),c.p.forEach(([h,u],d)=>d?t.lineTo(s(h),s(u)):t.moveTo(s(h),s(u))),t.strokeStyle=c.w<=3?"#cbc6bb":"#4f535a",t.lineWidth=c.w*n,t.stroke(),c.w>=11&&(t.setLineDash([6*n,6*n]),t.strokeStyle="#e8d27a",t.lineWidth=.4*n,t.stroke(),t.setLineDash([]));let l=new Tn(e);return l.colorSpace=dt,l.anisotropy=8,l})(),Tr={uMaxD:{value:Ir},uQC:{value:new se},uQT:{value:0},uQA:{value:0}},Dd=new xt({map:_y,roughness:.95});Dd.onBeforeCompile=i=>{Object.assign(i.uniforms,Tr),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute float aDepth; attribute float aHeat; varying float vDepth; varying float vHeat;
uniform vec2 uQC; uniform float uQT; uniform float uQA;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vDepth = aDepth; vHeat = aHeat;
float qd = distance(position.xz, uQC);
transformed.y += uQA * sin(qd*0.05 - uQT*10.0) * exp(-qd*0.0018);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
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
totalEmissiveRadiance += vec3(1.0,0.45,0.1) * vHeat * 2.2;`)};var Ao=new ke(new mr(Mt*.705,6e3,64,1),new xt({color:"#a9a79c",roughness:1}));Ao.rotation.x=-Math.PI/2;Ao.position.y=-.05;Ao.receiveShadow=!0;nt.add(Ao);var Ud=new ke(_n,Dd);Ud.receiveShadow=!0;nt.add(Ud);function xn(i,e){return e*(at+1)+i}function si(i,e){let t=(i+Mt/2)/Pn,n=(e+Mt/2)/Pn;if(t<0||n<0||t>=at||n>=at)return 0;let s=t|0,r=n|0,a=t-s,o=n-r,l=Jt[xn(s,r)],c=Jt[xn(s+1,r)],h=Jt[xn(s,r+1)],u=Jt[xn(s+1,r+1)];return(l*(1-a)+c*a)*(1-o)+(h*(1-a)+u*a)*o}var As=0,gd=!1,ao=new Set;function xy(i,e,t,n){i=Math.max(0,i),t=Math.max(0,t),e=Math.min(at,e),n=Math.min(at,n);let s=_n.attributes.position,r=_n.attributes.normal,a=_n.attributes.aDepth;for(let o=t;o<=n;o++)for(let l=i;l<=e;l++){let c=xn(l,o);s.array[c*3+1]=Jt[c],a.array[c]=-Jt[c];let h=Jt[xn(Math.max(0,l-1),o)],u=Jt[xn(Math.min(at,l+1),o)],d=Jt[xn(l,Math.max(0,o-1))],f=Jt[xn(l,Math.min(at,o+1))],g=h-u,x=d-f,m=2*Pn,p=Math.hypot(g,m,x);r.array[c*3]=g/p,r.array[c*3+1]=m/p,r.array[c*3+2]=x/p}for(let o of[s,r,a]){let l=xn(0,t),c=xn(at,n),h=o.itemSize;o.addUpdateRange(l*h,(c-l+1)*h),o.needsUpdate=!0}}function Fr(i,e,t,n,s=0){let r=Math.floor((i-t+Mt/2)/Pn),a=Math.ceil((i+t+Mt/2)/Pn),o=Math.floor((e-t+Mt/2)/Pn),l=Math.ceil((e+t+Mt/2)/Pn);for(let c=Math.max(0,o);c<=Math.min(at,l);c++)for(let h=Math.max(0,r);h<=Math.min(at,a);h++){let u=-Mt/2+h*Pn,d=-Mt/2+c*Pn,f=Math.hypot(u-i,d-e);if(f>t)continue;let g=f/t,x=xn(h,c);Jt[x]=Math.max(-Ir,Jt[x]-n*Math.pow(1-g*g,1.4)),-Jt[x]>As&&(As=-Jt[x]),s&&(ws[x]=Math.min(1,ws[x]+s*(1-g)),ao.add(x))}xy(r,a,o,l),Dr.clear(i,e,t),Br.wake(i,e,t+2,0);for(let c of Co.query(i,e,t+8))c.vox&&(c.dirty=!0);$i.clear(i,e,t),!gd&&As>=Ir-.5&&(gd=!0,Os(ye("core",et.antipode||""),5e3),Ur(2e4,ye("coreBonus")))}function yy(i){if(!ao.size)return;let e=_n.attributes.aHeat,t=1/0,n=-1;for(let s of ao)ws[s]=Math.max(0,ws[s]-i*.14),e.array[s]=ws[s],s<t&&(t=s),s>n&&(n=s),ws[s]===0&&ao.delete(s);n>=0&&(e.addUpdateRange(t,n-t+1),e.needsUpdate=!0)}var Dr=(()=>{let e=Math.ceil(Mt/2),t=new Float32Array(e*e),n=s=>Math.floor((s+Mt/2)/2);return{get(s,r){let a=n(s),o=n(r);return a<0||o<0||a>=e||o>=e?0:t[o*e+a]},raise(s,r,a,o){for(let l=n(r-a);l<=n(r+a);l++)for(let c=n(s-a);c<=n(s+a);c++)c<0||l<0||c>=e||l>=e||t[l*e+c]<o&&(t[l*e+c]=o)},clear(s,r,a){for(let o=n(r-a);o<=n(r+a);o++)for(let l=n(s-a);l<=n(s+a);l++)l<0||o<0||l>=e||o>=e||Math.hypot(-Mt/2+(l+.5)*2-s,-Mt/2+(o+.5)*2-r)<=a&&(t[o*e+l]=0)}}})(),po=(i,e)=>si(i,e)+Dr.get(i,e),qi=new rt,Kt=new C,zn=new Ht,Yi=new C,vy=new Ue,mo=new rt().makeScale(0,0,0),go=class{constructor(e,t){this.cap=e,this.evict=t;let n=kc.clone();this.styA=new Qn(new Float32Array(e),1).setUsage(Vt),n.setAttribute("aStyle",this.styA);let s=new yi(n,Id,e);s.instanceMatrix.setUsage(Vt),s.instanceColor=new Qn(new Float32Array(e*3),3).setUsage(Vt),s.count=0,s.frustumCulled=!1,s.castShadow=!0,s.receiveShadow=!0,this.mesh=s,this.sty=this.styA.array,this.pos=new Float32Array(e*3),this.size=new Float32Array(e*3),this.quat=new Float32Array(e*4),this.col=new Float32Array(e*3),this.alive=new Uint8Array(e),this.owner=new Int32Array(e).fill(-1),this.cell=new Int32Array(e),this.free=[],this.high=0,this.lo=1/0,this.hi=-1,this.ring=0,this.live=0,nt.add(s)}add(e,t,n,s,r,a,o,l,c,h,u=0){let d=this.free.pop();if(d===void 0)if(this.high<this.cap)d=this.high++;else if(this.evict)d=this.ring,this.ring=(this.ring+1)%this.cap,this.alive[d]&&this.remove(d),this.free.pop();else return-1;return this.pos.set([e,t,n],d*3),this.size.set([s,r,a],d*3),this.quat.set([o.x,o.y,o.z,o.w],d*4),this.col.set([l,c,h],d*3),this.alive[d]=1,this.live++,this.mesh.instanceColor.array.set([l,c,h],d*3),this.sty[d]=u,this.write(d),this.mesh.count<this.high&&(this.mesh.count=this.high),d}write(e){Kt.fromArray(this.pos,e*3),zn.fromArray(this.quat,e*4),Yi.fromArray(this.size,e*3),qi.compose(Kt,zn,Yi).toArray(this.mesh.instanceMatrix.array,e*16),this.mark(e)}remove(e){this.alive[e]&&(this.alive[e]=0,this.live--,this.owner[e]=-1,mo.toArray(this.mesh.instanceMatrix.array,e*16),this.free.push(e),this.mark(e))}mark(e){e<this.lo&&(this.lo=e),e>this.hi&&(this.hi=e)}flush(){if(this.hi<0)return;let e=this.mesh.instanceMatrix,t=this.mesh.instanceColor;e.clearUpdateRanges(),e.addUpdateRange(this.lo*16,(this.hi-this.lo+1)*16),e.needsUpdate=!0,t.clearUpdateRanges(),t.addUpdateRange(this.lo*3,(this.hi-this.lo+1)*3),t.needsUpdate=!0,this.styA.clearUpdateRanges(),this.styA.addUpdateRange(this.lo,this.hi-this.lo+1),this.styA.needsUpdate=!0,this.lo=1/0,this.hi=-1}},Qe=new go(Zt?6e4:9e4,!1),an=new go(Zt?18e3:36e3,!0),zc=(()=>{let e=new Map,t=(s,r)=>s*1e5+r,n=[];return{add(s,r,a){let o=t(Math.floor(r/16),Math.floor(a/16)),l=e.get(o);l||e.set(o,l=[]),l.push(s)},collect(s,r,a){n.length=0;for(let o=Math.floor((s-a)/16);o<=Math.floor((s+a)/16);o++)for(let l=Math.floor((r-a)/16);l<=Math.floor((r+a)/16);l++){let c=t(o,l),h=e.get(c);if(!h)continue;let u=[];for(let d of h)an.alive[d]&&Math.floor(an.pos[d*3]/16)===o&&Math.floor(an.pos[d*3+2]/16)===l&&(u.push(d),n.push(d));u.length?e.set(c,[...new Set(u)]):e.delete(c)}return[...new Set(n)]}}})();function Nd(i,e,t){Dr.clear(i,e,t);let n=an,s=zc.collect(i,e,t).filter(r=>n.alive[r]);s.sort((r,a)=>n.pos[r*3+1]-n.pos[a*3+1]);for(let r of s){let a=n.pos[r*3],o=n.pos[r*3+1],l=n.pos[r*3+2],c=(n.size[r*3]+n.size[r*3+1]+n.size[r*3+2])/6,h=po(a,l);o-c*.8>h+1.2&&it.n<it.cap-20?(zn.fromArray(n.quat,r*4),it.spawn(a,o,l,n.size[r*3],n.size[r*3+1],n.size[r*3+2],zn,n.col[r*3],n.col[r*3+1],n.col[r*3+2],0,0,0,.3,0,n.sty[r]),n.remove(r)):Dr.raise(a,l,Math.max(n.size[r*3],n.size[r*3+2])*.35,o+c*.6-si(a,l))}}var Br={wake(i,e,t,n,s=i,r=e){let a=an,o=0;if(!a.live)return 0;let l=zc.collect(i,e,t);for(let c of l){if(!a.alive[c])continue;let h=a.pos[c*3],u=a.pos[c*3+2],d=Math.hypot(h-i,u-e);if(d>t)continue;if(it.n>=it.cap-50)break;zn.fromArray(a.quat,c*4);let f=h-s,g=u-r,x=Math.hypot(f,g)||1,m=n*(1-d/t);it.spawn(h,a.pos[c*3+1]+.3,u,a.size[c*3],a.size[c*3+1],a.size[c*3+2],zn,a.col[c*3],a.col[c*3+1],a.col[c*3+2],f/x*m,m*.8+V(0,2),g/x*m,m*.05,0,a.sty[c]),a.remove(c),o++}return o&&Nd(i,e,t+6),o}},My=new Ht,Sy=new Ht,it=(()=>{let i=Zt?4e3:5e3,e=kc.clone(),t=new Qn(new Float32Array(i),1).setUsage(Vt);e.setAttribute("aStyle",t);let n=t.array,s=new yi(e,Id,i);s.instanceMatrix.setUsage(Vt),s.instanceColor=new Qn(new Float32Array(i*3),3).setUsage(Vt),s.count=0,s.frustumCulled=!1,s.castShadow=!0,s.receiveShadow=!0,nt.add(s);let r=new Float32Array(i*3),a=new Float32Array(i*3),o=new Float32Array(i*4),l=new Float32Array(i*3),c=new Float32Array(i*3),h=new Float32Array(i*3),u=new Float32Array(i),d=new Int32Array(i),f=new Float32Array(i*2),g=new Float32Array(i),x={cap:i,n:0,mesh:s,spawn(m,p,y,_,b,R,S,A,U,M,E,N,X,W=1,L=0,O=0){if(x.n>=i)return-1;let k=x.n++;return r.set([m,p,y],k*3),a.set([E,N,X],k*3),o.set([S.x,S.y,S.z,S.w],k*4),l.set([V(-1,1)*W,V(-1,1)*W,V(-1,1)*W],k*3),c.set([_,b,R],k*3),h.set([A,U,M],k*3),u[k]=0,d[k]=L,f[k*2]=m,f[k*2+1]=y,g[k]=0,s.instanceColor.array.set([A,U,M],k*3),n[k]=O,k},kill(m){let p=--x.n;m!==p&&(r.copyWithin(m*3,p*3,p*3+3),a.copyWithin(m*3,p*3,p*3+3),o.copyWithin(m*4,p*4,p*4+4),l.copyWithin(m*3,p*3,p*3+3),c.copyWithin(m*3,p*3,p*3+3),h.copyWithin(m*3,p*3,p*3+3),u[m]=u[p],d[m]=d[p],n[m]=n[p],f[m*2]=f[p*2],f[m*2+1]=f[p*2+1],g[m]=g[p],s.instanceColor.array.copyWithin(m*3,p*3,p*3+3))},push(m,p,y,_,b){for(let R=0;R<x.n;R++){let S=r[R*3]-m,A=r[R*3+1]-p,U=r[R*3+2]-y,M=Math.hypot(S,A,U);if(M>_||M===0)continue;let E=b*(1-M/_);a[R*3]+=S/M*E,a[R*3+1]+=Math.abs(A/M)*E+E*.4,a[R*3+2]+=U/M*E,u[R]=0}},update(m){let y=My,_=Sy;for(let R=0;R<x.n;R++){let S=R*3;g[R]+=m,a[S+1]-=13*m;let A=Math.hypot(a[S],a[S+1],a[S+2]);if(A>1){let E=Math.max(0,1-.015*m*A*.1);a[S]*=E,a[S+1]*=E,a[S+2]*=E}r[S]+=a[S]*m,r[S+1]+=a[S+1]*m,r[S+2]+=a[S+2]*m,_.fromArray(o,R*4),y.set(l[S]*m*.5,l[S+1]*m*.5,l[S+2]*m*.5,0).multiply(_),_.x+=y.x,_.y+=y.y,_.z+=y.z,_.w+=y.w,_.normalize(),_.toArray(o,R*4),A>22&&g[R]>.08&&Cy(r[S],r[S+1],r[S+2],a[S],a[S+1],a[S+2])&&(a[S]*=.45,a[S+1]*=.45,a[S+2]*=.45);let U=(c[S]+c[S+1]+c[S+2])/6,M=po(r[S],r[S+2]);if(r[S+1]-U*.8<M&&(r[S+1]=M+U*.8,a[S+1]<0&&(a[S+1]*=-.25),a[S]*=.8,a[S+2]*=.8,l[S]*=.75,l[S+1]*=.75,l[S+2]*=.75,A<2.2?u[R]+=m:u[R]=0),r[S+1]<-Ir-50||g[R]>40){x.kill(R),R--;continue}if(u[R]>.35){_.fromArray(o,R*4);let E=an.add(r[S],r[S+1],r[S+2],c[S],c[S+1],c[S+2],_,h[S],h[S+1],h[S+2],n[R]);zc.add(E,r[S],r[S+2]),Dr.raise(r[S],r[S+2],Math.max(c[S],c[S+2])*.35,r[S+1]+U*.6-si(r[S],r[S+2])),d[R]>0&&Fy(d[R],Math.hypot(r[S]-f[R*2],r[S+2]-f[R*2+1]),r[S],r[S+1],r[S+2]),x.kill(R),R--;continue}}let b=s.instanceMatrix.array;for(let R=0;R<x.n;R++)Kt.fromArray(r,R*3),zn.fromArray(o,R*4),Yi.fromArray(c,R*3),qi.compose(Kt,zn,Yi).toArray(b,R*16);s.count=x.n,s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,Math.max(1,x.n)*16),s.instanceMatrix.needsUpdate=!0,s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,Math.max(1,x.n)*3),s.instanceColor.needsUpdate=!0,t.clearUpdateRanges(),t.addUpdateRange(0,Math.max(1,x.n)),t.needsUpdate=!0}};return x})(),$i=(()=>{let i=[],e=(a,o,l)=>{let c=!1;for(let h=0,u=l.length-1;h<l.length;u=h++){let[d,f]=l[h],[g,x]=l[u];f>o!=x>o&&a<(g-d)*(o-f)/(x-f)+d&&(c=!c)}return c};for(let a of rn.areas)if(a.k==="green"){let o=a.p.map(g=>g[0]),l=a.p.map(g=>g[1]),[c,h,u,d]=[Math.min(...o),Math.max(...o),Math.min(...l),Math.max(...l)],f=Math.min(900,(h-c)*(d-u)/140);for(let g=0;g<f;g++){let x=V(c,h),m=V(u,d);e(x,m,a.p)&&i.push([x,m])}}for(let a of rn.roads)if(a.w>=11)for(let o=1;o<a.p.length;o++){let[l,c]=a.p[o-1],[h,u]=a.p[o],d=Math.hypot(h-l,u-c),f=-(u-c)/d,g=(h-l)/d;for(let x=6;x<d;x+=11)for(let m of[-1,1])i.push([l+(h-l)*x/d+f*m*(a.w/2+2.5),c+(u-c)*x/d+g*m*(a.w/2+2.5)])}let t=i.filter(([a,o])=>Math.hypot(a,o)<rn.radius*1.05).slice(0,5e3),n=new yi(new An(.25,.35,3,5).translate(0,1.5,0),new xt({color:"#5b4632"}),t.length),s=new yi(new pr(2.6,0).translate(0,4.6,0),new xt({color:"#ffffff",roughness:.9,flatShading:!0}),t.length);t.forEach(([a,o],l)=>{let c=V(.8,1.35);qi.compose(Kt.set(a,0,o),zn.setFromAxisAngle(Yi.set(0,1,0),V(0,6)),Yi.set(c,c*V(.9,1.3),c)),n.setMatrixAt(l,qi),s.setMatrixAt(l,qi),s.setColorAt(l,vy.setHSL(V(.24,.32),V(.35,.5),V(.28,.4)))});for(let a of[n,s])a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1,nt.add(a);let r=new Uint8Array(t.length).fill(1);return{clear(a,o,l){let c=!1;t.forEach(([h,u],d)=>{!r[d]||Math.hypot(h-a,u-o)>l||(r[d]=0,n.setMatrixAt(d,mo),s.setMatrixAt(d,mo),c=!0,it.n<it.cap-100&&Math.random()<.5&&it.spawn(h,4,u,2.6,2.6,2.6,zn.identity(),.25,.38,.18,V(-12,12),V(8,22),V(-12,12),4))}),c&&(n.instanceMatrix.needsUpdate=!0,s.instanceMatrix.needsUpdate=!0)},sway(a,o){s.position.x=Math.sin(a*20)*o*.3}}})(),yn=[],Ro=new $t;nt.add(Ro);var Od=Ld(new xt({map:Eo,emissiveMap:wo,emissive:"#ffffff",emissiveIntensity:0,roughness:.42,metalness:.15,vertexColors:!0}),!1),by=new xt({roughness:.9,vertexColors:!0}),Cr=new Map;function Ey(i,e,t,n,s,r){let a=s.reduce((m,p)=>m+p[0],0)/s.length,o=s.reduce((m,p)=>m+p[1],0)/s.length,l=`${Math.floor(a/250)},${Math.floor(o/250)}`;Cr.has(l)||Cr.set(l,{wall:{pos:[],nor:[],uv:[],col:[],sty:[],owners:[]},roof:{pos:[],nor:[],uv:[],col:[],sty:[],owners:[]}});let c=Cr.get(l),h=new Ue(e),u=h.clone().multiplyScalar(.78),d=i.attributes.position.array,f=i.attributes.normal.array,g=i.attributes.uv.array,x={key:l,ranges:[]};for(let m of i.groups){let p=m.materialIndex===1?c.wall:c.roof,y=m.materialIndex===1?h:u,_=p.pos.length/3;for(let b=m.start;b<m.start+m.count;b++)p.pos.push(d[b*3],d[b*3+1],d[b*3+2]),p.nor.push(f[b*3],f[b*3+1],f[b*3+2]),p.uv.push(g[b*2],g[b*2+1]),p.col.push(y.r,y.g,y.b),p.sty.push(r);p.owners.push([_,n]),x.ranges.push([m.materialIndex===1?"wall":"roof",_,m.count])}return x}function wy(){for(let[i,e]of Cr)for(let t of["wall","roof"]){let n=e[t];if(!n.pos.length)continue;let s=new gt;s.setAttribute("position",new Ke(n.pos,3).setUsage(Vt)),s.setAttribute("normal",new Ke(n.nor,3)),s.setAttribute("uv",new Ke(n.uv,2)),s.setAttribute("color",new Ke(n.col,3)),s.setAttribute("aStyle",new Ke(n.sty,1)),s.computeBoundingSphere(),s.computeBoundingBox();let r=new ke(s,t==="wall"?Od:by);r.castShadow=!0,r.receiveShadow=!0,r.userData.owners=n.owners,Ro.add(r),e[t+"Mesh"]=r,n.pos=n.nor=n.uv=n.col=n.sty=null}}function Fd(i){let e=Cr.get(i.mesh.key);for(let[t,n,s]of i.mesh.ranges){let r=e[t+"Mesh"];if(!r)continue;let a=r.geometry.attributes.position,o=a.array[n*3],l=a.array[n*3+1],c=a.array[n*3+2];for(let h=n;h<n+s;h++)a.array[h*3]=o,a.array[h*3+1]=l,a.array[h*3+2]=c;a.addUpdateRange(n*3,s*3),a.needsUpdate=!0}i.mesh.hidden=!0}var Bd=new C(0,1,0);function kd(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[a,o]=t[s],[l,c]=t[r];o>e!=c>e&&i<(l-a)*(e-o)/(c-o)+a&&(n=!n)}return n}rn.buildings.forEach((i,e)=>{let t=i.p,n=0,s=0;for(let W=0;W<t.length;W++){let[L,O]=t[W],[k,K]=t[(W+1)%t.length],J=Math.hypot(k-L,K-O);J>n&&(n=J,s=Math.atan2(K-O,k-L))}let r=Math.cos(s),a=Math.sin(s),o=t.map(([W,L])=>[r*W+a*L,-a*W+r*L]),l=o.map(W=>W[0]),c=o.map(W=>W[1]),h=Math.abs(t.reduce((W,L,O)=>{let k=t[(O+1)%t.length];return W+L[0]*k[1]-k[0]*L[1]},0)/2),u=Math.min(i.lv,40),d=Math.max(i.s?4:5,Math.ceil(Math.sqrt(h/700)),Math.ceil(Math.sqrt(h*u/22e3))),f=Math.min(...l),g=Math.min(...c),x=Math.max(1,Math.ceil((Math.max(...l)-f)/d)),m=Math.max(1,Math.ceil((Math.max(...c)-g)/d)),p=[];for(let W=0;W<x;W++)for(let L=0;L<m;L++)kd(f+(W+.5)*d,g+(L+.5)*d,o)&&p.push(W*m+L);p.length||p.push((x/2|0)*m+(m/2|0));let y=u,_=i.h/y,b=my(i),R=gy(i,b),S=new hr(t.map(([W,L])=>new se(W,-L))),A=new qa(S,{depth:i.h,bevelEnabled:!1});A.rotateX(-Math.PI/2);let U=A.attributes.uv,M=A.groups.find(W=>W.materialIndex===1);if(M)for(let W=M.start;W<M.start+M.count;W++){let L=A.index?A.index.getX(W):W;U.setXY(L,U.getX(L)/d,U.getY(L)/_)}let E=Ey(A,R,i.s,e,t,b);A.dispose();let N=t.map(W=>W[0]),X=t.map(W=>W[1]);yn.push({i:e,id:i.id,name:i.n,site:!!i.s,h:i.h,poly:t,mesh:E,color:new Ue(R),style:b,cs:r,sn:a,u0:f,w0:g,cell:d,nx:x,nz:m,ny:y,fh:_,cellsIn:p,vol:p.length*y,bbox:[Math.min(...N),Math.max(...N),Math.min(...X),Math.max(...X)],cx:N.reduce((W,L)=>W+L,0)/N.length,cz:X.reduce((W,L)=>W+L,0)/X.length,vox:null,alive:p.length*y,gone:!1,collapsed:!1,dirty:!1,quat:new Ht().setFromAxisAngle(Bd,-s)})});wy();var zd=new xt({color:"#9aa1a8",roughness:.8,metalness:.2}),_d=(()=>{let i=[];for(let t of yn){if(t.h<18)continue;let n=Math.min(6,1+Math.floor(t.vol/120));for(let s=0;s<n*3&&i.filter(r=>r.b===t).length<n;s++){let r=V(t.bbox[0],t.bbox[1]),a=V(t.bbox[2],t.bbox[3]);kd(r,a,t.poly)&&i.push({b:t,x:r,z:a,sx:V(2.5,6),sy:V(1.5,3.5),sz:V(2.5,6)})}}let e=new yi(kc,zd,Math.max(1,i.length));return i.forEach((t,n)=>{var s;qi.compose(Kt.set(t.x,t.b.h+t.sy/2,t.z),t.b.quat,Yi.set(t.sx,t.sy,t.sz)),e.setMatrixAt(n,qi),((s=t.b).roofIdx||(s.roofIdx=[])).push(n)}),e.count=i.length,e.castShadow=!0,e.receiveShadow=!0,nt.add(e),e})();function Hd(i){if(i.roofIdx){for(let e of i.roofIdx)_d.setMatrixAt(e,mo);_d.instanceMatrix.needsUpdate=!0,i.roofIdx=null}i.sign&&Ay(i)}var Vd=[];function Ty(i){let[e,t]=ii(1024,256);t.fillStyle="#0f172a",t.fillRect(0,0,1024,256),t.fillStyle="#ffffff",t.textAlign="center",t.textBaseline="middle";let n=170;for(t.font=`900 ${n}px ${getComputedStyle(document.body).fontFamily}`;t.measureText(i).width>960&&n>40;)n-=8,t.font=`900 ${n}px ${getComputedStyle(document.body).fontFamily}`;t.fillText(i,512,136);let s=new Tn(e);return s.colorSpace=dt,s.anisotropy=4,s}(()=>{let i=yn.filter(r=>r.site).sort((r,a)=>a.h-r.h),e=et.sign||et.company,t=Ty(e),n=new xt({map:t,emissiveMap:t,emissive:"#ffffff",emissiveIntensity:.35,roughness:.6}),s=new xt({color:"#334155",roughness:.8});for(let r of i.slice(0,i.length>6?2:1)){let a=Math.max(r.nx,r.nz)*r.cell,o=Math.max(24,Math.min(a*.85,80)),l=o/4,c=new $t,h=new ke(new xi(o,l),n);h.position.set(0,l/2+3,.6);let u=new ke(new xi(o,l),n);u.position.set(0,l/2+3,-.6),u.rotation.y=Math.PI;let d=new ke(new It(o+1,l+1,1),s);d.position.y=l/2+3;let f=new ke(new It(o*.9,3,1.2),zd);f.position.y=1.5,c.add(d,h,u,f),c.position.set(r.cx,r.h,r.cz),c.rotation.y=Math.atan2(Et.position.x-r.cx,Et.position.z-r.cz);let g=d;g.castShadow=!0,nt.add(c),r.sign=c,r.signH=l+6,Vd.push({b:r,g:c,mat:n})}})();function Ay(i){let e=i.sign;i.sign=null,nt.remove(e);let t=e.position;for(let n=0;n<4;n++)it.spawn(t.x+V(-8,8),t.y+6,t.z+V(-8,8),V(6,12),V(3,6),.8,e.quaternion,.1,.12,.18,V(-10,10),V(5,15),V(-10,10),2)}var Ry=yn.filter(i=>i.site).reduce((i,e)=>i+e.vol,0),Gd=yn.filter(i=>i.site).length,Co=(()=>{let e=new Map,t=(s,r)=>s*1e5+r;for(let s of yn)for(let r=Math.floor(s.bbox[0]/40);r<=Math.floor(s.bbox[1]/40);r++)for(let a=Math.floor(s.bbox[2]/40);a<=Math.floor(s.bbox[3]/40);a++){let o=t(r,a);e.has(o)||e.set(o,[]),e.get(o).push(s)}let n=[];return{at(s,r){return e.get(t(Math.floor(s/40),Math.floor(r/40)))||n},query(s,r,a){let o=new Set;for(let l=Math.floor((s-a)/40);l<=Math.floor((s+a)/40);l++)for(let c=Math.floor((r-a)/40);c<=Math.floor((r+a)/40);c++)for(let h of e.get(t(l,c))||[])!h.gone&&h.bbox[0]-a<=s&&s<=h.bbox[1]+a&&h.bbox[2]-a<=r&&r<=h.bbox[3]+a&&o.add(h);return o}}})();function Wd(i,e,t,n,s){let r=i.u0+(e+.5)*i.cell,a=i.w0+(n+.5)*i.cell;return s.set(i.cs*r-i.sn*a,(t+.5)*i.fh,i.sn*r+i.cs*a),s}function Hc(i){if(i.vox||i.gone)return i.vox;if(Qe.cap-Qe.live<i.vol)return null;let e=i.nx*i.ny*i.nz,t=new Int32Array(e).fill(-1),n=i.color.r,s=i.color.g,r=i.color.b,a=0;for(let o of i.cellsIn){let l=o/i.nz|0,c=o%i.nz;for(let h=0;h<i.ny;h++){Wd(i,l,h,c,Kt);let u=.9+.1*Math.random(),d=Qe.add(Kt.x,Kt.y,Kt.z,i.cell,i.fh,i.cell,i.quat,n*u,s*u,r*u,i.style);Qe.owner[d]=i.i,Qe.cell[d]=(l*i.ny+h)*i.nz+c,t[(l*i.ny+h)*i.nz+c]=d,a++}}return i.vox=t,i.alive=a,Fd(i),Hd(i),t}var Vc=(i,e,t,n)=>(e*i.ny+t)*i.nz+n,kr=0;function Rs(i,e,t,n=0,s=0,r=0,a=0){let o=i.vox[e];if(o<0)return;let l=Qe,c=l.pos[o*3],h=l.pos[o*3+1],u=l.pos[o*3+2];t==="debris"?it.spawn(c,h,u,l.size[o*3]*.94,l.size[o*3+1]*.94,l.size[o*3+2]*.94,i.quat,l.col[o*3],l.col[o*3+1],l.col[o*3+2],n,s,r,Math.min(3,.4+Math.hypot(n,s,r)*.05),a,i.style):t==="vapor"&&Si.spawn(c,h,u,V(-3,3),V(2,8),V(-3,3),V(5,9),.5,[1,.8,.4],[1,.25,.05]),l.remove(o),i.vox[e]=-1,i.alive--,i.dirty=!0,i.site&&kr++,Yc(10,c,h,u)}function Gc(i,e,t,n,s,r={}){let a=0;for(let o of Co.query(i,t,n))if(Hc(o))for(let l of o.cellsIn){let c=l/o.nz|0,h=l%o.nz;for(let u=0;u<o.ny;u++){let d=Vc(o,c,u,h),f=o.vox[d];if(f<0)continue;let g=Qe.pos[f*3],x=Qe.pos[f*3+1],m=Qe.pos[f*3+2],p=g-i,y=x-e,_=m-t;r.vertical&&(y=0);let b=Math.hypot(p,y,_);if(b>n*(.85+Math.random()*.25))continue;let R=b||1,S=s*(1-b/(n*1.1))+s*.15;if(r.vapor&&b<n*.75){Rs(o,d,"vapor"),a++;continue}if(r.dir){let[A,U,M]=r.dir,E=V(.75,1.25)*s;Rs(o,d,"debris",A*E+V(-8,8),U*E+V(0,12),M*E+V(-8,8),r.tag||0)}else Rs(o,d,"debris",p/R*S+V(-3,3),Math.max(y/R,.15)*S+V(2,8)*(s/30),_/R*S+V(-3,3));a++}}return a}function Cy(i,e,t,n,s,r){for(let a of Co.at(i,t)){if(a.gone||e>a.h||e<0||i<a.bbox[0]||i>a.bbox[1]||t<a.bbox[2]||t>a.bbox[3])continue;let o=a.cs*i+a.sn*t,l=-a.sn*i+a.cs*t,c=Math.floor((o-a.u0)/a.cell),h=Math.floor((l-a.w0)/a.cell),u=Math.floor(e/a.fh);if(c<0||h<0||c>=a.nx||h>=a.nz||u<0||u>=a.ny||!a.vox&&(!a.cellsIn.includes(c*a.nz+h)||!Hc(a)))continue;let d=Vc(a,c,u,h);if(!(a.vox[d]<0))return Rs(a,d,"debris",n*.5,s*.5+3,r*.5),Math.random()<.15&&jt.spawn(i,e,t,0,2,0,V(6,10),2.5,[.6,.58,.55],[.5,.5,.5],.5),!0}return!1}var Lc=[];function Py(i){if(i.dirty=!1,!i.vox||i.gone)return;let e=new Uint8Array(i.vox.length),t=[];for(let l of i.cellsIn){let c=l/i.nz|0,h=l%i.nz,u=Vc(i,c,0,h);if(i.vox[u]<0)continue;let d=i.vox[u];si(Qe.pos[d*3],Qe.pos[d*3+2])<-1.6||(e[u]=1,t.push(u))}let n=i.ny*i.nz,s=i.nz,r=i.vox,a=l=>{!e[l]&&r[l]>=0&&(e[l]=1,t.push(l))};for(;t.length;){let l=t.pop(),c=l%i.nz,h=(l/i.nz|0)%i.ny,u=l/n|0;u+1<i.nx&&a(l+n),u>0&&a(l-n),h+1<i.ny&&a(l+s),h>0&&a(l-s),c+1<i.nz&&a(l+1),c>0&&a(l-1)}let o=[];for(let l=0;l<i.vox.length;l++)i.vox[l]>=0&&!e[l]&&o.push(l);o.length&&Lc.push({b:i,loose:o}),Xd(i)}function Ly({b:i,loose:e}){if(e=e.filter(a=>i.vox&&i.vox[a]>=0),!e.length)return;let t=it.cap-it.n,n=e.length<Math.min(500,t)?1:e.length<t*3?2:3,s=new Map;for(let a of e){let o=a%i.nz,l=(a/i.nz|0)%i.ny,h=`${(a/(i.nz*i.ny)|0)/n|0},${l/Math.min(n,2)|0},${o/n|0}`;s.has(h)||s.set(h,[]),s.get(h).push(a)}let r=0;for(let a of s.values()){let o=0,l=0,c=0,h=0,u=0,d=0;for(let x of a){let m=i.vox[x];o+=Qe.pos[m*3],l+=Qe.pos[m*3+1],c+=Qe.pos[m*3+2],h+=Qe.col[m*3],u+=Qe.col[m*3+1],d+=Qe.col[m*3+2],Qe.remove(m),i.vox[x]=-1,i.alive--,i.site&&kr++}let f=a.length,g=Math.cbrt(f);it.spawn(o/f,l/f,c/f,i.cell*Math.min(n,g*1.1),i.fh*Math.min(Math.min(n,2),g),i.cell*Math.min(n,g*1.1),i.quat,h/f,u/f,d/f,V(-2,2),V(-3,0),V(-2,2),.35,0,i.style),r++%5===0&&jt.spawn(o/f,l/f,c/f,V(-2,2),V(0,2),V(-2,2),V(10,18),4,[.72,.7,.66],[.55,.54,.52],.45),Yc(10*f,o/f,l/f,c/f,!0)}e.length>30&&Dt.crumble(Math.min(1,e.length/600)),i.dirty=!0}function Xd(i){if(!i.collapsed&&i.alive<=i.vol*.2){i.collapsed=!0;let e=i.name||(i.site?ye("noName",et.company):"");i.site?(Ur(5e3,ye("collapse",e)),Po++):Ur(800,e?ye("collapseSmall",e):ye("nextBldg"))}}var Po=0;function qd(i,e,t,n,s,r=!1){if(i.gone)return;let a=[];if(i.vox)for(let h=0;h<i.vox.length;h++)i.vox[h]>=0&&a.push(h);let o=i.vox?a.length:i.vol,l=Math.min(s,o),c=i.color;for(let h=0;h<l;h++){let u,d,f;if(i.vox){let _=i.vox[a[Math.random()*a.length|0]];u=Qe.pos[_*3],d=Qe.pos[_*3+1],f=Qe.pos[_*3+2]}else{let _=i.cellsIn[Math.random()*i.cellsIn.length|0];Wd(i,_/i.nz|0,Math.random()*i.ny|0,_%i.nz,Kt),u=Kt.x,d=Kt.y,f=Kt.z}let g=u-e,x=f-t,m=Math.hypot(g,x)||1,p=(1-Math.min(1,m/n))*170+30,y=i.cell*V(1,1.8)*(r?1.4:1);r?it.spawn(u,d,f,y,i.fh*V(.9,1.5),y,i.quat,c.r,c.g,c.b,V(-3,3),V(-4,0),V(-3,3),.5,0,i.style):it.spawn(u,d,f,y,i.fh*V(.8,1.4),y,i.quat,c.r,c.g,c.b,g/m*p,V(25,70),x/m*p,3,0,i.style)}if(i.vox)for(let h=0;h<i.vox.length;h++)i.vox[h]>=0&&(Qe.remove(i.vox[h]),i.vox[h]=-1);else Fd(i);if(Hd(i),i.site&&(kr+=i.alive),Yc(10*i.alive,i.cx,i.h/2,i.cz,!0),r)for(let h=0;h<14*Lo;h++)jt.spawn(i.cx+V(-20,20),V(2,i.h*.6),i.cz+V(-20,20),V(-4,4),V(1,5),V(-4,4),V(18,34),5,[.75,.72,.68],[.6,.58,.56],.55,1.5);r&&Dt.crumble(.8),i.alive=0,i.gone=!0,Xd(i)}var _o=class{constructor(e,t){this.cap=e,this.n=0;let n=new gt;this.P=new Float32Array(e*3),this.Cc=new Float32Array(e*3),this.Sz=new Float32Array(e),this.A=new Float32Array(e),n.setAttribute("position",new ht(this.P,3).setUsage(Vt)),n.setAttribute("aColor",new ht(this.Cc,3).setUsage(Vt)),n.setAttribute("aSize",new ht(this.Sz,1).setUsage(Vt)),n.setAttribute("aAlpha",new ht(this.A,1).setUsage(Vt)),n.boundingSphere=new dn(new C,1e5),this.V=new Float32Array(e*3),this.L=new Float32Array(e),this.ML=new Float32Array(e),this.S0=new Float32Array(e),this.GR=new Float32Array(e),this.C0=new Float32Array(e*3),this.C1=new Float32Array(e*3),this.A0=new Float32Array(e),this.B=new Float32Array(e),this.mat=new pn({uniforms:{map:{value:t?dy:fy},uScale:{value:1}},vertexShader:`attribute vec3 aColor; attribute float aSize; attribute float aAlpha; varying vec3 vC; varying float vA; uniform float uScale;
        void main(){ vC=aColor; vA=aAlpha; vec4 mv = modelViewMatrix*vec4(position,1.); gl_PointSize = min(aSize*uScale/max(-mv.z,1.), 900.); gl_Position = projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a*vA); }",transparent:!0,depthWrite:!1,blending:t?Oi:fi}),this.pts=new ar(n,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=t?3:2,nt.add(this.pts)}spawn(e,t,n,s,r,a,o,l,c,h,u=1,d=1.6,f=0){if(this.n>=this.cap)return;let g=this.n++;this.P.set([e,t,n],g*3),this.V.set([s,r,a],g*3),this.L[g]=0,this.ML[g]=l*V(.8,1.2),this.S0[g]=o,this.GR[g]=d,this.A0[g]=u,this.B[g]=f,this.C0.set(c,g*3),this.C1.set(h,g*3)}update(e){for(let n=0;n<this.n;n++){this.L[n]+=e;let s=this.L[n]/this.ML[n];if(s>=1){let o=--this.n;if(n!==o){for(let[l,c]of[[this.P,3],[this.V,3],[this.C0,3],[this.C1,3]])l.copyWithin(n*c,o*c,o*c+c);for(let l of[this.L,this.ML,this.S0,this.GR,this.A0,this.B])l[n]=l[o]}n--;continue}let r=n*3,a=Math.max(0,1-1.4*e);this.V[r]*=a,this.V[r+1]=this.V[r+1]*a+this.B[n]*e,this.V[r+2]*=a,this.P[r]+=this.V[r]*e,this.P[r+1]+=this.V[r+1]*e,this.P[r+2]+=this.V[r+2]*e,this.Sz[n]=this.S0[n]*(1+this.GR[n]*s);for(let o=0;o<3;o++)this.Cc[r+o]=this.C0[r+o]+(this.C1[r+o]-this.C0[r+o])*Math.min(1,s*1.6);this.A[n]=this.A0[n]*(s<.1?s/.1:1-(s-.1)/.9)}let t=this.pts.geometry;t.setDrawRange(0,this.n);for(let n of["position","aColor","aSize","aAlpha"])t.attributes[n].needsUpdate=!0}},Si=new _o(Zt?3500:5e3,!0),jt=new _o(Zt?4500:6e3,!1),Lo=ti[Ln].fxk,Nt=[];function xo(i,e,t,n,s,r="#fff2d0"){let a=new ke(new mr(.85,1,64),new fn({color:r,transparent:!0,opacity:.8,side:En,depthWrite:!1,blending:Oi}));a.rotation.x=-Math.PI/2,a.position.set(i,e+.6,t),nt.add(a),Nt.push({t:0,dur:s,up(o){a.scale.setScalar(1+n*Math.pow(o,.6)),a.material.opacity=.8*(1-o)},done(){nt.remove(a),a.geometry.dispose()}})}var xd=[0,1,2].map(()=>{let i=new Za("#ffb060",0,100,1.2);return nt.add(i),i}),Iy=0;function Wc(i,e,t,n,s){let r=new ke(new gr(1,32,16),new fn({color:"#ffd28a",transparent:!0,blending:Oi,depthWrite:!1}));r.position.set(i,e,t),nt.add(r);let a=xd[Iy++%xd.length];a.position.set(i,e+n*.5,t),a.distance=n*14,Nt.push({t:0,dur:s,up(o){r.scale.setScalar(n*Math.pow(o,.35)+.1),r.material.opacity=1-o,r.material.color.setRGB(1,.85-o*.5,.55-o*.5),a.intensity=(1-o)*n*400},done(){nt.remove(r),a.intensity=0,r.geometry.dispose()}})}function yd(i,e){Nt.push({t:0,dur:i,up(){},done:e})}function Yd(i,e,t,n,s=1){Wc(i,e,t,n*.9,.5+.25*s),xo(i,Math.max(e-n*.6,si(i,t)),t,n*3,.8+.3*s);let r=Math.min(220,40+n*5)*Lo;for(let a=0;a<r;a++){let o=V(0,Math.PI*2),l=V(-.1,1),c=V(.3,1.2)*n*2.4;Si.spawn(i,e,t,Math.cos(o)*c*(1-l*.5),l*c,Math.sin(o)*c*(1-l*.5),V(.25,.5)*n,V(.45,.9),[1,.92,.6],[1,.3,.06],1,1.2,6)}for(let a=0;a<r*.8;a++){let o=V(0,Math.PI*2),l=V(.1,.6)*n*1.5;jt.spawn(i+V(-n,n)*.4,e+V(0,n*.4),t+V(-n,n)*.4,Math.cos(o)*l,V(2,10)+n*.3,Math.sin(o)*l,V(.4,.8)*n,V(2.5,5)*s,[.32,.29,.27],[.62,.6,.58],.75,1.8,2)}}var Bn=[[0,"#8b95a5"],[600,"#5ea2d8"],[2200,"#3fb37f"],[5500,"#e2b33c"],[11e3,"#ef8a32"],[2e4,"#e5533d"],[34e3,"#c13cc9"],[52e3,"#ff2d55"]].map(([i,e],t)=>[ye("ranks")[t],i,e]),Ds=0,Mi=0,Xc=0,yo=0,br=[],$d=1,ei=0,oo=0,Ic=new C,vd=0,qc=()=>{let i=0;return Bn.forEach((e,t)=>{Mi>=e[1]&&(i=t)}),i},vo=()=>$d*(1+qc()*.12);function Yc(i,e,t,n,s){Number.isFinite(e+t+n)||(e=t=n=0);let r=i*vo();Ds+=r,Mi+=i*.55,Xc=ei;let a=qc();a>yo&&(yo=a,a>=2&&Os(ye("promo",Bn[a][0]),1600,Bn[a][2])),oo+=r,Ic.set(e,t,n)}function Ur(i,e){Ds+=i*vo(),Mi+=i*.3,Xc=ei,Os(`${e}  +${Ps(Math.round(i*vo()))}`,2200)}function Dc(i){br.push(i),br.length>6&&br.shift();let e=br.slice(-4);$d=e.length===4&&e.every(t=>t===i)?.7:1+.15*(new Set(br).size-1)}var Dt={ctx:null,out:null,muted:!1,nb:null,init(){if(this.ctx){this.ctx.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;this.ctx=new i;let e=this.ctx.createDynamicsCompressor();e.threshold.value=-18,e.ratio.value=6,this.out=this.ctx.createGain(),this.out.gain.value=.85,this.out.connect(e),e.connect(this.ctx.destination);let t=this.ctx.sampleRate*3;this.nb=this.ctx.createBuffer(1,t,this.ctx.sampleRate);let n=this.nb.getChannelData(0),s=0;for(let r=0;r<t;r++){let a=Math.random()*2-1;s=(s+.02*a)/1.02,n[r]=a*.5+s*3}},ok(){return this.ctx&&!this.muted},env(i,e,t,n,s){i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(n,e+t),i.gain.exponentialRampToValueAtTime(1e-4,e+s)},noise(i,e,t,n,s,r=.004,a=0){if(!this.ok())return;let o=this.ctx,l=o.currentTime+a,c=o.createBufferSource();c.buffer=this.nb,c.loop=!0;let h=o.createBiquadFilter();h.type=e,h.frequency.setValueAtTime(t,l),h.frequency.exponentialRampToValueAtTime(Math.max(20,n),l+i);let u=o.createGain();this.env(u,l,r,s,i),c.connect(h),h.connect(u),u.connect(this.out),c.start(l,Math.random()*2),c.stop(l+i+.05)},tone(i,e,t,n,s,r=.005,a=0){if(!this.ok())return;let o=this.ctx,l=o.currentTime+a,c=o.createOscillator();c.type=i,c.frequency.setValueAtTime(e,l),c.frequency.exponentialRampToValueAtTime(Math.max(10,t),l+n);let h=o.createGain();this.env(h,l,r,s,n),c.connect(h),h.connect(this.out),c.start(l),c.stop(l+n+.05)},boom(i=1){this.noise(.6+i*.9,"lowpass",1600*Math.min(1.5,i),80,.9*Math.min(1,.5+i*.4)),this.tone("sine",90,28,.5+i*.6,.8)},crumble(i){this.noise(1+i*1.5,"bandpass",700,180,.25+i*.4,.05)},whack(){this.noise(.18,"highpass",3e3,800,.8),this.tone("square",220,70,.2,.35)},whoosh(i){this.noise(i,"bandpass",300,2600,.35,i*.8)},whistle(i){this.tone("sine",1700,420,i,.18,.2)},zap(){this.tone("sawtooth",1500,160,.3,.3),this.noise(.3,"highpass",4e3,1500,.3)},charge(i){this.tone("sawtooth",70,900,i,.22,i*.9)},hum(){if(!this.ok())return()=>{};let i=this.ctx,e=i.createOscillator(),t=i.createOscillator(),n=i.createGain(),s=i.createBiquadFilter();return e.type="sawtooth",e.frequency.value=150,t.type="square",t.frequency.value=301,s.type="lowpass",s.frequency.value=1800,n.gain.value=1e-4,n.gain.exponentialRampToValueAtTime(.16,i.currentTime+.05),e.connect(s),t.connect(s),s.connect(n),n.connect(this.out),e.start(),t.start(),()=>{n.gain.exponentialRampToValueAtTime(1e-4,i.currentTime+.25),e.stop(i.currentTime+.3),t.stop(i.currentTime+.3)}},rumble(i,e){this.noise(i,"lowpass",220,60,.35+e*.5,.3)},nuke(){this.boom(3),this.noise(7,"lowpass",500,40,.9,.05,.1),this.tone("sine",50,20,5,.7,.05)}},Fn=0,bc=new C,zr=i=>{Fn=Math.min(14,Fn+i)};function Zd(){let i=new C;return Et.getWorldDirection(i),i.y=0,i.normalize()}function Jd(i,e,t,n,s,r={}){Gc(i,e,t,n,s),Br.wake(i,t,n*1.15,s*.7,i,t),it.push(i,e,t,n*1.6,s*.6),$i.clear(i,t,n*.8),r.crater&&e-si(i,t)<n*.8&&Fr(i,t,r.crater[0],r.crater[1]),Yd(i,e,t,n,r.big||1),zr(n*.08*(r.big||1)),Dt.boom(n/18)}var Us=Object.fromEntries(["bomb","bat","laser","meteor","quake","nuke"].map(i=>[i,ye(`labels.${i}`)])),Ns=i=>i[Math.random()*i.length|0],Dy=(()=>{let[i,e]=ii(256,180);e.fillStyle="#fbfaf5",e.fillRect(0,0,256,180),e.strokeStyle="#c9c4b8",e.lineWidth=4,e.strokeRect(4,4,248,172),e.beginPath(),e.moveTo(6,8),e.lineTo(128,96),e.lineTo(250,8),e.stroke(),e.fillStyle="#1b1b1b",e.font=`900 46px ${getComputedStyle(document.body).fontFamily}`,e.textAlign="center",e.fillText(ye("envelope"),128,150);let t=new Tn(i);return t.colorSpace=dt,t})(),Kd=()=>Mr.clamp(Et.position.distanceTo(Qt.target)/260,1,5);function Uy(i){let e=Kd(),t=new ke(new It(9*e,.5*e,6.5*e),[0,0,1,1,0,0].map(s=>new xt(s?{map:Dy}:{color:"#efece4"})));t.castShadow=!0;let n=90*e;t.position.set(i.x,i.y+n,i.z),nt.add(t),Nt.push({t:0,dur:.62,up(s){let r=s*s;t.position.set(i.x+Math.sin(s*9)*4*e*(1-s),i.y+n*(1-r),i.z+Math.cos(s*7)*3*e*(1-s)),t.rotation.set(Math.sin(s*10)*.6,s*5,Math.cos(s*8)*.5),Math.random()<.6&&jt.spawn(t.position.x,t.position.y,t.position.z,0,2,0,3*e,.6,[1,1,1],[.9,.9,.9],.35)},done(){nt.remove(t),t.geometry.dispose(),Jd(i.x,i.y+2,i.z,14,40,{crater:[12,4.5]}),Math.random()<.45&&bi(i,Ns(Us.bomb),"#fff")}})}var Ts=1,Ny=1,Md=new Set,jd=(()=>{let[i,e]=ii(512,160);e.fillStyle="#2b2b2e",e.fillRect(0,0,512,160),e.fillStyle="#f6f4ee",e.fillRect(40,12,460,136),e.fillStyle="#9aa0a6",e.fillRect(8,50,40,60),e.strokeStyle="#222",e.lineWidth=3,e.font="bold 24px sans-serif",e.fillStyle="#222",ye("board").forEach((n,s)=>{e.strokeRect(70+s*100,24,96,112),e.fillText(n,82+s*100,56)}),e.strokeStyle="#d4202a",e.lineWidth=7,e.beginPath(),e.arc(380,100,42,0,7),e.stroke(),e.fillStyle="#d4202a",e.font="bold 26px sans-serif",e.textAlign="center",e.fillText(ye("reject"),380,110),e.textAlign="left";let t=new Tn(i);return t.colorSpace=dt,t})();function Oy(i){let e=36*Ts,t=Ny++,n=Math.max(e,30*Kd()),s=Zd(),r=new C(-s.z,0,s.x),a=i.clone().addScaledVector(s,-n*.55);a.y=Math.max(i.y,n*.12);let o=new $t;o.position.copy(a);let l=new ke(new It(n,n*.3,n*.03),[0,0,0,0,1,1].map(u=>u?new xt({map:jd}):new xt({color:"#2b2b2e"})));l.position.x=n/2,l.castShadow=!0,o.add(l),nt.add(o);let c=Math.atan2(-s.z,s.x);Dt.whoosh(.22);let h=!1;Nt.push({t:0,dur:.8,up(u){let d=Math.min(1,u/.4);if(o.rotation.y=c+1.5-3*(d*d*(3-2*d)),!h&&d>=.5){h=!0;let f=s.clone().multiplyScalar(.78).addScaledVector(r,.42);f.y=.42,f.normalize();let g=60+22*Ts;Gc(i.x,i.y,i.z,e*.42,g,{dir:[f.x,f.y,f.z],tag:t});for(let x=0;x<2;x++)it.push(i.x,i.y,i.z,e*.5,25);Br.wake(i.x,i.z,e*.4,30,a.x,a.z),$i.clear(i.x,i.z,e*.3),Dt.whack(),zr(1.5*Ts);for(let x=0;x<25;x++)jt.spawn(i.x,i.y,i.z,f.x*20+V(-6,6),V(0,8),f.z*20+V(-6,6),V(5,10)*Ts,1.8,[.7,.68,.64],[.6,.6,.6],.5);Math.random()<.5&&bi(i,Ns(Us.bat),"#ffd6d6")}l.material.forEach(f=>{f.transparent=u>.75,f.opacity=u>.75?1-(u-.75)/.25:1})},done(){nt.remove(o),l.geometry.dispose()}})}function Fy(i,e,t,n,s){e>70&&!Md.has(i)&&(Md.add(i),Ur(3e3,ye("homerun",Math.round(e))),bi(new C(t,n+8,s),ye("homerunShort",Math.round(e)),"#ffe066"))}var By=new C(260,1400,-380),ot={drawing:!1,path:[],line:null,active:null},vi=(()=>{let i=new $t,e=new An(1,1,1,16,1,!0).translate(0,.5,0);return[[1.3,(Rr.beam||[])[0]||"#ffffff",1],[3.2,(Rr.beam||[])[1]||"#21d07a",.75],[7.5,(Rr.beam||[])[1]||"#21a366",.28]].forEach(([t,n,s])=>{let r=new ke(e,new fn({color:n,transparent:!0,opacity:s,blending:Oi,depthWrite:!1,fog:!1}));r.scale.set(t,1,t),r.userData.o=s,i.add(r)}),i.visible=!1,nt.add(i),i})();function Uc(i,e=1){let t=By.clone().sub(i),n=t.length();vi.position.copy(i),vi.quaternion.setFromUnitVectors(Bd,t.normalize()),vi.children.forEach(s=>{var r;s.scale.y=n,s.scale.x=s.scale.z=(r=s.userData).r0??(r.r0=s.scale.x),s.scale.x=s.scale.z=s.userData.r0*e*V(.9,1.1),s.material.opacity=s.userData.o*Math.min(1,e)}),vi.visible=!0}function Qd(i,e,t){let n=Math.max(0,si(i,e));Gc(i,0,e,8.5,22,{vertical:!0,vapor:!0}),Br.wake(i,e,9,14,i,e),$i.clear(i,e,6),Fr(i,e,5,1.8,1);for(let s=0;s<6;s++)Si.spawn(i,n+1,e,V(-10,10),V(5,25),V(-10,10),V(2,5),.5,[.85,1,.85],[1,.4,.05]);jt.spawn(i,n+2,e,V(-2,2),V(3,8),V(-2,2),V(5,9),2.2,[.35,.36,.34],[.5,.5,.5],.45),t&&(Yd(i,n+3,e,7),Dt.boom(.4),Math.random()<.6&&bi(new C(i,n+10,e),Ns(Us.laser),"#7dffb0"))}function ky(i){let e=[],t=0;for(let a=1;a<i.length;a++){let o=i[a].distanceTo(i[a-1]);e.push(o),t+=o}let n=.65,s=Math.min(2.6,Math.max(.8,t/160));Dt.charge(n),ot.active={path:i,segs:e,total:t,done:0,nextBoom:0};let r=null;Nt.push({t:0,dur:n,up(a){Wi.uDark.value=Math.max(Wi.uDark.value,a*.65),Uc(i[0],a*.25)},done(){r=Dt.hum(),zr(1.5),Nt.push({t:0,dur:s,up(a){let o=ot.active,l=a*o.total;for(;o.done<=l;){let c=o.done,h=0;for(;h<o.segs.length&&c>o.segs[h];)c-=o.segs[h],h++;if(h>=o.segs.length)break;let u=i[h].clone().lerp(i[h+1],o.segs[h]?c/o.segs[h]:0);Qd(u.x,u.z,o.done>=o.nextBoom),o.done>=o.nextBoom&&(o.nextBoom+=22),o.last=u,o.done+=3}o.last&&Uc(o.last.clone().setY(si(o.last.x,o.last.z)),1),Fn=Math.max(Fn,.5)},done(){r&&r(),vi.visible=!1,ot.active=null,Nt.push({t:0,dur:.8,up(a){Wi.uDark.value=(To?0:.65)*(1-a)},done(){Wi.uDark.value=0}})}})}})}function ef(i){Dt.zap(),Nt.push({t:0,dur:.45,up(e){Uc(i,1-e*.5)},done(){vi.visible=!1}}),Qd(i.x,i.z,!0)}function tf(){let i=(t,n=.4)=>new xt({color:t,emissive:"#ff7a1a",emissiveIntensity:.55,metalness:n,roughness:.4}),e=new $t;switch(Rr.meteor){case"pill":{let t=new ke(new cr(5,10,6,16),i("#f8fafc",0)),n=new ke(new An(5.05,5.05,5,16),i("#ef4444",0));n.position.y=2.5,t.rotation.z=n.rotation.z=Math.PI/3,e.add(t,n);break}case"coin":{let t=new ke(new An(10,10,2.4,32),i("#fbbf24",1));t.rotation.x=1.1,e.add(t);break}case"wafer":{let t=new ke(new An(12,12,.8,48),i("#cbd5e1",1));t.rotation.x=1,e.add(t);break}case"tv":{let t=new ke(new It(16,10,4),i("#1f2937",.3)),n=new ke(new xi(14,8.4),new fn({color:"#93c5fd"}));n.position.z=2.05,e.add(t,n);break}case"phone":{let t=new ke(new It(6,12,1),i("#111827",.5)),n=new ke(new xi(5.4,11),new fn({color:"#a5b4fc"}));n.position.z=.55,e.add(t,n),e.scale.setScalar(1.4);break}case"gear":{let t=new ke(new An(8,8,3,10),i("#9ca3af",1));for(let n=0;n<10;n++){let s=new ke(new It(3,3,3),i("#9ca3af",1));s.position.set(Math.cos(n/10*Math.PI*2)*9,0,Math.sin(n/10*Math.PI*2)*9),t.add(s)}t.rotation.x=1.2,e.add(t);break}case"gpu":{let t=new ke(new It(18,4,9),i("#14532d",.6));for(let n of[-5,4]){let s=new ke(new An(3.2,3.2,.5,20),i("#111827",.2));s.position.set(n,-2.2,0),t.add(s)}e.add(t);break}default:e.add(new ke(new pr(8,1),new fn({color:"#ffb36b"})))}return e.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),e}function zy(i){let e=Zd(),t=new C(-e.z,0,e.x),n=i.clone().addScaledVector(e,-380).addScaledVector(t,160);n.y+=650;let s=tf();nt.add(s),Dt.whoosh(1.5);let r=n.clone();Nt.push({t:0,dur:1.5,up(a){let o=a*a;s.position.lerpVectors(n,i,o),s.rotation.x+=.12,s.rotation.y+=.07;for(let l=0;l<10;l++){let c=r.clone().lerp(s.position,Math.random());Si.spawn(c.x,c.y,c.z,V(-3,3),V(-3,3),V(-3,3),V(9,16),.5,[1,.9,.6],[1,.3,.05]),jt.spawn(c.x,c.y,c.z,V(-2,2),V(0,3),V(-2,2),V(10,18),3,[.45,.4,.36],[.5,.5,.5],.55)}r.copy(s.position)},done(){nt.remove(s),s.traverse(a=>a.geometry&&a.geometry.dispose()),Jd(i.x,i.y+4,i.z,34,95,{big:1.8}),Fr(i.x,i.z,42,17),bi(i.clone().setY(i.y+30),Ns(Us.meteor),"#ffcf8a")}})}var Rt=null,Mo=7;function Hy(i){let e=Mo,t=Math.min(9,.08*Math.pow(1.9,e-4));Rt={t:0,dur:3.2,M:e,A:t,P:i.clone()},Dt.rumble(3.4,Math.min(1,(e-4)/5)),zr(t*.6),bi(i.clone().setY(i.y+25),ye("magLabel",e.toFixed(1),Ns(Us.quake)),"#ffd28a");for(let n of yn){if(n.gone)continue;let s=Math.hypot(n.cx-i.x,n.cz-i.z),r=e-2.6*Math.log10(1+s/50);r<6.5&&!n.vox||r<5.6||yd(V(.2,2.6),()=>Vy(n,r))}if(e>=8.5)for(let n=0;n<3+(e-8.5)*2;n++){let s=V(0,Math.PI*2),r=V(80,60+(e-8)*120);for(let a=0;a<r;a+=5)yd(.3+a/120,()=>Fr(i.x+Math.cos(s)*a,i.z+Math.sin(s)*a,3.5,6*(1-a/r)+1.5,.4))}}function Vy(i,e){if(i.gone)return;if(e>=7.5){let r=it.cap-it.n;qd(i,i.cx,i.cz,1,Math.max(6,Math.min(i.site?110:40,Math.floor(r/6))),!0);return}if(!Hc(i))return;let t=[];for(let r=0;r<i.vox.length;r++)i.vox[r]>=0&&t.push(r);let n=r=>(r/i.nz|0)%i.ny;e>=7&&t.filter(r=>n(r)===0&&Math.random()<(e-6.6)*.6).forEach(r=>Rs(i,r,"debris",V(-3,3),0,V(-3,3)));let s=Math.min(.25,(e-5.6)*.06);t.filter(r=>i.vox[r]>=0&&n(r)>=i.ny/2&&Math.random()<s).forEach(r=>Rs(i,r,"debris",V(-6,6),V(0,4),V(-6,6)))}var Nc=!1;function Gy(i){if(Nc)return;Nc=!0;let e=new $t,t=new ke(new cr(2.4,7,6,12),new xt({color:"#30353b",metalness:.5,roughness:.4})),n=new ke(new An(2.5,2.5,1.2,12),new xt({color:"#f2c200"}));e.add(t,n),nt.add(e);let s=i.clone();s.y+=700,Dt.whistle(2.2),bi(i.clone().setY(i.y+40),Ns(Us.nuke),"#ff8080"),Nt.push({t:0,dur:2.2,up(r){e.position.lerpVectors(s,i,r*r),e.rotation.z=Math.sin(r*20)*.05},done(){nt.remove(e),Wy(i.clone().setY(si(i.x,i.z)+10))}})}var Ec=1,Ar=0;function Wy(i){qy(1,2.2),Ar=2.4,Dt.nuke(),zr(14),Wc(i.x,i.y,i.z,170,3.2),xo(i.x,i.y,i.z,1100,4.5,"#ffe9c0"),xo(i.x,i.y,i.z,700,3,"#ffffff");let t=[...Co.query(i.x,i.z,420)].filter(s=>Math.hypot(s.cx-i.x,s.cz-i.z)<440),n=Math.max(8,Math.floor(Math.min(220,(it.cap-it.n-300)/Math.max(1,t.length))));for(let s of t)qd(s,i.x,i.z,420,s.site?n:Math.ceil(n*.5));Br.wake(i.x,i.z,420,120,i.x,i.z),it.push(i.x,i.y,i.z,420*1.3,150),$i.clear(i.x,i.z,420),Fr(i.x,i.z,230,75),Ur(3e4,ye("quit")),Nt.push({t:0,dur:9,up(s){let r=Math.min(520,700*Math.sqrt(s));for(let a=0;a<9*Lo;a++){let o=V(0,Math.PI*2),l=V(0,35);jt.spawn(i.x+Math.cos(o)*l,i.y+V(0,r*.9),i.z+Math.sin(o)*l,0,V(20,50),0,V(35,70),4,s<.25?[1,.55,.2]:[.55,.45,.4],[.42,.38,.36],.6,1.2);let c=V(0,Math.PI*2),h=V(40,90+r*.35);jt.spawn(i.x+Math.cos(c)*h*.5,i.y+r+V(-30,30),i.z+Math.sin(c)*h*.5,Math.cos(c)*h*.4,V(-4,14),Math.sin(c)*h*.4,V(60,110),5,s<.3?[1,.6,.25]:[.6,.5,.45],[.45,.42,.4],.7,1.4),s<.5&&Si.spawn(i.x+V(-40,40),i.y+r*V(.6,1),i.z+V(-40,40),V(-10,10),V(5,25),V(-10,10),V(40,80),1.2,[1,.8,.4],[1,.25,.05],.8)}if(s<.15)for(let a=0;a<20;a++){let o=V(0,Math.PI*2),l=V(150,320);jt.spawn(i.x,i.y,i.z,Math.cos(o)*l,V(2,12),Math.sin(o)*l,V(40,70),3.5,[.7,.62,.55],[.6,.58,.55],.6,1.5)}},done(){Nc=!1}})}var be=i=>document.getElementById(i),Nr=[{id:"bomb",short:ye("tools.bomb")[1],svg:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 8l9 6 9-6"/>',name:ye("tools.bomb")[0],tip:ye("tools.bomb")[2]},{id:"bat",short:ye("tools.bat")[1],svg:'<rect x="5" y="4" width="14" height="17" rx="2"/><rect x="9" y="2.5" width="6" height="3" rx="1"/><path d="M8 10h8M8 14h5"/><circle cx="15.5" cy="16.5" r="2.2"/>',name:ye("tools.bat")[0],tip:ye("tools.bat")[2],slider:{label:ye("batSize"),min:.5,max:3,step:.1,get:()=>Ts,set:i=>Ts=i,fmt:i=>`\xD7${i.toFixed(1)} \xB7 ${Math.round(36*i)} m`}},{id:"laser",short:ye("tools.laser")[1],svg:'<path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/>',name:ye("tools.laser")[0],tip:ye("tools.laser")[2]},{id:"meteor",short:ye("tools.meteor")[1],svg:'<circle cx="15" cy="15" r="5"/><path d="M3 3l8 8M7 3l6 6M3 7l6 6"/>',name:ye("tools.meteor")[0],tip:ye("tools.meteor")[2]},{id:"quake",short:ye("tools.quake")[1],svg:'<path d="M2 13h4l2-6 3 11 3-9 2 4h6"/>',name:ye("tools.quake")[0],tip:ye("tools.quake")[2],slider:{label:ye("mag"),min:4,max:10,step:.1,get:()=>Mo,set:i=>Mo=i,fmt:i=>`M ${i.toFixed(1)} \xB7 ${ye("qk")[i<6?0:i<7.5?1:2]}`}},{id:"nuke",short:ye("tools.nuke")[1],svg:'<circle cx="12" cy="12" r="2"/><path d="M12 10L8.5 4a8 8 0 0 1 7 0zM13.7 13l3.5 6a8 8 0 0 0 3.5-6zM10.3 13l-3.5 6a8 8 0 0 1-3.5-6z" fill="currentColor"/>',name:ye("tools.nuke")[0],tip:ye("tools.nuke")[2]}],On="bomb";function Xy(){let i=be("dock");Nr.forEach((e,t)=>{let n=document.createElement("button");n.className="tool",n.dataset.id=e.id,n.title=e.tip,n.innerHTML=`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${e.svg}</svg><span class="nm">${e.name}</span><span class="sh">${e.short}</span><kbd>${t+1}</kbd>`,n.onclick=()=>So(e.id),i.appendChild(n)}),be("slider").oninput=e=>{let t=Nr.find(n=>n.id===On);t.slider.set(+e.target.value),be("sliderVal").textContent=t.slider.fmt(+e.target.value)},So("bomb")}function So(i){On=i,document.querySelectorAll(".tool").forEach(n=>n.classList.toggle("on",n.dataset.id===i));let e=Nr.find(n=>n.id===i);be("tip").textContent=e.tip;let t=be("sliderWrap");e.slider?(t.hidden=!1,be("sliderLabel").textContent=e.slider.label,Object.assign(be("slider"),{min:e.slider.min,max:e.slider.max,step:e.slider.step,value:e.slider.get()}),be("sliderVal").textContent=e.slider.fmt(e.slider.get())):t.hidden=!0}var Cs=[];function bi(i,e,t="#fff",n=!1){let s=document.createElement("div");s.className="float"+(n?" big":""),s.textContent=e,s.style.color=t,s.style.opacity=0,be("floaters").appendChild(s),Cs.push({el:s,pos:i.clone(),t:0}),Cs.length>28&&Cs.shift().el.remove()}var Sd=0;function Os(i,e=1800,t){let n=be("toast");n.textContent=i,n.style.color=t||"",n.classList.add("show"),clearTimeout(Sd),Sd=setTimeout(()=>n.classList.remove("show"),e)}function qy(i,e){let t=be("flash");t.style.transition="none",t.style.opacity=i,requestAnimationFrame(()=>{t.style.transition=`opacity ${e}s ease-out`,t.style.opacity=0})}function $c(i){To=i;let e=i?ry:uo;Wi.uTop.value.copy(e.top),Wi.uHor.value.copy(e.hor),In.fog.color.copy(e.fog),Cd.intensity=i?.18:1.1,vt.intensity=i?.12:2.6,vt.color.set(i?"#9fb4ff":"#fff3e0"),wr.emissiveIntensity=i?1.6:0,Od.emissiveIntensity=i?1.6:0;for(let t of Vd)t.mat.emissiveIntensity=i?1.6:.25;oy.visible=i,be("nightBtn").classList.toggle("on",i)}var gn={};function nf(){let i=qc();gn.score.textContent=Ps(Math.round(Ds)),gn.rank.textContent=Bn[i][0],gn.rank.style.background=Bn[i][2];let e=Bn[i+1];gn.bar.style.width=e?`${Math.min(100,(Mi-Bn[i][1])/(e[1]-Bn[i][1])*100)}%`:"100%",gn.mult.textContent=`\xD7${vo().toFixed(2)}`,gn.rate.textContent=`${Math.min(100,kr/Ry*100).toFixed(1)}%`,gn.cnt.textContent=ye("count",Po,Gd),gn.depth.textContent=`${Ps(6371*Math.pow(Math.min(1,As/Ir),1.6),{maximumFractionDigits:As<40?1:0})} ${ye("km")}`}function Yy(){St.render(In,Et);let i=new Image;i.src=ni.toDataURL("image/jpeg",.9),i.onload=()=>{let[e,t]=ii(1200,630),n=Math.max(1200/i.width,630/i.height);t.drawImage(i,(1200-i.width*n)/2,(630-i.height*n)/2,i.width*n,i.height*n);let s=t.createLinearGradient(0,0,760,0);s.addColorStop(0,"rgba(10,14,22,.88)"),s.addColorStop(1,"rgba(10,14,22,0)"),t.fillStyle=s,t.fillRect(0,0,1200,630),t.fillStyle="#ff6a2b",t.font="700 22px sans-serif",t.fillText(et.series,56,70),t.fillStyle="#fff",t.font="900 54px sans-serif",t.fillText(ye("smash",et.company),56,132);let r=ye("card");[[r[0],Ps(Math.round(Ds))],[r[1],Bn[yo][0]],[r[2],gn.rate.textContent],[r[3],gn.cnt.textContent],[r[4],gn.depth.textContent]].forEach(([l,c],h)=>{t.fillStyle="#aab4c3",t.font="500 24px sans-serif",t.fillText(l,56,210+h*70),t.fillStyle="#fff",t.font="800 40px sans-serif",t.fillText(c,260,214+h*70)}),t.fillStyle="#cfd6df",t.font="500 20px sans-serif",t.fillText(`${et.place} \xB7 ${et.tagline}`,56,590);let o=e.toDataURL("image/png");be("cardImg").src=o,be("cardDl").href=o,be("cardModal").hidden=!1,be("submitRow").hidden=!Jc||Fc,be("submitMsg").textContent=""}}var Pr=new Ka,bo=new se;function $y(i){let e=i.ray.origin,t=i.ray.direction,n=0;for(let s=0;s<5e3;s+=3){let r=e.x+t.x*s,a=e.y+t.y*s,o=e.z+t.z*s;if(a<=po(r,o)){let l=n,c=s;for(let h=0;h<10;h++){let u=(l+c)/2;e.y+t.y*u<=po(e.x+t.x*u,e.z+t.z*u)?c=u:l=u}return{point:new C(e.x+t.x*c,e.y+t.y*c,e.z+t.z*c),distance:c}}n=s}return null}function Io(i,e,t){bo.set(i/innerWidth*2-1,-(e/innerHeight)*2+1),Pr.setFromCamera(bo,Et);let n=$y(Pr);if(t)return n;let r=Pr.intersectObjects([...Ro.children,Qe.mesh,an.mesh],!1)[0];return r&&(!n||r.distance<n.distance)?{point:r.point.clone(),distance:r.distance}:n}function Oc(i){Dc(On),On==="bomb"?Uy(i):On==="bat"?Oy(i):On==="laser"?ef(i):On==="meteor"?zy(i):On==="quake"?Hy(i):On==="nuke"&&Gy(i)}var Ls=new Map,Cn=null;ni.addEventListener("pointerdown",i=>{if(Ls.set(i.pointerId,i),Ls.size>1){ot.drawing&&Zc(),Cn=null;return}if(Cn={x:i.clientX,y:i.clientY,t:performance.now(),btn:i.button},On==="laser"&&i.button===0&&!ot.active){let e=Io(i.clientX,i.clientY,!0);if(e){ot.drawing=!0,Qt.enabled=!1,ot.path=[e.point];let t=new gt().setFromPoints([e.point,e.point]);ot.line=new sr(t,new _r({color:"#21d07a",dashSize:6,gapSize:4,depthTest:!1})),ot.line.renderOrder=9,nt.add(ot.line)}}},{capture:!0});ni.addEventListener("pointermove",i=>{if(Ls.has(i.pointerId)&&Ls.set(i.pointerId,i),!ot.drawing)return;let e=Io(i.clientX,i.clientY,!0);if(!e)return;let t=ot.path[ot.path.length-1];e.point.distanceTo(t)>3&&(ot.path.push(e.point),ot.line.geometry.dispose(),ot.line.geometry=new gt().setFromPoints(ot.path.map(n=>n.clone().setY(n.y+1.5))),ot.line.computeLineDistances())});function Zc(){ot.drawing=!1,Qt.enabled=!0,ot.line&&(nt.remove(ot.line),ot.line.geometry.dispose(),ot.line=null)}function Zy(i){if(Ls.delete(i.pointerId),ot.drawing){let s=ot.path;Zc();let r=0;for(let a=1;a<s.length;a++)r+=s[a].distanceTo(s[a-1]);r<8?(Dc("laser"),ef(s[0])):(Dc("laser"),ky(s)),Cn=null;return}if(!Cn||Cn.btn!==0){Cn=null;return}let e=Math.hypot(i.clientX-Cn.x,i.clientY-Cn.y),t=performance.now()-Cn.t;if(Cn=null,e>8||t>600)return;let n=Io(i.clientX,i.clientY);n&&Oc(n.point)}ni.addEventListener("pointerup",Zy);ni.addEventListener("pointercancel",i=>{Ls.delete(i.pointerId),ot.drawing&&Zc(),Cn=null});addEventListener("keydown",i=>{if(i.target.tagName==="INPUT")return;let e=+i.key;e>=1&&e<=Nr.length&&So(Nr[e-1].id),(i.key==="n"||i.key==="N")&&$c(!To),(i.key==="l"||i.key==="L")&&be("labelBtn").click(),(i.key==="m"||i.key==="M")&&sf(),i.key==="Escape"&&(be("cardModal").hidden=!0,be("rankModal").hidden=!0)});function sf(){Dt.muted=!Dt.muted,be("muteBtn").classList.toggle("on",Dt.muted),be("muteBtn").textContent=Dt.muted?ye("btn.soundOff"):ye("btn.sound")}addEventListener("resize",()=>{Et.aspect=innerWidth/innerHeight,Et.updateProjectionMatrix(),St.setSize(innerWidth,innerHeight),typeof Or=="function"&&kn>Is()&&Or(Is())});var Jc=!!(et.supabaseUrl&&et.supabaseKey);async function rf(i,e){let t=new AbortController,n=setTimeout(()=>t.abort(),9e3);try{let s=await fetch(`${et.supabaseUrl}/rest/v1/rpc/${i}`,{method:"POST",signal:t.signal,headers:{apikey:et.supabaseKey,"Content-Type":"application/json"},body:JSON.stringify(e||{})});if(!s.ok)throw new Error(`${s.status}`);return s.json()}finally{clearTimeout(n)}}var bd=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Fc=!1;async function af(i){let e=be("rankList");if(!Jc){e.innerHTML=`<p class="muted">${ye("rank.off")}</p>`;return}e.innerHTML=`<p class="muted">${ye("rank.loading")}</p>`;try{let t=await rf("smash_top",{p_company:et.code,p_limit:20});e.innerHTML=t.length?`<ol>${t.map((n,s)=>`<li class="${n.nick===i?"me":""}"><span class="no">${s+1}</span><b>${bd(n.nick)}</b><span class="rk">${bd(n.rank_name||"")}</span><span class="sc">${Ps(n.score)}</span></li>`).join("")}</ol>`:`<p class="muted">${ye("rank.empty")}</p>`}catch{e.innerHTML=`<p class="muted">${ye("rank.fail")}</p>`}}async function Jy(){if(!Jc||Fc)return;let i=(be("nick").value||"").trim()||ye("rank.anon");try{localStorage.setItem("smash-nick",i)}catch{}be("submitBtn").disabled=!0,be("submitMsg").textContent=ye("rank.sending");try{let e=await rf("smash_submit",{p_company:et.code,p_nick:i,p_score:Math.round(Ds),p_collapsed:Po,p_rank:Bn[yo][0]});e.ok?(Fc=!0,be("submitMsg").textContent=ye("rank.done",et.company,e.position),af(i.slice(0,12))):(be("submitMsg").textContent=e.reason==="too_fast"?ye("rank.fast"):ye("rank.err"),be("submitBtn").disabled=!1)}catch{be("submitMsg").textContent=ye("rank.err"),be("submitBtn").disabled=!1}}function Ky(){be("rankModal").hidden=!1,be("rankTitle").textContent=ye("rank.title",et.company),af()}var lo=!0,jy=yn.filter(i=>i.site&&i.name).map(i=>{let e=document.createElement("div");return e.className="blabel",e.textContent=i.name,e.style.display="none",be("labels").appendChild(e),{b:i,el:e,on:!1}}),Gi=new C,wc=new Set;function Qy(){let i=Et.position.distanceTo(Qt.target)>Ad*3.2+900;wc.clear();let e=innerWidth,t=innerHeight,n=[];for(let s of jy){let r=s.b,a=lo&&!i&&!r.gone&&!r.collapsed;a&&(Gi.set(r.cx,r.h*(r.vox?Math.max(.15,r.alive/r.vol):1)+4+(r.sign?r.signH:0),r.cz).project(Et),a=Gi.z<1&&Math.abs(Gi.x)<1.05&&Math.abs(Gi.y)<1.05,a&&n.push([s,(Gi.x*.5+.5)*e,(-Gi.y*.5+.5)*t,Gi.z])),!a&&s.on&&(s.el.style.display="none",s.on=!1)}n.sort((s,r)=>s[3]-r[3]);for(let[s,r,a]of n){let o=`${Math.round(r/84)},${Math.round(a/20)}`;if(wc.has(o)){s.on&&(s.el.style.display="none",s.on=!1);continue}wc.add(o),s.on||(s.el.style.display="",s.on=!0),s.el.style.transform=`translate(${r|0}px,${a|0}px) translate(-50%,-100%)`}}function ev(i){if(!i)return null;if(i.object===Qe.mesh){let a=Qe.owner[i.instanceId];return a>=0?yn[a]:null}let e=i.object.userData.owners;if(!e)return null;let t=i.faceIndex*3,n=0,s=e.length-1,r=-1;for(;n<=s;){let a=n+s>>1;e[a][0]<=t?(r=a,n=a+1):s=a-1}return r>=0?yn[e[r][1]]:null}var Ed=0;ni.addEventListener("pointermove",i=>{if(i.pointerType!=="mouse"||i.buttons||ot.drawing){be("hover").hidden=!0;return}let e=performance.now();if(e-Ed<90)return;Ed=e,bo.set(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),Pr.setFromCamera(bo,Et);let t=ev(Pr.intersectObjects([...Ro.children,Qe.mesh],!1)[0]),n=be("hover");if(!t||t.gone){n.hidden=!0;return}let s=t.vox?Math.round(t.alive/t.vol*100):100;n.innerHTML=`<b>${t.name||(t.site?et.company:ye("hover")[0])}</b><span>${t.site?et.company+" \xB7 ":""}${ye("hover.1",Math.round(t.h),s)}</span>`,n.style.transform=`translate(${i.clientX+14}px,${i.clientY+14}px)`,n.hidden=!1});ni.addEventListener("pointerleave",()=>be("hover").hidden=!0);var wd=performance.now(),Tc=0,Ac=0,Td=.5,Is=()=>Math.min(devicePixelRatio,ti[Ln].dprMax,Math.sqrt(ti[Ln].px/(innerWidth*innerHeight))),kn=Is(),ro=0,Rc=0,Cc=0;St.setPixelRatio(kn);function Or(i){i=Math.round(i*20)/20,i!==kn&&(kn=i,St.setPixelRatio(kn),St.setSize(innerWidth,innerHeight))}function tv(i){if(ro+=i,Rc++,ro<.75)return;let e=ro/Rc*1e3;ro=0,Rc=0,e>21?kn>Td+.01?Or(Math.max(Td,kn*.85)):++Cc>=3&&Ln>0&&(of(Ln-1,!0),Cc=0):(Cc=0,e<12.5&&kn<Is()&&Or(Math.min(Is(),kn+.1)))}function of(i,e){Ln=i;try{localStorage.setItem("smash-q",i)}catch{}let t=ti[i],n=t.shadow>0;vt.castShadow!==n&&(vt.castShadow=n,In.traverse(r=>{r.material&&[].concat(r.material).forEach(a=>a.needsUpdate=!0)})),n&&vt.shadow.mapSize.x!==t.shadow&&(vt.shadow.mapSize.set(t.shadow,t.shadow),vt.shadow.map&&(vt.shadow.map.dispose(),vt.shadow.map=null)),St.shadowMap.needsUpdate=!0,Lo=t.fxk,Or(Is());let s=document.getElementById("qBtn");s&&(s.textContent=ye("quality",t.name)),e&&Os(ye("qDown",t.name),2200)}var co=[],ho=[];function lf(i){let e=performance.now(),t=(i-wd)/1e3,n=Math.min(.05,t);wd=i,!document.hidden&&t<.5&&tv(t),Ar>0?(Ar-=n,Ec=Ar>1.2?.25:.25+(1.2-Ar)/1.2*.75):Ec=1;let s=n*Ec;ei+=s,Et.position.sub(bc),Qt.update(),bc.set(V(-1,1),V(-1,1),V(-1,1)).multiplyScalar(Fn),Et.position.add(bc),Fn*=Math.exp(-n*4.5),Fn<.02&&(Fn=0);for(let d=0;d<Nt.length;d++){let f=Nt[d];f.t+=s/f.dur,f.up(Math.min(1,f.t)),f.t>=1&&(Nt.splice(d,1),d--,f.done())}if(Rt){Rt.t+=s;let d=Math.max(0,1-Rt.t/Rt.dur),f=Rt.A*d*(Rt.t<.3?Rt.t/.3:1);nt.position.set(V(-1,1)*Math.min(2.5,f*.3),0,V(-1,1)*Math.min(2.5,f*.3)),Tr.uQC.value.set(Rt.P.x,Rt.P.z),Tr.uQT.value=Rt.t,Tr.uQA.value=Rt.M>=7.5?f:0,$i.sway(Rt.t,f),Fn=Math.max(Fn,f*.25),Rt.t>=Rt.dur&&(Nd(Rt.P.x,Rt.P.z,400),Rt=null,nt.position.set(0,0,0),Tr.uQA.value=0,$i.sway(0,0))}it.update(s),Si.update(s),jt.update(s);let r=0;for(let d of yn)d.dirty&&r<4&&ei-(d.lastCheck||0)>.15&&(d.lastCheck=ei,Py(d),r++);Lc.length&&Ly(Lc.shift()),Qe.flush(),an.flush(),yy(s),ei-Xc>1.3&&(Mi=Math.max(0,Mi-s*(50+Mi*.14))),oo>0&&ei-vd>.18&&(bi(Ic.clone().setY(Ic.y+6),`+${Ps(Math.round(oo))}`,"#ffe9a8"),oo=0,vd=ei);for(let d=0;d<Cs.length;d++){let f=Cs[d];if(f.t+=n,f.t>1.6){f.el.remove(),Cs.splice(d,1),d--;continue}let g=f.pos.clone();if(g.y+=f.t*14,g.project(Et),!(g.z<=1&&Math.abs(g.x)<=1.1&&Math.abs(g.y)<=1.1)){f.el.style.opacity=0;continue}f.el.style.transform=`translate(${(g.x*.5+.5)*innerWidth}px, ${(-g.y*.5+.5)*innerHeight}px) translate(-50%,-50%) scale(${f.t<.12?.6+f.t*3.4:1})`,f.el.style.opacity=f.t>1.1?(1.6-f.t)/.5:1}let a=Qt.target,o=Math.round(a.x/20)*20,l=Math.round(a.z/20)*20;(it.n>0||Nt.length>0||Rt||Qe.hi>=0||an.hi>=0||o!==vt.target.position.x||l!==vt.target.position.z)&&(Ac=(Ac+1)%(Zt?2:1),Ac||(St.shadowMap.needsUpdate=!0)),vt.target.position.set(o,0,l),vt.position.copy(vt.target.position).addScaledVector(ay,900);let h=St.getDrawingBufferSize(new se).y/(2*Math.tan(Mr.degToRad(Et.fov/2)));Si.mat.uniforms.uScale.value=h,jt.mat.uniforms.uScale.value=h,Rd.position.copy(Et.position),Tc+=n,Tc>.1&&(Tc=0,nf()),Qy();let u=performance.now();iy||St.render(In,Et),co.push(u-e),ho.push(performance.now()-u),ho.length>600&&ho.shift(),co.length>600&&co.shift(),requestAnimationFrame(lf)}["score","rank","bar","mult","rate","cnt","depth"].forEach(i=>gn[i]=be(`h-${i}`));nf();document.title=`${ye("smash",et.company)} | ${et.series}`;be("title").textContent=ye("smash",et.company);be("series").textContent=et.series;be("startTitle").textContent=ye("smash",et.company);be("startSeries").textContent=et.series;be("startTag").textContent=et.tagline;be("credit").textContent=ye("credit",et.place,et.company,Gd);Xy();be("nightBtn").onclick=()=>$c(!To);be("labelBtn").onclick=()=>{lo=!lo,be("labelBtn").classList.toggle("on",lo)};be("qBtn").textContent=ye("quality",ti[Ln].name);document.documentElement.lang=Lr;document.querySelectorAll("[data-t]").forEach(i=>{let e=ye(i.dataset.t);typeof e=="string"&&(i[i.dataset.attr||"innerHTML"]=e)});be("qBtn").onclick=()=>of((Ln+1)%ti.length);be("hubBtn").href=et.hub||"../";Bc&&setTimeout(()=>Os(ye("noGpu"),6e3),1500);be("muteBtn").onclick=sf;be("resetBtn").onclick=()=>location.reload();be("cardBtn").onclick=Yy;be("cardClose").onclick=()=>be("cardModal").hidden=!0;be("rankBtn").onclick=Ky;be("rankClose").onclick=()=>be("rankModal").hidden=!0;be("submitBtn").onclick=Jy;try{be("nick").value=localStorage.getItem("smash-nick")||""}catch{}be("rankAll").href=(et.hub||"../")+"#rank";be("startBtn").onclick=()=>{Dt.init(),be("start").classList.add("gone"),setTimeout(()=>Os(ye("hint"),3500),400)};window.__smash={dpr:()=>kn,perfLog:co,renderLog:ho,info:()=>({calls:St.info.render.calls,tris:St.info.render.triangles,progs:St.info.programs.length}),simTime:()=>ei,actV:(i,e)=>{let t=new C(...e);i==="quake"&&(Mo=9),Oc(t)},buildings:yn,blocks:Qe,debris:it,rubbleL:an,act:Oc,pickAt:Io,selectTool:So,setNight:$c,state:()=>({score:Ds,style:Mi,destroyedSite:kr,collapsedSite:Po,deepest:As,debris:it.n,blocks:Qe.live,rubble:an.live,fx:Nt.length})};function nv(){let i=new C(0,-500,0);Wc(i.x,i.y,i.z,1,.01),xo(i.x,i.y,i.z,1,.01),Si.spawn(0,-500,0,0,0,0,1,.01,[1,1,1],[1,1,1]),jt.spawn(0,-500,0,0,0,0,1,.01,[1,1,1],[1,1,1]);let e=[new ke(new It(1,1,1),new xt({map:jd})),new ke(new It(1,1,1),new xt({color:"#30353b",metalness:.5,roughness:.4})),new ke(new It(1,1,1),new fn({color:"#ffb36b"})),new sr(new gt().setFromPoints([i,i]),new _r({color:"#21d07a",dashSize:6,gapSize:4,depthTest:!1}))];e.push(tf()),e.forEach(t=>{t.position.copy(i),nt.add(t)}),vi.visible=!0,it.mesh.count=1,an.mesh.count=Math.max(1,an.mesh.count),Qe.mesh.count=Math.max(1,Qe.mesh.count),St.compile(In,Et),vi.visible=!1,it.mesh.count=0,e.forEach(t=>{nt.remove(t),t.traverse(n=>n.geometry&&n.geometry.dispose())})}nv();requestAnimationFrame(lf);})();
