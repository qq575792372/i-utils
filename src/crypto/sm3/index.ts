import * as sm3 from "./sm3.js";

/**
 * sm3 加密
 * @param {string} str 字符串
 * @returns {string} 返回加密后的字符串
 */
export function sm3Encrypt(str: string): string {
  return sm3.encrypt(str);
}
/**
 * sm3_hmac 加密
 * @param {string} str 字符串
 * @param {string} key 配置
 * @returns {string} 返回加密后的字符串
 */
export function sm3EncryptHmac(str: string, key: string): string {
  if (!str || !key) {
    throw new Error("Missing str or key");
  }
  return sm3.encrypt(str, key);
}
