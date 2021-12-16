# lime-util 的 date 日期库

🔥 **lime-util** 🔥 的 date 日期库目前可以单独安装使用，不需要引入 lime-util 整个库的内容。

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
LimeDate.today();

// 按需引入
import { today } from "@lime-util/date";
today();
```

#### 2. require 方式

```javascript
// 全部引入
const LimeUtil = require("@lime-util/date");
LimeDate.today();

// 按需引入
const { today } = require("@lime-util/date");
today();
```

### 📝API 文档

1. [常量集合](https://github.com/qq575792372/lime-util/blob/master/doc/constant.md)
2. [日期](https://github.com/qq575792372/lime-util/blob/master/doc/date.md)
