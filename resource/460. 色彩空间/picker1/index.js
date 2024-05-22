var colorPicker = new iro.ColorPicker('.colorPicker', {
  width: 280,
  color: 'rgb(255, 0, 0)',
  borderWidth: 1,
  borderColor: '#fff',
});

var selected = document.querySelector('.selected');

colorPicker.on(['color:init', 'color:change'], function (color) {
  selected.innerHTML = [
    'hex: ' + color.hexString,
    'rgb: ' + color.rgbString,
    'hsl: ' + color.hslString,
    `hsv: hsv(${color.hsv.h}, ${color.hsv.s}, ${color.hsv.v})`,
  ]
    .map((it) => `<p>${it}</p>`)
    .join('');
  const { h, s, l } = color.hsl;
  const compColor = `hsl(${h + 180}deg, 100%, 50%)`;
  selected.style.color = compColor;
  document.body.style.background = color.hexString;
});
