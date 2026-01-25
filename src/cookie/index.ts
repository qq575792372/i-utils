/**
 * @module 浏览器Cookie
 */
import { isEmpty } from "@/validate";

/**
 * 浏览器是否支持 Cookie
 * @returns {boolean} 返回true和false
 */
export function isSupportCookie() {
  return window.navigator.cookieEnabled;
}

/* cookie存储 */
/**
 * 通过name获取cookie
 * @param {string} name 参数name
 * @returns {string} 返回获取的值
 */
export function getCookie(name: string) {
  if (typeof document == "undefined") return "";
  // cookie中每个分号后面是有个空格的，需要替换掉
  const arr = document.cookie ? document.cookie.replace(/\s/g, "").split(";") : [];
  for (const i in arr) {
    const tempArr = arr[i].split("=");
    if (tempArr[0] === name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return "";
}

/**
 * 通过name设置cookie
 * 注：timestamp参数不填，则默认为session级别，浏览器关闭即cookie过期
 * @param {string} name 参数name
 * @param {string} value 设置的value
 * @param {number} timestamp 过期的时间戳值，默认为一天，设置一天过期则为：24*60*60*1000
 */
export function setCookie(name: string, value: string, timestamp: number = 24 * 60 * 60 * 1000) {
  if (typeof document == "undefined") return;
  document.cookie = name + "=" + value + ";expires=" + new Date(Date.now() + timestamp);
}

/**
 * 通过name删除cookie
 * @param {string} name 参数name
 */
export function removeCookie(name: string) {
  if (isEmpty(name)) return;
  setCookie(name, "", -1);
}

/**
 * 清空当前站点域名的cookie
 * @param {string} domain 域名地址，默认是当前站点域名
 */
export function clearCookie(domain: string = document.domain) {
  const names = document.cookie.match(/[^ =;]+(?==)/g) || [];
  if (names && names.length > 0) {
    for (let i = names.length; i--; ) {
      document.cookie =
        names[i] + "=0;path=/;" + domain ? "domain=" + domain + ";" : "" + "expires=" + new Date(0).toUTCString();
    }
  }
}
