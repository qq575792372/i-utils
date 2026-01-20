export const generateKeyPairHex: typeof _.generateKeyPairHex;
export const compressPublicKeyHex: typeof _.compressPublicKeyHex;
export const comparePublicKeyHex: typeof _.comparePublicKeyHex;
export const verifyPublicKey: typeof _.verifyPublicKey;
import * as _ from "../lib/utils.js";
/**
 * 加密
 */
export function doEncrypt(msg: any, publicKey: any, cipherMode?: number): string;
/**
 * 解密
 */
export function doDecrypt(encryptData: any, privateKey: any, cipherMode?: number, { output }?: {
    output?: string | undefined;
}): string | number[];
/**
 * 签名
 */
export function doSignature(msg: any, privateKey: any, { pointPool, der, hash, publicKey, userId }?: {}): any;
/**
 * 验签
 */
export function doVerifySignature(msg: any, signHex: any, publicKey: any, { der, hash, userId }?: {}): boolean;
/**
 * 计算公钥
 */
export function getPublicKeyFromPrivateKey(privateKey: any): string;
/**
 * 获取椭圆曲线点
 */
export function getPoint(): {
    privateKey: any;
    publicKey: string;
};
