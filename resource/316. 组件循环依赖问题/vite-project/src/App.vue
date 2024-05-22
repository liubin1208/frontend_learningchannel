<script setup>
import Product from './components/Product.vue';
const productData = {
  name: 'Socks',
  price: 100,
  description: 'A pair of warm, fuzzy socks',
};
</script>

<template>
  <div class="main">
    <Product :data="productData"></Product>
  </div>
</template>
