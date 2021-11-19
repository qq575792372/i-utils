// 测试加载成功方法
const testLoaded = function () {
  console.log("lemon-utils loaded successfully!");
};

// 验证
import * as validate from "./validate";

// 字符串
import * as string from "./string";

// localStorage 和 sessionStorage
import * as storage from "./storage";

// cookie
import * as cookie from "./cookie";

// 小程序
import * as xcx from "./xcx";

// 导出
export default {
  testLoaded,
  ...validate,
  ...string,
  ...storage,
  ...cookie,
  ...xcx,
};
