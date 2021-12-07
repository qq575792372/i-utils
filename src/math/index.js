import { isNaN } from "../validate";

/**
 * 暴露精度类型，用于计算四舍五入精度
 */
export const MATH = {
  // 正常四舍五入，如：1.354保留两位是1.35；1.355保留两位是1.36；
  ROUND: 0,
  // 向下舍出，如：1.354保留两位是1.35；1.355保留两位是1.35；
  ROUND_FLOOR: 1,
};

/**
 * 两个数字加法
 * @param {Number,String} arg1
 * @param {Number,String} arg2
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
 * 两个数字减法
 * @param {Number,String} arg1
 * @param {Number,String} arg2
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
 * 两个数字乘法
 * @param {Number,String} arg1
 * @param {Number,String} arg2
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
 * 两个数字除法
 * @param {Number,String} arg1
 * @param {Number,String} arg2
 * @returns {Number} 返回计算后的数字
 */
export function divide(arg1, arg2) {
  var t1 = 0,
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
 * 四舍五入，强制保留小数位数
 * @description 默认保留两位小数，解决原生的toFixed()会五舍六入的问题
 * @param {Number|String} num
 * @param {Number} decimals 保留小数的位数，默认2位
 * @example
 * toFixed(2) // 输出：2.00
 * toFixed(2.0) // 输出：2.00
 * toFixed(2.006) // 四舍五入输出：2.01
 * @returns {Number} 返回保留后的数字
 */
export function toFixed(num, decimals = 2, mode = MATH.ROUND) {
  // 正常四舍五入
  if (mode == MATH.ROUND) {
    return toFixedRound(num, decimals);
  }
  // 向下舍出
  if (mode == MATH.ROUND_FLOOR) {
    return toFixedFloor(num, decimals);
  }
}

/**
 * 四舍五入，强制保留小数位数
 * @description 默认保留两位小数，解决原生的toFixed()会五舍六入的问题
 * @param {Number|String} num
 * @param {Number} decimals 保留小数的位数，默认2位
 * @example
 * toFixed(2) // 输出：2.00
 * toFixed(2.0) // 输出：2.00
 * toFixed(2.006) // 四舍五入输出：2.01
 * @returns {Number} 返回保留后的数字
 */
export function toFixedRound(num, decimals = 2) {
  if (isNaN(num)) {
    return "--";
  }
  let s = num + "";
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
  return num + "";
}

/**
 * 向下舍出，强制保留小数位数
 * 注：默认保留两位小数
 * @param {Number|String} num
 * @param {Number} decimals 保留小数的位数，默认2位
 * @example
 * toDecimalFixed(2) // 输出 2.00
 * toDecimalFixed(2.0) // 输出 2.00
 * toDecimalFixed(2.009) // 强制截取后输出 2.00
 * @returns {Number} 返回保留后的数字
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
  return realVal;
}

/**
 * 四舍五入，尽可能保留小数
 * @param {Number,String} num
 * @param {Number} decimals 保留小数的位数，默认2位
 * @example
 * toRound(2) // 不够两位，输出：2
 * toRound(2.0) // 不够两位，输出：2
 * toRound(2.001) // 向上五入，输出：2
 * toRound(2.009) // 向上五入，输出：2.01
 * @returns {Number} 返回保留后的数字
 */
export function toRound(num, decimals = 2) {
  if (this.isNaN(num)) {
    return "--";
  }
  let n = Math.pow(10, decimals);
  return Math.round(num * n) / n;
}

/**
 * 向下舍入，尽可能保留小数
 * @param {Number,String} num
 * @param {Number} decimals 保留小数的位数，默认2位
 * @example
 * toFloor(2) // 不够两位，输出：2
 * toFloor(2.0) // 不够两位，输出：2
 * toFloor(2.001) // 向下舍入，输出：2
 * toFloor(2.006) // 向下舍入，输出：2
 * @returns {Number} 返回保留后的数字
 */
export function toFloor(num, decimals = 2) {
  if (this.isNaN(num)) {
    return "--";
  }
  let n = Math.pow(10, decimals);
  return Math.floor(num * n) / n;
}
