/**
 * rgb 颜色转 hex十六进制
 * @param {String} color rgb颜色
 * @returns {String} 返回生成的 rgb 颜色
 */
export function colorRgbToHex(color) {
  let rgb = color.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
  let r = parseInt(rgb[0].split("(")[1]);
  let g = parseInt(rgb[1]);
  let b = parseInt(rgb[2].split(")")[0]);

  let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
}

/**
 * hex十六进制 颜色转 rgb
 * @param {String} color hex十六进制颜色值
 * @param {Number} opacity 透明度，0-1之间，默认1
 * @returns {String} 返回生成的 rgb 颜色
 */
export function colorHexToRgba(color, opacity = 1) {
  return (
    "rgba(" +
    parseInt("0x" + color.slice(1, 3)) +
    "," +
    parseInt("0x" + color.slice(3, 5)) +
    "," +
    parseInt("0x" + color.slice(5, 7)) +
    "," +
    opacity +
    ")"
  );
}

/**
 * 获取随机生成的16进制颜色
 * @returns {String} 返回生成的十六进制颜色
 */
export function getRandomHexColor() {
  return (
    "#" +
    (function (h) {
      return new Array(7 - h.length).join("0") + h;
    })(((Math.random() * 0x1000000) << 0).toString(16))
  );
}

/**
 * 获取随机生成的 rgb 颜色
 * @returns {String} 返回生成的 rgb 颜色
 */
export function getRandomRgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}
