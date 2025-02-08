# 分页 Pagination

### getLimit(pagination = { page: 1, pageSize: 10, total: 0, totalPage: 0, pagerCount: 7 })

获得分页起始数

- #### 参数

  `pagination` {Object} 分页参数

- #### 返回值

  {Array} 返回起始数组

- #### 示例

```javascript
import { getLimit } from "@ivu-plus/i-utils";

let pagination = { page: 2, pageSize: 10, total: 30 };
let res = getLimit(pagination);
console.log(res); // 输出：[10, 20]
```

---

### getTotalPage(pagination = { page: 1, pageSize: 10, total: 0, totalPage: 0, pagerCount: 7 })

获得总条数

- #### 参数

  `pagination` {Object} 分页参数

- #### 返回值

  {Number} 返回总条数

- #### 示例

```javascript
import { getTotalPage } from "@ivu-plus/i-utils";

let pagination = { page: 2, pageSize: 10, total: 30 };
let res = getTotalPage(pagination);
console.log(res); // 输出：3
```

---

### getRainbowPager(pagination = { page: 1, pageSize: 10, total: 0, totalPage: 0, pagerCount: 7 }, callback)

获得彩虹分页器

- #### 参数

  `pagination` {Object} 分页参数
  `callback` {Function} 回调函数

- #### 返回值

  {Promise} 返回彩虹分页器数据

- #### 示例

```javascript
import { getRainbowPager } from "@ivu-plus/i-utils";

let pagination = { page: 2, pageSize: 10, total: 50 };

// 使用async/await
let res = await getRainbowPager(pagination);
console.log(res); // 输出：[1, 2, 3, 4, 5]

// 使用Promise
getRainbowPager(pagination).then(pager => {
  console.log(res); // 输出：[1, 2, 3, 4, 5]
});

// 使用callback
getRainbowPager(pagination, pager => {
  console.log(res); // 输出：[1, 2, 3, 4, 5]
});

```

---

### getPrevPage(pagination = { page: 1, pageSize: 10, total: 0, totalPage: 0, pagerCount: 7 }, callback)

获得上一页

- #### 参数

  `pagination` {Object} 分页参数
  `callback` {Function} 回调函数

- #### 返回值

  {Promise} 返回上一页

- #### 示例

```javascript
import { getPrevPage } from "@ivu-plus/i-utils";

let pagination = { page: 2, pageSize: 10, total: 50 };

// 使用async/await
let res = await getPrevPage(pagination);
console.log(res); // 输出：1

// 使用Promise
getPrevPage(pagination).then(page => {
  console.log(res); // 输出：1
});

// 使用callback
getPrevPage(pagination, page => {
  console.log(res); // 输出：1
});

```

---

### getNextPage(pagination = { page: 1, pageSize: 10, total: 0, totalPage: 0, pagerCount: 7 }, callback)

获得上一页
`最后一页会根据totalPage参数判断，如果不传此参数，则会根据参数中pageSize和total重新计算总页数`

- #### 参数

  `pagination` {Object} 分页参数
  `callback` {Function} 回调函数

- #### 返回值

  {Promise} 返回下一页

- #### 示例

```javascript
import { getNextPage } from "@ivu-plus/i-utils";

let pagination = { page: 2, pageSize: 10, total: 50 };

// 使用async/await
let res = await getNextPage(pagination);
console.log(res); // 输出：3

// 使用Promise
getNextPage(pagination).then(page => {
  console.log(res); // 输出：3
});

// 使用callback
getNextPage(pagination, page => {
  console.log(res); // 输出：3
});
```
