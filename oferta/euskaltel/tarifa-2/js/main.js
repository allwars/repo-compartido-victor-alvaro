/**
 * Vodafone Reboot Framework: Version 2.15.0. Generation Date: 2021-07-07T09:34:53.515Z
 */

!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t),performance&&performance.mark&&performance.mark("micro exec");var n=document.querySelector("link[data-ws10-microcss]"),r=function(e,t,o){var n=null;for(;e;){if(e.matches(t)){n=e;break}if(o&&e.matches(o))break;e=e.parentElement}return n}(document.querySelector("#tarifa-2-e"),"[data-ws10-microsite]"),i=r?r.dataset.pathmicrosite:"",c=document.documentElement.clientWidth,a=c>1024,s=c<=1024&&c>=768,u=c<768;function d(){m.cssLoaded||(document.querySelector("#tarifa-2-e")&&document.querySelector("#tarifa-2-e").removeAttribute("style"),m.cssLoaded=!0,m.onStylesReady(),performance&&performance.mark&&performance.mark("micro css ready"))}function l(){document.removeEventListener("ws10:frameworkReady",l),window.ws10.utils.init(document.querySelector("#tarifa-2-e")),m.onFrameworkReady(),performance&&performance.mark&&(performance.mark("micro js ready"),console.timeEnd("microsite instantiation"))}function f(){var e=document.styleSheets,t=0;return[].forEach.call(e,(function(e){var o=e.href||"";-1!==o.indexOf(i+"css/ws10")&&(console.log("WS10 CSS Loaded"),t++),-1!==o.indexOf(i+"css/styles.css")&&(console.log("MICRO CSS Loaded"),t++)})),2===t}f()?f()&&setTimeout(d,100):n?(n.addEventListener("load",d),setTimeout((function(){console.warn("Microsite visible by 3s timeout"),d()}),3e3)):setTimeout(d,100),window.ws10?setTimeout(l,100):document.addEventListener("ws10:frameworkReady",l);var m={isDesktop:a,isTablet:s,isMobile:u,micrositeId:"#tarifa-2-e",micrositePath:i,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},y=m;y.onStylesReady=function(){console.log("Site visually ready");document.querySelector('[data-js-vf="_showOrHideSticky"]');var e=document.querySelector('[data-js-vf="_stickyRate"]'),t=document.querySelector('[data-js="_banner"]'),o=document.querySelector('[data-js-vf="_ticket"]'),n=document.querySelector(".MDDfooter"),r=document.querySelector(".mdd-desktop"),i=document.documentElement.clientWidth,c=i>1024,a=i<=1024&&i>=768;document.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom-80<0?e.classList.remove("ws10-u--hidden"):e.classList.add("ws10-u--hidden")})),document.addEventListener("scroll",(function(){var t=n.getBoundingClientRect(),o=e.getBoundingClientRect();t.top<o.top&&e.classList.add("ws10-u--hidden")})),(c||a)&&(document.addEventListener("scroll",(function(){var e=t.getBoundingClientRect();console.log(e),e.top<0?o.setAttribute("style","position:fixed; top: 50px;"):o.setAttribute("style","position:absolute;")})),document.addEventListener("scroll",(function(){var e=o.offsetHeight,t=r.offsetHeight;n.getBoundingClientRect().top-(e+t)<0?o.classList.add("vf-ticket__opacity0"):o.classList.remove("vf-ticket__opacity0")})))},y.onFrameworkReady=function(){console.log("Site functionality ready")}}]);