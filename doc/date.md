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

### today()

今天

- #### 参数

  无

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { today } from "@ivu-plus/i-utils";

let res = today();
console.log(res); // 输出：2024-06-16
```

### yesterday()

昨天

- #### 参数

  无

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { yesterday } from "@ivu-plus/i-utils";

let res = yesterday();
console.log(res); // 输出：2024-01-16
```

---

### tomorrow()

明天

- #### 参数

  无

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { tomorrow } from "@ivu-plus/i-utils";

let res = tomorrow();
console.log(res); // 输出：2024-01-16
```

---

### lastWeek(date = new Date())

上周（7天前日期）

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { lastWeek } from "@ivu-plus/i-utils";

let res = lastWeek();
console.log(res); // 输出：2021-12-06
```

### nextWeek(date = new Date())

下周（7天后日期）

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { nextWeek } from "@ivu-plus/i-utils";

let res = nextWeek();
console.log(res); // 输出：2021-12-20
```

---

### lastMonth(date = new Date())

上个月（30 天前日期）

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { lastMonth } from "@ivu-plus/i-utils";

let res = lastMonth();
console.log(res); // 输出：2021-11-13
```

---

### nextMonth(date = new Date())

下个月（30 天后日期）

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { nextMonth } from "@ivu-plus/i-utils";

let res = nextMonth();
console.log(res); // 输出：2022-01-12
```

---

### lastYear(date = new Date())

去年（365 天前日期）

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { lastYear } from "@ivu-plus/i-utils";

let res = lastYear();
console.log(res); // 输出：2020-12-13
```

---

### nextYear(date = new Date())

明年（365 天后日期）

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { nextYear } from "@ivu-plus/i-utils";

let res = nextYear();
console.log(res); // 输出：2022-12-13
```

---

## 判断当前日期

### isAM(date = new Date())

是否为上午

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isAM } from "@ivu-plus/i-utils";

let res = isAM();
console.log(res); // 输出：true
```

---

### isPM(date = new Date())

是否为下午

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isPM } from "@ivu-plus/i-utils";

let res = isPM();
console.log(res); // 输出：true
```

---

### isToday(date = new Date())

是否为今天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isToday } from "@ivu-plus/i-utils";

// 日期
let res = isToday(new Date());
console.log(res); // 输出：true
```

---

### isYesterday(date = new Date())

是否为昨天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isYesterday } from "@ivu-plus/i-utils";

// 日期
let res = isYesterday(new Date("2024-06-12"));
console.log(res); // 输出：true
```

---

### isBeforeYesterday(date = new Date())

是否为前天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isBeforeYesterday } from "@ivu-plus/i-utils";

// 日期
let res = isBeforeYesterday(new Date("2024-06-12"));
console.log(res); // 输出：true
```

---

### isTomorrow(date = new Date())

是否为明天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isTomorrow } from "@ivu-plus/i-utils";

// 日期
let res = isTomorrow(new Date("2024-06-12"));
console.log(res); // 输出：true
```

---

### isAfterTomorrow(date = new Date())

是否为后天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isAfterTomorrow } from "@ivu-plus/i-utils";

// 日期
let res = isAfterTomorrow(new Date("2024-06-12"));
console.log(res); // 输出：true
```

---

### isWorkday(date = new Date())

是否为工作日

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isWorkday } from "@ivu-plus/i-utils";

let res = isWorkday(new Date("2024-06-12"));
console.log(res); // 输出：true
```

---

### isWeekend(date = new Date())

是否为周末（周六和周日）

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isWeekend } from "@ivu-plus/i-utils";

let res = isWeekend(new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

### isFirstDayOfWeek(date = new Date())

是否为本周第一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isFirstDayOfWeek } from "@ivu-plus/i-utils";

let res = isFirstDayOfWeek(new Date("2024-06-17"));
console.log(res); // 输出：true
```

---

### isLastDayOfWeek(date = new Date())

是否为本周最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isLastDayOfWeek } from "@ivu-plus/i-utils";

let res = isLastDayOfWeek(new Date("2024-06-16"));
console.log(res); // 输出：true
```

---

### isFirstDayOfMonth(date = new Date())

是否为本月第一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isFirstDayOfMonth } from "@ivu-plus/i-utils";

let res = isFirstDayOfMonth(new Date("2024-06-01"));
console.log(res); // 输出：true
```

---

### isLastDayOfMonth(date = new Date())

