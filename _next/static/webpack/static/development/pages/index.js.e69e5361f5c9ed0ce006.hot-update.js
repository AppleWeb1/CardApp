webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/back-section.js":
/*!*****************************!*\
  !*** ./src/back-section.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BackSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _character_count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-count */ \"./src/character-count.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nvar _jsxFileName = \"/Users/chris/repos/chrisbolin.github.io/src/back-section.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar TRANSITION_MS = 500;\nvar windowFallback = {\n  innerHeight: 100,\n  innerWidth: 100\n};\n\nfunction getWindow() {\n  return true ? window : undefined;\n}\n\nfunction BackSection(_ref) {\n  _s();\n\n  var title = _ref.title,\n      children = _ref.children,\n      onOpen = _ref.onOpen,\n      onClose = _ref.onClose,\n      active = _ref.active,\n      index = _ref.index;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      transitioning = _useState[0],\n      setTransitioning = _useState[1];\n\n  var transformOrigin = \"\".concat(index < 2 ? \"top\" : \"bottom\", \" \").concat(index % 2 === 0 ? \"left\" : \"right\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setTransitioning(true);\n    setTimeout(function () {\n      return setTransitioning(false);\n    }, TRANSITION_MS);\n  }, [active]);\n  var characters = Object(_character_count__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(children);\n  var fontSize = 0.5 * Math.sqrt(getWindow().innerHeight * getWindow().innerWidth / characters);\n  var style = {\n    transformOrigin: transformOrigin,\n    transitionDuration: \"\".concat(TRANSITION_MS, \"ms\")\n  };\n  var h1ScaleY = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"limit\"])(3.1 * getWindow().innerHeight / getWindow().innerWidth, 0, 3);\n  var childrenStyle = {\n    fontSize: fontSize\n  };\n  var h1Style = {\n    transform: \"scaleY(\".concat(h1ScaleY, \") skewX(3deg)\")\n  };\n  return __jsx(\"div\", {\n    style: style,\n    className: \"BackSection \".concat(active && \"active\", \" \").concat(transitioning && \"transitioning\"),\n    onClick: onOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, active && __jsx(\"button\", {\n    className: \"BackSection-close\",\n    onClick: onClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, \"\\u2A2F\"), !active && __jsx(\"h1\", {\n    style: h1Style,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: onOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, title)), active && __jsx(\"div\", {\n    className: \"BackSection-children\",\n    style: {\n      fontSize: fontSize\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, children));\n}\n\n_s(BackSection, \"n6ni0V3cOBBq7hRVhjgfxeqN3Mc=\");\n\n_c = BackSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"BackSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFjay1zZWN0aW9uLmpzP2IxOTQiXSwibmFtZXMiOlsiVFJBTlNJVElPTl9NUyIsIndpbmRvd0ZhbGxiYWNrIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiZ2V0V2luZG93Iiwid2luZG93IiwiQmFja1NlY3Rpb24iLCJ0aXRsZSIsImNoaWxkcmVuIiwib25PcGVuIiwib25DbG9zZSIsImFjdGl2ZSIsImluZGV4IiwidXNlU3RhdGUiLCJ0cmFuc2l0aW9uaW5nIiwic2V0VHJhbnNpdGlvbmluZyIsInRyYW5zZm9ybU9yaWdpbiIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyQ291bnQiLCJmb250U2l6ZSIsIk1hdGgiLCJzcXJ0Iiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoMVNjYWxlWSIsImxpbWl0IiwiY2hpbGRyZW5TdHlsZSIsImgxU3R5bGUiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLEdBQXRCO0FBRUEsSUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxhQUFXLEVBQUUsR0FEUTtBQUVyQkMsWUFBVSxFQUFFO0FBRlMsQ0FBdkI7O0FBS0EsU0FBU0MsU0FBVCxHQUFxQjtBQUNuQixTQUFPLE9BQWdDQyxNQUFoQyxHQUF5Q0osU0FBaEQ7QUFDRDs7QUFFYyxTQUFTSyxXQUFULE9BT1o7QUFBQTs7QUFBQSxNQU5EQyxLQU1DLFFBTkRBLEtBTUM7QUFBQSxNQUxEQyxRQUtDLFFBTERBLFFBS0M7QUFBQSxNQUpEQyxNQUlDLFFBSkRBLE1BSUM7QUFBQSxNQUhEQyxPQUdDLFFBSERBLE9BR0M7QUFBQSxNQUZEQyxNQUVDLFFBRkRBLE1BRUM7QUFBQSxNQUREQyxLQUNDLFFBRERBLEtBQ0M7O0FBQUEsa0JBQ3lDQyxzREFBUSxDQUFDLEtBQUQsQ0FEakQ7QUFBQSxNQUNNQyxhQUROO0FBQUEsTUFDcUJDLGdCQURyQjs7QUFFRCxNQUFNQyxlQUFlLGFBQU1KLEtBQUssR0FBRyxDQUFSLEdBQVksS0FBWixHQUFvQixRQUExQixjQUNuQkEsS0FBSyxHQUFHLENBQVIsS0FBYyxDQUFkLEdBQWtCLE1BQWxCLEdBQTJCLE9BRFIsQ0FBckI7QUFHQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2RGLG9CQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQUcsY0FBVSxDQUFDO0FBQUEsYUFBTUgsZ0JBQWdCLENBQUMsS0FBRCxDQUF0QjtBQUFBLEtBQUQsRUFBZ0NmLGFBQWhDLENBQVY7QUFDRCxHQUhRLEVBR04sQ0FBQ1csTUFBRCxDQUhNLENBQVQ7QUFLQSxNQUFNUSxVQUFVLEdBQUdDLGdFQUFjLENBQUNaLFFBQUQsQ0FBakM7QUFDQSxNQUFNYSxRQUFRLEdBQ1osTUFDQUMsSUFBSSxDQUFDQyxJQUFMLENBQVduQixTQUFTLEdBQUdGLFdBQVosR0FBMEJFLFNBQVMsR0FBR0QsVUFBdkMsR0FBcURnQixVQUEvRCxDQUZGO0FBR0EsTUFBTUssS0FBSyxHQUFHO0FBQ1pSLG1CQUFlLEVBQWZBLGVBRFk7QUFFWlMsc0JBQWtCLFlBQUt6QixhQUFMO0FBRk4sR0FBZDtBQUtBLE1BQU0wQixRQUFRLEdBQUdDLG9EQUFLLENBQ25CLE1BQU12QixTQUFTLEdBQUdGLFdBQW5CLEdBQWtDRSxTQUFTLEdBQUdELFVBRDFCLEVBRXBCLENBRm9CLEVBR3BCLENBSG9CLENBQXRCO0FBTUEsTUFBTXlCLGFBQWEsR0FBRztBQUFFUCxZQUFRLEVBQVJBO0FBQUYsR0FBdEI7QUFDQSxNQUFNUSxPQUFPLEdBQUc7QUFBRUMsYUFBUyxtQkFBWUosUUFBWjtBQUFYLEdBQWhCO0FBRUEsU0FDRTtBQUNFLFNBQUssRUFBRUYsS0FEVDtBQUVFLGFBQVMsd0JBQWlCYixNQUFNLElBQUksUUFBM0IsY0FDUEcsYUFBYSxJQUFJLGVBRFYsQ0FGWDtBQUtFLFdBQU8sRUFBRUwsTUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dFLE1BQU0sSUFDTDtBQUFRLGFBQVMsRUFBQyxtQkFBbEI7QUFBc0MsV0FBTyxFQUFFRCxPQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosRUFZRyxDQUFDQyxNQUFELElBQ0M7QUFBSSxTQUFLLEVBQUVrQixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRXBCLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEJGLEtBQTFCLENBREYsQ0FiSixFQWlCR0ksTUFBTSxJQUNMO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQXNDLFNBQUssRUFBRTtBQUFFVSxjQUFRLEVBQVJBO0FBQUYsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHYixRQURILENBbEJKLENBREY7QUF5QkQ7O0dBNUR1QkYsVzs7S0FBQUEsVyIsImZpbGUiOiIuL3NyYy9iYWNrLXNlY3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2hhcmFjdGVyQ291bnQgZnJvbSBcIi4vY2hhcmFjdGVyLWNvdW50XCI7XG5pbXBvcnQgeyBsaW1pdFVuaXQsIGxpbWl0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgVFJBTlNJVElPTl9NUyA9IDUwMDtcblxuY29uc3Qgd2luZG93RmFsbGJhY2sgPSB7XG4gIGlubmVySGVpZ2h0OiAxMDAsXG4gIGlubmVyV2lkdGg6IDEwMCxcbn07XG5cbmZ1bmN0aW9uIGdldFdpbmRvdygpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB3aW5kb3dGYWxsYmFjaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFja1NlY3Rpb24oe1xuICB0aXRsZSxcbiAgY2hpbGRyZW4sXG4gIG9uT3BlbixcbiAgb25DbG9zZSxcbiAgYWN0aXZlLFxuICBpbmRleCxcbn0pIHtcbiAgY29uc3QgW3RyYW5zaXRpb25pbmcsIHNldFRyYW5zaXRpb25pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSBgJHtpbmRleCA8IDIgPyBcInRvcFwiIDogXCJib3R0b21cIn0gJHtcbiAgICBpbmRleCAlIDIgPT09IDAgPyBcImxlZnRcIiA6IFwicmlnaHRcIlxuICB9YDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUcmFuc2l0aW9uaW5nKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0VHJhbnNpdGlvbmluZyhmYWxzZSksIFRSQU5TSVRJT05fTVMpO1xuICB9LCBbYWN0aXZlXSk7XG5cbiAgY29uc3QgY2hhcmFjdGVycyA9IGNoYXJhY3RlckNvdW50KGNoaWxkcmVuKTtcbiAgY29uc3QgZm9udFNpemUgPVxuICAgIDAuNSAqXG4gICAgTWF0aC5zcXJ0KChnZXRXaW5kb3coKS5pbm5lckhlaWdodCAqIGdldFdpbmRvdygpLmlubmVyV2lkdGgpIC8gY2hhcmFjdGVycyk7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHRyYW5zZm9ybU9yaWdpbixcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAke1RSQU5TSVRJT05fTVN9bXNgLFxuICB9O1xuXG4gIGNvbnN0IGgxU2NhbGVZID0gbGltaXQoXG4gICAgKDMuMSAqIGdldFdpbmRvdygpLmlubmVySGVpZ2h0KSAvIGdldFdpbmRvdygpLmlubmVyV2lkdGgsXG4gICAgMCxcbiAgICAzXG4gICk7XG5cbiAgY29uc3QgY2hpbGRyZW5TdHlsZSA9IHsgZm9udFNpemUgfTtcbiAgY29uc3QgaDFTdHlsZSA9IHsgdHJhbnNmb3JtOiBgc2NhbGVZKCR7aDFTY2FsZVl9KSBza2V3WCgzZGVnKWAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17YEJhY2tTZWN0aW9uICR7YWN0aXZlICYmIFwiYWN0aXZlXCJ9ICR7XG4gICAgICAgIHRyYW5zaXRpb25pbmcgJiYgXCJ0cmFuc2l0aW9uaW5nXCJcbiAgICAgIH1gfVxuICAgICAgb25DbGljaz17b25PcGVufVxuICAgID5cbiAgICAgIHthY3RpdmUgJiYgKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkJhY2tTZWN0aW9uLWNsb3NlXCIgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAg4qivXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICAgIHshYWN0aXZlICYmIChcbiAgICAgICAgPGgxIHN0eWxlPXtoMVN0eWxlfT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uT3Blbn0+e3RpdGxlfTwvYnV0dG9uPlxuICAgICAgICA8L2gxPlxuICAgICAgKX1cbiAgICAgIHthY3RpdmUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhY2tTZWN0aW9uLWNoaWxkcmVuXCIgc3R5bGU9e3sgZm9udFNpemUgfX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/back-section.js\n");

/***/ })

})