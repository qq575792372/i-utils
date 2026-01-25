// ========== 常量定义（规范化，避免魔法值） ==========
const SM4_MODE_ECB = "ecb";
const SM4_MODE_CBC = "cbc";
const SM4_PADDING = "pkcs#7";
const SM4_OUTPUT_HEX = "hex";
const SM4_OUTPUT_UTF8 = "utf8";
const SM4_OUTPUT_ARRAY = "array";
const SM4_OUTPUT_UINT8ARRAY = "uint8array";
const SM4_OUTPUT_ARRAYBUFFER = "arraybuffer";

const ENCRYPT = 1;
const DECRYPT = 0;
const ROUND_COUNT = 32;
const BLOCK_SIZE = 16; // 128比特 = 16字节
const KEY_SIZE = 16; // SM4密钥固定128比特
const IV_SIZE = 16; // CBC模式IV固定128比特

// SM4 S盒
const SBOX = new Uint8Array([
  0xd6, 0x90, 0xe9, 0xfe, 0xcc, 0xe1, 0x3d, 0xb7, 0x16, 0xb6, 0x14, 0xc2, 0x28, 0xfb, 0x2c, 0x05, 0x2b, 0x67, 0x9a,
  0x76, 0x2a, 0xbe, 0x04, 0xc3, 0xaa, 0x44, 0x13, 0x26, 0x49, 0x86, 0x06, 0x99, 0x9c, 0x42, 0x50, 0xf4, 0x91, 0xef,
  0x98, 0x7a, 0x33, 0x54, 0x0b, 0x43, 0xed, 0xcf, 0xac, 0x62, 0xe4, 0xb3, 0x1c, 0xa9, 0xc9, 0x08, 0xe8, 0x95, 0x80,
  0xdf, 0x94, 0xfa, 0x75, 0x8f, 0x3f, 0xa6, 0x47, 0x07, 0xa7, 0xfc, 0xf3, 0x73, 0x17, 0xba, 0x83, 0x59, 0x3c, 0x19,
  0xe6, 0x85, 0x4f, 0xa8, 0x68, 0x6b, 0x81, 0xb2, 0x71, 0x64, 0xda, 0x8b, 0xf8, 0xeb, 0x0f, 0x4b, 0x70, 0x56, 0x9d,
  0x35, 0x1e, 0x24, 0x0e, 0x5e, 0x63, 0x58, 0xd1, 0xa2, 0x25, 0x22, 0x7c, 0x3b, 0x01, 0x21, 0x78, 0x87, 0xd4, 0x00,
  0x46, 0x57, 0x9f, 0xd3, 0x27, 0x52, 0x4c, 0x36, 0x02, 0xe7, 0xa0, 0xc4, 0xc8, 0x9e, 0xea, 0xbf, 0x8a, 0xd2, 0x40,
  0xc7, 0x38, 0xb5, 0xa3, 0xf7, 0xf2, 0xce, 0xf9, 0x61, 0x15, 0xa1, 0xe0, 0xae, 0x5d, 0xa4, 0x9b, 0x34, 0x1a, 0x55,
  0xad, 0x93, 0x32, 0x30, 0xf5, 0x8c, 0xb1, 0xe3, 0x1d, 0xf6, 0xe2, 0x2e, 0x82, 0x66, 0xca, 0x60, 0xc0, 0x29, 0x23,
  0xab, 0x0d, 0x53, 0x4e, 0x6f, 0xd5, 0xdb, 0x37, 0x45, 0xde, 0xfd, 0x8e, 0x2f, 0x03, 0xff, 0x6a, 0x72, 0x6d, 0x6c,
  0x5b, 0x51, 0x8d, 0x1b, 0xaf, 0x92, 0xbb, 0xdd, 0xbc, 0x7f, 0x11, 0xd9, 0x5c, 0x41, 0x1f, 0x10, 0x5a, 0xd8, 0x0a,
  0xc1, 0x31, 0x88, 0xa5, 0xcd, 0x7b, 0xbd, 0x2d, 0x74, 0xd0, 0x12, 0xb8, 0xe5, 0xb4, 0xb0, 0x89, 0x69, 0x97, 0x4a,
  0x0c, 0x96, 0x77, 0x7e, 0x65, 0xb9, 0xf1, 0x09, 0xc5, 0x6e, 0xc6, 0x84, 0x18, 0xf0, 0x7d, 0xec, 0x3a, 0xdc, 0x4d,
  0x20, 0x79, 0xee, 0x5f, 0x3e, 0xd7, 0xcb, 0x39, 0x48,
]);

