# lime-util 前端模块化 JavaScript 工具库

### 介绍

**lime-util** 是一个 前端模块化 **JavaScript** 工具库，包含了日常开发中常用的一些方法，如 string，array，date，number，常用校验，正则和小程序等等多个模块。

### 安装

1.  使用 npm 安装

```bash
npm i @ilime/lime-util --save
```

2.  或在浏览器中直接使用

```html
<script src="dist/@ilime/lime-util.js"></script>
```

### 使用

1.es6 方式

```javascript
// 全部引入
import LimeUtil from "@ilime/lime-util";
LimeUtil.loadedTest();

// 单独引入
import { loadedTest } from "@ilime/lime-util";
loadedTest();
```

2.require 方式

```javascript
// 全部引入
const LimeUtil = require("@ilime/lime-util");
LimeUtil.loadedTest();

// 模块引入
const { loadedTest } = require("@ilime/lime-util");
loadedTest();
```

### API 文档

1. [字符串](https://github.com/qq575792372/lime-util/blob/master/doc/string.md)

2. [数组](https://github.com/qq575792372/lime-util/blob/master/doc/array.md)

3. [日期](https://github.com/qq575792372/lime-util/blob/master/doc/date.md)

4. [数字](https://github.com/qq575792372/lime-util/blob/master/doc/number.md)

5. [对象](https://github.com/qq575792372/lime-util/blob/master/doc/object.md)

6. [数学](https://github.com/qq575792372/lime-util/blob/master/doc/math.md)

7. [函数](https://github.com/qq575792372/lime-util/blob/master/doc/function.md)

8. [校验](https://github.com/qq575792372/lime-util/blob/master/doc/validate.md)

9. [随机数](https://github.com/qq575792372/lime-util/blob/master/doc/random.md)

10. [正则](https://github.com/qq575792372/lime-util/blob/master/doc/regex.md)

11. [文件](https://github.com/qq575792372/lime-util/blob/master/doc/file.md)

12. [浏览器 Url](https://github.com/qq575792372/lime-util/blob/master/doc/browser-url.md)

13. [浏览器 Storage](https://github.com/qq575792372/lime-util/blob/master/doc/browser-storage.md)

14. [浏览器 Cookie](https://github.com/qq575792372/lime-util/blob/master/doc/browser-cookie.md)

15. [浏览器 Dom](https://github.com/qq575792372/lime-util/blob/master/doc/browser-dom.md)

16. [微信小程序](https://github.com/qq575792372/lime-util/blob/master/doc/xcx.md)
