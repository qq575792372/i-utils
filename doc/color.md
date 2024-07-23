# 颜色 Color

### rgbToHex(rgb)

rgb 颜色转 hex

- #### 参数

  `rgb` {String} rgb 颜色字符串

- #### 返回值

  {String} 返回生成的 hex 颜色

- #### 示例

```javascript
import { rgbToHex } from "@ivu-web/util";

let res = rgbToHex("rgb(255,34,33)");
console.log(res); // 输出：#002221
```

---

### rgbaToHex(rgba)

rgba 颜色转 hex

- #### 参数

  `rgba` {String} rgba 颜色字符串

- #### 返回值

  {String} 返回生成的 hex 颜色

- #### 示例

```javascript
import { rgbaToHex } from "@ivu-web/util";

let res = rgbaToHex("rgba(112,123,124,1)");
console.log(res); // 输出：#ff707b7c
```

---

### rgbaToHsl(rgba)

rgba 颜色转 hsl

- #### 参数

  `rgba` {String} rgba 颜色字符串

- #### 返回值

  {String} 返回生成的 hsl 颜色

- #### 示例

```javascript
import { rgbaToHsl } from "@ivu-web/util";

let res = rgbaToHsl("rgba(112,123,124,1)");
console.log(res); // 输出：hsla(185,5%,46%,1)
// 支持传入rgb
let res = rgbaToHsl("rgb(112,123,124)");
console.log(res); // 输出：hsl(185,5%,46%)
```

---

### hexToRgb(hex)

hex 颜色转 rgb

- #### 参数

  `hex` {String} hex 颜色字符串

- #### 返回值

  {String} 返回生成的 rgb 颜色

- #### 示例

```javascript
import { hexToRgb } from "@ivu-web/util";

let res = hexToRgb("#cccccc");
console.log(res); // 输出：rgb(204,204,204)
```

---

### hexToRgba(hex, opacity = 1)

hex 颜色转 rgb

- #### 参数

  `hex` {String} hex 颜色字符串  
  `opacity` {String} 透明度

- #### 返回值

  {String} 返回生成的 rgba 颜色

- #### 示例

```javascript
import { hexToRgba } from "@ivu-web/util";

let res = hexToRgba("#cccccc", 1);
console.log(res); // 输出：rgb(204,204,204,1)
```

---

### hexToHsl(hex)

hex 颜色转 hsl

- #### 参数

  `hex` {String} hex 颜色字符串

- #### 返回值

  {String} 返回生成的 hsl 颜色

- #### 示例

```javascript
import { hexToHsl } from "@ivu-web/util";

let res = hexToHsl("#cccccc");
console.log(res); // 输出：hsl(0,0%,80%)
```

---

### getRandomHex()

获取随机生成的 16 进制颜色

- #### 参数

  无

- #### 返回值

  {String} 返回生成的十六进制颜色

- #### 示例

```javascript
import { getRandomHex } from "@ivu-web/util";

let res = getRandomHex();
console.log(res); // 输出：#2d8cf0
```

---

### getRandomRgb()

获取随机生成的 rgb 颜色

- #### 参数

  无

- #### 返回值

  {String} 返回生成的 rgb 颜色

- #### 示例

```javascript
import { getRandomRgb } from "@ivu-web/util";

let res = getRandomRgb();
console.log(res); // 输出：rgba(45,140,240,1)
```

---

### getRandomRgba()

获取随机生成的 rgba 颜色

- #### 参数

  无

- #### 返回值

  {String} 返回生成的 rgba 颜色

- #### 示例

```javascript
import { getRandomRgba } from "@ivu-web/util";

let res = getRandomRgba();
console.log(res); // 输出：rgba(45,140,240,0.38)
```