// 轮常量 CK
const CK = new Uint32Array([
  0x00070e15, 0x1c232a31, 0x383f464d, 0x545b6269, 0x70777e85, 0x8c939aa1, 0xa8afb6bd, 0xc4cbd2d9, 0xe0e7eef5,
  0xfc030a11, 0x181f262d, 0x343b4249, 0x50575e65, 0x6c737a81, 0x888f969d, 0xa4abb2b9, 0xc0c7ced5, 0xdce3eaf1,
  0xf8ff060d, 0x141b2229, 0x30373e45, 0x4c535a61, 0x686f767d, 0x848b9299, 0xa0a7aeb5, 0xbcc3cad1, 0xd8dfe6ed,
  0xf4fb0209, 0x10171e25, 0x2c333a41, 0x484f565d, 0x646b7279,
]);

// 系统参数 FK
const FK = new Uint32Array([0xa3b1bac6, 0x56aa3350, 0x677d9197, 0xb27022dc]);

// ========== 工具函数（通用转换） ==========
/**
 * 16进制字符串转Uint8Array
 * @param {string} str - 16进制字符串
 * @returns {Uint8Array} 字节数组
 */
function hexToUint8Array(str) {
  str = str.replace(/\s+/g, ""); // 去除空格
  if (str.length % 2 !== 0) throw new Error("Hex string length must be even");

  const arr = new Uint8Array(str.length / 2);
  for (let i = 0; i < str.length; i += 2) {
    arr[i / 2] = parseInt(str.substr(i, 2), 16) & 0xff;
  }
  return arr;
}

/**
 * Uint8Array转16进制字符串
 * @param {Uint8Array} arr - 字节数组
 * @returns {string} 16进制字符串
 */
