import * as MD5 from "./MD5.js";

/**
 * md5 加密
 * @param {String} str 字符串
 * @returns {string} 返回加密后的字符串
 */
export function md5(str) {
  return MD5.md5(str);
}

/**
 * md5_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {string} 返回加密后的字符串
 */
export function md5_hmac(str, key) {
  return MD5.md5_hmac(key, str);
}
