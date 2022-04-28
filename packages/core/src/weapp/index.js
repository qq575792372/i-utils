/* 缓存处理（同步） */
/**
 * 设置缓存
 * @param {String} key key值
 * @param {*} data data数据
 */
export function setStorageSync(key, data) {
  wx.setStorageSync(key, data);
}

/**
 * 获得缓存数据
 * @param {String} key key值
 * @returns {*} 返回获取的值
 */
export function getStorageSync(key) {
  return wx.getStorageSync(key);
}

/**
 * 获得缓存信息
 * @returns {Object} 返回缓存信息
 */
export function getStorageInfoSync() {
  return wx.getStorageInfoSync();
}

/**
 * 删除缓存数据
 * @param {String} key key值
 */
export function removeStorageSync(key) {
  wx.removeStorageSync(key);
}

/**
 * 清空所有缓存数据
 */
export function clearStorageSync() {
  wx.clearStorageSync();
}

/* 缓存处理（异步） */
/**
 * 设置缓存
 * @param {String} key key值
 * @param {*} data data数据
 * @param {Boolean} encrypt 是否开启加密存储
 * @returns {Promise} 返回Promise
 */
export function setStorage({ key, data, encrypt = false }) {
  return new Promise((resolve, reject) => {
    wx.setStorage({
      key,
      data,
      encrypt,
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
}

/**
 * 获得缓存数据
 * @param {String} key key值
 * @param {Boolean} encrypt 是否开启加密存储
 * @returns {Promise} 返回Promise
 */
export function getStorage({ key, encrypt = false }) {
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key,
      encrypt,
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
}

/**
 * 获得缓存信息
 * @returns {Object} 返回Promise
 */
export function getStorageInfo() {
  return new Promise((resolve, reject) => {
    wx.getStorageInfo({
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
}

/**
 * 删除缓存数据
 * @param {String} key key值
 * @returns {Promise} 返回Promise
 */
export function removeStorage({ key }) {
  return new Promise((resolve, reject) => {
    wx.removeStorage({
      key,
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
}

/**
 * 清空所有缓存数据
 * @returns {Promise} 返回Promise
 */
export function clearStorage() {
  return new Promise((resolve, reject) => {
    wx.clearStorage({
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
}
