Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx);
  const key = Symbol();
  Object.defineProperty(ctx, key, {
    value: this,
    enumerable: false,
  });
  const r = ctx[key](...args);
  delete ctx[key];
  return r;
};

function method(a, b) {
  console.log('args:', a, b);
  console.log('this:', this);
}

method.myCall(1, 2, 3);
