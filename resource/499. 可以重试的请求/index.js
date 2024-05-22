/**
 * 发出请求，返回 Promise
 * @param {string} url 请求地址
 * @param {number} maxCount 最大重试次数
 */
function request(url, maxCount = 5) {
  return fetch(url).catch((err) =>
    maxCount <= 0 ? Promise.reject(err) : request(url, maxCount - 1)
  );
}

request('https://my-json-server.asdfaaasfdasdad.com/typicode/demo/profile')
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.log(err);
  });
