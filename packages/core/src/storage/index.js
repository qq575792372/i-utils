/**
 * 浏览器是否支持 Storage
 * @returns {Boolean} 返回true和false
 */
export function isSupportStorage() {
  return !!(window.localStorage && window.sessionStorage);
}

/**
 * 导出localStorage和sessionStorage
 */
export * from "./localStorage.js";
export * from "./sessionStorage.js";
