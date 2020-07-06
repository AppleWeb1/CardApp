webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/back-section.js":
/*!*****************************!*\
  !*** ./src/back-section.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BackSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/chris/repos/chrisbolin.github.io/src/back-section.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction BackSection(_ref) {\n  var title = _ref.title,\n      children = _ref.children,\n      onActivate = _ref.onActivate,\n      onDeactivate = _ref.onDeactivate,\n      active = _ref.active,\n      index = _ref.index;\n  var transformOrigin = \"\".concat(index < 2 ? \"top\" : \"bottom\", \" \").concat(index % 2 === 0 ? \"left\" : \"right\");\n  return __jsx(\"div\", {\n    style: {\n      transformOrigin: transformOrigin\n    },\n    className: \"BackSection \".concat(active && \"active\"),\n    onClick: onActivate,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, active && __jsx(\"button\", {\n    className: \"BackSection-deactivate\",\n    onClick: onDeactivate,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \"\\u2A2F\"), !active && __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: onActivate,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, title)), active && __jsx(\"div\", {\n    className: \"BackSection-children\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 18\n    }\n  }, children));\n}\n_c = BackSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"BackSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFjay1zZWN0aW9uLmpzP2IxOTQiXSwibmFtZXMiOlsiQmFja1NlY3Rpb24iLCJ0aXRsZSIsImNoaWxkcmVuIiwib25BY3RpdmF0ZSIsIm9uRGVhY3RpdmF0ZSIsImFjdGl2ZSIsImluZGV4IiwidHJhbnNmb3JtT3JpZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxXQUFULE9BT1o7QUFBQSxNQU5EQyxLQU1DLFFBTkRBLEtBTUM7QUFBQSxNQUxEQyxRQUtDLFFBTERBLFFBS0M7QUFBQSxNQUpEQyxVQUlDLFFBSkRBLFVBSUM7QUFBQSxNQUhEQyxZQUdDLFFBSERBLFlBR0M7QUFBQSxNQUZEQyxNQUVDLFFBRkRBLE1BRUM7QUFBQSxNQUREQyxLQUNDLFFBRERBLEtBQ0M7QUFDRCxNQUFNQyxlQUFlLGFBQU1ELEtBQUssR0FBRyxDQUFSLEdBQVksS0FBWixHQUFvQixRQUExQixjQUNuQkEsS0FBSyxHQUFHLENBQVIsS0FBYyxDQUFkLEdBQWtCLE1BQWxCLEdBQTJCLE9BRFIsQ0FBckI7QUFHQSxTQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQUVDLHFCQUFlLEVBQWZBO0FBQUYsS0FEVDtBQUVFLGFBQVMsd0JBQWlCRixNQUFNLElBQUksUUFBM0IsQ0FGWDtBQUdFLFdBQU8sRUFBRUYsVUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0dFLE1BQU0sSUFDTDtBQUFRLGFBQVMsRUFBQyx3QkFBbEI7QUFBMkMsV0FBTyxFQUFFRCxZQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosRUFVRyxDQUFDQyxNQUFELElBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFRixVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThCRixLQUE5QixDQURGLENBWEosRUFlR0ksTUFBTSxJQUFJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNILFFBQXZDLENBZmIsQ0FERjtBQW1CRDtLQTlCdUJGLFciLCJmaWxlIjoiLi9zcmMvYmFjay1zZWN0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFja1NlY3Rpb24oe1xuICB0aXRsZSxcbiAgY2hpbGRyZW4sXG4gIG9uQWN0aXZhdGUsXG4gIG9uRGVhY3RpdmF0ZSxcbiAgYWN0aXZlLFxuICBpbmRleCxcbn0pIHtcbiAgY29uc3QgdHJhbnNmb3JtT3JpZ2luID0gYCR7aW5kZXggPCAyID8gXCJ0b3BcIiA6IFwiYm90dG9tXCJ9ICR7XG4gICAgaW5kZXggJSAyID09PSAwID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCJcbiAgfWA7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtT3JpZ2luIH19XG4gICAgICBjbGFzc05hbWU9e2BCYWNrU2VjdGlvbiAke2FjdGl2ZSAmJiBcImFjdGl2ZVwifWB9XG4gICAgICBvbkNsaWNrPXtvbkFjdGl2YXRlfVxuICAgID5cbiAgICAgIHthY3RpdmUgJiYgKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkJhY2tTZWN0aW9uLWRlYWN0aXZhdGVcIiBvbkNsaWNrPXtvbkRlYWN0aXZhdGV9PlxuICAgICAgICAgIOKor1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7IWFjdGl2ZSAmJiAoXG4gICAgICAgIDxoMT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQWN0aXZhdGV9Pnt0aXRsZX08L2J1dHRvbj5cbiAgICAgICAgPC9oMT5cbiAgICAgICl9XG4gICAgICB7YWN0aXZlICYmIDxkaXYgY2xhc3NOYW1lPVwiQmFja1NlY3Rpb24tY2hpbGRyZW5cIj57Y2hpbGRyZW59PC9kaXY+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/back-section.js\n");

/***/ })

})