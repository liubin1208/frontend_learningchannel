// 解析url中的参数
const parseQuery = (url) => {
  q = {};
  url.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (q[k] = v));
  return q;
};

// test
parseQuery('http://a.com/?a=1&b=2'); // {a:1, b:2}
parseQuery('a=1&b=2'); // {a:1, b:2}
