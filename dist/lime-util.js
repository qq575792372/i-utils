/*!
* lime-util v0.0.2
*
* Copyright 2021-2021, Gaoshiwei <575792372@qq.com>
* Licensed under the MIT license
* http://www.opensource.org/licenses/mit-license
*
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LimeUtil = factory());
})(this, (function () { 'use strict';

  /**
   * 数组排序
   */
  const SORT_MODE = {
    // 降序
    SORT_DESC: 0,
    // 升序
    SORT_ASC: 1,
    // 随机排序
    SORT_RANDOM: 2,
  };

  /**
   * 数学计算
   */
  const MATH_MODE = {
    // 正常四舍五入，如：1.354保留两位是1.35；1.355保留两位是1.36；
    ROUND: 0,
    // 向下舍出，如：1.354保留两位是1.35；1.355保留两位是1.35；
    ROUND_FLOOR: 1,
  };

  // 导出
  var constant = {
    ...SORT_MODE,
    ...MATH_MODE,
  };

  // 字符串去空格
  /**
   * 去除字符串两边空格
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
   * 替换字符串中所有指定的字符为新的字符串
   * @param {String} value 参数
   * @param {String} oldSubstr 需要替换的字符串
   * @param {String} newSubstr 替换后的字符串
   * @returns {String} 返回处理后的字符串
   */
  function replaceAll(value, oldSubstr, newSubstr) {
    return value.replace(new RegExp(oldSubstr, "gm"), newSubstr);
  }

  /**
   * 字符串中是否包含指定的元素
   * @param {String} value 包含的元素
   * @param {String} str 查找的字符串
   * @returns {Boolean} 返回true和false
   */
  function isInString(value, str) {
    return str.includes(value);
  }

  /**
   * 获得元素在字符串中首次出现的位置
   * @param {String} value 元素
   * @param {String} str 查找的字符串
   * @returns {Number} 返回查找到的位置下标
   */
  function getIndexInString(value, str) {
    return str.indexOf(value);
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
   * @param {Number|String} num 数字
   * @returns {String} 返回格式化后的千分位数字
   */
  function formatThousand(num) {
    num = String(num);
    let regex = num.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return num.replace(regex, "$1,");
  }

  /**
   * 格式化人民币金额大写
   * @param {Number|String} money 金额
   * @returns {String} 返回金额大写
   */
  function formatAmountChinese(money) {
    //汉字的数字
    let cnNums = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖");
    //基本单位
    let cnIntRadice = new Array("", "拾", "佰", "仟");
    //对应整数部分扩展单位
    let cnIntUnits = new Array("", "万", "亿", "兆");
    //对应小数部分单位
    let cnDecUnits = new Array("角", "分", "毫", "厘");
    //整数金额时后面跟的字符
    let cnInteger = "整";
    //整型完以后的单位
    let cnIntLast = "元";
    //最大处理的数字
    let maxNum = 999999999999999.9999;
    //金额整数部分
    let integerNum;
    //金额小数部分
    let decimalNum;
    //输出的中文金额字符串
    let chineseStr = "";
    //分离金额后用的数组，预定义
    let parts;
    if (money === "") {
      //不能用==
      return "";
    }
    money = parseFloat(money);
    if (money >= maxNum) {
      //超出最大处理数字，抛出异常
      throw new Error("Calculated number overflow!");
    }
    if (money == 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger;
      return chineseStr;
    }
    //转换为字符串
    money = money.toString();
    if (money.indexOf(".") == -1) {
      integerNum = money;
      decimalNum = "";
    } else {
      parts = money.split(".");
      integerNum = parts[0];
      decimalNum = parts[1].substr(0, 4);
    }
    //获取整型部分转换
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
          //归零
          zeroCount = 0;
          chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
        }
        if (m == 0 && zeroCount < 4) {
          chineseStr += cnIntUnits[q];
        }
      }
      chineseStr += cnIntLast;
    }
    //小数部分
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

  var stringUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    trim: trim,
    trimStart: trimStart,
    trimEnd: trimEnd,
    trimAll: trimAll,
    replaceAll: replaceAll,
    isInString: isInString,
    getIndexInString: getIndexInString,
    zeroStart: zeroStart,
    zeroEnd: zeroEnd,
    formatThousand: formatThousand,
    formatAmountChinese: formatAmountChinese
  });

  /**
   * 转为数字类型
   * @description 解决部分浏览器在转换 '08','09'等是0开头时被默认转8进制问题
   * @param {String} value 转换的值
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

  // 数据类型
  /**
   * 判断是非数字
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isNaN(value) {
    return window.isNaN(value) || (!value && value !== 0);
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
   * 判断类型是 Promise
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isPromise(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Promise";
  }

  /**
   * 判断字符串是否全是中文
   * @param {String} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isChinese(value) {
    return /^[\u4E00-\u9FA5]+$/.test(value);
  }

  // 数据值校验
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
   * 判断是否值空的
   * @description 除了对null，undefined等校验，还会校验空格
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
    return value === undefined;
  }

  // 比较
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
    isPromise: isPromise,
    isChinese: isChinese,
    isEmpty: isEmpty,
    isNull: isNull,
    isBlank: isBlank,
    isUndefined: isUndefined,
    equals: equals,
    equalsIgnoreCase: equalsIgnoreCase
  });

  /**
   * 数组中是否包含指定的元素
   * @param {String|Number} value 元素
   * @param {Array} array 查找的数组
   * @returns {Boolean} 返回true和false
   */
  function isInArray(value, array) {
    if (isNull(value)) return;
    return array.includes(value);
  }

  /**
   * 获得元素在数组中首次出现的位置
   * @param {String|Number} value 元素
   * @param {Array} array 查找的数组
   * @returns {Number} 返回查找到的位置下标
   */
  function getIndexInArray(value, array) {
    if (isNull(value)) return;
    return array.indexOf(value);
  }

  /**
   * 数组最小值
   * @param {Array} array 数组
   * @returns {Number} 返回数组中最小的值
   */
  function arrayMin(array) {
    return Math.min.apply(null, array);
  }

  /**
   * 数组最大值
   * @param {Array} array 数组
   * @returns {Number} 返回数组中最大的值
   */
  function arrayMax(array) {
    return Math.max.apply(null, array);
  }

  /**
   * 数组求和
   * @param {Array} array 数组
   * @returns {Number} 返回数组元素的总和
   */
  function arraySum(array) {
    return array.reduce(function (pre, cur) {
      return pre + cur;
    });
  }

  /**
   * 数组求平均值
   * @param {Array} array 数组
   * @returns {Number} 返回数组平均值
   */
  function arrayAvg(array) {
    return arraySum(array) / array.length;
  }

  /**
   * 数组求并集
   * @param {Array} array1 数组1
   * @param {Array} array2 数组2
   * @returns {Number} 返回数组并集
   */
  function arrayUnion(array1, array2) {
    return [...new Set(array1.concat(array2))];
  }

  /**
   * 数组求交集
   * @param {Array} array1 数组1
   * @param {Array} array2 数组2
   * @returns {Number} 返回数组交集
   */
  function arrayIntersect(array1, array2) {
    return [...new Set(array1)].filter((item) => array2.includes(item));
  }

  /**
   * 比较两个数组是否相等
   * @param {Array} array1 数组1
   * @param {Array} array2 数组2
   * @returns {Boolean} 返回true和false
   */
  function arrayEquals(array1, array2) {
    if (array1 === array2) return true;
    if (array1.length != array2.length) return false;
    for (let i = 0; i < array1.length; ++i) {
      if (array1[i] !== array2[i]) return false;
    }
    return true;
  }

  /**
   * 数组元素去重
   * @param {Array} array 数组
   * @returns {Array} 返回去重后的数组
   */
  function arrayUnique(array) {
    if (isNull(value)) return;
    return Array.from(new Set(array));
  }

  /**
   * 数组打乱元素
   * @description 可以适用于一些抽奖人员列表打乱顺序
   * @param {Array} array 数组
   * @returns {Array} 返回打乱之后新的数组
   */
  function arrayShuffle(array) {
    for (let i = 1; i < array.length; i++) {
      const random = Math.floor(Math.random() * (i + 1));
      [array[random], array[i]] = [array[i], array[random]];
    }
    return array;
  }

  /**
   * 数组排序
   * @param {Array} array 数组
   * @param {Constant} mode 排序模式，参考常量集合中 数组常量，默认是升序
   * @returns {Array} 返回排序后的新数组
   */
  function arraySort(array, mode = SORT_MODE.SORT_ASC) {
    return array.sort((a, b) => {
      switch (mode) {
        // 升序
        case SORT_MODE.SORT_ASC:
          return a - b;
        // 降序
        case SORT_MODE.SORT_DESC:
          return b - a;
        // 随机
        case SORT_MODE.SORT_RANDOM:
          return Math.random() - 0.5;
        // 默认
        default:
          return array;
      }
    });
  }

  /**
   * 数组交换位置
   * @param {Array} array 数组
   * @param {Number} sourceIndex 原索引
   * @param {Number} targetIndex 目标索引
   * @returns {Array} 返回交换索引后的新数组
   */
  function arraySwapIndex(array, sourceIndex, targetIndex) {
    const target = [...array];
    [target[targetIndex], target[sourceIndex]] = [array[sourceIndex], array[targetIndex]];
    return target;
  }

  /**
   * 一维父子级的数组转树形结构
   * @description 包含id和pid属性关系的一维数组，转为children的树形结构
   * @param {Array} array 数组
   * @param {String|Number} pid 父级的id
   * @returns {Array} 返回树形结构数组
   */
  function arrayToTree(array, pid) {
    let res = [];
    array.forEach((v) => {
      if (v.pid == pid) {
        v.children = toTree(array, v.id);
        res.push(v);
      }
    });
    return res;
  }

  var arrayUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isInArray: isInArray,
    getIndexInArray: getIndexInArray,
    arrayMin: arrayMin,
    arrayMax: arrayMax,
    arraySum: arraySum,
    arrayAvg: arrayAvg,
    arrayUnion: arrayUnion,
    arrayIntersect: arrayIntersect,
    arrayEquals: arrayEquals,
    arrayUnique: arrayUnique,
    arrayShuffle: arrayShuffle,
    arraySort: arraySort,
    arraySwapIndex: arraySwapIndex,
    arrayToTree: arrayToTree
  });

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
    return JSON.stringify(this.mapToObject(map));
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
    return objectToMap(JSON.parse(json));
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

  /**
   * 深拷贝数据
   * @description 目前只支持 Object，Array，Date三种数据类型
   * @param {Object|Array|Date} source 需要克隆的数据
   * @returns {Object|Array|Date} 返回深度克隆后的数据
   */
  function deepClone(source) {
    if (isNull(source)) return null;

    //  Object
    if (source instanceof Object) {
      let copy = {};
      for (let attr in source) {
        if (source.hasOwnProperty(attr)) copy[attr] = deepClone(source[attr]);
      }
      return copy;
    }

    //  Array
    else if (source instanceof Array) {
      let copy = [];
      for (let i = 0, len = source.length; i < len; i++) {
        copy[i] = deepClone(source[i]);
      }
      return copy;
    }

    //  Date
    else if (source instanceof Date) {
      let copy = new Date();
      copy.setTime(source.getTime());
      return copy;
    }

    // Other
    else {
      return source;
    }
  }

  /**
   * 合并对象
   * @param {Object} target 目标对象
   * @param {Object[]} source 原对象列表
   * @returns {Object} 返回合并后的对象
   */
  function mergeObj(target, ...source) {
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
    deepClone: deepClone,
    mergeObj: mergeObj
  });

  /**
   * 节流函数
   * @description 高频触发时，在指定时间间隔内只执行一次
   * @param {Function} fn 目标函数
   * @param {Number} interval 时间间隔，单位毫秒，默认2秒
   * @returns {Function} 返回function()
   */
  function throttle(fn, interval = 2000) {
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
   * @param {Number} delay 延迟时间，单位毫秒，默认2秒
   * @param {Boolean} immediate 是否立即执行，true和false，默认true
   * @returns {Function} 返回function()
   */
  function debounce(fn, delay = 2000, immediate = true) {
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

  var functionUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    throttle: throttle,
    debounce: debounce
  });

  /**
   * 判断是否是今天
   * @param {String|Date} date 传参日期，可以是yyyy-MM-dd格式，也可以是Date对象
   * @returns {Boolean} 返回true和false
   */
  function isToday(date) {
    if (isNull(date)) return;
    // 当前日期
    let curDate = getCurrentDate();
    // 指定日期
    let tarData = new Date(date.includes("-") ? date.replace(/-/g, "/") : date);
    return ["getFullYear", "getMonth", "getDate"].every((i) => curDate[i]() === tarData[i]());
  }

  /**
   * 判断是否是闰年
   * @param {Number} year 年份
   * @returns {Boolean} 返回true和false
   */
  function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
  }

  /**
   * 获得当前日期
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Date} 返回日期
   */
  function getCurrentDate(date = new Date()) {
    return date;
  }

  /**
   * 获得日期字符串
   * @param {Date} date 日期参数，默认当前日期
   * @param {String} separator 分隔符，默认“-”分隔
   * @returns {String} 返回yyyy-MM-dd格式
   */
  function getDate(date = new Date(), separator = "-") {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return [year, month, day].map(_digit).join(separator);
  }

  /**
   * 获得时间字符串
   * @param {Date} date 日期参数，默认当前日期
   * @param {String} separator 分隔符，默认“-”
   * @returns {String} 返回yyyy-MM-dd HH:mm:ss格式
   */
  function getDateTime(date = new Date(), separator = "-") {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return [year, month, day].map(_digit).join(separator) + " " + [hour, minute, second].map(_digit).join(":");
  }

  /**
   * 获取时间戳
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Timestamp} 返回时间戳
   */
  function getTimestamp(date = new Date()) {
    return date.getTime();
  }

  /**
   * 获取Unix时间戳
   * @param {Date} date 日期参数，默认当前日期
   * @returns {UnixTimestamp} 返回Unix时间戳
   */
  function getUnixTimestamp(date = new Date()) {
    return Math.round(date / 1000);
  }

  /**
   * 时间戳转日期
   * @param {Timestamp} timestamp 时间戳
   * @returns {Date} 返回日期
   */
  function timestampToDate(timestamp) {
    if (isEmpty(timestamp)) return;
    return new Date(timestamp);
  }

  /**
   * Unix时间戳转日期
   * @param {UnixTimestamp} unixTimestamp Unix时间戳
   * @returns {Date} 返回日期
   */
  function unixTimestampToDate(unixTimestamp) {
    if (isEmpty(unixTimestamp)) return;
    return new Date(unixTimestamp * 1000);
  }

  /**
   * 获得当前日期是周几
   * @param {Date} date 日期参数，默认当前日期
   * @param {String} lang 周字符串语言，zh：周一，周二等；en：1,2等
   * @returns {String|Number} 返回对应的zh或者en语言的周数
   */
  function getWeekDay(date = new Date(), lang = "zh") {
    if (isEmpty(date)) return;
    let day = "";
    if (lang == "zh") {
      day = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六")[date.getDay()];
    } else {
      day = new Array(7, 1, 2, 3, 4, 5, 6)[date.getDay()];
    }
    return day;
  }

  /**
   * 获得某年某月的天数
   * @param {Number} year 年
   * @param {Number} month 月
   * @returns {Number} 返回对应年月的天数
   */
  function getYearMonthDayNum(year, month) {
    if (isEmpty(year) || isEmpty(month)) return;
    month = this.parseInt(month);
    return new Date(year, month, 0).getDate();
  }

  /**
   * 获得某年某月的天数数组
   * @param {Number} year 年
   * @param {Number} month 月
   * @returns 返回对应年月的天数数组
   */
  function getYearMonthDayArray(year, month) {
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
   * 日期字符串转数组
   * @param {String} dateStr 日期字符串，格式支持：yyyy-MM-dd，yyyy/MM/dd
   * @returns {Array} 返回字符串数组
   */
  function dateStrToArray(dateStr) {
    if (isEmpty(dateStr)) return;
    dateStr = dateStr.replace(/(\-)|(\:)|(\s)|(\/)/g, ",");
    return dateStr.split(",");
  }

  /**
   * 时间字符串转数组
   * @param {String} dateTimeStr 时间字符串，格式支持：yyyy-MM-dd HH:mm:ss，yyyy/MM/dd HH:mm:ss
   * @returns 返回字符串数组
   */
  function dateTimeStrToArray(dateTimeStr) {
    if (isEmpty(dateTimeStr)) return;
    dateTimeStr = dateTimeStr.replace(/(\-)|(\:)|(\s)|(\/)/g, ",");
    return dateTimeStr.split(",");
  }

  /**
   * 获得加减年数后的日期
   * @param {Date} date 日期参数，默认当前日期
   * @param {Number} num 加减数量，用+1和-1来表示
   * @returns {Date} 返回加减年数后的日期
   */
  function getDiffYear(date = new Date(), num = +1) {
    date.setFullYear(date.getFullYear() + num);
    return date;
  }

  /**
   * 获得加减月数后的日期
   * @param {Date} date 日期参数，默认当前日期
   * @param {Number} num 加减数量，用+1和-1来表示
   * @returns {Number} 返回加减月数后的日期
   */
  function getDiffMonth(date = new Date(), num = +1) {
    date.setMonth(date.getMonth() + num);
    return date;
  }

  /**
   * 获得加减天数后的日期
   * @param {Date} date 日期参数，默认当前日期
   * @param {Number} num 加减数量，用+1和-1来表示
   * @returns {Number} 返回加减天数后的日期
   */
  function getDiffDate(date = new Date(), num = +1) {
    date.setDate(date.getDate() + num);
    return date;
  }

  /**
   * 计算两个日期之间相差的天数
   * @param {Date} date1 第一个日期
   * @param {Date} date2 第二个日期
   * @returns {Number} 返回两个日期相差的天数；注：数字大于0表示第二个大于第一个；数字小于0表示第二个小于第一个；
   */
  function getDiffDateNum(date1, date2) {
    if (isEmpty(date1) || isEmpty(date2)) return 0;
    return (date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000);
  }

  /**
   * 计算两个日期字符串之间相差的天数
   * @param {Date} dateStr1 第一个日期字符串
   * @param {Date} dateStr2 第二个日期字符串
   * @returns {Number} 返回两个日期字符串相差的天数；注：数字大于0表示第二个大于第一个；数字小于0表示第二个小于第一个；
   */
  function getDiffDateStrNum(dateStr1, dateStr2) {
    if (isEmpty(dateStr1) || isEmpty(dateStr2)) return 0;
    return (formatStrToDate(dateStr2).getTime() - formatStrToDate(dateStr1).getTime()) / (24 * 60 * 60 * 1000);
  }

  /**
   * 计算两个时间戳之间相差的天数
   * @param {Timestamp} timestamp1 第一个时间戳
   * @param {Timestamp} timestamp2 第二个时间戳
   * @returns 返回两个时间戳相差的天数；注：数字大于0表示第二个大于第一个；数字小于0表示第二个小于第一个；
   */
  function getDiffTimestampNum(timestamp1, timestamp2) {
    if (isEmpty(timestamp1) || isEmpty(timestamp2)) return 0;
    return (timestamp2 - timestamp1) / (1000 * 60 * 60 * 24);
  }

  /**
   * 计算两个Unix时间戳之间相差的天数
   * @param {UnixTimestamp} unixTimestamp1 第一个Unix时间戳
   * @param {UnixTimestamp} unixTimestamp2 第二个Unix时间戳
   * @returns 返回两个Unix时间戳相差的天数；注：数字大于0表示第二个大于第一个；数字小于0表示第二个小于第一个；
   */
  function getDiffUnixTimestampNum(unixTimestamp1, unixTimestamp2) {
    if (isEmpty(unixTimestamp1) || isEmpty(unixTimestamp2)) return 0;
    return (unixTimestamp2 - unixTimestamp1) / (60 * 60 * 24);
  }

  /**
   * 获得两个日期之间的日期字符串数组
   * @param {Date} date1 第一个日期
   * @param {Date} date2 第二个日期
   * @returns {Array} 返回日期字符串数组
   */
  function getDiffDateArray(date1, date2) {
    if (isEmpty(date1) || isEmpty(date2)) return [];
    let diffArray = [];
    while (date2.getTime() - date1.getTime() >= 0) {
      let year = date1.getFullYear();
      let month = _digit(date1.getMonth() + 1);
      let day = _digit(date1.getDate());
      diffArray.push(year + "-" + month + "-" + day);
      date1.setDate(date1.getDate() + 1);
    }
    return diffArray;
  }

  /**
   * 获得两个日期字符串之间的日期字符串数组
   * @param {String} dateStr1 第一个日期字符串
   * @param {String} dateStr2 第二个日期字符串
   * @returns {Array} 返回日期字符串数组
   */
  function getDiffDateStrArray(dateStr1, dateStr2) {
    if (isEmpty(dateStr1) || isEmpty(dateStr2)) return [];
    return getDiffDateArray(formatStrToDate(dateStr1), formatStrToDate(dateStr2));
  }

  /**
   * 日期或日期字符串，格式化为指定的日期字符串格式
   * @param {Date|String} date 日期或日期字符串
   * @param {String} format 转化日期字符串格式，支持格式：yyyy-MM-dd HH:mm:ss，yyyy/MM/dd HH:mm:ss等多种格式
   * @returns {String} 返回格式化后的日期字符串
   */
  function formatDate(date = new Date(), format = "yyyy-MM-dd") {
    // 是日期字符串类型则统一转为Date类型
    if (typeof date == "string") {
      date = formatStrToDate(date);
    }
    // 周配置
    let week = {
      0: "日",
      1: "一",
      2: "二",
      3: "三",
      4: "四",
      5: "五",
      6: "六",
    };
    // 季度配置
    let quarter = {
      1: "一",
      2: "二",
      3: "三",
      4: "四",
    };
    // 日期配置
    let opt = {
      "M+": date.getMonth() + 1, // 月份
      "d+": date.getDate(), // 日
      "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12小时制
      "H+": date.getHours(), // 24小时制
      "m+": date.getMinutes(), // 分钟
      "s+": date.getSeconds(), // 秒
      "E+": week[date.getDay()], // 周
      "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds(), // 毫秒
    };

    // 年
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    // 周
    if (/(E+)/.test(format)) {
      format = format.replace(
        RegExp.$1,
        (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[date.getDay() + ""]
      );
    }
    // 季度
    if (/(q+)/.test(format)) {
      format = format.replace(
        RegExp.$1,
        (RegExp.$1.length > 1 ? "第" : "") + quarter[Math.floor((date.getMonth() + 3) / 3) + ""] + "季度"
      );
    }
    // 日期
    for (let k in opt) {
      if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? opt[k] : ("00" + opt[k]).substr(("" + opt[k]).length));
    }
    return format;
  }

  /**
   * 日期字符串转日期
   * @param {String} dateStr 日期字符串，支持格式：yyyy-MM-dd HH:mm:ss，yyyy/MM/dd HH:mm:ss
   * @returns {Date} 返回日期
   */
  function formatStrToDate(dateStr) {
    if (isEmpty(dateStr)) return;
    return new Date(dateStr.replace(/-/g, "/"));
  }

  /**
   * 格式化已过去时间的字符串
   * @description 显示例如：刚刚，1分钟前，1小时前等
   * @param {Date|String} date 日期或日期字符串
   * @returns {String} 返回已过时间字符串
   */
  function getPassTimeStr(date) {
    if (isNull(date)) return "--";
    // 是字符串日期则转为日期对象
    if (typeof date == "string") {
      date = formatStrToDate(date);
    }
    // 计算时间差
    let startTime = date.getTime();
    let currentTime = Date.now();
    let time = currentTime - startTime;
    let day = parseInt(time / (1000 * 60 * 60 * 24));
    let hour = parseInt(time / (1000 * 60 * 60));
    let min = parseInt(time / (1000 * 60));
    let month = parseInt(day / 30);
    let year = parseInt(month / 12);
    // 判断
    if (year) return year + "年前";
    if (month) return month + "个月前";
    if (day) return day + "天前";
    if (hour) return hour + "小时前";
    if (min) return min + "分钟前";
    else return "刚刚";
  }

  /**
   * 格式化距离当前剩余时间的字符串
   * @description 显示例如：1天10小时20分钟30秒
   * @param {Date|String} date 日期或日期字符串
   * @returns {String} 返回剩余时间的字符串
   */
  function formatOverTimeStr(date) {
    if (isNull(date)) return "--";
    // 是字符串日期则转为日期对象
    if (typeof date == "string") {
      date = formatStrToDate(date);
    }

    // todo
    var startDate = new Date(); //开始时间
    var endDate = date; //结束时间
    var t = endDate.getTime() - startDate.getTime(); //时间差
    var d = 0,
      h = 0,
      m = 0,
      s = 0;
    if (t >= 0) {
      d = Math.floor(t / 1000 / 3600 / 24);
      h = Math.floor((t / 1000 / 60 / 60) % 24);
      m = Math.floor((t / 1000 / 60) % 60);
      s = Math.floor((t / 1000) % 60);
    }
    return `${d}天 ${h}小时 ${m}分钟 ${s}秒`;
  }

  /**
   * 比较两个日期的大小
   * @param {Date} date1 第一个日期
   * @param {Date} date2 第二个日期
   * @returns {Boolean} 返回true和false；返回true表示第一个日期大于第二个日期；返回false表示第一个日期小于第二个日期；
   */
  function compareDate(date1, date2) {
    if (isEmpty(date1) || isEmpty(date2)) return;
    return date1.getTime() > date2.getTime();
  }

  /**
   * 比较两个时间戳的大小
   * @param {Timestamp} timestamp1 第一个时间戳
   * @param {Timestamp} timestamp2 第二个时间戳
   * @returns {Boolean} 返回true和false；返回true表示第一个时间戳大于第二个时间戳；返回false表示第一个时间戳小于第二个时间戳；
   */
  function compareTimestamp(timestamp1, timestamp2) {
    if (isEmpty(timestamp1) || isEmpty(timestamp2)) return;
    return timestamp1 > timestamp2;
  }

  /**
   * 比较两个Unix时间戳的大小
   * @param {UnixTimestamp} unixTimestamp1 第一个Unix时间戳
   * @param {UnixTimestamp} unixTimestamp2 第二个Unix时间戳
   * @returns {Boolean} 返回true和false；返回true表示第一个Unix时间戳大于第二个Unix时间戳；返回false表示第一个Unix时间戳小于第二个Unix时间戳；
   */
  function compareUnixTimestamp(unixTimestamp1, unixTimestamp2) {
    if (isEmpty(unixTimestamp1) || isEmpty(unixTimestamp2)) return;
    return unixTimestamp1 > unixTimestamp2;
  }

  // 内部使用的函数
  /**
   * 数字前补齐零，保持两位
   * @param {String|Number} value 可以是数字和字符串
   * @returns {String} 返回处理后的字符串
   */
  function _digit(value) {
    value = value.toString();
    return value[1] ? value : "0" + value;
  }

  var dateUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isToday: isToday,
    isLeapYear: isLeapYear,
    getCurrentDate: getCurrentDate,
    getDate: getDate,
    getDateTime: getDateTime,
    getTimestamp: getTimestamp,
    getUnixTimestamp: getUnixTimestamp,
    timestampToDate: timestampToDate,
    unixTimestampToDate: unixTimestampToDate,
    getWeekDay: getWeekDay,
    getYearMonthDayNum: getYearMonthDayNum,
    getYearMonthDayArray: getYearMonthDayArray,
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
    formatDate: formatDate,
    formatStrToDate: formatStrToDate,
    getPassTimeStr: getPassTimeStr,
    formatOverTimeStr: formatOverTimeStr,
    compareDate: compareDate,
    compareTimestamp: compareTimestamp,
    compareUnixTimestamp: compareUnixTimestamp
  });

  /**
   * 常用的正则表达式集合
   */
  const REGEXP = {
    // 中文汉字
    CH: /^[\u4E00-\u9FA5]+$/,
    // 英文字母
    EN: /^[a-zA-Z]$/,
    // 中文姓名，2-16位
    CH_NAME: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
    // 英文姓名，0-20位
    EN_NAME: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
    // 数字
    NUMBER: /^(\-|\+)?\d+(\.\d+)?$/,
    // 整数，包含：0，正整数和负整数
    INTEGER: /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/,
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
    // 银行卡号
    BANK_CARD: /^[1-9]\d{9,29}$/,
    // 邮政编码
    POST_CODE: /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,
    // url网址
    URL: /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
    // ip地址
    IP: /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/,
  };

  /**
   * 正则校验的方法
   * @description 类型为枚举REGEXP对应的正则
   * @param {String|Number} value 校验的值
   * @param {REGEXP} regex 使用的REGEXP中的正则
   * @returns {Boolean} 返回校验的结果，true和false
   */
  function regexpTest(value, regex) {
    return new RegExp(REGEXP[regex]).test(value);
  }

  var regexpUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    REGEXP: REGEXP,
    regexpTest: regexpTest
  });

  // 数字精度计算
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

  // 强制保留小数位数
  /**
   * 强制保留小数位数
   * @description 默认保留两位小数，解决原生的toFixed()会五舍六入的问题
   * @param {String|Number} num 数字
   * @param {Number} decimals 保留小数的位数，默认2位
   * @param {Constant} mode 保留小数模式，参考常量集合中 数学计算常量
   * @returns {String} 返回字符串的数字
   */
  function toFixed(num, decimals = 2, mode = MATH_MODE.ROUND) {
    // 四舍五入
    if (mode == MATH_MODE.ROUND) {
      return toFixedRound(num, decimals);
    }
    // 向下舍出
    if (mode == MATH_MODE.ROUND_FLOOR) {
      return toFixedFloor(num, decimals);
    }
  }

  /**
   * 四舍五入，强制保留小数位数
   * @description 默认保留两位小数，此方法解决原生的toFixed()会五舍六入的问题
   * @param {String|Number} num 数字
   * @param {Number} decimals 保留小数的位数，默认2位
   * @example
   * toFixedRound(1) // 输出：1.00
   * toFixedRound(1.0) // 输出：1.00
   * toFixedRound(1.01) // 输出：1.01
   * toFixedRound(1.015) // 四舍五入输出：1.02
   * @returns {String} 返回字符串的数字
   */
  function toFixedRound(num, decimals = 2) {
    if (isNaN(num)) {
      return "--";
    }
    let s = String(num);
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
    return String(num);
  }

  /**
   * 向下舍出，强制保留小数位数
   * @description 默认保留两位小数，此方法相当于强制截取小数位数
   * @param {String|Number} num 数字
   * @param {Number} decimals 保留小数的位数，默认2位
   * @example
   * toFixedFloor(1) // 输出：1.00
   * toFixedFloor(1.0) // 输出：1.00
   * toFixedFloor(1.01) // 输出：1.01
   * toFixedFloor(1.015) // 四舍后输出：1.01
   * @returns {Number} 返回字符串的数字
   */
  function toFixedFloor(num, decimals = 2) {
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

  // 尽可能保留小数位数
  /**
   * 尽可能保留小数位数
   * @param {String|Number} num 数字
   * @param {Number} decimals 保留小数的位数，默认2位
   * @param {Constant} mode 保留小数模式，参考常量集合中 数学计算常量
   * @returns {Number} 返回保留后的数字
   */
  function toDecimal(num, decimals = 2, mode = MATH_MODE.ROUND) {
    // 四舍五入
    if (mode == MATH_MODE.ROUND) {
      return toDecimalRound(num, decimals);
    }
    // 向下舍出
    if (mode == MATH_MODE.ROUND_FLOOR) {
      return toDecimalFloor(num, decimals);
    }
  }
  /**
   * 四舍五入，尽可能保留小数
   * @param {String|Number} num 数字
   * @param {Number} decimals 保留小数的位数，默认2位
   * @example
   * toDecimalRound(1) // 不够两位，输出：1
   * toDecimalRound(1.0) // 不够两位，输出：1
   * toDecimalRound(1.01) // 向上五入，输出：1.01
   * toDecimalRound(1.015) // 向上五入，输出：1.02
   * @returns {Number} 返回保留后的数字
   */
  function toDecimalRound(num, decimals = 2) {
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
   * @example
   * toDecimalFloor(1) // 不够两位，输出：1
   * toDecimalFloor(1.0) // 不够两位，输出：1
   * toDecimalFloor(1.01) // 向下舍入，输出：1
   * toDecimalFloor(1.015) // 向下舍入，输出：1
   * @returns {Number} 返回保留后的数字
   */
  function toDecimalFloor(num, decimals = 2) {
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
    toFixed: toFixed,
    toFixedRound: toFixedRound,
    toFixedFloor: toFixedFloor,
    toDecimal: toDecimal,
    toDecimalRound: toDecimalRound,
    toDecimalFloor: toDecimalFloor
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

  /**
   * 生成UUID
   * @param len 生成的长度，默认32位
   * @param radix 进制数，默认16进制
   * @returns {String} 返回UUID字符串
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
   * @example
   * getGUID() // 输出：e854e2ec-063c-1ee7-942f-57c5733ce0cb
   * @returns {String} 返回GUID字符串
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

  // 文件信息处理
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

  // 文件转换
  /**
   * file转blob
   * @param {File} file file文件
   * @returns {Blob} 返回blob
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
   * @returns {Base64} 返回base64
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
   * @returns {URL} 返回url
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
   * @returns {File} 返回file
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
   * @returns {Base64} 返回base64
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
   * @returns {File} 返回file
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
   * @returns {Blob} 返回blob
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
   * @returns {Base64} 返回base64
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

  /**
   * 下载blob格式的文件
   * @param {Blob} blob blob数据
   * @param {String} fileName 下载的文件名，不写后缀名则默认为原文件类型
   */
  function downloadBlobFile(blob, fileName) {
    try {
      const objUrl = URL.createObjectURL(blob);
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
   * 通过url下载文件
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
   * rgb颜色转hex十六进制
   * @param {String} color rgb颜色字符串
   * @returns {String} 返回生成的hex颜色
   */
  function colorRgbToHex(color) {
    let rgb = color.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    let r = parseInt(rgb[0].split("(")[1]);
    let g = parseInt(rgb[1]);
    let b = parseInt(rgb[2].split(")")[0]);

    let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return hex;
  }

  /**
   * hex十六进制 颜色转 rgba
   * @param {String} color hex十六进制颜色值
   * @param {Number} opacity 透明度，0-1之间，默认1
   * @returns {String} 返回生成的 rgba 颜色
   */
  function colorHexToRgba(color, opacity = 1) {
    return (
      "rgba(" +
      parseInt("0x" + color.slice(1, 3)) +
      "," +
      parseInt("0x" + color.slice(3, 5)) +
      "," +
      parseInt("0x" + color.slice(5, 7)) +
      "," +
      opacity +
      ")"
    );
  }

  /**
   * 获取随机生成的16进制颜色
   * @returns {String} 返回生成的十六进制颜色
   */
  function getRandomHexColor() {
    return (
      "#" +
      (function (h) {
        return new Array(7 - h.length).join("0") + h;
      })(((Math.random() * 0x1000000) << 0).toString(16))
    );
  }

  /**
   * 获取随机生成的 rgb 颜色
   * @returns {String} 返回生成的 rgb 颜色
   */
  function getRandomRgbColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  var colorUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    colorRgbToHex: colorRgbToHex,
    colorHexToRgba: colorHexToRgba,
    getRandomHexColor: getRandomHexColor,
    getRandomRgbColor: getRandomRgbColor
  });

  /**
   * 从url中获取参数值
   * @param {String} name 参数名
   * @param {String} url url地址，默认当前地址栏url
   * @returns {String} 返回查询到的值
   */
  function getUrlParam(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    url = url.split("?")[1];
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = url.substring(0).match(reg);
    if (r != null) return decodeURI(r[2]);
    return "";
  }

  /**
   * url查询参数转为对象
   * @param {String} url url地址，默认当前地址栏url
   * @returns {Object} 返回参数对象
   */
  function urlQueryToObject(url = window.location.href) {
    if (url.indexOf("?") === -1) {
      return {};
    }
    let search = url[0] === "?" ? url.substr(1) : url.substring(url.lastIndexOf("?") + 1);
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
   *  @returns {String} 返回 id=1&name=xx 格式的url查询参数
   */
  function objectToUrlQuery(obj) {
    if (!obj) return "";
    let pairs = [];
    for (let key in obj) {
      let value = obj[key];
      if (value instanceof Array) {
        for (let i = 0; i < value.length; ++i) {
          pairs.push(encodeURIComponent(key + "[" + i + "]") + "=" + encodeURIComponent(value[i]));
        }
        continue;
      }
      pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
    return pairs.join("&");
  }

  var urlUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getUrlParam: getUrlParam,
    urlQueryToObject: urlQueryToObject,
    objectToUrlQuery: objectToUrlQuery
  });

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

  var storageUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getLocalStorage: getLocalStorage,
    setLocalStorage: setLocalStorage,
    removeLocalStorage: removeLocalStorage,
    clearLocalStorage: clearLocalStorage,
    getSessionStorage: getSessionStorage,
    setSessionStorage: setSessionStorage,
    removeSessionStorage: removeSessionStorage,
    clearSessionStorage: clearSessionStorage
  });

  /**
   * 通过key获取cookie
   * @param {String} key 参数key
   * @returns {String} 返回获取的值
   */
  function getCookie(key) {
    if (typeof document == "undefined") return;
    let arr = document.cookie ? document.cookie.split(";") : [];
    for (let i = 0; i < arr[i].length; i++) {
      let arr2 = arr[i].split("=");
      if (arr2[0] == key) {
        return decodeURIComponent(arr2[1]);
      }
      return "";
    }
  }

  /**
   * 通过key设置cookie
   * 注：timestamp参数不填，则默认为session级别，浏览器关闭即cookie过期
   * @param {String} key 参数key
   * @param {String} value 设置的value
   * @param {Timestamp} timestamp 过期的时间戳值，默认为一天，设置一天过期则为：24*60*60*1000
   */
  function setCookie(key, value, timestamp = 24 * 60 * 60 * 1000) {
    if (typeof document == "undefined") return;
    document.cookie = key + "=" + value + ";expires=" + new Date(Date.now() + timestamp);
  }

  /**
   * 通过key删除cookie
   * @param {String} key 参数key
   */
  function removeCookie(key) {
    if (isEmpty(key)) return;
    setCookie(key, "", -1);
  }

  /**
   * 清空当前站点域名的cookie
   * @param {String} domain 域名地址，默认是当前站点域名
   */
  function clearCookie(domain = document.domain) {
    let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
      for (let i = keys.length; i--; ) {
        document.cookie =
          keys[i] + "=0;path=/;" + domain ? "domain=" + domain + ";" : "" + "expires=" + new Date(0).toUTCString();
      }
    }
  }

  var cookieUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getCookie: getCookie,
    setCookie: setCookie,
    removeCookie: removeCookie,
    clearCookie: clearCookie
  });

  /**
   * 判断元素包含某个类名
   * @param {Document} elem dom元素
   * @param {String} className 类名
   * @return {Boolean} 返回true和false
   */
  function hasClass(elem, className) {
    return elem.className.indexOf(className) > 0;
  }

  /**
   * 元素添加类名
   * @param {Document} elem dom元素
   * @param {String} className 类名
   */
  function addClass(elem, className) {
    if (!hasClass(elem, className)) elem.className += " " + className;
  }

  /**
   * 元素删除类名
   * @param {Document} elem dom元素
   * @param {String} className 类名
   */
  function removeClass(elem, className) {
    if (hasClass(elem, className)) elem.className = elem.className.replace(new RegExp(className, "gm"), "");
  }

  /**
   * 元素替换类名
   * @param {Document} elem dom元素
   * @param {String} newClassName 新的类名
   * @param {String} oldClassName 被替换掉的旧类名
   */
  function replaceClass(elem, newClassName, oldClassName) {
    removeClass(elem, oldClassName);
    addClass(elem, newClassName);
  }

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
    return htmlStr.replace(/(&lt;|&gt;|&amp;|&#40;|&#41;|&#47;|&nbsp;|&quot;|&#39;)/gi, function (all, t) {
      return temp[t];
    });
  }

  var domUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    replaceClass: replaceClass,
    htmlEncode: htmlEncode,
    htmlDecode: htmlDecode
  });

  // 浏览器信息
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

  // 设备类型
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
    return /Android|webOS|iPhone|iPod|BlackBerry|Windows Phone|IEMobile/i.test(ua);
  }

  // 操作系统类型
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

  // 苹果设备类型
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

  // 手机浏览器类型
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
    console.log("lime-util loaded successfully!");
  };

  // 导出
  var index = {
    loadedTest,
    // 常量集合
    ...constant,

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

    // 日期
    ...dateUtil,
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

    // 浏览器 Url
    ...urlUtil,
    // 浏览器 Storage
    ...storageUtil,
    // 浏览器 Cookie
    ...cookieUtil,
    // 浏览器 Dom
    ...domUtil,
    // 浏览器 Device
    ...deviceUtil,

    // 微信小程序
    ...xcxUtil,
  };

  return index;

}));
