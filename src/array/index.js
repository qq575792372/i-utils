import { isNull } from "../validate";

/**
 * 数组中是否包含指定的数据
 * @param {String|Number} value 指定数据，只支持String和Number
 * @param {Array} array 查找的数组
 * @returns {Boolean} 返回true和false
 */
export function isInArray(value, array) {
  if (isNull(value)) return;
  return array.includes(value);
}

/**
 * 获得数据在数组中第一次出现位置索引
 * @param {String|Number} value 指定数据，只支持String和Number
 * @param {Array} array 查找的数组
 * @returns {Number} 返回查找到的位置下标
 */
export function getIndexInArray(value, array) {
  if (isNull(value)) return;
  return array.indexOf(value);
}

/**
 * 数组简单去重
 * @param {Array} array 数组
 * @returns {Array} 返回去重后的数组
 */
export function uniqueArray(array) {
  if (isNull(value)) return;
  return Array.from(new Set(array));
}

/**
 * 一维父子级的数组转树形结构
 * @description 包含id和pid关系的一维数组，转为包含children的树形结构
 * @param {Array} array 数组
 * @param {Number|String} pid 父级的id
 * @returns {Array} 返回去重后的数组
 * @example
 * let source = [
      { id: 1, name: "节点1", pid: 0 },
      { id: 11, name: "节点1-1", pid: 1 },
      { id: 12, name: "节点1-2", pid: 1 },
      { id: 2, name: "节点2", pid: 0 },
      { id: 3, name: "节点3", pid: 0 },
      { id: 31, name: "节点3-1", pid: 3 },
      { id: 32, name: "节点3-2", pid: 3 },
    ];
    console.log(arrayToTree(source, 0)); // 输出包含children层级关系的树形结构
 */
export function arrayToTree(array, pid) {
  let res = [];
  list.forEach((v) => {
    if (v.pid == pid) {
      v.children = toTree(list, v.id);
      res.push(v);
    }
  });
  return res;
}
