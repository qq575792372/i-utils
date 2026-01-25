/**
 * @module 浏览器剪切板
 */

import { blobToText } from "@/file";

/**
 * 获得剪切板数据
 * @description 获得的剪切板的数据是会返回多个可用的MIME类型，比如是纯文本就返回一个['text/plain']，是复制的html则会返回两个可用的['text/plain','text/html']，是复制的图片则是['image/png']
 * @returns {Promise} 返回剪切板的数据，是数组形式，如果是文本则是字符串，否则是blob数据
 */
export function getClipboard() {
  return new Promise((resolve, reject) => {
    if (window.navigator.clipboard) {
      window.navigator.clipboard.read().then((clipboardItems) => {
        const list: any[] = [];
        for (const item of clipboardItems) {
          for (const type of item.types) {
            item.getType(type).then(async (blob) => {
              // 文本类型，可以直接输出为字符串
              if (blob.type.includes("text")) {
                const text = await blobToText(blob);
                list.push({ type: blob.type, data: text });
              }
              // 图片和其他文件类型，返回blob对象
              else {
                list.push({ type: blob.type, data: blob });
              }
            });
          }
        }
        resolve(list);
      });
    } else {
      console.warn("not support navigator clipboard!");
    }
  });
}

/**
 * 获得剪切板文本
 * @returns {Promise} 返回剪切板文本
 */
export function getClipboardText() {
  return new Promise((resolve, reject) => {
    if (window.navigator.clipboard) {
      window.navigator.clipboard
        .readText()
        .then((text) => {
          resolve(text);
        })
        .catch((error) => {
          reject(error);
        });
    } else {
      console.warn("not support navigator clipboard!");
    }
  });
}

/**
 * 设置剪切板数据
 * @description 可以设置文本或者blob类型的数据
 * @param {string|Blob} data 写入的数据，可以是文本或blob数据
 * @returns {Promise} 返回结果
 */
export function setClipboard(data: string | Blob) {
  return new Promise((resolve, reject) => {
    // 现代浏览器
    if (window.navigator.clipboard) {
      let clipboardItem = null;
      // 是文本类型
      if (typeof data === "string") {
        const blob = new Blob([data], { type: "text/plain" });
        clipboardItem = new window.ClipboardItem({
          ["text/plain"]: blob,
        });
      }
      // 其他文件类型
      else {
        clipboardItem = new window.ClipboardItem({ [data.type]: data });
      }

      // 写入到剪切板中
      window.navigator.clipboard.write([clipboardItem]).then(
        (success) => {
          resolve(true);
        },
        (failed) => {
          reject(false);
        },
      );
    } else {
      console.warn("not support navigator clipboard!");
    }
  });
}

/**
 * 设置剪切板文本
 * @param {string} text 写入的文本
 * @returns {Promise} 返回结果
 */
export function setClipboardText(text: string) {
  return new Promise((resolve, reject) => {
    // 现代浏览器
    if (window.navigator.clipboard) {
      window.navigator.clipboard.writeText(text).then(
        (success) => {
          resolve(true);
        },
        (failed) => {
          reject(false);
        },
      );
    } else {
      console.warn("not support navigator clipboard!");
    }
  });
}

/**
 * 清空剪切板
 * @returns {Promise} 返回结果
 */
export function clearClipboard() {
  return new Promise((resolve, reject) => {
    setClipboardText("")
      .then(() => resolve(true))
      .catch(reject);
  });
}
