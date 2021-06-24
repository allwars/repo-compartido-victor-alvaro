/**
<<<<<<< HEAD
 * Vodafone Reboot Framework: Version 2.15.0. Generation Date: 2021-06-24T10:44:14.143Z
 */

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../../Proyectos/VF/repo-compartido-victor-alvaro/destiny4.0/one/plp/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../Proyectos/VF/repo-compartido-victor-alvaro/destiny4.0/one/plp/resources/scripts/main.js":
/*!*************************************************************************************************************!*\
  !*** /Users/Victor/Proyectos/VF/repo-compartido-victor-alvaro/destiny4.0/one/plp/resources/scripts/main.js ***!
  \*************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../../../Proyectos/VF/repo-compartido-victor-alvaro/destiny4.0/one/plp/resources/scripts/tools.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */

_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady = function () {
  console.log("Site visually ready"); // DO SOMETHING

  var buttonsTypeTotal = document.querySelectorAll('[data-js-vf="_buttonVelocity"]');
  var badgeTotal = document.querySelector('[data-js-vf="_badgeTotal"]'); // Función para elegir el tipo de Vodafone One ilimitada Total

  _toConsumableArray(buttonsTypeTotal).forEach(function (button) {
    button.addEventListener("click", function () {
      return typeOfRate();
    });
  });

  function typeOfRate() {
    var typeOfTotal = document.querySelectorAll('[data-js-vf="_priceTotal"]');

    _toConsumableArray(buttonsTypeTotal).forEach(function (button, index) {
      if (button.classList.contains('vf-active')) {
        button.classList.remove('vf-active');
        button.classList.remove('vf-bold');
        typeOfTotal[index].classList.add('ws10-u--hidden');
        badgeTotal.classList.add('ws10-u--hidden');
      } else {
        button.classList.add('vf-active');
        button.classList.add('vf-bold');
        typeOfTotal[index].classList.remove('ws10-u--hidden');
        badgeTotal.classList.remove('ws10-u--hidden');
      }
    });
  }

  var buttonsTypeMaxi = document.querySelectorAll('[data-js-vf="_buttonVelocityMaxi"]');
  var badgeMaxi = document.querySelector('[data-js-vf="_badgeMaxi"]'); // Función para elegir el tipo de Vodafone One ilimitada MAxi

  _toConsumableArray(buttonsTypeMaxi).forEach(function (button) {
    button.addEventListener("click", function () {
      return typeOfRateMaxi();
    });
  });

  function typeOfRateMaxi() {
    var typeOfMaxi = document.querySelectorAll('[data-js-vf="_priceMaxi"]');

    _toConsumableArray(buttonsTypeMaxi).forEach(function (button, index) {
      if (button.classList.contains('vf-active')) {
        button.classList.remove('vf-active');
        button.classList.remove('vf-bold');
        typeOfMaxi[index].classList.add('ws10-u--hidden');
        badgeMaxi.classList.add('ws10-u--hidden');
      } else {
        button.classList.add('vf-active');
        button.classList.add('vf-bold');
        typeOfMaxi[index].classList.remove('ws10-u--hidden');
        badgeMaxi.classList.remove('ws10-u--hidden');
      }
    });
  }

  var buttonsTypeIlimitada = document.querySelectorAll('[data-js-vf="_buttonVelocityIlimitada"]');
  var badgeIlimitada = document.querySelector('[data-js-vf="_badgeIlimitada"]'); // Función para elegir el tipo de Vodafone One ilimitada 

  _toConsumableArray(buttonsTypeIlimitada).forEach(function (button) {
    button.addEventListener("click", function () {
      return typeOfRateIlimitada();
    });
  });

  function typeOfRateIlimitada() {
    var typeOfIlimitada = document.querySelectorAll('[data-js-vf="_priceIlimitada"]');

    _toConsumableArray(buttonsTypeIlimitada).forEach(function (button, index) {
      if (button.classList.contains('vf-active')) {
        button.classList.remove('vf-active');
        button.classList.remove('vf-bold');
        typeOfIlimitada[index].classList.add('ws10-u--hidden');
        badgeIlimitada.classList.add('ws10-u--hidden');
      } else {
        button.classList.add('vf-active');
        button.classList.add('vf-bold');
        typeOfIlimitada[index].classList.remove('ws10-u--hidden');
        badgeIlimitada.classList.remove('ws10-u--hidden');
      }
    });
  }
};
/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */


