<template>
  <div>
    <MyInput ref="inputRef" v-model="data" placeholder="地址">
      <template #prepend>
        <el-select placeholder="Select" style="width: 115px">
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
      <template #append>
        <el-button :icon="Search" />
      </template>
    </MyInput>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import MyInput from './components/MyInput.vue';
import { Search } from '@element-plus/icons-vue';
const data = ref('');
const inputRef = ref(null);

onMounted(() => {
  console.log(inputRef.value);
  inputRef.value.focus();
});
</script>
