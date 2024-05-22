<script setup></script>

<template>
  <div class="container">
    <div v-slide-in class="item">1</div>
    <div v-slide-in class="item">2</div>
    <div v-slide-in class="item">3</div>
    <div v-slide-in class="item">4</div>
    <div v-slide-in class="item">5</div>
    <div v-slide-in class="item">6</div>
    <div v-slide-in class="item">7</div>
    <div v-slide-in class="item">8</div>
    <div v-slide-in class="item">9</div>
    <div v-slide-in class="item">10</div>
  </div>
</template>

<style scoped>
.container {
  margin: 1em auto;
  width: 80%;
}
.item {
  width: 100%;
  aspect-ratio: 2/1;
  margin: 5vw 0;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10vw;
  color: #fff;
}
.item:nth-child(3n + 1) {
  background-color: #fb5d56;
}
.item:nth-child(3n + 2) {
  background-color: #ffbd2e;
}
.item:nth-child(3n) {
  background-color: #28c840;
}
</style>
