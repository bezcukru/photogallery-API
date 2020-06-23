!function(n){var e=window.webpackHotUpdate;window.webpackHotUpdate=function(n,t){!function(n,e){if(!w[n]||!x[n])return;for(var t in x[n]=!1,e)Object.prototype.hasOwnProperty.call(e,t)&&(m[t]=e[t]);0==--g&&0===v&&I()}(n,t),e&&e(n,t)};var t,r=!0,o="8c9402bbbc65f44ccbbb",i=1e4,a={},s=[],d=[];function c(n){var e=j[n];if(!e)return z;var r=function(r){return e.hot.active?(j[r]?-1===j[r].parents.indexOf(n)&&j[r].parents.push(n):(s=[n],t=r),-1===e.children.indexOf(r)&&e.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+n),s=[]),z(r)},o=function(n){return{configurable:!0,enumerable:!0,get:function(){return z[n]},set:function(e){z[n]=e}}};for(var i in z)Object.prototype.hasOwnProperty.call(z,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(n){return"ready"===u&&f("prepare"),v++,z.e(n).then(e,function(n){throw e(),n});function e(){v--,"prepare"===u&&(y[n]||_(n),0===v&&0===g&&I())}},r.t=function(n,e){return 1&e&&(n=r(n)),z.t(n,-2&e)},r}function l(n){var e={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==n,active:!0,accept:function(n,t){if(void 0===n)e._selfAccepted=!0;else if("function"==typeof n)e._selfAccepted=n;else if("object"==typeof n)for(var r=0;r<n.length;r++)e._acceptedDependencies[n[r]]=t||function(){};else e._acceptedDependencies[n]=t||function(){}},decline:function(n){if(void 0===n)e._selfDeclined=!0;else if("object"==typeof n)for(var t=0;t<n.length;t++)e._declinedDependencies[n[t]]=!0;else e._declinedDependencies[n]=!0},dispose:function(n){e._disposeHandlers.push(n)},addDisposeHandler:function(n){e._disposeHandlers.push(n)},removeDisposeHandler:function(n){var t=e._disposeHandlers.indexOf(n);t>=0&&e._disposeHandlers.splice(t,1)},check:k,apply:O,status:function(n){if(!n)return u;p.push(n)},addStatusHandler:function(n){p.push(n)},removeStatusHandler:function(n){var e=p.indexOf(n);e>=0&&p.splice(e,1)},data:a[n]};return t=void 0,e}var p=[],u="idle";function f(n){u=n;for(var e=0;e<p.length;e++)p[e].call(null,n)}var h,m,b,g=0,v=0,y={},x={},w={};function E(n){return+n+""===n?+n:n}function k(n){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=n,f("check"),(e=i,e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=z.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(n){return t(n)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(n){return void t(n)}n(e)}}})).then(function(n){if(!n)return f("idle"),null;x={},y={},w=n.c,b=n.h,f("prepare");var e=new Promise(function(n,e){h={resolve:n,reject:e}});m={};return _(0),"prepare"===u&&0===v&&0===g&&I(),e});var e}function _(n){w[n]?(x[n]=!0,g++,function(n){var e=document.createElement("script");e.charset="utf-8",e.src=z.p+""+n+"."+o+".hot-update.js",document.head.appendChild(e)}(n)):y[n]=!0}function I(){f("ready");var n=h;if(h=null,n)if(r)Promise.resolve().then(function(){return O(r)}).then(function(e){n.resolve(e)},function(e){n.reject(e)});else{var e=[];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&e.push(E(t));n.resolve(e)}}function O(e){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var t,r,i,d,c;function l(n){for(var e=[n],t={},r=e.map(function(n){return{chain:[n],id:n}});r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((d=j[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<d.parents.length;s++){var c=d.parents[s],l=j[c];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([c]),moduleId:i,parentId:c};-1===e.indexOf(c)&&(l.hot._acceptedDependencies[i]?(t[c]||(t[c]=[]),p(t[c],[i])):(delete t[c],e.push(c),r.push({chain:a.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:n,outdatedModules:e,outdatedDependencies:t}}function p(n,e){for(var t=0;t<e.length;t++){var r=e[t];-1===n.indexOf(r)&&n.push(r)}}e=e||{};var h={},g=[],v={},y=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var x in m)if(Object.prototype.hasOwnProperty.call(m,x)){var k;c=E(x);var _=!1,I=!1,O=!1,R="";switch((k=m[x]?l(c):{type:"disposed",moduleId:x}).chain&&(R="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":e.onDeclined&&e.onDeclined(k),e.ignoreDeclined||(_=new Error("Aborted because of self decline: "+k.moduleId+R));break;case"declined":e.onDeclined&&e.onDeclined(k),e.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+R));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(k),e.ignoreUnaccepted||(_=new Error("Aborted because "+c+" is not accepted"+R));break;case"accepted":e.onAccepted&&e.onAccepted(k),I=!0;break;case"disposed":e.onDisposed&&e.onDisposed(k),O=!0;break;default:throw new Error("Unexception type "+k.type)}if(_)return f("abort"),Promise.reject(_);if(I)for(c in v[c]=m[c],p(g,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,c)&&(h[c]||(h[c]=[]),p(h[c],k.outdatedDependencies[c]));O&&(p(g,[k.moduleId]),v[c]=y)}var A,C=[];for(r=0;r<g.length;r++)c=g[r],j[c]&&j[c].hot._selfAccepted&&v[c]!==y&&C.push({module:c,errorHandler:j[c].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(n){!1===w[n]&&function(n){delete installedChunks[n]}(n)});for(var S,U,D=g.slice();D.length>0;)if(c=D.pop(),d=j[c]){var L={},M=d.hot._disposeHandlers;for(i=0;i<M.length;i++)(t=M[i])(L);for(a[c]=L,d.hot.active=!1,delete j[c],delete h[c],i=0;i<d.children.length;i++){var q=j[d.children[i]];q&&((A=q.parents.indexOf(c))>=0&&q.parents.splice(A,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(d=j[c]))for(U=h[c],i=0;i<U.length;i++)S=U[i],(A=d.children.indexOf(S))>=0&&d.children.splice(A,1);for(c in f("apply"),o=b,v)Object.prototype.hasOwnProperty.call(v,c)&&(n[c]=v[c]);var P=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(d=j[c])){U=h[c];var H=[];for(r=0;r<U.length;r++)if(S=U[r],t=d.hot._acceptedDependencies[S]){if(-1!==H.indexOf(t))continue;H.push(t)}for(r=0;r<H.length;r++){t=H[r];try{t(U)}catch(n){e.onErrored&&e.onErrored({type:"accept-errored",moduleId:c,dependencyId:U[r],error:n}),e.ignoreErrored||P||(P=n)}}}for(r=0;r<C.length;r++){var B=C[r];c=B.module,s=[c];try{z(c)}catch(n){if("function"==typeof B.errorHandler)try{B.errorHandler(n)}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:t,originalError:n}),e.ignoreErrored||P||(P=t),P||(P=n)}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:c,error:n}),e.ignoreErrored||P||(P=n)}}return P?(f("fail"),Promise.reject(P)):(f("idle"),new Promise(function(n){n(g)}))}var j={};function z(e){if(j[e])return j[e].exports;var t=j[e]={i:e,l:!1,exports:{},hot:l(e),parents:(d=s,s=[],d),children:[]};return n[e].call(t.exports,t,t.exports,c(e)),t.l=!0,t.exports}z.m=n,z.c=j,z.d=function(n,e,t){z.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},z.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},z.t=function(n,e){if(1&e&&(n=z(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(z.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)z.d(t,r,function(e){return n[e]}.bind(null,r));return t},z.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return z.d(e,"a",e),e},z.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},z.p="/",z.h=function(){return o},c(1)(z.s=1)}([function(n,e,t){(e=n.exports=t(3)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);",""]),e.push([n.i,'/* http://meyerweb.com/eric/tools/css/reset/\r\n   v2.0-modified | 20110126\r\n   License: none (public domain)\r\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n  outline: 0; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration,\ninput[type="search"]::-webkit-search-results-button,\ninput[type="search"]::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\ninput[type="search"] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-sizing: content-box;\n  -moz-box-sizing: content-box;\n  box-sizing: content-box; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top;\n  resize: vertical; }\n\n/**\r\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n */\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n  *display: inline;\n  *zoom: 1;\n  max-width: 100%; }\n\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\r\n * Known issue: no IE 6 support.\r\n */\n[hidden] {\n  display: none; }\n\n/**\r\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *    `em` units.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-size: 100%;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\r\n * Address `outline` inconsistency between Chrome and other browsers.\r\n */\na:focus {\n  outline: thin dotted; }\n\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:active,\na:hover {\n  outline: 0; }\n\n/**\r\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\r\n * 2. Improve image quality when scaled in IE 7.\r\n */\nimg {\n  border: 0;\n  /* 1 */\n  -ms-interpolation-mode: bicubic;\n  /* 2 */ }\n\n/**\r\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\r\n */\nfigure {\n  margin: 0; }\n\n/**\r\n * Correct margin displayed oddly in IE 6/7.\r\n */\nform {\n  margin: 0; }\n\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct color not being inherited in IE 6/7/8/9.\r\n * 2. Correct text not wrapping in Firefox 3.\r\n * 3. Correct alignment displayed oddly in IE 6/7.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  white-space: normal;\n  /* 2 */\n  *margin-left: -7px;\n  /* 3 */ }\n\n/**\r\n * 1. Correct font size not being inherited in all browsers.\r\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\r\n *    and Chrome.\r\n * 3. Improve appearance and consistency in all browsers.\r\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n  vertical-align: baseline;\n  /* 3 */\n  *vertical-align: middle;\n  /* 3 */ }\n\n/**\r\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\nbutton,\ninput {\n  line-height: normal; }\n\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\r\n * Correct `select` style inheritance in Firefox 4+ and Opera.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\r\n *    Known issue: inner spacing remains in IE 6.\r\n */\nbutton,\nhtml input[type="button"],\ninput[type="reset"],\ninput[type="submit"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n  *overflow: visible;\n  /* 4 */ }\n\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\r\n * 1. Address box sizing set to content-box in IE 8/9.\r\n * 2. Remove excess padding in IE 8/9.\r\n * 3. Remove excess padding in IE 7.\r\n *    Known issue: excess padding remains in IE 6.\r\n */\ninput[type="checkbox"],\ninput[type="radio"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n  *height: 13px;\n  /* 3 */\n  *width: 13px;\n  /* 3 */ }\n\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  /* 2 */\n  box-sizing: content-box; }\n\n/**\r\n * Remove inner padding and search cancel button in Safari 5 and Chrome\r\n * on OS X.\r\n */\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Remove inner padding and border in Firefox 3+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\r\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\r\n * 2. Improve readability and alignment in all browsers.\r\n */\ntextarea {\n  overflow: auto;\n  /* 1 */\n  vertical-align: top;\n  /* 2 */ }\n\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n  color: #222; }\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none; }\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none; }\n\nimg {\n  vertical-align: middle; }\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\ntextarea {\n  resize: vertical; }\n\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0; }\n\nhtml, body {\n  font-size: 16px;\n  font-family: \'Montserrat\', sans-serif;\n  color: black; }\n\nh1 {\n  font-size: 1.8rem;\n  margin: 15px; }\n\nh2 {\n  font-size: 1.6rem;\n  margin: 15px; }\n\np {\n  margin-bottom: 15px;\n  line-height: 1.5; }\n\n* {\n  box-sizing: border-box;\n  scroll-behavior: smooth; }\n\n.container {\n  width: 100%;\n  max-width: 1000px;\n  margin: 0 auto; }\n\n.featured-dog {\n  padding: 15px;\n  border: 1px solid gray;\n  display: flex;\n  flex: 1; }\n  .featured-dog__wrapper {\n    flex: 1;\n    height: 400px;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden; }\n  .featured-dog__background {\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: 15px;\n    filter: blur(15px);\n    height: 110%;\n    width: 110%;\n    margin: -5%;\n    background-size: cover; }\n  .featured-dog__image {\n    position: relative;\n    z-index: 2; }\n    .featured-dog__image img {\n      width: 100%;\n      max-height: 100%; }\n  .featured-dog__description {\n    flex: 1;\n    padding: 0 15px; }\n\n.tiles {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -15px; }\n  .tiles__tile {\n    flex: 0 1 33.3%;\n    padding: 0 15px;\n    margin-bottom: 7.5px; }\n    .tiles__tile--content {\n      padding: 15px;\n      cursor: pointer;\n      background: teal;\n      color: white;\n      text-align: center;\n      transition: 0.5s; }\n      .tiles__tile--content:hover {\n        background-color: #004d4d; }\n      .tiles__tile--content:active {\n        transform: translateY(5px); }\n\n.spinner {\n  position: absolute;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  z-index: 3; }\n  .spinner__content {\n    width: 40px;\n    height: 40px;\n    background: teal;\n    animation: rotateplane 1.2s infinite ease-in-out; }\n  .spinner--visible {\n    display: flex; }\n\n@keyframes rotateplane {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n  50% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(0deg); }\n  100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-180deg); } }\n',""])},function(n,e,t){"use strict";t.r(e);t(2);class r{constructor(){this.apiUrl="https://dog.ceo/api",this.imgEl=document.querySelector(".featured-dog img"),this.backgroundEl=document.querySelector(".featured-dog__background"),this.tilesEl=document.querySelector(".tiles"),this.descriptionEl=document.querySelector(".featured-dog__description"),this.spinnerEl=document.querySelector(".spinner"),this.init()}showLoading(){this.spinnerEl.classList.add("spinner--visible")}hideLoading(){this.spinnerEl.classList.remove("spinner--visible")}showAllBreeds(){return fetch(`${this.apiUrl}/breeds/list/all`).then(n=>n.json()).then(n=>n.message).catch(n=>console.log("Coś poszło nie tak! "+n))}getRandomImage(){return fetch(`${this.apiUrl}/breeds/image/random`).then(n=>n.json()).then(n=>n.message)}getRandomImageByBreed(n){return fetch(`${this.apiUrl}/breed/${n}/images/random`).then(n=>n.json()).then(n=>n.message)}init(){this.showLoading(),this.getRandomImage().then(n=>this.showImageWhenReady(n)),this.showAllBreeds().then(n=>{for(const e in n)if(console.log(e,n[e]),0===n[e].length)this.addBreed(e);else for(const t of n[e])this.addBreed(e,t)})}showImageWhenReady(n){this.imgEl.setAttribute("src",n),this.backgroundEl.style.backgroundImage=`url("${n}")`,this.hideLoading()}addBreed(n,e){let t,r;void 0===e?(t=n,r=n):(t=`${e} ${n}`,r=`${n}/${e}`);const o=document.createElement("div");o.classList.add("tiles__tile");const i=document.createElement("div");i.classList.add("tiles__tile--content"),i.innerText=t,i.addEventListener("click",()=>{window.scrollTo(0,0),this.showLoading(),this.getRandomImageByBreed(r).then(n=>{this.showImageWhenReady(n),this.descriptionEl.textContent=`You are now looking at a gorgeous ${t}!`})}),o.appendChild(i),this.tilesEl.appendChild(o)}}document.addEventListener("DOMContentLoaded",()=>{new r})},function(n,e,t){var r=t(0);"string"==typeof r&&(r=[[n.i,r,""]]);var o={transform:void 0},i=t(4)(r,o);r.locals&&(n.exports=r.locals),r.locals||n.hot.accept(0,function(){var e=t(0);"string"==typeof e&&(e=[[n.i,e,""]]),i(e)}),n.hot.dispose(function(){i()})},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var e={};return function(n){return void 0===e[n]&&(e[n]=function(n){return document.querySelector(n)}.call(this,n)),e[n]}}(),d=null,c=0,l=[],p=t(5);function u(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function f(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function h(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function b(n){var e=document.createElement("style");return n.attrs.type="text/css",g(e,n.attrs),h(n,e),e}function g(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function v(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var a=c++;t=d||(d=b(e)),r=w.bind(null,t,a,!1),o=w.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",g(e,n.attrs),h(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){m(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=f(n,e);return u(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}n&&u(f(n,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete i[s.id]}}}};var y,x=(y=[],function(n,e){return y[n]=e,y.filter(Boolean).join("\n")});function w(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);