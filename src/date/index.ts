/**
 * @module 日期
 */
import { isNull, isInteger, isDate, isString } from "@/validate";
import { parseInt } from "@/number";
import { DATE } from "@/constants";

/* 快捷日期 */
/**
 * 今天
 *@returns {string} 返回日期字符串
 */
export function today(): string {
  return getDate();
}

/**
 * 昨天
 * @returns {string} 返回日期字符串
 */
export function yesterday(): string {
  return formatDate(addDate(new Date(), -1));
}

/**
 * 明天
 *@returns {string} 返回日期字符串
 */
export function tomorrow(): string {
  return formatDate(addDate(new Date(), +1));
}

/**
 * 上周（7天前日期）
 * @param {Date} date 日期参数，默认当前日期
 * @returns {string} 返回日期字符串
 */
export function lastWeek(date = new Date()): string {
  return formatDate(addDate(date, -7));
}

/**
 * 下周（7天后日期）
 * @param {Date} date 日期参数，默认当前日期
 * @returns {string} 返回日期字符串
 */
export function nextWeek(date = new Date()): string {
  return formatDate(addDate(date, +7));
}

/**
 * 上个月（30天前日期）
 * @param {Date} date 日期参数，默认当前日期
 * @returns {string} 返回日期字符串
 */
export function lastMonth(date = new Date()): string {
  return formatDate(addDate(date, -30));
}

/**
 * 下个月（30天后日期）
 * @param {Date} date 日期参数，默认当前日期
 * @returns {string} 返回日期字符串
 */
export function nextMonth(date = new Date()): string {
  return formatDate(addDate(date, +30));
}

/**
 * 上一年（365天前日期）
 * @param {Date} date 日期参数，默认当前日期
 * @returns {string} 返回日期字符串
 */
export function lastYear(date = new Date()): string {
  return formatDate(addDate(date, -365));
}

/**
 * 下一年（365天后日期）
 * @param {Date} date 日期参数，默认当前日期
 * @returns {string} 返回日期字符串
 */
export function nextYear(date = new Date()): string {
  return formatDate(addDate(date, +365));
}

/* 判断当前日期 */
/**
 * 是否为上午
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isAM(date = new Date()): boolean {
  return date.getHours() < 12;
}

/**
 * 是否为下午
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isPM(date = new Date()): boolean {
  return date.getHours() >= 12;
}

/**
 * 是否为今天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isToday(date = new Date()): boolean {
  // 此刻日期
  const nowDate = new Date();
  // 判断日期
  return (["getFullYear", "getMonth", "getDate"] as Array<"getFullYear" | "getMonth" | "getDate">).every(
    (item) => nowDate[item]() === date[item](),
  );
}

/**
 * 是否为昨天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isYesterday(date = new Date()): boolean {
  // 计算时间差
  const startTime = date.getTime();
  const nowTime = Date.now();
  const diffTime = nowTime - startTime;
  const diffDay = parseInt(diffTime / (1000 * 60 * 60 * 24));
  return diffDay === 1;
}

/**
 * 是否为前天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isBeforeYesterday(date = new Date()): boolean {
  // 计算时间差
  const startTime = date.getTime();
  const nowTime = Date.now();
  const diffTime = nowTime - startTime;
  const diffDay = parseInt(diffTime / (1000 * 60 * 60 * 24));
  return diffDay === 2;
}

/**
 * 是否为明天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isTomorrow(date = new Date()): boolean {
  // 计算时间差
  const startTime = date.getTime();
  const nowTime = Date.now();
  const diffTime = startTime - nowTime;
  const diffDay = parseInt(diffTime / (1000 * 60 * 60 * 24));
  return diffDay === 1;
}

/**
 * 是否为后天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isAfterTomorrow(date = new Date()): boolean {
  // 计算时间差
  const startTime = date.getTime();
  const nowTime = Date.now();
  const time = startTime - nowTime;
  const diffDay = parseInt(time / (1000 * 60 * 60 * 24));
  return diffDay === 2;
}

/**
 * 是否为工作日
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isWorkday(date = new Date()): boolean {
  const dayOfWeek = getDayOfWeek(date);
  return dayOfWeek !== 6 && dayOfWeek !== 7;
}

/**
 * 是否为周末（周六和周日）
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isWeekend(date = new Date()): boolean {
  const dayOfWeek = getDayOfWeek(date);
  return dayOfWeek === 6 || dayOfWeek === 7;
}

/**
 * 是否为本周第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isFirstDayOfWeek(date = new Date()): boolean {
  return getDayOfWeek(date) === 1;
}

/**
 * 是否为本周最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isLastDayOfWeek(date = new Date()): boolean {
  return getDayOfWeek(date) === 7;
}

/**
 * 是否为本月第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isFirstDayOfMonth(date = new Date()): boolean {
  return getDayOfMonth(date) === 1;
}

/**
 * 是否为本月最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isLastDayOfMonth(date = new Date()): boolean {
  return getDayOfMonth(date) === getDaysOfMonth(date);
}

/**
 * 是否为本年第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isFirstDayOfYear(date = new Date()): boolean {
  return getDayOfYear(date) === 1;
}

/**
 * 是否为本年最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isLastDayOfYear(date = new Date()): boolean {
  return getDayOfYear(date) === getDaysOfYear(date);
}

/* 判断年 */
/**
 * 是否为闰年
 * @description 闰年366天，平年365天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isLeapYear(date = new Date()): boolean {
  const year = date.getFullYear();
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

/**
 * 是否为平年
 * @description 闰年366天，平年365天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isCommonYear(date = new Date()): boolean {
  return !isLeapYear(date);
}

/* 比较日期区间 */
/**
 * 是否在日期之前
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isBefore(startDate: Date, endDate: Date = new Date()): boolean {
  // 计算时间差
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  const diffTime = startTime - endTime;
  return diffTime < 0;
}

/**
 * 是否在日期之后
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期，默认当前日期
 * @returns {boolean} 返回结果
 */
