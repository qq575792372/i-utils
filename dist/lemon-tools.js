(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LemonTools"] = factory();
	else
		root["LemonTools"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// export { default as string } from "./string";
// export { default as array } from "./array";

/******/ 	return __webpack_exports__;
/******/ })()
;
});