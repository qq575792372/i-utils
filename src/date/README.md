# lime-util 的 date 日期库

🔥 **lime-util** 🔥 的 date 日期库目前可以单独安装使用，不需要引入 lime-util 整个库的内容，如果你只是想用日期库，这样能极大减少打包文件的体积。

### 📦 安装

#### 1. 使用 npm 安装

```bash
npm i @lime-util/date --save
```

#### 2. 或在浏览器中直接使用

```html
<script src="dist/index.js"></script>
```

### 🎨 使用

#### 1. es6 方式

```javascript
// 全部引入
import LimeDate from "@lime-util/date";
LimeDate.today(); // 输出：2021-12-17

// 按需引入
import { today } from "@lime-util/date";
today(); // 输出：2021-12-17
```

#### 2. require 方式

```javascript
// 全部引入
const LimeDate = require("@lime-util/date");
LimeDate.today(); // 输出：2021-12-17

// 按需引入
const { today } = require("@lime-util/date");
today(); // 输出：2021-12-17
```

#### 3. 支持微信小程序中使用

```javascript
// 以上 es6方式 和 require方式 均可在小程序中支持
import LimeDate from "@lime-util/date";
const LimeDate = require("@lime-util/date");
```

### 📝API 文档

1. [常量集合](https://github.com/qq575792372/lime-util/blob/v2/doc/constant.md)
2. [日期](https://github.com/qq575792372/lime-util/blob/v2/doc/date.md)

### 🔖Git 提交规范

#### 😝 主要

`feat`: 增加新功能  
`fix`: 修复 bug  
`add`: 增加代码逻辑  
`del`: 删除功能  
`update`: 更新功能

#### 😉 次要

`docs`: 文档相关的改动  
`style`: 不影响代码逻辑的改动，例如修改空格，缩进等  
`build`: 构造工具或者相关依赖的改动  
`refactor`: 代码重构  
`revert`: 撤销，版本回退

#### 😳 一般

`test`: 添加或修改测试  
`perf`: 提高性能的改动  
`chore`: 不修改 src 或者 test 的其余修改，例如构建过程或辅助工具的变动
