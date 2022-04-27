# 浏览器 Cookie

### \_.isSupportCookie()

浏览器是否支持 Cookie

- #### 参数

  无

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.isSupportCookie();
console.log(res); // 输出：true
```

### \_.getCookie(name)

通过 name 获取 cookie

- #### 参数

  `name` {String} 参数 name

- #### 返回值

  {String} 返回获取的值

- #### 示例

```javascript
let res = LimeUtil.getCookie("id");
console.log(res); // 输出：1
```

---

### \_.setCookie(name, value, timestamp = 24 \* 60 \* 60 \* 1000)

通过 name 获取 cookie

- #### 参数

  `name` {String} 参数 name  
  `value` {String} 设置的 value  
  `timestamp` {Timestamp} 过期的时间戳值，默认为一天，设置一天过期则为：<span style="color:#ff9900">`24 * 60 * 60 * 1000`</span>

- #### 返回值

  无

- #### 示例

```javascript
// 设置一天过期
LimeUtil.setCookie("id", 1, 24 * 60 * 60 * 1000);
```

---

### \_.removeCookie(name)

通过 name 删除 cookie

- #### 参数

  `name` {String} 参数 name

- #### 返回值

  无

- #### 示例

```javascript
LimeUtil.removeCookie("id");
```

---

### \_.clearCookie(domain = document.domain)

清空当前站点域名的 cookie

- #### 参数

  `domain` {String} 域名地址，默认是当前站点域名

- #### 返回值

  无

- #### 示例

```javascript
LimeUtil.clearCookie();
```
