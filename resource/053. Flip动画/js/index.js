var listContainer = document.querySelector('.list');
var btn = document.querySelector('button');
btn.onclick = function () {
  var f = new Flip(listContainer.children);
  var len = listContainer.children.length;
  var index = 0;
  while (index < len - 1) {
    var node = listContainer.children[index];
    var insert = listContainer.children[len - 1];
    listContainer.insertBefore(insert, node);
    index++;
  }
  f.play();
};
