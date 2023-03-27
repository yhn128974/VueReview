<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ content }}</h2>
  </div>
</template>

<script>
import BaePage from "./BasePage.vue";
export default {
  extends: BaePage,
  data() {
    return {
      content: "hello Home",
    };
  },
};
</script>

<style>
</style>