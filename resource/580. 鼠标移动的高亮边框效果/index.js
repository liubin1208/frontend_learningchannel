const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');

container.onmousemove = (e) => {
  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  }
};
