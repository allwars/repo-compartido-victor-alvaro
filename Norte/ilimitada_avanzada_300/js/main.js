/**
 * Vodafone Reboot Framework: Version 2.11.4. Generation Date: 2021-06-15T13:54:10.645Z
 */

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),performance&&performance.mark&&performance.mark("micro exec");var r=document.querySelector("link[data-ws10-microcss]"),o=function(e,t,n){var r=null;for(;e;){if(e.matches(t)){r=e;break}if(n&&e.matches(n))break;e=e.parentElement}return r}(document.querySelector("#maxi"),"[data-ws10-microsite]"),i=o?o.dataset.pathmicrosite:"",c=document.documentElement.clientWidth,a=c>1024,d=c<=1024&&c>=768,u=c<768;function s(){f.cssLoaded||(document.querySelector("#maxi")&&document.querySelector("#maxi").removeAttribute("style"),f.cssLoaded=!0,f.onStylesReady(),performance&&performance.mark&&performance.mark("micro css ready"))}function l(){document.removeEventListener("ws10:frameworkReady",l),window.ws10.utils.init(document.querySelector("#maxi")),f.onFrameworkReady(),performance&&performance.mark&&(performance.mark("micro js ready"),console.timeEnd("microsite instantiation"))}function m(){var e=document.styleSheets,t=0;return[].forEach.call(e,(function(e){var n=e.href||"";-1!==n.indexOf(i+"css/ws10")&&(console.log("WS10 CSS Loaded"),t++),-1!==n.indexOf(i+"css/styles.css")&&(console.log("MICRO CSS Loaded"),t++)})),2===t}m()?m()&&setTimeout(s,100):r?(r.addEventListener("load",s),setTimeout((function(){console.warn("Microsite visible by 3s timeout"),s()}),3e3)):setTimeout(s,100),window.ws10?setTimeout(l,100):document.addEventListener("ws10:frameworkReady",l);var f={isDesktop:a,isTablet:d,isMobile:u,micrositeId:"#maxi",micrositePath:i,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},y=f;function v(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}window.onload=function(){var e=document.getElementById("template").innerHTML,t=Handlebars.compile(e)({name:"Luke",power:"force"});document.getElementById("target").innerHTML=t},y.onStylesReady=function(){console.log("Site visually ready");var e=document.querySelectorAll('[data-js-vf="_buttonTypeLine"]'),t=document.querySelectorAll('[data-js-vf="_portability"]'),n=document.querySelectorAll('[data-js-vf="_newNumber"]'),r=document.querySelector('[data-js-vf="_secondLine"]'),o=document.querySelector('[data-js-vf="_secondLine2"]'),i=(document.querySelector('[data-js-vf="_showOrHideSticky"]'),document.querySelector('[data-js-vf="_stickyRate"]')),c=document.querySelector('[data-js="_banner"]'),a=document.querySelector('[data-js-vf="_ticket"]'),d=document.querySelector(".MDDfooter"),u=document.querySelector(".mdd-desktop"),s=document.documentElement.clientWidth,l=s>1024,m=s<=1024&&s>=768;function f(){c.getBoundingClientRect().bottom-80<0?i.classList.remove("ws10-u--hidden"):i.classList.add("ws10-u--hidden")}function y(){var e=d.getBoundingClientRect(),t=i.getBoundingClientRect();e.top<t.top&&i.classList.add("ws10-u--hidden")}function p(){var e=a.offsetHeight,t=u.offsetHeight;d.getBoundingClientRect().top-(e+t)<0?a.classList.add("vf-ticket__opacity0"):a.classList.remove("vf-ticket__opacity0")}function h(){var e=c.getBoundingClientRect();console.log(e),e.top<0?a.setAttribute("style","position:fixed; top: 70px;"):a.setAttribute("style","position:absolute;  top: 40px;")}window.matchMedia("(min-width: 768px)").matches?(h(),document.addEventListener("scroll",(function(){h(),p(),f(),y()}))):document.addEventListener("scroll",(function(){f(),y()})),v(e).forEach((function(e){e.addEventListener("click",(function(){return actionsType(e)}))})),v(e).forEach((function(e){e.addEventListener("click",(function(){return function(e){"newNumber"===e.getAttribute("data-js-vf-value")?(v(n).forEach((function(e,t){e.classList.remove("ws10-u--hidden")})),v(t).forEach((function(e){e.classList.add("ws10-u--hidden")})),r.classList.add("ws10-u--hidden"),o.classList.add("ws10-u--hidden")):(r.classList.remove("ws10-u--hidden"),o.classList.remove("ws10-u--hidden"),v(t).forEach((function(e,t){e.classList.remove("ws10-u--hidden")})),v(n).forEach((function(e){e.classList.add("ws10-u--hidden")})))}(e)}))})),document.addEventListener("scroll",f),document.addEventListener("scroll",y),(l||m)&&(document.addEventListener("scroll",h),document.addEventListener("scroll",p))},y.onFrameworkReady=function(){console.log("Site functionality ready");var e=document.querySelectorAll('[data-js-vf="_buttonSpeed"]'),t=document.querySelectorAll('[data-js-vf="_regularRate"]'),n=document.querySelectorAll('[data-js-vf="_recommendedRate"]'),r=document.querySelector('[data-js-vf="recommendedRateCheck"]'),o=document.querySelector('[data-js-vf="regularRateCheck"]'),i=window.location.search;function c(){v(t).forEach((function(e,t){e.classList.remove("ws10-u--hidden"),n[t].classList.add("ws10-u--hidden"),r.removeAttribute("checked",""),o.setAttribute("checked",""),e.removeAttribute("aria-hidden","true"),n[t].setAttribute("aria-hidden","true")}))}function a(){v(n).forEach((function(e,n){e.classList.remove("ws10-u--hidden"),t[n].classList.add("ws10-u--hidden"),o.removeAttribute("checked",""),r.setAttribute("checked",""),e.removeAttribute("aria-hidden","true"),t[n].setAttribute("aria-hidden","true")}))}console.log(i),"?300mbps"===i||"?300mbps="===i?c():a(),v(e).forEach((function(e){e.addEventListener("click",(function(){return function(e){"recommendedRate"===e.getAttribute("data-js-vf-value")?a():c()}(e)}))}))}}]);