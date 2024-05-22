const cache = new WeakMap();

function deepClone(value) {
  if (typeof value !== 'object' || value === null) {
    return value;
  }
  // value 是对象
  if (cache.has(value)) {
    return cache.get(value);
  }
  const result = Array.isArray(value) ? [] : {};
  Object.setPrototypeOf(result, Object.getPrototypeOf(value));
  cache.set(value, result);
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      result[key] = deepClone(value[key]);
    }
  }
  return result;
}
class Test {
  constructor() {
    this.a = 1;
    this.b = 2;
  }

  c() {
    console.log('c');
  }
}
Test.prototype.d = 1;
const obj = new Test();
obj.h = obj;
// console.log(obj);
console.log(deepClone(obj));
