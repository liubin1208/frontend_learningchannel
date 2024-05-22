<template>
  <img :src="url" ref="imgRef" />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useUrl, useWidth } from './useScale';
const props = defineProps({
  src: {
    type: String,
  },
  imgSet: {
    type: Array,
    default: () => [],
  },
});
const imgRef = ref(null);
const { width } = useWidth(imgRef);
const { url } = useUrl(
  width,
  computed(() => props.src),
  computed(() => props.imgSet)
);
</script>
