import { isEmpty } from "../validate";

/**
 * 数字前补齐零，保持两位
 * @param {String|Number} value 可以是数字和字符串
 * @returns {String} 返回处理后的字符串
 */
function digit(value) {
  value = value.toString();
  return value[1] ? value : "0" + value;
}

/**
 * 判断是否是今天
 * @param {String|Date} date 传参日期，可以是yyyy-MM-dd格式，也可以是Date对象
 * @returns {Boolean} 返回true和false
 */
export function isToday(date) {
  if (isEmpty(date)) return;
  // 当前日期
  let curDate = getCurrentDate();
  // 指定日期
  let tarData = new Date(date.includes("-") ? date.replace(/-/g, "/") : date);
  return ["getFullYear", "getMonth", "getDate"].every((i) => curDate[i]() === tarData[i]());
}

/**
 * 判断是否是闰年
 * @param {Number} year 年份
 * @returns 返回true和false
 */
export function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

/**
 * 获得日期Date，默认为当前日期
 * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
 * @returns 返回日期Date
 */
export function getCurrentDate(date = new Date()) {
  return date;
}

/**
 * 获得日期Date字符串，默认为当前日期
 * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
 * @param {String} separator 年月日分隔符，默认“-”分隔
 * @returns 返回yyyy-MM-dd格式的日期字符串
 */
export function getDefaultDate(date = new Date(), separator = "-") {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return [year, month, day].map(digit).join(separator);
}

/**
 * 获得日期DateTime字符串，默认为当前时间
 * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
 * @param {String} separator 年月日分隔符，默认“-”
 * @returns 返回yyyy-MM-dd HH:mm:ss格式的时间字符串
 */
export function getDefaultDateTime(date = new Date(), separator = "-") {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  return [year, month, day].map(digit).join(separator) + " " + [hour, minute, second].map(digit).join(":");
}

/**
 * 获取日期Date的时间戳
 * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
 * @returns 返回日期Date的时间戳
 */
export function getDefaultTimestamp(date = new Date()) {
  return date.getTime();
}

/**
 * 获取日期Date的Unix时间戳
 * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
 * @returns 返回日期Date的Unix时间戳
 */
export function getDefaultUnixTimestamp(date = new Date()) {
  return Math.round(date / 1000);
}

/**
 * 格式化时间戳为日期Date
 * @param {Number} timestamp 时间戳
 * @returns 返回日期Date
 */
export function formatTimestampToDate(timestamp) {
  if (isEmpty(timestamp) || timestamp == 0) return;
  return new Date(timestamp);
}

/**
 * 格式化Unix时间戳为日期Date
 * @param {Number} timestamp Unix时间戳
 * @returns 返回日期Date
 */
export function formatUnixTimestampToDate(timestamp) {
  if (isEmpty(timestamp) || timestamp == 0) return;
  return new Date(timestamp * 1000);
}

/**
 * 获得当前的日期Date是周几
 * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
 * @param {String} type 可为空，默认为zh；zh：返回周一，周二的中文； en：返回1,2的数字
 * @returns 返回对应的中文的周几或者数字的周几
 */
export function getWeekDay(date = new Date(), type = "zh") {
  if (isEmpty(date)) return;
  let day = "";
  if (type && type == "zh") {
    day = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六")[date.getDay()];
  } else {
    day = new Array("7", "1", "2", "3", "4", "5", "6")[date.getDay()];
  }
  return day;
}

/**
 * 获得某年的某月总共有多少天
 * @param {Number} year 年
 * @param {Number} month 月
 * @returns 返回对应年月的总天数
 */
export function getYearMonthAllDay(year, month) {
  if (isEmpty(year) || isEmpty(month)) return;
  month = this.parseInt(month);
  return new Date(year, month, 0).getDate();
}

/**
 * 获得某年的某月的所有天数数组
 * @param {Number} year 年
 * @param {Number} month 月
 * @returns 返回对应年月的所有天数数组
 */
export function getYearMonthAllDayArray(year, month) {
  if (isEmpty(year) || isEmpty(month)) return;
  month = this.parseInt(month);
  return Array.from(
    {
      length: new Date(year, month, 0).getDate(),
    },
    (item, index) => index + 1
  );
}

