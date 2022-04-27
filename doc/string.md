# 字符串 String

## 字符串处理

### \_.trim(value)

去除字符串前后位置空格

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
let res = LimeUtil.trim(" 123 ");
console.log(res); // 输出：123
```

---

### \_.trimStart(value)

去除字符串开始位置的空格

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
let res = LimeUtil.trimStart(" 123 ");
console.log(res); // 输出：123&nbsp; 后面会有空格
```

---

### \_.trimEnd(value)

去除字符串结束位置的空格

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
let res = LimeUtil.trim(" 123 ");
console.log(res); // 输出：&nbsp;123 前面会有空格
```

---

### \_.trimAll(value)

去除字符串中全部的空格

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
let res = LimeUtil.trimAll(" 1 2 3 ");
console.log(res); // 输出：123
```

---

### \_.replaceAll(value, oldSubstr, newSubstr)

替换所有指定字符串为新的字符串

- #### 参数

  `value` {String} 参数  
  `oldSubstr` {String} 需要替换的字符串  
  `newSubstr` {String} 替换后的字符串

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
let res = LimeUtil.replaceAll("say hello hello!", "hello", "hi");
console.log(res); // 输出：say hi hi!
```

---

<!-- 字符串转换 -->

## 字符串转换

### \_.toUpper(value)

字符串转大写

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
let res = LimeUtil.toUpper("say hello");
console.log(res); // 输出：SAY HELLO
```

---

### \_.toLower(value)

字符串转小写

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
let res = LimeUtil.toLower("Say Hello");
console.log(res); // 输出：say hello
```

---

### \_.toSnakeCase(value)

转为　 snake_case 下划线命名  
`支持 驼峰命名，短横命名，帕斯卡命名`

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
// 驼峰转下划线
console.log(LimeCore.toSnakeCase("userName")); // 输出：user_name
// 短横转下划线
console.log(LimeCore.toSnakeCase("user-name")); // 输出：user_name
// 帕斯卡转下划线
console.log(LimeCore.toSnakeCase("UserName")); // 输出：user_name
```

---

### \_.toKebabCase(value)

转为　 kebab-case 短横命名  
`支持 下划线，驼峰命名，帕斯卡命名`

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
// 下划线转短横
console.log(LimeCore.toKebabCase("user_name")); // 输出：user-name
// 驼峰转短横
console.log(LimeCore.toKebabCase("userName")); // 输出：user-name
// 帕斯卡转短横
console.log(LimeCore.toKebabCase("UserName")); // 输出：user-name
```

---

### \_.toCamelCase(value)

转为　 camelCase 驼峰命名  
`支持 下划线命名，短横命名，帕斯卡命名`

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
// 下划线转驼峰
console.log(LimeCore.toCamelCase("user_name")); // 输出：userName
// 短横转驼峰
console.log(LimeCore.toCamelCase("user-name")); // 输出：userName
// 帕斯卡转驼峰
console.log(LimeCore.toCamelCase("UserName")); // 输出：userName
```

---

### \_.toPascalCase(value)

转为　 PascalCase 帕斯卡命名  
`支持 下划线命名，短横命名，驼峰命名`

- #### 参数

  `value` {String} 参数

- #### 返回值

  {String} 返回处理后的字符串

- #### 示例

```javascript
// 下划线转帕斯卡
console.log(LimeCore.toPascalCase("user_name")); // 输出：UserName
// 短横转帕斯卡
console.log(LimeCore.toPascalCase("user-name")); // 输出：UserName
// 驼峰转帕斯卡
console.log(LimeCore.toPascalCase("userName")); // 输出：UserName
```

---

<!-- 字符串加密 -->

## 字符串加密

