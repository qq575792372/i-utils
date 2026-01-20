/**
 * sha256 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha256(str: string): string;
/**
 * sha224 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha224(str: string): string;
/**
 * sha256_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回加密后的字符串
 */
export function sha256_hmac(str: string, key: string): string;
/**
 * sha224_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回加密后的字符串
 */
export function sha224_hmac(str: string, key: string): string;