export function isAfter(startDate: Date, endDate: Date = new Date()): boolean {
  // 计算时间差
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  const diffTime = startTime - endTime;
  return diffTime > 0;
}

/**
 * 是否在两个日期之间
 * @param {Date} date 要比较的日期
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {boolean} 返回结果
 */
export function isBetween(date: Date, startDate: Date, endDate: Date): boolean {
  const time = date.getTime();
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  return time > startTime && time < endTime;
}

/* 日期是否相同 */
/**
 * 两个日期是否为同一天
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {boolean} 返回结果
 */
export function isSame(startDate: Date, endDate: Date): boolean {
  return (["getFullYear", "getMonth", "getDate"] as Array<"getFullYear" | "getMonth" | "getDate">).every(
    (item) => startDate[item]() === endDate[item](),
  );
}

/**
 * 两个日期是否为同一周
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {boolean} 返回结果
 */
export function isSameWeek(startDate: Date, endDate: Date): boolean {
  const diffDate1 = startDate.getTime() / (24 * 60 * 60 * 1000);
  const diffDate2 = endDate.getTime() / (24 * 60 * 60 * 1000);
  return parseInt((diffDate1 + 4) / 7) === parseInt((diffDate2 + 4) / 7);
}

/**
 * 两个日期是否为同一个月
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {boolean} 返回结果
 */
export function isSameMonth(startDate: Date, endDate: Date): boolean {
  return (["getFullYear", "getMonth"] as Array<"getFullYear" | "getMonth">).every(
    (item) => startDate[item]() === endDate[item](),
  );
}

/**
 * 两个日期是否为同一年
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {boolean} 返回结果
 */
export function isSameYear(startDate: Date, endDate: Date): boolean {
  return (["getFullYear"] as Array<"getFullYear">).every((item) => startDate[item]() === endDate[item]());
}

/* 比较两个日期相同 或 之前/之后 */
/**
 * 两个日期是否相同或之前
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {boolean} 返回结果
 */
export function isSameOrBefore(startDate: Date, endDate: Date): boolean {
  return isSame(startDate, endDate) || isBefore(startDate, endDate);
}

/**
 * 两个日期是否相同或之后
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {boolean} 返回结果
 */
