# 加解密算法 Crypto

## 编码加密 Base64

### base64.encode(str)

base64 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { base64 } from "@ivujs/util";

let res = base64.encode('你好啊');
console.log(res); // 输出：5L2g5aW95ZWK
```

---

### base64.decode(str)

base64 解密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回解密后的字符串

- #### 示例

```javascript
import { base64 } from "@ivujs/util";

let res = base64.decode('5L2g5aW95ZWK');
console.log(res); // 输出：你好啊
```

---

### base64.encodeAsBytes(str)

base64 加密字节数组

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { base64 } from "@ivujs/util";

let res = base64.encodeAsBytes([1, 2, 3]);
console.log(res); // 输出：AQID
```

---

### base64.decodeAsBytes(str)

base64 解密字节数组

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回解密后的字节数组

- #### 示例

```javascript
import { base64 } from "@ivujs/util";

let res = base64.decodeAsBytes("AQID");
console.log(res); // 输出：[1, 2, 3]
```

## 编码加密 Base32

### base32.encode(str)

base32 加密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { base32 } from "@ivujs/util";

let res = base32.encode('你好啊');
console.log(res); // 输出：4S62BZNFXXSZLCQ=
```

---

### base32.decode(str)

base64 解密

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回解密后的字符串

- #### 示例

```javascript
import { base32 } from "@ivujs/util";

let res = base32.decode('4S62BZNFXXSZLCQ=');
console.log(res); // 输出：你好啊
```

---

### base32.encodeAsBytes(str)

base32 加密字节数组

- #### 参数

  `array` {Array} 数组

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { base32 } from "@ivujs/util";

let res = base32.encodeAsBytes([1, 2, 3]);
console.log(res); // 输出：AEBAG===
```

---

### base32.decodeAsBytes(str)

base32 解密字节数组

- #### 参数

  `str` {String} 字符串

- #### 返回值

  {String} 返回解密后的字节数组

- #### 示例

```javascript
import { base32 } from "@ivujs/util";

let res = base32.decodeAsBytes("AEBAG===");
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

获取密钥对

### sm2.generateKeyPairHex(str, rnd)

sm2 生成公钥和私钥

- #### 参数

  `str` {String} 字符串  
  `rnd` {Number} 随机数

- #### 返回值

  {Object} 返回公钥和私钥

- #### 示例

```javascript
import { sm2 } from "@ivujs/util";

// 获取公钥和私钥
let { publicKey, privateKey } = sm2.generateKeyPairHex();
console.log(privateKey); // 输出：048bcd68350122cc8e812ccfaaa02859285eac8b83b8e561839fcba8bb27f96faee513d1ecef0280528c2cd1d5d14ef3f8bf30c01fae8950a38e75070e7c02fcd6
console.log(privateKey); // 输出：ce69184fc0001c0f6d5222622d9d142efb2737a2e2e7af27d1d2ed66b4b0226f 

// 自定义随机数，参数会直接透传给 jsbn 库的 BigInteger 构造器
// 注意：开发者使用自定义随机数，需要自行确保传入的随机数符合密码学安全
let keypair2 = sm2.generateKeyPairHex("123123123123123");
let keypair3 = sm2.generateKeyPairHex(256, Math.random());
```

---

### sm2.compressPublicKeyHex(publicKey)

sm2 压缩公钥

- #### 参数

  `publicKey` {String} 公钥

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sm2 } from "@ivujs/util";

// 获取公钥
let { publicKey } = sm2.generateKeyPairHex();
// 获取压缩后的公钥
let compressedPublicKey = iUtils.sm2.compressPublicKeyHex(publicKey);
console.log(compressedPublicKey); // 输出：028bcd68350122cc8e812ccfaaa02859285eac8b83b8e561839fcba8bb27f96fae

```

---

### sm2.comparePublicKeyHex(publicKey, compressedPublicKey)

sm2 对比公钥是否等价

- #### 参数

  `publicKey` {String} 公钥  
  `compressedPublicKey` {String} 压缩后的公钥

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sm2 } from "@ivujs/util";

