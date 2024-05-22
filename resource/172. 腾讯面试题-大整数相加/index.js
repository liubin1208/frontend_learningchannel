/**
 * 腾讯面试题
 * 两个超过整数存储范围的大正整数求和
 * @param {String} a
 * @param {String} b
 */
function sum(a, b) {
  let result = '';
  const len = Math.max(a.length, b.length);
  a = a.padStart(len, '0');
  b = b.padStart(len, '0');
  let carry = 0;
  for (let i = len - 1; i >= 0; i--) {
    const n = +a[i] + +b[i] + carry;
    carry = Math.floor(n / 10);
    result = (n % 10) + result;
  }
  if (carry) {
    result = '1' + result;
  }
  return result;
}

console.log(sum('2342341234124123', '8342341234124123'));
