# 数组 Array

<!-- 数组计算 -->

## 数组计算

### \_.arrayMin(array)

数组最小值

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {Number} 返回数组中最小的值

- #### 示例

```javascript
let res = LimeUtil.arrayMin([1, 3, 4, 8]);
console.log(res); // 输出：1
```

---

### \_.arrayMax(array)

数组最大值

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {Number} 返回数组中最大的值

- #### 示例

```javascript
let res = LimeUtil.arrayMax([1, 3, 4, 8]);
console.log(res); // 输出：8
```

---

### \_.arraySum(array)

数组求和

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {Number} 返回数组元素的总和

- #### 示例

```javascript
let res = LimeUtil.arraySum([1, 3, 4, 8]);
console.log(res); // 输出：16
```

---

### \_.arrayAvg(array)

数组求平均值

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {Number} 返回数组平均值

- #### 示例

```javascript
let res = LimeUtil.arrayAvg([1, 3, 4, 8]);
console.log(res); // 输出：4
```

<!-- 数组比较 -->

## 数组比较

### \_.inArray(value, array)

数组中是否包含指定的元素

- #### 参数

  `value` {String|Number} 元素  
  `array` {Array} 查找的数组

- #### 返回值

  {String} 返回 true 和 false

- #### 示例

```javascript
let res = LimeUtil.inArray(1, [1, 2, 3]);
console.log(res); // 输出：true
```

---

### \_.arrayEquals(array1, array2)

比较两个数组是否相等

- #### 参数

  `array1` {Array} 数组 1  
  `array2` {Array} 数组 2

- #### 返回值

  {Boolean} 返回 true 和 false

- #### 示例

```javascript
// 场景1
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
console.log(LimeUtil.arrayEquals(array1, array2)); // 输出：true

// 场景2
// 值虽然相等，但是顺序不同也是不相同的
let array1 = [1, 2, 3];
let array2 = [1, 3, 2];
console.log(LimeUtil.arrayEquals(array1, array2)); // 输出：false
```

<!-- 数组操作 -->

## 数组操作

### \_.arrayCreate(length = 0)

生成指定长度的数组

- #### 参数

  `length` {Number} 长度，默认 0

- #### 返回值

  {Array} 返回生成的数组

- #### 示例

```javascript
let res = LimeUtil.arrayCreate(3);
console.log(res); // 输出：[0,1,2]
```

---

### \_.arrayInsert(source = [], index = 0, value = undefined)

数组指定下标位置添加元素

- #### 参数

  `source` {Array} 源数组
  `index` {Number} 下标位置，默认 0
  `value` {\*} 添加的元素

- #### 返回值

  {Array} 返回新的数组

- #### 示例

```javascript
let res = LimeUtil.arrayInsert([1, 2], 1, "MM");
console.log(res); // 输出： [1, 'MM', 2]
```

---

### \_.arrayRemove(source = [], index = 0)

数组指定下标位置删除元素

- #### 参数

  `source` {Array} 源数组
  `index` {Number} 下标位置，默认 0

- #### 返回值

  {Array} 返回新的数组

- #### 示例

```javascript
let res = LimeUtil.arrayRemove([1, 2], 1);
console.log(res); // 输出：[1]
```

---

### \_.arrayUnique(array)

数组元素去重

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {Array} 返回去重后的数组

- #### 示例

```javascript
let res = LimeUtil.arrayUnique([1, 3, 4, 2, 2, 3]);
console.log(res); // 输出：[1,3,4,2]
```

---

### \_.arrayShuffle(array)

数组打乱元素  
`可以适用于一些抽奖人员列表打乱顺序`

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {Array} 返回打乱之后新的数组

* #### 示例

```javascript
let source = [1, 2, 3, 4];
let res = LimeUtil.arrayShuffle(source);
console.log(res); // 输出：[3,1,4,2]
```

---

### \_.arraySort(array, mode = LimeUtil.SORT_ASC)

数组排序

- #### 参数

  `array` {Array} 数组  
  `mode` {Constant} 排序模式，参考参考<span style="color:#ff9900">`常量集合`</span> 中 <span style="color:#ff9900">`数组`</span>，默认是升序

- #### 返回值

  {Array} 返回排序后的新数组

