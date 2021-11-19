import { toString1, toNumber1 } from "../array";
const DEFAULT = {
  model: 1,
};
export function toString(val) {
  console.log("toString", val, DEFAULT);

  toString1(val);
}
export function toNumber(val) {
  console.log("toNumber", val);
  toNumber1(val);
}

// export default {
//   toString(val) {
//     console.log("toString", val);
//   },
//   toNumber(val) {
//     console.log("toNumber", val);
//   },
// };
