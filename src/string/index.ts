/**
 * @module 字符串
 */
/* 字符串处理 */
/**
 * 字符串中是否包含指定的元素
 * @param {string} value 包含的元素
 * @param {string} str 查找的字符串
 * @returns {boolean} 返回true和false
 */
export function inString(value: string, str: string): boolean {
  return str.includes(value);
}

/**
 * 去除字符串前后位置空格
 * @param {string} value 参数
 * @returns {string} 返回处理后的字符串
 */
export function trim(value: string): string {
  return value.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 去除字符串开始位置的空格
 * @param {string} value 参数
 * @returns {string} 返回处理后的字符串
 */
export function trimStart(value: string): string {
  return value.replace(/(^\s*)/g, "");
}

/**
 * 去除字符串结束位置的空格
 * @param {string} value 参数
 * @returns {string} 返回处理后的字符串
 */
export function trimEnd(value: string): string {
  return value.replace(/(\s*$)/g, "");
}

/**
 * 去除字符串中全部的空格
 * @param {string} value 参数
 * @returns {string} 返回处理后的字符串
 */
export function trimAll(value: string): string {
  return value.replace(/\s+/g, "");
}

/**
 * 替换所有指定字符串为新的字符串
 * @param {string} value 参数
 * @param {string} oldSubstr 需要替换的字符串
 * @param {string} newSubstr 替换后的字符串
 * @returns {string} 返回处理后的字符串
 */
export function replaceAll(value: string, oldSubstr: string, newSubstr: string): string {
  return value.replace(new RegExp(oldSubstr, "gm"), newSubstr);
}

/* 字符串转换 */
/**
 * 字符串转大写
 * @param {string} value 参数
 * @returns {string} 返回处理后的字符串
 */
export function toUpperCase(value: string): string {
  return String(value).toLocaleUpperCase();
}

/**
 * 字符串转小写
 * @param {string} value 参数
 * @returns {string} 返回处理后的字符串
 */
export function toLowerCase(value: string): string {
  return String(value).toLocaleLowerCase();
}

/**
 * 转为 snake_case 下划线命名
 * @description 支持 驼峰命名，短横命名，帕斯卡命名
 * @param {string} value 参数
 * @returns {string} 返回处理后的字符串
 */
export function toSnakeCase(value: string): string | undefined {
  // 驼峰
  if (/^[a-z]$/.test(value.charAt(0)) && !(value.indexOf("-") > 0 || value.indexOf("_") > 0)) {
    return value.replace(/([A-Z])/g, "_$1").toLowerCase();
  }
  // 短横
  if (value.indexOf("-") > 0) {
    return value.replace(/-/g, "_").toLowerCase();
  }
  // 帕斯卡
  if (/^[A-Z]$/.test(value.charAt(0)) && !(value.indexOf("-") > 0 || value.indexOf("_") > 0)) {
    value = value.charAt(0).toLowerCase() + value.slice(1);
    return value.replace(/([A-Z])/g, "_$1").toLowerCase();
  }
}

/**
 * 转为 kebab-case 短横命名
 * @description 支持 下划线，驼峰命名，帕斯卡命名
 * @param {string} value 参数
 * @returns {string} 返回处理后的字符串
 */
export function toKebabCase(value: string): string | undefined {
  // 下划线
  if (value.indexOf("_") > 0) {
    return value.replace(/_/g, "-").toLowerCase();
  }
  // 驼峰
  if (/^[a-z]$/.test(value.charAt(0)) && !(value.indexOf("-") > 0 || value.indexOf("_") > 0)) {
    return value.replace(/([A-Z])/g, "-$1").toLowerCase();
  }
  // 帕斯卡
  if (/^[A-Z]$/.test(value.charAt(0)) && !(value.indexOf("-") > 0 || value.indexOf("_") > 0)) {
    const newStr = value.charAt(0).toLowerCase() + value.slice(1);
    return newStr.replace(/([A-Z])/g, "-$1").toLowerCase();
  }
}

/**
 * 转为 camelCase 驼峰命名
 * @description 支持 下划线命名，短横命名，帕斯卡命名
 * @param {string} value 参数
 * @returns {string} 返回处理后的字符串
 */
export function toCamelCase(value: string): string {
  // 下划线
  if (value.indexOf("_") > 0) {
    return value.replace(/\_(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    });
  }
  // 短横
  else if (value.indexOf("-") > 0) {
    return value.replace(/\-(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    });
  }
  // 帕斯卡
  else if (/^[A-Z]$/.test(value.charAt(0)) && !(value.indexOf("-") > 0 || value.indexOf("_") > 0)) {
    return value.charAt(0).toLowerCase() + value.slice(1);
  }
  // 返回自身
  else {
    return value;
  }
}

/**
 * 转为 PascalCase 帕斯卡命名
 * @description 支持 下划线命名，短横命名，驼峰命名
 * @param {string} value 参数
 * @returns {string} 返回处理后的字符串
 */
export function toPascalCase(value: string): string {
  // 下划线
  if (value.indexOf("_") > 0) {
    const newStr = value.replace(/\_(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    });
    return newStr.charAt(0).toUpperCase() + newStr.slice(1);
  }
  // 短横
  else if (value.indexOf("-") > 0) {
    const newStr = value.replace(/\-(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    });
    return newStr.charAt(0).toUpperCase() + newStr.slice(1);
  }
  // 驼峰
  else if (/^[a-z]$/.test(value.charAt(0)) && !(value.indexOf("-") > 0 || value.indexOf("_") > 0)) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  // 返回自身
  else {
    return value;
  }
}

/* 字符串格式化 */

/**
 * 数字前补齐0达到指定位数
 * @description 相当于原生的 padStart(2,'0')
 * @param {number|string} value 补零的数字
 * @param {number} maxLength 补齐0后的最大长度，默认2位
 * @returns {string} 返回补0后指定位数的字符串
 */
export function zeroStart(value: string, maxLength: number = 2): string {
  let len = value.toString().length;
  while (len < maxLength) {
    value = "0" + value;
    len++;
  }
  return value;
}

/**
 * 数字后补齐0达到指定位数
 * @description 相当于原生的 padEnd(2,'0')
 * @param {number|string} value 补零的数字
 * @param {number} maxLength 补齐0后的最大长度，默认2位
 * @returns {string} 返回补0后指定位数的字符串
 */
export function zeroEnd(value: string, maxLength: number = 2): string {
  let len = value.toString().length;
  while (len < maxLength) {
    value = value + "0";
    len++;
  }
  return value;
}

/**
 * 格式化为标题样式
 * @param {string} value 字符串值
 * @returns {string} 返回格式化后的标题样式
 */
export function formatTitle(value: string): string {
  if (!value) return "";
  return value
    .split(/(?=[A-Z])|[\.\-\s_]/)
    .map((s) => s.trim())
    .filter((s) => !!s)
    .map((s) => toPascalCase(s.toLowerCase()))
    .join(" ");
}

/**
 * 格式化字符串模版
 * @param {string} value 字符串值
 * @param {Object} data 模版数据
 * @returns {string} 返回格式化后的模版字符串
 */
export function formatTemplate(value: string, data: Record<any, any>): string {
  if (!value) return "";
  return Array.from(value.matchAll(/\{\{(.+?)\}\}/g)).reduce((acc, match) => {
    return acc.replace(match[0], data[match[1]]);
  }, value);
}

/**
 * 格式化千分位数字
 * @description 支持任意数据传参，如果非数字则不会格式化，并返回原数据
 * @param {number|string} num 数字
 * @returns {string} 返回格式化后的千分位数字
 */
export function formatThousand(num: number | string): string {
  if (!parseFloat(String(num))) return String(num);
  num = String(num);
  const regex = num.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return num.replace(regex, "$1,");
}

/**
 * 格式化人民币金额大写
 * @param {number|string} money 金额
 * @returns {string} 返回金额大写
 */
export function formatRmbChinese(money: number | string): string {
  // 汉字的数字
  const cnNums = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  // 基本单位
  const cnIntRadiance = ["", "拾", "佰", "仟"];
  // 对应整数部分扩展单位
  const cnIntUnits = ["", "万", "亿", "兆"];
  // 对应小数部分单位
  const cnDecUnits = ["角", "分", "毫", "厘"];
  // 整数金额时后面跟的字符
  const cnInteger = "整";
  // 整型完以后的单位
  const cnIntLast = "元";
  // 最大处理的数字
  const maxNum = Number("999999999999999.9999");
  // 金额整数部分
  let integerNum;
  // 金额小数部分
  let decimalNum;
  // 输出的中文金额字符串
  let chineseStr = "";
  // 分离金额后用的数组，预定义
  let parts;
  if (money === "") {
    // 不能用==
    return "";
  }
  money = parseFloat(String(money));
  if (money >= maxNum) {
    // 超出最大处理数字，抛出异常
    throw new Error("Calculated number overflow!");
  }
  if (money === 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  // 转换为字符串
  money = money.toString();
  if (money.indexOf(".") === -1) {
    integerNum = money;
    decimalNum = "";
  } else {
    parts = money.split(".");
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0;
    const IntLen = integerNum.length;
    for (let i = 0; i < IntLen; i++) {
      const n = integerNum.substr(i, 1);
      const p = IntLen - i - 1;
      const q = p / 4;
      const m = p % 4;
      if (n === "0") {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        // 归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadiance[m];
      }
      if (m === 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  // 小数部分
  if (decimalNum !== "") {
    const decLen = decimalNum.length;
    for (let i = 0; i < decLen; i++) {
      const n = decimalNum.substr(i, 1);
      if (n !== "0") {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr === "") {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum === "") {
    chineseStr += cnInteger;
  }
  return chineseStr;
}
