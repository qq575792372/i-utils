/**
 * 指定位置的字符串转为星号
 * @param {String|Number} value 字符串参数
 * @param {Number} start 转换开始位置
 * @param {Number} len 显示星号的长度
 * @returns {String} 返回转化后字符串
 */
export function formatStartOf(value: string | number, start: number, len: number): string;
/**
 * 姓名中间转为星号
 * @param {String} value 姓名
 * @returns {String} 返回转化后字符串
 */
export function formatStartOfName(value: string): string;
/**
 * 手机号码固定位数转为星号
 * @param {String} value 手机号码
 * @param {Number} start 前缀长度，默认3位
 * @param {Number} len 显示星号的长度，默认4位
 * @returns {String} 返回转化后字符串
 */
export function formatStartOfMobile(value: string, start?: number, len?: number): string;
/**
 * 身份证号码固定位数转为星号
 * @param {String} value 身份证号码
 * @param {Number} start 前缀长度，默认4位
 * @param {Number} len 显示星号的长度，默认8位
 * @returns {String} 返回转化后字符串
 */
export function formatStartOfIDCard(value: string, start?: number, len?: number): string;
/**
 * 银行卡号固定位数转为星号
 * @param {String} value 银行卡号
 * @param {Number} start 前缀长度，默认4位
 * @param {Number} len 显示星号的长度，默认10位
 * @returns {String} 返回转化后字符串
 */
export function formatStartOfBankCard(value: string, start?: number, len?: number): string;
