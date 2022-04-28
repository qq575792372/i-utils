/* Class操作 */
/**
 * 判断元素包含某个类名
 * @param {Element} elem 元素
 * @param {String} className 类名
 * @return {Boolean} 返回true和false
 */
export function hasClass(elem, className) {
  return elem.className.indexOf(className) > 0;
}

/**
 * 元素添加类名
 * @param {Element} elem 元素
 * @param {String} className 类名
 */
export function addClass(elem, className) {
  if (!hasClass(elem, className)) elem.className += " " + className;
}

/**
 * 元素删除类名
 * @param {Element} elem 元素
 * @param {String} className 类名
 */
export function removeClass(elem, className) {
  if (hasClass(elem, className))
    elem.className = elem.className.replace(new RegExp(className, "gm"), "");
}

/**
 * 元素替换类名
 * @param {Element} elem 元素
 * @param {String} newClassName 新的类名
 * @param {String} oldClassName 被替换掉的旧类名
 */
export function replaceClass(elem, newClassName, oldClassName) {
  removeClass(elem, oldClassName);
  addClass(elem, newClassName);
}

/* Style操作 */
/**
 * 添加元素的style样式
 * @param {Element} elem 元素
 * @param {Object} styles 样式属性集合
 */
export function addStyle(elem, styles = {}) {
  if (!elem) return;
  for (let key in styles) {
    elem.style[key] = styles[key];
  }
}

/**
 * 获取元素的style样式
 * @param {Element} elem 元素
 * @param {String} name 属性
 * @returns {String} 返回样式的值
 */
export function getStyle(elem, name) {
  if (!elem) return;
  return elem.style[name];
}

/**
 * 删除元素的style样式
 * @param {Element} elem 元素
 * @param {String} name 属性
 */
export function removeStyle(elem, name) {
  if (!elem) return;
  elem.style.removeProperty(name);
}

/* Html转码 */
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
  return htmlStr.replace(
    /(&lt;|&gt;|&amp;|&#40;|&#41;|&#47;|&nbsp;|&quot;|&#39;)/gi,
    function (all, t) {
      return temp[t];
    }
  );
}

/* 复制剪切板 */
/**
 * 复制文本到剪贴板
 * @param {String} text 文本
 * @description 仅支持谷歌等新浏览器
 * @returns {Promise} 返回Promise的复制成功和失败
 */
export function copyText(text) {
  if (!navigator.clipboard) {
    new Error("Can not support navigator.clipboard API!");
  }
  // 谷歌等新版本浏览器
  return new Promise((resolve, reject) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        resolve(text);
      })
      .catch((error) => {
        console.error("copy error!");
        reject(error);
      });
  });
}

/**
 * 从剪贴板获取文本
 * @description 仅支持谷歌等新浏览器
 * @returns {Promise} 返回Promise的剪切板内容
 */
export function getCopyText() {
  if (!navigator.clipboard) {
    new Error("Can not support navigator.clipboard API!");
  }
  return new Promise((resolve, reject) => {
    navigator.clipboard
      .readText()
      .then((text) => {
        resolve(text);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
