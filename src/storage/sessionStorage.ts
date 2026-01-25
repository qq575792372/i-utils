/* sessionStorage存储 */
/**
 * 通过key从sessionStorage缓存中获取数据
 * @param {string} key key值
 * @returns {string} 返回数据
 */
export function getSessionStorage(key: string): string | undefined {
  return window.sessionStorage.getItem(key) || undefined;
}

/**
 * 设置sessionStorage缓存数据
 * @param {string} key key值
 * @param {string} value value值
 */
export function setSessionStorage(key: string, value: string): void {
  window.sessionStorage.setItem(key, value);
}

/**
 * 通过key从sessionStorage缓存中删除数据
 * @param {string} key key值
 */
export function removeSessionStorage(key: string): void {
  window.sessionStorage.removeItem(key);
}

/**
 * 清空sessionStorage缓存中所有数据
 */
export function clearSessionStorage(): void {
  window.sessionStorage.clear();
}
