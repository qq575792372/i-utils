import { isEmpty, isNull, isInteger, isDate, isString } from "../../core/src/validate";
import { parseInt } from "../../core/src/number";

/* 快捷日期 */

/**
 * 今天
 *@returns {String} 返回日期字符串
 */
export function today() {
  return getDate();
}

/**
 * 昨天
 * @returns {String} 返回日期字符串
 */
export function yesterday() {
  return formatDate(addDate(new Date(), -1));
}

/**
 * 明天
 *@returns {String} 返回日期字符串
 */
export function tomorrow() {
  return formatDate(addDate(new Date(), +1));
}

/**
 * 上周（7天前日期）
 * @returns {String} 返回日期字符串
 */
export function prevWeek() {
  return formatDate(addDate(new Date(), -7));
}

/**
 * 下周（7天后日期）
 * @returns {String} 返回日期字符串
 */
export function nextWeek() {
  return formatDate(addDate(new Date(), +7));
}

/**
 * 上个月（30天前日期）
 * @returns {String} 返回日期字符串
 */
export function prevMonth() {
  return formatDate(addDate(new Date(), -30));
}

/**
 * 下个月（30天后日期）
 * @returns {String} 返回日期字符串
 */
export function nextMonth() {
  return formatDate(addDate(new Date(), +30));
}

/**
 * 去年（365天前日期）
 * @returns {String} 返回日期字符串
 */
export function prevYear() {
  return formatDate(addDate(new Date(), -365));
}

/**
 * 明年（365天后日期）
 *@returns {String} 返回日期字符串
 */
export function nextYear() {
  return formatDate(addDate(new Date(), +365));
}

/* 判断某刻日期 */
/**
 * 现在是否为上午
 * @returns {Boolean} 返回true和false
 */
export function isAM() {
  return new Date().getHours() < 12;
}

/**
 * 现在是否为下午
 * @returns {Boolean} 返回true和false
 */
export function isPM() {
  return new Date().getHours() >= 12;
}

/**
 * 是否为今天
 * @param {String|Date} date 日期参数
 * @returns {Boolean} 返回true和false
 */
export function isToday(date) {
  if (isNull(date)) return;
  // 字符串日期
  if (isString(date)) {
    date = parseDate(date);
  }

  // 当前日期
  let nowDate = new Date();

  // 判断日期
  return ["getFullYear", "getMonth", "getDate"].every((i) => nowDate[i]() === date[i]());
}

/**
 * 是否为昨天
 * @param {String|Date} date 日期参数
 * @returns {Boolean} 返回true和false
 */
export function isYesterday(date) {
  // 计算时间差
  let startTime = date.getTime();
  let currentTime = Date.now();
  let time = currentTime - startTime;
  let day = parseInt(time / (1000 * 60 * 60 * 24));
  return day === 1;
}

/**
 * 是否为前天
 * @param {String|Date} date 日期参数
 * @returns {Boolean} 返回true和false
 */
export function isBeforeYesterday(date) {
  // 计算时间差
  let startTime = date.getTime();
  let currentTime = Date.now();
  let time = currentTime - startTime;
  let day = parseInt(time / (1000 * 60 * 60 * 24));
  return day === 2;
}

/**
 * 今天是否为工作日
 * @returns {Boolean} 返回true和false
 */
export function isWorkday() {
  let dayOfWeek = getDayOfWeek();
  return dayOfWeek != 6 && dayOfWeek != 7;
}

/**
 * 今天是否为周末（周六和周日）
 * @returns {Boolean} 返回true和false
 */
export function isWeekend() {
  let dayOfWeek = getDayOfWeek();
  return dayOfWeek == 6 || dayOfWeek == 7;
}

/**
 * 是否为闰年
 * @description 闰年366天，平年365天
 * @param {Number} year 年份
 * @returns {Boolean} 返回true和false
 */
export function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

/* 比较同一 天，周，月，年 */
/**
 * 比较两个日期是否为同一天
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns {Boolean} 返回true和false
 */
export function isSameDay(date1, date2) {
  return ["getFullYear", "getMonth", "getDate"].every((i) => date1[i]() === date2[i]());
}

