const cat = {
  name: 'Kitty',
  age: 3,
  love: 'flower',
};

const user = {
  loginId: 'abc',
  loginPwd: '123456',
};

// getValue函数用于获取某个对象的某个属性值
// 下面的类型标注是否有缺陷？如果有，找到更优解
function getValue<T extends object, K extends keyof T>(obj: T, name: K): T[K] {
  return obj[name];
}

getValue(user, 'loginPwd')