_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onFrameworkReady = function () {
  console.log("Site functionality ready"); // DO SOMETHING
};

/***/ }),

/***/ "../../../../../../../../Proyectos/VF/repo-compartido-victor-alvaro/destiny4.0/one/plp/resources/scripts/tools.js":
/*!**************************************************************************************************************!*\
  !*** /Users/Victor/Proyectos/VF/repo-compartido-victor-alvaro/destiny4.0/one/plp/resources/scripts/tools.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Microsites tools js:
 * Este fichero es una muestra de utilidades propias para los microsites.
 * Se puede personalizar a tu gusto
 *
 */
var MICROSITE_ID = '#plp';
var cssMain = document.querySelector('link[data-ws10-microcss]');
var MICROSITE_SELECTION = closest(document.querySelector(MICROSITE_ID), '[data-ws10-microsite]');
var PATH_MICROSITE = MICROSITE_SELECTION ? MICROSITE_SELECTION.dataset.pathmicrosite : '';
var width = document.documentElement.clientWidth;
var isDesktop = width > 1024;
var isTablet = width <= 1024 && width >= 768;
var isMobile = width < 768;
/*
 * Searches for the parent node closest to the element, which complies with the selector
 * @param {} el - Description
 * @param {} selector - Description
 * @param {} stopSelector - Description
 * */

function closest(el, selector, stopSelector) {
  var retval = null;

  while (el) {
    if (el.matches(selector)) {
      retval = el;
      break;
    } else if (stopSelector && el.matches(stopSelector)) {
      break;
    }

    el = el.parentElement;
  }

  return retval;
}
/*
 * Removes the style attr, once the stylesheet have been loaded
 * return undefined
 * */


function _internalCSSInit() {
  if (!ex.cssLoaded) {
    document.querySelector(MICROSITE_ID).removeAttribute("style");
    ex.cssLoaded = true;
    ex.onStylesReady();
  }
}
/*
 * Initializes functionality JS, and advices when JS is loaded.
 * return undefined
 * */


function _internalJSInit() {
  document.removeEventListener('ws10:frameworkReady', _internalJSInit);
  window.ws10.utils.init(document.querySelector(MICROSITE_ID));
  ex.onFrameworkReady();
}
/*
 * Check if stylesheet CSS is loaded
 * @return {boolean}
 * */


function isCSSMicroLoaded() {
  var domStyles = document.styleSheets;
  var countCSS = 0;
  [].forEach.call(domStyles, function (item) {
    var href = item.href || '';

    if (href.indexOf(PATH_MICROSITE + 'css/ws10') !== -1) {
      console.log('WS10 CSS Loaded');
      countCSS++;
    }

    if (href.indexOf(PATH_MICROSITE + 'css/styles.css') !== -1) {
      console.log('MICRO CSS Loaded');
      countCSS++;
    }
  });
  return countCSS === 2;
}

function init() {// DO SOMETHING
}
/*
 * listen event, once have been loaded the files CSS
 * */


if (!isCSSMicroLoaded()) {
  if (cssMain) {
    cssMain.addEventListener('load', _internalCSSInit); // Make sure microsite gets visible after 3 secs

    setTimeout(_internalCSSInit, 3000);
  } else {
    setTimeout(_internalCSSInit, 100);
  }
} else if (isCSSMicroLoaded()) {
  setTimeout(_internalCSSInit, 100);
}
/*
 * listen event, once have been loaded the files JS
 * */


if (window.ws10) {
  setTimeout(_internalJSInit, 100);
} else {
  document.addEventListener('ws10:frameworkReady', _internalJSInit);
}

