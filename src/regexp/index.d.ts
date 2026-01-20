/**
 * 正则校验的方法
 * @description 类型为REGEXP对应的正则
 * @param {String|Number} value 校验的参数
 * @param {RegExp} regex 使用的REGEXP中的正则
 * @returns {Boolean} 返回校验的结果
 */
export function regexpTest(value: string | number, regex: RegExp): boolean;
/**
 * 是中文
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isChinese(value: string): boolean;
/**
 * 是英文
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isEnglish(value: string): boolean;
/**
 * 是外链
 * @description 支持http，https，mail，tel电话
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isExternal(value: string): boolean;
/**
 * 是小写字母
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isLowerCase(value: string): boolean;
/**
 * 是大写字母
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isUpperCase(value: string): boolean;
/**
 * 是11位手机号码
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isMobile(value: string): boolean;
/**
 * 是邮箱
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isEmail(value: string): boolean;
/**
 * 是身份证号码（15-18位）
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isIdCard(value: string): boolean;
/**
 * 是url链接
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isUrl(value: string): boolean;
