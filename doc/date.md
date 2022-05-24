# 日期 Date

<!-- 快捷日期 -->

## 快捷日期

### \_.today()

今天

- #### 参数

  无

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.today();
console.log(res); // 输出：2021-12-13
```

### \_.yesterday()

昨天

- #### 参数

  无

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.yesterday();
console.log(res); // 输出：2021-12-11
```

---

### \_.tomorrow()

明天

- #### 参数

  无

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.tomorrow();
console.log(res); // 输出：2021-12-12
```

---

### \_.prevWeek()

上周（7 天前日期）

- #### 参数

  无

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.prevWeek();
console.log(res); // 输出：2021-12-06
```

### \_.nextWeek()

下周（7 天后日期）

- #### 参数

  无

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.nextWeek();
console.log(res); // 输出：2021-12-20
```

---

### \_.prevMonth()

上个月（30 天前日期）

- #### 参数

  无

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.prevMonth();
console.log(res); // 输出：2021-11-13
```

---

### \_.nextMonth()

下个月（30 天后日期）

- #### 参数

  无

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.nextMonth();
console.log(res); // 输出：2022-01-12
```

---

### \_.prevYear()

去年（365 天前日期）

- #### 参数

  无

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.prevYear();
console.log(res); // 输出：2020-12-13
```

---

### \_.nextYear()

明年（365 天后日期）

- #### 参数

  无

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.nextYear();
console.log(res); // 输出：2022-12-13
```

---

## 判断某刻日期

### \_.isAM()

现在是否为上午

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isAM();
console.log(res); // 输出：true
```

---

### \_.isPM()

现在是否为下午

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isPM();
console.log(res); // 输出：true
```

---

### \_.isToday(date)

是否为今天

- #### 参数

  `date` {String|Date} 日期参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
// 日期
let res = LimeUtil.isToday(new Date());
console.log(res); // 输出：true

// 日期字符串
let res = LimeUtil.isToday("2021-12-13");
console.log(res); // 输出：true
```

---

### \_.isWorkday()

今天是否为工作日

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isWorkday();
console.log(res); // 输出：true
```

---

### \_.isWeekend()

今天是否为周末（周六和周日）

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isWeekend();
console.log(res); // 输出：true
```

---

### \_.isLeapYear(year)

是否为闰年  
`闰年366天，平年365天`

- #### 参数

  `year` {Number} 年份

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isLeapYear(2020);
console.log(res); // 输出：true
```

---

<!-- 比较同一 天，月，年 -->

## 比较同一 天，月，年

### \_.isSameDay(date1, date2)

比较两个日期是否为同一天

- #### 参数

  `date1` {Date} 第一个日期  
  `date2` {Date} 第二个日期

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isSameDay(new Date("2021-12-13"), new Date("2021-12-13"));
console.log(res); // 输出：true
```

---

### \_.isSameWeek(date1, date2)

比较两个日期是否为同一周

- #### 参数

  `date1` {Date} 第一个日期  
  `date2` {Date} 第二个日期

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isSameWeek(new Date("2021-12-13"), new Date("2021-12-14"));
console.log(res); // 输出：true
```

---

### \_.isSameMonth(date1, date2)

比较两个日期是否为同一个月

- #### 参数

  `date1` {Date} 第一个日期  
  `date2` {Date} 第二个日期

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isSameMonth(new Date("2021-12-13"), new Date("2021-12-13"));
console.log(res); // 输出：true
```

---

### \_.isSameYear(date1, date2)

比较两个日期是否为同一年

- #### 参数

  `date1` {Date} 第一个日期  
  `date2` {Date} 第二个日期

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isSameYear(new Date("2021-12-13"), new Date("2021-12-13"));
console.log(res); // 输出：true
```

---

<!-- 今天是否为 月初、月末 -->

## 今天是否为 月初、月末

### \_.isFirstDayOfMonth()

今天是否为本月第一天

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isFirstDayOfMonth();
console.log(res); // 输出：true
```

---

### \_.isLastDayOfMonth()

