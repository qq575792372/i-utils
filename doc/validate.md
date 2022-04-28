# 校验 Validate

<!-- 数据类型 -->

## 数据类型

### \_.isInteger(value)

判断是整数

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isInteger("123")); // 输出：true
console.log(LimeUtil.isInteger(12.01)); // 输出：false
```

---

### \_.isDecimal(value)

判断是小数

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isDecimal("123")); // 输出：false
console.log(LimeUtil.isDecimal(12.01)); // 输出：true
```

---

### \_.isNumber(value)

判断类型是数字 Number

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isNumber(123)); // 输出：true
console.log(LimeUtil.isNumber("123")); // 输出：false
console.log(LimeUtil.isNumber("3.1dd32")); // 输出：false
```

---

### \_.isString(value)

判断类型是字符串 String

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isString("123")); // 输出：true
console.log(LimeUtil.isString(12.01)); // 输出：false
```

---

### \_.isArray(value)

判断类型是数组 Array

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isArray("123")); // 输出：false
console.log(LimeUtil.isArray([1, 2])); // 输出：true
```

---

### \_.isObject(value)

判断类型是对象 Object

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isObject({ id: 1 })); // 输出：true
console.log(LimeUtil.isObject(12.01)); // 输出：false
```

---

### \_.isBoolean(value)

判断类型是布尔 Boolean

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isBoolean(true)); // 输出：true
console.log(LimeUtil.isBoolean(12.01)); // 输出：false
```

---

### \_.isDate(value)

判断类型是日期 Date

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isDate(new Date())); // 输出：true
console.log(LimeUtil.isDate(12.01)); // 输出：false
```

---

### \_.isFunction(value)

判断类型是函数 Function

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isFunction(function () {})); // 输出：true
console.log(LimeUtil.isFunction(12.01)); // 输出：false
```

---

### \_.isSymbol(value)

判断类型是 Symbol

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isSymbol(Symbol(1))); // 输出：true
console.log(LimeUtil.isSymbol(12.01)); // 输出：false
```

---

### \_.isRegExp(value)

判断类型是正则 RegExp

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isRegExp(/^\d$/)); // 输出：true
console.log(LimeUtil.isRegExp(new RegExp())); // 输出：true
console.log(LimeUtil.isRegExp(12.01)); // 输出：false
```

---

### \_.isError(value)

判断类型是错误 Error

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isError(new Error("has error"))); // 输出：true
console.log(LimeUtil.isError(12.01)); // 输出：false
```

---

### \_.isPromise(value)

判断类型是 Promise

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isPromise(Promise.resolve())); // 输出：true
console.log(LimeUtil.isPromise(12.01)); // 输出：false
```

---

### \_.isMap(value)

判断类型是 Map

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isMap(new Map())); // 输出：true
```

---

### \_.isWeakMap(value)

判断类型是 WeakMap

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isWeakMap(new WeakMap())); // 输出：true
```

---

### \_.isSet(value)

判断类型是 Set

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isSet(new Set())); // 输出：true
```

---

### \_.isWeakSet(value)

判断类型是 WeakSet

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isWeakSet(new WeakSet())); // 输出：true
```

---

### \_.isBigInt(value)

判断类型是 BigInt

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isBigInt(new BigInt())); // 输出：true
```

---

<!-- 数据值校验 -->

## 数据值校验

### \_.isTrue(value)

判断值为真

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isTrue(1)); // 输出：true
console.log(LimeUtil.isTrue(0)); // 输出：false
console.log(LimeUtil.isTrue(null)); // 输出：false
console.log(LimeUtil.isTrue("")); // 输出：false
console.log(LimeUtil.isTrue(undefined)); // 输出：false
console.log(LimeUtil.isTrue("undefined")); // 输出：false
console.log(LimeUtil.isTrue("null")); // 输出：false
```

---

### \_.isFalse(value)

判断值为假

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isFalse(1)); // 输出：false
console.log(LimeUtil.isFalse(0)); // 输出：true
console.log(LimeUtil.isFalse(null)); // 输出：true
console.log(LimeUtil.isFalse("")); // 输出：true
console.log(LimeUtil.isFalse(undefined)); // 输出：true
console.log(LimeUtil.isFalse("undefined")); // 输出：true
console.log(LimeUtil.isFalse("null")); // 输出：true
```

---

### \_.isNaN(value)

判断非数字

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isNaN("abc")); // 输出：true
console.log(LimeUtil.isNaN("123")); // 输出：false
```

---

### \_.isNotNaN(value)

判断是数字  
`等同于 isNumber()`

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isNotNaN("abc")); // 输出：false
console.log(LimeUtil.isNotNaN("123")); // 输出：true
```

---

### \_.isNull(value)

