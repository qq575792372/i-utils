/**
 * map转object
 * @param {Map} map 参数
 * @returns 返回Object
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
 * @returns 返回Map
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
 * @returns 返回Json
 */
export function mapToJson(map) {
  return JSON.stringify(this.mapToObject(map));
}

/**
 * json转map
 * @param {Json} json 参数
 * @returns 返回Map
 */
export function jsonToMap(json) {
  return this.objectToMap(JSON.parse(json));
}

/**
 * json转string
 * @param {Json} json 参数
 * @returns 返回Map
 */
export function jsonToString(json) {
  return JSON.stringify(json);
}

/**
 * string转json
 * @param {String} string 参数
 * @returns 返回Map
 */
export function stringToJson(string) {
  if (this.isNull(string)) return;
  return JSON.parse(string);
}
