// 给fetch添加超时功能
function createRequestWithTimeout(timeout = 3000) {
  return function (url, options) {
    return new Promise((resolve, reject) => {
      const abort = new AbortController();
      options = options || {};
      if (options.signal) {
        options.signal.addEventListener('abort', () => {
          abort.abort();
        });
      }
      options.signal = abort.signal;
      setTimeout(() => {
        reject(new Error('Request timeout'));
        abort.abort();
      }, timeout);
      fetch(url, options).then(resolve, reject);
    });
  };
}
