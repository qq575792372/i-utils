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
  return JSON.stringify(this.mapToObject(map));
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

/**
 * 深拷贝数据
 * @description 目前只支持 Object，Array，Date三种数据类型
 * @param {Object|Array|Date} target 需要克隆的数据
 * @returns {Object|Array|Date} 返回深度克隆后的数据
 */
export function deepClone(target) {
  if (isNull(target)) return null;

  //  Object
  if (target instanceof Object) {
    let copy = {};
    for (let attr in target) {
      if (target.hasOwnProperty(attr)) copy[attr] = deepClone(target[attr]);
    }
    return copy;
  }

  //  Array
  else if (target instanceof Array) {
    let copy = [];
    for (let i = 0, len = target.length; i < len; i++) {
      copy[i] = deepClone(target[i]);
    }
    return copy;
  }

  //  Date
  else if (target instanceof Date) {
    let copy = new Date();
    copy.setTime(target.getTime());
    return copy;
  }

  // Other
  else {
    return target;
  }
}

/**
 * 合并对象
 * @param {Object} args json字符串
 * @returns {Object} 返回合并后的对象
 */
export function mergeObj(...args) {
  // todo
}
