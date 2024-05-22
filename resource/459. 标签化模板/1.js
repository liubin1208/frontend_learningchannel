const user = {
  name: 'deng',
  age: 28,
};

const hi = tag`my name is ${user.name}, I'm ${user.age}``ssss`;
// tag(['my name is ', ", I'm ", ''], user.name, user.age)

function tag(strings, ...values) {
  return tag;
}

console.log(hi);
