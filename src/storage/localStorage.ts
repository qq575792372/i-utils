/* localStorage存储 */
/**
 * 通过key从localStorage缓存中获取数据
 * @param {string} key key值
 * @returns {string} 返回数据
 */
export function getLocalStorage(key: string): string | undefined {
  return window.localStorage.getItem(key) || undefined;
}

/**
 * 设置localStorage缓存数据
 * @param {string} key key值
 * @param {string} value value值
 */
export function setLocalStorage(key: string, value: string): void {
  window.localStorage.setItem(key, value);
}

/**
 * 通过key从localStorage缓存中删除数据
 * @param {string} key key值
 */
export function removeLocalStorage(key: string): void {
  window.localStorage.removeItem(key);
}

/**
 * 清空localStorage缓存中所有数据
 */
export function clearLocalStorage(): void {
  window.localStorage.clear();
}
