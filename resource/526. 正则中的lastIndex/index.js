const msg = document.querySelector('.form-msg');
const input = document.querySelector('.form-input input');
const reg = /^1\d{10}$/g;
input.oninput = function () {
  reg.lastIndex = 0;
  if (reg.test(this.value)) {
    msg.style.display = 'none';
  } else {
    msg.style.display = 'block';
  }
};