/**
 * 比较两个日期是否为同一周
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns {Boolean} 返回true和false
 */
export function isSameWeek(date1, date2) {
  let diffDate1 = date1.getTime() / (24 * 60 * 60 * 1000);
  let diffDate2 = date2.getTime() / (24 * 60 * 60 * 1000);
  return parseInt((diffDate1 + 4) / 7) == parseInt((diffDate2 + 4) / 7);
}

/**
 * 比较两个日期是否为同一个月
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns {Boolean} 返回true和false
 */
export function isSameMonth(date1, date2) {
  return ["getFullYear", "getMonth"].every((i) => date1[i]() === date2[i]());
}

/**
 * 比较两个日期是否为同一年
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns {Boolean} 返回true和false
 */
export function isSameYear(date1, date2) {
  return ["getFullYear"].every((i) => date1[i]() === date2[i]());
}

/* 今天是否为 月初、月末 */
/**
 * 今天是否为本月第一天
 * @returns {Boolean} 返回true和false
 */
export function isFirstDayOfMonth() {
  return getDay() == 1;
}

/**
 * 今天是否为本月最后一天
 * @returns {Boolean} 返回true和false
 */
export function isLastDayOfMonth() {
  return getDay() == getFullDayOfMonth();
}

/* 获取日期，时间戳等 */
/**
 * 获得此刻的日期
 * @returns {Date} 返回日期
 */
export function getNow() {
  return new Date();
}

/**
 * 获得当前日期字符串
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} separator 年月日分隔符，默认“-”分隔
 * @returns {String} 返回日期字符串
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
 * @returns {String} 返回时间字符串
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

/**
 * 获得当前日
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回日
 */
export function getDay(date = new Date()) {
  return date.getDate();
}

/**
 * 获得当前月
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} separator 年月分隔符，默认“-”分隔
 * @returns {Number} 返回月
 */
export function getMonth(date = new Date()) {
  return date.getMonth() + 1;
}

/**
 * 获得当前年
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回年
 */
export function getYear(date = new Date()) {
  return date.getFullYear();
}

/**
 * 获得当前年月
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} separator 年月分隔符，默认“-”分隔
 * @returns {String} 返回年月
 */
export function getYearMonth(date = new Date(), separator = "-") {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  return [year, month].map(_digit).join(separator);
}

/**
 * 获得当前日期是周几
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} format 周格式化结果：“E”:日, “EE”:周日, “EEE”:星期日；默认“EE”
 * @returns {String} 返回周几
 */
export function getWeek(date = new Date(), format = "EE") {
  let week = {
    0: "日",
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
  };
  if (format == "E") {
    return week[date.getDay()];
  } else if (format == "EE") {
    return "周" + week[date.getDay()];
  } else if (format == "EEE") {
    return "星期" + week[date.getDay()];
  } else {
    throw new Error("Invalid week format!");
  }
}
/**
 * 获得当前日期是第几季度
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} format 季度格式化结果：“q”:一季度, "qq":第一季度；默认：“q”
 * @returns {String} 返回第几季度
 */
export function getQuarter(date = new Date(), format = "q") {
  let quarter = {
    1: "一",
    2: "二",
    3: "三",
    4: "四",
  };
  if (format == "q") {
    return quarter[Math.floor((date.getMonth() + 3) / 3)] + "季度";
  } else if (format == "qq") {
    return "第" + quarter[Math.floor((date.getMonth() + 3) / 3)] + "季度";
  } else {
    throw new Error("Invalid quarter format!");
  }
}

/* 当前日期是所在 周，月，年 的第几天 */
/**
 * 获得当前日期是所在周的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number|String} 返回天数
 */
export function getDayOfWeek(date = new Date()) {
  return new Array(7, 1, 2, 3, 4, 5, 6)[date.getDay()];
}

/**
 * 获得当前日期是所在月的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回天数
 */
export function getDayOfMonth(date = new Date()) {
  return date.getDate();
}

/**
 * 获得当前日期是所在年的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回天数
 */
