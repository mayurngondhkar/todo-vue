import Vue from "vue";
import Vuex, { Getter, GetterTree } from "vuex";

import { dataService } from "../shared/data.service";

import {
  GET_TODOS,
  GET_STEPS,
  GET_TASKS,
  GET_STATUSES,
  GET_TODO,
  GET_STEP,
  GET_TASK,
  GET_STATUS,
  ADD_TODO,
  ADD_STEP,
  ADD_TASKS,
  ADD_STATUSES,
  UPDATE_TODO,
  UPDATE_STEPS,
  UPDATE_TASKS,
  UPDATE_STATUS,
  DELETE_TODO,
  DELETE_STEPS,
  DELETE_TASKS,
  DELETE_STATUS
} from "./mutationTypes";

Vue.use(Vuex);

declare global {
  interface Todo {
    id: number;
    name: string;
    description: string;
    order: number;
    userId: number;
    links: any;
  }

  interface Step {
    id: number;
    name: string;
    description: string;
    todoListId: number;
    orderInTodoList: number;
    userId: number;
  }

  interface Task {
    id: number;
    name: string;
    description: string;
    statusId: number;
    stepId: number;
    userId: number;
    orderInStepList: number;
  }

  interface Status {
    id: number;
    name: string;
  }

  interface State {
    todos: Todo[];
    steps: Step[];
    tasks: Task[];
    statuses: Status[];
  }
}

const state: State = {
  todos: [],
  steps: [],
  tasks: [],
  statuses: []
};

const mutations = {
  // Get lists
  [GET_TODOS](state: State, todos: Todo[]) {
    state.todos = todos;
  },
  [GET_STEPS](state: any, steps: any) {
    state.steps = steps;
  },
  [GET_TASKS](state: any, tasks: any) {
    state.tasks = tasks;
  },
  [GET_STATUSES](state: any, statuses: any) {
    state.statuses = statuses;
  }

  // Get item
  // [GET_TODO](state: State, todos: Todo[]) {
  //   state.todos = todos;
  // },
  // [GET_STEP](state: any, steps: any) {
  //   state.steps = steps;
  // },
  // [GET_TASK](state: any, tasks: any) {
  //   state.tasks = tasks;
  // },
  // [GET_STATUS](state: any, statuses: any) {
  //   state.statuses = statuses;
  // }

  // Update item
  // Post item
  // Delete item
};

const actions = {
  async getTodosAction({ commit }: any, link: string) {
    const todos = await dataService.getTodos(link);
    console.log(todos);
    commit(GET_TODOS, todos);
  },
  async getStepsAction({ commit }: any, link: string) {
    const steps = await dataService.getSteps(link);
    console.log(steps);
    commit(GET_STEPS, steps);
  },
  async getTasksAction({ commit }: any, link: string) {
    const tasks = await dataService.getTasks(link);
    console.log(tasks);
    commit(GET_TASKS, tasks);
  },
  async getStatusesAction({ commit }: any, link: string) {
    const statuses = await dataService.getStatuses(link);
    console.log(statuses);
    commit(GET_STATUSES, statuses);
  }
};

const getters: GetterTree<State, any> = {
  // getTodoById: state => id => state.todos.find(todo => todo.id === id)
  // getTodoById: state.todos => id => state.todos.find(todo => todo.id === id)
  // getTodoById: (state: {
  //   todos: { find: (arg0: (t: any) => boolean) => void };
  // }) => (id: any) => {
  //   console.log(id);
  //   state.todos.find((t: { id: number }) => t.id === 1);
  // }
  // getTodoById: state.todos => (id: any) => state.todos.find(todo => todo.id === id);
  // getTodoById: state => (id: number): Todo | undefined => state.todos.find(t => {
  //   console.log(id)
  //   console.log("Hello")
  //   t.id === id
  // })
  getTodoById: state => (id: number) => {
    console.log(id);
    const todoItem = state.todos.find((t: { id: number }) => t.id === 1);
    if (todoItem) {
      console.log("in if");
      return todoItem;
    } else {
      console.log("in else");
      return null;
    }
  }
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state,
  mutations,
  actions,
  getters
});
