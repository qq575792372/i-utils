/**
 * 判断是否是整数Integer
 * @param {*} value 参数
 * @returns {Boolean} result 返回true和false
 */
export function isInteger(value) {
  return Number.isInteger(value);
}

/**
 * 判断是非数字
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isNaN(value) {
  return isNaN(value) || (!value && value !== 0);
}

/**
 * 判断是否是数字Number
 * @param {Number} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isNumber(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Number";
}

/**
 * 判断是否是Date
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isDate(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Date";
}

/**
 * 判断是否是Object
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isObject(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Object";
}

/**
 * 判断是否是Array
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isArray(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Array";
}

/**
 * 判断是否是String
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isString(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "String";
}

/**
 * 判断是否是Boolean
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isBoolean(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Boolean";
}

/**
 * 判断是否是Function
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isFunction(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Function";
}

/**
 * 判断字符串是否全是中文
 * @param {String} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isChinese(value) {
  return /^[\u4E00-\u9FA5]+$/.test(value);
}

/**
 * 判断两个字符串是否相等
 * 注：强制比较，包括同一个字符，但是不同类型
 * @param {String} value1 参数1
 * @param {String} value2 参数2
 * @returns 返回true和false
 */
export function equals(value1, value2) {
  return Object.is(value1, value2);
}

/**
 * 判断值是否是空的，支持空字符串，null，undefined，Object，String，Number，Date
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回true和false
 */
export function isEmpty(value) {
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
export function isNull(value) {
  return value == null;
}

/**
 * 判断值是否是 undefined
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回true和false
 */
export function isUndefined(value) {
  return value == undefined;
}
