// 引入path
const path = require("path");
// 使用插件
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
// 引入package.json
import pkg from "./package.json";

// 获得文件全路径
function pathResolve(dir) {
  return path.resolve(__dirname, dir);
}

// 声明注释
const banner = `/*!
 * ${pkg.name} 
 * Version: v${pkg.version}
 *
 * Copyright 2021-${new Date().getFullYear()}, ${pkg.author}
 * Licensed under the ${pkg.license} License.
 * http://www.opensource.org/licenses/mit-license
 * 
 */`;

/**
 * rollup 配置
 */
export default {
  // 入口
  input: pathResolve("./index.js"),
  // 输出
  output: [
    // 开发版js
    {
      file: pathResolve(`./dist/index.js`),
      format: "umd", // 输出模式
      name: pkg.moduleName,
      banner,
    },
    // 压缩版js
    {
      file: pathResolve(`./dist/index.min.js`),
      format: "umd", // 输出模式
      name: pkg.moduleName,
      banner,
      plugins: [uglify()],
    },
  ],
  // 使用插件
  plugins: [resolve(), commonjs()],
};
