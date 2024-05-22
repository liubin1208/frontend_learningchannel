function foo() {
  //   setTimeout(foo(), 0);
  Promise.resolve().then(foo);
}
foo();
