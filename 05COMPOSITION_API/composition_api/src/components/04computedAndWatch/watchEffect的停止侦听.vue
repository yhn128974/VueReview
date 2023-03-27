<template>
  <div>
    <ul>
      <li>{{ name }}</li>
      <li>{{ age }}</li>
    </ul>
    <button @click="changeinfo">changeinfo</button>
    <button @click="changeage">changeage</button>
  </div>
</template>

<script>
import { request } from "http";
import { ref, watchEffect } from "vue";
export default {
  setup() {
    // watchEffect:自动收集响应式依赖
    let name = ref("why");
    let age = ref(18);

    const stop = watchEffect(() => {
    
      console.log("name", name.value, "age", age.value);
    });

    const changeinfo = () => {
      name.value = "longyou";
    };

    const changeage = () => {
      age.value++;
      if (age.value > 25) {
        stop();
      }
    };

    return {
      changeinfo,
      changeage,
      name,
      age,
    };
  },
};
</script>

<style>
</style>