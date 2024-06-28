# lime-util 前端模块化 JavaScript 工具库

[![npm version](https://img.shields.io/npm/v/xe-utils.svg?style=flat-square)](https://github.com/qq575792372/lime-util)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

🔥 **lime-util** 🔥 是一个 前端模块化 **JavaScript** 工具库，目前共有 **248+** ⚡️ 个 Api
方法，包含了开发中经常用到的一些模块方法集合，如`字符串`，`数组`，`浏览器缓存`，`浏览器Cookie`，`Dom处理`，`日期工具`，`数学计算`，`文件处理`，`正则校验`，`身份证信息`,`微信小程序工具库`
等等。

### 📦 安装

#### 1. 使用 npm 安装

```bash
npm i @lime-util/util --save
```

#### 2. 或在浏览器中直接引入

```html
<!-- 将工具包下面 dist/index.js 文件拷贝出来引入 -->
<script src="dist/index.js"></script>
<!-- 使用 -->
<script>
  LimeUtil.loadedTest();
</script>
```

### 🎨 使用

#### 1. es6 方式

```javascript
// 全部引入
import LimeUtil from "@lime-util/util";

LimeUtil.loadedTest();

// 按需引入
import { loadedTest } from "@lime-util/util";

loadedTest();
```

#### 2. require 方式

```javascript
// 全部引入
const LimeUtil = require("@lime-util/util");
LimeUtil.loadedTest();

// 按需引入
const { loadedTest } = require("@lime-util/util");
loadedTest();
```

### 🔨 构建

工具库源码架构使用 `pnpm` 做为包管理工具，在 `packages` 目录中分为多个工程模块来构建。

```bash
# 构建所有模块的包
pnpm build

# 构建核心模块的包
pnpm build:core

# 构建日期模块的包
pnpm build:date
```

### 📚 模块介绍

`lime-util` 分为`lime-util 整合工具库`，`lime-core 核心工具库` 或 `lime-date 日期工具库`，`整合工具库`
包含所有的功能，如果你想轻量级使用，可以只引入`核心库`或`日期库`。

1. [lime-util 整合工具库（传送阵）](https://github.com/qq575792372/lime-util)
2. [lime-core 核心工具库（传送阵）](https://github.com/qq575792372/lime-util/tree/master/packages/core)
3. [lime-date 日期工具库（传送阵）](https://github.com/qq575792372/lime-util/tree/master/packages/date)

### 📝API 文档

1. [常量集合 Constant](https://github.com/qq575792372/lime-util/blob/master/doc/constants.md)

2. [字符串 String](https://github.com/qq575792372/lime-util/blob/master/doc/string.md)

3. [数字 Number](https://github.com/qq575792372/lime-util/blob/master/doc/number.md)
4. [数组 Array](https://github.com/qq575792372/lime-util/blob/master/doc/array.md)
5. [对象 Object](https://github.com/qq575792372/lime-util/blob/master/doc/object.md)
6. [函数 Function](https://github.com/qq575792372/lime-util/blob/master/doc/function.md)
7. [日期 Date](https://github.com/qq575792372/lime-util/blob/master/doc/date.md)
8. [正则 Regexp](https://github.com/qq575792372/lime-util/blob/master/doc/regexp.md)
9. [数学 Math](https://github.com/qq575792372/lime-util/blob/master/doc/math.md)

10. [随机数 Random](https://github.com/qq575792372/lime-util/blob/master/doc/random.md)
11. [生成 id](https://github.com/qq575792372/lime-util/blob/master/doc/id.md)
13. [身份证 ID-card](https://github.com/qq575792372/lime-util/blob/master/doc/ID-card.md)

14. [文件 File](https://github.com/qq575792372/lime-util/blob/master/doc/file.md)

15. [颜色 Color](https://github.com/qq575792372/lime-util/blob/master/doc/color.md)

16. [校验 Validate](https://github.com/qq575792372/lime-util/blob/master/doc/validate.md)

17. [键盘 Keycode](https://github.com/qq575792372/lime-util/blob/master/doc/keycode.md)

18. [浏览器 Url](https://github.com/qq575792372/lime-util/blob/master/doc/browser-url.md)
19. [浏览器 Storage](https://github.com/qq575792372/lime-util/blob/master/doc/browser-storage.md)
20. [浏览器 Cookie](https://github.com/qq575792372/lime-util/blob/master/doc/browser-cookie.md)
21. [浏览器 Dom](https://github.com/qq575792372/lime-util/blob/master/doc/browser-dom.md)
22. [浏览器 Device](https://github.com/qq575792372/lime-util/blob/master/doc/browser-device.md)

23. [微信小程序工具库 Weapp](https://github.com/qq575792372/lime-util/blob/master/doc/weapp.md)

### 🔖Git 提交规范

#### 😝 主要

`fix`: 修复 bug  
`add`: 增加功能  
`del`: 删除功能  
`update`: 更新功能

#### 😉 次要

`docs`: 文档更新  
`merge`: 合并分支  
`style`: 颜色、字体大小等变动（不影响代码运行）  
`build`: 构造工具或相关依赖变更  
`refactor`: 代码重构  
`revert`: 撤销，版本回退

#### 😳 一般

`test`: 添加或修改测试  
`perf`: 提高性能的改动  
`chore`: 构建过程或辅助工具的变更  
`ci`: CI 配置，脚本文件等改动

```bash
# <type>后面英文冒号，并且后跟一个空格
git commit -m <type>(<scope>): <description>

# 举个栗子
git commit -m 'fix: 修复了xxx问题'
git commit -m 'fix(string): 修复了string工具类的xxx问题'
git commit -m 'docs: 更新了字符串模块文档'
```
