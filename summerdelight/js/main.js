/**
 * Vodafone Reboot Framework: Version 2.11.4. Generation Date: 2021-06-21T11:48:22.192Z
 */

!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),performance&&performance.mark&&performance.mark("micro exec");var n,o,i=document.querySelector("link[data-ws10-microcss]"),c=function(e,t,r){var n=null;for(;e;){if(e.matches(t)){n=e;break}if(r&&e.matches(r))break;e=e.parentElement}return n}(document.querySelector("#summerdelight"),"[data-ws10-microsite]"),a=c?c.dataset.pathmicrosite:"",u=document.documentElement.clientWidth,s=u>1024,l=u<=1024&&u>=768,d=u<768;function f(){p.cssLoaded||(document.querySelector("#summerdelight")&&document.querySelector("#summerdelight").removeAttribute("style"),p.cssLoaded=!0,p.onStylesReady(),performance&&performance.mark&&performance.mark("micro css ready"))}function m(){document.removeEventListener("ws10:frameworkReady",m),window.ws10.utils.init(document.querySelector("#summerdelight")),p.onFrameworkReady(),performance&&performance.mark&&(performance.mark("micro js ready"),console.timeEnd("microsite instantiation"))}function y(){var e=document.styleSheets,t=0;return[].forEach.call(e,(function(e){var r=e.href||"";-1!==r.indexOf(a+"css/ws10")&&(console.log("WS10 CSS Loaded"),t++),-1!==r.indexOf(a+"css/styles.css")&&(console.log("MICRO CSS Loaded"),t++)})),2===t}y()?y()&&setTimeout(f,100):i?(n=setInterval((function(){i.sheet.rules&&i.sheet.rules.length>0&&(clearInterval(n),clearTimeout(o),f())}),100),o=setTimeout((function(){console.warn("Microsite visible by 3s timeout"),clearInterval(n),clearTimeout(o),f()}),3e3)):setTimeout(f,100),window.ws10?setTimeout(m,100):document.addEventListener("ws10:frameworkReady",m);var p={isDesktop:s,isTablet:l,isMobile:d,micrositeId:"#summerdelight",micrositePath:a,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},v=p;function h(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}v.onStylesReady=function(){console.log("Site visually ready")},v.onFrameworkReady=function(){console.log("Site functionality ready");var e=document.querySelectorAll('[data-js-vf="family"]'),t=document.querySelector(".vf-filter-one"),r=t.querySelector("input"),n=document.querySelector(".vf-filter-two"),o=n.querySelector("input");t.addEventListener("click",(function(t){return function(t){h(e).forEach((function(e){e.classList.remove("ws10-u--hidden")})),t.currentTarget.classList.add("ws10-c-filter--white"),n.classList.remove("ws10-c-filter--white"),r.checked=!0,o.checked=!1}(t)})),n.addEventListener("click",(function(n){return function(n){h(e).forEach((function(e){e.classList.add("ws10-u--hidden")})),n.currentTarget.classList.add("ws10-c-filter--white"),t.classList.remove("ws10-c-filter--white"),r.checked=!1,o.checked=!0}(n)}))}}]);