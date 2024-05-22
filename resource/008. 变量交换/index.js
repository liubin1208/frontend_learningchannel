var a = 6;
var b = 5;
// 如何不借助第三个变量完成上面的交换
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log(a, b);

[b, a] = [a, b];
console.log(a, b);
