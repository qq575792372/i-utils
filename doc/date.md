# 日期 Date

## 日期格式

| 标识   | 描述             | 示例    |
|------|----------------|-------|
| yy   | 年，两位数          | 24    |
| yyyy | 年，四位数          | 2024  |
| M    | 月，从1开始         | 1-12  |
| MM   | 月，从1开始，会补齐到两位  | 01-12 |
| d    | 日，从1开始         | 1-31  |
| dd   | 日，从1开始，会补齐到两位  | 01-31 |
| h    | 小时，12小时制       | 1-12  |
| HH   | 小时，24小时制       | 01-24 |
| m    | 分钟，从1开始        | 1-59  |
| mm   | 分钟，从1开始，会补齐到两位 | 01-59 |
| s    | 秒数，从1开始        | 1-59  |
| ss   | 秒数，从1开始，会补齐到两位 | 01-59 |
| SSS  | 毫秒数，共3位        | 123   |
| a    | 上午/下午，英文小写     | am/pm |
| A    | 上午/下午，英文大写     | AM/PM |
| aa   | 上午/下午，中文       | 上午/下午 |
| AA   | 上午/下午，中文       | 上午/下午 |
| E    | 周，1位字符         | 六     |
| EE   | 周，2位字符         | 周六    |
| EEE  | 周，3位字符         | 星期六   |
| Q    | 季度，1位字符        | 三     |
| QQ   | 季度，3位字符        | 三季度   |
| QQQ  | 季度，4位字符        | 第三季度  |

常用日期格式示例：

```bash
yyyy-MM-dd  # 输出：2024-06-16
yyyy/MM/dd # 输出：2024/06/16
yyyy.MM.dd # 输出：2024-06-16
yyyy年MM月dd日 # 输出：2024年06月16日

yyyy-MM-dd HH:mm:ss # 输出：2024-06-16 15:48:55
yyyy/MM/dd HH:mm:ss # 输出：2024/06/16 15:48:55
yyyy.MM.dd HH:mm:ss # 输出：2024-06-16
yyyy-MM-dd h:mm:ss # 输出：2024-06-16 3:49:53
yyyy年MM月dd日 HH时mm分ss秒 # 输出：2024年06月16日 17时30分01秒

yy-MM-dd # 输出：24-06-16
yy/MM/dd # 输出：24/06/16
yy.MM.dd # 输出：24.06.16
yy年MM月dd日 # 输出：24年06月16日

dd-MM-yyyy # 输出：16-06-2024
dd/MM/yyyy # 输出：16/06/2024
dd.MM.yyyy # 输出：16.06.2024

HH:mm:ss # 输出：17:35:22
HH:mm:ss:SSS # 输出：17:35:22:764
HH时mm分ss秒 # 输出：17时35分34秒
HH时mm分ss秒SSS毫秒 # 输出：17时36分37秒764毫秒

yyyy-MM-dd HH:mm # 输出：2024-06-16 17:35
yyyy-MM-dd HH:mm:ss.SSS # 输出：2024-06-16 17:35:58.810

yyyyMMdd # 输出：20240616
yyyyMMddHHmmss # 输出：20240616173723
yyyyMMddHHmmssSSS # 输出：20240616173730304

yyyy-MM-dd A # 输出：2024-06-16 PM
yyyy-MM-dd AA # 输出：2024-06-16 下午

yyyy-MM-dd A EE # 输出：2024-06-16 PM 周日
yyyy-MM-dd A EEE # 输出：2024-06-16 PM 星期天
yyyy-MM-dd A EEE QQQ # 输出：2024-06-16 PM 星期日 第二季度
```

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
console.log(res); // 输出：2024-06-16
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
console.log(res); // 输出：2024-01-16
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
console.log(res); // 输出：2024-01-16
```

---

### \_.lastWeek(date = new Date())

上周（7天前日期）

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.lastWeek();
console.log(res); // 输出：2021-12-06
```

### \_.nextWeek(date = new Date())

下周（7天后日期）

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.nextWeek();
console.log(res); // 输出：2021-12-20
```

---

### \_.lastMonth(date = new Date())

上个月（30 天前日期）

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.prevMonth();
console.log(res); // 输出：2021-11-13
```

---

### \_.nextMonth(date = new Date())

