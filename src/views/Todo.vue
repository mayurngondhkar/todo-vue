<template>
<div>
    Hello
    <button @click="loadTodos()">
      Load todos
    </button>
    <button @click="loadSteps()">
      Load steps
    </button>
    <button @click="loadTasks()">
      Load tasks
    </button>
    <button @click="loadStatuses()">
      Load statuses
    </button>
    <!-- {{console.log(todo)}} -->
    <!-- <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.name }}
      </li>
    </ul> -->
    <TodoItem

    >

</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
// import TodoItem from '@/views/TodoItem';

export default {
  name: "todo",
  // components: {
  //   TodoItem
  // },
  async created() {
    await this.loadTodos();
  },
  methods: {
    // ...mapActions({getTodosAction: 'getTodosAction'}),
    ...mapActions({getTodosAction: 'getTodosAction', getStepsAction: 'getStepsAction', getTasksAction: 'getTasksAction', getStatusesAction: 'getStatusesAction'}),
      async loadTodos() {
        await this.getTodosAction("/api/v1/todolists");
      },
      async loadSteps() {
        await this.getStepsAction("/api/v1/todolists/1/steps");
      },
      async loadTasks() {
        await this.getTasksAction("/api/v1/todolists/1/steps/1/tasks");
      },
      async loadStatuses() {
        await this.getStatusesAction("/api/v1/states");
      }
  },
  computed: {
    ...mapState({ todo: 'todo'})
  },
};
</script>
