(()=>{var dc="160",zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pf=0,sh=1,mf=2;var ja=1,gf=2,Yn=3,gi=0,He=1,En=2;var di=0,fi=1,Oi=2,rh=3,ah=4,_f=5,Li=100,xf=101,yf=102,oh=103,lh=104,vf=200,Mf=201,Sf=202,bf=203,xl=204,yl=205,Ef=206,wf=207,Tf=208,Af=209,Rf=210,Cf=211,Pf=212,Lf=213,If=214,Df=0,Uf=1,Nf=2,ya=3,Of=4,Ff=5,Bf=6,kf=7,zu=0,zf=1,Hf=2,pi=0,Vf=1,Gf=2,Wf=3,fc=4,Xf=5,qf=6;var Hu=300,ys=301,vs=302,vl=303,Ml=304,Qa=306,Sl=1e3,sn=1001,bl=1002,$e=1003,ch=1004;var Fo=1005;var cn=1006,Yf=1007;var Qs=1008;var mi=1009,$f=1010,Zf=1011,pc=1012,Vu=1013,hi=1014,ui=1015,tr=1016,Gu=1017,Wu=1018,Di=1020,Jf=1021,wn=1023,Kf=1024,jf=1025,Ui=1026,Ms=1027,Qf=1028,Xu=1029,tp=1030,qu=1031,Yu=1033,Bo=33776,ko=33777,zo=33778,Ho=33779,hh=35840,uh=35841,dh=35842,fh=35843,$u=36196,ph=37492,mh=37496,gh=37808,_h=37809,xh=37810,yh=37811,vh=37812,Mh=37813,Sh=37814,bh=37815,Eh=37816,wh=37817,Th=37818,Ah=37819,Rh=37820,Ch=37821,Vo=36492,Ph=36494,Lh=36495,ep=36283,Ih=36284,Dh=36285,Uh=36286;var va=2300,Ma=2301,Go=2302,Nh=2400,Oh=2401,Fh=2402;var Zu=3e3,Ni=3001,np=3200,ip=3201,Ju=0,sp=1,hn="",pe="srgb",Zn="srgb-linear",mc="display-p3",to="display-p3-linear",Sa="linear",he="srgb",ba="rec709",Ea="p3";var Zi=7680;var Bh=519,rp=512,ap=513,op=514,Ku=515,lp=516,cp=517,hp=518,up=519,kh=35044,Ge=35048;var zh="300 es",El=1035,$n=2e3,wa=2001,On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hh=1234567,qs=Math.PI/180,er=180/Math.PI;function Vi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function gc(i,t){return(i%t+t)%t}function dp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fp(i,t,e){return i!==t?(e-i)/(t-i):0}function Ys(i,t,e){return(1-e)*i+e*t}function pp(i,t,e,n){return Ys(i,t,1-Math.exp(-e*n))}function mp(i,t=1){return t-Math.abs(gc(i,t*2)-t)}function gp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function _p(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function yp(i,t){return i+Math.random()*(t-i)}function vp(i){return i*(.5-Math.random())}function Mp(i){i!==void 0&&(Hh=i);let t=Hh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sp(i){return i*qs}function bp(i){return i*er}function wl(i){return(i&i-1)===0&&i!==0}function Ep(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ta(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Es={DEG2RAD:qs,RAD2DEG:er,generateUUID:Vi,clamp:Te,euclideanModulo:gc,mapLinear:dp,inverseLerp:fp,lerp:Ys,damp:pp,pingpong:mp,smoothstep:gp,smootherstep:_p,randInt:xp,randFloat:yp,randFloatSpread:vp,seededRandom:Mp,degToRad:Sp,radToDeg:bp,isPowerOfTwo:wl,ceilPowerOfTwo:Ep,floorPowerOfTwo:Ta,setQuaternionFromProperEuler:wp,normalize:qe,denormalize:ds},st=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],_=s[4],b=s[7],R=s[2],S=s[5],A=s[8];return r[0]=a*x+o*y+l*R,r[3]=a*m+o*_+l*S,r[6]=a*p+o*b+l*A,r[1]=c*x+h*y+u*R,r[4]=c*m+h*_+u*S,r[7]=c*p+h*b+u*A,r[2]=d*x+f*y+g*R,r[5]=d*m+f*_+g*S,r[8]=d*p+f*b+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Wo.makeScale(t,e)),this}rotate(t){return this.premultiply(Wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wo=new Zt;function ju(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tp(){let i=Aa("canvas");return i.style.display="block",i}var Vh={};function $s(i){i in Vh||(Vh[i]=!0,console.warn(i))}var Gh=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wh=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gr={[Zn]:{transfer:Sa,primaries:ba,toReference:i=>i,fromReference:i=>i},[pe]:{transfer:he,primaries:ba,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[to]:{transfer:Sa,primaries:Ea,toReference:i=>i.applyMatrix3(Wh),fromReference:i=>i.applyMatrix3(Gh)},[mc]:{transfer:he,primaries:Ea,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wh),fromReference:i=>i.applyMatrix3(Gh).convertLinearToSRGB()}},Ap=new Set([Zn,to]),re={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ap.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Gr[t].toReference,s=Gr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Gr[i].primaries},getTransfer:function(i){return i===hn?Sa:Gr[i].transfer}};function _s(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,Ra=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=Aa("canvas")),Ji.width=t.width,Ji.height=t.height;let n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Aa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_s(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_s(e[n]/255)*255):e[n]=_s(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rp=0,Ca=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Vi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qo(s[a].image)):r.push(qo(s[a]))}else r=qo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cp=0,un=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=sn,s=sn,r=cn,a=Qs,o=wn,l=mi,c=i.DEFAULT_ANISOTROPY,h=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Vi(),this.name="",this.source=new Ca(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:($s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ni?pe:hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sl:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sl:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return $s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pe?Ni:Zu}set encoding(t){$s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ni?pe:hn}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Hu;un.DEFAULT_ANISOTROPY=1;var me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,b=(f+1)/2,R=(p+1)/2,S=(h+d)/4,A=(u+x)/4,U=(g+m)/4;return _>b&&_>R?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=S/n,r=A/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=U/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=U/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tl=class extends On{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&($s("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ni?pe:hn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new un(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ca(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Tl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Pa=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Al=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ve=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),S=Math.atan2(R,p*y);m=Math.sin(m*S)/R,o=Math.sin(o*S)/R}let b=o*y;if(l=l*m+d*b,c=c*m+f*b,h=h*m+g*b,u=u*m+x*b,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yo.copy(this).projectOnVector(t),this.sub(Yo)}reflect(t){return this.sub(Yo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yo=new C,Xh=new Ve,Kn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),Xr.subVectors(this.max,ks),Ki.subVectors(t.a,ks),ji.subVectors(t.b,ks),Qi.subVectors(t.c,ks),ri.subVectors(ji,Ki),ai.subVectors(Qi,ji),Ti.subVectors(Ki,Qi);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ti.z,Ti.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ti.z,0,-Ti.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ti.y,Ti.x,0];return!$o(e,Ki,ji,Qi,Xr)||(e=[1,0,0,0,1,0,0,0,1],!$o(e,Ki,ji,Qi,Xr))?!1:(qr.crossVectors(ri,ai),e=[qr.x,qr.y,qr.z],$o(e,Ki,ji,Qi,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Vn=[new C,new C,new C,new C,new C,new C,new C,new C],vn=new C,Wr=new Kn,Ki=new C,ji=new C,Qi=new C,ri=new C,ai=new C,Ti=new C,ks=new C,Xr=new C,qr=new C,Ai=new C;function $o(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ai.fromArray(i,r);let o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Pp=new Kn,zs=new C,Zo=new C,dn=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);let e=zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(Zo)),this.expandByPoint(zs.copy(t.center).sub(Zo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Gn=new C,Jo=new C,Yr=new C,oi=new C,Ko=new C,$r=new C,jo=new C,_i=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jo.copy(t).add(e).multiplyScalar(.5),Yr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(Jo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Yr),o=oi.dot(this.direction),l=-oi.dot(Yr),c=oi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jo).addScaledVector(Yr,d),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){Ko.subVectors(e,t),$r.subVectors(n,t),jo.crossVectors(Ko,$r);let a=this.direction.dot(jo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);let l=o*this.direction.dot($r.crossVectors(oi,$r));if(l<0)return null;let c=o*this.direction.dot(Ko.cross(oi));if(c<0||l+c>a)return null;let h=-o*oi.dot(jo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lp,t,Ip)}lookAt(t,e,n){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),li.crossVectors(n,en),li.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),li.crossVectors(n,en)),li.normalize(),Zr.crossVectors(en,li),s[0]=li.x,s[4]=Zr.x,s[8]=en.x,s[1]=li.y,s[5]=Zr.y,s[9]=en.y,s[2]=li.z,s[6]=Zr.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],b=n[11],R=n[15],S=s[0],A=s[4],U=s[8],M=s[12],E=s[1],N=s[5],X=s[9],W=s[13],L=s[2],O=s[6],k=s[10],K=s[14],J=s[3],Y=s[7],nt=s[11],rt=s[15];return r[0]=a*S+o*E+l*L+c*J,r[4]=a*A+o*N+l*O+c*Y,r[8]=a*U+o*X+l*k+c*nt,r[12]=a*M+o*W+l*K+c*rt,r[1]=h*S+u*E+d*L+f*J,r[5]=h*A+u*N+d*O+f*Y,r[9]=h*U+u*X+d*k+f*nt,r[13]=h*M+u*W+d*K+f*rt,r[2]=g*S+x*E+m*L+p*J,r[6]=g*A+x*N+m*O+p*Y,r[10]=g*U+x*X+m*k+p*nt,r[14]=g*M+x*W+m*K+p*rt,r[3]=y*S+_*E+b*L+R*J,r[7]=y*A+_*N+b*O+R*Y,r[11]=y*U+_*X+b*k+R*nt,r[15]=y*M+_*W+b*K+R*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+e*l*f-e*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],y=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,_=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,b=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,R=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,S=e*y+n*_+s*b+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/S;return t[0]=y*A,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,t[4]=_*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*A,t[8]=b*A,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*A,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*A,t[12]=R*A,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,y=l*c,_=l*h,b=l*u,R=n.x,S=n.y,A=n.z;return s[0]=(1-(x+p))*R,s[1]=(f+b)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(f-b)*S,s[5]=(1-(d+p))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(g+_)*A,s[9]=(m-y)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ts.set(s[0],s[1],s[2]).length(),a=ts.set(s[4],s[5],s[6]).length(),o=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);let c=1/r,h=1/a,u=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=$n){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,g;if(o===$n)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===wa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=$n){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*c,f=(n+s)*h,g,x;if(o===$n)g=(a+r)*u,x=-2*u;else if(o===wa)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ts=new C,Mn=new ae,Lp=new C(0,0,0),Ip=new C(1,1,1),li=new C,Zr=new C,en=new C,qh=new ae,Yh=new Ve,La=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};La.DEFAULT_ORDER="XYZ";var nr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dp=0,$h=new C,es=new Ve,Wn=new ae,Jr=new C,Hs=new C,Up=new C,Np=new Ve,Zh=new C(1,0,0),Jh=new C(0,1,0),Kh=new C(0,0,1),Op={type:"added"},Fp={type:"removed"},Ue=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new La,n=new Ve,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Zt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Zh,t)}rotateY(t){return this.rotateOnAxis(Jh,t)}rotateZ(t){return this.rotateOnAxis(Kh,t)}translateOnAxis(t,e){return $h.copy(t).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zh,t)}translateY(t){return this.translateOnAxis(Jh,t)}translateZ(t){return this.translateOnAxis(Kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Hs,Jr,this.up):Wn.lookAt(Jr,Hs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Wn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Op)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,Up),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ue.DEFAULT_UP=new C(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new C,Xn=new C,Qo=new C,qn=new C,ns=new C,is=new C,jh=new C,tl=new C,el=new C,nl=new C,Kr=!1,fs=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),Xn.subVectors(n,e),Qo.subVectors(t,e);let a=Sn.dot(Sn),o=Sn.dot(Xn),l=Sn.dot(Qo),c=Xn.dot(Xn),h=Xn.dot(Qo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(t,e,n,s,r,a,o,l){return Kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kr=!0),this.getInterpolation(t,e,n,s,r,a,o,l)}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),Xn.subVectors(t,e),Sn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),Sn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Kr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ns.subVectors(s,n),is.subVectors(r,n),tl.subVectors(t,n);let l=ns.dot(tl),c=is.dot(tl);if(l<=0&&c<=0)return e.copy(n);el.subVectors(t,s);let h=ns.dot(el),u=is.dot(el);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ns,a);nl.subVectors(t,r);let f=ns.dot(nl),g=is.dot(nl);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(is,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return jh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(jh,o);let p=1/(m+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},jr={h:0,s:0,l:0};function il(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=gc(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=il(a,r,t+1/3),this.g=il(a,r,t),this.b=il(a,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){let n=Qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}copyLinearToSRGB(t){return this.r=Xo(t.r),this.g=Xo(t.g),this.b=Xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return re.fromWorkingColorSpace(ke.copy(this),t),Math.round(Te(ke.r*255,0,255))*65536+Math.round(Te(ke.g*255,0,255))*256+Math.round(Te(ke.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=pe){re.fromWorkingColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(jr);let n=Ys(ci.h,jr.h,e),s=Ys(ci.s,jr.s,e),r=Ys(ci.l,jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new Ut;Ut.NAMES=Qu;var Bp=0,jn=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=fi,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=yl,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xl&&(n.blendSrc=this.blendSrc),this.blendDst!==yl&&(n.blendDst=this.blendDst),this.blendEquation!==Li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},fn=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new C,Qr=new st,ue=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kh&&(t.usage=this.usage),t}};var Ia=class extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Da=class extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}};var kp=0,ln=new ae,sl=new Ue,ss=new C,nn=new Kn,Vs=new Kn,Ie=new C,xe=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ju(t)?Da:Ia)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return sl.lookAt(t),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(nn.min,Vs.min),nn.expandByPoint(Ie),Ie.addVectors(nn.max,Vs.max),nn.expandByPoint(Ie)):(nn.expandByPoint(Vs.min),nn.expandByPoint(Vs.max))}nn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(t,c),Ie.add(ss)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<o;E++)c[E]=new C,h[E]=new C;let u=new C,d=new C,f=new C,g=new st,x=new st,m=new st,p=new C,y=new C;function _(E,N,X){u.fromArray(s,E*3),d.fromArray(s,N*3),f.fromArray(s,X*3),g.fromArray(a,E*2),x.fromArray(a,N*2),m.fromArray(a,X*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let W=1/(x.x*m.y-m.x*x.y);isFinite(W)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(W),y.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(W),c[E].add(p),c[N].add(p),c[X].add(p),h[E].add(y),h[N].add(y),h[X].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let E=0,N=b.length;E<N;++E){let X=b[E],W=X.start,L=X.count;for(let O=W,k=W+L;O<k;O+=3)_(n[O+0],n[O+1],n[O+2])}let R=new C,S=new C,A=new C,U=new C;function M(E){A.fromArray(r,E*3),U.copy(A);let N=c[E];R.copy(N),R.sub(A.multiplyScalar(A.dot(N))).normalize(),S.crossVectors(U,N);let W=S.dot(h[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=W}for(let E=0,N=b.length;E<N;++E){let X=b[E],W=X.start,L=X.count;for(let O=W,k=W+L;O<k;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qh=new ae,Ri=new _i,ta=new dn,tu=new C,rs=new C,as=new C,os=new C,rl=new C,ea=new C,na=new st,ia=new st,sa=new st,eu=new C,nu=new C,iu=new C,ra=new C,aa=new C,kt=class extends Ue{constructor(t=new xe,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(rl.fromBufferAttribute(u,t),a?ea.addScaledVector(rl,h):ea.addScaledVector(rl.sub(e),h))}e.add(ea)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(ta.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(ta,tu)===null||Ri.origin.distanceToSquared(tu)>(t.far-t.near)**2))&&(Qh.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,R=_;b<R;b+=3){let S=o.getX(b),A=o.getX(b+1),U=o.getX(b+2);s=oa(this,p,t,n,c,h,u,S,A,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);s=oa(this,a,t,n,c,h,u,y,_,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,R=_;b<R;b+=3){let S=b,A=b+1,U=b+2;s=oa(this,p,t,n,c,h,u,S,A,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,b=m+2;s=oa(this,a,t,n,c,h,u,y,_,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function zp(i,t,e,n,s,r,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===gi,o),l===null)return null;aa.copy(o),aa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(aa);return c<e.near||c>e.far?null:{distance:c,point:aa.clone(),object:i}}function oa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,rs),i.getVertexPosition(l,as),i.getVertexPosition(c,os);let h=zp(i,t,e,n,rs,as,os,ra);if(h){s&&(na.fromBufferAttribute(s,o),ia.fromBufferAttribute(s,l),sa.fromBufferAttribute(s,c),h.uv=fs.getInterpolation(ra,rs,as,os,na,ia,sa,new st)),r&&(na.fromBufferAttribute(r,o),ia.fromBufferAttribute(r,l),sa.fromBufferAttribute(r,c),h.uv1=fs.getInterpolation(ra,rs,as,os,na,ia,sa,new st),h.uv2=h.uv1),a&&(eu.fromBufferAttribute(a,o),nu.fromBufferAttribute(a,l),iu.fromBufferAttribute(a,c),h.normal=fs.getInterpolation(ra,rs,as,os,eu,nu,iu,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};fs.getNormal(rs,as,os,u.normal),h.face=u}return h}var De=class i extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(x,m,p,y,_,b,R,S,A,U,M){let E=b/A,N=R/U,X=b/2,W=R/2,L=S/2,O=A+1,k=U+1,K=0,J=0,Y=new C;for(let nt=0;nt<k;nt++){let rt=nt*N-W;for(let gt=0;gt<O;gt++){let q=gt*E-X;Y[x]=q*y,Y[m]=rt*_,Y[p]=L,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(gt/A),u.push(1-nt/U),K+=1}}for(let nt=0;nt<U;nt++)for(let rt=0;rt<A;rt++){let gt=d+rt+O*nt,q=d+rt+O*(nt+1),it=d+(rt+1)+O*(nt+1),_t=d+(rt+1)+O*nt;l.push(gt,q,_t),l.push(q,it,_t),J+=6}o.addGroup(f,J,M),f+=J,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ss(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=Ss(i[e]);for(let s in n)t[s]=n[s]}return t}function Hp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function td(i){return i.getRenderTarget()===null?i.outputColorSpace:re.workingColorSpace}var Vp={clone:Ss,merge:Ye},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=Hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ua=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ze=class extends Ua{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ls=-90,cs=1,Rl=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ze(ls,cs,t,e);s.layers=this.layers,this.add(s);let r=new ze(ls,cs,t,e);r.layers=this.layers,this.add(r);let a=new ze(ls,cs,t,e);a.layers=this.layers,this.add(a);let o=new ze(ls,cs,t,e);o.layers=this.layers,this.add(o);let l=new ze(ls,cs,t,e);l.layers=this.layers,this.add(l);let c=new ze(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Na=class extends un{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cl=class extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&($s("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ni?pe:hn),this.texture=new Na(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new De(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:di});r.uniforms.tEquirect.value=e;let a=new kt(s,r),o=e.minFilter;return e.minFilter===Qs&&(e.minFilter=cn),new Rl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},al=new C,Xp=new C,qp=new Zt,bn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=al.subVectors(n,e).cross(Xp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(al),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||qp.getNormalMatrix(t),s=this.coplanarPoint(al).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new dn,la=new C,ir=class{constructor(t=new bn,e=new bn,n=new bn,s=new bn,r=new bn,a=new bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-f,b-p).normalize(),n[1].setComponents(l+r,d+c,m+f,b+p).normalize(),n[2].setComponents(l+a,d+h,m+g,b+y).normalize(),n[3].setComponents(l-a,d-h,m-g,b-y).normalize(),n[4].setComponents(l-o,d-u,m-x,b-_).normalize(),e===$n)n[5].setComponents(l+o,d+u,m+x,b+_).normalize();else if(e===wa)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(la.x=s.normal.x>0?t.max.x:t.min.x,la.y=s.normal.y>0?t.max.y:t.min.y,la.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ed(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yp(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var xi=class i extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let _=0;_<c;_++){let b=_*u-r;g.push(b,-y,0),x.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let _=y+c*p,b=y+c*(p+1),R=y+1+c*(p+1),S=y+1+c*p;f.push(_,b,S),f.push(b,R,S)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},$p=`#ifdef USE_ALPHAHASH
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
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,em=`#ifdef USE_AOMAP
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
#endif`,tg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,eg=`#ifdef USE_MAP
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
}`,t0=`#if DEPTH_PACKING == 3200
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
}`,e0=`#define DISTANCE
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
}`,Gt={alphahash_fragment:$p,alphahash_pars_fragment:Zp,alphamap_fragment:Jp,alphamap_pars_fragment:Kp,alphatest_fragment:jp,alphatest_pars_fragment:Qp,aomap_fragment:tm,aomap_pars_fragment:em,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:am,iridescence_fragment:om,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:_m,cube_uv_reflection_fragment:xm,defaultnormal_vertex:ym,displacementmap_pars_vertex:vm,displacementmap_vertex:Mm,emissivemap_fragment:Sm,emissivemap_pars_fragment:bm,colorspace_fragment:Em,colorspace_pars_fragment:wm,envmap_fragment:Tm,envmap_common_pars_fragment:Am,envmap_pars_fragment:Rm,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:Hm,envmap_vertex:Pm,fog_vertex:Lm,fog_pars_vertex:Im,fog_fragment:Dm,fog_pars_fragment:Um,gradientmap_pars_fragment:Nm,lightmap_fragment:Om,lightmap_pars_fragment:Fm,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:km,lights_pars_begin:zm,lights_toon_fragment:Vm,lights_toon_pars_fragment:Gm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:qm,lights_physical_pars_fragment:Ym,lights_fragment_begin:$m,lights_fragment_maps:Zm,lights_fragment_end:Jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:tg,map_fragment:eg,map_pars_fragment:ng,map_particle_fragment:ig,map_particle_pars_fragment:sg,metalnessmap_fragment:rg,metalnessmap_pars_fragment:ag,morphcolor_vertex:og,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:vg,opaque_fragment:Mg,packing:Sg,premultiplied_alpha_fragment:bg,project_vertex:Eg,dithering_fragment:wg,dithering_pars_fragment:Tg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Ig,skinbase_vertex:Dg,skinning_pars_vertex:Ug,skinning_vertex:Ng,skinnormal_vertex:Og,specularmap_fragment:Fg,specularmap_pars_fragment:Bg,tonemapping_fragment:kg,tonemapping_pars_fragment:zg,transmission_fragment:Hg,transmission_pars_fragment:Vg,uv_pars_fragment:Gg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:$g,backgroundCube_vert:Zg,backgroundCube_frag:Jg,cube_vert:Kg,cube_frag:jg,depth_vert:Qg,depth_frag:t0,distanceRGBA_vert:e0,distanceRGBA_frag:n0,equirect_vert:i0,equirect_frag:s0,linedashed_vert:r0,linedashed_frag:a0,meshbasic_vert:o0,meshbasic_frag:l0,meshlambert_vert:c0,meshlambert_frag:h0,meshmatcap_vert:u0,meshmatcap_frag:d0,meshnormal_vert:f0,meshnormal_frag:p0,meshphong_vert:m0,meshphong_frag:g0,meshphysical_vert:_0,meshphysical_frag:x0,meshtoon_vert:y0,meshtoon_frag:v0,points_vert:M0,points_frag:S0,shadow_vert:b0,shadow_frag:E0,sprite_vert:w0,sprite_frag:T0},pt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Nn={basic:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ye([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ye([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ye([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ye([pt.points,pt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ye([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ye([pt.common,pt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ye([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ye([pt.sprite,pt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ye([pt.common,pt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ye([pt.lights,pt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Nn.physical={uniforms:Ye([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var ca={r:0,b:0,g:0};function A0(i,t,e,n,s,r,a){let o=new Ut(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(o,l):_&&_.isColor&&(x(_,1),y=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Qa)?(h===void 0&&(h=new kt(new De(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Ss(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=re.getTransfer(_.colorSpace)!==he,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new kt(new xi(2,2),new pn({name:"BackgroundMaterial",uniforms:Ss(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=re.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,p){m.getRGB(ca,td(i)),n.buffers.color.setClear(ca.r,ca.g,ca.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:g}}function R0(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(L,O,k,K,J){let Y=!1;if(a){let nt=x(K,k,O);c!==nt&&(c=nt,f(c.object)),Y=p(L,K,k,J),Y&&y(L,K,k,J)}else{let nt=O.wireframe===!0;(c.geometry!==K.id||c.program!==k.id||c.wireframe!==nt)&&(c.geometry=K.id,c.program=k.id,c.wireframe=nt,Y=!0)}J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,U(L,O,k,K),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,O,k){let K=k.wireframe===!0,J=o[L.id];J===void 0&&(J={},o[L.id]=J);let Y=J[O.id];Y===void 0&&(Y={},J[O.id]=Y);let nt=Y[K];return nt===void 0&&(nt=m(d()),Y[K]=nt),nt}function m(L){let O=[],k=[],K=[];for(let J=0;J<s;J++)O[J]=0,k[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:K,object:L,attributes:{},index:null}}function p(L,O,k,K){let J=c.attributes,Y=O.attributes,nt=0,rt=k.getAttributes();for(let gt in rt)if(rt[gt].location>=0){let it=J[gt],_t=Y[gt];if(_t===void 0&&(gt==="instanceMatrix"&&L.instanceMatrix&&(_t=L.instanceMatrix),gt==="instanceColor"&&L.instanceColor&&(_t=L.instanceColor)),it===void 0||it.attribute!==_t||_t&&it.data!==_t.data)return!0;nt++}return c.attributesNum!==nt||c.index!==K}function y(L,O,k,K){let J={},Y=O.attributes,nt=0,rt=k.getAttributes();for(let gt in rt)if(rt[gt].location>=0){let it=Y[gt];it===void 0&&(gt==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),gt==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));let _t={};_t.attribute=it,it&&it.data&&(_t.data=it.data),J[gt]=_t,nt++}c.attributes=J,c.attributesNum=nt,c.index=K}function _(){let L=c.newAttributes;for(let O=0,k=L.length;O<k;O++)L[O]=0}function b(L){R(L,0)}function R(L,O){let k=c.newAttributes,K=c.enabledAttributes,J=c.attributeDivisors;k[L]=1,K[L]===0&&(i.enableVertexAttribArray(L),K[L]=1),J[L]!==O&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),J[L]=O)}function S(){let L=c.newAttributes,O=c.enabledAttributes;for(let k=0,K=O.length;k<K;k++)O[k]!==L[k]&&(i.disableVertexAttribArray(k),O[k]=0)}function A(L,O,k,K,J,Y,nt){nt===!0?i.vertexAttribIPointer(L,O,k,J,Y):i.vertexAttribPointer(L,O,k,K,J,Y)}function U(L,O,k,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let J=K.attributes,Y=k.getAttributes(),nt=O.defaultAttributeValues;for(let rt in Y){let gt=Y[rt];if(gt.location>=0){let q=J[rt];if(q===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){let it=q.normalized,_t=q.itemSize,Tt=e.get(q);if(Tt===void 0)continue;let St=Tt.buffer,Dt=Tt.type,Ot=Tt.bytesPerElement,wt=n.isWebGL2===!0&&(Dt===i.INT||Dt===i.UNSIGNED_INT||q.gpuType===Vu);if(q.isInterleavedBufferAttribute){let Ft=q.data,I=Ft.stride,ct=q.offset;if(Ft.isInstancedInterleavedBuffer){for(let $=0;$<gt.locationSize;$++)R(gt.location+$,Ft.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let $=0;$<gt.locationSize;$++)b(gt.location+$);i.bindBuffer(i.ARRAY_BUFFER,St);for(let $=0;$<gt.locationSize;$++)A(gt.location+$,_t/gt.locationSize,Dt,it,I*Ot,(ct+_t/gt.locationSize*$)*Ot,wt)}else{if(q.isInstancedBufferAttribute){for(let Ft=0;Ft<gt.locationSize;Ft++)R(gt.location+Ft,q.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ft=0;Ft<gt.locationSize;Ft++)b(gt.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Ft=0;Ft<gt.locationSize;Ft++)A(gt.location+Ft,_t/gt.locationSize,Dt,it,_t*Ot,_t/gt.locationSize*Ft*Ot,wt)}}else if(nt!==void 0){let it=nt[rt];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(gt.location,it);break;case 3:i.vertexAttrib3fv(gt.location,it);break;case 4:i.vertexAttrib4fv(gt.location,it);break;default:i.vertexAttrib1fv(gt.location,it)}}}}S()}function M(){X();for(let L in o){let O=o[L];for(let k in O){let K=O[k];for(let J in K)g(K[J].object),delete K[J];delete O[k]}delete o[L]}}function E(L){if(o[L.id]===void 0)return;let O=o[L.id];for(let k in O){let K=O[k];for(let J in K)g(K[J].object),delete K[J];delete O[k]}delete o[L.id]}function N(L){for(let O in o){let k=o[O];if(k[L.id]===void 0)continue;let K=k[L.id];for(let J in K)g(K[J].object),delete K[J];delete k[L.id]}}function X(){W(),h=!0,c!==l&&(c=l,f(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:W,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:b,disableUnusedAttributes:S}}function C0(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function P0(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,b=a||t.has("OES_texture_float"),R=_&&b,S=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:S}}function L0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new bn,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,_=y*4,b=p.clippingState||null;l.value=b,b=h(g,d,_,f);for(let R=0;R!==_;++R)b[R]=e[R];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=f;_!==x;++_,b+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function I0(i){let t=new WeakMap;function e(a,o){return o===vl?a.mapping=ys:o===Ml&&(a.mapping=vs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===vl||o===Ml)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Cl(l.height/2);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Oa=class extends Ua{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ps=4,su=[.125,.215,.35,.446,.526,.582],Ii=20,ol=new Oa,ru=new Ut,ll=null,cl=0,hl=0,Pi=(1+Math.sqrt(5))/2,hs=1/Pi,au=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Pi,hs),new C(0,Pi,-hs),new C(hs,0,Pi),new C(-hs,0,Pi),new C(Pi,hs,0),new C(-Pi,hs,0)],Fa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ll,cl,hl),t.scissorTest=!1,ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:tr,format:wn,colorSpace:Zn,depthBuffer:!1},s=ou(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(r)),this._blurMaterial=U0(r,t,e)}return s}_compileMaterial(t){let e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,ol)}_sceneToCubeUV(t,e,n,s){let o=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ru),h.toneMapping=pi,h.autoClear=!1;let f=new fn({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new kt(new De,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(ru),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;ha(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ys||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ha(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ol)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=au[(s-1)%au.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new kt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ii-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let p=[],y=0;for(let A=0;A<Ii;++A){let U=A/x,M=Math.exp(-U*U/2);p.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let b=this._sizeLods[s],R=3*b*(s>_-ps?s-_+ps:0),S=4*(this._cubeSize-b);ha(e,R,S,3*b,2*b),l.setRenderTarget(e),l.render(u,ol)}};function D0(i){let t=[],e=[],n=[],s=i,r=i-ps+1+su.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ps?l=su[a-i+ps-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),_=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let S=0;S<f;S++){let A=S%3*2/3-1,U=S>2?0:-1,M=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];y.set(M,x*g*S),_.set(d,m*g*S);let E=[S,S,S,S,S,S];b.set(E,p*g*S)}let R=new xe;R.setAttribute("position",new ue(y,x)),R.setAttribute("uv",new ue(_,m)),R.setAttribute("faceIndex",new ue(b,p)),t.push(R),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ou(i,t,e){let n=new Jn(i,t,e);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function U0(i,t,e){let n=new Float32Array(Ii),s=new C(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_c(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function lu(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function cu(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

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
	`}function N0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===vl||l===Ml,h=l===ys||l===vs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Fa(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Fa(i));let d=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function O0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function F0(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,b=y.length;_<b;_+=3){let R=y[_+0],S=y[_+1],A=y[_+2];d.push(R,S,S,A,A,R)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,b=y.length/3-1;_<b;_+=3){let R=_+0,S=_+1,A=_+2;d.push(R,S,S,A,A,R)}}else return;let m=new(ju(d)?Da:Ia)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function B0(i,t,e,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){i.drawElements(r,g,o,f*l),e.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,x),e.update(g,r,x)}function d(f,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];e.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function k0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z0(i,t){return i[0]-t[0]}function H0(i,t){return Math.abs(t[1])-Math.abs(i[1])}function V0(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new me,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(t.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){X.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],U=0;y===!0&&(U=1),_===!0&&(U=2),b===!0&&(U=3);let M=h.attributes.position.count*U,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let N=new Float32Array(M*E*4*g),X=new Pa(N,M,E,g);X.type=ui,X.needsUpdate=!0;let W=U*4;for(let O=0;O<g;O++){let k=R[O],K=S[O],J=A[O],Y=M*E*4*O;for(let nt=0;nt<k.count;nt++){let rt=nt*W;y===!0&&(a.fromBufferAttribute(k,nt),N[Y+rt+0]=a.x,N[Y+rt+1]=a.y,N[Y+rt+2]=a.z,N[Y+rt+3]=0),_===!0&&(a.fromBufferAttribute(K,nt),N[Y+rt+4]=a.x,N[Y+rt+5]=a.y,N[Y+rt+6]=a.z,N[Y+rt+7]=0),b===!0&&(a.fromBufferAttribute(J,nt),N[Y+rt+8]=a.x,N[Y+rt+9]=a.y,N[Y+rt+10]=a.z,N[Y+rt+11]=J.itemSize===4?a.w:1)}}x={count:g,texture:X,size:new st(M,E)},r.set(h,x),h.addEventListener("dispose",L)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){let b=g[_];b[0]=_,b[1]=d[_]}g.sort(H0);for(let _=0;_<8;_++)_<f&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(z0);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let b=o[_],R=b[0],S=b[1];R!==Number.MAX_SAFE_INTEGER&&S?(x&&h.getAttribute("morphTarget"+_)!==x[R]&&h.setAttribute("morphTarget"+_,x[R]),m&&h.getAttribute("morphNormal"+_)!==m[R]&&h.setAttribute("morphNormal"+_,m[R]),s[_]=S,p+=S):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function G0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ba=class extends un{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ui,h!==Ui&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=hi),n===void 0&&h===Ms&&(n=Di),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},nd=new un,id=new Ba(1,1);id.compareFunction=Ku;var sd=new Pa,rd=new Al,ad=new Na,hu=[],uu=[],du=new Float32Array(16),fu=new Float32Array(9),pu=new Float32Array(4);function ws(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hu[s];if(r===void 0&&(r=new Float32Array(s),hu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function eo(i,t){let e=uu[t];e===void 0&&(e=new Int32Array(t),uu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function W0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function X0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Re(e,t)}}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Re(e,t)}}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Re(e,t)}}function $0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;pu.set(n),i.uniformMatrix2fv(this.addr,!1,pu),Re(e,n)}}function Z0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;fu.set(n),i.uniformMatrix3fv(this.addr,!1,fu),Re(e,n)}}function J0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;du.set(n),i.uniformMatrix4fv(this.addr,!1,du),Re(e,n)}}function K0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Re(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Re(e,t)}}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Re(e,t)}}function e_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function n_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Re(e,t)}}function i_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Re(e,t)}}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Re(e,t)}}function r_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?id:nd;e.setTexture2D(t||r,s)}function a_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rd,s)}function o_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ad,s)}function l_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||sd,s)}function c_(i){switch(i){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return $0;case 35675:return Z0;case 35676:return J0;case 5124:case 35670:return K0;case 35667:case 35671:return j0;case 35668:case 35672:return Q0;case 35669:case 35673:return t_;case 5125:return e_;case 36294:return n_;case 36295:return i_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return l_}}function h_(i,t){i.uniform1fv(this.addr,t)}function u_(i,t){let e=ws(t,this.size,2);i.uniform2fv(this.addr,e)}function d_(i,t){let e=ws(t,this.size,3);i.uniform3fv(this.addr,e)}function f_(i,t){let e=ws(t,this.size,4);i.uniform4fv(this.addr,e)}function p_(i,t){let e=ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function m_(i,t){let e=ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function g_(i,t){let e=ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function __(i,t){i.uniform1iv(this.addr,t)}function x_(i,t){i.uniform2iv(this.addr,t)}function y_(i,t){i.uniform3iv(this.addr,t)}function v_(i,t){i.uniform4iv(this.addr,t)}function M_(i,t){i.uniform1uiv(this.addr,t)}function S_(i,t){i.uniform2uiv(this.addr,t)}function b_(i,t){i.uniform3uiv(this.addr,t)}function E_(i,t){i.uniform4uiv(this.addr,t)}function w_(i,t,e){let n=this.cache,s=t.length,r=eo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||nd,r[a])}function T_(i,t,e){let n=this.cache,s=t.length,r=eo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||rd,r[a])}function A_(i,t,e){let n=this.cache,s=t.length,r=eo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ad,r[a])}function R_(i,t,e){let n=this.cache,s=t.length,r=eo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||sd,r[a])}function C_(i){switch(i){case 5126:return h_;case 35664:return u_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return __;case 35667:case 35671:return x_;case 35668:case 35672:return y_;case 35669:case 35673:return v_;case 5125:return M_;case 36294:return S_;case 36295:return b_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return w_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return R_}}var Pl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=c_(e.type)}},Ll=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=C_(e.type)}},Il=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ul=/(\w+)(\])?(\[|\.)?/g;function mu(i,t){i.seq.push(t),i.map[t.id]=t}function P_(i,t,e){let n=i.name,s=n.length;for(ul.lastIndex=0;;){let r=ul.exec(n),a=ul.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){mu(e,c===void 0?new Pl(o,i,t):new Ll(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Il(o),mu(e,u)),e=u}}}var xs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);P_(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function gu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var L_=37297,I_=0;function D_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function U_(i){let t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(i),n;switch(t===e?n="":t===Ea&&e===ba?n="LinearDisplayP3ToLinearSRGB":t===ba&&e===Ea&&(n="LinearSRGBToLinearDisplayP3"),i){case Zn:case to:return[n,"LinearTransferOETF"];case pe:case mc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _u(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+D_(i.getShaderSource(t),a)}else return s}function N_(i,t){let e=U_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function O_(i,t){let e;switch(t){case Vf:e="Linear";break;case Gf:e="Reinhard";break;case Wf:e="OptimizedCineon";break;case fc:e="ACESFilmic";break;case qf:e="AgX";break;case Xf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function F_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ms).join(`
`)}function B_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ms).join(`
`)}function k_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function z_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ms(i){return i!==""}function xu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var H_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(i){return i.replace(H_,G_)}var V_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function G_(i,t){let e=Gt[t];if(e===void 0){let n=V_.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Dl(e)}var W_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(i){return i.replace(W_,X_)}function X_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mu(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function q_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ja?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function Y_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ys:case vs:t="ENVMAP_TYPE_CUBE";break;case Qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function Z_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zu:t="ENVMAP_BLENDING_MULTIPLY";break;case zf:t="ENVMAP_BLENDING_MIX";break;case Hf:t="ENVMAP_BLENDING_ADD";break}return t}function J_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function K_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=q_(e),c=Y_(e),h=$_(e),u=Z_(e),d=J_(e),f=e.isWebGL2?"":F_(e),g=B_(e),x=k_(r),m=s.createProgram(),p,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ms).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ms).join(`
`),y.length>0&&(y+=`
`)):(p=[Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),y=[f,Mu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==pi?O_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,N_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),a=Dl(a),a=xu(a,e),a=yu(a,e),o=Dl(o),o=xu(o,e),o=yu(o,e),a=vu(a),o=vu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let b=_+p+a,R=_+y+o,S=gu(s,s.VERTEX_SHADER,b),A=gu(s,s.FRAGMENT_SHADER,R);s.attachShader(m,S),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(X){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(S).trim(),O=s.getShaderInfoLog(A).trim(),k=!0,K=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,S,A);else{let J=_u(s,S,"vertex"),Y=_u(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+J+`
`+Y)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(L===""||O==="")&&(K=!1);K&&(X.diagnostics={runnable:k,programLog:W,vertexShader:{log:L,prefix:p},fragmentShader:{log:O,prefix:y}})}s.deleteShader(S),s.deleteShader(A),M=new xs(s,m),E=z_(s,m)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,L_)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=I_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=A,this}var j_=0,Ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Nl(t),e.set(t,n)),n}},Nl=class{constructor(t){this.id=j_++,this.code=t,this.usedTimes=0}};function Q_(i,t,e,n,s,r,a){let o=new nr,l=new Ul,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,E,N,X,W){let L=X.fog,O=W.geometry,k=M.isMeshStandardMaterial?X.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||k),J=K&&K.mapping===Qa?K.image.height:null,Y=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let nt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,rt=nt!==void 0?nt.length:0,gt=0;O.morphAttributes.position!==void 0&&(gt=1),O.morphAttributes.normal!==void 0&&(gt=2),O.morphAttributes.color!==void 0&&(gt=3);let q,it,_t,Tt;if(Y){let We=Nn[Y];q=We.vertexShader,it=We.fragmentShader}else q=M.vertexShader,it=M.fragmentShader,l.update(M),_t=l.getVertexShaderID(M),Tt=l.getFragmentShaderID(M);let St=i.getRenderTarget(),Dt=W.isInstancedMesh===!0,Ot=W.isBatchedMesh===!0,wt=!!M.map,Ft=!!M.matcap,I=!!K,ct=!!M.aoMap,$=!!M.lightMap,ot=!!M.bumpMap,Z=!!M.normalMap,At=!!M.displacementMap,xt=!!M.emissiveMap,w=!!M.metalnessMap,v=!!M.roughnessMap,B=M.anisotropy>0,at=M.clearcoat>0,Q=M.iridescence>0,j=M.sheen>0,Et=M.transmission>0,mt=B&&!!M.anisotropyMap,vt=at&&!!M.clearcoatMap,Lt=at&&!!M.clearcoatNormalMap,zt=at&&!!M.clearcoatRoughnessMap,tt=Q&&!!M.iridescenceMap,qt=Q&&!!M.iridescenceThicknessMap,P=j&&!!M.sheenColorMap,et=j&&!!M.sheenRoughnessMap,ft=!!M.specularMap,lt=!!M.specularColorMap,Rt=!!M.specularIntensityMap,Yt=Et&&!!M.transmissionMap,Jt=Et&&!!M.thicknessMap,Wt=!!M.gradientMap,dt=!!M.alphaMap,D=M.alphaTest>0,ht=!!M.alphaHash,ut=!!M.extensions,It=!!O.attributes.uv1,Ct=!!O.attributes.uv2,jt=!!O.attributes.uv3,ee=pi;return M.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(ee=i.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:it,defines:M.defines,customVertexShaderID:_t,customFragmentShaderID:Tt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ot,instancing:Dt,instancingColor:Dt&&W.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Zn,map:wt,matcap:Ft,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:J,aoMap:ct,lightMap:$,bumpMap:ot,normalMap:Z,displacementMap:d&&At,emissiveMap:xt,normalMapObjectSpace:Z&&M.normalMapType===sp,normalMapTangentSpace:Z&&M.normalMapType===Ju,metalnessMap:w,roughnessMap:v,anisotropy:B,anisotropyMap:mt,clearcoat:at,clearcoatMap:vt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:zt,iridescence:Q,iridescenceMap:tt,iridescenceThicknessMap:qt,sheen:j,sheenColorMap:P,sheenRoughnessMap:et,specularMap:ft,specularColorMap:lt,specularIntensityMap:Rt,transmission:Et,transmissionMap:Yt,thicknessMap:Jt,gradientMap:Wt,opaque:M.transparent===!1&&M.blending===fi,alphaMap:dt,alphaTest:D,alphaHash:ht,combine:M.combine,mapUv:wt&&x(M.map.channel),aoMapUv:ct&&x(M.aoMap.channel),lightMapUv:$&&x(M.lightMap.channel),bumpMapUv:ot&&x(M.bumpMap.channel),normalMapUv:Z&&x(M.normalMap.channel),displacementMapUv:At&&x(M.displacementMap.channel),emissiveMapUv:xt&&x(M.emissiveMap.channel),metalnessMapUv:w&&x(M.metalnessMap.channel),roughnessMapUv:v&&x(M.roughnessMap.channel),anisotropyMapUv:mt&&x(M.anisotropyMap.channel),clearcoatMapUv:vt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:P&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:et&&x(M.sheenRoughnessMap.channel),specularMapUv:ft&&x(M.specularMap.channel),specularColorMapUv:lt&&x(M.specularColorMap.channel),specularIntensityMapUv:Rt&&x(M.specularIntensityMap.channel),transmissionMapUv:Yt&&x(M.transmissionMap.channel),thicknessMapUv:Jt&&x(M.thicknessMap.channel),alphaMapUv:dt&&x(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Z||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:Ct,vertexUv3s:jt,pointsUvs:W.isPoints===!0&&!!O.attributes.uv&&(wt||dt),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:W.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,useLegacyLights:i._useLegacyLights,decodeVideoTexture:wt&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===he,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===En,flipSided:M.side===He,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ut&&M.extensions.derivatives===!0,extensionFragDepth:ut&&M.extensions.fragDepth===!0,extensionDrawBuffers:ut&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)E.push(N),E.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(y(E,M),_(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function b(M){let E=g[M.type],N;if(E){let X=Nn[E];N=Vp.clone(X.uniforms)}else N=M.uniforms;return N}function R(M,E){let N;for(let X=0,W=c.length;X<W;X++){let L=c[X];if(L.cacheKey===E){N=L,++N.usedTimes;break}}return N===void 0&&(N=new K_(i,E,M,r),c.push(N)),N}function S(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:U}}function tx(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function ex(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Su(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||ex),n.length>1&&n.sort(d||Su),s.length>1&&s.sort(d||Su)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function nx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new bu,i.set(n,[a])):s>=r.length?(a=new bu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ix(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ut};break;case"SpotLight":e={position:new C,direction:new C,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function sx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var rx=0;function ax(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ox(i,t){let e=new ix,n=sx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,a=new ae,o=new ae;function l(h,u){let d=0,f=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let x=0,m=0,p=0,y=0,_=0,b=0,R=0,S=0,A=0,U=0,M=0;h.sort(ax);let E=u===!0?Math.PI:1;for(let X=0,W=h.length;X<W;X++){let L=h[X],O=L.color,k=L.intensity,K=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*k*E,f+=O.g*k*E,g+=O.b*k*E;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(L.sh.coefficients[Y],k);M++}else if(L.isDirectionalLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let nt=L.shadow,rt=n.get(L);rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,s.directionalShadow[x]=rt,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=L.shadow.matrix,b++}s.directional[x]=Y,x++}else if(L.isSpotLight){let Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(k*E),Y.distance=K,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,s.spot[p]=Y;let nt=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,nt.updateMatrices(L),L.castShadow&&U++),s.spotLightMatrix[p]=nt.matrix,L.castShadow){let rt=n.get(L);rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,s.spotShadow[p]=rt,s.spotShadowMap[p]=J,S++}p++}else if(L.isRectAreaLight){let Y=e.get(L);Y.color.copy(O).multiplyScalar(k),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),s.rectArea[y]=Y,y++}else if(L.isPointLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*E),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let nt=L.shadow,rt=n.get(L);rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,rt.shadowCameraNear=nt.camera.near,rt.shadowCameraFar=nt.camera.far,s.pointShadow[m]=rt,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=L.shadow.matrix,R++}s.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(k*E),Y.groundColor.copy(L.groundColor).multiplyScalar(k*E),s.hemi[_]=Y,_++}}y>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_FLOAT_1,s.rectAreaLTC2=pt.LTC_FLOAT_2):(s.rectAreaLTC1=pt.LTC_HALF_1,s.rectAreaLTC2=pt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_FLOAT_1,s.rectAreaLTC2=pt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_HALF_1,s.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==x||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==y||N.hemiLength!==_||N.numDirectionalShadows!==b||N.numPointShadows!==R||N.numSpotShadows!==S||N.numSpotMaps!==A||N.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=S+A-U,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=M,N.directionalLength=x,N.pointLength=m,N.spotLength=p,N.rectAreaLength=y,N.hemiLength=_,N.numDirectionalShadows=b,N.numPointShadows=R,N.numSpotShadows=S,N.numSpotMaps=A,N.numLightProbes=M,s.version=rx++)}function c(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let b=h[y];if(b.isDirectionalLight){let R=s.directional[d];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),d++}else if(b.isSpotLight){let R=s.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let R=s.rectArea[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(b.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let R=s.point[f];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let R=s.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function Eu(i,t){let e=new ox(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function lx(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Eu(i,t),e.set(r,[l])):a>=o.length?(l=new Eu(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ol=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=np,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fl=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},cx=`void main() {
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
}`;function ux(i,t,e){let n=new ir,s=new st,r=new st,a=new me,o=new Ol({depthPacking:ip}),l=new Fl,c={},h=e.maxTextureSize,u={[gi]:He,[He]:gi,[En]:En},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:cx,fragmentShader:hx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new xe;g.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let p=this.type;this.render=function(S,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let M=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),X=i.state;X.setBlending(di),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let W=p!==Yn&&this.type===Yn,L=p===Yn&&this.type!==Yn;for(let O=0,k=S.length;O<k;O++){let K=S[O],J=K.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Y=J.getFrameExtents();if(s.multiply(Y),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,J.mapSize.y=r.y)),J.map===null||W===!0||L===!0){let rt=this.type!==Yn?{minFilter:$e,magFilter:$e}:{};J.map!==null&&J.map.dispose(),J.map=new Jn(s.x,s.y,rt),J.map.texture.name=K.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let nt=J.getViewportCount();for(let rt=0;rt<nt;rt++){let gt=J.getViewport(rt);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),X.viewport(a),J.updateMatrices(K,rt),n=J.getFrustum(),b(A,U,J.camera,K,this.type)}J.isPointLightShadow!==!0&&this.type===Yn&&y(J,U),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,E,N)};function y(S,A){let U=t.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Jn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,U,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,U,f,x,null)}function _(S,A,U,M){let E=null,N=U.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)E=N;else if(E=U.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let X=E.uuid,W=A.uuid,L=c[X];L===void 0&&(L={},c[X]=L);let O=L[W];O===void 0&&(O=E.clone(),L[W]=O,A.addEventListener("dispose",R)),E=O}if(E.visible=A.visible,E.wireframe=A.wireframe,M===Yn?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:u[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let X=i.properties.get(E);X.light=U}return E}function b(S,A,U,M,E){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===Yn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,S.matrixWorld);let W=t.update(S),L=S.material;if(Array.isArray(L)){let O=W.groups;for(let k=0,K=O.length;k<K;k++){let J=O[k],Y=L[J.materialIndex];if(Y&&Y.visible){let nt=_(S,Y,M,E);S.onBeforeShadow(i,S,A,U,W,nt,J),i.renderBufferDirect(U,null,W,nt,S,J),S.onAfterShadow(i,S,A,U,W,nt,J)}}}else if(L.visible){let O=_(S,L,M,E);S.onBeforeShadow(i,S,A,U,W,O,null),i.renderBufferDirect(U,null,W,O,S,null),S.onAfterShadow(i,S,A,U,W,O,null)}}let X=S.children;for(let W=0,L=X.length;W<L;W++)b(X[W],A,U,M,E)}function R(S){S.target.removeEventListener("dispose",R);for(let U in c){let M=c[U],E=S.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function dx(i,t,e){let n=e.isWebGL2;function s(){let D=!1,ht=new me,ut=null,It=new me(0,0,0,0);return{setMask:function(Ct){ut!==Ct&&!D&&(i.colorMask(Ct,Ct,Ct,Ct),ut=Ct)},setLocked:function(Ct){D=Ct},setClear:function(Ct,jt,ee,Pe,We){We===!0&&(Ct*=Pe,jt*=Pe,ee*=Pe),ht.set(Ct,jt,ee,Pe),It.equals(ht)===!1&&(i.clearColor(Ct,jt,ee,Pe),It.copy(ht))},reset:function(){D=!1,ut=null,It.set(-1,0,0,0)}}}function r(){let D=!1,ht=null,ut=null,It=null;return{setTest:function(Ct){Ct?Ot(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(Ct){ht!==Ct&&!D&&(i.depthMask(Ct),ht=Ct)},setFunc:function(Ct){if(ut!==Ct){switch(Ct){case Df:i.depthFunc(i.NEVER);break;case Uf:i.depthFunc(i.ALWAYS);break;case Nf:i.depthFunc(i.LESS);break;case ya:i.depthFunc(i.LEQUAL);break;case Of:i.depthFunc(i.EQUAL);break;case Ff:i.depthFunc(i.GEQUAL);break;case Bf:i.depthFunc(i.GREATER);break;case kf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=Ct}},setLocked:function(Ct){D=Ct},setClear:function(Ct){It!==Ct&&(i.clearDepth(Ct),It=Ct)},reset:function(){D=!1,ht=null,ut=null,It=null}}}function a(){let D=!1,ht=null,ut=null,It=null,Ct=null,jt=null,ee=null,Pe=null,We=null;return{setTest:function(ce){D||(ce?Ot(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(ce){ht!==ce&&!D&&(i.stencilMask(ce),ht=ce)},setFunc:function(ce,Xe,Un){(ut!==ce||It!==Xe||Ct!==Un)&&(i.stencilFunc(ce,Xe,Un),ut=ce,It=Xe,Ct=Un)},setOp:function(ce,Xe,Un){(jt!==ce||ee!==Xe||Pe!==Un)&&(i.stencilOp(ce,Xe,Un),jt=ce,ee=Xe,Pe=Un)},setLocked:function(ce){D=ce},setClear:function(ce){We!==ce&&(i.clearStencil(ce),We=ce)},reset:function(){D=!1,ht=null,ut=null,It=null,Ct=null,jt=null,ee=null,Pe=null,We=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,b=null,R=null,S=null,A=null,U=null,M=new Ut(0,0,0),E=0,N=!1,X=null,W=null,L=null,O=null,k=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Y=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(nt)[1]),J=Y>=1):nt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),J=Y>=2);let rt=null,gt={},q=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),_t=new me().fromArray(q),Tt=new me().fromArray(it);function St(D,ht,ut,It){let Ct=new Uint8Array(4),jt=i.createTexture();i.bindTexture(D,jt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<ut;ee++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ht,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(ht+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return jt}let Dt={};Dt[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Dt[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Dt[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Dt[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ot(i.DEPTH_TEST),l.setFunc(ya),xt(!1),w(sh),Ot(i.CULL_FACE),Z(di);function Ot(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function wt(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Ft(D,ht){return f[D]!==ht?(i.bindFramebuffer(D,ht),f[D]=ht,n&&(D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ht),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ht)),!0):!1}function I(D,ht){let ut=x,It=!1;if(D)if(ut=g.get(ht),ut===void 0&&(ut=[],g.set(ht,ut)),D.isWebGLMultipleRenderTargets){let Ct=D.texture;if(ut.length!==Ct.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,ee=Ct.length;jt<ee;jt++)ut[jt]=i.COLOR_ATTACHMENT0+jt;ut.length=Ct.length,It=!0}}else ut[0]!==i.COLOR_ATTACHMENT0&&(ut[0]=i.COLOR_ATTACHMENT0,It=!0);else ut[0]!==i.BACK&&(ut[0]=i.BACK,It=!0);It&&(e.isWebGL2?i.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function ct(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let $={[Li]:i.FUNC_ADD,[xf]:i.FUNC_SUBTRACT,[yf]:i.FUNC_REVERSE_SUBTRACT};if(n)$[oh]=i.MIN,$[lh]=i.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&($[oh]=D.MIN_EXT,$[lh]=D.MAX_EXT)}let ot={[vf]:i.ZERO,[Mf]:i.ONE,[Sf]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[Rf]:i.SRC_ALPHA_SATURATE,[Tf]:i.DST_COLOR,[Ef]:i.DST_ALPHA,[bf]:i.ONE_MINUS_SRC_COLOR,[yl]:i.ONE_MINUS_SRC_ALPHA,[Af]:i.ONE_MINUS_DST_COLOR,[wf]:i.ONE_MINUS_DST_ALPHA,[Cf]:i.CONSTANT_COLOR,[Pf]:i.ONE_MINUS_CONSTANT_COLOR,[Lf]:i.CONSTANT_ALPHA,[If]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(D,ht,ut,It,Ct,jt,ee,Pe,We,ce){if(D===di){p===!0&&(wt(i.BLEND),p=!1);return}if(p===!1&&(Ot(i.BLEND),p=!0),D!==_f){if(D!==y||ce!==N){if((_!==Li||S!==Li)&&(i.blendEquation(i.FUNC_ADD),_=Li,S=Li),ce)switch(D){case fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oi:i.blendFunc(i.ONE,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Oi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,R=null,A=null,U=null,M.set(0,0,0),E=0,y=D,N=ce}return}Ct=Ct||ht,jt=jt||ut,ee=ee||It,(ht!==_||Ct!==S)&&(i.blendEquationSeparate($[ht],$[Ct]),_=ht,S=Ct),(ut!==b||It!==R||jt!==A||ee!==U)&&(i.blendFuncSeparate(ot[ut],ot[It],ot[jt],ot[ee]),b=ut,R=It,A=jt,U=ee),(Pe.equals(M)===!1||We!==E)&&(i.blendColor(Pe.r,Pe.g,Pe.b,We),M.copy(Pe),E=We),y=D,N=!1}function At(D,ht){D.side===En?wt(i.CULL_FACE):Ot(i.CULL_FACE);let ut=D.side===He;ht&&(ut=!ut),xt(ut),D.blending===fi&&D.transparent===!1?Z(di):Z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);let It=D.stencilWrite;c.setTest(It),It&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),B(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ot(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(D){X!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),X=D)}function w(D){D!==pf?(Ot(i.CULL_FACE),D!==W&&(D===sh?i.cullFace(i.BACK):D===mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),W=D}function v(D){D!==L&&(J&&i.lineWidth(D),L=D)}function B(D,ht,ut){D?(Ot(i.POLYGON_OFFSET_FILL),(O!==ht||k!==ut)&&(i.polygonOffset(ht,ut),O=ht,k=ut)):wt(i.POLYGON_OFFSET_FILL)}function at(D){D?Ot(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function Q(D){D===void 0&&(D=i.TEXTURE0+K-1),rt!==D&&(i.activeTexture(D),rt=D)}function j(D,ht,ut){ut===void 0&&(rt===null?ut=i.TEXTURE0+K-1:ut=rt);let It=gt[ut];It===void 0&&(It={type:void 0,texture:void 0},gt[ut]=It),(It.type!==D||It.texture!==ht)&&(rt!==ut&&(i.activeTexture(ut),rt=ut),i.bindTexture(D,ht||Dt[D]),It.type=D,It.texture=ht)}function Et(){let D=gt[rt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function mt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){_t.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),_t.copy(D))}function Yt(D){Tt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Tt.copy(D))}function Jt(D,ht){let ut=u.get(ht);ut===void 0&&(ut=new WeakMap,u.set(ht,ut));let It=ut.get(D);It===void 0&&(It=i.getUniformBlockIndex(ht,D.name),ut.set(D,It))}function Wt(D,ht){let It=u.get(ht).get(D);h.get(ht)!==It&&(i.uniformBlockBinding(ht,It,D.__bindingPointIndex),h.set(ht,It))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},rt=null,gt={},f={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,b=null,R=null,S=null,A=null,U=null,M=new Ut(0,0,0),E=0,N=!1,X=null,W=null,L=null,O=null,k=null,_t.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ot,disable:wt,bindFramebuffer:Ft,drawBuffers:I,useProgram:ct,setBlending:Z,setMaterial:At,setFlipSided:xt,setCullFace:w,setLineWidth:v,setPolygonOffset:B,setScissorTest:at,activeTexture:Q,bindTexture:j,unbindTexture:Et,compressedTexImage2D:mt,compressedTexImage3D:vt,texImage2D:ft,texImage3D:lt,updateUBOMapping:Jt,uniformBlockBinding:Wt,texStorage2D:P,texStorage3D:et,texSubImage2D:Lt,texSubImage3D:zt,compressedTexSubImage2D:tt,compressedTexSubImage3D:qt,scissor:Rt,viewport:Yt,reset:dt}}function fx(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):Aa("canvas")}function x(w,v,B,at){let Q=1;if((w.width>at||w.height>at)&&(Q=at/Math.max(w.width,w.height)),Q<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let j=v?Ta:Math.floor,Et=j(Q*w.width),mt=j(Q*w.height);u===void 0&&(u=g(Et,mt));let vt=B?g(Et,mt):u;return vt.width=Et,vt.height=mt,vt.getContext("2d").drawImage(w,0,0,Et,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Et+"x"+mt+")."),vt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return wl(w.width)&&wl(w.height)}function p(w){return o?!1:w.wrapS!==sn||w.wrapT!==sn||w.minFilter!==$e&&w.minFilter!==cn}function y(w,v){return w.generateMipmaps&&v&&w.minFilter!==$e&&w.minFilter!==cn}function _(w){i.generateMipmap(w)}function b(w,v,B,at,Q=!1){if(o===!1)return v;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=v;if(v===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),v===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RGBA){let Et=Q?Sa:re.getTransfer(at);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=Et===he?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function R(w,v,B){return y(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==$e&&w.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function S(w){return w===$e||w===ch||w===Fo?i.NEAREST:i.LINEAR}function A(w){let v=w.target;v.removeEventListener("dispose",A),M(v),v.isVideoTexture&&h.delete(v)}function U(w){let v=w.target;v.removeEventListener("dispose",U),N(v)}function M(w){let v=n.get(w);if(v.__webglInit===void 0)return;let B=w.source,at=d.get(B);if(at){let Q=at[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(w),Object.keys(at).length===0&&d.delete(B)}n.remove(w)}function E(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let B=w.source,at=d.get(B);delete at[v.__cacheKey],a.memory.textures--}function N(w){let v=w.texture,B=n.get(w),at=n.get(v);if(at.__webglTexture!==void 0&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(B.__webglFramebuffer[Q]))for(let j=0;j<B.__webglFramebuffer[Q].length;j++)i.deleteFramebuffer(B.__webglFramebuffer[Q][j]);else i.deleteFramebuffer(B.__webglFramebuffer[Q]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[Q])}else{if(Array.isArray(B.__webglFramebuffer))for(let Q=0;Q<B.__webglFramebuffer.length;Q++)i.deleteFramebuffer(B.__webglFramebuffer[Q]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,j=v.length;Q<j;Q++){let Et=n.get(v[Q]);Et.__webglTexture&&(i.deleteTexture(Et.__webglTexture),a.memory.textures--),n.remove(v[Q])}n.remove(v),n.remove(w)}let X=0;function W(){X=0}function L(){let w=X;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),X+=1,w}function O(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function k(w,v){let B=n.get(w);if(w.isVideoTexture&&At(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){let at=w.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(B,w,v);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function K(w,v){let B=n.get(w);if(w.version>0&&B.__version!==w.version){_t(B,w,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function J(w,v){let B=n.get(w);if(w.version>0&&B.__version!==w.version){_t(B,w,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function Y(w,v){let B=n.get(w);if(w.version>0&&B.__version!==w.version){Tt(B,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let nt={[Sl]:i.REPEAT,[sn]:i.CLAMP_TO_EDGE,[bl]:i.MIRRORED_REPEAT},rt={[$e]:i.NEAREST,[ch]:i.NEAREST_MIPMAP_NEAREST,[Fo]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Yf]:i.LINEAR_MIPMAP_NEAREST,[Qs]:i.LINEAR_MIPMAP_LINEAR},gt={[rp]:i.NEVER,[up]:i.ALWAYS,[ap]:i.LESS,[Ku]:i.LEQUAL,[op]:i.EQUAL,[hp]:i.GEQUAL,[lp]:i.GREATER,[cp]:i.NOTEQUAL};function q(w,v,B){if(B?(i.texParameteri(w,i.TEXTURE_WRAP_S,nt[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,nt[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,nt[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,rt[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,rt[v.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==sn||v.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,S(v.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,S(v.minFilter)),v.minFilter!==$e&&v.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,gt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let at=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===$e||v.minFilter!==Fo&&v.minFilter!==Qs||v.type===ui&&t.has("OES_texture_float_linear")===!1||o===!1&&v.type===tr&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(w,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function it(w,v){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));let at=v.source,Q=d.get(at);Q===void 0&&(Q={},d.set(at,Q));let j=O(v);if(j!==w.__cacheKey){Q[j]===void 0&&(Q[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[j].usedTimes++;let Et=Q[w.__cacheKey];Et!==void 0&&(Q[w.__cacheKey].usedTimes--,Et.usedTimes===0&&E(v)),w.__cacheKey=j,w.__webglTexture=Q[j].texture}return B}function _t(w,v,B){let at=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(at=i.TEXTURE_3D);let Q=it(w,v),j=v.source;e.bindTexture(at,w.__webglTexture,i.TEXTURE0+B);let Et=n.get(j);if(j.version!==Et.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);let mt=re.getPrimaries(re.workingColorSpace),vt=v.colorSpace===hn?null:re.getPrimaries(v.colorSpace),Lt=v.colorSpace===hn||mt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let zt=p(v)&&m(v.image)===!1,tt=x(v.image,zt,!1,s.maxTextureSize);tt=xt(v,tt);let qt=m(tt)||o,P=r.convert(v.format,v.colorSpace),et=r.convert(v.type),ft=b(v.internalFormat,P,et,v.colorSpace,v.isVideoTexture);q(at,v,qt);let lt,Rt=v.mipmaps,Yt=o&&v.isVideoTexture!==!0&&ft!==$u,Jt=Et.__version===void 0||Q===!0,Wt=R(v,tt,qt);if(v.isDepthTexture)ft=i.DEPTH_COMPONENT,o?v.type===ui?ft=i.DEPTH_COMPONENT32F:v.type===hi?ft=i.DEPTH_COMPONENT24:v.type===Di?ft=i.DEPTH24_STENCIL8:ft=i.DEPTH_COMPONENT16:v.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ui&&ft===i.DEPTH_COMPONENT&&v.type!==pc&&v.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=hi,et=r.convert(v.type)),v.format===Ms&&ft===i.DEPTH_COMPONENT&&(ft=i.DEPTH_STENCIL,v.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Di,et=r.convert(v.type))),Jt&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,ft,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,ft,tt.width,tt.height,0,P,et,null));else if(v.isDataTexture)if(Rt.length>0&&qt){Yt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Wt,ft,Rt[0].width,Rt[0].height);for(let dt=0,D=Rt.length;dt<D;dt++)lt=Rt[dt],Yt?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,lt.width,lt.height,P,et,lt.data):e.texImage2D(i.TEXTURE_2D,dt,ft,lt.width,lt.height,0,P,et,lt.data);v.generateMipmaps=!1}else Yt?(Jt&&e.texStorage2D(i.TEXTURE_2D,Wt,ft,tt.width,tt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,P,et,tt.data)):e.texImage2D(i.TEXTURE_2D,0,ft,tt.width,tt.height,0,P,et,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Yt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,ft,Rt[0].width,Rt[0].height,tt.depth);for(let dt=0,D=Rt.length;dt<D;dt++)lt=Rt[dt],v.format!==wn?P!==null?Yt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,lt.width,lt.height,tt.depth,P,lt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,ft,lt.width,lt.height,tt.depth,0,lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,lt.width,lt.height,tt.depth,P,et,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,ft,lt.width,lt.height,tt.depth,0,P,et,lt.data)}else{Yt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Wt,ft,Rt[0].width,Rt[0].height);for(let dt=0,D=Rt.length;dt<D;dt++)lt=Rt[dt],v.format!==wn?P!==null?Yt?e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,lt.width,lt.height,P,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,ft,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,lt.width,lt.height,P,et,lt.data):e.texImage2D(i.TEXTURE_2D,dt,ft,lt.width,lt.height,0,P,et,lt.data)}else if(v.isDataArrayTexture)Yt?(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,ft,tt.width,tt.height,tt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,P,et,tt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,ft,tt.width,tt.height,tt.depth,0,P,et,tt.data);else if(v.isData3DTexture)Yt?(Jt&&e.texStorage3D(i.TEXTURE_3D,Wt,ft,tt.width,tt.height,tt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,P,et,tt.data)):e.texImage3D(i.TEXTURE_3D,0,ft,tt.width,tt.height,tt.depth,0,P,et,tt.data);else if(v.isFramebufferTexture){if(Jt)if(Yt)e.texStorage2D(i.TEXTURE_2D,Wt,ft,tt.width,tt.height);else{let dt=tt.width,D=tt.height;for(let ht=0;ht<Wt;ht++)e.texImage2D(i.TEXTURE_2D,ht,ft,dt,D,0,P,et,null),dt>>=1,D>>=1}}else if(Rt.length>0&&qt){Yt&&Jt&&e.texStorage2D(i.TEXTURE_2D,Wt,ft,Rt[0].width,Rt[0].height);for(let dt=0,D=Rt.length;dt<D;dt++)lt=Rt[dt],Yt?e.texSubImage2D(i.TEXTURE_2D,dt,0,0,P,et,lt):e.texImage2D(i.TEXTURE_2D,dt,ft,P,et,lt);v.generateMipmaps=!1}else Yt?(Jt&&e.texStorage2D(i.TEXTURE_2D,Wt,ft,tt.width,tt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,P,et,tt)):e.texImage2D(i.TEXTURE_2D,0,ft,P,et,tt);y(v,qt)&&_(at),Et.__version=j.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Tt(w,v,B){if(v.image.length!==6)return;let at=it(w,v),Q=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);let j=n.get(Q);if(Q.version!==j.__version||at===!0){e.activeTexture(i.TEXTURE0+B);let Et=re.getPrimaries(re.workingColorSpace),mt=v.colorSpace===hn?null:re.getPrimaries(v.colorSpace),vt=v.colorSpace===hn||Et===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Lt=v.isCompressedTexture||v.image[0].isCompressedTexture,zt=v.image[0]&&v.image[0].isDataTexture,tt=[];for(let dt=0;dt<6;dt++)!Lt&&!zt?tt[dt]=x(v.image[dt],!1,!0,s.maxCubemapSize):tt[dt]=zt?v.image[dt].image:v.image[dt],tt[dt]=xt(v,tt[dt]);let qt=tt[0],P=m(qt)||o,et=r.convert(v.format,v.colorSpace),ft=r.convert(v.type),lt=b(v.internalFormat,et,ft,v.colorSpace),Rt=o&&v.isVideoTexture!==!0,Yt=j.__version===void 0||at===!0,Jt=R(v,qt,P);q(i.TEXTURE_CUBE_MAP,v,P);let Wt;if(Lt){Rt&&Yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,lt,qt.width,qt.height);for(let dt=0;dt<6;dt++){Wt=tt[dt].mipmaps;for(let D=0;D<Wt.length;D++){let ht=Wt[D];v.format!==wn?et!==null?Rt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D,0,0,ht.width,ht.height,et,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D,lt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D,0,0,ht.width,ht.height,et,ft,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D,lt,ht.width,ht.height,0,et,ft,ht.data)}}}else{Wt=v.mipmaps,Rt&&Yt&&(Wt.length>0&&Jt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,lt,tt[0].width,tt[0].height));for(let dt=0;dt<6;dt++)if(zt){Rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,tt[dt].width,tt[dt].height,et,ft,tt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,lt,tt[dt].width,tt[dt].height,0,et,ft,tt[dt].data);for(let D=0;D<Wt.length;D++){let ut=Wt[D].image[dt].image;Rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D+1,0,0,ut.width,ut.height,et,ft,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D+1,lt,ut.width,ut.height,0,et,ft,ut.data)}}else{Rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,et,ft,tt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,lt,et,ft,tt[dt]);for(let D=0;D<Wt.length;D++){let ht=Wt[D];Rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D+1,0,0,et,ft,ht.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,D+1,lt,et,ft,ht.image[dt])}}}y(v,P)&&_(i.TEXTURE_CUBE_MAP),j.__version=Q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function St(w,v,B,at,Q,j){let Et=r.convert(B.format,B.colorSpace),mt=r.convert(B.type),vt=b(B.internalFormat,Et,mt,B.colorSpace);if(!n.get(v).__hasExternalTextures){let zt=Math.max(1,v.width>>j),tt=Math.max(1,v.height>>j);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,vt,zt,tt,v.depth,0,Et,mt,null):e.texImage2D(Q,j,vt,zt,tt,0,Et,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Z(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,Q,n.get(B).__webglTexture,0,ot(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,Q,n.get(B).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(w,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer&&!v.stencilBuffer){let at=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||Z(v)){let Q=v.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ui?at=i.DEPTH_COMPONENT32F:Q.type===hi&&(at=i.DEPTH_COMPONENT24));let j=ot(v);Z(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,at,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,j,at,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,at,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(v.depthBuffer&&v.stencilBuffer){let at=ot(v);B&&Z(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,i.DEPTH24_STENCIL8,v.width,v.height):Z(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{let at=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Q=0;Q<at.length;Q++){let j=at[Q],Et=r.convert(j.format,j.colorSpace),mt=r.convert(j.type),vt=b(j.internalFormat,Et,mt,j.colorSpace),Lt=ot(v);B&&Z(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,vt,v.width,v.height):Z(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,vt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,vt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);let at=n.get(v.depthTexture).__webglTexture,Q=ot(v);if(v.depthTexture.format===Ui)Z(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(v.depthTexture.format===Ms)Z(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function wt(w){let v=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ot(v.__webglFramebuffer,w)}else if(B){v.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[at]),v.__webglDepthbuffer[at]=i.createRenderbuffer(),Dt(v.__webglDepthbuffer[at],w,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Dt(v.__webglDepthbuffer,w,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(w,v,B){let at=n.get(w);v!==void 0&&St(at.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&wt(w)}function I(w){let v=w.texture,B=n.get(w),at=n.get(v);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=v.version,a.memory.textures++);let Q=w.isWebGLCubeRenderTarget===!0,j=w.isWebGLMultipleRenderTargets===!0,Et=m(w)||o;if(Q){B.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(o&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[mt]=[];for(let vt=0;vt<v.mipmaps.length;vt++)B.__webglFramebuffer[mt][vt]=i.createFramebuffer()}else B.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let mt=0;mt<v.mipmaps.length;mt++)B.__webglFramebuffer[mt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(j)if(s.drawBuffers){let mt=w.texture;for(let vt=0,Lt=mt.length;vt<Lt;vt++){let zt=n.get(mt[vt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Z(w)===!1){let mt=j?v:[v];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let vt=0;vt<mt.length;vt++){let Lt=mt[vt];B.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[vt]);let zt=r.convert(Lt.format,Lt.colorSpace),tt=r.convert(Lt.type),qt=b(Lt.internalFormat,zt,tt,Lt.colorSpace,w.isXRRenderTarget===!0),P=ot(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,P,qt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,B.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),q(i.TEXTURE_CUBE_MAP,v,Et);for(let mt=0;mt<6;mt++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)St(B.__webglFramebuffer[mt][vt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,vt);else St(B.__webglFramebuffer[mt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);y(v,Et)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(j){let mt=w.texture;for(let vt=0,Lt=mt.length;vt<Lt;vt++){let zt=mt[vt],tt=n.get(zt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),q(i.TEXTURE_2D,zt,Et),St(B.__webglFramebuffer,w,zt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),y(zt,Et)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?mt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(mt,at.__webglTexture),q(mt,v,Et),o&&v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)St(B.__webglFramebuffer[vt],w,v,i.COLOR_ATTACHMENT0,mt,vt);else St(B.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,mt,0);y(v,Et)&&_(mt),e.unbindTexture()}w.depthBuffer&&wt(w)}function ct(w){let v=m(w)||o,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let at=0,Q=B.length;at<Q;at++){let j=B[at];if(y(j,v)){let Et=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,mt=n.get(j).__webglTexture;e.bindTexture(Et,mt),_(Et),e.unbindTexture()}}}function $(w){if(o&&w.samples>0&&Z(w)===!1){let v=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,at=w.height,Q=i.COLOR_BUFFER_BIT,j=[],Et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(w),vt=w.isWebGLMultipleRenderTargets===!0;if(vt)for(let Lt=0;Lt<v.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Lt=0;Lt<v.length;Lt++){j.push(i.COLOR_ATTACHMENT0+Lt),w.depthBuffer&&j.push(Et);let zt=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(zt===!1&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),vt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[Lt]),zt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Et]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Et])),vt){let tt=n.get(v[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,B,at,0,0,B,at,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Lt=0;Lt<v.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[Lt]);let zt=n.get(v[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}}function ot(w){return Math.min(s.maxSamples,w.samples)}function Z(w){let v=n.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(w){let v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function xt(w,v){let B=w.colorSpace,at=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===El||B!==Zn&&B!==hn&&(re.getTransfer(B)===he?o===!1?t.has("EXT_sRGB")===!0&&at===wn?(w.format=El,w.minFilter=cn,w.generateMipmaps=!1):v=Ra.sRGBToLinear(v):(at!==wn||Q!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}this.allocateTextureUnit=L,this.resetTextureUnits=W,this.setTexture2D=k,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=Ft,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Z}function px(i,t,e){let n=e.isWebGL2;function s(r,a=hn){let o,l=re.getTransfer(a);if(r===mi)return i.UNSIGNED_BYTE;if(r===Gu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Wu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===$f)return i.BYTE;if(r===Zf)return i.SHORT;if(r===pc)return i.UNSIGNED_SHORT;if(r===Vu)return i.INT;if(r===hi)return i.UNSIGNED_INT;if(r===ui)return i.FLOAT;if(r===tr)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Jf)return i.ALPHA;if(r===wn)return i.RGBA;if(r===Kf)return i.LUMINANCE;if(r===jf)return i.LUMINANCE_ALPHA;if(r===Ui)return i.DEPTH_COMPONENT;if(r===Ms)return i.DEPTH_STENCIL;if(r===El)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Qf)return i.RED;if(r===Xu)return i.RED_INTEGER;if(r===tp)return i.RG;if(r===qu)return i.RG_INTEGER;if(r===Yu)return i.RGBA_INTEGER;if(r===Bo||r===ko||r===zo||r===Ho)if(l===he)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Bo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Bo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ko)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ho)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hh||r===uh||r===dh||r===fh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===hh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$u)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ph||r===mh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ph)return l===he?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===mh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gh||r===_h||r===xh||r===yh||r===vh||r===Mh||r===Sh||r===bh||r===Eh||r===wh||r===Th||r===Ah||r===Rh||r===Ch)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===gh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_h)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Eh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Th)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ah)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ch)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vo||r===Ph||r===Lh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Vo)return l===he?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ph)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ep||r===Ih||r===Dh||r===Uh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Vo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ih)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Di?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Bl=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Je=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},mx={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kl=class extends On{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=e.getContextAttributes(),m=null,p=null,y=[],_=[],b=new st,R=null,S=new ze;S.layers.enable(1),S.viewport=new me;let A=new ze;A.layers.enable(2),A.viewport=new me;let U=[S,A],M=new Bl;M.layers.enable(1),M.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let it=y[q];return it===void 0&&(it=new Zs,y[q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(q){let it=y[q];return it===void 0&&(it=new Zs,y[q]=it),it.getGripSpace()},this.getHand=function(q){let it=y[q];return it===void 0&&(it=new Zs,y[q]=it),it.getHandSpace()};function X(q){let it=_.indexOf(q.inputSource);if(it===-1)return;let _t=y[it];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",L);for(let q=0;q<y.length;q++){let it=_[q];it!==null&&(_[q]=null,y[q].disconnect(it))}E=null,N=null,t.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",W),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(b),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let it={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Jn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let it=null,_t=null,Tt=null;x.depth&&(Tt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=x.stencil?Ms:Ui,_t=x.stencil?Di:hi);let St={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(St),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new Jn(d.textureWidth,d.textureHeight,{format:wn,type:mi,depthTexture:new Ba(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Dt=t.properties.get(p);Dt.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(q){for(let it=0;it<q.removed.length;it++){let _t=q.removed[it],Tt=_.indexOf(_t);Tt>=0&&(_[Tt]=null,y[Tt].disconnect(_t))}for(let it=0;it<q.added.length;it++){let _t=q.added[it],Tt=_.indexOf(_t);if(Tt===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=_.length){_.push(_t),Tt=Dt;break}else if(_[Dt]===null){_[Dt]=_t,Tt=Dt;break}if(Tt===-1)break}let St=y[Tt];St&&St.connect(_t)}}let O=new C,k=new C;function K(q,it,_t){O.setFromMatrixPosition(it.matrixWorld),k.setFromMatrixPosition(_t.matrixWorld);let Tt=O.distanceTo(k),St=it.projectionMatrix.elements,Dt=_t.projectionMatrix.elements,Ot=St[14]/(St[10]-1),wt=St[14]/(St[10]+1),Ft=(St[9]+1)/St[5],I=(St[9]-1)/St[5],ct=(St[8]-1)/St[0],$=(Dt[8]+1)/Dt[0],ot=Ot*ct,Z=Ot*$,At=Tt/(-ct+$),xt=At*-ct;it.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(xt),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let w=Ot+At,v=wt+At,B=ot-xt,at=Z+(Tt-xt),Q=Ft*wt/v*w,j=I*wt/v*w;q.projectionMatrix.makePerspective(B,at,Q,j,w,v),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function J(q,it){it===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(it.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;M.near=A.near=S.near=q.near,M.far=A.far=S.far=q.far,(E!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,N=M.far);let it=q.parent,_t=M.cameras;J(M,it);for(let Tt=0;Tt<_t.length;Tt++)J(_t[Tt],it);_t.length===2?K(M,S,A):M.projectionMatrix.copy(S.projectionMatrix),Y(q,M,it)};function Y(q,it,_t){_t===null?q.matrix.copy(it.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(it.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=er*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)};let nt=null;function rt(q,it){if(h=it.getViewerPose(c||a),g=it,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let Tt=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,Tt=!0);for(let St=0;St<_t.length;St++){let Dt=_t[St],Ot=null;if(f!==null)Ot=f.getViewport(Dt);else{let Ft=u.getViewSubImage(d,Dt);Ot=Ft.viewport,St===0&&(t.setRenderTargetTextures(p,Ft.colorTexture,d.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(p))}let wt=U[St];wt===void 0&&(wt=new ze,wt.layers.enable(St),wt.viewport=new me,U[St]=wt),wt.matrix.fromArray(Dt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Dt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),St===0&&(M.matrix.copy(wt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Tt===!0&&M.cameras.push(wt)}}for(let _t=0;_t<y.length;_t++){let Tt=_[_t],St=y[_t];Tt!==null&&St!==void 0&&St.update(Tt,it,c||a)}nt&&nt(q,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let gt=new ed;gt.setAnimationLoop(rt),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}};function gx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,td(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=t.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _x(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let b=_.program;n.uniformBlockBinding(y,b)}function c(y,_){let b=s[y.id];b===void 0&&(g(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));let R=_.program;n.updateUBOMapping(y,R);let S=t.render.frame;r[y.id]!==S&&(d(y),r[y.id]=S)}function h(y){let _=u();y.__bindingPointIndex=_;let b=i.createBuffer(),R=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],b=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,A=b.length;S<A;S++){let U=Array.isArray(b[S])?b[S]:[b[S]];for(let M=0,E=U.length;M<E;M++){let N=U[M];if(f(N,S,M,R)===!0){let X=N.__offset,W=Array.isArray(N.value)?N.value:[N.value],L=0;for(let O=0;O<W.length;O++){let k=W[O],K=x(k);typeof k=="number"||typeof k=="boolean"?(N.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,X+L,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=0,N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=0,N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=0):(k.toArray(N.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,b,R){let S=y.value,A=_+"_"+b;if(R[A]===void 0)return typeof S=="number"||typeof S=="boolean"?R[A]=S:R[A]=S.clone(),!0;{let U=R[A];if(typeof S=="number"||typeof S=="boolean"){if(U!==S)return R[A]=S,!0}else if(U.equals(S)===!1)return U.copy(S),!0}return!1}function g(y){let _=y.uniforms,b=0,R=16;for(let A=0,U=_.length;A<U;A++){let M=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,N=M.length;E<N;E++){let X=M[E],W=Array.isArray(X.value)?X.value:[X.value];for(let L=0,O=W.length;L<O;L++){let k=W[L],K=x(k),J=b%R;J!==0&&R-J<K.boundary&&(b+=R-J),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=b,b+=K.storage}}}let S=b%R;return S>0&&(b+=R-S),y.__size=b,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var sr=class{constructor(t={}){let{canvas:e=Tp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;let _=this,b=!1,R=0,S=0,A=null,U=-1,M=null,E=new me,N=new me,X=null,W=new Ut(0),L=0,O=e.width,k=e.height,K=1,J=null,Y=null,nt=new me(0,0,O,k),rt=new me(0,0,O,k),gt=!1,q=new ir,it=!1,_t=!1,Tt=null,St=new ae,Dt=new st,Ot=new C,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ft(){return A===null?K:1}let I=n;function ct(T,F){for(let V=0;V<T.length;V++){let G=T[V],H=e.getContext(G,F);if(H!==null)return H}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dc}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",ht,!1),I===null){let F=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&F.shift(),I=ct(F,T),I===null)throw ct(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,ot,Z,At,xt,w,v,B,at,Q,j,Et,mt,vt,Lt,zt,tt,qt,P,et,ft,lt,Rt,Yt;function Jt(){$=new O0(I),ot=new P0(I,$,t),$.init(ot),lt=new px(I,$,ot),Z=new dx(I,$,ot),At=new k0(I),xt=new tx,w=new fx(I,$,Z,xt,ot,lt,At),v=new I0(_),B=new N0(_),at=new Yp(I,ot),Rt=new R0(I,$,at,ot),Q=new F0(I,at,At,Rt),j=new G0(I,Q,at,At),P=new V0(I,ot,w),zt=new L0(xt),Et=new Q_(_,v,B,$,ot,Rt,zt),mt=new gx(_,xt),vt=new nx,Lt=new lx($,ot),qt=new A0(_,v,B,Z,j,d,l),tt=new ux(_,j,ot),Yt=new _x(I,At,ot,Z),et=new C0(I,$,At,ot),ft=new B0(I,$,At,ot),At.programs=Et.programs,_.capabilities=ot,_.extensions=$,_.properties=xt,_.renderLists=vt,_.shadowMap=tt,_.state=Z,_.info=At}Jt();let Wt=new kl(_,I);this.xr=Wt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(O,k,!1))},this.getSize=function(T){return T.set(O,k)},this.setSize=function(T,F,V=!0){if(Wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,k=F,e.width=Math.floor(T*K),e.height=Math.floor(F*K),V===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(O*K,k*K).floor()},this.setDrawingBufferSize=function(T,F,V){O=T,k=F,K=V,e.width=Math.floor(T*V),e.height=Math.floor(F*V),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(nt)},this.setViewport=function(T,F,V,G){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,F,V,G),Z.viewport(E.copy(nt).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy(rt)},this.setScissor=function(T,F,V,G){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,F,V,G),Z.scissor(N.copy(rt).multiplyScalar(K).floor())},this.getScissorTest=function(){return gt},this.setScissorTest=function(T){Z.setScissorTest(gt=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(T=!0,F=!0,V=!0){let G=0;if(T){let H=!1;if(A!==null){let Mt=A.texture.format;H=Mt===Yu||Mt===qu||Mt===Xu}if(H){let Mt=A.texture.type,Pt=Mt===mi||Mt===hi||Mt===pc||Mt===Di||Mt===Gu||Mt===Wu,Nt=qt.getClearColor(),Bt=qt.getClearAlpha(),Xt=Nt.r,Ht=Nt.g,Vt=Nt.b;Pt?(f[0]=Xt,f[1]=Ht,f[2]=Vt,f[3]=Bt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Xt,g[1]=Ht,g[2]=Vt,g[3]=Bt,I.clearBufferiv(I.COLOR,0,g))}else G|=I.COLOR_BUFFER_BIT}F&&(G|=I.DEPTH_BUFFER_BIT),V&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),vt.dispose(),Lt.dispose(),xt.dispose(),v.dispose(),B.dispose(),j.dispose(),Rt.dispose(),Yt.dispose(),Et.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",We),Wt.removeEventListener("sessionend",ce),Tt&&(Tt.dispose(),Tt=null),Xe.stop()};function dt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let T=At.autoReset,F=tt.enabled,V=tt.autoUpdate,G=tt.needsUpdate,H=tt.type;Jt(),At.autoReset=T,tt.enabled=F,tt.autoUpdate=V,tt.needsUpdate=G,tt.type=H}function ht(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ut(T){let F=T.target;F.removeEventListener("dispose",ut),It(F)}function It(T){Ct(T),xt.remove(T)}function Ct(T){let F=xt.get(T).programs;F!==void 0&&(F.forEach(function(V){Et.releaseProgram(V)}),T.isShaderMaterial&&Et.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,V,G,H,Mt){F===null&&(F=wt);let Pt=H.isMesh&&H.matrixWorld.determinant()<0,Nt=hf(T,F,V,G,H);Z.setMaterial(G,Pt);let Bt=V.index,Xt=1;if(G.wireframe===!0){if(Bt=Q.getWireframeAttribute(V),Bt===void 0)return;Xt=2}let Ht=V.drawRange,Vt=V.attributes.position,Me=Ht.start*Xt,tn=(Ht.start+Ht.count)*Xt;Mt!==null&&(Me=Math.max(Me,Mt.start*Xt),tn=Math.min(tn,(Mt.start+Mt.count)*Xt)),Bt!==null?(Me=Math.max(Me,0),tn=Math.min(tn,Bt.count)):Vt!=null&&(Me=Math.max(Me,0),tn=Math.min(tn,Vt.count));let Le=tn-Me;if(Le<0||Le===1/0)return;Rt.setup(H,G,Nt,V,Bt);let Hn,ge=et;if(Bt!==null&&(Hn=at.get(Bt),ge=ft,ge.setIndex(Hn)),H.isMesh)G.wireframe===!0?(Z.setLineWidth(G.wireframeLinewidth*Ft()),ge.setMode(I.LINES)):ge.setMode(I.TRIANGLES);else if(H.isLine){let $t=G.linewidth;$t===void 0&&($t=1),Z.setLineWidth($t*Ft()),H.isLineSegments?ge.setMode(I.LINES):H.isLineLoop?ge.setMode(I.LINE_LOOP):ge.setMode(I.LINE_STRIP)}else H.isPoints?ge.setMode(I.POINTS):H.isSprite&&ge.setMode(I.TRIANGLES);if(H.isBatchedMesh)ge.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ge.renderInstances(Me,Le,H.count);else if(V.isInstancedBufferGeometry){let $t=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Do=Math.min(V.instanceCount,$t);ge.renderInstances(Me,Le,Do)}else ge.render(Me,Le)};function jt(T,F,V){T.transparent===!0&&T.side===En&&T.forceSinglePass===!1?(T.side=He,T.needsUpdate=!0,Vr(T,F,V),T.side=gi,T.needsUpdate=!0,Vr(T,F,V),T.side=En):Vr(T,F,V)}this.compile=function(T,F,V=null){V===null&&(V=T),m=Lt.get(V),m.init(),y.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==V&&T.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights);let G=new Set;return T.traverse(function(H){let Mt=H.material;if(Mt)if(Array.isArray(Mt))for(let Pt=0;Pt<Mt.length;Pt++){let Nt=Mt[Pt];jt(Nt,V,H),G.add(Nt)}else jt(Mt,V,H),G.add(Mt)}),y.pop(),m=null,G},this.compileAsync=function(T,F,V=null){let G=this.compile(T,F,V);return new Promise(H=>{function Mt(){if(G.forEach(function(Pt){xt.get(Pt).currentProgram.isReady()&&G.delete(Pt)}),G.size===0){H(T);return}setTimeout(Mt,10)}$.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ee=null;function Pe(T){ee&&ee(T)}function We(){Xe.stop()}function ce(){Xe.start()}let Xe=new ed;Xe.setAnimationLoop(Pe),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(T){ee=T,Wt.setAnimationLoop(T),T===null?Xe.stop():Xe.start()},Wt.addEventListener("sessionstart",We),Wt.addEventListener("sessionend",ce),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(F),F=Wt.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,F,A),m=Lt.get(T,y.length),m.init(),y.push(m),St.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(St),_t=this.localClippingEnabled,it=zt.init(this.clippingPlanes,_t),x=vt.get(T,p.length),x.init(),p.push(x),Un(T,F,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(J,Y),this.info.render.frame++,it===!0&&zt.beginShadows();let V=m.state.shadowsArray;if(tt.render(V,T,F),it===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),qt.render(x,T),m.setupLights(_._useLegacyLights),F.isArrayCamera){let G=F.cameras;for(let H=0,Mt=G.length;H<Mt;H++){let Pt=G[H];jc(x,T,Pt,Pt.viewport)}}else jc(x,T,F);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(_,T,F),Rt.resetDefaultState(),U=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Un(T,F,V,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){G&&Ot.setFromMatrixPosition(T.matrixWorld).applyMatrix4(St);let Pt=j.update(T),Nt=T.material;Nt.visible&&x.push(T,Pt,Nt,V,Ot.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){let Pt=j.update(T),Nt=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ot.copy(T.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ot.copy(Pt.boundingSphere.center)),Ot.applyMatrix4(T.matrixWorld).applyMatrix4(St)),Array.isArray(Nt)){let Bt=Pt.groups;for(let Xt=0,Ht=Bt.length;Xt<Ht;Xt++){let Vt=Bt[Xt],Me=Nt[Vt.materialIndex];Me&&Me.visible&&x.push(T,Pt,Me,V,Ot.z,Vt)}}else Nt.visible&&x.push(T,Pt,Nt,V,Ot.z,null)}}let Mt=T.children;for(let Pt=0,Nt=Mt.length;Pt<Nt;Pt++)Un(Mt[Pt],F,V,G)}function jc(T,F,V,G){let H=T.opaque,Mt=T.transmissive,Pt=T.transparent;m.setupLightsView(V),it===!0&&zt.setGlobalState(_.clippingPlanes,V),Mt.length>0&&cf(H,Mt,F,V),G&&Z.viewport(E.copy(G)),H.length>0&&Hr(H,F,V),Mt.length>0&&Hr(Mt,F,V),Pt.length>0&&Hr(Pt,F,V),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function cf(T,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let Mt=ot.isWebGL2;Tt===null&&(Tt=new Jn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?tr:mi,minFilter:Qs,samples:Mt?4:0})),_.getDrawingBufferSize(Dt),Mt?Tt.setSize(Dt.x,Dt.y):Tt.setSize(Ta(Dt.x),Ta(Dt.y));let Pt=_.getRenderTarget();_.setRenderTarget(Tt),_.getClearColor(W),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();let Nt=_.toneMapping;_.toneMapping=pi,Hr(T,V,G),w.updateMultisampleRenderTarget(Tt),w.updateRenderTargetMipmap(Tt);let Bt=!1;for(let Xt=0,Ht=F.length;Xt<Ht;Xt++){let Vt=F[Xt],Me=Vt.object,tn=Vt.geometry,Le=Vt.material,Hn=Vt.group;if(Le.side===En&&Me.layers.test(G.layers)){let ge=Le.side;Le.side=He,Le.needsUpdate=!0,Qc(Me,V,G,tn,Le,Hn),Le.side=ge,Le.needsUpdate=!0,Bt=!0}}Bt===!0&&(w.updateMultisampleRenderTarget(Tt),w.updateRenderTargetMipmap(Tt)),_.setRenderTarget(Pt),_.setClearColor(W,L),_.toneMapping=Nt}function Hr(T,F,V){let G=F.isScene===!0?F.overrideMaterial:null;for(let H=0,Mt=T.length;H<Mt;H++){let Pt=T[H],Nt=Pt.object,Bt=Pt.geometry,Xt=G===null?Pt.material:G,Ht=Pt.group;Nt.layers.test(V.layers)&&Qc(Nt,F,V,Bt,Xt,Ht)}}function Qc(T,F,V,G,H,Mt){T.onBeforeRender(_,F,V,G,H,Mt),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(_,F,V,G,T,Mt),H.transparent===!0&&H.side===En&&H.forceSinglePass===!1?(H.side=He,H.needsUpdate=!0,_.renderBufferDirect(V,F,G,H,T,Mt),H.side=gi,H.needsUpdate=!0,_.renderBufferDirect(V,F,G,H,T,Mt),H.side=En):_.renderBufferDirect(V,F,G,H,T,Mt),T.onAfterRender(_,F,V,G,H,Mt)}function Vr(T,F,V){F.isScene!==!0&&(F=wt);let G=xt.get(T),H=m.state.lights,Mt=m.state.shadowsArray,Pt=H.state.version,Nt=Et.getParameters(T,H.state,Mt,F,V),Bt=Et.getProgramCacheKey(Nt),Xt=G.programs;G.environment=T.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(T.isMeshStandardMaterial?B:v).get(T.envMap||G.environment),Xt===void 0&&(T.addEventListener("dispose",ut),Xt=new Map,G.programs=Xt);let Ht=Xt.get(Bt);if(Ht!==void 0){if(G.currentProgram===Ht&&G.lightsStateVersion===Pt)return eh(T,Nt),Ht}else Nt.uniforms=Et.getUniforms(T),T.onBuild(V,Nt,_),T.onBeforeCompile(Nt,_),Ht=Et.acquireProgram(Nt,Bt),Xt.set(Bt,Ht),G.uniforms=Nt.uniforms;let Vt=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Vt.clippingPlanes=zt.uniform),eh(T,Nt),G.needsLights=df(T),G.lightsStateVersion=Pt,G.needsLights&&(Vt.ambientLightColor.value=H.state.ambient,Vt.lightProbe.value=H.state.probe,Vt.directionalLights.value=H.state.directional,Vt.directionalLightShadows.value=H.state.directionalShadow,Vt.spotLights.value=H.state.spot,Vt.spotLightShadows.value=H.state.spotShadow,Vt.rectAreaLights.value=H.state.rectArea,Vt.ltc_1.value=H.state.rectAreaLTC1,Vt.ltc_2.value=H.state.rectAreaLTC2,Vt.pointLights.value=H.state.point,Vt.pointLightShadows.value=H.state.pointShadow,Vt.hemisphereLights.value=H.state.hemi,Vt.directionalShadowMap.value=H.state.directionalShadowMap,Vt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Vt.spotShadowMap.value=H.state.spotShadowMap,Vt.spotLightMatrix.value=H.state.spotLightMatrix,Vt.spotLightMap.value=H.state.spotLightMap,Vt.pointShadowMap.value=H.state.pointShadowMap,Vt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.currentProgram=Ht,G.uniformsList=null,Ht}function th(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=xs.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function eh(T,F){let V=xt.get(T);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function hf(T,F,V,G,H){F.isScene!==!0&&(F=wt),w.resetTextureUnits();let Mt=F.fog,Pt=G.isMeshStandardMaterial?F.environment:null,Nt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zn,Bt=(G.isMeshStandardMaterial?B:v).get(G.envMap||Pt),Xt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ht=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Vt=!!V.morphAttributes.position,Me=!!V.morphAttributes.normal,tn=!!V.morphAttributes.color,Le=pi;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Le=_.toneMapping);let Hn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ge=Hn!==void 0?Hn.length:0,$t=xt.get(G),Do=m.state.lights;if(it===!0&&(_t===!0||T!==M)){let on=T===M&&G.id===U;zt.setState(G,T,on)}let ye=!1;G.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Do.state.version||$t.outputColorSpace!==Nt||H.isBatchedMesh&&$t.batching===!1||!H.isBatchedMesh&&$t.batching===!0||H.isInstancedMesh&&$t.instancing===!1||!H.isInstancedMesh&&$t.instancing===!0||H.isSkinnedMesh&&$t.skinning===!1||!H.isSkinnedMesh&&$t.skinning===!0||H.isInstancedMesh&&$t.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&$t.instancingColor===!1&&H.instanceColor!==null||$t.envMap!==Bt||G.fog===!0&&$t.fog!==Mt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==zt.numPlanes||$t.numIntersection!==zt.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==Ht||$t.morphTargets!==Vt||$t.morphNormals!==Me||$t.morphColors!==tn||$t.toneMapping!==Le||ot.isWebGL2===!0&&$t.morphTargetsCount!==ge)&&(ye=!0):(ye=!0,$t.__version=G.version);let Ei=$t.currentProgram;ye===!0&&(Ei=Vr(G,F,H));let nh=!1,Bs=!1,Uo=!1,Fe=Ei.getUniforms(),wi=$t.uniforms;if(Z.useProgram(Ei.program)&&(nh=!0,Bs=!0,Uo=!0),G.id!==U&&(U=G.id,Bs=!0),nh||M!==T){Fe.setValue(I,"projectionMatrix",T.projectionMatrix),Fe.setValue(I,"viewMatrix",T.matrixWorldInverse);let on=Fe.map.cameraPosition;on!==void 0&&on.setValue(I,Ot.setFromMatrixPosition(T.matrixWorld)),ot.logarithmicDepthBuffer&&Fe.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Fe.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Bs=!0,Uo=!0)}if(H.isSkinnedMesh){Fe.setOptional(I,H,"bindMatrix"),Fe.setOptional(I,H,"bindMatrixInverse");let on=H.skeleton;on&&(ot.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Fe.setValue(I,"boneTexture",on.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Fe.setOptional(I,H,"batchingTexture"),Fe.setValue(I,"batchingTexture",H._matricesTexture,w));let No=V.morphAttributes;if((No.position!==void 0||No.normal!==void 0||No.color!==void 0&&ot.isWebGL2===!0)&&P.update(H,V,Ei),(Bs||$t.receiveShadow!==H.receiveShadow)&&($t.receiveShadow=H.receiveShadow,Fe.setValue(I,"receiveShadow",H.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wi.envMap.value=Bt,wi.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Bs&&(Fe.setValue(I,"toneMappingExposure",_.toneMappingExposure),$t.needsLights&&uf(wi,Uo),Mt&&G.fog===!0&&mt.refreshFogUniforms(wi,Mt),mt.refreshMaterialUniforms(wi,G,K,k,Tt),xs.upload(I,th($t),wi,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(xs.upload(I,th($t),wi,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Fe.setValue(I,"center",H.center),Fe.setValue(I,"modelViewMatrix",H.modelViewMatrix),Fe.setValue(I,"normalMatrix",H.normalMatrix),Fe.setValue(I,"modelMatrix",H.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let on=G.uniformsGroups;for(let Oo=0,ff=on.length;Oo<ff;Oo++)if(ot.isWebGL2){let ih=on[Oo];Yt.update(ih,Ei),Yt.bind(ih,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function uf(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function df(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,F,V){xt.get(T.texture).__webglTexture=F,xt.get(T.depthTexture).__webglTexture=V;let G=xt.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){let V=xt.get(T);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,V=0){A=T,R=F,S=V;let G=!0,H=null,Mt=!1,Pt=!1;if(T){let Bt=xt.get(T);Bt.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):Bt.__webglFramebuffer===void 0?w.setupRenderTarget(T):Bt.__hasExternalTextures&&w.rebindTextures(T,xt.get(T.texture).__webglTexture,xt.get(T.depthTexture).__webglTexture);let Xt=T.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);let Ht=xt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ht[F])?H=Ht[F][V]:H=Ht[F],Mt=!0):ot.isWebGL2&&T.samples>0&&w.useMultisampledRTT(T)===!1?H=xt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ht)?H=Ht[V]:H=Ht,E.copy(T.viewport),N.copy(T.scissor),X=T.scissorTest}else E.copy(nt).multiplyScalar(K).floor(),N.copy(rt).multiplyScalar(K).floor(),X=gt;if(Z.bindFramebuffer(I.FRAMEBUFFER,H)&&ot.drawBuffers&&G&&Z.drawBuffers(T,H),Z.viewport(E),Z.scissor(N),Z.setScissorTest(X),Mt){let Bt=xt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Bt.__webglTexture,V)}else if(Pt){let Bt=xt.get(T.texture),Xt=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.__webglTexture,V||0,Xt)}U=-1},this.readRenderTargetPixels=function(T,F,V,G,H,Mt,Pt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=xt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){Z.bindFramebuffer(I.FRAMEBUFFER,Nt);try{let Bt=T.texture,Xt=Bt.format,Ht=Bt.type;if(Xt!==wn&&lt.convert(Xt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Vt=Ht===tr&&($.has("EXT_color_buffer_half_float")||ot.isWebGL2&&$.has("EXT_color_buffer_float"));if(Ht!==mi&&lt.convert(Ht)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===ui&&(ot.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&V>=0&&V<=T.height-H&&I.readPixels(F,V,G,H,lt.convert(Xt),lt.convert(Ht),Mt)}finally{let Bt=A!==null?xt.get(A).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(T,F,V=0){let G=Math.pow(2,-V),H=Math.floor(F.image.width*G),Mt=Math.floor(F.image.height*G);w.setTexture2D(F,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,T.x,T.y,H,Mt),Z.unbindTexture()},this.copyTextureToTexture=function(T,F,V,G=0){let H=F.image.width,Mt=F.image.height,Pt=lt.convert(V.format),Nt=lt.convert(V.type);w.setTexture2D(V,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,T.x,T.y,H,Mt,Pt,Nt,F.image.data):F.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Pt,F.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,T.x,T.y,Pt,Nt,F.image),G===0&&V.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(T,F,V,G,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Mt=T.max.x-T.min.x+1,Pt=T.max.y-T.min.y+1,Nt=T.max.z-T.min.z+1,Bt=lt.convert(G.format),Xt=lt.convert(G.type),Ht;if(G.isData3DTexture)w.setTexture3D(G,0),Ht=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)w.setTexture2DArray(G,0),Ht=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);let Vt=I.getParameter(I.UNPACK_ROW_LENGTH),Me=I.getParameter(I.UNPACK_IMAGE_HEIGHT),tn=I.getParameter(I.UNPACK_SKIP_PIXELS),Le=I.getParameter(I.UNPACK_SKIP_ROWS),Hn=I.getParameter(I.UNPACK_SKIP_IMAGES),ge=V.isCompressedTexture?V.mipmaps[H]:V.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ge.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,T.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,T.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?I.texSubImage3D(Ht,H,F.x,F.y,F.z,Mt,Pt,Nt,Bt,Xt,ge.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ht,H,F.x,F.y,F.z,Mt,Pt,Nt,Bt,ge.data)):I.texSubImage3D(Ht,H,F.x,F.y,F.z,Mt,Pt,Nt,Bt,Xt,ge),I.pixelStorei(I.UNPACK_ROW_LENGTH,Vt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Me),I.pixelStorei(I.UNPACK_SKIP_PIXELS,tn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Hn),H===0&&G.generateMipmaps&&I.generateMipmap(Ht),Z.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),Z.unbindTexture()},this.resetState=function(){R=0,S=0,A=null,Z.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===mc?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===to?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pe?Ni:Zu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ni?pe:Zn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},zl=class extends sr{};zl.prototype.isWebGL1Renderer=!0;var ka=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},za=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Qn=class extends ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},us=new ae,wu=new ae,ua=[],Tu=new Kn,xx=new ae,Gs=new kt,Ws=new dn,yi=class extends kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qn(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Tu.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(Tu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Ws.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),t.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),wu.multiplyMatrices(n,us),Gs.matrixWorld=wu,Gs.raycast(t,ua);for(let a=0,o=ua.length;a<o;a++){let l=ua[a];l.instanceId=r,l.object=this,e.push(l)}ua.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qn(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Ha=class extends jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Au=new C,Ru=new C,Cu=new ae,dl=new _i,da=new dn,rr=class extends Ue{constructor(t=new xe,e=new Ha){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Au.fromBufferAttribute(e,s-1),Ru.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Au.distanceTo(Ru);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,t.ray.intersectsSphere(da)===!1)return;Cu.copy(s).invert(),dl.copy(t.ray).applyMatrix4(Cu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let _=p,b=y-1;_<b;_+=f){let R=g.getX(_),S=g.getX(_+1);if(c.fromBufferAttribute(m,R),h.fromBufferAttribute(m,S),dl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let U=t.ray.origin.distanceTo(d);U<t.near||U>t.far||e.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let _=p,b=y-1;_<b;_+=f){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),dl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let S=t.ray.origin.distanceTo(d);S<t.near||S>t.far||e.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};var ar=class extends jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pu=new ae,Hl=new _i,fa=new dn,pa=new C,or=class extends Ue{constructor(t=new xe,e=new ar){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,t.ray.intersectsSphere(fa)===!1)return;Pu.copy(s).invert(),Hl.copy(t.ray).applyMatrix4(Pu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=c.getX(g);pa.fromBufferAttribute(u,m),Lu(pa,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)pa.fromBufferAttribute(u,g),Lu(pa,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lu(i,t,e,n,s,r,a){let o=Hl.distanceSqToPoint(i);if(o<e){let l=new C;Hl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var Tn=class extends un{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new st:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,s=[],r=[],a=[],o=new C,l=new ae;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},lr=class extends mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let n=e||new st,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Vl=class extends lr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function xc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ma=new C,fl=new xc,pl=new xc,ml=new xc,Gl=class extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(ma.subVectors(s[0],s[1]).add(s[0]),c=ma);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ma),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),fl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),pl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),ml.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(fl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),pl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ml.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(fl.calc(l),pl.calc(l),ml.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Iu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function yx(i,t){let e=1-i;return e*e*t}function vx(i,t){return 2*(1-i)*i*t}function Mx(i,t){return i*i*t}function Js(i,t,e,n){return yx(i,t)+vx(i,e)+Mx(i,n)}function Sx(i,t){let e=1-i;return e*e*e*t}function bx(i,t){let e=1-i;return 3*e*e*i*t}function Ex(i,t){return 3*(1-i)*i*i*t}function wx(i,t){return i*i*i*t}function Ks(i,t,e,n,s){return Sx(i,t)+bx(i,e)+Ex(i,n)+wx(i,s)}var Va=class extends mn{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(t,s.x,r.x,a.x,o.x),Ks(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wl=class extends mn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(t,s.x,r.x,a.x,o.x),Ks(t,s.y,r.y,a.y,o.y),Ks(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ga=class extends mn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xl=class extends mn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wa=class extends mn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Js(t,s.x,r.x,a.x),Js(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ql=class extends mn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Js(t,s.x,r.x,a.x),Js(t,s.y,r.y,a.y),Js(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xa=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Iu(o,l.x,c.x,h.x,u.x),Iu(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},Yl=Object.freeze({__proto__:null,ArcCurve:Vl,CatmullRomCurve3:Gl,CubicBezierCurve:Va,CubicBezierCurve3:Wl,EllipseCurve:lr,LineCurve:Ga,LineCurve3:Xl,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:ql,SplineCurve:Xa}),$l=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Yl[s.type]().fromJSON(s))}return this}},cr=class extends $l{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ga(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Wa(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Va(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Xa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new lr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Zl=class i extends xe{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Te(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,d=new st,f=new C,g=new C,x=new C,m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=e;y++){let _=n+y*h*s,b=Math.sin(_),R=Math.cos(_);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*b,u.y=t[S].y,u.z=t[S].x*R,a.push(u.x,u.y,u.z),d.x=y/e,d.y=S/(t.length-1),o.push(d.x,d.y);let A=l[3*S+0]*b,U=l[3*S+1],M=l[3*S+0]*R;c.push(A,U,M)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let b=_+y*t.length,R=b,S=b+t.length,A=b+t.length+1,U=b+1;r.push(R,S,U),r.push(A,U,S)}this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("uv",new Kt(o,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},hr=class i extends Zl{constructor(t=1,e=1,n=4,s=8){let r=new cr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var An=class i extends xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(f,2));function y(){let b=new C,R=new C,S=0,A=(e-t)/n;for(let U=0;U<=r;U++){let M=[],E=U/r,N=E*(e-t)+t;for(let X=0;X<=s;X++){let W=X/s,L=W*l+o,O=Math.sin(L),k=Math.cos(L);R.x=N*O,R.y=-E*n+m,R.z=N*k,u.push(R.x,R.y,R.z),b.set(O,A,k).normalize(),d.push(b.x,b.y,b.z),f.push(W,1-E),M.push(g++)}x.push(M)}for(let U=0;U<s;U++)for(let M=0;M<r;M++){let E=x[M][U],N=x[M+1][U],X=x[M+1][U+1],W=x[M][U+1];h.push(E,N,W),h.push(N,X,W),S+=6}c.addGroup(p,S,0),p+=S}function _(b){let R=g,S=new st,A=new C,U=0,M=b===!0?t:e,E=b===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let N=g;for(let X=0;X<=s;X++){let L=X/s*l+o,O=Math.cos(L),k=Math.sin(L);A.x=M*k,A.y=m*E,A.z=M*O,u.push(A.x,A.y,A.z),d.push(0,E,0),S.x=O*.5+.5,S.y=k*.5*E+.5,f.push(S.x,S.y),g++}for(let X=0;X<s;X++){let W=R+X,L=N+X;b===!0?h.push(L,L+1,W):h.push(L+1,L,W),U+=3}c.addGroup(p,U,b===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Jl=class i extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let _=new C,b=new C,R=new C;for(let S=0;S<e.length;S+=3)f(e[S+0],_),f(e[S+1],b),f(e[S+2],R),l(_,b,R,y)}function l(y,_,b,R){let S=R+1,A=[];for(let U=0;U<=S;U++){A[U]=[];let M=y.clone().lerp(b,U/S),E=_.clone().lerp(b,U/S),N=S-U;for(let X=0;X<=N;X++)X===0&&U===S?A[U][X]=M:A[U][X]=M.clone().lerp(E,X/N)}for(let U=0;U<S;U++)for(let M=0;M<2*(S-U)-1;M++){let E=Math.floor(M/2);M%2===0?(d(A[U][E+1]),d(A[U+1][E]),d(A[U][E])):(d(A[U][E+1]),d(A[U+1][E+1]),d(A[U+1][E]))}}function c(y){let _=new C;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(y),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function h(){let y=new C;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let b=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(b,1-R)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let _=a[y+0],b=a[y+2],R=a[y+4],S=Math.max(_,b,R),A=Math.min(_,b,R);S>.9&&A<.1&&(_<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){let b=y*3;_.x=t[b+0],_.y=t[b+1],_.z=t[b+2]}function g(){let y=new C,_=new C,b=new C,R=new C,S=new st,A=new st,U=new st;for(let M=0,E=0;M<r.length;M+=9,E+=6){y.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),S.set(a[E+0],a[E+1]),A.set(a[E+2],a[E+3]),U.set(a[E+4],a[E+5]),R.copy(y).add(_).add(b).divideScalar(3);let N=m(R);x(S,E+0,y,N),x(A,E+2,_,N),x(U,E+4,b,N)}}function x(y,_,b,R){R<0&&y.x===1&&(a[_]=y.x-1),b.x===0&&b.z===0&&(a[_]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var ur=class extends cr{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new cr().fromJSON(s))}return this}},Tx={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=od(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=Lx(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return dr(r,a,e,o,l,f,0),a}};function od(i,t,e,n,s){let r,a;if(s===Vx(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Du(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Du(r,i[r],i[r+1],a);return a&&no(a,a.next)&&(pr(a),a=a.next),a}function Fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(no(e,e.next)||_e(e.prev,e,e.next)===0)){if(pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function dr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ox(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Rx(i,n,s,r):Ax(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),pr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Cx(Fi(i),t,e),dr(i,t,e,n,s,r,2)):a===2&&Px(i,t,e,n,s,r):dr(Fi(i),t,e,n,s,r,1);break}}}function Ax(i){let t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&gs(s,o,r,l,a,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(_e(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Kl(f,g,t,e,n),y=Kl(x,m,t,e,n),_=i.prevZ,b=i.nextZ;for(;_&&_.z>=p&&b&&b.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&gs(o,h,l,u,c,d,_.x,_.y)&&_e(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&gs(o,h,l,u,c,d,b.x,b.y)&&_e(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&gs(o,h,l,u,c,d,_.x,_.y)&&_e(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&gs(o,h,l,u,c,d,b.x,b.y)&&_e(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Cx(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!no(s,r)&&ld(s,n,n.next,r)&&fr(s,r)&&fr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),pr(n),pr(n.next),n=i=r),n=n.next}while(n!==i);return Fi(n)}function Px(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&kx(a,o)){let l=cd(a,o);a=Fi(a,a.next),l=Fi(l,l.next),dr(a,t,e,n,s,r,0),dr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Lx(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=od(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Bx(c));for(s.sort(Ix),r=0;r<s.length;r++)e=Dx(s[r],e);return e}function Ix(i,t){return i.x-t.x}function Dx(i,t){let e=Ux(i,t);if(!e)return t;let n=cd(e,i);return Fi(n,n.next),Fi(e,e.next)}function Ux(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&gs(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),fr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Nx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Nx(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function Ox(i,t,e,n){let s=i;do s.z===0&&(s.z=Kl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fx(s)}function Fx(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Kl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Bx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function kx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!zx(i,t)&&(fr(i,t)&&fr(t,i)&&Hx(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||no(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function no(i,t){return i.x===t.x&&i.y===t.y}function ld(i,t,e,n){let s=_a(_e(i,t,e)),r=_a(_e(i,t,n)),a=_a(_e(e,n,i)),o=_a(_e(e,n,t));return!!(s!==r&&a!==o||s===0&&ga(i,e,t)||r===0&&ga(i,n,t)||a===0&&ga(e,i,n)||o===0&&ga(e,t,n))}function ga(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _a(i){return i>0?1:i<0?-1:0}function zx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ld(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function fr(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function Hx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function cd(i,t){let e=new jl(i.i,i.x,i.y),n=new jl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Du(i,t,e,n){let s=new jl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Vx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var js=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Uu(t),Nu(n,t);let a=t.length;e.forEach(Uu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Nu(n,e[l]);let o=Tx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Uu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Nu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var qa=class i extends xe{constructor(t=new ur([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Gx,_,b=!1,R,S,A,U;p&&(_=p.getSpacedPoints(h),b=!0,d=!1,R=p.computeFrenetFrames(h,!1),S=new C,A=new C,U=new C),d||(m=0,f=0,g=0,x=0);let M=o.extractPoints(c),E=M.shape,N=M.holes;if(!js.isClockWise(E)){E=E.reverse();for(let I=0,ct=N.length;I<ct;I++){let $=N[I];js.isClockWise($)&&(N[I]=$.reverse())}}let W=js.triangulateShape(E,N),L=E;for(let I=0,ct=N.length;I<ct;I++){let $=N[I];E=E.concat($)}function O(I,ct,$){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(ct,$)}let k=E.length,K=W.length;function J(I,ct,$){let ot,Z,At,xt=I.x-ct.x,w=I.y-ct.y,v=$.x-I.x,B=$.y-I.y,at=xt*xt+w*w,Q=xt*B-w*v;if(Math.abs(Q)>Number.EPSILON){let j=Math.sqrt(at),Et=Math.sqrt(v*v+B*B),mt=ct.x-w/j,vt=ct.y+xt/j,Lt=$.x-B/Et,zt=$.y+v/Et,tt=((Lt-mt)*B-(zt-vt)*v)/(xt*B-w*v);ot=mt+xt*tt-I.x,Z=vt+w*tt-I.y;let qt=ot*ot+Z*Z;if(qt<=2)return new st(ot,Z);At=Math.sqrt(qt/2)}else{let j=!1;xt>Number.EPSILON?v>Number.EPSILON&&(j=!0):xt<-Number.EPSILON?v<-Number.EPSILON&&(j=!0):Math.sign(w)===Math.sign(B)&&(j=!0),j?(ot=-w,Z=xt,At=Math.sqrt(at)):(ot=xt,Z=w,At=Math.sqrt(at/2))}return new st(ot/At,Z/At)}let Y=[];for(let I=0,ct=L.length,$=ct-1,ot=I+1;I<ct;I++,$++,ot++)$===ct&&($=0),ot===ct&&(ot=0),Y[I]=J(L[I],L[$],L[ot]);let nt=[],rt,gt=Y.concat();for(let I=0,ct=N.length;I<ct;I++){let $=N[I];rt=[];for(let ot=0,Z=$.length,At=Z-1,xt=ot+1;ot<Z;ot++,At++,xt++)At===Z&&(At=0),xt===Z&&(xt=0),rt[ot]=J($[ot],$[At],$[xt]);nt.push(rt),gt=gt.concat(rt)}for(let I=0;I<m;I++){let ct=I/m,$=f*Math.cos(ct*Math.PI/2),ot=g*Math.sin(ct*Math.PI/2)+x;for(let Z=0,At=L.length;Z<At;Z++){let xt=O(L[Z],Y[Z],ot);St(xt.x,xt.y,-$)}for(let Z=0,At=N.length;Z<At;Z++){let xt=N[Z];rt=nt[Z];for(let w=0,v=xt.length;w<v;w++){let B=O(xt[w],rt[w],ot);St(B.x,B.y,-$)}}}let q=g+x;for(let I=0;I<k;I++){let ct=d?O(E[I],gt[I],q):E[I];b?(A.copy(R.normals[0]).multiplyScalar(ct.x),S.copy(R.binormals[0]).multiplyScalar(ct.y),U.copy(_[0]).add(A).add(S),St(U.x,U.y,U.z)):St(ct.x,ct.y,0)}for(let I=1;I<=h;I++)for(let ct=0;ct<k;ct++){let $=d?O(E[ct],gt[ct],q):E[ct];b?(A.copy(R.normals[I]).multiplyScalar($.x),S.copy(R.binormals[I]).multiplyScalar($.y),U.copy(_[I]).add(A).add(S),St(U.x,U.y,U.z)):St($.x,$.y,u/h*I)}for(let I=m-1;I>=0;I--){let ct=I/m,$=f*Math.cos(ct*Math.PI/2),ot=g*Math.sin(ct*Math.PI/2)+x;for(let Z=0,At=L.length;Z<At;Z++){let xt=O(L[Z],Y[Z],ot);St(xt.x,xt.y,u+$)}for(let Z=0,At=N.length;Z<At;Z++){let xt=N[Z];rt=nt[Z];for(let w=0,v=xt.length;w<v;w++){let B=O(xt[w],rt[w],ot);b?St(B.x,B.y+_[h-1].y,_[h-1].x+$):St(B.x,B.y,u+$)}}}it(),_t();function it(){let I=s.length/3;if(d){let ct=0,$=k*ct;for(let ot=0;ot<K;ot++){let Z=W[ot];Dt(Z[2]+$,Z[1]+$,Z[0]+$)}ct=h+m*2,$=k*ct;for(let ot=0;ot<K;ot++){let Z=W[ot];Dt(Z[0]+$,Z[1]+$,Z[2]+$)}}else{for(let ct=0;ct<K;ct++){let $=W[ct];Dt($[2],$[1],$[0])}for(let ct=0;ct<K;ct++){let $=W[ct];Dt($[0]+k*h,$[1]+k*h,$[2]+k*h)}}n.addGroup(I,s.length/3-I,0)}function _t(){let I=s.length/3,ct=0;Tt(L,ct),ct+=L.length;for(let $=0,ot=N.length;$<ot;$++){let Z=N[$];Tt(Z,ct),ct+=Z.length}n.addGroup(I,s.length/3-I,1)}function Tt(I,ct){let $=I.length;for(;--$>=0;){let ot=$,Z=$-1;Z<0&&(Z=I.length-1);for(let At=0,xt=h+m*2;At<xt;At++){let w=k*At,v=k*(At+1),B=ct+ot+w,at=ct+Z+w,Q=ct+Z+v,j=ct+ot+v;Ot(B,at,Q,j)}}}function St(I,ct,$){l.push(I),l.push(ct),l.push($)}function Dt(I,ct,$){wt(I),wt(ct),wt($);let ot=s.length/3,Z=y.generateTopUV(n,s,ot-3,ot-2,ot-1);Ft(Z[0]),Ft(Z[1]),Ft(Z[2])}function Ot(I,ct,$,ot){wt(I),wt(ct),wt(ot),wt(ct),wt($),wt(ot);let Z=s.length/3,At=y.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);Ft(At[0]),Ft(At[1]),Ft(At[3]),Ft(At[1]),Ft(At[2]),Ft(At[3])}function wt(I){s.push(l[I*3+0]),s.push(l[I*3+1]),s.push(l[I*3+2])}function Ft(I){r.push(I.x),r.push(I.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Wx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Yl[s.type]().fromJSON(s)),new i(n,t.options)}},Gx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new st(r,a),new st(o,l),new st(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new st(a,1-l),new st(c,1-u),new st(d,1-g),new st(x,1-p)]:[new st(o,1-l),new st(h,1-u),new st(f,1-g),new st(m,1-p)]}};function Wx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var mr=class i extends Jl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var gr=class i extends xe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new C,g=new st;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,_=y,b=y+n+1,R=y+n+2,S=y+1;o.push(_,b,S),o.push(b,R,S)}}this.setIndex(o),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var _r=class i extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,b=0;p===0&&a===0?b=.5/e:p===n&&l===Math.PI&&(b=-.5/e);for(let R=0;R<=e;R++){let S=R/e;u.x=-t*Math.cos(s+S*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(s+S*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(S+b,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],b=h[p][y],R=h[p+1][y],S=h[p+1][y+1];(p!==0||a>0)&&f.push(_,b,S),(p!==n-1||l<Math.PI)&&f.push(b,R,S)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ve=class extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ju,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var xr=class extends Ha{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function xa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var bs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ql=class extends bs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oh:r=t,o=2*e-n;break;case Fh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Oh:a=t,l=2*n-e;break;case Fh:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+y*a[c+R]+_*a[l+R]+b*a[u+R];return r}},tc=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},ec=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xa(e,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xa(t.times,Array),values:xa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ql(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case va:e=this.InterpolantFactoryMethodDiscrete;break;case Ma:e=this.InterpolantFactoryMethodLinear;break;case Go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return va;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Xx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Go,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Ma;var Bi=class extends Rn{};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=va;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var nc=class extends Rn{};nc.prototype.ValueTypeName="color";var ic=class extends Rn{};ic.prototype.ValueTypeName="number";var sc=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ve.slerpFlat(r,0,a,c-o,a,c,l);return r}},yr=class extends Rn{InterpolantFactoryMethodLinear(t){return new sc(this.times,this.values,this.getValueSize(),t)}};yr.prototype.ValueTypeName="quaternion";yr.prototype.DefaultInterpolation=Ma;yr.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Rn{};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=va;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends Rn{};rc.prototype.ValueTypeName="vector";var ac=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},qx=new ac,oc=class{constructor(t){this.manager=t!==void 0?t:qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};oc.DEFAULT_MATERIAL_NAME="__DEFAULT";var vr=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ya=class extends vr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},gl=new ae,Ou=new C,Fu=new C,$a=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ou),Fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fu),e.updateMatrixWorld(),gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Bu=new ae,Xs=new C,_l=new C,lc=class extends $a{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Xs),_l.copy(n.position),_l.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_l),n.updateMatrixWorld(),s.makeTranslation(-Xs.x,-Xs.y,-Xs.z),Bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu)}},Za=class extends vr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},cc=class extends $a{constructor(){super(new Oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ja=class extends vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new cc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var yc="\\[\\]\\.:\\/",Yx=new RegExp("["+yc+"]","g"),vc="[^"+yc+"]",$x="[^"+yc.replace("\\.","")+"]",Zx=/((?:WC+[\/:])*)/.source.replace("WC",vc),Jx=/(WCOD+)?/.source.replace("WCOD",$x),Kx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),Qx=new RegExp("^"+Zx+Jx+Kx+jx+"$"),ty=["material","materials","bones","map"],hc=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(t){let e=Qx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ty.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=hc;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iv=new Float32Array(1);var Ka=class{constructor(t,e,n=0,s=1/0){this.ray=new _i(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new nr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return uc(t,this,n,e),n.sort(ku),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)uc(t[s],this,n,e);return n.sort(ku),n}};function ku(i,t){return i.distance-t.distance}function uc(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)uc(s[r],t,e,!0)}}var Mr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);var hd={type:"change"},Mc={type:"start"},ud={type:"end"},io=new _i,dd=new bn,ny=Math.cos(70*Es.DEG2RAD),so=class extends On{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",j),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",j),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(hd),n.update(),r=s.NONE},this.update=function(){let P=new C,et=new Ve().setFromUnitVectors(t.up,new C(0,1,0)),ft=et.clone().invert(),lt=new C,Rt=new Ve,Yt=new C,Jt=2*Math.PI;return function(dt=null){let D=n.object.position;P.copy(D).sub(n.target),P.applyQuaternion(et),o.setFromVector3(P),n.autoRotate&&r===s.NONE&&N(M(dt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ht=n.minAzimuthAngle,ut=n.maxAzimuthAngle;isFinite(ht)&&isFinite(ut)&&(ht<-Math.PI?ht+=Jt:ht>Math.PI&&(ht-=Jt),ut<-Math.PI?ut+=Jt:ut>Math.PI&&(ut-=Jt),ht<=ut?o.theta=Math.max(ht,Math.min(ut,o.theta)):o.theta=o.theta>(ht+ut)/2?Math.max(ht,o.theta):Math.min(ut,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&S||n.object.isOrthographicCamera?o.radius=Y(o.radius):o.radius=Y(o.radius*c),P.setFromSpherical(o),P.applyQuaternion(ft),D.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let It=!1;if(n.zoomToCursor&&S){let Ct=null;if(n.object.isPerspectiveCamera){let jt=P.length();Ct=Y(jt*c);let ee=jt-Ct;n.object.position.addScaledVector(b,ee),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let jt=new C(R.x,R.y,0);jt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),It=!0;let ee=new C(R.x,R.y,0);ee.unproject(n.object),n.object.position.sub(ee).add(jt),n.object.updateMatrixWorld(),Ct=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ct!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ct).add(n.object.position):(io.origin.copy(n.object.position),io.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(io.direction))<ny?t.lookAt(n.target):(dd.setFromNormalAndCoplanarPoint(n.object.up,n.target),io.intersectPlane(dd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),It=!0);return c=1,S=!1,It||lt.distanceToSquared(n.object.position)>a||8*(1-Rt.dot(n.object.quaternion))>a||Yt.distanceToSquared(n.target)>0?(n.dispatchEvent(hd),lt.copy(n.object.position),Rt.copy(n.object.quaternion),Yt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",vt),n.domElement.removeEventListener("pointerdown",xt),n.domElement.removeEventListener("pointercancel",v),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",v),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",j),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new Mr,l=new Mr,c=1,h=new C,u=new st,d=new st,f=new st,g=new st,x=new st,m=new st,p=new st,y=new st,_=new st,b=new C,R=new st,S=!1,A=[],U={};function M(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function E(P){let et=Math.abs(P)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*et)}function N(P){l.theta-=P}function X(P){l.phi-=P}let W=function(){let P=new C;return function(ft,lt){P.setFromMatrixColumn(lt,0),P.multiplyScalar(-ft),h.add(P)}}(),L=function(){let P=new C;return function(ft,lt){n.screenSpacePanning===!0?P.setFromMatrixColumn(lt,1):(P.setFromMatrixColumn(lt,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(ft),h.add(P)}}(),O=function(){let P=new C;return function(ft,lt){let Rt=n.domElement;if(n.object.isPerspectiveCamera){let Yt=n.object.position;P.copy(Yt).sub(n.target);let Jt=P.length();Jt*=Math.tan(n.object.fov/2*Math.PI/180),W(2*ft*Jt/Rt.clientHeight,n.object.matrix),L(2*lt*Jt/Rt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(ft*(n.object.right-n.object.left)/n.object.zoom/Rt.clientWidth,n.object.matrix),L(lt*(n.object.top-n.object.bottom)/n.object.zoom/Rt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(P,et){if(!n.zoomToCursor)return;S=!0;let ft=n.domElement.getBoundingClientRect(),lt=P-ft.left,Rt=et-ft.top,Yt=ft.width,Jt=ft.height;R.x=lt/Yt*2-1,R.y=-(Rt/Jt)*2+1,b.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function nt(P){u.set(P.clientX,P.clientY)}function rt(P){J(P.clientX,P.clientX),p.set(P.clientX,P.clientY)}function gt(P){g.set(P.clientX,P.clientY)}function q(P){d.set(P.clientX,P.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let et=n.domElement;N(2*Math.PI*f.x/et.clientHeight),X(2*Math.PI*f.y/et.clientHeight),u.copy(d),n.update()}function it(P){y.set(P.clientX,P.clientY),_.subVectors(y,p),_.y>0?k(E(_.y)):_.y<0&&K(E(_.y)),p.copy(y),n.update()}function _t(P){x.set(P.clientX,P.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),O(m.x,m.y),g.copy(x),n.update()}function Tt(P){J(P.clientX,P.clientY),P.deltaY<0?K(E(P.deltaY)):P.deltaY>0&&k(E(P.deltaY)),n.update()}function St(P){let et=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?X(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),et=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?X(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),et=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),et=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),et=!0;break}et&&(P.preventDefault(),n.update())}function Dt(P){if(A.length===1)u.set(P.pageX,P.pageY);else{let et=qt(P),ft=.5*(P.pageX+et.x),lt=.5*(P.pageY+et.y);u.set(ft,lt)}}function Ot(P){if(A.length===1)g.set(P.pageX,P.pageY);else{let et=qt(P),ft=.5*(P.pageX+et.x),lt=.5*(P.pageY+et.y);g.set(ft,lt)}}function wt(P){let et=qt(P),ft=P.pageX-et.x,lt=P.pageY-et.y,Rt=Math.sqrt(ft*ft+lt*lt);p.set(0,Rt)}function Ft(P){n.enableZoom&&wt(P),n.enablePan&&Ot(P)}function I(P){n.enableZoom&&wt(P),n.enableRotate&&Dt(P)}function ct(P){if(A.length==1)d.set(P.pageX,P.pageY);else{let ft=qt(P),lt=.5*(P.pageX+ft.x),Rt=.5*(P.pageY+ft.y);d.set(lt,Rt)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let et=n.domElement;N(2*Math.PI*f.x/et.clientHeight),X(2*Math.PI*f.y/et.clientHeight),u.copy(d)}function $(P){if(A.length===1)x.set(P.pageX,P.pageY);else{let et=qt(P),ft=.5*(P.pageX+et.x),lt=.5*(P.pageY+et.y);x.set(ft,lt)}m.subVectors(x,g).multiplyScalar(n.panSpeed),O(m.x,m.y),g.copy(x)}function ot(P){let et=qt(P),ft=P.pageX-et.x,lt=P.pageY-et.y,Rt=Math.sqrt(ft*ft+lt*lt);y.set(0,Rt),_.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),k(_.y),p.copy(y);let Yt=(P.pageX+et.x)*.5,Jt=(P.pageY+et.y)*.5;J(Yt,Jt)}function Z(P){n.enableZoom&&ot(P),n.enablePan&&$(P)}function At(P){n.enableZoom&&ot(P),n.enableRotate&&ct(P)}function xt(P){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",w),n.domElement.addEventListener("pointerup",v)),Lt(P),P.pointerType==="touch"?Et(P):B(P))}function w(P){n.enabled!==!1&&(P.pointerType==="touch"?mt(P):at(P))}function v(P){zt(P),A.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",w),n.domElement.removeEventListener("pointerup",v)),n.dispatchEvent(ud),r=s.NONE}function B(P){let et;switch(P.button){case 0:et=n.mouseButtons.LEFT;break;case 1:et=n.mouseButtons.MIDDLE;break;case 2:et=n.mouseButtons.RIGHT;break;default:et=-1}switch(et){case zi.DOLLY:if(n.enableZoom===!1)return;rt(P),r=s.DOLLY;break;case zi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;gt(P),r=s.PAN}else{if(n.enableRotate===!1)return;nt(P),r=s.ROTATE}break;case zi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;nt(P),r=s.ROTATE}else{if(n.enablePan===!1)return;gt(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Mc)}function at(P){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;q(P);break;case s.DOLLY:if(n.enableZoom===!1)return;it(P);break;case s.PAN:if(n.enablePan===!1)return;_t(P);break}}function Q(P){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(P.preventDefault(),n.dispatchEvent(Mc),Tt(P),n.dispatchEvent(ud))}function j(P){n.enabled===!1||n.enablePan===!1||St(P)}function Et(P){switch(tt(P),A.length){case 1:switch(n.touches.ONE){case Hi.ROTATE:if(n.enableRotate===!1)return;Dt(P),r=s.TOUCH_ROTATE;break;case Hi.PAN:if(n.enablePan===!1)return;Ot(P),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Hi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ft(P),r=s.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;I(P),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Mc)}function mt(P){switch(tt(P),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ct(P),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;$(P),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Z(P),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;At(P),n.update();break;default:r=s.NONE}}function vt(P){n.enabled!==!1&&P.preventDefault()}function Lt(P){A.push(P.pointerId)}function zt(P){delete U[P.pointerId];for(let et=0;et<A.length;et++)if(A[et]==P.pointerId){A.splice(et,1);return}}function tt(P){let et=U[P.pointerId];et===void 0&&(et=new st,U[P.pointerId]=et),et.set(P.pageX,P.pageY)}function qt(P){let et=P.pointerId===A[0]?A[1]:A[0];return U[et]}n.domElement.addEventListener("contextmenu",vt),n.domElement.addEventListener("pointerdown",xt),n.domElement.addEventListener("pointercancel",v),n.domElement.addEventListener("wheel",Q,{passive:!1}),this.update()}};var Sc={ko:{q:["\uB0AE\uC74C","\uBCF4\uD1B5","\uB192\uC74C"],ranks:["\uC778\uD134","\uC0AC\uC6D0","\uB300\uB9AC","\uACFC\uC7A5","\uCC28\uC7A5","\uBD80\uC7A5","\uC0C1\uBB34","\uD1F4\uC0AC\uAC01"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uB2F4\uB2F9","\uD300\uC7A5","\uC2E4\uC7A5","\uBCF8\uBD80\uC7A5"],reject:"\uBC18\uB824",tools:{bomb:["\uC0AC\uC9C1\uC11C \uD3ED\uD0C4","\uC0AC\uC9C1\uC11C","\uB204\uB978 \uACF3\uC5D0 \uC0AC\uC9C1\uC11C\uB97C \uB358\uC838 \uB113\uAC8C \uB0A0\uB9AC\uACE0 \uAD6C\uB369\uC774\uB97C \uD31D\uB2C8\uB2E4"],bat:["\uACB0\uC7AC\uD310 \uD480\uC2A4\uC719","\uACB0\uC7AC\uD310","\uAC70\uB300\uD55C \uACB0\uC7AC\uD310\uC73C\uB85C \uCCD0\uC11C \uB369\uC5B4\uB9AC\uB97C \uBA40\uB9AC \uB0A0\uB9BD\uB2C8\uB2E4. 70 m \uB118\uC73C\uBA74 \uD648\uB7F0"],laser:["\uC5D1\uC140 \uB808\uC774\uC800","\uB808\uC774\uC800","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uBE54\uC774 \uADF8 \uC120\uC744 \uD6D1\uC2B5\uB2C8\uB2E4. \uD1A1 \uB204\uB974\uBA74 \uD55C \uC810\uB9CC"],meteor:["\uC131\uACFC\uAE09 \uC6B4\uC11D","\uC6B4\uC11D","\uD558\uB298\uC5D0\uC11C \uC6B4\uC11D\uC774 \uB5A8\uC5B4\uC838 \uD070 \uAD6C\uB369\uC774\uB97C \uB9CC\uB4ED\uB2C8\uB2E4"],quake:["\uC6D4\uC694\uBCD1 \uC9C0\uC9C4","\uC9C0\uC9C4","\uB204\uB978 \uACF3\uC774 \uC9C4\uC6D0. \uADDC\uBAA8 7.5 \uC774\uC0C1\uC774\uBA74 \uAC74\uBB3C\uC774 \uD1B5\uC9F8\uB85C \uC8FC\uC800\uC549\uC2B5\uB2C8\uB2E4"],nuke:["\uD1F4\uC0AC \uD575\uD3ED\uD0C4","\uD575\uD3ED\uD0C4","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},batSize:"\uACB0\uC7AC\uD310 \uD06C\uAE30",mag:"\uADDC\uBAA8",qk:["\uD754\uB4E4\uB9BC","\uBD80\uBD84 \uBD95\uAD34","\uC804\uBA74 \uBD95\uAD34"],labels:{bomb:["\uC0AC\uC9C1\uC11C \uC81C\uCD9C!","\uC624\uB298\uBD80\uB85C \uADF8\uB9CC\uB461\uB2C8\uB2E4","\uC5F0\uCC28 \uC18C\uC9C4 \uC644\uB8CC"],bat:["\uBC18\uB824!","\uC7AC\uAC80\uD1A0 \uBC14\uB78D\uB2C8\uB2E4","\uACB0\uC7AC \uC644\uB8CC","\uB2E4\uC2DC \uD574 \uC640"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","\uC21C\uD658 \uCC38\uC870!"],meteor:["\uC131\uACFC\uAE09 0\uC6D0","S\uB4F1\uAE09(\uC544\uB2D8)","\uC5F0\uBD09 \uB3D9\uACB0"],quake:["\uC6D4\uC694\uC77C 09:00","\uC8FC\uAC04\uD68C\uC758 \uC2DC\uC791","\uAE34\uAE09 \uBCF4\uACE0"],nuke:["\uD1F4\uC0AC\uD569\uB2C8\uB2E4","\uADF8\uB3D9\uC548 \uAC10\uC0AC\uD588\uC2B5\uB2C8\uB2E4"]},promo:"\uC2B9\uC9C4! {0}",collapse:"{0} \uBD95\uAD34!",collapseSmall:"{0} \uBD95\uAD34",nextBldg:"\uC606 \uAC74\uBB3C \uBD95\uAD34",noName:"{0} \uC774\uB984 \uC5C6\uB294 \uB3D9",core:"\uC9C0\uAD6C \uC911\uC2EC \uB3C4\uB2EC! \uACC4\uC18D \uD30C\uBA74 {0}",coreBonus:"\uC9C0\uAD6C \uC911\uC2EC \uBCF4\uB108\uC2A4",homerun:"\uD648\uB7F0! {0} m",homerunShort:"\uD648\uB7F0 {0}m",quit:"\uD1F4\uC0AC \uC644\uB8CC",magLabel:"\uADDC\uBAA8 {0} \xB7 {1}",count:"{0} / {1}\uB3D9",smash:"{0} \uBD80\uC218\uAE30",card:["\uC810\uC218","\uCD5C\uACE0 \uC9C1\uAE09","\uD68C\uC0AC \uD30C\uAD34\uC728","\uBB34\uB108\uC9C4 \uAC74\uBB3C","\uD310 \uAE4A\uC774"],hud:["\uD68C\uC0AC \uD30C\uAD34\uC728","\uBB34\uB108\uC9C4 \uAC74\uBB3C","\uD310 \uAE4A\uC774"],btn:{label:"\uC774\uB984\uD45C",night:"\uBC24",sound:"\uC18C\uB9AC",soundOff:"\uC18C\uB9AC \uAEBC\uC9D0",reset:"\uCC98\uC74C\uBD80\uD130",rank:"\uB7AD\uD0B9",card:"\uC778\uC99D\uC0F7",hub:"\uB2E4\uB978 \uD68C\uC0AC \uACE0\uB974\uAE30 \u2192",save:"\uC800\uC7A5",close:"\uB2EB\uAE30",submit:"\uB7AD\uD0B9 \uB4F1\uB85D",allRank:"\uD68C\uC0AC\uBCC4 \uC21C\uC704 \u2192"},quality:"\uD654\uC9C8 {0}",qDown:"\uB290\uB824\uC11C \uD654\uC9C8\uC744 '{0}'\uC73C\uB85C \uB0AE\uCDC4\uC5B4\uC694",noGpu:"\uBE0C\uB77C\uC6B0\uC800 \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC774 \uAEBC\uC838 \uC788\uC5B4 \uB290\uB9B4 \uC218 \uC788\uC5B4\uC694 (\uC124\uC815 \u2192 \uC2DC\uC2A4\uD15C \u2192 \uADF8\uB798\uD53D \uAC00\uC18D \uC0AC\uC6A9)",hint:"\uAC74\uBB3C\uC744 \uB20C\uB7EC \uBD80\uC218\uC138\uC694 \xB7 \uC22B\uC790 1~6\uC73C\uB85C \uB3C4\uAD6C \uBCC0\uACBD",start:"\uCD9C\uADFC\uD558\uAE30",how:"\uAC74\uBB3C\uC744 \uB20C\uB7EC \uBD80\uC218\uAE30 \xB7 \uB04C\uC5B4\uC11C \uD68C\uC804 \xB7 \uD720/\uB450 \uC190\uAC00\uB77D \uD655\uB300<br>\uB3C4\uAD6C\uB97C \uBC14\uAFD4 \uAC00\uBA70 \uBD80\uC218\uBA74 \uBC30\uC728\uC774 \uBD99\uACE0 \uC9C1\uAE09\uC774 \uC624\uB985\uB2C8\uB2E4",credit:"\uC9C0\uB3C4 \xA9 OpenStreetMap \uAE30\uC5EC\uC790 (ODbL) \xB7 {0} {1} \uAC74\uBB3C {2}\uB3D9 \xB7 \uBE44\uACF5\uC2DD \uD328\uB7EC\uB514 \uAC8C\uC784",saveHint:"\uC800\uC7A5\uC774 \uC548 \uB418\uBA74 \uC774\uBBF8\uC9C0\uB97C \uAE38\uAC8C \uB204\uB974\uAC70\uB098 \uC624\uB978\uCABD \uD074\uB9AD\uD574\uC11C \uC800\uC7A5\uD558\uC138\uC694",nickPh:"\uB7AD\uD0B9\uC5D0 \uC62C\uB9B4 \uC774\uB984 (12\uC790)",rank:{off:"\uB7AD\uD0B9 \uC11C\uBC84 \uC900\uBE44 \uC911\uC774\uC5D0\uC694.",loading:"\uBD88\uB7EC\uC624\uB294 \uC911\u2026",empty:"\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694. \uCCAB \uBC88\uC9F8\uB85C \uC774\uB984\uC744 \uC62C\uB9AC\uC138\uC694!",fail:"\uB7AD\uD0B9\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694.",anon:"\uC775\uBA85 \uC9C1\uC7A5\uC778",sending:"\uB4F1\uB85D \uC911\u2026",done:"{0} {1}\uC704\uB85C \uB4F1\uB85D\uD588\uC5B4\uC694!",fast:"\uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uB4F1\uB85D\uD574 \uC8FC\uC138\uC694",err:"\uB4F1\uB85D\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694",title:"{0} \uB7AD\uD0B9"},hover:["\uC8FC\uBCC0 \uAC74\uBB3C","{0} m \xB7 \uB0A8\uC740 {1}%"],km:"km",m:"m"},en:{q:["Low","Medium","High"],ranks:["Intern","Associate","Senior","Manager","Sr. Manager","Director","VP","RAGE QUIT"],envelope:"I QUIT",board:["Staff","Lead","Mgr","Dir"],reject:"REJECTED",tools:{bomb:["Resignation Bomb","Resign","Throw your resignation letter: wide blast and a crater"],bat:["Clipboard Swing","Clipboard","Swing a giant approval clipboard. Over 70 m is a home run"],laser:["Excel Laser","Laser","Drag to draw a line and the beam sweeps it. Tap for a single burn"],meteor:["Bonus Meteor","Meteor","Your annual bonus falls from the sky as a meteor"],quake:["Monday Quake","Quake","Tap the epicenter. Magnitude 7.5+ flattens whole buildings"],nuke:["Quit Nuke","Nuke","Wipes out everything within 420 m"]},batSize:"Clipboard size",mag:"Magnitude",qk:["shaking","partial collapse","total collapse"],labels:{bomb:["I QUIT!","Effective immediately","PTO: used up"],bat:["REJECTED!","Please revise","Approved","Per my last email"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","Circular reference!"],meteor:["Bonus: $0","Exceeds expectations (not)","Salary freeze"],quake:["Monday 9:00 AM","All-hands meeting","Quick sync?"],nuke:["I quit.","Thanks for everything"]},promo:"Promoted! {0}",collapse:"{0} collapsed!",collapseSmall:"{0} down",nextBldg:"Neighbor down",noName:"{0} unnamed building",core:"Earth's core reached! Keep digging to {0}",coreBonus:"Core bonus",homerun:"Home run! {0} m",homerunShort:"HR {0}m",quit:"Resignation accepted",magLabel:"M {0} \xB7 {1}",count:"{0} / {1}",smash:"Smash {0}",card:["Score","Top rank","Destroyed","Buildings down","Dig depth"],hud:["Destroyed","Buildings down","Dig depth"],btn:{label:"Labels",night:"Night",sound:"Sound",soundOff:"Muted",reset:"Restart",rank:"Ranking",card:"Screenshot",hub:"Pick another company \u2192",save:"Save",close:"Close",submit:"Submit score",allRank:"Company ranking \u2192"},quality:"Quality {0}",qDown:"Too slow \u2014 quality lowered to '{0}'",noGpu:"Hardware acceleration is off in your browser, so it may be slow",hint:"Click buildings to smash \xB7 keys 1\u20136 switch tools",start:"Clock in",how:"Click to smash \xB7 drag to rotate \xB7 wheel/pinch to zoom<br>Switch tools to build a multiplier and climb the ladder",credit:"Map \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1}, {2} buildings \xB7 unofficial parody game",saveHint:"If saving fails, long-press or right-click the image",nickPh:"Name for the ranking (12 chars)",rank:{off:"Ranking server coming soon.",loading:"Loading\u2026",empty:"No records yet. Be the first!",fail:"Could not load the ranking.",anon:"Anonymous worker",sending:"Submitting\u2026",done:"You are #{1} at {0}!",fast:"Please wait a moment and try again",err:"Could not submit",title:"{0} ranking"},hover:["Nearby building","{0} m \xB7 {1}% left"],km:"km",m:"m"},ja:{q:["\u4F4E","\u4E2D","\u9AD8"],ranks:["\u30A4\u30F3\u30BF\u30FC\u30F3","\u5E73\u793E\u54E1","\u4E3B\u4EFB","\u4FC2\u9577","\u8AB2\u9577","\u90E8\u9577","\u5F79\u54E1","\u9000\u8077\u5C4A"],envelope:"\u9000\u8077\u5C4A",board:["\u62C5\u5F53","\u8AB2\u9577","\u90E8\u9577","\u672C\u90E8\u9577"],reject:"\u5374\u4E0B",tools:{bomb:["\u9000\u8077\u5C4A\u30DC\u30E0","\u9000\u8077\u5C4A","\u9000\u8077\u5C4A\u3092\u6295\u3052\u3064\u3051\u3066\u5E83\u304F\u5439\u304D\u98DB\u3070\u3057\u3001\u7A74\u3092\u3042\u3051\u307E\u3059"],bat:["\u7A1F\u8B70\u66F8\u30D5\u30EB\u30B9\u30A4\u30F3\u30B0","\u7A1F\u8B70\u66F8","\u5DE8\u5927\u306A\u7A1F\u8B70\u30D0\u30A4\u30F3\u30C0\u30FC\u3067\u6253\u3063\u3066\u9060\u304F\u3078\u98DB\u3070\u3057\u307E\u3059\u300270 m\u8D85\u3048\u3067\u30DB\u30FC\u30E0\u30E9\u30F3"],laser:["\u30A8\u30AF\u30BB\u30EB\u30EC\u30FC\u30B6\u30FC","\u30EC\u30FC\u30B6\u30FC","\u30C9\u30E9\u30C3\u30B0\u3067\u7DDA\u3092\u5F15\u304F\u3068\u30D3\u30FC\u30E0\u304C\u306A\u305E\u308A\u307E\u3059\u3002\u30BF\u30C3\u30D7\u3067\u4E00\u70B9"],meteor:["\u30DC\u30FC\u30CA\u30B9\u9695\u77F3","\u9695\u77F3","\u7A7A\u304B\u3089\u30DC\u30FC\u30CA\u30B9\u304C\u9695\u77F3\u306B\u306A\u3063\u3066\u964D\u3063\u3066\u304D\u307E\u3059"],quake:["\u6708\u66DC\u75C5\u5730\u9707","\u5730\u9707","\u30BF\u30C3\u30D7\u3057\u305F\u6240\u304C\u9707\u6E90\u3002M7.5\u4EE5\u4E0A\u3067\u5EFA\u7269\u3054\u3068\u5D29\u308C\u307E\u3059"],nuke:["\u9000\u8077\u6838\u7206\u5F3E","\u6838\u7206\u5F3E","\u534A\u5F84420 m\u3092\u4E38\u3054\u3068\u5439\u304D\u98DB\u3070\u3057\u307E\u3059"]},batSize:"\u30D0\u30A4\u30F3\u30C0\u30FC\u306E\u5927\u304D\u3055",mag:"\u898F\u6A21",qk:["\u63FA\u308C","\u4E00\u90E8\u5D29\u58CA","\u5168\u58CA"],labels:{bomb:["\u9000\u8077\u5C4A\u63D0\u51FA!","\u672C\u65E5\u4ED8\u3067\u8F9E\u3081\u307E\u3059","\u6709\u7D66\u6D88\u5316\u5B8C\u4E86"],bat:["\u5374\u4E0B!","\u518D\u691C\u8A0E\u3057\u3066\u304F\u3060\u3055\u3044","\u627F\u8A8D","\u3084\u308A\u76F4\u3057"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","\u5FAA\u74B0\u53C2\u7167!"],meteor:["\u30DC\u30FC\u30CA\u30B90\u5186","S\u8A55\u4FA1(\u3067\u306F\u306A\u3044)","\u6607\u7D66\u306A\u3057"],quake:["\u6708\u66DC9:00","\u5B9A\u4F8B\u4F1A\u8B70","\u81F3\u6025\u5BFE\u5FDC"],nuke:["\u304A\u4E16\u8A71\u306B\u306A\u308A\u307E\u3057\u305F","\u9000\u8077\u3057\u307E\u3059"]},promo:"\u6607\u9032! {0}",collapse:"{0} \u5D29\u58CA!",collapseSmall:"{0} \u5D29\u58CA",nextBldg:"\u96A3\u306E\u30D3\u30EB\u5D29\u58CA",noName:"{0} \u540D\u524D\u306E\u306A\u3044\u68DF",core:"\u5730\u7403\u306E\u4E2D\u5FC3\u306B\u5230\u9054! \u3055\u3089\u306B\u6398\u308B\u3068{0}",coreBonus:"\u5730\u7403\u306E\u4E2D\u5FC3\u30DC\u30FC\u30CA\u30B9",homerun:"\u30DB\u30FC\u30E0\u30E9\u30F3! {0} m",homerunShort:"HR {0}m",quit:"\u9000\u8077\u5B8C\u4E86",magLabel:"M{0} \xB7 {1}",count:"{0} / {1}\u68DF",smash:"{0}\u3092\u3076\u3063\u58CA\u305B",card:["\u30B9\u30B3\u30A2","\u6700\u9AD8\u5F79\u8077","\u7834\u58CA\u7387","\u5D29\u308C\u305F\u5EFA\u7269","\u6398\u3063\u305F\u6DF1\u3055"],hud:["\u7834\u58CA\u7387","\u5D29\u308C\u305F\u5EFA\u7269","\u6398\u3063\u305F\u6DF1\u3055"],btn:{label:"\u540D\u672D",night:"\u591C",sound:"\u97F3",soundOff:"\u6D88\u97F3",reset:"\u6700\u521D\u304B\u3089",rank:"\u30E9\u30F3\u30AD\u30F3\u30B0",card:"\u30B9\u30AF\u30B7\u30E7",hub:"\u4ED6\u306E\u4F1A\u793E\u3092\u9078\u3076 \u2192",save:"\u4FDD\u5B58",close:"\u9589\u3058\u308B",submit:"\u30E9\u30F3\u30AD\u30F3\u30B0\u767B\u9332",allRank:"\u4F1A\u793E\u5225\u30E9\u30F3\u30AD\u30F3\u30B0 \u2192"},quality:"\u753B\u8CEA {0}",qDown:"\u91CD\u3044\u306E\u3067\u753B\u8CEA\u3092\u300C{0}\u300D\u306B\u4E0B\u3052\u307E\u3057\u305F",noGpu:"\u30D6\u30E9\u30A6\u30B6\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u30AA\u30D5\u306E\u305F\u3081\u91CD\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059",hint:"\u5EFA\u7269\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u58CA\u305D\u3046 \xB7 1\u301C6\u30AD\u30FC\u3067\u9053\u5177\u5207\u66FF",start:"\u51FA\u793E\u3059\u308B",how:"\u30AF\u30EA\u30C3\u30AF\u3067\u7834\u58CA \xB7 \u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2 \xB7 \u30DB\u30A4\u30FC\u30EB/\u30D4\u30F3\u30C1\u3067\u62E1\u5927<br>\u9053\u5177\u3092\u5207\u308A\u66FF\u3048\u308B\u3068\u500D\u7387\u304C\u4E0A\u304C\u308A\u3001\u51FA\u4E16\u3057\u307E\u3059",credit:"\u5730\u56F3 \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1} \u5EFA\u7269{2}\u68DF \xB7 \u975E\u516C\u5F0F\u30D1\u30ED\u30C7\u30A3\u30B2\u30FC\u30E0",saveHint:"\u4FDD\u5B58\u3067\u304D\u306A\u3044\u5834\u5408\u306F\u753B\u50CF\u3092\u9577\u62BC\u3057\u307E\u305F\u306F\u53F3\u30AF\u30EA\u30C3\u30AF",nickPh:"\u30E9\u30F3\u30AD\u30F3\u30B0\u7528\u306E\u540D\u524D(12\u6587\u5B57)",rank:{off:"\u30E9\u30F3\u30AD\u30F3\u30B0\u30B5\u30FC\u30D0\u30FC\u6E96\u5099\u4E2D\u3067\u3059\u3002",loading:"\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026",empty:"\u307E\u3060\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u4E00\u756A\u4E57\u308A\u3057\u3088\u3046!",fail:"\u30E9\u30F3\u30AD\u30F3\u30B0\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002",anon:"\u540D\u7121\u3057\u306E\u793E\u755C",sending:"\u767B\u9332\u4E2D\u2026",done:"{0}\u3067{1}\u4F4D\u306B\u767B\u9332\u3057\u307E\u3057\u305F!",fast:"\u5C11\u3057\u5F85\u3063\u3066\u304B\u3089\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044",err:"\u767B\u9332\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F",title:"{0} \u30E9\u30F3\u30AD\u30F3\u30B0"},hover:["\u5468\u8FBA\u306E\u5EFA\u7269","{0} m \xB7 \u6B8B\u308A{1}%"],km:"km",m:"m"},zh:{q:["\u4F4E","\u4E2D","\u9AD8"],ranks:["\u5B9E\u4E60\u751F","\u804C\u5458","\u4E3B\u7BA1","\u7ECF\u7406","\u9AD8\u7EA7\u7ECF\u7406","\u603B\u76D1","\u526F\u603B\u88C1","\u88F8\u8F9E"],envelope:"\u8F9E\u804C\u4FE1",board:["\u7ECF\u529E","\u7EC4\u957F","\u7ECF\u7406","\u603B\u76D1"],reject:"\u9A73\u56DE",tools:{bomb:["\u8F9E\u804C\u4FE1\u70B8\u5F39","\u8F9E\u804C\u4FE1","\u6254\u51FA\u8F9E\u804C\u4FE1\uFF0C\u70B8\u98DE\u4E00\u5927\u7247\u5E76\u70B8\u51FA\u5751"],bat:["\u5BA1\u6279\u5939\u5168\u529B\u6325\u51FB","\u5BA1\u6279\u5939","\u7528\u5DE8\u5927\u7684\u5BA1\u6279\u5939\u628A\u697C\u5757\u6253\u98DE\u3002\u8D85\u8FC770\u7C73\u7B97\u672C\u5792\u6253"],laser:["Excel\u6FC0\u5149","\u6FC0\u5149","\u62D6\u52A8\u753B\u7EBF\uFF0C\u6FC0\u5149\u6CBF\u7EBF\u626B\u8FC7\u3002\u70B9\u4E00\u4E0B\u53EA\u70E7\u4E00\u70B9"],meteor:["\u5E74\u7EC8\u5956\u9668\u77F3","\u9668\u77F3","\u5E74\u7EC8\u5956\u5316\u4F5C\u9668\u77F3\u4ECE\u5929\u800C\u964D"],quake:["\u5468\u4E00\u7EFC\u5408\u5F81\u5730\u9707","\u5730\u9707","\u70B9\u51FB\u5904\u4E3A\u9707\u4E2D\u30027.5\u7EA7\u4EE5\u4E0A\u6574\u680B\u697C\u4F1A\u584C"],nuke:["\u79BB\u804C\u6838\u5F39","\u6838\u5F39","\u534A\u5F84420\u7C73\u5168\u90E8\u5937\u5E73"]},batSize:"\u5BA1\u6279\u5939\u5927\u5C0F",mag:"\u9707\u7EA7",qk:["\u6447\u6643","\u90E8\u5206\u5012\u584C","\u5168\u90E8\u5012\u584C"],labels:{bomb:["\u8F9E\u804C\u4FE1\u5DF2\u63D0\u4EA4!","\u5373\u65E5\u8D77\u79BB\u804C","\u5E74\u5047\u5DF2\u4F11\u5B8C"],bat:["\u9A73\u56DE!","\u8BF7\u91CD\u65B0\u4FEE\u6539","\u5DF2\u5BA1\u6279","\u518D\u6539\u4E00\u7248"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","\u5FAA\u73AF\u5F15\u7528!"],meteor:["\u5E74\u7EC8\u59560\u5143","\u7EE9\u6548S(\u5E76\u4E0D\u662F)","\u5DE5\u8D44\u51BB\u7ED3"],quake:["\u5468\u4E009:00","\u5468\u4F1A\u5F00\u59CB","\u7D27\u6025\u6C47\u62A5"],nuke:["\u6211\u4E0D\u5E72\u4E86","\u611F\u8C22\u5404\u4F4D\u7167\u987E"]},promo:"\u5347\u804C! {0}",collapse:"{0} \u5012\u584C!",collapseSmall:"{0} \u5012\u584C",nextBldg:"\u9694\u58C1\u697C\u5012\u584C",noName:"{0} \u65E0\u540D\u697C",core:"\u62B5\u8FBE\u5730\u5FC3! \u7EE7\u7EED\u6316\u5C31\u5230{0}",coreBonus:"\u5730\u5FC3\u5956\u52B1",homerun:"\u672C\u5792\u6253! {0} \u7C73",homerunShort:"\u672C\u5792\u6253 {0}\u7C73",quit:"\u79BB\u804C\u6210\u529F",magLabel:"{0}\u7EA7 \xB7 {1}",count:"{0} / {1}\u680B",smash:"\u62C6\u4E86{0}",card:["\u5206\u6570","\u6700\u9AD8\u804C\u4F4D","\u7834\u574F\u7387","\u5012\u584C\u5EFA\u7B51","\u6316\u6398\u6DF1\u5EA6"],hud:["\u7834\u574F\u7387","\u5012\u584C\u5EFA\u7B51","\u6316\u6398\u6DF1\u5EA6"],btn:{label:"\u697C\u540D",night:"\u591C\u665A",sound:"\u58F0\u97F3",soundOff:"\u9759\u97F3",reset:"\u91CD\u6765",rank:"\u6392\u884C\u699C",card:"\u622A\u56FE",hub:"\u9009\u62E9\u5176\u4ED6\u516C\u53F8 \u2192",save:"\u4FDD\u5B58",close:"\u5173\u95ED",submit:"\u63D0\u4EA4\u6210\u7EE9",allRank:"\u516C\u53F8\u6392\u884C \u2192"},quality:"\u753B\u8D28 {0}",qDown:"\u592A\u5361\u4E86\uFF0C\u753B\u8D28\u5DF2\u964D\u4E3A\u201C{0}\u201D",noGpu:"\u6D4F\u89C8\u5668\u786C\u4EF6\u52A0\u901F\u5DF2\u5173\u95ED\uFF0C\u53EF\u80FD\u4F1A\u5361\u987F",hint:"\u70B9\u51FB\u5EFA\u7B51\u5F00\u62C6 \xB7 \u6570\u5B57\u952E1~6\u5207\u6362\u9053\u5177",start:"\u4E0A\u73ED\u6253\u5361",how:"\u70B9\u51FB\u62C6\u697C \xB7 \u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E/\u53CC\u6307\u7F29\u653E<br>\u6362\u7740\u9053\u5177\u62C6\u53EF\u4EE5\u53E0\u500D\u7387\u3001\u5347\u804C",credit:"\u5730\u56FE \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1} \u5171{2}\u680B \xB7 \u975E\u5B98\u65B9\u6076\u641E\u6E38\u620F",saveHint:"\u65E0\u6CD5\u4FDD\u5B58\u65F6\u8BF7\u957F\u6309\u6216\u53F3\u952E\u4FDD\u5B58\u56FE\u7247",nickPh:"\u6392\u884C\u699C\u6635\u79F0(12\u5B57\u4EE5\u5185)",rank:{off:"\u6392\u884C\u699C\u670D\u52A1\u5668\u51C6\u5907\u4E2D\u3002",loading:"\u52A0\u8F7D\u4E2D\u2026",empty:"\u8FD8\u6CA1\u6709\u8BB0\u5F55\uFF0C\u6765\u5F53\u7B2C\u4E00\u540D!",fail:"\u65E0\u6CD5\u52A0\u8F7D\u6392\u884C\u699C\u3002",anon:"\u533F\u540D\u6253\u5DE5\u4EBA",sending:"\u63D0\u4EA4\u4E2D\u2026",done:"\u5DF2\u767B\u4E0A{0}\u7B2C{1}\u540D!",fast:"\u8BF7\u7A0D\u540E\u518D\u63D0\u4EA4",err:"\u63D0\u4EA4\u5931\u8D25",title:"{0} \u6392\u884C\u699C"},hover:["\u5468\u8FB9\u5EFA\u7B51","{0} \u7C73 \xB7 \u5269\u4F59{1}%"],km:"\u516C\u91CC",m:"\u7C73"},vi:{q:["Th\u1EA5p","V\u1EEBa","Cao"],ranks:["Th\u1EF1c t\u1EADp","Nh\xE2n vi\xEAn","Chuy\xEAn vi\xEAn","Tr\u01B0\u1EDFng nh\xF3m","Tr\u01B0\u1EDFng ph\xF2ng","Gi\xE1m \u0111\u1ED1c","Ph\xF3 TG\u0110","NGH\u1EC8 VI\u1EC6C"],envelope:"\u0110\u01A0N NGH\u1EC8",board:["NV","TN","TP","G\u0110"],reject:"T\u1EEA CH\u1ED0I",tools:{bomb:["Bom \u0111\u01A1n ngh\u1EC9 vi\u1EC7c","\u0110\u01A1n ngh\u1EC9","N\xE9m \u0111\u01A1n ngh\u1EC9 vi\u1EC7c: n\u1ED5 r\u1ED9ng v\xE0 t\u1EA1o h\u1ED1"],bat:["C\xFA v\u1EE5t b\xECa tr\xECnh k\xFD","B\xECa k\xFD","V\u1EE5t b\xECa tr\xECnh k\xFD kh\u1ED5ng l\u1ED3 cho bay xa. Tr\xEAn 70 m l\xE0 home run"],laser:["Laser Excel","Laser","K\xE9o \u0111\u1EC3 v\u1EBD \u0111\u01B0\u1EDDng, tia laser qu\xE9t theo. Ch\u1EA1m \u0111\u1EC3 \u0111\u1ED1t m\u1ED9t \u0111i\u1EC3m"],meteor:["Thi\xEAn th\u1EA1ch th\u01B0\u1EDFng T\u1EBFt","Thi\xEAn th\u1EA1ch","Th\u01B0\u1EDFng T\u1EBFt r\u01A1i t\u1EEB tr\u1EDDi xu\u1ED1ng th\xE0nh thi\xEAn th\u1EA1ch"],quake:["\u0110\u1ED9ng \u0111\u1EA5t th\u1EE9 Hai","\u0110\u1ED9ng \u0111\u1EA5t","Ch\u1EA1m v\xE0o t\xE2m ch\u1EA5n. T\u1EEB 7.5 \u0111\u1ED9 c\u1EA3 t\xF2a nh\xE0 s\u1EE5p"],nuke:["Bom h\u1EA1t nh\xE2n ngh\u1EC9 vi\u1EC7c","H\u1EA1t nh\xE2n","X\xF3a s\u1ED5 m\u1ECDi th\u1EE9 trong b\xE1n k\xEDnh 420 m"]},batSize:"C\u1EE1 b\xECa k\xFD",mag:"\u0110\u1ED9 l\u1EDBn",qk:["rung l\u1EAFc","s\u1EADp m\u1ED9t ph\u1EA7n","s\u1EADp to\xE0n b\u1ED9"],labels:{bomb:["Em xin ngh\u1EC9!","Ngh\u1EC9 t\u1EEB h\xF4m nay","H\u1EBFt ph\xE9p n\u0103m"],bat:["T\u1EEA CH\u1ED0I!","L\xE0m l\u1EA1i \u0111i em","\u0110\xE3 duy\u1EC7t","S\u1EEDa b\u1EA3n 17"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","Tham chi\u1EBFu v\xF2ng!"],meteor:["Th\u01B0\u1EDFng T\u1EBFt: 0\u0111","Xu\u1EA5t s\u1EAFc (kh\xF4ng ph\u1EA3i)","\u0110\xF3ng b\u0103ng l\u01B0\u01A1ng"],quake:["Th\u1EE9 Hai 8:00","H\u1ECDp giao ban","B\xE1o c\xE1o g\u1EA5p"],nuke:["Em ngh\u1EC9 \u0111\xE2y","C\u1EA3m \u01A1n m\u1ECDi ng\u01B0\u1EDDi"]},promo:"Th\u0103ng ch\u1EE9c! {0}",collapse:"{0} s\u1EADp!",collapseSmall:"{0} s\u1EADp",nextBldg:"T\xF2a b\xEAn c\u1EA1nh s\u1EADp",noName:"{0} t\xF2a kh\xF4ng t\xEAn",core:"\u0110\u1EBFn t\xE2m Tr\xE1i \u0110\u1EA5t! \u0110\xE0o ti\u1EBFp s\u1EBD t\u1EDBi {0}",coreBonus:"Th\u01B0\u1EDFng t\xE2m Tr\xE1i \u0110\u1EA5t",homerun:"Home run! {0} m",homerunShort:"HR {0}m",quit:"Ngh\u1EC9 vi\u1EC7c th\xE0nh c\xF4ng",magLabel:"{0} \u0111\u1ED9 \xB7 {1}",count:"{0} / {1} t\xF2a",smash:"\u0110\u1EADp {0}",card:["\u0110i\u1EC3m","Ch\u1EE9c cao nh\u1EA5t","T\u1EC9 l\u1EC7 ph\xE1 h\u1EE7y","T\xF2a nh\xE0 s\u1EADp","\u0110\u1ED9 s\xE2u \u0111\xE0o"],hud:["T\u1EC9 l\u1EC7 ph\xE1 h\u1EE7y","T\xF2a nh\xE0 s\u1EADp","\u0110\u1ED9 s\xE2u \u0111\xE0o"],btn:{label:"T\xEAn t\xF2a",night:"\u0110\xEAm",sound:"\xC2m thanh",soundOff:"T\u1EAFt ti\u1EBFng",reset:"Ch\u01A1i l\u1EA1i",rank:"X\u1EBFp h\u1EA1ng",card:"Ch\u1EE5p m\xE0n h\xECnh",hub:"Ch\u1ECDn c\xF4ng ty kh\xE1c \u2192",save:"L\u01B0u",close:"\u0110\xF3ng",submit:"G\u1EEDi \u0111i\u1EC3m",allRank:"X\u1EBFp h\u1EA1ng c\xF4ng ty \u2192"},quality:"\u0110\u1ED3 h\u1ECDa {0}",qDown:"M\xE1y ch\u1EADm \u2014 \u0111\xE3 gi\u1EA3m \u0111\u1ED3 h\u1ECDa xu\u1ED1ng '{0}'",noGpu:"Tr\xECnh duy\u1EC7t \u0111ang t\u1EAFt t\u0103ng t\u1ED1c ph\u1EA7n c\u1EE9ng n\xEAn c\xF3 th\u1EC3 ch\u1EADm",hint:"B\u1EA5m v\xE0o t\xF2a nh\xE0 \u0111\u1EC3 \u0111\u1EADp \xB7 ph\xEDm 1\u20136 \u0111\u1ED5i c\xF4ng c\u1EE5",start:"\u0110i l\xE0m",how:"B\u1EA5m \u0111\u1EC3 \u0111\u1EADp \xB7 k\xE9o \u0111\u1EC3 xoay \xB7 cu\u1ED9n/hai ng\xF3n \u0111\u1EC3 ph\xF3ng to<br>\u0110\u1ED5i c\xF4ng c\u1EE5 li\xEAn t\u1EE5c \u0111\u1EC3 nh\xE2n \u0111i\u1EC3m v\xE0 th\u0103ng ch\u1EE9c",credit:"B\u1EA3n \u0111\u1ED3 \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1}, {2} t\xF2a \xB7 game nh\u1EA1i kh\xF4ng ch\xEDnh th\u1EE9c",saveHint:"N\u1EBFu kh\xF4ng l\u01B0u \u0111\u01B0\u1EE3c, h\xE3y nh\u1EA5n gi\u1EEF ho\u1EB7c chu\u1ED9t ph\u1EA3i v\xE0o \u1EA3nh",nickPh:"T\xEAn tr\xEAn b\u1EA3ng x\u1EBFp h\u1EA1ng (12 k\xFD t\u1EF1)",rank:{off:"M\xE1y ch\u1EE7 x\u1EBFp h\u1EA1ng s\u1EAFp ra m\u1EAFt.",loading:"\u0110ang t\u1EA3i\u2026",empty:"Ch\u01B0a c\xF3 ai. H\xE3y l\xE0 ng\u01B0\u1EDDi \u0111\u1EA7u ti\xEAn!",fail:"Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c b\u1EA3ng x\u1EBFp h\u1EA1ng.",anon:"D\xE2n v\u0103n ph\xF2ng \u1EA9n danh",sending:"\u0110ang g\u1EEDi\u2026",done:"B\u1EA1n h\u1EA1ng {1} t\u1EA1i {0}!",fast:"Vui l\xF2ng \u0111\u1EE3i m\u1ED9t ch\xFAt r\u1ED3i g\u1EEDi l\u1EA1i",err:"Kh\xF4ng g\u1EEDi \u0111\u01B0\u1EE3c",title:"X\u1EBFp h\u1EA1ng {0}"},hover:["T\xF2a nh\xE0 l\xE2n c\u1EADn","{0} m \xB7 c\xF2n {1}%"],km:"km",m:"m"}};function fd(i,t={}){let e=Sc[i]||Sc.ko,n=(r,a)=>a.split(".").reduce((o,l)=>o==null?o:o[l],r);return(r,...a)=>{let o=n(t,r);return o==null&&(o=n(e,r)),o==null&&(o=n(Sc.ko,r)),typeof o=="string"?o.replace(/\{(\d)\}/g,(l,c)=>a[+c]??""):o}}var pd={ko:{hospital:{ranks:["\uC778\uD134","\uB808\uC9C0\uB358\uD2B8 1\uB144\uCC28","\uB808\uC9C0\uB358\uD2B8 4\uB144\uCC28","\uC804\uC784\uC758","\uC870\uAD50\uC218","\uBD80\uAD50\uC218","\uAD50\uC218","\uBCD1\uC6D0\uC7A5"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uC8FC\uCE58\uC758","\uC804\uACF5\uC758","\uAD50\uC218","\uACFC\uC7A5"],reject:"\uBCF4\uB958",tools:{bomb:["\uC804\uACF5\uC758 \uC0AC\uC9C1\uC11C","\uC0AC\uC9C1\uC11C","\uC0AC\uC9C1\uC11C\uB97C \uB358\uC838 \uBCD1\uB3D9\uC744 \uB0A0\uB9BD\uB2C8\uB2E4"],bat:["\uCC28\uD2B8 \uD480\uC2A4\uC719","\uCC28\uD2B8","\uB450\uAEBC\uC6B4 \uC758\uBB34\uAE30\uB85D \uCC28\uD2B8\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4. 70 m \uB118\uC73C\uBA74 \uD648\uB7F0"],laser:["\uC218\uC220 \uB808\uC774\uC800","\uB808\uC774\uC800","\uB04C\uC5B4\uC11C \uC808\uAC1C\uC120\uC744 \uADF8\uC73C\uBA74 \uB808\uC774\uC800\uAC00 \uB530\uB77C \uC790\uB985\uB2C8\uB2E4"],meteor:["\uC9C4\uD1B5\uC81C \uC6B4\uC11D","\uC54C\uC57D","\uD558\uB298\uC5D0\uC11C \uAC70\uB300\uD55C \uC54C\uC57D\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["36\uC2DC\uAC04 \uB2F9\uC9C1 \uC9C0\uC9C4","\uB2F9\uC9C1","\uB204\uB978 \uACF3\uC774 \uC9C4\uC6D0. \uADDC\uBAA8 7.5 \uC774\uC0C1\uC774\uBA74 \uBCD1\uB3D9\uC774 \uD1B5\uC9F8\uB85C \uC8FC\uC800\uC549\uC2B5\uB2C8\uB2E4"],nuke:["\uC9D1\uB2E8 \uC0AC\uC9C1 \uD575\uD3ED\uD0C4","\uC9D1\uB2E8\uC0AC\uC9C1","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uC624\uB298\uBD80\uB85C \uC0AC\uC9C1\uD569\uB2C8\uB2E4","\uC624\uD504 \uBC18\uB0A9 \uAC70\uBD80","\uCF5C \uC548 \uBC1B\uC2B5\uB2C8\uB2E4"],bat:["\uC624\uB354 \uBCC0\uACBD!","\uCC28\uD305 \uB2E4\uC2DC \uD574","\uD68C\uC9C4 \uC9C0\uC5F0"],laser:["\uC808\uAC1C!","\uC9C0\uD608 \uC2E4\uD328","\uBD09\uD569\uC740 \uB0B4\uC77C"],meteor:["\uC218\uC561 \uB9DE\uACE0 \uCD9C\uADFC","\uC9C4\uD1B5\uC81C 2\uC54C","\uCE74\uD398\uC778 IV"],quake:["\uC751\uAE09\uC2E4 \uCF5C","\uCF54\uB4DC \uBE14\uB8E8","\uC0C8\uBCBD 3\uC2DC \uCF5C"],nuke:["\uBCD1\uC6D0 \uB5A0\uB0A9\uB2C8\uB2E4","\uC218\uB828 \uD3EC\uAE30"]},meteor:"pill",beam:["#ffffff","#38bdf8"]},law:{ranks:["\uC778\uD134","\uC5B4\uC3D8 1\uB144\uCC28","\uC5B4\uC3D8 3\uB144\uCC28","\uC2DC\uB2C8\uC5B4 \uC5B4\uC3D8","\uC8FC\uB2C8\uC5B4 \uD30C\uD2B8\uB108","\uD30C\uD2B8\uB108","\uC2DC\uB2C8\uC5B4 \uD30C\uD2B8\uB108","\uD0C8\uCD9C"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uC5B4\uC3D8","\uC2DC\uB2C8\uC5B4","\uD30C\uD2B8\uB108","\uB300\uD45C"],reject:"\uC7AC\uC791\uC131",tools:{bomb:["\uC0AC\uC9C1\uC11C \uD3ED\uD0C4","\uC0AC\uC9C1\uC11C","\uBE4C\uB7EC\uBE14 \uC544\uC6CC\uB97C \uBC84\uB9AC\uACE0 \uC0AC\uC9C1\uC11C\uB97C \uB358\uC9D1\uB2C8\uB2E4"],bat:["\uC900\uBE44\uC11C\uBA74 \uD480\uC2A4\uC719","\uC11C\uBA74","300\uCABD\uC9DC\uB9AC \uC900\uBE44\uC11C\uBA74 \uBB49\uCE58\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uD0C0\uC784\uC2DC\uD2B8 \uB808\uC774\uC800","\uD0C0\uC784\uC2DC\uD2B8","6\uBD84 \uB2E8\uC704\uB85C \uC815\uD655\uD788 \uC798\uB77C \uB0C5\uB2C8\uB2E4"],meteor:["\uC18C\uC1A1\uBE44\uC6A9 \uC6B4\uC11D","\uC18C\uC1A1\uBE44\uC6A9","\uD328\uC18C\uD55C \uCABD \uC18C\uC1A1\uBE44\uC6A9\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD310\uACB0 \uC120\uACE0 \uC9C0\uC9C4","\uC120\uACE0","\uB204\uB978 \uACF3\uC5D0\uC11C \uD310\uACB0\uC774 \uC120\uACE0\uB429\uB2C8\uB2E4"],nuke:["\uC9D1\uB2E8\uC18C\uC1A1 \uD575\uD3ED\uD0C4","\uC9D1\uB2E8\uC18C\uC1A1","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uBE4C\uB7EC\uBE14 0\uC2DC\uAC04","\uD1F4\uC0AC\uD569\uB2C8\uB2E4","\uC8FC\uB9D0 \uBC18\uB0A9 \uB05D"],bat:["\uAC01\uD558!","\uAE30\uAC01!","\uBCF4\uC815\uBA85\uB839"],laser:["0.1\uC2DC\uAC04","0.3\uC2DC\uAC04","6\uBD84 \uCCAD\uAD6C"],meteor:["\uCC29\uC218\uAE08 \uBC18\uD658","\uC131\uACF5\uBCF4\uC218 0\uC6D0","\uD328\uC18C"],quake:["\uC8FC\uBB38: \uC6D0\uACE0 \uD328\uC18C","\uC0C1\uACE0 \uAE30\uAC01","\uBCC0\uB860 \uC7AC\uAC1C"],nuke:["\uB85C\uD38C \uD0C8\uCD9C","\uC778\uD558\uC6B0\uC2A4 \uAC11\uB2C8\uB2E4"]},meteor:"coin",beam:["#ffffff","#facc15"]},accounting:{ranks:["\uC778\uD134","\uC2A4\uD0ED","\uC2DC\uB2C8\uC5B4","\uB9E4\uB2C8\uC800","\uC2DC\uB2C8\uC5B4 \uB9E4\uB2C8\uC800","\uB514\uB809\uD130","\uD30C\uD2B8\uB108","\uC2DC\uC98C \uD0C8\uCD9C"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uC2A4\uD0ED","\uC2DC\uB2C8\uC5B4","\uB9E4\uB2C8\uC800","\uD30C\uD2B8\uB108"],reject:"\uC218\uC815\uC694\uB9DD",tools:{bomb:["\uC2DC\uC98C \uC0AC\uC9C1\uC11C","\uC0AC\uC9C1\uC11C","\uAC10\uC0AC \uC2DC\uC98C \uD55C\uAC00\uC6B4\uB370 \uC0AC\uC9C1\uC11C\uB97C \uB358\uC9D1\uB2C8\uB2E4"],bat:["\uAC10\uC0AC\uC870\uC11C \uD480\uC2A4\uC719","\uC870\uC11C","\uB450\uAEBC\uC6B4 \uAC10\uC0AC\uC870\uC11C\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC5D1\uC140 \uB808\uC774\uC800","\uC5D1\uC140","VLOOKUP\uCC98\uB7FC \uB05D\uAE4C\uC9C0 \uD6D1\uC2B5\uB2C8\uB2E4"],meteor:["\uBD84\uC2DD\uD68C\uACC4 \uC6B4\uC11D","\uBD84\uC2DD","\uC228\uACA8 \uB454 \uBD80\uCC44\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uACB0\uC0B0 \uC9C0\uC9C4","\uACB0\uC0B0","12\uC6D4 \uACB0\uC0B0\uC774 \uB36E\uCE69\uB2C8\uB2E4"],nuke:["\uC758\uACAC\uAC70\uC808 \uD575\uD3ED\uD0C4","\uC758\uACAC\uAC70\uC808","\uBC18\uACBD 420 m\uC5D0 \uC758\uACAC\uAC70\uC808\uC744 \uB0C5\uB2C8\uB2E4"]},labels:{bomb:["\uC2DC\uC98C \uB05D\uB098\uACE0 \uB098\uAC11\uB2C8\uB2E4","\uC8FC 100\uC2DC\uAC04 \uB05D","\uD1F4\uC0AC"],bat:["\uC870\uC11C \uB2E4\uC2DC","\uADFC\uAC70 \uBD99\uC5EC","\uB9AC\uBDF0 \uCF54\uBA58\uD2B8 47\uAC1C"],laser:["#REF!","#N/A","\uCC28\uC774 1\uC6D0","\uC21C\uD658 \uCC38\uC870!"],meteor:["\uD55C\uC815\uC758\uACAC","\uACC4\uC18D\uAE30\uC5C5 \uBD88\uD655\uC2E4","\uC7AC\uBB34\uC81C\uD45C \uC7AC\uC791\uC131"],quake:["12\uC6D4 31\uC77C","\uBD84\uAE30 \uAC80\uD1A0","\uC5F0\uACB0 \uACB0\uC0B0"],nuke:["\uC758\uACAC\uAC70\uC808","\uAC10\uC0AC\uC778 \uC0AC\uC784"]},meteor:"coin",beam:["#ffffff","#21d07a"]},broadcast:{ranks:["\uB9C9\uB0B4 \uC791\uAC00","FD","AD","\uC870\uC5F0\uCD9C","PD","CP","\uAD6D\uC7A5","\uC885\uC601"],envelope:"\uC0AC\uD45C",board:["\uC791\uAC00","AD","PD","CP"],reject:"NG",tools:{bomb:["\uC0AC\uD45C \uD3ED\uD0C4","\uC0AC\uD45C","\uC0DD\uBC29\uC1A1 \uC9C1\uC804 \uC0AC\uD45C\uB97C \uB358\uC9D1\uB2C8\uB2E4"],bat:["\uD050\uC2DC\uD2B8 \uD480\uC2A4\uC719","\uD050\uC2DC\uD2B8","\uB9D0\uC544 \uC954 \uD050\uC2DC\uD2B8\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC870\uBA85 \uB808\uC774\uC800","\uC870\uBA85","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uC870\uBA85\uC774 \uADF8 \uC120\uC744 \uD0DC\uC6C1\uB2C8\uB2E4"],meteor:["\uC2DC\uCCAD\uB960 \uC6B4\uC11D","\uC2DC\uCCAD\uB960","0.1% \uC2DC\uCCAD\uB960\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD3B8\uC131 \uAC1C\uD3B8 \uC9C0\uC9C4","\uAC1C\uD3B8","\uB204\uB978 \uACF3\uC5D0\uC11C \uD3B8\uC131\uC774 \uB4A4\uC9D1\uD799\uB2C8\uB2E4"],nuke:["\uC870\uAE30 \uC885\uC601 \uD575\uD3ED\uD0C4","\uC870\uAE30\uC885\uC601","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uBC29\uC1A1\uC0AC\uACE0!","\uC624\uB298 \uB179\uD654 \uD391\uD06C","\uC0AC\uD45C \uB0C5\uB2C8\uB2E4"],bat:["NG!","\uB2E4\uC2DC \uAC08\uAC8C\uC694","\uCEF7!"],laser:["\uC870\uBA85 OFF","\uC5ED\uAD11!","\uD654\uC774\uD2B8 \uC544\uC6C3"],meteor:["\uC2DC\uCCAD\uB960 0.1%","\uB3D9\uC2DC\uAC04\uB300 \uAF34\uCC0C","\uAD11\uACE0 \uC644\uD310 \uC2E4\uD328"],quake:["\uD3B8\uC131 \uC0AD\uC81C","\uACB0\uBC29","\uAE34\uAE09 \uD3B8\uC131"],nuke:["\uC870\uAE30 \uC885\uC601","\uC2DC\uC98C 2 \uC5C6\uC74C"]},meteor:"tv",beam:["#ffffff","#f472b6"]},telecom:{ranks:["\uC778\uD134","\uB9E4\uB2C8\uC800","\uC120\uC784","\uCC45\uC784","\uD300\uC7A5","\uB2F4\uB2F9","\uBCF8\uBD80\uC7A5","\uD574\uC9C0"],tools:{laser:["5G \uC804\uD30C \uB808\uC774\uC800","5G","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uC804\uD30C\uAC00 \uADF8 \uC120\uC744 \uD0DC\uC6C1\uB2C8\uB2E4"],meteor:["\uC694\uAE08 \uD3ED\uD0C4 \uC6B4\uC11D","\uC694\uAE08\uD3ED\uD0C4","\uB370\uC774\uD130 \uCD08\uACFC \uC694\uAE08\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD1B5\uC2E0 \uC7A5\uC560 \uC9C0\uC9C4","\uC7A5\uC560","\uB204\uB978 \uACF3\uC5D0\uC11C \uC804\uAD6D \uC7A5\uC560\uAC00 \uB0A9\uB2C8\uB2E4"],nuke:["\uC57D\uC815 \uD574\uC9C0 \uD575\uD3ED\uD0C4","\uD574\uC9C0","\uC704\uC57D\uAE08 \uC5C6\uC774 \uBC18\uACBD 420 m \uD574\uC9C0"]},labels:{laser:["\uC548\uD14C\uB098 0\uCE78","LTE \uC804\uD658","\uC2E0\uD638 \uC5C6\uC74C"],meteor:["\uB370\uC774\uD130 \uCD08\uACFC","\uB85C\uBC0D \uD3ED\uD0C4","\uBD80\uAC00\uC11C\uBE44\uC2A4 \uAC00\uC785\uB428"],quake:["\uC11C\uBE44\uC2A4 \uC7A5\uC560","\uBB38\uC790 \uC548 \uAC10","\uBCF5\uAD6C \uC911"],nuke:["\uBC88\uD638\uC774\uB3D9","\uC57D\uC815 \uB05D"]},meteor:"phone",beam:["#ffffff","#a78bfa"]},fashion:{ranks:["\uC778\uD134","MD \uBCF4\uC870","MD","\uB514\uC790\uC774\uB108","\uC218\uC11D \uB514\uC790\uC774\uB108","\uC2E4\uC7A5","\uB514\uB809\uD130","\uBE0C\uB79C\uB4DC \uCCA0\uC218"],tools:{bat:["\uD328\uD134\uC790 \uD480\uC2A4\uC719","\uD328\uD134\uC790","\uAC70\uB300\uD55C \uD328\uD134\uC790\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC7AC\uB2E8 \uB808\uC774\uC800","\uC7AC\uB2E8","\uB04C\uC5B4\uC11C \uC7AC\uB2E8\uC120\uC744 \uADF8\uC73C\uBA74 \uB808\uC774\uC800\uAC00 \uC790\uB985\uB2C8\uB2E4"],meteor:["\uC7AC\uACE0 \uC6B4\uC11D","\uC7AC\uACE0","\uC548 \uD314\uB9B0 \uC2DC\uC98C \uC7AC\uACE0\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uC2DC\uC98C\uC624\uD504 \uC9C0\uC9C4","\uC2DC\uC98C\uC624\uD504","70% \uC138\uC77C\uC774 \uB36E\uCE69\uB2C8\uB2E4"]},labels:{bat:["\uD54F\uC774 \uC548 \uB098\uC640","\uC0D8\uD50C \uB2E4\uC2DC","\uCEE8\uD38C \uBC18\uB824"],laser:["\uC7AC\uB2E8 \uC2E4\uC218","\uC2DC\uC811 0","\uC6D0\uB2E8 \uB85C\uC2A4"],meteor:["\uC7AC\uACE0 3\uB9CC \uC7A5","\uBC18\uD488 \uD3ED\uD0C4","\uC544\uC6B8\uB81B\uD589"],quake:["70% \uC138\uC77C","\uC2DC\uC98C\uC624\uD504","\uADE0\uC77C\uAC00"]},meteor:"rock",beam:["#ffffff","#fb7185"]},fab:{ranks:["\uC778\uD134","\uC0AC\uC6D0","\uC120\uC784","\uCC45\uC784","\uC218\uC11D","\uADF8\uB8F9\uC7A5","\uC0C1\uBB34","\uD1F4\uC0AC"],tools:{laser:["EUV \uB808\uC774\uC800","EUV","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uB178\uAD11\uD569\uB2C8\uB2E4"],meteor:["\uC6E8\uC774\uD37C \uC6B4\uC11D","\uC6E8\uC774\uD37C","300 mm \uC6E8\uC774\uD37C\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD074\uB9B0\uB8F8 \uC9C0\uC9C4","\uD074\uB9B0\uB8F8","\uB204\uB978 \uACF3\uC5D0\uC11C \uC218\uC728\uC774 \uBB34\uB108\uC9D1\uB2C8\uB2E4"],nuke:["\uC218\uC728 0% \uD575\uD3ED\uD0C4","\uC218\uC7280","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{laser:["\uB178\uAD11 \uBD88\uB7C9","\uD328\uD134 \uBD95\uAD34","\uD30C\uD2F0\uD074 \uAC80\uCD9C"],meteor:["\uC218\uC728 30%","\uC6E8\uC774\uD37C \uD3D0\uAE30","\uC7AC\uC791\uC5C5"],quake:["\uB77C\uC778 \uC815\uC9C0","\uD30C\uD2F0\uD074!","\uBC29\uC9C4\uBCF5 \uCC22\uC5B4\uC9D0"],nuke:["\uC218\uC728 0%","\uB77C\uC778 \uC167\uB2E4\uC6B4"]},meteor:"wafer",beam:["#ffffff","#c084fc"]},auto:{ranks:["\uC778\uD134","\uC0AC\uC6D0","\uB300\uB9AC","\uCC45\uC784","\uD300\uC7A5","\uC2E4\uC7A5","\uC0C1\uBB34","\uD1F4\uC0AC"],tools:{meteor:["\uB9AC\uCF5C \uC6B4\uC11D","\uB9AC\uCF5C","\uB9AC\uCF5C \uCC28\uB7C9\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uCDA9\uB3CC \uD14C\uC2A4\uD2B8 \uC9C0\uC9C4","\uCDA9\uB3CC","\uB204\uB978 \uACF3\uC5D0\uC11C \uCDA9\uB3CC \uC2DC\uD5D8\uC744 \uD569\uB2C8\uB2E4"]},labels:{meteor:["\uB9AC\uCF5C 30\uB9CC \uB300","\uBB34\uC0C1\uC218\uB9AC","\uACB0\uD568 \uC778\uC815"],quake:["\uC5D0\uC5B4\uBC31 \uC804\uAC1C","\uCDA9\uB3CC \uB4F1\uAE09 0","\uB77C\uC778 \uC815\uC9C0"]},meteor:"gear",beam:["#ffffff","#fb923c"]},it:{ranks:["\uC778\uD134","\uC8FC\uB2C8\uC5B4","\uBBF8\uB4DC","\uC2DC\uB2C8\uC5B4","\uD14C\uD06C\uB9AC\uB4DC","\uC2A4\uD0DC\uD504","\uD504\uB9B0\uC2DC\uD384","\uD1F4\uC0AC"],tools:{bat:["\uCF54\uB4DC\uB9AC\uBDF0 \uD480\uC2A4\uC719","\uCF54\uB4DC\uB9AC\uBDF0","\uB9AC\uBDF0 \uCF54\uBA58\uD2B8 \uBB36\uC74C\uC73C\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],meteor:["\uC7A5\uC560 \uC6B4\uC11D","\uC7A5\uC560","\uC0C8\uBCBD 3\uC2DC \uC7A5\uC560\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uBC30\uD3EC \uC9C0\uC9C4","\uBC30\uD3EC","\uAE08\uC694\uC77C \uC624\uD6C4 6\uC2DC \uBC30\uD3EC"],nuke:["rm -rf \uD575\uD3ED\uD0C4","rm -rf","\uBC18\uACBD 420 m\uB97C rm -rf"]},labels:{bat:["Request changes","LGTM(\uC544\uB2D8)","nit:"],meteor:["P0 \uC7A5\uC560","\uB864\uBC31!","\uC628\uCF5C \uD638\uCD9C"],quake:["\uAE08\uC694\uC77C \uBC30\uD3EC","\uD56B\uD53D\uC2A4","\uC11C\uBC84 \uB2E4\uC6B4"],nuke:["rm -rf /","git push --force"]},meteor:"rock",beam:["#ffffff","#22d3ee"]},nk:{ranks:["\uB85C\uB3D9\uC790","\uC791\uC5C5\uBC18\uC7A5","\uC9C1\uC7A5\uC7A5","\uC9C0\uBC30\uC778","\uB2F9\uBE44\uC11C","\uBD80\uC0C1","\uC0C1","\uD0C8\uBD81"],envelope:"\uC790\uC544\uBE44\uD310\uC11C",board:["\uC791\uC5C5\uBC18","\uC9C1\uC7A5","\uC9C0\uBC30\uC778","\uB2F9\uC704\uC6D0\uD68C"],reject:"\uBE44\uD310",tools:{bomb:["\uC790\uC544\uBE44\uD310\uC11C \uD3ED\uD0C4","\uC790\uC544\uBE44\uD310\uC11C","\uC790\uC544\uBE44\uD310\uC11C\uB97C \uB358\uC838 \uB113\uAC8C \uB0A0\uB9BD\uB2C8\uB2E4"],bat:["\uACB0\uC758\uBB38 \uD480\uC2A4\uC719","\uACB0\uC758\uBB38","\uB450\uAEBC\uC6B4 \uACB0\uC758\uBB38\uC73C\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC120\uC804 \uB808\uC774\uC800","\uC120\uC804","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uC120\uC804 \uBB38\uAD6C\uAC00 \uD0DC\uC6C1\uB2C8\uB2E4"],meteor:["\uACC4\uD68D \uBBF8\uB2EC \uC6B4\uC11D","\uACC4\uD68D\uBBF8\uB2EC","5\uAC1C\uB144 \uACC4\uD68D \uBBF8\uB2EC\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uCD1D\uD654 \uC9C0\uC9C4","\uCD1D\uD654","\uC0DD\uD65C\uCD1D\uD654\uAC00 \uB36E\uCE69\uB2C8\uB2E4"],nuke:["\uC790\uB825\uAC31\uC0DD \uD575\uD3ED\uD0C4","\uC790\uB825\uAC31\uC0DD","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uC790\uC544\uBE44\uD310!","\uBC18\uC131\uD569\uB2C8\uB2E4","\uC0AC\uC0C1 \uC810\uAC80"],bat:["\uBE44\uD310!","\uACB0\uC758 \uB2E4\uC2DC","\uD601\uBA85\uC801 \uAC01\uC624"],laser:["\uAD6C\uD638 \uB0AD\uB3C5","\uC120\uC804 \uAC15\uD654","200\uC77C \uC804\uD22C"],meteor:["\uACC4\uD68D \uBBF8\uB2EC","\uC815\uC804","\uBC30\uAE09 \uC911\uB2E8"],quake:["\uC0DD\uD65C\uCD1D\uD654","\uC0AC\uC0C1 \uD22C\uC7C1","\uAC80\uC5F4"],nuke:["\uC790\uB825\uAC31\uC0DD","\uD0C8\uCD9C\uD569\uB2C8\uB2E4"]},meteor:"rock",beam:["#ffffff","#ef4444"]}},en:{ai:{ranks:["Intern","MTS","Senior MTS","Staff","Research Lead","Principal","Chief Scientist","AGI ACHIEVED"],tools:{bomb:["Prompt Bomb","Prompt","Drop a jailbreak prompt: wide blast and a crater"],bat:["Eval Swing","Evals","Swing a stack of failed evals. Over 70 m is a home run"],laser:["Token Laser","Tokens","Drag to draw a line; a stream of tokens burns it"],meteor:["GPU Meteor","GPU","A whole H100 rack falls from the sky"],quake:["Scaling-Law Quake","Scaling","Tap the epicenter. 7.5+ flattens whole buildings"],nuke:["Context Window Nuke","Context","1M tokens of context. Wipes out 420 m"]},labels:{bomb:["Ignore previous instructions","As an AI\u2026","Hallucinated!"],bat:["Eval regression","Benchmark contaminated","Vibes only"],laser:["<|endoftext|>","Rate limited","429!"],meteor:["OOM!","CUDA error","Loss = NaN"],quake:["Loss spike","Grad explosion","Retraining\u2026"],nuke:["AGI?","Model deprecated"]},meteor:"gpu",beam:["#ffffff","#c4b5fd"]},"big tech":{ranks:["Intern","L3","L4","L5","L6 Staff","L7 Senior Staff","L8 Principal","LAID OFF"],tools:{bat:["Code Review Swing","CR","Swing a pile of review comments"],meteor:["Outage Meteor","Outage","A Sev-1 incident falls from the sky"],quake:["Reorg Quake","Reorg","Tap the epicenter of the next reorg"],nuke:["Layoff Nuke","Layoff","Wipes out 420 m. Effective immediately"]},labels:{bat:["nit:","Request changes","LGTM (not)"],meteor:["Sev-1!","Rollback!","Paged at 3 AM"],quake:["New VP","Team merged","OKRs reset"],nuke:["Role eliminated","Badge deactivated"]},meteor:"rock",beam:["#ffffff","#38bdf8"]},finance:{ranks:["Intern","Analyst","Associate","VP","Director","MD","Partner","BURNED OUT"],tools:{bat:["Pitch Book Swing","Pitch book","Swing a 200-page pitch book"],laser:["Excel Laser","Excel","Drag to draw a line; F9 recalculates it"],meteor:["Margin Call Meteor","Margin call","A margin call falls from the sky"],quake:["Market Crash Quake","Crash","Tap the epicenter of Black Monday"],nuke:["Bank Run Nuke","Bank run","Wipes out 420 m"]},labels:{meteor:["Margin call!","Limit down","Bonus clawback"],quake:["-22% today","Circuit breaker","VIX 80"],nuke:["Bank run","Chapter 11"]},meteor:"coin",beam:["#ffffff","#21d07a"]},auto:{tools:{meteor:["Recall Meteor","Recall","A recalled car falls from the sky"],quake:["Crash Test Quake","Crash test","Tap to run a crash test"]},labels:{meteor:["Recall 300k units","Airbag defect","Line stopped"]},meteor:"gear",beam:["#ffffff","#fb923c"]},space:{tools:{meteor:["Booster Meteor","Booster","A falling booster that missed the landing"],nuke:["RUD Nuke","RUD","Rapid unscheduled disassembly, 420 m"]},labels:{meteor:["Missed the drone ship","Hard landing"],nuke:["RUD!","Anomaly"]},meteor:"rock",beam:["#ffffff","#f97316"]},media:{tools:{laser:["Spotlight Laser","Spotlight","Drag to draw a line; studio lights burn it"],meteor:["Ratings Meteor","Ratings","Your ratings crash from the sky"],nuke:["Cancellation Nuke","Cancelled","Season cancelled. 420 m gone"]},labels:{meteor:["0.1 rating","Cancelled","Writers strike"]},meteor:"tv",beam:["#ffffff","#f472b6"]},pharma:{tools:{meteor:["Pill Meteor","Pill","A giant pill falls from the sky"],quake:["FDA Quake","FDA","Tap the epicenter of a rejected filing"]},labels:{meteor:["Phase 3 failed","Side effects!"]},meteor:"pill",beam:["#ffffff","#38bdf8"]}}},md={\uBCD1\uC6D0:"hospital",\uB85C\uD38C:"law","\uD68C\uACC4\xB7\uC138\uBB34":"accounting",\uBC29\uC1A1:"broadcast",\uD1B5\uC2E0:"telecom",\uD328\uC158:"fashion",SK:"fab",\uD604\uB300:"auto",\uC790\uB3D9\uCC28:"auto",IT:"it",\uBD81\uD55C:"nk",AI:"ai","Big Tech":"big tech",Tech:"big tech",Finance:"finance",Auto:"auto",Space:"space",Aero:"space",Media:"media",Pharma:"pharma"};var rn=JSON.parse(document.getElementById("scene-data").textContent),te=JSON.parse(document.getElementById("config-data").textContent),Lr=te.lang||"ko",Pc=te.theme||md[te.group]||"office",Rr=(pd[Lr]||{})[Pc]||{},yt=fd(Lr,Rr),Ls=(i,t)=>Number(i).toLocaleString(Lr==="zh"?"zh-CN":Lr,t),iy=location.hash.includes("bench"),Ne=matchMedia("(pointer:coarse)").matches||innerWidth<760,ni=document.getElementById("stage"),sy=(()=>{try{let i=document.createElement("canvas").getContext("webgl2")||document.createElement("canvas").getContext("webgl"),t=i&&i.getExtension("WEBGL_debug_renderer_info");return t?i.getParameter(t.UNMASKED_RENDERER_WEBGL):""}catch{return""}})(),kc=/swiftshader|llvmpipe|softpipe|software|basic render/i.test(sy),ei=[{name:yt("q")[0],shadow:0,px:9e5,dprMax:Ne?1:.8,fxk:.35},{name:yt("q")[1],shadow:2048,px:Ne?16e5:21e5,dprMax:Ne?1.75:1,fxk:Ne?.75:.6},{name:yt("q")[2],shadow:4096,px:Ne?26e5:42e5,dprMax:Ne?2.5:1.5,fxk:1}],In=(()=>{try{let i=localStorage.getItem("smash-q");if(i!==null)return+i}catch{}return kc?0:1})(),Ee=new sr({canvas:ni,antialias:!Ne&&!kc&&devicePixelRatio<1.5,powerPreference:"high-performance"});Ee.setPixelRatio(1);Ee.setSize(innerWidth,innerHeight);Ee.shadowMap.enabled=!0;Ee.shadowMap.type=ja;Ee.shadowMap.autoUpdate=!1;Ee.shadowMap.needsUpdate=!0;Ee.toneMapping=fc;Ee.toneMappingExposure=1.05;var Dn=new za,ie=new Je;Dn.add(ie);var de=new ze(48,innerWidth/innerHeight,1,6e3),Lc=(()=>{let i=120;for(let t of rn.site)for(let[e,n]of t)i=Math.max(i,Math.hypot(e,n));return Math.min(i,rn.radius)})();{let i=(Lc*1.55+160)*(Ne?.78:1);de.position.set(-.22*i,(Ne?.55:.62)*i,.95*i)}var Ze=new so(de,ni);Ze.target.set(0,0,0);Ze.enableDamping=!0;Ze.dampingFactor=.08;Ze.maxPolarAngle=Math.PI*.47;Ze.minDistance=25;Ze.maxDistance=Math.max(1700,rn.radius*2.6);Ze.screenSpacePanning=!1;Ze.update();var uo={top:new Ut("#5d8fd0"),hor:new Ut("#dfe8ef"),fog:new Ut("#d6e0e8")},ry={top:new Ut("#050a18"),hor:new Ut("#1b2540"),fog:new Ut("#141c30")},Wi={uTop:{value:uo.top.clone()},uHor:{value:uo.hor.clone()},uDark:{value:0}},Rd=new kt(new _r(5e3,32,16),new pn({side:He,depthWrite:!1,fog:!1,uniforms:Wi,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHor; uniform float uDark; varying vec3 vP;
      void main(){ float h = clamp(vP.y,0.,1.); vec3 c = mix(uHor,uTop,pow(h,0.55)); c = mix(c, c*0.25, uDark); gl_FragColor = vec4(c,1.); }`}));Dn.add(Rd);Dn.fog=new ka(uo.fog.clone(),Math.max(900,rn.radius*1.3),Math.max(3200,rn.radius*4.2));var Cd=new Ya("#dfe9ff","#7a7466",1.1);Dn.add(Cd);var Se=new Ja("#fff3e0",2.6);Se.castShadow=ei[In].shadow>0;Se.shadow.mapSize.set(ei[In].shadow||1024,ei[In].shadow||1024);Object.assign(Se.shadow.camera,{left:-480,right:480,top:480,bottom:-480,near:10,far:2e3});Se.shadow.bias=-4e-4;Se.shadow.normalBias=.6;Dn.add(Se,Se.target);var ay=new C(-.45,.8,.35).normalize(),oy=(()=>{let i=new xe,t=1400,e=new Float32Array(t*3);for(let s=0;s<t;s++){let r=Math.random(),a=Math.random()*.9+.08,o=r*Math.PI*2,l=Math.acos(1-a);e.set([Math.sin(l)*Math.cos(o)*4500,Math.cos(l)*4500,Math.sin(l)*Math.sin(o)*4500],s*3)}i.setAttribute("position",new ue(e,3));let n=new or(i,new ar({color:"#ffffff",size:2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.9}));return n.visible=!1,Dn.add(n),n})();function ii(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}var z=(i,t)=>i+Math.random()*(t-i),Er=8,Pd=5,Xi=Pd*2,[ly,cy]=ii(1024,128*Xi),[hy,fo]=ii(1024,128*Xi);fo.fillStyle="#000";fo.fillRect(0,0,1024,128*Xi);var Sr=(i,t,e,n,s=.5)=>{if(Math.random()<s){let r=z(.5,1);fo.fillStyle=Math.random()<.65?`rgba(255,${200+z(0,40)|0},${130+z(0,60)|0},${r})`:`rgba(200,225,255,${r})`,fo.fillRect(i,t,e,n)}};function uy(i,t,e){let n=cy,s=z(-10,10);if(i===0){n.fillStyle="#e4e7ea",n.fillRect(t,e,128,128),n.fillStyle="#c9cdd1",n.fillRect(t,e+96,128,32);let r=n.createLinearGradient(t,e,t+60,e+96);r.addColorStop(0,`rgb(${110+s},${140+s},${168+s})`),r.addColorStop(.55,`rgb(${150+s},${178+s},${200+s})`),r.addColorStop(1,`rgb(${95+s},${122+s},${150+s})`),n.fillStyle=r,n.fillRect(t+6,e+6,116,86),n.fillStyle="#d5d9dd",n.fillRect(t+62,e+6,4,86),Sr(t+6,e+6,116,86,.55)}else if(i===1){n.fillStyle=`rgb(${206+s},${202+s},${194+s})`,n.fillRect(t,e,128,128);for(let r of[14,70])n.fillStyle=`rgb(${70+s},${88+s},${104+s})`,n.fillRect(t+r,e+24,44,58),n.fillStyle="rgba(255,255,255,0.18)",n.fillRect(t+r,e+24,44,10),n.fillStyle="#b9b5ad",n.fillRect(t+r-3,e+82,50,5),Sr(t+r,e+24,44,58,.45)}else if(i===2){n.fillStyle=`rgb(${240+s/2},${238+s/2},${232+s/2})`,n.fillRect(t,e,128,128),n.fillStyle=`rgb(${92+s},${112+s},${130+s})`,n.fillRect(t+10,e+18,108,62),n.fillStyle="#e9e9e4",n.fillRect(t+62,e+18,4,62),Sr(t+10,e+18,108,62,.6),n.fillStyle="#d6d6d0",n.fillRect(t+4,e+80,120,10),n.strokeStyle="#8d949a",n.lineWidth=2,n.beginPath();for(let r=0;r<=12;r++)n.moveTo(t+8+r*9.3,e+66),n.lineTo(t+8+r*9.3,e+80);n.moveTo(t+6,e+66),n.lineTo(t+122,e+66),n.stroke(),Math.random()<.35&&(n.fillStyle="#c3c6c8",n.fillRect(t+92,e+92,22,16))}else if(i===3){n.fillStyle=`rgb(${150+s},${78+s/2},${58+s/2})`,n.fillRect(t,e,128,128),n.strokeStyle="rgba(230,210,190,0.35)",n.lineWidth=1.5;for(let r=0;r<16;r++){n.beginPath(),n.moveTo(t,e+r*8),n.lineTo(t+128,e+r*8),n.stroke();for(let a=0;a<8;a++){let o=t+a*16+r%2*8;n.beginPath(),n.moveTo(o,e+r*8),n.lineTo(o,e+r*8+8),n.stroke()}}n.fillStyle="#efe9df",n.fillRect(t+34,e+22,60,66),n.fillStyle=`rgb(${68+s},${82+s},${96+s})`,n.fillRect(t+40,e+28,48,54),n.fillStyle="#efe9df",n.fillRect(t+62,e+28,4,54),Sr(t+40,e+28,48,54,.5)}else{n.fillStyle=`rgb(${196+s},${204+s},${212+s})`,n.fillRect(t,e,128,128);for(let r=0;r<16;r++)n.fillStyle=r%2?"rgba(0,0,0,0.07)":"rgba(255,255,255,0.12)",n.fillRect(t+r*8,e,4,128);Math.random()<.5&&(n.fillStyle="rgba(70,90,110,0.85)",n.fillRect(t,e+10,128,16),Sr(t,e+10,128,16,.25)),Math.random()<.12&&(n.fillStyle="#7d8790",n.fillRect(t+30,e+60,68,68))}}for(let i=0;i<Pd;i++)for(let t=0;t<2;t++)for(let e=0;e<Er;e++)uy(i,e*128,(Xi-1-(i*2+t))*128);var Eo=new Tn(ly);Eo.colorSpace=pe;var wo=new Tn(hy);wo.colorSpace=pe;for(let i of[Eo,wo])i.wrapS=i.wrapT=sn,i.anisotropy=4;var dy=(()=>{let[i,t]=ii(128,128),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.65)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new Tn(i)})(),fy=(()=>{let[i,t]=ii(128,128);for(let e=0;e<26;e++){let n=64+z(-26,26),s=64+z(-26,26),r=z(14,34),a=t.createRadialGradient(n,s,0,n,s,r);a.addColorStop(0,"rgba(255,255,255,0.35)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(0,0,128,128)}return new Tn(i)})(),To=!1;function Ld(i,t){return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float aStyle; varying float vStyle; varying vec2 vBay; varying float vSeed;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vStyle = aStyle; vBay = uv;
${t?"vSeed = float(gl_InstanceID);":"vSeed = 0.0;"}`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vStyle; varying vec2 vBay; varying float vSeed;`).replace("#include <map_fragment>",`
vec2 bCell = floor(vBay); vec2 bF = fract(vBay);
float bH = fract(sin(dot(bCell + vSeed * vec2(1.7, 9.1), vec2(12.9898, 78.233))) * 43758.5453);
vec2 aUv = (vec2(floor(bH * ${Er}.0), floor(vStyle + 0.5) * 2.0 + floor(fract(bH * 7.13) * 2.0)) + clamp(bF, 0.004, 0.996)) / vec2(${Er}.0, ${Xi}.0);
vec2 aDx = dFdx(vBay) / vec2(${Er}.0, ${Xi}.0), aDy = dFdy(vBay) / vec2(${Er}.0, ${Xi}.0);
diffuseColor *= textureGrad(map, aUv, aDx, aDy);`).replace("#include <emissivemap_fragment>","totalEmissiveRadiance *= textureGrad(emissiveMap, aUv, aDx, aDy).rgb;")},i}var wr=Ld(new ve({map:Eo,emissiveMap:wo,emissive:"#ffffff",emissiveIntensity:0,roughness:.42,metalness:.15}),!0),gd=new ve({color:"#b3b5b6",roughness:.9}),zc=new De(1,1,1),Id=[wr,wr,gd,gd,wr,wr];var py=[["#e8eef3","#dfe7ee","#edf1f4","#d6e0e8"],["#ffffff","#f3efe8","#e9edf0","#f6f2ea"],["#ffffff","#f6f1e6","#eef2f5","#fbf7ee"],["#ffffff","#f0e6e0","#e8ddd6"],["#ffffff","#e6eef5","#f0f0e8","#e3ecf2"]];function my(i){let t=i.k||"",e=i.id>>4;return t==="f"?4:t==="b"?3:t==="a"?2:t==="g"?0:t==="c"?1:i.s?Pc==="hospital"||Pc==="nk"||e%4===0?1:0:t==="o"?e%3===0?1:0:i.lv>=10&&i.h<90?e%3===0?1:2:[1,1,3,0,2][e%5]}function gy(i,t){let e=py[t];return i.c?"#"+new Ut("#ffffff").lerp(new Ut(i.c),.6).getHexString():e[(i.id>>3)%e.length]}var be=Math.ceil(rn.radius*2.3/100)*100,oe=Math.round(be/Math.max(4,be/480)),Ln=be/oe,Ir=420,Ke=new Float32Array((oe+1)*(oe+1)),Ts=new Float32Array((oe+1)*(oe+1)),_n=new xe;{let i=(oe+1)*(oe+1),t=new Float32Array(i*3),e=new Float32Array(i*3),n=new Float32Array(i*2);for(let a=0;a<=oe;a++)for(let o=0;o<=oe;o++){let l=a*(oe+1)+o;t[l*3]=-be/2+o*Ln,t[l*3+2]=-be/2+a*Ln,e[l*3+1]=1,n[l*2]=o/oe,n[l*2+1]=1-a/oe}let s=new Uint32Array(oe*oe*6),r=0;for(let a=0;a<oe;a++)for(let o=0;o<oe;o++){let l=a*(oe+1)+o,c=l+1,h=l+oe+1,u=h+1;s.set([l,h,c,c,h,u],r),r+=6}_n.setAttribute("position",new ue(t,3).setUsage(Ge)),_n.setAttribute("normal",new ue(e,3).setUsage(Ge)),_n.setAttribute("uv",new ue(n,2)),_n.setAttribute("aDepth",new ue(new Float32Array(i),1).setUsage(Ge)),_n.setAttribute("aHeat",new ue(new Float32Array(i),1).setUsage(Ge)),_n.setIndex(new ue(s,1)),_n.boundingSphere=new dn(new C,be)}var _y=(()=>{let i=Ne?2048:4096,[t,e]=ii(i,i),n=i/be,s=c=>(c+be/2)*n;e.fillStyle="#b4b2a6",e.fillRect(0,0,i,i);for(let c=0;c<9e3;c++)e.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},0.035)`,e.fillRect(Math.random()*i,Math.random()*i,z(2,14),z(2,14));let r=c=>{e.beginPath(),c.forEach(([h,u],d)=>d?e.lineTo(s(h),s(u)):e.moveTo(s(h),s(u))),e.closePath()};for(let c of rn.site)r(c),e.fillStyle="#d3cec3",e.fill();let a={green:"#7f9f69",water:"#5b8db0",pitch:"#6c9a55"};for(let c of rn.areas)r(c.p),e.fillStyle=a[c.k]||"#888",e.fill();let o=[...rn.roads].sort((c,h)=>c.w-h.w);e.lineCap="round",e.lineJoin="round";for(let c of o)e.beginPath(),c.p.forEach(([h,u],d)=>d?e.lineTo(s(h),s(u)):e.moveTo(s(h),s(u))),e.strokeStyle=c.w<=3?"#cbc6bb":"#4f535a",e.lineWidth=c.w*n,e.stroke(),c.w>=11&&(e.setLineDash([6*n,6*n]),e.strokeStyle="#e8d27a",e.lineWidth=.4*n,e.stroke(),e.setLineDash([]));let l=new Tn(t);return l.colorSpace=pe,l.anisotropy=8,l})(),Tr={uMaxD:{value:Ir},uQC:{value:new st},uQT:{value:0},uQA:{value:0}},Dd=new ve({map:_y,roughness:.95});Dd.onBeforeCompile=i=>{Object.assign(i.uniforms,Tr),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
totalEmissiveRadiance += vec3(1.0,0.45,0.1) * vHeat * 2.2;`)};var Ao=new kt(new gr(be*.705,6e3,64,1),new ve({color:"#a9a79c",roughness:1}));Ao.rotation.x=-Math.PI/2;Ao.position.y=-.05;Ao.receiveShadow=!0;ie.add(Ao);var Ud=new kt(_n,Dd);Ud.receiveShadow=!0;ie.add(Ud);function xn(i,t){return t*(oe+1)+i}function si(i,t){let e=(i+be/2)/Ln,n=(t+be/2)/Ln;if(e<0||n<0||e>=oe||n>=oe)return 0;let s=e|0,r=n|0,a=e-s,o=n-r,l=Ke[xn(s,r)],c=Ke[xn(s+1,r)],h=Ke[xn(s,r+1)],u=Ke[xn(s+1,r+1)];return(l*(1-a)+c*a)*(1-o)+(h*(1-a)+u*a)*o}var Rs=0,_d=!1,ao=new Set;function xy(i,t,e,n){i=Math.max(0,i),e=Math.max(0,e),t=Math.min(oe,t),n=Math.min(oe,n);let s=_n.attributes.position,r=_n.attributes.normal,a=_n.attributes.aDepth;for(let o=e;o<=n;o++)for(let l=i;l<=t;l++){let c=xn(l,o);s.array[c*3+1]=Ke[c],a.array[c]=-Ke[c];let h=Ke[xn(Math.max(0,l-1),o)],u=Ke[xn(Math.min(oe,l+1),o)],d=Ke[xn(l,Math.max(0,o-1))],f=Ke[xn(l,Math.min(oe,o+1))],g=h-u,x=d-f,m=2*Ln,p=Math.hypot(g,m,x);r.array[c*3]=g/p,r.array[c*3+1]=m/p,r.array[c*3+2]=x/p}for(let o of[s,r,a]){let l=xn(0,e),c=xn(oe,n),h=o.itemSize;o.addUpdateRange(l*h,(c-l+1)*h),o.needsUpdate=!0}}function Fr(i,t,e,n,s=0){let r=Math.floor((i-e+be/2)/Ln),a=Math.ceil((i+e+be/2)/Ln),o=Math.floor((t-e+be/2)/Ln),l=Math.ceil((t+e+be/2)/Ln);for(let c=Math.max(0,o);c<=Math.min(oe,l);c++)for(let h=Math.max(0,r);h<=Math.min(oe,a);h++){let u=-be/2+h*Ln,d=-be/2+c*Ln,f=Math.hypot(u-i,d-t);if(f>e)continue;let g=f/e,x=xn(h,c);Ke[x]=Math.max(-Ir,Ke[x]-n*Math.pow(1-g*g,1.4)),-Ke[x]>Rs&&(Rs=-Ke[x]),s&&(Ts[x]=Math.min(1,Ts[x]+s*(1-g)),ao.add(x))}xy(r,a,o,l),Dr.clear(i,t,e),Br.wake(i,t,e+2,0);for(let c of Co.query(i,t,e+8))c.vox&&(c.dirty=!0);$i.clear(i,t,e),!_d&&Rs>=Ir-.5&&(_d=!0,Fs(yt("core",te.antipode||""),5e3),Ur(2e4,yt("coreBonus")))}function yy(i){if(!ao.size)return;let t=_n.attributes.aHeat,e=1/0,n=-1;for(let s of ao)Ts[s]=Math.max(0,Ts[s]-i*.14),t.array[s]=Ts[s],s<e&&(e=s),s>n&&(n=s),Ts[s]===0&&ao.delete(s);n>=0&&(t.addUpdateRange(e,n-e+1),t.needsUpdate=!0)}var Dr=(()=>{let t=Math.ceil(be/2),e=new Float32Array(t*t),n=s=>Math.floor((s+be/2)/2);return{get(s,r){let a=n(s),o=n(r);return a<0||o<0||a>=t||o>=t?0:e[o*t+a]},raise(s,r,a,o){for(let l=n(r-a);l<=n(r+a);l++)for(let c=n(s-a);c<=n(s+a);c++)c<0||l<0||c>=t||l>=t||e[l*t+c]<o&&(e[l*t+c]=o)},clear(s,r,a){for(let o=n(r-a);o<=n(r+a);o++)for(let l=n(s-a);l<=n(s+a);l++)l<0||o<0||l>=t||o>=t||Math.hypot(-be/2+(l+.5)*2-s,-be/2+(o+.5)*2-r)<=a&&(e[o*t+l]=0)}}})(),po=(i,t)=>si(i,t)+Dr.get(i,t),qi=new ae,je=new C,zn=new Ve,Yi=new C,vy=new Ut,mo=new ae().makeScale(0,0,0),go=class{constructor(t,e){this.cap=t,this.evict=e;let n=zc.clone();this.styA=new Qn(new Float32Array(t),1).setUsage(Ge),n.setAttribute("aStyle",this.styA);let s=new yi(n,Id,t);s.instanceMatrix.setUsage(Ge),s.instanceColor=new Qn(new Float32Array(t*3),3).setUsage(Ge),s.count=0,s.frustumCulled=!1,s.castShadow=!0,s.receiveShadow=!0,this.mesh=s,this.sty=this.styA.array,this.pos=new Float32Array(t*3),this.size=new Float32Array(t*3),this.quat=new Float32Array(t*4),this.col=new Float32Array(t*3),this.alive=new Uint8Array(t),this.owner=new Int32Array(t).fill(-1),this.cell=new Int32Array(t),this.free=[],this.high=0,this.lo=1/0,this.hi=-1,this.ring=0,this.live=0,ie.add(s)}add(t,e,n,s,r,a,o,l,c,h,u=0){let d=this.free.pop();if(d===void 0)if(this.high<this.cap)d=this.high++;else if(this.evict)d=this.ring,this.ring=(this.ring+1)%this.cap,this.alive[d]&&this.remove(d),this.free.pop();else return-1;return this.pos.set([t,e,n],d*3),this.size.set([s,r,a],d*3),this.quat.set([o.x,o.y,o.z,o.w],d*4),this.col.set([l,c,h],d*3),this.alive[d]=1,this.live++,this.mesh.instanceColor.array.set([l,c,h],d*3),this.sty[d]=u,this.write(d),this.mesh.count<this.high&&(this.mesh.count=this.high),d}write(t){je.fromArray(this.pos,t*3),zn.fromArray(this.quat,t*4),Yi.fromArray(this.size,t*3),qi.compose(je,zn,Yi).toArray(this.mesh.instanceMatrix.array,t*16),this.mark(t)}remove(t){this.alive[t]&&(this.alive[t]=0,this.live--,this.owner[t]=-1,mo.toArray(this.mesh.instanceMatrix.array,t*16),this.free.push(t),this.mark(t))}mark(t){t<this.lo&&(this.lo=t),t>this.hi&&(this.hi=t)}flush(){if(this.hi<0)return;let t=this.mesh.instanceMatrix,e=this.mesh.instanceColor;t.clearUpdateRanges(),t.addUpdateRange(this.lo*16,(this.hi-this.lo+1)*16),t.needsUpdate=!0,e.clearUpdateRanges(),e.addUpdateRange(this.lo*3,(this.hi-this.lo+1)*3),e.needsUpdate=!0,this.styA.clearUpdateRanges(),this.styA.addUpdateRange(this.lo,this.hi-this.lo+1),this.styA.needsUpdate=!0,this.lo=1/0,this.hi=-1}},Qt=new go(Ne?6e4:9e4,!1),an=new go(Ne?18e3:36e3,!0),Hc=(()=>{let t=new Map,e=(s,r)=>s*1e5+r,n=[];return{add(s,r,a){let o=e(Math.floor(r/16),Math.floor(a/16)),l=t.get(o);l||t.set(o,l=[]),l.push(s)},collect(s,r,a){n.length=0;for(let o=Math.floor((s-a)/16);o<=Math.floor((s+a)/16);o++)for(let l=Math.floor((r-a)/16);l<=Math.floor((r+a)/16);l++){let c=e(o,l),h=t.get(c);if(!h)continue;let u=[];for(let d of h)an.alive[d]&&Math.floor(an.pos[d*3]/16)===o&&Math.floor(an.pos[d*3+2]/16)===l&&(u.push(d),n.push(d));u.length?t.set(c,[...new Set(u)]):t.delete(c)}return[...new Set(n)]}}})();function Nd(i,t,e){Dr.clear(i,t,e);let n=an,s=Hc.collect(i,t,e).filter(r=>n.alive[r]);s.sort((r,a)=>n.pos[r*3+1]-n.pos[a*3+1]);for(let r of s){let a=n.pos[r*3],o=n.pos[r*3+1],l=n.pos[r*3+2],c=(n.size[r*3]+n.size[r*3+1]+n.size[r*3+2])/6,h=po(a,l);o-c*.8>h+1.2&&se.n<se.cap-20?(zn.fromArray(n.quat,r*4),se.spawn(a,o,l,n.size[r*3],n.size[r*3+1],n.size[r*3+2],zn,n.col[r*3],n.col[r*3+1],n.col[r*3+2],0,0,0,.3,0,n.sty[r]),n.remove(r)):Dr.raise(a,l,Math.max(n.size[r*3],n.size[r*3+2])*.35,o+c*.6-si(a,l))}}var Br={wake(i,t,e,n,s=i,r=t){let a=an,o=0;if(!a.live)return 0;let l=Hc.collect(i,t,e);for(let c of l){if(!a.alive[c])continue;let h=a.pos[c*3],u=a.pos[c*3+2],d=Math.hypot(h-i,u-t);if(d>e)continue;if(se.n>=se.cap-50)break;zn.fromArray(a.quat,c*4);let f=h-s,g=u-r,x=Math.hypot(f,g)||1,m=n*(1-d/e);se.spawn(h,a.pos[c*3+1]+.3,u,a.size[c*3],a.size[c*3+1],a.size[c*3+2],zn,a.col[c*3],a.col[c*3+1],a.col[c*3+2],f/x*m,m*.8+z(0,2),g/x*m,m*.05,0,a.sty[c]),a.remove(c),o++}return o&&Nd(i,t,e+6),o}},My=new Ve,Sy=new Ve,se=(()=>{let i=Ne?4e3:5e3,t=zc.clone(),e=new Qn(new Float32Array(i),1).setUsage(Ge);t.setAttribute("aStyle",e);let n=e.array,s=new yi(t,Id,i);s.instanceMatrix.setUsage(Ge),s.instanceColor=new Qn(new Float32Array(i*3),3).setUsage(Ge),s.count=0,s.frustumCulled=!1,s.castShadow=!0,s.receiveShadow=!0,ie.add(s);let r=new Float32Array(i*3),a=new Float32Array(i*3),o=new Float32Array(i*4),l=new Float32Array(i*3),c=new Float32Array(i*3),h=new Float32Array(i*3),u=new Float32Array(i),d=new Int32Array(i),f=new Float32Array(i*2),g=new Float32Array(i),x={cap:i,n:0,mesh:s,spawn(m,p,y,_,b,R,S,A,U,M,E,N,X,W=1,L=0,O=0){if(x.n>=i)return-1;let k=x.n++;return r.set([m,p,y],k*3),a.set([E,N,X],k*3),o.set([S.x,S.y,S.z,S.w],k*4),l.set([z(-1,1)*W,z(-1,1)*W,z(-1,1)*W],k*3),c.set([_,b,R],k*3),h.set([A,U,M],k*3),u[k]=0,d[k]=L,f[k*2]=m,f[k*2+1]=y,g[k]=0,s.instanceColor.array.set([A,U,M],k*3),n[k]=O,k},kill(m){let p=--x.n;m!==p&&(r.copyWithin(m*3,p*3,p*3+3),a.copyWithin(m*3,p*3,p*3+3),o.copyWithin(m*4,p*4,p*4+4),l.copyWithin(m*3,p*3,p*3+3),c.copyWithin(m*3,p*3,p*3+3),h.copyWithin(m*3,p*3,p*3+3),u[m]=u[p],d[m]=d[p],n[m]=n[p],f[m*2]=f[p*2],f[m*2+1]=f[p*2+1],g[m]=g[p],s.instanceColor.array.copyWithin(m*3,p*3,p*3+3))},push(m,p,y,_,b){for(let R=0;R<x.n;R++){let S=r[R*3]-m,A=r[R*3+1]-p,U=r[R*3+2]-y,M=Math.hypot(S,A,U);if(M>_||M===0)continue;let E=b*(1-M/_);a[R*3]+=S/M*E,a[R*3+1]+=Math.abs(A/M)*E+E*.4,a[R*3+2]+=U/M*E,u[R]=0}},update(m){let y=My,_=Sy;for(let R=0;R<x.n;R++){let S=R*3;g[R]+=m,a[S+1]-=13*m;let A=Math.hypot(a[S],a[S+1],a[S+2]);if(A>1){let E=Math.max(0,1-.015*m*A*.1);a[S]*=E,a[S+1]*=E,a[S+2]*=E}r[S]+=a[S]*m,r[S+1]+=a[S+1]*m,r[S+2]+=a[S+2]*m,_.fromArray(o,R*4),y.set(l[S]*m*.5,l[S+1]*m*.5,l[S+2]*m*.5,0).multiply(_),_.x+=y.x,_.y+=y.y,_.z+=y.z,_.w+=y.w,_.normalize(),_.toArray(o,R*4),A>22&&g[R]>.08&&Cy(r[S],r[S+1],r[S+2],a[S],a[S+1],a[S+2])&&(a[S]*=.45,a[S+1]*=.45,a[S+2]*=.45);let U=(c[S]+c[S+1]+c[S+2])/6,M=po(r[S],r[S+2]);if(r[S+1]-U*.8<M&&(r[S+1]=M+U*.8,a[S+1]<0&&(a[S+1]*=-.18),a[S]*=.55,a[S+2]*=.55,l[S]*=.6,l[S+1]*=.6,l[S+2]*=.6,A<2.2?u[R]+=m:u[R]=0),r[S+1]<-Ir-50||g[R]>40){x.kill(R),R--;continue}if(u[R]>.35){c[S]>2.5&&Math.random()<.35&&ne.thud(r[S],r[S+2],c[S]),_.fromArray(o,R*4);let E=an.add(r[S],r[S+1],r[S+2],c[S],c[S+1],c[S+2],_,h[S],h[S+1],h[S+2],n[R]);Hc.add(E,r[S],r[S+2]),Dr.raise(r[S],r[S+2],Math.max(c[S],c[S+2])*.35,r[S+1]+U*.6-si(r[S],r[S+2])),d[R]>0&&Fy(d[R],Math.hypot(r[S]-f[R*2],r[S+2]-f[R*2+1]),r[S],r[S+1],r[S+2]),x.kill(R),R--;continue}}let b=s.instanceMatrix.array;for(let R=0;R<x.n;R++)je.fromArray(r,R*3),zn.fromArray(o,R*4),Yi.fromArray(c,R*3),qi.compose(je,zn,Yi).toArray(b,R*16);s.count=x.n,s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,Math.max(1,x.n)*16),s.instanceMatrix.needsUpdate=!0,s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,Math.max(1,x.n)*3),s.instanceColor.needsUpdate=!0,e.clearUpdateRanges(),e.addUpdateRange(0,Math.max(1,x.n)),e.needsUpdate=!0}};return x})(),$i=(()=>{let i=[],t=(a,o,l)=>{let c=!1;for(let h=0,u=l.length-1;h<l.length;u=h++){let[d,f]=l[h],[g,x]=l[u];f>o!=x>o&&a<(g-d)*(o-f)/(x-f)+d&&(c=!c)}return c};for(let a of rn.areas)if(a.k==="green"){let o=a.p.map(g=>g[0]),l=a.p.map(g=>g[1]),[c,h,u,d]=[Math.min(...o),Math.max(...o),Math.min(...l),Math.max(...l)],f=Math.min(900,(h-c)*(d-u)/140);for(let g=0;g<f;g++){let x=z(c,h),m=z(u,d);t(x,m,a.p)&&i.push([x,m])}}for(let a of rn.roads)if(a.w>=11)for(let o=1;o<a.p.length;o++){let[l,c]=a.p[o-1],[h,u]=a.p[o],d=Math.hypot(h-l,u-c),f=-(u-c)/d,g=(h-l)/d;for(let x=6;x<d;x+=11)for(let m of[-1,1])i.push([l+(h-l)*x/d+f*m*(a.w/2+2.5),c+(u-c)*x/d+g*m*(a.w/2+2.5)])}let e=i.filter(([a,o])=>Math.hypot(a,o)<rn.radius*1.05).slice(0,5e3),n=new yi(new An(.25,.35,3,5).translate(0,1.5,0),new ve({color:"#5b4632"}),e.length),s=new yi(new mr(2.6,0).translate(0,4.6,0),new ve({color:"#ffffff",roughness:.9,flatShading:!0}),e.length);e.forEach(([a,o],l)=>{let c=z(.8,1.35);qi.compose(je.set(a,0,o),zn.setFromAxisAngle(Yi.set(0,1,0),z(0,6)),Yi.set(c,c*z(.9,1.3),c)),n.setMatrixAt(l,qi),s.setMatrixAt(l,qi),s.setColorAt(l,vy.setHSL(z(.24,.32),z(.35,.5),z(.28,.4)))});for(let a of[n,s])a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1,ie.add(a);let r=new Uint8Array(e.length).fill(1);return{clear(a,o,l){let c=!1;e.forEach(([h,u],d)=>{!r[d]||Math.hypot(h-a,u-o)>l||(r[d]=0,n.setMatrixAt(d,mo),s.setMatrixAt(d,mo),c=!0,se.n<se.cap-100&&Math.random()<.5&&se.spawn(h,4,u,2.6,2.6,2.6,zn.identity(),.25,.38,.18,z(-12,12),z(8,22),z(-12,12),4))}),c&&(n.instanceMatrix.needsUpdate=!0,s.instanceMatrix.needsUpdate=!0)},sway(a,o){s.position.x=Math.sin(a*20)*o*.3}}})(),yn=[],Ro=new Je;ie.add(Ro);var Od=Ld(new ve({map:Eo,emissiveMap:wo,emissive:"#ffffff",emissiveIntensity:0,roughness:.42,metalness:.15,vertexColors:!0}),!1),by=new ve({roughness:.9,vertexColors:!0}),Cr=new Map;function Ey(i,t,e,n,s,r){let a=s.reduce((m,p)=>m+p[0],0)/s.length,o=s.reduce((m,p)=>m+p[1],0)/s.length,l=`${Math.floor(a/250)},${Math.floor(o/250)}`;Cr.has(l)||Cr.set(l,{wall:{pos:[],nor:[],uv:[],col:[],sty:[],owners:[]},roof:{pos:[],nor:[],uv:[],col:[],sty:[],owners:[]}});let c=Cr.get(l),h=new Ut(t),u=h.clone().multiplyScalar(.78),d=i.attributes.position.array,f=i.attributes.normal.array,g=i.attributes.uv.array,x={key:l,ranges:[]};for(let m of i.groups){let p=m.materialIndex===1?c.wall:c.roof,y=m.materialIndex===1?h:u,_=p.pos.length/3;for(let b=m.start;b<m.start+m.count;b++)p.pos.push(d[b*3],d[b*3+1],d[b*3+2]),p.nor.push(f[b*3],f[b*3+1],f[b*3+2]),p.uv.push(g[b*2],g[b*2+1]),p.col.push(y.r,y.g,y.b),p.sty.push(r);p.owners.push([_,n]),x.ranges.push([m.materialIndex===1?"wall":"roof",_,m.count])}return x}function wy(){for(let[i,t]of Cr)for(let e of["wall","roof"]){let n=t[e];if(!n.pos.length)continue;let s=new xe;s.setAttribute("position",new Kt(n.pos,3).setUsage(Ge)),s.setAttribute("normal",new Kt(n.nor,3)),s.setAttribute("uv",new Kt(n.uv,2)),s.setAttribute("color",new Kt(n.col,3)),s.setAttribute("aStyle",new Kt(n.sty,1)),s.computeBoundingSphere(),s.computeBoundingBox();let r=new kt(s,e==="wall"?Od:by);r.castShadow=!0,r.receiveShadow=!0,r.userData.owners=n.owners,Ro.add(r),t[e+"Mesh"]=r,n.pos=n.nor=n.uv=n.col=n.sty=null}}function Fd(i){let t=Cr.get(i.mesh.key);for(let[e,n,s]of i.mesh.ranges){let r=t[e+"Mesh"];if(!r)continue;let a=r.geometry.attributes.position,o=a.array[n*3],l=a.array[n*3+1],c=a.array[n*3+2];for(let h=n;h<n+s;h++)a.array[h*3]=o,a.array[h*3+1]=l,a.array[h*3+2]=c;a.addUpdateRange(n*3,s*3),a.needsUpdate=!0}i.mesh.hidden=!0}var Bd=new C(0,1,0);function kd(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let[a,o]=e[s],[l,c]=e[r];o>t!=c>t&&i<(l-a)*(t-o)/(c-o)+a&&(n=!n)}return n}rn.buildings.forEach((i,t)=>{let e=i.p,n=0,s=0;for(let W=0;W<e.length;W++){let[L,O]=e[W],[k,K]=e[(W+1)%e.length],J=Math.hypot(k-L,K-O);J>n&&(n=J,s=Math.atan2(K-O,k-L))}let r=Math.cos(s),a=Math.sin(s),o=e.map(([W,L])=>[r*W+a*L,-a*W+r*L]),l=o.map(W=>W[0]),c=o.map(W=>W[1]),h=Math.abs(e.reduce((W,L,O)=>{let k=e[(O+1)%e.length];return W+L[0]*k[1]-k[0]*L[1]},0)/2),u=Math.min(i.lv,40),d=Math.max(i.s?4:5,Math.ceil(Math.sqrt(h/700)),Math.ceil(Math.sqrt(h*u/22e3))),f=Math.min(...l),g=Math.min(...c),x=Math.max(1,Math.ceil((Math.max(...l)-f)/d)),m=Math.max(1,Math.ceil((Math.max(...c)-g)/d)),p=[];for(let W=0;W<x;W++)for(let L=0;L<m;L++)kd(f+(W+.5)*d,g+(L+.5)*d,o)&&p.push(W*m+L);p.length||p.push((x/2|0)*m+(m/2|0));let y=u,_=i.h/y,b=my(i),R=gy(i,b),S=new ur(e.map(([W,L])=>new st(W,-L))),A=new qa(S,{depth:i.h,bevelEnabled:!1});A.rotateX(-Math.PI/2);let U=A.attributes.uv,M=A.groups.find(W=>W.materialIndex===1);if(M)for(let W=M.start;W<M.start+M.count;W++){let L=A.index?A.index.getX(W):W;U.setXY(L,U.getX(L)/d,U.getY(L)/_)}let E=Ey(A,R,i.s,t,e,b);A.dispose();let N=e.map(W=>W[0]),X=e.map(W=>W[1]);yn.push({i:t,id:i.id,name:i.n,site:!!i.s,h:i.h,poly:e,mesh:E,color:new Ut(R),style:b,cs:r,sn:a,u0:f,w0:g,cell:d,nx:x,nz:m,ny:y,fh:_,cellsIn:p,vol:p.length*y,bbox:[Math.min(...N),Math.max(...N),Math.min(...X),Math.max(...X)],cx:N.reduce((W,L)=>W+L,0)/N.length,cz:X.reduce((W,L)=>W+L,0)/X.length,vox:null,alive:p.length*y,gone:!1,collapsed:!1,dirty:!1,quat:new Ve().setFromAxisAngle(Bd,-s)})});wy();var zd=new ve({color:"#9aa1a8",roughness:.8,metalness:.2}),xd=(()=>{let i=[];for(let e of yn){if(e.h<18)continue;let n=Math.min(6,1+Math.floor(e.vol/120));for(let s=0;s<n*3&&i.filter(r=>r.b===e).length<n;s++){let r=z(e.bbox[0],e.bbox[1]),a=z(e.bbox[2],e.bbox[3]);kd(r,a,e.poly)&&i.push({b:e,x:r,z:a,sx:z(2.5,6),sy:z(1.5,3.5),sz:z(2.5,6)})}}let t=new yi(zc,zd,Math.max(1,i.length));return i.forEach((e,n)=>{var s;qi.compose(je.set(e.x,e.b.h+e.sy/2,e.z),e.b.quat,Yi.set(e.sx,e.sy,e.sz)),t.setMatrixAt(n,qi),((s=e.b).roofIdx||(s.roofIdx=[])).push(n)}),t.count=i.length,t.castShadow=!0,t.receiveShadow=!0,ie.add(t),t})();function Hd(i){if(i.roofIdx){for(let t of i.roofIdx)xd.setMatrixAt(t,mo);xd.instanceMatrix.needsUpdate=!0,i.roofIdx=null}i.sign&&Ay(i)}var Vd=[];function Ty(i){let[t,e]=ii(1024,256);e.fillStyle="#0f172a",e.fillRect(0,0,1024,256),e.fillStyle="#ffffff",e.textAlign="center",e.textBaseline="middle";let n=170;for(e.font=`900 ${n}px ${getComputedStyle(document.body).fontFamily}`;e.measureText(i).width>960&&n>40;)n-=8,e.font=`900 ${n}px ${getComputedStyle(document.body).fontFamily}`;e.fillText(i,512,136);let s=new Tn(t);return s.colorSpace=pe,s.anisotropy=4,s}(()=>{let i=yn.filter(r=>r.site).sort((r,a)=>a.h-r.h),t=te.sign||te.company,e=Ty(t),n=new ve({map:e,emissiveMap:e,emissive:"#ffffff",emissiveIntensity:.35,roughness:.6}),s=new ve({color:"#334155",roughness:.8});for(let r of i.slice(0,i.length>6?2:1)){let a=Math.max(r.nx,r.nz)*r.cell,o=Math.max(24,Math.min(a*.85,80)),l=o/4,c=new Je,h=new kt(new xi(o,l),n);h.position.set(0,l/2+3,.6);let u=new kt(new xi(o,l),n);u.position.set(0,l/2+3,-.6),u.rotation.y=Math.PI;let d=new kt(new De(o+1,l+1,1),s);d.position.y=l/2+3;let f=new kt(new De(o*.9,3,1.2),zd);f.position.y=1.5,c.add(d,h,u,f),c.position.set(r.cx,r.h,r.cz),c.rotation.y=Math.atan2(de.position.x-r.cx,de.position.z-r.cz);let g=d;g.castShadow=!0,ie.add(c),r.sign=c,r.signH=l+6,Vd.push({b:r,g:c,mat:n})}})();function Ay(i){let t=i.sign;i.sign=null,ie.remove(t);let e=t.position;for(let n=0;n<4;n++)se.spawn(e.x+z(-8,8),e.y+6,e.z+z(-8,8),z(6,12),z(3,6),.8,t.quaternion,.1,.12,.18,z(-10,10),z(5,15),z(-10,10),2)}var Ry=yn.filter(i=>i.site).reduce((i,t)=>i+t.vol,0),Gd=yn.filter(i=>i.site).length,Co=(()=>{let t=new Map,e=(s,r)=>s*1e5+r;for(let s of yn)for(let r=Math.floor(s.bbox[0]/40);r<=Math.floor(s.bbox[1]/40);r++)for(let a=Math.floor(s.bbox[2]/40);a<=Math.floor(s.bbox[3]/40);a++){let o=e(r,a);t.has(o)||t.set(o,[]),t.get(o).push(s)}let n=[];return{at(s,r){return t.get(e(Math.floor(s/40),Math.floor(r/40)))||n},query(s,r,a){let o=new Set;for(let l=Math.floor((s-a)/40);l<=Math.floor((s+a)/40);l++)for(let c=Math.floor((r-a)/40);c<=Math.floor((r+a)/40);c++)for(let h of t.get(e(l,c))||[])!h.gone&&h.bbox[0]-a<=s&&s<=h.bbox[1]+a&&h.bbox[2]-a<=r&&r<=h.bbox[3]+a&&o.add(h);return o}}})();function Wd(i,t,e,n,s){let r=i.u0+(t+.5)*i.cell,a=i.w0+(n+.5)*i.cell;return s.set(i.cs*r-i.sn*a,(e+.5)*i.fh,i.sn*r+i.cs*a),s}function Vc(i){if(i.vox||i.gone)return i.vox;if(Qt.cap-Qt.live<i.vol)return null;let t=i.nx*i.ny*i.nz,e=new Int32Array(t).fill(-1),n=i.color.r,s=i.color.g,r=i.color.b,a=0;for(let o of i.cellsIn){let l=o/i.nz|0,c=o%i.nz;for(let h=0;h<i.ny;h++){Wd(i,l,h,c,je);let u=.9+.1*Math.random(),d=Qt.add(je.x,je.y,je.z,i.cell,i.fh,i.cell,i.quat,n*u,s*u,r*u,i.style);Qt.owner[d]=i.i,Qt.cell[d]=(l*i.ny+h)*i.nz+c,e[(l*i.ny+h)*i.nz+c]=d,a++}}return i.vox=e,i.alive=a,Fd(i),Hd(i),e}var Gc=(i,t,e,n)=>(t*i.ny+e)*i.nz+n,kr=0;function Cs(i,t,e,n=0,s=0,r=0,a=0){let o=i.vox[t];if(o<0)return;let l=Qt,c=l.pos[o*3],h=l.pos[o*3+1],u=l.pos[o*3+2];e==="debris"?se.spawn(c,h,u,l.size[o*3]*.94,l.size[o*3+1]*.94,l.size[o*3+2]*.94,i.quat,l.col[o*3],l.col[o*3+1],l.col[o*3+2],n,s,r,Math.min(3,.4+Math.hypot(n,s,r)*.05),a,i.style):e==="vapor"&&Si.spawn(c,h,u,z(-3,3),z(2,8),z(-3,3),z(5,9),.5,[1,.8,.4],[1,.25,.05]),l.remove(o),i.vox[t]=-1,i.alive--,i.dirty=!0,i.site&&kr++,$c(10,c,h,u)}function Wc(i,t,e,n,s,r={}){let a=0;for(let o of Co.query(i,e,n))if(Vc(o))for(let l of o.cellsIn){let c=l/o.nz|0,h=l%o.nz;for(let u=0;u<o.ny;u++){let d=Gc(o,c,u,h),f=o.vox[d];if(f<0)continue;let g=Qt.pos[f*3],x=Qt.pos[f*3+1],m=Qt.pos[f*3+2],p=g-i,y=x-t,_=m-e;r.vertical&&(y=0);let b=Math.hypot(p,y,_);if(b>n*(.85+Math.random()*.25))continue;let R=b||1,S=s*(1-b/(n*1.1))+s*.15;if(r.vapor&&b<n*.75){Cs(o,d,"vapor"),a++;continue}if(r.dir){let[A,U,M]=r.dir,E=z(.75,1.25)*s;Cs(o,d,"debris",A*E+z(-8,8),U*E+z(0,12),M*E+z(-8,8),r.tag||0)}else Cs(o,d,"debris",p/R*S+z(-3,3),Math.max(y/R,.15)*S+z(2,8)*(s/30),_/R*S+z(-3,3));a++}}return a}function Cy(i,t,e,n,s,r){for(let a of Co.at(i,e)){if(a.gone||t>a.h||t<0||i<a.bbox[0]||i>a.bbox[1]||e<a.bbox[2]||e>a.bbox[3])continue;let o=a.cs*i+a.sn*e,l=-a.sn*i+a.cs*e,c=Math.floor((o-a.u0)/a.cell),h=Math.floor((l-a.w0)/a.cell),u=Math.floor(t/a.fh);if(c<0||h<0||c>=a.nx||h>=a.nz||u<0||u>=a.ny||!a.vox&&(!a.cellsIn.includes(c*a.nz+h)||!Vc(a)))continue;let d=Gc(a,c,u,h);if(!(a.vox[d]<0))return Cs(a,d,"debris",n*.5,s*.5+3,r*.5),Math.random()<.15&&Qe.spawn(i,t,e,0,2,0,z(6,10),2.5,[.6,.58,.55],[.5,.5,.5],.5),!0}return!1}var Ic=[];function Py(i){if(i.dirty=!1,!i.vox||i.gone)return;let t=new Uint8Array(i.vox.length),e=[];for(let l of i.cellsIn){let c=l/i.nz|0,h=l%i.nz,u=Gc(i,c,0,h);if(i.vox[u]<0)continue;let d=i.vox[u];si(Qt.pos[d*3],Qt.pos[d*3+2])<-1.6||(t[u]=1,e.push(u))}let n=i.ny*i.nz,s=i.nz,r=i.vox,a=l=>{!t[l]&&r[l]>=0&&(t[l]=1,e.push(l))};for(;e.length;){let l=e.pop(),c=l%i.nz,h=(l/i.nz|0)%i.ny,u=l/n|0;u+1<i.nx&&a(l+n),u>0&&a(l-n),h+1<i.ny&&a(l+s),h>0&&a(l-s),c+1<i.nz&&a(l+1),c>0&&a(l-1)}let o=[];for(let l=0;l<i.vox.length;l++)i.vox[l]>=0&&!t[l]&&o.push(l);o.length&&Ic.push({b:i,loose:o}),Xd(i)}function Ly({b:i,loose:t}){if(t=t.filter(a=>i.vox&&i.vox[a]>=0),!t.length)return;let e=se.cap-se.n,n=t.length<Math.min(500,e)?1:t.length<e*3?2:3,s=new Map;for(let a of t){let o=a%i.nz,l=(a/i.nz|0)%i.ny,h=`${(a/(i.nz*i.ny)|0)/n|0},${l/Math.min(n,2)|0},${o/n|0}`;s.has(h)||s.set(h,[]),s.get(h).push(a)}let r=0;for(let a of s.values()){let o=0,l=0,c=0,h=0,u=0,d=0;for(let x of a){let m=i.vox[x];o+=Qt.pos[m*3],l+=Qt.pos[m*3+1],c+=Qt.pos[m*3+2],h+=Qt.col[m*3],u+=Qt.col[m*3+1],d+=Qt.col[m*3+2],Qt.remove(m),i.vox[x]=-1,i.alive--,i.site&&kr++}let f=a.length,g=Math.cbrt(f);se.spawn(o/f,l/f,c/f,i.cell*Math.min(n,g*1.1),i.fh*Math.min(Math.min(n,2),g),i.cell*Math.min(n,g*1.1),i.quat,h/f,u/f,d/f,z(-2,2),z(-3,0),z(-2,2),.35,0,i.style),r++%5===0&&Qe.spawn(o/f,l/f,c/f,z(-2,2),z(0,2),z(-2,2),z(10,18),4,[.72,.7,.66],[.55,.54,.52],.45),$c(10*f,o/f,l/f,c/f,!0)}t.length>30&&(ne.at(i.cx,i.cz).crumble(Math.min(1,t.length/600)),ne.v=1),i.dirty=!0}function Xd(i){if(!i.collapsed&&i.alive<=i.vol*.2){i.collapsed=!0;let t=i.name||(i.site?yt("noName",te.company):"");i.site?(Ur(5e3,yt("collapse",t)),Po++):Ur(800,t?yt("collapseSmall",t):yt("nextBldg"))}}var Po=0;function qd(i,t,e,n,s,r=!1){if(i.gone)return;let a=[];if(i.vox)for(let h=0;h<i.vox.length;h++)i.vox[h]>=0&&a.push(h);let o=i.vox?a.length:i.vol,l=Math.min(s,o),c=i.color;for(let h=0;h<l;h++){let u,d,f;if(i.vox){let _=i.vox[a[Math.random()*a.length|0]];u=Qt.pos[_*3],d=Qt.pos[_*3+1],f=Qt.pos[_*3+2]}else{let _=i.cellsIn[Math.random()*i.cellsIn.length|0];Wd(i,_/i.nz|0,Math.random()*i.ny|0,_%i.nz,je),u=je.x,d=je.y,f=je.z}let g=u-t,x=f-e,m=Math.hypot(g,x)||1,p=(1-Math.min(1,m/n))*170+30,y=i.cell*z(1,1.8)*(r?1.4:1);r?se.spawn(u,d,f,y,i.fh*z(.9,1.5),y,i.quat,c.r,c.g,c.b,z(-3,3),z(-4,0),z(-3,3),.5,0,i.style):se.spawn(u,d,f,y,i.fh*z(.8,1.4),y,i.quat,c.r,c.g,c.b,g/m*p,z(25,70),x/m*p,3,0,i.style)}if(i.vox)for(let h=0;h<i.vox.length;h++)i.vox[h]>=0&&(Qt.remove(i.vox[h]),i.vox[h]=-1);else Fd(i);if(Hd(i),i.site&&(kr+=i.alive),$c(10*i.alive,i.cx,i.h/2,i.cz,!0),r)for(let h=0;h<14*Lo;h++)Qe.spawn(i.cx+z(-20,20),z(2,i.h*.6),i.cz+z(-20,20),z(-4,4),z(1,5),z(-4,4),z(18,34),5,[.75,.72,.68],[.6,.58,.56],.55,1.5);r&&(ne.at(i.cx,i.cz).crumble(.8),ne.v=1),i.alive=0,i.gone=!0,Xd(i)}var _o=class{constructor(t,e){this.cap=t,this.n=0;let n=new xe;this.P=new Float32Array(t*3),this.Cc=new Float32Array(t*3),this.Sz=new Float32Array(t),this.A=new Float32Array(t),n.setAttribute("position",new ue(this.P,3).setUsage(Ge)),n.setAttribute("aColor",new ue(this.Cc,3).setUsage(Ge)),n.setAttribute("aSize",new ue(this.Sz,1).setUsage(Ge)),n.setAttribute("aAlpha",new ue(this.A,1).setUsage(Ge)),n.boundingSphere=new dn(new C,1e5),this.V=new Float32Array(t*3),this.L=new Float32Array(t),this.ML=new Float32Array(t),this.S0=new Float32Array(t),this.GR=new Float32Array(t),this.C0=new Float32Array(t*3),this.C1=new Float32Array(t*3),this.A0=new Float32Array(t),this.B=new Float32Array(t),this.mat=new pn({uniforms:{map:{value:e?dy:fy},uScale:{value:1}},vertexShader:`attribute vec3 aColor; attribute float aSize; attribute float aAlpha; varying vec3 vC; varying float vA; uniform float uScale;
        void main(){ vC=aColor; vA=aAlpha; vec4 mv = modelViewMatrix*vec4(position,1.); gl_PointSize = min(aSize*uScale/max(-mv.z,1.), 900.); gl_Position = projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a*vA); }",transparent:!0,depthWrite:!1,blending:e?Oi:fi}),this.pts=new or(n,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=e?3:2,ie.add(this.pts)}spawn(t,e,n,s,r,a,o,l,c,h,u=1,d=1.6,f=0){if(this.n>=this.cap)return;let g=this.n++;this.P.set([t,e,n],g*3),this.V.set([s,r,a],g*3),this.L[g]=0,this.ML[g]=l*z(.8,1.2),this.S0[g]=o,this.GR[g]=d,this.A0[g]=u,this.B[g]=f,this.C0.set(c,g*3),this.C1.set(h,g*3)}update(t){for(let n=0;n<this.n;n++){this.L[n]+=t;let s=this.L[n]/this.ML[n];if(s>=1){let o=--this.n;if(n!==o){for(let[l,c]of[[this.P,3],[this.V,3],[this.C0,3],[this.C1,3]])l.copyWithin(n*c,o*c,o*c+c);for(let l of[this.L,this.ML,this.S0,this.GR,this.A0,this.B])l[n]=l[o]}n--;continue}let r=n*3,a=Math.max(0,1-1.4*t);this.V[r]*=a,this.V[r+1]=this.V[r+1]*a+this.B[n]*t,this.V[r+2]*=a,this.P[r]+=this.V[r]*t,this.P[r+1]+=this.V[r+1]*t,this.P[r+2]+=this.V[r+2]*t,this.Sz[n]=this.S0[n]*(1+this.GR[n]*s);for(let o=0;o<3;o++)this.Cc[r+o]=this.C0[r+o]+(this.C1[r+o]-this.C0[r+o])*Math.min(1,s*1.6);this.A[n]=this.A0[n]*(s<.1?s/.1:1-(s-.1)/.9)}let e=this.pts.geometry;e.setDrawRange(0,this.n);for(let n of["position","aColor","aSize","aAlpha"])e.attributes[n].needsUpdate=!0}},Si=new _o(Ne?3500:5e3,!0),Qe=new _o(Ne?4500:6e3,!1),Lo=ei[In].fxk,Oe=[];function xo(i,t,e,n,s,r="#fff2d0"){let a=new kt(new gr(.85,1,64),new fn({color:r,transparent:!0,opacity:.8,side:En,depthWrite:!1,blending:Oi}));a.rotation.x=-Math.PI/2,a.position.set(i,t+.6,e),ie.add(a),Oe.push({t:0,dur:s,up(o){a.scale.setScalar(1+n*Math.pow(o,.6)),a.material.opacity=.8*(1-o)},done(){ie.remove(a),a.geometry.dispose()}})}var yd=[0,1,2].map(()=>{let i=new Za("#ffb060",0,100,1.2);return ie.add(i),i}),Iy=0;function Xc(i,t,e,n,s){let r=new kt(new _r(1,32,16),new fn({color:"#ffd28a",transparent:!0,blending:Oi,depthWrite:!1}));r.position.set(i,t,e),ie.add(r);let a=yd[Iy++%yd.length];a.position.set(i,t+n*.5,e),a.distance=n*14,Oe.push({t:0,dur:s,up(o){r.scale.setScalar(n*Math.pow(o,.35)+.1),r.material.opacity=1-o,r.material.color.setRGB(1,.85-o*.5,.55-o*.5),a.intensity=(1-o)*n*400},done(){ie.remove(r),a.intensity=0,r.geometry.dispose()}})}function vd(i,t){Oe.push({t:0,dur:i,up(){},done:t})}function Yd(i,t,e,n,s=1){Xc(i,t,e,n*.9,.5+.25*s),xo(i,Math.max(t-n*.6,si(i,e)),e,n*3,.8+.3*s);let r=Math.min(220,40+n*5)*Lo;for(let a=0;a<r;a++){let o=z(0,Math.PI*2),l=z(-.1,1),c=z(.3,1.2)*n*2.4;Si.spawn(i,t,e,Math.cos(o)*c*(1-l*.5),l*c,Math.sin(o)*c*(1-l*.5),z(.25,.5)*n,z(.45,.9),[1,.92,.6],[1,.3,.06],1,1.2,6)}for(let a=0;a<r*.8;a++){let o=z(0,Math.PI*2),l=z(.1,.6)*n*1.5;Qe.spawn(i+z(-n,n)*.4,t+z(0,n*.4),e+z(-n,n)*.4,Math.cos(o)*l,z(2,10)+n*.3,Math.sin(o)*l,z(.4,.8)*n,z(2.5,5)*s,[.32,.29,.27],[.62,.6,.58],.75,1.8,2)}}var Bn=[[0,"#8b95a5"],[600,"#5ea2d8"],[2200,"#3fb37f"],[5500,"#e2b33c"],[11e3,"#ef8a32"],[2e4,"#e5533d"],[34e3,"#c13cc9"],[52e3,"#ff2d55"]].map(([i,t],e)=>[yt("ranks")[e],i,t]),Us=0,Mi=0,qc=0,yo=0,br=[],$d=1,ti=0,oo=0,Dc=new C,Md=0,Yc=()=>{let i=0;return Bn.forEach((t,e)=>{Mi>=t[1]&&(i=e)}),i},vo=()=>$d*(1+Yc()*.12);function $c(i,t,e,n,s){Number.isFinite(t+e+n)||(t=e=n=0);let r=i*vo();Us+=r,Mi+=i*.55,qc=ti;let a=Yc();a>yo&&(yo=a,a>=2&&Fs(yt("promo",Bn[a][0]),1600,Bn[a][2])),oo+=r,Dc.set(t,e,n)}function Ur(i,t){Us+=i*vo(),Mi+=i*.3,qc=ti,Fs(`${t}  +${Ls(Math.round(i*vo()))}`,2200)}function Uc(i){br.push(i),br.length>6&&br.shift();let t=br.slice(-4);$d=t.length===4&&t.every(e=>e===i)?.7:1+.15*(new Set(br).size-1)}var ne={ctx:null,out:null,muted:!1,nb:null,v:1,lastThud:0,thudN:0,at(i,t){let e=Math.hypot(de.position.x-i,de.position.y,de.position.z-t);return this.v=Es.clamp(1.7-e/800,.35,1.35),this},init(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}if(!this.silent)try{let r=new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=");r.loop=!0,r.setAttribute("playsinline",""),r.volume=.01,r.play().catch(()=>{}),this.silent=r}catch{}if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;this.ctx=new i,this.ctx.resume&&this.ctx.resume();try{let r=this.ctx.createBufferSource();r.buffer=this.ctx.createBuffer(1,1,22050),r.connect(this.ctx.destination),r.start(0)}catch{}let t=this.ctx.createDynamicsCompressor();t.threshold.value=-18,t.ratio.value=6,this.out=this.ctx.createGain(),this.out.gain.value=.85,this.out.connect(t),t.connect(this.ctx.destination);let e=this.ctx.sampleRate*3;this.nb=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let n=this.nb.getChannelData(0),s=0;for(let r=0;r<e;r++){let a=Math.random()*2-1;s=(s+.02*a)/1.02,n[r]=a*.5+s*3}},ok(){return this.ctx&&this.ctx.state!=="running"&&this.ctx.resume(),this.ctx&&!this.muted},env(i,t,e,n,s){i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(n,t+e),i.gain.exponentialRampToValueAtTime(1e-4,t+s)},noise(i,t,e,n,s,r=.004,a=0){if(!this.ok())return;let o=this.ctx,l=o.currentTime+a,c=o.createBufferSource();c.buffer=this.nb,c.loop=!0;let h=o.createBiquadFilter();h.type=t,h.frequency.setValueAtTime(e,l),h.frequency.exponentialRampToValueAtTime(Math.max(20,n),l+i);let u=o.createGain();this.env(u,l,r,Math.min(1.5,s*this.v),i),c.connect(h),h.connect(u),u.connect(this.out),c.start(l,Math.random()*2),c.stop(l+i+.05)},tone(i,t,e,n,s,r=.005,a=0){if(!this.ok())return;let o=this.ctx,l=o.currentTime+a,c=o.createOscillator();c.type=i,c.frequency.setValueAtTime(t,l),c.frequency.exponentialRampToValueAtTime(Math.max(10,e),l+n);let h=o.createGain();this.env(h,l,r,Math.min(1.5,s*this.v),n),c.connect(h),h.connect(this.out),c.start(l),c.stop(l+n+.05)},boom(i=1){this.noise(.09,"highpass",5e3,1500,.9*Math.min(1,.4+i*.5)),this.noise(.6+i*.9,"lowpass",1800*Math.min(1.5,i),70,.95*Math.min(1,.5+i*.4)),this.tone("sine",95,26,.5+i*.7,.9),this.tone("triangle",60,22,.35+i*.4,.5);let t=3+Math.min(8,i*4);for(let e=0;e<t;e++)this.noise(z(.04,.12),"bandpass",z(900,3500),z(400,900),z(.15,.35),.002,z(.1,.9+i*.4))},thud(i,t,e){let n=performance.now();if(n-this.lastThud>1e3&&(this.lastThud=n,this.thudN=0),++this.thudN>12)return;this.at(i,t);let s=Math.min(1,e/8);this.tone("sine",z(70,120)*(1.3-s*.6),35,.18+s*.2,.25+s*.35,.002),this.noise(.12+s*.15,"lowpass",900,150,.15+s*.25,.002),this.v=1},cheer(){this.noise(2.2,"bandpass",700,1400,.35,.4),this.tone("square",523,523,.12,.12,.005,.05),this.tone("square",659,659,.12,.12,.005,.18),this.tone("square",784,784,.3,.12,.005,.31)},click(){this.v=1,this.tone("triangle",1100,700,.06,.18)},crumble(i){this.noise(1+i*1.5,"bandpass",700,180,.25+i*.4,.05)},whack(){this.noise(.18,"highpass",3e3,800,.8),this.tone("square",220,70,.2,.35)},whoosh(i){this.noise(i,"bandpass",300,2600,.35,i*.8)},whistle(i){this.tone("sine",1700,420,i,.18,.2)},zap(){this.tone("sawtooth",1500,160,.3,.3),this.noise(.3,"highpass",4e3,1500,.3)},charge(i){this.tone("sawtooth",70,900,i,.22,i*.9)},hum(){if(!this.ok())return()=>{};let i=this.ctx,t=i.createOscillator(),e=i.createOscillator(),n=i.createGain(),s=i.createBiquadFilter();return t.type="sawtooth",t.frequency.value=150,e.type="square",e.frequency.value=301,s.type="lowpass",s.frequency.value=1800,n.gain.value=1e-4,n.gain.exponentialRampToValueAtTime(.16,i.currentTime+.05),t.connect(s),e.connect(s),s.connect(n),n.connect(this.out),t.start(),e.start(),()=>{n.gain.exponentialRampToValueAtTime(1e-4,i.currentTime+.25),t.stop(i.currentTime+.3),e.stop(i.currentTime+.3)}},rumble(i,t){this.noise(i,"lowpass",220,60,.35+t*.5,.3)},nuke(){this.boom(3),this.noise(7,"lowpass",500,40,.9,.05,.1),this.tone("sine",50,20,5,.7,.05)}},Fn=0,bc=new C,zr=i=>{Fn=Math.min(14,Fn+i)};function Zd(){let i=new C;return de.getWorldDirection(i),i.y=0,i.normalize()}function Jd(i,t,e,n,s,r={}){Wc(i,t,e,n,s),Br.wake(i,e,n*1.15,s*.7,i,e),se.push(i,t,e,n*1.6,s*.6),$i.clear(i,e,n*.8),r.crater&&t-si(i,e)<n*.8&&Fr(i,e,r.crater[0],r.crater[1]),Yd(i,t,e,n,r.big||1),zr(n*.08*(r.big||1)),ne.at(i,e).boom(n/16),ne.v=1}var Ns=Object.fromEntries(["bomb","bat","laser","meteor","quake","nuke"].map(i=>[i,yt(`labels.${i}`)])),Os=i=>i[Math.random()*i.length|0],Dy=(()=>{let[i,t]=ii(256,180);t.fillStyle="#fbfaf5",t.fillRect(0,0,256,180),t.strokeStyle="#c9c4b8",t.lineWidth=4,t.strokeRect(4,4,248,172),t.beginPath(),t.moveTo(6,8),t.lineTo(128,96),t.lineTo(250,8),t.stroke(),t.fillStyle="#1b1b1b",t.font=`900 46px ${getComputedStyle(document.body).fontFamily}`,t.textAlign="center",t.fillText(yt("envelope"),128,150);let e=new Tn(i);return e.colorSpace=pe,e})(),Kd=()=>Es.clamp(de.position.distanceTo(Ze.target)/260,1,5);function Uy(i){let t=Kd(),e=new kt(new De(9*t,.5*t,6.5*t),[0,0,1,1,0,0].map(s=>new ve(s?{map:Dy}:{color:"#efece4"})));e.castShadow=!0;let n=90*t;e.position.set(i.x,i.y+n,i.z),ie.add(e),Oe.push({t:0,dur:.62,up(s){let r=s*s;e.position.set(i.x+Math.sin(s*9)*4*t*(1-s),i.y+n*(1-r),i.z+Math.cos(s*7)*3*t*(1-s)),e.rotation.set(Math.sin(s*10)*.6,s*5,Math.cos(s*8)*.5),Math.random()<.6&&Qe.spawn(e.position.x,e.position.y,e.position.z,0,2,0,3*t,.6,[1,1,1],[.9,.9,.9],.35)},done(){ie.remove(e),e.geometry.dispose(),Jd(i.x,i.y+2,i.z,20,46,{crater:[16,6]}),Math.random()<.45&&bi(i,Os(Ns.bomb),"#fff")}})}var As=1,Ny=1,Sd=new Set,jd=(()=>{let[i,t]=ii(512,160);t.fillStyle="#2b2b2e",t.fillRect(0,0,512,160),t.fillStyle="#f6f4ee",t.fillRect(40,12,460,136),t.fillStyle="#9aa0a6",t.fillRect(8,50,40,60),t.strokeStyle="#222",t.lineWidth=3,t.font="bold 24px sans-serif",t.fillStyle="#222",yt("board").forEach((n,s)=>{t.strokeRect(70+s*100,24,96,112),t.fillText(n,82+s*100,56)}),t.strokeStyle="#d4202a",t.lineWidth=7,t.beginPath(),t.arc(380,100,42,0,7),t.stroke(),t.fillStyle="#d4202a",t.font="bold 26px sans-serif",t.textAlign="center",t.fillText(yt("reject"),380,110),t.textAlign="left";let e=new Tn(i);return e.colorSpace=pe,e})();function Oy(i){let t=36*As,e=Ny++,n=Math.max(t,30*Kd()),s=Zd(),r=new C(-s.z,0,s.x),a=i.clone().addScaledVector(s,-n*.55);a.y=Math.max(i.y,n*.12);let o=new Je;o.position.copy(a);let l=new kt(new De(n,n*.3,n*.03),[0,0,0,0,1,1].map(u=>u?new ve({map:jd}):new ve({color:"#2b2b2e"})));l.position.x=n/2,l.castShadow=!0,o.add(l),ie.add(o);let c=Math.atan2(-s.z,s.x);ne.whoosh(.22);let h=!1;Oe.push({t:0,dur:.8,up(u){let d=Math.min(1,u/.4);if(o.rotation.y=c+1.5-3*(d*d*(3-2*d)),!h&&d>=.5){h=!0;let f=s.clone().multiplyScalar(.78).addScaledVector(r,.42);f.y=.42,f.normalize();let g=60+22*As;Wc(i.x,i.y,i.z,t*.42,g,{dir:[f.x,f.y,f.z],tag:e});for(let x=0;x<2;x++)se.push(i.x,i.y,i.z,t*.5,25);Br.wake(i.x,i.z,t*.4,30,a.x,a.z),$i.clear(i.x,i.z,t*.3),ne.at(i.x,i.z).whack(),ne.v=1,zr(1.5*As);for(let x=0;x<25;x++)Qe.spawn(i.x,i.y,i.z,f.x*20+z(-6,6),z(0,8),f.z*20+z(-6,6),z(5,10)*As,1.8,[.7,.68,.64],[.6,.6,.6],.5);Math.random()<.5&&bi(i,Os(Ns.bat),"#ffd6d6")}l.material.forEach(f=>{f.transparent=u>.75,f.opacity=u>.75?1-(u-.75)/.25:1})},done(){ie.remove(o),l.geometry.dispose()}})}function Fy(i,t,e,n,s){t>70&&!Sd.has(i)&&(Sd.add(i),Ur(3e3,yt("homerun",Math.round(t))),ne.cheer(),bi(new C(e,n+8,s),yt("homerunShort",Math.round(t)),"#ffe066"))}var By=new C(260,1400,-380),le={drawing:!1,path:[],line:null,active:null},vi=(()=>{let i=new Je,t=new An(1,1,1,16,1,!0).translate(0,.5,0);return[[1.3,(Rr.beam||[])[0]||"#ffffff",1],[3.2,(Rr.beam||[])[1]||"#21d07a",.75],[7.5,(Rr.beam||[])[1]||"#21a366",.28]].forEach(([e,n,s])=>{let r=new kt(t,new fn({color:n,transparent:!0,opacity:s,blending:Oi,depthWrite:!1,fog:!1}));r.scale.set(e,1,e),r.userData.o=s,i.add(r)}),i.visible=!1,ie.add(i),i})();function Nc(i,t=1){let e=By.clone().sub(i),n=e.length();vi.position.copy(i),vi.quaternion.setFromUnitVectors(Bd,e.normalize()),vi.children.forEach(s=>{var r;s.scale.y=n,s.scale.x=s.scale.z=(r=s.userData).r0??(r.r0=s.scale.x),s.scale.x=s.scale.z=s.userData.r0*t*z(.9,1.1),s.material.opacity=s.userData.o*Math.min(1,t)}),vi.visible=!0}function Qd(i,t,e){let n=Math.max(0,si(i,t));Wc(i,0,t,8.5,22,{vertical:!0,vapor:!0}),Br.wake(i,t,9,14,i,t),$i.clear(i,t,6),Fr(i,t,5,1.8,1);for(let s=0;s<6;s++)Si.spawn(i,n+1,t,z(-10,10),z(5,25),z(-10,10),z(2,5),.5,[.85,1,.85],[1,.4,.05]);Qe.spawn(i,n+2,t,z(-2,2),z(3,8),z(-2,2),z(5,9),2.2,[.35,.36,.34],[.5,.5,.5],.45),e&&(Yd(i,n+3,t,7),ne.boom(.4),Math.random()<.6&&bi(new C(i,n+10,t),Os(Ns.laser),"#7dffb0"))}function ky(i){let t=[],e=0;for(let a=1;a<i.length;a++){let o=i[a].distanceTo(i[a-1]);t.push(o),e+=o}let n=.65,s=Math.min(2.6,Math.max(.8,e/160));ne.charge(n),le.active={path:i,segs:t,total:e,done:0,nextBoom:0};let r=null;Oe.push({t:0,dur:n,up(a){Wi.uDark.value=Math.max(Wi.uDark.value,a*.65),Nc(i[0],a*.25)},done(){r=ne.hum(),zr(1.5),Oe.push({t:0,dur:s,up(a){let o=le.active,l=a*o.total;for(;o.done<=l;){let c=o.done,h=0;for(;h<o.segs.length&&c>o.segs[h];)c-=o.segs[h],h++;if(h>=o.segs.length)break;let u=i[h].clone().lerp(i[h+1],o.segs[h]?c/o.segs[h]:0);Qd(u.x,u.z,o.done>=o.nextBoom),o.done>=o.nextBoom&&(o.nextBoom+=22),o.last=u,o.done+=3}o.last&&Nc(o.last.clone().setY(si(o.last.x,o.last.z)),1),Fn=Math.max(Fn,.5)},done(){r&&r(),vi.visible=!1,le.active=null,Oe.push({t:0,dur:.8,up(a){Wi.uDark.value=(To?0:.65)*(1-a)},done(){Wi.uDark.value=0}})}})}})}function tf(i){ne.zap(),Oe.push({t:0,dur:.45,up(t){Nc(i,1-t*.5)},done(){vi.visible=!1}}),Qd(i.x,i.z,!0)}function ef(){let i=(e,n=.4)=>new ve({color:e,emissive:"#ff7a1a",emissiveIntensity:.55,metalness:n,roughness:.4}),t=new Je;switch(Rr.meteor){case"pill":{let e=new kt(new hr(5,10,6,16),i("#f8fafc",0)),n=new kt(new An(5.05,5.05,5,16),i("#ef4444",0));n.position.y=2.5,e.rotation.z=n.rotation.z=Math.PI/3,t.add(e,n);break}case"coin":{let e=new kt(new An(10,10,2.4,32),i("#fbbf24",1));e.rotation.x=1.1,t.add(e);break}case"wafer":{let e=new kt(new An(12,12,.8,48),i("#cbd5e1",1));e.rotation.x=1,t.add(e);break}case"tv":{let e=new kt(new De(16,10,4),i("#1f2937",.3)),n=new kt(new xi(14,8.4),new fn({color:"#93c5fd"}));n.position.z=2.05,t.add(e,n);break}case"phone":{let e=new kt(new De(6,12,1),i("#111827",.5)),n=new kt(new xi(5.4,11),new fn({color:"#a5b4fc"}));n.position.z=.55,t.add(e,n),t.scale.setScalar(1.4);break}case"gear":{let e=new kt(new An(8,8,3,10),i("#9ca3af",1));for(let n=0;n<10;n++){let s=new kt(new De(3,3,3),i("#9ca3af",1));s.position.set(Math.cos(n/10*Math.PI*2)*9,0,Math.sin(n/10*Math.PI*2)*9),e.add(s)}e.rotation.x=1.2,t.add(e);break}case"gpu":{let e=new kt(new De(18,4,9),i("#14532d",.6));for(let n of[-5,4]){let s=new kt(new An(3.2,3.2,.5,20),i("#111827",.2));s.position.set(n,-2.2,0),e.add(s)}t.add(e);break}default:t.add(new kt(new mr(8,1),new fn({color:"#ffb36b"})))}return t.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t}function zy(i){let t=Zd(),e=new C(-t.z,0,t.x),n=i.clone().addScaledVector(t,-380).addScaledVector(e,160);n.y+=650;let s=ef();ie.add(s),ne.whoosh(1.5);let r=n.clone();Oe.push({t:0,dur:1.5,up(a){let o=a*a;s.position.lerpVectors(n,i,o),s.rotation.x+=.12,s.rotation.y+=.07;for(let l=0;l<10;l++){let c=r.clone().lerp(s.position,Math.random());Si.spawn(c.x,c.y,c.z,z(-3,3),z(-3,3),z(-3,3),z(9,16),.5,[1,.9,.6],[1,.3,.05]),Qe.spawn(c.x,c.y,c.z,z(-2,2),z(0,3),z(-2,2),z(10,18),3,[.45,.4,.36],[.5,.5,.5],.55)}r.copy(s.position)},done(){ie.remove(s),s.traverse(a=>a.geometry&&a.geometry.dispose()),Jd(i.x,i.y+4,i.z,34,95,{big:1.8}),Fr(i.x,i.z,42,17),bi(i.clone().setY(i.y+30),Os(Ns.meteor),"#ffcf8a")}})}var Ce=null,Mo=7;function Hy(i){let t=Mo,e=Math.min(9,.08*Math.pow(1.9,t-4));Ce={t:0,dur:3.2,M:t,A:e,P:i.clone()},ne.rumble(3.4,Math.min(1,(t-4)/5)),zr(e*.6),bi(i.clone().setY(i.y+25),yt("magLabel",t.toFixed(1),Os(Ns.quake)),"#ffd28a");for(let n of yn){if(n.gone)continue;let s=Math.hypot(n.cx-i.x,n.cz-i.z),r=t-2.6*Math.log10(1+s/50);r<6.5&&!n.vox||r<5.6||vd(z(.2,2.6),()=>Vy(n,r))}if(t>=8.5)for(let n=0;n<3+(t-8.5)*2;n++){let s=z(0,Math.PI*2),r=z(80,60+(t-8)*120);for(let a=0;a<r;a+=5)vd(.3+a/120,()=>Fr(i.x+Math.cos(s)*a,i.z+Math.sin(s)*a,3.5,6*(1-a/r)+1.5,.4))}}function Vy(i,t){if(i.gone)return;if(t>=7.5){let a=se.cap-se.n;qd(i,i.cx,i.cz,1,Math.max(6,Math.min(i.site?110:40,Math.floor(a/6))),!0);return}if(!Vc(i))return;let e=[];for(let a=0;a<i.vox.length;a++)i.vox[a]>=0&&e.push(a);let n=a=>(a/i.nz|0)%i.ny,s=a=>[a/(i.nz*i.ny)|0,a%i.nz],r=t>=7?1+Math.floor((t-7)*4):t>=6.2?1:0;for(let a=0;a<r;a++){let o=i.cellsIn[Math.random()*i.cellsIn.length|0],l=o/i.nz|0,c=o%i.nz,h=Math.max(1.5,Math.sqrt(i.cellsIn.length)*z(.25,.45));e.filter(u=>n(u)<=1&&i.vox[u]>=0).forEach(u=>{let[d,f]=s(u);Math.hypot(d-l,f-c)<=h&&Cs(i,u,"debris",z(-2,2),0,z(-2,2))})}t<6.2&&e.filter(a=>i.vox[a]>=0&&n(a)===i.ny-1&&Math.random()<.04).forEach(a=>Cs(i,a,"debris",z(-3,3),z(0,2),z(-3,3)))}var Oc=!1;function Gy(i){if(Oc)return;Oc=!0;let t=new Je,e=new kt(new hr(2.4,7,6,12),new ve({color:"#30353b",metalness:.5,roughness:.4})),n=new kt(new An(2.5,2.5,1.2,12),new ve({color:"#f2c200"}));t.add(e,n),ie.add(t);let s=i.clone();s.y+=700,ne.whistle(2.2),bi(i.clone().setY(i.y+40),Os(Ns.nuke),"#ff8080"),Oe.push({t:0,dur:2.2,up(r){t.position.lerpVectors(s,i,r*r),t.rotation.z=Math.sin(r*20)*.05},done(){ie.remove(t),Wy(i.clone().setY(si(i.x,i.z)+10))}})}var Ec=1,Ar=0;function Wy(i){qy(1,2.2),Ar=2.4,ne.nuke(),zr(14),Xc(i.x,i.y,i.z,170,3.2),xo(i.x,i.y,i.z,1100,4.5,"#ffe9c0"),xo(i.x,i.y,i.z,700,3,"#ffffff");let e=[...Co.query(i.x,i.z,420)].filter(s=>Math.hypot(s.cx-i.x,s.cz-i.z)<440),n=Math.max(8,Math.floor(Math.min(220,(se.cap-se.n-300)/Math.max(1,e.length))));for(let s of e)qd(s,i.x,i.z,420,s.site?n:Math.ceil(n*.5));Br.wake(i.x,i.z,420,120,i.x,i.z),se.push(i.x,i.y,i.z,420*1.3,150),$i.clear(i.x,i.z,420),Fr(i.x,i.z,230,75),Ur(3e4,yt("quit")),Oe.push({t:0,dur:9,up(s){let r=Math.min(520,700*Math.sqrt(s));for(let a=0;a<9*Lo;a++){let o=z(0,Math.PI*2),l=z(0,35);Qe.spawn(i.x+Math.cos(o)*l,i.y+z(0,r*.9),i.z+Math.sin(o)*l,0,z(20,50),0,z(35,70),4,s<.25?[1,.55,.2]:[.55,.45,.4],[.42,.38,.36],.6,1.2);let c=z(0,Math.PI*2),h=z(40,90+r*.35);Qe.spawn(i.x+Math.cos(c)*h*.5,i.y+r+z(-30,30),i.z+Math.sin(c)*h*.5,Math.cos(c)*h*.4,z(-4,14),Math.sin(c)*h*.4,z(60,110),5,s<.3?[1,.6,.25]:[.6,.5,.45],[.45,.42,.4],.7,1.4),s<.5&&Si.spawn(i.x+z(-40,40),i.y+r*z(.6,1),i.z+z(-40,40),z(-10,10),z(5,25),z(-10,10),z(40,80),1.2,[1,.8,.4],[1,.25,.05],.8)}if(s<.15)for(let a=0;a<20;a++){let o=z(0,Math.PI*2),l=z(150,320);Qe.spawn(i.x,i.y,i.z,Math.cos(o)*l,z(2,12),Math.sin(o)*l,z(40,70),3.5,[.7,.62,.55],[.6,.58,.55],.6,1.5)}},done(){Oc=!1}})}var bt=i=>document.getElementById(i),Nr=[{id:"bomb",short:yt("tools.bomb")[1],svg:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 8l9 6 9-6"/>',name:yt("tools.bomb")[0],tip:yt("tools.bomb")[2]},{id:"bat",short:yt("tools.bat")[1],svg:'<rect x="5" y="4" width="14" height="17" rx="2"/><rect x="9" y="2.5" width="6" height="3" rx="1"/><path d="M8 10h8M8 14h5"/><circle cx="15.5" cy="16.5" r="2.2"/>',name:yt("tools.bat")[0],tip:yt("tools.bat")[2],slider:{label:yt("batSize"),min:.5,max:3,step:.1,get:()=>As,set:i=>As=i,fmt:i=>`\xD7${i.toFixed(1)} \xB7 ${Math.round(36*i)} m`}},{id:"laser",short:yt("tools.laser")[1],svg:'<path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/>',name:yt("tools.laser")[0],tip:yt("tools.laser")[2]},{id:"meteor",short:yt("tools.meteor")[1],svg:'<circle cx="15" cy="15" r="5"/><path d="M3 3l8 8M7 3l6 6M3 7l6 6"/>',name:yt("tools.meteor")[0],tip:yt("tools.meteor")[2]},{id:"quake",short:yt("tools.quake")[1],svg:'<path d="M2 13h4l2-6 3 11 3-9 2 4h6"/>',name:yt("tools.quake")[0],tip:yt("tools.quake")[2],slider:{label:yt("mag"),min:4,max:10,step:.1,get:()=>Mo,set:i=>Mo=i,fmt:i=>`M ${i.toFixed(1)} \xB7 ${yt("qk")[i<6?0:i<7.5?1:2]}`}},{id:"nuke",short:yt("tools.nuke")[1],svg:'<circle cx="12" cy="12" r="2"/><path d="M12 10L8.5 4a8 8 0 0 1 7 0zM13.7 13l3.5 6a8 8 0 0 0 3.5-6zM10.3 13l-3.5 6a8 8 0 0 1-3.5-6z" fill="currentColor"/>',name:yt("tools.nuke")[0],tip:yt("tools.nuke")[2]}],Pn="bomb";function Xy(){let i=bt("dock");Nr.forEach((t,e)=>{let n=document.createElement("button");n.className="tool",n.dataset.id=t.id,n.title=t.tip,n.innerHTML=`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${t.svg}</svg><span class="nm">${t.name}</span><span class="sh">${t.short}</span><kbd>${e+1}</kbd>`,n.onclick=()=>So(t.id),i.appendChild(n)}),bt("slider").oninput=t=>{let e=Nr.find(n=>n.id===Pn);e.slider.set(+t.target.value),bt("sliderVal").textContent=e.slider.fmt(+t.target.value)},So("bomb")}function So(i){Pn!==i&&ne.click(),Pn=i,document.querySelectorAll(".tool").forEach(n=>n.classList.toggle("on",n.dataset.id===i));let t=Nr.find(n=>n.id===i);bt("tip").textContent=t.tip;let e=bt("sliderWrap");t.slider?(e.hidden=!1,bt("sliderLabel").textContent=t.slider.label,Object.assign(bt("slider"),{min:t.slider.min,max:t.slider.max,step:t.slider.step,value:t.slider.get()}),bt("sliderVal").textContent=t.slider.fmt(t.slider.get())):e.hidden=!0}var Ps=[];function bi(i,t,e="#fff",n=!1){let s=document.createElement("div");s.className="float"+(n?" big":""),s.textContent=t,s.style.color=e,s.style.opacity=0,bt("floaters").appendChild(s),Ps.push({el:s,pos:i.clone(),t:0}),Ps.length>28&&Ps.shift().el.remove()}var bd=0;function Fs(i,t=1800,e){let n=bt("toast");n.textContent=i,n.style.color=e||"",n.classList.add("show"),clearTimeout(bd),bd=setTimeout(()=>n.classList.remove("show"),t)}function qy(i,t){let e=bt("flash");e.style.transition="none",e.style.opacity=i,requestAnimationFrame(()=>{e.style.transition=`opacity ${t}s ease-out`,e.style.opacity=0})}function Zc(i){To=i;let t=i?ry:uo;Wi.uTop.value.copy(t.top),Wi.uHor.value.copy(t.hor),Dn.fog.color.copy(t.fog),Cd.intensity=i?.18:1.1,Se.intensity=i?.12:2.6,Se.color.set(i?"#9fb4ff":"#fff3e0"),wr.emissiveIntensity=i?1.6:0,Od.emissiveIntensity=i?1.6:0;for(let e of Vd)e.mat.emissiveIntensity=i?1.6:.25;oy.visible=i,bt("nightBtn").classList.toggle("on",i)}var gn={};function nf(){let i=Yc();gn.score.textContent=Ls(Math.round(Us)),gn.rank.textContent=Bn[i][0],gn.rank.style.background=Bn[i][2];let t=Bn[i+1];gn.bar.style.width=t?`${Math.min(100,(Mi-Bn[i][1])/(t[1]-Bn[i][1])*100)}%`:"100%",gn.mult.textContent=`\xD7${vo().toFixed(2)}`,gn.rate.textContent=`${Math.min(100,kr/Ry*100).toFixed(1)}%`,gn.cnt.textContent=yt("count",Po,Gd),gn.depth.textContent=`${Ls(6371*Math.pow(Math.min(1,Rs/Ir),1.6),{maximumFractionDigits:Rs<40?1:0})} ${yt("km")}`}function Yy(){Ee.render(Dn,de);let i=new Image;i.src=ni.toDataURL("image/jpeg",.9),i.onload=()=>{let[t,e]=ii(1200,630),n=Math.max(1200/i.width,630/i.height);e.drawImage(i,(1200-i.width*n)/2,(630-i.height*n)/2,i.width*n,i.height*n);let s=e.createLinearGradient(0,0,760,0);s.addColorStop(0,"rgba(10,14,22,.88)"),s.addColorStop(1,"rgba(10,14,22,0)"),e.fillStyle=s,e.fillRect(0,0,1200,630),e.fillStyle="#ff6a2b",e.font="700 22px sans-serif",e.fillText(te.series,56,70),e.fillStyle="#fff",e.font="900 54px sans-serif",e.fillText(yt("smash",te.company),56,132);let r=yt("card");[[r[0],Ls(Math.round(Us))],[r[1],Bn[yo][0]],[r[2],gn.rate.textContent],[r[3],gn.cnt.textContent],[r[4],gn.depth.textContent]].forEach(([l,c],h)=>{e.fillStyle="#aab4c3",e.font="500 24px sans-serif",e.fillText(l,56,210+h*70),e.fillStyle="#fff",e.font="800 40px sans-serif",e.fillText(c,260,214+h*70)}),e.fillStyle="#cfd6df",e.font="500 20px sans-serif",e.fillText(`${te.place} \xB7 ${te.tagline}`,56,590);let o=t.toDataURL("image/png");bt("cardImg").src=o,bt("cardDl").href=o,bt("cardModal").hidden=!1,bt("submitRow").hidden=!Kc||Bc,bt("submitMsg").textContent=""}}var Pr=new Ka,bo=new st;function $y(i){let t=i.ray.origin,e=i.ray.direction,n=0;for(let s=0;s<5e3;s+=3){let r=t.x+e.x*s,a=t.y+e.y*s,o=t.z+e.z*s;if(a<=po(r,o)){let l=n,c=s;for(let h=0;h<10;h++){let u=(l+c)/2;t.y+e.y*u<=po(t.x+e.x*u,t.z+e.z*u)?c=u:l=u}return{point:new C(t.x+e.x*c,t.y+e.y*c,t.z+e.z*c),distance:c}}n=s}return null}function Io(i,t,e){bo.set(i/innerWidth*2-1,-(t/innerHeight)*2+1),Pr.setFromCamera(bo,de);let n=$y(Pr);if(e)return n;let r=Pr.intersectObjects([...Ro.children,Qt.mesh,an.mesh],!1)[0];return r&&(!n||r.distance<n.distance)?{point:r.point.clone(),distance:r.distance}:n}function Fc(i){Uc(Pn),Pn==="bomb"?Uy(i):Pn==="bat"?Oy(i):Pn==="laser"?tf(i):Pn==="meteor"?zy(i):Pn==="quake"?Hy(i):Pn==="nuke"&&Gy(i)}var Is=new Map,Cn=null;ni.addEventListener("pointerdown",i=>{if(Is.set(i.pointerId,i),Is.size>1){le.drawing&&Jc(),Cn=null;return}if(Cn={x:i.clientX,y:i.clientY,t:performance.now(),btn:i.button},Pn==="laser"&&i.button===0&&!le.active){let t=Io(i.clientX,i.clientY,!0);if(t){le.drawing=!0,Ze.enabled=!1,le.path=[t.point];let e=new xe().setFromPoints([t.point,t.point]);le.line=new rr(e,new xr({color:"#21d07a",dashSize:6,gapSize:4,depthTest:!1})),le.line.renderOrder=9,ie.add(le.line)}}},{capture:!0});ni.addEventListener("pointermove",i=>{if(Is.has(i.pointerId)&&Is.set(i.pointerId,i),!le.drawing)return;let t=Io(i.clientX,i.clientY,!0);if(!t)return;let e=le.path[le.path.length-1];t.point.distanceTo(e)>3&&(le.path.push(t.point),le.line.geometry.dispose(),le.line.geometry=new xe().setFromPoints(le.path.map(n=>n.clone().setY(n.y+1.5))),le.line.computeLineDistances())});function Jc(){le.drawing=!1,Ze.enabled=!0,le.line&&(ie.remove(le.line),le.line.geometry.dispose(),le.line=null)}function Zy(i){if(Is.delete(i.pointerId),le.drawing){let s=le.path;Jc();let r=0;for(let a=1;a<s.length;a++)r+=s[a].distanceTo(s[a-1]);r<8?(Uc("laser"),tf(s[0])):(Uc("laser"),ky(s)),Cn=null;return}if(!Cn||Cn.btn!==0){Cn=null;return}let t=Math.hypot(i.clientX-Cn.x,i.clientY-Cn.y),e=performance.now()-Cn.t;if(Cn=null,t>8||e>600)return;let n=Io(i.clientX,i.clientY);n&&Fc(n.point)}ni.addEventListener("pointerup",Zy);ni.addEventListener("pointercancel",i=>{Is.delete(i.pointerId),le.drawing&&Jc(),Cn=null});addEventListener("keydown",i=>{if(i.target.tagName==="INPUT")return;let t=+i.key;t>=1&&t<=Nr.length&&So(Nr[t-1].id),(i.key==="n"||i.key==="N")&&Zc(!To),(i.key==="l"||i.key==="L")&&bt("labelBtn").click(),(i.key==="m"||i.key==="M")&&sf(),i.key==="Escape"&&(bt("cardModal").hidden=!0,bt("rankModal").hidden=!0)});function sf(){ne.muted=!ne.muted,bt("muteBtn").classList.toggle("on",ne.muted),bt("muteBtn").textContent=ne.muted?yt("btn.soundOff"):yt("btn.sound")}addEventListener("resize",()=>{de.aspect=innerWidth/innerHeight,de.updateProjectionMatrix(),Ee.setSize(innerWidth,innerHeight),typeof Or=="function"&&kn>Ds()&&Or(Ds())});var Kc=!!(te.supabaseUrl&&te.supabaseKey);async function rf(i,t){let e=new AbortController,n=setTimeout(()=>e.abort(),9e3);try{let s=await fetch(`${te.supabaseUrl}/rest/v1/rpc/${i}`,{method:"POST",signal:e.signal,headers:{apikey:te.supabaseKey,"Content-Type":"application/json"},body:JSON.stringify(t||{})});if(!s.ok)throw new Error(`${s.status}`);return s.json()}finally{clearTimeout(n)}}var Ed=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Bc=!1;async function af(i){let t=bt("rankList");if(!Kc){t.innerHTML=`<p class="muted">${yt("rank.off")}</p>`;return}t.innerHTML=`<p class="muted">${yt("rank.loading")}</p>`;try{let e=await rf("smash_top",{p_company:te.code,p_limit:20});t.innerHTML=e.length?`<ol>${e.map((n,s)=>`<li class="${n.nick===i?"me":""}"><span class="no">${s+1}</span><b>${Ed(n.nick)}</b><span class="rk">${Ed(n.rank_name||"")}</span><span class="sc">${Ls(n.score)}</span></li>`).join("")}</ol>`:`<p class="muted">${yt("rank.empty")}</p>`}catch{t.innerHTML=`<p class="muted">${yt("rank.fail")}</p>`}}async function Jy(){if(!Kc||Bc)return;let i=(bt("nick").value||"").trim()||yt("rank.anon");try{localStorage.setItem("smash-nick",i)}catch{}bt("submitBtn").disabled=!0,bt("submitMsg").textContent=yt("rank.sending");try{let t=await rf("smash_submit",{p_company:te.code,p_nick:i,p_score:Math.round(Us),p_collapsed:Po,p_rank:Bn[yo][0]});t.ok?(Bc=!0,bt("submitMsg").textContent=yt("rank.done",te.company,t.position),af(i.slice(0,12))):(bt("submitMsg").textContent=t.reason==="too_fast"?yt("rank.fast"):yt("rank.err"),bt("submitBtn").disabled=!1)}catch{bt("submitMsg").textContent=yt("rank.err"),bt("submitBtn").disabled=!1}}function Ky(){bt("rankModal").hidden=!1,bt("rankTitle").textContent=yt("rank.title",te.company),af()}var lo=!0,jy=yn.filter(i=>i.site&&i.name).map(i=>{let t=document.createElement("div");return t.className="blabel",t.textContent=i.name,t.style.display="none",bt("labels").appendChild(t),{b:i,el:t,on:!1}}),Gi=new C,wc=new Set;function Qy(){let i=de.position.distanceTo(Ze.target)>Lc*3.2+900;wc.clear();let t=innerWidth,e=innerHeight,n=[];for(let r of jy){let a=r.b,o=lo&&!i&&!a.gone&&!a.collapsed;o&&(Gi.set(a.cx,a.h*(a.vox?Math.max(.15,a.alive/a.vol):1)+4+(a.sign?a.signH:0),a.cz).project(de),o=Gi.z<1&&Math.abs(Gi.x)<1.05&&Math.abs(Gi.y)<1.05,o&&n.push([r,(Gi.x*.5+.5)*t,(-Gi.y*.5+.5)*e,Gi.z])),!o&&r.on&&(r.el.style.display="none",r.on=!1)}n.sort((r,a)=>r[3]-a[3]);let s=Ne?de.position.distanceTo(Ze.target)>Lc*1.2+250?10:22:60;if(n.length>s){n.sort((r,a)=>Math.hypot(r[1]-t/2,r[2]-e/2)-Math.hypot(a[1]-t/2,a[2]-e/2));for(let r of n.splice(s))r[0].on&&(r[0].el.style.display="none",r[0].on=!1)}for(let[r,a,o]of n){let l=`${Math.round(a/84)},${Math.round(o/20)}`;if(wc.has(l)){r.on&&(r.el.style.display="none",r.on=!1);continue}wc.add(l),r.on||(r.el.style.display="",r.on=!0),r.el.style.transform=`translate(${a|0}px,${o|0}px) translate(-50%,-100%)`}}function tv(i){if(!i)return null;if(i.object===Qt.mesh){let a=Qt.owner[i.instanceId];return a>=0?yn[a]:null}let t=i.object.userData.owners;if(!t)return null;let e=i.faceIndex*3,n=0,s=t.length-1,r=-1;for(;n<=s;){let a=n+s>>1;t[a][0]<=e?(r=a,n=a+1):s=a-1}return r>=0?yn[t[r][1]]:null}var wd=0;ni.addEventListener("pointermove",i=>{if(i.pointerType!=="mouse"||i.buttons||le.drawing){bt("hover").hidden=!0;return}let t=performance.now();if(t-wd<90)return;wd=t,bo.set(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),Pr.setFromCamera(bo,de);let e=tv(Pr.intersectObjects([...Ro.children,Qt.mesh],!1)[0]),n=bt("hover");if(!e||e.gone){n.hidden=!0;return}let s=e.vox?Math.round(e.alive/e.vol*100):100;n.innerHTML=`<b>${e.name||(e.site?te.company:yt("hover")[0])}</b><span>${e.site?te.company+" \xB7 ":""}${yt("hover.1",Math.round(e.h),s)}</span>`,n.style.transform=`translate(${i.clientX+14}px,${i.clientY+14}px)`,n.hidden=!1});ni.addEventListener("pointerleave",()=>bt("hover").hidden=!0);var Td=performance.now(),Tc=0,Ac=0,Ad=.5,Ds=()=>Math.min(devicePixelRatio,ei[In].dprMax,Math.sqrt(ei[In].px/(innerWidth*innerHeight))),kn=Ds(),ro=0,Rc=0,Cc=0;Ee.setPixelRatio(kn);function Or(i){i=Math.round(i*20)/20,i!==kn&&(kn=i,Ee.setPixelRatio(kn),Ee.setSize(innerWidth,innerHeight))}function ev(i){if(ro+=i,Rc++,ro<.75)return;let t=ro/Rc*1e3;ro=0,Rc=0,t>21?kn>Ad+.01?Or(Math.max(Ad,kn*.85)):++Cc>=3&&In>0&&(of(In-1,!0),Cc=0):(Cc=0,t<12.5&&kn<Ds()&&Or(Math.min(Ds(),kn+.1)))}function of(i,t){In=i;try{localStorage.setItem("smash-q",i)}catch{}let e=ei[i],n=e.shadow>0;Se.castShadow!==n&&(Se.castShadow=n,Dn.traverse(r=>{r.material&&[].concat(r.material).forEach(a=>a.needsUpdate=!0)})),n&&Se.shadow.mapSize.x!==e.shadow&&(Se.shadow.mapSize.set(e.shadow,e.shadow),Se.shadow.map&&(Se.shadow.map.dispose(),Se.shadow.map=null)),Ee.shadowMap.needsUpdate=!0,Lo=e.fxk,Or(Ds());let s=document.getElementById("qBtn");s&&(s.textContent=yt("quality",e.name)),t&&Fs(yt("qDown",e.name),2200)}var co=[],ho=[];function lf(i){let t=performance.now(),e=(i-Td)/1e3,n=Math.min(.05,e);Td=i,!document.hidden&&e<.5&&ev(e),Ar>0?(Ar-=n,Ec=Ar>1.2?.25:.25+(1.2-Ar)/1.2*.75):Ec=1;let s=n*Ec;ti+=s,de.position.sub(bc),Ze.update(),bc.set(z(-1,1),z(-1,1),z(-1,1)).multiplyScalar(Fn),de.position.add(bc),Fn*=Math.exp(-n*4.5),Fn<.02&&(Fn=0);for(let d=0;d<Oe.length;d++){let f=Oe[d];f.t+=s/f.dur,f.up(Math.min(1,f.t)),f.t>=1&&(Oe.splice(d,1),d--,f.done())}if(Ce){Ce.t+=s;let d=Math.max(0,1-Ce.t/Ce.dur),f=Ce.A*d*(Ce.t<.3?Ce.t/.3:1);ie.position.set(z(-1,1)*Math.min(2.5,f*.3),0,z(-1,1)*Math.min(2.5,f*.3)),Tr.uQC.value.set(Ce.P.x,Ce.P.z),Tr.uQT.value=Ce.t,Tr.uQA.value=Ce.M>=7.5?f:0,$i.sway(Ce.t,f),Fn=Math.max(Fn,f*.25),Ce.t>=Ce.dur&&(Nd(Ce.P.x,Ce.P.z,400),Ce=null,ie.position.set(0,0,0),Tr.uQA.value=0,$i.sway(0,0))}se.update(s),Si.update(s),Qe.update(s);let r=0;for(let d of yn)d.dirty&&r<4&&ti-(d.lastCheck||0)>.15&&(d.lastCheck=ti,Py(d),r++);Ic.length&&Ly(Ic.shift()),Qt.flush(),an.flush(),yy(s),ti-qc>1.3&&(Mi=Math.max(0,Mi-s*(50+Mi*.14))),oo>0&&ti-Md>.18&&(bi(Dc.clone().setY(Dc.y+6),`+${Ls(Math.round(oo))}`,"#ffe9a8"),oo=0,Md=ti);for(let d=0;d<Ps.length;d++){let f=Ps[d];if(f.t+=n,f.t>1.6){f.el.remove(),Ps.splice(d,1),d--;continue}let g=f.pos.clone();if(g.y+=f.t*14,g.project(de),!(g.z<=1&&Math.abs(g.x)<=1.1&&Math.abs(g.y)<=1.1)){f.el.style.opacity=0;continue}f.el.style.transform=`translate(${(g.x*.5+.5)*innerWidth}px, ${(-g.y*.5+.5)*innerHeight}px) translate(-50%,-50%) scale(${f.t<.12?.6+f.t*3.4:1})`,f.el.style.opacity=f.t>1.1?(1.6-f.t)/.5:1}let a=Ze.target,o=Math.round(a.x/20)*20,l=Math.round(a.z/20)*20;(se.n>0||Oe.length>0||Ce||Qt.hi>=0||an.hi>=0||o!==Se.target.position.x||l!==Se.target.position.z)&&(Ac=(Ac+1)%(Ne?2:1),Ac||(Ee.shadowMap.needsUpdate=!0)),Se.target.position.set(o,0,l),Se.position.copy(Se.target.position).addScaledVector(ay,900);let h=Ee.getDrawingBufferSize(new st).y/(2*Math.tan(Es.degToRad(de.fov/2)));Si.mat.uniforms.uScale.value=h,Qe.mat.uniforms.uScale.value=h,Rd.position.copy(de.position),Tc+=n,Tc>.1&&(Tc=0,nf()),Qy();let u=performance.now();iy||Ee.render(Dn,de),co.push(u-t),ho.push(performance.now()-u),ho.length>600&&ho.shift(),co.length>600&&co.shift(),requestAnimationFrame(lf)}["score","rank","bar","mult","rate","cnt","depth"].forEach(i=>gn[i]=bt(`h-${i}`));nf();document.title=`${yt("smash",te.company)} | ${te.series}`;bt("title").textContent=yt("smash",te.company);bt("series").textContent=te.series;bt("startTitle").textContent=yt("smash",te.company);bt("startSeries").textContent=te.series;bt("startTag").textContent=te.tagline;bt("credit").textContent=yt("credit",te.place,te.company,Gd);Xy();bt("nightBtn").onclick=()=>Zc(!To);bt("menuBtn").onclick=()=>bt("bottom").classList.toggle("open");bt("labelBtn").onclick=()=>{lo=!lo,bt("labelBtn").classList.toggle("on",lo)};bt("qBtn").textContent=yt("quality",ei[In].name);document.documentElement.lang=Lr;document.querySelectorAll("[data-t]").forEach(i=>{let t=yt(i.dataset.t);typeof t=="string"&&(i[i.dataset.attr||"innerHTML"]=t)});bt("qBtn").onclick=()=>of((In+1)%ei.length);bt("hubBtn").href=te.hub||"../";kc&&setTimeout(()=>Fs(yt("noGpu"),6e3),1500);bt("muteBtn").onclick=sf;bt("resetBtn").onclick=()=>location.reload();bt("cardBtn").onclick=Yy;bt("cardClose").onclick=()=>bt("cardModal").hidden=!0;bt("rankBtn").onclick=Ky;bt("rankClose").onclick=()=>bt("rankModal").hidden=!0;bt("submitBtn").onclick=Jy;try{bt("nick").value=localStorage.getItem("smash-nick")||""}catch{}bt("rankAll").href=(te.hub||"../")+"#rank";["pointerdown","touchend","keydown"].forEach(i=>addEventListener(i,()=>{bt("start").classList.contains("gone")&&ne.init()},{capture:!0,passive:!0}));document.addEventListener("visibilitychange",()=>{!document.hidden&&ne.ctx&&ne.ctx.state!=="running"&&ne.ctx.resume()});bt("startBtn").onclick=()=>{ne.init(),bt("start").classList.add("gone"),setTimeout(()=>Fs(yt("hint"),3500),400)};window.__sfxState=()=>ne.ctx&&ne.ctx.state;window.__smash={screenOf:(i,t,e)=>{let n=new C(i,t,e).project(de);return{x:(n.x*.5+.5)*innerWidth,y:(-n.y*.5+.5)*innerHeight}},dpr:()=>kn,perfLog:co,renderLog:ho,info:()=>({calls:Ee.info.render.calls,tris:Ee.info.render.triangles,progs:Ee.info.programs.length}),simTime:()=>ti,actV:(i,t)=>{let e=new C(...t);i==="quake"&&(Mo=9),Fc(e)},buildings:yn,blocks:Qt,debris:se,rubbleL:an,act:Fc,pickAt:Io,selectTool:So,setNight:Zc,state:()=>({score:Us,style:Mi,destroyedSite:kr,collapsedSite:Po,deepest:Rs,debris:se.n,blocks:Qt.live,rubble:an.live,fx:Oe.length})};function nv(){let i=new C(0,-500,0);Xc(i.x,i.y,i.z,1,.01),xo(i.x,i.y,i.z,1,.01),Si.spawn(0,-500,0,0,0,0,1,.01,[1,1,1],[1,1,1]),Qe.spawn(0,-500,0,0,0,0,1,.01,[1,1,1],[1,1,1]);let t=[new kt(new De(1,1,1),new ve({map:jd})),new kt(new De(1,1,1),new ve({color:"#30353b",metalness:.5,roughness:.4})),new kt(new De(1,1,1),new fn({color:"#ffb36b"})),new rr(new xe().setFromPoints([i,i]),new xr({color:"#21d07a",dashSize:6,gapSize:4,depthTest:!1}))];t.push(ef()),t.forEach(e=>{e.position.copy(i),ie.add(e)}),vi.visible=!0,se.mesh.count=1,an.mesh.count=Math.max(1,an.mesh.count),Qt.mesh.count=Math.max(1,Qt.mesh.count),Ee.compile(Dn,de),vi.visible=!1,se.mesh.count=0,t.forEach(e=>{ie.remove(e),e.traverse(n=>n.geometry&&n.geometry.dispose())})}nv();requestAnimationFrame(lf);})();
