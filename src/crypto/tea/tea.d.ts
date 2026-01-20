export default Tea;
/**
 * Tiny Encryption Algorithm. David Wheeler & Roger Needham, Cambridge University Computer Lab.
 *
 * www.movable-type.co.uk/scripts/tea.pdf   - TEA, a Tiny Encryption Algorithm (1994)
 * www.movable-type.co.uk/scripts/xtea.pdf  - Tea extensions (1997)
 * www.movable-type.co.uk/scripts/xxtea.pdf - Correction to xtea (1998)
 */
declare class Tea {
    /**
     * Encrypts text using Corrected Block TEA (xxtea) algorithm.
     *
     * @param   {string} plaintext - String to be encrypted (multi-byte safe).
     * @param   {string} password - Password to be used for encryption (1st 16 chars).
     * @returns {string} Encrypted text (encoded as base64).
     */
    static encrypt(plaintext: string, password: string): string;
    /**
     * Decrypts text using Corrected Block TEA (xxtea) algorithm.
     *
     * @param   {string} ciphertext - String to be decrypted.
     * @param   {string} password - Password to be used for decryption (1st 16 chars).
     * @returns {string} Decrypted text.
     * @throws  {Error}  Invalid ciphertext
     */
    static decrypt(ciphertext: string, password: string): string;
    /**
     * XXTEA: encodes array of unsigned 32-bit integers using 128-bit key.
     *
     * @param   {number[]} v - Data vector.
     * @param   {number[]} k - Key.
     * @returns {number[]} Encoded vector.
     */
    static encode(v: number[], k: number[]): number[];
    /**
     * XXTEA: decodes array of unsigned 32-bit integers using 128-bit key.
     *
     * @param   {number[]} v - Data vector.
     * @param   {number[]} k - Key.
     * @returns {number[]} Decoded vector.
     */
    static decode(v: number[], k: number[]): number[];
    /**
     * Converts string to array of longs (each containing 4 chars).
     * @private
     */
    private static strToLongs;
    /**
     * Converts array of longs to string.
     * @private
     */
    private static longsToStr;
    /**
     * Encodes multi-byte string to utf8 - monsur.hossa.in/2012/07/20/utf-8-in-javascript.html
     */
    static utf8Encode(str: any): string;
    /**
     * Decodes utf8 string to multi-byte
     */
    static utf8Decode(utf8Str: any): any;
    /**
     * Encodes base64 - developer.mozilla.org/en-US/docs/Web/API/window.btoa, nodejs.org/api/buffer.html
     */
    static base64Encode(str: any): string;
    /**
     * Decodes base64
     */
    static base64Decode(b64Str: any): string | undefined;
}
