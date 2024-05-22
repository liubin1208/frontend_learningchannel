function fn1() {
  console.log(this);
}

var newFn = fn1.bind({});
newFn();
