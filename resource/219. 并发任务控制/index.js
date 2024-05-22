function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

class SuperTask {
  constructor(parallelCount = 2) {
    this.parallelCount = parallelCount; // 并发数量
    this.runningCount = 0; // 正在运行的任务数
    this.tasks = [];
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push({
        task,
        resolve,
        reject,
      });
      this._run();
    });
  }

  // 依次运行tasks队列的所有任务
  _run() {
    while (this.runningCount < this.parallelCount && this.tasks.length) {
      const { task, resolve, reject } = this.tasks.shift();
      this.runningCount++;
      task()
        .then(resolve, reject)
        .finally(() => {
          this.runningCount--;
          this._run();
        });
    }
  }
}

const superTask = new SuperTask();
function addTask(time, name) {
  superTask
    .add(() => timeout(time))
    .then(() => {
      console.log(`任务${name}完成`);
    });
}
addTask(1000, 1); // 10000ms后输出：任务1完成
addTask(1000, 2); // 5000ms后输出：任务2完成
addTask(1000, 3); // 8000ms后输出：任务3完成
addTask(1000, 4); // 12000ms后输出：任务4完成
addTask(1000, 5); // 15000ms后输出：任务5完成
