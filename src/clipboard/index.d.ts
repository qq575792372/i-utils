/**
 * 获得剪切板数据
 * @description 获得的剪切板的数据是会返回多个可用的MIME类型，比如是纯文本就返回一个['text/plain']，是复制的html则会返回两个可用的['text/plain','text/html']，是复制的图片则是['image/png']
 * @returns {Promise} 返回剪切板的数据，是数组形式，如果是文本则是字符串，否则是blob数据
 */
export function getClipboard(): Promise<any>;
/**
 * 获得剪切板文本
 * @returns {Promise} 返回剪切板文本
 */
export function getClipboardText(): Promise<any>;
/**
 * 设置剪切板数据
 * @description 可以设置文本或者blob类型的数据
 * @param {String,Blob} data 写入的数据，可以是文本或blob数据
 * @returns {Promise} 返回结果
 */
export function setClipboard(data: any): Promise<any>;
/**
 * 设置剪切板文本
 * @param {String} text 写入的文本
 * @returns {Promise} 返回结果
 */
export function setClipboardText(text: string): Promise<any>;
/**
 * 清空剪切板
 * @returns {Promise} 返回结果
 */
export function clearClipboard(): Promise<any>;
