const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d', {
  willReadFrequently: true,
});

// 颗粒数量
const PARTICLE_NUM = 1500;
// 绘制的文本
let text = '';
// 绘制的文本字体大小
const FONT_SIZE = 140;
// 颗粒对象形成的数组
const particles = new Array(PARTICLE_NUM);
// 颗粒颜色
const COLOR = '#5445544d';
// 随机尺寸范围
const SIZES = [2, 7];
// 开始移动的时间
let startMoveTime = 0;

/**
 * 获取 [min, max] 范围内的随机整数
 */
function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// 初始化
function init() {
  // 初始化画布尺寸
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // 初始化颗粒对象数组
  const cx = canvas.width / 2,
    cy = canvas.height / 2;
  // 循环创建每一个颗粒点
  for (let i = 0; i < particles.length; i++) {
    const rad = Math.random() * 2 * Math.PI;
    const size = getRandom(SIZES[0], SIZES[1]);
    const r = canvas.height / 2;
    particles[i] = {
      sx: cx + Math.cos(rad) * r,
      sy: cy + Math.sin(rad) * r,
      x: cx + Math.cos(rad) * r,
      y: cy + Math.sin(rad) * r,
      size,
    };
    drawParticle(particles[i]);
  }
}

// 刷新绘制
function fps() {
  requestAnimationFrame(() => {
    // 要绘制的文本
    const curText = getText();
    if (curText !== text) {
      console.log(curText, text);
      text = curText; // 更新文本
      // 文本变化，颗粒要开始准备移动了
      // 更新颗粒的起始坐标
      for (const p of particles) {
        p.sx = p.x;
        p.sy = p.y;
      }
      // 更新开始移动的时间点
      startMoveTime = Date.now();
    }
    // 获取像素点
    const imgData = getBMP();
    // 更新绘制
    update(imgData);
    fps();
  });
}

fps();

// 在画布上绘制一个点
function drawParticle(p) {
  ctx.fillStyle = COLOR;
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}

// 获取要绘制的文本
function getText() {
  return new Date().toTimeString().substring(0, 8);
}

// 绘制文本并得到像素点信息
function getBMP() {
  const { width, height } = canvas;
  clear();
  ctx.fillStyle = '#fff';
  ctx.textBaseline = 'middle';
  ctx.font = `${FONT_SIZE}px '手札体-简', sans-serif`;
  const textWidth = ctx.measureText(text).width;
  ctx.fillText(text, (width - textWidth) / 2, height / 2);
  const imgData = ctx.getImageData(0, 0, width, height);
  return imgData;
}

/**
 * 更新绘制所有颗粒
 */
function update(imgData) {
  clear();
  const { width, height, data } = imgData;
  // 取点
  const dis = 4; // 间隔距离
  const pxls = []; // 颗粒目标坐标
  for (let w = 0; w < width; w += dis) {
    for (let h = 0; h < height; h += dis) {
      const i = (w + h * width) * 4;
      if (data[i] > 10) {
        pxls.push([w, h]);
      }
    }
  }
  const count = Math.min(particles.length, pxls.length);
  // 多少时间内到达目标位置（毫秒）
  const duration = 400;
  // 现在已过了多少时间
  const timeSpan = Date.now() - startMoveTime;
  for (let i = 0; i < count; i++) {
    const p = particles[i];
    // 起始位置
    const { sx, sy } = p;
    // 目标位置
    const [tx, ty] = pxls[i];
    // x和y的移动距离
    const disX = tx - sx,
      disY = ty - sy;
    // 得到这一次的移动偏移量
    let moveX = (disX / duration) * timeSpan,
      moveY = (disY / duration) * timeSpan;
    if (Math.abs(moveX) > Math.abs(disX)) {
      moveX = disX;
    }
    if (Math.abs(moveY) > Math.abs(disY)) {
      moveY = disY;
    }
    // 设置新的坐标
    p.x = sx + moveX;
    p.y = sy + moveY;
    drawParticle(p);
  }
}

// 清空画布
function clear() {
  const { width, height } = canvas;
  ctx.clearRect(0, 0, width, height);
}

init();
