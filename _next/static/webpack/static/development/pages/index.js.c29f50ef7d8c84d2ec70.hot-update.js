webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/back-section.js":
/*!*****************************!*\
  !*** ./src/back-section.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BackSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _character_count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-count */ \"./src/character-count.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nvar _jsxFileName = \"/Users/chris/repos/chrisbolin.github.io/src/back-section.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar TRANSITION_MS = 500;\nvar windowFallback = {\n  innerHeight: 100,\n  innerWidth: 100\n};\n\nfunction getWindow() {\n  return true ? window : undefined;\n}\n\nfunction BackSection(_ref) {\n  _s();\n\n  var title = _ref.title,\n      children = _ref.children,\n      onOpen = _ref.onOpen,\n      onClose = _ref.onClose,\n      active = _ref.active,\n      index = _ref.index;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      transitioning = _useState[0],\n      setTransitioning = _useState[1];\n\n  var transformOrigin = \"\".concat(index < 2 ? \"top\" : \"bottom\", \" \").concat(index % 2 === 0 ? \"left\" : \"right\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setTransitioning(true);\n    setTimeout(function () {\n      return setTransitioning(false);\n    }, TRANSITION_MS);\n  }, [active]);\n  var characters = Object(_character_count__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(children);\n  var fontSize = 0.5 * Math.sqrt(getWindow().innerHeight * getWindow().innerWidth / characters);\n  var style = {\n    transformOrigin: transformOrigin,\n    transitionDuration: \"\".concat(TRANSITION_MS, \"ms\")\n  };\n  var h1ScaleY = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"limit\"])(2.9 * getWindow().innerHeight / getWindow().innerWidth, 0, 3);\n  var childrenStyle = {\n    fontSize: fontSize\n  };\n  var h1Style = {\n    transform: \"scaleY(\".concat(h1ScaleY, \") skewX(3deg)\")\n  };\n  return __jsx(\"div\", {\n    style: style,\n    className: \"BackSection \".concat(active && \"active\", \" \").concat(transitioning && \"transitioning\"),\n    onClick: onOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, active && __jsx(\"button\", {\n    className: \"BackSection-close\",\n    onClick: onClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, \"\\u2A2F\"), !active && __jsx(\"h1\", {\n    style: h1Style,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: onOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, title)), active && __jsx(\"div\", {\n    className: \"BackSection-children\",\n    style: {\n      fontSize: fontSize\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(\"b\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, title, \":\"), \" \", children));\n}\n\n_s(BackSection, \"n6ni0V3cOBBq7hRVhjgfxeqN3Mc=\");\n\n_c = BackSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"BackSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFjay1zZWN0aW9uLmpzP2IxOTQiXSwibmFtZXMiOlsiVFJBTlNJVElPTl9NUyIsIndpbmRvd0ZhbGxiYWNrIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiZ2V0V2luZG93Iiwid2luZG93IiwiQmFja1NlY3Rpb24iLCJ0aXRsZSIsImNoaWxkcmVuIiwib25PcGVuIiwib25DbG9zZSIsImFjdGl2ZSIsImluZGV4IiwidXNlU3RhdGUiLCJ0cmFuc2l0aW9uaW5nIiwic2V0VHJhbnNpdGlvbmluZyIsInRyYW5zZm9ybU9yaWdpbiIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyQ291bnQiLCJmb250U2l6ZSIsIk1hdGgiLCJzcXJ0Iiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoMVNjYWxlWSIsImxpbWl0IiwiY2hpbGRyZW5TdHlsZSIsImgxU3R5bGUiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLEdBQXRCO0FBRUEsSUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxhQUFXLEVBQUUsR0FEUTtBQUVyQkMsWUFBVSxFQUFFO0FBRlMsQ0FBdkI7O0FBS0EsU0FBU0MsU0FBVCxHQUFxQjtBQUNuQixTQUFPLE9BQWdDQyxNQUFoQyxHQUF5Q0osU0FBaEQ7QUFDRDs7QUFFYyxTQUFTSyxXQUFULE9BT1o7QUFBQTs7QUFBQSxNQU5EQyxLQU1DLFFBTkRBLEtBTUM7QUFBQSxNQUxEQyxRQUtDLFFBTERBLFFBS0M7QUFBQSxNQUpEQyxNQUlDLFFBSkRBLE1BSUM7QUFBQSxNQUhEQyxPQUdDLFFBSERBLE9BR0M7QUFBQSxNQUZEQyxNQUVDLFFBRkRBLE1BRUM7QUFBQSxNQUREQyxLQUNDLFFBRERBLEtBQ0M7O0FBQUEsa0JBQ3lDQyxzREFBUSxDQUFDLEtBQUQsQ0FEakQ7QUFBQSxNQUNNQyxhQUROO0FBQUEsTUFDcUJDLGdCQURyQjs7QUFFRCxNQUFNQyxlQUFlLGFBQU1KLEtBQUssR0FBRyxDQUFSLEdBQVksS0FBWixHQUFvQixRQUExQixjQUNuQkEsS0FBSyxHQUFHLENBQVIsS0FBYyxDQUFkLEdBQWtCLE1BQWxCLEdBQTJCLE9BRFIsQ0FBckI7QUFHQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2RGLG9CQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDQUcsY0FBVSxDQUFDO0FBQUEsYUFBTUgsZ0JBQWdCLENBQUMsS0FBRCxDQUF0QjtBQUFBLEtBQUQsRUFBZ0NmLGFBQWhDLENBQVY7QUFDRCxHQUhRLEVBR04sQ0FBQ1csTUFBRCxDQUhNLENBQVQ7QUFLQSxNQUFNUSxVQUFVLEdBQUdDLGdFQUFjLENBQUNaLFFBQUQsQ0FBakM7QUFDQSxNQUFNYSxRQUFRLEdBQ1osTUFDQUMsSUFBSSxDQUFDQyxJQUFMLENBQVduQixTQUFTLEdBQUdGLFdBQVosR0FBMEJFLFNBQVMsR0FBR0QsVUFBdkMsR0FBcURnQixVQUEvRCxDQUZGO0FBR0EsTUFBTUssS0FBSyxHQUFHO0FBQ1pSLG1CQUFlLEVBQWZBLGVBRFk7QUFFWlMsc0JBQWtCLFlBQUt6QixhQUFMO0FBRk4sR0FBZDtBQUtBLE1BQU0wQixRQUFRLEdBQUdDLG9EQUFLLENBQ25CLE1BQU12QixTQUFTLEdBQUdGLFdBQW5CLEdBQWtDRSxTQUFTLEdBQUdELFVBRDFCLEVBRXBCLENBRm9CLEVBR3BCLENBSG9CLENBQXRCO0FBTUEsTUFBTXlCLGFBQWEsR0FBRztBQUFFUCxZQUFRLEVBQVJBO0FBQUYsR0FBdEI7QUFDQSxNQUFNUSxPQUFPLEdBQUc7QUFBRUMsYUFBUyxtQkFBWUosUUFBWjtBQUFYLEdBQWhCO0FBRUEsU0FDRTtBQUNFLFNBQUssRUFBRUYsS0FEVDtBQUVFLGFBQVMsd0JBQWlCYixNQUFNLElBQUksUUFBM0IsY0FDUEcsYUFBYSxJQUFJLGVBRFYsQ0FGWDtBQUtFLFdBQU8sRUFBRUwsTUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dFLE1BQU0sSUFDTDtBQUFRLGFBQVMsRUFBQyxtQkFBbEI7QUFBc0MsV0FBTyxFQUFFRCxPQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosRUFZRyxDQUFDQyxNQUFELElBQ0M7QUFBSSxTQUFLLEVBQUVrQixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRXBCLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEJGLEtBQTFCLENBREYsQ0FiSixFQWlCR0ksTUFBTSxJQUNMO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQXNDLFNBQUssRUFBRTtBQUFFVSxjQUFRLEVBQVJBO0FBQUYsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSWQsS0FBSixNQURGLE9BQ21CQyxRQURuQixDQWxCSixDQURGO0FBeUJEOztHQTVEdUJGLFc7O0tBQUFBLFciLCJmaWxlIjoiLi9zcmMvYmFjay1zZWN0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNoYXJhY3RlckNvdW50IGZyb20gXCIuL2NoYXJhY3Rlci1jb3VudFwiO1xuaW1wb3J0IHsgbGltaXRVbml0LCBsaW1pdCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IFRSQU5TSVRJT05fTVMgPSA1MDA7XG5cbmNvbnN0IHdpbmRvd0ZhbGxiYWNrID0ge1xuICBpbm5lckhlaWdodDogMTAwLFxuICBpbm5lcldpZHRoOiAxMDAsXG59O1xuXG5mdW5jdGlvbiBnZXRXaW5kb3coKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogd2luZG93RmFsbGJhY2s7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhY2tTZWN0aW9uKHtcbiAgdGl0bGUsXG4gIGNoaWxkcmVuLFxuICBvbk9wZW4sXG4gIG9uQ2xvc2UsXG4gIGFjdGl2ZSxcbiAgaW5kZXgsXG59KSB7XG4gIGNvbnN0IFt0cmFuc2l0aW9uaW5nLCBzZXRUcmFuc2l0aW9uaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdHJhbnNmb3JtT3JpZ2luID0gYCR7aW5kZXggPCAyID8gXCJ0b3BcIiA6IFwiYm90dG9tXCJ9ICR7XG4gICAgaW5kZXggJSAyID09PSAwID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCJcbiAgfWA7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VHJhbnNpdGlvbmluZyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldFRyYW5zaXRpb25pbmcoZmFsc2UpLCBUUkFOU0lUSU9OX01TKTtcbiAgfSwgW2FjdGl2ZV0pO1xuXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJDb3VudChjaGlsZHJlbik7XG4gIGNvbnN0IGZvbnRTaXplID1cbiAgICAwLjUgKlxuICAgIE1hdGguc3FydCgoZ2V0V2luZG93KCkuaW5uZXJIZWlnaHQgKiBnZXRXaW5kb3coKS5pbm5lcldpZHRoKSAvIGNoYXJhY3RlcnMpO1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICB0cmFuc2Zvcm1PcmlnaW4sXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHtUUkFOU0lUSU9OX01TfW1zYCxcbiAgfTtcblxuICBjb25zdCBoMVNjYWxlWSA9IGxpbWl0KFxuICAgICgyLjkgKiBnZXRXaW5kb3coKS5pbm5lckhlaWdodCkgLyBnZXRXaW5kb3coKS5pbm5lcldpZHRoLFxuICAgIDAsXG4gICAgM1xuICApO1xuXG4gIGNvbnN0IGNoaWxkcmVuU3R5bGUgPSB7IGZvbnRTaXplIH07XG4gIGNvbnN0IGgxU3R5bGUgPSB7IHRyYW5zZm9ybTogYHNjYWxlWSgke2gxU2NhbGVZfSkgc2tld1goM2RlZylgIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBjbGFzc05hbWU9e2BCYWNrU2VjdGlvbiAke2FjdGl2ZSAmJiBcImFjdGl2ZVwifSAke1xuICAgICAgICB0cmFuc2l0aW9uaW5nICYmIFwidHJhbnNpdGlvbmluZ1wiXG4gICAgICB9YH1cbiAgICAgIG9uQ2xpY2s9e29uT3Blbn1cbiAgICA+XG4gICAgICB7YWN0aXZlICYmIChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJCYWNrU2VjdGlvbi1jbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgIOKor1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7IWFjdGl2ZSAmJiAoXG4gICAgICAgIDxoMSBzdHlsZT17aDFTdHlsZX0+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbk9wZW59Pnt0aXRsZX08L2J1dHRvbj5cbiAgICAgICAgPC9oMT5cbiAgICAgICl9XG4gICAgICB7YWN0aXZlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCYWNrU2VjdGlvbi1jaGlsZHJlblwiIHN0eWxlPXt7IGZvbnRTaXplIH19PlxuICAgICAgICAgIDxiPnt0aXRsZX06PC9iPiB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/back-section.js\n");

/***/ })

})