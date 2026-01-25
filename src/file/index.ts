/**
 * @module 文件
 */
import { isEmpty } from "@/validate";

/* 文件信息处理 */
/**
 * 格式化文件大小自动转为 B，KB，MB，GB
 * @param {number} size 文件的大小，单位byte字节
 * @returns {string} 返回格式化后的字符串
 */
export function formatFileSize(size: number) {
  if (isEmpty(size)) return "0B";
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
 * @param {string} fileName 文件的全名称，例如：测试图片.jpg
 * @returns {string} 返回文件的名称
 */
export function getFileName(fileName: string) {
  if (isEmpty(fileName)) return;
  return fileName.substring(0, fileName.lastIndexOf("."));
}

/**
 * 获得文件后缀名
 * @param {string} value 文件地址路径或者文件全名称，例如：http://xxx.com/mytest.jpg，测试图片.jpg
 * @returns {string} 返回文件后缀名
 */
export function getFileSuffix(value: string) {
  if (isEmpty(value)) return;
  return value.substring(value.lastIndexOf(".") + 1).toLowerCase();
}

/* 文件转换 */
/**
 * file转blob
 * @param {File} file file文件
 * @returns {Promise} 返回Promise的blob
 */
export function fileToBlob(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    // 读取解析文件
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    // 加载成功
    reader.onload = (e) => {
      const result = e.target?.result as ArrayBuffer;
      const blob = new Blob([result], { type: file.type });
      resolve(blob);
    };
    // 加载失败
    reader.onerror = function (err) {
      console.error(err);
      reject(err);
    };
  });
}

/**
 * file转base64
 * @param {File} file file文件
 * @returns {Promise} 返回Promise的base64
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    // 读取解析文件
    const reader = new FileReader();
    reader.readAsDataURL(file);

    // 加载成功
    reader.onload = function (e) {
      const result = e.target?.result as string;
      resolve(result);
    };
    // 加载失败
    reader.onerror = function (err) {
      console.error(err);
      reject(err);
    };
  });
}

/**
 * file转url
 * @description 适用于本地上传图片并预览，需要注意 URL.revokeObjectURL(file) 内存释放
 * @param {File} file file文件
 * @returns {Promise} 返回Promise的url
 */
export function fileToUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      const url = URL.createObjectURL(file);
      resolve(url);
    } catch (err) {
      // 捕捉异常
      console.error(err);
      reject(err);
    }
  });
}

/**
 * url赚file
 * @param {string} url url地址
 * @returns {Promise} 返回Promise的file
 */
export function urlToFile(url: string): Promise<File> {
  return new Promise((resolve, reject) => {
    try {
      window.fetch(url).then((res) => {
        if (res.status === 200) {
          res.blob().then((blob) => {
            blobToFile(blob).then((file) => {
              resolve(file);
            });
          });
        }
      });
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
}

/**
 * blob转file
 * @param {Blob} blob blob数据
 * @param {string} fileName 文件名称，默认以时间戳命名
 * @returns {Promise} 返回Promise的file
 */
export function blobToFile(blob: Blob, fileName: string = String(Date.now())): Promise<File> {
  return new Promise((resolve, reject) => {
    try {
      const mime = blob.type;
      const fileSuffix = mime.split("/")[1];
      const file = new File([blob], `${Date.now()}.${fileSuffix}`, {
        type: mime,
        lastModified: Date.now(),
      });
      resolve(file);
    } catch (err) {
      // 捕捉异常
      console.error(err);
      reject(err);
    }
  });
}

/**
 * blob转文本
 * @param {Blob} blob blob数据
 * @returns {Promise} 返回Promise的文本
 */
export function blobToText(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const result = e.target?.result as string;
      resolve(result);
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.readAsText(blob);
  });
}

/**
 * blob转base64
 * @param {Blob} blob blob数据
 * @returns {Promise} 返回Promise的base64
 */
export function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    // 读取解析文件
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    // 加载成功
    reader.onload = function (e) {
      const result = e.target?.result as string;
      resolve(result);
    };
    // 加载失败
    reader.onerror = function (err) {
      console.error(err);
      reject(err);
    };
  });
}

/**
 * base64转file
 * @param {string} base64 base64数据
 * @param {string} fileName 文件名称，默认以时间戳命名
 * @returns {Promise} 返回Promise的file
 */
export function base64ToFile(base64: string, fileName: string = String(Date.now())): Promise<File> {
  return new Promise((resolve, reject) => {
    try {
      const arr = base64.split(",");
      const mimeMatch = arr[0] ? arr[0].match(/:(.+?);/) : null;
      const mime = mimeMatch ? mimeMatch[1] : "";
      const fileSuffix = mime.split("/")[1];
      const bstr = window.atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      resolve(new File([u8arr], `${fileName}.${fileSuffix}`, { type: mime }));
    } catch (err) {
      // 捕捉异常
      console.error(err);
      reject(err);
    }
  });
}

/**
 * base64转成blob
 * @param {string} base64 base64数据
 * @returns {Promise} 返回Promise的blob
 */
export function base64ToBlob(base64: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
    try {
      const arr = base64.split(",");
      const mimeMatch = arr[0] ? arr[0].match(/:(.+?);/) : null;
      const mime = mimeMatch ? mimeMatch[1] : "";
      const bstr = window.atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      resolve(new Blob([u8arr], { type: mime }));
    } catch (err) {
      // 捕捉异常
      console.error(err);
      reject(err);
    }
  });
}

/**
 * 图片url转base64
 * @param {string} imgUrl 图片url地址
 * @returns {Promise} 返回Promise的base64
 */
export function urlToBase64(imgUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // 设置图片
    const img = new Image();
    img.src = imgUrl;

    // 加载成功
    img.onload = function () {
      // 画图
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      if (context) {
        context.drawImage(img, 0, 0, img.width, img.height);
      }
      // 转为base64
      const base64 = canvas.toDataURL("image/png");
      resolve(base64);
    };
    // 加载失败
    img.onerror = function (err) {
      console.error(err);
      reject(err);
    };
  });
}

/* 下载文件 */
/**
 * 下载blob格式的文件
 * @param {Blob} blob blob数据
 * @param {string} fileName 下载的文件名，不写后缀名则默认为原文件类型
 */
export function downloadBlobFile(blob: Blob, fileName: string) {
  try {
    const objUrl = window.URL.createObjectURL(blob);
    const link = window.document.createElement("a");
    link.download = fileName;
    link.href = objUrl;
    link.click();
    URL.revokeObjectURL(objUrl);
  } catch (error) {
    console.error(error);
  }
}

/**
 * 通过文件url地址下载
 * @param {string} fileUrl url文件地址
 * @param {string} fileName 下载的文件名，不写后缀名则默认为原文件类型
 */
export function downloadFileUrl(fileUrl: string, fileName: string) {
  try {
    const link = window.document.createElement("a");
    link.download = fileName;
    link.href = fileUrl;
    link.target = "_blank";
    // 生成节点点击
    window.document.body.appendChild(link);
    link.click();
    // 点击后移除节点
    window.document.body.removeChild(link);
  } catch (error) {
    console.error(error);
  }
}
