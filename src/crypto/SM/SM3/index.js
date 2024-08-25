import SM3 from "./SM3.js";

/**
 * sm3 加密
 * @param {String} str 字符串
 * @param {Object} options 配置
 * @returns {String} 返回加密后的字符串
 */
export function sm3Encrypt(str, options) {
  return SM3(str, options);
}
