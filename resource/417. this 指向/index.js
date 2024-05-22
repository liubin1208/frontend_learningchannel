function Fn() {
  console.log(this);
  var n = 1;
  const a = () => {
    console.log();
    console.log(n);
  };
}

const newFn = Fn.bind(1);
newFn();

new newFn();

/* 
if(使用new调用){
  new Fn()
}
else{
  Fn.call(1);
}

*/