* #### 示例

```javascript
// 降序
let res = LimeUtil.arraySort([3, 1, 2], LimeUtil.SORT_DESC);
console.log(res); // 输出：[3,2,1]
// 升序
let res = LimeUtil.arraySort([3, 1, 2], LimeUtil.SORT_ASC);
console.log(res); // 输出：[1,2,3]
// 随机排序
let res = LimeUtil.arraySort([3, 1, 2], LimeUtil.SORT_RANDOM);
console.log(res); // 输出：[1,3,2]
```

---

### \_.arraySwap(array, sourceIndex, targetIndex)

数组交换元素

- #### 参数

  `array` {Array} 数组  
  `sourceIndex` {Number} 原索引  
  `targetIndex` {Number} 目标索引

- #### 返回值

  {Array} 返回交换元素后的新数组

* #### 示例

```javascript
let source = [1, 2, 3, 4];
// 第0个和第1个交换位置
let res = LimeUtil.arraySwap(source, 0, 1);
console.log(res); // 输出：[2,1,3,4]
```

---

### \_.arrayToTree(value, pid)

一维父子级的数组转树形结构  
`包含 id 和 pid 属性关系的一维数组，转为 children 的树形结构`

- #### 参数

  `array` {Array} 数组  
  `pid` {String|Number} 父级的 id

- #### 返回值

  {Array} 返回树形结构数组

* #### 示例

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
console.log(res); // 输出：children层级关系的树形结构
```

---

<!-- 数组并集，交集，差集等 -->

## 数组并集，交集，差集等

### \_.arrayUnion(array1, array2)

数组求并集  
`数组1 和 数组2 合并一起的元素集合`

- #### 参数

  `array1` {Array} 数组 1  
  `array2` {Array} 数组 2

- #### 返回值

  {Number} 返回数组并集

- #### 示例

```javascript
// 无重复元素
let array1 = [1, 2];
let array2 = [2, 3];
console.log(LimeUtil.arrayUnion(array1, array2)); // 输出：[1, 2, 3]

// 有重复元素
let array1 = [1, 2, 2];
let array2 = [2, 3, 3];
console.log(LimeUtil.arrayUnion(array1, array2)); // 输出：[1, 2, 3]
```

---

### \_.arrayIntersect(array1, array2)

数组求交集  
`数组1 和 数组2 相同的元素集合`

- #### 参数

  `array1` {Array} 数组 1  
  `array2` {Array} 数组 2

- #### 返回值

  {Number} 返回数组交集

- #### 示例

```javascript
// 无重复元素
let array1 = [1, 2, 3];
let array2 = [2, 3, 4];
console.log(LimeUtil.arrayIntersect(array1, array2)); // 输出：[2, 3]

// 有重复元素
let array1 = [1, 2, 3];
let array2 = [2, 2, 3, 3, 4];
console.log(LimeUtil.arrayIntersect(array1, array2)); // 输出：[2, 3]
```

---

### \_.arrayDifference(array1, array2)

数组求差集  
`数组1 中不包含 数组2 的元素集合`

- #### 参数

  `array1` {Array} 数组 1  
  `array2` {Array} 数组 2

- #### 返回值

  {Number} 返回数组差集

- #### 示例

```javascript
// 无重复元素
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
console.log(LimeUtil.arrayDifference(array1, array2)); // 输出：[1, 2]

// 有重复元素
let array1 = [1, 2, 3];
let array2 = [2, 2, 3, 3, 4];
console.log(LimeUtil.arrayDifference(array1, array2)); // 输出：[1, 2]
```

---

### \_.arrayComplement(array1, array2)

数组求补集  
`数组1 和 数组2 不相同的元素集合`

- #### 参数

  `array1` {Array} 数组 1  
  `array2` {Array} 数组 2

- #### 返回值

  {Number} 返回数组补集

- #### 示例

```javascript
// 无重复元素
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
console.log(LimeUtil.arrayComplement(array1, array2)); // 输出：[1, 2, 4, 5]

// 有重复元素
let array1 = [1, 2, 3];
let array2 = [3, 3, 4, 5];
console.log(LimeUtil.arrayComplement(array1, array2)); // 输出：[1, 2, 4, 5]
```
