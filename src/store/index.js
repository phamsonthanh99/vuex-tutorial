import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storeData = {
  state: {
    todos: [],
    auth: {
      isAuthenticated: false,
    },
  },
  getters: {
    doneTodos: (state) => state.todos.filter((todo) => todo.completed),
    progress: (state) =>
      Math.round(
        (state.todos.filter((todo) => todo.completed).length /
          state.todos.length) *
          100
      ),
  },
  actions: {
    async deleteTodo(context, todoId) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        context.commit("DELETE_TODO", todoId);
      } catch (error) {
        console.log(error);
      }
    },
    async addTodo(context, newTodo) {
      try {
      await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
      context.commit("ADD_TODO", newTodo);
      } catch (error) {
        console.log(error);
      }
    },
    async getTodos(context) {
      try {
        const respone = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        context.commit("SET_TODOS", respone.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    TOGGLE_AUTH(state) {
      state.auth.isAuthenticated = !state.auth.isAuthenticated;
    },
    MARK_COMPLETE(state, todoId) {
      state.todos.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    DELETE_TODO(state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
    ADD_TODO(state, newTodo) {
      state.todos.unshift(newTodo);
    },
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
  },
};

const store = new Vuex.Store(storeData);

export default store;
