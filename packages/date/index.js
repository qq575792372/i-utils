// 测试加载成功方法
const loadedTest = function () {
  console.log("lime-date loaded successfully!");
};

// 常量集合
import * as constants from "./src/constants/index.js";

// 日期
import * as dateUtil from "./src/date";

// 导出
export default {
  loadedTest,
  // 常量集合
  ...constants,

  // 日期工具
  ...dateUtil,
};
