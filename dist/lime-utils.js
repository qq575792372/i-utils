/*!
* lime-utils v0.0.1
*
* Copyright 2021-2021, Gaoshiwei <gao911222@163.com>
* Licensed under the MIT license
* http://www.opensource.org/licenses/mit-license
*
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LimeUtil = factory());
})(this, (function () { 'use strict';

  // 数据类型
  /**
   * 判断是非数字
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isNaN(value) {
    return isNaN(value) || (!value && value !== 0);
  }

  /**
   * 判断是整数
   * @param {*} value 参数
   * @returns {Boolean} result 返回true和false
   */
  function isInteger(value) {
    return Number.isInteger(value);
  }

  /**
   * 判断是小数
   * @param {*} value 参数
   * @returns {Boolean} result 返回true和false
   */
  function isDecimal(value) {
    return String(value).indexOf(".") > 0;
  }

  /**
   * 判断类型是数字 Number
   * @param {Number} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isNumber(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Number";
  }

  /**
   * 判断类型是字符串 String
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isString(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "String";
  }

  /**
   * 判断类型是数组 Array
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isArray(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Array";
  }

  /**
   * 判断类型是对象 Object
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isObject(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Object";
  }

  /**
   * 判断类型是布尔 Boolean
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isBoolean(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Boolean";
  }

  /**
   * 判断类型是日期 Date
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isDate(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Date";
  }

  /**
   * 判断类型是函数 Function
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isFunction(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Function";
  }

  /**
   * 判断类型是 Symbol
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isSymbol(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Symbol";
  }

  /**
   * 判断类型是正则 RegExp
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isRegExp(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "RegExp";
  }

  /**
   * 判断类型是错误 Error
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isError(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Error";
  }

  /**
   * 判断字符串是否全是中文
   * @param {String} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isChinese(value) {
    return /^[\u4E00-\u9FA5]+$/.test(value);
  }

  // 数据值
  /**
   * 判断值是否为空
   * @description 针对的是实际有意义的值，如果值是{},[]空的数据则为空
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isEmpty(value) {
    return (
      value == undefined ||
      value == null ||
      value == "" ||
      (isObject(value) && Object.keys(value).length == 0) ||
      (isArray(value) && value.length == 0)
    );
  }

  /**
   * 判断对象是否为空
   * @description 针对的是对象初始化数据，如果值是{},[]等初始化过的则不为空
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isNull(value) {
    return value == undefined || value == null || value == "";
  }

  /**
   * 判断值是否有空白符号
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isBlank(value) {
    return value == null || value == undefined || /^\s*$/.test(value);
  }

  /**
   * 判断值是否是 undefined
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isUndefined(value) {
    return value == undefined;
  }

  /**
   * 判断两个字符串是否相等
   * @param {String} value1 参数1
   * @param {String} value2 参数2
   * @returns 返回true和false
   */
  function equals(value1, value2) {
    return Object.is(value1, value2);
  }

  /**
   * 判断两个字符串是否相等
   * 注：会忽略大小写
   * @param {String} value1 参数1
   * @param {String} value2 参数2
   * @returns 返回true和false
   */
  function equalsIgnoreCase(value1, value2) {
    return Object.is(value1.toLowerCase(), value2.toLowerCase());
  }

  var validateUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isNaN: isNaN,
    isInteger: isInteger,
    isDecimal: isDecimal,
    isNumber: isNumber,
    isString: isString,
    isArray: isArray,
    isObject: isObject,
    isBoolean: isBoolean,
    isDate: isDate,
    isFunction: isFunction,
    isSymbol: isSymbol,
    isRegExp: isRegExp,
    isError: isError,
    isChinese: isChinese,
    isEmpty: isEmpty,
    isNull: isNull,
    isBlank: isBlank,
    isUndefined: isUndefined,
    equals: equals,
    equalsIgnoreCase: equalsIgnoreCase
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
   * 去除字符串开始位置的空格
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function trimStart(value) {
    if (isEmpty(value)) return;
    return value.replace(/(^\s*)/g, "");
  }

  /**
   * 去除字符串结束位置的空格
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function trimEnd(value) {
    if (isEmpty(value)) return;
    return value.replace(/(\s*$)/g, "");
  }

  /**
   * 去除字符串中全部的空格
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function trimAll(value) {
    if (isEmpty(value)) return;
    return value.replace(/\s+/g, "");
  }

  /**
   * 数字前补齐零，保持两位
   * @param {String|Number} value 可以是数字和字符串
   * @returns {String} 返回处理后的字符串
   */
  function digit(value) {
    value = value.toString();
    return value[1] ? value : "0" + value;
  }

  /**
   * 数字前补齐0达到指定位数
   * 注：相当于padStart()
   * @param {String|Number} value 可以是数字和字符串
   * @param {Number} maxLength 补齐0后的最大长度，默认2位
   * @returns {String} 返回补0后的字符串，比如传参(10,4)，返回补齐0的4位字符串“0010”
   */
  function zeroStart(value, maxLength = 2) {
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
   * @param {String|Number} value 可以是数字和字符串
   * @param {Number} maxLength 补齐0后的最大长度，默认2位
   * @returns {String} 返回补0后的字符串，比如传参(10,4)，返回补齐0的4位字符串“0010”
   */
  function zeroEnd(value, maxLength = 2) {
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
    trimStart: trimStart,
    trimEnd: trimEnd,
    trimAll: trimAll,
    digit: digit,
    zeroStart: zeroStart,
    zeroEnd: zeroEnd
  });

  /**
   * 数组中是否包含指定的数据
   * @param {String|Number} value 指定数据，只支持String和Number
   * @param {Array} array 查找的数组
   * @returns {Boolean} 返回true和false
   */
  function isInArray(value, array) {
    if (isNull(value)) return;
    return array.includes(value);
  }

  /**
   * 获得数据在数组中第一次出现位置索引
   * @param {String|Number} value 指定数据，只支持String和Number
   * @param {Array} array 查找的数组
   * @returns {Number} 返回查找到的位置下标
   */
  function getIndexInArray(value, array) {
    if (isNull(value)) return;
    return array.indexOf(value);
  }

  /**
   * 数组简单去重
   * @param {Array} array 数组
   * @returns {Array} 返回去重后的数组
   */
  function uniqueArray(array) {
    if (isNull(value)) return;
    return Array.from(new Set(array));
  }

  /**
   * 一维父子级的数组转树形结构
   * @description 包含id和pid关系的一维数组，转为包含children的树形结构
   * @param {Array} array 数组
   * @param {Number|String} pid 父级的id
   * @returns {Array} 返回去重后的数组
   * @example
   * let source = [
        { id: 1, name: "节点1", pid: 0 },
        { id: 11, name: "节点1-1", pid: 1 },
        { id: 12, name: "节点1-2", pid: 1 },
        { id: 2, name: "节点2", pid: 0 },
        { id: 3, name: "节点3", pid: 0 },
        { id: 31, name: "节点3-1", pid: 3 },
        { id: 32, name: "节点3-2", pid: 3 },
      ];
      console.log(arrayToTree(source, 0)); // 输出包含children层级关系的树形结构
   */
  function arrayToTree(array, pid) {
    let res = [];
    list.forEach((v) => {
      if (v.pid == pid) {
        v.children = toTree(list, v.id);
        res.push(v);
      }
    });
    return res;
  }

  var arrayUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isInArray: isInArray,
    getIndexInArray: getIndexInArray,
    uniqueArray: uniqueArray,
    arrayToTree: arrayToTree
  });

  // 日期操作
  /**
   * 判断是否是闰年
   * @param {Number} year 年份
   * @returns 返回true和false
   */
  function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
  }
  /**
   * 获得日期Date，默认为当前日期
   * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
   * @returns 返回日期Date
   */
  function getCurrentDate(date = new Date()) {
    return date;
  }
  /**
   * 获得日期Date字符串，默认为当前日期
   * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
   * @param {String} separator 年月日分隔符，默认“-”分隔
   * @returns 返回yyyy-MM-dd格式的日期字符串
   */
  function getDefaultDate(date = new Date(), separator = "-") {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return [year, month, day].map(this.digit).join(separator);
  }
  /**
   * 获得日期DateTime字符串，默认为当前时间
   * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
   * @param {String} separator 年月日分隔符，默认“-”
   * @returns 返回yyyy-MM-dd HH:mm:ss格式的时间字符串
   */
  function getDefaultDateTime(date = new Date(), separator = "-") {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return [year, month, day].map(this.digit).join(separator) + " " + [hour, minute, second].map(this.digit).join(":");
  }
  /**
   * 获取日期Date的时间戳
   * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
   * @returns 返回日期Date的时间戳
   */
  function getDefaultTimestamp(date = new Date()) {
    return date.getTime();
  }
  /**
   * 获取日期Date的Unix时间戳
   * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
   * @returns 返回日期Date的Unix时间戳
   */
  function getDefaultUnixTimestamp(date = new Date()) {
    return Math.round(date / 1000);
  }
  /**
   * 格式化时间戳为日期Date
   * @param {Number} timestamp 时间戳
   * @returns 返回日期Date
   */
  function formatTimestampToDate(timestamp) {
    if (isEmpty(timestamp) || timestamp == 0) return;
    return new Date(timestamp);
  }
  /**
   * 格式化Unix时间戳为日期Date
   * @param {Number} timestamp Unix时间戳
   * @returns 返回日期Date
   */
  function formatUnixTimestampToDate(timestamp) {
    if (isEmpty(timestamp) || timestamp == 0) return;
    return new Date(timestamp * 1000);
  }
  /**
   * 获得当前的日期Date是周几
   * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
   * @param {String} type 可为空，默认为zh；zh：返回周一，周二的中文； en：返回1,2的数字
   * @returns 返回对应的中文的周几或者数字的周几
   */
  function getWeekDay(date = new Date(), type = "zh") {
    if (isEmpty(date)) return;
    let day = "";
    if (type && type == "zh") {
      day = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六")[date.getDay()];
    } else {
      day = new Array("7", "1", "2", "3", "4", "5", "6")[date.getDay()];
    }
    return day;
  }
  /**
   * 获得某年的某月总共有多少天
   * @param {Number} year 年
   * @param {Number} month 月
   * @returns 返回对应年月的总天数
   */
  function getYearMonthAllDay(year, month) {
    if (isEmpty(year) || isEmpty(month)) return;
    month = this.parseInt(month);
    return new Date(year, month, 0).getDate();
  }
  /**
   * 获得某年的某月的所有天数数组
   * @param {Number} year 年
   * @param {Number} month 月
   * @returns 返回对应年月的所有天数数组
   */
  function getYearMonthAllDayArray(year, month) {
    if (isEmpty(year) || isEmpty(month)) return;
    month = this.parseInt(month);
    return Array.from(
      {
        length: new Date(year, month, 0).getDate(),
      },
      (item, index) => index + 1
    );
  }
  /**
   * 获得某年的某月的最后一天是几号
   * @param {Number} year 年
   * @param {Number} month 月
   * @returns 返回对应年月的最后一天是几号
   */
  function getYearMonthLastDay(year, month) {
    if (isEmpty(year) || isEmpty(month)) return;
    month = this.parseInt(month);
    return new Date(year, month, 0).getDate();
  }
  /**
   * 日期字符串转换为数组
   *
   * @param {String} dateStr 日期字符串，格式支持yyyy-MM-dd，yyyy-MM-dd HH:mm:ss，yyyy/MM/dd，yyyy/MM/dd HH:mm:ss
   * @returns 返回字符串数组
   */
  function dateStrToArray(dateStr) {
    if (isEmpty(dateStr)) return;
    dateStr = dateStr.replace(/(\-)|(\:)|(\s)|(\/)/g, ",");
    return dateStr.split(",");
  }
  /**
   * 时间字符串转换为数组
   *
   * @param {String} dateTimeStr 时间字符串，格式支持yyyy-MM-dd，yyyy-MM-dd HH:mm:ss，yyyy/MM/dd，yyyy/MM/dd HH:mm:ss
   * @returns 返回字符串数组
   */
  function dateTimeStrToArray(dateTimeStr) {
    if (isEmpty(dateTimeStr)) return;
    dateTimeStr = dateTimeStr.replace(/(\-)|(\:)|(\s)|(\/)/g, ",");
    return dateTimeStr.split(",");
  }
  /**
   * 获得加减年数后的日期Date
   * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
   * @param {Number} num 加减年数的数量，用-1和+1年表示
   * @returns 返回加减年数后的日期Date
   */
  function getDiffYear(date = new Date(), num = +1) {
    date.setFullYear(date.getFullYear() + num);
    return date;
  }
  /**
   * 获得加减月数后的日期
   * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
   * @param {Number} num 加减月数的数量，用-1和+1月表示
   * @returns 返回加减月数后的日期Date
   */
  function getDiffMonth(date = new Date(), num = +1) {
    date.setMonth(date.getMonth() + num);
    return date;
  }
  /**
   * 获得加减天数后的日期
   * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
   * @param {Number} num 加减天数的数量，用-1和+1天表示
   * @returns 返回加减天数后的日期Date
   */
  function getDiffDate(date = new Date(), num = +1) {
    date.setDate(date.getDate() + num);
    return date;
  }
  /**
   * 计算两个日期Date之间相差的天数
   * @param {Date} date1 第一个日期
   * @param {Date} date2 第二个日期
   * @returns 返回两个日期Date相差的天数；参数为空返回0；返回复数代表第一个日期大于第二个日期；返回正数表示第一个日期小于第二个日期
   */
  function getDiffDateNum(date1, date2) {
    if (isEmpty(date1) || isEmpty(date2)) return 0;
    return (date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000);
  }
  /**
   * 计算两个日期字符串之间相差的天数
   * @param {Date} dateStr1 第一个日期字符串
   * @param {Date} dateStr2 第二个日期字符串
   * @returns 返回两个日期字符串相差的天数数字；参数为空返回0；返回复数代表第一个日期大于第二个日期；返回正数表示第一个日期小于第二个日期
   */
  function getDiffDateStrNum(dateStr1, dateStr2) {
    if (isEmpty(dateStr1) || isEmpty(dateStr2)) return 0;
    return (this.formatStrToDate(dateStr2).getTime() - this.formatStrToDate(dateStr1).getTime()) / (24 * 60 * 60 * 1000);
  }
  /**
   * 计算两个日期Data时间戳之间相差的天数
   * @param {Timestamp} timestamp1 第一个日期Date时间戳
   * @param {Timestamp} timestamp2 第二个日期Date时间戳
   * @returns 返回两个日期Date时间戳相差的天数数字；参数为空返回0；返回复数代表第一个日期大于第二个日期；返回正数表示第一个日期小于第二个日期
   */
  function getDiffTimestampNum(timestamp1, timestamp2) {
    if (isEmpty(timestamp1) || isEmpty(timestamp2)) return 0;
    return (timestamp2 - timestamp1) / (1000 * 60 * 60 * 24);
  }
  /**
   * 计算两个日期Date的Unix时间戳之间相差的天数
   * @param {UnixTimestamp} unixTimestamp1 第一个日期Date的Unix时间戳
   * @param {UnixTimestamp} unixTimestamp2 第二个日期Date的Unix时间戳
   * @returns 返回两个日期Date的Unix时间戳相差的天数数字；参数为空返回0；返回复数代表第一个日期大于第二个日期；返回正数表示第一个日期小于第二个日期
   */
  function getDiffUnixTimestampNum(unixTimestamp1, unixTimestamp2) {
    if (isEmpty(unixTimestamp1) || isEmpty(unixTimestamp2)) return 0;
    return (unixTimestamp2 - unixTimestamp1) / (60 * 60 * 24);
  }
  /**
   * 获得两个日期Date之间所有日期数组
   *
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns 返回两个日期Date之间的所有字符串数组；参数为空返回空[]
   */
  function getDiffDateArray(startDate, endDate) {
    if (isEmpty(startDate) || isEmpty(endDate)) return [];
    let diffDateArray = [];
    while (endDate.getTime() - startDate.getTime() >= 0) {
      let year = startDate.getFullYear();
      let month = this.digit(startDate.getMonth() + 1);
      let day = this.digit(startDate.getDate());
      diffDateArray.push(year + "-" + month + "-" + day);
      startDate.setDate(startDate.getDate() + 1);
    }
    return diffDateArray;
  }
  /**
   * 获得两个日期字符串之间所有日期数组
   *
   * @param {String} startStr 开始时间
   * @param {String} endStr 结束时间
   * @returns 返回两个日期字符串之间的所有字符串数组；参数为空返回空[]
   */
  function getDiffDateStrArray(startStr, endStr) {
    if (isEmpty(startStr) || isEmpty(endStr)) return [];
    let diffDateArray = [];
    let startDate = this.formatStrToDate(startStr);
    let endDate = this.formatStrToDate(endStr);
    while (endDate.getTime() - startDate.getTime() >= 0) {
      let year = startDate.getFullYear();
      let month = this.digit(startDate.getMonth() + 1);
      let day = this.digit(startDate.getDate());
      diffDateArray.push(year + "-" + month + "-" + day);
      startDate.setDate(startDate.getDate() + 1);
    }
    return diffDateArray;
  }
  /**
   * 日期Date格式化为日期字符串
   * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
   * @param {String} formatStr 需要转换的日期字符串格式，支持yyyy/MM/dd HH:mm:ss，dd/MM/yyyy HH:mm:ss等多种常用的格式；默认转为yyyy-MM-dd
   * @returns 返回指定格式的日期字符串
   */
  function formatDateToStr(date = new Date(), formatStr = "yyyy-MM-dd") {
    // 日期字符串格式化
    let o = {
      "M+": date.getMonth() + 1, // 月
      "d+": date.getDate(), // 日
      "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12小时制
      "H+": date.getHours(), // 24小时制
      "m+": date.getMinutes(), // 分钟
      "s+": date.getSeconds(), // 秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds(), //毫秒
    };
    if (/(y+)/.test(formatStr)) {
      formatStr = formatStr.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(formatStr))
        formatStr = formatStr.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
    return formatStr;
  }
  /**
   * 日期字符串格式化为日期Date
   * @param {String} dateStr 日期字符串，支持格式：yyyy-MM-dd HH:mm:ss，yyyy/MM/dd HH:mm:ss
   * @returns 返回日期Date
   */
  function formatStrToDate(dateStr) {
    if (isEmpty(dateStr)) return;
    return new Date(dateStr.replace(/-/g, "/"));
  }
  /**
   * 比较两个日期Date的大小
   * @param {Date} date1 第一个日期
   * @param {Date} date2 第二个日期
   * @returns 返回true和false
   */
  function compareDate(date1, date2) {
    if (isEmpty(date1) || isEmpty(date2)) return;
    return date1.getTime() > date2.getTime();
  }
  /**
   * 比较两个日期Date时间戳的大小
   * @param {Timestamp} timestamp1 第一个时间戳
   * @param {Timestamp} timestamp2 第二个时间戳
   * @returns 返回true和false
   */
  function compareTimestamp(timestamp1, timestamp2) {
    if (isEmpty(timestamp1) || isEmpty(timestamp2)) return;
    return timestamp1 > timestamp2;
  }
  /**
   * 比较两个日期Date的Unix时间戳的大小
   * @param {UnixTimestamp} unixTimestamp1 第一个Unix时间戳
   * @param {UnixTimestamp} unixTimestamp2 第二个Unix时间戳
   * @returns 返回true和false
   */
  function compareUnixTimestamp(unixTimestamp1, unixTimestamp2) {
    if (isEmpty(unixTimestamp1) || isEmpty(unixTimestamp2)) return;
    return unixTimestamp1 > unixTimestamp2;
  }

  var dateUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isLeapYear: isLeapYear,
    getCurrentDate: getCurrentDate,
    getDefaultDate: getDefaultDate,
    getDefaultDateTime: getDefaultDateTime,
    getDefaultTimestamp: getDefaultTimestamp,
    getDefaultUnixTimestamp: getDefaultUnixTimestamp,
    formatTimestampToDate: formatTimestampToDate,
    formatUnixTimestampToDate: formatUnixTimestampToDate,
    getWeekDay: getWeekDay,
    getYearMonthAllDay: getYearMonthAllDay,
    getYearMonthAllDayArray: getYearMonthAllDayArray,
    getYearMonthLastDay: getYearMonthLastDay,
    dateStrToArray: dateStrToArray,
    dateTimeStrToArray: dateTimeStrToArray,
    getDiffYear: getDiffYear,
    getDiffMonth: getDiffMonth,
    getDiffDate: getDiffDate,
    getDiffDateNum: getDiffDateNum,
    getDiffDateStrNum: getDiffDateStrNum,
    getDiffTimestampNum: getDiffTimestampNum,
    getDiffUnixTimestampNum: getDiffUnixTimestampNum,
    getDiffDateArray: getDiffDateArray,
    getDiffDateStrArray: getDiffDateStrArray,
    formatDateToStr: formatDateToStr,
    formatStrToDate: formatStrToDate,
    compareDate: compareDate,
    compareTimestamp: compareTimestamp,
    compareUnixTimestamp: compareUnixTimestamp
  });

  var index$4 = {};

  var numberUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$4
  });

  /**
   * map转object
   * @param {Map} map 参数
   * @returns 返回Object
   */
  function mapToObject(map) {
    let obj = Object.create(null);
    for (let [k, v] of map) {
      obj[k] = v;
    }
    return obj;
  }

  /**
   * object转map
   * @param {Object} obj 参数
   * @returns 返回Map
   */
  function objectToMap(obj) {
    let map = new Map();
    for (let k of Object.keys(obj)) {
      map.set(k, obj[k]);
    }
    return map;
  }

  /**
   * map转json
   * @param {Map} map 参数
   * @returns 返回Json
   */
  function mapToJson(map) {
    return JSON.stringify(this.mapToObject(map));
  }

  /**
   * json转map
   * @param {Json} json 参数
   * @returns 返回Map
   */
  function jsonToMap(json) {
    return this.objectToMap(JSON.parse(json));
  }

  /**
   * json转string
   * @param {Json} json 参数
   * @returns 返回Map
   */
  function jsonToString(json) {
    return JSON.stringify(json);
  }

  /**
   * string转json
   * @param {String} string 参数
   * @returns 返回Map
   */
  function stringToJson(string) {
    if (isEmpty(string)) return;
    return JSON.parse(string);
  }

  var objectUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    mapToObject: mapToObject,
    objectToMap: objectToMap,
    mapToJson: mapToJson,
    jsonToMap: jsonToMap,
    jsonToString: jsonToString,
    stringToJson: stringToJson
  });

  /**
   * 两个数字加法
   * @param {Number,String} arg1
   * @param {Number,String} arg2
   * @returns 返回计算后的数字
   */
  function numAdd(arg1, arg2) {
    let r1, r2, m;
    try {
      r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
      r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
  }

  /**
   * 两个数字减法
   * @param {Number,String} arg1
   * @param {Number,String} arg2
   * @returns 返回计算后的数字
   */
  function numSub(arg1, arg2) {
    let r1, r2, m, n;
    try {
      r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
      r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    n = r1 >= r2 ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
  }

  /**
   * 两个数字乘法
   * @param {Number,String} arg1
   * @param {Number,String} arg2
   * @returns 返回计算后的数字
   */
  function numMul(arg1, arg2) {
    let m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();
    try {
      m += s1.split(".")[1].length;
    } catch (e) {}
    try {
      m += s2.split(".")[1].length;
    } catch (e) {}
    return (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) / Math.pow(10, m);
  }

  /**
   * 两个数字除法
   * @param {Number,String} arg1
   * @param {Number,String} arg2
   * @returns 返回计算后的数字
   */
  function numDiv(arg1, arg2) {
    var t1 = 0,
      t2 = 0,
      r1,
      r2;
    try {
      t1 = arg1.toString().split(".")[1].length;
    } catch (e) {}
    try {
      t2 = arg2.toString().split(".")[1].length;
    } catch (e) {}
    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));
    return (r1 / r2) * Math.pow(10, t2 - t1);
  }

  /**
   * 四舍五入，强制保留小数位数
   * 注：默认保留两位小数，解决原生的toFixed()的四舍五入问题
   * 如结果为2，则输出2.00；
   * 如结果为2.009，则四舍五入输出2.01；
   * @param {Number,String} num
   * @param {Number} decimals 保留小数的位数，默认2位
   * @returns 返回保留后的数字
   */
  function toFixed(num, decimals = 2) {
    if (this.isNaN(num)) {
      return "--";
    }
    let s = num + "";
    if (!decimals) decimals = 0;
    if (s.indexOf(".") == -1) s += ".";
    s += new Array(decimals + 1).join("0");
    if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0," + (decimals + 1) + "})?)\\d*$").test(s)) {
      let s = "0" + RegExp.$2,
        pm = RegExp.$1,
        a = RegExp.$3.length,
        b = true;
      if (a == decimals + 2) {
        a = s.match(/\d/g);
        if (parseInt(a[a.length - 1]) > 4) {
          for (let i = a.length - 2; i >= 0; i--) {
            a[i] = parseInt(a[i]) + 1;
            if (a[i] == 10) {
              a[i] = 0;
              b = i != 1;
            } else break;
          }
        }
        s = a.join("").replace(new RegExp("(\\d+)(\\d{" + decimals + "})\\d$"), "$1.$2");
      }
      if (b) s = s.substr(1);
      return (pm + s).replace(/\.$/, "");
    }
    return num + "";
  }

  /**
   * 非四舍五入，强制保留小数位数
   * 注：默认保留两位小数
   * 如结果为2，则输出2.00；
   * 如结果为2.009，则输出2.00；
   * @param {Number,String} num
   * @param {Number} decimals 保留小数的位数，默认2位
   * @returns 返回保留后的数字
   */
  function toDecimalFixed(num, decimals = 2) {
    if (this.isNaN(num)) {
      return "--";
    }
    // 默认为保留的小数点后两位
    let dec = decimals;
    let tempNum = Number(num);
    let pointIndex = String(tempNum).indexOf(".") + 1; // 获取小数点的位置 + 1
    let pointCount = pointIndex ? String(tempNum).length - pointIndex : 0; // 获取小数点后的个数(需要保证有小数位)
    // 源数据为整数或者小数点后面小于decimals位的作补零处理
    if (pointIndex === 0 || pointCount <= dec) {
      let tempNumA = tempNum;
      if (pointIndex === 0) {
        tempNumA = `${tempNumA}.`;
        for (let index = 0; index < dec - pointCount; index++) {
          tempNumA = `${tempNumA}0`;
        }
      } else {
        for (let index = 0; index < dec - pointCount; index++) {
          tempNumA = `${tempNumA}0`;
        }
      }
      return tempNumA;
    }
    let realVal = "";
    // 截取当前数据到小数点后decimals位
    realVal = `${String(tempNum).split(".")[0]}.${String(tempNum).split(".")[1].substring(0, dec)}`;
    return realVal;
  }

  /**
   * 四舍五入，尽可能保留小数
   * 以默认保留2位为例：
   * 若结果为2.0，则输出2
   * 若结果为2.001，则输出2
   * 若结果为2.009，则输出2.01
   * @param {Number,String} num
   * @param {Number} decimals 保留小数的位数，默认2位
   * @returns 返回保留后的数字
   */
  function toDecimalRound(num, decimals = 2) {
    if (this.isNaN(num)) {
      return "--";
    }
    let n = Math.pow(10, decimals);
    return Math.round(num * n) / n;
  }

  /**
   * 非四舍五入，尽可能保留小数
   * 以默认保留2位为例：
   * 若结果为2.0，则输出2
   * 若结果为2.001，则输出2
   * 若结果为2.009，则输出2
   * @param {Number,String} num
   * @param {Number} decimals 保留小数的位数，默认2位
   * @returns 返回保留后的数字
   */
  function toDecimalFloor(num, decimals = 2) {
    if (this.isNaN(num)) {
      return "--";
    }
    let n = Math.pow(10, decimals);
    return Math.floor(num * n) / n;
  }

  var mathUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    numAdd: numAdd,
    numSub: numSub,
    numMul: numMul,
    numDiv: numDiv,
    toFixed: toFixed,
    toDecimalFixed: toDecimalFixed,
    toDecimalRound: toDecimalRound,
    toDecimalFloor: toDecimalFloor
  });

  var index$3 = {};

  var functionUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': index$3
  });

  /**
   * 生成指定大小的随机数
   * @param {Number} n 生成随机数的开始数字，默认0
   * @param {Number} m 生成随机数的结束数字，默认9
   * @returns 返回指定位数的随机数，默认是0-9的一位数
   */
  function getRandom(n = 0, m = 9) {
    return Math.floor(Math.random() * m + n);
  }

  /**
   * 生成指定位数的随机数
   * @param {Number} n 生成数字的位数，默认是1，代表0-9之间的一位数；如果是2，代表10-99之间的两位数；其他位数以此类推
   * @returns 返回指定位数的随机数
   */
  function getRandomDigit(n = 1) {
    return Math.floor((Math.random() + Math.floor(Math.random() * 9 + 1)) * Math.pow(10, n - 1));
  }

  /**
   * 生成UUID
   * @param len 生成的位数，默认32位
   * @param radix 默认16进制
   * @returns 返回UUID字符串，例如：5e71b6a38364c189ab1229bf5c2d5695
   */
  function getUUID(len = 32, radix = 16) {
    const CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let uuid = [],
      i;
    radix = radix || CHARS.length;
    if (len) {
      for (i = 0; i < len; i++) uuid[i] = CHARS[0 | (Math.random() * radix)];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | (Math.random() * 16);
          uuid[i] = CHARS[i == 19 ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join("");
  }

  /**
   * 生成GUID
   * @returns 返回GUID字符串，例如：e854e2ec-063c-1ee7-942f-57c5733ce0cb
   */
  function getGUID() {
    let s4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
  }

  var randomUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getRandom: getRandom,
    getRandomDigit: getRandomDigit,
    getUUID: getUUID,
    getGUID: getGUID
  });

  /**
   * 部分常用的正则表达式集合
   */
  const regexp = {
    // 是中文
    chinese: /[\u4e00-\u9fa5]/,
    // 中文姓名，2-16位
    chineseName: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
    // 英文姓名，0-20位
    englishName: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
    // 数字
    number: /^(\-|\+)?\d+(\.\d+)?$/,
    // 整数，包含：0，正整数和负整数
    integer: /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/,
    // 正整数或者两位小数
    intOrFloat: /(^[1-9][0-9]*$)|(^[1-9][0-9]*\.[0-9]{1,2}$)|(^0\.[0-9]{1,2}$)|(^0$)/,
    // 手机号码，支持+86
    mobile: /^(?:(?:\+|00)86)?1[1-9]\d{9}$/,
    // 固定电话号码，比如：0755-1111111
    phone: /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/,
    // 邮箱
    email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    // 一代15位和二代18位身份证
    idCard:
      /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
    // 银行卡号
    bankCard: /^[1-9]\d{9,29}$/,
    // 邮政编码
    postCode: /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,
    // 网址
    url: /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
  };

  var regexpUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    regexp: regexp
  });

  /**
   * 格式化文件大小自动转为B，KB，MB，GB
   * @param {Byte} size 文件的大小，单位byte字节
   * @returns 返回格式化后的字符串
   */
  function formatFileSize(size) {
    if (isEmpty(size)) return "0B";
    if (size < 1024) {
      return size + "B";
    } else if (size < 1024 * 1024) {
      return (size / 1024).toFixed(2) + "KB";
    } else if (size < 1024 * 1024 * 1024) {
      return (size / (1024 * 1024)).toFixed(2) + "MB";
    } else {
      return (size / (1024 * 1024 * 1024)).toFixed(2) + "GB";
    }
  }

  /**
   * 获得文件名称
   * @param {*} value 文件的全名称，例如：123.jpg
   * @returns 返回文件的名称，包含后缀类型名称
   */
  function getFileName(value) {
    if (isEmpty(value) || isEmpty(value)) return;
    return value.substring(0, value.lastIndexOf("."));
  }

  /**
   * 获得文件后缀
   * @param {*} value 文文件的全名称，例如：123.jpg
   * @returns 返回文件后缀类型名称
   */
  function getFileSuffixName(value) {
    if (isEmpty(value)) return;
    return value.substring(value.lastIndexOf(".") + 1);
  }

  var fileUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    formatFileSize: formatFileSize,
    getFileName: getFileName,
    getFileSuffixName: getFileSuffixName
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
    console.log("lime-utils loaded successfully!");
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
    ...regexpUtil,
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
