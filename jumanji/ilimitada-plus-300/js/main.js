/**
 * Vodafone Reboot Framework: Version 2.15.0. Generation Date: 2021-06-14T13:46:53.824Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../../Proyectos/VF/repo-compartido-victor-alvaro/jumanji/ilimitada-plus-300/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../Proyectos/VF/repo-compartido-victor-alvaro/jumanji/ilimitada-plus-300/resources/scripts/main.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/Victor/Proyectos/VF/repo-compartido-victor-alvaro/jumanji/ilimitada-plus-300/resources/scripts/main.js ***!
  \*********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../../../Proyectos/VF/repo-compartido-victor-alvaro/jumanji/ilimitada-plus-300/resources/scripts/tools.js");
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

  var typeOfLineButton = document.querySelectorAll('[data-js-vf="_buttonTypeLine"]');
  var infosPortability = document.querySelectorAll('[data-js-vf="_portability"]');
  var infosNewNumber = document.querySelectorAll('[data-js-vf="_newNumber"]');
  var secondLine = document.querySelector('[data-js-vf="_secondLine"]');
  var secondLine2 = document.querySelector('[data-js-vf="_secondLine2"]');
  /*const terminalesPorta = document.querySelector('[data-js-vf="_terminales"]');*/

  var showSticky = document.querySelector('[data-js-vf="_showOrHideSticky"]');
  var stickyRate = document.querySelector('[data-js-vf="_stickyRate"]');
  var banner = document.querySelector('[data-js="_banner"]');
  var ticket = document.querySelector('[data-js-vf="_ticket"]');
  var mddFooter = document.querySelector('.MDDfooter');
  var mddHeader = document.querySelector('.mdd-desktop');
  var width = document.documentElement.clientWidth;
  var isDesktop = width > 1024;
  var isTablet = width <= 1024 && width >= 768; // Line Selector

  _toConsumableArray(typeOfLineButton).forEach(function (label) {
    label.addEventListener('click', function () {
      return typeLine(label);
    });
  });

  function typeLine(label) {
    var lineType = label.getAttribute("data-js-vf-value");

    if (lineType === "newNumber") {
      newNumber();
    } else {
      portability();
    }
  }

  function portability() {
    secondLine.classList.remove("ws10-u--hidden");
    secondLine2.classList.remove("ws10-u--hidden");
    /*terminalesPorta.classList.remove('ws10-u--hidden');*/

    _toConsumableArray(infosPortability).forEach(function (infoPortability, index) {
      infoPortability.classList.remove("ws10-u--hidden"); //infosNewNumber[index].classList.add("ws10-u--hidden");
    });

    _toConsumableArray(infosNewNumber).forEach(function (infoNewNumber) {
      infoNewNumber.classList.add("ws10-u--hidden");
    });
  }

  function newNumber() {
    _toConsumableArray(infosNewNumber).forEach(function (infoNewNumber, index) {
      infoNewNumber.classList.remove("ws10-u--hidden"); //infosPortability[index].classList.add("ws10-u--hidden");
    });

    _toConsumableArray(infosPortability).forEach(function (infoPortability) {
      infoPortability.classList.add("ws10-u--hidden");
    });

    secondLine.classList.add("ws10-u--hidden");
    secondLine2.classList.add("ws10-u--hidden");
    /*terminalesPorta.classList.add('ws10-u--hidden');*/
  } // Sticky


  document.addEventListener('scroll', showStickyRate);
  document.addEventListener('scroll', hideStickyRate);

  if (isDesktop || isTablet) {
    document.addEventListener('scroll', positionOfTicket);
    document.addEventListener('scroll', ticketOpacity);
  }

  function showStickyRate() {
    var infoBanner = banner.getBoundingClientRect();

    if (infoBanner.bottom - 80 < 0) {
      stickyRate.classList.remove('ws10-u--hidden');
    } else {
      stickyRate.classList.add('ws10-u--hidden');
    }
  }

  function hideStickyRate() {
    var mddFooterHeight = mddFooter.getBoundingClientRect();
    var showStickyHeight = stickyRate.getBoundingClientRect();

    if (mddFooterHeight.top < showStickyHeight.top) {
      stickyRate.classList.add('ws10-u--hidden');
    }
  }

  function ticketOpacity() {
    var ticketHeight = ticket.offsetHeight;
    var mddHeaderHeight = mddHeader.offsetHeight;
    var mddFooterHeight = mddFooter.getBoundingClientRect();

    if (mddFooterHeight.top - (ticketHeight + mddHeaderHeight) < 0) {
      ticket.classList.add('vf-ticket__opacity0');
    } else {
      ticket.classList.remove('vf-ticket__opacity0');
    }
  }

  function positionOfTicket() {
    var infoBanner = banner.getBoundingClientRect();
    console.log(infoBanner);

    if (infoBanner.top < 0) {
      ticket.setAttribute('style', 'position:fixed; top: 70px;');
    } else {
      ticket.setAttribute('style', 'position:absolute;  top: 40px;');
    }
  }
};
/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */


