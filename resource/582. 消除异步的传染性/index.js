function getUser() {
  return fetch('./1.json');
}

function m1() {
  const user = getUser();
  // other works
  return user;
}

function m2() {
  const user = m1();
  // other works
  return user;
}

function m3() {
  const user = m2();
  // other works
  return user;
}

function main() {
  console.log('main');
  const user = m3();
  console.log(user);
}

function run(func) {
  // 1. 改动fetch
  const oldFetch = fetch;
  const cache = {
    status: 'pending', // pending | fulfilled | rejected
    value: null,
  };
  function newFetch(...args) {
    if (cache.status === 'fulfilled') {
      return cache.value;
    } else if (cache.status === 'rejected') {
      throw cache.value;
    }
    const p = oldFetch(...args)
      .then((res) => res.json())
      .then((data) => {
        cache.status = 'fulfilled';
        cache.value = data;
      })
      .catch((err) => {
        cache.status = 'rejected';
        cache.value = err;
      });
    throw p;
  }
  window.fetch = newFetch;
  // 2. 运行func
  try {
    func();
  } catch (err) {
    if (err instanceof Promise) {
      err.finally(() => {
        window.fetch = newFetch;
        func();
        window.fetch = oldFetch;
      });
    }
  }

  // 3. 改回fetch
  window.fetch = oldFetch;
}

run(main);
