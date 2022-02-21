/**
 * all in one 工具整合包
 */

// 测试加载成功方法
const loadedTest = function () {
  console.log("lime-util loaded successfully!");
};

// 核心工具
import core from "./packages/core/index";
// 日期工具
import date from "./packages/date/index";

// 导出
export default {
  loadedTest,
  ...core,
  ...date,
};
