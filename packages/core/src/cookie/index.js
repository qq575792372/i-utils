import { isEmpty } from "../validate";

/**
 * 通过key获取cookie
 * @param {String} key 参数key
 * @returns {String} 返回获取的值
 */
export function getCookie(key) {
  if (typeof document == "undefined") return;
  // 多个cookie获取到每个分号后面是有个空格的，需要以下来分割
  let arr = document.cookie ? document.cookie.split("; ") : [];
  console.log("arr", arr);
  for (let i in arr) {
    let arr2 = arr[i].split("=");
    if (arr2[0] == key) {
      return decodeURIComponent(arr2[1]);
    }
  }
  return "";
}

/**
 * 通过key设置cookie
 * 注：timestamp参数不填，则默认为session级别，浏览器关闭即cookie过期
 * @param {String} key 参数key
 * @param {String} value 设置的value
 * @param {Timestamp} timestamp 过期的时间戳值，默认为一天，设置一天过期则为：24*60*60*1000
 */
export function setCookie(key, value, timestamp = 24 * 60 * 60 * 1000) {
  if (typeof document == "undefined") return;
  document.cookie =
    key + "=" + value + ";expires=" + new Date(Date.now() + timestamp);
}

/**
 * 通过key删除cookie
 * @param {String} key 参数key
 */
export function removeCookie(key) {
  if (isEmpty(key)) return;
  setCookie(key, "", -1);
}

/**
 * 清空当前站点域名的cookie
 * @param {String} domain 域名地址，默认是当前站点域名
 */
export function clearCookie(domain = document.domain) {
  let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (let i = keys.length; i--; ) {
      document.cookie =
        keys[i] + "=0;path=/;" + domain
          ? "domain=" + domain + ";"
          : "" + "expires=" + new Date(0).toUTCString();
    }
  }
}
