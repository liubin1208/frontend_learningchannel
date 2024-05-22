function counter() {
  let count = 1;
  function increment() {
    count++;
  }
  return {
    count,
    increment,
  };
}

const { count, increment } = counter();
console.log(count);
increment();
console.log(count);
