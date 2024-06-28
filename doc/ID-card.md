# 身份证 ID-card

### \_.getIdCardInfo(idCard)

根据身份证号码获取信息

`能获取到 籍贯，出生日期，年龄，性别 信息`

- #### 参数

  `idCard` {String} 身份证号码，支持一代 15 位和二代 18 位

- #### 返回值

  {Object} 返回身份证信息对象

- #### 示例

```javascript
// 输出：{province: '河南', birthday: '2010-12-01', age: 11, sex: '女'}
console.log(LimeUtil.getIdCardInfo("412821201012012221"));

// 输出：{province: '四川', birthday: '1980-02-22', age: 41, sex: '女'}
console.log(LimeUtil.getIdCardInfo("511702800222130"));
```

### \_.getAge(dateStr)

通过日期计算周岁年龄

- #### 参数

  `dateStr` {String} 日期字符串

- #### 返回值

  {Number} 返回周岁年龄

- #### 示例

```javascript
let res = LimeUtil.getAge("2000-10-10");
console.log(res); // 输出：21
```

---

### \_.getZodiac(date, lang = "zh")

通过日期获得星座

- #### 参数

  `date` {Date} 日期参数
  `lang` {String} 语言zh和en，默认zh

- #### 返回值

  {String} 返回星座

- #### 示例

```javascript
let res = LimeUtil.getZodiac("2000-10-10");
console.log(res); // 输出：天秤座
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
let res = LimeUtil.getChineseZodiac("2000-10-10");
console.log(res); // 输出：龙
```
