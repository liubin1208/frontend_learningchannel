<template>
  <div class="controller">
    <Button @click="clickHandler">显示提示框</Button>
  </div>
</template>

<script setup>
import Button from './components/Button.vue';
import { showMsg } from './utils/showMsg';
const clickHandler = () => {
  const close = showMsg('显示消息', () => {
    close();
  });
};
</script>

<style scoped>
.controller {
  display: flex;
  justify-content: center;
  column-gap: 20px;
}
</style>
