<template>
  <Comp>
    <p>default slot</p>
    <p>default slot</p>
    <p>default slot</p>
    <template #[xxxx]>
      <p>slot1</p>
    </template>
    <template #slot2="{ msg }">
      <p>slot2: {{ msg }}</p>
    </template>
  </Comp>
</template>

<script setup>
import Comp from './components/Comp2.js';
</script>
