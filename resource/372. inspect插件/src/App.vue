<template>
  <div>
    <!-- <ul>
      <li v-for="n in 100">
        <span v-if="n % 2 === 0">{{ n }}</span>
      </li>
    </ul> -->
    <input type="text" v-model="text" />
    <el-input v-model="text"></el-input>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const text = ref('hello world');
</script>

<style scoped></style>