function uint8ArrayToHex(arr) {
  return Array.from(arr)
    .map((byte) => {
      const hex = byte.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");
}

/**
 * UTF8字符串转Uint8Array
 * @param {string} str - UTF8字符串
 * @returns {Uint8Array} 字节数组
 */
function utf8ToUint8Array(str) {
  return new TextEncoder().encode(str);
}

/**
 * Uint8Array转UTF8字符串
 * @param {Uint8Array} arr - 字节数组
 * @returns {string} UTF8字符串
 */
function uint8ArrayToUtf8(arr) {
  return new TextDecoder("utf-8").decode(arr);
}

/**
 * 统一输入数据格式为Uint8Array
 * @param {string|Array|Uint8Array|ArrayBuffer} input - 输入数据
 * @param {number} cryptFlag - ENCRYPT/DECRYPT
 * @returns {Uint8Array} 标准化后的字节数组
 */
function normalizeInput(input, cryptFlag) {
  if (input instanceof ArrayBuffer) {
    return new Uint8Array(input);
  }
  if (input instanceof Uint8Array) {
    return new Uint8Array(input); // 拷贝避免修改原数组
  }
  if (Array.isArray(input)) {
    return new Uint8Array(input);
  }
  if (typeof input === "string") {
    if (cryptFlag === ENCRYPT) {
      // 加密：字符串按UTF8转字节
      return utf8ToUint8Array(input);
    } else {
      // 解密：字符串按16进制转字节
      return hexToUint8Array(input);
    }
  }
  throw new Error(`Unsupported input type: ${typeof input}`);
}

/**
 * 标准化密钥/IV为Uint8Array
 * @param {string|Array|Uint8Array|ArrayBuffer} keyOrIv - 密钥/IV
 * @param {number} expectedLength - 期望长度（字节）
 * @param {string} name - 名称（用于报错）
 * @returns {Uint8Array} 标准化后的字节数组
 */
function normalizeKeyIv(keyOrIv, expectedLength, name) {
  let arr;
  if (typeof keyOrIv === "string") {
    arr = hexToUint8Array(keyOrIv);
  } else if (keyOrIv instanceof ArrayBuffer) {
    arr = new Uint8Array(keyOrIv);
  } else if (keyOrIv instanceof Uint8Array) {
    arr = keyOrIv;
  } else if (Array.isArray(keyOrIv)) {
    arr = new Uint8Array(keyOrIv);
  } else {
    throw new Error(`Unsupported ${name} type: ${typeof keyOrIv}`);
  }

  if (arr.length !== expectedLength) {
    throw new Error(`${name} must be ${expectedLength * 8} bits (${expectedLength} bytes)`);
  }
  return arr;
}

// ========== SM4核心函数 ==========
/**
 * 32比特循环左移
 * @param {number} x - 32比特无符号整数
 * @param {number} n - 移位位数
 * @returns {number} 移位结果
 */
function rotl32(x, n) {
  const s = n & 31;
  return ((x << s) | (x >>> (32 - s))) >>> 0; // >>>0 确保无符号
}

/**
 * 非线性变换（字节替换）
 * @param {number} a - 32比特无符号整数
 * @returns {number} 替换结果
 */
function byteSub(a) {
  return (
    ((SBOX[(a >>> 24) & 0xff] << 24) |
      (SBOX[(a >>> 16) & 0xff] << 16) |
      (SBOX[(a >>> 8) & 0xff] << 8) |
      SBOX[a & 0xff]) >>>
    0
  );
}

/**
 * 线性变换（加密/解密用）
 * @param {number} b - 32比特无符号整数
 * @returns {number} 变换结果
 */
function linearTransformEnc(b) {
  return (b ^ rotl32(b, 2) ^ rotl32(b, 10) ^ rotl32(b, 18) ^ rotl32(b, 24)) >>> 0;
}

/**
 * 线性变换（密钥扩展用）
 * @param {number} b - 32比特无符号整数
 * @returns {number} 变换结果
 */
function linearTransformKey(b) {
  return (b ^ rotl32(b, 13) ^ rotl32(b, 23)) >>> 0;
}

/**
 * SM4单块加密/解密（128比特）
 * @param {Uint8Array} inputBlock - 输入块（16字节）
 * @param {Uint8Array} outputBlock - 输出块（16字节）
 * @param {Uint32Array} roundKeys - 轮密钥（32个32比特）
 */
function sm4BlockCrypt(inputBlock, outputBlock, roundKeys) {
  // 确保输入块是16字节
  if (inputBlock.length !== BLOCK_SIZE) {
    throw new Error(`Input block must be ${BLOCK_SIZE} bytes for SM4 block crypt`);
  }

  // 字节数组转32比特字数组（4个字，共128比特）
  const x = new Uint32Array(4);
  for (let i = 0; i < 4; i++) {
    const offset = 4 * i;
    x[i] =
      ((inputBlock[offset] << 24) |
        (inputBlock[offset + 1] << 16) |
        (inputBlock[offset + 2] << 8) |
        inputBlock[offset + 3]) >>>
      0;
  }

  // 32轮加密
  for (let r = 0; r < ROUND_COUNT; r += 4) {
    let mid = (x[1] ^ x[2] ^ x[3] ^ roundKeys[r]) >>> 0;
    x[0] ^= linearTransformEnc(byteSub(mid));

    mid = (x[2] ^ x[3] ^ x[0] ^ roundKeys[r + 1]) >>> 0;
    x[1] ^= linearTransformEnc(byteSub(mid));

    mid = (x[3] ^ x[0] ^ x[1] ^ roundKeys[r + 2]) >>> 0;
    x[2] ^= linearTransformEnc(byteSub(mid));

    mid = (x[0] ^ x[1] ^ x[2] ^ roundKeys[r + 3]) >>> 0;
    x[3] ^= linearTransformEnc(byteSub(mid));
  }

  // 反序输出
  for (let j = 0; j < BLOCK_SIZE; j += 4) {
    const wordIdx = 3 - j / 4;
    outputBlock[j] = (x[wordIdx] >>> 24) & 0xff;
    outputBlock[j + 1] = (x[wordIdx] >>> 16) & 0xff;
    outputBlock[j + 2] = (x[wordIdx] >>> 8) & 0xff;
    outputBlock[j + 3] = x[wordIdx] & 0xff;
  }
}

/**
 * SM4密钥扩展算法
 * @param {Uint8Array} key - 16字节密钥
 * @param {Uint32Array} roundKeys - 输出轮密钥（32个32比特）
 * @param {number} cryptFlag - ENCRYPT/DECRYPT
 */
function sm4KeyExpansion(key, roundKeys, cryptFlag) {
  // 密钥转32比特字数组
  const x = new Uint32Array(4);
  for (let i = 0; i < 4; i++) {
    const offset = 4 * i;
    x[i] = ((key[offset] << 24) | (key[offset + 1] << 16) | (key[offset + 2] << 8) | key[offset + 3]) >>> 0;
  }

  // 与系统参数异或
  x[0] ^= FK[0];
  x[1] ^= FK[1];
  x[2] ^= FK[2];
  x[3] ^= FK[3];

  // 生成轮密钥
  for (let r = 0; r < ROUND_COUNT; r += 4) {
    let mid = (x[1] ^ x[2] ^ x[3] ^ CK[r]) >>> 0;
    roundKeys[r] = x[0] ^= linearTransformKey(byteSub(mid));

    mid = (x[2] ^ x[3] ^ x[0] ^ CK[r + 1]) >>> 0;
    roundKeys[r + 1] = x[1] ^= linearTransformKey(byteSub(mid));

    mid = (x[3] ^ x[0] ^ x[1] ^ CK[r + 2]) >>> 0;
    roundKeys[r + 2] = x[2] ^= linearTransformKey(byteSub(mid));

    mid = (x[0] ^ x[1] ^ x[2] ^ CK[r + 3]) >>> 0;
    roundKeys[r + 3] = x[3] ^= linearTransformKey(byteSub(mid));
  }

  // 解密时轮密钥反序
  if (cryptFlag === DECRYPT) {
    for (let r = 0; r < 16; r++) {
      const temp = roundKeys[r];
      roundKeys[r] = roundKeys[31 - r];
      roundKeys[31 - r] = temp;
    }
  }
}

/**
 * PKCS#7填充
 * @param {Uint8Array} data - 原始数据
 * @returns {Uint8Array} 填充后的数据
 */
function pkcs7Pad(data) {
  const paddingCount = BLOCK_SIZE - (data.length % BLOCK_SIZE);
  const padded = new Uint8Array(data.length + paddingCount);
  padded.set(data);
  for (let i = 0; i < paddingCount; i++) {
    padded[data.length + i] = paddingCount & 0xff;
  }
  return padded;
}

/**
 * PKCS#7去填充
 * @param {Uint8Array} data - 填充后的数据
 * @returns {Uint8Array} 去填充后的数据
 */
function pkcs7Unpad(data) {
  const paddingCount = data[data.length - 1] & 0xff;
  // 验证填充合法性
  for (let i = 1; i <= paddingCount; i++) {
    if (data[data.length - i] !== paddingCount) {
      throw new Error("Invalid PKCS#7 padding");
    }
  }
  return data.subarray(0, data.length - paddingCount);
}

/**
 * SM4主函数
 * @param {string|Array|Uint8Array|ArrayBuffer} inputData - 输入数据
 * @param {string|Array|Uint8Array|ArrayBuffer} key - 16字节密钥
 * @param {number} cryptFlag - ENCRYPT/DECRYPT
 * @param {Object} [options] - 选项
 * @param {string} [options.mode=ecb] - 模式：ecb/cbc
 * @param {string|Array|Uint8Array|ArrayBuffer} [options.iv] - CBC模式IV（16字节）
 * @param {string} [options.padding=pkcs#7] - 填充方式：pkcs#7
 * @param {string} [options.output] - 输出格式：hex/utf8/array/uint8array/arraybuffer
 * @returns {string|Array|Uint8Array|ArrayBuffer} 输出数据
 */
function sm4Core(inputData, key, cryptFlag, options = {}) {
  // 默认参数（加密和解密默认输出都为hex，避免格式不匹配）
  const {
    mode = SM4_MODE_ECB,
    iv = [],
    padding = SM4_PADDING,
    output = SM4_OUTPUT_HEX, // 统一默认hex格式
  } = options;

  // 校验模式
  if (![SM4_MODE_ECB, SM4_MODE_CBC].includes(mode)) {
    throw new Error(`Unsupported mode: ${mode}, only 'ecb' and 'cbc' are supported`);
  }

  // 标准化输入、密钥、IV
  const input = normalizeInput(inputData, cryptFlag);
  const keyBytes = normalizeKeyIv(key, KEY_SIZE, "key");
  let ivBytes = new Uint8Array(IV_SIZE);
  if (mode === SM4_MODE_CBC) {
    ivBytes = normalizeKeyIv(iv, IV_SIZE, "IV");
  }

  // 填充（仅加密时）
  let processedInput = input;
  if (padding === SM4_PADDING && cryptFlag === ENCRYPT) {
    processedInput = pkcs7Pad(input);
    // 确保填充后是16字节的倍数
    if (processedInput.length % BLOCK_SIZE !== 0) {
      throw new Error("PKCS7 padding failed: data length is not multiple of block size");
    }
  }

  // 生成轮密钥
  const roundKeys = new Uint32Array(ROUND_COUNT);
  sm4KeyExpansion(keyBytes, roundKeys, cryptFlag);

  // 初始化输出缓冲区
  const outputData = new Uint8Array(processedInput.length);
  let lastVector = new Uint8Array(ivBytes); // CBC模式向量
  let point = 0;

  // 分块处理（严格按16字节分块）
  while (point < processedInput.length) {
    const inputBlock = processedInput.subarray(point, point + BLOCK_SIZE);
    const outputBlock = new Uint8Array(BLOCK_SIZE);

    if (mode === SM4_MODE_CBC) {
      if (cryptFlag === ENCRYPT) {
        // CBC加密：输入块与前向量异或
        const xorBlock = new Uint8Array(BLOCK_SIZE);
        for (let i = 0; i < BLOCK_SIZE; i++) {
          xorBlock[i] = (inputBlock[i] ^ lastVector[i]) & 0xff;
        }
        sm4BlockCrypt(xorBlock, outputBlock, roundKeys);
      } else {
        // CBC解密：先加密再异或
        sm4BlockCrypt(inputBlock, outputBlock, roundKeys);
        for (let i = 0; i < BLOCK_SIZE; i++) {
          outputBlock[i] = (outputBlock[i] ^ lastVector[i]) & 0xff;
        }
      }
      // 更新向量
      lastVector = cryptFlag === ENCRYPT ? outputBlock : inputBlock;
    } else {
      // ECB模式（严格调用块加密）
      sm4BlockCrypt(inputBlock, outputBlock, roundKeys);
    }

    // 写入输出
    outputData.set(outputBlock, point);
    point += BLOCK_SIZE;
  }

  // 去填充（仅解密时）
  let finalOutput = outputData;
  if (padding === SM4_PADDING && cryptFlag === DECRYPT) {
    finalOutput = pkcs7Unpad(outputData);
  }

  // 转换输出格式（解密时如果输出是utf8，先转hex再转utf8）
  if (cryptFlag === DECRYPT && output === SM4_OUTPUT_UTF8) {
    return uint8ArrayToUtf8(finalOutput);
  }

  switch (output) {
    case SM4_OUTPUT_HEX:
      return uint8ArrayToHex(finalOutput);
    case SM4_OUTPUT_ARRAY:
      return Array.from(finalOutput);
    case SM4_OUTPUT_UINT8ARRAY:
      return finalOutput;
    case SM4_OUTPUT_ARRAYBUFFER:
      return finalOutput.buffer;
    default:
      throw new Error(`Unsupported output format: ${output}`);
  }
}

// ========== 便捷API（函数式，符合设计准则） ==========
/**
 * 生成 SM4 CBC 模式专用的安全随机 IV（16字节）
 * @param {string} [outputFormat=SM4_OUTPUT_HEX] - 输出格式：hex/uint8array/array/arraybuffer
 * @returns {string|Uint8Array|Array|ArrayBuffer} 随机IV
 */
export function generateIv(outputFormat = SM4_OUTPUT_HEX) {
  // 1. 校验浏览器是否支持 crypto
  if (!window?.crypto?.getRandomValues) {
    throw new Error("Your browser does not support secure random generation (crypto API)");
  }

  // 2. 生成 16 字节安全随机数
  const ivUint8 = new Uint8Array(IV_SIZE);
  window.crypto.getRandomValues(ivUint8);

  // 3. 用导出的常量做格式判断，新增 ArrayBuffer 支持
  switch (outputFormat) {
    case SM4_OUTPUT_UINT8ARRAY:
      return ivUint8;
    case SM4_OUTPUT_ARRAY:
      return Array.from(ivUint8).map((byte) => Number(byte));
    case SM4_OUTPUT_ARRAYBUFFER: // 新增：支持 ArrayBuffer 格式
      return ivUint8.buffer;
    case SM4_OUTPUT_HEX:
    default:
      return Array.from(ivUint8)
        .map((byte) => {
          const hex = byte.toString(16);
          return hex.length === 1 ? `0${hex}` : hex;
        })
        .join("");
  }
}

/**
 * 生成 SM4 标准密钥（16字节/32位16进制字符串）
 * @param {string} [outputFormat=SM4_OUTPUT_HEX] - 输出格式：hex/uint8array/array/arraybuffer
 * @returns {string|Uint8Array|number[]|ArrayBuffer} 16字节SM4密钥
 */
export function generateKey(outputFormat = SM4_OUTPUT_HEX) {
  // 校验浏览器/Node环境的安全随机数API
  if (!window?.crypto?.getRandomValues && !global?.crypto?.getRandomValues) {
    throw new Error("当前环境不支持安全随机数生成，请升级浏览器/Node.js");
  }

  // 生成16字节随机数（SM4密钥固定16字节）
  const cryptoObj = window?.crypto || global?.crypto;
  const keyUint8 = new Uint8Array(16);
  cryptoObj.getRandomValues(keyUint8);

  // 按格式返回（用常量替代硬编码字符串，新增 ArrayBuffer 支持）
  switch (outputFormat) {
    case SM4_OUTPUT_UINT8ARRAY:
      return keyUint8;
    case SM4_OUTPUT_ARRAY:
      return Array.from(keyUint8).map((byte) => Number(byte));
    case SM4_OUTPUT_ARRAYBUFFER: // 新增：支持 ArrayBuffer 格式
      return keyUint8.buffer;
    case SM4_OUTPUT_HEX:
    default:
      return Array.from(keyUint8)
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
  }
}

/**
 * SM4加密
 * @param {string|Array|Uint8Array|ArrayBuffer} input - 输入数据（字符串/字节）
 * @param {string|Array|Uint8Array|ArrayBuffer} key - 16字节密钥
 * @param {Object} [options] - 选项
 * @returns {string|Array|Uint8Array|ArrayBuffer} 加密结果
 */
export function encrypt(input, key, options = {}) {
  return sm4Core(input, key, ENCRYPT, options);
}

/**
 * SM4解密
 * @param {string|Array|Uint8Array|ArrayBuffer} input - 加密数据（16进制字符串/字节）
 * @param {string|Array|Uint8Array|ArrayBuffer} key - 16字节密钥
 * @param {Object} [options] - 选项
 * @returns {string|Array|Uint8Array|ArrayBuffer} 解密结果
 */
export function decrypt(input, key, options = {}) {
  // 解密时如果没传output，默认按加密的output格式（hex）处理，再转utf8
  const finalOptions = {
    output: SM4_OUTPUT_UTF8, // 解密默认返回utf8字符串
    ...options,
  };
  return sm4Core(input, key, DECRYPT, finalOptions);
}
// 导出模式
export const MODE = {
  ECB: SM4_MODE_ECB,
  CBC: SM4_MODE_CBC,
};
// 导出填充
export const PADDING = SM4_PADDING;
// 导出输出模式
export const OUTPUT = {
  HEX: SM4_OUTPUT_HEX,
  UTF8: SM4_OUTPUT_UTF8,
  ARRAY: SM4_OUTPUT_ARRAY,
  UINT8ARRAY: SM4_OUTPUT_UINT8ARRAY,
  ARRAYBUFFER: SM4_OUTPUT_ARRAYBUFFER,
};
