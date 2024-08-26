# 加解密算法 Crypto

## 编码加密 Base64

### base64Encode(str)

base64 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { base64Encode } from "@ivujs/util";

let res = base64Encode('你好啊');
console.log(res); // 输出：5L2g5aW95ZWK
```

---

### base64Decode(str)

base64 解密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回解密后的字符串

- #### 示例

```javascript
import { base64Decode } from "@ivujs/util";

let res = base64Decode('5L2g5aW95ZWK');
console.log(res); // 输出：你好啊
```

---

### base64EncodeAsBytes(str)

base64 加密字节数组

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { base64EncodeAsBytes } from "@ivujs/util";

let res = base64EncodeAsBytes([1, 2, 3]);
console.log(res); // 输出：AQID
```

---

### base64DecodeAsBytes(str)

base64 解密字节数组

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回解密后的字节数组

- #### 示例

```javascript
import { base64DecodeAsBytes } from "@ivujs/util";

let res = base64DecodeAsBytes("AQID");
console.log(res); // 输出：[1, 2, 3]
```

## 编码加密 Base32

### base32Encode(str)

base32 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { base32Encode } from "@ivujs/util";

let res = base32Encode('你好啊');
console.log(res); // 输出：4S62BZNFXXSZLCQ=
```

---

### base32Decode(str)

base64 解密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回解密后的字符串

- #### 示例

```javascript
import { base32Decode } from "@ivujs/util";

let res = base32Decode('4S62BZNFXXSZLCQ=');
console.log(res); // 输出：你好啊
```

---

### base32EncodeAsBytes(str)

base32 加密字节数组

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { base32EncodeAsBytes } from "@ivujs/util";

let res = base32EncodeAsBytes([1, 2, 3]);
console.log(res); // 输出：AEBAG===
```

---

### base32DecodeAsBytes(str)

base32 解密字节数组

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回解密后的字节数组

- #### 示例

```javascript
import { base32DecodeAsBytes } from "@ivujs/util";

let res = base32DecodeAsBytes("AEBAG===");
console.log(res); // 输出：[1, 2, 3]
```

## 单向哈希算法 MD5

### md5(str)

md5 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { md5 } from "@ivujs/util";

console.log(md5("admin")); // 输出：21232f297a57a5a743894a0e4a801fc3

```

---

### md5_hmac(str)

md5_hmac 加密

- #### 参数

  `str` {String} 字符串  
  `key` {String} 秘钥

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { md5_hmac } from "@ivujs/util";

console.log(md5_hmac("admin", "mykey")); // 输出：9db67d66029bcc2596f011b406d8384e

```

## 安全哈希算法 SHA系列

**SHA1 算法**

### sha1(str)

sha1 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha1 } from "@ivujs/util";

console.log(sha1("admin")); // 输出：d033e22ae348aeb5660fc2140aec35850c4da997

```

---

### sha1_hmac(str)

sha1_hmac 加密

- #### 参数

  `str` {String} 字符串  
  `key` {String} 秘钥

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha1_hmac } from "@ivujs/util";

console.log(sha1_hmac("admin", "mykey")); // 输出：b14b78088d5aa4560ee2da70adb142c103039323

```

---

**SHA2 算法**

### sha256(str)

sha256 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha256 } from "@ivujs/util";

console.log(sha256("admin")); // 输出：8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918

```

---

### sha224(str)

sha224 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha224 } from "@ivujs/util";

console.log(sha224("admin")); // 输出：58acb7acccce58ffa8b953b12b5a7702bd42dae441c1ad85057fa70b

```

---

### sha256_hmac(str)

sha256_hmac 加密

- #### 参数

  `str` {String} 字符串  
  `key` {String} 秘钥

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha256_hmac } from "@ivujs/util";

console.log(sha256_hmac("admin", "mykey")); // 输出：e11fc8c67332c1fbd84d9cb93566c0ee4cfd86a9f23f92d135cf47110ac75b59

```

---

### sha224_hmac(str)

sha224_hmac 加密

- #### 参数

  `str` {String} 字符串  
  `key` {String} 秘钥

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha224_hmac } from "@ivujs/util";

console.log(sha224_hmac("admin", "mykey")); // 输出：71f84d3281d06d4d6822d48e627c5069488e26aa824f7b8556b36bd5

```

