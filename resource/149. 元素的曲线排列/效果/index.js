function createLetters(container) {
  const html = container.textContent
    .split('')
    .map((l) => `<span>${l}</span>`)
    .join('');
  container.innerHTML = html;
}

function createCurve(container, func, range) {
  if (!container.children.length) {
    createLetters(container);
  }
  const points = getCurvePoints(
    func,
    range,
    container.children.length,
    container.clientWidth
  );
  for (let i = 0; i < points.length; i++) {
    const letter = container.children[i];
    letter.style.transform = `translateY(${points[i]}px)`;
  }
}

const containers = document.querySelectorAll('.container');

createCurve(containers[0], (x) => Math.sin(x) / 2, [0, 2 * Math.PI]);
createCurve(containers[1], (x) => -(x ** 2) + 0.1, [-0.3, 0.3]);
createCurve(containers[2], (x) => Math.sin(3 - (x % 3)), [0, 6]);
