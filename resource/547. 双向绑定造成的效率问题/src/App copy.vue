<template>
  <div class="app-container">
    <template>
      <div class="container">
        <input
          type="text"
          @keypress.enter="addTodo"
          class="todo-content"
          v-model="newTaskContent"
          placeholder="input todo"
        />
        <button class="shuffle" @click="shuffle">随机排序</button>
        <transition-group tag="ul" name="todo" class="todo-container">
          <li v-for="item in todos" :key="item.id" class="todo">
            <span>{{ item.content }}</span>
            <button @click="finishTodo(item)">完成</button>
          </li>
        </transition-group>
      </div>
    </template>
  </div>
</template>

<script>
function randomId() {
  return Math.random()
    .toString(16)
    .substring(2, 7);
}

export default {
  data() {
    return {
      todos: [
        { id: randomId(), content: '任务1' },
        { id: randomId(), content: '任务2' },
        { id: randomId(), content: '任务3' },
      ],
      newTaskContent: '',
    };
  },
  methods: {
    addTodo() {
      this.todos.unshift({
        id: randomId(),
        content: this.newTaskContent,
      });
      this.newTaskContent = '';
    },
    finishTodo(item) {
      this.todos = this.todos.filter((it) => it !== item);
    },
    shuffle() {
      this.todos.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style scoped>
.app-container {
  width: 800px;
  display: flex;
  margin: 0 auto;
}
.container {
  margin: 1em;
  flex: 1 0 auto;
}

.container {
  margin: 1em auto;
  padding: 1.5em;
  border-radius: 5px;
}
.shuffle {
  margin: 1em 0;
}
.todo-content {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  outline: none;
  font-size: 1.3em;
  padding: 0 1em;
  border: 1px solid #ccc;
}
.todo-container {
  list-style: none;
  padding: 0;
  margin: 1em 0;
}
.todo {
  padding: 0.5em 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
}

.todo-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.todo-enter-active,
.todo-leave-active,
.todo-move {
  transition: 0.5;
}
.todo-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.todo-leave-active {
  position: absolute;
}
</style>
