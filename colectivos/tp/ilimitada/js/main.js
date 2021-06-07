/**
 * Vodafone Reboot Framework: Version 2.14.0. Generation Date: 2021-05-20T14:17:28.900Z
 */

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),performance&&performance.mark&&performance.mark("micro exec");var r=document.querySelector("link[data-ws10-microcss]"),o=function(e,t,n){var r=null;for(;e;){if(e.matches(t)){r=e;break}if(n&&e.matches(n))break;e=e.parentElement}return r}(document.querySelector("#ilimitada"),"[data-ws10-microsite]"),i=o?o.dataset.pathmicrosite:"",c=document.documentElement.clientWidth,a=c>1024,d=c<=1024&&c>=768,s=c<768;function u(){m.cssLoaded||(document.querySelector("#ilimitada")&&document.querySelector("#ilimitada").removeAttribute("style"),m.cssLoaded=!0,m.onStylesReady(),performance&&performance.mark&&performance.mark("micro css ready"))}function l(){document.removeEventListener("ws10:frameworkReady",l),window.ws10.utils.init(document.querySelector("#ilimitada")),m.onFrameworkReady(),performance&&performance.mark&&(performance.mark("micro js ready"),console.timeEnd("microsite instantiation"))}function f(){var e=document.styleSheets,t=0;return[].forEach.call(e,(function(e){var n=e.href||"";-1!==n.indexOf(i+"css/ws10")&&(console.log("WS10 CSS Loaded"),t++),-1!==n.indexOf(i+"css/styles.css")&&(console.log("MICRO CSS Loaded"),t++)})),2===t}f()?f()&&setTimeout(u,100):r?(r.addEventListener("load",u),setTimeout((function(){console.warn("Microsite visible by 3s timeout"),u()}),3e3)):setTimeout(u,100),window.ws10?setTimeout(l,100):document.addEventListener("ws10:frameworkReady",l);var m={isDesktop:a,isTablet:d,isMobile:s,micrositeId:"#ilimitada",micrositePath:i,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},y=m;function v(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}y.onStylesReady=function(){console.log("Site visually ready");var e=document.querySelectorAll('[data-js-vf="_buttonTypeLine"]'),t=document.querySelectorAll('[data-js-vf="_portability"]'),n=document.querySelectorAll('[data-js-vf="_newNumber"]'),r=document.querySelector('[data-js-vf="_secondLine"]'),o=document.querySelector('[data-js-vf="_secondLine2"]'),i=(document.querySelector('[data-js-vf="_showOrHideSticky"]'),document.querySelector('[data-js-vf="_stickyRate"]')),c=document.querySelector('[data-js="_banner"]'),a=document.querySelector('[data-js-vf="_ticket"]'),d=document.querySelector(".MDDfooter"),s=document.querySelector(".mdd-desktop"),u=document.querySelector("#content-nav-desktop"),l=document.documentElement.clientWidth,f=l>1024,m=l<=1024&&l>=768;v(e).forEach((function(e){e.addEventListener("click",(function(){return function(e){"newNumber"===e.getAttribute("data-js-vf-value")?(v(n).forEach((function(e,t){e.classList.remove("ws10-u--hidden")})),v(t).forEach((function(e){e.classList.add("ws10-u--hidden")})),r.classList.add("ws10-u--hidden"),o.classList.add("ws10-u--hidden")):(r.classList.remove("ws10-u--hidden"),o.classList.remove("ws10-u--hidden"),v(t).forEach((function(e,t){e.classList.remove("ws10-u--hidden")})),v(n).forEach((function(e){e.classList.add("ws10-u--hidden")})))}(e)}))})),document.addEventListener("scroll",(function(){c.getBoundingClientRect().bottom-80<0?i.classList.remove("ws10-u--hidden"):i.classList.add("ws10-u--hidden")})),document.addEventListener("scroll",(function(){var e=d.getBoundingClientRect(),t=i.getBoundingClientRect();e.top<t.top&&i.classList.add("ws10-u--hidden")})),(f||m)&&(document.addEventListener("scroll",(function(){var e=c.getBoundingClientRect(),t=50;console.log(e),u&&u.offsetHeight>0&&(t=u.offsetHeight);e.top<0?a.setAttribute("style","position:fixed; top: ".concat(t,"px;")):a.setAttribute("style","position:absolute;")})),document.addEventListener("scroll",(function(){var e=a.offsetHeight,t=s.offsetHeight;d.getBoundingClientRect().top-(e+t)<0?a.classList.add("vf-ticket__opacity0"):a.classList.remove("vf-ticket__opacity0")})))},y.onFrameworkReady=function(){console.log("Site functionality ready");var e=document.querySelectorAll('[data-js-vf="_buttonSpeed"]'),t=document.querySelectorAll('[data-js-vf="_regularRate"]'),n=document.querySelectorAll('[data-js-vf="_recommendedRate"]'),r=document.querySelector('[data-js-vf="recommendedRateCheck"]'),o=document.querySelector('[data-js-vf="regularRateCheck"]'),i=window.location.search;function c(){v(t).forEach((function(e,t){e.classList.remove("ws10-u--hidden"),n[t].classList.add("ws10-u--hidden"),r.removeAttribute("checked",""),o.setAttribute("checked",""),e.removeAttribute("aria-hidden","true"),n[t].setAttribute("aria-hidden","true")}))}function a(){v(n).forEach((function(e,n){e.classList.remove("ws10-u--hidden"),t[n].classList.add("ws10-u--hidden"),o.removeAttribute("checked",""),r.setAttribute("checked",""),e.removeAttribute("aria-hidden","true"),t[n].setAttribute("aria-hidden","true")}))}console.log(i),"?600mbps"===i||"?600mbps="===i?c():a(),v(e).forEach((function(e){e.addEventListener("click",(function(){return function(e){"recommendedRate"===e.getAttribute("data-js-vf-value")?a():c()}(e)}))}))}}]);