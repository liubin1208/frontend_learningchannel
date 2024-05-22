/**
 * 判断对象中是否存在某个属性
 * @param {Object} obj 对象
 * @param {String} key 属性名
 */
function hasProperty(obj, key) {
  return key in obj;
}
var obj = { a: undefined, b: 1 };
Object.defineProperty(obj, 'c', {
  enumerable: false,
  value: 1,
});

console.log(hasProperty(obj, 'toString'));

console.log(obj.toString);
