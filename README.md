# 前端模块化 JavaScript 工具库

[![npm version](https://img.shields.io/npm/v/xe-utils.svg?style=flat-square)](https://github.com/qq575792372/lime-util)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

🔥 **i-utils** 🔥 是一个 前端模块化 **JavaScript** 工具库，目前共有 **281** ⚡️ 个 Api
方法，支持`esm模块`和`umd浏览器环境`使用
，工具库包含了开发中经常用到的一些模块方法集合，如`字符串`，`数组`，`浏览器缓存`，`浏览器Cookie`，`浏览器剪切板`，`Dom处理`，`日期工具`，`加解密`，`数学计算`，`文件处理`，`正则校验`，`身份证信息`,`微信小程序工具库`
等等。

### 📦 安装

#### 1. 使用 npm 安装

```bash
# npm
npm i @ivujs/i-utils --save

# pnpm
pnpm i @ivujs/i-utils --save

# yarn
yarn add @ivujs/i-utils --save
```

### 🎨 使用

#### 1. es 模块化引入方式

```javascript
// 按需引入
import { loadedTest } from "@ivujs/i-utils";

loadedTest();

// 全部引入
import * as iUtils from "@ivujs/i-utils";

iUtils.loadedTest();
```

#### 2. umd 浏览器环境引入方式

```javascript
<!-- 将工具库下面 dist/lib/index.full.umd.js 文件拷贝出来引入 -->
<script src="dist/lib/index.full.umd.js"></script>;
<!-- 这里使用的实际是全局的 window.iUtils 对象 -->
<script>
  iUtils.loadedTest();
</script>;
```

#### 3. require 服务端环境引入方式

```javascript
// 全部引入
const iUtils = require("@ivujs/i-utils");
iUtils.loadedTest();

// 按需引入
const { loadedTest } = require("@ivujs/i-utils");
loadedTest();
```

### 🔨 构建

工具库源码架构使用 `pnpm` 做为包管理工具，打包后生成esm和umd可以用的包。

```bash
# 构建包
pnpm build
```

### ✅ 发布

```bash
pnpm publish
```

### 📝API 文档

[常量集合 Constant](https://github.com/qq575792372/lime-util/blob/master/doc/constants.md)  
[字符串 String](https://github.com/qq575792372/lime-util/blob/master/doc/string.md)  
[数字 Number](https://github.com/qq575792372/lime-util/blob/master/doc/number.md)     
[数组 Array](https://github.com/qq575792372/lime-util/blob/master/doc/array.md)    
[对象 Object](https://github.com/qq575792372/lime-util/blob/master/doc/object.md)    
[函数 Function](https://github.com/qq575792372/lime-util/blob/master/doc/function.md)    
[日期 Date](https://github.com/qq575792372/lime-util/blob/master/doc/date.md)   
[正则 Regexp](https://github.com/qq575792372/lime-util/blob/master/doc/regexp.md)  
[数学 Math](https://github.com/qq575792372/lime-util/blob/master/doc/math.md)  
[随机数 Random](https://github.com/qq575792372/lime-util/blob/master/doc/random.md)  
[生成 id](https://github.com/qq575792372/lime-util/blob/master/doc/id.md)  
[身份证 ID-card](https://github.com/qq575792372/lime-util/blob/master/doc/ID-card.md)  
[文件 File](https://github.com/qq575792372/lime-util/blob/master/doc/file.md)  
[颜色 Color](https://github.com/qq575792372/lime-util/blob/master/doc/color.md)  
[校验 Validate](https://github.com/qq575792372/lime-util/blob/master/doc/validate.md)  
[键盘 Keycode](https://github.com/qq575792372/lime-util/blob/master/doc/keycode.md)  
[浏览器 Url](https://github.com/qq575792372/lime-util/blob/master/doc/browser-url.md)  
[浏览器 Storage](https://github.com/qq575792372/lime-util/blob/master/doc/browser-storage.md)    
[浏览器 Cookie](https://github.com/qq575792372/lime-util/blob/master/doc/browser-cookie.md)   
[浏览器 Dom](https://github.com/qq575792372/lime-util/blob/master/doc/browser-dom.md)  
[浏览器 Device](https://github.com/qq575792372/lime-util/blob/master/doc/browser-device.md)  
[微信小程序工具库 Weapp](https://github.com/qq575792372/lime-util/blob/master/doc/weapp.md)

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

