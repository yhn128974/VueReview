<template>
  <div>
    <!-- 当我们在template中使用ref对象，它会自动进行解包 -->
    <h2>{{ counter }}</h2>
    <button @click="increment">click to increment number</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  setup() {
    // const state = reactive({
    //   title: "the title is from setup",
    //   number: 0,
    // });

    // const increment = () => {
    //   state.number++;
    // };

    // 通过ref将counter变成一个可响应式的引用
    let counter = ref(100);
    const increment = () => {
      console.log(counter);
      counter.value++;
    };

    return {
      // state,
      counter,
      increment,
    };
  },
};
</script>

<style>
</style>