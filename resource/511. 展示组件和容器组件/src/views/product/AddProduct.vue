<template>
  <product-form
    :formData="formData"
    @finish="handleFinish"
    submitText="新增商品"
    :loading="loading"
  />
</template>

<script setup>
import ProductForm from './components/ProductForm.vue';
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
const formData = reactive({
  name: '',
  price: 0,
  services: [],
});
const loading = ref(false);
const handleFinish = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    ElMessage.success({
      message: '添加商品成功',
    });
  }, 1000);
};
</script>
