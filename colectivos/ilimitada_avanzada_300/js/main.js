/**
 * Vodafone Reboot Framework: Version 2.11.4. Generation Date: 2021-06-14T11:31:14.626Z
 */

!function(t){var e={};function a(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";a.r(e),performance&&performance.mark&&performance.mark("micro exec");var o=document.querySelector("link[data-ws10-microcss]"),n=function(t,e,a){var o=null;for(;t;){if(t.matches(e)){o=t;break}if(a&&t.matches(a))break;t=t.parentElement}return o}(document.querySelector("#ilimitada"),"[data-ws10-microsite]"),r=n?n.dataset.pathmicrosite:"",i=document.documentElement.clientWidth,c=i>1024,d=i<=1024&&i>=768,l=i<768;function u(){p.cssLoaded||(document.querySelector("#ilimitada")&&document.querySelector("#ilimitada").removeAttribute("style"),p.cssLoaded=!0,p.onStylesReady(),performance&&performance.mark&&performance.mark("micro css ready"))}function s(){document.removeEventListener("ws10:frameworkReady",s),window.ws10.utils.init(document.querySelector("#ilimitada")),p.onFrameworkReady(),performance&&performance.mark&&(performance.mark("micro js ready"),console.timeEnd("microsite instantiation"))}function m(){var t=document.styleSheets,e=0;return[].forEach.call(t,(function(t){var a=t.href||"";-1!==a.indexOf(r+"css/ws10")&&(console.log("WS10 CSS Loaded"),e++),-1!==a.indexOf(r+"css/styles.css")&&(console.log("MICRO CSS Loaded"),e++)})),2===e}m()?m()&&setTimeout(u,100):o?(o.addEventListener("load",u),setTimeout((function(){console.warn("Microsite visible by 3s timeout"),u()}),3e3)):setTimeout(u,100),window.ws10?setTimeout(s,100):document.addEventListener("ws10:frameworkReady",s);var p={isDesktop:c,isTablet:d,isMobile:l,micrositeId:"#ilimitada",micrositePath:r,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},f=p,v={300:{port:{card:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1205433&tcli=0&tta=1",category:"cta",element:"cardrate portabilidad",context:"300mbps portabilidad lo quiero ",id:"-4725875160583",callToAction:"addtocart(utag_data.plans_add2cart[0])",a11y:"La tarifa Vodafone ONE Ilimitada Avanzada 300Mbps con portabilidad"},sticky:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1205433&tcli=0&tta=1",category:"cta",element:"cardrate stiky inferior",context:"300mbps portabilidad lo quiero",id:"3155775530819",callToAction:"addtocart(utag_data.plans_add2cart[0])",a11y:". La tarifa Vodafone ONE Ilimitada Avanzada 300Mbps con portabilidad"}},new:{card:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1205431&tcli=0&tta=1",category:"cta",element:"cardrate alta nueva",context:"300mbps alta nueva lo quiero",id:"-4545656976521",callToAction:"addtocart(utag_data.plans_add2cart[2])",a11y:". Tarifa Vodafone ONE Ilimitada Avanzada 300Mbps con número nuevo"},sticky:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1205431&tcli=0&tta=1",category:"cta",element:"cardrate stiky inferior",context:"300mbps alta nueva lo quiero",id:"8399925331411",callToAction:"addtocart(utag_data.plans_add2cart[2])",a11y:". La tarifa Vodafone ONE Ilimitada Avanzada 300Mbps con nuevo número"}},vel:{div:{category:"cta",context:"300mbps",element:"cardrate",id:"-6727639743211"}}},600:{port:{card:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1205438&tcli=0&tta=1",category:"cta",element:"cardrate",context:"600mbps portabilidad lo quiero",id:"-4725875100583",callToAction:"addtocart(utag_data.plans_add2cart[1])",a11y:". La tarifa Vodafone ONE Ilimitada Avanzada 600Mbps con portabilidad"},sticky:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1205438&tcli=0&tta=1",category:"cta",element:"cardrate stiky inferior",context:"600mbps portabilidad lo quiero",id:"3155775530818",callToAction:"addtocart(utag_data.plans_add2cart[1])",a11y:". La tarifa Vodafone ONE Ilimitada Avanzada 600Mbps con portabilidad"}},new:{card:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1205436&tcli=0&tta=1",category:"cta",element:"cardrate",context:"600mbps alta nueva lo quiero",id:"-4725602956266",callToAction:"addtocart(utag_data.plans_add2cart[3])",a11y:". La tarifa Vodafone ONE Ilimitada Avanzada 600Mbps con número nuevo"},sticky:{url:"https://www.vodafone.es/c/tienda-online/particulares/contratacion?id=1205436&tcli=0&tta=1",category:"cta",element:"cardrate stiky inferior",context:"600mbps alta nueva lo quiero",id:"8399925331410",callToAction:"addtocart(utag_data.plans_add2cart[3])",a11y:". La tarifa Vodafone ONE Ilimitada Avanzada 600Mbps con número nuevo"}},vel:{div:{category:"cta",context:"600mbps",element:"cardrate",id:"-6727641743211"}}},portabilidad:{cardrate:{div:{category:"cta",context:"portabilidad",element:"cardrate",id:"-6727639503211"}}},nuevo:{cardrate:{div:{category:"cta",context:"alta nueva",element:"cardrate",id:"-6727909503211"}}}};function y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?y(Object(a),!0).forEach((function(e){_(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function _(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g={default_plan:"vodafone one ilimitada avanzada 300Mbps",plans_add2cart:[{product_name:"vodafone one ilimitada avanzada 300Mbps",product_category:"movil+fibra",product_variant:"Datos y minutos ilimitados+300Mbps Fibra",promotion_price_name:"Promo colectivos + Promo 50% One Ilimitada Avanzada 300Mbps",promotion_gift_name:"",product_id:"",product_detail:"",product_sale_type:"yes:transactional",product_additional_lines:[{product_name:"tarifa movil lite","product variant":"4GB Datos móviles 5G",product_category:"movil",promotion_price_name:"2 x 1 lite",promotion_gift_name:"",product_id:""}]},{product_name:"vodafone one ilimitada avanzada 600Mbps",product_category:"movil+fibra",product_variant:"Datos y minutos ilimitados+600Mbps Fibra",promotion_price_name:"Promo colectivos + Promo 50% + T&P One Ilimitada Avanzada 600Mb",promotion_gift_name:"",product_id:"",product_detail:"",product_sale_type:"yes:transactional",product_additional_lines:[{product_name:"tarifa movil lite",product_category:"movil","product variant":"4GB Datos móviles 5G",promotion_price_name:"2 x 1 lite",promotion_gift_name:"",product_id:""}]},{product_name:"vodafone one ilimitada avanzada 300Mbps",product_category:"movil+fibra",product_variant:"Datos y minutos ilimitados+300Mbps Fibra",promotion_price_name:"Promo colectivos + Promo 50% One Ilimitada Avanzada 300Mbps",promotion_gift_name:"",product_id:"",product_detail:"",product_sale_type:"yes:transactional"},{product_name:"vodafone one ilimitada avanzada 600Mbps",product_category:"movil+fibra",product_variant:"Datos y minutos ilimitados+600Mbps Fibra",promotion_price_name:"Promo colectivos + Promo 50% + T&P One Ilimitada Avanzada 600Mb",promotion_gift_name:"",product_id:"",product_detail:"",product_sale_type:"yes:transactional"}]};window.utag_data=b(b({},window.utag_data),g);function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var a=[],o=!0,n=!1,r=void 0;try{for(var i,c=t[Symbol.iterator]();!(o=(i=c.next()).done)&&(a.push(i.value),!e||a.length!==e);o=!0);}catch(t){n=!0,r=t}finally{try{o||null==c.return||c.return()}finally{if(n)throw r}}return a}(t,e)||A(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t){return function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||A(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){if(t){if("string"==typeof t)return S(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?S(t,e):void 0}}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,o=new Array(e);a<e;a++)o[a]=t[a];return o}f.onStylesReady=function(){console.log("Site visually ready")},f.onFrameworkReady=function(){console.log("Site functionality ready");var t=document.querySelectorAll('[data-js-vf="_buttonSpeed"]'),e=document.querySelectorAll('[data-js-vf="_buttonTypeLine"]'),a=document.querySelectorAll('[data-js-vf="_portability"]'),o=document.querySelectorAll('[data-js-vf="_newNumber"]'),n=document.querySelectorAll('[data-js-vf="_secondLine"]'),r=document.querySelectorAll('[data-js-vf="_secondLine2"]'),i=(document.querySelector('[data-js-vf="_showOrHideSticky"]'),document.querySelector('[data-js-vf="_stickyRate"]')),c=document.querySelector('[data-js="_banner"]'),d=document.querySelector('[data-js-vf="_ticket"]'),l=document.querySelector(".MDDfooter"),u=document.querySelector(".mdd-desktop"),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"hide",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(0===e.length)return console.error("[Fn: toogleInfoRegular] The param listInfo is empty ");var a={hide:function(){e.forEach((function(t){t.classList.add("ws10-u--hidden"),t.setAttribute("aria-hidden","true")}))},show:function(){e.forEach((function(t){t.classList.remove("ws10-u--hidden"),t.removeAttribute("aria-hidden","true")}))}};return a[t](),!1},m=function(t){({newNumber:function(){return f()},portability:function(){return p()}})[t.getAttribute("data-js-vf-value")]()},p=function(){s("show",[].concat(h(a),h(n),h(r))),s("hide",o)},f=function(){s("show",o),s("hide",[].concat(h(a),h(n),h(r)))},y=function(){c.getBoundingClientRect().bottom-80<0?i.classList.remove("ws10-u--hidden"):i.classList.add("ws10-u--hidden")},b=function(){var t=l.getBoundingClientRect(),e=i.getBoundingClientRect();t.top<e.top&&i.classList.add("ws10-u--hidden")},_=function(){c.getBoundingClientRect().top<0?d.setAttribute("style","position:fixed; top: 70px;"):d.setAttribute("style","position:absolute; top: 40px;")};window.matchMedia("(min-width: 768px)").matches?(_(),document.addEventListener("scroll",(function(){var t,e;_(),t=d.offsetHeight,e=u.offsetHeight,l.getBoundingClientRect().top-(t+e)<0?d.classList.add("vf-ticket__opacity0"):d.classList.remove("vf-ticket__opacity0"),y(),b()}))):document.addEventListener("scroll",(function(){y(),b()})),h(t).forEach((function(t){t.addEventListener("click",(function(){return m(t)}))})),h(e).forEach((function(t){t.addEventListener("click",(function(){return m(t)}))})),document.querySelectorAll("[data-cta]").forEach((function(t){var e,a,o,n,r,i,c,d,l,u,s,m,p,f,y=t.querySelector("[data-cta-a11y]"),b=w(t.getAttribute("data-cta").split(":"),3),_=b[0],g=b[1],h=b[2];void 0!==(null===(e=v[_][g][h])||void 0===e?void 0:e.url)&&t.setAttribute("href",null===(a=v[_][g][h])||void 0===a?void 0:a.url),void 0!==(null===(o=v[_][g][h])||void 0===o?void 0:o.category)&&t.setAttribute("data-analytics-category",null===(n=v[_][g][h])||void 0===n?void 0:n.category),void 0!==(null===(r=v[_][g][h])||void 0===r?void 0:r.element)&&t.setAttribute("data-analytics-element",null===(i=v[_][g][h])||void 0===i?void 0:i.element),void 0!==(null===(c=v[_][g][h])||void 0===c?void 0:c.context)&&t.setAttribute("data-analytics-context",null===(d=v[_][g][h])||void 0===d?void 0:d.context),void 0!==(null===(l=v[_][g][h])||void 0===l?void 0:l.id)&&t.setAttribute("data-analytics-id",null===(u=v[_][g][h])||void 0===u?void 0:u.id),void 0!==(null===(s=v[_][g][h])||void 0===s?void 0:s.callToAction)&&t.setAttribute("onmousedown",null===(m=v[_][g][h])||void 0===m?void 0:m.callToAction),void 0!==(null===(p=v[_][g][h])||void 0===p?void 0:p.a11y)&&(y.innerHTML=null===(f=v[_][g][h])||void 0===f?void 0:f.a11y)}))}}]);