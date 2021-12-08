import { isNull } from "../validate";

/**
 * 数组中是否包含指定的元素
 * @param {String|Number} value 元素
 * @param {Array} array 查找的数组
 * @returns {Boolean} 返回true和false
 */
export function isInArray(value, array) {
  if (isNull(value)) return;
  return array.includes(value);
}

/**
 * 获得元素在数组中首次出现的位置
 * @param {String|Number} value 元素
 * @param {Array} array 查找的数组
 * @returns {Number} 返回查找到的位置下标
 */
export function getIndexInArray(value, array) {
  if (isNull(value)) return;
  return array.indexOf(value);
}

/**
 * 数组元素简单去重
 * @param {Array} array 数组
 * @returns {Array} 返回去重后的数组
 */
export function uniqueArray(array) {
  if (isNull(value)) return;
  return Array.from(new Set(array));
}

/**
 * 数组打乱
 * @description 可以适用于一些抽奖人员列表打乱顺序
 * @param {Array} array 数组
 * @returns {Array} 返回打乱之后新的数组
 */
export function shuffleArray(array) {
  for (let i = 1; i < array.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[random], array[i]] = [array[i], array[random]];
  }
  return array;
}

/**
 * 数组交换位置
 * @param {Array} array 数组
 * @param {Number} sourceIndex 原索引
 * @param {Number} targetIndex 目标索引
 * @returns {Array} 返回交换索引后的新数组
 */
export function swapIndexArray(array, sourceIndex, targetIndex) {
  const target = [...array];
  [target[targetIndex], target[sourceIndex]] = [array[sourceIndex], array[targetIndex]];
  return target;
}

/**
 * 一维父子级的数组转树形结构
 * @description 包含id和pid属性关系的一维数组，转为children的树形结构
 * @param {Array} array 数组
 * @param {String|Number} pid 父级的id
 * @returns {Array} 返回树形结构数组
 */
export function arrayToTree(array, pid) {
  let res = [];
  array.forEach((v) => {
    if (v.pid == pid) {
      v.children = toTree(array, v.id);
      res.push(v);
    }
  });
  return res;
}
