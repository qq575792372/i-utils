/**
 * @module 身份证号码
 */
import { isNull } from "@/validate";
import { parseDate, getAge } from "@/date";
import { ID_CARD } from "@/constants";

/**
 * 根据身份证号码获取信息
 * @description 能获取到 籍贯，出生日期，年龄，性别
 * @param {string} idCard 身份证号码，支持一代15位和二代18位
 * @returns {Object} 返回身份证信息对象
 */
export function getInfoByIDCard(idCard: string):
  | {
      province: string | undefined;
      birthday: string | undefined;
      age: number | undefined;
      sex: string | undefined;
    }
  | undefined {
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
 * @param {string} idCard 身份证号码，支持一代15位和二代18位
 * @returns {string} 返回生日
 */
export function getBirthdayByIDCard(idCard: string) {
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
 * @param {string} idCard 身份证号码，支持一代15位和二代18位
 * @returns {number} 返回年龄
 */
export function getAgeByIDCard(idCard: string): number | undefined {
  if (isNull(idCard)) return;
  const birthday = getBirthdayByIDCard(idCard);
  if (birthday) {
    return getAge(parseDate(String(birthday))!);
  }
}

/**
 * 根据身份证号码获得性别
 * @param {string} idCard 身份证号码，支持一代15位和二代18位
 * @returns {string} 返回性别
 */
export function getSexByIDCard(idCard: string): string | undefined {
  if (isNull(idCard)) return undefined;
  // 15位身份证
  if (idCard.length === 15) {
    return Number(idCard.substring(14)) % 2 === 0 ? (ID_CARD.SEX.WOMAN as string) : (ID_CARD.SEX.MAN as string);
  }
  // 18位身份证
  if (idCard.length === 18) {
    return Number(idCard.substring(16, 17)) % 2 === 0 ? (ID_CARD.SEX.WOMAN as string) : (ID_CARD.SEX.MAN as string);
  }
}

/**
 * 根据身份证号码获得省份
 * @param {string} idCard 身份证号码，支持一代15位和二代18位
 * @returns {string} 返回省份
 */
export function getProvinceByIDCard(idCard: string): string | undefined {
  if (isNull(idCard)) return;
  const prefix = idCard.substring(0, 2);
  if (prefix) {
    return ID_CARD.PROVINCE[prefix] as string;
  }
}
