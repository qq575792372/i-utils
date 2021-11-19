export function toString(val) {
  console.log("toString", val);
}
export function toNumber(val) {
  console.log("toNumber", val);
  toString(val);
}

// export default {
//   toString(val) {
//     console.log("toString", val);
//   },
//   toNumber(val) {
//     console.log("toNumber", val);
//   },
// };
