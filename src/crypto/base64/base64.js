/*
 * base64加解密
 * 高性能、高健壮性、纯JS实现，兼容Node/浏览器/Worker
 */

// 核心常量定义
const ENCODING_ERROR = "not a UTF-8 string";
const BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
const BASE64_DECODE_CHAR = {};
for (let i = 0; i < 64; ++i) {
  BASE64_DECODE_CHAR[BASE64_ENCODE_CHAR[i]] = i;
}
// 兼容URL安全的Base64
BASE64_DECODE_CHAR["-"] = 62;
BASE64_DECODE_CHAR["_"] = 63;

// ======================== 精简版环境判断（核心场景全覆盖，保留！）========================
const isNodeEnv = typeof process === "object" && process.versions && process.versions.node;
const isBrowserEnv = typeof window === "object" && typeof window.btoa === "function";
const root = isNodeEnv ? global : typeof self === "object" ? self : window;

// ======================== 核心工具函数（全部保留，原生API更快！）========================
/**
 * 清理Base64字符串（移除等号、换行符、非法字符）
 */
const cleanBase64Str = function (base64Str) {
  return base64Str
    .split("=")[0]
    .replace(/[\r\n]/g, "")
    .replace(/[^A-Za-z0-9+/=_-]/g, ""); // 过滤非法字符
};

/**
 * UTF-8字符串转字节数组（性能优化版）
 */
const utf8ToBytes = function (str) {
  const len = str.length; // 缓存长度，减少属性访问
  const bytes = new Array(len * 4); // 预分配最大可能长度（避免频繁扩容）
  let byteIndex = 0;

  for (let i = 0; i < len; i++) {
    const c = str.charCodeAt(i);
    if (c < 0x80) {
      bytes[byteIndex++] = c;
    } else if (c < 0x800) {
      bytes[byteIndex++] = 0xc0 | (c >> 6);
      bytes[byteIndex++] = 0x80 | (c & 0x3f);
    } else if (c < 0xd800 || c >= 0xe000) {
      bytes[byteIndex++] = 0xe0 | (c >> 12);
      bytes[byteIndex++] = 0x80 | ((c >> 6) & 0x3f);
      bytes[byteIndex++] = 0x80 | (c & 0x3f);
    } else {
      // 处理代理对
      const code = 0x10000 + (((c & 0x3ff) << 10) | (str.charCodeAt(++i) & 0x3ff));
      bytes[byteIndex++] = 0xf0 | (code >> 18);
      bytes[byteIndex++] = 0x80 | ((code >> 12) & 0x3f);
      bytes[byteIndex++] = 0x80 | ((code >> 6) & 0x3f);
      bytes[byteIndex++] = 0x80 | (code & 0x3f);
    }
  }

  // 截断数组到实际长度
  return bytes.slice(0, byteIndex);
};

/**
 * Base64字符串解码为字节数组（性能优化版）
 */
const decodeAsBytes = function (base64Str) {
  // 空值快速返回
  if (!base64Str) return [];

  base64Str = cleanBase64Str(base64Str);
  const len = base64Str.length;
  const count = (len >> 2) << 2;
  // 预计算最大长度：3/4 * 总字符数，减少数组扩容
  const bytes = new Array(Math.floor((len * 3) / 4));
  let byteIndex = 0;
  let i = 0; // 把i的作用域提升到函数级，确保后续能访问

  // 4字符转3字节
  for (; i < count; ) {
    const v1 = BASE64_DECODE_CHAR[base64Str.charAt(i++)] || 0;
    const v2 = BASE64_DECODE_CHAR[base64Str.charAt(i++)] || 0;
    const v3 = BASE64_DECODE_CHAR[base64Str.charAt(i++)] || 0;
    const v4 = BASE64_DECODE_CHAR[base64Str.charAt(i++)] || 0;

    bytes[byteIndex++] = ((v1 << 2) | (v2 >>> 4)) & 255;
    bytes[byteIndex++] = ((v2 << 4) | (v3 >>> 2)) & 255;
    bytes[byteIndex++] = ((v3 << 6) | v4) & 255;
  }

  // 处理剩余字符（此时i的作用域有效）
  const remain = len - count;
  if (remain === 2) {
    const v1 = BASE64_DECODE_CHAR[base64Str.charAt(i++)] || 0;
    const v2 = BASE64_DECODE_CHAR[base64Str.charAt(i++)] || 0;
    bytes[byteIndex++] = ((v1 << 2) | (v2 >>> 4)) & 255;
  } else if (remain === 3) {
    const v1 = BASE64_DECODE_CHAR[base64Str.charAt(i++)] || 0;
    const v2 = BASE64_DECODE_CHAR[base64Str.charAt(i++)] || 0;
    const v3 = BASE64_DECODE_CHAR[base64Str.charAt(i++)] || 0;
    bytes[byteIndex++] = ((v1 << 2) | (v2 >>> 4)) & 255;
    bytes[byteIndex++] = ((v2 << 4) | (v3 >>> 2)) & 255;
  }

  // 截断数组到实际长度
  return bytes.slice(0, byteIndex);
};

