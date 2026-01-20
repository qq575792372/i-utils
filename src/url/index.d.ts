/**
 * 获得协议名
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回协议名
 */
export function getProtocol(url?: string): string;
/**
 * 获得主机地址
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回主机地址
 */
export function getHost(url?: string): string;
/**
 * 获得主机名称
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回主机名称
 */
export function getHostName(url?: string): string;
/**
 * 获得端口号
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回端口号
 */
export function getPort(url?: string): string;
/**
 * 获得地址路径
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回地址路径
 */
export function getUrlPath(url?: string): string;
/**
 * 获得hash字符串
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回hash字符串
 */
export function getUrlHash(url?: string): string;
/**
 * 获得查询参数字符串
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回查询参数字符串
 */
export function getSearchString(url?: string): string;
/**
 * 查询参数字符串中是否包含某个参数
 * @param {String} url url地址，默认当前url地址
 * @param {String} name 参数名
 * @returns {Boolean} 返回结果
 */
export function hasSearchParam(url: string, name: string): boolean;
/**
 * 查询参数字符串中获得某个参数的值
 * @param {String} url url地址，默认当前url地址
 * @param {String} name 参数名
 * @returns {String} 返回查询到的值
 */
export function getSearchParam(url?: string, name?: string): string;
/**
 * 查询参数字符串中设置某个参数的值
 * @param {String} name 参数名
 * @param {String,Number,Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @param {String} url url地址，默认当前url地址
 * @returns {String} 返回查询参数字符串
 */
export function setSearchParam(url: string, name: string, value: any): string;
/**
 * 查询参数字符串转为对象
 * @param {String} url url地址，默认当前url地址
 * @returns {Object} 返回参数对象
 */
export function parseSearchParam(url?: string): Object;
/**
 * 对象转为查询参数字符串
 *  @param {Object} params 参数对象
 *  @param {String} url url地址，如果不为空，则会拼接好查询参数字符串的url地址
 *  @returns {String,Object} 返回参数字符串或参数对象
 */
export function stringifySearchParam(params: Object, url?: string): string;
/**
 * 查询参数字符串中在最前面追加新参数和值
 * @param {String} url url地址，默认当前url地址
 * @param {String} name 参数名
 * @param {String,Number,Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @returns {String} 返回查询参数字符串
 */
export function prependSearchParam(url: string, name: string, value: any): string;
/**
 * 查询参数字符串中在某个参数的前面追加新参数和值
 * @param {String} url url地址，默认当前url地址
 * @param {String} name 参数名
 * @param {String,Number,Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @param {String} beforeParam 在前面追加参数的名称
 * @returns {String} 返回查询参数字符串
 */
export function prependToSearchParam(url: string, beforeParam: string, name: string, value: any): string;
/**
 * 查询参数字符串中在最后面追加新参数和值
 * @param {String} url url地址，默认当前url地址
 * @param {String} name 参数名
 * @param {String,Number,Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @returns {String} 返回查询参数字符串
 */
export function appendSearchParam(url: string, name: string, value: any): string;
/**
 * 查询参数字符串中在某个参数的后面追加新参数和值
 * @param {String} url url地址，默认当前url地址
 * @param {String} name 参数名
 * @param {String,Number,Array} value 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2
 * @param {String} afterName 在后面追加参数的名称
 * @returns {String} 返回查询参数字符串
 */
export function appendToSearchParam(url: string, afterName: string, name: string, value: any): string;
/**
 * 查询参数字符串中移除某个参数和值
 * @param {String} url url地址，默认当前url地址
 * @param {String} name 参数名
 * @returns {String} 返回查询参数字符串
 */
export function removeSearchParam(url: string, name: string): string;
