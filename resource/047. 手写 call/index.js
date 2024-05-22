/**
 * 手写 call 函数
 * 不得使用 apply、bind 辅助
 */
Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx);
  var key = Symbol('temp');
  Object.defineProperty(ctx, key, {
    enumerable: false,
    value: this,
  });
  var result = ctx[key](...args);
  delete ctx.fn;
  return result;
};

function method(a, b) {
  console.log(this, a, b);
  return a + b;
}

method.myCall('aa', 2, 3);
