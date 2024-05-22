// 手写 Promise.all

Promise.myAll = function (proms) {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  // 设置 p 的状态
  const result = [];
  let count = 0; // 数量
  let fulFilledCount = 0; // 完成的数量
  for (const prom of proms) {
    const i = count;
    count++;
    Promise.resolve(prom).then((data) => {
      // 将成功的数据汇总到 result
      result[i] = data;
      //   判断是不是全部完成
      fulFilledCount++;
      if (fulFilledCount === count) {
        res(result);
      }
    }, rej);
  }
  if (count === 0) {
    res(result);
  }
  return p;
};

Promise.all([]).then((datas) => {
  console.log(datas);
});
