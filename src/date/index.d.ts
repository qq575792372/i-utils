/**
 * 今天
 *@returns {String} 返回日期字符串
 */
export function today(): string;
/**
 * 昨天
 * @returns {String} 返回日期字符串
 */
export function yesterday(): string;
/**
 * 明天
 *@returns {String} 返回日期字符串
 */
export function tomorrow(): string;
/**
 * 上周（7天前日期）
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function lastWeek(date?: Date): string;
/**
 * 下周（7天后日期）
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function nextWeek(date?: Date): string;
/**
 * 上个月（30天前日期）
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function lastMonth(date?: Date): string;
/**
 * 下个月（30天后日期）
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function nextMonth(date?: Date): string;
/**
 * 上一年（365天前日期）
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function lastYear(date?: Date): string;
/**
 * 下一年（365天后日期）
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function nextYear(date?: Date): string;
/**
 * 是否为上午
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isAM(date?: Date): boolean;
/**
 * 是否为下午
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isPM(date?: Date): boolean;
/**
 * 是否为今天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isToday(date?: Date): boolean;
/**
 * 是否为昨天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isYesterday(date?: Date): boolean;
/**
 * 是否为前天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isBeforeYesterday(date?: Date): boolean;
/**
 * 是否为明天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isTomorrow(date?: Date): boolean;
/**
 * 是否为后天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isAfterTomorrow(date?: Date): boolean;
/**
 * 是否为工作日
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isWorkday(date?: Date): boolean;
/**
 * 是否为周末（周六和周日）
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isWeekend(date?: Date): boolean;
/**
 * 是否为本周第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isFirstDayOfWeek(date?: Date): boolean;
/**
 * 是否为本周最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isLastDayOfWeek(date?: Date): boolean;
/**
 * 是否为本月第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isFirstDayOfMonth(date?: Date): boolean;
/**
 * 是否为本月最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isLastDayOfMonth(date?: Date): boolean;
/**
 * 是否为本年第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isFirstDayOfYear(date?: Date): boolean;
/**
 * 是否为本年最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isLastDayOfYear(date?: Date): boolean;
/**
 * 是否为闰年
 * @description 闰年366天，平年365天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isLeapYear(date?: Date): boolean;
/**
 * 是否为平年
 * @description 闰年366天，平年365天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isCommonYear(date?: Date): boolean;
/**
 * 是否在日期之前
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isBefore(startDate: Date, endDate?: Date): boolean;
/**
 * 是否在日期之后
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期，默认当前日期
 * @returns {Boolean} 返回结果
 */
export function isAfter(startDate: Date, endDate?: Date): boolean;
/**
 * 是否在两个日期之间
 * @param {Date} date 要比较的日期
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Boolean} 返回结果
 */
export function isBetween(date: Date, startDate: Date, endDate: Date): boolean;
/**
 * 两个日期是否为同一天
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Boolean} 返回结果
 */
export function isSame(startDate: Date, endDate: Date): boolean;
/**
 * 两个日期是否为同一周
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Boolean} 返回结果
 */
export function isSameWeek(startDate: Date, endDate: Date): boolean;
/**
 * 两个日期是否为同一个月
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Boolean} 返回结果
 */
export function isSameMonth(startDate: Date, endDate: Date): boolean;
/**
 * 两个日期是否为同一年
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Boolean} 返回结果
 */
export function isSameYear(startDate: Date, endDate: Date): boolean;
/**
 * 两个日期是否相同或之前
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Boolean} 返回结果
 */
export function isSameOrBefore(startDate: Date, endDate: Date): boolean;
/**
 * 两个日期是否相同或之后
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Boolean} 返回结果
 */
export function isSameOrAfter(startDate: Date, endDate: Date): boolean;
/**
 * 获得此刻的日期
 * @returns {Date} 返回日期
 */
export function getNow(): Date;
/**
 * 获得当前日期字符串
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} format 日期字符串格式
 * @returns {String} 返回日期字符串
 */
export function getDate(date?: Date, format?: string): string;
/**
 * 获得当前日期时间字符串
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} format 日期时间字符串格式
 * @returns {String} 返回日期时间字符串
 */
