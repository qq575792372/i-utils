import { REGEXP } from "../constants";

/* 正则校验方法 */
/**
 * 正则校验的方法
 * @description 类型为REGEXP对应的正则
 * @param {String|Number} value 校验的参数
 * @param {REGEXP} regex 使用的REGEXP中的正则
 * @returns {Boolean} 返回校验的结果
 */
export function regexpTest(value, regex) {
  return new RegExp(regex).test(value);
}

/* 常用校验 */
/**
 * 是中文
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isChinese(value) {
  return regexpTest(value, REGEXP.CH);
}

/**
 * 是英文
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isEnglish(value) {
  return regexpTest(value, REGEXP.EN);
}

/**
 * 是外链
 * @description 支持http，https，mail，tel电话
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isExternal(value) {
  return regexpTest(value, REGEXP.EXTERNAL);
}

/**
 * 是小写字母
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isLowerCase(value) {
  return regexpTest(value, REGEXP.LOWER_CASE);
}

/**
 * 是大写字母
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isUpperCase(value) {
  return regexpTest(value, REGEXP.UPPER_CASE);
}

/**
 * 是11位手机号码
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isMobile(value) {
  return regexpTest(value, REGEXP.MOBILE);
}

/**
 * 是邮箱
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isEmail(value) {
  return regexpTest(value, REGEXP.EMAIL);
}

/**
 * 是身份证号码（15-18位）
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isIdCard(value) {
  return regexpTest(value, REGEXP.ID_CARD);
}

/**
 * 是url链接
 * @param {String} value 校验的参数
 * @returns {Boolean} 返回校验的结果
 */
export function isUrl(value) {
  return regexpTest(value, REGEXP.URL);
}
