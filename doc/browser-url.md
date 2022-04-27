# 浏览器 Url

### \_.getQueryString(name, url = window.location.href)

从 url 中获取参数值

- #### 参数

  `name` {String|Number} 参数名  
  `url` {String} url 地址，默认当前地址栏 url

- #### 返回值

  {String} 返回查询到的值

- #### 示例

```javascript
let url = "http://xxx.com?id=1&name=test";
let res = LimeUtil.getQueryString("id", url);
console.log(res); // 输出：1
```

---

### \_.queryStringToObject(url = window.location.href)

url 查询参数转为对象

- #### 参数

  `url` {String} url 地址，默认当前地址栏 url

- #### 返回值

  {Object} 返回参数对象

- #### 示例

```javascript
let url = "http://xxx.com?id=1&name=test";
let res = LimeUtil.queryStringToObject(url);
console.log(res); // 输出：{id: 1, name: 'test'}
```

---

### \_.objectToUrlQuery(obj)

对象转 url 查询参数

- #### 参数

  `obj` {Object} 参数对象

- #### 返回值

  {String} 返回如 id=1&name=xx 格式的 url 查询参数

- #### 示例

```javascript
let obj = { id: 1, name: "test" };
let res = LimeUtil.objectToUrlQuery(obj);
console.log(res); // 输出：id=1&name=test
```
