<template>
  <div>
    <h1>Test</h1>
    <button @click="test">点击调用方法 M</button>
  </div>
</template>

<script>
const m = () => {
  console.log('method call!');
};

export default {
  methods: {
    m,
    test() {
      console.log(this.m === m);
    },
  },
};
</script>
