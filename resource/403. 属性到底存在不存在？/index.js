const obj = {};
Object.defineProperty(obj, 'a', {
  value: 1,
  enumerable: false,
});

console.log('------------------');
console.log('方式1:对比undefined');
if (obj.a !== undefined) {
  console.log('存在');
} else {
  console.log('不存在');
}

console.log('------------------');
console.log('方式2:使用Object.keys');
if (Object.keys(obj).includes('a')) {
  console.log('存在');
} else {
  console.log('不存在');
}

console.log('------------------');
console.log('方式3:使用hasOwnProperty');
if (obj.hasOwnProperty('a')) {
  console.log('存在');
} else {
  console.log('不存在');
}

console.log('------------------');
console.log('方式4:使用in');
if ('a' in obj) {
  console.log('存在');
} else {
  console.log('不存在');
}
