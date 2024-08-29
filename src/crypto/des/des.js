import { encode, decode } from "../base64/index.js";

/**
 * 使用方法
 * 实例化对象 new Des()
 * 加密方法 encrypt(key,plaintext)
 * 解密方法 decrypt(key,ciphertext)
 * 示例---------------------------------------------------
 * var Des = new Des();
 * var key = 'custom key';
 * var value = '需要加密的内容'
 * var ciphertext = encrypt(key,value);//加密
 * var plaintext = encrypt(key,ciphertext);//解密
 */
function Des(key, value) {
  this.key = key;
  this.value = value;
}

/**
 * @param {String} key 密钥
 * @param {String} value 内容
 * @param {String} type 类型 ->encrypt加密|decrypt解密
 */
Des.prototype._DesCreate = function (key, value, type) {
  var message = value;
  if (type === "decrypt") {
    var requestValue = "";
    for (var i = value.substr(0, 2) == "0x" ? 2 : 0; i < value.length; i += 2) {
      requestValue += String.fromCharCode(parseInt(value.substr(i, 2), 16));
    }
    message = requestValue;
  }
  var spfunction1 = new Array(
    0x1010400,
    0,
    0x10000,
    0x1010404,
    0x1010004,
    0x10404,
    0x4,
    0x10000,
    0x400,
    0x1010400,
    0x1010404,
    0x400,
    0x1000404,
    0x1010004,
    0x1000000,
    0x4,
    0x404,
    0x1000400,
    0x1000400,
    0x10400,
    0x10400,
    0x1010000,
    0x1010000,
    0x1000404,
    0x10004,
    0x1000004,
    0x1000004,
    0x10004,
    0,
    0x404,
    0x10404,
    0x1000000,
    0x10000,
    0x1010404,
    0x4,
    0x1010000,
    0x1010400,
    0x1000000,
    0x1000000,
    0x400,
    0x1010004,
    0x10000,
    0x10400,
    0x1000004,
    0x400,
    0x4,
    0x1000404,
    0x10404,
    0x1010404,
    0x10004,
    0x1010000,
    0x1000404,
    0x1000004,
    0x404,
    0x10404,
    0x1010400,
    0x404,
    0x1000400,
    0x1000400,
    0,
    0x10004,
    0x10400,
    0,
    0x1010004,
  );
  var spfunction2 = new Array(
    -0x7fef7fe0,
    -0x7fff8000,
    0x8000,
    0x108020,
    0x100000,
    0x20,
    -0x7fefffe0,
    -0x7fff7fe0,
    -0x7fffffe0,
    -0x7fef7fe0,
    -0x7fef8000,
    -0x80000000,
    -0x7fff8000,
    0x100000,
    0x20,
    -0x7fefffe0,
    0x108000,
    0x100020,
    -0x7fff7fe0,
    0,
    -0x80000000,
    0x8000,
    0x108020,
    -0x7ff00000,
    0x100020,
    -0x7fffffe0,
    0,
    0x108000,
    0x8020,
    -0x7fef8000,
    -0x7ff00000,
    0x8020,
    0,
    0x108020,
    -0x7fefffe0,
    0x100000,
    -0x7fff7fe0,
    -0x7ff00000,
    -0x7fef8000,
    0x8000,
    -0x7ff00000,
    -0x7fff8000,
    0x20,
    -0x7fef7fe0,
    0x108020,
    0x20,
    0x8000,
    -0x80000000,
    0x8020,
    -0x7fef8000,
    0x100000,
    -0x7fffffe0,
    0x100020,
    -0x7fff7fe0,
    -0x7fffffe0,
    0x100020,
    0x108000,
    0,
    -0x7fff8000,
    0x8020,
    -0x80000000,
    -0x7fefffe0,
    -0x7fef7fe0,
    0x108000,
  );
  var spfunction3 = new Array(
    0x208,
    0x8020200,
    0,
    0x8020008,
    0x8000200,
    0,
    0x20208,
    0x8000200,
    0x20008,
    0x8000008,
    0x8000008,
    0x20000,
    0x8020208,
    0x20008,
    0x8020000,
    0x208,
    0x8000000,
    0x8,
    0x8020200,
    0x200,
    0x20200,
    0x8020000,
    0x8020008,
    0x20208,
    0x8000208,
    0x20200,
    0x20000,
    0x8000208,
    0x8,
    0x8020208,
    0x200,
    0x8000000,
    0x8020200,
    0x8000000,
    0x20008,
    0x208,
    0x20000,
    0x8020200,
    0x8000200,
    0,
    0x200,
    0x20008,
    0x8020208,
    0x8000200,
    0x8000008,
    0x200,
    0,
    0x8020008,
    0x8000208,
    0x20000,
    0x8000000,
    0x8020208,
    0x8,
    0x20208,
    0x20200,
    0x8000008,
    0x8020000,
    0x8000208,
    0x208,
    0x8020000,
    0x20208,
    0x8,
    0x8020008,
    0x20200,
  );
  var spfunction4 = new Array(
    0x802001,
    0x2081,
    0x2081,
    0x80,
    0x802080,
    0x800081,
    0x800001,
    0x2001,
    0,
    0x802000,
    0x802000,
    0x802081,
    0x81,
    0,
    0x800080,
    0x800001,
    0x1,
    0x2000,
    0x800000,
    0x802001,
    0x80,
    0x800000,
    0x2001,
    0x2080,
    0x800081,
    0x1,
    0x2080,
    0x800080,
    0x2000,
    0x802080,
    0x802081,
    0x81,
    0x800080,
    0x800001,
    0x802000,
    0x802081,
    0x81,
    0,
    0,
    0x802000,
    0x2080,
    0x800080,
    0x800081,
    0x1,
    0x802001,
    0x2081,
    0x2081,
    0x80,
    0x802081,
    0x81,
    0x1,
    0x2000,
    0x800001,
    0x2001,
    0x802080,
    0x800081,
    0x2001,
    0x2080,
    0x800000,
    0x802001,
    0x80,
    0x800000,
    0x2000,
    0x802080,
  );
  var spfunction5 = new Array(
    0x100,
    0x2080100,
    0x2080000,
    0x42000100,
    0x80000,
    0x100,
    0x40000000,
    0x2080000,
    0x40080100,
    0x80000,
    0x2000100,
    0x40080100,
    0x42000100,
    0x42080000,
    0x80100,
    0x40000000,
    0x2000000,
    0x40080000,
    0x40080000,
    0,
    0x40000100,
    0x42080100,
    0x42080100,
    0x2000100,
    0x42080000,
    0x40000100,
    0,
    0x42000000,
    0x2080100,
    0x2000000,
    0x42000000,
    0x80100,
    0x80000,
    0x42000100,
    0x100,
    0x2000000,
    0x40000000,
    0x2080000,
    0x42000100,
    0x40080100,
    0x2000100,
    0x40000000,
    0x42080000,
    0x2080100,
    0x40080100,
    0x100,
    0x2000000,
    0x42080000,
    0x42080100,
    0x80100,
    0x42000000,
    0x42080100,
    0x2080000,
    0,
    0x40080000,
    0x42000000,
    0x80100,
    0x2000100,
    0x40000100,
    0x80000,
    0,
    0x40080000,
    0x2080100,
    0x40000100,
  );
  var spfunction6 = new Array(
    0x20000010,
    0x20400000,
    0x4000,
    0x20404010,
    0x20400000,
    0x10,
    0x20404010,
    0x400000,
    0x20004000,
    0x404010,
    0x400000,
    0x20000010,
    0x400010,
    0x20004000,
    0x20000000,
    0x4010,
    0,
    0x400010,
    0x20004010,
    0x4000,
    0x404000,
    0x20004010,
    0x10,
    0x20400010,
    0x20400010,
    0,
    0x404010,
    0x20404000,
    0x4010,
    0x404000,
    0x20404000,
    0x20000000,
    0x20004000,
    0x10,
    0x20400010,
    0x404000,
    0x20404010,
    0x400000,
    0x4010,
    0x20000010,
    0x400000,
    0x20004000,
    0x20000000,
    0x4010,
    0x20000010,
    0x20404010,
    0x404000,
    0x20400000,
    0x404010,
    0x20404000,
    0,
    0x20400010,
    0x10,
    0x4000,
    0x20400000,
    0x404010,
    0x4000,
    0x400010,
    0x20004010,
    0,
    0x20404000,
    0x20000000,
    0x400010,
    0x20004010,
  );
  var spfunction7 = new Array(
    0x200000,
    0x4200002,
    0x4000802,
    0,
    0x800,
    0x4000802,
    0x200802,
    0x4200800,
    0x4200802,
    0x200000,
    0,
    0x4000002,
    0x2,
    0x4000000,
    0x4200002,
    0x802,
    0x4000800,
    0x200802,
    0x200002,
    0x4000800,
    0x4000002,
    0x4200000,
    0x4200800,
    0x200002,
    0x4200000,
    0x800,
    0x802,
    0x4200802,
    0x200800,
    0x2,
    0x4000000,
    0x200800,
    0x4000000,
    0x200800,
    0x200000,
    0x4000802,
    0x4000802,
    0x4200002,
    0x4200002,
    0x2,
    0x200002,
    0x4000000,
    0x4000800,
    0x200000,
    0x4200800,
    0x802,
    0x200802,
    0x4200800,
    0x802,
    0x4000002,
    0x4200802,
    0x4200000,
    0x200800,
    0,
    0x2,
    0x4200802,
    0,
    0x200802,
    0x4200000,
    0x800,
    0x4000002,
    0x4000800,
    0x800,
    0x200002,
  );
  var spfunction8 = new Array(
    0x10001040,
    0x1000,
    0x40000,
    0x10041040,
    0x10000000,
    0x10001040,
    0x40,
    0x10000000,
    0x40040,
    0x10040000,
    0x10041040,
    0x41000,
    0x10041000,
    0x41040,
    0x1000,
    0x40,
    0x10040000,
    0x10000040,
    0x10001000,
    0x1040,
    0x41000,
    0x40040,
    0x10040040,
    0x10041000,
    0x1040,
    0,
    0,
    0x10040040,
    0x10000040,
    0x10001000,
    0x41040,
    0x40000,
    0x41040,
    0x40000,
    0x10041000,
    0x1000,
    0x40,
    0x10040040,
    0x1000,
    0x41040,
    0x10001000,
    0x40,
    0x10000040,
    0x10040000,
    0x10040040,
    0x10000000,
    0x40000,
    0x10001040,
    0,
    0x10041040,
    0x40040,
    0x10000040,
    0x10040000,
    0x10001000,
    0x10001040,
    0,
    0x10041040,
    0x41000,
    0x41000,
    0x1040,
    0x1040,
    0x40040,
    0x10000000,
    0x10041000,
  );

  var keys = this._DesCreateKeys(key);
  var m = 0,
    i,
    j,
    temp,
    right1,
    right2,
    left,
    right,
    looping;
  var endloop, loopinc;
  var len = message.length;
  var chunk = 0;

  var iterations = keys.length == 32 ? 3 : 9;
  if (iterations == 3) {
    looping = type === "encrypt" ? new Array(0, 32, 2) : new Array(30, -2, -2);
  } else {
    looping =
      type === "encrypt" ? new Array(0, 32, 2, 62, 30, -2, 64, 96, 2) : new Array(94, 62, -2, 32, 64, 2, 30, -2, -2);
  }
  var result = "";
  var tempresult = "";
  while (m < len) {
    left =
      (message.charCodeAt(m++) << 24) |
      (message.charCodeAt(m++) << 16) |
      (message.charCodeAt(m++) << 8) |
      message.charCodeAt(m++);
    right =
      (message.charCodeAt(m++) << 24) |
      (message.charCodeAt(m++) << 16) |
      (message.charCodeAt(m++) << 8) |
      message.charCodeAt(m++);

    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
    right ^= temp;
    left ^= temp << 4;
    temp = ((left >>> 16) ^ right) & 0x0000ffff;
    right ^= temp;
    left ^= temp << 16;
    temp = ((right >>> 2) ^ left) & 0x33333333;
    left ^= temp;
    right ^= temp << 2;
    temp = ((right >>> 8) ^ left) & 0x00ff00ff;
    left ^= temp;
    right ^= temp << 8;
    temp = ((left >>> 1) ^ right) & 0x55555555;
    right ^= temp;
    left ^= temp << 1;

    left = (left << 1) | (left >>> 31);
    right = (right << 1) | (right >>> 31);

    for (j = 0; j < iterations; j += 3) {
      endloop = looping[j + 1];
      loopinc = looping[j + 2];
      for (i = looping[j]; i != endloop; i += loopinc) {
        right1 = right ^ keys[i];
        right2 = ((right >>> 4) | (right << 28)) ^ keys[i + 1];
        temp = left;
        left = right;
        right =
          temp ^
          (spfunction2[(right1 >>> 24) & 0x3f] |
            spfunction4[(right1 >>> 16) & 0x3f] |
            spfunction6[(right1 >>> 8) & 0x3f] |
            spfunction8[right1 & 0x3f] |
            spfunction1[(right2 >>> 24) & 0x3f] |
            spfunction3[(right2 >>> 16) & 0x3f] |
            spfunction5[(right2 >>> 8) & 0x3f] |
            spfunction7[right2 & 0x3f]);
      }
      temp = left;
      left = right;
      right = temp;
    }

    left = (left >>> 1) | (left << 31);
    right = (right >>> 1) | (right << 31);

    temp = ((left >>> 1) ^ right) & 0x55555555;
    right ^= temp;
    left ^= temp << 1;
    temp = ((right >>> 8) ^ left) & 0x00ff00ff;
    left ^= temp;
    right ^= temp << 8;
    temp = ((right >>> 2) ^ left) & 0x33333333;
    left ^= temp;
    right ^= temp << 2;
    temp = ((left >>> 16) ^ right) & 0x0000ffff;
    right ^= temp;
    left ^= temp << 16;
    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
    right ^= temp;
    left ^= temp << 4;

    tempresult += String.fromCharCode(
      left >>> 24,
      (left >>> 16) & 0xff,
      (left >>> 8) & 0xff,
      left & 0xff,
      right >>> 24,
      (right >>> 16) & 0xff,
      (right >>> 8) & 0xff,
      right & 0xff,
    );

    chunk += 8;
    if (chunk == 512) {
      result += tempresult;
      tempresult = "";
      chunk = 0;
    }
  }
  var resultTempresult = result + tempresult;
  if (type === "encrypt") {
    var resultCiphertext = "";
    var hexes = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
    for (var i = 0; i < resultTempresult.length; i++) {
      resultCiphertext += hexes[resultTempresult.charCodeAt(i) >> 4] + hexes[resultTempresult.charCodeAt(i) & 0xf];
    }
    return resultCiphertext;
  }
  return result + tempresult;
};
Des.prototype._DesCreateKeys = function (key) {
  var pc2bytes0 = new Array(
    0,
    0x4,
    0x20000000,
    0x20000004,
    0x10000,
    0x10004,
    0x20010000,
    0x20010004,
    0x200,
    0x204,
    0x20000200,
    0x20000204,
    0x10200,
    0x10204,
    0x20010200,
    0x20010204,
  );
  var pc2bytes1 = new Array(
    0,
    0x1,
    0x100000,
    0x100001,
    0x4000000,
    0x4000001,
    0x4100000,
    0x4100001,
    0x100,
    0x101,
    0x100100,
    0x100101,
    0x4000100,
    0x4000101,
    0x4100100,
    0x4100101,
  );
  var pc2bytes2 = new Array(
    0,
    0x8,
    0x800,
    0x808,
    0x1000000,
    0x1000008,
    0x1000800,
    0x1000808,
    0,
    0x8,
    0x800,
    0x808,
    0x1000000,
    0x1000008,
    0x1000800,
    0x1000808,
  );
  var pc2bytes3 = new Array(
    0,
    0x200000,
    0x8000000,
    0x8200000,
    0x2000,
    0x202000,
    0x8002000,
    0x8202000,
    0x20000,
    0x220000,
    0x8020000,
    0x8220000,
    0x22000,
    0x222000,
    0x8022000,
    0x8222000,
  );
  var pc2bytes4 = new Array(
    0,
    0x40000,
    0x10,
    0x40010,
    0,
    0x40000,
    0x10,
    0x40010,
    0x1000,
    0x41000,
    0x1010,
    0x41010,
    0x1000,
    0x41000,
    0x1010,
    0x41010,
  );
  var pc2bytes5 = new Array(
    0,
    0x400,
    0x20,
    0x420,
    0,
    0x400,
    0x20,
    0x420,
    0x2000000,
    0x2000400,
    0x2000020,
    0x2000420,
    0x2000000,
    0x2000400,
    0x2000020,
    0x2000420,
  );
  var pc2bytes6 = new Array(
    0,
    0x10000000,
    0x80000,
    0x10080000,
    0x2,
    0x10000002,
    0x80002,
    0x10080002,
    0,
    0x10000000,
    0x80000,
    0x10080000,
    0x2,
    0x10000002,
    0x80002,
    0x10080002,
  );
  var pc2bytes7 = new Array(
    0,
    0x10000,
    0x800,
    0x10800,
    0x20000000,
    0x20010000,
    0x20000800,
    0x20010800,
    0x20000,
    0x30000,
    0x20800,
    0x30800,
    0x20020000,
    0x20030000,
    0x20020800,
    0x20030800,
  );
  var pc2bytes8 = new Array(
    0,
    0x40000,
    0,
    0x40000,
    0x2,
    0x40002,
    0x2,
    0x40002,
    0x2000000,
    0x2040000,
    0x2000000,
    0x2040000,
    0x2000002,
    0x2040002,
    0x2000002,
    0x2040002,
  );
  var pc2bytes9 = new Array(
    0,
    0x10000000,
    0x8,
    0x10000008,
    0,
    0x10000000,
    0x8,
    0x10000008,
    0x400,
    0x10000400,
    0x408,
    0x10000408,
    0x400,
    0x10000400,
    0x408,
    0x10000408,
  );
  var pc2bytes10 = new Array(
    0,
    0x20,
    0,
    0x20,
    0x100000,
    0x100020,
    0x100000,
    0x100020,
    0x2000,
    0x2020,
    0x2000,
    0x2020,
    0x102000,
    0x102020,
    0x102000,
    0x102020,
  );
  var pc2bytes11 = new Array(
    0,
    0x1000000,
    0x200,
    0x1000200,
    0x200000,
    0x1200000,
    0x200200,
    0x1200200,
    0x4000000,
    0x5000000,
    0x4000200,
    0x5000200,
    0x4200000,
    0x5200000,
    0x4200200,
    0x5200200,
  );
  var pc2bytes12 = new Array(
    0,
    0x1000,
    0x8000000,
    0x8001000,
    0x80000,
    0x81000,
    0x8080000,
    0x8081000,
    0x10,
    0x1010,
    0x8000010,
    0x8001010,
    0x80010,
    0x81010,
    0x8080010,
    0x8081010,
  );
  var pc2bytes13 = new Array(
    0,
    0x4,
    0x100,
    0x104,
    0,
    0x4,
    0x100,
    0x104,
    0x1,
    0x5,
    0x101,
    0x105,
    0x1,
    0x5,
    0x101,
    0x105,
  );

  var iterations = key.length > 8 ? 3 : 1;
  var keys = new Array(32 * iterations);
  var shifts = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0);
  var lefttemp,
    righttemp,
    m = 0,
    n = 0,
    temp;

  for (var j = 0; j < iterations; j++) {
    var left =
      (key.charCodeAt(m++) << 24) | (key.charCodeAt(m++) << 16) | (key.charCodeAt(m++) << 8) | key.charCodeAt(m++);
    var right =
      (key.charCodeAt(m++) << 24) | (key.charCodeAt(m++) << 16) | (key.charCodeAt(m++) << 8) | key.charCodeAt(m++);

    temp = ((left >>> 4) ^ right) & 0x0f0f0f0f;
    right ^= temp;
    left ^= temp << 4;
    temp = ((right >>> -16) ^ left) & 0x0000ffff;
    left ^= temp;
    right ^= temp << -16;
    temp = ((left >>> 2) ^ right) & 0x33333333;
    right ^= temp;
    left ^= temp << 2;
    temp = ((right >>> -16) ^ left) & 0x0000ffff;
    left ^= temp;
    right ^= temp << -16;
    temp = ((left >>> 1) ^ right) & 0x55555555;
    right ^= temp;
    left ^= temp << 1;
    temp = ((right >>> 8) ^ left) & 0x00ff00ff;
    left ^= temp;
    right ^= temp << 8;
    temp = ((left >>> 1) ^ right) & 0x55555555;
    right ^= temp;
    left ^= temp << 1;

    temp = (left << 8) | ((right >>> 20) & 0x000000f0);
    left = (right << 24) | ((right << 8) & 0xff0000) | ((right >>> 8) & 0xff00) | ((right >>> 24) & 0xf0);
    right = temp;

    for (var i = 0; i < shifts.length; i++) {
      if (shifts[i]) {
        left = (left << 2) | (left >>> 26);
        right = (right << 2) | (right >>> 26);
      } else {
        left = (left << 1) | (left >>> 27);
        right = (right << 1) | (right >>> 27);
      }
      left &= -0xf;
      right &= -0xf;

      lefttemp =
        pc2bytes0[left >>> 28] |
        pc2bytes1[(left >>> 24) & 0xf] |
        pc2bytes2[(left >>> 20) & 0xf] |
        pc2bytes3[(left >>> 16) & 0xf] |
        pc2bytes4[(left >>> 12) & 0xf] |
        pc2bytes5[(left >>> 8) & 0xf] |
        pc2bytes6[(left >>> 4) & 0xf];
      righttemp =
        pc2bytes7[right >>> 28] |
        pc2bytes8[(right >>> 24) & 0xf] |
        pc2bytes9[(right >>> 20) & 0xf] |
        pc2bytes10[(right >>> 16) & 0xf] |
        pc2bytes11[(right >>> 12) & 0xf] |
        pc2bytes12[(right >>> 8) & 0xf] |
        pc2bytes13[(right >>> 4) & 0xf];
      temp = ((righttemp >>> 16) ^ lefttemp) & 0x0000ffff;
      keys[n++] = lefttemp ^ temp;
      keys[n++] = righttemp ^ (temp << 16);
    }
  }
  return keys;
};
/*
------------------------------------------------------------------------------------
以上方法对象的私有方法
为了解决中文乱码
使用base64先加密，再用des加密
同理，解密时先用deds解密，再使用base64解密
------------------------------------------------------------------------------------
*/
/**
 * 加密
 * @param {String} key 密钥
 * @param {String} plaintext 明文
 * @return {String} ciphertext 密文
 */
Des.prototype.encrypt = function (key, plaintext) {
  var encodedString = encode(plaintext);
  var ciphertext = this._DesCreate(key, encodedString, "encrypt");
  return ciphertext;
};
/**
 * 解密
 * @param {String} key 密钥
 * @param {String} ciphertext 密文
 * @return {String} plaintext 明文
 */
Des.prototype.decrypt = function (key, ciphertext) {
  var decryptText = this._DesCreate(key, ciphertext, "decrypt"); // Des解密
  var plaintext = decode(decryptText); // base64解密
  return plaintext;
};

// es6 export
export default Des;
