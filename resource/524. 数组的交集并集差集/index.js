// 两个数组的并集、交集、差集
// 不能出现重复项，得到的结果是一个新数组
const arr1 = [33, 22, 22, 55, 33, 11, 33, 5];
const arr2 = [22, 22, 55, 77, 88, 88, 99, 99];

const union = Array.from(new Set([...arr1, ...arr2]));

const cross = Array.from(new Set(arr1.filter((item) => arr2.includes(item))));

const diff = Array.from(new Set(union.filter((item) => !cross.includes(item))));

console.log(diff);
