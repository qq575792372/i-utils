import { isEmpty, isNull } from "../validate";
import { SORT_TYPE } from "../constants/sort";

/* 数组计算 */
/**
 * 数组最小值
 * @param {Array} array 数组
 * @returns {Number} 返回最小值
 */
export function arrayMin(array) {
  return Math.min.apply(null, array);
}

/**
 * 数组最大值
 * @param {Array} array 数组
 * @returns {Number} 返回最大值
 */
export function arrayMax(array) {
  return Math.max.apply(null, array);
}

/**
 * 数组求和
 * @param {Array} array 数组
 * @returns {Number} 返回和
 */
export function arraySum(array) {
  return array.reduce(function (pre, cur) {
    return pre + cur;
  });
}

/**
 * 数组求平均值
 * @param {Array} array 数组
 * @returns {Number} 返回平均数
 */
export function arrayAvg(array) {
  return arraySum(array) / array.length;
}

/* 数组比较 */
/**
 * 数组中是否包含指定的元素
 * @param {String|Number} value 元素
 * @param {Array} array 查找的数组
 * @returns {Boolean} 返回结果
 */
export function inArray(value, array) {
  if (isNull(value)) return false;
  return array.includes(value);
}

/**
 * 比较两个数组是否相等
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Boolean} 返回结果
 */
export function arrayEquals(array1, array2) {
  if (array1 === array2) return true;
  if (array1.length !== array2.length) return false;
  return array1.every((v, i) => v === array2[i]);
}

/* 数组操作 */
/**
 * 生成指定长度的数组
 * @param {Number} length 长度，默认 0
 * @returns {Array} 返回数组
 */
export function arrayCreate(length = 0) {
  return [...Array(length).keys()];
}

/**
 * 数组指定位置添加元素
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @param {*} value 添加的元素
 * @returns {Array} 返回操作后的数组
 */
export function arrayInsert(array = [], index = 0, value = undefined) {
  array.splice(index, 0, value);
  return array;
}

/**
 * 数组指定位置前面添加元素
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @param {*} value 添加的元素
 * @returns {Array} 返回操作后的数组
 */
export function arrayInsertBefore(array = [], index = 0, value = undefined) {
  if (index < 0 || index > array.length - 1) return array;

  array.splice(index, 0, value);
  return array;
}

/**
 * 数组指定位置后面添加元素
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @param {*} value 添加的元素
 * @returns {Array} 返回操作后的数组
 */
export function arrayInsertAfter(array = [], index = 0, value = undefined) {
  if (index < 0 || index > array.length - 1) return array;

  array.splice(index, 0, array.splice(index, 1, value)[0]);
  return array;
}

/**
 * 数组指定位置删除元素
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回操作后的数组
 */
export function arrayRemove(array = [], index = 0) {
  if (index < 0 || index > array.length - 1) return array;

  array.splice(index, 1);
  return array;
}

/**
 * 数组指定位置前面删除元素
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回操作后的数组
 */
export function arrayRemoveBefore(array = [], index = 0) {
  if (index < 0 || index > array.length - 1) return array;

  array.splice(index - 1, 1);
  return array;
}

/**
 * 数组指定位置后面删除元素
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回操作后的数组
 */
export function arrayRemoveAfter(array = [], index = 0) {
  if (index < 0 || index > array.length - 1) return array;

  array.splice(index + 1, 1);
  return array;
}

/**
 * 数组置顶
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回操作后的数组
 */
export function arrayTop(array = [], index = 0) {
  if (index < 0 || index > array.length - 1) return array;

  array.unshift(array.splice(index, 1)[0]);
  return array;
}

/**
 * 数组置尾
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回操作后的数组
 */
export function arrayBottom(array = [], index = 0) {
  if (index < 0 || index > array.length - 1) return array;

  array.push(array.splice(index, 1)[0]);
  return array;
}

/**
 * 数组向上移动
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回操作后的数组
 */
export function arrayUp(array = [], index = 0) {
  if (index < 0 || index > array.length - 1) return array;

  if (index > 0) {
    array.splice(index - 1, 0, array.splice(index, 1)[0]);
  } else {
    array.push(array.splice(index, 1)[0]);
  }
  return array;
}

/**
 * 数组向下移动
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回操作后的数组
 */
export function arrayDown(array = [], index = 0) {
  if (index < 0 || index > array.length - 1) return array;

  if (index < array.length - 1) {
    array.splice(index + 1, 0, array.splice(index, 1)[0]);
  } else {
    array.unshift(array.splice(index, 1)[0]);
  }
  return array;
}

/**
 * 数组交换元素
 * @param {Array} array 数组
 * @param {Number} sourceIndex 原索引
 * @param {Number} targetIndex 目标索引
 * @returns {Array} 返回操作后的数组
 */
