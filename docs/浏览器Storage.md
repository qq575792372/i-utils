# 浏览器Storage

## 函数

### isSupportStorage()

```ts
function isSupportStorage(): boolean;
```

浏览器是否支持 Storage

#### 返回

`boolean`

返回true和false

***

### getLocalStorage()

```ts
function getLocalStorage(key: string): string | undefined;
```

通过key从localStorage缓存中获取数据

#### 参数

##### key

`string`

key值

#### 返回

`string` \| `undefined`

返回数据

***

### setLocalStorage()

```ts
function setLocalStorage(key: string, value: string): void;
```

设置localStorage缓存数据

#### 参数

##### key

`string`

key值

##### value

`string`

value值

#### 返回

`void`

***

### removeLocalStorage()

```ts
function removeLocalStorage(key: string): void;
```

通过key从localStorage缓存中删除数据

#### 参数

##### key

`string`

key值

#### 返回

`void`

***

### clearLocalStorage()

```ts
function clearLocalStorage(): void;
```

清空localStorage缓存中所有数据

#### 返回

`void`

***

### getSessionStorage()

```ts
function getSessionStorage(key: string): string | undefined;
```

通过key从sessionStorage缓存中获取数据

#### 参数

##### key

`string`

key值

#### 返回

`string` \| `undefined`

返回数据

***

### setSessionStorage()

```ts
function setSessionStorage(key: string, value: string): void;
```

设置sessionStorage缓存数据

#### 参数

##### key

`string`

key值

##### value

`string`

value值

#### 返回

`void`

***

### removeSessionStorage()

```ts
function removeSessionStorage(key: string): void;
```

通过key从sessionStorage缓存中删除数据

#### 参数

##### key

`string`

key值

#### 返回

`void`

***

### clearSessionStorage()

```ts
function clearSessionStorage(): void;
```

清空sessionStorage缓存中所有数据

#### 返回

`void`