工具库只提供了 `base64` 方式加密和解密，你也可以用功能更强大的[crypto-js](https://github.com/brix/crypto-js)，包含了`md5`，`aes`，`sha1`，`sha256` 更多加密方式。

### \_.encode(str)

base64 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
let res = LimeUtil.encode("dGVzdDEyMw==");
console.log(res); // 输出：dGVzdDEyMw==
```

---

### \_.decode(str)

base64 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回解密后的字符串

- #### 示例

```javascript
let res = LimeUtil.decode("dGVzdDEyMw==");
console.log(res); // 输出：test123
```

---

<!-- 字符串格式化 -->

## 字符串格式化

### \_.inString(value, str)

字符串中是否包含指定的元素

- #### 参数

  `value` {String} 包含的元素  
  `str` {String} 查找的字符串

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.inString("hello", "say hello");
console.log(res); // 输出：true
```

---

### \_.zeroStart(value, maxLength = 2)

数字前补齐 0 达到指定位数  
`相当于原生的 padStart(2,'0')`

- #### 参数

  `value` {Number|String} 补零的数字  
  `maxLength` {Number} 补齐 0 后的最大长度，默认 2 位

- #### 返回值

  {String} 返回补 0 后指定位数的字符串

- #### 示例

```javascript
let res = LimeUtil.zeroStart("1", 3);
console.log(res); // 输出：001
```

---

### \_.zeroEnd(value, maxLength = 2)

数字后补齐 0 达到指定位数  
`相当于原生的 padEnd(2,'0')`

- #### 参数

  `value` {Number|String} 补零的数字  
  `maxLength` {Number} 补齐 0 后的最大长度，默认 2 位

- #### 返回值

  {String} 返回补 0 后指定位数的字符串

- #### 示例

```javascript
let res = LimeUtil.zeroEnd("1", 3);
console.log(res); // 输出：100
```

---

### \_.formatThousand(num)

格式化千分位数字  
`支持任意数据传参，如果非数字则不会格式化，并返回原数据`

- #### 参数

  `num` {Number|String} 数字

- #### 返回值

  {String} 返回格式化后的千分位数字

- #### 示例

```javascript
let res = LimeUtil.formatThousand(1234567.12345);
console.log(res); // 输出：1,234,567.12345
```

---

### \_.formatRmbChinese(money)

格式化人民币金额大写

- #### 参数

  `money` {Number|String} 金额

- #### 返回值

  {String} 返回金额大写

- #### 示例

```javascript
let res = LimeUtil.formatAmountChinese(1234567.12345);
console.log(res); // 输出：壹佰贰拾叁万肆仟伍佰陆拾柒元壹角贰分叁毫肆厘
```

---

### \_.formatStartOfName(value)

姓名中间转为星号

- #### 参数

  `value` {String} 姓名

- #### 返回值

  {String} 返回转化后字符串

- #### 示例

```javascript
console.log(LimeUtil.formatStartOfName("张三")); // 输出：张*
console.log(LimeUtil.formatStartOfName("张三封")); // 输出：张*封
console.log(LimeUtil.formatStartOfName("张三封封")); // 输出：张**封
```

---

### \_.formatStartOfMobile(value, start = 3, len = 4)

手机号码固定位数转为星号

- #### 参数

  `value` {String} 手机号码
  `start` {Number} 前缀长度，默认 3 位
  `len` {Number} 显示星号的长度，默认 4 位

- #### 返回值

  {String} 返回转化后字符串

- #### 示例

```javascript
console.log(LimeUtil.formatStartOfMobile("13000000000")); // 输出：130****0000
console.log(LimeUtil.formatStartOfMobile("13000000000", 3, 5)); // 输出：130*****000
```

---

### \_.formatStartOfIdCard(value, start = 4, len = 8)

手机号码固定位数转为星号

- #### 参数

  `value` {String} 身份证号码
  `start` {Number} 前缀长度，默认 4 位
  `len` {Number} 显示星号的长度，默认 8 位

- #### 返回值

  {String} 返回转化后字符串

- #### 示例

```javascript
console.log(LimeUtil.formatStartOfIdCard("412929199312223012")); // 输出：4129********223012
```

---

### \_.formatStartOfBankCard(value, start = 4, len = 11)

手机号码固定位数转为星号

- #### 参数

  `value` {String} 身份证号码
  `start` {Number} 前缀长度，默认 4 位
  `len` {Number} 显示星号的长度，默认 11 位

- #### 返回值

  {String} 返回转化后字符串

- #### 示例

```javascript
console.log(LimeUtil.formatStartOfIdCard("6222021208888993029")); // 输出：6222***********3029
```
