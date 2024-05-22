/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  const tails = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > tails[tails.length - 1]) {
      tails.push(nums[i]);
    } else {
      const index = getFirstGreaterIndex(nums[i]);
      tails[index] = nums[i];
    }
  }
  return tails.length;

  function getFirstGreaterIndex(target) {
    // for (let i = 0; i < tails.length; i++) {
    //   if (tails[i] >= target) {
    //     return i;
    //   }
    // }
    let i = 0,
      j = tails.length - 1;
    while (i < j) {
      const mid = Math.floor((i + j) / 2);
      if (tails[mid] >= target) {
        j = mid;
      } else {
        i = mid + 1;
      }
    }
    return i;
  }
};
