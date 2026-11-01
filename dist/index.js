"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var f=v(function(S,q){
var a=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-exp/dist'),N=require('@stdlib/math-base-special-abs2/dist'),y=require('@stdlib/math-base-special-ln/dist'),T=require('@stdlib/constants-float64-sqrt-two-pi/dist');function _(e,r,t){var u;return a(e)||a(r)||a(t)||t<=0?NaN:e<=0?0:(u=1/(t*T),1/e*u*p(-.5*N((y(e)-r)/t)))}q.exports=_
});var o=v(function(W,c){
var d=require('@stdlib/utils-constant-function/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-exp/dist'),O=require('@stdlib/math-base-special-abs2/dist'),R=require('@stdlib/math-base-special-ln/dist'),b=require('@stdlib/constants-float64-sqrt-two-pi/dist');function A(e,r){var t;if(i(e)||i(r)||r<=0)return d(NaN);return t=1/(r*b),u;function u(n){return i(n)?NaN:n<=0?0:1/n*t*l(-.5*O((R(n)-e)/r))}}c.exports=A
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=f(),P=o();I(s,"factory",P);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
