/**
 * 设置cookie
 * 注：timestamp参数不填，则默认为session级别，浏览器关闭即cookie过期
 * @param {String} key 设置的key
 * @param {String} value 设置的value
 * @param {DateTime} timestamp 过期的时间戳，如果设置一天则为：24*60*60*1000
 */
export function setCookie(key, value, timestamp) {
  // window.document.cookie = key + "=" + value + ";expires=" + formatTimestampToDate(getDefaultTimestamp() + timestamp);
}

/**
 * 通过key获得cookie存储的值
 * @param {String} key
 * @returns 返回获取的值，或者返回空字符串
 */
export function getCookie(key) {
  let arr = window.document.cookie.split(";");
  for (let i = 0; i < arr[i].length; i++) {
    let arr2 = arr[i].split("=");
    if (arr2[0] == key) {
      return arr2[1];
    }
    return "";
  }
}

/**
 * 通过key删除cookie的值
 * @param {String} key
 */
export function removeCookie(key) {
  setCookie(key, "", -1);
}

/**
 * 清空当前站点所有的cookie
 */
export function clearCookie() {
  let keys = window.document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (let i = keys.length; i--; ) document.cookie = keys[i] + "=0;expires=" + new Date(0).toUTCString();
  }
}
