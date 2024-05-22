// 筛选对象属性
const pick = (obj, ...props) =>
  Object.fromEntries(Object.entries(obj).filter(([k]) => props.includes(k)));

// test
pick({ a: 1, b: 2, c: 3 }, 'a', 'b'); // {a:1,b:2}
