const config = {
  duration: 1000, // 爪子从上到下经过的时间（毫秒）
  createToyDuration: 2000, // 创建娃娃的间隔时间（毫秒）
  clawMaxHeight: 350, // 爪子的最大高度
  toyMaxLeft: 470, // 娃娃的最大横坐标，超出就看不见了
  toyWidth: 200, // 娃娃的宽度
  toyCatchedLeft: [110, 170], // 玩具可以被抓住的横坐标范围
  toyMaxBottom: 270, // 娃娃被抓起后到达的最大高度
  animateDuration: 10, // 娃娃动画的间隔时间
  doms: {
    button: document.querySelector('.button'), //按钮
    toyContainer: document.querySelector('.toy-container'), // 娃娃的容器
    claw: document.querySelector('.claw'), // 爪子
    paused: document.querySelector('.paused'),
  },
};

class Toy {
  constructor(onRemoved) {
    this.dom = document.createElement('div');
    this.dom.className = 'toy';
    config.doms.toyContainer.appendChild(this.dom);
    this.left = -config.toyWidth;
    this.render();

    this.intervalId = null;
    this.startMove();
    this.isCatched = false;

    this.onRemoved = onRemoved;
  }

  render() {
    this.dom.style.transform = `translateX(${this.left}px)`;
  }

  remove() {
    this.dom.remove();
    this.onRemoved && this.onRemoved(this);
  }

  startMove() {
    if (this.intervalId || this.isCatched) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.left++;
      if (this.left > config.toyMaxLeft) {
        this.remove();
        this.stopMove();
      } else {
        this.render();
      }
    }, 10);
  }

  stopMove() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  moveUp() {
    this.isCatched = true;
    this.stopMove();
    this.dom.style.bottom = config.toyMaxBottom + 'px';
    this.dom.addEventListener(
      'transitionend',
      () => {
        this.remove();
      },
      {
        once: true,
      }
    );
  }
}

class Claw {
  constructor(onGrabing) {
    this.dom = config.doms.claw;
    this.isGrabing = false;
    this.onGrabing = onGrabing;
  }

  grab() {
    if (this.isGrabing) {
      return;
    }
    this.isGrabing = true;
    this.dom.style.height = config.clawMaxHeight + 'px';
    this.dom.addEventListener(
      'transitionend',
      () => {
        this.dom.classList.remove('open');
        this.onGrabing && this.onGrabing();
        this.dom.style.height = '';
        this.dom.addEventListener(
          'transitionend',
          () => {
            this.dom.classList.add('open');
            this.isGrabing = false;
          },
          { once: true }
        );
      },
      { once: true }
    );
  }
}

class Game {
  constructor() {
    this.toys = [];
    const [begin, end] = config.toyCatchedLeft;
    this.claw = new Claw(() => {
      for (const t of this.toys) {
        if (t.left >= begin && t.left <= end) {
          t.moveUp();
          break;
        }
      }
    });
    this.createToyTimerId = null;
    this.beginCreateToy();
    this.createToy();
    this.lastCreateToyTime = 0;
    this.lastStopCreateToyTime = 0;
    this.duration = 2000;
    this.paused = false;
  }

  createToy() {
    this.lastCreateToyTime = Date.now();
    const t = new Toy((ins) => {
      this.toys = this.toys.filter((it) => it !== ins);
    });
    this.toys.push(t);
  }

  beginCreateToy() {
    if (this.createToyTimerId) {
      return;
    }
    const dis = this.lastStopCreateToyTime - this.lastCreateToyTime;
    if (dis <= 0) {
      this.createToyTimerId = setInterval(() => {
        this.createToy();
      }, this.duration);
    } else {
      this.createToyTimerId = setTimeout(() => {
        this.createToy();
        this.stopCreateToy();
        this.beginCreateToy();
      }, this.duration - dis);
    }
  }

  stopCreateToy() {
    clearInterval(this.createToyTimerId);
    this.createToyTimerId = null;
    this.lastStopCreateToyTime = Date.now();
  }

  start() {
    this.paused = false;
    for (const t of this.toys) {
      t.startMove();
    }
    this.beginCreateToy();
    config.doms.paused.style.visibility = 'hidden';
  }

  stop() {
    this.paused = true;
    for (const t of this.toys) {
      t.stopMove();
    }
    this.stopCreateToy();
    config.doms.paused.style.visibility = 'visible';
  }

  grab() {
    if (this.paused) {
      return;
    }
    this.claw.grab();
  }
}

var g = new Game();

config.doms.button.onclick = function () {
  g.grab();
};

document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') {
    g.stop();
  } else {
    g.start();
  }
});
