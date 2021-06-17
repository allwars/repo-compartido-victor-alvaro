/**
 * Vodafone Reboot Framework: Version 2.11.4. Generation Date: 2021-06-16T13:40:50.279Z
 */

!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),performance&&performance.mark&&performance.mark("micro exec");var n,o,a=document.querySelector("link[data-ws10-microcss]"),i=function(e,t,r){var n=null;for(;e;){if(e.matches(t)){n=e;break}if(r&&e.matches(r))break;e=e.parentElement}return n}(document.querySelector("#plp-rates"),"[data-ws10-microsite]"),s=i?i.dataset.pathmicrosite:"",c=document.documentElement.clientWidth,d=c>1024,u=c<=1024&&c>=768,l=c<768;function f(){y.cssLoaded||(document.querySelector("#plp-rates")&&document.querySelector("#plp-rates").removeAttribute("style"),y.cssLoaded=!0,y.onStylesReady(),performance&&performance.mark&&performance.mark("micro css ready"))}function m(){document.removeEventListener("ws10:frameworkReady",m),window.ws10.utils.init(document.querySelector("#plp-rates")),y.onFrameworkReady(),performance&&performance.mark&&(performance.mark("micro js ready"),console.timeEnd("microsite instantiation"))}function v(){var e=document.styleSheets,t=0;return[].forEach.call(e,(function(e){var r=e.href||"";-1!==r.indexOf(s+"css/ws10")&&(console.log("WS10 CSS Loaded"),t++),-1!==r.indexOf(s+"css/styles.css")&&(console.log("MICRO CSS Loaded"),t++)})),2===t}v()?v()&&setTimeout(f,100):a?(n=setInterval((function(){a.sheet.rules&&a.sheet.rules.length>0&&(clearInterval(n),clearTimeout(o),f())}),100),o=setTimeout((function(){console.warn("Microsite visible by 3s timeout"),clearInterval(n),clearTimeout(o),f()}),3e3)):setTimeout(f,100),window.ws10?setTimeout(m,100):document.addEventListener("ws10:frameworkReady",m);var y={isDesktop:d,isTablet:u,isMobile:l,micrositeId:"#plp-rates",micrositePath:s,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},h=y;function b(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}h.onStylesReady=function(){console.log("Site visually ready");var e=document.querySelectorAll('[data-js-vf="_buttonVelocity"]'),t=document.querySelector('[data-js-vf="_badgeTotal"]'),r=document.querySelectorAll('[data-js-vf="_buttonTypeLine"]'),n=document.querySelectorAll('[data-js-vf="_portability"]'),o=document.querySelectorAll('[data-js-vf="_newNumber"]');b(e).forEach((function(r){r.addEventListener("click",(function(){return r=document.querySelectorAll('[data-js-vf="_priceTotal"]'),void b(e).forEach((function(e,n){e.classList.contains("vf-active")?(e.classList.remove("vf-active"),e.classList.remove("vf-bold"),r[n].classList.add("ws10-u--hidden"),t.classList.add("ws10-u--hidden")):(e.classList.add("vf-active"),e.classList.add("vf-bold"),r[n].classList.remove("ws10-u--hidden"),t.classList.remove("ws10-u--hidden"))}));var r}))}));var a=document.querySelectorAll('[data-js-vf="_buttonVelocityMaxi"]');document.querySelector('[data-js-vf="_badgeMaxi"]');b(a).forEach((function(e){e.addEventListener("click",(function(){return e=document.querySelectorAll('[data-js-vf="_priceMaxi"]'),void b(a).forEach((function(t,r){t.classList.contains("vf-active")?(t.classList.remove("vf-active"),t.classList.remove("vf-bold"),e[r].classList.add("ws10-u--hidden")):(t.classList.add("vf-active"),t.classList.add("vf-bold"),e[r].classList.remove("ws10-u--hidden"))}));var e}))}));var i=document.querySelectorAll('[data-js-vf="_buttonVelocityIlimitada"]'),s=document.querySelector('[data-js-vf="_badgeIlimitada"]');b(i).forEach((function(e){e.addEventListener("click",(function(){return e=document.querySelectorAll('[data-js-vf="_priceIlimitada"]'),void b(i).forEach((function(t,r){t.classList.contains("vf-active")?(t.classList.remove("vf-active"),t.classList.remove("vf-bold"),e[r].classList.add("ws10-u--hidden"),s.classList.add("ws10-u--hidden")):(t.classList.add("vf-active"),t.classList.add("vf-bold"),e[r].classList.remove("ws10-u--hidden"),s.classList.remove("ws10-u--hidden"))}));var e}))})),b(r).forEach((function(e){e.addEventListener("click",(function(){return function(e){"newNumber"===e.getAttribute("data-js-vf-value")?(b(o).forEach((function(e,t){e.classList.remove("ws10-u--hidden"),n[t].classList.add("ws10-u--hidden")})),secondLine.classList.add("ws10-u--hidden"),secondLine2.classList.add("ws10-u--hidden")):(secondLine.classList.remove("ws10-u--hidden"),secondLine2.classList.remove("ws10-u--hidden"),b(n).forEach((function(e,t){e.classList.remove("ws10-u--hidden"),o[t].classList.add("ws10-u--hidden")})))}(e)}))}));var c=document.querySelector('[data-vfms-js="buttonMovil"]'),d=window.location.search;"movil"==new URLSearchParams(d).get("c")&&setTimeout((function(){c.click()}),100)},h.onFrameworkReady=function(){console.log("Site functionality ready");var e=document.querySelectorAll('[data-js-vf="_buttonSpeed"]'),t=document.querySelectorAll('[data-js-vf="_regularRate"]'),r=document.querySelectorAll('[data-js-vf="_recommendedRate"]'),n=document.querySelector('[data-js-vf="recommendedRateCheck"]'),o=document.querySelector('[data-js-vf="regularRateCheck"]'),a=window.location.search;function i(){b(t).forEach((function(e,t){e.classList.remove("ws10-u--hidden"),r[t].classList.add("ws10-u--hidden"),n.removeAttribute("checked",""),o.setAttribute("checked",""),e.removeAttribute("aria-hidden","true"),r[t].setAttribute("aria-hidden","true")}))}function s(){b(r).forEach((function(e,r){e.classList.remove("ws10-u--hidden"),t[r].classList.add("ws10-u--hidden"),o.removeAttribute("checked",""),n.setAttribute("checked",""),e.removeAttribute("aria-hidden","true"),t[r].setAttribute("aria-hidden","true")}))}console.log(a),"?600mbps"===a||"?600mbps="===a?i():s(),b(e).forEach((function(e){e.addEventListener("click",(function(){return function(e){"recommendedRate"===e.getAttribute("data-js-vf-value")?s():i()}(e)}))}))}}]);