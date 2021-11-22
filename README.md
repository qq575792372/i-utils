## lemon-utils 前端模块化 JavaScript 工具库

### 介绍

**lemon-utils** 是一款 前端模块化的 JavaScript 工具库，该库包含了开发常用的一些方法，有 string，array，date，number，常用校验，正则和小程序等等多个模块。

### 安装

1.  使用 npm 安装

```bash
npm i lemon-utils --save
```

2.  或在浏览器中直接使用

```html
<script src="dist/lemon-utils.min.js"></script>
```

### 使用

1.es6 方式

```javascript
// 全部引入
import LemonUtils from "lemon-utils";
LemonUtils.loadedTest();

// 模块引入
import { loadedTest } from "lemon-utils";
loadedTest();
```

2.require 方式

```javascript
// 全部引入
const LemonUtils = require("lemon-utils");
LemonUtils.loadedTest();

// 模块引入
const { loadedTest } = require("lemon-utils");
loadedTest();
```

### API 文档

1. [字符串](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

2. [数组](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/array.md)

3. [日期](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/date.md)

4. [数字](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/number.md)

5. [对象](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/object.md)

6. [数学](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/math.md)

7. [函数](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/function.md)

8. [校验](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/validate.md)

9. [随机数](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/random.md)

10. [正则](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/regex.md)

11. [文件](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/file.md)

12. [浏览器 Url](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/browser-url.md)

13. [浏览器 Storage](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/browser-storage.md)

14. [浏览器 Cookie](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/browser-cookie.md)

15. [浏览器 Dom](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/browser-dom.md)

16. [微信小程序](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/xcx.md)
