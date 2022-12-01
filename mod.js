// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,a=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(i.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,f.get),v&&u&&u.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Math.sqrt,v=Math.floor,p=Math.ceil;function b(r){return r<0?p(r):v(r)}var s=Number.NEGATIVE_INFINITY,w=Number.POSITIVE_INFINITY;function A(r){return r===w||r===s}var _="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var m=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var U="function"==typeof Symbol?Symbol.toStringTag:"";var g=_&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return m.call(r);t=r[U],u=U,n=null!=(o=r)&&d.call(o,u);try{r[U]=void 0}catch(n){return m.call(r)}return e=m.call(r),n?r[U]=t:delete r[U],e}:function(r){return m.call(r)},h="function"==typeof Uint32Array;var N="function"==typeof Uint32Array?Uint32Array:null;var j,I="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(h&&t instanceof Uint32Array||"[object Uint32Array]"===g(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O=j,S="function"==typeof Float64Array;var E="function"==typeof Float64Array?Float64Array:null;var F,H="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E([1,3.14,-3.14,NaN]),t=n,r=(S&&t instanceof Float64Array||"[object Float64Array]"===g(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var T=F,G="function"==typeof Uint8Array;var P="function"==typeof Uint8Array?Uint8Array:null;var L,M="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),t=n,r=(G&&t instanceof Uint8Array||"[object Uint8Array]"===g(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var V=L,W="function"==typeof Uint16Array;var x="function"==typeof Uint16Array?Uint16Array:null;var k,Y="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,65536,65537]),t=n,r=(W&&t instanceof Uint16Array||"[object Uint16Array]"===g(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Y:function(){throw new Error("not implemented")};var q,C={uint16:k,uint8:V};(q=new C.uint16(1))[0]=4660;var z,B,D=52===new C.uint8(q.buffer)[0];!0===D?(z=1,B=0):(z=0,B=1);var J={HIGH:z,LOW:B},K=new T(1),Q=new O(K.buffer),R=J.HIGH,X=J.LOW;function Z(r,n,t,e){return K[0]=r,n[e]=Q[R],n[e+t]=Q[X],n}function $(r){return Z(r,[0,0],1,0)}c($,"assign",Z);var rr,nr,tr=!0===D?1:0,er=new T(1),or=new O(er.buffer);function ur(r){return er[0]=r,or[tr]}!0===D?(rr=1,nr=0):(rr=0,nr=1);var ir={HIGH:rr,LOW:nr},ar=new T(1),fr=new O(ar.buffer),cr=ir.HIGH,lr=ir.LOW;function yr(r,n){return fr[cr]=r,fr[lr]=n,ar[0]}var vr=[0,0];function pr(r,n){var t,e;return $.assign(r,vr,1,0),t=vr[0],t&=2147483647,e=ur(n),yr(t|=e&=2147483648,vr[1])}function br(r){return Math.abs(r)}function sr(r,n,t,e){return l(r)||A(r)?(n[e]=r,n[e+t]=0,n):0!==r&&br(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return sr(r,[0,0],1,0)}),"assign",sr);var wr=[0,0],Ar=[0,0];function _r(r,n){var t,e;return 0===n||0===r||l(r)||A(r)?r:(sr(r,wr,1,0),n+=wr[1],n+=function(r){var n=ur(r);return(n=(2146435072&n)>>>20)-1023|0}(r=wr[0]),n<-1074?pr(0,r):n>1023?r<0?s:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,$.assign(r,Ar,1,0),t=Ar[0],t&=2148532223,e*yr(t|=n+1023<<20,Ar[1])))}function mr(r){var n;return l(r)||r===w?r:r===s?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,o,u,i;return _r(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=b(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function dr(r){return v(r)===r}function Ur(r){return dr(r/2)}function gr(r){return Ur(r>0?r-1:r+1)}var hr=!0===D?0:1,Nr=new T(1),jr=new O(Nr.buffer);function Ir(r,n){return Nr[0]=r,jr[hr]=n>>>0,Nr[0]}function Or(r){return 0|r}var Sr=!0===D?1:0,Er=new T(1),Fr=new O(Er.buffer);function Hr(r,n){return Er[0]=r,Fr[Sr]=n>>>0,Er[0]}var Tr=[1,1.5],Gr=[0,.5849624872207642],Pr=[0,1.350039202129749e-8];var Lr=1e300,Mr=1e-300,Vr=[0,0],Wr=[0,0];function xr(r,n){var t,e,o,u,i,a,f,c,v,p,b,_,m,d;if(l(r)||l(n))return NaN;if($.assign(n,Vr,1,0),i=Vr[0],0===Vr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return y(r);if(-.5===n)return 1/y(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(A(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:br(r)<1==(n===w)?0:w}(r,n)}if($.assign(r,Vr,1,0),u=Vr[0],0===Vr[1]){if(0===u)return function(r,n){return n===s?w:n===w?0:n>0?gr(n)?r:0:gr(n)?pr(w,r):w}(r,n);if(1===r)return 1;if(-1===r&&gr(n))return-1;if(A(r))return r===s?xr(-0,-n):n<0?0:w}if(r<0&&!1===dr(n))return(r-r)/(r-r);if(o=br(r),t=2147483647&u|0,e=2147483647&i|0,f=i>>>31|0,a=(a=u>>>31|0)&&gr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&ur(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*Lr*Lr:a*Mr*Mr;if(t>1072693248)return 0===f?a*Lr*Lr:a*Mr*Mr;b=function(r,n){var t,e,o,u,i,a;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(a=o)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=Ir(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Wr,o)}else b=function(r,n,t){var e,o,u,i,a,f,c,l,y,v,p,b,s,w,A,_,m,d,U,g,h;return d=0,t<1048576&&(d-=53,t=ur(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(U=1048575&t|0),U<=235662?g=0:U<767610?g=1:(g=0,d+=1,t-=1048576),i=Ir(o=(_=(n=Hr(n,t))-(c=Tr[g]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),f=Hr(0,e+=g<<18),A=(u=o*o)*u*(0===(h=u)?.5999999999999946:.5999999999999946+h*(.4285714285785502+h*(.33333332981837743+h*(.272728123808534+h*(.23066074577556175+.20697501780033842*h))))),f=Ir(f=3+(u=i*i)+(A+=(a=m*(_-i*f-i*(n-(f-c))))*(i+o)),0),s=(p=-7.028461650952758e-9*(y=Ir(y=(_=i*f)+(m=a*f+(A-(f-3-u))*o),0))+.9617966939259756*(m-(y-_))+Pr[g])-((b=Ir(b=(v=.9617967009544373*y)+p+(l=Gr[g])+(w=d),0))-w-l-v),r[0]=b,r[1]=s,r}(Wr,o,t);if(_=(p=(n-(c=Ir(n,0)))*b[0]+n*b[1])+(v=c*b[0]),$.assign(_,Vr,1,0),m=Or(Vr[0]),d=Or(Vr[1]),m>=1083179008){if(0!=(m-1083179008|d))return a*Lr*Lr;if(p+8008566259537294e-32>_-v)return a*Lr*Lr}else if((2147483647&m)>=1083231232){if(0!=(m-3230714880|d))return a*Mr*Mr;if(p<=_-v)return a*Mr*Mr}return _=function(r,n,t){var e,o,u,i,a,f,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=u=Hr(0,e)),r=Or(r=ur(c=1-((c=(i=.6931471824645996*(u=Ir(u=t+n,0)))+(a=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((f=a-(c-i))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?_r(c,l):Hr(c,r)}(m,v,p),a*_}var kr=.6931471803691238,Yr=1.9082149292705877e-10;function qr(r){var n,t,e,o,u,i,a,f,c,y,v,p;return 0===r?s:l(r)||r<0?NaN:(u=0,(t=ur(r))<1048576&&(u-=54,t=ur(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(f=(t&=1048575)+614244&1048576|0)>>20|0,a=(r=Hr(r,t|1072693248^f))-1,(1048575&2+t)<3?0===a?0===u?0:u*kr+u*Yr:(i=a*a*(.5-.3333333333333333*a),0===u?a-i:u*kr-(i-u*Yr-a)):(f=t-398458|0,c=440401-t|0,o=(v=(p=(y=a/(2+a))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=e+o,(f|=c)>0?(n=.5*a*a,0===u?a-(n-y*(n+i)):u*kr-(n-(y*(n+i)+u*Yr)-a)):0===u?a-y*(a-i):u*kr-(y*(a-i)-u*Yr-a))))}var Cr=3.141592653589793;function zr(r,n,t){var e;return l(r)||l(n)||l(t)||t<=0?NaN:r<=0?0:(e=xr(t,2),1/r*(1/y(2*e*Cr))*mr(-1/(2*e)*xr(qr(r)-n,2)))}function Br(r,n){var t,e,o,u;return l(r)||l(n)||n<=0?(u=NaN,function(){return u}):(t=xr(n,2),e=1/y(2*t*Cr),o=-1/(2*t),function(n){if(l(n))return NaN;if(n<=0)return 0;return 1/n*e*mr(o*xr(qr(n)-r,2))})}c(zr,"factory",Br);export{zr as default,Br as factory};
//# sourceMappingURL=mod.js.map