是否为本月最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isLastDayOfMonth } from "@ivu-plus/i-utils";

let res = isLastDayOfMonth(new Date("2024-06-30"));
console.log(res); // 输出：true
```

---

### isFirstDayOfYear(date = new Date())

是否为本年第一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isFirstDayOfYear } from "@ivu-plus/i-utils";

let res = isFirstDayOfYear(new Date("2024-01-01"));
console.log(res); // 输出：true
```

---

### isLastDayOfYear(date = new Date())

是否为本年最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isLastDayOfYear } from "@ivu-plus/i-utils";

let res = isLastDayOfYear(new Date("2024-12-31"));
console.log(res); // 输出：true
```

---

## 判断年

### isLeapYear(date = new Date())

是否为闰年  
`闰年366天，平年365天`

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isLeapYear } from "@ivu-plus/i-utils";

let res = isLeapYear();
console.log(res); // 输出：true
```

---

### isCommonYear(date = new Date())

是否为平年  
`闰年366天，平年365天`

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isCommonYear } from "@ivu-plus/i-utils";

let res = isCommonYear();
console.log(res); // 输出：false
```

---

## 比较日期区间

### isBefore(startDate, endDate = new Date())

是否在日期之前

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isBefore } from "@ivu-plus/i-utils";

let res = isBefore(new Date("2024-06-14"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

### isAfter(startDate, endDate = new Date())

是否在日期之后

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期，默认当前日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isAfter } from "@ivu-plus/i-utils";

let res = isAfter(new Date("2024-06-17"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

### isBetween(date, startDate, endDate)

是否在两个日期之间

- #### 参数

  `date` {Date} 要比较的日期
  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isBetween } from "@ivu-plus/i-utils";

let res = isBetween(new Date("2024-06-16"), new Date("2024-06-17"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

## 日期是否相同

### isSame(startDate, endDate)

两个日期是否为同一天

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isSame } from "@ivu-plus/i-utils";

let res = isSame(new Date("2024-06-15"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

### isSameWeek(startDate, endDate)

两个日期是否为同一周

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isSameWeek } from "@ivu-plus/i-utils";

let res = isSameWeek(new Date("2024-06-15"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

### isSameMonth(startDate, endDate)

两个日期是否为同一个月

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isSameMonth } from "@ivu-plus/i-utils";

let res = isSameMonth(new Date("2024-06-15"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

### isSameYear(startDate, endDate)

两个日期是否为同一年

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isSameYear } from "@ivu-plus/i-utils";

let res = isSameYear(new Date("2024-06-15"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

## 比较两个日期相同 或 之前/之后

### isSameOrBefore(startDate, endDate)

两个日期是否相同或之前

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isSameOrBefore } from "@ivu-plus/i-utils";

let res = isSameOrBefore(new Date("2024-06-14"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

### isSameOrAfter(startDate, endDate)

两个日期是否相同或之后

- #### 参数

  `startDate` {Date} 开始日期
  `endDate` {Date} 结束日期

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isSameOrAfter } from "@ivu-plus/i-utils";

let res = isSameOrAfter(new Date("2024-06-17"), new Date("2024-06-15"));
console.log(res); // 输出：true
```

---

## 获取 日期/时间戳/周/季度

### getNow()

获得此刻的日期

- #### 参数

  无

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { getNow } from "@ivu-plus/i-utils";

let res = getNow();
console.log(res); // 输出：Sun Jun 16 2024 19:54:48 GMT+0800 (中国标准时间)
```

---

### getDate(date = new Date(), format = "yyyy-MM-dd")

获得当前日期字符串

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `format` {String} 日期字符串格式

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { getDate } from "@ivu-plus/i-utils";

// 默认
let res = getDate();
console.log(res); // 输出：2024-06-12

// 指定日期格式
let res = getDate(new Date("2024-06-12"), "yyyy/MM/dd");
console.log(res); // 输出：2024/06/12
```

---

### getDateTime(date = new Date(), format = "yyyy-MM-dd HH:mm:ss")

获得当前日期时间字符串

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `format` {String} 日期时间字符串格式

- #### 返回值

  {String} 返回日期时间字符串

- #### 示例

```javascript
import { getDateTime } from "@ivu-plus/i-utils";

// 默认
let res = getDateTime();
console.log(res); // 输出：2024-06-12 10:10:30

// 指定日期和分隔符
let res = getDateTime(new Date("2024-06-12"), "yyyy/MM/dd HH:mm:ss");
console.log(res); // 输出：2024-06-12 10:10:30
```

