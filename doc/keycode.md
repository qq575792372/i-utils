# 键盘 Keycode

### getKeyName(keycode)

根据 keycode 获得键名

- #### 参数

  `keycode` {Number} 键值

- #### 返回值

  {String} 返回键名

- #### 示例

```javascript
import { getKeyName } from "@ivu-web/util";

let res = getKeyName(13);
console.log(res); // 输出：Enter
```

---

### getKeyCode(keyname)

根据 keyname 获得键值

- #### 参数

  `keyname` {String} 键名

- #### 返回值

  {Number} 返回键值

- #### 示例

```javascript
import { getKeyCode } from "@ivu-web/util";

let res = getKeyCode("Enter");
console.log(res); // 输出：13
```