判断对象为空  
`判断值是否为空，如果对象初始化了值则不为空`

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isNull(null)); // 输出：true
console.log(LimeUtil.isNull(undefined)); // 输出：true
console.log(LimeUtil.isNull(" ")); // 输出：false
console.log(LimeUtil.isNull(12.01)); // 输出：false
```

---

### \_.isNotNull(value)

判断对象不为空  
`判断值是否为空，如果对象初始化了值则不为空`

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isNotNull(null)); // 输出：false
console.log(LimeUtil.isNotNull(undefined)); // 输出：false
console.log(LimeUtil.isNotNull(" ")); // 输出：true
console.log(LimeUtil.isNotNull(12.01)); // 输出：true
```

---

### \_.isEmpty(value)

判断值为空
`判断是否是有意义不为空的值，如果值是{},[]空的数据则为空`

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isEmpty(11)); // 输出：false
console.log(LimeUtil.isEmpty(" ")); // 输出：false
console.log(LimeUtil.isEmpty(null)); // 输出：true
console.log(LimeUtil.isEmpty(undefined)); // 输出：true
```

---

### \_.isNotEmpty(value)

判断值不为空
`判断是否是有意义不为空的值，如果值是{},[]空的数据则为空`

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isNotEmpty(11)); // 输出：true
console.log(LimeUtil.isNotEmpty(" ")); // 输出：true
console.log(LimeUtil.isNotEmpty(null)); // 输出：false
console.log(LimeUtil.isNotEmpty(undefined)); // 输出：false
```

---

### \_.isBlank(value)

判断值是空白的  
`同时会校验空值，空对象，以及空白符号`

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isBlank(" ")); // 输出：true
console.log(LimeUtil.isBlank(null)); // 输出：true
console.log(LimeUtil.isBlank(undefined)); // 输出：true
console.log(LimeUtil.isBlank(12.01)); // 输出：false
```

---

### \_.isNotBlank(value)

判断值不是空白的
`同时会校验空值，空对象，以及空白符号`

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isNotBlank(" ")); // 输出：false
console.log(LimeUtil.isNotBlank(null)); // 输出：false
console.log(LimeUtil.isNotBlank(undefined)); // 输出：false
console.log(LimeUtil.isNotBlank(12.01)); // 输出：true
```

---

### \_.isUndefined(value)

判断值是 undefined

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isUndefined(undefined)); // 输出：true
console.log(LimeUtil.isUndefined(null)); // 输出：false
console.log(LimeUtil.isUndefined("")); // 输出：false
console.log(LimeUtil.isUndefined(12.01)); // 输出：false
```

---

### \_.isNotUndefined(value)

判断值不是 undefined

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.isNotUndefined(undefined)); // 输出：false
console.log(LimeUtil.isNotUndefined(null)); // 输出：true
console.log(LimeUtil.isNotUndefined("")); // 输出：true
console.log(LimeUtil.isNotUndefined(12.01)); // 输出：true
```

---

<!-- 数据比较 -->

## 数据比较

### \_.equals(value)

判断两个值是否相等

- #### 参数

  `value1` {String|Number} 参数 1  
  `value2` {String|Number} 参数 2

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.equals("1", "1")); // 输出：true
console.log(LimeUtil.equals("abc", "ABC")); // 输出：false
console.log(LimeUtil.equals(12, 12)); // 输出：true
console.log(LimeUtil.equals(121, 12)); // 输出：false
```

---

### \_.equalsIgnoreCase(value)

判断两个值是否相等（忽略大小写）

- #### 参数

  `value1` {String|Number} 参数 1  
  `value2` {String|Number} 参数 2

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
console.log(LimeUtil.equalsIgnoreCase("1", "1")); // 输出：true
console.log(LimeUtil.equalsIgnoreCase("abc", "ABC")); // 输出：false
console.log(LimeUtil.equalsIgnoreCase(12, 12)); // 输出：true
console.log(LimeUtil.equalsIgnoreCase(121, 12)); // 输出：false
```

---

### \_.deepCompare(value)

深度对比数据
`可以对比任意数据，对象，数组，日期等也可深度对比，对象不区分先后顺序`

- #### 参数

  `x` {\*} 数据 1  
  `y` {\*} 数据 2

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
// 基础场景
console.log(LimeUtil.deepCompare(1, 1)); // 输出：true
console.log(LimeUtil.deepCompare(0, -0)); // 输出：true
console.log(LimeUtil.deepCompare(1, "-1")); // 输出：false

// 复杂场景1
// 对象属性不区分顺序
let obj1 = { id: 1, name: "test" };
let obj2 = { name: "test", id: 1 };
console.log(LimeUtil.deepCompare(obj1, obj2)); // 输出：true

// 复杂场景2
// 对象可以判断函数属性
let obj1 = { id: 1, name: "test", say: function () {} };
let obj2 = { name: "test", id: 1, say: function () {} };
console.log(LimeUtil.deepCompare(obj1, obj2)); // 输出：true

// 复杂场景3
// 数组对象也可以深层次的判断
let arr1 = [{ id: 1, name: "test", info: { age: 10 }, say: function () {} }];
let arr2 = [{ id: 1, name: "test", info: { age: 10 }, say: function () {} }];
console.log(LimeUtil.deepCompare(arr1, arr2)); // 输出：true
```
