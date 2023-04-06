<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <router-link to="/home/message" active-class="active">消息</router-link>|
    <router-link to="/home/shops" active-class="active">商品</router-link>|
    <router-link to="/home/moment" active-class="active">moment</router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>