下个月（30 天后日期）

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.nextMonth();
console.log(res); // 输出：2022-01-12
```

---

### \_.lastYear(date = new Date())

去年（365 天前日期）

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.prevYear();
console.log(res); // 输出：2020-12-13
```

---

### \_.nextYear(date = new Date())

明年（365 天后日期）

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.nextYear();
console.log(res); // 输出：2022-12-13
```

---

## 判断当前日期

### \_.isAM(date = new Date())

是否为上午

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isAM();
console.log(res); // 输出：true
```

---

### \_.isPM(date = new Date())

是否为下午

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isPM();
console.log(res); // 输出：true
```

---

### \_.isToday(date = new Date())

是否为今天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
// 日期
let res = LimeUtil.isToday(new Date());
console.log(res); // 输出：true
```

---

### \_.isYesterday(date = new Date())

是否为昨天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
// 日期
let res = LimeUtil.isToday(new Date("2024-06-12"));
console.log(res); // 输出：true
```

---

### \_.isBeforeYesterday(date = new Date())

是否为前天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
// 日期
let res = LimeUtil.isBeforeYesterday(new Date("2024-06-12"));
console.log(res); // 输出：true
```

---

### \_.isTomorrow(date = new Date())

是否为明天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
// 日期
let res = LimeUtil.isTomorrow(new Date("2024-06-12"));
console.log(res); // 输出：true
```

---

### \_.isAfterTomorrow(date = new Date())

是否为后天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
// 日期
let res = LimeUtil.isAfterTomorrow(new Date("2024-06-12"));
console.log(res); // 输出：true
```

---

### \_.isWorkday(date = new Date())

是否为工作日

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isWorkday(new Date("2024-06-12"));
console.log(res); // 输出：true
```

---

### \_.isWeekend(date = new Date())

是否为周末（周六和周日）

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isWeekend(new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

### \_.isFirstDayOfWeek(date = new Date())

是否为本周第一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isFirstDayOfWeek(new Date("2024-06-17"));
console.log(res); // 输出：true
```

---

### \_.isLastDayOfWeek(date = new Date())

是否为本周最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isLastDayOfWeek(new Date("2024-06-16"));
console.log(res); // 输出：true
```

---

### \_.isFirstDayOfMonth(date = new Date())

是否为本月第一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isFirstDayOfMonth(new Date("2024-06-01"));
console.log(res); // 输出：true
```

---

### \_.isLastDayOfMonth(date = new Date())

是否为本月最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isLastDayOfMonth(new Date("2024-06-30"));
console.log(res); // 输出：true
```

---

### \_.isFirstDayOfYear(date = new Date())

是否为本年第一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isFirstDayOfYear(new Date("2024-01-01"));
console.log(res); // 输出：true
```

---

### \_.isLastDayOfYear(date = new Date())

是否为本年最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isLastDayOfYear(new Date("2024-12-31"));
console.log(res); // 输出：true
```

---

## 判断年

### \_.isLeapYear(date = new Date())

是否为闰年  
`闰年366天，平年365天`

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isLeapYear();
console.log(res); // 输出：true
```

---

### \_.isCommonYear(date = new Date())

是否为平年  
`闰年366天，平年365天`

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isCommonYear();
console.log(res); // 输出：false
```

---

## 比较日期区间

### \_.isBefore(startDate, endDate = new Date())

是否在日期之前

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isBefore(new Date("2024-06-14"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

### \_.isAfter(startDate, endDate = new Date())

是否在日期之后

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isAfter(new Date("2024-06-17"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

### \_.isBetween(date, startDate, endDate)

是否在两个日期之间

- #### 参数

  `date` {Date} 要比较的日期
  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isBetween(new Date("2024-06-16"), new Date("2024-06-17"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

## 日期是否相同

### \_.isSame(startDate, endDate)

两个日期是否为同一天

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isSame(new Date("2024-06-15"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

### \_.isSameWeek(startDate, endDate)

两个日期是否为同一周

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isSameWeek(new Date("2024-06-15"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

### \_.isSameMonth(startDate, endDate)

两个日期是否为同一个月

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isSameMonth(new Date("2024-06-15"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

### \_.isSameYear(startDate, endDate)

两个日期是否为同一年

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isSameYear(new Date("2024-06-15"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

## 比较两个日期相同 或 之前/之后

### \_.isSameOrBefore(startDate, endDate)

两个日期是否相同或之前

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isSameOrBefore(new Date("2024-06-14"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

### \_.isSameOrAfter(startDate, endDate)

两个日期是否相同或之后

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.isSameOrAfter(new Date("2024-06-17"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

## 获取 日期/时间戳/周/季度

### \_.getNow()

获得此刻的日期

- #### 参数

  无

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
let res = LimeUtil.getNow();
console.log(res); // 输出：Sun Jun 16 2024 19:54:48 GMT+0800 (中国标准时间)
```

