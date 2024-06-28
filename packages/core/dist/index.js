/*!
 * @lime-util/core v3.2.8
 * Copyright 2021-2024, Gaoshiwei <575792372@qq.com>
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LimeCore = factory());
})(this, (function () { 'use strict';

  /**
   * 数组排序常量
   */
  const SORT = {
    // 降序
    DESC: 0,
    // 升序
    ASC: 1,
    // 随机排序
    RANDOM: 2,
  };

  /**
   * 数学计算常量
   */
  const MATH = {
    // 正常四舍五入，如：1.354保留两位是1.35；1.355保留两位是1.36；
    ROUND: 0,
    // 向下舍出，如：1.354保留两位是1.35；1.355保留两位是1.35；
    ROUND_FLOOR: 1,
  };

  /**
   * 语言敞亮
   */
  const LANG = {
    // 中文
    ZH: "zh",
    // 英文
    EN: "en",
  };

  /**
   * 正则常量集合
   */
  const REGEXP = {
    // 中文汉字
    CH: /^[\u4E00-\u9FA5]+$/,
    // 英文字母
    EN: /^[a-zA-Z]$/,
    // 小写字母
    LOWER_CASE: /^[a-z]+$/,
    // 大写字母
    UPPER_CASE: /^[A-Z]+$/,
    // 中文姓名，2-16位
    CH_NAME: /^[\u4e00-\u9fa5·]{2,16}$/,
    // 英文姓名，0-20位
    EN_NAME: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
    // 数字，包含正数和负数
    NUMBER: /^([-+])?\d+(\.\d+)?$/,
    // 整数，包含：0，正整数和负整数
    INTEGER: /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/,
    // 小数，包含正小数和负小数
    DECIMAL: /^\d+\.\d+$/,
    // 正整数或者保留两位小数
    INT_OR_FLOAT: /(^[1-9][0-9]*$)|(^[1-9][0-9]*\.[0-9]{1,2}$)|(^0\.[0-9]{1,2}$)|(^0$)/,
    // 手机号码，支持+86
    MOBILE: /^(?:(?:\+|00)86)?1[1-9]\d{9}$/,
    // 固定电话号码，比如：0755-1111111
    PHONE: /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/,
    // 邮箱
    EMAIL: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
    // 一代15位和二代18位身份证
    ID_CARD:
      /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
    // 仅校验一代15位身份证
    ID_CARD15: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)/,
    // 仅校验二代18位身份证
    ID_CARD18: /(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
    // 银行卡号
    BANK_CARD: /^[1-9]\d{9,29}$/,
    // 邮政编码
    POST_CODE: /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,
    // url网址
    URL: /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
    // ip地址
    IP: /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/,
    // 是外链，http，https，mail，tel电话
    EXTERNAL: /^(http?:|https?:|mailto:|tel:)/,
  };

  /**
   * 常量集合
   */

  var constants = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SORT: SORT,
    MATH: MATH,
    LANG: LANG,
    REGEXP: REGEXP
  });

  /* 字符串处理 */
  /**
   * 去除字符串前后位置空格
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function trim(value) {
    return value.replace(/(^\s*)|(\s*$)/g, "");
  }

  /**
   * 去除字符串开始位置的空格
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function trimStart(value) {
    return value.replace(/(^\s*)/g, "");
  }

  /**
   * 去除字符串结束位置的空格
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function trimEnd(value) {
    return value.replace(/(\s*$)/g, "");
  }

  /**
   * 去除字符串中全部的空格
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function trimAll(value) {
    return value.replace(/\s+/g, "");
  }

  /**
   * 替换所有指定字符串为新的字符串
   * @param {String} value 参数
   * @param {String} oldSubstr 需要替换的字符串
   * @param {String} newSubstr 替换后的字符串
   * @returns {String} 返回处理后的字符串
   */
  function replaceAll(value, oldSubstr, newSubstr) {
    return value.replace(new RegExp(oldSubstr, "gm"), newSubstr);
  }

  /* 字符串转换 */
  /**
   * 字符串转大写
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function toUpper(value) {
    return String(value).toLocaleUpperCase();
  }

  /**
   * 字符串转小写
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function toLower(value) {
    String(value).toLocaleLowerCase();
  }

  /**
   * 转为 snake_case 下划线命名
   * @description 支持 驼峰命名，短横命名，帕斯卡命名
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function toSnakeCase(value) {
    // 驼峰
    if (/^[a-z]$/.test(value.charAt(0)) && !(value.indexOf("-") > 0 || value.indexOf("_") > 0)) {
      return value.replace(/([A-Z])/g, "_$1").toLowerCase();
    }
    // 短横
    if (value.indexOf("-") > 0) {
      return value.replace(/-/g, "_").toLowerCase();
    }
    // 帕斯卡
    if (/^[A-Z]$/.test(value.charAt(0)) && !(value.indexOf("-") > 0 || value.indexOf("_") > 0)) {
      value = value.charAt(0).toLowerCase() + value.slice(1);
      return value.replace(/([A-Z])/g, "_$1").toLowerCase();
    }
  }

  /**
   * 转为 kebab-case 短横命名
   * @description 支持 下划线，驼峰命名，帕斯卡命名
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function toKebabCase(value) {
    // 下划线
    if (value.indexOf("_") > 0) {
      return value.replace(/_/g, "-").toLowerCase();
    }
    // 驼峰
    if (/^[a-z]$/.test(value.charAt(0)) && !(value.indexOf("-") > 0 || value.indexOf("_") > 0)) {
      return value.replace(/([A-Z])/g, "-$1").toLowerCase();
    }
    // 帕斯卡
    if (/^[A-Z]$/.test(value.charAt(0)) && !(value.indexOf("-") > 0 || value.indexOf("_") > 0)) {
      let newStr = value.charAt(0).toLowerCase() + value.slice(1);
      return newStr.replace(/([A-Z])/g, "-$1").toLowerCase();
    }
  }

  /**
   * 转为 camelCase 驼峰命名
   * @description 支持 下划线命名，短横命名，帕斯卡命名
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function toCamelCase(value) {
    // 下划线
    if (value.indexOf("_") > 0) {
      return value.replace(/\_(\w)/g, function (all, letter) {
        return letter.toUpperCase();
      });
    }
    // 短横
    else if (value.indexOf("-") > 0) {
      return value.replace(/\-(\w)/g, function (all, letter) {
        return letter.toUpperCase();
      });
    }
    // 帕斯卡
    else if (/^[A-Z]$/.test(value.charAt(0)) && !(value.indexOf("-") > 0 || value.indexOf("_") > 0)) {
      return value.charAt(0).toLowerCase() + value.slice(1);
    }
    // 返回自身
    else {
      return value;
    }
  }

  /**
   * 转为 PascalCase 帕斯卡命名
   * @description 支持 下划线命名，短横命名，驼峰命名
   * @param {String} value 参数
   * @returns {String} 返回处理后的字符串
   */
  function toPascalCase(value) {
    // 下划线
    if (value.indexOf("_") > 0) {
      let newStr = value.replace(/\_(\w)/g, function (all, letter) {
        return letter.toUpperCase();
      });
      return newStr.charAt(0).toUpperCase() + newStr.slice(1);
    }
    // 短横
    else if (value.indexOf("-") > 0) {
      let newStr = value.replace(/\-(\w)/g, function (all, letter) {
        return letter.toUpperCase();
      });
      return newStr.charAt(0).toUpperCase() + newStr.slice(1);
    }
    // 驼峰
    else if (/^[a-z]$/.test(value.charAt(0)) && !(value.indexOf("-") > 0 || value.indexOf("_") > 0)) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    // 返回自身
    else {
      return value;
    }
  }

  /* 字符串加密 */
  /**
   * base64 加密
   * @param {String} str 字符串
   * @returns {String} 返回加密后的字符串
   */
  function encode(str) {
    return window.btoa(str);
  }

  /**
   * base64 解密
   * @param {String} str 字符串
   * @returns {Boolean} 返回解密后的字符串
   */
  function decode(str) {
    return window.atob(str);
  }

  /* 字符串格式化 */
  /**
   * 字符串中是否包含指定的元素
   * @param {String} value 包含的元素
   * @param {String} str 查找的字符串
   * @returns {Boolean} 返回true和false
   */
  function inString(value, str) {
    return str.includes(value);
  }

  /**
   * 数字前补齐0达到指定位数
   * @description 相当于原生的 padStart(2,'0')
   * @param {Number|String} value 补零的数字
   * @param {Number} maxLength 补齐0后的最大长度，默认2位
   * @returns {String} 返回补0后指定位数的字符串
   */
  function zeroStart(value, maxLength = 2) {
    let len = value.toString().length;
    while (len < maxLength) {
      value = "0" + value;
      len++;
    }
    return value;
  }

  /**
   * 数字后补齐0达到指定位数
   * @description 相当于原生的 padEnd(2,'0')
   * @param {Number|String} value 补零的数字
   * @param {Number} maxLength 补齐0后的最大长度，默认2位
   * @returns {String} 返回补0后指定位数的字符串
   */
  function zeroEnd(value, maxLength = 2) {
    let len = value.toString().length;
    while (len < maxLength) {
      value = value + "0";
      len++;
    }
    return value;
  }

  /**
   * 格式化千分位数字
   * @description 支持任意数据传参，如果非数字则不会格式化，并返回原数据
   * @param {Number|String} num 数字
   * @returns {String} 返回格式化后的千分位数字
   */
  function formatThousand(num) {
    if (!parseFloat(num)) return num;
    num = String(num);
    let regex = num.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return num.replace(regex, "$1,");
  }

  /**
   * 格式化人民币金额大写
   * @param {Number|String} money 金额
   * @returns {String} 返回金额大写
   */
  function formatRmbChinese(money) {
    // 汉字的数字
    let cnNums = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖");
    // 基本单位
    let cnIntRadice = new Array("", "拾", "佰", "仟");
    // 对应整数部分扩展单位
    let cnIntUnits = new Array("", "万", "亿", "兆");
    // 对应小数部分单位
    let cnDecUnits = new Array("角", "分", "毫", "厘");
    // 整数金额时后面跟的字符
    let cnInteger = "整";
    // 整型完以后的单位
    let cnIntLast = "元";
    // 最大处理的数字
    let maxNum = 999999999999999.9999;
    // 金额整数部分
    let integerNum;
    // 金额小数部分
    let decimalNum;
    // 输出的中文金额字符串
    let chineseStr = "";
    // 分离金额后用的数组，预定义
    let parts;
    if (money === "") {
      // 不能用==
      return "";
    }
    money = parseFloat(money);
    if (money >= maxNum) {
      // 超出最大处理数字，抛出异常
      throw new Error("Calculated number overflow!");
    }
    if (money == 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger;
      return chineseStr;
    }
    // 转换为字符串
    money = money.toString();
    if (money.indexOf(".") == -1) {
      integerNum = money;
      decimalNum = "";
    } else {
      parts = money.split(".");
      integerNum = parts[0];
      decimalNum = parts[1].substr(0, 4);
    }
    // 获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
      let zeroCount = 0;
      let IntLen = integerNum.length;
      for (let i = 0; i < IntLen; i++) {
        let n = integerNum.substr(i, 1);
        let p = IntLen - i - 1;
        let q = p / 4;
        let m = p % 4;
        if (n == "0") {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            chineseStr += cnNums[0];
          }
          // 归零
          zeroCount = 0;
          chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
        }
        if (m == 0 && zeroCount < 4) {
          chineseStr += cnIntUnits[q];
        }
      }
      chineseStr += cnIntLast;
    }
    // 小数部分
    if (decimalNum != "") {
      let decLen = decimalNum.length;
      for (let i = 0; i < decLen; i++) {
        let n = decimalNum.substr(i, 1);
        if (n != "0") {
          chineseStr += cnNums[Number(n)] + cnDecUnits[i];
        }
      }
    }
    if (chineseStr == "") {
      chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum == "") {
      chineseStr += cnInteger;
    }
    return chineseStr;
  }

  /**
   * 姓名中间转为星号
   * @param {String} value 姓名
   * @returns {String} 返回转化后字符串
   */
  function formatStartOfName(value) {
    if (value.length == 2) {
      return _formatStartOf(value, 1, 1);
    } else if (value.length > 2) {
      return _formatStartOf(value, 1, value.length - 2);
    } else {
      return value;
    }
  }

  /**
   * 手机号码固定位数转为星号
   * @param {String} value 手机号码
   * @param {Number} start 前缀长度，默认3位
   * @param {Number} len 显示星号的长度，默认4位
   * @returns {String} 返回转化后字符串
   */
  function formatStartOfMobile(value, start = 3, len = 4) {
    return _formatStartOf(value, start, len);
  }

  /**
   * 身份证号码固定位数转为星号
   * @param {String} value 身份证号码
   * @param {Number} start 前缀长度，默认4位
   * @param {Number} len 显示星号的长度，默认8位
   * @returns {String} 返回转化后字符串
   */
  function formatStartOfIdCard(value, start = 4, len = 8) {
    return _formatStartOf(value, start, len);
  }

  /**
   * 银行卡号固定位数转为星号
   * @param {String} value 银行卡号
   * @param {Number} start 前缀长度，默认4位
   * @param {Number} len 显示星号的长度，默认10位
   * @returns {String} 返回转化后字符串
   */
  function formatStartOfBankCard(value, start = 4, len = 11) {
    return _formatStartOf(value, start, len);
  }

  /**
   * 字符串固定位数转为星号
   * @param {String|Number} value 参数
   * @param {Number} start 前缀长度
   * @param {Number} len 显示星号的长度
   * @returns {String} 返回转化后字符串
   */
  function _formatStartOf(value, start, len) {
    value = String(value);
    if (start > value.length) return value;
    // len小于0和len大于剩余长度
    let startStr = "";
    if (len < 0) len = 0;
    if (len > value.length - start) {
      len = value.length - start;
    }
    startStr = String().padEnd(len, "*");
    return value.substring(0, start) + startStr + value.substring(start + len);
  }

  var stringUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    trim: trim,
    trimStart: trimStart,
    trimEnd: trimEnd,
    trimAll: trimAll,
    replaceAll: replaceAll,
    toUpper: toUpper,
    toLower: toLower,
    toSnakeCase: toSnakeCase,
    toKebabCase: toKebabCase,
    toCamelCase: toCamelCase,
    toPascalCase: toPascalCase,
    encode: encode,
    decode: decode,
    inString: inString,
    zeroStart: zeroStart,
    zeroEnd: zeroEnd,
    formatThousand: formatThousand,
    formatRmbChinese: formatRmbChinese,
    formatStartOfName: formatStartOfName,
    formatStartOfMobile: formatStartOfMobile,
    formatStartOfIdCard: formatStartOfIdCard,
    formatStartOfBankCard: formatStartOfBankCard
  });

  /**
   * 转为数字类型
   * @description 解决部分浏览器在转换 '08','09'等是0开头时被默认转8进制问题
   * @param {number} value 转换的值
   * @param {Number} radix 进制数，默认10进制
   * @returns {Number} 返回转换后的数字
   */
  function parseInt$1(value, radix = 10) {
    return Number.parseInt(value, radix);
  }

  var numberUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    parseInt: parseInt$1
  });

  /* 数据类型 */
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
    return /^\d+\.\d+$/.test(value);
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
   * 判断类型是 Promise
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isPromise(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Promise";
  }

  /**
   *判断类型是 Map
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isMap(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Map";
  }

  /**
   * 判断类型是 WeakMap
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isWeakMap(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "WeakMap";
  }

  /**
   * 判断类型是 Set
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isSet(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Set";
  }

  /**
   * 判断类型是 WeakSet
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isWeakSet(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "WeakSet";
  }
  /**
   * 判断类型是 BigInt
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isBigInt(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "BigInt";
  }

  /* 数据值校验 */
  /**
   * 判断值为真
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isTrue(value) {
    return !isFalse(value);
  }

  /**
   * 判断值为假
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isFalse(value) {
    return (
      value == undefined ||
      value == null ||
      value == "undefined" ||
      value == "null" ||
      value == 0 ||
      value == false ||
      value == NaN
    );
  }

  /**
   * 判断非数字
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isNaN(value) {
    // window的isNaN函数是有缺陷的，空数组/数组有一个元素，null，空字符串 都会被认为是数字
    return window.isNaN(value) || isArray(value) || value == null || value == "";
  }

  /**
   * 判断是数字
   * @description 等同于isNumber()
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isNotNaN(value) {
    return !isNaN(value);
  }

  /**
   * 判断对象为空
   * @description 判断值是否为空，如果对象初始化了值则不为空
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isNull(value) {
    return value == undefined || value == null || value == "";
  }

  /**
   * 判断对象不为空
   * @description 判断值是否为空，如果对象初始化了值则不为空
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isNotNull(value) {
    return !isNull(value);
  }

  /**
   * 判断值为空
   * @description 判断是否是有意义不为空的值，如果值是{},[]空的数据则为空
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isEmpty(value) {
    return isNull(value) || !(Object.keys(value) || value).length;
  }

  /**
   * 判断值不为空
   * @description 判断是否是有意义不为空的值，如果值是{},[]空的数据则为空
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isNotEmpty(value) {
    return !isEmpty(value);
  }

  /**
   * 判断值是空白的
   * @description 同时会校验空值，空对象，以及空白符号
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isBlank(value) {
    return isEmpty(value) || /^\s*$/.test(value);
  }

  /**
   * 判断值不是空白的
   * @description 同时会校验空值，空对象，以及空白符号
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isNotBlank(value) {
    return !isBlank(value);
  }

  /**
   * 判断值是undefined
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isUndefined(value) {
    return value === undefined;
  }
  /**
   * 判断值不是undefined
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isNotUndefined(value) {
    return !isUndefined(value);
  }

  /* 数据比较 */
  /**
   * 判断两个值是否相等
   * @param {String|Number} value1 参数1
   * @param {String|Number} value2 参数2
   * @returns {Boolean} 返回true和false
   */
  function equals(value1, value2) {
    return Object.is(value1, value2);
  }

  /**
   * 判断两个值是否相等（忽略大小写）
   * @param {String|Number} value1 参数1
   * @param {String|Number} value2 参数2
   * @returns {Boolean} 返回true和false
   */
  function equalsIgnoreCase(value1, value2) {
    return Object.is(value1.toLowerCase(), value2.toLowerCase());
  }

  /**
   * 深度对比数据
   * @description 可以对比任意数据，对象，数组，日期等也可深度对比，对象不区分先后顺序
   * @param {*} x 数据1
   * @param {*} y 数据2
   * @returns {Boolean} 返回true和false
   */
  function deepCompare(x, y) {
    let i, l, leftChain, rightChain;

    function compare2Objects(x, y) {
      let p;

      // remember that NaN === NaN returns false
      // and isNaN(undefined) returns true
      if (
        isNaN(x) &&
        isNaN(y) &&
        typeof x === "number" &&
        typeof y === "number"
      ) {
        return true;
      }

      // Compare primitives and functions.
      // Check if both arguments link to the same object.
      // Especially useful on the step where we compare prototypes
      if (x === y) {
        return true;
      }

      // Works in case when functions are created in constructor.
      // Comparing dates is a common scenario. Another built-ins?
      // We can even handle functions passed across iframes
      if (
        (typeof x === "function" && typeof y === "function") ||
        (x instanceof Date && y instanceof Date) ||
        (x instanceof RegExp && y instanceof RegExp) ||
        (x instanceof String && y instanceof String) ||
        (x instanceof Number && y instanceof Number)
      ) {
        return x.toString() === y.toString();
      }

      // At last checking prototypes as good as we can
      if (!(x instanceof Object && y instanceof Object)) {
        return false;
      }

      if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
        return false;
      }

      if (x.constructor !== y.constructor) {
        return false;
      }

      if (x.prototype !== y.prototype) {
        return false;
      }

      // Check for infinitive linking loops
      if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
        return false;
      }

      // Quick checking of one object being a subset of another.
      for (p in y) {
        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
          return false;
        } else if (typeof y[p] !== typeof x[p]) {
          return false;
        }
      }

      for (p in x) {
        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
          return false;
        } else if (typeof y[p] !== typeof x[p]) {
          return false;
        }

        switch (typeof x[p]) {
          case "object":
          case "function":
            leftChain.push(x);
            rightChain.push(y);

            if (!compare2Objects(x[p], y[p])) {
              return false;
            }

            leftChain.pop();
            rightChain.pop();
            break;

          default:
            if (x[p] !== y[p]) {
              return false;
            }
            break;
        }
      }

      return true;
    }

    if (arguments.length < 1) {
      return true; //Die silently? Don't know how to handle such case, please help...
      // throw "Need two or more arguments to compare";
    }

    for (i = 1, l = arguments.length; i < l; i++) {
      leftChain = [];
      rightChain = [];

      if (!compare2Objects(arguments[0], arguments[i])) {
        return false;
      }
    }

    return true;
  }

  var validateUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
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
    isPromise: isPromise,
    isMap: isMap,
    isWeakMap: isWeakMap,
    isSet: isSet,
    isWeakSet: isWeakSet,
    isBigInt: isBigInt,
    isTrue: isTrue,
    isFalse: isFalse,
    isNaN: isNaN,
    isNotNaN: isNotNaN,
    isNull: isNull,
    isNotNull: isNotNull,
    isEmpty: isEmpty,
    isNotEmpty: isNotEmpty,
    isBlank: isBlank,
    isNotBlank: isNotBlank,
    isUndefined: isUndefined,
    isNotUndefined: isNotUndefined,
    equals: equals,
    equalsIgnoreCase: equalsIgnoreCase,
    deepCompare: deepCompare
  });

  /* 数组计算 */
  /**
   * 数组最小值
   * @param {Array} array 数组
   * @returns {Number} 返回最小值
   */
  function arrayMin(array) {
    return Math.min.apply(null, array);
  }

  /**
   * 数组最大值
   * @param {Array} array 数组
   * @returns {Number} 返回最大值
   */
  function arrayMax(array) {
    return Math.max.apply(null, array);
  }

  /**
   * 数组求和
   * @param {Array} array 数组
   * @returns {Number} 返回和
   */
  function arraySum(array) {
    return array.reduce(function (pre, cur) {
      return pre + cur;
    });
  }

  /**
   * 数组求平均值
   * @param {Array} array 数组
   * @returns {Number} 返回平均数
   */
  function arrayAvg(array) {
    return arraySum(array) / array.length;
  }

  /* 数组比较 */
  /**
   * 数组中是否包含指定的元素
   * @param {String|Number} value 元素
   * @param {Array} array 查找的数组
   * @returns {Boolean} 返回结果
   */
  function inArray(value, array) {
    if (isNull(value)) return false;
    return array.includes(value);
  }

  /**
   * 比较两个数组是否相等
   * @param {Array} array1 数组1
   * @param {Array} array2 数组2
   * @returns {Boolean} 返回结果
   */
  function arrayEquals(array1, array2) {
    if (array1 === array2) return true;
    if (array1.length !== array2.length) return false;
    return array1.every((v, i) => v === array2[i]);
  }

  /* 数组操作 */
  /**
   * 生成指定长度的数组
   * @param {Number} length 长度，默认 0
   * @returns {Array} 返回数组
   */
  function arrayCreate(length = 0) {
    return [...Array(length).keys()];
  }

  /**
   * 数组指定位置添加元素
   * @param {Array} array 数组
   * @param {Number} index 下标位置，默认0
   * @param {*} value 添加的元素
   * @returns {Array} 返回操作后的数组
   */
  function arrayInsert(array = [], index = 0, value = undefined) {
    array.splice(index, 0, value);
    return array;
  }

  /**
   * 数组指定位置前面添加元素
   * @param {Array} array 数组
   * @param {Number} index 下标位置，默认0
   * @param {*} value 添加的元素
   * @returns {Array} 返回操作后的数组
   */
  function arrayInsertBefore(array = [], index = 0, value = undefined) {
    if (index < 0 || index > array.length - 1) return array;

    array.splice(index, 0, value);
    return array;
  }

  /**
   * 数组指定位置后面添加元素
   * @param {Array} array 数组
   * @param {Number} index 下标位置，默认0
   * @param {*} value 添加的元素
   * @returns {Array} 返回操作后的数组
   */
  function arrayInsertAfter(array = [], index = 0, value = undefined) {
    if (index < 0 || index > array.length - 1) return array;

    array.splice(index, 0, array.splice(index, 1, value)[0]);
    return array;
  }

  /**
   * 数组指定位置删除元素
   * @param {Array} array 数组
   * @param {Number} index 下标位置，默认0
   * @returns {Array} 返回操作后的数组
   */
  function arrayRemove(array = [], index = 0) {
    if (index < 0 || index > array.length - 1) return array;

    array.splice(index, 1);
    return array;
  }

  /**
   * 数组指定位置前面删除元素
   * @param {Array} array 数组
   * @param {Number} index 下标位置，默认0
   * @returns {Array} 返回操作后的数组
   */
  function arrayRemoveBefore(array = [], index = 0) {
    if (index < 0 || index > array.length - 1) return array;

    array.splice(index - 1, 1);
    return array;
  }

  /**
   * 数组指定位置后面删除元素
   * @param {Array} array 数组
   * @param {Number} index 下标位置，默认0
   * @returns {Array} 返回操作后的数组
   */
  function arrayRemoveAfter(array = [], index = 0) {
    if (index < 0 || index > array.length - 1) return array;

    array.splice(index + 1, 1);
    return array;
  }

  /**
   * 数组置顶
   * @param {Array} array 数组
   * @param {Number} index 下标位置，默认0
   * @returns {Array} 返回操作后的数组
   */
  function arrayTop(array = [], index = 0) {
    if (index < 0 || index > array.length - 1) return array;

    array.unshift(array.splice(index, 1)[0]);
    return array;
  }

  /**
   * 数组置尾
   * @param {Array} array 数组
   * @param {Number} index 下标位置，默认0
   * @returns {Array} 返回操作后的数组
   */
  function arrayBottom(array = [], index = 0) {
    if (index < 0 || index > array.length - 1) return array;

    array.push(array.splice(index, 1)[0]);
    return array;
  }

  /**
   * 数组向上移动
   * @param {Array} array 数组
   * @param {Number} index 下标位置，默认0
   * @returns {Array} 返回操作后的数组
   */
  function arrayUp(array = [], index = 0) {
    if (index < 0 || index > array.length - 1) return array;

    if (index > 0) {
      array.splice(index - 1, 0, array.splice(index, 1)[0]);
    } else {
      array.push(array.splice(index, 1)[0]);
    }
    return array;
  }

  /**
   * 数组向下移动
   * @param {Array} array 数组
   * @param {Number} index 下标位置，默认0
   * @returns {Array} 返回操作后的数组
   */
  function arrayDown(array = [], index = 0) {
    if (index < 0 || index > array.length - 1) return array;

    if (index < array.length - 1) {
      array.splice(index + 1, 0, array.splice(index, 1)[0]);
    } else {
      array.unshift(array.splice(index, 1)[0]);
    }
    return array;
  }

  /**
   * 数组交换元素
   * @param {Array} array 数组
   * @param {Number} sourceIndex 原索引
   * @param {Number} targetIndex 目标索引
   * @returns {Array} 返回操作后的数组
   */
  function arraySwap(array, sourceIndex, targetIndex) {
    if (sourceIndex < 0 || targetIndex < 0 || sourceIndex > array.length - 1 || targetIndex > array.length - 1) {
      return array;
    }

    [array[targetIndex], array[sourceIndex]] = [array[sourceIndex], array[targetIndex]];
    return array;
  }

  /**
   * 数组排序
   * @param {Array} array 数组
   * @param {Number} mode 排序模式，参考常量集合中 数组常量，默认是升序
   * @returns {Array} 返回操作后的数组
   */
  function arraySort(array, mode = SORT.ASC) {
    return array.sort((a, b) => {
      switch (mode) {
        // 升序
        case SORT.ASC:
          return a - b;
        // 降序
        case SORT.DESC:
          return b - a;
        // 随机
        case SORT.RANDOM:
          return Math.random() - 0.5;
        // 默认
        default:
          return array;
      }
    });
  }

  /**
   * 数组元素去重
   * @param {Array} array 数组
   * @returns {Array} 返回操作后的数组
   */
  function arrayUnique(array) {
    if (isEmpty(array)) return [];

    return Array.from(new Set(array));
  }

  /**
   * 数组打乱元素
   * @description 可以适用于一些抽奖人员列表打乱顺序
   * @param {Array} array 数组
   * @returns {Array} 返回操作后的数组
   */
  function arrayShuffle(array) {
    for (let i = 1; i < array.length; i++) {
      const random = Math.floor(Math.random() * (i + 1));
      [array[random], array[i]] = [array[i], array[random]];
    }
    return array;
  }

  /* 数组转换 */
  /**
   * 普通数组转树形结构
   * @description 包含id和pid属性关系的一维数组，转为children的树形结构
   * @param {Array} array 数组
   * @param {Object} setting 配置项
   * @returns {Array} 返回树形节点
   */
  function arrayToTree(array, setting = { key: "id", parentKey: "pid", childrenKey: "children" }) {
    let key = setting.key,
      parentKey = setting.parentKey,
      childrenKey = setting.childrenKey;

    // 数组或者key是否为空
    if (!array || array.length === 0 || !key || key === "") return [];

    // 获得子节点方法
    const nodeChildren = function (node, childrenKey, newChildren) {
      if (!node) {
        return null;
      }
      if (typeof newChildren !== "undefined") {
        node[childrenKey] = newChildren;
      }
      return node[childrenKey];
    };

    // 声明变量
    let result = [];
    let tempMap = {};
    for (let i = 0; i < array.length; i++) {
      // 如果源数据数组中有children，则需要删除掉，否则会导致和之前的children合并
      array[i][childrenKey] && delete array[i][childrenKey];
      tempMap[array[i][key]] = array[i];
    }
    for (let i = 0; i < array.length; i++) {
      let parent = tempMap[array[i][parentKey]];
      if (parent && array[i][key] !== array[i][parentKey]) {
        let children = nodeChildren(parent, childrenKey);

        if (!children) {
          children = nodeChildren(parent, childrenKey, []);
        }
        children.push(array[i]);
      } else {
        result.push(array[i]);
      }
    }

    // 返回结果
    return result;
  }

  /**
   * 树形结构转普通数组
   * @param {Array} nodes 树形节点
   * @param {Object} setting 配置项
   * @returns {Array} 返回普通数组
   */
  function treeToArray(nodes, setting = { childrenKey: "children" }) {
    let childrenKey = setting.childrenKey;
    let result = [];
    for (let node of nodes) {
      // 删除掉多余空的children
      if (node[childrenKey] && !node[childrenKey].length) {
        delete node[childrenKey];
      }
      result.push(node);
      // 继续执行
      if (node[childrenKey] && node[childrenKey].length) {
        let array = treeToArray(node[childrenKey], setting);
        array && result.push(...array);
      }
    }

    // 返回结果
    return result;
  }

  /* 数组求并集，交集，差集等 */
  /**
   * 数组求并集
   * @description 数组1 和 数组2 合并一起的元素集合
   * @param {Array} array1 数组1
   * @param {Array} array2 数组2
   * @returns {Array} 返回数组
   */
  function arrayUnion(array1, array2) {
    return [...new Set(array1.concat(array2))];
  }

  /**
   * 数组求交集
   * @description 数组1 和 数组2 相同的元素集合
   * @param {Array} array1 数组1
   * @param {Array} array2 数组2
   * @returns {Array} 返回数组
   */
  function arrayIntersect(array1, array2) {
    return [...new Set(array1)].filter((item) => array2.includes(item));
  }

  /**
   * 数组求差集
   * @description 数组1 中不包含 数组2 的元素集合
   * @param {Array} array1 数组1
   * @param {Array} array2 数组2
   * @returns {Array} 返回数组
   */
  function arrayDifference(array1, array2) {
    return [...new Set(array1)].filter((item) => !array2.includes(item));
  }

  /**
   * 数组求补集
   * @description 数组1 和 数组2 不相同的元素集合
   * @param {Array} array1 数组1
   * @param {Array} array2 数组2
   * @returns {Array} 返回数组
   */
  function arrayComplement(array1, array2) {
    return [
      ...[...new Set(array1)].filter((item) => !array2.includes(item)),
      ...[...new Set(array2)].filter((item) => !array1.includes(item)),
    ];
  }

  var arrayUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    arrayMin: arrayMin,
    arrayMax: arrayMax,
    arraySum: arraySum,
    arrayAvg: arrayAvg,
    inArray: inArray,
    arrayEquals: arrayEquals,
    arrayCreate: arrayCreate,
    arrayInsert: arrayInsert,
    arrayInsertBefore: arrayInsertBefore,
    arrayInsertAfter: arrayInsertAfter,
    arrayRemove: arrayRemove,
    arrayRemoveBefore: arrayRemoveBefore,
    arrayRemoveAfter: arrayRemoveAfter,
    arrayTop: arrayTop,
    arrayBottom: arrayBottom,
    arrayUp: arrayUp,
    arrayDown: arrayDown,
    arraySwap: arraySwap,
    arraySort: arraySort,
    arrayUnique: arrayUnique,
    arrayShuffle: arrayShuffle,
    arrayToTree: arrayToTree,
    treeToArray: treeToArray,
    arrayUnion: arrayUnion,
    arrayIntersect: arrayIntersect,
    arrayDifference: arrayDifference,
    arrayComplement: arrayComplement
  });

  /* 对象转换 */
  /**
   * map转object
   * @param {Map} map 参数
   * @returns {Object} 返回Object
   */
  function mapToObject(map) {
    let obj = Object.create(null);
    for (let [k, v] of map) {
      obj[k] = v;
    }
    return obj;
  }

  /**
   * map转json字符串
   * @param {Map} map 参数
   * @returns {String} 返回Json字符串
   */
  function mapToJson(map) {
    return JSON.stringify(mapToObject(map));
  }

  /**
   * object转map
   * @param {Object} obj 参数
   * @returns {Map} 返回Map
   */
  function objectToMap(obj) {
    let map = new Map();
    for (let k of Object.keys(obj)) {
      map.set(k, obj[k]);
    }
    return map;
  }

  /**
   * json字符串转map
   * @param {String} json json字符串
   * @returns {Map} 返回Map
   */
  function jsonToMap(json) {
    return objToMap(JSON.parse(json));
  }

  /**
   * json对象转json字符串
   * @param {Object} json json对象
   * @returns {String} 返回Json字符串
   */
  function stringifyJson(json) {
    return JSON.stringify(json);
  }

  /**
   * json字符串转json对象
   * @param {String} json json字符串
   * @returns {Object} 返回Json对象
   */
  function parseJson(json) {
    if (isEmpty(json)) return;
    return JSON.parse(json);
  }

  /* 数据拷贝，对比，合并等操作 */
  /**
   * 浅拷贝数据
   * @param {*} source 拷贝的数据
   * @returns {*} 返回浅拷贝的数据
   */
  function clone(source) {
    return Object.assign(source);
  }

  /**
   * 深拷贝数据
   * @param {*} source 拷贝的数据
   * @returns {*} 返回深拷贝的数据
   */
  function cloneDeep(source) {
    //  Object
    if (isObject(source)) {
      let copy = {};
      for (let attr in source) {
        if (source.hasOwnProperty(attr)) copy[attr] = cloneDeep(source[attr]);
      }
      return copy;
    }

    //  Array
    else if (isArray(source)) {
      let copy = [];
      for (let i = 0, len = source.length; i < len; i++) {
        copy[i] = cloneDeep(source[i]);
      }
      return copy;
    }

    //  Date
    else if (isDate(source)) {
      let copy = new Date();
      copy.setTime(source.getTime());
      return copy;
    }

    // Other 原路返回源数据
    else {
      return source;
    }
  }

  /**
   * 比较两个对象是否相等
   * @description 方法只能对比简单的对象，不能包含function，另外对象的属性顺序不一致也是相等的
   * @param {Object} obj1 对象1
   * @param {Object} obj2 对象2
   * @returns {Boolean} 返回true和false
   */
  function objectEquals(obj1, obj2) {
    // 比较值相等
    if (obj1 === obj2) {
      return true;
    }
    // 比较Date
    if (obj1 instanceof Date && b instanceof Date) {
      return a.getTime() === b.getTime();
    }
    // 对象比较引用
    if (
      !obj1 ||
      !obj2 ||
      (typeof obj1 !== "object" && typeof obj2 !== "object")
    ) {
      return obj1 === obj2;
    }
    // 比较原型
    if (obj1.prototype !== b.prototype) {
      return false;
    }
    // 比较对象的值
    const keys = Object.keys(obj1);
    if (keys.length !== Object.keys(obj2).length) {
      return false;
    } else {
      return keys.every((k) => objectEquals(obj1[k], obj2[k]));
    }
  }

  /**
   * 合并对象
   * @param {Object} target 目标对象
   * @param {Object[]} source 原对象列表
   * @returns {Object} 返回合并后的对象
   */
  function merge(target, ...source) {
    return Object.assign(target, ...source);
  }

  var objectUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    mapToObject: mapToObject,
    mapToJson: mapToJson,
    objectToMap: objectToMap,
    jsonToMap: jsonToMap,
    stringifyJson: stringifyJson,
    parseJson: parseJson,
    clone: clone,
    cloneDeep: cloneDeep,
    objectEquals: objectEquals,
    merge: merge
  });

  /* 函数处理 */
  /**
   * 节流函数
   * @description 高频触发时，在指定时间间隔内只执行一次
   * @param {Function} fn 目标函数
   * @param {Number} interval 时间间隔，单位毫秒，默认1*1000毫秒
   * @returns {Function} 返回function()
   */
  function throttle(fn, interval = 1 * 1000) {
    let timer;
    return function () {
      const _args = arguments;
      // 有定时器则返回
      if (timer) return;
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, _args);
      }, interval);
    };
  }

  /**
   * 防抖函数
   * @description 事件执行后，在延迟时间内如果再次执行，会清空定时器重新延迟执行
   * @param {Function} fn 目标函数
   * @param {Number} delay 延迟时间，单位毫秒，默认 1*1000 毫秒
   * @param {Boolean} immediate 是否立即执行，默认true
   * @returns {Function} 返回function()
   */
  function debounce(fn, delay = 1 * 1000, immediate = true) {
    let timer;
    return function () {
      const _args = arguments;
      // 先关闭定时器
      if (timer) clearTimeout(timer);
      // 立即执行判断
      if (immediate) {
        // 如果需要立即执行
        // 开启新定时器防止短时间内再次触发
        const canExecute = !timer;
        timer = setTimeout(function () {
          timer = null;
        }, delay);
        if (canExecute) fn.apply(this, _args);
      } else {
        // 如果不需要立即执行
        // 每次触发开启新定时器即可
        timer = setTimeout(function () {
          fn.apply(this, _args);
        }, delay);
      }
    };
  }

  /**
   * 睡眠延迟执行
   * @description 需要配合 async/await 来达到延迟效果
   * @param {Number} delay 延迟时间，单位毫秒，默认1*1000毫秒
   */
  function sleep(delay = 1 * 1000) {
    return new Promise((resolve) => setTimeout(resolve, delay));
  }

  /**
   * 根据字符串属性路径获取目标对象
   * @example
   * let res = {code:200, data:{rows:[], pages:{current:1,pageSize:20}}}
   * this._getTargetByPath(res, 'data.pages.pageSize'); // 这里会输出20
   * @param {Object} source 源对象
   * @param {String} path 字符串属性路径
   * @returns {Object} 返回目标对象，可以是任意类型数据
   */
  function getTargetByPath(source, path) {
    const paths = (path || "data").split(".");
    let data = source;
    // 属性总个数
    let lastIndex = paths.length - 1;
    for (const index in paths) {
      // 如果路径中没有该属性，则创建一个
      if (!data[paths[index]]) {
        data[paths[index]] = Number(index) !== lastIndex ? {} : undefined;
      }
      data = data[paths[index]];
    }
    return data;
  }

  /**
   * 根据字符串属性路径设置目标对象的值
   * @example
   * let res = {code:200, data:{rows:[], pages:{current:1,pageSize:20}}}
   * this._setTargetByPath(res, 'data.pages.pageSize', 30); // 打印res对象会发现pageSize的值改为了30
   * @param {Object} source 源对象
   * @param {String} path 字符串属性路径
   * @param {Any} value 属性设置的值
   * @returns {Object} 返回目标对象，可以是任意类型数据
   */
  function setTargetByPath(source, path, value) {
    const paths = (path || "data").split(".");
    // 变量表达式拼接
    let fxStr = "";
    for (const name of paths) {
      fxStr += `['${name}']`;
    }
    const fn = new Function(
      "source",
      `source${fxStr}=${value}
        `,
    );
    fn(source);
  }

  var functionUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    throttle: throttle,
    debounce: debounce,
    sleep: sleep,
    getTargetByPath: getTargetByPath,
    setTargetByPath: setTargetByPath
  });

  /* 常用正则集合 */

  /* 正则校验方法 */
  /**
   * 正则校验的方法
   * @description 类型为REGEXP对应的正则
   * @param {String|Number} value 校验的参数
   * @param {REGEXP} regex 使用的REGEXP中的正则
   * @returns {Boolean} 返回校验的结果
   */
  function regexpTest(value, regex) {
    return new RegExp(regex).test(value);
  }

  /* 常用校验 */
  /**
   * 是中文
   * @param {String} value 校验的参数
   * @returns {Boolean} 返回校验的结果
   */
  function isChinese(value) {
    return regexpTest(value, REGEXP.CH);
  }

  /**
   * 是英文
   * @param {String} value 校验的参数
   * @returns {Boolean} 返回校验的结果
   */
  function isEnglish(value) {
    return regexpTest(value, REGEXP.EN);
  }

  /**
   * 是外链
   * @description 支持http，https，mail，tel电话
   * @param {String} value 校验的参数
   * @returns {Boolean} 返回校验的结果
   */
  function isExternal(value) {
    return regexpTest(value, REGEXP.EXTERNAL);
  }

  /**
   * 是小写字母
   * @param {String} value 校验的参数
   * @returns {Boolean} 返回校验的结果
   */
  function isLowerCase(value) {
    return regexpTest(value, REGEXP.LOWER_CASE);
  }

  /**
   * 是大写字母
   * @param {String} value 校验的参数
   * @returns {Boolean} 返回校验的结果
   */
  function isUpperCase(value) {
    return regexpTest(value, REGEXP.UPPER_CASE);
  }

  /**
   * 是11位手机号码
   * @param {String} value 校验的参数
   * @returns {Boolean} 返回校验的结果
   */
  function isMobile$1(value) {
    return regexpTest(value, REGEXP.MOBILE);
  }

  /**
   * 是邮箱
   * @param {String} value 校验的参数
   * @returns {Boolean} 返回校验的结果
   */
  function isEmail(value) {
    return regexpTest(value, REGEXP.EMAIL);
  }

  /**
   * 是身份证号码（15-18位）
   * @param {String} value 校验的参数
   * @returns {Boolean} 返回校验的结果
   */
  function isIdCard(value) {
    return regexpTest(value, REGEXP.ID_CARD);
  }

  /**
   * 是url链接
   * @param {String} value 校验的参数
   * @returns {Boolean} 返回校验的结果
   */
  function isUrl(value) {
    return regexpTest(value, REGEXP.URL);
  }

  var regexpUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    regexpTest: regexpTest,
    isChinese: isChinese,
    isEnglish: isEnglish,
    isExternal: isExternal,
    isLowerCase: isLowerCase,
    isUpperCase: isUpperCase,
    isMobile: isMobile$1,
    isEmail: isEmail,
    isIdCard: isIdCard,
    isUrl: isUrl
  });

  /* 数字计算 */
  /**
   * 两个数字相加
   * @param {String|Number} arg1 第一个数字
   * @param {String|Number} arg2 第二个数字
   * @returns {Number} 返回计算后的数字
   */
  function add(arg1, arg2) {
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
   * 两个数字相减
   * @param {String|Number} arg1 第一个数字
   * @param {String|Number} arg2 第二个数字
   * @returns {Number} 返回计算后的数字
   */
  function subtract(arg1, arg2) {
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
   * 两个数字相乘
   * @param {String|Number} arg1 第一个数字
   * @param {String|Number} arg2 第二个数字
   * @returns 返回计算后的数字
   */
  function multiply(arg1, arg2) {
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
   * 两个数字相除
   * @param {String|Number} arg1 第一个数字
   * @param {String|Number} arg2 第二个数字
   * @returns {Number} 返回计算后的数字
   */
  function divide(arg1, arg2) {
    let t1 = 0,
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
   * 两个数字取模
   * @param {String|Number} arg1 第一个数字
   * @param {String|Number} arg2 第二个数字
   * @returns {Number} 返回计算后的数字
   */
  function modulo(arg1, arg2) {
    let t1 = 0,
      t2 = 0,
      d = 0;
    try {
      t1 = arg1.toString().split(".")[1].length;
    } catch (e) {}
    try {
      t2 = arg2.toString().split(".")[1].length;
    } catch (e) {}
    d = Math.pow(10, Math.max(t1, t2));
    return (Math.round(Number(arg1) * d) % Math.round(Number(arg2) * d)) / d;
  }

  /**
   * 最大公约数
   * @param {String|Number} arg1 第一个数字
   * @param {String|Number} arg2 第二个数字
   * @returns {Number} 返回计算后的数字
   */
  function gcd(arg1, arg2) {
    return !arg2 ? arg1 : gcd(arg2, arg1 % arg2);
  }

  /**
   * 最小公倍数
   * @param {String|Number} arg1 第一个数字
   * @param {String|Number} arg2 第二个数字
   * @returns {Number} 返回计算后的数字
   */
  function scm(arg1, arg2) {
    return (arg1 * arg2) / gcd(arg1, arg2);
  }

  /* 数字精度 */
  /**
   * 强制保留小数位数
   * @description 默认保留两位小数，解决原生的toFixed()会五舍六入的问题
   * @param {String|Number} num 数字
   * @param {Number} decimals 保留小数的位数，默认2位
   * @param {Number} mode 保留小数模式，参考常量集合中 数学计算常量，默认MATH.ROUND
   * @returns {String} 返回保留后的数字字符串
   */
  function toFixed(num, decimals = 2, mode = MATH.ROUND) {
    // 四舍五入
    if (mode === MATH.ROUND) {
      return _toFixedRound(num, decimals);
    }
    // 向下舍出
    if (mode === MATH.ROUND_FLOOR) {
      return _toFixedFloor(num, decimals);
    }
  }

  /**
   * 尽可能保留小数位数
   * @param {String|Number} num 数字
   * @param {Number} decimals 保留小数的位数，默认2位
   * @param {Number} mode 保留小数模式，参考常量集合中 数学计算常量，默认MATH_MODE.ROUND
   * @returns {Number} 返回保留后的数字
   */
  function toDecimal(num, decimals = 2, mode = MATH.ROUND) {
    // 四舍五入
    if (mode === MATH.ROUND) {
      return _toDecimalRound(num, decimals);
    }
    // 向下舍出
    if (mode === MATH.ROUND_FLOOR) {
      return _toDecimalFloor(num, decimals);
    }
  }

  /* 内部函数 */
  /**
   * 四舍五入，强制保留小数位数
   * @description 默认保留两位小数，此方法解决原生的toFixed()会五舍六入的问题
   * @param {String|Number} num 数字
   * @param {Number} decimals 保留小数的位数，默认2位
   * @returns {String} 返回字符串的数字
   */
  function _toFixedRound(num, decimals = 2) {
    if (isNaN(num)) {
      return "--";
    }
    let s = String(num);
    if (!decimals) decimals = 0;
    if (s.indexOf(".") === -1) s += ".";
    s += new Array(decimals + 1).join("0");
    if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0," + (decimals + 1) + "})?)\\d*$").test(s)) {
      let s = "0" + RegExp.$2,
        pm = RegExp.$1,
        a = RegExp.$3.length,
        b = true;
      if (a === decimals + 2) {
        a = s.match(/\d/g);
        if (parseInt(a[a.length - 1]) > 4) {
          for (let i = a.length - 2; i >= 0; i--) {
            a[i] = parseInt(a[i]) + 1;
            if (a[i] === 10) {
              a[i] = 0;
              b = i !== 1;
            } else break;
          }
        }
        s = a.join("").replace(new RegExp("(\\d+)(\\d{" + decimals + "})\\d$"), "$1.$2");
      }
      if (b) s = s.substr(1);
      return (pm + s).replace(/\.$/, "");
    }
    return String(num);
  }

  /**
   * 向下舍出，强制保留小数位数
   * @description 默认保留两位小数，此方法相当于强制截取小数位数
   * @param {String|Number} num 数字
   * @param {Number} decimals 保留小数的位数，默认2位
   * @returns {Number} 返回字符串的数字
   */
  function _toFixedFloor(num, decimals = 2) {
    if (isNaN(num)) {
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
    return String(realVal);
  }

  /**
   * 四舍五入，尽可能保留小数
   * @param {String|Number} num 数字
   * @param {Number} decimals 保留小数的位数，默认2位
   * @returns {Number} 返回保留后的数字
   */
  function _toDecimalRound(num, decimals = 2) {
    if (isNaN(num)) {
      return "--";
    }
    let n = Math.pow(10, decimals);
    return Math.round(num * n) / n;
  }

  /**
   * 向下舍入，尽可能保留小数
   * @param {String|Number} num 数字
   * @param {Number} decimals 保留小数的位数，默认2位
   * @returns {Number} 返回保留后的数字
   */
  function _toDecimalFloor(num, decimals = 2) {
    if (isNaN(num)) {
      return "--";
    }
    let n = Math.pow(10, decimals);
    return Math.floor(num * n) / n;
  }

  var mathUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    modulo: modulo,
    gcd: gcd,
    scm: scm,
    toFixed: toFixed,
    toDecimal: toDecimal
  });

  /**
   * 生成指定大小的随机整数
   * @description n和m参数表示最小和最大范围值，默认0-9之间范围
   * @param {Number} min 随机数的最小值，默认 0
   * @param {Number} max 随机数的最大值，默认 9
   * @returns {Number} 返回指定大小的随机整数
   */
  function getRandom(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /**
   * 生成固定位数的随机整数
   * @description 默认是1，代表生成0-9之间一位，如果是2，则生成10-99之间两位，以此类推
   * @param {Number} len 固定的位数
   * @returns {Number} 返回固定位数的随机数
   */
  function getRandomDigit(len = 1) {
    return Math.floor((Math.random() + Math.floor(Math.random() * 9 + 1)) * Math.pow(10, len - 1));
  }

  var randomUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getRandom: getRandom,
    getRandomDigit: getRandomDigit
  });

  /* 文件信息处理 */
  /**
   * 格式化文件大小自动转为 B，KB，MB，GB
   * @param {Byte} size 文件的大小，单位byte字节
   * @returns {String} 返回格式化后的字符串
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
   * @param {String} fileName 文件的全名称，例如：测试图片.jpg
   * @returns {String} 返回文件的名称
   */
  function getFileName(fileName) {
    if (isEmpty(fileName)) return;
    return fileName.substring(0, fileName.lastIndexOf("."));
  }

  /**
   * 获得文件后缀名
   * @param {String} value 文件地址路径或者文件全名称，例如：http://xxx.com/mytest.jpg，测试图片.jpg
   * @returns {String} 返回文件后缀名
   */
  function getFileSuffix(value) {
    if (isEmpty(value)) return;
    return value.substring(value.lastIndexOf(".") + 1).toLowerCase();
  }

  /* 文件转换 */
  /**
   * file转blob
   * @param {File} file file文件
   * @returns {Promise} 返回Promise的blob
   */
  function fileToBlob(file) {
    return new Promise((resolve, reject) => {
      // 读取解析文件
      let reader = new FileReader();
      reader.readAsDataURL(file);

      // 加载成功
      reader.onload = (e) => {
        const blob = new Blob([e.target.result], { type: file.type });
        resolve(blob);
      };
      // 加载失败
      reader.onerror = function (err) {
        console.error(err);
        reject(err);
      };
    });
  }

  /**
   * file转base64
   * @param {File} file file文件
   * @returns {Promise} 返回Promise的base64
   */
  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      // 读取解析文件
      let reader = new FileReader();
      reader.readAsDataURL(file);

      // 加载成功
      reader.onload = function (e) {
        resolve(e.target.result);
      };
      // 加载失败
      reader.onerror = function (err) {
        console.error(err);
        reject(err);
      };
    });
  }

  /**
   * file转url
   * @description 适用于本地上传图片并预览，需要注意 URL.revokeObjectURL(file) 内存释放
   * @param {File} file file文件
   * @returns {Promise} 返回Promise的url
   */
  function fileToUrl(file) {
    return new Promise((resolve, reject) => {
      try {
        resolve(URL.createObjectURL(file));
      } catch (err) {
        // 捕捉异常
        console.error(err);
        URL.revokeObjectURL(file);
        reject(err);
      }
    });
  }

  /**
   * blob转file
   * @param {Blob} blob blob数据
   * @param {String} fileName 文件名称，默认以时间戳命名
   * @returns {Promise} 返回Promise的file
   */
  function blobToFile(blob, fileName = Date.now()) {
    return new Promise((resolve, reject) => {
      try {
        const mime = blob.type;
        const size = blob.size;
        const fileSuffix = mime.split("/")[1];
        const file = new File([blob], `${Date.now()}.${fileSuffix}`, {
          type: mime,
          size: size,
          name: `${fileName}.${fileSuffix}`,
          lastModified: Date.now(),
          lastModifiedDate: new Date(),
        });
        resolve(file);
      } catch (err) {
        // 捕捉异常
        console.error(err);
        reject(err);
      }
    });
  }

  /**
   * blob转base64
   * @param {Blob} blob blob数据
   * @returns {Promise} 返回Promise的base64
   */
  function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      // 读取解析文件
      let reader = new FileReader();
      reader.readAsDataURL(blob);

      // 加载成功
      reader.onload = function (e) {
        resolve(e.target.result);
      };
      // 加载失败
      reader.onerror = function (err) {
        console.error(err);
        reject(err);
      };
    });
  }

  /**
   * base64转file
   * @param {Base64} base64 base64数据
   * @param {String} fileName 文件名称，默认以时间戳命名
   * @returns {Promise} 返回Promise的file
   */
  function base64ToFile(base64, fileName = Date.now()) {
    return new Promise((resolve, reject) => {
      try {
        const arr = base64.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const fileSuffix = mime.split("/")[1];
        const bstr = window.atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);

        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        resolve(new File([u8arr], `${fileName}.${fileSuffix}`, { type: mime }));
      } catch (err) {
        // 捕捉异常
        console.error(err);
        reject(err);
      }
    });
  }

  /**
   * base64转成blob
   * @param {Base64} base64 base64数据
   * @returns {Promise} 返回Promise的blob
   */
  function base64ToBlob(base64) {
    return new Promise((resolve, reject) => {
      try {
        const arr = base64.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = window.atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);

        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        resolve(new Blob([u8arr], { type: mime }));
      } catch (err) {
        // 捕捉异常
        console.error(err);
        reject(err);
      }
    });
  }

  /**
   * 图片url转base64
   * @param {String} imgUrl 图片url地址
   * @returns {Promise} 返回Promise的base64
   */
  function urlToBase64(imgUrl) {
    return new Promise((resolve, reject) => {
      // 设置图片
      const img = new Image();
      img.src = imgUrl;

      // 加载成功
      img.onload = function () {
        // 画图
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
        // 转为base64
        const base64 = canvas.toDataURL("image/png");
        resolve(base64);
      };
      // 加载失败
      img.onerror = function (err) {
        console.error(err);
        reject(err);
      };
    });
  }

  /* 下载文件 */
  /**
   * 下载blob格式的文件
   * @param {Blob} blob blob数据
   * @param {String} fileName 下载的文件名，不写后缀名则默认为原文件类型
   */
  function downloadBlobFile(blob, fileName) {
    try {
      const objUrl = window.URL.createObjectURL(blob);
      const link = window.document.createElement("a");
      link.download = fileName;
      link.href = objUrl;
      link.click();
      URL.revokeObjectURL(objUrl);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 通过文件url地址下载
   * @param {String} fileUrl url文件地址
   * @param {String} fileName 下载的文件名，不写后缀名则默认为原文件类型
   */
  function downloadFileUrl(fileUrl, fileName) {
    try {
      const link = window.document.createElement("a");
      link.download = fileName;
      link.href = fileUrl;
      // 生成节点点击
      window.document.body.appendChild(link);
      link.click();
      // 点击后移除节点
      window.document.body.removeChild(link);
    } catch (error) {
      console.error(error);
    }
  }

  var fileUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    formatFileSize: formatFileSize,
    getFileName: getFileName,
    getFileSuffix: getFileSuffix,
    fileToBlob: fileToBlob,
    fileToBase64: fileToBase64,
    fileToUrl: fileToUrl,
    blobToFile: blobToFile,
    blobToBase64: blobToBase64,
    base64ToFile: base64ToFile,
    base64ToBlob: base64ToBlob,
    urlToBase64: urlToBase64,
    downloadBlobFile: downloadBlobFile,
    downloadFileUrl: downloadFileUrl
  });

  /**
   * rgb颜色转hex
   * @param {String} rgb rgb颜色字符串
   * @returns {String} 返回生成的hex颜色
   */
  function rgbToHex(rgb) {
    rgb = rgb.split(",");
    let r = parseInt(rgb[0].split("(")[1]);
    let g = parseInt(rgb[1]);
    let b = parseInt(rgb[2].split(")")[0]);
    return "#" + _hex(r) + _hex(g) + _hex(b);
  }

  /**
   * rgba颜色转hex
   * @param {String} rgba rgba颜色字符串
   * @returns {String} 返回生成的hex颜色
   */
  function rgbaToHex(rgba) {
    rgba = rgba.split(",");
    let r = parseInt(rgba[0].split("(")[1]);
    let g = parseInt(rgba[1]);
    let b = parseInt(rgba[2]);
    let a = parseFloat(rgba[3].split(")")[0]);

    return `#${_hex(Math.round(a * 256 - 1))}${_hex(r)}${_hex(g)}${_hex(b)}`;
  }

  /**
   * rgba颜色转hsl
   * @param {String} rgba rgb颜色字符串
   * @returns {String} 返回生成的hsl颜色
   */
  function rgbaToHsl(rgba) {
    rgba = rgba.split(",");
    let r = parseInt(rgba[0].split("(")[1]) / 255;
    let g = parseInt(rgba[1]) / 255;
    let b = parseInt(rgba[2]) / 255;
    let a = parseFloat(rgba[3] && rgba[3].split(")")[0]);
    let max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    if (a) {
      return `hsla(${Math.round(h * 360)},${Math.round(s * 100)}%,${Math.round(
      l * 100
    )}%,${a})`;
    }
    return `hsl(${Math.round(h * 360)},${Math.round(s * 100)}%,${Math.round(
    l * 100
  )}%)`;
  }

  /**
   * hex颜色转rgb
   * @param {String} hex hex颜色字符串
   * @returns {String} 返回生成的rgb颜色
   */
  function hexToRgb(hex) {
    let color = {};
    let rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    let hexStr = hex.replace(rgx, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexStr);
    color.r = parseInt(rgb[1], 16);
    color.g = parseInt(rgb[2], 16);
    color.b = parseInt(rgb[3], 16);
    return `rgb(${color.r},${color.g},${color.b})`;
  }

  /**
   * hex颜色转rgba
   * @param {String} hex hex颜色字符串
   * @param {Number} opacity 透明度
   * @returns {String} 返回生成的rgba颜色
   */
  function hexToRgba(hex, opacity = 1) {
    let color = {};
    let rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    let hexStr = hex.replace(rgx, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexStr);
    color.r = parseInt(rgb[1], 16);
    color.g = parseInt(rgb[2], 16);
    color.b = parseInt(rgb[3], 16);
    color.o = opacity;
    return `rgba(${color.r},${color.g},${color.b},${color.o})`;
  }

  /**
   * hex颜色转hsl
   * @param {String} hex hex颜色字符串
   * @returns {String} 返回生成的hsl颜色
   */
  function hexToHsl(hex) {
    // 先解析为rgb
    let rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    let hexStr = hex.replace(rgx, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });
    let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexStr);

    // 再组装为hsl格式
    let r = parseInt(rgb[1], 16) / 255;
    let g = parseInt(rgb[2], 16) / 255;
    let b = parseInt(rgb[3], 16) / 255;
    let max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return `hsl(${Math.round(h * 360)},${Math.round(s * 100)}%,${Math.round(
    l * 100
  )}%)`;
  }

  /**
   * 随机生成hex颜色
   * @returns {String} 返回生成的十六进制颜色
   */
  function getRandomHex() {
    return (
      "#" +
      (function (h) {
        return new Array(7 - h.length).join("0") + h;
      })(((Math.random() * 0x1000000) << 0).toString(16))
    );
  }

  /**
   * 随机生成rgb颜色
   * @returns {String} 返回生成的 rgb 颜色
   */
  function getRandomRgb() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  /**
   * 随机生成rgba颜色
   * @returns {String} 返回生成的 rgba 颜色
   */
  function getRandomRgba() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = Number(Math.random() * 1).toFixed(2);
    return `rgba(${r},${g},${b},${a})`;
  }

  // 内部函数
  /**
   * 颜色值转换
   * @param {Number} num 转换的值
   * @returns
   */
  function _hex(num) {
    if (num > 255) {
      throw "'" + num + "'' is greater than 255(0xff);";
    }
    let str = Number(num).toString(16);
    return ("0" + str).slice(-2);
  }

  var colorUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    rgbToHex: rgbToHex,
    rgbaToHex: rgbaToHex,
    rgbaToHsl: rgbaToHsl,
    hexToRgb: hexToRgb,
    hexToRgba: hexToRgba,
    hexToHsl: hexToHsl,
    getRandomHex: getRandomHex,
    getRandomRgb: getRandomRgb,
    getRandomRgba: getRandomRgba
  });

  var keyCodeMap = {
    // 字符键
    8: "Backspace",
    9: "Tab",
    13: "Enter",
    16: "Shift",
    17: "Ctrl",
    18: "Alt",
    19: "Pause",
    20: "Caps Lock",
    27: "Escape",
    32: "Space",
    33: "Page Up",
    34: "Page Down",
    35: "End",
    36: "Home",
    37: "Left",
    38: "Up",
    39: "Right",
    40: "Down",
    42: "Print Screen",
    45: "Insert",
    46: "Delete",
    // 数字键
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    // 字母键
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    // window
    91: "Windows",
    93: "Right Click",
    // Numpad
    96: "Numpad 0",
    97: "Numpad 1",
    98: "Numpad 2",
    99: "Numpad 3",
    100: "Numpad 4",
    101: "Numpad 5",
    102: "Numpad 6",
    103: "Numpad 7",
    104: "Numpad 8",
    105: "Numpad 9",
    106: "Numpad *",
    107: "Numpad +",
    109: "Numpad -",
    110: "Numpad .",
    111: "Numpad /",
    // F功能键
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    // 特殊符号
    144: "Num Lock",
    145: "Scroll Lock",
    182: "My Computer",
    183: "My Calculator",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
  };

  /**
   * 根据keycode获得键名
   * @param  {Number} keycode 键值
   * @returns {String} 返回键名
   */
  function getKeyName(keycode) {
    if (keyCodeMap[keycode]) {
      return keyCodeMap[keycode];
    } else {
      console.log("Unknow Key Code: " + keycode);
      return "";
    }
  }

  /**
   * 根据keyname获得键值
   * @param  {Number} keyname
   * @returns {Number} 返回键值
   */
  function getKeyCode(keyname) {
    for (let key in keyCodeMap) {
      if (keyCodeMap[key] == keyname) {
        return key;
      }
    }
  }

  var keyCodeUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getKeyName: getKeyName,
    getKeyCode: getKeyCode
  });

  /**
   * 从url地址中获取查询参数
   * @param {String} name 参数名
   * @param {String} url url地址，默认当前url地址
   * @returns {String} 返回查询到的值
   */
  function getQueryString(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    url = url.split("?")[1];
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = url.substring(0).match(reg);
    if (r != null) return decodeURI(r[2]);
    return "";
  }

  /**
   * url查询参数转为对象
   * @param {String} url url地址，默认当前url地址
   * @returns {Object} 返回参数对象
   */
  function queryStringToObj(url = window.location.href) {
    if (url.indexOf("?") === -1) {
      return {};
    }
    let search =
      url[0] === "?" ? url.substr(1) : url.substring(url.lastIndexOf("?") + 1);
    search = search.split("&");
    let obj = {};
    for (let i = 0; i < search.length; i++) {
      let pair = search[i].split("=");
      obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return obj;
  }

  /**
   * 对象转url查询参数
   *  @param {Object} obj 参数对象
   *  @returns {String} 返回如 id=1&name=xx 格式的url查询参数
   */
  function objToQueryString(obj) {
    if (!obj) return "";
    let pairs = [];
    for (let key in obj) {
      let value = obj[key];
      if (value instanceof Array) {
        for (let i = 0; i < value.length; ++i) {
          pairs.push(
            encodeURIComponent(key + "[" + i + "]") +
              "=" +
              encodeURIComponent(value[i])
          );
        }
        continue;
      }
      pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
    return pairs.join("&");
  }

  var urlUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getQueryString: getQueryString,
    queryStringToObj: queryStringToObj,
    objToQueryString: objToQueryString
  });

  /**
   * 浏览器是否支持 Cookie
   * @returns {Boolean} 返回true和false
   */
  function isSupportCookie() {
    return window.navigator.cookieEnabled;
  }

  /* cookie存储 */
  /**
   * 通过name获取cookie
   * @param {String} name 参数name
   * @returns {String} 返回获取的值
   */
  function getCookie(name) {
    if (typeof document == "undefined") return;
    // cookie中每个分号后面是有个空格的，需要替换掉
    let arr = document.cookie
      ? document.cookie.replace(/\s/g, "").split(";")
      : [];
    for (let i in arr) {
      let tempArr = arr[i].split("=");
      if (tempArr[0] == name) {
        return decodeURIComponent(tempArr[1]);
      }
    }
    return "";
  }

  /**
   * 通过name设置cookie
   * 注：timestamp参数不填，则默认为session级别，浏览器关闭即cookie过期
   * @param {String} name 参数name
   * @param {String} value 设置的value
   * @param {Timestamp} timestamp 过期的时间戳值，默认为一天，设置一天过期则为：24*60*60*1000
   */
  function setCookie(name, value, timestamp = 24 * 60 * 60 * 1000) {
    if (typeof document == "undefined") return;
    document.cookie =
      name + "=" + value + ";expires=" + new Date(Date.now() + timestamp);
  }

  /**
   * 通过name删除cookie
   * @param {String} name 参数name
   */
  function removeCookie(name) {
    if (isEmpty(name)) return;
    setCookie(name, "", -1);
  }

  /**
   * 清空当前站点域名的cookie
   * @param {String} domain 域名地址，默认是当前站点域名
   */
  function clearCookie(domain = document.domain) {
    let names = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (names) {
      for (let i = names.length; i--; ) {
        document.cookie =
          names[i] + "=0;path=/;" + domain
            ? "domain=" + domain + ";"
            : "" + "expires=" + new Date(0).toUTCString();
      }
    }
  }

  var cookieUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isSupportCookie: isSupportCookie,
    getCookie: getCookie,
    setCookie: setCookie,
    removeCookie: removeCookie,
    clearCookie: clearCookie
  });

  /* localStorage存储 */
  /**
   * 通过key从localStorage缓存中获取数据
   * @param {String} key key值
   * @returns {String} 返回数据
   */
  function getLocalStorage(key) {
    return window.localStorage.getItem(key) || undefined;
  }

  /**
   * 设置localStorage缓存数据
   * @param {String} key key值
   * @param {String} value value值
   */
  function setLocalStorage(key, value) {
    window.localStorage.setItem(key, value);
  }

  /**
   * 通过key从localStorage缓存中删除数据
   * @param {String} key key值
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

  /* sessionStorage存储 */
  /**
   * 通过key从sessionStorage缓存中获取数据
   * @param {String} key key值
   * @returns {String} 返回数据
   */
  function getSessionStorage(key) {
    return window.sessionStorage.getItem(key) || "";
  }

  /**
   * 设置sessionStorage缓存数据
   * @param {String} key key值
   * @param {String} value value值
   */
  function setSessionStorage(key, value) {
    window.sessionStorage.setItem(key, value);
  }

  /**
   * 通过key从sessionStorage缓存中删除数据
   * @param {String} key key值
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

  /**
   * 浏览器是否支持 Storage
   * @returns {Boolean} 返回true和false
   */
  function isSupportStorage() {
    if (window.localStorage && window.sessionStorage) {
      return true;
    } else {
      return false;
    }
  }

  var storageUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isSupportStorage: isSupportStorage,
    getLocalStorage: getLocalStorage,
    setLocalStorage: setLocalStorage,
    removeLocalStorage: removeLocalStorage,
    clearLocalStorage: clearLocalStorage,
    getSessionStorage: getSessionStorage,
    setSessionStorage: setSessionStorage,
    removeSessionStorage: removeSessionStorage,
    clearSessionStorage: clearSessionStorage
  });

  /* Class操作 */
  /**
   * 判断元素包含某个类名
   * @param {Element} elem 元素
   * @param {String} className 类名
   * @return {Boolean} 返回true和false
   */
  function hasClass(elem, className) {
    return elem.className.indexOf(className) > 0;
  }

  /**
   * 元素添加类名
   * @param {Element} elem 元素
   * @param {String} className 类名
   */
  function addClass(elem, className) {
    if (!hasClass(elem, className)) elem.className += " " + className;
  }

  /**
   * 元素删除类名
   * @param {Element} elem 元素
   * @param {String} className 类名
   */
  function removeClass(elem, className) {
    if (hasClass(elem, className))
      elem.className = elem.className.replace(new RegExp(className, "gm"), "");
  }

  /**
   * 元素替换类名
   * @param {Element} elem 元素
   * @param {String} newClassName 新的类名
   * @param {String} oldClassName 被替换掉的旧类名
   */
  function replaceClass(elem, newClassName, oldClassName) {
    removeClass(elem, oldClassName);
    addClass(elem, newClassName);
  }

  /* Style操作 */
  /**
   * 添加元素的style样式
   * @param {Element} elem 元素
   * @param {Object} styles 样式属性集合
   */
  function addStyle(elem, styles = {}) {
    if (!elem) return;
    for (let key in styles) {
      elem.style[key] = styles[key];
    }
  }

  /**
   * 获取元素的style样式
   * @param {Element} elem 元素
   * @param {String} name 属性
   * @returns {String} 返回样式的值
   */
  function getStyle(elem, name) {
    if (!elem) return;
    return elem.style[name];
  }

  /**
   * 删除元素的style样式
   * @param {Element} elem 元素
   * @param {String} name 属性
   */
  function removeStyle(elem, name) {
    if (!elem) return;
    elem.style.removeProperty(name);
  }

  /* Html转码 */
  /**
   * html标签转义
   * @param {String} htmlStr html字符串
   * @returns {String} 返回转义后的字符串
   */
  function htmlEncode(htmlStr) {
    const temp = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "(": "&#40;",
      ")": "&#41;",
      "/": "&#47;",
      " ": "&nbsp;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return htmlStr.replace(/[<>&|()\/ '"]/g, function (c) {
      return temp[c];
    });
  }

  /**
   * html标签解码
   * @param {String} htmlStr html字符串
   * @returns {String} 返回解析后的字符串
   */
  function htmlDecode(htmlStr) {
    const temp = {
      "&lt;": "<",
      "&gt;": ">",
      "&amp;": "&",
      "&#40;": "(",
      "&#41;": ")",
      "&#47;": "/",
      "&nbsp;": " ",
      "&quot;": '"',
      "&#39;": "'",
    };
    return htmlStr.replace(
      /(&lt;|&gt;|&amp;|&#40;|&#41;|&#47;|&nbsp;|&quot;|&#39;)/gi,
      function (all, t) {
        return temp[t];
      }
    );
  }

  /* 复制剪切板 */
  /**
   * 复制文本到剪贴板
   * @param {String} text 文本
   * @description 仅支持谷歌等新浏览器
   * @returns {Promise} 返回Promise的复制成功和失败
   */
  function copyText(text) {
    // 谷歌等新版本浏览器
    return new Promise((resolve, reject) => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          resolve(text);
        })
        .catch((error) => {
          console.error("copy error!");
          reject(error);
        });
    });
  }

  /**
   * 从剪贴板获取文本
   * @description 仅支持谷歌等新浏览器
   * @returns {Promise} 返回Promise的剪切板内容
   */
  function getCopyText() {
    return new Promise((resolve, reject) => {
      navigator.clipboard
        .readText()
        .then((text) => {
          resolve(text);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  var domUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    replaceClass: replaceClass,
    addStyle: addStyle,
    getStyle: getStyle,
    removeStyle: removeStyle,
    htmlEncode: htmlEncode,
    htmlDecode: htmlDecode,
    copyText: copyText,
    getCopyText: getCopyText
  });

  /* 浏览器信息 */
  /**
   * 获取浏览器信息
   * @description 会获取到浏览器对应的名称以及版本
   * @returns {Object} 返回浏览器信息
   */
  function getBrowserInfo() {
    let ua = window.navigator.userAgent.toLowerCase();

    // ie
    let ie = ua.match(/rv:([\d.]+)\) like gecko/) || ua.match(/msie ([\d\.]+)/);
    // edge
    let edge = ua.match(/edg\/([\d\.]+)/);
    // firefox
    let firefox = ua.match(/firefox\/([\d\.]+)/);
    // opera
    let opera = ua.match(/(?:opera|opr).([\d\.]+)/);
    // chrome
    let chrome = ua.match(/chrome\/([\d\.]+)/);
    // safari
    let safari = ua.match(/version\/([\d\.]+).*safari/);

    // 判断类型
    if (ie) return { name: "ie", version: ie[1] };
    if (edge) return { name: "edge", version: edge[1] };
    if (firefox) return { name: "firefox", version: firefox[1] };
    if (opera) return { name: "opera", version: opera[1] };
    if (chrome) return { name: "chrome", version: chrome[1] };
    if (safari) return { name: "safari", version: safari[1] };
    return "unknown";
  }

  /* 设备类型 */
  /**
   * 判断是pc端
   * @returns {Boolean} 返回true和false
   */
  function isPc() {
    return !isMobile();
  }

  /**
   * 判断是手机端
   * @description 包含 android、iphone、黑莓手机、微软手机 等多种操作系统机型
   * @returns {Boolean} 返回true和false
   */
  function isMobile() {
    let ua = window.navigator.userAgent;
    return /Android|webOS|iPhone|iPod|BlackBerry|Windows Phone|IEMobile/i.test(
      ua
    );
  }

  /* 操作系统类型 */
  /**
   * 判断是 android
   * @returns {Boolean} 返回true和false
   */
  function isAndroid() {
    let ua = window.navigator.userAgent;
    return /Android|BlackBerry/i.test(ua);
  }

  /**
   * 判断是 ios
   * @returns {Boolean} 返回true和false
   */
  function isIos() {
    let ua = window.navigator.userAgent;
    return /iPhone|iPad|iPod|iOS/i.test(ua);
  }

  /**
   * 判断是 windows phone
   * @returns {Boolean} 返回true和false
   */
  function isWindowsPhone() {
    let ua = window.navigator.userAgent;
    return /Windows Phone/i.test(ua);
  }

  /**
   * 判断是 windows
   * @returns {Boolean} 返回true和false
   */
  function isWindows() {
    let ua = window.navigator.userAgent;
    return /win/i.test(ua);
  }

  /**
   * 判断是 linux
   * @returns {Boolean} 返回true和false
   */
  function isLinux() {
    let ua = window.navigator.userAgent;
    return /linux/i.test(ua);
  }

  /**
   * 判断是 Mac
   * @returns {Boolean} 返回true和false
   */
  function isMac() {
    let ua = window.navigator.userAgent;
    return /mac/i.test(ua);
  }

  /* 苹果设备类型 */
  /**
   * 判断是iphone
   *@returns {Boolean} 返回true和false
   */
  function isIphone() {
    let ua = window.navigator.userAgent;
    return /iPhone/i.test(ua);
  }

  /**
   * 判断是ipad
   *@return {Boolean} 返回true和false
   */
  function isIpad() {
    let ua = window.navigator.userAgent;
    return /iPod/i.test(ua);
  }

  /* 手机浏览器类型 */
  /**
   * 判断是微信内置浏览器
   * @returns {Boolean} 返回true和false
   */
  function isWeixin() {
    let ua = window.navigator.userAgent;
    return /MicroMessenger/i.test(ua);
  }

  /**
   * 判断是QQ内置浏览器
   * @returns {Boolean} 返回true和false
   */
  function isQQ() {
    let ua = window.navigator.userAgent;
    return /QQ/i.test(ua);
  }

  var deviceUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getBrowserInfo: getBrowserInfo,
    isPc: isPc,
    isMobile: isMobile,
    isAndroid: isAndroid,
    isIos: isIos,
    isWindowsPhone: isWindowsPhone,
    isWindows: isWindows,
    isLinux: isLinux,
    isMac: isMac,
    isIphone: isIphone,
    isIpad: isIpad,
    isWeixin: isWeixin,
    isQQ: isQQ
  });

  /* 缓存处理（同步） */
  /**
   * 设置缓存
   * @param {String} key key值
   * @param {*} data data数据
   */
  function setStorageSync(key, data) {
    wx.setStorageSync(key, data);
  }

  /**
   * 获得缓存数据
   * @param {String} key key值
   * @returns {*} 返回获取的值
   */
  function getStorageSync(key) {
    return wx.getStorageSync(key);
  }

  /**
   * 获得缓存信息
   * @returns {Object} 返回缓存信息
   */
  function getStorageInfoSync() {
    return wx.getStorageInfoSync();
  }

  /**
   * 删除缓存数据
   * @param {String} key key值
   */
  function removeStorageSync(key) {
    wx.removeStorageSync(key);
  }

  /**
   * 清空所有缓存数据
   */
  function clearStorageSync() {
    wx.clearStorageSync();
  }

  /* 缓存处理（异步） */
  /**
   * 设置缓存
   * @param {String} key key值
   * @param {*} data data数据
   * @param {Boolean} encrypt 是否开启加密存储
   * @returns {Promise} 返回Promise
   */
  function setStorage({ key, data, encrypt = false }) {
    return new Promise((resolve, reject) => {
      wx.setStorage({
        key,
        data,
        encrypt,
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err);
        },
      });
    });
  }

  /**
   * 获得缓存数据
   * @param {String} key key值
   * @param {Boolean} encrypt 是否开启加密存储
   * @returns {Promise} 返回Promise
   */
  function getStorage({ key, encrypt = false }) {
    return new Promise((resolve, reject) => {
      wx.getStorage({
        key,
        encrypt,
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err);
        },
      });
    });
  }

  /**
   * 获得缓存信息
   * @returns {Object} 返回Promise
   */
  function getStorageInfo() {
    return new Promise((resolve, reject) => {
      wx.getStorageInfo({
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err);
        },
      });
    });
  }

  /**
   * 删除缓存数据
   * @param {String} key key值
   * @returns {Promise} 返回Promise
   */
  function removeStorage({ key }) {
    return new Promise((resolve, reject) => {
      wx.removeStorage({
        key,
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err);
        },
      });
    });
  }

  /**
   * 清空所有缓存数据
   * @returns {Promise} 返回Promise
   */
  function clearStorage() {
    return new Promise((resolve, reject) => {
      wx.clearStorage({
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err);
        },
      });
    });
  }

  var weappUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    setStorageSync: setStorageSync,
    getStorageSync: getStorageSync,
    getStorageInfoSync: getStorageInfoSync,
    removeStorageSync: removeStorageSync,
    clearStorageSync: clearStorageSync,
    setStorage: setStorage,
    getStorage: getStorage,
    getStorageInfo: getStorageInfo,
    removeStorage: removeStorage,
    clearStorage: clearStorage
  });

  // 测试加载成功方法
  const loadedTest = function () {
    console.log("lime-core loaded successfully!");
  };

  // 导出
  var index = {
    loadedTest,
    // 常量集合
    ...constants,

    // 字符串
    ...stringUtil,
    // 数字
    ...numberUtil,
    // 数组
    ...arrayUtil,
    // 对象
    ...objectUtil,
    // 函数
    ...functionUtil,

    // 正则
    ...regexpUtil,

    // 数学
    ...mathUtil,

    // 随机数
    ...randomUtil,

    // 文件
    ...fileUtil,

    // 颜色
    ...colorUtil,

    // 校验
    ...validateUtil,

    // 键盘 Keycode
    ...keyCodeUtil,

    // 浏览器 Url
    ...urlUtil,
    // 浏览器 Cookie
    ...cookieUtil,
    // 浏览器 Storage
    ...storageUtil,
    // 浏览器 Dom
    ...domUtil,
    // 浏览器 Device
    ...deviceUtil,

    // 微信小程序
    ...weappUtil,
  };

  return index;

}));