/**
 * 抽离公共逻辑：字节数组转Base64字符（减少代码冗余）
 */
const bytesToBase64Chars = function (bytes) {
  const len = bytes.length;
  const count = Math.floor(len / 3) * 3;
  const base64Str = new Array(Math.ceil((len * 4) / 3)); // 预分配长度
  let strIndex = 0;

  // 3字节转4字符
  for (let i = 0; i < count; ) {
    const v1 = bytes[i++];
    const v2 = bytes[i++];
    const v3 = bytes[i++];

    base64Str[strIndex++] = BASE64_ENCODE_CHAR[v1 >>> 2];
    base64Str[strIndex++] = BASE64_ENCODE_CHAR[((v1 << 4) | (v2 >>> 4)) & 63];
    base64Str[strIndex++] = BASE64_ENCODE_CHAR[((v2 << 2) | (v3 >>> 6)) & 63];
    base64Str[strIndex++] = BASE64_ENCODE_CHAR[v3 & 63];
  }

  // 处理剩余字节
  const remain = len - count;
  if (remain === 1) {
    const v1 = bytes[count];
    base64Str[strIndex++] = BASE64_ENCODE_CHAR[v1 >>> 2];
    base64Str[strIndex++] = BASE64_ENCODE_CHAR[(v1 << 4) & 63];
    base64Str[strIndex++] = "=";
    base64Str[strIndex++] = "=";
  } else if (remain === 2) {
    const v1 = bytes[count];
    const v2 = bytes[count + 1];
    base64Str[strIndex++] = BASE64_ENCODE_CHAR[v1 >>> 2];
    base64Str[strIndex++] = BASE64_ENCODE_CHAR[((v1 << 4) | (v2 >>> 4)) & 63];
    base64Str[strIndex++] = BASE64_ENCODE_CHAR[(v2 << 2) & 63];
    base64Str[strIndex++] = "=";
  }

  return base64Str.join("");
};

/**
 * 字节数组编码为Base64字符串（复用公共逻辑）
 */
let encodeFromBytes = function (bytes) {
  // 空值快速返回
  if (!bytes || bytes.length === 0) return "";
  return bytesToBase64Chars(bytes);
};

