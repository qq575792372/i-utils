// 测试加载成功方法
const loadedTest = function () {
  console.log("lime-util loaded successfully!");
};

// 字符串
import * as stringUtil from "./string";
// 数字
import * as numberUtil from "./number";
// 数组
import * as arrayUtil from "./array";
// 对象
import * as objectUtil from "./object";
// 函数
import * as functionUtil from "./function";

// 日期
import * as dateUtil from "./date";
// 正则
import * as regexpUtil from "./regexp";

// 数学
import * as mathUtil from "./math";

// 随机数
import * as randomUtil from "./random";

// 文件
import * as fileUtil from "./file";

// 颜色
import * as colorUtil from "./color";

// 校验
import * as validateUtil from "./validate";

// 浏览器 Url
import * as urlUtil from "./url";
// 浏览器 Storage
import * as storageUtil from "./storage";
// 浏览器 Cookie
import * as cookieUtil from "./cookie";
// 浏览器 Dom
import * as domUtil from "./dom";
// 浏览器 Device
import * as deviceUtil from "./device";

// 微信小程序
import * as xcxUtil from "./xcx";

// 导出
export default {
  loadedTest,
  // 字符串
  ...stringUtil,
  // 数字
  ...numberUtil,
  // 数组
  ...arrayUtil,
  // 对象
  ...objectUtil,
  // 函数
  ...functionUtil,

  // 日期
  ...dateUtil,
  // 正则
  ...regexpUtil,

  // 数学
  ...mathUtil,

  // 随机数
  ...randomUtil,

  // 文件
  ...fileUtil,

  // 颜色
  ...colorUtil,

  // 校验
  ...validateUtil,

  // 浏览器 Url
  ...urlUtil,
  // 浏览器 Storage
  ...storageUtil,
  // 浏览器 Cookie
  ...cookieUtil,
  // 浏览器 Dom
  ...domUtil,
  // 浏览器 Device
  ...deviceUtil,

  // 微信小程序
  ...xcxUtil,
};
