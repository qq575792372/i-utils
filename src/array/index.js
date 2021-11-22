/**
 * 数组中是否包含指定的数据
 * @param {String | Number} value 指定数据，只支持String和Number
 * @param {Array} array 查找的数组
 * @returns 返回true和false
 */
export function isInArray(value, array) {
  if (this.isNull(value) || this.isNull(array)) return;
  return array.includes(value);
}

/**
 * 获得数据在数组中第一次出现位置索引
 * @param {String | Number} value 指定数据，只支持String和Number
 * @param {Array} array 查找的数组
 * @returns 返回查找到的位置索引
 */
export function getIndexInArray(value, array) {
  if (this.isNull(value) || this.isNull(array)) return;
  return array.indexOf(value);
}
