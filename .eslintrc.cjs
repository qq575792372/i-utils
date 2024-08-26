/**
 * eslint配置
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: { defineOptions: "writable", wx: true },
  parserOptions: {
    ecmaVersion: 2022, // 使用的 ECMAScript  版本
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // 开启jsx模板支持
    },
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    /* 常规规则 */
    "spaced-comment": [2, "always"], // 注释后面必须写两个空格
    "no-unused-vars": "off", // 忽略未使用的变量
    "no-unreachable": "off", // 忽略return后未执行代码的提示
    "no-empty": "off", // 忽略代码必须返回结果的限制
    "no-prototype-builtins": "off", // 忽略不能直接使用Object原型的一些方法
    "no-control-regex": "off", // 忽略regex在行内写
    "no-case-declarations": "off", // 忽略在case中对变量赋值
    "no-use-before-define": "off",
    "class-methods-use-this": "off",
  },
};
