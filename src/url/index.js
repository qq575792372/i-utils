/**
 * 获得主机地址
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回主机地址
 */
export function getHost(url = window.location.href) {}

/**
 * 获得主机名称
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回主机名称
 */
export function getHostName(url = window.location.href) {}

/**
 * 获得主机端口号
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回端口号
 */
export function getPort(url = window.location.href) {}

/**
 * 获得协议名
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回协议名
 */
export function getProtocol(url = window.location.href) {}

/**
 * 获得url地址的查询参数字符串
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回查询参数字符串
 */
export function getSearchString(url = window.location.href) {
  return window.location.search;
}

/**
 * url地址的查询参数字符串中获得某个参数的值
 * @param {String} name 参数名
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回查询到的值
 */
export function getSearchParam(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  url = url.split("?")[1];
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = url.substring(0).match(reg);
  if (r != null) return decodeURI(r[2]);
  return "";
}

/**
 * url地址的查询参数字符串中设置某个参数的值
 * @param name
 * @param url
 * @param value
 */
export function setSearchParam(name, value, url = window.location.href) {}

/**
 * url地址的查询参数字符串中是否包含某个参数
 * @param name
 * @param url
 */
export function hasSearchParam(name, url = window.location.href) {}

/**
 * url地址的查询参数字符串中在前面追加新参数和值
 * @param name
 * @param url
 * @param value
 */
export function prependSearchParam(name, value, url = window.location.href) {}

/**
 * url地址的查询参数字符串中在某个参数的前面追加新参数和值
 * @param name
 * @param url
 * @param value
 */
export function prependToSearchParam(name, value, beforeParam, url = window.location.href) {}

/**
 * url地址的查询参数字符串中在后面追加新参数和值
 * @param name
 * @param url
 * @param value
 */
export function appendSearchParam(name, value, url = window.location.href) {}

/**
 * url地址的查询参数字符串中在某个参数的后面追加新参数和值
 * @param name
 * @param url
 * @param value
 */
export function appendToSearchParam(name, value, afterName, url = window.location.href) {}

/**
 * url地址的查询参数字符串中移除某个参数和值
 * @param name
 * @param url
 */
export function removeSearchParam(name, url = window.location.href) {}

/**
 * url地址的查询参数字符串转为对象
 * @param {String} url url地址，默认当前url地址
 * @returns {Object} 返回对象
 */
export function toSearchParam(url = window.location.href) {
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
 * 对象转为url地址的查询参数字符串
 *  @param {Object} obj 参数对象
 *  @returns {String} 返回如 id=1&name=xx 格式的url查询参数
 */
export function toSearchString(obj) {
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