// 获取公钥
let { publicKey } = sm2.generateKeyPairHex();
// 获取压缩后的公钥
let compressedPublicKey = sm2.compressPublicKeyHex(publicKey);

// 对比公钥和压缩后的公钥是否等价
let comparePublicKeyHex = sm2.comparePublicKeyHex(publicKey, compressedPublicKey);
console.log(comparePublicKeyHex); // 输出：true

```

---

验证密钥对

### sm2.verifyPublicKey(publicKey)

sm2 验证公钥

- #### 参数

  `publicKey` {String} 公钥

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { sm2 } from "@ivujs/util";

// 获取公钥
let { publicKey } = sm2.generateKeyPairHex();
// 获取压缩后的公钥
let compressedPublicKey = sm2.compressPublicKeyHex(publicKey);

// 验证公钥
let verifyResult = sm2.verifyPublicKey(publicKey);
console.log(verifyResult); // 输出：true

// 验证压缩后的公钥
let verifyResult1 = sm2.verifyPublicKey(compressedPublicKey);
console.log(verifyResult1); // 输出：true

```

---
加密解密

### sm2.encrypt(str, publicKey, cipherMode = 1)

sm2 加密

- #### 参数

  `str` {String} 字符串
  `publicKey` {String} 公钥
  `cipherMode` {Number} 加密模式，1（C1C3C2）和0（C1C2C3），默认1

- #### 返回值

  {Boolean} 返回加密后的字符串

- #### 示例

```javascript
import { sm2 } from "@ivujs/util";

// 获取公钥
let { publicKey } = sm2.generateKeyPairHex();

// 加密字符串
let encryptData = sm2.encrypt("admin", publicKey);
console.log(encryptData); // 输出：cbe57ad3cb4952b8f7c9e50fa552b0bc2adec205f2b8c269675054f401a6832d9c39f4e64b95b666ecd8e1f419a2550c2f8689e4b38320b4e249d6d5ebcace38c6eaba408062741265959b833c5a554c920bb0653301c0bc48905fdfacc80ff31abc09c481

// 加密字节数组
let encryptData1 = sm2.encrypt([1, 2, 3]);
console.log(encryptData1); // 输出：33398ae4eefb2edd07d6eb650b074852bdcc02a0b630270424236460bd0c9e2e259451438e48cc32770b7507d95222dba9b083714dca1d3657dbcfc8e7c95629842697f504a4d2da08f2291941e5053a988fcdae0d4a30c265706158efe1bd7b336e08
```

---

### sm2.decrypt(str, privateKey, cipherMode = 1, outputConfig = { output: "string" })

sm2 解密

- #### 参数

  `str` {String} 字符串
  `privateKey` {String} 私钥
  `cipherMode` {Number} 解密模式，1（C1C3C2）和0（C1C2C3），默认1
  `outputConfig` {Object} 输出结果配置，{output:'string/array'}

- #### 返回值

  {String,Array} 返回解密后的数据

- #### 示例

```javascript
import { sm2 } from "@ivujs/util";

// 获取私钥，解密是需要私钥
let { privateKey } = sm2.generateKeyPairHex();

// 获取解密后的字符串，第三个参数{output:'string'}不写也可以，默认是解密字符串方式
let str = "980c26d4ea9826c16c42ee2a0db6935dcfbbda0cc7d21d437ee36492cb71fd3dcfaaa62e2725c1c8fc3006547f7fcf95a0cd9e2679e5df17a4753ecf59ad22fa1a2155aaeac9d30cf3c903aeeda7e0eada7d68f63b9e4deca62896eb57ca27a2fa0b27d974";
let decryptData = sm2.encrypt(str, privateKey, 1, { output: "string" });
console.log(decryptData); // 输出：admin

// 获取解密后的数组，第三个参数需要写为{output:'array'}
let str1 = "c01eb3808a7fa97d96e04bc47d0050abfbfb481dc2d4afc751ec5a06207ac1f15b8026b9494b2efdce9f75554ef7f97361c8acee9301fae06d55b0db7e7a916fae5d601a0aa95d52abec6ac935c86cce6a05d04e55c2bbc4b98e3950ab7b865179ca5a";
let decryptData1 = sm2.encrypt(str1, privateKey, 1, { output: "array" });
console.log(encryptData); // 输出：[1,2,3]
```

