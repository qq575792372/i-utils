# 校验 Validate

## 数据类型

### isInteger(value)

判断是整数

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isInteger } from "@ivu-plus/i-utils";

console.log(isInteger("123")); // 输出：true
console.log(isInteger(12.01)); // 输出：false
```

---

### isDecimal(value)

判断是小数

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isDecimal } from "@ivu-plus/i-utils";

console.log(isDecimal("123")); // 输出：false
console.log(isDecimal(12.01)); // 输出：true
```

---

### isNumber(value)

判断类型是数字 Number

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isNumber } from "@ivu-plus/i-utils";

console.log(isNumber(123)); // 输出：true
console.log(isNumber("123")); // 输出：false
console.log(isNumber("3.1dd32")); // 输出：false
```

---

### isString(value)

判断类型是字符串 String

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isString } from "@ivu-plus/i-utils";

console.log(isString("123")); // 输出：true
console.log(isString(12.01)); // 输出：false
```

---

### isArray(value)

判断类型是数组 Array

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isArray } from "@ivu-plus/i-utils";

console.log(isArray("123")); // 输出：false
console.log(isArray([1, 2])); // 输出：true
```

---

### isObject(value)

判断类型是对象 Object

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isObject } from "@ivu-plus/i-utils";

console.log(isObject({ id: 1 })); // 输出：true
console.log(isObject(12.01)); // 输出：false
```

---

### isBoolean(value)

判断类型是布尔 Boolean

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isBoolean } from "@ivu-plus/i-utils";

console.log(isBoolean(true)); // 输出：true
console.log(isBoolean(12.01)); // 输出：false
```

---

### isDate(value)

判断类型是日期 Date

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isDate } from "@ivu-plus/i-utils";

console.log(isDate(new Date())); // 输出：true
console.log(isDate(12.01)); // 输出：false
```

---

### isFunction(value)

判断类型是函数 Function

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isFunction } from "@ivu-plus/i-utils";

console.log(isFunction(function() {
})); // 输出：true
console.log(isFunction(12.01)); // 输出：false
```

---

### isFunctionString(value)

判断类型是函数字符串 FunctionString

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isFunctionString } from "@ivu-plus/i-utils";

console.log(isFunctionString("function (str, $num) {}")); // 输出：true
console.log(isFunctionString("(str, $num) => {}")); // 输出：true
console.log(isFunctionString("async (str, $num) => {}")); // 输出：true
console.log(isFunctionString("async function(str, $num) {}")); // 输出：true
console.log(isFunctionString("async function test(str, $num) {}")); // 输出：true
console.log(isFunctionString("async function $test($str, $num) {}")); // 输出：true
console.log(isFunctionString("var fn = function (str, $num) {}")); // 输出：false
```
---

### isAsyncFunction(value)

判断类型是异步函数 AsyncFunction

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isAsyncFunction } from "@ivu-plus/i-utils";

// 演示是async异步函数和async箭头函数
console.log(isAsyncFunction(async function() {
})); // 输出：true
console.log(isAsyncFunction(async () => {
})); // 输出：true

// 演示普通函数和箭头函数
console.log(isAsyncFunction(() => {
})); // 输出：false
console.log(isAsyncFunction(function() {
})); // 输出：false
```

---

### isSymbol(value)

判断类型是 Symbol

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isSymbol } from "@ivu-plus/i-utils";

console.log(isSymbol(Symbol(1))); // 输出：true
console.log(isSymbol(12.01)); // 输出：false
```

---

### isRegExp(value)

判断类型是正则 RegExp

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isRegExp } from "@ivu-plus/i-utils";

console.log(isRegExp(/^\d$/)); // 输出：true
console.log(isRegExp(new RegExp())); // 输出：true
console.log(isRegExp(12.01)); // 输出：false
```

---

### isError(value)

判断类型是错误 Error

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isError } from "@ivu-plus/i-utils";

console.log(isError(new Error("has error"))); // 输出：true
console.log(isError(12.01)); // 输出：false
```

---

### isPromise(value)

