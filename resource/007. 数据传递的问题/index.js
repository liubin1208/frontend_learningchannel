function increase(a) {
  a.n++;
}
var a = {
  n: 1,
};
increase(a);
increase(a);
console.log(a);
