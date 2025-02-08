# 常量集合 Constant

### 数组

数组相关的常量

`SORT_DESC` 降序  
`SORT_ASC` 升序  
`SORT_RANDOM` 随机排序

- #### 示例

```javascript
import { arraySort, SORT } from "@ivu-plus/i-utils";

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

### 数学计算

计算精度模式相关的常量

`ROUND` 正常四舍五入，如：1.354 保留两位是 1.35；1.355 保留两位是 1.36  
`ROUND_FLOOR` 向下舍出，如：1.354 保留两位是 1.35；1.355 保留两位是 1.35

- #### 示例

```javascript
import { toFixed, toDecimal, MATH } from "@ivu-plus/i-utils";

console.log(toFixed(1.015, 2, MATH.ROUND)); // 输出：1.02
console.log(toDecimal(1.015, 2, MATH.ROUND_FLOOR)); // 输出：1.01
```