// ======================== 环境适配的btoa/atob实现（全部保留，原生更快！）=======================
let btoa = root.btoa;
let atob = root.atob;
let utf8Base64Encode;
let utf8Base64Decode;
// 1. Node.js环境（纯JS实现，不使用require）
if (isNodeEnv) {
  // 纯JS版btoa（替代Buffer实现）
  btoa = function (str) {
    if (!str) return "";
    const bytes = Array.from(str).map((c) => c.charCodeAt(0));
    return bytesToBase64Chars(bytes);
  };

  // 纯JS版atob
  atob = function (base64Str) {
    if (!base64Str) return "";
    const bytes = decodeAsBytes(base64Str);
    return String.fromCharCode.apply(null, bytes);
  };

  // 纯JS版UTF8编码/解码（和浏览器环境保持一致）
  utf8Base64Encode = function (str) {
    if (!str) return "";
    const bytes = utf8ToBytes(str);
    return bytesToBase64Chars(bytes);
  };

  utf8Base64Decode = function (base64Str) {
    if (!base64Str) return "";

    const bytes = decodeAsBytes(base64Str);
    const str = [];
    const len = bytes.length;
    let i = 0;

    while (i < len) {
      const b = bytes[i++];
      if (b <= 0x7f) {
        str.push(String.fromCharCode(b));
        continue;
      }

      let c, followingChars;
      if (b > 0xbf && b <= 0xdf) {
        c = b & 0x1f;
        followingChars = 1;
      } else if (b <= 0xef) {
        c = b & 0x0f;
        followingChars = 2;
      } else if (b <= 0xf7) {
        c = b & 0x07;
        followingChars = 3;
      } else {
        throw new Error(ENCODING_ERROR);
      }

      // 校验后续字节合法性
      for (let j = 0; j < followingChars; ++j) {
        const byte = bytes[i++];
        if (i > len || byte < 0x80 || byte > 0xbf) {
          throw new Error(ENCODING_ERROR);
        }
        c = (c << 6) + (byte & 0x3f);
      }

      // 校验Unicode范围
      if (c >= 0xd800 && c <= 0xdfff) throw new Error(ENCODING_ERROR);
      if (c > 0x10ffff) throw new Error(ENCODING_ERROR);

      // 转换为字符
      if (c <= 0xffff) {
        str.push(String.fromCharCode(c));
      } else {
        c -= 0x10000;
        str.push(String.fromCharCode((c >> 10) + 0xd800), String.fromCharCode((c & 0x3ff) + 0xdc00));
      }
    }

    return str.join("");
  };

  // 2. 无原生btoa/atob的环境（老旧浏览器/Worker）
} else if (!isBrowserEnv) {
  // 纯JS版btoa（复用公共逻辑）
  btoa = function (str) {
    if (!str) return "";
    const bytes = Array.from(str).map((c) => c.charCodeAt(0));
    return bytesToBase64Chars(bytes);
  };

  // 纯JS版atob
  atob = function (base64Str) {
    if (!base64Str) return "";
    const bytes = decodeAsBytes(base64Str);
    return String.fromCharCode.apply(null, bytes);
  };

  // 纯JS版UTF8编码/解码
  utf8Base64Encode = function (str) {
    if (!str) return "";
    const bytes = utf8ToBytes(str);
    return bytesToBase64Chars(bytes);
  };

  utf8Base64Decode = function (base64Str) {
    if (!base64Str) return "";

    const bytes = decodeAsBytes(base64Str);
    const str = [];
    const len = bytes.length;
    let i = 0;

    while (i < len) {
      const b = bytes[i++];
      if (b <= 0x7f) {
        str.push(String.fromCharCode(b));
        continue;
      }

      let c, followingChars;
      if (b > 0xbf && b <= 0xdf) {
        c = b & 0x1f;
        followingChars = 1;
      } else if (b <= 0xef) {
        c = b & 0x0f;
        followingChars = 2;
      } else if (b <= 0xf7) {
        c = b & 0x07;
        followingChars = 3;
      } else {
        throw new Error(ENCODING_ERROR);
      }

      // 校验后续字节合法性
      for (let j = 0; j < followingChars; ++j) {
        const byte = bytes[i++];
        if (i > len || byte < 0x80 || byte > 0xbf) {
          throw new Error(ENCODING_ERROR);
        }
        c = (c << 6) + (byte & 0x3f);
      }

      // 校验Unicode范围
      if (c >= 0xd800 && c <= 0xdfff) throw new Error(ENCODING_ERROR);
      if (c > 0x10ffff) throw new Error(ENCODING_ERROR);

      // 转换为字符
      if (c <= 0xffff) {
        str.push(String.fromCharCode(c));
      } else {
        c -= 0x10000;
        str.push(String.fromCharCode((c >> 10) + 0xd800), String.fromCharCode((c & 0x3ff) + 0xdc00));
      }
    }

    return str.join("");
  };

  // 3. 浏览器原生支持btoa/atob
} else {
  utf8Base64Encode = function (str) {
    if (!str) return "";

    const result = [];
    const len = str.length;
    for (let i = 0; i < len; i++) {
      const charcode = str.charCodeAt(i);
      if (charcode < 0x80) {
        result.push(String.fromCharCode(charcode));
      } else if (charcode < 0x800) {
        result.push(String.fromCharCode(0xc0 | (charcode >> 6)), String.fromCharCode(0x80 | (charcode & 0x3f)));
      } else if (charcode < 0xd800 || charcode >= 0xe000) {
        result.push(
          String.fromCharCode(0xe0 | (charcode >> 12)),
          String.fromCharCode(0x80 | ((charcode >> 6) & 0x3f)),
          String.fromCharCode(0x80 | (charcode & 0x3f)),
        );
      } else {
        const code = 0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(++i) & 0x3ff));
        result.push(
          String.fromCharCode(0xf0 | (code >> 18)),
          String.fromCharCode(0x80 | ((code >> 12) & 0x3f)),
          String.fromCharCode(0x80 | ((code >> 6) & 0x3f)),
          String.fromCharCode(0x80 | (code & 0x3f)),
        );
      }
    }
    return btoa(result.join(""));
  };

  utf8Base64Decode = function (base64Str) {
    if (!base64Str) return "";

    const tmpStr = atob(base64Str.replace(/-/g, "+").replace(/_/g, "/"));
    // 替换Unicode转义，避免ESLint控制字符警告
    // eslint-disable-next-line no-control-regex
    if (!/[^\u0000-\u007F]/.test(tmpStr)) {
      return tmpStr;
    }

    const str = [];
    const len = tmpStr.length;
    let i = 0;

    while (i < len) {
      const b = tmpStr.charCodeAt(i++);
      if (b <= 0x7f) {
        str.push(String.fromCharCode(b));
        continue;
      }

      let c, followingChars;
      if (b > 0xbf && b <= 0xdf) {
        c = b & 0x1f;
        followingChars = 1;
      } else if (b <= 0xef) {
        c = b & 0x0f;
        followingChars = 2;
      } else if (b <= 0xf7) {
        c = b & 0x07;
        followingChars = 3;
      } else {
        throw new Error(ENCODING_ERROR);
      }

      for (let j = 0; j < followingChars; ++j) {
        const byte = tmpStr.charCodeAt(i++);
        if (i > len || byte < 0x80 || byte > 0xbf) throw new Error(ENCODING_ERROR);
        c = (c << 6) + (byte & 0x3f);
      }

      if (c >= 0xd800 && c <= 0xdfff) throw new Error(ENCODING_ERROR);
      if (c > 0x10ffff) throw new Error(ENCODING_ERROR);

      if (c <= 0xffff) {
        str.push(String.fromCharCode(c));
      } else {
        c -= 0x10000;
        str.push(String.fromCharCode((c >> 10) + 0xd800), String.fromCharCode((c & 0x3ff) + 0xdc00));
      }
    }

    return str.join("");
  };
}

