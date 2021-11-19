/**
 * 小程序-设置缓存
 * @param {String} key
 * @param {*} data
 */
export function setStorage(key, data) {
  wx.setStorage({ key, data });
}

/**
 * 小程序-设置缓存（同步）
 * @param {String} key
 * @param {*} data
 */
export function setStorageSync(key, data) {
  wx.setStorageSync(key, data);
}

/**
 * 小程序-通过key从缓存中获取数据
 * @param {String} key
 * @returns {*} 返回获取的值
 */
export function getStorage(key) {
  return wx.getStorage({ key }) || "";
}

/**
 * 小程序-通过key从缓存中获取数据（同步）
 * @param {String} key
 * @returns {*} 返回获取的值
 */
export function getStorageSync(key) {
  return wx.getStorageSync(key) || "";
}

/**
 * 小程序-通过key从缓存中删除数据
 * @param {String} key
 */
export function removeStorage(key) {
  wx.removeStorage({ key });
}

/**
 * 小程序-通过key从缓存中删除数据（同步）
 * @param {String} key
 */
export function removeStorageSync(key) {
  wx.removeStorageSync(key);
}

/*
 * 小程序-清空所有缓存数据
 */
export function clearStorage() {
  wx.clearStorageSync();
}

/*
 * 小程序-清空所有缓存数据（同步）
 */
export function clearStorageSync() {
  wx.clearStorageSync();
}
