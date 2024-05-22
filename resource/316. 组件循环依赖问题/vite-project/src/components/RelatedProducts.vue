<template>
  <div class="list">
    <div class="list-item" v-for="p in products">
      <span @click="shownProduct = p" class="title">{{ p.name }}</span>
    </div>
  </div>
  <div v-if="shownProduct" class="shown">
    <Product :data="shownProduct"></Product>
  </div>
</template>

<script setup>
import Product from './Product.vue';
import { ref } from 'vue';
defineProps({
  products: {
    type: Array,
    required: true,
  },
});
const shownProduct = ref(null);
</script>

<style scoped>
.list {
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 1em;
}
.list-item {
  margin: 1em 0;
}
.title {
  color: #f40;
  cursor: pointer;
}
</style>
