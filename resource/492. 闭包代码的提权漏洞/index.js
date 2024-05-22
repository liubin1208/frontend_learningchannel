var o = (function () {
  var obj = {
    a: 1,
    b: 2,
  };
  // Object.setPrototypeOf(obj, null);
  return {
    get: function (k) {
      if (obj.hasOwnProperty(k)) {
        return obj[k];
      }
    },
  };
})();

// 如何在不改变上面代码的情况下
// 修改 obj 对象
Object.defineProperty(Object.prototype, 'hack', {
  get() {
    return this;
  },
});
const obj = o.get('hack');
obj.c = 'heiheihei';

console.log(o.get('c'));
