// 코드 1-4 번들링된 결과인 bundle.js

/****************************************************************/
/*****/ ({
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const math = __webpack_require__(1);
console.log('1 + 2 =', math.add(1, 2));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function add(a, b) {
    return a + b;
}
exports.add = add;

/***/ })
/*****/ });
