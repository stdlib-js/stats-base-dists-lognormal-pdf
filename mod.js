// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=n;function l(r){return r!=r}var y=Math.sqrt,v=Math.floor,p=Math.ceil;function b(r){return r<0?p(r):v(r)}var w=Number.NEGATIVE_INFINITY,A=Number.POSITIVE_INFINITY;function _(r){return r===A||r===w}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var d=Object.prototype.toString;var s=Object.prototype.hasOwnProperty;var h,U="function"==typeof Symbol?Symbol.toStringTag:"";h=m&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return d.call(r);t=r[U],u=U,n=null!=(o=r)&&s.call(o,u);try{r[U]=void 0}catch(n){return d.call(r)}return e=d.call(r),n?r[U]=t:delete r[U],e}:function(r){return d.call(r)};var N=h,j="function"==typeof Uint32Array;var g="function"==typeof Uint32Array?Uint32Array:null;var I,O="function"==typeof Uint32Array?Uint32Array:void 0;I=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(j&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S=I,E="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null;var H,T="function"==typeof Float64Array?Float64Array:void 0;H=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F([1,3.14,-3.14,NaN]),t=n,r=(E&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var G=H,P="function"==typeof Uint8Array;var L="function"==typeof Uint8Array?Uint8Array:null;var M,V="function"==typeof Uint8Array?Uint8Array:void 0;M=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),t=n,r=(P&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W=M,x="function"==typeof Uint16Array;var k="function"==typeof Uint16Array?Uint16Array:null;var Y,q="function"==typeof Uint16Array?Uint16Array:void 0;Y=function(){var r,n,t;if("function"!=typeof k)return!1;try{n=new k(n=[1,3.14,-3.14,65536,65537]),t=n,r=(x&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var C,z={uint16:Y,uint8:W};(C=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(C.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new G(1),R=new S(Q.buffer),X=K.HIGH,Z=K.LOW;function $(r,n){return Q[0]=n,r[0]=R[X],r[1]=R[Z],r}function rr(r,n){return 1===arguments.length?$([0,0],r):$(r,n)}var nr,tr,er=!0===J?1:0,or=new G(1),ur=new S(or.buffer);function ir(r){return or[0]=r,ur[er]}!0===J?(nr=1,tr=0):(nr=0,tr=1);var fr={HIGH:nr,LOW:tr},ar=new G(1),cr=new S(ar.buffer),lr=fr.HIGH,yr=fr.LOW;function vr(r,n){return cr[lr]=r,cr[yr]=n,ar[0]}var pr=[0,0];function br(r,n){var t,e;return rr(pr,r),t=pr[0],t&=2147483647,e=ir(n),vr(t|=e&=2147483648,pr[1])}function wr(r){return Math.abs(r)}function Ar(r,n){return l(n)||_(n)?(r[0]=n,r[1]=0,r):0!==n&&wr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var _r=[0,0],mr=[0,0];function dr(r,n){var t,e;return 0===n||0===r||l(r)||_(r)?r:(function(r,n){1===arguments.length?Ar([0,0],r):Ar(r,n)}(_r,r),n+=_r[1],n+=function(r){var n=ir(r);return(n=(2146435072&n)>>>20)-1023|0}(r=_r[0]),n<-1074?br(0,r):n>1023?r<0?w:A:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,rr(mr,r),t=mr[0],t&=2148532223,e*vr(t|=n+1023<<20,mr[1])))}function sr(r){var n;return l(r)||r===A?r:r===w?0:r>709.782712893384?A:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,o,u,i;return dr(1-(n-(e=r-n)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=b(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function hr(r){return v(r)===r}function Ur(r){return hr(r/2)}function Nr(r){return Ur(r>0?r-1:r+1)}var jr=!0===J?0:1,gr=new G(1),Ir=new S(gr.buffer);function Or(r,n){return gr[0]=r,Ir[jr]=n>>>0,gr[0]}function Sr(r){return 0|r}var Er=!0===J?1:0,Fr=new G(1),Hr=new S(Fr.buffer);function Tr(r,n){return Fr[0]=r,Hr[Er]=n>>>0,Fr[0]}var Gr=[1,1.5],Pr=[0,.5849624872207642],Lr=[0,1.350039202129749e-8];var Mr=1e300,Vr=1e-300,Wr=[0,0],xr=[0,0];function kr(r,n){var t,e,o,u,i,f,a,c,v,p,b,m,d,s;if(l(r)||l(n))return NaN;if(rr(Wr,n),i=Wr[0],0===Wr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return y(r);if(-.5===n)return 1/y(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(_(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:wr(r)<1==(n===A)?0:A}(r,n)}if(rr(Wr,r),u=Wr[0],0===Wr[1]){if(0===u)return function(r,n){return n===w?A:n===A?0:n>0?Nr(n)?r:0:Nr(n)?br(A,r):A}(r,n);if(1===r)return 1;if(-1===r&&Nr(n))return-1;if(_(r))return r===w?kr(-0,-n):n<0?0:A}if(r<0&&!1===hr(n))return(r-r)/(r-r);if(o=wr(r),t=2147483647&u|0,e=2147483647&i|0,a=i>>>31|0,f=(f=u>>>31|0)&&Nr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&ir(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Mr*Mr:f*Vr*Vr;if(t>1072693248)return 0===a?f*Mr*Mr:f*Vr*Vr;b=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Or(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(xr,o)}else b=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p,b,w,A,_,m,d,s,h,U,N;return s=0,t<1048576&&(s-=53,t=ir(n*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,s+=1,t-=1048576),i=Or(o=(m=(n=Tr(n,t))-(c=Gr[U]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),a=Tr(0,e+=U<<18),_=(u=o*o)*u*(0===(N=u)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=Or(a=3+(u=i*i)+(_+=(f=d*(m-i*a-i*(n-(a-c))))*(i+o)),0),w=(p=-7.028461650952758e-9*(y=Or(y=(m=i*a)+(d=f*a+(_-(a-3-u))*o),0))+.9617966939259756*(d-(y-m))+Lr[U])-((b=Or(b=(v=.9617967009544373*y)+p+(l=Pr[U])+(A=s),0))-A-l-v),r[0]=b,r[1]=w,r}(xr,o,t);if(p=(n-(c=Or(n,0)))*b[0]+n*b[1],v=c*b[0],rr(Wr,m=p+v),d=Sr(Wr[0]),s=Sr(Wr[1]),d>=1083179008){if(0!=(d-1083179008|s))return f*Mr*Mr;if(p+8008566259537294e-32>m-v)return f*Mr*Mr}else if((2147483647&d)>=1083231232){if(0!=(d-3230714880|s))return f*Vr*Vr;if(p<=m-v)return f*Vr*Vr}return m=function(r,n,t){var e,o,u,i,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=u=Tr(0,e)),r=Sr(r=ir(c=1-((c=(i=.6931471824645996*(u=Or(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?dr(c,l):Tr(c,r)}(d,v,p),f*m}var Yr=.6931471803691238,qr=1.9082149292705877e-10;function Cr(r){var n,t,e,o,u,i,f,a,c,y,v,p;return 0===r?w:l(r)||r<0?NaN:(u=0,(t=ir(r))<1048576&&(u-=54,t=ir(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(a=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=Tr(r,t|1072693248^a))-1,(1048575&2+t)<3?0===f?0===u?0:u*Yr+u*qr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Yr-(i-u*qr-f)):(a=t-398458|0,c=440401-t|0,o=(v=(p=(y=f/(2+f))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-y*(n+i)):u*Yr-(n-(y*(n+i)+u*qr)-f)):0===u?f-y*(f-i):u*Yr-(y*(f-i)-u*qr-f))))}var zr=3.141592653589793;function Br(r,n,t){var e;return l(r)||l(n)||l(t)||t<=0?NaN:r<=0?0:(e=kr(t,2),1/r*(1/y(2*e*zr))*sr(-1/(2*e)*kr(Cr(r)-n,2)))}function Dr(r,n){var t,e,o,u;return l(r)||l(n)||n<=0?(u=NaN,function(){return u}):(t=kr(n,2),e=1/y(2*t*zr),o=-1/(2*t),function(n){if(l(n))return NaN;if(n<=0)return 0;return 1/n*e*sr(o*kr(Cr(n)-r,2))})}c(Br,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Dr});export{Br as default,Dr as factory};
//# sourceMappingURL=mod.js.map
