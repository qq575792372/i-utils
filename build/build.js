const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { run } = require("runjs");

function getDirList(dirName, deep, list) {
  list = list || [];
  fs.readdirSync(dirName).forEach((fileName) => {
    const fullName = path.join(dirName, fileName);
    const stat = fs.statSync(fullName);
    if (stat.isDirectory()) {
      list.push([fullName, fileName, dirName]);
      deep && getDirList(fullName, deep, list);
    }
  });
  return list;
}

const dirs = getDirList(path.resolve(__dirname, `../packages`));

dirs.forEach((v) => {
  // const filePath = path.join(`${v[0]}\\rollup.config.js`);
  const filePath = path.join(`${v[0]}`);
  if (fs.existsSync(filePath)) {
    console.log(chalk.blue.bold(`\n> 正在构建 ${v[1]} 模块.\n`));
    const cli = `cd ${filePath} && pnpm run build`;
    run(cli);
  }
});
