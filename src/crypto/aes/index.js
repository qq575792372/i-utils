import AES from "./aes.js";

/**
 * aes 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @param {Number} bits 密钥长度位数，支持128、192和256，默认256
 * @returns {string} 返回加密后的字符串
 */
export function encrypt(str, key, bits = 256) {
  return AES.encrypt(str, key, bits);
}

/**
 * aes 解密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @param {Number} bits 密钥长度位数，支持128、192和256，默认256
 * @returns {string} 返回解密后的字符串
 */
export function decrypt(str, key, bits) {
  return AES.decrypt(str, key, bits);
}
