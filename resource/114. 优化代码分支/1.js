function speak(name) {
  const map = {
    老牛: () => console.log('老牛哞哞叫'),
    老虎: () => console.log('写入文件：', '老虎嗷嗷叫'),
    小猫: () => console.log('上传服务器', '小猫喵喵叫'),
    小狗: () => console.log('打开网页', '小狗图片'),
  };
  if (map[name]) {
    map[name]();
  } else {
    console.log('不知道怎么叫');
  }
}

speak('小狗');
