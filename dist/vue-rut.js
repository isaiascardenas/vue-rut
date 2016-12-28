/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _rut = __webpack_require__(1);

	var _rut2 = _interopRequireDefault(_rut);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var install = function install(Vue) {

		Vue.directive('rut', _rut2.default);
	};

	exports.default = { install: install };

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {

		update: function update(el, binding, vnode) {

			var event = new Event('input', { bubbles: true });
			el.value = formatRut(cleanRut(el.value));
			el.dispatchEvent(event);

			var field = binding.expression;

			if (validateRut(el.value)) {
				vnode.context[field] = true;
			} else {
				vnode.context[field] = false;
			}
		}
	};


	function cleanRut(rut) {
		return rut.replace(/[^0-9kK]+/g, '').toLowerCase();
	}

	function formatRut(rut) {
		if (rut.length > 1) {
			rut = rut.slice(0, -1) + '-' + rut.slice(-1);
			if (rut.length > 5) {
				if (rut.length > 8) {
					return rut.slice(0, -8) + '.' + rut.slice(-8, -5) + '.' + rut.slice(-5);
				}
				return rut.slice(0, -5) + '.' + rut.slice(-5);
			}
		}
		return rut;
	}

	function validateRut(rut) {
		var numberRut = cleanRut(rut).slice(0, -1);
		if (numberRut.length > 6) {
			var auxArray = [3, 2, 7, 6, 5, 4, 3, 2];
			var sum = 0;

			for (var i = numberRut.length - 1; i >= 0; i--) {
				sum += parseInt(numberRut[i]) * auxArray[i];
			}
			switch (11 - sum % 11) {
				case 11:
					return rut.slice(-1) == 0;
				case 10:
					returnrut.slice(-1) == 'k';
				default:
					return rut.slice(-1) == 11 - sum % 11;
			}
		}
		return false;
	}

/***/ }
/******/ ]);