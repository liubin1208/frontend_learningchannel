const btn = document.querySelector('.btn');
btn.onclick = () => {
  const taskHandler = (_, i) => {
    const div = document.createElement('div');
    div.innerText = i;
    document.body.appendChild(div);
  };
  browserPerformChunk(100000, taskHandler);
};

function performChunk(datas, taskHandler, scheduler) {
  if (typeof datas === 'number') {
    datas = { length: datas };
  }
  if (datas.length === 0) return;
  let i = 0;
  // 执行下一块任务
  function _run() {
    if (i >= datas.length) return;
    scheduler((isGoOn) => {
      while (isGoOn() && i < datas.length) {
        // 执行一个任务
        taskHandler(datas[i], i);
        i++;
      }
      _run();
    });
  }
  _run();
}

function browserPerformChunk(datas, taskHandler) {
  const scheduler = (task) => {
    requestIdleCallback((idle) => {
      task(() => idle.timeRemaining() > 0);
    });
  };
  performChunk(datas, taskHandler, scheduler);
}
