import * as SHA256 from "./sha256.js";

/**
 * sha256 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha256(str) {
  return SHA256.sha256(str);
}

/**
 * sha224 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha224(str) {
  return SHA256.sha224(str);
}

/**
 * sha256_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回加密后的字符串
 */
export function sha256_hmac(str, key) {
  return SHA256.sha256_hmac(key, str);
}

/**
 * sha224_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回加密后的字符串
 */
export function sha224_hmac(str, key) {
  return SHA256.sha224_hmac(key, str);
}
