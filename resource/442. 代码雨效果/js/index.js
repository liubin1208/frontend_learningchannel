// 获取 canvas 元素
const cvs = document.getElementById('bg');
// 获取窗口尺寸
const width = window.innerWidth * devicePixelRatio,
  height = window.innerHeight * devicePixelRatio;
// 设置 canvas 尺寸为窗口尺寸
cvs.width = width;
cvs.height = height;

// 获取绘制上下文
const ctx = cvs.getContext('2d');
// 字体大小
const fontSize = 20 * devicePixelRatio;
// 列宽
const columnWidth = fontSize;
// 列数
const columnCount = Math.floor(width / columnWidth);
// 每一列下一个字符是第几个字符
const nextChars = new Array(columnCount).fill(0);

// 画一排文字
function draw() {
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.fillRect(0, 0, width, height);
  for (let i = 0; i < columnCount; i++) {
    // 画第i列的字符
    // 什么字符，什么颜色，字体大小、字体类型、什么位置（x,y）
    const char = getRandomChar();
    ctx.fillStyle = getRandomColor();
    ctx.font = `${fontSize}px "Roboto Mono"`;
    const x = columnWidth * i;
    const index = nextChars[i];
    const y = (index + 1) * fontSize;
    ctx.fillText(char, x, y);
    // 更新下一个字符的位置
    if (y > height && Math.random() > 0.99) {
      nextChars[i] = 0;
    } else {
      nextChars[i]++;
    }
  }
}

// 随机颜色
function getRandomColor() {
  const fontColors = [
    '#33B5E5',
    '#0099CC',
    '#AA66CC',
    '#9933CC',
    '#99CC00',
    '#669900',
    '#FFBB33',
    '#FF8800',
    '#FF4444',
    '#CC0000',
  ];
  return fontColors[Math.floor(Math.random() * fontColors.length)];
}
// 随机文字
function getRandomChar() {
  const str = 'console.log("hello world")';
  return str[Math.floor(Math.random() * str.length)];
}

draw();

setInterval(draw, 40);
