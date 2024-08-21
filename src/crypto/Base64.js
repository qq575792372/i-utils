/**
 * base64 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function encode(str) {
  return _encode(str);
}

/**
 * base64 解密
 * @param {String} str 字符串
 * @returns {String} 返回解密后的字符串
 */
export function decode(str) {
  return _decode(str);
}

/* 内部实现方法 */
const _CHAR_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function _decode(string) {
  const str = String(string);
  const prx = [6, 4, 2, 0];
  let map = _CHAR_MAP.slice(0, -1);
  let output = "";
  let block = 0;
  let code;
  let buffer = 0;
  let hex = "";
  try {
    for (let i = 0; (code = map.indexOf(str[i])) > -1; i++) {
      block = (block << 6) | code;
      if (i % 4) {
        buffer = 255 & (block >> prx[i % 4]);
        if (buffer < 128) {
          output += hex ? decodeURI(hex) : "";
          output += String.fromCharCode(buffer);
          hex = "";
        } else {
          hex += "%" + ("0" + buffer.toString(16)).slice(-2);
        }
      }
    }
    output += hex ? decodeURI(hex) : "";
    return output;
  } catch (err) {
    throw new Error("base64 malformed!");
  }
}

function _encode(string) {
  const str = String(string);
  const prx = [2, 4, 6, 8];
  let map = _CHAR_MAP;
  let output = "";
  let block = 0;
  for (let i = 0, j = 0; i < str.length || 63 & block || ((map = "="), j % 4 !== 0); i++) {
    const code = str.charCodeAt(i);
    const uarr =
      code > 0x7f
        ? encodeURI(str.charAt(i))
            .split("%")
            .slice(1)
            .map((c) => parseInt(c, 16))
        : [code];
    for (let k = 0; k < uarr.length; k++) {
      block = (block << 8) | uarr[k];
      output += map.charAt(63 & (block >> prx[j % 4]));
      j++;
      if (j % 4 === 3) {
        // tail
        output += isNaN(uarr[k]) ? "=" : map.charAt(63 & block);
        j++;
        block = 0;
      }
    }
  }
  return output;
}
