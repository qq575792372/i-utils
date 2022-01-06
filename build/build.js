const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { run } = require("runjs");

/**
 * 获得packages目录下所有文件名称
 * @param {*} dirName
 * @returns
 */
function getDirList(dirName) {
  const list = [];
  fs.readdirSync(dirName).forEach((fileName) => {
    const fullName = path.join(dirName, fileName);
    const stat = fs.statSync(fullName);
    if (stat.isDirectory()) {
      list.push([fullName, fileName, dirName]);
    }
  });
  return list;
}

/* 构建整合版本模块 */
console.log(chalk.blue.bold(`\n> 正在构建所有模块整合版..\n`));
run("pnpm run build:all");

/* 单独构建packages下模块 */
const pkgPath = path.join(__dirname, `../packages`);
const pkgList = getDirList(pkgPath);
// 遍历目录
pkgList.forEach((v) => {
  const filePath = path.join(`${v[0]}`);
  if (fs.existsSync(filePath)) {
    // 开始打包
    console.log(chalk.blue.bold(`\n> 正在构建 ${v[1]} 模块..\n`));
    run(`cd ${filePath} && pnpm run build`);
  }
});

/* 所有模块构建完成 */
console.log(chalk.green.bold(`\n✔ 所有模块构建完成.\n`));