export function isSameOrAfter(startDate: Date, endDate: Date): boolean {
  return isSame(startDate, endDate) || isAfter(startDate, endDate);
}

/* 获取 日期/时间戳/周/季度 */
/**
 * 获得此刻的日期
 * @returns {Date} 返回日期
 */
export function getNow(): Date {
  return new Date();
}

/**
 * 获得当前日期字符串
 * @param {Date} date 日期参数，默认当前日期
 * @param {string} format 日期字符串格式
 * @returns {string} 返回日期字符串
 */
export function getDate(date: Date = new Date(), format: string = "yyyy-MM-dd"): string {
  return formatDate(date, format);
}

/**
 * 获得当前日期时间字符串
 * @param {Date} date 日期参数，默认当前日期
 * @param {string} format 日期时间字符串格式
 * @returns {string} 返回日期时间字符串
 */
export function getDateTime(date: Date = new Date(), format: string = "yyyy-MM-dd HH:mm:ss"): string {
  return formatDate(date, format);
}

/**
 * 获取当前时间戳
 * @param {Date} date 日期参数，默认当前日期
 * @returns {number} 返回时间戳
 */
export function getTimestamp(date: Date = new Date()): number {
  return date.getTime();
}

/**
 * 获取当前Unix时间戳
 * @param {Date} date 日期参数，默认当前日期
 * @returns {number} 返回Unix时间戳
 */
export function getUnixTimestamp(date: Date = new Date()): number {
  return Math.round(date.getTime() / 1000);
}

/**
 * 获得当前日期的对象形式
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Object} 返回日期的对象形式
 */
