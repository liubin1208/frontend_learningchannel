<template>
  <form @submit="onSearch" class="search-container">
    <div class="search-box">
      <input
        v-model="query"
        class="search-input"
        type="text"
        placeholder="搜索"
      />
      <button type="submit" class="search-button">
        <span class="search-icon">&#128269;</span>
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
const query = ref('');
function onSearch(e) {
  e.preventDefault();
  console.log('搜索', query.value);
}
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
}
.search-box {
  position: relative;
  margin-top: 1em;
}

.search-input {
  width: 200px;
  height: 35px;
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: #66afe9;
  box-shadow: 0 0 5px rgba(102, 175, 233, 0.5);
}

.search-button {
  position: absolute;
  top: 0;
  right: 0;
  width: 35px;
  height: 35px;
  background-color: #66afe9;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-button:hover {
  background-color: #428bca;
}

.search-icon {
  color: white;
  font-size: 18px;
}
</style>
