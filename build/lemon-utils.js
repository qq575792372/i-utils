(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.LemonUtils = {}));
})(this, (function (exports) { 'use strict';

  function toString(val) {
    console.log("toString", val);
  }
  function toNumber(val) {
    console.log("toNumber", val);
    toString(val);
  } // export default {
  //   toString(val) {
  //     console.log("toString", val);
  //   },
  //   toNumber(val) {
  //     console.log("toNumber", val);
  //   },
  // };

  exports.toNumber = toNumber;
  exports.toString = toString;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=lemon-utils.js.map
