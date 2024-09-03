import * as base64 from "../base64/index.js";
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* AES implementation in JavaScript                                   (c) Chris Veness 2005-2019  */
/*                                                                                   MIT Licence  */
/* www.movable-type.co.uk/scripts/aes.html                                                        */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

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
class Aes {
  /**
   * AES Cipher function: encrypt 'input' state with Rijndael algorithm [§5.1];
   *   applies Nr rounds (10/12/14) using key schedule w for 'add round key' stage.
   *
   * @param   {number[]}   input - 16-byte (128-bit) input state array.
   * @param   {number[][]} w - Key schedule as 2D byte-array (Nr+1 × Nb bytes).
   * @returns {number[]}   Encrypted output state array.
   */
  static cipher(input, w) {
    const Nb = 4; // block size (in words): no of columns in state (fixed at 4 for AES)
    const Nr = w.length / Nb - 1; // no of rounds: 10/12/14 for 128/192/256-bit keys

    let state = [[], [], [], []]; // initialise 4×Nb byte-array 'state' with input [§3.4]
    for (let i = 0; i < 4 * Nb; i++) state[i % 4][Math.floor(i / 4)] = input[i];

    state = Aes.addRoundKey(state, w, 0, Nb);

    for (let round = 1; round < Nr; round++) {
      state = Aes.subBytes(state, Nb);
      state = Aes.shiftRows(state, Nb);
      state = Aes.mixColumns(state, Nb);
      state = Aes.addRoundKey(state, w, round, Nb);
    }

    state = Aes.subBytes(state, Nb);
    state = Aes.shiftRows(state, Nb);
    state = Aes.addRoundKey(state, w, Nr, Nb);

    const output = new Array(4 * Nb); // convert state to 1-d array before returning [§3.4]
    for (let i = 0; i < 4 * Nb; i++) output[i] = state[i % 4][Math.floor(i / 4)];

    return output;
  }

  /**
   * Perform key expansion to generate a key schedule from a cipher key [§5.2].
   *
   * @param   {number[]}   key - Cipher key as 16/24/32-byte array.
   * @returns {number[][]} Expanded key schedule as 2D byte-array (Nr+1 × Nb bytes).
   */
  static keyExpansion(key) {
    const Nb = 4; // block size (in words): no of columns in state (fixed at 4 for AES)
    const Nk = key.length / 4; // key length (in words): 4/6/8 for 128/192/256-bit keys
    const Nr = Nk + 6; // no of rounds: 10/12/14 for 128/192/256-bit keys

    const w = new Array(Nb * (Nr + 1));
    let temp = new Array(4);

    // initialise first Nk words of expanded key with cipher key
    for (let i = 0; i < Nk; i++) {
      const r = [key[4 * i], key[4 * i + 1], key[4 * i + 2], key[4 * i + 3]];
      w[i] = r;
    }

    // expand the key into the remainder of the schedule
    for (let i = Nk; i < Nb * (Nr + 1); i++) {
      w[i] = new Array(4);
      for (let t = 0; t < 4; t++) temp[t] = w[i - 1][t];
      // each Nk'th word has extra transformation
      if (i % Nk == 0) {
        temp = Aes.subWord(Aes.rotWord(temp));
        for (let t = 0; t < 4; t++) temp[t] ^= Aes.rCon[i / Nk][t];
      }
      // 256-bit key has subWord applied every 4th word
      else if (Nk > 6 && i % Nk == 4) {
        temp = Aes.subWord(temp);
      }
      // xor w[i] with w[i-1] and w[i-Nk]
      for (let t = 0; t < 4; t++) w[i][t] = w[i - Nk][t] ^ temp[t];
    }

    return w;
  }

