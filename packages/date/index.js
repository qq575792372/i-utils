// 测试加载成功方法
const loadedDate = function () {
  console.log("lime-date loaded successfully!");
};

// 日期
import * as dateUtil from "./src/date";

// 导出
export default {
  loadedDate,
  ...dateUtil,
};

// export * from './src/date'