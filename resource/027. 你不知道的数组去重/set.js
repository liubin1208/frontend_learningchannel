// 方式1：使用ES6的Set和展开运算符去重
function uniqueArray(arr) {
  return [...new Set(arr)];
}

console.log(uniqueArray([
  { id: 1, name: 'a' },
  { id: 1, name: 'a' }
]))