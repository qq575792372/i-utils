import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";

/**
 * rollup 配置
 */
export default {
  // 入口
  input: "src/index.js",
  // 输出
  output: {
    file: "dist/lemon-utils.js",
    format: "umd",
    name: "LemonUtils",
    sourcemap: true,
  },
  // 插件
  plugins: [resolve(), commonjs(), uglify()],
};
