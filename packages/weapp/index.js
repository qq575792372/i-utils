// 测试加载成功方法
const loadedTest = function () {
  console.log("lime-weapp loaded successfully!");
};

// 微信小程序
import * as weappUtil from "./src/weapp";

// 导出
export default {
  loadedTest,
  ...weappUtil,
};
