<template>
  <div>
    <p>Home</p>
    <HomeContent />
  </div>
</template>

<script>
import emitter from "@/utils/eventbus";

import HomeContent from "./HomeContent";
export default {
  components: {
    HomeContent,
  },
  providers: {
    address: "重庆",
  },

  created() {
    emitter.on("*", (type, info) => {
      console.log("listener:", type, info);
    });
  },
};
</script>

<style>
</style>