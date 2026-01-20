/**
 * 通过key从localStorage缓存中获取数据
 * @param {String} key key值
 * @returns {String} 返回数据
 */
export function getLocalStorage(key: string): string;
/**
 * 设置localStorage缓存数据
 * @param {String} key key值
 * @param {String} value value值
 */
export function setLocalStorage(key: string, value: string): void;
/**
 * 通过key从localStorage缓存中删除数据
 * @param {String} key key值
 */
export function removeLocalStorage(key: string): void;
/**
 * 清空localStorage缓存中所有数据
 */
export function clearLocalStorage(): void;
