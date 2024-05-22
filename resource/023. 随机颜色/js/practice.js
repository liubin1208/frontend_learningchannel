/* 
  并不是每个函数都需要自己写，浏览器其实已经为我们准备了很多常用函数，比如console.log
  老师讲解本次作业需要用到的函数，这些函数浏览器已经给你准备好了：
  1. Math.random()  得到一个0-1之间的随机数，无参，返回随机数
  2. Math.floor(n)  将一个数字向下取整（去掉小数），返回整数
  3. document.createElement(tagName)  创建一个元素，tagName是字符串，表示元素的名称，返回一个元素对象
  4. document.body.appendChild(dom)  将指定的元素对象添加到body中，参数dom表示元素对象

  补充： 
  dom是元素对象
  1. dom.style属性  
  2. dom.className属性
*/

/**
 * 函数名：getRandom，返回一个指定范围的随机整数
 * @param {Number} min 范围的最小值
 * @param {Number} max 范围的最大值（无法取到最大值）
 * @return {Number} 随机整数
 */
function getRandom(min, max) {
  // Math.random()  [0, 1)
  // Math.random() * (max - min)   [0, max - min)
  // xxxx + min  [min, max)
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * 函数名：createBall
 * 该函数用于创建一个类样式为ball的div，它展现出来的是一个球体
 * 它的宽高相等且随机
 * 它的位置随机
 * 它的背景颜色随机
 * @return {void} 无返回
 */
function createBall() {
  var div = document.createElement('div');
  document.body.appendChild(div);
  div.className = 'ball';
  // 尺寸随机
  var size = getRandom(10, 200);
  div.style.width = size + 'px';
  div.style.height = size + 'px';
  // 颜色随机
  var r = getRandom(0, 256);
  var g = getRandom(0, 256);
  var b = getRandom(0, 256);
  div.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';

  // 位置随机
  var x = getRandom(0, window.innerWidth - size);
  var y = getRandom(0, window.innerHeight - size);
  div.style.left = x + 'px';
  div.style.top = y + 'px';

  // 动画位移变量随机
  var disX = getRandom(10, 200) + 'px';
  var disY = getRandom(10, 200) + 'px';
  div.style.setProperty('--disX', disX);
  div.style.setProperty('--disY', disY);
  div.style.animationDelay = getRandom(0, 1000) + 'ms';
  div.style.animationDuration = getRandom(1000, 5000) + 'ms';
}

for (var i = 0; i < 30; i++) {
  createBall();
}
