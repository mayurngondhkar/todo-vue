<template>
  <div class="Todo">
    <TodoList msg="Welcome to the todo list" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";

export default {
  name: "todo",
  components: {
    TodoList
  }
};
</script>