---
签名验签

### sm2.doSignature(str, privateKey, signatureConfig)

sm2 生成签名

- #### 参数

  `str` {String} 字符串
  `privateKey` {String} 私钥
  `signatureConfig` {Object} 签名配置

- #### 返回值

  {String} 返回签名信息

- #### 示例

```javascript
import { sm2 } from "@ivujs/util";

let str = "admin";
// 获取私钥
let { privateKey } = sm2.generateKeyPairHex();

// 纯签名 + 生成椭圆曲线点
let signValueHex1 = sm2.doSignature(str, privateKey);
console.log(signValueHex1); // 输出：cd17eb6683e5471e74a69b8d2f15c9de4de6f46f7c8b92e80f6e404bb734817a559781ce8e0d0bba431be975e52baf500cb0d0b72247250506b90d011568b92e

// 纯签名 + 提前生成好的椭圆曲线点
let signValueHex2 = sm2.doSignature(str, privateKey, {
  pointPool: [sm2.getPoint(), sm2.getPoint(), sm2.getPoint(), sm2.getPoint()] // 传入事先已生成好的椭圆曲线点，可加快签名速度
});
console.log(signValueHex2); // 输出：e5c029e05a036f948ff84f6b2e9195a3602026136fa3ef426bc8af75f8a0ac423ab7f5401c82c84c3108288f8ee7204d7d3d243830253a3c9ca5f130ab99abdd

// 纯签名 + 生成椭圆曲线点 + der编解码
let signValueHex3 = sm2.doSignature(str, privateKey, {
  der: true
});
console.log(signValueHex3); // 输出：3045022100dbd8902fef36ad184b890e0e87c6c0ad52bae7530f04e6455ef06935b4163c640220496a84d1358de1e1719e8cffcd780775bd697e55ad9ff4e0e01a6a7256bc1ece

// 纯签名 + 生成椭圆曲线点 + sm3杂凑
let signValueHex4 = sm2.doSignature(str, privateKey, {
  hash: true
});
console.log(signValueHex4); // 输出：7921b6e04b75a5626c4aa2e882a8b176f2a39d584123b33513a3124b4b48d2ce82518c85674c9e387db7a4be86e0a33d99db9af89049894f18c8b20facc4f2c0

// 纯签名 + 生成椭圆曲线点 + sm3杂凑（不做公钥推导）
let signValueHex5 = sm2.doSignature(str, privateKey, {
  hash: true,
  publicKey // 传入公钥的话，可以去掉sm3杂凑中推导公钥的过程，速度会比纯签名 + 生成椭圆曲线点 + sm3杂凑快
});
console.log(signValueHex5); // 输出：47efcf00074e12d0378d65181741fb76c89dced3b4a39c16a6bd8390dbc6714eca2f4bcd5b7ddeb9bbf00374334b829bb8aa74effc51bb94e2782800dc37bc16


// 纯签名 + 生成椭圆曲线点 + sm3杂凑 + 不做公钥推 + 添加 userId（长度小于 8192）
// 默认 userId 值为 1234567812345678
let signValueHex6 = sm2.doSignature(str, privateKey, {
  hash: true,
  publicKey,
  userId: "testUserId"
});
console.log(signValueHex6); // 输出：bdf4ef77877121ec665e5b6fff368a282c79d5dc2de4d5524c1e5703e61d97b5f3501414a8c03de4b09f70b68791072f77fcce8510132f8abf24f6331724d1ce
```

---

### sm2.doVerifySignature(str, signHex, publicKey, verifyConfig)

sm2 验证签名

