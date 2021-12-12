// 当前日期是所在 周，月，年 的第几天
/**
 * 获得当前日期是所在周的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回周几，1-7
 */
function getDayOfWeek(date = new Date()) {
  let week = [7, 1, 2, 3, 4, 5, 6];
  return week[date.getDay()];
}

/**
 * 获得当前日期是所在月的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回天数
 */
function getDayOfMonth(date = new Date()) {
  return date.getMonth() + 1;
}

/**
 * 获得当前日期是所在年的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回天数-7
 */
function getDayOfYear(date = new Date()) {
  return Math.ceil((date - new Date(date.getFullYear().toString())) / (24 * 60 * 60 * 1000)) + 1;
}

// 获得当前日期所在 周，月 的第一天和最后一天
/**
 * 获得当前日期所在周的第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
function getFirstDayOfWeek(date = new Date()) {
  let weekDay = getDayOfWeek(date);
  date.setDate(date.getDate() - weekDay + 1);
  return date.toLocaleDateString();
}

/**
 * 获得当前日期所在周的最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
function getLastDayOfWeek(date = new Date()) {
  let weekDay = getDayOfWeek(date);
  date.setDate(date.getDate() + (7 - weekDay));
  return date.toLocaleDateString();
}

/**
 * 获得当前日期所在月的第一天
 * @param {Date} date 日期参数，默认当前日期
 *@returns {String} 返回日期字符串
 */
function getFirstDayOfMonth(date = new Date()) {
  date.setDate(1);
  return date.toLocaleDateString();
}
/**
 * 获得当前日期所在月的第一天
 * @param {Date} date 日期参数，默认当前日期
 *@returns {String} 返回日期字符串
 */
function getLastDayOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).toLocaleDateString();
}

// 当前日期是所在 月份、年份  的第几周
/**
 * 获得当前日期是所在月份的第几周
 * @param {Date} date 日期参数，默认当前日期
 *@returns {String} 返回周数
 */
function getWeekOfMonth(date = new Date()) {
  return Math.ceil((date.getDate() + 6 - getDayOfWeek(date)) / 7);
}

/**
 * 获得当前日期是所在月份的第几周
 * @param {Date} date 日期参数，默认当前日期
 *@returns {String} 返回周数
 */
function getWeekOfYear(date = new Date()) {
  let startDate = new Date(date.getFullYear(), 0, 1);
  let startDay = getDayOfWeek(startDate);
  let diff = Math.round((date - startDate) / (24 * 60 * 60 * 1000));
  return Math.ceil((diff + startDay) / 7);
}
