(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LemonUtils"] = factory();
	else
		root["LemonUtils"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "toNumber": function() { return /* reexport */ toNumber; },
  "toString": function() { return /* reexport */ string_toString; }
});

;// CONCATENATED MODULE: ./src/string/index.js
function string_toString(val) {
  console.log("toString", val);
}
function toNumber(val) {
  console.log("toNumber", val);
  string_toString(val);
}

// export default {
//   toString(val) {
//     console.log("toString", val);
//   },
//   toNumber(val) {
//     console.log("toNumber", val);
//   },
// };
;// CONCATENATED MODULE: ./src/index.js
// 测试加载成功方法
const loadedTest = function () {
  console.log("lemon-utils loaded successfully");
};

// string
// import string from "./string/index.js";
// import string from "./string";
// // array

// import string from "./string/index.js";
// export default { loadedTest, ...string };
/******/ 	return __webpack_exports__;
/******/ })()
;
});