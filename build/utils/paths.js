import { pathResolve } from "./util.js";

/**
 * 打包中使用的所有路径
 */

// 打包根目录名称
export const ROOT_DIR = "dist";

// root
export const root = pathResolve("./");

// 输入
export const inputSrc = pathResolve(root, "src");

// 输出
export const outputRoot = pathResolve(root, ROOT_DIR); // 打包根路径
export const outputLib = pathResolve(root, outputRoot, "lib"); // lib全量包路径
export const outputSrc = pathResolve(root, outputRoot, "src"); // src源码包路径
export const outputEsm = pathResolve(root, outputRoot, "es"); // es包路径
export const outputCjs = pathResolve(root, outputRoot, "cjs"); // cjs包路径
