import { parseDate } from "../date";
import { isEmpty } from "../validate";

/* 函数处理 */
/**
 * 节流函数
 * @description 高频触发时，在指定时间间隔内只执行一次
 * @param {Function} fn 目标函数
 * @param {Number} interval 时间间隔，单位毫秒，默认1*1000毫秒
 * @returns {Function} 返回function()
 */
export function throttle(fn, interval = 1 * 1000) {
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
 * @description 事件执行后，在延迟时间内如果再次执行，会清空定时器重新延迟执行
 * @param {Function} fn 目标函数
 * @param {Number} delay 延迟时间，单位毫秒，默认 1*1000 毫秒
 * @param {Boolean} immediate 是否立即执行，默认true
 * @returns {Function} 返回function()
 */
export function debounce(fn, delay = 1 * 1000, immediate = true) {
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

/**
 * 睡眠延迟执行
 * @description 需要配合 async/await 来达到延迟效果
 * @param {Number} delay 延迟时间，单位毫秒，默认1*1000毫秒
 */
export function sleep(delay = 1 * 1000) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

/**
 * 根据字符串属性路径获取目标对象
 * @example
 * let res = {code:200, data:{rows:[], pages:{current:1,pageSize:20}}}
 * this._getTargetByPath(res, 'data.pages.pageSize'); // 这里会输出20
 * @param {Object} source 源对象
 * @param {String} path 字符串属性路径
 * @returns {Object} 返回目标对象，可以是任意类型数据
 */
export function getTargetByPath(source, path) {
  const paths = (path || "data").split(".");
  let data = source;
  // 属性总个数
  let lastIndex = paths.length - 1;
  for (const index in paths) {
    // 如果路径中没有该属性，则创建一个
    if (!data[paths[index]]) {
      data[paths[index]] = Number(index) !== lastIndex ? {} : undefined;
    }
    data = data[paths[index]];
  }
  return data;
}

/**
 * 根据字符串属性路径设置目标对象的值
 * @example
 * let res = {code:200, data:{rows:[], pages:{current:1,pageSize:20}}}
 * this._setTargetByPath(res, 'data.pages.pageSize', 30); // 打印res对象会发现pageSize的值改为了30
 * @param {Object} source 源对象
 * @param {String} path 字符串属性路径
 * @param {Any} value 属性设置的值
 * @returns {Object} 返回目标对象，可以是任意类型数据
 */
export function setTargetByPath(source, path, value) {
  const paths = (path || "data").split(".");
  // 变量表达式拼接
  let fxStr = "";
  for (const name of paths) {
    fxStr += `['${name}']`;
  }
  const fn = new Function(
    "source",
    `source${fxStr}=${value}
        `,
  );
  fn(source);
}
