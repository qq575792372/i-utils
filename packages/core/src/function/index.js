import { getAge } from "../../../date/src/date";

/**
 * 节流函数
 * @description 高频触发时，在指定时间间隔内只执行一次
 * @param {Function} fn 目标函数
 * @param {Number} interval 时间间隔，单位毫秒，默认2秒
 * @returns {Function} 返回function()
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
 * @description 事件执行后，在延迟时间内如果再次执行，会清空定时器重新延迟执行
 * @param {Function} fn 目标函数
 * @param {Number} delay 延迟时间，单位毫秒，默认2秒
 * @param {Boolean} immediate 是否立即执行，默认true
 * @returns {Function} 返回function()
 */
export function debounce(fn, delay = 2000, immediate = true) {
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
 * 根据身份证号码获取信息
 * @description 能获取到 籍贯，出生日期，年龄，性别 信息
 * @param {String} idCard 身份证号码，支持一代15位和二代18位
 * @returns {Object} 返回身份证信息
 */
export function getIdCardInfo(idCard) {
  const info = {};
  // 省份
  const area = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外",
  };
  info.province = area[idCard.substring(0, 2)];

  // 15位身份证
  if (idCard.length == 15) {
    // 生日
    info.birthday = "19" + idCard.substring(6, 8) + "-" + idCard.substring(8, 10) + "-" + idCard.substring(10, 12);
    // 年龄
    info.age = getAge(info.birthday);
    // 性别
    info.sex = Number(idCard.substring(14)) % 2 == 0 ? "女" : "男";
  }
  // 18位身份证
  if (idCard.length == 18) {
    // 生日
    info.birthday = idCard.substring(6, 10) + "-" + idCard.substring(10, 12) + "-" + idCard.substring(12, 14);
    // 年龄
    info.age = getAge(info.birthday);
    // 性别
    info.sex = Number(idCard.substring(16, 17)) % 2 == 0 ? "女" : "男";
  }
  return info;
}
