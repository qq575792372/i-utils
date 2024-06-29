/**
 * rgb颜色转hex
 * @param {String} rgb rgb颜色字符串
 * @returns {String} 返回生成的hex颜色
 */
export function rgbToHex(rgb) {
  rgb = rgb.split(",");
  let r = parseInt(rgb[0].split("(")[1]);
  let g = parseInt(rgb[1]);
  let b = parseInt(rgb[2].split(")")[0]);
  return "#" + _hex(r) + _hex(g) + _hex(b);
}

/**
 * rgba颜色转hex
 * @param {String} rgba rgba颜色字符串
 * @returns {String} 返回生成的hex颜色
 */
export function rgbaToHex(rgba) {
  rgba = rgba.split(",");
  let r = parseInt(rgba[0].split("(")[1]);
  let g = parseInt(rgba[1]);
  let b = parseInt(rgba[2]);
  let a = parseFloat(rgba[3].split(")")[0]);

  return `#${_hex(Math.round(a * 256 - 1))}${_hex(r)}${_hex(g)}${_hex(b)}`;
}

/**
 * rgba颜色转hsl
 * @param {String} rgba rgb颜色字符串
 * @returns {String} 返回生成的hsl颜色
 */
export function rgbaToHsl(rgba) {
  rgba = rgba.split(",");
  let r = parseInt(rgba[0].split("(")[1]) / 255;
  let g = parseInt(rgba[1]) / 255;
  let b = parseInt(rgba[2]) / 255;
  let a = parseFloat(rgba[3] && rgba[3].split(")")[0]);
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
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
    return `hsla(${Math.round(h * 360)},${Math.round(s * 100)}%,${Math.round(
      l * 100
    )}%,${a})`;
  }
  return `hsl(${Math.round(h * 360)},${Math.round(s * 100)}%,${Math.round(
    l * 100
  )}%)`;
}

/**
 * hex颜色转rgb
 * @param {String} hex hex颜色字符串
 * @returns {String} 返回生成的rgb颜色
 */
export function hexToRgb(hex) {
  let color = {};
  let rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  let hexStr = hex.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexStr);
  color.r = parseInt(rgb[1], 16);
  color.g = parseInt(rgb[2], 16);
  color.b = parseInt(rgb[3], 16);
  return `rgb(${color.r},${color.g},${color.b})`;
}

/**
 * hex颜色转rgba
 * @param {String} hex hex颜色字符串
 * @param {Number} opacity 透明度
 * @returns {String} 返回生成的rgba颜色
 */
export function hexToRgba(hex, opacity = 1) {
  let color = {};
  let rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  let hexStr = hex.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexStr);
  color.r = parseInt(rgb[1], 16);
  color.g = parseInt(rgb[2], 16);
  color.b = parseInt(rgb[3], 16);
  color.o = opacity;
  return `rgba(${color.r},${color.g},${color.b},${color.o})`;
}

/**
 * hex颜色转hsl
 * @param {String} hex hex颜色字符串
 * @returns {String} 返回生成的hsl颜色
 */
export function hexToHsl(hex) {
  // 先解析为rgb
  let rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  let hexStr = hex.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexStr);

  // 再组装为hsl格式
  let r = parseInt(rgb[1], 16) / 255;
  let g = parseInt(rgb[2], 16) / 255;
  let b = parseInt(rgb[3], 16) / 255;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
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
  return `hsl(${Math.round(h * 360)},${Math.round(s * 100)}%,${Math.round(
    l * 100
  )}%)`;
}

/**
 * 随机生成hex颜色
 * @returns {String} 返回生成的十六进制颜色
 */
export function getRandomHex() {
  return (
    "#" +
    (function (h) {
      return new Array(7 - h.length).join("0") + h;
    })(((Math.random() * 0x1000000) << 0).toString(16))
  );
}

/**
 * 随机生成rgb颜色
 * @returns {String} 返回生成的 rgb 颜色
 */
export function getRandomRgb() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

/**
 * 随机生成rgba颜色
 * @returns {String} 返回生成的 rgba 颜色
 */
export function getRandomRgba() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Number(Math.random() * 1).toFixed(2);
  return `rgba(${r},${g},${b},${a})`;
}

// 内部函数
/**
 * 颜色值转换
 * @param {Number} num 转换的值
 * @returns
 */
function _hex(num) {
  if (num > 255) {
    throw "'" + num + "'' is greater than 255(0xff);";
  }
  let str = Number(num).toString(16);
  return ("0" + str).slice(-2);
}
