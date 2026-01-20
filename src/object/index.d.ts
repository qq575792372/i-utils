/**
 * map转object
 * @param {Map} map 参数
 * @returns {Object} 返回Object
 */
export function mapToObject(map: Map<any, any>): Object;
/**
 * map转json字符串
 * @param {Map} map 参数
 * @returns {String} 返回Json字符串
 */
export function mapToJson(map: Map<any, any>): string;
/**
 * object转map
 * @param {Object} obj 参数
 * @returns {Map} 返回Map
 */
export function objectToMap(obj: Object): Map<any, any>;
/**
 * json字符串转map
 * @param {String} json json字符串
 * @returns {Map} 返回Map
 */
export function jsonToMap(json: string): Map<any, any>;
/**
 * json对象转json字符串
 * @param {Object} json json对象
 * @returns {String} 返回Json字符串
 */
export function stringifyJson(json: Object): string;
/**
 * json字符串转json对象
 * @param {String} json json字符串
 * @returns {Object} 返回Json对象
 */
export function parseJson(json: string): Object;
/**
 * 浅拷贝数据
 * @param {*} source 拷贝的数据
 * @returns {*} 返回浅拷贝的数据
 */
export function clone(source: any): any;
/**
 * 深拷贝数据
 * @param {*} source 拷贝的数据
 * @returns {*} 返回深拷贝的数据
 */
export function deepClone(source: any): any;
/**
 * 比较两个对象是否相等
 * @description 方法只能对比简单的对象，不能包含function，另外对象的属性顺序不一致也是相等的
 * @param {Object} obj1 对象1
 * @param {Object} obj2 对象2
 * @returns {Boolean} 返回true和false
 */
export function objectEquals(obj1: Object, obj2: Object): boolean;
/**
 * 合并对象
 * @param {Object} target 目标对象
 * @param {Object[]} source 原对象列表
 * @returns {Object} 返回合并后的对象
 */
export function merge(target: Object, ...source: Object[]): Object;
/**
 * 根据字符串属性路径获取目标对象的值
 * @example
 * let res = {code:200, data:{rows:[], pages:{current:1,pageSize:20}}}
 * this._getValueByPath(res, 'data.pages.pageSize'); // 这里会输出20
 * @param {Object} target 目标对象
 * @param {String} path 字符串属性路径
 * @returns {Object} 返回目标对象
 */
export function getValueByPath(target: Object, path?: string): Object;
/**
 * 根据字符串属性路径设置目标对象的值
 * @example
 * let res = {code:200, data:{rows:[], pages:{current:1,pageSize:20}}}
 * this._setValueByPath(res, 'data.pages.pageSize', 30); // 打印res对象会发现pageSize的值改为了30
 * @param {Object} target 目标对象
 * @param {String} path 字符串属性路径
 * @param {*} value 值
 */
export function setValueByPath(target: Object, path: string, value: any): Object;
