# 浏览器 Device

## 浏览器信息

### getBrowserInfo()

获取浏览器信息  
`会获取到浏览器对应的名称以及版本`

- #### 参数

  无

- #### 返回值

  {Object} 返回浏览器信息

- #### 示例

```javascript
import { getBrowserInfo } from "@ivu-plus/i-utils";

let res = getBrowserInfo();
console.log(res); // 输出：{name: "edge", version: "96.0.1054.43"}
```

---


## 设备类型

### isPc()

判断是 pc 端

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { isPc } from "@ivu-plus/i-utils";

let res = isPc();
console.log(res); // 输出：true
```

---

### isMobile()

判断是手机端  
`包含 android、iphone、黑莓手机、微软手机 等多种操作系统机型`

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { isMobile } from "@ivu-plus/i-utils";

let res = isMobile();
console.log(res); // 输出：true
```

---


## 操作系统类型

### isAndroid()

判断是 android

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { isAndroid } from "@ivu-plus/i-utils";

let res = isAndroid();
console.log(res); // 输出：true
```

---

### isIos()

判断是 ios

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { isIos } from "@ivu-plus/i-utils";

let res = isIos();
console.log(res); // 输出：true
```

---

### isWindowsPhone()

判断是 windows phone

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { isWindowsPhone } from "@ivu-plus/i-utils";

let res = isWindowsPhone();
console.log(res); // 输出：true
```

---

### isWindows()

判断是 windows

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { isWindows } from "@ivu-plus/i-utils";

let res = isWindows();
console.log(res); // 输出：true
```

---

### isLinux()

判断是 linux

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { isLinux } from "@ivu-plus/i-utils";

let res = isLinux();
console.log(res); // 输出：true
```

---

### isMac()

判断是 Mac

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { removeCookie } from "@ivu-plus/i-utils";

let res = isMac();
console.log(res); // 输出：true
```

---


## 苹果设备类型

### isIphone()

判断是 iphone

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { isIphone } from "@ivu-plus/i-utils";

let res = isIphone();
console.log(res); // 输出：true
```

---

### isIpad()

判断是 ipad

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { isIpad } from "@ivu-plus/i-utils";

let res = isIpad();
console.log(res); // 输出：true
```

---


## 手机浏览器类型

### isWeixin()

判断是微信内置浏览器

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { isWeixin } from "@ivu-plus/i-utils";

let res = isWeixin();
console.log(res); // 输出：true
```

---

### isQQ()

判断是 QQ 内置浏览器

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { isQQ } from "@ivu-plus/i-utils";

let res = isQQ();
console.log(res); // 输出：true
```
