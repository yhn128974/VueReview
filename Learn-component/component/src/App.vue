<template>
  <div>
    <p>app</p>
    <Home />
    <About />
  </div>
</template>
<script>
import Home from "./components/Home";
import About from "./components/About";

export default {
  components: {
    Home,
    About,
  },
  props: {},
};
</script>

<style>
</style>