import { isEmpty } from "../validate";

/* 文件信息处理 */
/**
 * 格式化文件大小自动转为 B，KB，MB，GB
 * @param {Byte} size 文件的大小，单位byte字节
 * @returns {String} 返回格式化后的字符串
 */
export function formatFileSize(size) {
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
 * @param {String} fileName 文件的全名称，例如：测试图片.jpg
 * @returns {String} 返回文件的名称
 */
export function getFileName(fileName) {
  if (isEmpty(fileName)) return;
  return fileName.substring(0, fileName.lastIndexOf("."));
}

/**
 * 获得文件后缀名
 * @param {String} value 文件地址路径或者文件全名称，例如：http://xxx.com/mytest.jpg，测试图片.jpg
 * @returns {String} 返回文件后缀名
 */
export function getFileSuffix(value) {
  if (isEmpty(value)) return;
  return value.substring(value.lastIndexOf(".") + 1).toLowerCase();
}

/* 文件转换 */
/**
 * file转blob
 * @param {File} file file文件
 * @returns {Promise} 返回Promise的blob
 */
export function fileToBlob(file) {
  return new Promise((resolve, reject) => {
    // 读取解析文件
    let reader = new FileReader();
    reader.readAsDataURL(file);

    // 加载成功
    reader.onload = (e) => {
      const blob = new Blob([e.target.result], { type: file.type });
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
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    // 读取解析文件
    let reader = new FileReader();
    reader.readAsDataURL(file);

    // 加载成功
    reader.onload = function (e) {
      resolve(e.target.result);
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
export function fileToUrl(file) {
  return new Promise((resolve, reject) => {
    try {
      resolve(URL.createObjectURL(file));
    } catch (err) {
      // 捕捉异常
      console.error(err);
      URL.revokeObjectURL(file);
      reject(err);
    }
  });
}

/**
 * blob转file
 * @param {Blob} blob blob数据
 * @param {String} fileName 文件名称，默认以时间戳命名
 * @returns {Promise} 返回Promise的file
 */
export function blobToFile(blob, fileName = Date.now()) {
  return new Promise((resolve, reject) => {
    try {
      const mime = blob.type;
      const size = blob.size;
      const fileSuffix = mime.split("/")[1];
      const file = new File([blob], `${Date.now()}.${fileSuffix}`, {
        type: mime,
        size: size,
        name: `${fileName}.${fileSuffix}`,
        lastModified: Date.now(),
        lastModifiedDate: new Date(),
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
 * blob转base64
 * @param {Blob} blob blob数据
 * @returns {Promise} 返回Promise的base64
 */
export function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    // 读取解析文件
    let reader = new FileReader();
    reader.readAsDataURL(blob);

    // 加载成功
    reader.onload = function (e) {
      resolve(e.target.result);
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
 * @param {Base64} base64 base64数据
 * @param {String} fileName 文件名称，默认以时间戳命名
 * @returns {Promise} 返回Promise的file
 */
export function base64ToFile(base64, fileName = Date.now()) {
  return new Promise((resolve, reject) => {
    try {
      const arr = base64.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
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
 * @param {Base64} base64 base64数据
 * @returns {Promise} 返回Promise的blob
 */
export function base64ToBlob(base64) {
  return new Promise((resolve, reject) => {
    try {
      const arr = base64.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
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
 * @param {String} imgUrl 图片url地址
 * @returns {Promise} 返回Promise的base64
 */
export function urlToBase64(imgUrl) {
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
      context.drawImage(img, 0, 0, img.width, img.height);
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
 * @param {String} fileName 下载的文件名，不写后缀名则默认为原文件类型
 */
export function downloadBlobFile(blob, fileName) {
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
 * @param {String} fileUrl url文件地址
 * @param {String} fileName 下载的文件名，不写后缀名则默认为原文件类型
 */
export function downloadFileUrl(fileUrl, fileName) {
  try {
    const link = window.document.createElement("a");
    link.download = fileName;
    link.href = fileUrl;
    // 生成节点点击
    window.document.body.appendChild(link);
    link.click();
    // 点击后移除节点
    window.document.body.removeChild(link);
  } catch (error) {
    console.error(error);
  }
}