export function getDayOfYear(date = new Date()) {
  return Math.ceil((date - new Date(date.getFullYear().toString())) / (24 * 60 * 60 * 1000)) + 1;
}

/* 当前日期是所在 月，年的第几周 */
/**
 * 获得当前日期是所在月的第几周
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回周数
 */
export function getWeekOfMonth(date = new Date()) {
  return Math.ceil((date.getDate() + 6 - getDayOfWeek(date)) / 7);
}
/**
 * 获得当前日期是所在年的第几周
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回周数
 */
export function getWeekOfYear(date = new Date()) {
  let startDate = new Date(date.getFullYear(), 0, 1);
  let startDay = getDayOfWeek(startDate);
  let diff = Math.round((date - startDate) / (24 * 60 * 60 * 1000));
  return Math.ceil((diff + startDay) / 7);
}

/* 当前日期所在 周，月 的第一天和最后一天 */
/**
 * 获得当前日期所在周的第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function getFirstDayOfWeek(date = new Date()) {
  let weekDay = getDayOfWeek(date);
  date.setDate(date.getDate() - weekDay + 1);
  return formatDate(date);
}

/**
 * 获得当前日期所在周的最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function getLastDayOfWeek(date = new Date()) {
  let weekDay = getDayOfWeek(date);
  date.setDate(date.getDate() + (7 - weekDay));
  return formatDate(date);
}

/**
 * 获得当前日期所在月的第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function getFirstDayOfMonth(date = new Date()) {
  date.setDate(1);
  return formatDate(date);
}

/**
 * 获得当前日期所在月的最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function getLastDayOfMonth(date = new Date()) {
  return formatDate(new Date(date.getFullYear(), date.getMonth() + 1, 0));
}

/* 获得当前 月，年 的总天数 */
/**
 * 获得当前日期所在月总共多少天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回总天数
 */
export function getFullDayOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

/**
 * 获得当前日期所在年总共多少天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回总天数
 */
export function getFullDayOfYear(date = new Date()) {
  return isLeapYear(date.getFullYear()) ? 366 : 365;
}

/* 过去时间和剩余时间的显示 */
/**
 * 获得过去时间的字符串显示
 * @description 例如：刚刚，1分钟前，1小时前等
 * @param {Date|String} date 日期或日期字符串
 * @param {String} lang 字符串语言，zh和en，默认zh
 * @returns {String} 返回字符串
 */
export function getPastTime(date, lang = "zh") {
  if (isNull(date)) return "--";
  // 是字符串日期则转为日期对象
  if (typeof date == "string") {
    date = parseDate(date);
  }
  let types = {
    zh: {
      year: "年前",
      month: "个月前",
      day: "天前",
      beforeYestoday: "前天",
      yestoday: "昨天",
      today: "今天",
      hour: "小时前",
      minute: "分钟前",
      just: "刚刚",
    },
    en: {
      year: " year ago",
      month: " month ago",
      day: " day ago",
      beforeYestoday: "before yestoday",
      yestoday: " yestoday",
      today: " today",
      hour: " hour ago",
      minute: " minute ago",
      just: " just",
    },
  };
  // 计算时间差
  let startTime = date.getTime();
  let currentTime = Date.now();
  let time = currentTime - startTime;
  // 年月日时分
  let year = parseInt(time / (1000 * 60 * 60 * 24 * 30 * 12));
  let month = parseInt(time / (1000 * 60 * 60 * 24 * 30));
  let day = parseInt(time / (1000 * 60 * 60 * 24));
  let hour = parseInt(time / (1000 * 60 * 60));
  let min = parseInt(time / (1000 * 60));

  // 返回结果
  if (year) {
    return year + types[lang].year;
  } else if (month) {
    return month + types[lang].month;
  } else if (day) {
    if (day === 1) {
      return types[lang].yestoday;
    } else if (day === 2) {
      return types[lang].beforeYestoday;
    } else {
      return day + types[lang].day;
    }
  } else if (hour) {
    if (hour > 12) {
      return types[lang].today;
    } else {
      return hour + types[lang].hour;
    }
  } else if (min) {
    return min + types[lang].minute;
  } else {
    return types[lang].just;
  }
}

