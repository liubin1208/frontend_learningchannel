/**
 * 获取随机颜色
 * @param {Number} alpha 透明通道，0~1 之间
 * @return {String}
 */
function getRandomColor(alpha = 0) {
  const alphaSuffix = alpha
    ? alpha.toString(16).substring(2, 4).padEnd(2, '0')
    : '';
  return (
    '#' +
    Math.random().toString(16).substring(2, 8).padEnd(2, '0') +
    alphaSuffix
  );
}

var a = document.createElement('a');
document.body.append(a);
var height = 100;
var config = {
  text: '抖音',
  url: 'https://www.douyin.com',
};

a.styles`
  color: ${getRandomColor()};
  background: ${getRandomColor()};
  height: ${height}px;
  line-height: ${height}px;
  font-size: ${height / 4}px;
`.props`
  href: ${config.url};
  target: _blank;
  title: ${config.text};
`.content`跳转到：${config.text}`;

// a.style.color = getRandomColor();
// a.style.backgroundColor = getRandomColor();
// a.style.height = height + 'px';
// a.style.lineHeight = height + 'px';
// a.style.fontSize = height / 4 + 'px';
// a.herf = config.url;
// a.target = '_blank';
// a.title = config.text;
// a.textContent = '跳转到:' + config.text;
