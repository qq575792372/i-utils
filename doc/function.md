# 函数 Function

### debounce(fn, delay = 1 \* 1000, immediate = true)

防抖函数  
`事件执行后，在延迟时间内如果再次执行，会清空定时器重新延迟执行，举例：用户在输入框进行输入搜索，最终是会获取到最后一次输入，节约请求资源`

- #### 参数

  `fn` {Function} 目标函数  
  `delay` {Number} 延迟时间，单位毫秒，默认 1 \* 1000 毫秒  
  `immediate` {Boolean} 是否立即执行，默认 true

- #### 返回值

  {Function} 返回 function()

- #### 示例

```javascript
import { debounce } from "@ivu-plus/util";

// 第一种调用方式
<button onclick="myclick()">点击</button>;

function hello() {
  console.log("say hello");
}

const myclick = debounce(hello, 1 * 1000);

// 第二种调用方式
<button id="mybtn">点击</button>;

function hello() {
  console.log("say hello");
}

document.getElementById("mybtn").onclick = debounce(hello, 1 * 1000);
```

---

### throttle(fn, interval = 1 \* 1000)

节流函数  
`高频触发时，在指定时间间隔内只执行一次，举例：监听页面滚动，不会频繁触发，只会在固定时间内获取一次`

- #### 参数

  `fn` {Function} 目标函数  
  `interval` {Number} 时间间隔，单位毫秒，默认 1 \* 1000 毫秒

- #### 返回值

  {Function} 返回 function()

- #### 示例

```javascript
import { throttle } from "@ivu-plus/util";

// 第一种调用方式
<button onclick="myclick()">点击</button>;

function hello() {
  console.log("say hello");
}

const myclick = throttle(hello, 1 * 1000);

// 第二种调用方式
<button id="mybtn">点击</button>;

function hello() {
  console.log("say hello");
}

document.getElementById("mybtn").onclick = throttle(hello, 1 * 1000);
```

---

### sleep(delay = 1 \* 1000)

睡眠延迟执行  
`需要配合 async/await 来达到延迟效果`

- #### 参数

  `delay` {Number} 延迟时间，单位毫秒，默认 1 \* 1000 毫秒

- #### 返回值

  无

- #### 示例

```javascript
import { sleep } from "@ivu-plus/util";

// 以下方法打印第二个数字会延迟3秒后执行
async function sleepWork() {
  console.log(1);
  await sleep(3 * 1000);
  console.log(2);
}

sleepWork();
```
