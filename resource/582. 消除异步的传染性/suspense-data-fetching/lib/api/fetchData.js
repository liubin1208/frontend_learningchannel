import wrapPromise from './wrapPromise';

function fetchData(url) {
  const promise = fetch(url).then((res) => res.json());

  return wrapPromise(promise);
}

export function getTodos() {
  return fetchData('https://jsonplaceholder.typicode.com/todos/');
}

export function getUser() {
  return fetchData('https://my-json-server.typicode.com/typicode/demo/profile');
}
