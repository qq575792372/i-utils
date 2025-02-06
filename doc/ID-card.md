# 身份证 ID-card

### getInfoByIDCard(idCard)

根据身份证号码获取信息

`能获取到 籍贯，出生日期，年龄，性别`

- #### 参数

  `idCard` {String} 身份证号码，支持一代15位和二代18位

- #### 返回值

  {Object} 返回身份证信息对象

- #### 示例

```javascript
import { getInfoByIDCard } from "@ivu-plus/util";

// 输出：{province: '河南', birthday: '2010-12-01', age: 11, sex: '女'}
console.log(getInfoByIDCard("412821201012012221"));

// 输出：{province: '四川', birthday: '1980-02-22', age: 41, sex: '女'}
console.log(getInfoByIDCard("511702800222130"));
```

---

### getBirthdayByIDCard(idCard)

根据身份证号码获得生日

- #### 参数

  `idCard` {String} 身份证号码，支持一代15位和二代18位

- #### 返回值

  {String} 返回生日

- #### 示例

```javascript
import { getBirthdayByIDCard } from "@ivu-plus/util";

let res = getBirthdayByIDCard("412821201012012221");
console.log(res); // 输出：2010-12-01
```

---

### getAgeByIDCard(idCard)

根据身份证号码获得年龄

- #### 参数

  `idCard` {String} 身份证号码，支持一代15位和二代18位

- #### 返回值

  {Number} 返回周岁年龄

- #### 示例

```javascript
import { getAgeByIDCard } from "@ivu-plus/util";

let res = getAgeByIDCard("412821201012012221");
console.log(res); // 输出：13
```

---

### getSexByIDCard(dateStr)

根据身份证号码获得性别

- #### 参数

  `idCard` {String} 身份证号码，支持一代15位和二代18位

- #### 返回值

  {Number} 返回性别

- #### 示例

```javascript
import { getSexByIDCard } from "@ivu-plus/util";

let res = getSexByIDCard("412821201012012221");
console.log(res); // 输出：女
```

---

### getProvinceByIDCard(dateStr)

根据身份证号码获得年龄

- #### 参数

  `idCard` {String} 身份证号码，支持一代15位和二代18位

- #### 返回值

  {Number} 返回省份

- #### 示例

```javascript
import { getProvinceByIDCard } from "@ivu-plus/util";

let res = getProvinceByIDCard("412821201012012221");
console.log(res); // 输出：河南
```

