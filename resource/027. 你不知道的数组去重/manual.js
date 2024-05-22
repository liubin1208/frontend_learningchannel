// 方式2：不使用标准库，完全手写去重过程
function uniqueArray(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var isFind = false;
    for (var j = 0; j < result.length; j++) {
      if (result[j] === arr[i]) {
        isFind = true;
        break;
      }
    }
    if (!isFind) {
      result.push(arr[i]);
    }
  }
  return result;
}
