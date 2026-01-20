import { OutputOptions, rollup } from "rollup";
import type { RollupOptions } from "rollup";

/**
 * 打包rollup
 * @description 支持单个入口以及多入口打包
 * @param {Object|Array} options 配置项
 */
export async function rollupBuild(options: RollupOptions | RollupOptions[]) {
  try {
    const optionList = Array.isArray(options) ? options : [options];
    for (const option of optionList) {
      // 创建rollup打包实例
      const bundle = await rollup(option);
      // 处理output，兼容单个输出和多个输出
      const outputList = Array.isArray(option.output) ? option.output : [option.output];
      // 写入所有输出格式
      for (const output of outputList) {
        await bundle.write(output);
      }
      // 写入完成，释放资源
      await bundle.close();
    }
  } catch (e) {
    console.error("rollup打包错误", e);
    process.exit(1);
  }
}
