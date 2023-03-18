<template>
  <div>
    this is about
    <button @click="&quot;butnclick&quot;;"></button>
  </div>
</template>

<script>
import emmiter from "./utils/eventbus";

export default {
  methods: {
    butnclick() {
      console.log("hello there");
      emmiter.emit("why", {
        name: "longyou",
        age: "23",
      });
    },
  },
};
</script>

<style>
</style>