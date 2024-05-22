const add = new Proxy(
  {
    _store: 0,
  },
  {
    get(target, p, receiver) {
      if (p === Symbol.toPrimitive) {
        return () => {
          return target._store;
        };
      }
      target._store += +p;
      return receiver;
    },
  }
);
console.log(add[2][3][10][11][3] + 100);
