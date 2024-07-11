// 使用插件
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
// 引入package.json
import pkg from "./package.json";
// 引入打包工具类
import { pathResolve } from "./build/utils/util.js";
// 引入打包路径
import { inputSrc, outputCjs, outputEsm, outputLib, outputRoot, outputSrc, root } from "./build/utils/paths.js";

// 声明注释
const banner = `/*
 * ${pkg.name} v${pkg.version}
 * Copyright 2024-${new Date().getFullYear()}, ${pkg.author}
 * Released under the ${pkg.license} License.
 */`;

/**
 * rollup 配置
 */
export default {
  // 入口
  input: pathResolve(inputSrc, "./index.js"),
  // 输出
  output: [
    // 按需打包
    {
      format: "es",
      entryFileNames: "[name].mjs",
      preserveModules: true,
      preserveModulesRoot: pathResolve(outputRoot, "src"),
      dir: pathResolve(outputEsm),
      exports: undefined,
    },
    {
      format: "cjs",
      entryFileNames: "[name].cjs",
      preserveModules: true,
      preserveModulesRoot: pathResolve(outputRoot, "src"),
      dir: pathResolve(outputCjs),
      exports: "named",
    },

    // 打全量包
    {
      format: "es",
      entryFileNames: `index.full.esm.js`,
      dir: pathResolve(outputLib),
      exports: undefined,
      banner,
    },
    {
      format: "umd",
      entryFileNames: `index.full.umd.js`,
      dir: pathResolve(outputLib),
      name: pkg.moduleName,
      exports: "named",
      banner,
    },

    // 打全量包-压缩包
    {
      format: "es",
      entryFileNames: `index.full.esm.min.js`,
      dir: pathResolve(outputLib),
      exports: undefined,
      banner,
      plugins: [terser()],
    },
    {
      format: "umd",
      entryFileNames: `index.full.umd.min.js`,
      dir: pathResolve(outputLib),
      name: pkg.moduleName,
      exports: "named",
      banner,
      plugins: [terser()],
    },
  ],

  // 使用插件
  plugins: [nodeResolve(), commonjs()],
};
