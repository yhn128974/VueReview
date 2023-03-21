<template>
  <div class="app">
    <div>
      <button @click="isShown = !isShown">显示/隐藏</button>

      <transition name="longyou" mode="out-in" appear>
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
.app {
  width: 200px;
  margin: 0 auto;
}
.title {
  display: inline-block;
}
.longyou-enter-active {
  animation: bounce 1s ease;
}
.longyou-leave-active {
  animation: bounce 1s reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>