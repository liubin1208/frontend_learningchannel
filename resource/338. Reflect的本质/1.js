const obj = {
  a: 1,
  b: 2,
  [Symbol('d')]: 4,
};
Object.defineProperty(obj, 'c', {
  value: 3,
  enumerable: false,
});
console.log(Reflect.ownKeys(obj));
// console.log(Object.keys(obj));

// const p = new Proxy(obj, {
//   get(target, key, receiver) {
//     console.log('read', key);
//     return Reflect.get(target, key, receiver);
//   },
// });
// p.c;

// console.log(obj.c);
// const r = Reflect.get(obj, 'c', { a: 3, b: 4 });
// console.log(r);
