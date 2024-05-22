const map = {
  ball: {
    className: 'c-b',
    textContent: '小球',
    click() {
      console.log('this is a ball');
    },
  },
  square: {
    className: 'c-s',
    textContent: '正方形',
    click() {
      console.log('this is a square');
    },
  },
  triangle: {
    className: 'c-t',
    textContent: '三角形',
    click() {
      console.log('this is a triangle');
    },
  },
};

function createElement(item) {
  if (!map[item.type]) {
    throw new Error('Invalid type');
  }
  const div = document.createElement('div');
  div.className = `item ${map[item.type].className}`;
  div.textContent = map[item.type].textContent;
  div.onclick = map[item.type].click;
  return div;
}
