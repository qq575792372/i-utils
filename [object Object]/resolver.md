[**@ivujs/i-utils**](README.md)

***

[@ivujs/i-utils](README.md) / resolver

# resolver

## 类型别名

### IUtilsResolverOptions

> **IUtilsResolverOptions** = `undefined` \| `string`[] \| \{ `exclude?`: `string`[]; `include?`: `string`[]; `append?`: `string`[]; \}

解析器类型

## 函数

### IUtilsResolver()

> **IUtilsResolver**(`options?`): `Resolver`

提供自动导入插件的解析器

#### 参数

##### options?

[`IUtilsResolverOptions`](#iutilsresolveroptions)

配置项，支持3种传参方式

#### 返回

`Resolver`

unplugin-auto-import 解析器

#### 示例

```ts
// 场景1：默认加载所有方法
IUtilsResolver()

// 场景2：追加指定方法名
IUtilsResolver(["getDate"])

// 场景3：精细化控制（排除/只包含/追加）
IUtilsResolver({
  include: ["getUUID", "getGUID"],
  exclude: ["testLoaded"],
  append: ["formatDate"]
})
```
