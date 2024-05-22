// 随机HEX颜色
const randomColor = () =>
  '#' +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0');

// test
randomColor(); // #8d5d7b
