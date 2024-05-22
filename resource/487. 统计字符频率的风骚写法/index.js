// 统计下面字符串中每个字符出现的频率
const str = 'fgasdfadfdasd';
const result = [...str].reduce((r, c) => (r[c]++ || (r[c] = 1), r), {});
console.log(result);

// const result = {};
// for (const c of str) {
//   if (result[c]) {
//     result[c]++;
//   } else {
//     result[c] = 1;
//   }
// }
// console.log(result);