---

### getTimestamp(date = new Date())

获取当前时间戳

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回时间戳

- #### 示例

```javascript
import { getTimestamp } from "@ivu-plus/i-utils";

// 默认
let res = getTimestamp();
console.log(res); // 输出：1639384118890

// 指定日期
let res = getTimestamp(new Date("2021-12-10"));
console.log(res); // 输出：1639094400000
```

---

### getUnixTimestamp(date = new Date())

获取当前Unix时间戳

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回Unix时间戳

- #### 示例

```javascript
import { getUnixTimestamp } from "@ivu-plus/i-utils";

// 默认
let res = getUnixTimestamp();
console.log(res); // 输出：1639384195

// 指定日期
let res = getUnixTimestamp(new Date("2021-12-10"));
console.log(res); // 输出：1639094400
```

---

### getDateObject(date = new Date())

获得当前日期的对象形式

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Object} 返回日期的对象形式  
  `返回的对象含义：{year:年，month：月，date：日，hours：时，minutes：分，seconds：秒，milliseconds：毫秒}`

- #### 示例

```javascript
import { getDateObject } from "@ivu-plus/i-utils";

// 默认
let res = getDateObject();
console.log(res); // 输出： { "year": 2024,  "month": 6, "date": 16, "hours": 20, "minutes": 1, "seconds": 30, "milliseconds": 521}
```

---

### getDateArray(date = new Date())

获得当前日期的数组形式

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Object} 返回日期的数组形式  
  `返回的数组含义：[年，月，日，时，分，秒，毫秒]`

- #### 示例

```javascript
import { getDateArray } from "@ivu-plus/i-utils";

// 默认
let res = getDateArray();
console.log(res); // 输出： [2024, 6, 16, 20, 6, 42, 110, 0, 3]
```

---

### getWeek(date = new Date(), format = "E", lang = "zh")

获得当前日期是周几

- #### 参数

  `date` {Date} 日期参数，默认当前日期
  `format` {String} 周格式化结果：E：如“日”，EE：如“周日”, EEE：如“星期日”；默认为E，为空则返回数字
  `lang` {String} 语言zh和en，默认zh

- #### 返回值

  {Number,String} 返回周几，会根据语言返回

- #### 示例

```javascript
import { getWeek } from "@ivu-plus/i-utils";

// 默认
let res = getWeek();
console.log(res); // 输出：六

// 中文周几
let res = getWeek(new Date(), (format = "E"), (lang = "zh"));
console.log(res); // 输出：六
let res = getWeek(new Date(), (format = "EE"), (lang = "zh"));
console.log(res); // 输出：周六
let res = getWeek(new Date(), (format = "EEE"), (lang = "zh"));
console.log(res); // 输出：星期六

// 英文周几
let res = getWeek(new Date(), (format = "E"), (lang = "en"));
console.log(res); // 输出：Sa
let res = getWeek(new Date(), (format = "EE"), (lang = "en"));
console.log(res); // 输出：Sat
let res = getWeek(new Date(), (format = "EEE"), (lang = "en"));
console.log(res); // 输出：Saturday
```

---

### getQuarter(date = new Date(), format = "Q", lang = "zh")

获得当前日期是第几季度

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `format` {String} 季度格式化结果：Q：如“一”, QQ：如“一季度”；QQQ：如“第一季度”；默认为Q，为空则返回数字
  `lang` {String} 语言zh和en，默认zh

- #### 返回值

  {String} 返回第几季度，会根据语言返回

- #### 示例

```javascript
import { getQuarter } from "@ivu-plus/i-utils";

// 默认
let res = getQuarter();
console.log(res); // 输出：六

// 中文周几
let res = getWeek(new Date(), (format = "Q"), (lang = "zh"));
console.log(res); // 输出：一
let res = getQuarter(new Date(), (format = "QQ"), (lang = "zh"));
console.log(res); // 输出：一季度
let res = getQuarter(new Date(), (format = "QQQ"), (lang = "zh"));
console.log(res); // 输出：第一季度

// 英文周几
let res = getQuarter(new Date(), (format = "Q"), (lang = "en"));
console.log(res); // 输出：Q1
let res = getQuarter(new Date(), (format = "QQ"), (lang = "en"));
console.log(res); // 输出：Q1th
let res = getQuarter(new Date(), (format = "QQQ"), (lang = "en"));
console.log(res); // 输出：quarter 1st
```

