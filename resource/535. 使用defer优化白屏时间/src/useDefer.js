import { onUnmounted, ref } from 'vue';

export function useDefer(maxCount = 100) {
  const count = ref(0);
  let raqId = null;
  function updateFrame() {
    count.value++;
    if (count.value >= maxCount) {
      return;
    }
    raqId = requestAnimationFrame(updateFrame);
  }
  updateFrame();
  onUnmounted(() => {
    cancelAnimationFrame(raqId);
  });
  return function (n) {
    return count.value >= n;
  };
}
