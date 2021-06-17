/**
 * Vodafone Reboot Framework: Version 2.7.1. Generation Date: 2021-06-17T14:47:56.406Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/colectivos/ilimitada_avanzada_300/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/colectivos/ilimitada_avanzada_300/resources/scripts/analyticsAndThirdURLForCta.js":
/*!***********************************************************************************************************************************************************************!*\
  !*** /Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/colectivos/ilimitada_avanzada_300/resources/scripts/analyticsAndThirdURLForCta.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../../../../Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/colectivos/ilimitada_avanzada_300/resources/scripts/main.js":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/colectivos/ilimitada_avanzada_300/resources/scripts/main.js ***!
  \*************************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/colectivos/ilimitada_avanzada_300/resources/scripts/tools.js");
/* harmony import */ var _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analyticsAndThirdURLForCta */ "../../../../../../Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/colectivos/ilimitada_avanzada_300/resources/scripts/analyticsAndThirdURLForCta.js");
/* harmony import */ var _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utag_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utag_data */ "../../../../../../Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/colectivos/ilimitada_avanzada_300/resources/scripts/utag_data.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  console.log('Site visually ready'); // DO SOMETHING
};
/*
 *   Método que se dispara cuando el ws2r.vX.js
 *   ya se ha cargado y está diponible.
 * */


