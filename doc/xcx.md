## 微信小程序

#### \_.setStorage(key, data)

设置缓存

- ##### 参数

  `key` {String} key 值
  `data` {\*} data 数据

- ##### 返回值

  无

- ##### 示例

```javascript
LimeUtil.setStorage("id", 1);
```

---

#### \_.setStorageSync(key, data)

设置缓存（同步）

- ##### 参数

  `key` {String} key 值
  `data` {\*} data 数据

- ##### 返回值

  无

- ##### 示例

```javascript
LimeUtil.setStorageSync("id", 1);
```

---

#### \_.getStorage(key)

通过 key 从缓存中获取数据

- ##### 参数

  `key` {String} key 值

- ##### 返回值

  {\*} 返回获取的值

- ##### 示例

```javascript
let res = LimeUtil.getStorage("id");
console.log(res); // 输出：1
```

---

#### \_.getStorageSync(key)

设置缓存

- ##### 参数

  `key` {String} key 值

- ##### 返回值

  {\*} 返回获取的值

- ##### 示例

```javascript
let res = LimeUtil.getStorageSync("id");
console.log(res); // 输出：1
```

---

#### \_.removeStorage(key)

通过 key 从缓存中删除数据

- ##### 参数

  `key` {String} key 值

- ##### 返回值

  无

- ##### 示例

```javascript
LimeUtil.removeStorage("id");
```

---

#### \_.removeStorageSync(key)

通过 key 从缓存中删除数据（同步）

- ##### 参数

  `key` {String} key 值
  `data` {\*} data 数据

- ##### 返回值

  无

- ##### 示例

```javascript
LimeUtil.removeStorageSync("id");
```

---

#### \_.clearStorage()

清空所有缓存数据

- ##### 参数

  无

- ##### 返回值

  无

- ##### 示例

```javascript
LimeUtil.clearStorage();
```

---

#### \_.clearStorageSync()

清空所有缓存数据（同步）

- ##### 参数

  无

- ##### 返回值

  无

- ##### 示例

```javascript
LimeUtil.clearStorageSync();
```
