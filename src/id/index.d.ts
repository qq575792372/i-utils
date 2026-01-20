/**
 * 生成UUID
 * @param {Number} len 生成的长度，默认32位
 * @param {Number} radix 进制数，默认16进制
 * @example
 * getUUID() // 输出：0a559343dbbf0e7e6c1de90163e7aa0a
 * @returns {String} 返回字符串
 */
export declare function getUUID(len?: number, radix?: number): string;
/**
 * 生成GUID
 * @example
 * getGUID() // 输出：275ec770-0853-6767-4875-7b270220ce9c
 * @returns {String} 返回字符串
 */
export declare function getGUID(): string;
