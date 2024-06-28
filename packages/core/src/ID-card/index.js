import { isEmpty, isNull } from "../validate";
import { CHINESE_ZODIAC, ZODIAC } from "../../../date/src/constants";

/**
 * 根据身份证号码获取信息
 * @description 能获取到 籍贯，出生日期，年龄，性别 信息
 * @param {String} idCard 身份证号码，支持一代15位和二代18位
 * @returns {Object} 返回身份证信息对象
 */
export function getIdCardInfo(idCard) {
  if (isEmpty(idCard)) return;
  const info = {};
  // 省份
  const area = {
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
  info.province = area[idCard.substring(0, 2)];

  // 15位身份证
  if (idCard.length === 15) {
    // 生日
    info.birthday = "19" + idCard.substring(6, 8) + "-" + idCard.substring(8, 10) + "-" + idCard.substring(10, 12);
    // 年龄
    info.age = getAge(info.birthday);
    // 性别
    info.sex = Number(idCard.substring(14)) % 2 === 0 ? "女" : "男";
  }
  // 18位身份证
  if (idCard.length === 18) {
    // 生日
    info.birthday = idCard.substring(6, 10) + "-" + idCard.substring(10, 12) + "-" + idCard.substring(12, 14);
    // 年龄
    info.age = getAge(info.birthday);
    // 性别
    info.sex = Number(idCard.substring(16, 17)) % 2 === 0 ? "女" : "男";
  }
  return info;
}

/**
 * 通过日期计算周岁年龄
 * @param {String} dateStr 日期字符串
 * @returns {Number} 返回周岁年龄
 */
export function getAge(dateStr) {
  if (isEmpty(dateStr)) return 0;
  // age
  let age = 0;
  // 传参日期
  let dateArray = dateStr.split("-");
  let birthYear = Number(dateArray[0]),
    birthMonth = Number(dateArray[1]),
    birthDay = Number(dateArray[2]);
  // 当前的日期
  let nowDate = new Date();
  let nowYear = nowDate.getFullYear(),
    nowMonth = nowDate.getMonth() + 1,
    nowDay = nowDate.getDate();

  // 出生年份需要小于当年，否则是0岁
  let diffAge = nowYear - birthYear;
  if (diffAge > 0) {
    if (nowMonth - birthMonth <= 0) {
      // 日期差小于0，证明还没满周岁，需要减1
      if (nowDay - birthDay < 0) {
        age = diffAge - 1;
      } else {
        age = diffAge;
      }
    } else {
      age = diffAge;
    }
  }
  return age;
}

/**
 * 通过日期获得星座
 * @param {Date} date 日期参数
 * @param {String} lang 语言zh和en，默认zh
 * @returns {String} 返回星座
 */
export function getZodiac(date, lang = "zh") {
  if (isNull(date)) return;

  // 计算
  let days = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22];
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return day < days[month - 1] ? ZODIAC[lang][month - 1] : ZODIAC[lang][month];
}

/**
 * 通过日期获得生肖
 * @param {Date} date 日期参数
 * @param {String} lang 语言zh和en，默认zh
 * @returns {String} 返回生肖
 */
export function getChineseZodiac(date, lang = "zh") {
  if (isNull(date)) return;

  // 计算
  let year = date.getFullYear();
  if (year < 1900) {
    return "未知";
  }
  return CHINESE_ZODIAC[lang][(year - 1900) % CHINESE_ZODIAC[lang].length];
}
