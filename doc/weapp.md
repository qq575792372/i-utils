# 微信小程序工具库 Weapp


## 缓存处理（同步）

### setStorageSync(key, data)

设置缓存

- #### 参数

  `key` {String} key 值  
  `data` {\*} data 数据

- #### 返回值

  无

- #### 示例

```javascript
import { setStorageSync } from "@ivu-web/util";

let res = setStorageSync("name", "小红");
```

---

### getStorageSync(key)

获得缓存数据

- #### 参数

  `key` {String} key 值

- #### 返回值

  {\*} 返回获取的值

- #### 示例

```javascript
import { getStorageSync } from "@ivu-web/util";

let res = getStorageSync("name");
console.log(res); // 输出：小红
```

---

### getStorageInfoSync()

获得缓存信息

- #### 参数

  无

- #### 返回值

  {Object} 返回缓存信息

- #### 示例

```javascript
import { getStorageInfoSync } from "@ivu-web/util";

let res = getStorageInfoSync("name");
console.log(res); // 输出：{currentSize: 0, errMsg:"getStorageInfo:ok", key: [], limitSize: 0}
```

---

### removeStorageSync(key)

删除缓存数据

- #### 参数

  `key` {String} key 值

- #### 返回值

  无

- #### 示例

```javascript
import { removeStorageSync } from "@ivu-web/util";

removeStorageSync("name");
```

---

### clearStorageSync()

清空所有缓存数据

- #### 参数

  无

- #### 返回值

  无

- #### 示例

```javascript
import { clearStorageSync } from "@ivu-web/util";

clearStorageSync();
```


## 缓存处理（异步）

使用 `Promise` 封装小程序的 Api，`then / catch / finally` 分别对应小程序的 `success / fail / complete` 方法处理。

### setStorage({ key, data, encrypt = false })

设置缓存

- #### 参数

  `key` {String} key 值  
  `data` {\*} data 数据  
  `encrypt` {Boolean} 是否开启加密存储

- #### 返回值

  {Promise} 返回 Promise

- #### 示例

```javascript
import { setStorage } from "@ivu-web/util";

setStorage({
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

### getStorage({ key, encrypt = false })

获得缓存数据

- #### 参数

  `key` {String} key 值  
  `encrypt` {Boolean} 是否开启加密存储

- #### 返回值

  {Promise} 返回 Promise

- #### 示例

```javascript
import { getStorage } from "@ivu-web/util";

getStorage({
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

### getStorageInfo()

获得缓存信息

- #### 参数

- #### 返回值

  {Promise} 返回 Promise

- #### 示例

```javascript
import { getStorageInfo } from "@ivu-web/util";

getStorageInfo()
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

### removeStorage({ key })

删除缓存数据

- #### 参数

  `key` {String} key 值

- #### 返回值

  {Promise} 返回 Promise

- #### 示例

```javascript
import { removeStorage } from "@ivu-web/util";

removeStorage({
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

### clearStorage()

清空所有缓存数据

- #### 参数

  无

- #### 返回值

  {Promise} 返回 Promise

- #### 示例

```javascript
import { clearStorage } from "@ivu-web/util";

clearStorage({})
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
