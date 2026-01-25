# 浏览器Cookie

## 函数

### isSupportCookie()

> **isSupportCookie**(): `boolean`

浏览器是否支持 Cookie

#### 返回

`boolean`

返回true和false

***

### getCookie()

> **getCookie**(`name`): `string`

通过name获取cookie

#### 参数

##### name

`string`

参数name

#### 返回

`string`

返回获取的值

***

### setCookie()

> **setCookie**(`name`, `value`, `timestamp`): `void`

通过name设置cookie
注：timestamp参数不填，则默认为session级别，浏览器关闭即cookie过期

#### 参数

##### name

`string`

参数name

##### value

`string`

设置的value

##### timestamp

`number` = `...`

过期的时间戳值，默认为一天，设置一天过期则为：24*60*60*1000

#### 返回

`void`

***

### removeCookie()

> **removeCookie**(`name`): `void`

通过name删除cookie

#### 参数

##### name

`string`

参数name

#### 返回

`void`

***

### clearCookie()

> **clearCookie**(`domain`): `void`

清空当前站点域名的cookie

#### 参数

##### domain

`string` = `document.domain`

域名地址，默认是当前站点域名

#### 返回

`void`
