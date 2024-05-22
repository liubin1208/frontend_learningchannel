<template>
  <div
    class="container"
    :style="{
      backgroundImage: `url(${url})`,
    }"
  >
    <TypeSelector @change="handleChange"></TypeSelector>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import TypeSelector from './components/TypeSelector.vue';

const name = ref('');
const url = computed(() => {
  const obj = new URL(`./assets/${name.value}.jpg`, import.meta.url);
  return obj.pathname;
});
function handleChange(val) {
  console.log(val);
  name.value = val;
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
  padding-top: 30px;
  height: 100vh;
  /* background-image: url(./assets/1.jpg); */
  background-size: cover;
  background-position: center;
  transition: background-image 0.3s;
}
</style>