判断类型是 Promise

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isPromise } from "@ivu-plus/i-utils";

console.log(isPromise(Promise.resolve())); // 输出：true
console.log(isPromise(12.01)); // 输出：false
```

---

### isMap(value)

判断类型是 Map

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isMap } from "@ivu-plus/i-utils";

console.log(isMap(new Map())); // 输出：true
```

---

### isWeakMap(value)

判断类型是 WeakMap

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isWeakMap } from "@ivu-plus/i-utils";

console.log(isWeakMap(new WeakMap())); // 输出：true
```

---

### isSet(value)

判断类型是 Set

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isSet } from "@ivu-plus/i-utils";

console.log(isSet(new Set())); // 输出：true
```

---

### isWeakSet(value)

判断类型是 WeakSet

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isWeakSet } from "@ivu-plus/i-utils";

console.log(isWeakSet(new WeakSet())); // 输出：true
```

---

### isBigInt(value)

判断类型是 BigInt

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isBigInt } from "@ivu-plus/i-utils";

console.log(isBigInt(new BigInt())); // 输出：true
```

---

### isJson(value)

判断类型是 Json

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isJson } from "@ivu-plus/i-utils";

console.log(isJson({ "name": "test" })); // 输出：true
```

---

## 数据值校验

### isTrue(value)

判断值为真

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isTrue } from "@ivu-plus/i-utils";

console.log(isTrue(1)); // 输出：true
console.log(isTrue(0)); // 输出：false
console.log(isTrue(null)); // 输出：false
console.log(isTrue("")); // 输出：false
console.log(isTrue(undefined)); // 输出：false
console.log(isTrue("undefined")); // 输出：false
console.log(isTrue("null")); // 输出：false
```

---

### isFalse(value)

判断值为假

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isFalse } from "@ivu-plus/i-utils";

console.log(isFalse(1)); // 输出：false
console.log(isFalse(0)); // 输出：true
console.log(isFalse(null)); // 输出：true
console.log(isFalse("")); // 输出：true
console.log(isFalse(undefined)); // 输出：true
console.log(isFalse("undefined")); // 输出：true
console.log(isFalse("null")); // 输出：true
```

---

### isNaN(value)

判断非数字

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isNaN } from "@ivu-plus/i-utils";

console.log(isNaN("abc")); // 输出：true
console.log(isNaN("123")); // 输出：false
```

---

### isNotNaN(value)

判断是数字  
`等同于 isNumber()`

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isNotNaN } from "@ivu-plus/i-utils";

console.log(isNotNaN("abc")); // 输出：false
console.log(isNotNaN("123")); // 输出：true
```

---

### isNull(value)

判断对象为空  
`判断值是否为空，如果对象初始化了值则不为空`

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isNull } from "@ivu-plus/i-utils";

console.log(isNull(null)); // 输出：true
console.log(isNull(undefined)); // 输出：true
console.log(isNull(" ")); // 输出：false
console.log(isNull(12.01)); // 输出：false
```

---

### isNotNull(value)

判断对象不为空  
`判断值是否为空，如果对象初始化了值则不为空`

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isNotNull } from "@ivu-plus/i-utils";

console.log(isNotNull(null)); // 输出：false
console.log(isNotNull(undefined)); // 输出：false
console.log(isNotNull(" ")); // 输出：true
console.log(isNotNull(12.01)); // 输出：true
```

---

### isEmpty(value)

判断值为空
`判断是否是有意义不为空的值，如果值是{},[]空的数据则为空`

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isEmpty } from "@ivu-plus/i-utils";

console.log(isEmpty(11)); // 输出：false
console.log(isEmpty(" ")); // 输出：false
console.log(isEmpty(null)); // 输出：true
console.log(isEmpty(undefined)); // 输出：true
```

---

### isNotEmpty(value)

判断值不为空
`判断是否是有意义不为空的值，如果值是{},[]空的数据则为空`

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isNotEmpty } from "@ivu-plus/i-utils";

