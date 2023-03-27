<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="foo">按钮</button>
    <hr />
    <Home />
  </div>
</template>

<script>
import demoMixin from "./mixin/demo";
import Home from "./extend/pages/Home.vue";
export default {
  components: {
    Home,
  },
  mixins: [demoMixin],
  data() {
    return {
      title: "hello world",
      message: "this is app's message",
    };
  },
  methods: {},
  created() {
    console.log("app created running");
  },
};
</script>

<style>
</style>
