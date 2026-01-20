/**
 * md5 加密
 * @param {String} str 字符串
 * @returns {string} 返回加密后的字符串
 */
export function md5(str: string): string;
/**
 * md5_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {string} 返回加密后的字符串
 */
export function md5_hmac(str: string, key: string): string;
