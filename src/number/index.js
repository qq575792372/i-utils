/**
 * 转为数字类型
 * @description 解决部分浏览器在转换 '08','09'等是0开头时被默认转8进制问题
 * @param {String} value 转换的值
 * @param {Number} radix 进制数，默认10进制
 * @returns {Number} 返回转换后的数字
 */
export function parseInt(value, radix = 10) {
  return Number.parseInt(value, radix);
}
