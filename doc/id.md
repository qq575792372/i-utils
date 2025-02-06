# 生成 ID

### getUUID(len = 32, radix = 16)

生成UUID

- #### 参数

  `len` {Number} 生成的长度，默认 32 位  
  `radix` {Number} 进制数，默认 16 进制

- #### 返回值

  {String} 返回字符串

- #### 示例

```javascript
import { getUUID } from "@ivu-plus/util";

let res = getUUID();
console.log(res); // 输出：5e71b6a38364c189ab1229bf5c2d5695
```

---

### getGUID()

生成GUID

- #### 参数

  无

- #### 返回值

  {String} 返回字符串

- #### 示例

```javascript
import { getGUID } from "@ivu-plus/util";

let res = getGUID();
console.log(res); // 输出：e854e2ec-063c-1ee7-942f-57c5733ce0cb
```
