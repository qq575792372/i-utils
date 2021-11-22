/*!
* lemon-utils v1.0.0
*
* Copyright 2021-2021, Gaoshiwei <gao911222@163.com>
* Licensed under the MIT license
* http://www.opensource.org/licenses/mit-license
*
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LemonUtils = factory());
})(this, (function () { 'use strict';

  /**
   * 判断是否是整数Integer
   * @param {*} value 参数
   * @returns {Boolean} result 返回true和false
   */
  function isInteger(value) {
    return Number.isInteger(value);
  }

  /**
   * 判断是非数字
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isNaN(value) {
    return isNaN(value) || (!value && value !== 0);
  }

  /**
   * 判断是否是数字Number
   * @param {Number} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isNumber(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Number";
  }

  /**
   * 判断是否是Date
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isDate(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Date";
  }

  /**
   * 判断是否是Object
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isObject(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Object";
  }

  /**
   * 判断是否是Array
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isArray(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Array";
  }

  /**
   * 判断是否是String
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isString(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "String";
  }

  /**
   * 判断是否是Boolean
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isBoolean(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Boolean";
  }

  /**
   * 判断是否是Function
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isFunction(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Function";
  }

  /**
   * 判断字符串是否全是中文
   * @param {String} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isChinese(value) {
    return /^[\u4E00-\u9FA5]+$/.test(value);
  }

  /**
   * 判断两个字符串是否相等
   * 注：强制比较，包括同一个字符，但是不同类型
   * @param {String} value1 参数1
   * @param {String} value2 参数2
   * @returns 返回true和false
   */
  function equals(value1, value2) {
    return Object.is(value1, value2);
  }

  /**
   * 判断值是否是空的，支持空字符串，null，undefined，Object，String，Number，Date
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isEmpty(value) {
    return (
      value == undefined ||
      value == null ||
      value == "" ||
      (isObject(value) && Object.keys(value).length == 0) ||
      value.length == 0
    );
  }

  /**
   * 判断值是否是 null
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isNull(value) {
    return value == null;
  }

  /**
   * 判断值是否是 undefined
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isUndefined(value) {
    return value == undefined;
  }

  var validateUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isInteger: isInteger,
    isNaN: isNaN,
    isNumber: isNumber,
    isDate: isDate,
    isObject: isObject,
    isArray: isArray,
    isString: isString,
    isBoolean: isBoolean,
    isFunction: isFunction,
    isChinese: isChinese,
    equals: equals,
    isEmpty: isEmpty,
    isNull: isNull,
    isUndefined: isUndefined
  });

  // 字符串去空格
  /**
   * 去除字符串两边空格
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function trim(value) {
    if (isEmpty(value)) return;
    return value.replace(/(^\s*)|(\s*$)/g, "");
  }

  /**
   * 去除字符串左边空格
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function trimLeft(value) {
    if (isEmpty(value)) return;
    return value.replace(/(^\s*)/g, "");
  }

  /**
   * 去除字符串右边空格
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function trimRight(value) {
    if (isEmpty(value)) return;
    return value.replace(/(\s*$)/g, "");
  }

  /**
   * 去除字符串全部空格
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function trimAll(value) {
    if (isEmpty(value)) return;
    return value.replace(/\s+/g, "");
  }

  // 数字补齐0
  /**
   * 数字前补齐零，保持两位
   * @param {String | Number} value 可以是数字和字符串
   * @returns {String} 返回处理后的字符串
   */
  function digit(value) {
    value = value.toString();
    return value[1] ? value : "0" + value;
  }

  /**
   * 数字前补齐0达到指定位数
   * 注：相当于padStart()
   * @param {*} value 可以是数字和字符串
   * @param {*} maxLength 补齐0后的最大长度，默认2位
   * @returns {String} 返回补0后的字符串，比如传参(10,4)，返回补齐0的4位字符串“0010”
   */
  function prefixZero(value, maxLength = 2) {
    if (isEmpty(value)) return;
    let len = value.toString().length;
    while (len < maxLength) {
      value = "0" + value;
      len++;
    }
    return value;
  }

  /**
   * 数字后补齐0达到指定位数
   * 注：相当于padEnd()
   * @param {String,Number} value 可以是数字和字符串
   * @param {*} maxLength 补齐0后的最大长度，默认2位
   * @returns {String} 返回补0后的字符串，比如传参(10,4)，返回补齐0的4位字符串“0010”
   */
  function suffixZero(value, maxLength = 2) {
    if (isEmpty(value)) return;
    let len = value.toString().length;
    while (len < maxLength) {
      value = value + "0";
      len++;
    }
    return value;
  }

  var stringUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    trim: trim,
    trimLeft: trimLeft,
    trimRight: trimRight,
    trimAll: trimAll,
    digit: digit,
    prefixZero: prefixZero,
    suffixZero: suffixZero
  });

  function toString1(val) {
    console.log("toString1", val);
  }
  function toNumber1(val) {
    console.log("toNumber1", val);
  }

  var arrayUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    toString1: toString1,
    toNumber1: toNumber1
  });

  var index$9 = {};

  var dateUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$9
  });

  var index$8 = {};

  var numberUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$8
  });

  var index$7 = {};

  var objectUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$7
  });

  var index$6 = {};

  var mathUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$6
  });

  var index$5 = {};

  var functionUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$5
  });

  var index$4 = {};

  var randomUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$4
  });

  var regexUtil = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var index$3 = {};

  var fileUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$3
  });

  var index$2 = {};

  var urlUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$2
  });

  /**
   * 设置localStorage缓存数据
   * @param {String} key
   * @param {String} value
   */
  function setLocalStorage(key, value) {
    window.localStorage.setItem(key, value);
  }

  /**
   * 通过key从localStorage缓存中获取数据
   * @param {String} key
   * @returns {String} 返回值
   */
  function getLocalStorage(key) {
    return window.localStorage.getItem(key) || "";
  }

  /**
   * 通过key从localStorage缓存中删除数据
   * @param {String} key
   */
  function removeLocalStorage(key) {
    window.localStorage.removeItem(key);
  }

  /**
   * 清空localStorage缓存中所有数据
   */
  function clearLocalStorage() {
    window.localStorage.clear();
  }

  /**
   * 设置sessionStorage缓存数据
   * @param {String} key
   * @param {String} value
   */
  function setSessionStorage(key, value) {
    window.sessionStorage.setItem(key, value);
  }

  /**
   * 通过key从sessionStorage缓存中获取数据
   * @param {String} key
   * @returns {String} 返回值
   */
  function getSessionStorage(key) {
    return window.sessionStorage.getItem(key) || "";
  }

  /**
   * 通过key从sessionStorage缓存中删除数据
   * @param {String} key
   */
  function removeSessionStorage(key) {
    window.sessionStorage.removeItem(key);
  }

  /**
   * 清空sessionStorage缓存中所有数据
   */
  function clearSessionStorage() {
    window.sessionStorage.clear();
  }

  var storageUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    setLocalStorage: setLocalStorage,
    getLocalStorage: getLocalStorage,
    removeLocalStorage: removeLocalStorage,
    clearLocalStorage: clearLocalStorage,
    setSessionStorage: setSessionStorage,
    getSessionStorage: getSessionStorage,
    removeSessionStorage: removeSessionStorage,
    clearSessionStorage: clearSessionStorage
  });

  /**
   * 设置cookie
   * 注：timestamp参数不填，则默认为session级别，浏览器关闭即cookie过期
   * @param {String} key 设置的key
   * @param {String} value 设置的value
   * @param {DateTime} timestamp 过期的时间戳，如果设置一天则为：24*60*60*1000
   */
  function setCookie(key, value, timestamp) {
    // window.document.cookie = key + "=" + value + ";expires=" + formatTimestampToDate(getDefaultTimestamp() + timestamp);
  }

  /**
   * 通过key获得cookie存储的值
   * @param {String} key
   * @returns 返回获取的值，或者返回空字符串
   */
  function getCookie(key) {
    let arr = window.document.cookie.split(";");
    for (let i = 0; i < arr[i].length; i++) {
      let arr2 = arr[i].split("=");
      if (arr2[0] == key) {
        return arr2[1];
      }
      return "";
    }
  }

  /**
   * 通过key删除cookie的值
   * @param {String} key
   */
  function removeCookie(key) {
  }

  /**
   * 清空当前站点所有的cookie
   */
  function clearCookie() {
    let keys = window.document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
      for (let i = keys.length; i--; ) document.cookie = keys[i] + "=0;expires=" + new Date(0).toUTCString();
    }
  }

  var cookieUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    setCookie: setCookie,
    getCookie: getCookie,
    removeCookie: removeCookie,
    clearCookie: clearCookie
  });

  var index$1 = {};

  var domUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$1
  });

  /**
   * 小程序-设置缓存
   * @param {String} key
   * @param {*} data
   */
  function setStorage(key, data) {
    wx.setStorage({ key, data });
  }

  /**
   * 小程序-设置缓存（同步）
   * @param {String} key
   * @param {*} data
   */
  function setStorageSync(key, data) {
    wx.setStorageSync(key, data);
  }

  /**
   * 小程序-通过key从缓存中获取数据
   * @param {String} key
   * @returns {*} 返回获取的值
   */
  function getStorage(key) {
    return wx.getStorage({ key }) || "";
  }

  /**
   * 小程序-通过key从缓存中获取数据（同步）
   * @param {String} key
   * @returns {*} 返回获取的值
   */
  function getStorageSync(key) {
    return wx.getStorageSync(key) || "";
  }

  /**
   * 小程序-通过key从缓存中删除数据
   * @param {String} key
   */
  function removeStorage(key) {
    wx.removeStorage({ key });
  }

  /**
   * 小程序-通过key从缓存中删除数据（同步）
   * @param {String} key
   */
  function removeStorageSync(key) {
    wx.removeStorageSync(key);
  }

  /*
   * 小程序-清空所有缓存数据
   */
  function clearStorage() {
    wx.clearStorageSync();
  }

  /*
   * 小程序-清空所有缓存数据（同步）
   */
  function clearStorageSync() {
    wx.clearStorageSync();
  }

  var xcxUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    setStorage: setStorage,
    setStorageSync: setStorageSync,
    getStorage: getStorage,
    getStorageSync: getStorageSync,
    removeStorage: removeStorage,
    removeStorageSync: removeStorageSync,
    clearStorage: clearStorage,
    clearStorageSync: clearStorageSync
  });

  // 测试加载成功方法
  const loadedTest = function () {
    console.log("lemon-utils loaded successfully!");
  };

  // 导出
  var index = {
    loadedTest,
    // 字符串
    ...stringUtil,
    // 数组
    ...arrayUtil,
    // 日期
    ...dateUtil,
    // 数字
    ...numberUtil,
    // 对象
    ...objectUtil,
    // 数学
    ...mathUtil,
    // 函数
    ...functionUtil,
    // 校验
    ...validateUtil,
    // 随机数
    ...randomUtil,
    // 正则
    ...regexUtil,
    // 文件
    ...fileUtil,
    // 浏览器 Url
    ...urlUtil,
    // 浏览器 Storage
    ...storageUtil,
    // 浏览器 Cookie
    ...cookieUtil,
    // 浏览器 Dom
    ...domUtil,
    // 微信小程序
    ...xcxUtil,
  };

  return index;

}));
