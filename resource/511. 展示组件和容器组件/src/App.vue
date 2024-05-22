<template>
  <div class="container">
    <div class="item">
      <add-product />
    </div>
    <div class="item">
      <edit-product id="1" />
    </div>
  </div>
</template>
<script setup>
import AddProduct from './views/product/AddProduct.vue';
import EditProduct from './views/product/EditProduct.vue';
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 300px;
}
.item {
  margin: 10px;
  padding: 20px;
  border: 1px dashed #ccc;
  border-radius: 10px;
}
</style>