_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onFrameworkReady = function () {
  console.log('Site functionality ready'); // Speed Selector

  var typeOfSpeedButton = document.querySelectorAll('[data-js-vf="_buttonSpeed"]');
  var typeOfLineButton = document.querySelectorAll('[data-js-vf="_buttonTypeLine"]'); // Bloques de información para mostrar y/o ocultar en el HTML

  var infoPortability = document.querySelectorAll('[data-js-vf="_portability"]');
  var infoNewNumber = document.querySelectorAll('[data-js-vf="_newNumber"]');
  var secondLine = document.querySelectorAll('[data-js-vf="_secondLine"]');
  var secondLine2 = document.querySelectorAll('[data-js-vf="_secondLine2"]');
  var showSticky = document.querySelector('[data-js-vf="_showOrHideSticky"]');
  var stickyRate = document.querySelector('[data-js-vf="_stickyRate"]');
  var banner = document.querySelector('[data-js="_banner"]');
  var ticket = document.querySelector('[data-js-vf="_ticket"]');
  var mddFooter = document.querySelector('.MDDfooter');
  var mddHeader = document.querySelector('.mdd-desktop');
  /**
   * Declaración de las fucniones.
   */

  /**
   * Función para mostrar u ocultar elementos dentro del HTML en función de la acción que se le pase.
   * @param {string} action tipo de acción a ejecutar
   * @param {array} listInfo Listado de elementos HTML sobre los que se ejecutará la acción
   * @returns
   */

  var toggleInfo = function toggleInfo() {
    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hide';
    var listInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (listInfo.length === 0) return console.error("[Fn: toogleInfoRegular] The param listInfo is empty ");
    var actions = {
      'hide': function hide() {
        listInfo.forEach(function (item) {
          item.classList.add('ws10-u--hidden');
          item.setAttribute('aria-hidden', 'true');
        });
      },
      'show': function show() {
        listInfo.forEach(function (item) {
          item.classList.remove('ws10-u--hidden');
          item.removeAttribute('aria-hidden', 'true');
        });
      }
    };
    actions[action]();
    return false;
  };
  /**
   * Función que recibe un element HTML para ver que tipo de acción va a ejecutar.
   * @param {HTMLElement} label Elemento del HTML que deciditá la acción
   */


  var actionsType = function actionsType(label) {
    var speedType = label.getAttribute('data-js-vf-value');
    var rate = {
      "newNumber": function newNumber() {
        return _newNumber();
      },
      "portability": function portability() {
        return _portability();
      }
    };
    rate[speedType]();
  };
  /**
   * Función que MUESTRA la información de PORTABILIDAD y OCULTA la información de la NUEVO NUMERO
   */


  var _portability = function _portability() {
    toggleInfo('show', [].concat(_toConsumableArray(infoPortability), _toConsumableArray(secondLine), _toConsumableArray(secondLine2)));
    toggleInfo('hide', infoNewNumber);
  };
  /**
   * Función que MUESTRA la información de NUEVO NUMERO y OCULTA la información de la PORTABILIDAD
   */


  var _newNumber = function _newNumber() {
    toggleInfo('show', infoNewNumber);
    toggleInfo('hide', [].concat(_toConsumableArray(infoPortability), _toConsumableArray(secondLine), _toConsumableArray(secondLine2)));
  };
  /**
   * Funcionalidades para el ticket de la página
   */


  var showStickyRate = function showStickyRate() {
    var infoBanner = banner.getBoundingClientRect();

    if (infoBanner.bottom - 80 < 0) {
      stickyRate.classList.remove('ws10-u--hidden');
    } else {
      stickyRate.classList.add('ws10-u--hidden');
    }
  };

  var hideStickyRate = function hideStickyRate() {
    var mddFooterHeight = mddFooter.getBoundingClientRect();
    var showStickyHeight = stickyRate.getBoundingClientRect();

    if (mddFooterHeight.top < showStickyHeight.top) {
      stickyRate.classList.add('ws10-u--hidden');
    }
  };

  var positionOfTicket = function positionOfTicket() {
    var infoBanner = banner.getBoundingClientRect();

    if (infoBanner.top < 0) {
      ticket.setAttribute('style', 'position:fixed; top: 70px;');
    } else {
      ticket.setAttribute('style', 'position:absolute; top: 40px;');
    }
  };

  var ticketOpacity = function ticketOpacity() {
    var ticketHeight = ticket.offsetHeight;
    var mddHeaderHeight = mddHeader.offsetHeight;
    var mddFooterHeight = mddFooter.getBoundingClientRect();

    if (mddFooterHeight.top - (ticketHeight + mddHeaderHeight) < 0) {
      ticket.classList.add('vf-ticket__opacity0');
    } else {
      ticket.classList.remove('vf-ticket__opacity0');
    }
  };
  /**
   * Funcionalidades para la analitica de la web
   */

  /**
   *
   *
   * @param {object} jsonData Información que tiene que incluirse en el HTML
   */


  var addAnalyticsThirdURL = function addAnalyticsThirdURL(jsonData) {
    var ctaList = document.querySelectorAll('[data-cta]');
    ctaList.forEach(function (cta) {
      var _analyticsAndThirdURL, _analyticsAndThirdURL2, _analyticsAndThirdURL3, _analyticsAndThirdURL4, _analyticsAndThirdURL5, _analyticsAndThirdURL6, _analyticsAndThirdURL7, _analyticsAndThirdURL8, _analyticsAndThirdURL9, _analyticsAndThirdURL10, _analyticsAndThirdURL11, _analyticsAndThirdURL12, _analyticsAndThirdURL13, _analyticsAndThirdURL14;

      var textA11y = cta.querySelector('[data-cta-a11y]');

      var _cta$getAttribute$spl = cta.getAttribute('data-cta').split(':'),
          _cta$getAttribute$spl2 = _slicedToArray(_cta$getAttribute$spl, 3),
          velocity = _cta$getAttribute$spl2[0],
          type = _cta$getAttribute$spl2[1],
          position = _cta$getAttribute$spl2[2];

      if (((_analyticsAndThirdURL = _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"][velocity][type][position]) === null || _analyticsAndThirdURL === void 0 ? void 0 : _analyticsAndThirdURL.url) !== undefined) cta.setAttribute('href', (_analyticsAndThirdURL2 = _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"][velocity][type][position]) === null || _analyticsAndThirdURL2 === void 0 ? void 0 : _analyticsAndThirdURL2.url);
      if (((_analyticsAndThirdURL3 = _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"][velocity][type][position]) === null || _analyticsAndThirdURL3 === void 0 ? void 0 : _analyticsAndThirdURL3.category) !== undefined) cta.setAttribute('data-analytics-category', (_analyticsAndThirdURL4 = _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"][velocity][type][position]) === null || _analyticsAndThirdURL4 === void 0 ? void 0 : _analyticsAndThirdURL4.category);
      if (((_analyticsAndThirdURL5 = _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"][velocity][type][position]) === null || _analyticsAndThirdURL5 === void 0 ? void 0 : _analyticsAndThirdURL5.element) !== undefined) cta.setAttribute('data-analytics-element', (_analyticsAndThirdURL6 = _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"][velocity][type][position]) === null || _analyticsAndThirdURL6 === void 0 ? void 0 : _analyticsAndThirdURL6.element);
      if (((_analyticsAndThirdURL7 = _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"][velocity][type][position]) === null || _analyticsAndThirdURL7 === void 0 ? void 0 : _analyticsAndThirdURL7.context) !== undefined) cta.setAttribute('data-analytics-context', (_analyticsAndThirdURL8 = _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"][velocity][type][position]) === null || _analyticsAndThirdURL8 === void 0 ? void 0 : _analyticsAndThirdURL8.context);
      if (((_analyticsAndThirdURL9 = _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"][velocity][type][position]) === null || _analyticsAndThirdURL9 === void 0 ? void 0 : _analyticsAndThirdURL9.id) !== undefined) cta.setAttribute('data-analytics-id', (_analyticsAndThirdURL10 = _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"][velocity][type][position]) === null || _analyticsAndThirdURL10 === void 0 ? void 0 : _analyticsAndThirdURL10.id);
      if (((_analyticsAndThirdURL11 = _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"][velocity][type][position]) === null || _analyticsAndThirdURL11 === void 0 ? void 0 : _analyticsAndThirdURL11.callToAction) !== undefined) cta.setAttribute('onmousedown', (_analyticsAndThirdURL12 = _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"][velocity][type][position]) === null || _analyticsAndThirdURL12 === void 0 ? void 0 : _analyticsAndThirdURL12.callToAction);
      if (((_analyticsAndThirdURL13 = _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"][velocity][type][position]) === null || _analyticsAndThirdURL13 === void 0 ? void 0 : _analyticsAndThirdURL13.a11y) !== undefined) textA11y.innerHTML = (_analyticsAndThirdURL14 = _analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"][velocity][type][position]) === null || _analyticsAndThirdURL14 === void 0 ? void 0 : _analyticsAndThirdURL14.a11y;
    });
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

  _toConsumableArray(typeOfSpeedButton).forEach(function (label) {
    label.addEventListener('click', function () {
      return actionsType(label);
    });
  });

  _toConsumableArray(typeOfLineButton).forEach(function (label) {
    label.addEventListener('click', function () {
      return actionsType(label);
    });
  });

  addAnalyticsThirdURL(_analyticsAndThirdURLForCta__WEBPACK_IMPORTED_MODULE_1__["analyticsAndThirdURLForCta"]);
};

/***/ }),

