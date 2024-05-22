// 可新增
const CREATE = 0b0001;
// 可删除
const DELETE = 0b0010;
// 可修改
const UPDATE = 0b0100;
// 可浏览详情
const DETAIL = 0b1000;

const result = CREATE | DETAIL;

console.log((result & DELETE) === DELETE);
