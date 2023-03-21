<template>
  <div class="app">
    <div>
      <button @click="isShown = !isShown">显示/隐藏</button>

      <!-- <transition name="longyou" mode="out-in" appear>
        <component :is="isShown ? 'Home' : 'About'"></component>
      </transition> -->

      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <component :is="isShown ? 'Home' : 'About'"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import gsap from "gsap";
// const gsap = require("gsap");
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
  methods: {
    // beforeEnter() {
    //   console.log("beforeEnter");
    // },
    enter(el, done) {
      console.log("enter");
      gsap.from(el, {
        scale: 0,
        x: 200,
        onComplete: done,
      });
    },
    // afterEnter() {
    //   console.log("afterEnter");
    // },
    // beforeLeave() {
    //   console.log("beforeLeave");
    // },
    leave(el, done) {
      console.log("leave");
      gsap.to(el, {
        scale: 0,
        x: 200,
        onComplete: done,
      });
    },
    // afterLeave() {
    //   console.log("afterLeave");
    // },
  },
};
</script>

<style scoped>
/* .longyou-enter-active,
.longyou-leave-active {
  animation: bounceInUp 1s ease-in;
} */
</style>