_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onFrameworkReady = function () {
  console.log("Site functionality ready"); // Speed Selector

  var typeOfSpeedButton = document.querySelectorAll('[data-js-vf="_buttonSpeed"]');
  var infoRegular = document.querySelectorAll('[data-js-vf="_regularRate"]');
  var infoRecommended = document.querySelectorAll('[data-js-vf="_recommendedRate"]');
  var recommededCheck = document.querySelector('[data-js-vf="recommendedRateCheck"]');
  var regularCheck = document.querySelector('[data-js-vf="regularRateCheck"]');
  var queryString = window.location.search;
  console.log(queryString);

  if (queryString === "?600mbps" || queryString === "?600mbps=") {
    regularRate();
  } else {
    recommendedRate();
  }

  _toConsumableArray(typeOfSpeedButton).forEach(function (label) {
    label.addEventListener('click', function () {
      return typeSpeed(label);
    });
  });

  function typeSpeed(label) {
    var speedType = label.getAttribute("data-js-vf-value");

    if (speedType === "recommendedRate") {
      recommendedRate();
    } else {
      regularRate();
    }
  }

  function regularRate() {
    _toConsumableArray(infoRegular).forEach(function (infoRegular, index) {
      infoRegular.classList.remove('ws10-u--hidden');
      infoRecommended[index].classList.add('ws10-u--hidden');
      recommededCheck.removeAttribute("checked", "");
      regularCheck.setAttribute("checked", "");
      infoRegular.removeAttribute("aria-hidden", "true");
      infoRecommended[index].setAttribute("aria-hidden", "true");
    });
  }

  function recommendedRate() {
    _toConsumableArray(infoRecommended).forEach(function (infoRecommended, index) {
      infoRecommended.classList.remove('ws10-u--hidden');
      infoRegular[index].classList.add('ws10-u--hidden');
      regularCheck.removeAttribute("checked", "");
      recommededCheck.setAttribute("checked", "");
      infoRecommended.removeAttribute("aria-hidden", "true");
      infoRegular[index].setAttribute("aria-hidden", "true");
    });
  } // DO SOMETHING

};
/**
   * Bloque de inicialización de la página
   */


if (window.matchMedia('(min-width: 768px)').matches) {
  positionOfTicket();
  document.addEventListener('scroll', function () {
    positionOfTicket();
    ticketOpacity();
    showStickyRate();
    hideStickyRate();
  });
} else {
  document.addEventListener('scroll', function () {
    showStickyRate();
    hideStickyRate();
  });
}

/***/ }),

/***/ "../../../../../../../../Proyectos/VF/repo-compartido-victor-alvaro/jumanji/ilimitada-plus-300/resources/scripts/tools.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/Victor/Proyectos/VF/repo-compartido-victor-alvaro/jumanji/ilimitada-plus-300/resources/scripts/tools.js ***!
  \**********************************************************************************************************************/
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
if (performance && performance.mark) {
  performance.mark('micro exec');
}

var MICROSITE_ID = '#ilimitada';
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
    if (document.querySelector(MICROSITE_ID)) {
      document.querySelector(MICROSITE_ID).removeAttribute("style");
    }

    ex.cssLoaded = true;
    ex.onStylesReady();

    if (performance && performance.mark) {
      performance.mark('micro css ready');
    }
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

  if (performance && performance.mark) {
    performance.mark('micro js ready');
    console.timeEnd("microsite instantiation");
  }
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

    setTimeout(function () {
      console.warn("Microsite visible by 3s timeout");

      _internalCSSInit();
    }, 3000);
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