// ======================== 类型转换工具函数（全部保留）========================
/**
 * Uint8Array转Base64字符串
 * @param {Uint8Array} uint8Array 字节数组
 * @param {boolean} [urlSafe=false] 是否URL安全
 * @returns {string} Base64字符串
 */
export const fromUint8Array = function (uint8Array, urlSafe = false) {
  if (!(uint8Array instanceof Uint8Array)) {
    throw new TypeError("fromUint8Array方法仅支持Uint8Array输入");
  }
  const bytes = Array.from(uint8Array);
  let result = bytesToBase64Chars(bytes);
  if (urlSafe) {
    result = result.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
  return result;
};

/**
 * Base64字符串转Uint8Array
 * @param {string} base64Str Base64字符串
 * @param {boolean} [urlSafe=false] 是否URL安全
 * @returns {Uint8Array} 字节数组
 */
export const toUint8Array = function (base64Str, urlSafe = false) {
  if (typeof base64Str !== "string") {
    throw new TypeError("toUint8Array方法仅支持字符串输入");
  }
  // 处理URL安全字符
  if (urlSafe) {
    base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
  }
  const bytes = decodeAsBytes(base64Str);
  return new Uint8Array(bytes);
};

/**
 * 十六进制字符串转Base64字符串
 * @param {string} hexStr 十六进制字符串
 * @param {boolean} [urlSafe=false] 是否URL安全
 * @returns {string} Base64字符串
 */
export const fromHex = function (hexStr, urlSafe = false) {
  if (typeof hexStr !== "string" || !/^[0-9a-fA-F]+$/.test(hexStr)) {
    throw new TypeError("fromHex方法仅支持十六进制字符串输入");
  }
  // 补全偶数长度
  const str = hexStr.length % 2 ? `0${hexStr}` : hexStr;
  const bytes = new Array(str.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(str.substr(i * 2, 2), 16);
  }
  let result = bytesToBase64Chars(bytes);
  if (urlSafe) {
    result = result.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
  return result;
};

/**
 * Base64字符串转十六进制字符串
 * @param {string} base64Str Base64字符串
 * @param {boolean} [urlSafe=false] 是否URL安全
 * @returns {string} 十六进制字符串
 */
export const toHex = function (base64Str, urlSafe = false) {
  if (typeof base64Str !== "string") {
    throw new TypeError("toHex方法仅支持字符串输入");
  }
  // 处理URL安全字符
  if (urlSafe) {
    base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
  }
  const bytes = decodeAsBytes(base64Str);
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

// ======================== 核心方法（仅删除asciiOnly开关，默认UTF8）========================
/**
 * Base64编码（高性能、高健壮性版，默认UTF8）
 * @param {string | number[] | Uint8Array | ArrayBuffer} data 待编码数据
 * @param {boolean} [urlSafe=false] 是否生成URL安全的Base64
 * @returns {string} Base64字符串
 */
export const encode = function (data, urlSafe = false) {
  // 空值快速返回
  if (data == null) return "";

  const notString = typeof data !== "string";
  let result = "";

  if (notString) {
    // 处理ArrayBuffer
    if (data.constructor === root.ArrayBuffer) {
      data = new Uint8Array(data);
    }
    // 处理字节数组/Uint8Array
    result = encodeFromBytes(data);
  } else {
    // 空字符串快速返回
    if (data === "") return "";
    // 强制走UTF8编码（删掉asciiOnly判断，直接用utf8Base64Encode）
    result = utf8Base64Encode(data);
  }

  // URL安全处理：替换+->-，/->_，去掉=
  if (urlSafe) {
    result = result.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }

  return result;
};

/**
 * Base64解码（高性能、高健壮性版，默认UTF8）
 * @param {string} base64Str 待解码的Base64字符串
 * @returns {string} 解码后的UTF8字符串
 */
export const decode = function (base64Str) {
  // 空值快速返回
  if (base64Str == null || base64Str === "") return "";

  // 处理URL安全的Base64
  base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
  base64Str = cleanBase64Str(base64Str);

  // 强制走UTF8解码（删掉asciiOnly判断，直接用utf8Base64Decode）
  return utf8Base64Decode(base64Str);
};

// ======================== URL安全专用方法（同步删除asciiOnly开关）========================
/**
 * URL安全Base64编码（专用方法，等价于encode(data, true)）
 * @param {string | number[] | Uint8Array | ArrayBuffer} data 待编码数据
 * @returns {string} URL安全的Base64字符串
 */
export const encodeURI = function (data) {
  return encode(data, true);
};

/**
 * URL安全Base64解码（专用方法，兼容URL安全字符）
 * @param {string} base64Str URL安全的Base64字符串
 * @returns {string} 解码后的UTF8字符串
 */
export const decodeURI = function (base64Str) {
  return decode(base64Str);
};
