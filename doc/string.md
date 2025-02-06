# 字符串 String

## 字符串处理

### inString(value, str)

字符串中是否包含指定的元素

- #### 参数

  `value` {String} 包含的元素  
  `str` {String} 查找的字符串

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { inString } from "@ivu-plus/util";

let res = inString("hello", "say hello");
console.log(res); // 输出：true
```

---

### trim(value)

去除字符串前后位置空格

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
import { trim } from "@ivu-plus/util";

let res = trim(" 123 ");
console.log(res); // 输出：123
```

---

### trimStart(value)

去除字符串开始位置的空格

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
import { trimStart } from "@ivu-plus/util";

let res = trimStart(" 123 ");
console.log(res); // 输出：123&nbsp; 后面会有空格
```

---

### trimEnd(value)

去除字符串结束位置的空格

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
import { trimEnd } from "@ivu-plus/util";

let res = trim(" 123 ");
console.log(res); // 输出：&nbsp;123 前面会有空格
```

---

### trimAll(value)

去除字符串中全部的空格

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
import { trimAll } from "@ivu-plus/util";

let res = trimAll(" 1 2 3 ");
console.log(res); // 输出：123
```

---

### replaceAll(value, oldSubstr, newSubstr)

替换所有指定字符串为新的字符串

- #### 参数

  `value` {String} 参数  
  `oldSubstr` {String} 需要替换的字符串  
  `newSubstr` {String} 替换后的字符串

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
import { replaceAll } from "@ivu-plus/util";

let res = replaceAll("say hello hello!", "hello", "hi");
console.log(res); // 输出：say hi hi!
```

---

## 字符串转换

### toUpper(value)

字符串转大写

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
import { toUpperCase } from "@ivu-plus/util";

let res = toUpperCase("say hello");
console.log(res); // 输出：SAY HELLO
```

---

### toLowerCase(value)

字符串转小写

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
import { toLowerCase } from "@ivu-plus/util";

let res = toLowerCase("Say Hello");
console.log(res); // 输出：say hello
```

---

### toSnakeCase(value)

转为 snake_case 下划线命名  
`支持 驼峰命名，短横命名，帕斯卡命名`

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
import { toSnakeCase } from "@ivu-plus/util";

// 驼峰转下划线
console.log(LimeCore.toSnakeCase("userName")); // 输出：user_name
// 短横转下划线
console.log(LimeCore.toSnakeCase("user-name")); // 输出：user_name
// 帕斯卡转下划线
console.log(LimeCore.toSnakeCase("UserName")); // 输出：user_name
```

---

### toKebabCase(value)

转为 kebab-case 短横命名  
`支持 下划线，驼峰命名，帕斯卡命名`

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
import { toKebabCase } from "@ivu-plus/util";

// 下划线转短横
console.log(LimeCore.toKebabCase("user_name")); // 输出：user-name
// 驼峰转短横
console.log(LimeCore.toKebabCase("userName")); // 输出：user-name
// 帕斯卡转短横
console.log(LimeCore.toKebabCase("UserName")); // 输出：user-name
```

---

### toCamelCase(value)

转为 camelCase 驼峰命名  
`支持 下划线命名，短横命名，帕斯卡命名`

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
import { toCamelCase } from "@ivu-plus/util";

// 下划线转驼峰
console.log(LimeCore.toCamelCase("user_name")); // 输出：userName
// 短横转驼峰
console.log(LimeCore.toCamelCase("user-name")); // 输出：userName
// 帕斯卡转驼峰
console.log(LimeCore.toCamelCase("UserName")); // 输出：userName
```

---

### toPascalCase(value)

转为 PascalCase 帕斯卡命名  
`支持 下划线命名，短横命名，驼峰命名`

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
import { toPascalCase } from "@ivu-plus/util";

// 下划线转帕斯卡
console.log(LimeCore.toPascalCase("user_name")); // 输出：UserName
// 短横转帕斯卡
console.log(LimeCore.toPascalCase("user-name")); // 输出：UserName
// 驼峰转帕斯卡
console.log(LimeCore.toPascalCase("userName")); // 输出：UserName
```

