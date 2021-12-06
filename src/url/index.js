/**
 * 从url中获取参数值
 * @param {String} name 参数名
 * @param {String} url url地址，默认当前地址栏url
 * @returns {String} 返回找到的参数值，没有则返回空字符串
 */
export function getUrlParam(name, url = window.location.search) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = url.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return "";
}

/**
 * url参数转为对象
 * @param {String} url url地址，默认当前地址栏url
 * @returns {Object} 返回参数name和value拼接成的对象
 */
export function urlToObject(url = window.location.href) {
  if (url.indexOf("?") === -1) {
    return {};
  }
  let search = url[0] === "?" ? url.substr(1) : url.substring(url.lastIndexOf("?") + 1);
  search = search.split("&");
  let obj = {};
  for (let i = 0; i < search.length; i++) {
    let pair = search[i].split("=");
    obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return obj;
}

/**
 * 对象转url参数
 *  @param {Object} obj 包含name和value的对象
 *  @returns {Object} 返回类似 id=1&name=xx 格式的url参数
 */
export function objectToUrl(obj) {
  if (!obj) return "";
  let pairs = [];
  for (let key in obj) {
    let value = obj[key];
    if (value instanceof Array) {
      for (let i = 0; i < value.length; ++i) {
        pairs.push(encodeURIComponent(key + "[" + i + "]") + "=" + encodeURIComponent(value[i]));
      }
      continue;
    }
    pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
  }
  return pairs.join("&");
}
