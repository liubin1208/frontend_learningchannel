const obj = {
  a: 1,
  b: 2,
  c: {
    a: 1,
    b: 2,
  },
};

// 观察
function _isObject(v) {
  return typeof v === 'object' && v != null;
}
function observe(obj) {
  const proxy = new Proxy(obj, {
    get(target, k) {
      let v = target[k];
      if (_isObject(v)) {
        v = observe(v);
      }
      console.log(k, '读取');
      return v;
    },
    set(target, k, val) {
      if (target[k] !== val) {
        target[k] = val;
        console.log(k, '更改');
      }
    },
  });
  return proxy;
}
const proxy = observe(obj);

proxy.a = 3;
proxy.b;
proxy.asdfasdfasfd;
