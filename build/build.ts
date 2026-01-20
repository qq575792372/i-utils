import fs from "fs";
import chalk from "chalk";
import { build } from "vite";
import { resolve } from "path";
import { execaCommand } from "execa";
import { Project, SyntaxKind } from "ts-morph";
// rollup打包工具
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import dts from "rollup-plugin-dts";
import type { RollupOptions } from "rollup";
// 自定义工具
import { rollupBuild } from "./utils/rollup-build";
import { banner } from "./banner";
import pkg from "../package.json";

/**
 * 打包主入口
 * @description 打包的步骤不能变，是安装生成的流程执行
 */
export async function buildMain() {
  try {
    console.log(chalk.blue("🚀 开始构建工具库"));
    // 清理dist目录
    await cleanDist();
    // 执行模块打包
    await buildModules();
    // 生成模块类型文件
    await generateModuleDts();
    // 生成模块入口类型文件
    await generateEntryModuleDts();
    // 生成解析器类型文件
    await generateResolverDts();
    // 打包解析器
    await buildResolver();
    // 生成解析器需要的模块入口类型文件方法名
    await generateResolverApis();

    // 构建完成
    console.log(chalk.green("✅  构建工具库成功"));
  } catch (error) {
    console.error(chalk.red("❌ 构建失败："), error);
    process.exit(1);
  }
}

/**
 * 清空打包目录
 */
export async function cleanDist() {
  console.log(chalk.blue("🧹 正在清理打包目录"));
  await fs.rmSync(resolve("dist"), { recursive: true, force: true });
}

/**
 * 打包模块代码
 */
export async function buildModules() {
  console.log(chalk.blue("📦 正在打包模块代码"));
  const options: RollupOptions[] = [
    {
      input: resolve("src/index.ts"),
      output: [
        // 按需打包
        {
          format: "es",
          dir: resolve("dist/es"),
          entryFileNames: "[name].mjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: undefined
        },
        {
          format: "cjs",
          dir: resolve("dist/cjs"),
          entryFileNames: "[name].cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: undefined
        },
        // 全量包
        {
          format: "umd",
          dir: resolve("dist/lib"),
          entryFileNames: `index.full.umd.js`,
          exports: "named",
          name: "iUtils",
          banner
        },

        // 全量压缩包
        {
          format: "umd",
          dir: resolve("dist/lib"),
          entryFileNames: `index.full.umd.min.js`,
          exports: "named",
          name: "iUtils",
          sourcemap: true,
          banner,
          plugins: [terser()]
        }
      ],
      plugins: [
        commonjs(),
        nodeResolve(),
        typescript({
          noEmit: true,
          allowImportingTsExtensions: true,
          declaration: false,
          declarationDir: undefined,
          emitDeclarationOnly: false,
          declarationMap: false
        })
      ]
    }
  ];

  // 执行打包
  await rollupBuild(options);
}

/**
 * 打包解析器
 */
export async function buildResolver() {
  console.log(chalk.blue("📦 正在打包解析器代码"));
  const options: RollupOptions = {
    input: resolve("src/resolver/index.ts"),
    output: [
      {
        format: "es",
        dir: resolve("dist"),
        entryFileNames: "[name].mjs",
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: undefined
      },
      {
        format: "cjs",
        dir: resolve("dist"),
        entryFileNames: "[name].cjs",
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: undefined
      }
    ],
    plugins: [
      commonjs(),
      nodeResolve(),
      typescript({
        // 关闭掉生成类型的功能，只负责打包ts代码
        declaration: false,
        declarationDir: undefined,
        emitDeclarationOnly: false,
        declarationMap: false,
        allowImportingTsExtensions: true,
        noEmit: true
      })
    ]
  };

  // 执行打包
  await rollupBuild(options);
}

/**
 * 生成模块类型文件
 */
export async function generateModuleDts() {
  console.log(chalk.blue("📝 正在生成模块类型文件"));
  await execaCommand("tsc --project tsconfig.json --pretty --listEmittedFiles");
}

