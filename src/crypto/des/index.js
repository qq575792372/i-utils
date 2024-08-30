/* 对称加密 DES */
import DES from "./des.js";

/**
 * des 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回加密后的字符串
 */
export function encrypt(str, key) {
  let des = new DES(key, str);
  return des.encrypt(key, str);
}

/**
 * des 解密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回解密后的字符串
 */
export function decrypt(str, key) {
  let des = new DES(key, str);
  return des.decrypt(key, str);
}
