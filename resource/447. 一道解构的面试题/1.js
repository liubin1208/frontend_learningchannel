Object.prototype[Symbol.iterator] = function* () {
  yield* Object.values(this);
};
// 让下面的代码成立
var [a, b] = {
  a: 3,
  b: 4,
};
console.log(a, b);

// var arr = [1, 2, 3];
// // var [a, b] = arr;
// const iter = arr[Symbol.iterator]();
// var a = iter.next().value;
// var b = iter.next().value;
// console.log(a, b);
