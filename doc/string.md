## 字符串

#### \_.trim(value)

去除字符串两边空格

- ##### 参数

  `value` {String} 参数

- ##### 返回值

  {String} 返回处理后的字符串

- ##### 示例

```javascript
let res = LimeUtil.trim(" 123 ");
console.log(res); // 输出：123
```

---

#### \_.trimStart(value)

去除字符串开始位置的空格

- ##### 参数

  `value` {String} 参数

- ##### 返回值

  {String} 返回处理后的字符串

- ##### 示例

```javascript
let res = LimeUtil.trimStart(" 123 ");
console.log(res); // 输出：123&nbsp; 后面会有空格
```

---

#### \_.trimEnd(value)

去除字符串结束位置的空格

- ##### 参数

  `value` {String} 参数

- ##### 返回值

  {String} 返回处理后的字符串

- ##### 示例

```javascript
let res = LimeUtil.trim(" 123 ");
console.log(res); // 输出：&nbsp;123 前面会有空格
```

---

#### \_.trimAll(value)

去除字符串中全部的空格

- ##### 参数

  `value` {String} 参数

- ##### 返回值

  {String} 返回处理后的字符串

- ##### 示例

```javascript
let res = LimeUtil.trimAll(" 1 2 3 ");
console.log(res); // 输出：123
```

---

#### \_.replaceAll(value, oldSubstr, newSubstr)

替换字符串中所有指定的字符为新的字符串

- ##### 参数

  `value` {String} 参数  
  `oldSubstr` {String} 需要替换的字符串  
  `newSubstr` {String} 替换后的字符串

- ##### 返回值

  {String} 返回处理后的字符串

- ##### 示例

```javascript
let res = LimeUtil.replaceAll("say hello hello!", "hello", "hi");
console.log(res); // 输出：say hi hi!
```

---

#### \_.toUpper(value)

字符串转大写

- ##### 参数

  `value` {String} 参数

- ##### 返回值

  {String} 返回处理后的字符串

- ##### 示例

```javascript
let res = LimeUtil.toUpper("say hello");
console.log(res); // 输出：SAY HELLO
```

---

#### \_.toLower(value)

字符串转小写

- ##### 参数

  `value` {String} 参数

- ##### 返回值

  {String} 返回处理后的字符串

- ##### 示例

```javascript
let res = LimeUtil.toLower("Say Hello");
console.log(res); // 输出：say hello
```

---

#### \_.isInString(value, str)

字符串中是否包含指定的元素

- ##### 参数

  `value` {String} 包含的元素  
  `str` {String} 查找的字符串

- ##### 返回值

  {Boolean} 返回 true 和 false

- ##### 示例

```javascript
let res = LimeUtil.isInString("hello", "say hello");
console.log(res); // 输出：true
```

---

#### \_.getIndexInString(value, str)

获得元素在字符串中首次出现的位置

- ##### 参数

  `value` {String} 包含的元素  
  `str` {String} 查找的字符串

- ##### 返回值

  {Number} 返回查找到的位置下标

- ##### 示例

```javascript
let res = LimeUtil.getIndexInString("hello", "say hello");
console.log(res); // 输出：4（hello的第一个字母在下标是4的位置）
```

---

#### \_.zeroStart(value, maxLength = 2)

数字前补齐 0 达到指定位数  
<span style="color:#808695">`相当于原生的 padStart(2,'0')`</span>

- ##### 参数

  `value` {Number|String} 补零的数字  
  `maxLength` {Number} 补齐 0 后的最大长度，默认 2 位

- ##### 返回值

  {String} 返回补 0 后指定位数的字符串

- ##### 示例

```javascript
let res = LimeUtil.zeroStart("1", 3);
console.log(res); // 输出：001
```

---

#### \_.zeroEnd(value, maxLength = 2)

数字后补齐 0 达到指定位数  
<span style="color:#808695">`相当于原生的 padEnd(2,'0')`</span>

- ##### 参数

  `value` {Number|String} 补零的数字  
  `maxLength` {Number} 补齐 0 后的最大长度，默认 2 位

- ##### 返回值

  {String} 返回补 0 后指定位数的字符串

- ##### 示例

```javascript
let res = LimeUtil.zeroEnd("1", 3);
console.log(res); // 输出：100
```

---

#### \_.formatThousand(num)

格式化千分位数字

- ##### 参数

  `num` {Number|String} 数字

- ##### 返回值

  {String} 返回格式化后的千分位数字

- ##### 示例

```javascript
let res = LimeUtil.formatThousand(1234567.12345);
console.log(res); // 输出：1,234,567.12345
```

---

#### \_.formatRmbChinese(money)

格式化人民币金额大写

- ##### 参数

  `money` {Number|String} 金额

- ##### 返回值

  {String} 返回金额大写

- ##### 示例

```javascript
let res = LimeUtil.formatAmountChinese(1234567.12345);
console.log(res); // 输出：壹佰贰拾叁万肆仟伍佰陆拾柒元壹角贰分叁毫肆厘
```
