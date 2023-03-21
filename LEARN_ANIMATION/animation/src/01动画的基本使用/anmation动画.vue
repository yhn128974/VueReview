<template>
  <div class="app">
    <div>
      <button @click="isShown = !isShown">显示/隐藏</button>
    </div>

    <transition name="longyou">
      <h2 v-if="isShown" class="title">Hello world</h2>
    </transition>
  </div>
</template>

<script>
export default {
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