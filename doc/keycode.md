# 键盘 Keycode

### \_.getKeyName(keycode)

根据 keycode 获得键名

- #### 参数

  `keycode` {Number} 键值

- #### 返回值

  {String} 返回键名

- #### 示例

```javascript
let res = LimeUtil.getKeyName(13);
console.log(res); // 输出：Enter
```

---

### \_.getKeyCode(keyname)

根据 keyname 获得键值

- #### 参数

  `keyname` {String} 键名

- #### 返回值

  {Number} 返回键值

- #### 示例

```javascript
let res = LimeUtil.getKeyCode("Enter");
console.log(res); // 输出：13
```
