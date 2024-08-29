import * as SHA3 from "./sha3.js";

/**
 * sha3_512 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha3_512(str) {
  return SHA3.sha3_512(str);
}

/**
 * sha3_384 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha3_384(str) {
  return SHA3.sha3_384(str);
}

/**
 * sha3_256 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha3_256(str) {
  return SHA3.sha3_256(str);
}

/**
 * sha3_224 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha3_224(str) {
  return SHA3.sha3_224(str);
}
