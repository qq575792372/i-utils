import * as SM4 from "./sm4.js";

/**
 * sm4 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @param {Object} options 配置
 * @returns {String} 返回加密后的字符串
 */
export function encrypt(str, key, options) {
  return SM4.encrypt(str, key, options);
}

/**
 * sm4 解密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @param {Object} options 配置
 * @returns {String} 返回解密后的数据
 */
export function decrypt(str, key, options) {
  return SM4.decrypt(str, key, options);
}
