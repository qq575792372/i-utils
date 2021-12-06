/**
 * 节流函数
 * @description 高频触发时，按指定间隔执行
 * @param fn 目标函数
 * @param interval 时间间隔，单位毫秒，默认2秒
 * @return {(function(): void)|*}
 */
export function throttle(fn, interval = 2000) {
  let timer = 0;
  return function () {
    const _args = arguments;
    // 有定时器则返回
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, _args);
      timer = 0;
    }, interval);
  };
}

/**
 * 防抖函数：每一次的高频触发只执行一次
 * @param fn 目标函数
 * @param delay 延迟时间
 * @param immediate 是否立即执行，true和false，默认true
 * @return {(function(): void)|*}
 */
export function debounce(fn, delay, immediate = true) {
  let timer = 0;
  let executed = false;
  return function () {
    const _args = arguments;
    clearTimeout(timer);
    // 先关闭定时器
    if (immediate) {
      // 如果需要立即执行
      // 判断 executed 是否为 false，为 false 则执行
      // 开启新定时器防止短时间内再次触发
      if (!executed) {
        fn.apply(this, _args);
        executed = true;
      }
      timer = setTimeout(function () {
        executed = false;
      }, delay);
    } else {
      // 如果不需要立即执行
      // 每次触发开启新定时器即可
      timer = setTimeout(function () {
        fn.apply(this, _args);
      }, delay);
    }
  };
}
