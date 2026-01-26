/**
 * @module 浏览器Dom
 */
/* Class操作 */
/**
 * 判断元素包含某个类名
 * @param {HTMLElement} elem 元素
 * @param {string} className 类名
 * @return {boolean} 返回true和false
 */
export function hasClass(elem: HTMLElement, className: string): boolean {
  return elem.className.indexOf(className) > 0;
}

/**
 * 元素添加类名
 * @param {HTMLElement} elem 元素
 * @param {string} className 类名
 */
export function addClass(elem: HTMLElement, className: string) {
  if (!hasClass(elem, className)) {
    elem.className += " " + className;
  }
}

/**
 * 元素删除类名
 * @param {HTMLElement} elem 元素
 * @param {string} className 类名
 */
export function removeClass(elem: HTMLElement, className: string) {
  if (hasClass(elem, className)) {
    elem.className = elem.className.replace(new RegExp(className, "gm"), "");
  }
}

/**
 * 元素替换类名
 * @param {HTMLElement} elem 元素
 * @param {string} newClassName 新的类名
 * @param {string} oldClassName 被替换掉的旧类名
 */
export function replaceClass(elem: HTMLElement, newClassName: string, oldClassName: string) {
  removeClass(elem, oldClassName);
  addClass(elem, newClassName);
}

/* Style操作 */
/**
 * 添加元素的style样式
 * @param {HTMLElement} elem 元素
 * @param {Object} styles 样式属性集合
 */

export function addStyle(elem: HTMLElement, styles: Record<string, string> = {}) {
  if (!elem) return;
  for (const [key, value] of Object.entries(styles)) {
    elem.style.setProperty(key, value);
  }
}

/**
 * 获取元素的style样式
 * @param {HTMLElement} elem 元素
 * @param {string} name 属性
 * @returns {string|undefined} 返回样式的值
 */
export function getStyle(elem: HTMLElement, name: string): string | unknown {
  if (!elem) return;
  return elem.style.getPropertyValue(name);
}

/**
 * 删除元素的style样式
 * @param {HTMLElement} elem 元素
 * @param {string} name 属性
 */
export function removeStyle(elem: HTMLElement, name: string) {
  if (!elem) return;
  elem.style.removeProperty(name);
}

/* Html转码 */
/**
 * html标签转义
 * @param {string} htmlStr html字符串
 * @returns {string} 返回转义后的字符串
 */
export function htmlEncode(htmlStr: string): string {
  const temp = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "(": "&#40;",
    ")": "&#41;",
    "/": "&#47;",
    " ": "&nbsp;",
    '"': "&quot;",
    "'": "&#39;",
  } as const;
  return htmlStr.replace(/[<>&|()\/ '"]/g, function (c: string) {
    return (temp as any)[c];
  });
}

/**
 * html标签解码
 * @param {string} htmlStr html字符串
 * @returns {string} 返回解析后的字符串
 */
export function htmlDecode(htmlStr: string): string {
  const temp = {
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&#40;": "(",
    "&#41;": ")",
    "&#47;": "/",
    "&nbsp;": " ",
    "&quot;": '"',
    "&#39;": "'",
  } as const;
  return htmlStr.replace(/(&lt;|&gt;|&amp;|&#40;|&#41;|&#47;|&nbsp;|&quot;|&#39;)/gi, function (all, t) {
    return (temp as any)[t];
  });
}
