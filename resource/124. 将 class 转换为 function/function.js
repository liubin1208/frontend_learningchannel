'use strict';

function Example(name) {
  // 验证 this 的指向
  if (!(this instanceof Example)) {
    throw new TypeError(
      `Class constructor Example cannot be invoked without 'new'`
    );
  }
  this.name = name;
}

Object.defineProperty(Example.prototype, 'func', {
  value: function () {
    // 不可通过 new 调用
    if (!(this instanceof Example)) {
      throw new TypeError(`func is not a constructor`);
    }
    console.log(this.name);
  },
  enumerable: false,
});

var e = new Example('abc');
e.func();
