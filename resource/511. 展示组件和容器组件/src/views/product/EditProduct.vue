<template>
  <product-form
    :formData="formData"
    @finish="handleFinish"
    submitText="提交修改"
    :loading="loading"
  />
</template>

<script setup>
import ProductForm from './components/ProductForm.vue';
import { reactive, ref, defineProps } from 'vue';
import { ElMessage } from 'element-plus';
import { getProduct } from '../../api/product';
const props = defineProps({
  id: String,
});
let formData = reactive({
  name: '',
  price: 0,
  services: [],
});
const loading = ref(true);
(async () => {
  const resp = await getProduct();
  formData = reactive(resp);
  loading.value = false;
})();
const handleFinish = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    ElMessage.success({
      message: '修改商品成功',
    });
  }, 1000);
};
</script>
