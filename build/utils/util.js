import path from "path";

/**
 * 获得文件全路径
 * @param dir 路径地址
 * @returns {string} 返回全路径
 */
export function pathResolve(...dir) {
  return path.resolve(__dirname, ...dir);
}