---

### \_.getDate(date = new Date(), format = "yyyy-MM-dd")

获得当前日期字符串

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `format` {String} 日期字符串格式

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
// 默认
let res = LimeUtil.getDate();
console.log(res); // 输出：2024-06-12

// 指定日期格式
let res = LimeUtil.getDate(new Date("2024-06-12"), "yyyy/MM/dd");
console.log(res); // 输出：2024/06/12
```

---

### \_.getDateTime(date = new Date(), format = "yyyy-MM-dd HH:mm:ss")

获得当前日期时间字符串

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `format` {String} 日期时间字符串格式

- #### 返回值

  {String} 返回日期时间字符串

- #### 示例

```javascript
// 默认
let res = LimeUtil.getDateTime();
console.log(res); // 输出：2024-06-12 10:10:30

// 指定日期和分隔符
let res = LimeUtil.getDateTime(new Date("2024-06-12"), "yyyy/MM/dd HH:mm:ss");
console.log(res); // 输出：2024-06-12 10:10:30
```

---

### \_.getTimestamp(date = new Date())

获取当前时间戳

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回时间戳

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

获取当前Unix时间戳

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回Unix时间戳

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

### \_.getDateObject(date = new Date())

获得当前日期的对象形式

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Object} 返回日期的对象形式  
  `返回的对象含义：{year:年，month：月，date：日，hours：时，minutes：分，seconds：秒，milliseconds：毫秒}`

- #### 示例

```javascript
// 默认
let res = LimeUtil.getDateObject();
console.log(res); // 输出： { "year": 2024,  "month": 6, "date": 16, "hours": 20, "minutes": 1, "seconds": 30, "milliseconds": 521}
```

---

### \_.getDateArray(date = new Date())

获得当前日期的数组形式

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Object} 返回日期的数组形式  
  `返回的数组含义：[年，月，日，时，分，秒，毫秒]`

- #### 示例

```javascript
// 默认
let res = LimeUtil.getDateArray();
console.log(res); // 输出： [2024, 6, 16, 20, 6, 42, 110, 0, 3]
```

---

### \_.getWeek(date = new Date(), format = "E", lang = "zh")

获得当前日期是周几

- #### 参数

  `date` {Date} 日期参数，默认当前日期
  `format` {String} 周格式化结果：E：如“日”，EE：如“周日”, EEE：如“星期日”；默认为E，为空则返回数字
  `lang` {String} 语言zh和en，默认zh

- #### 返回值

  {Number,String} 返回周几，会根据语言返回

- #### 示例

```javascript
// 默认
let res = LimeUtil.getWeek();
console.log(res); // 输出：六

// 中文周几
let res = LimeUtil.getWeek(new Date(), (format = "E"), (lang = "zh"));
console.log(res); // 输出：六
let res = LimeUtil.getWeek(new Date(), (format = "EE"), (lang = "zh"));
console.log(res); // 输出：周六
let res = LimeUtil.getWeek(new Date(), (format = "EEE"), (lang = "zh"));
console.log(res); // 输出：星期六

// 英文周几
let res = LimeUtil.getWeek(new Date(), (format = "E"), (lang = "en"));
console.log(res); // 输出：Sa
let res = LimeUtil.getWeek(new Date(), (format = "EE"), (lang = "en"));
console.log(res); // 输出：Sat
let res = LimeUtil.getWeek(new Date(), (format = "EEE"), (lang = "en"));
console.log(res); // 输出：Saturday
```

---

### \_.getQuarter(date = new Date(), format = "Q", lang = "zh")

获得当前日期是第几季度

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `format` {String} 季度格式化结果：Q：如“一”, QQ：如“一季度”；QQQ：如“第一季度”；默认为Q，为空则返回数字
  `lang` {String} 语言zh和en，默认zh

- #### 返回值

  {String} 返回第几季度，会根据语言返回

- #### 示例

```javascript
// 默认
let res = LimeUtil.getQuarter();
console.log(res); // 输出：六

