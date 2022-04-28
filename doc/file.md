# 文件 File

<!-- 文件信息处理 -->

## 文件信息处理

### \_.formatFileSize(size)

格式化文件大小自动转为 B，KB，MB，GB

- #### 参数

  `size` {Byte} 文件的大小，单位 byte 字节

- #### 返回值

  {String} 返回格式化后的字符串

- #### 示例

```javascript
let res = LimeUtil.formatFileSize(102433);
console.log(res); // 输出：100.03KB
```

---

### \_.getFileName(fileName)

获得文件名称

- #### 参数

  `fileName` {String} 文件的全名称，例如：测试图片.jpg

- #### 返回值

  {String} 返回文件的名称

- #### 示例

```javascript
let res = LimeUtil.getFileName("测试图片.jpg");
console.log(res); // 输出：测试图片
```

---

### \_.getFileSuffix(value)

获得文件后缀名

- #### 参数

  `value` {String} 文件地址路径或者文件全名称，例如：http://xxx.com/mytest.jpg，测试图片.jpg

- #### 返回值

  {String} 返回文件后缀名

- #### 示例

```javascript
let res = LimeUtil.getFileSuffix("测试图片.jpg");
console.log(res); // 输出：jpg

let res1 = LimeUtil.getFileSuffix("http://xxx.com/mytest.jpg");
console.log(res1); // 输出：mytest
```

---

<!-- 文件转换 -->

## 文件转换

### \_.fileToBlob(file)

file 转 blob

- #### 参数

  `file` {File} file 文件

- #### 返回值

  {Promise} 返回 Promise 的 blob

- #### 示例

```javascript
LimeUtil.fileToBlob(file).then((blob) => {
  console.log(blob); // 输出：blob数据
});
```

---

### \_.fileToBase64(file)

file 转 base64

- #### 参数

  `file` {File} file 文件

- #### 返回值

  {Promise} 返回 Promise 的 base64

- #### 示例

```javascript
LimeUtil.fileToBase64(file).then((base64) => {
  console.log(base64); // 输出：base64数据
});
```

---

### \_.fileToUrl(file)

file 转 url
`适用于本地上传图片并预览，需要注意 URL.revokeObjectURL(file) 内存释放`

- #### 参数

  `file` {File} file 文件

- #### 返回值

  {Promise} 返回 Promise 的 url

- #### 示例

```javascript
LimeUtil.fileToUrl(file).then((url) => {
  console.log(url); // 输出：base64数据
});
```

---

### \_.blobToFile(blob, fileName = Date.now())

blob 转 file

- #### 参数

  `blob` {Blob} blob 数据  
  `fileName` {String} 文件名称，默认以时间戳命名

- #### 返回值

  {Promise} 返回 Promise 的 file

- #### 示例

```javascript
LimeUtil.blobToFile(blob).then((file) => {
  console.log(file); // 输出：file数据
});
```

---

### \_.blobToBase64(blob)

blob 转 base64

- #### 参数

  `blob` {Blob} blob 数据

- #### 返回值

  {Promise} 返回 Promise 的 base64

- #### 示例

```javascript
LimeUtil.blobToBase64(blob).then((base64) => {
  console.log(base64); // 输出：base64数据
});
```

---

### \_.base64ToFile(base64, fileName = Date.now())

base64 转 file

- #### 参数

  `base64` {Base64} base64 数据  
  `fileName` {String} 文件名称，默认以时间戳命名

- #### 返回值

  {Promise} 返回 Promise 的 file

- #### 示例

```javascript
LimeUtil.base64ToFile(base64).then((file) => {
  console.log(file); // 输出：file数据
});
```

---

### \_.base64ToBlob(base64)

base64 转成 blob

- #### 参数

  `base64` {Base64} base64 数据

- #### 返回值

  {Promise} 返回 Promise 的 blob

- #### 示例

```javascript
LimeUtil.base64ToBlob(base64).then((blob) => {
  console.log(blob); // 输出：blob数据
});
```

---

### \_.urlToBase64(imgUrl)

图片 url 转 base64

- #### 参数

  `imgUrl` {String} 图片 url 地址

- #### 返回值

  {Promise} 返回 Promise 的 base64

- #### 示例

```javascript
LimeUtil.urlToBase64(imgUrl).then((base64) => {
  console.log(base64); // 输出：base64数据
});
```

---

<!-- 下载文件 -->

## 下载文件

### \_.downloadBlobFile(blob, fileName)

下载 blob 格式的文件

- #### 参数

  `blob` {Blob} blob 数据  
  `fileName` {String} 下载的文件名，不写后缀名则默认为原文件类型

- #### 返回值

  无

- #### 示例

```javascript
// 调用该方法，浏览器会自动弹出下载文件
LimeUtil.downloadBlobFile(blob, "test_file");
```

---

### \_.downloadFileUrl(fileUrl, fileName)

通过文件 url 地址下载

- #### 参数

  `fileUrl` {String} url 文件地址  
  `fileName` {String} 下载的文件名，不写后缀名则默认为原文件类型

- #### 返回值

  无

- #### 示例

```javascript
// 调用该方法，浏览器会自动弹出下载文件
LimeUtil.downloadFileUrl("http://wwww.123.com/测试文件.txt", "test_file");
```
