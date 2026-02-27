/**
 * @module 校验
 */

/**
 * 判断是整数
 * @param {*} value 参数
 * @returns {boolean} result 返回结果
 */
export function isInteger(value: any): boolean {
  return Number.isInteger(value);
}

/**
 * 判断是小数
 * @param {*} value 参数
 * @returns {boolean} result 返回结果
 */
export function isDecimal(value: any): boolean {
  return /^\d+\.\d+$/.test(value);
}

/**
 * 判断类型是数字 Number
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isNumber(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "Number";
}

/**
 * 判断类型是字符串 String
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isString(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "String";
}

/**
 * 判断类型是数组 Array
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isArray(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "Array";
}

/**
 * 判断类型是对象 Object
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isObject(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "Object";
}

/**
 * 判断类型是布尔 boolean
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isBoolean(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "boolean";
}

/**
 * 判断类型是日期 Date
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isDate(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "Date";
}

/**
 * 判断类型是函数 Function
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isFunction(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "Function";
}

/**
 * 判断类型是函数字符串 FunctionString
 * @description 支持普通函数，异步函数，箭头函数
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isFunctionString(value: any): boolean {
  if (value) {
    try {
      const fn = new Function(`return ${value}`)();
      return typeof fn === "function";
    } catch (e) {
      // 如果发生错误，比如语法错误，那么这不是一个有效的函数
      return false;
    }
  } else {
    return false;
  }
}

/**
 * 判断类型是异步函数 AsyncFunction
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isAsyncFunction(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "AsyncFunction";
}

/**
 * 判断类型是 Symbol
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isSymbol(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "Symbol";
}

/**
 * 判断类型是正则 RegExp
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isRegExp(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "RegExp";
}

/**
 * 判断类型是错误 Error
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isError(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "Error";
}

/**
 * 判断类型是 Promise
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isPromise(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "Promise";
}

/**
 *判断类型是 Map
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isMap(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "Map";
}

/**
 * 判断类型是 WeakMap
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isWeakMap(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "WeakMap";
}

/**
 * 判断类型是 Set
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isSet(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "Set";
}

/**
 * 判断类型是 WeakSet
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isWeakSet(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "WeakSet";
}

/**
 * 判断类型是 BigInt
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isBigInt(value: any): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === "BigInt";
}

/**
 * 判断类型是 Json
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isJson(value: any): boolean {
  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
}

/* 数据值校验 */
/**
 * 判断值为真
 * @param {*} value 校验的参数
 * @returns {boolean} 返回结果
 */
export function isTrue(value: any): boolean {
  return !isFalse(value);
}

/**
 * 判断值为假
 * @param {*} value 校验的参数
 * @returns {boolean} 返回结果
 */
export function isFalse(value: any): boolean {
  return (
    value === undefined ||
    value === null ||
    value === "undefined" ||
    value === "null" ||
    value === 0 ||
    value === false ||
    isNaN(value)
  );
}

/**
 * 判断非数字
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isNaN(value: any): boolean {
  return (
    value == null || typeof value === "boolean" || Array.isArray(value) || value === "" || Number.isNaN(Number(value))
  );
}

/**
 * 判断是数字
 * @description 等同于isNumber()
 * @param {*} value 参数
 * @returns {boolean} 返回结果
 */
export function isNotNaN(value: any): boolean {
  return !isNaN(value);
}

/**
 * 判断对象为空
 * @description 判断值是否为空，如果对象初始化了值则不为空
 * @param {*} value 校验的参数
 * @returns {boolean} 返回结果
 */
export function isNull(value: any): boolean {
  return value === undefined || value === null || value === "";
}

/**
 * 判断对象不为空
 * @description 判断值是否为空，如果对象初始化了值则不为空
 * @param {*} value 校验的参数
 * @returns {boolean} 返回结果
 */
export function isNotNull(value: any): boolean {
  return !isNull(value);
}

/**
 * 判断值为空
 * @description 判断是否是有意义不为空的值，如果值是{},[]空的数据则为空
 * @param {*} value 校验的参数
 * @returns {boolean} 返回结果
 */
export function isEmpty(value: any): boolean {
  if (isNull(value)) return true;
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === "object") {
    if (value instanceof Map || value instanceof Set) {
      return value.size === 0;
    }
    if (value instanceof Date || value instanceof RegExp || value instanceof Error) {
      return false;
    }
    return Object.keys(value).length === 0;
  }
  return false;
}

/**
 * 判断值不为空
 * @description 判断是否是有意义不为空的值，如果值是{},[]空的数据则为空
 * @param {*} value 校验的参数
 * @returns {boolean} 返回结果
 */
export function isNotEmpty(value: any): boolean {
  return !isEmpty(value);
}

/**
 * 判断值是空白的
 * @description 同时会校验空值，空对象，以及空白符号
 * @param {*} value 校验的参数
 * @returns {boolean} 返回结果
 */
export function isBlank(value: any): boolean {
  return isEmpty(value) || /^\s*$/.test(value);
}

/**
 * 判断值不是空白的
 * @description 同时会校验空值，空对象，以及空白符号
 * @param {*} value 校验的参数
 * @returns {boolean} 返回结果
 */
