import { isEmpty } from "../validate";

// 字符串去空格
/**
 * 去除字符串两边空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trim(value) {
  if (isEmpty(value)) return;
  return value.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 去除字符串左边空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trimLeft(value) {
  if (isEmpty(value)) return;
  return value.replace(/(^\s*)/g, "");
}

/**
 * 去除字符串右边空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trimRight(value) {
  if (isEmpty(value)) return;
  return value.replace(/(\s*$)/g, "");
}

/**
 * 去除字符串全部空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trimAll(value) {
  if (isEmpty(value)) return;
  return value.replace(/\s+/g, "");
}

// 数字补齐0
/**
 * 数字前补齐零，保持两位
 * @param {String | Number} value 可以是数字和字符串
 * @returns {String} 返回处理后的字符串
 */
export function digit(value) {
  value = value.toString();
  return value[1] ? value : "0" + value;
}

/**
 * 数字前补齐0达到指定位数
 * 注：相当于padStart()
 * @param {*} value 可以是数字和字符串
 * @param {*} maxLength 补齐0后的最大长度，默认2位
 * @returns {String} 返回补0后的字符串，比如传参(10,4)，返回补齐0的4位字符串“0010”
 */
export function prefixZero(value, maxLength = 2) {
  if (isEmpty(value)) return;
  let len = value.toString().length;
  while (len < maxLength) {
    value = "0" + value;
    len++;
  }
  return value;
}

/**
 * 数字后补齐0达到指定位数
 * 注：相当于padEnd()
 * @param {String,Number} value 可以是数字和字符串
 * @param {*} maxLength 补齐0后的最大长度，默认2位
 * @returns {String} 返回补0后的字符串，比如传参(10,4)，返回补齐0的4位字符串“0010”
 */
export function suffixZero(value, maxLength = 2) {
  if (isEmpty(value)) return;
  let len = value.toString().length;
  while (len < maxLength) {
    value = value + "0";
    len++;
  }
  return value;
}
