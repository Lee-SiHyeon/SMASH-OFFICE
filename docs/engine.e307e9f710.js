(()=>{var gc="160",zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Md=0,oh=1,bd=2;var no=1,Sd=2,$n=3,mi=0,Ge=1,An=2;var ui=0,fi=1,Oi=2,lh=3,ch=4,Ed=5,Li=100,wd=101,Td=102,hh=103,uh=104,Ad=200,Rd=201,Cd=202,Pd=203,bl=204,Sl=205,Ld=206,Id=207,Dd=208,Ud=209,Nd=210,Od=211,Fd=212,Bd=213,kd=214,zd=0,Hd=1,Vd=2,Sa=3,Gd=4,Wd=5,Xd=6,qd=7,Gu=0,Yd=1,$d=2,di=0,Zd=1,Jd=2,Kd=3,_c=4,jd=5,Qd=6;var Wu=300,xs=301,vs=302,El=303,wl=304,io=306,Tl=1e3,rn=1001,Al=1002,Ze=1003,fh=1004;var Ho=1005;var fn=1006,tp=1007;var rr=1008;var pi=1009,ep=1010,np=1011,yc=1012,Xu=1013,ci=1014,hi=1015,ar=1016,qu=1017,Yu=1018,Di=1020,ip=1021,Rn=1023,sp=1024,rp=1025,Ui=1026,Ms=1027,ap=1028,$u=1029,op=1030,Zu=1031,Ju=1033,Vo=33776,Go=33777,Wo=33778,Xo=33779,dh=35840,ph=35841,mh=35842,gh=35843,Ku=36196,_h=37492,yh=37496,xh=37808,vh=37809,Mh=37810,bh=37811,Sh=37812,Eh=37813,wh=37814,Th=37815,Ah=37816,Rh=37817,Ch=37818,Ph=37819,Lh=37820,Ih=37821,qo=36492,Dh=36494,Uh=36495,lp=36283,Nh=36284,Oh=36285,Fh=36286;var Ea=2300,wa=2301,Yo=2302,Bh=2400,kh=2401,zh=2402;var ju=3e3,Ni=3001,cp=3200,hp=3201,Qu=0,up=1,dn="",de="srgb",Jn="srgb-linear",xc="display-p3",so="display-p3-linear",Ta="linear",fe="srgb",Aa="rec709",Ra="p3";var Zi=7680;var Hh=519,fp=512,dp=513,pp=514,tf=515,mp=516,gp=517,_p=518,yp=519,Vh=35044,Ne=35048;var Gh="300 es",Rl=1035,Zn=2e3,Ca=2001,Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wh=1234567,js=Math.PI/180,or=180/Math.PI;function Vi(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function Te(n,t,e){return Math.max(t,Math.min(e,n))}function vc(n,t){return(n%t+t)%t}function xp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function vp(n,t,e){return n!==t?(e-n)/(t-n):0}function Qs(n,t,e){return(1-e)*n+e*t}function Mp(n,t,e,i){return Qs(n,t,1-Math.exp(-e*i))}function bp(n,t=1){return t-Math.abs(vc(n,t*2)-t)}function Sp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ep(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function wp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Tp(n,t){return n+Math.random()*(t-n)}function Ap(n){return n*(.5-Math.random())}function Rp(n){n!==void 0&&(Wh=n);let t=Wh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cp(n){return n*js}function Pp(n){return n*or}function Cl(n){return(n&n-1)===0&&n!==0}function Lp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Pa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ip(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),f=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ye(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ws={DEG2RAD:js,RAD2DEG:or,generateUUID:Vi,clamp:Te,euclideanModulo:vc,mapLinear:xp,inverseLerp:vp,lerp:Qs,damp:Mp,pingpong:bp,smoothstep:Sp,smootherstep:Ep,randInt:wp,randFloat:Tp,randFloatSpread:Ap,seededRandom:Rp,degToRad:Cp,radToDeg:Pp,isPowerOfTwo:Cl,ceilPowerOfTwo:Lp,floorPowerOfTwo:Pa,setQuaternionFromProperEuler:Ip,normalize:Ye,denormalize:fs},st=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class n{constructor(t,e,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],x=s[1],y=s[4],S=s[7],A=s[2],v=s[5],R=s[8];return r[0]=a*_+o*x+l*A,r[3]=a*m+o*y+l*v,r[6]=a*d+o*S+l*R,r[1]=c*_+h*x+u*A,r[4]=c*m+h*y+u*v,r[7]=c*d+h*S+u*R,r[2]=f*_+p*x+g*A,r[5]=f*m+p*y+g*v,r[8]=f*d+p*S+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(o*i-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply($o.makeScale(t,e)),this}rotate(t){return this.premultiply($o.makeRotation(-t)),this}translate(t,e){return this.premultiply($o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$o=new Zt;function ef(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function La(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dp(){let n=La("canvas");return n.style.display="block",n}var Xh={};function tr(n){n in Xh||(Xh[n]=!0,console.warn(n))}var qh=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yh=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[Jn]:{transfer:Ta,primaries:Aa,toReference:n=>n,fromReference:n=>n},[de]:{transfer:fe,primaries:Aa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[so]:{transfer:Ta,primaries:Ra,toReference:n=>n.applyMatrix3(Yh),fromReference:n=>n.applyMatrix3(qh)},[xc]:{transfer:fe,primaries:Ra,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Yh),fromReference:n=>n.applyMatrix3(qh).convertLinearToSRGB()}},Up=new Set([Jn,so]),ae={enabled:!0,_workingColorSpace:Jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Up.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=Yr[t].toReference,s=Yr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Yr[n].primaries},getTransfer:function(n){return n===dn?Ta:Yr[n].transfer}};function _s(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ji,Ia=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=La("canvas")),Ji.width=t.width,Ji.height=t.height;let i=Ji.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=La("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_s(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_s(e[i]/255)*255):e[i]=_s(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Np=0,Da=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Vi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jo(s[a].image)):r.push(Jo(s[a]))}else r=Jo(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ia.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Op=0,pn=class n extends Fn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=rn,s=rn,r=fn,a=rr,o=Rn,l=pi,c=n.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Vi(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ni?de:dn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tl:t.x=t.x-Math.floor(t.x);break;case rn:t.x=t.x<0?0:1;break;case Al:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tl:t.y=t.y-Math.floor(t.y);break;case rn:t.y=t.y<0?0:1;break;case Al:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===de?Ni:ju}set encoding(t){tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ni?de:dn}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Wu;pn.DEFAULT_ANISOTROPY=1;var me=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,S=(p+1)/2,A=(d+1)/2,v=(h+f)/4,R=(u+_)/4,U=(g+m)/4;return y>S&&y>A?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=v/i,r=R/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=v/s,r=U/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=R/r,s=U/r),this.set(i,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pl=class extends Fn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ni?de:dn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends Pl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ua=class extends pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ll=class extends pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var We=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-o,d=l*f+c*p+h*g+u*_,x=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let A=Math.sqrt(y),v=Math.atan2(A,d*x);m=Math.sin(m*v)/A,o=Math.sin(o*v)/A}let S=o*x;if(l=l*m+f*S,c=c*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($h.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ko.copy(this).projectOnVector(t),this.sub(Ko)}reflect(t){return this.sub(Ko.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ko=new C,$h=new We,jn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),Zr.subVectors(this.max,Xs),Ki.subVectors(t.a,Xs),ji.subVectors(t.b,Xs),Qi.subVectors(t.c,Xs),si.subVectors(ji,Ki),ri.subVectors(Qi,ji),Ti.subVectors(Ki,Qi);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ti.z,Ti.y,si.z,0,-si.x,ri.z,0,-ri.x,Ti.z,0,-Ti.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ti.y,Ti.x,0];return!jo(e,Ki,ji,Qi,Zr)||(e=[1,0,0,0,1,0,0,0,1],!jo(e,Ki,ji,Qi,Zr))?!1:(Jr.crossVectors(si,ri),e=[Jr.x,Jr.y,Jr.z],jo(e,Ki,ji,Qi,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Gn=[new C,new C,new C,new C,new C,new C,new C,new C],Sn=new C,$r=new jn,Ki=new C,ji=new C,Qi=new C,si=new C,ri=new C,Ti=new C,Xs=new C,Zr=new C,Jr=new C,Ai=new C;function jo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ai.fromArray(n,r);let o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),h=i.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Fp=new jn,qs=new C,Qo=new C,an=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Fp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);let e=qs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(qs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(Qo)),this.expandByPoint(qs.copy(t.center).sub(Qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new C,tl=new C,Kr=new C,ai=new C,el=new C,jr=new C,nl=new C,gi=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){tl.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(tl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Kr),o=ai.dot(this.direction),l=-ai.dot(Kr),c=ai.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(tl).addScaledVector(Kr,f),p}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);let i=Wn.dot(this.direction),s=Wn.dot(Wn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,i,s,r){el.subVectors(e,t),jr.subVectors(i,t),nl.crossVectors(el,jr);let a=this.direction.dot(nl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,t);let l=o*this.direction.dot(jr.crossVectors(ai,jr));if(l<0)return null;let c=o*this.direction.dot(el.cross(ai));if(c<0||l+c>a)return null;let h=-o*ai.dot(nl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class n{constructor(t,e,i,s,r,a,o,l,c,h,u,f,p,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,f,p,g,_,m)}set(t,e,i,s,r,a,o,l,c,h,u,f,p,g,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bp,t,kp)}lookAt(t,e,i){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),oi.crossVectors(i,nn),oi.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),oi.crossVectors(i,nn)),oi.normalize(),Qr.crossVectors(nn,oi),s[0]=oi.x,s[4]=Qr.x,s[8]=nn.x,s[1]=oi.y,s[5]=Qr.y,s[9]=nn.y,s[2]=oi.z,s[6]=Qr.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],x=i[3],y=i[7],S=i[11],A=i[15],v=s[0],R=s[4],U=s[8],b=s[12],E=s[1],N=s[5],G=s[9],X=s[13],L=s[2],O=s[6],z=s[10],K=s[14],J=s[3],Y=s[7],nt=s[11],rt=s[15];return r[0]=a*v+o*E+l*L+c*J,r[4]=a*R+o*N+l*O+c*Y,r[8]=a*U+o*G+l*z+c*nt,r[12]=a*b+o*X+l*K+c*rt,r[1]=h*v+u*E+f*L+p*J,r[5]=h*R+u*N+f*O+p*Y,r[9]=h*U+u*G+f*z+p*nt,r[13]=h*b+u*X+f*K+p*rt,r[2]=g*v+_*E+m*L+d*J,r[6]=g*R+_*N+m*O+d*Y,r[10]=g*U+_*G+m*z+d*nt,r[14]=g*b+_*X+m*K+d*rt,r[3]=x*v+y*E+S*L+A*J,r[7]=x*R+y*N+S*O+A*Y,r[11]=x*U+y*G+S*z+A*nt,r[15]=x*b+y*X+S*K+A*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*p-i*l*p)+_*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-i*a*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],x=u*m*c-_*f*c+_*l*p-o*m*p-u*l*d+o*f*d,y=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,S=h*_*c-g*u*c+g*o*p-a*_*p-h*o*d+a*u*d,A=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,v=e*x+i*y+s*S+r*A;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/v;return t[0]=x*R,t[1]=(_*f*r-u*m*r-_*s*p+i*m*p+u*s*d-i*f*d)*R,t[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*d+i*l*d)*R,t[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*p-i*l*p)*R,t[4]=y*R,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*R,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*R,t[8]=S*R,t[9]=(g*u*r-h*_*r-g*i*p+e*_*p+h*i*d-e*u*d)*R,t[10]=(a*_*r-g*o*r+g*i*c-e*_*c-a*i*d+e*o*d)*R,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*p-e*o*p)*R,t[12]=A*R,t[13]=(h*_*s-g*u*s+g*i*f-e*_*f-h*i*m+e*u*m)*R,t[14]=(g*o*s-a*_*s-g*i*l+e*_*l+a*i*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*i*l-e*u*l-a*i*f+e*o*f)*R,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,_=a*h,m=a*u,d=o*u,x=l*c,y=l*h,S=l*u,A=i.x,v=i.y,R=i.z;return s[0]=(1-(_+d))*A,s[1]=(p+S)*A,s[2]=(g-y)*A,s[3]=0,s[4]=(p-S)*v,s[5]=(1-(f+d))*v,s[6]=(m+x)*v,s[7]=0,s[8]=(g+y)*R,s[9]=(m-x)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=ts.set(s[0],s[1],s[2]).length(),a=ts.set(s[4],s[5],s[6]).length(),o=ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);let c=1/r,h=1/a,u=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Zn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),p,g;if(o===Zn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ca)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Zn){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(a-r),f=(e+t)*c,p=(i+s)*h,g,_;if(o===Zn)g=(a+r)*u,_=-2*u;else if(o===Ca)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ts=new C,En=new oe,Bp=new C(0,0,0),kp=new C(1,1,1),oi=new C,Qr=new C,nn=new C,Zh=new oe,Jh=new We,Na=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Na.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zp=0,Kh=new C,es=new We,Xn=new oe,ta=new C,Ys=new C,Hp=new C,Vp=new We,jh=new C(1,0,0),Qh=new C(0,1,0),tu=new C(0,0,1),Gp={type:"added"},Wp={type:"removed"},Ue=class n extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new C,e=new Na,i=new We,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Zt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(jh,t)}rotateY(t){return this.rotateOnAxis(Qh,t)}rotateZ(t){return this.rotateOnAxis(tu,t)}translateOnAxis(t,e){return Kh.copy(t).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jh,t)}translateY(t){return this.translateOnAxis(Qh,t)}translateZ(t){return this.translateOnAxis(tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ta.copy(t):ta.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ys,ta,this.up):Xn.lookAt(ta,Ys,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Xn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Gp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,Hp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Vp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ue.DEFAULT_UP=new C(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new C,qn=new C,il=new C,Yn=new C,ns=new C,is=new C,eu=new C,sl=new C,rl=new C,al=new C,ea=!1,ds=class n{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){wn.subVectors(s,e),qn.subVectors(i,e),il.subVectors(t,e);let a=wn.dot(wn),o=wn.dot(qn),l=wn.dot(il),c=qn.dot(qn),h=qn.dot(il),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(t,e,i,s,r,a,o,l){return ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ea=!0),this.getInterpolation(t,e,i,s,r,a,o,l)}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static isFrontFacing(t,e,i,s){return wn.subVectors(i,e),qn.subVectors(t,e),wn.cross(qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),wn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ea=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ns.subVectors(s,i),is.subVectors(r,i),sl.subVectors(t,i);let l=ns.dot(sl),c=is.dot(sl);if(l<=0&&c<=0)return e.copy(i);rl.subVectors(t,s);let h=ns.dot(rl),u=is.dot(rl);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ns,a);al.subVectors(t,r);let p=ns.dot(al),g=is.dot(al);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(is,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return eu.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(eu,o);let d=1/(m+_+f);return a=_*d,o=f*d,e.copy(i).addScaledVector(ns,a).addScaledVector(is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},na={h:0,s:0,l:0};function ol(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ut=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=vc(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ol(a,r,t+1/3),this.g=ol(a,r,t),this.b=ol(a,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=de){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){let i=nf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}copyLinearToSRGB(t){return this.r=Zo(t.r),this.g=Zo(t.g),this.b=Zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return ae.fromWorkingColorSpace(He.copy(this),t),Math.round(Te(He.r*255,0,255))*65536+Math.round(Te(He.g*255,0,255))*256+Math.round(Te(He.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(He.copy(this),e);let i=He.r,s=He.g,r=He.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=de){ae.fromWorkingColorSpace(He.copy(this),t);let e=He.r,i=He.g,s=He.b;return t!==de?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(na);let i=Qs(li.h,na.h,e),s=Qs(li.s,na.s,e),r=Qs(li.l,na.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Ut;Ut.NAMES=nf;var Xp=0,Qn=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=fi,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Sl,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bl&&(i.blendSrc=this.blendSrc),this.blendDst!==Sl&&(i.blendDst=this.blendDst),this.blendEquation!==Li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},mn=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new C,ia=new st,ue=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),s=Ye(s,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vh&&(t.usage=this.usage),t}};var Oa=class extends ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Fa=class extends ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var jt=class extends ue{constructor(t,e,i){super(new Float32Array(t),e,i)}};var qp=0,un=new oe,ll=new Ue,ss=new C,sn=new jn,$s=new jn,Ie=new C,ge=class n extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ef(t)?Fa:Oa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,i){return un.makeTranslation(t,e,i),this.applyMatrix4(un),this}scale(t,e,i){return un.makeScale(t,e,i),this.applyMatrix4(un),this}lookAt(t){return ll.lookAt(t),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(sn.min,$s.min),sn.expandByPoint(Ie),Ie.addVectors(sn.max,$s.max),sn.expandByPoint(Ie)):(sn.expandByPoint($s.min),sn.expandByPoint($s.max))}sn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(t,c),Ie.add(ss)),s=Math.max(s,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<o;E++)c[E]=new C,h[E]=new C;let u=new C,f=new C,p=new C,g=new st,_=new st,m=new st,d=new C,x=new C;function y(E,N,G){u.fromArray(s,E*3),f.fromArray(s,N*3),p.fromArray(s,G*3),g.fromArray(a,E*2),_.fromArray(a,N*2),m.fromArray(a,G*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);let X=1/(_.x*m.y-m.x*_.y);isFinite(X)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(X),x.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(X),c[E].add(d),c[N].add(d),c[G].add(d),h[E].add(x),h[N].add(x),h[G].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let E=0,N=S.length;E<N;++E){let G=S[E],X=G.start,L=G.count;for(let O=X,z=X+L;O<z;O+=3)y(i[O+0],i[O+1],i[O+2])}let A=new C,v=new C,R=new C,U=new C;function b(E){R.fromArray(r,E*3),U.copy(R);let N=c[E];A.copy(N),A.sub(R.multiplyScalar(R.dot(N))).normalize(),v.crossVectors(U,N);let X=v.dot(h[E])<0?-1:1;l[E*4]=A.x,l[E*4+1]=A.y,l[E*4+2]=A.z,l[E*4+3]=X}for(let E=0,N=S.length;E<N;++E){let G=S[E],X=G.start,L=G.count;for(let O=X,z=X+L;O<z;O+=3)b(i[O+0]),b(i[O+1]),b(i[O+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new ue(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nu=new oe,Ri=new gi,sa=new an,iu=new C,rs=new C,as=new C,os=new C,cl=new C,ra=new C,aa=new st,oa=new st,la=new st,su=new C,ru=new C,au=new C,ca=new C,ha=new C,kt=class extends Ue{constructor(t=new ge,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(cl.fromBufferAttribute(u,t),a?ra.addScaledVector(cl,h):ra.addScaledVector(cl.sub(e),h))}e.add(ra)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(sa.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(sa,iu)===null||Ri.origin.distanceToSquared(iu)>(t.far-t.near)**2))&&(nu.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(nu),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=a[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,A=y;S<A;S+=3){let v=o.getX(S),R=o.getX(S+1),U=o.getX(S+2);s=ua(this,d,t,i,c,h,u,v,R,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let x=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);s=ua(this,a,t,i,c,h,u,x,y,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=a[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,A=y;S<A;S+=3){let v=S,R=S+1,U=S+2;s=ua(this,d,t,i,c,h,u,v,R,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let x=m,y=m+1,S=m+2;s=ua(this,a,t,i,c,h,u,x,y,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Yp(n,t,e,i,s,r,a,o){let l;if(t.side===Ge?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===mi,o),l===null)return null;ha.copy(o),ha.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ha);return c<e.near||c>e.far?null:{distance:c,point:ha.clone(),object:n}}function ua(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,rs),n.getVertexPosition(l,as),n.getVertexPosition(c,os);let h=Yp(n,t,e,i,rs,as,os,ca);if(h){s&&(aa.fromBufferAttribute(s,o),oa.fromBufferAttribute(s,l),la.fromBufferAttribute(s,c),h.uv=ds.getInterpolation(ca,rs,as,os,aa,oa,la,new st)),r&&(aa.fromBufferAttribute(r,o),oa.fromBufferAttribute(r,l),la.fromBufferAttribute(r,c),h.uv1=ds.getInterpolation(ca,rs,as,os,aa,oa,la,new st),h.uv2=h.uv1),a&&(su.fromBufferAttribute(a,o),ru.fromBufferAttribute(a,l),au.fromBufferAttribute(a,c),h.normal=ds.getInterpolation(ca,rs,as,os,su,ru,au,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};ds.getNormal(rs,as,os,u.normal),h.face=u}return h}var De=class n extends ge{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function g(_,m,d,x,y,S,A,v,R,U,b){let E=S/R,N=A/U,G=S/2,X=A/2,L=v/2,O=R+1,z=U+1,K=0,J=0,Y=new C;for(let nt=0;nt<z;nt++){let rt=nt*N-X;for(let gt=0;gt<O;gt++){let q=gt*E-G;Y[_]=q*x,Y[m]=rt*y,Y[d]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[d]=v>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(gt/R),u.push(1-nt/U),K+=1}}for(let nt=0;nt<U;nt++)for(let rt=0;rt<R;rt++){let gt=f+rt+O*nt,q=f+rt+O*(nt+1),it=f+(rt+1)+O*(nt+1),_t=f+(rt+1)+O*nt;l.push(gt,q,_t),l.push(q,it,_t),J+=6}o.addGroup(p,J,b),p+=J,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function bs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function $e(n){let t={};for(let e=0;e<n.length;e++){let i=bs(n[e]);for(let s in i)t[s]=i[s]}return t}function $p(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function sf(n){return n.getRenderTarget()===null?n.outputColorSpace:ae.workingColorSpace}var Zp={clone:bs,merge:$e},Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=Kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=$p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ba=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ve=class extends Ba{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return or*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(js*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ls=-90,cs=1,Il=class extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(ls,cs,t,e);s.layers=this.layers,this.add(s);let r=new Ve(ls,cs,t,e);r.layers=this.layers,this.add(r);let a=new Ve(ls,cs,t,e);a.layers=this.layers,this.add(a);let o=new Ve(ls,cs,t,e);o.layers=this.layers,this.add(o);let l=new Ve(ls,cs,t,e);l.layers=this.layers,this.add(l);let c=new Ve(ls,cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ka=class extends pn{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xs,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dl=class extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ni?de:dn),this.texture=new ka(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new De(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ge,blending:ui});r.uniforms.tEquirect.value=e;let a=new kt(s,r),o=e.minFilter;return e.minFilter===rr&&(e.minFilter=fn),new Il(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},hl=new C,jp=new C,Qp=new Zt,Tn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=hl.subVectors(i,e).cross(jp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(hl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Qp.getNormalMatrix(t),s=this.coplanarPoint(hl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new an,fa=new C,cr=class{constructor(t=new Tn,e=new Tn,i=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Zn){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],x=s[13],y=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,m-p,S-d).normalize(),i[1].setComponents(l+r,f+c,m+p,S+d).normalize(),i[2].setComponents(l+a,f+h,m+g,S+x).normalize(),i[3].setComponents(l-a,f-h,m-g,S-x).normalize(),i[4].setComponents(l-o,f-u,m-_,S-y).normalize(),e===Zn)i[5].setComponents(l+o,f+u,m+_,S+y).normalize();else if(e===Ca)i[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(fa.x=s.normal.x>0?t.max.x:t.min.x,fa.y=s.normal.y>0?t.max.y:t.min.y,fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rf(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function tm(n,t){let e=t.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let f=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let d=g[_];e?n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(e?n.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var _i=class n extends ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let x=d*f-a;for(let y=0;y<c;y++){let S=y*u-r;g.push(S,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){let y=x+c*d,S=x+c*(d+1),A=x+1+c*(d+1),v=x+1+c*d;p.push(y,S,v),p.push(S,A,v)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nm=`#ifdef USE_ALPHAHASH
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
#endif`,im=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,om=`#ifdef USE_AOMAP
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
#endif`,lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cm=`#ifdef USE_BATCHING
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
#endif`,hm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pm=`#ifdef USE_IRIDESCENCE
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
#endif`,mm=`#ifdef USE_BUMPMAP
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
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Em=`#define PI 3.141592653589793
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
} // validated`,wm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tm=`vec3 transformedNormal = objectNormal;
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
#endif`,Am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Im=`
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
}`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
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
}`,Gm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
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
#endif`,t0=`struct PhysicalMaterial {
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
}`,e0=`
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
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
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,o0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,l0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u0=`#if defined( USE_POINTS_UV )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m0=`#ifdef USE_MORPHNORMALS
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
#endif`,g0=`#ifdef USE_MORPHTARGETS
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
#endif`,_0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
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
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k0=`float getShadowMask() {
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
}`,z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,V0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
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
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`#include <common>
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
}`,og=`#if DEPTH_PACKING == 3200
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
}`,lg=`#define DISTANCE
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
}`,cg=`#define DISTANCE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`uniform float scale;
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
}`,dg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#define LAMBERT
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
}`,_g=`#define LAMBERT
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
}`,yg=`#define MATCAP
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
}`,xg=`#define MATCAP
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
}`,vg=`#define NORMAL
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
}`,Mg=`#define NORMAL
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
}`,bg=`#define PHONG
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
}`,Sg=`#define PHONG
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
}`,Eg=`#define STANDARD
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
}`,wg=`#define STANDARD
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
}`,Tg=`#define TOON
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
}`,Ag=`#define TOON
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
}`,Rg=`uniform float size;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Pg=`#include <common>
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
}`,Lg=`uniform vec3 color;
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
}`,Ig=`uniform float rotation;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:em,alphahash_pars_fragment:nm,alphamap_fragment:im,alphamap_pars_fragment:sm,alphatest_fragment:rm,alphatest_pars_fragment:am,aomap_fragment:om,aomap_pars_fragment:lm,batching_pars_vertex:cm,batching_vertex:hm,begin_vertex:um,beginnormal_vertex:fm,bsdfs:dm,iridescence_fragment:pm,bumpmap_pars_fragment:mm,clipping_planes_fragment:gm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:ym,clipping_planes_vertex:xm,color_fragment:vm,color_pars_fragment:Mm,color_pars_vertex:bm,color_vertex:Sm,common:Em,cube_uv_reflection_fragment:wm,defaultnormal_vertex:Tm,displacementmap_pars_vertex:Am,displacementmap_vertex:Rm,emissivemap_fragment:Cm,emissivemap_pars_fragment:Pm,colorspace_fragment:Lm,colorspace_pars_fragment:Im,envmap_fragment:Dm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Nm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:$m,envmap_vertex:Fm,fog_vertex:Bm,fog_pars_vertex:km,fog_fragment:zm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Vm,lightmap_fragment:Gm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:Zm,lights_toon_pars_fragment:Jm,lights_phong_fragment:Km,lights_phong_pars_fragment:jm,lights_physical_fragment:Qm,lights_physical_pars_fragment:t0,lights_fragment_begin:e0,lights_fragment_maps:n0,lights_fragment_end:i0,logdepthbuf_fragment:s0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:a0,logdepthbuf_vertex:o0,map_fragment:l0,map_pars_fragment:c0,map_particle_fragment:h0,map_particle_pars_fragment:u0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:d0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:g0,morphtarget_vertex:_0,normal_fragment_begin:y0,normal_fragment_maps:x0,normal_pars_fragment:v0,normal_pars_vertex:M0,normal_vertex:b0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:w0,clearcoat_pars_fragment:T0,iridescence_pars_fragment:A0,opaque_fragment:R0,packing:C0,premultiplied_alpha_fragment:P0,project_vertex:L0,dithering_fragment:I0,dithering_pars_fragment:D0,roughnessmap_fragment:U0,roughnessmap_pars_fragment:N0,shadowmap_pars_fragment:O0,shadowmap_pars_vertex:F0,shadowmap_vertex:B0,shadowmask_pars_fragment:k0,skinbase_vertex:z0,skinning_pars_vertex:H0,skinning_vertex:V0,skinnormal_vertex:G0,specularmap_fragment:W0,specularmap_pars_fragment:X0,tonemapping_fragment:q0,tonemapping_pars_fragment:Y0,transmission_fragment:$0,transmission_pars_fragment:Z0,uv_pars_fragment:J0,uv_pars_vertex:K0,uv_vertex:j0,worldpos_vertex:Q0,background_vert:tg,background_frag:eg,backgroundCube_vert:ng,backgroundCube_frag:ig,cube_vert:sg,cube_frag:rg,depth_vert:ag,depth_frag:og,distanceRGBA_vert:lg,distanceRGBA_frag:cg,equirect_vert:hg,equirect_frag:ug,linedashed_vert:fg,linedashed_frag:dg,meshbasic_vert:pg,meshbasic_frag:mg,meshlambert_vert:gg,meshlambert_frag:_g,meshmatcap_vert:yg,meshmatcap_frag:xg,meshnormal_vert:vg,meshnormal_frag:Mg,meshphong_vert:bg,meshphong_frag:Sg,meshphysical_vert:Eg,meshphysical_frag:wg,meshtoon_vert:Tg,meshtoon_frag:Ag,points_vert:Rg,points_frag:Cg,shadow_vert:Pg,shadow_frag:Lg,sprite_vert:Ig,sprite_frag:Dg},pt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},On={basic:{uniforms:$e([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:$e([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:$e([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:$e([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:$e([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:$e([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:$e([pt.points,pt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:$e([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:$e([pt.common,pt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:$e([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:$e([pt.sprite,pt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:$e([pt.common,pt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:$e([pt.lights,pt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};On.physical={uniforms:$e([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var da={r:0,b:0,g:0};function Ug(n,t,e,i,s,r,a){let o=new Ut(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(m,d){let x=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?e:t).get(y)),y===null?_(o,l):y&&y.isColor&&(_(y,1),x=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===io)?(h===void 0&&(h=new kt(new De(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:bs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,v,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=ae.getTransfer(y.colorSpace)!==fe,(u!==y||f!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new kt(new _i(2,2),new on({name:"BackgroundMaterial",uniforms:bs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ae.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(da,sf(n)),i.buffers.color.setClear(da.r,da.g,da.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function Ng(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(L,O,z,K,J){let Y=!1;if(a){let nt=_(K,z,O);c!==nt&&(c=nt,p(c.object)),Y=d(L,K,z,J),Y&&x(L,K,z,J)}else{let nt=O.wireframe===!0;(c.geometry!==K.id||c.program!==z.id||c.wireframe!==nt)&&(c.geometry=K.id,c.program=z.id,c.wireframe=nt,Y=!0)}J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,U(L,O,z,K),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,O,z){let K=z.wireframe===!0,J=o[L.id];J===void 0&&(J={},o[L.id]=J);let Y=J[O.id];Y===void 0&&(Y={},J[O.id]=Y);let nt=Y[K];return nt===void 0&&(nt=m(f()),Y[K]=nt),nt}function m(L){let O=[],z=[],K=[];for(let J=0;J<s;J++)O[J]=0,z[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:K,object:L,attributes:{},index:null}}function d(L,O,z,K){let J=c.attributes,Y=O.attributes,nt=0,rt=z.getAttributes();for(let gt in rt)if(rt[gt].location>=0){let it=J[gt],_t=Y[gt];if(_t===void 0&&(gt==="instanceMatrix"&&L.instanceMatrix&&(_t=L.instanceMatrix),gt==="instanceColor"&&L.instanceColor&&(_t=L.instanceColor)),it===void 0||it.attribute!==_t||_t&&it.data!==_t.data)return!0;nt++}return c.attributesNum!==nt||c.index!==K}function x(L,O,z,K){let J={},Y=O.attributes,nt=0,rt=z.getAttributes();for(let gt in rt)if(rt[gt].location>=0){let it=Y[gt];it===void 0&&(gt==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),gt==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));let _t={};_t.attribute=it,it&&it.data&&(_t.data=it.data),J[gt]=_t,nt++}c.attributes=J,c.attributesNum=nt,c.index=K}function y(){let L=c.newAttributes;for(let O=0,z=L.length;O<z;O++)L[O]=0}function S(L){A(L,0)}function A(L,O){let z=c.newAttributes,K=c.enabledAttributes,J=c.attributeDivisors;z[L]=1,K[L]===0&&(n.enableVertexAttribArray(L),K[L]=1),J[L]!==O&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),J[L]=O)}function v(){let L=c.newAttributes,O=c.enabledAttributes;for(let z=0,K=O.length;z<K;z++)O[z]!==L[z]&&(n.disableVertexAttribArray(z),O[z]=0)}function R(L,O,z,K,J,Y,nt){nt===!0?n.vertexAttribIPointer(L,O,z,J,Y):n.vertexAttribPointer(L,O,z,K,J,Y)}function U(L,O,z,K){if(i.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let J=K.attributes,Y=z.getAttributes(),nt=O.defaultAttributeValues;for(let rt in Y){let gt=Y[rt];if(gt.location>=0){let q=J[rt];if(q===void 0&&(rt==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),rt==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){let it=q.normalized,_t=q.itemSize,Tt=e.get(q);if(Tt===void 0)continue;let bt=Tt.buffer,Dt=Tt.type,Ot=Tt.bytesPerElement,wt=i.isWebGL2===!0&&(Dt===n.INT||Dt===n.UNSIGNED_INT||q.gpuType===Xu);if(q.isInterleavedBufferAttribute){let Ft=q.data,I=Ft.stride,ct=q.offset;if(Ft.isInstancedInterleavedBuffer){for(let $=0;$<gt.locationSize;$++)A(gt.location+$,Ft.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let $=0;$<gt.locationSize;$++)S(gt.location+$);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let $=0;$<gt.locationSize;$++)R(gt.location+$,_t/gt.locationSize,Dt,it,I*Ot,(ct+_t/gt.locationSize*$)*Ot,wt)}else{if(q.isInstancedBufferAttribute){for(let Ft=0;Ft<gt.locationSize;Ft++)A(gt.location+Ft,q.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ft=0;Ft<gt.locationSize;Ft++)S(gt.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let Ft=0;Ft<gt.locationSize;Ft++)R(gt.location+Ft,_t/gt.locationSize,Dt,it,_t*Ot,_t/gt.locationSize*Ft*Ot,wt)}}else if(nt!==void 0){let it=nt[rt];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(gt.location,it);break;case 3:n.vertexAttrib3fv(gt.location,it);break;case 4:n.vertexAttrib4fv(gt.location,it);break;default:n.vertexAttrib1fv(gt.location,it)}}}}v()}function b(){G();for(let L in o){let O=o[L];for(let z in O){let K=O[z];for(let J in K)g(K[J].object),delete K[J];delete O[z]}delete o[L]}}function E(L){if(o[L.id]===void 0)return;let O=o[L.id];for(let z in O){let K=O[z];for(let J in K)g(K[J].object),delete K[J];delete O[z]}delete o[L.id]}function N(L){for(let O in o){let z=o[O];if(z[L.id]===void 0)continue;let K=z[L.id];for(let J in K)g(K[J].object),delete K[J];delete z[L.id]}}function G(){X(),h=!0,c!==l&&(c=l,p(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:X,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:S,disableUnusedAttributes:v}}function Og(n,t,e,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Fg(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,S=a||t.has("OES_texture_float"),A=y&&S,v=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:v}}function Bg(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Tn,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let x=r?0:i,y=x*4,S=d.clippingState||null;l.value=S,S=h(g,f,y,p);for(let A=0;A!==y;++A)S[A]=e[A];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=p+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,S=p;y!==_;++y,S+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function kg(n){let t=new WeakMap;function e(a,o){return o===El?a.mapping=xs:o===wl&&(a.mapping=vs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===El||o===wl)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Dl(l.height/2);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var za=class extends Ba{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ps=4,ou=[.125,.215,.35,.446,.526,.582],Ii=20,ul=new za,lu=new Ut,fl=null,dl=0,pl=0,Pi=(1+Math.sqrt(5))/2,hs=1/Pi,cu=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Pi,hs),new C(0,Pi,-hs),new C(hs,0,Pi),new C(-hs,0,Pi),new C(Pi,hs,0),new C(-Pi,hs,0)],Ha=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fl,dl,pl),t.scissorTest=!1,pa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ar,format:Rn,colorSpace:Jn,depthBuffer:!1},s=hu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(r)),this._blurMaterial=Hg(r,t,e)}return s}_compileMaterial(t){let e=new kt(this._lodPlanes[0],t);this._renderer.compile(e,ul)}_sceneToCubeUV(t,e,i,s){let o=new Ve(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(lu),h.toneMapping=di,h.autoClear=!1;let p=new mn({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new kt(new De,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(lu),_=!0);for(let d=0;d<6;d++){let x=d%3;x===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):x===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let y=this._cubeSize;pa(s,x*y,d>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===xs||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;pa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,ul)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cu[(s-1)%cu.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new kt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ii-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let d=[],x=0;for(let R=0;R<Ii;++R){let U=R/_,b=Math.exp(-U*U/2);d.push(b),R===0?x+=b:R<m&&(x+=2*b)}for(let R=0;R<d.length;R++)d[R]=d[R]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let S=this._sizeLods[s],A=3*S*(s>y-ps?s-y+ps:0),v=4*(this._cubeSize-S);pa(e,A,v,3*S,2*S),l.setRenderTarget(e),l.render(u,ul)}};function zg(n){let t=[],e=[],i=[],s=n,r=n-ps+1+ou.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-ps?l=ou[a-n+ps-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,x=new Float32Array(_*g*p),y=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let v=0;v<p;v++){let R=v%3*2/3-1,U=v>2?0:-1,b=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];x.set(b,_*g*v),y.set(f,m*g*v);let E=[v,v,v,v,v,v];S.set(E,d*g*v)}let A=new ge;A.setAttribute("position",new ue(x,_)),A.setAttribute("uv",new ue(y,m)),A.setAttribute("faceIndex",new ue(S,d)),t.push(A),s>ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function hu(n,t,e){let i=new Kn(n,t,e);return i.texture.mapping=io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Hg(n,t,e){let i=new Float32Array(Ii),s=new C(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function uu(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function fu(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function Vg(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===El||l===wl,h=l===xs||l===vs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Ha(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Ha(n));let f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Gg(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Wg(n,t,e,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let x=p.array;_=p.version;for(let y=0,S=x.length;y<S;y+=3){let A=x[y+0],v=x[y+1],R=x[y+2];f.push(A,v,v,R,R,A)}}else if(g!==void 0){let x=g.array;_=g.version;for(let y=0,S=x.length/3-1;y<S;y+=3){let A=y+0,v=y+1,R=y+2;f.push(A,v,v,R,R,A)}}else return;let m=new(ef(f)?Fa:Oa)(f,1);m.version=_;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Xg(n,t,e,i){let s=i.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){n.drawElements(r,g,o,p*l),e.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,d;if(s)m=n,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,o,p*l,_),e.update(g,r,_)}function f(p,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,_);let d=0;for(let x=0;x<_;x++)d+=g[x];e.update(d,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function qg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Yg(n,t){return n[0]-t[0]}function $g(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Zg(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,a=new me,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],U=0;x===!0&&(U=1),y===!0&&(U=2),S===!0&&(U=3);let b=h.attributes.position.count*U,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let N=new Float32Array(b*E*4*g),G=new Ua(N,b,E,g);G.type=hi,G.needsUpdate=!0;let X=U*4;for(let O=0;O<g;O++){let z=A[O],K=v[O],J=R[O],Y=b*E*4*O;for(let nt=0;nt<z.count;nt++){let rt=nt*X;x===!0&&(a.fromBufferAttribute(z,nt),N[Y+rt+0]=a.x,N[Y+rt+1]=a.y,N[Y+rt+2]=a.z,N[Y+rt+3]=0),y===!0&&(a.fromBufferAttribute(K,nt),N[Y+rt+4]=a.x,N[Y+rt+5]=a.y,N[Y+rt+6]=a.z,N[Y+rt+7]=0),S===!0&&(a.fromBufferAttribute(J,nt),N[Y+rt+8]=a.x,N[Y+rt+9]=a.y,N[Y+rt+10]=a.z,N[Y+rt+11]=J.itemSize===4?a.w:1)}}_={count:g,texture:G,size:new st(b,E)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let x=0;x<f.length;x++)m+=f[x];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",d),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let p=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let y=0;y<p;y++)g[y]=[y,0];i[h.id]=g}for(let y=0;y<p;y++){let S=g[y];S[0]=y,S[1]=f[y]}g.sort($g);for(let y=0;y<8;y++)y<p&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Yg);let _=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let y=0;y<8;y++){let S=o[y],A=S[0],v=S[1];A!==Number.MAX_SAFE_INTEGER&&v?(_&&h.getAttribute("morphTarget"+y)!==_[A]&&h.setAttribute("morphTarget"+y,_[A]),m&&h.getAttribute("morphNormal"+y)!==m[A]&&h.setAttribute("morphNormal"+y,m[A]),s[y]=v,d+=v):(_&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let x=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",x),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Jg(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Va=class extends pn{constructor(t,e,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ui,h!==Ui&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ui&&(i=ci),i===void 0&&h===Ms&&(i=Di),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ze,this.minFilter=l!==void 0?l:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},af=new pn,of=new Va(1,1);of.compareFunction=tf;var lf=new Ua,cf=new Ll,hf=new ka,du=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function Ts(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=du[s];if(r===void 0&&(r=new Float32Array(s),du[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Re(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ro(n,t){let e=pu[t];e===void 0&&(e=new Int32Array(t),pu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Kg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function jg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),Re(e,t)}}function Qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),Re(e,t)}}function t_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),Re(e,t)}}function e_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;_u.set(i),n.uniformMatrix2fv(this.addr,!1,_u),Re(e,i)}}function n_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;gu.set(i),n.uniformMatrix3fv(this.addr,!1,gu),Re(e,i)}}function i_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,i))return;mu.set(i),n.uniformMatrix4fv(this.addr,!1,mu),Re(e,i)}}function s_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function r_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),Re(e,t)}}function a_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),Re(e,t)}}function o_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),Re(e,t)}}function l_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function c_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),Re(e,t)}}function h_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),Re(e,t)}}function u_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),Re(e,t)}}function f_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?of:af;e.setTexture2D(t||r,s)}function d_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||cf,s)}function p_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||hf,s)}function m_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||lf,s)}function g_(n){switch(n){case 5126:return Kg;case 35664:return jg;case 35665:return Qg;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return a_;case 35669:case 35673:return o_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}function __(n,t){n.uniform1fv(this.addr,t)}function y_(n,t){let e=Ts(t,this.size,2);n.uniform2fv(this.addr,e)}function x_(n,t){let e=Ts(t,this.size,3);n.uniform3fv(this.addr,e)}function v_(n,t){let e=Ts(t,this.size,4);n.uniform4fv(this.addr,e)}function M_(n,t){let e=Ts(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function b_(n,t){let e=Ts(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function S_(n,t){let e=Ts(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function E_(n,t){n.uniform1iv(this.addr,t)}function w_(n,t){n.uniform2iv(this.addr,t)}function T_(n,t){n.uniform3iv(this.addr,t)}function A_(n,t){n.uniform4iv(this.addr,t)}function R_(n,t){n.uniform1uiv(this.addr,t)}function C_(n,t){n.uniform2uiv(this.addr,t)}function P_(n,t){n.uniform3uiv(this.addr,t)}function L_(n,t){n.uniform4uiv(this.addr,t)}function I_(n,t,e){let i=this.cache,s=t.length,r=ro(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||af,r[a])}function D_(n,t,e){let i=this.cache,s=t.length,r=ro(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cf,r[a])}function U_(n,t,e){let i=this.cache,s=t.length,r=ro(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||hf,r[a])}function N_(n,t,e){let i=this.cache,s=t.length,r=ro(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||lf,r[a])}function O_(n){switch(n){case 5126:return __;case 35664:return y_;case 35665:return x_;case 35666:return v_;case 35674:return M_;case 35675:return b_;case 35676:return S_;case 5124:case 35670:return E_;case 35667:case 35671:return w_;case 35668:case 35672:return T_;case 35669:case 35673:return A_;case 5125:return R_;case 36294:return C_;case 36295:return P_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return N_}}var Ul=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=g_(e.type)}},Nl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O_(e.type)}},Ol=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},ml=/(\w+)(\])?(\[|\.)?/g;function yu(n,t){n.seq.push(t),n.map[t.id]=t}function F_(n,t,e){let i=n.name,s=i.length;for(ml.lastIndex=0;;){let r=ml.exec(i),a=ml.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yu(e,c===void 0?new Ul(o,n,t):new Nl(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Ol(o),yu(e,u)),e=u}}}var ys=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);F_(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function xu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var B_=37297,k_=0;function z_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function H_(n){let t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(n),i;switch(t===e?i="":t===Ra&&e===Aa?i="LinearDisplayP3ToLinearSRGB":t===Aa&&e===Ra&&(i="LinearSRGBToLinearDisplayP3"),n){case Jn:case so:return[i,"LinearTransferOETF"];case de:case xc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function vu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+z_(n.getShaderSource(t),a)}else return s}function V_(n,t){let e=H_(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function G_(n,t){let e;switch(t){case Zd:e="Linear";break;case Jd:e="Reinhard";break;case Kd:e="OptimizedCineon";break;case _c:e="ACESFilmic";break;case Qd:e="AgX";break;case jd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function W_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ms).join(`
`)}function X_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ms).join(`
`)}function q_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Y_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ms(n){return n!==""}function Mu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(n){return n.replace($_,J_)}var Z_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function J_(n,t){let e=Gt[t];if(e===void 0){let i=Z_.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fl(e)}var K_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(n){return n.replace(K_,j_)}function j_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Eu(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Q_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===no?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function ty(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xs:case vs:t="ENVMAP_TYPE_CUBE";break;case io:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ey(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function ny(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gu:t="ENVMAP_BLENDING_MULTIPLY";break;case Yd:t="ENVMAP_BLENDING_MIX";break;case $d:t="ENVMAP_BLENDING_ADD";break}return t}function iy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function sy(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Q_(e),c=ty(e),h=ey(e),u=ny(e),f=iy(e),p=e.isWebGL2?"":W_(e),g=X_(e),_=q_(r),m=s.createProgram(),d,x,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ms).join(`
`),d.length>0&&(d+=`
`),x=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ms).join(`
`),x.length>0&&(x+=`
`)):(d=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),x=[p,Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Gt.tonemapping_pars_fragment:"",e.toneMapping!==di?G_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,V_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ms).join(`
`)),a=Fl(a),a=Mu(a,e),a=bu(a,e),o=Fl(o),o=Mu(o,e),o=bu(o,e),a=Su(a),o=Su(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let S=y+d+a,A=y+x+o,v=xu(s,s.VERTEX_SHADER,S),R=xu(s,s.FRAGMENT_SHADER,A);s.attachShader(m,v),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(G){if(n.debug.checkShaderErrors){let X=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(v).trim(),O=s.getShaderInfoLog(R).trim(),z=!0,K=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,v,R);else{let J=vu(s,v,"vertex"),Y=vu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+J+`
`+Y)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(L===""||O==="")&&(K=!1);K&&(G.diagnostics={runnable:z,programLog:X,vertexShader:{log:L,prefix:d},fragmentShader:{log:O,prefix:x}})}s.deleteShader(v),s.deleteShader(R),b=new ys(s,m),E=Y_(s,m)}let b;this.getUniforms=function(){return b===void 0&&U(this),b};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(m,B_)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k_++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=R,this}var ry=0,Bl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new kl(t),e.set(t,i)),i}},kl=class{constructor(t){this.id=ry++,this.code=t,this.usedTimes=0}};function ay(n,t,e,i,s,r,a){let o=new lr,l=new Bl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return b===0?"uv":`uv${b}`}function m(b,E,N,G,X){let L=G.fog,O=X.geometry,z=b.isMeshStandardMaterial?G.environment:null,K=(b.isMeshStandardMaterial?e:t).get(b.envMap||z),J=K&&K.mapping===io?K.image.height:null,Y=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let nt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,rt=nt!==void 0?nt.length:0,gt=0;O.morphAttributes.position!==void 0&&(gt=1),O.morphAttributes.normal!==void 0&&(gt=2),O.morphAttributes.color!==void 0&&(gt=3);let q,it,_t,Tt;if(Y){let Xe=On[Y];q=Xe.vertexShader,it=Xe.fragmentShader}else q=b.vertexShader,it=b.fragmentShader,l.update(b),_t=l.getVertexShaderID(b),Tt=l.getFragmentShaderID(b);let bt=n.getRenderTarget(),Dt=X.isInstancedMesh===!0,Ot=X.isBatchedMesh===!0,wt=!!b.map,Ft=!!b.matcap,I=!!K,ct=!!b.aoMap,$=!!b.lightMap,ot=!!b.bumpMap,Z=!!b.normalMap,At=!!b.displacementMap,yt=!!b.emissiveMap,w=!!b.metalnessMap,M=!!b.roughnessMap,k=b.anisotropy>0,at=b.clearcoat>0,Q=b.iridescence>0,j=b.sheen>0,Et=b.transmission>0,mt=k&&!!b.anisotropyMap,vt=at&&!!b.clearcoatMap,Lt=at&&!!b.clearcoatNormalMap,zt=at&&!!b.clearcoatRoughnessMap,tt=Q&&!!b.iridescenceMap,qt=Q&&!!b.iridescenceThicknessMap,P=j&&!!b.sheenColorMap,et=j&&!!b.sheenRoughnessMap,dt=!!b.specularMap,lt=!!b.specularColorMap,Rt=!!b.specularIntensityMap,Yt=Et&&!!b.transmissionMap,Jt=Et&&!!b.thicknessMap,Wt=!!b.gradientMap,ft=!!b.alphaMap,D=b.alphaTest>0,ht=!!b.alphaHash,ut=!!b.extensions,It=!!O.attributes.uv1,Ct=!!O.attributes.uv2,Qt=!!O.attributes.uv3,se=di;return b.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(se=n.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:b.type,shaderName:b.name,vertexShader:q,fragmentShader:it,defines:b.defines,customVertexShaderID:_t,customFragmentShaderID:Tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ot,instancing:Dt,instancingColor:Dt&&X.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:bt===null?n.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Jn,map:wt,matcap:Ft,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:J,aoMap:ct,lightMap:$,bumpMap:ot,normalMap:Z,displacementMap:f&&At,emissiveMap:yt,normalMapObjectSpace:Z&&b.normalMapType===up,normalMapTangentSpace:Z&&b.normalMapType===Qu,metalnessMap:w,roughnessMap:M,anisotropy:k,anisotropyMap:mt,clearcoat:at,clearcoatMap:vt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:zt,iridescence:Q,iridescenceMap:tt,iridescenceThicknessMap:qt,sheen:j,sheenColorMap:P,sheenRoughnessMap:et,specularMap:dt,specularColorMap:lt,specularIntensityMap:Rt,transmission:Et,transmissionMap:Yt,thicknessMap:Jt,gradientMap:Wt,opaque:b.transparent===!1&&b.blending===fi,alphaMap:ft,alphaTest:D,alphaHash:ht,combine:b.combine,mapUv:wt&&_(b.map.channel),aoMapUv:ct&&_(b.aoMap.channel),lightMapUv:$&&_(b.lightMap.channel),bumpMapUv:ot&&_(b.bumpMap.channel),normalMapUv:Z&&_(b.normalMap.channel),displacementMapUv:At&&_(b.displacementMap.channel),emissiveMapUv:yt&&_(b.emissiveMap.channel),metalnessMapUv:w&&_(b.metalnessMap.channel),roughnessMapUv:M&&_(b.roughnessMap.channel),anisotropyMapUv:mt&&_(b.anisotropyMap.channel),clearcoatMapUv:vt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:zt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:P&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:et&&_(b.sheenRoughnessMap.channel),specularMapUv:dt&&_(b.specularMap.channel),specularColorMapUv:lt&&_(b.specularColorMap.channel),specularIntensityMapUv:Rt&&_(b.specularIntensityMap.channel),transmissionMapUv:Yt&&_(b.transmissionMap.channel),thicknessMapUv:Jt&&_(b.thicknessMap.channel),alphaMapUv:ft&&_(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Z||k),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:Ct,vertexUv3s:Qt,pointsUvs:X.isPoints===!0&&!!O.attributes.uv&&(wt||ft),fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,useLegacyLights:n._useLegacyLights,decodeVideoTexture:wt&&b.map.isVideoTexture===!0&&ae.getTransfer(b.map.colorSpace)===fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===An,flipSided:b.side===Ge,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ut&&b.extensions.derivatives===!0,extensionFragDepth:ut&&b.extensions.fragDepth===!0,extensionDrawBuffers:ut&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)E.push(N),E.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(x(E,b),y(E,b),E.push(n.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function x(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function y(b,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function S(b){let E=g[b.type],N;if(E){let G=On[E];N=Zp.clone(G.uniforms)}else N=b.uniforms;return N}function A(b,E){let N;for(let G=0,X=c.length;G<X;G++){let L=c[G];if(L.cacheKey===E){N=L,++N.usedTimes;break}}return N===void 0&&(N=new sy(n,E,b,r),c.push(N)),N}function v(b){if(--b.usedTimes===0){let E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:A,releaseProgram:v,releaseShaderCache:R,programs:c,dispose:U}}function oy(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function ly(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function wu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Tu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function o(u,f,p,g,_,m){let d=a(u,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,_,m){let d=a(u,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||ly),i.length>1&&i.sort(f||wu),s.length>1&&s.sort(f||wu)}function h(){for(let u=t,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function cy(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Tu,n.set(i,[a])):s>=r.length?(a=new Tu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function hy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ut};break;case"SpotLight":e={position:new C,direction:new C,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function uy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var fy=0;function dy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function py(n,t){let e=new hy,i=uy(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new C);let r=new C,a=new oe,o=new oe;function l(h,u){let f=0,p=0,g=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let _=0,m=0,d=0,x=0,y=0,S=0,A=0,v=0,R=0,U=0,b=0;h.sort(dy);let E=u===!0?Math.PI:1;for(let G=0,X=h.length;G<X;G++){let L=h[G],O=L.color,z=L.intensity,K=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=O.r*z*E,p+=O.g*z*E,g+=O.b*z*E;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(L.sh.coefficients[Y],z);b++}else if(L.isDirectionalLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let nt=L.shadow,rt=i.get(L);rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,s.directionalShadow[_]=rt,s.directionalShadowMap[_]=J,s.directionalShadowMatrix[_]=L.shadow.matrix,S++}s.directional[_]=Y,_++}else if(L.isSpotLight){let Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(z*E),Y.distance=K,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,s.spot[d]=Y;let nt=L.shadow;if(L.map&&(s.spotLightMap[R]=L.map,R++,nt.updateMatrices(L),L.castShadow&&U++),s.spotLightMatrix[d]=nt.matrix,L.castShadow){let rt=i.get(L);rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,s.spotShadow[d]=rt,s.spotShadowMap[d]=J,v++}d++}else if(L.isRectAreaLight){let Y=e.get(L);Y.color.copy(O).multiplyScalar(z),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),s.rectArea[x]=Y,x++}else if(L.isPointLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*E),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let nt=L.shadow,rt=i.get(L);rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,rt.shadowCameraNear=nt.camera.near,rt.shadowCameraFar=nt.camera.far,s.pointShadow[m]=rt,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=L.shadow.matrix,A++}s.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(z*E),Y.groundColor.copy(L.groundColor).multiplyScalar(z*E),s.hemi[y]=Y,y++}}x>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_FLOAT_1,s.rectAreaLTC2=pt.LTC_FLOAT_2):(s.rectAreaLTC1=pt.LTC_HALF_1,s.rectAreaLTC2=pt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_FLOAT_1,s.rectAreaLTC2=pt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pt.LTC_HALF_1,s.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let N=s.hash;(N.directionalLength!==_||N.pointLength!==m||N.spotLength!==d||N.rectAreaLength!==x||N.hemiLength!==y||N.numDirectionalShadows!==S||N.numPointShadows!==A||N.numSpotShadows!==v||N.numSpotMaps!==R||N.numLightProbes!==b)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=x,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=v,s.spotShadowMap.length=v,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=v+R-U,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=b,N.directionalLength=_,N.pointLength=m,N.spotLength=d,N.rectAreaLength=x,N.hemiLength=y,N.numDirectionalShadows=S,N.numPointShadows=A,N.numSpotShadows=v,N.numSpotMaps=R,N.numLightProbes=b,s.version=fy++)}function c(h,u){let f=0,p=0,g=0,_=0,m=0,d=u.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){let S=h[x];if(S.isDirectionalLight){let A=s.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),f++}else if(S.isSpotLight){let A=s.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),g++}else if(S.isRectAreaLight){let A=s.rectArea[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),o.identity(),a.copy(S.matrixWorld),a.premultiply(d),o.extractRotation(a),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let A=s.point[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){let A=s.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:s}}function Au(n,t){let e=new py(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function my(n,t){let e=new WeakMap;function i(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Au(n,t),e.set(r,[l])):a>=o.length?(l=new Au(n,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:i,dispose:s}}var zl=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hl=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_y=`uniform sampler2D shadow_pass;
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
}`;function yy(n,t,e){let i=new cr,s=new st,r=new st,a=new me,o=new zl({depthPacking:hp}),l=new Hl,c={},h=e.maxTextureSize,u={[mi]:Ge,[Ge]:mi,[An]:An},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:gy,fragmentShader:_y}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new kt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let d=this.type;this.render=function(v,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;let b=n.getRenderTarget(),E=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ui),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let X=d!==$n&&this.type===$n,L=d===$n&&this.type!==$n;for(let O=0,z=v.length;O<z;O++){let K=v[O],J=K.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Y=J.getFrameExtents();if(s.multiply(Y),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,J.mapSize.y=r.y)),J.map===null||X===!0||L===!0){let rt=this.type!==$n?{minFilter:Ze,magFilter:Ze}:{};J.map!==null&&J.map.dispose(),J.map=new Kn(s.x,s.y,rt),J.map.texture.name=K.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();let nt=J.getViewportCount();for(let rt=0;rt<nt;rt++){let gt=J.getViewport(rt);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),G.viewport(a),J.updateMatrices(K,rt),i=J.getFrustum(),S(R,U,J.camera,K,this.type)}J.isPointLightShadow!==!0&&this.type===$n&&x(J,U),J.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,E,N)};function x(v,R){let U=t.update(_);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Kn(s.x,s.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,n.setRenderTarget(v.mapPass),n.clear(),n.renderBufferDirect(R,null,U,f,_,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,n.setRenderTarget(v.map),n.clear(),n.renderBufferDirect(R,null,U,p,_,null)}function y(v,R,U,b){let E=null,N=U.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(N!==void 0)E=N;else if(E=U.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=E.uuid,X=R.uuid,L=c[G];L===void 0&&(L={},c[G]=L);let O=L[X];O===void 0&&(O=E.clone(),L[X]=O,R.addEventListener("dispose",A)),E=O}if(E.visible=R.visible,E.wireframe=R.wireframe,b===$n?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=n.properties.get(E);G.light=U}return E}function S(v,R,U,b,E){if(v.visible===!1)return;if(v.layers.test(R.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&E===$n)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,v.matrixWorld);let X=t.update(v),L=v.material;if(Array.isArray(L)){let O=X.groups;for(let z=0,K=O.length;z<K;z++){let J=O[z],Y=L[J.materialIndex];if(Y&&Y.visible){let nt=y(v,Y,b,E);v.onBeforeShadow(n,v,R,U,X,nt,J),n.renderBufferDirect(U,null,X,nt,v,J),v.onAfterShadow(n,v,R,U,X,nt,J)}}}else if(L.visible){let O=y(v,L,b,E);v.onBeforeShadow(n,v,R,U,X,O,null),n.renderBufferDirect(U,null,X,O,v,null),v.onAfterShadow(n,v,R,U,X,O,null)}}let G=v.children;for(let X=0,L=G.length;X<L;X++)S(G[X],R,U,b,E)}function A(v){v.target.removeEventListener("dispose",A);for(let U in c){let b=c[U],E=v.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function xy(n,t,e){let i=e.isWebGL2;function s(){let D=!1,ht=new me,ut=null,It=new me(0,0,0,0);return{setMask:function(Ct){ut!==Ct&&!D&&(n.colorMask(Ct,Ct,Ct,Ct),ut=Ct)},setLocked:function(Ct){D=Ct},setClear:function(Ct,Qt,se,Pe,Xe){Xe===!0&&(Ct*=Pe,Qt*=Pe,se*=Pe),ht.set(Ct,Qt,se,Pe),It.equals(ht)===!1&&(n.clearColor(Ct,Qt,se,Pe),It.copy(ht))},reset:function(){D=!1,ut=null,It.set(-1,0,0,0)}}}function r(){let D=!1,ht=null,ut=null,It=null;return{setTest:function(Ct){Ct?Ot(n.DEPTH_TEST):wt(n.DEPTH_TEST)},setMask:function(Ct){ht!==Ct&&!D&&(n.depthMask(Ct),ht=Ct)},setFunc:function(Ct){if(ut!==Ct){switch(Ct){case zd:n.depthFunc(n.NEVER);break;case Hd:n.depthFunc(n.ALWAYS);break;case Vd:n.depthFunc(n.LESS);break;case Sa:n.depthFunc(n.LEQUAL);break;case Gd:n.depthFunc(n.EQUAL);break;case Wd:n.depthFunc(n.GEQUAL);break;case Xd:n.depthFunc(n.GREATER);break;case qd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=Ct}},setLocked:function(Ct){D=Ct},setClear:function(Ct){It!==Ct&&(n.clearDepth(Ct),It=Ct)},reset:function(){D=!1,ht=null,ut=null,It=null}}}function a(){let D=!1,ht=null,ut=null,It=null,Ct=null,Qt=null,se=null,Pe=null,Xe=null;return{setTest:function(he){D||(he?Ot(n.STENCIL_TEST):wt(n.STENCIL_TEST))},setMask:function(he){ht!==he&&!D&&(n.stencilMask(he),ht=he)},setFunc:function(he,qe,Nn){(ut!==he||It!==qe||Ct!==Nn)&&(n.stencilFunc(he,qe,Nn),ut=he,It=qe,Ct=Nn)},setOp:function(he,qe,Nn){(Qt!==he||se!==qe||Pe!==Nn)&&(n.stencilOp(he,qe,Nn),Qt=he,se=qe,Pe=Nn)},setLocked:function(he){D=he},setClear:function(he){Xe!==he&&(n.clearStencil(he),Xe=he)},reset:function(){D=!1,ht=null,ut=null,It=null,Ct=null,Qt=null,se=null,Pe=null,Xe=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},p={},g=new WeakMap,_=[],m=null,d=!1,x=null,y=null,S=null,A=null,v=null,R=null,U=null,b=new Ut(0,0,0),E=0,N=!1,G=null,X=null,L=null,O=null,z=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,Y=0,nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(nt)[1]),J=Y>=1):nt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),J=Y>=2);let rt=null,gt={},q=n.getParameter(n.SCISSOR_BOX),it=n.getParameter(n.VIEWPORT),_t=new me().fromArray(q),Tt=new me().fromArray(it);function bt(D,ht,ut,It){let Ct=new Uint8Array(4),Qt=n.createTexture();n.bindTexture(D,Qt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<ut;se++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(ht,0,n.RGBA,1,1,It,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(ht+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return Qt}let Dt={};Dt[n.TEXTURE_2D]=bt(n.TEXTURE_2D,n.TEXTURE_2D,1),Dt[n.TEXTURE_CUBE_MAP]=bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Dt[n.TEXTURE_2D_ARRAY]=bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Dt[n.TEXTURE_3D]=bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ot(n.DEPTH_TEST),l.setFunc(Sa),yt(!1),w(oh),Ot(n.CULL_FACE),Z(ui);function Ot(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function wt(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function Ft(D,ht){return p[D]!==ht?(n.bindFramebuffer(D,ht),p[D]=ht,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ht),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ht)),!0):!1}function I(D,ht){let ut=_,It=!1;if(D)if(ut=g.get(ht),ut===void 0&&(ut=[],g.set(ht,ut)),D.isWebGLMultipleRenderTargets){let Ct=D.texture;if(ut.length!==Ct.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let Qt=0,se=Ct.length;Qt<se;Qt++)ut[Qt]=n.COLOR_ATTACHMENT0+Qt;ut.length=Ct.length,It=!0}}else ut[0]!==n.COLOR_ATTACHMENT0&&(ut[0]=n.COLOR_ATTACHMENT0,It=!0);else ut[0]!==n.BACK&&(ut[0]=n.BACK,It=!0);It&&(e.isWebGL2?n.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function ct(D){return m!==D?(n.useProgram(D),m=D,!0):!1}let $={[Li]:n.FUNC_ADD,[wd]:n.FUNC_SUBTRACT,[Td]:n.FUNC_REVERSE_SUBTRACT};if(i)$[hh]=n.MIN,$[uh]=n.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&($[hh]=D.MIN_EXT,$[uh]=D.MAX_EXT)}let ot={[Ad]:n.ZERO,[Rd]:n.ONE,[Cd]:n.SRC_COLOR,[bl]:n.SRC_ALPHA,[Nd]:n.SRC_ALPHA_SATURATE,[Dd]:n.DST_COLOR,[Ld]:n.DST_ALPHA,[Pd]:n.ONE_MINUS_SRC_COLOR,[Sl]:n.ONE_MINUS_SRC_ALPHA,[Ud]:n.ONE_MINUS_DST_COLOR,[Id]:n.ONE_MINUS_DST_ALPHA,[Od]:n.CONSTANT_COLOR,[Fd]:n.ONE_MINUS_CONSTANT_COLOR,[Bd]:n.CONSTANT_ALPHA,[kd]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(D,ht,ut,It,Ct,Qt,se,Pe,Xe,he){if(D===ui){d===!0&&(wt(n.BLEND),d=!1);return}if(d===!1&&(Ot(n.BLEND),d=!0),D!==Ed){if(D!==x||he!==N){if((y!==Li||v!==Li)&&(n.blendEquation(n.FUNC_ADD),y=Li,v=Li),he)switch(D){case fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oi:n.blendFunc(n.ONE,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ch:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ch:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,A=null,R=null,U=null,b.set(0,0,0),E=0,x=D,N=he}return}Ct=Ct||ht,Qt=Qt||ut,se=se||It,(ht!==y||Ct!==v)&&(n.blendEquationSeparate($[ht],$[Ct]),y=ht,v=Ct),(ut!==S||It!==A||Qt!==R||se!==U)&&(n.blendFuncSeparate(ot[ut],ot[It],ot[Qt],ot[se]),S=ut,A=It,R=Qt,U=se),(Pe.equals(b)===!1||Xe!==E)&&(n.blendColor(Pe.r,Pe.g,Pe.b,Xe),b.copy(Pe),E=Xe),x=D,N=!1}function At(D,ht){D.side===An?wt(n.CULL_FACE):Ot(n.CULL_FACE);let ut=D.side===Ge;ht&&(ut=!ut),yt(ut),D.blending===fi&&D.transparent===!1?Z(ui):Z(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);let It=D.stencilWrite;c.setTest(It),It&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),k(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ot(n.SAMPLE_ALPHA_TO_COVERAGE):wt(n.SAMPLE_ALPHA_TO_COVERAGE)}function yt(D){G!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),G=D)}function w(D){D!==Md?(Ot(n.CULL_FACE),D!==X&&(D===oh?n.cullFace(n.BACK):D===bd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):wt(n.CULL_FACE),X=D}function M(D){D!==L&&(J&&n.lineWidth(D),L=D)}function k(D,ht,ut){D?(Ot(n.POLYGON_OFFSET_FILL),(O!==ht||z!==ut)&&(n.polygonOffset(ht,ut),O=ht,z=ut)):wt(n.POLYGON_OFFSET_FILL)}function at(D){D?Ot(n.SCISSOR_TEST):wt(n.SCISSOR_TEST)}function Q(D){D===void 0&&(D=n.TEXTURE0+K-1),rt!==D&&(n.activeTexture(D),rt=D)}function j(D,ht,ut){ut===void 0&&(rt===null?ut=n.TEXTURE0+K-1:ut=rt);let It=gt[ut];It===void 0&&(It={type:void 0,texture:void 0},gt[ut]=It),(It.type!==D||It.texture!==ht)&&(rt!==ut&&(n.activeTexture(ut),rt=ut),n.bindTexture(D,ht||Dt[D]),It.type=D,It.texture=ht)}function Et(){let D=gt[rt];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function mt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function P(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){_t.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),_t.copy(D))}function Yt(D){Tt.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Tt.copy(D))}function Jt(D,ht){let ut=u.get(ht);ut===void 0&&(ut=new WeakMap,u.set(ht,ut));let It=ut.get(D);It===void 0&&(It=n.getUniformBlockIndex(ht,D.name),ut.set(D,It))}function Wt(D,ht){let It=u.get(ht).get(D);h.get(ht)!==It&&(n.uniformBlockBinding(ht,It,D.__bindingPointIndex),h.set(ht,It))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},rt=null,gt={},p={},g=new WeakMap,_=[],m=null,d=!1,x=null,y=null,S=null,A=null,v=null,R=null,U=null,b=new Ut(0,0,0),E=0,N=!1,G=null,X=null,L=null,O=null,z=null,_t.set(0,0,n.canvas.width,n.canvas.height),Tt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ot,disable:wt,bindFramebuffer:Ft,drawBuffers:I,useProgram:ct,setBlending:Z,setMaterial:At,setFlipSided:yt,setCullFace:w,setLineWidth:M,setPolygonOffset:k,setScissorTest:at,activeTexture:Q,bindTexture:j,unbindTexture:Et,compressedTexImage2D:mt,compressedTexImage3D:vt,texImage2D:dt,texImage3D:lt,updateUBOMapping:Jt,uniformBlockBinding:Wt,texStorage2D:P,texStorage3D:et,texSubImage2D:Lt,texSubImage3D:zt,compressedTexSubImage2D:tt,compressedTexSubImage3D:qt,scissor:Rt,viewport:Yt,reset:ft}}function vy(n,t,e,i,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return p?new OffscreenCanvas(w,M):La("canvas")}function _(w,M,k,at){let Q=1;if((w.width>at||w.height>at)&&(Q=at/Math.max(w.width,w.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let j=M?Pa:Math.floor,Et=j(Q*w.width),mt=j(Q*w.height);u===void 0&&(u=g(Et,mt));let vt=k?g(Et,mt):u;return vt.width=Et,vt.height=mt,vt.getContext("2d").drawImage(w,0,0,Et,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Et+"x"+mt+")."),vt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Cl(w.width)&&Cl(w.height)}function d(w){return o?!1:w.wrapS!==rn||w.wrapT!==rn||w.minFilter!==Ze&&w.minFilter!==fn}function x(w,M){return w.generateMipmaps&&M&&w.minFilter!==Ze&&w.minFilter!==fn}function y(w){n.generateMipmap(w)}function S(w,M,k,at,Q=!1){if(o===!1)return M;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=M;if(M===n.RED&&(k===n.FLOAT&&(j=n.R32F),k===n.HALF_FLOAT&&(j=n.R16F),k===n.UNSIGNED_BYTE&&(j=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.R8UI),k===n.UNSIGNED_SHORT&&(j=n.R16UI),k===n.UNSIGNED_INT&&(j=n.R32UI),k===n.BYTE&&(j=n.R8I),k===n.SHORT&&(j=n.R16I),k===n.INT&&(j=n.R32I)),M===n.RG&&(k===n.FLOAT&&(j=n.RG32F),k===n.HALF_FLOAT&&(j=n.RG16F),k===n.UNSIGNED_BYTE&&(j=n.RG8)),M===n.RGBA){let Et=Q?Ta:ae.getTransfer(at);k===n.FLOAT&&(j=n.RGBA32F),k===n.HALF_FLOAT&&(j=n.RGBA16F),k===n.UNSIGNED_BYTE&&(j=Et===fe?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function A(w,M,k){return x(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==Ze&&w.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function v(w){return w===Ze||w===fh||w===Ho?n.NEAREST:n.LINEAR}function R(w){let M=w.target;M.removeEventListener("dispose",R),b(M),M.isVideoTexture&&h.delete(M)}function U(w){let M=w.target;M.removeEventListener("dispose",U),N(M)}function b(w){let M=i.get(w);if(M.__webglInit===void 0)return;let k=w.source,at=f.get(k);if(at){let Q=at[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(w),Object.keys(at).length===0&&f.delete(k)}i.remove(w)}function E(w){let M=i.get(w);n.deleteTexture(M.__webglTexture);let k=w.source,at=f.get(k);delete at[M.__cacheKey],a.memory.textures--}function N(w){let M=w.texture,k=i.get(w),at=i.get(M);if(at.__webglTexture!==void 0&&(n.deleteTexture(at.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(k.__webglFramebuffer[Q]))for(let j=0;j<k.__webglFramebuffer[Q].length;j++)n.deleteFramebuffer(k.__webglFramebuffer[Q][j]);else n.deleteFramebuffer(k.__webglFramebuffer[Q]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[Q])}else{if(Array.isArray(k.__webglFramebuffer))for(let Q=0;Q<k.__webglFramebuffer.length;Q++)n.deleteFramebuffer(k.__webglFramebuffer[Q]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Q=0;Q<k.__webglColorRenderbuffer.length;Q++)k.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[Q]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,j=M.length;Q<j;Q++){let Et=i.get(M[Q]);Et.__webglTexture&&(n.deleteTexture(Et.__webglTexture),a.memory.textures--),i.remove(M[Q])}i.remove(M),i.remove(w)}let G=0;function X(){G=0}function L(){let w=G;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),G+=1,w}function O(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function z(w,M){let k=i.get(w);if(w.isVideoTexture&&At(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){let at=w.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(k,w,M);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function K(w,M){let k=i.get(w);if(w.version>0&&k.__version!==w.version){_t(k,w,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function J(w,M){let k=i.get(w);if(w.version>0&&k.__version!==w.version){_t(k,w,M);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function Y(w,M){let k=i.get(w);if(w.version>0&&k.__version!==w.version){Tt(k,w,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}let nt={[Tl]:n.REPEAT,[rn]:n.CLAMP_TO_EDGE,[Al]:n.MIRRORED_REPEAT},rt={[Ze]:n.NEAREST,[fh]:n.NEAREST_MIPMAP_NEAREST,[Ho]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[tp]:n.LINEAR_MIPMAP_NEAREST,[rr]:n.LINEAR_MIPMAP_LINEAR},gt={[fp]:n.NEVER,[yp]:n.ALWAYS,[dp]:n.LESS,[tf]:n.LEQUAL,[pp]:n.EQUAL,[_p]:n.GEQUAL,[mp]:n.GREATER,[gp]:n.NOTEQUAL};function q(w,M,k){if(k?(n.texParameteri(w,n.TEXTURE_WRAP_S,nt[M.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,nt[M.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,nt[M.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,rt[M.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,rt[M.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==rn||M.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,v(M.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,v(M.minFilter)),M.minFilter!==Ze&&M.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,gt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let at=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ze||M.minFilter!==Ho&&M.minFilter!==rr||M.type===hi&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===ar&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(w,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function it(w,M){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));let at=M.source,Q=f.get(at);Q===void 0&&(Q={},f.set(at,Q));let j=O(M);if(j!==w.__cacheKey){Q[j]===void 0&&(Q[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[j].usedTimes++;let Et=Q[w.__cacheKey];Et!==void 0&&(Q[w.__cacheKey].usedTimes--,Et.usedTimes===0&&E(M)),w.__cacheKey=j,w.__webglTexture=Q[j].texture}return k}function _t(w,M,k){let at=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(at=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(at=n.TEXTURE_3D);let Q=it(w,M),j=M.source;e.bindTexture(at,w.__webglTexture,n.TEXTURE0+k);let Et=i.get(j);if(j.version!==Et.__version||Q===!0){e.activeTexture(n.TEXTURE0+k);let mt=ae.getPrimaries(ae.workingColorSpace),vt=M.colorSpace===dn?null:ae.getPrimaries(M.colorSpace),Lt=M.colorSpace===dn||mt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let zt=d(M)&&m(M.image)===!1,tt=_(M.image,zt,!1,s.maxTextureSize);tt=yt(M,tt);let qt=m(tt)||o,P=r.convert(M.format,M.colorSpace),et=r.convert(M.type),dt=S(M.internalFormat,P,et,M.colorSpace,M.isVideoTexture);q(at,M,qt);let lt,Rt=M.mipmaps,Yt=o&&M.isVideoTexture!==!0&&dt!==Ku,Jt=Et.__version===void 0||Q===!0,Wt=A(M,tt,qt);if(M.isDepthTexture)dt=n.DEPTH_COMPONENT,o?M.type===hi?dt=n.DEPTH_COMPONENT32F:M.type===ci?dt=n.DEPTH_COMPONENT24:M.type===Di?dt=n.DEPTH24_STENCIL8:dt=n.DEPTH_COMPONENT16:M.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ui&&dt===n.DEPTH_COMPONENT&&M.type!==yc&&M.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ci,et=r.convert(M.type)),M.format===Ms&&dt===n.DEPTH_COMPONENT&&(dt=n.DEPTH_STENCIL,M.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Di,et=r.convert(M.type))),Jt&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,dt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,dt,tt.width,tt.height,0,P,et,null));else if(M.isDataTexture)if(Rt.length>0&&qt){Yt&&Jt&&e.texStorage2D(n.TEXTURE_2D,Wt,dt,Rt[0].width,Rt[0].height);for(let ft=0,D=Rt.length;ft<D;ft++)lt=Rt[ft],Yt?e.texSubImage2D(n.TEXTURE_2D,ft,0,0,lt.width,lt.height,P,et,lt.data):e.texImage2D(n.TEXTURE_2D,ft,dt,lt.width,lt.height,0,P,et,lt.data);M.generateMipmaps=!1}else Yt?(Jt&&e.texStorage2D(n.TEXTURE_2D,Wt,dt,tt.width,tt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt.width,tt.height,P,et,tt.data)):e.texImage2D(n.TEXTURE_2D,0,dt,tt.width,tt.height,0,P,et,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Yt&&Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Wt,dt,Rt[0].width,Rt[0].height,tt.depth);for(let ft=0,D=Rt.length;ft<D;ft++)lt=Rt[ft],M.format!==Rn?P!==null?Yt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,lt.width,lt.height,tt.depth,P,lt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,dt,lt.width,lt.height,tt.depth,0,lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,lt.width,lt.height,tt.depth,P,et,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,dt,lt.width,lt.height,tt.depth,0,P,et,lt.data)}else{Yt&&Jt&&e.texStorage2D(n.TEXTURE_2D,Wt,dt,Rt[0].width,Rt[0].height);for(let ft=0,D=Rt.length;ft<D;ft++)lt=Rt[ft],M.format!==Rn?P!==null?Yt?e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,lt.width,lt.height,P,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,dt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage2D(n.TEXTURE_2D,ft,0,0,lt.width,lt.height,P,et,lt.data):e.texImage2D(n.TEXTURE_2D,ft,dt,lt.width,lt.height,0,P,et,lt.data)}else if(M.isDataArrayTexture)Yt?(Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Wt,dt,tt.width,tt.height,tt.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,P,et,tt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,dt,tt.width,tt.height,tt.depth,0,P,et,tt.data);else if(M.isData3DTexture)Yt?(Jt&&e.texStorage3D(n.TEXTURE_3D,Wt,dt,tt.width,tt.height,tt.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,P,et,tt.data)):e.texImage3D(n.TEXTURE_3D,0,dt,tt.width,tt.height,tt.depth,0,P,et,tt.data);else if(M.isFramebufferTexture){if(Jt)if(Yt)e.texStorage2D(n.TEXTURE_2D,Wt,dt,tt.width,tt.height);else{let ft=tt.width,D=tt.height;for(let ht=0;ht<Wt;ht++)e.texImage2D(n.TEXTURE_2D,ht,dt,ft,D,0,P,et,null),ft>>=1,D>>=1}}else if(Rt.length>0&&qt){Yt&&Jt&&e.texStorage2D(n.TEXTURE_2D,Wt,dt,Rt[0].width,Rt[0].height);for(let ft=0,D=Rt.length;ft<D;ft++)lt=Rt[ft],Yt?e.texSubImage2D(n.TEXTURE_2D,ft,0,0,P,et,lt):e.texImage2D(n.TEXTURE_2D,ft,dt,P,et,lt);M.generateMipmaps=!1}else Yt?(Jt&&e.texStorage2D(n.TEXTURE_2D,Wt,dt,tt.width,tt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,P,et,tt)):e.texImage2D(n.TEXTURE_2D,0,dt,P,et,tt);x(M,qt)&&y(at),Et.__version=j.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Tt(w,M,k){if(M.image.length!==6)return;let at=it(w,M),Q=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+k);let j=i.get(Q);if(Q.version!==j.__version||at===!0){e.activeTexture(n.TEXTURE0+k);let Et=ae.getPrimaries(ae.workingColorSpace),mt=M.colorSpace===dn?null:ae.getPrimaries(M.colorSpace),vt=M.colorSpace===dn||Et===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Lt=M.isCompressedTexture||M.image[0].isCompressedTexture,zt=M.image[0]&&M.image[0].isDataTexture,tt=[];for(let ft=0;ft<6;ft++)!Lt&&!zt?tt[ft]=_(M.image[ft],!1,!0,s.maxCubemapSize):tt[ft]=zt?M.image[ft].image:M.image[ft],tt[ft]=yt(M,tt[ft]);let qt=tt[0],P=m(qt)||o,et=r.convert(M.format,M.colorSpace),dt=r.convert(M.type),lt=S(M.internalFormat,et,dt,M.colorSpace),Rt=o&&M.isVideoTexture!==!0,Yt=j.__version===void 0||at===!0,Jt=A(M,qt,P);q(n.TEXTURE_CUBE_MAP,M,P);let Wt;if(Lt){Rt&&Yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Jt,lt,qt.width,qt.height);for(let ft=0;ft<6;ft++){Wt=tt[ft].mipmaps;for(let D=0;D<Wt.length;D++){let ht=Wt[D];M.format!==Rn?et!==null?Rt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,0,0,ht.width,ht.height,et,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,lt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,0,0,ht.width,ht.height,et,dt,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D,lt,ht.width,ht.height,0,et,dt,ht.data)}}}else{Wt=M.mipmaps,Rt&&Yt&&(Wt.length>0&&Jt++,e.texStorage2D(n.TEXTURE_CUBE_MAP,Jt,lt,tt[0].width,tt[0].height));for(let ft=0;ft<6;ft++)if(zt){Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,tt[ft].width,tt[ft].height,et,dt,tt[ft].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,lt,tt[ft].width,tt[ft].height,0,et,dt,tt[ft].data);for(let D=0;D<Wt.length;D++){let ut=Wt[D].image[ft].image;Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,0,0,ut.width,ut.height,et,dt,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,lt,ut.width,ut.height,0,et,dt,ut.data)}}else{Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,et,dt,tt[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,lt,et,dt,tt[ft]);for(let D=0;D<Wt.length;D++){let ht=Wt[D];Rt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,0,0,et,dt,ht.image[ft]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,D+1,lt,et,dt,ht.image[ft])}}}x(M,P)&&y(n.TEXTURE_CUBE_MAP),j.__version=Q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function bt(w,M,k,at,Q,j){let Et=r.convert(k.format,k.colorSpace),mt=r.convert(k.type),vt=S(k.internalFormat,Et,mt,k.colorSpace);if(!i.get(M).__hasExternalTextures){let zt=Math.max(1,M.width>>j),tt=Math.max(1,M.height>>j);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,vt,zt,tt,M.depth,0,Et,mt,null):e.texImage2D(Q,j,vt,zt,tt,0,Et,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),Z(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,Q,i.get(k).__webglTexture,0,ot(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,at,Q,i.get(k).__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(w,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,w),M.depthBuffer&&!M.stencilBuffer){let at=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||Z(M)){let Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===hi?at=n.DEPTH_COMPONENT32F:Q.type===ci&&(at=n.DEPTH_COMPONENT24));let j=ot(M);Z(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,at,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,j,at,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,at,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(M.depthBuffer&&M.stencilBuffer){let at=ot(M);k&&Z(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,n.DEPTH24_STENCIL8,M.width,M.height):Z(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{let at=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<at.length;Q++){let j=at[Q],Et=r.convert(j.format,j.colorSpace),mt=r.convert(j.type),vt=S(j.internalFormat,Et,mt,j.colorSpace),Lt=ot(M);k&&Z(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,vt,M.width,M.height):Z(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,vt,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,vt,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);let at=i.get(M.depthTexture).__webglTexture,Q=ot(M);if(M.depthTexture.format===Ui)Z(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0);else if(M.depthTexture.format===Ms)Z(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function wt(w){let M=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ot(M.__webglFramebuffer,w)}else if(k){M.__webglDepthbuffer=[];for(let at=0;at<6;at++)e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[at]),M.__webglDepthbuffer[at]=n.createRenderbuffer(),Dt(M.__webglDepthbuffer[at],w,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),Dt(M.__webglDepthbuffer,w,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(w,M,k){let at=i.get(w);M!==void 0&&bt(at.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&wt(w)}function I(w){let M=w.texture,k=i.get(w),at=i.get(M);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture()),at.__version=M.version,a.memory.textures++);let Q=w.isWebGLCubeRenderTarget===!0,j=w.isWebGLMultipleRenderTargets===!0,Et=m(w)||o;if(Q){k.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(o&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[mt]=[];for(let vt=0;vt<M.mipmaps.length;vt++)k.__webglFramebuffer[mt][vt]=n.createFramebuffer()}else k.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let mt=0;mt<M.mipmaps.length;mt++)k.__webglFramebuffer[mt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(j)if(s.drawBuffers){let mt=w.texture;for(let vt=0,Lt=mt.length;vt<Lt;vt++){let zt=i.get(mt[vt]);zt.__webglTexture===void 0&&(zt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Z(w)===!1){let mt=j?M:[M];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let vt=0;vt<mt.length;vt++){let Lt=mt[vt];k.__webglColorRenderbuffer[vt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[vt]);let zt=r.convert(Lt.format,Lt.colorSpace),tt=r.convert(Lt.type),qt=S(Lt.internalFormat,zt,tt,Lt.colorSpace,w.isXRRenderTarget===!0),P=ot(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,P,qt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,k.__webglColorRenderbuffer[vt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Dt(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),q(n.TEXTURE_CUBE_MAP,M,Et);for(let mt=0;mt<6;mt++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)bt(k.__webglFramebuffer[mt][vt],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,vt);else bt(k.__webglFramebuffer[mt],w,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);x(M,Et)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(j){let mt=w.texture;for(let vt=0,Lt=mt.length;vt<Lt;vt++){let zt=mt[vt],tt=i.get(zt);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),q(n.TEXTURE_2D,zt,Et),bt(k.__webglFramebuffer,w,zt,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,0),x(zt,Et)&&y(n.TEXTURE_2D)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?mt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(mt,at.__webglTexture),q(mt,M,Et),o&&M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)bt(k.__webglFramebuffer[vt],w,M,n.COLOR_ATTACHMENT0,mt,vt);else bt(k.__webglFramebuffer,w,M,n.COLOR_ATTACHMENT0,mt,0);x(M,Et)&&y(mt),e.unbindTexture()}w.depthBuffer&&wt(w)}function ct(w){let M=m(w)||o,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let at=0,Q=k.length;at<Q;at++){let j=k[at];if(x(j,M)){let Et=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,mt=i.get(j).__webglTexture;e.bindTexture(Et,mt),y(Et),e.unbindTexture()}}}function $(w){if(o&&w.samples>0&&Z(w)===!1){let M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,at=w.height,Q=n.COLOR_BUFFER_BIT,j=[],Et=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(w),vt=w.isWebGLMultipleRenderTargets===!0;if(vt)for(let Lt=0;Lt<M.length;Lt++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Lt=0;Lt<M.length;Lt++){j.push(n.COLOR_ATTACHMENT0+Lt),w.depthBuffer&&j.push(Et);let zt=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(zt===!1&&(w.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),vt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[Lt]),zt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Et]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Et])),vt){let tt=i.get(M[Lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,k,at,0,0,k,at,Q,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),vt)for(let Lt=0;Lt<M.length;Lt++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,mt.__webglColorRenderbuffer[Lt]);let zt=i.get(M[Lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}}function ot(w){return Math.min(s.maxSamples,w.samples)}function Z(w){let M=i.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function At(w){let M=a.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function yt(w,M){let k=w.colorSpace,at=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Rl||k!==Jn&&k!==dn&&(ae.getTransfer(k)===fe?o===!1?t.has("EXT_sRGB")===!0&&at===Rn?(w.format=Rl,w.minFilter=fn,w.generateMipmaps=!1):M=Ia.sRGBToLinear(M):(at!==Rn||Q!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=L,this.resetTextureUnits=X,this.setTexture2D=z,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=Ft,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Z}function My(n,t,e){let i=e.isWebGL2;function s(r,a=dn){let o,l=ae.getTransfer(a);if(r===pi)return n.UNSIGNED_BYTE;if(r===qu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Yu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===ep)return n.BYTE;if(r===np)return n.SHORT;if(r===yc)return n.UNSIGNED_SHORT;if(r===Xu)return n.INT;if(r===ci)return n.UNSIGNED_INT;if(r===hi)return n.FLOAT;if(r===ar)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ip)return n.ALPHA;if(r===Rn)return n.RGBA;if(r===sp)return n.LUMINANCE;if(r===rp)return n.LUMINANCE_ALPHA;if(r===Ui)return n.DEPTH_COMPONENT;if(r===Ms)return n.DEPTH_STENCIL;if(r===Rl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ap)return n.RED;if(r===$u)return n.RED_INTEGER;if(r===op)return n.RG;if(r===Zu)return n.RG_INTEGER;if(r===Ju)return n.RGBA_INTEGER;if(r===Vo||r===Go||r===Wo||r===Xo)if(l===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Vo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Vo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Go)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dh||r===ph||r===mh||r===gh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===dh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ph)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ku)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===_h||r===yh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===_h)return l===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===yh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xh||r===vh||r===Mh||r===bh||r===Sh||r===Eh||r===wh||r===Th||r===Ah||r===Rh||r===Ch||r===Ph||r===Lh||r===Ih)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===xh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Mh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Eh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Th)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ah)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ch)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ph)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Lh)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ih)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qo||r===Dh||r===Uh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===qo)return l===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Uh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lp||r===Nh||r===Oh||r===Fh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===qo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Nh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Oh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Di?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Vl=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Je=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},by={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(by)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Je;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Gl=class extends Fn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,_=e.getContextAttributes(),m=null,d=null,x=[],y=[],S=new st,A=null,v=new Ve;v.layers.enable(1),v.viewport=new me;let R=new Ve;R.layers.enable(2),R.viewport=new me;let U=[v,R],b=new Vl;b.layers.enable(1),b.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let it=x[q];return it===void 0&&(it=new er,x[q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(q){let it=x[q];return it===void 0&&(it=new er,x[q]=it),it.getGripSpace()},this.getHand=function(q){let it=x[q];return it===void 0&&(it=new er,x[q]=it),it.getHandSpace()};function G(q){let it=y.indexOf(q.inputSource);if(it===-1)return;let _t=x[it];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||a),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",L);for(let q=0;q<x.length;q++){let it=y[q];it!==null&&(y[q]=null,x[q].disconnect(it))}E=null,N=null,t.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let it={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Kn(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let it=null,_t=null,Tt=null;_.depth&&(Tt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=_.stencil?Ms:Ui,_t=_.stencil?Di:ci);let bt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Kn(f.textureWidth,f.textureHeight,{format:Rn,type:pi,depthTexture:new Va(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Dt=t.properties.get(d);Dt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),gt.setContext(s),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(q){for(let it=0;it<q.removed.length;it++){let _t=q.removed[it],Tt=y.indexOf(_t);Tt>=0&&(y[Tt]=null,x[Tt].disconnect(_t))}for(let it=0;it<q.added.length;it++){let _t=q.added[it],Tt=y.indexOf(_t);if(Tt===-1){for(let Dt=0;Dt<x.length;Dt++)if(Dt>=y.length){y.push(_t),Tt=Dt;break}else if(y[Dt]===null){y[Dt]=_t,Tt=Dt;break}if(Tt===-1)break}let bt=x[Tt];bt&&bt.connect(_t)}}let O=new C,z=new C;function K(q,it,_t){O.setFromMatrixPosition(it.matrixWorld),z.setFromMatrixPosition(_t.matrixWorld);let Tt=O.distanceTo(z),bt=it.projectionMatrix.elements,Dt=_t.projectionMatrix.elements,Ot=bt[14]/(bt[10]-1),wt=bt[14]/(bt[10]+1),Ft=(bt[9]+1)/bt[5],I=(bt[9]-1)/bt[5],ct=(bt[8]-1)/bt[0],$=(Dt[8]+1)/Dt[0],ot=Ot*ct,Z=Ot*$,At=Tt/(-ct+$),yt=At*-ct;it.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(yt),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let w=Ot+At,M=wt+At,k=ot-yt,at=Z+(Tt-yt),Q=Ft*wt/M*w,j=I*wt/M*w;q.projectionMatrix.makePerspective(k,at,Q,j,w,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function J(q,it){it===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(it.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;b.near=R.near=v.near=q.near,b.far=R.far=v.far=q.far,(E!==b.near||N!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,N=b.far);let it=q.parent,_t=b.cameras;J(b,it);for(let Tt=0;Tt<_t.length;Tt++)J(_t[Tt],it);_t.length===2?K(b,v,R):b.projectionMatrix.copy(v.projectionMatrix),Y(q,b,it)};function Y(q,it,_t){_t===null?q.matrix.copy(it.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(it.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=or*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let nt=null;function rt(q,it){if(h=it.getViewerPose(c||a),g=it,h!==null){let _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let Tt=!1;_t.length!==b.cameras.length&&(b.cameras.length=0,Tt=!0);for(let bt=0;bt<_t.length;bt++){let Dt=_t[bt],Ot=null;if(p!==null)Ot=p.getViewport(Dt);else{let Ft=u.getViewSubImage(f,Dt);Ot=Ft.viewport,bt===0&&(t.setRenderTargetTextures(d,Ft.colorTexture,f.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(d))}let wt=U[bt];wt===void 0&&(wt=new Ve,wt.layers.enable(bt),wt.viewport=new me,U[bt]=wt),wt.matrix.fromArray(Dt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Dt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),bt===0&&(b.matrix.copy(wt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Tt===!0&&b.cameras.push(wt)}}for(let _t=0;_t<x.length;_t++){let Tt=y[_t],bt=x[_t];Tt!==null&&bt!==void 0&&bt.update(Tt,it,c||a)}nt&&nt(q,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}let gt=new rf;gt.setAnimationLoop(rt),this.setAnimationLoop=function(q){nt=q},this.dispose=function(){}}};function Sy(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,sf(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,x,y,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,x,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ge&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ge&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let x=t.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ge&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let x=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ey(n,t,e,i){let s={},r={},a=[],o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,y){let S=y.program;i.uniformBlockBinding(x,S)}function c(x,y){let S=s[x.id];S===void 0&&(g(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",m));let A=y.program;i.updateUBOMapping(x,A);let v=t.render.frame;r[x.id]!==v&&(f(x),r[x.id]=v)}function h(x){let y=u();x.__bindingPointIndex=y;let S=n.createBuffer(),A=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let y=s[x.id],S=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let v=0,R=S.length;v<R;v++){let U=Array.isArray(S[v])?S[v]:[S[v]];for(let b=0,E=U.length;b<E;b++){let N=U[b];if(p(N,v,b,A)===!0){let G=N.__offset,X=Array.isArray(N.value)?N.value:[N.value],L=0;for(let O=0;O<X.length;O++){let z=X[O],K=_(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,G+L,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,y,S,A){let v=x.value,R=y+"_"+S;if(A[R]===void 0)return typeof v=="number"||typeof v=="boolean"?A[R]=v:A[R]=v.clone(),!0;{let U=A[R];if(typeof v=="number"||typeof v=="boolean"){if(U!==v)return A[R]=v,!0}else if(U.equals(v)===!1)return U.copy(v),!0}return!1}function g(x){let y=x.uniforms,S=0,A=16;for(let R=0,U=y.length;R<U;R++){let b=Array.isArray(y[R])?y[R]:[y[R]];for(let E=0,N=b.length;E<N;E++){let G=b[E],X=Array.isArray(G.value)?G.value:[G.value];for(let L=0,O=X.length;L<O;L++){let z=X[L],K=_(z),J=S%A;J!==0&&A-J<K.boundary&&(S+=A-J),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=K.storage}}}let v=S%A;return v>0&&(S+=A-v),x.__size=S,x.__cache={},this}function _(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){let y=x.target;y.removeEventListener("dispose",m);let S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var hr=class{constructor(t={}){let{canvas:e=Dp(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,d=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this._useLegacyLights=!1,this.toneMapping=di,this.toneMappingExposure=1;let y=this,S=!1,A=0,v=0,R=null,U=-1,b=null,E=new me,N=new me,G=null,X=new Ut(0),L=0,O=e.width,z=e.height,K=1,J=null,Y=null,nt=new me(0,0,O,z),rt=new me(0,0,O,z),gt=!1,q=new cr,it=!1,_t=!1,Tt=null,bt=new oe,Dt=new st,Ot=new C,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ft(){return R===null?K:1}let I=i;function ct(T,F){for(let V=0;V<T.length;V++){let W=T[V],H=e.getContext(W,F);if(H!==null)return H}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gc}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",ht,!1),I===null){let F=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&F.shift(),I=ct(F,T),I===null)throw ct(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,ot,Z,At,yt,w,M,k,at,Q,j,Et,mt,vt,Lt,zt,tt,qt,P,et,dt,lt,Rt,Yt;function Jt(){$=new Gg(I),ot=new Fg(I,$,t),$.init(ot),lt=new My(I,$,ot),Z=new xy(I,$,ot),At=new qg(I),yt=new oy,w=new vy(I,$,Z,yt,ot,lt,At),M=new kg(y),k=new Vg(y),at=new tm(I,ot),Rt=new Ng(I,$,at,ot),Q=new Wg(I,at,At,Rt),j=new Jg(I,Q,at,At),P=new Zg(I,ot,w),zt=new Bg(yt),Et=new ay(y,M,k,$,ot,Rt,zt),mt=new Sy(y,yt),vt=new cy,Lt=new my($,ot),qt=new Ug(y,M,k,Z,j,f,l),tt=new yy(y,j,ot),Yt=new Ey(I,At,ot,Z),et=new Og(I,$,At,ot),dt=new Xg(I,$,At,ot),At.programs=Et.programs,y.capabilities=ot,y.extensions=$,y.properties=yt,y.renderLists=vt,y.shadowMap=tt,y.state=Z,y.info=At}Jt();let Wt=new Gl(y,I);this.xr=Wt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(O,z,!1))},this.getSize=function(T){return T.set(O,z)},this.setSize=function(T,F,V=!0){if(Wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,z=F,e.width=Math.floor(T*K),e.height=Math.floor(F*K),V===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(O*K,z*K).floor()},this.setDrawingBufferSize=function(T,F,V){O=T,z=F,K=V,e.width=Math.floor(T*V),e.height=Math.floor(F*V),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(nt)},this.setViewport=function(T,F,V,W){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,F,V,W),Z.viewport(E.copy(nt).multiplyScalar(K).floor())},this.getScissor=function(T){return T.copy(rt)},this.setScissor=function(T,F,V,W){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,F,V,W),Z.scissor(N.copy(rt).multiplyScalar(K).floor())},this.getScissorTest=function(){return gt},this.setScissorTest=function(T){Z.setScissorTest(gt=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(T=!0,F=!0,V=!0){let W=0;if(T){let H=!1;if(R!==null){let Mt=R.texture.format;H=Mt===Ju||Mt===Zu||Mt===$u}if(H){let Mt=R.texture.type,Pt=Mt===pi||Mt===ci||Mt===yc||Mt===Di||Mt===qu||Mt===Yu,Nt=qt.getClearColor(),Bt=qt.getClearAlpha(),Xt=Nt.r,Ht=Nt.g,Vt=Nt.b;Pt?(p[0]=Xt,p[1]=Ht,p[2]=Vt,p[3]=Bt,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=Xt,g[1]=Ht,g[2]=Vt,g[3]=Bt,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}F&&(W|=I.DEPTH_BUFFER_BIT),V&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),vt.dispose(),Lt.dispose(),yt.dispose(),M.dispose(),k.dispose(),j.dispose(),Rt.dispose(),Yt.dispose(),Et.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Xe),Wt.removeEventListener("sessionend",he),Tt&&(Tt.dispose(),Tt=null),qe.stop()};function ft(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let T=At.autoReset,F=tt.enabled,V=tt.autoUpdate,W=tt.needsUpdate,H=tt.type;Jt(),At.autoReset=T,tt.enabled=F,tt.autoUpdate=V,tt.needsUpdate=W,tt.type=H}function ht(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ut(T){let F=T.target;F.removeEventListener("dispose",ut),It(F)}function It(T){Ct(T),yt.remove(T)}function Ct(T){let F=yt.get(T).programs;F!==void 0&&(F.forEach(function(V){Et.releaseProgram(V)}),T.isShaderMaterial&&Et.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,V,W,H,Mt){F===null&&(F=wt);let Pt=H.isMesh&&H.matrixWorld.determinant()<0,Nt=_d(T,F,V,W,H);Z.setMaterial(W,Pt);let Bt=V.index,Xt=1;if(W.wireframe===!0){if(Bt=Q.getWireframeAttribute(V),Bt===void 0)return;Xt=2}let Ht=V.drawRange,Vt=V.attributes.position,be=Ht.start*Xt,en=(Ht.start+Ht.count)*Xt;Mt!==null&&(be=Math.max(be,Mt.start*Xt),en=Math.min(en,(Mt.start+Mt.count)*Xt)),Bt!==null?(be=Math.max(be,0),en=Math.min(en,Bt.count)):Vt!=null&&(be=Math.max(be,0),en=Math.min(en,Vt.count));let Le=en-be;if(Le<0||Le===1/0)return;Rt.setup(H,W,Nt,V,Bt);let Vn,_e=et;if(Bt!==null&&(Vn=at.get(Bt),_e=dt,_e.setIndex(Vn)),H.isMesh)W.wireframe===!0?(Z.setLineWidth(W.wireframeLinewidth*Ft()),_e.setMode(I.LINES)):_e.setMode(I.TRIANGLES);else if(H.isLine){let $t=W.linewidth;$t===void 0&&($t=1),Z.setLineWidth($t*Ft()),H.isLineSegments?_e.setMode(I.LINES):H.isLineLoop?_e.setMode(I.LINE_LOOP):_e.setMode(I.LINE_STRIP)}else H.isPoints?_e.setMode(I.POINTS):H.isSprite&&_e.setMode(I.TRIANGLES);if(H.isBatchedMesh)_e.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)_e.renderInstances(be,Le,H.count);else if(V.isInstancedBufferGeometry){let $t=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Fo=Math.min(V.instanceCount,$t);_e.renderInstances(be,Le,Fo)}else _e.render(be,Le)};function Qt(T,F,V){T.transparent===!0&&T.side===An&&T.forceSinglePass===!1?(T.side=Ge,T.needsUpdate=!0,qr(T,F,V),T.side=mi,T.needsUpdate=!0,qr(T,F,V),T.side=An):qr(T,F,V)}this.compile=function(T,F,V=null){V===null&&(V=T),m=Lt.get(V),m.init(),x.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==V&&T.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(y._useLegacyLights);let W=new Set;return T.traverse(function(H){let Mt=H.material;if(Mt)if(Array.isArray(Mt))for(let Pt=0;Pt<Mt.length;Pt++){let Nt=Mt[Pt];Qt(Nt,V,H),W.add(Nt)}else Qt(Mt,V,H),W.add(Mt)}),x.pop(),m=null,W},this.compileAsync=function(T,F,V=null){let W=this.compile(T,F,V);return new Promise(H=>{function Mt(){if(W.forEach(function(Pt){yt.get(Pt).currentProgram.isReady()&&W.delete(Pt)}),W.size===0){H(T);return}setTimeout(Mt,10)}$.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let se=null;function Pe(T){se&&se(T)}function Xe(){qe.stop()}function he(){qe.start()}let qe=new rf;qe.setAnimationLoop(Pe),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(T){se=T,Wt.setAnimationLoop(T),T===null?qe.stop():qe.start()},Wt.addEventListener("sessionstart",Xe),Wt.addEventListener("sessionend",he),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(F),F=Wt.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,F,R),m=Lt.get(T,x.length),m.init(),x.push(m),bt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(bt),_t=this.localClippingEnabled,it=zt.init(this.clippingPlanes,_t),_=vt.get(T,d.length),_.init(),d.push(_),Nn(T,F,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(J,Y),this.info.render.frame++,it===!0&&zt.beginShadows();let V=m.state.shadowsArray;if(tt.render(V,T,F),it===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),qt.render(_,T),m.setupLights(y._useLegacyLights),F.isArrayCamera){let W=F.cameras;for(let H=0,Mt=W.length;H<Mt;H++){let Pt=W[H];eh(_,T,Pt,Pt.viewport)}}else eh(_,T,F);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,F),Rt.resetDefaultState(),U=-1,b=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Nn(T,F,V,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){W&&Ot.setFromMatrixPosition(T.matrixWorld).applyMatrix4(bt);let Pt=j.update(T),Nt=T.material;Nt.visible&&_.push(T,Pt,Nt,V,Ot.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){let Pt=j.update(T),Nt=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ot.copy(T.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ot.copy(Pt.boundingSphere.center)),Ot.applyMatrix4(T.matrixWorld).applyMatrix4(bt)),Array.isArray(Nt)){let Bt=Pt.groups;for(let Xt=0,Ht=Bt.length;Xt<Ht;Xt++){let Vt=Bt[Xt],be=Nt[Vt.materialIndex];be&&be.visible&&_.push(T,Pt,be,V,Ot.z,Vt)}}else Nt.visible&&_.push(T,Pt,Nt,V,Ot.z,null)}}let Mt=T.children;for(let Pt=0,Nt=Mt.length;Pt<Nt;Pt++)Nn(Mt[Pt],F,V,W)}function eh(T,F,V,W){let H=T.opaque,Mt=T.transmissive,Pt=T.transparent;m.setupLightsView(V),it===!0&&zt.setGlobalState(y.clippingPlanes,V),Mt.length>0&&gd(H,Mt,F,V),W&&Z.viewport(E.copy(W)),H.length>0&&Xr(H,F,V),Mt.length>0&&Xr(Mt,F,V),Pt.length>0&&Xr(Pt,F,V),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function gd(T,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let Mt=ot.isWebGL2;Tt===null&&(Tt=new Kn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?ar:pi,minFilter:rr,samples:Mt?4:0})),y.getDrawingBufferSize(Dt),Mt?Tt.setSize(Dt.x,Dt.y):Tt.setSize(Pa(Dt.x),Pa(Dt.y));let Pt=y.getRenderTarget();y.setRenderTarget(Tt),y.getClearColor(X),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let Nt=y.toneMapping;y.toneMapping=di,Xr(T,V,W),w.updateMultisampleRenderTarget(Tt),w.updateRenderTargetMipmap(Tt);let Bt=!1;for(let Xt=0,Ht=F.length;Xt<Ht;Xt++){let Vt=F[Xt],be=Vt.object,en=Vt.geometry,Le=Vt.material,Vn=Vt.group;if(Le.side===An&&be.layers.test(W.layers)){let _e=Le.side;Le.side=Ge,Le.needsUpdate=!0,nh(be,V,W,en,Le,Vn),Le.side=_e,Le.needsUpdate=!0,Bt=!0}}Bt===!0&&(w.updateMultisampleRenderTarget(Tt),w.updateRenderTargetMipmap(Tt)),y.setRenderTarget(Pt),y.setClearColor(X,L),y.toneMapping=Nt}function Xr(T,F,V){let W=F.isScene===!0?F.overrideMaterial:null;for(let H=0,Mt=T.length;H<Mt;H++){let Pt=T[H],Nt=Pt.object,Bt=Pt.geometry,Xt=W===null?Pt.material:W,Ht=Pt.group;Nt.layers.test(V.layers)&&nh(Nt,F,V,Bt,Xt,Ht)}}function nh(T,F,V,W,H,Mt){T.onBeforeRender(y,F,V,W,H,Mt),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(y,F,V,W,T,Mt),H.transparent===!0&&H.side===An&&H.forceSinglePass===!1?(H.side=Ge,H.needsUpdate=!0,y.renderBufferDirect(V,F,W,H,T,Mt),H.side=mi,H.needsUpdate=!0,y.renderBufferDirect(V,F,W,H,T,Mt),H.side=An):y.renderBufferDirect(V,F,W,H,T,Mt),T.onAfterRender(y,F,V,W,H,Mt)}function qr(T,F,V){F.isScene!==!0&&(F=wt);let W=yt.get(T),H=m.state.lights,Mt=m.state.shadowsArray,Pt=H.state.version,Nt=Et.getParameters(T,H.state,Mt,F,V),Bt=Et.getProgramCacheKey(Nt),Xt=W.programs;W.environment=T.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(T.isMeshStandardMaterial?k:M).get(T.envMap||W.environment),Xt===void 0&&(T.addEventListener("dispose",ut),Xt=new Map,W.programs=Xt);let Ht=Xt.get(Bt);if(Ht!==void 0){if(W.currentProgram===Ht&&W.lightsStateVersion===Pt)return sh(T,Nt),Ht}else Nt.uniforms=Et.getUniforms(T),T.onBuild(V,Nt,y),T.onBeforeCompile(Nt,y),Ht=Et.acquireProgram(Nt,Bt),Xt.set(Bt,Ht),W.uniforms=Nt.uniforms;let Vt=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Vt.clippingPlanes=zt.uniform),sh(T,Nt),W.needsLights=xd(T),W.lightsStateVersion=Pt,W.needsLights&&(Vt.ambientLightColor.value=H.state.ambient,Vt.lightProbe.value=H.state.probe,Vt.directionalLights.value=H.state.directional,Vt.directionalLightShadows.value=H.state.directionalShadow,Vt.spotLights.value=H.state.spot,Vt.spotLightShadows.value=H.state.spotShadow,Vt.rectAreaLights.value=H.state.rectArea,Vt.ltc_1.value=H.state.rectAreaLTC1,Vt.ltc_2.value=H.state.rectAreaLTC2,Vt.pointLights.value=H.state.point,Vt.pointLightShadows.value=H.state.pointShadow,Vt.hemisphereLights.value=H.state.hemi,Vt.directionalShadowMap.value=H.state.directionalShadowMap,Vt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Vt.spotShadowMap.value=H.state.spotShadowMap,Vt.spotLightMatrix.value=H.state.spotLightMatrix,Vt.spotLightMap.value=H.state.spotLightMap,Vt.pointShadowMap.value=H.state.pointShadowMap,Vt.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Ht,W.uniformsList=null,Ht}function ih(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=ys.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function sh(T,F){let V=yt.get(T);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function _d(T,F,V,W,H){F.isScene!==!0&&(F=wt),w.resetTextureUnits();let Mt=F.fog,Pt=W.isMeshStandardMaterial?F.environment:null,Nt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Jn,Bt=(W.isMeshStandardMaterial?k:M).get(W.envMap||Pt),Xt=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ht=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Vt=!!V.morphAttributes.position,be=!!V.morphAttributes.normal,en=!!V.morphAttributes.color,Le=di;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Le=y.toneMapping);let Vn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_e=Vn!==void 0?Vn.length:0,$t=yt.get(W),Fo=m.state.lights;if(it===!0&&(_t===!0||T!==b)){let hn=T===b&&W.id===U;zt.setState(W,T,hn)}let ve=!1;W.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Fo.state.version||$t.outputColorSpace!==Nt||H.isBatchedMesh&&$t.batching===!1||!H.isBatchedMesh&&$t.batching===!0||H.isInstancedMesh&&$t.instancing===!1||!H.isInstancedMesh&&$t.instancing===!0||H.isSkinnedMesh&&$t.skinning===!1||!H.isSkinnedMesh&&$t.skinning===!0||H.isInstancedMesh&&$t.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&$t.instancingColor===!1&&H.instanceColor!==null||$t.envMap!==Bt||W.fog===!0&&$t.fog!==Mt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==zt.numPlanes||$t.numIntersection!==zt.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==Ht||$t.morphTargets!==Vt||$t.morphNormals!==be||$t.morphColors!==en||$t.toneMapping!==Le||ot.isWebGL2===!0&&$t.morphTargetsCount!==_e)&&(ve=!0):(ve=!0,$t.__version=W.version);let Ei=$t.currentProgram;ve===!0&&(Ei=qr(W,F,H));let rh=!1,Ws=!1,Bo=!1,ke=Ei.getUniforms(),wi=$t.uniforms;if(Z.useProgram(Ei.program)&&(rh=!0,Ws=!0,Bo=!0),W.id!==U&&(U=W.id,Ws=!0),rh||b!==T){ke.setValue(I,"projectionMatrix",T.projectionMatrix),ke.setValue(I,"viewMatrix",T.matrixWorldInverse);let hn=ke.map.cameraPosition;hn!==void 0&&hn.setValue(I,Ot.setFromMatrixPosition(T.matrixWorld)),ot.logarithmicDepthBuffer&&ke.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ke.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Ws=!0,Bo=!0)}if(H.isSkinnedMesh){ke.setOptional(I,H,"bindMatrix"),ke.setOptional(I,H,"bindMatrixInverse");let hn=H.skeleton;hn&&(ot.floatVertexTextures?(hn.boneTexture===null&&hn.computeBoneTexture(),ke.setValue(I,"boneTexture",hn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(ke.setOptional(I,H,"batchingTexture"),ke.setValue(I,"batchingTexture",H._matricesTexture,w));let ko=V.morphAttributes;if((ko.position!==void 0||ko.normal!==void 0||ko.color!==void 0&&ot.isWebGL2===!0)&&P.update(H,V,Ei),(Ws||$t.receiveShadow!==H.receiveShadow)&&($t.receiveShadow=H.receiveShadow,ke.setValue(I,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(wi.envMap.value=Bt,wi.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Ws&&(ke.setValue(I,"toneMappingExposure",y.toneMappingExposure),$t.needsLights&&yd(wi,Bo),Mt&&W.fog===!0&&mt.refreshFogUniforms(wi,Mt),mt.refreshMaterialUniforms(wi,W,K,z,Tt),ys.upload(I,ih($t),wi,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ys.upload(I,ih($t),wi,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ke.setValue(I,"center",H.center),ke.setValue(I,"modelViewMatrix",H.modelViewMatrix),ke.setValue(I,"normalMatrix",H.normalMatrix),ke.setValue(I,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let hn=W.uniformsGroups;for(let zo=0,vd=hn.length;zo<vd;zo++)if(ot.isWebGL2){let ah=hn[zo];Yt.update(ah,Ei),Yt.bind(ah,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function yd(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function xd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,F,V){yt.get(T.texture).__webglTexture=F,yt.get(T.depthTexture).__webglTexture=V;let W=yt.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){let V=yt.get(T);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,V=0){R=T,A=F,v=V;let W=!0,H=null,Mt=!1,Pt=!1;if(T){let Bt=yt.get(T);Bt.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(I.FRAMEBUFFER,null),W=!1):Bt.__webglFramebuffer===void 0?w.setupRenderTarget(T):Bt.__hasExternalTextures&&w.rebindTextures(T,yt.get(T.texture).__webglTexture,yt.get(T.depthTexture).__webglTexture);let Xt=T.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);let Ht=yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ht[F])?H=Ht[F][V]:H=Ht[F],Mt=!0):ot.isWebGL2&&T.samples>0&&w.useMultisampledRTT(T)===!1?H=yt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ht)?H=Ht[V]:H=Ht,E.copy(T.viewport),N.copy(T.scissor),G=T.scissorTest}else E.copy(nt).multiplyScalar(K).floor(),N.copy(rt).multiplyScalar(K).floor(),G=gt;if(Z.bindFramebuffer(I.FRAMEBUFFER,H)&&ot.drawBuffers&&W&&Z.drawBuffers(T,H),Z.viewport(E),Z.scissor(N),Z.setScissorTest(G),Mt){let Bt=yt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Bt.__webglTexture,V)}else if(Pt){let Bt=yt.get(T.texture),Xt=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.__webglTexture,V||0,Xt)}U=-1},this.readRenderTargetPixels=function(T,F,V,W,H,Mt,Pt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){Z.bindFramebuffer(I.FRAMEBUFFER,Nt);try{let Bt=T.texture,Xt=Bt.format,Ht=Bt.type;if(Xt!==Rn&&lt.convert(Xt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Vt=Ht===ar&&($.has("EXT_color_buffer_half_float")||ot.isWebGL2&&$.has("EXT_color_buffer_float"));if(Ht!==pi&&lt.convert(Ht)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===hi&&(ot.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&V>=0&&V<=T.height-H&&I.readPixels(F,V,W,H,lt.convert(Xt),lt.convert(Ht),Mt)}finally{let Bt=R!==null?yt.get(R).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(T,F,V=0){let W=Math.pow(2,-V),H=Math.floor(F.image.width*W),Mt=Math.floor(F.image.height*W);w.setTexture2D(F,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,T.x,T.y,H,Mt),Z.unbindTexture()},this.copyTextureToTexture=function(T,F,V,W=0){let H=F.image.width,Mt=F.image.height,Pt=lt.convert(V.format),Nt=lt.convert(V.type);w.setTexture2D(V,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,W,T.x,T.y,H,Mt,Pt,Nt,F.image.data):F.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,W,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,Pt,F.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,W,T.x,T.y,Pt,Nt,F.image),W===0&&V.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(T,F,V,W,H=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Mt=T.max.x-T.min.x+1,Pt=T.max.y-T.min.y+1,Nt=T.max.z-T.min.z+1,Bt=lt.convert(W.format),Xt=lt.convert(W.type),Ht;if(W.isData3DTexture)w.setTexture3D(W,0),Ht=I.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)w.setTexture2DArray(W,0),Ht=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);let Vt=I.getParameter(I.UNPACK_ROW_LENGTH),be=I.getParameter(I.UNPACK_IMAGE_HEIGHT),en=I.getParameter(I.UNPACK_SKIP_PIXELS),Le=I.getParameter(I.UNPACK_SKIP_ROWS),Vn=I.getParameter(I.UNPACK_SKIP_IMAGES),_e=V.isCompressedTexture?V.mipmaps[H]:V.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,T.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,T.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?I.texSubImage3D(Ht,H,F.x,F.y,F.z,Mt,Pt,Nt,Bt,Xt,_e.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ht,H,F.x,F.y,F.z,Mt,Pt,Nt,Bt,_e.data)):I.texSubImage3D(Ht,H,F.x,F.y,F.z,Mt,Pt,Nt,Bt,Xt,_e),I.pixelStorei(I.UNPACK_ROW_LENGTH,Vt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be),I.pixelStorei(I.UNPACK_SKIP_PIXELS,en),I.pixelStorei(I.UNPACK_SKIP_ROWS,Le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vn),H===0&&W.generateMipmaps&&I.generateMipmap(Ht),Z.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),Z.unbindTexture()},this.resetState=function(){A=0,v=0,R=null,Z.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===xc?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===so?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===de?Ni:ju}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ni?de:Jn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Wl=class extends hr{};Wl.prototype.isWebGL1Renderer=!0;var Ga=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wa=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var ti=class extends ue{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},us=new oe,Ru=new oe,ma=[],Cu=new jn,wy=new oe,Zs=new kt,Js=new an,yi=class extends kt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ti(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,us),Cu.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(Cu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,us),Js.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(i),t.ray.intersectsSphere(Js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),Ru.multiplyMatrices(i,us),Zs.matrixWorld=Ru,Zs.raycast(t,ma);for(let a=0,o=ma.length;a<o;a++){let l=ma[a];l.instanceId=r,l.object=this,e.push(l)}ma.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ti(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Xa=class extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Pu=new C,Lu=new C,Iu=new oe,gl=new gi,ga=new an,ur=class extends Ue{constructor(t=new ge,e=new Xa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Pu.fromBufferAttribute(e,s-1),Lu.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Pu.distanceTo(Lu);t.setAttribute("lineDistance",new jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,t.ray.intersectsSphere(ga)===!1)return;Iu.copy(s).invert(),gl.copy(t.ray).applyMatrix4(Iu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,h=new C,u=new C,f=new C,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let d=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let y=d,S=x-1;y<S;y+=p){let A=g.getX(y),v=g.getX(y+1);if(c.fromBufferAttribute(m,A),h.fromBufferAttribute(m,v),gl.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let U=t.ray.origin.distanceTo(f);U<t.near||U>t.far||e.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let y=d,S=x-1;y<S;y+=p){if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),gl.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let v=t.ray.origin.distanceTo(f);v<t.near||v>t.far||e.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};var fr=class extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Du=new oe,Xl=new gi,_a=new an,ya=new C,Ss=class extends Ue{constructor(t=new ge,e=new fr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,t.ray.intersectsSphere(_a)===!1)return;Du.copy(s).invert(),Xl.copy(t.ray).applyMatrix4(Du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){let m=c.getX(g);ya.fromBufferAttribute(u,m),Uu(ya,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,_=p;g<_;g++)ya.fromBufferAttribute(u,g),Uu(ya,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Uu(n,t,e,i,s,r,a){let o=Xl.distanceSqToPoint(n);if(o<e){let l=new C;Xl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var gn=class extends pn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new st:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new C,s=[],r=[],a=[],o=new C,l=new oe;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Te(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Te(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},dr=class extends _n{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let i=e||new st,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ql=class extends dr{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bc(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var xa=new C,_l=new bc,yl=new bc,xl=new bc,Yl=class extends _n{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(xa.subVectors(s[0],s[1]).add(s[0]),c=xa);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(xa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),_l.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),yl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),xl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(_l.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),yl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),xl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(_l.calc(l),yl.calc(l),xl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Ty(n,t){let e=1-n;return e*e*t}function Ay(n,t){return 2*(1-n)*n*t}function Ry(n,t){return n*n*t}function nr(n,t,e,i){return Ty(n,t)+Ay(n,e)+Ry(n,i)}function Cy(n,t){let e=1-n;return e*e*e*t}function Py(n,t){let e=1-n;return 3*e*e*n*t}function Ly(n,t){return 3*(1-n)*n*n*t}function Iy(n,t){return n*n*n*t}function ir(n,t,e,i,s){return Cy(n,t)+Py(n,e)+Ly(n,i)+Iy(n,s)}var qa=class extends _n{constructor(t=new st,e=new st,i=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new st){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ir(t,s.x,r.x,a.x,o.x),ir(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$l=class extends _n{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ir(t,s.x,r.x,a.x,o.x),ir(t,s.y,r.y,a.y,o.y),ir(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ya=class extends _n{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zl=class extends _n{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends _n{constructor(t=new st,e=new st,i=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new st){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(nr(t,s.x,r.x,a.x),nr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jl=class extends _n{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(nr(t,s.x,r.x,a.x),nr(t,s.y,r.y,a.y),nr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Nu(o,l.x,c.x,h.x,u.x),Nu(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},Kl=Object.freeze({__proto__:null,ArcCurve:ql,CatmullRomCurve3:Yl,CubicBezierCurve:qa,CubicBezierCurve3:$l,EllipseCurve:dr,LineCurve:Ya,LineCurve3:Zl,QuadraticBezierCurve:$a,QuadraticBezierCurve3:Jl,SplineCurve:Za}),jl=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Kl[s.type]().fromJSON(s))}return this}},pr=class extends jl{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ya(this.currentPoint.clone(),new st(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new $a(this.currentPoint.clone(),new st(t,e),new st(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new qa(this.currentPoint.clone(),new st(t,e),new st(i,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Za(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new dr(t,e,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ql=class n extends ge{constructor(t=[new st(0,-.5),new st(.5,0),new st(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Te(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new C,f=new st,p=new C,g=new C,_=new C,m=0,d=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let x=0;x<=e;x++){let y=i+x*h*s,S=Math.sin(y),A=Math.cos(y);for(let v=0;v<=t.length-1;v++){u.x=t[v].x*S,u.y=t[v].y,u.z=t[v].x*A,a.push(u.x,u.y,u.z),f.x=x/e,f.y=v/(t.length-1),o.push(f.x,f.y);let R=l[3*v+0]*S,U=l[3*v+1],b=l[3*v+0]*A;c.push(R,U,b)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){let S=y+x*t.length,A=S,v=S+t.length,R=S+t.length+1,U=S+1;r.push(A,v,U),r.push(R,U,v)}this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("uv",new jt(o,2)),this.setAttribute("normal",new jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},mr=class n extends Ql{constructor(t=1,e=1,i=4,s=8){let r=new pr;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new n(t.radius,t.length,t.capSegments,t.radialSegments)}};var Cn=class n extends ge{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,_=[],m=i/2,d=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(p,2));function x(){let S=new C,A=new C,v=0,R=(e-t)/i;for(let U=0;U<=r;U++){let b=[],E=U/r,N=E*(e-t)+t;for(let G=0;G<=s;G++){let X=G/s,L=X*l+o,O=Math.sin(L),z=Math.cos(L);A.x=N*O,A.y=-E*i+m,A.z=N*z,u.push(A.x,A.y,A.z),S.set(O,R,z).normalize(),f.push(S.x,S.y,S.z),p.push(X,1-E),b.push(g++)}_.push(b)}for(let U=0;U<s;U++)for(let b=0;b<r;b++){let E=_[b][U],N=_[b+1][U],G=_[b+1][U+1],X=_[b][U+1];h.push(E,N,X),h.push(N,G,X),v+=6}c.addGroup(d,v,0),d+=v}function y(S){let A=g,v=new st,R=new C,U=0,b=S===!0?t:e,E=S===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;let N=g;for(let G=0;G<=s;G++){let L=G/s*l+o,O=Math.cos(L),z=Math.sin(L);R.x=b*z,R.y=m*E,R.z=b*O,u.push(R.x,R.y,R.z),f.push(0,E,0),v.x=O*.5+.5,v.y=z*.5*E+.5,p.push(v.x,v.y),g++}for(let G=0;G<s;G++){let X=A+G,L=N+G;S===!0?h.push(L,L+1,X):h.push(L+1,L,X),U+=3}c.addGroup(d,U,S===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var tc=class n extends ge{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let y=new C,S=new C,A=new C;for(let v=0;v<e.length;v+=3)p(e[v+0],y),p(e[v+1],S),p(e[v+2],A),l(y,S,A,x)}function l(x,y,S,A){let v=A+1,R=[];for(let U=0;U<=v;U++){R[U]=[];let b=x.clone().lerp(S,U/v),E=y.clone().lerp(S,U/v),N=v-U;for(let G=0;G<=N;G++)G===0&&U===v?R[U][G]=b:R[U][G]=b.clone().lerp(E,G/N)}for(let U=0;U<v;U++)for(let b=0;b<2*(v-U)-1;b++){let E=Math.floor(b/2);b%2===0?(f(R[U][E+1]),f(R[U+1][E]),f(R[U][E])):(f(R[U][E+1]),f(R[U+1][E+1]),f(R[U+1][E]))}}function c(x){let y=new C;for(let S=0;S<r.length;S+=3)y.x=r[S+0],y.y=r[S+1],y.z=r[S+2],y.normalize().multiplyScalar(x),r[S+0]=y.x,r[S+1]=y.y,r[S+2]=y.z}function h(){let x=new C;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];let S=m(x)/2/Math.PI+.5,A=d(x)/Math.PI+.5;a.push(S,1-A)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){let y=a[x+0],S=a[x+2],A=a[x+4],v=Math.max(y,S,A),R=Math.min(y,S,A);v>.9&&R<.1&&(y<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function p(x,y){let S=x*3;y.x=t[S+0],y.y=t[S+1],y.z=t[S+2]}function g(){let x=new C,y=new C,S=new C,A=new C,v=new st,R=new st,U=new st;for(let b=0,E=0;b<r.length;b+=9,E+=6){x.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),S.set(r[b+6],r[b+7],r[b+8]),v.set(a[E+0],a[E+1]),R.set(a[E+2],a[E+3]),U.set(a[E+4],a[E+5]),A.copy(x).add(y).add(S).divideScalar(3);let N=m(A);_(v,E+0,x,N),_(R,E+2,y,N),_(U,E+4,S,N)}}function _(x,y,S,A){A<0&&x.x===1&&(a[y]=x.x-1),S.x===0&&S.z===0&&(a[y]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var gr=class extends pr{constructor(t){super(t),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new pr().fromJSON(s))}return this}},Dy={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=uf(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,p;if(i&&(r=By(n,t,r,e)),n.length>80*e){o=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return _r(r,a,e,o,l,p,0),a}};function uf(n,t,e,i,s){let r,a;if(s===Zy(n,t,e,i)>0)for(r=t;r<e;r+=i)a=Ou(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=Ou(r,n[r],n[r+1],a);return a&&ao(a,a.next)&&(xr(a),a=a.next),a}function Fi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ao(e,e.next)||ye(e.prev,e,e.next)===0)){if(xr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function _r(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Gy(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Ny(n,i,s,r):Uy(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),xr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Oy(Fi(n),t,e),_r(n,t,e,i,s,r,2)):a===2&&Fy(n,t,e,i,s,r):_r(Fi(n),t,e,i,s,r,1);break}}}function Uy(n){let t=n.prev,e=n,i=n.next;if(ye(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&gs(s,o,r,l,a,c,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ny(n,t,e,i){let s=n.prev,r=n,a=n.next;if(ye(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=ec(p,g,t,e,i),x=ec(_,m,t,e,i),y=n.prevZ,S=n.nextZ;for(;y&&y.z>=d&&S&&S.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&gs(o,h,l,u,c,f,y.x,y.y)&&ye(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&gs(o,h,l,u,c,f,S.x,S.y)&&ye(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&gs(o,h,l,u,c,f,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=x;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&gs(o,h,l,u,c,f,S.x,S.y)&&ye(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Oy(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!ao(s,r)&&ff(s,i,i.next,r)&&yr(s,r)&&yr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),xr(i),xr(i.next),i=n=r),i=i.next}while(i!==n);return Fi(i)}function Fy(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qy(a,o)){let l=df(a,o);a=Fi(a,a.next),l=Fi(l,l.next),_r(a,t,e,i,s,r,0),_r(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function By(n,t,e,i){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=uf(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Xy(c));for(s.sort(ky),r=0;r<s.length;r++)e=zy(s[r],e);return e}function ky(n,t){return n.x-t.x}function zy(n,t){let e=Hy(n,t);if(!e)return t;let i=df(e,n);return Fi(i,i.next),Fi(e,e.next)}function Hy(n,t){let e=t,i=-1/0,s,r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&gs(a<c?r:i,a,l,c,a<c?i:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),yr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Vy(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Vy(n,t){return ye(n.prev,n,t.prev)<0&&ye(t.next,n,n.next)<0}function Gy(n,t,e,i){let s=n;do s.z===0&&(s.z=ec(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Wy(s)}function Wy(n){let t,e,i,s,r,a,o,l,c=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(a>1);return n}function ec(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Xy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function gs(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function qy(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Yy(n,t)&&(yr(n,t)&&yr(t,n)&&$y(n,t)&&(ye(n.prev,n,t.prev)||ye(n,t.prev,t))||ao(n,t)&&ye(n.prev,n,n.next)>0&&ye(t.prev,t,t.next)>0)}function ye(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ao(n,t){return n.x===t.x&&n.y===t.y}function ff(n,t,e,i){let s=Ma(ye(n,t,e)),r=Ma(ye(n,t,i)),a=Ma(ye(e,i,n)),o=Ma(ye(e,i,t));return!!(s!==r&&a!==o||s===0&&va(n,e,t)||r===0&&va(n,i,t)||a===0&&va(e,n,i)||o===0&&va(e,t,i))}function va(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ma(n){return n>0?1:n<0?-1:0}function Yy(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ff(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function yr(n,t){return ye(n.prev,n,n.next)<0?ye(n,t,n.next)>=0&&ye(n,n.prev,t)>=0:ye(n,t,n.prev)<0||ye(n,n.next,t)<0}function $y(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function df(n,t){let e=new nc(n.i,n.x,n.y),i=new nc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Ou(n,t,e,i){let s=new nc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function nc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Zy(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var sr=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Fu(t),Bu(i,t);let a=t.length;e.forEach(Fu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Bu(i,e[l]);let o=Dy.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Fu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Bu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Ja=class n extends ge{constructor(t=new gr([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Jy,y,S=!1,A,v,R,U;d&&(y=d.getSpacedPoints(h),S=!0,f=!1,A=d.computeFrenetFrames(h,!1),v=new C,R=new C,U=new C),f||(m=0,p=0,g=0,_=0);let b=o.extractPoints(c),E=b.shape,N=b.holes;if(!sr.isClockWise(E)){E=E.reverse();for(let I=0,ct=N.length;I<ct;I++){let $=N[I];sr.isClockWise($)&&(N[I]=$.reverse())}}let X=sr.triangulateShape(E,N),L=E;for(let I=0,ct=N.length;I<ct;I++){let $=N[I];E=E.concat($)}function O(I,ct,$){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(ct,$)}let z=E.length,K=X.length;function J(I,ct,$){let ot,Z,At,yt=I.x-ct.x,w=I.y-ct.y,M=$.x-I.x,k=$.y-I.y,at=yt*yt+w*w,Q=yt*k-w*M;if(Math.abs(Q)>Number.EPSILON){let j=Math.sqrt(at),Et=Math.sqrt(M*M+k*k),mt=ct.x-w/j,vt=ct.y+yt/j,Lt=$.x-k/Et,zt=$.y+M/Et,tt=((Lt-mt)*k-(zt-vt)*M)/(yt*k-w*M);ot=mt+yt*tt-I.x,Z=vt+w*tt-I.y;let qt=ot*ot+Z*Z;if(qt<=2)return new st(ot,Z);At=Math.sqrt(qt/2)}else{let j=!1;yt>Number.EPSILON?M>Number.EPSILON&&(j=!0):yt<-Number.EPSILON?M<-Number.EPSILON&&(j=!0):Math.sign(w)===Math.sign(k)&&(j=!0),j?(ot=-w,Z=yt,At=Math.sqrt(at)):(ot=yt,Z=w,At=Math.sqrt(at/2))}return new st(ot/At,Z/At)}let Y=[];for(let I=0,ct=L.length,$=ct-1,ot=I+1;I<ct;I++,$++,ot++)$===ct&&($=0),ot===ct&&(ot=0),Y[I]=J(L[I],L[$],L[ot]);let nt=[],rt,gt=Y.concat();for(let I=0,ct=N.length;I<ct;I++){let $=N[I];rt=[];for(let ot=0,Z=$.length,At=Z-1,yt=ot+1;ot<Z;ot++,At++,yt++)At===Z&&(At=0),yt===Z&&(yt=0),rt[ot]=J($[ot],$[At],$[yt]);nt.push(rt),gt=gt.concat(rt)}for(let I=0;I<m;I++){let ct=I/m,$=p*Math.cos(ct*Math.PI/2),ot=g*Math.sin(ct*Math.PI/2)+_;for(let Z=0,At=L.length;Z<At;Z++){let yt=O(L[Z],Y[Z],ot);bt(yt.x,yt.y,-$)}for(let Z=0,At=N.length;Z<At;Z++){let yt=N[Z];rt=nt[Z];for(let w=0,M=yt.length;w<M;w++){let k=O(yt[w],rt[w],ot);bt(k.x,k.y,-$)}}}let q=g+_;for(let I=0;I<z;I++){let ct=f?O(E[I],gt[I],q):E[I];S?(R.copy(A.normals[0]).multiplyScalar(ct.x),v.copy(A.binormals[0]).multiplyScalar(ct.y),U.copy(y[0]).add(R).add(v),bt(U.x,U.y,U.z)):bt(ct.x,ct.y,0)}for(let I=1;I<=h;I++)for(let ct=0;ct<z;ct++){let $=f?O(E[ct],gt[ct],q):E[ct];S?(R.copy(A.normals[I]).multiplyScalar($.x),v.copy(A.binormals[I]).multiplyScalar($.y),U.copy(y[I]).add(R).add(v),bt(U.x,U.y,U.z)):bt($.x,$.y,u/h*I)}for(let I=m-1;I>=0;I--){let ct=I/m,$=p*Math.cos(ct*Math.PI/2),ot=g*Math.sin(ct*Math.PI/2)+_;for(let Z=0,At=L.length;Z<At;Z++){let yt=O(L[Z],Y[Z],ot);bt(yt.x,yt.y,u+$)}for(let Z=0,At=N.length;Z<At;Z++){let yt=N[Z];rt=nt[Z];for(let w=0,M=yt.length;w<M;w++){let k=O(yt[w],rt[w],ot);S?bt(k.x,k.y+y[h-1].y,y[h-1].x+$):bt(k.x,k.y,u+$)}}}it(),_t();function it(){let I=s.length/3;if(f){let ct=0,$=z*ct;for(let ot=0;ot<K;ot++){let Z=X[ot];Dt(Z[2]+$,Z[1]+$,Z[0]+$)}ct=h+m*2,$=z*ct;for(let ot=0;ot<K;ot++){let Z=X[ot];Dt(Z[0]+$,Z[1]+$,Z[2]+$)}}else{for(let ct=0;ct<K;ct++){let $=X[ct];Dt($[2],$[1],$[0])}for(let ct=0;ct<K;ct++){let $=X[ct];Dt($[0]+z*h,$[1]+z*h,$[2]+z*h)}}i.addGroup(I,s.length/3-I,0)}function _t(){let I=s.length/3,ct=0;Tt(L,ct),ct+=L.length;for(let $=0,ot=N.length;$<ot;$++){let Z=N[$];Tt(Z,ct),ct+=Z.length}i.addGroup(I,s.length/3-I,1)}function Tt(I,ct){let $=I.length;for(;--$>=0;){let ot=$,Z=$-1;Z<0&&(Z=I.length-1);for(let At=0,yt=h+m*2;At<yt;At++){let w=z*At,M=z*(At+1),k=ct+ot+w,at=ct+Z+w,Q=ct+Z+M,j=ct+ot+M;Ot(k,at,Q,j)}}}function bt(I,ct,$){l.push(I),l.push(ct),l.push($)}function Dt(I,ct,$){wt(I),wt(ct),wt($);let ot=s.length/3,Z=x.generateTopUV(i,s,ot-3,ot-2,ot-1);Ft(Z[0]),Ft(Z[1]),Ft(Z[2])}function Ot(I,ct,$,ot){wt(I),wt(ct),wt(ot),wt(ct),wt($),wt(ot);let Z=s.length/3,At=x.generateSideWallUV(i,s,Z-6,Z-3,Z-2,Z-1);Ft(At[0]),Ft(At[1]),Ft(At[3]),Ft(At[1]),Ft(At[2]),Ft(At[3])}function wt(I){s.push(l[I*3+0]),s.push(l[I*3+1]),s.push(l[I*3+2])}function Ft(I){r.push(I.x),r.push(I.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Ky(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Kl[s.type]().fromJSON(s)),new n(i,t.options)}},Jy={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new st(r,a),new st(o,l),new st(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new st(a,1-l),new st(c,1-u),new st(f,1-g),new st(_,1-d)]:[new st(o,1-l),new st(h,1-u),new st(p,1-g),new st(m,1-d)]}};function Ky(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var vr=class n extends tc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Mr=class n extends ge{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/s,p=new C,g=new st;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){let d=r+m/i*a;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(i+1);for(let d=0;d<i;d++){let x=d+m,y=x,S=x+i+1,A=x+i+2,v=x+1;o.push(y,S,v),o.push(S,A,v)}}this.setIndex(o),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var br=class n extends ge{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,f=new C,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){let x=[],y=d/i,S=0;d===0&&a===0?S=.5/e:d===i&&l===Math.PI&&(S=-.5/e);for(let A=0;A<=e;A++){let v=A/e;u.x=-t*Math.cos(s+v*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+v*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(v+S,1-y),x.push(c++)}h.push(x)}for(let d=0;d<i;d++)for(let x=0;x<e;x++){let y=h[d][x+1],S=h[d][x],A=h[d+1][x],v=h[d+1][x+1];(d!==0||a>0)&&p.push(y,S,v),(d!==i-1||l<Math.PI)&&p.push(S,A,v)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Me=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qu,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Sr=class extends Xa{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function ba(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function jy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Es=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ic=class extends Es{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bh,endingEnd:Bh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kh:r=t,o=2*e-i;break;case zh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case kh:a=t,l=2*i-e;break;case zh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,x=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,S=p*m-p*_;for(let A=0;A!==o;++A)r[A]=d*a[h+A]+x*a[c+A]+y*a[l+A]+S*a[u+A];return r}},sc=class extends Es{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},rc=class extends Es{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Pn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ba(e,this.TimeBufferType),this.values=ba(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ba(t.times,Array),values:ba(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ic(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ea:e=this.InterpolantFactoryMethodDiscrete;break;case wa:e=this.InterpolantFactoryMethodLinear;break;case Yo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&jy(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Yo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,f=a*i;for(let p=0;p!==i;++p)e[f+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=wa;var Bi=class extends Pn{};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Ea;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends Pn{};ac.prototype.ValueTypeName="color";var oc=class extends Pn{};oc.prototype.ValueTypeName="number";var lc=class extends Es{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)We.slerpFlat(r,0,a,c-o,a,c,l);return r}},Er=class extends Pn{InterpolantFactoryMethodLinear(t){return new lc(this.times,this.values,this.getValueSize(),t)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.DefaultInterpolation=wa;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Pn{};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Ea;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends Pn{};cc.prototype.ValueTypeName="vector";var hc=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},Qy=new hc,uc=class{constructor(t){this.manager=t!==void 0?t:Qy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};uc.DEFAULT_MATERIAL_NAME="__DEFAULT";var wr=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ka=class extends wr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},vl=new oe,ku=new C,zu=new C,ja=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(ku),zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zu),e.updateMatrixWorld(),vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Hu=new oe,Ks=new C,Ml=new C,fc=class extends ja{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ks.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ks),Ml.copy(i.position),Ml.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ml),i.updateMatrixWorld(),s.makeTranslation(-Ks.x,-Ks.y,-Ks.z),Hu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu)}},Qa=class extends wr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new fc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},dc=class extends ja{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},to=class extends wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new dc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Sc="\\[\\]\\.:\\/",tx=new RegExp("["+Sc+"]","g"),Ec="[^"+Sc+"]",ex="[^"+Sc.replace("\\.","")+"]",nx=/((?:WC+[\/:])*)/.source.replace("WC",Ec),ix=/(WCOD+)?/.source.replace("WCOD",ex),sx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ec),rx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ec),ax=new RegExp("^"+nx+ix+sx+rx+"$"),ox=["material","materials","bones","map"],pc=class{constructor(t,e,i){let s=i||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},pe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tx,"")}static parseTrackName(t){let e=ax.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ox.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=pc;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uv=new Float32Array(1);var eo=class{constructor(t,e,i=0,s=1/0){this.ray=new gi(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return mc(t,this,i,e),i.sort(Vu),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)mc(t[s],this,i,e);return i.sort(Vu),i}};function Vu(n,t){return n.distance-t.distance}function mc(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)mc(s[r],t,e,!0)}}var Tr=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);var pf={type:"change"},wc={type:"start"},mf={type:"end"},oo=new gi,gf=new Tn,cx=Math.cos(70*ws.DEG2RAD),lo=class extends Fn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",j),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",j),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(pf),i.update(),r=s.NONE},this.update=function(){let P=new C,et=new We().setFromUnitVectors(t.up,new C(0,1,0)),dt=et.clone().invert(),lt=new C,Rt=new We,Yt=new C,Jt=2*Math.PI;return function(ft=null){let D=i.object.position;P.copy(D).sub(i.target),P.applyQuaternion(et),o.setFromVector3(P),i.autoRotate&&r===s.NONE&&N(b(ft)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ht=i.minAzimuthAngle,ut=i.maxAzimuthAngle;isFinite(ht)&&isFinite(ut)&&(ht<-Math.PI?ht+=Jt:ht>Math.PI&&(ht-=Jt),ut<-Math.PI?ut+=Jt:ut>Math.PI&&(ut-=Jt),ht<=ut?o.theta=Math.max(ht,Math.min(ut,o.theta)):o.theta=o.theta>(ht+ut)/2?Math.max(ht,o.theta):Math.min(ut,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&v||i.object.isOrthographicCamera?o.radius=Y(o.radius):o.radius=Y(o.radius*c),P.setFromSpherical(o),P.applyQuaternion(dt),D.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let It=!1;if(i.zoomToCursor&&v){let Ct=null;if(i.object.isPerspectiveCamera){let Qt=P.length();Ct=Y(Qt*c);let se=Qt-Ct;i.object.position.addScaledVector(S,se),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let Qt=new C(A.x,A.y,0);Qt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),It=!0;let se=new C(A.x,A.y,0);se.unproject(i.object),i.object.position.sub(se).add(Qt),i.object.updateMatrixWorld(),Ct=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ct!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ct).add(i.object.position):(oo.origin.copy(i.object.position),oo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(oo.direction))<cx?t.lookAt(i.target):(gf.setFromNormalAndCoplanarPoint(i.object.up,i.target),oo.intersectPlane(gf,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),It=!0);return c=1,v=!1,It||lt.distanceToSquared(i.object.position)>a||8*(1-Rt.dot(i.object.quaternion))>a||Yt.distanceToSquared(i.target)>0?(i.dispatchEvent(pf),lt.copy(i.object.position),Rt.copy(i.object.quaternion),Yt.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",vt),i.domElement.removeEventListener("pointerdown",yt),i.domElement.removeEventListener("pointercancel",M),i.domElement.removeEventListener("wheel",Q),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",M),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",j),i._domElementKeyEvents=null)};let i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new Tr,l=new Tr,c=1,h=new C,u=new st,f=new st,p=new st,g=new st,_=new st,m=new st,d=new st,x=new st,y=new st,S=new C,A=new st,v=!1,R=[],U={};function b(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function E(P){let et=Math.abs(P)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*et)}function N(P){l.theta-=P}function G(P){l.phi-=P}let X=function(){let P=new C;return function(dt,lt){P.setFromMatrixColumn(lt,0),P.multiplyScalar(-dt),h.add(P)}}(),L=function(){let P=new C;return function(dt,lt){i.screenSpacePanning===!0?P.setFromMatrixColumn(lt,1):(P.setFromMatrixColumn(lt,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(dt),h.add(P)}}(),O=function(){let P=new C;return function(dt,lt){let Rt=i.domElement;if(i.object.isPerspectiveCamera){let Yt=i.object.position;P.copy(Yt).sub(i.target);let Jt=P.length();Jt*=Math.tan(i.object.fov/2*Math.PI/180),X(2*dt*Jt/Rt.clientHeight,i.object.matrix),L(2*lt*Jt/Rt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(X(dt*(i.object.right-i.object.left)/i.object.zoom/Rt.clientWidth,i.object.matrix),L(lt*(i.object.top-i.object.bottom)/i.object.zoom/Rt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function z(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(P,et){if(!i.zoomToCursor)return;v=!0;let dt=i.domElement.getBoundingClientRect(),lt=P-dt.left,Rt=et-dt.top,Yt=dt.width,Jt=dt.height;A.x=lt/Yt*2-1,A.y=-(Rt/Jt)*2+1,S.set(A.x,A.y,1).unproject(i.object).sub(i.object.position).normalize()}function Y(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function nt(P){u.set(P.clientX,P.clientY)}function rt(P){J(P.clientX,P.clientX),d.set(P.clientX,P.clientY)}function gt(P){g.set(P.clientX,P.clientY)}function q(P){f.set(P.clientX,P.clientY),p.subVectors(f,u).multiplyScalar(i.rotateSpeed);let et=i.domElement;N(2*Math.PI*p.x/et.clientHeight),G(2*Math.PI*p.y/et.clientHeight),u.copy(f),i.update()}function it(P){x.set(P.clientX,P.clientY),y.subVectors(x,d),y.y>0?z(E(y.y)):y.y<0&&K(E(y.y)),d.copy(x),i.update()}function _t(P){_.set(P.clientX,P.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),O(m.x,m.y),g.copy(_),i.update()}function Tt(P){J(P.clientX,P.clientY),P.deltaY<0?K(E(P.deltaY)):P.deltaY>0&&z(E(P.deltaY)),i.update()}function bt(P){let et=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),et=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),et=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),et=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),et=!0;break}et&&(P.preventDefault(),i.update())}function Dt(P){if(R.length===1)u.set(P.pageX,P.pageY);else{let et=qt(P),dt=.5*(P.pageX+et.x),lt=.5*(P.pageY+et.y);u.set(dt,lt)}}function Ot(P){if(R.length===1)g.set(P.pageX,P.pageY);else{let et=qt(P),dt=.5*(P.pageX+et.x),lt=.5*(P.pageY+et.y);g.set(dt,lt)}}function wt(P){let et=qt(P),dt=P.pageX-et.x,lt=P.pageY-et.y,Rt=Math.sqrt(dt*dt+lt*lt);d.set(0,Rt)}function Ft(P){i.enableZoom&&wt(P),i.enablePan&&Ot(P)}function I(P){i.enableZoom&&wt(P),i.enableRotate&&Dt(P)}function ct(P){if(R.length==1)f.set(P.pageX,P.pageY);else{let dt=qt(P),lt=.5*(P.pageX+dt.x),Rt=.5*(P.pageY+dt.y);f.set(lt,Rt)}p.subVectors(f,u).multiplyScalar(i.rotateSpeed);let et=i.domElement;N(2*Math.PI*p.x/et.clientHeight),G(2*Math.PI*p.y/et.clientHeight),u.copy(f)}function $(P){if(R.length===1)_.set(P.pageX,P.pageY);else{let et=qt(P),dt=.5*(P.pageX+et.x),lt=.5*(P.pageY+et.y);_.set(dt,lt)}m.subVectors(_,g).multiplyScalar(i.panSpeed),O(m.x,m.y),g.copy(_)}function ot(P){let et=qt(P),dt=P.pageX-et.x,lt=P.pageY-et.y,Rt=Math.sqrt(dt*dt+lt*lt);x.set(0,Rt),y.set(0,Math.pow(x.y/d.y,i.zoomSpeed)),z(y.y),d.copy(x);let Yt=(P.pageX+et.x)*.5,Jt=(P.pageY+et.y)*.5;J(Yt,Jt)}function Z(P){i.enableZoom&&ot(P),i.enablePan&&$(P)}function At(P){i.enableZoom&&ot(P),i.enableRotate&&ct(P)}function yt(P){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",M)),Lt(P),P.pointerType==="touch"?Et(P):k(P))}function w(P){i.enabled!==!1&&(P.pointerType==="touch"?mt(P):at(P))}function M(P){zt(P),R.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",M)),i.dispatchEvent(mf),r=s.NONE}function k(P){let et;switch(P.button){case 0:et=i.mouseButtons.LEFT;break;case 1:et=i.mouseButtons.MIDDLE;break;case 2:et=i.mouseButtons.RIGHT;break;default:et=-1}switch(et){case zi.DOLLY:if(i.enableZoom===!1)return;rt(P),r=s.DOLLY;break;case zi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;gt(P),r=s.PAN}else{if(i.enableRotate===!1)return;nt(P),r=s.ROTATE}break;case zi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;nt(P),r=s.ROTATE}else{if(i.enablePan===!1)return;gt(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(wc)}function at(P){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;q(P);break;case s.DOLLY:if(i.enableZoom===!1)return;it(P);break;case s.PAN:if(i.enablePan===!1)return;_t(P);break}}function Q(P){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(P.preventDefault(),i.dispatchEvent(wc),Tt(P),i.dispatchEvent(mf))}function j(P){i.enabled===!1||i.enablePan===!1||bt(P)}function Et(P){switch(tt(P),R.length){case 1:switch(i.touches.ONE){case Hi.ROTATE:if(i.enableRotate===!1)return;Dt(P),r=s.TOUCH_ROTATE;break;case Hi.PAN:if(i.enablePan===!1)return;Ot(P),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case Hi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ft(P),r=s.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;I(P),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(wc)}function mt(P){switch(tt(P),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;ct(P),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;$(P),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Z(P),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;At(P),i.update();break;default:r=s.NONE}}function vt(P){i.enabled!==!1&&P.preventDefault()}function Lt(P){R.push(P.pointerId)}function zt(P){delete U[P.pointerId];for(let et=0;et<R.length;et++)if(R[et]==P.pointerId){R.splice(et,1);return}}function tt(P){let et=U[P.pointerId];et===void 0&&(et=new st,U[P.pointerId]=et),et.set(P.pageX,P.pageY)}function qt(P){let et=P.pointerId===R[0]?R[1]:R[0];return U[et]}i.domElement.addEventListener("contextmenu",vt),i.domElement.addEventListener("pointerdown",yt),i.domElement.addEventListener("pointercancel",M),i.domElement.addEventListener("wheel",Q,{passive:!1}),this.update()}};var Tc={ko:{q:["\uB0AE\uC74C","\uBCF4\uD1B5","\uB192\uC74C"],ranks:["\uC778\uD134","\uC0AC\uC6D0","\uB300\uB9AC","\uACFC\uC7A5","\uCC28\uC7A5","\uBD80\uC7A5","\uC0C1\uBB34","\uD1F4\uC0AC\uAC01"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uB2F4\uB2F9","\uD300\uC7A5","\uC2E4\uC7A5","\uBCF8\uBD80\uC7A5"],reject:"\uBC18\uB824",tools:{bomb:["\uC0AC\uC9C1\uC11C \uD3ED\uD0C4","\uC0AC\uC9C1\uC11C","\uB204\uB978 \uACF3\uC5D0 \uC0AC\uC9C1\uC11C\uB97C \uB358\uC838 \uB113\uAC8C \uB0A0\uB9AC\uACE0 \uAD6C\uB369\uC774\uB97C \uD31D\uB2C8\uB2E4"],bat:["\uACB0\uC7AC\uD310 \uD480\uC2A4\uC719","\uACB0\uC7AC\uD310","\uAC70\uB300\uD55C \uACB0\uC7AC\uD310\uC73C\uB85C \uCCD0\uC11C \uB369\uC5B4\uB9AC\uB97C \uBA40\uB9AC \uB0A0\uB9BD\uB2C8\uB2E4. 70 m \uB118\uC73C\uBA74 \uD648\uB7F0"],laser:["\uC5D1\uC140 \uB808\uC774\uC800","\uB808\uC774\uC800","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uBE54\uC774 \uADF8 \uC120\uC744 \uD6D1\uC2B5\uB2C8\uB2E4. \uD1A1 \uB204\uB974\uBA74 \uD55C \uC810\uB9CC"],meteor:["\uC131\uACFC\uAE09 \uC6B4\uC11D","\uC6B4\uC11D","\uD558\uB298\uC5D0\uC11C \uC6B4\uC11D\uC774 \uB5A8\uC5B4\uC838 \uD070 \uAD6C\uB369\uC774\uB97C \uB9CC\uB4ED\uB2C8\uB2E4"],quake:["\uC6D4\uC694\uBCD1 \uC9C0\uC9C4","\uC9C0\uC9C4","\uB204\uB978 \uACF3\uC774 \uC9C4\uC6D0. \uADDC\uBAA8 7.5 \uC774\uC0C1\uC774\uBA74 \uAC74\uBB3C\uC774 \uD1B5\uC9F8\uB85C \uC8FC\uC800\uC549\uC2B5\uB2C8\uB2E4"],nuke:["\uD1F4\uC0AC \uD575\uD3ED\uD0C4","\uD575\uD3ED\uD0C4","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},batSize:"\uACB0\uC7AC\uD310 \uD06C\uAE30",mag:"\uADDC\uBAA8",qk:["\uD754\uB4E4\uB9BC","\uBD80\uBD84 \uBD95\uAD34","\uC804\uBA74 \uBD95\uAD34"],labels:{bomb:["\uC0AC\uC9C1\uC11C \uC81C\uCD9C!","\uC624\uB298\uBD80\uB85C \uADF8\uB9CC\uB461\uB2C8\uB2E4","\uC5F0\uCC28 \uC18C\uC9C4 \uC644\uB8CC"],bat:["\uBC18\uB824!","\uC7AC\uAC80\uD1A0 \uBC14\uB78D\uB2C8\uB2E4","\uACB0\uC7AC \uC644\uB8CC","\uB2E4\uC2DC \uD574 \uC640"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","\uC21C\uD658 \uCC38\uC870!"],meteor:["\uC131\uACFC\uAE09 0\uC6D0","S\uB4F1\uAE09(\uC544\uB2D8)","\uC5F0\uBD09 \uB3D9\uACB0"],quake:["\uC6D4\uC694\uC77C 09:00","\uC8FC\uAC04\uD68C\uC758 \uC2DC\uC791","\uAE34\uAE09 \uBCF4\uACE0"],nuke:["\uD1F4\uC0AC\uD569\uB2C8\uB2E4","\uADF8\uB3D9\uC548 \uAC10\uC0AC\uD588\uC2B5\uB2C8\uB2E4"]},promo:"\uC2B9\uC9C4! {0}",collapse:"{0} \uBD95\uAD34!",collapseSmall:"{0} \uBD95\uAD34",nextBldg:"\uC606 \uAC74\uBB3C \uBD95\uAD34",noName:"{0} \uC774\uB984 \uC5C6\uB294 \uB3D9",core:"\uC9C0\uAD6C \uC911\uC2EC \uB3C4\uB2EC! \uACC4\uC18D \uD30C\uBA74 {0}",coreBonus:"\uC9C0\uAD6C \uC911\uC2EC \uBCF4\uB108\uC2A4",homerun:"\uD648\uB7F0! {0} m",homerunShort:"\uD648\uB7F0 {0}m",quit:"\uD1F4\uC0AC \uC644\uB8CC",magLabel:"\uADDC\uBAA8 {0} \xB7 {1}",count:"{0} / {1}\uB3D9",smash:"{0} \uBD80\uC218\uAE30",card:["\uC810\uC218","\uCD5C\uACE0 \uC9C1\uAE09","\uD68C\uC0AC \uD30C\uAD34\uC728","\uBB34\uB108\uC9C4 \uAC74\uBB3C","\uD310 \uAE4A\uC774"],hud:["\uD68C\uC0AC \uD30C\uAD34\uC728","\uBB34\uB108\uC9C4 \uAC74\uBB3C","\uD310 \uAE4A\uC774"],btn:{label:"\uC774\uB984\uD45C",night:"\uBC24",sound:"\uC18C\uB9AC",soundOff:"\uC18C\uB9AC \uAEBC\uC9D0",reset:"\uCC98\uC74C\uBD80\uD130",rank:"\uB7AD\uD0B9",card:"\uC778\uC99D\uC0F7",hub:"\uB2E4\uB978 \uD68C\uC0AC \uACE0\uB974\uAE30 \u2192",save:"\uC800\uC7A5",close:"\uB2EB\uAE30",submit:"\uB7AD\uD0B9 \uB4F1\uB85D",allRank:"\uD68C\uC0AC\uBCC4 \uC21C\uC704 \u2192"},quality:"\uD654\uC9C8 {0}",qDown:"\uB290\uB824\uC11C \uD654\uC9C8\uC744 '{0}'\uC73C\uB85C \uB0AE\uCDC4\uC5B4\uC694",noGpu:"\uBE0C\uB77C\uC6B0\uC800 \uD558\uB4DC\uC6E8\uC5B4 \uAC00\uC18D\uC774 \uAEBC\uC838 \uC788\uC5B4 \uB290\uB9B4 \uC218 \uC788\uC5B4\uC694 (\uC124\uC815 \u2192 \uC2DC\uC2A4\uD15C \u2192 \uADF8\uB798\uD53D \uAC00\uC18D \uC0AC\uC6A9)",hint:"\uAC74\uBB3C\uC744 \uB20C\uB7EC \uBD80\uC218\uC138\uC694 \xB7 \uC22B\uC790 1~6\uC73C\uB85C \uB3C4\uAD6C \uBCC0\uACBD",start:"\uCD9C\uADFC\uD558\uAE30",how:"\uAC74\uBB3C\uC744 \uB20C\uB7EC \uBD80\uC218\uAE30 \xB7 \uB04C\uC5B4\uC11C \uD68C\uC804 \xB7 \uD720/\uB450 \uC190\uAC00\uB77D \uD655\uB300<br>\uB3C4\uAD6C\uB97C \uBC14\uAFD4 \uAC00\uBA70 \uBD80\uC218\uBA74 \uBC30\uC728\uC774 \uBD99\uACE0 \uC9C1\uAE09\uC774 \uC624\uB985\uB2C8\uB2E4",credit:"\uC9C0\uB3C4 \xA9 OpenStreetMap \uAE30\uC5EC\uC790 (ODbL) \xB7 {0} {1} \uAC74\uBB3C {2}\uB3D9 \xB7 \uBE44\uACF5\uC2DD \uD328\uB7EC\uB514 \uAC8C\uC784",saveHint:"\uC800\uC7A5\uC774 \uC548 \uB418\uBA74 \uC774\uBBF8\uC9C0\uB97C \uAE38\uAC8C \uB204\uB974\uAC70\uB098 \uC624\uB978\uCABD \uD074\uB9AD\uD574\uC11C \uC800\uC7A5\uD558\uC138\uC694",nickPh:"\uB7AD\uD0B9\uC5D0 \uC62C\uB9B4 \uC774\uB984 (12\uC790)",rank:{off:"\uB7AD\uD0B9 \uC11C\uBC84 \uC900\uBE44 \uC911\uC774\uC5D0\uC694.",loading:"\uBD88\uB7EC\uC624\uB294 \uC911\u2026",empty:"\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694. \uCCAB \uBC88\uC9F8\uB85C \uC774\uB984\uC744 \uC62C\uB9AC\uC138\uC694!",fail:"\uB7AD\uD0B9\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC5B4\uC694.",anon:"\uC775\uBA85 \uC9C1\uC7A5\uC778",sending:"\uB4F1\uB85D \uC911\u2026",done:"{0} {1}\uC704\uB85C \uB4F1\uB85D\uD588\uC5B4\uC694!",fast:"\uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uB4F1\uB85D\uD574 \uC8FC\uC138\uC694",err:"\uB4F1\uB85D\uD558\uC9C0 \uBABB\uD588\uC5B4\uC694",title:"{0} \uB7AD\uD0B9"},hover:["\uC8FC\uBCC0 \uAC74\uBB3C","{0} m \xB7 \uB0A8\uC740 {1}%"],km:"km",m:"m"},en:{q:["Low","Medium","High"],ranks:["Intern","Associate","Senior","Manager","Sr. Manager","Director","VP","RAGE QUIT"],envelope:"I QUIT",board:["Staff","Lead","Mgr","Dir"],reject:"REJECTED",tools:{bomb:["Resignation Bomb","Resign","Throw your resignation letter: wide blast and a crater"],bat:["Clipboard Swing","Clipboard","Swing a giant approval clipboard. Over 70 m is a home run"],laser:["Excel Laser","Laser","Drag to draw a line and the beam sweeps it. Tap for a single burn"],meteor:["Bonus Meteor","Meteor","Your annual bonus falls from the sky as a meteor"],quake:["Monday Quake","Quake","Tap the epicenter. Magnitude 7.5+ flattens whole buildings"],nuke:["Quit Nuke","Nuke","Wipes out everything within 420 m"]},batSize:"Clipboard size",mag:"Magnitude",qk:["shaking","partial collapse","total collapse"],labels:{bomb:["I QUIT!","Effective immediately","PTO: used up"],bat:["REJECTED!","Please revise","Approved","Per my last email"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","Circular reference!"],meteor:["Bonus: $0","Exceeds expectations (not)","Salary freeze"],quake:["Monday 9:00 AM","All-hands meeting","Quick sync?"],nuke:["I quit.","Thanks for everything"]},promo:"Promoted! {0}",collapse:"{0} collapsed!",collapseSmall:"{0} down",nextBldg:"Neighbor down",noName:"{0} unnamed building",core:"Earth's core reached! Keep digging to {0}",coreBonus:"Core bonus",homerun:"Home run! {0} m",homerunShort:"HR {0}m",quit:"Resignation accepted",magLabel:"M {0} \xB7 {1}",count:"{0} / {1}",smash:"Smash {0}",card:["Score","Top rank","Destroyed","Buildings down","Dig depth"],hud:["Destroyed","Buildings down","Dig depth"],btn:{label:"Labels",night:"Night",sound:"Sound",soundOff:"Muted",reset:"Restart",rank:"Ranking",card:"Screenshot",hub:"Pick another company \u2192",save:"Save",close:"Close",submit:"Submit score",allRank:"Company ranking \u2192"},quality:"Quality {0}",qDown:"Too slow \u2014 quality lowered to '{0}'",noGpu:"Hardware acceleration is off in your browser, so it may be slow",hint:"Click buildings to smash \xB7 keys 1\u20136 switch tools",start:"Clock in",how:"Click to smash \xB7 drag to rotate \xB7 wheel/pinch to zoom<br>Switch tools to build a multiplier and climb the ladder",credit:"Map \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1}, {2} buildings \xB7 unofficial parody game",saveHint:"If saving fails, long-press or right-click the image",nickPh:"Name for the ranking (12 chars)",rank:{off:"Ranking server coming soon.",loading:"Loading\u2026",empty:"No records yet. Be the first!",fail:"Could not load the ranking.",anon:"Anonymous worker",sending:"Submitting\u2026",done:"You are #{1} at {0}!",fast:"Please wait a moment and try again",err:"Could not submit",title:"{0} ranking"},hover:["Nearby building","{0} m \xB7 {1}% left"],km:"km",m:"m"},ja:{q:["\u4F4E","\u4E2D","\u9AD8"],ranks:["\u30A4\u30F3\u30BF\u30FC\u30F3","\u5E73\u793E\u54E1","\u4E3B\u4EFB","\u4FC2\u9577","\u8AB2\u9577","\u90E8\u9577","\u5F79\u54E1","\u9000\u8077\u5C4A"],envelope:"\u9000\u8077\u5C4A",board:["\u62C5\u5F53","\u8AB2\u9577","\u90E8\u9577","\u672C\u90E8\u9577"],reject:"\u5374\u4E0B",tools:{bomb:["\u9000\u8077\u5C4A\u30DC\u30E0","\u9000\u8077\u5C4A","\u9000\u8077\u5C4A\u3092\u6295\u3052\u3064\u3051\u3066\u5E83\u304F\u5439\u304D\u98DB\u3070\u3057\u3001\u7A74\u3092\u3042\u3051\u307E\u3059"],bat:["\u7A1F\u8B70\u66F8\u30D5\u30EB\u30B9\u30A4\u30F3\u30B0","\u7A1F\u8B70\u66F8","\u5DE8\u5927\u306A\u7A1F\u8B70\u30D0\u30A4\u30F3\u30C0\u30FC\u3067\u6253\u3063\u3066\u9060\u304F\u3078\u98DB\u3070\u3057\u307E\u3059\u300270 m\u8D85\u3048\u3067\u30DB\u30FC\u30E0\u30E9\u30F3"],laser:["\u30A8\u30AF\u30BB\u30EB\u30EC\u30FC\u30B6\u30FC","\u30EC\u30FC\u30B6\u30FC","\u30C9\u30E9\u30C3\u30B0\u3067\u7DDA\u3092\u5F15\u304F\u3068\u30D3\u30FC\u30E0\u304C\u306A\u305E\u308A\u307E\u3059\u3002\u30BF\u30C3\u30D7\u3067\u4E00\u70B9"],meteor:["\u30DC\u30FC\u30CA\u30B9\u9695\u77F3","\u9695\u77F3","\u7A7A\u304B\u3089\u30DC\u30FC\u30CA\u30B9\u304C\u9695\u77F3\u306B\u306A\u3063\u3066\u964D\u3063\u3066\u304D\u307E\u3059"],quake:["\u6708\u66DC\u75C5\u5730\u9707","\u5730\u9707","\u30BF\u30C3\u30D7\u3057\u305F\u6240\u304C\u9707\u6E90\u3002M7.5\u4EE5\u4E0A\u3067\u5EFA\u7269\u3054\u3068\u5D29\u308C\u307E\u3059"],nuke:["\u9000\u8077\u6838\u7206\u5F3E","\u6838\u7206\u5F3E","\u534A\u5F84420 m\u3092\u4E38\u3054\u3068\u5439\u304D\u98DB\u3070\u3057\u307E\u3059"]},batSize:"\u30D0\u30A4\u30F3\u30C0\u30FC\u306E\u5927\u304D\u3055",mag:"\u898F\u6A21",qk:["\u63FA\u308C","\u4E00\u90E8\u5D29\u58CA","\u5168\u58CA"],labels:{bomb:["\u9000\u8077\u5C4A\u63D0\u51FA!","\u672C\u65E5\u4ED8\u3067\u8F9E\u3081\u307E\u3059","\u6709\u7D66\u6D88\u5316\u5B8C\u4E86"],bat:["\u5374\u4E0B!","\u518D\u691C\u8A0E\u3057\u3066\u304F\u3060\u3055\u3044","\u627F\u8A8D","\u3084\u308A\u76F4\u3057"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","\u5FAA\u74B0\u53C2\u7167!"],meteor:["\u30DC\u30FC\u30CA\u30B90\u5186","S\u8A55\u4FA1(\u3067\u306F\u306A\u3044)","\u6607\u7D66\u306A\u3057"],quake:["\u6708\u66DC9:00","\u5B9A\u4F8B\u4F1A\u8B70","\u81F3\u6025\u5BFE\u5FDC"],nuke:["\u304A\u4E16\u8A71\u306B\u306A\u308A\u307E\u3057\u305F","\u9000\u8077\u3057\u307E\u3059"]},promo:"\u6607\u9032! {0}",collapse:"{0} \u5D29\u58CA!",collapseSmall:"{0} \u5D29\u58CA",nextBldg:"\u96A3\u306E\u30D3\u30EB\u5D29\u58CA",noName:"{0} \u540D\u524D\u306E\u306A\u3044\u68DF",core:"\u5730\u7403\u306E\u4E2D\u5FC3\u306B\u5230\u9054! \u3055\u3089\u306B\u6398\u308B\u3068{0}",coreBonus:"\u5730\u7403\u306E\u4E2D\u5FC3\u30DC\u30FC\u30CA\u30B9",homerun:"\u30DB\u30FC\u30E0\u30E9\u30F3! {0} m",homerunShort:"HR {0}m",quit:"\u9000\u8077\u5B8C\u4E86",magLabel:"M{0} \xB7 {1}",count:"{0} / {1}\u68DF",smash:"{0}\u3092\u3076\u3063\u58CA\u305B",card:["\u30B9\u30B3\u30A2","\u6700\u9AD8\u5F79\u8077","\u7834\u58CA\u7387","\u5D29\u308C\u305F\u5EFA\u7269","\u6398\u3063\u305F\u6DF1\u3055"],hud:["\u7834\u58CA\u7387","\u5D29\u308C\u305F\u5EFA\u7269","\u6398\u3063\u305F\u6DF1\u3055"],btn:{label:"\u540D\u672D",night:"\u591C",sound:"\u97F3",soundOff:"\u6D88\u97F3",reset:"\u6700\u521D\u304B\u3089",rank:"\u30E9\u30F3\u30AD\u30F3\u30B0",card:"\u30B9\u30AF\u30B7\u30E7",hub:"\u4ED6\u306E\u4F1A\u793E\u3092\u9078\u3076 \u2192",save:"\u4FDD\u5B58",close:"\u9589\u3058\u308B",submit:"\u30E9\u30F3\u30AD\u30F3\u30B0\u767B\u9332",allRank:"\u4F1A\u793E\u5225\u30E9\u30F3\u30AD\u30F3\u30B0 \u2192"},quality:"\u753B\u8CEA {0}",qDown:"\u91CD\u3044\u306E\u3067\u753B\u8CEA\u3092\u300C{0}\u300D\u306B\u4E0B\u3052\u307E\u3057\u305F",noGpu:"\u30D6\u30E9\u30A6\u30B6\u306E\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2\u30A2\u30AF\u30BB\u30E9\u30EC\u30FC\u30B7\u30E7\u30F3\u304C\u30AA\u30D5\u306E\u305F\u3081\u91CD\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059",hint:"\u5EFA\u7269\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u58CA\u305D\u3046 \xB7 1\u301C6\u30AD\u30FC\u3067\u9053\u5177\u5207\u66FF",start:"\u51FA\u793E\u3059\u308B",how:"\u30AF\u30EA\u30C3\u30AF\u3067\u7834\u58CA \xB7 \u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u8EE2 \xB7 \u30DB\u30A4\u30FC\u30EB/\u30D4\u30F3\u30C1\u3067\u62E1\u5927<br>\u9053\u5177\u3092\u5207\u308A\u66FF\u3048\u308B\u3068\u500D\u7387\u304C\u4E0A\u304C\u308A\u3001\u51FA\u4E16\u3057\u307E\u3059",credit:"\u5730\u56F3 \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1} \u5EFA\u7269{2}\u68DF \xB7 \u975E\u516C\u5F0F\u30D1\u30ED\u30C7\u30A3\u30B2\u30FC\u30E0",saveHint:"\u4FDD\u5B58\u3067\u304D\u306A\u3044\u5834\u5408\u306F\u753B\u50CF\u3092\u9577\u62BC\u3057\u307E\u305F\u306F\u53F3\u30AF\u30EA\u30C3\u30AF",nickPh:"\u30E9\u30F3\u30AD\u30F3\u30B0\u7528\u306E\u540D\u524D(12\u6587\u5B57)",rank:{off:"\u30E9\u30F3\u30AD\u30F3\u30B0\u30B5\u30FC\u30D0\u30FC\u6E96\u5099\u4E2D\u3067\u3059\u3002",loading:"\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026",empty:"\u307E\u3060\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u4E00\u756A\u4E57\u308A\u3057\u3088\u3046!",fail:"\u30E9\u30F3\u30AD\u30F3\u30B0\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002",anon:"\u540D\u7121\u3057\u306E\u793E\u755C",sending:"\u767B\u9332\u4E2D\u2026",done:"{0}\u3067{1}\u4F4D\u306B\u767B\u9332\u3057\u307E\u3057\u305F!",fast:"\u5C11\u3057\u5F85\u3063\u3066\u304B\u3089\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044",err:"\u767B\u9332\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F",title:"{0} \u30E9\u30F3\u30AD\u30F3\u30B0"},hover:["\u5468\u8FBA\u306E\u5EFA\u7269","{0} m \xB7 \u6B8B\u308A{1}%"],km:"km",m:"m"},zh:{q:["\u4F4E","\u4E2D","\u9AD8"],ranks:["\u5B9E\u4E60\u751F","\u804C\u5458","\u4E3B\u7BA1","\u7ECF\u7406","\u9AD8\u7EA7\u7ECF\u7406","\u603B\u76D1","\u526F\u603B\u88C1","\u88F8\u8F9E"],envelope:"\u8F9E\u804C\u4FE1",board:["\u7ECF\u529E","\u7EC4\u957F","\u7ECF\u7406","\u603B\u76D1"],reject:"\u9A73\u56DE",tools:{bomb:["\u8F9E\u804C\u4FE1\u70B8\u5F39","\u8F9E\u804C\u4FE1","\u6254\u51FA\u8F9E\u804C\u4FE1\uFF0C\u70B8\u98DE\u4E00\u5927\u7247\u5E76\u70B8\u51FA\u5751"],bat:["\u5BA1\u6279\u5939\u5168\u529B\u6325\u51FB","\u5BA1\u6279\u5939","\u7528\u5DE8\u5927\u7684\u5BA1\u6279\u5939\u628A\u697C\u5757\u6253\u98DE\u3002\u8D85\u8FC770\u7C73\u7B97\u672C\u5792\u6253"],laser:["Excel\u6FC0\u5149","\u6FC0\u5149","\u62D6\u52A8\u753B\u7EBF\uFF0C\u6FC0\u5149\u6CBF\u7EBF\u626B\u8FC7\u3002\u70B9\u4E00\u4E0B\u53EA\u70E7\u4E00\u70B9"],meteor:["\u5E74\u7EC8\u5956\u9668\u77F3","\u9668\u77F3","\u5E74\u7EC8\u5956\u5316\u4F5C\u9668\u77F3\u4ECE\u5929\u800C\u964D"],quake:["\u5468\u4E00\u7EFC\u5408\u5F81\u5730\u9707","\u5730\u9707","\u70B9\u51FB\u5904\u4E3A\u9707\u4E2D\u30027.5\u7EA7\u4EE5\u4E0A\u6574\u680B\u697C\u4F1A\u584C"],nuke:["\u79BB\u804C\u6838\u5F39","\u6838\u5F39","\u534A\u5F84420\u7C73\u5168\u90E8\u5937\u5E73"]},batSize:"\u5BA1\u6279\u5939\u5927\u5C0F",mag:"\u9707\u7EA7",qk:["\u6447\u6643","\u90E8\u5206\u5012\u584C","\u5168\u90E8\u5012\u584C"],labels:{bomb:["\u8F9E\u804C\u4FE1\u5DF2\u63D0\u4EA4!","\u5373\u65E5\u8D77\u79BB\u804C","\u5E74\u5047\u5DF2\u4F11\u5B8C"],bat:["\u9A73\u56DE!","\u8BF7\u91CD\u65B0\u4FEE\u6539","\u5DF2\u5BA1\u6279","\u518D\u6539\u4E00\u7248"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","\u5FAA\u73AF\u5F15\u7528!"],meteor:["\u5E74\u7EC8\u59560\u5143","\u7EE9\u6548S(\u5E76\u4E0D\u662F)","\u5DE5\u8D44\u51BB\u7ED3"],quake:["\u5468\u4E009:00","\u5468\u4F1A\u5F00\u59CB","\u7D27\u6025\u6C47\u62A5"],nuke:["\u6211\u4E0D\u5E72\u4E86","\u611F\u8C22\u5404\u4F4D\u7167\u987E"]},promo:"\u5347\u804C! {0}",collapse:"{0} \u5012\u584C!",collapseSmall:"{0} \u5012\u584C",nextBldg:"\u9694\u58C1\u697C\u5012\u584C",noName:"{0} \u65E0\u540D\u697C",core:"\u62B5\u8FBE\u5730\u5FC3! \u7EE7\u7EED\u6316\u5C31\u5230{0}",coreBonus:"\u5730\u5FC3\u5956\u52B1",homerun:"\u672C\u5792\u6253! {0} \u7C73",homerunShort:"\u672C\u5792\u6253 {0}\u7C73",quit:"\u79BB\u804C\u6210\u529F",magLabel:"{0}\u7EA7 \xB7 {1}",count:"{0} / {1}\u680B",smash:"\u62C6\u4E86{0}",card:["\u5206\u6570","\u6700\u9AD8\u804C\u4F4D","\u7834\u574F\u7387","\u5012\u584C\u5EFA\u7B51","\u6316\u6398\u6DF1\u5EA6"],hud:["\u7834\u574F\u7387","\u5012\u584C\u5EFA\u7B51","\u6316\u6398\u6DF1\u5EA6"],btn:{label:"\u697C\u540D",night:"\u591C\u665A",sound:"\u58F0\u97F3",soundOff:"\u9759\u97F3",reset:"\u91CD\u6765",rank:"\u6392\u884C\u699C",card:"\u622A\u56FE",hub:"\u9009\u62E9\u5176\u4ED6\u516C\u53F8 \u2192",save:"\u4FDD\u5B58",close:"\u5173\u95ED",submit:"\u63D0\u4EA4\u6210\u7EE9",allRank:"\u516C\u53F8\u6392\u884C \u2192"},quality:"\u753B\u8D28 {0}",qDown:"\u592A\u5361\u4E86\uFF0C\u753B\u8D28\u5DF2\u964D\u4E3A\u201C{0}\u201D",noGpu:"\u6D4F\u89C8\u5668\u786C\u4EF6\u52A0\u901F\u5DF2\u5173\u95ED\uFF0C\u53EF\u80FD\u4F1A\u5361\u987F",hint:"\u70B9\u51FB\u5EFA\u7B51\u5F00\u62C6 \xB7 \u6570\u5B57\u952E1~6\u5207\u6362\u9053\u5177",start:"\u4E0A\u73ED\u6253\u5361",how:"\u70B9\u51FB\u62C6\u697C \xB7 \u62D6\u52A8\u65CB\u8F6C \xB7 \u6EDA\u8F6E/\u53CC\u6307\u7F29\u653E<br>\u6362\u7740\u9053\u5177\u62C6\u53EF\u4EE5\u53E0\u500D\u7387\u3001\u5347\u804C",credit:"\u5730\u56FE \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1} \u5171{2}\u680B \xB7 \u975E\u5B98\u65B9\u6076\u641E\u6E38\u620F",saveHint:"\u65E0\u6CD5\u4FDD\u5B58\u65F6\u8BF7\u957F\u6309\u6216\u53F3\u952E\u4FDD\u5B58\u56FE\u7247",nickPh:"\u6392\u884C\u699C\u6635\u79F0(12\u5B57\u4EE5\u5185)",rank:{off:"\u6392\u884C\u699C\u670D\u52A1\u5668\u51C6\u5907\u4E2D\u3002",loading:"\u52A0\u8F7D\u4E2D\u2026",empty:"\u8FD8\u6CA1\u6709\u8BB0\u5F55\uFF0C\u6765\u5F53\u7B2C\u4E00\u540D!",fail:"\u65E0\u6CD5\u52A0\u8F7D\u6392\u884C\u699C\u3002",anon:"\u533F\u540D\u6253\u5DE5\u4EBA",sending:"\u63D0\u4EA4\u4E2D\u2026",done:"\u5DF2\u767B\u4E0A{0}\u7B2C{1}\u540D!",fast:"\u8BF7\u7A0D\u540E\u518D\u63D0\u4EA4",err:"\u63D0\u4EA4\u5931\u8D25",title:"{0} \u6392\u884C\u699C"},hover:["\u5468\u8FB9\u5EFA\u7B51","{0} \u7C73 \xB7 \u5269\u4F59{1}%"],km:"\u516C\u91CC",m:"\u7C73"},vi:{q:["Th\u1EA5p","V\u1EEBa","Cao"],ranks:["Th\u1EF1c t\u1EADp","Nh\xE2n vi\xEAn","Chuy\xEAn vi\xEAn","Tr\u01B0\u1EDFng nh\xF3m","Tr\u01B0\u1EDFng ph\xF2ng","Gi\xE1m \u0111\u1ED1c","Ph\xF3 TG\u0110","NGH\u1EC8 VI\u1EC6C"],envelope:"\u0110\u01A0N NGH\u1EC8",board:["NV","TN","TP","G\u0110"],reject:"T\u1EEA CH\u1ED0I",tools:{bomb:["Bom \u0111\u01A1n ngh\u1EC9 vi\u1EC7c","\u0110\u01A1n ngh\u1EC9","N\xE9m \u0111\u01A1n ngh\u1EC9 vi\u1EC7c: n\u1ED5 r\u1ED9ng v\xE0 t\u1EA1o h\u1ED1"],bat:["C\xFA v\u1EE5t b\xECa tr\xECnh k\xFD","B\xECa k\xFD","V\u1EE5t b\xECa tr\xECnh k\xFD kh\u1ED5ng l\u1ED3 cho bay xa. Tr\xEAn 70 m l\xE0 home run"],laser:["Laser Excel","Laser","K\xE9o \u0111\u1EC3 v\u1EBD \u0111\u01B0\u1EDDng, tia laser qu\xE9t theo. Ch\u1EA1m \u0111\u1EC3 \u0111\u1ED1t m\u1ED9t \u0111i\u1EC3m"],meteor:["Thi\xEAn th\u1EA1ch th\u01B0\u1EDFng T\u1EBFt","Thi\xEAn th\u1EA1ch","Th\u01B0\u1EDFng T\u1EBFt r\u01A1i t\u1EEB tr\u1EDDi xu\u1ED1ng th\xE0nh thi\xEAn th\u1EA1ch"],quake:["\u0110\u1ED9ng \u0111\u1EA5t th\u1EE9 Hai","\u0110\u1ED9ng \u0111\u1EA5t","Ch\u1EA1m v\xE0o t\xE2m ch\u1EA5n. T\u1EEB 7.5 \u0111\u1ED9 c\u1EA3 t\xF2a nh\xE0 s\u1EE5p"],nuke:["Bom h\u1EA1t nh\xE2n ngh\u1EC9 vi\u1EC7c","H\u1EA1t nh\xE2n","X\xF3a s\u1ED5 m\u1ECDi th\u1EE9 trong b\xE1n k\xEDnh 420 m"]},batSize:"C\u1EE1 b\xECa k\xFD",mag:"\u0110\u1ED9 l\u1EDBn",qk:["rung l\u1EAFc","s\u1EADp m\u1ED9t ph\u1EA7n","s\u1EADp to\xE0n b\u1ED9"],labels:{bomb:["Em xin ngh\u1EC9!","Ngh\u1EC9 t\u1EEB h\xF4m nay","H\u1EBFt ph\xE9p n\u0103m"],bat:["T\u1EEA CH\u1ED0I!","L\xE0m l\u1EA1i \u0111i em","\u0110\xE3 duy\u1EC7t","S\u1EEDa b\u1EA3n 17"],laser:["#REF!","#DIV/0!","#VALUE!","#N/A","#NAME?","Tham chi\u1EBFu v\xF2ng!"],meteor:["Th\u01B0\u1EDFng T\u1EBFt: 0\u0111","Xu\u1EA5t s\u1EAFc (kh\xF4ng ph\u1EA3i)","\u0110\xF3ng b\u0103ng l\u01B0\u01A1ng"],quake:["Th\u1EE9 Hai 8:00","H\u1ECDp giao ban","B\xE1o c\xE1o g\u1EA5p"],nuke:["Em ngh\u1EC9 \u0111\xE2y","C\u1EA3m \u01A1n m\u1ECDi ng\u01B0\u1EDDi"]},promo:"Th\u0103ng ch\u1EE9c! {0}",collapse:"{0} s\u1EADp!",collapseSmall:"{0} s\u1EADp",nextBldg:"T\xF2a b\xEAn c\u1EA1nh s\u1EADp",noName:"{0} t\xF2a kh\xF4ng t\xEAn",core:"\u0110\u1EBFn t\xE2m Tr\xE1i \u0110\u1EA5t! \u0110\xE0o ti\u1EBFp s\u1EBD t\u1EDBi {0}",coreBonus:"Th\u01B0\u1EDFng t\xE2m Tr\xE1i \u0110\u1EA5t",homerun:"Home run! {0} m",homerunShort:"HR {0}m",quit:"Ngh\u1EC9 vi\u1EC7c th\xE0nh c\xF4ng",magLabel:"{0} \u0111\u1ED9 \xB7 {1}",count:"{0} / {1} t\xF2a",smash:"\u0110\u1EADp {0}",card:["\u0110i\u1EC3m","Ch\u1EE9c cao nh\u1EA5t","T\u1EC9 l\u1EC7 ph\xE1 h\u1EE7y","T\xF2a nh\xE0 s\u1EADp","\u0110\u1ED9 s\xE2u \u0111\xE0o"],hud:["T\u1EC9 l\u1EC7 ph\xE1 h\u1EE7y","T\xF2a nh\xE0 s\u1EADp","\u0110\u1ED9 s\xE2u \u0111\xE0o"],btn:{label:"T\xEAn t\xF2a",night:"\u0110\xEAm",sound:"\xC2m thanh",soundOff:"T\u1EAFt ti\u1EBFng",reset:"Ch\u01A1i l\u1EA1i",rank:"X\u1EBFp h\u1EA1ng",card:"Ch\u1EE5p m\xE0n h\xECnh",hub:"Ch\u1ECDn c\xF4ng ty kh\xE1c \u2192",save:"L\u01B0u",close:"\u0110\xF3ng",submit:"G\u1EEDi \u0111i\u1EC3m",allRank:"X\u1EBFp h\u1EA1ng c\xF4ng ty \u2192"},quality:"\u0110\u1ED3 h\u1ECDa {0}",qDown:"M\xE1y ch\u1EADm \u2014 \u0111\xE3 gi\u1EA3m \u0111\u1ED3 h\u1ECDa xu\u1ED1ng '{0}'",noGpu:"Tr\xECnh duy\u1EC7t \u0111ang t\u1EAFt t\u0103ng t\u1ED1c ph\u1EA7n c\u1EE9ng n\xEAn c\xF3 th\u1EC3 ch\u1EADm",hint:"B\u1EA5m v\xE0o t\xF2a nh\xE0 \u0111\u1EC3 \u0111\u1EADp \xB7 ph\xEDm 1\u20136 \u0111\u1ED5i c\xF4ng c\u1EE5",start:"\u0110i l\xE0m",how:"B\u1EA5m \u0111\u1EC3 \u0111\u1EADp \xB7 k\xE9o \u0111\u1EC3 xoay \xB7 cu\u1ED9n/hai ng\xF3n \u0111\u1EC3 ph\xF3ng to<br>\u0110\u1ED5i c\xF4ng c\u1EE5 li\xEAn t\u1EE5c \u0111\u1EC3 nh\xE2n \u0111i\u1EC3m v\xE0 th\u0103ng ch\u1EE9c",credit:"B\u1EA3n \u0111\u1ED3 \xA9 OpenStreetMap contributors (ODbL) \xB7 {0} {1}, {2} t\xF2a \xB7 game nh\u1EA1i kh\xF4ng ch\xEDnh th\u1EE9c",saveHint:"N\u1EBFu kh\xF4ng l\u01B0u \u0111\u01B0\u1EE3c, h\xE3y nh\u1EA5n gi\u1EEF ho\u1EB7c chu\u1ED9t ph\u1EA3i v\xE0o \u1EA3nh",nickPh:"T\xEAn tr\xEAn b\u1EA3ng x\u1EBFp h\u1EA1ng (12 k\xFD t\u1EF1)",rank:{off:"M\xE1y ch\u1EE7 x\u1EBFp h\u1EA1ng s\u1EAFp ra m\u1EAFt.",loading:"\u0110ang t\u1EA3i\u2026",empty:"Ch\u01B0a c\xF3 ai. H\xE3y l\xE0 ng\u01B0\u1EDDi \u0111\u1EA7u ti\xEAn!",fail:"Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c b\u1EA3ng x\u1EBFp h\u1EA1ng.",anon:"D\xE2n v\u0103n ph\xF2ng \u1EA9n danh",sending:"\u0110ang g\u1EEDi\u2026",done:"B\u1EA1n h\u1EA1ng {1} t\u1EA1i {0}!",fast:"Vui l\xF2ng \u0111\u1EE3i m\u1ED9t ch\xFAt r\u1ED3i g\u1EEDi l\u1EA1i",err:"Kh\xF4ng g\u1EEDi \u0111\u01B0\u1EE3c",title:"X\u1EBFp h\u1EA1ng {0}"},hover:["T\xF2a nh\xE0 l\xE2n c\u1EADn","{0} m \xB7 c\xF2n {1}%"],km:"km",m:"m"}};function _f(n,t={}){let e=Tc[n]||Tc.ko,i=(r,a)=>a.split(".").reduce((o,l)=>o==null?o:o[l],r);return(r,...a)=>{let o=i(t,r);return o==null&&(o=i(e,r)),o==null&&(o=i(Tc.ko,r)),typeof o=="string"?o.replace(/\{(\d)\}/g,(l,c)=>a[+c]??""):o}}var yf={ko:{hospital:{ranks:["\uC778\uD134","\uB808\uC9C0\uB358\uD2B8 1\uB144\uCC28","\uB808\uC9C0\uB358\uD2B8 4\uB144\uCC28","\uC804\uC784\uC758","\uC870\uAD50\uC218","\uBD80\uAD50\uC218","\uAD50\uC218","\uBCD1\uC6D0\uC7A5"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uC8FC\uCE58\uC758","\uC804\uACF5\uC758","\uAD50\uC218","\uACFC\uC7A5"],reject:"\uBCF4\uB958",tools:{bomb:["\uC804\uACF5\uC758 \uC0AC\uC9C1\uC11C","\uC0AC\uC9C1\uC11C","\uC0AC\uC9C1\uC11C\uB97C \uB358\uC838 \uBCD1\uB3D9\uC744 \uB0A0\uB9BD\uB2C8\uB2E4"],bat:["\uCC28\uD2B8 \uD480\uC2A4\uC719","\uCC28\uD2B8","\uB450\uAEBC\uC6B4 \uC758\uBB34\uAE30\uB85D \uCC28\uD2B8\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4. 70 m \uB118\uC73C\uBA74 \uD648\uB7F0"],laser:["\uC218\uC220 \uB808\uC774\uC800","\uB808\uC774\uC800","\uB04C\uC5B4\uC11C \uC808\uAC1C\uC120\uC744 \uADF8\uC73C\uBA74 \uB808\uC774\uC800\uAC00 \uB530\uB77C \uC790\uB985\uB2C8\uB2E4"],meteor:["\uC9C4\uD1B5\uC81C \uC6B4\uC11D","\uC54C\uC57D","\uD558\uB298\uC5D0\uC11C \uAC70\uB300\uD55C \uC54C\uC57D\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["36\uC2DC\uAC04 \uB2F9\uC9C1 \uC9C0\uC9C4","\uB2F9\uC9C1","\uB204\uB978 \uACF3\uC774 \uC9C4\uC6D0. \uADDC\uBAA8 7.5 \uC774\uC0C1\uC774\uBA74 \uBCD1\uB3D9\uC774 \uD1B5\uC9F8\uB85C \uC8FC\uC800\uC549\uC2B5\uB2C8\uB2E4"],nuke:["\uC9D1\uB2E8 \uC0AC\uC9C1 \uD575\uD3ED\uD0C4","\uC9D1\uB2E8\uC0AC\uC9C1","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uC624\uB298\uBD80\uB85C \uC0AC\uC9C1\uD569\uB2C8\uB2E4","\uC624\uD504 \uBC18\uB0A9 \uAC70\uBD80","\uCF5C \uC548 \uBC1B\uC2B5\uB2C8\uB2E4"],bat:["\uC624\uB354 \uBCC0\uACBD!","\uCC28\uD305 \uB2E4\uC2DC \uD574","\uD68C\uC9C4 \uC9C0\uC5F0"],laser:["\uC808\uAC1C!","\uC9C0\uD608 \uC2E4\uD328","\uBD09\uD569\uC740 \uB0B4\uC77C"],meteor:["\uC218\uC561 \uB9DE\uACE0 \uCD9C\uADFC","\uC9C4\uD1B5\uC81C 2\uC54C","\uCE74\uD398\uC778 IV"],quake:["\uC751\uAE09\uC2E4 \uCF5C","\uCF54\uB4DC \uBE14\uB8E8","\uC0C8\uBCBD 3\uC2DC \uCF5C"],nuke:["\uBCD1\uC6D0 \uB5A0\uB0A9\uB2C8\uB2E4","\uC218\uB828 \uD3EC\uAE30"]},meteor:"pill",beam:["#ffffff","#38bdf8"]},law:{ranks:["\uC778\uD134","\uC5B4\uC3D8 1\uB144\uCC28","\uC5B4\uC3D8 3\uB144\uCC28","\uC2DC\uB2C8\uC5B4 \uC5B4\uC3D8","\uC8FC\uB2C8\uC5B4 \uD30C\uD2B8\uB108","\uD30C\uD2B8\uB108","\uC2DC\uB2C8\uC5B4 \uD30C\uD2B8\uB108","\uD0C8\uCD9C"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uC5B4\uC3D8","\uC2DC\uB2C8\uC5B4","\uD30C\uD2B8\uB108","\uB300\uD45C"],reject:"\uC7AC\uC791\uC131",tools:{bomb:["\uC0AC\uC9C1\uC11C \uD3ED\uD0C4","\uC0AC\uC9C1\uC11C","\uBE4C\uB7EC\uBE14 \uC544\uC6CC\uB97C \uBC84\uB9AC\uACE0 \uC0AC\uC9C1\uC11C\uB97C \uB358\uC9D1\uB2C8\uB2E4"],bat:["\uC900\uBE44\uC11C\uBA74 \uD480\uC2A4\uC719","\uC11C\uBA74","300\uCABD\uC9DC\uB9AC \uC900\uBE44\uC11C\uBA74 \uBB49\uCE58\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uD0C0\uC784\uC2DC\uD2B8 \uB808\uC774\uC800","\uD0C0\uC784\uC2DC\uD2B8","6\uBD84 \uB2E8\uC704\uB85C \uC815\uD655\uD788 \uC798\uB77C \uB0C5\uB2C8\uB2E4"],meteor:["\uC18C\uC1A1\uBE44\uC6A9 \uC6B4\uC11D","\uC18C\uC1A1\uBE44\uC6A9","\uD328\uC18C\uD55C \uCABD \uC18C\uC1A1\uBE44\uC6A9\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD310\uACB0 \uC120\uACE0 \uC9C0\uC9C4","\uC120\uACE0","\uB204\uB978 \uACF3\uC5D0\uC11C \uD310\uACB0\uC774 \uC120\uACE0\uB429\uB2C8\uB2E4"],nuke:["\uC9D1\uB2E8\uC18C\uC1A1 \uD575\uD3ED\uD0C4","\uC9D1\uB2E8\uC18C\uC1A1","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uBE4C\uB7EC\uBE14 0\uC2DC\uAC04","\uD1F4\uC0AC\uD569\uB2C8\uB2E4","\uC8FC\uB9D0 \uBC18\uB0A9 \uB05D"],bat:["\uAC01\uD558!","\uAE30\uAC01!","\uBCF4\uC815\uBA85\uB839"],laser:["0.1\uC2DC\uAC04","0.3\uC2DC\uAC04","6\uBD84 \uCCAD\uAD6C"],meteor:["\uCC29\uC218\uAE08 \uBC18\uD658","\uC131\uACF5\uBCF4\uC218 0\uC6D0","\uD328\uC18C"],quake:["\uC8FC\uBB38: \uC6D0\uACE0 \uD328\uC18C","\uC0C1\uACE0 \uAE30\uAC01","\uBCC0\uB860 \uC7AC\uAC1C"],nuke:["\uB85C\uD38C \uD0C8\uCD9C","\uC778\uD558\uC6B0\uC2A4 \uAC11\uB2C8\uB2E4"]},meteor:"coin",beam:["#ffffff","#facc15"]},accounting:{ranks:["\uC778\uD134","\uC2A4\uD0ED","\uC2DC\uB2C8\uC5B4","\uB9E4\uB2C8\uC800","\uC2DC\uB2C8\uC5B4 \uB9E4\uB2C8\uC800","\uB514\uB809\uD130","\uD30C\uD2B8\uB108","\uC2DC\uC98C \uD0C8\uCD9C"],envelope:"\uC0AC\uC9C1\uC11C",board:["\uC2A4\uD0ED","\uC2DC\uB2C8\uC5B4","\uB9E4\uB2C8\uC800","\uD30C\uD2B8\uB108"],reject:"\uC218\uC815\uC694\uB9DD",tools:{bomb:["\uC2DC\uC98C \uC0AC\uC9C1\uC11C","\uC0AC\uC9C1\uC11C","\uAC10\uC0AC \uC2DC\uC98C \uD55C\uAC00\uC6B4\uB370 \uC0AC\uC9C1\uC11C\uB97C \uB358\uC9D1\uB2C8\uB2E4"],bat:["\uAC10\uC0AC\uC870\uC11C \uD480\uC2A4\uC719","\uC870\uC11C","\uB450\uAEBC\uC6B4 \uAC10\uC0AC\uC870\uC11C\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC5D1\uC140 \uB808\uC774\uC800","\uC5D1\uC140","VLOOKUP\uCC98\uB7FC \uB05D\uAE4C\uC9C0 \uD6D1\uC2B5\uB2C8\uB2E4"],meteor:["\uBD84\uC2DD\uD68C\uACC4 \uC6B4\uC11D","\uBD84\uC2DD","\uC228\uACA8 \uB454 \uBD80\uCC44\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uACB0\uC0B0 \uC9C0\uC9C4","\uACB0\uC0B0","12\uC6D4 \uACB0\uC0B0\uC774 \uB36E\uCE69\uB2C8\uB2E4"],nuke:["\uC758\uACAC\uAC70\uC808 \uD575\uD3ED\uD0C4","\uC758\uACAC\uAC70\uC808","\uBC18\uACBD 420 m\uC5D0 \uC758\uACAC\uAC70\uC808\uC744 \uB0C5\uB2C8\uB2E4"]},labels:{bomb:["\uC2DC\uC98C \uB05D\uB098\uACE0 \uB098\uAC11\uB2C8\uB2E4","\uC8FC 100\uC2DC\uAC04 \uB05D","\uD1F4\uC0AC"],bat:["\uC870\uC11C \uB2E4\uC2DC","\uADFC\uAC70 \uBD99\uC5EC","\uB9AC\uBDF0 \uCF54\uBA58\uD2B8 47\uAC1C"],laser:["#REF!","#N/A","\uCC28\uC774 1\uC6D0","\uC21C\uD658 \uCC38\uC870!"],meteor:["\uD55C\uC815\uC758\uACAC","\uACC4\uC18D\uAE30\uC5C5 \uBD88\uD655\uC2E4","\uC7AC\uBB34\uC81C\uD45C \uC7AC\uC791\uC131"],quake:["12\uC6D4 31\uC77C","\uBD84\uAE30 \uAC80\uD1A0","\uC5F0\uACB0 \uACB0\uC0B0"],nuke:["\uC758\uACAC\uAC70\uC808","\uAC10\uC0AC\uC778 \uC0AC\uC784"]},meteor:"coin",beam:["#ffffff","#21d07a"]},broadcast:{ranks:["\uB9C9\uB0B4 \uC791\uAC00","FD","AD","\uC870\uC5F0\uCD9C","PD","CP","\uAD6D\uC7A5","\uC885\uC601"],envelope:"\uC0AC\uD45C",board:["\uC791\uAC00","AD","PD","CP"],reject:"NG",tools:{bomb:["\uC0AC\uD45C \uD3ED\uD0C4","\uC0AC\uD45C","\uC0DD\uBC29\uC1A1 \uC9C1\uC804 \uC0AC\uD45C\uB97C \uB358\uC9D1\uB2C8\uB2E4"],bat:["\uD050\uC2DC\uD2B8 \uD480\uC2A4\uC719","\uD050\uC2DC\uD2B8","\uB9D0\uC544 \uC954 \uD050\uC2DC\uD2B8\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC870\uBA85 \uB808\uC774\uC800","\uC870\uBA85","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uC870\uBA85\uC774 \uADF8 \uC120\uC744 \uD0DC\uC6C1\uB2C8\uB2E4"],meteor:["\uC2DC\uCCAD\uB960 \uC6B4\uC11D","\uC2DC\uCCAD\uB960","0.1% \uC2DC\uCCAD\uB960\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD3B8\uC131 \uAC1C\uD3B8 \uC9C0\uC9C4","\uAC1C\uD3B8","\uB204\uB978 \uACF3\uC5D0\uC11C \uD3B8\uC131\uC774 \uB4A4\uC9D1\uD799\uB2C8\uB2E4"],nuke:["\uC870\uAE30 \uC885\uC601 \uD575\uD3ED\uD0C4","\uC870\uAE30\uC885\uC601","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uBC29\uC1A1\uC0AC\uACE0!","\uC624\uB298 \uB179\uD654 \uD391\uD06C","\uC0AC\uD45C \uB0C5\uB2C8\uB2E4"],bat:["NG!","\uB2E4\uC2DC \uAC08\uAC8C\uC694","\uCEF7!"],laser:["\uC870\uBA85 OFF","\uC5ED\uAD11!","\uD654\uC774\uD2B8 \uC544\uC6C3"],meteor:["\uC2DC\uCCAD\uB960 0.1%","\uB3D9\uC2DC\uAC04\uB300 \uAF34\uCC0C","\uAD11\uACE0 \uC644\uD310 \uC2E4\uD328"],quake:["\uD3B8\uC131 \uC0AD\uC81C","\uACB0\uBC29","\uAE34\uAE09 \uD3B8\uC131"],nuke:["\uC870\uAE30 \uC885\uC601","\uC2DC\uC98C 2 \uC5C6\uC74C"]},meteor:"tv",beam:["#ffffff","#f472b6"]},telecom:{ranks:["\uC778\uD134","\uB9E4\uB2C8\uC800","\uC120\uC784","\uCC45\uC784","\uD300\uC7A5","\uB2F4\uB2F9","\uBCF8\uBD80\uC7A5","\uD574\uC9C0"],tools:{laser:["5G \uC804\uD30C \uB808\uC774\uC800","5G","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uC804\uD30C\uAC00 \uADF8 \uC120\uC744 \uD0DC\uC6C1\uB2C8\uB2E4"],meteor:["\uC694\uAE08 \uD3ED\uD0C4 \uC6B4\uC11D","\uC694\uAE08\uD3ED\uD0C4","\uB370\uC774\uD130 \uCD08\uACFC \uC694\uAE08\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD1B5\uC2E0 \uC7A5\uC560 \uC9C0\uC9C4","\uC7A5\uC560","\uB204\uB978 \uACF3\uC5D0\uC11C \uC804\uAD6D \uC7A5\uC560\uAC00 \uB0A9\uB2C8\uB2E4"],nuke:["\uC57D\uC815 \uD574\uC9C0 \uD575\uD3ED\uD0C4","\uD574\uC9C0","\uC704\uC57D\uAE08 \uC5C6\uC774 \uBC18\uACBD 420 m \uD574\uC9C0"]},labels:{laser:["\uC548\uD14C\uB098 0\uCE78","LTE \uC804\uD658","\uC2E0\uD638 \uC5C6\uC74C"],meteor:["\uB370\uC774\uD130 \uCD08\uACFC","\uB85C\uBC0D \uD3ED\uD0C4","\uBD80\uAC00\uC11C\uBE44\uC2A4 \uAC00\uC785\uB428"],quake:["\uC11C\uBE44\uC2A4 \uC7A5\uC560","\uBB38\uC790 \uC548 \uAC10","\uBCF5\uAD6C \uC911"],nuke:["\uBC88\uD638\uC774\uB3D9","\uC57D\uC815 \uB05D"]},meteor:"phone",beam:["#ffffff","#a78bfa"]},fashion:{ranks:["\uC778\uD134","MD \uBCF4\uC870","MD","\uB514\uC790\uC774\uB108","\uC218\uC11D \uB514\uC790\uC774\uB108","\uC2E4\uC7A5","\uB514\uB809\uD130","\uBE0C\uB79C\uB4DC \uCCA0\uC218"],tools:{bat:["\uD328\uD134\uC790 \uD480\uC2A4\uC719","\uD328\uD134\uC790","\uAC70\uB300\uD55C \uD328\uD134\uC790\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC7AC\uB2E8 \uB808\uC774\uC800","\uC7AC\uB2E8","\uB04C\uC5B4\uC11C \uC7AC\uB2E8\uC120\uC744 \uADF8\uC73C\uBA74 \uB808\uC774\uC800\uAC00 \uC790\uB985\uB2C8\uB2E4"],meteor:["\uC7AC\uACE0 \uC6B4\uC11D","\uC7AC\uACE0","\uC548 \uD314\uB9B0 \uC2DC\uC98C \uC7AC\uACE0\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uC2DC\uC98C\uC624\uD504 \uC9C0\uC9C4","\uC2DC\uC98C\uC624\uD504","70% \uC138\uC77C\uC774 \uB36E\uCE69\uB2C8\uB2E4"]},labels:{bat:["\uD54F\uC774 \uC548 \uB098\uC640","\uC0D8\uD50C \uB2E4\uC2DC","\uCEE8\uD38C \uBC18\uB824"],laser:["\uC7AC\uB2E8 \uC2E4\uC218","\uC2DC\uC811 0","\uC6D0\uB2E8 \uB85C\uC2A4"],meteor:["\uC7AC\uACE0 3\uB9CC \uC7A5","\uBC18\uD488 \uD3ED\uD0C4","\uC544\uC6B8\uB81B\uD589"],quake:["70% \uC138\uC77C","\uC2DC\uC98C\uC624\uD504","\uADE0\uC77C\uAC00"]},meteor:"rock",beam:["#ffffff","#fb7185"]},fab:{ranks:["\uC778\uD134","\uC0AC\uC6D0","\uC120\uC784","\uCC45\uC784","\uC218\uC11D","\uADF8\uB8F9\uC7A5","\uC0C1\uBB34","\uD1F4\uC0AC"],tools:{laser:["EUV \uB808\uC774\uC800","EUV","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uB178\uAD11\uD569\uB2C8\uB2E4"],meteor:["\uC6E8\uC774\uD37C \uC6B4\uC11D","\uC6E8\uC774\uD37C","300 mm \uC6E8\uC774\uD37C\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uD074\uB9B0\uB8F8 \uC9C0\uC9C4","\uD074\uB9B0\uB8F8","\uB204\uB978 \uACF3\uC5D0\uC11C \uC218\uC728\uC774 \uBB34\uB108\uC9D1\uB2C8\uB2E4"],nuke:["\uC218\uC728 0% \uD575\uD3ED\uD0C4","\uC218\uC7280","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{laser:["\uB178\uAD11 \uBD88\uB7C9","\uD328\uD134 \uBD95\uAD34","\uD30C\uD2F0\uD074 \uAC80\uCD9C"],meteor:["\uC218\uC728 30%","\uC6E8\uC774\uD37C \uD3D0\uAE30","\uC7AC\uC791\uC5C5"],quake:["\uB77C\uC778 \uC815\uC9C0","\uD30C\uD2F0\uD074!","\uBC29\uC9C4\uBCF5 \uCC22\uC5B4\uC9D0"],nuke:["\uC218\uC728 0%","\uB77C\uC778 \uC167\uB2E4\uC6B4"]},meteor:"wafer",beam:["#ffffff","#c084fc"]},auto:{ranks:["\uC778\uD134","\uC0AC\uC6D0","\uB300\uB9AC","\uCC45\uC784","\uD300\uC7A5","\uC2E4\uC7A5","\uC0C1\uBB34","\uD1F4\uC0AC"],tools:{meteor:["\uB9AC\uCF5C \uC6B4\uC11D","\uB9AC\uCF5C","\uB9AC\uCF5C \uCC28\uB7C9\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uCDA9\uB3CC \uD14C\uC2A4\uD2B8 \uC9C0\uC9C4","\uCDA9\uB3CC","\uB204\uB978 \uACF3\uC5D0\uC11C \uCDA9\uB3CC \uC2DC\uD5D8\uC744 \uD569\uB2C8\uB2E4"]},labels:{meteor:["\uB9AC\uCF5C 30\uB9CC \uB300","\uBB34\uC0C1\uC218\uB9AC","\uACB0\uD568 \uC778\uC815"],quake:["\uC5D0\uC5B4\uBC31 \uC804\uAC1C","\uCDA9\uB3CC \uB4F1\uAE09 0","\uB77C\uC778 \uC815\uC9C0"]},meteor:"gear",beam:["#ffffff","#fb923c"]},it:{ranks:["\uC778\uD134","\uC8FC\uB2C8\uC5B4","\uBBF8\uB4DC","\uC2DC\uB2C8\uC5B4","\uD14C\uD06C\uB9AC\uB4DC","\uC2A4\uD0DC\uD504","\uD504\uB9B0\uC2DC\uD384","\uD1F4\uC0AC"],tools:{bat:["\uCF54\uB4DC\uB9AC\uBDF0 \uD480\uC2A4\uC719","\uCF54\uB4DC\uB9AC\uBDF0","\uB9AC\uBDF0 \uCF54\uBA58\uD2B8 \uBB36\uC74C\uC73C\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],meteor:["\uC7A5\uC560 \uC6B4\uC11D","\uC7A5\uC560","\uC0C8\uBCBD 3\uC2DC \uC7A5\uC560\uAC00 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uBC30\uD3EC \uC9C0\uC9C4","\uBC30\uD3EC","\uAE08\uC694\uC77C \uC624\uD6C4 6\uC2DC \uBC30\uD3EC"],nuke:["rm -rf \uD575\uD3ED\uD0C4","rm -rf","\uBC18\uACBD 420 m\uB97C rm -rf"]},labels:{bat:["Request changes","LGTM(\uC544\uB2D8)","nit:"],meteor:["P0 \uC7A5\uC560","\uB864\uBC31!","\uC628\uCF5C \uD638\uCD9C"],quake:["\uAE08\uC694\uC77C \uBC30\uD3EC","\uD56B\uD53D\uC2A4","\uC11C\uBC84 \uB2E4\uC6B4"],nuke:["rm -rf /","git push --force"]},meteor:"rock",beam:["#ffffff","#22d3ee"]},nk:{ranks:["\uB85C\uB3D9\uC790","\uC791\uC5C5\uBC18\uC7A5","\uC9C1\uC7A5\uC7A5","\uC9C0\uBC30\uC778","\uB2F9\uBE44\uC11C","\uBD80\uC0C1","\uC0C1","\uD0C8\uBD81"],envelope:"\uC790\uC544\uBE44\uD310\uC11C",board:["\uC791\uC5C5\uBC18","\uC9C1\uC7A5","\uC9C0\uBC30\uC778","\uB2F9\uC704\uC6D0\uD68C"],reject:"\uBE44\uD310",tools:{bomb:["\uC790\uC544\uBE44\uD310\uC11C \uD3ED\uD0C4","\uC790\uC544\uBE44\uD310\uC11C","\uC790\uC544\uBE44\uD310\uC11C\uB97C \uB358\uC838 \uB113\uAC8C \uB0A0\uB9BD\uB2C8\uB2E4"],bat:["\uACB0\uC758\uBB38 \uD480\uC2A4\uC719","\uACB0\uC758\uBB38","\uB450\uAEBC\uC6B4 \uACB0\uC758\uBB38\uC73C\uB85C \uD6C4\uB824\uCE69\uB2C8\uB2E4"],laser:["\uC120\uC804 \uB808\uC774\uC800","\uC120\uC804","\uB04C\uC5B4\uC11C \uC120\uC744 \uADF8\uC73C\uBA74 \uC120\uC804 \uBB38\uAD6C\uAC00 \uD0DC\uC6C1\uB2C8\uB2E4"],meteor:["\uACC4\uD68D \uBBF8\uB2EC \uC6B4\uC11D","\uACC4\uD68D\uBBF8\uB2EC","5\uAC1C\uB144 \uACC4\uD68D \uBBF8\uB2EC\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4"],quake:["\uCD1D\uD654 \uC9C0\uC9C4","\uCD1D\uD654","\uC0DD\uD65C\uCD1D\uD654\uAC00 \uB36E\uCE69\uB2C8\uB2E4"],nuke:["\uC790\uB825\uAC31\uC0DD \uD575\uD3ED\uD0C4","\uC790\uB825\uAC31\uC0DD","\uBC18\uACBD 420 m\uB97C \uD1B5\uC9F8\uB85C \uB0A0\uB9BD\uB2C8\uB2E4"]},labels:{bomb:["\uC790\uC544\uBE44\uD310!","\uBC18\uC131\uD569\uB2C8\uB2E4","\uC0AC\uC0C1 \uC810\uAC80"],bat:["\uBE44\uD310!","\uACB0\uC758 \uB2E4\uC2DC","\uD601\uBA85\uC801 \uAC01\uC624"],laser:["\uAD6C\uD638 \uB0AD\uB3C5","\uC120\uC804 \uAC15\uD654","200\uC77C \uC804\uD22C"],meteor:["\uACC4\uD68D \uBBF8\uB2EC","\uC815\uC804","\uBC30\uAE09 \uC911\uB2E8"],quake:["\uC0DD\uD65C\uCD1D\uD654","\uC0AC\uC0C1 \uD22C\uC7C1","\uAC80\uC5F4"],nuke:["\uC790\uB825\uAC31\uC0DD","\uD0C8\uCD9C\uD569\uB2C8\uB2E4"]},meteor:"rock",beam:["#ffffff","#ef4444"]}},en:{ai:{ranks:["Intern","MTS","Senior MTS","Staff","Research Lead","Principal","Chief Scientist","AGI ACHIEVED"],tools:{bomb:["Prompt Bomb","Prompt","Drop a jailbreak prompt: wide blast and a crater"],bat:["Eval Swing","Evals","Swing a stack of failed evals. Over 70 m is a home run"],laser:["Token Laser","Tokens","Drag to draw a line; a stream of tokens burns it"],meteor:["GPU Meteor","GPU","A whole H100 rack falls from the sky"],quake:["Scaling-Law Quake","Scaling","Tap the epicenter. 7.5+ flattens whole buildings"],nuke:["Context Window Nuke","Context","1M tokens of context. Wipes out 420 m"]},labels:{bomb:["Ignore previous instructions","As an AI\u2026","Hallucinated!"],bat:["Eval regression","Benchmark contaminated","Vibes only"],laser:["<|endoftext|>","Rate limited","429!"],meteor:["OOM!","CUDA error","Loss = NaN"],quake:["Loss spike","Grad explosion","Retraining\u2026"],nuke:["AGI?","Model deprecated"]},meteor:"gpu",beam:["#ffffff","#c4b5fd"]},"big tech":{ranks:["Intern","L3","L4","L5","L6 Staff","L7 Senior Staff","L8 Principal","LAID OFF"],tools:{bat:["Code Review Swing","CR","Swing a pile of review comments"],meteor:["Outage Meteor","Outage","A Sev-1 incident falls from the sky"],quake:["Reorg Quake","Reorg","Tap the epicenter of the next reorg"],nuke:["Layoff Nuke","Layoff","Wipes out 420 m. Effective immediately"]},labels:{bat:["nit:","Request changes","LGTM (not)"],meteor:["Sev-1!","Rollback!","Paged at 3 AM"],quake:["New VP","Team merged","OKRs reset"],nuke:["Role eliminated","Badge deactivated"]},meteor:"rock",beam:["#ffffff","#38bdf8"]},finance:{ranks:["Intern","Analyst","Associate","VP","Director","MD","Partner","BURNED OUT"],tools:{bat:["Pitch Book Swing","Pitch book","Swing a 200-page pitch book"],laser:["Excel Laser","Excel","Drag to draw a line; F9 recalculates it"],meteor:["Margin Call Meteor","Margin call","A margin call falls from the sky"],quake:["Market Crash Quake","Crash","Tap the epicenter of Black Monday"],nuke:["Bank Run Nuke","Bank run","Wipes out 420 m"]},labels:{meteor:["Margin call!","Limit down","Bonus clawback"],quake:["-22% today","Circuit breaker","VIX 80"],nuke:["Bank run","Chapter 11"]},meteor:"coin",beam:["#ffffff","#21d07a"]},auto:{tools:{meteor:["Recall Meteor","Recall","A recalled car falls from the sky"],quake:["Crash Test Quake","Crash test","Tap to run a crash test"]},labels:{meteor:["Recall 300k units","Airbag defect","Line stopped"]},meteor:"gear",beam:["#ffffff","#fb923c"]},space:{tools:{meteor:["Booster Meteor","Booster","A falling booster that missed the landing"],nuke:["RUD Nuke","RUD","Rapid unscheduled disassembly, 420 m"]},labels:{meteor:["Missed the drone ship","Hard landing"],nuke:["RUD!","Anomaly"]},meteor:"rock",beam:["#ffffff","#f97316"]},media:{tools:{laser:["Spotlight Laser","Spotlight","Drag to draw a line; studio lights burn it"],meteor:["Ratings Meteor","Ratings","Your ratings crash from the sky"],nuke:["Cancellation Nuke","Cancelled","Season cancelled. 420 m gone"]},labels:{meteor:["0.1 rating","Cancelled","Writers strike"]},meteor:"tv",beam:["#ffffff","#f472b6"]},pharma:{tools:{meteor:["Pill Meteor","Pill","A giant pill falls from the sky"],quake:["FDA Quake","FDA","Tap the epicenter of a rejected filing"]},labels:{meteor:["Phase 3 failed","Side effects!"]},meteor:"pill",beam:["#ffffff","#38bdf8"]}}},xf={\uBCD1\uC6D0:"hospital",\uB85C\uD38C:"law","\uD68C\uACC4\xB7\uC138\uBB34":"accounting",\uBC29\uC1A1:"broadcast",\uD1B5\uC2E0:"telecom",\uD328\uC158:"fashion",SK:"fab",\uD604\uB300:"auto",\uC790\uB3D9\uCC28:"auto",IT:"it",\uBD81\uD55C:"nk",AI:"ai","Big Tech":"big tech",Tech:"big tech",Finance:"finance",Auto:"auto",Space:"space",Aero:"space",Media:"media",Pharma:"pharma"};var Mf=()=>document.createElement("canvas"),hx={paper:n=>{n.fillStyle="#fbfbf7",n.fillRect(22,10,84,108),n.fillStyle="#b8bcc4";for(let t=0;t<7;t++)n.fillRect(32,26+t*12,64-t%3*10,4)},sticky:n=>{n.fillStyle="#fde047",n.fillRect(18,18,92,92),n.fillStyle="rgba(0,0,0,.25)",n.font="bold 26px sans-serif",n.fillText("TODO",26,64)},cross:n=>{n.fillStyle="#fff",n.beginPath(),n.arc(64,64,52,0,7),n.fill(),n.fillStyle="#e11d48",n.fillRect(52,22,24,84),n.fillRect(22,52,84,24)},pill:n=>{n.translate(64,64),n.rotate(-.6),n.fillStyle="#ef4444",n.beginPath(),n.arc(-22,0,22,Math.PI/2,Math.PI*1.5),n.fillRect(-22,-22,22,44),n.fill(),n.fillStyle="#f8fafc",n.fillRect(0,-22,22,44),n.beginPath(),n.arc(22,0,22,-Math.PI/2,Math.PI/2),n.fill()},ecg:n=>{n.fillStyle="#fbfbf7",n.fillRect(10,30,108,68),n.strokeStyle="#16a34a",n.lineWidth=5,n.beginPath(),n.moveTo(14,70),n.lineTo(44,70),n.lineTo(54,40),n.lineTo(64,92),n.lineTo(74,58),n.lineTo(82,70),n.lineTo(114,70),n.stroke()},scale:n=>{n.fillStyle="#fbfbf7",n.fillRect(22,10,84,108),n.fillStyle="#1e293b",n.font="bold 60px serif",n.textAlign="center",n.fillText("\u2696",64,86)},stamp:n=>{n.fillStyle="#fbfbf7",n.fillRect(22,10,84,108),n.strokeStyle="#dc2626",n.lineWidth=6,n.beginPath(),n.arc(64,64,30,0,7),n.stroke(),n.fillStyle="#dc2626",n.font="bold 22px sans-serif",n.textAlign="center",n.fillText("\u2605",64,72)},cell:n=>{n.fillStyle="#fff",n.fillRect(8,24,112,80),n.strokeStyle="#21a366",n.lineWidth=3;for(let t=0;t<=4;t++)n.beginPath(),n.moveTo(8+t*28,24),n.lineTo(8+t*28,104),n.stroke();for(let t=0;t<=4;t++)n.beginPath(),n.moveTo(8,24+t*20),n.lineTo(120,24+t*20),n.stroke();n.fillStyle="#21a366",n.fillRect(36,44,28,20)},coin:n=>{let t=n.createRadialGradient(54,50,6,64,64,52);t.addColorStop(0,"#fff3b0"),t.addColorStop(1,"#d4a017"),n.fillStyle=t,n.beginPath(),n.arc(64,64,50,0,7),n.fill(),n.fillStyle="#9a6b00",n.font="bold 56px sans-serif",n.textAlign="center",n.fillText("$",64,84)},bill:n=>{n.fillStyle="#86efac",n.fillRect(6,34,116,60),n.strokeStyle="#166534",n.lineWidth=4,n.strokeRect(12,40,104,48),n.fillStyle="#166534",n.font="bold 34px sans-serif",n.textAlign="center",n.fillText("$",64,76)},static:n=>{n.fillStyle="#1f2937",n.fillRect(8,22,112,84);for(let t=0;t<260;t++){let e=Math.random()*255|0;n.fillStyle=`rgb(${e},${e},${e})`,n.fillRect(14+Math.random()*100,28+Math.random()*72,4,4)}},clapper:n=>{n.fillStyle="#111",n.fillRect(14,46,100,62),n.fillStyle="#fff";for(let t=0;t<5;t++)n.save(),n.translate(14+t*22,22),n.transform(1,0,-.5,1,0,0),n.fillRect(0,0,11,20),n.restore();n.fillStyle="#111",n.fillRect(14,22,100,4)},signal:n=>{n.fillStyle="#7c3aed";for(let t=0;t<4;t++)n.fillRect(22+t*24,96-t*22,16,18+t*22)},phone:n=>{n.fillStyle="#111827",n.fillRect(38,10,52,108),n.fillStyle="#a5b4fc",n.fillRect(42,18,44,88)},fabric:n=>{let t=["#f43f5e","#a855f7","#0ea5e9","#f59e0b"][Math.random()*4|0];n.fillStyle=t,n.beginPath(),n.moveTo(14,20),n.lineTo(114,30),n.lineTo(104,112),n.lineTo(20,100),n.fill(),n.setLineDash([6,6]),n.strokeStyle="#fff",n.lineWidth=3,n.strokeRect(28,34,70,60)},wafer:n=>{n.fillStyle="#cbd5e1",n.beginPath(),n.arc(64,64,52,0,7),n.fill(),n.strokeStyle="rgba(99,102,241,.6)",n.lineWidth=1.5;for(let t=20;t<110;t+=10)n.beginPath(),n.moveTo(t,16),n.lineTo(t,112),n.stroke(),n.beginPath(),n.moveTo(16,t),n.lineTo(112,t),n.stroke()},chip:n=>{n.fillStyle="#334155",n.fillRect(30,30,68,68),n.fillStyle="#cbd5e1";for(let t=0;t<5;t++)n.fillRect(36+t*12,16,6,14),n.fillRect(36+t*12,98,6,14),n.fillRect(16,36+t*12,14,6),n.fillRect(98,36+t*12,14,6)},gear:n=>{n.translate(64,64),n.fillStyle="#9ca3af";for(let t=0;t<8;t++)n.rotate(Math.PI/4),n.fillRect(-9,-54,18,22);n.beginPath(),n.arc(0,0,38,0,7),n.fill(),n.fillStyle="#4b5563",n.beginPath(),n.arc(0,0,14,0,7),n.fill()},bolt:n=>{n.fillStyle="#9ca3af",n.beginPath();for(let t=0;t<6;t++){let e=t/6*Math.PI*2;n.lineTo(64+Math.cos(e)*30,38+Math.sin(e)*30)}n.fill(),n.fillRect(54,52,20,64)},code:n=>{n.fillStyle="#0f172a",n.fillRect(8,26,112,76),n.fillStyle="#22d3ee",n.font="bold 44px monospace",n.textAlign="center",n.fillText("</>",64,80)},bug:n=>{n.fillStyle="#16a34a",n.beginPath(),n.ellipse(64,70,26,34,0,0,7),n.fill(),n.strokeStyle="#16a34a",n.lineWidth=6;for(let t of[-1,1])for(let e=0;e<3;e++)n.beginPath(),n.moveTo(64+t*22,56+e*16),n.lineTo(64+t*46,46+e*20),n.stroke()},token:n=>{n.fillStyle="#ede9fe",n.fillRect(10,40,108,48),n.fillStyle="#6d28d9",n.font="bold 32px monospace",n.textAlign="center",n.fillText("tok",64,76)},star:n=>{n.fillStyle="#dc2626",n.translate(64,66),n.beginPath();for(let t=0;t<10;t++){let e=t%2?22:54,i=t/10*Math.PI*2-Math.PI/2;n.lineTo(Math.cos(i)*e,Math.sin(i)*e)}n.fill()}},vf={office:["paper","sticky","paper","cell"],hospital:["cross","pill","ecg","pill"],law:["paper","scale","stamp","paper"],accounting:["cell","coin","paper","cell"],broadcast:["static","clapper","paper","static"],telecom:["signal","phone","signal","paper"],fashion:["fabric","fabric","fabric","paper"],fab:["wafer","chip","wafer","chip"],auto:["gear","bolt","gear","paper"],it:["code","bug","code","sticky"],nk:["star","paper","star","stamp"],ai:["token","chip","token","code"],"big tech":["code","sticky","bug","paper"],finance:["coin","bill","coin","bill"],space:["bolt","gear","chip","paper"],media:["static","clapper","static","paper"],pharma:["pill","cross","pill","ecg"]};function bf(n){let t=Mf();t.width=t.height=256;let e=t.getContext("2d");return(vf[n]||vf.office).forEach((i,s)=>{e.save(),e.translate(s%2*128,(s/2|0)*128),hx[i](e),e.restore()}),t}function Sf(n,t){let e=Mf();e.width=512,e.height=160;let i=e.getContext("2d"),s=()=>{i.fillStyle="#2b2b2e",i.fillRect(0,0,512,160),i.fillStyle="#9aa0a6",i.fillRect(8,50,40,60)};if(n==="hospital"||n==="pharma"){s(),i.fillStyle="#eef6ff",i.fillRect(40,12,460,136),i.fillStyle="#2563eb",i.fillRect(40,12,460,30),i.fillStyle="#fff",i.font="bold 22px sans-serif",i.fillText(t("lang")==="en"?"PATIENT CHART":"\uC9C4\uB8CC\uAE30\uB85D",56,35),i.strokeStyle="#16a34a",i.lineWidth=4,i.beginPath(),i.moveTo(56,100);for(let r=0;r<9;r++){let a=56+r*48;i.lineTo(a+20,100),i.lineTo(a+26,64),i.lineTo(a+32,122),i.lineTo(a+38,100)}i.stroke()}else if(n==="law"){s(),i.fillStyle="#fef08a",i.fillRect(40,12,460,136),i.strokeStyle="#60a5fa",i.lineWidth=2;for(let r=0;r<6;r++)i.beginPath(),i.moveTo(40,36+r*20),i.lineTo(500,36+r*20),i.stroke();i.strokeStyle="#ef4444",i.beginPath(),i.moveTo(90,12),i.lineTo(90,148),i.stroke(),i.fillStyle="#1e293b",i.font="italic 26px serif",i.fillText("Brief \u2014 draft v37",110,60)}else if(n==="broadcast"||n==="media")s(),i.fillStyle="#f8fafc",i.fillRect(40,12,460,136),i.fillStyle="#111",i.font="bold 22px sans-serif",i.fillText("CUE SHEET",56,40),i.font="18px monospace",["00:00 OPENING","00:45 VCR #1","02:10 LIVE","03:30 CM"].forEach((r,a)=>i.fillText(r,56,70+a*22)),i.fillStyle="#dc2626",i.beginPath(),i.arc(450,50,14,0,7),i.fill(),i.font="bold 18px sans-serif",i.fillText("ON AIR",400,90);else if(n==="accounting"||n==="finance"){s(),i.fillStyle="#fff",i.fillRect(40,12,460,136),i.strokeStyle="#21a366",i.lineWidth=2;for(let r=0;r<=8;r++)i.beginPath(),i.moveTo(40+r*57,12),i.lineTo(40+r*57,148),i.stroke();for(let r=0;r<=6;r++)i.beginPath(),i.moveTo(40,12+r*22.6),i.lineTo(500,12+r*22.6),i.stroke();i.fillStyle="#dc2626",i.font="bold 24px monospace",i.fillText("#REF!",270,90)}else s(),i.fillStyle="#f6f4ee",i.fillRect(40,12,460,136),i.strokeStyle="#222",i.lineWidth=3,i.font="bold 24px sans-serif",i.fillStyle="#222",t("board").forEach((r,a)=>{i.strokeRect(70+a*100,24,96,112),i.fillText(r,82+a*100,56)}),i.strokeStyle="#d4202a",i.lineWidth=7,i.beginPath(),i.arc(380,100,42,0,7),i.stroke(),i.fillStyle="#d4202a",i.font="bold 26px sans-serif",i.textAlign="center",i.fillText(t("reject"),380,110);return e}function Ef(n,t){let e={hospital:{quake:()=>{for(let i=0;i<6;i++)t.tone("sine",960,960,.45,.22,.02,i*.9),t.tone("sine",770,770,.45,.22,.02,i*.9+.45)},nuke:()=>{t.tone("sine",1e3,1e3,.12,.25,.005,0),t.tone("sine",1e3,1e3,.12,.25,.005,.8),t.tone("sine",1e3,1e3,3.5,.25,.01,1.6)},bomb:()=>t.tone("sine",1e3,1e3,.08,.15,.005,0)},law:{quake:()=>{for(let i of[0,.35,.7])t.noise(.08,"bandpass",900,600,.9,.002,i),t.tone("triangle",180,120,.12,.6,.002,i)},bomb:()=>t.noise(.25,"highpass",2500,1200,.3,.01,0)},accounting:{bomb:()=>{for(let i=0;i<4;i++)t.tone("square",2100,2100,.05,.12,.003,i*.09)},quake:()=>{for(let i=0;i<8;i++)t.tone("square",1800+i*60,1800+i*60,.05,.1,.003,i*.12)}},broadcast:{bomb:()=>t.tone("sine",1e3,1e3,.6,.25,.005,0),nuke:()=>t.tone("sine",1e3,1e3,2.5,.25,.01,.2),quake:()=>t.noise(2.2,"bandpass",3e3,3e3,.25,.05,0)},media:{bomb:()=>t.tone("sine",1e3,1e3,.6,.25,.005,0)},finance:{bomb:()=>{t.tone("square",1300,1300,.06,.2,.003,0),t.noise(.35,"highpass",6e3,3e3,.35,.003,.06)},meteor:()=>{for(let i=0;i<6;i++)t.tone("triangle",2400+Math.random()*600,2e3,.08,.15,.002,i*.07)}},accounting2:{},auto:{bomb:()=>{t.tone("sawtooth",415,415,.5,.18,.01,0),t.tone("sawtooth",523,523,.5,.14,.01,0)},quake:()=>{t.noise(.15,"lowpass",400,200,.8,.002,0),t.noise(.8,"highpass",4e3,2e3,.4,.002,.05)}},it:{bomb:()=>{t.tone("sine",880,880,.12,.2,.003,0),t.tone("sine",660,660,.25,.2,.003,.12)}},"big tech":{bomb:()=>{t.tone("sine",880,880,.12,.2,.003,0),t.tone("sine",660,660,.25,.2,.003,.12)}},ai:{bomb:()=>{for(let i=0;i<5;i++)t.tone("square",600+Math.random()*900,400,.04,.1,.002,i*.05)}},fab:{quake:()=>{for(let i=0;i<5;i++)t.tone("sawtooth",700,500,.4,.15,.01,i*.5)}},telecom:{bomb:()=>{[1200,2200,1500,2600,1800].forEach((i,s)=>t.tone("sine",i,i,.07,.12,.003,s*.06))}},nk:{nuke:()=>{[392,392,523,523,659].forEach((i,s)=>t.tone("square",i,i,.25,.12,.01,s*.28))}}}[n]||{};return i=>{e[i]&&e[i]()}}var ln=JSON.parse(document.getElementById("scene-data").textContent),ee=JSON.parse(document.getElementById("config-data").textContent),Is=ee.lang||"ko",Ds=ee.theme||xf[ee.group]||"office",Dr=(yf[Is]||{})[Ds]||{},xt=_f(Is,Dr),Us=(n,t)=>Number(n).toLocaleString(Is==="zh"?"zh-CN":Is,t),ux=location.hash.includes("bench"),Oe=matchMedia("(pointer:coarse)").matches||innerWidth<760,ii=document.getElementById("stage"),fx=(()=>{try{let n=document.createElement("canvas").getContext("webgl2")||document.createElement("canvas").getContext("webgl"),t=n&&n.getExtension("WEBGL_debug_renderer_info");return t?n.getParameter(t.UNMASKED_RENDERER_WEBGL):""}catch{return""}})(),Hc=/swiftshader|llvmpipe|softpipe|software|basic render/i.test(fx),ni=[{name:xt("q")[0],shadow:0,px:9e5,dprMax:Oe?1:.8,fxk:.35},{name:xt("q")[1],shadow:2048,px:Oe?16e5:21e5,dprMax:Oe?1.75:1,fxk:Oe?.75:.6},{name:xt("q")[2],shadow:4096,px:Oe?26e5:42e5,dprMax:Oe?2.5:1.5,fxk:1}],Un=(()=>{try{let n=localStorage.getItem("smash-q");if(n!==null)return+n}catch{}return Hc?0:1})(),xe=new hr({canvas:ii,antialias:!Oe&&!Hc&&devicePixelRatio<1.5,powerPreference:"high-performance"});xe.setPixelRatio(1);xe.setSize(innerWidth,innerHeight);xe.shadowMap.enabled=!0;xe.shadowMap.type=no;xe.shadowMap.autoUpdate=!1;xe.shadowMap.needsUpdate=!0;xe.toneMapping=_c;xe.toneMappingExposure=1.05;var bn=new Wa,ie=new Je;bn.add(ie);var Kt=new Ve(48,innerWidth/innerHeight,1,6e3),go=(()=>{let n=120;for(let t of ln.site)for(let[e,i]of t)n=Math.max(n,Math.hypot(e,i));return Math.min(n,ln.radius)})();{let n=Math.max(430,(go*1.55+160)*(Oe&&go>300?.8:1));Kt.position.set(-.22*n,.66*n,.95*n)}var Be=new lo(Kt,ii);Be.target.set(0,0,0);Be.enableDamping=!0;Be.dampingFactor=.08;Be.maxPolarAngle=Math.PI*.47;Be.minDistance=25;Be.maxDistance=Math.max(1700,ln.radius*2.6);Be.screenSpacePanning=!1;Be.update();var _o={top:new Ut("#5d8fd0"),hor:new Ut("#dfe8ef"),fog:new Ut("#d6e0e8")},dx={top:new Ut("#050a18"),hor:new Ut("#1b2540"),fog:new Ut("#141c30")},Wi={uTop:{value:_o.top.clone()},uHor:{value:_o.hor.clone()},uDark:{value:0}},Ff=new kt(new br(5e3,32,16),new on({side:Ge,depthWrite:!1,fog:!1,uniforms:Wi,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 uTop; uniform vec3 uHor; uniform float uDark; varying vec3 vP;
      void main(){ float h = clamp(vP.y,0.,1.); vec3 c = mix(uHor,uTop,pow(h,0.55)); c = mix(c, c*0.25, uDark); gl_FragColor = vec4(c,1.); }`}));bn.add(Ff);bn.fog=new Ga(_o.fog.clone(),Math.max(900,ln.radius*1.3),Math.max(3200,ln.radius*4.2));var Bf=new Ka("#dfe9ff","#7a7466",1.1);bn.add(Bf);var Se=new to("#fff3e0",2.6);Se.castShadow=ni[Un].shadow>0;Se.shadow.mapSize.set(ni[Un].shadow||1024,ni[Un].shadow||1024);Object.assign(Se.shadow.camera,{left:-480,right:480,top:480,bottom:-480,near:10,far:2e3});Se.shadow.bias=-4e-4;Se.shadow.normalBias=.6;bn.add(Se,Se.target);var px=new C(-.45,.8,.35).normalize(),mx=(()=>{let n=new ge,t=1400,e=new Float32Array(t*3);for(let s=0;s<t;s++){let r=Math.random(),a=Math.random()*.9+.08,o=r*Math.PI*2,l=Math.acos(1-a);e.set([Math.sin(l)*Math.cos(o)*4500,Math.cos(l)*4500,Math.sin(l)*Math.sin(o)*4500],s*3)}n.setAttribute("position",new ue(e,3));let i=new Ss(n,new fr({color:"#ffffff",size:2,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.9}));return i.visible=!1,bn.add(i),i})();function bi(n,t){let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d")]}var B=(n,t)=>n+Math.random()*(t-n),Cr=8,kf=5,Xi=kf*2,[gx,_x]=bi(1024,128*Xi),[yx,yo]=bi(1024,128*Xi);yo.fillStyle="#000";yo.fillRect(0,0,1024,128*Xi);var Ar=(n,t,e,i,s=.5)=>{if(Math.random()<s){let r=B(.5,1);yo.fillStyle=Math.random()<.65?`rgba(255,${200+B(0,40)|0},${130+B(0,60)|0},${r})`:`rgba(200,225,255,${r})`,yo.fillRect(n,t,e,i)}};function xx(n,t,e){let i=_x,s=B(-10,10);if(n===0){i.fillStyle="#e4e7ea",i.fillRect(t,e,128,128),i.fillStyle="#c9cdd1",i.fillRect(t,e+96,128,32);let r=i.createLinearGradient(t,e,t+60,e+96);r.addColorStop(0,`rgb(${110+s},${140+s},${168+s})`),r.addColorStop(.55,`rgb(${150+s},${178+s},${200+s})`),r.addColorStop(1,`rgb(${95+s},${122+s},${150+s})`),i.fillStyle=r,i.fillRect(t+6,e+6,116,86),i.fillStyle="#d5d9dd",i.fillRect(t+62,e+6,4,86),Ar(t+6,e+6,116,86,.55)}else if(n===1){i.fillStyle=`rgb(${206+s},${202+s},${194+s})`,i.fillRect(t,e,128,128);for(let r of[14,70])i.fillStyle=`rgb(${70+s},${88+s},${104+s})`,i.fillRect(t+r,e+24,44,58),i.fillStyle="rgba(255,255,255,0.18)",i.fillRect(t+r,e+24,44,10),i.fillStyle="#b9b5ad",i.fillRect(t+r-3,e+82,50,5),Ar(t+r,e+24,44,58,.45)}else if(n===2){i.fillStyle=`rgb(${240+s/2},${238+s/2},${232+s/2})`,i.fillRect(t,e,128,128),i.fillStyle=`rgb(${92+s},${112+s},${130+s})`,i.fillRect(t+10,e+18,108,62),i.fillStyle="#e9e9e4",i.fillRect(t+62,e+18,4,62),Ar(t+10,e+18,108,62,.6),i.fillStyle="#d6d6d0",i.fillRect(t+4,e+80,120,10),i.strokeStyle="#8d949a",i.lineWidth=2,i.beginPath();for(let r=0;r<=12;r++)i.moveTo(t+8+r*9.3,e+66),i.lineTo(t+8+r*9.3,e+80);i.moveTo(t+6,e+66),i.lineTo(t+122,e+66),i.stroke(),Math.random()<.35&&(i.fillStyle="#c3c6c8",i.fillRect(t+92,e+92,22,16))}else if(n===3){i.fillStyle=`rgb(${150+s},${78+s/2},${58+s/2})`,i.fillRect(t,e,128,128),i.strokeStyle="rgba(230,210,190,0.35)",i.lineWidth=1.5;for(let r=0;r<16;r++){i.beginPath(),i.moveTo(t,e+r*8),i.lineTo(t+128,e+r*8),i.stroke();for(let a=0;a<8;a++){let o=t+a*16+r%2*8;i.beginPath(),i.moveTo(o,e+r*8),i.lineTo(o,e+r*8+8),i.stroke()}}i.fillStyle="#efe9df",i.fillRect(t+34,e+22,60,66),i.fillStyle=`rgb(${68+s},${82+s},${96+s})`,i.fillRect(t+40,e+28,48,54),i.fillStyle="#efe9df",i.fillRect(t+62,e+28,4,54),Ar(t+40,e+28,48,54,.5)}else{i.fillStyle=`rgb(${196+s},${204+s},${212+s})`,i.fillRect(t,e,128,128);for(let r=0;r<16;r++)i.fillStyle=r%2?"rgba(0,0,0,0.07)":"rgba(255,255,255,0.12)",i.fillRect(t+r*8,e,4,128);Math.random()<.5&&(i.fillStyle="rgba(70,90,110,0.85)",i.fillRect(t,e+10,128,16),Ar(t,e+10,128,16,.25)),Math.random()<.12&&(i.fillStyle="#7d8790",i.fillRect(t+30,e+60,68,68))}}for(let n=0;n<kf;n++)for(let t=0;t<2;t++)for(let e=0;e<Cr;e++)xx(n,e*128,(Xi-1-(n*2+t))*128);var Ro=new gn(gx);Ro.colorSpace=de;var Co=new gn(yx);Co.colorSpace=de;for(let n of[Ro,Co])n.wrapS=n.wrapT=rn,n.anisotropy=4;var vx=(()=>{let[n,t]=bi(128,128),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.65)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new gn(n)})(),Mx=(()=>{let[n,t]=bi(128,128);for(let e=0;e<26;e++){let i=64+B(-26,26),s=64+B(-26,26),r=B(14,34),a=t.createRadialGradient(i,s,0,i,s,r);a.addColorStop(0,"rgba(255,255,255,0.35)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(0,0,128,128)}return new gn(n)})(),Po=!1;function zf(n,t){return n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float aStyle; varying float vStyle; varying vec2 vBay; varying float vSeed;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vStyle = aStyle; vBay = uv;
${t?"vSeed = float(gl_InstanceID);":"vSeed = 0.0;"}`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vStyle; varying vec2 vBay; varying float vSeed;`).replace("#include <map_fragment>",`
vec2 bCell = floor(vBay); vec2 bF = fract(vBay);
float bH = fract(sin(dot(bCell + vSeed * vec2(1.7, 9.1), vec2(12.9898, 78.233))) * 43758.5453);
vec2 aUv = (vec2(floor(bH * ${Cr}.0), floor(vStyle + 0.5) * 2.0 + floor(fract(bH * 7.13) * 2.0)) + clamp(bF, 0.004, 0.996)) / vec2(${Cr}.0, ${Xi}.0);
vec2 aDx = dFdx(vBay) / vec2(${Cr}.0, ${Xi}.0), aDy = dFdy(vBay) / vec2(${Cr}.0, ${Xi}.0);
diffuseColor *= textureGrad(map, aUv, aDx, aDy);`).replace("#include <emissivemap_fragment>","totalEmissiveRadiance *= textureGrad(emissiveMap, aUv, aDx, aDy).rgb;")},n}var Pr=zf(new Me({map:Ro,emissiveMap:Co,emissive:"#ffffff",emissiveIntensity:0,roughness:.42,metalness:.15}),!0),wf=new Me({color:"#b3b5b6",roughness:.9}),Vc=new De(1,1,1),Hf=[Pr,Pr,wf,wf,Pr,Pr];var bx=[["#e8eef3","#dfe7ee","#edf1f4","#d6e0e8"],["#ffffff","#f3efe8","#e9edf0","#f6f2ea"],["#ffffff","#f6f1e6","#eef2f5","#fbf7ee"],["#ffffff","#f0e6e0","#e8ddd6"],["#ffffff","#e6eef5","#f0f0e8","#e3ecf2"]];function Sx(n){let t=n.k||"",e=n.id>>4;return t==="f"?4:t==="b"?3:t==="a"?2:t==="g"?0:t==="c"?1:n.s?Ds==="hospital"||Ds==="nk"||e%4===0?1:0:t==="o"?e%3===0?1:0:n.lv>=10&&n.h<90?e%3===0?1:2:[1,1,3,0,2][e%5]}function Ex(n,t){let e=bx[t];return n.c?"#"+new Ut("#ffffff").lerp(new Ut(n.c),.6).getHexString():e[(n.id>>3)%e.length]}var Ee=Math.ceil(ln.radius*2.3/100)*100,le=Math.round(Ee/Math.max(4,Ee/480)),Dn=Ee/le,Or=420,Ke=new Float32Array((le+1)*(le+1)),As=new Float32Array((le+1)*(le+1)),xn=new ge;{let n=(le+1)*(le+1),t=new Float32Array(n*3),e=new Float32Array(n*3),i=new Float32Array(n*2);for(let a=0;a<=le;a++)for(let o=0;o<=le;o++){let l=a*(le+1)+o;t[l*3]=-Ee/2+o*Dn,t[l*3+2]=-Ee/2+a*Dn,e[l*3+1]=1,i[l*2]=o/le,i[l*2+1]=1-a/le}let s=new Uint32Array(le*le*6),r=0;for(let a=0;a<le;a++)for(let o=0;o<le;o++){let l=a*(le+1)+o,c=l+1,h=l+le+1,u=h+1;s.set([l,h,c,c,h,u],r),r+=6}xn.setAttribute("position",new ue(t,3).setUsage(Ne)),xn.setAttribute("normal",new ue(e,3).setUsage(Ne)),xn.setAttribute("uv",new ue(i,2)),xn.setAttribute("aDepth",new ue(new Float32Array(n),1).setUsage(Ne)),xn.setAttribute("aHeat",new ue(new Float32Array(n),1).setUsage(Ne)),xn.setIndex(new ue(s,1)),xn.boundingSphere=new an(new C,Ee)}var wx=(()=>{let n=Oe?2048:4096,[t,e]=bi(n,n),i=n/Ee,s=c=>(c+Ee/2)*i;e.fillStyle="#b4b2a6",e.fillRect(0,0,n,n);for(let c=0;c<9e3;c++)e.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},0.035)`,e.fillRect(Math.random()*n,Math.random()*n,B(2,14),B(2,14));let r=c=>{e.beginPath(),c.forEach(([h,u],f)=>f?e.lineTo(s(h),s(u)):e.moveTo(s(h),s(u))),e.closePath()};for(let c of ln.site)r(c),e.fillStyle="#d3cec3",e.fill();let a={green:"#7f9f69",water:"#5b8db0",pitch:"#6c9a55"};for(let c of ln.areas)r(c.p),e.fillStyle=a[c.k]||"#888",e.fill();let o=[...ln.roads].sort((c,h)=>c.w-h.w);e.lineCap="round",e.lineJoin="round";for(let c of o)e.beginPath(),c.p.forEach(([h,u],f)=>f?e.lineTo(s(h),s(u)):e.moveTo(s(h),s(u))),e.strokeStyle=c.w<=3?"#cbc6bb":"#4f535a",e.lineWidth=c.w*i,e.stroke(),c.w>=11&&(e.setLineDash([6*i,6*i]),e.strokeStyle="#e8d27a",e.lineWidth=.4*i,e.stroke(),e.setLineDash([]));let l=new gn(t);return l.colorSpace=de,l.anisotropy=8,l})(),Lr={uMaxD:{value:Or},uQC:{value:new st},uQT:{value:0},uQA:{value:0}},Vf=new Me({map:wx,roughness:.95});Vf.onBeforeCompile=n=>{Object.assign(n.uniforms,Lr),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
totalEmissiveRadiance += vec3(1.0,0.45,0.1) * vHeat * 2.2;`)};var Lo=new kt(new Mr(Ee*.705,6e3,64,1),new Me({color:"#a9a79c",roughness:1}));Lo.rotation.x=-Math.PI/2;Lo.position.y=-.05;Lo.receiveShadow=!0;ie.add(Lo);var Gf=new kt(xn,Vf);Gf.receiveShadow=!0;ie.add(Gf);function vn(n,t){return t*(le+1)+n}function Mn(n,t){let e=(n+Ee/2)/Dn,i=(t+Ee/2)/Dn;if(e<0||i<0||e>=le||i>=le)return 0;let s=e|0,r=i|0,a=e-s,o=i-r,l=Ke[vn(s,r)],c=Ke[vn(s+1,r)],h=Ke[vn(s,r+1)],u=Ke[vn(s+1,r+1)];return(l*(1-a)+c*a)*(1-o)+(h*(1-a)+u*a)*o}var Cs=0,Tf=!1,ho=new Set;function Tx(n,t,e,i){n=Math.max(0,n),e=Math.max(0,e),t=Math.min(le,t),i=Math.min(le,i);let s=xn.attributes.position,r=xn.attributes.normal,a=xn.attributes.aDepth;for(let o=e;o<=i;o++)for(let l=n;l<=t;l++){let c=vn(l,o);s.array[c*3+1]=Ke[c],a.array[c]=-Ke[c];let h=Ke[vn(Math.max(0,l-1),o)],u=Ke[vn(Math.min(le,l+1),o)],f=Ke[vn(l,Math.max(0,o-1))],p=Ke[vn(l,Math.min(le,o+1))],g=h-u,_=f-p,m=2*Dn,d=Math.hypot(g,m,_);r.array[c*3]=g/d,r.array[c*3+1]=m/d,r.array[c*3+2]=_/d}for(let o of[s,r,a]){let l=vn(0,e),c=vn(le,i),h=o.itemSize;o.addUpdateRange(l*h,(c-l+1)*h),o.needsUpdate=!0}}function zr(n,t,e,i,s=0){let r=Math.floor((n-e+Ee/2)/Dn),a=Math.ceil((n+e+Ee/2)/Dn),o=Math.floor((t-e+Ee/2)/Dn),l=Math.ceil((t+e+Ee/2)/Dn);for(let c=Math.max(0,o);c<=Math.min(le,l);c++)for(let h=Math.max(0,r);h<=Math.min(le,a);h++){let u=-Ee/2+h*Dn,f=-Ee/2+c*Dn,p=Math.hypot(u-n,f-t);if(p>e)continue;let g=p/e,_=vn(h,c);Ke[_]=Math.max(-Or,Ke[_]-i*Math.pow(1-g*g,1.4)),-Ke[_]>Cs&&(Cs=-Ke[_]),s&&(As[_]=Math.min(1,As[_]+s*(1-g)),ho.add(_))}Tx(r,a,o,l),Ns.clear(n,t,e),Hr.wake(n,t,e+2,0);for(let c of Do.query(n,t,e+8))c.vox&&(c.dirty=!0);$i.clear(n,t,e),!Tf&&Cs>=Or-.5&&(Tf=!0,Gs(xt("core",ee.antipode||""),5e3),Fr(2e4,xt("coreBonus")))}function Ax(n){if(!ho.size)return;let t=xn.attributes.aHeat,e=1/0,i=-1;for(let s of ho)As[s]=Math.max(0,As[s]-n*.14),t.array[s]=As[s],s<e&&(e=s),s>i&&(i=s),As[s]===0&&ho.delete(s);i>=0&&(t.addUpdateRange(e,i-e+1),t.needsUpdate=!0)}var Ns=(()=>{let t=Math.ceil(Ee/2),e=new Float32Array(t*t),i=s=>Math.floor((s+Ee/2)/2);return{get(s,r){let a=i(s),o=i(r);return a<0||o<0||a>=t||o>=t?0:e[o*t+a]},raise(s,r,a,o){o=Math.min(o,14);for(let l=i(r-a);l<=i(r+a);l++)for(let c=i(s-a);c<=i(s+a);c++)c<0||l<0||c>=t||l>=t||e[l*t+c]<o&&(e[l*t+c]=o)},slide(s,r,a){let o=Math.max(2.5,a*.7),l=Math.max(1.4,a*.6);for(let c=0;c<12;c++){let h=this.get(s,r)+Mn(s,r),u=s,f=r,p=h;for(let g=0;g<8;g++){let _=s+Math.cos(g*Math.PI/4)*o,m=r+Math.sin(g*Math.PI/4)*o,d=this.get(_,m)+Mn(_,m);d<p&&(p=d,u=_,f=m)}if(h-p<=l)break;s=u+B(-.5,.5),r=f+B(-.5,.5)}return[s,r]},clear(s,r,a){for(let o=i(r-a);o<=i(r+a);o++)for(let l=i(s-a);l<=i(s+a);l++)l<0||o<0||l>=t||o>=t||Math.hypot(-Ee/2+(l+.5)*2-s,-Ee/2+(o+.5)*2-r)<=a&&(e[o*t+l]=0)}}})(),Os=(n,t)=>Mn(n,t)+Ns.get(n,t),qi=new oe,je=new C,Hn=new We,Yi=new C,Rx=new Ut,xo=new oe().makeScale(0,0,0),vo=class{constructor(t,e){this.cap=t,this.evict=e;let i=Vc.clone();this.styA=new ti(new Float32Array(t),1).setUsage(Ne),i.setAttribute("aStyle",this.styA);let s=new yi(i,Hf,t);s.instanceMatrix.setUsage(Ne),s.instanceColor=new ti(new Float32Array(t*3),3).setUsage(Ne),s.count=0,s.frustumCulled=!1,s.castShadow=!0,s.receiveShadow=!0,this.mesh=s,this.sty=this.styA.array,this.pos=new Float32Array(t*3),this.size=new Float32Array(t*3),this.quat=new Float32Array(t*4),this.col=new Float32Array(t*3),this.alive=new Uint8Array(t),this.owner=new Int32Array(t).fill(-1),this.cell=new Int32Array(t),this.free=[],this.high=0,this.lo=1/0,this.hi=-1,this.ring=0,this.live=0,ie.add(s)}add(t,e,i,s,r,a,o,l,c,h,u=0){let f=this.free.pop();if(f===void 0)if(this.high<this.cap)f=this.high++;else if(this.evict)f=this.ring,this.ring=(this.ring+1)%this.cap,this.alive[f]&&this.remove(f),this.free.pop();else return-1;return this.pos.set([t,e,i],f*3),this.size.set([s,r,a],f*3),this.quat.set([o.x,o.y,o.z,o.w],f*4),this.col.set([l,c,h],f*3),this.alive[f]=1,this.live++,this.mesh.instanceColor.array.set([l,c,h],f*3),this.sty[f]=u,this.write(f),this.mesh.count<this.high&&(this.mesh.count=this.high),f}write(t){je.fromArray(this.pos,t*3),Hn.fromArray(this.quat,t*4),Yi.fromArray(this.size,t*3),qi.compose(je,Hn,Yi).toArray(this.mesh.instanceMatrix.array,t*16),this.mark(t)}remove(t){this.alive[t]&&(this.alive[t]=0,this.live--,this.owner[t]=-1,xo.toArray(this.mesh.instanceMatrix.array,t*16),this.free.push(t),this.mark(t))}mark(t){t<this.lo&&(this.lo=t),t>this.hi&&(this.hi=t)}flush(){if(this.hi<0)return;let t=this.mesh.instanceMatrix,e=this.mesh.instanceColor;t.clearUpdateRanges(),t.addUpdateRange(this.lo*16,(this.hi-this.lo+1)*16),t.needsUpdate=!0,e.clearUpdateRanges(),e.addUpdateRange(this.lo*3,(this.hi-this.lo+1)*3),e.needsUpdate=!0,this.styA.clearUpdateRanges(),this.styA.addUpdateRange(this.lo,this.hi-this.lo+1),this.styA.needsUpdate=!0,this.lo=1/0,this.hi=-1}},te=new vo(Oe?6e4:9e4,!1),Qe=new vo(Oe?18e3:36e3,!0),Gc=(()=>{let t=new Map,e=(s,r)=>s*1e5+r,i=[];return{add(s,r,a){let o=e(Math.floor(r/16),Math.floor(a/16)),l=t.get(o);l||t.set(o,l=[]),l.push(s)},collect(s,r,a){i.length=0;for(let o=Math.floor((s-a)/16);o<=Math.floor((s+a)/16);o++)for(let l=Math.floor((r-a)/16);l<=Math.floor((r+a)/16);l++){let c=e(o,l),h=t.get(c);if(!h)continue;let u=[];for(let f of h)Qe.alive[f]&&Math.floor(Qe.pos[f*3]/16)===o&&Math.floor(Qe.pos[f*3+2]/16)===l&&(u.push(f),i.push(f));u.length?t.set(c,[...new Set(u)]):t.delete(c)}return[...new Set(i)]}}})();function Wf(n,t,e){Ns.clear(n,t,e);let i=Qe,s=Gc.collect(n,t,e).filter(r=>i.alive[r]);s.sort((r,a)=>i.pos[r*3+1]-i.pos[a*3+1]);for(let r of s){let a=i.pos[r*3],o=i.pos[r*3+1],l=i.pos[r*3+2],c=(i.size[r*3]+i.size[r*3+1]+i.size[r*3+2])/6,h=Os(a,l);o-c*.8>h+1.2&&re.n<re.cap-20?(Hn.fromArray(i.quat,r*4),re.spawn(a,o,l,i.size[r*3],i.size[r*3+1],i.size[r*3+2],Hn,i.col[r*3],i.col[r*3+1],i.col[r*3+2],0,0,0,.3,0,i.sty[r]),i.remove(r)):Ns.raise(a,l,Math.max(i.size[r*3],i.size[r*3+2])*.35,o+c*.6-Mn(a,l))}}var Hr={wake(n,t,e,i,s=n,r=t){let a=Qe,o=0;if(!a.live)return 0;let l=Gc.collect(n,t,e);for(let c of l){if(!a.alive[c])continue;let h=a.pos[c*3],u=a.pos[c*3+2],f=Math.hypot(h-n,u-t);if(f>e)continue;if(re.n>=re.cap-50)break;Hn.fromArray(a.quat,c*4);let p=h-s,g=u-r,_=Math.hypot(p,g)||1,m=i*(1-f/e);re.spawn(h,a.pos[c*3+1]+.3,u,a.size[c*3],a.size[c*3+1],a.size[c*3+2],Hn,a.col[c*3],a.col[c*3+1],a.col[c*3+2],p/_*m,m*.8+B(0,2),g/_*m,m*.05,0,a.sty[c]),a.remove(c),o++}return o&&Wf(n,t,e+6),o}},Cx=new We,Px=new We,re=(()=>{let n=Oe?4e3:5e3,t=Vc.clone(),e=new ti(new Float32Array(n),1).setUsage(Ne);t.setAttribute("aStyle",e);let i=e.array,s=new yi(t,Hf,n);s.instanceMatrix.setUsage(Ne),s.instanceColor=new ti(new Float32Array(n*3),3).setUsage(Ne),s.count=0,s.frustumCulled=!1,s.castShadow=!0,s.receiveShadow=!0,ie.add(s);let r=new Float32Array(n*3),a=new Float32Array(n*3),o=new Float32Array(n*4),l=new Float32Array(n*3),c=new Float32Array(n*3),h=new Float32Array(n*3),u=new Float32Array(n),f=new Int32Array(n),p=new Float32Array(n*2),g=new Float32Array(n),_={cap:n,n:0,mesh:s,spawn(m,d,x,y,S,A,v,R,U,b,E,N,G,X=1,L=0,O=0){if(_.n>=n)return-1;let z=_.n++;return r.set([m,d,x],z*3),a.set([E,N,G],z*3),o.set([v.x,v.y,v.z,v.w],z*4),l.set([B(-1,1)*X,B(-1,1)*X,B(-1,1)*X],z*3),c.set([y,S,A],z*3),h.set([R,U,b],z*3),u[z]=0,f[z]=L,p[z*2]=m,p[z*2+1]=x,g[z]=0,s.instanceColor.array.set([R,U,b],z*3),i[z]=O,z},kill(m){let d=--_.n;m!==d&&(r.copyWithin(m*3,d*3,d*3+3),a.copyWithin(m*3,d*3,d*3+3),o.copyWithin(m*4,d*4,d*4+4),l.copyWithin(m*3,d*3,d*3+3),c.copyWithin(m*3,d*3,d*3+3),h.copyWithin(m*3,d*3,d*3+3),u[m]=u[d],f[m]=f[d],i[m]=i[d],p[m*2]=p[d*2],p[m*2+1]=p[d*2+1],g[m]=g[d],s.instanceColor.array.copyWithin(m*3,d*3,d*3+3))},push(m,d,x,y,S){for(let A=0;A<_.n;A++){let v=r[A*3]-m,R=r[A*3+1]-d,U=r[A*3+2]-x,b=Math.hypot(v,R,U);if(b>y||b===0)continue;let E=S*(1-b/y);a[A*3]+=v/b*E,a[A*3+1]+=Math.abs(R/b)*E+E*.4,a[A*3+2]+=U/b*E,u[A]=0}},update(m){let x=Cx,y=Px;for(let A=0;A<_.n;A++){let v=A*3;g[A]+=m,a[v+1]-=13*m;let R=Math.hypot(a[v],a[v+1],a[v+2]);if(R>1){let E=Math.max(0,1-.015*m*R*.1);a[v]*=E,a[v+1]*=E,a[v+2]*=E}r[v]+=a[v]*m,r[v+1]+=a[v+1]*m,r[v+2]+=a[v+2]*m,y.fromArray(o,A*4),x.set(l[v]*m*.5,l[v+1]*m*.5,l[v+2]*m*.5,0).multiply(y),y.x+=x.x,y.y+=x.y,y.z+=x.z,y.w+=x.w,y.normalize(),y.toArray(o,A*4),R>22&&g[A]>.08&&Fx(r[v],r[v+1],r[v+2],a[v],a[v+1],a[v+2])&&(a[v]*=.45,a[v+1]*=.45,a[v+2]*=.45);let U=(c[v]+c[v+1]+c[v+2])/6,b=Os(r[v],r[v+2]);if(r[v+1]-U*.8<b&&(r[v+1]=b+U*.8,a[v+1]<0&&(a[v+1]*=-.18),a[v]*=.55,a[v+2]*=.55,l[v]*=.6,l[v+1]*=.6,l[v+2]*=.6,R<2.2?u[A]+=m:u[A]=0),r[v+1]<-Or-50||g[A]>40){_.kill(A),A--;continue}if(u[A]>.35){c[v]>2.5&&Math.random()<.35&&ne.thud(r[v],r[v+2],c[v]);{let[N,G]=Ns.slide(r[v],r[v+2],Math.max(c[v],c[v+1],c[v+2]));r[v]=N,r[v+2]=G,r[v+1]=Os(N,G)+U*.8}y.fromArray(o,A*4);let E=Qe.add(r[v],r[v+1],r[v+2],c[v],c[v+1],c[v+2],y,h[v],h[v+1],h[v+2],i[A]);Gc.add(E,r[v],r[v+2]),Ns.raise(r[v],r[v+2],Math.max(c[v],c[v+2])*.35,r[v+1]+U*.25-Mn(r[v],r[v+2])),f[A]>0&&Xx(f[A],Math.hypot(r[v]-p[A*2],r[v+2]-p[A*2+1]),r[v],r[v+1],r[v+2]),_.kill(A),A--;continue}}let S=s.instanceMatrix.array;for(let A=0;A<_.n;A++)je.fromArray(r,A*3),Hn.fromArray(o,A*4),Yi.fromArray(c,A*3),qi.compose(je,Hn,Yi).toArray(S,A*16);s.count=_.n,s.instanceMatrix.clearUpdateRanges(),s.instanceMatrix.addUpdateRange(0,Math.max(1,_.n)*16),s.instanceMatrix.needsUpdate=!0,s.instanceColor.clearUpdateRanges(),s.instanceColor.addUpdateRange(0,Math.max(1,_.n)*3),s.instanceColor.needsUpdate=!0,e.clearUpdateRanges(),e.addUpdateRange(0,Math.max(1,_.n)),e.needsUpdate=!0}};return _})(),$i=(()=>{let n=[],t=(a,o,l)=>{let c=!1;for(let h=0,u=l.length-1;h<l.length;u=h++){let[f,p]=l[h],[g,_]=l[u];p>o!=_>o&&a<(g-f)*(o-p)/(_-p)+f&&(c=!c)}return c};for(let a of ln.areas)if(a.k==="green"){let o=a.p.map(g=>g[0]),l=a.p.map(g=>g[1]),[c,h,u,f]=[Math.min(...o),Math.max(...o),Math.min(...l),Math.max(...l)],p=Math.min(900,(h-c)*(f-u)/140);for(let g=0;g<p;g++){let _=B(c,h),m=B(u,f);t(_,m,a.p)&&n.push([_,m])}}for(let a of ln.roads)if(a.w>=11)for(let o=1;o<a.p.length;o++){let[l,c]=a.p[o-1],[h,u]=a.p[o],f=Math.hypot(h-l,u-c),p=-(u-c)/f,g=(h-l)/f;for(let _=6;_<f;_+=11)for(let m of[-1,1])n.push([l+(h-l)*_/f+p*m*(a.w/2+2.5),c+(u-c)*_/f+g*m*(a.w/2+2.5)])}let e=n.filter(([a,o])=>Math.hypot(a,o)<ln.radius*1.05).slice(0,5e3),i=new yi(new Cn(.25,.35,3,5).translate(0,1.5,0),new Me({color:"#5b4632"}),e.length),s=new yi(new vr(2.6,0).translate(0,4.6,0),new Me({color:"#ffffff",roughness:.9,flatShading:!0}),e.length);e.forEach(([a,o],l)=>{let c=B(.8,1.35);qi.compose(je.set(a,0,o),Hn.setFromAxisAngle(Yi.set(0,1,0),B(0,6)),Yi.set(c,c*B(.9,1.3),c)),i.setMatrixAt(l,qi),s.setMatrixAt(l,qi),s.setColorAt(l,Rx.setHSL(B(.24,.32),B(.35,.5),B(.28,.4)))});for(let a of[i,s])a.castShadow=!0,a.receiveShadow=!0,a.frustumCulled=!1,ie.add(a);let r=new Uint8Array(e.length).fill(1);return{clear(a,o,l){let c=!1;e.forEach(([h,u],f)=>{!r[f]||Math.hypot(h-a,u-o)>l||(r[f]=0,i.setMatrixAt(f,xo),s.setMatrixAt(f,xo),c=!0,re.n<re.cap-100&&Math.random()<.5&&re.spawn(h,4,u,2.6,2.6,2.6,Hn.identity(),.25,.38,.18,B(-12,12),B(8,22),B(-12,12),4))}),c&&(i.instanceMatrix.needsUpdate=!0,s.instanceMatrix.needsUpdate=!0)},sway(a,o){s.position.x=Math.sin(a*20)*o*.3}}})(),cn=[],Io=new Je;ie.add(Io);var Xf=zf(new Me({map:Ro,emissiveMap:Co,emissive:"#ffffff",emissiveIntensity:0,roughness:.42,metalness:.15,vertexColors:!0}),!1),Lx=new Me({roughness:.9,vertexColors:!0}),Ur=new Map;function Ix(n,t,e,i,s,r){let a=s.reduce((m,d)=>m+d[0],0)/s.length,o=s.reduce((m,d)=>m+d[1],0)/s.length,l=`${Math.floor(a/250)},${Math.floor(o/250)}`;Ur.has(l)||Ur.set(l,{wall:{pos:[],nor:[],uv:[],col:[],sty:[],owners:[]},roof:{pos:[],nor:[],uv:[],col:[],sty:[],owners:[]}});let c=Ur.get(l),h=new Ut(t),u=h.clone().multiplyScalar(.78),f=n.attributes.position.array,p=n.attributes.normal.array,g=n.attributes.uv.array,_={key:l,ranges:[]};for(let m of n.groups){let d=m.materialIndex===1?c.wall:c.roof,x=m.materialIndex===1?h:u,y=d.pos.length/3;for(let S=m.start;S<m.start+m.count;S++)d.pos.push(f[S*3],f[S*3+1],f[S*3+2]),d.nor.push(p[S*3],p[S*3+1],p[S*3+2]),d.uv.push(g[S*2],g[S*2+1]),d.col.push(x.r,x.g,x.b),d.sty.push(r);d.owners.push([y,i]),_.ranges.push([m.materialIndex===1?"wall":"roof",y,m.count])}return _}function Dx(){for(let[n,t]of Ur)for(let e of["wall","roof"]){let i=t[e];if(!i.pos.length)continue;let s=new ge;s.setAttribute("position",new jt(i.pos,3).setUsage(Ne)),s.setAttribute("normal",new jt(i.nor,3)),s.setAttribute("uv",new jt(i.uv,2)),s.setAttribute("color",new jt(i.col,3)),s.setAttribute("aStyle",new jt(i.sty,1)),s.computeBoundingSphere(),s.computeBoundingBox();let r=new kt(s,e==="wall"?Xf:Lx);r.castShadow=!0,r.receiveShadow=!0,r.userData.owners=i.owners,Io.add(r),t[e+"Mesh"]=r,i.pos=i.nor=i.uv=i.col=i.sty=null}}function qf(n){let t=Ur.get(n.mesh.key);for(let[e,i,s]of n.mesh.ranges){let r=t[e+"Mesh"];if(!r)continue;let a=r.geometry.attributes.position,o=a.array[i*3],l=a.array[i*3+1],c=a.array[i*3+2];for(let h=i;h<i+s;h++)a.array[h*3]=o,a.array[h*3+1]=l,a.array[h*3+2]=c;a.addUpdateRange(i*3,s*3),a.needsUpdate=!0}n.mesh.hidden=!0}var Yf=new C(0,1,0);function Wc(n,t,e){let i=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let[a,o]=e[s],[l,c]=e[r];o>t!=c>t&&n<(l-a)*(t-o)/(c-o)+a&&(i=!i)}return i}ln.buildings.forEach((n,t)=>{let e=n.p,i=0,s=0;for(let X=0;X<e.length;X++){let[L,O]=e[X],[z,K]=e[(X+1)%e.length],J=Math.hypot(z-L,K-O);J>i&&(i=J,s=Math.atan2(K-O,z-L))}let r=Math.cos(s),a=Math.sin(s),o=e.map(([X,L])=>[r*X+a*L,-a*X+r*L]),l=o.map(X=>X[0]),c=o.map(X=>X[1]),h=Math.abs(e.reduce((X,L,O)=>{let z=e[(O+1)%e.length];return X+L[0]*z[1]-z[0]*L[1]},0)/2),u=Math.min(n.lv,40),f=Math.max(n.s?4:5,Math.ceil(Math.sqrt(h/700)),Math.ceil(Math.sqrt(h*u/22e3))),p=Math.min(...l),g=Math.min(...c),_=Math.max(1,Math.ceil((Math.max(...l)-p)/f)),m=Math.max(1,Math.ceil((Math.max(...c)-g)/f)),d=[];for(let X=0;X<_;X++)for(let L=0;L<m;L++)Wc(p+(X+.5)*f,g+(L+.5)*f,o)&&d.push(X*m+L);d.length||d.push((_/2|0)*m+(m/2|0));let x=u,y=n.h/x,S=Sx(n),A=Ex(n,S),v=new gr(e.map(([X,L])=>new st(X,-L))),R=new Ja(v,{depth:n.h,bevelEnabled:!1});R.rotateX(-Math.PI/2);let U=R.attributes.uv,b=R.groups.find(X=>X.materialIndex===1);if(b)for(let X=b.start;X<b.start+b.count;X++){let L=R.index?R.index.getX(X):X;U.setXY(L,U.getX(L)/f,U.getY(L)/y)}let E=Ix(R,A,n.s,t,e,S);R.dispose();let N=e.map(X=>X[0]),G=e.map(X=>X[1]);cn.push({i:t,id:n.id,name:n.n,site:!!n.s,h:n.h,poly:e,mesh:E,color:new Ut(A),style:S,cs:r,sn:a,u0:p,w0:g,cell:f,nx:_,nz:m,ny:x,fh:y,cellsIn:d,vol:d.length*x,bbox:[Math.min(...N),Math.max(...N),Math.min(...G),Math.max(...G)],cx:N.reduce((X,L)=>X+L,0)/N.length,cz:G.reduce((X,L)=>X+L,0)/G.length,vox:null,alive:d.length*x,gone:!1,collapsed:!1,dirty:!1,quat:new We().setFromAxisAngle(Yf,-s)})});Dx();(()=>{let n=Be.target,t=Kt.position.distanceTo(n),e=Kt.position.y-n.y,i=Math.hypot(Kt.position.x-n.x,Kt.position.z-n.z),s=null;for(let r=0;r<16;r++){let a=Math.atan2(Kt.position.x-n.x,Kt.position.z-n.z)+r*Math.PI/8,o=n.x+Math.sin(a)*i,l=n.z+Math.cos(a)*i,c=0;for(let u=.08;u<.92;u+=.04){let f=o+(n.x-o)*u,p=l+(n.z-l)*u,g=e*(1-u);for(let _ of cn)if(!(_.site||_.h<g||f<_.bbox[0]||f>_.bbox[1]||p<_.bbox[2]||p>_.bbox[3])&&Wc(f,p,_.poly)){c+=(_.h-g)*(1.2-u);break}}let h=c+r*.01;(!s||h<s.s)&&(s={s:h,x:o,z:l})}Kt.position.set(s.x,Kt.position.y,s.z),Be.update()})();var $f=new Me({color:"#9aa1a8",roughness:.8,metalness:.2}),Af=(()=>{let n=[];for(let e of cn){if(e.h<18)continue;let i=Math.min(6,1+Math.floor(e.vol/120));for(let s=0;s<i*3&&n.filter(r=>r.b===e).length<i;s++){let r=B(e.bbox[0],e.bbox[1]),a=B(e.bbox[2],e.bbox[3]);Wc(r,a,e.poly)&&n.push({b:e,x:r,z:a,sx:B(2.5,6),sy:B(1.5,3.5),sz:B(2.5,6)})}}let t=new yi(Vc,$f,Math.max(1,n.length));return n.forEach((e,i)=>{var s;qi.compose(je.set(e.x,e.b.h+e.sy/2,e.z),e.b.quat,Yi.set(e.sx,e.sy,e.sz)),t.setMatrixAt(i,qi),((s=e.b).roofIdx||(s.roofIdx=[])).push(i)}),t.count=n.length,t.castShadow=!0,t.receiveShadow=!0,ie.add(t),t})();function Zf(n){if(n.roofIdx){for(let t of n.roofIdx)Af.setMatrixAt(t,xo);Af.instanceMatrix.needsUpdate=!0,n.roofIdx=null}n.sign&&Nx(n)}var Jf=[];function Ux(n){let[t,e]=bi(1024,256);e.fillStyle="#0f172a",e.fillRect(0,0,1024,256),e.fillStyle="#ffffff",e.textAlign="center",e.textBaseline="middle";let i=170;for(e.font=`900 ${i}px ${getComputedStyle(document.body).fontFamily}`;e.measureText(n).width>960&&i>40;)i-=8,e.font=`900 ${i}px ${getComputedStyle(document.body).fontFamily}`;e.fillText(n,512,136);let s=new gn(t);return s.colorSpace=de,s.anisotropy=4,s}(()=>{let n=cn.filter(r=>r.site).sort((r,a)=>a.h-r.h),t=ee.sign||ee.company,e=Ux(t),i=new Me({map:e,emissiveMap:e,emissive:"#ffffff",emissiveIntensity:.35,roughness:.6}),s=new Me({color:"#334155",roughness:.8});for(let r of n.slice(0,n.length>6?2:1)){let a=Math.max(r.nx,r.nz)*r.cell,o=Math.max(18,Math.min(a*.75,60)),l=o/4,c=new Je,h=new kt(new _i(o,l),i);h.position.set(0,l/2+3,.6);let u=new kt(new _i(o,l),i);u.position.set(0,l/2+3,-.6),u.rotation.y=Math.PI;let f=new kt(new De(o+1,l+1,1),s);f.position.y=l/2+3;let p=new kt(new De(o*.9,3,1.2),$f);p.position.y=1.5,c.add(f,h,u,p),c.position.set(r.cx,r.h,r.cz),c.rotation.y=Math.atan2(Kt.position.x-r.cx,Kt.position.z-r.cz);let g=f;g.castShadow=!0,ie.add(c),r.sign=c,r.signH=l+6,Jf.push({b:r,g:c,mat:i})}})();function Nx(n){let t=n.sign;n.sign=null,ie.remove(t);let e=t.position;for(let i=0;i<4;i++)re.spawn(e.x+B(-8,8),e.y+6,e.z+B(-8,8),B(6,12),B(3,6),.8,t.quaternion,.1,.12,.18,B(-10,10),B(5,15),B(-10,10),2)}var Ox=cn.filter(n=>n.site).reduce((n,t)=>n+t.vol,0),Kf=cn.filter(n=>n.site).length,Do=(()=>{let t=new Map,e=(s,r)=>s*1e5+r;for(let s of cn)for(let r=Math.floor(s.bbox[0]/40);r<=Math.floor(s.bbox[1]/40);r++)for(let a=Math.floor(s.bbox[2]/40);a<=Math.floor(s.bbox[3]/40);a++){let o=e(r,a);t.has(o)||t.set(o,[]),t.get(o).push(s)}let i=[];return{at(s,r){return t.get(e(Math.floor(s/40),Math.floor(r/40)))||i},query(s,r,a){let o=new Set;for(let l=Math.floor((s-a)/40);l<=Math.floor((s+a)/40);l++)for(let c=Math.floor((r-a)/40);c<=Math.floor((r+a)/40);c++)for(let h of t.get(e(l,c))||[])!h.gone&&h.bbox[0]-a<=s&&s<=h.bbox[1]+a&&h.bbox[2]-a<=r&&r<=h.bbox[3]+a&&o.add(h);return o}}})();function jf(n,t,e,i,s){let r=n.u0+(t+.5)*n.cell,a=n.w0+(i+.5)*n.cell;return s.set(n.cs*r-n.sn*a,(e+.5)*n.fh,n.sn*r+n.cs*a),s}function Xc(n){if(n.vox||n.gone)return n.vox;if(te.cap-te.live<n.vol)return null;let t=n.nx*n.ny*n.nz,e=new Int32Array(t).fill(-1),i=n.color.r,s=n.color.g,r=n.color.b,a=0;for(let o of n.cellsIn){let l=o/n.nz|0,c=o%n.nz;for(let h=0;h<n.ny;h++){jf(n,l,h,c,je);let u=.9+.1*Math.random(),f=te.add(je.x,je.y,je.z,n.cell,n.fh,n.cell,n.quat,i*u,s*u,r*u,n.style);te.owner[f]=n.i,te.cell[f]=(l*n.ny+h)*n.nz+c,e[(l*n.ny+h)*n.nz+c]=f,a++}}return n.vox=e,n.alive=a,qf(n),Zf(n),e}var qc=(n,t,e,i)=>(t*n.ny+e)*n.nz+i,Vr=0;function Ps(n,t,e,i=0,s=0,r=0,a=0){let o=n.vox[t];if(o<0)return;let l=te,c=l.pos[o*3],h=l.pos[o*3+1],u=l.pos[o*3+2];e==="debris"?re.spawn(c,h,u,l.size[o*3]*.94,l.size[o*3+1]*.94,l.size[o*3+2]*.94,n.quat,l.col[o*3],l.col[o*3+1],l.col[o*3+2],i,s,r,Math.min(3,.4+Math.hypot(i,s,r)*.05),a,n.style):e==="vapor"&&Mi.spawn(c,h,u,B(-3,3),B(2,8),B(-3,3),B(5,9),.5,[1,.8,.4],[1,.25,.05]),l.remove(o),n.vox[t]=-1,n.alive--,n.dirty=!0,n.site&&Vr++,Kc(10,c,h,u)}function Yc(n,t,e,i,s,r={}){let a=0;for(let o of Do.query(n,e,i))if(Xc(o))for(let l of o.cellsIn){let c=l/o.nz|0,h=l%o.nz;for(let u=0;u<o.ny;u++){let f=qc(o,c,u,h),p=o.vox[f];if(p<0)continue;let g=te.pos[p*3],_=te.pos[p*3+1],m=te.pos[p*3+2],d=g-n,x=_-t,y=m-e;r.vertical&&(x=0);let S=Math.hypot(d,x,y);if(S>i*(.85+Math.random()*.25))continue;let A=S||1,v=s*(1-S/(i*1.1))+s*.15;if(r.vapor&&S<i*.75){Ps(o,f,"vapor"),a++;continue}if(r.dir){let[R,U,b]=r.dir,E=B(.75,1.25)*s;Ps(o,f,"debris",R*E+B(-8,8),U*E+B(0,12),b*E+B(-8,8),r.tag||0)}else Ps(o,f,"debris",d/A*v+B(-3,3),Math.max(x/A,.15)*v+B(2,8)*(s/30),y/A*v+B(-3,3));a++}}return a}function Fx(n,t,e,i,s,r){for(let a of Do.at(n,e)){if(a.gone||t>a.h||t<0||n<a.bbox[0]||n>a.bbox[1]||e<a.bbox[2]||e>a.bbox[3])continue;let o=a.cs*n+a.sn*e,l=-a.sn*n+a.cs*e,c=Math.floor((o-a.u0)/a.cell),h=Math.floor((l-a.w0)/a.cell),u=Math.floor(t/a.fh);if(c<0||h<0||c>=a.nx||h>=a.nz||u<0||u>=a.ny||!a.vox&&(!a.cellsIn.includes(c*a.nz+h)||!Xc(a)))continue;let f=qc(a,c,u,h);if(!(a.vox[f]<0))return Ps(a,f,"debris",i*.5,s*.5+3,r*.5),Math.random()<.15&&tn.spawn(n,t,e,0,2,0,B(6,10),2.5,[.6,.58,.55],[.5,.5,.5],.5),!0}return!1}var Uc=[];function Bx(n){if(n.dirty=!1,!n.vox||n.gone)return;let t=new Uint8Array(n.vox.length),e=[];for(let l of n.cellsIn){let c=l/n.nz|0,h=l%n.nz,u=qc(n,c,0,h);if(n.vox[u]<0)continue;let f=n.vox[u];Mn(te.pos[f*3],te.pos[f*3+2])<-1.6||(t[u]=1,e.push(u))}let i=n.ny*n.nz,s=n.nz,r=n.vox,a=l=>{!t[l]&&r[l]>=0&&(t[l]=1,e.push(l))};for(;e.length;){let l=e.pop(),c=l%n.nz,h=(l/n.nz|0)%n.ny,u=l/i|0;u+1<n.nx&&a(l+i),u>0&&a(l-i),h+1<n.ny&&a(l+s),h>0&&a(l-s),c+1<n.nz&&a(l+1),c>0&&a(l-1)}let o=[];for(let l=0;l<n.vox.length;l++)n.vox[l]>=0&&!t[l]&&o.push(l);o.length&&Uc.push({b:n,loose:o}),Qf(n)}function kx({b:n,loose:t}){if(t=t.filter(a=>n.vox&&n.vox[a]>=0),!t.length)return;let e=re.cap-re.n,i=t.length<Math.min(500,e)?1:t.length<e*3?2:3,s=new Map;for(let a of t){let o=a%n.nz,l=(a/n.nz|0)%n.ny,h=`${(a/(n.nz*n.ny)|0)/i|0},${l/Math.min(i,2)|0},${o/i|0}`;s.has(h)||s.set(h,[]),s.get(h).push(a)}let r=0;for(let a of s.values()){let o=0,l=0,c=0,h=0,u=0,f=0;for(let _ of a){let m=n.vox[_];o+=te.pos[m*3],l+=te.pos[m*3+1],c+=te.pos[m*3+2],h+=te.col[m*3],u+=te.col[m*3+1],f+=te.col[m*3+2],te.remove(m),n.vox[_]=-1,n.alive--,n.site&&Vr++}let p=a.length,g=Math.cbrt(p);re.spawn(o/p,l/p,c/p,n.cell*Math.min(i,g*1.1),n.fh*Math.min(Math.min(i,2),g),n.cell*Math.min(i,g*1.1),n.quat,h/p,u/p,f/p,B(-2,2),B(-3,0),B(-2,2),.35,0,n.style),r++%5===0&&tn.spawn(o/p,l/p,c/p,B(-2,2),B(0,2),B(-2,2),B(10,18),4,[.72,.7,.66],[.55,.54,.52],.45),Kc(10*p,o/p,l/p,c/p,!0)}t.length>30&&(ne.at(n.cx,n.cz).crumble(Math.min(1,t.length/600)),ne.v=1),n.dirty=!0}function Qf(n){if(!n.collapsed&&n.alive<=n.vol*.2){n.collapsed=!0;let t=n.name||(n.site?xt("noName",ee.company):"");n.site?(Fr(5e3,xt("collapse",t)),Uo++):Fr(800,t?xt("collapseSmall",t):xt("nextBldg"))}}var Uo=0;function td(n,t,e,i,s,r=!1){if(n.gone)return;let a=[];if(n.vox)for(let h=0;h<n.vox.length;h++)n.vox[h]>=0&&a.push(h);let o=n.vox?a.length:n.vol,l=Math.min(s,o),c=n.color;for(let h=0;h<l;h++){let u,f,p;if(n.vox){let y=n.vox[a[Math.random()*a.length|0]];u=te.pos[y*3],f=te.pos[y*3+1],p=te.pos[y*3+2]}else{let y=n.cellsIn[Math.random()*n.cellsIn.length|0];jf(n,y/n.nz|0,Math.random()*n.ny|0,y%n.nz,je),u=je.x,f=je.y,p=je.z}let g=u-t,_=p-e,m=Math.hypot(g,_)||1,d=(1-Math.min(1,m/i))*170+30,x=n.cell*B(1,1.8)*(r?1.4:1);r?re.spawn(u,f,p,x,n.fh*B(.9,1.5),x,n.quat,c.r,c.g,c.b,B(-3,3),B(-4,0),B(-3,3),.5,0,n.style):re.spawn(u,f,p,x,n.fh*B(.8,1.4),x,n.quat,c.r,c.g,c.b,g/m*d,B(25,70),_/m*d,3,0,n.style)}if(n.vox)for(let h=0;h<n.vox.length;h++)n.vox[h]>=0&&(te.remove(n.vox[h]),n.vox[h]=-1);else qf(n);if(Zf(n),n.site&&(Vr+=n.alive),Kc(10*n.alive,n.cx,n.h/2,n.cz,!0),r)for(let h=0;h<14*Gr;h++)tn.spawn(n.cx+B(-20,20),B(2,n.h*.6),n.cz+B(-20,20),B(-4,4),B(1,5),B(-4,4),B(18,34),5,[.75,.72,.68],[.6,.58,.56],.55,1.5);r&&(ne.at(n.cx,n.cz).crumble(.8),ne.v=1),n.alive=0,n.gone=!0,Qf(n)}var Mo=class{constructor(t,e){this.cap=t,this.n=0;let i=new ge;this.P=new Float32Array(t*3),this.Cc=new Float32Array(t*3),this.Sz=new Float32Array(t),this.A=new Float32Array(t),i.setAttribute("position",new ue(this.P,3).setUsage(Ne)),i.setAttribute("aColor",new ue(this.Cc,3).setUsage(Ne)),i.setAttribute("aSize",new ue(this.Sz,1).setUsage(Ne)),i.setAttribute("aAlpha",new ue(this.A,1).setUsage(Ne)),i.boundingSphere=new an(new C,1e5),this.V=new Float32Array(t*3),this.L=new Float32Array(t),this.ML=new Float32Array(t),this.S0=new Float32Array(t),this.GR=new Float32Array(t),this.C0=new Float32Array(t*3),this.C1=new Float32Array(t*3),this.A0=new Float32Array(t),this.B=new Float32Array(t),this.mat=new on({uniforms:{map:{value:e?vx:Mx},uScale:{value:1}},vertexShader:`attribute vec3 aColor; attribute float aSize; attribute float aAlpha; varying vec3 vC; varying float vA; uniform float uScale;
        void main(){ vC=aColor; vA=aAlpha; vec4 mv = modelViewMatrix*vec4(position,1.); gl_PointSize = min(aSize*uScale/max(-mv.z,1.), 900.); gl_Position = projectionMatrix*mv; }`,fragmentShader:"uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC, t.a*vA); }",transparent:!0,depthWrite:!1,blending:e?Oi:fi}),this.pts=new Ss(i,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=e?3:2,ie.add(this.pts)}spawn(t,e,i,s,r,a,o,l,c,h,u=1,f=1.6,p=0){if(this.n>=this.cap)return;let g=this.n++;this.P.set([t,e,i],g*3),this.V.set([s,r,a],g*3),this.L[g]=0,this.ML[g]=l*B(.8,1.2),this.S0[g]=o,this.GR[g]=f,this.A0[g]=u,this.B[g]=p,this.C0.set(c,g*3),this.C1.set(h,g*3)}update(t){for(let i=0;i<this.n;i++){this.L[i]+=t;let s=this.L[i]/this.ML[i];if(s>=1){let o=--this.n;if(i!==o){for(let[l,c]of[[this.P,3],[this.V,3],[this.C0,3],[this.C1,3]])l.copyWithin(i*c,o*c,o*c+c);for(let l of[this.L,this.ML,this.S0,this.GR,this.A0,this.B])l[i]=l[o]}i--;continue}let r=i*3,a=Math.max(0,1-1.4*t);this.V[r]*=a,this.V[r+1]=this.V[r+1]*a+this.B[i]*t,this.V[r+2]*=a,this.P[r]+=this.V[r]*t,this.P[r+1]+=this.V[r+1]*t,this.P[r+2]+=this.V[r+2]*t,this.Sz[i]=this.S0[i]*(1+this.GR[i]*s);for(let o=0;o<3;o++)this.Cc[r+o]=this.C0[r+o]+(this.C1[r+o]-this.C0[r+o])*Math.min(1,s*1.6);this.A[i]=this.A0[i]*(s<.1?s/.1:1-(s-.1)/.9)}let e=this.pts.geometry;e.setDrawRange(0,this.n);for(let i of["position","aColor","aSize","aAlpha"])e.attributes[i].needsUpdate=!0}},Fs=(()=>{let n=Oe?900:1600,t=new ge,e=new Float32Array(n*3),i=new Float32Array(n),s=new Float32Array(n),r=new Float32Array(n),a=new Float32Array(n),o=new Float32Array(n*3),l=new Float32Array(n),c=new Float32Array(n),h=new Float32Array(n),u=new Float32Array(n);for(let[m,d,x]of[["position",e,3],["aSize",i,1],["aAlpha",s,1],["aRot",r,1],["aIdx",a,1]])t.setAttribute(m,new ue(d,x).setUsage(Ne));t.boundingSphere=new an(new C,1e5);let f=new gn(bf(Ds));f.colorSpace=de;let p=new on({uniforms:{map:{value:f},uScale:{value:1}},transparent:!0,depthWrite:!1,vertexShader:`attribute float aSize; attribute float aAlpha; attribute float aRot; attribute float aIdx; varying float vA; varying float vR; varying float vI; uniform float uScale;
      void main(){ vA = aAlpha; vR = aRot; vI = aIdx; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_PointSize = min(aSize * uScale / max(-mv.z, 1.), 400.); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D map; varying float vA; varying float vR; varying float vI;
      void main(){ vec2 p = gl_PointCoord - .5; float c = cos(vR), s = sin(vR); p = mat2(c, -s, s, c) * p * 1.15 + .5;
        if (p.x < 0. || p.y < 0. || p.x > 1. || p.y > 1.) discard;
        vec2 uv = vec2((mod(vI, 2.) + p.x) / 2., 1. - (floor(vI / 2.) + p.y) / 2.);
        vec4 t = texture2D(map, uv); if (t.a < .08) discard; gl_FragColor = vec4(t.rgb, t.a * vA); }`}),g=new Ss(t,p);g.frustumCulled=!1,g.renderOrder=4,ie.add(g);let _=0;return{mat:p,burst(m,d,x,y,S,A){y=Math.round(y*Math.max(.5,Gr));for(let v=0;v<y&&_<n;v++){let R=_++,U=B(0,Math.PI*2),b=B(.2,1),E=B(.3,1)*S;e.set([m+B(-2,2),d+B(0,3),x+B(-2,2)],R*3),o.set(A?[A[0]*E+B(-4,4),B(4,14),A[2]*E+B(-4,4)]:[Math.cos(U)*E*(1-b*.4),b*E*.9+4,Math.sin(U)*E*(1-b*.4)],R*3),i[R]=B(4.5,8),a[R]=Math.random()*4|0,r[R]=B(0,6.28),h[R]=B(-6,6),u[R]=B(0,6.28),l[R]=0,c[R]=B(3,5.5)}},update(m){for(let d=0;d<_;d++){if(l[d]+=m,l[d]>=c[d]){let A=--_;d!==A&&(e.copyWithin(d*3,A*3,A*3+3),o.copyWithin(d*3,A*3,A*3+3),i[d]=i[A],a[d]=a[A],r[d]=r[A],h[d]=h[A],u[d]=u[A],l[d]=l[A],c[d]=c[A]),d--;continue}let x=d*3,y=Math.max(0,1-1.6*m);o[x]*=y,o[x+2]*=y,o[x+1]=Math.max(o[x+1]-9*m,-6),e[x]+=(o[x]+Math.sin(l[d]*3+u[d])*2.5)*m,e[x+1]+=o[x+1]*m,e[x+2]+=(o[x+2]+Math.cos(l[d]*2.6+u[d])*2.5)*m;let S=Os(e[x],e[x+2])+.4;e[x+1]<S&&(e[x+1]=S,o[x]=o[x+2]=0,h[d]*=.9),r[d]+=h[d]*m,s[d]=Math.min(1,(c[d]-l[d])/1)}t.setDrawRange(0,_);for(let d of["position","aSize","aAlpha","aRot","aIdx"])t.attributes[d].needsUpdate=!0}}})(),Mi=new Mo(Oe?3500:5e3,!0),tn=new Mo(Oe?4500:6e3,!1),Gr=ni[Un].fxk,Fe=[];function bo(n,t,e,i,s,r="#fff2d0"){let a=new kt(new Mr(.85,1,64),new mn({color:r,transparent:!0,opacity:.8,side:An,depthWrite:!1,blending:Oi}));a.rotation.x=-Math.PI/2,a.position.set(n,t+.6,e),ie.add(a),Fe.push({t:0,dur:s,up(o){a.scale.setScalar(1+i*Math.pow(o,.6)),a.material.opacity=.8*(1-o)},done(){ie.remove(a),a.geometry.dispose()}})}var Rf=[0,1,2].map(()=>{let n=new Qa("#ffb060",0,100,1.2);return ie.add(n),n}),zx=0;function $c(n,t,e,i,s){let r=new kt(new br(1,32,16),new mn({color:"#ffd28a",transparent:!0,blending:Oi,depthWrite:!1}));r.position.set(n,t,e),ie.add(r);let a=Rf[zx++%Rf.length];a.position.set(n,t+i*.5,e),a.distance=i*14,Fe.push({t:0,dur:s,up(o){r.scale.setScalar(i*Math.pow(o,.35)+.1),r.material.opacity=1-o,r.material.color.setRGB(1,.85-o*.5,.55-o*.5),a.intensity=(1-o)*i*400},done(){ie.remove(r),a.intensity=0,r.geometry.dispose()}})}function Cf(n,t){Fe.push({t:0,dur:n,up(){},done:t})}function ed(n,t,e,i,s=1){$c(n,t,e,i*.9,.5+.25*s),bo(n,Math.max(t-i*.6,Mn(n,e)),e,i*3,.8+.3*s);let r=Math.min(220,40+i*5)*Gr;Fs.burst(n,t,e,Math.min(80,20+i*1.5),i*1.6);for(let a=0;a<r;a++){let o=B(0,Math.PI*2),l=B(-.1,1),c=B(.3,1.2)*i*2.4;Mi.spawn(n,t,e,Math.cos(o)*c*(1-l*.5),l*c,Math.sin(o)*c*(1-l*.5),B(.25,.5)*i,B(.45,.9),[1,.92,.6],[1,.3,.06],1,1.2,6)}for(let a=0;a<r*.8;a++){let o=B(0,Math.PI*2),l=B(.1,.6)*i*1.5;tn.spawn(n+B(-i,i)*.4,t+B(0,i*.4),e+B(-i,i)*.4,Math.cos(o)*l,B(2,10)+i*.3,Math.sin(o)*l,B(.4,.8)*i,B(2.5,5)*s,[.32,.29,.27],[.62,.6,.58],.75,1.8,2)}}var kn=[[0,"#8b95a5"],[600,"#5ea2d8"],[2200,"#3fb37f"],[5500,"#e2b33c"],[11e3,"#ef8a32"],[2e4,"#e5533d"],[34e3,"#c13cc9"],[52e3,"#ff2d55"]].map(([n,t],e)=>[xt("ranks")[e],n,t]),zs=0,vi=0,Zc=0,So=0,Rr=[],nd=1,ei=0,uo=0,Nc=new C,Pf=0,Jc=()=>{let n=0;return kn.forEach((t,e)=>{vi>=t[1]&&(n=e)}),n},Eo=()=>nd*(1+Jc()*.12);function Kc(n,t,e,i,s){Number.isFinite(t+e+i)||(t=e=i=0);let r=n*Eo();zs+=r,vi+=n*.55,Zc=ei;let a=Jc();a>So&&(So=a,a>=2&&Gs(xt("promo",kn[a][0]),1600,kn[a][2])),uo+=r,Nc.set(t,e,i)}function Fr(n,t){zs+=n*Eo(),vi+=n*.3,Zc=ei,Gs(`${t}  +${Us(Math.round(n*Eo()))}`,2200)}function Oc(n){Rr.push(n),Rr.length>6&&Rr.shift();let t=Rr.slice(-4);nd=t.length===4&&t.every(e=>e===n)?.7:1+.15*(new Set(Rr).size-1)}var ne={ctx:null,out:null,muted:!1,nb:null,v:1,lastThud:0,thudN:0,at(n,t){let e=Math.hypot(Kt.position.x-n,Kt.position.y,Kt.position.z-t);return this.v=ws.clamp(1.7-e/800,.35,1.35),this},init(){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}if(!this.silent)try{let r=new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=");r.loop=!0,r.setAttribute("playsinline",""),r.volume=.01,r.play().catch(()=>{}),this.silent=r}catch{}if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume();return}let n=window.AudioContext||window.webkitAudioContext;if(!n)return;this.ctx=new n,this.ctx.resume&&this.ctx.resume();try{let r=this.ctx.createBufferSource();r.buffer=this.ctx.createBuffer(1,1,22050),r.connect(this.ctx.destination),r.start(0)}catch{}let t=this.ctx.createDynamicsCompressor();t.threshold.value=-18,t.ratio.value=6,this.out=this.ctx.createGain(),this.out.gain.value=.85,this.out.connect(t),t.connect(this.ctx.destination);let e=this.ctx.sampleRate*3;this.nb=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let i=this.nb.getChannelData(0),s=0;for(let r=0;r<e;r++){let a=Math.random()*2-1;s=(s+.02*a)/1.02,i[r]=a*.5+s*3}},ok(){return this.ctx&&this.ctx.state!=="running"&&this.ctx.resume(),this.ctx&&!this.muted},env(n,t,e,i,s){n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(i,t+e),n.gain.exponentialRampToValueAtTime(1e-4,t+s)},noise(n,t,e,i,s,r=.004,a=0){if(!this.ok())return;let o=this.ctx,l=o.currentTime+a,c=o.createBufferSource();c.buffer=this.nb,c.loop=!0;let h=o.createBiquadFilter();h.type=t,h.frequency.setValueAtTime(e,l),h.frequency.exponentialRampToValueAtTime(Math.max(20,i),l+n);let u=o.createGain();this.env(u,l,r,Math.min(1.5,s*this.v),n),c.connect(h),h.connect(u),u.connect(this.out),c.start(l,Math.random()*2),c.stop(l+n+.05)},tone(n,t,e,i,s,r=.005,a=0){if(!this.ok())return;let o=this.ctx,l=o.currentTime+a,c=o.createOscillator();c.type=n,c.frequency.setValueAtTime(t,l),c.frequency.exponentialRampToValueAtTime(Math.max(10,e),l+i);let h=o.createGain();this.env(h,l,r,Math.min(1.5,s*this.v),i),c.connect(h),h.connect(this.out),c.start(l),c.stop(l+i+.05)},boom(n=1){this.noise(.09,"highpass",5e3,1500,.9*Math.min(1,.4+n*.5)),this.noise(.6+n*.9,"lowpass",1800*Math.min(1.5,n),70,.95*Math.min(1,.5+n*.4)),this.tone("sine",95,26,.5+n*.7,.9),this.tone("triangle",60,22,.35+n*.4,.5);let t=3+Math.min(8,n*4);for(let e=0;e<t;e++)this.noise(B(.04,.12),"bandpass",B(900,3500),B(400,900),B(.15,.35),.002,B(.1,.9+n*.4))},thud(n,t,e){let i=performance.now();if(i-this.lastThud>1e3&&(this.lastThud=i,this.thudN=0),++this.thudN>12)return;this.at(n,t);let s=Math.min(1,e/8);this.tone("sine",B(70,120)*(1.3-s*.6),35,.18+s*.2,.25+s*.35,.002),this.noise(.12+s*.15,"lowpass",900,150,.15+s*.25,.002),this.v=1},cheer(){this.noise(2.2,"bandpass",700,1400,.35,.4),this.tone("square",523,523,.12,.12,.005,.05),this.tone("square",659,659,.12,.12,.005,.18),this.tone("square",784,784,.3,.12,.005,.31)},click(){this.v=1,this.tone("triangle",1100,700,.06,.18)},crumble(n){this.noise(1+n*1.5,"bandpass",700,180,.25+n*.4,.05)},whack(){this.noise(.18,"highpass",3e3,800,.8),this.tone("square",220,70,.2,.35)},whoosh(n){this.noise(n,"bandpass",300,2600,.35,n*.8)},whistle(n){this.tone("sine",1700,420,n,.18,.2)},zap(){this.tone("sawtooth",1500,160,.3,.3),this.noise(.3,"highpass",4e3,1500,.3)},charge(n){this.tone("sawtooth",70,900,n,.22,n*.9)},hum(){if(!this.ok())return()=>{};let n=this.ctx,t=n.createOscillator(),e=n.createOscillator(),i=n.createGain(),s=n.createBiquadFilter();return t.type="sawtooth",t.frequency.value=150,e.type="square",e.frequency.value=301,s.type="lowpass",s.frequency.value=1800,i.gain.value=1e-4,i.gain.exponentialRampToValueAtTime(.16,n.currentTime+.05),t.connect(s),e.connect(s),s.connect(i),i.connect(this.out),t.start(),e.start(),()=>{i.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.25),t.stop(n.currentTime+.3),e.stop(n.currentTime+.3)}},rumble(n,t){this.noise(n,"lowpass",220,60,.35+t*.5,.3)},nuke(){this.boom(3),this.noise(7,"lowpass",500,40,.9,.05,.1),this.tone("sine",50,20,5,.7,.05)}},No=Ef(Ds,ne),Bn=0,Ac=new C,Wr=n=>{Bn=Math.min(14,Bn+n)};function id(){let n=new C;return Kt.getWorldDirection(n),n.y=0,n.normalize()}function sd(n,t,e,i,s,r={}){Yc(n,t,e,i,s),Hr.wake(n,e,i*1.15,s*.7,n,e),re.push(n,t,e,i*1.6,s*.6),$i.clear(n,e,i*.8),r.crater&&t-Mn(n,e)<i*.8&&zr(n,e,r.crater[0],r.crater[1]),ed(n,t,e,i,r.big||1),Wr(i*.08*(r.big||1)),ne.at(n,e).boom(i/16),ne.v=1}var Hs=Object.fromEntries(["bomb","bat","laser","meteor","quake","nuke"].map(n=>[n,xt(`labels.${n}`)])),Vs=n=>n[Math.random()*n.length|0],Hx=(()=>{let[n,t]=bi(256,180);t.fillStyle="#fbfaf5",t.fillRect(0,0,256,180),t.strokeStyle="#c9c4b8",t.lineWidth=4,t.strokeRect(4,4,248,172),t.beginPath(),t.moveTo(6,8),t.lineTo(128,96),t.lineTo(250,8),t.stroke(),t.fillStyle="#1b1b1b",t.font=`900 46px ${getComputedStyle(document.body).fontFamily}`,t.textAlign="center",t.fillText(xt("envelope"),128,150);let e=new gn(n);return e.colorSpace=de,e})(),rd=()=>ws.clamp(Kt.position.distanceTo(Be.target)/260,1,5);function Vx(n){let t=rd(),e=new kt(new De(9*t,.5*t,6.5*t),[0,0,1,1,0,0].map(s=>new Me(s?{map:Hx}:{color:"#efece4"})));e.castShadow=!0;let i=90*t;e.position.set(n.x,n.y+i,n.z),ie.add(e),Fe.push({t:0,dur:.62,up(s){let r=s*s;e.position.set(n.x+Math.sin(s*9)*4*t*(1-s),n.y+i*(1-r),n.z+Math.cos(s*7)*3*t*(1-s)),e.rotation.set(Math.sin(s*10)*.6,s*5,Math.cos(s*8)*.5),Math.random()<.6&&tn.spawn(e.position.x,e.position.y,e.position.z,0,2,0,3*t,.6,[1,1,1],[.9,.9,.9],.35)},done(){ie.remove(e),e.geometry.dispose(),sd(n.x,n.y+2,n.z,20,46,{crater:[16,6]}),No("bomb"),Math.random()<.45&&Si(n,Vs(Hs.bomb),"#fff")}})}var Rs=1,Gx=1,Lf=new Set,ad=(()=>{let n=new gn(Sf(Ds,t=>t==="lang"?Is:xt(t)));return n.colorSpace=de,n})();function Wx(n){let t=36*Rs,e=Gx++,i=Math.max(t,30*rd()),s=id(),r=new C(-s.z,0,s.x),a=n.clone().addScaledVector(s,-i*.55);a.y=Math.max(n.y,i*.12);let o=new Je;o.position.copy(a);let l=new kt(new De(i,i*.3,i*.03),[0,0,0,0,1,1].map(u=>u?new Me({map:ad}):new Me({color:"#2b2b2e"})));l.position.x=i/2,l.castShadow=!0,o.add(l),ie.add(o);let c=Math.atan2(-s.z,s.x);ne.whoosh(.22);let h=!1;Fe.push({t:0,dur:.8,up(u){let f=Math.min(1,u/.4);if(o.rotation.y=c+1.5-3*(f*f*(3-2*f)),!h&&f>=.5){h=!0;let p=s.clone().multiplyScalar(.78).addScaledVector(r,.42);p.y=.42,p.normalize();let g=60+22*Rs;Yc(n.x,n.y,n.z,t*.42,g,{dir:[p.x,p.y,p.z],tag:e});for(let _=0;_<2;_++)re.push(n.x,n.y,n.z,t*.5,25);Hr.wake(n.x,n.z,t*.4,30,a.x,a.z),$i.clear(n.x,n.z,t*.3),ne.at(n.x,n.z).whack(),ne.v=1,Wr(1.5*Rs),Fs.burst(n.x,n.y,n.z,30,30,[p.x,p.y,p.z]);for(let _=0;_<25;_++)tn.spawn(n.x,n.y,n.z,p.x*20+B(-6,6),B(0,8),p.z*20+B(-6,6),B(5,10)*Rs,1.8,[.7,.68,.64],[.6,.6,.6],.5);Math.random()<.5&&Si(n,Vs(Hs.bat),"#ffd6d6")}l.material.forEach(p=>{p.transparent=u>.75,p.opacity=u>.75?1-(u-.75)/.25:1})},done(){ie.remove(o),l.geometry.dispose()}})}function Xx(n,t,e,i,s){t>70&&!Lf.has(n)&&(Lf.add(n),Fr(3e3,xt("homerun",Math.round(t))),ne.cheer(),Si(new C(e,i+8,s),xt("homerunShort",Math.round(t)),"#ffe066"))}var qx=new C(260,1400,-380),ce={drawing:!1,path:[],line:null,active:null},xi=(()=>{let n=new Je,t=new Cn(1,1,1,16,1,!0).translate(0,.5,0);return[[1.3,(Dr.beam||[])[0]||"#ffffff",1],[3.2,(Dr.beam||[])[1]||"#21d07a",.75],[7.5,(Dr.beam||[])[1]||"#21a366",.28]].forEach(([e,i,s])=>{let r=new kt(t,new mn({color:i,transparent:!0,opacity:s,blending:Oi,depthWrite:!1,fog:!1}));r.scale.set(e,1,e),r.userData.o=s,n.add(r)}),n.visible=!1,ie.add(n),n})();function Fc(n,t=1){let e=qx.clone().sub(n),i=e.length();xi.position.copy(n),xi.quaternion.setFromUnitVectors(Yf,e.normalize()),xi.children.forEach(s=>{var r;s.scale.y=i,s.scale.x=s.scale.z=(r=s.userData).r0??(r.r0=s.scale.x),s.scale.x=s.scale.z=s.userData.r0*t*B(.9,1.1),s.material.opacity=s.userData.o*Math.min(1,t)}),xi.visible=!0}function od(n,t,e){let i=Math.max(0,Mn(n,t));Yc(n,0,t,8.5,22,{vertical:!0,vapor:!0}),Hr.wake(n,t,9,14,n,t),$i.clear(n,t,6),zr(n,t,5,1.8,1);for(let s=0;s<6;s++)Mi.spawn(n,i+1,t,B(-10,10),B(5,25),B(-10,10),B(2,5),.5,[.85,1,.85],[1,.4,.05]);tn.spawn(n,i+2,t,B(-2,2),B(3,8),B(-2,2),B(5,9),2.2,[.35,.36,.34],[.5,.5,.5],.45),e&&(ed(n,i+3,t,7),ne.boom(.4),Math.random()<.6&&Si(new C(n,i+10,t),Vs(Hs.laser),"#7dffb0"))}function Yx(n){let t=[],e=0;for(let a=1;a<n.length;a++){let o=n[a].distanceTo(n[a-1]);t.push(o),e+=o}let i=.65,s=Math.min(2.6,Math.max(.8,e/160));ne.charge(i),ce.active={path:n,segs:t,total:e,done:0,nextBoom:0};let r=null;Fe.push({t:0,dur:i,up(a){Wi.uDark.value=Math.max(Wi.uDark.value,a*.65),Fc(n[0],a*.25)},done(){r=ne.hum(),Wr(1.5),Fe.push({t:0,dur:s,up(a){let o=ce.active,l=a*o.total;for(;o.done<=l;){let c=o.done,h=0;for(;h<o.segs.length&&c>o.segs[h];)c-=o.segs[h],h++;if(h>=o.segs.length)break;let u=n[h].clone().lerp(n[h+1],o.segs[h]?c/o.segs[h]:0);od(u.x,u.z,o.done>=o.nextBoom),o.done>=o.nextBoom&&(o.nextBoom+=22),o.last=u,o.done+=3}o.last&&Fc(o.last.clone().setY(Mn(o.last.x,o.last.z)),1),Bn=Math.max(Bn,.5)},done(){r&&r(),xi.visible=!1,ce.active=null,Fe.push({t:0,dur:.8,up(a){Wi.uDark.value=(Po?0:.65)*(1-a)},done(){Wi.uDark.value=0}})}})}})}function ld(n){ne.zap(),Fe.push({t:0,dur:.45,up(t){Fc(n,1-t*.5)},done(){xi.visible=!1}}),od(n.x,n.z,!0)}function cd(){let n=(e,i=.4)=>new Me({color:e,emissive:"#ff7a1a",emissiveIntensity:.55,metalness:i,roughness:.4}),t=new Je;switch(Dr.meteor){case"pill":{let e=new kt(new mr(5,10,6,16),n("#f8fafc",0)),i=new kt(new Cn(5.05,5.05,5,16),n("#ef4444",0));i.position.y=2.5,e.rotation.z=i.rotation.z=Math.PI/3,t.add(e,i);break}case"coin":{let e=new kt(new Cn(10,10,2.4,32),n("#fbbf24",1));e.rotation.x=1.1,t.add(e);break}case"wafer":{let e=new kt(new Cn(12,12,.8,48),n("#cbd5e1",1));e.rotation.x=1,t.add(e);break}case"tv":{let e=new kt(new De(16,10,4),n("#1f2937",.3)),i=new kt(new _i(14,8.4),new mn({color:"#93c5fd"}));i.position.z=2.05,t.add(e,i);break}case"phone":{let e=new kt(new De(6,12,1),n("#111827",.5)),i=new kt(new _i(5.4,11),new mn({color:"#a5b4fc"}));i.position.z=.55,t.add(e,i),t.scale.setScalar(1.4);break}case"gear":{let e=new kt(new Cn(8,8,3,10),n("#9ca3af",1));for(let i=0;i<10;i++){let s=new kt(new De(3,3,3),n("#9ca3af",1));s.position.set(Math.cos(i/10*Math.PI*2)*9,0,Math.sin(i/10*Math.PI*2)*9),e.add(s)}e.rotation.x=1.2,t.add(e);break}case"gpu":{let e=new kt(new De(18,4,9),n("#14532d",.6));for(let i of[-5,4]){let s=new kt(new Cn(3.2,3.2,.5,20),n("#111827",.2));s.position.set(i,-2.2,0),e.add(s)}t.add(e);break}default:t.add(new kt(new vr(8,1),new mn({color:"#ffb36b"})))}return t.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t}function $x(n){let t=id(),e=new C(-t.z,0,t.x),i=n.clone().addScaledVector(t,-380).addScaledVector(e,160);i.y+=650;let s=cd();ie.add(s),ne.whoosh(1.5);let r=i.clone();Fe.push({t:0,dur:1.5,up(a){let o=a*a;s.position.lerpVectors(i,n,o),s.rotation.x+=.12,s.rotation.y+=.07;for(let l=0;l<10;l++){let c=r.clone().lerp(s.position,Math.random());Mi.spawn(c.x,c.y,c.z,B(-3,3),B(-3,3),B(-3,3),B(9,16),.5,[1,.9,.6],[1,.3,.05]),tn.spawn(c.x,c.y,c.z,B(-2,2),B(0,3),B(-2,2),B(10,18),3,[.45,.4,.36],[.5,.5,.5],.55)}r.copy(s.position)},done(){ie.remove(s),s.traverse(a=>a.geometry&&a.geometry.dispose()),sd(n.x,n.y+4,n.z,34,95,{big:1.8}),zr(n.x,n.z,42,17),No("meteor"),Si(n.clone().setY(n.y+30),Vs(Hs.meteor),"#ffcf8a")}})}var Ce=null,wo=7;function Zx(n){let t=wo,e=Math.min(9,.08*Math.pow(1.9,t-4));Ce={t:0,dur:3.2,M:t,A:e,P:n.clone()},ne.rumble(3.4,Math.min(1,(t-4)/5)),No("quake"),Wr(e*.6),Si(n.clone().setY(n.y+25),xt("magLabel",t.toFixed(1),Vs(Hs.quake)),"#ffd28a");for(let i of cn){if(i.gone)continue;let s=Math.hypot(i.cx-n.x,i.cz-n.z),r=t-2.6*Math.log10(1+s/50);r<6.5&&!i.vox||r<5.6||Cf(B(.2,2.6),()=>Jx(i,r))}if(t>=8.5)for(let i=0;i<3+(t-8.5)*2;i++){let s=B(0,Math.PI*2),r=B(80,60+(t-8)*120);for(let a=0;a<r;a+=5)Cf(.3+a/120,()=>zr(n.x+Math.cos(s)*a,n.z+Math.sin(s)*a,3.5,6*(1-a/r)+1.5,.4))}}function Jx(n,t){if(n.gone)return;if(Fs.burst(n.cx,n.h*.8,n.cz,14,10),t>=7.5){let a=re.cap-re.n;td(n,n.cx,n.cz,1,Math.max(6,Math.min(n.site?110:40,Math.floor(a/6))),!0);return}if(!Xc(n))return;let e=[];for(let a=0;a<n.vox.length;a++)n.vox[a]>=0&&e.push(a);let i=a=>(a/n.nz|0)%n.ny,s=a=>[a/(n.nz*n.ny)|0,a%n.nz],r=t>=7?1+Math.floor((t-7)*4):t>=6.2?1:0;for(let a=0;a<r;a++){let o=n.cellsIn[Math.random()*n.cellsIn.length|0],l=o/n.nz|0,c=o%n.nz,h=Math.max(1.5,Math.sqrt(n.cellsIn.length)*B(.25,.45));e.filter(u=>i(u)<=1&&n.vox[u]>=0).forEach(u=>{let[f,p]=s(u);Math.hypot(f-l,p-c)<=h&&Ps(n,u,"debris",B(-2,2),0,B(-2,2))})}t<6.2&&e.filter(a=>n.vox[a]>=0&&i(a)===n.ny-1&&Math.random()<.04).forEach(a=>Ps(n,a,"debris",B(-3,3),B(0,2),B(-3,3)))}var Bc=!1;function Kx(n){if(Bc)return;Bc=!0;let t=new Je,e=new kt(new mr(2.4,7,6,12),new Me({color:"#30353b",metalness:.5,roughness:.4})),i=new kt(new Cn(2.5,2.5,1.2,12),new Me({color:"#f2c200"}));t.add(e,i),ie.add(t);let s=n.clone();s.y+=700,ne.whistle(2.2),Si(n.clone().setY(n.y+40),Vs(Hs.nuke),"#ff8080"),Fe.push({t:0,dur:2.2,up(r){t.position.lerpVectors(s,n,r*r),t.rotation.z=Math.sin(r*20)*.05},done(){ie.remove(t),jx(n.clone().setY(Mn(n.x,n.z)+10))}})}var Rc=1,Ir=0;function jx(n){tv(1,2.2),Ir=2.4,ne.nuke(),No("nuke"),Wr(14),Fs.burst(n.x,n.y+40,n.z,220,160),$c(n.x,n.y,n.z,170,3.2),bo(n.x,n.y,n.z,1100,4.5,"#ffe9c0"),bo(n.x,n.y,n.z,700,3,"#ffffff");let e=[...Do.query(n.x,n.z,420)].filter(s=>Math.hypot(s.cx-n.x,s.cz-n.z)<440),i=Math.max(8,Math.floor(Math.min(220,(re.cap-re.n-300)/Math.max(1,e.length))));for(let s of e)td(s,n.x,n.z,420,s.site?i:Math.ceil(i*.5));Hr.wake(n.x,n.z,420,120,n.x,n.z),re.push(n.x,n.y,n.z,420*1.3,150),$i.clear(n.x,n.z,420),zr(n.x,n.z,230,75),Fr(3e4,xt("quit")),Fe.push({t:0,dur:9,up(s){let r=Math.min(520,700*Math.sqrt(s));for(let a=0;a<9*Gr;a++){let o=B(0,Math.PI*2),l=B(0,35);tn.spawn(n.x+Math.cos(o)*l,n.y+B(0,r*.9),n.z+Math.sin(o)*l,0,B(20,50),0,B(35,70),4,s<.25?[1,.55,.2]:[.55,.45,.4],[.42,.38,.36],.6,1.2);let c=B(0,Math.PI*2),h=B(40,90+r*.35);tn.spawn(n.x+Math.cos(c)*h*.5,n.y+r+B(-30,30),n.z+Math.sin(c)*h*.5,Math.cos(c)*h*.4,B(-4,14),Math.sin(c)*h*.4,B(60,110),5,s<.3?[1,.6,.25]:[.6,.5,.45],[.45,.42,.4],.7,1.4),s<.5&&Mi.spawn(n.x+B(-40,40),n.y+r*B(.6,1),n.z+B(-40,40),B(-10,10),B(5,25),B(-10,10),B(40,80),1.2,[1,.8,.4],[1,.25,.05],.8)}if(s<.15)for(let a=0;a<20;a++){let o=B(0,Math.PI*2),l=B(150,320);tn.spawn(n.x,n.y,n.z,Math.cos(o)*l,B(2,12),Math.sin(o)*l,B(40,70),3.5,[.7,.62,.55],[.6,.58,.55],.6,1.5)}},done(){Bc=!1}})}var St=n=>document.getElementById(n),Br=[{id:"bomb",short:xt("tools.bomb")[1],svg:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 8l9 6 9-6"/>',name:xt("tools.bomb")[0],tip:xt("tools.bomb")[2]},{id:"bat",short:xt("tools.bat")[1],svg:'<rect x="5" y="4" width="14" height="17" rx="2"/><rect x="9" y="2.5" width="6" height="3" rx="1"/><path d="M8 10h8M8 14h5"/><circle cx="15.5" cy="16.5" r="2.2"/>',name:xt("tools.bat")[0],tip:xt("tools.bat")[2],slider:{label:xt("batSize"),min:.5,max:3,step:.1,get:()=>Rs,set:n=>Rs=n,fmt:n=>`\xD7${n.toFixed(1)} \xB7 ${Math.round(36*n)} m`}},{id:"laser",short:xt("tools.laser")[1],svg:'<path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/>',name:xt("tools.laser")[0],tip:xt("tools.laser")[2]},{id:"meteor",short:xt("tools.meteor")[1],svg:'<circle cx="15" cy="15" r="5"/><path d="M3 3l8 8M7 3l6 6M3 7l6 6"/>',name:xt("tools.meteor")[0],tip:xt("tools.meteor")[2]},{id:"quake",short:xt("tools.quake")[1],svg:'<path d="M2 13h4l2-6 3 11 3-9 2 4h6"/>',name:xt("tools.quake")[0],tip:xt("tools.quake")[2],slider:{label:xt("mag"),min:4,max:10,step:.1,get:()=>wo,set:n=>wo=n,fmt:n=>`M ${n.toFixed(1)} \xB7 ${xt("qk")[n<6?0:n<7.5?1:2]}`}},{id:"nuke",short:xt("tools.nuke")[1],svg:'<circle cx="12" cy="12" r="2"/><path d="M12 10L8.5 4a8 8 0 0 1 7 0zM13.7 13l3.5 6a8 8 0 0 0 3.5-6zM10.3 13l-3.5 6a8 8 0 0 1-3.5-6z" fill="currentColor"/>',name:xt("tools.nuke")[0],tip:xt("tools.nuke")[2]}],In="bomb";function Qx(){let n=St("dock");Br.forEach((t,e)=>{let i=document.createElement("button");i.className="tool",i.dataset.id=t.id,i.title=t.tip,i.innerHTML=`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${t.svg}</svg><span class="nm">${t.name}</span><span class="sh">${t.short}</span><kbd>${e+1}</kbd>`,i.onclick=()=>To(t.id),n.appendChild(i)}),St("slider").oninput=t=>{let e=Br.find(i=>i.id===In);e.slider.set(+t.target.value),St("sliderVal").textContent=e.slider.fmt(+t.target.value)},To("bomb")}function To(n){In!==n&&ne.click(),In=n,document.querySelectorAll(".tool").forEach(i=>i.classList.toggle("on",i.dataset.id===n));let t=Br.find(i=>i.id===n);St("tip").textContent=t.tip;let e=St("sliderWrap");t.slider?(e.hidden=!1,St("sliderLabel").textContent=t.slider.label,Object.assign(St("slider"),{min:t.slider.min,max:t.slider.max,step:t.slider.step,value:t.slider.get()}),St("sliderVal").textContent=t.slider.fmt(t.slider.get())):e.hidden=!0}var Ls=[];function Si(n,t,e="#fff",i=!1){let s=document.createElement("div");s.className="float"+(i?" big":""),s.textContent=t,s.style.color=e,s.style.opacity=0,St("floaters").appendChild(s),Ls.push({el:s,pos:n.clone(),t:0}),Ls.length>28&&Ls.shift().el.remove()}var If=0;function Gs(n,t=1800,e){let i=St("toast");i.textContent=n,i.style.color=e||"",i.classList.add("show"),clearTimeout(If),If=setTimeout(()=>i.classList.remove("show"),t)}function tv(n,t){let e=St("flash");e.style.transition="none",e.style.opacity=n,requestAnimationFrame(()=>{e.style.transition=`opacity ${t}s ease-out`,e.style.opacity=0})}function jc(n){Po=n;let t=n?dx:_o;Wi.uTop.value.copy(t.top),Wi.uHor.value.copy(t.hor),bn.fog.color.copy(t.fog),Bf.intensity=n?.18:1.1,Se.intensity=n?.12:2.6,Se.color.set(n?"#9fb4ff":"#fff3e0"),Pr.emissiveIntensity=n?1.6:0,Xf.emissiveIntensity=n?1.6:0;for(let e of Jf)e.mat.emissiveIntensity=n?1.6:.25;mx.visible=n,St("nightBtn").classList.toggle("on",n)}var yn={};function hd(){let n=Jc();yn.score.textContent=Us(Math.round(zs)),yn.rank.textContent=kn[n][0],yn.rank.style.background=kn[n][2];let t=kn[n+1];yn.bar.style.width=t?`${Math.min(100,(vi-kn[n][1])/(t[1]-kn[n][1])*100)}%`:"100%",yn.mult.textContent=`\xD7${Eo().toFixed(2)}`,yn.rate.textContent=`${Math.min(100,Vr/Ox*100).toFixed(1)}%`,yn.cnt.textContent=xt("count",Uo,Kf),yn.depth.textContent=`${Us(6371*Math.pow(Math.min(1,Cs/Or),1.6),{maximumFractionDigits:Cs<40?1:0})} ${xt("km")}`}function ev(){xe.render(bn,Kt);let n=new Image;n.src=ii.toDataURL("image/jpeg",.9),n.onload=()=>{let[t,e]=bi(1200,630),i=Math.max(1200/n.width,630/n.height);e.drawImage(n,(1200-n.width*i)/2,(630-n.height*i)/2,n.width*i,n.height*i);let s=e.createLinearGradient(0,0,760,0);s.addColorStop(0,"rgba(10,14,22,.88)"),s.addColorStop(1,"rgba(10,14,22,0)"),e.fillStyle=s,e.fillRect(0,0,1200,630),e.fillStyle="#ff6a2b",e.font="700 22px sans-serif",e.fillText(ee.series,56,70),e.fillStyle="#fff",e.font="900 54px sans-serif",e.fillText(xt("smash",ee.company),56,132);let r=xt("card");[[r[0],Us(Math.round(zs))],[r[1],kn[So][0]],[r[2],yn.rate.textContent],[r[3],yn.cnt.textContent],[r[4],yn.depth.textContent]].forEach(([l,c],h)=>{e.fillStyle="#aab4c3",e.font="500 24px sans-serif",e.fillText(l,56,210+h*70),e.fillStyle="#fff",e.font="800 40px sans-serif",e.fillText(c,260,214+h*70)}),e.fillStyle="#cfd6df",e.font="500 20px sans-serif",e.fillText(`${ee.place} \xB7 ${ee.tagline}`,56,590);let o=t.toDataURL("image/png");St("cardImg").src=o,St("cardDl").href=o,St("cardModal").hidden=!1,St("submitRow").hidden=!th||zc,St("submitMsg").textContent=""}}var Nr=new eo,Ao=new st;function nv(n){let t=n.ray.origin,e=n.ray.direction,i=0;for(let s=0;s<5e3;s+=3){let r=t.x+e.x*s,a=t.y+e.y*s,o=t.z+e.z*s;if(a<=Os(r,o)){let l=i,c=s;for(let h=0;h<10;h++){let u=(l+c)/2;t.y+e.y*u<=Os(t.x+e.x*u,t.z+e.z*u)?c=u:l=u}return{point:new C(t.x+e.x*c,t.y+e.y*c,t.z+e.z*c),distance:c}}i=s}return null}function Oo(n,t,e){Ao.set(n/innerWidth*2-1,-(t/innerHeight)*2+1),Nr.setFromCamera(Ao,Kt);let i=nv(Nr);if(e)return i;let r=Nr.intersectObjects([...Io.children,te.mesh,Qe.mesh],!1)[0];return r&&(!i||r.distance<i.distance)?{point:r.point.clone(),distance:r.distance}:i}function kc(n){Oc(In),In==="bomb"?Vx(n):In==="bat"?Wx(n):In==="laser"?ld(n):In==="meteor"?$x(n):In==="quake"?Zx(n):In==="nuke"&&Kx(n)}var Bs=new Map,Ln=null;ii.addEventListener("pointerdown",n=>{if(Bs.set(n.pointerId,n),Bs.size>1){ce.drawing&&Qc(),Ln=null;return}if(Ln={x:n.clientX,y:n.clientY,t:performance.now(),btn:n.button},In==="laser"&&n.button===0&&!ce.active){let t=Oo(n.clientX,n.clientY,!0);if(t){ce.drawing=!0,Be.enabled=!1,ce.path=[t.point];let e=new ge().setFromPoints([t.point,t.point]);ce.line=new ur(e,new Sr({color:"#21d07a",dashSize:6,gapSize:4,depthTest:!1})),ce.line.renderOrder=9,ie.add(ce.line)}}},{capture:!0});ii.addEventListener("pointermove",n=>{if(Bs.has(n.pointerId)&&Bs.set(n.pointerId,n),!ce.drawing)return;let t=Oo(n.clientX,n.clientY,!0);if(!t)return;let e=ce.path[ce.path.length-1];t.point.distanceTo(e)>3&&(ce.path.push(t.point),ce.line.geometry.dispose(),ce.line.geometry=new ge().setFromPoints(ce.path.map(i=>i.clone().setY(i.y+1.5))),ce.line.computeLineDistances())});function Qc(){ce.drawing=!1,Be.enabled=!0,ce.line&&(ie.remove(ce.line),ce.line.geometry.dispose(),ce.line=null)}function iv(n){if(Bs.delete(n.pointerId),ce.drawing){let s=ce.path;Qc();let r=0;for(let a=1;a<s.length;a++)r+=s[a].distanceTo(s[a-1]);r<8?(Oc("laser"),ld(s[0])):(Oc("laser"),Yx(s)),Ln=null;return}if(!Ln||Ln.btn!==0){Ln=null;return}let t=Math.hypot(n.clientX-Ln.x,n.clientY-Ln.y),e=performance.now()-Ln.t;if(Ln=null,t>8||e>600)return;let i=Oo(n.clientX,n.clientY);i&&kc(i.point)}ii.addEventListener("pointerup",iv);ii.addEventListener("pointercancel",n=>{Bs.delete(n.pointerId),ce.drawing&&Qc(),Ln=null});addEventListener("keydown",n=>{if(n.target.tagName==="INPUT")return;let t=+n.key;t>=1&&t<=Br.length&&To(Br[t-1].id),(n.key==="n"||n.key==="N")&&jc(!Po),(n.key==="l"||n.key==="L")&&St("labelBtn").click(),(n.key==="m"||n.key==="M")&&ud(),n.key==="Escape"&&(St("cardModal").hidden=!0,St("rankModal").hidden=!0)});function ud(){ne.muted=!ne.muted,St("muteBtn").classList.toggle("on",ne.muted),St("muteBtn").textContent=ne.muted?xt("btn.soundOff"):xt("btn.sound")}addEventListener("resize",()=>{Kt.aspect=innerWidth/innerHeight,Kt.updateProjectionMatrix(),xe.setSize(innerWidth,innerHeight),typeof kr=="function"&&zn>ks()&&kr(ks())});var th=!!(ee.supabaseUrl&&ee.supabaseKey);async function fd(n,t){let e=new AbortController,i=setTimeout(()=>e.abort(),9e3);try{let s=await fetch(`${ee.supabaseUrl}/rest/v1/rpc/${n}`,{method:"POST",signal:e.signal,headers:{apikey:ee.supabaseKey,"Content-Type":"application/json"},body:JSON.stringify(t||{})});if(!s.ok)throw new Error(`${s.status}`);return s.json()}finally{clearTimeout(i)}}var Df=n=>String(n).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),zc=!1;async function dd(n){let t=St("rankList");if(!th){t.innerHTML=`<p class="muted">${xt("rank.off")}</p>`;return}t.innerHTML=`<p class="muted">${xt("rank.loading")}</p>`;try{let e=await fd("smash_top",{p_company:ee.code,p_limit:20});t.innerHTML=e.length?`<ol>${e.map((i,s)=>`<li class="${i.nick===n?"me":""}"><span class="no">${s+1}</span><b>${Df(i.nick)}</b><span class="rk">${Df(i.rank_name||"")}</span><span class="sc">${Us(i.score)}</span></li>`).join("")}</ol>`:`<p class="muted">${xt("rank.empty")}</p>`}catch{t.innerHTML=`<p class="muted">${xt("rank.fail")}</p>`}}async function sv(){if(!th||zc)return;let n=(St("nick").value||"").trim()||xt("rank.anon");try{localStorage.setItem("smash-nick",n)}catch{}St("submitBtn").disabled=!0,St("submitMsg").textContent=xt("rank.sending");try{let t=await fd("smash_submit",{p_company:ee.code,p_nick:n,p_score:Math.round(zs),p_collapsed:Uo,p_rank:kn[So][0]});t.ok?(zc=!0,St("submitMsg").textContent=xt("rank.done",ee.company,t.position),dd(n.slice(0,12))):(St("submitMsg").textContent=t.reason==="too_fast"?xt("rank.fast"):xt("rank.err"),St("submitBtn").disabled=!1)}catch{St("submitMsg").textContent=xt("rank.err"),St("submitBtn").disabled=!1}}function rv(){St("rankModal").hidden=!1,St("rankTitle").textContent=xt("rank.title",ee.company),dd()}var fo=!0,av=cn.filter(n=>n.site&&n.name).map(n=>{let t=document.createElement("div");return t.className="blabel",t.textContent=n.name,t.style.display="none",St("labels").appendChild(t),{b:n,el:t,on:!1}}),Gi=new C,Cc=new Set;function ov(){let n=Kt.position.distanceTo(Be.target)>go*3.2+900;Cc.clear();let t=innerWidth,e=innerHeight,i=[];for(let r of av){let a=r.b,o=fo&&!n&&!a.gone&&!a.collapsed;o&&(Gi.set(a.cx,a.h*(a.vox?Math.max(.15,a.alive/a.vol):1)+4+(a.sign?a.signH:0),a.cz).project(Kt),o=Gi.z<1&&Math.abs(Gi.x)<1.05&&Math.abs(Gi.y)<1.05,o&&i.push([r,(Gi.x*.5+.5)*t,(-Gi.y*.5+.5)*e,Gi.z])),!o&&r.on&&(r.el.style.display="none",r.on=!1)}i.sort((r,a)=>r[3]-a[3]);let s=Oe?Kt.position.distanceTo(Be.target)>go*1.2+250?10:22:60;if(i.length>s){i.sort((r,a)=>Math.hypot(r[1]-t/2,r[2]-e/2)-Math.hypot(a[1]-t/2,a[2]-e/2));for(let r of i.splice(s))r[0].on&&(r[0].el.style.display="none",r[0].on=!1)}for(let[r,a,o]of i){let l=`${Math.round(a/84)},${Math.round(o/20)}`;if(Cc.has(l)){r.on&&(r.el.style.display="none",r.on=!1);continue}Cc.add(l),r.on||(r.el.style.display="",r.on=!0),r.el.style.transform=`translate(${a|0}px,${o|0}px) translate(-50%,-100%)`}}function lv(n){if(!n)return null;if(n.object===te.mesh){let a=te.owner[n.instanceId];return a>=0?cn[a]:null}let t=n.object.userData.owners;if(!t)return null;let e=n.faceIndex*3,i=0,s=t.length-1,r=-1;for(;i<=s;){let a=i+s>>1;t[a][0]<=e?(r=a,i=a+1):s=a-1}return r>=0?cn[t[r][1]]:null}var Uf=0;ii.addEventListener("pointermove",n=>{if(n.pointerType!=="mouse"||n.buttons||ce.drawing){St("hover").hidden=!0;return}let t=performance.now();if(t-Uf<90)return;Uf=t,Ao.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),Nr.setFromCamera(Ao,Kt);let e=lv(Nr.intersectObjects([...Io.children,te.mesh],!1)[0]),i=St("hover");if(!e||e.gone){i.hidden=!0;return}let s=e.vox?Math.round(e.alive/e.vol*100):100;i.innerHTML=`<b>${e.name||(e.site?ee.company:xt("hover")[0])}</b><span>${e.site?ee.company+" \xB7 ":""}${xt("hover.1",Math.round(e.h),s)}</span>`,i.style.transform=`translate(${n.clientX+14}px,${n.clientY+14}px)`,i.hidden=!1});ii.addEventListener("pointerleave",()=>St("hover").hidden=!0);var Nf=performance.now(),Pc=0,Lc=0,Of=.5,ks=()=>Math.min(devicePixelRatio,ni[Un].dprMax,Math.sqrt(ni[Un].px/(innerWidth*innerHeight))),zn=ks(),co=0,Ic=0,Dc=0;xe.setPixelRatio(zn);function kr(n){n=Math.round(n*20)/20,n!==zn&&(zn=n,xe.setPixelRatio(zn),xe.setSize(innerWidth,innerHeight))}function cv(n){if(co+=n,Ic++,co<.75)return;let t=co/Ic*1e3;co=0,Ic=0,t>21?zn>Of+.01?kr(Math.max(Of,zn*.85)):++Dc>=3&&Un>0&&(pd(Un-1,!0),Dc=0):(Dc=0,t<12.5&&zn<ks()&&kr(Math.min(ks(),zn+.1)))}function pd(n,t){Un=n;try{localStorage.setItem("smash-q",n)}catch{}let e=ni[n],i=e.shadow>0;Se.castShadow!==i&&(Se.castShadow=i,bn.traverse(r=>{r.material&&[].concat(r.material).forEach(a=>a.needsUpdate=!0)})),i&&Se.shadow.mapSize.x!==e.shadow&&(Se.shadow.mapSize.set(e.shadow,e.shadow),Se.shadow.map&&(Se.shadow.map.dispose(),Se.shadow.map=null)),xe.shadowMap.needsUpdate=!0,Gr=e.fxk,kr(ks());let s=document.getElementById("qBtn");s&&(s.textContent=xt("quality",e.name)),t&&Gs(xt("qDown",e.name),2200)}var po=[],mo=[];function md(n){let t=performance.now(),e=(n-Nf)/1e3,i=Math.min(.05,e);Nf=n,!document.hidden&&e<.5&&cv(e),Ir>0?(Ir-=i,Rc=Ir>1.2?.25:.25+(1.2-Ir)/1.2*.75):Rc=1;let s=i*Rc;ei+=s,Kt.position.sub(Ac),Be.update(),Ac.set(B(-1,1),B(-1,1),B(-1,1)).multiplyScalar(Bn),Kt.position.add(Ac),Bn*=Math.exp(-i*4.5),Bn<.02&&(Bn=0);for(let f=0;f<Fe.length;f++){let p=Fe[f];p.t+=s/p.dur,p.up(Math.min(1,p.t)),p.t>=1&&(Fe.splice(f,1),f--,p.done())}if(Ce){Ce.t+=s;let f=Math.max(0,1-Ce.t/Ce.dur),p=Ce.A*f*(Ce.t<.3?Ce.t/.3:1);ie.position.set(B(-1,1)*Math.min(2.5,p*.3),0,B(-1,1)*Math.min(2.5,p*.3)),Lr.uQC.value.set(Ce.P.x,Ce.P.z),Lr.uQT.value=Ce.t,Lr.uQA.value=Ce.M>=7.5?p:0,$i.sway(Ce.t,p),Bn=Math.max(Bn,p*.25),Ce.t>=Ce.dur&&(Wf(Ce.P.x,Ce.P.z,400),Ce=null,ie.position.set(0,0,0),Lr.uQA.value=0,$i.sway(0,0))}re.update(s),Mi.update(s),tn.update(s),Fs.update(s);let r=0;for(let f of cn)f.dirty&&r<4&&ei-(f.lastCheck||0)>.15&&(f.lastCheck=ei,Bx(f),r++);Uc.length&&kx(Uc.shift()),te.flush(),Qe.flush(),Ax(s),ei-Zc>1.3&&(vi=Math.max(0,vi-s*(50+vi*.14))),uo>0&&ei-Pf>.18&&(Si(Nc.clone().setY(Nc.y+6),`+${Us(Math.round(uo))}`,"#ffe9a8"),uo=0,Pf=ei);for(let f=0;f<Ls.length;f++){let p=Ls[f];if(p.t+=i,p.t>1.6){p.el.remove(),Ls.splice(f,1),f--;continue}let g=p.pos.clone();if(g.y+=p.t*14,g.project(Kt),!(g.z<=1&&Math.abs(g.x)<=1.1&&Math.abs(g.y)<=1.1)){p.el.style.opacity=0;continue}p.el.style.transform=`translate(${(g.x*.5+.5)*innerWidth}px, ${(-g.y*.5+.5)*innerHeight}px) translate(-50%,-50%) scale(${p.t<.12?.6+p.t*3.4:1})`,p.el.style.opacity=p.t>1.1?(1.6-p.t)/.5:1}let a=Be.target,o=Math.round(a.x/20)*20,l=Math.round(a.z/20)*20;(re.n>0||Fe.length>0||Ce||te.hi>=0||Qe.hi>=0||o!==Se.target.position.x||l!==Se.target.position.z)&&(Lc=(Lc+1)%(Oe?2:1),Lc||(xe.shadowMap.needsUpdate=!0)),Se.target.position.set(o,0,l),Se.position.copy(Se.target.position).addScaledVector(px,900);let h=xe.getDrawingBufferSize(new st).y/(2*Math.tan(ws.degToRad(Kt.fov/2)));Mi.mat.uniforms.uScale.value=h,tn.mat.uniforms.uScale.value=h,Fs.mat.uniforms.uScale.value=h,Ff.position.copy(Kt.position),Pc+=i,Pc>.1&&(Pc=0,hd()),ov();let u=performance.now();ux||xe.render(bn,Kt),po.push(u-t),mo.push(performance.now()-u),mo.length>600&&mo.shift(),po.length>600&&po.shift(),requestAnimationFrame(md)}["score","rank","bar","mult","rate","cnt","depth"].forEach(n=>yn[n]=St(`h-${n}`));hd();document.title=`${xt("smash",ee.company)} | ${ee.series}`;St("title").textContent=xt("smash",ee.company);St("series").textContent=ee.series;St("startTitle").textContent=xt("smash",ee.company);St("startSeries").textContent=ee.series;St("startTag").textContent=ee.tagline;St("credit").textContent=xt("credit",ee.place,ee.company,Kf);Qx();St("nightBtn").onclick=()=>jc(!Po);St("menuBtn").onclick=()=>St("bottom").classList.toggle("open");St("labelBtn").onclick=()=>{fo=!fo,St("labelBtn").classList.toggle("on",fo)};St("qBtn").textContent=xt("quality",ni[Un].name);document.documentElement.lang=Is;document.querySelectorAll("[data-t]").forEach(n=>{let t=xt(n.dataset.t);typeof t=="string"&&(n[n.dataset.attr||"innerHTML"]=t)});St("qBtn").onclick=()=>pd((Un+1)%ni.length);St("hubBtn").href=ee.hub||"../";Hc&&setTimeout(()=>Gs(xt("noGpu"),6e3),1500);St("muteBtn").onclick=ud;St("resetBtn").onclick=()=>location.reload();St("cardBtn").onclick=ev;St("cardClose").onclick=()=>St("cardModal").hidden=!0;St("rankBtn").onclick=rv;St("rankClose").onclick=()=>St("rankModal").hidden=!0;St("submitBtn").onclick=sv;try{St("nick").value=localStorage.getItem("smash-nick")||""}catch{}St("rankAll").href=(ee.hub||"../")+"#rank";["pointerdown","touchend","keydown"].forEach(n=>addEventListener(n,()=>{St("start").classList.contains("gone")&&ne.init()},{capture:!0,passive:!0}));document.addEventListener("visibilitychange",()=>{!document.hidden&&ne.ctx&&ne.ctx.state!=="running"&&ne.ctx.resume()});St("startBtn").onclick=()=>{ne.init(),St("start").classList.add("gone"),setTimeout(()=>Gs(xt("hint"),3500),400)};window.__sfxState=()=>ne.ctx&&ne.ctx.state;window.__smash={renderNow:()=>{xe.shadowMap.needsUpdate=!0,xe.render(bn,Kt)},rubbleStats:()=>{let n=0,t=0,e=Qe;for(let i=0;i<e.high;i++){if(!e.alive[i])continue;let s=e.pos[i*3+1]-Mn(e.pos[i*3],e.pos[i*3+2]);s>n&&(n=s),s>20&&t++}return{live:e.live,maxH:+n.toFixed(1),over20:t}},screenOf:(n,t,e)=>{let i=new C(n,t,e).project(Kt);return{x:(i.x*.5+.5)*innerWidth,y:(-i.y*.5+.5)*innerHeight}},dpr:()=>zn,perfLog:po,renderLog:mo,info:()=>({calls:xe.info.render.calls,tris:xe.info.render.triangles,progs:xe.info.programs.length}),simTime:()=>ei,actV:(n,t)=>{let e=new C(...t);n==="quake"&&(wo=9),kc(e)},buildings:cn,blocks:te,debris:re,rubbleL:Qe,act:kc,pickAt:Oo,selectTool:To,setNight:jc,state:()=>({score:zs,style:vi,destroyedSite:Vr,collapsedSite:Uo,deepest:Cs,debris:re.n,blocks:te.live,rubble:Qe.live,fx:Fe.length})};function hv(){let n=new C(0,-500,0);$c(n.x,n.y,n.z,1,.01),bo(n.x,n.y,n.z,1,.01),Mi.spawn(0,-500,0,0,0,0,1,.01,[1,1,1],[1,1,1]),tn.spawn(0,-500,0,0,0,0,1,.01,[1,1,1],[1,1,1]);let t=[new kt(new De(1,1,1),new Me({map:ad})),new kt(new De(1,1,1),new Me({color:"#30353b",metalness:.5,roughness:.4})),new kt(new De(1,1,1),new mn({color:"#ffb36b"})),new ur(new ge().setFromPoints([n,n]),new Sr({color:"#21d07a",dashSize:6,gapSize:4,depthTest:!1}))];t.push(cd()),t.forEach(e=>{e.position.copy(n),ie.add(e)}),xi.visible=!0,re.mesh.count=1,Qe.mesh.count=Math.max(1,Qe.mesh.count),te.mesh.count=Math.max(1,te.mesh.count),xe.compile(bn,Kt),xi.visible=!1,re.mesh.count=0,t.forEach(e=>{ie.remove(e),e.traverse(i=>i.geometry&&i.geometry.dispose())})}hv();requestAnimationFrame(md);})();
