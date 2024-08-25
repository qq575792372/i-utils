// 消息扩展
const W = new Uint32Array(68);
const M = new Uint32Array(64);

/**
 * 循环左移
 */
function rotl(x, n) {
  const s = n & 31;
  return (x << s) | (x >>> (32 - s));
}

/**
 * 二进制异或运算
 */
function xor(x, y) {
  const result = [];
  for (let i = x.length - 1; i >= 0; i--) result[i] = (x[i] ^ y[i]) & 0xff;
  return result;
}

/**
 * 压缩函数中的置换函数 P0(X) = X xor (X <<< 9) xor (X <<< 17)
 */
function P0(X) {
  return X ^ rotl(X, 9) ^ rotl(X, 17);
}

/**
 * 消息扩展中的置换函数 P1(X) = X xor (X <<< 15) xor (X <<< 23)
 */
function P1(X) {
  return X ^ rotl(X, 15) ^ rotl(X, 23);
}

/**
 * sm3 本体
 */
function sm3(array) {}

/**
 * hmac 实现
 */
const blockLen = 64;
const iPad = new Uint8Array(blockLen);
const oPad = new Uint8Array(blockLen);
for (let i = 0; i < blockLen; i++) {
  iPad[i] = 0x36;
  oPad[i] = 0x5c;
}

function hmac(input, key) {}

/**
 * 补全16进制字符串
 */
function leftPad(input, num) {
  if (input.length >= num) return input;

  return new Array(num - input.length + 1).join("0") + input;
}

/**
 * 字节数组转 16 进制串
 */
function ArrayToHex(arr) {
  return arr
    .map((item) => {
      item = item.toString(16);
      return item.length === 1 ? "0" + item : item;
    })
    .join("");
}

/**
 * 转成字节数组
 */
function hexToArray(hexStr) {
  const words = [];
  let hexStrLength = hexStr.length;

  if (hexStrLength % 2 !== 0) {
    hexStr = leftPad(hexStr, hexStrLength + 1);
  }

  hexStrLength = hexStr.length;

  for (let i = 0; i < hexStrLength; i += 2) {
    words.push(parseInt(hexStr.substr(i, 2), 16));
  }
  return words;
}

/**
 * utf8 串转字节数组
 */
function utf8ToArray(str) {
  const arr = [];

  for (let i = 0, len = str.length; i < len; i++) {
    const point = str.codePointAt(i);

    if (point <= 0x007f) {
      // 单字节，标量值：00000000 00000000 0zzzzzzz
      arr.push(point);
    } else if (point <= 0x07ff) {
      // 双字节，标量值：00000000 00000yyy yyzzzzzz
      arr.push(0xc0 | (point >>> 6)); // 110yyyyy（0xc0-0xdf）
      arr.push(0x80 | (point & 0x3f)); // 10zzzzzz（0x80-0xbf）
    } else if (point <= 0xd7ff || (point >= 0xe000 && point <= 0xffff)) {
      // 三字节：标量值：00000000 xxxxyyyy yyzzzzzz
      arr.push(0xe0 | (point >>> 12)); // 1110xxxx（0xe0-0xef）
      arr.push(0x80 | ((point >>> 6) & 0x3f)); // 10yyyyyy（0x80-0xbf）
      arr.push(0x80 | (point & 0x3f)); // 10zzzzzz（0x80-0xbf）
    } else if (point >= 0x010000 && point <= 0x10ffff) {
      // 四字节：标量值：000wwwxx xxxxyyyy yyzzzzzz
      i++;
      arr.push(0xf0 | ((point >>> 18) & 0x1c)); // 11110www（0xf0-0xf7）
      arr.push(0x80 | ((point >>> 12) & 0x3f)); // 10xxxxxx（0x80-0xbf）
      arr.push(0x80 | ((point >>> 6) & 0x3f)); // 10yyyyyy（0x80-0xbf）
      arr.push(0x80 | (point & 0x3f)); // 10zzzzzz（0x80-0xbf）
    } else {
      // 五、六字节，暂时不支持
      arr.push(point);
      throw new Error("input is not supported");
    }
  }

  return arr;
}

/* 以下是内部实现需要的es模块化导出方法 */
export default function (input, options) {
  input = typeof input === "string" ? utf8ToArray(input) : Array.prototype.slice.call(input);

  if (options) {
    const mode = options.mode || "hmac";
    if (mode !== "hmac") throw new Error("invalid mode");

    let key = options.key;
    if (!key) throw new Error("invalid key");

    key = typeof key === "string" ? hexToArray(key) : Array.prototype.slice.call(key);
    return ArrayToHex(hmac(input, key));
  }

  return ArrayToHex(sm3(input));
}
export { sm3 };
