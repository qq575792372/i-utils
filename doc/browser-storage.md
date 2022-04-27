# 浏览器 Storage

### \_.isSupportStorage()

浏览器是否支持 Storage

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isSupportStorage();
console.log(res); // 输出：true
```

---

<!-- localStorage存储 -->

## localStorage 存储

### \_.getLocalStorage(key)

通过 key 从 localStorage 缓存中获取数据

- #### 参数

  `key` {String} key 值

- #### 返回值

  {String} 返回数据

- #### 示例

```javascript
let res = LimeUtil.getLocalStorage("id");
console.log(res); // 输出：1
```

---

### \_.setLocalStorage(key)

设置 localStorage 缓存数据

- #### 参数

  `key` {String} key 值  
  `value` {String} value 值

- #### 返回值

  无

- #### 示例

```javascript
LimeUtil.setLocalStorage("id");
```

---

### \_.removeLocalStorage(key)

通过 key 从 localStorage 缓存中删除数据

- #### 参数

  `key` {String} key 值

- #### 返回值

  无

- #### 示例

```javascript
LimeUtil.removeLocalStorage("id");
```

---

### \_.clearLocalStorage()

清空 localStorage 缓存中所有数据

- #### 参数

  无

- #### 返回值

  无

- #### 示例

```javascript
LimeUtil.clearLocalStorage();
```

---

<!-- sessionStorage存储 -->

## sessionStorage 存储

### \_.getSessionStorage(key)

通过 key 从 sessionStorage 缓存中获取数据

- #### 参数

  `key` {String} key 值

- #### 返回值

  {String} 返回数据

- #### 示例

```javascript
let res = LimeUtil.getSessionStorage("id");
console.log(res); // 输出：1
```

---

### \_.setSessionStorage(key)

设置 sessionStorage 缓存数据

- #### 参数

  `key` {String} key 值  
  `value` {String} value 值

- #### 返回值

  无

- #### 示例

```javascript
LimeUtil.setSessionStorage("id");
```

---

### \_.removeSessionStorage(key)

通过 key 从 sessionStorage 缓存中删除数据

- #### 参数

  `key` {String} key 值

- #### 返回值

  无

- #### 示例

```javascript
LimeUtil.removeSessionStorage("id");
```

---

### \_.clearSessionStorage()

清空 sessionStorage 缓存中所有数据

- #### 参数

  无

- #### 返回值

  无

- #### 示例

```javascript
LimeUtil.clearSessionStorage();
```
