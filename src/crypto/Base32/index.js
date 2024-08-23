/**
 * base32 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function base32Encode(str) {
  return encode(str);
}

/**
 * base32 解密
 * @param {String} str 字符串
 * @returns {String} 返回解密后的字符串
 */
export function base32Decode(str) {
  return decode(str);
}

/**
 * base32 加密字节
 * @param {Array} array 数组
 * @returns {String} 返回加密后的字符串
 */
export function base32EncodeAsBytes(array) {
  return encode(array);
}

/**
 * base32 解密字节
 * @param {String} base32Str base32字符串
 * @returns {Array} 返回解密后的字节
 */
export function base32DecodeAsBytes(base32Str) {
  return decodeAsBytes(base32Str);
}
