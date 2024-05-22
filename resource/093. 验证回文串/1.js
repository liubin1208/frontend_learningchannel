/**
 * 验证回文串
 * 回文串：一个字符串，忽略大小写和非字母数字，正着读和反着读都是一样的
 * 例如：A man, a plan, a canal: Panama
 */
var isPalindrome = function (s) {
  const isValid = (c) => (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
  let i = 0,
    j = s.length - 1;
  while (j >= i) {
    const left = s[i].toLowerCase(),
      right = s[j].toLowerCase();
    if (!isValid(left)) {
      i++;
    } else if (!isValid(right)) {
      j--;
    } else if (left === right) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome('')); // true
console.log(isPalindrome(' ')); // true
console.log(isPalindrome('1')); // true
console.log(isPalindrome('1a')); // false
console.log(isPalindrome('1a1')); // true
console.log(isPalindrome('1a 1')); // true
console.log(isPalindrome('1a   1')); // true
console.log(isPalindrome('1a   1a')); // false
console.log(isPalindrome('8,8')); // true
console.log(isPalindrome('9,8')); // false
