/**
 * rgb颜色转hex
 * @param {String} rgb rgb颜色字符串
 * @returns {String} 返回生成的hex颜色
 */
export function rgbToHex(rgb: string): string;
/**
 * rgba颜色转hex
 * @param {String} rgba rgba颜色字符串
 * @returns {String} 返回生成的hex颜色
 */
export function rgbaToHex(rgba: string): string;
/**
 * rgba颜色转hsl
 * @param {String} rgba rgb颜色字符串
 * @returns {String} 返回生成的hsl颜色
 */
export function rgbaToHsl(rgba: string): string;
/**
 * hex颜色转rgb
 * @param {String} hex hex颜色字符串
 * @returns {String} 返回生成的rgb颜色
 */
export function hexToRgb(hex: string): string;
/**
 * hex颜色转rgba
 * @param {String} hex hex颜色字符串
 * @param {Number} opacity 透明度
 * @returns {String} 返回生成的rgba颜色
 */
export function hexToRgba(hex: string, opacity?: number): string;
/**
 * hex颜色转hsl
 * @param {String} hex hex颜色字符串
 * @returns {String} 返回生成的hsl颜色
 */
export function hexToHsl(hex: string): string;
/**
 * 随机生成hex颜色
 * @returns {String} 返回生成的十六进制颜色
 */
export function getDrawHex(): string;
/**
 * 随机生成rgb颜色
 * @returns {String} 返回生成的 rgb 颜色
 */
export function getDrawRgb(): string;
/**
 * 随机生成rgba颜色
 * @returns {String} 返回生成的 rgba 颜色
 */
export function getDrawRgba(): string;
