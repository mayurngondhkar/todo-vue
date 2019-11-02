<template>
  <div>
    {{ todoItem }}
    hello
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
const blah = "hellllll";
export default {
  name: "todoItem",
  props: {
      todo
  },
  data() {
    return {
      todoItem: {}
    };
  },
  async created() {
    // this.todoItem = { ...this.getTodoById(1) };
    const todoitem = { ...this.getTodoById(1) };
    console.log("In created");
    console.log(todoitem.type);
    // console.log(todoItem)
    if (todoitem == null) {
      console.log("in blah");
      await this.loadTodos();
    }
  },
  methods: {
    ...mapActions({ getTodosAction: "getTodosAction" }),
    async loadTodos() {
      await this.getTodosAction("/api/v1/todolists");
    }
  },

  computed: {
    ...mapState({ todo: "todo" }),
    ...mapGetters({ getTodoById: "getTodoById" })
  }
};
</script>
