/**
 * 判断元素包含某个类名
 * @param {Element} elem 元素
 * @param {String} className 类名
 * @return {Boolean} 返回true和false
 */
export function hasClass(elem: Element, className: string): boolean;
/**
 * 元素添加类名
 * @param {Element} elem 元素
 * @param {String} className 类名
 */
export function addClass(elem: Element, className: string): void;
/**
 * 元素删除类名
 * @param {Element} elem 元素
 * @param {String} className 类名
 */
export function removeClass(elem: Element, className: string): void;
/**
 * 元素替换类名
 * @param {Element} elem 元素
 * @param {String} newClassName 新的类名
 * @param {String} oldClassName 被替换掉的旧类名
 */
export function replaceClass(elem: Element, newClassName: string, oldClassName: string): void;
/**
 * 添加元素的style样式
 * @param {Element} elem 元素
 * @param {Object} styles 样式属性集合
 */
export function addStyle(elem: Element, styles?: Object): void;
/**
 * 获取元素的style样式
 * @param {Element} elem 元素
 * @param {String} name 属性
 * @returns {String} 返回样式的值
 */
export function getStyle(elem: Element, name: string): string;
/**
 * 删除元素的style样式
 * @param {Element} elem 元素
 * @param {String} name 属性
 */
export function removeStyle(elem: Element, name: string): void;
/**
 * html标签转义
 * @param {String} htmlStr html字符串
 * @returns {String} 返回转义后的字符串
 */
export function htmlEncode(htmlStr: string): string;
/**
 * html标签解码
 * @param {String} htmlStr html字符串
 * @returns {String} 返回解析后的字符串
 */
export function htmlDecode(htmlStr: string): string;
