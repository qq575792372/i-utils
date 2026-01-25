/**
 * @module 随机数
 */
/**
 * 生成指定大小的随机整数
 * @description n和m参数表示最小和最大范围值，默认0-9之间范围
 * @param {number} min 随机数的最小值，默认 0
 * @param {number} max 随机数的最大值，默认 9
 * @returns {number} 返回指定大小的随机整数
 */
export function getRandom(min: number = 0, max: number = 9): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 生成固定位数的随机整数
 * @description 默认是1，代表生成0-9之间一位，如果是2，则生成10-99之间两位，以此类推
 * @param {number} len 固定的位数
 * @returns {number} 返回固定位数的随机数
 */
export function getRandomDigit(len: number = 1): number {
  return Math.floor((Math.random() + Math.floor(Math.random() * 9 + 1)) * Math.pow(10, len - 1));
}
