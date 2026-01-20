import eslintJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * eslint配置
 */
export default [
  /* 1. 忽略规则（应放在最前面，优先生效） */
  {
    ignores: ["node_modules/**", "dist/**"],
  },

  /* 2. 全局配置（应用于所有文件） */
  { files: ["src/**/*.{js,ts,jsx,tsx}", "build/**/*.{js,ts,jsx,tsx}"] },
  {
    languageOptions: {
      // 全局变量
      globals: {
        ...globals.es6,
        ...globals.node,
        ...globals.commonjs,
        ...globals.browser,
      },
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  /* 3. 基础规则集（按优先级排序） */
  // JS核心推荐规则（最底层）
  eslintJs.configs.recommended,
  // TS规则
  ...tseslint.configs.recommended,

  /* 4. 工具集成规则 */
  // Prettier规则（放到最后，解决所有规则冲突）
  eslintPluginPrettierRecommended, // Prettier核心规则

  /* 5. 自定义规则（优先级最高，覆盖前面的规则） */
  {
    rules: {
      /* 常规规则 */
      "spaced-comment": [2, "always"], // 注释后面必须写两个空格
      "no-unused-vars": "off", // 忽略未使用的变量
      "no-unreachable": "off", // 忽略return后未执行代码的提示
      "no-empty": "off", // 忽略代码必须返回结果的限制
      "no-prototype-builtins": "off", // 忽略不能直接使用Object原型的一些方法

      /* TS规则 */
      "@typescript-eslint/no-unused-vars": "off", // 忽略TS未使用变量
      "@typescript-eslint/no-unused-expressions": "off", // 忽略TS未使用表达式
      "@typescript-eslint/no-explicit-any": "off", // 允许any类型
      "@typescript-eslint/ban-ts-comment": "off", // 允许@ts-ignore
      "@typescript-eslint/no-empty-function": "off", // 忽略空函数警告
    },
  },
];