export function getDateTime(date?: Date, format?: string): string;
/**
 * 获取当前时间戳
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回时间戳
 */
export function getTimestamp(date?: Date): number;
/**
 * 获取当前Unix时间戳
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回Unix时间戳
 */
export function getUnixTimestamp(date?: Date): number;
/**
 * 获得当前日期的对象形式
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Object} 返回日期的对象形式
 */
export function getDateObject(date?: Date): Object;
/**
 * 获得当前日期的数组形式
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Object} 返回日期的数组形式
 */
export function getDateArray(date?: Date): Object;
/**
 * 获得当前日期是周几
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} format 周格式化结果：E：如“日”，EE：如“周日”, EEE：如“星期日”；默认为E，为空则返回数字
 * @param {String} lang 语言zh和en，默认zh
 * @returns {Number,String} 返回周几，会根据语言返回
 */
export function getWeek(date?: Date, format?: string, lang?: string): number;
/**
 * 获得当前日期是第几季度
 * @param {Date} date 日期参数，默认当前日期
 * @param {String} format 季度格式化结果：Q：如“一”, QQ：如“一季度”；QQQ：如“第一季度”；默认为Q，为空则返回数字
 * @param {String} lang 语言zh和en，默认zh
 * @returns {Number,String} 返回第几季度，会根据语言返回
 */
export function getQuarter(date?: Date, format?: string, lang?: string): number;
/**
 * 获得当前日期是所在周的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number|String} 返回天数
 */
export function getDayOfWeek(date?: Date): number | string;
/**
 * 获得当前日期是所在月的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回天数
 */
export function getDayOfMonth(date?: Date): number;
/**
 * 获得当前日期是所在年的第几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回天数
 */
export function getDayOfYear(date?: Date): number;
/**
 * 获得当前日期是所在月的第几周
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回周数
 */
export function getWeekOfMonth(date?: Date): number;
/**
 * 获得当前日期是所在年的第几周
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回周数
 */
export function getWeekOfYear(date?: Date): number;
/**
 * 获得当前日期所在的周共几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回天数
 */
export function getDaysOfWeek(date?: Date): number;
/**
 * 获得当前日期所在的月共几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回天数
 */
export function getDaysOfMonth(date?: Date): number;
/**
 * 获得当前日期所在的年共几天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回天数
 */
export function getDaysOfYear(date?: Date): number;
/**
 * 获得当前日期是所在月的第几周
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回周数
 */
export function getWeeksOfMonth(date?: Date): number;
/**
 * 获得当前日期是所在年的第几周
 * @param {Date} date 日期参数，默认当前日期
 * @returns {Number} 返回周数
 */
export function getWeeksOfYear(date?: Date): number;
/**
 * 获得当前日期所在周的第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function getFirstDateOfWeek(date?: Date): string;
/**
 * 获得当前日期所在周的最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function getLastDateOfWeek(date?: Date): string;
/**
 * 获取当前日期所在周的所有日期
 */
export function getFullDateOfWeek(date?: Date): string[];
/**
 * 获得当前日期所在月的第一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function getFirstDateOfMonth(date?: Date): string;
/**
 * 获得当前日期所在月的最后一天
 * @param {Date} date 日期参数，默认当前日期
 * @returns {String} 返回日期字符串
 */
export function getLastDateOfMonth(date?: Date): string;
/**
 * 获取当前日期所在月的所有日期
 */
export function getFullDateOfMonth(date?: Date): Date[];
/**
 * 获取当前日期所在年的第一天
 */
export function getFirstDateOfYear(date?: Date): Date;
/**
 * 获取当前日期所在年的最后一天
 */
export function getLastDateOfYear(date?: Date): Date;
/**
 * 获取当前日期所在年的所有日期
 */
export function getFullDateOfYear(date?: Date): string[];
/**
 * 计算两个日期相差的天数，不满一天为0
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Number} 返回两个日期相差的天数，结果为正数或者负数
 */
export function getDiffDay(startDate: Date, endDate: Date): number;
/**
 * 计算两个日期相差的周数，不满一周为0
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Number} 返回两个日期相差的周数，结果为正数或者负数
 */
