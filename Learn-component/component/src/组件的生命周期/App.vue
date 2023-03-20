<template>
  <div>
    app

    <button @click="handleChangeIsshow">change component</button>
    <hr />
    <template v-if="isShow"> <Home /></template>
  </div>
</template>

<script>
import Home from "./Home";
export default {
  components: {
    Home,
  },
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    handleChangeIsshow() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style>
</style>