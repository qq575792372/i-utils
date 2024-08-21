/**
 * 获得分页起始数
 * @param {Object} pagination 分页参数
 * @returns {Array} 返回起始数
 */
export function getLimit(pagination = { page: 1, pageSize: 10, total: 0, totalPage: 0, pagerCount: 7 }) {
  return [pagination.pageSize * (pagination.page - 1), pagination.pageSize * pagination.page];
}

/**
 * 获得总条数
 * @param {Object} pagination 分页参数
 * @returns {Number} 返回总条数
 */
export function getTotalPage(pagination = { page: 1, pageSize: 10, total: 0, totalPage: 0, pagerCount: 7 }) {
  return Math.ceil((pagination.total || 0) / (pagination.pageSize || 0));
}

/**
 * 获得彩虹分页器
 * @param {Object} pagination 分页参数
 * @param {Function} callback 回调函数
 * @returns {Promise} 返回彩虹分页器数据
 */
export function getRainbowPager(
  pagination = {
    page: 1,
    pageSize: 10,
    total: 0,
    totalPage: 0,
    pagerCount: 7,
  },
  callback,
) {
  return new Promise((resolve) => {
    // 分页参数
    let page = pagination.page || 1;
    let totalPage = pagination.totalPage > 0 ? pagination.totalPage : getTotalPage(pagination);
    let pagerCount = pagination.pagerCount || 7;

    // 计算参数
    let isEven = (pagerCount & 1) === 0;
    let left = pagerCount >> 1;
    let right = pagerCount >> 1;
    let pagerLength = pagerCount;

    // 计算生成的分页器数量
    if (isEven) {
      right++;
    }
    if (totalPage < pagerCount) {
      pagerLength = totalPage;
    }

    // 分页器数组
    let pager = new Array(pagerLength);

    // 生成分页器
    if (totalPage >= pagerCount) {
      if (page <= left) {
        for (let i = 0; i < pager.length; i++) {
          pager[i] = i + 1;
        }
      } else if (page > totalPage - right) {
        for (let i = 0; i < pager.length; i++) {
          pager[i] = i + totalPage - pagerCount + 1;
        }
      } else {
        for (let i = 0; i < pager.length; i++) {
          pager[i] = i + page - left + (isEven ? 1 : 0);
        }
      }
    } else {
      for (let i = 0; i < pager.length; i++) {
        pager[i] = i + 1;
      }
    }

    // 支持回调函数和Promise
    callback && callback(pager);
    resolve(pager);
  });
}

/**
 * 获得上一页
 * @param {Object} pagination 分页参数
 * @param {Function} callback 回调函数
 * @returns {Promise} 返回上一页
 */
export function getPrevPage(pagination = { page: 1, pageSize: 10, total: 0, totalPage: 0, pagerCount: 7 }, callback) {
  return new Promise((resolve) => {
    if (pagination.page > 1) {
      pagination.page--;
    } else {
      pagination.page = 1;
    }

    // 支持回调函数和Promise
    callback && callback(pagination.page);
    resolve(pagination.page);
  });
}

/**
 * 获得下一页
 * @description 最后一页会根据totalPage参数判断，如果不传此参数，则会根据参数中pageSize和total重新计算总页数
 * @param {Object} pagination 分页参数
 * @param {Function} callback 回调函数
 * @returns {Promise} 返回下一页
 */
export function getNextPage(pagination = { page: 1, pageSize: 10, total: 0, totalPage: 0, pagerCount: 7 }, callback) {
  return new Promise((resolve) => {
    // 获得总页数，如果没有传totalPage，则需要根据传的pageSize和total计算
    let totalPage = pagination.totalPage > 0 ? pagination.totalPage : getTotalPage(pagination);

    // 计算当前页大于0和小与0的情况
    if (pagination.page > 0) {
      if (pagination.page < totalPage) {
        pagination.page++;
      } else {
        pagination.page = totalPage;
      }
    } else {
      pagination.page = 1;
    }

    // 支持回调函数和Promise
    callback && callback(pagination.page);
    resolve(pagination.page);
  });
}
