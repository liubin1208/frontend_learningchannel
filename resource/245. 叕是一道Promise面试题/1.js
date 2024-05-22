async function asy1() {
  console.log(1);
  await asy2();
  console.log(2);
}
asy2 = async () => {
  // 第一组
  // await setTimeout((_) => {
  //   Promise.resolve().then((_) => {
  //     console.log(3);
  //   });
  //   console.log(4);
  // }, 0);
  // 第二组
  // await (async () => {
  //   await (() => {
  //     console.log(3);
  //   })();
  //   console.log(4);
  // })();
  // 第三组
  // await (async () => {
  //   Promise.resolve().then((_) => {
  //     console.log(3);
  //   });
  //   console.log(4);
  // })();
  // 第四组
  await Promise.resolve().then((_) => {
    Promise.resolve().then((_) => {
      console.log(3);
    });
    console.log(4);
  });
  console.log(5);
};
asy3 = async () => {
  Promise.resolve().then((_) => {
    console.log(6);
  });
};
asy1();
console.log(7);
asy3();