  /**
   * Apply SBox to state S [§5.1.1].
   *
   * @private
   */
  static subBytes(s, Nb) {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < Nb; c++) s[r][c] = Aes.sBox[s[r][c]];
    }
    return s;
  }

  /**
   * Shift row r of state S left by r bytes [§5.1.2].
   *
   * @private
   */
  static shiftRows(s, Nb) {
    const t = new Array(4);
    for (let r = 1; r < 4; r++) {
      for (let c = 0; c < 4; c++) t[c] = s[r][(c + r) % Nb]; // shift into temp copy
      for (let c = 0; c < 4; c++) s[r][c] = t[c]; // and copy back
    } // note that this will work for Nb=4,5,6, but not 7,8 (always 4 for AES):
    return s; // see asmaes.sourceforge.net/rijndael/rijndaelImplementation.pdf
  }

  /**
   * Combine bytes of each col of state S [§5.1.3].
   *
   * @private
   */
  static mixColumns(s, Nb) {
    for (let c = 0; c < Nb; c++) {
      const a = new Array(Nb); // 'a' is a copy of the current column from 's'
      const b = new Array(Nb); // 'b' is a•{02} in GF(2^8)
      for (let r = 0; r < 4; r++) {
        a[r] = s[r][c];
        b[r] = s[r][c] & 0x80 ? (s[r][c] << 1) ^ 0x011b : s[r][c] << 1;
      }
      // a[n] ^ b[n] is a•{03} in GF(2^8)
      s[0][c] = b[0] ^ a[1] ^ b[1] ^ a[2] ^ a[3]; // {02}•a0 + {03}•a1 + a2 + a3
      s[1][c] = a[0] ^ b[1] ^ a[2] ^ b[2] ^ a[3]; // a0 • {02}•a1 + {03}•a2 + a3
      s[2][c] = a[0] ^ a[1] ^ b[2] ^ a[3] ^ b[3]; // a0 + a1 + {02}•a2 + {03}•a3
      s[3][c] = a[0] ^ b[0] ^ a[1] ^ a[2] ^ b[3]; // {03}•a0 + a1 + a2 + {02}•a3
    }
    return s;
  }

  /**
   * Xor Round Key into state S [§5.1.4].
   *
   * @private
   */
  static addRoundKey(state, w, rnd, Nb) {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < Nb; c++) state[r][c] ^= w[rnd * 4 + c][r];
    }
    return state;
  }

  /**
   * Apply SBox to 4-byte word w.
   *
   * @private
   */
  static subWord(w) {
    for (let i = 0; i < 4; i++) w[i] = Aes.sBox[w[i]];
    return w;
  }

  /**
   * Rotate 4-byte word w left by one byte.
   *
   * @private
   */
  static rotWord(w) {
    const tmp = w[0];
    for (let i = 0; i < 3; i++) w[i] = w[i + 1];
    w[3] = tmp;
    return w;
  }
}

// sBox is pre-computed multiplicative inverse in GF(2^8) used in subBytes and keyExpansion [§5.1.1]
Aes.sBox = [
  0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9,
  0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f,
  0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07,
  0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3,
  0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58,
  0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3,
  0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f,
  0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88,
  0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac,
  0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a,
  0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70,
  0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11,
  0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42,
  0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16,
];

// rCon is Round Constant used for the Key Expansion [1st col is 2^(r-1) in GF(2^8)] [§5.2]
Aes.rCon = [
  [0x00, 0x00, 0x00, 0x00],
  [0x01, 0x00, 0x00, 0x00],
  [0x02, 0x00, 0x00, 0x00],
  [0x04, 0x00, 0x00, 0x00],
  [0x08, 0x00, 0x00, 0x00],
  [0x10, 0x00, 0x00, 0x00],
  [0x20, 0x00, 0x00, 0x00],
  [0x40, 0x00, 0x00, 0x00],
  [0x80, 0x00, 0x00, 0x00],
  [0x1b, 0x00, 0x00, 0x00],
  [0x36, 0x00, 0x00, 0x00],
];

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* AES counter-mode (CTR) implementation in JavaScript                (c) Chris Veness 2005-2019  */
/*                                                                                   MIT Licence  */
/* www.movable-type.co.uk/scripts/aes.html                                                        */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/* global WorkerGlobalScope */

/**
 * AesCtr: Counter-mode (CTR) wrapper for AES.
 *
 * This encrypts a Unicode string to produces a base64 ciphertext using 128/192/256-bit AES,
 * and the converse to decrypt an encrypted ciphertext.
 *
 * See csrc.nist.gov/publications/detail/sp/800-38a/final
 */
