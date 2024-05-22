const reg = /^1\d{10}$/g;

const msg = document.querySelector('.form-msg');
const input = document.querySelector('.form-input input');

input.oninput = function () {
  console.log(reg.test(this.value), reg.lastIndex);
  reg.lastIndex = 0;
  if (reg.test(this.value)) {
    msg.style.display = 'none';
  } else {
    console.log('else');
    msg.style.display = 'block';
  }
};
