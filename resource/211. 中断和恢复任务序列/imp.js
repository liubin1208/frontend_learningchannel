/**
 * 依次顺序执行一系列任务
 * 所有任务全部完成后可以得到每个任务的执行结果
 * 需要返回两个方法，start用于启动任务，pause用于暂停任务
 * 每个任务具有原子性，即不可中断，只能在两个任务之间中断
 * @param  {...Function} tasks 任务列表，每个任务无参、异步
 */
function processTasks(...tasks) {
  let isRunning = false;
  let i = 0; // 当前任务执行的下标
  const result = []; // 接受每个任务的执行结果
  let prom = null;
  return {
    start() {
      return new Promise(async (resolve, reject) => {
        if (prom) {
          // 结束了
          prom.then(resolve, reject);
          return;
        }
        if (isRunning) {
          return;
        }
        isRunning = true;
        while (i < tasks.length) {
          try {
            console.log(i, '执行中');
            result.push(await tasks[i]());
            console.log(i, '执行完成');
          } catch (err) {
            isRunning = false;
            reject(err);
            prom = Promise.reject(err);
            return;
          }
          i++;
          if (!isRunning && i < tasks.length - 1) {
            console.log('执行被中断');
            // 中断
            return;
          }
        }
        // 成功
        isRunning = false;
        resolve(result);
        prom = Promise.resolve(result);
      });
    },
    pause() {
      isRunning = false;
    },
  };
}
