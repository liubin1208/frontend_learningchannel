<template>
  <h1>Hello World</h1>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { login, profile } from './api/user';

const count = ref(0);
const router = useRouter();
const route = useRoute();
const user = reactive({});

(async () => {
  await profile();
})();
const submit = async () => {
  await login('Shae', '123123');
};
</script>
