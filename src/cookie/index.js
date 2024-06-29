import { isEmpty } from "../validate";

/**
 * 浏览器是否支持 Cookie
 * @returns {Boolean} 返回true和false
 */
export function isSupportCookie() {
  return window.navigator.cookieEnabled;
}

/* cookie存储 */
/**
 * 通过name获取cookie
 * @param {String} name 参数name
 * @returns {String} 返回获取的值
 */
export function getCookie(name) {
  if (typeof document == "undefined") return;
  // cookie中每个分号后面是有个空格的，需要替换掉
  let arr = document.cookie
    ? document.cookie.replace(/\s/g, "").split(";")
    : [];
  for (let i in arr) {
    let tempArr = arr[i].split("=");
    if (tempArr[0] == name) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return "";
}

/**
 * 通过name设置cookie
 * 注：timestamp参数不填，则默认为session级别，浏览器关闭即cookie过期
 * @param {String} name 参数name
 * @param {String} value 设置的value
 * @param {Timestamp} timestamp 过期的时间戳值，默认为一天，设置一天过期则为：24*60*60*1000
 */
export function setCookie(name, value, timestamp = 24 * 60 * 60 * 1000) {
  if (typeof document == "undefined") return;
  document.cookie =
    name + "=" + value + ";expires=" + new Date(Date.now() + timestamp);
}

/**
 * 通过name删除cookie
 * @param {String} name 参数name
 */
export function removeCookie(name) {
  if (isEmpty(name)) return;
  setCookie(name, "", -1);
}

/**
 * 清空当前站点域名的cookie
 * @param {String} domain 域名地址，默认是当前站点域名
 */
export function clearCookie(domain = document.domain) {
  let names = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (names) {
    for (let i = names.length; i--; ) {
      document.cookie =
        names[i] + "=0;path=/;" + domain
          ? "domain=" + domain + ";"
          : "" + "expires=" + new Date(0).toUTCString();
    }
  }
}
