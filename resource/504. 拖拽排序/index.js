const list = document.querySelector('.list');
let sourceNode;
let flip;
list.ondragstart = (e) => {
  setTimeout(() => {
    e.target.classList.add('moving');
  }, 0);
  sourceNode = e.target;
  flip = new Flip(list.children, 0.5);
};
list.ondragover = (e) => {
  e.preventDefault();
};
list.ondragenter = (e) => {
  e.preventDefault();
  if (e.target === list || e.target === sourceNode) {
    return;
  }
  const chidlren = [...list.children];
  const sourceIndex = chidlren.indexOf(sourceNode);
  const targetIndex = chidlren.indexOf(e.target);
  if (sourceIndex < targetIndex) {
    list.insertBefore(sourceNode, e.target.nextElementSibling);
  } else {
    list.insertBefore(sourceNode, e.target);
  }
  flip.play();
};
list.ondragend = () => {
  sourceNode.classList.remove('moving');
};
