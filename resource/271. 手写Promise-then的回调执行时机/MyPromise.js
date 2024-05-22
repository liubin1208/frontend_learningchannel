const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// 手写Promise
class MyPromise {
  #state = PENDING;
  #result = undefined;
  #handlers = [];

  constructor(executor) {
    const resolve = (data) => {
      this.#changeState(FULFILLED, data);
    };
    const reject = (reason) => {
      this.#changeState(REJECTED, reason);
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  #changeState(state, result) {
    if (this.#state !== PENDING) return;
    this.#state = state;
    this.#result = result;
    this.#run();
  }

  #run() {
    if (this.#state === PENDING) return;
    while (this.#handlers.length) {
      const { onFulfilled, onRejected, resolve, reject } =
        this.#handlers.shift();
      if (this.#state === FULFILLED) {
        if (typeof onFulfilled === 'function') {
          onFulfilled(this.#result);
        }
      } else {
        if (typeof onRejected === 'function') {
          onRejected(this.#result);
        }
      }
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.#handlers.push({
        onFulfilled,
        onRejected,
        resolve,
        reject,
      });
      this.#run();
    });
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject(123);
  }, 1000);
});
p.then(
  (res) => {
    console.log('promise 完成1', res);
  },
  (err) => {
    console.log('promise 失败1', err);
  }
);
p.then((res) => {
  console.log('promise 完成2', res);
});
p.then(
  (res) => {
    console.log('promise 完成3', res);
  },
  (err) => {
    console.log('promise 失败3', err);
  }
);
p.then(
  (res) => {
    console.log('promise 完成4', res);
  },
  (err) => {
    console.log('promise 失败4', err);
  }
);