/**
 * 获得某年的某月的最后一天是几号
 * @param {Number} year 年
 * @param {Number} month 月
 * @returns 返回对应年月的最后一天是几号
 */
export function getYearMonthLastDay(year, month) {
  if (isEmpty(year) || isEmpty(month)) return;
  month = this.parseInt(month);
  return new Date(year, month, 0).getDate();
}

/**
 * 日期字符串转换为数组
 *
 * @param {String} dateStr 日期字符串，格式支持yyyy-MM-dd，yyyy-MM-dd HH:mm:ss，yyyy/MM/dd，yyyy/MM/dd HH:mm:ss
 * @returns 返回字符串数组
 */
export function dateStrToArray(dateStr) {
  if (isEmpty(dateStr)) return;
  dateStr = dateStr.replace(/(\-)|(\:)|(\s)|(\/)/g, ",");
  return dateStr.split(",");
}

/**
 * 时间字符串转换为数组
 *
 * @param {String} dateTimeStr 时间字符串，格式支持yyyy-MM-dd，yyyy-MM-dd HH:mm:ss，yyyy/MM/dd，yyyy/MM/dd HH:mm:ss
 * @returns 返回字符串数组
 */
export function dateTimeStrToArray(dateTimeStr) {
  if (isEmpty(dateTimeStr)) return;
  dateTimeStr = dateTimeStr.replace(/(\-)|(\:)|(\s)|(\/)/g, ",");
  return dateTimeStr.split(",");
}

/**
 * 获得加减年数后的日期Date
 * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
 * @param {Number} num 加减年数的数量，用-1和+1年表示
 * @returns 返回加减年数后的日期Date
 */
export function getDiffYear(date = new Date(), num = +1) {
  date.setFullYear(date.getFullYear() + num);
  return date;
}

/**
 * 获得加减月数后的日期
 * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
 * @param {Number} num 加减月数的数量，用-1和+1月表示
 * @returns 返回加减月数后的日期Date
 */
export function getDiffMonth(date = new Date(), num = +1) {
  date.setMonth(date.getMonth() + num);
  return date;
}

/**
 * 获得加减天数后的日期
 * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
 * @param {Number} num 加减天数的数量，用-1和+1天表示
 * @returns 返回加减天数后的日期Date
 */
export function getDiffDate(date = new Date(), num = +1) {
  date.setDate(date.getDate() + num);
  return date;
}

/**
 * 计算两个日期Date之间相差的天数
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns 返回两个日期Date相差的天数；参数为空返回0；返回复数代表第一个日期大于第二个日期；返回正数表示第一个日期小于第二个日期
 */
export function getDiffDateNum(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return 0;
  return (date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000);
}

/**
 * 计算两个日期字符串之间相差的天数
 * @param {Date} dateStr1 第一个日期字符串
 * @param {Date} dateStr2 第二个日期字符串
 * @returns 返回两个日期字符串相差的天数数字；参数为空返回0；返回复数代表第一个日期大于第二个日期；返回正数表示第一个日期小于第二个日期
 */
export function getDiffDateStrNum(dateStr1, dateStr2) {
  if (isEmpty(dateStr1) || isEmpty(dateStr2)) return 0;
  return (this.formatStrToDate(dateStr2).getTime() - this.formatStrToDate(dateStr1).getTime()) / (24 * 60 * 60 * 1000);
}

/**
 * 计算两个日期Data时间戳之间相差的天数
 * @param {Timestamp} timestamp1 第一个日期Date时间戳
 * @param {Timestamp} timestamp2 第二个日期Date时间戳
 * @returns 返回两个日期Date时间戳相差的天数数字；参数为空返回0；返回复数代表第一个日期大于第二个日期；返回正数表示第一个日期小于第二个日期
 */
export function getDiffTimestampNum(timestamp1, timestamp2) {
  if (isEmpty(timestamp1) || isEmpty(timestamp2)) return 0;
  return (timestamp2 - timestamp1) / (1000 * 60 * 60 * 24);
}

/**
 * 计算两个日期Date的Unix时间戳之间相差的天数
 * @param {UnixTimestamp} unixTimestamp1 第一个日期Date的Unix时间戳
 * @param {UnixTimestamp} unixTimestamp2 第二个日期Date的Unix时间戳
 * @returns 返回两个日期Date的Unix时间戳相差的天数数字；参数为空返回0；返回复数代表第一个日期大于第二个日期；返回正数表示第一个日期小于第二个日期
 */
