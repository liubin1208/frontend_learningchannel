function createOverload() {
  const fnMap = new Map();
  function overload(...args) {
    const key = args.map((it) => typeof it).join(',');
    const fn = fnMap.get(key);
    if (!fn) {
      throw new TypeError('没有找到对应的实现');
    }
    return fn.apply(this, args);
  }
  overload.addImpl = function (...args) {
    const fn = args.pop();
    if (typeof fn !== 'function') {
      throw new TypeError('最后一个参数必须是函数');
    }
    const key = args.join(',');
    fnMap.set(key, fn);
  };
  return overload;
}

export default createOverload;
