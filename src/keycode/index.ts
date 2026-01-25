/**
 * @module 键盘
 */
import { KEYCODE } from "@/constants";

/**
 * 根据keycode获得键名
 * @param  {number} keycode 键值
 * @returns {string} 返回键名
 */
export function getKeyName(keycode: number) {
  return KEYCODE[keycode];
}

/**
 * 根据keyname获得键值
 * @param  {string} keyname
 * @returns {number} 返回键值
 */
export function getKeyCode(keyname: string) {
  for (const key in KEYCODE) {
    if (KEYCODE[key] === keyname) {
      return key;
    }
  }
}
