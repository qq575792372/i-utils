/**
 * 生成指定大小的随机数
 * @param {Number} n 生成随机数的开始数字，默认0
 * @param {Number} m 生成随机数的结束数字，默认9
 * @returns 返回指定位数的随机数，默认是0-9的一位数
 */
export function getRandom(n = 0, m = 9) {
  return Math.floor(Math.random() * m + n);
}

/**
 * 生成指定位数的随机数
 * @param {Number} n 生成数字的位数，默认是1，代表0-9之间的一位数；如果是2，代表10-99之间的两位数；其他位数以此类推
 * @returns 返回指定位数的随机数
 */
export function getRandomDigit(n = 1) {
  return Math.floor((Math.random() + Math.floor(Math.random() * 9 + 1)) * Math.pow(10, n - 1));
}

/**
 * 生成UUID
 * @param len 生成的位数，默认32位
 * @param radix 默认16进制
 * @returns 返回UUID字符串，例如：5e71b6a38364c189ab1229bf5c2d5695
 */
export function getUUID(len = 32, radix = 16) {
  const CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let uuid = [],
    i;
  radix = radix || CHARS.length;
  if (len) {
    for (i = 0; i < len; i++) uuid[i] = CHARS[0 | (Math.random() * radix)];
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = CHARS[i == 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return uuid.join("");
}

/**
 * 生成GUID
 * @returns 返回GUID字符串，例如：e854e2ec-063c-1ee7-942f-57c5733ce0cb
 */
export function getGUID() {
  let s4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
}
