/**
 * 获取公共椭圆曲线
 */
export function getGlobalCurve(): ec.ECCurveFp;
/**
 * 生成ecparam
 */
export function generateEcparam(): {
    curve: ec.ECCurveFp;
    G: ec.ECPointFp | null;
    n: jsbn.BigInteger;
};
/**
 * 生成密钥对：publicKey = privateKey * G
 */
export function generateKeyPairHex(a: any, b: any, c: any): {
    privateKey: any;
    publicKey: string;
};
/**
 * 生成压缩公钥
 */
export function compressPublicKeyHex(s: any): string;
/**
 * utf8串转16进制串
 */
export function utf8ToHex(input: any): string;
/**
 * 补全16进制字符串
 */
export function leftPad(input: any, num: any): any;
/**
 * 转成16进制串
 */
export function arrayToHex(arr: any): any;
/**
 * 转成utf8串
 */
export function arrayToUtf8(arr: any): string;
/**
 * 转成字节数组
 */
export function hexToArray(hexStr: any): number[];
/**
 * 验证公钥是否为椭圆曲线上的点
 */
export function verifyPublicKey(publicKey: any): any;
/**
 * 验证公钥是否等价，等价返回true
 */
export function comparePublicKeyHex(publicKey1: any, publicKey2: any): any;
import * as ec from "./ec.js";
import * as jsbn from "./jsbn.js";
