/* 字符串处理 */
/**
 * 去除字符串前后位置空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trim(value) {
  return value.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 去除字符串开始位置的空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trimStart(value) {
  return value.replace(/(^\s*)/g, "");
}

/**
 * 去除字符串结束位置的空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trimEnd(value) {
  return value.replace(/(\s*$)/g, "");
}

/**
 * 去除字符串中全部的空格
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function trimAll(value) {
  return value.replace(/\s+/g, "");
}

/**
 * 替换所有指定字符串为新的字符串
 * @param {String} value 参数
 * @param {String} oldSubstr 需要替换的字符串
 * @param {String} newSubstr 替换后的字符串
 * @returns {String} 返回处理后的字符串
 */
export function replaceAll(value, oldSubstr, newSubstr) {
  return value.replace(new RegExp(oldSubstr, "gm"), newSubstr);
}

/* 字符串转换 */
/**
 * 字符串转大写
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function toUpper(value) {
  return String(value).toLocaleUpperCase();
}

/**
 * 字符串转小写
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function toLower(value) {
  String(value).toLocaleLowerCase();
}

/**
 * 转为 snake_case 下划线命名
 * @description 支持 驼峰命名，短横命名，帕斯卡命名
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function toSnakeCase(value) {
  // 驼峰
  if (
    /^[a-z]$/.test(value.charAt(0)) &&
    !(value.indexOf("-") > 0 || value.indexOf("_") > 0)
  ) {
    return value.replace(/([A-Z])/g, "_$1").toLowerCase();
  }
  // 短横
  if (value.indexOf("-") > 0) {
    return value.replace(/-/g, "_").toLowerCase();
  }
  // 帕斯卡
  if (
    /^[A-Z]$/.test(value.charAt(0)) &&
    !(value.indexOf("-") > 0 || value.indexOf("_") > 0)
  ) {
    value = value.charAt(0).toLowerCase() + value.slice(1);
    return value.replace(/([A-Z])/g, "_$1").toLowerCase();
  }
}

/**
 * 转为 kebab-case 短横命名
 * @description 支持 下划线，驼峰命名，帕斯卡命名
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function toKebabCase(value) {
  // 下划线
  if (value.indexOf("_") > 0) {
    return value.replace(/_/g, "-").toLowerCase();
  }
  // 驼峰
  if (
    /^[a-z]$/.test(value.charAt(0)) &&
    !(value.indexOf("-") > 0 || value.indexOf("_") > 0)
  ) {
    return value.replace(/([A-Z])/g, "-$1").toLowerCase();
  }
  // 帕斯卡
  if (
    /^[A-Z]$/.test(value.charAt(0)) &&
    !(value.indexOf("-") > 0 || value.indexOf("_") > 0)
  ) {
    let newStr = value.charAt(0).toLowerCase() + value.slice(1);
    return newStr.replace(/([A-Z])/g, "-$1").toLowerCase();
  }
}

/**
 * 转为 camelCase 驼峰命名
 * @description 支持 下划线命名，短横命名，帕斯卡命名
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function toCamelCase(value) {
  // 下划线
  if (value.indexOf("_") > 0) {
    return value.replace(/\_(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    });
  }
  // 短横
  if (value.indexOf("-") > 0) {
    return value.replace(/\-(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    });
  }
  // 帕斯卡
  if (
    /^[A-Z]$/.test(value.charAt(0)) &&
    !(value.indexOf("-") > 0 || value.indexOf("_") > 0)
  ) {
    return value.charAt(0).toLowerCase() + value.slice(1);
  }
}

/**
 * 转为 PascalCase 帕斯卡命名
 * @description 支持 下划线命名，短横命名，驼峰命名
 * @param {String} value 参数
 * @returns {String} 返回处理后的字符串
 */
