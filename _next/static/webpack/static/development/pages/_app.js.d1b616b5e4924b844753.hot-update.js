webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/style.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./pages/style.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \":root {\\n  --color-a: #7830cf;\\n  --color-b: #ab32d9;\\n  --color-c: #c236c2;\\n  --color-d: #d93285;\\n  --color-e: #cf3030;\\n  --color-whitish: #f2f2f2;\\n  --color-blackish: #240f1f;\\n  --color-highlight: var(--color-d);\\n  --color-behind-curtain: var(--color-e);\\n}\\n\\nhtml {\\n  font-family: Helvetica Neue, Arial, sans-serif;\\n  background-color: var(--color-behind-curtain);\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: var(--color-whitish);\\n  overflow-x: hidden;\\n}\\n\\nbody ::-moz-selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-blackish);\\n}\\n\\nbody ::selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-blackish);\\n}\\n\\na,\\nbutton {\\n  cursor: pointer;\\n}\\n\\n.skip {\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n}\\n\\n.skip:focus {\\n  z-index: 2;\\n  font-size: 6vw;\\n  top: 0;\\n  transform: none;\\n}\\n\\n.app {\\n  background-color: var(--color-whitish);\\n}\\n\\n.container {\\n  position: fixed;\\n  width: 100%;\\n}\\n\\n.card-plane {\\n  position: absolute;\\n  width: 182px;\\n  height: 320px;\\n  margin: 50px calc(50vw - 91px);\\n}\\n\\n.card-face {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  background: var(--color-blackish);\\n}\\n\\n.front {\\n  background-color: var(--color-blackish);\\n  color: var(--color-whitish);\\n  font-style: italic;\\n  font-family: \\\"Baskerville\\\", \\\"Times New Roman\\\", \\\"Droid Serif\\\", \\\"Times\\\", serif;\\n}\\n\\n.title {\\n  font-size: 22px;\\n  padding: 17px 11px;\\n}\\n\\n.Opener {\\n  font-weight: 700;\\n}\\n\\nhr {\\n  border-style: solid;\\n  margin: 15px 0;\\n  color: inherit;\\n}\\n\\n.scroll {\\n  position: absolute;\\n  text-align: center;\\n  width: 100%;\\n  color: var(--color-blackish);\\n  bottom: -30px;\\n  font-size: 16px;\\n}\\n\\n.arrow {\\n  font-size: 24px;\\n  font-family: \\\"Times New Roman\\\", serif;\\n  position: fixed;\\n  text-align: center;\\n  width: 100%;\\n  top: 320px;\\n  pointer-events: none; /* allow clicking \\\"behind\\\" the arrow\\\" */\\n}\\n\\n.Back {\\n  color: var(--color-whitish);\\n  width: 100vw;\\n  height: 100vh;\\n  margin: 0;\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n}\\n\\n.BackSection {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  overflow: hidden;\\n  transition: all cubic-bezier(0, 0.99, 0.58, 1);\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n\\n.BackSection.active {\\n  transform: scale(2);\\n  z-index: 2;\\n  cursor: unset;\\n}\\n\\n.BackSection.transitioning {\\n  z-index: 2;\\n}\\n\\n.BackSection h1 {\\n  font-size: 12vw;\\n  transform: scaleY(0.5) skewX(5deg);\\n  display: inline-block;\\n  text-align: center;\\n  max-width: 50wv;\\n  transition: transform 350ms ease-out;\\n}\\n\\n.BackSection:hover h1 {\\n  transform: scaleY(0.5) skewX(5deg) rotateX(20deg);\\n  opacity: 0.9;\\n}\\n\\n.BackSection button {\\n  color: inherit;\\n  background: none;\\n  font-size: inherit;\\n  border: none;\\n  text-align: inherit;\\n}\\n\\n.BackSection .BackSection-close {\\n  position: absolute;\\n  top: -3vmin;\\n  right: 0;\\n  font-size: 8vmin;\\n  padding: 2vmin;\\n  cursor: pointer;\\n}\\n\\n.BackSection .BackSection-close:hover {\\n  color: var(--color-blackish);\\n}\\n\\n.BackSection:nth-of-type(4n + 1) {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-d));\\n}\\n\\n.BackSection:nth-of-type(4n + 2) {\\n  background: -webkit-linear-gradient(-50deg, var(--color-b), var(--color-e));\\n}\\n\\n.BackSection:nth-of-type(4n + 3) {\\n  background: -webkit-linear-gradient(30deg, var(--color-e), var(--color-b));\\n}\\n\\n.BackSection:nth-of-type(4n + 4) {\\n  background: -webkit-linear-gradient(140deg, var(--color-e), var(--color-a));\\n}\\n\\n.BackSection-children {\\n  line-height: 1.25;\\n  margin: 2vw;\\n  -webkit-hyphens: auto;\\n      -ms-hyphens: auto;\\n          hyphens: auto;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: underline;\\n}\\n\\na:hover,\\na:focus {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-e));\\n  color: var(--color-blackish);\\n  text-decoration: none;\\n}\\n\\n.hidden {\\n  opacity: 0 !important;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/chris/repos/chrisbolin.github.io/pages/style.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,wBAAwB;EACxB,yBAAyB;EACzB,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,8CAA8C;EAC9C,6CAA6C;AAC/C;;AAEA;EACE,SAAS;EACT,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAHA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,OAAO;AACT;;AAEA;EACE,UAAU;EACV,cAAc;EACd,MAAM;EACN,eAAe;AACjB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,uCAAuC;EACvC,2BAA2B;EAC3B,kBAAkB;EAClB,4EAA4E;AAC9E;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,4BAA4B;EAC5B,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,qCAAqC;EACrC,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,oBAAoB,EAAE,uCAAuC;AAC/D;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,SAAS;EACT,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,8CAA8C;EAC9C,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,UAAU;EACV,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,kCAAkC;EAClC,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,iDAAiD;EACjD,YAAY;AACd;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,0EAA0E;AAC5E;;AAEA;EACE,2EAA2E;AAC7E;;AAEA;EACE,0EAA0E;AAC5E;;AAEA;EACE,2EAA2E;AAC7E;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,qBAAa;MAAb,iBAAa;UAAb,aAAa;AACf;;AAEA;EACE,cAAc;EACd,0BAA0B;AAC5B;;AAEA;;EAEE,0EAA0E;EAC1E,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB\",\"file\":\"style.css\",\"sourcesContent\":[\":root {\\n  --color-a: #7830cf;\\n  --color-b: #ab32d9;\\n  --color-c: #c236c2;\\n  --color-d: #d93285;\\n  --color-e: #cf3030;\\n  --color-whitish: #f2f2f2;\\n  --color-blackish: #240f1f;\\n  --color-highlight: var(--color-d);\\n  --color-behind-curtain: var(--color-e);\\n}\\n\\nhtml {\\n  font-family: Helvetica Neue, Arial, sans-serif;\\n  background-color: var(--color-behind-curtain);\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: var(--color-whitish);\\n  overflow-x: hidden;\\n}\\n\\nbody ::selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-blackish);\\n}\\n\\na,\\nbutton {\\n  cursor: pointer;\\n}\\n\\n.skip {\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n}\\n\\n.skip:focus {\\n  z-index: 2;\\n  font-size: 6vw;\\n  top: 0;\\n  transform: none;\\n}\\n\\n.app {\\n  background-color: var(--color-whitish);\\n}\\n\\n.container {\\n  position: fixed;\\n  width: 100%;\\n}\\n\\n.card-plane {\\n  position: absolute;\\n  width: 182px;\\n  height: 320px;\\n  margin: 50px calc(50vw - 91px);\\n}\\n\\n.card-face {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  background: var(--color-blackish);\\n}\\n\\n.front {\\n  background-color: var(--color-blackish);\\n  color: var(--color-whitish);\\n  font-style: italic;\\n  font-family: \\\"Baskerville\\\", \\\"Times New Roman\\\", \\\"Droid Serif\\\", \\\"Times\\\", serif;\\n}\\n\\n.title {\\n  font-size: 22px;\\n  padding: 17px 11px;\\n}\\n\\n.Opener {\\n  font-weight: 700;\\n}\\n\\nhr {\\n  border-style: solid;\\n  margin: 15px 0;\\n  color: inherit;\\n}\\n\\n.scroll {\\n  position: absolute;\\n  text-align: center;\\n  width: 100%;\\n  color: var(--color-blackish);\\n  bottom: -30px;\\n  font-size: 16px;\\n}\\n\\n.arrow {\\n  font-size: 24px;\\n  font-family: \\\"Times New Roman\\\", serif;\\n  position: fixed;\\n  text-align: center;\\n  width: 100%;\\n  top: 320px;\\n  pointer-events: none; /* allow clicking \\\"behind\\\" the arrow\\\" */\\n}\\n\\n.Back {\\n  color: var(--color-whitish);\\n  width: 100vw;\\n  height: 100vh;\\n  margin: 0;\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n}\\n\\n.BackSection {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  overflow: hidden;\\n  transition: all cubic-bezier(0, 0.99, 0.58, 1);\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n\\n.BackSection.active {\\n  transform: scale(2);\\n  z-index: 2;\\n  cursor: unset;\\n}\\n\\n.BackSection.transitioning {\\n  z-index: 2;\\n}\\n\\n.BackSection h1 {\\n  font-size: 12vw;\\n  transform: scaleY(0.5) skewX(5deg);\\n  display: inline-block;\\n  text-align: center;\\n  max-width: 50wv;\\n  transition: transform 350ms ease-out;\\n}\\n\\n.BackSection:hover h1 {\\n  transform: scaleY(0.5) skewX(5deg) rotateX(20deg);\\n  opacity: 0.9;\\n}\\n\\n.BackSection button {\\n  color: inherit;\\n  background: none;\\n  font-size: inherit;\\n  border: none;\\n  text-align: inherit;\\n}\\n\\n.BackSection .BackSection-close {\\n  position: absolute;\\n  top: -3vmin;\\n  right: 0;\\n  font-size: 8vmin;\\n  padding: 2vmin;\\n  cursor: pointer;\\n}\\n\\n.BackSection .BackSection-close:hover {\\n  color: var(--color-blackish);\\n}\\n\\n.BackSection:nth-of-type(4n + 1) {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-d));\\n}\\n\\n.BackSection:nth-of-type(4n + 2) {\\n  background: -webkit-linear-gradient(-50deg, var(--color-b), var(--color-e));\\n}\\n\\n.BackSection:nth-of-type(4n + 3) {\\n  background: -webkit-linear-gradient(30deg, var(--color-e), var(--color-b));\\n}\\n\\n.BackSection:nth-of-type(4n + 4) {\\n  background: -webkit-linear-gradient(140deg, var(--color-e), var(--color-a));\\n}\\n\\n.BackSection-children {\\n  line-height: 1.25;\\n  margin: 2vw;\\n  hyphens: auto;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: underline;\\n}\\n\\na:hover,\\na:focus {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-e));\\n  color: var(--color-blackish);\\n  text-decoration: none;\\n}\\n\\n.hidden {\\n  opacity: 0 !important;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZS5jc3M/Nzk2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qiw2QkFBNkIsOEJBQThCLHNDQUFzQywyQ0FBMkMsR0FBRyxVQUFVLG1EQUFtRCxrREFBa0QsR0FBRyxVQUFVLGNBQWMsMkNBQTJDLHVCQUF1QixHQUFHLDJCQUEyQixnQ0FBZ0MsNENBQTRDLEdBQUcsc0JBQXNCLGdDQUFnQyw0Q0FBNEMsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsV0FBVyxvQkFBb0IsZUFBZSxZQUFZLEdBQUcsaUJBQWlCLGVBQWUsbUJBQW1CLFdBQVcsb0JBQW9CLEdBQUcsVUFBVSwyQ0FBMkMsR0FBRyxnQkFBZ0Isb0JBQW9CLGdCQUFnQixHQUFHLGlCQUFpQix1QkFBdUIsaUJBQWlCLGtCQUFrQixtQ0FBbUMsR0FBRyxnQkFBZ0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsc0NBQXNDLEdBQUcsWUFBWSw0Q0FBNEMsZ0NBQWdDLHVCQUF1Qix5RkFBeUYsR0FBRyxZQUFZLG9CQUFvQix1QkFBdUIsR0FBRyxhQUFhLHFCQUFxQixHQUFHLFFBQVEsd0JBQXdCLG1CQUFtQixtQkFBbUIsR0FBRyxhQUFhLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLGlDQUFpQyxrQkFBa0Isb0JBQW9CLEdBQUcsWUFBWSxvQkFBb0IsNENBQTRDLG9CQUFvQix1QkFBdUIsZ0JBQWdCLGVBQWUseUJBQXlCLCtDQUErQyxXQUFXLGdDQUFnQyxpQkFBaUIsa0JBQWtCLGNBQWMsdUJBQXVCLGtCQUFrQixtQ0FBbUMsZ0NBQWdDLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHFCQUFxQixtREFBbUQsb0JBQW9CLGVBQWUsR0FBRyx5QkFBeUIsd0JBQXdCLGVBQWUsa0JBQWtCLEdB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bUIsR0FBRyxhQUFhLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLGlDQUFpQyxrQkFBa0Isb0JBQW9CLEdBQUcsWUFBWSxvQkFBb0IsNENBQTRDLG9CQUFvQix1QkFBdUIsZ0JBQWdCLGVBQWUseUJBQXlCLCtDQUErQyxXQUFXLGdDQUFnQyxpQkFBaUIsa0JBQWtCLGNBQWMsdUJBQXVCLGtCQUFrQixtQ0FBbUMsZ0NBQWdDLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHFCQUFxQixtREFBbUQsb0JBQW9CLGVBQWUsR0FBRyx5QkFBeUIsd0JBQXdCLGVBQWUsa0JBQWtCLEdBQUcsZ0NBQWdDLGVBQWUsR0FBRyxxQkFBcUIsb0JBQW9CLHVDQUF1QywwQkFBMEIsdUJBQXVCLG9CQUFvQix5Q0FBeUMsR0FBRywyQkFBMkIsc0RBQXNELGlCQUFpQixHQUFHLHlCQUF5QixtQkFBbUIscUJBQXFCLHVCQUF1QixpQkFBaUIsd0JBQXdCLEdBQUcscUNBQXFDLHVCQUF1QixnQkFBZ0IsYUFBYSxxQkFBcUIsbUJBQW1CLG9CQUFvQixHQUFHLDJDQUEyQyxpQ0FBaUMsR0FBRyxzQ0FBc0MsK0VBQStFLEdBQUcsc0NBQXNDLGdGQUFnRixHQUFHLHNDQUFzQywrRUFBK0UsR0FBRyxzQ0FBc0MsZ0ZBQWdGLEdBQUcsMkJBQTJCLHNCQUFzQixnQkFBZ0Isa0JBQWtCLEdBQUcsT0FBTyxtQkFBbUIsK0JBQStCLEdBQUcsdUJBQXVCLCtFQUErRSxpQ0FBaUMsMEJBQTBCLEdBQUcsYUFBYSwwQkFBMEIsR0FBRyxLQUFLO0FBQzFsVDtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9wYWdlcy9zdHlsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWNvbG9yLWE6ICM3ODMwY2Y7XFxuICAtLWNvbG9yLWI6ICNhYjMyZDk7XFxuICAtLWNvbG9yLWM6ICNjMjM2YzI7XFxuICAtLWNvbG9yLWQ6ICNkOTMyODU7XFxuICAtLWNvbG9yLWU6ICNjZjMwMzA7XFxuICAtLWNvbG9yLXdoaXRpc2g6ICNmMmYyZjI7XFxuICAtLWNvbG9yLWJsYWNraXNoOiAjMjQwZjFmO1xcbiAgLS1jb2xvci1oaWdobGlnaHQ6IHZhcigtLWNvbG9yLWQpO1xcbiAgLS1jb2xvci1iZWhpbmQtY3VydGFpbjogdmFyKC0tY29sb3ItZSk7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJlaGluZC1jdXJ0YWluKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSA6Oi1tb3otc2VsZWN0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuYm9keSA6OnNlbGVjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGlzaCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxufVxcblxcbmEsXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNraXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAtMTAwJTtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi5za2lwOmZvY3VzIHtcXG4gIHotaW5kZXg6IDI7XFxuICBmb250LXNpemU6IDZ2dztcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLmFwcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQtcGxhbmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE4MnB4O1xcbiAgaGVpZ2h0OiAzMjBweDtcXG4gIG1hcmdpbjogNTBweCBjYWxjKDUwdncgLSA5MXB4KTtcXG59XFxuXFxuLmNhcmQtZmFjZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuLmZyb250IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmFza2VydmlsbGVcXFwiLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgXFxcIkRyb2lkIFNlcmlmXFxcIiwgXFxcIlRpbWVzXFxcIiwgc2VyaWY7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBwYWRkaW5nOiAxN3B4IDExcHg7XFxufVxcblxcbi5PcGVuZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaHIge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIG1hcmdpbjogMTVweCAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5zY3JvbGwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbiAgYm90dG9tOiAtMzBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmFycm93IHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgc2VyaWY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMzIwcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogYWxsb3cgY2xpY2tpbmcgXFxcImJlaGluZFxcXCIgdGhlIGFycm93XFxcIiAqL1xcbn1cXG5cXG4uQmFjayB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGlzaCk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLkJhY2tTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogYWxsIGN1YmljLWJlemllcigwLCAwLjk5LCAwLjU4LCAxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5CYWNrU2VjdGlvbi5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcXG4gIHotaW5kZXg6IDI7XFxuICBjdXJzb3I6IHVuc2V0O1xcbn1cXG5cXG4uQmFja1NlY3Rpb24udHJhbnNpdGlvbmluZyB7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24gaDEge1xcbiAgZm9udC1zaXplOiAxMnZ3O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KSBza2V3WCg1ZGVnKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNTB3djtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzNTBtcyBlYXNlLW91dDtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOmhvdmVyIGgxIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSkgc2tld1goNWRlZykgcm90YXRlWCgyMGRlZyk7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5CYWNrU2VjdGlvbiBidXR0b24ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG59XFxuXFxuLkJhY2tTZWN0aW9uIC5CYWNrU2VjdGlvbi1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0zdm1pbjtcXG4gIHJpZ2h0OiAwO1xcbiAgZm9udC1zaXplOiA4dm1pbjtcXG4gIHBhZGRpbmc6IDJ2bWluO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24gLkJhY2tTZWN0aW9uLWNsb3NlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxufVxcblxcbi5CYWNrU2VjdGlvbjpudGgtb2YtdHlwZSg0biArIDEpIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDUwZGVnLCB2YXIoLS1jb2xvci1hKSwgdmFyKC0tY29sb3ItZCkpO1xcbn1cXG5cXG4uQmFja1NlY3Rpb246bnRoLW9mLXR5cGUoNG4gKyAyKSB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNTBkZWcsIHZhcigtLWNvbG9yLWIpLCB2YXIoLS1jb2xvci1lKSk7XFxufVxcblxcbi5CYWNrU2VjdGlvbjpudGgtb2YtdHlwZSg0biArIDMpIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDMwZGVnLCB2YXIoLS1jb2xvci1lKSwgdmFyKC0tY29sb3ItYikpO1xcbn1cXG5cXG4uQmFja1NlY3Rpb246bnRoLW9mLXR5cGUoNG4gKyA0KSB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxNDBkZWcsIHZhcigtLWNvbG9yLWUpLCB2YXIoLS1jb2xvci1hKSk7XFxufVxcblxcbi5CYWNrU2VjdGlvbi1jaGlsZHJlbiB7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIG1hcmdpbjogMnZ3O1xcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xcbiAgICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xcbiAgICAgICAgICBoeXBoZW5zOiBhdXRvO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmE6aG92ZXIsXFxuYTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgdmFyKC0tY29sb3ItYSksIHZhcigtLWNvbG9yLWUpKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvY2hyaXMvcmVwb3MvY2hyaXNib2xpbi5naXRodWIuaW8vcGFnZXMvc3R5bGUuY3Nz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b3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tY29sb3ItYTogIzc4MzBjZjtcXG4gIC0tY29sb3ItYjogI2FiMzJkOTtcXG4gIC0tY29sb3ItYzogI2MyMzZjMjtcXG4gIC0tY29sb3ItZDogI2Q5MzI4NTtcXG4gIC0tY29sb3ItZTogI2NmMzAzMDtcXG4gIC0tY29sb3Itd2hpdGlzaDogI2YyZjJmMjtcXG4gIC0tY29sb3ItYmxhY2tpc2g6ICMyNDBmMWY7XFxuICAtLWNvbG9yLWhpZ2hsaWdodDogdmFyKC0tY29sb3ItZCk7XFxuICAtLWNvbG9yLWJlaGluZC1jdXJ0YWluOiB2YXIoLS1jb2xvci1lKTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmVoaW5kLWN1cnRhaW4pO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IDo6c2VsZWN0aW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuYSxcXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2tpcCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IC0xMDAlO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnNraXA6Zm9jdXMge1xcbiAgei1pbmRleDogMjtcXG4gIGZvbnQtc2l6ZTogNnZ3O1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4uYXBwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZC1wbGFuZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTgycHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbiAgbWFyZ2luOiA1MHB4IGNhbGMoNTB2dyAtIDkxcHgpO1xcbn1cXG5cXG4uY2FyZC1mYWNlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbn1cXG5cXG4uZnJvbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2tpc2gpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCYXNrZXJ2aWxsZVxcXCIsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBcXFwiRHJvaWQgU2VyaWZcXFwiLCBcXFwiVGltZXNcXFwiLCBzZXJpZjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIHBhZGRpbmc6IDE3cHggMTFweDtcXG59XFxuXFxuLk9wZW5lciB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5ociB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgbWFyZ2luOiAxNXB4IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnNjcm9sbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxuICBib3R0b206IC0zMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzZXJpZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAzMjBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBhbGxvdyBjbGlja2luZyBcXFwiYmVoaW5kXFxcIiB0aGUgYXJyb3dcXFwiICovXFxufVxcblxcbi5CYWNrIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBhbGwgY3ViaWMtYmV6aWVyKDAsIDAuOTksIDAuNTgsIDEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcbiAgei1pbmRleDogMjtcXG4gIGN1cnNvcjogdW5zZXQ7XFxufVxcblxcbi5CYWNrU2VjdGlvbi50cmFuc2l0aW9uaW5nIHtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5CYWNrU2VjdGlvbiBoMSB7XFxuICBmb250LXNpemU6IDEydnc7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpIHNrZXdYKDVkZWcpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiA1MHd2O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDM1MG1zIGVhc2Utb3V0O1xcbn1cXG5cXG4uQmFja1NlY3Rpb246aG92ZXIgaDEge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KSBza2V3WCg1ZGVnKSByb3RhdGVYKDIwZGVnKTtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uIGJ1dHRvbiB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbn1cXG5cXG4uQmFja1NlY3Rpb24gLkJhY2tTZWN0aW9uLWNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTN2bWluO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDh2bWluO1xcbiAgcGFkZGluZzogMnZtaW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5CYWNrU2VjdGlvbiAuQmFja1NlY3Rpb24tY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOm50aC1vZi10eXBlKDRuICsgMSkge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTBkZWcsIHZhcigtLWNvbG9yLWEpLCB2YXIoLS1jb2xvci1kKSk7XFxufVxcblxcbi5CYWNrU2VjdGlvbjpudGgtb2YtdHlwZSg0biArIDIpIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC01MGRlZywgdmFyKC0tY29sb3ItYiksIHZhcigtLWNvbG9yLWUpKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOm50aC1vZi10eXBlKDRuICsgMykge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHZhcigtLWNvbG9yLWUpLCB2YXIoLS1jb2xvci1iKSk7XFxufVxcblxcbi5CYWNrU2VjdGlvbjpudGgtb2YtdHlwZSg0biArIDQpIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0MGRlZywgdmFyKC0tY29sb3ItZSksIHZhcigtLWNvbG9yLWEpKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLWNoaWxkcmVuIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgbWFyZ2luOiAydnc7XFxuICBoeXBoZW5zOiBhdXRvO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmE6aG92ZXIsXFxuYTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgdmFyKC0tY29sb3ItYSksIHZhcigtLWNvbG9yLWUpKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/style.css\n");

/***/ })

})