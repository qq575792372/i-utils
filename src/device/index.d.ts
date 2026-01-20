/**
 * 获取浏览器信息
 * @description 会获取到浏览器对应的名称以及版本
 * @returns {Object} 返回浏览器信息
 */
export function getBrowserInfo(): Object;
/**
 * 判断是pc端
 * @returns {Boolean} 返回true和false
 */
export function isPc(): boolean;
/**
 * 判断是手机端
 * @description 包含 android、iphone、黑莓手机、微软手机 等多种操作系统机型
 * @returns {Boolean} 返回true和false
 */
export function isPhone(): boolean;
/**
 * 判断是 android
 * @returns {Boolean} 返回true和false
 */
export function isAndroid(): boolean;
/**
 * 判断是 ios
 * @returns {Boolean} 返回true和false
 */
export function isIos(): boolean;
/**
 * 判断是 windows phone
 * @returns {Boolean} 返回true和false
 */
export function isWindowsPhone(): boolean;
/**
 * 判断是 windows
 * @returns {Boolean} 返回true和false
 */
export function isWindows(): boolean;
/**
 * 判断是 linux
 * @returns {Boolean} 返回true和false
 */
export function isLinux(): boolean;
/**
 * 判断是 Mac
 * @returns {Boolean} 返回true和false
 */
export function isMac(): boolean;
/**
 * 判断是iphone
 *@returns {Boolean} 返回true和false
 */
export function isIphone(): boolean;
/**
 * 判断是ipad
 *@return {Boolean} 返回true和false
 */
export function isIpad(): boolean;
/**
 * 判断是微信内置浏览器
 * @returns {Boolean} 返回true和false
 */
export function isWeixin(): boolean;
/**
 * 判断是QQ内置浏览器
 * @returns {Boolean} 返回true和false
 */
export function isQQ(): boolean;
