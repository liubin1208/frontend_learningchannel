/**
 * 判断是否是奇数
 * @param {number} n
 */
function isOdd(n) {
  if (typeof n !== 'number') {
    throw new TypeError(`${n} is not a number`);
  }
  return n % 2 === 1 || n % 2 === -1;
}

console.log(isOdd(3.1));

/* 
a % b = a - b * p
3.1 % 2 = 3.1 - 2 * 1 = 1.1
-5 % 3 = -5 - 3 * (-1) = -2
p: a/b的整数部分

a mod b = a - b * p
p: a/b向下取整
-5 mod 3 = -5 - 3 *(-2) = 1
*/