- #### 参数

  `str` {String} 字符串
  `signHex` {String} 生成签名的信息
  `publicKey` {String} 公钥
  `signatureConfig` {Object} 验证配置

- #### 返回值

  {Boolean} 返回结果

- #### 示例

```javascript
import { sm2 } from "@ivujs/util";

let str = "admin";
// 获取公钥和私钥
let { publicKey, privateKey } = sm2.generateKeyPairHex();

// 纯签名 + 生成椭圆曲线点
let signValueHex1 = sm2.doSignature(str, privateKey);
console.log(signValueHex1); // 输出：cd17eb6683e5471e74a69b8d2f15c9de4de6f46f7c8b92e80f6e404bb734817a559781ce8e0d0bba431be975e52baf500cb0d0b72247250506b90d011568b92e
// 验签结果
let verifyResult1 = sm2.doVerifySignature(str, signValueHex1, publicKey);
console.log(verifyResult1); // 输出：true

// 纯签名 + 提前生成好的椭圆曲线点
let signValueHex2 = sm2.doSignature(str, privateKey, {
  pointPool: [sm2.getPoint(), sm2.getPoint(), sm2.getPoint(), sm2.getPoint()] // 传入事先已生成好的椭圆曲线点，可加快签名速度
});
console.log(signValueHex2); // 输出：e5c029e05a036f948ff84f6b2e9195a3602026136fa3ef426bc8af75f8a0ac423ab7f5401c82c84c3108288f8ee7204d7d3d243830253a3c9ca5f130ab99abdd
// 验签结果
let verifyResult2 = sm2.doVerifySignature(str, signValueHex2, publicKey, {
  pointPool: [sm2.getPoint(), sm2.getPoint(), sm2.getPoint(), sm2.getPoint()] // 传入事先已生成好的椭圆曲线点，可加快签名速度
});
console.log(verifyResult2); // 输出：true

// 纯签名 + 生成椭圆曲线点 + der编解码
let signValueHex3 = sm2.doSignature(str, privateKey, {
  der: true
});
console.log(signValueHex3); // 输出：3045022100dbd8902fef36ad184b890e0e87c6c0ad52bae7530f04e6455ef06935b4163c640220496a84d1358de1e1719e8cffcd780775bd697e55ad9ff4e0e01a6a7256bc1ece
// 验签结果
let verifyResult3 = sm2.doVerifySignature(str, signValueHex3, publicKey, {
  der: true
});
console.log(verifyResult3); // 输出：true


// 纯签名 + 生成椭圆曲线点 + sm3杂凑
let signValueHex4 = sm2.doSignature(str, privateKey, {
  hash: true
});
console.log(signValueHex4); // 输出：7921b6e04b75a5626c4aa2e882a8b176f2a39d584123b33513a3124b4b48d2ce82518c85674c9e387db7a4be86e0a33d99db9af89049894f18c8b20facc4f2c0
// 验签结果
let verifyResult4 = sm2.doVerifySignature(str, signValueHex4, publicKey, {
  hash: true
});
console.log(verifyResult4); // 输出：true

// 纯签名 + 生成椭圆曲线点 + sm3杂凑（不做公钥推导）
let signValueHex5 = sm2.doSignature(str, privateKey, {
  hash: true,
  publicKey // 传入公钥的话，可以去掉sm3杂凑中推导公钥的过程，速度会比纯签名 + 生成椭圆曲线点 + sm3杂凑快
});
console.log(signValueHex5); // 输出：47efcf00074e12d0378d65181741fb76c89dced3b4a39c16a6bd8390dbc6714eca2f4bcd5b7ddeb9bbf00374334b829bb8aa74effc51bb94e2782800dc37bc16
// 验签结果
let verifyResult5 = sm2.doVerifySignature(str, signValueHex5, publicKey, {
  hash: true,
  publicKey // 传入公钥的话，可以去掉sm3杂凑中推导公钥的过程，速度会比纯签名 + 生成椭圆曲线点 + sm3杂凑快
});
console.log(verifyResult5); // 输出：true

// 纯签名 + 生成椭圆曲线点 + sm3杂凑 + 不做公钥推 + 添加 userId（长度小于 8192）
// 默认 userId 值为 1234567812345678
let signValueHex6 = sm2.doSignature(str, privateKey, {
  hash: true,
  publicKey,
  userId: "testUserId"
});
console.log(signValueHex6); // 输出：bdf4ef77877121ec665e5b6fff368a282c79d5dc2de4d5524c1e5703e61d97b5f3501414a8c03de4b09f70b68791072f77fcce8510132f8abf24f6331724d1ce
// 验签结果
let verifyResult6 = sm2.doVerifySignature(str, signValueHex6, publicKey, {
  hash: true,
  publicKey,
  userId: "testUserId"
});
console.log(verifyResult6); // 输出：true
```

