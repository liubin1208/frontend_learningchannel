function vortex(n, m) {
  const nums = new Array(n).fill(0).map(() => new Array(m).fill(0));
  let i = 0,
    j = 0,
    stepi = 1,
    stepj = 0;
  let count = 1;
  // 是否有障碍
  function hasBlock() {
    return !nums[j] || nums[j][i] !== 0;
  }
  while (1) {
    nums[j][i] = count++;
    // 改动i和j
    i += stepi;
    j += stepj;
    if (hasBlock()) {
      i -= stepi;
      j -= stepj;
      // 转弯
      if (stepj === 0) {
        stepj = stepi;
        stepi = 0;
      } else {
        stepi = -stepj;
        stepj = 0;
      }
      i += stepi;
      j += stepj;
    }
    // 结束
    if (hasBlock()) {
      break;
    }
  }
  return nums;
}

console.log(vortex(5, 6));
