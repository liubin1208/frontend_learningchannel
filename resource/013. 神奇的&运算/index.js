/**
 * 判断数字 x 是否是 2 的 n 次方
 * x > 0 且为整数
 */
function isPowerOf2(x) {
  return (x & (x - 1)) === 0;
}

console.log(isPowerOf2(4));
