/**
 * @module 数学
 */
import { isNaN } from "@/validate";
import { MATH } from "@/constants/index.ts";

/* 数字计算 */
/**
 * 两个数字相加
 * @param {string|number} arg1 第一个数字
 * @param {string|number} arg2 第二个数字
 * @returns {number} 返回计算后的数字
 */
export function add(arg1: string | number, arg2: string | number): number {
  let r1, r2;
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
  const m = Math.pow(10, Math.max(r1, r2));
  return (Number(arg1) * m + Number(arg2) * m) / m;
}

/**
 * 两个数字相减
 * @param {string|number} arg1 第一个数字
 * @param {string|number} arg2 第二个数字
 * @returns {number} 返回计算后的数字
 */
export function subtract(arg1: string | number, arg2: string | number): number {
  let r1, r2;
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
  const m = Math.pow(10, Math.max(r1, r2));
  const n = r1 >= r2 ? r1 : r2;
  return Number(((Number(arg1) * m - Number(arg2) * m) / m).toFixed(n));
}

/**
 * 两个数字相乘
 * @param {string|number} arg1 第一个数字
 * @param {string|number} arg2 第二个数字
 * @returns {number} 返回计算后的数字
 */
export function multiply(arg1: string | number, arg2: string | number): number {
  let m = 0;
  const s1 = arg1.toString();
  const s2 = arg2.toString();
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
 * @param {string|number} arg1 第一个数字
 * @param {string|number} arg2 第二个数字
 * @returns {number} 返回计算后的数字
 */
export function divide(arg1: string | number, arg2: string | number): number {
  let t1 = 0,
    t2 = 0;
  try {
    t1 = arg1.toString().split(".")[1].length;
  } catch (e) {}
  try {
    t2 = arg2.toString().split(".")[1].length;
  } catch (e) {}
  const r1 = Number(arg1.toString().replace(".", ""));
  const r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}

/**
 * 两个数字取模
 * @param {string|number} arg1 第一个数字
 * @param {string|number} arg2 第二个数字
 * @returns {number} 返回计算后的数字
 */
export function modulo(arg1: string | number, arg2: string | number): number {
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

/**
 * 最大公约数
 * @param {string|number} arg1 第一个数字
 * @param {string|number} arg2 第二个数字
 * @returns {number} 返回计算后的数字
 */
export function gcd(arg1: string | number, arg2: string | number): number {
  let a = Math.abs(Number(arg1));
  let b = Math.abs(Number(arg2));
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/**
 * 最小公倍数
 * @param {string|number} arg1 第一个数字
 * @param {string|number} arg2 第二个数字
 * @returns {number} 返回计算后的数字
 */
export function scm(arg1: string | number, arg2: string | number): number {
  const a = Number(arg1);
  const b = Number(arg2);
  const absA = Math.abs(a);
  const absB = Math.abs(b);
  if (absA === 0 || absB === 0) {
    return 0;
  }
  return (absA * absB) / gcd(absA, absB);
}

/* 数字精度 */
/**
 * 强制保留小数位数
 * @description 默认保留两位小数，解决原生的toFixed()会五舍六入的问题
 * @param {string|number} num 数字
 * @param {number} decimals 保留小数的位数，默认2位
 * @param {number} mode 保留小数模式
 * @returns {string} 返回保留后的数字字符串
 */
export function toFixed(num: string | number, decimals: number = 2, mode: number = MATH.ROUND): string {
  // 四舍五入
  if (mode === MATH.ROUND) {
    return _toFixedRound(num, decimals);
  }
  // 向下舍出
  else if (mode === MATH.ROUND_FLOOR) {
    return _toFixedFloor(num, decimals);
  } else {
    throw new Error("toFixed is error");
  }
}

/**
 * 尽可能保留小数位数
 * @param {string|number} num 数字
 * @param {number} decimals 保留小数的位数，默认2位
 * @param {number} mode 保留小数模式
 * @returns {number} 返回保留后的数字
 */
export function toDecimal(num: string | number, decimals: number = 2, mode: number = MATH.ROUND): number {
  // 四舍五入
  if (mode === MATH.ROUND) {
    return Number(_toDecimalRound(num, decimals));
  }
  // 向下舍出
  else if (mode === MATH.ROUND_FLOOR) {
    return Number(_toDecimalFloor(num, decimals));
  }
  // 错误保留格式
  else {
    throw new Error("toDecimal is error");
  }
}

/* 内部函数 */
/**
 * 四舍五入，强制保留小数位数
 * @description 默认保留两位小数，此方法解决原生的toFixed()会五舍六入的问题
 * @param {string|number} num 数字
 * @param {number} decimals 保留小数的位数，默认2位
 * @returns {string} 返回字符串的数字
 */
function _toFixedRound(num: string | number, decimals: number = 2): string {
  if (isNaN(Number(num))) {
    // num可能是字符串，先转数字再判断NaN
    return "--";
  }
  let s = String(num);
  if (!decimals) decimals = 0;
  if (s.indexOf(".") === -1) s += ".";
  s += new Array(decimals + 1).join("0");
  // 正则模板字符串拼接，避免手动拼接字符串的转义问题
  const reg = new RegExp(`^(-|\\+)?(\\d+(\\.\\d{0,${decimals + 1}})?)\\d*$`);
  if (reg.test(s)) {
    let s1 = "0" + RegExp.$2,
      b = true;
    // 1. 把外层的数字变量 a 改名，避免和内层数组冲突
    const decimalLength = RegExp.$3.length;
    const pm = RegExp.$1;

    if (decimalLength === decimals + 2) {
      // 2. 内层数组用新变量名 digitArr，明确类型为 string[]
      const digitArr = s1.match(/\d/g) as string[];
      if (parseInt(digitArr[digitArr.length - 1]) > 4) {
        for (let i = digitArr.length - 2; i >= 0; i--) {
          // 3. 确保赋值为字符串类型
          digitArr[i] = (parseInt(digitArr[i]) + 1).toString();
          if (digitArr[i] === "10") {
            digitArr[i] = "0";
            b = i !== 1;
          } else break;
        }
      }
      s1 = digitArr.join("").replace(new RegExp(`(\\d+)(\\d{${decimals}})\\d$`), "$1.$2");
    }
    if (b) s1 = s1.substr(1);
    return (pm + s1).replace(/\.$/, "");
  }
  return String(num);
}

/**
 * 向下舍出，强制保留小数位数
 * @description 默认保留两位小数，此方法相当于强制截取小数位数
 * @param {string|number} num 数字
 * @param {number} decimals 保留小数的位数，默认2位
 * @returns {string} 返回字符串的数字
 */
function _toFixedFloor(num: string | number, decimals: number = 2): string {
  // num可能是字符串，先转数字再判断NaN
  const numVal = Number(num);
  if (isNaN(numVal)) {
    throw new Error(`${num} is NaN`);
  }
  // 校验小数位数范围
  if (decimals < 0 || decimals > 20) {
    throw new Error("Decimal places must be between 0 and 20");
  }

  // 默认为保留的小数点后两位
  const dec = Math.max(0, Math.floor(decimals)); // 确保小数位数为非负整数
  const tempNumStr = String(numVal); // 提前转字符串，避免重复转换
  const pointIndex = tempNumStr.indexOf("."); // ：去掉+1，直接获取小数点位置
  // 获取小数点后的个数(需要保证有小数位)
  const pointCount = pointIndex > -1 ? tempNumStr.length - pointIndex - 1 : 0;

  // 源数据为整数或者小数点后面小于decimals位的作补零处理
  if (pointIndex === -1 || pointCount <= dec) {
    // pointIndex === -1 表示无小数点
    let tempNumA: string = tempNumStr; // 统一为字符串类型，避免类型混淆
    if (pointIndex === -1) {
      tempNumA = `${tempNumA}.`;
      // 补零到指定小数位
      for (let index = 0; index < dec; index++) {
        tempNumA = `${tempNumA}0`;
      }
    } else {
      // 补零到指定小数位
      for (let index = 0; index < dec - pointCount; index++) {
        tempNumA = `${tempNumA}0`;
      }
    }
    return tempNumA;
  }

  // 截取当前数据到小数点后decimals位
  const [integerPart, decimalPart] = tempNumStr.split(".");
  return `${integerPart}.${decimalPart.substring(0, dec)}`;
}

/**
 * 四舍五入，尽可能保留小数
 * @param {string|number} num 数字
 * @param {number} decimals 保留小数的位数，默认2位
 * @returns {string} 返回保留后的数字
 */
function _toDecimalRound(num: string | number, decimals: number = 2): number {
  if (isNaN(Number(num))) {
    throw new Error(`${num} is not a number`);
  }
  const n = Math.pow(10, decimals);
  return Math.round(Number(num) * n) / n;
}

/**
 * 向下舍入，尽可能保留小数
 * @param {string|number} num 数字
 * @param {number} decimals 保留小数的位数，默认2位
 * @returns {number} 返回保留后的数字
 */
function _toDecimalFloor(num: string | number, decimals: number = 2): number {
  if (isNaN(Number(num))) {
    throw new Error(`${num} is not a number`);
  }
  const n = Math.pow(10, decimals);
  return Math.floor(Number(num) * n) / n;
}
