<template>
  <div>
    <h2 ref="title">哈哈哈</h2>
    <Navbar ref="navbar" />
    <button @click="btnClick">获取元素</button>

  </div>
</template>

<script>
import Navbar from "./NavBar.vue";

export default {
  data() {
    return {
      
    }
  },
  components: {
    Navbar,
  },
  methods: {
    btnClick() {
      console.log(this.$refs.title);
      console.log(this.$refs.navbar.message);
      console.log(this.$refs.navbar.sayhello());
    },
    
  },
};
</script>

<style>
</style>