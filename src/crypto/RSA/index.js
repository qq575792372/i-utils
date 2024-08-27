import * as RSA from "./RSA.js";

export function rsa(str) {
  return RSA.RSAEncrypt(str);
}
