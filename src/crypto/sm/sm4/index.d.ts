/**
 * sm4 加密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @param {Object} options 配置
 * @returns {String} 返回加密后的字符串
 */
export function encrypt(str: string, key: string, options: Object): string;
/**
 * sm4 解密
 * @param {String} str 字符串
 * @param {String} key 秘钥
 * @param {Object} options 配置
 * @returns {String} 返回解密后的数据
 */
export function decrypt(str: string, key: string, options: Object): string;
