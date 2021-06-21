/**
 * Vodafone Reboot Framework: Version 2.7.1. Generation Date: 2021-06-21T08:54:07.174Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/04-tv/tv/home/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/04-tv/tv/home/resources/scripts/_tab-group.ws10.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/04-tv/tv/home/resources/scripts/_tab-group.ws10.js ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabGroupWs10; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var defaults = {
  $element: undefined,
  selectors: {},
  classes: {
    tabActive: "vfes-tab-group__container-item--active"
  }
};
/**
 * Tabs.
 *
 * @module TabGroupWs10
 * @param {Object} properties - specifies the configurations
 * for the module.
 */

var TabGroupWs10 = /*#__PURE__*/function () {
  function TabGroupWs10() {
    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TabGroupWs10);

    this.$element = properties.$element;
    this.selectors = defaults.selectors;
    this.classes = defaults.classes;
    this.tabContainer = this.$element.querySelector("[data-tab=\"tab-container\"]");
    this.tabsItem = this.tabContainer.querySelectorAll("[role=\"tab\"]");
    this.onChanged = new Event('vfes:changed');
  }

  _createClass(TabGroupWs10, [{
    key: "a11y",
    value: function a11y() {
      _toConsumableArray(this.tabsItem).forEach(function (tab) {
        if (!tab.hasAttribute("role") === "tab" || !tab.hasAttribute("data-option")) {
          console.log('Las tabs group tienen que tener los atributos: "role" con el valor de tab, "aria-selected" con un valor true o false, "data-option" con un valor numérico');
        }
      });
    }
    /**
     * Initialise the module.
     *
     * @function init
     *
     * @return undefined
     */

  }, {
    key: "init",
    value: function init() {
      this.bind();
      this.a11y();
    }
    /**
     * Bind the events to the actionable elements
     * within the tabs system.
     *
     * @function bind
     *
     * @return undefined
     */

  }, {
    key: "bind",
    value: function bind() {
      var _this = this;

      var mod = this;

      _toConsumableArray(mod.tabsItem).forEach(function (tab) {
        tab.addEventListener('click', function () {
          if (tab.getAttribute('data-tab-active') === 'false') {
            var activeTab = mod.getTabActive(); // Pestaña actual activada

            activeTab.classList.remove(mod.classes.tabActive);
            activeTab.setAttribute('data-tab-active', 'false');
            mod.$element.children[activeTab.getAttribute('aria-controls')].setAttribute('aria-expanded', 'false'); // Nueva pestaña a activar

            tab.classList.add(mod.classes.tabActive);
            tab.setAttribute('data-tab-active', 'true');
            mod.$element.children[tab.getAttribute('aria-controls')].setAttribute('aria-expanded', 'true');
            mod.onChanged.tab = tab;
            mod.onChanged.title = tab.innerText;
            mod.onChanged.index = tab.getAttribute('data-option');
            mod.onChanged.contentTab = mod.$element.querySelector("[aria-expanded=\"true\"]");
            mod.$element.dispatchEvent(mod.onChanged);
          }
        });
      });

      this.tabContainer.addEventListener('click', function () {
        _this.tabContainer.getAttribute('aria-expanded') === 'false' ? _this.tabContainer.setAttribute('aria-expanded', 'true') : _this.tabContainer.setAttribute('aria-expanded', 'false');
      });
    }
  }, {
    key: "getTabActive",
    value: function getTabActive() {
      return this.tabContainer.querySelector("[data-tab-active=\"true\"]");
    }
  }]);

  return TabGroupWs10;
}();



/***/ }),

/***/ "../../../../../../Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/04-tv/tv/home/resources/scripts/main.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/04-tv/tv/home/resources/scripts/main.js ***!
  \*****************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/04-tv/tv/home/resources/scripts/tools.js");
/* harmony import */ var _tab_group_ws10__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_tab-group.ws10 */ "../../../../../../Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/04-tv/tv/home/resources/scripts/_tab-group.ws10.js");


/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */

_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady = function () {
  console.log("Site visually ready");
  var tabsGroup = document.querySelector('[data-vfes-js="_tabsGroup"]');
  var tabsGroupMod = new _tab_group_ws10__WEBPACK_IMPORTED_MODULE_1__["default"]({
    $element: tabsGroup
  });
  var cardConvergente = document.querySelector('[data-vfms-js="rateConvergente"]');
  var selectorTabMobile = document.querySelector('[data-vfms-js="buttonTabMobile"]');
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var customParam = urlParams.get('tv');
  var elemSelectedTab = document.getElementById('vfms-tabs-selected');
  tabsGroupMod.init();
  elemSelectedTab.addEventListener('vfes:changed', function (event) {
    if (event.index == 1) {
      cardConvergente.classList.remove('vfms-hide');
    } else {
      cardConvergente.classList.add('vfms-hide');
    }
  }); // Mostrar o ocultar tab y card rate según parámetro de url

  if (customParam == 'm') {
    setTimeout(function () {
      selectorTabMobile.click();
    }, 1000);
    cardConvergente.classList.add('vfms-hide');
  } else {
    cardConvergente.classList.remove('vfms-hide');
  }
};
/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */


_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onFrameworkReady = function () {// DO SOMETHING
};

/***/ }),

/***/ "../../../../../../Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/04-tv/tv/home/resources/scripts/tools.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/palomaelena/Documents/Proyectos/vODAFONE/repo-compartido-victor-alvaro/04-tv/tv/home/resources/scripts/tools.js ***!
  \******************************************************************************************************************************/
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
var MICROSITE_ID = '#home';
var cssMain = document.querySelector('link[data-microcss]');
var MICROSITE_SELECTION = closest(document.querySelector(MICROSITE_ID), '[data-pathmicrosite]');
var PATH_MICROSITE = MICROSITE_SELECTION ? MICROSITE_SELECTION.dataset.pathmicrosite : '';
var width = document.documentElement.clientWidth;
var isDesktop = width > 969;
var isTablet = width <= 969 && width >= 768;
var isMobile = width < 768 && width > 300;
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
  window.vfes._utils.init(document.querySelector(MICROSITE_ID));

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

    if (href.indexOf(PATH_MICROSITE + 'css/ws2r') !== -1) {
      console.log('WS2RCSS Loaded');
      countCSS++;
    }

    if (href.indexOf(PATH_MICROSITE + 'css/styles.css') !== -1) {
      console.log('MICROCSS Loaded');
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
  cssMain.addEventListener('load', _internalCSSInit); // Make sure microsite gets visible after 3 secs

  setTimeout(_internalCSSInit, 3000);
} else if (isCSSMicroLoaded()) {
  setTimeout(_internalCSSInit, 100);
}
/*
 * listen event, once have been loaded the files JS
 * */


if (window.vfes) {
  setTimeout(_internalJSInit, 100);
} else {
  document.addEventListener('vfes:frameworkReady', _internalJSInit);
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