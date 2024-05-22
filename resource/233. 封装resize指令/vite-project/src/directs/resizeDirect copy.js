const map = new WeakMap();
const ob = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const handler = map.get(entry.target);
    if (handler) {
      handler({
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize,
      });
    }
  }
});

export default {
  mounted(el, binding) {
    // 监听元素
    ob.observe(el);
    map.set(el, binding.value);
  },
  unmounted() {
    // 取消监听
    ob.unobserve(el);
  },
};
