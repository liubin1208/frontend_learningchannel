const user = {
  name: 'deng',
  age: 28,
};

// const hi = 'my name is ' + user.name + ", I'm " + user.age;
const hi = tag`my name is ${user.name}, I'm ${user.age}``asdfasfdsa`; // tag(xxxx)

console.log(hi);

function tag() {
  console.log(arguments);
  return tag;
}
