/**
 * 数组最小值
 * @param {Array} array 数组
 * @returns {Number} 返回最小值
 */
export function arrayMin(array: any[]): number;
/**
 * 数组最大值
 * @param {Array} array 数组
 * @returns {Number} 返回最大值
 */
export function arrayMax(array: any[]): number;
/**
 * 数组求和
 * @param {Array} array 数组
 * @returns {Number} 返回和
 */
export function arraySum(array: any[]): number;
/**
 * 数组求平均值
 * @param {Array} array 数组
 * @returns {Number} 返回平均数
 */
export function arrayAvg(array: any[]): number;
/**
 * 数组中是否包含指定的元素
 * @param {String|Number} value 元素
 * @param {Array} array 查找的数组
 * @returns {Boolean} 返回结果
 */
export function inArray(value: string | number, array: any[]): boolean;
/**
 * 比较两个数组是否相等
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Boolean} 返回结果
 */
export function arrayEquals(array1: any[], array2: any[]): boolean;
/**
 * 生成指定长度的数组
 * @param {Number} length 长度，默认 0
 * @returns {Array} 返回数组
 */
export function arrayCreate(length?: number): any[];
/**
 * 数组指定位置添加元素
 * @description 如果数组为空，则在0位置添加元素
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @param {*} value 添加的元素
 * @returns {Array} 返回操作后的数组
 */
export function arrayInsert(array?: any[], index?: number, value?: any): any[];
/**
 * 数组指定位置前面添加元素
 * @description 如果数组为空，则在0位置添加元素
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @param {*} value 添加的元素
 * @returns {Array} 返回操作后的数组
 */
export function arrayInsertBefore(array?: any[], index?: number, value?: any): any[];
/**
 * 数组指定位置后面添加元素
 * @description 如果数组为空，则在0位置添加元素
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @param {*} value 添加的元素
 * @returns {Array} 返回操作后的数组
 */
export function arrayInsertAfter(array?: any[], index?: number, value?: any): any[];
/**
 * 数组指定位置删除元素
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回操作后的数组
 */
export function arrayRemove(array?: any[], index?: number): any[];
/**
 * 数组指定位置前面删除元素
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回操作后的数组
 */
export function arrayRemoveBefore(array?: any[], index?: number): any[];
/**
 * 数组指定位置后面删除元素
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回操作后的数组
 */
export function arrayRemoveAfter(array?: any[], index?: number): any[];
/**
 * 数组置顶
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回操作后的数组
 */
export function arrayTop(array?: any[], index?: number): any[];
/**
 * 数组置尾
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回操作后的数组
 */
export function arrayBottom(array?: any[], index?: number): any[];
/**
 * 数组向上移动
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回操作后的数组
 */
export function arrayUp(array?: any[], index?: number): any[];
/**
 * 数组向下移动
 * @param {Array} array 数组
 * @param {Number} index 下标位置，默认0
 * @returns {Array} 返回操作后的数组
 */
export function arrayDown(array?: any[], index?: number): any[];
/**
 * 数组交换元素
 * @param {Array} array 数组
 * @param {Number} sourceIndex 原索引
 * @param {Number} targetIndex 目标索引
 * @returns {Array} 返回操作后的数组
 */
export function arraySwap(array: any[], sourceIndex: number, targetIndex: number): any[];
/**
 * 数组排序
 * @param {Array} array 数组
 * @param {Number} mode 排序模式，参考常量集合中 数组常量，默认是升序
 * @returns {Array} 返回操作后的数组
 */
export function arraySort(array: any[], mode?: number): any[];
/**
 * 数组属性混合排序
 * @description 排序默认为asc升序
 * @param {Array} array 数组
 * @param {Array} props 排序的属性
 * @returns {Array} 返回操作后的数组
 */
export function arraySortBy(array: any[], props: any[]): any[];
/**
 * 数组元素去重
 * @param {Array} array 数组
 * @returns {Array} 返回操作后的数组
 */
export function arrayUnique(array: any[]): any[];
/**
 * 数组打乱元素
 * @description 可以适用于一些抽奖人员列表打乱顺序
 * @param {Array} array 数组
 * @returns {Array} 返回操作后的数组
 */
export function arrayShuffle(array: any[]): any[];
/**
 * 普通数组转树形结构
 * @description 包含id和pid属性关系的一维数组，转为children的树形结构
 * @param {Array} array 数组
 * @param {Object} setting 配置项
 * @returns {Array} 返回树形节点
 */
export function arrayToTree(array: any[], setting?: Object): any[];
/**
 * 树形结构转普通数组
 * @param {Array} nodes 树形节点
 * @param {Object} setting 配置项
 * @returns {Array} 返回普通数组
 */
export function treeToArray(nodes: any[], setting?: Object): any[];
/**
 * 数组求并集
 * @description 数组1 和 数组2 合并一起的元素集合
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Array} 返回数组
 */
export function arrayUnion(array1: any[], array2: any[]): any[];
/**
 * 数组求交集
 * @description 数组1 和 数组2 相同的元素集合
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Array} 返回数组
 */
export function arrayIntersect(array1: any[], array2: any[]): any[];
/**
 * 数组求差集
 * @description 数组1 中不包含 数组2 的元素集合
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Array} 返回数组
 */
export function arrayDifference(array1: any[], array2: any[]): any[];
/**
 * 数组求补集
 * @description 数组1 和 数组2 不相同的元素集合
 * @param {Array} array1 数组1
 * @param {Array} array2 数组2
 * @returns {Array} 返回数组
 */
export function arrayComplement(array1: any[], array2: any[]): any[];