// 中文周几
let res = LimeUtil.getWeek(new Date(), (format = "Q"), (lang = "zh"));
console.log(res); // 输出：一
let res = LimeUtil.getQuarter(new Date(), (format = "QQ"), (lang = "zh"));
console.log(res); // 输出：一季度
let res = LimeUtil.getQuarter(new Date(), (format = "QQQ"), (lang = "zh"));
console.log(res); // 输出：第一季度

// 英文周几
let res = LimeUtil.getQuarter(new Date(), (format = "Q"), (lang = "en"));
console.log(res); // 输出：Q1
let res = LimeUtil.getQuarter(new Date(), (format = "QQ"), (lang = "en"));
console.log(res); // 输出：Q1th
let res = LimeUtil.getQuarter(new Date(), (format = "QQQ"), (lang = "en"));
console.log(res); // 输出：quarter 1st
```

---

## 当前日期是所在 周/月/年 的第几天

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

获得当前日期是所在年的第几天

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

## 当前日期的周是所在 月/年 的第几周

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

## 当前日期所在 周/月/年 共几天

### \_.getDaysOfWeek(date = new Date())

获得当前日期所在的周共几天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回天数

- #### 示例

```javascript
let res = LimeUtil.getDaysOfWeek();
console.log(res); // 输出：7
```

---

### \_.getDaysOfMonth(date = new Date())

获得当前日期所在的月共几天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回天数

- #### 示例

```javascript
let res = LimeUtil.getDaysOfMonth();
console.log(res); // 输出：31
```

---

### \_.getDaysOfYear(date = new Date())

获得当前日期所在的年共几天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回天数

- #### 示例

```javascript
let res = LimeUtil.getDaysOfYear();
console.log(res); // 输出：365
```

---

## 当前周所在 月/年 共几周

### \_.getWeeksOfMonth(date = new Date())

获得当前日期是所在月的第几周

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回周数

- #### 示例

```javascript
let res = LimeUtil.getWeeksOfMonth((date = new Date()));
console.log(res); // 输出：4
```

---

### \_.getWeeksOfYear(date = new Date())

获得当前日期是所在年的第几周

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回周数

- #### 示例

```javascript
let res = LimeUtil.getWeeksOfYear((date = new Date()));
console.log(res); // 输出：12
```

---

## 当前日期所在 周/月/年 的 第一天/最后一天/所有天数数组

### \_.getFirstDateOfWeek(date = new Date())

获得当前日期所在周的第一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.getFirstDateOfWeek();
console.log(res); // 输出：2024-06-10
```

---

### \_.getLastDateOfWeek(date = new Date())

获得当前日期所在周的最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.getLastDateOfWeek();
console.log(res); // 输出：2024-06-16
```

---

### \_.getFullDateOfWeek(date = new Date())

获得当前日期所在周的最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.getFullDateOfWeek();
console.log(res); // 输出：['2024-06-10','2024-06-11','2024-06-12','2024-06-13','2024-06-14','2024-06-15','2024-06-16',]
```

---

### \_.getFirstDateOfMonth(date = new Date())

获得当前日期所在月的第一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.getFirstDateOfMonth();
console.log(res); // 输出：2021-12-01
```

---

### \_.getLastDateOfMonth(date = new Date())

获得当前日期所在月的最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.getLastDateOfMonth();
console.log(res); // 输出：2021-12-31
```

---

### \_.getFullDateOfMonth(date = new Date())

获取当前日期所在月的所有日期

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.getFullDateOfMonth();
console.log(res); // 输出：['2024-06-01', ..., '2024-06-30']
```

---

### \_.getFirstDateOfYear(date = new Date())

获取当前日期所在年的第一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.getFirstDateOfYear();
console.log(res); // 输出：2024-01-01
```

---

### \_.getLastDateOfYear(date = new Date())

