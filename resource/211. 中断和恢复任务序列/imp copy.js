/**
 * 依次顺序执行一系列任务
 * 所有任务全部完成后可以得到每个任务的执行结果
 * 需要返回两个方法，start用于启动任务，pause用于暂停任务
 * 每个任务具有原子性，即不可中断，只能在两个任务之间中断
 * @param  {...Function} tasks 任务列表，每个任务无参、异步
 */
function processTasks(...tasks) {
  let nextIndex = 0,
    isRunning = false,
    isOver = false;
  const result = [];
  return {
    start() {
      return new Promise(async (resolve, reject) => {
        if (isRunning) {
          return;
        }
        if (isOver) {
          resolve(result);
          return;
        }
        isRunning = true;
        while (nextIndex < tasks.length) {
          console.log(`执行第${nextIndex}个任务`);
          try {
            result.push(await tasks[nextIndex]());
            console.log(`第${nextIndex}个任务执行完成`);
          } catch (err) {
            reject(err);
            return;
          }
          nextIndex++;
          if (!isRunning && nextIndex < tasks.length - 1) {
            // 被暂停
            console.log(`暂停`);
            return;
          }
        }
        isRunning = false;
        isOver = true;
        resolve(result);
      });
    },
    pause() {
      isRunning = false;
    },
  };
}
