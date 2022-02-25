/* 浏览器信息 */
/**
 * 获取浏览器信息
 * @description 会获取到浏览器对应的名称以及版本
 * @returns {Object} 返回浏览器信息
 */
export function getBrowserInfo() {
  let ua = window.navigator.userAgent.toLowerCase();

  // ie
  let ie = ua.match(/rv:([\d.]+)\) like gecko/) || ua.match(/msie ([\d\.]+)/);
  // edge
  let edge = ua.match(/edg\/([\d\.]+)/);
  // firefox
  let firefox = ua.match(/firefox\/([\d\.]+)/);
  // opera
  let opera = ua.match(/(?:opera|opr).([\d\.]+)/);
  // chrome
  let chrome = ua.match(/chrome\/([\d\.]+)/);
  // safari
  let safari = ua.match(/version\/([\d\.]+).*safari/);

  // 判断类型
  if (ie) return { name: "ie", version: ie[1] };
  if (edge) return { name: "edge", version: edge[1] };
  if (firefox) return { name: "firefox", version: firefox[1] };
  if (opera) return { name: "opera", version: opera[1] };
  if (chrome) return { name: "chrome", version: chrome[1] };
  if (safari) return { name: "safari", version: safari[1] };
  return "unknown";
}

/* 设备类型 */
/**
 * 判断是pc端
 * @returns {Boolean} 返回true和false
 */
export function isPc() {
  return !isMobile();
}

/**
 * 判断是手机端
 * @description 包含 android、iphone、黑莓手机、微软手机 等多种操作系统机型
 * @returns {Boolean} 返回true和false
 */
export function isMobile() {
  let ua = window.navigator.userAgent;
  return /Android|webOS|iPhone|iPod|BlackBerry|Windows Phone|IEMobile/i.test(
    ua
  );
}

/* 操作系统类型 */
/**
 * 判断是 android
 * @returns {Boolean} 返回true和false
 */
export function isAndroid() {
  let ua = window.navigator.userAgent;
  return /Android|BlackBerry/i.test(ua);
}

/**
 * 判断是 ios
 * @returns {Boolean} 返回true和false
 */
export function isIos() {
  let ua = window.navigator.userAgent;
  return /iPhone|iPad|iPod|iOS/i.test(ua);
}

/**
 * 判断是 windows phone
 * @returns {Boolean} 返回true和false
 */
export function isWindowsPhone() {
  let ua = window.navigator.userAgent;
  return /Windows Phone/i.test(ua);
}

/**
 * 判断是 windows
 * @returns {Boolean} 返回true和false
 */
export function isWindows() {
  let ua = window.navigator.userAgent;
  return /win/i.test(ua);
}

/**
 * 判断是 linux
 * @returns {Boolean} 返回true和false
 */
export function isLinux() {
  let ua = window.navigator.userAgent;
  return /linux/i.test(ua);
}

/**
 * 判断是 Mac
 * @returns {Boolean} 返回true和false
 */
export function isMac() {
  let ua = window.navigator.userAgent;
  return /mac/i.test(ua);
}

/* 苹果设备类型 */
/**
 * 判断是iphone
 *@returns {Boolean} 返回true和false
 */
export function isIphone() {
  let ua = window.navigator.userAgent;
  return /iPhone/i.test(ua);
}

/**
 * 判断是ipad
 *@return {Boolean} 返回true和false
 */
export function isIpad() {
  let ua = window.navigator.userAgent;
  return /iPod/i.test(ua);
}

/* 手机浏览器类型 */
/**
 * 判断是微信内置浏览器
 * @returns {Boolean} 返回true和false
 */
export function isWeixin() {
  let ua = window.navigator.userAgent;
  return /MicroMessenger/i.test(ua);
}

/**
 * 判断是QQ内置浏览器
 * @returns {Boolean} 返回true和false
 */
export function isQQ() {
  let ua = window.navigator.userAgent;
  return /QQ/i.test(ua);
}
