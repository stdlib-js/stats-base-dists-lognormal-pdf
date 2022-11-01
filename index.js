// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),p&&i&&i.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return r!=r}var p=Math.sqrt,v=Math.floor,b=Math.ceil;function d(r){return r<0?b(r):v(r)}var s=Number.NEGATIVE_INFINITY,w=Number.POSITIVE_INFINITY,_=1023;function A(r){return r===w||r===s}var m,h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),U=Object.prototype.toString,N=Object.prototype.hasOwnProperty,j="function"==typeof Symbol?Symbol.toStringTag:"",g=h&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return U.call(r);t=r[j],u=j,n=null!=(o=r)&&N.call(o,u);try{r[j]=void 0}catch(n){return U.call(r)}return e=U.call(r),n?r[j]=t:delete r[j],e}:function(r){return U.call(r)},I="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===g(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=m,T="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(T&&t instanceof Float64Array||"[object Float64Array]"===g(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,x=E,M="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,V="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),t=n,r=(M&&t instanceof Uint8Array||"[object Uint8Array]"===g(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,k=P,Y="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===g(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:W,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new x(1),X=new F(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n){return R[0]=n,r[0]=X[Z],r[1]=X[$],r}function nr(r,n){return 1===arguments.length?rr([0,0],r):rr(r,n)}var tr,er,or=!0===K?1:0,ur=new x(1),ir=new F(ur.buffer);function fr(r){return ur[0]=r,ir[or]}!0===K?(tr=1,er=0):(tr=0,er=1);var ar={HIGH:tr,LOW:er},cr=new x(1),lr=new F(cr.buffer),yr=ar.HIGH,pr=ar.LOW;function vr(r,n){return lr[yr]=r,lr[pr]=n,cr[0]}var br=[0,0];function dr(r,n){var t,e;return nr(br,r),t=br[0],t&=2147483647,e=fr(n),vr(t|=e&=2147483648,br[1])}function sr(r){return Math.abs(r)}function wr(r,n,t,e){return y(r)||A(r)?(n[e]=r,n[e+t]=0,n):0!==r&&sr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return wr(r,[0,0],1,0)}),"assign",wr);var _r=[0,0],Ar=[0,0];function mr(r,n){var t,e;return 0===n||0===r||y(r)||A(r)?r:(wr(r,_r,1,0),n+=_r[1],n+=function(r){var n=fr(r);return(n=(2146435072&n)>>>20)-_|0}(r=_r[0]),n<-1074?dr(0,r):n>1023?r<0?s:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr(Ar,r),t=Ar[0],t&=2148532223,e*vr(t|=n+_<<20,Ar[1])))}var hr=1.4426950408889634,Ur=1/(1<<28);function Nr(r){var n;return y(r)||r===w?r:r===s?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ur?1+r:function(r,n,t){var e,o,u,i;return mr(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=d(r<0?hr*r-.5:hr*r+.5)),1.9082149292705877e-10*n,n)}function jr(r){return v(r)===r}function gr(r){return jr(r/2)}function Ir(r){return gr(r>0?r-1:r+1)}var Or=!0===K?0:1,Sr=new x(1),Er=new F(Sr.buffer);function Fr(r,n){return Sr[0]=r,Er[Or]=n>>>0,Sr[0]}function Tr(r){return 0|r}var Hr=!0===K?1:0,Gr=new x(1),Pr=new F(Gr.buffer);function xr(r,n){return Gr[0]=r,Pr[Hr]=n>>>0,Gr[0]}var Mr=1048576,Lr=[1,1.5],Vr=[0,.5849624872207642],Wr=[0,1.350039202129749e-8],kr=2147483647,Yr=1048575,qr=1048576,Cr=2147483647,zr=1083179008,Br=1e300,Dr=1e-300,Jr=[0,0],Kr=[0,0];function Qr(r,n){var t,e,o,u,i,f,a,c,l,v,b,d,m,h;if(y(r)||y(n))return NaN;if(nr(Jr,n),i=Jr[0],0===Jr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return p(r);if(-.5===n)return 1/p(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(A(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:sr(r)<1==(n===w)?0:w}(r,n)}if(nr(Jr,r),u=Jr[0],0===Jr[1]){if(0===u)return function(r,n){return n===s?w:n===w?0:n>0?Ir(n)?r:0:Ir(n)?dr(w,r):w}(r,n);if(1===r)return 1;if(-1===r&&Ir(n))return-1;if(A(r))return r===s?Qr(-0,-n):n<0?0:w}if(r<0&&!1===jr(n))return(r-r)/(r-r);if(o=sr(r),t=u&Cr|0,e=i&Cr|0,a=i>>>31|0,f=(f=u>>>31|0)&&Ir(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&fr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Br*Br:f*Dr*Dr;if(t>1072693248)return 0===a?f*Br*Br:f*Dr*Dr;b=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Fr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Kr,o)}else b=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,d,s,w,A,m,h,U,N,j;return h=0,t<Mr&&(h-=53,t=fr(n*=9007199254740992)),h+=(t>>20)-_|0,t=1072693248|(U=1048575&t|0),U<=235662?N=0:U<767610?N=1:(N=0,h+=1,t-=Mr),i=Fr(o=(A=(n=xr(n,t))-(c=Lr[N]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=xr(0,e+=N<<18),w=(u=o*o)*u*(0===(j=u)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=Fr(a=3+(u=i*i)+(w+=(f=m*(A-i*a-i*(n-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=Fr(y=(A=i*a)+(m=f*a+(w-(a-3-u))*o),0))+.9617966939259756*(m-(y-A))+Wr[N])-((b=Fr(b=(p=.9617967009544373*y)+v+(l=Vr[N])+(s=h),0))-s-l-p),r[0]=b,r[1]=d,r}(Kr,o,t);if(v=(n-(c=Fr(n,0)))*b[0]+n*b[1],l=c*b[0],nr(Jr,d=v+l),m=Tr(Jr[0]),h=Tr(Jr[1]),m>=zr){if(0!=(m-zr|h))return f*Br*Br;if(v+8008566259537294e-32>d-l)return f*Br*Br}else if((m&Cr)>=1083231232){if(0!=(m-3230714880|h))return f*Dr*Dr;if(v<=d-l)return f*Dr*Dr}return d=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&kr|0)>>20)-_|0,c=0,l>1071644672&&(o=xr(0,((c=r+(qr>>y+1)>>>0)&~(Yr>>(y=((c&kr)>>20)-_|0)))>>>0),c=(c&Yr|qr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Tr(r=fr(a=1-((a=(u=.6931471824645996*(o=Fr(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?mr(a,c):xr(a,r)}(m,l,v),f*d}var Rr=.6931471803691238,Xr=1.9082149292705877e-10,Zr=1048575;function $r(r){var n,t,e,o,u,i,f,a,c,l,p,v;return 0===r?s:y(r)||r<0?NaN:(u=0,(t=fr(r))<1048576&&(u-=54,t=fr(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-_|0,u+=(a=614244+(t&=Zr)&1048576|0)>>20|0,f=(r=xr(r,t|1072693248^a))-1,(Zr&2+t)<3?0===f?0===u?0:u*Rr+u*Xr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Rr-(i-u*Xr-f)):(a=t-398458|0,c=440401-t|0,o=(p=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+i)):u*Rr-(n-(l*(n+i)+u*Xr)-f)):0===u?f-l*(f-i):u*Rr-(l*(f-i)-u*Xr-f))))}var rn=3.141592653589793;function nn(r,n,t){var e;return y(r)||y(n)||y(t)||t<=0?NaN:r<=0?0:(e=Qr(t,2),1/r*(1/p(2*e*rn))*Nr(-1/(2*e)*Qr($r(r)-n,2)))}function tn(r,n){var t,e,o,u;return y(r)||y(n)||n<=0?(u=NaN,function(){return u}):(t=Qr(n,2),e=1/p(2*t*rn),o=-1/(2*t),function(n){return y(n)?NaN:n<=0?0:1/n*e*Nr(o*Qr($r(n)-r,2))})}l(nn,"factory",tn),r.default=nn,r.factory=tn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).pdf={});
//# sourceMappingURL=index.js.map
