const doms = {
  carouselList: document.querySelector('.carousel-list'),
  arrowLeft: document.querySelector('.carousel-arrow-left'),
  arrowRight: document.querySelector('.carousel-arrow-right'),
  indicators: document.querySelectorAll('.indicator span'),
};
const count = doms.indicators.length; // 轮播图的数量
let curIndex = 0; // 当前显示的图片索引
function moveTo(index) {
  doms.carouselList.style.transform = `translateX(-${index * 100}%)`;
  doms.carouselList.style.transition = 'transform 0.5s';
  // 设置指示器
  doms.indicators.forEach((indicator, i) => {
    indicator.className = i === index ? 'active' : '';
  });
  curIndex = index;
}

doms.indicators.forEach((indicator, index) => {
  indicator.onclick = () => {
    moveTo(index);
  };
});

function init() {
  const firstCloned = doms.carouselList.firstElementChild.cloneNode(true);
  const lastCloned = doms.carouselList.lastElementChild.cloneNode(true);
  doms.carouselList.appendChild(firstCloned);
  doms.carouselList.insertBefore(
    lastCloned,
    doms.carouselList.firstElementChild
  );
  lastCloned.style.marginLeft = '-100%';
}
init();

function moveLeft() {
  if (curIndex === 0) {
    doms.carouselList.style.transition = 'none';
    doms.carouselList.style.transform = `translateX(-${count * 100}%)`;
    // 等待浏览器渲染
    doms.carouselList.clientWidth;
    moveTo(count - 1);
  } else {
    moveTo(curIndex - 1);
  }
}

function moveRight() {
  if (curIndex === count - 1) {
    doms.carouselList.style.transition = 'none';
    doms.carouselList.style.transform = `translateX(100%)`;
    // 等待浏览器渲染
    doms.carouselList.clientWidth;
    moveTo(0);
  } else {
    moveTo(curIndex + 1);
  }
}

doms.arrowLeft.onclick = moveLeft;
doms.arrowRight.onclick = moveRight;
