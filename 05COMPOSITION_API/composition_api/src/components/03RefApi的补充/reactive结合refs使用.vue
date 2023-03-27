<template>
  <div>
    <p>{{ age }},{{ name }}</p>
    <button @click="changeAge">click here to change</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const info = reactive({
      name: "vue",
      age: "18",
    });

    let { name } = info;
    //  toRefs:将reactive对象中的所有属性都转成ref，建立链接
    // let { name, age } = toRefs(info);
    // toRefs:将reactive对象中的单个属性都转成ref，建立链接
    let { age } = toRefs(info, "age");

    function changeAge() {
      age.value++;
    }

    return {
      // info,
      name,
      age,
      changeAge,
    };
  },
};
</script>

<style>
</style>