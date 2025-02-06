# 对象 Object

## 对象转换

### mapToObject(map)

map 转 object

- #### 参数

  `map` {Map} 参数

- #### 返回值

  {Object} 返回 Object

- #### 示例

```javascript
import { mapToObject } from "@ivu-plus/util";

let obj = mapToObject(map);
console.log(obj); // 输出：obj对象
```

---

### mapToJson(map)

map 转 json 字符串

- #### 参数

  `map` {Map} 参数

- #### 返回值

  {String} 返回 Json 字符串

- #### 示例

```javascript
import { mapToJson } from "@ivu-plus/util";

let json = mapToJson(map);
console.log(json); // 输出：json字符串
```

---

### objectToMap(obj)

object 转 map

- #### 参数

  `obj` {Object} 参数

- #### 返回值

  {Object} 返回 Map

- #### 示例

```javascript
import { objectToMap } from "@ivu-plus/util";

let map = objectToMap(obj);
console.log(map); // 输出：map对象
```

---

### jsonToMap(json)

json 字符串转 map

- #### 参数

  `json` {String} json 字符串

- #### 返回值

  {Map} 返回 Map

- #### 示例

```javascript
import { jsonToMap } from "@ivu-plus/util";

let map = jsonToMap(json);
console.log(map); // 输出：map对象
```

---

### stringifyJson(json)

json 对象转 json 字符串

- #### 参数

  `json` {Object} json 对象

- #### 返回值

  {String} 返回 Json 字符串

- #### 示例

```javascript
import { stringifyJson } from "@ivu-plus/util";

let str = stringifyJson(json);
console.log(obj); // 输出：json字符串
```

---

### parseJson(json)

json 字符串转 json 对象

- #### 参数

  `json` {String} json 字符串

- #### 返回值

  {Object} 返回 Json 对象

- #### 示例

```javascript
import { parseJson } from "@ivu-plus/util";

let obj = parseJson(json);
console.log(obj); // 输出：obj对象
```

---


## 数据拷贝，对比，合并等操作

### clone(source)

浅拷贝数据

- #### 参数

  `source` {\*} 拷贝的数据

- #### 返回值

  {\*} 返回浅拷贝的数据

- #### 示例

```javascript
import { clone } from "@ivu-plus/util";

let obj = {id: 1, name: "test"};
let newObj = clone(obj);
console.log(newObj); // 输出：浅拷贝后的对象
```

---

### cloneDeep(source)

深拷贝数据

- #### 参数

  `source` {\*} 拷贝的数据

- #### 返回值

  {\*} 返回深拷贝的数据

- #### 示例

```javascript
import { cloneDeep } from "@ivu-plus/util";

// 对象
let obj = {id: 1, name: "test"};
let newObj = cloneDeep(obj);
console.log(newObj); // 输出：深拷贝后的对象

// 数组对象
let list = [{id: 1, name: "test"}];
let newList = cloneDeep(list);
console.log(newList); // 输出：深拷贝后的数组对象
```

---

### objectEquals(obj1, obj2)

比较两个对象是否相等  
`方法只能对比简单的对象，不能包含function，另外对象的属性顺序不一致也是相等的`

- #### 参数

  `obj1` {Object} 对象 1
  `obj2` {\Object} 对象 2

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
import { objectEquals } from "@ivu-plus/util";

// 场景1
let obj1 = {id: 1, name: "test"};
let obj2 = {id: 1, name: "test"};
let flag = objectEquals(obj1, obj2);
console.log(flag); // 输出：true

// 场景2
// 属性顺序不同也是会当做相等的
let obj1 = {id: 1, name: "test"};
let obj2 = {name: "test", id: 1};
let flag = objectEquals(obj1, obj2);
console.log(flag); // 输出：true

// 场景3
// 属性里面包含function则无法判断，需要用 deepCompare()方法
let obj1 = {
    id: 1, name: "test", say: function () {
    }
};
let obj2 = {
    name: "test", id: 1, say: function () {
    }
};
let flag = objectEquals(obj1, obj2);
console.log(flag); // 输出：false
```

---

### merge(target)

合并对象

- #### 参数

  `target` {Object} 目标对象  
  `source` {Object[]} 原对象列表

- #### 返回值

  {Object} 返回合并后的对象

- #### 示例

```javascript
import { merge } from "@ivu-plus/util";

let obj1 = {a: 1};
let obj2 = {b: 2};

// 1.目标对象如果是obj1，则原obj1对象也会改变
console.log(merge(obj1, obj2)); // 输出：{a: 1, b: 2}
console.log(obj1); // 输出：{a: 1, b: 2}

// 2.目标对象如果是空的，则会都合并到目标空对象上，不会影响原对象
console.log(merge({}, obj1, obj2)); // 输出：{a: 1, b: 2}
console.log(obj1); // 输出：{a: 1} 并未改变原对象
```

## 根据字符串属性路径操作目标对象

### getTargetValueByPath(target, path = "data")

根据字符串属性路径获取目标对象的值

- #### 参数

  `target` {Object} 目标对象
  `path` {String} 字符串属性路径

- #### 返回值

  {Object} 返回目标对象

- #### 示例

```javascript
import { getTargetValueByPath } from "@ivu-plus/util";

let res = {code: 200, data: {rows: [], pages: {current: 1, pageSize: 20}}}
getTargetValueByPath(res, 'data.pages.pageSize'); // 这里会输出20
```

---

### setTargetValueByPath(target, path = "data")

根据字符串属性路径设置目标对象的值

- #### 参数

  `target` {Object} 目标对象
  `path` {String} 字符串属性路径
  `value` {*} 值

- #### 返回值

  无

- #### 示例

```javascript
import { setTargetValueByPath } from "@ivu-plus/util";

let res = {code: 200, data: {rows: [], pages: {current: 1, pageSize: 20}}}
setTargetValueByPath(res, 'data.pages.pageSize', 30); // 打印res对象会发现pageSize的值改为了30
```
