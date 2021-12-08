## 数组

#### \_.isInArray(value, array)

数组中是否包含指定的元素

- ##### 参数

  `value` {String|Number} 元素
  `array` {Array} 查找的数组

- ##### 返回值

  {String} 返回 true 和 false

- ##### 示例

```javascript
let res = LimeUtil.isInArray(1, [1, 2, 3]);
console.log(res); // 输出：true
```

---

#### \_.getIndexInArray(value, array)

获得元素在数组中首次出现的位置

- ##### 参数

  `value` {String|Number} 元素
  `array` {Array} 查找的数组

- ##### 返回值

  {Number} 返回查找到的位置下标

- ##### 示例

```javascript
let res = LimeUtil.getIndexInArray(2, [1, 2, 3]);
console.log(res); // 输出：1
```

---

#### \_.uniqueArray(array)

数组元素简单去重

- ##### 参数

  `array` {Array} 数组

- ##### 返回值

  {Array} 返回去重后的数组

- ##### 示例

```javascript
let res = LimeUtil.uniqueArray([1, 3, 4, 2, 2, 3]);
console.log(res); // 输出：[1,3,4,2]
```

---

#### \_.arrayToTree(value, pid)

一维父子级的数组转树形结构

`包含 id 和 pid 属性关系的一维数组，转为 children 的树形结构`

- ##### 参数

  `array` {Array} 数组
  `pid` {String|Number} 父级的 id

- ##### 返回值

  {Array} 返回树形结构数组

* ##### 示例

```javascript
let source = [
  { id: 1, name: "节点1", pid: 0 },
  { id: 11, name: "节点1-1", pid: 1 },
  { id: 111, name: "节点1-1-1", pid: 11 },
  { id: 12, name: "节点1-2", pid: 1 },
  { id: 121, name: "节点1-2-1", pid: 12 },
  { id: 2, name: "节点2", pid: 0 },
  { id: 3, name: "节点3", pid: 0 },
  { id: 31, name: "节点3-1", pid: 3 },
  { id: 32, name: "节点3-2", pid: 3 },
];
let res = LimeUtil.arrayToTree(source, 0);
console.log(res); // 输出：包含children层级关系的树形结构
```
