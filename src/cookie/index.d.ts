/**
 * 浏览器是否支持 Cookie
 * @returns {Boolean} 返回true和false
 */
export function isSupportCookie(): boolean;
/**
 * 通过name获取cookie
 * @param {String} name 参数name
 * @returns {String} 返回获取的值
 */
export function getCookie(name: string): string;
/**
 * 通过name设置cookie
 * 注：timestamp参数不填，则默认为session级别，浏览器关闭即cookie过期
 * @param {String} name 参数name
 * @param {String} value 设置的value
 * @param {Number} timestamp 过期的时间戳值，默认为一天，设置一天过期则为：24*60*60*1000
 */
export function setCookie(name: string, value: string, timestamp?: number): void;
/**
 * 通过name删除cookie
 * @param {String} name 参数name
 */
export function removeCookie(name: string): void;
/**
 * 清空当前站点域名的cookie
 * @param {String} domain 域名地址，默认是当前站点域名
 */
export function clearCookie(domain?: string): void;