今天是否为本月最后一天

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isLastDayOfMonth();
console.log(res); // 输出：true
```

---

<!-- 获取日期，时间戳等 -->

## 获取日期，时间戳等

### \_.getNow()

获得此刻的日期

- #### 参数

  无

- #### 返回值

  {Date} 返回日期

- #### 示例

```javascript
let res = LimeUtil.getNow();
console.log(res); // 输出：Mon Dec 13 2021 16:23:29 GMT+0800 (中国标准时间)
```

---

### \_.getDate(date = new Date(), separator = "-")

获得当前日期字符串

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `separator` {String} 年月日分隔符，默认“-”分隔

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
// 默认
let res = LimeUtil.getDate();
console.log(res); // 输出：2021-12-13

// 指定日期和分隔符
let res = LimeUtil.getDate(new Date('2021-11-10),'/');
console.log(res); // 输出：2021/11/10
```

---

### \_.getDateTime(date = new Date(), separator = "-")

获得当前时间字符串

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `separator` {String} 年月日分隔符，默认“-”分隔

- #### 返回值

  {String} 返回时间字符串

- #### 示例

```javascript
// 默认
let res = LimeUtil.getDateTime();
console.log(res); // 输出：2021-12-13 10:10:30

// 指定日期和分隔符
let res = LimeUtil.getDateTime(new Date('2021-11-10),'/');
console.log(res); // 输出：2021/11/10 10:10:30
```

---

### \_.getTimestamp(date = new Date())

获取当前时间戳

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Timestamp} 返回时间戳

- #### 示例

```javascript
// 默认
let res = LimeUtil.getTimestamp();
console.log(res); // 输出：1639384118890

// 指定日期
let res = LimeUtil.getTimestamp(new Date("2021-12-10"));
console.log(res); // 输出：1639094400000
```

---

### \_.getUnixTimestamp(date = new Date())

获取当前 Unix 时间戳

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {UnixTimestamp} 返回 Unix 时间戳

- #### 示例

```javascript
// 默认
let res = LimeUtil.getUnixTimestamp();
console.log(res); // 输出：1639384195

// 指定日期
let res = LimeUtil.getUnixTimestamp(new Date("2021-12-10"));
console.log(res); // 输出：1639094400
```

---

### \_.getDay(date = new Date())

获得当前日

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回日

- #### 示例

```javascript
let res = LimeUtil.getDay();
console.log(res); // 输出：20
```

---

### \_.getMonth(date = new Date())

获得当前月

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回月

- #### 示例

```javascript
let res = LimeUtil.getMonth();
console.log(res); // 输出：2
```

---

### \_.getYear(date = new Date())

获得当前年

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回年

- #### 示例

```javascript
let res = LimeUtil.getYear();
console.log(res); // 输出：2022
```

---

### \_.getYearMonth(date = new Date(), separator = "-")

获得当前年月

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `separator` {String} 年月分隔符，默认“-”分隔

- #### 返回值

  {String} 返回年月

- #### 示例

```javascript
let res = LimeUtil.getYearMonth();
console.log(res); // 输出：2022-02
```

---

### \_.getWeek(date = new Date(), format = "EE")

获得当前日期是周几

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `format` {String} 周格式化结果：“E”:日, “EE”:周日, “EEE”:星期日；默认“EE”

- #### 返回值

  {String} 返回周几

- #### 示例

```javascript
let res = LimeUtil.getWeek();
console.log(res); // 输出：周一
```

---

### \_.getQuarter(date = new Date(), format = "q")

获得当前日期是第几季度

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `format` {String} 季度格式化结果：“q”:一季度, "qq":第一季度；默认：“q”

- #### 返回值

  {String} 返回第几季度

- #### 示例

```javascript
let res = LimeUtil.getQuarter();
console.log(res); // 输出：一季度
```

---

<!-- 当前日期是所在 周，月，年 的第几天 -->

## 当前日期是所在 周，月，年 的第几天

### \_.getDayOfWeek(date = new Date())

获得当前日期是所在周的第几天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回天数

- #### 示例

```javascript
// 默认
let res = LimeUtil.getDayOfWeek();
console.log(res); // 输出：1
```

---

### \_.getDayOfMonth(date = new Date())

获得当前日期是所在月的第几天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回天数

