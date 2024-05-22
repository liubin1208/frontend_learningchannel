<template>
  <div v-size-ob="handleChange" class="scroll-container">
    <div class="v-scroll">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const s = reactive({
  w: 0,
  h: 0,
});
function handleChange(size) {
  s.w = size.width;
  s.h = size.height;
}
</script>

<style scoped>
.scroll-container {
  width: 100%;
  height: 100%;
}
.v-scroll {
  width: calc(v-bind('s.h') * 1px);
  height: calc(v-bind('s.w') * 1px);
  position: relative;
  overflow: auto;
  transform-origin: 0 0;
  transform: translateY(calc(v-bind('s.h') * 1px)) rotate(-90deg);
}
.v-scroll::-webkit-scrollbar {
  width: 0;
}
.content {
  height: calc(v-bind('s.h') * 1px);
  position: absolute;
  left: 100%;
  transform-origin: 0 0;
  transform: rotate(90deg);
}
</style>
