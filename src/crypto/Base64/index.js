import * as Base64 from "./Base64.js";

/**
 * base64 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function base64Encode(str) {
  return Base64.encode(str);
}

/**
 * base64 解密
 * @param {String} str 字符串
 * @returns {String} 返回解密后的字符串
 */
export function base64Decode(str) {
  return Base64.decode(str);
}

/**
 * base64 加密字节数组
 * @param {Array} array 数组
 * @returns {String} 返回加密后的字符串
 */
export function base64EncodeAsBytes(array) {
  return Base64.encode(array);
}

/**
 * base64 解密字节数组
 * @param {String} str 字符串
 * @returns {Array} 返回解密后的字节数组
 */
export function base64DecodeAsBytes(str) {
  return Base64.decodeAsBytes(str);
}
