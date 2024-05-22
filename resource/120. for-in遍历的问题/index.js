var obj = {
  a: 1,
  b: 2,
};
Object.defineProperty(Object.prototype, 'c', {
  value: function () {
    console.log('c');
  },
  writable: true,
  enumerable: false,
  configurable: true,
});
// Object.prototype.c = function () {
//   console.log('c');
// };

for (var key in obj) {
  console.log(key);
}
// 属性描述符
// var desc = Object.getOwnPropertyDescriptor(Object.prototype, 'hasOwnProperty');
// console.log(desc);
