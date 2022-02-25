import { isEmpty, isNull } from "../validate";

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
  return objToMap(JSON.parse(json));
}

/**
 * json对象转json字符串
 * @param {Object} json json对象
 * @returns {String} 返回Json字符串
 */
export function strifyJson(json) {
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

/**
 * 深拷贝数据
 * @description 目前只支持 Object，Array，Date三种数据类型
 * @param {Object|Array|Date} source 需要克隆的数据
 * @returns {Object|Array|Date} 返回深度克隆后的数据
 */
export function cloneDeep(source) {
  if (isNull(source)) return undefined;

  //  Object
  if (source instanceof Object) {
    let copy = {};
    for (let attr in source) {
      if (source.hasOwnProperty(attr)) copy[attr] = cloneDeep(source[attr]);
    }
    return copy;
  }

  //  Array
  else if (source instanceof Array) {
    let copy = [];
    for (let i = 0, len = source.length; i < len; i++) {
      copy[i] = cloneDeep(source[i]);
    }
    return copy;
  }

  //  Date
  else if (source instanceof Date) {
    let copy = new Date();
    copy.setTime(source.getTime());
    return copy;
  }

  // Other
  // 原路返回源数据
  else {
    return source;
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
