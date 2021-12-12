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
 * @returns {String} 返回日期字符串
 */
function getFirstDayOfMonth(date = new Date()) {
  date.setDate(1);
  return date.toLocaleDateString();
}
/**
 * 获得当前日期所在月的第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
function getLastDayOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).toLocaleDateString();
}

// 当前日期是所在 月份、年份  的第几周
/**
 * 获得当前日期是所在月份的第几周
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回周数
 */
function getWeekOfMonth(date = new Date()) {
  return Math.ceil((date.getDate() + 6 - getDayOfWeek(date)) / 7);
}

/**
 * 获得当前日期是所在月份的第几周
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回周数
 */
function getWeekOfYear(date = new Date()) {
  let startDate = new Date(date.getFullYear(), 0, 1);
  let startDay = getDayOfWeek(startDate);
  let diff = Math.round((date - startDate) / (24 * 60 * 60 * 1000));
  return Math.ceil((diff + startDay) / 7);
}

// 是否 上午，下午，工作日，周末（周六或周日）
/**
 * 当前时刻是否是上午
 * @returns {Boolean} 返回true和false
 */
function isAM() {
  return new Date().getHours() < 12;
}

/**
 * 当前时刻是否是下午
 * @returns {Boolean} 返回true和false
 */
function isPM() {
  return new Date().getHours() >= 12;
}

/**
 * 今天是否是工作日
 * @returns {Boolean} 返回true和false
 */
function isWorkday() {
  let dayOfWeek = getDayOfWeek();
  return dayOfWeek != 6 && dayOfWeek != 7;
}

/**
 * 今天是否是周末（周六或周日）
 * @returns {Boolean} 返回true和false
 */
function isWeekend() {
  let dayOfWeek = getDayOfWeek();
  return dayOfWeek == 6 || dayOfWeek == 7;
}

// 比较是同一 天，月，年
/**
 * 比较两个日期是否是同一天
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns {Boolean} 返回true和false
 */
function isSameDay(date1, date2) {
  return date1 == date2;
}

/**
 * 比较两个日期是否是同一天
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns {Boolean} 返回true和false
 */
function isSameMonth(date1, date2) {
  return date1.getMonth() == date2.getMonth();
}

/**
 * 比较两个日期是否是同一天
 * @param {Date} date1 第一个日期
 * @param {Date} date2 第二个日期
 * @returns {Boolean} 返回true和false
 */
function isSameYear(date1, date2) {
  return date1.getFullYear() == date2.getFullYear();
}

// 简化名称的时间
/**
 * 昨天
 * @returns {Strign} 返回日期字符串
 */
function yesterday() {}

/**
 * 今天
 *@returns {Strign} 返回日期字符串
 */
function today() {}

/**
 * 上周（7 天前）
 * @returns {Strign} 返回日期字符串
 */
function prevWeek() {}

/**
 * 下周（7 天后）
 * @returns {Strign} 返回日期字符串
 */
function nextWeek() {}

/**
 * 上个月（30 天前）
 * @returns {Strign} 返回日期字符串
 */
function prevMonth() {}

/**
 * 下个月（30 天后）
 * @returns {Strign} 返回日期字符串
 */
function nextMonth() {}

/**
 * 去年（365 天前）
 * @returns {Strign} 返回日期字符串
 */
function prevYear() {}

/**
 * 明年（365 天后）
 *@returns {Strign} 返回日期字符串
 */
function nextYear() {}

// 生肖，星座
/**
 * 通过生日计算星座
 * @param {Date|String} date 日期或日期字符串
 * @returns {Strign} 返回星座
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
 * @returns {Strign} 返回生肖
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
