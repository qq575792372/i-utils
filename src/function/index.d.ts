/**
 * 防抖函数
 * @description 事件执行后，在延迟时间内如果再次执行，会清空定时器重新延迟执行，举例：用户在输入框进行输入搜索，最终是会获取到最后一次输入，节约请求资源
 * @param {Function} fn 目标函数
 * @param {Number} delay 延迟时间，单位毫秒，默认 1*1000 毫秒
 * @param {Boolean} immediate 是否立即执行，默认true
 * @returns {Function} 返回function()
 */
export function debounce(fn: Function, delay?: number, immediate?: boolean): Function;
/**
 * 节流函数
 * @description 高频触发时，在指定时间间隔内只执行一次，举例：监听页面滚动，不会频繁触发，只会在固定时间内获取一次
 * @param {Function} fn 目标函数
 * @param {Number} interval 时间间隔，单位毫秒，默认1*1000毫秒
 * @returns {Function} 返回function()
 */
export function throttle(fn: Function, interval?: number): Function;
/**
 * 睡眠延迟执行
 * @description 需要配合 async/await 来达到延迟效果
 * @param {Number} delay 延迟时间，单位毫秒，默认1*1000毫秒
 */
export function sleep(delay?: number): Promise<any>;
