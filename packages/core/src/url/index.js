/**
 * 从url链接中获取参数
 * @param {String} name 参数名
 * @param {String} url url链接地址，默认当前地址栏url
 * @returns {String} 返回查询到的值
 */
export function getUrlParam(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  url = url.split("?")[1];
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = url.substring(0).match(reg);
  if (r != null) return decodeURI(r[2]);
  return "";
}

/**
 * url查询参数转为对象
 * @param {String} url url地址，默认当前地址栏url
 * @returns {Object} 返回参数对象
 */
export function urlQeuryToObj(url = window.location.href) {
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
 * 对象转url查询参数
 *  @param {Object} obj 参数对象
 *  @returns {String} 返回如 id=1&name=xx 格式的url查询参数
 */
export function objToUrlQuery(obj) {
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
