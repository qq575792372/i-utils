/**
 * @module 浏览器Url
 */
import { REGEXP } from "@/constants";
import { isArray } from "@/validate";
import { arrayInsertAfter, arrayInsertBefore } from "@/array";

/**
 * 获得协议名
 * @param {string} url url地址，默认当前url地址
 * @returns {string} 返回协议名
 */
export function getProtocol(url: string = window.location.href): string | undefined {
  const match = url.match(REGEXP.URL);
  if (match) {
    return match[1];
  }
}

/**
 * 获得主机地址
 * @param {string} url url地址，默认当前url地址
 * @returns {string} 返回主机地址
 */
export function getHost(url: string = window.location.href): string | undefined {
  const match = url.match(REGEXP.URL);
  if (match) {
    return (match[2] || "") + (match[3] ? ":" + match[3] : "");
  }
}

/**
 * 获得主机名称
 * @param {string} url url地址，默认当前url地址
 * @returns {string} 返回主机名称
 */
export function getHostName(url: string = window.location.href): string | undefined {
  const match = url.match(REGEXP.URL);
  if (match) {
    return match[2];
  }
}

/**
 * 获得端口号
 * @param {string} url url地址，默认当前url地址
 * @returns {string} 返回端口号
 */
export function getPort(url: string = window.location.href): string | undefined {
  const match = url.match(REGEXP.URL);

  if (match) {
    return match[3];
  }
}

/**
 * 获得地址路径
 * @param {string} url url地址，默认当前url地址
 * @returns {string} 返回地址路径
 */
export function getUrlPath(url: string = window.location.href): string | undefined {
  const match = url.match(REGEXP.URL);
  if (match) {
    return match[4];
  }
}

/**
 * 获得hash字符串
 * @param {string} url url地址，默认当前url地址
 * @returns {string} 返回hash字符串
 */
export function getUrlHash(url: string = window.location.href): string | undefined {
  const match = url.match(REGEXP.URL);
  if (match) {
    return match[6];
  }
}

/**
 * 获得查询参数字符串
 * @param {string} url url地址，默认当前url地址
 * @returns {string} 返回查询参数字符串
 */
export function getSearchString(url: string = window.location.href): string | undefined {
  const match = url.match(REGEXP.URL);
  if (match) {
    return match[5];
  }
}

/**
 * 查询参数字符串中是否包含某个参数
 * @param {string} url url地址，默认当前url地址
 * @param {string} name 参数名
 * @returns {boolean} 返回结果
 */
export function hasSearchParam(url: string = window.location.href, name: string): boolean {
  const params = parseSearchParam(url);
  return params[name] !== undefined;
}

/**
 * 查询参数字符串中获得某个参数的值
 * @param {string} url url地址，默认当前url地址
 * @param {string} name 参数名
 * @returns {string} 返回查询到的值
 */
export function getSearchParam(url: string = window.location.href, name = ""): string | undefined {
  name = name.replace(/[[\]]/g, "\\$&");
  url = getSearchString(url) || "";
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  const match = url.substring(0).match(reg);
  if (match) {
    return decodeURIComponent(match[2]);
  }
}

/**
 * 查询参数字符串中设置某个参数的值
 * @param {string} name 参数名
 * @param {string|number|Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @param {string} url url地址，默认当前url地址
 * @returns {string} 返回查询参数字符串
 */
