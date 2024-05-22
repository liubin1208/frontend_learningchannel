/**
 * 根据数字按键，得到所有字母排列组合
 * @param {string} digits 数字按键，例如：‘23’
 * @return {string[]} 按键的所有排列组合
 */
function keyboardMap(digits) {
  var map = [, , 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  var result = [];
  for (var i = 0; i < digits.length; i++) {
    result = _compose(result, map[digits[i]]);
  }

  function _compose(arr1, arr2) {
    var r = []; // 组合结果
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        r.push(arr1[i] + arr2[j]);
      }
    }
    return r;
  }
  return result;
}

console.log(keyboardMap('2345'));
