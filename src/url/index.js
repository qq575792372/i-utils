/**
 * 从url中获取参数值
 */
export function getUrlParam(name, url = window.location.search) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = url.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

/**
 * url参数转为对象
 */
export function urlToObject(url = window.location.href) {
  if (url.indexOf("?") === -1) {
    return {};
  }
  let search = url[0] === "?" ? url.substr(1) : url.substring(url.lastIndexOf("?") + 1);
  search = search.split("&");
  let query = {};
  for (let i = 0; i < search.length; i++) {
    let pair = search[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}

/**
 * 对象转url参数
 *
 */
export function objectToUrl(obj) {
  if (!obj) return null;
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