---

## 当前日期是所在 周/月/年 的第几天

### getDayOfWeek(date = new Date())

获得当前日期是所在周的第几天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回天数

- #### 示例

```javascript
import { getDayOfWeek } from "@ivu-plus/i-utils";

// 默认
let res = getDayOfWeek();
console.log(res); // 输出：1
```

---

### getDayOfMonth(date = new Date())

获得当前日期是所在月的第几天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回天数

- #### 示例

```javascript
import { getDayOfMonth } from "@ivu-plus/i-utils";

let res = getDayOfMonth();
console.log(res); // 输出：13
```

---

### getDayOfYear(date = new Date())

获得当前日期是所在年的第几天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回天数

- #### 示例

```javascript
import { getDayOfYear } from "@ivu-plus/i-utils";

let res = getDayOfYear();
console.log(res); // 输出：348
```

---

## 当前日期的周是所在 月/年 的第几周

### getWeekOfMonth(date = new Date())

获得当前日期是所在月的第几周

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回周数

- #### 示例

```javascript
import { getWeekOfMonth } from "@ivu-plus/i-utils";

let res = getWeekOfMonth();
console.log(res); // 输出：3
```

---

### getWeekOfYear(date = new Date())

获得当前日期是所在年的第几周

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回周数

- #### 示例

```javascript
import { getWeekOfYear } from "@ivu-plus/i-utils";

let res = getWeekOfYear();
console.log(res); // 输出：51
```

---

## 当前日期所在 周/月/年 共几天

### getDaysOfWeek(date = new Date())

获得当前日期所在的周共几天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回天数

- #### 示例

```javascript
import { getDaysOfWeek } from "@ivu-plus/i-utils";

let res = getDaysOfWeek();
console.log(res); // 输出：7
```

---

### getDaysOfMonth(date = new Date())

获得当前日期所在的月共几天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回天数

- #### 示例

```javascript
import { getDaysOfMonth } from "@ivu-plus/i-utils";

let res = getDaysOfMonth();
console.log(res); // 输出：31
```

---

### getDaysOfYear(date = new Date())

获得当前日期所在的年共几天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回天数

- #### 示例

```javascript
import { getDaysOfYear } from "@ivu-plus/i-utils";

let res = getDaysOfYear();
console.log(res); // 输出：365
```

---

## 当前周所在 月/年 共几周

### getWeeksOfMonth(date = new Date())

获得当前日期是所在月的第几周

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回周数

- #### 示例

```javascript
import { getWeeksOfMonth } from "@ivu-plus/i-utils";

let res = getWeeksOfMonth((date = new Date()));
console.log(res); // 输出：4
```

---

### getWeeksOfYear(date = new Date())

获得当前日期是所在年的第几周

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {Number} 返回周数

- #### 示例

```javascript
import { getWeeksOfYear } from "@ivu-plus/i-utils";

let res = getWeeksOfYear((date = new Date()));
console.log(res); // 输出：12
```

---

## 当前日期所在 周/月/年 的 第一天/最后一天/所有天数数组

### getFirstDateOfWeek(date = new Date())

获得当前日期所在周的第一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { getFirstDateOfWeek } from "@ivu-plus/i-utils";

let res = getFirstDateOfWeek();
console.log(res); // 输出：2024-06-10
```

---

### getLastDateOfWeek(date = new Date())

获得当前日期所在周的最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { getLastDateOfWeek } from "@ivu-plus/i-utils";

let res = getLastDateOfWeek();
console.log(res); // 输出：2024-06-16
```

---

### getFullDateOfWeek(date = new Date())

获得当前日期所在周的最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { getFullDateOfWeek } from "@ivu-plus/i-utils";

let res = getFullDateOfWeek();
console.log(res); // 输出：['2024-06-10','2024-06-11','2024-06-12','2024-06-13','2024-06-14','2024-06-15','2024-06-16',]
```

---

### getFirstDateOfMonth(date = new Date())

获得当前日期所在月的第一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { getFirstDateOfMonth } from "@ivu-plus/i-utils";

let res = getFirstDateOfMonth();
console.log(res); // 输出：2021-12-01
```

---

### getLastDateOfMonth(date = new Date())

获得当前日期所在月的最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { getLastDateOfMonth } from "@ivu-plus/i-utils";

