webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/style.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./pages/style.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \":root {\\n  --color-a: #7830cf;\\n  --color-b: #ab32d9;\\n  --color-c: #c236c2;\\n  --color-d: #d93285;\\n  --color-e: #cf3030;\\n  --color-whitish: #f2f2f2;\\n  --color-blackish: #240f1f;\\n  --color-highlight: var(--color-d);\\n  --color-behind-curtain: var(--color-e);\\n}\\n\\nhtml {\\n  font-family: Helvetica Neue, Arial, sans-serif;\\n  background-color: var(--color-behind-curtain);\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: var(--color-whitish);\\n  overflow-x: hidden;\\n}\\n\\nbody ::-moz-selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-blackish);\\n}\\n\\nbody ::selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-blackish);\\n}\\n\\na,\\nbutton {\\n  cursor: pointer;\\n}\\n\\n.skip {\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n}\\n\\n.skip:focus {\\n  z-index: 2;\\n  font-size: 6vw;\\n  top: 0;\\n  transform: none;\\n}\\n\\n.app {\\n  background-color: var(--color-whitish);\\n}\\n\\n.container {\\n  position: fixed;\\n  width: 100%;\\n}\\n\\n.card-plane {\\n  position: absolute;\\n  width: 182px;\\n  height: 320px;\\n  margin: 50px calc(50vw - 91px);\\n}\\n\\n.card-face {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  background: var(--color-blackish);\\n}\\n\\n.front {\\n  background-color: var(--color-blackish);\\n  color: var(--color-whitish);\\n  font-style: italic;\\n  font-family: \\\"Baskerville\\\", \\\"Times New Roman\\\", \\\"Droid Serif\\\", \\\"Times\\\", serif;\\n}\\n\\n.title {\\n  font-size: 22px;\\n  padding: 17px 11px;\\n}\\n\\n.Opener {\\n  font-weight: 700;\\n}\\n\\nhr {\\n  border-style: solid;\\n  margin: 15px 0;\\n  color: inherit;\\n}\\n\\n.scroll {\\n  position: absolute;\\n  text-align: center;\\n  width: 100%;\\n  color: var(--color-blackish);\\n  bottom: -30px;\\n  font-size: 16px;\\n}\\n\\n.arrow {\\n  font-size: 24px;\\n  font-family: \\\"Times New Roman\\\", serif;\\n  position: fixed;\\n  text-align: center;\\n  width: 100%;\\n  top: 320px;\\n  pointer-events: none; /* allow clicking \\\"behind\\\" the arrow\\\" */\\n}\\n\\n.Back {\\n  color: var(--color-whitish);\\n  width: 100vw;\\n  height: 100vh;\\n  margin: 0;\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n}\\n\\n.BackSection {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  overflow: hidden;\\n  transition: all cubic-bezier(0, 0.99, 0.58, 1);\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n\\n.BackSection.active {\\n  transform: scale(2);\\n  z-index: 2;\\n  cursor: unset;\\n}\\n\\n.BackSection.transitioning {\\n  z-index: 2;\\n}\\n\\n.BackSection h1 {\\n  font-size: 20vw;\\n  transform: scaleY(0.5) skewX(5deg);\\n  display: inline-block;\\n  text-align: center;\\n  max-width: 50wv;\\n}\\n\\nbutton {\\n  color: inherit;\\n  background: none;\\n  font-size: inherit;\\n  border: none;\\n  text-align: inherit;\\n}\\n\\n.BackSection-close {\\n  position: absolute;\\n  top: -3vmin;\\n  right: 0;\\n  font-size: 8vmin;\\n  padding: 2vmin;\\n  cursor: pointer;\\n}\\n\\n.BackSection-close:hover {\\n  color: var(--color-blackish);\\n}\\n\\n.BackSection-children {\\n  line-height: 1.25;\\n  margin: 2vw;\\n  -webkit-hyphens: auto;\\n      -ms-hyphens: auto;\\n          hyphens: auto;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: underline;\\n}\\n\\na:hover,\\na:focus {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-e));\\n  color: var(--color-blackish);\\n  text-decoration: none;\\n}\\n\\n.hidden {\\n  opacity: 0 !important;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/chris/repos/chrisbolin.github.io/pages/style.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,wBAAwB;EACxB,yBAAyB;EACzB,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,8CAA8C;EAC9C,6CAA6C;AAC/C;;AAEA;EACE,SAAS;EACT,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAHA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,OAAO;AACT;;AAEA;EACE,UAAU;EACV,cAAc;EACd,MAAM;EACN,eAAe;AACjB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,uCAAuC;EACvC,2BAA2B;EAC3B,kBAAkB;EAClB,4EAA4E;AAC9E;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,4BAA4B;EAC5B,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,qCAAqC;EACrC,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,oBAAoB,EAAE,uCAAuC;AAC/D;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,SAAS;EACT,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,8CAA8C;EAC9C,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,UAAU;EACV,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,kCAAkC;EAClC,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,qBAAa;MAAb,iBAAa;UAAb,aAAa;AACf;;AAEA;EACE,cAAc;EACd,0BAA0B;AAC5B;;AAEA;;EAEE,0EAA0E;EAC1E,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB\",\"file\":\"style.css\",\"sourcesContent\":[\":root {\\n  --color-a: #7830cf;\\n  --color-b: #ab32d9;\\n  --color-c: #c236c2;\\n  --color-d: #d93285;\\n  --color-e: #cf3030;\\n  --color-whitish: #f2f2f2;\\n  --color-blackish: #240f1f;\\n  --color-highlight: var(--color-d);\\n  --color-behind-curtain: var(--color-e);\\n}\\n\\nhtml {\\n  font-family: Helvetica Neue, Arial, sans-serif;\\n  background-color: var(--color-behind-curtain);\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: var(--color-whitish);\\n  overflow-x: hidden;\\n}\\n\\nbody ::selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-blackish);\\n}\\n\\na,\\nbutton {\\n  cursor: pointer;\\n}\\n\\n.skip {\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n}\\n\\n.skip:focus {\\n  z-index: 2;\\n  font-size: 6vw;\\n  top: 0;\\n  transform: none;\\n}\\n\\n.app {\\n  background-color: var(--color-whitish);\\n}\\n\\n.container {\\n  position: fixed;\\n  width: 100%;\\n}\\n\\n.card-plane {\\n  position: absolute;\\n  width: 182px;\\n  height: 320px;\\n  margin: 50px calc(50vw - 91px);\\n}\\n\\n.card-face {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  background: var(--color-blackish);\\n}\\n\\n.front {\\n  background-color: var(--color-blackish);\\n  color: var(--color-whitish);\\n  font-style: italic;\\n  font-family: \\\"Baskerville\\\", \\\"Times New Roman\\\", \\\"Droid Serif\\\", \\\"Times\\\", serif;\\n}\\n\\n.title {\\n  font-size: 22px;\\n  padding: 17px 11px;\\n}\\n\\n.Opener {\\n  font-weight: 700;\\n}\\n\\nhr {\\n  border-style: solid;\\n  margin: 15px 0;\\n  color: inherit;\\n}\\n\\n.scroll {\\n  position: absolute;\\n  text-align: center;\\n  width: 100%;\\n  color: var(--color-blackish);\\n  bottom: -30px;\\n  font-size: 16px;\\n}\\n\\n.arrow {\\n  font-size: 24px;\\n  font-family: \\\"Times New Roman\\\", serif;\\n  position: fixed;\\n  text-align: center;\\n  width: 100%;\\n  top: 320px;\\n  pointer-events: none; /* allow clicking \\\"behind\\\" the arrow\\\" */\\n}\\n\\n.Back {\\n  color: var(--color-whitish);\\n  width: 100vw;\\n  height: 100vh;\\n  margin: 0;\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n}\\n\\n.BackSection {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  overflow: hidden;\\n  transition: all cubic-bezier(0, 0.99, 0.58, 1);\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n\\n.BackSection.active {\\n  transform: scale(2);\\n  z-index: 2;\\n  cursor: unset;\\n}\\n\\n.BackSection.transitioning {\\n  z-index: 2;\\n}\\n\\n.BackSection h1 {\\n  font-size: 20vw;\\n  transform: scaleY(0.5) skewX(5deg);\\n  display: inline-block;\\n  text-align: center;\\n  max-width: 50wv;\\n}\\n\\nbutton {\\n  color: inherit;\\n  background: none;\\n  font-size: inherit;\\n  border: none;\\n  text-align: inherit;\\n}\\n\\n.BackSection-close {\\n  position: absolute;\\n  top: -3vmin;\\n  right: 0;\\n  font-size: 8vmin;\\n  padding: 2vmin;\\n  cursor: pointer;\\n}\\n\\n.BackSection-close:hover {\\n  color: var(--color-blackish);\\n}\\n\\n.BackSection-children {\\n  line-height: 1.25;\\n  margin: 2vw;\\n  hyphens: auto;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: underline;\\n}\\n\\na:hover,\\na:focus {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-e));\\n  color: var(--color-blackish);\\n  text-decoration: none;\\n}\\n\\n.hidden {\\n  opacity: 0 !important;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZS5jc3M/Nzk2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qiw2QkFBNkIsOEJBQThCLHNDQUFzQywyQ0FBMkMsR0FBRyxVQUFVLG1EQUFtRCxrREFBa0QsR0FBRyxVQUFVLGNBQWMsMkNBQTJDLHVCQUF1QixHQUFHLDJCQUEyQixnQ0FBZ0MsNENBQTRDLEdBQUcsc0JBQXNCLGdDQUFnQyw0Q0FBNEMsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsV0FBVyxvQkFBb0IsZUFBZSxZQUFZLEdBQUcsaUJBQWlCLGVBQWUsbUJBQW1CLFdBQVcsb0JBQW9CLEdBQUcsVUFBVSwyQ0FBMkMsR0FBRyxnQkFBZ0Isb0JBQW9CLGdCQUFnQixHQUFHLGlCQUFpQix1QkFBdUIsaUJBQWlCLGtCQUFrQixtQ0FBbUMsR0FBRyxnQkFBZ0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsc0NBQXNDLEdBQUcsWUFBWSw0Q0FBNEMsZ0NBQWdDLHVCQUF1Qix5RkFBeUYsR0FBRyxZQUFZLG9CQUFvQix1QkFBdUIsR0FBRyxhQUFhLHFCQUFxQixHQUFHLFFBQVEsd0JBQXdCLG1CQUFtQixtQkFBbUIsR0FBRyxhQUFhLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLGlDQUFpQyxrQkFBa0Isb0JBQW9CLEdBQUcsWUFBWSxvQkFBb0IsNENBQTRDLG9CQUFvQix1QkFBdUIsZ0JBQWdCLGVBQWUseUJBQXlCLCtDQUErQyxXQUFXLGdDQUFnQyxpQkFBaUIsa0JBQWtCLGNBQWMsdUJBQXVCLGtCQUFrQixtQ0FBbUMsZ0NBQWdDLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHFCQUFxQixtREFBbUQsb0JBQW9CLGVBQWUsR0FBRyx5QkFBeUIsd0JBQXdCLGVBQWUsa0JBQWtCLEdB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LHdCQUF3Qiw0QkFBNEIscUJBQXFCLG1EQUFtRCxvQkFBb0IsZUFBZSxHQUFHLHlCQUF5Qix3QkFBd0IsZUFBZSxrQkFBa0IsR0FBRyxnQ0FBZ0MsZUFBZSxHQUFHLHFCQUFxQixvQkFBb0IsdUNBQXVDLDBCQUEwQix1QkFBdUIsb0JBQW9CLEdBQUcsWUFBWSxtQkFBbUIscUJBQXFCLHVCQUF1QixpQkFBaUIsd0JBQXdCLEdBQUcsd0JBQXdCLHVCQUF1QixnQkFBZ0IsYUFBYSxxQkFBcUIsbUJBQW1CLG9CQUFvQixHQUFHLDhCQUE4QixpQ0FBaUMsR0FBRywyQkFBMkIsc0JBQXNCLGdCQUFnQixrQkFBa0IsR0FBRyxPQUFPLG1CQUFtQiwrQkFBK0IsR0FBRyx1QkFBdUIsK0VBQStFLGlDQUFpQywwQkFBMEIsR0FBRyxhQUFhLDBCQUEwQixHQUFHLEtBQUs7QUFDOXBRO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL3BhZ2VzL3N0eWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY29sb3ItYTogIzc4MzBjZjtcXG4gIC0tY29sb3ItYjogI2FiMzJkOTtcXG4gIC0tY29sb3ItYzogI2MyMzZjMjtcXG4gIC0tY29sb3ItZDogI2Q5MzI4NTtcXG4gIC0tY29sb3ItZTogI2NmMzAzMDtcXG4gIC0tY29sb3Itd2hpdGlzaDogI2YyZjJmMjtcXG4gIC0tY29sb3ItYmxhY2tpc2g6ICMyNDBmMWY7XFxuICAtLWNvbG9yLWhpZ2hsaWdodDogdmFyKC0tY29sb3ItZCk7XFxuICAtLWNvbG9yLWJlaGluZC1jdXJ0YWluOiB2YXIoLS1jb2xvci1lKTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmVoaW5kLWN1cnRhaW4pO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IDo6LW1vei1zZWxlY3Rpb24ge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbn1cXG5cXG5ib2R5IDo6c2VsZWN0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuYSxcXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2tpcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IC0xMDAlO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnNraXA6Zm9jdXMge1xcbiAgei1pbmRleDogMjtcXG4gIGZvbnQtc2l6ZTogNnZ3O1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4uYXBwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZC1wbGFuZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTgycHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbiAgbWFyZ2luOiA1MHB4IGNhbGMoNTB2dyAtIDkxcHgpO1xcbn1cXG5cXG4uY2FyZC1mYWNlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbn1cXG5cXG4uZnJvbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXNrZXJ2aWxsZVxcXCIsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBcXFwiRHJvaWQgU2VyaWZcXFwiLCBcXFwiVGltZXNcXFwiLCBzZXJpZjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIHBhZGRpbmc6IDE3cHggMTFweDtcXG59XFxuXFxuLk9wZW5lciB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5ociB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWFyZ2luOiAxNXB4IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnNjcm9sbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxuICBib3R0b206IC0zMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzZXJpZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAzMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBhbGxvdyBjbGlja2luZyBcXFwiYmVoaW5kXFxcIiB0aGUgYXJyb3dcXFwiICovXFxufVxcblxcbi5CYWNrIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNTgsIDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcbiAgei1pbmRleDogMjtcXG4gIGN1cnNvcjogdW5zZXQ7XFxufVxcblxcbi5CYWNrU2VjdGlvbi50cmFuc2l0aW9uaW5nIHtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5CYWNrU2VjdGlvbiBoMSB7XFxuICBmb250LXNpemU6IDIwdnc7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpIHNrZXdYKDVkZWcpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA1MHd2O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLWNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTN2bWluO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDh2bWluO1xcbiAgcGFkZGluZzogMnZtaW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5CYWNrU2VjdGlvbi1jbG9zZTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24tY2hpbGRyZW4ge1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBtYXJnaW46IDJ2dztcXG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcXG4gICAgICAtbXMtaHlwaGVuczogYXV0bztcXG4gICAgICAgICAgaHlwaGVuczogYXV0bztcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5hOmhvdmVyLFxcbmE6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTBkZWcsIHZhcigtLWNvbG9yLWEpLCB2YXIoLS1jb2xvci1lKSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2NocmlzL3JlcG9zL2NocmlzYm9saW4uZ2l0aHViLmlvL3BhZ2VzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHVDQUF1QztBQUN6Qzs7QUFIQTtFQUNFLDJCQUEyQjtFQUMzQix1Q0FBdUM7QUFDekM7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztBQUNUOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxNQUFNO0VBQ04sZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQiw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQW9CLEVBQUUsdUNBQXVDO0FBQy9EOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQiw4Q0FBOEM7RUFDOUMsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxxQkFBYTtNQUFiLGlCQUFhO1VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSwwRUFBMEU7RUFDMUUsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwiZmlsZVwiOlwic3R5bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tY29sb3ItYTogIzc4MzBjZjtcXG4gIC0tY29sb3ItYjogI2FiMzJkOTtcXG4gIC0tY29sb3ItYzogI2MyMzZjMjtcXG4gIC0tY29sb3ItZDogI2Q5MzI4NTtcXG4gIC0tY29sb3ItZTogI2NmMzAzMDtcXG4gIC0tY29sb3Itd2hpdGlzaDogI2YyZjJmMjtcXG4gIC0tY29sb3ItYmxhY2tpc2g6ICMyNDBmMWY7XFxuICAtLWNvbG9yLWhpZ2hsaWdodDogdmFyKC0tY29sb3ItZCk7XFxuICAtLWNvbG9yLWJlaGluZC1jdXJ0YWluOiB2YXIoLS1jb2xvci1lKTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmVoaW5kLWN1cnRhaW4pO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IDo6c2VsZWN0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuYSxcXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2tpcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IC0xMDAlO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnNraXA6Zm9jdXMge1xcbiAgei1pbmRleDogMjtcXG4gIGZvbnQtc2l6ZTogNnZ3O1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4uYXBwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZC1wbGFuZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTgycHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbiAgbWFyZ2luOiA1MHB4IGNhbGMoNTB2dyAtIDkxcHgpO1xcbn1cXG5cXG4uY2FyZC1mYWNlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbn1cXG5cXG4uZnJvbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXNrZXJ2aWxsZVxcXCIsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBcXFwiRHJvaWQgU2VyaWZcXFwiLCBcXFwiVGltZXNcXFwiLCBzZXJpZjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIHBhZGRpbmc6IDE3cHggMTFweDtcXG59XFxuXFxuLk9wZW5lciB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5ociB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWFyZ2luOiAxNXB4IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnNjcm9sbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxuICBib3R0b206IC0zMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzZXJpZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAzMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBhbGxvdyBjbGlja2luZyBcXFwiYmVoaW5kXFxcIiB0aGUgYXJyb3dcXFwiICovXFxufVxcblxcbi5CYWNrIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNTgsIDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcbiAgei1pbmRleDogMjtcXG4gIGN1cnNvcjogdW5zZXQ7XFxufVxcblxcbi5CYWNrU2VjdGlvbi50cmFuc2l0aW9uaW5nIHtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5CYWNrU2VjdGlvbiBoMSB7XFxuICBmb250LXNpemU6IDIwdnc7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpIHNrZXdYKDVkZWcpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA1MHd2O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLWNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTN2bWluO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDh2bWluO1xcbiAgcGFkZGluZzogMnZtaW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5CYWNrU2VjdGlvbi1jbG9zZTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24tY2hpbGRyZW4ge1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBtYXJnaW46IDJ2dztcXG4gIGh5cGhlbnM6IGF1dG87XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYTpob3ZlcixcXG5hOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDUwZGVnLCB2YXIoLS1jb2xvci1hKSwgdmFyKC0tY29sb3ItZSkpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxufVxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/style.css\n");

/***/ })

})