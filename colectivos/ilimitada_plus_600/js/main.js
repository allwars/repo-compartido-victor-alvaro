/**
 * Vodafone Reboot Framework: Version 2.11.4. Generation Date: 2021-06-16T13:40:19.039Z
 */

!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e){},function(t,e,o){"use strict";o.r(e),performance&&performance.mark&&performance.mark("micro exec");var r=document.querySelector("link[data-ws10-microcss]"),n=function(t,e,o){var r=null;for(;t;){if(t.matches(e)){r=t;break}if(o&&t.matches(o))break;t=t.parentElement}return r}(document.querySelector("#total600mb"),"[data-ws10-microsite]"),i=n?n.dataset.pathmicrosite:"",a=document.documentElement.clientWidth,c=a>1024,d=a<=1024&&a>=768,u=a<768;function l(){p.cssLoaded||(document.querySelector("#total600mb")&&document.querySelector("#total600mb").removeAttribute("style"),p.cssLoaded=!0,p.onStylesReady(),performance&&performance.mark&&performance.mark("micro css ready"))}function s(){document.removeEventListener("ws10:frameworkReady",s),window.ws10.utils.init(document.querySelector("#total600mb")),p.onFrameworkReady(),performance&&performance.mark&&(performance.mark("micro js ready"),console.timeEnd("microsite instantiation"))}function m(){var t=document.styleSheets,e=0;return[].forEach.call(t,(function(t){var o=t.href||"";-1!==o.indexOf(i+"css/ws10")&&(console.log("WS10 CSS Loaded"),e++),-1!==o.indexOf(i+"css/styles.css")&&(console.log("MICRO CSS Loaded"),e++)})),2===e}m()?m()&&setTimeout(l,100):r?(r.addEventListener("load",l),setTimeout((function(){console.warn("Microsite visible by 3s timeout"),l()}),3e3)):setTimeout(l,100),window.ws10?setTimeout(s,100):document.addEventListener("ws10:frameworkReady",s);var p={isDesktop:c,isTablet:d,isMobile:u,micrositeId:"#total600mb",micrositePath:i,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},f=p,y=o(0);function v(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function _(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?v(Object(o),!0).forEach((function(e){b(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function b(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var h={default_plan:"vodafone one ilimitada plus 300Mbps",plans_add2cart:[{product_name:"vodafone one ilimitada plus 300Mbps",product_category:"movil+fibra",product_variant:"Datos y minutos ilimitados+300Mbps Fibra",promotion_price_name:"Promo colectivos + Promo 50% One Ilimitada Plus 300Mbps",promotion_gift_name:"",product_id:"",product_detail:"",product_sale_type:"yes:transactional",product_additional_lines:[{product_name:"tarifa movil lite",product_variant:"4GB Datos móviles 5G",product_category:"movil",promotion_price_name:"2 x 1 lite",promotion_gift_name:"",product_id:""}],product_packs_tv:[{product_name:"pack seriefans",product_category:"tv",promotion_price_name:"seriefans incluido en ilimitada plus y one ilimitada plus",promotion_gift_name:"",product_id:""}]},{product_name:"vodafone one ilimitada plus 600Mbps",product_category:"movil+fibra",product_variant:"Datos y minutos ilimitados+600Mbps Fibra",promotion_price_name:"Promo colectivos + Promo 50% + T&P One Ilimitada Plus 600Mb",promotion_gift_name:"",product_id:"",product_detail:"",product_sale_type:"yes:transactional",product_additional_lines:[{product_name:"tarifa movil lite",product_category:"movil","product variant":"4GB Datos móviles 5G",promotion_price_name:"2 x 1 lite",promotion_gift_name:"",product_id:""}],product_packs_tv:[{product_name:"pack seriefans",product_category:"tv",promotion_price_name:"seriefans incluido en ilimitada plus y one ilimitada plus",promotion_gift_name:"",product_id:""}]},{product_name:"vodafone one ilimitada plus 300Mbps",product_category:"movil+fibra",product_variant:"Datos y minutos ilimitados+300Mbps Fibra",promotion_price_name:"Promo colectivos + Promo 50% One Ilimitada Plus 300Mbps",promotion_gift_name:"",product_id:"",product_detail:"",product_sale_type:"yes:transactional",product_packs_tv:[{product_name:"pack seriefans",product_category:"tv",promotion_price_name:"seriefans incluido en ilimitada plus y one ilimitada plus",promotion_gift_name:"",product_id:""}]},{product_name:"vodafone one ilimitada plus 600Mbps",product_category:"movil+fibra",product_variant:"Datos y minutos ilimitados+600Mbps Fibra",promotion_price_name:"Promo colectivos + Promo 50% + T&P One Ilimitada Plus 600Mb",promotion_gift_name:"",product_id:"",product_detail:"",product_sale_type:"yes:transactional",product_packs_tv:[{product_name:"pack seriefans",product_category:"tv",promotion_price_name:"seriefans incluido en ilimitada plus y one ilimitada plus",promotion_gift_name:"",product_id:""}]}]};window.utag_data=_(_({},window.utag_data),h);function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var o=[],r=!0,n=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(o.push(a.value),!e||o.length!==e);r=!0);}catch(t){n=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(n)throw i}}return o}(t,e)||S(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||S(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){if(t){if("string"==typeof t)return A(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?A(t,e):void 0}}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}f.onStylesReady=function(){console.log("Site visually ready")},f.onFrameworkReady=function(){console.log("Site functionality ready");var t=document.querySelectorAll('[data-js-vf="_buttonSpeed"]'),e=document.querySelectorAll('[data-js-vf="_buttonTypeLine"]'),o=document.querySelectorAll('[data-js-vf="_portability"]'),r=document.querySelectorAll('[data-js-vf="_newNumber"]'),n=document.querySelectorAll('[data-js-vf="_secondLine"]'),i=document.querySelectorAll('[data-js-vf="_secondLine2"]'),a=(document.querySelector('[data-js-vf="_showOrHideSticky"]'),document.querySelector('[data-js-vf="_stickyRate"]')),c=document.querySelector('[data-js="_banner"]'),d=document.querySelector('[data-js-vf="_ticket"]'),u=document.querySelector(".MDDfooter"),l=document.querySelector(".mdd-desktop"),s=(window.location.search,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"hide",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(0===e.length)return console.error("[Fn: toogleInfoRegular] The param listInfo is empty ");var o={hide:function(){e.forEach((function(t){t.classList.add("ws10-u--hidden"),t.setAttribute("aria-hidden","true")}))},show:function(){e.forEach((function(t){t.classList.remove("ws10-u--hidden"),t.removeAttribute("aria-hidden","true")}))}};return o[t](),!1}),m=function(t){({newNumber:function(){return f()},portability:function(){return p()}})[t.getAttribute("data-js-vf-value")]()},p=function(){s("show",[].concat(w(o),w(n),w(i))),s("hide",r)},f=function(){s("show",r),s("hide",[].concat(w(o),w(n),w(i)))},v=function(){c.getBoundingClientRect().bottom-80<0?a.classList.remove("ws10-u--hidden"):a.classList.add("ws10-u--hidden")},_=function(){var t=u.getBoundingClientRect(),e=a.getBoundingClientRect();t.top<e.top&&a.classList.add("ws10-u--hidden")},b=function(){c.getBoundingClientRect().top<0?d.setAttribute("style","position:fixed; top: 70px;"):d.setAttribute("style","position:absolute; top: 40px;")};window.matchMedia("(min-width: 768px)").matches?(b(),document.addEventListener("scroll",(function(){var t,e;b(),t=d.offsetHeight,e=l.offsetHeight,u.getBoundingClientRect().top-(t+e)<0?d.classList.add("vf-ticket__opacity0"):d.classList.remove("vf-ticket__opacity0"),v(),_()}))):document.addEventListener("scroll",(function(){v(),_()})),w(t).forEach((function(t){t.addEventListener("click",(function(){return m(t)}))})),w(e).forEach((function(t){t.addEventListener("click",(function(){return m(t)}))})),y.analyticsAndThirdURLForCta,document.querySelectorAll("[data-cta]").forEach((function(t){var e,o,r,n,i,a,c,d,u,l,s,m,p,f,v=t.querySelector("[data-cta-a11y]"),_=g(t.getAttribute("data-cta").split(":"),3),b=_[0],h=_[1],w=_[2];void 0!==(null===(e=y.analyticsAndThirdURLForCta[b][h][w])||void 0===e?void 0:e.url)&&t.setAttribute("href",null===(o=y.analyticsAndThirdURLForCta[b][h][w])||void 0===o?void 0:o.url),void 0!==(null===(r=y.analyticsAndThirdURLForCta[b][h][w])||void 0===r?void 0:r.category)&&t.setAttribute("data-analytics-category",null===(n=y.analyticsAndThirdURLForCta[b][h][w])||void 0===n?void 0:n.category),void 0!==(null===(i=y.analyticsAndThirdURLForCta[b][h][w])||void 0===i?void 0:i.element)&&t.setAttribute("data-analytics-element",null===(a=y.analyticsAndThirdURLForCta[b][h][w])||void 0===a?void 0:a.element),void 0!==(null===(c=y.analyticsAndThirdURLForCta[b][h][w])||void 0===c?void 0:c.context)&&t.setAttribute("data-analytics-context",null===(d=y.analyticsAndThirdURLForCta[b][h][w])||void 0===d?void 0:d.context),void 0!==(null===(u=y.analyticsAndThirdURLForCta[b][h][w])||void 0===u?void 0:u.id)&&t.setAttribute("data-analytics-id",null===(l=y.analyticsAndThirdURLForCta[b][h][w])||void 0===l?void 0:l.id),void 0!==(null===(s=y.analyticsAndThirdURLForCta[b][h][w])||void 0===s?void 0:s.callToAction)&&t.setAttribute("onmousedown",null===(m=y.analyticsAndThirdURLForCta[b][h][w])||void 0===m?void 0:m.callToAction),void 0!==(null===(p=y.analyticsAndThirdURLForCta[b][h][w])||void 0===p?void 0:p.a11y)&&(v.innerHTML=null===(f=y.analyticsAndThirdURLForCta[b][h][w])||void 0===f?void 0:f.a11y)}))}}]);