class AesCtr extends Aes {
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
  static encrypt(plaintext, password, nBits) {
    if (![128, 192, 256].includes(nBits)) throw new Error("Key size is not 128 / 192 / 256");
    plaintext = AesCtr.utf8Encode(String(plaintext));
    password = AesCtr.utf8Encode(String(password));

    // use AES itself to encrypt password to get cipher key (using plain password as source for key
    // expansion) to give us well encrypted key (in real use hashed password could be used for key)
    const nBytes = nBits / 8; // no bytes in key (16/24/32)
    const pwBytes = new Array(nBytes);
    for (let i = 0; i < nBytes; i++) {
      // use 1st 16/24/32 chars of password for key
      pwBytes[i] = i < password.length ? password.charCodeAt(i) : 0;
    }
    let key = Aes.cipher(pwBytes, Aes.keyExpansion(pwBytes)); // gives us 16-byte key
    key = key.concat(key.slice(0, nBytes - 16)); // expand key to 16/24/32 bytes long

    // initialise 1st 8 bytes of counter block with nonce (NIST SP 800-38A §B.2): [0-1] = millisec,
    // [2-3] = random, [4-7] = seconds, together giving full sub-millisec uniqueness up to Feb 2106
    const timestamp = new Date().getTime(); // milliseconds since 1-Jan-1970
    const nonceMs = timestamp % 1000;
    const nonceSec = Math.floor(timestamp / 1000);
    const nonceRnd = Math.floor(Math.random() * 0xffff);
    // for debugging: const [ nonceMs, nonceSec, nonceRnd ] = [ 0, 0, 0 ];
    const counterBlock = [
      // 16-byte array; blocksize is fixed at 16 for AES
      nonceMs & 0xff,
      (nonceMs >>> 8) & 0xff,
      nonceRnd & 0xff,
      (nonceRnd >>> 8) & 0xff,
      nonceSec & 0xff,
      (nonceSec >>> 8) & 0xff,
      (nonceSec >>> 16) & 0xff,
      (nonceSec >>> 24) & 0xff,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ];

    // and convert nonce to a string to go on the front of the ciphertext
    const nonceStr = counterBlock
      .slice(0, 8)
      .map((i) => String.fromCharCode(i))
      .join("");

    // convert (utf-8) plaintext to byte array
    const plaintextBytes = plaintext.split("").map((ch) => ch.charCodeAt(0));

    // ------------ perform encryption ------------
    const ciphertextBytes = AesCtr.nistEncryption(plaintextBytes, key, counterBlock);

    // convert byte array to (utf-8) ciphertext string
    const ciphertextUtf8 = ciphertextBytes.map((i) => String.fromCharCode(i)).join("");

    // base-64 encode ciphertext
    const ciphertextB64 = AesCtr.base64Encode(nonceStr + ciphertextUtf8);

    return ciphertextB64;
  }

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
  static nistEncryption(plaintext, key, counterBlock) {
    const blockSize = 16; // block size fixed at 16 bytes / 128 bits (Nb=4) for AES

    // generate key schedule - an expansion of the key into distinct Key Rounds for each round
    const keySchedule = Aes.keyExpansion(key);

    const blockCount = Math.ceil(plaintext.length / blockSize);
    const ciphertext = new Array(plaintext.length);

    for (let b = 0; b < blockCount; b++) {
      // ---- encrypt counter block; Oⱼ = CIPHₖ(Tⱼ) ----
      const cipherCntr = Aes.cipher(counterBlock, keySchedule);

      // block size is reduced on final block
      const blockLength = b < blockCount - 1 ? blockSize : ((plaintext.length - 1) % blockSize) + 1;

      // ---- xor plaintext with ciphered counter byte-by-byte; Cⱼ = Pⱼ ⊕ Oⱼ ----
      for (let i = 0; i < blockLength; i++) {
        ciphertext[b * blockSize + i] = cipherCntr[i] ^ plaintext[b * blockSize + i];
      }

      // increment counter block (counter in 2nd 8 bytes of counter block, big-endian)
      counterBlock[blockSize - 1]++;
      // and propagate carry digits
      for (let i = blockSize - 1; i >= 8; i--) {
        counterBlock[i - 1] += counterBlock[i] >> 8;
        counterBlock[i] &= 0xff;
      }

      // if within web worker, announce progress every 1000 blocks (roughly every 50ms)
      if (typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope) {
        if (b % 1000 == 0) self.postMessage({ progress: b / blockCount });
      }
    }

    return ciphertext;
  }

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
  static decrypt(ciphertext, password, nBits) {
    if (![128, 192, 256].includes(nBits)) throw new Error("Key size is not 128 / 192 / 256");
    ciphertext = AesCtr.base64Decode(String(ciphertext));
    password = AesCtr.utf8Encode(String(password));

    // use AES to encrypt password (mirroring encrypt routine)
    const nBytes = nBits / 8; // no bytes in key
    const pwBytes = new Array(nBytes);
    for (let i = 0; i < nBytes; i++) {
      // use 1st nBytes chars of password for key
      pwBytes[i] = i < password.length ? password.charCodeAt(i) : 0;
    }
    let key = Aes.cipher(pwBytes, Aes.keyExpansion(pwBytes));
    key = key.concat(key.slice(0, nBytes - 16)); // expand key to 16/24/32 bytes long

    // recover nonce from 1st 8 bytes of ciphertext into 1st 8 bytes of counter block
    const counterBlock = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 8; i++) counterBlock[i] = ciphertext.charCodeAt(i);

    // convert ciphertext to byte array (skipping past initial 8 bytes)
    const ciphertextBytes = new Array(ciphertext.length - 8);
    for (let i = 8; i < ciphertext.length; i++) ciphertextBytes[i - 8] = ciphertext.charCodeAt(i);

