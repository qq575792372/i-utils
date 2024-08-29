import * as SHA512 from "./sha512.js";

/**
 * sha256 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha512(str) {
  return SHA512.sha512(str);
}

/**
 * sha384 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha384(str) {
  return SHA512.sha384(str);
}

/**
 * sha512_256 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha512_256(str) {
  return SHA512.sha512_256(str);
}

/**
 * sha512_224 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha512_224(str) {
  return SHA512.sha512_224(str);
}

/**
 * sha512_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回加密后的字符串
 */
export function sha512_hmac(str, key) {
  return SHA512.sha512_hmac(key, str);
}

/**
 * sha384_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回加密后的字符串
 */
export function sha384_hmac(str, key) {
  return SHA512.sha384_hmac(key, str);
}

/**
 * sha512_256_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回加密后的字符串
 */
export function sha512_256_hmac(str, key) {
  return SHA512.sha512_256_hmac(key, str);
}

/**
 * sha512_224_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回加密后的字符串
 */
export function sha512_224_hmac(str, key) {
  return SHA512.sha512_224_hmac(key, str);
}
