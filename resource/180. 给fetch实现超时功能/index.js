// 给fetch函数实现超时功能

// 保持fetch的功能不变
// 没有侵入性
// 通用性

function createFetch(timeout) {
  return (resource, options) => {
    return new Promise((resolve, reject) => {
      options = options || {};
      let controller;
      if (!options.signal) {
        controller = new AbortController();
        options.signal = controller.signal;
      }
      setTimeout(() => {
        if (controller) {
          controller.abort();
        } else {
          reject('timeout');
        }
      }, timeout);
      fetch(resource, options).then(resolve, reject);
    });
  };
}

createFetch(10)('https://study.duyiedu.com/api/herolist');
