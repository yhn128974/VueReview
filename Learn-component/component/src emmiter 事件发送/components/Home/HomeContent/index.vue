<template>
  <div>
    <p>home content name:{{ name }},age:{{ age }},length:{{ length }}</p>
  </div>
</template>

<script>
// emitter可以在任何组件关系中使用
import emitter from "@/utils/eventbus";
export default {
  inject: ["name", "age", "length"],
  created() {
    // 时间名，返回结果
    // emitter.on("longyou", (res) => {
    //   console.log(res);
    // });

    // emitter.on("ethanyu", (res) => {
    //   console.log(res);
    // });

    // emitter.on("*", (type, info) => {
    //   console.log("listener:", type, info);
    // });
  },
};
</script>

<style>
</style>