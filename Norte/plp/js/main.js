/**
 * Vodafone Reboot Framework: Version 2.15.0. Generation Date: 2021-06-03T06:50:59.542Z
 */

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=document.querySelector("link[data-ws10-microcss]"),o=function(e,t,n){var r=null;for(;e;){if(e.matches(t)){r=e;break}if(n&&e.matches(n))break;e=e.parentElement}return r}(document.querySelector("#plp"),"[data-ws10-microsite]"),a=o?o.dataset.pathmicrosite:"",i=document.documentElement.clientWidth,s=i>1024,c=i<=1024&&i>=768,d=i<768;function l(){v.cssLoaded||(document.querySelector("#plp").removeAttribute("style"),v.cssLoaded=!0,v.onStylesReady())}function u(){document.removeEventListener("ws10:frameworkReady",u),window.ws10.utils.init(document.querySelector("#plp")),v.onFrameworkReady()}function f(){var e=document.styleSheets,t=0;return[].forEach.call(e,(function(e){var n=e.href||"";-1!==n.indexOf(a+"css/ws10")&&(console.log("WS10 CSS Loaded"),t++),-1!==n.indexOf(a+"css/styles.css")&&(console.log("MICRO CSS Loaded"),t++)})),2===t}f()?f()&&setTimeout(l,100):r?(r.addEventListener("load",l),setTimeout(l,3e3)):setTimeout(l,100),window.ws10?setTimeout(u,100):document.addEventListener("ws10:frameworkReady",u);var v={isDesktop:s,isTablet:c,isMobile:d,micrositeId:"#plp",micrositePath:a,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},m=v;function y(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}m.onStylesReady=function(){console.log("Site visually ready");var e=document.querySelectorAll('[data-js-vf="_buttonVelocity"]'),t=document.querySelector('[data-js-vf="_badgeTotal"]');y(e).forEach((function(n){n.addEventListener("click",(function(){return n=document.querySelectorAll('[data-js-vf="_priceTotal"]'),void y(e).forEach((function(e,r){e.classList.contains("vf-active")?(e.classList.remove("vf-active"),e.classList.remove("vf-bold"),n[r].classList.add("ws10-u--hidden"),t.classList.add("ws10-u--hidden")):(e.classList.add("vf-active"),e.classList.add("vf-bold"),n[r].classList.remove("ws10-u--hidden"),t.classList.remove("ws10-u--hidden"))}));var n}))}));var n=document.querySelectorAll('[data-js-vf="_buttonVelocityMaxi"]');document.querySelector('[data-js-vf="_badgeMaxi"]');y(n).forEach((function(e){e.addEventListener("click",(function(){return e=document.querySelectorAll('[data-js-vf="_priceMaxi"]'),void y(n).forEach((function(t,n){t.classList.contains("vf-active")?(t.classList.remove("vf-active"),t.classList.remove("vf-bold"),e[n].classList.add("ws10-u--hidden")):(t.classList.add("vf-active"),t.classList.add("vf-bold"),e[n].classList.remove("ws10-u--hidden"))}));var e}))}));var r=document.querySelectorAll('[data-js-vf="_buttonVelocityIlimitada"]'),o=document.querySelector('[data-js-vf="_badgeIlimitada"]');y(r).forEach((function(e){e.addEventListener("click",(function(){return e=document.querySelectorAll('[data-js-vf="_priceIlimitada"]'),void y(r).forEach((function(t,n){t.classList.contains("vf-active")?(t.classList.remove("vf-active"),t.classList.remove("vf-bold"),e[n].classList.add("ws10-u--hidden"),o.classList.add("ws10-u--hidden")):(t.classList.add("vf-active"),t.classList.add("vf-bold"),e[n].classList.remove("ws10-u--hidden"),o.classList.remove("ws10-u--hidden"))}));var e}))}))},m.onFrameworkReady=function(){console.log("Site functionality ready")}}]);