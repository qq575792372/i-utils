# lime-weapp 微信小程序工具库

🔥 **lime-weapp** 🔥 是从`lime-util`独立出来的微信小程序模块，可以单独安装使用。

### 📦 安装

#### 1. 使用 npm 安装

```bash
npm i @lime-util/weapp --save
```

### 🎨 使用

#### 1. es6 方式

```javascript
// 全部引入
import LimeWeapp from "@lime-util/weapp";
LimeWeapp.loadedTest(); // 输出：lime-weapp loaded successfully!

// 按需引入
import { loadedTest } from "@lime-util/weapp";
loadedTest(); // 输出：lime-weapp loaded successfully!
```

#### 2. require 方式

```javascript
// 全部引入
const LimeWeapp = require("@lime-util/weapp");
LimeWeapp.loadedTest(); // 输出：lime-weapp loaded successfully!

// 按需引入
const { loadedTest } = require("@lime-util/weapp");
loadedTest(); // 输出：lime-weapp loaded successfully!
```

### 📝API 文档

1. [微信小程序](https://github.com/qq575792372/lime-util/tree/master/packages/weapp)
