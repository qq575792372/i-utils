/**
 * @module 颜色
 */

/**
 * rgb颜色转hex
 * @param {string} rgb rgb颜色字符串
 * @returns {string} 返回生成的hex颜色
 */
export function rgbToHex(rgb: string): string {
  const arr = rgb.split(",");
  const r = parseInt(arr[0].split("(")[1]);
  const g = parseInt(arr[1]);
  const b = parseInt(arr[2].split(")")[0]);
  return "#" + _hex(r) + _hex(g) + _hex(b);
}

/**
 * rgba颜色转hex
 * @param {string} rgba rgba颜色字符串
 * @returns {string} 返回生成的hex颜色
 */
export function rgbaToHex(rgba: string): string {
  const arr = rgba.split(",");
  const r = parseInt(arr[0].split("(")[1]);
  const g = parseInt(arr[1]);
  const b = parseInt(arr[2]);
  const a = parseFloat(arr[3].split(")")[0]);

  return `#${_hex(Math.round(a * 256 - 1))}${_hex(r)}${_hex(g)}${_hex(b)}`;
}

/**
 * rgba颜色转hsl
 * @param {string} rgba rgb颜色字符串
 * @returns {string} 返回生成的hsl颜色
 */
export function rgbaToHsl(rgba: string): string {
  const arr = rgba.split(",");
  const r = parseInt(arr[0].split("(")[1]) / 255;
  const g = parseInt(arr[1]) / 255;
  const b = parseInt(arr[2]) / 255;
  const a = parseFloat(arr[3] && arr[3].split(")")[0]);
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  if (a) {
    return `hsla(${Math.round(h * 360)},${Math.round(s * 100)}%,${Math.round(l * 100)}%,${a})`;
  }
  return `hsl(${Math.round(h * 360)},${Math.round(s * 100)}%,${Math.round(l * 100)}%)`;
}

/**
 * hex颜色转rgb
 * @param {string} hex hex颜色字符串
 * @returns {string} 返回生成的rgb颜色
 */
export function hexToRgb(hex: string): string {
  const color = { r: 0, g: 0, b: 0, o: 0 };
  const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hexStr = hex.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexStr);
  if (!rgb) {
    throw new TypeError(`hexToRgb: invalid hex color: ${hex}`);
  }
  color.r = parseInt(rgb[1], 16);
  color.g = parseInt(rgb[2], 16);
  color.b = parseInt(rgb[3], 16);
  return `rgb(${color.r},${color.g},${color.b})`;
}

/**
 * hex颜色转rgba
 * @param {string} hex hex颜色字符串
 * @param {number} opacity 透明度
 * @returns {string} 返回生成的rgba颜色
 */
export function hexToRgba(hex: string, opacity: number = 1): string {
  const color = { r: 0, g: 0, b: 0, o: 0 };
  const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hexStr = hex.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexStr);
  if (!rgb) {
    throw new TypeError(`hexToRgba: invalid hex color: ${hex}`);
  }
  color.r = parseInt(rgb[1], 16);
  color.g = parseInt(rgb[2], 16);
  color.b = parseInt(rgb[3], 16);
  color.o = opacity;
  return `rgba(${color.r},${color.g},${color.b},${color.o})`;
}

/**
 * hex颜色转hsl
 * @param {string} hex hex颜色字符串
 * @returns {string} 返回生成的hsl颜色
 */
export function hexToHsl(hex: string): string {
  // 先解析为rgb
  const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hexStr = hex.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexStr);
  if (!rgb) {
    throw new TypeError(`hexToHsl: invalid hex color: ${hex}`);
  }

  // 再组装为hsl格式
  const r = parseInt(rgb[1], 16) / 255;
  const g = parseInt(rgb[2], 16) / 255;
  const b = parseInt(rgb[3], 16) / 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return `hsl(${Math.round(h * 360)},${Math.round(s * 100)}%,${Math.round(l * 100)}%)`;
}

/**
 * 随机生成hex颜色
 * @returns {string} 返回生成的十六进制颜色
 */
export function getDrawHex(): string {
  return (
    "#" +
    (function (h) {
      return new Array(7 - h.length).join("0") + h;
    })(((Math.random() * 0x1000000) << 0).toString(16))
  );
}

/**
 * 随机生成rgb颜色
 * @returns {string} 返回生成的 rgb 颜色
 */
export function getDrawRgb(): string {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

/**
 * 随机生成rgba颜色
 * @returns {string} 返回生成的 rgba 颜色
 */
export function getDrawRgba(): string {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Number(Math.random()).toFixed(2);
  return `rgba(${r},${g},${b},${a})`;
}

// 内部函数
/**
 * 颜色值转换
 * @param {number} num 转换的值
 * @returns {string} 返回计算
 */
function _hex(num: number): string {
  if (num > 255) {
    throw "'" + num + "'' is greater than 255(0xff);";
  }
  const str = Number(num).toString(16);
  return ("0" + str).slice(-2);
}
