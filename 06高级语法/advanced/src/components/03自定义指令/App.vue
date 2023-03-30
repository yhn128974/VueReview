<template>
  <div>
    <h2 v-format-time> {{ timestamp }}</h2>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const timestamp = 1624452193;
    return {
        timestamp,
    };
  },
};
</script>

<style>
</style>