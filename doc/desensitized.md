# 脱敏 Desensitized

### formatStartOfName(value)

姓名中间转为星号

- #### 参数

  `value` {String} 姓名

- #### 返回值

  {String} 返回转化后字符串

- #### 示例

```javascript
import { formatStartOfName } from "@ivu-plus/util";

console.log(formatStartOfName("张静")); // 输出：张*
console.log(formatStartOfName("张小静")); // 输出：张*静
console.log(formatStartOfName("张小静静")); // 输出：张**静
```

---

### formatStartOfMobile(value, start = 3, len = 4)

手机号码固定位数转为星号

- #### 参数

  `value` {String} 手机号码
  `start` {Number} 前缀长度，默认 3 位
  `len` {Number} 显示星号的长度，默认 4 位

- #### 返回值

  {String} 返回转化后字符串

- #### 示例

```javascript
import { formatStartOfMobile } from "@ivu-plus/util";

console.log(formatStartOfMobile("13000000000")); // 输出：130****0000
console.log(formatStartOfMobile("13000000000", 3, 5)); // 输出：130*****000
```

---

### formatStartOfIDCard(value, start = 4, len = 8)

手机号码固定位数转为星号

- #### 参数

  `value` {String} 身份证号码
  `start` {Number} 前缀长度，默认 4 位
  `len` {Number} 显示星号的长度，默认 8 位

- #### 返回值

  {String} 返回转化后字符串

- #### 示例

```javascript
import { formatStartOfIDCard } from "@ivu-plus/util";

console.log(formatStartOfIDCard("412929199312223012")); // 输出：4129********223012
```

---

### formatStartOfBankCard(value, start = 4, len = 11)

手机号码固定位数转为星号

- #### 参数

  `value` {String} 身份证号码
  `start` {Number} 前缀长度，默认 4 位
  `len` {Number} 显示星号的长度，默认 11 位

- #### 返回值

  {String} 返回转化后字符串

- #### 示例

```javascript
import { formatStartOfBankCard } from "@ivu-plus/util";

console.log(formatStartOfIdCard("6222021208888993029")); // 输出：6222***********3029
```
