# 数组 Array

## 数组计算

### arrayMin(array)

数组最小值

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {Number} 返回最小值

- #### 示例

```javascript
import { arrayMin } from "@ivu-plus/i-utils";

let res = arrayMin([1, 3, 4, 8]);
console.log(res); // 输出：1
```

---

### arrayMax(array)

数组最大值

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {Number} 返回最大值

- #### 示例

```javascript
import { arrayMax } from "@ivu-plus/i-utils";

let res = arrayMax([1, 3, 4, 8]);
console.log(res); // 输出：8
```

---

### arraySum(array)

数组求和

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {Number} 返回和

- #### 示例

```javascript
import { arraySum } from "@ivu-plus/i-utils";

let res = arraySum([1, 3, 4, 8]);
console.log(res); // 输出：16
```

---

### arrayAvg(array)

数组求平均值

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {Number} 返回平均数

- #### 示例

```javascript
import { arrayAvg } from "@ivu-plus/i-utils";

let res = arrayAvg([1, 3, 4, 8]);
console.log(res); // 输出：4
```

## 数组比较

### inArray(value, array)

数组中是否包含指定的元素

- #### 参数

  `value` {String|Number} 元素  
  `array` {Array} 查找的数组

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { inArray } from "@ivu-plus/i-utils";

let res = inArray(1, [1, 2, 3]);
console.log(res); // 输出：true
```

---

### arrayEquals(array1, array2)

比较两个数组是否相等

- #### 参数

  `array1` {Array} 数组 1  
  `array2` {Array} 数组 2

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { arrayEquals } from "@ivu-plus/i-utils";

// 场景1
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
console.log(arrayEquals(array1, array2)); // 输出：true

// 场景2
// 值虽然相等，但是顺序不同也是不相同的
let array1 = [1, 2, 3];
let array2 = [1, 3, 2];
console.log(arrayEquals(array1, array2)); // 输出：false
```

## 数组操作

### arrayCreate(length = 0)

生成指定长度的数组

- #### 参数

  `length` {Number} 长度，默认 0

- #### 返回值

  {Array} 返回生成的数组

- #### 示例

```javascript
import { arrayCreate } from "@ivu-plus/i-utils";

let res = arrayCreate(3);
console.log(res); // 输出：[0,1,2]
```

---

### arrayInsert(array = [], index = 0, value = undefined)

数组指定位置添加元素  
`如果数组为空，则在0位置添加元素`

- #### 参数

  `array` {Array} 数组
  `index` {Number} 下标位置，默认 0
  `value` {\*} 添加的元素

- #### 返回值

  {Array} 返回操作后的数组

- #### 示例

```javascript
import { arrayInsert } from "@ivu-plus/i-utils";

let res = arrayInsert([1, 2], 1, "MM");
console.log(res); // 输出：[1, 'MM', 2]
```

---

### arrayInsertBefore(array = [], index = 0, value = undefined)

数组指定位置前面添加元素  
`如果数组为空，则在0位置添加元素`

- #### 参数

  `array` {Array} 数组
  `index` {Number} 下标位置，默认 0
  `value` {\*} 添加的元素

- #### 返回值

  {Array} 返回操作后的数组

- #### 示例

```javascript
import { arrayInsertBefore } from "@ivu-plus/i-utils";

let res = arrayInsertBefore([1, 2], 1, "MM");
console.log(res); // 输出：[1, 'MM', 2]
```

---

### arrayInsertAfter(array = [], index = 0, value = undefined)

数组指定位置后面添加元素  
`如果数组为空，则在0位置添加元素`

- #### 参数

  `array` {Array} 数组
  `index` {Number} 下标位置，默认 0
  `value` {\*} 添加的元素

- #### 返回值

  {Array} 返回操作后的数组

- #### 示例

```javascript
import { arrayInsertAfter } from "@ivu-plus/i-utils";

let res = arrayInsertAfter([1, 2], 1, "MM");
console.log(res); // 输出：[1, 2, 'MM']
```

---

### arrayRemove(array = [], index = 0)

数组指定位置删除元素

- #### 参数

  `array` {Array} 数组
  `index` {Number} 下标位置，默认 0

- #### 返回值

  {Array} 返回操作后的数组

- #### 示例

```javascript
import { arrayRemove } from "@ivu-plus/i-utils";

let res = arrayRemove([1, 2], 1);
console.log(res); // 输出：[1]
```

---

### arrayRemoveBefore(array = [], index = 0)

数组指定位置前面删除元素

- #### 参数

  `array` {Array} 数组
  `index` {Number} 下标位置，默认 0

- #### 返回值

  {Array} 返回操作后的数组

- #### 示例

```javascript
import { arrayRemoveBefore } from "@ivu-plus/i-utils";

let res = arrayRemoveBefore([1, 2], 1);
console.log(res); // 输出：[2]
```

---

### arrayRemoveAfter(array = [], index = 0)

数组指定位置后面删除元素

- #### 参数

  `array` {Array} 数组
  `index` {Number} 下标位置，默认 0

- #### 返回值

  {Array} 返回操作后的数组

