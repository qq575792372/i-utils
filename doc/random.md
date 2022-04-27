# 随机数 Random

### \_.getRandom(min = 0, max = 9)

生成指定大小的随机整数  
`n 和 m 参数表示最小和最大范围值，默认0-9之间范围`

- #### 参数

  `min` {Number} 随机数的最小值，默认 0  
  `max` {Number} 随机数的最大值，默认 9

- #### 返回值

  {Number} 返回指定大小的随机整数

- #### 示例

```javascript
let res = LimeUtil.getRandom(0, 9);
console.log(res); // 输出：0-9之间随机一位
```

---

### \_.getRandomDigit(len = 1)

生成固定位数的随机整数  
`默认是1，代表生成0-9之间一位，如果是2，则生成10-99之间两位，以此类推`

- #### 参数

  `len` {Number} 固定的位数

- #### 返回值

  {Number} 返回固定位数的随机数

- #### 示例

```javascript
let res = LimeUtil.getRandomDigit(2);
console.log(res); // 输出：10-99之间随机两位
```

---

### \_.getUUID(len = 32, radix = 16)

生成 UUID

- #### 参数

  `len` {Number} 生成的长度，默认 32 位  
  `radix` {Number} 进制数，默认 16 进制

- #### 返回值

  {String} 返回 UUID 字符串

- #### 示例

```javascript
let res = LimeUtil.getUUID();
console.log(res); // 输出：5e71b6a38364c189ab1229bf5c2d5695
```

---

### \_.getGUID()

生成 GUID

- #### 参数

  无

- #### 返回值

  {String} 返回 GUID 字符串

- #### 示例

```javascript
let res = LimeUtil.getGUID();
console.log(res); // 输出：e854e2ec-063c-1ee7-942f-57c5733ce0cb
```
