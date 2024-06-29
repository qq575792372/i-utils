import chalk from "chalk";
import { run } from "runjs";

console.log(chalk.blue.bold(`\n> 正在构建模块..\n`));
run("rimraf dist && rollup -c --bundleConfigAsCjs\n");
console.log(chalk.green.bold(`\n✔ Nice，所有模块构建完成！\n`));
