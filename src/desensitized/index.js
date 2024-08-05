/**
 * 姓名中间转为星号
 * @param {String} value 姓名
 * @returns {String} 返回转化后字符串
 */
export function formatStartOfName(value) {
  if (value.length === 2) {
    return _formatStartOf(value, 1, 1);
  } else if (value.length > 2) {
    return _formatStartOf(value, 1, value.length - 2);
  } else {
    return value;
  }
}

/**
 * 手机号码固定位数转为星号
 * @param {String} value 手机号码
 * @param {Number} start 前缀长度，默认3位
 * @param {Number} len 显示星号的长度，默认4位
 * @returns {String} 返回转化后字符串
 */
export function formatStartOfMobile(value, start = 3, len = 4) {
  return _formatStartOf(value, start, len);
}

/**
 * 身份证号码固定位数转为星号
 * @param {String} value 身份证号码
 * @param {Number} start 前缀长度，默认4位
 * @param {Number} len 显示星号的长度，默认8位
 * @returns {String} 返回转化后字符串
 */
export function formatStartOfIDCard(value, start = 4, len = 8) {
  return _formatStartOf(value, start, len);
}

/**
 * 银行卡号固定位数转为星号
 * @param {String} value 银行卡号
 * @param {Number} start 前缀长度，默认4位
 * @param {Number} len 显示星号的长度，默认10位
 * @returns {String} 返回转化后字符串
 */
export function formatStartOfBankCard(value, start = 4, len = 11) {
  return _formatStartOf(value, start, len);
}

/**
 * 指定位置的字符串转为星号
 * @param {String|Number} value 参数
 * @param {Number} start 前缀长度
 * @param {Number} len 显示星号的长度
 * @returns {String} 返回转化后字符串
 */
function _formatStartOf(value, start, len) {
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
