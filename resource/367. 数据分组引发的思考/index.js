const people = [
  { name: 'Alice', age: 30, sex: 'female' },
  { name: 'Bob', age: 25, sex: 'male' },
  { name: 'Charlie', age: 30, sex: 'male' },
  { name: 'Diana', age: 25, sex: 'female' },
  { name: 'Eva', age: 25, sex: 'female' },
  { name: 'Frank', age: 25, sex: 'male' },
  {
    name: 'Grace',
    age: 20,
    sex: 'female',
    address: {
      province: '广东',
      city: '深圳',
    },
  },
];

function groupBy(arr, generateKey) {
  if (typeof generateKey === 'string') {
    generateKey = (item) => item[generateKey];
  }
  const result = {};
  for (const person of arr) {
    const key = generateKey(person);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(person);
  }
  return result;
}

// 按照年龄分组
const result1 = groupBy(people, 'age');
console.log(result1);
// 按照性别分组
const result2 = groupBy(people, 'sex');
console.log(result2);
// 按照性别和年龄分组
const result3 = groupBy(people, (item) => `${item.sex}-${item.age}`);
console.log(result3);
// 按照奇数偶数分组
const arr = [3, 7, 1, 4, 8, 2];
const result4 = groupBy(arr, (item) => (item % 2 === 0 ? '偶数' : '奇数'));
console.log(result4);