let res = getLastDateOfMonth();
console.log(res); // 输出：2021-12-31
```

---

### getFullDateOfMonth(date = new Date())

获取当前日期所在月的所有日期

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { getFullDateOfMonth } from "@ivu-plus/i-utils";

let res = getFullDateOfMonth();
console.log(res); // 输出：['2024-06-01', ..., '2024-06-30']
```

---

### getFirstDateOfYear(date = new Date())

获取当前日期所在年的第一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { getFirstDateOfYear } from "@ivu-plus/i-utils";

let res = getFirstDateOfYear();
console.log(res); // 输出：2024-01-01
```

---

### getLastDateOfYear(date = new Date())

获取当前日期所在年的最后一天

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { getLastDateOfYear } from "@ivu-plus/i-utils";

let res = getLastDateOfYear();
console.log(res); // 输出：2024-12-31
```

---

### getFullDateOfYear(date = new Date())

获取当前日期所在年的所有日期

- #### 参数

  `date` {Date} 日期参数，默认当前日期

- #### 返回值

  {String} 返回日期字符串

- #### 示例

```javascript
import { getFullDateOfYear } from "@ivu-plus/i-utils";

let res = getFullDateOfYear();
console.log(res); // 输出：['2024-01-01', ..., '2024-12-31']
```

---

## 计算两个日期相差

### getDiffDay(startDate, endDate)

算两个日期相差的天数，不满一天为0

- #### 参数

  `startDate` {Date} 开始日期  
  `endDate` {Date} 结束日期

- #### 返回值

  {Number} 返回两个日期相差的天数，结果为正数或者负数

- #### 示例

```javascript
import { getDiffDay } from "@ivu-plus/i-utils";

// 大于0
let res = getDiffDay("2021-12-10", "2021-12-11");
console.log(res); // 输出： 1

// 等于0
let res = getDiffDay("2021-12-11", "2021-12-11");
console.log(res); // 输出： 0

// 小于0
let res = getDiffDay("2021-12-11", "2021-12-10");
console.log(res); // 输出： -1
```

---

### getDiffWeek(startDate, endDate)

算两个日期相差的周数，不满一周为0

- #### 参数

  `startDate` {Date} 开始日期  
  `endDate` {Date} 结束日期

- #### 返回值

  {Number} 返回两个日期相差的周数，结果为正数或者负数

- #### 示例

```javascript
import { getDiffWeek } from "@ivu-plus/i-utils";

// 大于0
let res = getDiffWeek("2021-12-01", "2021-12-11");
console.log(res); // 输出： 1

// 不满一周等于0
let res = getDiffWeek("2021-12-11", "2021-12-11");
console.log(res); // 输出： 0

// 小于0
let res = getDiffWeek("2021-12-10", "2021-12-01");
console.log(res); // 输出： -1
```

---

### getDiffMonth(startDate, endDate)

计算两个日期相差的月数，不满一月为0

- #### 参数

  `startDate` {Date} 开始日期  
  `endDate` {Date} 结束日期

- #### 返回值

  {Number} 返回两个日期相差的月数，结果为正数或者负数

- #### 示例

```javascript
import { getDiffMonth } from "@ivu-plus/i-utils";

// 大于0
let res = getDiffMonth("2024-06-12", "2021-12-11");
console.log(res); // 输出： 1

// 等于0
let res = getDiffMonth("2021-12-11", "2021-12-11");
console.log(res); // 输出： 0

// 小于0
let res = getDiffMonth("2021-12-11", "2024-06-12");
console.log(res); // 输出： -1
```

---

### getDiffYear(startDate, endDate)

计算两个日期相差的年数，不满一年为0

- #### 参数

  `startDate` {Date} 开始日期  
  `endDate` {Date} 结束日期

- #### 返回值

  {Number} 返回两个日期相差的年数，结果为正数或者负数

- #### 示例

```javascript
import { getDiffYear } from "@ivu-plus/i-utils";

// 大于0
let res = getDiffYear("2020-11-10", "2021-12-11");
console.log(res); // 输出： 1

// 等于0
let res = getDiffYear("2021-12-11", "2021-12-11");
console.log(res); // 输出： 0

// 小于0
let res = getDiffYear("2021-12-11", "2020-11-10");
console.log(res); // 输出： -1
```

---

## 获得两个日期之间 年月日/年月/年 数组

### getBetweenDates(startDate, endDate)

获得两个日期之间的年月日数组

