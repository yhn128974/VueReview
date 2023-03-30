<template>
  <div>
    <!-- teleport -->
    <teleport to="#longyou">
      <h2>当前计数</h2>
      <button>+1</button>
      <HelloWorld />
    </teleport>

    <teleport to="#longyou">
      <h2>hahhahahha</h2>
    </teleport>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
</style>