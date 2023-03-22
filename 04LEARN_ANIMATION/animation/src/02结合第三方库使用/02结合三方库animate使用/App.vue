<template>
  <div class="app">
    <div>
      <button @click="isShown = !isShown">显示/隐藏</button>

      <!-- <transition name="longyou" mode="out-in" appear>
        <component :is="isShown ? 'Home' : 'About'"></component>
      </transition> -->

      <transition enter-active-class="animate__bounceInUp" >
        <component :is="isShown ? 'Home' : 'About'"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
export default {
  components: {
    Home,
    About,
  },
  data() {
    return {
      isShown: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
/* .longyou-enter-active,
.longyou-leave-active {
  animation: bounceInUp 1s ease-in;
} */
</style>