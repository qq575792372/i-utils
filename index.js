/**
 * all in one 工具整合包
 */

// 核心工具
import core from "./packages/core/index";
// 日期工具
import date from "./packages/date/index";
// 微信小程序工具
import weapp from "./packages/weapp/index";

// 导出
export default {
  ...core,
  ...date,
  ...weapp,
};
