async function loadNovel() {
  const url = 'https://duyi-static.oss-cn-beijing.aliyuncs.com/files/novel.txt';
  const resp = await fetch(url);
  const text = await resp.text();
  console.log(text);
}

loadNovel();