export function getDiffWeek(startDate: Date, endDate: Date): number;
/**
 * 计算两个日期相差的月数，不满一月为0
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Number} 返回两个日期相差的月数，结果为正数或者负数
 */
export function getDiffMonth(startDate: Date, endDate: Date): number;
/**
 * 计算两个日期相差的年数，不满一年为0
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Number} 返回两个日期相差的年数，结果为正数或者负数
 */
export function getDiffYear(startDate: Date, endDate: Date): number;
/**
 * 获得两个日期之间的年月日数组
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Array} 返回年月日数组
 */
export function getBetweenDates(startDate: Date, endDate: Date): any[];
/**
 * 获得两个日期之间的年月数组
 * @description 支持：日期字符串，日期对象，时间戳，Unix时间戳
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Array} 返回年月数组
 */
export function getBetweenMonths(startDate: Date, endDate: Date): any[];
/**
 * 获得两个日期之间的年数组
 * @param {Date} startDate 开始日期
 * @param {Date} endDate 结束日期
 * @returns {Array} 返回年数组
 */
export function getBetweenYears(startDate: Date, endDate: Date): any[];
/**
 * 获得过去时间的字符串显示
 * @description 例如：刚刚，1分钟前，1小时前等
 * @param {Date} date 日期参数
 * @param {String} lang 语言zh和en，默认zh
 * @returns {String} 返回字符串
 */
export function getPastTime(date: Date, lang?: string): string;
/**
 * 获得剩余时间的字符串显示
 * @description 例如：1天10小时20分钟30秒
 * @param {Date} date 日期参数
 * @param {String} lang 语言zh和en，默认zh
 * @returns {String} 返回字符串
 */
export function getOverTime(date: Date, lang?: string): string;
/**
 * 通过日期获得年龄
 * @param {Date} date 日期参数
 * @returns {Number} 返回周岁年龄
 */
export function getAge(date: Date): number;
/**
 * 通过日期获得星座
 * @param {Date} date 日期参数
 * @param {String} lang 语言zh和en，默认zh
 * @returns {String} 返回星座
 */
export function getZodiac(date: Date, lang?: string): string;
/**
 * 通过日期获得生肖
 * @param {Date} date 日期参数
 * @param {String} lang 语言zh和en，默认zh
 * @returns {String} 返回生肖
 */
export function getChineseZodiac(date: Date, lang?: string): string;
/**
 * 日期加减年
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addYear(date?: Date, num?: number): Date;
/**
 * 日期加减月
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addMonth(date?: Date, num?: number): Date;
/**
 * 日期加减天
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addDate(date?: Date, num?: number): Date;
/**
 * 日期加减小时
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addHours(date?: Date, num?: number): Date;
/**
 * 日期加减分钟
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addMinutes(date?: Date, num?: number): Date;
/**
 * 日期加减秒
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addSeconds(date?: Date, num?: number): Date;
/**
 * 日期加减毫秒
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+100
 * @returns {Date} 返回加减后的日期
 */
export function addMillisecond(date?: Date, num?: number): Date;
/**
 * 日期加减周
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addWeek(date?: Date, num?: number): Date;
/**
 * 日期加减季度
 * @param {Date} date 日期参数，默认当前日期
 * @param {Number} num 加减数量，用正数和负数表示；默认+1
 * @returns {Date} 返回加减后的日期
 */
export function addQuarter(date?: Date, num?: number): Date;
/**
 * 日期对象转为日期字符串
 * @description 支持日期字符串，日期对象，时间戳，unix时间戳
 * @param {String|Date|Number} date 日期参数
 * @param {String} format 转化格式
 * @param {String} lang 语言zh和en，默认zh
 * @returns {String} 返回日期字符串
 */
export function formatDate(date: string | Date | number, format?: string, lang?: string): string;
/**
 * 日期字符串转为日期对象
 * @description 支持日期字符串，时间戳，Unix时间戳
 * @param {String|Number} value 日期参数
 * @returns {Date} 返回日期对象
 */
export function parseDate(value: string | number): Date;
