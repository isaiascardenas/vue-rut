(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	exports.install = function (Vue) {

		Vue.directive('rut', __webpack_require__(1));
		Vue.filter('rut', __webpack_require__(3));
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _util = __webpack_require__(2);

	module.exports = {

		bind: function bind(el, binding, vnode) {
			this.inputValue = '';

			for (var i = vnode.data.directives.length - 1; i >= 0; i--) {
				if (vnode.data.directives[i].name == 'model') {
					var field = vnode.data.directives[i].expression;
					break;
				}
			}

			this.vueModel = vnode.context[field];
		},

		update: function update(el, binding, vnode) {

			this.inputValue = vnode.elm.value;
			this.inputValue = (0, _util.formatRut)((0, _util.cleanRut)(this.inputValue));
			el.value = this.inputValue;

			if ((0, _util.validateRut)(inputValue)) {
				this.vueModel = this.inputValue;
			} else {
				this.vueModel = null;
			}
		},

		data: function data() {
			return {
				vueModel: '',
				inputValue: ''
			};
		}
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.cleanRut = cleanRut;
	exports.formatRut = formatRut;
	exports.validateRut = validateRut;
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
					return rut.slice(-1) == 'k';
				default:
					return rut.slice(-1) == 11 - sum % 11;
			}
		}
		return false;
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _util = __webpack_require__(2);

	module.exports = function (value) {
	  return (0, _util.formatRut)((0, _util.cleanRut)(value));
	};

/***/ }
/******/ ])
});
;