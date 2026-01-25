/**
 * @module 数字
 */
import { isNull } from "@/validate";

/**
 * 转为数字类型
 * @description 解决部分浏览器在转换 '08','09'等是0开头时被默认转8进制问题
 * @param {string|number} value 转换的值
 * @param {number} radix 进制数，默认10进制
 * @returns {number} 返回转换后的数字
 */
export function parseInt(value: string | number, radix: number = 10) {
  if (isNull(value)) {
    return 0;
  }
  return Number.parseInt(String(value), radix);
}

/**
 * 转为小数类型
 * @param {string|number} value 转换的值
 * @returns {number} 返回转换后的数字
 */
export function parseFloat(value: string | number) {
  if (isNull(value)) {
    return 0.0;
  }
  return Number.parseFloat(String(value));
}
