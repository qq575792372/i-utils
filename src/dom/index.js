/**
 * 判断元素包含某个类名
 * @param {Document} elem dom元素
 * @param {String} className 类名
 * @return {Boolean} 返回true和false
 */
export function hasClass(elem, className) {
  return elem.className.indexOf(className) > 0;
}

/**
 * 元素添加类名
 * @param {Document} elem dom元素
 * @param {String} className 类名
 */
export function addClass(elem, className) {
  if (!hasClass(elem, className)) elem.className += " " + className;
}

/**
 * 元素删除类名
 * @param {Document} elem dom元素
 * @param {String} className 类名
 */
export function removeClass(elem, className) {
  if (hasClass(elem, className)) elem.className = elem.className.replace(new RegExp(className, "gm"), "");
}

/**
 * 元素替换类名
 * @param {Document} elem dom元素
 * @param {String} newClassName 新的类名
 * @param {String} oldClassName 被替换掉的旧类名
 */
export function replaceClass(elem, newClassName, oldClassName) {
  removeClass(elem, oldClassName);
  addClass(elem, newClassName);
}

/**
 * html标签转义
 * @param {String} htmlStr html字符串
 * @returns {String} 返回转义后的字符串
 */
export function htmlEncode(htmlStr) {
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
  };
  return htmlStr.replace(/[<>&|()\/ '"]/g, function (c) {
    return temp[c];
  });
}

/**
 * html标签解码
 * @param {String} htmlStr html字符串
 * @returns {String} 返回解析后的字符串
 */
export function htmlDecode(htmlStr) {
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
  };
  return htmlStr.replace(/(&lt;|&gt;|&amp;|&#40;|&#41;|&#47;|&nbsp;|&quot;|&#39;)/gi, function (all, t) {
    return temp[t];
  });
}
