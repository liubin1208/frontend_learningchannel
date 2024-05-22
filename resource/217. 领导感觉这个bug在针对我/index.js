async function fetchCount(id) {
  function delay(duration = 1000) {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }
  await delay(300);
  return id;
}

let count = 0; // 统计设备的月销量

async function addCount(id) {
  // ajax请求
  const n = await fetchCount(id);
  count += n;
}

addCount(1);
addCount(2);
