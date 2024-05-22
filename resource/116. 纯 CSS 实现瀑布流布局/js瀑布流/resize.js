var func = debounce(layout, 1000);

function debounce(fn, delay) {
  var timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(fn, delay);
  };
}

window.onresize = func;
