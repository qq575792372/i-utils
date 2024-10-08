import { isEmpty, isObject, isArray, isDate } from "../validate";

/* 对象转换 */
/**
 * map转object
 * @param {Map} map 参数
 * @returns {Object} 返回Object
 */
export function mapToObject(map) {
  let obj = Object.create(null);
  for (let [k, v] of map) {
    obj[k] = v;
  }
  return obj;
}

/**
 * map转json字符串
 * @param {Map} map 参数
 * @returns {String} 返回Json字符串
 */
export function mapToJson(map) {
  return JSON.stringify(mapToObject(map));
}

/**
 * object转map
 * @param {Object} obj 参数
 * @returns {Map} 返回Map
 */
export function objectToMap(obj) {
  let map = new Map();
  for (let k of Object.keys(obj)) {
    map.set(k, obj[k]);
  }
  return map;
}

/**
 * json字符串转map
 * @param {String} json json字符串
 * @returns {Map} 返回Map
 */
export function jsonToMap(json) {
  return objectToMap(JSON.parse(json));
}

/**
 * json对象转json字符串
 * @param {Object} json json对象
 * @returns {String} 返回Json字符串
 */
export function stringifyJson(json) {
  return JSON.stringify(json);
}

/**
 * json字符串转json对象
 * @param {String} json json字符串
 * @returns {Object} 返回Json对象
 */
export function parseJson(json) {
  if (isEmpty(json)) return;
  return JSON.parse(json);
}

/* 数据拷贝，对比，合并等操作 */
/**
 * 浅拷贝数据
 * @param {*} source 拷贝的数据
 * @returns {*} 返回浅拷贝的数据
 */
export function clone(source) {
  return Object.assign(source);
}

/**
 * 深拷贝数据
 * @param {*} source 拷贝的数据
 * @returns {*} 返回深拷贝的数据
 */
export function cloneDeep(source) {
  //  Object
  if (isObject(source)) {
    let copy = {};
    for (let attr in source) {
      if (source.hasOwnProperty(attr)) copy[attr] = cloneDeep(source[attr]);
    }
    return copy;
  }

  //  Array
  else if (isArray(source)) {
    let copy = [];
    for (let i = 0, len = source.length; i < len; i++) {
      copy[i] = cloneDeep(source[i]);
    }
    return copy;
  }

  //  Date
  else if (isDate(source)) {
    let copy = new Date();
    copy.setTime(source.getTime());
    return copy;
  }

  // Other 原路返回源数据
  else {
    return source;
  }
}

/**
 * 比较两个对象是否相等
 * @description 方法只能对比简单的对象，不能包含function，另外对象的属性顺序不一致也是相等的
 * @param {Object} obj1 对象1
 * @param {Object} obj2 对象2
 * @returns {Boolean} 返回true和false
 */
export function objectEquals(obj1, obj2) {
  // 比较值相等
  if (obj1 === obj2) {
    return true;
  }
  // 比较Date
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }
  // 对象比较引用
  if (!obj1 || !obj2 || (typeof obj1 !== "object" && typeof obj2 !== "object")) {
    return obj1 === obj2;
  }
  // 比较原型
  if (obj1.prototype !== obj2.prototype) {
    return false;
  }
  // 比较对象的值
  const keys = Object.keys(obj1);
  if (keys.length !== Object.keys(obj2).length) {
    return false;
  } else {
    return keys.every((k) => objectEquals(obj1[k], obj2[k]));
  }
}

/**
 * 合并对象
 * @param {Object} target 目标对象
 * @param {Object[]} source 原对象列表
 * @returns {Object} 返回合并后的对象
 */
export function merge(target, ...source) {
  return Object.assign(target, ...source);
}

/* 根据字符串属性路径操作目标对象 */
/**
 * 根据字符串属性路径获取目标对象的值
 * @example
 * let res = {code:200, data:{rows:[], pages:{current:1,pageSize:20}}}
 * this._getTargetValueByPath(res, 'data.pages.pageSize'); // 这里会输出20
 * @param {Object} target 目标对象
 * @param {String} path 字符串属性路径
 * @returns {Object} 返回目标对象
 */
export function getTargetValueByPath(target, path = "data") {
  const paths = (path || "data").split(".");
  let data = target;
  // 属性总个数
  let lastIndex = paths.length - 1;
  for (const index in paths) {
    // 如果路径中没有该属性，则创建一个
    if (data[paths[index]] === null || data[paths[index]] === undefined) {
      data[paths[index]] = Number(index) !== lastIndex ? {} : undefined;
    }
    // 逐层向下找到对应属性的值
    data = data[paths[index]];
  }
  return data;
}

/**
 * 根据字符串属性路径设置目标对象的值
 * @example
 * let res = {code:200, data:{rows:[], pages:{current:1,pageSize:20}}}
 * this._setTargetValueByPath(res, 'data.pages.pageSize', 30); // 打印res对象会发现pageSize的值改为了30
 * @param {Object} target 目标对象
 * @param {String} path 字符串属性路径
 * @param {*} value 值
 */
export function setTargetValueByPath(target, path = "data", value) {
  const paths = (path || "data").split(".");
  // 变量表达式拼接，最终结果如：target['personInfo']['personName']='xxx';
  let fxStr = "";
  for (const name of paths) {
    fxStr += `['${name}']`;
  }
  const fn = new Function("target", `target${fxStr}=${value}`);
  fn(target);
}
