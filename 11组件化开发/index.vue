<template id="component-b">
  <div>
    <h2>title2</h2>
    <p>this is content2</p>
    <button @click="btnClick"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "I am title",
      contents: "I am content",
    };
  },
  methods: {
    btnClick() {
      console.log("dianjikaifa");
    },
  },
};
</script>

<style>
</style>