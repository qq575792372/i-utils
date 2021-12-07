/**
 * 节流函数
 * @description 高频触发时，在指定时间间隔内只执行一次
 * @param fn 目标函数
 * @param interval 时间间隔，单位毫秒，默认2秒
 * @return {Function} 返回function()
 */
export function throttle(fn, interval = 2000) {
  let timer;
  return function () {
    const _args = arguments;
    // 有定时器则返回
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, _args);
    }, interval);
  };
}

/**
 * 防抖函数
 * @description 事件执行后，在延迟时间内如果立即再次执行，会清空定时器重新延迟执行
 * @param fn 目标函数
 * @param delay 延迟时间
 * @param immediate 是否立即执行，true和false，默认true
 * @return {Function} 返回function()
 */
export function debounce(fn, delay, immediate = true) {
  let timer;
  return function () {
    const _args = arguments;
    // 先关闭定时器
    if (timer) clearTimeout(timer);
    // 立即执行判断
    if (immediate) {
      // 如果需要立即执行
      // 开启新定时器防止短时间内再次触发
      const canExecute = !timer;
      timer = setTimeout(function () {
        timer = null;
      }, delay);
      if (canExecute) fn.apply(this, _args);
    } else {
      // 如果不需要立即执行
      // 每次触发开启新定时器即可
      timer = setTimeout(function () {
        fn.apply(this, _args);
      }, delay);
    }
  };
}
