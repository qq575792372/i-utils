# lime-core 核心工具库

🔥 **lime-core** 🔥 是从`lime-util`独立出来的核心模块，包括：`常量集合 Constant`，`字符串 String`，`数字 Number`，`数组 Array`，`对象 Object`，`函数 Function`，`正则 Regexp`，`数学 Math`，`随机数 Random`，`文件 File`，`颜色 Color`，`校验 Validate`，`键盘 Keycode`，`浏览器 Url`，`浏览器 Storage`，`浏览器 Cookie`，`浏览器 Dom`，`浏览器 Device`，`微信小程序工具库`。

### 📦 安装

#### 1. 使用 npm 安装

```bash
npm i @lime-util/core --save
```

#### 2. 或在浏览器中直接使用

```html
<!-- 将工具包下面 dist/index.js 文件拷贝出来引入路径 -->
<script src="dist/index.js"></script>
<!-- 使用 -->
<script>
  LimeCore.loadedTest();
</script>
```

### 🎨 使用

#### 1. es6 方式

```javascript
// 全部引入
import LimeCore from "@lime-util/core";
LimeCore.loadedTest();

// 按需引入
import { loadedTest } from "@lime-util/core";
loadedTest();
```

#### 2. require 方式

```javascript
// 全部引入
const LimeCore = require("@lime-util/core");
LimeCore.loadedTest();

// 按需引入
const { loadedTest } = require("@lime-util/core");
loadedTest();
```
