const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// 手写Promise
class MyPromise {
  #state = PENDING;
  #result = undefined;

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
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    throw 123;
  }, 0);
});

console.log(p);
