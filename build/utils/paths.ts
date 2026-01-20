import { resolve } from "path";

/**
 * 打包中使用的所有路径
 */
// 打包根目录名称
export const ROOT_DIR = "dist";

// root
export const root = resolve("./");

// 输入
export const inputSrc = resolve(root, "src");

// 输出
export const outputRoot = resolve(root, ROOT_DIR); // 打包根路径
export const outputLib = resolve(root, outputRoot, "lib"); // lib全量包路径
export const outputEsm = resolve(root, outputRoot, "es"); // es包路径
export const outputCjs = resolve(root, outputRoot, "cjs"); // cjs包路径

