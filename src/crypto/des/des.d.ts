export default Des;
/**
 * 使用方法
 * 实例化对象 new Des()
 * 加密方法 encrypt(key,plaintext)
 * 解密方法 decrypt(key,ciphertext)
 * 示例---------------------------------------------------
 * var Des = new Des();
 * var key = 'custom key';
 * var value = '需要加密的内容'
 * var ciphertext = encrypt(key,value);//加密
 * var plaintext = encrypt(key,ciphertext);//解密
 */
declare function Des(key: any, value: any): void;
declare class Des {
    /**
     * 使用方法
     * 实例化对象 new Des()
     * 加密方法 encrypt(key,plaintext)
     * 解密方法 decrypt(key,ciphertext)
     * 示例---------------------------------------------------
     * var Des = new Des();
     * var key = 'custom key';
     * var value = '需要加密的内容'
     * var ciphertext = encrypt(key,value);//加密
     * var plaintext = encrypt(key,ciphertext);//解密
     */
    constructor(key: any, value: any);
    key: any;
    value: any;
    /**
     * @param {String} key 密钥
     * @param {String} value 内容
     * @param {String} type 类型 ->encrypt加密|decrypt解密
     */
    _DesCreate(key: string, value: string, type: string): string;
    _DesCreateKeys(key: any): any[];
    /**
     * 加密
     * @param {String} key 密钥
     * @param {String} plaintext 明文
     * @return {String} ciphertext 密文
     */
    encrypt(key: string, plaintext: string): string;
    /**
     * 解密
     * @param {String} key 密钥
     * @param {String} ciphertext 密文
     * @return {String} plaintext 明文
     */
    decrypt(key: string, ciphertext: string): string;
}
