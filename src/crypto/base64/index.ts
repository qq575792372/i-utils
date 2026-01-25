import * as Base64 from "./base64.js";
/**
 * Base64编码
 * @param str 待编码的UTF8字符串
 * @param urlSafe 是否生成URL安全的Base64（默认false）
 * @returns Base64字符串
 */
export function base64Encode(str: string, urlSafe: boolean = false): string {
  return Base64.encode(str, urlSafe);
}

/**
 * Base64解码
 * @param str 待解码的Base64字符串
 * @returns 解码后的UTF8字符串
 */
export function base64Decode(str: string): string {
  return Base64.decode(str);
}

/**
 * URL安全Base64编码
 * @param str 待编码的UTF8字符串
 * @returns URL安全的Base64字符串
 */
export function base64EncodeURI(str: string): string {
  return Base64.encodeURI(str);
}

/**
 * URL安全Base64解码
 * @param str 待解码的URL安全Base64字符串
 * @returns 解码后的UTF8字符串
 */
export function base64DecodeURI(str: string): string {
  return Base64.decodeURI(str);
}

/**
 * Uint8Array转Base64字符串
 * @param uint8Array 待编码的字节数组
 * @param urlSafe 是否生成URL安全的Base64（默认false）
 * @returns Base64字符串
 */
export function base64FromUint8Array(uint8Array: Uint8Array, urlSafe: boolean = false): string {
  return Base64.fromUint8Array(uint8Array, urlSafe);
}

/**
 * Base64字符串转Uint8Array
 * @param base64Str 待解码的Base64字符串
 * @param urlSafe 是否为URL安全的Base64（默认false）
 * @returns 解码后的字节数组
 */
export function base64ToUint8Array(base64Str: string, urlSafe: boolean = false): Uint8Array {
  return Base64.toUint8Array(base64Str, urlSafe);
}

/**
 * 十六进制字符串转Base64字符串
 * @param hexStr 待编码的十六进制字符串
 * @param urlSafe 是否生成URL安全的Base64（默认false）
 * @returns Base64字符串
 */
export function base64FromHex(hexStr: string, urlSafe: boolean = false): string {
  return Base64.fromHex(hexStr, urlSafe);
}

/**
 * Base64字符串转十六进制字符串
 * @param base64Str 待解码的Base64字符串
 * @param urlSafe 是否为URL安全的Base64（默认false）
 * @returns 解码后的十六进制字符串
 */
export function base64ToHex(base64Str: string, urlSafe: boolean = false): string {
  return Base64.toHex(base64Str, urlSafe);
}
