import { resolverConfig } from "./auto-imports.ts";
import type { Resolver } from "unplugin-auto-import/types";

/**
 * 解析器类型
 */
export type IUtilsResolverOptions =
  | undefined
  | string[]
  | {
      exclude?: string[]; // 排除指定方法名
      include?: string[]; // 质保函指定方法名
      append?: string[]; // 追加方法名
    };

/**
 * 提供自动导入插件的解析器
 * @param options 配置项，支持3种传参方式
 * @returns unplugin-auto-import 解析器
 * @example
 * // 场景1：默认加载所有方法
 * IUtilsResolver()
 *
 * // 场景2：追加指定方法名
 * IUtilsResolver(["getDate"])
 *
 * // 场景3：精细化控制（排除/只包含/追加）
 * IUtilsResolver({
 *   include: ["getUUID", "getGUID"],
 *   exclude: ["loadedTestUtils"],
 *   append: ["formatDate"]
 * })
 */

export function IUtilsResolver(options?: IUtilsResolverOptions): Resolver {
  // 读取默认配置
  const defaultApis = resolverConfig.apis || [];

  // api配置
  let finalApis: string[] = [...defaultApis];

  // 参数为数组
  if (Array.isArray(options)) {
    finalApis = [...new Set([...defaultApis, ...options])];
  } else {
    if (options && typeof options === "object") {
      // 获得传入解析器的配置参数
      const { include = [], exclude = [], append = [] } = options;
      // 第一步：处理只包含
      if (include.length > 0) {
        finalApis = defaultApis.filter((name) => include.includes(name));
      }
      // 第二步：处理排除
      if (exclude.length > 0) {
        finalApis = finalApis.filter((name) => !exclude.includes(name));
      }
      //   第三步：处理追加
      if (append.length > 0) {
        finalApis = [...new Set([...finalApis, ...append])];
      }
    }
  }
  console.log("IUtilsResolver", finalApis);
  // 返回解析器
  return (name: string) => {
    if (finalApis.includes(name)) {
      return {
        name,
        from: resolverConfig.from,
      };
    }
  };
}
