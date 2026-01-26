# 浏览器Device

## 函数

### getBrowserInfo()

```ts
function getBrowserInfo(): 
  | {
  name: string;
  version: string;
}
  | undefined;
```

获取浏览器信息

#### 返回

  \| \{
  `name`: `string`;
  `version`: `string`;
\}
  \| `undefined`

返回浏览器信息

#### Description

会获取到浏览器对应的名称以及版本

***

### isPc()

```ts
function isPc(): boolean;
```

判断是pc端

#### 返回

`boolean`

返回true和false

***

### isPhone()

```ts
function isPhone(): boolean;
```

判断是手机端

#### 返回

`boolean`

返回true和false

#### Description

包含 android、iphone、黑莓手机、微软手机 等多种操作系统机型

***

### isAndroid()

```ts
function isAndroid(): boolean;
```

判断是 android

#### 返回

`boolean`

返回true和false

***

### isIos()

```ts
function isIos(): boolean;
```

判断是 ios

#### 返回

`boolean`

返回true和false

***

### isWindowsPhone()

```ts
function isWindowsPhone(): boolean;
```

判断是 windows phone

#### 返回

`boolean`

返回true和false

***

### isWindows()

```ts
function isWindows(): boolean;
```

判断是 windows

#### 返回

`boolean`

返回true和false

***

### isLinux()

```ts
function isLinux(): boolean;
```

判断是 linux

#### 返回

`boolean`

返回true和false

***

### isMac()

```ts
function isMac(): boolean;
```

判断是 Mac

#### 返回

`boolean`

返回true和false

***

### isIphone()

```ts
function isIphone(): boolean;
```

判断是iphone

#### 返回

`boolean`

返回true和false

***

### isIpad()

```ts
function isIpad(): boolean;
```

判断是ipad

#### 返回

`boolean`

返回true和false

***

### isWeixin()

```ts
function isWeixin(): boolean;
```

判断是微信内置浏览器

#### 返回

`boolean`

返回true和false

***

### isQQ()

```ts
function isQQ(): boolean;
```

判断是QQ内置浏览器

#### 返回

`boolean`

返回true和false
