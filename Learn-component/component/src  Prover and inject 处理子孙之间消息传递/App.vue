<template>
  <div>
    <p>app</p>
    <h2>{{ name }}</h2>
    <button @click="changeLength">changeLength</button>
    <Home />
    <About />
  </div>
</template>
<script>
import Home from "./components/Home";
import About from "./components/About";
// 导入computed计算方法
import { computed } from "vue";
export default {
  provide() {
    return {
      name: "longyou",
      age: "20",
      length: computed(() => this.names.length),
    };
  },
  components: {
    Home,
    About,
  },
  data() {
    return {
      names: ["longyou", "abs", "sdsd"],
    };
  },
  methods: {
    changeLength() {
      this.names.push("longyou");
    },
  },
  props: {},
};
</script>

<style>
</style>