const obj = {
  a: 1,
  b: 2,
  c: {
    a: 1,
    b: 2,
  },
};
function _isObject(v) {
  return typeof v === 'object' && v != null;
}
function observe(obj) {
  for (const k in obj) {
    let v = obj[k];
    if (_isObject(v)) {
      observe(v);
    }
    Object.defineProperty(obj, k, {
      get() {
        console.log(k, '读取');
        return v;
      },
      set(val) {
        if (val !== v) {
          console.log(k, '更改');
          v = val;
        }
      },
    });
  }
}
// 观察
observe(obj);

obj.c.a = 3;
delete obj.a;
