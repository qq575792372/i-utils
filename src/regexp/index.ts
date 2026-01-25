/**
 * @module 正则
 */
import { REGEXP } from "@/constants";

/* 正则校验方法 */
/**
 * 正则校验的方法
 * @description 类型为REGEXP对应的正则
 * @param {string} value 校验的参数
 * @param {RegExp} regex 使用的REGEXP中的正则
 * @returns {boolean} 返回校验的结果
 */
export function regexpTest(value: string, regex: RegExp): boolean {
  return new RegExp(regex).test(value);
}

/* 常用校验 */
/**
 * 是中文
 * @param {string} value 校验的参数
 * @returns {boolean} 返回校验的结果
 */
export function isChinese(value: string): boolean {
  return regexpTest(value, REGEXP.CH);
}

/**
 * 是英文
 * @param {string} value 校验的参数
 * @returns {boolean} 返回校验的结果
 */
export function isEnglish(value: string): boolean {
  return regexpTest(value, REGEXP.EN);
}

/**
 * 是外链
 * @description 支持http，https，mail，tel电话
 * @param {string} value 校验的参数
 * @returns {boolean} 返回校验的结果
 */
export function isExternal(value: string): boolean {
  return regexpTest(value, REGEXP.EXTERNAL);
}

/**
 * 是小写字母
 * @param {string} value 校验的参数
 * @returns {boolean} 返回校验的结果
 */
export function isLowerCase(value: string): boolean {
  return regexpTest(value, REGEXP.LOWER_CASE);
}

/**
 * 是大写字母
 * @param {string} value 校验的参数
 * @returns {boolean} 返回校验的结果
 */
export function isUpperCase(value: string): boolean {
  return regexpTest(value, REGEXP.UPPER_CASE);
}

/**
 * 是11位手机号码
 * @param {string} value 校验的参数
 * @returns {boolean} 返回校验的结果
 */
export function isMobile(value: string): boolean {
  return regexpTest(value, REGEXP.MOBILE);
}

/**
 * 是邮箱
 * @param {string} value 校验的参数
 * @returns {boolean} 返回校验的结果
 */
export function isEmail(value: string): boolean {
  return regexpTest(value, REGEXP.EMAIL);
}

/**
 * 是身份证号码（15-18位）
 * @param {string} value 校验的参数
 * @returns {boolean} 返回校验的结果
 */
export function isIdCard(value: string): boolean {
  return regexpTest(value, REGEXP.ID_CARD);
}

/**
 * 是url链接
 * @param {string} value 校验的参数
 * @returns {boolean} 返回校验的结果
 */
export function isUrl(value: string): boolean {
  return regexpTest(value, REGEXP.URL);
}
