const obj = {};
Object.defineProperty(obj, 'a', {
  value: 1,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
// obj.__proto__.a = undefined;

console.log(Object.keys(obj));
