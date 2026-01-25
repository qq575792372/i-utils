[**@ivujs/i-utils**](../README.md)

***

[@ivujs/i-utils](../README.md) / crypto/base64

# crypto/base64

## 函数

### base64Encode()

> **base64Encode**(`str`, `urlSafe`): `string`

Base64编码

#### 参数

##### str

`string`

待编码的UTF8字符串

##### urlSafe

`boolean` = `false`

是否生成URL安全的Base64（默认false）

#### 返回

`string`

Base64字符串

***

### base64Decode()

> **base64Decode**(`str`): `string`

Base64解码

#### 参数

##### str

`string`

待解码的Base64字符串

#### 返回

`string`

解码后的UTF8字符串

***

### base64EncodeURI()

> **base64EncodeURI**(`str`): `string`

URL安全Base64编码

#### 参数

##### str

`string`

待编码的UTF8字符串

#### 返回

`string`

URL安全的Base64字符串

***

### base64DecodeURI()

> **base64DecodeURI**(`str`): `string`

URL安全Base64解码

#### 参数

##### str

`string`

待解码的URL安全Base64字符串

#### 返回

`string`

解码后的UTF8字符串

***

### base64FromUint8Array()

> **base64FromUint8Array**(`uint8Array`, `urlSafe`): `string`

Uint8Array转Base64字符串

#### 参数

##### uint8Array

`Uint8Array`

待编码的字节数组

##### urlSafe

`boolean` = `false`

是否生成URL安全的Base64（默认false）

#### 返回

`string`

Base64字符串

***

### base64ToUint8Array()

> **base64ToUint8Array**(`base64Str`, `urlSafe`): `Uint8Array`

Base64字符串转Uint8Array

#### 参数

##### base64Str

`string`

待解码的Base64字符串

##### urlSafe

`boolean` = `false`

是否为URL安全的Base64（默认false）

#### 返回

`Uint8Array`

解码后的字节数组

***

### base64FromHex()

> **base64FromHex**(`hexStr`, `urlSafe`): `string`

十六进制字符串转Base64字符串

#### 参数

##### hexStr

`string`

待编码的十六进制字符串

##### urlSafe

`boolean` = `false`

是否生成URL安全的Base64（默认false）

#### 返回

`string`

Base64字符串

***

### base64ToHex()

> **base64ToHex**(`base64Str`, `urlSafe`): `string`

Base64字符串转十六进制字符串

#### 参数

##### base64Str

`string`

待解码的Base64字符串

##### urlSafe

`boolean` = `false`

是否为URL安全的Base64（默认false）

#### 返回

`string`

解码后的十六进制字符串
