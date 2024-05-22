<template>
  <div class="top">
    <ChatContent :showCursor="showCursor" :content="content"></ChatContent>
  </div>
  <!-- <div class="bottom">
    <FlexArea></FlexArea>
  </div> -->
</template>

<script setup>
import { ref } from 'vue';
import FlexArea from './components/FlexArea.vue';
import ChatContent from './components/ChatContent.vue';

const markdown = `实现AJAX有两种方式：

1. XHR
2. fetch api

其中，**XHR**的实现方式是：

\`\`\`js
const xhr = new XMLHttpRequest();
// ...
\`\`\`

而**fetch api**的实现方式是：

\`\`\`js
fetch(options)
// ...
\`\`\``;
const content = ref('');
const showCursor = ref(true);
let index = 0;
let timerId = setInterval(() => {
  if (index >= markdown.length) {
    clearInterval(timerId);
    showCursor.value = false;
    return;
  }
  content.value += markdown[index++];
}, 100);
</script>

<style scoped>
.top {
  background: #40414e;
  color: #d1d5db;
  padding: 12px 24px;
  border-bottom: 1px solid rgba(32, 33, 35, 0.5);
  width: 80%;
  margin: 0 auto;
  margin-top: 1em;
  line-height: 2;
}
.bottom {
  position: fixed;
  z-index: 100;
  bottom: 30px;
  width: 90%;
  max-width: 768px;
  background: #40414f;
  border-radius: 6px;
  border: 1px solid rgba(32, 33, 35, 0.5);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 15px 0px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  color: #fff;
}
</style>