export function getDateObject(date: Date = new Date()): Record<string, number> {
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
export function getDateArray(date: Date = new Date()): number[] {
  return Object.entries(getDateObject(date)).map(([key, value]) => value);
}

/**
 * 获得当前日期是周几
 * @param {Date} date 日期参数，默认当前日期
 * @param {string} format 周格式化结果：E：如“日”，EE：如“周日”, EEE：如“星期日”；默认为E，为空则返回数字
 * @param {string} lang 语言zh和en，默认zh
 * @returns {number|string} 返回周几，会根据语言返回
 */
export function getWeek(date: Date = new Date(), format: string = "E", lang: string = "zh"): number | string {
  // 根据格式化和语言返回对应的周
  if (format === "E") {
    return DATE.WEEK[lang].MINI[date.getDay()];
  } else if (format === "EE") {
    return DATE.WEEK[lang].SHORT[date.getDay()];
  } else if (format === "EEE") {
    return DATE.WEEK[lang].FULL[date.getDay()];
  } else {
    return getDayOfWeek(date);
  }
}

/**
 * 获得当前日期是第几季度
 * @param {Date} date 日期参数，默认当前日期
 * @param {string} format 季度格式化结果：Q：如“一”, QQ：如“一季度”；QQQ：如“第一季度”；默认为Q，为空则返回数字
 * @param {string} lang 语言zh和en，默认zh
 * @returns {number|string} 返回第几季度，会根据语言返回
 */
export function getQuarter(date: Date = new Date(), format: string = "Q", lang: string = "zh"): number | string {
  // 根据格式化和语言返回对应的周
  const quarterNum = Number(Math.floor((date.getMonth() + 3) / 3));
  if (format === "Q") {
    return DATE.QUARTER[lang].MINI[quarterNum - 1];
  } else if (format === "QQ") {
    return DATE.QUARTER[lang].SHORT[quarterNum - 1];
  } else if (format === "QQQ") {
    return DATE.QUARTER[lang].FULL[quarterNum - 1];
  } else {
    return quarterNum;
  }
}

/* 当前日期是所在 周/月/年 的第几天 */
/**
 * 获得当前日期是所在周的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {number|string} 返回天数
 */
export function getDayOfWeek(date: Date = new Date()): number | string {
  return [7, 1, 2, 3, 4, 5, 6][date.getDay()];
}

/**
 * 获得当前日期是所在月的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {number} 返回天数
 */
export function getDayOfMonth(date: Date = new Date()): number {
  return date.getDate();
}

/**
 * 获得当前日期是所在年的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {number} 返回天数
 */
export function getDayOfYear(date: Date = new Date()): number {
  return Math.ceil((date.getTime() - new Date(date.getFullYear().toString()).getTime()) / (24 * 60 * 60 * 1000)) + 1;
}

/* 当前日期的周是所在 月/年 的第几周 */
/**
 * 获得当前日期是所在月的第几周
 * @param {Date} date 日期参数，默认当前日期
 * @returns {number} 返回周数
 */
export function getWeekOfMonth(date: Date = new Date()): number {
  return Math.ceil((date.getDate() + 6 - Number(getDayOfWeek(date))) / 7);
}

/**
 * 获得当前日期是所在年的第几周
 * @param {Date} date 日期参数，默认当前日期
 * @returns {number} 返回周数
 */
export function getWeekOfYear(date: Date = new Date()): number {
  const startDate = new Date(date.getFullYear(), 0, 1);
  const startDay = getDayOfWeek(startDate);
  const diff = Math.round((date.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
  return Math.ceil((diff + Number(startDay)) / 7);
}

/* 当前日期所在 周/月/年 共几天 */
/**
 * 获得当前日期所在的周共几天
 * @returns {number} 返回天数
 */
export function getDaysOfWeek(): number {
  return 7;
}

/**
 * 获得当前日期所在的月共几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {number} 返回天数
 */
export function getDaysOfMonth(date: Date = new Date()): number {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

/**
 * 获得当前日期所在的年共几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {number} 返回天数
 */
export function getDaysOfYear(date: Date = new Date()): number {
  return isLeapYear(date) ? 366 : 365;
}

/* 当前周所在 月/年 共几周  */
/**
 * 获得当前日期是所在月的第几周
 * @param {Date} date 日期参数，默认当前日期
 * @returns {number} 返回周数
 */
export function getWeeksOfMonth(date: Date = new Date()): number {
  const startDate = new Date(date.getFullYear(), 0, 1);
  const startDay = Number(getDayOfWeek(startDate));
  const fullDays = isLeapYear(date) ? 366 : 365;
  if (startDay === 1) {
    return Math.ceil(fullDays / 7);
  } else {
    return Math.ceil((fullDays - 7 + startDay) / 7);
  }
}

/**
 * 获得当前日期是所在年的第几周
 * @param {Date} date 日期参数，默认当前日期
 * @returns {number} 返回周数
 */
export function getWeeksOfYear(date: Date = new Date()): number {
  const startDate = new Date(date.getFullYear(), 0, 1);
  const startDay = Number(getDayOfWeek(startDate));
  const fullDays = isLeapYear(date) ? 366 : 365;
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
 * @returns {string} 返回日期字符串
 */
export function getFirstDateOfWeek(date: Date = new Date()): string {
  const weekDay = Number(getDayOfWeek(date));
  date.setDate(date.getDate() - weekDay + 1);
  return formatDate(date);
}

/**
 * 获得当前日期所在周的最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {string} 返回日期字符串
 */
export function getLastDateOfWeek(date: Date = new Date()): string {
  const weekDay = Number(getDayOfWeek(date));
  date.setDate(date.getDate() + (7 - weekDay));
  return formatDate(date);
}

/**
 * 获取当前日期所在周的所有日期
 * @param {Date} date 日期参数，默认当前日期
 * @returns {string[]} 返回日期数组
 */
export function getFullDateOfWeek(date: Date = new Date()): string[] {
  const array = [];
  // 获得当前日期是本周几
  const dayOfWeek = date.getDay();
  // 根据当前日期获取本周一
  const firstDateOfWeek = new Date();
  firstDateOfWeek.setDate(date.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

  // 遍历本周日期
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(firstDateOfWeek);
    currentDate.setDate(currentDate.getDate() + i);
    array.push(formatDate(currentDate));
  }

  return array;
}

/**
 * 获得当前日期所在月的第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {string} 返回日期字符串
 */
export function getFirstDateOfMonth(date: Date = new Date()): string {
  date.setDate(1);
  return formatDate(date);
}

/**
 * 获得当前日期所在月的最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {string} 返回日期字符串
 */
export function getLastDateOfMonth(date: Date = new Date()): string {
  return formatDate(new Date(date.getFullYear(), date.getMonth() + 1, 0));
}

/**
 * 获取当前日期所在月的所有日期
 * @param {Date} date 日期参数，默认当前日期
 * @returns {string[]} 返回日期数组
 */
export function getFullDateOfMonth(date: Date = new Date()): string[] {
  const array = [];
  // 获得本月第一天
  const firstDateOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  // 获得本月最后一天
  const lastDateOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  // 遍历本月日期
  for (let i = 0; i < lastDateOfMonth.getDate(); i++) {
    const currentDate = new Date(firstDateOfMonth);
    currentDate.setDate(firstDateOfMonth.getDate() + i);
    array.push(formatDate(currentDate));
  }
  return array;
}

/**
 * 获取当前日期所在年的第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {string} 返回日期字符串
 */
export function getFirstDateOfYear(date: Date = new Date()): string {
  return formatDate(new Date(date.getFullYear(), 0, 1));
}

/**
 * 获取当前日期所在年的最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {string} 返回日期字符串
 */
export function getLastDateOfYear(date: Date = new Date()): string {
  return formatDate(new Date(date.getFullYear(), 11, 31));
}

/**
 * 获取当前日期所在年的所有日期
 * @param {Date} date 日期参数，默认当前日期
 * @returns {string} 返回日期字符串
 */
export function getFullDateOfYear(date: Date = new Date()): string[] {
  const array = [];
  // 获得本年第一天
  const firstDateOfYear = new Date(date.getFullYear(), 0, 1);
  // 获得本年一共多少天
  const daysOfYear = getDaysOfYear();
  // 遍历本年日期
  for (let i = 0; i < daysOfYear; i++) {
    const currentDate = new Date(firstDateOfYear);
    currentDate.setDate(firstDateOfYear.getDate() + i);
    array.push(formatDate(currentDate));
  }
  return array;
}

/* 计算两个日期相差 */
/**
 * 计算两个日期相差的天数，不满一天为0
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {number} 返回两个日期相差的天数，结果为正数或者负数
 */
export function getDiffDay(startDate: Date, endDate: Date): number {
  if (isNull(startDate) || isNull(endDate)) return 0;
  const diff = (endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000);

  // 返回
  return diff >= 0 ? Math.abs(diff) : diff;
}

/**
 * 计算两个日期相差的周数，不满一周为0
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {number} 返回两个日期相差的周数，结果为正数或者负数
 */
export function getDiffWeek(startDate: Date, endDate: Date): number {
  if (isNull(startDate) || isNull(endDate)) return 0;
  const diff = (endDate.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000);

  // 返回
  return diff >= 0 ? Math.abs(diff) : diff;
}

/**
 * 计算两个日期相差的月数，不满一月为0
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {number} 返回两个日期相差的月数，结果为正数或者负数
 */
export function getDiffMonth(startDate: Date, endDate: Date): number {
  if (isNull(startDate) || isNull(endDate)) return 0;
  const diff = (startDate.getTime() - endDate.getTime()) / (30 * 24 * 60 * 60 * 1000);

  // 返回
  return diff >= 0 ? Math.abs(diff) : diff;
}

/**
 * 计算两个日期相差的年数，不满一年为0
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {number} 返回两个日期相差的年数，结果为正数或者负数
 */
export function getDiffYear(startDate: Date, endDate: Date): number {
  if (isNull(startDate) || isNull(endDate)) return 0;
  const diff = (endDate.getTime() - startDate.getTime()) / (12 * 30 * 24 * 60 * 60 * 1000);

  // 返回
  return diff >= 0 ? Math.abs(diff) : diff;
}

/* 获得两个日期之间 年月日/年月/年 数组 */
/**
 * 获得两个日期之间的年月日数组
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Array} 返回年月日数组
 */
export function getBetweenDates(startDate: Date, endDate: Date): string[] {
  if (isNull(startDate) || isNull(endDate)) return [];

  // 计算
  const array = [];
  while (endDate.getTime() - startDate.getTime() >= 0) {
    const year = startDate.getFullYear(),
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
export function getBetweenMonths(startDate: Date, endDate: Date): string[] {
  if (isNull(startDate) || isNull(endDate)) return [];

  // 计算
  const array = [];
  // 获取时间对象
  const min = new Date();
  const max = new Date();
  // 设置起始时间
  min.setFullYear(startDate.getFullYear(), startDate.getMonth() + 1);
  // 设置结束时间
  max.setFullYear(endDate.getFullYear(), endDate.getMonth() + 1);

  // 复制一份起始时间对象
  const curr = min;
  // 定义字符串
  let str = "";
  // 起始时间在结束时间之前
  while (curr <= max) {
    // 获取此时间的月份
    const month = curr.getMonth();
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
export function getBetweenYears(startDate: Date, endDate: Date): number[] {
  if (isNull(startDate) || isNull(endDate)) return [];

  // 计算
  const array = [];
  while (endDate.getTime() - startDate.getTime() >= 0) {
    const year = startDate.getFullYear();

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
 * @param {string} lang 语言zh和en，默认zh
 * @returns {string} 返回字符串
 */
export function getPastTime(date: Date, lang: string = "zh"): string {
  if (isNull(date)) return "--";

  // 计算时间差
  const startTime = date.getTime();
  const currentTime = Date.now();
  const time = currentTime - startTime;
  // 年月日时分
  const year = parseInt(time / (1000 * 60 * 60 * 24 * 30 * 12));
  const month = parseInt(time / (1000 * 60 * 60 * 24 * 30));
  const day = parseInt(time / (1000 * 60 * 60 * 24));
  const hour = parseInt(time / (1000 * 60 * 60));
  const min = parseInt(time / (1000 * 60));

  // 返回结果
  if (year) {
    return year + DATE.PASS_TIME[lang].YEAR;
  } else if (month) {
    return month + DATE.PASS_TIME[lang].MONTH;
  } else if (day) {
    if (day === 1) {
      return DATE.PASS_TIME[lang].YESTERDAY;
    } else if (day === 2) {
      return DATE.PASS_TIME[lang].BEFORE_YESTERDAY;
    } else {
      return day + DATE.PASS_TIME[lang].DAY;
    }
  } else if (hour) {
    if (hour > 12) {
      return DATE.PASS_TIME[lang].TODAY;
    } else {
      return hour + DATE.PASS_TIME[lang].HOUR;
    }
  } else if (min) {
    return min + DATE.PASS_TIME[lang].MINUTE;
  } else {
    return DATE.PASS_TIME[lang].JUST;
  }
}

/**
 * 获得剩余时间的字符串显示
 * @description 例如：1天10小时20分钟30秒
 * @param {Date} date 日期参数
 * @param {string} lang 语言zh和en，默认zh
 * @returns {string} 返回字符串
 */
export function getOverTime(date: Date, lang: string = "zh"): string {
  if (isNull(date)) return "--";

  // 计算
  const startDate = new Date(); // 开始时间
  const t = date.getTime() - startDate.getTime(); // 时间差
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
  return `${d}${DATE.OVER_TIME[lang].DAY} ${h}${DATE.OVER_TIME[lang].HOUR} ${m}${DATE.OVER_TIME[lang].MINUTE} ${s}${DATE.OVER_TIME[lang].SECOND}`;
}

/* 通过日期获得 年龄、星座和生肖 */

/**
 * 通过日期获得年龄
 * @param {Date} date 日期参数
 * @returns {number} 返回周岁年龄
 */
export function getAge(date: Date): number {
  let age = 0;
  // 传参日期
  const dateArray = formatDate(date).split("-");
  const birthYear = Number(dateArray[0]);
  const birthMonth = Number(dateArray[1]);
  const birthDay = Number(dateArray[2]);
  // 当前的日期
  const nowDate = new Date();
  const nowYear = nowDate.getFullYear(),
    nowMonth = nowDate.getMonth() + 1,
    nowDay = nowDate.getDate();

  // 出生年份需要小于当年，否则是0岁
  const diffAge = nowYear - birthYear;
  if (diffAge > 0) {
    const diffMonth = nowMonth - birthMonth;
    const diffDay = nowDay - birthDay;
    if (diffMonth === 0) {
      if (diffDay < 0) {
        age = diffAge - 1;
      } else {
        age = diffAge;
      }
    } else {
      if (diffMonth < 0) {
        age = diffAge - 1;
      } else {
        age = diffAge;
      }
    }
  }

  // 返回周岁年龄
  return age;
}

/**
 * 通过日期获得星座
 * @param {Date} date 日期参数
 * @param {string} lang 语言zh和en，默认zh
 * @returns {string} 返回星座
 */
export function getZodiac(date: Date, lang: string = "zh"): string {
  if (isNull(date)) return "";

  // 计算
  const days = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22];
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return day < days[month - 1] ? DATE.ZODIAC[lang][month - 1] : DATE.ZODIAC[lang][month];
}

/**
 * 通过日期获得生肖
 * @param {Date} date 日期参数
 * @param {string} lang 语言zh和en，默认zh
 * @returns {string} 返回生肖
 */
export function getChineseZodiac(date: Date, lang: string = "zh"): string {
  if (isNull(date)) return "";

  // 计算
  const year = date.getFullYear();
  if (year < 1900) {
    return "未知";
  }
  return DATE.CHINESE_ZODIAC[lang][(year - 1900) % DATE.CHINESE_ZODIAC[lang].length];
}

/* 计算日期加减 年，月，日，时，分，秒，周，季度 */
/**
 * 日期加减年
 * @param {Date} date 日期参数，默认当前日期
 * @param {number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addYear(date: Date = new Date(), num: number = +1): Date {
  date.setFullYear(date.getFullYear() + num);
  return date;
}

/**
 * 日期加减月
 * @param {Date} date 日期参数，默认当前日期
 * @param {number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addMonth(date: Date = new Date(), num: number = +1): Date {
  date.setMonth(date.getMonth() + num);
  return date;
}

/**
 * 日期加减天
 * @param {Date} date 日期参数，默认当前日期
 * @param {number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addDate(date: Date = new Date(), num: number = +1): Date {
  date.setDate(date.getDate() + num);
  return date;
}

/**
 * 日期加减小时
 * @param {Date} date 日期参数，默认当前日期
 * @param {number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addHours(date: Date = new Date(), num: number = +1): Date {
  date.setHours(date.getHours() + num);
  return date;
}

/**
 * 日期加减分钟
 * @param {Date} date 日期参数，默认当前日期
 * @param {number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addMinutes(date: Date = new Date(), num: number = +1): Date {
  date.setMinutes(date.getMinutes() + num);
  return date;
}

/**
 * 日期加减秒
 * @param {Date} date 日期参数，默认当前日期
 * @param {number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addSeconds(date: Date = new Date(), num: number = +1): Date {
  date.setSeconds(date.getSeconds() + num);
  return date;
}

/**
 * 日期加减毫秒
 * @param {Date} date 日期参数，默认当前日期
 * @param {number} num 加减数量，用正数和负数表示；默认+100
 * @returns {Date} 返回加减后的日期
 */
export function addMillisecond(date: Date = new Date(), num: number = +100): Date {
  date.setMilliseconds(date.getMilliseconds() + num);
  return date;
}

/**
 * 日期加减周
 * @param {Date} date 日期参数，默认当前日期
 * @param {number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addWeek(date: Date = new Date(), num: number = +1): Date {
  date.setDate(date.getDate() + num * 7);
  return date;
}

/**
 * 日期加减季度
 * @param {Date} date 日期参数，默认当前日期
 * @param {number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addQuarter(date: Date = new Date(), num: number = +1): Date {
  date.setMonth(date.getMonth() + num * 4);
  return date;
}

/* 格式化和解析日期 */
/**
 * 日期对象转为日期字符串
 * @description 支持日期字符串，日期对象，时间戳，unix时间戳
 * @param {string|Date|number} date 日期参数
 * @param {string} format 转化格式
 * @param {string} lang 语言zh和en，默认zh
 * @returns {string} 返回日期字符串
 */
// TODO：需要支持"20260109" 这种格式的日期的转换
export function formatDate(date: Date, format: string = "yyyy-MM-dd", lang: string = "zh"): string {
  if (isNull(date)) return "";

  // 是日期字符串
  if (isString(date)) {
    date = parseDate(String(date)) as Date;
  }
  // 是日期对象
  else if (isDate(date)) {
    // 无需赋值
  }
  // 是时间戳
  else if (isInteger(date) && String(date).length === 13) {
    date = new Date(date);
  }
  // 是unix时间戳
  else if (isInteger(date) && String(date).length === 10) {
    date = new Date(Number(date) * 1000);
  }
  // 不支持的日期格式
  else {
    console.error("Not supported date format!");
    return "";
  }

  // 配置规则
  const rules: Record<string, any> = {
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
  const yearReg = new RegExp(/(y+)/g);
  if (yearReg.test(format)) {
    format = format.replace(yearReg, function (match, $1) {
      return (date.getFullYear() + "").substring(4 - $1.length);
    });
  }
  // 上午/下午
  const amPmReg = new RegExp(/((b+)|(A+))/g);
  if (amPmReg.test(format)) {
    format = format.replace(amPmReg, function (match, $1) {
      // AA或者aa为中文
      if ($1.length > 1) {
        return date.getHours() < 12 ? DATE.AM_PM[lang].AM : DATE.AM_PM[lang].PM;
      }
      // 其他为英文
      else {
        return $1 === $1.toLowerCase()
          ? date.getHours() < 12
            ? DATE.AM_PM["en"].AM.toLowerCase()
            : DATE.AM_PM["en"].PM.toLowerCase()
          : date.getHours() < 12
            ? DATE.AM_PM["en"].AM
            : DATE.AM_PM["en"].PM;
      }
    });
  }
  // 周
  const weekReg = new RegExp(/(E+)/g);
  if (weekReg.test(format)) {
    format = format.replace(weekReg, function (match, $1) {
      return $1.length === 1
        ? DATE.WEEK[lang].MINI[date.getDay()]
        : $1.length === 2
          ? DATE.WEEK[lang].SHORT[date.getDay()]
          : DATE.WEEK[lang].FULL[date.getDay()];
    });
  }
  // 季度
  const quarterReg = new RegExp(/(Q+)/g);
  if (quarterReg.test(format)) {
    format = format.replace(quarterReg, function (match, $1) {
      return $1.length === 1
        ? DATE.QUARTER[lang].MINI[Math.floor((date.getMonth() + 3) / 3) - 1]
        : $1.length === 2
          ? DATE.QUARTER[lang].SHORT[Math.floor((date.getMonth() + 3) / 3) - 1]
          : DATE.QUARTER[lang].FULL[Math.floor((date.getMonth() + 3) / 3) - 1];
    });
  }
  // 经过上面的过滤，剩余的日期参数处理
  for (const k in rules) {
    const dateReg = new RegExp("(" + k + ")");
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
 * @param {string|number} value 日期参数
 * @returns {Date} 返回日期对象
 */
export function parseDate(value: string | number): Date | undefined {
  if (isNull(value)) return undefined;

  // 是日期字符串
  if (isString(value)) {
    return new Date(String(value).replace(/-/g, "/"));
  }
  // 是时间戳
  else if (isInteger(value) && String(value).length === 13) {
    return new Date(value);
  }
  // 是unix时间戳
  else if (isInteger(value) && String(value).length === 10) {
    return new Date(Number(value) * 1000);
  }
  // 不支持的日期格式
  else {
    console.error("Not supported date format!");
    return undefined;
  }
}

/* 内部使用的函数 */
/**
 * 单个数字前自动补齐零为两位
 * @param {string|number} value 可以是数字和字符串
 * @returns {string} 返回处理后的字符串
 */
function _digit(value: string | number): string {
  value = value.toString();
  return value[1] ? value : "0" + value;
}
