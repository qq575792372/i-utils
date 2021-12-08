# lime-util 前端模块化 JavaScript 工具库

### 介绍

**lime-util** 是一个 前端模块化 **JavaScript** 工具库，包含了日常开发中常用的一些方法集合，如 string，array，date，number，math，校验，正则和小程序等等多个模块。

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
LimeUtil.loadedTest();

// 按需引入
import { loadedTest } from "lime-util";
loadedTest();
```

2.require 方式

```javascript
// 全部引入
const LimeUtil = require("lime-util");
LimeUtil.loadedTest();

// 按需引入
const { loadedTest } = require("lime-util");
loadedTest();
```

### API 文档

1. [字符串](https://gitee.com/qq575792372/lime-util/blob/master/doc/string.md)
2. [数字](https://gitee.com/qq575792372/lime-util/blob/master/doc/number.md)
3. [数组](https://gitee.com/qq575792372/lime-util/blob/master/doc/array.md)
4. [对象](https://gitee.com/qq575792372/lime-util/blob/master/doc/object.md)
5. [函数](https://gitee.com/qq575792372/lime-util/blob/master/doc/function.md)

6. [日期](https://gitee.com/qq575792372/lime-util/blob/master/doc/date.md)
7. [正则](https://gitee.com/qq575792372/lime-util/blob/master/doc/regexp.md)

8. [数学](https://gitee.com/qq575792372/lime-util/blob/master/doc/math.md)

9. [随机数](https://gitee.com/qq575792372/lime-util/blob/master/doc/random.md)

10. [文件](https://gitee.com/qq575792372/lime-util/blob/master/doc/file.md)

11. [颜色](https://gitee.com/qq575792372/lime-util/blob/master/doc/color.md)

12. [校验](https://gitee.com/qq575792372/lime-util/blob/master/doc/validate.md)

13. [浏览器 Url](https://gitee.com/qq575792372/lime-util/blob/master/doc/browser-url.md)
14. [浏览器 Storage](https://gitee.com/qq575792372/lime-util/blob/master/doc/browser-storage.md)
15. [浏览器 Cookie](https://gitee.com/qq575792372/lime-util/blob/master/doc/browser-cookie.md)
16. [浏览器 Dom](https://gitee.com/qq575792372/lime-util/blob/master/doc/browser-dom.md)
17. [浏览器 Device](https://gitee.com/qq575792372/lime-util/blob/master/doc/browser-device.md)

18. [微信小程序](https://gitee.com/qq575792372/lime-util/blob/master/doc/xcx.md)
