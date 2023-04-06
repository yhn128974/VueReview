<template>
  <div>
    <h2>User:{{ $route.params.username }}</h2>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    let route = useRoute();
    console.log(route.params.username);
  },
  created() {
    console.log(this.$route.params.username);
  },
};
</script>

<style>
</style>