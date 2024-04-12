// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.3-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.3-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";function a(s,d,a){var o;return t(s)||t(d)||t(a)||a<=0?NaN:s<=0?0:(o=i(a,2),1/s*(1/e(2*o*m))*n(-1/(2*o)*i(r(s)-d,2)))}function o(s,a){var o,l,p;return t(s)||t(a)||a<=0?d(NaN):(o=i(a,2),l=1/e(2*o*m),p=-1/(2*o),function(e){if(t(e))return NaN;if(e<=0)return 0;return 1/e*l*n(p*i(r(e)-s,2))})}s(a,"factory",o);export{a as default,o as factory};
//# sourceMappingURL=index.mjs.map
