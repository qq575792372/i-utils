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
 * map转json
 * @param {Map} map 参数
 * @returns {String} 返回Json字符串
 */
export function mapToJson(map) {
  return JSON.stringify(this.mapToObject(map));
}

/**
 * json转map
 * @param {Json} json 参数
 * @returns {Map} 返回Map
 */
export function jsonToMap(json) {
  return objectToMap(JSON.parse(json));
}

/**
 * json转string
 * @param {Json} json 参数
 * @returns {String} 返回JSON字符串
 */
export function jsonToString(json) {
  return JSON.stringify(json);
}

/**
 * string转json
 * @param {String} str 参数
 * @returns {Object} 返回JSON对象
 */
export function stringToJson(str) {
  if (isEmpty(str)) return;
  return JSON.parse(str);
}

/**
 * 深拷贝数据
 * @param {Object|Array|Date} target 需要克隆的数据，只支持 Object，Array，Date三种
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
