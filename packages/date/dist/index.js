/*!
 * @lime-util/date v3.2.8
 * Copyright 2021-2024, Gaoshiwei <575792372@qq.com>
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LimeDate = factory());
})(this, (function () { 'use strict';

  /* 数据类型 */
  /**
   * 判断是整数
   * @param {*} value 参数
   * @returns {Boolean} result 返回true和false
   */
  function isInteger(value) {
    return Number.isInteger(value);
  }

  /**
   * 判断类型是字符串 String
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isString(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "String";
  }

  /**
   * 判断类型是日期 Date
   * @param {*} value 参数
   * @returns {Boolean} 返回true和false
   */
  function isDate(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === "Date";
  }

  /**
   * 判断对象为空
   * @description 判断值是否为空，如果对象初始化了值则不为空
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isNull(value) {
    return value == undefined || value == null || value == "";
  }

  /**
   * 判断值为空
   * @description 判断是否是有意义不为空的值，如果值是{},[]空的数据则为空
   * @param {*} value 校验的参数
   * @returns {Boolean} 返回true和false
   */
  function isEmpty(value) {
    return isNull(value) || !(Object.keys(value) || value).length;
  }

  /**
   * 转为数字类型
   * @description 解决部分浏览器在转换 '08','09'等是0开头时被默认转8进制问题
   * @param {number} value 转换的值
   * @param {Number} radix 进制数，默认10进制
   * @returns {Number} 返回转换后的数字
   */
  function parseInt(value, radix = 10) {
    return Number.parseInt(value, radix);
  }

  /**
   * 日期包常量
   */

  // 上午和下午
  const AM_PM = {
    zh: {
      AM: "上午",
      PM: "下午",
    },
    en: {
      AM: "AM",
      PM: "PM",
    },
  };
  // 周
  const WEEK = {
    zh: {
      FULL: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      SHORT: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      MINI: ["日", "一", "二", "三", "四", "五", "六"],
    },
    en: {
      FULL: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      SHORT: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      MINI: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    },
  };
  // 季度
  const QUARTER = {
    zh: {
      FULL: ["第一季度", "第二季度", "第三季度", "第四季度"],
      SHORT: ["一季度", "二季度", "三季度", "四季度"],
      MINI: ["一", "二", "三", "四"],
    },
    en: {
      FULL: ["quarter 1st", "quarter 2nd", "quarter 3rd", "quarter 4th"],
      SHORT: ["Q1th", "Q2nd", "Q3rd", "Q4th"],
      MINI: ["Q1", "Q2", "Q3", "Q4"],
    },
  };

  // 已过日期类型
  const OVER_TIME = {
    zh: {
      YEAR: "年",
      MONTH: "月",
      DATE: "日",
      HOUR: "时",
      MINUTE: "分",
      SECOND: "秒",
      MILLISECOND: "毫秒",
      DAY: "天",
      QUARTER: "季度",
    },
    en: {
      YEAR: "year",
      MONTH: "month",
      DATE: "date",
      HOUR: "hour",
      MINUTE: "minute",
      SECOND: "second",
      MILLISECOND: "millisecond",
      DAY: "day",
      QUARTER: "quarter",
    },
  };

  // 时间节点
  const PASS_TIME = {
    zh: {
      YEAR: "年前",
      MONTH: "个月前",
      DAY: "天前",
      BEFORE_YESTERDAY: "前天",
      YESTERDAY: "昨天",
      TODAY: "今天",
      HOUR: "小时前",
      MINUTE: "分钟前",
      JUST: "刚刚",
    },
    en: {
      YEAR: " year ago",
      MONTH: " month ago",
      DAY: " day ago",
      BEFORE_YESTERDAY: "before yesterday",
      YESTERDAY: " yesterday",
      TODAY: " today",
      HOUR: " hour ago",
      MINUTE: " minute ago",
      JUST: " just",
    },
  };

  // 星座
  const ZODIAC = {
    zh: [
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
    ],
    en: [],
  };

  // 生肖
  const CHINESE_ZODIAC = {
    zh: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
    en: ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"],
  };

  /* 快捷日期 */
  /**
   * 今天
   *@returns {String} 返回日期字符串
   */
  function today() {
    return getDate();
  }

  /**
   * 昨天
   * @returns {String} 返回日期字符串
   */
  function yesterday() {
    return toDateString(addDate(new Date(), -1));
  }

  /**
   * 明天
   *@returns {String} 返回日期字符串
   */
  function tomorrow() {
    return toDateString(addDate(new Date(), +1));
  }

  /**
   * 上周（7天前日期）
   * @param {Date} date 日期参数，默认当前日期
   * @returns {String} 返回日期字符串
   */
  function lastWeek(date = new Date()) {
    return toDateString(addDate(date, -7));
  }

  /**
   * 下周（7天后日期）
   * @param {Date} date 日期参数，默认当前日期
   * @returns {String} 返回日期字符串
   */
  function nextWeek(date = new Date()) {
    return toDateString(addDate(date, +7));
  }

  /**
   * 上个月（30天前日期）
   * @param {Date} date 日期参数，默认当前日期
   * @returns {String} 返回日期字符串
   */
  function lastMonth(date = new Date()) {
    return toDateString(addDate(date, -30));
  }

  /**
   * 下个月（30天后日期）
   * @param {Date} date 日期参数，默认当前日期
   * @returns {String} 返回日期字符串
   */
  function nextMonth(date = new Date()) {
    return toDateString(addDate(date, +30));
  }

  /**
   * 上一年（365天前日期）
   * @param {Date} date 日期参数，默认当前日期
   * @returns {String} 返回日期字符串
   */
  function lastYear(date = new Date()) {
    return toDateString(addDate(date, -365));
  }

  /**
   * 下一年（365天后日期）
   * @param {Date} date 日期参数，默认当前日期
   * @returns {String} 返回日期字符串
   */
  function nextYear(date = new Date()) {
    return toDateString(addDate(date, +365));
  }

  /* 判断当前日期 */
  /**
   * 是否为上午
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isAM(date = new Date()) {
    return date.getHours() < 12;
  }

  /**
   * 是否为下午
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isPM(date = new Date()) {
    return date.getHours() >= 12;
  }

  /**
   * 是否为今天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isToday(date = new Date()) {
    // 此刻日期
    let nowDate = new Date();
    // 判断日期
    return ["getFullYear", "getMonth", "getDate"].every((i) => nowDate[i]() === date[i]());
  }

  /**
   * 是否为昨天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isYesterday(date = new Date()) {
    // 计算时间差
    let startTime = date.getTime();
    let nowTime = Date.now();
    let diffTime = nowTime - startTime;
    let diffDay = parseInt(diffTime / (1000 * 60 * 60 * 24));
    return diffDay === 1;
  }

  /**
   * 是否为前天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isBeforeYesterday(date = new Date()) {
    // 计算时间差
    let startTime = date.getTime();
    let nowTime = Date.now();
    let diffTime = nowTime - startTime;
    let diffDay = parseInt(diffTime / (1000 * 60 * 60 * 24));
    return diffDay === 2;
  }

  /**
   * 是否为明天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isTomorrow(date = new Date()) {
    // 计算时间差
    let startTime = date.getTime();
    let nowTime = Date.now();
    let diffTime = startTime - nowTime;
    let diffDay = parseInt(diffTime / (1000 * 60 * 60 * 24));
    return diffDay === 1;
  }

  /**
   * 是否为后天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isAfterTomorrow(date = new Date()) {
    // 计算时间差
    let startTime = date.getTime();
    let nowTime = Date.now();
    let time = startTime - nowTime;
    let diffDay = parseInt(time / (1000 * 60 * 60 * 24));
    return diffDay === 2;
  }

  /**
   * 是否为工作日
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isWorkday(date = new Date()) {
    let dayOfWeek = getDayOfWeek(date);
    return dayOfWeek !== 6 && dayOfWeek !== 7;
  }

  /**
   * 是否为周末（周六和周日）
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isWeekend(date = new Date()) {
    let dayOfWeek = getDayOfWeek(date);
    return dayOfWeek === 6 || dayOfWeek === 7;
  }

  /**
   * 是否为本周第一天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isFirstDayOfWeek(date = new Date()) {
    return getDayOfWeek(date) === 1;
  }

  /**
   * 是否为本周最后一天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isLastDayOfWeek(date = new Date()) {
    return getDayOfWeek(date) === 7;
  }

  /**
   * 是否为本月第一天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isFirstDayOfMonth(date = new Date()) {
    return getDayOfMonth(date) === 1;
  }

  /**
   * 是否为本月最后一天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isLastDayOfMonth(date = new Date()) {
    return getDayOfMonth(date) === getDaysOfMonth(date);
  }

  /**
   * 是否为本年第一天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isFirstDayOfYear(date = new Date()) {
    return getDayOfYear(date) === 1;
  }

  /**
   * 是否为本年最后一天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isLastDayOfYear(date = new Date()) {
    return getDayOfYear(date) === getDaysOfYear(date);
  }

  /* 判断年 */
  /**
   * 是否为闰年
   * @description 闰年366天，平年365天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isLeapYear(date = new Date()) {
    let year = date.getFullYear();
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
  }

  /**
   * 是否为平年
   * @description 闰年366天，平年365天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isCommonYear(date = new Date()) {
    return !isLeapYear(date);
  }

  /* 比较日期区间 */
  /**
   * 是否在日期之前
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isBefore(startDate, endDate = new Date()) {
    // 计算时间差
    let startTime = startDate.getTime();
    let endTime = endDate.getTime();
    let diffTime = startTime - endTime;
    return diffTime < 0;
  }

  /**
   * 是否在日期之后
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期，默认当前日期
   * @returns {Boolean} 返回结果
   */
  function isAfter(startDate, endDate = new Date()) {
    // 计算时间差
    let startTime = startDate.getTime();
    let endTime = endDate.getTime();
    let diffTime = startTime - endTime;
    return diffTime > 0;
  }

  /**
   * 是否在两个日期之间
   * @param {Date} date 要比较的日期
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns {Boolean} 返回结果
   */
  function isBetween(date, startDate, endDate) {
    let time = date.getTime();
    let startTime = startDate.getTime();
    let endTime = endDate.getTime();
    return time > startTime && time < endTime;
  }

  /* 日期是否相同 */
  /**
   * 两个日期是否为同一天
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns {Boolean} 返回结果
   */
  function isSame(startDate, endDate) {
    return ["getFullYear", "getMonth", "getDate"].every((i) => startDate[i]() === endDate[i]());
  }

  /**
   * 两个日期是否为同一周
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns {Boolean} 返回结果
   */
  function isSameWeek(startDate, endDate) {
    let diffDate1 = startDate.getTime() / (24 * 60 * 60 * 1000);
    let diffDate2 = endDate.getTime() / (24 * 60 * 60 * 1000);
    return parseInt((diffDate1 + 4) / 7) === parseInt((diffDate2 + 4) / 7);
  }

  /**
   * 两个日期是否为同一个月
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns {Boolean} 返回结果
   */
  function isSameMonth(startDate, endDate) {
    return ["getFullYear", "getMonth"].every((i) => startDate[i]() === endDate[i]());
  }

  /**
   * 两个日期是否为同一年
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns {Boolean} 返回结果
   */
  function isSameYear(startDate, endDate) {
    return ["getFullYear"].every((i) => startDate[i]() === endDate[i]());
  }

  /* 比较两个日期相同 或 之前/之后 */
  /**
   * 两个日期是否相同或之前
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns {Boolean} 返回结果
   */
  function isSameOrBefore(startDate, endDate) {
    return isSame(startDate, endDate) || isBefore(startDate, endDate);
  }

  /**
   * 两个日期是否相同或之后
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns {Boolean} 返回结果
   */
  function isSameOrAfter(startDate, endDate) {
    return isSame(startDate, endDate) || isAfter(startDate, endDate);
  }

  /* 获取 日期/时间戳/周/季度 */
  /**
   * 获得此刻的日期
   * @returns {Date} 返回日期
   */
  function getNow() {
    return new Date();
  }

  /**
   * 获得当前日期字符串
   * @param {Date} date 日期参数，默认当前日期
   * @param {String} format 日期字符串格式
   * @returns {String} 返回日期字符串
   */
  function getDate(date = new Date(), format = "yyyy-MM-dd") {
    return toDateString(date, format);
  }

  /**
   * 获得当前日期时间字符串
   * @param {Date} date 日期参数，默认当前日期
   * @param {String} format 日期时间字符串格式
   * @returns {String} 返回日期时间字符串
   */
  function getDateTime(date = new Date(), format = "yyyy-MM-dd HH:mm:ss") {
    return toDateString(date, format);
  }

  /**
   * 获取当前时间戳
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Number} 返回时间戳
   */
  function getTimestamp(date = new Date()) {
    return date.getTime();
  }

  /**
   * 获取当前Unix时间戳
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Number} 返回Unix时间戳
   */
  function getUnixTimestamp(date = new Date()) {
    return Math.round(date / 1000);
  }

  /**
   * 获得当前日期的对象形式
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Object} 返回日期的对象形式
   */
  function getDateObject(date = new Date()) {
    return {
      year: date.getFullYear(), // 年
      month: date.getMonth() + 1, // 月
      date: date.getDate(), // 日
      hours: date.getHours(), // 时
      minutes: date.getMinutes(), // 分
      seconds: date.getSeconds(), // 秒
      milliseconds: date.getMilliseconds(), // 毫秒
    };
  }

  /**
   * 获得当前日期的数组形式
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Object} 返回日期的数组形式
   */
  function getDateArray(date = new Date()) {
    return Object.entries(getDateObject(date)).map(([key, value]) => value);
  }

  /**
   * 获得当前日期是周几
   * @param {Date} date 日期参数，默认当前日期
   * @param {String} format 周格式化结果：E：如“日”，EE：如“周日”, EEE：如“星期日”；默认为E，为空则返回数字
   * @param {String} lang 语言zh和en，默认zh
   * @returns {Number,String} 返回周几，会根据语言返回
   */
  function getWeek(date = new Date(), format = "E", lang = "zh") {
    /* 中文周 */
    // 中文周-最短缩写
    let weekZhMiniShort = ["日", "一", "二", "三", "四", "五", "六"];
    // 中文周-缩写
    let weekZhShort = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    // 中文周-全写
    let weekZhFull = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

    /* 中文周 */
    // 英文周-最短缩写
    let weekEnMiniShort = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    // 英文周-缩写
    let weekEnShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // 英文周-全写
    let weekEnFull = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // 根据格式化和语言返回对应的周
    if (format === "E") {
      if (lang === "zh") {
        return weekZhMiniShort[date.getDay()];
      } else {
        return weekEnMiniShort[date.getDay()];
      }
    } else if (format === "EE") {
      if (lang === "zh") {
        return weekZhShort[date.getDay()];
      } else {
        return weekEnShort[date.getDay()];
      }
    } else if (format === "EEE") {
      if (lang === "zh") {
        return weekZhFull[date.getDay()];
      } else {
        return weekEnFull[date.getDay()];
      }
    } else {
      return getDayOfWeek(date);
    }
  }

  /**
   * 获得当前日期是第几季度
   * @param {Date} date 日期参数，默认当前日期
   * @param {String} format 季度格式化结果：Q：如“一”, QQ：如“一季度”；QQQ：如“第一季度”；默认为Q，为空则返回数字
   * @param {String} lang 语言zh和en，默认zh
   * @returns {String} 返回第几季度，会根据语言返回
   */
  function getQuarter(date = new Date(), format = "Q", lang = "zh") {
    /* 中文季度 */
    let quarterZhMiniShort = ["一", "二", "三", "四"];
    let quarterZhShort = ["一季度", "二季度", "三季度", "四季度"];
    let quarterZhFull = ["第一季度", "第二季度", "第三季度", "第四季度"];

    /* 英文季度 */
    let quarterEnMiniShort = ["Q1", "Q2", "Q3", "Q4"];
    let quarterEnShort = ["Q1th", "Q2nd", "Q3rd", "Q4th"];
    let quarterEnFull = ["quarter 1st", "quarter 2nd", "quarter 3rd", "quarter 4th"];

    // 根据格式化和语言返回对应的周
    if (format === "Q") {
      if (lang === "zh") {
        return quarterZhMiniShort[Math.floor((date.getMonth() + 3) / 3) - 1];
      } else {
        return quarterEnMiniShort[Math.floor((date.getMonth() + 3) / 3) - 1];
      }
    } else if (format === "QQ") {
      if (lang === "zh") {
        return quarterZhShort[Math.floor((date.getMonth() + 3) / 3) - 1];
      } else {
        return quarterEnShort[Math.floor((date.getMonth() + 3) / 3) - 1];
      }
    } else if (format === "QQQ") {
      if (lang === "zh") {
        return quarterZhFull[Math.floor((date.getMonth() + 3) / 3) - 1];
      } else {
        return quarterEnFull[Math.floor((date.getMonth() + 3) / 3) - 1];
      }
    } else {
      return Math.floor((date.getMonth() + 3) / 3);
    }
  }

  /* 当前日期是所在 周/月/年 的第几天 */
  /**
   * 获得当前日期是所在周的第几天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Number|String} 返回天数
   */
  function getDayOfWeek(date = new Date()) {
    return [7, 1, 2, 3, 4, 5, 6][date.getDay()];
  }

  /**
   * 获得当前日期是所在月的第几天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Number} 返回天数
   */
  function getDayOfMonth(date = new Date()) {
    return date.getDate();
  }

  /**
   * 获得当前日期是所在年的第几天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Number} 返回天数
   */
  function getDayOfYear(date = new Date()) {
    return Math.ceil((date - new Date(date.getFullYear().toString())) / (24 * 60 * 60 * 1000)) + 1;
  }

  /* 当前日期的周是所在 月/年 的第几周 */
  /**
   * 获得当前日期是所在月的第几周
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Number} 返回周数
   */
  function getWeekOfMonth(date = new Date()) {
    return Math.ceil((date.getDate() + 6 - getDayOfWeek(date)) / 7);
  }

  /**
   * 获得当前日期是所在年的第几周
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Number} 返回周数
   */
  function getWeekOfYear(date = new Date()) {
    let startDate = new Date(date.getFullYear(), 0, 1);
    let startDay = getDayOfWeek(startDate);
    let diff = Math.round((date - startDate) / (24 * 60 * 60 * 1000));
    return Math.ceil((diff + startDay) / 7);
  }

  /* 当前日期所在 周/月/年 共几天 */
  /**
   * 获得当前日期所在的周共几天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Number} 返回天数
   */
  function getDaysOfWeek(date = new Date()) {
    return 7;
  }

  /**
   * 获得当前日期所在的月共几天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Number} 返回天数
   */
  function getDaysOfMonth(date = new Date()) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  /**
   * 获得当前日期所在的年共几天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Number} 返回天数
   */
  function getDaysOfYear(date = new Date()) {
    return isLeapYear(date) ? 366 : 365;
  }

  /* 当前周所在 月/年 共几周  */
  /**
   * 获得当前日期是所在月的第几周
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Number} 返回周数
   */
  function getWeeksOfMonth(date = new Date()) {
    let startDate = new Date(date.getFullYear(), 0, 1);
    let startDay = getDayOfWeek(startDate);
    let fullDays = isLeapYear(date) ? 366 : 365;
    if (startDay === 1) {
      return Math.ceil(fullDays / 7);
    } else {
      return Math.ceil((fullDays - 7 + startDay) / 7);
    }
  }

  /**
   * 获得当前日期是所在年的第几周
   * @param {Date} date 日期参数，默认当前日期
   * @returns {Number} 返回周数
   */
  function getWeeksOfYear(date = new Date()) {
    let startDate = new Date(date.getFullYear(), 0, 1);
    let startDay = getDayOfWeek(startDate);
    let fullDays = isLeapYear(date) ? 366 : 365;
    if (startDay === 1) {
      return Math.ceil(fullDays / 7);
    } else {
      return Math.ceil((fullDays - 7 + startDay) / 7);
    }
  }

  /* 当前日期所在 周/月/年 的 第一天/最后一天/所有天数数组 */
  /**
   * 获得当前日期所在周的第一天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {String} 返回日期字符串
   */
  function getFirstDateOfWeek(date = new Date()) {
    let weekDay = getDayOfWeek(date);
    date.setDate(date.getDate() - weekDay + 1);
    return toDateString(date);
  }

  /**
   * 获得当前日期所在周的最后一天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {String} 返回日期字符串
   */
  function getLastDateOfWeek(date = new Date()) {
    let weekDay = getDayOfWeek(date);
    date.setDate(date.getDate() + (7 - weekDay));
    return toDateString(date);
  }

  /**
   * 获取当前日期所在周的所有日期
   */
  function getFullDateOfWeek(date = new Date()) {
    let array = [];
    // 获得当前日期是本周几
    let dayOfWeek = date.getDay();
    // 根据当前日期获取本周一
    let firstDateOfWeek = new Date();
    firstDateOfWeek.setDate(date.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

    // 遍历本周日期
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(firstDateOfWeek);
      currentDate.setDate(currentDate.getDate() + i);
      array.push(toDateString(currentDate));
    }

    return array;
  }

  /**
   * 获得当前日期所在月的第一天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {String} 返回日期字符串
   */
  function getFirstDateOfMonth(date = new Date()) {
    date.setDate(1);
    return toDateString(date);
  }

  /**
   * 获得当前日期所在月的最后一天
   * @param {Date} date 日期参数，默认当前日期
   * @returns {String} 返回日期字符串
   */
  function getLastDateOfMonth(date = new Date()) {
    return toDateString(new Date(date.getFullYear(), date.getMonth() + 1, 0));
  }

  /**
   * 获取当前日期所在月的所有日期
   */
  function getFullDateOfMonth(date = new Date()) {
    let array = [];
    // 获得本月第一天
    let firstDateOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    // 获得本月最后一天
    let lastDateOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    // 遍历本月日期
    for (let i = 0; i < lastDateOfMonth.getDate(); i++) {
      let currentDate = new Date(firstDateOfMonth);
      currentDate.setDate(firstDateOfMonth.getDate() + i);
      array.push(currentDate);
    }
    return array;
  }

  /**
   * 获取当前日期所在年的第一天
   */
  function getFirstDateOfYear(date = new Date()) {
    return new Date(date.getFullYear(), 0, 1);
  }

  /**
   * 获取当前日期所在年的最后一天
   */
  function getLastDateOfYear(date = new Date()) {
    return new Date(date.getFullYear(), 11, 31);
  }

  /**
   * 获取当前日期所在年的所有日期
   */
  function getFullDateOfYear(date = new Date()) {
    let array = [];
    // 获得本年第一天
    let firstDateOfYear = new Date(date.getFullYear(), 0, 1);
    // 获得本年一共多少天
    let daysOfYear = getDaysOfYear();
    // 遍历本年日期
    for (let i = 0; i < daysOfYear; i++) {
      let currentDate = new Date(firstDateOfYear);
      currentDate.setDate(firstDateOfYear.getDate() + i);
      array.push(currentDate.toLocaleDateString());
    }
    return array;
  }

  /* 计算两个日期相差 */
  /**
   * 计算两个日期相差的天数，不满一天为0
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns {Number} 返回两个日期相差的天数，结果为正数或者负数
   */
  function getDiffDay(startDate, endDate) {
    if (isEmpty(startDate) || isEmpty(endDate)) return 0;
    let diff = (endDate - startDate) / (24 * 60 * 60 * 1000);

    // 返回
    return diff >= 0 ? Math.abs(diff) : diff;
  }

  /**
   * 计算两个日期相差的周数，不满一周为0
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns {Number} 返回两个日期相差的周数，结果为正数或者负数
   */
  function getDiffWeek(startDate, endDate) {
    if (isEmpty(startDate) || isEmpty(endDate)) return 0;
    let diff = (endDate - startDate) / (7 * 24 * 60 * 60 * 1000);

    // 返回
    return diff >= 0 ? Math.abs(diff) : diff;
  }

  /**
   * 计算两个日期相差的月数，不满一月为0
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns {Number} 返回两个日期相差的月数，结果为正数或者负数
   */
  function getDiffMonth(startDate, endDate) {
    if (isEmpty(startDate) || isEmpty(endDate)) return 0;
    let diff = (startDate - endDate) / (30 * 24 * 60 * 60 * 1000);

    // 返回
    return diff >= 0 ? Math.abs(diff) : diff;
  }

  /**
   * 计算两个日期相差的年数，不满一年为0
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns {Number} 返回两个日期相差的年数，结果为正数或者负数
   */
  function getDiffYear(startDate, endDate) {
    if (isEmpty(startDate) || isEmpty(endDate)) return 0;
    let diff = (endDate - startDate) / (12 * 30 * 24 * 60 * 60 * 1000);

    // 返回
    return diff >= 0 ? Math.abs(diff) : diff;
  }

  /* 获得两个日期之间所有日期 */
  /**
   * 获得两个日期之间的年月日数组
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns {Array} 返回年月日数组
   */
  function getBetweenDates(startDate, endDate) {
    if (isEmpty(startDate) || isEmpty(endDate)) return [];

    // 计算
    let array = [];
    while (endDate - startDate >= 0) {
      let year = startDate.getFullYear(),
        month = _digit(startDate.getMonth() + 1),
        day = _digit(startDate.getDate());

      // 加入数组
      array.push(year + "-" + month + "-" + day);
      // 更新日期
      startDate.setDate(startDate.getDate() + 1);
    }
    return array;
  }

  /**
   * 获得两个日期之间的年月数组
   * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns {Array} 返回年月数组
   */
  function getBetweenMonths(startDate, endDate) {
    if (isEmpty(startDate) || isEmpty(endDate)) return [];

    // 计算
    let array = [];
    // 获取时间对象
    let min = new Date();
    let max = new Date();
    // 设置起始时间
    min.setFullYear(startDate.getFullYear(), startDate.getMonth() + 1);
    // 设置结束时间
    max.setFullYear(endDate.getFullYear(), endDate.getMonth() + 1);

    // 复制一份起始时间对象
    let curr = min;
    // 定义字符串
    let str = "";
    // 起始时间在结束时间之前
    while (curr <= max) {
      // 获取此时间的月份
      let month = curr.getMonth();
      // 如果月份为0，也就是代表12月份
      if (month === 0) {
        str = curr.getFullYear() - 1 + "-" + 12;
      } else {
        // 正常月份
        str = curr.getFullYear() + "-" + _digit(month);
      }
      // 将此年月加入数组
      array.push(str);
      // 更新此时间月份
      curr.setMonth(month + 1);
    }
    return array;
  }

  /**
   * 获得两个日期之间的年数组
   * @param {Date} startDate 开始日期
   * @param {Date} endDate 结束日期
   * @returns {Array} 返回年数组
   */
  function getBetweenYears(startDate, endDate) {
    if (isEmpty(startDate) || isEmpty(endDate)) return [];

    // 计算
    let array = [];
    while (endDate - startDate >= 0) {
      let year = startDate.getFullYear();

      // 加入数组
      array.push(year);
      // 更新日期
      startDate.setFullYear(startDate.getFullYear() + 1);
    }
    return array;
  }

  /* 过去时间和剩余时间的显示 */
  /**
   * 获得过去时间的字符串显示
   * @description 例如：刚刚，1分钟前，1小时前等
   * @param {Date} date 日期参数
   * @param {String} lang 语言zh和en，默认zh
   * @returns {String} 返回字符串
   */
  function getPastTime(date, lang = "zh") {
    if (isNull(date)) return "--";

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
      return year + PASS_TIME[lang].YEAR;
    } else if (month) {
      return month + PASS_TIME[lang].MONTH;
    } else if (day) {
      if (day === 1) {
        return PASS_TIME[lang].YESTERDAY;
      } else if (day === 2) {
        return PASS_TIME[lang].BEFORE_YESTERDAY;
      } else {
        return day + PASS_TIME[lang].DAY;
      }
    } else if (hour) {
      if (hour > 12) {
        return PASS_TIME[lang].TODAY;
      } else {
        return hour + PASS_TIME[lang].HOUR;
      }
    } else if (min) {
      return min + PASS_TIME[lang].MINUTE;
    } else {
      return PASS_TIME[lang].JUST;
    }
  }

  /**
   * 获得剩余时间的字符串显示
   * @description 例如：1天10小时20分钟30秒
   * @param {Date} date 日期参数
   * @param {String} lang 语言zh和en，默认zh
   * @returns {String} 返回字符串
   */
  function getOverTime(date, lang = "zh") {
    if (isNull(date)) return "--";

    // 计算
    let startDate = new Date(); // 开始时间
    let t = date.getTime() - startDate.getTime(); // 时间差
    let d = 0,
      h = 0,
      m = 0,
      s = 0;
    if (t >= 0) {
      d = Math.floor(t / 1000 / 3600 / 24);
      h = Math.floor((t / 1000 / 60 / 60) % 24);
      m = Math.floor((t / 1000 / 60) % 60);
      s = Math.floor((t / 1000) % 60);
    }
    return `${d}${OVER_TIME[lang].DAY} ${h}${OVER_TIME[lang].HOUR} ${m}${OVER_TIME[lang].MINUTE} ${s}${OVER_TIME[lang].SECOND}`;
  }

  /* 通过日期获得 星座/生肖 */
  /**
   * 通过日期获得星座
   * @param {Date} date 日期参数
   * @param {String} lang 语言zh和en，默认zh
   * @returns {String} 返回星座
   */
  function getZodiac(date, lang = "zh") {
    console.log(3333, date, lang);
    if (isNull(date)) return;

    // 计算
    let days = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22];
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return day < days[month - 1] ? ZODIAC[lang][month - 1] : ZODIAC[lang][month];
  }
  /**
   * 通过日期获得生肖
   * @param {Date} date 日期参数
   * @param {String} lang 语言zh和en，默认zh
   * @returns {String} 返回生肖
   */
  function getChineseZodiac(date, lang = "zh") {
    if (isNull(date)) return;

    // 计算
    let year = date.getFullYear();
    if (year < 1900) {
      return "未知";
    }
    return CHINESE_ZODIAC[lang][(year - 1900) % CHINESE_ZODIAC[lang].length];
  }

  /* 计算日期加减 年，月，日，时，分，秒，周，季度 */
  /**
   * 日期加减年
   * @param {Date} date 日期参数，默认当前日期
   * @param {Number} num 加减数量，用正数和负数表示；默认+1
   * @returns {Date} 返回加减后的日期
   */
  function addYear(date = new Date(), num = +1) {
    date.setFullYear(date.getFullYear() + num);
    return date;
  }

  /**
   * 日期加减月
   * @param {Date} date 日期参数，默认当前日期
   * @param {Number} num 加减数量，用正数和负数表示；默认+1
   * @returns {Date} 返回加减后的日期
   */
  function addMonth(date = new Date(), num = +1) {
    date.setMonth(date.getMonth() + num);
    return date;
  }

  /**
   * 日期加减天
   * @param {Date} date 日期参数，默认当前日期
   * @param {Number} num 加减数量，用正数和负数表示；默认+1
   * @returns {Date} 返回加减后的日期
   */
  function addDate(date = new Date(), num = +1) {
    date.setDate(date.getDate() + num);
    return date;
  }

  /**
   * 日期加减小时
   * @param {Date} date 日期参数，默认当前日期
   * @param {Number} num 加减数量，用正数和负数表示；默认+1
   * @returns {Date} 返回加减后的日期
   */
  function addHours(date = new Date(), num = +1) {
    date.setHours(date.getHours() + num);
    return date;
  }

  /**
   * 日期加减分钟
   * @param {Date} date 日期参数，默认当前日期
   * @param {Number} num 加减数量，用正数和负数表示；默认+1
   * @returns {Date} 返回加减后的日期
   */
  function addMinutes(date = new Date(), num = +1) {
    date.setMinutes(date.getMinutes() + num);
    return date;
  }

  /**
   * 日期加减秒
   * @param {Date} date 日期参数，默认当前日期
   * @param {Number} num 加减数量，用正数和负数表示；默认+1
   * @returns {Date} 返回加减后的日期
   */
  function addSeconds(date = new Date(), num = +1) {
    date.setSeconds(date.getSeconds() + num);
    return date;
  }

  /**
   * 日期加减毫秒
   * @param {Date} date 日期参数，默认当前日期
   * @param {Number} num 加减数量，用正数和负数表示；默认+100
   * @returns {Date} 返回加减后的日期
   */
  function addMillisecond(date = new Date(), num = +100) {
    date.setMilliseconds(date.getMilliseconds() + num);
    return date;
  }

  /**
   * 日期加减周
   * @param {Date} date 日期参数，默认当前日期
   * @param {Number} num 加减数量，用正数和负数表示；默认+1
   * @returns {Date} 返回加减后的日期
   */
  function addWeek(date = new Date(), num = +1) {
    date.setDate(date.getDate() + num * 7);
    return date;
  }

  /**
   * 日期加减季度
   * @param {Date} date 日期参数，默认当前日期
   * @param {Number} num 加减数量，用正数和负数表示；默认+1
   * @returns {Date} 返回加减后的日期
   */
  function addQuarter(date = new Date(), num = +1) {
    date.setMonth(date.getMonth() + num * 4);
    return date;
  }

  /* 格式化和解析日期 */
  /**
   * 日期对象转为日期字符串
   * @description 支持日期字符串，日期对象，时间戳，unix时间戳
   * @param {String|Date|Number} date 日期参数
   * @param {String} format 转化格式
   * @param {String} lang 语言zh和en，默认zh
   * @returns {String} 返回日期字符串
   */
  function toDateString(date, format = "yyyy-MM-dd", lang = "zh") {
    if (isNull(date)) return;

    // 是日期字符串
    if (isString(date)) {
      date = toDate(date);
    }
    // 是日期对象
    else if (isDate(date)) ;
    // 是时间戳
    else if (isInteger(date) && String(date).length === 13) {
      date = new Date(date);
    }
    // 是unix时间戳
    else if (isInteger(date) && String(date).length === 10) {
      date = new Date(date * 1000);
    }
    // 不支持的日期格式
    else {
      console.error("Not supported date format!");
      return date;
    }

    // 配置规则
    let rules = {
      "M+": date.getMonth() + 1, // 月份
      "d+": date.getDate(), // 日
      "h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 12小时制
      "H+": date.getHours(), // 24小时制
      "m+": date.getMinutes(), // 分钟
      "s+": date.getSeconds(), // 秒
      "S+": date.getMilliseconds(), // 毫秒
      "a+": date.getHours() < 12 ? "am" : "pm", // 上午/下午，小写
      "A+": date.getHours() < 12 ? "AM" : "PM", // 上午/下午，大写
      "E+": date.getDay(), // 周
      "Q+": Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds(), // 毫秒
    };

    // 年
    let yearReg = new RegExp(/(y+)/g);
    if (yearReg.test(format)) {
      format = format.replace(yearReg, function (match, $1) {
        return (date.getFullYear() + "").substring(4 - $1.length);
      });
    }
    // 上午/下午
    let amPmReg = new RegExp(/((b+)|(A+))/g);
    if (amPmReg.test(format)) {
      format = format.replace(amPmReg, function (match, $1) {
        // AA或者aa为中文
        if ($1.length > 1) {
          return date.getHours() < 12 ? AM_PM[lang].AM : AM_PM[lang].PM;
        }
        // 其他为英文
        else {
          return $1 === $1.toLowerCase()
            ? date.getHours() < 12
              ? AM_PM["en"].AM.toLowerCase()
              : AM_PM["en"].PM.toLowerCase()
            : date.getHours() < 12
              ? AM_PM["en"].AM
              : AM_PM["en"].PM;
        }
      });
    }
    // 周
    let weekReg = new RegExp(/(E+)/g);
    if (weekReg.test(format)) {
      format = format.replace(weekReg, function (match, $1) {
        return $1.length === 1
          ? WEEK[lang].MINI[date.getDay()]
          : $1.length === 2
            ? WEEK[lang].SHORT[date.getDay()]
            : WEEK[lang].FULL[date.getDay()];
      });
    }
    // 季度
    let quarterReg = new RegExp(/(Q+)/g);
    if (quarterReg.test(format)) {
      format = format.replace(quarterReg, function (match, $1) {
        return $1.length === 1
          ? QUARTER[lang].MINI[Math.floor((date.getMonth() + 3) / 3) - 1]
          : $1.length === 2
            ? QUARTER[lang].SHORT[Math.floor((date.getMonth() + 3) / 3) - 1]
            : QUARTER[lang].FULL[Math.floor((date.getMonth() + 3) / 3) - 1];
      });
    }
    // 经过上面的过滤，剩余的日期参数处理
    for (let k in rules) {
      let dateReg = new RegExp("(" + k + ")");
      if (dateReg.test(format)) {
        format = format.replace(dateReg, function (match, $1) {
          return $1.length === 1
            ? rules[k]
            : $1.length === 2
              ? ("00" + rules[k]).substring(("" + rules[k]).length)
              : ("000" + rules[k]).substring(("" + rules[k]).length);
        });
      }
    }
    return format;
  }

  /**
   * 日期字符串转为日期对象
   * @description 支持日期字符串，时间戳，Unix时间戳
   * @param {String|Number} value 日期参数
   * @returns {Date} 返回日期对象
   */
  function toDate(value) {
    if (isNull(value)) return;

    // 是日期字符串
    if (isString(value)) {
      return new Date(value.replace(/-/g, "/"));
    }
    // 是时间戳
    else if (isInteger(value) && String(value).length === 13) {
      return new Date(value);
    }
    // 是unix时间戳
    else if (isInteger(value) && String(value).length === 10) {
      return new Date(value * 1000);
    }
    // 不支持的日期格式
    else {
      console.error("Not supported date format!");
      return value;
    }
  }

  /* 内部使用的函数 */
  /**
   * 单个数字前自动补齐零为两位
   * @param {String|Number} value 可以是数字和字符串
   * @returns {String} 返回处理后的字符串
   */
  function _digit(value) {
    value = value.toString();
    return value[1] ? value : "0" + value;
  }

  var dateUtil = /*#__PURE__*/Object.freeze({
    __proto__: null,
    today: today,
    yesterday: yesterday,
    tomorrow: tomorrow,
    lastWeek: lastWeek,
    nextWeek: nextWeek,
    lastMonth: lastMonth,
    nextMonth: nextMonth,
    lastYear: lastYear,
    nextYear: nextYear,
    isAM: isAM,
    isPM: isPM,
    isToday: isToday,
    isYesterday: isYesterday,
    isBeforeYesterday: isBeforeYesterday,
    isTomorrow: isTomorrow,
    isAfterTomorrow: isAfterTomorrow,
    isWorkday: isWorkday,
    isWeekend: isWeekend,
    isFirstDayOfWeek: isFirstDayOfWeek,
    isLastDayOfWeek: isLastDayOfWeek,
    isFirstDayOfMonth: isFirstDayOfMonth,
    isLastDayOfMonth: isLastDayOfMonth,
    isFirstDayOfYear: isFirstDayOfYear,
    isLastDayOfYear: isLastDayOfYear,
    isLeapYear: isLeapYear,
    isCommonYear: isCommonYear,
    isBefore: isBefore,
    isAfter: isAfter,
    isBetween: isBetween,
    isSame: isSame,
    isSameWeek: isSameWeek,
    isSameMonth: isSameMonth,
    isSameYear: isSameYear,
    isSameOrBefore: isSameOrBefore,
    isSameOrAfter: isSameOrAfter,
    getNow: getNow,
    getDate: getDate,
    getDateTime: getDateTime,
    getTimestamp: getTimestamp,
    getUnixTimestamp: getUnixTimestamp,
    getDateObject: getDateObject,
    getDateArray: getDateArray,
    getWeek: getWeek,
    getQuarter: getQuarter,
    getDayOfWeek: getDayOfWeek,
    getDayOfMonth: getDayOfMonth,
    getDayOfYear: getDayOfYear,
    getWeekOfMonth: getWeekOfMonth,
    getWeekOfYear: getWeekOfYear,
    getDaysOfWeek: getDaysOfWeek,
    getDaysOfMonth: getDaysOfMonth,
    getDaysOfYear: getDaysOfYear,
    getWeeksOfMonth: getWeeksOfMonth,
    getWeeksOfYear: getWeeksOfYear,
    getFirstDateOfWeek: getFirstDateOfWeek,
    getLastDateOfWeek: getLastDateOfWeek,
    getFullDateOfWeek: getFullDateOfWeek,
    getFirstDateOfMonth: getFirstDateOfMonth,
    getLastDateOfMonth: getLastDateOfMonth,
    getFullDateOfMonth: getFullDateOfMonth,
    getFirstDateOfYear: getFirstDateOfYear,
    getLastDateOfYear: getLastDateOfYear,
    getFullDateOfYear: getFullDateOfYear,
    getDiffDay: getDiffDay,
    getDiffWeek: getDiffWeek,
    getDiffMonth: getDiffMonth,
    getDiffYear: getDiffYear,
    getBetweenDates: getBetweenDates,
    getBetweenMonths: getBetweenMonths,
    getBetweenYears: getBetweenYears,
    getPastTime: getPastTime,
    getOverTime: getOverTime,
    getZodiac: getZodiac,
    getChineseZodiac: getChineseZodiac,
    addYear: addYear,
    addMonth: addMonth,
    addDate: addDate,
    addHours: addHours,
    addMinutes: addMinutes,
    addSeconds: addSeconds,
    addMillisecond: addMillisecond,
    addWeek: addWeek,
    addQuarter: addQuarter,
    toDateString: toDateString,
    toDate: toDate
  });

  // 测试加载成功方法
  const loadedTest = function () {
    console.log("lime-date loaded successfully!");
  };

  // 导出
  var index = {
    loadedTest,
    ...dateUtil,
  };

  return index;

}));
