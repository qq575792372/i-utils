# lime-util 前端模块化 JavaScript 工具库

[![npm version](https://img.shields.io/npm/v/xe-utils.svg?style=flat-square)](https://github.com/qq575792372/lime-util)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

🔥 **lime-util** 🔥 是一个 前端模块化 **JavaScript** 工具库，目前有 **190+** ⚡️ 个 Api 方法，包含了开发中经常用到的一些方法集合，如 字符串，数组，浏览器缓存，日期工具，数学计算，文件处理，正则校验和小程序缓存 等等多个模块集合。

### 📦 安装

#### 1. 使用 npm 安装

```bash
npm i @lime-util/all --save
```

#### 2. 或在浏览器中直接使用

```html
<script src="dist/index.js"></script>
```

### 🎨 使用

#### 1. es6 方式

```javascript
// 全部引入
import LimeUtil from "@lime-util/all";
LimeUtil.loadedTest(); // 输出加载成功

// 按需引入
import { loadedTest } from "@lime-util/all";
loadedTest(); // 输出加载成功
```

#### 2. require 方式

```javascript
// 全部引入
const LimeUtil = require("@lime-util/all");
LimeUtil.loadedTest(); // 输出加载成功

// 按需引入
const { loadedTest } = require("@lime-util/all");
loadedTest(); // 输出加载成功
```

#### 3. 支持微信小程序中使用

```javascript
// 以上 es6方式 和 require方式，包括按需引入的，都可以在小程序中支持
import LimeUtil from "@lime-util/all";
import { loadedTest } from "@lime-util/all";

const LimeUtil = require("@lime-util/all");
const { loadedTest } = require("@lime-util/all");
```

### 📝API 文档

1. [常量集合](https://github.com/qq575792372/lime-util/blob/master/doc/constant.md)

2. [字符串](https://github.com/qq575792372/lime-util/blob/master/doc/string.md)

3. [数字](https://github.com/qq575792372/lime-util/blob/master/doc/number.md)
4. [数组](https://github.com/qq575792372/lime-util/blob/master/doc/array.md)
5. [对象](https://github.com/qq575792372/lime-util/blob/master/doc/object.md)
6. [函数](https://github.com/qq575792372/lime-util/blob/master/doc/function.md)

7. [日期（已独立模块）](https://github.com/qq575792372/lime-util/blob/master/src/date/README.md)
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

### 🔖Git 提交规范

#### 😝 主要

`feat`: 新功能  
`fix`: 修复 bug  
`add`: 增加内容  
`del`: 删除功能  
`update`: 更新功能

#### 😉 次要

`docs`: 文档更新  
`style`: 颜色、字体大小等变动（不影响代码运行）  
`build`: 构造工具或相关依赖变更  
`refactor`: 代码重构  
`revert`: 撤销，版本回退

#### 😳 一般

`test`: 添加或修改测试  
`perf`: 提高性能的改动  
`chore`: 构建过程或辅助工具的变更  
`ci`: CI 配置，脚本文件等改动
