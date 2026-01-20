/**
 * 根据身份证号码获取信息
 * @description 能获取到 籍贯，出生日期，年龄，性别
 * @param {String} idCard 身份证号码，支持一代15位和二代18位
 * @returns {Object} 返回身份证信息对象
 */
export function getInfoByIDCard(idCard: string): Object;
/**
 * 根据身份证号码获得生日
 * @param {String} idCard 身份证号码，支持一代15位和二代18位
 * @returns {String} 返回生日
 */
export function getBirthdayByIDCard(idCard: string): string;
/**
 * 根据身份证号码获得年龄
 * @param {String} idCard 身份证号码，支持一代15位和二代18位
 * @returns {Number} 返回年龄
 */
export function getAgeByIDCard(idCard: string): number;
/**
 * 根据身份证号码获得性别
 * @param {String} idCard 身份证号码，支持一代15位和二代18位
 * @returns {String} 返回性别
 */
export function getSexByIDCard(idCard: string): string;
/**
 * 根据身份证号码获得省份
 * @param {String} idCard 身份证号码，支持一代15位和二代18位
 * @returns {String} 返回省份
 */
export function getProvinceByIDCard(idCard: string): string;
