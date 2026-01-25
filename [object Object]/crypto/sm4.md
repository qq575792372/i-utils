[**@ivujs/i-utils**](../README.md)

***

[@ivujs/i-utils](../README.md) / crypto/sm4

# crypto/sm4

## 接口

### SM4Options

sm4通用配置

#### 属性

##### mode?

> `optional` **mode**: `"ECB"` \| `"CBC"`

##### iv?

> `optional` **iv**: [`SM4DataType`](#sm4datatype)

##### padding?

> `optional` **padding**: `number` \| *typeof* `iterator` \| `"length"` \| `"toString"` \| `"concat"` \| `"slice"` \| `"indexOf"` \| `"lastIndexOf"` \| `"includes"` \| `"at"` \| `"charAt"` \| `"charCodeAt"` \| `"localeCompare"` \| `"match"` \| `"replace"` \| `"search"` \| `"split"` \| `"substring"` \| `"toLowerCase"` \| `"toLocaleLowerCase"` \| `"toUpperCase"` \| `"toLocaleUpperCase"` \| `"trim"` \| `"substr"` \| `"valueOf"` \| `"codePointAt"` \| `"endsWith"` \| `"normalize"` \| `"repeat"` \| `"startsWith"` \| `"anchor"` \| `"big"` \| `"blink"` \| `"bold"` \| `"fixed"` \| `"fontcolor"` \| `"fontsize"` \| `"italics"` \| `"link"` \| `"small"` \| `"strike"` \| `"sub"` \| `"sup"` \| `"padStart"` \| `"padEnd"` \| `"trimEnd"` \| `"trimStart"` \| `"trimLeft"` \| `"trimRight"` \| `"matchAll"` \| `"replaceAll"`

##### output?

> `optional` **output**: `"HEX"` \| `"UTF8"` \| `"ARRAY"` \| `"UINT8ARRAY"` \| `"ARRAYBUFFER"`

## 类型别名

### SM4DataType

> **SM4DataType** = `string` \| `Uint8Array` \| `ArrayBuffer` \| `number`[]

sm4传参和返回的类型，不管是传参还是返回值固定是这几个

## 变量

### generateSM4Key()

> `const` **generateSM4Key**: (`inputFormat?`) => [`SM4DataType`](#sm4datatype)

生成sm4的key

#### 参数

##### inputFormat?

`string`

输入类型 可以任意字符串，其中固定的uint8array、array、hex这3个字符串，会对应生成类型数据

#### 返回

[`SM4DataType`](#sm4datatype)

生成的key

***

### generateSM4Iv()

> `const` **generateSM4Iv**: (`inputFormat?`) => [`SM4DataType`](#sm4datatype)

生成sm4的iv

#### 参数

##### inputFormat?

`string`

输入类型 可以任意字符串，其中固定的uint8array、array、hex这3个字符串，会对应生成类型数据

#### 返回

[`SM4DataType`](#sm4datatype)

生成的iv

***

### SM4

> `const` **SM4**: `object`

#### 类型声明

##### MODE

> **MODE**: `object` = `sm4.MODE`

###### MODE.ECB

> **ECB**: `string` = `SM4_MODE_ECB`

###### MODE.CBC

> **CBC**: `string` = `SM4_MODE_CBC`

##### PADDING

> **PADDING**: `string` = `sm4.PADDING`

##### OUTPUT

> **OUTPUT**: `object` = `sm4.OUTPUT`

###### OUTPUT.HEX

> **HEX**: `string` = `SM4_OUTPUT_HEX`

###### OUTPUT.UTF8

> **UTF8**: `string` = `SM4_OUTPUT_UTF8`

###### OUTPUT.ARRAY

> **ARRAY**: `string` = `SM4_OUTPUT_ARRAY`

###### OUTPUT.UINT8ARRAY

> **UINT8ARRAY**: `string` = `SM4_OUTPUT_UINT8ARRAY`

###### OUTPUT.ARRAYBUFFER

> **ARRAYBUFFER**: `string` = `SM4_OUTPUT_ARRAYBUFFER`

## 函数

### sm4Encrypt()

> **sm4Encrypt**(`str`, `key`, `options?`): [`SM4DataType`](#sm4datatype)

sm4 加密

#### 参数

##### str

`string`

字符串

##### key

[`SM4DataType`](#sm4datatype)

秘钥

##### options?

[`SM4Options`](#sm4options)

配置

#### 返回

[`SM4DataType`](#sm4datatype)

加密后的字符串

***

### sm4Decrypt()

> **sm4Decrypt**(`str`, `key`, `options?`): [`SM4DataType`](#sm4datatype)

sm4 解密

#### 参数

##### str

`string`

字符串

##### key

[`SM4DataType`](#sm4datatype)

秘钥

##### options?

[`SM4Options`](#sm4options)

配置

#### 返回

[`SM4DataType`](#sm4datatype)

解密后的数据
