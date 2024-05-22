function moduleA() {
  let count = 1;
  function increment() {
    count++;
  }
  return {
    increment,
    count,
  };
}

const { increment, count } = moduleA();
console.log(count);
increment();
console.log(count);
