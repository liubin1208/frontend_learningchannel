// 解法 1
Object.prototype[Symbol.iterator] = function () {
  return Object.values(this)[Symbol.iterator]();
};

// 解法 2
Object.prototype[Symbol.iterator] = function* () {
  yield* Object.values(this);
};

// 让下面的代码成立
var [a, b] = { a: 1, b: 2 };