---

### sha512(str)

sha512 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha512 } from "@ivujs/util";

console.log(sha512("admin")); // 输出：c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec

```

---

### sha384(str)

sha384 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha384 } from "@ivujs/util";

console.log(sha384("admin")); // 输出：9ca694a90285c034432c9550421b7b9dbd5c0f4b6673f05f6dbce58052ba20e4248041956ee8c9a2ec9f10290cdc0782

```

---

### sha512_256(str)

sha512_256 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha512_256 } from "@ivujs/util";

console.log(sha512_256("admin")); // 输出：30bb8411dd0cbf96b10a52371f7b3be1690f7afa16c3bd7bc7d02c0e2854768d

```

---

### sha512_224(str)

sha512_224 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha512_224 } from "@ivujs/util";

console.log(sha512_224("admin")); // 输出：9500df153ab6b96cdd6bf301e6062564009ebfff9c14aa1405d26be3

```

---

### sha512_hmac(str)

sha512_hmac 加密

- #### 参数

  `str` {String} 字符串  
  `key` {String} 秘钥

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha512_hmac } from "@ivujs/util";

console.log(sha512_hmac("admin", "mykey")); // 输出：e0804b166c893b466a456d198ac4f0154fb4ad1140496a8ca590faaee25f9d57b3a81bb695b4410717438f54aeda60cb1d97b756af059b06383c3a798961b3a0

```

---

### sha384_hmac(str)

sha384_hmac 加密

- #### 参数

  `str` {String} 字符串  
  `key` {String} 秘钥

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha384_hmac } from "@ivujs/util";

console.log(sha384_hmac("admin", "mykey")); // 输出：13c2e5402b190b314f8c716e6360fb706519d2da9aca422c08065ad8821fe49dc07092c19609868d86e46f74a5c2a64c

```

---

### sha512_256_hmac(str)

sha512_256_hmac 加密

- #### 参数

  `str` {String} 字符串  
  `key` {String} 秘钥

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha512_256_hmac } from "@ivujs/util";

console.log(sha512_256_hmac("admin", "mykey")); // 输出：ed73eaf2aaffc3e52f0d3731e0b63a1bdad32239aaaa02d10d9936a3ee86ac51

```

---

### sha512_224_hmac(str)

sha512_224_hmac 加密

- #### 参数

  `str` {String} 字符串  
  `key` {String} 秘钥

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha512_224_hmac } from "@ivujs/util";

console.log(sha512_224_hmac("admin", "mykey")); // 输出：276628cec9c993a07d23b752d68dddf97cabc26840f708753a9fe055

```

---

**SHA3 算法**

### sha3_512(str)

sha3_512 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha3_512 } from "@ivujs/util";

console.log(sha3_512("admin")); // 输出：5a38afb1a18d408e6cd367f9db91e2ab9bce834cdad3da24183cc174956c20ce35dd39c2bd36aae907111ae3d6ada353f7697a5f1a8fc567aae9e4ca41a9d19d

```

---

### sha3_384(str)

sha3_384 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha3_384 } from "@ivujs/util";

console.log(sha3_384("admin")); // 输出：9765a57f2010506383de91052915ce8bafbdb39f3e5a8c1a1693a0076365d37abbfd3305881ea3b5fa1426316afd7df3

```

---

### sha3_256(str)

sha3_256 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha3_256 } from "@ivujs/util";

console.log(sha3_256("admin")); // 输出：fb001dfcffd1c899f3297871406242f097aecf1a5342ccf3ebcd116146188e4b

```

---

### sha3_224(str)

sha3_224 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sha3_224 } from "@ivujs/util";

console.log(sha3_224("admin")); // 输出：a53fff8dd075bed169e164743231ff533d8b9260b0b8073f0a4c1d20

```

## 国密算法 SM系列

**SM2算法**
**SM3算法**
**SM4算法**

## 对称加密 AES

## 非对称加密 RSA

## 非对称加密 DSA

## 非对称加密 ECC
