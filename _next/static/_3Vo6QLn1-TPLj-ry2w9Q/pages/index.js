(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r=u(n("q1tI")),o=u(n("Xuae")),i=n("lwAK"),a=n("FYa8"),c=n("/0+H");function u(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var l=f[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var s=o.props[l],d=r[l]||new Set;d.has(s)?i=!1:(d.add(s),r[l]=d)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,o.default)();function m(e){var t=e.children;return(r.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},RNiq:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t);var i=n("q1tI"),a=n.n(i),c=n("8Kt/"),u=n.n(c),l=function(e){return function(e,t,n){return e<t?t:e<n?e:n}(e,0,1)};function s(){return window}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=a.a.createElement,p=500;function m(e){var t=e.title,n=e.children,r=e.onOpen,o=e.onClose,a=e.active,c=e.index,u=Object(i.useState)(!1),l=u[0],f=u[1],m="".concat(c<2?"top":"bottom"," ").concat(c%2===0?"left":"right");Object(i.useEffect)((function(){f(!0),setTimeout((function(){return f(!1)}),p)}),[a]);var h=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"string"===typeof t?n+t.length:t.props?e(t.props.children,n):Array.isArray(t)?t.reduce((function(t,n){return e(n,t)}),n):e([t],n)}(n),b=.5*Math.sqrt(s().innerHeight*s().innerWidth/h),v={transformOrigin:m,transitionDuration:"".concat(p,"ms")},y=3.5*s().innerHeight/s().innerWidth,w={transform:"scaleY(".concat(y,") skewX(5deg)")};return d("div",{style:v,className:"BackSection ".concat(a&&"active"," ").concat(l&&"transitioning"),onClick:r},a&&d("button",{className:"BackSection-close",onClick:o},"\u2a2f"),!a&&d("h1",{style:w},d("button",{onClick:r},t)),a&&d("div",{className:"BackSection-children",style:{fontSize:b}},n))}var h=a.a.createElement,b={formidable:"https://formidable.com/","u-denver":"https://daniels.du.edu/entrepreneurship/entrepreneurship-degree-programs",jumpshell:"https://www.jumpshell.com/",autotegrity:"https://www.cogolabs.com/portfolio/autotegrity",ni:"http://www.ni.com/",ebm:"http://web.mit.edu/ebm/www/",disconnect:"https://thedisconnect.co/","disconnect-1":"https://thedisconnect.co/one","disconnect-2":"https://thedisconnect.co/two","disconnect-3":"https://thedisconnect.co/three","perf-land":"https://perf.land/","offline-only":"https://chris.bolin.co/offline/",elements:"https://chris.bolin.co/elements/",tessellate:"https://chris.bolin.co/tessellate/",enchiridion:"https://chris.bolin.co/enchiridion/",skycoins:"https://chris.bolin.co/skycoins/",shipwrecked:"http://www.blurb.com/books/1234410-shipwrecked",travels:"https://rookievagabonds.tumblr.com/",dinojs:"https://www.youtube.com/watch?v=nhuvY0CT064","me-convention":"https://www.youtube.com/watch?v=6wjqLAaCAyw","offline-talk":"https://www.youtube.com/watch?v=iavC1oWvtJ8&t=2591s","debugging-talk":"https://www.youtube.com/watch?v=ccG9L2Pg4io&t=1035",lifehacker:"https://lifehacker.com/you-cant-read-this-website-until-you-turn-off-your-inte-1822776654",vice:"https://motherboard.vice.com/en_us/article/kzzgjn/this-website-only-works-when-youre-offline",cbc:"http://www.cbc.ca/radio/spark/want-to-look-at-this-guy-s-website-go-offline-1.4281329",cjr:"https://www.cjr.org/innovations/disconnect-magazine-only-works-offline.php","le-monde":"http://www.lemonde.fr/big-browser/article/2017/08/29/et-si-se-deconnecter-vous-aidait-a-mieux-profiter-des-richesses-d-internet_5177910_4832693.html","the-next-web":"https://thenextweb.com/insider/2017/08/21/this-manifesto-against-internet-addiction-can-only-be-viewed-offline/","computational-engineering":"https://computationalengineering.mit.edu/",thesis:"http://dspace.mit.edu/handle/1721.1/82189",email:"mailto:bolin.chris@gmail.com"},v=function(e){var t=e.name,n=e.children;return h("a",{href:b[t]||console.error("NOT FOUND:",t,n),rel:"noopener noreferrer",children:n})},y=v,w=a.a.createElement;function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var k=[w(m,{title:"Chris"},"Software engineer and artist in Denver. Engineering leadership at"," ",w(y,{name:"formidable"},"Formidable"),". Founder of"," ",w(y,{name:"disconnect"},"The Disconnect"),". Most recent project:"," ",w(y,{name:"perf-land"},"Perf Land"),". [",w((function(e){var t=Object(i.useState)(!1),n=t[0],r=t[1];return Object(i.useEffect)((function(){return r(!0)}),[r]),!!n&&h(v,e)}),{name:"email"},"Email me"),"]"),w(m,{title:"Make"},w("b",null,"2020")," ",w(y,{name:"perf-land"},"Perf Land")," ",w("b",null,"2019")," ",w(y,{name:"disconnect-3"},"Disconnect #3")," ",w("b",null,"2018")," ",w(y,{name:"elements"},"Elements")," ",w(y,{name:"disconnect-2"},"Disconnect #2")," ",w(y,{name:"disconnect-1"},"Disconnect #1")," ",w("b",null,"2017")," ",w(y,{name:"offline-only"},"Offline Only")," ",w(y,{name:"travels"},"Travels")," ",w("b",null,"2016")," ",w(y,{name:"tessellate"},"Tessellate")," ",w(y,{name:"skycoins"},"Skycoins")," ",w("b",null,"pre-2016")," ",w(y,{name:"shipwrecked"},"Shipwrecked")," ",w(y,{name:"enchiridion"},"Enchiridion")),w(m,{title:"Talk"},w("b",null,"2019")," ",w(y,{name:"debugging-talk"},"Debugging")," ",w("b",null,"2018")," ",w(y,{name:"me-convention"},"SXSW me Convention")," ",w(y,{name:"dinojs"},"DinosaurJS")," ",w(y,{name:"cjr"},"CJR")," ",w(y,{name:"lifehacker"},"Lifehacker")," ",w("b",null,"2017")," ",w(y,{name:"offline-talk"},"Offline websites")," ",w(y,{name:"vice"},"Vice")," ",w(y,{name:"le-monde"},"Le Monde")," ",w(y,{name:"the-next-web"},"The Next Web")," ",w(y,{name:"cbc"},"CBC")),w(m,{title:"Work"},"VP Engineering, ",w(y,{name:"formidable"},"Formidable"),". Adjunct,"," ",w(y,{name:"u-denver"},"U of Denver"),". Engineer, Jumpshell. Data scientist, ",w(y,{name:"autotegrity"},"Autotegrity"),". Researcher,"," ",w(y,{name:"ebm"},"MIT EBM Lab"),". Engineer, ",w(y,{name:"ni"},"NI"),". Master\u2019s Computational Engineering, MIT,"," ",w(y,{name:"thesis"},"numerical simulation of environmental impact"),". BS Mechanical Engineering, U of Nebraska.")];function x(e){var t=e.x,n=e.style;if(t<.6)return null;var r=t>.6?null:"none",o=(t-.6)/.4,c=Object(i.useState)(null),u=c[0],l=c[1],s=function(e){l(null),e.stopPropagation()},d=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({display:r,opacity:o,filter:"brightness(".concat(o,")")},n);return w("div",{className:"Back",style:d},k.map((function(e,t){return a.a.cloneElement(e,{index:t,key:e.props.title,onOpen:function(){return l(e.props.title)},onClose:s,active:e.props.title===u})})))}var S=a.a.createElement,O=[{value:"var(--color-a)",barXScale:5.2,gradientPosition:"41%"},{value:"var(--color-b)",barXScale:4.7,gradientPosition:"47%"},{value:"var(--color-c)",barXScale:4.4,gradientPosition:"59%"},{value:"var(--color-d)",barXScale:4,gradientPosition:"81%"},{value:"var(--color-e)",barXScale:3.5,gradientPosition:"100%"}],j=("\n  radial-gradient(\n    circle at top right,\n    black 0%,\n    ".concat(O.map((function(e){var t=e.value,n=e.gradientPosition;return"".concat(t," ").concat(n)})),"\n    )\n"),function(e){var t=e.x,n=e.width,r=e.left,o=e.color,i=100*l(t);return S("div",{style:{width:n,height:i+"%",backgroundColor:o,left:r,position:"absolute",bottom:0}})}),E=function(e){var t=e.x,n=e.mounted,r=t<.5?1:0;if(!r)return null;var o={opacity:1-10*t};return S("div",{className:"card-face front",style:{zIndex:r}},S("div",{className:"title"},"wannabe polymath",S("hr",null)),S("div",{className:"scroll ".concat(n||"hidden"),style:o},"(scroll)"),O.map((function(e,n){var r=e.value,o=e.barXScale;return S(j,{key:n,color:r,left:"".concat(20*n,"%"),width:"20%",x:t*o})})))},C=function(e){var t=e.x;return S("div",{className:"card-face",style:{zIndex:t>.5?1:0}})},P=function(e){var t=e.x,n=e.mounted,r=e.style;return S("div",{style:r,className:"card-plane"},S(E,{x:t,mounted:n}),S(C,{x:t}))},A=function(e){var t=e.x,n=Math.floor(255*(1-t)),r="translateY(".concat(20*t,"px)"),o=l(10*(.9-t)),i={transform:r,WebkitTransform:r,color:"rgb(".concat(n,",").concat(n,",").concat(n,")"),opacity:o,display:o>0?"block":"none"};return S("div",{className:"arrow",style:i},"\u2193")},_=function(){return S(u.a,null,S("title",null,"Chris Bolin"),S("meta",{name:"Description",content:"Chris Bolin is a software engineer and artist based in Denver."}),S("link",{rel:"icon",sizes:"16x16 32x32 64x64",href:"favicon.ico"}),S("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=5.0"}))},M=function(){return S("a",{className:"skip",href:"#down"},"skip to content.")},D=function(){return S("div",{id:"down"})};t.default=function(){var e=Object(i.useState)(0),t=e[0],n=e[1],r=Object(i.useState)(!1),c=r[0],u=r[1],s=Object(i.useMemo)((function(){return"undefined"!==typeof navigator&&navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|IEMobile/)?1.5:3})),f=Object(i.useCallback)((function(){return n(l(window.scrollY/(window.innerHeight*(s-1))))}),[n]);Object(i.useEffect)((function(){window.addEventListener("scroll",f),window.addEventListener("resize",f),window.addEventListener("touchmove",f),u(!0)}),[u]);var d={height:c?"".concat(100*s,"vh"):"auto"},p=o(function(e){var t=180*(e<.5?e:l(2*e-.5)),n=e*e*e*e,r="\n      rotateZ(".concat(90*e,"deg)\n      rotateX(").concat(t,"deg)\n      scale(").concat(1+20*n,")\n    "),o="\n    scale(".concat(n,")\n    rotateZ(").concat(90*e-90,"deg)\n  ");return[{transform:r,WebkitTransform:r},{transform:o,WebkitTransform:o}]}(t),2),m=p[0],h=p[1];return S(a.a.Fragment,null,S(_,null),S("div",{className:"app",style:d},t<.5?S(M,null):null,S("div",{className:"container"},S(P,{style:m,x:t,mounted:c}),S(x,{x:t,style:h})),S(A,{x:t})),S(D,null))}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),i=n("W8MJ"),a=n("7W2i"),c=n("a1gu"),u=n("Nsbk"),l=n("RIqP");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){a(l,c);var u=s(l);function l(e){var i;return r(this,l),i=u.call(this,e),d&&(t.add(o(i)),n(o(i))),i}return i(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);