## 颜色

#### \_.rgbToHex(color)

rgb 颜色转 hex 十六进制

- ##### 参数

  `color` {String} rgb 颜色字符串

- ##### 返回值

  {String} 返回生成的 hex 颜色

- ##### 示例

```javascript
let res = LimeUtil.rgbToHex("rgb(255,34,33)");
console.log(res); // 输出：#002221
```

---

#### \_.hexToRgba(color,opacity)

hex 十六进制 颜色转 rgba

- ##### 参数

  `color` {String} rgb 颜色字符串  
  `opacity` {Number} 透明度，0-1 之间，默认 1

- ##### 返回值

  {String} 返回生成的 rgba 颜色

- ##### 示例

```javascript
let res = LimeUtil.hexToRgba("#2d8cf0");
console.log(res); // 输出：rgba(45,140,240,1)
```

---

#### \_.getRandomHex()

获取随机生成的 16 进制颜色

- ##### 参数

  无

- ##### 返回值

  {String} 返回生成的十六进制颜色

- ##### 示例

```javascript
let res = LimeUtil.getRandomHex();
console.log(res); // 输出：#2d8cf0
```

---

#### \_.getRandomRgb()

获取随机生成的 rgb 颜色

- ##### 参数

  无

- ##### 返回值

  {String} 返回生成的 rgb 颜色

- ##### 示例

```javascript
let res = LimeUtil.getRandomRgb();
console.log(res); // 输出：rgba(45,140,240,1)
```
