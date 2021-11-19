/**
 * 设置sessionStorage缓存数据
 * @param {String} key
 * @param {String} value
 */
export function setSessionStorage(key, value) {
  window.sessionStorage.setItem(key, value);
}

/**
 * 通过key从sessionStorage缓存中获取数据
 * @param {String} key
 * @returns {String} 返回值
 */
export function getSessionStorage(key) {
  return window.sessionStorage.getItem(key) || "";
}

/**
 * 通过key从sessionStorage缓存中删除数据
 * @param {String} key
 */
export function removeSessionStorage(key) {
  window.sessionStorage.removeItem(key);
}

/**
 * 清空sessionStorage缓存中所有数据
 */
export function clearSessionStorage() {
  window.sessionStorage.clear();
}