var ex = {
  isDesktop: isDesktop,
  isTablet: isTablet,
  isMobile: isMobile,
  micrositeId: MICROSITE_ID,
  micrositePath: PATH_MICROSITE,
  init: init,
  cssLoaded: false,
  onStylesReady: function onStylesReady() {
    return null;
  },
  onFrameworkReady: function onFrameworkReady() {
    return null;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ex);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
=======
 * Vodafone Reboot Framework: Version 2.11.4. Generation Date: 2021-06-16T09:53:04.691Z
 */

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=document.querySelector("link[data-ws10-microcss]"),o=function(e,t,n){var r=null;for(;e;){if(e.matches(t)){r=e;break}if(n&&e.matches(n))break;e=e.parentElement}return r}(document.querySelector("#plp"),"[data-ws10-microsite]"),a=o?o.dataset.pathmicrosite:"",i=document.documentElement.clientWidth,s=i>1024,c=i<=1024&&i>=768,d=i<768;function l(){v.cssLoaded||(document.querySelector("#plp").removeAttribute("style"),v.cssLoaded=!0,v.onStylesReady())}function u(){document.removeEventListener("ws10:frameworkReady",u),window.ws10.utils.init(document.querySelector("#plp")),v.onFrameworkReady()}function f(){var e=document.styleSheets,t=0;return[].forEach.call(e,(function(e){var n=e.href||"";-1!==n.indexOf(a+"css/ws10")&&(console.log("WS10 CSS Loaded"),t++),-1!==n.indexOf(a+"css/styles.css")&&(console.log("MICRO CSS Loaded"),t++)})),2===t}f()?f()&&setTimeout(l,100):r?(r.addEventListener("load",l),setTimeout(l,3e3)):setTimeout(l,100),window.ws10?setTimeout(u,100):document.addEventListener("ws10:frameworkReady",u);var v={isDesktop:s,isTablet:c,isMobile:d,micrositeId:"#plp",micrositePath:a,init:function(){},cssLoaded:!1,onStylesReady:function(){return null},onFrameworkReady:function(){return null}},m=v;function y(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}m.onStylesReady=function(){console.log("Site visually ready");var e=document.querySelectorAll('[data-js-vf="_buttonVelocity"]'),t=document.querySelector('[data-js-vf="_badgeTotal"]');y(e).forEach((function(n){n.addEventListener("click",(function(){return n=document.querySelectorAll('[data-js-vf="_priceTotal"]'),void y(e).forEach((function(e,r){e.classList.contains("vf-active")?(e.classList.remove("vf-active"),e.classList.remove("vf-bold"),n[r].classList.add("ws10-u--hidden"),t.classList.add("ws10-u--hidden")):(e.classList.add("vf-active"),e.classList.add("vf-bold"),n[r].classList.remove("ws10-u--hidden"),t.classList.remove("ws10-u--hidden"))}));var n}))}));var n=document.querySelectorAll('[data-js-vf="_buttonVelocityMaxi"]'),r=document.querySelector('[data-js-vf="_badgeMaxi"]');y(n).forEach((function(e){e.addEventListener("click",(function(){return e=document.querySelectorAll('[data-js-vf="_priceMaxi"]'),void y(n).forEach((function(t,n){t.classList.contains("vf-active")?(t.classList.remove("vf-active"),t.classList.remove("vf-bold"),e[n].classList.add("ws10-u--hidden"),r.classList.add("ws10-u--hidden")):(t.classList.add("vf-active"),t.classList.add("vf-bold"),e[n].classList.remove("ws10-u--hidden"),r.classList.remove("ws10-u--hidden"))}));var e}))}));var o=document.querySelectorAll('[data-js-vf="_buttonVelocityIlimitada"]'),a=document.querySelector('[data-js-vf="_badgeIlimitada"]');y(o).forEach((function(e){e.addEventListener("click",(function(){return e=document.querySelectorAll('[data-js-vf="_priceIlimitada"]'),void y(o).forEach((function(t,n){t.classList.contains("vf-active")?(t.classList.remove("vf-active"),t.classList.remove("vf-bold"),e[n].classList.add("ws10-u--hidden"),a.classList.add("ws10-u--hidden")):(t.classList.add("vf-active"),t.classList.add("vf-bold"),e[n].classList.remove("ws10-u--hidden"),a.classList.remove("ws10-u--hidden"))}));var e}))}))},m.onFrameworkReady=function(){console.log("Site functionality ready")}}]);
>>>>>>> 92aecf4af7997be9c2cb0400adfb6f62d1be09f9