/**
 * 获得剩余时间的字符串显示
 * @description 例如：1天10小时20分钟30秒
 * @param {Date|String} date 日期或日期字符串
 * @returns {String} 返回字符串
 */
export function getOverTime(date) {
  if (isNull(date)) return "--";
  // 是字符串日期则转为日期对象
  if (typeof date == "string") {
    date = parseDate(date);
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

/* 计算日期加减 年，月，日，时，分，秒 */
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

/* 计算两个日期相差 */
/**
 * 计算两个日期相差的天数，不满一天为0
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date1 第一个日期
 * @param {String|Date|Timestamp|UnixTimestamp} date2 第二个日期
 * @returns {Number} 返回两个日期相差的天数，结果为正数或者负数
 */
export function diffDay(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return 0;
  let diff = 0;
  // 是日期字符串
  if (isString(date1) && isString(date2)) {
    date1 = parseDate(date1);
    date2 = parseDate(date2);
  }
  // 是日期对象
  if (isDate(date1) && isDate(date2)) {
    diff = parseInt((date2 - date1) / (24 * 60 * 60 * 1000));
  }
  // 是时间戳
  if (isInteger(date1) && isInteger(date2)) {
    // 时间戳
    if (String(date1).length == 13 && String(date2).length == 13) {
      diff = parseInt((date2 - date1) / (24 * 60 * 60 * 1000));
    }
    // unix时间戳
    if (String(date1).length == 10 && String(date2).length == 10) {
      diff = parseInt((date2 - date1) / (24 * 60 * 60));
    }
  }

  // 返回
  return diff >= 0 ? Math.abs(diff) : diff;
}

/**
 * 计算两个日期相差的周数，不满一周为0
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date1 第一个日期
 * @param {String|Date|Timestamp|UnixTimestamp} date2 第二个日期
 * @returns {Number} 返回两个日期相差的周数，结果为正数或者负数
 */
export function diffWeek(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return 0;
  let diff = 0;
  // 是日期字符串
  if (isString(date1) && isString(date2)) {
    date1 = parseDate(date1);
    date2 = parseDate(date2);
  }
  // 是日期对象
  if (isDate(date1) && isDate(date2)) {
    diff = parseInt((date2 - date1) / (7 * 24 * 60 * 60 * 1000));
  }
  // 是时间戳
  if (isInteger(date1) && isInteger(date2)) {
    // 时间戳
    if (String(date1).length == 13 && String(date2).length == 13) {
      diff = parseInt((date2 - date1) / (7 * 24 * 60 * 60 * 1000));
    }
    // unix时间戳
    if (String(date1).length == 10 && String(date2).length == 10) {
      diff = parseInt((date2 - date1) / (7 * 24 * 60 * 60));
    }
  }

  // 返回
  return diff >= 0 ? Math.abs(diff) : diff;
}

/**
 * 计算两个日期相差的月数，不满一月为0
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date1 第一个日期
 * @param {String|Date|Timestamp|UnixTimestamp} date2 第二个日期
 * @returns {Number} 返回两个日期相差的月数，结果为正数或者负数
 */
export function diffMonth(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return 0;
  let diff = 0;
  // 是日期字符串
  if (isString(date1) && isString(date2)) {
    date1 = parseDate(date1);
    date2 = parseDate(date2);
  }
  // 是日期对象
  if (isDate(date1) && isDate(date2)) {
    diff = parseInt((date2 - date1) / (30 * 24 * 60 * 60 * 1000));
  }
  // 是时间戳
  if (isInteger(date1) && isInteger(date2)) {
    // 时间戳
    if (String(date1).length == 13 && String(date2).length == 13) {
      diff = parseInt((date2 - date1) / (30 * 24 * 60 * 60 * 1000));
    }
    // unix时间戳
    if (String(date1).length == 10 && String(date2).length == 10) {
      diff = parseInt((date2 - date1) / (30 * 24 * 60 * 60));
    }
  }

  // 返回
  return diff >= 0 ? Math.abs(diff) : diff;
}

/**
 * 计算两个日期相差的年数，不满一年为0
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date1 第一个日期
 * @param {String|Date|Timestamp|UnixTimestamp} date2 第二个日期
 * @returns {Number} 返回两个日期相差的年数，结果为正数或者负数
 */
export function diffYear(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return 0;
  let diff = 0;
  // 是日期字符串
  if (isString(date1) && isString(date2)) {
    date1 = parseDate(date1);
    date2 = parseDate(date2);
  }
  // 是日期对象
  if (isDate(date1) && isDate(date2)) {
    diff = parseInt((date2 - date1) / (12 * 30 * 24 * 60 * 60 * 1000));
  }
  // 是时间戳
  if (isInteger(date1) && isInteger(date2)) {
    // 时间戳
    if (String(date1).length == 13 && String(date2).length == 13) {
      diff = parseInt((date2 - date1) / (12 * 3024 * 60 * 60 * 1000));
    }
    // unix时间戳
    if (String(date1).length == 10 && String(date2).length == 10) {
      diff = parseInt((date2 - date1) / (12 * 30 * 60 * 60));
    }
  }

  // 返回
  return diff >= 0 ? Math.abs(diff) : diff;
}

/* 获得两个日期之间数组 */
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
    date1 = parseDate(date1);
    date2 = parseDate(date2);
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
    date1 = parseDate(date1);
    date2 = parseDate(date2);
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
    date1 = parseDate(date1);
    date2 = parseDate(date2);
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

/* 比较日期大小 */
/**
 * 比较两个日期的大小
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date1 第一个日期
 * @param {String|Date|Timestamp|UnixTimestamp} date2 第二个日期
 * @returns {Boolean} 返回 true：第一个日期大于第二个日期；false：第一个日期小于第二个日期；
 */
export function compareDate(date1, date2) {
  if (isEmpty(date1) || isEmpty(date2)) return;
  // 是日期字符串
  if (isString(date1) && isString(date2)) {
    date1 = parseDate(date1);
    date2 = parseDate(date2);
  }
  // 是时间戳或unix时间戳
  if (isInteger(date1) && isInteger(date2)) {
    return date1 > date2;
  }

  // 计算
  return date1 > date2;
}

/* 格式化和解析日期 */
/**
 * 格式化日期字符串
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {String|Date|Timestamp|UnixTimestamp} date 日期参数
 * @param {String} format 转化格式：yyyy-MM-dd HH:mm:ss，yyyy/MM/dd HH:mm:ss等多种格式，字符串格式的需要注意只支持部分格式
 * @returns {String} 返回格式化后的日期字符串
 */
export function formatDate(date, format = "yyyy-MM-dd") {
  if (isNull(date)) return;
  // 日期字符串
  if (isString(date)) {
    date = parseDate(date);
  }
  // 时间戳
  if (isInteger(date) && String(date).length == 13) {
    date = new Date(date);
  }
  // unix时间戳
  if (isInteger(date) && String(date).length == 10) {
    date = new Date(date * 1000);
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
      (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[date.getDay()]
    );
  }
  // 季度
  if (/(q+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (RegExp.$1.length > 1 ? "第" : "") + quarter[Math.floor((date.getMonth() + 3) / 3)] + "季度"
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
 * 解析为日期对象
 * @description 支持：日期字符串，时间戳，Unix时间戳
 * @param {String|Timestamp|UnixTimestamp} value 日期参数，如果是字符串格式，仅支持 yyyy-MM-dd，yyyy-MM-dd HH:mm:ss，yyyy/MM/dd，yyyy/MM/dd HH:mm:ss，MM/dd/yyyy，MM/dd/yyyy HH:mm:ss 格式
 * @returns {Date} 返回转换后的日期
 */
export function parseDate(value) {
  if (isNull(value)) return;
  // 日期字符串
  if (isString(value)) {
    return new Date(value.replace(/-/g, "/"));
  }
  // 时间戳
  if (isInteger(value) && String(value).length == 13) {
    return new Date(value);
  }
  // unix时间戳
  if (isInteger(value) && String(value).length == 10) {
    return new Date(value * 1000);
  }
}

/* 内部使用的函数 */
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
