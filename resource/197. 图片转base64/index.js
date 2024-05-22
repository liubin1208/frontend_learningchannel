const inp = document.querySelector('input');
inp.onchange = function () {
  const reader = new FileReader();
  reader.onload = function (e) {
    preview.src = e.target.result;
    console.log(e.target.result);
  };
  reader.readAsDataURL(this.files[0]);
};
