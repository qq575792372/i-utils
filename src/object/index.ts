/**
 * @module 对象
 */
import { isEmpty, isObject, isArray, isDate, isNumber, isNotNaN, isNaN } from "@/validate";

/* 对象转换 */
/**
 * map转object
 * @param {Map} map 参数
 * @returns {Object} 返回Object
 */
export function mapToObject(map: Map<any, any>): Record<any, any> {
  const obj = Object.create(null);
  for (const [k, v] of map) {
    obj[k] = v;
  }
  return obj;
}

/**
 * map转json字符串
 * @param {Map} map 参数
 * @returns {string} 返回Json字符串
 */
export function mapToJson(map: Map<any, any>): string {
  return JSON.stringify(mapToObject(map));
}

/**
 * object转map
 * @param {Object} obj 参数
 * @returns {Map} 返回Map
 */
export function objectToMap(obj: Record<any, any>): Map<any, any> {
  const map = new Map();
  for (const k of Object.keys(obj)) {
    map.set(k, obj[k]);
  }
  return map;
}

/**
 * json字符串转map
 * @param {string} json json字符串
 * @returns {Map} 返回Map
 */
export function jsonToMap(json: string): Map<any, any> {
  return objectToMap(JSON.parse(json));
}

/**
 * json对象转json字符串
 * @param {Object} json json对象
 * @param {boolean} replacer 是否处理循环引用
 * @returns {string} 返回Json字符串
 */
export function stringifyJson(json: Record<any, any>, replacer: boolean = false): string {
  try {
    return JSON.stringify(
      json,
      replacer
        ? (key: string, value: any) => {
            if (typeof value === "function" || typeof value === "symbol") {
              return String(value);
            }
            return value;
          }
        : undefined,
    );
  } catch (error) {
    console.error("JSON序列化失败:", error);
    return "{}"; // 兜底返回空对象
  }
}

/**
 * json字符串转json对象
 * @param {string} json json字符串
 * @returns {Object} 返回Json对象
 */
export function parseJson(json: string): Record<any, any> | null {
  if (isEmpty(json)) return null;
  try {
    return JSON.parse(json);
  } catch (e) {
    console.error(e);
    return null;
  }
}

/* 数据拷贝，对比，合并等操作 */
/**
 * 浅拷贝数据
 * @param {*} source 拷贝的数据
 * @returns {*} 返回浅拷贝的数据
 */
export function clone(source: any): any {
  // 边界处理：null/undefined/原始类型（直接返回，无需拷贝）
  if (source === null || typeof source !== "object") {
    return source;
  }

  //  处理数组（用扩展运算符实现浅拷贝，避免Object.assign的索引问题）
  if (Array.isArray(source)) {
    return [...source];
  }

  //  处理普通对象（真正创建新对象，原代码Object.assign(source)等于没拷贝）
  if (source.constructor === Object) {
    return Object.assign({}, source);
  }

  // 处理特殊内置对象（Date/RegExp）
  if (source instanceof Date) {
    return new Date(source.getTime());
  }
  if (source instanceof RegExp) {
    return new RegExp(source.source, source.flags);
  }

  // 其他不可浅拷贝的对象（函数/类实例/Map/Set等，直接返回原对象）
  return source;
}

/**
 * 深拷贝数据
 * @param {*} source 拷贝的数据
 * @returns {*} 返回深拷贝的数据
 */
export function deepClone(source: any): any {
  // Object
  if (isObject(source)) {
    const copy: Record<string, any> = {};
    for (const attr in source) {
      if (source.hasOwnProperty(attr)) {
        copy[attr] = deepClone(source[attr]);
      }
    }
    return copy;
  }

  // Array
  else if (isArray(source)) {
    const copy = [];
    for (let i = 0, len = source.length; i < len; i++) {
      copy[i] = deepClone(source[i]);
    }
    return copy;
  }

  // Date
  else if (isDate(source)) {
    const copy = new Date();
    copy.setTime(source.getTime());
    return copy;
  }

  // Other 返回原数据
  else {
    return source;
  }
}

/**
 * 比较两个对象是否相等
 * @description 方法只能对比简单的对象，不能包含function，另外对象的属性顺序不一致也是相等的
 * @param {Object} obj1 对象1
 * @param {Object} obj2 对象2
 * @returns {boolean} 返回true和false
 */
