webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/back-section.js":
/*!*****************************!*\
  !*** ./src/back-section.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BackSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _character_count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-count */ \"./src/character-count.js\");\nvar _jsxFileName = \"/Users/chris/repos/chrisbolin.github.io/src/back-section.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar TRANSITION_MS = 500;\nfunction BackSection(_ref) {\n  _s();\n\n  var title = _ref.title,\n      children = _ref.children,\n      onOpen = _ref.onOpen,\n      onClose = _ref.onClose,\n      active = _ref.active,\n      index = _ref.index;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      transitioning = _useState[0],\n      setTransitioning = _useState[1];\n\n  var transformOrigin = \"\".concat(index < 2 ? \"top\" : \"bottom\", \" \").concat(index % 2 === 0 ? \"left\" : \"right\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setTransitioning(true);\n    setTimeout(function () {\n      return setTransitioning(false);\n    }, TRANSITION_MS);\n  }, [active]);\n  var characters = Object(_character_count__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(children);\n  var fontSizeVW = Math.sqrt(characters * document.body.clientHeight * document.body.clientWidth) / 500;\n  var style = {\n    transformOrigin: transformOrigin,\n    transitionDuration: \"\".concat(TRANSITION_MS, \"ms\"),\n    fontSize: \"\".concat(fontSizeVW, \"vw\")\n  };\n  return __jsx(\"div\", {\n    style: style,\n    className: \"BackSection \".concat(active && \"active\", \" \").concat(transitioning && \"transitioning\"),\n    onClick: onOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, active && __jsx(\"button\", {\n    className: \"BackSection-close\",\n    onClick: onClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, \"\\u2A2F\"), !active && __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: onOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, title)), active && __jsx(\"div\", {\n    className: \"BackSection-children\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 18\n    }\n  }, children));\n}\n\n_s(BackSection, \"n6ni0V3cOBBq7hRVhjgfxeqN3Mc=\");\n\n_c = BackSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"BackSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFjay1zZWN0aW9uLmpzP2IxOTQiXSwibmFtZXMiOlsiVFJBTlNJVElPTl9NUyIsIkJhY2tTZWN0aW9uIiwidGl0bGUiLCJjaGlsZHJlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJhY3RpdmUiLCJpbmRleCIsInVzZVN0YXRlIiwidHJhbnNpdGlvbmluZyIsInNldFRyYW5zaXRpb25pbmciLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiY2hhcmFjdGVycyIsImNoYXJhY3RlckNvdW50IiwiZm9udFNpemVWVyIsIk1hdGgiLCJzcXJ0IiwiZG9jdW1lbnQiLCJib2R5IiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJzdHlsZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxHQUF0QjtBQUVlLFNBQVNDLFdBQVQsT0FPWjtBQUFBOztBQUFBLE1BTkRDLEtBTUMsUUFOREEsS0FNQztBQUFBLE1BTERDLFFBS0MsUUFMREEsUUFLQztBQUFBLE1BSkRDLE1BSUMsUUFKREEsTUFJQztBQUFBLE1BSERDLE9BR0MsUUFIREEsT0FHQztBQUFBLE1BRkRDLE1BRUMsUUFGREEsTUFFQztBQUFBLE1BRERDLEtBQ0MsUUFEREEsS0FDQzs7QUFBQSxrQkFDeUNDLHNEQUFRLENBQUMsS0FBRCxDQURqRDtBQUFBLE1BQ01DLGFBRE47QUFBQSxNQUNxQkMsZ0JBRHJCOztBQUVELE1BQU1DLGVBQWUsYUFBTUosS0FBSyxHQUFHLENBQVIsR0FBWSxLQUFaLEdBQW9CLFFBQTFCLGNBQ25CQSxLQUFLLEdBQUcsQ0FBUixLQUFjLENBQWQsR0FBa0IsTUFBbEIsR0FBMkIsT0FEUixDQUFyQjtBQUdBSyx5REFBUyxDQUFDLFlBQU07QUFDZEYsb0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNBRyxjQUFVLENBQUM7QUFBQSxhQUFNSCxnQkFBZ0IsQ0FBQyxLQUFELENBQXRCO0FBQUEsS0FBRCxFQUFnQ1YsYUFBaEMsQ0FBVjtBQUNELEdBSFEsRUFHTixDQUFDTSxNQUFELENBSE0sQ0FBVDtBQUtBLE1BQU1RLFVBQVUsR0FBR0MsZ0VBQWMsQ0FBQ1osUUFBRCxDQUFqQztBQUNBLE1BQU1hLFVBQVUsR0FDZEMsSUFBSSxDQUFDQyxJQUFMLENBQ0VKLFVBQVUsR0FBR0ssUUFBUSxDQUFDQyxJQUFULENBQWNDLFlBQTNCLEdBQTBDRixRQUFRLENBQUNDLElBQVQsQ0FBY0UsV0FEMUQsSUFFSSxHQUhOO0FBS0EsTUFBTUMsS0FBSyxHQUFHO0FBQ1paLG1CQUFlLEVBQWZBLGVBRFk7QUFFWmEsc0JBQWtCLFlBQUt4QixhQUFMLE9BRk47QUFHWnlCLFlBQVEsWUFBS1QsVUFBTDtBQUhJLEdBQWQ7QUFNQSxTQUNFO0FBQ0UsU0FBSyxFQUFFTyxLQURUO0FBRUUsYUFBUyx3QkFBaUJqQixNQUFNLElBQUksUUFBM0IsY0FDUEcsYUFBYSxJQUFJLGVBRFYsQ0FGWDtBQUtFLFdBQU8sRUFBRUwsTUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dFLE1BQU0sSUFDTDtBQUFRLGFBQVMsRUFBQyxtQkFBbEI7QUFBc0MsV0FBTyxFQUFFRCxPQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosRUFZRyxDQUFDQyxNQUFELElBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFRixNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCRixLQUExQixDQURGLENBYkosRUFpQkdJLE1BQU0sSUFBSTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDSCxRQUF2QyxDQWpCYixDQURGO0FBcUJEOztHQWxEdUJGLFc7O0tBQUFBLFciLCJmaWxlIjoiLi9zcmMvYmFjay1zZWN0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNoYXJhY3RlckNvdW50IGZyb20gXCIuL2NoYXJhY3Rlci1jb3VudFwiO1xuXG5jb25zdCBUUkFOU0lUSU9OX01TID0gNTAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWNrU2VjdGlvbih7XG4gIHRpdGxlLFxuICBjaGlsZHJlbixcbiAgb25PcGVuLFxuICBvbkNsb3NlLFxuICBhY3RpdmUsXG4gIGluZGV4LFxufSkge1xuICBjb25zdCBbdHJhbnNpdGlvbmluZywgc2V0VHJhbnNpdGlvbmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpbiA9IGAke2luZGV4IDwgMiA/IFwidG9wXCIgOiBcImJvdHRvbVwifSAke1xuICAgIGluZGV4ICUgMiA9PT0gMCA/IFwibGVmdFwiIDogXCJyaWdodFwiXG4gIH1gO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRyYW5zaXRpb25pbmcodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRUcmFuc2l0aW9uaW5nKGZhbHNlKSwgVFJBTlNJVElPTl9NUyk7XG4gIH0sIFthY3RpdmVdKTtcblxuICBjb25zdCBjaGFyYWN0ZXJzID0gY2hhcmFjdGVyQ291bnQoY2hpbGRyZW4pO1xuICBjb25zdCBmb250U2l6ZVZXID1cbiAgICBNYXRoLnNxcnQoXG4gICAgICBjaGFyYWN0ZXJzICogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgKiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoXG4gICAgKSAvIDUwMDtcblxuICBjb25zdCBzdHlsZSA9IHtcbiAgICB0cmFuc2Zvcm1PcmlnaW4sXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHtUUkFOU0lUSU9OX01TfW1zYCxcbiAgICBmb250U2l6ZTogYCR7Zm9udFNpemVWV312d2AsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBjbGFzc05hbWU9e2BCYWNrU2VjdGlvbiAke2FjdGl2ZSAmJiBcImFjdGl2ZVwifSAke1xuICAgICAgICB0cmFuc2l0aW9uaW5nICYmIFwidHJhbnNpdGlvbmluZ1wiXG4gICAgICB9YH1cbiAgICAgIG9uQ2xpY2s9e29uT3Blbn1cbiAgICA+XG4gICAgICB7YWN0aXZlICYmIChcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJCYWNrU2VjdGlvbi1jbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuICAgICAgICAgIOKor1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7IWFjdGl2ZSAmJiAoXG4gICAgICAgIDxoMT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uT3Blbn0+e3RpdGxlfTwvYnV0dG9uPlxuICAgICAgICA8L2gxPlxuICAgICAgKX1cbiAgICAgIHthY3RpdmUgJiYgPGRpdiBjbGFzc05hbWU9XCJCYWNrU2VjdGlvbi1jaGlsZHJlblwiPntjaGlsZHJlbn08L2Rpdj59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/back-section.js\n");

/***/ })

})