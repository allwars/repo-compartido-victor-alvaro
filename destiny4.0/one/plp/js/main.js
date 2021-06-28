/**
 * Vodafone Reboot Framework: Version 2.15.0. Generation Date: 2021-06-28T08:46:51.276Z
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