export function getDiffUnixTimestampNum(unixTimestamp1, unixTimestamp2) {
  if (isEmpty(unixTimestamp1) || isEmpty(unixTimestamp2)) return 0;
  return (unixTimestamp2 - unixTimestamp1) / (60 * 60 * 24);
}

/**
 * 获得两个日期Date之间所有日期数组
 *
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns 返回两个日期Date之间的所有字符串数组；参数为空返回空[]
 */
export function getDiffDateArray(startDate, endDate) {
  if (isEmpty(startDate) || isEmpty(endDate)) return [];
  let diffDateArray = [];
  while (endDate.getTime() - startDate.getTime() >= 0) {
    let year = startDate.getFullYear();
    let month = digit(startDate.getMonth() + 1);
    let day = digit(startDate.getDate());
    diffDateArray.push(year + "-" + month + "-" + day);
    startDate.setDate(startDate.getDate() + 1);
  }
  return diffDateArray;
}

/**
 * 获得两个日期字符串之间所有日期数组
 *
 * @param {String} startStr 开始时间
 * @param {String} endStr 结束时间
 * @returns 返回两个日期字符串之间的所有字符串数组；参数为空返回空[]
 */
export function getDiffDateStrArray(startStr, endStr) {
  if (isEmpty(startStr) || isEmpty(endStr)) return [];
  let diffDateArray = [];
  let startDate = this.formatStrToDate(startStr);
  let endDate = this.formatStrToDate(endStr);
  while (endDate.getTime() - startDate.getTime() >= 0) {
    let year = startDate.getFullYear();
    let month = digit(startDate.getMonth() + 1);
    let day = digit(startDate.getDate());
    diffDateArray.push(year + "-" + month + "-" + day);
    startDate.setDate(startDate.getDate() + 1);
  }
  return diffDateArray;
}

/**
 * 日期Date格式化为日期字符串
 * @param {Date} date 可以为空，默认当前日期；也可以指定任意日期Date
 * @param {String} formatStr 需要转换的日期字符串格式，支持yyyy/MM/dd HH:mm:ss，dd/MM/yyyy HH:mm:ss等多种常用的格式；默认转为yyyy-MM-dd
 * @returns 返回指定格式的日期字符串
 */
export function formatDateToStr(date = new Date(), formatStr = "yyyy-MM-dd") {
  // 日期字符串格式化
  let o = {
    "M+": date.getMonth() + 1, // 月
    "d+": date.getDate(), // 日
    "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12小时制
    "H+": date.getHours(), // 24小时制
    "m+": date.getMinutes(), // 分钟
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(formatStr)) {
    formatStr = formatStr.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(formatStr))
      formatStr = formatStr.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  }
  return formatStr;
}

/**
 * 日期字符串格式化为日期Date
 * @param {String} dateStr 日期字符串，支持格式：yyyy-MM-dd HH:mm:ss，yyyy/MM/dd HH:mm:ss
 * @returns 返回日期Date
 */
export function formatStrToDate(dateStr) {
  if (isEmpty(dateStr)) return;
  return new Date(dateStr.replace(/-/g, "/"));
}

/**
 * 比较两个日期Date的大小
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns 返回true和false
 */
export function compareDate(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return;
  return date1.getTime() > date2.getTime();
}

/**
 * 比较两个日期Date时间戳的大小
 * @param {Timestamp} timestamp1 第一个时间戳
 * @param {Timestamp} timestamp2 第二个时间戳
 * @returns 返回true和false
 */
export function compareTimestamp(timestamp1, timestamp2) {
  if (isEmpty(timestamp1) || isEmpty(timestamp2)) return;
  return timestamp1 > timestamp2;
}

/**
 * 比较两个日期Date的Unix时间戳的大小
 * @param {UnixTimestamp} unixTimestamp1 第一个Unix时间戳
 * @param {UnixTimestamp} unixTimestamp2 第二个Unix时间戳
 * @returns 返回true和false
 */
export function compareUnixTimestamp(unixTimestamp1, unixTimestamp2) {
  if (isEmpty(unixTimestamp1) || isEmpty(unixTimestamp2)) return;
  return unixTimestamp1 > unixTimestamp2;
}
