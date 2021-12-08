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
