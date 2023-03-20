<template>
  <div id="tab-bar">
    <h2>main</h2>
    <Hello />
  </div>
</template>

<script>
import Hello from "./Hello.vue";
export default {
  components: {
    Hello,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  color: rgb(238, 17, 17);
}
</style>