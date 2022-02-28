# lime-date 日期工具库

🔥 **lime-date** 🔥 是从`lime-util`独立出来的日期模块，如果你只想使用日期工具，可以单独安装使用。

### 📦 安装

#### 1. 使用 npm 安装

```bash
npm i @lime-util/date --save
```

#### 2. 或在浏览器中直接使用

```html
<!-- 将工具包下面 dist/index.js 文件拷贝出来引入路径 -->
<script src="dist/index.js"></script>
<!-- 使用 -->
<script>
  console.log(LimeDate.loadedTest()); // 输出：lime-date loaded successfully!
</script>
```

### 🎨 使用

#### 1. es6 方式

```javascript
// 全部引入
import LimeDate from "@lime-util/date";
LimeDate.loadedTest(); // 输出：lime-date loaded successfully!

// 按需引入
import { loadedTest } from "@lime-util/date";
loadedTest(); // 输出：lime-date loaded successfully!
```

#### 2. require 方式

```javascript
// 全部引入
const LimeDate = require("@lime-util/date");
LimeDate.loadedTest(); // 输出：lime-date loaded successfully!

// 按需引入
const { loadedTest } = require("@lime-util/date");
loadedTest(); // 输出：lime-date loaded successfully!
```

### 📝API 文档

[日期工具库 API](https://github.com/qq575792372/lime-util/blob/master/doc/date.md)
