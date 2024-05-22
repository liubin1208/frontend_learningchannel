import { getOffset, getVideos } from './api.js';
import { debounce, getIndexRange, getPage } from './utils.js';
const currentId = 100;
const SIZE = 12;
const container = document.querySelector('.container');
const indicator = document.querySelector('.indicator');

const visibleIndex = new Set();
const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const index = +entry.target.dataset.index;
    if (entry.isIntersecting) {
      visibleIndex.add(index);
    } else {
      visibleIndex.delete(index);
    }
  }
  loadPagesDebounce();
});

function getRange() {
  if (visibleIndex.size === 0) return [0, 0];
  const min = Math.min(...visibleIndex);
  const max = Math.max(...visibleIndex);
  return [min, max];
}

function createElements(page) {
  const childrenLen = container.children.length;
  const count = page * SIZE - childrenLen;
  for (let i = 0; i < count; i++) {
    const item = document.createElement('div');
    item.className = 'item';
    item.dataset.index = i + childrenLen;
    container.appendChild(item);
    ob.observe(item);
  }
}

function loadPages() {
  // 得到当前能看到的元素索引范围
  const [minIndex, maxIndex] = getRange();
  const pages = new Set();
  for (let i = minIndex; i <= maxIndex; i++) {
    pages.add(getPage(i, SIZE));
  }
  for (const page of pages) {
    const [minIndex, maxIndex] = getIndexRange(page, SIZE);
    if (container.children[minIndex].dataset.loaded) {
      continue;
    }
    container.children[minIndex].dataset.loaded = true;
    getVideos(page, SIZE).then((res) => {
      for (let i = minIndex; i <= maxIndex; i++) {
        const item = container.children[i];
        item.innerHTML = `
        <img src="${res[i - minIndex].cover}" >
        `;
      }
    });
  }
  console.log('load pages');
}
const loadPagesDebounce = debounce(loadPages, 300);

createElements(1);
loadPages();

async function setIndicatorVisible() {
  const offset = await getOffset(currentId);
  const [minIndex, maxIndex] = getRange();
  const page = getPage(offset, SIZE);
  if (offset >= minIndex && offset <= maxIndex) {
    indicator.style.display = 'none';
  } else {
    indicator.style.display = 'block';
  }
  indicator.dataset.page = page;
  indicator.dataset.index = offset;
}
setIndicatorVisible();

indicator.onclick = () => {
  const page = +indicator.dataset.page;
  const index = +indicator.dataset.index;
  createElements(page);
  container.children[index].scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
};