console.log(isNotEmpty(11)); // 输出：true
console.log(isNotEmpty(" ")); // 输出：true
console.log(isNotEmpty(null)); // 输出：false
console.log(isNotEmpty(undefined)); // 输出：false
```

---

### isBlank(value)

判断值是空白的  
`同时会校验空值，空对象，以及空白符号`

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isBlank } from "@ivu-plus/i-utils";

console.log(isBlank(" ")); // 输出：true
console.log(isBlank(null)); // 输出：true
console.log(isBlank(undefined)); // 输出：true
console.log(isBlank(12.01)); // 输出：false
```

---

### isNotBlank(value)

判断值不是空白的
`同时会校验空值，空对象，以及空白符号`

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isNotBlank } from "@ivu-plus/i-utils";

console.log(isNotBlank(" ")); // 输出：false
console.log(isNotBlank(null)); // 输出：false
console.log(isNotBlank(undefined)); // 输出：false
console.log(isNotBlank(12.01)); // 输出：true
```

---

### isUndefined(value)

判断值是 undefined

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isUndefined } from "@ivu-plus/i-utils";

console.log(isUndefined(undefined)); // 输出：true
console.log(isUndefined(null)); // 输出：false
console.log(isUndefined("")); // 输出：false
console.log(isUndefined(12.01)); // 输出：false
```

---

### isNotUndefined(value)

判断值不是 undefined

- #### 参数

  `value` {\*} 参数

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { isNotUndefined } from "@ivu-plus/i-utils";

console.log(isNotUndefined(undefined)); // 输出：false
console.log(isNotUndefined(null)); // 输出：true
console.log(isNotUndefined("")); // 输出：true
console.log(isNotUndefined(12.01)); // 输出：true
```

---

## 数据比较

### equals(value)

判断两个值是否相等

- #### 参数

  `value1` {String|Number} 参数 1  
  `value2` {String|Number} 参数 2

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { equals } from "@ivu-plus/i-utils";

console.log(equals("1", "1")); // 输出：true
console.log(equals("abc", "ABC")); // 输出：false
console.log(equals(12, 12)); // 输出：true
console.log(equals(121, 12)); // 输出：false
```

---

### equalsIgnoreCase(value)

判断两个值是否相等（忽略大小写）

- #### 参数

  `value1` {String|Number} 参数 1  
  `value2` {String|Number} 参数 2

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { equalsIgnoreCase } from "@ivu-plus/i-utils";

console.log(equalsIgnoreCase("1", "1")); // 输出：true
console.log(equalsIgnoreCase("abc", "ABC")); // 输出：false
console.log(equalsIgnoreCase(12, 12)); // 输出：true
console.log(equalsIgnoreCase(121, 12)); // 输出：false
```

---

### deepCompare(value)

深度对比数据
`可以对比任意数据，对象，数组，日期等也可深度对比，对象不区分先后顺序`

- #### 参数

  `x` {\*} 数据 1  
  `y` {\*} 数据 2

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { deepCompare } from "@ivu-plus/i-utils";

// 基础场景
console.log(deepCompare(1, 1)); // 输出：true
console.log(deepCompare(0, -0)); // 输出：true
console.log(deepCompare(1, "-1")); // 输出：false

// 复杂场景1
// 对象属性不区分顺序
let obj1 = { id: 1, name: "test" };
let obj2 = { name: "test", id: 1 };
console.log(deepCompare(obj1, obj2)); // 输出：true

// 复杂场景2
// 对象可以判断函数属性
let obj1 = {
  id: 1, name: "test", say: function() {
  }
};
let obj2 = {
  name: "test", id: 1, say: function() {
  }
};
console.log(deepCompare(obj1, obj2)); // 输出：true

// 复杂场景3
// 数组对象也可以深层次的判断
let arr1 = [{
  id: 1, name: "test", info: { age: 10 }, say: function() {
  }
}];
let arr2 = [{
  id: 1, name: "test", info: { age: 10 }, say: function() {
  }
}];
console.log(deepCompare(arr1, arr2)); // 输出：true
```