- #### 示例

```javascript
import { arrayRemoveAfter } from "@ivu-plus/i-utils";

let res = arrayRemoveAfter([1, 2], 0);
console.log(res); // 输出：[1]
```

---

### arrayTop(array = [], index = 0)

数组置顶

- #### 参数

  `array` {Array} 数组
  `index` {Number} 下标位置，默认 0

- #### 返回值

  {Array} 返回操作后的数组

- #### 示例

```javascript
import { arrayTop } from "@ivu-plus/i-utils";

let res = arrayTop([1, 2, 3], 2);
console.log(res); // 输出：[3,1,2]
```

---

### arrayBottom(array = [], index = 0)

数组置尾

- #### 参数

  `array` {Array} 数组
  `index` {Number} 下标位置，默认 0

- #### 返回值

  {Array} 返回操作后的数组

- #### 示例

```javascript
import { arrayBottom } from "@ivu-plus/i-utils";

let res = arrayBottom([1, 2, 3], 1);
console.log(res); // 输出：[1,3,2]
```

---

### arrayUp(array = [], index = 0)

数组向上移动

- #### 参数

  `array` {Array} 数组
  `index` {Number} 下标位置，默认 0

- #### 返回值

  {Array} 返回操作后的数组

- #### 示例

```javascript
import { arrayUp } from "@ivu-plus/i-utils";

let res = arrayUp([1, 2, 3], 1);
console.log(res); // 输出：[2,1,3]
```

---

### arrayDown(array = [], index = 0)

数组向下移动

- #### 参数

  `array` {Array} 数组
  `index` {Number} 下标位置，默认 0

- #### 返回值

  {Array} 返回操作后的数组

- #### 示例

```javascript
import { arrayDown } from "@ivu-plus/i-utils";

let res = arrayDown([1, 2, 3], 1);
console.log(res); // 输出：[1,3,2]
```

---

### arraySwap(array, sourceIndex, targetIndex)

数组交换元素

- #### 参数

  `array` {Array} 数组  
  `sourceIndex` {Number} 原索引  
  `targetIndex` {Number} 目标索引

- #### 返回值

  {Array} 返回交换元素后的新数组

* #### 示例

```javascript
import { arraySwap } from "@ivu-plus/i-utils";

// 第0个和第1个交换位置
let res = arraySwap([1, 2, 3, 4], 0, 1);
console.log(res); // 输出：[2,1,3,4]
```

---

### arraySort(array, mode = SORT.SORT_ASC)

数组排序

- #### 参数

  `array` {Array} 数组  
  `mode` {Number} 排序模式，参考常量集合中 数组常量，默认是升序

- #### 返回值

  {Array} 返回排序后的新数组

* #### 示例

```javascript
import { SORT, arraySort } from "@ivu-plus/i-utils";

// 降序
let res = arraySort([3, 1, 2], SORT.SORT_DESC);
console.log(res); // 输出：[3,2,1]
// 升序
let res = arraySort([3, 1, 2], SORT.SORT_ASC);
console.log(res); // 输出：[1,2,3]
// 随机排序
let res = arraySort([3, 1, 2], SORT.SORT_RANDOM);
console.log(res); // 输出：[1,3,2]
```

---

### arraySortBy(array, props)

数组属性混合排序
`排序默认为asc升序`

- #### 参数

  `array` {Array} 数组  
  `props` {Array} 排序的属性

- #### 返回值

  {Array} 返回排序后的新数组

* #### 示例

```javascript
import { SORT, arraySortBy } from "@ivu-plus/i-utils";

// 只传属性名排序，默认是asc升序
let res = arraySortBy(
  [
    { id: 1, name: "张三", sex: "男" },
    { id: 3, name: "刘红", sex: "女" },
    { id: 2, name: "李四", sex: "男" }
  ],
  ['name',"sex"]
)
console.log(res); // 输出：[{id: 3, name: '刘红', sex: '女'},{id: 1, name: '张三', sex: '男'},{id: 2, name: '李四', sex: '男'}]

// 传入属性名和指定排序类型，默认是asc升序
let res = arraySortBy(
  [
    { id: 1, name: "张三", sex: "男" },
    { id: 3, name: "刘红", sex: "女" },
    { id: 2, name: "李四", sex: "男" }
  ],
  [{ prop: "sex", order: "asc" }, { prop: "name", order: "desc" }]
)
console.log(res); // 输出：[{id: 3, name: '刘红', sex: '女'},{id: 2, name: '李四', sex: '男'},{id: 1, name: '张三', sex: '男'}]
```

---

### arrayUnique(array)

数组元素去重

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {Array} 返回去重后的数组

- #### 示例

```javascript
import { arrayUnique } from "@ivu-plus/i-utils";

let res = arrayUnique([1, 3, 4, 2, 2, 3]);
console.log(res); // 输出：[1,3,4,2]
```

---

### arrayShuffle(array)

数组打乱元素  
`可以适用于一些抽奖人员列表打乱顺序`

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {Array} 返回打乱之后新的数组

* #### 示例

