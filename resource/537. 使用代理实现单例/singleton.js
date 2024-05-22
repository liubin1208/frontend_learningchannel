export function singleton(className) {
  let ins = null;
  const proxy = new Proxy(className, {
    construct(target, args) {
      console.log('proxy construct');
      if (!ins) {
        ins = Reflect.construct(target, args);
      }
      return ins;
    },
  });
  className.prototype.constructor = proxy;
  return proxy;
}
