<template>
  <div class="container">
    <el-autocomplete
      :debounce="0"
      v-model="value"
      :fetch-suggestions="querySearch"
      placeholder="请输入关键字"
      @blur="cancel"
    ></el-autocomplete>
  </div>
</template>

<script>
import { search } from './api/search';
import { debounce } from './util';
export default {
  data() {
    return {
      value: '',
      querySearch: debounce(async function (query, cb) {
        console.log('search');
        cb(await search(query));
      }, 1000),
    };
  },
  methods: {
    cancel() {
      console.log('blur');
      // console.log(this.querySearch.cancel);
      this.querySearch.cancel();
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}
</style>
