<template>
  <div>
    <p>HOME {{ name }},{{ counter }}</p>
    <button @click="changecounter">changecounter</button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    let name = inject("name");
    let counter = inject("counter");
    const changecounter = () => {
      counter.value++;
    };
    return {
      name,
      counter,
      changecounter,
    };
  },
};
</script>

<style scoped>
</style>