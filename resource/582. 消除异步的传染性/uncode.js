async function getUser() {
  return await fetch('./1.json');
}

async function m1() {
  const user = await getUser();
  // other works
  return user;
}

async function m2() {
  const user = await m1();
  // other works
  return user;
}

async function m3() {
  const user = await m2();
  // other works
  return user;
}

async function main() {
  const user = await m3();
  console.log(user);
}
