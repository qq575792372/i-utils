import TEA from "./tea.js";

/**
 * tea 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {string} 返回加密后的字符串
 */
export function encrypt(str, key) {
  return TEA.encrypt(str, key);
}

/**
 * tea 解密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {string} 返回解密后的字符串
 */
export function decrypt(str, key) {
  return TEA.decrypt(str, key);
}
