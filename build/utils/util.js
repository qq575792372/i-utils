const path = require("path");

/**
 * 获得文件全路径
 * @param dir
 * @returns {string}
 */
export function pathResolve(...dir) {
  return path.resolve(__dirname, ...dir);
}
