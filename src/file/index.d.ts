/**
 * 格式化文件大小自动转为 B，KB，MB，GB
 * @param {Number} size 文件的大小，单位byte字节
 * @returns {String} 返回格式化后的字符串
 */
export function formatFileSize(size: number): string;
/**
 * 获得文件名称
 * @param {String} fileName 文件的全名称，例如：测试图片.jpg
 * @returns {String} 返回文件的名称
 */
export function getFileName(fileName: string): string;
/**
 * 获得文件后缀名
 * @param {String} value 文件地址路径或者文件全名称，例如：http://xxx.com/mytest.jpg，测试图片.jpg
 * @returns {String} 返回文件后缀名
 */
export function getFileSuffix(value: string): string;
/**
 * file转blob
 * @param {File} file file文件
 * @returns {Promise} 返回Promise的blob
 */
export function fileToBlob(file: File): Promise<any>;
/**
 * file转base64
 * @param {File} file file文件
 * @returns {Promise} 返回Promise的base64
 */
export function fileToBase64(file: File): Promise<any>;
/**
 * file转url
 * @description 适用于本地上传图片并预览，需要注意 URL.revokeObjectURL(file) 内存释放
 * @param {File} file file文件
 * @returns {Promise} 返回Promise的url
 */
export function fileToUrl(file: File): Promise<any>;
/**
 * url赚file
 * @param {String} url url地址
 * @returns {Promise} 返回Promise的file
 */
export function urlToFile(url: string): Promise<any>;
/**
 * blob转file
 * @param {Blob} blob blob数据
 * @param {String} fileName 文件名称，默认以时间戳命名
 * @returns {Promise} 返回Promise的file
 */
export function blobToFile(blob: Blob, fileName?: string): Promise<any>;
/**
 * blob转文本
 * @param {Blob} blob blob数据
 * @returns {Promise} 返回Promise的文本
 */
export function blobToText(blob: Blob): Promise<any>;
/**
 * blob转base64
 * @param {Blob} blob blob数据
 * @returns {Promise} 返回Promise的base64
 */
export function blobToBase64(blob: Blob): Promise<any>;
/**
 * base64转file
 * @param {String} base64 base64数据
 * @param {String} fileName 文件名称，默认以时间戳命名
 * @returns {Promise} 返回Promise的file
 */
export function base64ToFile(base64: string, fileName?: string): Promise<any>;
/**
 * base64转成blob
 * @param {String} base64 base64数据
 * @returns {Promise} 返回Promise的blob
 */
export function base64ToBlob(base64: string): Promise<any>;
/**
 * 图片url转base64
 * @param {String} imgUrl 图片url地址
 * @returns {Promise} 返回Promise的base64
 */
export function urlToBase64(imgUrl: string): Promise<any>;
/**
 * 下载blob格式的文件
 * @param {Blob} blob blob数据
 * @param {String} fileName 下载的文件名，不写后缀名则默认为原文件类型
 */
export function downloadBlobFile(blob: Blob, fileName: string): void;
/**
 * 通过文件url地址下载
 * @param {String} fileUrl url文件地址
 * @param {String} fileName 下载的文件名，不写后缀名则默认为原文件类型
 */
export function downloadFileUrl(fileUrl: string, fileName: string): void;
