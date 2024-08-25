import * as Base32 from "./Base32.js";

/**
 * base32 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function base32Encode(str) {
  return Base32.encode(str);
}

/**
 * base32 解密
 * @param {String} str 字符串
 * @returns {String} 返回解密后的字符串
 */
export function base32Decode(str) {
  return Base32.decode(str);
}

/**
 * base32 加密字节数组
 * @param {Array} array 数组
 * @returns {String} 返回加密后的字符串
 */
export function base32EncodeAsBytes(array) {
  return Base32.encode(array);
}

/**
 * base32 解密字节数组
 * @param {String} str 字符串
 * @returns {Array} 返回解密后的字节
 */
export function base32DecodeAsBytes(str) {
  return Base32.decodeAsBytes(str);
}