/**
 * 生成模块入口类型文件
 */
export async function generateEntryModuleDts() {
  console.log(chalk.blue("📝 正在生成主入口类型文件"));
  const option: RollupOptions =
    {
      input: resolve("src/index.ts"),
      output: [{
        file: resolve("dist/index.d.ts"),
        format: "es"
      }],
      plugins: [
        dts({
          tsconfig: resolve("tsconfig.json"),
          rollupTypes: true
        })
      ]
    };
  await rollupBuild(option);
}

/**
 * 生成解析器类型文件
 */
export async function generateResolverDts() {
  console.log(chalk.blue("📝 正在生成解析器类型文件"));
  // dist/resolver先创建，移动es下生成的resolvers到dist下，并删除es下旧的resolvers目录
  await fs.mkdirSync(resolve("dist/resolver"), { recursive: true });
  await fs.renameSync(resolve("dist/es/resolver/index.d.ts"), resolve("dist/resolver/index.d.ts"));
  await fs.rmSync(resolve("dist/es/resolver"), { recursive: true, force: true });
}

/**
 * 生成解析器的方法名
 */
export async function generateResolverApis() {
  console.log(chalk.blue("📝 正在生成解析器签名"));
  const project = new Project({
    skipAddingFilesFromTsConfig: true
  });
  // 解析总入口类型文件
  const sourceFile = project.addSourceFilesAtPaths(resolve("dist/index.d.ts"))[0];
  // 所有api名
  const apis = new Set<string>();
  // 所有类型名
  const types = new Set<string>();

  // 提取函数名
  sourceFile.getFunctions().forEach(item => {
    item.isExported() && apis.add(item.getName());
  });
// 提取class名
  sourceFile.getClasses().forEach(item => {
    item.isExported() && apis.add(item.getName());
  });
// 提取变量名
  sourceFile.getVariableDeclarations().forEach(item => {
    item.isExported() && apis.add(item.getName());
  });
  // 提取type类型
  sourceFile.getTypeAliases().forEach(item => {
    item.isExported() && types.add(item.getName());
  });
// 提取interface接口
  sourceFile.getInterfaces().forEach(item => {
    item.isExported() && types.add(item.getName());
  });

// 创建自动导入配置文件的内容
  const autoImportsContentMjs = `
/**
 * 解析器数据配置文件
 */
const resolverConfig = {
  // 提供给自动导入插件的包名
  from: "${pkg.name}", 
  // 提供给自动导入插件用的方法签名
  apis: ${JSON.stringify(Array.from(apis), null, 2).replace(/\n\s*]$/, " ]")}, 
  // 提供给自动导入插件用的类型签名
  types: ${JSON.stringify(Array.from(types), null, 2).replace(/\n\s*]$/, " ]")} 
};

export { resolverConfig };
`;
  const autoImportsContentCjs = `
'use strict';

/**
 * 解析器数据配置文件
 */
const resolverConfig = {
  // 提供给自动导入插件的包名
  from: "${pkg.name}", 
  // 提供给自动导入插件用的方法签名
  apis: ${JSON.stringify(Array.from(apis), null, 2).replace(/\n\s*]$/, " ]")}, 
  // 提供给自动导入插件用的类型签名
  types: ${JSON.stringify(Array.from(types), null, 2).replace(/\n\s*]$/, " ]")} 
};

exports.resolverConfig = resolverConfig;
`;
// 生成解析器需要的json
  await fs.mkdirSync(resolve("dist/resolver"), { recursive: true });
  // 写入mjs和cjs文件
  await fs.writeFileSync(resolve("dist/resolver/auto-imports.mjs"), autoImportsContentMjs.trim(), "utf-8");
  await fs.writeFileSync(resolve("dist/resolver/auto-imports.cjs"), autoImportsContentCjs.trim(), "utf-8");
}


// 打包主入口
buildMain();