- #### 示例

```javascript
let res = LimeUtil.getDayOfMonth();
console.log(res); // 输出：13
```

---

### \_.getDayOfYear(date = new Date())

获得当前日期是所在月的第几天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回天数

- #### 示例

```javascript
let res = LimeUtil.getDayOfYear();
console.log(res); // 输出：348
```

---

<!-- 当前日期是所在 月，年的第几周 -->

## 当前日期是所在 月，年的第几周

### \_.getWeekOfMonth(date = new Date())

获得当前日期是所在月的第几周

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回周数

- #### 示例

```javascript
let res = LimeUtil.getWeekOfMonth();
console.log(res); // 输出：3
```

---

### \_.getWeekOfYear(date = new Date())

获得当前日期是所在年的第几周

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回周数

- #### 示例

```javascript
let res = LimeUtil.getWeekOfYear();
console.log(res); // 输出：51
```

---

<!-- 当前日期所在 周，月 的第一天和最后一天 -->

## 当前日期所在 周，月 的第一天和最后一天

### \_.getFirstDayOfWeek(date = new Date())

获得当前日期所在周的第一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.getFirstDayOfWeek((date = new Date()));
console.log(res); // 输出：2021-12-13
```

---

### \_.getLastDayOfWeek(date = new Date())

获得当前日期所在周的最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.getLastDayOfWeek();
console.log(res); // 输出：2021-12-19
```

---

### \_.getFirstDayOfMonth(date = new Date())

获得当前日期所在月的第一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.getFirstDayOfMonth();
console.log(res); // 输出：2021-12-01
```

---

### \_.getLastDayOfMonth(date = new Date())

获得当前日期所在月的最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.getLastDayOfMonth();
console.log(res); // 输出：2021-12-31
```

---

<!-- 获得当前 月，年 的总天数 -->

## 获得当前 月，年 的总天数

### \_.getFullDayOfMonth(date = new Date())

获得当前日期所在月总共多少天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回总天数

- #### 示例

```javascript
let res = LimeUtil.getFullDayOfMonth();
console.log(res); // 输出：31
```

---

### \_.getFullDayOfYear(date = new Date())

获得当前日期所在年总共多少天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回总天数

- #### 示例

```javascript
let res = LimeUtil.getFullDayOfYear();
console.log(res); // 输出：365
```

---

<!-- 过去时间和剩余时间的显示 -->

## 过去时间和剩余时间的显示

### \_.getPastTime(date, lang = "zh")

获得过去时间的字符串显示  
`例如：刚刚，1分钟前，1小时前等`

- #### 参数

  `date` {Date|String} 日期或日期字符串  
  `lang` {String} 字符串语言，zh 和 en，默认 zh

- #### 返回值

  {String} 返回字符串

- #### 示例

```javascript
// 日期
let res = LimeUtil.getPastTime(new Date("2021-12-12"));
console.log(res); // 输出：1天前

// 日期字符串
let res = LimeUtil.getPastTime("2021-12-12");
console.log(res); // 输出：1天前

// 语言 英文
let res = LimeUtil.getPastTime("2021-12-12", "en");
console.log(res); // 输出：1 day ago
```

---

### \_.getOverTime(date)

获得剩余时间的字符串显示  
`例如：1天 10小时 20分钟 30秒`

- #### 参数

  `date` {Date|String} 日期或日期字符串

- #### 返回值

  {String} 返回字符串

- #### 示例

```javascript
let res = LimeUtil.getOverTime("2021-12-14");
console.log(res); // 输出：0天 7小时 10分钟 48秒
```

---

<!-- 计算日期加减 年，月，日，时，分，秒 -->

## 计算日期加减 年，月，日，时，分，秒

### \_.addYear(date = new Date(), num = +1)

日期加减年

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
// 默认
let res = LimeUtil.addYear();
console.log(res); // 输出：日期对象

