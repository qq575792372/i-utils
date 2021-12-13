import { isEmpty, isNull, isInteger, isDate, isString } from "../validate";

/**
 * 判断日期是否是今天
 * @param {String|Date} date 传参日期，可以是yyyy-MM-dd格式，也可以是Date对象
 * @returns {Boolean} 返回true和false
 */
export function isToday(date) {
  if (isNull(date)) return;
  // 当前日期
  let curDate = getNow();
  // 指定日期
  let tarData = new Date(date.includes("-") ? date.replace(/-/g, "/") : date);
  return ["getFullYear", "getMonth", "getDate"].every((i) => curDate[i]() === tarData[i]());
}

/**
 * 今天是否是工作日
 * @returns {Boolean} 返回true和false
 */
export function isWorkday() {
  let dayOfWeek = getDayOfWeek();
  return dayOfWeek != 6 && dayOfWeek != 7;
}

/**
 * 今天是否是周末（周六或周日）
 * @returns {Boolean} 返回true和false
 */
export function isWeekend() {
  let dayOfWeek = getDayOfWeek();
  return dayOfWeek == 6 || dayOfWeek == 7;
}

// 闰年，上午，下午
/**
 * 判断是否是闰年
 * @param {Number} year 年份
 * @returns {Boolean} 返回true和false
 */
export function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

/**
 * 当前时刻是否是上午
 * @returns {Boolean} 返回true和false
 */
export function isAM() {
  return new Date().getHours() < 12;
}

/**
 * 当前时刻是否是下午
 * @returns {Boolean} 返回true和false
 */
export function isPM() {
  return new Date().getHours() >= 12;
}

// 比较是同一 天，月，年
/**
 * 比较两个日期是否是同一天
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns {Boolean} 返回true和false
 */
export function isSameDay(date1, date2) {
  return date1 == date2;
}

/**
 * 比较两个日期是否是同一天
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns {Boolean} 返回true和false
 */
export function isSameMonth(date1, date2) {
  return date1.getMonth() == date2.getMonth();
}

/**
 * 比较两个日期是否是同一天
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns {Boolean} 返回true和false
 */
export function isSameYear(date1, date2) {
  return date1.getFullYear() == date2.getFullYear();
}

// 简化名称获取时间
/**
 * 昨天
 * @returns {String} 返回日期字符串
 */
function yesterday() {}

/**
 * 今天
 *@returns {String} 返回日期字符串
 */
function today() {}

/**
 * 上周（7 天前）
 * @returns {String} 返回日期字符串
 */
function prevWeek() {}

/**
 * 下周（7 天后）
 * @returns {String} 返回日期字符串
 */
function nextWeek() {}

/**
 * 上个月（30 天前）
 * @returns {String} 返回日期字符串
 */
function prevMonth() {}

/**
 * 下个月（30 天后）
 * @returns {String} 返回日期字符串
 */
function nextMonth() {}

/**
 * 去年（365 天前）
 * @returns {String} 返回日期字符串
 */
function prevYear() {}

/**
 * 明年（365 天后）
 *@returns {String} 返回日期字符串
 */
function nextYear() {}

// 获取日期，时间字符串，时间戳等等
/**
 * 获得现在的日期
 * @returns {Date} 返回现在的日期
 */
export function getNow() {
  return new Date();
}

/**
 * 获得当前日期字符串
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} separator 年月日分隔符，默认“-”分隔
 * @returns {String} 返回yyyy-MM-dd格式
 */
export function getDate(date = new Date(), separator = "-") {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return [year, month, day].map(_digit).join(separator);
}

/**
 * 获得当前时间字符串
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} separator 年月日分隔符，默认“-”分隔
 * @returns {String} 返回yyyy-MM-dd HH:mm:ss格式
 */
export function getDateTime(date = new Date(), separator = "-") {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  return [year, month, day].map(_digit).join(separator) + " " + [hour, minute, second].map(_digit).join(":");
}

/**
 * 获取当前时间戳
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Timestamp} 返回时间戳
 */
export function getTimestamp(date = new Date()) {
  return date.getTime();
}

/**
 * 获取当前Unix时间戳
 * @param {Date} date 日期参数，默认当前日期
 * @returns {UnixTimestamp} 返回Unix时间戳
 */
export function getUnixTimestamp(date = new Date()) {
  return Math.round(date / 1000);
}

// 当前日期是所在 周，月，年 的第几天
/**
 * 获得当前日期是所在周的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} lang 周几对应的语言，en：返回的是数字；zh：返回的是周的字符串；默认en
 * @returns {Number|String} 返回天数
 */
