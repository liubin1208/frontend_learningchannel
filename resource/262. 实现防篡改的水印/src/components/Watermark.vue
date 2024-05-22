<template>
  <div class="watermark-container" ref="parentRef">
    <slot></slot>
    <!-- 添加一个div，填充满整个区域，设置水印背景，重复 -->
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watchEffect } from 'vue';
import useWatermarkBg from './useWatermarkBg';
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'watermark',
  },
  fontSize: {
    type: Number,
    default: 40,
  },
  gap: {
    type: Number,
    default: 20,
  },
});
const bg = useWatermarkBg(props);
const parentRef = ref(null);
const flag = ref(0);
let div;
watchEffect(() => {
  flag.value;
  if (!parentRef.value) {
    return;
  }
  if (div) {
    div.remove();
  }
  const { base64, styleSize } = bg.value;
  div = document.createElement('div');
  div.style.backgroundImage = `url(${base64})`;
  div.style.backgroundSize = `${styleSize}px ${styleSize}px`;
  div.style.backgroundRepeat = 'repeat';
  div.style.zIndex = 9999;
  div.style.position = 'absolute';
  div.style.inset = 0;
  parentRef.value.appendChild(div);
});
let ob;
onMounted(() => {
  ob = new MutationObserver((records) => {
    for (const record of records) {
      // 删除水印
      for (const dom of record.removedNodes) {
        if (dom === div) {
          // 有删除操作
          flag.value++;
          return;
        }
      }
      // 修改
      if (record.target === div) {
        flag.value++;
        return;
      }
    }
  });
  ob.observe(parentRef.value, {
    childList: true,
    attributes: true,
    subtree: true,
  });
});

onUnmounted(() => {
  ob && ob.disconnect(); // 取消监听
  div = null;
});
</script>

<style scoped>
.watermark-container {
  position: relative;
}
</style>
