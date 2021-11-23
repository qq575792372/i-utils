import { isEmpty } from "../validate";

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
 * @param {String} string 参数
 * @returns {Object} 返回JSON对象
 */
export function stringToJson(string) {
  if (isEmpty(string)) return;
  return JSON.parse(string);
}
