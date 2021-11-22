/**
 * 格式化文件大小自动转为B，KB，MB，GB
 * @param {Byte} size 文件的大小，单位byte字节
 * @returns 返回格式化后的字符串
 */
export function formatFileSize(size) {
  if (this.isNull(size)) return "0B";
  if (size < 1024) {
    return size + "B";
  } else if (size < 1024 * 1024) {
    return (size / 1024).toFixed(2) + "KB";
  } else if (size < 1024 * 1024 * 1024) {
    return (size / (1024 * 1024)).toFixed(2) + "MB";
  } else {
    return (size / (1024 * 1024 * 1024)).toFixed(2) + "GB";
  }
}

/**
 * 获得文件名称
 * @param {*} value 文件的全名称，例如：123.jpg
 * @returns 返回文件的名称，包含后缀类型名称
 */
export function getFileName(value) {
  if (this.isNull(value) || this.isNull(value)) return;
  return value.substring(0, value.lastIndexOf("."));
}

/**
 * 获得文件后缀
 * @param {*} value 文文件的全名称，例如：123.jpg
 * @returns 返回文件后缀类型名称
 */
export function getFileSuffixName(value) {
  if (this.isNull(value)) return;
  return value.substring(value.lastIndexOf(".") + 1);
}
