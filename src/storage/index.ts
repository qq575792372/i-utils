/**
 * @module 浏览器缓存
 */
/**
 * 浏览器是否支持 Storage
 * @returns {boolean} 返回true和false
 */
export function isSupportStorage(): boolean {
  return !!(window.localStorage && window.sessionStorage);
}

/**
 * 导出localStorage和sessionStorage
 */
export * from "./localStorage";
export * from "./sessionStorage";
