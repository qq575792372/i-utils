export default AesCtr;
/**
 * AesCtr: Counter-mode (CTR) wrapper for AES.
 *
 * This encrypts a Unicode string to produces a base64 ciphertext using 128/192/256-bit AES,
 * and the converse to decrypt an encrypted ciphertext.
 *
 * See csrc.nist.gov/publications/detail/sp/800-38a/final
 */
declare class AesCtr extends Aes {
    /**
     * Encrypt a text using AES encryption in Counter mode of operation.
     *
     * Unicode multi-byte character safe.
     *
     * @param   {string} plaintext - Source text to be encrypted.
     * @param   {string} password - The password to use to generate a key for encryption.
     * @param   {number} nBits - Number of bits to be used in the key; 128 / 192 / 256.
     * @returns {string} Encrypted text, base-64 encoded.
     *
     * @example
     *   const encr = AesCtr.encrypt('big secret', 'pāşšŵōřđ', 256); // 'lwGl66VVwVObKIr6of8HVqJr'
     */
    static encrypt(plaintext: string, password: string, nBits: number): string;
    /**
     * NIST SP 800-38A sets out recommendations for block cipher modes of operation in terms of byte
     * operations. This implements the §6.5 Counter Mode (CTR).
     *
     *     Oⱼ = CIPHₖ(Tⱼ)      for j = 1, 2 … n
     *     Cⱼ = Pⱼ ⊕ Oⱼ        for j = 1, 2 … n-1
     *     C*ₙ = P* ⊕ MSBᵤ(Oₙ) final (partial?) block
     *   where CIPHₖ is the forward cipher function, O output blocks, P plaintext blocks, C
     *   ciphertext blocks
     *
     * @param   {number[]} plaintext - Plaintext to be encrypted, as byte array.
     * @param   {number[]} key - Key to be used to encrypt plaintext.
     * @param   {number[]} counterBlock - Initial 16-byte CTR counter block (with nonce & 0 counter).
     * @returns {number[]} Ciphertext as byte array.
     *
     * @private
     */
    private static nistEncryption;
    /**
     * Decrypt a text encrypted by AES in counter mode of operation.
     *
     * @param   {string} ciphertext - Cipher text to be decrypted.
     * @param   {string} password - Password to use to generate a key for decryption.
     * @param   {number} nBits - Number of bits to be used in the key; 128 / 192 / 256.
     * @returns {string} Decrypted text
     *
     * @example
     *   const decr = AesCtr.decrypt('lwGl66VVwVObKIr6of8HVqJr', 'pāşšŵōřđ', 256); // 'big secret'
     */
    static decrypt(ciphertext: string, password: string, nBits: number): string;
    /**
     * NIST SP 800-38A sets out recommendations for block cipher modes of operation in terms of byte
     * operations. This implements the §6.5 Counter Mode (CTR).
     *
     *     Oⱼ = CIPHₖ(Tⱼ)      for j = 1, 2 … n
     *     Pⱼ = Cⱼ ⊕ Oⱼ        for j = 1, 2 … n-1
     *     P*ₙ = C* ⊕ MSBᵤ(Oₙ) final (partial?) block
     *   where CIPHₖ is the forward cipher function, O output blocks, C ciphertext blocks, P
     *   plaintext blocks
     *
     * @param   {number[]} ciphertext - Ciphertext to be decrypted, as byte array.
     * @param   {number[]} key - Key to be used to decrypt ciphertext.
     * @param   {number[]} counterBlock - Initial 16-byte CTR counter block (with nonce & 0 counter).
     * @returns {number[]} Plaintext as byte array.
     *
     * @private
     */
    private static nistDecryption;
    /**
     * Encodes multi-byte string to utf8.
     *
     * Note utf8Encode is an identity function with 7-bit ascii strings, but not with 8-bit strings;
     * utf8Encode('x') = 'x', but utf8Encode('ça') = 'Ã§a', and utf8Encode('Ã§a') = 'ÃÂ§a'.
     */
    static utf8Encode(str: any): string;
    /**
     * Decodes utf8 string to multi-byte.
     */
    static utf8Decode(str: any): string;
    static base64Encode(str: any): string;
    static base64Decode(str: any): string;
}
/**
 * AES (Rijndael cipher) encryption routines reference implementation,
 *
 * This is an annotated direct implementation of FIPS 197, without any optimisations. It is
 * intended to aid understanding of the algorithm rather than for production use.
 *
 * While it could be used where performance is not critical, I would recommend using the ‘Web
 * Cryptography API’ (developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt) for the browser,
 * or the ‘crypto’ library (nodejs.org/api/crypto.html#crypto_class_cipher) in Node.js.
 *
 * See csrc.nist.gov/publications/fips/fips197/fips-197.pdf
 */
declare class Aes {
    /**
     * AES Cipher function: encrypt 'input' state with Rijndael algorithm [§5.1];
     *   applies Nr rounds (10/12/14) using key schedule w for 'add round key' stage.
     *
     * @param   {number[]}   input - 16-byte (128-bit) input state array.
     * @param   {number[][]} w - Key schedule as 2D byte-array (Nr+1 × Nb bytes).
     * @returns {number[]}   Encrypted output state array.
     */
    static cipher(input: number[], w: number[][]): number[];
    /**
     * Perform key expansion to generate a key schedule from a cipher key [§5.2].
     *
     * @param   {number[]}   key - Cipher key as 16/24/32-byte array.
     * @returns {number[][]} Expanded key schedule as 2D byte-array (Nr+1 × Nb bytes).
     */
    static keyExpansion(key: number[]): number[][];
    /**
     * Apply SBox to state S [§5.1.1].
     *
     * @private
     */
    private static subBytes;
    /**
     * Shift row r of state S left by r bytes [§5.1.2].
     *
     * @private
     */
    private static shiftRows;
    /**
     * Combine bytes of each col of state S [§5.1.3].
     *
     * @private
     */
    private static mixColumns;
    /**
     * Xor Round Key into state S [§5.1.4].
     *
     * @private
     */
    private static addRoundKey;
    /**
     * Apply SBox to 4-byte word w.
     *
     * @private
     */
    private static subWord;
    /**
     * Rotate 4-byte word w left by one byte.
     *
     * @private
     */
    private static rotWord;
}
declare namespace Aes {
    let sBox: number[];
    let rCon: number[][];
}
