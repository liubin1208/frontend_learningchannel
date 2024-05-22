const container = document.querySelector('.container');
const rect = container.getBoundingClientRect();
const theta = Math.atan(rect.height / rect.width);

container.addEventListener('mouseenter', (e) => {
  const x = e.offsetX - rect.width / 2,
    y = rect.height / 2 - e.offsetY;
  const d = Math.atan2(y, x);
  let dire;
  if (d < theta && d >= -theta) {
    dire = 'right';
  } else if (d >= theta && d < Math.PI - theta) {
    dire = 'up';
  } else if (d < -theta && d >= theta - Math.PI) {
    dire = 'down';
  } else {
    dire = 'left';
  }
  container.classList.add(dire);
});
container.addEventListener('mouseleave', () => {
  container.className = 'container';
});
