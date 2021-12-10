# lime-util 前端模块化 JavaScript 工具库

### 介绍

**lime-util** 是一个 前端模块化 **JavaScript** 工具库，目前有 **160+** 个 Api 方法，包含了前端同学开发中经常会用到的一些方法集合，如 字符串，数组，浏览器缓存，日期转换，数学计算，文件处理，校验正则和小程序缓存 等等多个模块。

### 安装

1.  使用 npm 安装

```bash
npm i lime-util --save
```

2.  或在浏览器中直接使用

```html
<script src="dist/lime-util.js"></script>
```

### 使用

1.es6 方式

```javascript
// 全部引入
import LimeUtil from "lime-util";
LimeUtil.loadedTest(); // 输出：lime-util loaded successfully!

// 按需引入
import { loadedTest } from "lime-util";
loadedTest(); // 输出：lime-util loaded successfully!
```

2.require 方式

```javascript
// 全部引入
const LimeUtil = require("lime-util");
LimeUtil.loadedTest(); // 输出：lime-util loaded successfully!

// 按需引入
const { loadedTest } = require("lime-util");
loadedTest(); // 输出：lime-util loaded successfully!
```

### API 文档

1. [常量集合](https://github.com/qq575792372/lime-util/blob/master/doc/constant.md)

2. [字符串](https://github.com/qq575792372/lime-util/blob/master/doc/string.md)

3. [数字](https://github.com/qq575792372/lime-util/blob/master/doc/number.md)
4. [数组](https://github.com/qq575792372/lime-util/blob/master/doc/array.md)
5. [对象](https://github.com/qq575792372/lime-util/blob/master/doc/object.md)
6. [函数](https://github.com/qq575792372/lime-util/blob/master/doc/function.md)

7. [日期](https://github.com/qq575792372/lime-util/blob/master/doc/date.md)
8. [正则](https://github.com/qq575792372/lime-util/blob/master/doc/regexp.md)

9. [数学](https://github.com/qq575792372/lime-util/blob/master/doc/math.md)

10. [随机数](https://github.com/qq575792372/lime-util/blob/master/doc/random.md)

11. [文件](https://github.com/qq575792372/lime-util/blob/master/doc/file.md)

12. [颜色](https://github.com/qq575792372/lime-util/blob/master/doc/color.md)

13. [校验](https://github.com/qq575792372/lime-util/blob/master/doc/validate.md)

14. [浏览器 Url](https://github.com/qq575792372/lime-util/blob/master/doc/browser-url.md)
15. [浏览器 Storage](https://github.com/qq575792372/lime-util/blob/master/doc/browser-storage.md)
16. [浏览器 Cookie](https://github.com/qq575792372/lime-util/blob/master/doc/browser-cookie.md)
17. [浏览器 Dom](https://github.com/qq575792372/lime-util/blob/master/doc/browser-dom.md)
18. [浏览器 Device](https://github.com/qq575792372/lime-util/blob/master/doc/browser-device.md)

19. [微信小程序](https://github.com/qq575792372/lime-util/blob/master/doc/xcx.md)
