import { KEYCODE } from "../constants";

/**
 * 根据keycode获得键名
 * @param  {Number} keycode 键值
 * @returns {String} 返回键名
 */
export function getKeyName(keycode) {
  if (KEYCODE[keycode]) {
    return KEYCODE[keycode];
  } else {
    console.log("Unknow Key Code: " + keycode);
    return "";
  }
}

/**
 * 根据keyname获得键值
 * @param  {Number} keyname
 * @returns {Number} 返回键值
 */
export function getKeyCode(keyname) {
  for (let key in KEYCODE) {
    if (KEYCODE[key] === keyname) {
      return key;
    }
  }
}
