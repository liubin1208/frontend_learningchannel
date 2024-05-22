<template>
  <el-form
    ref="refForm"
    @submit.prevent="handleSubmit(refForm)"
    :model="formData"
    :rules="rules"
    status-icon
    label-width="80px"
    v-loading="loading"
  >
    <el-form-item label="商品名称" prop="name">
      <el-input v-model="formData.name" />
    </el-form-item>
    <el-form-item label="商品价格" prop="price">
      <el-input-number v-model="formData.price" />
    </el-form-item>
    <el-form-item label="商品服务">
      <el-checkbox-group v-model="formData.services">
        <el-checkbox v-for="s in services" :key="s" :label="s">
          {{ s }}
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item>
      <el-button native-type="submit" type="primary">
        {{ submitText }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { rules, services, formProps } from './formUIData';
const refForm = ref({});
const props = defineProps(formProps);
const emit = defineEmits(['finish']);

const handleSubmit = async (form) => {
  try {
    await form.validate();
    emit('finish');
  } catch (e) {}
};
</script>

<style scoped></style>
