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
console.log(res); // 输出 123
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
console.log(res); // 输出 123&nbsp; 后面会有空格
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
console.log(res); // 输出 &nbsp;123 前面会有空格
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
console.log(res); // 输出 123
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
console.log(res); // 输出 say hi hi!
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
console.log(res); // 输出 true
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
console.log(res); // 输出 4（hello的第一个字母在下标是4的位置）
```

---

#### \_.zeroStart(value, maxLength = 2)

数字前补齐 0 达到指定位数
`相当于原生的 padStart(2,'0')`

- ##### 参数

  `value` {String|Number} 补零的数字
  `maxLength` {Number} 补齐 0 后的最大长度，默认 2 位

- ##### 返回值

  {String} 返回补 0 后指定位数的字符串

- ##### 示例

```javascript
let res = LimeUtil.zeroStart("1", 3);
console.log(res); // 输出 001
```

---

#### \_.zeroEnd(value, maxLength = 2)

数字后补齐 0 达到指定位数
`相当于原生的 padEnd(2,'0')`

- ##### 参数

  `value` {String|Number} 补零的数字
  `maxLength` {Number} 补齐 0 后的最大长度，默认 2 位

- ##### 返回值

  {String} 返回补 0 后指定位数的字符串

- ##### 示例

```javascript
let res = LimeUtil.zeroEnd("1", 3);
console.log(res); // 输出 100
```
