# lime-core 工具核心库

🔥 **lime-core** 🔥 是从`lime-util`独立出来的核心模块，包括：`常量集合`，`字符串`，`数字`，`数组`，`对象`，`函数`，`正则`，`数学`，`随机数`，`文件`，`颜色`，`校验`，`浏览器 Url`，`浏览器 Storage`，`浏览器 Cookie`，`浏览器 Dom`，`浏览器 Device`，`微信小程序 Weapp`。

### 📦 安装

#### 1. 使用 npm 安装

```bash
npm i @lime-util/core --save
```

#### 2. 或在浏览器中直接使用

```html
<!-- 将工具包下面 dist/index.js 文件拷贝出来用 -->
<script src="dist/index.js"></script>
<!-- 使用 -->
<script>
  console.log(LimeCore.loadedTest()); // 输出：lime-core loaded successfully!
</script>
```

### 🎨 使用

#### 1. es6 方式

```javascript
// 全部引入
import LimeCore from "@lime-util/core";
LimeCore.loadedTest(); // 输出：lime-core loaded successfully!

// 按需引入
import { loadedTest } from "@lime-util/core";
loadedTest(); // 输出：lime-core loaded successfully!
```

#### 2. require 方式

```javascript
// 全部引入
const LimeCore = require("@lime-util/core");
LimeCore.loadedTest(); // 输出：lime-core loaded successfully!

// 按需引入
const { loadedTest } = require("@lime-util/core");
loadedTest(); // 输出：lime-core loaded successfully!
```

### 📝API 文档

1. [常量集合](https://github.com/qq575792372/lime-util/blob/master/doc/constant.md)

2. [字符串](https://github.com/qq575792372/lime-util/blob/master/doc/string.md)

3. [数字](https://github.com/qq575792372/lime-util/blob/master/doc/number.md)
4. [数组](https://github.com/qq575792372/lime-util/blob/master/doc/array.md)
5. [对象](https://github.com/qq575792372/lime-util/blob/master/doc/object.md)
6. [函数](https://github.com/qq575792372/lime-util/blob/master/doc/function.md)

7. [正则](https://github.com/qq575792372/lime-util/blob/master/doc/regexp.md)

8. [数学](https://github.com/qq575792372/lime-util/blob/master/doc/math.md)

9. [随机数](https://github.com/qq575792372/lime-util/blob/master/doc/random.md)

10. [文件](https://github.com/qq575792372/lime-util/blob/master/doc/file.md)

11. [颜色](https://github.com/qq575792372/lime-util/blob/master/doc/color.md)

12. [校验](https://github.com/qq575792372/lime-util/blob/master/doc/validate.md)

13. [浏览器 Url](https://github.com/qq575792372/lime-util/blob/master/doc/browser-url.md)
14. [浏览器 Storage](https://github.com/qq575792372/lime-util/blob/master/doc/browser-storage.md)
15. [浏览器 Cookie](https://github.com/qq575792372/lime-util/blob/master/doc/browser-cookie.md)
16. [浏览器 Dom](https://github.com/qq575792372/lime-util/blob/master/doc/browser-dom.md)
17. [浏览器 Device](https://github.com/qq575792372/lime-util/blob/master/doc/browser-device.md)

18. [微信小程序](https://github.com/qq575792372/lime-util/blob/master/doc/weapp.md)
