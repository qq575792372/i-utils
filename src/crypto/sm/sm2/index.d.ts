/**
 * sm2 生成公钥和私钥
 * @param {String} str 字符串
 * @param {Number} rnd 随机数
 * @returns {Object} 返回公钥和私钥
 */
export function generateKeyPairHex(str: string, rnd: number): Object;
/**
 * sm2 压缩公钥
 * @param {String} publicKey 公钥
 * @returns {String} 返回公钥字符串
 */
export function compressPublicKeyHex(publicKey: string): string;
/**
 * sm2 对比公钥是否等价
 * @param {String} publicKey 公钥
 * @param {String} compressedPublicKey 压缩后的公钥
 * @returns {Boolean} 返回结果
 */
export function comparePublicKeyHex(publicKey: string, compressedPublicKey: string): boolean;
/**
 * sm2 验证公钥
 * @param {String} publicKey 公钥，也可以传压缩后的公钥
 * @returns {Boolean} 返回结果
 */
export function verifyPublicKey(publicKey: string): boolean;
/**
 * sm2 加密
 * @param {String} str 字符串
 * @param {String} publicKey 公钥
 * @param {Number} cipherMode 加密模式，1（C1C3C2）和0（C1C2C3），默认1
 * @returns {String} 返回加密后的字符串
 */
export function encrypt(str: string, publicKey: string, cipherMode?: number): string;
/**
 * sm2 解密
 * @param {String} str 字符串
 * @param {String} privateKey 私钥
 * @param {Number} cipherMode 解密模式，1（C1C3C2）和0（C1C2C3），默认1
 * @param {Object} outputConfig 输出结果配置，{output:'string/array'}
 * @returns {String,Array} 返回解密后的数据
 */
export function decrypt(str: string, privateKey: string, cipherMode?: number, outputConfig?: Object): string;
/**
 * sm2 生成签名
 * @param {String} str 字符串
 * @param {String} privateKey 私钥
 * @param {Object} signatureConfig 签名配置
 * @returns {String} 返回签名信息
 */
export function doSignature(str: string, privateKey: string, signatureConfig: Object): string;
/**
 * sm2 验证签名
 * @param {String} str 字符串
 * @param {String} signHex 生成签名的信息
 * @param {String} publicKey 公钥
 * @param {Object} verifyConfig 验证配置
 * @returns {String} 返回结果
 */
export function doVerifySignature(str: string, signHex: string, publicKey: string, verifyConfig: Object): string;
/**
 * sm2 获取椭圆曲线点
 * @returns {Object} 返回椭圆曲线点，可在sm2签名时传入
 */
export function getPoint(): Object;
/**
 * sm2 根据私钥获取公钥
 * @param {String} privateKey 私钥
 * @returns {String} 返回公钥
 */
export function getPublicKeyFromPrivateKey(privateKey: string): string;