## 字符串格式化

### zeroStart(value, maxLength = 2)

数字前补齐 0 达到指定位数  
`相当于原生的 padStart(2,'0')`

- #### 参数

  `value` {Number|String} 补零的数字  
  `maxLength` {Number} 补齐 0 后的最大长度，默认 2 位

- #### 返回值

  {String} 返回补 0 后指定位数的字符串

- #### 示例

```javascript
import { zeroStart } from "@ivu-plus/util";

let res = zeroStart("1", 3);
console.log(res); // 输出：001
```

---

### zeroEnd(value, maxLength = 2)

数字后补齐 0 达到指定位数  
`相当于原生的 padEnd(2,'0')`

- #### 参数

  `value` {Number|String} 补零的数字  
  `maxLength` {Number} 补齐 0 后的最大长度，默认 2 位

- #### 返回值

  {String} 返回补 0 后指定位数的字符串

- #### 示例

```javascript
import { zeroEnd } from "@ivu-plus/util";

let res = zeroEnd("1", 3);
console.log(res); // 输出：100
```

---

### formatTitle(value)

格式化为标题样式

- #### 参数

  `value` {String} 字符串值

- #### 返回值

  {String} 返回格式化后的标题样式

- #### 示例

```javascript
import { formatTitle } from "@ivu-plus/util";

let res = formatTitle("this is a title");
console.log(res); // 输出：This Is A Title
```

---

### formatTemplate(value,data)

格式化字符串模版

- #### 参数

  `value` {String} 字符串值
  `value` {Object} 模版数据

- #### 返回值

  {String} 返回格式化后的模版字符串

- #### 示例

```javascript
import { formatTemplate } from "@ivu-plus/util";

let res = formatTemplate("这是一个{{title}}", { title: "大标题" });
console.log(res); // 输出：这是一个大标题 
```

---

### formatThousand(num)

格式化千分位数字  
`支持任意数据传参，如果非数字则不会格式化，并返回原数据`

- #### 参数

  `num` {Number|String} 数字

- #### 返回值

  {String} 返回格式化后的千分位数字

- #### 示例

```javascript
import { formatThousand } from "@ivu-plus/util";

let res = formatThousand(1234567.12345);
console.log(res); // 输出：1,234,567.12345
```

---

### formatRmbChinese(money)

格式化人民币金额大写

- #### 参数

  `money` {Number|String} 金额

- #### 返回值

  {String} 返回金额大写

- #### 示例

```javascript
import { formatRmbChinese } from "@ivu-plus/util";

let res = formatAmountChinese(1234567.12345);
console.log(res); // 输出：壹佰贰拾叁万肆仟伍佰陆拾柒元壹角贰分叁毫肆厘
```

---

### formatStartOfName(value)

姓名中间转为星号

- #### 参数

  `value` {String} 姓名

- #### 返回值

  {String} 返回转化后字符串

- #### 示例

```javascript
import { formatStartOfName } from "@ivu-plus/util";

console.log(formatStartOfName("张三")); // 输出：张*
console.log(formatStartOfName("张三封")); // 输出：张*封
console.log(formatStartOfName("张三封封")); // 输出：张**封
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

### formatStartOfIdCard(value, start = 4, len = 8)

手机号码固定位数转为星号

- #### 参数

  `value` {String} 身份证号码
  `start` {Number} 前缀长度，默认 4 位
  `len` {Number} 显示星号的长度，默认 8 位

- #### 返回值

  {String} 返回转化后字符串

- #### 示例

```javascript
import { formatStartOfIdCard } from "@ivu-plus/util";

console.log(formatStartOfIdCard("412929199312223012")); // 输出：4129********223012
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
