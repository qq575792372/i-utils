## 校验

#### \_.isNaN(value)

判断是非数字

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isNaN("123")); // 输出 true
```

---

#### \_.isInteger(value)

判断是整数

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isInteger("123")); // 输出 true
console.log(LimeUtil.isInteger(12.01)); // 输出 false
```

---

#### \_.isDecimal(value)

判断是小数

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isDecimal("123")); // 输出 false
console.log(LimeUtil.isDecimal(12.01)); // 输出 true
```

---

#### \_.isNumber(value)

判断类型是数字 Number

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isNumber(123)); // 输出 true
console.log(LimeUtil.isNumber("123")); // 输出 false
console.log(LimeUtil.isNumber("3.1dd32")); // 输出 false
```

---

#### \_.isString(value)

判断类型是字符串 String

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isString("123")); // 输出 true
console.log(LimeUtil.isString(12.01)); // 输出 false
```

---

#### \_.isArray(value)

判断类型是数组 Array

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isArray("123")); // 输出 false
console.log(LimeUtil.isArray([1, 2])); // 输出 true
```

---

#### \_.isObject(value)

判断类型是对象 Object

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isObject({ id: 1 })); // 输出 true
console.log(LimeUtil.isObject(12.01)); // 输出 false
```

---

#### \_.isBoolean(value)

判断类型是布尔 Boolean

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isBoolean(true)); // 输出 true
console.log(LimeUtil.isBoolean(12.01)); // 输出 false
```

---

#### \_.isDate(value)

判断类型是日期 Date

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isDate(new Date())); // 输出 true
console.log(LimeUtil.isDate(12.01)); // 输出 false
```

---

#### \_.isFunction(value)

判断类型是函数 Function

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isFunction(function () {})); // 输出 true
console.log(LimeUtil.isFunction(12.01)); // 输出 false
```

---

#### \_.isSymbol(value)

判断类型是 Symbol

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isSymbol(Symbol(1))); // 输出 true
console.log(LimeUtil.isSymbol(12.01)); // 输出 false
```

---

#### \_.isRegExp(value)

判断类型是正则 RegExp

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isRegExp(/^\d$/)); // 输出 true
console.log(LimeUtil.isRegExp(new RegExp())); // 输出 true
console.log(LimeUtil.isRegExp(12.01)); // 输出 false
```

---

#### \_.isError(value)

判断类型是错误 Error

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isError(new Error("has error"))); // 输出 true
console.log(LimeUtil.isError(12.01)); // 输出 false
```

---

#### \_.isPromise(value)

判断类型是 Promise

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isPromise(Promise.resolve())); // 输出 true
console.log(LimeUtil.isPromise(12.01)); // 输出 false
```

---

#### \_.isChinese(value)

判断字符串是否全是中文

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isChinese("中文")); // 输出 true
console.log(LimeUtil.isChinese(12.01)); // 输出 false
```

---

<!-- 数据值校验 -->

#### \_.isEmpty(value)

判断值是否为空
`针对的是实际有意义的值，如果值是{},[]空的数据则为空`

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isEmpty(11)); // 输出 false
console.log(LimeUtil.isEmpty(" ")); // 输出 false
console.log(LimeUtil.isEmpty(null)); // 输出 true
console.log(LimeUtil.isEmpty(undefined)); // 输出 true
```

---

#### \_.isNull(value)

判断对象是否为空
`针对的是对象初始化数据，如果值是{},[]等初始化过的则不为空`

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isNull(null)); // 输出 true
console.log(LimeUtil.isNull(undefined)); // 输出 true
console.log(LimeUtil.isNull(" ")); // 输出 false
console.log(LimeUtil.isNull(12.01)); // 输出 false
```

---

#### \_.isBlank(value)

判断是否值空的
`除了对null，undefined等校验，还会校验空格`

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isBlank(" ")); // 输出 true
console.log(LimeUtil.isBlank(null)); // 输出 true
console.log(LimeUtil.isBlank(undefined)); // 输出 true
console.log(LimeUtil.isBlank(12.01)); // 输出 false
```

---

#### \_.isUndefined(value)

判断值是否是 undefined

- ##### 参数

  `value` {\*} 参数

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.isUndefined(undefined)); // 输出 true
console.log(LimeUtil.isUndefined(null)); // 输出 false
console.log(LimeUtil.isUndefined("")); // 输出 false
console.log(LimeUtil.isUndefined(12.01)); // 输出 false
```

---

<!-- 比较 -->

#### \_.equals(value)

判断两个值是否相等

- ##### 参数

  `value1` {String|Number} 参数 1
  `value2` {String|Number} 参数 2

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.equals("1", "1")); // 输出 true
console.log(LimeUtil.equals("abc", "ABC")); // 输出 false
console.log(LimeUtil.equals(12, 12)); // 输出 true
console.log(LimeUtil.equals(121, 12)); // 输出 false
```

---

#### \_.equalsIgnoreCase(value)

判断两个值是否相等（忽略大小写）

- ##### 参数

  `value1` {String|Number} 参数 1
  `value2` {String|Number} 参数 2

- ##### 返回值

  {Boolean} 回 true 和 false

- ##### 示例

```javascript
console.log(LimeUtil.equalsIgnoreCase("1", "1")); // 输出 true
console.log(LimeUtil.equalsIgnoreCase("abc", "ABC")); // 输出 false
console.log(LimeUtil.equalsIgnoreCase(12, 12)); // 输出 true
console.log(LimeUtil.equalsIgnoreCase(121, 12)); // 输出 false
```
