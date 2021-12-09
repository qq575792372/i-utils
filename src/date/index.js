import { isEmpty, isNull } from "../validate";

/**
 * 判断是否是今天
 * @param {String|Date} date 传参日期，可以是yyyy-MM-dd格式，也可以是Date对象
 * @returns {Boolean} 返回true和false
 */
export function isToday(date) {
  if (isNull(date)) return;
  // 当前日期
  let curDate = getCurrentDate();
  // 指定日期
  let tarData = new Date(date.includes("-") ? date.replace(/-/g, "/") : date);
  return ["getFullYear", "getMonth", "getDate"].every((i) => curDate[i]() === tarData[i]());
}

/**
 * 判断是否是闰年
 * @param {Number} year 年份
 * @returns {Boolean} 返回true和false
 */
export function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

/**
 * 获得当前日期
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Date} 返回日期
 */
export function getCurrentDate(date = new Date()) {
  return date;
}

/**
 * 获得日期字符串
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} separator 分隔符，默认“-”分隔
 * @returns {String} 返回yyyy-MM-dd格式
 */
export function getDate(date = new Date(), separator = "-") {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return [year, month, day].map(_digit).join(separator);
}

/**
 * 获得时间字符串
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} separator 分隔符，默认“-”
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
 * 获取时间戳
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Timestamp} 返回时间戳
 */
export function getTimestamp(date = new Date()) {
  return date.getTime();
}

/**
 * 获取Unix时间戳
 * @param {Date} date 日期参数，默认当前日期
 * @returns {UnixTimestamp} 返回Unix时间戳
 */
export function getUnixTimestamp(date = new Date()) {
  return Math.round(date / 1000);
}

/**
 * 时间戳转日期
 * @param {Timestamp} timestamp 时间戳
 * @returns {Date} 返回日期
 */
export function timestampToDate(timestamp) {
  if (isEmpty(timestamp)) return;
  return new Date(timestamp);
}

/**
 * Unix时间戳转日期
 * @param {UnixTimestamp} unixTimestamp Unix时间戳
 * @returns {Date} 返回日期
 */
export function unixTimestampToDate(unixTimestamp) {
  if (isEmpty(unixTimestamp)) return;
  return new Date(unixTimestamp * 1000);
}

/**
 * 获得当前日期是周几
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} lang 周字符串语言，zh：周一，周二等；en：1,2等
 * @returns {String|Number} 返回对应的zh或者en语言的周数
 */
export function getWeekDay(date = new Date(), lang = "zh") {
  if (isEmpty(date)) return;
  let day = "";
  if (lang == "zh") {
    day = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六")[date.getDay()];
  } else {
    day = new Array(7, 1, 2, 3, 4, 5, 6)[date.getDay()];
  }
  return day;
}

/**
 * 获得某年某月的天数
 * @param {Number} year 年
 * @param {Number} month 月
 * @returns {Number} 返回对应年月的天数
 */
export function getYearMonthDayNum(year, month) {
  if (isEmpty(year) || isEmpty(month)) return;
  month = this.parseInt(month);
  return new Date(year, month, 0).getDate();
}

/**
 * 获得某年某月的天数数组
 * @param {Number} year 年
 * @param {Number} month 月
 * @returns 返回对应年月的天数数组
 */
