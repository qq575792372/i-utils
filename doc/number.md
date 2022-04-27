# 数字 Number

### \_.parseInt(value, radix = 10)

转为数字类型  
`解决某些旧浏览器在使用 parseInt('08') 等 0 开头，由于进制数导致转换是 0 的问题`

- #### 参数

  `value` {String} 转换的值  
  `radix` {Number} 进制数，默认 10 进制

- #### 返回值

  {Number} 返回转换后的数字

- #### 示例

```javascript
let res = LimeUtil.parseInt("08");
console.log(res); // 输出：8
```
