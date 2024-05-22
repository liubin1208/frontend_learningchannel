<template>
  <div>
    <ElForm ref="formRef"></ElForm>
  </div>
</template>

<script setup lang="ts">
import { ElForm } from 'element-plus';
import { useCompRef } from './useCompRef';
const formRef = useCompRef(ElForm);
formRef.value?.validate;
</script>
