import { REGEXP } from "../constants";
import { isArray } from "../validate/index.js";
import { arrayInsertAfter, arrayInsertBefore } from "../array/index.js";

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
 * 获得端口号
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
 * 获得地址路径
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回地址路径
 */
export function getUrlPath(url = window.location.href) {
  let match = url.match(REGEXP.URL);
  if (match) {
    return match[4] || "";
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
    return decodeURIComponent(match[2]);
  }
}

/**
 * 查询参数字符串中设置某个参数的值
 * @param {String} name 参数名
 * @param {String,Number,Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @param {String} url url地址，默认当前url地址
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
 * @param {String} name 参数名
 * @param {String} url url地址，默认当前url地址
 * @returns {Boolean} 返回结果
 */
export function hasSearchParam(name, url = window.location.href) {
  let params = toSearchParam(url);
  return params[name] !== undefined;
}

/**
 * 查询参数字符串中在最前面追加新参数和值
 * @param {String} name 参数名
 * @param {String,Number,Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回查询参数字符串
 */
export function prependSearchParam(name, value, url = window.location.href) {
  let searchArr = getSearchString(url).split("&");
  if (isArray(value)) {
    let arr = [];
    for (let i = 0; i < value.length; i++) {
      arr.push(`${encodeURIComponent(name)}[${i}]=${encodeURIComponent(value[i])}`);
    }
    searchArr.unshift(...arr);
  } else {
    searchArr.unshift(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
  }

  return url.replace(/(\?.+?)(?=#|$)/, "?" + searchArr.join("&"));
}

/**
 * 查询参数字符串中在某个参数的前面追加新参数和值
 * @param {String} name 参数名
 * @param {String,Number,Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @param {String} beforeParam 在前面追加参数的名称
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回查询参数字符串
 */
export function prependToSearchParam(name, value, beforeParam, url = window.location.href) {
  let searchArr = getSearchString(url).split("&");
  let beforeIndex = searchArr.findIndex((v) => v.includes(beforeParam));
  let beforeArr = arrayInsertBefore(searchArr, beforeIndex, `${name}=${value}`);

  return url.replace(/(\?.+?)(?=#|$)/, "?" + beforeArr.join("&"));
}

/**
 * 查询参数字符串中在最后面追加新参数和值
 * @param {String} name 参数名
 * @param {String,Number,Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回查询参数字符串
 */
export function appendSearchParam(name, value, url = window.location.href) {
  let searchArr = getSearchString(url).split("&");
  searchArr.push(`${name}=${value}`);

  return url.replace(/(\?.+?)(?=#|$)/, "?" + searchArr.join("&"));
}

/**
 * 查询参数字符串中在某个参数的后面追加新参数和值
 * @param {String} name 参数名
 * @param {String,Number,Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @param {String} afterName 在后面追加参数的名称
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回查询参数字符串
 */
export function appendToSearchParam(name, value, afterName, url = window.location.href) {
  let searchArr = getSearchString(url).split("&");
  let beforeIndex = searchArr.findIndex((v) => v.includes(afterName));
  let afterArr = arrayInsertAfter(searchArr, beforeIndex, `${name}=${value}`);

  return url.replace(/(\?.+?)(?=#|$)/, "?" + afterArr.join("&"));
}

/**
 * 查询参数字符串中移除某个参数和值
 * @param {String} name 参数名
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回查询参数字符串
 */
export function removeSearchParam(name, url = window.location.href) {
  let searchArr = getSearchString(url).split("&");
  let delIndex = searchArr.findIndex((v) => v.includes(name));
  if (delIndex > -1) {
    searchArr.splice(delIndex, 1);
  }

  return url.replace(/(\?.+?)(?=#|$)/, "?" + searchArr.join("&"));
}

/**
 * 查询参数字符串转为对象
 * @param {String} url url地址，默认当前url地址
 * @returns {Object} 返回参数对象
 */
export function parseSearchParam(url = window.location.href) {
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
 *  @param {String} url url地址，如果不为空，则会拼接好查询参数字符串的url地址
 *  @returns {String} 返回查询参数字符串
 */
export function formatSearchString(params, url = undefined) {
  if (typeof params !== "object") return params;

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

  // 如果url不为空，则会返回拼接好url字符串
  if (url) {
    return url.replace(/(\?.+?)(?=#|$)/, "?" + arr.join("&"));
  } else {
    return arr.join("&");
  }
}
