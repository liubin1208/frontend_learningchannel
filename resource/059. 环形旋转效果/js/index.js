const items = document.querySelectorAll('.container .item');
const r = document.querySelector('.container').clientWidth / 2;
const count = items.length;
const pieceDeg = 360 / count;

for (let i = 0; i < count; i++) {
  let t = i * pieceDeg;
  t = (Math.PI / 180) * t;
  const x = Math.sin(t) * r,
    y = -Math.cos(t) * r;
  items[i].style.transform = `translate(${x}px, ${y}px)`;
}
