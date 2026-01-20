/**
 * 获得分页起始数
 * @param {Object} pagination 分页参数
 * @returns {Array} 返回起始数
 */
export function getLimit(pagination?: Object): any[];
/**
 * 获得总条数
 * @param {Object} pagination 分页参数
 * @returns {Number} 返回总条数
 */
export function getTotalPage(pagination?: Object): number;
/**
 * 获得彩虹分页器
 * @param {Object} pagination 分页参数
 * @param {Function} callback 回调函数
 * @returns {Promise} 返回彩虹分页器数据
 */
export function getRainbowPager(pagination: Object | undefined, callback: Function): Promise<any>;
/**
 * 获得上一页
 * @param {Object} pagination 分页参数
 * @param {Function} callback 回调函数
 * @returns {Promise} 返回上一页
 */
export function getPrevPage(pagination: Object | undefined, callback: Function): Promise<any>;
/**
 * 获得下一页
 * @description 最后一页会根据totalPage参数判断，如果不传此参数，则会根据参数中pageSize和total重新计算总页数
 * @param {Object} pagination 分页参数
 * @param {Function} callback 回调函数
 * @returns {Promise} 返回下一页
 */
export function getNextPage(pagination: Object | undefined, callback: Function): Promise<any>;
