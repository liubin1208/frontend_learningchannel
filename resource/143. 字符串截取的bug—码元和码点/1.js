const str = '阿是𠮷娃娃🐱他说的纷';
String.prototype.sliceByPoint = function (pStart, pEnd) {
  let result = ''; // 截取的结果
  let pIndex = 0; // 码点的指针
  let cIndex = 0; // 码元的指针
  while (1) {
    if (pIndex >= pEnd || cIndex >= this.length) {
      break;
    }
    const point = this.codePointAt(cIndex);
    if (pIndex >= pStart) {
      result += String.fromCodePoint(point);
    }
    pIndex++;
    cIndex += point > 0xffff ? 2 : 1;
  }
  return result;
};
// 想要取出「娃娃🐱」
console.log(str.sliceByPoint(3, 6));
