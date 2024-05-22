<template>
  <div class="controller">
    <Button @click="openMsg">显示提示框</Button>
  </div>
</template>

<script setup>
import Button from './components/Button.vue';
import { showMsg } from './utils/message';
function openMsg() {
  showMsg('xxxxasdfsaf', (close) => {
    close();
  });
}
</script>

<style scoped>
.controller {
  display: flex;
  justify-content: center;
  column-gap: 20px;
}
</style>
