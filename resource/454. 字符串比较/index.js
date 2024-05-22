/**
 * 比较两个字符串的大小
 * 两个字符串都是用-连接的数字，比如1-2-33-41-5
 * 比较方式是从左到右，依次比较每个数字的大小，遇到相等的数字继续往后比较，遇到不同的数字直接得到比较结果
 * s1 > s2 return 1
 * s1 < s2 return -1
 * s1 === s2 return 0
 */
function compare(s1, s2) {
  const iter1 = walk(s1);
  const iter2 = walk(s2);
  while (1) {
    // 取出s1的下一个数字
    const n1 = iter1.next();
    // 取出s2的下一个数字
    const n2 = iter2.next();
    if (n1.done && n2.done) {
      return 0;
    } else if (n1.done) {
      return -1;
    } else if (n2.done) {
      return 1;
    } else if (n1.value > n2.value) {
      return 1;
    } else if (n1.value < n2.value) {
      return -1;
    }
  }
}

function* walk(str) {
  let n = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '-') {
      if (n) {
        yield Number(n);
        n = '';
      }
    } else {
      n += char;
    }
  }
  if (n) {
    yield Number(n);
  }
}

const iterator = walk('1-2-33-41-5');
// console.log(iterator.next()); // {value: 1, done: false}
// console.log(iterator.next()); // {value: 2, done: false}
// console.log(iterator.next()); // {value: 33, done: false}
// console.log(iterator.next()); // {value: 41, done: false}
// console.log(iterator.next()); // {value: 5, done: false}
// console.log(iterator.next()); // {value: undefined, done: true}
