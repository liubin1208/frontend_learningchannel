/**
 * 找单身狗
 * nums数组中包含1个或多个正整数
 * 其他的数字都出现2次
 * 只有一个数字只出现了1次
 * 找出只出现了1次的数字
 */
function uniqueNumber(nums) {
  // var result = 0;
  // for (var i = 0; i < nums.length; i++) {
  //   result = result ^ nums[i];
  // }
  // return result;
  return nums.reduce((a, b) => a ^ b, 0);
}

console.log(uniqueNumber([1, 3, 1, 2, 2, 7, 3, 6, 7]));
