## 数学 Math

<!-- 数字计算 -->

## 数字计算

### \_.add(arg1, arg2)

两个数字相加

- #### 参数

  `arg1` {String|Number} 第一个数字  
  `arg2` {String|Number} 第二个数字

- #### 返回值

  {Number} 返回计算后的数字

- #### 示例

```javascript
let res = LimeUtil.add(0.1, 0.2);
console.log(res); // 输出：0.3
```

---

### \_.subtract(arg1, arg2)

两个数字相减

- #### 参数

  `arg1` {String|Number} 第一个数字  
  `arg2` {String|Number} 第二个数字

- #### 返回值

  {Number} 返回计算后的数字

- #### 示例

```javascript
let res = LimeUtil.subtract(0.2, 0.1);
console.log(res); // 输出：0.1
```

---

### \_.multiply(arg1, arg2)

两个数字相乘

- #### 参数

  `arg1` {String|Number} 第一个数字  
  `arg2` {String|Number} 第二个数字

- #### 返回值

  {Number} 返回计算后的数字

- #### 示例

```javascript
let res = LimeUtil.multiply(0.1, 0.2);
console.log(res); // 输出：0.2
```

---

### \_.divide(arg1, arg2)

两个数字相除

- #### 参数

  `arg1` {String|Number} 第一个数字  
  `arg2` {String|Number} 第二个数字

- #### 返回值

  {Number} 返回计算后的数字

- #### 示例

```javascript
let res = LimeUtil.divide(1, 2);
console.log(res); // 输出：0.5
```

---

<!-- 数学其他运算 -->

### \_.modulo(arg1, arg2)

两个数字取模

- #### 参数

  `arg1` {String|Number} 第一个数字  
  `arg2` {String|Number} 第二个数字

- #### 返回值

  {Number} 返回计算后的数字

- #### 示例

```javascript
let res = LimeUtil.modulo(1.1, 1);
console.log(res); // 输出：0.1
```

---

### \_.gcd(arg1, arg2)

最大公约数

- #### 参数

  `arg1` {String|Number} 第一个数字  
  `arg2` {String|Number} 第二个数字

- #### 返回值

  {Number} 返回计算后的数字

- #### 示例

```javascript
let res = LimeUtil.gcd(2, 10);
console.log(res); // 输出：2
```

---

### \_.scm(arg1, arg2)

最小公倍数

- #### 参数

  `arg1` {String|Number} 第一个数字  
  `arg2` {String|Number} 第二个数字

- #### 返回值

  {Number} 返回计算后的数字

- #### 示例

```javascript
let res = LimeUtil.gcd(4, 10);
console.log(res); // 输出：20
```

---

<!-- 数字精度 -->

## 数字精度

### \_.toFixed(num, decimals = 2, mode = ROUND)

强制保留小数位数  
`默认保留两位小数，解决原生的toFixed()会五舍六入的问题`

- #### 参数

  `num` {String|Number} 数字  
  `decimals` {Number} 保留小数的位数，默认 2 位  
  `mode` {Constant} 保留小数模式，参考<span style="color:#ff9900">`常量集合`</span> 中 <span style="color:#ff9900">`数学计算`</span>，默认<span style="color:#ff9900">`ROUND`</span>

- #### 返回值

  {String} 返回保留后的数字字符串

- #### 示例

```javascript
console.log(LimeUtil.toFixed(1, 2)); // 输出：1.00
console.log(LimeUtil.toFixed(1.0, 2)); // 输出：1.00
console.log(LimeUtil.toFixed(1.01, 2)); // 输出：1.01
console.log(LimeUtil.toFixed(1.015, 2)); // 输出：1.02 （默认会四舍五入）
console.log(LimeUtil.toFixed(1.015, 2, ROUND_FLOOR)); // 输出：1.01（切换舍出的模式，会强制截取小数位数，不会再四舍五入）
```

---

### \_.toDecimal(num, decimals = 2, mode = ROUND)

尽可能保留小数位数

- #### 参数

  `num` {String|Number} 数字  
  `decimals` {Number} 保留小数的位数，默认 2 位  
  `mode` {Constant} 保留小数模式，参考<span style="color:#ff9900">`常量集合`</span> 中 <span style="color:#ff9900">`数学计算`</span>，默认<span style="color:#ff9900">`ROUND`</span>

- #### 返回值

  {Number} 返回保留后的数字

- #### 示例

```javascript
console.log(LimeUtil.toDecimal(1, 2)); // 输出：1
console.log(LimeUtil.toDecimal(1.0, 2)); // 输出：1
console.log(LimeUtil.toDecimal(1.01, 2)); // 输出：1.01
console.log(LimeUtil.toDecimal(1.015, 2)); // 输出：1.01 （注：第二位如果小于等于3，则会是五舍六入）
console.log(LimeUtil.toDecimal(1.045, 2)); // 输出：1.01 （注：第二位如果大于3，则是正常的四舍五入）
console.log(LimeUtil.toDecimal(1.015, 2, LimeUtil.ROUND_FLOOR)); // 输出：1.01（切换舍出的模式，会强制保留小数位数，不会再四舍五入）
```
