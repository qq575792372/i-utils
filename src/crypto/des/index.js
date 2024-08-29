/* 对称加密 DES */
import DES from "./des.js";

export function encrypt(str, key) {
  let des = new DES(key, str);
  return des.encrypt(key, str);
}

export function decrypt(str, key) {
  let des = new DES(key, str);
  return des.decrypt(key, str);
}
