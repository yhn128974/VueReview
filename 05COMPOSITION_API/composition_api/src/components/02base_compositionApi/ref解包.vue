<template>
  <div>
    <!-- 当我们在template中使用ref对象，它会自动进行解包 -->
    <h2>{{ info.counter }}</h2>
    <button @click="increment">click to increment number</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    let counter = ref(100);

    let info = {
      counter,
    };

    const increment = () => {
      counter.value++;
    };
    return {
      info,
      increment,
    };
  },
};
</script>

<style>
</style>