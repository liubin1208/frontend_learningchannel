var str = '100000000000';
// 10,000,000,000
var result = str.replace(/(?=\B(\d{3})+$)/g, ',');
console.log(result);
