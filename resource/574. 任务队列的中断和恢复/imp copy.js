/**
 * 依次顺序执行一系列任务
 * 所有任务全部完成后可以得到每个任务的执行结果
 * 需要返回两个方法，start用于启动任务，pause用于暂停任务
 * 每个任务具有原子性，即不可中断，只能在两个任务之间中断
 * @param  {...Function} tasks 任务列表，每个任务无参、异步
 */
function processTasks(...tasks) {
  let isRunning = false;
  const result = [];
  let i = 0;
  return {
    start() {
      return new Promise(async (resolve) => {
        if (isRunning) {
          return;
        }
        isRunning = true;
        // 依次执行任务
        while (i < tasks.length) {
          const r = await tasks[i]();
          result.push(r);
          i++;
          if (!isRunning) {
            return;
          }
        }
        isRunning = false;
        resolve(result);
      });
    },
    pause() {
      isRunning = false;
    },
  };
}
