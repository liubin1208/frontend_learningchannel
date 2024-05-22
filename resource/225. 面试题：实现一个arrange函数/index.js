function arrange(taskId) {
  const tasks = [];
  tasks.push(() => {
    console.log(`${taskId} is notified`);
  });

  async function execute() {
    for (const t of tasks) {
      await t();
    }
  }
  function doSomething(something) {
    tasks.push(() => {
      console.log(`Start to ${something}`);
    });
    return this;
  }
  function wait(duration) {
    tasks.push(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, duration * 1000);
        })
    );
    return this;
  }
  function waitFirst(duration) {
    tasks.unshift(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, duration * 1000);
        })
    );
    return this;
  }

  return {
    execute,
    do: doSomething,
    wait,
    waitFirst,
  };
}

arrange('Tom').wait(3).do('abc').do('bcd').execute();
