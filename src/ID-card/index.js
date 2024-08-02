import { isNull } from "../validate";
import { parseDate, getAge } from "../date/index.js";

/**
 * 根据身份证号码获取信息
 * @description 能获取到 籍贯，出生日期，年龄，性别 信息
 * @param {String} idCard 身份证号码，支持一代15位和二代18位
 * @returns {Object} 返回身份证信息对象
 */
export function getInfoByIDCard(idCard) {
  if (isNull(idCard)) return;
  return {
    // 省份
    province: getProvinceByIDCard(idCard),
    // 生日
    birthday: getBirthdayByIDCard(idCard),
    // 年龄
    age: getAgeByIDCard(idCard),
    // 性别
    sex: getSexByIDCard(idCard),
  };
}

/**
 * 根据身份证号码获得生日
 * @param {String} idCard 身份证号码，支持一代15位和二代18位
 * @returns {String} 返回生日
 */
export function getBirthdayByIDCard(idCard) {
  if (isNull(idCard)) return;
  // 15位身份证
  if (idCard.length === 15) {
    return "19" + idCard.substring(6, 8) + "-" + idCard.substring(8, 10) + "-" + idCard.substring(10, 12);
  }
  // 18位身份证
  if (idCard.length === 18) {
    return idCard.substring(6, 10) + "-" + idCard.substring(10, 12) + "-" + idCard.substring(12, 14);
  }
}

/**
 * 根据身份证号码获得年龄
 * @param {String} idCard 身份证号码，支持一代15位和二代18位
 * @returns {Number} 返回年龄
 */
export function getAgeByIDCard(idCard) {
  if (isNull(idCard)) return;
  let birthday = getBirthdayByIDCard(idCard);
  return getAge(parseDate(birthday));
}

/**
 * 根据身份证号码获得性别
 * @param {String} idCard 身份证号码，支持一代15位和二代18位
 * @returns {String} 返回性别
 */
export function getSexByIDCard(idCard) {
  if (isNull(idCard)) return;
  // 15位身份证
  if (idCard.length === 15) {
    return Number(idCard.substring(14)) % 2 === 0 ? "女" : "男";
  }
  // 18位身份证
  if (idCard.length === 18) {
    return Number(idCard.substring(16, 17)) % 2 === 0 ? "女" : "男";
  }
}

/**
 * 根据身份证号码获得省份
 * @param {String} idCard 身份证号码，支持一代15位和二代18位
 * @returns {String} 返回省份
 */
export function getProvinceByIDCard(idCard) {
  if (isNull(idCard)) return;
  const province = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外",
  };
  return province[idCard.substring(0, 2)];
}
