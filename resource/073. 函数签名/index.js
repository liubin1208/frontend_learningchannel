/**
 * 判断一个数是不是素数
 * @param {Number} n 待判断的数
 * @return {Boolean} 判断的结果
 */
function isPrime(n) {
  n = Number(n);
  if (Number.isNaN(n)) {
    throw new TypeError(`${n} is not valid number`);
  }
  if (~~n !== n) {
    throw new Error(`${n} is not integer`);
  }
  if (n < 2) {
    return false;
  }
  const end = Math.sqrt(n);
  for (let i = 2; i <= end; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
