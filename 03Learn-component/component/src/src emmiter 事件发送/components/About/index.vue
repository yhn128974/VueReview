<template>
  <div>
    <button @click="btnclick">btnclick</button>
  </div>
</template>

<script>
import emmiter from "../../utils/eventbus";

export default {
  methods: {
    btnclick() {
      console.log("@@@@");
      emmiter.emit("longyou", { name: "why", age: 18 });
      emmiter.emit("ethanyu", { name: "why", age: 18 })
    },
  },
};
</script>

<style>
</style>