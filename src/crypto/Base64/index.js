/**
 * base64 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function base64Encode(str) {
  return encode(str);
}

/**
 * base64 解密
 * @param {String} value 解密的字符串
 * @returns {String} 返回解密后的字符串
 */
export function base64Decode(value) {
  return decode(value);
}

/**
 * base64 加密字节
 * @param {Array} array 数组
 * @returns {String} 返回加密后的字符串
 */
export function base64EncodeAsBytes(array) {
  return encode(array);
}

/**
 * base64 解密字节
 * @param {String} base64Str base64字符串
 * @returns {Array} 返回解密后的字节
 */
export function base64DecodeAsBytes(base64Str) {
  return decodeAsBytes(base64Str);
}
