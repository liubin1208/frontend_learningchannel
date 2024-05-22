<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { getEmployees } from '../api/emp';
import { listenMsg } from '../crossTagMsg';
const emps = ref([]);
const loading = ref(true);
(async () => {
  emps.value = await getEmployees();
  loading.value = false;
})();

const columns = [
  {
    title: '员工姓名',
    dataIndex: 'name',
  },
  {
    title: '性别',
    dataIndex: 'sex',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '月薪',
    dataIndex: 'salary',
  },
  {
    title: '操作',
    dataIndex: 'operation',
  },
];
let unHandler;
onMounted(() => {
  // 监听消息
  unHandler = listenMsg((type, payload) => {
    if (type === 'add-emp') {
      emps.value.unshift(payload);
    }
  });
});

onUnmounted(() => {
  unHandler && unHandler();
});
</script>

<template>
  <a target="_blank" href="/new" class="link ant-btn ant-btn-primary">新增</a>
  <a-table :loading="loading" :data-source="emps" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'sex'">
        {{ record.sex === 0 ? '女' : '男' }}
      </template>
      <template v-if="column.dataIndex === 'operation'">
        <a
          target="_blank"
          class="ant-btn ant-btn-link"
          :href="`/edit/${record.id}`"
        >
          编辑
        </a>
        <a-button type="link" danger>删除</a-button>
      </template>
    </template>
  </a-table>
</template>

<style scoped>
.link {
  float: right;
  margin-bottom: 1em;
  padding: 0 30px;
}
</style>
