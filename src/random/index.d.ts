/**
 * 生成指定大小的随机整数
 * @description n和m参数表示最小和最大范围值，默认0-9之间范围
 * @param {Number} min 随机数的最小值，默认 0
 * @param {Number} max 随机数的最大值，默认 9
 * @returns {Number} 返回指定大小的随机整数
 */
export function getRandom(min?: number, max?: number): number;
/**
 * 生成固定位数的随机整数
 * @description 默认是1，代表生成0-9之间一位，如果是2，则生成10-99之间两位，以此类推
 * @param {Number} len 固定的位数
 * @returns {Number} 返回固定位数的随机数
 */
export function getRandomDigit(len?: number): number;
