<script setup>
import 'github-markdown-css/github-markdown-dark.css';
import { marked } from 'marked';
import { computed, ref, reactive, onMounted, onUpdated } from 'vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/dark.css';
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  showCursor: {
    type: Boolean,
    default: false,
  },
});

marked.setOptions({
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  },
});
const markdownContent = computed(() => {
  return marked.parse(props.content);
});

const pos = reactive({ x: 0, y: 0 });
const contentRef = ref(null);

function getLastTextNode(dom) {
  const children = dom.childNodes;
  for (let i = children.length - 1; i >= 0; i--) {
    const node = children[i];
    if (node.nodeType === Node.TEXT_NODE && /\S/.test(node.nodeValue)) {
      node.nodeValue = node.nodeValue.replace(/\s+$/, '');
      return node;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const last = getLastTextNode(node);
      if (last) {
        return last;
      }
    }
  }
  return null;
}

function updateCursor() {
  const contentDom = contentRef.value;
  const lastText = getLastTextNode(contentDom);
  const textNode = document.createTextNode('\u200b');
  if (lastText) {
    lastText.parentElement.appendChild(textNode);
  } else {
    contentDom.appendChild(textNode);
  }
  const domRect = contentDom.getBoundingClientRect();
  const range = document.createRange();
  range.setStart(textNode, 0);
  range.setEnd(textNode, 0);
  const rect = range.getBoundingClientRect();
  pos.x = rect.left - domRect.left;
  pos.y = rect.top - domRect.top;
  textNode.remove();
}

onMounted(updateCursor);
onUpdated(updateCursor);
</script>

<template>
  <div class="container">
    <div class="markdown-body" v-html="markdownContent" ref="contentRef"></div>
    <div v-show="showCursor" class="cursor"></div>
  </div>
</template>

<style scoped>
.markdown-body {
  background: inherit;
  line-height: 2;
  font-family: 'Roboto Mono';
}
.container {
  position: relative;
}
.cursor {
  content: '';
  content: '';
  position: absolute;
  width: 10px;
  height: 16px;
  background: #d5d9da;
  animation: toggle 0.6s infinite;
  opacity: 0;
  transform: translateY(3px);
  left: calc(v-bind('pos.x') * 1px);
  top: calc(v-bind('pos.y') * 1px);
}
@keyframes toggle {
  30% {
    opacity: 1;
  }
}
</style>
