## lemon-utils 前端模块化 JavaScript 工具库

### 介绍

**lemon-utils** 是一款 前端模块化的 JavaScript 工具库，该库包含有 string，array，date，number，常用校验，正则和小程序等等多个模块集合。

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

1.es6 模块引入

```javascript
// 直接引入
import LemonUtils from "lemon-utils";
LemonUtils.loadedTest();

// 按需引入
import { loadedTest } from "lemon-utils";
loadedTest();
```

2.require()方式引入

```javascript
// 直接引入
const LemonUtils = require("lemon-utils");
LemonUtils.loadedTest();

// 按需引入
const { loadedTest } = require("lemon-utils");
loadedTest();
```

### API 文档

1. [字符串 ](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

2. [数组 ](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

3. [日期 ](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

4. [数字 ](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

5. [对象 ](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

6. [函数 ](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

7. [数学 ](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

8. [校验 ](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

9. [随机数 ](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

10. [正则 ](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

11. [地址栏 ](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

12. [浏览器 Storage](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

13. [浏览器 Cookie](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

14. [文件 ](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

15. [浏览器 Dom ](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)

16. [小程序 ](https://gitee.com/qq1020431880/lemon-utils/blob/master/doc/string.md)
