webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/back-section.js":
/*!*****************************!*\
  !*** ./src/back-section.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BackSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/chris/repos/chrisbolin.github.io/src/back-section.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar TRANSITION_TIME = 300;\nfunction BackSection(_ref) {\n  _s();\n\n  var title = _ref.title,\n      children = _ref.children,\n      onOpen = _ref.onOpen,\n      onClose = _ref.onClose,\n      active = _ref.active,\n      index = _ref.index;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      transitioning = _useState[0],\n      setTransitioning = _useState[1];\n\n  var transformOrigin = \"\".concat(index < 2 ? \"top\" : \"bottom\", \" \").concat(index % 2 === 0 ? \"left\" : \"right\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setTransitioning(true);\n    setTimeout(function () {\n      return setTransitioning(false);\n    }, TRANSITION_TIME);\n  }, [active]);\n  return __jsx(\"div\", {\n    style: {\n      transformOrigin: transformOrigin\n    },\n    className: \"BackSection \".concat(active && \"active\"),\n    onClick: onOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, active && __jsx(\"button\", {\n    className: \"BackSection-close\",\n    onClick: onClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"\\u2A2F\"), !active && __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: onOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, title)), active && __jsx(\"div\", {\n    className: \"BackSection-children\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 18\n    }\n  }, children));\n}\n\n_s(BackSection, \"n6ni0V3cOBBq7hRVhjgfxeqN3Mc=\");\n\n_c = BackSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"BackSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFjay1zZWN0aW9uLmpzP2IxOTQiXSwibmFtZXMiOlsiVFJBTlNJVElPTl9USU1FIiwiQmFja1NlY3Rpb24iLCJ0aXRsZSIsImNoaWxkcmVuIiwib25PcGVuIiwib25DbG9zZSIsImFjdGl2ZSIsImluZGV4IiwidXNlU3RhdGUiLCJ0cmFuc2l0aW9uaW5nIiwic2V0VHJhbnNpdGlvbmluZyIsInRyYW5zZm9ybU9yaWdpbiIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsZUFBZSxHQUFHLEdBQXhCO0FBRWUsU0FBU0MsV0FBVCxPQU9aO0FBQUE7O0FBQUEsTUFOREMsS0FNQyxRQU5EQSxLQU1DO0FBQUEsTUFMREMsUUFLQyxRQUxEQSxRQUtDO0FBQUEsTUFKREMsTUFJQyxRQUpEQSxNQUlDO0FBQUEsTUFIREMsT0FHQyxRQUhEQSxPQUdDO0FBQUEsTUFGREMsTUFFQyxRQUZEQSxNQUVDO0FBQUEsTUFEREMsS0FDQyxRQUREQSxLQUNDOztBQUFBLGtCQUN5Q0Msc0RBQVEsQ0FBQyxLQUFELENBRGpEO0FBQUEsTUFDTUMsYUFETjtBQUFBLE1BQ3FCQyxnQkFEckI7O0FBRUQsTUFBTUMsZUFBZSxhQUFNSixLQUFLLEdBQUcsQ0FBUixHQUFZLEtBQVosR0FBb0IsUUFBMUIsY0FDbkJBLEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FBZCxHQUFrQixNQUFsQixHQUEyQixPQURSLENBQXJCO0FBR0FLLHlEQUFTLENBQUMsWUFBTTtBQUNkRixvQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0FHLGNBQVUsQ0FBQztBQUFBLGFBQU1ILGdCQUFnQixDQUFDLEtBQUQsQ0FBdEI7QUFBQSxLQUFELEVBQWdDVixlQUFoQyxDQUFWO0FBQ0QsR0FIUSxFQUdOLENBQUNNLE1BQUQsQ0FITSxDQUFUO0FBSUEsU0FDRTtBQUNFLFNBQUssRUFBRTtBQUFFSyxxQkFBZSxFQUFmQTtBQUFGLEtBRFQ7QUFFRSxhQUFTLHdCQUFpQkwsTUFBTSxJQUFJLFFBQTNCLENBRlg7QUFHRSxXQUFPLEVBQUVGLE1BSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtHRSxNQUFNLElBQ0w7QUFBUSxhQUFTLEVBQUMsbUJBQWxCO0FBQXNDLFdBQU8sRUFBRUQsT0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLEVBVUcsQ0FBQ0MsTUFBRCxJQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRUYsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQkYsS0FBMUIsQ0FERixDQVhKLEVBZUdJLE1BQU0sSUFBSTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDSCxRQUF2QyxDQWZiLENBREY7QUFtQkQ7O0dBbkN1QkYsVzs7S0FBQUEsVyIsImZpbGUiOiIuL3NyYy9iYWNrLXNlY3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFRSQU5TSVRJT05fVElNRSA9IDMwMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFja1NlY3Rpb24oe1xuICB0aXRsZSxcbiAgY2hpbGRyZW4sXG4gIG9uT3BlbixcbiAgb25DbG9zZSxcbiAgYWN0aXZlLFxuICBpbmRleCxcbn0pIHtcbiAgY29uc3QgW3RyYW5zaXRpb25pbmcsIHNldFRyYW5zaXRpb25pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSBgJHtpbmRleCA8IDIgPyBcInRvcFwiIDogXCJib3R0b21cIn0gJHtcbiAgICBpbmRleCAlIDIgPT09IDAgPyBcImxlZnRcIiA6IFwicmlnaHRcIlxuICB9YDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUcmFuc2l0aW9uaW5nKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0VHJhbnNpdGlvbmluZyhmYWxzZSksIFRSQU5TSVRJT05fVElNRSk7XG4gIH0sIFthY3RpdmVdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW4gfX1cbiAgICAgIGNsYXNzTmFtZT17YEJhY2tTZWN0aW9uICR7YWN0aXZlICYmIFwiYWN0aXZlXCJ9YH1cbiAgICAgIG9uQ2xpY2s9e29uT3Blbn1cbiAgICA+XG4gICAgICB7YWN0aXZlICYmIChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJCYWNrU2VjdGlvbi1jbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgIOKor1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7IWFjdGl2ZSAmJiAoXG4gICAgICAgIDxoMT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uT3Blbn0+e3RpdGxlfTwvYnV0dG9uPlxuICAgICAgICA8L2gxPlxuICAgICAgKX1cbiAgICAgIHthY3RpdmUgJiYgPGRpdiBjbGFzc05hbWU9XCJCYWNrU2VjdGlvbi1jaGlsZHJlblwiPntjaGlsZHJlbn08L2Rpdj59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/back-section.js\n");

/***/ })

})