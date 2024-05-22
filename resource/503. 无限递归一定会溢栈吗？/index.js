function foo() {
  // setTimeout(foo(), 0);
  // foo();
  Promise.resolve().then(foo);
}
foo();
