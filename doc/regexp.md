# 正则 Regexp

## 常用正则集合

### REGEXP.XXX

```javascript
import { REGEXP } from "@ivu-plus/util";

// 包含的规则如下
const REGEXP = {
  // 中文汉字
  CH: /^[\u4E00-\u9FA5]+$/,
  // 英文字母
  EN: /^[a-zA-Z]$/,
  // 小写字母
  LOWER_CASE: /^[a-z]+$/,
  // 大写字母
  UPPER_CASE: /^[A-Z]+$/,
  // 中文姓名，2-16位
  CH_NAME: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
  // 英文姓名，0-20位
  EN_NAME: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
  // 数字，包含正数和负数
  NUMBER: /^(\-|\+)?\d+(\.\d+)?$/,
  // 整数，包含：0，正整数和负整数
  INTEGER: /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/,
  // 小数，包含正小数和负小数
  DECIMAL: /^\d+\.\d+$/,
  // 正整数或者保留两位小数
  INT_OR_FLOAT:
    /(^[1-9][0-9]*$)|(^[1-9][0-9]*\.[0-9]{1,2}$)|(^0\.[0-9]{1,2}$)|(^0$)/,
  // 手机号码，支持+86
  MOBILE: /^(?:(?:\+|00)86)?1[1-9]\d{9}$/,
  // 固定电话号码，比如：0755-1111111
  PHONE: /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/,
  // 邮箱
  EMAIL: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  // 一代15位和二代18位身份证
  ID_CARD:
    /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
  // 仅校验一代15位身份证
  ID_CARD15: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)/,
  // 仅校验二代18位身份证
  ID_CARD18:
    /(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
  // 银行卡号
  BANK_CARD: /^[1-9]\d{9,29}$/,
  // 邮政编码
  POST_CODE:
    /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/,
  // url网址
  URL: /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
  // ip地址
  IP: /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/,
  // 是外链，http，https，mail，tel电话
  EXTERNAL: /^(http?:|https?:|mailto:|tel:)/,
};
```

---

## 正则校验方法

### regexpTest(value, regex)

正则校验方法  
`类型为REGEXP对应的正则`

- #### 参数

  `value` {String|Number} 校验的参数  
  `regex` {REGEXP} 使用的 <span style="color:#ff9900">`REGEXP`</span> 中的正则

- #### 返回值

  {Boolean} 返回校验的结果

- #### 示例

```javascript
import { regexpTest } from "@ivu-plus/util";

let res = regexpTest("13000000000", REGEXP.MOBILE);
console.log(res); // 输出：true
```

---

## 常用校验

### isChinese(value)

是中文

- #### 参数

  `value` {String} 校验的参数

- #### 返回值

  {Boolean} 返回校验的结果

- #### 示例

```javascript
import { isChinese } from "@ivu-plus/util";

let res = isChinese("中国");
console.log(res); // 输出：true
```

---

### isEnglish(value)

是英文

- #### 参数

  `value` {String} 校验的参数

- #### 返回值

  {Boolean} 返回校验的结果

- #### 示例

```javascript
import { isEnglish } from "@ivu-plus/util";

let res = isEnglish("abc");
console.log(res); // 输出：true
```

---

### isExternal(value)

是外链  
`支持http，https，mail，tel电话`

- #### 参数

  `value` {String} 校验的参数

- #### 返回值

  {Boolean} 返回校验的结果

- #### 示例

```javascript
import { isExternal } from "@ivu-plus/util";

let res = isExternal("http://test.com/11");
console.log(res); // 输出：true
```

---

### isLowerCase(value)

是小写字母

- #### 参数

  `value` {String} 校验的参数

- #### 返回值

  {Boolean} 返回校验的结果

- #### 示例

```javascript
import { isLowerCase } from "@ivu-plus/util";

let res = isLowerCase("abc");
console.log(res); // 输出：true
```

---

### isUpperCase(value)

是大写字母

- #### 参数

  `value` {String} 校验的参数

- #### 返回值

  {Boolean} 返回校验的结果

- #### 示例

```javascript
import { isUpperCase } from "@ivu-plus/util";

let res = isUpperCase("ABC");
console.log(res); // 输出：true
```

---

### isMobile(value)

是 11 位手机号码

- #### 参数

  `value` {String} 校验的参数

- #### 返回值

  {Boolean} 返回校验的结果

- #### 示例

```javascript
import { isMobile } from "@ivu-plus/util";

let res = isMobile("13000000000");
console.log(res); // 输出：true
```

---

### isEmail(value)

是 11 位手机号码

- #### 参数

  `value` {String} 校验的参数

- #### 返回值

  {Boolean} 返回校验的结果

- #### 示例

```javascript
import { isEmail } from "@ivu-plus/util";

let res = isEmail("321123488@qq.com");
console.log(res); // 输出：true
```

---

### isIdCard(value)

是身份证号码（15-18 位）

- #### 参数

  `value` {String} 校验的参数

- #### 返回值

  {Boolean} 返回校验的结果

- #### 示例

```javascript
import { isIdCard } from "@ivu-plus/util";

let res = isMobile("411828198901112311");
console.log(res); // 输出：true
```

---

### isUrl(value)

是 url 链接

- #### 参数

  `value` {String} 校验的参数

- #### 返回值

  {Boolean} 返回校验的结果

- #### 示例

```javascript
import { isUrl } from "@ivu-plus/util";

let res = isUrl("http://www.test.com");
console.log(res); // 输出：true
let res = isUrl("ftps://192.168.3.22/ddd");
console.log(res); // 输出：true
```
