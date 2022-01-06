/**
 * 提供所有工具包的整合版本
 */

import core from "./packages/core/index";
import date from "./packages/date/index";
import weapp from "./packages/weapp/index";

export default {
  ...core,
  ...date,
  ...weapp,
};
