/**
 * Vodafone Reboot Framework: Version 2.11.4. Generation Date: 2021-06-14T05:57:01.926Z
 */

!function(t){var e={};function o(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e),performance&&performance.mark&&performance.mark("micro exec");var a=document.querySelector("link[data-ws10-microcss]"),r=function(t,e,o){var a=null;for(;t;){if(t.matches(e)){a=t;break}if(o&&t.matches(o))break;t=t.parentElement}return a}(document.querySelector("#total600mb"),"[data-ws10-microsite]"),n=r?r.dataset.pathmicrosite:"",i=document.documentElement.clientWidth,c=i>1024,d=i<=1024&&i>=768,l=i<768;function u(){m.cssLoaded||(document.querySelector("#total600mb")&&document.querySelector("#total600mb").removeAttribute("style"),m.cssLoaded=!0,m.onStylesReady(),performance&&performance.mark&&performance.mark("micro css ready"))}function s(){document.removeEventListener("ws10:frameworkReady",s),window.ws10.utils.init(document.querySelector("#total600mb")),m.onFrameworkReady(),performance&&performance.mark&&(performance.mark("micro js ready"),console.timeEnd("microsite instantiation"))}function p(){var t=document.styleSheets,e=0;return[].forEach.call(t,(function(t){var o=t.href||"";-1!==o.indexOf(n+"css/ws10")&&(console.log("WS10 CSS Loaded"),e++),-1!==o.indexOf(n+"css/styles.css")&&(console.log("MICRO CSS Loaded"),e++)})),2===e}p()?p()&&setTimeout(u,100):a?(a.addEventListener("load",u),setTimeout((function(){console.warn("Microsite visible by 3s timeout"),u()}),3e3)):setTimeout(u,100),window.ws10?setTimeout(s,100):document.addEventListener("ws10:frameworkReady",s);var m={isDesktop:c,isTablet:d,isMobile:l,micrositeId:"#total600mb",micrositePath:n,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},f=m,v={300:{port:{card:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1206179&tcli=0&tta=1",category:"cta",element:"cardrate portabilidad",context:"300mbps portabilidad lo quiero ",id:"-4725045160583",callToAction:"addtocart(utag_data.plans_add2cart[0])",a11y:"La tarifa Vodafone ONE Ilimitada Avanzada 300Mbps con portabilidad"},sticky:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1206179&tcli=0&tta=1",category:"cta",element:"cardrate stiky inferior",context:"300mbps portabilidad lo quiero",id:"-4725800100583",callToAction:"addtocart(utag_data.plans_add2cart[0])",a11y:". La tarifa Vodafone ONE Ilimitada Avanzada 300Mbps con portabilidad"}},new:{card:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1206177&tcli=0&tta=1",category:"cta",element:"cardrate alta nueva",context:"300mbps alta nueva lo quiero",id:"-4725045160583",callToAction:"addtocart(utag_data.plans_add2cart[2])",a11y:". Tarifa Vodafone ONE Ilimitada Avanzada 300Mbps con número nuevo"},sticky:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1206177&tcli=0&tta=1",category:"cta",element:"cardrate stiky inferior",context:"300mbps alta nueva lo quiero",id:"-4725950100583",callToAction:"addtocart(utag_data.plans_add2cart[2])",a11y:". La tarifa Vodafone ONE Ilimitada Avanzada 300Mbps con nuevo número"}},vel:{div:{category:"cta",context:"300mbps",element:"cardrate",id:"-6727630143211"}}},600:{port:{card:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1206187&tcli=0&tta=1",category:"cta",element:"cardrate",context:"600mbps portabilidad lo quiero",id:"-4725875100373",callToAction:"addtocart(utag_data.plans_add2cart[1])",a11y:". La tarifa Vodafone ONE Ilimitada Avanzada 600mbps con portabilidad"},sticky:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1206187&tcli=0&tta=1",category:"cta",element:"cardrate stiky inferior",context:"600mbps portabilidad lo quiero",id:"-4315800100583",callToAction:"addtocart(utag_data.plans_add2cart[1])",a11y:". La tarifa Vodafone ONE Ilimitada Avanzada 600mbps con portabilidad"}},new:{card:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1206183&tcli=0&tta=1",category:"cta",element:"cardrate",context:"600mbps alta nueva lo quiero",id:"-4725875100373",callToAction:"addtocart(utag_data.plans_add2cart[3])",a11y:". La tarifa Vodafone ONE Ilimitada Avanzada 600mbps con número nuevo"},sticky:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1206183&tcli=0&tta=1",category:"cta",element:"cardrate stiky inferior",context:"600mbps alta nueva lo quiero",id:"-4709950100583",callToAction:"addtocart(utag_data.plans_add2cart[3])",a11y:". La tarifa Vodafone ONE Ilimitada Avanzada 600mbps con número nuevo"}},vel:{div:{category:"cta",context:"600mbps",element:"cardrate",id:"-6733641743211"}}},portabilidad:{cardrate:{div:{category:"cta",context:"portabilidad",element:"cardrate",id:"-6727639503211"}}},nuevo:{cardrate:{div:{category:"cta",context:"alta nueva",element:"cardrate",id:"-6727909503211"}}}};function y(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function _(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?y(Object(o),!0).forEach((function(e){b(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):y(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function b(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var g={default_plan:"vodafone one ilimitada plus 300Mbps",plans_add2cart:[{product_name:"vodafone one ilimitada plus 300Mbps",product_category:"movil+fibra",product_variant:"Datos y minutos ilimitados+300Mbps Fibra",promotion_price_name:"Promo colectivos + Promo 50% One Ilimitada Plus 300Mbps",promotion_gift_name:"",product_id:"",product_detail:"",product_sale_type:"yes:transactional",product_additional_lines:[{product_name:"tarifa movil lite",product_variant:"4GB Datos móviles 5G",product_category:"movil",promotion_price_name:"2 x 1 lite",promotion_gift_name:"",product_id:""}],product_packs_tv:[{product_name:"pack seriefans",product_category:"tv",promotion_price_name:"seriefans incluido en ilimitada plus y one ilimitada plus",promotion_gift_name:"",product_id:""}]},{product_name:"vodafone one ilimitada plus 600Mbps",product_category:"movil+fibra",product_variant:"Datos y minutos ilimitados+600Mbps Fibra",promotion_price_name:"Promo colectivos + Promo 50% + T&P One Ilimitada Plus 600Mb",promotion_gift_name:"",product_id:"",product_detail:"",product_sale_type:"yes:transactional",product_additional_lines:[{product_name:"tarifa movil lite",product_category:"movil","product variant":"4GB Datos móviles 5G",promotion_price_name:"2 x 1 lite",promotion_gift_name:"",product_id:""}],product_packs_tv:[{product_name:"pack seriefans",product_category:"tv",promotion_price_name:"seriefans incluido en ilimitada plus y one ilimitada plus",promotion_gift_name:"",product_id:""}]},{product_name:"vodafone one ilimitada plus 300Mbps",product_category:"movil+fibra",product_variant:"Datos y minutos ilimitados+300Mbps Fibra",promotion_price_name:"Promo colectivos + Promo 50% One Ilimitada Plus 300Mbps",promotion_gift_name:"",product_id:"",product_detail:"",product_sale_type:"yes:transactional",product_packs_tv:[{product_name:"pack seriefans",product_category:"tv",promotion_price_name:"seriefans incluido en ilimitada plus y one ilimitada plus",promotion_gift_name:"",product_id:""}]},{product_name:"vodafone one ilimitada plus 600Mbps",product_category:"movil+fibra",product_variant:"Datos y minutos ilimitados+600Mbps Fibra",promotion_price_name:"Promo colectivos + Promo 50% + T&P One Ilimitada Plus 600Mb",promotion_gift_name:"",product_id:"",product_detail:"",product_sale_type:"yes:transactional",product_packs_tv:[{product_name:"pack seriefans",product_category:"tv",promotion_price_name:"seriefans incluido en ilimitada plus y one ilimitada plus",promotion_gift_name:"",product_id:""}]}]};window.utag_data=_(_({},window.utag_data),g);function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var o=[],a=!0,r=!1,n=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done)&&(o.push(i.value),!e||o.length!==e);a=!0);}catch(t){r=!0,n=t}finally{try{a||null==c.return||c.return()}finally{if(r)throw n}}return o}(t,e)||S(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||S(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,e){if(t){if("string"==typeof t)return A(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?A(t,e):void 0}}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,a=new Array(e);o<e;o++)a[o]=t[o];return a}f.onStylesReady=function(){console.log("Site visually ready")},f.onFrameworkReady=function(){console.log("Site functionality ready");var t=document.querySelectorAll('[data-js-vf="_buttonSpeed"]'),e=document.querySelectorAll('[data-js-vf="_buttonTypeLine"]'),o=document.querySelectorAll('[data-js-vf="_portability"]'),a=document.querySelectorAll('[data-js-vf="_newNumber"]'),r=document.querySelectorAll('[data-js-vf="_secondLine"]'),n=document.querySelectorAll('[data-js-vf="_secondLine2"]'),i=(document.querySelector('[data-js-vf="_showOrHideSticky"]'),document.querySelector('[data-js-vf="_stickyRate"]')),c=document.querySelector('[data-js="_banner"]'),d=document.querySelector('[data-js-vf="_ticket"]'),l=document.querySelector(".MDDfooter"),u=document.querySelector(".mdd-desktop"),s=(window.location.search,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"hide",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(0===e.length)return console.error("[Fn: toogleInfoRegular] The param listInfo is empty ");var o={hide:function(){e.forEach((function(t){t.classList.add("ws10-u--hidden"),t.setAttribute("aria-hidden","true")}))},show:function(){e.forEach((function(t){t.classList.remove("ws10-u--hidden"),t.removeAttribute("aria-hidden","true")}))}};return o[t](),!1}),p=function(t){({newNumber:function(){return f()},portability:function(){return m()}})[t.getAttribute("data-js-vf-value")]()},m=function(){s("show",[].concat(h(o),h(r),h(n))),s("hide",a)},f=function(){s("show",a),s("hide",[].concat(h(o),h(r),h(n)))},y=function(){c.getBoundingClientRect().bottom-80<0?i.classList.remove("ws10-u--hidden"):i.classList.add("ws10-u--hidden")},_=function(){var t=l.getBoundingClientRect(),e=i.getBoundingClientRect();t.top<e.top&&i.classList.add("ws10-u--hidden")};window.matchMedia("(min-width: 768px)").matches?document.addEventListener("scroll",(function(){var t,e;c.getBoundingClientRect().top<0?d.setAttribute("style","position:fixed; top: 50px;"):d.setAttribute("style","position:absolute;"),t=d.offsetHeight,e=u.offsetHeight,l.getBoundingClientRect().top-(t+e)<0?d.classList.add("vf-ticket__opacity0"):d.classList.remove("vf-ticket__opacity0"),y(),_()})):document.addEventListener("scroll",(function(){y(),_()})),h(t).forEach((function(t){t.addEventListener("click",(function(){return p(t)}))})),h(e).forEach((function(t){t.addEventListener("click",(function(){return p(t)}))})),document.querySelectorAll("[data-cta]").forEach((function(t){var e,o,a,r,n,i,c,d,l,u,s,p,m,f,y=t.querySelector("[data-cta-a11y]"),_=w(t.getAttribute("data-cta").split(":"),3),b=_[0],g=_[1],h=_[2];void 0!==(null===(e=v[b][g][h])||void 0===e?void 0:e.url)&&t.setAttribute("href",null===(o=v[b][g][h])||void 0===o?void 0:o.url),void 0!==(null===(a=v[b][g][h])||void 0===a?void 0:a.category)&&t.setAttribute("data-analytics-category",null===(r=v[b][g][h])||void 0===r?void 0:r.category),void 0!==(null===(n=v[b][g][h])||void 0===n?void 0:n.element)&&t.setAttribute("data-analytics-element",null===(i=v[b][g][h])||void 0===i?void 0:i.element),void 0!==(null===(c=v[b][g][h])||void 0===c?void 0:c.context)&&t.setAttribute("data-analytics-context",null===(d=v[b][g][h])||void 0===d?void 0:d.context),void 0!==(null===(l=v[b][g][h])||void 0===l?void 0:l.id)&&t.setAttribute("data-analytics-id",null===(u=v[b][g][h])||void 0===u?void 0:u.id),void 0!==(null===(s=v[b][g][h])||void 0===s?void 0:s.callToAction)&&t.setAttribute("onmousedown",null===(p=v[b][g][h])||void 0===p?void 0:p.callToAction),void 0!==(null===(m=v[b][g][h])||void 0===m?void 0:m.a11y)&&(y.innerHTML=null===(f=v[b][g][h])||void 0===f?void 0:f.a11y)}))}}]);