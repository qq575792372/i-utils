/**
 * SM3 纯函数式实现（无类、无实例，闭包隔离状态）
 */

// 全局常量（只读，无状态）
const BLOCK_LENGTH = 64;
const IPAD = new Uint8Array(BLOCK_LENGTH).fill(0x36);
const OPAD = new Uint8Array(BLOCK_LENGTH).fill(0x5c);
const IV = new Uint32Array([
  0x7380166f, 0x4914b2b9, 0x172442d7, 0xda8a0600, 0xa96f30bc, 0x163138aa, 0xe38dee4d, 0xb0fb0e4e,
]);

// 纯函数：循环左移
function rotl(x, n) {
  const s = n & 31;
  return (x << s) | (x >>> (32 - s));
}

// 纯函数：字节数组异或
function xor(x, y) {
  const result = [];
  for (let i = x.length - 1; i >= 0; i--) {
    result[i] = (x[i] ^ y[i]) & 0xff;
  }
  return result;
}

// 纯函数：置换函数 P0
function P0(X) {
  return X ^ rotl(X, 9) ^ rotl(X, 17);
}

// 纯函数：置换函数 P1
function P1(X) {
  return X ^ rotl(X, 15) ^ rotl(X, 23);
}

// 纯函数：补全16进制字符串
function leftPad(input, num) {
  if (input.length >= num) return input;
  return new Array(num - input.length + 1).join("0") + input;
}

// 纯函数：字节数组转16进制
function arrayToHex(arr) {
  return arr
    .map((item) => {
      item = item.toString(16);
      return item.length === 1 ? "0" + item : item;
    })
    .join("");
}

// 纯函数：16进制转字节数组
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

// 纯函数：UTF8转字节数组
function utf8ToArray(str) {
  const arr = [];
  for (let i = 0, len = str.length; i < len; i++) {
    const point = str.codePointAt(i);
    if (point <= 0x007f) {
      arr.push(point);
    } else if (point <= 0x07ff) {
      arr.push(0xc0 | (point >>> 6));
      arr.push(0x80 | (point & 0x3f));
    } else if (point <= 0xd7ff || (point >= 0xe000 && point <= 0xffff)) {
      arr.push(0xe0 | (point >>> 12));
      arr.push(0x80 | ((point >>> 6) & 0x3f));
      arr.push(0x80 | (point & 0x3f));
    } else if (point >= 0x010000 && point <= 0x10ffff) {
      i++;
      arr.push(0xf0 | ((point >>> 18) & 0x1c));
      arr.push(0x80 | ((point >>> 12) & 0x3f));
      arr.push(0x80 | ((point >>> 6) & 0x3f));
      arr.push(0x80 | (point & 0x3f));
    } else {
      arr.push(point);
      throw new TypeError("utf8ToArray: input is not supported in sm3");
    }
  }
  return arr;
}

// 核心纯函数：SM3哈希计算（闭包隔离状态）
function sm3Core(array) {
  // 每次调用都创建全新的局部状态（隔离关键）
  let len = array.length * 8;
  let k = len % 512;
  k = k >= 448 ? 512 - (k % 448) - 1 : 448 - k - 1;
  const kArr = new Array((k - 7) / 8).fill(0);
  const lenArr = new Array(8).fill(0);
  let lenBin = len.toString(2);
  for (let i = 7; i >= 0; i--) {
    if (lenBin.length > 8) {
      const start = lenBin.length - 8;
      lenArr[i] = parseInt(lenBin.substr(start), 2);
      lenBin = lenBin.substr(0, start);
    } else if (lenBin.length > 0) {
      lenArr[i] = parseInt(lenBin, 2);
      lenBin = "";
    }
  }
  const m = new Uint8Array([...array, 0x80, ...kArr, ...lenArr]);
  const dataView = new DataView(m.buffer, 0);
  const n = m.length / 64;
  const V = new Uint32Array(IV); // 全新初始向量（每次调用重新创建）
  const W = new Uint32Array(68); // 全新消息扩展数组
  const M = new Uint32Array(64); // 全新W'数组

  // 以下计算逻辑和原代码一致，仅操作局部变量
  for (let i = 0; i < n; i++) {
    W.fill(0);
    M.fill(0);
    const start = 16 * i;
    for (let j = 0; j < 16; j++) {
      W[j] = dataView.getUint32((start + j) * 4, false);
    }
    for (let j = 16; j < 68; j++) {
      W[j] = P1(W[j - 16] ^ W[j - 9] ^ rotl(W[j - 3], 15)) ^ rotl(W[j - 13], 7) ^ W[j - 6];
    }
    for (let j = 0; j < 64; j++) {
      M[j] = W[j] ^ W[j + 4];
    }
    const T1 = 0x79cc4519;
    const T2 = 0x7a879d8a;
    let A = V[0],
      B = V[1],
      C = V[2],
      D = V[3];
    let E = V[4],
      F = V[5],
      G = V[6],
      H = V[7];
    let SS1, SS2, TT1, TT2, T;

    for (let j = 0; j < 64; j++) {
      T = j <= 15 ? T1 : T2;
      SS1 = rotl((rotl(A, 12) + E + rotl(T, j)) & 0xffffffff, 7);
      SS2 = SS1 ^ rotl(A, 12);
      const FFj = j <= 15 ? A ^ B ^ C : (A & B) | (A & C) | (B & C);
      const GGj = j <= 15 ? E ^ F ^ G : (E & F) | (~E & G);
      TT1 = (FFj + D + SS2 + M[j]) & 0xffffffff;
      TT2 = (GGj + H + SS1 + W[j]) & 0xffffffff;

      D = C;
      C = rotl(B, 9);
      B = A;
      A = TT1;
      H = G;
      G = rotl(F, 19);
      F = E;
      E = P0(TT2);
    }
    V[0] ^= A;
    V[1] ^= B;
    V[2] ^= C;
    V[3] ^= D;
    V[4] ^= E;
    V[5] ^= F;
    V[6] ^= G;
    V[7] ^= H;
  }
  const result = [];
  for (let i = 0; i < V.length; i++) {
    result.push((V[i] & 0xff000000) >>> 24, (V[i] & 0xff0000) >>> 16, (V[i] & 0xff00) >>> 8, V[i] & 0xff);
  }
  return result;
}

// 纯函数：HMAC-SM3计算
function encryptHmac(input, key) {
  let processedKey = key.length > BLOCK_LENGTH ? sm3Core(key) : [...key];
  while (processedKey.length < BLOCK_LENGTH) {
    processedKey.push(0);
  }
  const iPadKey = xor(processedKey, IPAD);
  const oPadKey = xor(processedKey, OPAD);
  const innerHash = sm3Core([...iPadKey, ...input]);
  return sm3Core([...oPadKey, ...innerHash]);
}

// 对外暴露的核心函数（兼容原调用方式）
function encrypt(input, key) {
  const inputArr = typeof input === "string" ? utf8ToArray(input) : Array.prototype.slice.call(input);

  if (!key) {
    const hashArr = sm3Core(inputArr);
    return arrayToHex(hashArr);
  } else {
    const keyArr =
      typeof key === "string"
        ? /^[0-9a-fA-F]+$/.test(key)
          ? hexToArray(key)
          : utf8ToArray(key)
        : Array.prototype.slice.call(key);
    const hmacArr = encryptHmac(inputArr, keyArr);
    return arrayToHex(hmacArr);
  }
}

/* 以下是内部实现需要的es模块化导出方法 */
export { encrypt, encryptHmac as encrypt_hmac };
