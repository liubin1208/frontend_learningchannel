/**
 * 并发请求
 * @param {string[]} urls 待请求的 url 数组
 * @param {number} maxNum 最大并发数
 */
function concurRequest(urls, maxNum) {
  if (urls.length === 0) return Promise.resolve([]);
  return new Promise((resolve) => {
    let index = 0; // 指向下一次请求的 url 对应的下标
    const result = []; // 存储所有请求的结果
    let count = 0; // 当前完成的请求数量
    async function _request() {
      const i = index;
      const url = urls[index];
      index++;
      try {
        const resp = await fetch(url);
        result[i] = resp;
      } catch (err) {
        result[i] = err;
      } finally {
        count++;
        if (count === urls.length) {
          resolve(result);
        }
        if (index < urls.length) {
          _request();
        }
      }
    }
    for (let i = 0; i < Math.min(urls.length, maxNum); i++) {
      _request();
    }
  });
}
