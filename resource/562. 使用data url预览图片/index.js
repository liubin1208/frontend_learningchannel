const inp = document.querySelector('input');
inp.onchange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataurl = e.target.result;
    preview.src = dataurl;
  };
  reader.readAsDataURL(file);
};
