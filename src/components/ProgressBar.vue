<template>
  <div class="progress-bar">
    <p>Progress: {{ progress }} %</p>
  </div>
</template>

<script>
export default {
  name: "Progressbar",
  computed: {
    progress() {
      return this.$store?.getters?.progress || '0';
    },
  },
};
</script>

<style>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>
