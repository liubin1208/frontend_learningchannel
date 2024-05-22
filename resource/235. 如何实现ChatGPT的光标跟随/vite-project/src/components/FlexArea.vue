<script setup>
function handleChange(e) {
  const textarea = e.target;
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
}
</script>

<template>
  <textarea @input="handleChange" class="txt" rows="1"></textarea>
</template>

<style scoped>
.txt {
  border: none;
  outline: none;
  font-size: 16px;
  display: block;
  width: 100%;
  resize: none;
  line-height: 2;
  background: transparent;
  color: inherit;
}
</style>
