<template>
  <h1 @click="handleClick">Hello, Vue-Cli</h1>
</template>

<script>
export default {
  methods: {
    handleClick() {
      const arr = new Array(100000).fill(0);
      console.log(arr);
    },
  },
};
</script>