/***/ "../../../../../../Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/colectivos/ilimitada_avanzada_300/resources/scripts/tools.js":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/colectivos/ilimitada_avanzada_300/resources/scripts/tools.js ***!
  \**************************************************************************************************************************************************/
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

/***/ }),

/***/ "../../../../../../Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/colectivos/ilimitada_avanzada_300/resources/scripts/utag_data.js":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/colectivos/ilimitada_avanzada_300/resources/scripts/utag_data.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var utag_data = {
  default_plan: "vodafone one ilimitada avanzada 300Mbps",
  plans_add2cart: [{
    "product_name": "vodafone one ilimitada avanzada 300Mbps",
    "product_category": "movil+fibra",
    "product_variant": "Datos y minutos ilimitados+300Mbps Fibra",
    "promotion_price_name": "Promo colectivos + Promo 50% One Ilimitada Avanzada 300Mbps",
    "promotion_gift_name": "",
    "product_id": "",
    "product_detail": "",
    "product_sale_type": "yes:transactional",
    "product_additional_lines": [{
      "product_name": "tarifa movil lite",
      "product variant": "4GB Datos móviles 5G",
      "product_category": "movil",
      "promotion_price_name": "2 x 1 lite",
      "promotion_gift_name": "",
      "product_id": ""
    }]
  }, {
    "product_name": "vodafone one ilimitada avanzada 600Mbps",
    "product_category": "movil+fibra",
    "product_variant": "Datos y minutos ilimitados+600Mbps Fibra",
    "promotion_price_name": "Promo colectivos + Promo 50% + T&P One Ilimitada Avanzada 600Mb",
    "promotion_gift_name": "",
    "product_id": "",
    "product_detail": "",
    "product_sale_type": "yes:transactional",
    "product_additional_lines": [{
      "product_name": "tarifa movil lite",
      "product_category": "movil",
      "product variant": "4GB Datos móviles 5G",
      "promotion_price_name": "2 x 1 lite",
      "promotion_gift_name": "",
      "product_id": ""
    }]
  }, {
    "product_name": "vodafone one ilimitada avanzada 300Mbps",
    "product_category": "movil+fibra",
    "product_variant": "Datos y minutos ilimitados+300Mbps Fibra",
    "promotion_price_name": "Promo colectivos + Promo 50% One Ilimitada Avanzada 300Mbps",
    "promotion_gift_name": "",
    "product_id": "",
    "product_detail": "",
    "product_sale_type": "yes:transactional"
  }, {
    "product_name": "vodafone one ilimitada avanzada 600Mbps",
    "product_category": "movil+fibra",
    "product_variant": "Datos y minutos ilimitados+600Mbps Fibra",
    "promotion_price_name": "Promo colectivos + Promo 50% + T&P One Ilimitada Avanzada 600Mb",
    "promotion_gift_name": "",
    "product_id": "",
    "product_detail": "",
    "product_sale_type": "yes:transactional"
  }]
};
window.utag_data = _objectSpread(_objectSpread({}, window.utag_data), utag_data);
/* harmony default export */ __webpack_exports__["default"] = (utag_data);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map