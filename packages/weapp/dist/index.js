/*!
 * @lime-util/weapp 
 * Version: v3.0.0
 * Date: Fri Jan 07 2022 14:19:59 GMT+0800 (中国标准时间)
 *
 * Copyright 2021-2022, Gaoshiwei <575792372@qq.com>
 * Licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * 
 *
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LimeWeapp = factory());
})(this, (function () { 'use strict';

  /**
   * 设置缓存
   * @param {String} key key值
   * @param {*} data data数据
   */
  function setStorage(key, data) {
    wx.setStorage({ key, data });
  }

  /**
   * 设置缓存（同步）
   * @param {String} key key值
   * @param {*} data data数据
   */
  function setStorageSync(key, data) {
    wx.setStorageSync(key, data);
  }

  /**
   * 通过key从缓存中获取数据
   * @param {String} key key值
   * @returns {*} 返回获取的值
   */
  function getStorage(key) {
    return wx.getStorage({ key }) || undefined;
  }

  /**
   * 通过key从缓存中获取数据（同步）
   * @param {String} key key值
   * @returns {*} 返回获取的值
   */
  function getStorageSync(key) {
    return wx.getStorageSync(key) || undefined;
  }

  /**
   * 通过key从缓存中删除数据
   * @param {String} key key值
   */
  function removeStorage(key) {
    wx.removeStorage({ key });
  }

  /**
   * 通过key从缓存中删除数据（同步）
   * @param {String} key key值
   */
  function removeStorageSync(key) {
    wx.removeStorageSync(key);
  }

  /*
   * 清空所有缓存数据
   */
  function clearStorage() {
    wx.clearStorageSync();
  }

  /*
   * 清空所有缓存数据（同步）
   */
  function clearStorageSync() {
    wx.clearStorageSync();
  }

  var weappUtil = /*#__PURE__*/Object.freeze({
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
    console.log("lime-weapp loaded successfully!");
  };

  // 导出
  var index = {
    loadedTest,
    ...weappUtil,
  };

  return index;

}));
