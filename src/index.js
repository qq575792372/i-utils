// 测试加载成功方法
const loadedTest = function () {
  console.log("lime-core loaded successfully!");
};

// 常量集合
import * as constants from "./constants/index.js";

// 字符串
import * as stringUtil from "./string/index.js";
// 数字
import * as numberUtil from "./number/index.js";
// 数组
import * as arrayUtil from "./array/index.js";
// 对象
import * as objectUtil from "./object/index.js";
// 函数
import * as functionUtil from "./function/index.js";

// 日期
import * as dateUtil from "./date/index.js";

// 数学
import * as mathUtil from "./math/index.js";

// 正则
import * as regexpUtil from "./regexp/index.js";

// 随机数
import * as randomUtil from "./random/index.js";

// 文件
import * as fileUtil from "./file/index.js";

// 颜色
import * as colorUtil from "./color/index.js";

// 校验
import * as validateUtil from "./validate/index.js";

// 键盘 Keycode
import * as keyCodeUtil from "./keycode/index.js";

// 浏览器 Url
import * as urlUtil from "./url/index.js";
// 浏览器 Cookie
import * as cookieUtil from "./cookie/index.js";
// 浏览器 Storage
import * as storageUtil from "./storage/index.js";
// 浏览器 Dom
import * as domUtil from "./dom/index.js";
// 浏览器 Device
import * as deviceUtil from "./device/index.js";

// 微信小程序工具类
import * as weappUtil from "./weapp/index.js";

// 导出
export default {
  loadedTest,
  // 常量集合
  ...constants,

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

  // 数学
  ...mathUtil,

  // 正则
  ...regexpUtil,

  // 随机数
  ...randomUtil,

  // 文件
  ...fileUtil,

  // 颜色
  ...colorUtil,

  // 校验
  ...validateUtil,

  // 键盘 Keycode
  ...keyCodeUtil,

  // 浏览器 Url
  ...urlUtil,
  // 浏览器 Cookie
  ...cookieUtil,
  // 浏览器 Storage
  ...storageUtil,
  // 浏览器 Dom
  ...domUtil,
  // 浏览器 Device
  ...deviceUtil,

  // 微信小程序
  ...weappUtil,
};
