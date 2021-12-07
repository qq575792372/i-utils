import { isEmpty } from "../validate";

// 字符串去空格
/**
 * 去除字符串两边空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trim(value) {
  return value.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 去除字符串开始位置的空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trimStart(value) {
  return value.replace(/(^\s*)/g, "");
}

/**
 * 去除字符串结束位置的空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trimEnd(value) {
  return value.replace(/(\s*$)/g, "");
}

/**
 * 去除字符串中全部的空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trimAll(value) {
  return value.replace(/\s+/g, "");
}

/**
 * 替换字符串中所有指定的字符为新的字符串
 * @param {String} value 参数
 * @param {String} substr 需要替换的字符串
 * @param {String} newSubstr 替换后的字符串
 * @returns {String} 返回处理后的字符串
 */
export function replaceAll(value, substr, newSubstr = "-") {
  return value.replace(new RegExp(substr, "gm"), newSubstr);
}

/**
 * 字符串中是否包含指定的元素
 * @param {String} value 元素
 * @param {String} str 查找的字符串
 * @returns {Boolean} 返回true和false
 */
export function isInString(value, str) {
  return str.includes(value);
}

/**
 * 获得元素在字符串中首次出现的位置
 * @param {String} value 元素
 * @param {String} str 查找的字符串
 * @returns {Number} 返回查找到的位置下标
 */
export function getIndexInString(value, str) {
  return str.indexOf(value);
}

/**
 * 数字前补齐0达到指定位数
 * 注：相当于padStart()
 * @param {String|Number} value 可以是数字和字符串
 * @param {Number} maxLength 补齐0后的最大长度，默认2位
 * @returns {String} 返回补0后的字符串，比如传参(10,4)，返回补齐0的4位字符串“0010”
 */
export function zeroStart(value, maxLength = 2) {
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
 * @param {String|Number} value 可以是数字和字符串
 * @param {Number} maxLength 补齐0后的最大长度，默认2位
 * @returns {String} 返回补0后的字符串，比如传参(10,4)，返回补齐0的4位字符串“0010”
 */
export function zeroEnd(value, maxLength = 2) {
  let len = value.toString().length;
  while (len < maxLength) {
    value = value + "0";
    len++;
  }
  return value;
}
