/**
 * @module 浏览器Device
 */
/* 浏览器信息 */
/**
 * 获取浏览器信息
 * @description 会获取到浏览器对应的名称以及版本
 * @returns {Object} 返回浏览器信息
 */
export function getBrowserInfo(): { name: string; version: string } | undefined {
  const ua = window.navigator.userAgent.toLowerCase();

  // ie
  const ie = ua.match(/rv:([\d.]+)\) like gecko/) || ua.match(/msie ([\d\.]+)/);
  // edge
  const edge = ua.match(/edg\/([\d\.]+)/);
  // firefox
  const firefox = ua.match(/firefox\/([\d\.]+)/);
  // opera
  const opera = ua.match(/(?:opera|opr).([\d\.]+)/);
  // chrome
  const chrome = ua.match(/chrome\/([\d\.]+)/);
  // safari
  const safari = ua.match(/version\/([\d\.]+).*safari/);

  // 判断类型
  if (ie) return { name: "ie", version: ie[1] };
  else if (edge) return { name: "edge", version: edge[1] };
  else if (firefox) return { name: "firefox", version: firefox[1] };
  else if (opera) return { name: "opera", version: opera[1] };
  else if (chrome) return { name: "chrome", version: chrome[1] };
  else if (safari) return { name: "safari", version: safari[1] };
  else return;
}

/* 设备类型 */
/**
 * 判断是pc端
 * @returns {boolean} 返回true和false
 */
export function isPc(): boolean {
  return !isPhone();
}

/**
 * 判断是手机端
 * @description 包含 android、iphone、黑莓手机、微软手机 等多种操作系统机型
 * @returns {boolean} 返回true和false
 */
export function isPhone(): boolean {
  const ua = window.navigator.userAgent;
  return /Android|webOS|iPhone|iPod|BlackBerry|Windows Phone|IEMobile/i.test(ua);
}

/* 操作系统类型 */
/**
 * 判断是 android
 * @returns {boolean} 返回true和false
 */
export function isAndroid(): boolean {
  const ua = window.navigator.userAgent;
  return /Android|BlackBerry/i.test(ua);
}

/**
 * 判断是 ios
 * @returns {boolean} 返回true和false
 */
export function isIos(): boolean {
  const ua = window.navigator.userAgent;
  return /iPhone|iPad|iPod|iOS/i.test(ua);
}

/**
 * 判断是 windows phone
 * @returns {boolean} 返回true和false
 */
export function isWindowsPhone(): boolean {
  const ua = window.navigator.userAgent;
  return /Windows Phone/i.test(ua);
}

/**
 * 判断是 windows
 * @returns {boolean} 返回true和false
 */
export function isWindows(): boolean {
  const ua = window.navigator.userAgent;
  return /win/i.test(ua);
}

/**
 * 判断是 linux
 * @returns {boolean} 返回true和false
 */
export function isLinux(): boolean {
  const ua = window.navigator.userAgent;
  return /linux/i.test(ua);
}

/**
 * 判断是 Mac
 * @returns {boolean} 返回true和false
 */
export function isMac(): boolean {
  const ua = window.navigator.userAgent;
  return /mac/i.test(ua);
}

/* 苹果设备类型 */
/**
 * 判断是iphone
 *@returns {boolean} 返回true和false
 */
export function isIphone(): boolean {
  const ua = window.navigator.userAgent;
  return /iPhone/i.test(ua);
}

/**
 * 判断是ipad
 *@return {boolean} 返回true和false
 */
export function isIpad(): boolean {
  const ua = window.navigator.userAgent;
  return /iPod/i.test(ua);
}

/* 手机浏览器类型 */
/**
 * 判断是微信内置浏览器
 * @returns {boolean} 返回true和false
 */
export function isWeixin(): boolean {
  const ua = window.navigator.userAgent;
  return /MicroMessenger/i.test(ua);
}

/**
 * 判断是QQ内置浏览器
 * @returns {boolean} 返回true和false
 */
export function isQQ(): boolean {
  const ua = window.navigator.userAgent;
  return /QQ/i.test(ua);
}
