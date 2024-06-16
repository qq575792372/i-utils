/**
 * 生成UUID
 * @param len 生成的长度，默认32位
 * @param radix 进制数，默认16进制
 * @example
 * getUUID() // 输出：0a559343dbbf0e7e6c1de90163e7aa0a
 * @returns {String} 返回UUID字符串
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
        uuid[i] = CHARS[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return uuid.join("");
}

/**
 * 生成GUID
 * @example
 * getGUID() // 输出：275ec770-0853-6767-4875-7b270220ce9c
 * @returns {String} 返回GUID字符串
 */
export function getGUID() {
  let s4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
}