export function toPascalCase(value) {
  // 下划线
  if (value.indexOf("_") > 0) {
    let newStr = value.replace(/\_(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    });
    return newStr.charAt(0).toUpperCase() + newStr.slice(1);
  }
  // 短横
  if (value.indexOf("-") > 0) {
    let newStr = value.replace(/\-(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    });
    return newStr.charAt(0).toUpperCase() + newStr.slice(1);
  }
  // 驼峰
  if (
    /^[a-z]$/.test(value.charAt(0)) &&
    !(value.indexOf("-") > 0 || value.indexOf("_") > 0)
  ) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

/* 字符串加密 */
/**
 * base64 加密
 * @param {String} str 字符串
 * @returns {String} 返回加密后的字符串
 */
export function encode(str) {
  return window.btoa(str);
}

/**
 * base64 解密
 * @param {String} str 字符串
 * @returns {Boolean} 返回解密后的字符串
 */
export function decode(str) {
  return window.atob(str);
}

/* 字符串格式化 */
/**
 * 字符串中是否包含指定的元素
 * @param {String} value 包含的元素
 * @param {String} str 查找的字符串
 * @returns {Boolean} 返回true和false
 */
export function inString(value, str) {
  return str.includes(value);
}

/**
 * 数字前补齐0达到指定位数
 * @description 相当于原生的 padStart(2,'0')
 * @param {Number|String} value 补零的数字
 * @param {Number} maxLength 补齐0后的最大长度，默认2位
 * @returns {String} 返回补0后指定位数的字符串
 */
export function zeroStart(value, maxLength = 2) {
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
 * @param {Number|String} value 补零的数字
 * @param {Number} maxLength 补齐0后的最大长度，默认2位
 * @returns {String} 返回补0后指定位数的字符串
 */
export function zeroEnd(value, maxLength = 2) {
  let len = value.toString().length;
  while (len < maxLength) {
    value = value + "0";
    len++;
  }
  return value;
}

/**
 * 格式化千分位数字
 * @description 支持任意数据传参，如果非数字则不会格式化，并返回原数据
 * @param {Number|String} num 数字
 * @returns {String} 返回格式化后的千分位数字
 */
export function formatThousand(num) {
  if (!parseFloat(num)) return num;
  num = String(num);
  let regex =
    num.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return num.replace(regex, "$1,");
}

/**
 * 格式化人民币金额大写
 * @param {Number|String} money 金额
 * @returns {String} 返回金额大写
 */
export function formatRmbChinese(money) {
  //汉字的数字
  let cnNums = new Array(
    "零",
    "壹",
    "贰",
    "叁",
    "肆",
    "伍",
    "陆",
    "柒",
    "捌",
    "玖"
  );
  //基本单位
  let cnIntRadice = new Array("", "拾", "佰", "仟");
  //对应整数部分扩展单位
  let cnIntUnits = new Array("", "万", "亿", "兆");
  //对应小数部分单位
  let cnDecUnits = new Array("角", "分", "毫", "厘");
  //整数金额时后面跟的字符
  let cnInteger = "整";
  //整型完以后的单位
  let cnIntLast = "元";
  //最大处理的数字
  let maxNum = 999999999999999.9999;
  //金额整数部分
  let integerNum;
  //金额小数部分
  let decimalNum;
  //输出的中文金额字符串
  let chineseStr = "";
  //分离金额后用的数组，预定义
  let parts;
  if (money === "") {
    //不能用==
    return "";
  }
  money = parseFloat(money);
  if (money >= maxNum) {
    //超出最大处理数字，抛出异常
    throw new Error("Calculated number overflow!");
  }
  if (money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  //转换为字符串
  money = money.toString();
  if (money.indexOf(".") == -1) {
    integerNum = money;
    decimalNum = "";
  } else {
    parts = money.split(".");
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  //获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0;
    let IntLen = integerNum.length;
    for (let i = 0; i < IntLen; i++) {
      let n = integerNum.substr(i, 1);
      let p = IntLen - i - 1;
      let q = p / 4;
      let m = p % 4;
      if (n == "0") {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  //小数部分
  if (decimalNum != "") {
    let decLen = decimalNum.length;
    for (let i = 0; i < decLen; i++) {
      let n = decimalNum.substr(i, 1);
      if (n != "0") {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr == "") {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum == "") {
    chineseStr += cnInteger;
  }
  return chineseStr;
}

/**
 * 姓名中间转为星号
 * @param {String} value 姓名
 * @returns {String} 返回转化后字符串
 */
export function formatStartOfName(value) {
  if (value.length == 2) {
    return _formatStartOf(value, 1, 1);
  } else if (value.length > 2) {
    return _formatStartOf(value, 1, value.length - 2);
  } else {
    return value;
  }
}

/**
 * 手机号码固定位数转为星号
 * @param {String} value 手机号码
 * @param {Number} start 前缀长度，默认3位
 * @param {Number} len 显示星号的长度，默认4位
 * @returns {String} 返回转化后字符串
 */
export function formatStartOfMobile(value, start = 3, len = 4) {
  return _formatStartOf(value, start, len);
}

/**
 * 身份证号码固定位数转为星号
 * @param {String} value 身份证号码
 * @param {Number} start 前缀长度，默认4位
 * @param {Number} len 显示星号的长度，默认8位
 * @returns {String} 返回转化后字符串
 */
export function formatStartOfIdCard(value, start = 4, len = 8) {
  return _formatStartOf(value, start, len);
}

/**
 * 银行卡号固定位数转为星号
 * @param {String} value 银行卡号
 * @param {Number} start 前缀长度，默认4位
 * @param {Number} len 显示星号的长度，默认10位
 * @returns {String} 返回转化后字符串
 */
export function formatStartOfBankCard(value, start = 4, len = 11) {
  return _formatStartOf(value, start, len);
}

/**
 * 字符串固定位数转为星号
 * @param {String|Number} value 参数
 * @param {Number} start 前缀长度
 * @param {Number} len 显示星号的长度
 * @returns {String} 返回转化后字符串
 */
function _formatStartOf(value, start, len) {
  value = String(value);
  if (start > value.length) return value;
  // len小于0和len大于剩余长度
  let startStr = "";
  if (len < 0) len = 0;
  if (len > value.length - start) {
    len = value.length - start;
  }
  startStr = String().padEnd(len, "*");
  return value.substring(0, start) + startStr + value.substring(start + len);
}