export function getDayOfWeek(date = new Date(), lang = "en") {
  if (lang == "en") {
    return new Array(7, 1, 2, 3, 4, 5, 6)[date.getDay()];
  } else if (lang == "zh") {
    return new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六")[date.getDay()];
  }
}

/**
 * 获得当前日期是所在月的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回天数
 */
export function getDayOfMonth(date = new Date()) {
  return date.getMonth() + 1;
}

/**
 * 获得当前日期是所在年的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回天数
 */
export function getDayOfYear(date = new Date()) {
  return Math.ceil((date - new Date(date.getFullYear().toString())) / (24 * 60 * 60 * 1000)) + 1;
}

// 当前日期的周计算
/**
 * 获得当前日期是所在月的第几周
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回周数
 */
export function getWeekOfMonth(date = new Date()) {
  return Math.ceil((date.getDate() + 6 - getDayOfWeek(date)) / 7);
}
/**
 * 获得当前日期是所在年的第几周
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回周数
 */
export function getWeekOfYear(date = new Date()) {
  let startDate = new Date(date.getFullYear(), 0, 1);
  let startDay = getDayOfWeek(startDate);
  let diff = Math.round((date - startDate) / (24 * 60 * 60 * 1000));
  return Math.ceil((diff + startDay) / 7);
}

// 获得当前日期所在 周，月 的第一天和最后一天
/**
 * 获得当前日期所在周的第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function getFirstDayOfWeek(date = new Date()) {
  let weekDay = getDayOfWeek(date);
  date.setDate(date.getDate() - weekDay + 1);
  return date.toLocaleDateString();
}

/**
 * 获得当前日期所在周的最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function getLastDayOfWeek(date = new Date()) {
  let weekDay = getDayOfWeek(date);
  date.setDate(date.getDate() + (7 - weekDay));
  return date.toLocaleDateString();
}

/**
 * 获得当前日期所在月的第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function getFirstDayOfMonth(date = new Date()) {
  date.setDate(1);
  return date.toLocaleDateString();
}

/**
 * 获得当前日期所在月的第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function getLastDayOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).toLocaleDateString();
}

// 指定月，年，总共的天数
/**
 * 获得当前日期所在月总共多少天
 * @param {Number} year 年
 * @param {Number} month 月
 * @returns {Number} 返回总天数
 */
export function getFullDayOfMonth(date = new Date()) {
  if (isEmpty(year) || isEmpty(month)) return;
  month = this.parseInt(month);
  return new Date(year, month, 0).getDate();
}

/**
 * 获得当前日期所在年总共多少天
 * @param {Number} year 年
 * @param {Number} month 月
 * @returns {Number} 返回总天数
 */
export function getFullDayOfYear(date = new Date()) {
  if (isEmpty(year) || isEmpty(month)) return;
  month = this.parseInt(month);
  return new Date(year, month, 0).getDate();
}

// 过去时间和剩余时间字符串
/**
 * 获得过去时间的字符串显示
 * @description 例如：刚刚，1分钟前，1小时前等
 * @param {Date|String} date 日期或日期字符串
 * @returns {String} 返回字符串
 */
export function getPastTimeStr(date) {
  if (isNull(date)) return "--";
  // 是字符串日期则转为日期对象
  if (typeof date == "string") {
    date = parseDateStr(date);
  }
  // 计算时间差
  let startTime = date.getTime();
  let currentTime = Date.now();
  let time = currentTime - startTime;
  let day = parseInt(time / (1000 * 60 * 60 * 24));
  let hour = parseInt(time / (1000 * 60 * 60));
  let min = parseInt(time / (1000 * 60));
  let month = parseInt(day / 30);
  let year = parseInt(month / 12);
  // 判断
  if (year) return year + "年前";
  if (month) return month + "个月前";
  if (day) return day + "天前";
  if (hour) return hour + "小时前";
  if (min) return min + "分钟前";
  else return "刚刚";
}

/**
 * 获得剩余时间的字符串显示
 * @description 例如：1天10小时20分钟30秒
 * @param {Date|String} date 日期或日期字符串
 * @returns {String} 返回字符串
 */
export function getOverTimeStr(date) {
  if (isNull(date)) return "--";
  // 是字符串日期则转为日期对象
  if (typeof date == "string") {
    date = parseDateStr(date);
  }
  // 计算
  var startDate = new Date(); //开始时间
  var endDate = date; //结束时间
  var t = endDate.getTime() - startDate.getTime(); //时间差
  var d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 60 / 60) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  }
  return `${d}天 ${h}小时 ${m}分钟 ${s}秒`;
}

