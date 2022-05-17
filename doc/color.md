# 颜色 Color

### \_.rgbToHex(rgb)

rgb 颜色转 hex

- #### 参数

  `rgb` {String} rgb 颜色字符串

- #### 返回值

  {String} 返回生成的 hex 颜色

- #### 示例

```javascript
let res = LimeUtil.rgbToHex("rgb(255,34,33)");
console.log(res); // 输出：#002221
```

---

### \_.rgbaToHex(rgba)

rgba 颜色转 hex

- #### 参数

  `rgba` {String} rgba 颜色字符串

- #### 返回值

  {String} 返回生成的 hex 颜色

- #### 示例

```javascript
let res = LimeUtil.rgbaToHex("rgba(112,123,124,1)");
console.log(res); // 输出：#ff707b7c
```

---

### \_.rgbaToHsl(rgba)

rgba 颜色转 hsl

- #### 参数

  `rgba` {String} rgba 颜色字符串

- #### 返回值

  {String} 返回生成的 hsl 颜色

- #### 示例

```javascript
let res = LimeUtil.rgbaToHsl("rgba(112,123,124,1)");
console.log(res); // 输出：hsla(185,5%,46%,1)
// 支持传入rgb
let res = LimeUtil.rgbaToHsl("rgb(112,123,124)");
console.log(res); // 输出：hsl(185,5%,46%)
```

---

### \_.hexToRgb(hex)

hex 颜色转 rgb

- #### 参数

  `hex` {String} hex 颜色字符串

- #### 返回值

  {String} 返回生成的 rgb 颜色

- #### 示例

```javascript
let res = LimeUtil.hexToRgb("#cccccc");
console.log(res); // 输出：rgb(204,204,204)
```

---

### \_.hexToRgba(hex, opacity = 1)

hex 颜色转 rgb

- #### 参数

  `hex` {String} hex 颜色字符串  
  `opacity` {String} 透明度

- #### 返回值

  {String} 返回生成的 rgba 颜色

- #### 示例

```javascript
let res = LimeUtil.hexToRgba("#cccccc", 1);
console.log(res); // 输出：rgb(204,204,204,1)
```

---

### \_.hexToHsl(hex)

hex 颜色转 hsl

- #### 参数

  `hex` {String} hex 颜色字符串

- #### 返回值

  {String} 返回生成的 hsl 颜色

- #### 示例

```javascript
let res = LimeUtil.hexToHsl("#cccccc");
console.log(res); // 输出：hsl(0,0%,80%)
```

---

### \_.getRandomHex()

获取随机生成的 16 进制颜色

- #### 参数

  无

- #### 返回值

  {String} 返回生成的十六进制颜色

- #### 示例

```javascript
let res = LimeUtil.getRandomHex();
console.log(res); // 输出：#2d8cf0
```

---

### \_.getRandomRgb()

获取随机生成的 rgb 颜色

- #### 参数

  无

- #### 返回值

  {String} 返回生成的 rgb 颜色

- #### 示例

```javascript
let res = LimeUtil.getRandomRgb();
console.log(res); // 输出：rgba(45,140,240,1)
```

---

### \_.getRandomRgba()

获取随机生成的 rgba 颜色

- #### 参数

  无

- #### 返回值

  {String} 返回生成的 rgba 颜色

- #### 示例

```javascript
let res = LimeUtil.getRandomRgba();
console.log(res); // 输出：rgba(45,140,240,0.38)
```
