/* 常用正则集合 */
/**
 * 常用的正则表达式集合
 */
export const REGEXP = {
  // 中文汉字
  CH: /^[\u4E00-\u9FA5]+$/,
  // 英文字母
  EN: /^[a-zA-Z]$/,
  // 小写字母
  LOWER_CASE: /^[a-z]+$/,
  // 大写字母
  UPPER_CASE: /^[A-Z]+$/,
  // 中文姓名，2-16位
  CH_NAME: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
  // 英文姓名，0-20位
  EN_NAME: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
  // 数字，包含正数和负数
  NUMBER: /^(\-|\+)?\d+(\.\d+)?$/,
  // 整数，包含：0，正整数和负整数
  INTEGER: /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/,
  // 小数，包含正小数和负小数
  DECIMAL: /^\d+\.\d+$/,
  // 正整数或者保留两位小数
  INT_OR_FLOAT:
    /(^[1-9][0-9]*$)|(^[1-9][0-9]*\.[0-9]{1,2}$)|(^0\.[0-9]{1,2}$)|(^0$)/,
  // 手机号码，支持+86
  MOBILE: /^(?:(?:\+|00)86)?1[1-9]\d{9}$/,
  // 固定电话号码，比如：0755-1111111
  PHONE: /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/,
  // 邮箱
  EMAIL: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  // 一代15位和二代18位身份证
  ID_CARD:
    /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
  // 仅校验一代15位身份证
  ID_CARD15: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)/,
  // 仅校验二代18位身份证
  ID_CARD18:
    /(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
  // 银行卡号
  BANK_CARD: /^[1-9]\d{9,29}$/,
  // 邮政编码
  POST_CODE:
    /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,
  // url网址
  URL: /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
  // ip地址
  IP: /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/,
  // 是外链，http，https，mail，tel电话
  EXTERNAL: /^(http?:|https?:|mailto:|tel:)/,
};

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