export function getYearMonthDayArray(year, month) {
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
 * 日期字符串转数组
 * @param {String} dateStr 日期字符串，格式支持：yyyy-MM-dd，yyyy/MM/dd
 * @returns {Array} 返回字符串数组
 */
export function dateStrToArray(dateStr) {
  if (isEmpty(dateStr)) return;
  dateStr = dateStr.replace(/(\-)|(\:)|(\s)|(\/)/g, ",");
  return dateStr.split(",");
}

/**
 * 时间字符串转数组
 * @param {String} dateTimeStr 时间字符串，格式支持：yyyy-MM-dd HH:mm:ss，yyyy/MM/dd HH:mm:ss
 * @returns 返回字符串数组
 */
export function dateTimeStrToArray(dateTimeStr) {
  if (isEmpty(dateTimeStr)) return;
  dateTimeStr = dateTimeStr.replace(/(\-)|(\:)|(\s)|(\/)/g, ",");
  return dateTimeStr.split(",");
}

/**
 * 获得加减年数后的日期
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用+1和-1来表示
 * @returns {Date} 返回加减年数后的日期
 */
export function getDiffYear(date = new Date(), num = +1) {
  date.setFullYear(date.getFullYear() + num);
  return date;
}

/**
 * 获得加减月数后的日期
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用+1和-1来表示
 * @returns {Number} 返回加减月数后的日期
 */
export function getDiffMonth(date = new Date(), num = +1) {
  date.setMonth(date.getMonth() + num);
  return date;
}

/**
 * 获得加减天数后的日期
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用+1和-1来表示
 * @returns {Number} 返回加减天数后的日期
 */
export function getDiffDate(date = new Date(), num = +1) {
  date.setDate(date.getDate() + num);
  return date;
}

/**
 * 计算两个日期之间相差的天数
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns {Number} 返回两个日期相差的天数；注：数字大于0表示第二个大于第一个；数字小于0表示第二个小于第一个；
 */
export function getDiffDateNum(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return 0;
  return (date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000);
}

/**
 * 计算两个日期字符串之间相差的天数
 * @param {Date} dateStr1 第一个日期字符串
 * @param {Date} dateStr2 第二个日期字符串
 * @returns {Number} 返回两个日期字符串相差的天数；注：数字大于0表示第二个大于第一个；数字小于0表示第二个小于第一个；
 */
export function getDiffDateStrNum(dateStr1, dateStr2) {
  if (isEmpty(dateStr1) || isEmpty(dateStr2)) return 0;
  return (formatStrToDate(dateStr2).getTime() - formatStrToDate(dateStr1).getTime()) / (24 * 60 * 60 * 1000);
}

/**
 * 计算两个时间戳之间相差的天数
 * @param {Timestamp} timestamp1 第一个时间戳
 * @param {Timestamp} timestamp2 第二个时间戳
 * @returns 返回两个时间戳相差的天数；注：数字大于0表示第二个大于第一个；数字小于0表示第二个小于第一个；
 */
export function getDiffTimestampNum(timestamp1, timestamp2) {
  if (isEmpty(timestamp1) || isEmpty(timestamp2)) return 0;
  return (timestamp2 - timestamp1) / (1000 * 60 * 60 * 24);
}

/**
 * 计算两个Unix时间戳之间相差的天数
 * @param {UnixTimestamp} unixTimestamp1 第一个Unix时间戳
 * @param {UnixTimestamp} unixTimestamp2 第二个Unix时间戳
 * @returns 返回两个Unix时间戳相差的天数；注：数字大于0表示第二个大于第一个；数字小于0表示第二个小于第一个；
 */
export function getDiffUnixTimestampNum(unixTimestamp1, unixTimestamp2) {
  if (isEmpty(unixTimestamp1) || isEmpty(unixTimestamp2)) return 0;
  return (unixTimestamp2 - unixTimestamp1) / (60 * 60 * 24);
}

/**
 * 获得两个日期之间的日期字符串数组
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns {Array} 返回日期字符串数组
 */
export function getDiffDateArray(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return [];
  let diffArray = [];
  while (date2.getTime() - date1.getTime() >= 0) {
    let year = date1.getFullYear();
    let month = _digit(date1.getMonth() + 1);
    let day = _digit(date1.getDate());
    diffArray.push(year + "-" + month + "-" + day);
    date1.setDate(date1.getDate() + 1);
  }
  return diffArray;
}

/**
 * 获得两个日期字符串之间的日期字符串数组
 * @param {String} dateStr1 第一个日期字符串
 * @param {String} dateStr2 第二个日期字符串
 * @returns {Array} 返回日期字符串数组
 */
export function getDiffDateStrArray(dateStr1, dateStr2) {
  if (isEmpty(dateStr1) || isEmpty(dateStr2)) return [];
  return getDiffDateArray(formatStrToDate(dateStr1), formatStrToDate(dateStr2));
}

/**
 * 日期或日期字符串，格式化为指定的日期字符串格式
 * @param {Date|String} date 日期或日期字符串
 * @param {String} format 转化日期字符串格式，支持格式：yyyy-MM-dd HH:mm:ss，yyyy/MM/dd HH:mm:ss等多种格式
 * @returns {String} 返回格式化后的日期字符串
 */
export function formatDate(date = new Date(), format = "yyyy-MM-dd") {
  // 是日期字符串类型则统一转为Date类型
  if (typeof date == "string") {
    date = formatStrToDate(date);
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
 * 日期字符串转日期
 * @param {String} dateStr 日期字符串，支持格式：yyyy-MM-dd HH:mm:ss，yyyy/MM/dd HH:mm:ss
 * @returns {Date} 返回日期
 */
export function formatStrToDate(dateStr) {
  if (isEmpty(dateStr)) return;
  return new Date(dateStr.replace(/-/g, "/"));
}

/**
 * 格式化已过去时间的字符串
 * @description 显示例如：刚刚，1分钟前，1小时前等
 * @param {Date|String} date 日期或日期字符串
 * @returns {String} 返回已过时间字符串
 */
export function getPassTimeStr(date) {
  if (isNull(date)) return "--";
  // 是字符串日期则转为日期对象
  if (typeof date == "string") {
    date = formatStrToDate(date);
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
 * 格式化距离当前剩余时间的字符串
 * @description 显示例如：1天10小时20分钟30秒
 * @param {Date|String} date 日期或日期字符串
 * @returns {String} 返回剩余时间的字符串
 */
export function formatOverTimeStr(date) {
  if (isNull(date)) return "--";
  // 是字符串日期则转为日期对象
  if (typeof date == "string") {
    date = formatStrToDate(date);
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

/**
 * 比较两个日期的大小
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns {Boolean} 返回true和false；返回true表示第一个日期大于第二个日期；返回false表示第一个日期小于第二个日期；
 */
export function compareDate(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return;
  return date1.getTime() > date2.getTime();
}

/**
 * 比较两个时间戳的大小
 * @param {Timestamp} timestamp1 第一个时间戳
 * @param {Timestamp} timestamp2 第二个时间戳
 * @returns {Boolean} 返回true和false；返回true表示第一个时间戳大于第二个时间戳；返回false表示第一个时间戳小于第二个时间戳；
 */
export function compareTimestamp(timestamp1, timestamp2) {
  if (isEmpty(timestamp1) || isEmpty(timestamp2)) return;
  return timestamp1 > timestamp2;
}

/**
 * 比较两个Unix时间戳的大小
 * @param {UnixTimestamp} unixTimestamp1 第一个Unix时间戳
 * @param {UnixTimestamp} unixTimestamp2 第二个Unix时间戳
 * @returns {Boolean} 返回true和false；返回true表示第一个Unix时间戳大于第二个Unix时间戳；返回false表示第一个Unix时间戳小于第二个Unix时间戳；
 */
export function compareUnixTimestamp(unixTimestamp1, unixTimestamp2) {
  if (isEmpty(unixTimestamp1) || isEmpty(unixTimestamp2)) return;
  return unixTimestamp1 > unixTimestamp2;
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
