"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=f(function(C,s){
var v=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-sqrt/dist'),w=require('@stdlib/math-base-special-exp/dist'),o=require('@stdlib/math-base-special-pow/dist'),A=require('@stdlib/math-base-special-ln/dist'),B=require('@stdlib/constants-float64-pi/dist');function I(e,r,a){var t,u,i;return v(e)||v(r)||v(a)||a<=0?NaN:e<=0?0:(t=o(a,2),u=1/l(2*t*B),i=-1/(2*t),1/e*u*w(i*o(A(e)-r,2)))}s.exports=I
});var y=f(function(D,N){
var P=require('@stdlib/utils-constant-function/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-sqrt/dist'),O=require('@stdlib/math-base-special-exp/dist'),p=require('@stdlib/math-base-special-pow/dist'),R=require('@stdlib/math-base-special-ln/dist'),b=require('@stdlib/constants-float64-pi/dist');function h(e,r){var a,t,u;if(q(e)||q(r)||r<=0)return P(NaN);return a=p(r,2),t=1/F(2*a*b),u=-1/(2*a),i;function i(n){return q(n)?NaN:n<=0?0:1/n*t*O(u*p(R(n)-e,2))}}N.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),k=y();j(d,"factory",k);module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
