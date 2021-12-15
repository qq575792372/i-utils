const path = require("path");

// 引入打包插件
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";

// 引入package.json
import pkg from "./package.json";

// 转换路径
function pathResolve(dir) {
  return path.resolve(__dirname, dir);
}

// 打包名称
const outputModuleName = "LimeUtil";

// 声明注释
const banner = `/*!
* ${pkg.name} v${pkg.version}
*
* Copyright 2021-${new Date().getFullYear()}, ${pkg.author}
* Licensed under the ${pkg.license} license
* http://www.opensource.org/licenses/mit-license
*
*/`;

/**
 * rollup 配置
 */
export default {
  // 入口
  input: pathResolve("./src/index.js"),
  // 输出
  output: [
    // 生成开发js
    {
      file: pathResolve(`./dist/${pkg.name}.js`),
      format: "umd", // 输出模式
      name: outputModuleName,
      banner,
    },
    // 生成压缩js
    {
      file: pathResolve(`./dist/${pkg.name}.min.js`),
      format: "umd", // 输出模式
      name: outputModuleName,
      banner,
      plugins: [uglify()],
    },
  ],
  // 插件
  plugins: [resolve(), commonjs()],
};