---

### sm2.getPoint()

sm2 获取椭圆曲线点

- #### 参数

  无

- #### 返回值

  {Object} 返回椭圆曲线点，可在sm2签名时传入

- #### 示例

```javascript
import { sm2 } from "@ivujs/util";

// 获取椭圆曲线点对象
let point = sm2.getPoint();
console.log(point); // 输出：{publicKey:'xxx',privateKey:'xxx',k:BigInteger,xl:BigInteger}
```

---
根据私钥获取公钥

### sm2.getPublicKeyFromPrivateKey(privateKey)

sm2 根据私钥获取公钥

- #### 参数

  `privateKey` {String} 私钥

- #### 返回值

  {String} 返回公钥

- #### 示例

```javascript
import { sm2 } from "@ivujs/util";

let privateKey = "6c1d789b19ceb60161d6c91e18d449b7a8269b9c49a67db96381e1c1cb0f91cc"
let publicKey = sm2.getPublicKeyFromPrivateKey(privateKey);
console.log(point); // 输出：04d0596f86ad7323a006c85f9b923dfe172dc581e319cce37990fec10780f5919c965b5aad0aa00ac8966ea597f7ca42c68da31b8f6d432fa3d52ce84fa4ec6a75
```

**SM3算法**

### sm3.encrypt(str, options)

sm3 加密

- #### 参数

  `str` {String} 字符串
  `options` {Object} 配置

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sm3 } from "@ivujs/util";

let str = "admin";
// 加密字符串
let enctyptData = sm3.encrypt(str);
console.log(enctyptData); // 输出：dc1fd00e3eeeb940ff46f457bf97d66ba7fcc36e0b20802383de142860e76ae6

// 根据key加密字符串，也就是hmac方式
let enctyptData1 = sm3.encrypt(str, {
  key: "daac25c1512fe50f79b0e4526b93f5c0e1460cef40b6dd44af13caec62e8c60e0d885f3c6d6fb51e530889e6fd4ac743a6d332e68a0f2a3923f42585dceb93e9"
});
console.log(enctyptData1); // 输出：7b46e6f53277bd41576f2e316483383270dbfebb8a6001fc453e0c72a641d6bb
```

**SM4算法**

### sm4.encrypt(str, key, options)

sm4 加密

- #### 参数

  `str` {String} 字符串
  `key` {String} 秘钥
  `options` {Object} 配置

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { sm4 } from "@ivujs/util";

let str = "hello! admin!你好啊，管理员";
let key = "0123456789abcdeffedcba9876543210"; // 可以为 16 进制串或字节数组，要求为 128 比特

// 加密字符串
let enctyptData1 = sm4.encrypt(str, key);
console.log(enctyptData1); // 输出：b7517825a215f5e716dd47e445a9d27b

// 加密，不使用 padding
let enctyptData2 = sm4.encrypt(str, key, { padding: "none" });
console.log(enctyptData2); // 输出：466da53d719b2fcfa8926896094aeef715d6c28459fb88f048d653e68f602c77

// 加密，不使用 padding，输出为字节数组
let enctyptData3 = sm4.encrypt(str, key, { padding: "none", output: "array" });
console.log(enctyptData3); // 输出：[70, 109, 165, 61, 113, 155, 47, 207, 168, 146, 104, 150, 9, 74, 238, 247, 21, 214, 194, 132, 89, 251, 136, 240, 72, 214, 83, 230, 143, 96, 44, 119]

// 加密，cbc 模式
let enctyptData4 = sm4.encrypt(str, key, { mode: "cbc", iv: "fedcba98765432100123456789abcdef" });
console.log(enctyptData4); // 输出：e101e568f22c70f23e623cd4bf79322178cc99a3f66b85cb294b4c2176966d0fda0bf5c448accc27f8303f92e76215c9
```

