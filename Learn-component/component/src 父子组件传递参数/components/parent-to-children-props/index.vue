<template>
  <div>
    <h1>{{ title }}</h1>
    <span>{{ content }}</span>
  </div>
</template>

<script>
export default {
  //   props: ["title", "content"],
  props: {
    title: String,
    content: {
      type: String,
      required: true,
      default: "Please set a content",
    },
    counter: {
      type: Number,
    },

    message_info: {
      type: Object,
      default() {
        return {
          name: "longyou",
        };
      },
    },
  },
};
</script>

<style>
</style>