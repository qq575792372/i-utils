import * as SM2 from "./SM2.js";

// 获取密钥
/**
 * sm2 加密
 * @param {String} str 字符串
 * @param {String} key 配置
 * @returns {String} 返回加密后的字符串
 */
export function sm2Encrypt(str, key) {
  return SM2.doEncrypt(str, key);
}

export function generateKeyPairHex() {
  return SM2.generateKeyPairHex();
}

export function compressPublicKeyHex() {
  return SM2.compressPublicKeyHex();
}
