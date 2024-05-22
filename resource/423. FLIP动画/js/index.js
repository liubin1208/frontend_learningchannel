var listContainer = document.querySelector('.list');
var btn = document.querySelector('button');
/**
 * 获取 [min, max) 范围内的随机整数
 * @return {Number}
 */
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
btn.onclick = function () {
  var f = new Flip(listContainer.children);
  var len = listContainer.children.length;
  for (let i = 0; i < len - 1; i++) {
    const index = getRandom(i + 1, len);
    listContainer.insertBefore(
      listContainer.children[index],
      listContainer.children[i]
    );
  }
  f.play();
};
