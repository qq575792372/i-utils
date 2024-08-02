# 身份证 ID-card

### getInfoByIDCard(idCard)

根据身份证号码获取信息

`能获取到 籍贯，出生日期，年龄，性别 信息`

- #### 参数

  `idCard` {String} 身份证号码，支持一代 15 位和二代 18 位

- #### 返回值

  {Object} 返回身份证信息对象

- #### 示例

```javascript
import { getInfoByIDCard } from "@ivujs/util";

// 输出：{province: '河南', birthday: '2010-12-01', age: 11, sex: '女'}
console.log(getInfoByIDCard("412821201012012221"));

// 输出：{province: '四川', birthday: '1980-02-22', age: 41, sex: '女'}
console.log(getInfoByIDCard("511702800222130"));
```

### getAgeByIDCard(dateStr)

根据身份证号码获得年龄

- #### 参数

  `dateStr` {String} 日期字符串

- #### 返回值

  {Number} 返回周岁年龄

- #### 示例

```javascript
import { getAgeByIDCard } from "@ivujs/util";

let res = getAgeByIDCard("2000-10-10");
console.log(res); // 输出：21
```

