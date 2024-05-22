<template>
  <div class="demo">
    <div class="controls">
      <div class="btns">
        <button class="btn" @click="add">新增</button>
        <button class="btn" @click="remove">删除</button>
      </div>
      <div class="item" v-for="score in scores" :key="score[0]">
        <span>{{ score[0] }}：</span>
        <input type="range" min="0" :max="maxScore" v-model="score[1]" />
        <span>{{ score[1] }}</span>
      </div>
    </div>
    <PolygonScore
      :size="size"
      :maxScore="maxScore"
      :scores="scores"
    ></PolygonScore>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import PolygonScore from './components/PolygonScore/PolygonScore.vue';
import { PolygonScores } from './components/PolygonScore/PolygonScoreTypes';
const size = ref(300);
const maxScore = ref(100);
const scores = reactive<PolygonScores>([]);
for (let i = 0; i < 5; i++) {
  scores.push([`数据${i + 1}`, Math.floor(Math.random() * maxScore.value)]);
}
function add() {
  scores.push([
    `数据${scores.length + 1}`,
    Math.floor(Math.random() * maxScore.value),
  ]);
}
function remove() {
  scores.pop();
}
</script>

<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
}
.controls {
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 10px;
  width: 300px;
}
.controls input {
  width: 200px;
}
.btns {
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 20px;
}
.btn {
  border: none;
  outline: none;
  background: #409eff;
  color: #fff;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.btn:hover {
  background: #66b1ff;
}
.btn:active {
  background: #3a8ee6;
}
.btn:disabled {
  background: #66b1ff80;
  cursor: not-allowed;
}
</style>
