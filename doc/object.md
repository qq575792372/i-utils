## 对象

#### \_.mapToObject(map)

map 转 object

- ##### 参数

  `map` {Map} 参数

- ##### 返回值

  {Object} 返回 Object

- ##### 示例

```javascript
let obj = LimeUtil.mapToObject(map);
console.log(obj); // 输出：obj对象
```

---

#### \_.mapToJson(map)

map 转 json 字符串

- ##### 参数

  `map` {Map} 参数

- ##### 返回值

  {String} 返回 Json 字符串

- ##### 示例

```javascript
let json = LimeUtil.mapToJson(map);
console.log(json); // 输出：json字符串
```

---

#### \_.objectToMap(obj)

object 转 map

- ##### 参数

  `obj` {Object} 参数

- ##### 返回值

  {Object} 返回 Map

- ##### 示例

```javascript
let map = LimeUtil.objectToMap(obj);
console.log(map); // 输出：map对象
```

---

#### \_.jsonToMap(json)

json 字符串转 map

- ##### 参数

  `json` {String} json 字符串

- ##### 返回值

  {Map} 返回 Map

- ##### 示例

```javascript
let map = LimeUtil.jsonToMap(json);
console.log(map); // 输出：map对象
```

---

#### \_.strifyJson(json)

json 对象转 json 字符串

- ##### 参数

  `json` {Object} json 对象

- ##### 返回值

  {String} 返回 Json 字符串

- ##### 示例

```javascript
let str = LimeUtil.strifyJson(json);
console.log(obj); // 输出：json字符串
```

---

#### \_.parseJson(json)

json 字符串转 json 对象

- ##### 参数

  `json` {String} json 字符串

- ##### 返回值

  {Object} 返回 Json 对象

- ##### 示例

```javascript
let obj = LimeUtil.parseJson(json);
console.log(obj); // 输出：obj对象
```

---

#### \_.deepClone(target)

深拷贝数据  
`目前只支持 Object，Array，Date三种数据类型`

- ##### 参数

  `source` {Object|Array|Date} 需要克隆的原数据

- ##### 返回值

  {Object|Array|Date} 返回深度克隆后的数据

- ##### 示例

```javascript
let obj = { id: 1, name: "test" };
let newObj = LimeUtil.deepClone(obj);
console.log(newObj); // 输出：深拷贝后的对象
```

---

#### \_.merge(target)

合并对象

- ##### 参数

  `target` {Object} 目标对象  
  `source` {Object[]} 原对象列表

- ##### 返回值

  {Object} 返回合并后的对象

- ##### 示例

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
