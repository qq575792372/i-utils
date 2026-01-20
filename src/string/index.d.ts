/**
 * 字符串中是否包含指定的元素
 * @param {String} value 包含的元素
 * @param {String} str 查找的字符串
 * @returns {Boolean} 返回true和false
 */
export function inString(value: string, str: string): boolean;
/**
 * 去除字符串前后位置空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trim(value: string): string;
/**
 * 去除字符串开始位置的空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trimStart(value: string): string;
/**
 * 去除字符串结束位置的空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trimEnd(value: string): string;
/**
 * 去除字符串中全部的空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trimAll(value: string): string;
/**
 * 替换所有指定字符串为新的字符串
 * @param {String} value 参数
 * @param {String} oldSubstr 需要替换的字符串
 * @param {String} newSubstr 替换后的字符串
 * @returns {String} 返回处理后的字符串
 */
export function replaceAll(value: string, oldSubstr: string, newSubstr: string): string;
/**
 * 字符串转大写
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function toUpperCase(value: string): string;
/**
 * 字符串转小写
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function toLowerCase(value: string): string;
/**
 * 转为 snake_case 下划线命名
 * @description 支持 驼峰命名，短横命名，帕斯卡命名
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function toSnakeCase(value: string): string;
/**
 * 转为 kebab-case 短横命名
 * @description 支持 下划线，驼峰命名，帕斯卡命名
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function toKebabCase(value: string): string;
/**
 * 转为 camelCase 驼峰命名
 * @description 支持 下划线命名，短横命名，帕斯卡命名
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function toCamelCase(value: string): string;
/**
 * 转为 PascalCase 帕斯卡命名
 * @description 支持 下划线命名，短横命名，驼峰命名
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function toPascalCase(value: string): string;
/**
 * 数字前补齐0达到指定位数
 * @description 相当于原生的 padStart(2,'0')
 * @param {Number|String} value 补零的数字
 * @param {Number} maxLength 补齐0后的最大长度，默认2位
 * @returns {String} 返回补0后指定位数的字符串
 */
export function zeroStart(value: number | string, maxLength?: number): string;
/**
 * 数字后补齐0达到指定位数
 * @description 相当于原生的 padEnd(2,'0')
 * @param {Number|String} value 补零的数字
 * @param {Number} maxLength 补齐0后的最大长度，默认2位
 * @returns {String} 返回补0后指定位数的字符串
 */
export function zeroEnd(value: number | string, maxLength?: number): string;
/**
 * 格式化为标题样式
 * @param {String} value 字符串值
 * @returns {String} 返回格式化后的标题样式
 */
export function formatTitle(value: string): string;
/**
 * 格式化字符串模版
 * @param {String} value 字符串值
 * @param {Object} data 模版数据
 * @returns {String} 返回格式化后的模版字符串
 */
export function formatTemplate(value: string, data: Object): string;
/**
 * 格式化千分位数字
 * @description 支持任意数据传参，如果非数字则不会格式化，并返回原数据
 * @param {Number|String} num 数字
 * @returns {String} 返回格式化后的千分位数字
 */
export function formatThousand(num: number | string): string;
/**
 * 格式化人民币金额大写
 * @param {Number|String} money 金额
 * @returns {String} 返回金额大写
 */
export function formatRmbChinese(money: number | string): string;
