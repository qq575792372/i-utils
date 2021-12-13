## 浏览器 Dom

#### \_.hasClass(elem, className)

判断元素包含某个类名

- ##### 参数

  `elem` {Document} dom 元素  
  `className` {String} 类名

- ##### 返回值

  {Boolean} 返回 true 和 false

- ##### 示例

```javascript
let btn = document.getElementById("myBtn");
let res = LimeUtil.hasClass(btn, "btn-primary");
console.log(res); // 输出：true
```

---

#### \_.addClass(elem, className)

元素添加类名

- ##### 参数

  `elem` {Document} dom 元素  
  `className` {String} 类名

- ##### 返回值

  无

- ##### 示例

```javascript
let btn = document.getElementById("myBtn");
LimeUtil.addClass(btn, "btn-primary");
```

---

#### \_.removeClass(elem, className)

元素删除类名

- ##### 参数

  `elem` {Document} dom 元素  
  `className` {String} 类名

- ##### 返回值

  无

- ##### 示例

```javascript
let btn = document.getElementById("myBtn");
LimeUtil.removeClass(btn, "btn-primary");
```

---

#### \_.replaceClass(elem, newClassName, oldClassName)

元素替换类名

- ##### 参数

  `elem` {Document} dom 元素  
  `newClassName` {String} 新的类名  
  `oldClassName` {String} 被替换掉的旧类名

- ##### 返回值

  无

- ##### 示例

```javascript
let btn = document.getElementById("myBtn");
LimeUtil.removeClass(btn, "btn-primary", "btn-success");
```

---

#### \_.htmlEncode(htmlStr)

html 标签转义

- ##### 参数

  `htmlStr` {String} html 字符串

- ##### 返回值

  {String} 返回转义后的字符串

- ##### 示例

```javascript
let encode = LimeUtil.htmlEncode("<div id='1'>测试</div>");
console.log(encode); // 输出：&lt;div&nbsp;id=&#39;1&#39;&gt;测试&lt;&#47;div&gt;
```

---

#### \_.htmlDecode(htmlStr)

html 标签解码

- ##### 参数

  `htmlStr` {String} html 字符串

- ##### 返回值

  {String} 返回解析后的字符串

- ##### 示例

```javascript
let encode = LimeUtil.htmlDecode("&lt;div&nbsp;id=&#39;1&#39;&gt;测试&lt;&#47;div&gt;");
console.log(encode); // 输出：<div id='1'>测试</div>
```