- #### 参数

  `startDate` {Date} 开始日期  
  `endDate` {Date} 结束日期

- #### 返回值

  {Array} 返回年月日数组

- #### 示例

```javascript
import { getBetweenDates } from "@ivu-plus/i-utils";

let res = getBetweenDates("2021-12-11", "2024-06-12");
console.log(res); // 输出： ['2021-12-11', '2024-01-16', '2024-06-12']
```

---

### getBetweenMonths(startDate, endDate)

获得两个日期之间的年月数组

- #### 参数

  `startDate` {Date} 开始日期  
  `endDate` {Date} 结束日期

- #### 返回值

  {Array} 返回年月数组

- #### 示例

```javascript
import { getBetweenMonths } from "@ivu-plus/i-utils";

let res = getBetweenMonths("2021-11-11", "2024-06-12");
console.log(res); // 输出： ['2021-11', '2021-12']
```

---

### getBetweenYears(startDate, endDate)

获得两个日期之间的年数组

- #### 参数

  `startDate` {Date} 开始日期  
  `endDate` {Date} 结束日期

- #### 返回值

  {Array} 返回年数组

- #### 示例

```javascript
import { getBetweenYears } from "@ivu-plus/i-utils";

let res = betweenYears("2020-11-11", "2024-06-12");
console.log(res); // 输出： [2020, 2021]
```

---

## 过去时间和剩余时间的显示

### getPastTime(date, lang = "zh")

获得过去时间的字符串显示  
`例如：刚刚，1分钟前，1小时前等`

- #### 参数

  `date` {Date} 日期参数  
  `lang` {String} 语言zh和en，默认zh

- #### 返回值

  {String} 返回字符串

- #### 示例

```javascript
import { getPastTime } from "@ivu-plus/i-utils";

// 日期
let res = getPastTime(new Date("2024-01-16"));
console.log(res); // 输出：1天前

// 日期字符串
let res = getPastTime("2024-01-16");
console.log(res); // 输出：1天前

// 语言 英文
let res = getPastTime("2024-01-16", "en");
console.log(res); // 输出：1 day ago
```

---

### getOverTime(date, lang = "zh")

获得剩余时间的字符串显示  
`例如：1天 10小时 20分钟 30秒`

- #### 参数

  `date` {Date} 日期参数  
  `lang` {String} 语言zh和en，默认zh

- #### 返回值

  {String} 返回字符串

- #### 示例

```javascript
import { getOverTime } from "@ivu-plus/i-utils";

let res = getOverTime("2021-12-14");
console.log(res); // 输出：0天 7时 10分 48秒
```

---
### getAge(date)

通过日期获得年龄  

- #### 参数

  `date` {Date} 日期参数  

- #### 返回值

  {Number} 返回周岁年龄

- #### 示例

```javascript
import { getAge } from "@ivu-plus/i-utils";

// 这里是按周岁计算
let res = getOverTime("2010-08-10");
console.log(res); // 输出：13
```

---
## 通过日期获得 星座和生肖

### getZodiac(date, lang = "zh")

通过日期获得星座

- #### 参数

  `date` {Date} 日期参数
  `lang` {String} 语言zh和en，默认zh

- #### 返回值

  {String} 返回星座

- #### 示例

```javascript
import { getZodiac } from "@ivu-plus/i-utils";

let res = getZodiac("2000-10-10");
console.log(res); // 输出：天秤座
```

---

### getChineseZodiac(date, lang = "zh")

通过日期获得生肖

- #### 参数

  `date` {Date} 日期参数
  `lang` {String} 语言zh和en，默认zh

- #### 返回值

  {String} 返回生肖

- #### 示例

```javascript
import { getChineseZodiac } from "@ivu-plus/i-utils";

let res = getChineseZodiac("2000-10-10");
console.log(res); // 输出：龙
```

---

## 计算日期加减 年，月，日，时，分，秒，周，季度

### addYear(date = new Date(), num = +1)

日期加减年

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
import { addYear } from "@ivu-plus/i-utils";

// 默认
let res = addYear();
console.log(res); // 输出：日期对象

