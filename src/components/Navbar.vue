<template>
  <div class="navbar">
    <h1>My Vuex App Todos</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="auth.isAuthenticated">
        <span>Total Todos: </span>{{ todos.length }}
        <button @click="LoginOrLogout">Logout</button>
      </li>
      <li v-else><button @click="LoginOrLogout">login</button></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Navbar",
  computed: mapState(["todos", "auth"]),
  methods: {
    LoginOrLogout() {
      this.$store.commit('TOGGLE_AUTH');
    }
  }
};
</script>

<style>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>
