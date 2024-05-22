// 数组求和，不允许使用循环，不允许使用标准库的函数

function sum(nums) {
  function f(i) {
    return i >= nums.length ? 0 : nums[i] + f(i + 1);
  }
  return f(0);
}

console.log(sum([]), sum([1, 2, 3]));
