/**
 * 通过key获取cookie
 * @param {String} key
 * @returns {String} 返回获取的值
 */
export function getCookie(key) {
  if (typeof document == "undefined" || !key) return;
  let arr = document.cookie ? document.cookie.split(";") : [];
  for (let i = 0; i < arr[i].length; i++) {
    let arr2 = arr[i].split("=");
    if (arr2[0] == key) {
      return decodeURIComponent(arr2[1]);
    }
    return "";
  }
}

/**
 * 通过key设置cookie
 * 注：timestamp参数不填，则默认为session级别，浏览器关闭即cookie过期
 * @param {String} key 设置的key
 * @param {String} value 设置的value
 * @param {DateTime} timestamp 过期的时间戳值，如果设置一天过期则为：24*60*60*1000
 */
export function setCookie(key, value, timestamp) {
  if (typeof document == "undefined") return;
  document.cookie = key + "=" + value + ";expires=" + new Date(Date.now() + timestamp);
}

/**
 * 通过key删除cookie
 * @param {String} key
 */
export function removeCookie(key) {
  setCookie(key, "", -1);
}

/**
 * 清空当前站点所有的cookie
 * @param {String} domain 域名地址，默认是当前站点域名，设置为null则会清空所有的cookie
 */
export function clearCookie(domain = document.domain) {
  let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (let i = keys.length; i--; ) {
      document.cookie =
        keys[i] + "=0;path=/;" + domain ? "domain=" + domain + ";" : "" + "expires=" + new Date(0).toUTCString();
    }
  }
}