export function setSearchParam(
  url = window.location.href,
  name = "",
  value: string | number | number[] | string[],
): string {
  const params: Record<string, any> = parseSearchParam(url);
  params[name] = value;
  // 返回替换后的url
  return url.replace(/(\?.+?)(?=#|$)/, "?" + stringifySearchParam(params));
}

/**
 * 查询参数字符串转为对象
 * @param {string} url url地址，默认当前url地址
 * @returns {Object} 返回参数对象
 */
export function parseSearchParam(url: string = window.location.href): Record<string, any> {
  const searchString = getSearchString(url) || "";
  const searchArr = searchString.split("&");
  const param: Record<string, any> = {};
  for (let i = 0; i < searchArr.length; i++) {
    const arr = searchArr[i].split("=");
    param[decodeURIComponent(arr[0])] = decodeURIComponent(arr[1] || "");
  }
  return param;
}

/**
 * 对象转为查询参数字符串
 *  @param {Object} params 参数对象
 *  @param {string} url url地址，如果不为空，则会拼接好查询参数字符串的url地址
 *  @returns {string} 返回参数字符串
 */
export function stringifySearchParam(params: Record<string, any>, url: string = ""): string {
  if (typeof params !== "object") return params;

  const arr = [];
  for (const key in params) {
    const value = params[key];
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

/**
 * 查询参数字符串中在最前面追加新参数和值
 * @param {string} url url地址，默认当前url地址
 * @param {string} name 参数名
 * @param {string|number|Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @returns {string} 返回查询参数字符串
 */
export function prependSearchParam(
  url: string = window.location.href,
  name: string,
  value: string | number | number[] | string[],
): string {
  const searchArr = (getSearchString(url) || "").split("&") || [];
  if (Array.isArray(value)) {
    const arr = [];
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
 * @param {string} url url地址，默认当前url地址
 * @param {string} name 参数名
 * @param {string|number|Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @param {string} beforeParam 在前面追加参数的名称
 * @returns {string} 返回查询参数字符串
 */
export function prependToSearchParam(
  url: string = window.location.href,
  beforeParam: string,
  name: string,
  value: string | number | number[] | string[],
): string {
  const searchArr = (getSearchString(url) || "").split("&");
  const beforeIndex = searchArr.findIndex((v) => v.includes(beforeParam));
  const beforeArr = arrayInsertBefore(searchArr, beforeIndex, `${name}=${value}`);
  return url.replace(/(\?.+?)(?=#|$)/, "?" + beforeArr.join("&"));
}

/**
 * 查询参数字符串中在最后面追加新参数和值
 * @param {string} url url地址，默认当前url地址
 * @param {string} name 参数名
 * @param {string,number,Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @returns {string} 返回查询参数字符串
 */
export function appendSearchParam(
  url: string = window.location.href,
  name: string,
  value: string | number | number[] | string[],
): string {
  const searchArr = (getSearchString(url) || "").split("&");
  searchArr.push(`${name}=${value}`);
  return url.replace(/(\?.+?)(?=#|$)/, "?" + searchArr.join("&"));
}

/**
 * 查询参数字符串中在某个参数的后面追加新参数和值
 * @param {string} url url地址，默认当前url地址
 * @param {string} name 参数名
 * @param {string,number,Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @param {string} afterName 在后面追加参数的名称
 * @returns {string} 返回查询参数字符串
 */
export function appendToSearchParam(
  url: string = window.location.href,
  afterName: string,
  name: string,
  value: string | number | number[] | string[],
): string {
  const searchArr = (getSearchString(url) || "").split("&");
  const beforeIndex = searchArr.findIndex((v) => v.includes(afterName));
  const afterArr = arrayInsertAfter(searchArr, beforeIndex, `${name}=${value}`);
  return url.replace(/(\?.+?)(?=#|$)/, "?" + afterArr.join("&"));
}

/**
 * 查询参数字符串中移除某个参数和值
 * @param {string} url url地址，默认当前url地址
 * @param {string} name 参数名
 * @returns {string} 返回查询参数字符串
 */
export function removeSearchParam(url: string = window.location.href, name: string): string {
  const searchArr = (getSearchString(url) || "").split("&");
  const delIndex = searchArr.findIndex((v) => v.includes(name));
  if (delIndex > -1) {
    searchArr.splice(delIndex, 1);
  }
  return url.replace(/(\?.+?)(?=#|$)/, "?" + searchArr.join("&"));
}
