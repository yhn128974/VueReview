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
import { ref, watchEffect } from "vue";
export default {
  setup() {
    // watchEffect:自动收集响应式依赖
    let name = ref("why");
    let age = ref(18);

    const stop = watchEffect((onInvalidate) => {
      const timer = setTimeout(() => {
        console.log("网络请求成功");
      }, 2000);

      // 根据name和age两个变量发送网络请求
      onInvalidate(() => {
        // 在这个函数中清除额外的副作用
        // request.cancel();
        clearTimeout(timer);
        console.log("onInvalidate");
      });
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