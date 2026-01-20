export const md5: Md5;
export const md5_hmac: HmacMd5;
/**
 * Md5 class
 * @class Md5
 * @description This is internal class.
 * @see {@link md5.create}
 */
declare function Md5(sharedMemory: any): void;
declare class Md5 {
    /**
     * Md5 class
     * @class Md5
     * @description This is internal class.
     * @see {@link md5.create}
     */
    constructor(sharedMemory: any);
    blocks: any[] | Uint32Array<ArrayBuffer>;
    buffer8: any;
    h0: number;
    h1: number;
    h2: number;
    h3: number;
    start: number;
    bytes: number;
    hBytes: number;
    finalized: boolean;
    hashed: boolean;
    first: boolean;
    /**
     * @method update
     * @memberof Md5
     * @instance
     * @description Update hash
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {Md5} Md5 object.
     * @see {@link md5.update}
     */
    update(message: string | any[] | Uint8Array | ArrayBuffer): Md5;
    lastByteIndex: number | undefined;
    finalize(): void;
    hash(): void;
    /**
     * @method hex
     * @memberof Md5
     * @instance
     * @description Output hash as hex string
     * @returns {String} Hex string
     * @see {@link md5.hex}
     * @example
     * hash.hex();
     */
    hex(): string;
    /**
     * @method toString
     * @memberof Md5
     * @instance
     * @description Output hash as hex string
     * @returns {String} Hex string
     * @see {@link md5.hex}
     * @example
     * hash.toString();
     */
    toString: any;
    /**
     * @method digest
     * @memberof Md5
     * @instance
     * @description Output hash as bytes array
     * @returns {Array} Bytes array
     * @see {@link md5.digest}
     * @example
     * hash.digest();
     */
    digest(): any[];
    /**
     * @method array
     * @memberof Md5
     * @instance
     * @description Output hash as bytes array
     * @returns {Array} Bytes array
     * @see {@link md5.array}
     * @example
     * hash.array();
     */
    array: any;
    /**
     * @method arrayBuffer
     * @memberof Md5
     * @instance
     * @description Output hash as ArrayBuffer
     * @returns {ArrayBuffer} ArrayBuffer
     * @see {@link md5.arrayBuffer}
     * @example
     * hash.arrayBuffer();
     */
    arrayBuffer(): ArrayBuffer;
    /**
     * @method buffer
     * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
     * @memberof Md5
     * @instance
     * @description Output hash as ArrayBuffer
     * @returns {ArrayBuffer} ArrayBuffer
     * @see {@link md5.buffer}
     * @example
     * hash.buffer();
     */
    buffer: any;
    /**
     * @method base64
     * @memberof Md5
     * @instance
     * @description Output hash as base64 string
     * @returns {String} base64 string
     * @see {@link md5.base64}
     * @example
     * hash.base64();
     */
    base64(): string;
}
/**
 * HmacMd5 class
 * @class HmacMd5
 * @extends Md5
 * @description This is internal class.
 * @see {@link md5.hmac.create}
 */
declare function HmacMd5(key: any, sharedMemory: any): void;
declare class HmacMd5 {
    /**
     * HmacMd5 class
     * @class HmacMd5
     * @extends Md5
     * @description This is internal class.
     * @see {@link md5.hmac.create}
     */
    constructor(key: any, sharedMemory: any);
    oKeyPad: number[];
    inner: boolean;
    sharedMemory: any;
    finalize(): void;
}
export {};
