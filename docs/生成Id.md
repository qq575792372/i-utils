# 生成Id

## 函数

### getUUID()

> **getUUID**(`len`, `radix`): `string`

生成UUID

#### 参数

##### len

`number` = `32`

生成的长度，默认32位

##### radix

`number` = `16`

进制数，默认16进制

#### 返回

`string`

返回字符串

#### 示例

```ts
getUUID() // 输出：0a559343dbbf0e7e6c1de90163e7aa0a
```

***

### getGUID()

> **getGUID**(): `string`

生成GUID

#### 返回

`string`

返回字符串

#### 示例

```ts
getGUID() // 输出：275ec770-0853-6767-4875-7b270220ce9c
```