// 计算加减日期的 年，月，日，时，分，秒
/**
 * 日期加减年
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addYear(date = new Date(), num = +1) {
  date.setFullYear(date.getFullYear() + num);
  return date;
}
/**
 * 日期加减月
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addMonth(date = new Date(), num = +1) {
  date.setMonth(date.getMonth() + num);
  return date;
}
/**
 * 日期加减天
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addDate(date = new Date(), num = +1) {
  date.setDate(date.getDate() + num);
  return date;
}
/**
 * 日期加减小时
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addHours(date = new Date(), num = +1) {
  date.setHours(date.getHours() + num);
  return date;
}
/**
 * 日期加减分钟
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addMinutes(date = new Date(), num = +1) {
  date.setMinutes(date.getMinutes() + num);
  return date;
}
/**
 * 日期加减秒
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addSeconds(date = new Date(), num = +1) {
  date.setSeconds(date.getSeconds() + num);
  return date;
}

// 获得两个日期相差的所有数组
/**
 * 获得两个日期之间的年月日数组
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date1 第一个日期
 * @param {String|Date|Timestamp|UnixTimestamp} date2 第二个日期
 * @returns {Array} 返回年月日数组
 */
export function betweenDays(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return;
  // 是日期字符串
  if (isString(date1) && isString(date2)) {
    date1 = parseDateStr(date1);
    date2 = parseDateStr(date2);
  }
  // 是时间戳
  if (isInteger(date1) && isInteger(date2)) {
    // 时间戳
    if (String(date1).length == 13 && String(date2).length == 13) {
      date1 = new Date(date1);
      date2 = new Date(date2);
    }
    // unix时间戳
    if (String(date1).length == 10 && String(date2).length == 10) {
      date1 = new Date(date1 * 1000);
      date2 = new Date(date2 * 1000);
    }
  }
  // 计算
  return _betweenDays(date1, date2);
}

/**
 * 获得两个日期之间的年月数组
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date1 第一个日期
 * @param {String|Date|Timestamp|UnixTimestamp} date2 第二个日期
 * @returns {Array} 返回年月数组
 */
export function betweenMonths(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return;
  // 是日期字符串
  if (isString(date1) && isString(date2)) {
    date1 = parseDateStr(date1);
    date2 = parseDateStr(date2);
  }
  // 是时间戳
  if (isInteger(date1) && isInteger(date2)) {
    // 时间戳
    if (String(date1).length == 13 && String(date2).length == 13) {
      date1 = new Date(date1);
      date2 = new Date(date2);
    }
    // unix时间戳
    if (String(date1).length == 10 && String(date2).length == 10) {
      date1 = new Date(date1 * 1000);
      date2 = new Date(date2 * 1000);
    }
  }
  // 计算
  return _betweenMonths(date1, date2);
}

/**
 * 获得两个日期之间的年数组
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date1 第一个日期
 * @param {String|Date|Timestamp|UnixTimestamp} date2 第二个日期
 * @returns {Array} 返回年数组
 */
export function betweenYears(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return;
  // 是日期字符串
  if (isString(date1) && isString(date2)) {
    date1 = parseDateStr(date1);
    date2 = parseDateStr(date2);
  }
  // 是时间戳
  if (isInteger(date1) && isInteger(date2)) {
    // 时间戳
    if (String(date1).length == 13 && String(date2).length == 13) {
      date1 = new Date(date1);
      date2 = new Date(date2);
    }
    // unix时间戳
    if (String(date1).length == 10 && String(date2).length == 10) {
      date1 = new Date(date1 * 1000);
      date2 = new Date(date2 * 1000);
    }
  }
  // 计算
  return _betweenYears(date1, date2);
}

// 比较日期
/**
 * 比较两个日期的大小
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date1 第一个日期
 * @param {String|Date|Timestamp|UnixTimestamp} date2 第二个日期
 * @returns {Boolean} true：第一个日期大于第二个日期；false：第一个日期小于第二个日期；
 */
export function compareDate(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return;
  // 是日期字符串
  if (isString(date1) && isString(date2)) {
    date1 = parseDateStr(date1);
    date2 = parseDateStr(date2);
  }
  // 是时间戳或unix时间戳
  if (isInteger(date1) && isInteger(date2)) {
    return date1 > date2;
  }
  // 计算
  return date1 > date2;
}

