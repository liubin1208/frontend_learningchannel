<template>
  <ScaleImage
    src="http://localhost/spring.jpeg"
    style="width: 500px"
    :imgSet="[500, 1000, 2000, 3000]"
  ></ScaleImage>
</template>

<script setup>
import ScaleImage from './components/ScaleImage.vue';
</script>

<style scoped></style>
