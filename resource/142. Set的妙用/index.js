// 两个数组的并集、交集、差集
// 不能出现重复项，得到的结果是一个新数组
const arr1 = [33, 22, 55, 33, 11, 33, 5];
const arr2 = [22, 55, 77, 88, 88, 99, 99];

// 并集
const union = [...new Set([...arr1, ...arr2])];
console.log(union);

// 交集
const cross = [...new Set(arr1)].filter((it) => arr2.includes(it));
console.log(cross);

// 差集
const diff = union.filter((it) => !cross.includes(it));
console.log(diff);