// 计算两个日期相差
/**
 * 获得两个日期相差的天数
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date1 第一个日期
 * @param {String|Date|Timestamp|UnixTimestamp} date2 第二个日期
 * @returns {Number} 返回两个日期相差的天数，结果可能是正数或者负数
 */
export function diffDay(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return 0;
  // 是日期字符串
  if (isString(date1) && isString(date2)) {
    date1 = parseDateStr(date1);
    date2 = parseDateStr(date2);
  }
  // 是日期对象
  if (isDate(date1) && isDate(date2)) {
    return (date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000);
  }
  // 是时间戳
  if (isInteger(date1) && isInteger(date2)) {
    // 时间戳
    if (String(date1).length == 13 && String(date2).length == 13) {
      return (timestamp2 - timestamp1) / (1000 * 60 * 60 * 24);
    }
    // unix时间戳
    if (String(date1).length == 10 && String(date2).length == 10) {
      return (unixTimestamp2 - unixTimestamp1) / (60 * 60 * 24);
    }
  }
}

/**
 * 计算两个日期相差的周数，不满一周为0
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date1 第一个日期
 * @param {String|Date|Timestamp|UnixTimestamp} date2 第二个日期
 * @returns {Number} 返回两个日期相差的天数，结果可能是正数或者负数
 */
export function diffWeek(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return 0;
  // 是日期字符串
  if (isString(date1) && isString(date2)) {
    date1 = parseDateStr(date1);
    date2 = parseDateStr(date2);
  }
  // 是日期对象
  if (isDate(date1) && isDate(date2)) {
    return (date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000);
  }
  // 是时间戳
  if (isInteger(date1) && isInteger(date2)) {
    // 时间戳
    if (String(date1).length == 13 && String(date2).length == 13) {
      return (timestamp2 - timestamp1) / (1000 * 60 * 60 * 24);
    }
    // unix时间戳
    if (String(date1).length == 10 && String(date2).length == 10) {
      return (unixTimestamp2 - unixTimestamp1) / (60 * 60 * 24);
    }
  }
}

/**
 * 计算两个日期相差的月数，不满一个月为0
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date1 第一个日期
 * @param {String|Date|Timestamp|UnixTimestamp} date2 第二个日期
 * @returns {Number} 返回两个日期相差的天数，结果可能是正数或者负数
 */
export function diffMonth(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return 0;
  // 是日期字符串
  if (isString(date1) && isString(date2)) {
    date1 = parseDateStr(date1);
    date2 = parseDateStr(date2);
  }
  // 是日期对象
  if (isDate(date1) && isDate(date2)) {
    return (date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000);
  }
  // 是时间戳
  if (isInteger(date1) && isInteger(date2)) {
    // 时间戳
    if (String(date1).length == 13 && String(date2).length == 13) {
      return (timestamp2 - timestamp1) / (1000 * 60 * 60 * 24);
    }
    // unix时间戳
    if (String(date1).length == 10 && String(date2).length == 10) {
      return (unixTimestamp2 - unixTimestamp1) / (60 * 60 * 24);
    }
  }
}

/**
 * 计算两个日期相差的年数，不满一年为0
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date1 第一个日期
 * @param {String|Date|Timestamp|UnixTimestamp} date2 第二个日期
 * @returns {Number} 返回两个日期相差的天数，结果可能是正数或者负数
 */
export function diffYear(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return 0;
  // 是日期字符串
  if (isString(date1) && isString(date2)) {
    date1 = parseDateStr(date1);
    date2 = parseDateStr(date2);
  }
  // 是日期对象
  if (isDate(date1) && isDate(date2)) {
    return (date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000);
  }
  // 是时间戳
  if (isInteger(date1) && isInteger(date2)) {
    // 时间戳
    if (String(date1).length == 13 && String(date2).length == 13) {
      return (timestamp2 - timestamp1) / (1000 * 60 * 60 * 24);
    }
    // unix时间戳
    if (String(date1).length == 10 && String(date2).length == 10) {
      return (unixTimestamp2 - unixTimestamp1) / (60 * 60 * 24);
    }
  }
}

// 格式化字符串和转化日期
/**
 * 格式化日期字符串
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date 日期
 * @param {String} format 转化格式：yyyy-MM-dd HH:mm:ss，yyyy/MM/dd HH:mm:ss等多种格式
 * @returns {String} 返回格式化后的日期字符串
 */
