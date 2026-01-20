/**
 * 设置缓存
 * @param {String} key key值
 * @param {*} data data数据
 */
export function setStorageSync(key: string, data: any): void;
/**
 * 获得缓存数据
 * @param {String} key key值
 * @returns {*} 返回获取的值
 */
export function getStorageSync(key: string): any;
/**
 * 获得缓存信息
 * @returns {Object} 返回缓存信息
 */
export function getStorageInfoSync(): Object;
/**
 * 删除缓存数据
 * @param {String} key key值
 */
export function removeStorageSync(key: string): void;
/**
 * 清空所有缓存数据
 */
export function clearStorageSync(): void;
/**
 * 设置缓存
 * @param {String} key key值
 * @param {*} data data数据
 * @param {Boolean} encrypt 是否开启加密存储
 * @returns {Promise} 返回Promise
 */
export function setStorage({ key, data, encrypt }: string): Promise<any>;
/**
 * 获得缓存数据
 * @param {String} key key值
 * @param {Boolean} encrypt 是否开启加密存储
 * @returns {Promise} 返回Promise
 */
export function getStorage({ key, encrypt }: string): Promise<any>;
/**
 * 获得缓存信息
 * @returns {Object} 返回Promise
 */
export function getStorageInfo(): Object;
/**
 * 删除缓存数据
 * @param {String} key key值
 * @returns {Promise} 返回Promise
 */
export function removeStorage({ key }: string): Promise<any>;
/**
 * 清空所有缓存数据
 * @returns {Promise} 返回Promise
 */
export function clearStorage(): Promise<any>;
