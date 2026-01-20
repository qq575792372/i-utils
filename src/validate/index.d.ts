/**
 * 判断是整数
 * @param {*} value 参数
 * @returns {Boolean} result 返回结果
 */
export function isInteger(value: any): boolean;
/**
 * 判断是小数
 * @param {*} value 参数
 * @returns {Boolean} result 返回结果
 */
export function isDecimal(value: any): boolean;
/**
 * 判断类型是数字 Number
 * @param {Number} value 参数
 * @returns {Boolean} 返回结果
 */
export function isNumber(value: number): boolean;
/**
 * 判断类型是字符串 String
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isString(value: any): boolean;
/**
 * 判断类型是数组 Array
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isArray(value: any): boolean;
/**
 * 判断类型是对象 Object
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isObject(value: any): boolean;
/**
 * 判断类型是布尔 Boolean
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isBoolean(value: any): boolean;
/**
 * 判断类型是日期 Date
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isDate(value: any): boolean;
/**
 * 判断类型是函数 Function
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isFunction(value: any): boolean;
/**
 * 判断类型是函数字符串 FunctionString
 * @description 支持普通函数，异步函数，箭头函数
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isFunctionString(value: any): boolean;
/**
 * 判断类型是异步函数 AsyncFunction
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isAsyncFunction(value: any): boolean;
/**
 * 判断类型是 Symbol
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isSymbol(value: any): boolean;
/**
 * 判断类型是正则 RegExp
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isRegExp(value: any): boolean;
/**
 * 判断类型是错误 Error
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isError(value: any): boolean;
/**
 * 判断类型是 Promise
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isPromise(value: any): boolean;
/**
 *判断类型是 Map
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isMap(value: any): boolean;
/**
 * 判断类型是 WeakMap
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isWeakMap(value: any): boolean;
/**
 * 判断类型是 Set
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isSet(value: any): boolean;
/**
 * 判断类型是 WeakSet
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isWeakSet(value: any): boolean;
/**
 * 判断类型是 BigInt
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isBigInt(value: any): boolean;
/**
 * 判断类型是 Json
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isJson(value: any): boolean;
/**
 * 判断值为真
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isTrue(value: any): boolean;
/**
 * 判断值为假
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isFalse(value: any): boolean;
/**
 * 判断非数字
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isNaN(value: any): boolean;
/**
 * 判断是数字
 * @description 等同于isNumber()
 * @param {*} value 参数
 * @returns {Boolean} 返回结果
 */
export function isNotNaN(value: any): boolean;
/**
 * 判断对象为空
 * @description 判断值是否为空，如果对象初始化了值则不为空
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isNull(value: any): boolean;
/**
 * 判断对象不为空
 * @description 判断值是否为空，如果对象初始化了值则不为空
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isNotNull(value: any): boolean;
/**
 * 判断值为空
 * @description 判断是否是有意义不为空的值，如果值是{},[]空的数据则为空
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isEmpty(value: any): boolean;
/**
 * 判断值不为空
 * @description 判断是否是有意义不为空的值，如果值是{},[]空的数据则为空
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isNotEmpty(value: any): boolean;
/**
 * 判断值是空白的
 * @description 同时会校验空值，空对象，以及空白符号
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isBlank(value: any): boolean;
/**
 * 判断值不是空白的
 * @description 同时会校验空值，空对象，以及空白符号
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isNotBlank(value: any): boolean;
/**
 * 判断值是undefined
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isUndefined(value: any): boolean;
/**
 * 判断值不是undefined
 * @param {*} value 校验的参数
 * @returns {Boolean} 返回结果
 */
export function isNotUndefined(value: any): boolean;
/**
 * 判断两个值是否相等
 * @param {String|Number} value1 参数1
 * @param {String|Number} value2 参数2
 * @returns {Boolean} 返回结果
 */
export function equals(value1: string | number, value2: string | number): boolean;
/**
 * 判断两个值是否相等（忽略大小写）
 * @param {String|Number} value1 参数1
 * @param {String|Number} value2 参数2
 * @returns {Boolean} 返回结果
 */
export function equalsIgnoreCase(value1: string | number, value2: string | number): boolean;
/**
 * 深度对比数据
 * @description 可以对比任意数据，对象，数组，日期等也可深度对比，对象不区分先后顺序
 * @param {*} x 数据1
 * @param {*} y 数据2
 * @returns {Boolean} 返回结果
 */
export function deepCompare(x: any, y: any, ...args: any[]): boolean;
