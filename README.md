# 一站式前端模块化 JavaScript 工具库

[![npm version](https://img.shields.io/npm/v/xe-utils.svg?style=flat-square)](https://github.com/qq575792372/i-utils)
[![npm license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)

🔥 **i-utils** 🔥是一款功能强大、高效的一站式前端模块化 **JavaScript** 工具库，支持 `Typescript` 导入，
其集成了众多日常开发中用到的方法，覆盖`字符串`，`数组`，`数学`，`文件`，`数学`，`文件`，`加解密算法`，`脱敏`,`分页`，
`浏览器 Cookie`，`浏览器 Clipboard`，`浏览器 Dom`等多个模块，同时支持`es模块化`、`umd浏览器环境`、
`require服务端环境`，满足不同场景的开发需求，大幅提升开发效率。

### 📦 安装

```bash
# npm
npm i @ivujs/i-utils --save

# pnpm
pnpm i @ivujs/i-utils --save

# yarn
yarn add @ivujs/i-utils --save
```

### 🎨 使用

#### es 模块环境

```javascript
// 按需引入
import { testLoaded } from "@ivujs/i-utils";

testLoaded();

// 全量引入
import * as iUtils from "@ivujs/i-utils";

iUtils.testLoaded();
```

#### cjs 服务端环境

```javascript
// 全量引入
const iUtils = require("@ivujs/i-utils");
iUtils.testLoaded();

// 按需引入
const { testLoaded } = require("@ivujs/i-utils");
testLoaded();
```

#### umd 浏览器环境

直接使用打包好的 `umd` 的包，提供常规包和 `min` 压缩包

```html
<!-- <script src="dist/lib/index.full.umd.js"></script> -->
<script src="dist/lib/index.full.umd.min.js"></script>

<!-- 这里使用的实际是绑定到全局的 window.iUtils 对象 -->
<script>
  iUtils.testLoaded();
</script>
```

还有一种是浏览器中使用 `ESM` 模块引入方式

```html
<script type="module" src="dist/es/index.mjs">
  iUtils.testLoaded();
</script>
```

#### 自动导入

需要使用额外的插件来实现自动导入，`IUtilsResolver`解析器支持在 `Vite` 和 `Webpack` 工具中使用。

首先需要安装自动导入插件

```bash
pnpm install unplugin-auto-import -D

```

在 `vite.config.ts` 中使用

```javascript
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import { IUtilsResolver } from "@ivujs/i-utils/resolver";

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [IUtilsResolver()],
    }),
  ],
});
```

在 `webpack.config.js` 中使用

```javascript
const AutoImport = require("unplugin-auto-import/webpack");
const { IUtilsResolver } = require("@ivujs/i-utils/resolver");

module.exports = {
  plugins: [
    AutoImport({
      resolvers: [IUtilsResolver()],
    }),
  ],
};
```

解析器提供 3 种场景

```javascript
// 场景1：默认加载所有方法
IUtilsResolver();

// 场景2：追加指定方法名
IUtilsResolver(["getDate"]);

// 场景3：精细化控制（排除/只包含/追加）
IUtilsResolver({
  include: ["getUUID", "getGUID"],
  exclude: ["testLoaded"],
  append: ["formatDate"],
});
```

### 🔨 构建

工具库源码架构使用 `pnpm` 做为包管理工具，支持 `Typescript` 类型导入，打包后生成`es`、`cjs`、`umd`包。

```bash
# 构建包
pnpm build
```

### ✅ 发布

```bash
npm publish
```

### 📝API 文档

[常量集合 Constant](https://github.com/qq575792372/i-utils/blob/main/doc/constants.md)

[字符串](https://github.com/qq575792372/i-utils/blob/main/docs/字符串.md)  
[数字](https://github.com/qq575792372/i-utils/blob/main/docs/数字.md)  
[数组](https://github.com/qq575792372/i-utils/blob/main/docs/数组.md)  
[对象](https://github.com/qq575792372/i-utils/blob/main/docs/对象.md)  
[函数](https://github.com/qq575792372/i-utils/blob/main/docs/函数.md)  
[日期](https://github.com/qq575792372/i-utils/blob/main/docs/日期.md)  
[数学](https://github.com/qq575792372/i-utils/blob/main/docs/数学.md)  
[正则](https://github.com/qq575792372/i-utils/blob/main/docs/正则.md)  
[随机数](https://github.com/qq575792372/i-utils/blob/main/docs/随机数.md)

[文件](https://github.com/qq575792372/i-utils/blob/main/docs/文件.md)  
[颜色](https://github.com/qq575792372/i-utils/blob/main/docs/颜色.md)  
[校验](https://github.com/qq575792372/i-utils/blob/main/docs/校验.md)  
[键盘](https://github.com/qq575792372/i-utils/blob/main/docs/键盘.md)

[生成 Id](https://github.com/qq575792372/i-utils/blob/main/docs/生成Id.md)  
[加解密算法](https://github.com/qq575792372/i-utils/blob/main/docs/加解密算法.md)  
[脱敏](https://github.com/qq575792372/i-utils/blob/main/docs/脱敏.md)  
[身份证号码](https://github.com/qq575792372/i-utils/blob/main/docs/身份证号码.md)  
[分页](https://github.com/qq575792372/i-utils/blob/main/pagination/分页.md)

[浏览器 Url](https://github.com/qq575792372/i-utils/blob/main/docs/浏览器Url.md)  
[浏览器 Cookie](https://github.com/qq575792372/i-utils/blob/main/docs/浏览器Cookie.md)  
[浏览器 Storage](https://github.com/qq575792372/i-utils/blob/main/docs/浏览器Storage.md)  
[浏览器 Dom](https://github.com/qq575792372/i-utils/blob/main/docs/浏览器Dom.md)  
[浏览器 Device](https://github.com/qq575792372/i-utils/blob/main/docs/浏览器Device.md)  
[浏览器 Clipboard](https://github.com/qq575792372/i-utils/blob/main/docs/浏览器Clipboard.md)

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
