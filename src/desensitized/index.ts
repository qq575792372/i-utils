/**
 * @module 脱敏
 */
/**
 * 指定位置的字符串转为星号
 * @param {string|number} value 字符串参数
 * @param {number} start 转换开始位置
 * @param {number} len 显示星号的长度
 * @returns {string} 返回转化后字符串
 */
export function formatStartOf(value: string, start: number, len: number) {
  value = String(value);
  if (start > value.length) return value;
  // len小于0和len大于剩余长度
  let startStr = "";
  if (len < 0) len = 0;
  if (len > value.length - start) {
    len = value.length - start;
  }
  startStr = String().padEnd(len, "*");
  return value.substring(0, start) + startStr + value.substring(start + len);
}

/**
 * 姓名中间转为星号
 * @param {string} value 姓名
 * @returns {string} 返回转化后字符串
 */
export function formatStartOfName(value: string) {
  if (value.length === 2) {
    return formatStartOf(value, 1, 1);
  } else if (value.length > 2) {
    return formatStartOf(value, 1, value.length - 2);
  } else {
    return value;
  }
}

/**
 * 手机号码固定位数转为星号
 * @param {string} value 手机号码
 * @param {number} start 前缀长度，默认3位
 * @param {number} len 显示星号的长度，默认4位
 * @returns {string} 返回转化后字符串
 */
export function formatStartOfMobile(value: string, start: number = 3, len: number = 4) {
  return formatStartOf(value, start, len);
}

/**
 * 身份证号码固定位数转为星号
 * @param {string} value 身份证号码
 * @param {number} start 前缀长度，默认4位
 * @param {number} len 显示星号的长度，默认8位
 * @returns {string} 返回转化后字符串
 */
export function formatStartOfIDCard(value: string, start: number = 4, len: number = 8) {
  return formatStartOf(value, start, len);
}

/**
 * 银行卡号固定位数转为星号
 * @param {string} value 银行卡号
 * @param {number} start 前缀长度，默认4位
 * @param {number} len 显示星号的长度，默认10位
 * @returns {string} 返回转化后字符串
 */
export function formatStartOfBankCard(value: string, start: number = 4, len: number = 11) {
  return formatStartOf(value, start, len);
}
