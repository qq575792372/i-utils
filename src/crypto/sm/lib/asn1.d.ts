/**
 * ASN.1 der 编码，针对 sm2 签名
 */
export function encodeDer(r: any, s: any): string;
/**
 * 解析 ASN.1 der，针对 sm2 验签
 */
export function decodeDer(input: any): {
    r: jsbn.BigInteger;
    s: jsbn.BigInteger;
};
import * as jsbn from "./jsbn.js";
