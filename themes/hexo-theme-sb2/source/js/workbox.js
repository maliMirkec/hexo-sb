!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=178)}({178:function(e,t,n){"use strict";n.r(t);try{self["workbox:window:5.1.4"]&&_()}catch(e){}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:5.1.4"]&&_()}catch(e){}var a=function(){var e=this;this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))};function s(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var c=function(e,t){this.type=e,Object.assign(this,t)};function u(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function l(){}var d=function(e){var t,n;function o(t,n){var r,o;return void 0===n&&(n={}),(r=e.call(this)||this).t={},r.i=0,r.o=new a,r.u=new a,r.s=new a,r.v=0,r.h=new Set,r.l=function(){var e=r.m,t=e.installing;r.i>0||!s(t.scriptURL,r.g)||performance.now()>r.v+6e4?(r.p=t,e.removeEventListener("updatefound",r.l)):(r.P=t,r.h.add(t),r.o.resolve(t)),++r.i,t.addEventListener("statechange",r.S)},r.S=function(e){var t=r.m,n=e.target,o=n.state,i=n===r.p,a=i?"external":"",s={sw:n,originalEvent:e};!i&&r.j&&(s.isUpdate=!0),r.dispatchEvent(new c(a+o,s)),"installed"===o?r.A=self.setTimeout((function(){"installed"===o&&t.waiting===n&&r.dispatchEvent(new c(a+"waiting",s))}),200):"activating"===o&&(clearTimeout(r.A),i||r.u.resolve(n))},r.O=function(e){var t=r.P;t===navigator.serviceWorker.controller&&(r.dispatchEvent(new c("controlling",{sw:t,originalEvent:e,isUpdate:r.j})),r.s.resolve(t))},r.U=(o=function(e){var t=e.data,n=e.source;return u(r.getSW(),(function(){r.h.has(n)&&r.dispatchEvent(new c("message",{data:t,sw:n,originalEvent:e}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(o.apply(this,e))}catch(e){return Promise.reject(e)}}),r.g=t,r.t=n,navigator.serviceWorker.addEventListener("message",r.U),r}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i,l,d=o.prototype;return d.register=function(e){var t=(void 0===e?{}:e).immediate,n=void 0!==t&&t;try{var r=this;return function(e,t){var n=e();return n&&n.then?n.then(t):t()}((function(){if(!n&&"complete"!==document.readyState)return v(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return r.j=Boolean(navigator.serviceWorker.controller),r.I=r.M(),u(r.R(),(function(e){r.m=e,r.I&&(r.P=r.I,r.u.resolve(r.I),r.s.resolve(r.I),r.I.addEventListener("statechange",r.S,{once:!0}));var t=r.m.waiting;return t&&s(t.scriptURL,r.g)&&(r.P=t,Promise.resolve().then((function(){r.dispatchEvent(new c("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.P&&(r.o.resolve(r.P),r.h.add(r.P)),r.m.addEventListener("updatefound",r.l),navigator.serviceWorker.addEventListener("controllerchange",r.O,{once:!0}),r.m}))}))}catch(e){return Promise.reject(e)}},d.update=function(){try{return this.m?v(this.m.update()):void 0}catch(e){return Promise.reject(e)}},d.getSW=function(){try{return void 0!==this.P?this.P:this.o.promise}catch(e){return Promise.reject(e)}},d.messageSW=function(e){try{return u(this.getSW(),(function(t){return function(e,t){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(e){n(e.data)},e.postMessage(t,[r.port2])}))}(t,e)}))}catch(e){return Promise.reject(e)}},d.M=function(){var e=navigator.serviceWorker.controller;return e&&s(e.scriptURL,this.g)?e:void 0},d.R=function(){try{var e=this;return function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return u(navigator.serviceWorker.register(e.g,e.t),(function(t){return e.v=performance.now(),t}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},i=o,(l=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&r(i.prototype,l),o}(function(){function e(){this.k=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this.B(e).add(t)},t.removeEventListener=function(e,t){this.B(e).delete(t)},t.dispatchEvent=function(e){e.target=this;for(var t,n=i(this.B(e.type));!(t=n()).done;)(0,t.value)(e)},t.B=function(e){return this.k.has(e)||this.k.set(e,new Set),this.k.get(e)},e}());function v(e,t){if(!t)return e&&e.then?e.then(l):Promise.resolve()}if("serviceWorker"in navigator){var f=function(){var e=document.createElement("div");e.className="cta cta--beta cta--omega",e.innerHTML='<div class="cta__content"><p><span>The content has been updated. To see the latest changes, refresh the page, please.</span></p></div><button class="btn" type="button" onclick="window.location.reload()"><span>Refresh</span><span>To see updates</span></button>',document.body.appendChild(e)},p=new d("/sw.js");p.addEventListener("installed",(function(e){console.log("installed"),e.isUpdate||f()})),p.addEventListener("activated",(function(e){console.log("activated"),e.isUpdate?f():console.log("Service Worker has been installed successfully.")})),p.addEventListener("message",(function(e){console.log("message"),"CACHE_UPDATED"===e.data.type&&f()})),p.addEventListener("waiting",(function(){console.log("waiting"),f()})),p.addEventListener("externalinstalled",(function(e){console.log("externalinstalled"),e.isUpdate||f()})),p.addEventListener("externalactivated",(function(e){console.log("externalactivated"),e.isUpdate?f():console.log("Service Worker has been installed successfully.")})),p.addEventListener("externalwaiting",(function(){console.log("externalwaiting"),f()})),p.register()}}});
//# sourceMappingURL=workbox.js.map