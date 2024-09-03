import AES from "./aes.js";

/**
 * aes 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {string} 返回加密后的字符串
 */
export function encrypt(str, key) {
  return AES.encrypt(str, key, 256);
}

/**
 * aes 解密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {string} 返回解密后的字符串
 */
export function decrypt(str, key) {
  return AES.decrypt(str, key, 256);
}
