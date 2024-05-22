var o = (function () {
  var obj = {
    a: 1,
    b: 2,
  };
  Object.setPrototypeOf(obj, null);
  return {
    get: function (k) {
      return obj[k];
    },
  };
})();

// 如何在不改变上面代码的情况下
// 修改 obj 对象
Object.defineProperty(Object.prototype, 'abc', {
  get() {
    return this;
  },
});
var obj2 = o.get('abc');
obj2.c = 2;
obj2.a = 'aasdfasddf';

console.log(o.get('a'));
console.log(o.get('c'));
