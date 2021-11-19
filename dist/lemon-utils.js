(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LemonUtils = factory());
})(this, (function () { 'use strict';

  function toString1(val) {
    console.log("toString1", val);
  }
  function toNumber1(val) {
    console.log("toNumber1", val);
  }

  const DEFAULT = {
    model: 1,
  };
  function toString(val) {
    console.log("toString", val, DEFAULT);

    toString1(val);
  }
  function toNumber(val) {
    console.log("toNumber", val);
    toNumber1(val);
  }

  // export default {
  //   toString(val) {
  //     console.log("toString", val);
  //   },
  //   toNumber(val) {
  //     console.log("toNumber", val);
  //   },
  // };

  var string = /*#__PURE__*/Object.freeze({
    __proto__: null,
    toString: toString,
    toNumber: toNumber
  });

  // 测试加载成功方法

  var index = {
    toNumber1,
    toString1,
    ...string,
  };

  return index;

}));
//# sourceMappingURL=lemon-utils.js.map
