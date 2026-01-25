import * as SHA256 from "./sha256.js";

// sha256
/**
 * sha256 加密
 * @param {string} str 字符串
 * @returns {string} 返回加密后的字符串
 */
export function sha256(str: string): string {
  return SHA256.sha256(str);
}

/**
 * sha256_raw 加密
 * @param {string} str 字符串
 * @returns {string} 返回加密后的原始值
 */
export function sha256Raw(str: string): any {
  return SHA256.sha256_raw(str);
}

/**
 * sha256_hmac 加密
 * @param {string} str 字符串
 * @param {string} key 秘钥
 * @returns {string} 返回加密后的字符串
 */
export function sha256Hmac(str: string, key: string): string {
  if (!str || !key) {
    throw new Error("Missing str or key");
  }
  return SHA256.sha256_hmac(key, str);
}

/**
 * sha256_hmac_raw 加密
 * @param {string} str 字符串
 * @param {string} key 秘钥
 * @returns {string} 返回加密后的原始值
 */
export function sha256HmacRaw(str: string, key: string): any {
  if (!str || !key) {
    throw new Error("Missing str or key");
  }
  return SHA256.sha256_hmac_raw(key, str);
}

// sha224
/**
 * sha224 加密
 * @param {string} str 字符串
 * @returns {string} 返回加密后的字符串
 */
export function sha224(str: string): string {
  return SHA256.sha224(str);
}

/**
 * sha224_raw 加密
 * @param {string} str 字符串
 * @returns {string} 返回加密后的原始值
 */
export function sha224Raw(str: string): any {
  return SHA256.sha224_raw(str);
}

/**
 * sha224_hmac 加密
 * @param {string} str 字符串
 * @param {string} key 秘钥
 * @returns {string} 返回加密后的字符串
 */
export function sha224Hmac(str: string, key: string): string {
  if (!str || !key) {
    throw new Error("Missing str or key");
  }
  return SHA256.sha224_hmac(key, str);
}

/**
 * sha224_hmac_raw 加密
 * @param {string} str 字符串
 * @param {string} key 秘钥
 * @returns {string} 返回加密后的原始值
 */
export function sha224HmacRaw(str: string, key: string): any {
  if (!str || !key) {
    throw new Error("Missing str or key");
  }
  return SHA256.sha224_hmac_raw(key, str);
}