获取当前日期所在年的最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.getLastDateOfYear();
console.log(res); // 输出：2024-12-31
```

---

### \_.getFullDateOfYear(date = new Date())

获取当前日期所在年的所有日期

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
let res = LimeUtil.getFullDateOfYear();
console.log(res); // 输出：['2024-01-01', ..., '2024-12-31']
```

---

## 计算两个日期相差

### \_.getDiffDay(startDate, endDate)

算两个日期相差的天数，不满一天为0

- #### 参数

  `startDate` {Date} 开始日期  
  `endDate` {Date} 结束日期

- #### 返回值

  {Number} 返回两个日期相差的天数，结果为正数或者负数

- #### 示例

```javascript
// 大于0
let res = LimeUtil.getDiffDay("2021-12-10", "2021-12-11");
console.log(res); // 输出： 1

// 等于0
let res = LimeUtil.getDiffDay("2021-12-11", "2021-12-11");
console.log(res); // 输出： 0

// 小于0
let res = LimeUtil.getDiffDay("2021-12-11", "2021-12-10");
console.log(res); // 输出： -1
```

---

### \_.getDiffWeek(startDate, endDate)

算两个日期相差的周数，不满一周为0

- #### 参数

  `startDate` {Date} 开始日期  
  `endDate` {Date} 结束日期

- #### 返回值

  {Number} 返回两个日期相差的周数，结果为正数或者负数

- #### 示例

```javascript
// 大于0
let res = LimeUtil.getDiffWeek("2021-12-01", "2021-12-11");
console.log(res); // 输出： 1

// 不满一周等于0
let res = LimeUtil.getDiffWeek("2021-12-11", "2021-12-11");
console.log(res); // 输出： 0

// 小于0
let res = LimeUtil.getDiffWeek("2021-12-10", "2021-12-01");
console.log(res); // 输出： -1
```

---

### \_.getDiffMonth(startDate, endDate)

计算两个日期相差的月数，不满一月为0

- #### 参数

  `startDate` {Date} 开始日期  
  `endDate` {Date} 结束日期

- #### 返回值

  {Number} 返回两个日期相差的月数，结果为正数或者负数

- #### 示例

```javascript
// 大于0
let res = LimeUtil.getDiffMonth("2024-06-12", "2021-12-11");
console.log(res); // 输出： 1

// 等于0
let res = LimeUtil.getDiffMonth("2021-12-11", "2021-12-11");
console.log(res); // 输出： 0

// 小于0
let res = LimeUtil.getDiffMonth("2021-12-11", "2024-06-12");
console.log(res); // 输出： -1
```

---

### \_.getDiffYear(startDate, endDate)

计算两个日期相差的年数，不满一年为0

- #### 参数

  `startDate` {Date} 开始日期  
  `endDate` {Date} 结束日期

- #### 返回值

  {Number} 返回两个日期相差的年数，结果为正数或者负数

- #### 示例

```javascript
// 大于0
let res = LimeUtil.getDiffYear("2020-11-10", "2021-12-11");
console.log(res); // 输出： 1

// 等于0
let res = LimeUtil.getDiffYear("2021-12-11", "2021-12-11");
console.log(res); // 输出： 0

// 小于0
let res = LimeUtil.getDiffYear("2021-12-11", "2020-11-10");
console.log(res); // 输出： -1
```

---

## 获得两个日期之间 年月日/年月/年 数组

### \_.getBetweenDates(startDate, endDate)

获得两个日期之间的年月日数组

- #### 参数

  `startDate` {Date} 开始日期  
  `endDate` {Date} 结束日期

- #### 返回值

  {Array} 返回年月日数组

- #### 示例

```javascript
let res = LimeUtil.getBetweenDates("2021-12-11", "2024-06-12");
console.log(res); // 输出： ['2021-12-11', '2024-01-16', '2024-06-12']
```

---

### \_.getBetweenMonths(startDate, endDate)

获得两个日期之间的年月数组

- #### 参数

  `startDate` {Date} 开始日期  
  `endDate` {Date} 结束日期

- #### 返回值

  {Array} 返回年月数组

- #### 示例

```javascript
let res = LimeUtil.getBetweenMonths("2021-11-11", "2024-06-12");
console.log(res); // 输出： ['2021-11', '2021-12']
```

---

### \_.getBetweenYears(startDate, endDate)

获得两个日期之间的年数组

- #### 参数

  `startDate` {Date} 开始日期  
  `endDate` {Date} 结束日期

