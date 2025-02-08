# 数字 Number

### parseInt(value, radix = 10)

转为数字类型  
`解决某些旧浏览器在使用 parseInt('08') 等 0 开头，由于进制数导致转换是 0 的问题`

- #### 参数

  `value` {String,Number} 转换的值  
  `radix` {Number} 进制数，默认 10 进制

- #### 返回值

  {Number} 返回转换后的数字

- #### 示例

```javascript
import { parseInt } from "@ivu-plus/i-utils";

let res = parseInt(null);
console.log(res); // 输出：0

let res1 = parseInt("08");
console.log(res1); // 输出：8

```

### parseFloat(value)

转为小数类型

- #### 参数

  `value` {String,Number} 转换的值

- #### 返回值

  {Number} 返回转换后的数字

- #### 示例

```javascript
import { parseFloat } from "@ivu-plus/i-utils";

let res = parseFloat(null);
console.log(res); // 输出：0.0

let res1 = parseFloat("08");
console.log(res1); // 输出：8

```
