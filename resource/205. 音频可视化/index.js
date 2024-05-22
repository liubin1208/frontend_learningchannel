const audioEle = document.querySelector('audio');
const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');
// 初始化canvas的尺寸
function initCvs() {
  cvs.width = window.innerWidth * devicePixelRatio;
  cvs.height = (window.innerHeight / 2) * devicePixelRatio;
}
initCvs();

let isInit = false;
let dataArray, analyser;
audioEle.onplay = function () {
  if (isInit) {
    return;
  }
  // 初始化
  const audCtx = new AudioContext(); // 创建音频上下文
  const source = audCtx.createMediaElementSource(audioEle); // 创建音频源节点
  analyser = audCtx.createAnalyser();
  analyser.fftSize = 512;
  // 创建数组，用于接收分析器节点的分析数据
  dataArray = new Uint8Array(analyser.frequencyBinCount);
  source.connect(analyser);
  analyser.connect(audCtx.destination);

  isInit = true;
};

// 把分析出的波形绘制到canvas上
function draw() {
  requestAnimationFrame(draw);
  // 清空画布
  const { width, height } = cvs;
  ctx.clearRect(0, 0, width, height);
  if (!isInit) {
    return;
  }
  // 让分析器节点分析出数据到数组中
  analyser.getByteFrequencyData(dataArray);
  const len = dataArray.length / 2.5;
  const barWidth = width / len / 2;
  ctx.fillStyle = '#78C5F7';
  for (let i = 0; i < len; i++) {
    const data = dataArray[i]; // <256
    const barHeight = (data / 255) * height;
    const x1 = i * barWidth + width / 2;
    const x2 = width / 2 - (i + 1) * barWidth;
    const y = height - barHeight;
    ctx.fillRect(x1, y, barWidth - 2, barHeight);
    ctx.fillRect(x2, y, barWidth - 2, barHeight);
  }
}

draw();
