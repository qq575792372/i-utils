// 测试加载成功方法
const loadedTest = function () {
  console.log("lemon-utils loaded successfully");
};

// string
// import string from "./string/index.js";
// import string from "./string";

// // array
// export { toNumber, toString } from "./string/index.js";
// import string from "./string/index.js";
// export default { loadedTest, ...string };

import { toNumber1, toString1 } from "./array";
import * as string from "./string";

export default {
  toNumber1,
  toString1,
  ...string,
};
