webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/back-section.js":
/*!*****************************!*\
  !*** ./src/back-section.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BackSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _character_count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-count */ \"./src/character-count.js\");\nvar _jsxFileName = \"/Users/chris/repos/chrisbolin.github.io/src/back-section.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar TRANSITION_MS = 500;\nvar windowFallback = {\n  innerHeight: 100,\n  innerWidth: 100\n};\n\nfunction window() {\n  return true ? window : undefined;\n}\n\nfunction BackSection(_ref) {\n  _s();\n\n  var title = _ref.title,\n      children = _ref.children,\n      onOpen = _ref.onOpen,\n      onClose = _ref.onClose,\n      active = _ref.active,\n      index = _ref.index;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      transitioning = _useState[0],\n      setTransitioning = _useState[1];\n\n  var transformOrigin = \"\".concat(index < 2 ? \"top\" : \"bottom\", \" \").concat(index % 2 === 0 ? \"left\" : \"right\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setTransitioning(true);\n    setTimeout(function () {\n      return setTransitioning(false);\n    }, TRANSITION_MS);\n  }, [active]);\n  var characters = Object(_character_count__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(children);\n  var fontSize = 0.5 * Math.sqrt(window().innerHeight * window().innerWidth / characters);\n  var style = {\n    transformOrigin: transformOrigin,\n    transitionDuration: \"\".concat(TRANSITION_MS, \"ms\")\n  };\n  var childrenStyle = {\n    fontSize: fontSize\n  };\n  return __jsx(\"div\", {\n    style: style,\n    className: \"BackSection \".concat(active && \"active\", \" \").concat(transitioning && \"transitioning\"),\n    onClick: onOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, active && __jsx(\"button\", {\n    className: \"BackSection-close\",\n    onClick: onClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, \"\\u2A2F\"), !active && __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: onOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 11\n    }\n  }, title)), active && __jsx(\"div\", {\n    className: \"BackSection-children\",\n    style: {\n      fontSize: fontSize\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, children));\n}\n\n_s(BackSection, \"n6ni0V3cOBBq7hRVhjgfxeqN3Mc=\");\n\n_c = BackSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"BackSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFjay1zZWN0aW9uLmpzP2IxOTQiXSwibmFtZXMiOlsiVFJBTlNJVElPTl9NUyIsIndpbmRvd0ZhbGxiYWNrIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwid2luZG93IiwiQmFja1NlY3Rpb24iLCJ0aXRsZSIsImNoaWxkcmVuIiwib25PcGVuIiwib25DbG9zZSIsImFjdGl2ZSIsImluZGV4IiwidXNlU3RhdGUiLCJ0cmFuc2l0aW9uaW5nIiwic2V0VHJhbnNpdGlvbmluZyIsInRyYW5zZm9ybU9yaWdpbiIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyQ291bnQiLCJmb250U2l6ZSIsIk1hdGgiLCJzcXJ0Iiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJjaGlsZHJlblN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxHQUF0QjtBQUVBLElBQU1DLGNBQWMsR0FBRztBQUNyQkMsYUFBVyxFQUFFLEdBRFE7QUFFckJDLFlBQVUsRUFBRTtBQUZTLENBQXZCOztBQUtBLFNBQVNDLE1BQVQsR0FBa0I7QUFDaEIsU0FBTyxPQUFnQ0EsTUFBaEMsR0FBeUNILFNBQWhEO0FBQ0Q7O0FBRWMsU0FBU0ksV0FBVCxPQU9aO0FBQUE7O0FBQUEsTUFOREMsS0FNQyxRQU5EQSxLQU1DO0FBQUEsTUFMREMsUUFLQyxRQUxEQSxRQUtDO0FBQUEsTUFKREMsTUFJQyxRQUpEQSxNQUlDO0FBQUEsTUFIREMsT0FHQyxRQUhEQSxPQUdDO0FBQUEsTUFGREMsTUFFQyxRQUZEQSxNQUVDO0FBQUEsTUFEREMsS0FDQyxRQUREQSxLQUNDOztBQUFBLGtCQUN5Q0Msc0RBQVEsQ0FBQyxLQUFELENBRGpEO0FBQUEsTUFDTUMsYUFETjtBQUFBLE1BQ3FCQyxnQkFEckI7O0FBRUQsTUFBTUMsZUFBZSxhQUFNSixLQUFLLEdBQUcsQ0FBUixHQUFZLEtBQVosR0FBb0IsUUFBMUIsY0FDbkJBLEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FBZCxHQUFrQixNQUFsQixHQUEyQixPQURSLENBQXJCO0FBR0FLLHlEQUFTLENBQUMsWUFBTTtBQUNkRixvQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0FHLGNBQVUsQ0FBQztBQUFBLGFBQU1ILGdCQUFnQixDQUFDLEtBQUQsQ0FBdEI7QUFBQSxLQUFELEVBQWdDZCxhQUFoQyxDQUFWO0FBQ0QsR0FIUSxFQUdOLENBQUNVLE1BQUQsQ0FITSxDQUFUO0FBS0EsTUFBTVEsVUFBVSxHQUFHQyxnRUFBYyxDQUFDWixRQUFELENBQWpDO0FBQ0EsTUFBTWEsUUFBUSxHQUNaLE1BQU1DLElBQUksQ0FBQ0MsSUFBTCxDQUFXbEIsTUFBTSxHQUFHRixXQUFULEdBQXVCRSxNQUFNLEdBQUdELFVBQWpDLEdBQStDZSxVQUF6RCxDQURSO0FBR0EsTUFBTUssS0FBSyxHQUFHO0FBQ1pSLG1CQUFlLEVBQWZBLGVBRFk7QUFFWlMsc0JBQWtCLFlBQUt4QixhQUFMO0FBRk4sR0FBZDtBQUtBLE1BQU15QixhQUFhLEdBQUc7QUFBRUwsWUFBUSxFQUFSQTtBQUFGLEdBQXRCO0FBRUEsU0FDRTtBQUNFLFNBQUssRUFBRUcsS0FEVDtBQUVFLGFBQVMsd0JBQWlCYixNQUFNLElBQUksUUFBM0IsY0FDUEcsYUFBYSxJQUFJLGVBRFYsQ0FGWDtBQUtFLFdBQU8sRUFBRUwsTUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dFLE1BQU0sSUFDTDtBQUFRLGFBQVMsRUFBQyxtQkFBbEI7QUFBc0MsV0FBTyxFQUFFRCxPQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosRUFZRyxDQUFDQyxNQUFELElBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFRixNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCRixLQUExQixDQURGLENBYkosRUFpQkdJLE1BQU0sSUFDTDtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFzQyxTQUFLLEVBQUU7QUFBRVUsY0FBUSxFQUFSQTtBQUFGLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2IsUUFESCxDQWxCSixDQURGO0FBeUJEOztHQXJEdUJGLFc7O0tBQUFBLFciLCJmaWxlIjoiLi9zcmMvYmFjay1zZWN0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNoYXJhY3RlckNvdW50IGZyb20gXCIuL2NoYXJhY3Rlci1jb3VudFwiO1xuXG5jb25zdCBUUkFOU0lUSU9OX01TID0gNTAwO1xuXG5jb25zdCB3aW5kb3dGYWxsYmFjayA9IHtcbiAgaW5uZXJIZWlnaHQ6IDEwMCxcbiAgaW5uZXJXaWR0aDogMTAwLFxufTtcblxuZnVuY3Rpb24gd2luZG93KCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHdpbmRvd0ZhbGxiYWNrO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWNrU2VjdGlvbih7XG4gIHRpdGxlLFxuICBjaGlsZHJlbixcbiAgb25PcGVuLFxuICBvbkNsb3NlLFxuICBhY3RpdmUsXG4gIGluZGV4LFxufSkge1xuICBjb25zdCBbdHJhbnNpdGlvbmluZywgc2V0VHJhbnNpdGlvbmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpbiA9IGAke2luZGV4IDwgMiA/IFwidG9wXCIgOiBcImJvdHRvbVwifSAke1xuICAgIGluZGV4ICUgMiA9PT0gMCA/IFwibGVmdFwiIDogXCJyaWdodFwiXG4gIH1gO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRyYW5zaXRpb25pbmcodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRUcmFuc2l0aW9uaW5nKGZhbHNlKSwgVFJBTlNJVElPTl9NUyk7XG4gIH0sIFthY3RpdmVdKTtcblxuICBjb25zdCBjaGFyYWN0ZXJzID0gY2hhcmFjdGVyQ291bnQoY2hpbGRyZW4pO1xuICBjb25zdCBmb250U2l6ZSA9XG4gICAgMC41ICogTWF0aC5zcXJ0KCh3aW5kb3coKS5pbm5lckhlaWdodCAqIHdpbmRvdygpLmlubmVyV2lkdGgpIC8gY2hhcmFjdGVycyk7XG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgdHJhbnNmb3JtT3JpZ2luLFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7VFJBTlNJVElPTl9NU31tc2AsXG4gIH07XG5cbiAgY29uc3QgY2hpbGRyZW5TdHlsZSA9IHsgZm9udFNpemUgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17YEJhY2tTZWN0aW9uICR7YWN0aXZlICYmIFwiYWN0aXZlXCJ9ICR7XG4gICAgICAgIHRyYW5zaXRpb25pbmcgJiYgXCJ0cmFuc2l0aW9uaW5nXCJcbiAgICAgIH1gfVxuICAgICAgb25DbGljaz17b25PcGVufVxuICAgID5cbiAgICAgIHthY3RpdmUgJiYgKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkJhY2tTZWN0aW9uLWNsb3NlXCIgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAg4qivXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICAgIHshYWN0aXZlICYmIChcbiAgICAgICAgPGgxPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25PcGVufT57dGl0bGV9PC9idXR0b24+XG4gICAgICAgIDwvaDE+XG4gICAgICApfVxuICAgICAge2FjdGl2ZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQmFja1NlY3Rpb24tY2hpbGRyZW5cIiBzdHlsZT17eyBmb250U2l6ZSB9fT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/back-section.js\n");

/***/ })

})