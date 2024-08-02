# 浏览器 Storage

### isSupportStorage()

浏览器是否支持 Storage

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { isSupportStorage } from "@ivujs/util";

let res = isSupportStorage();
console.log(res); // 输出：true
```

---

## localStorage 存储

### getLocalStorage(key)

通过 key 从 localStorage 缓存中获取数据

- #### 参数

  `key` {String} key 值

- #### 返回值

  {String} 返回数据

- #### 示例

```javascript
import { getLocalStorage } from "@ivujs/util";

let res = getLocalStorage("id");
console.log(res); // 输出：1
```

---

### setLocalStorage(key)

设置 localStorage 缓存数据

- #### 参数

  `key` {String} key 值  
  `value` {String} value 值

- #### 返回值

  无

- #### 示例

```javascript
import { setLocalStorage } from "@ivujs/util";

setLocalStorage("id");
```

---

### removeLocalStorage(key)

通过 key 从 localStorage 缓存中删除数据

- #### 参数

  `key` {String} key 值

- #### 返回值

  无

- #### 示例

```javascript
import { removeLocalStorage } from "@ivujs/util";

removeLocalStorage("id");
```

---

### clearLocalStorage()

清空 localStorage 缓存中所有数据

- #### 参数

  无

- #### 返回值

  无

- #### 示例

```javascript
import { clearLocalStorage } from "@ivujs/util";

clearLocalStorage();
```

---

## sessionStorage 存储

### getSessionStorage(key)

通过 key 从 sessionStorage 缓存中获取数据

- #### 参数

  `key` {String} key 值

- #### 返回值

  {String} 返回数据

- #### 示例

```javascript
import { sessionStorage } from "@ivujs/util";

let res = getSessionStorage("id");
console.log(res); // 输出：1
```

---

### setSessionStorage(key)

设置 sessionStorage 缓存数据

- #### 参数

  `key` {String} key 值  
  `value` {String} value 值

- #### 返回值

  无

- #### 示例

```javascript
import { setSessionStorage } from "@ivujs/util";

setSessionStorage("id");
```

---

### removeSessionStorage(key)

通过 key 从 sessionStorage 缓存中删除数据

- #### 参数

  `key` {String} key 值

- #### 返回值

  无

- #### 示例

```javascript
import { removeSessionStorage } from "@ivujs/util";

removeSessionStorage("id");
```

---

### clearSessionStorage()

清空 sessionStorage 缓存中所有数据

- #### 参数

  无

- #### 返回值

  无

- #### 示例

```javascript
import { clearSessionStorage } from "@ivujs/util";

clearSessionStorage();
```
