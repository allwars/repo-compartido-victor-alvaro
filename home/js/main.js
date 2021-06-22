/**
 * Vodafone Reboot Framework: Version 2.11.4. Generation Date: 2021-06-21T14:46:47.083Z
 */

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=document.querySelector("link[data-microcss]"),a=function(e,t,n){var r=null;for(;e;){if(e.matches(t)){r=e;break}if(n&&e.matches(n))break;e=e.parentElement}return r}(document.querySelector("#home"),"[data-pathmicrosite]"),o=a?a.dataset.pathmicrosite:"",i=document.documentElement.clientWidth,s=i>969,c=i<=969&&i>=768,u=i<768&&i>300;function l(){b.cssLoaded||(document.querySelector("#home").removeAttribute("style"),b.cssLoaded=!0,b.onStylesReady())}function d(){window.vfes._utils.init(document.querySelector("#home")),b.onFrameworkReady()}function f(){var e=document.styleSheets,t=0;return[].forEach.call(e,(function(e){var n=e.href||"";-1!==n.indexOf(o+"css/ws2r")&&(console.log("WS2RCSS Loaded"),t++),-1!==n.indexOf(o+"css/styles.css")&&(console.log("MICROCSS Loaded"),t++)})),2===t}f()?f()&&setTimeout(l,100):(r.addEventListener("load",l),setTimeout(l,3e3)),window.vfes?setTimeout(d,100):document.addEventListener("vfes:frameworkReady",d);var b={isDesktop:s,isTablet:c,isMobile:u,micrositeId:"#home",micrositePath:o,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},m=b;function v(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g={},S={tabActive:"vfes-tab-group__container-item--active"},A=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(this,e),this.$element=t.$element,this.selectors=g,this.classes=S,this.tabContainer=this.$element.querySelector('[data-tab="tab-container"]'),this.tabsItem=this.tabContainer.querySelectorAll('[role="tab"]'),this.onChanged=new Event("vfes:changed")}var t,n,r;return t=e,(n=[{key:"a11y",value:function(){v(this.tabsItem).forEach((function(e){"tab"!==!e.hasAttribute("role")&&e.hasAttribute("data-option")||console.log('Las tabs group tienen que tener los atributos: "role" con el valor de tab, "aria-selected" con un valor true o false, "data-option" con un valor numérico')}))}},{key:"init",value:function(){this.bind(),this.a11y()}},{key:"bind",value:function(){var e=this,t=this;v(t.tabsItem).forEach((function(e){e.addEventListener("click",(function(){if("false"===e.getAttribute("data-tab-active")){var n=t.getTabActive();n.classList.remove(t.classes.tabActive),n.setAttribute("data-tab-active","false"),t.$element.children[n.getAttribute("aria-controls")].setAttribute("aria-expanded","false"),e.classList.add(t.classes.tabActive),e.setAttribute("data-tab-active","true"),t.$element.children[e.getAttribute("aria-controls")].setAttribute("aria-expanded","true"),t.onChanged.tab=e,t.onChanged.title=e.innerText,t.onChanged.index=e.getAttribute("data-option"),t.onChanged.contentTab=t.$element.querySelector('[aria-expanded="true"]'),t.$element.dispatchEvent(t.onChanged)}}))})),this.tabContainer.addEventListener("click",(function(){"false"===e.tabContainer.getAttribute("aria-expanded")?e.tabContainer.setAttribute("aria-expanded","true"):e.tabContainer.setAttribute("aria-expanded","false")}))}},{key:"getTabActive",value:function(){return this.tabContainer.querySelector('[data-tab-active="true"]')}}])&&p(t.prototype,n),r&&p(t,r),e}();m.onStylesReady=function(){console.log("Site visually ready");var e=document.querySelector('[data-vfes-js="_tabsGroup"]'),t=new A({$element:e}),n=document.querySelector('[data-vfms-js="rateConvergente"]'),r=document.querySelector('[data-vfms-js="buttonTabMobile"]'),a=window.location.search,o=new URLSearchParams(a).get("tv"),i=document.getElementById("vfms-tabs-selected");t.init(),i.addEventListener("vfes:changed",(function(e){1==e.index?n.classList.remove("vfms-hide"):n.classList.add("vfms-hide")})),"m"==o?(setTimeout((function(){r.click()}),1e3),n.classList.add("vfms-hide")):n.classList.remove("vfms-hide")},m.onFrameworkReady=function(){}}]);