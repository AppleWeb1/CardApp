webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/style.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./pages/style.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \":root {\\n  --color-a: #7830cf;\\n  --color-b: #ab32d9;\\n  --color-c: #c236c2;\\n  --color-d: #d93285;\\n  --color-e: #cf3030;\\n  --color-whitish: #f2f2f2;\\n  --color-blackish: #240f1f;\\n  --color-highlight: var(--color-d);\\n  --color-behind-curtain: var(--color-e);\\n}\\n\\nhtml {\\n  font-family: Helvetica Neue, Arial, sans-serif;\\n  background-color: var(--color-behind-curtain);\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: var(--color-whitish);\\n  overflow-x: hidden;\\n}\\n\\nbody ::-moz-selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-blackish);\\n}\\n\\nbody ::selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-blackish);\\n}\\n\\na,\\nbutton {\\n  cursor: pointer;\\n}\\n\\n.skip {\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n}\\n\\n.skip:focus {\\n  z-index: 2;\\n  font-size: 6vw;\\n  top: 0;\\n  transform: none;\\n}\\n\\n.app {\\n  background-color: var(--color-whitish);\\n}\\n\\n.container {\\n  position: fixed;\\n  width: 100%;\\n}\\n\\n.card-plane {\\n  position: absolute;\\n  width: 182px;\\n  height: 320px;\\n  margin: 50px calc(50vw - 91px);\\n}\\n\\n.card-face {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  background: var(--color-blackish);\\n}\\n\\n.front {\\n  background-color: var(--color-blackish);\\n  color: var(--color-whitish);\\n  font-style: italic;\\n  font-family: \\\"Baskerville\\\", \\\"Times New Roman\\\", \\\"Droid Serif\\\", \\\"Times\\\", serif;\\n}\\n\\n.title {\\n  font-size: 22px;\\n  padding: 17px 11px;\\n}\\n\\n.Opener {\\n  font-weight: 700;\\n}\\n\\nhr {\\n  border-style: solid;\\n  margin: 15px 0;\\n  color: inherit;\\n}\\n\\n.scroll {\\n  position: absolute;\\n  text-align: center;\\n  width: 100%;\\n  color: var(--color-blackish);\\n  bottom: -30px;\\n  font-size: 16px;\\n}\\n\\n.arrow {\\n  font-size: 24px;\\n  font-family: \\\"Times New Roman\\\", serif;\\n  position: fixed;\\n  text-align: center;\\n  width: 100%;\\n  top: 320px;\\n  pointer-events: none; /* allow clicking \\\"behind\\\" the arrow\\\" */\\n}\\n\\n.Back {\\n  color: var(--color-whitish);\\n  width: 100vw;\\n  height: 100vh;\\n  margin: 0;\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n}\\n\\n.BackSection {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  overflow: hidden;\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n\\n.BackSection:hover {\\n  -webkit-filter: brightness(1.1) saturate(1.1);\\n          filter: brightness(1.1) saturate(1.1);\\n}\\n\\n.BackSection:nth-of-type(4n + 1) {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-d));\\n}\\n\\n.BackSection:nth-of-type(4n + 2) {\\n  background: -webkit-linear-gradient(-50deg, var(--color-b), var(--color-e));\\n}\\n\\n.BackSection:nth-of-type(4n + 3) {\\n  background: -webkit-linear-gradient(30deg, var(--color-e), var(--color-b));\\n}\\n\\n.BackSection:nth-of-type(4n + 4) {\\n  background: -webkit-linear-gradient(140deg, var(--color-e), var(--color-a));\\n}\\n\\n.BackSection.active {\\n  transform: scale(2);\\n  z-index: 2;\\n  cursor: unset;\\n}\\n\\n.BackSection.transitioning {\\n  z-index: 2;\\n}\\n\\n.BackSection h1 {\\n  font-size: 21vw;\\n  /* transform: scaleY(0.5) skewX(5deg); */\\n  display: inline-block;\\n  text-align: center;\\n  max-width: 50wv;\\n  text-transform: uppercase;\\n}\\n\\nbutton {\\n  color: inherit;\\n  background: none;\\n  font-size: inherit;\\n  border: none;\\n  text-align: inherit;\\n}\\n\\n.BackSection-close {\\n  position: absolute;\\n  top: -3vmin;\\n  right: 0;\\n  font-size: 8vmin;\\n  padding: 2vmin;\\n  cursor: pointer;\\n}\\n\\n.BackSection-close:hover {\\n  color: var(--color-blackish);\\n}\\n\\n.BackSection-children {\\n  line-height: 1.25;\\n  margin: 2vw;\\n  -webkit-hyphens: auto;\\n      -ms-hyphens: auto;\\n          hyphens: auto;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: underline;\\n}\\n\\na:hover,\\na:focus {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-e));\\n  color: var(--color-blackish);\\n  text-decoration: none;\\n}\\n\\n.hidden {\\n  opacity: 0 !important;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/chris/repos/chrisbolin.github.io/pages/style.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,wBAAwB;EACxB,yBAAyB;EACzB,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,8CAA8C;EAC9C,6CAA6C;AAC/C;;AAEA;EACE,SAAS;EACT,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAHA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,OAAO;AACT;;AAEA;EACE,UAAU;EACV,cAAc;EACd,MAAM;EACN,eAAe;AACjB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,uCAAuC;EACvC,2BAA2B;EAC3B,kBAAkB;EAClB,4EAA4E;AAC9E;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,4BAA4B;EAC5B,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,qCAAqC;EACrC,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,oBAAoB,EAAE,uCAAuC;AAC/D;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,SAAS;EACT,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,6CAAqC;UAArC,qCAAqC;AACvC;;AAEA;EACE,0EAA0E;AAC5E;;AAEA;EACE,2EAA2E;AAC7E;;AAEA;EACE,0EAA0E;AAC5E;;AAEA;EACE,2EAA2E;AAC7E;;AAEA;EACE,mBAAmB;EACnB,UAAU;EACV,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,wCAAwC;EACxC,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,qBAAa;MAAb,iBAAa;UAAb,aAAa;AACf;;AAEA;EACE,cAAc;EACd,0BAA0B;AAC5B;;AAEA;;EAEE,0EAA0E;EAC1E,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB\",\"file\":\"style.css\",\"sourcesContent\":[\":root {\\n  --color-a: #7830cf;\\n  --color-b: #ab32d9;\\n  --color-c: #c236c2;\\n  --color-d: #d93285;\\n  --color-e: #cf3030;\\n  --color-whitish: #f2f2f2;\\n  --color-blackish: #240f1f;\\n  --color-highlight: var(--color-d);\\n  --color-behind-curtain: var(--color-e);\\n}\\n\\nhtml {\\n  font-family: Helvetica Neue, Arial, sans-serif;\\n  background-color: var(--color-behind-curtain);\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: var(--color-whitish);\\n  overflow-x: hidden;\\n}\\n\\nbody ::selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-blackish);\\n}\\n\\na,\\nbutton {\\n  cursor: pointer;\\n}\\n\\n.skip {\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n}\\n\\n.skip:focus {\\n  z-index: 2;\\n  font-size: 6vw;\\n  top: 0;\\n  transform: none;\\n}\\n\\n.app {\\n  background-color: var(--color-whitish);\\n}\\n\\n.container {\\n  position: fixed;\\n  width: 100%;\\n}\\n\\n.card-plane {\\n  position: absolute;\\n  width: 182px;\\n  height: 320px;\\n  margin: 50px calc(50vw - 91px);\\n}\\n\\n.card-face {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  background: var(--color-blackish);\\n}\\n\\n.front {\\n  background-color: var(--color-blackish);\\n  color: var(--color-whitish);\\n  font-style: italic;\\n  font-family: \\\"Baskerville\\\", \\\"Times New Roman\\\", \\\"Droid Serif\\\", \\\"Times\\\", serif;\\n}\\n\\n.title {\\n  font-size: 22px;\\n  padding: 17px 11px;\\n}\\n\\n.Opener {\\n  font-weight: 700;\\n}\\n\\nhr {\\n  border-style: solid;\\n  margin: 15px 0;\\n  color: inherit;\\n}\\n\\n.scroll {\\n  position: absolute;\\n  text-align: center;\\n  width: 100%;\\n  color: var(--color-blackish);\\n  bottom: -30px;\\n  font-size: 16px;\\n}\\n\\n.arrow {\\n  font-size: 24px;\\n  font-family: \\\"Times New Roman\\\", serif;\\n  position: fixed;\\n  text-align: center;\\n  width: 100%;\\n  top: 320px;\\n  pointer-events: none; /* allow clicking \\\"behind\\\" the arrow\\\" */\\n}\\n\\n.Back {\\n  color: var(--color-whitish);\\n  width: 100vw;\\n  height: 100vh;\\n  margin: 0;\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n}\\n\\n.BackSection {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  overflow: hidden;\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n\\n.BackSection:hover {\\n  filter: brightness(1.1) saturate(1.1);\\n}\\n\\n.BackSection:nth-of-type(4n + 1) {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-d));\\n}\\n\\n.BackSection:nth-of-type(4n + 2) {\\n  background: -webkit-linear-gradient(-50deg, var(--color-b), var(--color-e));\\n}\\n\\n.BackSection:nth-of-type(4n + 3) {\\n  background: -webkit-linear-gradient(30deg, var(--color-e), var(--color-b));\\n}\\n\\n.BackSection:nth-of-type(4n + 4) {\\n  background: -webkit-linear-gradient(140deg, var(--color-e), var(--color-a));\\n}\\n\\n.BackSection.active {\\n  transform: scale(2);\\n  z-index: 2;\\n  cursor: unset;\\n}\\n\\n.BackSection.transitioning {\\n  z-index: 2;\\n}\\n\\n.BackSection h1 {\\n  font-size: 21vw;\\n  /* transform: scaleY(0.5) skewX(5deg); */\\n  display: inline-block;\\n  text-align: center;\\n  max-width: 50wv;\\n  text-transform: uppercase;\\n}\\n\\nbutton {\\n  color: inherit;\\n  background: none;\\n  font-size: inherit;\\n  border: none;\\n  text-align: inherit;\\n}\\n\\n.BackSection-close {\\n  position: absolute;\\n  top: -3vmin;\\n  right: 0;\\n  font-size: 8vmin;\\n  padding: 2vmin;\\n  cursor: pointer;\\n}\\n\\n.BackSection-close:hover {\\n  color: var(--color-blackish);\\n}\\n\\n.BackSection-children {\\n  line-height: 1.25;\\n  margin: 2vw;\\n  hyphens: auto;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: underline;\\n}\\n\\na:hover,\\na:focus {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-e));\\n  color: var(--color-blackish);\\n  text-decoration: none;\\n}\\n\\n.hidden {\\n  opacity: 0 !important;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZS5jc3M/Nzk2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qiw2QkFBNkIsOEJBQThCLHNDQUFzQywyQ0FBMkMsR0FBRyxVQUFVLG1EQUFtRCxrREFBa0QsR0FBRyxVQUFVLGNBQWMsMkNBQTJDLHVCQUF1QixHQUFHLDJCQUEyQixnQ0FBZ0MsNENBQTRDLEdBQUcsc0JBQXNCLGdDQUFnQyw0Q0FBNEMsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsV0FBVyxvQkFBb0IsZUFBZSxZQUFZLEdBQUcsaUJBQWlCLGVBQWUsbUJBQW1CLFdBQVcsb0JBQW9CLEdBQUcsVUFBVSwyQ0FBMkMsR0FBRyxnQkFBZ0Isb0JBQW9CLGdCQUFnQixHQUFHLGlCQUFpQix1QkFBdUIsaUJBQWlCLGtCQUFrQixtQ0FBbUMsR0FBRyxnQkFBZ0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsc0NBQXNDLEdBQUcsWUFBWSw0Q0FBNEMsZ0NBQWdDLHVCQUF1Qix5RkFBeUYsR0FBRyxZQUFZLG9CQUFvQix1QkFBdUIsR0FBRyxhQUFhLHFCQUFxQixHQUFHLFFBQVEsd0JBQXdCLG1CQUFtQixtQkFBbUIsR0FBRyxhQUFhLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLGlDQUFpQyxrQkFBa0Isb0JBQW9CLEdBQUcsWUFBWSxvQkFBb0IsNENBQTRDLG9CQUFvQix1QkFBdUIsZ0JBQWdCLGVBQWUseUJBQXlCLCtDQUErQyxXQUFXLGdDQUFnQyxpQkFBaUIsa0JBQWtCLGNBQWMsdUJBQXVCLGtCQUFrQixtQ0FBbUMsZ0NBQWdDLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHFCQUFxQixvQkFBb0IsZUFBZSxHQUFHLHdCQUF3QixrREFBa0Qsa0RBQWtELEdBQUcsc0NBQXNDLCtF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QkFBdUIsdUJBQXVCLGdCQUFnQixpQ0FBaUMsa0JBQWtCLG9CQUFvQixHQUFHLFlBQVksb0JBQW9CLDRDQUE0QyxvQkFBb0IsdUJBQXVCLGdCQUFnQixlQUFlLHlCQUF5QiwrQ0FBK0MsV0FBVyxnQ0FBZ0MsaUJBQWlCLGtCQUFrQixjQUFjLHVCQUF1QixrQkFBa0IsbUNBQW1DLGdDQUFnQyxHQUFHLGtCQUFrQixrQkFBa0Isd0JBQXdCLDRCQUE0QixxQkFBcUIsb0JBQW9CLGVBQWUsR0FBRyx3QkFBd0IsMENBQTBDLEdBQUcsc0NBQXNDLCtFQUErRSxHQUFHLHNDQUFzQyxnRkFBZ0YsR0FBRyxzQ0FBc0MsK0VBQStFLEdBQUcsc0NBQXNDLGdGQUFnRixHQUFHLHlCQUF5Qix3QkFBd0IsZUFBZSxrQkFBa0IsR0FBRyxnQ0FBZ0MsZUFBZSxHQUFHLHFCQUFxQixvQkFBb0IsMENBQTBDLDZCQUE2Qix1QkFBdUIsb0JBQW9CLDhCQUE4QixHQUFHLFlBQVksbUJBQW1CLHFCQUFxQix1QkFBdUIsaUJBQWlCLHdCQUF3QixHQUFHLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLGFBQWEscUJBQXFCLG1CQUFtQixvQkFBb0IsR0FBRyw4QkFBOEIsaUNBQWlDLEdBQUcsMkJBQTJCLHNCQUFzQixnQkFBZ0Isa0JBQWtCLEdBQUcsT0FBTyxtQkFBbUIsK0JBQStCLEdBQUcsdUJBQXVCLCtFQUErRSxpQ0FBaUMsMEJBQTBCLEdBQUcsYUFBYSwwQkFBMEIsR0FBRyxLQUFLO0FBQzU0UztBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9wYWdlcy9zdHlsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbG9yLWE6ICM3ODMwY2Y7XFxuICAtLWNvbG9yLWI6ICNhYjMyZDk7XFxuICAtLWNvbG9yLWM6ICNjMjM2YzI7XFxuICAtLWNvbG9yLWQ6ICNkOTMyODU7XFxuICAtLWNvbG9yLWU6ICNjZjMwMzA7XFxuICAtLWNvbG9yLXdoaXRpc2g6ICNmMmYyZjI7XFxuICAtLWNvbG9yLWJsYWNraXNoOiAjMjQwZjFmO1xcbiAgLS1jb2xvci1oaWdobGlnaHQ6IHZhcigtLWNvbG9yLWQpO1xcbiAgLS1jb2xvci1iZWhpbmQtY3VydGFpbjogdmFyKC0tY29sb3ItZSk7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJlaGluZC1jdXJ0YWluKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSA6Oi1tb3otc2VsZWN0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuYm9keSA6OnNlbGVjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGlzaCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxufVxcblxcbmEsXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNraXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAtMTAwJTtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5za2lwOmZvY3VzIHtcXG4gIHotaW5kZXg6IDI7XFxuICBmb250LXNpemU6IDZ2dztcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLmFwcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQtcGxhbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE4MnB4O1xcbiAgaGVpZ2h0OiAzMjBweDtcXG4gIG1hcmdpbjogNTBweCBjYWxjKDUwdncgLSA5MXB4KTtcXG59XFxuXFxuLmNhcmQtZmFjZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuLmZyb250IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFza2VydmlsbGVcXFwiLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgXFxcIkRyb2lkIFNlcmlmXFxcIiwgXFxcIlRpbWVzXFxcIiwgc2VyaWY7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBwYWRkaW5nOiAxN3B4IDExcHg7XFxufVxcblxcbi5PcGVuZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaHIge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1hcmdpbjogMTVweCAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5zY3JvbGwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbiAgYm90dG9tOiAtMzBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmFycm93IHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgc2VyaWY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMzIwcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogYWxsb3cgY2xpY2tpbmcgXFxcImJlaGluZFxcXCIgdGhlIGFycm93XFxcIiAqL1xcbn1cXG5cXG4uQmFjayB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGlzaCk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLkJhY2tTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOmhvdmVyIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDEuMSkgc2F0dXJhdGUoMS4xKTtcXG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSkgc2F0dXJhdGUoMS4xKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOm50aC1vZi10eXBlKDRuICsgMSkge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTBkZWcsIHZhcigtLWNvbG9yLWEpLCB2YXIoLS1jb2xvci1kKSk7XFxufVxcblxcbi5CYWNrU2VjdGlvbjpudGgtb2YtdHlwZSg0biArIDIpIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC01MGRlZywgdmFyKC0tY29sb3ItYiksIHZhcigtLWNvbG9yLWUpKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOm50aC1vZi10eXBlKDRuICsgMykge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHZhcigtLWNvbG9yLWUpLCB2YXIoLS1jb2xvci1iKSk7XFxufVxcblxcbi5CYWNrU2VjdGlvbjpudGgtb2YtdHlwZSg0biArIDQpIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0MGRlZywgdmFyKC0tY29sb3ItZSksIHZhcigtLWNvbG9yLWEpKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcbiAgei1pbmRleDogMjtcXG4gIGN1cnNvcjogdW5zZXQ7XFxufVxcblxcbi5CYWNrU2VjdGlvbi50cmFuc2l0aW9uaW5nIHtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5CYWNrU2VjdGlvbiBoMSB7XFxuICBmb250LXNpemU6IDIxdnc7XFxuICAvKiB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpIHNrZXdYKDVkZWcpOyAqL1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA1MHd2O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XFxufVxcblxcbi5CYWNrU2VjdGlvbi1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0zdm1pbjtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1zaXplOiA4dm1pbjtcXG4gIHBhZGRpbmc6IDJ2bWluO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24tY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLWNoaWxkcmVuIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgbWFyZ2luOiAydnc7XFxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XFxuICAgICAgLW1zLWh5cGhlbnM6IGF1dG87XFxuICAgICAgICAgIGh5cGhlbnM6IGF1dG87XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYTpob3ZlcixcXG5hOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDUwZGVnLCB2YXIoLS1jb2xvci1hKSwgdmFyKC0tY29sb3ItZSkpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9jaHJpcy9yZXBvcy9jaHJpc2JvbGluLmdpdGh1Yi5pby9wYWdlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLDhDQUE4QztFQUM5Qyw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsc0NBQXNDO0VBQ3RDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQix1Q0FBdUM7QUFDekM7O0FBSEE7RUFDRSwyQkFBMkI7RUFDM0IsdUNBQXVDO0FBQ3pDOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87QUFDVDs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsTUFBTTtFQUNOLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLG9CQUFvQixFQUFFLHVDQUF1QztBQUMvRDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZDQUFxQztVQUFyQyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSwyRUFBMkU7QUFDN0U7O0FBRUE7RUFDRSwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSwyRUFBMkU7QUFDN0U7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZix3Q0FBd0M7RUFDeEMscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gscUJBQWE7TUFBYixpQkFBYTtVQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsMEVBQTBFO0VBQzFFLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcImZpbGVcIjpcInN0eWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWNvbG9yLWE6ICM3ODMwY2Y7XFxuICAtLWNvbG9yLWI6ICNhYjMyZDk7XFxuICAtLWNvbG9yLWM6ICNjMjM2YzI7XFxuICAtLWNvbG9yLWQ6ICNkOTMyODU7XFxuICAtLWNvbG9yLWU6ICNjZjMwMzA7XFxuICAtLWNvbG9yLXdoaXRpc2g6ICNmMmYyZjI7XFxuICAtLWNvbG9yLWJsYWNraXNoOiAjMjQwZjFmO1xcbiAgLS1jb2xvci1oaWdobGlnaHQ6IHZhcigtLWNvbG9yLWQpO1xcbiAgLS1jb2xvci1iZWhpbmQtY3VydGFpbjogdmFyKC0tY29sb3ItZSk7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJlaGluZC1jdXJ0YWluKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSA6OnNlbGVjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGlzaCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxufVxcblxcbmEsXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNraXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAtMTAwJTtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5za2lwOmZvY3VzIHtcXG4gIHotaW5kZXg6IDI7XFxuICBmb250LXNpemU6IDZ2dztcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLmFwcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQtcGxhbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE4MnB4O1xcbiAgaGVpZ2h0OiAzMjBweDtcXG4gIG1hcmdpbjogNTBweCBjYWxjKDUwdncgLSA5MXB4KTtcXG59XFxuXFxuLmNhcmQtZmFjZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuLmZyb250IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFza2VydmlsbGVcXFwiLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgXFxcIkRyb2lkIFNlcmlmXFxcIiwgXFxcIlRpbWVzXFxcIiwgc2VyaWY7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBwYWRkaW5nOiAxN3B4IDExcHg7XFxufVxcblxcbi5PcGVuZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaHIge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1hcmdpbjogMTVweCAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5zY3JvbGwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbiAgYm90dG9tOiAtMzBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmFycm93IHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgc2VyaWY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMzIwcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogYWxsb3cgY2xpY2tpbmcgXFxcImJlaGluZFxcXCIgdGhlIGFycm93XFxcIiAqL1xcbn1cXG5cXG4uQmFjayB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGlzaCk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLkJhY2tTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpIHNhdHVyYXRlKDEuMSk7XFxufVxcblxcbi5CYWNrU2VjdGlvbjpudGgtb2YtdHlwZSg0biArIDEpIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDUwZGVnLCB2YXIoLS1jb2xvci1hKSwgdmFyKC0tY29sb3ItZCkpO1xcbn1cXG5cXG4uQmFja1NlY3Rpb246bnRoLW9mLXR5cGUoNG4gKyAyKSB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNTBkZWcsIHZhcigtLWNvbG9yLWIpLCB2YXIoLS1jb2xvci1lKSk7XFxufVxcblxcbi5CYWNrU2VjdGlvbjpudGgtb2YtdHlwZSg0biArIDMpIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDMwZGVnLCB2YXIoLS1jb2xvci1lKSwgdmFyKC0tY29sb3ItYikpO1xcbn1cXG5cXG4uQmFja1NlY3Rpb246bnRoLW9mLXR5cGUoNG4gKyA0KSB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHZhcigtLWNvbG9yLWUpLCB2YXIoLS1jb2xvci1hKSk7XFxufVxcblxcbi5CYWNrU2VjdGlvbi5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXG4gIHotaW5kZXg6IDI7XFxuICBjdXJzb3I6IHVuc2V0O1xcbn1cXG5cXG4uQmFja1NlY3Rpb24udHJhbnNpdGlvbmluZyB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24gaDEge1xcbiAgZm9udC1zaXplOiAyMXZ3O1xcbiAgLyogdHJhbnNmb3JtOiBzY2FsZVkoMC41KSBza2V3WCg1ZGVnKTsgKi9cXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNTB3djtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbn1cXG5cXG4uQmFja1NlY3Rpb24tY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtM3ZtaW47XFxuICByaWdodDogMDtcXG4gIGZvbnQtc2l6ZTogOHZtaW47XFxuICBwYWRkaW5nOiAydm1pbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLWNsb3NlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxufVxcblxcbi5CYWNrU2VjdGlvbi1jaGlsZHJlbiB7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIG1hcmdpbjogMnZ3O1xcbiAgaHlwaGVuczogYXV0bztcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5hOmhvdmVyLFxcbmE6Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTBkZWcsIHZhcigtLWNvbG9yLWEpLCB2YXIoLS1jb2xvci1lKSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/style.css\n");

/***/ })

})