// 减去
let res = addYear(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

### addMonth(date = new Date(), num = +1)

日期加减月

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
import { addMonth } from "@ivu-plus/i-utils";

// 默认
let res = addMonth();
console.log(res); // 输出：日期对象

// 减去
let res = addMonth(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

### addDate(date = new Date(), num = +1)

日期加减天

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
import { addDate } from "@ivu-plus/i-utils";

// 默认
let res = addDate();
console.log(res); // 输出：日期对象

// 减去
let res = addDate(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

### addHours(date = new Date(), num = +1)

日期加减小时

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
import { addHours } from "@ivu-plus/i-utils";

// 默认
let res = addHours();
console.log(res); // 输出：日期对象

// 减去
let res = addHours(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

### addMinutes(date = new Date(), num = +1)

日期加减分钟

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
import { addMinutes } from "@ivu-plus/i-utils";

// 默认
let res = addMinutes();
console.log(res); // 输出：日期对象

// 减去
let res = addMinutes(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

### addSeconds(date = new Date(), num = +1)

日期加减秒

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
import { addSeconds } from "@ivu-plus/i-utils";

// 默认
let res = addSeconds();
console.log(res); // 输出：日期对象

// 减去
let res = addSeconds(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

### addMillisecond(date = new Date(), num = +100)

日期加减毫秒

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +100

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
import { addMillisecond } from "@ivu-plus/i-utils";

// 默认
let res = addMillisecond();
console.log(res); // 输出：日期对象

// 减去
let res = addMillisecond(new Date(), -100);
console.log(res); // 输出：日期对象
```

---

### addWeek(date = new Date(), num = +1)

日期加减周

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
import { addWeek } from "@ivu-plus/i-utils";

// 默认
let res = addWeek();
console.log(res); // 输出：日期对象

// 减去
let res = addWeek(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

### addQuarter(date = new Date(), num = +1)

日期加减季度

- #### 参数

  `date` {Date} 日期参数，默认当前日期  
  `num` {Number} 加减数量，用正数和负数表示；默认 +1

- #### 返回值

  {Date} 返回加减后的日期

- #### 示例

```javascript
import { addQuarter } from "@ivu-plus/i-utils";

// 默认
let res = addQuarter();
console.log(res); // 输出：日期对象

// 减去
let res = addQuarter(new Date(), -1);
console.log(res); // 输出：日期对象
```

---

## 格式化和解析日期

### formatDate(date, format = "yyyy-MM-dd", lang = "zh")

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
import { formatDate } from "@ivu-plus/i-utils";

// 使用方法，具体格式化参数以及结果参考最上面的 format 格式
let res = formatDate(new Date(), "yyyy-MM-dd HH:mm:ss");
console.log(res); // 输出： 2021-12-10 17:10:10

let res = formatDate("2021-12-10", "yyyy/MM/dd HH:mm:ss");
console.log(res); // 输出： 2021/12/10 17:10:10
```

---

### parseDate(value)

日期字符串转为日期对象  
`支持日期字符串，时间戳，Unix时间戳`

- #### 参数

  `value` {String|Number} 日期参数

- #### 返回值

  {Date} 返回日期对象

- #### 示例

```javascript
import { parseDate } from "@ivu-plus/i-utils";

// yyyy-MM-dd
let res = parseDate("2021-12-10");
console.log(res); // 输出：Fri Dec 10 2021 00:00:00 GMT+0800 (中国标准时间)

// yyyy-MM-dd HH:mm:ss
let res = parseDate("2021-12-10 15:10:10");
console.log(res); // 输出：Fri Dec 10 2021 15:10:10 GMT+0800 (中国标准时间)

// yyyy/MM/dd
let res = parseDate("2021-12-10");
console.log(res); // 输出：Fri Dec 10 2021 00:00:00 GMT+0800 (中国标准时间)

// yyyy/MM/dd HH:mm:ss
let res = parseDate("2021-12-10 15:10:10");
console.log(res); // 输出：Fri Dec 10 2021 15:10:10 GMT+0800 (中国标准时间)

// MM/dd/yyyy
let res = parseDate("12/10/2021");
console.log(res); // 输出：Fri Dec 10 2021 00:00:00 GMT+0800 (中国标准时间)

// MM/dd/yyyy HH:mm:ss
let res = parseDate("12/10/2021 15:10:10");
console.log(res); // 输出：Fri Dec 10 2021 15:10:10 GMT+0800 (中国标准时间)

// 时间戳
let res = parseDate(1639388213194);
console.log(res); // 输出：Mon Dec 13 2021 17:36:53 GMT+0800 (中国标准时间)

// Unix时间戳
let res = parseDate(1639388270);
console.log(res); // 输出：Mon Dec 13 2021 17:37:50 GMT+0800 (中国标准时间)
```


