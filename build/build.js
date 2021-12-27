const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { run } = require("runjs");

/**
 * 获得目录下所有文件名称
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

// packages根目录
const rootPath = path.join(__dirname, `../packages`);
// packages包列表
const pkgList = getDirList(rootPath);
// 遍历packages
pkgList.forEach((v) => {
  const filePath = path.join(`${v[0]}`);
  if (fs.existsSync(filePath)) {
    // 开始打包
    console.log(chalk.blue.bold(`\n> 正在构建 ${v[1]} 模块..\n`));
    run(`cd ${filePath} && pnpm run build`);
  }
});

// 完成
console.log(chalk.green.bold(`\n✔ 所有模块构建完成.\n`));
