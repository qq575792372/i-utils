/**
 * 排序相关常量配置（全局只读）
 *
 * DESC: 降序
 *  - 取值：0
 *
 * ASC: 升序
 *  - 取值：1
 *
 * RANDOM: 随机排序
 *  - 取值：2
 */
export const SORT: Record<string, number> = {
  // 降序
  DESC: 0,
  // 升序
  ASC: 1,
  // 随机排序
  RANDOM: 2,
} as const;
