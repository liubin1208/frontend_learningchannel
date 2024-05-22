const doms = {
  carouselList: document.querySelector('.carousel-list'),
  arrowLeft: document.querySelector('.carousel-arrow-left'),
  arrowRight: document.querySelector('.carousel-arrow-right'),
  indicators: document.querySelectorAll('.indicator span'),
};
const count = doms.indicators.length; // 轮播图的数量
let curIndex = 0; // 当前轮播图的索引
function moveTo(index) {
  doms.carouselList.style.transform = `translateX(-${index}00%)`;
  doms.carouselList.style.transition = '.5s';
  // 去掉指示器的选中效果
  var active = document.querySelector('.indicator span.active');
  active.classList.remove('active');
  // 添加选中的指示器
  doms.indicators[index].classList.add('active');
  curIndex = index;
}

doms.indicators.forEach((item, i) => {
  item.onclick = function () {
    moveTo(i);
  };
});

function init() {
  const firstCloned = doms.carouselList.firstElementChild.cloneNode(true);
  const lastCloned = doms.carouselList.lastElementChild.cloneNode(true);
  lastCloned.style.marginLeft = '-100%';
  doms.carouselList.appendChild(firstCloned);
  doms.carouselList.insertBefore(
    lastCloned,
    doms.carouselList.firstElementChild
  );
}

init();

function moveLeft() {
  if (curIndex === 0) {
    doms.carouselList.style.transform = `translateX(-${count}00%)`;
    doms.carouselList.style.transition = 'none';
    // 强制渲染 / 等待浏览器渲染后再执行
    doms.carouselList.clientHeight;
    moveTo(count - 1);
  } else {
    moveTo(curIndex - 1);
  }
}

function moveRight() {
  if (curIndex === count - 1) {
    doms.carouselList.style.transform = `translateX(100%)`;
    doms.carouselList.style.transition = 'none';
    // 强制渲染 / 等待浏览器渲染后再执行
    doms.carouselList.clientHeight;
    moveTo(0);
  } else {
    moveTo(curIndex + 1);
  }
}

doms.arrowLeft.onclick = moveLeft;
doms.arrowRight.onclick = moveRight;
