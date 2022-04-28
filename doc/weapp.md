# 微信小程序工具库 Weapp

<!-- 缓存处理-同步 -->

## 缓存处理（同步）

### \_.setStorageSync(key, data)

设置缓存

- #### 参数

  `key` {String} key 值  
  `data` {\*} data 数据

- #### 返回值

  无

- #### 示例

```javascript
let res = LimeUtil.setStorageSync("name", "小红");
```

---

### \_.getStorageSync(key)

获得缓存数据

- #### 参数

  `key` {String} key 值

- #### 返回值

  {\*} 返回获取的值

- #### 示例

```javascript
let res = LimeUtil.getStorageSync("name");
console.log(res); // 输出：小红
```

---

### \_.getStorageInfoSync()

获得缓存信息

- #### 参数

  无

- #### 返回值

  {Object} 返回缓存信息

- #### 示例

```javascript
let res = LimeUtil.getStorageInfoSync("name");
console.log(res); // 输出：{currentSize: 0, errMsg:"getStorageInfo:ok", key: [], limitSize: 0}
```

---

### \_.removeStorageSync(key)

删除缓存数据

- #### 参数

  `key` {String} key 值

- #### 返回值

  无

- #### 示例

```javascript
LimeUtil.removeStorageSync("name");
```

---

### \_.clearStorageSync()

清空所有缓存数据

- #### 参数

  无

- #### 返回值

  无

- #### 示例

```javascript
LimeUtil.clearStorageSync();
```

<!-- 缓存处理（异步） -->

## 缓存处理（异步）

使用 `Promise` 封装小程序的 Api，`then / catch / finally` 分别对应小程序的 `success / fail / complete` 方法处理。

### \_.setStorage({ key, data, encrypt = false })

设置缓存

- #### 参数

  `key` {String} key 值  
  `data` {\*} data 数据  
  `encrypt` {Boolean} 是否开启加密存储

- #### 返回值

  {Promise} 返回 Promise

- #### 示例

```javascript
LimeUtil.setStorage({
  key: "name",
  data: "小红",
})
  .then((res) => {
    console.log("缓存成功", res);
  })
  .catch((err) => {
    console.log("缓存失败", err);
  })
  .finally((final) => {
    console.log("最终执行", final);
  });
```

---

### \_.getStorage({ key, encrypt = false })

获得缓存数据

- #### 参数

  `key` {String} key 值  
  `encrypt` {Boolean} 是否开启加密存储

- #### 返回值

  {Promise} 返回 Promise

- #### 示例

```javascript
LimeUtil.getStorage({
  key: "name",
})
  .then((res) => {
    console.log("获取成功", res);
  })
  .catch((err) => {
    console.log("获取失败", err);
  })
  .finally((final) => {
    console.log("最终执行", final);
  });
```

---

### \_.getStorageInfo()

获得缓存信息

- #### 参数

- #### 返回值

  {Promise} 返回 Promise

- #### 示例

```javascript
LimeUtil.getStorageInfo()
  .then((res) => {
    console.log("获取成功", res);
  })
  .catch((err) => {
    console.log("获取失败", err);
  })
  .finally((final) => {
    console.log("最终执行", final);
  });
```

---

### \_.removeStorage({ key })

删除缓存数据

- #### 参数

  `key` {String} key 值

- #### 返回值

  {Promise} 返回 Promise

- #### 示例

```javascript
LimeUtil.removeStorage({
  key: "name",
})
  .then((res) => {
    console.log("删除成功", res);
  })
  .catch((err) => {
    console.log("删除失败", err);
  })
  .finally((final) => {
    console.log("最终执行", final);
  });
```

---

### \_.clearStorage()

清空所有缓存数据

- #### 参数

  无

- #### 返回值

  {Promise} 返回 Promise

- #### 示例

```javascript
LimeUtil.clearStorage({})
  .then((res) => {
    console.log("清除成功", res);
  })
  .catch((err) => {
    console.log("清除失败", err);
  })
  .finally((final) => {
    console.log("最终执行", final);
  });
```
