/**
 * 浏览器是否支持 Storage
 * @returns {Boolean} 返回true和false
 */
export function isSupportStorage() {
  if (window.localStorage && window.sessionStorage) {
    return true;
  } else {
    return false;
  }
}

/**
 * 导出localStorage，sessionStorage
 */
export * from "./localStorage";
export * from "./sessionStorage";