```javascript
import { arrayShuffle } from "@ivu-plus/i-utils";

let array = [1, 2, 3, 4];
let res = arrayShuffle(array);
console.log(res); // 输出：[3,1,4,2]
```

---

## 数组转换

### arrayToTree(array, setting = { key: "id", parentKey: "pid", childrenKey: "children" })

普通数组转树形结构

- #### 参数

  `array` {Array} 数组  
  `setting` {Object} 配置项

- #### 返回值

  {Array} 返回树形节点

* #### 示例

```javascript
import { arrayToTree } from "@ivu-plus/i-utils";

let array = [
  { id: 1, name: "节点1" },
  { id: 11, name: "节点1-1", pid: 1 },
  { id: 111, name: "节点1-1-1", pid: 11 },
  { id: 12, name: "节点1-2", pid: 1 },
  { id: 121, name: "节点1-2-1", pid: 12 },

  { id: 2, name: "节点2" },

  { id: 3, name: "节点3" },
  { id: 31, name: "节点3-1", pid: 3 },
  { id: 32, name: "节点3-2", pid: 3 }
];
let res = arrayToTree(array);
console.log(res); // 输出：返回父子级children的节点
```

---

### treeToArray(nodes, setting = { childrenKey: "children" })

树形结构转普通数组

- #### 参数

  `nodes` {Array} 树形节点  
  `setting` {Object} 配置项

- #### 返回值

  {Array} 返回普通数组

* #### 示例

```javascript
import { treeToArray } from "@ivu-plus/i-utils";

let nodes = [
  {
    id: 1,
    name: "节点1",
    pid: "0",
    children: [
      {
        id: 11,
        name: "节点1-1",
        pid: 1,
        children: [
          {
            id: 111,
            name: "节点1-1-1",
            pid: 11
          }
        ]
      },
      {
        id: 12,
        name: "节点1-2",
        pid: 1,
        children: [
          {
            id: 121,
            name: "节点1-2-1",
            pid: 12
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "节点2",
    pid: "0"
  },
  {
    id: 3,
    name: "节点3",
    pid: "0",
    children: [
      {
        id: 31,
        name: "节点3-1",
        pid: 3
      },
      {
        id: 32,
        name: "节点3-2",
        pid: 3
      }
    ]
  }
];
let res = arrayToTree(nodes);
console.log(res); // 输出：返回父子级children的节点
```

---

## 数组求并集，交集，差集等

### arrayUnion(array1, array2)

数组求并集

`数组1 和 数组2 合并一起的元素集合`

- #### 参数

  `array1` {Array} 数组1
  `array2` {Array} 数组2

- #### 返回值

  {Number} 返回数组

- #### 示例

```javascript
import { arrayUnion } from "@ivu-plus/i-utils";

// 无重复元素
let array1 = [1, 2];
let array2 = [2, 3];
console.log(arrayUnion(array1, array2)); // 输出：[1, 2, 3]

// 有重复元素
let array1 = [1, 2, 2];
let array2 = [2, 3, 3];
console.log(arrayUnion(array1, array2)); // 输出：[1, 2, 3]
```

---

### arrayIntersect(array1, array2)

数组求交集

`数组1 和 数组2 相同的元素集合`

- #### 参数

  `array1` {Array} 数组1  
  `array2` {Array} 数组2

- #### 返回值

  {Number} 返回数组

- #### 示例

```javascript
import { arrayIntersect } from "@ivu-plus/i-utils";

// 无重复元素
let array1 = [1, 2, 3];
let array2 = [2, 3, 4];
console.log(arrayIntersect(array1, array2)); // 输出：[2, 3]

// 有重复元素
let array1 = [1, 2, 3];
let array2 = [2, 2, 3, 3, 4];
console.log(arrayIntersect(array1, array2)); // 输出：[2, 3]
```

---

### arrayDifference(array1, array2)

数组求差集

`数组1 中不包含 数组2 的元素集合`

- #### 参数

  `array1` {Array} 数组1  
  `array2` {Array} 数组2

- #### 返回值

  {Number} 返回数组

- #### 示例

```javascript
import { arrayDifference } from "@ivu-plus/i-utils";

// 无重复元素
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
console.log(arrayDifference(array1, array2)); // 输出：[1, 2]

// 有重复元素
let array1 = [1, 2, 3];
let array2 = [2, 2, 3, 3, 4];
console.log(arrayDifference(array1, array2)); // 输出：[1, 2]
```

---

### arrayComplement(array1, array2)

数组求补集

`数组1 和 数组2 不相同的元素集合`

- #### 参数

  `array1` {Array} 数组1  
  `array2` {Array} 数组2

- #### 返回值

  {Number} 返回数组

- #### 示例

```javascript
import { arrayComplement } from "@ivu-plus/i-utils";

// 无重复元素
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
console.log(arrayComplement(array1, array2)); // 输出：[1, 2, 4, 5]

// 有重复元素
let array1 = [1, 2, 3];
let array2 = [3, 3, 4, 5];
console.log(arrayComplement(array1, array2)); // 输出：[1, 2, 4, 5]
```
