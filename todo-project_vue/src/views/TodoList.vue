<template>
  <div>
    <h1>Todo List</h1>
    <form @submit.prevent="addTodo()">
      <el-input placeholder="To do" v-model="todo"></el-input>
    </form>
    <el-row :gutter="12">
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        @removeToDo="removeTodo(index)"
      />
    </el-row>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem';

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data() {
    return {
      todo: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.todo);
      this.todo = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>
