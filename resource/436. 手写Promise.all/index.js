Promise.myAll = function (proms) {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  let i = 0;
  let fulfilled = 0;
  const result = [];
  for (const prom of proms) {
    const index = i;
    i++;
    Promise.resolve(prom).then((data) => {
      // 1. 完成的数据汇总到最终结果
      result[index] = data;
      // 2. 判定是否全部完成
      fulfilled++;
      if (fulfilled === i) {
        res(result);
      }
    }, rej);
  }
  if (i === 0) {
    res([]);
  }
  return p;
};

Promise.myAll([1, 2, 3, Promise.resolve(123)]).then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log('err', err);
  }
);
