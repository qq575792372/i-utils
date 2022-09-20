import { isNull } from "../validate";
import { SORT_MODE } from "../constant/sort";

/* 数组计算 */
/**
 * 数组最小值
 * @param {Array} array 数组
 * @returns {Number} 返回数组中最小的值
 */
export function arrayMin(array) {
  return Math.min.apply(null, array);
}

/**
 * 数组最大值
 * @param {Array} array 数组
 * @returns {Number} 返回数组中最大的值
 */
export function arrayMax(array) {
  return Math.max.apply(null, array);
}

/**
 * 数组求和
 * @param {Array} array 数组
 * @returns {Number} 返回数组元素的总和
 */
export function arraySum(array) {
  return array.reduce(function (pre, cur) {
    return pre + cur;
  });
}

/**
 * 数组求平均值
 * @param {Array} array 数组
 * @returns {Number} 返回数组平均值
 */
export function arrayAvg(array) {
  return arraySum(array) / array.length;
}

/* 数组比较 */
/**
 * 数组中是否包含指定的元素
 * @param {String|Number} value 元素
 * @param {Array} array 查找的数组
 * @returns {Boolean} 返回true和false
 */
export function inArray(value, array) {
  if (isNull(value)) return;
  return array.includes(value);
}

/**
 * 比较两个数组是否相等
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Boolean} 返回true和false
 */
export function arrayEquals(array1, array2) {
  if (array1 === array2) return true;
  if (array1.length != array2.length) return false;
  return array1.every((v, i) => v === array2[i]);
}

/* 数组操作 */
/**
 * 生成指定长度的数组
 * @param {Number} length 长度，默认 0
 * @returns {Array} 返回生成的数组
 */
export function arrayCreate(length = 0) {
  return [...Array(length).keys()];
}

/**
 * 数组指定下标位置添加元素
 * @param {Array} source 源数组
 * @param {Number} index 下标位置，默认0
 * @param {*} value 添加的元素
 * @returns {Array} 返回新的数组
 */
export function arrayInsert(source = [], index = 0, value = undefined) {
  source.splice(index, 0, value);
  return source;
}

/**
 * 数组指定下标位置删除元素
 * @param {Array} source 源数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回新的数组
 */
export function arrayRemove(source = [], index = 0) {
  source.splice(index, 1);
  return source;
}

/**
 * 数组元素去重
 * @param {Array} array 数组
 * @returns {Array} 返回去重后的数组
 */
export function arrayUnique(array) {
  if (isNull(value)) return;
  return Array.from(new Set(array));
}

/**
 * 数组打乱元素
 * @description 可以适用于一些抽奖人员列表打乱顺序
 * @param {Array} array 数组
 * @returns {Array} 返回打乱之后新的数组
 */
export function arrayShuffle(array) {
  for (let i = 1; i < array.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[random], array[i]] = [array[i], array[random]];
  }
  return array;
}

/**
 * 数组排序
 * @param {Array} array 数组
 * @param {Constant} mode 排序模式，参考常量集合中 数组常量，默认是升序
 * @returns {Array} 返回排序后的新数组
 */
export function arraySort(array, mode = SORT_MODE.SORT_ASC) {
  return array.sort((a, b) => {
    switch (mode) {
      // 升序
      case SORT_MODE.SORT_ASC:
        return a - b;
      // 降序
      case SORT_MODE.SORT_DESC:
        return b - a;
      // 随机
      case SORT_MODE.SORT_RANDOM:
        return Math.random() - 0.5;
      // 默认
      default:
        return array;
    }
  });
}

/**
 * 数组交换元素
 * @param {Array} array 数组
 * @param {Number} sourceIndex 原索引
 * @param {Number} targetIndex 目标索引
 * @returns {Array} 返回交换元素后的新数组
 */
export function arraySwap(array, sourceIndex, targetIndex) {
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

/* 数组并集，交集，差集等 */

/**
 * 数组求并集
 * @description 数组1 和 数组2 合并一起的元素集合
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Number} 返回数组并集
 */
export function arrayUnion(array1, array2) {
  return [...new Set(array1.concat(array2))];
}

/**
 * 数组求交集
 * @description 数组1 和 数组2 相同的元素集合
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Number} 返回数组交集
 */
export function arrayIntersect(array1, array2) {
  return [...new Set(array1)].filter((item) => array2.includes(item));
}

/**
 * 数组求差集
 * @description 数组1 中不包含 数组2 的元素集合
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Number} 返回数组差集
 */
export function arrayDifference(array1, array2) {
  return [...new Set(array1)].filter((item) => !array2.includes(item));
}

/**
 * 数组求补集
 * @description 数组1 和 数组2 不相同的元素集合
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Number} 返回数组补集
 */
export function arrayComplement(array1, array2) {
  return [
    ...[...new Set(array1)].filter((item) => !array2.includes(item)),
    ...[...new Set(array2)].filter((item) => !array1.includes(item)),
  ];
}
