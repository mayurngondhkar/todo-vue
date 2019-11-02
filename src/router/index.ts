import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "../views/Todo.vue";
import TodoItem from "../views/TodoItem.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/todoItem",
    name: "todoItem",
    component: TodoItem
  },
  {
    path: "/todo",
    name: "home",
    component: Todo
  },
  {
    path: "/",
    redirect: "/todo",
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
