# 浏览器 Url

### getProtocol(url = window.location.href)

获得协议名

- #### 参数

  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回协议名

- #### 示例

```javascript
import { getProtocol } from "@ivujs/util";

// 这里支持http/https/ftp/ftps
let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
// let url = "https://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
// let url = "ftp://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
// let url = "ftps://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";

let res = getProtocol(url);
console.log(res); // 输出：http/https/ftp/ftps
```

---

### getHost(url = window.location.href)

获得主机地址

- #### 参数

  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回主机地址

- #### 示例

```javascript
import { getHost } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = getHost(url);
console.log(res); // 输出：192.168.0.180:8000
```

---

### getHostName(url = window.location.href)

获得主机名称

- #### 参数

  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回主机名称

- #### 示例

```javascript
import { getHostName } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = getHostName(url);
console.log(res); // 输出：192.168.0.180
```

---

### getPort(url = window.location.href)

获得端口号

- #### 参数

  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回端口号

- #### 示例

```javascript
import { getPort } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = getPort(url);
console.log(res); // 输出：8000
```

---

### getUrlPath(url = window.location.href)

获得地址路径

- #### 参数

  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回地址路径

- #### 示例

```javascript
import { getUrlPath } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = getUrlPath(url);
console.log(res); // 输出：user/getUserDetail
```

---

### getUrlHash(url = window.location.href)

获得hash字符串

- #### 参数

  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回hash字符串

- #### 示例

```javascript
import { getUrlHash } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = getUrlHash(url);
console.log(res); // 输出：tag1
```

---

### getSearchString(url = window.location.href)

获得查询参数字符串

- #### 参数

  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回查询参数字符串

- #### 示例

```javascript
import { getSearchString } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = getSearchString(url);
console.log(res); // 输出：id=123&name=admin
```

---

### getSearchParam(url = window.location.href)

查询参数字符串中获得某个参数的值

- #### 参数

  `name` {String} 参数名  
  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回查询到的值

- #### 示例

```javascript
import { getSearchParam } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = getSearchParam("id", url);
console.log(res); // 输出：123
```

---

### setSearchParam(name, value, url = window.location.href)

查询参数字符串中设置某个参数的值

- #### 参数

  `name` {String} 参数名  
  `value` {String,Number,Array} 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2  
  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回查询参数字符串

- #### 示例

```javascript
import { setSearchParam } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = setSearchParam("name", "test1", url);
console.log(res); // 输出：http://192.168.0.180:8000/user/getUserDetail?id=123&name=test1#tag1
```

---

### hasSearchParam(name, url = window.location.href)

查询参数字符串中是否包含某个参数

- #### 参数

  `name` {String} 参数名  
  `url` {String} url地址，默认当前url地址

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { hasSearchParam } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = hasSearchParam("id", url);
console.log(res); // 输出：true
```

---

### prependSearchParam(name, value, url = window.location.href)

查询参数字符串中在最前面追加新参数和值

- #### 参数

  `name` {String} 参数名
  `value` {String,Number,Array} 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2  
  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回查询参数字符串

- #### 示例

```javascript
import { prependSearchParam } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = prependSearchParam("sex", "2", url);
console.log(res); // 输出：http://192.168.0.180:8000/user/getUserDetail?sex=2&id=123&name=admin#tag1
```

---

### prependToSearchParam(name,value, beforeParam, url = window.location.href)

查询参数字符串中在某个参数的前面追加新参数和值

- #### 参数

  `name` {String} 参数名  
  `value` {String,Number,Array} 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2  
  `beforeParam` {String} 在前面追加参数的名称
  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回查询参数字符串

- #### 示例

```javascript
import { prependToSearchParam } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = prependToSearchParam("sex", "2", "name", url);
console.log(res); // 输出：http://192.168.0.180:8000/user/getUserDetail?id=123&sex=2&name=admin#tag1
```

---

### appendSearchParam(name, value, url = window.location.href)

查询参数字符串中在最后面追加新参数和值

- #### 参数

  `name` {String} 参数名  
  `value` {String,Number,Array} 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2  
  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回查询参数字符串

- #### 示例

```javascript
import { appendSearchParam } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = appendSearchParam("sex", "2", url);
console.log(res); // 输出：http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin&sex=2#tag1
```

---

### appendToSearchParam(name, value, afterName, url = window.location.href)

查询参数字符串中在某个参数的后面追加新参数和值

- #### 参数

  `name` {String} 参数名  
  `value` {String,Number,Array} 参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2  
  `afterName` {String} 在后面追加参数的名称
  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回查询参数字符串

- #### 示例

```javascript
import { appendToSearchParam } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = appendSearchParam("sex", "2", "id", url);
console.log(res); // 输出：http://192.168.0.180:8000/user/getUserDetail?id=123&sex=2&name=admin#tag1
```

---

### removeSearchParam(name, url = window.location.href)

查询参数字符串中移除某个参数和值

- #### 参数

  `name` {String} 参数名  
  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回查询参数字符串

- #### 示例

```javascript
import { removeSearchParam } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = removeSearchParam("id", url);
console.log(res); // 输出：http://192.168.0.180:8000/user/getUserDetail?name=admin#tag1
```

---

### parseSearchParam(url = window.location.href)

查询参数字符串转为对象

- #### 参数

  `url` {String} url地址，默认当前url地址

- #### 返回值

  {String} 返回参数对象

- #### 示例

```javascript
import { parseSearchParam } from "@ivujs/util";

let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res = parseSearchParam(url);
console.log(res); // 输出：{id: '123', name: 'admin'}
```

---

### formatSearchString(params)

对象转为查询参数字符串

- #### 参数

  `params` {Object} 参数对象
  `url` {String} url地址，如果不为空，则会拼接好查询参数字符串的url地址

- #### 返回值

  {String} 返回查询参数字符串

- #### 示例

```javascript
import { formatSearchString } from "@ivujs/util";

let res = formatSearchString({ id: "123", name: "admin" });
console.log(res); // 输出：id=123&name=admin

// url地址，如果不为空，则会拼接好查询参数字符串的url地址
let url = "http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1";
let res1 = formatSearchString({ id: "123", name: "admin" }, url);
console.log(res1); // 输出：http://192.168.0.180:8000/user/getUserDetail?id=123&name=admin#tag1
```
