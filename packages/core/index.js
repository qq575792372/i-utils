// 测试加载成功方法
const loadedTest = function () {
  console.log("lime-core loaded successfully!");
};

// 常量集合
import constants from "./src/constants/index.js";

// 字符串
import * as stringUtil from "./src/string/index.js";
// 数字
import * as numberUtil from "./src/number/index.js";
// 数组
import * as arrayUtil from "./src/array/index.js";
// 对象
import * as objectUtil from "./src/object/index.js";
// 函数
import * as functionUtil from "./src/function/index.js";

// 正则
import * as regexpUtil from "./src/regexp/index.js";

// 数学
import * as mathUtil from "./src/math/index.js";

// 随机数
import * as randomUtil from "./src/random/index.js";

// 文件
import * as fileUtil from "./src/file/index.js";

// 颜色
import * as colorUtil from "./src/color/index.js";

// 校验
import * as validateUtil from "./src/validate/index.js";

// 键盘 Keycode
import * as keyCodeUtil from "./src/keycode/index.js";

// 浏览器 Url
import * as urlUtil from "./src/url/index.js";
// 浏览器 Cookie
import * as cookieUtil from "./src/cookie/index.js";
// 浏览器 Storage
import * as storageUtil from "./src/storage/index.js";
// 浏览器 Dom
import * as domUtil from "./src/dom/index.js";
// 浏览器 Device
import * as deviceUtil from "./src/device/index.js";

// 微信小程序工具类
import * as weappUtil from "./src/weapp/index.js";

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
