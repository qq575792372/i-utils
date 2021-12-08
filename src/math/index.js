import { isNaN } from "../validate";

// 模式枚举
/**
 * 计算精度模式
 */
export const MATH_MODE = {
  // 正常四舍五入，如：1.354保留两位是1.35；1.355保留两位是1.36；
  ROUND: 0,
  // 向下舍出，如：1.354保留两位是1.35；1.355保留两位是1.35；
  ROUND_FLOOR: 1,
};

// 数字精度计算
/**
 * 两个数字相加
 * @param {String|Number} arg1 第一个数字
 * @param {String|Number} arg2 第二个数字
 * @returns {Number} 返回计算后的数字
 */
export function add(arg1, arg2) {
  let r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}

/**
 * 两个数字相减
 * @param {String|Number} arg1 第一个数字
 * @param {String|Number} arg2 第二个数字
 * @returns {Number} 返回计算后的数字
 */
export function subtract(arg1, arg2) {
  let r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

/**
 * 两个数字相乘
 * @param {String|Number} arg1 第一个数字
 * @param {String|Number} arg2 第二个数字
 * @returns 返回计算后的数字
 */
export function multiply(arg1, arg2) {
  let m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  return (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) / Math.pow(10, m);
}

/**
 * 两个数字相除
 * @param {String|Number} arg1 第一个数字
 * @param {String|Number} arg2 第二个数字
 * @returns {Number} 返回计算后的数字
 */
export function divide(arg1, arg2) {
  let t1 = 0,
    t2 = 0,
    r1,
    r2;
  try {
    t1 = arg1.toString().split(".")[1].length;
  } catch (e) {}
  try {
    t2 = arg2.toString().split(".")[1].length;
  } catch (e) {}
  r1 = Number(arg1.toString().replace(".", ""));
  r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}

/**
 * 两个数字取模
 * @param {String|Number} arg1 第一个数字
 * @param {String|Number} arg2 第二个数字
 * @returns {Number} 返回计算后的数字
 */
export function modulo(arg1, arg2) {
  let t1 = 0,
    t2 = 0,
    d = 0;
  try {
    t1 = arg1.toString().split(".")[1].length;
  } catch (e) {}
  try {
    t2 = arg2.toString().split(".")[1].length;
  } catch (e) {}
  d = Math.pow(10, Math.max(t1, t2));
  return (Math.round(Number(arg1) * d) % Math.round(Number(arg2) * d)) / d;
}

// 强制保留小数位数
/**
 * 强制保留小数位数
 * @description 默认保留两位小数，解决原生的toFixed()会五舍六入的问题
 * @param {String|Number} num 数字
 * @param {Number} decimals 保留小数的位数，默认2位
 * @param {Enum} mode 保留小数模式，参考MATH_MODE枚举类型
 * @returns {String} 返回字符串的数字
 */
export function toFixed(num, decimals = 2, mode = MATH_MODE.ROUND) {
  // 四舍五入
  if (mode == MATH_MODE.ROUND) {
    return toFixedRound(num, decimals);
  }
  // 向下舍出
  if (mode == MATH_MODE.ROUND_FLOOR) {
    return toFixedFloor(num, decimals);
  }
}

/**
 * 四舍五入，强制保留小数位数
 * @description 默认保留两位小数，此方法解决原生的toFixed()会五舍六入的问题
 * @param {String|Number} num 数字
 * @param {Number} decimals 保留小数的位数，默认2位
 * @example
 * toFixedRound(1) // 输出：1.00
 * toFixedRound(1.0) // 输出：1.00
 * toFixedRound(1.01) // 输出：1.01
 * toFixedRound(1.015) // 四舍五入输出：1.02
 * @returns {String} 返回字符串的数字
 */
export function toFixedRound(num, decimals = 2) {
  if (isNaN(num)) {
    return "--";
  }
  let s = String(num);
  if (!decimals) decimals = 0;
  if (s.indexOf(".") == -1) s += ".";
  s += new Array(decimals + 1).join("0");
  if (new RegExp("^(-|\\+)?(\\d+(\\.\\d{0," + (decimals + 1) + "})?)\\d*$").test(s)) {
    let s = "0" + RegExp.$2,
      pm = RegExp.$1,
      a = RegExp.$3.length,
      b = true;
    if (a == decimals + 2) {
      a = s.match(/\d/g);
      if (parseInt(a[a.length - 1]) > 4) {
        for (let i = a.length - 2; i >= 0; i--) {
          a[i] = parseInt(a[i]) + 1;
          if (a[i] == 10) {
            a[i] = 0;
            b = i != 1;
          } else break;
        }
      }
      s = a.join("").replace(new RegExp("(\\d+)(\\d{" + decimals + "})\\d$"), "$1.$2");
    }
    if (b) s = s.substr(1);
    return (pm + s).replace(/\.$/, "");
  }
  return String(num);
}

/**
 * 向下舍出，强制保留小数位数
 * @description 默认保留两位小数，此方法相当于强制截取小数位数
 * @param {String|Number} num 数字
 * @param {Number} decimals 保留小数的位数，默认2位
 * @example
 * toFixedFloor(1) // 输出：1.00
 * toFixedFloor(1.0) // 输出：1.00
 * toFixedFloor(1.01) // 输出：1.01
 * toFixedFloor(1.015) // 四舍后输出：1.01
 * @returns {Number} 返回字符串的数字
 */
export function toFixedFloor(num, decimals = 2) {
  if (isNaN(num)) {
    return "--";
  }
  // 默认为保留的小数点后两位
  let dec = decimals;
  let tempNum = Number(num);
  let pointIndex = String(tempNum).indexOf(".") + 1; // 获取小数点的位置 + 1
  let pointCount = pointIndex ? String(tempNum).length - pointIndex : 0; // 获取小数点后的个数(需要保证有小数位)
  // 源数据为整数或者小数点后面小于decimals位的作补零处理
  if (pointIndex === 0 || pointCount <= dec) {
    let tempNumA = tempNum;
    if (pointIndex === 0) {
      tempNumA = `${tempNumA}.`;
      for (let index = 0; index < dec - pointCount; index++) {
        tempNumA = `${tempNumA}0`;
      }
    } else {
      for (let index = 0; index < dec - pointCount; index++) {
        tempNumA = `${tempNumA}0`;
      }
    }
    return tempNumA;
  }
  let realVal = "";
  // 截取当前数据到小数点后decimals位
  realVal = `${String(tempNum).split(".")[0]}.${String(tempNum).split(".")[1].substring(0, dec)}`;
  return String(realVal);
}

// 尽可能保留小数位数
/**
 * 尽可能保留小数位数
 * @param {String|Number} num 数字
 * @param {Number} decimals 保留小数的位数，默认2位
 * @param {Enum} mode 保留小数模式，参考MATH_MODE枚举类型
 * @returns {Number} 返回保留后的数字
 */
export function toDecimal(num, decimals = 2, mode = MATH_MODE.ROUND) {
  // 四舍五入
  if (mode == MATH_MODE.ROUND) {
    return toDecimalRound(num, decimals);
  }
  // 向下舍出
  if (mode == MATH_MODE.ROUND_FLOOR) {
    return toDecimalFloor(num, decimals);
  }
}
/**
 * 四舍五入，尽可能保留小数
 * @param {String|Number} num 数字
 * @param {Number} decimals 保留小数的位数，默认2位
 * @example
 * toDecimalRound(1) // 不够两位，输出：1
 * toDecimalRound(1.0) // 不够两位，输出：1
 * toDecimalRound(1.01) // 向上五入，输出：1.01
 * toDecimalRound(1.015) // 向上五入，输出：1.02
 * @returns {Number} 返回保留后的数字
 */
export function toDecimalRound(num, decimals = 2) {
  if (isNaN(num)) {
    return "--";
  }
  let n = Math.pow(10, decimals);
  return Math.round(num * n) / n;
}

/**
 * 向下舍入，尽可能保留小数
 * @param {String|Number} num 数字
 * @param {Number} decimals 保留小数的位数，默认2位
 * @example
 * toDecimalFloor(1) // 不够两位，输出：1
 * toDecimalFloor(1.0) // 不够两位，输出：1
 * toDecimalFloor(1.01) // 向下舍入，输出：1
 * toDecimalFloor(1.015) // 向下舍入，输出：1
 * @returns {Number} 返回保留后的数字
 */
export function toDecimalFloor(num, decimals = 2) {
  if (isNaN(num)) {
    return "--";
  }
  let n = Math.pow(10, decimals);
  return Math.floor(num * n) / n;
}
