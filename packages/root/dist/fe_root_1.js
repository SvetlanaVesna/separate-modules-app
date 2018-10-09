(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../calculator/src/components/home/component.jsx":
/*!*******************************************************!*\
  !*** ../calculator/src/components/home/component.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "../../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



const Home = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u0414\u043E\u043C\u0430\u0448\u043D\u043D\u044F \u0444\u043E\u0440\u043C\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
  className: "menu"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "3")));

const _default = Home;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, "Home", "C:\\Users\\sivanova\\WebstormProjects\\presale\\packages\\calculator\\src\\components\\home\\component.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\sivanova\\WebstormProjects\\presale\\packages\\calculator\\src\\components\\home\\component.jsx");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../calculator/src/components/home/index.js":
/*!**************************************************!*\
  !*** ../calculator/src/components/home/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../../node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "../../node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ "../calculator/src/components/home/component.jsx");
(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "../../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



 // import * as select from '../../reducers/selectors';


const HomeContainer = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(() => ({
  isAuthenticated: true
}), dispatch => ({
  dispatch
})))(_component__WEBPACK_IMPORTED_MODULE_3__["default"]);

const _default = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeContainer, null);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomeContainer, "HomeContainer", "C:\\Users\\sivanova\\WebstormProjects\\presale\\packages\\calculator\\src\\components\\home\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\sivanova\\WebstormProjects\\presale\\packages\\calculator\\src\\components\\home\\index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "../../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=fe_root_1.js.map