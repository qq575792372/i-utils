# 浏览器 Dom

<!-- Class操作 -->

## Class 操作

### \_.hasClass(elem, className)

判断元素包含某个类名

- #### 参数

  `elem` {Element} 元素  
  `className` {String} 类名

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
let btn = document.getElementById("myBtn");
let res = LimeUtil.hasClass(btn, "btn-primary");
console.log(res); // 输出：true
```

---

### \_.addClass(elem, className)

元素添加类名

- #### 参数

  `elem` {Element} 元素  
  `className` {String} 类名

- #### 返回值

  无

- #### 示例

```javascript
let btn = document.getElementById("myBtn");
LimeUtil.addClass(btn, "btn-primary");
```

---

### \_.removeClass(elem, className)

元素删除类名

- #### 参数

  `elem` {Element} 元素  
  `className` {String} 类名

- #### 返回值

  无

- #### 示例

```javascript
let btn = document.getElementById("myBtn");
LimeUtil.removeClass(btn, "btn-primary");
```

---

### \_.replaceClass(elem, newClassName, oldClassName)

元素替换类名

- #### 参数

  `elem` {Element} 元素  
  `newClassName` {String} 新的类名  
  `oldClassName` {String} 被替换掉的旧类名

- #### 返回值

  无

- #### 示例

```javascript
let btn = document.getElementById("myBtn");
LimeUtil.removeClass(btn, "btn-primary", "btn-success");
```

---

<!-- Style操作 -->

## Style 操作

### \_.addStyle(elem, styles = {})

添加元素的 style 样式

- #### 参数

  `elem` {Element} 元素  
  `styles` {Object} 样式属性集合

- #### 返回值

  无

- #### 示例

```javascript
let btn = document.getElementById("myBtn");
LimeUtil.addStyle(btn, { height: "30px", "background-color": "blue" });
```

---

### \_.getStyle(elem, name)

获取元素的 style 样式

- #### 参数

  `elem` {Element} 元素  
  `name` {String} 属性

- #### 返回值

  {String} 返回样式的值

- #### 示例

```javascript
let btn = document.getElementById("myBtn");
LimeUtil.getStyle(btn, "height"); // 输出： 30px
```

---

### \_.removeStyle(elem, name)

删除元素的 style 样式

- #### 参数

  `elem` {Element} 元素  
  `name` {String} 属性

- #### 返回值

  无

- #### 示例

```javascript
let btn = document.getElementById("myBtn");
LimeUtil.removeStyle(btn, "height");
```

---

<!-- Html转码 -->

## Html 转码

### \_.htmlEncode(htmlStr)

html 标签转义

- #### 参数

  `htmlStr` {String} html 字符串

- #### 返回值

  {String} 返回转义后的字符串

- #### 示例

```javascript
let encode = LimeUtil.htmlEncode("<div id='1'>测试</div>");
console.log(encode); // 输出：&lt;div&nbsp;id=&#39;1&#39;&gt;测试&lt;&#47;div&gt;
```

---

### \_.htmlDecode(htmlStr)

html 标签解码

- #### 参数

  `htmlStr` {String} html 字符串

- #### 返回值

  {String} 返回解析后的字符串

- #### 示例

```javascript
let encode = LimeUtil.htmlDecode(
  "&lt;div&nbsp;id=&#39;1&#39;&gt;测试&lt;&#47;div&gt;"
);
console.log(encode); // 输出：<div id='1'>测试</div>
```

---

<!-- 复制剪切板 -->

### \_.copyText(text)

复制文本到剪贴板  
`仅支持谷歌等新浏览器`

- #### 参数

  `text` {String} 文本

- #### 返回值

  {Promise} 返回 Promise 的复制成功和失败

- #### 示例

```javascript
LimeUtil.copyText("我是复制的文本")
  .then((text) => {
    console.log("复制成功，内容是：", text);
  })
  .catch((error) => {
    console.log("复制失败");
  });
```

---

### \_.getCopyText()

从剪贴板获取文本  
`仅支持谷歌等新浏览器`

- #### 参数

  `text` {String} 文本

- #### 返回值

  {Promise} 返回 Promise 的剪切板内容

- #### 示例

```javascript
// 使用此API复制时会弹出来授权
LimeUtil.getCopyText()
  .then((text) => {
    console.log("获取成功，内容是：", text);
  })
  .catch((error) => {
    console.log("获取失败");
  });
```
