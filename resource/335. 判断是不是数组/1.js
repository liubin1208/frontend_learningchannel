function isArray(arr) {
  // return Object.prototype.toString.call(arr) === '[object Array]';
  return arr instanceof Array;
}
class A extends Array {}
const Array1 = window.Array;
const iframe = document.querySelector('iframe');
const Array2 = iframe.contentWindow.Array;
const arr = {};
Object.setPrototypeOf(arr, Array.prototype);
console.log(Array.isArray(arr));

// const arr = [1, 2, 3, 4];
// const obj = {};
// Object.setPrototypeOf(obj, Array.prototype);
// console.log(isArray(obj));
// console.log(Object.prototype.toString.call(obj));
