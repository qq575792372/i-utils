import * as MD5 from "./md5.js";

/**
 * md5 加密
 * @param {string} str 字符串
 * @returns {string} 返回加密后的十六进制字符串
 */
export function md5(str: string): string {
  return MD5.md5(str);
}

/**
 * md5 加密
 * @param {string} str 字符串
 * @returns {*} 返回加密后的二进制原始值
 */
export function md5Raw(str: string): any {
  return MD5.md5(str, undefined, true);
}

/**
 * md5_hmac 加密
 * @param {string} str 字符串
 * @param {string} key 秘钥
 * @returns {string} 返回加密后的十六进制字符串
 */
export function md5Hmac(str: string, key: string): string {
  if (!str || !key) {
    throw new Error("Missing str or key");
  }
  return MD5.md5(str, key, false);
}

/**
 * md5_hmac 加密
 * @param {string} str 字符串
 * @param {string} key 秘钥
 * @returns {string} 返回加密后的二进制原始值
 */
export function md5HmacRaw(str: string, key: string): any {
  if (!str || !key) {
    throw new Error("Missing str or key");
  }
  return MD5.md5(str, key, true);
}
