# 浏览器 Device

## 浏览器信息

### \_.getBrowserInfo()

获取浏览器信息  
`会获取到浏览器对应的名称以及版本`

- #### 参数

  无

- #### 返回值

  {Object} 返回浏览器信息

- #### 示例

```javascript
let res = LimeUtil.getBrowserInfo();
console.log(res); // 输出：{name: "edge", version: "96.0.1054.43"}
```

---

<!-- 设备类型 -->

## 设备类型

### \_.isPc()

判断是 pc 端

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isPc();
console.log(res); // 输出：true
```

---

### \_.isMobile()

判断是手机端  
`包含 android、iphone、黑莓手机、微软手机 等多种操作系统机型`

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isMobile();
console.log(res); // 输出：true
```

---

<!-- 操作系统类型 -->

## 操作系统类型

### \_.isAndroid()

判断是 android

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isAndroid();
console.log(res); // 输出：true
```

---

### \_.isIos()

判断是 ios

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isIos();
console.log(res); // 输出：true
```

---

### \_.isWindowsPhone()

判断是 windows phone

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isWindowsPhone();
console.log(res); // 输出：true
```

---

### \_.isWindows()

判断是 windows

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isWindows();
console.log(res); // 输出：true
```

---

### \_.isLinux()

判断是 linux

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isLinux();
console.log(res); // 输出：true
```

---

### \_.isMac()

判断是 Mac

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isMac();
console.log(res); // 输出：true
```

---

<!-- 苹果设备类型 -->

## 苹果设备类型

### \_.isIphone()

判断是 iphone

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isIphone();
console.log(res); // 输出：true
```

---

### \_.isIpad()

判断是 ipad

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isIpad();
console.log(res); // 输出：true
```

---

<!-- 手机浏览器类型 -->

## 手机浏览器类型

### \_.isWeixin()

判断是微信内置浏览器

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isWeixin();
console.log(res); // 输出：true
```

---

### \_.isQQ()

判断是 QQ 内置浏览器

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isQQ();
console.log(res); // 输出：true
```
