var a = 1;
function exec(code) {
  var a = 2;
  // eval(code);
  // setTimeout(code, 0);
  // const script = document.createElement('script');
  // script.innerHTML = code;
  // document.body.appendChild(script);
  const fn = new Function(code);
  fn();
}

exec('console.log("a", a)');
console.log('sync');
