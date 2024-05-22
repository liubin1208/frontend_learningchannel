// 统计下面字符串中每个字符出现的频率
var str = 'fgasdfadfdasd';
var result = str.split('').reduce((a, b) => (a[b]++ || (a[b] = 1), a), {});
console.log(result);

// var result = str.split('').reduce((a, b) => (a[b]++ || (a[b] = 1), a), {});
// console.log(result);

// var arr = [3, 1, 2, 4];
// var result = arr.reduce(function (a, b) {
//   return a + b;
// }, 0);
// console.log(result);
