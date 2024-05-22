const READ = 0b00001;
const WRITE = 0b00010;
const SHARE = 0b00100;
const DELETE = 0b01000;
const CREATE = 0b10000;

const perm = READ | DELETE | WRITE;

const newPerm = perm & ~READ;
console.log(newPerm.toString(2));
