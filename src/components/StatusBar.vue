<template>
  <div class="status-bar">
    <p>Done</p>
    <ul>
      <li v-for="(todo, index) in doneTodos" :key="index">{{todo.title}}</li>
    </ul>
  </div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "StatusBar",
  computed: {
      doneTodos() {
          return this.$store.getters.doneTodos;
      }
  }
};
</script>

<style>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>
