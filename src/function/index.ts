/**
 * @module 函数
 */
/**
 * 防抖函数
 * @description 事件执行后，在延迟时间内如果再次执行，会清空定时器重新延迟执行，举例：用户在输入框进行输入搜索，最终是会获取到最后一次输入，节约请求资源
 * @param {Function} fn 目标函数
 * @param {number} delay 延迟时间，单位毫秒，默认 1*1000 毫秒
 * @param {boolean} immediate 是否立即执行，默认true
 * @returns {Function} 返回function()
 */
export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number = 1000, immediate: boolean = true) {
  // 定时器
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    // 先关闭定时器
    if (timer) clearTimeout(timer);

    // 立即执行判断
    if (immediate) {
      // 如果需要立即执行
      // 开启新定时器防止短时间内再次触发
      const canExecute = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (canExecute) fn.apply(this, args);
    }
    // 如果不需要立即执行
    else {
      // 每次触发开启新定时器即可
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  };
}

/**
 * 节流函数
 * @description 高频触发时，在指定时间间隔内只执行一次，举例：监听页面滚动，不会频繁触发，只会在固定时间内获取一次
 * @param {Function} fn 目标函数
 * @param {number} interval 时间间隔，单位毫秒，默认1000毫秒
 * @returns {Function} 返回function()
 */
export function throttle<T extends (...args: any[]) => any>(fn: T, interval: number = 1000) {
  // 定时器
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    // 有定时器则返回
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, interval);
  };
}

/**
 * 睡眠延迟执行
 * @description 需要配合 async/await 来达到延迟效果
 * @param {number} delay 延迟时间，单位毫秒，默认1000毫秒
 */
export function sleep(delay = 1000) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
