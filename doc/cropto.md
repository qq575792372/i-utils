# 加解密算法 Crypto

## 编码加密 Base64

### getUUID(len = 32, radix = 16)

生成UUID

- #### 参数

  `len` {Number} 生成的长度，默认 32 位  
  `radix` {Number} 进制数，默认 16 进制

- #### 返回值

  {String} 返回字符串

- #### 示例

```javascript
import { getUUID } from "@ivujs/util";

let res = getUUID();
console.log(res); // 输出：5e71b6a38364c189ab1229bf5c2d5695
```

## 单向哈希算法 MD5

### md5(string, key, raw)

md5加密

- #### 参数

  `string` {String} 输入的字符串  
  `key` {String} HMAC密钥
  `raw` {Boolean} 原始输出开关

- #### 返回值

  {String} 返回字符串

- #### 示例

```javascript
import { md5 } from "@ivujs/util";

// 根据给定的字符串计算（以十六进制编码的）MD5哈希值
console.log(md5("admin")); // 输出：21232f297a57a5a743894a0e4a801fc3

// 根据给定的字符串和密钥计算（以十六进制编码的）HMAC-MD5哈希值
console.log(md5("admin", "miyao")); // 输出：713de393e07617cd7ed9e05a28b4876e

// 根据给定的字符串计算原始的MD5哈希值
console.log(md5("admin", null, true)); // 输出：!#/)zW¥§CJJÃ

// 根据给定的字符串和密钥计算原始的HMAC-MD5哈希值
console.log(md5("admin", null, true)); // 输出：q=ãàvÍ~ÙàZ(´n
```
