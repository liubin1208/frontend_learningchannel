export function singleton(className) {
  let ins;
  return new Proxy(className, {
    construct(target, args) {
      if (!ins) {
        ins = new target(...args);
      }
      return ins;
    },
  });
}
