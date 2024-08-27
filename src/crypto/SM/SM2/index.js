import * as SM2 from "./SM2.js";

// 获取密钥对
/**
 * sm2 生成公钥和私钥
 * @param {String} str 字符串
 * @param {Number} rnd 随机数
 * @returns {Object} 返回公钥和私钥
 */
export function sm2GenerateKeyPairHex(str, rnd) {
  return SM2.generateKeyPairHex(str, rnd);
}

/**
 * sm2 压缩公钥
 * @param {String} publicKey 公钥
 * @returns {String} 返回公钥字符串
 */
export function sm2CompressPublicKeyHex(publicKey) {
  return SM2.compressPublicKeyHex(publicKey);
}

/**
 * sm2 对比公钥是否等价
 * @param {String} publicKey 公钥
 * @param {String} compressedPublicKey 压缩后的公钥
 * @returns {Boolean} 返回结果
 */
export function sm2ComparePublicKeyHex(publicKey, compressedPublicKey) {
  return SM2.comparePublicKeyHex(publicKey, compressedPublicKey);
}

// 验证密钥对
/**
 * sm2 验证公钥
 * @param {String} publicKey 公钥，也可以传压缩后的公钥
 * @returns {Boolean} 返回结果
 */
export function sm2VerifyPublicKey(publicKey) {
  return SM2.verifyPublicKey(publicKey);
}

// 加密解密
/**
 * sm2 加密
 * @param {String} str 字符串
 * @param {String} publicKey 公钥
 * @param {Number} cipherMode 加密模式，1（C1C3C2）和0（C1C2C3），默认1
 * @returns {String} 返回加密后的字符串
 */
export function sm2Encrypt(str, publicKey, cipherMode = 1) {
  return SM2.doEncrypt(str, publicKey, cipherMode);
}

/**
 * sm2 解密
 * @param {String} str 字符串
 * @param {String} privateKey 私钥
 * @param {Number} cipherMode 解密模式，1（C1C3C2）和0（C1C2C3），默认1
 * @param {Object} outputConfig 输出结果配置，{output:'string/array'}
 * @returns {String,Array} 返回解密后的数据
 */
export function sm2Decrypt(str, privateKey, cipherMode = 1, outputConfig = { output: "string" }) {
  return SM2.doDecrypt(str, privateKey, cipherMode, outputConfig);
}

// 签名验签
/**
 * sm2 生成签名
 * @param {String} str 字符串
 * @param {String} privateKey 私钥
 * @param {Object} signatureConfig 签名配置
 * @returns {String} 返回签名信息
 */
export function sm2DoSignature(str, privateKey, signatureConfig) {
  return SM2.doSignature(str, privateKey, signatureConfig);
}

/**
 * sm2 验证签名
 * @param {String} str 字符串
 * @param {String} signHex 生成签名的信息
 * @param {String} publicKey 公钥
 * @param {Object} verifyConfig 验证配置
 * @returns {String} 返回结果
 */
export function sm2DoVerifySignature(str, signHex, publicKey, verifyConfig) {
  return SM2.doVerifySignature(str, signHex, publicKey, verifyConfig);
}

// 获取椭圆曲线点
/**
 * sm2 获取椭圆曲线点
 * @returns {Object} 返回椭圆曲线点，可在sm2签名时传入
 */
export function sm2GetPoint() {
  return SM2.getPoint();
}

// 根据私钥获取公钥

/**
 * sm2 根据私钥获取公钥
 * @param {String} privateKey 私钥
 * @returns {String} 返回公钥
 */
export function sm2GetPublicKeyFromPrivateKey(privateKey) {
  return SM2.getPublicKeyFromPrivateKey(privateKey);
}
