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
 * @param {String} oldSubstr 需要替换的字符串
 * @param {String} newSubstr 替换后的字符串
 * @returns {String} 返回处理后的字符串
 */
export function replaceAll(value, oldSubstr, newSubstr) {
  return value.replace(new RegExp(oldSubstr, "gm"), newSubstr);
}

/**
 * 字符串中是否包含指定的元素
 * @param {String} value 包含的元素
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
 * @description 相当于原生的 padStart(2,'0')
 * @param {String|Number} value 补零的数字
 * @param {Number} maxLength 补齐0后的最大长度，默认2位
 * @returns {String} 返回补0后指定位数的字符串
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
 * @description 相当于原生的 padEnd(2,'0')
 * @param {String|Number} value 补零的数字
 * @param {Number} maxLength 补齐0后的最大长度，默认2位
 * @returns {String} 返回补0后指定位数的字符串
 */
export function zeroEnd(value, maxLength = 2) {
  let len = value.toString().length;
  while (len < maxLength) {
    value = value + "0";
    len++;
  }
  return value;
}