export function formatDate(date = new Date(), format = "yyyy-MM-dd") {
  // 是日期字符串
  if (isString(date)) {
    date = parseDateStr(date);
  }
  // 是时间戳
  if (isInteger(date)) {
    // 时间戳
    if (String(date).length == 13) {
      date = new Date(date);
    }
    // unix时间戳
    if (String(date).length == 10) {
      date = new Date(date * 1000);
    }
  }

  // 周配置
  let week = {
    0: "日",
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
  };
  // 季度配置
  let quarter = {
    1: "一",
    2: "二",
    3: "三",
    4: "四",
  };
  // 日期配置
  let opt = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12小时制
    "H+": date.getHours(), // 24小时制
    "m+": date.getMinutes(), // 分钟
    "s+": date.getSeconds(), // 秒
    "E+": week[date.getDay()], // 周
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };

  // 年
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  // 周
  if (/(E+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[date.getDay() + ""]
    );
  }
  // 季度
  if (/(q+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (RegExp.$1.length > 1 ? "第" : "") + quarter[Math.floor((date.getMonth() + 3) / 3) + ""] + "季度"
    );
  }
  // 日期
  for (let k in opt) {
    if (new RegExp("(" + k + ")").test(format))
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? opt[k] : ("00" + opt[k]).substr(("" + opt[k]).length));
  }
  return format;
}

/**
 * 日期格式转为日期
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date 日期
 * @returns {Date} 返回转换后的日期
 */
export function parseDate(date) {
  if (isEmpty(dateStr)) return;
  return new Date(dateStr.replace(/-/g, "/"));
}

// 生肖，星座
/**
 * 通过生日计算星座
 * @param {Date|String} date 日期或日期字符串
 * @returns {String} 返回星座
 */
function getZodiac(date) {
  if (typeof date == "string") {
    date = new Date(date);
  }
  // 计算
  let days = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22];
  let arr = [
    "摩羯座",
    "水瓶座",
    "双鱼座",
    "白羊座",
    "金牛座",
    "双子座",
    "巨蟹座",
    "狮子座",
    "处女座",
    "天秤座",
    "天蝎座",
    "射手座",
    "摩羯座",
  ];
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return day < days[month - 1] ? arr[month - 1] : arr[month];
}
/**
 * 通过生日计算生肖
 * @param {Date|String} date 日期或日期字符串
 * @returns {String} 返回生肖
 */
function getChineseZodiac(date) {
  if (typeof date == "string") {
    date = new Date(date);
  }
  // 计算
  let arr = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
  let year = date.getFullYear();
  if (year < 1900) {
    return "未知";
  }
  return arr[(year - 1900) % arr.length];
}

// 内部使用的函数
/**
 * 数字前补齐零，保持两位
 * @param {String|Number} value 可以是数字和字符串
 * @returns {String} 返回处理后的字符串
 */
function _digit(value) {
  value = value.toString();
  return value[1] ? value : "0" + value;
}

/**
 * 获得两个日期之间的年数组
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 */
function _betweenYears(date1, date2) {
  let array = [];
  while (date2 - date1 >= 0) {
    let year = date1.getFullYear();

    // 加入数组
    array.push(year);
    // 更新日期
    date1.setFullYear(date1.getFullYear() + 1);
  }
  return array;
}
/**
 * 获得两个日期之间的年月数组
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 */
function _betweenMonths(date1, date2) {
  let array = [];
  //获取时间对象
  let min = new Date();
  let max = new Date();
  //设置起始时间
  min.setFullYear(date1.getFullYear(), date1.getMonth() + 1);
  //设置结束时间
  max.setFullYear(date2.getFullYear(), date2.getMonth() + 1);

  //复制一份起始时间对象
  let curr = min;
  //定义字符串
  let str = "";
  //起始时间在结束时间之前
  while (curr <= max) {
    //获取此时间的月份
    let month = curr.getMonth();
    //如果月份为0，也就是代表12月份
    if (month === 0) {
      str = curr.getFullYear() - 1 + "-" + 12;
    } else {
      //正常月份
      str = curr.getFullYear() + "-" + _digit(month);
    }
    //将此年月加入数组
    array.push(str);
    //更新此时间月份
    curr.setMonth(month + 1);
  }
  return array;
}

/**
 * 获得两个日期之间的年月日数组
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 */
function _betweenDays(date1, date2) {
  let array = [];
  while (date2 - date1 >= 0) {
    let year = date1.getFullYear(),
      month = _digit(date1.getMonth() + 1),
      day = _digit(date1.getDate());

    // 加入数组
    array.push(year + "-" + month + "-" + day);
    // 更新日期
    date1.setDate(date1.getDate() + 1);
  }
  return array;
}
