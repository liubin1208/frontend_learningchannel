outerLoop: for (var i = 0; i < 10; i++) {
  console.log('外层循环');
  for (var j = 0; j < 10; j++) {
    console.log('内层循环');
    // 结束外层循环
    break outerLoop;
  }
}
