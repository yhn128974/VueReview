<template>
  <div>
    <TabControl :titles="titles" @changeindex="changeindex" />
    <div>{{ contents[index] }}</div>
  </div>
</template>

<script>
import TabControl from "./components/Tab-control";

export default {
  components: {
    TabControl,
  },
  data() {
    return {
      index: 0,
      titles: ["clothes ", "shots ", "dress"],
      contents: [
        "this is colths page",
        "this is shots page",
        "this is dress page ",
      ],
    };
  },
  methods: {
    changeindex(index) {
      this.index = index;
    },
  },
};
</script>

<style>
</style>