---

### sm4.decrypt(str, key, options)

sm4 解密

- #### 参数

  `str` {String} 字符串
  `key` {String} 秘钥
  `options` {Object} 配置

- #### 返回值

  {String} 返回解密后的数据

- #### 示例

```javascript
import { sm4 } from "@ivujs/util";

let str = "hello! admin!你好啊，管理员";
let key = "0123456789abcdeffedcba9876543210"; // 可以为 16 进制串或字节数组，要求为 128 比特

// 加密字符串
let enctyptData1 = sm4.encrypt(str, key);
let dectyptData1 = sm4.decrypt(enctyptData1, key);
console.log(dectyptData1); // 输出：hello! admin!你好啊，管理员

// 解密，不使用 padding
let enctyptData2 = sm4.encrypt(str, key, { padding: "none" });
let dectyptData2 = sm4.decrypt(enctyptData2, key, { padding: "none" });
console.log(dectyptData2); // 输出：hello! admin!你好啊，管理员


// 解密，不使用 padding，输出为字节数组
let enctyptData3 = sm4.encrypt(str, key, { padding: "none", output: "array" });
let dectyptData3 = sm4.decrypt(enctyptData3, key, { mode: "cbc", iv: "fedcba98765432100123456789abcdef" });
console.log(dectyptData3); // 输出： [104, 101, 108, 108, 111, 33, 32, 97, 100, 109, 105, 110, 33, 228, 189, 160, 229, 165, 189, 229, 149, 138, 239, 188, 140, 231, 174, 161, 231, 144, 134, 229]

// 解密，cbc 模式
let enctyptData4 = sm4.encrypt(str, key, { mode: "cbc", iv: "fedcba98765432100123456789abcdef" });
let dectyptData4 = sm4.decrypt(enctyptData4, key, { mode: "cbc", iv: "fedcba98765432100123456789abcdef" });
console.log(dectyptData4); // 输出：hello! admin!你好啊，管理员
```

## 对称加密 AES

## 对称加密 DES

### des.encrypt(str, key)

des 加密

- #### 参数

  `str` {String} 字符串
  `key` {String} 秘钥

- #### 返回值

  {String} 返回加密后的字符串

- #### 示例

```javascript
import { des } from "@ivujs/util";

let str = "hello! admin!你好啊，管理员";
let key = "0123456789abcdeffedcba9876543210";

// 加密字符串
let enctyptData1 = des.encrypt(str, key);
console.log(enctyptData1); // 输出：dbf58bb877237a1172c69ceae37c78bc7606e70ad626383f701e178d4aa214ffb298d438cd58c29b92a9d984877ed5db
```

### des.decrypt(str, key)

des 解密

- #### 参数

  `str` {String} 字符串
  `key` {String} 秘钥

- #### 返回值

  {String} 返回解密后的字符串

- #### 示例

```javascript
import { des } from "@ivujs/util";

let str = "dbf58bb877237a1172c69ceae37c78bc7606e70ad626383f701e178d4aa214ffb298d438cd58c29b92a9d984877ed5db";
let key = "0123456789abcdeffedcba9876543210";

// 解密字符串
let dectyptData1 = des.decrypt(str, key);
console.log(dectyptData1); // 输出：hello! admin!你好啊，管理员
```

## 非对称加密 RSA

## 非对称加密 DSA

## 非对称加密 ECC
