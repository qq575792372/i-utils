## 数学 Math

## 数字计算

### add(arg1, arg2)

两个数字相加

- #### 参数

  `arg1` {String|Number} 第一个数字  
  `arg2` {String|Number} 第二个数字

- #### 返回值

  {Number} 返回计算后的数字

- #### 示例

```javascript
import { add } from "@ivujs/util";

let res = add(0.1, 0.2);
console.log(res); // 输出：0.3
```

---

### subtract(arg1, arg2)

两个数字相减

- #### 参数

  `arg1` {String|Number} 第一个数字  
  `arg2` {String|Number} 第二个数字

- #### 返回值

  {Number} 返回计算后的数字

- #### 示例

```javascript
import { subtract } from "@ivujs/util";

let res = subtract(0.2, 0.1);
console.log(res); // 输出：0.1
```

---

### multiply(arg1, arg2)

两个数字相乘

- #### 参数

  `arg1` {String|Number} 第一个数字  
  `arg2` {String|Number} 第二个数字

- #### 返回值

  {Number} 返回计算后的数字

- #### 示例

```javascript
import { multiply } from "@ivujs/util";

let res = multiply(0.1, 0.2);
console.log(res); // 输出：0.2
```

---

### divide(arg1, arg2)

两个数字相除

- #### 参数

  `arg1` {String|Number} 第一个数字  
  `arg2` {String|Number} 第二个数字

- #### 返回值

  {Number} 返回计算后的数字

- #### 示例

```javascript
import { divide } from "@ivujs/util";

let res = divide(1, 2);
console.log(res); // 输出：0.5
```

---

## 数学其他运算

### modulo(arg1, arg2)

两个数字取模

- #### 参数

  `arg1` {String|Number} 第一个数字  
  `arg2` {String|Number} 第二个数字

- #### 返回值

  {Number} 返回计算后的数字

- #### 示例

```javascript
import { modulo } from "@ivujs/util";

let res = modulo(1.1, 1);
console.log(res); // 输出：0.1
```

---

### gcd(arg1, arg2)

最大公约数

- #### 参数

  `arg1` {String|Number} 第一个数字  
  `arg2` {String|Number} 第二个数字

- #### 返回值

  {Number} 返回计算后的数字

- #### 示例

```javascript
import { gcd } from "@ivujs/util";

let res = gcd(2, 10);
console.log(res); // 输出：2
```

---

### scm(arg1, arg2)

最小公倍数

- #### 参数

  `arg1` {String|Number} 第一个数字  
  `arg2` {String|Number} 第二个数字

- #### 返回值

  {Number} 返回计算后的数字

- #### 示例

```javascript
import { scm } from "@ivujs/util";

let res = gcd(4, 10);
console.log(res); // 输出：20
```

---

## 数字精度

### toFixed(num, decimals = 2, mode = MATH.ROUND)

强制保留小数位数  
`默认保留两位小数，解决原生的toFixed()会五舍六入的问题`

- #### 参数

  `num` {String|Number} 数字  
  `decimals` {Number} 保留小数的位数，默认 2 位  
  `mode` {Number} 保留小数模式

- #### 返回值

  {String} 返回保留后的数字字符串

- #### 示例

```javascript
import { toFixed, MATH } from "@ivujs/util";

console.log(toFixed(1, 2)); // 输出：1.00
console.log(toFixed(1.0, 2)); // 输出：1.00
console.log(toFixed(1.01, 2)); // 输出：1.01
console.log(toFixed(1.015, 2)); // 输出：1.02 （默认会四舍五入）
console.log(toFixed(1.015, 2, MATH.ROUND_FLOOR)); // 输出：1.01（切换舍出的模式，会强制截取小数位数，不会再四舍五入）
```

---

### toDecimal(num, decimals = 2, mode = MATH.ROUND)

尽可能保留小数位数

- #### 参数

  `num` {String|Number} 数字  
  `decimals` {Number} 保留小数的位数，默认 2 位  
  `mode` {Number} 保留小数模式

- #### 返回值

  {Number} 返回保留后的数字

- #### 示例

```javascript
import { toDecimal, MATH } from "@ivujs/util";

console.log(toDecimal(1, 2)); // 输出：1
console.log(toDecimal(1.0, 2)); // 输出：1
console.log(toDecimal(1.01, 2)); // 输出：1.01
console.log(toDecimal(1.015, 2)); // 输出：1.01 （注：第二位如果小于等于3，则会是五舍六入）
console.log(toDecimal(1.045, 2)); // 输出：1.01 （注：第二位如果大于3，则是正常的四舍五入）
console.log(toDecimal(1.015, 2, MATH.ROUND_FLOOR)); // 输出：1.01（切换舍出的模式，会强制保留小数位数，不会再四舍五入）
```
