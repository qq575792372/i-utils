# 生成 ID

### getClipboard()

获得剪切板数据
`获得的剪切板的数据是会返回多个可用的MIME类型，比如是纯文本就返回一个['text/plain']，是复制的html则会返回两个可用的['text/plain','text/html']，是复制的图片则是['image/png']`

- #### 参数

  无

- #### 返回值

  {Promise} 返回剪切板的数据，是数组形式，如果是文本则是字符串，否则是blob数据

- #### 示例

```javascript
import { getClipboard } from "@ivu-plus/util";

let res = getClipboard();
console.log(res); // 根据复制的内容类型决定，文本则输出可用的MIME类型，文件或图片则是blob
```

---

### getClipboardText()

获得剪切板文本

- #### 参数

  无

- #### 返回值

  {String} 返回剪切板文本

- #### 示例

```javascript
import { getClipboardText } from "@ivu-plus/util";

let res = getClipboardText();
console.log(res); // 这里输出复制的内容
```

---

### setClipboard(data)

设置剪切板数据

- #### 参数

  `data` {String,Blob} 写入的数据，可以是文本或blob数据

- #### 返回值

  {Promise} 返回结果

- #### 示例

```javascript
import { setClipboard, urlToFile, fileToBlob } from "@ivu-plus/util";

// 设置普通文本数据
let res1 = setClipboard("你好啊");
console.log(res1); // 输出：true

// 设置图片blob
let file = await urlToFile("https://dummyimage.com/300.png");
let blob = await fileToBlob(file);
let res2 = setClipboard(blob);
console.log(res2); // 输出：true

// 设置其他文件blob
let blob = new Blob(["这是blob数据"], { type: "text/plain" });
let res3 = setClipboard(blob);
console.log(res3); // 输出：true
```

---

### setClipboardText(text)

设置剪切板文本

- #### 参数

  `text` {String} 写入的文本

- #### 返回值

  {Promise} 返回结果

- #### 示例

```javascript
import { setClipboardText } from "@ivu-plus/util";

// 设置普通文本数据
let res = setClipboard("你好啊");
console.log(res); // 输出：true


```

---

### clearClipboard()

清空剪切板

- #### 参数

  无

- #### 返回值

  {Promise} 返回结果

- #### 示例

```javascript
import { clearClipboard } from "@ivu-plus/util";

// 清空剪切板数据
let res = clearClipboard();
console.log(res); // 输出：true


```
