console.log(
  console.log.call.call.call.call.call.call.call.apply((a) => a, [1, 2])
);

// a.b.c.d.f.e()

// 函数.apply(参数 1, [1,2])
// 参数 1.函数(1,2)
// ((a)=>a).call(1,2)
// ((a)=>a)(2)
