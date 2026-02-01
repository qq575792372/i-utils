import * as sm4 from "./sm4.js";

/**
 * sm4传参和返回的类型，不管是传参还是返回值固定是这几个
 */
export type SM4DataType = string | Uint8Array | ArrayBuffer | number[];
/**
 * sm4通用配置
 */
export interface SM4Options {
  // 加密模式：ecb/cbc（默认ecb）
  mode?: keyof typeof sm4.MODE;
  // IV初始向量：仅CBC模式需要，ECB模式不用传
  iv?: SM4DataType;
  // 填充规则：固定pkcs#7，不用改
  padding?: "pkcs#7";
  // 输出格式：hex/utf8/array/uint8array/arraybuffer（加密默认hex，解密默认utf8）
  output?: keyof typeof sm4.OUTPUT;
}

/**
 * sm4 加密
 * @param {string} str 字符串
 * @param {string} key 秘钥
 * @param {Object} options 配置
 * @returns {string} 加密后的字符串
 */
export function sm4Encrypt(
  str: string,
  key: SM4DataType,
  options?: SM4Options, // 改用互斥联合类型
): SM4DataType {
  _validateSM4Options(options, "encrypt");
  return sm4.encrypt(str, key, options);
}

/**
 * sm4 解密
 * @param {string} str 字符串
 * @param {string} key 秘钥
 * @param {Object} options 配置
 * @returns {string} 解密后的数据
 */
export function sm4Decrypt(
  str: string,
  key: SM4DataType,
  options?: SM4Options, // 解密也改为可选（和加密保持一致，更易用）
): SM4DataType {
  _validateSM4Options(options, "decrypt");
  return sm4.decrypt(str, key, options);
}

/**
 * 生成sm4的key
 * @param {string} inputFormat 输入类型 可以任意字符串，其中固定的uint8array、array、hex这3个字符串，会对应生成类型数据
 * @returns {SM4DataType} 生成的key
 */
export const generateSM4Key = sm4.generateKey as (inputFormat?: string) => SM4DataType;

/**
 * 生成sm4的iv
 * @param {string} inputFormat 输入类型 可以任意字符串，其中固定的uint8array、array、hex这3个字符串，会对应生成类型数据
 * @returns {SM4DataType} 生成的iv
 */
export const generateSM4Iv = sm4.generateIv as (inputFormat?: string) => SM4DataType;

/**
 * 校验SM4配置参数的合法性
 * @param options 配置项
 * @param operation 操作类型（encrypt/decrypt）
 */
function _validateSM4Options(options: SM4Options = {}, operation: "encrypt" | "decrypt") {
  const { mode = sm4.MODE.ECB, iv } = options;

  // 1. 校验模式是否合法
  const validModes = Object.values(sm4.MODE);
  if (!validModes.includes(mode)) {
    throw new TypeError(
      `sm4${operation}：unsupported encryption mode "${mode}", supports only ${validModes.join("/")}`,
    );
  }

  // 2. CBC模式必须传IV
  if (mode === sm4.MODE.CBC && !iv) {
    throw new TypeError(`sm4${operation}：the CBC mode must be inputted with an IV (initialization vector)`);
  }

  // 3. ECB模式禁止传IV（避免误用）
  if (mode === sm4.MODE.ECB && iv !== undefined) {
    throw new TypeError(
      `sm4${operation}: the ECB mode does not require an IV to be passed in. Please do not pass the iv parameter`,
    );
  }

  // 4. 校验IV长度（如果传了IV）
  if (iv) {
    let ivLength: number;
    if (typeof iv === "string") {
      // hex字符串：16字节对应32位hex
      ivLength = iv.length === 32 ? 16 : iv.length;
    } else if (iv instanceof ArrayBuffer) {
      ivLength = iv.byteLength;
    } else if (iv instanceof Uint8Array) {
      ivLength = iv.length;
    } else if (Array.isArray(iv)) {
      ivLength = iv.length;
    } else {
      ivLength = 0;
    }

    if (ivLength !== 16) {
      throw new TypeError(`sm4${operation}：IV must be 16 bytes in length, and the current length is ${ivLength}`);
    }
  }

  // 5. 校验填充模式（仅允许pkcs#7）
  if (options.padding && options.padding !== String(sm4.PADDING)) {
    throw new TypeError(
      `sm4${operation}: only pkcs#7 padding mode is supported, currently being input ${String(options.padding)}`,
    );
  }
}

// sm4的配置
export const SM4 = {
  // sm4的模式
  MODE: sm4.MODE,
  // sm4的填充
  PADDING: sm4.PADDING,
  // sm4的输出
  OUTPUT: sm4.OUTPUT,
};
