# 函数 Function

<!-- 函数处理 -->

## 函数处理

### \_.throttle(fn, interval = 1 \* 1000)

节流函数  
`高频触发时，在指定时间间隔内只执行一次`

- #### 参数

  `fn` {Function} 目标函数  
  `interval` {Number} 时间间隔，单位毫秒，默认 1 \* 1000 毫秒

- #### 返回值

  {Function} 返回 function()

- #### 示例

```javascript
// 第一种调用方式
<button onclick="myclick()">点击</button>;
function hello() {
  console.log("say hello");
}
const myclick = LimeUtil.throttle(hello, 1 * 1000);

// 第二种调用方式
<button id="mybtn">点击</button>;
function hello() {
  console.log("say hello");
}
document.getElementById("mybtn").onclick = LimeUtil.throttle(hello, 1 * 1000);
```

---

### \_.debounce(fn, delay = 1 \* 1000, immediate = true)

防抖函数  
`事件执行后，在延迟时间内如果再次执行，会清空定时器重新延迟执行`

- #### 参数

  `fn` {Function} 目标函数  
  `delay` {Number} 延迟时间，单位毫秒，默认 1 \* 1000 毫秒  
  `immediate` {Boolean} 是否立即执行，默认 true

- #### 返回值

  {Function} 返回 function()

- #### 示例

```javascript
// 第一种调用方式
<button onclick="myclick()">点击</button>;
function hello() {
  console.log("say hello");
}
const myclick = LimeUtil.debounce(hello, 1 * 1000);

// 第二种调用方式
<button id="mybtn">点击</button>;
function hello() {
  console.log("say hello");
}
document.getElementById("mybtn").onclick = LimeUtil.debounce(hello, 1 * 1000);
```

### \_.sleep(delay = 1 \* 1000)

睡眠延迟执行  
`需要配合 async/await 来达到延迟效果`

- #### 参数

  `delay` {Number} 延迟时间，单位毫秒，默认 1 \* 1000 毫秒

- #### 返回值

  无

- #### 示例

```javascript
// 以下方法打印第二个数字会延迟3秒后执行
async function sleepWork() {
  console.log(1);
  await LimeUtil.sleep(3 * 1000);
  console.log(2);
}
sleepWork();
```

---

<!-- 身份证信息，年龄，生肖，星座 -->

## 身份证信息，年龄，生肖，星座

### \_.getIdCardInfo(idCard)

根据身份证号码获取信息  
`能获取到 籍贯，出生日期，年龄，性别 信息`

- #### 参数

  `idCard` {String} 身份证号码，支持一代 15 位和二代 18 位

- #### 返回值

  {Object} 返回身份证信息

- #### 示例

```javascript
// 输出：{province: '河南', birthday: '2010-12-01', age: 11, sex: '女'}
console.log(LimeUtil.getIdCardInfo("412821201012012221"));

// 输出：{province: '四川', birthday: '1980-02-22', age: 41, sex: '女'}
console.log(LimeUtil.getIdCardInfo("511702800222130"));
```

### \_.getAge(dateStr)

通过日期计算周岁年龄

- #### 参数

  `dateStr` {String} 日期字符串

- #### 返回值

  {Number} 返回周岁年龄

- #### 示例

```javascript
let res = LimeUtil.getAge("2000-10-10");
console.log(res); // 输出：21
```

---

### \_.getZodiac(dateStr)

通过日期计算星座

- #### 参数

  `dateStr` {String} 日期字符串

- #### 返回值

  {String} 返回星座

- #### 示例

```javascript
let res = LimeUtil.getZodiac("2000-10-10");
console.log(res); // 输出：天秤座
```

---

### \_.getChineseZodiac(dateStr)

通过日期计算生肖

- #### 参数

  `dateStr` {String} 日期字符串

- #### 返回值

  {String} 返回生肖

- #### 示例

```javascript
let res = LimeUtil.getChineseZodiac("2000-10-10");
console.log(res); // 输出：龙
```
