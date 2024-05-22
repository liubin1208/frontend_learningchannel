import { onUnmounted, ref } from 'vue';

export function useDefer(maxCount = 100) {
  const frameCount = ref(1);
  let rafId;
  function updateFrameCount() {
    rafId = requestAnimationFrame(() => {
      frameCount.value++;
      if (frameCount.value >= maxCount) {
        return;
      }
      updateFrameCount();
    });
  }
  updateFrameCount();
  onUnmounted(() => {
    cancelAnimationFrame(rafId);
  });
  return function (n) {
    return frameCount.value >= n;
  };
}