export function objectEquals(obj1: Record<any, any>, obj2: Record<any, any>): boolean {
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
export function merge(target: Record<any, any>, ...source: Record<any, any>[]): any {
  if (target == null || typeof target !== "object") {
    return target;
  }
  return Object.assign(target, ...source);
}

/* 根据字符串属性路径操作目标对象 */
/**
 * 根据字符串属性路径获取目标对象的值
 * @example
 * let res = {code:200, data:{rows:[], pages:{current:1,pageSize:20}}}
 * this._getValueByPath(res, 'data.pages.pageSize'); // 这里会输出20
 * @param {Object} target 目标对象
 * @param {string} path 字符串属性路径
 * @returns {*} 返回目标对象的值
 */
export function getValueByPath(target: Record<any, any>, path: string = "data"): any {
  const paths = (path || "data").split(".");
  let current = target;
  for (const index in paths) {
    const part = paths[index];
    // 判断属性是取的数组
    const { propName, propIndex = 0, isArray } = _getTargetPathPart(paths[index]);
    if (isArray) {
      // 获取的数组下标超出实际的长度
      if (propIndex < 0 || propIndex >= current[propName].length) {
        return;
      }
      // 逐层向下找到对应属性的值
      current = current[propName][propIndex];
    }
    // 判断属性是取的对象属性
    else {
      // 如果属性不存在，则返回空的
      if (!current || !current.hasOwnProperty(part) || typeof current !== "object") {
        return;
      }
      // 逐层向下找到对应属性的值
      current = current[part];
    }
  }
  return current;
}

/**
 * 根据字符串属性路径设置目标对象的值
 * @example
 * let res = {code:200, data:{rows:[], pages:{current:1,pageSize:20}}}
 * this._setValueByPath(res, 'data.pages.pageSize', 30); // 打印res对象会发现pageSize的值改为了30
 * @param {Object} target 目标对象
 * @param {string} path 字符串属性路径
 * @param {*} value 值
 * @returns {*} 返回修改过后的目标对象
 */
export function setValueByPath(target: Record<any, any>, path: string = "data", value: any): Record<any, any> {
  const paths = (path || "data").split(".");
  let current = target;

  // 遍历到路径的倒数第二个属性
  for (let index = 0; index < paths.length - 1; index++) {
    const part = paths[index];
    const nextPart = paths[index + 1];
    // 判断属性是取的数组
    const { propName, propIndex = 0, isArray } = _getTargetPathPart(part);

    if (isArray) {
      // 检查当前属性是否存在，若不存在或者不是数组，则创建一个数组
      if (!current || !current.hasOwnProperty(propName)) {
        current[propName] = [];
      }
      // 确保数组长度足够容纳指定索引
      while (current[propName].length <= propIndex) {
        current[propName].push({});
      }
      // 逐层向下找到对应属性的值
      current = current[propName][propIndex];
    } else {
      // 如果不是数组索引形式，处理普通对象属性，如果是.1.数组形式，则还是返回数组
      if (!current || !current.hasOwnProperty(part) || typeof current[part] !== "object") {
        current[part] = isNaN(nextPart) ? [] : {};
      }
      // 移动到对象的下一层属性
      current = current[part];
    }
  }

  // 处理最后一个路径部分
  const lastPath = paths[paths.length - 1];
  const { propName, propIndex = 0, isArray } = _getTargetPathPart(lastPath);
  if (isArray) {
    // 检查当前属性是否存在，若不存在或者不是数组，则创建一个数组
    if (!current.hasOwnProperty(propName) || !Array.isArray(current[propName])) {
      current[propName] = [];
    }
    // 确保数组长度足够容纳指定索引
    while (current[propName].length <= propIndex) {
      current[propName].push({});
    }
    // 逐层向下找到对应属性的值
    current[propName][propIndex] = value;
  } else {
    current[lastPath] = value;
  }

  // 返回源对象
  return target;
}

/* 内部方法 */
/**
 * 获得目标路径的片段
 * @param {string} path
 * @returns {*} 返回获得到的值
 */
function _getTargetPathPart(path: string): Record<any, any> {
  const pathArrayMatch = path.match(/^(\w+)\[(\d+)]$/);
  return {
    propName: (pathArrayMatch && pathArrayMatch[1]) || undefined, // 属性名
    propIndex: pathArrayMatch ? parseInt(pathArrayMatch[2], 10) : undefined, // 属性数组时候的下标
    isArray: !!pathArrayMatch, // 是否是数组
  };
}
