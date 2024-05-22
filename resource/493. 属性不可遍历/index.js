var obj = {
  a: 1,
  b: 2,
};

// Object.prototype.c = function () {
//   console.log('c');
// };

Object.defineProperty(Object.prototype, 'c', {
  value: function () {
    console.log('c');
  },
  enumerable: false,
});

// console.log(desc);

for (var key in obj) {
  console.log(key);
}
