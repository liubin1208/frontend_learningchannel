var target = new Date('2023-1-22').getTime();
var days = document.querySelector('.item:nth-child(1) .number');
var hours = document.querySelector('.item:nth-child(2) .number');
var mins = document.querySelector('.item:nth-child(3) .number');
var secs = document.querySelector('.item:nth-child(4) .number');

function setHTML(dom, value) {
  var nextValue = value.toString().padStart(2, '0');
  var curValue = dom.dataset.number;
  if (nextValue === curValue) {
    return;
  }
  dom.innerHTML = `<div class="cur top"><span>${curValue}</span></div>
            <div class="cur bottom"><span>${curValue}</span></div>
            <div class="next top"><span>${nextValue}</span></div>
            <div class="next bottom"><span>${nextValue}</span></div>`;
  dom.classList.remove('flip');
  dom.clientHeight;
  dom.classList.add('flip');
  dom.dataset.number = nextValue;
}

function setNumbers() {
  var now = Date.now();
  var dis = target - now;
  if (dis < 0) {
    dis = 0;
  }
  var _days = Math.floor(dis / (24 * 3600 * 1000));
  dis -= _days * 24 * 3600 * 1000;

  var _hours = Math.floor(dis / (3600 * 1000));
  dis -= _hours * 3600 * 1000;

  var _mins = Math.floor(dis / (60 * 1000));
  dis -= _mins * 60 * 1000;

  var _secs = Math.floor(dis / 1000);

  setHTML(days, _days);
  setHTML(hours, _hours);
  setHTML(mins, _mins);
  setHTML(secs, _secs);
}

setNumbers();

setInterval(setNumbers, 1000);
