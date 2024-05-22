// 手写 bind
Function.prototype.myBind = function (ctx) {
  var fn = this;
  return function () {
    return fn.apply(ctx, arguments);
  };
};

function fn(a, b) {
  console.log(this, a, b);
}

var newFn = fn.bind({}, 1);
newFn(3);
