function debounce(func, duration = 500) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, duration);
  };
}
const d_layout = debounce(layout, 500);

window.onresize = d_layout;