// 减去
let res = LimeUtil.addYear(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

### \_.addMonth(date = new Date(), num = +1)

日期加减月

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
// 默认
let res = LimeUtil.addMonth();
console.log(res); // 输出：日期对象

// 减去
let res = LimeUtil.addMonth(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

### \_.addDate(date = new Date(), num = +1)

日期加减天

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
// 默认
let res = LimeUtil.addDate();
console.log(res); // 输出：日期对象

// 减去
let res = LimeUtil.addDate(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

### \_.addHours(date = new Date(), num = +1)

日期加减小时

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
// 默认
let res = LimeUtil.addHours();
console.log(res); // 输出：日期对象

// 减去
let res = LimeUtil.addHours(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

### \_.addMinutes(date = new Date(), num = +1)

日期加减分钟

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
// 默认
let res = LimeUtil.addMinutes();
console.log(res); // 输出：日期对象

// 减去
let res = LimeUtil.addMinutes(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

### \_.addSeconds(date = new Date(), num = +1)

日期加减秒

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
// 默认
let res = LimeUtil.addSeconds();
console.log(res); // 输出：日期对象

// 减去
let res = LimeUtil.addSeconds(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

<!-- 计算两个日期相差 -->

## 计算两个日期相差

### \_.diffDay(date1, date2)

计算两个日期相差的天数，不满一天为 0  
`支持：日期字符串，日期对象，时间戳，Unix时间戳`

- #### 参数

  `date1` {String|Date|Timestamp|UnixTimestamp} 第一个日期  
  `date2` {String|Date|Timestamp|UnixTimestamp} 第二个日期

- #### 返回值

  {Number} 返回两个日期相差的天数，结果为正数或者负数

- #### 示例

```javascript
// 大于0
let res = LimeUtil.diffDay("2021-12-10", "2021-12-11");
console.log(res); // 输出： 1

// 等于0
let res = LimeUtil.diffDay("2021-12-11", "2021-12-11");
console.log(res); // 输出： 0

// 小于0
let res = LimeUtil.diffDay("2021-12-11", "2021-12-10");
console.log(res); // 输出： -1
```

---

### \_.diffWeek(date1, date2)

计算两个日期相差的周数，不满一周为 0  
`支持：日期字符串，日期对象，时间戳，Unix时间戳`

- #### 参数

  `date1` {String|Date|Timestamp|UnixTimestamp} 第一个日期  
  `date2` {String|Date|Timestamp|UnixTimestamp} 第二个日期

- #### 返回值

  {Number} 返回两个日期相差的周数，结果为正数或者负数

- #### 示例

```javascript
// 大于0
let res = LimeUtil.diffWeek("2021-12-01", "2021-12-11");
console.log(res); // 输出： 1

// 不满一周等于0
let res = LimeUtil.diffWeek("2021-12-11", "2021-12-11");
console.log(res); // 输出： 0

// 小于0
let res = LimeUtil.diffWeek("2021-12-10", "2021-12-01");
console.log(res); // 输出： -1
```

---

### \_.diffMonth(date1, date2)

计算两个日期相差的月数，不满一月为 0  
`支持：日期字符串，日期对象，时间戳，Unix时间戳`

- #### 参数

  `date1` {String|Date|Timestamp|UnixTimestamp} 第一个日期  
  `date2` {String|Date|Timestamp|UnixTimestamp} 第二个日期

- #### 返回值

  {Number} 返回两个日期相差的月数，结果为正数或者负数

- #### 示例

```javascript
// 大于0
let res = LimeUtil.diffMonth("2021-11-10", "2021-12-11");
console.log(res); // 输出： 1

// 等于0
let res = LimeUtil.diffMonth("2021-12-11", "2021-12-11");
console.log(res); // 输出： 0

// 小于0
let res = LimeUtil.diffMonth("2021-12-11", "2021-11-10");
console.log(res); // 输出： -1
```

---

### \_.diffYear(date1, date2)

计算两个日期相差的年数，不满一年为 0  
`支持：日期字符串，日期对象，时间戳，Unix时间戳`

- #### 参数

  `date1` {String|Date|Timestamp|UnixTimestamp} 第一个日期  
  `date2` {String|Date|Timestamp|UnixTimestamp} 第二个日期

- #### 返回值

  {Number} 返回两个日期相差的月数，结果为正数或者负数

- #### 示例

```javascript
// 大于0
let res = LimeUtil.diffYear("2020-11-10", "2021-12-11");
console.log(res); // 输出： 1

// 等于0
let res = LimeUtil.diffYear("2021-12-11", "2021-12-11");
console.log(res); // 输出： 0

// 小于0
let res = LimeUtil.diffYear("2021-12-11", "2020-11-10");
console.log(res); // 输出： -1
```

---

<!-- 获得两个日期之间数组 -->

## 获得两个日期之间数组

### \_.betweenDays(date1, date2)

获得两个日期之间的年月日数组  
`支持：日期字符串，日期对象，时间戳，Unix时间戳`

- #### 参数

  `date1` {String|Date|Timestamp|UnixTimestamp} 第一个日期  
  `date2` {String|Date|Timestamp|UnixTimestamp} 第二个日期

- #### 返回值

  {Array} 返回年月日数组

- #### 示例

```javascript
let res = LimeUtil.betweenDays("2021-12-11", "2021-12-13");
console.log(res); // 输出： ['2021-12-11', '2021-12-12', '2021-12-13']
```

---

### \_.betweenMonths(date1, date2)

获得两个日期之间的年月数组  
`支持：日期字符串，日期对象，时间戳，Unix时间戳`

- #### 参数

  `date1` {String|Date|Timestamp|UnixTimestamp} 第一个日期  
  `date2` {String|Date|Timestamp|UnixTimestamp} 第二个日期

- #### 返回值

  {Array} 返回年月数组

- #### 示例

```javascript
let res = LimeUtil.betweenMonths("2021-11-11", "2021-12-13");
console.log(res); // 输出： ['2021-11', '2021-12']
```

---

### \_.betweenYears(date1, date2)

获得两个日期之间的年数组  
`支持：日期字符串，日期对象，时间戳，Unix时间戳`

- #### 参数

  `date1` {String|Date|Timestamp|UnixTimestamp} 第一个日期  
  `date2` {String|Date|Timestamp|UnixTimestamp} 第二个日期

- #### 返回值

  {Array} 返回年数组

- #### 示例

```javascript
let res = LimeUtil.betweenYears("2020-11-11", "2021-12-13");
console.log(res); // 输出： [2020, 2021]
```

---

<!-- 比较日期大小 -->

## 比较日期大小

### \_.compareDate(date1, date2)

比较两个日期的大小  
`支持：日期字符串，日期对象，时间戳，Unix时间戳`

- #### 参数

  `date1` {String|Date|Timestamp|UnixTimestamp} 第一个日期  
  `date2` {String|Date|Timestamp|UnixTimestamp} 第二个日期

- #### 返回值

  {Boolean} 返回 true：第一个日期大于第二个日期；false：第一个日期小于第二个日期；

- #### 示例

```javascript
let res = LimeUtil.compareDate("2021-12-11", "2021-12-10");
console.log(res); // 输出： true
```

---

<!-- 格式化和解析日期 -->

## 格式化和解析日期

### \_.formatDate(date = new Date(), format = "yyyy-MM-dd")

格式化日期字符串  
`支持：日期字符串，日期对象，时间戳，Unix时间戳`

- #### format 格式

```javascript
// 年-月-日
yyyy-MM-dd // 输出：2021-12-13
yyyy-MM-dd HH:mm:ss // 输出：2021-12-13 17:10:10
yyyy-MM-dd hh:mm:ss // 输出：2021-12-13 05:10:10

// 年/月/日
yyyy/MM/dd // 输出：2021/12/13
yyyy/MM/dd HH:mm:ss // 输出：2021/12/13 17:10:10
yyyy/MM/dd hh:mm:ss // 输出：2021/12/13 05:10:10

// 日/月/年
dd/MM/yyyy // 26/11/2021
dd/MM/yyyy HH:mm:ss // 输出：26/11/2021 17:10:10
dd/MM/yyyy hh:mm:ss // 输出：26/11/2021 05:10:10

// 月/日/年
MM/dd/yyyy // 输出：11/26/2021
MM/dd/yyyy HH:mm:ss // 输出：11/26/2021 17:10:10
MM/dd/yyyy hh:mm:ss // 输出：11/26/2021 05:10:10

// 时分秒
HH:mm:ss // 输出：17:10:10
hh:mm:ss // 输出：05:10:10

// 星期和季度
yyyy-MM-dd HH:mm:ss EE // 输出：2021-12-11 17:33:00 周六
yyyy-MM-dd HH:mm:ss E q // 输出：2021-12-11 17:33:00 六 四季度
yyyy-MM-dd HH:mm:ss EE qq // 输出：2021-12-11 17:33:00 周六 第四季度
yyyy-MM-dd HH:mm:ss EEE qq // 输出：2021-12-11 17:33:00 星期六 第四季度
yyyy-MM-dd hh:mm:ss E q // 输出：2021-12-11 05:33:00 六 四季度
```

- #### 参数

  `date1` {String|Date|Timestamp|UnixTimestamp} 日期参数  
  `format` {String} 转化格式，具体参考上面的 <span style="color:#ff9900">`format 格式`</span>，默认是 <span style="color:#ff9900">`yyyy-MM-dd`</span>

- #### 返回值

  {String} 返回格式化后的日期字符串

- #### 示例

```javascript
// 使用方法，具体格式化参数以及结果参考上面的 format 格式
let res = LimeUtil.formatDate("2021-12-10", "yyyy-MM-dd HH:mm:ss");
console.log(res); // 输出： 2021-12-10 17:10:10
```

---

### \_.parseDate(value)

解析为日期对象  
`支持：日期字符串，时间戳，Unix时间戳`

- #### 参数

  `date` {String|Timestamp|UnixTimestamp} 日期参数；  
  如果是字符串格式，仅支持：<span style="color:#ff9900">`yyyy-MM-dd`</span>，</span><span style="color:#ff9900">`yyyy-MM-dd HH:mm:ss`</span>，<span style="color:#ff9900">`yyyy/MM/dd`</span>，<span style="color:#ff9900">`yyyy/MM/dd HH:mm:ss`</span>，<span style="color:#ff9900">`MM/dd/yyyy`</span>，<span style="color:#ff9900">`MM/dd/yyyy HH:mm:ss`</span>，以上是 js 中 <span style="color:#ff9900">`new Date()`</span>支持的格式，否则会报错 <span style="color:#ed4014">`Invalid Date`</span>。

- #### 返回值

  {Date} 返回转换后的日期

- #### 示例

```javascript
// 日期字符串，仅支持以下几种，在参数中有说明
// yyyy-MM-dd
let res = LimeUtil.parseDate("2021-12-10");
console.log(res); // 输出：Fri Dec 10 2021 00:00:00 GMT+0800 (中国标准时间)
// yyyy-MM-dd HH:mm:ss
let res = LimeUtil.parseDate("2021-12-10 15:10:10");
console.log(res); // 输出：Fri Dec 10 2021 15:10:10 GMT+0800 (中国标准时间)
// yyyy/MM/dd
let res = LimeUtil.parseDate("2021-12-10");
console.log(res); // 输出：Fri Dec 10 2021 00:00:00 GMT+0800 (中国标准时间)
// yyyy/MM/dd HH:mm:ss
let res = LimeUtil.parseDate("2021-12-10 15:10:10");
console.log(res); // 输出：Fri Dec 10 2021 15:10:10 GMT+0800 (中国标准时间)
// MM/dd/yyyy
let res = LimeUtil.parseDate("12/10/2021");
console.log(res); // 输出：Fri Dec 10 2021 00:00:00 GMT+0800 (中国标准时间)
// MM/dd/yyyy HH:mm:ss
let res = LimeUtil.parseDate("12/10/2021 15:10:10");
console.log(res); // 输出：Fri Dec 10 2021 15:10:10 GMT+0800 (中国标准时间)

// 时间戳
let res = LimeUtil.parseDate(1639388213194);
console.log(res); // 输出：Mon Dec 13 2021 17:36:53 GMT+0800 (中国标准时间)

// Unix时间戳
let res = LimeUtil.parseDate(1639388270);
console.log(res); // 输出：Mon Dec 13 2021 17:37:50 GMT+0800 (中国标准时间)
```

---
