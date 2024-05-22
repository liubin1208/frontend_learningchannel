// 将下面的代码转换为普通构造函数的写法
class Example {
  constructor(name) {
    this.name = name;
  }
  func() {
    console.log(this.name);
  }
}
var e = new Example('abc');
new e.func();
