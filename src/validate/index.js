import { REGEXP } from "../constants/index.js";

/**
 * 判断是整数
 * @param {*} value 参数
 * @returns {Boolean} result 返回结果
 */
export function isInteger(value) {
  return Number.isInteger(value);
}

/**
 * 判断是小数
 * @param {*} value 参数
 * @returns {Boolean} result 返回结果
 */
export function isDecimal(value) {
  return /^\d+\.\d+$/.test(value);
}

/**
 * 判断类型是数字 Number
 * @param {Number} value 参数
 * @returns {Boolean} 返回结果
 */
export function isNumber(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Number";
}

/**
 * 判断类型是字符串 String
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isString(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "String";
}

/**
 * 判断类型是数组 Array
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isArray(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Array";
}

/**
 * 判断类型是对象 Object
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isObject(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Object";
}

/**
 * 判断类型是布尔 Boolean
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isBoolean(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Boolean";
}

/**
 * 判断类型是日期 Date
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isDate(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Date";
}

/**
 * 判断类型是函数 Function
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isFunction(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Function";
}

/**
 * 判断类型是函数字符串 FunctionString
 * @description 支持普通函数，异步函数，箭头函数
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isFunctionString(value) {
  if (value) {
    try {
      let fn = new Function(`return ${value}`)();
      return typeof fn === "function";
    } catch (e) {
      // 如果发生错误，比如语法错误，那么这不是一个有效的函数
      return false;
    }
  } else {
    return false;
  }
}

/**
 * 判断类型是异步函数 AsyncFunction
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isAsyncFunction(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "AsyncFunction";
}

/**
 * 判断类型是 Symbol
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isSymbol(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Symbol";
}

/**
 * 判断类型是正则 RegExp
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isRegExp(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "RegExp";
}

/**
 * 判断类型是错误 Error
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isError(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Error";
}

/**
 * 判断类型是 Promise
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isPromise(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Promise";
}

/**
 *判断类型是 Map
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isMap(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Map";
}

/**
 * 判断类型是 WeakMap
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isWeakMap(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "WeakMap";
}

/**
 * 判断类型是 Set
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isSet(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Set";
}

/**
 * 判断类型是 WeakSet
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isWeakSet(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "WeakSet";
}

/**
 * 判断类型是 BigInt
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isBigInt(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "BigInt";
}

/**
 * 判断类型是 Json
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isJson(value) {
  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
}

/* 数据值校验 */
/**
 * 判断值为真
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isTrue(value) {
  return !isFalse(value);
}

/**
 * 判断值为假
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isFalse(value) {
  return (
    value === undefined ||
    value === null ||
    value === "undefined" ||
    value === "null" ||
    value === 0 ||
    value === false ||
    isNaN(value)
  );
}

/**
 * 判断非数字
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isNaN(value) {
  // window的isNaN函数是有缺陷的，空数组/数组有一个元素，null，空字符串 都会被认为是数字
  return window.isNaN(value) || isArray(value) || value == null || value === "";
}

/**
 * 判断是数字
 * @description 等同于isNumber()
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isNotNaN(value) {
  return !isNaN(value);
}

/**
 * 判断对象为空
 * @description 判断值是否为空，如果对象初始化了值则不为空
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isNull(value) {
  return value === undefined || value === null || value === "";
}

/**
 * 判断对象不为空
 * @description 判断值是否为空，如果对象初始化了值则不为空
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isNotNull(value) {
  return !isNull(value);
}

/**
 * 判断值为空
 * @description 判断是否是有意义不为空的值，如果值是{},[]空的数据则为空
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isEmpty(value) {
  return isNull(value) || !(Object.keys(value) || value).length;
}

/**
 * 判断值不为空
 * @description 判断是否是有意义不为空的值，如果值是{},[]空的数据则为空
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isNotEmpty(value) {
  return !isEmpty(value);
}

/**
 * 判断值是空白的
 * @description 同时会校验空值，空对象，以及空白符号
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isBlank(value) {
  return isEmpty(value) || /^\s*$/.test(value);
}

/**
 * 判断值不是空白的
 * @description 同时会校验空值，空对象，以及空白符号
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isNotBlank(value) {
  return !isBlank(value);
}

/**
 * 判断值是undefined
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isUndefined(value) {
  return value === undefined;
}

/**
 * 判断值不是undefined
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isNotUndefined(value) {
  return !isUndefined(value);
}

/* 数据比较 */
/**
 * 判断两个值是否相等
 * @param {String|Number} value1 参数1
 * @param {String|Number} value2 参数2
 * @returns {Boolean} 返回结果
 */
export function equals(value1, value2) {
  return Object.is(value1, value2);
}

/**
 * 判断两个值是否相等（忽略大小写）
 * @param {String|Number} value1 参数1
 * @param {String|Number} value2 参数2
 * @returns {Boolean} 返回结果
 */
export function equalsIgnoreCase(value1, value2) {
  return Object.is(value1.toLowerCase(), value2.toLowerCase());
}

/**
 * 深度对比数据
 * @description 可以对比任意数据，对象，数组，日期等也可深度对比，对象不区分先后顺序
 * @param {*} x 数据1
 * @param {*} y 数据2
 * @returns {Boolean} 返回结果
 */
export function deepCompare(x, y) {
  let i, l, leftChain, rightChain;

  function compare2Objects(x, y) {
    let p;

    // remember that NaN === NaN returns false
    // and isNaN(undefined) returns true
    if (isNaN(x) && isNaN(y) && typeof x === "number" && typeof y === "number") {
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
    return true; // Die silently? Don't know how to handle such case, please help...
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