    // ------------ perform decryption ------------
    const plaintextBytes = AesCtr.nistDecryption(ciphertextBytes, key, counterBlock);

    // convert byte array to (utf-8) plaintext string
    const plaintextUtf8 = plaintextBytes.map((i) => String.fromCharCode(i)).join("");

    // decode from UTF8 back to Unicode multi-byte chars
    const plaintext = AesCtr.utf8Decode(plaintextUtf8);

    return plaintext;
  }

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
  static nistDecryption(ciphertext, key, counterBlock) {
    const blockSize = 16; // block size fixed at 16 bytes / 128 bits (Nb=4) for AES

    // generate key schedule - an expansion of the key into distinct Key Rounds for each round
    const keySchedule = Aes.keyExpansion(key);

    const blockCount = Math.ceil(ciphertext.length / blockSize);
    const plaintext = new Array(ciphertext.length);

    for (let b = 0; b < blockCount; b++) {
      // ---- decrypt counter block; Oⱼ = CIPHₖ(Tⱼ) ----
      const cipherCntr = Aes.cipher(counterBlock, keySchedule);

      // block size is reduced on final block
      const blockLength = b < blockCount - 1 ? blockSize : ((ciphertext.length - 1) % blockSize) + 1;

      // ---- xor ciphertext with ciphered counter byte-by-byte; Pⱼ = Cⱼ ⊕ Oⱼ ----
      for (let i = 0; i < blockLength; i++) {
        plaintext[b * blockSize + i] = cipherCntr[i] ^ ciphertext[b * blockSize + i];
      }

      // increment counter block (counter in 2nd 8 bytes of counter block, big-endian)
      counterBlock[blockSize - 1]++;
      // and propagate carry digits
      for (let i = blockSize - 1; i >= 8; i--) {
        counterBlock[i - 1] += counterBlock[i] >> 8;
        counterBlock[i] &= 0xff;
      }

      // if within web worker, announce progress every 1000 blocks (roughly every 50ms)
      if (typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope) {
        if (b % 1000 == 0) self.postMessage({ progress: b / blockCount });
      }
    }

    return plaintext;
  }

  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

  /**
   * Encodes multi-byte string to utf8.
   *
   * Note utf8Encode is an identity function with 7-bit ascii strings, but not with 8-bit strings;
   * utf8Encode('x') = 'x', but utf8Encode('ça') = 'Ã§a', and utf8Encode('Ã§a') = 'ÃÂ§a'.
   */
  static utf8Encode(str) {
    // 注释第三方js的代码
    // try {
    //   return new TextEncoder().encode(str, "utf-8").reduce((prev, curr) => prev + String.fromCharCode(curr), "");
    // } catch (e) {
    //   // no TextEncoder available?
    //   return unescape(encodeURIComponent(str)); // monsur.hossa.in/2012/07/20/utf-8-in-javascript.html
    // }
    return base64.utf8Encode(str);
  }

  /**
   * Decodes utf8 string to multi-byte.
   */
  static utf8Decode(str) {
    // 注释第三方js的代码
    // try {
    //   return new TextEncoder().decode(str, "utf-8").reduce((prev, curr) => prev + String.fromCharCode(curr), "");
    // } catch (e) {
    //   // no TextEncoder available?
    //   return decodeURIComponent(escape(str)); // monsur.hossa.in/2012/07/20/utf-8-in-javascript.html
    // }

    return base64.utf8Decode(str);
  }

  /*
   * Encodes string as base-64.
   *
   * - developer.mozilla.org/en-US/docs/Web/API/window.btoa, nodejs.org/api/buffer.html
   * - note: btoa & Buffer/binary work on single-byte Unicode (C0/C1), so ok for utf8 strings, not for general Unicode...
   * - note: if btoa()/atob() are not available (eg IE9-), try github.com/davidchambers/Base64.js
   */
  static base64Encode(str) {
    // 注释第三方js的代码
    // if (typeof btoa != "undefined") return btoa(str); // browser
    // if (typeof Buffer != "undefined") return new Buffer(str, "binary").toString("base64"); // Node.js
    // throw new Error("No Base64 Encode");

    return base64.encode(str);
  }

  /*
   * Decodes base-64 encoded string.
   */
  static base64Decode(str) {
    // if (typeof atob != "undefined") return atob(str); // browser
    // if (typeof Buffer != "undefined") return new Buffer(str, "base64").toString("binary"); // Node.js
    // throw new Error("No Base64 Decode");

    return base64.decode(str);
  }
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
// es6 export
export default AesCtr;
