# 对象 Object

<!-- 对象转换 -->

## 对象转换

### \_.mapToObject(map)

map 转 object

- #### 参数

  `map` {Map} 参数

- #### 返回值

  {Object} 返回 Object

- #### 示例

```javascript
let obj = LimeUtil.mapToObject(map);
console.log(obj); // 输出：obj对象
```

---

### \_.mapToJson(map)

map 转 json 字符串

- #### 参数

  `map` {Map} 参数

- #### 返回值

  {String} 返回 Json 字符串

- #### 示例

```javascript
let json = LimeUtil.mapToJson(map);
console.log(json); // 输出：json字符串
```

---

### \_.objectToMap(obj)

object 转 map

- #### 参数

  `obj` {Object} 参数

- #### 返回值

  {Object} 返回 Map

- #### 示例

```javascript
let map = LimeUtil.objectToMap(obj);
console.log(map); // 输出：map对象
```

---

### \_.jsonToMap(json)

json 字符串转 map

- #### 参数

  `json` {String} json 字符串

- #### 返回值

  {Map} 返回 Map

- #### 示例

```javascript
let map = LimeUtil.jsonToMap(json);
console.log(map); // 输出：map对象
```

---

### \_.stringifyJson(json)

json 对象转 json 字符串

- #### 参数

  `json` {Object} json 对象

- #### 返回值

  {String} 返回 Json 字符串

- #### 示例

```javascript
let str = LimeUtil.stringifyJson(json);
console.log(obj); // 输出：json字符串
```

---

### \_.parseJson(json)

json 字符串转 json 对象

- #### 参数

  `json` {String} json 字符串

- #### 返回值

  {Object} 返回 Json 对象

- #### 示例

```javascript
let obj = LimeUtil.parseJson(json);
console.log(obj); // 输出：obj对象
```

---

<!-- 数据拷贝，对比，合并等操作 -->

## 数据拷贝，对比，合并等操作

### \_.clone(source)

浅拷贝数据

- #### 参数

  `source` {\*} 拷贝的数据

- #### 返回值

  {\*} 返回浅拷贝的数据

- #### 示例

```javascript
let obj = { id: 1, name: "test" };
let newObj = LimeUtil.clone(obj);
console.log(newObj); // 输出：浅拷贝后的对象
```

---

### \_.cloneDeep(source)

深拷贝数据

- #### 参数

  `source` {\*} 拷贝的数据

- #### 返回值

  {\*} 返回深拷贝的数据

- #### 示例

```javascript
// 对象
let obj = { id: 1, name: "test" };
let newObj = LimeUtil.cloneDeep(obj);
console.log(newObj); // 输出：深拷贝后的对象

// 数组对象
let list = [{ id: 1, name: "test" }];
let newList = LimeUtil.cloneDeep(list);
console.log(newList); // 输出：深拷贝后的数组对象
```

---

### \_.objectEquals(obj1, obj2)

比较两个对象是否相等  
`方法只能对比简单的对象，不能包含function，另外对象的属性顺序不一致也是相等的`

- #### 参数

  `obj1` {Object} 对象 1
  `obj2` {\Object} 对象 2

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
// 场景1
let obj1 = { id: 1, name: "test" };
let obj2 = { id: 1, name: "test" };
let flag = LimeUtil.objectEquals(obj1, obj2);
console.log(flag); // 输出：true

// 场景2
// 属性顺序不同也是会当做相等的
let obj1 = { id: 1, name: "test" };
let obj2 = { name: "test", id: 1 };
let flag = LimeUtil.objectEquals(obj1, obj2);
console.log(flag); // 输出：true

// 场景3
// 属性里面包含function则无法判断，需要用 deepCompare()方法
let obj1 = { id: 1, name: "test", say: function () {} };
let obj2 = { name: "test", id: 1, say: function () {} };
let flag = LimeUtil.objectEquals(obj1, obj2);
console.log(flag); // 输出：false
```

---

### \_.merge(target)

合并对象

- #### 参数

  `target` {Object} 目标对象  
  `source` {Object[]} 原对象列表

- #### 返回值

  {Object} 返回合并后的对象

- #### 示例

```javascript
let obj1 = { a: 1 };
let obj2 = { b: 2 };

// 1.目标对象如果是obj1，则原obj1对象也会改变
console.log(LimeUtil.merge(obj1, obj2)); // 输出：{a: 1, b: 2}
console.log(obj1); // 输出：{a: 1, b: 2}

// 2.目标对象如果是空的，则会都合并到目标空对象上，不会影响原对象
console.log(LimeUtil.merge({}, obj1, obj2)); // 输出：{a: 1, b: 2}
console.log(obj1); // 输出：{a: 1} 并未改变原对象
```