- #### 返回值

  {Array} 返回年数组

- #### 示例

```javascript
let res = LimeUtil.betweenYears("2020-11-11", "2024-06-12");
console.log(res); // 输出： [2020, 2021]
```

---

## 过去时间和剩余时间的显示

### \_.getPastTime(date, lang = "zh")

获得过去时间的字符串显示  
`例如：刚刚，1分钟前，1小时前等`

- #### 参数

  `date` {Date} 日期参数  
  `lang` {String} 语言zh和en，默认zh

- #### 返回值

  {String} 返回字符串

- #### 示例

```javascript
// 日期
let res = LimeUtil.getPastTime(new Date("2024-01-16"));
console.log(res); // 输出：1天前

// 日期字符串
let res = LimeUtil.getPastTime("2024-01-16");
console.log(res); // 输出：1天前

// 语言 英文
let res = LimeUtil.getPastTime("2024-01-16", "en");
console.log(res); // 输出：1 day ago
```

---

### \_.getOverTime(date, lang = "zh")

获得剩余时间的字符串显示  
`例如：1天 10小时 20分钟 30秒`

- #### 参数

  `date` {Date} 日期参数  
  `lang` {String} 语言zh和en，默认zh

- #### 返回值

  {String} 返回字符串

- #### 示例

```javascript
let res = LimeUtil.getOverTime("2021-12-14");
console.log(res); // 输出：0天 7时 10分 48秒
```

---

## 通过日期获得 星座/生肖

### \_.getZodiac(date, lang = "zh")

通过日期获得星座

- #### 参数

  `date` {Date} 日期参数  
  `lang` {String} 语言zh和en，默认zh

- #### 返回值

  {String} 返回星座

- #### 示例

```javascript
let res = LimeUtil.getZodiac("2024-06-17");
console.log(res); // 输出：双子座
```

---

### \_.getChineseZodiac(date, lang = "zh")

通过日期获得生肖

- #### 参数

  `date` {Date} 日期参数  
  `lang` {String} 语言zh和en，默认zh

- #### 返回值

  {String} 返回生肖

- #### 示例

```javascript
let res = LimeUtil.getChineseZodiac("2024-06-17");
console.log(res); // 输出：龙
```

---

## 计算日期加减 年，月，日，时，分，秒，周，季度

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

### \_.addMillisecond(date = new Date(), num = +100)

日期加减毫秒

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +100

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
// 默认
let res = LimeUtil.addMillisecond();
console.log(res); // 输出：日期对象

// 减去
let res = LimeUtil.addMillisecond(new Date(), -100);
console.log(res); // 输出：日期对象
```

---

### \_.addWeek(date = new Date(), num = +1)

日期加减周

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
// 默认
let res = LimeUtil.addWeek();
console.log(res); // 输出：日期对象

// 减去
let res = LimeUtil.addWeek(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

### \_.addQuarter(date = new Date(), num = +1)

日期加减季度

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
// 默认
let res = LimeUtil.addQuarter();
console.log(res); // 输出：日期对象

// 减去
let res = LimeUtil.addQuarter(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

## 格式化和解析日期

### \_.toDateString(date, format = "yyyy-MM-dd", lang = "zh")

日期对象转为日期字符串  
`支持日期字符串，日期对象，时间戳，unix时间戳`

- #### format 格式

  格式化的规则和常用的日期格式请参考最上面的日期格式

- #### 参数

  `date1` {String|Date|Number} 日期参数  
  `format` {String} 转化格式
  `lang` {String} 语言zh和en，默认zh

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
// 使用方法，具体格式化参数以及结果参考最上面的 format 格式
let res = LimeUtil.toDateString(new Date(), "yyyy-MM-dd HH:mm:ss");
console.log(res); // 输出： 2021-12-10 17:10:10

let res = LimeUtil.toDateString("2021-12-10", "yyyy/MM/dd HH:mm:ss");
console.log(res); // 输出： 2021/12/10 17:10:10
```

---

### \_.toDate(value)

日期字符串转为日期对象  
`支持日期字符串，时间戳，Unix时间戳`

- #### 参数

  `date` {String|Number} 日期参数

- #### 返回值

  {Date} 返回日期对象

- #### 示例

```javascript
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
