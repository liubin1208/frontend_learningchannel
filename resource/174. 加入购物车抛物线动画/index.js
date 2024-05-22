const car = document.querySelector('.car');
const btn = document.querySelector('.btn');
const PLUS_SIZE = 30;
btn.onclick = function () {
  const div = document.createElement('div');
  div.className = 'plus';
  div.innerHTML = ` <i class="iconfont i-jiajianzujianjiahao"></i>`;

  const btnRect = btn.getBoundingClientRect();
  const left = btnRect.left + btnRect.width / 2 - PLUS_SIZE / 2,
    top = btnRect.top - PLUS_SIZE;

  const carRect = car.getBoundingClientRect();
  const x = carRect.left + carRect.width / 2 - PLUS_SIZE / 2 - left,
    y = carRect.top - PLUS_SIZE - top;

  div.style.setProperty('--left', `${left}px`);
  div.style.setProperty('--top', `${top}px`);
  div.style.setProperty('--x', `${x}px`);
  div.style.setProperty('--y', `${y}px`);

  div.addEventListener('animationend', () => {
    div.remove();
  });

  document.body.appendChild(div);
};
