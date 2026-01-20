/**
 * sha256 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha512(str: string): string;
/**
 * sha384 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha384(str: string): string;
/**
 * sha512_256 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha512_256(str: string): string;
/**
 * sha512_224 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function sha512_224(str: string): string;
/**
 * sha512_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回加密后的字符串
 */
export function sha512_hmac(str: string, key: string): string;
/**
 * sha384_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回加密后的字符串
 */
export function sha384_hmac(str: string, key: string): string;
/**
 * sha512_256_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回加密后的字符串
 */
export function sha512_256_hmac(str: string, key: string): string;
/**
 * sha512_224_hmac 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @returns {String} 返回加密后的字符串
 */
export function sha512_224_hmac(str: string, key: string): string;
