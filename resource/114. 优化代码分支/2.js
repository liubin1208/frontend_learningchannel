function speak(name) {
  const map = [
    [() => name.includes('牛'), () => console.log(name + '哞哞叫')],
    [
      () => name.endsWith('虎') && name.length <= 3,
      () => console.log(name + '嗷嗷叫'),
    ],
    [
      () => name.endsWith('猫') && !name.includes('狗'),
      () => console.log(name + '喵喵叫'),
    ],
  ];
  const target = map.find((m) => m[0]());
  if (target) {
    target[1]();
  } else {
    console.log('不知道怎么叫');
  }
}

speak('东北虎');
