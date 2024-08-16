import { REGEXP } from "../constants";
import { isArray } from "../validate/index.js";
import { arrayInsertBefore } from "../array/index.js";

/**
 * 获得协议名
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回协议名
 */
export function getProtocol(url = window.location.href) {
  let match = url.match(REGEXP.URL);
  if (match) {
    return match[1] || "";
  }
}

/**
 * 获得主机地址
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回主机地址
 */
export function getHost(url = window.location.href) {
  let match = url.match(REGEXP.URL);
  if (match) {
    return (match[2] || "") + (match[3] ? ":" + match[3] : "");
  }
}

/**
 * 获得主机名称
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回主机名称
 */
export function getHostName(url = window.location.href) {
  let match = url.match(REGEXP.URL);
  if (match) {
    return match[2] || "";
  }
}

/**
 * 获得主机端口号
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回端口号
 */
export function getPort(url = window.location.href) {
  let match = url.match(REGEXP.URL);
  if (match) {
    return match[3] || "";
  }
}

/**
 * 获得路径地址
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回路径地址
 */
export function getUrlPath(url = window.location.href) {
  let match = url.match(REGEXP.URL);
  if (match) {
    return match[4] || "";
  }
}

/**
 * 获得查询参数字符串
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回查询参数字符串
 */
export function getSearchString(url = window.location.href) {
  let match = url.match(REGEXP.URL);
  console.log(match);
  if (match) {
    return match[5] || "";
  }
}

/**
 * 获得hash字符串
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回hash字符串
 */
export function getUrlHash(url = window.location.href) {
  let match = url.match(REGEXP.URL);
  if (match) {
    return match[6] || "";
  }
}

/**
 * 查询参数字符串中获得某个参数的值
 * @param {String} name 参数名
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回查询到的值
 */
export function getSearchParam(name, url = window.location.href) {
  name = name.replace(/[[\]]/g, "\\$&");
  url = getSearchString(url);
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let match = url.substring(0).match(reg);
  if (match) {
    return decodeURI(match[2]);
  }
}

/**
 * 查询参数字符串中设置某个参数的值
 * @param name
 * @param url
 * @param value
 * @returns {String} 返回查询参数字符串
 */
export function setSearchParam(name, value, url = window.location.href) {
  let params = toSearchParam(url);
  params[name] = value;

  // 返回替换后的url
  return url.replace(/(\?.+?)(?=#|$)/, "?" + toSearchString(params));
}

/**
 * 查询参数字符串中是否包含某个参数
 * @param name
 * @param url
 */
export function hasSearchParam(name, url = window.location.href) {
  let params = toSearchParam(url);
  return params[name] !== undefined;
}

/**
 * 查询参数字符串中在前面追加新参数和值
 * @param name
 * @param url
 * @param value
 */
export function prependSearchParam({ name, value, url = window.location.href }) {}

/**
 * 查询参数字符串中在某个参数的前面追加新参数和值
 * @param name
 * @param url
 * @param value
 */
export function prependToSearchParam(name, value, beforeParam, url = window.location.href) {
  let searchArr = getSearchString(url).split("&");
  let beforeIndex = searchArr.findIndex((v) => v.includes(beforeParam));
  searchArr = arrayInsertBefore(searchArr, beforeIndex, `${name}=${value}`);

  return url.replace(/(\?.+?)(?=#|$)/, "?" + searchArr.join("&"));
}

/**
 * 查询参数字符串中在后面追加新参数和值
 * @param name
 * @param url
 * @param value
 */
export function appendSearchParam(name, value, url = window.location.href) {}

/**
 * 查询参数字符串中在某个参数的后面追加新参数和值
 * @param name
 * @param url
 * @param value
 */
export function appendToSearchParam(name, value, afterName, url = window.location.href) {}

/**
 * 查询参数字符串中移除某个参数和值
 * @paraxm name
 * @param url
 */
export function removeSearchParam(name, url = window.location.href) {}

/**
 * 查询参数字符串转为对象
 * @param {String} url url地址，默认当前url地址
 * @returns {Object} 返回对象
 */
export function toSearchParam(url = window.location.href) {
  let searchString = getSearchString(url);
  let searchArr = searchString.split("&");
  let param = {};
  for (let i = 0; i < searchArr.length; i++) {
    let arr = searchArr[i].split("=");
    param[decodeURIComponent(arr[0])] = decodeURIComponent(arr[1] || "");
  }
  return param;
}

/**
 * 对象转为查询参数字符串
 *  @param {Object} params 参数对象
 *  @returns {String} 返回如 id=1&name=xx 格式的url查询参数
 */
export function toSearchString(params) {
  let arr = [];
  for (let key in params) {
    let value = params[key];
    if (isArray(value)) {
      for (let i = 0; i < value.length; ++i) {
        arr.push(encodeURIComponent(key + "[" + i + "]") + "=" + encodeURIComponent(value[i]));
      }
    } else {
      arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
    }
  }
  return arr.join("&");
}
