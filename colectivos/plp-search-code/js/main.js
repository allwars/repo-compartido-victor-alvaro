/**
 * Vodafone Reboot Framework: Version 2.15.0. Generation Date: 2021-06-24T06:55:49.910Z
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../../Proyectos/VF/repo-compartido-victor-alvaro/colectivos/plp-search-code/resources/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../Proyectos/VF/repo-compartido-victor-alvaro/colectivos/plp-search-code/resources/scripts/main.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/Victor/Proyectos/VF/repo-compartido-victor-alvaro/colectivos/plp-search-code/resources/scripts/main.js ***!
  \*********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "../../../../../../../../Proyectos/VF/repo-compartido-victor-alvaro/colectivos/plp-search-code/resources/scripts/tools.js");

/*
*   Método que se dispara cuando el ws2r.vX.css
*   ya se ha cargado y ha pintado la web
* */

_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onStylesReady = function () {
  console.log("Site visually ready"); // DO SOMETHING
};
/*
*   Método que se dispara cuando el ws2r.vX.js
*   ya se ha cargado y está diponible.
* */


_tools__WEBPACK_IMPORTED_MODULE_0__["default"].onFrameworkReady = function () {
  console.log("Site functionality ready");
  var searchForm = document.querySelector('.js-form');
  var inputSearch = document.getElementById('searchCode');
  var buttonSearch = document.querySelector('.vfms-button__search');
  var buttonUnderstood = document.querySelector('.vfms-button__understood');
  var modals = document.querySelector('[data-vfes-js="_modal"]');
  var modalFindCode = document.getElementById('codeFind');
  var modalNoFoundCode = document.getElementById('noFoundCode');
  var instanceModal = new ws10.backdrop({
    $element: modals
  });
  var textClean = document.querySelector('.vfms-text-clean');
  var company = "";
  var companySelected = document.getElementById('company-selected');
  var btnClose = document.querySelector('[data-js-vf="vfms-close"]');
  textClean.addEventListener("click", function () {
    buttonSearch.disabled = true;
  });
  buttonSearch.addEventListener("click", findCode);
  buttonUnderstood.addEventListener("click", closeBackDropAndClean);

  function closeBackDropAndClean(e) {
    e.preventDefault();
    btnClose.click();
  }

  var errorText = document.querySelector('[data-js-vf="error-text"]');

  function findCode(e) {
    e.preventDefault();
    var inputCode = inputSearch.value.toUpperCase();
    fetch('https://www.vodafone.es/c/srv/vf-back-trastienda/api/urlCode/getInfoByCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: inputCode
      })
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      console.log("json-", json.existsCode);
      var codes = json.existsCode;
      company = json.company;

      if (codes === true) {
        buttonSearch.setAttribute("data-analytics-code", inputCode);
        companySelected.innerHTML = company; // descomentar en producción

        checkPopUp("valido");
        var contentModal = document.querySelector("#modalok");
        ws10.utils.getInstanceForElement(contentModal).openBackdrop(contentModal.querySelector("#search-result"));
      } else {
        // descomentar en producción
        checkPopUp("invalido");

        var _contentModal = document.querySelector("#modalko");

        ws10.utils.getInstanceForElement(_contentModal).openBackdrop(_contentModal.querySelector("#search-result"));
      }
    });
  }

  var counterKeys = 0;

  var inputHandler = function inputHandler(currentText) {
    var inputCurrentText = currentText;
    var inputStr = inputSearch.value;
    var hyphen = inputStr.charAt(11);
    console.log("hyphen", hyphen);
    counterKeys += 1;
    console.log("input-current", inputCurrentText);
    console.log("input", inputStr.length);

    if (inputStr.length === 1 && inputCurrentText != "VF") {
      showError();
    } else {
      hideError();
    }

    if (inputStr.length === 2 && inputCurrentText != "VF-") {
      showError();
    } else {
      hideError();
    }

    inputSearch.value.length === 16 ? buttonSearch.disabled = false : buttonSearch.disabled = true;
  };

  function showError() {
    errorText.classList.remove('ws10-u--hidden');
    inputSearch.classList.add('ws10-c-text-field__input--error');
  }

  function hideError() {
    errorText.classList.add('ws10-u--hidden');
    inputSearch.classList.remove('ws10-c-text-field__input--error');
  }

  var checkValueLength = function checkValueLength(event) {
    event.keyCode === 8 && inputSearch.value.length === 16 || inputSearch.value.length === 16 ? buttonSearch.disabled = false : buttonSearch.disabled = true;
  };

  inputSearch.addEventListener('keypress', function (e) {
    return inputHandler(e.target.value + e.key);
  });
  inputSearch.addEventListener('keyup', checkValueLength);
};

/***/ }),

/***/ "../../../../../../../../Proyectos/VF/repo-compartido-victor-alvaro/colectivos/plp-search-code/resources/scripts/tools.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/Victor/Proyectos/VF/repo-compartido-victor-alvaro/colectivos/plp-search-code/resources/scripts/tools.js ***!
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

var MICROSITE_ID = '#plp-search-code';
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
    performance.mark('micro js ready'); // eslint-disable-next-line no-console

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
      // eslint-disable-next-line no-console
      console.log('WS10 CSS Loaded');
      countCSS++;
    }

    if (href.indexOf(PATH_MICROSITE + 'css/styles.css') !== -1) {
      // eslint-disable-next-line no-console
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


var checkInterval, checkTimeout;

if (!isCSSMicroLoaded()) {
  if (cssMain) {
    checkInterval = setInterval(function () {
      if (cssMain.sheet.rules && cssMain.sheet.rules.length > 0) {
        clearInterval(checkInterval);
        clearTimeout(checkTimeout);

        _internalCSSInit();
      }
    }, 100); // Make sure microsite gets visible after 3 secs

    checkTimeout = setTimeout(function () {
      // eslint-disable-next-line no-console
      console.warn("Microsite visible by 3s timeout");
      clearInterval(checkInterval);
      clearTimeout(checkTimeout);

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