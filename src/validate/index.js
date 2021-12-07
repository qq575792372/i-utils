// 数据类型
/**
 * 判断是非数字
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isNaN(value) {
  return window.isNaN(value) || (!value && value !== 0);
}

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
 * 判断类型是Promise
 * @param {*} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isPromise(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Promise";
}

/**
 * 判断字符串是否全是中文
 * @param {String} value 参数
 * @returns {Boolean} 返回true和false
 */
export function isChinese(value) {
  return /^[\u4E00-\u9FA5]+$/.test(value);
}

// 数据值校验
/**
 * 判断值是否为空
 * @description 针对的是实际有意义的值，如果值是{},[]空的数据则为空
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回true和false
 */
export function isEmpty(value) {
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
export function isNull(value) {
  return value == undefined || value == null || value == "";
}

/**
 * 判断值是否有空白符号
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回true和false
 */
export function isBlank(value) {
  return value == null || value == undefined || /^\s*$/.test(value);
}

/**
 * 判断值是否是 undefined
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回true和false
 */
export function isUndefined(value) {
  return value == undefined;
}

// 比较
/**
 * 判断两个字符串是否相等
 * @param {String} value1 参数1
 * @param {String} value2 参数2
 * @returns 返回true和false
 */
export function equals(value1, value2) {
  return Object.is(value1, value2);
}

/**
 * 判断两个字符串是否相等
 * 注：会忽略大小写
 * @param {String} value1 参数1
 * @param {String} value2 参数2
 * @returns 返回true和false
 */
export function equalsIgnoreCase(value1, value2) {
  return Object.is(value1.toLowerCase(), value2.toLowerCase());
}