export function arraySwap(array, sourceIndex, targetIndex) {
  if (sourceIndex < 0 || targetIndex < 0 || sourceIndex > array.length - 1 || targetIndex > array.length - 1) {
    return array;
  }

  [array[targetIndex], array[sourceIndex]] = [array[sourceIndex], array[targetIndex]];
  return array;
}

/**
 * 数组排序
 * @param {Array} array 数组
 * @param {Number} mode 排序模式，参考常量集合中 数组常量，默认是升序
 * @returns {Array} 返回操作后的数组
 */
export function arraySort(array, mode = SORT_TYPE.SORT_ASC) {
  return array.sort((a, b) => {
    switch (mode) {
      // 升序
      case SORT_TYPE.SORT_ASC:
        return a - b;
      // 降序
      case SORT_TYPE.SORT_DESC:
        return b - a;
      // 随机
      case SORT_TYPE.SORT_RANDOM:
        return Math.random() - 0.5;
      // 默认
      default:
        return array;
    }
  });
}

/**
 * 数组元素去重
 * @param {Array} array 数组
 * @returns {Array} 返回操作后的数组
 */
export function arrayUnique(array) {
  if (isEmpty(array)) return [];

  return Array.from(new Set(array));
}

/**
 * 数组打乱元素
 * @description 可以适用于一些抽奖人员列表打乱顺序
 * @param {Array} array 数组
 * @returns {Array} 返回操作后的数组
 */
export function arrayShuffle(array) {
  for (let i = 1; i < array.length; i++) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[random], array[i]] = [array[i], array[random]];
  }
  return array;
}

/* 数组转换 */
/**
 * 普通数组转树形结构
 * @description 包含id和pid属性关系的一维数组，转为children的树形结构
 * @param {Array} array 数组
 * @param {Object} setting 配置项
 * @returns {Array} 返回树形节点
 */
export function arrayToTree(array, setting = { key: "id", parentKey: "pid", childrenKey: "children" }) {
  let key = setting.key,
    parentKey = setting.parentKey,
    childrenKey = setting.childrenKey;

  // 数组或者key是否为空
  if (!array || array.length === 0 || !key || key === "") return [];

  // 获得子节点方法
  const nodeChildren = function (node, childrenKey, newChildren) {
    if (!node) {
      return null;
    }
    if (typeof newChildren !== "undefined") {
      node[childrenKey] = newChildren;
    }
    return node[childrenKey];
  };

  // 声明变量
  let result = [];
  let tempMap = {};
  for (let i = 0; i < array.length; i++) {
    // 如果源数据数组中有children，则需要删除掉，否则会导致和之前的children合并
    array[i][childrenKey] && delete array[i][childrenKey];
    tempMap[array[i][key]] = array[i];
  }
  for (let i = 0; i < array.length; i++) {
    let parent = tempMap[array[i][parentKey]];
    if (parent && array[i][key] !== array[i][parentKey]) {
      let children = nodeChildren(parent, childrenKey);

      if (!children) {
        children = nodeChildren(parent, childrenKey, []);
      }
      children.push(array[i]);
    } else {
      result.push(array[i]);
    }
  }

  // 返回结果
  return result;
}

/**
 * 树形结构转普通数组
 * @param {Array} nodes 树形节点
 * @param {Object} setting 配置项
 * @returns {Array} 返回普通数组
 */
export function treeToArray(nodes, setting = { childrenKey: "children" }) {
  let childrenKey = setting.childrenKey;
  let result = [];
  for (let node of nodes) {
    // 删除掉多余空的children
    if (node[childrenKey] && !node[childrenKey].length) {
      delete node[childrenKey];
    }
    result.push(node);
    // 继续执行
    if (node[childrenKey] && node[childrenKey].length) {
      let array = treeToArray(node[childrenKey], setting);
      array && result.push(...array);
    }
  }

  // 返回结果
  return result;
}

/* 数组求并集，交集，差集等 */
/**
 * 数组求并集
 * @description 数组1 和 数组2 合并一起的元素集合
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Array} 返回数组
 */
export function arrayUnion(array1, array2) {
  return [...new Set(array1.concat(array2))];
}

/**
 * 数组求交集
 * @description 数组1 和 数组2 相同的元素集合
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Array} 返回数组
 */
export function arrayIntersect(array1, array2) {
  return [...new Set(array1)].filter((item) => array2.includes(item));
}

/**
 * 数组求差集
 * @description 数组1 中不包含 数组2 的元素集合
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Array} 返回数组
 */
export function arrayDifference(array1, array2) {
  return [...new Set(array1)].filter((item) => !array2.includes(item));
}

/**
 * 数组求补集
 * @description 数组1 和 数组2 不相同的元素集合
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Array} 返回数组
 */
export function arrayComplement(array1, array2) {
  return [
    ...[...new Set(array1)].filter((item) => !array2.includes(item)),
    ...[...new Set(array2)].filter((item) => !array1.includes(item)),
  ];
}
