# 浏览器 Dom

## Class 操作

### hasClass(elem, className)

判断元素包含某个类名

- #### 参数

  `elem` {Element} 元素  
  `className` {String} 类名

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { hasClass } from "@ivu-plus/i-utils";

let btn = document.getElementById("myBtn");
let res = hasClass(btn, "btn-primary");
console.log(res); // 输出：true
```

---

### addClass(elem, className)

元素添加类名

- #### 参数

  `elem` {Element} 元素  
  `className` {String} 类名

- #### 返回值

  无

- #### 示例

```javascript
import { addClass } from "@ivu-plus/i-utils";

let btn = document.getElementById("myBtn");
addClass(btn, "btn-primary");
```

---

### removeClass(elem, className)

元素删除类名

- #### 参数

  `elem` {Element} 元素  
  `className` {String} 类名

- #### 返回值

  无

- #### 示例

```javascript
import { removeClass } from "@ivu-plus/i-utils";

let btn = document.getElementById("myBtn");
removeClass(btn, "btn-primary");
```

---

### replaceClass(elem, newClassName, oldClassName)

元素替换类名

- #### 参数

  `elem` {Element} 元素  
  `newClassName` {String} 新的类名  
  `oldClassName` {String} 被替换掉的旧类名

- #### 返回值

  无

- #### 示例

```javascript
import { replaceClass } from "@ivu-plus/i-utils";

let btn = document.getElementById("myBtn");
replaceClass(btn, "btn-primary", "btn-success");
```

---

## Style 操作

### addStyle(elem, styles = {})

添加元素的 style 样式

- #### 参数

  `elem` {Element} 元素  
  `styles` {Object} 样式属性集合

- #### 返回值

  无

- #### 示例

```javascript
import { addStyle } from "@ivu-plus/i-utils";

let btn = document.getElementById("myBtn");
addStyle(btn, { height: "30px", "background-color": "blue" });
```

---

### getStyle(elem, name)

获取元素的 style 样式

- #### 参数

  `elem` {Element} 元素  
  `name` {String} 属性

- #### 返回值

  {String} 返回样式的值

- #### 示例

```javascript
import { getStyle } from "@ivu-plus/i-utils";

let btn = document.getElementById("myBtn");
getStyle(btn, "height"); // 输出： 30px
```

---

### removeStyle(elem, name)

删除元素的 style 样式

- #### 参数

  `elem` {Element} 元素  
  `name` {String} 属性

- #### 返回值

  无

- #### 示例

```javascript
import { removeStyle } from "@ivu-plus/i-utils";

let btn = document.getElementById("myBtn");
removeStyle(btn, "height");
```

---

## Html 转码

### htmlEncode(htmlStr)

html 标签转义

- #### 参数

  `htmlStr` {String} html 字符串

- #### 返回值

  {String} 返回转义后的字符串

- #### 示例

```javascript
import { htmlEncode } from "@ivu-plus/i-utils";

let encode = htmlEncode("<div id='1'>测试</div>");
console.log(encode); // 输出：&lt;div&nbsp;id=&#39;1&#39;&gt;测试&lt;&#47;div&gt;
```

---

### htmlDecode(htmlStr)

html 标签解码

- #### 参数

  `htmlStr` {String} html 字符串

- #### 返回值

  {String} 返回解析后的字符串

- #### 示例

```javascript
import { htmlDecode } from "@ivu-plus/i-utils";

let encode = htmlDecode(
  "&lt;div&nbsp;id=&#39;1&#39;&gt;测试&lt;&#47;div&gt;"
);
console.log(encode); // 输出：<div id='1'>测试</div>
```

