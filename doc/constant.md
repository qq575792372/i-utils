# 常量集合 Constant

### 数组

数组相关的常量

`SORT_DESC` 降序  
`SORT_ASC` 升序  
`SORT_RANDOM` 随机排序

- #### 示例

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

### 数学计算

计算精度模式相关的常量

`ROUND` 正常四舍五入，如：1.354 保留两位是 1.35；1.355 保留两位是 1.36  
`ROUND_FLOOR` 向下舍出，如：1.354 保留两位是 1.35；1.355 保留两位是 1.35

- #### 示例

```javascript
console.log(LimeUtil.toFixed(1.015, 2, LimeUtil.ROUND)); // 输出：1.02
console.log(LimeUtil.toDecimal(1.015, 2, LimeUtil.ROUND_FLOOR)); // 输出：1.01
```
