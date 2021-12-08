/**
 * 设置缓存
 * @param {String} key key值
 * @param {*} data data数据
 */
export function setStorage(key, data) {
  wx.setStorage({ key, data });
}

/**
 * 设置缓存（同步）
 * @param {String} key key值
 * @param {*} data data数据
 */
export function setStorageSync(key, data) {
  wx.setStorageSync(key, data);
}

/**
 * 通过key从缓存中获取数据
 * @param {String} key key值
 * @returns {*} 返回获取的值
 */
export function getStorage(key) {
  return wx.getStorage({ key }) || undefined;
}

/**
 * 通过key从缓存中获取数据（同步）
 * @param {String} key key值
 * @returns {*} 返回获取的值
 */
export function getStorageSync(key) {
  return wx.getStorageSync(key) || undefined;
}

/**
 * 通过key从缓存中删除数据
 * @param {String} key key值
 */
export function removeStorage(key) {
  wx.removeStorage({ key });
}

/**
 * 通过key从缓存中删除数据（同步）
 * @param {String} key key值
 */
export function removeStorageSync(key) {
  wx.removeStorageSync(key);
}

/*
 * 清空所有缓存数据
 */
export function clearStorage() {
  wx.clearStorageSync();
}

/*
 * 清空所有缓存数据（同步）
 */
export function clearStorageSync() {
  wx.clearStorageSync();
}
