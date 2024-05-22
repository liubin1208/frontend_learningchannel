var doms = {
  carouselList: document.querySelector('.carousel-list'),
  arrowLeft: document.querySelector('.carousel-arrow-left'),
  arrowRight: document.querySelector('.carousel-arrow-right'),
  indicators: document.querySelectorAll('.indicator span'),
};
var curIndex = 0; // 记录目前是第几张
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

doms.indicators.forEach(function (item, i) {
  item.onclick = function () {
    moveTo(i);
  };
});

function init() {
  // 复制第一张图
  var first = doms.carouselList.firstElementChild.cloneNode(true);
  // 复制最后一张图
  var last = doms.carouselList.lastElementChild.cloneNode(true);
  // 将第一张图放到末尾
  doms.carouselList.appendChild(first);
  // 将最后一张图放到第一张
  doms.carouselList.insertBefore(last, doms.carouselList.firstElementChild);
  // 设置最后一张复制图为绝对定位
  last.style.position = 'absolute';
  last.style.transform = 'translateX(-100%)';
}

init();

function leftNext() {
  if (curIndex === 0) {
    doms.carouselList.style.transform = `translateX(-${count}00%)`;
    doms.carouselList.style.transition = 'none';
    doms.carouselList.clientHeight; // 强制渲染
    moveTo(count - 1);
  } else {
    moveTo(curIndex - 1);
  }
}
var count = doms.indicators.length;
function rightNext() {
  if (curIndex === count - 1) {
    doms.carouselList.style.transform = 'translateX(100%)';
    doms.carouselList.style.transition = 'none';
    doms.carouselList.clientHeight; // 强制渲染
    moveTo(0);
  } else {
    moveTo(curIndex + 1);
  }
}

doms.arrowLeft.onclick = leftNext;
doms.arrowRight.onclick = rightNext;
