import * as SHA1 from "./SHA1.js";

/**
 * sha1 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha1(str) {
  return SHA1.sha1(str);
}

/**
 * sha1_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回加密后的字符串
 */
export function sha1_hmac(str, key) {
  return SHA1.sha1_hmac(key, str);
}
