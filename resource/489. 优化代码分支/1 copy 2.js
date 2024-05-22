const map = {
  ball: {
    className: 'c-ball',
    textContent: '小球',
    onClick() {
      console.log('ball');
    },
  },
  square: {
    className: 'c-rec',
    textContent: '正方形',
    onClick() {
      console.log('square');
    },
  },
  triangle: {
    className: 'c-t',
    textContent: '三角形',
    onClick() {
      console.log('triangle');
    },
  },
  rectangle: {
    className: 'c-rec',
    textContent: '矩形',
    onClick() {
      console.log('rectangle');
    },
  },
};

function createElement(item) {
  const validTypes = Object.keys(map);
  if (!validTypes.includes(item.type)) {
    throw new Error('invalid type');
  }
  const div = document.createElement('div');
  div.className = 'item';
  div.classList.add(map[item.type].className);
  div.textContent = map[item.type].textContent;
  div.addEventListener('click', map[item.type].onClick);
  return div;
}