export function isNotBlank(value: any): boolean {
  return !isBlank(value);
}

/**
 * 判断值是undefined
 * @param {*} value 校验的参数
 * @returns {boolean} 返回结果
 */
export function isUndefined(value: any): boolean {
  return value === undefined;
}

/**
 * 判断值不是undefined
 * @param {*} value 校验的参数
 * @returns {boolean} 返回结果
 */
export function isNotUndefined(value: any): boolean {
  return !isUndefined(value);
}

/* 数据比较 */
/**
 * 判断两个值是否相等
 * @param {*} value1 参数1
 * @param {*} value2 参数2
 * @returns {boolean} 返回结果
 */
export function equals(value1: any, value2: any): boolean {
  return Object.is(value1, value2);
}

/**
 * 判断两个值是否相等（忽略大小写）
 * @param {*} value1 参数1
 * @param {*} value2 参数2
 * @returns {boolean} 返回结果
 */
export function equalsIgnoreCase(value1: any, value2: any): boolean {
  return Object.is(value1.toLowerCase(), value2.toLowerCase());
}

/**
 * 深度对比数据
 * @description 可以对比任意数据，对象、数组、日期等也可深度对比，对象不区分先后顺序
 * @param {*} x 数据1
 * @param {*} args 数据2
 * @returns {boolean} 返回对比结果
 */
export function deepCompare(x: any, ...args: any[]): boolean {
  let leftChain: any[] = [];
  let rightChain: any[] = [];

  // 核心对比函数（添加严格类型标注）
  const compare2Objects = (xObj: any, yObj: any): boolean => {
    // 1. 处理 NaN 特殊场景（NaN === NaN 返回 false，需单独判断）
    if (Number.isNaN(xObj) && Number.isNaN(yObj)) {
      return true;
    }

    // 2. 原始类型/引用同一对象 直接对比
    if (xObj === yObj) {
      return true;
    }

    // 3. 特殊内置对象对比（函数/日期/正则/包装对象）
    const typeOfX = typeof xObj;
    const typeOfY = typeof yObj;

    // 函数对比：通过 toString 比较内容
    if (typeOfX === "function" && typeOfY === "function") {
      return xObj.toString() === yObj.toString();
    }

    // 日期对象对比：时间戳一致则相等
    if (xObj instanceof Date && yObj instanceof Date) {
      return xObj.getTime() === yObj.getTime();
    }

    // 正则对象对比：源文本+标志位一致则相等
    if (xObj instanceof RegExp && yObj instanceof RegExp) {
      return xObj.source === yObj.source && xObj.flags === yObj.flags;
    }

    // 字符串/数字包装对象对比
    if ((xObj instanceof String && yObj instanceof String) || (xObj instanceof Number && yObj instanceof Number)) {
      return xObj.toString() === yObj.toString();
    }

    // 4. 非对象类型（排除上述特殊类型后）直接返回 false
    if (!(xObj instanceof Object && yObj instanceof Object)) {
      return false;
    }

    // 5. 原型链/构造函数校验
    if (xObj.isPrototypeOf(yObj) || yObj.isPrototypeOf(xObj)) {
      return false;
    }
    if ((xObj as object).constructor !== (yObj as object).constructor) {
      return false;
    }
    if ((xObj as { prototype?: unknown }).prototype !== (yObj as { prototype?: unknown }).prototype) {
      return false;
    }

    // 6. 循环引用检测（避免无限递归）
    if (leftChain.includes(xObj) || rightChain.includes(yObj)) {
      return false;
    }

    // 7. 遍历对象属性，对比键存在性和类型
    const xObjKeys = Object.keys(xObj as object);
    const yObjKeys = Object.keys(yObj as object);

    // 先对比属性数量（数量不同直接不相等）
    if (xObjKeys.length !== yObjKeys.length) {
      return false;
    }

    // 遍历所有属性，校验存在性、类型、值
    for (const p of yObjKeys) {
      if (Object.prototype.hasOwnProperty.call(xObj, p) !== Object.prototype.hasOwnProperty.call(yObj, p)) {
        return false;
      }
      const xProp = (xObj as Record<string, unknown>)[p];
      const yProp = (yObj as Record<string, unknown>)[p];
      if (typeof xProp !== typeof yProp) {
        return false;
      }
    }

    // 深度对比属性值
    for (const p of xObjKeys) {
      const xProp = (xObj as Record<string, unknown>)[p];
      const yProp = (yObj as Record<string, unknown>)[p];

      if (typeof xProp === "object" || typeof xProp === "function") {
        leftChain.push(xObj);
        rightChain.push(yObj);
        if (!compare2Objects(xProp, yProp)) {
          return false;
        }
        leftChain.pop();
        rightChain.pop();
      } else {
        if (xProp !== yProp) {
          return false;
        }
      }
    }

    return true;
  };

  // 边界处理：参数数量不足时的兜底
  if (arguments.length < 2) {
    console.warn("deepCompare 需要至少两个对比参数");
    return true;
  }

  // 遍历所有传入的参数（支持对比多个值）
  for (const y of args) {
    leftChain = [];
    rightChain = [];
    if (!compare2Objects(x, y)) {
      return false;
    }
  }

  return true;
}
