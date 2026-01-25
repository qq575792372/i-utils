# 浏览器Dom

## 函数

### hasClass()

> **hasClass**(`elem`, `className`): `boolean`

判断元素包含某个类名

#### 参数

##### elem

`HTMLElement`

元素

##### className

`string`

类名

#### 返回

`boolean`

返回true和false

***

### addClass()

> **addClass**(`elem`, `className`): `void`

元素添加类名

#### 参数

##### elem

`HTMLElement`

元素

##### className

`string`

类名

#### 返回

`void`

***

### removeClass()

> **removeClass**(`elem`, `className`): `void`

元素删除类名

#### 参数

##### elem

`HTMLElement`

元素

##### className

`string`

类名

#### 返回

`void`

***

### replaceClass()

> **replaceClass**(`elem`, `newClassName`, `oldClassName`): `void`

元素替换类名

#### 参数

##### elem

`HTMLElement`

元素

##### newClassName

`string`

新的类名

##### oldClassName

`string`

被替换掉的旧类名

#### 返回

`void`

***

### addStyle()

> **addStyle**(`elem`, `styles`): `void`

添加元素的style样式

#### 参数

##### elem

`HTMLElement`

元素

##### styles

`Record`\<`string`, `string`\> = `{}`

样式属性集合

#### 返回

`void`

***

### getStyle()

> **getStyle**(`elem`, `name`): `string` \| `undefined`

获取元素的style样式

#### 参数

##### elem

`HTMLElement`

元素

##### name

`string`

属性

#### 返回

`string` \| `undefined`

返回样式的值

***

### removeStyle()

> **removeStyle**(`elem`, `name`): `void`

删除元素的style样式

#### 参数

##### elem

`HTMLElement`

元素

##### name

`string`

属性

#### 返回

`void`

***

### htmlEncode()

> **htmlEncode**(`htmlStr`): `string`

html标签转义

#### 参数

##### htmlStr

`string`

html字符串

#### 返回

`string`

返回转义后的字符串

***

### htmlDecode()

> **htmlDecode**(`htmlStr`): `string`

html标签解码

#### 参数

##### htmlStr

`string`

html字符串

#### 返回

`string`

返回解析后的字符串
