/* 剪切板 */
import { blobToText } from "../file/index.js";

/**
 * 获得剪切板数据
 * @description 获得的剪切板的数据是会返回多个可用的MIME类型，比如是纯文本就返回一个['text/plain']，是复制的html则会返回两个可用的['text/plain','text/html']，是复制的图片则是['image/png']
 * @returns {Promise} 返回剪切板的数据，根据需要用对应MIME类型的数据
 */
export function getClipboard() {
  return new Promise((resolve, reject) => {
    if (window.navigator.clipboard) {
      window.navigator.clipboard.read().then((clipboardItems) => {
        let list = [];
        for (let item of clipboardItems) {
          for (let type of item.types) {
            item.getType(type).then(async (blob) => {
              // 文本类型，可以直接输出为字符串
              if (blob.type.includes("text")) {
                let text = await blobToText(blob);
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

export function setClipboard(data) {
  return new Promise((resolve, reject) => {
    // 现代浏览器
    if (window.navigator.clipboard) {
      console.log("地方撒地方十多分", data);
      let item = null;
      // 是文本类型
      if (typeof data === "string") {
        let blob = new Blob([data], { type: "text/plain" });
        item = new window.ClipboardItem({
          ["text/plain"]: blob,
        });
      }
      // 其他文件类型
      else {
        item = new window.ClipboardItem({ [data.type]: data });
      }
      console.log("fsfsfsfsf", item);
      window.navigator.clipboard.write([item]).then(
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

export function setClipboardText(text) {
  return new Promise((resolve, reject) => {
    // 现代浏览器
    if (window.navigator.clipboard) {
      window.navigator.clipboard.writeText(text).then(
        (success) => {
          resolve(text);
        },
        (failed) => {
          reject(failed);
        },
      );
    } else {
      console.warn("not support navigator clipboard!");
    }
  });
}

/**
 * 清空剪切板
 * @returns {Promise} 返回promise对象
 */
export function clearClipboard() {
  return new Promise(async (resolve, reject) => {
    await setClipboardText("");
    resolve(true);
  });
}
