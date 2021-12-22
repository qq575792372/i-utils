// 数据类型
/**
 * 判断是整数
 * @param {*} value 参数
 * @returns {Boolean} result 返回true和false
 */
export function isInteger(value) {
  return Number.isInteger(value);
}

/**
 * 判断是小数
 * @param {*} value 参数
 * @returns {Boolean} result 返回true和false
 */
export function isDecimal(value) {
  return String(value).indexOf(".") > 0;
}

/**
 * 判断类型是数字 Number
 * @param {Number} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isNumber(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Number";
}

/**
 * 判断类型是字符串 String
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isString(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "String";
}

/**
 * 判断类型是数组 Array
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isArray(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Array";
}

/**
 * 判断类型是对象 Object
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isObject(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Object";
}

/**
 * 判断类型是布尔 Boolean
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isBoolean(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Boolean";
}

/**
 * 判断类型是日期 Date
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isDate(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Date";
}

/**
 * 判断类型是函数 Function
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isFunction(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Function";
}

/**
 * 判断类型是 Symbol
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isSymbol(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Symbol";
}

/**
 * 判断类型是正则 RegExp
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isRegExp(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "RegExp";
}

/**
 * 判断类型是错误 Error
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isError(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Error";
}

/**
 * 判断类型是 Promise
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isPromise(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Promise";
}

// 数据值校验
/**
 * 判断非数字
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isNaN(value) {
  return window.isNaN(value) || (!value && value !== 0);
}

/**
 * 判断是数字
 * @description 等同于isNumber()
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isNotNaN(value) {
  return !isNaN(value);
}

/**
 * 判断对象为空
 * @description 对象是否初始化过，如果值是{},[]等初始化过的则不为空
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回true和false
 */
export function isNull(value) {
  return value == undefined || value == null || value == "";
}

/**
 * 判断对象不为空
 * @description 对象是否初始化过，如果值是{},[]等初始化过的则不为空
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回true和false
 */
export function isNotNull(value) {
  return !isNull(value);
}

/**
 * 判断值为空
 * @description 是否实际有意义的值，如果值是{},[]空的数据则为空
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回true和false
 */
export function isEmpty(value) {
  return isNull(value) || (isObject(value) && Object.keys(value).length == 0) || (isArray(value) && value.length == 0);
}

/**
 * 判断值不为空
 * @description 是否实际有意义的值，如果值是{},[]空的数据则为空
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回true和false
 */
export function isNotEmpty(value) {
  return !isEmpty(value);
}

/**
 * 判断值是空白的
 * @description 同时会校验空值，空对象，以及空白符号
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回true和false
 */
export function isBlank(value) {
  return isEmpty(value) || /^\s*$/.test(value);
}

/**
 * 判断值不是空白的
 * @description 同时会校验空值，空对象，以及空白符号
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回true和false
 */
export function isNotBlank(value) {
  return !isBlank(value);
}

/**
 * 判断值是undefined
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回true和false
 */
export function isUndefined(value) {
  return value === undefined;
}
/**
 * 判断值不是undefined
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回true和false
 */
export function isNotUndefined(value) {
  return !isUndefined(value);
}

// 比较
/**
 * 判断两个值是否相等
 * @param {String|Number} value1 参数1
 * @param {String|Number} value2 参数2
 * @returns {Boolean} 返回true和false
 */
export function equals(value1, value2) {
  return Object.is(value1, value2);
}

/**
 * 判断两个值是否相等（忽略大小写）
 * @param {String|Number} value1 参数1
 * @param {String|Number} value2 参数2
 * @returns {Boolean} 返回true和false
 */
export function equalsIgnoreCase(value1, value2) {
  return Object.is(value1.toLowerCase(), value2.toLowerCase());
}
