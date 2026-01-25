# 浏览器Clipboard

## 函数

### getClipboard()

> **getClipboard**(): `Promise`\<`unknown`\>

获得剪切板数据

#### 返回

`Promise`\<`unknown`\>

返回剪切板的数据，是数组形式，如果是文本则是字符串，否则是blob数据

#### Description

获得的剪切板的数据是会返回多个可用的MIME类型，比如是纯文本就返回一个['text/plain']，是复制的html则会返回两个可用的['text/plain','text/html']，是复制的图片则是['image/png']

***

### getClipboardText()

> **getClipboardText**(): `Promise`\<`unknown`\>

获得剪切板文本

#### 返回

`Promise`\<`unknown`\>

返回剪切板文本

***

### setClipboard()

> **setClipboard**(`data`): `Promise`\<`unknown`\>

设置剪切板数据

#### 参数

##### data

写入的数据，可以是文本或blob数据

`string` | `Blob`

#### 返回

`Promise`\<`unknown`\>

返回结果

#### Description

可以设置文本或者blob类型的数据

***

### setClipboardText()

> **setClipboardText**(`text`): `Promise`\<`unknown`\>

设置剪切板文本

#### 参数

##### text

`string`

写入的文本

#### 返回

`Promise`\<`unknown`\>

返回结果

***

### clearClipboard()

> **clearClipboard**(): `Promise`\<`unknown`\>

清空剪切板

#### 返回

`Promise`\<`unknown`\>

返回结果
