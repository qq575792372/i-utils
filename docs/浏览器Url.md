# 浏览器Url

## 函数

### getProtocol()

> **getProtocol**(`url`): `string` \| `undefined`

获得协议名

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

#### 返回

`string` \| `undefined`

返回协议名

***

### getHost()

> **getHost**(`url`): `string` \| `undefined`

获得主机地址

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

#### 返回

`string` \| `undefined`

返回主机地址

***

### getHostName()

> **getHostName**(`url`): `string` \| `undefined`

获得主机名称

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

#### 返回

`string` \| `undefined`

返回主机名称

***

### getPort()

> **getPort**(`url`): `string` \| `undefined`

获得端口号

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

#### 返回

`string` \| `undefined`

返回端口号

***

### getUrlPath()

> **getUrlPath**(`url`): `string` \| `undefined`

获得地址路径

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

#### 返回

`string` \| `undefined`

返回地址路径

***

### getUrlHash()

> **getUrlHash**(`url`): `string` \| `undefined`

获得hash字符串

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

#### 返回

`string` \| `undefined`

返回hash字符串

***

### getSearchString()

> **getSearchString**(`url`): `string` \| `undefined`

获得查询参数字符串

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

#### 返回

`string` \| `undefined`

返回查询参数字符串

***

### hasSearchParam()

> **hasSearchParam**(`url`, `name`): `boolean`

查询参数字符串中是否包含某个参数

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

##### name

`string`

参数名

#### 返回

`boolean`

返回结果

***

### getSearchParam()

> **getSearchParam**(`url`, `name`): `string` \| `undefined`

查询参数字符串中获得某个参数的值

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

##### name

`string` = `""`

参数名

#### 返回

`string` \| `undefined`

返回查询到的值

***

### setSearchParam()

> **setSearchParam**(`url`, `name`, `value`): `string`

查询参数字符串中设置某个参数的值

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

##### name

`string` = `""`

参数名

##### value

参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2

`string` | `number` | `number`[] | `string`[]

#### 返回

`string`

返回查询参数字符串

***

### parseSearchParam()

> **parseSearchParam**(`url`): `Record`\<`string`, `any`\>

查询参数字符串转为对象

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

#### 返回

`Record`\<`string`, `any`\>

返回参数对象

***

### stringifySearchParam()

> **stringifySearchParam**(`params`, `url`): `string`

对象转为查询参数字符串

#### 参数

##### params

`Record`\<`string`, `any`\>

参数对象

##### url

`string` = `""`

url地址，如果不为空，则会拼接好查询参数字符串的url地址

#### 返回

`string`

返回参数字符串

***

### prependSearchParam()

> **prependSearchParam**(`url`, `name`, `value`): `string`

查询参数字符串中在最前面追加新参数和值

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

##### name

`string`

参数名

##### value

参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2

`string` | `number` | `number`[] | `string`[]

#### 返回

`string`

返回查询参数字符串

***

### prependToSearchParam()

> **prependToSearchParam**(`url`, `beforeParam`, `name`, `value`): `string`

查询参数字符串中在某个参数的前面追加新参数和值

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

##### beforeParam

`string`

在前面追加参数的名称

##### name

`string`

参数名

##### value

参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2

`string` | `number` | `number`[] | `string`[]

#### 返回

`string`

返回查询参数字符串

***

### appendSearchParam()

> **appendSearchParam**(`url`, `name`, `value`): `string`

查询参数字符串中在最后面追加新参数和值

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

##### name

`string`

参数名

##### value

参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2

`string` | `number` | `number`[] | `string`[]

#### 返回

`string`

返回查询参数字符串

***

### appendToSearchParam()

> **appendToSearchParam**(`url`, `afterName`, `name`, `value`): `string`

查询参数字符串中在某个参数的后面追加新参数和值

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

##### afterName

`string`

在后面追加参数的名称

##### name

`string`

参数名

##### value

参数值，如果是数组，则解析为：&ids[0]=1&ids[2]=2

`string` | `number` | `number`[] | `string`[]

#### 返回

`string`

返回查询参数字符串

***

### removeSearchParam()

> **removeSearchParam**(`url`, `name`): `string`

查询参数字符串中移除某个参数和值

#### 参数

##### url

`string` = `window.location.href`

url地址，默认当前url地址

##### name

`string`

参数名

#### 返回

`string`

返回查询参数字符串
