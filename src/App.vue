<template>
  <div id="app">
    <Navbar />
    <Todos />
    <StatusBar v-if="isAuthenticated"/>
    <ProgressBar v-if="isAuthenticated"/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Todos from "./components/Todos";
import StatusBar from "./components/StatusBar";
import ProgressBar from "./components/ProgressBar";
export default {
  name: "App",
  components: { Todos, Navbar, StatusBar, ProgressBar },
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.isAuthenticated;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(219, 219, 219);
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
