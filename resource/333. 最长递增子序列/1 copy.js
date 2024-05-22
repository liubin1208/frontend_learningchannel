/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  const tail = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > tail[tail.length - 1]) {
      tail.push(nums[i]);
    } else {
      const index = findFirstGT(nums[i]);
      tail[index] = nums[i];
    }
  }
  return tail.length;
  function findFirstGT(target) {
    let i = 0,
      j = tail.length - 1;
    while (i < j) {
      const mid = Math.floor((i + j) / 2);
      if (tail[mid] < target) {
        i = mid + 1;
      } else {
        j = mid;
      }
    }
    return i;
  }
};
