# 随机数 Random

### getRandom(min = 0, max = 9)

生成指定大小的随机整数  
`n 和 m 参数表示最小和最大范围值，默认0-9之间范围`

- #### 参数

  `min` {Number} 随机数的最小值，默认 0  
  `max` {Number} 随机数的最大值，默认 9

- #### 返回值

  {Number} 返回指定大小的随机整数

- #### 示例

```javascript
import { getRandom } from "@ivu-plus/util";

let res = getRandom(0, 9);
console.log(res); // 输出：0-9之间随机一位
```

---

### getRandomDigit(len = 1)

生成固定位数的随机整数  
`默认是1，代表生成0-9之间一位，如果是2，则生成10-99之间两位，以此类推`

- #### 参数

  `len` {Number} 固定的位数

- #### 返回值

  {Number} 返回固定位数的随机数

- #### 示例

```javascript
import { getRandomDigit } from "@ivu-plus/util";

let res = getRandomDigit(2);
console.log(res); // 输出：10-99之间随机两位
```

