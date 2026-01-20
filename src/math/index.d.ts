/**
 * 两个数字相加
 * @param {String|Number} arg1 第一个数字
 * @param {String|Number} arg2 第二个数字
 * @returns {Number} 返回计算后的数字
 */
export function add(arg1: string | number, arg2: string | number): number;
/**
 * 两个数字相减
 * @param {String|Number} arg1 第一个数字
 * @param {String|Number} arg2 第二个数字
 * @returns {Number} 返回计算后的数字
 */
export function subtract(arg1: string | number, arg2: string | number): number;
/**
 * 两个数字相乘
 * @param {String|Number} arg1 第一个数字
 * @param {String|Number} arg2 第二个数字
 * @returns 返回计算后的数字
 */
export function multiply(arg1: string | number, arg2: string | number): number;
/**
 * 两个数字相除
 * @param {String|Number} arg1 第一个数字
 * @param {String|Number} arg2 第二个数字
 * @returns {Number} 返回计算后的数字
 */
export function divide(arg1: string | number, arg2: string | number): number;
/**
 * 两个数字取模
 * @param {String|Number} arg1 第一个数字
 * @param {String|Number} arg2 第二个数字
 * @returns {Number} 返回计算后的数字
 */
export function modulo(arg1: string | number, arg2: string | number): number;
/**
 * 最大公约数
 * @param {String|Number} arg1 第一个数字
 * @param {String|Number} arg2 第二个数字
 * @returns {Number} 返回计算后的数字
 */
export function gcd(arg1: string | number, arg2: string | number): number;
/**
 * 最小公倍数
 * @param {String|Number} arg1 第一个数字
 * @param {String|Number} arg2 第二个数字
 * @returns {Number} 返回计算后的数字
 */
export function scm(arg1: string | number, arg2: string | number): number;
/**
 * 强制保留小数位数
 * @description 默认保留两位小数，解决原生的toFixed()会五舍六入的问题
 * @param {String|Number} num 数字
 * @param {Number} decimals 保留小数的位数，默认2位
 * @param {Number} mode 保留小数模式
 * @returns {String} 返回保留后的数字字符串
 */
export function toFixed(num: string | number, decimals?: number, mode?: number): string;
/**
 * 尽可能保留小数位数
 * @param {String|Number} num 数字
 * @param {Number} decimals 保留小数的位数，默认2位
 * @param {Number} mode 保留小数模式
 * @returns {Number} 返回保留后的数字
 */
export function toDecimal(num: string | number, decimals?: number, mode?: number): number;
